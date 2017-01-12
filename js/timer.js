	var runningUp = 0;
	var runningDown = 0;
	var timeUp = 0;

var remainingTimeDown;

document.getElementById("startPauseUp").disabled = true;
document.getElementById("startPauseDown").disabled = true;

function getTarget() {
    var countTarget = document.getElementById("inputTime").value;
    return countTarget;
}


function initializeClock() {

	var timeDown = getTarget();
    if (runningUp === 0) {
        runningUp = 1;
        increment(getTarget());
        setIconUp(runningUp);
        document.getElementById("startPauseUp").disabled = false;
    } else {
        runningUp = 0;
        setIconUp(runningUp);
    }
    // startPauseDown();
    if (runningDown === 0) {
        runningDown = 1;
        decrement(getTarget());
        setIconDown(runningDown);
        document.getElementById("startPauseDown").disabled = false;
    } else {
        runningDown = 0;
        setIconDown(runningDown);
    }
}

function startPauseUp() {
    if (runningUp === 0) {
        runningUp = 1;
        increment();
        setIconUp(runningUp);
    } else {
        runningUp = 0;
		setIconUp(runningUp);
    }
}

function startPauseDown() {
    if (runningDown === 0) {
        runningDown = 1;
        decrement(remainingTimeDown);
        setIconDown(runningDown);
    } else {
        runningDown = 0;
        setIconDown(runningDown);
    }
}

function resetUp(resetUpId) {
    clearTimeout(resetUpId);
    runningUp = 0;
    timeUp = 0;
    document.getElementById("startPauseUp").disabled = true;
    document.getElementById("getDaysUp").innerHTML = "00";
    document.getElementById("getHrUp").innerHTML = "00";
    document.getElementById("getMinUp").innerHTML = "00";
    document.getElementById("getSecUp").innerHTML = "00";
    setIconUp(runningUp);
}

function resetDown(resetDownId) {
    clearTimeout(resetDownId);
    runningDown = 0;
    timeDown = 0;
    document.getElementById("startPauseDown").disabled = true;
    document.getElementById("getDaysDown").innerHTML = "00";
    document.getElementById("getHrDown").innerHTML = "00";
    document.getElementById("getMinDown").innerHTML = "00";
    document.getElementById("getSecDown").innerHTML = "00";
        setIconDown(runningDown);
}

function increment() {
    if (runningUp === 1) {
        targetUp = getTarget();
        var resetUpId = setTimeout(function() {
            if (targetUp >= timeUp) {
            	remainingTimeUp = timeUp; 
            	var t = calcTime(remainingTimeUp);
                timeUp++;

                if (t.days < 10) {
                    t.days = "0" + t.days;
                }
                if (t.hours < 10) {
                    t.hours = "0" + t.hours;
                }
                if (t.mins < 10) {
                    t.mins = "0" + t.mins;
                }
                if (t.secs < 10) {
                    t.secs = "0" + t.secs;
                }

                document.getElementById("getDaysUp").innerHTML = t.days;
                document.getElementById("getHrUp").innerHTML = t.hours;
                document.getElementById("getMinUp").innerHTML = t.mins;
                document.getElementById("getSecUp").innerHTML = t.secs;
                increment();
            } else {
                resetUp(resetUpId);
            }
        }, 100);
    }
}

function decrement(timeDown) {
    if (runningDown ===  1) {
       var resetDownId = setTimeout(function() {
            if (timeDown >= 0) {
                remainingTimeDown = timeDown;
                timeDown--;
                var t = calcTime(remainingTimeDown);
                if (t.days < 10) {
                    t.days = "0" + t.days;
                }
                if (t.hours < 10) {
                    t.hours = "0" + t.hours;
                }
                if (t.mins < 10) {
                    t.mins = "0" + t.mins;
                }
                if (t.secs < 10) {
                    t.secs = "0" + t.secs;
                }

                document.getElementById("getDaysDown").innerHTML = t.days;
                document.getElementById("getHrDown").innerHTML = t.hours;
                document.getElementById("getMinDown").innerHTML = t.mins;
                document.getElementById("getSecDown").innerHTML = t.secs;
                decrement(timeDown);
            } else {
                resetDown(resetDownId);
            }
        }, 100);
    }
}

function calcTime(time) {
		var days = Math.floor(time / 86400);
        var hours = Math.floor((time % 86400) / 3600);
        var mins = Math.floor(((time % 86400) % 3600) / 60);
        var secs = Math.floor(((time % 86400) % 3600) % 60);

	    return {
		  'days': days,
		  'hours': hours,
		  'mins': mins,
		  'secs': secs
		};
	}
	function setIconUp(flag) {
		    var countUpIcon = document.getElementById("playUp");
		    countUpIcon.className = (flag === 0) ? "fa fa-play" : "fa fa-pause";
	}
	function setIconDown(flag) {
		    var countDownIcon = document.getElementById("playDown");
		    countDownIcon.className = (flag === 0) ? "fa fa-play" : "fa fa-pause";
	}

