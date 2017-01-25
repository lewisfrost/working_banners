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
var int;
var i;
var speedTransition = '.5';
var loopCounter = 0;
var spriteCounter = 0;
var loopMax = 2;
var bkg, regular, product, copy0, copy1, copy2, copy3, copy3b, cta, arrow, clickthrough, overlay;
var mcsArrysToKill;
var arrLength;
var numSpriteFrames = 83;


/*--------------------------------------------------------------
2.0 Init
--------------------------------------------------------------*/
//function initEB() {
//    if(Enabler.isPageLoaded()){
//        init();
//    }else{
//        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, init);
//    } 
//}
function init() {
    'use strict';
    bkg = elmId("bkg");
    regular = elmId("regular");
    product = elmId("product");
    copy0 = elmId("copy0");
    copy1 = elmId("copy1");
    copy2 = elmId("copy2");
    copy3 = elmId("copy3");
    copy3b = elmId("copy3b");
    cta = elmId("cta");
    arrow = elmId("arrow");
    clickthrough = elmId("clickthrough");
    overlay = elmId("overlay");
    
    mcsArrysToKill = [bkg, copy0, copy1, copy2, copy3, copy3b, cta, arrow, product, overlay];
        
    cta.style.opacity =  arrow.style.opacity = regular.style.opacity = overlay.style.opacity = 0;
    
    
    TweenLite.set([bkg,regular], {x:0,y:0});
    TweenLite.set([copy0,copy1,copy2,copy3], {x: -160});
    TweenLite.set(product, {x: -160});
    TweenLite.set(copy3b, {x:0,width: 0});
    
    addEventListeners();
    stepAnim(0);
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
            jumpFrame(0.1);
        break;

        case 1:
            TweenLite.to(bkg, speedTransition, {y: -140});
            TweenLite.to(copy0, speedTransition, {x: 0, delay: '.4'});
            jumpFrame(4);
        break;

        case 2:
            TweenLite.to(regular, speedTransition, {autoAlpha:1, onComplete: initSprite});
            TweenLite.to(copy0, speedTransition, {x: 160});
            TweenLite.to(regular, speedTransition, {x:0, delay:'1'});
			TweenLite.to(copy1, speedTransition, {x: 0});
            TweenLite.to(copy2, speedTransition, {x: 0});
			jumpFrame(5);
        break;

        case 3:
            TweenLite.to(copy1, speedTransition, {x: 160});
            TweenLite.to(copy2, speedTransition, {x: 160});
            TweenLite.to(regular, speedTransition, {x: 160});
            TweenLite.to(copy3, speedTransition, {x: 0});
            TweenLite.to(copy3b, speedTransition, {width:103, delay:'0.5'});
            jumpFrame(4);
        break;

        case 4:
            TweenLite.to(copy3, speedTransition, {x: 160});
            TweenLite.to(copy3b, speedTransition, {x: 160});
            TweenLite.to([cta, arrow], 1, {alpha: 1, onComplete: arrowAnimation, delay: '0.5'});
            TweenLite.to(product, speedTransition, {x: 0, delay: '0.5'});
            jumpFrame(4);
        break;


        case 5:
            loopCounter++;
			if(loopCounter >= loopMax) {
				TweenLite.killTweensOf(stepAnim);
				
                arrLength = mcsArrysToKill.length;
				for (i = 0; i < arrLength; i++) {
					TweenLite.killTweensOf(mcsArrysToKill[i]);
				}
			}else {
				TweenLite.to(overlay,'.5',{alpha:1, onComplete: reset});
            }
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
    addClass(regular, 'regular_'+spriteCounter);
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
    arrowCounter++
    if( arrowCounter <= 3)
    {
        TweenLite.fromTo(arrow,.35,{x:0},{x:3, overwrite:false, delay:.5 })
        TweenLite.to(arrow,.35,{x:0, delay:2, overwrite:false,delay:.75, onComplete:arrowAnimation})
    }
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
        removeClass(regular, 'regular_'+i)
    }
    
	init();
}

function endframe() {
    arrLength = mcsArrysToKill.length;
    for (i = 0; i < arrLength; i++)
    {
        TweenLite.killTweensOf(mcsArrysToKill[i]);
    }
    for (i = 0; i <= numSpriteFrames; i++)
    {
        removeClass(regular, 'regular_'+i)
    }
    
    TweenLite.killDelayedCallsTo(stepAnim);
    
    TweenLite.set( [bkg,regular] , {x:0,y:0});
    TweenLite.set( [copy1,arrow,cta,bkg] , {opacity:1});
    TweenLite.set( [regular,keepcontrol] , {opacity:0});
    TweenLite.set( [copy0,copy1,copy2,copy3,product] , {x:-160});
    TweenLite.set( copy3b , {width:0});
    
}
//if (Enabler.isInitialized()) {
//    init();
//} else {
//    Enabler.addEventListener(studio.events.StudioEvent.INIT, initEB);
//}
init();