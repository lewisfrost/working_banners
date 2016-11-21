/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
1.0 Variables
2.0 Init
3.0 Step Frame Animation
4.0 Spritesheet
5.0 Miscellaneous
--------------------------------------------------------------*/
 
/*--------------------------------------------------------------
1.0 Variables
--------------------------------------------------------------*/
var frameCounter = 0;
var int, i;
var speedTransition = '.5';
var loopCounter = 0;
var spriteCounter = 0;
var loopMax = 2;
var bkg, bits, logo, copy1_1, copy1_2, copy1_3, copy2_1, copy2_2, cta, clickthrough, gaz, gaz_eyes;
var mcsArrysToKill;

/*--------------------------------------------------------------
2.0 Init
--------------------------------------------------------------*/
function init() {
    'use strict';
    bkg = elmId("bkg");
    bits = elmId("bits");
    copy1_1 = elmId("copy1_1");
    copy1_2 = elmId("copy1_2");
    copy1_3 = elmId("copy1_3");
    copy2_1 = elmId("copy2_1");
    copy2_2 = elmId("copy2_2");
    gaz = elmId("gaz");
    gaz_eyes = elmId("gaz-eyes");
    cta = elmId("cta");
   // offerBar = elmId("offerBar");
    clickthrough = elmId("clickthrough");
    //overlay = elmId("overlay");

    
   // lineH.style.width = "0px";
   // lineV.style.height = "0px";
    
  ///  TweenLite.to(overlay,'.5',{alpha:0});
    
    TweenLite.set(bkg, {x: 0, y: -100, scaleX: '1', scaleY: '1'});
    TweenLite.set(bits, {x: -14, y: -13, scaleX: '1.5', scaleY: '1.5'});
    TweenLite.set([copy1_1, copy1_2, copy1_3, copy2_1, copy2_2], {x: -160, opacity:0});
    TweenLite.set(gaz, {x: 60, y:35});
    TweenLite.set(gaz_eyes, {x: -120, y:35});
    //TweenLite.to(copy1_1, '1', {opacity: 1, delay:.25, ease:Quad.easeInOut});
    //    mcsArrysToKill = [prod1, prod2, prod3, copy1, tcs, offerBar, cta, overlay];
    addEventListeners();
    jumpFrame(1);//stepAnim(-1);
}

/*--------------------------------------------------------------
3.0 Step Frame Animation
--------------------------------------------------------------*/
function stepAnim(fr) {
    'use strict';
    frameCounter++;
    switch (fr) {
        // Initial frame
        case 0:
            TweenLite.to(gaz, '4.5', {delay:.5, x:50, y:15, rotation: "-=5", ease:Quad.easeInOut});
            TweenLite.to(gaz_eyes, '4.5', {delay:.5, x:-130, y:20, ease:Quad.easeInOut});
            TweenLite.to(copy1_1, '.4', {delay:1.5, x:80, opacity:1, ease:Quad.easeInOut});
            TweenLite.to(copy1_2, '.3', {delay:1.5, x:80, opacity:1, ease:Quad.easeInOut});
            TweenLite.to(copy1_3, '.2', {delay:1.5, x:80, opacity:1, ease:Quad.easeInOut});
            jumpFrame(4.5);
        break;

       case 1:

            TweenLite.to(bkg, '2', {delay:0, scaleX: '0.8', scaleY:'0.8', x:-40, y:-77, ease:Quad.easeInOut});
            TweenLite.to(bits, '2', {delay:0, x: -30, y: 0, scaleX: '1', scaleY: '1', ease:Quad.easeInOut});
            TweenLite.to(gaz, '2', {delay:0, scale: .7, x:30, y:95, ease:Quad.easeInOut});
            TweenLite.to(gaz_eyes, '2', {delay:0, scale: .7, x:-150, y:100, ease:Quad.easeInOut});
            TweenLite.to(copy1_1, '3', {x:100});
            TweenLite.to(copy1_2, '3', {x:100});
            TweenLite.to(copy1_3, '3', {x:100});
            TweenLite.to(copy1_1, '.2', {x:300, ease:Quad.easeInOut});
            TweenLite.to(copy1_2, '.3', {x:300, ease:Quad.easeInOut});
            TweenLite.to(copy1_3, '.4', {x:300, ease:Quad.easeInOut});
            TweenLite.to(gaz, '5', {delay:2, x:20, y:70, rotation: "-=10", ease:Quad.easeInOut});
            TweenLite.to(gaz_eyes, '5', {delay:2, x:-160, y:75, rotation: "-=10", ease:Quad.easeInOut});
            TweenLite.to(copy2_1, '.2', {delay:1.4, x:-200, opacity:1, ease:Quad.easeInOut});
            TweenLite.to(copy2_2, '.3', {delay:1.4, x:-53, opacity:1, ease:Quad.easeInOut});
            TweenLite.to(cta, '.4', {delay:1.8, top:550, opacity:1, ease:Quad.easeInOut});
            jumpFrame(3);
        break;
        

        case 2:
            console.log("4");
            /*loopCounter++;
			if(loopCounter >= loopMax) {
				TweenLite.killTweensOf(stepAnim);				
                arrLength = mcsArrysToKill.length;
				for (i = 0; i < arrLength; i++) {
					TweenLite.killTweensOf(mcsArrysToKill[i]);
				}
			}else {
				TweenLite.to(overlay,'.5',{alpha:1, onComplete: reset});
            }*/
        break;
    }
}

