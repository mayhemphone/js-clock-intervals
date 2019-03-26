  //set seconds, minutes and hours counter and degrees to 0 
    var secondCounter = 0
    var secondDegrees = 0
    var minuteCounter = 0
    var minuteDegrees = 0
    var hourCounter = 0
    var hourDegrees = 0

    document.getElementById("actualButton").addEventListener("click",actualTime)


//auto timers
//Seconds
var secondInterval = setInterval(function(){
    secondCounter += 1
    secondDegrees += 6
    document.getElementById("second").style ="transform: rotate("+secondDegrees+"deg)"
    console.log("TICK second: ", secondCounter);
 }, 1000);
//Minutes
var minuteInterval = setInterval(function(){
    minuteCounter += 1
    minuteDegrees += 6
    document.getElementById("minute").style ="transform: rotate("+minuteDegrees+"deg)"
    console.log("TICK minute: ", minuteCounter);
 }, 60000);

//Hours
var hourInterval = setInterval(function(){
    hourCounter += 1
    hourDegrees += 30
    document.getElementById("hour").style ="transform: rotate("+hourDegrees+"deg)"
    console.log("TICK hour:", hourCounter);
 }, 3600000);

function actualTime (){
	//clear the intervals that started on page load
	clearInterval(secondInterval); 
	clearInterval(minuteInterval); 
	clearInterval(hourInterval); 

	//grab current time
	var start = Date.now();
	console.log("date since 1970 in ms",start)

	//sets current seconds
	secondCounter = Math.round((start /1000) %60);
	secondDegrees = secondCounter * 6
	document.getElementById("second").style ="transform: rotate("+secondDegrees+"deg)"

	//sets current minutes
	minuteCounter = Math.round((start /60000) %60);
	minuteDegrees = minuteCounter * 6
	console.log(minuteDegrees)
	document.getElementById("minute").style ="transform: rotate("+minuteDegrees+"deg)"
	
	//sets current hour
	hourCounter = Math.round((start /43200000) %24);
	console.log("hour counter = ", hourCounter)
	hourDegrees = hourCounter * 30 
	console.log("hour degrees = ", hourDegrees)
	document.getElementById("hour").style ="transform: rotate("+hourDegrees+"deg)"

//delay the start of minute, hour timers until seconds hit the top.
//take current seconds and subtract from 60000(60 seconds)
//also, look at moving the hour hand more often. each small hash is 6 degrees, 
//there are 60 of them, and could multiply minutes by those degrees every time a minute updates?  

	console.log(secondCounter)

//actual timers
setInterval(function(){
    secondCounter += 1
    secondDegrees += 6
    document.getElementById("second").style ="transform: rotate("+secondDegrees+"deg)"
    console.log("TICK second: ", secondCounter);
 }, 1000);
//Minutes
setInterval(function(){
    minuteCounter += 1
    minuteDegrees += 6
    document.getElementById("minute").style ="transform: rotate("+minuteDegrees+"deg)"
    console.log("TICK minute: ", minuteCounter);
 }, 60000);

//Hours
setInterval(function(){
    hourCounter += 1
    hourDegrees += 30
    document.getElementById("hour").style ="transform: rotate("+hourDegrees+"deg)"
    console.log("TICK hour:", hourCounter);
 }, 3600000);


	//set new minutes timer

	//set new minutes timer
}