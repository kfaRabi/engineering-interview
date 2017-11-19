// form the date
const targetDate = new Date(2018, 0, 1, 0, 0, 0);

// create DOM element's reference
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

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


	daysSpan.textContent = days;
	hoursSpan.textContent = hours;
	minutesSpan.textContent = minutes;
	secondsSpan.textContent = seconds;

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

 // const calculateRemainingTimeInterval = (targetDate) => setInterval(() => {calculateRemainingTime(targetDate)}, 1000);
 let hook = setInterval(() => {calculateRemainingTime(targetDate)}, 1000);

 // calculateRemainingTimeInterval(targetDate);

function handleCountdownClick(){
	const future_date_field = document.getElementById("future_date");
	let future_date_string = future_date_field.value;

	future_date_string += " 00:00:00";

	future_date_field.value = '';

	const future_date = new Date(future_date_string);
	clearInterval(hook);

	hook = setInterval(() => {calculateRemainingTime(future_date)}, 1000);

	// calculateRemainingTimeInterval(future_date);

	// console.log(future_date_string, future_date);
}
