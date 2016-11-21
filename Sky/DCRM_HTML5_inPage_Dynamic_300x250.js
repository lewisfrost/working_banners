// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var bgExit;
var legalsExit;
var text1;
var text1Holder;

var clock1Holder;
var clock2Holder;
var copy1Holder;
var copy2Holder;
var copy3Holder;

var legalsHolder;
var logoHolder;
var ctaHolder;
var imgsArray = [];
var queue;
var stage;
var canvas;
var loader;

var legalOutChecker = true;
var imgsLoadedChecker = false;

container = document.getElementById('container_dc');
content = document.getElementById('content_dc');
bgExit = document.getElementById('background_exit_dc');
legalsExit = document.getElementById('legals_exit_dc');
text1 = document.getElementById('text1');

//Function to run with any animations starting on load, or bringing in images etc
// BannerInit function instead of politeInit //
BannerInit = function () {

	//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	bgExit = document.getElementById('background_exit_dc');
	legalsExit = document.getElementById('legals_exit_dc');
	text1 = document.getElementById('text1');;
	//Bring in listeners i.e. if a user clicks or rollsover
	addListeners();
	//Show Ad
	container.style.display = "block";

	//Call Dynamic
	getDynamic();
}

//Add Event Listeners
addListeners = function () {
	bgExit.addEventListener('click', bgExitHandler, false);
	legalsExit.addEventListener('click', legalsExitHandler, false);
}

bgExitHandler = function (e) {
	//Call Exits
	Enabler.exit('HTML5_Background_Clickthrough');
}

legalsExitHandler = function (e) {
	//Call Exits
	Enabler.exit('HTML5_Legals_Clickthrough');
}
function createClock(){
	    var myCustomTime = dynamicContent.Profile[0].Clock_Time;
    $('#content_dc').append('<div class="sky-countdown small" data-parent-id="place" data-end="'+myCustomTime+'" id="sky-countdown-03"></div>');
    //console.log("working: "+ div);
         window.SKY.CountdownTimer();         
}

getDynamic = function () {
	 Enabler.setProfileId(1061350);
    var devDynamicContent = {};

    devDynamicContent.Profile= [{}];
    devDynamicContent.Profile[0]._id = 0;
    devDynamicContent.Profile[0].Clock_Time = "2015\/12\/10 20:18:30";
    devDynamicContent.Profile[0].Legal_Text = {};
    devDynamicContent.Profile[0].Legal_Text.Url = "http://s0.2mdn.net/dynamic/1/1068693/1446036375205_big_legals.jpg";
    devDynamicContent.Profile[0].Clock_Animation = {};
    devDynamicContent.Profile[0].Clock_Animation.Url = "http://s0.2mdn.net/dynamic/1/1068693/1446036692609_Sprite_sheet_clock.png";
    devDynamicContent.Profile[0].copy1 = {};
    devDynamicContent.Profile[0].copy1.Url = "http://s0.2mdn.net/dynamic/1/1068693/1446037007153_copy1.png";
    devDynamicContent.Profile[0].copy2 = {};
    devDynamicContent.Profile[0].copy2.Url = "http://s0.2mdn.net/dynamic/1/1068693/1446037018695_copy2.png";
    devDynamicContent.Profile[0].copy3 = {};
    devDynamicContent.Profile[0].copy3.Url = "http://s0.2mdn.net/dynamic/1/1068693/1446037025945_copy3.png";
    devDynamicContent.Profile[0].cta = {};
    devDynamicContent.Profile[0].cta.Url = "http://s0.2mdn.net/dynamic/1/1068693/1446037033757_cta.png";
    devDynamicContent.Profile[0].legal_cta = {};
    devDynamicContent.Profile[0].legal_cta.Url = "http://s0.2mdn.net/dynamic/1/1068693/1446037066195_legals.jpg";
    devDynamicContent.Profile[0].logo = {};
    devDynamicContent.Profile[0].logo.Url = "http://s0.2mdn.net/dynamic/1/1068693/1446037075413_logo.png";
    Enabler.setDevDynamicContent(devDynamicContent);


	// set the dynamic
	setDynamic();
	
	createClock();
}

var animation1;
var animation2;
var animation3;