/*--------------------------------------------------------------
4.0 Spritesheet
--------------------------------------------------------------*/
function initSprite() {
    'use strict';
    int = setInterval(playSprite, 35);
    spriteCounter = 0;
}

function playSprite() {
    'use strict';
    if(spriteCounter === numSpriteFrames) clearInterval(int)
    addClass(shimmer, 'shimmer_'+spriteCounter);
    spriteCounter ++;
}

function addClass(element, classToAdd) {
    var currentClassValue = element.className;
      
    if (currentClassValue.indexOf(classToAdd) == -1) {
        if ((currentClassValue == null) || (currentClassValue === "")) {
            element.className = classToAdd;
        } else {
            element.className += " " + classToAdd;
        }
    }
}
 
function removeClass(element, classToRemove) {
    var currentClassValue = element.className;
 
    if (currentClassValue == classToRemove) {
        element.className = "";
        return;
    }
 
    var classValues = currentClassValue.split(" ");
    var filteredList = [];
 
    for (var i = 0 ; i < classValues.length; i++) {
        if (classToRemove != classValues[i]) {
            filteredList.push(classValues[i]);
        }
    }
 
    element.className = filteredList.join(" ");
}

/*--------------------------------------------------------------
5.0 Miscellaneous
--------------------------------------------------------------*/
var arrowCounter = 0;
function arrowAnimation()
{
    /*
    arrowCounter++
    if( arrowCounter <= 3)
    {
        TweenLite.fromTo(arrow,.35,{left:95},{left:98, overwrite:false, delay:.5 })
        TweenLite.to(arrow,.35,{left:95, delay:2, overwrite:false,delay:.75, onComplete:arrowAnimation})
    }*/
}

function addEventListeners() {
    if(typeof(document.addEventListener)){
        clickthrough.addEventListener("click", exitClick);
    }else if (typeof(document.attachEvent)){
        clickthrough.attachEvent("click", exitClick, false);
    }
}

function exitClick(){
    //Enabler.exit('Clickthrough');
    window.open(window.clickTag, '_blank');
    endframe();
}

//Function That Creates Element Var
function elmId(id) { 
   return document.getElementById(id);
}

//Jump Frames
function jumpFrame(dly){
	TweenLite.delayedCall(dly,stepAnim,[frameCounter]);
}

function reset(){
	frameCounter = 0;
    arrowCounter = 0;
    spriteCounter = 0;
    
    for (i = 0; i <= numSpriteFrames; i++)
    {
        removeClass(shimmer, 'shimmer_'+i)
    }
    
	init();
}


init();