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
                            id: 'bg2',
                            type: 'image',
                            rect: ['0px', '0px', '728px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
                        },
                        {
                            id: 'copy',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['247px', '9px', '242', '71', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'new',
                            type: 'image',
                            rect: ['31px', '8px', '67px', '47px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"new.png",'0px','0px']
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['240px', '-27px', '245px', '147px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
                        },
                        {
                            id: 'logoCopy',
                            type: 'image',
                            rect: ['240px', '-26px', '245px', '147px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
                        },
                        {
                            id: 'tandc',
                            symbolName: 'tandc_1',
                            type: 'rect',
                            rect: ['0px', '63px', '162', '27', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_3Copy4',
                            symbolName: 'Symbol_3_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['598px', '-24px', '144', '143', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['1.29','1.29']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '728px', '90px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 10042,
                    autoPlay: true,
                    data: [
                        [
                            "eid148",
                            "scaleX",
                            8045,
                            303,
                            "linear",
                            "${Symbol_3Copy4}",
                            '1.29',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            403,
                            579,
                            "linear",
                            "${new}",
                            '0',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            2733,
                            250,
                            "linear",
                            "${new}",
                            '1',
                            '0'
                        ],
                        [
                            "eid62",
                            "left",
                            0,
                            892,
                            "easeOutQuad",
                            "${logo}",
                            '5px',
                            '243px'
                        ],
                        [
                            "eid32",
                            "scaleX",
                            78,
                            788,
                            "swing",
                            "${bg2}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid72",
                            "scaleX",
                            404,
                            579,
                            "linear",
                            "${new}",
                            '1.29',
                            '1'
                        ],
                        [
                            "eid147",
                            "scaleY",
                            8045,
                            303,
                            "linear",
                            "${Symbol_3Copy4}",
                            '1.29',
                            '1'
                        ],
                        [
                            "eid82",
                            "display",
                            7000,
                            0,
                            "easeOutQuad",
                            "${logoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "opacity",
                            3500,
                            500,
                            "easeOutQuad",
                            "${copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            6462,
                            500,
                            "easeOutQuad",
                            "${copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            8045,
                            303,
                            "linear",
                            "${Symbol_3Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "scaleY",
                            78,
                            788,
                            "swing",
                            "${bg2}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid84",
                            "left",
                            7000,
                            1045,
                            "swing",
                            "${logoCopy}",
                            '533px',
                            '240px'
                        ],
                        [
                            "eid145",
                            "display",
                            8045,
                            0,
                            "linear",
                            "${Symbol_3Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "opacity",
                            78,
                            814,
                            "easeOutQuad",
                            "${logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            2750,
                            250,
                            "easeOutQuad",
                            "${logo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "opacity",
                            7061,
                            500,
                            "linear",
                            "${logoCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "scaleY",
                            404,
                            579,
                            "linear",
                            "${new}",
                            '1.29',
                            '1'
                        ],
                            [ "eid29", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${copy}', [] ] ],
                            [ "eid130", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${tandc}', [] ] ],
                            [ "eid149", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_3Copy4}', [] ] ],
                            [ "eid98", "trigger", 3250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${copy}', [] ] ],
                            [ "eid99", "trigger", 6000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${copy}', [] ] ],
                            [ "eid150", "trigger", 8045, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_3Copy4}', [] ] ]
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
                            rect: ['0px', '1px', '126px', '26px', 'auto', 'auto'],
                            id: 'ClosedBg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.66)']
                        },
                        {
                            rect: ['-1px', '8px', '125px', '16px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [11, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            display: 'block',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Terms and conditions <span style=\"font-size: 11px;\"></span></p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['200', '90', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['57', '17', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '1px', '378px', '26px', 'auto', 'auto'],
                            id: 'ClosedBgCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(255,255,255,0.66)']
                        },
                        {
                            rect: ['10px', '8px', '475px', '16px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [11, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">Participating stores. Subject to availability. T&amp;C apply, see dominos.co.uk​</p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-1px', '167px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'close_click',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['2px', '-2px', '300px', '30px', 'auto', 'auto'],
                            display: 'none',
                            id: 'open_click',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(255,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '162px', '27px']
                        }
                    }
                },
                timeline: {
                    duration: 14794,
                    autoPlay: true,
                    labels: {
                        "closed": 0,
                        "open": 1450
                    },
                    data: [
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
                            "eid124",
                            "top",
                            14794,
                            0,
                            "linear",
                            "${TextCopy}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid126",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${ClosedBgCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "width",
                            14794,
                            0,
                            "linear",
                            "${TextCopy}",
                            '475px',
                            '475px'
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
                            "eid122",
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
                            rect: ['5px', '37px', '235px', '17px', 'auto', 'auto'],
                            id: 'frame2-txt2',
                            type: 'image',
                            clip: 'rect(0px 235px 17px 232px)',
                            fill: ['rgba(0,0,0,0)', 'images/frame2-txt2.png', '0px', '0px']
                        },
                        {
                            rect: ['3px', '17px', '235px', '16px', 'auto', 'auto'],
                            id: 'frame2-txt1',
                            type: 'image',
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
                            id: 'try',
                            type: 'image',
                            rect: ['32px', '35px', '66px', '65px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/try2.png', '0px', '0px']
                        },
                        {
                            id: 'dots',
                            type: 'image',
                            rect: ['27px', '30px', '76px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/dots2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '144px', '143px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid231",
                            "rotateZ",
                            0,
                            7000,
                            "linear",
                            "${dots}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "tandc_1": {
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
                            rect: ['0px', '8px', '343px', '19px', 'auto', 'auto'],
                            id: 'openBg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(255,255,255,0.66)']
                        },
                        {
                            rect: ['-2px', '11px', '109px', '16px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            display: 'block',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Terms &amp; conditions <span style=\"font-size: 11px;\"></span></p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['8px', '12px', '399px', '16px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">Participating stores. Subject to availability. T&amp;C apply, see dominos.co.uk​</p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['200', '90', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '-1px', '167px', '30px', 'auto', 'auto'],
                            display: 'block',
                            id: 'close_click',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['2px', '8px', '341px', '20px', 'auto', 'auto'],
                            display: 'none',
                            id: 'open_click',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: ['57', '17', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
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
                            '12px',
                            '12px'
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
            "Symbol_3_2": {
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
                            fill: ['rgba(0,0,0,0)', 'images/try3.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'dots',
                            type: 'image',
                            rect: ['27px', '30px', '76px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/dots3.png', '0px', '0px']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("leaderboard_edgeActions.js");
})("EDGE-56609439");
