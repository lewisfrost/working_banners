/**
 * Zimbabalim
 */
"use strict";


window.onload = function(){

    Enabler.setProfileId(1043046);
    var devDynamicContent = {};

    devDynamicContent.SVPN_feed_Rich_MPU_EXP= [{}];
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0]._id = 0;
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].Unique_ID = 1;
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].Reporting_Label = "generic";
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].text1 = "DESIGNED TO STAY AHEAD OF GUNK AND CORROSION";
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].text2 = "Actual benefits may vary. See <a>shell.co.uk/vpower</a>";
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].cta1 = "ROLLOVER FOR THE ACTION";
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].cta2 = "LEARN MORE";
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].cta3 = "CTA3";
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].youtube_vid = "cuapGHfzfq8";
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].landing_url = {};
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].landing_url.Url = "http://www.shell.com";
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].Default = false;
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].Active = false;

    Enabler.setDevDynamicContent(devDynamicContent);

    // *** bootstrap
    if( Enabler.isInitialized() ){
        onDCReady();
    } else {
        Enabler.addEventListener( studio.events.StudioEvent.INIT, onDCReady);
    }

    function onDCReady(){

        console.log("/main/ -onDCReady ");

        if( Enabler.isVisible() ) {
            irisBanner();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, irisBanner );
        }
    }
};


function irisBanner(){

    console.log("/main/ -irisBanner ");

    var els = {
        viewportEl : document.getElementById( "viewport" ),
        collapseEl : document.getElementById( "collapse" ),
        expandEl : document.getElementById( "expand" ),
        expandCloseBtnEl : document.getElementById( "expand-close-btn" ),

        videoThumbEls_$ : document.querySelectorAll( ".video-thumb" ),
        videoOverlayEl : document.getElementById( "video-overlay" ),
        videoCloseBtnEl : document.getElementById( "video-close-btn" ),
        videoPlayerEl : document.getElementById( "player" ),
        glassEl : document.getElementById( "glass" )
    };

    var props = {

        vo : window.dynamicContent.SVPN_feed_Rich_MPU_EXP[ 0 ], // *** alias dynamic content value object

        isMobile : !!( navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/Android/i) ) || false,

        isLocked : false,

        currOrientation : null
    };

    init();

    function init(){

        console.log("/main/ -init ", props.vo, props.currOrientation );

        addDC();
        addListeners();
        /*onResize();*/
        
        addContent();

        updateOrientation( Enabler.getOrientation().d );
    }

    function addDC(){

        // *** left, top, expandedWidth, expandedHeight
        //Enabler.setExpandingPixelOffsets( 0, 0, 300, 480 ); // TODO move to orientation method
        Enabler.setIsMultiDirectional( true );

        Enabler.addEventListener( studio.events.StudioEvent.EXPAND_START, onStudioEvent );
        Enabler.addEventListener( studio.events.StudioEvent.COLLAPSE_START, onStudioEvent );
        Enabler.addEventListener( studio.events.StudioEvent.ORIENTATION, onStudioEvent );
        Enabler.addEventListener( studio.events.StudioEvent.EXPAND_FINISH, onStudioEvent );
        Enabler.addEventListener( studio.events.StudioEvent.COLLAPSE_FINISH, onStudioEvent );
    }


    function addListeners(){

        els.collapseEl.addEventListener( "click", function( e ){
            Enabler.requestExpand();
        } );

        els.expandCloseBtnEl.addEventListener( "click", function( e ){
            Enabler.requestCollapse();
        } );

        els.videoThumbEls_$[ 0 ].addEventListener( "click", function( e ){
            requestVideoAction( "show-video-overlay", null );
        });

        els.videoThumbEls_$[ 1 ].addEventListener( "click", function( e ){
            requestVideoAction( "show-video-overlay", null );
        });

        els.videoCloseBtnEl.addEventListener( "click", function( e ){
            requestVideoAction( "close-video-overlay", null );
        });


        //videoOverlayEl

        window.addEventListener( "resize", onResize );
    }
    
    
    function addContent(){

        var textboxList = els.expandEl.querySelectorAll( ".text-block"),
            textBlocks_$ = [ textboxList[ 0 ], textboxList[ 1 ] ];

        var disclaimerList = els.expandEl.querySelectorAll( ".disclaimer"),
            disclaimers_$ = [ disclaimerList[ 0 ], disclaimerList[ 1 ] ];

        for( var i = 0; i < 2; i ++ ){

            var tb = textBlocks_$[ i ],
                tbc = props.vo.text1,
                dc = disclaimers_$[ i ],
                dcc = props.vo.text2;

            inject( tb, tbc );
            inject( dc, dcc );
        }


        function inject( _el, _html ){
            _el.innerHTML = "<p>" + _html + "</p>"
        }

    }


    function requestVideoAction( _action, _props ){
        console.log("/main/ -requestVideoAction ");

        switch( _action ){

            case "show-video-overlay":

                onResize(); // NOTE ensure all updated
                addClass( els.videoOverlayEl, "is-active", true );
                addClass( els.glassEl, "is-active", true );

                els.videoPlayerEl.load();
                els.videoPlayerEl.play();

                break;

            case "close-video-overlay":

                addClass( els.videoOverlayEl, "is-active", false );
                addClass( els.glassEl, "is-active", false );

                els.videoPlayerEl.pause();
                els.videoPlayerEl.currentTime = 0;

                break;
        }
    }


    function onStudioEvent( e ){

        props.isLocked = ( e.type === "expandStart" || e.type === "collapseStart" );
        //console.log("/main/ -onStudioEvent ", e.type, props.isLocked );

        console.log("/main/ -onStudioEvent ", e );

        switch( e.type ){

            case "expandStart":

                expand();
                break;

            case "collapseStart":

                collapse();
                break;

            case "orientation":

                updateOrientation( e.mode );
                break;
        }
    }

    
    function onResize(){

        var w = getViewportDimensions().width,
            h = getViewportDimensions().height,
            nominalW = 300,
            r = ( w / nominalW ) * 100;

        document.body.style.fontSize = r + "%";

        els.videoOverlayEl.style.width = w + "px";
        els.videoOverlayEl.style.height = h + "px";

        els.glassEl.style.width = w + "px";
        els.glassEl.style.height = document.documentElement.scrollHeight + "px";
    }
    


    function updateOrientation( _value ){

        props.currOrientation = _value;
        onResize();
        //console.log("/main/ -updateOrientation ", props.currOrientation );
    }


    function expand(){

        addClass( els.collapseEl, "is-active", false );
        addClass( els.expandEl, "is-active", true );
        addClass( document.body, "is-expanded", true );

        Enabler.finishExpand(); // TEST
    }

    function collapse(){

        addClass( els.collapseEl, "is-active", true );
        addClass( els.expandEl, "is-active", false );
        addClass( document.body, "is-expanded", false );

        Enabler.finishCollapse(); // TEST
    }

    function addClass( _el, _class, _f ){

        console.log("/main/ -addClass ", _el, _class, _f );
        ( _f ) ? _el.classList.add( _class ) : _el.classList.remove( _class );
    }


    


    // https://gist.github.com/scottjehl/2051999
    function getViewportDimensions(){

        var test = document.createElement( "div" );

        test.style.cssText = "position: fixed;top: 0;left: 0;bottom: 0;right: 0;";
        document.documentElement.insertBefore( test, document.documentElement.firstChild );

        var dims = { width: test.offsetWidth, height: test.offsetHeight };
        document.documentElement.removeChild( test );

        return dims;
    }

}