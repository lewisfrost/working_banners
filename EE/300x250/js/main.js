var canvas = document.getElementById("demoCanvas");

// variables fpor background dots/text
var canvas, stage, logo, ctaButton;

//font weight of particle text
var fontWeight = 26;
//radius of each particle - increase for larger formed dots/decrease for smaller dots
var circleRadius = 1.2;

var documentWidth = 300;
var documentHeigh = 250;

var amountOfParticles = 200;

var speedOfDelay = 1000;
var speedOfAnimation = 0.25;

var startScaleOfDots = 1;
var endScaleOfDots = 2;

var leftBoundary = -100;
var topBoundary = -100;

var endAlpha = 0.5;

var timeTillSecondFrame = 2;

var grid = 35;// space between dots
var xGrid = grid;
var yGrid = grid;

var everyOtherDot = 6;// which dots move
var freq = 125;// frequency of dots
var dotDelay = 0.5;// delay between dots
var dotDur = 0.75// dot duration
var dotScale = 1.8;// dot scale
var dotAlpha = 0.6;
var runAnimation = true;

var dNum = 0;
var totalDots = Math.ceil(documentWidth / grid) * Math.ceil(documentHeigh / grid);

var movingDots = [];

var dotArray= [];
var dotBgArray = [];
var dotBgArrayFake = [];

var MoveFunctions = ["MoveDotLeft","MoveDotDown","MoveDotRight","MoveDotUp"];
var mNum = 0;

//creating the sentences for the text - if you need to add more lines do it in sequence, each word is divided up so Transform

//usinfg create js to create the particle holder for our text
var particleHolder = new createjs.Container();
var loopCount = 0;
var maxLoops = 3;
var background;

