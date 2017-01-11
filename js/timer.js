var timeUp = 0;
var runningUp = 0;
var timeDown = getTarget();
var runningDown = 0;
var resetDownId;
var resetUpId;
var remainingTime;
function getTarget() {
		var countTarget = document.getElementById("inputTime").value;
		return countTarget;
}
function initializeClock() {
				

	if(runningUp == 0) {
		runningUp = 1;
		increment();
		document.getElementById("playUp").className = "fa fa-pause";
		document.getElementById("startPauseUp").disabled = false;
	}
	else {
		runningUp = 0;
		document.getElementById("playUp").className = "fa fa-play";
	}
	// startPauseDown();
	if(runningDown == 0) {
		runningDown = 1;
		console.log('TImedown outside decrement ' + timeDown);
		decrement(getTarget());
		document.getElementById("playDown").className = "fa fa-pause";
		document.getElementById("startPauseDown").disabled = false;
	}
	else {
		runningDown = 0;
		document.getElementById("playDown").className = "fa fa-play";
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
		console.log('TImedown outside decrement ' + timeDown);
		decrement(remainingTime);
		document.getElementById("playDown").className = "fa fa-pause";
	}
	else {
		runningDown = 0;
		document.getElementById("playDown").className = "fa fa-play";
	}
}
function resetUp() {
	clearTimeout(resetUpId);
	runningUp = 0;
	timeUp = 0;
	document.getElementById("getDaysUp").innerHTML = "00";
	document.getElementById("getHrUp").innerHTML = "00";
	document.getElementById("getMinUp").innerHTML = "00";
	document.getElementById("getSecUp").innerHTML = "00";
	document.getElementById("playUp").className = "fa fa-play";


	

}
function resetDown() {
	clearTimeout(resetDownId);
	runningDown = 0;
	timeDown = 0;
	document.getElementById("getDaysDown").innerHTML = "00";
	document.getElementById("getHrDown").innerHTML = "00";
	document.getElementById("getMinDown").innerHTML = "00";
	document.getElementById("getSecDown").innerHTML = "00";
	document.getElementById("playDown").className = "fa fa-play";
}
function increment () {
	if(runningUp == 1) {
		targetUp = getTarget();
		var resetUpId = setTimeout(function(){
			if(targetUp >= timeUp ) {
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
				document.getElementById("startPauseDown").disabled = true;
			}
		}, 1000);
	}
}
var count = 0;
function decrement (timeDown) {
	if(runningDown == 1) {
		resetDownId = setTimeout(function(){ 
			if(timeDown >= 0 ) {
			var days  =  Math.floor(timeDown / 86400);
			var hours =  Math.floor((timeDown % 86400) / 3600);
			var mins = Math.floor(((timeDown % 86400) % 3600) / 60);
			var secs =  Math.floor(((timeDown % 86400) % 3600) % 60);
			count++;

			timeDown--;
			remainingTime = timeDown;
			console.log('TImedown inside decrement ' + timeDown);
			if (days < 10) {days = "0" + days;}
			if (hours < 10) {hours = "0" + hours;}
			if (mins < 10) {mins = "0" + mins;}
			if (secs < 10) {secs = "0" + secs;}

			document.getElementById("getDaysDown").innerHTML = days;
			document.getElementById("getHrDown").innerHTML = hours;
			document.getElementById("getMinDown").innerHTML = mins;
			document.getElementById("getSecDown").innerHTML = secs;
			decrement(timeDown); }
			else {
				runningDown = 0;
				timeDown = 0;
				document.getElementById("playDown").className = "fa fa-play";
				document.getElementById("startPauseUp").disabled = true;
			}
		}, 1000);
	}
}	

