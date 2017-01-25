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
	img.src = 'bear.png';
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
			.from('#bg',3,{x:-25,ease:Power1.easeOut},'start')
			.from('#scene',3,{x:-120,ease:Power1.easeOut},'start')
			.to('#bear',3.75,{repeat:3,x:-2375,ease:SteppedEase.config(19)},'start')
			.from('#side_bar',2,{x:130,ease:Power4.easeOut},'start+=6')
			.from('#quote_wrapper',.7,{width:1,x:48,ease:Power4.easeOut},'start+=6.2')
			.from('#quote_wrapper',1,{height:1,y:49,ease:Power4.easeOut},'start+=7')
			.from('#quote',1,{y:-49,ease:Power4.easeOut},'start+=7')
			.staggerFrom('.quotes',1,{autoAlpha:0,ease:Power4.easeOut},1.5,'start+=7.5')
			.staggerFrom('.offer_copy',1,{autoAlpha:0,y:10,ease:Power4.easeOut},.7,'start+=10')
			.from('#arrowOffer',1,{autoAlpha:0,x:-10,ease:Power4.easeOut},'start+=11')
			.from('#cta',.8,{y:40,ease:Power4.easeOut},'start+=12')
			//.from('#btn_replay',.5,{autoAlpha:0,ease:Power1.easeOut})
			.addCallback(function(){banner_end = true;},'start+=12.8')
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
	
	/* SMOKE */
	var smoke_timeout;
	var smoke_tl;
	
	function insert_smoke(num) {
		for(i=0;i<70;i++) {
			smoke_timeout = setTimeout(move_smoke, Math.random()*num+'e'+num);
		}
	}
	function move_smoke() {
		console.log('smoking!');
		var p = document.createElement('DIV');
		var container = document.getElementById('smoke');
		var container_height = container.offsetHeight;
		p.className = 'particle';
		p.style.opacity = 0;
		p.style.left = getRandom(-80,-20)+'px';
		p.style.bottom = -80+'px';
		container.appendChild(p);
		var smoke_tl_init = new TimelineLite();
		smoke_tl_init
			.set(p,{opacity:getRandom(.1,.4), scale:getRandom(.07,.2)})
			.to(p,getRandom(2,7),{bezier:{type:'soft',values:[{x:getRandom(-50,50)},{x:getRandom(-50,50)}], autoRotate:true}, bottom:container_height-100, autoAlpha:0, ease:Power0.easeNone, onComplete:hide_smoke, onCompleteParams:['{self}']})
		;
	}
	function initial_smoke() {
		var p = document.createElement('DIV');
		var container = document.getElementById('smoke');
		var container_height = container.offsetHeight;
		p.className = 'particle';
		p.style.opacity = 0;
		p.style.left = getRandom(-100,-20)+'px';
		p.style.bottom = getRandom(-120,0)+'px';
		container.appendChild(p);
		var smoke_tl_init = new TimelineLite();
		smoke_tl_init
			.set(p,{opacity:getRandom(.1,.5), scale:getRandom(.1,.3)})
			.to(p,getRandom(4,8),{bezier:{type:'soft',values:[{x:getRandom(-50,50)},{x:getRandom(-50,50)}], autoRotate:true}, bottom:container_height-125, autoAlpha:0, ease:Power0.easeNone, onComplete:hide_smoke, onCompleteParams:['{self}']})
		;
	}
	
	for(i=0;i<130;i++) {
		initial_smoke();
	}
	var smoke_interval = setInterval(insert_smoke, 1500,3);
	var stop_smokeing = setTimeout(function() { console.log('stop smoking'); clearInterval(smoke_interval); clearTimeout(smoke_timeout); clearTimeout(stop_smokeing) }, 7000);	
	
	function hide_smoke(smoke) {
		var to_remove = smoke.target;
		removeElement(to_remove);
	}
	/* END SMOKE */
	
	
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

function getRandom(min,max) {
	return min + Math.random() * (max - min);
}

function removeElement(node) {
    node.parentNode.removeChild(node);
}