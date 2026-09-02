import { onSettled, Loading, createEffect, Show, createSignal } from "solid-js";
import Graph from "graphology";
import { random } from "graphology-layout";
import seedrandom from "seedrandom";
import { FullNodeState } from "sigma/types";
import { paths } from "../router";
import { useSearchParams } from "@solidjs/router";

// Initialize with a seed
const rng = seedrandom("ASDF"); // Seed with string "hello"

type NetworkGraphProps = {
  data: {
    nodes: {
      [key: string]: {
        id: string;
        size: number;
        label: string;
        color: string;
      };
    };
    edges: {
      source: string;
      target: string;
      label: string;
    }[];
  };
};

export function NetworkGraph(props: NetworkGraphProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  let container!: HTMLDivElement;
  let popupRef!: HTMLDivElement;

  // Deliberately not importing Sigma / GPU FA2 at module scope.
  // These are created only after onSettled() on the client.
  let renderer: any;
  let layout: any;

  // Tracks the currently selected node id. Read by the nodeReducer below;
  // updated in the clickNode handler. Plain closure state — never written
  // to Graphology.


  // Graphology itself is safe to create during SSR.
  const graph = new Graph();

  let ready = false;
  let disposed = false;

  /*
   * Keep Graphology in sync with props.data.
   *
   * This also runs during SSR, which is fine because Graphology does not
   * require browser APIs.
   */
  createEffect(
    () => props.data,
    (data) => {
      //graph.clear();

      for (const [id, node] of Object.entries(data.nodes)) {
        if (!graph.nodes().includes(id)) {
          graph.addNode(id, {
            size: node.size,
            label: node.label,
            color: node.color,
            x: Math.random(),
            y: Math.random(),
          });
        }
      }

      for (const edge of data.edges) {
        try {
          if (graph.hasNode(edge.source) && graph.hasNode(edge.target)) {
            graph.addEdge(edge.source, edge.target, { label: edge.label });
          }
        } catch (UsageGraphError) {}
      }

      // Initial positions are needed before FA2 starts.
      random.assign(graph, { rng: rng });

      if (ready) {
        renderer?.refresh();
        layout?.start();
      }
    },
  );

  onSettled(() => {
    void (async () => {
      console.log("initialising graph");

      /*
       * Everything here is lazy-loaded because these packages may touch
       * browser/WebGL/WebGPU APIs during module evaluation.
       */
      const [
        { default: Sigma, DEFAULT_STYLES },
        { ForceAtlas2GPULayout },
        { default: forceAtlas2 },
        {
          extremityArrow,
          layerDashed,
          layerFill,
          layerGradient,
          layerPlain,
          pathCurved,
          pathCurvedS,
          pathLine,
          pathStepCurved,
          sdfCircle,
          sdfTriangle,
        },
      ] = await Promise.all([
        import("sigma"),
        import("@sigma/layout-fa2-gpu"),
        import("graphology-layout-forceatlas2"),
        import("sigma/rendering"),
      ]);

      if (disposed) {
        return;
      }

      /*
       * Create Sigma renderer.
       *
       * Sigma is the WebGL renderer; GPU ForceAtlas2 uses the renderer
       * instance to manage the GPU layout.
       */
      renderer = new Sigma(graph, container, {
        primitives: {
          edges: {
            extremities: [extremityArrow()],
          },
        },
        styles: {
          nodes: {
            ...DEFAULT_STYLES.nodes,
            size: 0.4,
            color: { attribute: "color" },
            labelSize: 12,
            label: { attribute: "label" },
            labelPosition: "right",
            x: { attribute: "x" },
            y: { attribute: "y" },
          },

          edges: {
            ...DEFAULT_STYLES.edges,
            size: 0.1,
            label: { attribute: "label" },
            labelSize: 6,
            labelPosition: "auto",
            head: "arrow",
          },
        },

        settings: {
          allowInvalidContainer: true,
          enableNodeDrag: false,

          // Same behaviour you had previously.
          autoRescale: true,
          stagePadding: 20,
          autoRescaleContent: "labels",
          renderEdgeLabels: true,
        },

        // Runs after styles are computed, so `data` already has the
        // graph's own color resolved — we just override it for whichever
        // node is currently selected.
        nodeReducer: (key, data) => {
          if (key === searchParams.selectedNode) {
            return { ...data, color: "green" };
          }
          return data;
        },
      });

      renderer.on("clickNode", (t: any) => {
        const previousSelectedNodeId = searchParams.selectedNode;


        // Only the previously selected and newly selected nodes need their
        // display data recomputed (i.e. the reducer re-run) — no need to
        // reprocess the whole graph.
        renderer.refresh({
          partialGraph: {
            nodes: [previousSelectedNodeId, t.node].filter(Boolean) as string[],
          },
        });

        setSearchParams({ selectedNode: t.node }, { replace: true });
      });

      renderer.on("nodeDragStart", ({ allDraggedNodes }: any) => {
        for (const node of allDraggedNodes) {
          layout.setNodeFixed(node, true);
        }
      });

      renderer.on("nodeDragEnd", ({ allDraggedNodes }: any) => {
        for (const node of allDraggedNodes) {
          layout.setNodeFixed(node, false);
        }
      });

      /*
       * Get sensible FA2 settings from the graph.
       *
       * This is the same approach used by Sigma's official GPU FA2 example.
       */
      const inferred = forceAtlas2.inferSettings(graph);

      /*
       * GPU ForceAtlas2.
       *
       * IMPORTANT:
       * Unlike the old worker layout, this takes the Sigma renderer,
       * not the Graphology graph.
       */
      layout = new ForceAtlas2GPULayout(renderer, {
        quadTreeTheta: 0.5,

        iterationsPerFrame: "auto",

        gravity: inferred.gravity ?? 1,
        scalingRatio: inferred.scalingRatio ?? 1,
        slowDown: inferred.slowDown ?? 1,
        strongGravityMode: inferred.strongGravityMode ?? false,

        /*
         * 0 means don't continually copy the GPU positions back into
         * Graphology. Sigma can render the GPU positions directly.
         *
         * Use Infinity instead if you want the final positions permanently
         * backported into the Graphology graph.
         */
        backportInterval: 0,
      });

      ready = true;

      console.log("Sigma dimensions:", renderer.getDimensions());

      // Start the initial layout.
      layout.start();
    })();

    /*
     * onCleanup can run before the async imports finish, hence `disposed`.
     */
    return () => {
      disposed = true;

      if (layout) {
        layout.stop();
        layout.kill();
        layout = undefined;
      }

      if (renderer) {
        renderer.kill();
        renderer = undefined;
      }
    };
  });

  return (
    <>
      <div class="bg-green-400 fixed z-10 top-30 right-0 min-h-fit w-48 rounded-l-sm shadow-md pb-0 flex flex-col">
        <Show
          when={searchParams.selectedNode}
          fallback={
            <div class="text-sm">Click a node on the graph to view</div>
          }
        >
          {(nodeId) => (
         <>
              <div class="font-serif p-4">
                {props.data.nodes[parseInt(nodeId() as string)].label}
              </div>

                <a class="bg-green-600 font-semibold text-white text-xs uppercase py-2 px-2 h-fit rounded-b-sm" href={paths.person(nodeId())}>View full info</a>

            </>
          )}
        </Show>
      </div>

      <div class="w-full h-full max-h-screen" ref={container} />
    </>
  );
}

