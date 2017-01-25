function setup_enabler() {
	if (Enabler.isInitialized()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
	}
}
//Run when Enabler is ready
function init(){
	//Load in Javascript
	if(Enabler.isPageLoaded()){
		start_ad();
	}else{
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, start_ad);
	} 
}

/*All Items*/
function start_ad() {
	/* Declarations */
	var clicktag = document.getElementById("clicktag"),
	anim_container = document.getElementById("anim_container"),
	container = document.getElementById("container"),
	border_top_left = document.getElementById("border_top_left"),
	border_top_right = document.getElementById("border_top_right"),
	border_left = document.getElementById("border_left"),
	border_right = document.getElementById("border_right"),
	border_bottom = document.getElementById("border_bottom"),
	bottom_bar = document.getElementById("bottom_bar");
	basketball_container = document.getElementById("basketball_container"),
	glow_top = document.getElementById("glow_top"),
	glow_btm = document.getElementById("glow_btm"),
	glow_left = document.getElementById("glow_left"),
	glow_right = document.getElementById("glow_right"),
	glow_cover = document.getElementById("glow_cover"),
	flare = document.getElementById("flare"),
	frame_01_l1 = document.getElementById("frame_01_l1"),
	frame_01_l2 = document.getElementById("frame_01_l2"),
	frame_02_l1 = document.getElementById("frame_02_l1"),
	frame_02_l2 = document.getElementById("frame_02_l2"),
	frame_03_l1 = document.getElementById("frame_03_l1"),
	frame_03_l2 = document.getElementById("frame_03_l2"),
	frame_03_l3 = document.getElementById("frame_03_l3"),
	banner_end = false,
	main_tl = new TimelineMax(),
	glow_tl = null,
	flare_tl = null
	;

	/* Animation */
	function intro_anim(){
		frame_glow_reset();
		var intro_tl = new TimelineMax();
		intro_tl
			.add('intro_start')
			//.from("#bg_color", 2, {opacity:0, ease:Power1.easeOut}, 'intro_start+=2.15')
			.from(["#img_bg","#flash_wrapper"], 1.6, {scale:1.6, ease:Power4.easeOut}, 'intro_start')
			.from(anim_container,2.5,{scale: 1.2, ease:Power2.easeOut}, 'intro_start+=.2')
			.from(border_bottom,.5,{x: 123.5, width:0, ease:Power2.easeOut}, 'intro_start+=.2')
			.from([border_left,border_right],.5,{y: 180, ease:Power2.easeOut}, 'intro_start+=.4')
			.from(border_top_left,.5,{x:-100, ease:Power2.easeOut}, 'intro_start+=1')
			.from(border_top_right,.5,{x:100, ease:Power2.easeOut}, 'intro_start+=1')
			.from(basketball_container,.7,{opacity:0, scale: 2, ease:Power3.easeOut}, 'intro_start+=1.1')
			.from(bottom_bar,.7,{y:50, ease:Power3.easeOut}, 'intro_start+=.3')
			.from(bottom_bar,1.3,{left: 0, width: "100%", ease:Power3.easeOut}, 'intro_start+=1.3')
			.from("#footer_logos",1.5,{y:10, opacity:0, scale:1.2, ease:Power1.easeOut}, 'intro_start+=.5')
			;
		return intro_tl;
	};
	
	function frame_out(){
		var frame_out_tl = new TimelineMax();
		frame_out_tl
			.add('out_start')
			.to(basketball_container,.5,{opacity:0, scale: 2, ease:Power3.easeIn}, 'out_start')
			.to(border_top_left,.5,{x:-100, ease:Power2.easeIn}, 'out_start+=.2')
			.to(border_top_right,.5,{x:100, ease:Power2.easeIn}, 'out_start+=.2')
			.to(bottom_bar,1.3,{left: 0, width: "100%", ease:Power3.easeIn}, 'out_start+=.2')
			.to([border_left,border_right],.5,{y: 180, ease:Power2.easeIn}, 'out_start+=.7')
			.to(bottom_bar,.7,{y:50, ease:Power3.easeIn}, 'out_start+=1.3')
			.to(border_bottom,.5,{x: 123.5, width:0, ease:Power2.easeIn}, 'out_start+=1.7')
			;
		return frame_out_tl;
	};
	
	function frame_glow_anim() {
		glow_tl = new TimelineMax();
		glow_tl
			.add('glow_start')
			.to(glow_cover, .1, {opacity:1, ease:Power2.easeOut}, 'glow_start')
			.to(glow_top, .8, {x:250, ease:Power1.easeOut, onComplete: function(){ glow_cover.style.opacity = 0; }}, 'glow_start')
			.to(glow_left, .8, {y:182, ease:Power1.easeOut}, 'glow_start')
			.to(glow_btm, .8, {x:250, ease:Power1.easeOut}, 'glow_start+=.5')
			.to(glow_right, .8, {y:182, ease:Power1.easeOut}, 'glow_start+=.5')
			.addCallback(frame_glow_reset)
			;
		return glow_tl;
	}
	
	function frame_glow_reset() {
		glow_tl = null;
		var glow_reset_tl = new TimelineMax();
		glow_reset_tl
			.set(glow_cover,{opacity:0})
			.set(glow_top,{x:-250})
			.set(glow_btm,{x:-250})
			.set(glow_left,{y:-182})
			.set(glow_right,{y:-182})
			;
	};
	
	function flare_anim() {
		flare_tl = new TimelineMax();
		flare_tl
			.to(flare, .7,{opacity: 1, scale: 1.2, ease:Power4.easeOut})
			.to(flare, .4,{opacity: 0, scale: .7, ease:Power4.easeIn})
			;
		return flare_tl;
	};
	
	function flare_reset(left, top) {
		TweenMax.set(flare,{x: left, y: top, opacity:0, scale: .7});
	};
	
	function frame_01_anim(){
		flare_reset(-27,-38);
		var frame_01_tl = new TimelineMax();
		frame_01_tl
			.add('f01_start')
			.from(frame_01_l1,.6,{y: 85, ease:Power4.easeOut},'f01_start')
			.from(frame_01_l2,.6,{y: -18, ease:Power4.easeOut},'f01_start+=.3')
			.add(flare_anim(), "f01_start+=.5")
			.add(frame_glow_anim(), "f01_start+=.55")
			.add(bg_flash_anim,'f01_start+=.5')
			.to(frame_01_l2,.4,{y: -18, ease:Power2.easeIn, delay: 1.5})
			.to(frame_01_l1,.4,{y: 85, ease:Power2.easeIn},'-=.15')
			.addCallback(function(){ flare_reset(2,-38); })
			;
		return frame_01_tl;
	};
	
	function frame_02_anim(){
		var frame_02_tl = new TimelineMax();
		frame_02_tl
			.add('f02_start')
			.from(frame_02_l1,.6,{y: 85, ease:Power4.easeOut},'f02_start')
			.from(frame_02_l2,.6,{y: -18, ease:Power4.easeOut},'f02_start+=.3')
			.add(flare_anim(), "f02_start+=.5")
			.add(frame_glow_anim(), "f02_start+=.55")
			.add(bg_flash_anim,'f02_start+=.5')
			.to(frame_02_l2,.4,{y: -18, ease:Power2.easeIn, delay: 1.5})
			.to(frame_02_l1,.4,{y: 85, ease:Power2.easeIn},'-=.15')
			.addCallback(function(){ flare_reset(-2,-31); })
			;
		return frame_02_tl;
	};
	
	function frame_03_anim(){
		var frame_03_tl = new TimelineMax();
		frame_03_tl
			.add('f03_start')
			.from(frame_03_l1,.6,{y: 48, ease:Power4.easeOut},'f03_start')
			.from(frame_03_l2,.6,{y: -18, ease:Power4.easeOut},'f03_start+=.3')
			.from(frame_03_l3,.6,{y: -18, ease:Power4.easeOut},'f03_start+=.6')
			.add(flare_anim(), "f03_start+=.5")
			.add(frame_glow_anim(), "f03_start+=.55")
			.add(bg_flash_anim,'f03_start+=.5')
			.to(frame_03_l3,.4,{y: -18, ease:Power2.easeIn, delay: 1.7})
			.to(frame_03_l2,.4,{y: -18, ease:Power2.easeIn},'-=.15')
			.to(frame_03_l1,.4,{y: 48, ease:Power2.easeIn},'-=.15')
			;
		return frame_03_tl;
	};

	function bg_flash_anim(){
		var bg_flash_tl = new TimelineMax();
		bg_flash_tl
			.to("#bg_color", .6, {opacity:.2, ease:Power1.easeInOut})
			.to("#bg_color", 1.2, {opacity:.6, ease:Power1.easeOut, delay:.3})
			;
		return bg_flash_tl;
	}

	function endframe_anim(){
		var endframe_tl = new TimelineMax();
		endframe_tl
			.set("#cta_container_bg", {opacity:0})
			.add('transition_start')
			.from("#iccc_container", 1.1, {x:275, opacity:0, ease:Power3.easeOut},"transition_start+=.4")
			.add('endframe_start')
			.from("#cta_container", .3, {opacity:0, ease:Power2.easeOut}, 'endframe_start')
			.from("#cta_container", .8, {height:1, y:35, ease: Back.easeOut.config(2)}, 'endframe_start')
			.from("#cta_copy", 1, {y:20, opacity:0, ease: Back.easeInOut.config(1.7), onComplete:bannerDone}, 'endframe_start')
			.to("#bg_color", 3, {opacity:.6, ease:Power1.easeOut})
			.from("#disclaimer01", 1, {y:10, opacity:0, ease:Power1.easeOut}, 'endframe_start+=.8')
			.from("#disclaimer02", 1, {opacity:0, ease:Power1.easeOut}, 'endframe_start+=1')
			;
		return endframe_tl;
	}

	function ball_roll_anim(){
		var basketballs = [basketball_container, "#basketball_01", "#basketball_02", "#basketball_03"];
		ball_roll_tl = new TimelineMax();
		ball_roll_tl
			.to(basketballs, 12, {rotation:360, ease:Power0.easeNone})
		;
		return ball_roll_tl;
	}
	
	/* Start Animating */
	function animate() {
		main_tl
			.addLabel("StartAd")
			.to("#loading", .2, {opacity:0, ease:Power1.easeOut}, "StartAd")
			.add(ball_roll_anim(),"StartAd")
			.add(intro_anim(), "StartAd")
			.add(frame_01_anim(), "StartAd+=1")
			.add(frame_02_anim(), "StartAd+=5")
			.add(frame_03_anim(), "StartAd+=9")
			.add(frame_out(), "StartAd+=12.4")
			.add(endframe_anim(), "StartAd+=13")
		;
	};

	function bannerDone(){
		var cta_highlight = TweenMax.to("#cta_container_bg", 0,{ opacity:1});
		//console.log("banner is done");
        banner_end = true;
        clearInterval(flash_interval);
        clearTimeout(flash_timeout);
        clearTimeout(stop_all_flashes);
    };
    /* MOUSE ACTIONS */
    function addlisteners(){
	    clicktag.addEventListener('click', function() {
		    Enabler.exit('HTML5_Background_Clickthrough');
	    });
    	clicktag.addEventListener('mouseover', function() {
            if(banner_end){
            	//console.log("mouseover");
                var overItems = TweenMax.to("#bg_color", .8,{ opacity:.3, ease:Power2.easeOut});
                var overScale = TweenMax.to("#cta_container_bg", .4, {scale:1.1, ease:Power1.easeOut});
            }
    	});
        clicktag.addEventListener('mouseout', function() {
            if(banner_end){
            	//console.log("mouseout");
                var outItems = TweenMax.to("#bg_color", .8,{ opacity:.6, ease:Power2.easeOut});
                var outScale = TweenMax.to("#cta_container_bg", .4, {scale:1, ease:Power1.easeOut});
            }
   	 	});
    }
    
    /* FLASHES */
	var flash_timeout;
	var flash_tl;
	function insert_flash(amount) {
		for(a=0;a<amount;a+=1) {
			flash_timeout = setTimeout(move_flash ,Math.random()*1e1,-25,300);
		}
	}
	function move_flash(min,max) {
		var flash = document.createElement("DIV");
		flash.className = "flash";
		flash.style.opacity = getRandom(.2,.8);
		flash.style.left = getRandom(min,max)+"px";
		flash.style.bottom = getRandom(-25,40)+"px";
		document.getElementById("flash_wrapper").appendChild(flash);
		flash_tl = new TimelineMax();
		flash_tl.set(flash,{scale:getRandom(.1,.25)});
		flash_tl.to(flash,getRandom(.1,.3),{opacity:getRandom(.1,.6), ease:Power0.easeNone, delay: getRandom(.8,1) })
			    .to(flash,.2,{opacity:0, ease:Power2.easeInOut,onComplete:hide_flash, onCompleteParams:["{self}"]}, "-=1");
			  
		function hide_flash(flash) {
			var to_remove = flash.target;
			removeElement(to_remove);
		}
	}
	var flash_interval = setInterval(insert_flash, 200, getRandom(2,5));
	var stop_all_flashes = setTimeout(function() {  bannerDone(); removeElement(basketball_container); }, 15000);
	function getRandom(min,max) {
		return min + Math.random() * (max - min);
	}
	/* END FLASHES */

	addlisteners();
	animate();
}

function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
	var rv = -1; // Return value assumes failure.
	if (navigator.appName == 'Microsoft Internet Explorer')
	{
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
			rv = parseFloat( RegExp.$1 );
	}
	return rv;
}

function checkVersion(){
	var msg = "You're not using Internet Explorer.";
	var ver = getInternetExplorerVersion();
	var ua = window.navigator.userAgent;

	if ( ver > -1 )
	{
		if ( ver < 9.0 ) {
			msg = "You should upgrade theFirst copy of Internet Explorer.";
			document.body.className = document.body.className+' ie';
		} else {
			msg = "You're using a recent copy of Internet Explorer.";
			//document.body.className = document.body.className+' ieok';
		}
	} else if (ua.indexOf("Trident/7.0") > 0) {
		// MSIE 11
		//document.body.className = document.body.className+'ie11';
	}
	//alert( msg );
}

function removeElement(node) {
    node.parentNode.removeChild(node);
}

checkVersion();
window.onload = setup_enabler();