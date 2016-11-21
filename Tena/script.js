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
    bkg.style.top = '0px';
    copy0.style.left = copy2.style.left = copy3.style.left = copy1.style.left = '-280px';
    regular.style.left = '65px';
    copy3b.style.width = '0px';
    copy3b.style.left = '120px';
    product.style.left = '342px';
    arrow.style.left = '125px';
    
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
            TweenLite.to(bkg, speedTransition, {top: -50});
            TweenLite.to(copy0, speedTransition, {left: 20, delay: '.4'});
            jumpFrame(3);
        break;

        case 2:
            TweenLite.to(regular,speedTransition, {autoAlpha:1, onComplete: initSprite});
            TweenLite.to(copy0, speedTransition, {left: 300});
            TweenLite.to(regular, speedTransition, {left:400, delay:'5'});
			TweenLite.to(copy1, speedTransition, {left: 20, delay:'0.3'});
            TweenLite.to(copy2, speedTransition, {left: 20, delay:'0.3'});
			jumpFrame(5);
        break;

        case 3:
            TweenLite.to(copy1, speedTransition, {left: 300});
            TweenLite.to(copy2, speedTransition, {left: 300});
            TweenLite.to(copy3, speedTransition, {left: 20});
            TweenLite.to(copy3b, speedTransition, {width:66, delay:'0.5'});
            jumpFrame(4);
        break;

        case 4:
            TweenLite.to(copy3, speedTransition, {left: 300});
            TweenLite.to(copy3b, speedTransition, {left: 400});
            TweenLite.to([cta, arrow], 1, {alpha: 1, onComplete: arrowAnimation, delay: '0.5'});
            TweenLite.to(product, speedTransition, {left: 139, delay: '0.5'});
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
        TweenLite.fromTo(arrow,.35,{left:125},{left:128, overwrite:false, delay:.5 })
        TweenLite.to(arrow,.35,{left:125, delay:2, overwrite:false,delay:.75, onComplete:arrowAnimation})
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
    
    bkg.style.top = '0px';
    bkg.style.left = '-1px';
    copy1.style.opacity = arrow.style.opacity = cta.style.opacity = bkg.style.opacity = copy1.style.opacity = 1;
    regular.style.display.opacity = keepcontrol.style.opacity = 0;
    copy1.style.left = "-250px";
    copy0.style.left = "-250px";
    copy2.style.left = "-250px";
    copy3.style.left = "-250px";
    copy3b.style.left = "120px";
    product.style.left = "133px";
}
//if (Enabler.isInitialized()) {
//    init();
//} else {
//    Enabler.addEventListener(studio.events.StudioEvent.INIT, initEB);
//}
init();