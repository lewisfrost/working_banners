var loaded = false,
ad_container,
vw_collapse_container,
vw_expand_container,
btn_expand,
btn_close,
btn_remove,
btn_dis_close,
btn_dis_close_box,
btn_popup_close,
btn_claim_info,
disclaimer,
car_tl,
main_tl = new TimelineMax()
;

window.onload = function(){
	//startAd();
	var img = new Image();
	img.onload = function() { startAd(); }
	img.src = "passat.png";
}

startAd = function() {
	checkVersion();
	ad_container = document.getElementById('ad_container');
	vw_collapse_container = document.getElementById('vw_collapse_container');
	vw_expand_container = document.getElementById('vw_expand_container');
	btn_expand = document.getElementById('btn_expand');
	btn_close = document.getElementById('btn_close');
	btn_remove = document.getElementById('btn_remove');
	//btn_dis_close = document.getElementById('btn_dis_close');
	btn_dis_close_box = document.getElementById('btn_dis_close_box');
	btn_popup_close = document.getElementById('btn_popup_close');
	btn_claim_info = document.getElementById('btn_claim_info');
	disclaimer = document.getElementById('disclaimer');
	//ad_container.style.display = 'block';
	init();
}

function init() {
	animate();
	add_collapse_listeners();
	add_expand_listeners();
}

function add_expand_listeners() {
	bindEvent(document.getElementById('logo_container'),'click',btn_expand_click_handler);
	bindEvent(document.getElementById('passat_container'),'click',btn_expand_click_handler);
	bindEvent(document.getElementById('collapse_clickthrough'),'click',btn_expand_click_handler);
	bindEvent(document.getElementById('icons_collapse'),'click',btn_expand_click_handler);
	bindEvent(document.getElementById('txt_conditional'),'click',btn_expand_click_handler);
}

function remove_expand_listeners() {
	unbindEvent(document.getElementById('logo_container'),'click',btn_expand_click_handler);
	unbindEvent(document.getElementById('passat_container'),'click',btn_expand_click_handler);
	unbindEvent(document.getElementById('collapse_clickthrough'),'click',btn_expand_click_handler);
	unbindEvent(document.getElementById('icons_collapse'),'click',btn_expand_click_handler);
	unbindEvent(document.getElementById('txt_conditional'),'click',btn_expand_click_handler);
}

function add_collapse_listeners() {
	bindEvent(btn_expand,'click',btn_expand_click_handler);
	bindEvent(btn_expand,'mouseenter',btn_expand_over_handler);
	bindEvent(btn_expand,'mouseleave',btn_expand_out_handler);
	bindEvent(btn_close,'click',btn_close_handler);
	bindEvent(btn_remove,'click',btn_remove_handler);
	//bindEvent(btn_dis_close,'click',hide_disclaimer);
	bindEvent(btn_claim_info,'mouseenter',btn_claim_info_over_handler);
	//bindEvent(disclaimer,'mouseleave',hide_disclaimer);
	bindEvent(btn_dis_close_box,'mouseleave',hide_disclaimer);
	bindEvent(btn_popup_close,'click',hide_popup);
	bindEvent(document.getElementById('cta_more'),'click',clickthrough_handler);
	bindEvent(document.getElementById('expand_clickthrough'),'click',clickthrough_handler);
}

function clickthrough_handler() {
	window.open('http://www.vw.com/models/passat/', '_blank');
}

function iihs_handler() {
	window.open('http://www.iihs.org', '_blank');
}

function expand() {
	toggleClass('collapse', 'expand');
	showElements();
	btn_remove.style.display = 'none';
	btn_close.style.display = 'block';
	btn_dis_close_box.style.bottom = '10px';
	btn_dis_close_box.style.right = '13px';
	//btn_dis_close.style.display = 'block';
	var tl = new TimelineMax();
		tl.to(ad_container,.3,{ height: 500, ease:Power1.easeOut });
}

function collapse() {
	unbindEvent(document.getElementById('logo_container'),'click',clickthrough_handler);
	unbindEvent(document.getElementById('passat_container'),'click',clickthrough_handler);
	add_expand_listeners();
	var evt = document.createEvent('Event');
	evt.initEvent('collapsed', true, false);
	document.dispatchEvent(evt);
	toggleClass('expand', 'collapse')
	hideElements();
	btn_remove.style.display = 'block';
	btn_close.style.display = 'none';
	btn_dis_close_box.style.bottom = '30px';
	btn_dis_close_box.style.right = '68px';
	//btn_dis_close.style.display = 'none';
	var tl = new TimelineMax();
		tl.to(ad_container,.2,{ height: 250, ease:Power1.easeOut });
}

