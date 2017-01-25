var btn = document.getElementById("Florette-CTA");

//handles vendor prefixes in css
TweenLite.set(btn, {opacity:0});

btn.onmouseover = function() {
  TweenMax.to('#Florette-CTA-arrow', 0.3, {x:5.50, repeat:5.0, yoyo:true,ease:Linear.easeNone});
}

btn.onmouseout = function() {
  TweenLite.set('#Florette-CTA-arrow', {x:0});
}

var tlM = new TimelineMax({repeat:0});
	 
	 
	 //Labels
	 	tlM.to('.container', 0.7, {opacity:1, ease: Sine.easeIn})
	 	
		.add('sun', '0.5')
	 	.add('sun-arms', '2')
		.add('hill', '2')
		.add('Txt1', '2.6')
		.add('outro', '10')
		.add('arrow', '12')
		
		.add('eye01', '1.5')
		.add('eye02', '3.3')
		.add('eye03', '4.7')
		.add('eye04', '5.8')
		
		.to('#Florette-Sun', 4, { rotation:-20}, 'sun+=1.2')
		.to('#Florette-Sun', 4, { bezier:
	  
	  							{values:[{x:150,y:-370},
	  							{x:240,y:-400},
            		    	 	{x:250,y:-399}]}, ease: Sine.easeInOut}, 'sun')
        .to('.sun-arm-left', 2, {x:-7,y:-10, rotation:40, ease: Back.easeInOut.config(3)}, 'sun-arms')
        .to('.sun-arm-right', 2, {x:-7,y:-10, rotation:40, ease: Back.easeInOut.config(3)}, 'sun-arms')
        
        
       //Eyes
        .to('.eye-black-left', 1, {x:-1,y:-3, ease: Sine.easeInOut}, 'eye01')
        .to('.eye-black-right', 1, {x:-1,y:-3, ease: Sine.easeInOut}, 'eye01')
        
        .to('.eye-black-left', 1, {x:0,y:0, ease: Sine.easeInOut}, 'eye02')
        .to('.eye-black-right', 1, {x:0,y:0, ease: Sine.easeInOut}, 'eye02')
        
        .to('.eye-black-left', 0.5, {x:0,y:-3, ease: Sine.easeInOut}, 'eye03')
        .to('.eye-black-right', 0.5, {x:0,y:-3, ease: Sine.easeInOut}, 'eye03')
        
        .to('.eye-black-left', 1, {x:-1,y:0, ease: Sine.easeInOut}, 'eye04')
        .to('.eye-black-right', 1, {x:-1,y:0, ease: Sine.easeInOut}, 'eye04')
        
        .to('.eye-black-left', 1, {x:0,y:-2, ease: Sine.easeInOut}, 'outro+=2')
        .to('.eye-black-right', 1, {x:0,y:-2, ease: Sine.easeInOut}, 'outro+=2')
            		    	 	
        .to('#Florette-Sky', 6, {y:-100, ease: Power3.easeOut}, 'sun=-0.7')
		
		.to('#Florette-Hill-1', 8, {x:-50, ease: Sine.easeInOut}, 'hill')
		.to('#Florette-Hill-2', 8, {x:-40, ease: Sine.easeInOut}, 'hill')
		.to('#Florette-Hill-3', 8, {x:-30, ease: Sine.easeInOut}, 'hill')
		.to('#Florette-Hill-4', 8, {x:-20, ease: Sine.easeInOut}, 'hill')
		.to('#Florette-Hill-5', 8, {x:-10, ease: Sine.easeInOut}, 'hill')
		
		.from('#Florette-Made-With-Sunshine', 4.2, {y:278, ease: Power3.easeOut}, 'Txt1+=0.2')
		.from('#Florette-Packshot', 4.2, {y:190, ease: Power3.easeOut}, 'Txt1+=0.3')
		.to('#Florette-Packshot', 1, {scale:1.2, ease: Power3.easeOut}, 'Txt1+=2.5')
		.to('#Florette-Packshot', 1, {scale:1, ease: Power3.easeOut}, 'Txt1+=2.7')
		
		.to('#Florette-Made-With-Sunshine', 0.5, {opacity:0}, 'outro')
		.to('#Florette-Packshot', 1.2, {y:190, ease: Power3.easeIn}, 'outro+=0.1')
		.to('#Florette-Win', 0.7, {opacity:1}, 'outro+=0.4')
		.set('#Florette-Logo', {alpha:1}, 'outro')
		.to('#Florette-CTA', 0.5, {opacity:1, ease: Sine.easeIn}, 'outro+=0.7')
		.to('#Florette-CTA-arrow', 0.3, {x:5.50, repeat:5.0, yoyo:true,ease:Linear.easeNone, delay:0.1}, 'arrow')
		
		//.to('.container', 0.5, {opacity:0});
		