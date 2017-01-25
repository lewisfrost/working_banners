
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x20='936px',x2='5.0.0',x11='rgba(0,0,0,0)',x31='rgb(0, 0, 0)',g='image',x19='large4',x18='true',x33='237px',x14='42px',m='rect',x7='0px',i='none',x28='266px',x3='6.0.0.400',x16='266',e5='${large2}',lf='left',x24='14px',e27='${collapse}',x35='Rectangle5',x17='31',x13='expand_btn',x32='rgba(192,192,192,0)',x29='31px',x10='auto',x30='expand',x22='collapse',x8='468px',x9='648px',x4='rgba(255,255,255,1)',tp='top',x26='134',x25='237',x23='684px',x15='604',x6='small5',d='display',x34='134px';var g12='small.png',g21='large.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'small2',symbolName:'small',t:m,r:['468','0','468','648','auto','auto']},{id:'large2',symbolName:'large',v:i,t:m,r:['0','0','936','648','auto','auto'],overflow:'visible',o:'1'}],style:{'${Stage}':{isStage:true,r:[undefined,undefined,'936px','648px'],overflow:'hidden',f:[x4]}}},tt:{d:0,a:n,data:[["eid4",d,0,0,"linear",e5,i,i]]}},"small":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:x6,t:g,r:[x7,x7,x8,x9,x10,x10],f:[x11,im+g12,x7,x7]},{id:x13,sN:x13,r:[x14,x15,x16,x17,x10,x10],t:m}],style:{'${symbolSelector}':{isStage:x18,r:[undefined,undefined,x8,x9]}}},tt:{d:0,a:y,data:[]}},"large":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:x19,t:g,r:[x7,x7,x20,x9,x10,x10],f:[x11,im+g21,x7,x7]},{id:x22,sN:x22,r:[x23,x24,x25,x26,x10,x10],t:m}],style:{'${symbolSelector}':{isStage:x18,r:[undefined,undefined,x20,x9]}}},tt:{d:0,a:y,data:[["eid6",tp,0,0,"linear",e27,'14px','14px'],["eid5",lf,0,0,"linear",e27,'684px','684px']]}},"expand_btn":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x7,x7,x28,x29,x10,x10],id:x30,s:[0,x31,i],t:m,f:[x32]}],style:{'${symbolSelector}':{isStage:x18,r:[undefined,undefined,x28,x29]}}},tt:{d:0,a:y,data:[]}},"collapse":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x7,x7,x33,x34,x10,x10],id:x35,s:[0,x31,i],t:m,f:[x32]}],style:{'${symbolSelector}':{isStage:x18,r:[undefined,undefined,x33,x34]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-369480");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'small'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${expand_btn}","click",function(sym,e){sym.getComposition().getStage().$("large2").show();});
//Edge binding end
})("small");
//Edge symbol end:'small'

//=========================================================

//Edge symbol: 'large'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${collapse}","click",function(sym,e){sym.getComposition().getStage().$("large2").hide();});
//Edge binding end
})("large");
//Edge symbol end:'large'

//=========================================================

//Edge symbol: 'expand_btn'
(function(symbolName){})("expand_btn");
//Edge symbol end:'expand_btn'

//=========================================================

//Edge symbol: 'collapse'
(function(symbolName){})("collapse");
//Edge symbol end:'collapse'
})})(AdobeEdge.$,AdobeEdge,"EDGE-369480");