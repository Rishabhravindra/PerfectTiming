/**
 * Perfect Timing
 * By Rishabh Ravindra 2017 
 * Submission for Software Development Internship Summer 2017 - ClickTime
 * email: rishabhravindra@gmail.com
 * All questions and submissions are property of ClickTime.com, Inc. (https://www.clicktime.com/?home=true)
 */

// Disable Play/Puse buttons onload
document.getElementById("startPauseUp").disabled = true;
document.getElementById("startPauseDown").disabled = true;

// Function to get latest value inputted by user in the input field 
function getTarget() {
    return document.getElementById("inputTime").value;
}

//test values to toggle Play/Pause/Reset
var runningUp = 0; 
var runningDown = 0;

// Initial value for Count Up clock before function starts 
var timeUp =0; 

// Initialize test values and call increment and decrement functions
function initializeWatch() {
    if (runningUp === 0) {	
        runningUp = 1;
        increment(timeUp); // call increment() for first time
        setIconUp(runningUp); // change icon to pause
        document.getElementById("startPauseUp").disabled = false; //enable Play/Pause button  
    } else {
        runningUp = 0;
        setIconUp(runningUp); // change icon to play
    }

    if (runningDown === 0) {
        runningDown = 1;
        decrement(getTarget()); // call decrement() for first time
        setIconDown(runningDown); // change icon to pause
        document.getElementById("startPauseDown").disabled = false; //enable Play/Pause button  
    } else {
        runningDown = 0;
        setIconDown(runningDown); // change icon to play
    }
}
// Call resetUp() and resetDown() to reset both clocks 
function resetWatch() {
    resetDown();
    resetUp();
}

// Function to call increment() after play button is clicked
function startPauseUp() {
    if (runningUp === 0) {
        runningUp = 1;
        increment();
        setIconUp(runningUp);
    } else {
        runningUp = 0;
		setIconUp(runningUp);  // change icon to play
    }
}

// Function to call decrement() after play button is clicked
function startPauseDown() {
    if (runningDown === 0) {
        runningDown = 1;
        decrement(remainingTimeDown);
        setIconDown(runningDown);
    } else {
        runningDown = 0;
        setIconDown(runningDown);  // change icon to play
    }
}

// reset test values and CountUp clock to 0 
function resetUp() {
    runningUp = 0;
    timeUp = 0;
    document.getElementById("startPauseUp").disabled = true;
    document.getElementById("getDaysUp").innerHTML = "00";
    document.getElementById("getHrUp").innerHTML = "00";
    document.getElementById("getMinUp").innerHTML = "00";
    document.getElementById("getSecUp").innerHTML = "00";
    setIconUp(runningUp);
}

// reset test values and CountDown clock to 0 
function resetDown() {
     runningDown = 0;
     decrement(remainingTimeDown);
    document.getElementById("startPauseDown").disabled = true;
    document.getElementById("getDaysDown").innerHTML = "00";
    document.getElementById("getHrDown").innerHTML = "00";
    document.getElementById("getMinDown").innerHTML = "00";
    document.getElementById("getSecDown").innerHTML = "00";       
    setIconDown(runningDown);
}

// Increment the clock values each second to emulate a clock till target is reached
function increment() {
    if (runningUp === 1) {
        targetUp = getTarget();
      setTimeout(function() {
            if (targetUp >= timeUp) {
                remainingTimeUp = timeUp; 
                var t = calcTime(remainingTimeUp);
                timeUp++;
                var time = formatOutput( t.days, t.hours, t.mins,t.secs );
                document.getElementById("getDaysUp").innerHTML = time.days;
                document.getElementById("getHrUp").innerHTML = time.hours;
                document.getElementById("getMinUp").innerHTML = time.mins;
                document.getElementById("getSecUp").innerHTML = time.secs;
                increment();
            } else {
                resetUp();
            }
        }, 10);
    }
}

// Decrement the clock values each second to emulate a clock till 0 is reached
function decrement(timeDown) {
    
      setTimeout(function() {
        if(runningDown ===  1) {
            if (timeDown >= 0) {
                remainingTimeDown = timeDown;
                var t = calcTime(remainingTimeDown);
                 timeDown--;
                var time = formatOutput( t.days, t.hours, t.mins,t.secs );
                document.getElementById("getDaysDown").innerHTML = time.days;
                document.getElementById("getHrDown").innerHTML = time.hours;
                document.getElementById("getMinDown").innerHTML = time.mins;
                document.getElementById("getSecDown").innerHTML = time.secs;
                decrement(timeDown);
            } else {
                runningDown = 0;
                setIconDown(runningDown);
                document.getElementById("startPauseDown").disabled = true;
            }
           }
        }, 10);
    }


// Convert seconds into days, hours, minutes, and remaining minutes
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
    // change Play/Pause icon based on test value for Count Up Clock
	function setIconUp(flag) {
		    var countUpIcon = document.getElementById("playUp");
		    countUpIcon.className = (flag === 0) ? "fa fa-play" : "fa fa-pause";
	}

    // change Play/Pause icon based on test value for Count Down Clock
	function setIconDown(flag) {
		    var countDownIcon = document.getElementById("playDown");
		    countDownIcon.className = (flag === 0) ? "fa fa-play" : "fa fa-pause";
	}

    // pre-append 0 if time unit less than 10
	function formatOutput(days,hours, mins,secs) {
       			if (days < 10) {days = "0" + days;}
                if (hours < 10) {hours = "0" + hours;}
                if (mins < 10) {mins = "0" + mins;}
                if (secs < 10) {secs = "0" + secs;}
		        return {
				  'days': days,
				  'hours': hours,
				  'mins': mins,
				  'secs': secs
				};
	}

