var banner = document.getElementById("bannerTime");
var bWidth = 160;
var bW = bWidth;
var bHeight = 600;
var bH = bHeight;

function doExitEvent() {
    Enabler.exit("cta");
}

// loading script
function politeLoad(urls, onComplete) {
    var l = urls.length,
        loaded = 0,
        checkProgress = function() {
            if (++loaded === l && onComplete) {
                onComplete();
            }
        },
        i;
    for (i = 0; i < l; i++) {
        Enabler.loadScript(urls[i], checkProgress);
    }
}

// Enabler initialized
function init() {
    console.log("init()");
    
    if (Enabler.isInitialized()) {
        init();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, ready);
    }
}

// Page is ready
function ready() {
    if (Enabler.isPageLoaded()) {
        // polite load greensock
politeLoad(['https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.19.0_643d6911392a3398cb1607993edabfa7_min.js', 'https://s0.2mdn.net/ads/studio/cached_libs/cssplugin_1.19.0_cfbff7d208ccfdbe176b9855af1eb1fa_min.js'], function() { startBanner(); });
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, ready);
    }
}

function startBanner() { 
    console.log("startBanner()");

    // timeline
    var tl = new TimelineMax({repeat: 0, repeatDelay: 3});

    // setup
    tl.set(["#type_1", "#type_2", "#type_3", "#cta", "#tagline", "#logo", "#tagline", "#white_box", "#eye"], {autoAlpha:0});
  
    // seperate by sequences to skip and test
    tl.add("start fade in");
        tl.to("#bannerTime", 0.5, {autoAlpha:1});
    
    tl.add("sequence 1");
        tl.to("#peacock_animation", 5, {ease: Power2.easeInOut, x:399, y:387, scale:0.2}, "+=1.5");
        tl.to("#eye", 0.1, {autoAlpha:1}, "-=5.75");
        tl.to("#eye", 0.1, {autoAlpha:0}, "-=5.55");
        tl.to("#type_1", 0.3, {autoAlpha:1}, "-=1");
        tl.to("#type_1", 0.3, {autoAlpha:0}, "+=1.2");
        tl.to("#type_2", 0.3, {autoAlpha:1}, "+=0.5");
        tl.to("#type_2", 0.7, {ease: Power2.easeInOut, autoAlpha:0}, "+=3.5");
        tl.to("#peacock_animation", 0.7, {ease: Power2.easeInOut, autoAlpha:0}, "-=0.7");
    
    
   tl.add("sequence 2");
        tl.set(["#white_box"], {autoAlpha:1});
        tl.set(["#peacock_animation"], {scale:0.68,x:157,y:161, autoAlpha:0});
        tl.to("#peacock_animation", 1, {ease: Power2.easeInOut, autoAlpha:1}, "+=0");
        tl.from("#white_box", 0.5, {ease: Sine.easeOut, y:254}, "-=0.5");
        tl.to("#type_3", 1, {autoAlpha:1}, "+=0");
        tl.to("#type_3", 0.3, {autoAlpha:0}, "+=3");
        tl.to("#eye", 0.1, {autoAlpha:1}, "-=2");
        tl.to("#eye", 0.1, {autoAlpha:0}, "-=1.8");
    
  tl.add("sequence 3");
        tl.to("#logo", 0.3, {autoAlpha:1}, "+=0.3");
        tl.to("#tagline", 0.3, {autoAlpha:1}, "-=0.3");
        tl.to("#cta", 0.3, {autoAlpha:1}, "+=0.5");
        tl.to("#eye", 0.1, {autoAlpha:1}, "+=0.5");
        tl.to("#eye", 0.1, {autoAlpha:0}, "+=0.2");
    
    // skip to labels if needed
    tl.play();

    // end
}