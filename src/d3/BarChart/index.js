import * as d3 from "d3";

export const drawChart = (data) => {
  const {width, height, dataset} = data;

  const svg = d3.select("#barChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("style", "display: block; margin: auto");

  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 120)
    .attr("y", (d, i) => height - 20 * d)
    .attr("width", 100)
    .attr("height", (d, i) => d * 20)
    .attr("fill", "green");

  svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text((d) => d)
    .attr("x", (d, i) => i * 120)
    .attr("y", (d, i) => height - (20 * d) - 3);
};
