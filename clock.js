  //set seconds, minutes and hours counter and degrees to 0 
    var secondCounter = 0
    var secondDegrees = 0
    var minuteCounter = 0
    var minuteDegrees = 0
    var hourCounter = 0
    var hourDegrees = 0
    document.getElementById("actualButton").addEventListener("click",actualTime)


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
    hourDegrees += 6
    document.getElementById("hour").style ="transform: rotate("+hourDegrees+"deg)"
    console.log("TICK hour:", hourCounter);
 }, 3600000);

function actualTime (){
	//clear the intervals that started on page load
	clearInterval(secondInterval); 
	clearInterval(minuteInterval); 
	clearInterval(hourInterval); 

	//grab current time

//	secondCounter = Date.prototype.getSeconds()
	//console.log(secondCounter)
	
	//assign to each hand and start timers



}