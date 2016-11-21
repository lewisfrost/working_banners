// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
container = document.getElementById('container_dc');
content = document.getElementById('content_dc');
expandedBgExit = document.getElementById('expanded_background_exit_dc');
vidContainer = document.getElementById('video_container_dc');
vid = document.getElementById('video_dc');
vidMain = document.getElementById('video_collapse');
vidPlayBtn = document.getElementById('video_control_play_dc');
vidPauseBtn = document.getElementById('video_control_pause_dc');
vidStopBtn = document.getElementById('video_control_stop_dc');
vidReplayBtn = document.getElementById('video_control_replay_dc');
vidUnmuteBtn = document.getElementById('video_control_unmute_dc');
vidMuteBtn = document.getElementById('video_control_mute_dc');
close_btn = document.getElementById('close_btn_dc');
expand_content =  document.getElementById('expand_content_dc');

videobtn1 = document.getElementById('video_1');
videobtn2 = document.getElementById('video_2');
videobtn3 = document.getElementById('video_3');
videobtn4 = document.getElementById('video_4');
videobtn5 = document.getElementById('video_5');

var btnArr = [videobtn1,videobtn2,videobtn3,videobtn4,videobtn5];

var videoArr = new Array();

videoArr[0] = [
        "video1.mp4",
        "video1.ogg",
        "video1.webm"
        ];
videoArr[1] = [
        "video2.mp4",
        "video2.ogg",
        "video2.webm"
        ];
videoArr[2] = [
        "video3.mp4",
        "video3.ogg",
        "video3.webm"
        ];
videoArr[3] = [
        "video4.mp4",
        "video4.ogg",
        "video4.webm"
        ];
videoArr[4] = [
        "video5.mp4",
        "video5.ogg",
        "video5.webm"
        ];




//Function to run with any animations starting on load, or bringing in images etc

init = function(){

	//Setup Background Images (this could be done in CSS as well)
	//content.style.backgroundImage = "url("+Enabler.getFilename('DCRM_HTML5_Expanding_Polite_Video_Right_onRollOver_300x250.png')+")";
	/*expand_content.style.backgroundImage = "url("+Enabler.getFilename('DCRM_HTML5_Expanding_Polite_Video_Right_onRollOver_400x450.png')+")";*/
	close_btn.style.backgroundImage = "url("+Enabler.getFilename('close.png')+")";

    pageLoadedHandler();

	//Bring in listeners

	//Bring in Video tracking and start video
	addVideoTracking();
	//Show Ad
	container.style.display = "block";

	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPod/i)) ){
		document.getElementById("video1_control_unmute_dc").style.opacity=0;
		document.getElementById("video1_control_mute_dc").style.opacity=0;
	}

}


//Add Event Listeners
addListeners = function() {
	vidPlayBtn.addEventListener('click', pausePlayHandler, false);
	vidPauseBtn.addEventListener('click', pausePlayHandler, false);
	vidMuteBtn.addEventListener('click', muteUnmuteHandler, false);
	vidUnmuteBtn.addEventListener('click', muteUnmuteHandler, false);
	vidReplayBtn.addEventListener('click', replayHandler, false);
	vidStopBtn.addEventListener('click', stopHandler, false);
	vid.addEventListener('ended', videoEndHandler, false);
	vidMain.addEventListener('ended', videoMainEndHandler, false);	


	expandedBgExit.addEventListener('click', expandedBgExitHandler, false);
	//expand_content.addEventListener('mouseout', onMouseOffHandler, false);
    content.addEventListener('mouseover', onExpandHandler, false);
	close_btn.addEventListener('click',onCloseClickHandler, false);

    for(var i=0; i<5; i++)
    {

        btnArr[i].addEventListener('mouseout', videoBtnOutHandler, false);
        btnArr[i].addEventListener('mouseover', videoBtnOverHandler, false);
        btnArr[i].addEventListener('click', videoBtnClickHandler, false);
    }

}
function pageLoadedHandler()
{
     head.load("CSSPlugin.min.js","TweenLite.min.js","EasePack.min.js",addListeners);
}


