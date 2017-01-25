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
		
//screenad.setPreloaded();




/*screenad.onStateChange = function(state) {
	console.log('state:' + state);
}*/
//Function to run with any animations starting on load, or bringing in images etc
init = function(){
	
	//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	bgExit = document.getElementById('background_exit_dc');
	
	
	station = document.getElementById('station');
	//mask1 = document.getElementById('mask1');
	copy1 = document.getElementById('copy1');
	copy2 = document.getElementById('copy2');
	copy3 = document.getElementById('copy3');
	rain = document.getElementById('rain');
	synergy = document.getElementById('synergy');
	wave = document.getElementById('wave');
	wavecopy = document.getElementById('wavecopy');
	esso = document.getElementById('esso');
	cta = document.getElementById('cta');
	wipers = document.getElementById('wipers');
	wiper1 = document.getElementById('wiper1');
	wiper2 = document.getElementById('wiper2');
	
	o = document.getElementById('o');
	o1 = document.getElementById('o1');
	o2 = document.getElementById('o2');

	//console.log('screenad.state:' + screenad.state);
	
	//https://gist.github.com/timohausmann/4997906
	Math.randMinMax=function(t,n,a){var r=t+Math.random()*(n-t)
return a&&(r=Math.round(r)),r}
	
	rainDelay = 0;
	for (var i = 0; i < 40; i++) {
		var particle = document.createElement('div');
		particle.className = 'drop';
		var x = Math.randMinMax(-100, 300);
    var y = Math.randMinMax(-100, 300);
    var s = Math.randMinMax(0.5, 2);
    particle.style.left = x+'px';
    particle.style.top = y+'px';
    particle.style.width = s*16+'px';
    particle.style.height = s*12+'px';
    
    var tween = TweenLite.from(particle, .1, { alpha: 0, delay: rainDelay});
    rainDelay += 0.1;
    
		rain.appendChild(particle);
	}
	
	var delay = 2;
	var tween0 = TweenLite.to(copy1, .5, { alpha: 0, delay: delay});
	delay += .5;
	var tween1 = TweenLite.from(copy2, .5, { alpha: 0, delay: delay});
	delay += 2;
	var tween1_2 = TweenLite.to(rain, .5, { alpha: 0, delay: delay});
	var tween1_3 = TweenLite.to(o1, .5, { alpha: 0, delay: delay});
	var tween1_4 = TweenLite.to(o2, .5, { alpha: 0, delay: delay});
	var tween1_5 = TweenLite.to(o, .5, { alpha: 0, delay: delay});
	delay += .5;
	var tween2 = TweenLite.to(copy1, .3, { alpha: 0, delay: delay});
	var tween3 = TweenLite.to(copy2, .3, { alpha: 0, delay: delay});
	delay += 0.4;
	var tween4 = TweenLite.from(copy3, .5, { alpha: 0, delay: delay});
	delay += 2;
	var tween5 = TweenLite.to(copy3, .5, { alpha: 0, delay: delay});
	delay += 0.3;
	var tween6 = TweenLite.to(station, .5, { alpha: 0, delay: delay});
	delay += .5;
	var tween7 = TweenLite.from(synergy, .4, { alpha: 0, delay: delay});
	delay += 1.8;
	var tween8 = TweenLite.to(synergy, .4, { alpha: 0, delay: delay});
	delay += 0.7;
	var tween9 = TweenLite.from(wave, .5, { alpha: 0, delay: delay});
	delay += .75;
	var tween10 = TweenLite.from(wavecopy, .5, { alpha: 0, delay: delay});
	delay += 2;
	var tween11 = TweenLite.to(wave, .4, { alpha: 0, delay: delay});
	var tween12 = TweenLite.to(wavecopy, .4, { alpha: 0, delay: delay});
	delay += 0.5;
	var tween13 = TweenLite.from(esso, .3, { alpha: 0, delay: delay});
	delay += 0.3;
	var tween14 = TweenLite.from(cta, .3, { alpha: 0, delay: delay});/**/
	
	//Setup Background Image (this can be done in CSS as well)
	content.style.backgroundImage = 'url("Exxon_Synergy_Fuels_Wipers_300x250.jpg")';
	
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