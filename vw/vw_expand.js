var tl_expand,
popup_icon,
popup_heading,
popup_subheading,
icon_class = 'front_assist',
btn_feature_info,
btn_exp_feature_info,
feature_info_txt,
current_timeline,
tl_road_blur,
tl_tree_top_lg,
tl_tree_top_sm,
tl_tree_btm_lg,
tl_tree_btm_sm,
tl_radar_pulse = new TimelineMax(),
tl_radar_pulse2 = new TimelineMax(),
tl_radar_pulse3 = new TimelineMax(),
tl_car_swerve = new TimelineMax(),
tl_car_swerve2 = new TimelineMax(),
tl_main = new TimelineMax(),
driving = false,
radar_delay = 2,
la_timeout,
clear_to,
fa_interval,
la_interval,
bs_interval,
rt_interval,
pa_interval,
cc_interval,
pc_interval,
cta_more,
icon_out,
txt_feature,
tl_txt_feature = new TimelineMax(),
btn_icon;

//Function to run with any animations starting on load, or bringing in images etc
init_expand = function(){
	//Assign All the elements to the element on the page
	btn_icon = document.getElementsByClassName('btn_icon');
	popup_icon = document.getElementById('popup_icon');
	popup_heading = document.getElementById('popup_heading');
	popup_subheading = document.getElementById('popup_subheading');
	btn_feature_info = document.getElementById('btn_feature_info');
	btn_exp_feature_info = document.getElementById('btn_exp_feature_info');
	cta_more = document.getElementById('cta_more_container');
	animate_expand();
	//Bring in listeners i.e. if a user clicks or rollsover
	addListeners();
	reset_icons();
	icon_out = setTimeout(function(){var icon = check_icons();animate_icon(icon);clearTimeout(icon_out);}, 700);
}

animate_expand = function() {
	tl_expand = new TimelineMax();
	tl_expand
		.add('start')
		.to(['#txt_exp_l1','#txt_exp_l2','#txt_exp_l3'],.3,{ autoAlpha: 1, ease:Power1.easeOut },'start')
		.staggerTo('#icons_expand li',.2,{autoAlpha:1, top: 0, ease:Power3.easeOut},.1,'start+=.25')
	;
}

animate_reset = function() {
	tl_expand
		.set('#txt_exp_l1',{ autoAlpha: 0 })
		.set('#txt_exp_l2',{ autoAlpha: 0 })
		.set('#txt_exp_l3',{ autoAlpha: 0 })	
		.set('#icons_expand li',{autoAlpha:0, top: 10,})	 
	;
}

//Add Event Listeners
addListeners = function() {
	for(var i=0;i<btn_icon.length;i++){
        bindEvent(btn_icon[i],'click',btn_icon_click_handler);
        bindEvent(btn_icon[i],'mouseenter',btn_icon_over_handler);  
    }
    bindEvent(document.getElementById('icons_expand'),'mouseleave',btn_icon_out_handler);
	bindEvent(document,'collapsed',collapsed_handler);
	bindEvent(btn_feature_info,'mouseenter',btn_feature_info_click_handler);
	bindEvent(btn_exp_feature_info,'mouseenter',btn_exp_feature_info_click_handler);
	bindEvent(document,'popup_closed',popup_closed_handler);
	bindEvent(cta_more,'mouseenter',cta_over_handler); 
	bindEvent(cta_more,'mouseleave',cta_out_handler); 
}

//Remove Event Listeners
removeListeners = function() {
	for(var i=0;i<btn_icon.length;i++){
        unbindEvent(btn_icon[i],'click',btn_icon_click_handler);
        unbindEvent(btn_icon[i],'mouseenter',btn_icon_over_handler);
    }
    unbindEvent(document.getElementById('icons_expand'),'mouseleave',btn_icon_out_handler);
	unbindEvent(document,'collapsed',collapsed_handler);
	unbindEvent(btn_feature_info,'mouseenter',btn_feature_info_click_handler);
	unbindEvent(btn_exp_feature_info,'mouseenter',btn_exp_feature_info_click_handler);
	unbindEvent(document,'popup_closed',popup_closed_handler);
	unbindEvent(cta_more,'mouseenter',cta_over_handler); 
	unbindEvent(cta_more,'mouseleave',cta_out_handler); 
}

check_icons = function() {
	var icon;
	for(var i=0;i<btn_icon.length;i++){
        if(!has_class(btn_icon[i],'selected')) {
	        icon = btn_icon[i];
	        return icon;
        }
    } 
}

reset_icons = function() {
	clearTimeout(icon_out);
	for(var i=0;i<btn_icon.length;i++){
        var tl = new TimelineMax();
		tl
			.set(btn_icon[i],{top:'0px'})
			.set('#'+btn_icon[i].id+' .icon_out',{top:'0px'})
			.set('#'+btn_icon[i].id+' .icon_out_shadow',{top:'0px'})
		;
    } 
}

