var banner = document.getElementById("bannerTime");
var bWidth = 728;
var bW = bWidth;
var bHeight = 90;
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
	tl.set("#byke_animation",{alpha:1, x:-306})
  	
    // seperate by sequences to skip and test
    tl.add("start fade in");
        tl.to("#bannerTime", 0.5, {autoAlpha:1});
    
    tl.add("sequence 1");
        tl.to("#byke_animation", 3, {esae:Linear.easeNone, force3D:true, rotationZ:0.01, x:0});
		tl.to(".bannerBg_img", 3, {esae:Linear.easeNone, force3D:true, rotationZ:0.01, x:-160},"-=2.6");
        tl.to("#type_1", 0.3, {autoAlpha:1}, "-=0");
        tl.to("#type_1", 0.3, {autoAlpha:0}, "+=1.2");
        tl.to("#type_2", 0.3, {autoAlpha:1}, "+=0.5");
        tl.to("#type_2", 0.7, {ease: Power2.easeInOut, autoAlpha:0}, "+=3.5");
		
		tl.to("#byke_animation", 6, {scale:1.68, force3D:true, rotationZ:0.01, x:136, y:-22},"-=6.7");
		tl.to(".bannerBg_img", 6, {scale:2, force3D:true, rotationZ:0.01, x:-490, y:-30},"-=6.7");
		tl.to(["#front_wheel","#back_wheel"], 6, {rotation:700, force3D:false, rotationZ:0.03, esae:Linear.easeNone},"-=6.7");
		tl.to("#byke_animation", 2.5, {scale:8.4, x:707, y:-82, force3D:false, rotationZ:0.03, ease: Quad.easeInOut});
		
		//tl.to(["#front_wheel","#back_wheel"], 0.7, {rotation:700, force3D:false, rotationZ:0.01, ease: Quad.easeInOut},"-=0.7");
		tl.to(".bannerBg_img", 2.5, {scale:3, x:-535, y:-61},"-=2.5");
        tl.to(["#byke_animation",".bannerBg_img"], 0.7, {ease: Power2.easeInOut, autoAlpha:0}, "+=2.5");
		tl.set(".end_frame", {autoAlpha:1},"-=1");
    
    
    tl.add("sequence 2");
        tl.set(["#white_box"], {autoAlpha:1});
        tl.from("#white_box", 0.5, {ease: Sine.easeOut, x:444});
        tl.to("#type_3", 1, {autoAlpha:1}, "+=0");
        tl.to("#type_3", 0.3, {autoAlpha:0}, "+=3");
    
    tl.add("sequence 3");
        tl.to("#logo", 0.3, {autoAlpha:1}, "+=0.3");
        tl.to("#tagline", 0.3, {autoAlpha:1}, "-=0.3");
        tl.to("#cta", 0.3, {autoAlpha:1}, "+=0.5");
    
    // skip to labels if needed
    tl.play();

    // end
}

function wheel_animation(){
	 console.log("startBanner()");
	 var tl = new TimelineMax({repeat:0, repeatDelay:3});
	 tl.add("wheel rotation");
	 tl.to(".bannerBg_img", 0.5, {alpha:1},"-=0.5");
	 tl.to("#front_wheel", 3.5, {rotation:450, force3D:true, ease:Quad.easeInOut},"-=0.5");
	 tl.to("#back_wheel", 3.5, {rotation:450, force3D:true, ease:Quad.easeInOut},"-=3.5");
	}