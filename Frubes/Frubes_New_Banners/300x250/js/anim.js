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
var flash_img = document.getElementsByClassName("flash_img");

var loopcount = 0;

window.onload = function() {
    addevents();
    startAnim();
};

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
      TweenLite.set(flash_img, {visibility:"visible"});

      TweenLite.to([logo, logo2, dude, ".bubble"], .5, { ease: Power1.easeInOut, alpha:1 })
      TweenLite.to(".bubble", 0, { ease: Power1.easeInOut, scale:.35, y:0 })

      TweenLite.to([".bubble"], 0.75, { ease: Power2.easeIn, scale:2.9, x:-56, y:-47, delay:.5 })

      TweenLite.to([".bubble"], 0.2, { opacity:0, delay:1.3 })

      TweenLite.to([bg], 1, { ease: Power4.easeOut, alpha: 1 ,delay:1.3 })

      TweenLite.to(".flash_img", 0.2, {css:{filter: "brightness(3)", alpha:1}, delay:1.2});
      TweenLite.to(".flash_img", 0.2, {css:{"-webkit-filter": "brightness(3)", alpha:1}, delay:1.2});

      TweenLite.to(".flash_img", 0.5, {css:{filter: "brightness(3)", alpha:0}, delay:1.5});
      TweenLite.to(".flash_img", 0.5, {css:{"-webkit-filter": "brightness(3)", alpha:0}, delay:1.5});

      TweenLite.set(dude,{alpha:0, delay:1.2});

      TweenLite.set( pack, {scale:0, alpha:1, delay:0})
      TweenLite.to( pack, 2, {ease:Elastic. easeOut.config(1, 0.4),scale:1, delay:1.8})
      TweenLite.to( pack, 1, { ease: Power4.easeInOut, x: 300, delay:5 })

      TweenLite.set([ txt1,txt2],{x: -220, alpha:1, delay:0})

      TweenLite.to( txt1, 1, { ease: Power4.easeInOut, x: 0, alpha:1, delay:5})
      TweenLite.to( txt2, 1, { ease: Power4.easeInOut, x: 0, alpha:1, delay:5.5})

      TweenLite.set( cta, { scale:0, alpha: 1, delay:0 })
      TweenLite.to( cta,2, {ease:Elastic. easeOut.config(1, 0.4), scale:1,  delay:6.5 })

      TweenLite.set(".bubble",{scale:.35, y:0, x:0, delay:2.5 })

      TweenLite.delayedCall(10,doEndFade);
  }

  function doEndFade() {
      if (loopcount == 0) {

        TweenLite.to([cta,bg,txt1,txt2 ], 0.5, { alpha: 0, ease:Quad.easeIn, delay:0 })
        TweenLite.delayedCall(0.5,startAnim);
      }
      loopcount+=1;
  }
