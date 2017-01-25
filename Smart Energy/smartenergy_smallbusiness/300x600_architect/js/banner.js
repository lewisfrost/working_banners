// Init FT objects
var myFT = new FT,
videoDOM = FT.query("#video"),
tp = FT.query("#top-panel"),
bp = FT.query("#bottom-panel"),
videoDOM = FT.query("#video"),
container = FT.query("#container"),
overlay = FT.query("#overlay"),
intro = FT.query("#intro"),
    
soundControls = FT.query("#sound"),
unmutewBtn = FT.query("#unmute-video"),
mutewBtn = FT.query("#mute-video"),
controls = FT.query("#controls"),
playBtn = FT.query("#play-video"),
pauseBtn = FT.query("#pause-video"),
    
replayBtn = FT.query("#replay"),
endReplayBtn = FT.query("#end-replay"),
    
endframe = FT.query("#endframe");

var isVideoPaused = false;
var isAutoPaused = false;
var hasUserInteracted = false;
var isMuted = true;
var isPanelsClosed = false;

// Insert video
vid = myFT.insertVideo({parent: videoDOM, poster:"images/poster.jpg", video: "video1", width: 300, height: 213, controls: false, autoplay: true});

// Apply clickTags
myFT.applyClickTag(tp, 1);
myFT.applyClickTag(bp, 1);
myFT.applyClickTag(endframe, 1);

tp.addEventListener("click", gotoEndFrame);
bp.addEventListener("click", gotoEndFrame);

function init(){
    muteVideo();
    TweenLite.to(key, 1, {alpha:1, ease:Quad.easeOut}); // show key
    TweenLite.to(key, 1, {alpha:0, delay:2, ease:Quad.easeIn, onComplete:function(){
    
        TweenLite.to(intro, .5, {alpha:0, ease:Quad.easeOut, onComplete:function(){
            intro.style.display = "none";
            reset();
        }});
    
    }}); //hide key
    
}

// events
overlay.addEventListener("click", onVideoOverlayClickHandler);
overlay.addEventListener("mouseover", onVideoOverlayOverHandler);
overlay.addEventListener("mouseout", onVideoOverlayOutHandler);

soundControls.addEventListener("click", onMuteUnmuteClickHandler);
replayBtn.addEventListener("click", onReplayHandler);
endReplayBtn.addEventListener("click", onReplayHandler);

function onVideoOverlayClickHandler(){
    hasUserInteracted = true;
    isVideoPaused?playVideo():pauseVideo();
}

function onVideoOverlayOverHandler(){
    TweenLite.to(controls, .5, {opacity:1, ease:Quad.easeOut});
}

function onVideoOverlayOutHandler(){
    if(!isVideoPaused)TweenLite.to(controls, .5, {opacity:0, ease:Quad.easeOut});
}

function onMuteUnmuteClickHandler(){
    hasUserInteracted = true;
    isMuted?unmuteVideo():muteVideo();
}

///sound callbacks
function unmuteVideo(){
    if(isPanelsClosed){
        unmuteBtn.style.display = "none";
        muteBtn.style.display = "block";
    }else{
        unmutewBtn.style.display = "none";
        mutewBtn.style.display = "block";
    }
    isMuted = false;
    vid.video.volume = 1;
}

function muteVideo () {
    if(isPanelsClosed){
        unmuteBtn.style.display = "block";
        muteBtn.style.display = "none";
    }else{
        unmutewBtn.style.display = "block";
        mutewBtn.style.display = "none";
    }
    
    isMuted = true;
    vid.video.volume = 0;
}

//play/pause video callback
function playVideo(){
    isVideoPaused = false;
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    vid.video.play();
}

function pauseVideo(){
    isVideoPaused = true;
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
    vid.video.pause();
}

var autoPLayTime = 22;
var key2Time = 52;
var totalTime = 60.054;

videoTimeUpdate = function () {
//    console.log('currentTIME: '+vid.video.currentTime);
    
    //autoplay checkpoint
    if (Math.round(vid.video.currentTime) === autoPLayTime && !isAutoPaused && !hasUserInteracted) {
        isAutoPaused = true;
        TweenLite.to(controls, .5, {opacity:1, ease:Quad.easeOut});
        pauseVideo();
    }
    

    vid.on("ended", function() {
        gotoEndFrame();
    });
}

function gotoEndFrame(){
    
    vid.video.pause();
    endframe.style.display = "block";
    endReplayBtn.style.display = 'block';
    endReplayBtn.style.opacity = 0;
    
    TweenLite.to(endframe, 1, {opacity:1, ease:Quad.easeOut});
    TweenLite.to(endReplayBtn, 1, {opacity:1, delay:.5});
    
}

function onReplayHandler(){
    hasUserInteracted = true;
    
    overlay.removeEventListener("click", onReplayHandler);
    overlay.addEventListener("click", onVideoOverlayClickHandler);
    
    vid.video.removeEventListener("timeupdate", videoTimeUpdate, false);
    vid.video.pause(); 
    vid.video.currentTime = 0;
    vid.video.addEventListener("timeupdate", videoTimeUpdate, false);
    
    endReplayBtn.style.display = 'none';
    endframe.style.display = "none";
    endframe.style.opacity = 0;
    
    TweenLite.to(key, 1, {alpha:1, delay:.5, ease:Quad.easeOut}); // show key
    TweenLite.to(key, 1, {alpha:0, delay:2.5, ease:Quad.easeIn}); //hide key
    controls.style.opacity = 0;
    
    playVideo();
    unmuteVideo();
}

function reset(){
    controls.style.opacity = 0;
    soundControls.style.opacity = 1;
    replayBtn.style.display = 'block';
    endReplayBtn.style.display = 'none';
   //autoplay video
    vid.video.play();
    vid.video.addEventListener("timeupdate", videoTimeUpdate, false);
}


// start
window.onload = init;