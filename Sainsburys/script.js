var bg = document.getElementById("bg");
var logo = document.getElementById("logo");
var copy = document.getElementById("copy");
var cta = document.getElementById("cta");
var tcs = document.getElementById("tandc");
var shadow = document.getElementById("shadow");

function init(){
    
    //add TCs events
    tcs.addEventListener("mouseover", onMouseOverHandler);
    tcs.addEventListener("mouseout", onMouseOutHandler);
    
    var delay = 0;
    
    TweenLite.set(bg, {x:12, y:53, scale:1.21});
    TweenLite.set(copy, {alpha:0, x:37, y:48, scale:1.05});
    TweenLite.to(bg, 5.5, {force3D:true, rotationZ:0.01, delay:delay+=.5, scale:1.13, x:-63, y:-46});
    TweenLite.to(copy, 3.8, {force3D:true, rotationZ:0.01, delay:2.2, scale:1, alpha:1, x:0, y:0});
    TweenLite.to(bg, 5.14, {force3D:true, rotationZ:0.01, delay:8.5, scale:1, x:-12, y:-7});
    TweenLite.to(copy, 2, {force3D:true, rotationZ:0.01, delay:8.5, scale:.98, alpha:0,x:26, y:19, ease:Quad.easeOut});
    TweenLite.to(roundel, 3, {force3D:true, delay:11, alpha:1});
}

function onMouseOverHandler(e){ TweenLite.to(tcs, .5, {top:450, ease:Strong.easeOut}); }
function onMouseOutHandler(e){ TweenLite.to(tcs, .5, {top:580, ease:Strong.easeOut}); }

// Call Init Method
window.onload = init();