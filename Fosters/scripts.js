var adDiv;

var pictoMen = document.getElementById('forMen');
var text1 = document.getElementById('text_1');
var dort = document.getElementById('dort');

var text2 = document.getElementById('text_2');
var text2_1 = document.getElementById('text_2_1');

var dunya = document.getElementById('dunya');
var van = document.getElementById('van');
var line = document.getElementById('line');

var text3 = document.getElementById('text_3');
var text3_1 = document.getElementById('text_3_1');

var text6 = document.getElementById('text_5');
var text6_1 = document.getElementById('text_5_1');

var text4 = document.getElementById('text_4');
var onAware = document.getElementById('on');
var ctaBtn = document.getElementById('cta');



//Function to run with any animations starting on load, or bringing in images etc
function init(){

    container = document.getElementById('content');
    content = document.getElementById('wrapper');     
    bgExit = document.getElementById('background_exit_dc');
    
    ///Reset image locations and then play animation
    resetimages();
       
    //Bring in listeners i.e. if a user clicks or rollsover
    addListeners();     
       
    //Show Ad
    container.style.display = "block";
 

}

function displayAd(){
      

       //Assign All the elements to the element on the page
       container = document.getElementById('content');
       content = document.getElementById('wrapper');     
       bgExit = document.getElementById('clickthrough');

       ///Reset image locations and then play animation
       resetimages();
       
       //Bring in listeners i.e. if a user clicks or rollsover
      
        addListeners();
       //Show Ad
       container.style.display = "block";
       
       //readExternalParameter();

       //animations
       //allAnimations();

}

//  CUSTOM


function allAnimations() { 

	TweenLite.to(pictoMen, 0.4, {y:0, alpha:1, scale:1, ease: Expo.easeOut, delay:0.8});
    TweenLite.to(text1, 0.4, {y:0, alpha:1, scale:1, ease: Expo.easeOut, delay:0.5});
    TweenLite.to(dort, 0.4, {y:0, alpha:1, scale:1, ease: Expo.easeOut, delay:0.5});
    
    
    TweenLite.to(pictoMen, 0.3, {alpha:0, scale:1.5, ease: Expo.easeOut, delay:2.7});
    TweenLite.to(text1, 0.3, {alpha:0, ease: Expo.easeOut, delay:2.7});
    TweenLite.to(dort, 0.3, {alpha:0, ease: Expo.easeOut, delay:2.7});
    
    
    TweenLite.to(dunya, 1.6, {alpha:1, scale:1, ease: Elastic.easeOut, delay: 3.4});
    TweenLite.to(dunya, 5, {rotation:-10, ease: Power0.easeNone, delay: 3.4});
    
    
    TweenLite.to(text2, 0.5, {y:0,  scale:1, alpha:1,  ease: Expo.easeOut, delay:3});
    TweenLite.to(text2_1, .5, {y:10, alpha:1,scale:1, ease: Expo.easeOut, delay:3});
    
    
    TweenLite.to(van, 1, {scale:1, ease: Elastic.easeOut, delay: 3.6});
    TweenLite.to(line, 1, {alpha:1, ease: Expo.easeInOut, delay:3.6});
    
    //TweenLite.to(van, 2, {x:40, y:5, ease: Expo.easeInOut, delay: 4});
    TweenLite.to(van, 5, { ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 0.1, points: 40, taper: "none", randomize: false, clamp: true}), y: 20,  delay: 4});
    
    
    
    
    TweenLite.to(van, 5, {x:60, ease: Power0.easeNone, delay: 4});
    TweenLite.to(line, 2, {scaleX:1, ease: Power0.easeNone, delay:4});
    
    
    TweenLite.to(text2, 0.5, {alpha:0, ease: Expo.easeOut, delay:6.5});
    TweenLite.to(text2_1, 0.5, {alpha:0, ease: Expo.easeOut, delay:6.5});
    
    
    TweenLite.to(text6, 0.4, { alpha:1, y:0, scale:1, ease: Expo.easeOut, delay:7.1});
    TweenLite.to(text6_1, 0.4, { alpha:1, y:0, scale:1,  ease: Expo.easeOut, delay:7.1});
    
    
    TweenLite.to(text6, 0.5, {alpha:0, ease: Expo.easeOut, delay:10});
    TweenLite.to(text6_1, 0.5, {alpha:0, ease: Expo.easeOut, delay:10});
    
    
    
    TweenLite.to(text3, 0.4, { alpha:1, y:0, scale:1, ease: Expo.easeOut, delay:10.5});
    TweenLite.to(text3_1, 0.4, { alpha:1, y:0, scale:1,  ease: Expo.easeOut, delay:10.5});
   
    
    TweenLite.to(text3, 0.6, {alpha:0, ease: Expo.easeOut, delay:13});
    TweenLite.to(text3_1, 0.6, {alpha:0, ease: Expo.easeOut, delay:13});
    
    TweenLite.to(dunya, 0.5, {alpha:0, ease: Sine.easeOut, delay: 13});
    TweenLite.to(van, 0.5, {alpha:0, ease: Sine.easeOut, delay: 13});
    TweenLite.to(line, 0.5, {alpha:0, ease: Sine.easeOut, delay:13});
    
    TweenLite.to(text4, 0.7, {alpha:1, ease: Sine.easeOut, delay: 13.5});
    TweenLite.to(onAware, 0.7, {alpha:1, ease: Sine.easeOut, delay: 13.5});
    TweenLite.to(ctaBtn, 0.7, {alpha:1, ease: Sine.easeOut, delay: 13.5});
    
    
}

