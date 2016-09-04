var data = {
  "player": "Kobe Bryant",
  "game_id": "12345",
  "team": "LAL",
  "plays": [
    {
      "time": "00:47:30",
      "action":"Shot",
      "stat": "2 PT"
    },
    {
      "time": "00:46:30",
      "action":"Shot",
      "stat": "2 PT"
    },
    {
      "time": "00:46:20",
      "action": "Rebound",
      "stat": "Off:0 Def:1"
    }
  ]
};

var circleRadii = [40, 20, 10];
var iconSize = 24;
var containerWidth = 50;
var containerHeight = 48*60;

var scaleContainer = d3.select("#axis").append("svg")
    .attr("width", containerWidth)
    .attr("height", containerHeight);

var actionContainer = d3.select("#action").append("svg")
    .attr("width", containerWidth)
    .attr("height", containerHeight);

var statContainer = d3.select("#stat").append("svg")
    .attr("width", containerWidth*2)
    .attr("height", containerHeight);

var timeContainer = d3.select("#time").append("svg")
    .attr("width", containerWidth*2/3)
    .attr("height", containerHeight);

var axisScale = d3.scaleLinear()
    .domain([0, containerHeight])
    .range([0, containerHeight]);
var yAxis = d3.axisLeft().scale(axisScale);
var yAxisGroup = scaleContainer.append("g")
    .call(yAxis);

var images = actionContainer.selectAll("image")
    .data(data.plays)
    .enter()
    .append("svg:image")

var imageAttributes = images.attr("cx", 50)
    .attr("x", 10)
    .attr("y", function(d){
       return timeToElapsed(d.time); 
    })
    .attr("width", iconSize)
    .attr("height", iconSize)
    .attr("xlink:href", function(d){
        return "images/"+d.action.toLowerCase()+"/"+iconSize+".png";
    });

var times = timeContainer.selectAll("text")
    .data(data.plays)
    .enter()
    .append("text");

var timeAttributes = times
    .attr("x", 10)
    .attr("y", function(d){
       return timeToElapsed(d.time) + iconSize*2/3; 
    })
    .attr("class", "stat-text")
    .attr("fill", "black")
    .text(function(d){
        return secondsToTime(timeToElapsed(d.time)); 
    });

var texts = statContainer.selectAll("text")
    .data(data.plays)
    .enter()
    .append("text");

var textAttributes = texts
    .attr("x", 10)
    .attr("y", function(d){
       return timeToElapsed(d.time) + iconSize*2/3; 
    })
    .attr("class", "stat-text")
    .attr("fill", "black")
    .text(function(d){
        return d.stat; 
    });


