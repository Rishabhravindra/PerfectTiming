document.getElementById('getTimeButton').onclick = function() {initializeClock('getDays', 'getHr', 'getMin', 'getSec',document.getElementById('inputTime').value)
};
var reset = document.getElementById('resetButton'); 
var count =0;


function calcTime(target) {
	// target = document.getElementById('inputTime').value;
	// console.log(target);
	
	var t = target;
	var seconds = Math.floor(((target % 86400) % 3600) % 60);
	var minutes = Math.floor(((target % 86400) % 3600) / 60);
  	var hours = Math.floor((target % 86400) / 3600);
  	var days = Math.floor(target / 86400);
	return {
	  'total': t,
	  'days': days,
	  'hours': hours,
	  'minutes': minutes,
	  'seconds': seconds
		};

}
	var prevTarget =1;
	var currentTarget =2;
function initializeClock(d,h,m,s,target) {

	if (count%2 ==0) { 
		prevTarget = target;
	}
	else { 
		currentTarget = target;
	}
	count++;	
	
	if( prevTarget != currentTarget) { var days = document.getElementById(d);
	var hr = document.getElementById(h);	
	var min = document.getElementById(m);
	var sec = document.getElementById(s);
function updateClock() {
	var t = calcTime(target);
	days.innerHTML = t.days;
	hr.innerHTML = t.hours;
	min.innerHTML = t.minutes;
	sec.innerHTML = t.seconds;
	target--;
		if(t.total<=0 ) { 
			resetClock();
		}
	};
	function resetClock() {
		clearInterval(timeinterval);
		days.innerHTML = 0;
		hr.innerHTML = 0;
		min.innerHTML = 0;
		sec.innerHTML = 0;
		count = 0;
	}
	reset.onclick = function() {resetClock()};
	updateClock(); // run function once at first to avoid delay
	var timeinterval = setInterval(updateClock,1000);
	}
	else {
				alert('Pause?');}
}
	
