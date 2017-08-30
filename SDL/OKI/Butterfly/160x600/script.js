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
politeLoad(['https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.19.0_643d6911392a3398cb1607993edabfa7_min.js', 'https://s0.2mdn.net/ads/studio/cached_libs/cssplugin_1.19.0_cfbff7d208ccfdbe176b9855af1eb1fa_min.js'], function() { startBanner(); feather_animation(); });
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, ready);
    }
}

function startBanner() { 
    console.log("startBanner()");

    // timeline
    var tl = new TimelineMax({repeat: 0, repeatDelay: 3});

    // setup
    tl.set(["#type_1", "#type_2", "#type_3", "#cta", "#tagline", "#logo", "#tagline", "#white_box"], {autoAlpha:0});
	tl.set(["#butterfly_animation1"], {scale:0.5, });
	tl.set(["#butterfly_animation2"], {scale:0.4, });
	tl.set(["#butterfly_animation3"], {scale:0.6, x:-160, rotation:45, y:600});
  
    // seperate by sequences to skip and test
    tl.add("start fade in");
        tl.to("#bannerTime", 0.5, {autoAlpha:1});
    
    tl.add("sequence 1");
		tl.to("#butterfly_animation1", 5, {bezier:{type:"soft", values:[{x:-50, y:-100}, {x:-100, y:-400}, {x:-200, y:-600}]}, force3D:false, ease:Linear.easeNone, rotation:-10, rotationZ:0.01, overwrite:0});
		tl.to("#butterfly_animation2", 5, {bezier:{type:"soft", values:[{x:100, y:-100}, {x:160, y:-200}, {x:500, y:-260}]}, force3D:false, ease:Linear.easeNone, rotation:30, rotationZ:0.01, overwrite:0}, "-=6");
		tl.to("#butterfly_animation3", 5, {bezier:{type:"soft", values:[{x:100, y:110}, {x:-100, y:50}, {x:0, y:0}]}, force3D:false, ease:Linear.easeNone, scale:0.9, rotationZ:0.01, overwrite:0}, "-=7");
		tl.to("#butterfly_animation3", 3, {scale:1.3, rotation:-15, force3D:false, rotationZ:0.01},"-=4");
		tl.to("#type_1", 0.3, {autoAlpha:1}, "-=1");
		tl.to(["#butterfly_animation3"], 15, {scale:3.2, force3D:false,   ease:Linear.easeNone},"-=1");
        tl.to("#type_1", 0.3, {autoAlpha:0}, "-=13");
        tl.to("#type_2", 0.3, {autoAlpha:1},"-=12.5");

        tl.to("#type_2", 0.7, {ease: Power2.easeInOut, autoAlpha:0}, "-=10");
		tl.to(["#butterfly_animation3"], 0.7, {scale:5.4, rotation:-40, y:68, x:7, force3D:false, ease:Linear.easeNone},"-=9.5");
		tl.to("#butterfly_animation3", 0.7, {ease: Power2.easeInOut, autoAlpha:0},"-=8");
    
		tl.set(["#butterfly_animation3"], {scale:4.5, y:-78, rotation:-22},"-=7.3");
        tl.set(["#white_box"], {autoAlpha:1},"-=7.3");
		tl.to("#butterfly_animation3", 0.7, {ease: Power2.easeInOut, autoAlpha:1},"-=6.5");
        tl.from("#white_box", 0.5, {ease: Sine.easeOut, y:254},"-=6");
        tl.to("#type_3", 1, {autoAlpha:1},"-=5.5");
        tl.to("#type_3", 0.3, {autoAlpha:0}, "-=2");
   
        tl.to("#logo", 0.3, {autoAlpha:1}, "-=1.7");
        tl.to("#tagline", 0.3, {autoAlpha:1}, "-=1.7");
        tl.to("#cta", 0.3, {autoAlpha:1}, "-=1");
	
	
        
    
    // skip to labels if needed
    tl.play();

    // end
}

function feather_animation() { 
    console.log("startBanner()");

    // timeline
    var tl = new TimelineMax({repeat: 25, repeatDelay: 0});

    // setup
  
	tl.add("sequence 4");
        tl.to(["#feather_right1","#feather_left1","#feather_right2","#feather_left2",,"#feather_right3","#feather_left3"], 0.1, {scaleX:0.3, rotationZ:0.003});
		tl.to(["#feather_right1","#feather_left1","#feather_right2","#feather_left2",,"#feather_right3","#feather_left3"], 0.1, {scaleX:1, rotationZ:0.003});
    
    // skip to labels if needed
    tl.play();

    // end
}
