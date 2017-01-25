// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var bgExit;
var vid1Container;
var vid1;
var vid1PlayBtn;
var vid1PauseBtn;
var vid1UnmuteBtn;
var vid1MuteBtn;
var vid1ReplayBtn;
var paused;
var tl_expand;

//Function to run with any animations starting on load, or bringing in images etc
init_expand = function(){
	
	//Assign All the elements to the element on the page
	background_exit = document.getElementById('background_exit_dc');
	//expand_cta_bg = document.getElementById('expand_cta_bg');
	close_button = document.getElementById('close-button');
	vid1Container = document.getElementById('video1_container_dc');
	vid1 = document.getElementById('video1_dc');
	vid1PlayBtn = document.getElementById('video1_control_play_dc');
	vid1PauseBtn = document.getElementById('video1_control_pause_dc');
	vid1UnmuteBtn = document.getElementById('video1_control_unmute_dc');
	vid1MuteBtn = document.getElementById('video1_control_mute_dc');
	vid1ReplayBtn = document.getElementById('video1_control_replay_dc');
	scrub_controls = document.getElementById('video1_control_scrub_bar_dc');
	scrub_bg = document.getElementById('scrub_bg');
	scrub_bg_seek = document.getElementById('scrub_bg_seek');
	scrubber = document.getElementById('scrubber');
	animate_expand();
	//Bring in listeners i.e. if a user clicks or rollsover
	addListeners();
	//Bring in Video tracking and start video
	addVideoTracking();
}

animate_expand = function() {
	tl_expand = new TimelineLite();
	animate_reset();
	tl_expand.to(close_button,.5,{ autoAlpha: 1, ease:Power3.easeOut },"start")
		  .to("#expand_heroes",.3,{ autoAlpha: 1, rotation: 0, scale: 1, ease:Power3.easeInOut },"start")
		  .to("#expand_particles",.4,{ autoAlpha: 1, scale: 1, ease:Power2.easeOut },"start+=.2")
		  .to("#expand_bg",.7,{ autoAlpha: 1, rotation: 0, scale: 1, ease:Elastic.easeOut },"-=.4")
		  .to("#expand_logo",.5,{ autoAlpha: 1, scale: 1, ease:Power2.easeInOut },"-=.25")
		  .to("#expand_featuring",.4,{ autoAlpha:1, top: 63, ease:Power3.easeOut }, "-=.1")
		  .to("#expand_2k",.4,{ autoAlpha:1, bottom: 10, ease:Power3.easeOut }, "fade")
		  .to("#expand_rating",.4,{ autoAlpha:1, ease:Power3.easeOut }, "fade")
		  .to("#expand_legal",.4,{ autoAlpha:1, ease:Power3.easeOut }, "fade")
		  .to("#expand_footer",.4,{ autoAlpha:1, ease:Power3.easeOut }, "start+=1.5")
		  .to("#expand_order",.4,{ autoAlpha:1, left: 0, ease:Power3.easeOut }, "start+=1.5")
		  .to("#expand_story",.4,{ autoAlpha:1, left: 0, ease:Power3.easeOut }, "start+=1.5");
}

animate_reset = function() {
	tl_expand.set(close_button,{ opacity: 0 })
			 .set("#expand_heroes",{ opacity: 0, rotation: 3, scale: 1.5 })
			 .set("#expand_particles",{ opacity: 0, scale: .85 })
			 .set("#expand_bg",{ opacity: 0, rotation: 15, scale: .5 })
			 .set("#expand_logo",{ opacity: 0, scale: 1.4 })
			 .set("#expand_featuring",{ opacity: 0, top: 22 })
			 .set("#expand_2k",{ opacity: 0, bottom: -25 })
			 .set("#expand_rating",{ opacity: 0 })
			 .set("#expand_legal",{ opacity: 0 })
			 .set("#expand_footer",{ opacity: 0 })
			 .set("#expand_order",{ opacity: 0, left: -124 })
			 .set("#expand_story",{ opacity: 0, left: 140 });
}

