// Init FT objects
var myFT 				= new FT,

// Declare HTML elements
container 				= FT.query("#container"),
backgroundExit 			= FT.query("#backgroundExit"),
    
header 			        = FT.query("#header"),

copy0                   = FT.query("#copy0"),
copy1                   = FT.query("#copy1"),
copy2                   = FT.query("#copy2"),

cta 					= FT.query("#cta"),
chevronA 				= FT.query("#chevronA"),
chevronB 				= FT.query("#chevronB"),

logo 			 		= FT.query("#logo");

flare			 		= FT.query("#flare");

// Apply clickTags
myFT.applyClickTag(backgroundExit, 1);

// Show Banner
container.style.display = "block";

var frameCounter = 0;
var speedTransition = 0.5;
var chevAPosX = -5;
var chevDistance = 5;

function stepAnim(fr)
{
	console.log('stepAnim: '+fr);
	frameCounter++;
	switch(fr)
	{
		//Frame 1
		case 0:
            copy0.style.visibility = "visible";
            TweenLite.to(copy0, speedTransition, {alpha:1});
            jumpFrame(4);
            break;
		
		//Frame 2
		case 1:
			TweenLite.to(copy0, speedTransition, {autoAlpha:0});
            copy1.style.visibility = "visible";
            TweenLite.to(copy1, speedTransition, {alpha:1, delay:speedTransition});
            jumpFrame(4 + speedTransition);
            break;
		
		//Frame 3
		case 2:
            TweenLite.to(copy1, speedTransition, {autoAlpha:0});
            copy2.style.visibility = "visible";
            TweenLite.to(copy2, speedTransition, {alpha:1, delay:speedTransition});

            flare.style.visibility = "visible";
            var flareDelay = 1;
            var flareSpeedTransition = speedTransition * 4;
		    TweenLite.to(flare,flareSpeedTransition,{css:{x:290}, ease:Power1.easeInOut, delay:flareDelay});
		    TweenLite.to(flare,(flareSpeedTransition/2),{opacity:1, ease:Power2.easeOut, delay: (flareDelay)});
		    TweenLite.to(flare, speedTransition, {alpha:0, delay:3});

            jumpFrame(3 + speedTransition);
			break;
            
        //End Frame
        case 3:
			cta.style.zIndex = 1000;
			chevronA.style.zIndex = 1001;
			backgroundExit.style.zIndex = 1002;
            
            
            cta.style.visibility = "visible";
            TweenLite.to(cta, speedTransition, {alpha:1, delay:0, ease:Quad.easeInOut});
            
            var _delay = speedTransition;

            
			//copy0.style.visibility = "visible";
            //TweenLite.to(copy0, speedTransition, {alpha:1, delay:.5, ease:Quad.easeInOut});
            // Chevrons
            
            chevronA.style.left = chevAPosX+"px";
            
			TweenLite.to(chevronA, "0.5", {left:chevAPosX + chevDistance, opacity:1, delay:1.2, ease:Quad.easeInOut});
            TweenLite.to(chevronA, "0.5", {left:chevAPosX, opacity:0, delay:1.8, ease:Quad.easeInOut});
            TweenLite.to(chevronA, "0.5", {left:chevAPosX + chevDistance, opacity:1, delay:2.4, ease:Quad.easeInOut});
		break;
	}
}

// Jump Frames
function jumpFrame(dly)
{
	TweenLite.delayedCall( dly, stepAnim, [frameCounter] );
}

// Call stepAnim() function
stepAnim(0);