// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var expandConten;
var bgExit;
var expandBtn;
var closeBtn;
var canClick = true;
var firstTime = true;
var firstVideoPlay = true;
var stopAnimation = false;
var animationSteps;
var atEnd = false;

var v = new Array();

var secondShardArray = [];
var shardNumber = 25;

//incase we got 3 videos

var SITE = {

	init : function (){

		$( "#expand_btn_dc" ).bind('touchstart click', function() {
			Enabler.exit('HTML5_Background_Clickthrough');
		});

		//Bring in listeners i.e. if a user clicks or rollsover

		TweenLite.to($( ".cCta" ), 0, {scaleX:0,alpha:1});
		TweenLite.to($( ".eCta" ), 0, {scaleX:0});
		TweenLite.to($( ".copy0" ), 0, {scale:4});
		TweenLite.to($( ".copy1" ), 0, {scale:4});
		TweenLite.to($( ".copy2" ), 0, {scale:4});
		TweenLite.to($( ".copy3" ), 0, {scale:4});
		TweenLite.to($( ".copy4" ), 0, {scale:4});		

		setTimeout(function(){
			SITE.animateCollapsed(0);
		},1000)


		clearTimeout(animationSteps);

		$( "body" ).bind('mouseenter', function (){

			if(atEnd == true){
				TweenLite.to($( ".cCtaT" ), 0, {alpha:0});
				TweenLite.to($( ".cCta" ), 0, {scaleX:0});

				TweenLite.to($( ".cCtaT" ), 0.5, {alpha:1,delay:0.7});
				TweenLite.to($( ".cCta" ), 0.5, {scaleX:1,delay:0.2});
			}
		});


	},

	animateCollapsed : function (whichStep) {

		switch (whichStep){

			case 0 :
				TweenLite.to($( ".copy0" ), 0.25, {scale:1,alpha:1});
				TweenLite.to($( ".copy1" ), 0.25, {scale:1,alpha:1,delay:0.3});
				TweenLite.to($( ".copy2" ), 0.25, {scale:1,alpha:1,delay:0.6});
				TweenLite.to($( ".copy3" ), 0.25, {scale:1,alpha:1,delay:0.9});
				TweenLite.to($( ".copy4" ), 0.25, {scale:1,alpha:1,delay:1.2});
				TweenLite.delayedCall(4, function(){ SITE.animateCollapsed(1);});
			break;
			case 1 :
				//glass animation
				TweenLite.to($( ".copy0" ), 0.25, {alpha:0});
				TweenLite.to($( ".copy1" ), 0.25, {alpha:0});
				TweenLite.to($( ".copy2" ), 0.25, {alpha:0});
				TweenLite.to($( ".copy3" ), 0.25, {alpha:0});
				TweenLite.to($( ".copy4" ), 0.25, {alpha:0});

				TweenLite.to($( ".mainBg0" ), 0.25, {alpha:0});
				TweenLite.to($( ".mainBg1" ), 0.25, {alpha:1});

				TweenLite.to($( ".shard0" ), 0, {alpha:1});
				TweenLite.to($( ".shard1" ), 0, {alpha:1});
				TweenLite.to($( ".shard2" ), 0, {alpha:1});
				TweenLite.to($( ".shard3" ), 0, {alpha:1});

				TweenLite.to($( ".shard0" ), 0.5, {rotation:-90,delay:1, transformOrigin:"top right",delay:1.3});
				TweenLite.to($( ".shard1" ), 0.5, {rotation:90,delay:1, transformOrigin:"top left",delay:1.1});
				TweenLite.to($( ".shard2" ), 0.5, {rotation:90,delay:1, transformOrigin:"top left",delay:0.9});
				TweenLite.to($( ".shard3" ), 0.5, {rotation:90,delay:1, transformOrigin:"bottom right",delay:0.7});
				
				TweenLite.to($( ".mainBg1" ), 2.5, {left:0,ease:Linear.easeNone,delay:1});
				TweenLite.to($( ".copy5" ), 1, {alpha:1, ease:Sine.easeIn,delay:2.5});
				TweenLite.to($( ".copy6" ), 1, {alpha:1, ease:Sine.easeIn,delay:2});
				TweenLite.to($( ".mainLogo" ), 1, {opacity:1, ease:Sine.easeIn,delay:4});

				TweenLite.delayedCall(5, function(){ SITE.animateCollapsed(2);});
			break;
			case 2 :
				//glass animation

				for(i=0;i<=4;i++){
					$('.shard'+i).css({'zIndex':'4'})
				}

				TweenLite.to($( ".shard0" ), 0.5, {rotation:0,delay:1, transformOrigin:"top right",delay:1.3});
				TweenLite.to($( ".shard1" ), 0.5, {rotation:0,delay:1, transformOrigin:"top left",delay:1.1});
				TweenLite.to($( ".shard2" ), 0.5, {rotation:0,delay:1, transformOrigin:"top left",delay:0.9});
				TweenLite.to($( ".shard3" ), 0.5, {rotation:0,delay:1, transformOrigin:"bottom right",delay:0.7});
				$('.mainBg0').css({'zIndex':'4'})
			
				//TweenLite.to($( ".mainBg0" ), 0.25, {alpha:1});
				TweenLite.to($('.cPegi'), 0.5, {alpha:1,delay:2});
				TweenLite.to($('.eLogo'), 0.5, {alpha:1,delay:2});
				TweenLite.to($( ".cXbox" ), 0.5, {alpha:1,delay:2});
				TweenLite.to($( ".cCtaT" ), 0.5, {alpha:1,delay:2.5});
				TweenLite.to($( ".cCta" ), 0.5, {scaleX:1,delay:2,onComplete:function(){
					atEnd = true;
				}});

				//setTimeout(function(){SITE.animateCollapsed(3)},3000);
			break;
			case 3 :

			break;
		}

	}

}
SITE.init();