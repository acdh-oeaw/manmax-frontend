import { onSettled, Loading, createEffect } from "solid-js";
import Graph from "graphology";
import { random } from "graphology-layout";

type NetworkGraphProps = {
  data: {
    nodes: {
      id: string;
      //x: number;
      //y: number;
      size: number;
      label: string;
      color: string;
    }[];
    edges: { source: string; target: string }[];
  };
};

export function NetworkGraph(props: NetworkGraphProps) {
  let container!: HTMLDivElement;
  let renderer;
  let layout;

  const graph = new Graph();

  createEffect(
    () => props.data,
    (data: NetworkGraphProps["data"]) => {
      for (const node of data.nodes) {
        graph.addNode(node.id, node);
      }
      for (const edge of data.edges) {
        graph.addEdge(edge.source, edge.target);
      }
      random.assign(graph);
      if (layout!) {
        layout.start()
      }
    },
  );

  onSettled(() => {
    void (async () => {
      console.log("on settled");
      const { default: FA2Layout } =
        await import("graphology-layout-forceatlas2/worker");
      layout = new FA2Layout(graph, {
        settings: {
          gravity: 1,
          scalingRatio: 10,

        },
      });

      const { default: Sigma } = await import("sigma");
      renderer = new Sigma(graph, container, { allowInvalidContainer: true,     enableNodeDrag: true, });
      layout.start()
    })();
  });

  return (
    <>
      <button onClick={() => layout!.start()}>Layout</button><button onClick={() => layout!.stop()}>Stop</button>
      <div class="bg-amber-400 w-full h-full max-h-screen" ref={container} />
    </>
  );
}

export default function Network() {
  const data = {
    nodes: [
      {
        id: "a",
        //x: 1,
        //y: 2,
        size: 5,
        label: "A",
        color: "blue",
      },
      {
        id: "b",
        //x: 2,
        //y: 1,
        size: 5,
        label: "B",
        color: "red",
      },
      {
        id: "c",
        //x: 2,
        //y: 1,
        size: 5,
        label: "C",
        color: "red",
      },
    ],
    edges: [{ source: "a", target: "b" }, {source: "b", target: "c"}],
  };

  return (
    <Loading>
      <NetworkGraph data={data} />
    </Loading>
  );
}
