
var firstTime; //Global
var secondTime;
var array = [];
var text;

// Timestamp when the page loads
function initialTime(){
	var today = new Date();
	document.getElementById("timerWindow").innerHTML = today;

	firstTime=today;
}

// Timestamp when press the button "press me"
function showTimeDiff(){
	var timed = new Date();
	document.getElementById("secondTimerWindow").innerHTML = timed; 

	secondTime=timed;
}

// Calculate the difference in time
function calculateDiff(){
	var difference = (secondTime - firstTime) / 1000;
	array.push(difference);
	document.getElementById("diffWindow").innerHTML = difference;
	console.log(array);

	document.getElementById("arrayWindow").innerHTML="";
	text = "<ul>";
	for (var i=0; i < array.length; i++){
		text += "<li>" + array[i] + "</li>";
	}
	text += "</ul>";

	// Put the calculated value into the input box for "Number"
	var final = difference.toString().split('.').join('');
	document.getElementById("test1").value = final;
}