animate_icon = function(icon) {
	if(icon !== undefined) {
		var tl = new TimelineMax();
		tl
			.add('start')
			.to(icon,.3,{top:'-7px',ease:Power2.easeOut},'start')
			.to('#'+icon.id+' .icon_out',.3,{top:'8px',ease:Power2.easeOut},'start')
			.to('#'+icon.id+' .icon_out_shadow',.3,{top:'15px',ease:Power2.easeOut},'start')
		;
	}
}

collapsed_handler = function() {
	//console.log('collapsed');
	animate_reset();
	removeListeners();
	popup_closed_handler();
}

cta_over_handler = function(evt) {
	cta_over_anim();
}

cta_out_handler = function(evt) {
	cta_out_anim();
}

cta_over_anim = function() {
	tl_cta_over = new TimelineMax();
	tl_cta_over
		.set('#cta_more_container',{top:'450px'})
		.set('#cta_out',{top:'0px'})
		.set('#cta_shadow',{top:'0px'})
		.add('start')
		.to('#cta_more_container',.3,{top:'442px',ease:Power2.easeOut},'start')
		.to('#cta_out',.3,{top:'8px',ease:Power2.easeOut},'start')
		.to('#cta_out_shadow',.3,{top:'15px',ease:Power2.easeOut},'start')
	;
	return tl_cta_over;
}

cta_out_anim = function() {
	var tl_cta_out = new TimelineMax();
	tl_cta_out
		.add('start')
		.to('#cta_more_container',.3,{top:'450px',ease:Power2.easeOut},'start')
		.to('#cta_out',.3,{top:'0px',ease:Power2.easeOut},'start')
		.to('#cta_out_shadow',.3,{top:'0px',ease:Power2.easeOut},'start')
	;
	return tl_cta_out;
}

btn_icon_click_handler = function(evt) {
	this.className += ' selected';
	play_icon_anim(this.id);
}

btn_icon_over_handler = function(evt) {
	tl_txt_feature.kill();
	switch(this.id) {
		case 'front_assist_exp':
			txt_feature = 'Front Assist';
			break;
		case 'blind_spot_exp':
			txt_feature = 'Blind Spot Monitor';
			break;
		case 'rear_traffic_exp':
			txt_feature = 'Rear Traffic Alert';
			break;
		case 'lane_assist_exp':
			txt_feature = 'Lane Assist';
			break;
		case 'park_assist_exp':
			txt_feature = 'Park Assist';
			break;
		case 'cruise_control_exp':
			txt_feature = 'Adaptive Cruise Control';
			break;
		case 'park_control_exp':
			txt_feature = 'Park Pilot';
			break;
	}
	tl_txt_feature = new TimelineMax();
	tl_txt_feature 
		.to('#txt_exp_l3',.2,{opacity:0,ease:Power1.easeOut,onComplete:function(){ document.getElementById('txt_exp_l3').innerHTML = txt_feature; }})
		.to('#txt_exp_l3',.2,{opacity:1,ease:Power1.easeOut});
}

btn_icon_out_handler = function(evt) {
	tl_txt_feature.kill();
	txt_feature = 'Select a Driver Assistance feature.';
	tl_txt_feature = new TimelineMax();
	tl_txt_feature 
		.to('#txt_exp_l3',.2,{opacity:0,ease:Power1.easeOut,onComplete:function(){ document.getElementById('txt_exp_l3').innerHTML = txt_feature; }})
		.to('#txt_exp_l3',.2,{opacity:1,ease:Power1.easeOut});
}

btn_feature_info_click_handler = function(evt) {
	show_disclaimer(feature_info_txt);
}

btn_exp_feature_info_click_handler = function(evt) {
	feature_info_txt = "The features shown are not substitutes for attentive driving. See Owner's Manual for further details, and important limitations. Not all Driver Assistance features available on every trim.";
	show_disclaimer(feature_info_txt);
}

