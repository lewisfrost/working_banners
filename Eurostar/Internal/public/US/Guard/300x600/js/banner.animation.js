'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/logo.png', 'images/blue_bkg.png', 'images/train.png', 'images/eurostar.png', 'images/scene1_bkg.png', 'images/scene1_clouds.png', 'images/scene1_hut.png', 'images/scene1_man.png', 'images/copy1.png', 'images/scene2_man.png', 'images/scene2_bkg.png', 'images/scene2_clothes1.png', 'images/scene2_clothes2.png', 'images/scene2_clothes3.png', 'images/copy2.png', 'images/copy3.png', 'images/scene4_bkg.png', 'images/scene4_line1.png', 'images/scene4_line2.png', 'images/copy4.png', 'images/scene5_price.png', 'images/cta.png', 'images/copy5.png'];

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
  this.train.set({ top: 335, left: -14000, zIndex: 14 });
  this.eurostar.set({ top: 540, left: 75, zIndex: 13 });

  //SCENE 1 ZOOMED IN LONDON 
  this.scene1_bkg.set({ scale: 1.4, top: -50, left: 40, zIndex: 12 });
  this.scene1_clouds.set({ scale: 1.4, top: 20, left: 30, zIndex: 13 });
  this.scene1_hut.set({ scale: 1.4, top: 255, left: 110, zIndex: 12 });
  this.scene1_man.set({ scale: 1.4, top: 305, left: 130, zIndex: 13 });
  this.copy1.set({ autoAlpha: 0, top: 25, left: 60, zIndex: 13 });
  this.copy2.set({ autoAlpha: 0, top: 60, left: 115, zIndex: 13 });
  this.copy3.set({ autoAlpha: 0, top: 95, left: 35, zIndex: 13 });

  //SCENE 2 PARIS
  this.scene2_bkg.set({ zIndex: 10 });
  this.scene2_man.set({ top: 332, left: 90, zIndex: 11 });
  this.scene2_clothes1.set({ autoAlpha: 0, top: 355, left: 90, zIndex: 12 });
  this.scene2_clothes2.set({ autoAlpha: 0, top: 355, left: 90, zIndex: 12 });
  this.scene2_clothes3.set({ autoAlpha: 0, top: 355, left: 90, zIndex: 12 });

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

  this.timeline = new TimelineMax({ repeat: 1 }).addLabel('start', 0).add([TweenMax.to(this.logo, 1, { left: 700, delay: 0.8 }), TweenMax.to(this.blue_bkg, 2, { left: 700, delay: 0.8 }),

  //SCENE 1 ZOOMED IN LONDON
  TweenMax.to(this.scene1_bkg, 1.5, { scale: 1, y: 50, x: -40, delay: 1 }), TweenMax.to(this.scene1_clouds, 1.5, { scale: 1, y: 100, x: -30, delay: 1 }), TweenMax.to(this.scene1_hut, 1.5, { scale: 1, y: 30, x: -30, delay: 1 }), TweenMax.to(this.scene1_man, 1.5, { scale: 1, y: 25, x: -30, delay: 1 }),

  //SCENE 2 ZOOMED OUT LONDON
  TweenMax.to(this.train, 4.7, { left: 330, delay: 2 }), TweenMax.to(this.scene1_clouds, 11, { x: -200, delay: 2 }), TweenMax.to(this.copy1, 1, { autoAlpha: 1, delay: 2 }), TweenMax.to(this.copy2, 1, { autoAlpha: 1, delay: 2.5 }), TweenMax.to(this.copy3, 1, { autoAlpha: 1, delay: 3 }), TweenMax.to(this.scene1_bkg, 1, { autoAlpha: 0, delay: 4 }), TweenMax.to(this.scene1_clouds, 1, { autoAlpha: 0, delay: 4 }), TweenMax.to(this.scene1_man, 0.1, { autoAlpha: 0, delay: 5 }),

  //SCENE 3 PARIS
  TweenMax.to(this.scene1_hut, 2, { y: -50, x: 300, rotation: 45, transformOrigin: "left 50%", delay: 5 }), TweenMax.to(this.scene2_clothes1, 0.1, { autoAlpha: 1, delay: 5 }), TweenMax.to(this.scene2_clothes1, 2, { y: -100, x: 250, rotation: 90, transformOrigin: "left 50%", delay: 5.5 }), TweenMax.to(this.scene2_clothes2, 0.1, { autoAlpha: 1, delay: 5 }), TweenMax.to(this.scene2_clothes2, 2, { y: -100, x: 250, rotation: 140, transformOrigin: "left 50%", delay: 5.8 }), TweenMax.to(this.scene2_clothes3, 0.1, { autoAlpha: 1, delay: 5 }), TweenMax.to(this.scene2_clothes3, 2, { y: -100, x: 250, rotation: 180, transformOrigin: "left 50%", delay: 6.1 }), TweenMax.to(this.scene2_bkg, 0.5, { autoAlpha: 0, delay: 8 }), TweenMax.to(this.scene2_man, 0.5, { autoAlpha: 0, delay: 8 }), TweenMax.to(this.copy1, 0.5, { autoAlpha: 0, delay: 8 }), TweenMax.to(this.copy2, 0.5, { autoAlpha: 0, delay: 8 }), TweenMax.to(this.copy3, 0.5, { autoAlpha: 0, delay: 8 }),

  //SCENE 4 LONDON TO PARIS
  TweenMax.to(this.scene4_line1, 1, { y: -35, delay: 8.5 }), TweenMax.to(this.scene4_line2, 1, { y: 35, delay: 8.5 }), TweenMax.to(this.copy4, 1, { autoAlpha: 1, scale: 1, delay: 9 }), TweenMax.to(this.scene4_line1, 1, { autoAlpha: 0, delay: 12 }), TweenMax.to(this.scene4_line2, 1, { autoAlpha: 0, delay: 12 }), TweenMax.to(this.copy4, 1, { autoAlpha: 0, delay: 12 }),

  //SCENE 5 CTA & PRICE
  TweenMax.to(this.scene5_price, 1, { autoAlpha: 1, delay: 12.5 }), TweenMax.to(this.copy5, 1, { autoAlpha: 1, delay: 12.5 }), TweenMax.to(this.cta, 1, { autoAlpha: 1, scale: 1, delay: 12.5 }), TweenMax.to(this.cta, 0.5, { scale: 1.05, repeat: 5, yoyo: true, delay: 13 })]);
  console.log(this.timeline.totalDuration());
};