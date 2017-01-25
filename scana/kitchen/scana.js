var ad,
banner_end = false,
clicktag,
btn_replay,
rotating = false,
main_tl = new TimelineMax(),
flipping = false
;

pre_init = function() {
	var img = new Image();
	img.id = 'bear';
	img.onload = function() {
		document.getElementById('bear_wrapper').appendChild(img);
		init();
	}
	img.src = 'bear.jpg';
/*
	var img2 = new Image();
	img2.id = 'bear_bg';
	img2.onload = function() {
		document.getElementById('bear_bg_wrapper').appendChild(img2);
	}
	img2.src = 'bear_bg.png';
*/
}

init = function(){
	clicktag = document.getElementById('background_exit');
	btn_replay = document.getElementById('btn_replay');
	
	/* Animation */
	function intro_anim() {
		var intro_tl = new TimelineMax();
		intro_tl
			.set('#arrowIn',{x:-10})
			.add('start')
			.from('#scene',3,{x:-120,ease:Power1.easeOut},'start')
			.from('#counter',2.6,{x:-120,ease:Power1.easeOut},'start')
			.to(['#bear','#bear_bg'],5,{repeat:2,x:-3910,ease:SteppedEase.config(23)},'start')
			.from('#side_bar',2,{x:130,ease:Power4.easeOut},'start+=6')
			.from('#quote_wrapper',.7,{width:1,x:51,ease:Power4.easeOut},'start+=6.2')
			.from('#quote_wrapper',1,{height:1,y:37,ease:Power4.easeOut},'start+=7')
			.from('#quote',1,{y:-37,ease:Power4.easeOut},'start+=7')
			.staggerFrom('.offer_copy',1,{autoAlpha:0,y:10,ease:Power4.easeOut},.7,'start+=8')
			.from('#cta',.8,{y:40,ease:Power4.easeOut},'start+=10')
			//.from('#btn_replay',.5,{autoAlpha:0,ease:Power1.easeOut})
			.addCallback(function(){banner_end = true;},'start+=10.8')
		;
		return intro_tl;
	};
	
	function animate() {
		main_tl = new TimelineMax();
		main_tl
			.addLabel('start')
			.to('#loading', .2, {autoAlpha:0, ease:Power1.easeOut},'start')
			.add(intro_anim(),'start')
		;
		//main_tl.seek(11);
		main_tl.timeScale(2);
	};
	
	
	/* MOUSE ACTIONS */
    function addlisteners(){
	    clicktag.addEventListener('click', function() {
		    console.log('background exit click');
	    });
    	clicktag.addEventListener('mouseover', function() {
            if(banner_end){
	            flipping = true;
            	var over_tl = new TimelineMax();
					over_tl
						.add('start')
						.to('#ctaTxt',.3,{x:7,ease:Power4.easeOut},'start')
						.to('#arrowIn',.3,{x:0,ease:Power4.easeOut},'start+=.1')
						.to('#arrowOut',.3,{x:10,ease:Power4.easeOut,onStart:function(){
							flipping = false;
						}},'start')
					;
            }
    	});
        clicktag.addEventListener('mouseout', function() {
            if(banner_end){
	            if(!flipping) {
	            	var out_tl = new TimelineMax();
						out_tl
							.add('start')
							.to('#ctaTxt',.3,{x:0,ease:Power4.easeOut},'start')
							.to('#arrowIn',.3,{x:-10,ease:Power4.easeOut},'start')
							.to('#arrowOut',.3,{x:0,ease:Power4.easeOut},'start+=.1')
						;
				}
           }
   	 	});
   	 	btn_replay.addEventListener('mouseover', function() {
	    	if(!rotating){
		    	rotating = true;
		    	TweenMax.set(btn_replay,{rotation:0});
            	TweenMax.to(btn_replay,.5,{rotation:360,ease:Power1.easeOut,onComplete:function(){rotating = false;}});
            }
    	});
    	btn_replay.addEventListener('click', function() {
	    	banner_end = false;
	    	main_tl.restart();
    	});
    };
    
    animate();
    addlisteners();
}

window.onload = pre_init();