play_icon_anim = function(icon) {
	show_popup();
	var popup = icon;
	popup = popup.replace('_exp', '');
	icon_class = popup;
	popup_icon.className = 'sprite '+icon_class;
	document.getElementById(popup+'_anim').style.display = 'block';
	document.getElementById('road_unblur_container').style.left = '850px';
	popup_subheading.style.padding = '0 150px';
	switch(popup) {
		case 'front_assist':
			current_timeline = front_assist_anim;
			animate_popup(front_assist_anim());
			show_road_blur('272px');
			show_trees_blur('0px',false);
			fa_interval = setInterval(front_assist_anim, 16000);
			popup_heading.innerHTML = 'Front Assist';
			popup_subheading.innerHTML = "Sensors in the front of the Passat help monitor traffic and can alert you to a possible collision. If you get too close to the car in front of you, Forward Collision Warning and Autonomous Emergency Braking can help brake for you, too.";
			feature_info_txt = "Dramatization. Do not rely on the Forward Collision Warning and Autonomous Emergency Braking systems. Always drive safely and attentively, and do not wait for the systems' alert or intervention before braking. The systems’ functions are limited and depend on many factors and may not always help you avoid a collision entirely. See Owner’s Manual details. Not all Driver Assistance features available on every trim.";
			break;
		case 'blind_spot':
			current_timeline = blind_spot_anim;
			animate_popup(blind_spot_anim());
			show_road_blur('243px');
			show_trees_blur('-29px',true);
			bs_interval = setInterval(blind_spot_anim, 9000);
			popup_heading.innerHTML = 'Blind Spot Monitor';
			popup_subheading.innerHTML = "It’s what you can’t see that matters, too. When driving, if you attempt to change lanes, the sensors can help alert you to other cars that may affect your lane change.";
			feature_info_txt = "Dramatization. Do not rely exclusively on the Blind Spot Monitor system. Always check surrounding traffic and use your turn signal. The system’s function may be limited and depends on many factors. See Owner’s Manual for details. Not all Driver Assistance features available on every trim.";
			break;
		case 'rear_traffic':
			current_timeline = rear_traffic_anim;
			animate_popup(rear_traffic_anim());
			show_road_park();
			rt_interval = setInterval(rear_traffic_anim, 15000);
			popup_heading.innerHTML = 'Rear Traffic Alert';
			popup_subheading.innerHTML = "Sensors in the back of the Passat help alert you to incoming vehicles in your path when in reverse, and Rear Traffic Alert can even brake for you if needed.";
			popup_subheading.style.padding = '0 180px';
			feature_info_txt = "Dramatization. The features shown are not substitutes for attentive driving. See Owner's Manual for further details, and important limitations. Not all Driver Assistance features available on every trim.";
			break;
		case 'lane_assist':
			current_timeline = lane_assist_anim;
			animate_popup(lane_assist_anim('225px'));
			show_road_blur('243px');
			show_trees_blur('-29px',true);
			la_interval = setInterval(lane_assist_anim,15000,'225px',false);
			popup_heading.innerHTML = 'Lane Assist';
			popup_subheading.style.padding = '0 85px';
			popup_subheading.innerHTML = "The beauty of Lane Assist is what it doesn’t let you do.  If you start to drift into another lane without using the turn signal, Lane Assist will steer to help keep you in your lane. It looks out for you, if you catch our drift.";
			feature_info_txt = "Dramatization. The features shown are not substitutes for attentive driving. See Owner's Manual for further details, and important limitations. Not all Driver Assistance features available on every trim.";
			break;
		case 'park_assist':
			current_timeline = park_assist_anim;
			animate_popup(park_assist_anim());
			show_road_park();
			pa_interval = setInterval(park_assist_anim,15000);
			popup_heading.innerHTML = 'Park Assist';
			popup_subheading.innerHTML = "Wonder if that parking spot is big enough? Park Assist can tell and help you steer the vehicle into a space.";
			popup_subheading.style.padding = '0 240px';
			feature_info_txt = "Dramatization. The features shown are not substitutes for attentive driving. See Owner's Manual for further details, and important limitations. Not all Driver Assistance features available on every trim.";
			break;
		case 'cruise_control':
			current_timeline = cruise_control_anim;
			animate_popup(cruise_control_anim());
			show_road_blur('243px');
			show_trees_blur('-29px',true);
			cc_interval = setInterval(cruise_control_anim,13000);
			popup_heading.innerHTML = 'Adaptive Cruise Control';
			popup_subheading.innerHTML = "Hey now, keep your distance. If the car in front of your Passat speeds up or slows down, the sensors detect the change and can help your car adjust speed to follow suit.";
			feature_info_txt = "Dramatization. The features shown are not substitutes for attentive driving. See Owner's Manual for further details, and important limitations. Not all Driver Assistance features available on every trim.";
			break;
		case 'park_control':
			current_timeline = park_control_anim;
			animate_popup(park_control_anim());
			show_road_park();
			pc_interval = setInterval(park_control_anim,10000);
			popup_heading.innerHTML = 'Park Pilot';
			popup_subheading.innerHTML = "Back out or park confidently with alerts that signal how much space you have in front and back when parking. If your Passat gets too close, Park Pilot helps alert you.";
			popup_subheading.style.padding = '0 160px';
			feature_info_txt = "Dramatization. The features shown are not substitutes for attentive driving. See Owner's Manual for further details, and important limitations. Not all Driver Assistance features available on every trim.";
			break;
	}
}

show_popup = function() {
	var tl = new TimelineMax();
	tl
		.to('#popup_anim_container',0,{autoAlpha:1})
		.to('#popup_anim_container',.3,{top:'0px', ease:Power2.easeOut});
	//document.getElementById('btn_close').style.display = 'none';
}

popup_closed_handler = function() {
	reset_icons();
	icon_out = setTimeout(function(){var icon = check_icons();animate_icon(icon);clearTimeout(icon_out);}, 300);
	TweenMax.killAll();
	remove_popup_anim(current_timeline);
	var tl = new TimelineMax();
	tl
		.to('#popup_anim_container',.3,{top:'500px', ease:Power2.easeOut})
		.to('#popup_anim_container',0,{autoAlpha:0});
	var popup_anims = document.getElementsByClassName('popup_anim');
	for(var i=0;i<popup_anims.length;i++){
        popup_anims[i].style.display = 'none';
    }
    if(driving) {
	    stop_trees();
	    stop_road_blur();
    } else {
	    document.getElementById('road_park').style.display = 'none';
    }
}

