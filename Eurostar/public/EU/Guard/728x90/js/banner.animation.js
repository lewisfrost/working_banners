'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/white_bkg.png', 'images/blue_square.png', 'images/train.png', 'images/eurostar.png', 'images/scene1_bkg.png', 'images/scene1_hut.png', 'images/scene1_man.png', 'images/copy1.png', 'images/scene2_man.png', 'images/scene2_bkg.png', 'images/scene2_horse.png', 'images/scene2_clothes1.png', 'images/scene2_clothes2.png', 'images/scene2_clothes3.png', 'images/copy2.png', 'images/copy3.png', 'images/scene4_bkg.png', 'images/scene4_line1.png', 'images/scene4_line2.png', 'images/scene4_copy1.png', 'images/scene4_copy2.png', 'images/copy4.png', 'images/scene5_price.png', 'images/cta.png', 'images/copy5.png', 'images/tcs.png'];

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
  this.white_bkg = this.smartObject({
    backgroundImage: 'images/white_bkg.png',
    parent: this.banner
  });
  this.blue_square = this.smartObject({
    backgroundImage: 'images/blue_square.png',
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
  this.scene1_bkg = this.smartObject({
    backgroundImage: 'images/scene1_bkg.png',
    parent: this.banner
  });
  this.copy1 = this.smartObject({
    backgroundImage: 'images/copy1.png',
    parent: this.banner
  });
  this.copy3 = this.smartObject({
    backgroundImage: 'images/copy3.png',
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
  this.scene2_bkg = this.smartObject({
    backgroundImage: 'images/scene2_bkg.png',
    parent: this.banner
  });
  this.scene2_man = this.smartObject({
    backgroundImage: 'images/scene2_man.png',
    parent: this.banner
  });
  this.scene2_clothes1 = this.smartObject({
    backgroundImage: 'images/scene2_clothes1.png',
    parent: this.banner
  });
  this.scene2_clothes2 = this.smartObject({
    backgroundImage: 'images/scene2_clothes2.png',
    parent: this.banner
  });
  this.scene2_clothes3 = this.smartObject({
    backgroundImage: 'images/scene2_clothes3.png',
    parent: this.banner
  });
  this.scene2_horse = this.smartObject({
    backgroundImage: 'images/scene2_horse.png',
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
  this.scene4_copy1 = this.smartObject({
    backgroundImage: 'images/scene4_copy1.png',
    parent: this.banner
  });
  this.scene4_copy2 = this.smartObject({
    backgroundImage: 'images/scene4_copy2.png',
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
  this.tcs = this.smartObject({
    backgroundImage: 'images/tcs.png',
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.white_bkg.set({ zIndex: 17 });
  this.train.set({ top: 30, left: -14000, zIndex: 14 });
  this.eurostar.set({ top: 30, left: 620, zIndex: 16 });
  this.blue_square.set({ top: 0, left: 600, zIndex: 15 });

  //SCENE 1 ZOOMED IN LONDON 
  this.scene1_bkg.set({ zIndex: 12 });
  this.scene1_hut.set({ top: 10, left: 370, zIndex: 12 });
  this.scene1_man.set({ top: 34, left: 380, zIndex: 13 });
  this.copy1.set({ autoAlpha: 0, top: 12, left: 10, zIndex: 13 });
  this.copy2.set({ autoAlpha: 0, top: 12, left: 60, zIndex: 13 });
  this.copy3.set({ autoAlpha: 0, top: 15, left: 20, zIndex: 13 });

  //SCENE 2 PARIS
  this.scene2_bkg.set({ zIndex: 10 });
  this.scene2_man.set({ top: 20, left: 380, zIndex: 11 });
  //this.scene2_horse.set({top:40, left:250, zIndex:11})
  this.scene2_clothes1.set({ autoAlpha: 0, top: 30, left: 370, zIndex: 11 });
  this.scene2_clothes2.set({ autoAlpha: 0, top: 30, left: 370, zIndex: 11 });
  this.scene2_clothes3.set({ autoAlpha: 0, top: 30, left: 370, zIndex: 11 });

  //SCENE 4 LONDON TO PARIS

  this.scene4_bkg.set({ zIndex: 6 });
  this.scene4_line1.set({ top: 30, left: 230, zIndex: 7 });
  this.scene4_line2.set({ top: 40, left: 230, zIndex: 7 });
  this.scene4_copy1.set({ top: 28, left: 450, zIndex: 7 });
  this.scene4_copy2.set({ top: 28, left: 50, zIndex: 7 });
  this.copy4.set({ autoAlpha: 0, scale: 0.4, top: 13, left: 245, zIndex: 7 });

  //SCENE 5 CTA & PRICE
  this.scene5_price.set({ autoAlpha: 0, top: 15, left: 220, zIndex: 7 });
  this.copy5.set({ autoAlpha: 0, top: 33, left: 20, zIndex: 7 });
  this.cta.set({ autoAlpha: 0, scale: 0.4, top: 31, left: 475, zIndex: 7 });
  this.tcs.set({ autoAlpha: 0, top: 75, left: 640, zIndex: 16 });
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

  this.timeline = new TimelineMax({ repeat: 1 }).addLabel('start', 0).add([TweenMax.to(this.white_bkg, 2.6, { left: 600, delay: 1 }),

  //SCENE 2 ZOOMED OUT LONDON
  TweenMax.to(this.train, 7, { left: 650, delay: 2 }), TweenMax.to(this.copy1, 1, { autoAlpha: 1, delay: 2 }), TweenMax.to(this.copy1, 1, { autoAlpha: 0, delay: 4 }), TweenMax.to(this.copy2, 1, { autoAlpha: 1, delay: 5 }), TweenMax.to(this.copy2, 1, { autoAlpha: 0, delay: 7 }), TweenMax.to(this.scene1_bkg, 1, { autoAlpha: 0, delay: 7 }), TweenMax.to(this.scene1_man, 0.1, { autoAlpha: 0, delay: 5.5 }),

  //SCENE 3 PARIS
  TweenMax.to(this.scene1_hut, 2, { y: -50, x: 300, rotation: 45, transformOrigin: "left 50%", delay: 7 }), TweenMax.to(this.scene2_clothes1, 0.1, { autoAlpha: 1, delay: 6 }), TweenMax.to(this.scene2_clothes1, 2, { y: -200, x: 280, rotation: 90, transformOrigin: "left 50%", delay: 6.5 }), TweenMax.to(this.scene2_clothes2, 0.1, { autoAlpha: 1, delay: 6 }), TweenMax.to(this.scene2_clothes2, 2, { y: -200, x: 280, rotation: 140, transformOrigin: "left 50%", delay: 7 }), TweenMax.to(this.scene2_clothes3, 0.1, { autoAlpha: 1, delay: 6 }), TweenMax.to(this.scene2_clothes3, 2, { y: -200, x: 280, rotation: 180, transformOrigin: "left 50%", delay: 7.5 }), TweenMax.to(this.scene2_bkg, 0.5, { autoAlpha: 0, delay: 9.5 }), TweenMax.to(this.scene2_man, 0.5, { autoAlpha: 0, delay: 9.5 }),
  //TweenMax.to(this.scene2_horse, 0.5, {autoAlpha:0, delay: 12}),
  TweenMax.to(this.copy3, 1, { autoAlpha: 1, delay: 7.5 }), TweenMax.to(this.copy3, 0.5, { autoAlpha: 0, delay: 9.5 }), TweenMax.to(this.train, 0.5, { autoAlpha: 0, delay: 9.5 }),

  //SCENE 4 LONDON TO PARIS
  TweenMax.to(this.scene4_line1, 1, { y: -22, delay: 10 }), TweenMax.to(this.scene4_line2, 1, { y: 38, delay: 10 }), TweenMax.to(this.copy4, 1, { autoAlpha: 1, scale: 1, delay: 10.5 }), TweenMax.to(this.scene4_line1, 1, { autoAlpha: 0, delay: 13 }), TweenMax.to(this.scene4_line2, 1, { autoAlpha: 0, delay: 13 }), TweenMax.to(this.scene4_copy1, 1, { autoAlpha: 0, delay: 13 }), TweenMax.to(this.scene4_copy2, 1, { autoAlpha: 0, delay: 13 }), TweenMax.to(this.copy4, 1, { autoAlpha: 0, delay: 13 }),

  //SCENE 5 CTA & PRICE
  TweenMax.to(this.scene5_price, 1, { autoAlpha: 1, delay: 13.5 }), TweenMax.to(this.copy5, 1, { autoAlpha: 1, delay: 13.5 }), TweenMax.to(this.cta, 1, { autoAlpha: 1, scale: 1, delay: 13.5 }), TweenMax.to(this.tcs, 1, { autoAlpha: 1, delay: 13.5 }), TweenMax.to(this.cta, 0.5, { scale: 1.05, repeat: 5, yoyo: true, delay: 14 })]);
  console.log(this.timeline.totalDuration());
};