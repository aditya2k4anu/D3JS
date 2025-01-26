var dataset = [1,2,3,4,5];

d3.select('body') //1. Select the tag in which the dataset should be enter 
.selectAll('p') //2. select all the paragraph to insert the data
.data(dataset) //3. this will take the dataset and take it to the waiting state 
.enter() //4. the enter method will take the data from the waiting state and perform the further operation
.append('p') 
//.text('D3 is Awesome..........!') //This will Print the statement 

.text(function(d) { return d;}); //This will print data in order 