stop_trees = function() {
	if(tl_tree_top_lg !== null && tl_tree_top_sm !== null && tl_tree_btm_lg !== null && tl_tree_btm_sm !== null) {
	    document.getElementById('trees_blur_container').style.display = 'none';
	    tl_tree_top_lg.kill();
	    tl_tree_top_lg = null;
	    document.getElementById('tree_top_lg').style.left = '855px';
	    tl_tree_top_sm.kill();
	    tl_tree_top_sm = null;
	    document.getElementById('tree_top_sm').style.left = '855px';
	    tl_tree_btm_lg.kill();
	    tl_tree_btm_lg = null;
	    document.getElementById('tree_btm_lg').style.left = '855px';
	    tl_tree_btm_sm.kill();
	    tl_tree_btm_sm = null;
	    document.getElementById('tree_btm_sm').style.left = '855px';
    }
}

stop_road_blur = function() {
	driving = false;
    document.getElementById('road_blur').style.display = 'none';
    document.getElementById('road_blur').style.backgroundPosition = '0 0';
}

show_road_blur = function(top) {
	driving = true;
	var road_blur = document.getElementById('road_blur');
	road_blur.style.display = 'block';
	road_blur.style.top = top;
	tl_road_blur = new TimelineMax();
	tl_road_blur.to(road_blur,1.03,{backgroundPosition:'-850px 0',repeat:-1,ease:Power0.easeNone});
}

show_road_park = function() {
	document.getElementById('road_park').style.display = 'block';
}

show_trees_blur = function(top,repeat) {
	var trees_blur_container = document.getElementById('trees_blur_container');
	trees_blur_container.style.display = 'block';
	trees_blur_container.style.top = top;
	tl_tree_top_lg = new TimelineMax();
	tl_tree_top_lg.to('#tree_top_lg',1.2,{left:'-110px',ease:Power0.easeNone,delay:get_random(0,1.5),onComplete:
		function(){
			if(repeat){
				tl_tree_top_lg.delay(get_random(0,1.5)).restart(true, false);
				set_scale('#tree_top_lg');
			}
		}
	});
	tl_tree_top_sm = new TimelineMax();
	tl_tree_top_sm.to('#tree_top_sm',1.2,{left:'-110px',ease:Power0.easeNone,delay:get_random(0,.5),onComplete:
		function(){
			if(repeat){
				tl_tree_top_sm.delay(get_random(0,.5)).restart(true, false);
				set_scale('#tree_top_sm');
			}
		}
	});
	tl_tree_btm_lg = new TimelineMax();
	tl_tree_btm_lg.to('#tree_btm_lg',1.2,{left:'-110px',ease:Power0.easeNone,delay:get_random(0,3),onComplete:
		function(){
			if(repeat){
				tl_tree_btm_lg.delay(get_random(0,3)).restart(true, false);
				set_scale('#tree_btm_lg');
			}
		}
	});
	tl_tree_btm_sm = new TimelineMax();
	tl_tree_btm_sm.to('#tree_btm_sm',1.2,{left:'-110px',ease:Power0.easeNone,delay:get_random(0,2),onComplete:
		function(){
			if(repeat){
				tl_tree_btm_sm.delay(get_random(0,2)).restart(true, false);
				set_scale('#tree_btm_sm');
			}
		}
	});
}