var SITE = {

    init : function (){

        document.getElementById('container').addEventListener('click', SITE.bgExitHandler, false);

        stage = new createjs.Stage(canvas);
        //background image for canvas
        var bg = new Image();
        bg.src = "images/fakebg.png";
        bg.onload = SITE.ready;

        SITE.initDots();

        for(i = 0; i <= amountOfParticles; i++){
            //console.log(i);

           var randomLeft = Math.floor(Math.random() * documentWidth + 50) + leftBoundary 
           var randomTop =  Math.floor(Math.random() * documentHeigh + 50) + topBoundary

           var randomImage =  Math.floor(Math.random() * 3) + 0
           //alert(randomImage);

        }

    },

    ready : function (e) {

        var bg_bmp = new createjs.Bitmap(e.target);
            bg_bmp.scaleX = bg_bmp.scaleY = 1;
            stage.addChild(bg_bmp);

            createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
            createjs.Ticker.setFPS(30);
            createjs.Ticker.addEventListener("tick", SITE.handleTick);
            
            if (window.devicePixelRatio) {
                // This interpolates the canvas resolution to make the text less fuzzy.
                // Code is originally intended to allow retina support (devicePixelRatio == 2), but if the devicePixelRatio is multiplied by 1.5 regardless, then it has the effect of improving the anti-aliasing of canvas.
                var dpiMultiplier = 1.5;

                console.log("hidpi "+window.devicePixelRatio);
                // grab the width and height from canvas
                //alert(canvas);
                var height = canvas.getAttribute('height');
                var width = canvas.getAttribute('width');
                // reset the canvas width and height with window.devicePixelRatio applied
                canvas.setAttribute('width', Math.round(width * window.devicePixelRatio*dpiMultiplier));
                canvas.setAttribute('height', Math.round( height * window.devicePixelRatio*dpiMultiplier));
                // force the canvas back to the original size using css
                canvas.style.width = width+"px";
                canvas.style.height = height+"px";
                // set CreateJS to render scaled
                stage.scaleX = stage.scaleY = window.devicePixelRatio*dpiMultiplier;
            }

            _sW = canvas.width / stage.scaleX;
            _sH = canvas.height / stage.scaleY;

            TweenMax.delayedCall(0,SITE.doConfig)

            TweenMax.delayedCall(0,SITE.doBanner);

    },

    handleTick : function (event) {
        stage.update();
    },

    //init the banner
    doConfig : function() {
        /*background = new Background(300, 600);
        stage.addChild(background);
        background.generate();
        //background.animate();
        SITE.setPosition(background, -4, -12);*/
        stage.addChild(particleHolder);
        particleHolder.scaleX = particleHolder.scaleY = 0.75;
        SITE.setPosition(particleHolder, 90, 120);

        var textArray = [SITE.hook0Particles, SITE.hook1Particles, SITE.hook2Particles, SITE.hook3Particles, SITE.hook4Particles,SITE.hook5Particles,SITE.hook6Particles,SITE.hook7Particles, SITE.text1Particles, SITE.text2Particles, SITE.text3Particles, SITE.text4Particles, SITE.text5Particles, SITE.text6Particles, SITE.text7Particles, SITE.text8Particles, SITE.text9Particles, SITE.text10Particles, SITE.text11Particles, SITE.text12Particles, SITE.text13Particles];
        for (var i = 0; i < textArray.length; i++) {
            stage.addChild(textArray[i]);
            textArray[i].generate();
        };

        //draws EE logo
        logo = new lib.Logo();
        logo.setTransform(267,48,0.247,0.247,0,0,0,80.8,141.8);

        //draws CTA button via - No
        ctaButton = new lib.CtaButton();
        SITE.setPosition(ctaButton, 153, 175);
        ctaButton.scaleX = ctaButton.scaleY = 0.75;
        ctaButton.alpha = 0;
        stage.addChild(ctaButton);

        var cta;

        cta = document.getElementById("cta");
    },

    createParticleText : function(particles, fontWeight, textArray, xPos, yPos, textColour, dotRadius){
        console.log("creating particleText");
        var particleText = new ParticleText(new EENobbleeRegular(), fontWeight, textArray, "left");
        this[particles] = new ControlParticles(particleText.points,textColour, dotRadius);
        SITE.setPosition(this[particles], xPos, yPos);
    },

    setPosition : function(obj, x, y){
        obj.x = x;
        obj.y = y;
    },

    initDots : function (){
        for (var i = 0; i<totalDots; i++)
            {

                $('#dotContainer').append("<div class=dot"+i+"></div>");

                if (xGrid > $("#dotContainer").width())
                {
                    xGrid = grid;
                    yGrid +=  grid;
                }

                console.log("yGrid"+yGrid);

                $('.dot'+i).css({
                    "width":"6px",
                    "height":"6px",
                    "backgroundImage": 'url("images/dot.png")',
                    "position":"absolute",
                    "opacity":"0.3",
                    "top":yGrid+"px",
                    "left":xGrid+"px",
                    "zIndex":0
                });

                xGrid +=  grid;

                if (i == dNum)
                {
                    movingDots.push($('.dot'+i));
                    dNum +=  everyOtherDot;
                }

                dotArray.push($('.dot'+i));

            if(i == totalDots - 1 ){

                    xGrid = grid;
                    yGrid = grid;

                } 
                
            }

            SITE.MoveDots();
            setTimeout(SITE.StopDots,15000);

    },

    restOfTween: function(dot, del) {
        TweenLite.to(dot,dotDur, {delay:del,rotation:String(360),ease:Sine.easeInOut});
        TweenLite.to(dot,dotDur/2, {delay:del,scaleX:dotScale,scaleY:dotScale,opacity:dotAlpha,ease:Sine.easeIn});
        TweenLite.to(dot,dotDur/2, {delay:del+dotDur/2,scaleX:1,scaleY:1,alpha:0.2,ease:Sine.easeOut});
    },

    MoveDotLeft: function(dot, del)
    {
        if(runAnimation == true){
            TweenLite.to(dot,dotDur, {delay:del,x:String(grid),ease:Sine.easeInOut,onComplete:SITE.MoveDotRight,onCompleteParams:[dot,dotDelay]});
            SITE.restOfTween(dot, del);
        }
    },
    MoveDotDown: function(dot, del)
    {   
        if(runAnimation == true){
            TweenLite.to(dot,dotDur, {delay:del,y:String(grid),ease:Sine.easeInOut,onComplete:SITE.MoveDotUp,onCompleteParams:[dot,dotDelay]});
            SITE.restOfTween(dot, del);
        }
    },

    MoveDotRight: function(dot, del)
    {
        if(runAnimation == true){
            TweenLite.to(dot,dotDur, {delay:del,x:String(-grid),ease:Sine.easeInOut,onComplete:SITE.MoveDotLeft,onCompleteParams:[dot,dotDelay]});
            SITE.restOfTween(dot, del);
        }
    },
     MoveDotUp: function(dot, del)
    {
        if(runAnimation == true){
            TweenLite.to(dot,dotDur, {delay:del,y:String(-grid),ease:Sine.easeInOut,onComplete:SITE.MoveDotDown,onCompleteParams:[dot,dotDelay]});
            SITE.restOfTween(dot, del);
        }
    },

    StopDots: function(){

        for (var a in dotArray)
        {
            runAnimation = false;
        }
    },

    MoveDots: function(){

        for (var d in movingDots)
        {
            setTimeout(this[MoveFunctions[mNum]],Number(d)*freq, movingDots[d], 0);
            mNum++;
            if (mNum == MoveFunctions.length)
            {
                mNum = 0;
            }
        }
    },

    //animating the banner
    doBanner : function() {

        //declare a few vars like flash
        var spriteContainer;
        var hook_txt;
        var dotholder
        var nobrainer;
        
        // vars for the text masks
        var BGmask1;
        BGmask1 = document.getElementById("BGmask1");

        var BGmask2;
        BGmask2 = document.getElementById("BGmask2");

        var BGmask3;
        BGmask3 = document.getElementById("BGmask3");

        var BGmask4;
        BGmask4 = document.getElementById("BGmask4");

        //vars for the robot
        var simo1;
        simo1 = document.getElementById("simo1");

        var simo2;
        simo2 = document.getElementById("simo2");

        var simo3;
        simo3 = document.getElementById("simo3");

        var simo4;
        simo4 = document.getElementById("simo4");

        //var for moving BG

        var moveBG;
        moveBG = document.getElementById("background");

        //dot BG
        var dotsbg; 
        dotsbg = document.getElementById("dotholder");

        var endFrameCopy; 
        endFrameCopy = document.getElementById("endFrameCopy");

        var eeLogo; 
        eeLogo = document.getElementById("eeLogo");


        var speedTestLogo;
        speedTestLogo = document.getElementById("speedTestLogo");

        //var container for the sprite sheet - 
        spriteContainer = document.getElementById("spriteContainer");
        hook_txt = document.getElementById("hook_txt");
        hook_txt2 = document.getElementById("hook_txt2");
        dotholder = document.getElementById("dotholder");
        nobrainer = document.getElementById("nobrainer");
 
        //hides spritesheet function
        function removeContainer() {
            spriteContainer.style.visibility = "hidden";
        }

        //hide the spritesheet
        TweenMax.delayedCall(3.3, removeContainer);


        //play next frame of animation
        TweenMax.delayedCall(0, whichFrame,[0]);
        TweenMax.to($('#container'),0,{alpha:1});

        function whichFrame(whichStep) {

            switch(whichStep){

                case 0:
                    TweenMax.to(simo2, 0, {scale:0.6, x:600, y:-50});
                    TweenMax.to(simo2, 0.75, {scale:0.6, x:-150, y:-50});
                    TweenMax.to($('#container'),0,{alpha:1});
                    
                    TweenMax.to($('#hookMask'),0,{ease: Power2.easeInOut,alpha:0,delay:2.5});
                    TweenMax.to($('#hookMask'),0.25,{alpha:1,delay:0.25});

                    TweenMax.to($('.bckG1'),0,{alpha:0,delay:2.5});
                    TweenMax.to($('.bckG2'),0,{alpha:0,delay:2.5});

                    TweenMax.delayedCall(0, SITE.hook0Particles.form, [7,0.5], SITE.hook0Particles);
                    TweenMax.delayedCall(0, SITE.hook1Particles.form, [7,0.5], SITE.hook1Particles);
                    TweenMax.delayedCall(0, SITE.hook2Particles.form, [7,0.5], SITE.hook2Particles);
                    TweenMax.delayedCall(0, SITE.hook3Particles.form, [7,0.5], SITE.hook3Particles);
                    TweenMax.delayedCall(0, SITE.hook4Particles.form, [7,0.5], SITE.hook4Particles);
                    TweenMax.delayedCall(0.75, SITE.hook5Particles.form, [7,0.5], SITE.hook5Particles);
                    TweenMax.delayedCall(0.75, SITE.hook6Particles.form, [7,0.5], SITE.hook6Particles);
                    TweenMax.delayedCall(0.75, SITE.hook7Particles.form, [7,0.5], SITE.hook7Particles);

                    TweenMax.to(SITE.hook0Particles,0, {ease: Power2.easeInOut,alpha:0,delay:2.5});
                    TweenMax.to(SITE.hook1Particles,0, {ease: Power2.easeInOut,alpha:0,delay:2.5});
                    TweenMax.to(SITE.hook2Particles,0, {ease: Power2.easeInOut,alpha:0,delay:2.5});
                    TweenMax.to(SITE.hook3Particles,0, {ease: Power2.easeInOut,alpha:0,delay:2.5});
                    TweenMax.to(SITE.hook4Particles,0, {ease: Power2.easeInOut,alpha:0,delay:2.5});
                    TweenMax.to(SITE.hook5Particles,0, {ease: Power2.easeInOut,alpha:0,delay:2.5});
                    TweenMax.to(SITE.hook6Particles,0, {ease: Power2.easeInOut,alpha:0,delay:2.5});
                    TweenMax.to(SITE.hook7Particles,0, {ease: Power2.easeInOut,alpha:0,delay:2.5});

                    //play next frame of animation
                    TweenMax.delayedCall(2.5, whichFrame,[1]);

                break;
                case 1:
                    console.log('frame3')

                    TweenMax.delayedCall(1, function(){
                        BGmask1.style.visibility ="visible";
                    });
                    TweenMax.to(speedTestLogo, 0.5, {alpha:1, delay:1.2});
                    TweenMax.to("#dotContainer", 0, {alpha:0});
                    TweenMax.to("#content", 0.75, {ease: Power2.easeIn, x:-315,onComplete:function(){
                        TweenMax.to("#dotContainer", 0.25, {alpha:1});
                    }});
                    TweenMax.to(moveBG,0.75, {ease: Power2.easeIn, x:-300});

                    TweenMax.delayedCall(0.75, SITE.text1Particles.form, [15,0.5], SITE.text1Particles);
                    TweenMax.delayedCall(1.75, SITE.text2Particles.form, [15,0.5], SITE.text2Particles);
                    TweenMax.delayedCall(1.75, SITE.text3Particles.form, [15,0.5], SITE.text3Particles);
                    //TweenMax.to(speedTestLogo, 0.5, {alpha:1, delay:1.2});
                    TweenMax.to(simo2, 0.75, {ease: Power2.easeOut,scale:1.4, x:-111, y:35, delay:0.5});
                    //TweenMax.to(speedTestLogo, 0.5, {alpha:1, delay:1.2});
                    TweenMax.delayedCall(3.5, whichFrame,[2]);
                break;
                case 2:
                    console.log('frame 4');

                    TweenMax.to(speedTestLogo, 0.5, {ease: Power2.easeIn, alpha:0});
                    TweenMax.to(simo2, 1, {ease: Power2.easeInOut, y:-171});
                    TweenMax.to(speedTestLogo, 0.5, {ease: Power2.easeIn, alpha:0});
                    TweenMax.to(SITE.text1Particles,0.75, {ease: Power2.easeIn, y:-300});
                    TweenMax.to(SITE.text2Particles,0.75, {ease: Power2.easeIn, y:-252});
                    TweenMax.to(SITE.text3Particles,0.75, {ease: Power2.easeIn, y:-240});

                    TweenMax.to('#frame3_txt',0.5,{alpha:1,delay:1.25})
                    TweenMax.to(BGmask1,0.25, {alpha:0});

                    TweenMax.delayedCall(1.1, function(){
                        BGmask2.style.visibility ="visible";
                    });
                    TweenMax.to("#dotContainer", 0, {alpha:0});
                    TweenMax.to("#content", 1, {ease: Power2.easeInOut, y:-280,onComplete:function(){
                        TweenMax.to("#dotContainer", 0.25, {alpha:1});
                    }});
                    TweenMax.to(moveBG,0.75, {ease: Power2.easeIn, y:-250});

                    TweenMax.delayedCall(0.75, SITE.text4Particles.form, [15,0.5], SITE.text4Particles);
                    TweenMax.delayedCall(1.75, SITE.text5Particles.form, [15,0.5], SITE.text5Particles);
                    TweenMax.delayedCall(1.75, SITE.text6Particles.form, [15,0.5], SITE.text6Particles);
                    TweenMax.delayedCall(1.75, SITE.text7Particles.form, [15,0.5], SITE.text7Particles);
 
                    TweenMax.delayedCall(3.5, whichFrame,[3]);
                break;
                case 3:
                    console.log('frame5');
                    TweenMax.to(simo2, 1.25, {ease: Power2.easeInOut, x:-352});
                    
                    TweenMax.to(SITE.text4Particles,0.75, {ease: Power2.easeInOut,x:-300});
                    TweenMax.to(SITE.text5Particles,0.75, {ease: Power2.easeInOut,x:-240});
                    TweenMax.to(SITE.text6Particles,0.75, {ease: Power2.easeInOut,x:-200});
                    TweenMax.to(SITE.text7Particles,0.75, {ease: Power2.easeInOut,x:-300});
                    TweenMax.to('#frame3_txt',0.75,{ease: Power2.easeInOut,x:-300})

                    TweenMax.delayedCall(1.1, function(){
                        BGmask3.style.visibility = "visible";
                    });
                    TweenMax.to("#dotContainer", 0, {alpha:0});
                    TweenMax.to("#content", 0.75, {ease: Power2.easeIn, x:-595,onComplete:function(){
                        TweenMax.to("#dotContainer", 0.25, {alpha:1});
                    }});
                    TweenMax.to(moveBG,0.75, {ease: Power2.easeIn, x:-600});
                    TweenMax.to(BGmask2,0.25, {alpha:0});

                    TweenMax.delayedCall(0.75, SITE.text8Particles.form, [15,0.5], SITE.text8Particles);
                    TweenMax.delayedCall(1.75, SITE.text9Particles.form, [15,0.5], SITE.text9Particles);
                    TweenMax.delayedCall(1.75, SITE.text10Particles.form, [15,0.5], SITE.text10Particles);

                    TweenMax.to(SITE.text8Particles,0.75, {ease: Power2.easeInOut,y:-250,delay:3});
                    TweenMax.to(SITE.text9Particles,0.75, {ease: Power2.easeInOut,y:-190,delay:3});
                    TweenMax.to(SITE.text10Particles,0.75, {ease: Power2.easeInOut,y:-205,delay:3});

                    TweenMax.delayedCall(3, whichFrame,[4]);
                break;
                case 4:
                    TweenMax.to(eeLogo, 0.5, {alpha:1, delay:1});
                    TweenMax.to('#sLogo', 0.5, {alpha:1, delay:0});
                    TweenMax.to(simo2, 0.75, {ease: Power2.easeInOut, scale:0.80000001,y:-70,x:-310});
                    console.log('frame6')
                    TweenMax.to(BGmask3,0.25, {alpha:0});
                    TweenMax.delayedCall(.9, function(){
                        BGmask4.style.visibility ="visible";
                    });
                    // the 2GB data and small text pngs here
                    TweenMax.delayedCall(0, SITE.text11Particles.form, [15,0.5], SITE.text11Particles);
                    TweenMax.delayedCall(0.75, SITE.text12Particles.form, [15,0.5], SITE.text12Particles);
                    TweenMax.delayedCall(0.75, SITE.text13Particles.form, [15,0.5], SITE.text13Particles);

                    TweenMax.to(endFrameCopy, 0.5, {alpha:1, delay:1.2});

                    TweenMax.to(cta, 1, {alpha:1, delay:1.2});
                break;

            }

        }

        },

        enablerInitHandler : function(){
            document.getElementById('container').addEventListener('click', SITE.bgExitHandler, false);
        },

        bgExitHandler : function(e) {
            Enabler.exit('Background Exit');
        }

    }
