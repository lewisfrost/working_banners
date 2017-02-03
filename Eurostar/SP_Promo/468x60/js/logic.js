 	var count=0;
	
	function addevents(){
		document.getElementById("bannerCTA").addEventListener("click", trackClick);	
	}

	function trackClick(){
		window.open(clickTag,'_blank');//DCM
        //Enabler.exit('468x60_exit'); // DC Studio
	}

	function frame1Animation(){
		TweenLite.set(".bg",{alpha:1})
		TweenLite.set([".whiteBg_logo",".lid",".tray"],{x:0, alpha:1})
		TweenLite.set(".hand",{y:-20, alpha:1})
		
		TweenLite.to('.whiteBg_logo',2.6,{x:468, delay:1, ease:Cubic.easeOut});
		TweenLite.to('.logo',1,{alpha:1, ease:Quad.easeIn, delay: 1.8});
		TweenLite.to('.copy1',1,{alpha:1, ease:Quad.easeIn, delay: 2.25});
     	TweenLite.to('.food',0,{alpha:1, delay:5.75});

		TweenLite.to('.hand',0.5,{y:0, ease:Quad.easeOut, delay:5});
		TweenLite.to('.lid',0,{alpha:0, delay:5.75});
		TweenLite.to('.lid2',0,{alpha:1, delay:5.75});
		TweenLite.to('.lid2',3,{rotation: 20, scale:0.8, transformOrigin: "100% 100%", x: 20, y: -220, ease: Power2.easeOut, delay:5.75});
		TweenLite.to('.hand',3,{rotation: 20, scale:0.8, transformOrigin: "100% 100%", x: 160, y: -120, ease: Power2.easeOut, delay:5.75});
		TweenLite.to('.copy1',1,{alpha:0, ease:Quad.easeOut, delay: 4.75});
		TweenLite.to('.copy2',1,{alpha:1, ease:Quad.easeIn, delay: 5.75});
		TweenLite.delayedCall(8,frame2Animation)
	}
		
	function frame2Animation(){
		TweenLite.to(['.food','.copy1','.copy2','.tray'],0.5,{alpha:0, delay:0});

		TweenLite.to('.copy3',1,{alpha:1, ease:Quad.easeIn, delay: 4.5});
		TweenLite.to('.copy4',1,{alpha:1, ease:Quad.easeIn, delay: 5});

		TweenLite.to('.track',1,{alpha:1, delay: 1.3});
		TweenLite.to('.train',5,{alpha:1, left: 200, rotationZ:0.03, z:0.03, ease: Power4.easeOut, delay: 1});
		TweenLite.delayedCall(8,frame3Animation)
	}
	  
	function frame3Animation(){
		TweenLite.to(['.copy3','.copy4','.track','.train'],0.5,{alpha:0, delay:0});
		TweenLite.set('.cta_bg',{scale:0.4, alpha:0, delay: 0});

		TweenLite.to('.copy5',1,{alpha:1, delay: .3});
		TweenLite.to('.copy5',1,{alpha:0, delay: 3});

		TweenLite.to('.copy6',1,{alpha:1, delay: 3.5});
		TweenLite.to('.copy7',1,{alpha:1, delay: 4});
		TweenLite.to('.copy8',1,{alpha:1, delay: 4.5});

		/*CTA Anim*/
		TweenLite.to('.tcs',1,{alpha:1, delay: 5});
		TweenLite.to('.cta_copy',1,{alpha:1, delay: 5.3});
		TweenLite.to('.cta_bg',1,{scale:1, alpha:1, delay: 5});
		TweenLite.to('.cta_bg',1,{scale: 1.1, yoyo: true, delay: 7});
		TweenLite.to('.cta_bg',1,{scale: 1, yoyo: true, delay: 7.5});
		TweenLite.to('.cta_bg',1,{scale: 1.1, yoyo: true, delay: 8});
		TweenLite.to('.cta_bg',1,{scale: 1, yoyo: true, delay: 8.5});
		TweenLite.to('.cta_bg',1,{scale: 1.1, yoyo: true, delay: 9});
		TweenLite.to('.cta_bg',1,{scale: 1, yoyo: true, delay: 9.5});
	}
	
// images to preload
var images = [
	'images/bg.jpg',
	'images/whiteBg_logo.png',
	'images/logo.png',
	'images/food.png',
	'images/lid.png',
	'images/lid2.png',
	'images/tray.png',
	'images/copy1.png',
	'images/copy2.png',
	'images/copy3.svg',
	'images/copy4.svg',
	'images/copy5.svg',
	'images/copy6.svg',
	'images/copy7.svg',
	'images/copy8.svg',
	'images/tcs.svg',
	'images/track.png',
	'images/train.png',
	'images/cta_bg.svg',
	'images/cta_copy.svg',
	'images/hand.png'
	
];

function preloadImages(urls, callback) {
	var length = urls.length, loaded = 0;
	for (var count = 0; count < length; count++) {

		var img = new Image();
		img.onload = function() {
			if (++loaded == length && callback) callback();
		}
		img.src = urls[count];
	}
}

function todofunc(){
	//init animation
	console.log('***run todo');
	frame1Animation();
}

addevents(); 
function initBanner(){
	//init preload
	console.log('***init');
	preloadImages(images, todofunc);
    
}
