const data = [10, 20, 30, 40, 50, 90];

const width = 1000;
const height = 600;
const radius = Math.min(width, height) / 2;

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`);

const arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

const pie = d3.pie();

const arcs = svg.selectAll("arc")
  .data(pie(data))
  .enter()
  .append("g")
  .attr("class", "arc");

arcs.append("path")
  .attr("d", arc)
  .attr("fill", (d, i) => d3.schemeCategory10[i]);

arcs.on("mouseover", function (event, d) {
  d3.select(this).select("path").attr("fill", "gold");
});

arcs.on("mouseout", function (event, d) {
  d3.select(this).select("path").attr("fill", (d, i) => d3.schemeCategory10[i]);
});