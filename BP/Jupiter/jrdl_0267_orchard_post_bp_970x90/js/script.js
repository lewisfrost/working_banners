var tw = TweenLite;

function initbanner(){
    EBinit()
	frame1Anim()

     tw.set(flip1,{alpha:1, delay:0})

     tw.set(flip1,{alpha:0, delay:0.05})
     tw.set(flip2,{alpha:1, delay:0.05})

     tw.set(flip2,{alpha:0, delay:0.10})
     tw.set(flip3,{alpha:1, delay:0.10})

     tw.set(flip3,{alpha:0, delay:0.15})
     tw.set(flip4,{alpha:1, delay:0.15})

     tw.set(flip4,{alpha:0, delay:0.20})
     tw.set(flip5,{alpha:1, delay:0.20})

     tw.set(flip5,{alpha:0, delay:0.25})
     tw.set(flip6,{alpha:1, delay:0.25})

     tw.set(flip6,{alpha:0, delay:0.30})
     tw.set(flip7,{alpha:1, delay:0.30})

     tw.set(flip7,{alpha:0, delay:0.35})
     tw.set(flip8,{alpha:1, delay:0.35})

     tw.set(flip8,{alpha:0, delay:0.40})
     tw.set(flip9,{alpha:1, delay:0.40})

     tw.set(flip9,{alpha:0, delay:0.45})
     tw.set(flip10,{alpha:1, delay:0.45})

     tw.set(flip10,{alpha:0, delay:0.50})
     tw.set(flip11,{alpha:1, delay:0.50})

     tw.set(flip11,{alpha:0, delay:0.55})
     tw.set(flip12,{alpha:1, delay:0.55})

     tw.set(flip12,{alpha:0, delay:0.60})
     tw.set(flip13,{alpha:1, delay:0.60})

     tw.set(flip13,{alpha:0, delay:0.65})
     tw.set(flip14,{alpha:1, delay:0.65})

     tw.set(flip14,{alpha:0, delay:0.70})
     tw.set(flip15,{alpha:1, delay:0.70})

     tw.set(flip15,{alpha:0, delay:0.75})
     tw.set(flip16,{alpha:1, delay:0.75})

     tw.set(flip16,{alpha:0, delay:0.80})
     tw.set(flip17,{alpha:1, delay:0.80})

     tw.set(flip17,{alpha:0, delay:0.85})
     tw.set(flip18,{alpha:1, delay:0.85})

     tw.set(flip18,{alpha:0, delay:0.90})
     tw.set(flip19,{alpha:1, delay:0.90})

     tw.set(flip19,{alpha:0, delay:0.95})
     tw.set(flip20,{alpha:1, delay:0.95})

     tw.set(flip20,{alpha:0, delay:1.0})
     tw.set(flip21,{alpha:1, delay:1.0})

     tw.set(flip21,{alpha:0, delay:1.05})
     tw.set(flip22,{alpha:1, delay:1.05})

     tw.set(flip22,{alpha:0, delay:1.10})
     tw.set(flip23,{alpha:1, delay:1.10})
	
}

function frame1Anim(){
     tw.to(copy1,1, {alpha:1, ease:Quad.easeIn, delay:0})
	 tw.to(mask,3, {width:580, ease: Power4.easeOut, delay:0.5})
	 tw.delayedCall(5,frame2Anim)
}

function frame2Anim(){
     tw.to(copy1,1, {alpha:0, ease:Quad.easeOut, delay:.6})
	 tw.to(mask,2, {width:380, ease: Power4.easeInOut, delay:0})
	 
	 tw.to(mask2,1, {height:72, ease: Power4.easeOut, delay:1.7})
	 tw.to(copy2,0.65, {alpha:1, ease:Quad.easeInOut, delay:1.5})
	 tw.to(copy3,0.65, {alpha:1, ease:Quad.easeInOut, delay:1.9})
     tw.delayedCall(5,frame3Anim)
}

