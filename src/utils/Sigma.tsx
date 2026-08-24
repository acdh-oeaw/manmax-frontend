import { clientOnly } from "@solidjs/web";
import { onSettled } from "solid-js";
import Graph from "graphology";
import Sigma from "sigma"

const SigmaGraph = (props) => {
  let sigmaGraphContainer!: HTMLDivElement;



  // Instantiate sigma.js and render the graph
  /* onSettled(() => {


    const graph = new Graph();
    graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 1, color: "blue" });
    graph.addNode("2", { label: "Node 2", x: 10, y: 10, size: 2, color: "red" });
    graph.addEdge("1", "2", { size: 0.5, color: "purple" });

    const renderer = new Sigma(graph, sigmaGraphContainer, {
      settings: { autoRescaleContent: "nodes" },
    });
  }); */

  return (
    <div class="h-full w-full" ref={sigmaGraphContainer}>

      Here it is
    </div>
  );
};

export default SigmaGraph;