//Add Video Metrics to the HTML5 Video Elements by Loading in Video Module, and assigning to Videos
addVideoTracking = function() {
	//Add in the Video Files - These are 3 different codecs due to different browser specifications - we recommend you have all 3 filetypes.
	vidMain.innerHTML= '<source id="video_1_mp4_src_dc" type="video/mp4" src="'+Enabler.getFilename("video.mp4")+'" />'+
                   '<source id="video_1_ogg_src_dc" type="video/ogg" src="'+Enabler.getFilename("video.ogg")+'" />'+
                   '<source id="video_1_webm_sr_dcc" type="video/webm" src="'+Enabler.getFilename("video.webm")+'" />';


    vid.innerHTML= '<source id="video_1_mp4_src_dc" type="video/mp4" src="'+Enabler.getFilename("video1.mp4")+'" />'+
                   '<source id="video_1_ogg_src_dc" type="video/ogg" src="'+Enabler.getFilename("video1.ogg")+'" />'+
                   '<source id="video_1_webm_sr_dcc" type="video/webm" src="'+Enabler.getFilename("video1.webm")+'" />';

	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
		studio.video.Reporter.attach('video_1', vid);
	});

    vidMain.play();
	vidMain.volume = 0.0;
}

onCloseClickHandler = function(e){
        Enabler.counter('Rich Media Manual Closes');
        Enabler.collapse();
        Enabler.stopTimer('panel_1 Expansion');
		//Hide Expand
		expand_content.style.display = "none";
		//Pause Video
		vid.pause();
		vid.currentTime = 0;
}

/*onMouseOffHandler = function(e){
	evt = e || window.event;
    var tg = evt.relatedTarget;
    if (tg == null || tg.id == ''){ //prevents close button on roll over to blink
		//Hide Expand
		expand_content.style.display = "none";
		//Pause Video
		vid.pause();
		vid.currentTime = 0;
		//Collapse Ad
		Enabler.collapse();
		//Stop Timer
		Enabler.stopTimer('panel_1 Expansion');
	}
	content.addEventListener('mouseout', onContentOut, false);
}*/

var currBtn, prevBtn;

videoBtnOutHandler = function(e){

   currBtn = document.getElementById(e.currentTarget.id);
   TweenLite.to(currBtn, 0.1, {y:2});

}

var currIndex = 1;
  currBtn = document.getElementById("video_1");
  videoBtnOverHandler = function(e){
     TweenLite.to(currBtn, 0.1, {y:2});
    currBtn = document.getElementById(e.currentTarget.id);
     TweenLite.to(currBtn, 0.1, {y:-2});
}
videoBtnClickHandler = function(e){
    console.log("CLICK "+e.currentTarget.id);
    currBtn = e.currentTarget.id;
    switch(currBtn){
        case "video_1":
			currIndex = 1;
            console.log("BUTTON 1 clicked");
            changeVid(0);
            changeProduct(0);
        break;
        case "video_2":
			currIndex = 2;
            console.log("BUTTON 2 clicked");
            changeVid(1);
            changeProduct(1);
        break;
        case "video_3":
			currIndex = 3;
            console.log("BUTTON 3 clicked");
             changeVid(2);
             changeProduct(2);
        break;
        case "video_4":
			currIndex = 4;
            console.log("BUTTON 4 clicked");
             changeVid(3);
             changeProduct(3);
        break;
        case "video_5":
			currIndex = 5;
            console.log("BUTTON 5 clicked");
             changeVid(4);
             changeProduct(4);
        break;

    }
}


function changeVid(n){
   // var vid = document.getElementById('video');
  vid.setAttribute("src", videoArr[n][0]);
    /*
    if(Modernizr.video && Modernizr.video.webm) {
        vid.setAttribute("src", v[n][0]);
    } else if(Modernizr.video && Modernizr.video.ogg) {
        vid.setAttribute("src", v[n][1]);
    } else if(Modernizr.video && Modernizr.video.h264) {
        vid.setAttribute("src", v[n][2]);
    }
*/
    vid.load();
	vid.play();
}