function btn_expand_click_handler() {
	expand();
	politeInit();
	remove_expand_listeners();
	//car_tl.kill();
	main_tl.seek(30);
	btn_expand.style.display = 'block';
	btn_claim_info.style.display = 'block';
	bindEvent(document.getElementById('passat_container'),'click',clickthrough_handler);
	bindEvent(document.getElementById('logo_container'),'click',clickthrough_handler);
}

function btn_expand_over_handler() {
	//console.log('btn expand over');
	var tl_btm = new TimelineMax();
		tl_btm.to('#btn_expand_arrow_btm',.2,{bottom:-10, ease:Power2.easeIn})
		tl_btm.to('#btn_expand_arrow_btm',0,{bottom:42})
		tl_btm.to('#btn_expand_arrow_btm',.4,{bottom:9, ease:Power2.easeOut})
	;
	var tl_top = new TimelineMax();
		tl_top.to('#btn_expand_arrow_top',.35,{bottom:-10, ease:Power2.easeIn})
		tl_top.to('#btn_expand_arrow_top',0,{bottom:42})
		tl_top.to('#btn_expand_arrow_top',.4,{bottom:14, ease:Power2.easeOut})
	;
}

function btn_expand_out_handler() {
	//console.log('btn expand out');
}

function btn_close_handler() {
	collapse();
}

function btn_remove_handler() {
	//console.log('ad removed');
	removeElement(ad_container);
}

function btn_claim_info_over_handler() {
	var txt = 'Front Assist is available only on select trim levels. “Top Safety Pick+” based on good ratings in the moderate overlap front, side, roof strength, head restraint tests, and small overlap front tests; and no less than an advanced rating for front crash prevention. For details visit <a href="http://www.iihs.org" target="_blank">www.iihs.org.</a> Driver Assistance features are not substitutes for attentive driving. See Owner’s Manual for further details, and important limitations.';
	show_disclaimer(txt);
}

function showElements() {
	vw_expand_container.style.visibility = 'hidden';
	TweenMax.to(vw_expand_container,0,{autoAlpha:1,ease:Power1.easeOut});
	TweenMax.to('#passat_container',.3,{scale:.89,top:98,left:160,ease:Power2.easeOut});
	TweenMax.from('#txt_expand_container',.9,{autoAlpha:0, y:20, ease:Power2.easeOut})
}

function hideElements() {
	TweenMax.to(vw_expand_container,.2,{autoAlpha:0,ease:Power1.easeOut});
	TweenMax.to('#passat_container',.2,{scale:.776,top:'30px',left:'186px',ease:Power1.easeOut});
}

function hide_popup() {
	btn_close.style.display = 'block';
	var evt = document.createEvent('Event');
	evt.initEvent('popup_closed', true, false);
	document.dispatchEvent(evt);
}

function toggleClass(from, to) {
	ad_container.className = ad_container.className.replace(from, to);
}