//Add Event Listeners
addListeners = function() {
	Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, addVideoTracking);
	close_button.addEventListener('click',closeButtonHandler, false);
	scrub_bg.addEventListener('mousedown',scrubBgDownHandler, false);
	scrub_bg_seek.addEventListener('mousedown',scrubBgDownHandler, false);
	scrubber.addEventListener('mousedown',scrubBgDownHandler, false);
	vid1PlayBtn.addEventListener('click', pausePlayHandler, false);
	vid1PauseBtn.addEventListener('click', pausePlayHandler, false);
	vid1MuteBtn.addEventListener('click', muteUnmuteHandler, false);
	vid1UnmuteBtn.addEventListener('click', muteUnmuteHandler, false);
	vid1ReplayBtn.addEventListener('click', replayHandler, false);
	vid1.addEventListener('ended', videoEndHandler, false);
	// Update the seek bar as the video plays
	vid1.addEventListener('timeupdate', videoTimeUpdateHandler, false);
	background_exit.addEventListener('click', bgExitClickHandler, false);
	background_exit.addEventListener('mouseenter', bgExitEnterHandler, false);
	background_exit.addEventListener('mouseleave', bgExitLeaveHandler, false);
}

removeListeners = function() {
	Enabler.removeEventListener(studio.events.StudioEvent.EXPAND_FINISH, addVideoTracking);
	close_button.removeEventListener('click',closeButtonHandler);
	scrub_bg.removeEventListener('mousedown',scrubBgDownHandler);
	scrub_bg_seek.removeEventListener('mousedown',scrubBgDownHandler);
	scrubber.removeEventListener('mousedown',scrubBgDownHandler);
	vid1PlayBtn.removeEventListener('click', pausePlayHandler);
	vid1PauseBtn.removeEventListener('click', pausePlayHandler);
	vid1MuteBtn.removeEventListener('click', muteUnmuteHandler);
	vid1UnmuteBtn.removeEventListener('click', muteUnmuteHandler);
	vid1ReplayBtn.removeEventListener('click', replayHandler);
	vid1.removeEventListener('ended', videoEndHandler);
	// Update the seek bar as the video plays
	vid1.removeEventListener('timeupdate', videoTimeUpdateHandler);
	background_exit.removeEventListener('click', bgExitClickHandler);
	background_exit.removeEventListener('mouseenter', bgExitEnterHandler, false);
	background_exit.removeEventListener('mouseleave', bgExitLeaveHandler, false);
}

bgExitClickHandler = function() {
	Enabler.exit('HTML5_Expand_Clickthrough');
	closeButtonHandler();
}

bgExitEnterHandler = function() {
	document.getElementById('expand_order_wrapper').classList.add('over');
	document.getElementById('expand_order_wrapper').classList.remove('out');
}

bgExitLeaveHandler = function() {
	document.getElementById('expand_order_wrapper').classList.add('out');
	document.getElementById('expand_order_wrapper').classList.remove('over');
}

//Add Video Metrics to the HTML5 Video Elements by Loading in Video Module, and assigning to Videos
addVideoTracking = function() {
	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
		studio.video.Reporter.attach('video_1', vid1);
	});
	
	vid1MuteBtn.style.display = 'block';
	vid1UnmuteBtn.style.display = 'none';
	vid1ReplayBtn.style.display = 'none';
	scrub_controls.style.display = 'block';
	
	vid1.play();
	vid1.volume = 1.0;
	paused = false;
	
	//Ipad, iPod, iPhone exception. Safari on mobile can not use 	mute by controls
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/Android/i)) ){	
	document.getElementById("video1_control_unmute_dc").style.opacity=0;
	document.getElementById("video1_control_mute_dc").style.opacity=0;
	} 	
}

