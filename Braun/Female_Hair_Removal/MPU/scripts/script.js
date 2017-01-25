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
var bkg, logo, prod1, prod2, prod3, prod4, copy1, copy2, copy3, copy4, offerBar, cta, overlay, blackTop, blackBottom, lineH, lineV, ribbon, clickthrough;
var mcsArrysToKill;

/*--------------------------------------------------------------
2.0 Init
--------------------------------------------------------------*/
function init() {
    'use strict';
    bkg = elmId("bkg");
    //TweenLite.to(bkg, 0, {top: -45, scaleX:'1.5', scaleY:'1.5', transformOrigin:"left 50%"});
    prod1 = elmId("prod1");
    prod2 = elmId("prod2");
    prod3 = elmId("prod3");
    copy1 = elmId("copy1");
    copy2 = elmId("copy2");
    copy3 = elmId("copy3");
    copy4 = elmId("copy4");
    lineH = elmId("lineH");
    lineV = elmId("lineV"); 
    ribbon = elmId("ribbon"); 

    //tcs = elmId("tcs");
    cta = elmId("cta");
    offerBar = elmId("offerBar");
    clickthrough = elmId("clickthrough");
    overlay = elmId("overlay");
    blackTop = elmId("blackTop");
    blackBottom = elmId("blackBottom");

    TweenLite.to(prod1, '0', {scale:'0.9'});
    TweenLite.to(prod3, '0', {scale:'0.9'});


    lineH.style.width = "0px";
    lineV.style.height = "0px";
    
    TweenLite.to(overlay,'.5',{alpha:0});
    
    TweenLite.to(prod2, '0', {top: 65, left: 110, scaleX: '.75', scaleY: '.75'});
    TweenLite.to(copy1, '1', {opacity: 1, delay:.25, ease:Quad.easeInOut});
    //    mcsArrysToKill = [prod1, prod2, prod3, copy1, copy2, tcs, offerBar, cta, overlay];
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
            TweenLite.to(blackTop, '1', {delay:0.8, top: 10, ease:Quad.easeInOut});
            TweenLite.to(blackBottom, '1', {delay:0.8, top: 170, ease:Quad.easeInOut});            
            TweenLite.to(bkg, '1', {delay:1, top: 0, scaleX:'1', scaleY:'1', transformOrigin:"left 50%"});
            TweenLite.to(prod2, '2', {delay:2.5, scaleX: '0.9', scaleY:'0.9', left:0, top:-10, ease:Quad.easeInOut});
            jumpFrame(3);
        break;

       case 1:
            //TweenLite.to(copy1, '1', {opacity: 0, ease:Quad.easeInOut});
            //TweenLite.to(copy2, '1', {opacity: 1, delay:1, ease:Quad.easeInOut});
            TweenLite.to(bkg, '1', {opacity: 0, ease:Quad.easeInOut});
            //TweenLite.to(prod2, '1', {top: '45'});
            jumpFrame(4);
            TweenLite.to(lineH, speedTransition*3, {left:0, width: 300, delay:.75, ease:Quad.easeInOut});
			//TweenLite.to(lineV, speedTransition*3, {height: 250, delay:.5});
			TweenLite.to(ribbon, speedTransition*2, {opacity: 1, delay:2, ease:Quad.easeInOut});
        break;
        
        case 2:
            TweenLite.to(prod1, '1', {left:0, opacity:1, delay:1, ease:Quad.easeInOut});
            TweenLite.to(prod3, '1', {left:0, opacity:1, delay:1, ease:Quad.easeInOut});
            TweenLite.to(copy1, '1', {opacity: 0, ease:Quad.easeInOut});
            TweenLite.to(copy3, '1', {opacity: 1, delay:1, ease:Quad.easeInOut});
            TweenLite.to(cta, '1', {opacity: 1, delay:1.25, ease:Quad.easeInOut});
            TweenLite.to(offerBar, '1', {top:218, delay:1.5});
            TweenLite.to(copy3, '1', {top:-20, delay:1.5});
            TweenLite.to(copy4, '1', {top:-20, delay:1.5});
            TweenLite.to(cta, '1', {top:-27, delay:1.5});
 
			jumpFrame(3);
        break;

        case 3:
            TweenLite.to(copy4, '1', {opacity: 1, ease:Quad.easeInOut});//, onComplete:jumpFrame, onCompleteParams:[4]});

        break;

        case 4:
            console.log("4");
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

function endframe() {
    /*arrLength = mcsArrysToKill.length;
    for (i = 0; i < arrLength; i++)
    {
        TweenLite.killTweensOf(mcsArrysToKill[i]);
    }
    for (i = 0; i <= numSpriteFrames; i++)
    {
        removeClass(shimmer, 'shimmer_'+i)
    }*/
    
    TweenLite.killDelayedCallsTo(stepAnim);
    
    bkg.style.top = '0px';
    bkg.style.left = '-1px';
    copy1.style.opacity = arrow.style.opacity = cta.style.opacity = bkg.style.opacity = copy1.style.opacity = 1;
    shimmer.style.display.opacity = keepcontrol.style.opacity = 0;
    copy1.style.left = "13px";
    copy0.style.left = "-250px";
    product.style.left = "133px";
}

init();