function animate() {
	/* Animation */
	function car_anim(){
		car_tl = new TimelineMax();
		car_tl
			.set('#passat_container',{scale:.776})
			.set('#tire_front',{css:{transform:'skewX(-5.7deg) scale(.69,.95)'}})
			.set('#tire_back',{css:{transform:'skewX(-3.2deg) scale(.48,.79)'}})
			.set('.tire_spin',{rotation:-8})
			.set('.tire_start',{opacity:1})
			.set(['.tire_mid','.tire_end'],{opacity:0})
			.add('car_start')
			.from('#passat_container',1,{x:550, y:-120, scale:.5, ease:Power2.easeOut},'car_start')
			.to('.tire_spin',1,{rotation:-730, ease:Power2.easeOut},'car_start')
			.to('.tire_spin',.4,{rotation:-720,ease:Power2.easeInOut},'car_start+=1')
			.to('.tire_start',.2,{opacity:0, ease:Power2.easeOut},'car_start+=.3')
			.to('.tire_mid',.4,{opacity:1, ease:Power2.easeOut},'car_start+=.3')
			.to('.tire_mid',.2,{opacity:0, ease:Power2.easeOut},'car_start+=.6')
			.to('.tire_end',.4,{opacity:1, ease:Power2.easeOut},'car_start+=.5')
			.to(['#passat','#passat_blur'],.5,{rotation:-.7,ease:Power2.easeInOut, repeat:1, yoyo:true},'car_start+=.5')
			.to('#passat_container',.4,{left:'183px',top:'32px', ease:Power1.easeInOut, repeat:1, yoyo:true},'car_start+=.6')
			.to('#passat_blur',.6,{opacity:0, ease:Power1.easeOut},'car_start+=.5')
		;
		return car_tl;
	}
	
	function icon1_anim(){
		var icon1_tl = new TimelineMax();
		icon1_tl
			.add('icon1_start')
			.from('#front_assist',.4,{opacity:0, scale:.25, ease:Power3.easeOut},'icon1_start')
			//.from('#front_assist p',.5,{opacity:0, x:-10, ease:Power1.easeOut},'-=.1')
			.add('icon1_end')
			.to('#front_assist',.8,{scale:.85, ease:Power3.easeInOut},'icon1_end+=.1')
			.to('#front_assist p',.8,{opacity:0, ease:Power3.easeInOut},'icon1_end+=.1')
			.to('#front_assist .icon',.4,{backgroundPosition:'-55px -2px', ease:Power2.easeInOut},'icon1_end+=.1')
			.to('#front_assist .icon_bg',.4,{backgroundColor:'#e8eaeb', border:'2px solid #adb4b7', width:'36px', height:'36px', ease:Power3.easeInOut},'icon1_end+=.2')
		;
		return icon1_tl;
	}
	
	function icon2_anim(){
		var icon2_tl = new TimelineMax();
		icon2_tl
			.add('icon2_start')
			.from('#blind_spot',.4,{opacity:0, scale:.25, ease:Power3.easeOut},'icon2_start')
			//.from('#blind_spot p',.5,{opacity:0, x:-10, ease:Power1.easeOut},'-=.1')
			.add('icon2_end')
			.to('#blind_spot',.8,{scale:.85, ease:Power3.easeInOut},'icon2_end+=.1')
			.to('#blind_spot p',.8,{opacity:0, ease:Power3.easeInOut},'icon2_end+=.1')
			.to('#blind_spot .icon',.4,{backgroundPosition:'-109px -2px', ease:Power2.easeInOut},'icon2_end+=.1')
			.to('#blind_spot .icon_bg',.4,{backgroundColor:'#e8eaeb', border:'2px solid #adb4b7', width:'36px', height:'36px', ease:Power3.easeInOut},'icon2_end+=.2')
		;
		return icon2_tl;
	}
	
	function icon3_anim(){
		var icon3_tl = new TimelineMax();
		icon3_tl
			.add('icon3_start')
			.from('#rear_traffic',.4,{opacity:0, scale:.25, ease:Power3.easeOut},'icon3_start')
			//.from('#rear_traffic p',.5,{opacity:0, x:10, ease:Power1.easeOut},'-=.1')
			.add('icon3_end')
			.to('#rear_traffic',.8,{scale:.85, ease:Power3.easeInOut},'icon3_end+=.1')
			.to('#rear_traffic p',.8,{opacity:0, ease:Power3.easeInOut},'icon3_end+=.1')
			.to('#rear_traffic .icon',.4,{backgroundPosition:'-162px -2px', ease:Power2.easeInOut},'icon3_end+=.1')
			.to('#rear_traffic .icon_bg',.4,{backgroundColor:'#e8eaeb', border:'2px solid #adb4b7', width:'36px', height:'36px', ease:Power3.easeInOut},'icon3_end+=.2')
		;
		return icon3_tl;
	}
	
	function icon4_anim(){
		var icon4_tl = new TimelineMax();
		icon4_tl
			.add('icon4_start')
			.from('#lane_assist',.4,{opacity:0, scale:.25, ease:Power3.easeOut},'icon4_start')
			//.from('#lane_assist p',.5,{opacity:0, x:10, ease:Power1.easeOut},'-=.1')
			.add('icon4_end')
			.to('#lane_assist',.8,{scale:.85, ease:Power3.easeInOut},'icon4_end+=.1')
			.to('#lane_assist p',.8,{opacity:0, ease:Power3.easeInOut},'icon4_end+=.1')
			.to('#lane_assist .icon',.4,{backgroundPosition:'-217px 0px', ease:Power2.easeInOut},'icon4_end+=.1')
			.to('#lane_assist .icon_bg',.4,{backgroundColor:'#e8eaeb', border:'2px solid #adb4b7', width:'36px', height:'36px', ease:Power3.easeInOut},'icon4_end+=.2')
		;
		return icon4_tl;
	}
	
	function icon5_anim(){
		var icon5_tl = new TimelineMax();
		icon5_tl
			.add('icon5_start')
			.from('#park_assist',.4,{opacity:0, scale:.25, ease:Power3.easeOut},'icon5_start')
			//.from('#park_assist p',.5,{opacity:0, x:10, ease:Power1.easeOut},'-=.1')
			.add('icon5_end')
			.to('#park_assist',.8,{scale:.85, ease:Power3.easeInOut},'icon5_end+=.1')
			.to('#park_assist p',.8,{opacity:0, ease:Power3.easeInOut},'icon5_end+=.1')
			.to('#park_assist .icon',.4,{backgroundPosition:'-268px -2px', ease:Power2.easeInOut},'icon5_end+=.1')
			.to('#park_assist .icon_bg',.4,{backgroundColor:'#e8eaeb', border:'2px solid #adb4b7', width:'36px', height:'36px', ease:Power3.easeInOut},'icon5_end+=.2')
		;
		return icon5_tl;
	}
	
	function icon6_anim(){
		var icon6_tl = new TimelineMax();
		icon6_tl
			.add('icon6_start')
			.from('#cruise_control',.4,{opacity:0, scale:.25, ease:Power3.easeOut},'icon6_start')
			//.from('#cruise_control p',.5,{opacity:0, x:-10, ease:Power1.easeOut},'-=.1')
			.add('icon6_end')
			.to('#cruise_control',.8,{scale:.85, ease:Power3.easeInOut},'icon6_end+=.1')
			.to('#cruise_control p',.8,{opacity:0, ease:Power3.easeInOut},'icon6_end+=.1')
			.to('#cruise_control .icon',.4,{backgroundPosition:'-321px -2px', ease:Power2.easeInOut},'icon6_end+=.1')
			.to('#cruise_control .icon_bg',.4,{backgroundColor:'#e8eaeb', border:'2px solid #adb4b7', width:'36px', height:'36px', ease:Power3.easeInOut},'icon6_end+=.2')
		;
		return icon6_tl;
	}
	
	function icon7_anim(){
		var icon7_tl = new TimelineMax();
		icon7_tl
			.add('icon7_start')
			.from('#park_control',.4,{opacity:0, scale:.25, ease:Power3.easeOut},'icon7_start')
			//.from('#park_control p',.5,{opacity:0, x:10, ease:Power1.easeOut},'-=.1')
			.add('icon7_end')
			.to('#park_control',.8,{scale:.85, ease:Power3.easeInOut},'icon7_end+=.1')
			.to('#park_control p',.8,{opacity:0, ease:Power3.easeInOut},'icon7_end+=.1')
			.to('#park_control .icon',.4,{backgroundPosition:'-375px -2px', ease:Power2.easeInOut},'icon7_end+=.1')
			.to('#park_control .icon_bg',.4,{backgroundColor:'#e8eaeb', border:'2px solid #adb4b7', width:'36px', height:'36px', ease:Power3.easeInOut},'icon7_end+=.2')
		;
		return icon7_tl;
	}
	
	function endframe_col_anim(){
		var ef_col_tl = new TimelineMax();
		ef_col_tl
			.set('#txt_col_l2',{css:{transform:'scale(.92,1)'}})
			.add('ef_col_start')
			.from('#txt_col_l1',.7,{opacity:0, y:10, ease:Power2.easeOut},'ef_col_start+=1')
			.from('#txt_col_l2',.7,{opacity:0, y:10, ease:Power2.easeOut},'ef_col_start+=1.25')
			.from('#txt_col_l3',.7,{opacity:0, y:10, ease:Power2.easeOut},'ef_col_start+=1.5')
			.staggerTo('#icons_collapse li',.4,{opacity:0, scale:.4, rotation:45, ease:Power2.easeOut},.15,'ef_col_start')
			.addCallback(function(){btn_expand.style.display = 'block'; btn_claim_info.style.display = 'block';})
			.from(['#award','#txt_conditional'],.7,{opacity:0, ease:Power2.easeOut},'ef_col_start+=1.75')
			.from('#btn_expand',.7,{y:10, opacity:0, ease:Power2.easeOut},'ef_col_start+=2')
			.from('#btn_claim_info',.7,{opacity:0, ease:Power2.easeOut},'ef_col_start+=2.5')
			.addCallback(function(){document.getElementById('icons_collapse').style.display = 'none';})
		;
		return ef_col_tl;
	}
	
	/* Start Animating */
	function animate_collapse() {
		main_tl
			.to('#loader',0,{opacity:0, ease:Power1.easeOut, onComplete:function(){ document.getElementById('loader').style.display = 'none'; }})
			.addLabel('start')
			.add(car_anim(),'start')
			.add(icon1_anim(),'start+=1')
			.add(icon2_anim(),'start+=1.8')
			.add(icon3_anim(),'start+=2.6')
			.add(icon4_anim(),'start+=3.4')
			.add(icon5_anim(),'start+=4.2')
			.add(icon6_anim(),'start+=5')
			.add(icon7_anim(),'start+=5.8')
			.add(endframe_col_anim(),'start+=6.8')
		;
	}
	animate_collapse();
}