setDynamic = function () {

	canvas = document.getElementById("mainCanvas");
	stage = new createjs.Stage(canvas);

	loader = new createjs.Bitmap("imgs/preloader.gif");

	document.getElementById('legalsBigHolder').setAttribute('src', dynamicContent.Profile[0].Legal_Text.Url);
	
	imgsArray = [
		{
			id: "sheenHolder",
			src: "imgs/sheen.png"
		},
		{
			id: "copy1Holder",
			src: dynamicContent.Profile[0].copy1.Url
		},
		{
			id: "copy2Holder",
			src: dynamicContent.Profile[0].copy2.Url
		},
		{
			id: "copy3Holder",
			src: dynamicContent.Profile[0].copy3.Url
		},
		{
			id: "legalsHolder",
			src: dynamicContent.Profile[0].legal_cta.Url
		},
		{
			id: "logoHolder",
			src: dynamicContent.Profile[0].logo.Url
		},
		{
			id: "legalsHolder",
			src: dynamicContent.Profile[0].legal_cta.Url
		},
		{
			id: "ctaHolder",
			src: dynamicContent.Profile[0].cta.Url
		},
		{
			id: "mainAnimation",
			src: dynamicContent.Profile[0].Clock_Animation.Url
		}
				];

	stage.addChild(loader)

	preloading(imgsArray);

	loader.x = 122;
	loader.y = 97;

	stage.update();

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", stage);

}

function preloading(fileArray) {
	queue = new createjs.LoadQueue();

	queue.on("complete", handleComplete);
	queue.loadManifest(fileArray);
	queue.load();
}

function handleComplete() {

	clock1Holder = new createjs.Bitmap(queue.getResult('clock1Holder'));
	clock2Holder = new createjs.Bitmap(queue.getResult('clock2Holder'));
	copy1Holder = new createjs.Bitmap(queue.getResult('copy1Holder'));
	copy2Holder = new createjs.Bitmap(queue.getResult('copy2Holder'));
	copy3Holder = new createjs.Bitmap(queue.getResult('copy3Holder'));
	sheenHolder = new createjs.Bitmap(queue.getResult('sheenHolder'));
	legalsHolder = new createjs.Bitmap(queue.getResult('legalsHolder'));

	logoHolder = new createjs.Bitmap(queue.getResult('logoHolder'));
	ctaHolder = new createjs.Bitmap(queue.getResult('ctaHolder'));

	var data = {
		images: [queue.getResult('mainAnimation')],
		frames: {
			width: 300,
			height: 250
		},
		animations: {
			spin: [0, 1, 2, 3, 4, 5, 6, 7, 8],
			start: [0],
			end: [8]
		}
	};
	var spriteSheet = new createjs.SpriteSheet(data);
	animation1 = new createjs.Sprite(spriteSheet, "start");
	animation2 = new createjs.Sprite(spriteSheet, "spin");
	animation3 = new createjs.Sprite(spriteSheet, "end");


	//console.log(queue);
	stage.addChild(logoHolder);
	stage.addChild(legalsHolder);

	stage.addChild(copy1Holder);
	stage.addChild(copy2Holder);
	stage.addChild(copy3Holder);

	stage.addChild(ctaHolder);

	stage.addChild(sheenHolder);

	stage.addChild(clock2Holder);
	//	stage.addChild(clock1Holder);

	stage.addChild(animation1);

	logoHolder.y = 198;
	logoHolder.x = 223;
	logoHolder.scaleX = 0.42;
	logoHolder.scaleY = 0.42;

	legalsHolder.y = 237;
	legalsHolder.x = 10;
	legalsHolder.alpha = 1;

	sheenHolder.y = 10;
	sheenHolder.x = -20;
	sheenHolder.alpha = 0;

	copy1Holder.x = -10; //-250;
	copy1Holder.y = 0;
	copy1Holder.alpha = 0;

	copy2Holder.x = -5; //75;
	copy2Holder.y = 0;
	copy2Holder.alpha = 0;

	copy3Holder.x = -5; //75;
	copy3Holder.y = 0;
	copy3Holder.alpha = 0;

	clock1Holder.y = 15;
	clock1Holder.x = 10; //175;
	clock1Holder.alpha = 1;
	clock1Holder.scaleX = 0.9;
	clock1Holder.scaleY = 0.9;

	clock2Holder.y = 5;
	clock2Holder.x = -250; //175;
	clock2Holder.alpha = 1;
	clock2Holder.scaleX = 0.9;
	clock2Holder.scaleY = 0.9;

	ctaHolder.x = -250; //14;
	ctaHolder.y = 205;
	ctaHolder.scaleX = 0.5;
	ctaHolder.scaleY = 0.5;
	ctaHolder.alpha = 1;

	removePreload();

	//start animations
	initAnimation();
}


function spinAsset() {
	createjs.Ticker.addEventListener("tick", handleTick);
	stage.removeChild(animation1);
	stage.addChild(animation2);
}

var counter = 0;

function handleTick(event) {
	// Actions carried out each tick (aka frame)
	if (!event.paused) {

	}
	counter++

	if (counter == 8) {
		console.log("nice ticks have pased");
		stage.addChild(animation3);
		stage.removeChild(animation2);
	}
}


