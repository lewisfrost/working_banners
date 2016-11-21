$(function(){ 	

startAnim();
	
});


function startAnim() {
	
	var imageContainer = $('#image-container');
	var productImage = $('#image-container img');
	var coloredBar = $('#colored-bar');
	var header = $('#header-3');
	var ctaButton = $('#cta-button');
	var ctaArrow = $('#cta-button #cta-arrow');



	TweenLite.to( imageContainer, 1, { delay: 8, height: 430, ease: Cubic.easeInOut });
	TweenLite.to( coloredBar, 1, { delay: 8, top: 430, ease: Cubic.easeInOut });
	TweenLite.to( header, 1, { delay: 8, top: 480, ease: Cubic.easeInOut });

	TweenLite.to( ctaButton, 1, { delay:4, opacity: 1, onComplete:hideArrow });
}

function hideArrow(){
	var ctaArrow = $('#cta-button #cta-arrow');
	TweenLite.to( ctaArrow, .5, { delay:.6, opacity: 0, onComplete:showArrow } );
}

function showArrow(){
	var ctaArrow = $('#cta-button #cta-arrow');
	TweenLite.to( ctaArrow, .5, { opacity: 1, onComplete:hideArrow } );
}

function onBannerRollOver() {
	var ctaButton = $('#cta-button');
	TweenLite.to( ctaButton, .3, { backgroundColor:"#000000" });
}

function onBannerRollOut() {
	var ctaButton = $('#cta-button');
	TweenLite.to( ctaButton, .3, { backgroundColor:"#971f30" });
}