function show_disclaimer(txt) {
	var dis_txt = document.getElementById('disclaimer_txt');
	document.getElementById('disclaimer').style.display = 'block';
	dis_txt.innerHTML = txt;
	dis_txt.style.marginTop = '-'+(dis_txt.offsetHeight)/2+'px';
	dis_txt.style.opacity = 1;
}

function hide_disclaimer() {
	var dis_txt = document.getElementById('disclaimer_txt');
	document.getElementById('disclaimer').style.display = 'none';
	dis_txt.innerHTML = '';
	dis_txt.style.marginTop = 0;
	dis_txt.style.opacity = 0;
}

function politeInit() {
	if(!loaded) {
		loaded = true;
		//Load in Javascript
		var extJavascript = document.createElement('script');
		extJavascript.setAttribute('type', 'text/javascript');
		extJavascript.setAttribute('src', 'vw_expand.js'); 
		document.getElementsByTagName('head')[0].appendChild(extJavascript);
		
		//Load in CSS
		var extCSS=document.createElement('link');
		extCSS.setAttribute('rel', 'stylesheet');
		extCSS.setAttribute('type', 'text/css');
		extCSS.setAttribute('href', 'vw_expand.css'); 
		document.getElementsByTagName('head')[0].appendChild(extCSS);
		var img = new Image();
		img.onload = function() { }
		img.src = "expand_content.png";
		var img2 = new Image();
		img2.onload = function() { }
		img2.src = "sprite2.svg";
	} else {
		init_expand();
	}
}

