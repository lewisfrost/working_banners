/**
 * Zimbabalim
 */
"use strict";

/**
 * wait for dc to start up before calling irisBanner()
 */
window.onload = function(){

    Enabler.setProfileId(1043046);
    var devDynamicContent = {};

    devDynamicContent.SVPN_feed_Rich_MPU_EXP= [{}];
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0]._id = 0;
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].Unique_ID = 1;
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].Reporting_Label = "generic";
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].text1 = "DESIGNED TO STAY AHEAD OF GUNK AND CORROSION";
    devDynamicContent.SVPN_feed_Rich_MPU_EXP[0].text2 = "";
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


/**
 * this function closure contains all of our logic for the banner
 */
function irisBanner(){

    //console.log("/main/ -irisBanner ");

    /**
     * define and select dom elements, store all within 'els' object
     */
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

    /**
     * keep untyped variables in this object - useful for state related vars
     */
    var props = {

        vo : window.dynamicContent.SVPN_feed_Rich_MPU_EXP[ 0 ], // *** alias dynamic content value object

        isMobile : !!( navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/Android/i) ) || false,

        //isLocked : false,

        currOrientation : null
    };


    //init();


    /**
     * IIFE (immediately invoked function expression) calls itself (notice parenetheses)
     * runs initialisation methods
     */
    ( function init(){

        //console.log("/main/ -init ", props.vo, props.currOrientation );

        initDC();
        addListeners();
        addContent();

        updateOrientation( Enabler.getOrientation().d );

    } )();


    /**
     * doubleclick stuff
     */
    function initDC(){

        // *** left, top, expandedWidth, expandedHeight
        //Enabler.setExpandingPixelOffsets( 0, 0, 300, 480 );
        Enabler.setIsMultiDirectional( true );

        Enabler.addEventListener( studio.events.StudioEvent.EXPAND_START, onStudioEvent );
        Enabler.addEventListener( studio.events.StudioEvent.COLLAPSE_START, onStudioEvent );
        Enabler.addEventListener( studio.events.StudioEvent.ORIENTATION, onStudioEvent );
        Enabler.addEventListener( studio.events.StudioEvent.EXPAND_FINISH, onStudioEvent );
        Enabler.addEventListener( studio.events.StudioEvent.COLLAPSE_FINISH, onStudioEvent );
    }


    /**
     * add listeners for our ui
     */
    function addListeners(){

        els.collapseEl.addEventListener( "click", function( e ){
            Enabler.requestExpand();
        } );

        els.expandCloseBtnEl.addEventListener( "click", function( e ){
            Enabler.requestCollapse();
        } );

        els.videoThumbEls_$[ 0 ].addEventListener( "click", function( e ){
            actionRunner( "show-video-overlay", null );
        });

        els.videoThumbEls_$[ 1 ].addEventListener( "click", function( e ){
            actionRunner( "show-video-overlay", null );
        });

        els.videoCloseBtnEl.addEventListener( "click", function( e ){
            actionRunner( "close-video-overlay", null );
        });

        window.addEventListener( "resize", onResize );
    }


    /**
     * populate dynamic content
     * - note that we have dom states for portrait and landscape
     */
    function addContent(){

        var textboxList = els.expandEl.querySelectorAll( ".text-block"), // *** get node list from dom
            textBlocks_$ = [ textboxList[ 0 ], textboxList[ 1 ] ]; // *** populate array

        var disclaimerList = els.expandEl.querySelectorAll( ".disclaimer"), // *** get node list from dom
            disclaimers_$ = [ disclaimerList[ 0 ], disclaimerList[ 1 ] ]; // *** populate array

        // *** loop though both arrays at once
        for( var i = 0; i < 2; i ++ ){

            var tb = textBlocks_$[ i ],
                tbc = props.vo.text1,
                dc = disclaimers_$[ i ],
                dcc = props.vo.text2;

            inject( tb, tbc );
            inject( dc, dcc );
        }

        // *** convenience method to apply text to the element
        function inject( _el, _html ){
            _el.innerHTML = "<p>" + _html + "</p>"
        }
    }


    /**
     * catch all doubleclick studio events
     * add prefix and run captured event through the 'actionRunner' method
     * @param e : event
     */
    function onStudioEvent( e ){
        actionRunner( "dc_studio-" + e.type, e );
    }


    /**
     * this method keeps our state management in one place
     * @param _action : String value
     * @param _props : optional properties to be consumed
     */
    function actionRunner( _action, _props ){

        console.log("/main/ -actionRunner ", _action );

        switch( _action ){

            case "show-video-overlay":

                onResize(); // NOTE ensure all updated
                addClass( els.videoOverlayEl, "is-active", true );
                addClass( els.glassEl, "is-active", true );

                // *** play video
                els.videoPlayerEl.load();
                els.videoPlayerEl.play();

                break;

            case "close-video-overlay":

                addClass( els.videoOverlayEl, "is-active", false );
                addClass( els.glassEl, "is-active", false );

                // *** stop and reset video
                els.videoPlayerEl.pause();
                els.videoPlayerEl.currentTime = 0;

                break;

            // *** DC studio events with 'dc_studio-' prefix
            case "dc_studio-expandStart":

                expand();
                break;

            case "dc_studio-collapseStart":

                collapse();
                break;

            case "dc_studio-orientation":

                updateOrientation( _props.mode ); // *** we have passed through the orientation prop from the studio event here
                break;
        }
    }


    /**
     * update dom to show expanded state
     */
    function expand(){

        addClass( els.collapseEl, "is-active", false );
        addClass( els.expandEl, "is-active", true );
        addClass( document.body, "is-expanded", true );

        Enabler.finishExpand(); // *** dc grumbles without this
    }

    /**
     * update dom to return to collapsed state
     */
    function collapse(){

        addClass( els.collapseEl, "is-active", true );
        addClass( els.expandEl, "is-active", false );
        addClass( document.body, "is-expanded", false );

        Enabler.finishCollapse(); // *** dc grumbles without this
    }


    /**
     * on resize event fired
     */
    function onResize(){

        var w = getViewportDimensions().width,
            h = getViewportDimensions().height,
            nominalW = 300, // *** default width - font-size is 100% at this width
            r = ( w / nominalW ) * 100; // *** calculate percentage difference

        document.body.style.fontSize = r + "%"; // *** update font-size with value calculated above

        // *** size video overlay to viewport size
        els.videoOverlayEl.style.width = w + "px";
        els.videoOverlayEl.style.height = h + "px";

        // *** size glass (black background under the video) to encompass offscreen content - so it looks okay if we scroll down
        els.glassEl.style.width = w + "px";
        els.glassEl.style.height = document.documentElement.scrollHeight + "px";
    }


    /**
     * convenience method called directly or via dc event (see 'actionRunner')
     * @param _value : String "portrait" || "landscape"
     */
    function updateOrientation( _value ){

        props.currOrientation = _value;
        onResize();
    }



    /**
     * utility method to add or remove class
     * @param _el : dom element
     * @param _class : css class name
     * @param _f : Boolean true = add || false = remove
     */
    function addClass( _el, _class, _f ){

        //console.log("/main/ -addClass ", _el, _class, _f );
        ( _f ) ? _el.classList.add( _class ) : _el.classList.remove( _class );
    }


    /**
     * get accurate viewport dimensions
     * pinched from https://gist.github.com/scottjehl/2051999
     * @returns {{width: number, height: number}}
     */
    function getViewportDimensions(){

        var test = document.createElement( "div" );

        test.style.cssText = "position: fixed;top: 0;left: 0;bottom: 0;right: 0;";
        document.documentElement.insertBefore( test, document.documentElement.firstChild );

        var dims = { width: test.offsetWidth, height: test.offsetHeight };
        document.documentElement.removeChild( test );

        return dims;
    }
}