front_assist_anim = function() {
	//console.log('front assist anim');
	tl_radar_pulse.kill();
	tl_radar_pulse3.kill();
	car_swerve('#fa_car_blue',-3,2,-5,5);
	car_swerve2('#fa_car_white_container',-3,2,-5,5);
	radar_pulse('#fa_radar_blue li');
	radar_pulse3('#fa_radar_pink li');
	var tl_front_assist = new TimelineMax();
	tl_front_assist
		.set('#road_unblur_container',{left:'850px'})
		.set('#fa_car_blue',{left:'486px',top:'290px'})
		.set('#fa_car_white_container',{left:'220px',top:'265px'})
		.set(['#fa_radar_container li','#fa_radar_pink','#road_unblur','#fa_white_breaks','#fa_blue_breaks'],{opacity:0})
		.set('#fa_radar_blue',{opacity:1})
		//.set('#fa_radar_blue li',{display:'none'})
		.add('start')
		.to('#road_unblur',1.45,{opacity:1,ease:Power3.easeOut,onComplete:function(){stop_trees();}},'start+=3')
		.to('#road_unblur_container',1.5,{left:'-20px',ease:Power1.easeOut,onComplete:function(){tl_car_swerve.pause();tl_car_swerve2.pause();}},'start+=3')
		.to('#fa_car_blue',2,{left:'391px',ease:Power3.easeOut},'start+=3')
		.to(['#fa_white_breaks','#fa_blue_breaks'],.2,{opacity:1,ease:Power1.easeOut},'start+=3')
		//.staggerTo('#fa_radar_blue li',3,{display:'block',ease:Power3.easeIn,onComplete:hide_radars,onCompleteParams:["{self}"]},.6,'start+=3')
		.to('#fa_radar_pink',.4,{opacity:1,ease:Power0.easeNone},'start+=3.4')
		.to('#fa_radar_blue',.4,{opacity:0,ease:Power0.easeNone},'start+=3.4')
		.to('#road_unblur_container',4.25,{left:'-1700px',ease:Power2.easeIn,onStart:function(){tl_car_swerve.resume();tl_car_swerve2.resume();}},'start+=7')
		.to('#road_unblur',2,{opacity:0,ease:Power0.easeNone,onComplete:function(){show_trees_blur('0px',false);}},'start+=10.5')
		.to('#fa_radar_pink',.4,{opacity:0,ease:Power0.easeNone},'start+=9.5')
		.to('#fa_radar_blue',.2,{opacity:1,ease:Power0.easeNone},'start+=9.5')
		.to('#fa_car_white_container',3,{left:'120px',ease:Power1.easeInOut},'start+=7.5')
		.to('#fa_car_white_container',6,{left:'220px',ease:Power1.easeInOut},'start+=10.5')
		.to('#fa_car_blue',6,{left:'486px',ease:Power2.easeInOut},'start+=7.5')
		.to(['#fa_white_breaks','#fa_blue_breaks'],.2,{opacity:0,ease:Power1.easeOut},'start+=7.2')
	;
	return tl_front_assist;
}

blind_spot_anim = function() {
	//console.log('blind spot anim');
	tl_radar_pulse.kill();
	tl_radar_pulse3.kill();
	car_swerve('#bs_car_blue',-5,5,-10,20);
	car_swerve('#bs_car_white_container',-5,5,-5,15);
	radar_pulse('#bs_radar_blue li');
	radar_pulse3('#bs_radar_pink li');
	var tl_blind_spot = new TimelineMax();
	tl_blind_spot
		.set('#bs_car_blue',{left:'-150px',top:'257px'})
		.set('#bs_car_white_container',{left:'340px',top:'279px',opacity:0})
		.set(['#bs_radar_container li','#bs_radar_pink','#bs_radar_blue','#blinker','#front_blinker'],{opacity:0})
		.add('start')
		.to('#bs_car_white_container',.3,{opacity:1,ease:Power1.easeOut},'start')
		.to(['#blinker','#front_blinker'],.1,{opacity:1,yoyo:true,repeat:13,repeatDelay:.3,ease:Power0.easeNone},'start+=1')
		.to('#bs_radar_blue',.4,{opacity:1,ease:Power0.easeNone},'start')
		.to('#bs_car_blue',7,{left:'970px',ease:Power0.easeNone},'start')
		.to('#bs_radar_pink',.4,{opacity:1,ease:Power0.easeNone},'start+=2')
		.to('#bs_radar_blue',.4,{opacity:0,ease:Power0.easeNone},'start+=2')
		.to('#bs_radar_pink',.4,{opacity:0,ease:Power0.easeNone},'start+=3.8')
		.to('#bs_radar_blue',.4,{opacity:1,ease:Power0.easeNone},'start+=3.8')
		.to('#bs_radar_blue',.4,{opacity:0,ease:Power0.easeNone},'start+=4.5')
		.to('#bs_car_white_container',3,{top:'201px',ease:Power2.easeInOut},'start+=4')
		.to('#bs_car_white_container',.3,{opacity:0,ease:Power1.easeOut},'start+=8')
	;
	return tl_blind_spot;
}

