  var master      = new TimelineMax(),
      screenW     = $(window).width(),
      screenH     = $(window).height(),
      redCar      = $("#red-car"),
      qbeLogo     = $("#qbe-logo"),
      mainText    = $("#main-text"),
      glassCrack  = $("#glass"),
      ctaQbe      = $("#banner-area-full"),
      ctaText     = $("#cta-text"),
      btnQuote    = $("#btn-get-quote"),
      conditions  = $("#conditions-text")
      audio       = $("#glass-audio");

$(document).ready(function(){
  preloadAssets();
  setCtaQbe();
  addEventListener();
});

function addEventListener() {
  audio.trigger('load');
}

function setCtaQbe() {
  ctaQbe.width(screenW);
  ctaQbe.height(screenH);
}

function preloadAssets() {

    var i = [
      "logo-qbe.svg",
      "logo-qbe1.svg",
      "btn.png",
      "cta-text.png",
      "glass-shatter.svg",
      "car.png"
    ];

    preloadimages(i).done(function (images) {

        imagesLoaded = true;
        beginAmimation();
    })
}

function playSound() {
  audio.trigger('play');     
}

function beginAmimation(){
  var w = screenW/320,
      h = screenH/568,
      x = (screenW-320)/2,
      y = (screenH-568)/2;
  master.set(glassCrack, {scaleX: w, scaleY: h, x: x, y: y});
}

$("#clickable-overlay").click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  master.call(playSound)
        .set(glassCrack, {visibility: "visible"})
        .set(ctaQbe, {visibility: "visible"})
        .staggerFrom('#glass .st0', 0.5, {autoAlpha: 0}, 0.005, "-=0.1")
        .staggerFrom('#glass .st1', 0.5, {autoAlpha: 0}, 0.005, "-=0.3")
        .staggerFromTo('#glass .st1', 0.5, {rotation:0, y:0, x:0}, {rotation:180, y:500, x:50, transformOrigin:"50% 50%", transformPerspective:200, ease:Power4.easeOut}, 0.005, "-=0.5")
        
        .from(ctaQbe, 1, {autoAlpha: 0}, "+=0.5")
        .from("#red-car1", 1, {x: -400, ease:Back.easeOut})
        .from(["#weel3", "#weel4"], 1, {rotation: -360}, "-=1")
        .from("#qbe-logo1", 0.5, {y:15, autoAlpha: 0}, "-=0.8")
        .from(conditions, 0.5, {y:15, autoAlpha: 0}, "-=0.8")
        .from(ctaText, 0.5, {y:-15, autoAlpha: 0}, "-=0.8")
        .from(btnQuote, 0.5, {y:-15, autoAlpha: 0}, "-=0.8");
});

$("#close-banner").click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  master.set(glassCrack, {visibility: "hidden"})
        .set(ctaQbe, {visibility: "hidden"});
});

$("#clickable-overlay1").click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  window.open('https://www.qbe.com.au/personal/quote/vehicle/car-insurance', '_blank');
});

// PRE-LOAD IMAGES FUNCTIONALITY ------------------------------------------------------------
function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0
    var postaction = function () {}
    var arr = (typeof arr != "object") ? [arr] : arr

    function imageloadpost() {
        loadedimages++
        if (loadedimages == arr.length) {
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image()
        newimages[i].src = arr[i]
        newimages[i].onload = function () {
            imageloadpost()
        }
        newimages[i].onerror = function () {
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction //remember user defined callback functions to be called when images load
        }
    }
}
