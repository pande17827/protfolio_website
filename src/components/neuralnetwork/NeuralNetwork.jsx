import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./NeuralNetwork.module.css";
import profile1 from "../../assets/image.png"; // Example profile images
import profile2 from "../../assets/image.png";

const NeuralNetwork = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 600,
      height = 400;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("class", styles.svgContainer);

    // Define layers (input, hidden, output)
    const layers = [
      [{ id: "i1" }, { id: "i2" }, { id: "i3" }], // Input layer
      [{ id: "h1" }, { id: "h2" }, { id: "h3" }], // Hidden layer
      [{ id: "o1" }], // Output layer
    ];

    const nodes = layers.flat().map((d, i) => ({
      ...d,
      x: (i % layers.length) * (width / (layers.length + 1)) + 100,
      y: ((i % 3) * height) / 4 + 50,
      radius: 20,
      img: i === 0 ? profile1 : i === 4 ? profile2 : null, // Assign images
    }));

    const links = [];
    layers[0].forEach((input) => {
      layers[1].forEach((hidden) => {
        links.push({ source: input.id, target: hidden.id });
      });
    });

    layers[1].forEach((hidden) => {
      layers[2].forEach((output) => {
        links.push({ source: hidden.id, target: output.id });
      });
    });

    // D3 Force Simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-50))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide(25))
      .force(
        "link",
        d3.forceLink(links).id((d) => d.id).distance(80)
      )
      .on("tick", ticked);

    // Draw links
    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", styles.link);

    // Draw glowing animation circles
    const flowCircles = svg
      .selectAll(".flow")
      .data(links)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("class", styles.flow);

    // Draw nodes
    const node = svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("g");

    node
      .append("circle")
      .attr("class", styles.node)
      .attr("r", (d) => d.radius);

    node
      .append("image")
      .attr("href", (d) => d.img || "")
      .attr("width", 30)
      .attr("height", 30)
      .attr("x", -15)
      .attr("y", -15)
      .attr("clip-path", "circle(15px)");

    function ticked() {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      flowCircles
        .attr("cx", (d) => d.source.x)
        .attr("cy", (d) => d.source.y)
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .attr("cx", (d) => d.target.x)
        .attr("cy", (d) => d.target.y)
        .on("end", function () {
          d3.select(this).attr("cx", d.source.x).attr("cy", d.source.y);
          ticked();
        });

      node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    }
  }, []);

  return <svg ref={svgRef} className={styles.graphContainer}></svg>;
};

export default NeuralNetwork;
