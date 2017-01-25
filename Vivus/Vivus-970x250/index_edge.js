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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'background',
                            type: 'image',
                            rect: ['0px', '0', '970px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background.jpg",'0px','0px']
                        },
                        {
                            id: 'leaf-1-gfx',
                            symbolName: 'leaf-1-gfx',
                            type: 'rect',
                            rect: ['394px', '-82px', '272', '272', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],['-148']]
                        },
                        {
                            id: 'leaf-1-gfxCopy',
                            symbolName: 'leaf-1-gfx',
                            type: 'rect',
                            rect: ['394px', '-82px', '272', '272', 'auto', 'auto'],
                            opacity: '0.4',
                            transform: [[],['-148']]
                        },
                        {
                            id: 'leaf-1-gfxCopy2',
                            symbolName: 'leaf-1-gfx',
                            type: 'rect',
                            rect: ['394px', '-82px', '272', '272', 'auto', 'auto'],
                            opacity: '0.6',
                            transform: [[],['-148']]
                        },
                        {
                            id: 'leaf-1-gfxCopy3',
                            symbolName: 'leaf-1-gfx',
                            type: 'rect',
                            rect: ['394px', '-82px', '272', '272', 'auto', 'auto'],
                            opacity: '0.8',
                            transform: [[],['-148']]
                        },
                        {
                            id: 'leaf-1-gfxCopy4',
                            symbolName: 'leaf-1-gfx',
                            type: 'rect',
                            rect: ['394px', '-82px', '272', '272', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['-148']]
                        },
                        {
                            id: 'txt-1-gfx',
                            symbolName: 'txt-1-gfx',
                            type: 'rect',
                            rect: ['436px', '21px', '161', '48', 'auto', 'auto'],
                            clip: 'rect(0px 161px 23.75px 0px)',
                            opacity: '0'
                        },
                        {
                            id: 'txt-1-gfxCopy',
                            symbolName: 'txt-1-gfx',
                            type: 'rect',
                            rect: ['436px', '21px', '161', '48', 'auto', 'auto'],
                            clip: 'rect(22.87109375px 161px 53.51953125px 0px)',
                            opacity: '0'
                        },
                        {
                            id: 'txt-2-gfx',
                            symbolName: 'txt-2-gfx',
                            type: 'rect',
                            rect: ['449px', '22px', '137', '44', 'auto', 'auto'],
                            clip: 'rect(0px 137px 23.1015625px 0px)',
                            opacity: '0'
                        },
                        {
                            id: 'txt-2-gfxCopy',
                            symbolName: 'txt-2-gfx',
                            type: 'rect',
                            rect: ['429px', '22px', '137', '44', 'auto', 'auto'],
                            clip: 'rect(24.25px 137px 52.0859375px 0px)',
                            opacity: '0'
                        },
                        {
                            id: 'jumping-guy',
                            type: 'image',
                            rect: ['-187px', '-11px', '371px', '311px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"jumping-guy.png",'0px','0px']
                        },
                        {
                            id: 'bg-colour',
                            type: 'rect',
                            rect: ['0px', '0px', '970px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(8,105,50,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'leaf-2-gfx',
                            symbolName: 'leaf-2-gfx',
                            type: 'rect',
                            rect: ['0px', '-859px', '861', '1360', 'auto', 'auto'],
                            opacity: '0.2',
                            transform: [[],['61']]
                        },
                        {
                            id: 'leaf-2-gfxCopy',
                            symbolName: 'leaf-2-gfx',
                            type: 'rect',
                            rect: ['90px', '-859px', '861', '1360', 'auto', 'auto'],
                            opacity: '0.4',
                            transform: [[],['61']]
                        },
                        {
                            id: 'leaf-2-gfxCopy2',
                            symbolName: 'leaf-2-gfx',
                            type: 'rect',
                            rect: ['120px', '-859px', '861', '1360', 'auto', 'auto'],
                            opacity: '0.28102136264002',
                            transform: [[],['61']]
                        },
                        {
                            id: 'leaf-2-gfxCopy3',
                            symbolName: 'leaf-2-gfx',
                            type: 'rect',
                            rect: ['340px', '-859px', '861', '1360', 'auto', 'auto'],
                            opacity: '0.2140752212788',
                            transform: [[],['61']]
                        },
                        {
                            id: 'leaf-2-gfxCopy4',
                            symbolName: 'leaf-2-gfx',
                            type: 'rect',
                            rect: ['610px', '-859px', '861', '1360', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['61']]
                        },
                        {
                            id: 'txt-3-gfx',
                            symbolName: 'txt-3-gfx',
                            type: 'rect',
                            rect: ['22px', '18', '429', '54', 'auto', 'auto'],
                            clip: 'rect(0px 429px 27.78125px 0px)',
                            opacity: '0'
                        },
                        {
                            id: 'txt-3-gfxCopy',
                            symbolName: 'txt-3-gfx',
                            type: 'rect',
                            rect: ['22px', '18', '429', '54', 'auto', 'auto'],
                            clip: 'rect(27.6015625px 429px 62.48046875px 0px)',
                            opacity: '0'
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '-10px', '970px', '6px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['-0.3%', '244px', '970px', '6px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['-10px', '0px', '6px', '250px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['690px', '0px', '283px', '250px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['19px', '19px', '125px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
                        },
                        {
                            id: 'legals',
                            type: 'image',
                            rect: ['506px', '55px', '188px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"legals.png",'0px','0px']
                        },
                        {
                            id: 'txt-5',
                            type: 'image',
                            rect: ['506', '11px', '136px', '38px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-5.png",'0px','0px']
                        },
                        {
                            id: 'txt-4',
                            type: 'image',
                            rect: ['167px', '20px', '176px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt-4.png",'0px','0px']
                        },
                        {
                            id: 'cta',
                            type: 'image',
                            rect: ['376px', '-9px', '115px', '110px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"cta.png",'0px','0px']
                        },
                        {
                            id: 'keyline',
                            symbolName: 'keyline',
                            type: 'rect',
                            rect: ['121px', '80px', '728', '90', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.33242','2.77778']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '970px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 13000,
                    autoPlay: true,
                    data: [
                        [
                            "eid29",
                            "opacity",
                            1163,
                            500,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5603",
                            "opacity",
                            12500,
                            500,
                            "linear",
                            "${legals}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1501",
                            "rotateZ",
                            7500,
                            250,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            '61deg',
                            '0deg'
                        ],
                        [
                            "eid3161",
                            "rotateZ",
                            11963,
                            146,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            '0deg',
                            '60deg'
                        ],
                        [
                            "eid1091",
                            "location",
                            0,
                            7279,
                            "linear",
                            "${jumping-guy}",
                            [[-1.5, 144.5, 0, 0, 0, 0,0],[147.87, 137.93, 238.89, 15.93, 209.13, 13.94,149.71],[298.5, 164.5, 0, 0, 0, 0,302.91]]
                        ],
                        [
                            "eid1093",
                            "location",
                            7279,
                            221,
                            "linear",
                            "${jumping-guy}",
                            [[298.5, 164.5, 0, 0, 0, 0,0],[494.67, 264.85, 0, 0, 0, 0,220.35]]
                        ],
                        [
                            "eid11",
                            "rotateZ",
                            500,
                            500,
                            "easeOutCubic",
                            "${leaf-1-gfx}",
                            '-148deg',
                            '0deg'
                        ],
                        [
                            "eid18",
                            "rotateZ",
                            663,
                            500,
                            "easeOutCubic",
                            "${leaf-1-gfxCopy}",
                            '-148deg',
                            '0deg'
                        ],
                        [
                            "eid1504",
                            "rotateZ",
                            7568,
                            250,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            '61deg',
                            '0deg'
                        ],
                        [
                            "eid3162",
                            "rotateZ",
                            11928,
                            146,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            '0deg',
                            '60deg'
                        ],
                        [
                            "eid780",
                            "left",
                            4551,
                            337,
                            "easeOutQuad",
                            "${txt-2-gfx}",
                            '449px',
                            '469px'
                        ],
                        [
                            "eid776",
                            "left",
                            6888,
                            391,
                            "easeInQuad",
                            "${txt-2-gfx}",
                            '469px',
                            '509px'
                        ],
                        [
                            "eid2037",
                            "opacity",
                            8146,
                            146,
                            "easeOutQuad",
                            "${txt-3-gfxCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2033",
                            "opacity",
                            11625,
                            192,
                            "easeOutQuad",
                            "${txt-3-gfxCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid782",
                            "opacity",
                            4750,
                            337,
                            "linear",
                            "${txt-2-gfxCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid770",
                            "opacity",
                            7087,
                            391,
                            "linear",
                            "${txt-2-gfxCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1513",
                            "rotateZ",
                            7818,
                            250,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            '61deg',
                            '0deg'
                        ],
                        [
                            "eid3142",
                            "rotateZ",
                            11817,
                            146,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            '0deg',
                            '21deg'
                        ],
                        [
                            "eid781",
                            "left",
                            1823,
                            337,
                            "easeOutQuad",
                            "${txt-1-gfxCopy}",
                            '436px',
                            '452px'
                        ],
                        [
                            "eid777",
                            "left",
                            4160,
                            391,
                            "easeInQuad",
                            "${txt-1-gfxCopy}",
                            '452px',
                            '476px'
                        ],
                        [
                            "eid25",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid778",
                            "left",
                            4750,
                            337,
                            "easeOutQuad",
                            "${txt-2-gfxCopy}",
                            '429px',
                            '469px'
                        ],
                        [
                            "eid1038",
                            "left",
                            7087,
                            391,
                            "easeInQuad",
                            "${txt-2-gfxCopy}",
                            '469px',
                            '489px'
                        ],
                        [
                            "eid30",
                            "rotateZ",
                            1163,
                            500,
                            "easeOutCubic",
                            "${leaf-1-gfxCopy4}",
                            '-148deg',
                            '0deg'
                        ],
                        [
                            "eid15",
                            "-webkit-transform-origin",
                            663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12357",
                            "-moz-transform-origin",
                            663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12358",
                            "-ms-transform-origin",
                            663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12359",
                            "msTransformOrigin",
                            663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12360",
                            "-o-transform-origin",
                            663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12361",
                            "transform-origin",
                            663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16",
                            "-webkit-transform-origin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12362",
                            "-moz-transform-origin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12363",
                            "-ms-transform-origin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12364",
                            "msTransformOrigin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12365",
                            "-o-transform-origin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12366",
                            "transform-origin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5134",
                            "top",
                            12109,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid4527",
                            "top",
                            12500,
                            0,
                            "easeOutQuad",
                            "${RectangleCopy2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid5602",
                            "opacity",
                            12500,
                            500,
                            "linear",
                            "${cta}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            663,
                            500,
                            "linear",
                            "${leaf-1-gfxCopy}",
                            '0',
                            '0.4'
                        ],
                        [
                            "eid5139",
                            "top",
                            12109,
                            391,
                            "linear",
                            "${RectangleCopy}",
                            '256px',
                            '244px'
                        ],
                        [
                            "eid5133",
                            "top",
                            12109,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid4526",
                            "top",
                            12500,
                            0,
                            "easeOutQuad",
                            "${RectangleCopy3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "-webkit-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12367",
                            "-moz-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12368",
                            "-ms-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12369",
                            "msTransformOrigin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12370",
                            "-o-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12371",
                            "transform-origin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid24",
                            "-webkit-transform-origin",
                            1280,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12372",
                            "-moz-transform-origin",
                            1280,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12373",
                            "-ms-transform-origin",
                            1280,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12374",
                            "msTransformOrigin",
                            1280,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12375",
                            "-o-transform-origin",
                            1280,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12376",
                            "transform-origin",
                            1280,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5605",
                            "opacity",
                            12500,
                            500,
                            "linear",
                            "${txt-4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${leaf-1-gfx}",
                            '0',
                            '0.2'
                        ],
                        [
                            "eid5601",
                            "opacity",
                            12500,
                            500,
                            "linear",
                            "${txt-5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid783",
                            "opacity",
                            1663,
                            337,
                            "linear",
                            "${txt-1-gfx}",
                            '0',
                            '1'
                        ],
                        [
                            "eid771",
                            "opacity",
                            4000,
                            391,
                            "linear",
                            "${txt-1-gfx}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "-webkit-transform-origin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12377",
                            "-moz-transform-origin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12378",
                            "-ms-transform-origin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12379",
                            "msTransformOrigin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12380",
                            "-o-transform-origin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12381",
                            "transform-origin",
                            1163,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid28",
                            "-webkit-transform-origin",
                            1663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12382",
                            "-moz-transform-origin",
                            1663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12383",
                            "-ms-transform-origin",
                            1663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12384",
                            "msTransformOrigin",
                            1663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12385",
                            "-o-transform-origin",
                            1663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12386",
                            "transform-origin",
                            1663,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1497",
                            "-webkit-transform-origin",
                            7500,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12387",
                            "-moz-transform-origin",
                            7500,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12388",
                            "-ms-transform-origin",
                            7500,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12389",
                            "msTransformOrigin",
                            7500,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12390",
                            "-o-transform-origin",
                            7500,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12391",
                            "transform-origin",
                            7500,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1499",
                            "-webkit-transform-origin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12392",
                            "-moz-transform-origin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12393",
                            "-ms-transform-origin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12394",
                            "msTransformOrigin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12395",
                            "-o-transform-origin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12396",
                            "transform-origin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3143",
                            "-webkit-transform-origin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12397",
                            "-moz-transform-origin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12398",
                            "-ms-transform-origin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12399",
                            "msTransformOrigin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12400",
                            "-o-transform-origin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12401",
                            "transform-origin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3151",
                            "-webkit-transform-origin",
                            12109,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12402",
                            "-moz-transform-origin",
                            12109,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12403",
                            "-ms-transform-origin",
                            12109,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12404",
                            "msTransformOrigin",
                            12109,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12405",
                            "-o-transform-origin",
                            12109,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12406",
                            "transform-origin",
                            12109,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2036",
                            "opacity",
                            8068,
                            146,
                            "easeOutQuad",
                            "${txt-3-gfx}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2032",
                            "opacity",
                            11500,
                            192,
                            "easeOutQuad",
                            "${txt-3-gfx}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5137",
                            "left",
                            12109,
                            391,
                            "linear",
                            "${RectangleCopy3}",
                            '980px',
                            '690px'
                        ],
                        [
                            "eid26",
                            "rotateZ",
                            1000,
                            500,
                            "easeOutCubic",
                            "${leaf-1-gfxCopy3}",
                            '-148deg',
                            '0deg'
                        ],
                        [
                            "eid1346",
                            "opacity",
                            7279,
                            221,
                            "linear",
                            "${bg-colour}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1507",
                            "rotateZ",
                            7658,
                            250,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            '61deg',
                            '0deg'
                        ],
                        [
                            "eid3159",
                            "rotateZ",
                            11898,
                            146,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            '0deg',
                            '60deg'
                        ],
                        [
                            "eid21",
                            "opacity",
                            822,
                            500,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid22",
                            "rotateZ",
                            822,
                            500,
                            "easeOutCubic",
                            "${leaf-1-gfxCopy2}",
                            '-148deg',
                            '0deg'
                        ],
                        [
                            "eid1502",
                            "-webkit-transform-origin",
                            7568,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12407",
                            "-moz-transform-origin",
                            7568,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12408",
                            "-ms-transform-origin",
                            7568,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12409",
                            "msTransformOrigin",
                            7568,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12410",
                            "-o-transform-origin",
                            7568,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12411",
                            "transform-origin",
                            7568,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1503",
                            "-webkit-transform-origin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12412",
                            "-moz-transform-origin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12413",
                            "-ms-transform-origin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12414",
                            "msTransformOrigin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12415",
                            "-o-transform-origin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12416",
                            "transform-origin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3146",
                            "-webkit-transform-origin",
                            11928,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12417",
                            "-moz-transform-origin",
                            11928,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12418",
                            "-ms-transform-origin",
                            11928,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12419",
                            "msTransformOrigin",
                            11928,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12420",
                            "-o-transform-origin",
                            11928,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12421",
                            "transform-origin",
                            11928,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3154",
                            "-webkit-transform-origin",
                            12074,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12422",
                            "-moz-transform-origin",
                            12074,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12423",
                            "-ms-transform-origin",
                            12074,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12424",
                            "msTransformOrigin",
                            12074,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12425",
                            "-o-transform-origin",
                            12074,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12426",
                            "transform-origin",
                            12074,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1508",
                            "-webkit-transform-origin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12427",
                            "-moz-transform-origin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12428",
                            "-ms-transform-origin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12429",
                            "msTransformOrigin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12430",
                            "-o-transform-origin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12431",
                            "transform-origin",
                            7750,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1509",
                            "-webkit-transform-origin",
                            8000,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12432",
                            "-moz-transform-origin",
                            8000,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12433",
                            "-ms-transform-origin",
                            8000,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12434",
                            "msTransformOrigin",
                            8000,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12435",
                            "-o-transform-origin",
                            8000,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12436",
                            "transform-origin",
                            8000,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3144",
                            "-webkit-transform-origin",
                            11854,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12437",
                            "-moz-transform-origin",
                            11854,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12438",
                            "-ms-transform-origin",
                            11854,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12439",
                            "msTransformOrigin",
                            11854,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12440",
                            "-o-transform-origin",
                            11854,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12441",
                            "transform-origin",
                            11854,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3152",
                            "-webkit-transform-origin",
                            12000,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12442",
                            "-moz-transform-origin",
                            12000,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12443",
                            "-ms-transform-origin",
                            12000,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12444",
                            "msTransformOrigin",
                            12000,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12445",
                            "-o-transform-origin",
                            12000,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12446",
                            "transform-origin",
                            12000,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2035",
                            "left",
                            8146,
                            146,
                            "easeOutQuad",
                            "${txt-3-gfxCopy}",
                            '22px',
                            '42px'
                        ],
                        [
                            "eid2031",
                            "left",
                            11625,
                            192,
                            "easeOutQuad",
                            "${txt-3-gfxCopy}",
                            '42px',
                            '62px'
                        ],
                        [
                            "eid785",
                            "opacity",
                            1823,
                            337,
                            "linear",
                            "${txt-1-gfxCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid773",
                            "opacity",
                            4160,
                            391,
                            "linear",
                            "${txt-1-gfxCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1511",
                            "-webkit-transform-origin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12447",
                            "-moz-transform-origin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12448",
                            "-ms-transform-origin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12449",
                            "msTransformOrigin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12450",
                            "-o-transform-origin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12451",
                            "transform-origin",
                            7818,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1512",
                            "-webkit-transform-origin",
                            8068,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12452",
                            "-moz-transform-origin",
                            8068,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12453",
                            "-ms-transform-origin",
                            8068,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12454",
                            "msTransformOrigin",
                            8068,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12455",
                            "-o-transform-origin",
                            8068,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12456",
                            "transform-origin",
                            8068,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3138",
                            "-webkit-transform-origin",
                            11817,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12457",
                            "-moz-transform-origin",
                            11817,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12458",
                            "-ms-transform-origin",
                            11817,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12459",
                            "msTransformOrigin",
                            11817,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12460",
                            "-o-transform-origin",
                            11817,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12461",
                            "transform-origin",
                            11817,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3141",
                            "-webkit-transform-origin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12462",
                            "-moz-transform-origin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12463",
                            "-ms-transform-origin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12464",
                            "msTransformOrigin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12465",
                            "-o-transform-origin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12466",
                            "transform-origin",
                            11963,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy4}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19",
                            "-webkit-transform-origin",
                            822,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12467",
                            "-moz-transform-origin",
                            822,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12468",
                            "-ms-transform-origin",
                            822,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12469",
                            "msTransformOrigin",
                            822,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12470",
                            "-o-transform-origin",
                            822,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12471",
                            "transform-origin",
                            822,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid20",
                            "-webkit-transform-origin",
                            1322,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12472",
                            "-moz-transform-origin",
                            1322,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12473",
                            "-ms-transform-origin",
                            1322,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12474",
                            "msTransformOrigin",
                            1322,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12475",
                            "-o-transform-origin",
                            1322,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12476",
                            "transform-origin",
                            1322,
                            0,
                            "linear",
                            "${leaf-1-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5131",
                            "left",
                            12109,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '-0.31%',
                            '-0.31%'
                        ],
                        [
                            "eid4524",
                            "left",
                            12500,
                            0,
                            "easeOutQuad",
                            "${RectangleCopy}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid1505",
                            "-webkit-transform-origin",
                            7658,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12477",
                            "-moz-transform-origin",
                            7658,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12478",
                            "-ms-transform-origin",
                            7658,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12479",
                            "msTransformOrigin",
                            7658,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12480",
                            "-o-transform-origin",
                            7658,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12481",
                            "transform-origin",
                            7658,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1506",
                            "-webkit-transform-origin",
                            7908,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12482",
                            "-moz-transform-origin",
                            7908,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12483",
                            "-ms-transform-origin",
                            7908,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12484",
                            "msTransformOrigin",
                            7908,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12485",
                            "-o-transform-origin",
                            7908,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12486",
                            "transform-origin",
                            7908,
                            0,
                            "linear",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3145",
                            "-webkit-transform-origin",
                            11898,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12487",
                            "-moz-transform-origin",
                            11898,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12488",
                            "-ms-transform-origin",
                            11898,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12489",
                            "msTransformOrigin",
                            11898,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12490",
                            "-o-transform-origin",
                            11898,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12491",
                            "transform-origin",
                            11898,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3153",
                            "-webkit-transform-origin",
                            12044,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12492",
                            "-moz-transform-origin",
                            12044,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12493",
                            "-ms-transform-origin",
                            12044,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12494",
                            "msTransformOrigin",
                            12044,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12495",
                            "-o-transform-origin",
                            12044,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12496",
                            "transform-origin",
                            12044,
                            0,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy2}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2034",
                            "left",
                            8068,
                            146,
                            "easeOutQuad",
                            "${txt-3-gfx}",
                            '22px',
                            '42px'
                        ],
                        [
                            "eid2030",
                            "left",
                            11500,
                            192,
                            "easeOutQuad",
                            "${txt-3-gfx}",
                            '42px',
                            '62px'
                        ],
                        [
                            "eid1510",
                            "rotateZ",
                            7750,
                            250,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            '61deg',
                            '0deg'
                        ],
                        [
                            "eid3160",
                            "rotateZ",
                            11854,
                            146,
                            "easeOutQuad",
                            "${leaf-2-gfxCopy3}",
                            '0deg',
                            '60deg'
                        ],
                        [
                            "eid7",
                            "-webkit-transform-origin",
                            500,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12497",
                            "-moz-transform-origin",
                            500,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12498",
                            "-ms-transform-origin",
                            500,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12499",
                            "msTransformOrigin",
                            500,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12500",
                            "-o-transform-origin",
                            500,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12501",
                            "transform-origin",
                            500,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid8",
                            "-webkit-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12502",
                            "-moz-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12503",
                            "-ms-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12504",
                            "msTransformOrigin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12505",
                            "-o-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12506",
                            "transform-origin",
                            1000,
                            0,
                            "linear",
                            "${leaf-1-gfx}",
                            [0,100],
                            [0,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5138",
                            "left",
                            12109,
                            391,
                            "linear",
                            "${RectangleCopy2}",
                            '-10px',
                            '0px'
                        ],
                        [
                            "eid5140",
                            "top",
                            12109,
                            391,
                            "linear",
                            "${Rectangle}",
                            '-10px',
                            '0px'
                        ],
                        [
                            "eid779",
                            "left",
                            1663,
                            337,
                            "easeOutQuad",
                            "${txt-1-gfx}",
                            '436px',
                            '452px'
                        ],
                        [
                            "eid775",
                            "left",
                            4000,
                            391,
                            "easeInQuad",
                            "${txt-1-gfx}",
                            '452px',
                            '476px'
                        ],
                        [
                            "eid5132",
                            "left",
                            12109,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid4521",
                            "left",
                            12500,
                            0,
                            "easeOutQuad",
                            "${Rectangle}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid784",
                            "opacity",
                            4551,
                            337,
                            "linear",
                            "${txt-2-gfx}",
                            '0',
                            '1'
                        ],
                        [
                            "eid772",
                            "opacity",
                            6888,
                            391,
                            "linear",
                            "${txt-2-gfx}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5604",
                            "opacity",
                            12500,
                            500,
                            "linear",
                            "${logo}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "leaf-1-gfx": {
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
                            id: 'leaf-1',
                            rect: ['0px', '0px', '272px', '272px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/leaf-1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '272px', '272px']
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
            "txt-1-gfx": {
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
                            id: 'txt-1',
                            rect: ['0px', '0px', '161px', '48px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '161px', '48px']
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
            "txt-2-gfx": {
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
                            id: 'txt-2',
                            rect: ['0px', '0px', '137px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt-2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '137px', '44px']
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
            "keyline": {
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '728px', '1px', 'auto', 'auto'],
                            fill: ['rgba(8,105,50,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '89px', '728px', '1px', 'auto', 'auto'],
                            fill: ['rgba(8,105,50,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1px', '90px', 'auto', 'auto'],
                            fill: ['rgba(8,105,50,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['727px', '0px', '1px', '90px', 'auto', 'auto'],
                            fill: ['rgba(8,105,50,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '728px', '90px']
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
            "leaf-2-gfx": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '861px', '1360px', 'auto', 'auto'],
                            id: 'leaf-2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/leaf-2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '861px', '1360px']
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
            "txt-3-gfx": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '429px', '54px', 'auto', 'auto'],
                            id: 'txt-3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/txt-3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '429px', '54px']
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
})("EDGE-99830100");
