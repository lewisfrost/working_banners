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
                            rect: ['0px', '68px', '300px', '248px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center; line-height: 42px; visibility: visible; pointer-events: auto;\"><span style=\"font-size: 40px; font-family: Waitrose; visibility: visible; pointer-events: auto;\">1 hour slots&nbsp;</span></p><p style=\"margin: 0px; text-align: center; line-height: 42px; visibility: visible; pointer-events: auto;\"><span style=\"font-size: 40px; font-family: Waitrose; visibility: visible; pointer-events: auto;\">and&nbsp;</span></p><p style=\"margin: 0px; text-align: center; line-height: 42px; visibility: visible; pointer-events: auto;\"><span style=\"font-size: 40px; font-family: Waitrose; visibility: visible; pointer-events: auto;\">​free&nbsp;</span><span style=\"font-size: 40px; font-family: Waitrose; visibility: visible; pointer-events: auto;\">​delivery</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Message2',
                            display: 'none',
                            type: 'text',
                            rect: ['0px', '62px', '300px', '146px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center; line-height: 42px; visibility: visible; pointer-events: auto;\"><span style=\"font-size: 60px; color: rgb(192, 0, 43); font-family: Waitrose; font-weight: 700; visibility: visible; pointer-events: auto;\">£100 OFF</span><span style=\"font-size: 40px; font-family: Waitrose; font-weight: 700; visibility: visible; pointer-events: auto;\">​&nbsp;<br style=\"visibility: visible; pointer-events: auto;\"></span><span style=\"font-family: Waitrose; font-size: 40px; visibility: visible; pointer-events: auto;\">your first <br style=\"visibility: visible; pointer-events: auto;\">5 online <br style=\"visibility: visible; pointer-events: auto;\">grocery shops</span></p>",
                            font: ['Waitrose-Bold', [24, "undefined"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "44px", "", ""]
                        },
                        {
                            id: 'road',
                            type: 'image',
                            rect: ['-303px', '455px', '300px', '11px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'Images/road.png','0px','0px']
                        },
                        {
                            id: 'door',
                            type: 'image',
                            rect: ['-84px', '316px', '61px', '147px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'Images/door.png','0px','0px']
                        },
                        {
                            id: 'vehicle',
                            symbolName: 'vehicle',
                            type: 'rect',
                            rect: ['-124px', '342px', '279', '124', 'auto', 'auto']
                        },
                        {
                            id: 'TCs',
                            display: 'none',
                            type: 'text',
                            rect: ['9px', '506px', '282px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 14px; font-family: Waitrose; color: rgb(83, 86, 90);\">See site for full T&amp;Cs</span>\n</p>",
                            align: "center",
                            font: ['Waitrose-Bold', [14, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'MinSpend',
                            type: 'text',
                            rect: ['9px', '486px', '282px', '27px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '298px', '598px', 'auto', 'auto'],
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
                            rect: ['0px', '530px', '300px', '70px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/GREENBTN.JPG','0px','0px']
                        },
                        {
                            id: 'WaitroseLogo',
                            type: 'image',
                            rect: ['14px', '552px', '275px', '29px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/WaitroseLogo.png','0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 9966,
                    autoPlay: true,
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
                            "eid982",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${refresh}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1099",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Frame}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1100",
                            "opacity",
                            397,
                            0,
                            "linear",
                            "${Frame}",
                            '1',
                            '1'
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
                            "eid1108",
                            "display",
                            7583,
                            0,
                            "linear",
                            "${Message2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1101",
                            "left",
                            0,
                            1353,
                            "linear",
                            "${vehicle}",
                            '-396px',
                            '-124px'
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
                            "eid1107",
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
                            "eid897",
                            "left",
                            0,
                            1353,
                            "easeOutQuad",
                            "${door}",
                            '526px',
                            '224px'
                        ],
                        [
                            "eid315",
                            "display",
                            9250,
                            0,
                            "linear",
                            "${ReplayHotspot}",
                            'none',
                            'block'
                        ],
                        [
                            "eid986",
                            "opacity",
                            9250,
                            716,
                            "linear",
                            "${refresh}",
                            '0',
                            '1'
                        ],
                        [
                            "eid913",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Frame}",
                            '298px',
                            '298px'
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
                            "eid914",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Frame}",
                            '598px',
                            '598px'
                        ],
                        [
                            "eid898",
                            "left",
                            0,
                            1353,
                            "easeOutQuad",
                            "${road}",
                            '307px',
                            '5px'
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
                            rect: ['17', '-60px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['97', '-60px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['154', '-60px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy',
                            t: 'rect',
                            rect: ['37px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy',
                            t: 'rect',
                            rect: ['117px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy',
                            t: 'rect',
                            rect: ['174px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy3',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['97px', '-60px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy3',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['177px', '-60px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy3',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['234px', '-60px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy2',
                            t: 'rect',
                            rect: ['117px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy2',
                            t: 'rect',
                            rect: ['197px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy2',
                            t: 'rect',
                            rect: ['254px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy7',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['10px', '-62px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy7',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['90px', '-62px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy7',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['147px', '-62px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy20',
                            t: 'rect',
                            rect: ['17', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy20',
                            t: 'rect',
                            rect: ['97', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy20',
                            t: 'rect',
                            rect: ['154', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy19',
                            t: 'rect',
                            rect: ['37px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy19',
                            t: 'rect',
                            rect: ['117px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy19',
                            t: 'rect',
                            rect: ['174px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy18',
                            t: 'rect',
                            rect: ['97px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy18',
                            t: 'rect',
                            rect: ['177px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy18',
                            t: 'rect',
                            rect: ['234px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy17',
                            t: 'rect',
                            rect: ['117px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy17',
                            t: 'rect',
                            rect: ['197px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy17',
                            t: 'rect',
                            rect: ['254px', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy16',
                            t: 'rect',
                            rect: ['10px', '-62px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy16',
                            t: 'rect',
                            rect: ['90px', '-62px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy16',
                            t: 'rect',
                            rect: ['147px', '-62px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], ['-22'], [], ['0.73', '0.73']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy6',
                            t: 'rect',
                            rect: ['30px', '-62px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy6',
                            t: 'rect',
                            rect: ['110px', '-62px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy6',
                            t: 'rect',
                            rect: ['167px', '-62px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-1Copy5',
                            t: 'rect',
                            symbolName: 'heart-1',
                            rect: ['90px', '-62px', '55', '55', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-2Copy5',
                            t: 'rect',
                            symbolName: 'heart-2',
                            rect: ['170px', '-62px', '50', '49', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'heart-3Copy5',
                            t: 'rect',
                            symbolName: 'heart-3',
                            rect: ['227px', '-62px', '42', '42', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy4',
                            t: 'rect',
                            rect: ['110px', '-62px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy4',
                            t: 'rect',
                            rect: ['190px', '-62px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy4',
                            t: 'rect',
                            rect: ['247px', '-62px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.87', '0.87']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy15',
                            t: 'rect',
                            rect: ['17', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.62', '0.62']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy15',
                            t: 'rect',
                            rect: ['97', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.62', '0.62']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-3Copy15',
                            t: 'rect',
                            rect: ['154', '-60px', '42', '42', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-3',
                            transform: [[], [], [], ['0.62', '0.62']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-1Copy14',
                            t: 'rect',
                            rect: ['37px', '-60px', '55', '55', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-1',
                            transform: [[], [], [], ['0.62', '0.62']],
                            tf: null
                        },
                        {
                            type: 'rect',
                            r: null,
                            id: 'heart-2Copy14',
                            t: 'rect',
                            rect: ['117px', '-60px', '50', '49', 'auto', 'auto'],
                            sN: null,
                            symbolName: 'heart-2',
                            transform: [[], [], [], ['0.62', '0.62']],
                            tf: null
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 6383,
                    autoPlay: true,
                    data: [
                        [
                            "eid1063",
                            "top",
                            1819,
                            2911,
                            "easeInQuad",
                            "${heart-1Copy18}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1009",
                            "top",
                            0,
                            2000,
                            "easeInQuad",
                            "${heart-1}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1056",
                            "top",
                            2740,
                            2911,
                            "easeInQuad",
                            "${heart-2Copy16}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1013",
                            "top",
                            835,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy2}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1011",
                            "top",
                            500,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1061",
                            "top",
                            1819,
                            2911,
                            "easeInQuad",
                            "${heart-3Copy18}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1051",
                            "top",
                            4383,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy14}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1068",
                            "top",
                            364,
                            2911,
                            "easeInQuad",
                            "${heart-2Copy20}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1027",
                            "top",
                            2383,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy6}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1016",
                            "top",
                            1250,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy3}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1014",
                            "top",
                            1250,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy2}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1066",
                            "top",
                            1092,
                            2911,
                            "easeInQuad",
                            "${heart-1Copy19}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1019",
                            "top",
                            2468,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy4}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1064",
                            "top",
                            1456,
                            2911,
                            "easeInQuad",
                            "${heart-3Copy19}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1052",
                            "top",
                            4133,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy15}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1062",
                            "top",
                            2183,
                            2911,
                            "easeInQuad",
                            "${heart-2Copy18}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1021",
                            "top",
                            3133,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy4}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1026",
                            "top",
                            2133,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy6}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1007",
                            "top",
                            500,
                            2000,
                            "easeInQuad",
                            "${heart-3}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1024",
                            "top",
                            2883,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy5}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1018",
                            "top",
                            1250,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy3}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1069",
                            "top",
                            0,
                            2911,
                            "easeInQuad",
                            "${heart-1Copy20}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1029",
                            "top",
                            1883,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy7}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1050",
                            "top",
                            4133,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy14}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1059",
                            "top",
                            1819,
                            2911,
                            "easeInQuad",
                            "${heart-2Copy17}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1030",
                            "top",
                            1633,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy7}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1017",
                            "top",
                            1500,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy3}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1055",
                            "top",
                            3104,
                            2911,
                            "easeInQuad",
                            "${heart-3Copy16}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1008",
                            "top",
                            250,
                            2000,
                            "easeInQuad",
                            "${heart-2}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1015",
                            "top",
                            1500,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy2}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1060",
                            "top",
                            2183,
                            2911,
                            "easeInQuad",
                            "${heart-1Copy17}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1012",
                            "top",
                            750,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1025",
                            "top",
                            2633,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy6}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1054",
                            "top",
                            3633,
                            2000,
                            "easeInQuad",
                            "${heart-1Copy15}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1022",
                            "top",
                            2883,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy5}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1067",
                            "top",
                            728,
                            2911,
                            "easeInQuad",
                            "${heart-3Copy20}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1023",
                            "top",
                            3133,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy5}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1053",
                            "top",
                            3883,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy15}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1028",
                            "top",
                            2133,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy7}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1020",
                            "top",
                            2883,
                            2000,
                            "easeInQuad",
                            "${heart-2Copy4}",
                            '-62px',
                            '630px'
                        ],
                        [
                            "eid1058",
                            "top",
                            1216,
                            2911,
                            "easeInQuad",
                            "${heart-3Copy17}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1065",
                            "top",
                            728,
                            2911,
                            "easeInQuad",
                            "${heart-2Copy19}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1010",
                            "top",
                            1000,
                            2000,
                            "easeInQuad",
                            "${heart-3Copy}",
                            '-60px',
                            '630px'
                        ],
                        [
                            "eid1057",
                            "top",
                            2376,
                            2911,
                            "easeInQuad",
                            "${heart-1Copy16}",
                            '-62px',
                            '630px'
                        ]
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
                            symbolName: 'hub',
                            rect: ['330px', '89px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            sN: null,
                            r: null,
                            id: 'hub3Copy',
                            t: 'rect',
                            symbolName: 'hub',
                            rect: ['149px', '89px', null, null, 'auto', 'auto']
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
