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
    'images/crowd.png',
    'images/days.png',
    'images/line1.png',
    'images/line2.png',
    'images/logo.png',
    'images/play.png',
    'images/player1.png',
    'images/players.png',
    'images/sun.png',
    'images/espn.png'
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
  this.black = this.smartObject({
    backgroundColor: '#000',
    height: this.bannerHeight,
    width: this.bannerWidth,
    parent: this.banner,

  });

  this.black1 = this.smartObject({
    backgroundColor: '#000',
    height: this.bannerHeight,
    width: this.bannerWidth,
    parent: this.banner,
    zIndex:6
  });

  this.red1 = this.smartObject({
    backgroundColor: '#EC174C',
    height: this.bannerHeight,
    width: this.bannerWidth,
    parent: this.banner,
    zIndex:2
  });

  this.red2 = this.smartObject({
    backgroundColor: '#EC174C',
    height: this.bannerHeight,
    width: this.bannerWidth,
    parent: this.banner,
    zIndex:4
  });

  this.blue1 = this.smartObject({
    backgroundColor: '#006BB5',
    height: this.bannerHeight,
    width: this.bannerWidth,
    parent: this.banner,
    zIndex:1
  });

   this.blue2 = this.smartObject({
    backgroundColor: '#006BB5',
    height: this.bannerHeight,
    width: this.bannerWidth,
    parent: this.banner,
    zIndex:3
  });

  this.blue3 = this.smartObject({
    backgroundColor: '#006BB5',
    height: this.bannerHeight,
    width: this.bannerWidth,
    parent: this.banner,
    zIndex:5
  });

  this.boarder = this.smartObject({
    backgroundImage: 'images/border.png',
    parent: this.banner,
    zIndex:5
  });

  this.crowd = this.smartObject({
    backgroundImage: 'images/crowd.png',
    parent: this.banner
  });

  this.channel = this.smartObject({
    backgroundImage: 'images/espn.png',
    parent: this.banner
  });

  this.days = this.smartObject({
    backgroundImage: 'images/days.png',
    parent: this.banner
  });

  this.line1 = this.smartObject({
    backgroundImage: 'images/line1.png',
    top: 'none',
    parent: this.banner,
    zIndex: 999
  });

  this.line2 = this.smartObject({
    backgroundImage: 'images/line2.png',
    parent: this.banner
  });

  this.logo = this.smartObject({
    backgroundImage: 'images/logo.png',
    parent: this.banner,
    zIndex:50
  });

  this.play = this.smartObject({
    backgroundImage: 'images/play.png',
    parent: this.banner,
    zIndex:51
  });

  this.player1 = this.smartObject({
    backgroundImage: 'images/player1.png',
    parent: this.banner,
    zIndex:2
  });

  this.players = this.smartObject({
    backgroundImage: 'images/players.png',
    parent: this.banner
  });

  this.sund = this.smartObject({
    backgroundImage: 'images/sun.png',
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function() {

  
  this.black.set({autoAlpha: 1});
  this.black1.set({autoAlpha: 0});
  this.red1.set({autoAlpha: 0});
  this.red2.set({autoAlpha: 0});
  this.blue1.set({autoAlpha: 0});
  this.blue2.set({autoAlpha: 0});
  this.blue3.set({autoAlpha: 0});

  this.boarder.set({autoAlpha:1});


  this.crowd.set({autoAlpha: 0, top:122});
  this.days.set({autoAlpha: 0, top:110,left:100});
  this.line1.centerHorizontal();
  this.line1.set({autoAlpha: 0, top: 15, scale:50});
  this.line2.centerHorizontal();
  this.line2.set({autoAlpha: 0, top: 26});
  this.channel.set({autoAlpha: 0, top: 30, width:0, left:185});
  this.logo.set({autoAlpha: 1, top: 70,left:124});
  this.play.set({autoAlpha: 0, left: 137, top: 72, scale:50});
  this.player1.set({autoAlpha: 0,left: 7, top: 66, scale:0.2});
  this.players.set({autoAlpha: 0,left: 0, top: 1});
  this.sund.set({autoAlpha: 0,top:110,left:110});
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
  this.tl = new TimelineMax({repeat:3})
    .addLabel('start', 0)
    .add([
      TweenLite.to(this.days, 0.2, {autoAlpha:1, delay:1.5, left:175}),
      TweenLite.to(this.sund, 0.2, {autoAlpha:1, delay:1.5, left:66}),
      TweenLite.to(this.crowd, 0.2, {autoAlpha:1, delay:2.5}),
      TweenLite.to(this.logo, 0.2, {autoAlpha:0, delay:3.5}),
      TweenLite.to(this.sund, 0.2, {autoAlpha:0, delay:3.5}),
      TweenLite.to(this.days, 0.2, {autoAlpha:0, delay:3.5}),
      TweenLite.to(this.line1, 0.2, {autoAlpha:1, scale: 1, ease: Quad.easeIn, delay:3.5}),
      TweenLite.to(this.player1, 0.2, {autoAlpha:1, scale:1, delay:4}),
      TweenLite.to(this.players, 0.2, {autoAlpha:1, delay:4.5}),
      TweenLite.to(this.line1, 0.2, {autoAlpha:1, scale:0, delay:5.5}),
      TweenLite.to(this.line2, 0.2, {autoAlpha:1, delay:6}),
      TweenLite.to(this.player1, 0.2, {autoAlpha:0, delay:8}),
      TweenLite.to(this.players, 0.2, {autoAlpha:0, delay:8}),
      TweenLite.to(this.line2, 0.2, {autoAlpha:0, delay:8}),
      TweenLite.to(this.boarder, 0.2, {autoAlpha:0, delay:8}),
      TweenLite.to(this.crowd, 0.2, {autoAlpha:0, delay:8}),
      TweenLite.to(this.logo, 0.2, {autoAlpha:1,left:80, delay:8.6}),
      TweenLite.to(this.play, 0.2, {autoAlpha:1, scale:1,delay:8.6}),
      TweenLite.to(this.logo, 0.2, {scale:1.1, delay:8.8}),
      TweenLite.to(this.logo, 0.2, {scale:1, delay:9}),
      TweenLite.to(this.blue1, 0.2, {autoAlpha:1,delay:9.3}),
      TweenLite.to(this.red1, 0.2, {autoAlpha:1,delay:9.6}),
      TweenLite.to(this.blue2, 0.3, {autoAlpha:1,delay:9.9}),
      TweenLite.to(this.red2, 0.3, {autoAlpha:1,delay:10.2}),
      TweenLite.to(this.blue3, 0.2, {autoAlpha:1,delay:10.5}),
      TweenLite.to(this.black1, 0.2, {autoAlpha:1,delay:10.8}),
      TweenLite.to(this.play, 0.2, {left:700,delay:10.9}),
      TweenLite.to(this.logo, 0.2, {left:124, delay:10.9}),
    ])

};