function frame3Anim(){
	 tw.to(mask2,0.65, {height:17, ease: Power4.easeInOut, delay:0})
     tw.to([copy2,copy3],0.65, {alpha:0, ease:Quad.easeInOut, delay:0})
     tw.delayedCall(0.5,frame4Anim)
}

function frame4Anim(){
	tw.to(cta,0.65, {alpha:1, ease:Quad.easeInOut, delay:1.0})

     tw.set(flip23,{alpha:0, delay:0})
     tw.set(flip25,{alpha:1, delay:0})

     tw.set(flip25,{alpha:0, delay:0.05})
     tw.set(flip26,{alpha:1, delay:0.05})

     tw.set(flip26,{alpha:0, delay:0.10})
     tw.set(flip27,{alpha:1, delay:0.10})

     tw.set(flip27,{alpha:0, delay:0.15})
     tw.set(flip28,{alpha:1, delay:0.15})

     tw.set(flip28,{alpha:0, delay:0.20})
     tw.set(flip29,{alpha:1, delay:0.20})

     tw.set(flip29,{alpha:0, delay:0.25})
     tw.set(flip30,{alpha:1, delay:0.25})

     tw.set(flip30,{alpha:0, delay:0.30})
     tw.set(flip31,{alpha:1, delay:0.30})

     tw.set(flip31,{alpha:0, delay:0.35})
     tw.set(flip32,{alpha:1, delay:0.35})

     tw.set(flip32,{alpha:0, delay:0.40})
     tw.set(flip33,{alpha:1, delay:0.40})

     tw.set(flip33,{alpha:0, delay:0.45})
     tw.set(flip34,{alpha:1, delay:0.45})

     tw.set(flip34,{alpha:0, delay:0.50})
     tw.set(flip35,{alpha:1, delay:0.50})

     tw.set(flip35,{alpha:0, delay:0.55})
     tw.set(flip36,{alpha:1, delay:0.55})

     tw.set(flip36,{alpha:0, delay:0.60})
     tw.set(flip37,{alpha:1, delay:0.60})

     tw.set(flip37,{alpha:0, delay:0.65})
     tw.set(flip38,{alpha:1, delay:0.65})

     tw.set(flip38,{alpha:0, delay:0.70})
     tw.set(flip39,{alpha:1, delay:0.70})

     tw.set(flip39,{alpha:0, delay:0.75})
     tw.set(flip40,{alpha:1, delay:0.75})

     tw.set(flip40,{alpha:0, delay:0.80})
     tw.set(flip41,{alpha:1, delay:0.80})

     tw.set(flip41,{alpha:0, delay:0.85})
     tw.set(flip42,{alpha:1, delay:0.85})

     tw.set(flip42,{alpha:0, delay:0.90})
     tw.set(flip43,{alpha:1, delay:0.90})

     tw.set(flip43,{alpha:0, delay:0.95})
     tw.set(flip44,{alpha:1, delay:0.95})

     tw.set(flip44,{alpha:0, delay:1.0})
     tw.set(flip45,{alpha:1, delay:1.0})

     tw.set(flip45,{alpha:0, delay:1.05})
     tw.set(flip46,{alpha:1, delay:1.05})

     tw.set(flip46,{alpha:0, delay:1.10})
     tw.set(flip47,{alpha:1, delay:1.10})

     tw.set(flip47,{alpha:0, delay:1.15})
     tw.set(flip48,{alpha:1, delay:1.15})
	 
	 tw.set(flip48,{alpha:0, delay:1.20})
     tw.set(flip49,{alpha:1, delay:1.20})
	 
	 tw.set(flip49,{alpha:0, delay:1.25})
     tw.set(flip50,{alpha:1, delay:1.25})

}



function EBinit(){
	document.getElementById("bannerCTA").addEventListener("click", handleClickthroughButtonClick);
}
function handleClickthroughButtonClick(){
    EB.clickthrough(); 
}

