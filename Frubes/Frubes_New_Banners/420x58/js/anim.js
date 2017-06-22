var bg = document.getElementsByClassName("bg");
var tcs = document.getElementsByClassName("tcs");
var blobs = document.getElementsByClassName("blobs");
var pack = document.getElementsByClassName("pack");
var txt1 = document.getElementsByClassName("txt1");
var txt2 = document.getElementsByClassName("txt2");
var cta = document.getElementsByClassName("cta");
var logo = document.getElementsByClassName("logo");
var spot = document.getElementsByClassName("spot");
var minimo = document.getElementsByClassName("minimo");

var loopcount = 0;

/* Wait for the Enabler to initialize, then init() */
window.onload = function() {
    addevents();
    startAnim();
	
};

var count=0;

/*clicktag*/
function addevents(){
    document.getElementById("banner420x58").addEventListener("click", trackClick); 
}

function trackClick(){
    window.open(clickTag,'_blank');
}

// MAIN ANIMATION //
function startAnim() {
   console.log("startAnim");

    TweenLite.set(logo, {visibility:"visible"});
    TweenLite.set(minimo, {visibility:"visible",opacity:1,y:58});
    TweenLite.set(spot, {visibility:"visible",y:0});
    TweenLite.set(bg, {visibility:"visible"});
    TweenLite.set(tcs, {visibility:"visible", opacity:0});

    TweenLite.set(pack, {visibility:"visible",scale:0,y:0});
    TweenLite.set(txt1, {visibility:"visible",y:-58,opacity:1});
    TweenLite.set(txt2, {visibility:"visible",y:-58,opacity:1});
    TweenLite.set(cta, {visibility:"visible",scale:0,y:0});
	TweenLite.set('.flash_img', {visibility:"visible"});

    TweenLite.to([".logo",".spot"],0.5,{opacity:1, ease: Power1.easeInOut, delay:0});
    TweenLite.to([".txt1"],1,{y:0, ease: Power4.easeInOut, delay:0});
    TweenLite.to([".txt1"],1,{y:58, ease: Power4.easeInOut, delay:3});
    TweenLite.to([".txt2"],1,{y:0, ease: Power4.easeInOut, delay:3});
	
	TweenLite.to(".flash_img", 0.2, {css:{filter: "brightness(3)", alpha:1}, delay:3.2});
    TweenLite.to(".flash_img", 0.2, {css:{"-webkit-filter": "brightness(3)", alpha:1}, delay:3.2});

    TweenLite.to(".flash_img", 0.5, {css:{filter: "brightness(3)", alpha:0}, delay:3.5});
    TweenLite.to(".flash_img", 0.5, {css:{"-webkit-filter": "brightness(3)", alpha:0}, delay:3.5});
	

    TweenLite.to([".pack"],0.5,{opacity:1,ease: Power4.easeOut, delay:3});
    TweenLite.to([".pack"],2,{ease:Elastic. easeOut.config(1, 0.4),scale:1,delay:4});

    TweenLite.to([".txt2",".pack"],1,{y:58, ease: Power4.easeInOut, delay:8});
    TweenLite.to([".tcs"],1,{opacity:1, ease: Power4.easeInOut, delay:10.2});
    TweenLite.to([".spot"],1,{opacity:0, ease: Power4.easeInOut, delay:8.5});
    TweenLite.to([".cta"],0.5,{opacity:1,ease: Power4.easeOut, delay:9});
    TweenLite.to([".cta"],2,{ease:Elastic. easeOut.config(1, 0.4),scale:1,delay:9.5});

    TweenLite.to([".minimo"],2,{y:0,ease:Elastic. easeOut.config(1, 0.4),delay:10});

    TweenLite.delayedCall(15,doEndFade);
  }

  function doEndFade() {
      if (loopcount == 0) {

        TweenLite.to([cta,minimo,tcs], 0.5, { alpha: 0, ease:Quad.easeIn, delay:0 })

          TweenLite.delayedCall(0.5,startAnim);
      }
      loopcount+=1;
  }
