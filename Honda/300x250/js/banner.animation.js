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
    'images/logo.png',
    'images/copy-a.png',
    'images/cta-copy.png',
    'images/cta-arrows.png'
  ];

  var _this = this;
  this.preloadImages(this.images, function() {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.fuelEvents();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function() {
  this.overlay = this.smartObject({
    backgroundColor: '#fff',
    top: 1,
    left: 1,
    height: this.bannerHeight - 2,
    width: this.bannerWidth - 2,
    parent: this.banner,
    zIndex: 999
  });

  this.bg = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    parent: this.banner
  });

  this.logo = this.smartObject({
    backgroundImage: 'images/logo.png',
    parent: this.banner
  });

  this.copy = this.smartObject({
    parent: this.banner
  });
    this.copyA = this.smartObject({
      backgroundImage: 'images/copy-a.png',
      parent: this.copy
    });

  this.cta = this.smartObject({
    parent: this.banner
  });
    this.ctaCopy = this.smartObject({
      backgroundImage: 'images/cta-copy.png',
      parent: this.cta
    });
    this.ctaArrows = this.smartObject({
      backgroundImage: 'images/cta-arrows.png',
      parent: this.cta
    });

  this.fuelFiguresButton = this.smartObject({
    top: 'none',
    parent: this.banner
  });

  this.fuelFigures = this.smartObject({
    width: this.bannerWidth,
    top: this.bannerHeight,
    parent: this.banner,
    zIndex: 20
  });

    this.fuelFiguresParagraph = this.smartObject({
      backgroundColor: 'rgba(0,0,0,0.8)',
      parent: this.fuelFigures
    });

    this.fuelFiguresClose = this.smartObject({
      parent: this.fuelFigures
    });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function() {
  this.overlay.set({autoAlpha: 0});

  this.bg.set({left: '50%', marginLeft: -this.bg.offsetWidth / 2});
  this.bg.set({top: '50%', marginTop: -this.bg.offsetHeight / 2});
  this.bg.set({autoAlpha: 0, scale: 0.77});

  this.logo.centerHorizontal();
  this.logo.set({top: 14});

  this.copy.centerHorizontal();
  this.copy.set({top: 51});
  this.copyA.set({autoAlpha: 0});

  this.cta.centerHorizontal();
  this.cta.set({top: 200, autoAlpha: 0});
  this.ctaCopy.set({x: -6});
  this.ctaArrows.centerHorizontal();
  this.ctaArrows.set({x: 82, y: 15});

  this.fuelFiguresButton.set({autoAlpha: 0, left: 8, bottom: 5});
  this.fuelFiguresButton.innerHTML = 'Fuel figures';
  this.fuelFiguresParagraph.innerHTML = '<p>Model shown is a Jazz 1.3 i-VTEC Elegance in Sunset Orange with 16" alloy wheels, Manual Transmission and Honda CONNECT with optional Garmin Navigation. Fuel economy &amp; Emissions: Combined 5.1, Urban 6.2, Extra urban 4.5 l/100km. CO<sub>2</sub> 120g/km. Figures sourced from EU-regulated test results. Provided for comparison. Actual figures may vary.</p>';
  this.fuelFiguresClose.set({top: 2, left: this.bannerWidth - 40});
  this.fuelFiguresClose.innerHTML = 'close x';
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
  this.tl = new TimelineLite()
    .addLabel('start', 0)
    .add([
      TweenLite.to(this.overlay, 0.5, {autoAlpha: 0, delay: 1}),
      TweenLite.to(this.bg, 2, {autoAlpha: 1, delay: 1}),
      TweenLite.to(this.bg, 5, {scale: 0.9, y: 20, ease: Quad.easeInOut}),
      TweenLite.to(this.copyA, 2, {autoAlpha: 1, delay: 3}),
      TweenLite.to(this.cta, 2, {autoAlpha: 1, delay: 4}),
      TweenLite.to(this.fuelFiguresButton, 1, {autoAlpha: 1, delay: 5})
    ])
    .call(arrowAnimation, [this.ctaArrows, 0.6])

  function arrowAnimation(el, duration) {
    var tl = new TimelineLite()
      .to(el, duration, {autoAlpha: 0})
      .to(el, duration, {autoAlpha: 1})
      .to(el, duration, {autoAlpha: 0})
      .to(el, duration, {autoAlpha: 1})
      .to(el, duration, {autoAlpha: 0})
      .to(el, duration, {autoAlpha: 1})
      .to(el, duration, {autoAlpha: 0})
      .to(el, duration, {autoAlpha: 1});
    return tl;
  }
};

Banner.prototype.fuelEvents = function() {
  var timeline = this.tl;
  var btn = this.fuelFiguresButton;
  var fuel = this.fuelFigures;
  var close = this.fuelFiguresClose;
  var para = this.fuelFigures.querySelector('p');

  this.fuelFiguresButton.addEventListener('click', function onClick(e) {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    TweenLite.to(fuel, 0.5, {y: -para.offsetHeight});
    timeline.paused(true);
  });

  this.fuelFigures.addEventListener('click', function onClick(e) {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    TweenLite.to(fuel, 0.5, {y: 0});
    timeline.paused(false);
  });
};
