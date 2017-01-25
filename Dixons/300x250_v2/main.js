/*--------------------------------------------------------------
Declare variables
--------------------------------------------------------------*/
var container = document.getElementById('container');

// HOLDERS
var _oven = document.getElementById('oven');
var _hob = document.getElementById('hob');
var _dw = document.getElementById('dishwasher');
var _ef = document.getElementById('endframe');
var _copy = document.getElementById('copy');

// IDs
var OVEN = "oven";
var HOB = "hob";
var DISHWASHER = "dishwasher";

var timer;

//Function confirm if the creative is visible	
enablerInitHandler = function(e) {
	if(Enabler.isVisible()) {
	   startAd();
    } else {
	   Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAd);
    }
};

var _l = document.getElementById('legals');
//Add Event Listeners
addListeners = function(e) {
	container.addEventListener('touchEnd', bgExitHandler, false);
	container.addEventListener('click', bgExitHandler, false);
    _l.addEventListener('mouseover', onMouseOverHandler, false);
    _l.addEventListener('mouseout', onMouseOutHandler, false);
};

function onMouseOverHandler(){
    TweenMax.to(_l, .25, {top:149, ease:Quad.easeOut});
}

function onMouseOutHandler(){
    TweenMax.to(_l, .25, {top:227, ease:Quad.easeIn});
}

//Add exits
bgExitHandler = function(e) {	
    gotoEndFrame();
	Enabler.exit('Clickthrough');
};

//Wait for the content to load to call the start od the ad
window.onload = function(){
	if (Enabler.isInitialized()) {
	  enablerInitHandler();
	} else {
	  Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
};	

startAd = function(e) {
	animate();
};

/*--------------------------------------------------------------
Banner Frame Animation
--------------------------------------------------------------*/
function animate() {
    
    timer = setInterval(function(){
        seconds++;
        console.log(seconds);
    }, 1000);
    
    container.style.display = "block";
	
    playAppliance(OVEN);
    
	//Add listeners
	addListeners();
}

function playAppliance(id){
    var s = .7;
    var div = document.getElementById(id);
    var divs = div.getElementsByTagName('div');
//    var total = id === DISHWASHER?divs.length-1:divs.length;
    var total = divs.length;
    
    // zoom in
   if(!detectIE()){
        TweenMax.set("#"+id, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"});
        TweenMax.to("#"+id, 6, {scaleX:1.1, scaleY:1.1, x:-20, y:-8, force3D:true, transformOrigin:"50% 50%", ease:Quad.easeOut});
    }
    
    for(var i = 0; i < divs.length; i++){
        var el = divs[i];
        TweenMax.to(el, s, {opacity:1, delay:i*(s/2.4), ease:Quad.easeOut, onComplete:function(){
            total--;
            if(total === 0)onApplianceComplete(id);
        }});
    }
}

function onApplianceComplete(id){
    
    switch(id){
        case OVEN:
            TweenMax.delayedCall(.25,function(){
                TweenMax.to("#oven", .5, {opacity:0, ease:Quad.easeOut});
                TweenMax.to(_copy, .5, {opacity:1, ease:Quad.easeOut});
                TweenMax.to("#l1", .5, {opacity:1, delay:.5, ease:Quad.easeOut});
                TweenMax.to("#l1", .25, {opacity:0, delay:2.5, ease:Quad.easeOut});
                TweenMax.to(_copy, .25, { opacity:0, delay:2.75, ease:Quad.easeOut, onComplete:playAppliance, onCompleteParams:[HOB]});
            });
            break;
            
        case HOB:
            TweenMax.delayedCall(.25,function(){
                TweenMax.set("#l1", {opacity:0});
                TweenMax.to("#hob", .5, {opacity:0, ease:Quad.easeOut});
                TweenMax.to(_copy, .5, {opacity:1, ease:Quad.easeOut});
                TweenMax.to("#l2", .5, {opacity:1, delay:.5, ease:Quad.easeOut});
                TweenMax.to("#l2", .25, {opacity:0, delay:2.75, ease:Quad.easeOut});
                TweenMax.to(_copy, .25, { opacity:0, delay:3, ease:Quad.easeOut, onComplete:playAppliance, onCompleteParams:[DISHWASHER]});
            });
            break;
        
        case DISHWASHER:
            TweenMax.delayedCall(.5,function(){
                TweenMax.set("#l2", {opacity:0});
                TweenMax.to("#dishwasher", .5, {opacity:0, ease:Quad.easeOut});
                TweenMax.to(_copy, .5, {opacity:1, ease:Quad.easeOut});
                
                TweenMax.to(["#l32",_l], .5, {opacity:1, delay:.5, ease:Quad.easeOut});
                TweenMax.to("#cta", .5, {opacity:1, delay:2.5, ease:Quad.easeOut, onComplete:gotoEndFrame});
                });
                /*TweenMax.to(["#l31","#l32",_l], .5, {opacity:0, delay:2.25, ease:Quad.easeOut, onComplete:gotoEndFrame});
                */
            break;
    }
    
}
var seconds = 0; 
/*--------------------------------------------------------------
End Frame
--------------------------------------------------------------*/
function gotoEndFrame(){
    
    clearInterval(timer);
    
    TweenMax.killDelayedCallsTo(playAppliance);
    TweenMax.killTweensOf(playAppliance);
    TweenMax.killAll();
    
    _oven.style.display = "none";
    _hob.style.display = "none";
    _dw.style.display = "none";
    _ef.style.display = "block";
    
    
}

function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}