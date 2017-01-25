/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         // Sizmek function to check if Sizmek classes are initialized.
         //if initialized, call startAd else add listener
         function initEB(){
         if (!EB.isInitialized()) {
         EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
         }
         else {
         startAd();
         }
         }
         //called once Sizmek classes are initialized
         function startAd() {
         //any functions to run on load should go here
         //play the stage/animation
         sym.play();
         }
         //check if Sizmek is initialized
         initEB();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${keyline}", "click", function(sym, e) {
         EB.clickthrough();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'leaf-1-gfx'
   (function(symbolName) {   
   
   })("leaf-1-gfx");
   //Edge symbol end:'leaf-1-gfx'

   //=========================================================
   
   //Edge symbol: 'txt-1-gfx'
   (function(symbolName) {   
   
   })("txt-1-gfx");
   //Edge symbol end:'txt-1-gfx'

   //=========================================================
   
   //Edge symbol: 'txt-2-gfx'
   (function(symbolName) {   
   
   })("txt-2-gfx");
   //Edge symbol end:'txt-2-gfx'

   //=========================================================
   
   //Edge symbol: 'keyline'
   (function(symbolName) {   
   
   })("keyline");
   //Edge symbol end:'keyline'

   //=========================================================
   
   //Edge symbol: 'leaf-2-gfx'
   (function(symbolName) {   
   
   })("leaf-2-gfx");
   //Edge symbol end:'leaf-2-gfx'

   //=========================================================
   
   //Edge symbol: 'txt-3-gfx'
   (function(symbolName) {   
   
   })("txt-3-gfx");
   //Edge symbol end:'txt-3-gfx'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-99830100");