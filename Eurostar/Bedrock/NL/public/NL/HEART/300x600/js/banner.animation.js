'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/logo.png', 'images/white_bkg.png', 'images/train.png', 'images/eurostar.png', 'images/eurostar_yellow.png', 'images/scene1_bkg.jpg', 'images/scene1_windmill.png', 'images/scene1_boat.png', 'images/scene1_clouds.png', 'images/scene1_heart.png', 'images/bike_mum.png', 'images/mum_wheel1.png', 'images/mum_wheel2.png', 'images/bike_dad.png', 'images/dad_wheel1.png', 'images/dad_wheel2.png', 'images/bike_boy.png', 'images/boy_wheel1.png', 'images/boy_wheel2.png', 'images/girl_wheel1.png', 'images/girl_wheel2.png', 'images/bike_girl.png', 'images/copy1.png', 'images/scene2_bus.png', 'images/scene2_clouds.png', 'images/scene2_heart.png', 'images/scene2_taxi.png', 'images/scene2_london_eye.png', 'images/scene2_bkg.jpg', 'images/copy2.png', 'images/scene3_bkg.png', 'images/scene3_price.png', 'images/cta.png', 'images/copy3.png'];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  this.logo = this.smartObject({
    backgroundImage: 'images/logo.png',
    parent: this.banner
  });
  this.white_bkg = this.smartObject({
    backgroundImage: 'images/white_bkg.png',
    parent: this.banner
  });
  this.train = this.smartObject({
    backgroundImage: 'images/train.png',
    parent: this.banner
  });
  this.eurostar = this.smartObject({
    backgroundImage: 'images/eurostar.png',
    parent: this.banner
  });
  this.eurostar_yellow = this.smartObject({
    backgroundImage: 'images/eurostar_yellow.png',
    parent: this.banner
  });
  this.scene1_bkg = this.smartObject({
    backgroundImage: 'images/scene1_bkg.jpg',
    parent: this.banner
  });
  this.copy1 = this.smartObject({
    backgroundImage: 'images/copy1.png',
    parent: this.banner
  });
  this.scene1_clouds = this.smartObject({
    backgroundImage: 'images/scene1_clouds.png',
    parent: this.banner
  });
  this.scene1_windmill = this.smartObject({
    backgroundImage: 'images/scene1_windmill.png',
    parent: this.banner
  });
  this.scene1_boat = this.smartObject({
    backgroundImage: 'images/scene1_boat.png',
    parent: this.banner
  });
  this.scene1_heart = this.smartObject({
    backgroundImage: 'images/scene1_heart.png',
    parent: this.banner
  });
  this.bike_mum = this.smartObject({
    backgroundImage: 'images/bike_mum.png',
    parent: this.banner
  });
  this.mum_wheel1 = this.smartObject({
    backgroundImage: 'images/mum_wheel1.png',
    parent: this.banner
  });
  this.mum_wheel2 = this.smartObject({
    backgroundImage: 'images/mum_wheel2.png',
    parent: this.banner
  });
  this.bike_dad = this.smartObject({
    backgroundImage: 'images/bike_dad.png',
    parent: this.banner
  });
  this.dad_wheel1 = this.smartObject({
    backgroundImage: 'images/dad_wheel1.png',
    parent: this.banner
  });
  this.dad_wheel2 = this.smartObject({
    backgroundImage: 'images/dad_wheel2.png',
    parent: this.banner
  });
  this.bike_girl = this.smartObject({
    backgroundImage: 'images/bike_girl.png',
    parent: this.banner
  });
  this.girl_wheel1 = this.smartObject({
    backgroundImage: 'images/girl_wheel1.png',
    parent: this.banner
  });
  this.girl_wheel2 = this.smartObject({
    backgroundImage: 'images/girl_wheel2.png',
    parent: this.banner
  });
  this.bike_boy = this.smartObject({
    backgroundImage: 'images/bike_boy.png',
    parent: this.banner
  });
  this.boy_wheel1 = this.smartObject({
    backgroundImage: 'images/boy_wheel1.png',
    parent: this.banner
  });
  this.boy_wheel2 = this.smartObject({
    backgroundImage: 'images/boy_wheel2.png',
    parent: this.banner
  });
  this.scene2_bkg = this.smartObject({
    backgroundImage: 'images/scene2_bkg.jpg',
    parent: this.banner
  });
  this.scene2_bus = this.smartObject({
    backgroundImage: 'images/scene2_bus.png',
    parent: this.banner
  });
  this.scene2_heart = this.smartObject({
    backgroundImage: 'images/scene2_heart.png',
    parent: this.banner
  });
  this.scene2_london_eye = this.smartObject({
    backgroundImage: 'images/scene2_london_eye.png',
    parent: this.banner
  });
  this.scene2_taxi = this.smartObject({
    backgroundImage: 'images/scene2_taxi.png',
    parent: this.banner
  });
  this.scene2_clouds = this.smartObject({
    backgroundImage: 'images/scene2_clouds.png',
    parent: this.banner
  });
  this.copy2 = this.smartObject({
    backgroundImage: 'images/copy2.png',
    parent: this.banner
  });
  this.scene3_bkg = this.smartObject({
    backgroundImage: 'images/scene3_bkg.png',
    parent: this.banner
  });
  this.scene3_price = this.smartObject({
    backgroundImage: 'images/scene3_price.png',
    parent: this.banner
  });
  this.copy3 = this.smartObject({
    backgroundImage: 'images/copy3.png',
    parent: this.banner
  });
  this.cta = this.smartObject({
    backgroundImage: 'images/cta.png',
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.logo.set({ left: 21, top: 254, zIndex: 20 });
  this.white_bkg.set({ left: 150, top: 0, zIndex: 20 });
  this.eurostar.set({ top: 550, left: 95, zIndex: 20 });
  this.eurostar_yellow.set({ autoAlpha: 0, top: 550, left: 95, zIndex: 20 });

  //SCENE 1 HOLLAND
  this.scene1_bkg.set({ zIndex: 15 });
  this.scene1_windmill.set({ top: 228, left: 155, zIndex: 17 });
  this.scene1_clouds.set({ top: 140, left: 30, zIndex: 16 });
  this.scene1_heart.set({ top: 282, left: 2, zIndex: 17 });
  this.scene1_boat.set({ top: 376, left: 150, zIndex: 18 });
  this.copy1.set({ autoAlpha: 0, top: 35, left: 40, zIndex: 19 });
  this.bike_mum.set({ top: 370, left: -60, zIndex: 19 });
  this.mum_wheel1.set({ top: 418, left: -70, zIndex: 19 });
  this.mum_wheel2.set({ top: 418, left: -25, zIndex: 19 });
  this.bike_dad.set({ top: 370, left: -60, zIndex: 19 });
  this.dad_wheel1.set({ top: 415, left: -70, zIndex: 19 });
  this.dad_wheel2.set({ top: 415, left: -30, zIndex: 19 });
  this.bike_boy.set({ top: 385, left: -70, zIndex: 19 });
  this.boy_wheel1.set({ top: 415, left: -70, zIndex: 19 });
  this.boy_wheel2.set({ top: 415, left: -45, zIndex: 19 });
  this.girl_wheel1.set({ top: 420, left: -70, zIndex: 19 });
  this.girl_wheel2.set({ top: 420, left: -35, zIndex: 19 });
  this.bike_girl.set({ top: 385, left: -70, zIndex: 19 });

  //SCENE 2 LONDON
  this.scene2_bkg.set({ zIndex: 5 });
  this.train.set({ top: 418, left: -14000, zIndex: 10 });
  this.scene2_london_eye.set({ top: 225, left: 158, zIndex: 9 });
  this.scene2_bus.set({ top: 380, left: 30, zIndex: 9 });
  this.scene2_taxi.set({ top: 405, left: 200, zIndex: 9 });
  this.scene2_clouds.set({ top: 100, left: 30, zIndex: 6 });
  this.scene2_heart.set({ top: 284, left: 5, zIndex: 7 });
  this.copy2.set({ autoAlpha: 0, top: 35, left: 50, zIndex: 9 });

  //SCENE 3 CTA & PRICE
  this.scene3_price.set({ autoAlpha: 0, top: 230, left: 40, zIndex: 7 });
  this.copy3.set({ autoAlpha: 0, top: 130, left: 78, zIndex: 7 });
  this.cta.set({ autoAlpha: 0, scale: 0.4, top: 400, left: 95, zIndex: 7 });
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenMax.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  var _this = this;

  function loop() {
    _this.timeline.gotoAndPlay('start');
  }

  this.timeline = new TimelineMax({ repeat: 1 }).addLabel('start', 0).add([TweenMax.to(this.logo, 1.5, { left: 300, delay: 1 }), TweenMax.to(this.white_bkg, 2.6, { left: 600, delay: 1 }),

  //SCENE 1 HOLLAND
  TweenMax.to(this.scene1_windmill, 5, { rotation: 1080, transformOrigin: "centre ", delay: 1, ease: Power2.easeIn }), TweenMax.to(this.scene1_heart, 5, { rotationY: 2160, transformOrigin: "centre", delay: 1, ease: Power2.easeIn }), TweenMax.to(this.scene1_boat, 10, { left: 0, delay: 1 }), TweenMax.to(this.copy1, 1, { autoAlpha: 1, delay: 2 }), TweenMax.to(this.scene1_clouds, 11, { x: -200, delay: 2 }), TweenMax.to(this.bike_mum, 4, { left: 400, delay: 1.4 }), TweenMax.to(this.mum_wheel1, 4, { left: 400, delay: 1.4 }), TweenMax.to(this.mum_wheel1, 4, { rotation: 10080, transformOrigin: "centre ", delay: 1.4, ease: Power2.easeIn }), TweenMax.to(this.mum_wheel2, 4, { left: 425, delay: 1.4 }), TweenMax.to(this.mum_wheel2, 4, { rotation: 10080, transformOrigin: "centre ", delay: 1.4, ease: Power2.easeIn }), TweenMax.to(this.bike_dad, 4, { left: 400, delay: 1 }), TweenMax.to(this.dad_wheel1, 4, { left: 400, delay: 1 }), TweenMax.to(this.dad_wheel1, 4, { rotation: 10080, transformOrigin: "centre ", delay: 1, ease: Power2.easeIn }), TweenMax.to(this.dad_wheel2, 4, { left: 430, delay: 1 }), TweenMax.to(this.dad_wheel2, 4, { rotation: 10080, transformOrigin: "centre ", delay: 1, ease: Power2.easeIn }), TweenMax.to(this.bike_boy, 4, { left: 400, delay: 2 }), TweenMax.to(this.boy_wheel1, 4, { left: 400, delay: 2 }), TweenMax.to(this.boy_wheel1, 4, { rotation: 10080, transformOrigin: "centre ", delay: 2, ease: Power2.easeIn }), TweenMax.to(this.boy_wheel2, 4, { left: 425, delay: 2 }), TweenMax.to(this.boy_wheel2, 4, { rotation: 10080, transformOrigin: "centre ", delay: 2, ease: Power2.easeIn }), TweenMax.to(this.bike_girl, 4, { left: 400, delay: 2.5 }), TweenMax.to(this.girl_wheel1, 4, { left: 400, delay: 2.5 }), TweenMax.to(this.girl_wheel1, 4, { rotation: 10080, transformOrigin: "centre ", delay: 2.5, ease: Power2.easeIn }), TweenMax.to(this.girl_wheel2, 4, { left: 430, delay: 2.5 }), TweenMax.to(this.girl_wheel2, 4, { rotation: 10080, transformOrigin: "centre ", delay: 2.5, ease: Power2.easeIn }), TweenMax.to(this.copy1, 1, { autoAlpha: 0, delay: 4 }), TweenMax.to(this.scene1_bkg, 1, { autoAlpha: 0, delay: 5 }), TweenMax.to(this.scene1_clouds, 1, { autoAlpha: 0, delay: 4 }), TweenMax.to(this.scene1_boat, 1, { autoAlpha: 0, delay: 5 }), TweenMax.to(this.scene1_heart, 1, { autoAlpha: 0, delay: 5 }), TweenMax.to(this.scene1_windmill, 1, { autoAlpha: 0, delay: 5 }), TweenMax.to(this.bike_mum, 1, { autoAlpha: 0, delay: 5 }), TweenMax.to(this.bike_dad, 1, { autoAlpha: 0, delay: 5 }), TweenMax.to(this.bike_girl, 1, { autoAlpha: 0, delay: 5 }), TweenMax.to(this.bike_boy, 1, { autoAlpha: 0, delay: 5 }),

  //SCENE 2 LONDON
  TweenMax.to(this.scene2_bus, 2, { left: -150, delay: 6 }), TweenMax.to(this.scene2_taxi, 4, { left: -100, delay: 6 }), TweenMax.to(this.scene2_clouds, 11, { x: -200, delay: 5 }), TweenMax.to(this.scene2_heart, 5, { rotationY: 1080, transformOrigin: "centre", delay: 5, ease: Power2.easeOut }), TweenMax.to(this.scene2_london_eye, 5, { rotation: 1080, transformOrigin: "centre", delay: 5, ease: Power2.easeOut }), TweenMax.to(this.train, 5, { left: 150, delay: 5, ease: Power4.easeOut }), TweenMax.to(this.copy2, 1, { autoAlpha: 1, delay: 5 }), TweenMax.to(this.copy2, 1, { autoAlpha: 0, delay: 10 }), TweenMax.to(this.scene2_bkg, 1, { autoAlpha: 0, delay: 10 }), TweenMax.to(this.scene2_bus, 1, { autoAlpha: 0, delay: 10 }), TweenMax.to(this.scene2_heart, 1, { autoAlpha: 0, delay: 10 }), TweenMax.to(this.scene2_bkg, 1, { autoAlpha: 0, delay: 10 }), TweenMax.to(this.scene2_taxi, 1, { autoAlpha: 0, delay: 10 }), TweenMax.to(this.scene2_london_eye, 1, { autoAlpha: 0, delay: 10 }), TweenMax.to(this.scene2_clouds, 1, { autoAlpha: 0, delay: 10 }), TweenMax.to(this.train, 1, { autoAlpha: 0, delay: 10 }), TweenMax.to(this.eurostar, 1, { autoAlpha: 0, delay: 10 }),

  //SCENE 3 CTA & PRICE
  TweenMax.to(this.eurostar_yellow, 1, { autoAlpha: 1, delay: 10 }), TweenMax.to(this.scene3_price, 1, { autoAlpha: 1, delay: 10 }), TweenMax.to(this.copy3, 1, { autoAlpha: 1, delay: 10 }), TweenMax.to(this.cta, 1, { autoAlpha: 1, scale: 1, delay: 10 }), TweenMax.to(this.cta, 0.5, { scale: 1.05, repeat: 5, yoyo: true, delay: 11 }), this.timeline.pause()]);
  console.log(this.timeline.totalDuration());
};