rear_traffic_anim = function() {
	//console.log('rear traffic anim');
	tl_radar_pulse2.kill();
	radar_pulse2('#rt_radar2 li','#rt_radar1');
	var tl_rear_traffic = new TimelineMax();
	tl_rear_traffic
		.set('#rt_car_blue',{left:'855px',scale:.73,rotation:180})
		.set('#rt_car_white_container',{top:'213px',left:'248px',rotation:0,opacity:0})
		.set(['#rt_radar2 li','#rt_radar1','#rt_radar2','#rt_white_breaks'],{opacity:0})
		.set('#rt_radar_pink',{opacity:0,rotation:0})
		.add('start')
		.to('#rt_car_white_container',.3,{opacity:1,ease:Power1.easeOut},'start')
		.to('#rt_car_blue',10,{left:'-125px',ease:Power0.easeNone},'start')
		.to('#rt_car_white_container',2,{top:'240px',ease:Power1.easeInOut},'start+=1.5')
		.to('#rt_white_breaks',.2,{opacity:1,ease:Power1.easeOut},'start+=2.75')
		.to('#rt_radar2',2,{opacity:1,ease:Power1.easeOut},'start+=1.5')
		.to('#rt_radar1',2,{opacity:1,ease:Power2.easeOut},'start+=2.75')
		.to('#rt_radar2',2,{opacity:0,ease:Power2.easeOut},'start+=2.75')
		.to('#rt_radar_pink',1.3,{opacity:.6,rotation:-72,ease:Power2.easeInOut},'start+=2.3')
		.to('#rt_radar_pink',2.7,{rotation:72,ease:Power1.easeInOut},'start+=3.75')
		.to('#rt_radar1',2,{opacity:0,ease:Power1.easeOut},'start+=6.5')
		.to('#rt_radar2',2,{opacity:1,ease:Power1.easeOut},'start+=6.5')
		.to('#rt_radar_pink',2,{opacity:0,ease:Power1.easeOut},'start+=6.5')
		.to('#rt_car_white_container',2.5,{top:'330px',left:'205px',rotation:-45,ease:Power1.easeInOut},'start+=6.85')
		.to('#rt_white_breaks',.2,{opacity:0,ease:Power1.easeOut},'start+=6.85')
		.to('#rt_car_white_container',2.5,{left:'320px',rotation:-90,ease:Power1.easeInOut},'start+=7.25')
		.to('#rt_white_breaks',.2,{opacity:1,ease:Power1.easeOut},'start+=9.25')
		.to('#rt_radar2',.5,{opacity:0,ease:Power2.easeOut},'start+=10')
		.to('#rt_car_white_container',4.5,{left:'-250px',ease:Power1.easeIn},'start+=10')
		.to('#rt_white_breaks',.2,{opacity:0,ease:Power1.easeOut},'start+=10')
	;
	return tl_rear_traffic;
}

lane_assist_anim = function(top_num,flip) {
	//console.log('lane assist anim');
	clearTimeout(la_timeout);
	clearTimeout(clear_to);
	la_timeout = setTimeout(lane_assist_anim,8000,'243px',true);
	clear_to = setTimeout(function(){clearTimeout(la_timeout);clearTimeout(clear_to);}, 14000);
	tl_radar_pulse.kill();
	car_swerve('#la_car_white_container',-2,2,-10,20);
	radar_pulse('#la_radar_blue li');
	if(flip) {
		toggle_class(document.getElementById('la_car_white_container'),'', 'flip');
	} else {
		toggle_class(document.getElementById('la_car_white_container'),'flip', '');
	}
	var tl_lane_assist = new TimelineMax();
	tl_lane_assist
		.set('#la_car_white_container',{left:'252px',top:'234px'})
		//.set(['#la_radar_blue li','#la_radar_blue'],{opacity:0})
		.set('#yellow_arrow',{left:'-180px'})
		.set('#blue_arrow_container',{width:'0px'})
		.set('#blue_arrows',{left:'0px'})
		.set('#blue_arrow',{top:'27px'})
		.add('start')
		.to('#la_car_white_container',3,{top:top_num,ease:Power2.easeOut},'start')
		.to('#la_car_white_container',3,{top:'234px',ease:Power1.easeIn},'start+=2.9')
		.to('#yellow_arrow',.5,{left:'0px',ease:Power2.easeOut},'start+=.5')
		.to('#blue_arrow_container',.7,{width:'178px',ease:Power2.easeOut},'start+=.5')
		.to('#blue_arrow',.45,{bezier:[{top:'27px'}, {top:'-2.5px'}, {top:'40px'}, {top:'58px'}], ease:Power2.easeOut},'start+=.65')
		//.to('#la_radar_blue',.5,{opacity:1,ease:Power2.easeOut},'start+=1')
		.to('#yellow_arrow',3,{left:'-180px',ease:Power2.easeIn},'start+=3.25')
		.to('#blue_arrows',1,{left:'-324px',ease:Power2.easeIn},'start+=5.1')
		.to('#blue_arrow_container',1,{width:'0px',ease:Power2.easeIn},'start+=5.1')
		.to('#blue_arrow',.45,{bezier:[{top:'58px'}, {top:'29px'}], ease:Power2.easeIn},'start+=5.35')
		//.to('#la_radar_blue',.5,{opacity:0,ease:Power2.easeOut},'start+=5.5')
	;
	return tl_lane_assist;
}

