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
                            display: 'none',
                            type: 'text',
                            rect: ['41px', '41px', '214px', '132px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center; visibility: visible; pointer-events: auto;\"><span style=\"font-family: Waitrose; font-size: 35px; visibility: visible; pointer-events: auto;\">1 hour slots </span></p><p style=\"margin: 0px; text-align: center; visibility: visible; pointer-events: auto;\"><span style=\"font-family: Waitrose; font-size: 35px; visibility: visible; pointer-events: auto;\">and</span></p><p style=\"margin: 0px; text-align: center; visibility: visible; pointer-events: auto;\"><span style=\"font-family: Waitrose; font-size: 35px; visibility: visible; pointer-events: auto;\">​free delivery</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Message2',
                            display: 'none',
                            type: 'text',
                            rect: ['28px', '41px', '385px', '146px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: left; line-height: 42px; visibility: visible; pointer-events: auto;\"><span style=\"font-size: 69px; color: rgb(192, 0, 43); font-family: Waitrose; font-weight: 700; visibility: visible; pointer-events: auto;\">​</span><span style=\"font-size: 60px; color: rgb(192, 0, 43); font-family: Waitrose; font-weight: 700; visibility: visible; pointer-events: auto;\">£100 OFF</span><span style=\"font-size: 69px; font-family: Waitrose; font-weight: 700; visibility: visible; pointer-events: auto;\">​</span></p><p style=\"margin: 0px; text-align: left; line-height: 42px; visibility: visible; pointer-events: auto;\"><span style=\"font-size: 38px; font-family: Waitrose; visibility: visible; pointer-events: auto;\">your first 5 online grocery shops</span></p>",
                            font: ['Waitrose-Bold', [24, "undefined"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "44px", "", ""]
                        },
                        {
                            id: 'road',
                            type: 'image',
                            rect: ['777px', '206px', '792px', '7px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'Images/road.png','0px','0px']
                        },
                        {
                            id: 'door',
                            type: 'image',
                            rect: ['616px', '47px', '65px', '158px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'Images/door.png','0px','0px']
                        },
                        {
                            id: 'vehicle2',
                            symbolName: 'vehicle',
                            type: 'rect',
                            rect: ['342px', '68', '321', '143', 'auto', 'auto']
                        },
                        {
                            id: 'GreenBTN',
                            type: 'image',
                            rect: ['776px', '0px', '194px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/GreenBTN.jpg','0px','0px']
                        },
                        {
                            id: 'TCs',
                            display: 'none',
                            type: 'text',
                            rect: ['482px', '215px', '282px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: right;\">​<span style=\"font-size: 14px; font-family: Waitrose; color: rgb(83, 86, 90);\">See site for full T&amp;Cs</span>\n</p>",
                            align: "center",
                            font: ['Waitrose-Bold', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'MinSpend',
                            type: 'text',
                            rect: ['482px', '0px', '282px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: right;\"><span style=\"font-family: Waitrose; font-size: 14px; color: rgb(83, 86, 90);\">Min. spend applies</span></p>",
                            align: "center",
                            font: ['Waitrose-Bold', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'WaitroseLogo',
                            type: 'image',
                            rect: ['800px', '123px', '141px', '29px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/WaitroseLogo.png','0px','0px']
                        },
                        {
                            id: 'Shop_online',
                            type: 'text',
                            rect: ['805px', '93px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: Waitrose; color: rgb(255, 255, 255); font-size: 23px;\">Shop online at</span></p>",
                            align: "left",
                            font: ['Waitrose-Bold', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'replay',
                            display: 'none',
                            type: 'image',
                            rect: ['3px', '4px', '17px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'Images/replay.png','0px','0px']
                        },
                        {
                            id: 'Frame',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '968px', '248px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgb(82, 130, 56)","solid"]
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
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '970px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 8331,
                    autoPlay: true,
                    labels: {
                        "beginning": 0
                    },
                    data: [
                        [
                            "eid565",
                            "opacity",
                            518,
                            396,
                            "linear",
                            "${MinSpend}",
                            '0',
                            '1'
                        ],
                        [
                            "eid497",
                            "opacity",
                            0,
                            397,
                            "linear",
                            "${Frame}",
                            '0',
                            '1'
                        ],
                        [
                            "eid551",
                            "display",
                            1631,
                            0,
                            "linear",
                            "${Message2}",
                            'none',
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
                            518,
                            0,
                            "linear",
                            "${TCs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid610",
                            "display",
                            4472,
                            0,
                            "linear",
                            "${on_every_order}",
                            'none',
                            'block'
                        ],
                        [
                            "eid611",
                            "display",
                            7861,
                            0,
                            "linear",
                            "${on_every_order}",
                            'block',
                            'none'
                        ],
                        [
                            "eid153",
                            "opacity",
                            518,
                            396,
                            "linear",
                            "${TCs}",
                            '0',
                            '1'
                        ],
                        [
                            "eid544",
                            "left",
                            1631,
                            0,
                            "linear",
                            "${Message2}",
                            '28px',
                            '28px'
                        ],
                        [
                            "eid613",
                            "opacity",
                            4472,
                            500,
                            "linear",
                            "${on_every_order}",
                            '0',
                            '1'
                        ],
                        [
                            "eid615",
                            "opacity",
                            7289,
                            572,
                            "linear",
                            "${on_every_order}",
                            '1',
                            '0'
                        ],
                        [
                            "eid522",
                            "top",
                            1691,
                            0,
                            "linear",
                            "${TCs}",
                            '215px',
                            '215px'
                        ],
                        [
                            "eid507",
                            "left",
                            28,
                            1603,
                            "easeOutQuad",
                            "${door}",
                            '1381px',
                            '616px'
                        ],
                        [
                            "eid521",
                            "left",
                            1691,
                            0,
                            "linear",
                            "${TCs}",
                            '482px',
                            '482px'
                        ],
                        [
                            "eid616",
                            "opacity",
                            7619,
                            712,
                            "linear",
                            "${replay}",
                            '0',
                            '1'
                        ],
                        [
                            "eid748",
                            "left",
                            278,
                            1353,
                            "linear",
                            "${vehicle2}",
                            '-355px',
                            '342px'
                        ],
                        [
                            "eid597",
                            "display",
                            7619,
                            0,
                            "linear",
                            "${replay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid543",
                            "opacity",
                            1631,
                            470,
                            "linear",
                            "${Message2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid557",
                            "opacity",
                            3971,
                            501,
                            "linear",
                            "${Message2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid746",
                            "opacity",
                            7861,
                            470,
                            "linear",
                            "${Message2}",
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
                            "eid506",
                            "left",
                            28,
                            1603,
                            "easeOutQuad",
                            "${road}",
                            '777px',
                            '0px'
                        ],
                        [
                            "eid315",
                            "display",
                            7619,
                            0,
                            "linear",
                            "${ReplayHotspot}",
                            'none',
                            'block'
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
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px'],
                            r: null,
                            id: 'heart-3',
                            t: 'image',
                            rect: ['0px', '0px', '42px', '42px', 'auto', 'auto'],
                            f: null
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
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px'],
                            r: null,
                            id: 'heart-23',
                            t: 'image',
                            rect: ['-10px', '0px', '50px', '49px', 'auto', 'auto'],
                            f: null
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
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px'],
                            r: null,
                            id: 'heart-1',
                            t: 'image',
                            rect: ['0px', '0px', '55px', '55px', 'auto', 'auto'],
                            f: null
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
                            symbolName: 'heart-1',
                            rect: ['7px', '270px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy12',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['237px', '270px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['77px', '270px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy13',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['407px', '270px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['134px', '270px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy',
                            t: 'rect',
                            rect: ['269px', '270px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy',
                            t: 'rect',
                            rect: ['169px', '270px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy',
                            t: 'rect',
                            rect: ['226px', '270px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy15',
                            t: 'rect',
                            rect: ['336px', '270px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy3',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['320px', '-60px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy13',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['710px', '-60px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy3',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['390px', '-60px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy3',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['447px', '-60px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy2',
                            t: 'rect',
                            rect: ['582px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy2',
                            t: 'rect',
                            rect: ['482px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy2',
                            t: 'rect',
                            rect: ['539px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy12',
                            t: 'rect',
                            rect: ['499px', '270px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy14',
                            t: 'rect',
                            rect: ['636px', '270px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy13',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['677px', '-60px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy19',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['197px', '270px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy18',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['427px', '270px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy19',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['267px', '270px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy18',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['597px', '270px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy22',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['324px', '270px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy17',
                            t: 'rect',
                            rect: ['459px', '270px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy17',
                            t: 'rect',
                            rect: ['359px', '270px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy21',
                            t: 'rect',
                            rect: ['416px', '270px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy20',
                            t: 'rect',
                            rect: ['526px', '270px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy16',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['510px', '-60px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy15',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['900px', '-60px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy16',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['580px', '-60px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy19',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['637px', '-60px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy14',
                            t: 'rect',
                            rect: ['772px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy15',
                            t: 'rect',
                            rect: ['672px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy18',
                            t: 'rect',
                            rect: ['729px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy14',
                            t: 'rect',
                            rect: ['689px', '270px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy17',
                            t: 'rect',
                            rect: ['826px', '270px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy16',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['867px', '-60px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy25',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['-83px', '270px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy24',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['147px', '270px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy25',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['-13px', '270px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy24',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['317px', '270px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy29',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['44px', '270px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy23',
                            t: 'rect',
                            rect: ['179px', '270px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy23',
                            t: 'rect',
                            rect: ['79px', '270px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy28',
                            t: 'rect',
                            rect: ['136px', '270px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy27',
                            t: 'rect',
                            rect: ['246px', '270px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy22',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['230px', '-60px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy21',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['620px', '-60px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy22',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['300px', '-60px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy26',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['357px', '-60px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy20',
                            t: 'rect',
                            rect: ['492px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy21',
                            t: 'rect',
                            rect: ['392px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy25',
                            t: 'rect',
                            rect: ['449px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy20',
                            t: 'rect',
                            rect: ['409px', '270px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy24',
                            t: 'rect',
                            rect: ['546px', '270px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.72', '0.72']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy23',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['587px', '-60px', '42', '42', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '55px', '55px']
                        }
                    }
                },
                timeline: {
                    duration: 2867,
                    autoPlay: true,
                    data: [
                        [
                            "eid707",
                            "top",
                            867,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy26}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid715",
                            "top",
                            967,
                            650,
                            "easeInQuad",
                            "${heart-3Copy29}",
                            '-60px',
                            '4px'
                        ],
                        [
                            "eid716",
                            "top",
                            1617,
                            850,
                            "easeInQuad",
                            "${heart-3Copy29}",
                            '4px',
                            '270px'
                        ],
                        [
                            "eid699",
                            "top",
                            435,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy18}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid796",
                            "top",
                            0,
                            1500,
                            "easeInQuad",
                            "${heart-1}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid688",
                            "top",
                            482,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy16}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid636",
                            "top",
                            100,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy2}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid705",
                            "top",
                            1184,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy21}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid684",
                            "top",
                            535,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy18}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid675",
                            "top",
                            173,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy14}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid703",
                            "top",
                            967,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy20}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid704",
                            "top",
                            967,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy25}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid720",
                            "top",
                            867,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy25}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid637",
                            "top",
                            317,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy2}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid717",
                            "top",
                            1367,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy24}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid700",
                            "top",
                            435,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy19}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid694",
                            "top",
                            654,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy17}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid687",
                            "top",
                            435,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy19}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid709",
                            "top",
                            914,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy21}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid633",
                            "top",
                            173,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid708",
                            "top",
                            914,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy22}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid697",
                            "top",
                            935,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy18}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid639",
                            "top",
                            0,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy3}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid714",
                            "top",
                            1086,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy23}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid712",
                            "top",
                            1040,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy28}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid676",
                            "top",
                            100,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy12}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid794",
                            "top",
                            100,
                            650,
                            "easeInQuad",
                            "${heart-3}",
                            '-60px',
                            '4px'
                        ],
                        [
                            "eid672",
                            "top",
                            750,
                            850,
                            "easeInQuad",
                            "${heart-3}",
                            '4px',
                            '270px'
                        ],
                        [
                            "eid711",
                            "top",
                            1367,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy27}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid682",
                            "top",
                            608,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy17}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid641",
                            "top",
                            47,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy3}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid706",
                            "top",
                            1040,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy20}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid693",
                            "top",
                            535,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy17}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid683",
                            "top",
                            535,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy14}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid702",
                            "top",
                            1040,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy24}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid718",
                            "top",
                            1040,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy25}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid689",
                            "top",
                            482,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy15}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid634",
                            "top",
                            100,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid681",
                            "top",
                            435,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy16}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid640",
                            "top",
                            47,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy3}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid695",
                            "top",
                            535,
                            650,
                            "easeInQuad",
                            "${heart-3Copy22}",
                            '-60px',
                            '4px'
                        ],
                        [
                            "eid696",
                            "top",
                            1185,
                            850,
                            "easeInQuad",
                            "${heart-3Copy22}",
                            '4px',
                            '270px'
                        ],
                        [
                            "eid795",
                            "top",
                            173,
                            1500,
                            "easeInQuad",
                            "${heart-2}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid679",
                            "top",
                            500,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy13}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid638",
                            "top",
                            173,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy2}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid710",
                            "top",
                            914,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy22}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid713",
                            "top",
                            967,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy23}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid698",
                            "top",
                            608,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy19}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid685",
                            "top",
                            752,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy15}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid692",
                            "top",
                            608,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy21}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid690",
                            "top",
                            482,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy16}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid691",
                            "top",
                            935,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy20}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid674",
                            "top",
                            0,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy13}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid677",
                            "top",
                            47,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy13}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid701",
                            "top",
                            867,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy23}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid719",
                            "top",
                            867,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy24}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid635",
                            "top",
                            220,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid670",
                            "top",
                            0,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy12}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid686",
                            "top",
                            608,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy14}",
                            '-60px',
                            '270px'
                        ],
                        [
                            "eid680",
                            "top",
                            500,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy15}",
                            '-60px',
                            '270px'
                        ]
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
                            fill: ['rgba(0,0,0,0)', 'Images/van.png', '0px', '0px'],
                            r: null,
                            id: 'vanCopy',
                            t: 'image',
                            rect: ['0px', '0px', '321px', '143px', 'auto', 'auto'],
                            f: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'hub3',
                            t: 'rect',
                            symbolName: 'hub',
                            rect: ['261px', '105px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'hub3Copy',
                            t: 'rect',
                            symbolName: 'hub',
                            rect: ['53px', '106px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '29px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [

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
                            fill: ['rgba(0,0,0,0)', 'Images/hub.png', '0px', '0px'],
                            r: null,
                            id: 'hub',
                            t: 'image',
                            rect: ['0px', '0px', '29px', '29px', 'auto', 'auto'],
                            f: null
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-8101559");
