// form an initial date of Jan 1, 2017
const targetDate = new Date(2018, 0, 1, 0, 0, 0); //  ref: https://www.w3schools.com/js/js_dates.asp


// create DOM elements' reference
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

	// rem: remaining hours
	rem = differenceInSeconds % (H * M * S);
	hours = Math.round(rem / (M * S));

	// rem: remaining minutes
	rem = rem % (M * S);
	minutes = Math.round(rem / S);

	seconds = rem % S;

	// append a '0' with all the values those have only one digit in them
	days = (days < 10 ? ("0" + days) : days);
	hours = (hours < 10 ? ("0" + hours) : hours);
	minutes = (minutes < 10 ? ("0" + minutes) : minutes);
	seconds = (seconds < 10 ? ("0" + seconds) : seconds);

	// set the values to appropriate dom elements
	daysSpan.textContent = days;
	hoursSpan.textContent = hours;
	minutesSpan.textContent = minutes;
	secondsSpan.textContent = seconds;
}




// initially start countdown for Jan 1, 2018;
 let hook = setInterval(() => {calculateRemainingTime(targetDate)}, 1000);


// start a new countdown once user enters a new valid future date
function handleCountdownClick(){
	const future_date_field = document.getElementById("future_date");
	let future_date_string = future_date_field.value;

	future_date_string += " 00:00:00";

	future_date_field.value = '';

	const future_date = new Date(future_date_string);
	clearInterval(hook);

	hook = setInterval(() => {calculateRemainingTime(future_date)}, 1000);
}