park_assist_anim = function() {
	//console.log('park assist anim');
	tl_radar_pulse.kill();
	//radar_pulse('#pa_radar_blue li');
	tl_radar_pulse.kill();
	tl_radar_pulse3.kill();
	radar_pulse3('#pa_radar_front li');
	radar_pulse('#pa_radar_back li');
	var tl_park_assist = new TimelineMax();
	tl_park_assist
		.set('#pa_car_white_container',{left:'-220px',top:'302px',rotation:0,opacity:0})
		.set('#pa_radar_container',{opacity:0,left:'376px',width:'151px'})
		.set(['#pa_blinker','#pa_front_blinker'],{opacity:0})
		.set('#pa_radar_blue',{opacity:1})
		.set('#pa_radar_back',{rotation:180})
		.set('#pa_radar_pulse_container',{left:'-302px',opacity:1})
		.add('start')
		.to(['#pa_blinker','#pa_front_blinker'],.1,{opacity:1,yoyo:true,repeat:15,repeatDelay:.3,ease:Power0.easeNone},'start')
		.to('#pa_car_white_container',.3,{opacity:1,ease:Power1.easeOut},'start')
		.to('#pa_car_white_container',7,{left:'555px',ease:Power1.easeOut},'start')
		.to('#pa_radar_pulse_container',7,{left:'472px',ease:Power1.easeOut},'start')
		.to('#pa_radar_pulse_container',.4,{opacity:0,ease:Power1.easeOut},'start+=4.5')
		.to('#pa_radar_blue',.4,{opacity:0,ease:Power2.easeOut},'start+=4')
		.to('#pa_radar_container',2.4,{left:'396px',ease:Power1.easeOut},'start+=5')
		.to('#pa_radar_container',3,{left:'376px',ease:Power2.easeInOut},'start+=7.5')
		.to('#pa_radar_container',.5,{opacity:1,yoyo:true,repeat:5,ease:Power2.easeInOut,onComplete:function(){TweenMax.to('#pa_radar_container',.5,{opacity:1,ease:Power1.easeInOut})}},'start+=4.75')
		.to('#pa_car_white_container',2.75,{top:'375px',left:'320px',rotation:-90,ease:Power2.easeIn},'start+=7.5')
		.to('#pa_car_white_container',2.5,{top:'380px',left:'355px',rotation:0,ease:Power2.easeOut},'start+=9.5')
		.to('#pa_radar_container',4,{width:'0px',ease:Power2.easeInOut},'start+=7.5')
		.to('#pa_car_white_container',1.3,{left:'376px',ease:Power1.easeInOut},'start+=12')
		.to('#pa_car_white_container',.3,{opacity:0,ease:Power1.easeOut},'start+=14')
	;
	return tl_park_assist;
}

cruise_control_anim = function() {
	//console.log('cruise control anim');
	tl_radar_pulse.kill();
	tl_radar_pulse3.kill();
	car_swerve('#cc_car_blue',-3,3,-5,15);
	car_swerve('#cc_car_white_container',-3,3,-10,20);
	radar_pulse('#cc_radar_blue li');
	radar_pulse3('#cc_radar_pink li');
	var tl_cruise_control = new TimelineMax();
	tl_cruise_control
		.set('#cc_car_blue',{left:'520px',top:'258px'})
		.set('#cc_car_white_container',{left:'255px',top:'233px',opacity:1})
		.set(['#cc_radar_pink','#cc_blinker'],{opacity:0})
		.add('start')
		//.to(['#cc_car_white_container','#cc_radar_blue'],.3,{opacity:1,ease:Power1.easeOut},'start')
		//.to('#cc_car_blue',2.5,{top:'336px',left:'60px',ease:Power1.easeOut},'start+=1')
		//.to('#cc_car_blue',6.5,{left:'440px',ease:Power0.easeNone},'start+=.5')
		//.to('#cc_blinker',.1,{opacity:1,yoyo:true,repeat:9,repeatDelay:.3,ease:Power0.easeNone},'start+=4')
		//.to('#cc_car_blue',3,{left:'470px',ease:Power1.easeOut},'start+=6.4')
		.to('#cc_car_blue',4.5,{left:'400px',ease:Power1.easeInOut},'start+=1')
		.to('#cc_radar_pink',.4,{opacity:1,ease:Power0.easeNone},'start+=1.8')
		.to('#cc_radar_blue',.4,{opacity:0,ease:Power0.easeNone},'start+=1.8')
		.to('#cc_car_white_container',6,{left:'140px',ease:Power2.easeInOut},'start+=1.3')
		.to('#cc_radar_pink',.4,{opacity:0,ease:Power0.easeNone},'start+=5.5')
		.to('#cc_radar_blue',.4,{opacity:1,ease:Power0.easeNone},'start+=5.5')
		.to('#cc_car_blue',6,{left:'520px',ease:Power1.easeInOut},'start+=6')
		.to('#cc_car_white_container',6,{left:'255px',ease:Power1.easeInOut},'start+=7')
		//.to('#cc_car_white_container',.3,{opacity:0,ease:Power1.easeOut},'start+=17')
	;
	return tl_cruise_control;
}

