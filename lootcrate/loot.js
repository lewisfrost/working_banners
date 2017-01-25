var ad,
banner_end = false,
clicktag,
btn_replay,
rotating = false,
box_open = false,
main_tl = new TimelineMax(),
crate_tl = new TimelineMax(),
magic_timeout,
magic_tl,
magic_interval,
stop_magic
;

pre_init = function() {
	var img = new Image();
	img.onload = function() {
		init();
	}
	img.src = 'crate.jpg';
}

init = function(){
	clicktag = document.getElementById('background_exit');
	btn_replay = document.getElementById('btn_replay');
	
	/* Animation */
	function intro_anim() {
		var intro_tl = new TimelineMax();
		intro_tl
			.set(['#crate_anim_container','#crate_particles'],{y:8})
			.add('start','+=.2')
			.to('#sparkler',.5,{repeat:2,x:-1445,ease:SteppedEase.config(17)},'start')
			.to('#sparkler_anim',1.5,{x:258,ease:Power2.easeOut},'start')
			.staggerFrom('.frame1',.7,{autoAlpha:0,ease:Power4.easeOut},.04,'start')
			.to('#sparkler_anim',.1,{autoAlpha:0,scale:.5,ease:Power2.easeIn},'start+=1.2')
			.set('#sparkler',{x:0},'start+=1.5')
			.set('#sparkler_anim',{x:70,y:95,scale:1,autoAlpha:1},'start+=1.5')
			.to('#sparkler',.5,{repeat:1,x:-1445,ease:SteppedEase.config(17)},'start+=1.5')
			.staggerFrom('.presents',1.2,{autoAlpha:0,ease:Power4.easeOut},.04,'start+=1.5')
			.to('#sparkler_anim',1,{x:180,ease:Power2.easeOut},'start+=1.5')
			.to('#sparkler_anim',.2,{autoAlpha:0,scale:.5,ease:Power2.easeIn},'start+=2')
			.to(['#txt_frame1','#txt_presents'],.5,{autoAlpha:0,ease:Power4.easeOut},'start+=4')
			.set('#sparkler',{x:0},'start+=4.7')
			.set('#sparkler_anim',{x:25,y:3,scale:1.3,autoAlpha:1},'start+=4.7')
			.to('#sparkler',.5,{repeat:2,x:-1445,ease:SteppedEase.config(17)},'start+=4.7')
			.to('#sparkler_anim',1.5,{x:220,ease:Power2.easeOut},'start+=4.7')
			.staggerFrom('.frame2_top',.7,{autoAlpha:0,ease:Power4.easOut},.04,'start+=4.7')
			.staggerFrom('.frame2_btm',.7,{autoAlpha:0,ease:Power4.easOut},.04,'start+=4.7')
			.to('#sparkler_anim',.1,{autoAlpha:0,scale:.5,ease:Power2.easeIn},'start+=5.8')
			.to('#txt_frame2',.5,{autoAlpha:0,ease:Power4.easeOut},'start+=9')
			.from('#txt_strange',1,{autoAlpha:0,scale:.7,transformOrigin:'50% 10%',ease:Power4.easOut},'start+=9')
			.from('#strange',1.3,{autoAlpha:0,scale:.3,y:-50,transformOrigin:'50% 30%',ease:Power4.easOut},'start+=9')
			.to('#smoke',1.7,{repeat:0,x:-2700,ease:SteppedEase.config(9),onStart:function(){document.getElementById('smoke_anim').style.visibility='visible';},onComplete:function(){document.getElementById('smoke_anim').style.visibility='hidden';}},'start+=9')
			.set('#smoke',{x:0},'start+=10.7')
			.to(['#strange','#txt_strange'],.1,{autoAlpha:0},'start+=12')
			.from('#txt_newt',1.3,{autoAlpha:0,scale:.7,transformOrigin:'50% 10%',ease:Power4.easOut},'start+=12')
			.from('#newt',1,{autoAlpha:0,scale:.3,y:-50,transformOrigin:'50% 30%',ease:Power4.easOut},'start+=12')
			.to('#smoke',1.7,{repeat:0,x:-2700,ease:SteppedEase.config(9),onStart:function(){document.getElementById('smoke_anim').style.visibility='visible';},onComplete:function(){document.getElementById('smoke_anim').style.visibility='hidden';}},'start+=12')
			.set('#smoke',{x:0},'start+=14.7')
			.to(['#newt','#txt_newt'],.1,{autoAlpha:0},'start+=15')
			.from('#txt_endframe',1.3,{autoAlpha:0,scale:.7,transformOrigin:'50% 10%',ease:Power4.easOut},'start+=15')
			.from('#cta',.7,{autoAlpha:0,ease:Power4.easOut},'start+=16')
			.to('#smoke',1.7,{repeat:0,x:-2700,ease:SteppedEase.config(9),onStart:function(){document.getElementById('smoke_anim').style.visibility='visible';},onComplete:function(){document.getElementById('smoke_anim').style.visibility='hidden';}},'start+=15')
			.to('#lighting',.7,{autoAlpha:0,scale:1.4,rotation:12,ease:Power4.easOut},'start+=15')
			.to('#crate_particles',.2,{autoAlpha:0},'start+=15')
			.to('#crate_anim',1,{repeat:0,x:0,ease:SteppedEase.config(7)},'start+=15')
			//.to(['#crate_anim_container','#crate_particles'],1,{y:10,ease:Power4.easeOut},'start+=15')
			.from(btn_replay,.5,{autoAlpha:0,ease:Power1.easeOut})
			.addCallback(bannerDone);
		;
		return intro_tl;
	};
	
	function crate_anim() {
		crate_tl = new TimelineMax();
		crate_tl
			.add('start','+=.2')
			.to('#crate_anim',1,{repeat:0,x:-2100,ease:SteppedEase.config(7)},'start')
			.from('#lighting',.7,{autoAlpha:0,scale:1.4,rotation:12,ease:Power4.easOut},'start+=.5')
			.from('#crate_particles',.2,{autoAlpha:0},'start+=.5')
		;
		return crate_tl;
	};
	
	function bannerDone() {
		//crate_tl.reverse();
		banner_end = true;
	}
	
	function animate() {
		main_tl
			.addLabel('start')
			.to('#loading', .2, {opacity:0, ease:Power1.easeOut}, 'start')
			.add(intro_anim(),'start')
			.add(crate_anim(),'start+=4')
		;
		//main_tl.seek(17);
		main_tl.timeScale(1.3);
	};
	
	/* MOUSE ACTIONS */
    function addlisteners(){
	    clicktag.addEventListener('click', function() {
		    //console.log('background exit click');
	    });
    	clicktag.addEventListener('mouseover', function() {
	    	if(banner_end){
            	TweenMax.to('#cta',.4,{backgroundColor:'#000',ease:Power1.easeOut});
            	TweenMax.to('#txt_cta',.4,{fill:'#fff',ease:Power1.easeOut});
            	TweenMax.to('#arrow',.4,{stroke:'#fff',ease:Power1.easeOut});
            	if(!box_open) {
	            	start_magic();
	            	TweenMax.to('#crate_particles',.2,{delay:.1,autoAlpha:1});
            		TweenMax.to('#crate_anim',.3,{repeat:0,x:-2100,ease:SteppedEase.config(7),onComplete:function(){box_open=true;}});
					TweenMax.to('#lighting',.2,{delay:.1,autoAlpha:1,scale:1,rotation:0,ease:Power4.easOut});
				}
            }
    	});
        clicktag.addEventListener('mouseout', function() {
            if(banner_end){
	            TweenMax.to('#cta',.4,{backgroundColor:'#fff',ease:Power1.easeOut});
	            TweenMax.to('#txt_cta',.4,{fill:'#ff7700',ease:Power1.easeOut});
	            TweenMax.to('#arrow',.4,{stroke:'#ff7700',ease:Power1.easeOut});
	            if(box_open) {
		            stop_magic_anim();
		            TweenMax.to('#crate_particles',.2,{autoAlpha:0});
	            	TweenMax.to('#crate_anim',.3,{repeat:0,x:0,ease:SteppedEase.config(7),onComplete:function(){box_open=false;}});
					TweenMax.to('#lighting',.2,{autoAlpha:0,scale:1.4,rotation:12,ease:Power4.easOut});
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
	    	main_tl.restart();
    	});
    };
    
    animate();
    addlisteners();
    var magic_to = setTimeout(function(){
	    start_magic();
	    clearTimeout(magic_to);
    }, 500);
}

window.onload = pre_init();

function getRandom(min,max) {
	return min + Math.random() * (max - min);
}

function removeElement(node) {
    node.parentNode.removeChild(node);
}

function start_magic() {
	/* MAGIC */
	function insert_magic(num) {
		for(i=0;i<10;i++) {
			magic_timeout = setTimeout(move_magic, Math.random()*num+'e'+num);
		}
	}
	function move_magic() {
		console.log('crate magic!');
		var p = document.createElement('DIV');
		var container = document.getElementById('crate_particles');
		var container_height = container.offsetHeight;
		p.className = 'particle';
		p.style.opacity = 0;
		p.style.left = getRandom(80,210)+'px';
		p.style.bottom = '-20px';
		container.appendChild(p);
		magic_tl = new TimelineLite();
		magic_tl
			.set(p,{opacity:getRandom(.8,1), scale:getRandom(.1,.4)})
			.to(p,getRandom(2,5),{bezier:{type:'soft',values:[{x:getRandom(-50,50)},{x:getRandom(-50,50)}],autoRotate:false},autoAlpha:0,bottom:container_height-15,ease:Power0.easeNone,onComplete:hide_magic,onCompleteParams:['{self}']})
		;
	}
	magic_interval = setInterval(insert_magic, 500,3);
	stop_magic = setTimeout(function() { console.log('stop magic'); clearInterval(magic_interval); clearTimeout(magic_timeout); clearTimeout(stop_magic); }, 12000);	
	
	function hide_magic(magic) {
		var to_remove = magic.target;
		removeElement(to_remove);
	}
	/* END MAGIC */
}

function stop_magic_anim() {
	console.log('stop magic');
	clearInterval(magic_interval);
	clearTimeout(magic_timeout);
	clearTimeout(stop_magic);
}