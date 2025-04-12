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

const VerticalIcicleChart: React.FC<Props> = ({ data }) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data) return;

    const width = 1024;
    const height = 768;
    const textPadding = 4;
    const format = d3.format(",d");

    const color = d3.scaleOrdinal(
      d3.quantize(d3.interpolateRainbow, data.children?.length || 1 + 1)
    );

    const hierarchy = d3
      .hierarchy(data)
      .sum((d) => d.value || 0)
      .sort((a, b) => b.height - a.height || (b.value || 0) - (a.value || 0));

    const root = d3.partition<NodeDatum>().size([width, (hierarchy.height + 1) * height / 3])(hierarchy);
    let focus = root;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width)
      .attr("height", height)
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

    const cell = svg
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

    const rect = cell
      .append("rect")
      .attr("height", (d) => d.y1 - d.y0 - 1)
      .attr("width", (d) => rectWidth(d))
      .attr("fill-opacity", 0.6)
      .attr("fill", (d) => {
        if (!d.depth) return "#ccc";
        let ancestor = d;
        while (ancestor.depth > 1) ancestor = ancestor.parent!;
        return color(ancestor.data.name);
      })
      .style("cursor", (d) => (d.children ? "pointer" : "default"))
      .on("click", (_, p) => {
        if (p.children) clicked(p);
      });

    const text = cell
      .append("text")
      .style("user-select", "none")
      .attr("pointer-events", "none")
      .attr("x", textPadding)
      .attr("y", 13)
      .text((d) => `${d.data.name} ${format(d.value ?? 0)}`)
      .attr("fill", "#fff")
      .attr("fill-opacity", function (d) {
        return +labelVisible(d, this);
      });

    cell
      .append("title")
      .text((d) =>
        `${d.ancestors().map((d) => d.data.name).reverse().join("/")}\n${format(d.value ?? 0)}`
      );

    function clicked(p: typeof root) {
      focus = focus === p ? (p = p.parent!) : p;

      root.each((d: any) => {
        d.target = {
          y0: d.y0 - p.y0,
          y1: d.y1 - p.y0,
          x0: ((d.x0 - p.x0) / (p.x1 - p.x0)) * width,
          x1: ((d.x1 - p.x0) / (p.x1 - p.x0)) * width,
        };
      });

      const t = cell
        .transition()
        .duration(750)
        .attr("transform", (d: any) => `translate(${d.target.x0},${d.target.y0})`);

      rect.transition(t).attr("width", (d: any) => rectWidth(d.target));
      text.transition(t).attr("fill-opacity", function (d: any) {
        return +labelVisible(d.target, this);
      });
    }

    function rectWidth(d: any) {
      return d.x1 - d.x0 - Math.min(1, (d.x1 - d.x0) / 2);
    }

    function labelVisible(d: any, label: SVGTextElement): boolean {
      return (
        d.x1 <= width &&
        d.x0 >= 0 &&
        d.x1 - d.x0 - 2 * textPadding > label.getComputedTextLength()
      );
    }
  }, [data]);

  return <svg ref={ref} />;
};

export default VerticalIcicleChart;
