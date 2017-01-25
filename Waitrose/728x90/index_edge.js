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
                            id: 'free_delivery',
                            display: 'none',
                            type: 'text',
                            rect: ['20px', '13px', '223px', '109px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: left; line-height: 28px; visibility: visible; pointer-events: auto;\"><span style=\"font-family: Waitrose; font-weight: 700; font-size: 26px; visibility: visible; pointer-events: auto;\">​</span><span style=\"font-family: Waitrose; font-weight: 400; font-style: normal; text-decoration: none; font-size: 26px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; visibility: visible; pointer-events: auto;\">1 hour slots and&nbsp;</span></p><p style=\"margin: 0px; text-align: left; line-height: 28px; visibility: visible; pointer-events: auto;\"><span style=\"font-family: Waitrose; font-weight: 400; font-style: normal; text-decoration: none; font-size: 26px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; visibility: visible; pointer-events: auto;\">​free delivery</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, "undefined"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "30px", "", ""]
                        },
                        {
                            id: 'Message2',
                            display: 'none',
                            type: 'text',
                            rect: ['21px', '12px', '261px', '146px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: left; line-height: 28px; pointer-events: auto;\"><span style=\"font-size: 26px; color: rgb(192, 0, 43); font-family: Waitrose; font-weight: 700; pointer-events: auto;\">£100 OFF</span><span style=\"font-size: 22px; font-family: Waitrose; font-weight: 700; pointer-events: auto;\">​&nbsp;</span><span style=\"font-family: Waitrose; font-size: 22px; pointer-events: auto;\">your first 5</span></p><p style=\"margin: 0px; text-align: left; line-height: 28px; pointer-events: auto;\"><span style=\"font-family: Waitrose; font-size: 22px; pointer-events: auto;\">online grocery shops</span></p>",
                            font: ['Waitrose-Bold', [24, "undefined"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "44px", "", ""]
                        },
                        {
                            id: 'road',
                            type: 'image',
                            rect: ['538px', '71px', '559px', '7px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'Images/road.png','0px','0px']
                        },
                        {
                            id: 'door',
                            type: 'image',
                            rect: ['917px', '0px', '37px', '74px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'Images/door.png','0px','0px']
                        },
                        {
                            id: 'van',
                            type: 'image',
                            rect: ['-150px', '12px', '145px', '66px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/van.png','0px','0px']
                        },
                        {
                            id: 'GreenBTN',
                            type: 'image',
                            rect: ['534px', '0px', '194px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/GreenBTN.jpg','0px','0px']
                        },
                        {
                            id: 'WaitroseLogo',
                            type: 'image',
                            rect: ['560px', '16px', '141px', '56px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/WaitroseLogo.png','0px','0px']
                        },
                        {
                            id: 'TCs',
                            display: 'none',
                            type: 'text',
                            rect: ['250px', '75px', '282px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: right;\">​<span style=\"font-size: 14px; font-family: Waitrose; color: rgb(83, 86, 90);\">See site for full T&amp;Cs</span>\n</p>",
                            align: "center",
                            font: ['Waitrose-Bold', [14, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'MinSpend',
                            type: 'text',
                            rect: ['249px', '0px', '282px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: right;\"><span style=\"font-family: Waitrose; font-size: 14px; color: rgb(83, 86, 90);\">Min. spend applies</span></p>",
                            align: "center",
                            font: ['Waitrose-Bold', [14, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'refresh',
                            display: 'none',
                            type: 'image',
                            rect: ['2px', '2px', '13px', '15px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'Images/refresh.png','0px','0px']
                        },
                        {
                            id: 'Frame',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '726px', '88px', 'auto', 'auto'],
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
                            rect: ['null', 'null', '728px', '90px', 'auto', 'auto'],
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
                            "eid742",
                            "font-size",
                            518,
                            0,
                            "linear",
                            "${MinSpend}",
                            '14px',
                            '14px'
                        ],
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
                            "eid775",
                            "display",
                            7620,
                            0,
                            "linear",
                            "${refresh}",
                            'none',
                            'block'
                        ],
                        [
                            "eid604",
                            "opacity",
                            4472,
                            500,
                            "linear",
                            "${free_delivery}",
                            '0',
                            '1'
                        ],
                        [
                            "eid608",
                            "opacity",
                            7289,
                            572,
                            "linear",
                            "${free_delivery}",
                            '1',
                            '0'
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
                            "eid946",
                            "display",
                            7861,
                            0,
                            "linear",
                            "${Message2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid629",
                            "width",
                            6471,
                            0,
                            "linear",
                            "${Frame}",
                            '726px',
                            '726px'
                        ],
                        [
                            "eid733",
                            "width",
                            4654,
                            0,
                            "linear",
                            "${free_delivery}",
                            '223px',
                            '223px'
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
                            "eid947",
                            "opacity",
                            7861,
                            470,
                            "linear",
                            "${Message2}",
                            '0',
                            '1'
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
                            "eid715",
                            "left",
                            278,
                            1353,
                            "easeOutQuad",
                            "${van}",
                            '-150px',
                            '252px'
                        ],
                        [
                            "eid709",
                            "left",
                            914,
                            0,
                            "linear",
                            "${MinSpend}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid722",
                            "left",
                            28,
                            1603,
                            "easeOutQuad",
                            "${door}",
                            '917px',
                            '379px'
                        ],
                        [
                            "eid730",
                            "top",
                            4654,
                            0,
                            "linear",
                            "${free_delivery}",
                            '13px',
                            '13px'
                        ],
                        [
                            "eid779",
                            "opacity",
                            7620,
                            711,
                            "linear",
                            "${refresh}",
                            '0',
                            '1'
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
                            "eid600",
                            "display",
                            4472,
                            0,
                            "linear",
                            "${free_delivery}",
                            'none',
                            'block'
                        ],
                        [
                            "eid601",
                            "display",
                            7861,
                            0,
                            "linear",
                            "${free_delivery}",
                            'block',
                            'none'
                        ],
                        [
                            "eid729",
                            "left",
                            4654,
                            0,
                            "linear",
                            "${free_delivery}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid791",
                            "width",
                            1631,
                            0,
                            "linear",
                            "${Message2}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid948",
                            "width",
                            7861,
                            0,
                            "linear",
                            "${Message2}",
                            '261px',
                            '261px'
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
                            "eid630",
                            "height",
                            6471,
                            0,
                            "linear",
                            "${Frame}",
                            '88px',
                            '88px'
                        ],
                        [
                            "eid721",
                            "left",
                            28,
                            1616,
                            "easeOutQuad",
                            "${road}",
                            '538px',
                            '0px'
                        ],
                        [
                            "eid315",
                            "display",
                            7620,
                            0,
                            "linear",
                            "${ReplayHotspot}",
                            'none',
                            'block'
                        ]
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
                            rect: ['7px', '110px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['77px', '110px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['134px', '110px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy2',
                            t: 'rect',
                            rect: ['267px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy2',
                            t: 'rect',
                            rect: ['337px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy2',
                            t: 'rect',
                            rect: ['394px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy',
                            t: 'rect',
                            rect: ['197px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy',
                            t: 'rect',
                            rect: ['167px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy',
                            t: 'rect',
                            rect: ['244px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy3',
                            t: 'rect',
                            rect: ['464px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy3',
                            t: 'rect',
                            rect: ['434px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy3',
                            t: 'rect',
                            rect: ['511px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy7',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['7px', '110px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy7',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['77px', '110px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy7',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['134px', '110px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy6',
                            t: 'rect',
                            rect: ['267px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy6',
                            t: 'rect',
                            rect: ['337px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy6',
                            t: 'rect',
                            rect: ['394px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy5',
                            t: 'rect',
                            rect: ['197px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy5',
                            t: 'rect',
                            rect: ['167px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy5',
                            t: 'rect',
                            rect: ['244px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy4',
                            t: 'rect',
                            rect: ['464px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy4',
                            t: 'rect',
                            rect: ['434px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy4',
                            t: 'rect',
                            rect: ['511px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy15',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['7px', '110px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy15',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['77px', '110px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy15',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['134px', '110px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy14',
                            t: 'rect',
                            rect: ['267px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy14',
                            t: 'rect',
                            rect: ['337px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy14',
                            t: 'rect',
                            rect: ['394px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy13',
                            t: 'rect',
                            rect: ['197px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy13',
                            t: 'rect',
                            rect: ['167px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy13',
                            t: 'rect',
                            rect: ['244px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy12',
                            t: 'rect',
                            rect: ['464px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy12',
                            t: 'rect',
                            rect: ['434px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy12',
                            t: 'rect',
                            rect: ['511px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy11',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['7px', '110px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy11',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['77px', '110px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy11',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['134px', '110px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy10',
                            t: 'rect',
                            rect: ['267px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy10',
                            t: 'rect',
                            rect: ['337px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy10',
                            t: 'rect',
                            rect: ['394px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy9',
                            t: 'rect',
                            rect: ['197px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy9',
                            t: 'rect',
                            rect: ['167px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy9',
                            t: 'rect',
                            rect: ['244px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy8',
                            t: 'rect',
                            rect: ['464px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy8',
                            t: 'rect',
                            rect: ['434px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy8',
                            t: 'rect',
                            rect: ['511px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy31',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['7px', '110px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy31',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['77px', '110px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy31',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['134px', '110px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy30',
                            t: 'rect',
                            rect: ['267px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy30',
                            t: 'rect',
                            rect: ['337px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy30',
                            t: 'rect',
                            rect: ['394px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.88', '0.88']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy29',
                            t: 'rect',
                            rect: ['197px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy29',
                            t: 'rect',
                            rect: ['167px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy29',
                            t: 'rect',
                            rect: ['244px', '110px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy28',
                            t: 'rect',
                            rect: ['464px', '110px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy28',
                            t: 'rect',
                            rect: ['434px', '110px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.68', '0.68']],
                            tf: null
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '55px', '55px']
                        }
                    }
                },
                timeline: {
                    duration: 4886,
                    autoPlay: true,
                    data: [
                        [
                            "eid820",
                            "top",
                            2356,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy8}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid881",
                            "top",
                            3250,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy29}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid879",
                            "top",
                            3250,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy28}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid796",
                            "top",
                            0,
                            1500,
                            "easeInQuad",
                            "${heart-1}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid800",
                            "top",
                            250,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy2}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid798",
                            "top",
                            886,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid828",
                            "top",
                            2250,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy11}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid888",
                            "top",
                            2750,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy31}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid814",
                            "top",
                            1134,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy6}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid836",
                            "top",
                            1250,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy14}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid826",
                            "top",
                            2134,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy10}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid821",
                            "top",
                            2750,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy9}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid803",
                            "top",
                            500,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy3}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid801",
                            "top",
                            356,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy2}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid887",
                            "top",
                            3250,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy31}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid799",
                            "top",
                            500,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid833",
                            "top",
                            1750,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy13}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid882",
                            "top",
                            3386,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy29}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid880",
                            "top",
                            2856,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy28}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid884",
                            "top",
                            2750,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy30}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid839",
                            "top",
                            1750,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy15}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid886",
                            "top",
                            2634,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy30}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid832",
                            "top",
                            1356,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy12}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid808",
                            "top",
                            1356,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy4}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid811",
                            "top",
                            1500,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy5}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid824",
                            "top",
                            2250,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy10}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid831",
                            "top",
                            1750,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy12}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid794",
                            "top",
                            750,
                            1500,
                            "easeInQuad",
                            "${heart-3}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid818",
                            "top",
                            2500,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy8}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid883",
                            "top",
                            3000,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy29}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid805",
                            "top",
                            356,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy3}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid822",
                            "top",
                            2886,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy9}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid816",
                            "top",
                            1250,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy7}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid837",
                            "top",
                            1356,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy14}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid841",
                            "top",
                            1000,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy15}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid885",
                            "top",
                            2856,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy30}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid807",
                            "top",
                            1750,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy4}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid813",
                            "top",
                            1356,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy6}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid834",
                            "top",
                            1886,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy13}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid804",
                            "top",
                            750,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy3}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid840",
                            "top",
                            1250,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy15}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid795",
                            "top",
                            250,
                            1500,
                            "easeInQuad",
                            "${heart-2}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid835",
                            "top",
                            1500,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy13}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid802",
                            "top",
                            134,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy2}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid797",
                            "top",
                            750,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid806",
                            "top",
                            1500,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy4}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid825",
                            "top",
                            2356,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy10}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid812",
                            "top",
                            1250,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy6}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid830",
                            "top",
                            1500,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy12}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid809",
                            "top",
                            1750,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy5}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid889",
                            "top",
                            2500,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy31}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid810",
                            "top",
                            1886,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy5}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid817",
                            "top",
                            1000,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy7}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid815",
                            "top",
                            1750,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy7}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid829",
                            "top",
                            2000,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy11}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid823",
                            "top",
                            2500,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy9}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid827",
                            "top",
                            2750,
                            1500,
                            "easeInQuad",
                            "${heart-3Copy11}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid819",
                            "top",
                            2750,
                            1500,
                            "easeInQuad",
                            "${heart-2Copy8}",
                            '-60px',
                            '110px'
                        ],
                        [
                            "eid838",
                            "top",
                            1134,
                            1500,
                            "easeInQuad",
                            "${heart-1Copy14}",
                            '-60px',
                            '110px'
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
                            rect: ['0px', '0px', '50px', '49px', 'auto', 'auto'],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-8101559");
