import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

interface NodeDatum {
  name: string;
  value?: number;
  children?: NodeDatum[];
}

interface Props {
  data: NodeDatum;
}

const PartitionChart: React.FC<Props> = ({ data }) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data) return;

    const width = 1024;
    const height = 768;

    const color = d3.scaleOrdinal(
      d3.quantize(d3.interpolateRainbow, data.children?.length || 1 + 1)
    );

    const hierarchy = d3
      .hierarchy(data)
      .sum((d) => d.value || 0)
      .sort((a, b) => b.height - a.height || (b.value || 0) - (a.value || 0));

    const root = d3
      .partition<NodeDatum>()
      .size([height, (hierarchy.height + 1) * width / 3])(hierarchy);

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove(); // Clear previous render

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width)
      .attr("height", height)
      .attr("style", "max-width: 100%; height: auto; font: 14px sans-serif;"); // Increased font size

    const cell = svg
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.y0},${d.x0})`);

    const rect = cell
      .append("rect")
      .attr("width", (d) => d.y1 - d.y0 - 1)
      .attr("height", (d) => rectHeight(d))
      .attr("fill-opacity", 0.6)
      .attr("fill", (d) => {
        if (!d.depth) return "#aaa";
        let ancestor = d;
        while (ancestor.depth > 1) ancestor = ancestor.parent!;
        return color(ancestor.data.name);
      })
      .style("cursor", (d) => (d.children ? "pointer" : "default")) // Disable pointer cursor for leaf nodes
      .on("click", (_, p) => {
        if (p.children) clicked(p); // Only allow clicks on nodes with children
      });

    const text = cell
      .append("text")
      .style("user-select", "none")
      .attr("pointer-events", "none")
      .attr("x", 5)
      .attr("y", 13)
      .attr("fill", "rgba(249, 250, 251, 0.9)") // Changed text color to white
      .attr("fill-opacity", (d) => +labelVisible(d));

    text.append("tspan").text((d) => d.data.name);

    const tspan = text
      .append("tspan")
      .attr("fill-opacity", (d) => labelVisible(d) * 0.7);

    cell
      .append("title")
      .text((d) =>
        `${d.ancestors().map((d) => d.data.name).reverse().join("/")}\n${d.value}`
      );

    let focus = root;

    function clicked(p: typeof root) {
      if (p === root) return; // Prevent clicking on the root element
      focus = focus === p ? (p = p.parent!) : p;

      root.each((d: any) => {
        d.target = {
          x0: ((d.x0 - p.x0) / (p.x1 - p.x0)) * height,
          x1: ((d.x1 - p.x0) / (p.x1 - p.x0)) * height,
          y0: d.y0 - p.y0,
          y1: d.y1 - p.y0,
        };
      });

      const t = cell
        .transition()
        .duration(750)
        .attr("transform", (d: any) => `translate(${d.target.y0},${d.target.x0})`);

      rect.transition(t).attr("height", (d: any) => rectHeight(d.target));
      text.transition(t).attr("fill-opacity", (d: any) => +labelVisible(d.target));
      tspan.transition(t).attr("fill-opacity", (d: any) => labelVisible(d.target) * 0.7);
    }

    function rectHeight(d: any) {
      return d.x1 - d.x0 - Math.min(1, (d.x1 - d.x0) / 2);
    }

    function labelVisible(d: any): number {
      return (d.y1 <= width && d.y0 >= 0 && d.x1 - d.x0 > 16) ? 1 : 0;
    }
  }, [data]);

  return <svg ref={ref} />;
};

export default PartitionChart;
