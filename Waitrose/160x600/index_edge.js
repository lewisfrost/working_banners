/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Waitrose-Bold': '<link rel=\"stylesheet\" href=\"stylesheet\" type=\"text/css\" media=\"screen\"/>',
            'Waitrose': '<link rel=\"stylesheet\" href=\"stylesheet.css\" type=\"text/css\" media=\"screen\"/>'        },
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'on_every_order',
                            type: 'text',
                            rect: ['0px', '57px', '160px', '189px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center; line-height: 33px; pointer-events: auto;\"><span style=\"font-size: 30px; font-family: Waitrose; pointer-events: auto;\">1 hour </span></p><p style=\"margin: 0px; text-align: center; line-height: 33px; pointer-events: auto;\"><span style=\"font-size: 30px; font-family: Waitrose; pointer-events: auto;\">slots</span></p><p style=\"margin: 0px; text-align: center; line-height: 33px; pointer-events: auto;\"><span style=\"font-size: 30px; font-family: Waitrose; pointer-events: auto;\">and </span></p><p style=\"margin: 0px; text-align: center; line-height: 33px; pointer-events: auto;\"><span style=\"font-size: 30px; font-family: Waitrose; pointer-events: auto;\">free </span></p><p style=\"margin: 0px; text-align: center; line-height: 33px; pointer-events: auto;\"><span style=\"font-size: 30px; font-family: Waitrose; pointer-events: auto;\">delivery</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Message2',
                            display: 'none',
                            type: 'text',
                            rect: ['0px', '22px', '160px', '205px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center; line-height: 33px; pointer-events: auto;\"><span style=\"font-family: Waitrose; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; pointer-events: auto;\"><br style=\"pointer-events: auto;\"></span><span style=\"font-size: 50px; color: rgb(192, 0, 43); font-family: Waitrose; font-weight: 700; pointer-events: auto;\">£100</span></p><p style=\"margin: 0px; text-align: center; line-height: 33px; pointer-events: auto;\"><span style=\"font-size: 50px; color: rgb(192, 0, 43); font-family: Waitrose; font-weight: 700; pointer-events: auto;\">OFF</span><span style=\"font-size: 30px; font-family: Waitrose; font-weight: 700; pointer-events: auto;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 33px; pointer-events: auto;\"><span style=\"font-size: 30px; font-family: Waitrose; font-weight: 700; pointer-events: auto;\"></span><span style=\"font-family: Waitrose; font-size: 30px; pointer-events: auto;\">your first <br style=\"pointer-events: auto;\">5 online <br style=\"pointer-events: auto;\">grocery shops</span></p>",
                            font: ['Waitrose-Bold', [24, "undefined"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "44px", "", ""]
                        },
                        {
                            id: 'roadCopy2',
                            type: 'image',
                            rect: ['0px', '447px', '160px', '9px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'Images/road2.png','0px','0px']
                        },
                        {
                            id: 'door',
                            type: 'image',
                            rect: ['90px', '298px', '61px', '147px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'Images/door.png','0px','0px']
                        },
                        {
                            id: 'vehicle',
                            symbolName: 'vehicle',
                            type: 'rect',
                            rect: ['-238px', '332', '279', '124', 'auto', 'auto']
                        },
                        {
                            id: 'TCs',
                            display: 'none',
                            type: 'text',
                            rect: ['-61px', '500px', '282px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 14px; font-family: Waitrose; color: rgb(83, 86, 90);\">See site for full T&amp;Cs</span>\n</p>",
                            align: "center",
                            font: ['Waitrose-Bold', [14, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'MinSpend',
                            type: 'text',
                            rect: ['-61px', '480px', '282px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\"><span style=\"font-family: Waitrose; font-size: 14px; color: rgb(83, 86, 90);\">Min. spend applies</span></p>",
                            align: "center",
                            font: ['Waitrose-Bold', [14, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Frame',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '158px', '598px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgb(82, 130, 56)","solid"]
                        },
                        {
                            id: 'refresh',
                            display: 'none',
                            type: 'image',
                            rect: ['2px', '2px', '17px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'Images/refresh.png','0px','0px']
                        },
                        {
                            id: 'ReplayHotspot',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'GREENBTN',
                            type: 'image',
                            rect: ['0px', '519px', '160px', '81px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/GREENBTN.JPG','0px','0px']
                        },
                        {
                            id: 'WaitroseLogo',
                            type: 'image',
                            rect: ['9px', '532px', '142px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/WaitroseLogo.png','0px','0px']
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
                    duration: 10000,
                    autoPlay: true,
                    labels: {
                        "beginning": 0
                    },
                    data: [
                        [
                            "eid742",
                            "font-size",
                            1353,
                            0,
                            "linear",
                            "${MinSpend}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1244",
                            "height",
                            3028,
                            0,
                            "linear",
                            "${Message2}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid982",
                            "display",
                            9258,
                            0,
                            "linear",
                            "${refresh}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1399",
                            "width",
                            0,
                            0,
                            "easeOutQuad",
                            "${roadCopy2}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid1222",
                            "top",
                            4943,
                            0,
                            "linear",
                            "${MinSpend}",
                            '480px',
                            '480px'
                        ],
                        [
                            "eid551",
                            "display",
                            1353,
                            0,
                            "linear",
                            "${Message2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1354",
                            "display",
                            7583,
                            0,
                            "linear",
                            "${Message2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid492",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Frame}",
                            'none',
                            'block'
                        ],
                        [
                            "eid220",
                            "display",
                            1353,
                            0,
                            "linear",
                            "${TCs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1220",
                            "top",
                            4943,
                            0,
                            "linear",
                            "${TCs}",
                            '500px',
                            '500px'
                        ],
                        [
                            "eid543",
                            "opacity",
                            1353,
                            470,
                            "linear",
                            "${Message2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid557",
                            "opacity",
                            3693,
                            501,
                            "linear",
                            "${Message2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1352",
                            "opacity",
                            7583,
                            470,
                            "linear",
                            "${Message2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            1353,
                            396,
                            "linear",
                            "${TCs}",
                            '0',
                            '1'
                        ],
                        [
                            "eid493",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${Frame}",
                            'rgb(82, 130, 56)',
                            'rgb(82, 130, 56)'
                        ],
                        [
                            "eid1243",
                            "width",
                            3028,
                            0,
                            "linear",
                            "${Message2}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid1233",
                            "left",
                            4943,
                            0,
                            "linear",
                            "${MinSpend}",
                            '-61px',
                            '-61px'
                        ],
                        [
                            "eid1396",
                            "left",
                            0,
                            1353,
                            "easeOutQuad",
                            "${roadCopy2}",
                            '131px',
                            '0px'
                        ],
                        [
                            "eid315",
                            "display",
                            9258,
                            0,
                            "linear",
                            "${ReplayHotspot}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1232",
                            "left",
                            4943,
                            0,
                            "linear",
                            "${TCs}",
                            '-61px',
                            '-61px'
                        ],
                        [
                            "eid986",
                            "opacity",
                            9258,
                            742,
                            "linear",
                            "${refresh}",
                            '0',
                            '1'
                        ],
                        [
                            "eid897",
                            "left",
                            0,
                            1353,
                            "easeOutQuad",
                            "${door}",
                            '240px',
                            '90px'
                        ],
                        [
                            "eid1395",
                            "height",
                            0,
                            0,
                            "easeOutQuad",
                            "${roadCopy2}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid565",
                            "opacity",
                            1353,
                            396,
                            "linear",
                            "${MinSpend}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1347",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Frame}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1348",
                            "opacity",
                            397,
                            0,
                            "linear",
                            "${Frame}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1400",
                            "left",
                            0,
                            1353,
                            "linear",
                            "${vehicle}",
                            '-396px',
                            '-238px'
                        ],
                        [
                            "eid981",
                            "opacity",
                            4194,
                            500,
                            "linear",
                            "${on_every_order}",
                            '0',
                            '1'
                        ],
                        [
                            "eid980",
                            "opacity",
                            7011,
                            572,
                            "linear",
                            "${on_every_order}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "heart-3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-3',
                            t: 'image',
                            rect: ['0px', '0px', '42px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '42px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "heart-2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-23',
                            t: 'image',
                            rect: ['0px', '0px', '50px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "heart-1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-1',
                            t: 'image',
                            rect: ['0px', '0px', '55px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '55px', '55px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "falling-hearts": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1',
                            t: 'rect',
                            rect: ['7px', '-60px', '55', '55', 'auto', 'auto'],
                            symbolName: 'heart-1'
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2',
                            t: 'rect',
                            rect: ['47px', '-60px', '50', '49', 'auto', 'auto'],
                            symbolName: 'heart-2'
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3',
                            t: 'rect',
                            rect: ['94px', '-60px', '42', '42', 'auto', 'auto'],
                            symbolName: 'heart-3'
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy8',
                            t: 'rect',
                            rect: ['7px', '-60px', '55', '55', 'auto', 'auto'],
                            symbolName: 'heart-1'
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy8',
                            t: 'rect',
                            rect: ['47px', '-60px', '50', '49', 'auto', 'auto'],
                            symbolName: 'heart-2'
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy8',
                            t: 'rect',
                            rect: ['94px', '-60px', '42', '42', 'auto', 'auto'],
                            symbolName: 'heart-3'
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy9',
                            t: 'rect',
                            rect: ['7px', '-60px', '55', '55', 'auto', 'auto'],
                            symbolName: 'heart-1'
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy9',
                            t: 'rect',
                            rect: ['47px', '-60px', '50', '49', 'auto', 'auto'],
                            symbolName: 'heart-2'
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy9',
                            t: 'rect',
                            rect: ['94px', '-60px', '42', '42', 'auto', 'auto'],
                            symbolName: 'heart-3'
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy',
                            t: 'rect',
                            rect: ['57px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            tf: null,
                            transform: [[], [], [], ['0.62', '0.62']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy',
                            t: 'rect',
                            rect: ['-3px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            tf: null,
                            transform: [[], [], [], ['0.62', '0.62']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy',
                            t: 'rect',
                            rect: ['34px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            tf: null,
                            transform: [[], [], [], ['0.62', '0.62']]
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy3',
                            t: 'rect',
                            rect: ['7px', '-60px', '55', '55', 'auto', 'auto'],
                            symbolName: 'heart-1'
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy3',
                            t: 'rect',
                            rect: ['47px', '-60px', '50', '49', 'auto', 'auto'],
                            symbolName: 'heart-2'
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy3',
                            t: 'rect',
                            rect: ['94px', '-60px', '42', '42', 'auto', 'auto'],
                            symbolName: 'heart-3'
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy2',
                            t: 'rect',
                            rect: ['57px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            tf: null,
                            transform: [[], [], [], ['0.62', '0.62']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy2',
                            t: 'rect',
                            rect: ['-3px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            tf: null,
                            transform: [[], [], [], ['0.62', '0.62']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy2',
                            t: 'rect',
                            rect: ['34px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            tf: null,
                            transform: [[], [], [], ['0.62', '0.62']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy7',
                            t: 'rect',
                            rect: ['-23px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy7',
                            t: 'rect',
                            rect: ['17px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy7',
                            t: 'rect',
                            rect: ['64px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy6',
                            t: 'rect',
                            rect: ['27px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy6',
                            t: 'rect',
                            rect: ['-33px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy6',
                            t: 'rect',
                            rect: ['4px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy5',
                            t: 'rect',
                            rect: ['-23px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy5',
                            t: 'rect',
                            rect: ['17px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy5',
                            t: 'rect',
                            rect: ['64px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy4',
                            t: 'rect',
                            rect: ['27px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy4',
                            t: 'rect',
                            rect: ['-33px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy4',
                            t: 'rect',
                            rect: ['4px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            tf: null,
                            transform: [[], [], [], ['0.49', '0.49']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '55px', '55px']
                        }
                    }
                },
                timeline: {
                    duration: 5750,
                    autoPlay: true,
                    data: [
                        [
                            "eid1356",
                            "top",
                            500,
                            2000,
                            "easeInQuad",
                            "${heart-3}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1381",
                            "top",
                            2500,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy8}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1374",
                            "top",
                            2500,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy5}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1368",
                            "top",
                            750,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy3}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1358",
                            "top",
                            0,
                            2000,
                            "easeInQuad",
                            "${heart-1}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1363",
                            "top",
                            3500,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy2}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1380",
                            "top",
                            1000,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy7}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1370",
                            "top",
                            3500,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy4}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1361",
                            "top",
                            1750,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1362",
                            "top",
                            750,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1367",
                            "top",
                            1750,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy3}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1365",
                            "top",
                            1500,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy2}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1357",
                            "top",
                            1000,
                            2000,
                            "easeInQuad",
                            "${heart-2}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1383",
                            "top",
                            2000,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy8}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1384",
                            "top",
                            3250,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy9}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1366",
                            "top",
                            1250,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy3}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1364",
                            "top",
                            2250,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy2}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1379",
                            "top",
                            3000,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy7}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1375",
                            "top",
                            2250,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy6}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1369",
                            "top",
                            3000,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy4}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1377",
                            "top",
                            3250,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy6}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1385",
                            "top",
                            3750,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy9}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1373",
                            "top",
                            2750,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy5}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1360",
                            "top",
                            1250,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1378",
                            "top",
                            2500,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy7}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1386",
                            "top",
                            2750,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy9}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1371",
                            "top",
                            2500,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy4}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1372",
                            "top",
                            2250,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy5}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1376",
                            "top",
                            2500,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy6}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1382",
                            "top",
                            3000,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy8}",
                            '-60px',
                            '630px'
                        ]
                    ]
                }
            },
            "hub": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'hub',
                            t: 'image',
                            rect: ['0px', '0px', '29px', '29px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/hub.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '29px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "vehicle": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            r: null,
                            id: 'vanCopy',
                            t: 'image',
                            f: null,
                            rect: ['105px', '0px', '279px', '124px', 'auto', 'auto'],
                            opacity: '1',
                            o: null,
                            fill: ['rgba(0,0,0,0)', 'Images/van2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'hub3',
                            t: 'rect',
                            rect: ['330px', '89px', null, null, 'auto', 'auto'],
                            symbolName: 'hub'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '279px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-8101559");
