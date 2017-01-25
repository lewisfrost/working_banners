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
                            rect: ['168px', '20px', '130px', '98px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center; line-height: 26px; visibility: visible; pointer-events: auto;\">​<span style=\"font-family: Waitrose;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 26px; visibility: visible; pointer-events: auto;\"><span style=\"font-size: 40px; font-family: Waitrose; visibility: visible; pointer-events: auto;\"></span><span style=\"font-family: Waitrose; visibility: visible; pointer-events: auto;\">1 hour slots</span></p><p style=\"margin: 0px; text-align: center; line-height: 26px; visibility: visible; pointer-events: auto;\"><span style=\"font-family: Waitrose; visibility: visible; pointer-events: auto;\">and</span></p><p style=\"margin: 0px; text-align: center; line-height: 26px; visibility: visible; pointer-events: auto;\"><span style=\"font-family: Waitrose; visibility: visible; pointer-events: auto;\">free delivery</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Message2',
                            display: 'none',
                            type: 'text',
                            rect: ['160px', '40px', '142px', '178px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center; line-height: 26px; pointer-events: auto;\"><span style=\"font-family: Waitrose; font-weight: 400; font-style: normal; text-decoration: none; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; font-size: 30px; pointer-events: auto;\">&nbsp;</span><span style=\"color: rgb(192, 0, 43); font-family: Waitrose; font-weight: 700; font-size: 30px; pointer-events: auto;\">£100 OFF</span><span style=\"font-family: Waitrose; font-weight: 700; font-size: 30px; pointer-events: auto;\">​&nbsp;</span><span style=\"font-family: Waitrose; pointer-events: auto; font-size: 25px;\">your first <br style=\"pointer-events: auto;\">5 online&nbsp;<br style=\"pointer-events: auto;\">grocery <br style=\"pointer-events: auto;\">shops</span><span style=\"font-family: Waitrose; pointer-events: auto;\"><br style=\"pointer-events: auto;\"><br style=\"pointer-events: auto;\">grocery <br style=\"pointer-events: auto;\">shops</span></p>",
                            font: ['Waitrose-Bold', [24, "undefined"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "44px", "", ""]
                        },
                        {
                            id: 'road',
                            type: 'image',
                            rect: ['-303px', '172px', '249px', '6px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'Images/road2.png','0px','0px']
                        },
                        {
                            id: 'door',
                            type: 'image',
                            rect: ['423px', '45px', '53px', '130px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'Images/door2.png','0px','0px']
                        },
                        {
                            id: 'van',
                            type: 'image',
                            rect: ['-212px', '88px', '203px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/van2.png','0px','0px']
                        },
                        {
                            id: 'TCs',
                            display: 'none',
                            type: 'text',
                            rect: ['15px', '198px', '282px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: right;\">​<span style=\"font-size: 11px; font-family: Waitrose; color: rgb(83, 86, 90);\">See site for full T&amp;Cs</span>\n</p>",
                            align: "center",
                            font: ['Waitrose-Bold', [11, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'MinSpend',
                            type: 'text',
                            rect: ['15px', '3px', '282px', '27px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: right;\"><span style=\"font-family: Waitrose; font-size: 11px; color: rgb(83, 86, 90);\">Min. spend applies</span></p>",
                            align: "center",
                            font: ['Waitrose-Bold', [14, "px"], "rgba(83,86,90,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Frame',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '298px', '248px', 'auto', 'auto'],
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
                            fill: ["rgba(0,0,0,0)",'Images/replay2.png','0px','0px']
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
                            rect: ['0px', '214px', '300px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/GREENBTN.JPG','0px','0px']
                        },
                        {
                            id: 'WaitroseLogo',
                            type: 'image',
                            rect: ['12px', '218px', '275px', '29px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'Images/WaitroseLogo.png','0px','0px']
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
                    duration: 8701,
                    autoPlay: true,
                    labels: {
                        "beginning": 0
                    },
                    data: [
                        [
                            "eid1215",
                            "display",
                            7985,
                            0,
                            "linear",
                            "${ReplayHotspot}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1231",
                            "font-size",
                            1631,
                            0,
                            "linear",
                            "${MinSpend}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid1255",
                            "height",
                            2471,
                            0,
                            "easeOutQuad",
                            "${Message2}",
                            '178px',
                            '178px'
                        ],
                        [
                            "eid1271",
                            "height",
                            8701,
                            0,
                            "easeOutQuad",
                            "${Message2}",
                            '178px',
                            '178px'
                        ],
                        [
                            "eid1217",
                            "display",
                            7985,
                            0,
                            "linear",
                            "${refresh}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1250",
                            "top",
                            1631,
                            0,
                            "linear",
                            "${Message2}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid1267",
                            "top",
                            7861,
                            0,
                            "linear",
                            "${Message2}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid1240",
                            "height",
                            278,
                            0,
                            "easeOutQuad",
                            "${door}",
                            '130px',
                            '130px'
                        ],
                        [
                            "eid1265",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Frame}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1266",
                            "opacity",
                            397,
                            0,
                            "linear",
                            "${Frame}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1228",
                            "opacity",
                            1631,
                            396,
                            "linear",
                            "${MinSpend}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1249",
                            "width",
                            278,
                            0,
                            "easeOutQuad",
                            "${road}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1251",
                            "display",
                            1631,
                            0,
                            "linear",
                            "${Message2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1268",
                            "display",
                            7861,
                            0,
                            "linear",
                            "${Message2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1222",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Frame}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1245",
                            "top",
                            278,
                            0,
                            "easeOutQuad",
                            "${road}",
                            '172px',
                            '172px'
                        ],
                        [
                            "eid1233",
                            "display",
                            1631,
                            0,
                            "linear",
                            "${TCs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1224",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Frame}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid1225",
                            "height",
                            6613,
                            0,
                            "linear",
                            "${Frame}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid1246",
                            "height",
                            278,
                            0,
                            "easeOutQuad",
                            "${road}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid1252",
                            "opacity",
                            1631,
                            470,
                            "linear",
                            "${Message2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1253",
                            "opacity",
                            3971,
                            501,
                            "linear",
                            "${Message2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1269",
                            "opacity",
                            7861,
                            470,
                            "linear",
                            "${Message2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1234",
                            "opacity",
                            1631,
                            396,
                            "linear",
                            "${TCs}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1223",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${Frame}",
                            'rgb(82, 130, 56)',
                            'rgb(82, 130, 56)'
                        ],
                        [
                            "eid1238",
                            "left",
                            278,
                            1353,
                            "easeOutQuad",
                            "${van}",
                            '-212px',
                            '-44px'
                        ],
                        [
                            "eid1230",
                            "left",
                            2027,
                            0,
                            "linear",
                            "${MinSpend}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid1242",
                            "left",
                            278,
                            1353,
                            "easeOutQuad",
                            "${door}",
                            '423px',
                            '96px'
                        ],
                        [
                            "eid1232",
                            "top",
                            2027,
                            0,
                            "linear",
                            "${TCs}",
                            '198px',
                            '198px'
                        ],
                        [
                            "eid1236",
                            "left",
                            2027,
                            0,
                            "linear",
                            "${TCs}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid1218",
                            "opacity",
                            7985,
                            716,
                            "linear",
                            "${refresh}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1254",
                            "left",
                            1631,
                            0,
                            "linear",
                            "${Message2}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid1270",
                            "left",
                            7861,
                            0,
                            "linear",
                            "${Message2}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid1244",
                            "width",
                            278,
                            0,
                            "easeOutQuad",
                            "${door}",
                            '53px',
                            '53px'
                        ],
                        [
                            "eid1241",
                            "top",
                            278,
                            0,
                            "easeOutQuad",
                            "${door}",
                            '45px',
                            '45px'
                        ],
                        [
                            "eid1227",
                            "top",
                            2027,
                            0,
                            "linear",
                            "${MinSpend}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid1226",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Frame}",
                            '298px',
                            '298px'
                        ],
                        [
                            "eid1237",
                            "font-size",
                            2027,
                            0,
                            "linear",
                            "${TCs}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid1247",
                            "left",
                            278,
                            1353,
                            "easeOutQuad",
                            "${road}",
                            '307px',
                            '-4px'
                        ],
                        [
                            "eid1256",
                            "opacity",
                            4472,
                            500,
                            "linear",
                            "${on_every_order}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1257",
                            "opacity",
                            7289,
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
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-1',
                            t: 'image',
                            rect: ['17px', '-60px', '55px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-2',
                            t: 'image',
                            rect: ['97px', '-60px', '50px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-3',
                            t: 'image',
                            rect: ['154px', '-60px', '42px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-1Copy',
                            t: 'image',
                            f: null,
                            rect: ['177px', '-60px', '55px', '55px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.81', '0.81']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-2Copy',
                            t: 'image',
                            f: null,
                            rect: ['247px', '-60px', '50px', '49px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.81', '0.81']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-3Copy',
                            t: 'image',
                            f: null,
                            rect: ['64px', '-60px', '42px', '42px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.81', '0.81']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-1Copy3',
                            t: 'image',
                            f: null,
                            rect: ['17px', '-60px', '55px', '55px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-2Copy3',
                            t: 'image',
                            f: null,
                            rect: ['97px', '-60px', '50px', '49px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-3Copy3',
                            t: 'image',
                            f: null,
                            rect: ['154px', '-60px', '42px', '42px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-1Copy2',
                            t: 'image',
                            f: null,
                            rect: ['177px', '-60px', '55px', '55px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-2Copy2',
                            t: 'image',
                            f: null,
                            rect: ['247px', '-60px', '50px', '49px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-3Copy2',
                            t: 'image',
                            f: null,
                            rect: ['64px', '-60px', '42px', '42px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-1Copy7',
                            t: 'image',
                            rect: ['17px', '-60px', '55px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-2Copy7',
                            t: 'image',
                            rect: ['97px', '-60px', '50px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-3Copy7',
                            t: 'image',
                            rect: ['154px', '-60px', '42px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-1Copy6',
                            t: 'image',
                            f: null,
                            rect: ['177px', '-60px', '55px', '55px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.81', '0.81']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-2Copy6',
                            t: 'image',
                            f: null,
                            rect: ['247px', '-60px', '50px', '49px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.81', '0.81']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-3Copy6',
                            t: 'image',
                            f: null,
                            rect: ['64px', '-60px', '42px', '42px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.81', '0.81']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-1Copy5',
                            t: 'image',
                            f: null,
                            rect: ['17px', '-60px', '55px', '55px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-2Copy5',
                            t: 'image',
                            f: null,
                            rect: ['97px', '-60px', '50px', '49px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-3Copy5',
                            t: 'image',
                            f: null,
                            rect: ['154px', '-60px', '42px', '42px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-1Copy4',
                            t: 'image',
                            f: null,
                            rect: ['177px', '-60px', '55px', '55px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-2Copy4',
                            t: 'image',
                            f: null,
                            rect: ['247px', '-60px', '50px', '49px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-3Copy4',
                            t: 'image',
                            f: null,
                            rect: ['64px', '-60px', '42px', '42px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-1Copy15',
                            t: 'image',
                            rect: ['17px', '-60px', '55px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-2Copy15',
                            t: 'image',
                            rect: ['97px', '-60px', '50px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-3Copy15',
                            t: 'image',
                            rect: ['154px', '-60px', '42px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-1Copy14',
                            t: 'image',
                            f: null,
                            rect: ['177px', '-60px', '55px', '55px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.81', '0.81']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-2Copy14',
                            t: 'image',
                            f: null,
                            rect: ['247px', '-60px', '50px', '49px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.81', '0.81']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-3Copy14',
                            t: 'image',
                            f: null,
                            rect: ['64px', '-60px', '42px', '42px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.81', '0.81']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-1Copy13',
                            t: 'image',
                            f: null,
                            rect: ['17px', '-60px', '55px', '55px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-2Copy13',
                            t: 'image',
                            f: null,
                            rect: ['97px', '-60px', '50px', '49px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-3Copy13',
                            t: 'image',
                            f: null,
                            rect: ['154px', '-60px', '42px', '42px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-1Copy12',
                            t: 'image',
                            f: null,
                            rect: ['177px', '-60px', '55px', '55px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-2Copy12',
                            t: 'image',
                            f: null,
                            rect: ['247px', '-60px', '50px', '49px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'heart-3Copy12',
                            t: 'image',
                            f: null,
                            rect: ['64px', '-60px', '42px', '42px', 'auto', 'auto'],
                            tf: null,
                            transform: [[], [], [], ['0.55', '0.55']],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-1Copy11',
                            t: 'image',
                            rect: ['17px', '-60px', '55px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            f: null,
                            r: null,
                            id: 'heart-2Copy11',
                            t: 'image',
                            rect: ['97px', '-60px', '50px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'Images/heart-2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid1088",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${heart-1}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1093",
                            "top",
                            750,
                            1500,
                            "linear",
                            "${heart-1Copy}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1092",
                            "top",
                            1000,
                            1500,
                            "linear",
                            "${heart-2Copy}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1132",
                            "top",
                            1750,
                            1500,
                            "linear",
                            "${heart-1Copy14}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1108",
                            "top",
                            2138,
                            1500,
                            "linear",
                            "${heart-1Copy6}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1097",
                            "top",
                            862,
                            1500,
                            "linear",
                            "${heart-3Copy3}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1095",
                            "top",
                            1612,
                            1500,
                            "linear",
                            "${heart-2Copy2}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1127",
                            "top",
                            1862,
                            1500,
                            "linear",
                            "${heart-3Copy13}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1091",
                            "top",
                            500,
                            1500,
                            "linear",
                            "${heart-3Copy}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1102",
                            "top",
                            2750,
                            1500,
                            "linear",
                            "${heart-1Copy4}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1107",
                            "top",
                            2388,
                            1500,
                            "linear",
                            "${heart-2Copy6}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1125",
                            "top",
                            2612,
                            1500,
                            "linear",
                            "${heart-2Copy12}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1089",
                            "top",
                            250,
                            1500,
                            "linear",
                            "${heart-3}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1126",
                            "top",
                            2362,
                            1500,
                            "linear",
                            "${heart-1Copy12}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1099",
                            "top",
                            612,
                            1500,
                            "linear",
                            "${heart-1Copy3}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1110",
                            "top",
                            1888,
                            1500,
                            "linear",
                            "${heart-2Copy7}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1131",
                            "top",
                            2000,
                            1500,
                            "linear",
                            "${heart-2Copy14}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1111",
                            "top",
                            1388,
                            1500,
                            "linear",
                            "${heart-1Copy7}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1098",
                            "top",
                            1112,
                            1500,
                            "linear",
                            "${heart-2Copy3}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1100",
                            "top",
                            2500,
                            1500,
                            "linear",
                            "${heart-3Copy4}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1090",
                            "top",
                            500,
                            1500,
                            "linear",
                            "${heart-2}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1129",
                            "top",
                            1612,
                            1500,
                            "linear",
                            "${heart-1Copy13}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1096",
                            "top",
                            1362,
                            1500,
                            "linear",
                            "${heart-1Copy2}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1128",
                            "top",
                            2112,
                            1500,
                            "linear",
                            "${heart-2Copy13}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1130",
                            "top",
                            1500,
                            1500,
                            "linear",
                            "${heart-3Copy14}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1103",
                            "top",
                            2250,
                            1500,
                            "linear",
                            "${heart-3Copy5}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1106",
                            "top",
                            1888,
                            1500,
                            "linear",
                            "${heart-3Copy6}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1124",
                            "top",
                            2112,
                            1500,
                            "linear",
                            "${heart-3Copy12}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1122",
                            "top",
                            2888,
                            1500,
                            "linear",
                            "${heart-2Copy11}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1105",
                            "top",
                            2000,
                            1500,
                            "linear",
                            "${heart-1Copy5}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1104",
                            "top",
                            2500,
                            1500,
                            "linear",
                            "${heart-2Copy5}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1101",
                            "top",
                            3000,
                            1500,
                            "linear",
                            "${heart-2Copy4}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1109",
                            "top",
                            1638,
                            1500,
                            "linear",
                            "${heart-3Copy7}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1123",
                            "top",
                            2388,
                            1500,
                            "linear",
                            "${heart-1Copy11}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1135",
                            "top",
                            1000,
                            1500,
                            "linear",
                            "${heart-1Copy15}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1094",
                            "top",
                            1112,
                            1500,
                            "linear",
                            "${heart-3Copy2}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1134",
                            "top",
                            1500,
                            1500,
                            "linear",
                            "${heart-2Copy15}",
                            '-60px',
                            '260px'
                        ],
                        [
                            "eid1133",
                            "top",
                            1250,
                            1500,
                            "linear",
                            "${heart-3Copy15}",
                            '-60px',
                            '260px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-8101559");