function changeProduct(n){
     document.getElementById("product1").style.display = "none";
     document.getElementById("product2").style.display = "none";
     document.getElementById("product3").style.display = "none";
     document.getElementById("product4").style.display = "none";
     document.getElementById("product5").style.display = "none";
    switch(n){
        case 0:
            document.getElementById("product1").style.display = "block";
        break;
        case 1:
            document.getElementById("product2").style.display = "block";
        break;
        case 2:
            document.getElementById("product3").style.display = "block";
        break;
        case 3:
            document.getElementById("product4").style.display = "block";
        break;
        case 4:
            document.getElementById("product5").style.display = "block";
        break;

    }
}

onExpandHandler = function(){
	Enabler.expand();
    showExpandedAssets();
    Enabler.startTimer('panel_1 Expansion');

	//Autoplay
	vid.play();
	vid.volume = 0.0;

}

showExpandedAssets = function(){
	//content.style.display = "none";
	//Show Expand over the top
	expand_content.style.display = "block";
	vidPauseBtn.style.visibility = 'visible';
	vidPlayBtn.style.visibility = 'hidden';
	vidMuteBtn.style.visibility = 'hidden';
	vidUnmuteBtn.style.visibility = 'visible';
}

expandedBgExitHandler = function(s){
	//Call Exits

	if(currIndex == 1){
		Enabler.exit('product1_exit');
	}
	if(currIndex == 2){
		Enabler.exit('product2_exit');
	}

	if(currIndex == 3){
		Enabler.exit('product3_exit');
	}

	if(currIndex == 4){
		Enabler.exit('product4_exit');
	}

	if(currIndex == 5){
		Enabler.exit('product5_exit');
	}


	//Pause Video
	vid.pause();
	vid.currentTime = 0;
	//Setup Buttons
	vidPauseBtn.style.visibility = 'hidden';
	vidPlayBtn.style.visibility = 'visible';
	//onMouseOffHandler(s);

}

pausePlayHandler = function(e) {
	//alert(e);
	if (vid.paused) {
		//If Paused then Play
		vid.play();
		//Show Pause button and hide Play button
		vidPauseBtn.style.visibility = 'visible';
		vidPlayBtn.style.visibility = 'hidden';
		vid.volume == 1.0;
	} else {
		//If not paused then Pause
		vid.pause();
		//Show Play button and hide Pause button
		vidPauseBtn.style.visibility = 'hidden';
		vidPlayBtn.style.visibility = 'visible';
	}
}

muteUnmuteHandler = function(e) {
	if (vid.volume == 0.0) {
	//If Muted then Turn Volume Back to 1.0
		vid.volume = 1.0;
		vidMuteBtn.style.visibility = 'visible';
		vidUnmuteBtn.style.visibility = 'hidden';

	} else {
	//Otherwise Turn Volume Off
		vid.volume = 0.0;
		vidMuteBtn.style.visibility = 'hidden';
		vidUnmuteBtn.style.visibility = 'visible';
	}
}

stopHandler = function(e){
	//set video's first frame
	vid.currentTime = 0;
	//Pause film
	vid.pause();
	//Show required buttons
	vidPauseBtn.style.visibility = 'hidden';
	vidPlayBtn.style.visibility = 'visible';

}

replayHandler = function(e) {
	vid.currentTime = 0;
	//Play film
	vid.play();
	//Turn sound on
	vid.volume = 1.0;
	//Show required buttons
	vidPauseBtn.style.visibility = 'visible';
	vidMuteBtn.style.visibility = 'visible';
}

videoEndHandler = function(e) {
	vid.currentTime = 0;
	vid.pause();

	vidPauseBtn.style.visibility = 'hidden';
	vidPlayBtn.style.visibility = 'visible';

}

videoMainEndHandler = function(e) {
	console.log("IN");
	vidMain.pause();
	TweenLite.delayedCall(.5,vidMainReplay);
	

}

var cnt = 0;

function vidMainReplay(){
	if(cnt<2){
	vidMain.play();
	}
	cnt++;
}

//Function to call when all the javascript above is available
init();

