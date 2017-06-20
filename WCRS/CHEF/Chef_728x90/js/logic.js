function addevents(){
	document.getElementById("bannerCTA").addEventListener("click", handleClickthroughButtonClick);
	document.getElementById("cta").addEventListener("click", handleClickthroughButtonClick);
}

function handleClickthroughButtonClick(){
	window.open(clickTag,'_blank'); 
}

function frame1Animation(){
	TweenLite.set([img1,logo],{opacity:1});
	TweenLite.to(copy1,0.65,{opacity:1, ease:Quad.easeIn, delay:0});
	TweenLite.delayedCall(3,frame2Animation);
}
function frame2Animation(){
	TweenLite.to(copy1,0.65,{opacity:0, ease:Quad.easeOut, delay:0});
	TweenLite.to(copy2,0.65,{opacity:1, ease:Quad.easeIn, delay:0.65});
	TweenLite.delayedCall(3.65,frame3Animation);
}
function frame3Animation(){
	TweenLite.to(copy2,0.65,{opacity:0, ease:Quad.easeOut, delay:0});
	TweenLite.to(gradient,0.65,{opacity:1, ease:Quad.easeIn, delay:0});
	TweenLite.to(end_copy1,0.65,{opacity:1, ease:Quad.easeIn, delay:0.65});
	TweenLite.to(cta,0.65,{opacity:1, ease:Quad.easeIn, delay:1.3});
}

	
// images to preload
var images = [
	'images/img1.jpg',
	'images/copy1.png',
	'images/copy2.png',
	'images/cta.png',
	'images/end_copy1.png',
	'images/gradient.png',
	'images/logo.png'
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
	console.log('***run todo');
	frame1Animation();
	addevents()
}

function initBanner(){
	console.log('***init');
	preloadImages(images, todofunc);
    
}