addListeners = function() {
	bgExit.addEventListener('click', bgExitHandler, false);
}

bgExitHandler = function(e) {
	Enabler.exit('HTML5_Background_Clickthrough');
}


function resetimages(){

	TweenLite.to(dort, 0, {y:190,scale:3, alpha:0});    
    TweenLite.to(text1, 0, {y:100,scale:3, alpha:0});
    TweenLite.to(pictoMen, 0, {y:0,alpha:0, scale:3, ease: Expo.easeOut});
    
    TweenLite.to(text2, 0, {y:190, scale:3, alpha:0});
    TweenLite.to(text2_1, 0, {y:190,scale:3, alpha:0});
    TweenLite.to(dunya, 0, {alpha:0, ease: Expo.easeOut});
    
    TweenLite.to(van, 0, {x:0, y:0, scale:0,alpha:1});
    TweenLite.to(line, 0, {x:0, scaleX:0.5,alpha:0, ease: Expo.easeOut});
    
    TweenLite.to(text3, 0, {y:160, scale:3, alpha:0});
    TweenLite.to(text3_1, 0, {y:190, scale:3, alpha:0});
    
    TweenLite.to(text6, 0, {y:160, scale:3, alpha:0});
    TweenLite.to(text6_1, 0, {y:190, scale:3, alpha:0});
    
    TweenLite.to(text4, 0, {scale:0.9,alpha:0});
    TweenLite.to(ctaBtn, 0, {alpha:0});
    TweenLite.to(onAware, 0, {alpha:0});
    
    
    
	pictoMen.setAttribute('class', 'off');
	text1.setAttribute('class', 'off');
    dort.setAttribute('class', 'off');
    
    text2.setAttribute('class', 'off');
    text2_1.setAttribute('class', 'off');
    
	dunya.setAttribute('class', 'off');
    
    van.setAttribute('class', 'off');
	line.setAttribute('class', 'off');
    
    text3.setAttribute('class', 'off');
    text3_1.setAttribute('class', 'off');
    
    text6.setAttribute('class', 'off');
    text6_1.setAttribute('class', 'off');
    
    text4.setAttribute('class', 'off');
    onAware.setAttribute('class', 'off');
    ctaBtn.setAttribute('class', 'off');
    
	
	allAnimations();

}

