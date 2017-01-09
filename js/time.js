var time = 0;
var running = 0;

function initializeClock() {
	var countTarget = document.getElementById("inputTime");
	if(running == 0) {
		running = 1;
		increment();
		decrement();
		document.getElementById("play").className = "fa fa-pause";
	}
	return countTarget;
}
function startPause() {
	if(running == 0) {
		running = 1;
		increment();
		document.getElementById("play").className = "fa fa-pause";
	}
	else {
		running = 0;
		document.getElementById("play").className = "fa fa-play";
	}
}
function reset() {
	running = 0;
	time = 0;
	document.getElementById("play").class = "fa fa-play";
	document.getElementById("getDays").innerHTML = "00";
	document.getElementById("getHr").innerHTML = "00";
	document.getElementById("getMin").innerHTML = "00";
	document.getElementById("getSec").innerHTML = "00";
	document.getElementById("play").className = "fa fa-play";

}
function increment () {
	if(running == 1) {
		targetUp = initializeClock();
		setTimeout(function(){
			if(targetUp.value >= time ) {
			var days  =  Math.floor(time / 86400);
			var hours =  Math.floor((time % 86400) / 3600);
			var mins = Math.floor(((time % 86400) % 3600) / 60);
			var secs =  Math.floor(((time % 86400) % 3600) % 60);;
			
			time++;

			if (days < 10) {days = "0" + days;}
			if (hours < 10) {hours = "0" + hours;}
			if (mins < 10) {mins = "0" + mins;}
			if (secs < 10) {secs = "0" + secs;}

			document.getElementById("getDays").innerHTML = days;
			document.getElementById("getHr").innerHTML = hours;
			document.getElementById("getMin").innerHTML = mins;
			document.getElementById("getSec").innerHTML = secs;
			increment(); }
			else {
				running = 0;
				time = 0;
				document.getElementById("play").className = "fa fa-play";
			}
		}, 1000);
	}
}
function decrement () {
	if(running == 1) {
		targetDown = initializeClock();
		setTimeout(function(){
			if(targetDown.value <= time ) {
			var days  =  Math.floor(time / 86400);
			var hours =  Math.floor((time % 86400) / 3600);
			var mins = Math.floor(((time % 86400) % 3600) / 60);
			var secs =  Math.floor(((time % 86400) % 3600) % 60);;
			
			timeDown--;

			if (days < 10) {days = "0" + days;}
			if (hours < 10) {hours = "0" + hours;}
			if (mins < 10) {mins = "0" + mins;}
			if (secs < 10) {secs = "0" + secs;}

			document.getElementById("getDays").innerHTML = days;
			document.getElementById("getHr").innerHTML = hours;
			document.getElementById("getMin").innerHTML = mins;
			document.getElementById("getSec").innerHTML = secs;
			increment(); }
			else {
				running = 0;
				time = 0;
				document.getElementById("play").className = "fa fa-play";
			}
		}, 1000);
	}
}