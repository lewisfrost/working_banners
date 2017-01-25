/**
* @author steven yeung
*/

var container;
var content;

var bgExit;


var cta;



//Create a self regulating timer
// that does not need to be to rigorous
// - it's just for kicking off animations


var start = new Date().getTime()
var time = 0
var elapsed = '0.0';
var cuePointArray = [];
var timerArrays=[]

function cuePointTimer()
{
	time += 100;
	
	elapsed = Math.floor(time / 100) / 10;
	if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }
	
	//document.title = elapsed;
	
	var diff = (new Date().getTime() - start) - time;
	var t=  window.setTimeout(cuePointTimer, (100 - diff));
	timerArrays.push(t)
	checkForTimerCuePoint( elapsed );
}

destoryTimers=function(){

	//console.log("timers destroyed")
	var numoftimers=timerArrays.length;
	for (var i = 1; i < numoftimers; i++) {
	var timer=timerArrays[i]
	window.clearInterval(timer);
	window.clearTimeout(timer);
	if(window.mozCancelAnimationFrame)window.mozCancelAnimationFrame(timer); //Firefox
	
	
}
cta.removeEventListener("animationend",destoryTimers);
cta.removeEventListener("webkitAnimationEnd", destoryTimers);

}
// when adding a cue point 
// func = function it will be firing
// time = Number of time on seconds
// params = an array of parameters that your function will take
// The third element in the cue point object is set to false to indicate that it's not yet been run.
// when it gets run it'll be set to true so that it's ignored from that point forward.
function addCuePoint( func, time, params )
{
	var cuePointObject = [ func, time, false, params ];
	cuePointArray.push( cuePointObject );
//console.log(cuePointArray)
}

// looks for cue points and executes them setting the third element in the cue point object to true
// so we know whether it's been run yet. 
function checkForTimerCuePoint( time_elapsed )
{

	//console.log( "time_elapsed = " + time_elapsed );
	
	for (i = 0; i < cuePointArray.length; i++) { 
	
		var thisCuePoint = cuePointArray[i];
	
		if( thisCuePoint[2] == false && time_elapsed > thisCuePoint[1])
		{
			//console.log( "time_elapsed = " + time_elapsed );
	
			thisCuePoint[2] = true;
	
			cuePointArray[i][0]( cuePointArray[i][3] );
		};
	}

}


function setupCuePoints() {
	var f1in = [ "copy1", 0.5,"up"];
	var f1out = [ "copy1", 0.5,"down"];
	var mailleout = [ "maille", 0.5,"down"];
	var f2in = [ "copy2", 0.5,"up"];
	var f2out = [ "copy2", 0.5,"down"];
	var f3in = [ "copy3", 0.5,"up"];
	var background=[ "background", 0.5,"down"];

	var usecodein = [ "usecode", 0.5,"up"];
	var ctain = [ "cta", 0.5,"up"];

	addCuePoint( cuePointFade, .5, f1in);
	addCuePoint( cuePointFade, 3, f1out);
	addCuePoint( cuePointFade, 3.5, mailleout);
	addCuePoint( cuePointFade, 3.5, f2in);
	addCuePoint( cuePointFade, 6, f2out);

	addCuePoint( cuePointFade, 6.5, background);
	
	addCuePoint( cuePointFade, 7, f3in);
	addCuePoint( cuePointFade, 8, ctain);
	addCuePoint( cuePointFade, 8, usecodein);
	
	window.setTimeout( cuePointTimer, 10);
}


function cuePointFade( params ){

	//console.log( "cuePointFade •element = "+ params[0] + " •time = " + params[1] + " •upDown = "+ params[2] );
	
	var elementName = params[0];
	
	//console.log( "cuePointFadeUp > elementName " + elementName );
	
	if ( params[2] == "up" )
	{
	
		document.getElementById( params[0] ).classList.add( 'fadeIn' );
	
	} else if ( params[2] == "down" )
	{
	
		document.getElementById( params[0] ).classList.add( 'fadeOut' );
	
	}

}


addListeners = function() {
	bgExit.addEventListener('click', bgExitHandler, false);
	
}

bgExitHandler = function(e) {
	window.open(clickTag);
}



init=function (){


	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	bgExit = document.getElementById('background_exit_dc');
	
	
	cta= document.getElementById('cta');
	
	
	
	//Bring in listeners i.e. if a user clicks or rollovers
	addListeners();
	
	//Show Ad
	container.style.display = "block";
	content.style.display = "block";
	content.style.opacity = 1;
	
	
	cta.addEventListener("animationend",destoryTimers,true);
	cta.addEventListener("webkitAnimationEnd", destoryTimers);
		
	
	setupCuePoints();

	

}

