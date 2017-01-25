// JavaScript Document
// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var bgExit;

var myVideo;
var videoElement;

var videoControls;
var playBtn;
var pauseBtn;
var muteBtn;
var unmuteBtn;
var replayBtn;
var replayContainer;

var clickToPlayContainer;
var clickToPlayBtn;

var video_autoplay = true;
var video_muted = true;
var isDesktop = false;

//Function to run with any animations starting on load, or bringing in images etc
init = function(){
	
	//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	bgExit = document.getElementById('background_exit_dc');

	videoControls = document.getElementById('video_controls');
	playBtn = document.getElementById('playBtn');
	pauseBtn = document.getElementById('pauseBtn');
	muteBtn = document.getElementById('muteBtn');
	unmuteBtn = document.getElementById('unmuteBtn');
	replayBtn = document.getElementById('replayBtn');
	replayContainer = document.getElementById('replay_container');
	clickToPlayBtn = document.getElementById('clickToPlayBtn');
	clickToPlayContainer = document.getElementById('clickToPlayContainer');

	var delay = 2;
	var tween0 = TweenLite.from('#copy', .5, { alpha: 0, delay: delay});
	delay += .5;
	var tween1 = TweenLite.from('#cta', .5, { alpha: 0, delay: delay});
	
	//Bring in listeners i.e. if a user clicks or rollovers
	addListeners();
	
	//Show Ad
	container.style.display = "block";
	createVideoPlayer();
}

//Add Event Listeners
addListeners = function() {
	bgExit.addEventListener('click', bgExitHandler, false);
	playBtn.addEventListener('click', video_play, false);
	pauseBtn.addEventListener('click', video_play, false);
	muteBtn.addEventListener('click', video_mute, false);
	unmuteBtn.addEventListener('click', video_mute, false);
	replayBtn.addEventListener('click', video_replay, false);
	clickToPlayBtn.addEventListener('click', clickToPlay, false);
}

bgExitHandler = function(e) {
	//Call Exits
	screenad.click();
}

function createVideoPlayer() {
	//alert('screenad.deviceType: '+screenad.deviceType);
	if (screenad.deviceType == screenad.DEVICE_DESKTOP){
		//alert('isDesktop');
		isDesktop = true;
		playBtn.classList.add('buttonLeft');
		pauseBtn.classList.add('buttonLeft');
		muteBtn.classList.add('buttonRight');
		unmuteBtn.classList.add('buttonRight');
		hideBtn(clickToPlayContainer);
	}else{
		playBtn.classList.add('buttonRight');
		pauseBtn.classList.add('buttonRight');

		hideControls();

	}
	if (screenad.deviceType == screenad.DEVICE_DESKTOP && video_autoplay == true) { 
	    video_muted = true;
	} else if (screenad.deviceType != screenad.DEVICE_DESKTOP) {
	    video_muted = false;
	    video_autoplay = false;
	}

	var settings = {
		width : 380,
		height : 214,
		reference : 'video', // This reference is used for event names. Only alphanumerical characters and underscores are allowed. Defaults to 'video'.
		prependTo : document.getElementById('video_container'), // alternatively, use appendTo
		controls : false,
		poster : 'video_poster.jpg',
		loop : false, // defaults to false
		autoplay : true, // defaults to false (only works on desktop)
		muted : true, // it's recommended to omit this parameter *
		videoFiles : [
			{'src':'ESSO_SYNERGY_DISCO_PH.mp4','type':'video/mp4'}
		]
	};
	myVideo = new screenad.video.VideoPlayer (settings);
	// * In most cases it is best to leave the 'muted' parameter out. It automatically decides
	//   what's best, based on the value of autoplay:
	//    - autoplay === true results in a muted video.
	//    - autoplay === false results in a non-muted video.
	videoElement = myVideo.getVideoElement();

	setTimeout(initVideo, 200);
}

function initVideo() {
	videoElement.addEventListener('playing', videoEventsHandler);
	videoElement.addEventListener('pause', videoEventsHandler);
	videoElement.addEventListener('timeupdate', videoEventsHandler);
	videoElement.addEventListener('ended', videoEventsHandler);
	videoElement.addEventListener('volumechange', videoEventsHandler);
	if(isDesktop)showControls();
}

function showControls(){
	if(isDesktop){
		if(videoElement.muted) showBtn(unmuteBtn);
		else showBtn(muteBtn);
	}else{

	}
	showBtn(pauseBtn);
	hideBtn(playBtn);
	showBtn(videoControls);
}

function hideControls(){
	hideBtn(unmuteBtn);
	hideBtn(muteBtn);
	hideBtn(pauseBtn);
	hideBtn(playBtn);
	hideBtn(videoControls);
}

function videoEventsHandler(e) {
	//console.log(e.type, videoElement.muted);
	
	var ct = videoElement.currentTime;
	var dur = videoElement.duration;
	var per = Math.floor((100 / videoElement.duration) * videoElement.currentTime);
	
	switch(e.type) {
		case 'playing':
			// video is playing.
			//alert('playing');
			hideBtn(playBtn);
			showBtn(pauseBtn);
			hideBtn(clickToPlayContainer);
		break;
		case 'pause':
			hideBtn(pauseBtn);
			showBtn(playBtn);
			// video is paused.
		break;
		case 'timeupdate':
			// video updates the currentTime.
		break;
		case 'ended':
			TweenLite.from(replayBtn, .5, {autoAlpha:0, overwrite:0, delay:3.5});
			showBtn(replayContainer);
			hideControls();
		break;
		case 'volumechange':
			// video volume has changed
			// relevent variable. videoElement.muted.
		break;
	};
}

function clickToPlay(){
	video_play();
	showControls();
}

function video_play() {
	if (videoElement.paused == false && videoElement.ended == false) {
		videoElement.pause();
	} else {
		videoElement.play();
		
	}
}

function video_replay() {
	videoElement.currentTime = 0;
	videoElement.play();
	showControls();
	hideBtn(replayContainer);
}

function video_mute() {
	if (videoElement.muted) {
		videoElement.muted = false;
		showBtn(muteBtn);
		hideBtn(unmuteBtn);
	} else {
		videoElement.muted = true;
		showBtn(unmuteBtn);
		hideBtn(muteBtn);
	}
}

function hideBtn(e){
	e.style.visibility = "hidden";
}
function showBtn(e){
	e.style.visibility = "visible";
}

init();