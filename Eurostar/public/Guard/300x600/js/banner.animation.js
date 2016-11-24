'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/logo.png', 'images/blue_bkg.png', 'images/train.png', 'images/scene1_bkg.png', 'images/scene1_clouds.png', 'images/scene1_hut.png', 'images/scene1_man.png', 'images/scene1_wheel.png', 'images/copy1.png', 'images/scene2_clouds.png', 'images/scene2_bkg.png', 'images/scene2_plane.png', 'images/scene2_boat.png', 'images/scene2_fish.png', 'images/copy2.png', 'images/scene4_bkg.png', 'images/scene4_line1.png', 'images/scene4_line2.png', 'images/copy4.png', 'images/scene5_price.png', 'images/cta.png', 'images/copy5.png'];

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
  this.blue_bkg = this.smartObject({
    backgroundImage: 'images/blue_bkg.png',
    parent: this.banner
  });
  this.train = this.smartObject({
    backgroundImage: 'images/train.png',
    parent: this.banner
  });
  this.scene1_bkg = this.smartObject({
    backgroundImage: 'images/scene1_bkg.png',
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
  this.scene1_hut = this.smartObject({
    backgroundImage: 'images/scene1_hut.png',
    parent: this.banner
  });
  this.scene1_man = this.smartObject({
    backgroundImage: 'images/scene1_man.png',
    parent: this.banner
  });
  this.scene1_wheel = this.smartObject({
    backgroundImage: 'images/scene1_wheel.png',
    parent: this.banner
  });
  this.scene2_bkg = this.smartObject({
    backgroundImage: 'images/scene2_bkg.png',
    parent: this.banner
  });
  this.scene2_clouds = this.smartObject({
    backgroundImage: 'images/scene2_clouds.png',
    parent: this.banner
  });
  this.scene2_plane = this.smartObject({
    backgroundImage: 'images/scene2_plane.png',
    parent: this.banner
  });
  this.scene2_boat = this.smartObject({
    backgroundImage: 'images/scene2_boat.png',
    parent: this.banner
  });
  this.scene2_fish = this.smartObject({
    backgroundImage: 'images/scene2_fish.png',
    parent: this.banner
  });
  this.copy2 = this.smartObject({
    backgroundImage: 'images/copy2.png',
    parent: this.banner
  });
  this.scene4_bkg = this.smartObject({
    backgroundImage: 'images/scene4_bkg.png',
    parent: this.banner
  });
  this.scene4_line1 = this.smartObject({
    backgroundImage: 'images/scene4_line1.png',
    parent: this.banner
  });
  this.scene4_line2 = this.smartObject({
    backgroundImage: 'images/scene4_line2.png',
    parent: this.banner
  });
  this.copy4 = this.smartObject({
    backgroundImage: 'images/copy4.png',
    parent: this.banner
  });
  this.scene5_price = this.smartObject({
    backgroundImage: 'images/scene5_price.png',
    parent: this.banner
  });
  this.copy5 = this.smartObject({
    backgroundImage: 'images/copy5.png',
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
  this.logo.center();
  this.logo.set({ zIndex: 15 });
  this.blue_bkg.set({ left: -298, top: 0, zIndex: 14 });
  this.train.set({ top: 400, left: -14000, zIndex: 14 });

  //SCENE 1 ZOOMED IN LONDON 
  this.scene1_bkg.set({ scale: 1.4, zIndex: 12 });
  this.scene1_clouds.set({ scale: 1.4, top: 200, left: 10, zIndex: 13 });
  this.scene1_hut.set({ scale: 1.4, top: 320, left: 100, zIndex: 13 });
  this.scene1_man.set({ scale: 1.4, top: 370, left: 120, zIndex: 13 });
  this.scene1_wheel.set({ scale: 1.4, top: 150, left: 150, zIndex: 13 });
  this.copy1.set({ autoAlpha: 0, top: 15, left: 70, zIndex: 13 });

  //SCENE 2 OCEAN
  this.scene2_clouds.set({ left: 0, zIndex: 11 });
  this.scene2_bkg.set({ zIndex: 10 });
  this.scene2_plane.set({ left: -200, zIndex: 11 });
  this.scene2_boat.set({ left: 120, top: 245, zIndex: 11 });
  this.scene2_fish.set({ left: 10, top: 300, zIndex: 11 });
  this.copy2.set({ autoAlpha: 0, top: 300, left: 70, zIndex: 11 });

  //SCENE 4 LONDON TO PARIS

  this.scene4_bkg.set({ zIndex: 6 });
  this.scene4_line1.set({ top: 220, zIndex: 7 });
  this.scene4_line2.set({ top: 250, zIndex: 7 });
  this.copy4.set({ autoAlpha: 0, scale: 0.4, top: 220, left: 70, zIndex: 7 });

  //SCENE 5 CTA & PRICE
  this.scene5_price.set({ autoAlpha: 0, top: 200, left: 65, zIndex: 7 });
  this.copy5.set({ autoAlpha: 0, top: 150, left: 40, zIndex: 7 });
  this.cta.set({ autoAlpha: 0, scale: 0.4, top: 340, left: 80, zIndex: 7 });
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

  this.timeline = new TimelineMax({ repeat: 2 }).addLabel('start', 0).add([TweenMax.to(this.logo, 1, { left: 700, delay: 1 }), TweenMax.to(this.blue_bkg, 2, { left: 700, delay: 1 }), TweenMax.to(this.train, 9, { left: 10, delay: 4, ease: Power2.easeOut, y: 0 }),

  //SCENE 1 ZOOMED IN LONDON
  TweenMax.to(this.scene1_bkg, 4, { scale: 1, delay: 2 }), TweenMax.to(this.scene1_clouds, 8, { scale: 1, delay: 2 }), TweenMax.to(this.scene1_hut, 4, { scale: 1, delay: 2 }), TweenMax.to(this.scene1_man, 4, { scale: 1, delay: 2 }), TweenMax.to(this.scene1_wheel, 4, { scale: 1, delay: 2 }), TweenMax.to(this.scene1_clouds, 8, { left: -50, delay: 1 }), TweenMax.to(this.copy1, 1, { autoAlpha: 1, delay: 1 }), TweenMax.to(this.copy1, 1, { autoAlpha: 0, delay: 4 }), TweenMax.to(this.scene1_bkg, 1, { autoAlpha: 0, delay: 4 }), TweenMax.to(this.scene1_clouds, 1, { autoAlpha: 0, delay: 4 }),

  //SCENE 2 OCEAN
  TweenMax.to(this.scene2_clouds, 8, { left: -50, delay: 4.5 }), TweenMax.to(this.scene2_plane, 4, { x: 500, y: -100, top: 0, delay: 5 }), TweenMax.to(this.scene2_boat, 7, { x: 50, delay: 4.5 }), TweenMax.to(this.scene2_fish, 5, { x: 50, delay: 4.5 }), TweenMax.to(this.copy2, 1, { autoAlpha: 1, delay: 5 }), TweenMax.to(this.copy2, 1, { autoAlpha: 0, delay: 7 }), TweenMax.to(this.scene2_bkg, 1, { autoAlpha: 0, delay: 7 }), TweenMax.to(this.scene2_boat, 1, { autoAlpha: 0, delay: 7 }), TweenMax.to(this.scene2_fish, 1, { autoAlpha: 0, delay: 7 }), TweenMax.to(this.scene2_clouds, 1, { autoAlpha: 0, delay: 7 }),

  //SCENE 4 LONDON TO PARIS
  TweenMax.to(this.scene4_line1, 1, { y: -35, delay: 10.5 }), TweenMax.to(this.scene4_line2, 1, { y: 35, delay: 10.5 }), TweenMax.to(this.copy4, 1, { autoAlpha: 1, scale: 1, delay: 11.5 }), TweenMax.to(this.scene4_line1, 1, { autoAlpha: 0, delay: 14 }), TweenMax.to(this.scene4_line2, 1, { autoAlpha: 0, delay: 14 }), TweenMax.to(this.copy4, 1, { autoAlpha: 0, delay: 14 }),

  //SCENE 5 CTA & PRICE
  TweenMax.to(this.scene5_price, 1, { autoAlpha: 1, delay: 14.5 }), TweenMax.to(this.copy5, 1, { autoAlpha: 1, delay: 14.5 }), TweenMax.to(this.cta, 1, { autoAlpha: 1, scale: 1, delay: 14.5 }), TweenMax.to(this.cta, 0.5, { scale: 1.05, repeat: 5, yoyo: true, delay: 15 })]);
  console.log(this.timeline.totalDuration());
};