document.getElementById('getTimeButton').onclick = function() {initializeClock('getDays', 'getHr', 'getMin', 'getSec',document.getElementById('inputTime').value)
};
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
function initializeClock(d,h,m,s,target) {
	var days = document.getElementById(d);
	var hr = document.getElementById(h);	
	var min = document.getElementById(m);
	var sec = document.getElementById(s);

	// var daysSpan = clock.querySelector('.getDays');
	// var hoursSpan = clock.querySelector('.getHr');
	// var minutesSpan = clock.querySelector('.getMin');
	// var secondsSpan = clock.querySelector('.getSec');

function updateClock() {
	var t = calcTime(target);
	days.innerHTML = t.days;
	hr.innerHTML = t.hours;
	min.innerHTML = t.minutes;
	sec.innerHTML = t.seconds;
	target--;
		if(t.total<=0 ) { 
			clearInterval(timeinterval);
		}
	}
	updateClock(); // run function once at first to avoid delay
	var timeinterval = setInterval(updateClock,1000);


}
	
