// Init FT objects
var myFT = new FT,
videoDOM = FT.query("#video"),
leftp = FT.query("#left-panel"),
rightp = FT.query("#right-panel"),
videoDOM = FT.query("#video"),
container = FT.query("#container"),
overlay = FT.query("#overlay"),
    
soundControls = FT.query("#sound"),
unmuteBtn = FT.query("#unmute-video"),
unmutewBtn = FT.query("#unmute-w-video"),
muteBtn = FT.query("#mute-video"),
mutewBtn = FT.query("#mute-w-video"),
controls = FT.query("#controls"),
playBtn = FT.query("#play-video"),
pauseBtn = FT.query("#pause-video"),
    
replayBtn = FT.query("#replay"),
replaywBtn = FT.query("#replay-w"),
    
we = FT.query("#whyestimate"),
wyc = FT.query("#whenyoucan"),
copy1 = FT.query("#copy1"),
copy2 = FT.query("#copy2"),
copy3 = FT.query("#copy3"),
    
endframe = FT.query("#endframe");

var isVideoPaused = false;
var isAutoPaused = false;
var hasUserInteracted = false;
var isMuted = false;
var isPanelsClosed = false;

// Insert video
vid = myFT.insertVideo({parent: videoDOM, poster:"images/poster.jpg", video: "video1", width: 970, height: 250, controls: false, autoplay: true});

// Apply clickTags
myFT.applyClickTag(leftp, 1);
myFT.applyClickTag(rightp, 1);
myFT.applyClickTag(endframe, 1);

leftp.addEventListener("click", gotoEndFrame);
rightp.addEventListener("click", gotoEndFrame);

function init(){
    TweenLite.to(key, 1, {alpha:1, ease:Quad.easeOut}); // show key
    TweenLite.to(key, 1, {alpha:0, delay:2, ease:Quad.easeIn}); //hide key
    muteVideo();
    reset();
//    vid.video.currentTime = 50;
}

// events
overlay.addEventListener("click", onVideoOverlayClickHandler);
overlay.addEventListener("mouseover", onVideoOverlayOverHandler);
overlay.addEventListener("mouseout", onVideoOverlayOutHandler);

soundControls.addEventListener("click", onMuteUnmuteClickHandler);
replaywBtn.addEventListener("click", onReplayHandler);
replayBtn.addEventListener("click", onReplayHandler);

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

//sound callbacks
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

//panel movement callback
var panelSpeed = .5;
function showSidePanels(){
    isPanelsClosed = true;
    
    TweenLite.to(leftp, panelSpeed, {left:0, ease:Quad.easeOut});
    TweenLite.to(rightp, panelSpeed, {left:666, ease:Quad.easeOut});
    TweenLite.to(controls, panelSpeed, {left:51, ease:Quad.easeOut});
    
    muteBtn.style.display = mutewBtn.style.display;
    unmuteBtn.style.display = unmutewBtn.style.display;
    mutewBtn.style.display = "none";
    unmutewBtn.style.display = "none";
    
    replaywBtn.style.display = "none";
    replayBtn.style.display = "block";
}

function hideSidePanels(){
    isPanelsClosed = false;
    
    TweenLite.to(leftp, panelSpeed/2, {left:-409, ease:Quad.easeOut});
    TweenLite.to(rightp, panelSpeed/2, {left:970, ease:Quad.easeOut});
    TweenLite.to(controls, panelSpeed, {left:0, ease:Quad.easeOut});
    
    mutewBtn.style.display = muteBtn.style.display;
    unmutewBtn.style.display = unmuteBtn.style.display;
    muteBtn.style.display = "none";
    unmuteBtn.style.display = "none";
    
    replaywBtn.style.display = "block";
    replayBtn.style.display = "none";
}

//play/pause video callback
function playVideo(){
    isVideoPaused = false;
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    vid.video.play();
    hideSidePanels();
}

function pauseVideo(){
    isVideoPaused = true;
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
    vid.video.pause();
    showSidePanels();
}

var autoPLayTime = 22;
var key2Time = 58;
var totalTime = 68.011;

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

     if (Math.round(vid.video.currentTime) === key2Time){
//        console.log('key2Time');
       TweenLite.to(we, .5, {opacity:1, ease:Quad.easeOut}); 
        TweenLite.to(wyc, .5, {opacity:1, delay:1, ease:Quad.easeOut});
        TweenLite.delayedCall(5, function(){
            we.style.opacity = 0;
            wyc.style.opacity = 0;
        });
    }
}

function gotoEndFrame(){ 
    
    TweenLite.set([replayBtn, replaywBtn], {top:10}); 
    
    //vid.stop(); 
    endframe.style.display = "block"; 
    
    replaywBtn.style.display = "none"; 
    replayBtn.style.display = "block"; 
    
    TweenLite.to(endframe, 1, {opacity:1, ease:Quad.easeOut}); 
    TweenLite.to(replayBtn, 1, {opacity:1, rotation:360, delay:.5, ease:Quad.easeOut, transformOrigin:"50% 50%"}); 
    
} 

function onReplayHandler(){
    hasUserInteracted = true;
    
    TweenLite.set([replayBtn, replaywBtn], {top:30});
    
    overlay.removeEventListener("click", onReplayHandler);
    overlay.addEventListener("click", onVideoOverlayClickHandler);
    
    vid.video.removeEventListener("timeupdate", videoTimeUpdate, false);
    vid.video.pause(); 
    vid.video.currentTime = 0;
    vid.video.addEventListener("timeupdate", videoTimeUpdate, false);
    
    endframe.style.display = "none";
    endframe.style.opacity = 0;
    
    TweenLite.to(key, 1, {alpha:1, delay:.5, ease:Quad.easeOut}); // show key
    TweenLite.to(key, 1, {alpha:0, delay:2.5, ease:Quad.easeIn}); //hide key
    controls.style.opacity = 0;
    
    hideSidePanels();
    playVideo();
    unmuteVideo();
}

function reset(){
    controls.style.opacity = 0;
    soundControls.style.opacity = 1;
   //autoplay video
    vid.video.play();
    vid.video.addEventListener("timeupdate", videoTimeUpdate, false);
}

// start
window.onload = init;