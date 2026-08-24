import { onSettled, onCleanup } from "solid-js";
import Graph from "graphology";

export default function Network() {

  let container;
  let renderer;

  onSettled(async () => {
    console.log("on settled")
    const { default: Sigma } = await import("sigma");
    const graph = new Graph();
    graph.addNode("a", { x: 0, y: 0, size: 5, label: "A", color: "blue" });
    graph.addNode("b", { x: 1, y: 1, size: 5, label: "B", color: "red" });
    graph.addEdge("a", "b");

    console.log("container size:", container.clientWidth, container.clientHeight);
    renderer = new Sigma(graph, container);
  });



  return <div class="bg-amber-400" ref={container} style={{ width: "600px", height: "400px" }} >arse</div>;
}
