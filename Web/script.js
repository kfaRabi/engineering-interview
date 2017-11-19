// form the date
const targetDate = new Date(2018, 0, 1, 0, 0, 0);

// create DOM element's reference
const daysli = document.getElementById("days");
const hoursli = document.getElementById("hours");
const minutesli = document.getElementById("minutes");
const secondsli = document.getElementById("seconds");

// calculate remaining days, hours, minutes and seconds given a target time
function calculateRemainingTime(targetDate){

	const differenceInSeconds = Math.round((targetDate.getTime() - Date.now()) / 1000);

	const H = 24, M = 60, S = 60;

	let days, hours, minutes, seconds, rem;

	days = Math.round(differenceInSeconds / (H * M * S));
	rem = differenceInSeconds % (H * M * S);
	hours = Math.round(rem / (M * S));
	rem = rem % (M * S);
	minutes = Math.round(rem / S);
	seconds = rem % S;

	// setInterval(() => populateDOM(days, hours, minutes, seconds), 1000);

	days = (days < 10 ? ("0" + days) : days);
	hours = (hours < 10 ? ("0" + hours) : hours);
	minutes = (minutes < 10 ? ("0" + minutes) : minutes);
	seconds = (seconds < 10 ? ("0" + seconds) : seconds);


	daysli.textContent = days;
	hoursli.textContent = hours;
	minutesli.textContent = minutes;
	secondsli.textContent = seconds;

	// console.log(days, hours, minutes, seconds);
}

// populate DOM elements using the newly calculated values
// function populateDOM(d, h, m, s){
// 	// days.textContent = d;
// 	// hours.textContent = h;
// 	// minutes.textContent = m;
// 	// seconds.textContent = s;
//
// 	console.log(days.textContent);
// }



// calculateRemainingTime(targetDate);

setInterval(() => {calculateRemainingTime(targetDate)}, 1000);
