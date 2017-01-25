var waitTime = 1000; // time in milliseconds (1000ms = 1s)
var idleFlipTime = 1000; // time in milliseconds (1000ms = 1s)
var wtf = false;
var prevFace;

var _FRAMES = 4, // Including empty frames (ie : 1,2,4,5 = 5; 1,2,5,6 = 6)
    secsPerFrame = [
        0, 1500, 500, 500, 5000
    ];

var frameID=1,
        $frameToAnim,
        animTask="anim";

var flips_max=(2500*2+2000)/500-1;
var flips_made=0;
var fr_1_face_index=0;
var fr_2_face_index=0;
var faces=['face-02', 'face-03', 'face-04', 'face-05', 'face-06', 'face-07', 'face-09', 'face-10', 'face-11', 'face-12', 'face-13', 'face-14', 'face-16', 'face-08'];

function getRandomN () {
    return Math.floor(Math.random() * 8) + 1;
}

function triggerIdle () {
    
    var randFace = getRandomN();
    
    if (randFace == prevFace) {
        randFace = getRandomN();
    }
    
    setTimeout(function () {
        prevFace = randFace;
        $('#shell-'+randFace).toggleClass('flip');
    }, idleFlipTime);
    
}





function showFrame (_frameID) {
    frameID = _frameID;
    $frameToAnim = $('#frame-'+frameID);
    
    if (frameID == _FRAMES && $frameToAnim.length > 0) {
        
        //we want to hide the faces, and then show the last frame
        
        wtf = false;
        $('.flip-container').addClass('hide');
        animTask = "anim stay";
        
    } else if ($frameToAnim.length <= 0) {
        if (frameID <= 0 || frameID > _FRAMES) {
            return;
        } else {
            setTimeout(function(){
                frameID = frameID + 1;
                showFrame(frameID);
            }, secsPerFrame[frameID]);
            return;
        }
    } 

    $frameToAnim.toggleClass(animTask);
}

$('document').ready( function () {
    
    var myFT = new FT(),
        container = FT.query("#banner");

    var frame1Text = FT.query("#frame-1"),
        frame2Text = FT.query("#frame-2"),
        frame3Text = FT.query("#frame-3"),
        frame4Text = FT.query("#frame-4");

    myFT.addEventListener("instantads", function(){
        frame1Text.innerHTML = myFT.instantAds.frame1,
        frame2Text.innerHTML = myFT.instantAds.frame2,
        frame3Text.innerHTML = myFT.instantAds.frame3,
        frame4Text.innerHTML = myFT.instantAds.frame4
    });

    myFT.applyClickTag(container, 1);
    
    
    setTimeout(function () {
        showFrame(1);
    }, 750);
    
    /* bindings */
    
    $('.frame').on('webkitTransitionEnd otransitionend msTransitionEnd transitionend', function () {
        var $base = $(this);

        if ( $base.hasClass('anim') ) {
            setTimeout( function () {
                $base.toggleClass('anim');
            }, secsPerFrame[frameID]);
        } else {
            frameID = frameID + 1;
            $frameToAnim = $('#frame-'+frameID);
            showFrame(frameID);
        }
    });
    
    $('.flip-container').on('webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend', function () {
        if (wtf) {
            triggerIdle();
        }
    });
    
});