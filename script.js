var wakeUpTime = 7;
var noon = 12;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime;
var evening = 18;


// Getting it to show the current time on the page
var showCurrentTime = function() {

	//display the string on the webpage
	var clock = document.getElementById('clock');

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	// Set hours
	if (hours >= noon)
	{
		meridian = "PM";
	}
	if (hours > noon)
	{
		hours = hours -12;
	}

	// Set minutes
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}

	// Set seconds
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}

	// Put together the string that displays the time
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
	clock.innerText = clockTime;

};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() {
	var time = new Date().getHours();
	var messageText;
	var image = "normalTime.jpg";
	var timeEventJS = document.getElementById("timeEvent");
	var clockImageJS = document.getElementById("clockImage");

	if (time == partyTime)
	{
		image = "partyTime.jpg";
		messageText = "Let's Party!";
	}
	else if (time == wakeUpTime)
	{
		image = "wakeUpTime.jpg";
		messageText = "Wake up!";
	}
	else if (time == lunchTime)
	{
		image = "lunchTime.jpg";
		messageText = "Let's have some lunch!";
	}
	else if (time == napTime)
	{
		image = "napTime.jpg";
		messageText = "Sleep tight!";
	}
	else if (time < noon)
	{
		image = "noon.jpg";
		messageText = "Good morning!";
	}
	else if (time >= evening)
	{
		image = "evening.jpg";
		messageText = "Good evening!";
	}
	else
	{
		image = "normalTime.jpg";
		messageText = "Good afternoon!";
	}

	console.log(messageText);
	timeEventJS.innerText = messageText;
	clockImageJS.src = image;
	showCurrentTime();
};

updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Party Time Button To Work 
var partyButton = document.getElementById("partyTimeButton");
var partyEvent = function() {
	if (partyTime < 0)
	{
		partyTime = new Date().getHours();
		partyTimeButton.innerText = "Party Over!";
		partyTimeButton.style.backgroundColor = "#0A8DAB";
	}
	else
	{
		partyTime = -1;
		partyTimeButton.innerText = "Party time!";
		partyTimeButton.style.backgroundColor = "#222";
	}
};

partyButton.addEventListener("click", partyEvent);
partyEvent();


// Activate Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
{
	wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activate lunch selector 
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function()
{
	lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);

// Activate Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");
var napEvent = function()
{
	napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napEvent);

