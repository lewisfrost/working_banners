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
                            id: 'background',
                            type: 'image',
                            rect: ['0', '0', '300px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background.jpg",'0px','0px'],
                            transform: [[],[],[],['1.2','1.5']]
                        },
                        {
                            id: 'new',
                            type: 'image',
                            rect: ['17px', '17px', '67px', '47px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"new.png",'0px','0px'],
                            transform: [[],[],[],['1.29','1.29']]
                        },
                        {
                            id: 'logo23',
                            type: 'image',
                            rect: ['51px', '46px', '273px', '160px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo2.png",'0px','0px']
                        },
                        {
                            id: 'copy',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['28px', '88px', '242', '71', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'frame3-logo',
                            display: 'none',
                            type: 'image',
                            rect: ['11px', '31px', '273px', '160px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"logo2.png",'0px','0px']
                        },
                        {
                            id: 'Symbol_3',
                            symbolName: 'Symbol_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['87px', '131px', '144', '143', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['1.29','1.29']]
                        },
                        {
                            id: 'tandc',
                            symbolName: 'tandc',
                            type: 'rect',
                            rect: ['0px', '225px', '162', '27', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['22', '240', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 12982,
                    autoPlay: true,
                    data: [
                        [
                            "eid293",
                            "left",
                            4500,
                            0,
                            "easeOutQuad",
                            "${copy}",
                            '28px',
                            '28px'
                        ],
                        [
                            "eid186",
                            "opacity",
                            78,
                            814,
                            "easeOutQuad",
                            "${logo23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid187",
                            "opacity",
                            2750,
                            250,
                            "easeOutQuad",
                            "${logo23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid318",
                            "opacity",
                            8045,
                            303,
                            "linear",
                            "${Symbol_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid239",
                            "display",
                            8045,
                            0,
                            "linear",
                            "${Symbol_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid185",
                            "display",
                            3250,
                            0,
                            "easeOutQuad",
                            "${logo23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid188",
                            "left",
                            0,
                            892,
                            "easeOutQuad",
                            "${logo23}",
                            '-224px',
                            '11px'
                        ],
                        [
                            "eid180",
                            "left",
                            7000,
                            1045,
                            "swing",
                            "${frame3-logo}",
                            '304px',
                            '11px'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            421,
                            579,
                            "linear",
                            "${new}",
                            '1.29',
                            '1'
                        ],
                        [
                            "eid228",
                            "scaleY",
                            78,
                            788,
                            "swing",
                            "${background}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid219",
                            "opacity",
                            420,
                            579,
                            "linear",
                            "${new}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "opacity",
                            2750,
                            250,
                            "linear",
                            "${new}",
                            '1',
                            '0'
                        ],
                        [
                            "eid227",
                            "scaleX",
                            78,
                            788,
                            "swing",
                            "${background}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            3500,
                            500,
                            "easeOutQuad",
                            "${copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            6462,
                            500,
                            "easeOutQuad",
                            "${copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid249",
                            "scaleY",
                            8045,
                            303,
                            "linear",
                            "${Symbol_3}",
                            '1.29',
                            '1'
                        ],
                        [
                            "eid44",
                            "scaleX",
                            421,
                            579,
                            "linear",
                            "${new}",
                            '1.29',
                            '1'
                        ],
                        [
                            "eid315",
                            "opacity",
                            7061,
                            500,
                            "linear",
                            "${frame3-logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid248",
                            "scaleX",
                            8045,
                            303,
                            "linear",
                            "${Symbol_3}",
                            '1.29',
                            '1'
                        ],
                        [
                            "eid286",
                            "top",
                            4500,
                            0,
                            "easeOutQuad",
                            "${copy}",
                            '88px',
                            '88px'
                        ],
                        [
                            "eid175",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${frame3-logo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid177",
                            "display",
                            7000,
                            0,
                            "easeOutQuad",
                            "${frame3-logo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid366",
                            "top",
                            1472,
                            11510,
                            "linear",
                            "${tandc}",
                            '225px',
                            '224px'
                        ],
                            [ "eid147", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${copy}', [] ] ],
                            [ "eid240", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_3}', [] ] ],
                            [ "eid331", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${tandc}', ['closed'] ] ],
                            [ "eid148", "trigger", 3250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${copy}', [] ] ],
                            [ "eid149", "trigger", 6000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${copy}', [] ] ],
                            [ "eid241", "trigger", 8045, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_3}', [] ] ]
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
                            rect: ['4px', '0px', '238px', '71px', 'auto', 'auto'],
                            id: 'frame2-lines',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/frame2-lines.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'frame2-txt2',
                            rect: ['5px', '37px', '235px', '17px', 'auto', 'auto'],
                            clip: 'rect(0px 235px 17px 232px)',
                            fill: ['rgba(0,0,0,0)', 'images/frame2-txt2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'frame2-txt1',
                            rect: ['3px', '17px', '235px', '16px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 16px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/frame2-txt1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '242px', '71px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid138",
                            "clip",
                            500,
                            750,
                            "easeOutQuad",
                            "${frame2-txt1}",
                            [0,0,16,0],
                            [0,235,16,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid134",
                            "clip",
                            500,
                            750,
                            "easeOutQuad",
                            "${frame2-txt2}",
                            [0,235,17,232],
                            [0,235,17,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Symbol_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '273px', '160px', 'auto', 'auto'],
                            type: 'image',
                            id: 'logo2',
                            filter: [0, 0, 1, 0.09, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'block',
                            opacity: '1',
                            clip: 'rect(0px 273px 160px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/logo2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '273px', '160px']
                        }
                    }
                },
                timeline: {
                    duration: 7300,
                    autoPlay: true,
                    data: [
                        [
                            "eid63",
                            "opacity",
                            692,
                            814,
                            "easeOutQuad",
                            "${logo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            2750,
                            352,
                            "easeOutQuad",
                            "${logo2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid101",
                            "left",
                            614,
                            892,
                            "easeOutQuad",
                            "${logo2}",
                            '0px',
                            '296px'
                        ],
                        [
                            "eid153",
                            "display",
                            3250,
                            0,
                            "easeOutQuad",
                            "${logo2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            7300,
                            0,
                            "easeOutQuad",
                            "${logo2}",
                            'none',
                            'block'
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
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'try',
                            type: 'image',
                            rect: ['32px', '35px', '66px', '65px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/try.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'dots',
                            type: 'image',
                            rect: ['27px', '30px', '76px', '76px', 'auto', 'auto'],
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
                        ]
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
                            rect: ['0px', '8px', '106px', '19px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'ClosedBg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.66)']
                        },
                        {
                            rect: ['0px', '-5px', '300px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'openBg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(255,255,255,0.66)']
                        },
                        {
                            type: 'text',
                            rect: ['-2px', '11px', '109px', '16px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Terms &amp; conditions <span style=\"font-size: 11px;\"></span></p>',
                            display: 'block',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['8px', '-1px', '278px', '16px', 'auto', 'auto'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">Participating stores. Subject to availability. T&amp;C apply, see dominos.co.uk​</p>',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['200', '90', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['0px', '-1px', '167px', '30px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'close_click',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: ['2px', '-2px', '300px', '30px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'open_click',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['57', '17', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​</p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '162px', '27px']
                        }
                    }
                },
                timeline: {
                    duration: 12982,
                    autoPlay: true,
                    labels: {
                        "closed": 0,
                        "open": 1450
                    },
                    data: [
                        [
                            "eid382",
                            "background-color",
                            618,
                            0,
                            "linear",
                            "${ClosedBg}",
                            'rgba(255,255,255,0.66)',
                            'rgba(255,255,255,0.66)'
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
                            "eid365",
                            "top",
                            12982,
                            0,
                            "linear",
                            "${TextCopy}",
                            '-1px',
                            '-1px'
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
                            "eid323",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${TextCopy}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mpu_edgeActions.js");
})("EDGE-19228082");
