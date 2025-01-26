//Selecting and Manipulating the data

d3.select(); //select one element of the data 
d3.selectAll(); //select all element of the data of the same type 

d3.select('h1').style('color','red') //targets the element passed and implement style on that
.text('Welcome to First D3 Work') //replace the preexisting sentence 

d3.select('body').append('p').text('hello everyone my name is Aditya Anurag..........!') //add sentence in the body 
d3.select('body').append('p').text('hello everyone my name is Shreya Suman..........!')
d3.select('body').append('p').text('hello everyone my name is Mantu Mishra..........!')
d3.select('body').append('p').text('hello everyone my name is Archana Mishra..........!')
d3.select('body').append('p').text('hello everyone my name is Neel Mishra..........!')

d3.selectAll('p').style('color','blue') //select all and implement style on all the paragraph at once 



