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
politeLoad(['https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.19.0_643d6911392a3398cb1607993edabfa7_min.js', 'https://s0.2mdn.net/ads/studio/cached_libs/cssplugin_1.19.0_cfbff7d208ccfdbe176b9855af1eb1fa_min.js'], function() { startBanner(); wheel_animation(); });
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
    tl.set("#byke_animation",{alpha:1, x:-295, y:30})
	tl.set(".bannerBg_img",{x:-39, y:-150})
  
    // seperate by sequences to skip and test
    tl.add("start fade in");
        tl.to("#bannerTime", 0.5, {autoAlpha:1});
    
    tl.add("sequence 1");
        tl.to("#byke_animation", 2, {scale:0.53,  ease:Quad.easeInOut, force3D:true, rotationZ:0.01, x:-73, y:27});
        tl.to(".bannerBg_img", 2, {scale:0.54, ease:Quad.easeInOut, force3D:true, rotationZ:0.01, x:-86, y:-132},"-=2");
        tl.to("#type_1", 0.3, {autoAlpha:1}, "-=0");
        tl.to("#type_1", 0.3, {autoAlpha:0}, "+=1.2");
        tl.to("#type_2", 0.3, {autoAlpha:1}, "+=0.5");
        tl.to("#type_2", 0.7, {ease: Power2.easeInOut, autoAlpha:0}, "+=3.5");
		
		tl.to("#byke_animation", 6, {scale:1.22, force3D:true, rotationZ:0.01, x:2, y:-120},"-=6.7");
		tl.to(".bannerBg_img", 6, {scale:1.26, force3D:true, rotationZ:0.01, x:-120, y:-200},"-=6.7");
		tl.to(["#front_wheel","#back_wheel"], 6, {rotation:700, rotationZ:0.01, force3D:true, esae:Linear.easeNone},"-=6.7");
		tl.to("#byke_animation", 2.5, {scale:4, x:264, y:-505, force3D:false, ease: Quad.easeInOut});
        tl.to(".bannerBg_img", 2.5, {scale:2, x:-187, y:-131, ease:Quad.easeInOut},"-=2.5");
		
        tl.to("#byke_animation", 0.7, {ease: Power2.easeInOut, autoAlpha:0}, "+=2.5");
		tl.set(".end_frame", {autoAlpha:1},"-=0.5");
    
    
    tl.add("sequence 2");
        tl.set(["#white_box"], {autoAlpha:1});
        tl.from("#white_box", 0.5, {ease: Sine.easeOut, y:260});
        tl.to("#type_3", 1, {autoAlpha:1}, "+=0");
        tl.to("#type_3", 0.3, {autoAlpha:0}, "+=3");
    
    tl.add("sequence 3");
        tl.to("#logo", 0.3, {autoAlpha:1}, "+=0.3");
        tl.to("#tagline", 0.3, {autoAlpha:1}, "-=0.3");
        tl.to("#cta", 0.3, {autoAlpha:1}, "+=0.5");
    
    // skip to labels if needed
    tl.play();

    //end
}

function wheel_animation(){
	 console.log("startBanner()");
	 var tl = new TimelineMax({repeat:0, repeatDelay:3});
	 tl.add("wheel rotation");
	 tl.to(".bannerBg_img", 0.5, {alpha:1},"-=0.5");
	 tl.to("#front_wheel", 2.5, {rotation:450, force3D:true, ease:Quad.easeInOut},"-=0.5");
	 tl.to("#back_wheel", 2.5, {rotation:450, force3D:true, ease:Quad.easeInOut},"-=2.5");
	}