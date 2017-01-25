'use strict';

/**
 * Run the animation functions.
 */
Banner.prototype.start = function() {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/bg.jpg',
    'images/footer.png',
    'images/cta.jpg',
    'images/copy.png',
    'images/bar.png',
    'images/new.png'
  ];

  var _this = this;
  this.preloadImages(this.images, function() {
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
Banner.prototype.createElements = function() {
  this.overlay = this.smartObject({
    backgroundColor: '#000',
    height: this.bannerHeight,
    width: this.bannerWidth,
    parent: this.banner,
    zIndex: 500
  });

  this.bg = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    parent: this.banner
  });

  this.footer = this.smartObject({
    backgroundImage: 'images/footer.png',
    top: 'none',
    parent: this.banner,
    zIndex: 999
  });

  this.copy = this.smartObject({
    backgroundImage: 'images/copy.png',
    top: 'none',
    parent: this.banner
  });

  this.bar = this.smartObject({
    backgroundImage: 'images/bar.png',
    left: 'none',
    parent: this.banner
  });

  this.cta = this.smartObject({
    backgroundImage: 'images/cta.jpg',
    parent: this.banner
  });

  this.new = this.smartObject({
    backgroundImage: 'images/new.png',
    parent: this.banner,
    zIndex: 999
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function() {
  this.bg.set({left: '50%', marginLeft: -this.bg.offsetWidth / 2});
  this.bg.set({top: '50%', marginTop: -this.bg.offsetHeight / 2});
  this.bg.set({autoAlpha: 0});
  this.footer.set({bottom: 0});
  this.copy.set({autoAlpha: 0, bottom: 60, left: 10});
  this.bar.set({autoAlpha: 0, right: 10, top: 24});
  this.cta.set({autoAlpha: 0});
  this.new.set({top: 1, left: 1});
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function() {
  TweenLite.to('.preloader', 1, {autoAlpha: 0});
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function() {
  var timeline = new TimelineLite({onComplete: loop})
    .addLabel('start', 0)
    .to(this.overlay, 0.1, {autoAlpha: 0, ease: Quad.easeOut, delay: 0.5})
    .call(flicker, [this.bg, 0.05, 6, 2, 0])
    .to(this.overlay, 0.1, {autoAlpha: 0, ease: Quad.easeOut, delay: 0.1})
    .to(this.overlay, 0.1, {autoAlpha: 0.5, ease: Quad.easeOut})
    .to(this.overlay, 0.1, {autoAlpha: 0, ease: Quad.easeOut, delay: 0.1})
    .call(flicker, [this.copy, 0.02, 14, 1, 0])
    .add([
      TweenLite.to(this.bg, 0.1, {autoAlpha: 1, ease: Quad.easeOut}),
      TweenLite.to(this.copy, 0.01, {autoAlpha: 1, ease: Quad.easeOut, delay: 0.5}),
      TweenLite.to(this.bar, 0.01, {autoAlpha: 1, ease: Quad.easeOut, delay: 0.5})
    ])
    .set({}, {}, '+=2')
    .set(this.cta, {autoAlpha: 1, ease: Quad.easeOut})
    .call(flicker, [this.cta, 0.01, 8, 1, 0])
    .call(flicker, [this.cta, 0.03, 4, 6, 0])
    .set(this.cta, {autoAlpha: 1, ease: Quad.easeOut, delay: 0.7})
    .to(this.overlay, 0.1, {autoAlpha: 0, ease: Quad.easeOut})
    .set({}, {}, '+=5')
    .to(this.overlay, 1, {autoAlpha: 1, ease: Quad.easeOut});

  function loop() {
    timeline.gotoAndPlay('start');
  }

  function flicker(el, duration, flickers, amount, delay) {
    for (var i = 0; i < flickers; i++) {
      var flickerAmount = amount / (i + 1);
      if (i % 2 == 0) flickerAmount = -flickerAmount;
      if (i == flickers - 1) flickerAmount = 0;
      TweenLite.to(el, duration, {autoAlpha: flickerAmount, ease:Cubic.easeOut, delay: delay + (duration * i), overwrite: 0});
    }
  }
};
