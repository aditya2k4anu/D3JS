const data = [];

const width = 600;
const height = 300;

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const xScale = d3.scaleLinear().domain([0, 20]).range([0, width]);
const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

const line = d3.line()
  .x((d, i) => xScale(i))
  .y(d => yScale(d));

const path = svg.append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 2);

function updateChart(newValue) {
  data.push(newValue);
  if (data.length > 20) data.shift(); // Keep only the latest 20 points

  path
    .datum(data)
    .attr("d", line);
}

// Simulate real-time data
setInterval(() => {
  const randomValue = Math.floor(Math.random() * 100);
  updateChart(randomValue);
}, 500);