var tw = TweenLite;

var imgArr = ['flip1','flip2','flip3','flip4','flip5','flip6','flip7','flip8','flip9',
              'flip10','flip11','flip12','flip13','flip14','flip15','flip16','flip17',
              'flip18','flip19','flip20','flip21'];
			  
var imgArr2 = ['flip21','flip20','flip19','flip18','flip17','flip16','flip15','flip14','flip13','flip12',
              'flip11','flip10','flip9','flip8','flip7','flip6','flip5','flip4',
              'flip3','flip2','flip1'];
			  
			  

function initbanner(){
    EBinit()
	frame1Anim()
	 for(var i=0; i<imgArr.length; i++){
        tw.set('#'+String(imgArr[i]),{alpha:1, delay:i*0.04}); 
    }
	
}

function frame1Anim(){
     tw.to(copy1,1, {alpha:1, ease:Quad.easeIn, delay:0})
	 tw.to(mask,3, {width:250, ease: Power4.easeOut, delay:0.5})
	 tw.delayedCall(5,frame2Anim)
}

function frame2Anim(){
     tw.to(copy1,0.65, {alpha:0, ease:Quad.easeInOut, delay:.6})
	 tw.to(mask,2, {width:42, ease: Power4.easeInOut, delay:0})
	 
	 tw.to(copy2,0.65, {alpha:1, ease:Quad.easeInOut, delay:1.5})
	 tw.to(copy3,0.65, {alpha:1, ease:Quad.easeInOut, delay:1.7})
     tw.delayedCall(5,frame3Anim)
}

function frame3Anim(){
	tw.to([copy2,copy3],0.65, {alpha:0, ease:Quad.easeInOut, delay:0})
	tw.to(copy4,0.65, {alpha:1, ease:Quad.easeInOut, delay:0.65})
	tw.to(mask2,3, {width:250, ease: Power4.easeOut, delay:1})
	tw.delayedCall(7,frame4Anim)
	}

function frame4Anim(){
	 tw.to(mask2,2, {width:42, ease: Power4.easeInOut, delay:0})
	 tw.to(copy4,0.65, {alpha:0, ease:Quad.easeInOut, delay:0.65})
	 tw.to(cta,0.65, {alpha:1, ease:Quad.easeInOut, delay:1.3})
	 tw.delayedCall(1.5,frame5Anim)
}
function frame5Anim(){
	 for(var i=0; i<imgArr2.length; i++){
        tw.set('#'+String(imgArr2[i]),{alpha:0, delay:i*0.04}); 
    }
}

function EBinit(){
	document.getElementById("bannerCTA").addEventListener("click", handleClickthroughButtonClick);
}
function handleClickthroughButtonClick(){
    EB.clickthrough(); 
}

