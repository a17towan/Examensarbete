
var firstTime; //Global
var secondTime;
var array = [];
var text;

function initialTime(){
	var today = new Date();
	var test = today.valueOf()/1000;

	var year = today.getFullYear();
	var month = today.getDate();
	var day = today.getDay();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	var millisecond = today.getMilliseconds();

	var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + ':' + millisecond;
	document.getElementById("timerWindow").innerHTML = 	time;
	//document.getElementById("startTid").value = time;
	firstTime=today;
	document.getElementById("startTid").value = time;
}

function showTimeDiff(){
	var timed = new Date();
	var test = timed.valueOf()/1000;

	var year = timed.getFullYear();
	var month = timed.getDate();
	var day = timed.getDay();
	var hour = timed.getHours();
	var minute = timed.getMinutes();
	var second = timed.getSeconds();
	var millisecond = timed.getMilliseconds();

	var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + ':' + millisecond;
	document.getElementById("secondTimerWindow").innerHTML = time; 
	//document.getElementById("slutTid").value = time;
	secondTime=timed;
	document.getElementById("slutTid").value = time;
}
