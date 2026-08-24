import { onSettled, Loading, createEffect, Show, createSignal } from "solid-js";
import Graph from "graphology";
import { random } from "graphology-layout";


type NetworkGraphProps = {
  data: {
    nodes: {
      [key: string]: {
        id: string;
        size: number;
        label: string;
        color: string;
      }
    };
    edges: {
      source: string;
      target: string;
      label: string;
    }[];
  };
};

export function NetworkGraph(props: NetworkGraphProps) {
  const [clickedNodeId, setClickedNodeId] = createSignal<number | null>(null);

  let container!: HTMLDivElement;
  let popupRef!: HTMLDivElement;

  // Deliberately not importing Sigma / GPU FA2 at module scope.
  // These are created only after onSettled() on the client.
  let renderer: any;
  let layout: any;

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
      graph.clear();

      for (const [id, node] of Object.entries(data.nodes)) {
        graph.addNode(id, {
          size: node.size,
          label: node.label,
          color: node.color,
        });
      }

      for (const edge of data.edges) {
        if (graph.hasNode(edge.source) && graph.hasNode(edge.target)) {
          graph.addEdge(edge.source, edge.target, {label: edge.label});
        }
      }

      // Initial positions are needed before FA2 starts.
      random.assign(graph);

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
        }
      ] = await Promise.all([
        import("sigma"),
        import("@sigma/layout-fa2-gpu"),
        import("graphology-layout-forceatlas2"),
        import("sigma/rendering")
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
          }
        },
        styles: {
          nodes: {
            ...DEFAULT_STYLES.nodes,
            size: 0.5,
            color: { attribute: "color" },
            labelSize: 20,
            label: { attribute: "label" },
            labelPosition: "right",
            x: { attribute: "x" },
            y: { attribute: "y" },
          },

          edges: {
            ...DEFAULT_STYLES.edges,
            size: 0.1,
            label: { attribute: "label", },
            labelSize: 10,
            labelPosition: "auto",
            "head": "arrow",

          },
        },

        settings: {
          allowInvalidContainer: true,
          enableNodeDrag: true,

          // Same behaviour you had previously.
          autoRescale: true,
          stagePadding: 20,
          autoRescaleContent: "labels",
          renderEdgeLabels: true,
        },
      });

      renderer.on("clickNode", ({ node }: any) => {
        setClickedNodeId(node)
      })

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
      <div class="flex gap-2 relative">
        {/*<button
          type="button"
          onClick={() => {
            console.log(layout);
            layout.start();
          }}
        >
          Layout
        </button>

        <button type="button" onClick={() => layout?.stop()}>
          Stop
          </button>*/}
        <Show when={clickedNodeId()}>
          <div ref={popupRef} class="bg-slate-200 shadow-2xl p-3 max-w-48 absolute rounded-sm z-50"><button onClick={() => setClickedNodeId(null)} class="block font-semibold text-sm uppercase mb-8">close</button><h1 class="text-lg font-serif font-bold">{props.data.nodes[clickedNodeId() as number].label}</h1> is someone about whom we know nothing yet</div>
        </Show>
      </div>



      <div class="w-full h-full max-h-screen" ref={container} />
    </>
  );
}

export default function Network() {
  const data = {
    nodes: {
      "a":
      {
        id: "a",
        size: 1,
        label: "Maximilian I.",
        color: "blue",
      },
      "b": {
        id: "b",
        size: 1,
        label: "Bianca Maria Sforza",
        color: "red",
      },
      "c": {
        id: "c",
        size: 1,
        label: "Homer Simpson",
        color: "red",
      },
      "d": {
        id: "d",
        size: 1,
        label: "Krusty the Clown",
        color: "red",
      },
    },

    edges: [
      { source: "a", target: "b", label: "is wife of" },
      { source: "b", target: "c", label: "favourite Simpsons character" },
      { source: "a", target: "c", label: "favourite Simpsons character" },
      {
        source: "a",
        target: "d",
        label: "second favourite Simpsons character",
      },
    ],
  };

  return (
    <Loading>
      <NetworkGraph data={data} />
    </Loading>
  );
}
