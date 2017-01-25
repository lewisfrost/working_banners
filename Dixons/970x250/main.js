/*--------------------------------------------------------------
Declare variables
--------------------------------------------------------------*/
var container = document.getElementById('container');

// HOLDERS
var _oven = document.getElementById('oven');
var _hob = document.getElementById('hob');
var _dw = document.getElementById('dishwasher');
var _ef = document.getElementById('endframe');
var _c = document.getElementById('copy');
var _l = document.getElementById('logo');

// IDs
var OVEN = "oven";
var HOB = "hob";
var DISHWASHER = "dishwasher";

var timer;

var isLegalOpen = false;
var isWaiting = false;

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
    isLegalOpen = true;
    TweenMax.pauseAll(true, true);
    TweenMax.to(_l, .25, {top:127, ease:Quad.easeOut});
}

function onMouseOutHandler(){
    TweenMax.to(_l, .25, {top:225, ease:Quad.easeIn, onComplete:function(){
        isLegalOpen = false;
        TweenMax.resumeAll(true, true);
        if(isWaiting)gotoEndFrame();
    }});
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
var seconds = 0;
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
    
    if(!detectIE()){
        TweenMax.set("#"+id, {scaleX:1, scaleY:1, transformOrigin:"50% 50%"});
        if(id === OVEN){
            TweenMax.to("#"+id, 6, {scaleX:1.06, scaleY:1.06, x:-15, y:-11, force3D:true, transformOrigin:"50% 50%"});    
        }else{
            TweenMax.to("#"+id, 10, {scaleX:1.1, scaleY:1.1, x:-30, y:-20, force3D:true, transformOrigin:"50% 50%"});
        }
    }
    
    for(var i = 0; i < divs.length; i++){
        var el = divs[i];
        TweenMax.to(el, s, {opacity:1, delay:i*(s/1.5), ease:Quad.easeOut, onComplete:function(){
            total--;
            if(total === 0)onApplianceComplete(id);
        }});
    }
}

function onApplianceComplete(id){
    
    switch(id){
        case OVEN:
            TweenMax.to("#oven", .5, {opacity:0, ease:Quad.easeOut, delay:2.5, onComplete:playAppliance, onCompleteParams:[HOB]});
            TweenMax.to("#l1", .5, {opacity:0, delay:2, ease:Quad.easeOut});
            TweenMax.to("#l22", .5, {opacity:1, delay:3, ease:Quad.easeOut});
            
            break;
            
        case HOB:
            TweenMax.to("#hob", .5, {opacity:0, ease:Quad.easeOut, delay:2, onComplete:playAppliance, onCompleteParams:[DISHWASHER]});
            TweenMax.to(["#l22"], .5, {opacity:0, delay:2, ease:Quad.easeOut, onComplete:function(){ _l.style.display = "block"; }});
            TweenMax.to(["#l32", _l], .5, {opacity:1, delay:2.5, ease:Quad.easeOut});
//            TweenMax.to("#l32", .5, {opacity:1, delay:4.5, ease:Quad.easeOut});
            break;
        
        case DISHWASHER:
            //clearInterval(timer);
            TweenMax.delayedCall(1.5, function(){
                    if(isLegalOpen){
                        isWaiting = true;
                    }else{
                        gotoEndFrame();   
                    }
                });
            break;
    }
    
}

/*--------------------------------------------------------------
End Frame
--------------------------------------------------------------*/
function gotoEndFrame(){
    
    TweenMax.to([_dw,_c, _l], .5, {opacity:0, onComplete:function(){
        clearInterval(timer);

        TweenMax.killDelayedCallsTo(playAppliance);
        TweenMax.killTweensOf(playAppliance);
        TweenMax.killAll();

        _oven.style.display = "none";
        _hob.style.display = "none";
        _dw.style.display = "none";
        _ef.style.display = "block";

        TweenMax.to(_ef, .5, {opacity:1, ease:Quad.easeOut});
    }});
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