export default function Network() {
  const data = {
    nodes: {
      53338: {
        id: 53338,
        size: 1,
        label: "Maximilian I.",
        color: "blue",
      },
      53139: {
        id: 53139,
        size: 1,
        label: "Bianca Maria Sforza",
        color: "red",
      },
      c: {
        id: "c",
        size: 1,
        label: "Homer Simpson",
        color: "red",
      },
      d: {
        id: "d",
        size: 1,
        label: "Krusty the Clown",
        color: "red",
      },
    },

    edges: [
      { source: 53338, target: 53139, label: "is wife of" },
      { source: 53139, target: "c", label: "favourite Simpsons character" },
      { source: 53338, target: "c", label: "favourite Simpsons character" },
      {
        source: 53338,
        target: "d",
        label: "second favourite Simpsons character",
      },
    ],
  };

  const [currentData, setCurrentData] = createSignal(data);

  const addMoreData = () => {
    setCurrentData({
      nodes: {
        ...currentData().nodes,
        e: {
          id: "e",
          size: 1,
          label: "Gilbert Jessop",
          color: "red",
        },
      },
      edges: [
        ...currentData().edges,
        {
          source: 53338,
          target: "e",
          label: "admired cricketer",
        },
      ],
    });
  };

  return (
    <Loading>
      <button onClick={addMoreData}>CLICK</button>
      <div class=" h-full w-full">
        <NetworkGraph data={currentData()} />
      </div>
    </Loading>
  );
}