// IE BROWSER CHECK //
function getInternetExplorerVersion() {
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
	var rv = -1; // Return value assumes failure.
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	return rv;
}
function checkVersion() {
	var msg = "You're not using Internet Explorer.";
	var ver = getInternetExplorerVersion();
	var ua = window.navigator.userAgent;

	if ( ver > -1 )
	{
		document.body.className = document.body.className+' ie';
		if ( ver < 9.0 ) {
			msg = "You should upgrade theFirst copy of Internet Explorer.";
			//document.body.className = document.body.className+' ie';
		} else {
			msg = "You're using a recent copy of Internet Explorer.";
			//document.body.className = document.body.className+' ieok';
		}
	} else if (ua.indexOf("Trident/7.0") > 0) {
		// MSIE 11
		//document.body.className = document.body.className+'ie11';
	}
	if (navigator.userAgent.indexOf('Safari') != -1) {
        document.body.className += " safari";
    }
}

function removeElement(node) {
    node.parentNode.removeChild(node);
}

function bindEvent(el, eventName, eventHandler) {
	if (el.addEventListener){
		el.addEventListener(eventName, eventHandler, false); 
	} else if (el.attachEvent){
		el.attachEvent('on'+eventName, eventHandler);
	}
}

function unbindEvent(el, eventName, eventHandler) {
	if (el.addEventListener){
		el.removeEventListener(eventName, eventHandler); 
	} else if (el.attachEvent){
		el.detachEvent('on'+eventName, eventHandler);
	}
} 