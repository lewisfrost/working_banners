var loaded = false;
var ad_container;
var collapse_container;
var expand_container_dc;
var expanded_bg;
var cta;
var tl_anim;
var tl_fx;
var btn_expand;

window.onload = function(){
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
};  

enablerInitHandler = function(e) {
	if(Enabler.isVisible()) {
		startAd();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAd);
	} 
};

startAd = function(e) {

	Enabler.setExpandingPixelOffsets(
		0, // left
		140, // top
		980, // expandedWidth
		250  // expandedHeight
	);
	Enabler.setIsMultiDirectional(false);

	collapse_container = document.getElementById('collapse_container_dc');
	ad_container = document.getElementById('ad-container');
	expand_container_dc = document.getElementById('expand-container-dc');
	btn_expand = document.getElementById('expand');
	init();
	
	Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START,expandHandler);
	Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START,collapseHandler);
	Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
	Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);
	
	ad_container.style.display = 'block';
	
/*
	if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || navigator.userAgent.toLowerCase().indexOf('safari') > -1) {
		document.body.className = document.body.className+' chrome';
		document.getElementById('logo_wrapper').innerHTML = '';
	}
*/
}

function bg_exit() {
	Enabler.exit('HTML5_Collapse_Clickthrough');
}

function expand() {
	Enabler.requestExpand();
	cta.removeEventListener('click',expand);
	document.getElementById('rollover').style.display = 'none';
	document.getElementById('footer').style.display = 'block';
	document.getElementById('logo_2k_wrapper').style.right = '213px';
	document.getElementById('txt_legal_wrapper').style.right = '167px';
	set_cta_end();
}

function showElements()
{
	TweenMax.to("#expand",.5,{ opacity:1, ease:Power3.easeOut, onStart: function() { document.getElementById('expand').style.display = 'block'; } });
	expand_container_dc.style.display = 'block';
	var tl = new TimelineLite();
		tl.from(expand_container_dc,.4,{ height: 110, ease:Power1.easeOut })
		  .from("#video1_container_dc",.4,{ autoAlpha: 0, ease:Power1.easeOut, onStart: politeInit });
}
function hideElements()
{
	expand_container_dc.style.display = 'none';
}
function expandHandler() {
	toggleClass('collapse', 'expand');
	showElements();
}
function expandFinishHandler() {
	Enabler.finishExpand();
}
function collapseHandler() {
	toggleClass('expand', 'collapse')
	hideElements();
	Enabler.finishCollapse();
}
function collapseFinishHandler() {
	expand_container_dc.style.height = 110;
	animate_reset();
}
function toggleClass(from, to) {
	viewport.className = viewport.className.replace(from, to);
}

function init() {
	animate();
	cta = document.getElementById('clicktag');
	cta.addEventListener('click',expand , false);
	btn_expand.addEventListener('click',btn_expand_handler,false);
}

function btn_expand_handler() {
	console.log('btn expand clicked');
	Enabler.requestExpand();
	var tl = new TimelineLite();
		tl.from(expand_container_dc,.4,{ height: 250, ease:Power1.easeOut })
		  .to("#video1_container_dc",.4,{ autoAlpha: 1, ease:Power1.easeOut, onComplete: init_expand });
}

function set_cta_end() {
	var cta_txt = document.getElementById('txt_order');
	cta.addEventListener('click',bg_exit,false);
	cta.addEventListener('mouseenter', function() {
		cta_txt.classList.remove('out');
		cta_txt.classList.add('over');
	}, false);
	cta.addEventListener('mouseleave', function() {
		cta_txt.classList.remove('over');
		cta_txt.classList.add('out');
	}, false);
}

function politeInit(){
	if(!loaded) {
	tl_anim.seek('12',false);
	tl_fx.seek('12',false);	
	loaded = true;
	//Load in Javascript
	var extJavascript = document.createElement('script');
	extJavascript.setAttribute('type', 'text/javascript');
	extJavascript.setAttribute('src', Enabler.getUrl('video.js')); 
	document.getElementsByTagName('head')[0].appendChild(extJavascript);
	
	//Load in CSS
	var extCSS=document.createElement('link');
	extCSS.setAttribute('rel', 'stylesheet');
	extCSS.setAttribute('type', 'text/css');
	extCSS.setAttribute('href', Enabler.getUrl('video.css')); 
	document.getElementsByTagName('head')[0].appendChild(extCSS);
	}
}