fontWeight = 21;
//becomes ["TRANSFORM","IT WITH AN", "EE SIMO"] numbers are top/left (x, y) then hex for colour then apply our circleradius
SITE.createParticleText("hook0Particles", fontWeight, ["GIVE THE"], 20, 50, "#ffffff", circleRadius);
SITE.createParticleText("hook1Particles", fontWeight, ["SAMSUNG"], 20, 75, "#ffffff", circleRadius);
SITE.createParticleText("hook2Particles", fontWeight, ["GALAXY S7 THE"], 20, 100, "#ffffff", circleRadius);
SITE.createParticleText("hook3Particles", fontWeight, ["ULTIMATE"], 20, 125, "#ffffff", circleRadius);
SITE.createParticleText("hook4Particles", fontWeight, ["TURBO BOOST"], 20, 150, "#ffffff", circleRadius);
SITE.createParticleText("hook5Particles", fontWeight, [""], 56, 106, "#fff100", circleRadius);
SITE.createParticleText("hook6Particles", fontWeight, ["SAMSUNG"], 20, 75, "#fff100", circleRadius);
SITE.createParticleText("hook7Particles", fontWeight, ["GALAXY S7"], 20, 100, "#fff100", circleRadius);

fontWeight = 21;

SITE.createParticleText("text1Particles", fontWeight, ["WITH THE 4G","NETWORK","THAT'S 50%","FASTER","THAN O2,","VODAFONE","AND THREE"], 20, 50, "#ffffff", circleRadius);
SITE.createParticleText("text2Particles", fontWeight, ["50%"], 97, 92, "#fff100", circleRadius);
SITE.createParticleText("text3Particles", fontWeight, ["FASTER"], 20, 113, "#fff100", circleRadius);

