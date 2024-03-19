//execute script when window is loaded
window.onload = function(){
    var w = 900, h = 500; //set width and height of the svg element
    var container = d3.select("body") //get the <body> element from the DOM
        .append("svg") //put a new svg in the body
        .attr("width", w) //assign the width
        .attr("height", h) //assign the height
        .attr("class", "container") //assign a class name
        .style("background-color", "rgba(0,0,0,0.2)"); //svg background color

    //innerRect block
    var innerRect = container.append("rect") //put a new rect in the svg
        .datum(400) //a single value is a datum
        .attr("width", function(d){ //rectangle width
            return d * 2; //400 * 2 = 800
        }) 
        .attr("height", function(d){ //rectangle height
            return d; //400
      })
      .attr("class", "innerRect") //class name
      .attr("x", 50) //position from left on the x (horizontal) axis
      .attr("y", 50) //position from top on the y (vertical) axis
      .style("fill", "#FFFFFF"); //fill color

    //below Example 1.9
    var dataArray = [10, 20, 30, 40, 50];
    var circles = container.selectAll(".circles") //but wait--there are no circles yet!
    .data(dataArray) //here we feed in an array
    .enter() //one of the great mysteries of the universe
    .append("circle") //add a circle for each datum
    .attr("class", "circles") //apply a class name to all circles
    .attr("r", function(d, i){ //circle radius
        console.log("d:", d, "i:", i); //let's take a look at d and i
        return d;
    })
    .attr("cx", function(d, i){ //x coordinate
        return 70 + (i * 180);
    })
    .attr("cy", function(d){ //y coordinate
        return 450 - (d * 5);
    });
    
};