closeButtonHandler = function(e) {
	removeListeners();
	//Pause Video
	vid1.pause();
	vid1.currentTime = 0;
	paused = true;
	scrub_bg_seek.style.width = '2px';
	//Setup Buttons
	vid1PauseBtn.style.display = 'block';
	vid1PlayBtn.style.display = 'none';
	Enabler.requestCollapse();
	Enabler.reportManualClose();
	studio.video.Reporter.detach('video_1', vid1);
}

scrubBgDownHandler = function(e) {
	vid1.pause();
	var posX = getPosition(scrub_bg);
	var percent = (e.clientX - posX.x) / scrub_bg.offsetWidth;
	vid1.currentTime = percent * vid1.duration;
	var move = ((e.clientX - posX.x)-4);
	scrubber.style.left = move  + 'px';
	scrub_bg_seek.style.width = move + 'px';
	document.addEventListener('mouseup',scrubBgUpHandler, false);
	document.addEventListener('mousemove',scrubBgMoveHandler, false);
}

scrubBgUpHandler = function(e) {
	if(paused) {
		vid1.pause();
	} else {
		vid1.play();
	}
	document.removeEventListener('mouseup',scrubBgUpHandler, false);
	document.removeEventListener('mousemove',scrubBgMoveHandler, false);
}

scrubBgMoveHandler = function(e) {
	var posX = getPosition(scrub_bg);
	var offset = ((scrubber.offsetLeft+4)/2.4)/100;
	var percent = (e.clientX - posX.x) / scrub_bg.offsetWidth;
	vid1.currentTime = percent * vid1.duration;
	var move = ((e.clientX - posX.x)-4);
	if(move <= -4) {
		move = -4;
	} else if (move >= posX.x-4) {
		move = posX.x-4;
	}
	scrubber.style.left = move  + 'px';
	scrub_bg_seek.style.width = move + 'px';
}

pausePlayHandler = function(e) {
	if (vid1.paused) {
		//If Paused then Play
		vid1.play();
		paused = false;
		Enabler.counter("Play Btn Clicked",true);
		//Show Pause button and hide Play button
		vid1PauseBtn.style.display = 'block';
		vid1PlayBtn.style.display = 'none';
	} else {
		//If not paused then Pause
		vid1.pause();
		paused = true;
		Enabler.counter("Pause Btn Clicked",true);
		//Show Play button and hide Pause button
		vid1PauseBtn.style.display = 'none';
		vid1PlayBtn.style.display = 'block';
	}
}

muteUnmuteHandler = function(e) {
	if (vid1.volume == 0.0) {
	//If Muted then Turn Volume Back to 1.0
		vid1.volume = 1.0;
		vid1MuteBtn.style.display = 'block';
		vid1UnmuteBtn.style.display = 'none';
	} else {
	//Otherwise Turn Volume Off
		vid1.volume = 0.0;
		vid1MuteBtn.style.display = 'none';
		vid1UnmuteBtn.style.display = 'block';
	}
}

replayHandler = function(e) {
	//set video's first frame
	Enabler.counter("Replay Btn Clicked",true);
	vid1.currentTime = 0;
	//Play film
	vid1.play();
	//Turn sound on
	vid1.volume = 1.0;
	//Show required buttons
	vid1PauseBtn.style.display = 'block';
	vid1MuteBtn.style.display = 'block';
	vid1ReplayBtn.style.display = 'none';
	scrub_controls.style.display = 'block';
}

videoEndHandler = function(e) {
	vid1.currentTime = 0;
	vid1.pause();
		
	vid1ReplayBtn.style.display = 'block';
	vid1PauseBtn.style.display = 'none';
	vid1PlayBtn.style.display = 'none';
	vid1MuteBtn.style.display = 'none';
	vid1UnmuteBtn.style.display = 'none';
	scrub_controls.style.display = 'none';
	scrub_bg_seek.style.width = '2px';
}

videoTimeUpdateHandler = function() {
	var value = Math.round((100 / vid1.duration) * vid1.currentTime);
	scrubber.style.left = ((value*2.4)-4) + 'px';
	scrub_bg_seek.style.width = ((value*2.4)-4) + 'px';
}

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
  
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

init_expand();