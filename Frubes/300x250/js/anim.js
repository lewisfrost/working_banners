
var dude = document.getElementsByClassName("dude");
var bg = document.getElementsByClassName("bg");
var tcs = document.getElementsByClassName("tcs");
var blobs = document.getElementsByClassName("blobs");
var pack = document.getElementsByClassName("pack");
var txt1 = document.getElementsByClassName("txt1");
var txt2 = document.getElementsByClassName("txt2");
var cta = document.getElementsByClassName("cta");
var logo = document.getElementsByClassName("logo");
var logo2 = document.getElementsByClassName("logo2");
var bubble = document.getElementsByClassName("bubble");

var loopcount = 0;

window.onload = function() {
    addevents();
    startAnim();
};

var count=0;

/*clicktag*/
function addevents(){
    document.getElementById("banner300x250").addEventListener("click", trackClick); 
}

function trackClick(){
    window.open(clickTag,'_blank');
}

// MAIN ANIMATION //
function startAnim() {
    console.log("startAnim");
      TweenLite.set(logo, {visibility:"visible"});
      TweenLite.set(logo2, {visibility:"visible"});
      TweenLite.set(dude, {visibility:"visible"});
      TweenLite.set(bubble, {visibility:"visible", scale:1, x:0, y:0});
      TweenLite.set(bg, {visibility:"visible" ,opacity:0 });
      TweenLite.set(tcs, {visibility:"visible"});

      TweenLite.set(blobs, {visibility:"visible"});
      TweenLite.set(pack, {visibility:"visible", x:0});
      TweenLite.set(txt1, {visibility:"visible", x:-220});
      TweenLite.set(txt2, {visibility:"visible", x:-220});
      TweenLite.set(cta, {visibility:"visible"});


      TweenLite.to([logo, logo2, dude, bubble], .5, { ease: Power1.easeInOut, alpha:1 })
      TweenLite.to("#dudeBubble", 0, { ease: Power1.easeInOut, scale:.59, y:0 })

      TweenLite.to("#dudeBubble", 3, { ease: Power1.easeInOut, scale:.86, x:38, y:-46, delay:0 })
      TweenLite.to([bubble], 2, { ease: Power1.easeInOut, scale:1.9, x:-15, y:-49, delay:.5 })

      TweenLite.to([bg], 1, { ease: Power4.easeOut, alpha: 1 ,delay:2.5 })

      TweenLite.set( pack, {scale:0, alpha:1, delay:0})
      TweenLite.to( pack, 2, {ease:Elastic. easeOut.config(1, 0.4),scale:1, delay:3})
      TweenLite.to( pack, 1, { ease: Power4.easeInOut, x: 300, delay:5.5 })

      TweenLite.set([ txt1,txt2],{x: -220, alpha:1, delay:0})

      TweenLite.to( txt1, 1, { ease: Power4.easeInOut, x: 0, alpha:1, delay:5.5})
      TweenLite.to( txt2, 1, { ease: Power4.easeInOut, x: 0, alpha:1, delay:6})

      TweenLite.set( cta, { scale:0, alpha: 1, delay:0 })
      TweenLite.to( cta,2, {ease:Elastic. easeOut.config(1, 0.4), scale:1,  delay:7 })

      TweenLite.set("#dudeBubble",{scale:.59, y:0, x:0, delay:5 })
      TweenLite.set([bubble,dude], {scale:1, x:0, y:0, delay:5});

      TweenLite.delayedCall(11,doEndFade);
  }

  function doEndFade() {
      if (loopcount == 0) {

        TweenLite.to([cta,bg,txt1,txt2 ], 0.5, { alpha: 0, ease:Quad.easeIn, delay:0 })
        TweenLite.delayedCall(0.5,startAnim);
      }
      loopcount+=1;
  }
