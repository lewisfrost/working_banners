var banner = document.getElementById("bannerTime");
var bWidth = 300;
var bW = bWidth;
var bHeight = 250;
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
politeLoad(['https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.19.0_643d6911392a3398cb1607993edabfa7_min.js', 'https://s0.2mdn.net/ads/studio/cached_libs/cssplugin_1.19.0_cfbff7d208ccfdbe176b9855af1eb1fa_min.js'], function() { startBanner(); bigfishR1_anim(); fing_animation();});
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
	tl.set("#bg",{scale:1, x:0, y:50});
	
	tl.set(["#bigfishL1","#bigfishL3"],{x:450, autoAlpha:1});
	tl.set(["#bigfishL2","#bigfishL5"],{x:350, autoAlpha:1});
	tl.set(["#bigfishL4","#bigfishL6"],{x:200, autoAlpha:1});
	tl.set(["#Smallfish1","#Smallfish2","#Smallfish3","#Smallfish4","#Smallfish5","#Smallfish6"],{x:320, autoAlpha:1});
  
    // seperate by sequences to skip and test
    tl.add("start fade in");
        tl.to("#bannerTime", 0.5, {autoAlpha:1});
    
    tl.add("sequence 1");
	   
		
        tl.to("#Smallfish1",10,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=0");
		tl.to("#Smallfish2",10,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=9.7");
		tl.to("#Smallfish3",10,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=9.4");
		tl.to("#Smallfish4",10,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=9.1");
		tl.to("#Smallfish4",10,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=8.6");
		
		tl.to("#bigfishL2",10,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=11.7");
		tl.to("#bigfishL1",10,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=11.5");
		
		tl.to("#bigfishL3",10,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=11.3");
		tl.to("#bigfishL4",10,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=11.6");
		
		tl.to("#bigfishL5",10,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=11.4");
		tl.to("#bigfishL6",10,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=11.2");
		tl.to("#Smallfish5",10,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=11.5");
		tl.to("#Smallfish6",10,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=11.6");
		
		tl.to("#bg",3,  {autoAlpha:1, y:0, ease: Quad.easeInOut,});
		tl.to("#fish_animation",3,  {scale:1.4, y:-78, x:30, force3D:true, ease: Sine.easeOut, rotationZ:0.03},"-=2");
		
		
		
		
        tl.to("#type_1", 0.3, {autoAlpha:1},"-=3");
        tl.to("#type_1", 0.3, {autoAlpha:0}, "-=1");
        tl.to("#type_2", 0.3, {autoAlpha:1}, "-=0.5");
        tl.to("#type_2", 0.7, {ease: Power2.easeInOut, autoAlpha:0}, "+=2");
		tl.to("#fish_animation",0.7,  {alpha:0},"-=0.5");
    
  
    tl.add("sequence 2");
        tl.set(["#white_box"], {autoAlpha:1});
		tl.to("#end_frame", 0.5, {autoAlpha:1}, "+=0");
        tl.from("#white_box", 0.5, {ease: Sine.easeOut, y:130}, "-=0");
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

function bigfishR1_anim() { 
    console.log("bigfishR1_anim()");

    // timeline
    var tl = new TimelineMax({repeat: 0, repeatDelay: 0});
	tl.set(["#bigfishR1","#bigfishR3"],{x:-450, autoAlpha:1});
	tl.set(["#bigfishR2","#bigfishR6"],{x:-350, autoAlpha:1});
	tl.set(["#bigfishR4","#bigfishR5"],{x:-150, autoAlpha:1});
	
	tl.add("start fade in");
	
	tl.to("#bigfishR1",10,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"+=3");
	tl.to("#bigfishR2",10,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"-=9.8");
	tl.to("#bigfishR3",10,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"-=9.5");
	tl.to("#bigfishR4",10,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"-=9.3");
	tl.to("#bigfishR5",10,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"-=9.5");
	tl.to("#bigfishR6",10,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"-=9.5");
	
}

function fing_animation() { 
    console.log("fing_animation()");

    // timeline
    var tl = new TimelineMax({repeat: 15, repeatDelay: 0});
	
	tl.to(["#fingL1","#fingL2","#fingL3","#fingL4","#fingL5","#fingL6","#fingR1","#fingR2","#fingR3","#fingR4","#fingR5","#fingR6"],0.3,   {rotation:7, scaleX:0.9, rotationZ:0.003, ease: Sine.easeOut, force3D:true});
	tl.to(["#fingL1","#fingL2","#fingL3","#fingL4","#fingL5","#fingL6","#fingR1","#fingR2","#fingR3","#fingR4","#fingR5","#fingR6"],0.3,   { rotation:-7, rotationZ:0.003, ease: Sine.easeOut, force3D:true});
	tl.to(["#fingL1","#fingL2","#fingL3","#fingL4","#fingL5","#fingL6","#fingR1","#fingR2","#fingR3","#fingR4","#fingR5","#fingR6"],0.3, {rotation:0, scaleX:1, rotationZ:0.003, ease: Sine.easeOut, force3D:true});

	
}