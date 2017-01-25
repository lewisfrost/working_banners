var comp;
AdobeEdge.bootstrapCallback(function(compId) {
	comp = AdobeEdge.getComposition(compId).getStage();
});
function vc_stop(){
	comp.stop();
}
function vc_play(){
	comp.play();
}