SITE.createParticleText("text4Particles", fontWeight, ["AND GET 4GB","FOR THE PRICE","OF 2GB JUST","£45.99"], 20, 50, "#ffffff", circleRadius);
SITE.createParticleText("text5Particles", fontWeight, ["2GB"], 55, 92, "#fff100", circleRadius);
SITE.createParticleText("text6Particles", fontWeight, ["4GB"], 115, 50, "#fff100", circleRadius);

SITE.createParticleText("text7Particles", fontWeight, [""],20, 113, "#fff100", circleRadius);
SITE.createParticleText("text8Particles", fontWeight, ["CHOP CHOP","OFFER ENDS","12TH MAY"],135,50, "#ffffff", circleRadius);
SITE.createParticleText("text9Particles", fontWeight, [""], 181, 82, "#fff100", circleRadius);
SITE.createParticleText("text10Particles", fontWeight, ["12TH MAY"], 135, 92, "#fff100", circleRadius);

fontWeight = 18.5;
SITE.createParticleText("text11Particles", fontWeight, ["THE","SAMSUNG","GALAXY S7","WITH","DOUBLE DATA"], 138, 50, "#ffffff", circleRadius);
SITE.createParticleText("text12Particles", fontWeight, ["DOUBLE DATA"], 138, 124, "#fff100", circleRadius);
SITE.createParticleText("text13Particles", fontWeight, [""], 198, 113, "#fff100", circleRadius);

$( document ).ready(function() {
    SITE.init();
});
