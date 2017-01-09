var timeUp = 0;
var runningUp = 0;
var timeDown = 0;
var runningDown = 0;
function initializeClock() {
var countTarget = document.getElementById("inputTime").value;
function startTimer() {
	if(runningUp == 0) {
		runningUp = 1;
		increment();
		document.getElementById("playUp").className = "fa fa-pause";
	}
	if(runningDown == 0) {
		runningDown = 1;
<<<<<<< HEAD
=======
		var countTarget = document.getElementById("inputTime").value;
		decrement(countTarget);
		document.getElementById("playDown").className = "fa fa-pause";
	}
	
}
function startPauseUp() {
	if(runningUp == 0) {
		runningUp = 1;
		increment();
		document.getElementById("playUp").className = "fa fa-pause";
	}
	else {
		runningUp = 0;
		document.getElementById("playUp").className = "fa fa-play";
	}
}
function startPauseDown() {
	if(runningDown == 0) {
		runningDown = 1;
>>>>>>> parent of 9e2343e... :bug: Bug fixes in decrement()
		decrement();
		document.getElementById("playDown").className = "fa fa-pause";
	}
	
}
startTimer();
function increment () {
	if(runningUp == 1) {
		setTimeout(function(){
			if(countTarget >= timeUp ) {
			var days  =  Math.floor(timeUp / 86400);
			var hours =  Math.floor((timeUp % 86400) / 3600);
			var mins = Math.floor(((timeUp % 86400) % 3600) / 60);
			var secs =  Math.floor(((timeUp % 86400) % 3600) % 60);;
			
			timeUp++;

			if (days < 10) {days = "0" + days;}
			if (hours < 10) {hours = "0" + hours;}
			if (mins < 10) {mins = "0" + mins;}
			if (secs < 10) {secs = "0" + secs;}

			document.getElementById("getDaysUp").innerHTML = days;
			document.getElementById("getHrUp").innerHTML = hours;
			document.getElementById("getMinUp").innerHTML = mins;
			document.getElementById("getSecUp").innerHTML = secs;
			increment(); }
			else {
				runningUp = 0;
				timeUp = 0;
				document.getElementById("playUp").className = "fa fa-play";
			}
		}, 1000);
	}
}
// function decrement () {
// 	console.log('decrement() called');
// }
<<<<<<< HEAD
var timeDown = countTarget;
function decrement () {
=======
function decrement (timeDown) {
>>>>>>> parent of 9e2343e... :bug: Bug fixes in decrement()
	if(runningDown == 1) {
		setTimeout(function(){ 
			if(timeDown >= 0 ) {
			var days  =  Math.floor(timeDown / 86400);
			var hours =  Math.floor((timeDown % 86400) / 3600);
			var mins = Math.floor(((timeDown % 86400) % 3600) / 60);
			var secs =  Math.floor(((timeDown % 86400) % 3600) % 60);;
<<<<<<< HEAD
=======
			
>>>>>>> parent of 9e2343e... :bug: Bug fixes in decrement()
			timeDown--;

			if (days < 10) {days = "0" + days;}
			if (hours < 10) {hours = "0" + hours;}
			if (mins < 10) {mins = "0" + mins;}
			if (secs < 10) {secs = "0" + secs;}

			document.getElementById("getDaysDown").innerHTML = days;
			document.getElementById("getHrDown").innerHTML = hours;
			document.getElementById("getMinDown").innerHTML = mins;
			document.getElementById("getSecDown").innerHTML = secs;
			decrement(); }
			else {
				runningDown = 0;
				timeDown = 0;
				document.getElementById("playDown").className = "fa fa-play";
			}
		}, 1000);
	}
}	
}
function startPauseUp() {
	if(runningUp == 0) {
		runningUp = 1;
		increment();
		document.getElementById("playUp").className = "fa fa-pause";
	}
	else {
		runningUp = 0;
		document.getElementById("playUp").className = "fa fa-play";
	}
}
function startPauseDown() {
	if(runningDown == 0) {
		runningDown = 1;
		decrement();
		document.getElementById("playDown").className = "fa fa-pause";
	}
	else {
		runningDown = 0;
		document.getElementById("playDown").className = "fa fa-play";
	}
}
function resetUp() {
	runningUp = 0;
	timeUp = 0;
	document.getElementById("getDaysUp").innerHTML = "00";
	document.getElementById("getHrUp").innerHTML = "00";
	document.getElementById("getMinUp").innerHTML = "00";
	document.getElementById("getSecUp").innerHTML = "00";
	document.getElementById("playUp").className = "fa fa-play";
}
function resetDown() {
	runningDown = 0;
	timeDown = 0;
	document.getElementById("getDaysDown").innerHTML = "00";
	document.getElementById("getHrDown").innerHTML = "00";
	document.getElementById("getMinDown").innerHTML = "00";
	document.getElementById("getSecDown").innerHTML = "00";
	document.getElementById("playDown").className = "fa fa-play";
}
