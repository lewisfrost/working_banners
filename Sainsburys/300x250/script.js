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
    
    TweenLite.set(bg, {scale:.95, x:-15, y:-44});
    TweenLite.set(copy, {alpha:0, x:25, y:40});
    TweenLite.to(bg, 5.5, {force3D:true, rotationZ:0.01, delay:delay+=.5, scale:1, x:-61, y:-117});
    TweenLite.to(copy, 4, {force3D:true, rotationZ:0.01, delay:2, alpha:1, x:0, y:0});
    TweenLite.to(bg, 5.14, {force3D:true, rotationZ:0.01, delay:8.5, scale:.85, x:-34, y:-62});
    TweenLite.to(copy, 2.1, {force3D:true, rotationZ:0.01, delay:8.5, alpha:0, scale:.99, x:13, y:27});
    TweenLite.to(roundel, 3, {force3D:true, rotationZ:0.01, delay:11, alpha:1});
}

function onMouseOverHandler(e){ TweenLite.to(tcs, .5, {top:105, ease:Strong.easeOut}); }
function onMouseOutHandler(e){ TweenLite.to(tcs, .5, {top:230, ease:Strong.easeOut}); }

// Call Init Method
window.onload = init();