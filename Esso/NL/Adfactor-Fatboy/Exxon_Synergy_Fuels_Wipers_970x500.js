// JavaScript Document
// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var bgExit;

var copy1,
		copy2,
		copy3,
		cta,
		esso,
		rain,
		station,
		synergy,
		washingmachine,
		wavecopy,
		wave, 
		wipers,
		wiper1, 
		wiper2,
		o,
		o1,
		o2;
		

//Function to run with any animations starting on load, or bringing in images etc
init = function(){
	
	//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	bgExit = document.getElementById('background_exit_dc');
	
	
	
	copy1 = document.getElementById('copy1');
	copy2 = document.getElementById('copy2');
	copy3 = document.getElementById('copy3');
	
	cta = document.getElementById('cta');
	
	var delay = 2;
	var tween0 = TweenLite.from('#copy1', 1, { alpha: 0, delay: delay});
	delay += 1.5;
	var tween0 = TweenLite.from('#copy2', 1, { alpha: 0, delay: delay});
	delay += 1.5;
	var tween0 = TweenLite.from('#copy3', 1, { alpha: 0, delay: delay});
	delay += 1.5;
	var tween1 = TweenLite.from('#cta', .5, { alpha: 0, delay: delay});
	//Setup Background Image (this can be done in CSS as well)
	//content.style.backgroundImage = "url("+Enabler.getUrl('Exxon_Synergy_Fuels_Wipers_160x600.jpg')+")";
	
	//Bring in listeners i.e. if a user clicks or rollovers
	addListeners();
	
	//Show Ad
	container.style.display = "block";
	
}

function hide() {
	o2.style.display = "none";
}

//Add Event Listeners
addListeners = function() {
	bgExit.addEventListener('click', bgExitHandler, false);
}


bgExitHandler = function(e) {
	//Call Exits
	screenad.click();
}

init();