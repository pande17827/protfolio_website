import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./VisualGraph.module.css";
import profile1 from "../../assets/image.png"; // Replace with actual images
import profile2 from "../../assets/image.png"
const VisualGraph = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 400,
      height = 400;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("class", styles.svgContainer);

    const nodes = [
      { id: "center", x: width / 2, y: height / 2, radius: 25, img: profile1 },
      { id: "n1", radius: 12, img: profile2 },
      { id: "n2", radius: 12 },
      { id: "n3", radius: 12 },
      { id: "n4", radius: 12 },
      { id: "n5", radius: 12 },
      { id: "n6", radius: 12 },
    ];

    const links = nodes.slice(1).map((node) => ({ source: "center", target: node.id }));

    const simulation = d3
      .forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("link", d3.forceLink(links).id((d) => d.id).distance(100))
      .on("tick", ticked);

    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", styles.link);

    const node = svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("g");

    node
      .append("circle")
      .attr("class", (d) => (d.id === "center" ? styles.centerNode : styles.node))
      .attr("r", (d) => d.radius);

    node
      .append("image")
      .attr("href", (d) => d.img || "")
      .attr("width", 24)
      .attr("height", 24)
      .attr("x", -12)
      .attr("y", -12)
      .attr("clip-path", "circle(12px)");

    function ticked() {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    }
  }, []);

  return <svg ref={svgRef} className={styles.graphContainer}></svg>;
};

export default VisualGraph;
