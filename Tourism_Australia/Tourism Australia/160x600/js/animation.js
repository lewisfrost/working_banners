var GET=function(e){var t,l,n,s,i,r,a=[];for(e.indexOf("#")>0&&(e=e.split("#"),e="#"+e[e.length-1]),e=e.split(" "),r={id:function(e){return document.getElementById(e)},get:function(e,t,l){var n=0,s=[],i="class"===e?"getElementsByClassName":"getElementsByTagName";if(l.length)for(;l[n];)Array.prototype.push.apply(s,Array.prototype.slice.call(l[n++][i](t)));else s=l[i](t);return 1===s.length?s[0]:s}},l=e.length,n=document,t=0;l>t;t++)if(s=e[t],i=n,0===s.indexOf("#"))n=r.id(s.split("#")[1]);else if(s.indexOf(".")>-1)if(s=s.split("."),s[0])if(i=r.get("elements",s[0],i),i.length){for(t=0;i[t];t++)i[t].className.indexOf(s[1])>-1&&a.push(i[t]);n=a}else n=i.className.indexOf(s[1])>-1?i:[];else n=r.get("class",s[1],i);else n=r.get("elements",s,i);return n};

var bgExit = document.getElementById('innerwrapper');
var replay = document.getElementById('replay');

var tl;

//Wait for the content to load to call the start od the ad
window.onload = function(){
	if (Enabler.isInitialized()) {
	  enablerInitHandler();
	} else {
	  Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
};

//Function confirm if the creative is visible	
enablerInitHandler = function(e) {
	if(Enabler.isVisible()) {
	   startAd();
    } else {
	   Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAd);
    } 
};

//Add Event Listeners
addListeners = function(e) {
	bgExit.addEventListener('touchEnd', bgExitHandler, false);
	bgExit.addEventListener('click', bgExitHandler, false);
};

//Add exits
bgExitHandler = function(e) {	
	Enabler.exit('Clickthrough');
};




startAd = function(e) {
	 ad.init();
};

window.onload = function(){
	startAd();
};

replay.onclick = function(){
		    tl.restart();
};


//attach json
var d,
ad = {
	elems: {
	
	},
	init: function(){
		d = this.elems;
		this.data();
		this.animation();
	},
	data: function(){
		
	},
	animation: function(){
		tl = new TimelineLite({onComplete:function() {
			this.pause();
		}})
		//1st frame
		tl
		.to('#bg', 5, {right:'-190px', ease: Sine.easeOut})
		.to('#logo-white', 1, {opacity:'1', ease:Quart.easeOut}, 0.5)
		.to('#partner-logo', 1, {opacity:'1', ease:Quart.easeOut}, 0.5)
		.to('#title1', 1, {opacity:'1', left:'0px', ease: Back.easeOut}, 0.3)
		.to('#title1', 0.5, {opacity:'0', ease: Back.easeOut}, 3)
		
		.to('#title2', 1.0, {opacity:'1', left:'0px', ease: Back.easeOut},3.5)
		.to('#title2', 0.5, {opacity:'0', ease: Back.easeOut}, "+=1")
		.to('#title3', 1.0, {opacity:'1', left:'0px', ease: Back.easeOut})
		.to(['#logo-white','#partner-logo', '#title3'], 1, {opacity:'0', ease:Quart.easeOut}, "+=0.9")
		.to('#whiteboard', 1, {opacity:'0.75', ease: Back.easeOut})
		
		.to('#bg', 4, {right:'-30px', ease: Sine.easeIn}, 5)
		
		.to(['#logo-white2','#partner-logo2'], 1, {opacity:'1', ease:Quart.easeOut}, "+=0.2")
		.to(['#title4','#tcs'], 1, {opacity:'1', ease:Quart.easeOut}, "+=0.2")
		.to('.btn1', 1, {opacity:'1', ease: Back.easeOut}, "+=0.1")
		.to('#replay', 1, {opacity:'1', ease: Back.easeOut}, "+=0.1")
		console.log("duration is: " + tl.duration());			
	}

}
addListeners();