function animate() {
// --------------- Animations --------------- \\
	document.getElementById('loader').style.display = 'none';
	document.getElementById('smoke_fader').style.opacity = 0;
	tl_fx = new TimelineLite();
	tl_fx.from("#dust_smoke",10,{ autoAlpha:0, scale:1.5, ease:Power1.easeOut, delay:0 }, "dust")
		 .to("#dust_smoke",.5,{ autoAlpha:0, ease:Power1.easeOut, delay:0 })
		 .to("#smoke1",getRandom(9,11),{scale:getRandom(1,5),rotation:getRandom(-360,360),left:getRandom(-75,1055),top:getRandom(0,110),delay:getRandom(0,.5), ease:Power1.easeOut,onComplete:hide_smoke,onCompleteParams:["#smoke1"]}, "dust")
		 .to("#smoke2",getRandom(9,11),{scale:getRandom(1,5),rotation:getRandom(-360,360),left:getRandom(-75,1055),top:getRandom(0,110),delay:getRandom(0,.5), ease:Power1.easeOut,onComplete:hide_smoke,onCompleteParams:["#smoke2"]}, "dust")
		 .to("#smoke3",getRandom(9,11),{scale:getRandom(1,5),rotation:getRandom(-360,360),left:getRandom(-75,1055),top:getRandom(0,110),delay:getRandom(0,.5), ease:Power1.easeOut,onComplete:hide_smoke,onCompleteParams:["#smoke3"]}, "dust")
		 .to("#smoke4",getRandom(9,11),{scale:getRandom(1,5),rotation:getRandom(-360,360),left:getRandom(-75,1055),top:getRandom(0,110),delay:getRandom(0,.5), ease:Power1.easeInOut,onComplete:hide_smoke,onCompleteParams:["#smoke4"]}, "dust")
		 .to("#smoke5",getRandom(9,11),{scale:getRandom(1,5),rotation:getRandom(-360,360),left:getRandom(-75,1055),top:getRandom(0,110),delay:getRandom(0,.5), ease:Power1.easeOut,onComplete:hide_smoke,onCompleteParams:["#smoke5"]}, "dust")
		 .to("#smoke6",getRandom(9,11),{scale:getRandom(1,5),rotation:getRandom(-360,360),left:getRandom(-75,1055),top:getRandom(0,110),delay:getRandom(0,.5), ease:Power1.easeOut,onComplete:hide_smoke,onCompleteParams:["#smoke5"]}, "dust")
		 .to("#smoke7",getRandom(9,11),{scale:getRandom(1,5),rotation:getRandom(-360,360),left:getRandom(-75,1055),top:getRandom(0,110),delay:getRandom(0,.5), ease:Power1.easeOut,onComplete:hide_smoke,onCompleteParams:["#smoke5"]}, "dust")
		 .to("#smoke_fader",3,{ opacity:1, ease:Power1.easeOut }, "-=1.5");
	tl_anim = new TimelineLite();
	tl_anim.from("#txt1",3.5,{ autoAlpha:0, scale:.8, ease:Power1.easeOut, delay:0 })
	  .from(["#flare","#flare2"],.35,{ autoAlpha:0, scaleX:.6, scaleY:.8, ease:Power2.easeInOut, delay:0 }, "-=.4")
	  .to("#txt1",.25,{ autoAlpha:0, ease:Power1.easeOut, delay:0 }, "txt1")
	  .to(["#flare","#flare2"],.3,{ autoAlpha:0, scaleX:.6, scaleY:.8, ease:Power2.easeOut, delay:0 }, "txt1+=.15")
	  .from("#txt2",3.5,{ autoAlpha:0, scale:.8, ease:Power1.easeOut, delay:0 }, "-=.3")
	  .to("#txt2",.25,{ autoAlpha:0, ease:Power1.easeOut, delay:0 })
	  .from("#txt3",3.5,{ autoAlpha:0, scale:.8, ease:Power1.easeOut, delay:0 }, "-=.3")
	  .to("#txt3",.25,{ autoAlpha:0, ease:Power1.easeOut, delay:0 }, "txt3")
	  .to("#harden_wrapper",.4,{ autoAlpha:1, scale: 1, ease:Power2.easeOut, delay:0 }, "txt3-=.5")
	  .from("#harden_bg",.6,{ autoAlpha:0, scale: .5, rotation: 15, ease:Elastic.easeOut, onStart: show }, "txt3-=.35")
	  .to("#harden_bg_frame",.7,{ autoAlpha:0, scale: 1.5, ease:Power1.easeOut, }, "txt3-=.35")
	  .from("#harden_ghost",.6,{ autoAlpha:0, rotation: -5, scale: 1.5, ease:Power2.easeOut, delay:0 }, "txt-=.7")
	  .to("#harden_ghost",.8,{ autoAlpha:0, rotation: 0, ease:Power2.easeInOut, delay:0 }, "-=.6")
	  .from("#logo_wrapper",.4,{ autoAlpha:0, scale: 2, ease:Power3.easeOut }, "-=.75")
	  .from("#txt_featuring",.4,{ autoAlpha:0, y:-50, ease:Power3.easeOut }, "-=.6")
	  .from("#rollover",.5,{ autoAlpha:0, y: 10, ease:Power3.easeOut },"footer")
	  .from("#logo_2k_wrapper",.5,{ y:50, ease:Power3.easeOut }, "-=.15")
	  .from("#txt_legal",.5,{ autoAlpha:0, ease:Power3.easeOut }, "-=.5");	
	  
	tl_fx.timeScale(1);
	tl_anim.timeScale(1);
	 
	 //tl.seek('txt2');
	 function hide_smoke(smoke) {
		 var tween = TweenLite.to(smoke,1,{autoAlpha:0, ease:Power1.easeOut},"-=2"); 
	 }
	 function show() {
		 document.getElementById('harden_bg_frame').style.display = 'block';
	 }
	 function getRandom(min,max) {
		 return min + Math.random() * (max - min);
	 }
}

    