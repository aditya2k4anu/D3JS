// Step 1: Define the data
const data = [30, 80, 45, 60, 20, 90, 55, 70, 100, 160, 270];

// Step 2: Set the chart dimensions
const width = 1500;
const height = 600;
const margin = { top: 20, right: 30, bottom: 50, left: 50 }; // Margins for axes
const barWidth = (width - margin.left - margin.right) / data.length;

// Step 3: Create an SVG container
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Step 4: Create scales
// Y-axis scale
const yScale = d3.scaleLinear()
  .domain([0, d3.max(data)]) // Input: 0 to the maximum value in data
  .range([height - margin.bottom, margin.top]); // Inverted for SVG

// X-axis scale
const xScale = d3.scaleBand()
  .domain(data.map((d, i) => i)) // Input: indices of the data
  .range([margin.left, width - margin.right]) // Output: Pixel positions
  .padding(0.1); // Padding between bars

// Step 5: Draw bars
svg.selectAll(".bar")
  .data(data) // Bind data to bars
  .enter()    // Create elements for each data point
  .append("rect") // Add rectangles (bars)
  .attr("class", "bar") // Add a class for styling
  .attr("x", (d, i) => xScale(i)) // x-position based on index
  .attr("y", d => yScale(d)) // y-position based on the value
  .attr("width", xScale.bandwidth()) // Width of the bar
  .attr("height", d => height - margin.bottom - yScale(d)) // Height based on data
  .attr("fill", "steelblue"); // Fill color

// Step 6: Add labels (optional)
svg.selectAll(".label")
  .data(data)
  .enter()
  .append("text")
  .attr("class", "label")
  .attr("x", (d, i) => xScale(i) + xScale.bandwidth() / 2) // Center label in the bar
  .attr("y", d => yScale(d) - 5) // Slightly above the bar
  .attr("text-anchor", "middle") // Center the text
  .text(d => d); // Show the data value as the label

// Step 7: Add the y-axis
const yAxis = d3.axisLeft(yScale).ticks(10); // Create the y-axis with 10 ticks
svg.append("g")
  .attr("class", "y-axis")
  .attr("transform", `translate(${margin.left}, 0)`) // Move to the left
  .call(yAxis);

// Step 8: Add the x-axis
const xAxis = d3.axisBottom(xScale).tickFormat(d => d + 1); // Add 1 to show index as 1-based
svg.append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${height - margin.bottom})`) // Move to the bottom
  .call(xAxis);