function initAnimation() {
	//setTimeout(spinAsset, 1000);
	setTimeout(pulseClock, 1000);
	setTimeout(pulseClock2, 1420);
	setTimeout(pulseClock, 1840);
	setTimeout(pulseClock2, 2260);
	setTimeout(spinAsset, 3000);
	setTimeout(frame1, 4000);
	setTimeout(frame3, 6000);
	setTimeout(frame4, 12000);
	setTimeout(frame5, 7000);
}

function removePreload() {
	loader.alpha = 0;
}

function pulseClock() {

	createjs.Tween.get(animation1, {
			loop: false
		})
		.to({
			scaleX: 1.1,
			scaleY: 1.1,
			x: -15,
			y: -15
		}, 300, createjs.Ease.getPowInOut(2));

}

function pulseClock2() {

	createjs.Tween.get(animation1, {
			loop: false
		})
		.to({
			scaleX: 1,
			scaleY: 1,
			x: 0,
			y: 0
		}, 300, createjs.Ease.getPowInOut(2));
}

function expandLegals() {
	if (!legalOutChecker) {
		document.getElementById('legalContainer').style.top = "250px";
		document.getElementById('legals_exit_dc').style.visibility = "hidden";
		legalOutChecker = true;
		console.log(legalOutChecker);
	} else {
		document.getElementById('legalContainer').style.top = "-1px";
		document.getElementById('legals_exit_dc').style.visibility = "visible";
		legalOutChecker = false;
		console.log(legalOutChecker);
	}
}

function frame1() {

	createjs.Tween.get(sheenHolder, {
			loop: false
		})
		.wait(500)
		.to({
			alpha: 1
		}, 250, createjs.Ease.getPowInOut(2))
		.to({
			x: 250
		}, 1250, createjs.Ease.getPowInOut(2))
		.to({
			alpha: 0
		}, 250, createjs.Ease.getPowInOut(2));


	createjs.Tween.get(copy1Holder, {
			loop: false
		})
		.to({
			x: -10,
			alpha: 1
		}, 1250, createjs.Ease.getPowInOut(2));
}

function frame3() {

	createjs.Tween.get(animation3, {
			loop: false
		})
		.to({
			scaleX: 0.6,
			scaleY: 0.6,
			x: 52,
			y: 15
		}, 500, createjs.Ease.getPowInOut(2));

	createjs.Tween.get(copy1Holder, {
			loop: false
		})
		.to({
			alpha: 0
		}, 750, createjs.Ease.getPowInOut(2));


	createjs.Tween.get(sheenHolder, {
			loop: false
		})
		.to({ //sheen on copy line
			x: -100
		}, 50, createjs.Ease.getPowInOut(2))
		.to({
			alpha: 1
		}, 50, createjs.Ease.getPowInOut(2))
		.wait(1250)
		.to({
			x: 250
		}, 1250, createjs.Ease.getPowInOut(2))
		.to({
			alpha: 0
		}, 250, createjs.Ease.getPowInOut(2)); 


	createjs.Tween.get(copy2Holder, {
			loop: false
		})
		.wait(750)
		.to({
			alpha: 1
		}, 750, createjs.Ease.getPowInOut(2));

	setTimeout(function () {
		jQuery("#sky-countdown-03").delay(2100).addClass("movein");
	}, 500);

}

function frame4() {

	createjs.Tween.get(sheenHolder, {
			loop: false
		})
		.to({ //sheen on copy line
			x: -100,
			y: 10,
			alpha: 0,
			scaleY: 1
		}, 50, createjs.Ease.getPowInOut(2))
		.to({
			alpha: 1
		}, 50, createjs.Ease.getPowInOut(2))
		.wait(1250)
		.to({
			x: 250
		}, 1250, createjs.Ease.getPowInOut(2))
		.to({
			alpha: 0
		}, 250, createjs.Ease.getPowInOut(2))
	//sheen on cta
		.to({
			scaleY: 1.5,
			x: -100,
			y: 206,
			alpha: 0
		}, 50, createjs.Ease.getPowInOut(2))
		.to({
			alpha: 1
		}, 250, createjs.Ease.getPowInOut(2))
		.to({
			x: 270
		}, 1000, createjs.Ease.getPowInOut(2));

	createjs.Tween.get(copy2Holder, {
			loop: false
		})
		.to({
			alpha: 0
		}, 750, createjs.Ease.getPowInOut(2));

	createjs.Tween.get(copy3Holder, {
			loop: false
		})
		.wait(750)
		.to({
			alpha: 1
		}, 750, createjs.Ease.getPowInOut(2));
}

function frame5() {

	createjs.Tween.get(ctaHolder, {
			loop: false
		})
		.wait(350)
		.to({
			x: 14,
			alpha: 1
		}, 800, createjs.Ease.getPowInOut(2));

}