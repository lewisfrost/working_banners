/**
* @author steven yeung
*/

var container;
var content;
 var animationDuration=12000;
var startTime;
var ctaBackground
//Create a self regulating timer
// that does not need to be to rigorous
// - it's just for kicking off animations


var start = new Date().getTime()
var time = 0
var elapsed = '0.0';
var cuePointArray = [];
var timerArrays=[]
var loopcount=0;
var loopmax=1;
var animationTimer
var planeFadeIn = [ "plane", 0.5,"up"];
	var copy1FadeIn = [ "copy1", 0.5,"up"];
	var copy2FadeIn = [ "copy2", 0.5,"up"];
	var copy3FadeIn = [ "copy3", 0.5,"up"];
	var carFadeIn = [ "car", 0.5,"up"];
	var ctaFadeIn=["cta",.5,"up"];
	
	
	var planeFadeOut = [ "plane", 0.5,"down"];
	var copy1FadeOut = [ "copy1", 0.5,"down"];
	var copy2FadeOut = [ "copy2", 0.5,"down"];
	var copy3FadeOut = [ "copy3", 0.5,"down"];
	var carFadeOut = [ "car", 0.5,"down"];
	var ctaFadeOut=["cta",.5,"down"];
	var tandcFadeIn=["tandc",.5,"up"];
	var tandcFadeOut=["tandc",.5,"down"];
	var loopTimeout

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

replay=function(){
document.getElementById( "plane" ).classList.remove( 'fadeIn' );
document.getElementById( "plane" ).classList.remove( 'fadeOut' );
document.getElementById( "copy1" ).classList.remove( 'fadeIn' );
document.getElementById( "copy1" ).classList.remove( 'fadeOut' );
document.getElementById( "copy2" ).classList.remove( 'fadeIn' );
document.getElementById( "copy2" ).classList.remove( 'fadeOut' );
document.getElementById( "copy3" ).classList.remove( 'fadeIn' );
document.getElementById( "copy3" ).classList.remove( 'fadeOut' );
document.getElementById( "car" ).classList.remove( 'fadeIn' );
document.getElementById( "car" ).classList.remove( 'fadeOut' );
document.getElementById( "cta" ).classList.remove( 'fadeIn' );
document.getElementById( "cta" ).classList.remove( 'fadeOut' );
document.getElementById( "tandc" ).classList.remove( 'fadeIn' );
document.getElementById( "tandc" ).classList.remove( 'fadeOut' );
	car.removeEventListener("animationend",replay,true);
	car.removeEventListener("webkitAnimationEnd", replay);
	start = new Date().getTime();
	time = 0
elapsed = '0.0';
destoryTimers();
clearTimeout(animationTimer)
setupCuePoints()
animationTimer=window.setTimeout( cuePointTimer, 500);

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



	timerArrays=[];
	cuePointArray=[]
	//car.removeEventListener("animationend",destoryTimers);
	//car.removeEventListener("webkitAnimationEnd", destoryTimers);
	/*var endDate = new Date();
	var diff=(endDate.getTime()-startTime.getTime())/1000
	console.log(diff%60);*/
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



function setupCuePoints()
{

//startTime = new Date()

		addCuePoint( cuePointFade, .5, planeFadeIn);
	addCuePoint( cuePointFade, .8, copy1FadeIn);
	addCuePoint( cuePointFade, 3.5, copy1FadeOut);
	addCuePoint( cuePointFade, 4.5, copy2FadeIn);
	addCuePoint( cuePointFade, 7.5, copy2FadeOut);
		addCuePoint( cuePointFade, 7.5, planeFadeOut);
	
	addCuePoint( cuePointFade,9.5, carFadeIn);
	addCuePoint( cuePointFade, 9, ctaFadeIn);
	addCuePoint( cuePointFade, 8.5, copy3FadeIn);
		addCuePoint( cuePointFade, 9.5, tandcFadeIn);
	
	
	

}





function cuePointFade( params ){

	//console.log( "cuePointFade •element = "+ params[0] + " •time = " + params[1] + " •upDown = "+ params[2] );
	
	var elementName = params[0];
	
	//console.log( "cuePointFadeUp > elementName " + elementName );
	
	//document.getElementById("frame1").classList.add('fadeUp');
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
window.open(window.clickTag)
	//Enabler.exit('HTML5_Background_Clickthrough');
}



init=function (){

	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	bgExit = document.getElementById('background_exit_dc')

	
	
	//Bring in listeners i.e. if a user clicks or rollovers
	addListeners();
	

	//Show Ad
	container.style.display = "block";
	
	car=document.getElementById("car");
	
	
	loopTimeout=setTimeout(checkLoop,animationDuration);
	setupCuePoints();
animationTimer=window.setTimeout( cuePointTimer, 100);

	

}

function checkLoop(){



clearInterval(loopTimeout);
//console.log(loopcount)
	
if(loopcount<loopmax){

	addCuePoint( cuePointFade,12, carFadeOut);
	addCuePoint( cuePointFade, 12, ctaFadeOut);
	addCuePoint( cuePointFade, 12, copy3FadeOut);
	addCuePoint( cuePointFade, 12,tandcFadeOut);
	
	car.addEventListener("animationend",replay,true);
	car.addEventListener("webkitAnimationEnd", replay);
	//console.log("loop");
	loopTimeout=setTimeout(checkLoop,animationDuration);
	loopcount++;
	}
	else{
	destoryTimers();
	//console.log("done")
	}

}

    

