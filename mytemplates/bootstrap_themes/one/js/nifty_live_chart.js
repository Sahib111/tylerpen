var chartInterval;
var intradayChart = '';
var spotChartInterval;
var optionChartInterval;
var futureChartInterval;
var futureIntraDayCHart;
var spotPriceElement = '';
var stickyPriceElement = '';
var optionPriceElement = '';
var futurePriceElement = '';

$(document).ready(function(){
graphload()
spotPriceElement = $("#sp_val");
spotPriceElement.numberAnimate({
animationTimes: [10, 0, 10]
});
});

function graphload(){
$( "#spotIntraDayChart" ).html('');
var container = document.createElement('div');
$( "#spotIntraDayChart" ).append( container );

var height = '250';
var spotIntradayChart = LightweightCharts.createChart(container, {
height: height,
priceScale: {
scaleMargins: {
top: 0.35,
bottom: 0.2,
},
borderVisible: false,
},
timeScale: {
borderVisible: false,
visible : true,
timeVisible: true,
secondsVisible: false,
rightOffset : 1,
fixLeftEdge: true
},
grid: {
horzLines: {
color: '#eee',
visible: false,
},
vertLines: {
color: '#ffffff',
},
},
handleScroll : false,
handleScale : false,
axisPressedMouseMove : false
});
const whitespacesSeries = spotIntradayChart.addAreaSeries();
var series = spotIntradayChart.addAreaSeries({	
bottomColor : 'rgba(43, 124, 70,0.04)',
topColor : 'rgba(43, 124, 70,0.5)',
lineColor : 'rgb(43, 124, 70)',
lineWidth: 2
});
//console.log(series);
if(data != null){
whitespacesSeries.setData(data);
series.setData(actualData);

spotIntradayChart.timeScale().fitContent();
var fromTime = 1633352640;
var chartStartTime = 1633319100;
var chartEndTime = 1633341780;
var toTime = '';
var nextCall = 'N';
var lastTime = 1633363800;
var chartLineColor = 'rgb(43, 124, 70)';
series.setMarkers([{
time: lastTime,
position: 'inBar',
color: chartLineColor,
shape: 'circle',
}]);
if(nextCall == 'Y'){
spotChartInterval = setInterval(function(){ 	
//console.log("in spot interval function");
var tempToTime = Math.floor((Date.now() / 1000)+120);
var toDateTime = new Date();
var seconds = toDateTime.getSeconds();
if(seconds < 15){
toTime = new Date(toDateTime.getFullYear()+"-"+parseInt(toDateTime.getMonth() + 1)+"-"+toDateTime.getDate()+" "+toDateTime.getHours()+":"+toDateTime.getMinutes()+":00").getTime() / 1000;
}else if(seconds > 15 && seconds < 30){
toTime = new Date(toDateTime.getFullYear()+"-"+parseInt(toDateTime.getMonth() + 1)+"-"+toDateTime.getDate()+" "+toDateTime.getHours()+":"+toDateTime.getMinutes()+":15").getTime() / 1000;
}else if(seconds > 30 && seconds < 45){
toTime = new Date(toDateTime.getFullYear()+"-"+parseInt(toDateTime.getMonth() + 1)+"-"+toDateTime.getDate()+" "+toDateTime.getHours()+":"+toDateTime.getMinutes()+":30").getTime() / 1000;
}else if(seconds > 45){
toTime = new Date(toDateTime.getFullYear()+"-"+parseInt(toDateTime.getMonth() + 1)+"-"+toDateTime.getDate()+" "+toDateTime.getHours()+":"+toDateTime.getMinutes()+":45").getTime() / 1000;
}
toTime = toTime + 120;
fromTime = toTime - 240;
console.log(fromTime+" : "+toTime);
if(tempToTime > chartEndTime){
clearInterval(spotChartInterval);
}else{
if(! isNaN(fromTime) && !isNaN(toTime)){
$.ajax({
type: "GET",
url: "https://priceapi.moneycontrol.com/techCharts/intra",
data: { symbol : "9", resolution : 1, from : fromTime, to: toTime },
// dataType: "json",
beforeSend: function() {
},

success: function(result) {
if(result.s == 'ok'){
for (var i = 0; i < result.data.length; i++) {
if(result.data[i].time >= lastTime){
series.update(result.data[i]);
}
}
lastTime = result.data[(result.data.length - 1)].time;
series.setMarkers([{
time: lastTime,
position: 'inBar',
color: chartLineColor,
shape: 'circle',
}]);
spotIntradayChart.timeScale().applyOptions({ fixLeftEdge: true })
spotIntradayChart.timeScale().fitContent();
}else if(result.s == 'no_data'){
//clearInterval(spotChartInterval);
}
}
});
}
}
}, 1000 * 15);
}
}
}
