var svgwidth = 600,svgHeight = 500;
var svg = d3.select("svg")
.attr("width", svgwidth )
.attr("height", svgHeight)
.attr("class", "svg-container");

var line = svg.append("line")
.attr("x1", 100)
.attr("x2", 500)
.attr("y1", 50)
.attr("y2", 50)
.attr("fill","#9895FF")
.attr("stroke", "red");