/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            type: 'image',
                            rect: ['0px', '0', '160px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['-26px', '219px', '208px', '166px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
                        },
                        {
                            id: 'new',
                            type: 'image',
                            rect: ['46px', '55px', '67px', '47px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"new.png",'0px','0px']
                        },
                        {
                            id: 'tandc',
                            symbolName: 'tandc',
                            type: 'rect',
                            rect: ['0px', '573px', '162', '27', 'auto', 'auto']
                        },
                        {
                            id: 'copyCopy',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['-41px', '264px', '242', '71', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'logo2',
                            type: 'image',
                            rect: ['-8px', '215px', '208px', '166px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
                        },
                        {
                            id: 'Symbol_3',
                            symbolName: 'Symbol_3_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['8px', '444px', '144', '143', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['1.29','1.29']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '160px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 14436,
                    autoPlay: true,
                    data: [
                        [
                            "eid99",
                            "opacity",
                            7061,
                            500,
                            "linear",
                            "${logo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            424,
                            579,
                            "linear",
                            "${new}",
                            '1.29',
                            '1'
                        ],
                        [
                            "eid67",
                            "left",
                            0,
                            892,
                            "easeOutQuad",
                            "${logo}",
                            '-264px',
                            '-28px'
                        ],
                        [
                            "eid164",
                            "left",
                            892,
                            0,
                            "easeOutQuad",
                            "${logo}",
                            '-29px',
                            '-29px'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            77,
                            788,
                            "swing",
                            "${bg}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid120",
                            "display",
                            8045,
                            0,
                            "linear",
                            "${Symbol_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "opacity",
                            8045,
                            303,
                            "linear",
                            "${Symbol_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "scaleY",
                            8045,
                            303,
                            "linear",
                            "${Symbol_3}",
                            '1.29',
                            '1'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            424,
                            579,
                            "linear",
                            "${new}",
                            '1.29',
                            '1'
                        ],
                        [
                            "eid98",
                            "left",
                            7000,
                            1045,
                            "swing",
                            "${logo2}",
                            '263px',
                            '-27px'
                        ],
                        [
                            "eid155",
                            "width",
                            14436,
                            0,
                            "linear",
                            "${bg}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid3",
                            "scaleX",
                            77,
                            788,
                            "swing",
                            "${bg}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid123",
                            "scaleX",
                            8045,
                            303,
                            "linear",
                            "${Symbol_3}",
                            '1.29',
                            '1'
                        ],
                        [
                            "eid68",
                            "opacity",
                            78,
                            814,
                            "easeOutQuad",
                            "${logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            2750,
                            250,
                            "easeOutQuad",
                            "${logo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "opacity",
                            3500,
                            500,
                            "easeOutQuad",
                            "${copyCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            6462,
                            500,
                            "easeOutQuad",
                            "${copyCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid71",
                            "opacity",
                            423,
                            579,
                            "linear",
                            "${new}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            2753,
                            250,
                            "linear",
                            "${new}",
                            '1',
                            '0'
                        ],
                            [ "eid51", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${tandc}', [] ] ],
                            [ "eid84", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${copyCopy}', [] ] ],
                            [ "eid129", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_3}', [] ] ],
                            [ "eid85", "trigger", 3250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${copyCopy}', [] ] ],
                            [ "eid86", "trigger", 6000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${copyCopy}', [] ] ],
                            [ "eid130", "trigger", 8045, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_3}', [] ] ]
                    ]
                }
            },
            "tandc": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0px', '8px', '106px', '19px', 'auto', 'auto'],
                            id: 'ClosedBg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.66)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-17px', '162px', '47px', 'auto', 'auto'],
                            id: 'openBg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(255,255,255,0.66)']
                        },
                        {
                            type: 'text',
                            rect: ['-4px', '12px', '112px', '16px', 'auto', 'auto'],
                            display: 'block',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Terms &amp; conditions <span style=\"font-size: 11px;\"></span></p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['7px', '-11px', '149px', '50px', 'auto', 'auto'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">Participating stores. Subject </p><p style=\"margin: 0px;\">to availability. T&amp;C apply, </p><p style=\"margin: 0px;\">see dominos.co.uk​</p>',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['200', '90', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['34', '-11', 'auto', 'auto', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​</p>',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['57', '17', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​</p>',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '8px', '104px', '21px', 'auto', 'auto'],
                            display: 'block',
                            id: 'close_click',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-18px', '162px', '51px', 'auto', 'auto'],
                            display: 'none',
                            id: 'open_click',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(255,123,123,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '162px', '27px']
                        }
                    }
                },
                timeline: {
                    duration: 1461,
                    autoPlay: true,
                    labels: {
                        "closed": 0,
                        "open": 1450
                    },
                    data: [
                        [
                            "eid219",
                            "width",
                            835,
                            0,
                            "swing",
                            "${ClosedBg}",
                            '106px',
                            '106px'
                        ],
                        [
                            "eid345",
                            "display",
                            1461,
                            0,
                            "linear",
                            "${close_click}",
                            'block',
                            'none'
                        ],
                        [
                            "eid323",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${TextCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid217",
                            "left",
                            835,
                            0,
                            "swing",
                            "${Text}",
                            '-4px',
                            '-4px'
                        ],
                        [
                            "eid321",
                            "display",
                            1297,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid218",
                            "width",
                            835,
                            0,
                            "swing",
                            "${close_click}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid319",
                            "display",
                            1297,
                            0,
                            "linear",
                            "${ClosedBg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid324",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${openBg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid341",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${open_click}",
                            'none',
                            'block'
                        ],
                        [
                            "eid382",
                            "background-color",
                            618,
                            0,
                            "linear",
                            "${ClosedBg}",
                            'rgba(255,255,255,0.66)',
                            'rgba(255,255,255,0.66)'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'frame2-txt2',
                            rect: ['5px', '37px', '235px', '17px', 'auto', 'auto'],
                            clip: 'rect(0px 235px 17px 232px)',
                            fill: ['rgba(0,0,0,0)', 'images/frame2-txt22.png', '0px', '0px']
                        },
                        {
                            rect: ['73px', '-61px', '96px', '169px', 'auto', 'auto'],
                            id: 'frame2-linesCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/frame2-lines.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'frame2-txt13',
                            rect: ['89px', '-40px', '64px', '62px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 62px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/frame2-txt1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'frame2-txt22',
                            rect: ['72px', '28px', '98px', '62px', 'auto', 'auto'],
                            clip: 'rect(0px 98px 62px 100px)',
                            fill: ['rgba(0,0,0,0)', 'images/frame2-txt2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '242px', '71px']
                        }
                    }
                },
                timeline: {
                    duration: 4961,
                    autoPlay: true,
                    data: [
                        [
                            "eid93",
                            "clip",
                            500,
                            750,
                            "easeOutQuad",
                            "${frame2-txt13}",
                            [0,0,62,0],
                            [0,68,62,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid146",
                            "left",
                            4750,
                            211,
                            "linear",
                            "${frame2-txt22}",
                            '72px',
                            '75px'
                        ],
                        [
                            "eid95",
                            "top",
                            1250,
                            0,
                            "easeOutQuad",
                            "${frame2-txt13}",
                            '-40px',
                            '-40px'
                        ],
                        [
                            "eid91",
                            "clip",
                            500,
                            750,
                            "easeOutQuad",
                            "${frame2-txt22}",
                            [0,98,62,100],
                            [0,98,62,-3],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid147",
                            "left",
                            4750,
                            211,
                            "linear",
                            "${frame2-txt13}",
                            '89px',
                            '90px'
                        ],
                        [
                            "eid94",
                            "top",
                            1250,
                            0,
                            "easeOutQuad",
                            "${frame2-txt22}",
                            '28px',
                            '28px'
                        ]
                    ]
                }
            },
            "Symbol_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['32px', '35px', '66px', '65px', 'auto', 'auto'],
                            id: 'try',
                            transform: [[], [], [], ['0.8', '0.8']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/try.png', '0px', '0px']
                        },
                        {
                            rect: ['27px', '30px', '76px', '76px', 'auto', 'auto'],
                            id: 'dots',
                            transform: [[], [], [], ['0.8', '0.8']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dots.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '144px', '143px']
                        }
                    }
                },
                timeline: {
                    duration: 1137,
                    autoPlay: true,
                    data: [
                        [
                            "eid439",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${try}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid461",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${try}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid441",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${try}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid462",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${try}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid436",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${dots}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid460",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${dots}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid435",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${dots}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid459",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${dots}",
                            '0.8',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_3_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['27px', '26px', '91px', '91px', 'auto', 'auto'],
                            id: 'try2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/try.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '144px', '143px']
                        }
                    }
                },
                timeline: {
                    duration: 1137,
                    autoPlay: true,
                    data: [
                        [
                            "eid137",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${try2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${try2}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${try2}",
                            '1',
                            '0.8'
                        ],
                        [
                            "eid136",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${try2}",
                            '0.8',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("widesky_edgeActions.js");
})("EDGE-62253178");
