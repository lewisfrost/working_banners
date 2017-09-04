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
	tl.set("#bg",{scale:1, x:0, y:0});
	
	tl.set(["#bigfishL1","#bigfishL3"],{x:728, autoAlpha:1});
	tl.set(["#bigfishL2","#bigfishL5"],{x:750, autoAlpha:1});
	tl.set(["#bigfishL4","#bigfishL6"],{x:820, autoAlpha:1});
	tl.set(["#Smallfish1","#Smallfish2","#Smallfish3","#Smallfish4","#Smallfish5","#Smallfish6"],{x:785, autoAlpha:1});
  
    // seperate by sequences to skip and test
    tl.add("start fade in");
        tl.to("#bannerTime", 0.5, {autoAlpha:1});
    
   tl.add("sequence 1");
	   
		
        tl.to("#Smallfish1",15,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut});
		tl.to("#Smallfish2",15,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=14.0");
		tl.to("#Smallfish3",15,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=14.2");
		tl.to("#Smallfish4",15,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=13.2");
		tl.to("#Smallfish5",15,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=14.8");
		tl.to("#Smallfish6",15,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=15.0");
		
		tl.to("#bigfishL2",15,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=14.7");
		tl.to("#bigfishL1",15,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=14.5");
		
		tl.to("#bigfishL3",15,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=14.7");
		tl.to("#bigfishL4",15,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=14.6");
		
		tl.to("#bigfishL5",15,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=15.4");
		tl.to("#bigfishL6",15,   {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=14.8");
		tl.to("#Smallfish5",15,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=14.5");
		tl.to("#Smallfish6",15,  {autoAlpha:1, x:0, rotationZ:0.003, ease: Sine.easeOut}, "-=14.4");
		
		
		tl.to("#fish_animation",3,  {scale:1.3, y:-50, x:30, force3D:true, ease: Sine.easeOut, rotationZ:0.03},"-=1");
		tl.to("#bg",3,  {autoAlpha:1, y:30, ease: Quad.easeInOut},"-=3");
		
		 tl.to("#type_1", 0.3, {autoAlpha:1},"-=1.0");
        tl.to("#type_1", 0.3, {autoAlpha:0}, "+=0.5");
        tl.to("#type_2", 0.3, {autoAlpha:1}, "+=0.3");
       // tl.to("#type_2", 0.7, {autoAlpha:0}, "+=2");
		tl.to(["#fish_animation","#bg","#type_2"],0.7,  {alpha:0},"+=2");
    
		
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
	tl.set(["#bigfishR1","#bigfishR3"],{x:-728, autoAlpha:1});
	tl.set(["#bigfishR2","#bigfishR6"],{x:-750, autoAlpha:1});
	tl.set(["#bigfishR4","#bigfishR5"],{x:-650, autoAlpha:1});
	
	tl.add("start fade in");
	
	tl.to("#bigfishR1",15,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"+=4");
	tl.to("#bigfishR2",15,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"-=14.8");
	tl.to("#bigfishR3",15,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"-=14.5");
	tl.to("#bigfishR4",15,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"-=14.3");
	tl.to("#bigfishR5",15,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"-=14.5");
	tl.to("#bigfishR6",15,   {autoAlpha:1, x:0,  rotationZ:0.003, ease: Sine.easeOut},"-=14.5");
	
}

function fing_animation() { 
    console.log("fing_animation()");

    // timeline
    var tl = new TimelineMax({repeat: 20, repeatDelay: 0});
	
	tl.to(["#fingL1","#fingL2","#fingL3","#fingL4","#fingL5","#fingL6","#fingR1","#fingR2","#fingR3","#fingR4","#fingR5","#fingR6"],0.3,   {rotation:7, scaleX:0.9, rotationZ:0.003, ease: Sine.easeOut, force3D:true});
	tl.to(["#fingL1","#fingL2","#fingL3","#fingL4","#fingL5","#fingL6","#fingR1","#fingR2","#fingR3","#fingR4","#fingR5","#fingR6"],0.3,   { rotation:-7, rotationZ:0.003, ease: Sine.easeOut, force3D:true});
	tl.to(["#fingL1","#fingL2","#fingL3","#fingL4","#fingL5","#fingL6","#fingR1","#fingR2","#fingR3","#fingR4","#fingR5","#fingR6"],0.3, {rotation:0, scaleX:1, rotationZ:0.003, ease: Sine.easeOut, force3D:true});

	
}