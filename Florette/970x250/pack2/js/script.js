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
	 	.add('sun-arms', '4')
		.add('hill', '2')
		.add('Txt1', '4.6')
		.add('outro', '10')
		.add('arrow', '12')
		
		.add('eye01', '1.5')
		.add('eye02', '3.3')
		.add('eye03', '4.7')
		.add('eye04', '5.8')
		
		.to('#Florette-Sun', 4, { rotation:-20}, 'sun+=1.2')
		.to('#Florette-Sun', 10, { bezier:
	  
	  							{values:[{x:150,y:-140},
	  							{x:400,y:-170},
            		    	 	{x:880,y:-160}]}, ease: Sine.easeInOut}, 'sun')
        .to('.sun-arm-left', 2, {x:-7,y:-10, rotation:40, ease: Back.easeInOut.config(3)}, 'sun-arms')
        .to('.sun-arm-right', 2, {x:-7,y:-10, rotation:40, ease: Back.easeInOut.config(3)}, 'sun-arms')
        
        .to('.sun-arm-left', 2, {x:0,y:0, rotation:0, ease: Back.easeInOut.config(3)}, 'Txt1+=1.6')
        .to('.sun-arm-right', 2, {x:0,y:0, rotation:0, ease: Back.easeInOut.config(3)}, 'Txt1+=1.6')
        
        
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
        
		.to('#Florette-Hill-All', 8, {x:-26, ease: Sine.easeInOut}, 'hill')
		
		.from('#Florette-Made-With-Sunshine', 4.2, {y:120, ease: Power3.easeOut}, 'Txt1+=0.2')
		.from('#Florette-Packshot', 4.8, {y:190, ease: Power3.easeOut}, 'Txt1+=0.6')
		
		.to('#Florette-Made-With-Sunshine', 0.5, {opacity:0}, 'outro')
		.to('#Florette-Packshot', 1.0, {y:190, ease: Power3.easeIn}, 'outro+=0.1')
		.to('#Florette-Win', 0.9, {opacity:1}, 'outro+=0.7')
		.to('#Florette-Logo', 0.5, {opacity:1}, 'outro+=1.3')
		.to('#Florette-CTA', 0.5, {opacity:1, ease: Sine.easeIn}, 'outro+=0.7')
		.to('#Florette-CTA-arrow', 0.3, {x:5.50, repeat:5.0, yoyo:true,ease:Linear.easeNone, delay:0.1}, 'arrow')
		
		//.to('.container', 0.5, {opacity:0});
		