park_control_anim = function() {
	//console.log('park control anim');
	tl_radar_pulse.kill();
	tl_radar_pulse3.kill();
	radar_pulse3('#pc_radar_front li');
	radar_pulse('#pc_radar_back li');
	var tl_park_control = new TimelineMax();
	tl_park_control
		.set('#pc_car_white_container',{left:'294px',top:'355px',rotation:0,opacity:0})
		.set('#pc_radar_back',{rotation:180,opacity:0})
		.set(['#pc_radar_front','#pc_radar_front li','#pc_radar_back li','#pc_blinker','#pc_front_blinker'],{opacity:0})
		.add('start')
		.to(['#pc_blinker','#pc_front_blinker'],.1,{opacity:1,yoyo:true,repeat:17,repeatDelay:.3,ease:Power0.easeNone},'start')
		.to('#pc_car_white_container',.3,{opacity:1,ease:Power1.easeOut},'start')
		.to('#pc_car_white_container',2,{left:'314px',top:'345px',rotation:-5,ease:Power1.easeInOut},'start')
		.to('#pc_radar_front',.4,{opacity:1,ease:Power1.easeOut},'start+=.25')
		.to('#pc_car_white_container',2,{left:'272px',top:'355px',rotation:-10,ease:Power1.easeInOut},'start+=2.25')
		.to('#pc_radar_front',.4,{opacity:0,ease:Power1.easeOut},'start+=2')
		.to('#pc_radar_back',.4,{opacity:1,ease:Power1.easeOut},'start+=2.5')
		.to('#pc_car_white_container',5,{bezier:{type:'soft',values:[{top:'300px',left:'340px',rotation:-35},{top:'280px',left:'355px',rotation:5}, {top:'280px',left:'855px',rotation:0}], autoRotate:false}, ease:Power1.easeInOut},'start+=5')
		.to('#pc_radar_front',.4,{opacity:1,ease:Power1.easeOut},'start+=5.2')
		.to('#pc_radar_back',.4,{opacity:0,ease:Power1.easeOut},'start+=5.2')
		.to('#pc_radar_front',.4,{opacity:0,ease:Power1.easeOut},'start+=6')
	;
	return tl_park_control;
}

car_swerve = function(object,min1,max1,min2,max2) {
	tl_car_swerve = new TimelineMax();
	tl_car_swerve.to(object, get_random(3,5), {
        y: get_random(min1,max1),
        x: get_random(min2,max2),
        onComplete: car_swerve,
        onCompleteParams: [object,min1,max1,min2,max2]
    });
}

car_swerve2 = function(object,min1,max1,min2,max2) {
	tl_car_swerve2 = new TimelineMax();
	tl_car_swerve2.to(object, get_random(3,5), {
        y: get_random(min1,max1),
        x: get_random(min2,max2),
        onComplete: car_swerve2,
        onCompleteParams: [object,min1,max1,min2,max2]
    });
}

radar_pulse = function(object) {
	tl_radar_pulse = new TimelineMax();
	tl_radar_pulse
    	.add('start')
    	.staggerTo(object,.25,{opacity:1},.1,'start')
		.staggerTo(object,.25,{opacity:0},.1,'start+=.25')
		.addCallback(radar_pulse,null,[object])
	;
}

radar_pulse3 = function(object) {
	tl_radar_pulse3 = new TimelineMax();
	tl_radar_pulse3
    	.add('start')
    	.staggerTo(object,.25,{opacity:1},.1,'start')
		.staggerTo(object,.25,{opacity:0},.1,'start+=.25')
		.addCallback(radar_pulse3,null,[object])
	;
}

radar_pulse2 = function(object,object2) {
	tl_radar_pulse2 = new TimelineMax();
	tl_radar_pulse2
    	.add('start')
    	.staggerTo(object,.1,{opacity:1},.05,'start')
		.staggerTo(object,.08,{opacity:0},.04,'start+=.4')
		//.to(object2,.4,{opacity:.4},'start+=.5')
		//.to(object2,.4,{opacity:0},'start+=1')
		.addCallback(radar_pulse2,null,[object,object2])
	;
}

hide_radars = function(radar) {
	hide_it(radar.target);
	function hide_it(object) {
		tl = new TimelineMax();
		tl.to(object,0,{display:'none',delay:radar_delay+.5});
		radar_delay--;
	}
}

animate_popup = function(timeline) {
	tl_main
		.add(timeline)
	;
}

remove_popup_anim = function(timeline) {
	radar_delay = 2;
	tl_main
		.remove(timeline)
	;
	TweenMax.killAll();
	switch(icon_class) {
		case 'front_assist':
			//console.log('reset front assist anim');
			clearInterval(fa_interval);
			break;
		case 'blind_spot':
			//console.log('reset blind spot anim');
			clearInterval(bs_interval);
			break;
		case 'rear_traffic':
			//console.log('reset rear traffic anim');
			clearInterval(rt_interval);
			break;
		case 'lane_assist':
			//console.log('reset lane assist anim');
			clearInterval(la_interval);
			clearTimeout(la_timeout);
			clearTimeout(clear_to);
			break;
		case 'park_assist':
			//console.log('reset park assist anim');
			clearInterval(pa_interval);
			break;
		case 'cruise_control':
			//console.log('reset cruise control anim');
			clearInterval(cc_interval);
			break;
		case 'park_control':
			//console.log('reset park control anim');
			clearInterval(pc_interval);
			break;
	}
}

init_expand();

set_scale = function(elem) {
	TweenMax.set(elem,{scale:get_random(.5,1)});
}

get_random = function(min,max) {
	return min + Math.random() * (max - min);
}

has_class = function(el,cls) {
	var regexp = new RegExp( '(\\s|^)' + cls + '(\\s|$)' ),
    target = ( typeof el.className == "undefined" )?window.event.srcElement:el;
	return target.className.match( regexp );
}

toggle_class = function(elem, from, to) {
	elem.className = elem.className.replace(from, to);
}
