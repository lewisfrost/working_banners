'use strict';

/**
 * Run the animation functions.
 */
Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/logo.png',
    'images/bkg.png',
    'images/bkg_bottom.png',
    'images/white_bkg.png',
    'images/train.png',
    'images/eye.png',
    'images/eye_top.png',
    'images/eye_bottom.png',
    'images/top_eyelash.png',
    'images/eye_overlay.png',
    'images/scene1_bkg.png',
    'images/scene1_bus.png',
    'images/copy1.png',
    'images/scene2_bkg.png',
    'images/copy2.png',
    'images/scene5_bkg.png',
    'images/scene5_price.png',
    'images/cta.png',
    'images/copy5.png',
    'images/eurostar.png',
    'images/eurostar_yellow.png',

  ];

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
  this.bkg = this.smartObject({
    backgroundImage: 'images/bkg.png',
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
    backgroundImage: 'images/scene1_bkg.png',
    parent: this.banner
  });
  this.copy1 = this.smartObject({
    backgroundImage: 'images/copy1.png',
    parent: this.banner
  });
  this.scene1_bus = this.smartObject({
    backgroundImage: 'images/scene1_bus.png',
    parent: this.banner
  });
  this.scene2_bkg = this.smartObject({
    backgroundImage: 'images/scene2_bkg.png',
    parent: this.banner
  });
  this.copy2 = this.smartObject({
    backgroundImage: 'images/copy2.png',
    parent: this.banner
  });
  this.scene5_bkg = this.smartObject({
    backgroundImage: 'images/scene5_bkg.png',
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
  this.eye = this.smartObject({
    backgroundImage: 'images/eye.png',
    parent: this.banner
  });
  this.top_eyelash = this.smartObject({
    backgroundImage: 'images/top_eyelash.png',
    parent: this.banner
  });
  this.eye_overlay = this.smartObject({
    backgroundImage: 'images/eye_overlay.png',
    parent: this.banner
  });
  this.eye_top = this.smartObject({
    backgroundImage: 'images/eye_top.png',
    parent: this.banner
  });
  this.eye_bottom = this.smartObject({
    backgroundImage: 'images/eye_bottom.png',
    parent: this.banner
  });
  this.bkg_bottom = this.smartObject({
    backgroundImage: 'images/bkg_bottom.png',
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.logo.set({left:17, top:66,zIndex:20});
  this.white_bkg.set({left:150, top:0, zIndex:20})

  this.bkg.set({zIndex:9})
  this.eurostar.set({top:210, left:95, autoAlpha:0, zIndex:20})
  this.eurostar_yellow.set({top:210, left:95, autoAlpha:0, zIndex:20})


  this.top_eyelash.set({zIndex:15})
  this.eye_top.set({left:-70, top:-32, zIndex:14})
  this.eye_bottom.set({left:0, top:57, zIndex:14})
  this.bkg_bottom.set({left:0, top:150, zIndex:14})
  this.eye_overlay.set({autoAlpha:0, top:-30,left:10, zIndex:14})
  this.eye.set({left:-90, top:-60, zIndex:19})

  this.copy1.set({autoAlpha:0, top: 65, left:65, zIndex:20})
  this.train.set({top:105, left:-14000, zIndex:13})


  //SCENE 1 LONDON 
  this.scene1_bus.set({top:85, left:250, zIndex:12})
  this.scene1_bkg.set({top:0,left:-2, zIndex:11})


  //SCENE 2 OCEAN
  this.scene2_bkg.set({top:0,left:-2, autoAlpha:0, zIndex:11})
  this.copy2.set({autoAlpha:0, top:70, left:60, zIndex:20})
 
  //SCENE 5 CTA & PRICE
  this.scene5_price.set({autoAlpha:0, top:80, left:35, zIndex: 7})
  this.copy5.set({autoAlpha:0, top:20, left:90, zIndex: 7})
  this.cta.set({autoAlpha:0, scale:0.4, top:165, left:90, zIndex: 7})

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

  this.timeline = new TimelineMax({repeat: 1})
    .addLabel('start', 0)
    .add([
      TweenMax.to(this.logo, 1.5, { left:300, delay: 1 }),
      TweenMax.to(this.white_bkg, 2.6, { left:600, delay: 1 }),
      
      TweenMax.to(this.eurostar, 1, {autoAlpha:1, delay: 1 }),
      TweenMax.to(this.copy1, 1, { autoAlpha: 1, delay: 1 }),


      TweenMax.to(this.copy1, 1, { autoAlpha: 0, delay: 3 }), 
      TweenMax.to(this.eye, 1, { y:-300, delay: 3.5 }), 


      TweenMax.to(this.scene1_bus, 4, {left:150, delay: 3.5 }),
      TweenMax.to(this.train, 7,{ left:150, delay: 3.5,  ease: Power2.easeOut, y: 0}),
      TweenMax.to(this.scene1_bkg, 1, { autoAlpha: 0, delay: 7 }),
      TweenMax.to(this.scene1_bus, 1, {autoAlpha:0, delay: 7}),
      TweenMax.to(this.eye, 1, { y:0, delay: 6 }), 
      TweenMax.to(this.train, 0.1,{ left:-7000, delay: 7.5,  ease: Power2.easeOut, y: 0}),


      TweenMax.to(this.copy2, 1, { autoAlpha: 1, delay: 7}),
      TweenMax.to(this.eye, 1, { y:-300, delay: 10 }), 
      TweenMax.to(this.copy2, 1, { autoAlpha: 0, delay: 9}),
      TweenMax.to(this.scene2_bkg, 1, { autoAlpha: 1, delay: 8}),
      TweenMax.to(this.train, 5,{ left:150, delay: 8,  ease: Power2.easeOut, y: 0}),

      TweenMax.to(this.eye, 1, { autoAlpha: 0, delay: 13}),
      TweenMax.to(this.train, 1, { autoAlpha: 0, delay: 13}),
      TweenMax.to(this.eye_bottom, 1, { autoAlpha: 0, delay: 13}),
      TweenMax.to(this.eye_top, 1, { autoAlpha: 0, delay: 13}),
      TweenMax.to(this.scene2_bkg, 1, { autoAlpha: 0, delay: 13}),
      TweenMax.to(this.top_eyelash, 1, { autoAlpha: 0, delay: 13}),
      TweenMax.to(this.bkg, 1, { autoAlpha: 0, delay: 13}),
      TweenMax.to(this.eurostar, 1, { autoAlpha: 0, delay: 13}),
      TweenMax.to(this.bkg_bottom, 1, { autoAlpha: 0, delay: 13}),

      //SCENE 5 CTA & PRICE
      TweenMax.to(this.scene5_price, 1, {autoAlpha:1, delay: 14}),
      TweenMax.to(this.eurostar_yellow, 1, {autoAlpha:1, delay: 14}),
      TweenMax.to(this.copy5, 1, {autoAlpha:1, delay: 14}),
      TweenMax.to(this.cta, 1, {autoAlpha:1, scale:1, delay: 14}),
      TweenMax.to(this.cta, 0.5, {scale: 1.05, repeat:5, yoyo:true, delay: 14.5}),
    ])
      console.log(this.timeline.totalDuration());

};
