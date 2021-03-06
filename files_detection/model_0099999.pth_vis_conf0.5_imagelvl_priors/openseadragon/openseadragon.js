//! OpenSeadragon 1.2.1
//! Built on 2015-01-29
//! Git commit: v1.2.1-0-2f9563d
//! http://openseadragon.github.io
//! License: http://openseadragon.github.io/license/
window.OpenSeadragon = window.OpenSeadragon || function(a) {
    return new OpenSeadragon.Viewer(a)
}
,
function(a) {
    a.version = {
        versionStr: "1.2.1",
        major: parseInt("1", 10),
        minor: parseInt("2", 10),
        revision: parseInt("1", 10)
    };
    var b = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regexp",
        "[object Object]": "object"
    }
      , c = Object.prototype.toString
      , d = Object.prototype.hasOwnProperty;
    a.isFunction = function(b) {
        return "function" === a.type(b)
    }
    ,
    a.isArray = Array.isArray || function(b) {
        return "array" === a.type(b)
    }
    ,
    a.isWindow = function(a) {
        return a && "object" == typeof a && "setInterval"in a
    }
    ,
    a.type = function(a) {
        return null === a || void 0 === a ? String(a) : b[c.call(a)] || "object"
    }
    ,
    a.isPlainObject = function(b) {
        if (!b || "object" !== OpenSeadragon.type(b) || b.nodeType || a.isWindow(b))
            return !1;
        if (b.constructor && !d.call(b, "constructor") && !d.call(b.constructor.prototype, "isPrototypeOf"))
            return !1;
        var c;
        for (c in b)
            ;
        return void 0 === c || d.call(b, c)
    }
    ,
    a.isEmptyObject = function(a) {
        for (var b in a)
            return !1;
        return !0
    }
    ,
    a.supportsCanvas = function() {
        var b = document.createElement("canvas");
        return !(!a.isFunction(b.getContext) || !b.getContext("2d"))
    }()
}(OpenSeadragon),
function(a) {
    function b(a, b) {
        return b && a != document.body ? document.body : a.offsetParent
    }
    a.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = arguments.length, i = !1, j = 1;
        for ("boolean" == typeof g && (i = g,
        g = arguments[1] || {},
        j = 2),
        "object" == typeof g || OpenSeadragon.isFunction(g) || (g = {}),
        h === j && (g = this,
        --j); h > j; j++)
            if (a = arguments[j],
            null !== a || void 0 !== a)
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (i && d && (OpenSeadragon.isPlainObject(d) || (e = OpenSeadragon.isArray(d))) ? (e ? (e = !1,
                    f = c && OpenSeadragon.isArray(c) ? c : []) : f = c && OpenSeadragon.isPlainObject(c) ? c : {},
                    g[b] = OpenSeadragon.extend(i, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    a.extend(a, {
        DEFAULT_SETTINGS: {
            xmlPath: null,
            tileSources: null,
            tileHost: null,
            initialPage: 0,
            crossOriginPolicy: !1,
            panHorizontal: !0,
            panVertical: !0,
            constrainDuringPan: !1,
            wrapHorizontal: !1,
            wrapVertical: !1,
            visibilityRatio: .5,
            minPixelRatio: .5,
            defaultZoomLevel: 0,
            minZoomLevel: null,
            maxZoomLevel: null,
            homeFillsViewer: !1,
            clickTimeThreshold: 300,
            clickDistThreshold: 5,
            dblClickTimeThreshold: 300,
            dblClickDistThreshold: 20,
            springStiffness: 6.5,
            animationTime: 1.2,
            gestureSettingsMouse: {
                scrollToZoom: !0,
                clickToZoom: !0,
                dblClickToZoom: !1,
                pinchToZoom: !1,
                flickEnabled: !1,
                flickMinSpeed: 120,
                flickMomentum: .25,
                pinchRotate: !1
            },
            gestureSettingsTouch: {
                scrollToZoom: !1,
                clickToZoom: !1,
                dblClickToZoom: !0,
                pinchToZoom: !0,
                flickEnabled: !0,
                flickMinSpeed: 120,
                flickMomentum: .25,
                pinchRotate: !1
            },
            gestureSettingsPen: {
                scrollToZoom: !1,
                clickToZoom: !0,
                dblClickToZoom: !1,
                pinchToZoom: !1,
                flickEnabled: !1,
                flickMinSpeed: 120,
                flickMomentum: .25,
                pinchRotate: !1
            },
            gestureSettingsUnknown: {
                scrollToZoom: !1,
                clickToZoom: !1,
                dblClickToZoom: !0,
                pinchToZoom: !0,
                flickEnabled: !0,
                flickMinSpeed: 120,
                flickMomentum: .25,
                pinchRotate: !1
            },
            zoomPerClick: 2,
            zoomPerScroll: 1.2,
            zoomPerSecond: 1,
            blendTime: 0,
            alwaysBlend: !1,
            autoHideControls: !0,
            immediateRender: !1,
            minZoomImageRatio: .9,
            maxZoomPixelRatio: 1.1,
            pixelsPerWheelLine: 40,
            autoResize: !0,
            showSequenceControl: !0,
            sequenceControlAnchor: null,
            preserveViewport: !1,
            preserveOverlays: !1,
            navPrevNextWrap: !1,
            showNavigationControl: !0,
            navigationControlAnchor: null,
            showZoomControl: !0,
            showHomeControl: !0,
            showFullPageControl: !0,
            showRotationControl: !1,
            controlsFadeDelay: 2e3,
            controlsFadeLength: 1500,
            mouseNavEnabled: !0,
            showNavigator: !1,
            navigatorId: null,
            navigatorPosition: null,
            navigatorSizeRatio: .2,
            navigatorMaintainSizeRatio: !1,
            navigatorTop: null,
            navigatorLeft: null,
            navigatorHeight: null,
            navigatorWidth: null,
            navigatorAutoResize: !0,
            navigatorRotate: !0,
            degrees: 0,
            opacity: 1,
            layersAspectRatioEpsilon: 1e-4,
            showReferenceStrip: !1,
            referenceStripScroll: "horizontal",
            referenceStripElement: null,
            referenceStripHeight: null,
            referenceStripWidth: null,
            referenceStripPosition: "BOTTOM_LEFT",
            referenceStripSizeRatio: .2,
            collectionRows: 3,
            collectionLayout: "horizontal",
            collectionMode: !1,
            collectionTileSize: 800,
            imageLoaderLimit: 0,
            maxImageCacheCount: 200,
            timeout: 3e4,
            useCanvas: !0,
            prefixUrl: "/images/",
            navImages: {
                zoomIn: {
                    REST: "zoomin_rest.png",
                    GROUP: "zoomin_grouphover.png",
                    HOVER: "zoomin_hover.png",
                    DOWN: "zoomin_pressed.png"
                },
                zoomOut: {
                    REST: "zoomout_rest.png",
                    GROUP: "zoomout_grouphover.png",
                    HOVER: "zoomout_hover.png",
                    DOWN: "zoomout_pressed.png"
                },
                home: {
                    REST: "home_rest.png",
                    GROUP: "home_grouphover.png",
                    HOVER: "home_hover.png",
                    DOWN: "home_pressed.png"
                },
                fullpage: {
                    REST: "fullpage_rest.png",
                    GROUP: "fullpage_grouphover.png",
                    HOVER: "fullpage_hover.png",
                    DOWN: "fullpage_pressed.png"
                },
                rotateleft: {
                    REST: "rotateleft_rest.png",
                    GROUP: "rotateleft_grouphover.png",
                    HOVER: "rotateleft_hover.png",
                    DOWN: "rotateleft_pressed.png"
                },
                rotateright: {
                    REST: "rotateright_rest.png",
                    GROUP: "rotateright_grouphover.png",
                    HOVER: "rotateright_hover.png",
                    DOWN: "rotateright_pressed.png"
                },
                previous: {
                    REST: "previous_rest.png",
                    GROUP: "previous_grouphover.png",
                    HOVER: "previous_hover.png",
                    DOWN: "previous_pressed.png"
                },
                next: {
                    REST: "next_rest.png",
                    GROUP: "next_grouphover.png",
                    HOVER: "next_hover.png",
                    DOWN: "next_pressed.png"
                }
            },
            debugMode: !1,
            debugGridColor: "#437AB2"
        },
        SIGNAL: "----seadragon----",
        delegate: function(a, b) {
            return function() {
                var c = arguments;
                return void 0 === c && (c = []),
                b.apply(a, c)
            }
        },
        BROWSERS: {
            UNKNOWN: 0,
            IE: 1,
            FIREFOX: 2,
            SAFARI: 3,
            CHROME: 4,
            OPERA: 5
        },
        getElement: function(a) {
            return "string" == typeof a && (a = document.getElementById(a)),
            a
        },
        getElementPosition: function(c) {
            var d, e, f = new a.Point;
            for (c = a.getElement(c),
            d = "fixed" == a.getElementStyle(c).position,
            e = b(c, d); e; )
                f.x += c.offsetLeft,
                f.y += c.offsetTop,
                d && (f = f.plus(a.getPageScroll())),
                c = e,
                d = "fixed" == a.getElementStyle(c).position,
                e = b(c, d);
            return f
        },
        getElementOffset: function(b) {
            b = a.getElement(b);
            var c, d, e = b && b.ownerDocument, f = {
                top: 0,
                left: 0
            };
            return e ? (c = e.documentElement,
            "undefined" != typeof b.getBoundingClientRect && (f = b.getBoundingClientRect()),
            d = e == e.window ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1,
            new a.Point(f.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0),f.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0))) : new a.Point
        },
        getElementSize: function(b) {
            return b = a.getElement(b),
            new a.Point(b.clientWidth,b.clientHeight)
        },
        getElementStyle: document.documentElement.currentStyle ? function(b) {
            return b = a.getElement(b),
            b.currentStyle
        }
        : function(b) {
            return b = a.getElement(b),
            window.getComputedStyle(b, "")
        }
        ,
        pointInElement: function(b, c) {
            b = a.getElement(b);
            var d = a.getElementOffset(b)
              , e = a.getElementSize(b);
            return c.x >= d.x && c.x < d.x + e.x && c.y < d.y + e.y && c.y >= d.y
        },
        getEvent: function(b) {
            return a.getEvent = b ? function(a) {
                return a
            }
            : function() {
                return window.event
            }
            ,
            a.getEvent(b)
        },
        getMousePosition: function(b) {
            if ("number" == typeof b.pageX)
                a.getMousePosition = function(b) {
                    var c = new a.Point;
                    return b = a.getEvent(b),
                    c.x = b.pageX,
                    c.y = b.pageY,
                    c
                }
                ;
            else {
                if ("number" != typeof b.clientX)
                    throw new Error("Unknown event mouse position, no known technique.");
                a.getMousePosition = function(b) {
                    var c = new a.Point;
                    return b = a.getEvent(b),
                    c.x = b.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
                    c.y = b.clientY + document.body.scrollTop + document.documentElement.scrollTop,
                    c
                }
            }
            return a.getMousePosition(b)
        },
        getPageScroll: function() {
            var b = document.documentElement || {}
              , c = document.body || {};
            if ("number" == typeof window.pageXOffset)
                a.getPageScroll = function() {
                    return new a.Point(window.pageXOffset,window.pageYOffset)
                }
                ;
            else if (c.scrollLeft || c.scrollTop)
                a.getPageScroll = function() {
                    return new a.Point(document.body.scrollLeft,document.body.scrollTop)
                }
                ;
            else {
                if (!b.scrollLeft && !b.scrollTop)
                    return new a.Point(0,0);
                a.getPageScroll = function() {
                    return new a.Point(document.documentElement.scrollLeft,document.documentElement.scrollTop)
                }
            }
            return a.getPageScroll()
        },
        setPageScroll: function(b) {
            if ("undefined" != typeof window.scrollTo)
                a.setPageScroll = function(a) {
                    window.scrollTo(a.x, a.y)
                }
                ;
            else {
                var c = a.getPageScroll();
                if (c.x === b.x && c.y === b.y)
                    return;
                document.body.scrollLeft = b.x,
                document.body.scrollTop = b.y;
                var d = a.getPageScroll();
                if (d.x !== c.x && d.y !== c.y)
                    return void (a.setPageScroll = function(a) {
                        document.body.scrollLeft = a.x,
                        document.body.scrollTop = a.y
                    }
                    );
                if (document.documentElement.scrollLeft = b.x,
                document.documentElement.scrollTop = b.y,
                d = a.getPageScroll(),
                d.x !== c.x && d.y !== c.y)
                    return void (a.setPageScroll = function(a) {
                        document.documentElement.scrollLeft = a.x,
                        document.documentElement.scrollTop = a.y
                    }
                    );
                a.setPageScroll = function() {}
            }
            return a.setPageScroll(b)
        },
        getWindowSize: function() {
            var b = document.documentElement || {}
              , c = document.body || {};
            if ("number" == typeof window.innerWidth)
                a.getWindowSize = function() {
                    return new a.Point(window.innerWidth,window.innerHeight)
                }
                ;
            else if (b.clientWidth || b.clientHeight)
                a.getWindowSize = function() {
                    return new a.Point(document.documentElement.clientWidth,document.documentElement.clientHeight)
                }
                ;
            else {
                if (!c.clientWidth && !c.clientHeight)
                    throw new Error("Unknown window size, no known technique.");
                a.getWindowSize = function() {
                    return new a.Point(document.body.clientWidth,document.body.clientHeight)
                }
            }
            return a.getWindowSize()
        },
        makeCenteredNode: function(b) {
            b = a.getElement(b);
            var c = [a.makeNeutralElement("div"), a.makeNeutralElement("div"), a.makeNeutralElement("div")];
            return a.extend(c[0].style, {
                display: "table",
                height: "100%",
                width: "100%"
            }),
            a.extend(c[1].style, {
                display: "table-row"
            }),
            a.extend(c[2].style, {
                display: "table-cell",
                verticalAlign: "middle",
                textAlign: "center"
            }),
            c[0].appendChild(c[1]),
            c[1].appendChild(c[2]),
            c[2].appendChild(b),
            c[0]
        },
        makeNeutralElement: function(a) {
            var b = document.createElement(a)
              , c = b.style;
            return c.background = "transparent none",
            c.border = "none",
            c.margin = "0px",
            c.padding = "0px",
            c.position = "static",
            b
        },
        now: function() {
            return a.now = Date.now ? Date.now : function() {
                return (new Date).getTime()
            }
            ,
            a.now()
        },
        makeTransparentImage: function(b) {
            return a.makeTransparentImage = function(b) {
                var c = a.makeNeutralElement("img");
                return c.src = b,
                c
            }
            ,
            a.Browser.vendor == a.BROWSERS.IE && a.Browser.version < 7 && (a.makeTransparentImage = function(b) {
                var c = a.makeNeutralElement("img")
                  , d = null;
                return d = a.makeNeutralElement("span"),
                d.style.display = "inline-block",
                c.onload = function() {
                    d.style.width = d.style.width || c.width + "px",
                    d.style.height = d.style.height || c.height + "px",
                    c.onload = null,
                    c = null
                }
                ,
                c.src = b,
                d.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + b + "', sizingMethod='scale')",
                d
            }
            ),
            a.makeTransparentImage(b)
        },
        setElementOpacity: function(b, c, d) {
            var e, f;
            b = a.getElement(b),
            d && !a.Browser.alpha && (c = Math.round(c)),
            a.Browser.opacity ? b.style.opacity = 1 > c ? c : "" : 1 > c ? (e = Math.round(100 * c),
            f = "alpha(opacity=" + e + ")",
            b.style.filter = f) : b.style.filter = ""
        },
        setElementTouchActionNone: function(b) {
            b = a.getElement(b),
            "undefined" != typeof b.style.touchAction ? b.style.touchAction = "none" : "undefined" != typeof b.style.msTouchAction && (b.style.msTouchAction = "none")
        },
        addClass: function(b, c) {
            b = a.getElement(b),
            b.className ? -1 === (" " + b.className + " ").indexOf(" " + c + " ") && (b.className += " " + c) : b.className = c
        },
        indexOf: function(a, b, c) {
            return this.indexOf = Array.prototype.indexOf ? function(a, b, c) {
                return a.indexOf(b, c)
            }
            : function(a, b, c) {
                var d, e, f = c ? c : 0;
                if (!a)
                    throw new TypeError;
                if (e = a.length,
                0 === e || f >= e)
                    return -1;
                for (0 > f && (f = e - Math.abs(f)),
                d = f; e > d; d++)
                    if (a[d] === b)
                        return d;
                return -1
            }
            ,
            this.indexOf(a, b, c)
        },
        removeClass: function(b, c) {
            var d, e, f = [];
            for (b = a.getElement(b),
            d = b.className.split(/\s+/),
            e = 0; e < d.length; e++)
                d[e] && d[e] !== c && f.push(d[e]);
            b.className = f.join(" ")
        },
        addEvent: function() {
            if (window.addEventListener)
                return function(b, c, d, e) {
                    b = a.getElement(b),
                    b.addEventListener(c, d, e)
                }
                ;
            if (window.attachEvent)
                return function(b, c, d) {
                    b = a.getElement(b),
                    b.attachEvent("on" + c, d)
                }
                ;
            throw new Error("No known event model.")
        }(),
        removeEvent: function() {
            if (window.removeEventListener)
                return function(b, c, d, e) {
                    b = a.getElement(b),
                    b.removeEventListener(c, d, e)
                }
                ;
            if (window.detachEvent)
                return function(b, c, d) {
                    b = a.getElement(b),
                    b.detachEvent("on" + c, d)
                }
                ;
            throw new Error("No known event model.")
        }(),
        cancelEvent: function(b) {
            b = a.getEvent(b),
            a.cancelEvent = b.preventDefault ? function(a) {
                a.preventDefault()
            }
            : function(b) {
                b = a.getEvent(b),
                b.cancel = !0,
                b.returnValue = !1
            }
            ,
            a.cancelEvent(b)
        },
        stopEvent: function(b) {
            b = a.getEvent(b),
            a.stopEvent = b.stopPropagation ? function(a) {
                a.stopPropagation()
            }
            : function(b) {
                b = a.getEvent(b),
                b.cancelBubble = !0
            }
            ,
            a.stopEvent(b)
        },
        createCallback: function(a, b) {
            var c, d = [];
            for (c = 2; c < arguments.length; c++)
                d.push(arguments[c]);
            return function() {
                var c, e = d.concat([]);
                for (c = 0; c < arguments.length; c++)
                    e.push(arguments[c]);
                return b.apply(a, e)
            }
        },
        getUrlParameter: function(a) {
            var b = d[a];
            return b ? b : null
        },
        getUrlProtocol: function(a) {
            var b = a.match(/^([a-z]+:)\/\//i);
            return null === b ? window.location.protocol : b[1].toLowerCase()
        },
        createAjaxRequest: function(b) {
            var c;
            try {
                c = !!new ActiveXObject("Microsoft.XMLHTTP")
            } catch (d) {
                c = !1
            }
            if (c)
                a.createAjaxRequest = window.XMLHttpRequest ? function(a) {
                    return a ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
                }
                : function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }
                ;
            else {
                if (!window.XMLHttpRequest)
                    throw new Error("Browser doesn't support XMLHttpRequest.");
                a.createAjaxRequest = function() {
                    return new XMLHttpRequest
                }
            }
            return a.createAjaxRequest(b)
        },
        makeAjaxRequest: function(b, c, d) {
            var e = a.getUrlProtocol(b)
              , f = a.createAjaxRequest("file:" === e);
            if (!a.isFunction(c))
                throw new Error("makeAjaxRequest requires a success callback");
            f.onreadystatechange = function() {
                if (4 == f.readyState) {
                    f.onreadystatechange = function() {}
                    ;
                    var g = "http:" === e || "https:" === e ? 200 : 0;
                    f.status === g ? c(f) : (a.console.log("AJAX request returned %d: %s", f.status, b),
                    a.isFunction(d) && d(f))
                }
            }
            ;
            try {
                f.open("GET", b, !0),
                f.send(null)
            } catch (g) {
                var h = g.message
                  , i = a.Browser.vendor == a.BROWSERS.IE && a.Browser.version < 10;
                i && "undefined" != typeof g.number && -2147024891 == g.number && (h += "\nSee http://msdn.microsoft.com/en-us/library/ms537505(v=vs.85).aspx#xdomain"),
                a.console.log("%s while making AJAX request: %s", g.name, h),
                f.onreadystatechange = function() {}
                ,
                a.isFunction(d) && d(f, g)
            }
        },
        jsonp: function(b) {
            var c, d = b.url, e = document.head || document.getElementsByTagName("head")[0] || document.documentElement, f = b.callbackName || "openseadragon" + a.now(), g = window[f], h = "$1" + f + "$2", i = b.param || "callback", j = b.callback;
            d = d.replace(/(\=)\?(&|$)|\?\?/i, h),
            d += (/\?/.test(d) ? "&" : "?") + i + "=" + f,
            window[f] = function(b) {
                if (g)
                    window[f] = g;
                else
                    try {
                        delete window[f]
                    } catch (c) {}
                j && a.isFunction(j) && j(b)
            }
            ,
            c = document.createElement("script"),
            (void 0 !== b.async || !1 !== b.async) && (c.async = "async"),
            b.scriptCharset && (c.charset = b.scriptCharset),
            c.src = d,
            c.onload = c.onreadystatechange = function(a, b) {
                (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null,
                e && c.parentNode && e.removeChild(c),
                c = void 0)
            }
            ,
            e.insertBefore(c, e.firstChild)
        },
        createFromDZI: function() {
            throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open."
        },
        parseXml: function(b) {
            if (window.DOMParser)
                a.parseXml = function(a) {
                    var b, c = null;
                    return b = new DOMParser,
                    c = b.parseFromString(a, "text/xml")
                }
                ;
            else {
                if (!window.ActiveXObject)
                    throw new Error("Browser doesn't support XML DOM.");
                a.parseXml = function(a) {
                    var b = null;
                    return b = new ActiveXObject("Microsoft.XMLDOM"),
                    b.async = !1,
                    b.loadXML(a),
                    b
                }
            }
            return a.parseXml(b)
        },
        imageFormatSupported: function(a) {
            return a = a ? a : "",
            !!c[a.toLowerCase()]
        }
    }),
    a.Browser = {
        vendor: a.BROWSERS.UNKNOWN,
        version: 0,
        alpha: !0
    };
    var c = {
        bmp: !1,
        jpeg: !0,
        jpg: !0,
        png: !0,
        tif: !1,
        wdp: !1
    }
      , d = {};
    !function() {
        var b, c = (navigator.appName,
        navigator.appVersion), e = navigator.userAgent;
        switch (navigator.appName) {
        case "Microsoft Internet Explorer":
            window.attachEvent && window.ActiveXObject && (a.Browser.vendor = a.BROWSERS.IE,
            a.Browser.version = parseFloat(e.substring(e.indexOf("MSIE") + 5, e.indexOf(";", e.indexOf("MSIE")))));
            break;
        case "Netscape":
            window.addEventListener && (e.indexOf("Firefox") >= 0 ? (a.Browser.vendor = a.BROWSERS.FIREFOX,
            a.Browser.version = parseFloat(e.substring(e.indexOf("Firefox") + 8))) : e.indexOf("Safari") >= 0 ? (a.Browser.vendor = e.indexOf("Chrome") >= 0 ? a.BROWSERS.CHROME : a.BROWSERS.SAFARI,
            a.Browser.version = parseFloat(e.substring(e.substring(0, e.indexOf("Safari")).lastIndexOf("/") + 1, e.indexOf("Safari")))) : (b = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"),
            null !== b.exec(e) && (a.Browser.vendor = a.BROWSERS.IE,
            a.Browser.version = parseFloat(RegExp.$1))));
            break;
        case "Opera":
            a.Browser.vendor = a.BROWSERS.OPERA,
            a.Browser.version = parseFloat(c)
        }
        var f, g, h, i = window.location.search.substring(1), j = i.split("&");
        for (h = 0; h < j.length; h++)
            f = j[h],
            g = f.indexOf("="),
            g > 0 && (d[f.substring(0, g)] = decodeURIComponent(f.substring(g + 1)));
        a.Browser.alpha = !(a.Browser.vendor == a.BROWSERS.IE && a.Browser.version < 9 || a.Browser.vendor == a.BROWSERS.CHROME && a.Browser.version < 2),
        a.Browser.opacity = !(a.Browser.vendor == a.BROWSERS.IE && a.Browser.version < 9)
    }();
    var e = function() {};
    a.console = window.console || {
        log: e,
        debug: e,
        info: e,
        warn: e,
        error: e
    },
    function(b) {
        var c = b.requestAnimationFrame || b.mozRequestAnimationFrame || b.webkitRequestAnimationFrame || b.msRequestAnimationFrame
          , d = b.cancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelAnimationFrame || b.msCancelAnimationFrame;
        if (c && d)
            a.requestAnimationFrame = function() {
                return c.apply(b, arguments)
            }
            ,
            a.cancelAnimationFrame = function() {
                return d.apply(b, arguments)
            }
            ;
        else {
            var e, f = [], g = [], h = 0;
            a.requestAnimationFrame = function(b) {
                return f.push([++h, b]),
                e || (e = setInterval(function() {
                    if (f.length) {
                        var b = a.now()
                          , c = g;
                        for (g = f,
                        f = c; g.length; )
                            g.shift()[1](b)
                    } else
                        clearInterval(e),
                        e = void 0
                }, 20)),
                h
            }
            ,
            a.cancelAnimationFrame = function(a) {
                var b, c;
                for (b = 0,
                c = f.length; c > b; b += 1)
                    if (f[b][0] === a)
                        return void f.splice(b, 1);
                for (b = 0,
                c = g.length; c > b; b += 1)
                    if (g[b][0] === a)
                        return void g.splice(b, 1)
            }
        }
    }(window),
    a._processDZIError = function(a) {
        var b = a.getElementsByTagName("Message")[0]
          , c = b.firstChild.nodeValue;
        throw new Error(c)
    }
}(OpenSeadragon),
function(a) {
    var b = {
        supportsFullScreen: !1,
        isFullScreen: function() {
            return !1
        },
        getFullScreenElement: function() {
            return null
        },
        requestFullScreen: function() {},
        exitFullScreen: function() {},
        cancelFullScreen: function() {},
        fullScreenEventName: "",
        fullScreenErrorEventName: ""
    };
    document.exitFullscreen ? (b.supportsFullScreen = !0,
    b.getFullScreenElement = function() {
        return document.fullscreenElement
    }
    ,
    b.requestFullScreen = function(a) {
        return a.requestFullscreen()
    }
    ,
    b.exitFullScreen = function() {
        document.exitFullscreen()
    }
    ,
    b.fullScreenEventName = "fullscreenchange",
    b.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (b.supportsFullScreen = !0,
    b.getFullScreenElement = function() {
        return document.msFullscreenElement
    }
    ,
    b.requestFullScreen = function(a) {
        return a.msRequestFullscreen()
    }
    ,
    b.exitFullScreen = function() {
        document.msExitFullscreen()
    }
    ,
    b.fullScreenEventName = "MSFullscreenChange",
    b.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (b.supportsFullScreen = !0,
    b.getFullScreenElement = function() {
        return document.webkitFullscreenElement
    }
    ,
    b.requestFullScreen = function(a) {
        return a.webkitRequestFullscreen()
    }
    ,
    b.exitFullScreen = function() {
        document.webkitExitFullscreen()
    }
    ,
    b.fullScreenEventName = "webkitfullscreenchange",
    b.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (b.supportsFullScreen = !0,
    b.getFullScreenElement = function() {
        return document.webkitCurrentFullScreenElement
    }
    ,
    b.requestFullScreen = function(a) {
        return a.webkitRequestFullScreen()
    }
    ,
    b.exitFullScreen = function() {
        document.webkitCancelFullScreen()
    }
    ,
    b.fullScreenEventName = "webkitfullscreenchange",
    b.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (b.supportsFullScreen = !0,
    b.getFullScreenElement = function() {
        return document.mozFullScreenElement
    }
    ,
    b.requestFullScreen = function(a) {
        return a.mozRequestFullScreen()
    }
    ,
    b.exitFullScreen = function() {
        document.mozCancelFullScreen()
    }
    ,
    b.fullScreenEventName = "mozfullscreenchange",
    b.fullScreenErrorEventName = "mozfullscreenerror"),
    b.isFullScreen = function() {
        return null !== b.getFullScreenElement()
    }
    ,
    b.cancelFullScreen = function() {
        a.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."),
        b.exitFullScreen()
    }
    ,
    a.extend(a, b)
}(OpenSeadragon),
function(a) {
    a.EventSource = function() {
        this.events = {}
    }
    ,
    a.EventSource.prototype = {
        addHandler: function(b, c, d) {
            var e = this.events[b];
            e || (this.events[b] = e = []),
            c && a.isFunction(c) && (e[e.length] = {
                handler: c,
                userData: d || null
            })
        },
        removeHandler: function(b, c) {
            var d, e = this.events[b], f = [];
            if (e && a.isArray(e)) {
                for (d = 0; d < e.length; d++)
                    e[d].handler !== c && f.push(e[d]);
                this.events[b] = f
            }
        },
        removeAllHandlers: function(a) {
            if (a)
                this.events[a] = [];
            else
                for (var b in this.events)
                    this.events[b] = []
        },
        getHandler: function(a) {
            var b = this.events[a];
            return b && b.length ? (b = 1 === b.length ? [b[0]] : Array.apply(null, b),
            function(a, c) {
                var d, e = b.length;
                for (d = 0; e > d; d++)
                    b[d] && (c.eventSource = a,
                    c.userData = b[d].userData,
                    b[d].handler(c))
            }
            ) : null
        },
        raiseEvent: function(a, b) {
            var c = this.getHandler(a);
            c && (b || (b = {}),
            c(this, b))
        }
    }
}(OpenSeadragon),
function(a) {
    function b(b) {
        var c, d = ob[b.hash], e = d.activePointersLists.length;
        for (c = 0; e > c; c++)
            d.activePointersLists[c].captureCount > 0 && (a.removeEvent(a.MouseTracker.captureElement, "mousemove", d.mousemovecaptured, !0),
            a.removeEvent(a.MouseTracker.captureElement, "mouseup", d.mouseupcaptured, !0),
            a.removeEvent(a.MouseTracker.captureElement, a.MouseTracker.unprefixedPointerEvents ? "pointermove" : "MSPointerMove", d.pointermovecaptured, !0),
            a.removeEvent(a.MouseTracker.captureElement, a.MouseTracker.unprefixedPointerEvents ? "pointerup" : "MSPointerUp", d.pointerupcaptured, !0),
            a.removeEvent(a.MouseTracker.captureElement, "touchmove", d.touchmovecaptured, !0),
            a.removeEvent(a.MouseTracker.captureElement, "touchend", d.touchendcaptured, !0),
            d.activePointersLists[c].captureCount = 0);
        for (c = 0; e > c; c++)
            d.activePointersLists.pop()
    }
    function c(c) {
        var d, e, f = ob[c.hash];
        if (!f.tracking) {
            for (e = 0; e < a.MouseTracker.subscribeEvents.length; e++)
                d = a.MouseTracker.subscribeEvents[e],
                a.addEvent(c.element, d, f[d], !1);
            b(c),
            f.tracking = !0
        }
    }
    function d(c) {
        var d, e, f = ob[c.hash];
        if (f.tracking) {
            for (e = 0; e < a.MouseTracker.subscribeEvents.length; e++)
                d = a.MouseTracker.subscribeEvents[e],
                a.removeEvent(c.element, d, f[d], !1);
            b(c),
            f.tracking = !1
        }
    }
    function e(b, c) {
        var d = ob[b.hash];
        if ("pointerevent" === c)
            return {
                upName: a.MouseTracker.unprefixedPointerEvents ? "pointerup" : "MSPointerUp",
                upHandler: d.pointerupcaptured,
                moveName: a.MouseTracker.unprefixedPointerEvents ? "pointermove" : "MSPointerMove",
                moveHandler: d.pointermovecaptured
            };
        if ("mouse" === c)
            return {
                upName: "mouseup",
                upHandler: d.mouseupcaptured,
                moveName: "mousemove",
                moveHandler: d.mousemovecaptured
            };
        if ("touch" === c)
            return {
                upName: "touchend",
                upHandler: d.touchendcaptured,
                moveName: "touchmove",
                moveHandler: d.touchmovecaptured
            };
        throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.")
    }
    function f(b, c) {
        var d, f = b.getActivePointersListByType(c);
        f.captureCount++,
        1 === f.captureCount && (a.Browser.vendor === a.BROWSERS.IE && a.Browser.version < 9 ? b.element.setCapture(!0) : (d = e(b, a.MouseTracker.havePointerEvents ? "pointerevent" : c),
        a.addEvent(a.MouseTracker.captureElement, d.upName, d.upHandler, !0),
        a.addEvent(a.MouseTracker.captureElement, d.moveName, d.moveHandler, !0)))
    }
    function g(b, c) {
        var d, f = b.getActivePointersListByType(c);
        f.captureCount--,
        0 === f.captureCount && (a.Browser.vendor === a.BROWSERS.IE && a.Browser.version < 9 ? b.element.releaseCapture() : (d = e(b, a.MouseTracker.havePointerEvents ? "pointerevent" : c),
        a.removeEvent(a.MouseTracker.captureElement, d.moveName, d.moveHandler, !0),
        a.removeEvent(a.MouseTracker.captureElement, d.upName, d.upHandler, !0)))
    }
    function h(b) {
        var c;
        if (a.MouseTracker.unprefixedPointerEvents)
            c = b.pointerType;
        else
            switch (b.pointerType) {
            case 2:
                c = "touch";
                break;
            case 3:
                c = "pen";
                break;
            case 4:
                c = "mouse";
                break;
            default:
                c = ""
            }
        return c
    }
    function i(b) {
        return a.getMousePosition(b)
    }
    function j(a, b) {
        return k(i(a), b)
    }
    function k(b, c) {
        var d = a.getElementOffset(c);
        return b.minus(d)
    }
    function l(b, c) {
        return new a.Point((b.x + c.x) / 2,(b.y + c.y) / 2)
    }
    function m(b, c) {
        b.clickHandler && a.cancelEvent(c)
    }
    function n(b, c) {
        b.dblClickHandler && a.cancelEvent(c)
    }
    function o(b, c) {
        var d;
        b.keyDownHandler && (c = a.getEvent(c),
        d = b.keyDownHandler({
            eventSource: b,
            keyCode: c.keyCode ? c.keyCode : c.charCode,
            ctrl: c.ctrlKey,
            shift: c.shiftKey,
            alt: c.altKey,
            meta: c.metaKey,
            originalEvent: c,
            preventDefaultAction: !1,
            userData: b.userData
        }),
        d || a.cancelEvent(c))
    }
    function p(b, c) {
        var d;
        b.keyUpHandler && (c = a.getEvent(c),
        d = b.keyUpHandler({
            eventSource: b,
            keyCode: c.keyCode ? c.keyCode : c.charCode,
            ctrl: c.ctrlKey,
            shift: c.shiftKey,
            alt: c.altKey,
            meta: c.metaKey,
            originalEvent: c,
            preventDefaultAction: !1,
            userData: b.userData
        }),
        d || a.cancelEvent(c))
    }
    function q(b, c) {
        var d;
        b.keyHandler && (c = a.getEvent(c),
        d = b.keyHandler({
            eventSource: b,
            keyCode: c.keyCode ? c.keyCode : c.charCode,
            ctrl: c.ctrlKey,
            shift: c.shiftKey,
            alt: c.altKey,
            meta: c.metaKey,
            originalEvent: c,
            preventDefaultAction: !1,
            userData: b.userData
        }),
        d || a.cancelEvent(c))
    }
    function r(b, c) {
        var d;
        b.focusHandler && (c = a.getEvent(c),
        d = b.focusHandler({
            eventSource: b,
            originalEvent: c,
            preventDefaultAction: !1,
            userData: b.userData
        }),
        d === !1 && a.cancelEvent(c))
    }
    function s(b, c) {
        var d;
        b.blurHandler && (c = a.getEvent(c),
        d = b.blurHandler({
            eventSource: b,
            originalEvent: c,
            preventDefaultAction: !1,
            userData: b.userData
        }),
        d === !1 && a.cancelEvent(c))
    }
    function t(a, b) {
        v(a, b, b)
    }
    function u(b, c) {
        c = a.getEvent(c);
        var d = {
            target: c.target || c.srcElement,
            type: "wheel",
            shiftKey: c.shiftKey || !1,
            clientX: c.clientX,
            clientY: c.clientY,
            pageX: c.pageX ? c.pageX : c.clientX,
            pageY: c.pageY ? c.pageY : c.clientY,
            deltaMode: "MozMousePixelScroll" == c.type ? 0 : 1,
            deltaX: 0,
            deltaZ: 0
        };
        d.deltaY = "mousewheel" == a.MouseTracker.wheelEventName ? -1 / a.DEFAULT_SETTINGS.pixelsPerWheelLine * c.wheelDelta : c.detail,
        v(b, d, c)
    }
    function v(b, c, d) {
        var e, f = 0;
        f = c.deltaY < 0 ? 1 : -1,
        b.scrollHandler && (e = b.scrollHandler({
            eventSource: b,
            pointerType: "mouse",
            position: j(c, b.element),
            scroll: f,
            shift: c.shiftKey,
            isTouchEvent: !1,
            originalEvent: d,
            preventDefaultAction: !1,
            userData: b.userData
        }),
        e === !1 && a.cancelEvent(d))
    }
    function w(a, b) {
        if (a === b)
            return !1;
        for (; b && b !== a; )
            b = b.parentNode;
        return b === a
    }
    function x(b, c) {
        c = a.getEvent(c),
        z(b, c)
    }
    function y(b, c) {
        c = a.getEvent(c),
        c.currentTarget === c.relatedTarget || w(c.currentTarget, c.relatedTarget) || z(b, c)
    }
    function z(b, c) {
        var d = {
            id: a.MouseTracker.mousePointerId,
            type: "mouse",
            isPrimary: !0,
            currentPos: i(c),
            currentTime: a.now()
        };
        gb(b, c, [d])
    }
    function A(b, c) {
        c = a.getEvent(c),
        C(b, c)
    }
    function B(b, c) {
        c = a.getEvent(c),
        c.currentTarget === c.relatedTarget || w(c.currentTarget, c.relatedTarget) || C(b, c)
    }
    function C(b, c) {
        var d = {
            id: a.MouseTracker.mousePointerId,
            type: "mouse",
            isPrimary: !0,
            currentPos: i(c),
            currentTime: a.now()
        };
        hb(b, c, [d])
    }
    function D(b) {
        return a.Browser.vendor === a.BROWSERS.IE && a.Browser.version < 9 ? 1 === b ? 0 : 2 === b ? 2 : 4 === b ? 1 : -1 : b
    }
    function E(b, c) {
        var d;
        c = a.getEvent(c),
        d = {
            id: a.MouseTracker.mousePointerId,
            type: "mouse",
            isPrimary: !0,
            currentPos: i(c),
            currentTime: a.now()
        },
        ib(b, c, [d], D(c.button)) && (a.stopEvent(c),
        f(b, "mouse")),
        (b.clickHandler || b.dblClickHandler || b.pressHandler || b.dragHandler || b.dragEndHandler) && a.cancelEvent(c)
    }
    function F(a, b) {
        H(a, b)
    }
    function G(b, c) {
        H(b, c),
        a.stopEvent(c)
    }
    function H(b, c) {
        var d;
        c = a.getEvent(c),
        d = {
            id: a.MouseTracker.mousePointerId,
            type: "mouse",
            isPrimary: !0,
            currentPos: i(c),
            currentTime: a.now()
        },
        jb(b, c, [d], D(c.button)) && g(b, "mouse")
    }
    function I(a, b) {
        K(a, b)
    }
    function J(b, c) {
        K(b, c),
        a.stopEvent(c)
    }
    function K(b, c) {
        var d;
        c = a.getEvent(c),
        d = {
            id: a.MouseTracker.mousePointerId,
            type: "mouse",
            isPrimary: !0,
            currentPos: i(c),
            currentTime: a.now()
        },
        kb(b, c, [d])
    }
    function L(a, b, c) {
        var d, e = c.getLength(), f = [];
        for (d = 0; e > d; d++)
            f.push(c.getByIndex(d));
        f.length > 0 && (jb(a, b, f, 0),
        c.captureCount = 1,
        g(a, "touch"),
        hb(a, b, f))
    }
    function M(b, c) {
        var d, e, g, h, j = c.changedTouches.length, k = [], l = b.getActivePointersListByType("touch");
        for (d = a.now(),
        l.getLength() > c.touches.length - j && (a.console.warn("Tracked touch contact count doesn't match event.touches.length. Removing all tracked touch pointers."),
        L(b, c, l)),
        e = 0; j > e; e++)
            k.push({
                id: c.changedTouches[e].identifier,
                type: "touch",
                currentPos: i(c.changedTouches[e]),
                currentTime: d
            });
        for (gb(b, c, k),
        e = 0; e < nb.length; e++)
            if (nb[e] !== b && nb[e].isTracking() && w(nb[e].element, b.element)) {
                for (h = [],
                g = 0; j > g; g++)
                    h.push({
                        id: c.changedTouches[g].identifier,
                        type: "touch",
                        currentPos: i(c.changedTouches[g]),
                        currentTime: d
                    });
                gb(nb[e], c, h)
            }
        ib(b, c, k, 0) && (a.stopEvent(c),
        f(b, "touch")),
        a.cancelEvent(c)
    }
    function N(a, b) {
        P(a, b)
    }
    function O(b, c) {
        P(b, c),
        a.stopEvent(c)
    }
    function P(b, c) {
        var d, e, f, h, j = c.changedTouches.length, k = [];
        for (d = a.now(),
        e = 0; j > e; e++)
            k.push({
                id: c.changedTouches[e].identifier,
                type: "touch",
                currentPos: i(c.changedTouches[e]),
                currentTime: d
            });
        for (jb(b, c, k, 0) && g(b, "touch"),
        hb(b, c, k),
        e = 0; e < nb.length; e++)
            if (nb[e] !== b && nb[e].isTracking() && w(nb[e].element, b.element)) {
                for (h = [],
                f = 0; j > f; f++)
                    h.push({
                        id: c.changedTouches[f].identifier,
                        type: "touch",
                        currentPos: i(c.changedTouches[f]),
                        currentTime: d
                    });
                hb(nb[e], c, h)
            }
        a.cancelEvent(c)
    }
    function Q(a, b) {
        S(a, b)
    }
    function R(b, c) {
        S(b, c),
        a.stopEvent(c)
    }
    function S(b, c) {
        var d, e = c.changedTouches.length, f = [];
        for (d = 0; e > d; d++)
            f.push({
                id: c.changedTouches[d].identifier,
                type: "touch",
                currentPos: i(c.changedTouches[d]),
                currentTime: a.now()
            });
        kb(b, c, f),
        a.cancelEvent(c)
    }
    function T(a, b) {
        var c, d = b.changedTouches.length, e = [];
        for (c = 0; d > c; c++)
            e.push({
                id: b.changedTouches[c].identifier,
                type: "touch"
            });
        lb(a, b, e)
    }
    function U(a, b) {
        return b.stopPropagation(),
        b.preventDefault(),
        !1
    }
    function V(a, b) {
        return b.stopPropagation(),
        b.preventDefault(),
        !1
    }
    function W(b, c) {
        var d;
        c.currentTarget === c.relatedTarget || w(c.currentTarget, c.relatedTarget) || (d = {
            id: c.pointerId,
            type: h(c),
            isPrimary: c.isPrimary,
            currentPos: i(c),
            currentTime: a.now()
        },
        gb(b, c, [d]))
    }
    function X(b, c) {
        var d;
        c.currentTarget === c.relatedTarget || w(c.currentTarget, c.relatedTarget) || (d = {
            id: c.pointerId,
            type: h(c),
            isPrimary: c.isPrimary,
            currentPos: i(c),
            currentTime: a.now()
        },
        hb(b, c, [d]))
    }
    function Y(b, c) {
        var d;
        d = {
            id: c.pointerId,
            type: h(c),
            isPrimary: c.isPrimary,
            currentPos: i(c),
            currentTime: a.now()
        },
        ib(b, c, [d], c.button) && (a.stopEvent(c),
        f(b, d.type)),
        (b.clickHandler || b.dblClickHandler || b.pressHandler || b.dragHandler || b.dragEndHandler || b.pinchHandler) && a.cancelEvent(c)
    }
    function Z(a, b) {
        _(a, b)
    }
    function $(b, c) {
        var d = b.getActivePointersListByType(h(c));
        d.getById(c.pointerId) && _(b, c),
        a.stopEvent(c)
    }
    function _(b, c) {
        var d;
        d = {
            id: c.pointerId,
            type: h(c),
            isPrimary: c.isPrimary,
            currentPos: i(c),
            currentTime: a.now()
        },
        jb(b, c, [d], c.button) && g(b, d.type)
    }
    function ab(a, b) {
        cb(a, b)
    }
    function bb(b, c) {
        var d = b.getActivePointersListByType(h(c));
        d.getById(c.pointerId) && cb(b, c),
        a.stopEvent(c)
    }
    function cb(b, c) {
        var d;
        d = {
            id: c.pointerId,
            type: h(c),
            isPrimary: c.isPrimary,
            currentPos: i(c),
            currentTime: a.now()
        },
        kb(b, c, [d])
    }
    function db(a, b) {
        var c;
        c = {
            id: b.pointerId,
            type: h(b)
        },
        lb(a, b, [c])
    }
    function eb(a, b) {
        return b.hasOwnProperty("isPrimary") || (b.isPrimary = 0 === a.getLength() ? !0 : !1),
        b.speed = 0,
        b.direction = 0,
        b.contactPos = b.currentPos,
        b.contactTime = b.currentTime,
        b.lastPos = b.currentPos,
        b.lastTime = b.currentTime,
        a.add(b)
    }
    function fb(a, b) {
        var c, d;
        return a.getById(b.id) ? (c = a.removeById(b.id),
        b.hasOwnProperty("isPrimary") || (d = a.getPrimary(),
        d || (d = a.getByIndex(0),
        d && (d.isPrimary = !0)))) : c = a.getLength(),
        c
    }
    function gb(b, c, d) {
        var e, f, g, h, i = b.getActivePointersListByType(d[0].type), j = d.length;
        for (e = 0; j > e; e++)
            f = d[e],
            g = i.getById(f.id),
            g ? (g.insideElement = !0,
            g.lastPos = g.currentPos,
            g.lastTime = g.currentTime,
            g.currentPos = f.currentPos,
            g.currentTime = f.currentTime,
            f = g) : (f.captured = !1,
            f.insideElementPressed = !1,
            f.insideElement = !0,
            eb(i, f)),
            b.enterHandler && (h = b.enterHandler({
                eventSource: b,
                pointerType: f.type,
                position: k(f.currentPos, b.element),
                buttons: i.buttons,
                pointers: b.getActivePointerCount(),
                insideElementPressed: f.insideElementPressed,
                buttonDownAny: 0 !== i.buttons,
                isTouchEvent: "touch" === f.type,
                originalEvent: c,
                preventDefaultAction: !1,
                userData: b.userData
            }),
            h === !1 && a.cancelEvent(c))
    }
    function hb(b, c, d) {
        var e, f, g, h, i = (ob[b.hash],
        b.getActivePointersListByType(d[0].type)), j = d.length;
        for (e = 0; j > e; e++)
            f = d[e],
            g = i.getById(f.id),
            g && (g.captured ? (g.insideElement = !1,
            g.lastPos = g.currentPos,
            g.lastTime = g.currentTime,
            g.currentPos = f.currentPos,
            g.currentTime = f.currentTime) : fb(i, g),
            f = g),
            b.exitHandler && (h = b.exitHandler({
                eventSource: b,
                pointerType: f.type,
                position: k(f.currentPos, b.element),
                buttons: i.buttons,
                pointers: b.getActivePointerCount(),
                insideElementPressed: g ? g.insideElementPressed : !1,
                buttonDownAny: 0 !== i.buttons,
                isTouchEvent: "touch" === f.type,
                originalEvent: c,
                preventDefaultAction: !1,
                userData: b.userData
            }),
            h === !1 && a.cancelEvent(c))
    }
    function ib(b, c, d, e) {
        var f, g, h, i, j = ob[b.hash], m = b.getActivePointersListByType(d[0].type), n = d.length;
        if ("undefined" != typeof c.buttons ? m.buttons = c.buttons : a.Browser.vendor === a.BROWSERS.IE && a.Browser.version < 9 ? 0 === e ? m.buttons += 1 : 1 === e ? m.buttons += 4 : 2 === e ? m.buttons += 2 : 3 === e ? m.buttons += 8 : 4 === e ? m.buttons += 16 : 5 === e && (m.buttons += 32) : 0 === e ? m.buttons |= 1 : 1 === e ? m.buttons |= 4 : 2 === e ? m.buttons |= 2 : 3 === e ? m.buttons |= 8 : 4 === e ? m.buttons |= 16 : 5 === e && (m.buttons |= 32),
        0 !== e)
            return b.nonPrimaryPressHandler && (f = b.nonPrimaryPressHandler({
                eventSource: b,
                pointerType: d[0].type,
                position: k(d[0].currentPos, b.element),
                button: e,
                buttons: m.buttons,
                isTouchEvent: "touch" === d[0].type,
                originalEvent: c,
                preventDefaultAction: !1,
                userData: b.userData
            }),
            f === !1 && a.cancelEvent(c)),
            !1;
        for (g = 0; n > g; g++)
            h = d[g],
            i = m.getById(h.id),
            i ? (i.captured = !0,
            i.insideElementPressed = !0,
            i.insideElement = !0,
            i.contactPos = h.currentPos,
            i.contactTime = h.currentTime,
            i.lastPos = i.currentPos,
            i.lastTime = i.currentTime,
            i.currentPos = h.currentPos,
            i.currentTime = h.currentTime,
            h = i) : (h.captured = !0,
            h.insideElementPressed = !0,
            h.insideElement = !0,
            eb(m, h)),
            m.contacts++,
            (b.dragHandler || b.dragEndHandler || b.pinchHandler) && a.MouseTracker.gesturePointVelocityTracker.addPoint(b, h),
            1 === m.contacts ? b.pressHandler && (f = b.pressHandler({
                eventSource: b,
                pointerType: h.type,
                position: k(h.contactPos, b.element),
                buttons: m.buttons,
                isTouchEvent: "touch" === h.type,
                originalEvent: c,
                preventDefaultAction: !1,
                userData: b.userData
            }),
            f === !1 && a.cancelEvent(c)) : 2 === m.contacts && b.pinchHandler && "touch" === h.type && (j.pinchGPoints = m.asArray(),
            j.lastPinchDist = j.currentPinchDist = j.pinchGPoints[0].currentPos.distanceTo(j.pinchGPoints[1].currentPos),
            j.lastPinchCenter = j.currentPinchCenter = l(j.pinchGPoints[0].currentPos, j.pinchGPoints[1].currentPos));
        return !0
    }
    function jb(b, c, d, e) {
        var f, g, h, i, j, m, n, o = ob[b.hash], p = b.getActivePointersListByType(d[0].type), q = d.length, r = !1, s = !1;
        if ("undefined" != typeof c.buttons ? p.buttons = c.buttons : a.Browser.vendor === a.BROWSERS.IE && a.Browser.version < 9 ? 0 === e ? p.buttons -= 1 : 1 === e ? p.buttons -= 4 : 2 === e ? p.buttons -= 2 : 3 === e ? p.buttons -= 8 : 4 === e ? p.buttons -= 16 : 5 === e && (p.buttons -= 32) : 0 === e ? p.buttons ^= -2 : 1 === e ? p.buttons ^= -5 : 2 === e ? p.buttons ^= -3 : 3 === e ? p.buttons ^= -9 : 4 === e ? p.buttons ^= -17 : 5 === e && (p.buttons ^= -33),
        0 !== e)
            return b.nonPrimaryReleaseHandler && (f = b.nonPrimaryReleaseHandler({
                eventSource: b,
                pointerType: d[0].type,
                position: k(d[0].currentPos, b.element),
                button: e,
                buttons: p.buttons,
                isTouchEvent: "touch" === d[0].type,
                originalEvent: c,
                preventDefaultAction: !1,
                userData: b.userData
            }),
            f === !1 && a.cancelEvent(c)),
            !1;
        for (i = 0; q > i; i++)
            j = d[i],
            m = p.getById(j.id),
            m && (m.captured && (m.captured = !1,
            r = !0,
            s = !0),
            m.lastPos = m.currentPos,
            m.lastTime = m.currentTime,
            m.currentPos = j.currentPos,
            m.currentTime = j.currentTime,
            m.insideElement || fb(p, m),
            g = m.currentPos,
            h = m.currentTime,
            s ? (p.contacts--,
            (b.dragHandler || b.dragEndHandler || b.pinchHandler) && a.MouseTracker.gesturePointVelocityTracker.removePoint(b, m),
            0 === p.contacts ? (b.releaseHandler && (f = b.releaseHandler({
                eventSource: b,
                pointerType: m.type,
                position: k(g, b.element),
                buttons: p.buttons,
                insideElementPressed: m.insideElementPressed,
                insideElementReleased: m.insideElement,
                isTouchEvent: "touch" === m.type,
                originalEvent: c,
                preventDefaultAction: !1,
                userData: b.userData
            }),
            f === !1 && a.cancelEvent(c)),
            b.dragEndHandler && !m.currentPos.equals(m.contactPos) && (f = b.dragEndHandler({
                eventSource: b,
                pointerType: m.type,
                position: k(m.currentPos, b.element),
                speed: m.speed,
                direction: m.direction,
                shift: c.shiftKey,
                isTouchEvent: "touch" === m.type,
                originalEvent: c,
                preventDefaultAction: !1,
                userData: b.userData
            }),
            f === !1 && a.cancelEvent(c)),
            (b.clickHandler || b.dblClickHandler) && m.insideElement && (n = h - m.contactTime <= b.clickTimeThreshold && m.contactPos.distanceTo(g) <= b.clickDistThreshold,
            b.clickHandler && (f = b.clickHandler({
                eventSource: b,
                pointerType: m.type,
                position: k(m.currentPos, b.element),
                quick: n,
                shift: c.shiftKey,
                isTouchEvent: "touch" === m.type,
                originalEvent: c,
                preventDefaultAction: !1,
                userData: b.userData
            }),
            f === !1 && a.cancelEvent(c)),
            b.dblClickHandler && n && (p.clicks++,
            1 === p.clicks ? (o.lastClickPos = g,
            o.dblClickTimeOut = setTimeout(function() {
                p.clicks = 0
            }, b.dblClickTimeThreshold)) : 2 === p.clicks && (clearTimeout(o.dblClickTimeOut),
            p.clicks = 0,
            o.lastClickPos.distanceTo(g) <= b.dblClickDistThreshold && (f = b.dblClickHandler({
                eventSource: b,
                pointerType: m.type,
                position: k(m.currentPos, b.element),
                shift: c.shiftKey,
                isTouchEvent: "touch" === m.type,
                originalEvent: c,
                preventDefaultAction: !1,
                userData: b.userData
            }),
            f === !1 && a.cancelEvent(c)),
            o.lastClickPos = null)))) : 2 === p.contacts && b.pinchHandler && "touch" === m.type && (o.pinchGPoints = p.asArray(),
            o.lastPinchDist = o.currentPinchDist = o.pinchGPoints[0].currentPos.distanceTo(o.pinchGPoints[1].currentPos),
            o.lastPinchCenter = o.currentPinchCenter = l(o.pinchGPoints[0].currentPos, o.pinchGPoints[1].currentPos))) : b.releaseHandler && (f = b.releaseHandler({
                eventSource: b,
                pointerType: m.type,
                position: k(g, b.element),
                buttons: p.buttons,
                insideElementPressed: m.insideElementPressed,
                insideElementReleased: m.insideElement,
                isTouchEvent: "touch" === m.type,
                originalEvent: c,
                preventDefaultAction: !1,
                userData: b.userData
            }),
            f === !1 && a.cancelEvent(c)));
        return r
    }
    function kb(b, c, d) {
        var e, f, g, h, i, j, m = ob[b.hash], n = b.getActivePointersListByType(d[0].type), o = d.length;
        for ("undefined" != typeof c.buttons && (n.buttons = c.buttons),
        e = 0; o > e; e++)
            f = d[e],
            g = n.getById(f.id),
            g ? (f.hasOwnProperty("isPrimary") && (g.isPrimary = f.isPrimary),
            g.lastPos = g.currentPos,
            g.lastTime = g.currentTime,
            g.currentPos = f.currentPos,
            g.currentTime = f.currentTime) : (f.captured = !1,
            f.insideElementPressed = !1,
            f.insideElement = !0,
            eb(n, f));
        b.stopHandler && "mouse" === d[0].type && (clearTimeout(b.stopTimeOut),
        b.stopTimeOut = setTimeout(function() {
            mb(b, c, d[0].type)
        }, b.stopDelay)),
        0 === n.contacts ? b.moveHandler && (j = b.moveHandler({
            eventSource: b,
            pointerType: d[0].type,
            position: k(d[0].currentPos, b.element),
            buttons: n.buttons,
            isTouchEvent: "touch" === d[0].type,
            originalEvent: c,
            preventDefaultAction: !1,
            userData: b.userData
        }),
        j === !1 && a.cancelEvent(c)) : 1 === n.contacts ? (b.moveHandler && (g = n.asArray()[0],
        j = b.moveHandler({
            eventSource: b,
            pointerType: g.type,
            position: k(g.currentPos, b.element),
            buttons: n.buttons,
            isTouchEvent: "touch" === g.type,
            originalEvent: c,
            preventDefaultAction: !1,
            userData: b.userData
        }),
        j === !1 && a.cancelEvent(c)),
        b.dragHandler && (g = n.asArray()[0],
        i = g.currentPos.minus(g.lastPos),
        j = b.dragHandler({
            eventSource: b,
            pointerType: g.type,
            position: k(g.currentPos, b.element),
            buttons: n.buttons,
            delta: i,
            speed: g.speed,
            direction: g.direction,
            shift: c.shiftKey,
            isTouchEvent: "touch" === g.type,
            originalEvent: c,
            preventDefaultAction: !1,
            userData: b.userData
        }),
        j === !1 && a.cancelEvent(c))) : 2 === n.contacts && (b.moveHandler && (h = n.asArray(),
        j = b.moveHandler({
            eventSource: b,
            pointerType: h[0].type,
            position: k(l(h[0].currentPos, h[1].currentPos), b.element),
            buttons: n.buttons,
            isTouchEvent: "touch" === h[0].type,
            originalEvent: c,
            preventDefaultAction: !1,
            userData: b.userData
        }),
        j === !1 && a.cancelEvent(c)),
        b.pinchHandler && "touch" === d[0].type && (i = m.pinchGPoints[0].currentPos.distanceTo(m.pinchGPoints[1].currentPos),
        i != m.currentPinchDist && (m.lastPinchDist = m.currentPinchDist,
        m.currentPinchDist = i,
        m.lastPinchCenter = m.currentPinchCenter,
        m.currentPinchCenter = l(m.pinchGPoints[0].currentPos, m.pinchGPoints[1].currentPos),
        j = b.pinchHandler({
            eventSource: b,
            pointerType: "touch",
            gesturePoints: m.pinchGPoints,
            lastCenter: k(m.lastPinchCenter, b.element),
            center: k(m.currentPinchCenter, b.element),
            lastDistance: m.lastPinchDist,
            distance: m.currentPinchDist,
            shift: c.shiftKey,
            originalEvent: c,
            preventDefaultAction: !1,
            userData: b.userData
        }),
        j === !1 && a.cancelEvent(c))))
    }
    function lb(a, b, c) {
        jb(a, b, c, 0),
        hb(a, b, c)
    }
    function mb(a, b, c) {
        a.stopHandler && a.stopHandler({
            eventSource: a,
            pointerType: c,
            position: j(b, a.element),
            buttons: a.getActivePointersListByType(c).buttons,
            isTouchEvent: "touch" === c,
            originalEvent: b,
            preventDefaultAction: !1,
            userData: a.userData
        })
    }
    var nb = []
      , ob = {};
    a.MouseTracker = function(b) {
        nb.push(this);
        var c = arguments;
        a.isPlainObject(b) || (b = {
            element: c[0],
            clickTimeThreshold: c[1],
            clickDistThreshold: c[2]
        }),
        this.hash = Math.random(),
        this.element = a.getElement(b.element),
        this.clickTimeThreshold = b.clickTimeThreshold || a.DEFAULT_SETTINGS.clickTimeThreshold,
        this.clickDistThreshold = b.clickDistThreshold || a.DEFAULT_SETTINGS.clickDistThreshold,
        this.dblClickTimeThreshold = b.dblClickTimeThreshold || a.DEFAULT_SETTINGS.dblClickTimeThreshold,
        this.dblClickDistThreshold = b.dblClickDistThreshold || a.DEFAULT_SETTINGS.dblClickDistThreshold,
        this.userData = b.userData || null,
        this.stopDelay = b.stopDelay || 50,
        this.enterHandler = b.enterHandler || null,
        this.exitHandler = b.exitHandler || null,
        this.pressHandler = b.pressHandler || null,
        this.nonPrimaryPressHandler = b.nonPrimaryPressHandler || null,
        this.releaseHandler = b.releaseHandler || null,
        this.nonPrimaryReleaseHandler = b.nonPrimaryReleaseHandler || null,
        this.moveHandler = b.moveHandler || null,
        this.scrollHandler = b.scrollHandler || null,
        this.clickHandler = b.clickHandler || null,
        this.dblClickHandler = b.dblClickHandler || null,
        this.dragHandler = b.dragHandler || null,
        this.dragEndHandler = b.dragEndHandler || null,
        this.pinchHandler = b.pinchHandler || null,
        this.stopHandler = b.stopHandler || null,
        this.keyDownHandler = b.keyDownHandler || null,
        this.keyUpHandler = b.keyUpHandler || null,
        this.keyHandler = b.keyHandler || null,
        this.focusHandler = b.focusHandler || null,
        this.blurHandler = b.blurHandler || null;
        var d = this;
        ob[this.hash] = {
            click: function(a) {
                m(d, a)
            },
            dblclick: function(a) {
                n(d, a)
            },
            keydown: function(a) {
                o(d, a)
            },
            keyup: function(a) {
                p(d, a)
            },
            keypress: function(a) {
                q(d, a)
            },
            focus: function(a) {
                r(d, a)
            },
            blur: function(a) {
                s(d, a)
            },
            wheel: function(a) {
                t(d, a)
            },
            mousewheel: function(a) {
                u(d, a)
            },
            DOMMouseScroll: function(a) {
                u(d, a)
            },
            MozMousePixelScroll: function(a) {
                u(d, a)
            },
            mouseenter: function(a) {
                x(d, a)
            },
            mouseleave: function(a) {
                A(d, a)
            },
            mouseover: function(a) {
                y(d, a)
            },
            mouseout: function(a) {
                B(d, a)
            },
            mousedown: function(a) {
                E(d, a)
            },
            mouseup: function(a) {
                F(d, a)
            },
            mouseupcaptured: function(a) {
                G(d, a)
            },
            mousemove: function(a) {
                I(d, a)
            },
            mousemovecaptured: function(a) {
                J(d, a)
            },
            touchstart: function(a) {
                M(d, a)
            },
            touchend: function(a) {
                N(d, a)
            },
            touchendcaptured: function(a) {
                O(d, a)
            },
            touchmove: function(a) {
                Q(d, a)
            },
            touchmovecaptured: function(a) {
                R(d, a)
            },
            touchcancel: function(a) {
                T(d, a)
            },
            gesturestart: function(a) {
                U(d, a)
            },
            gesturechange: function(a) {
                V(d, a)
            },
            pointerover: function(a) {
                W(d, a)
            },
            MSPointerOver: function(a) {
                W(d, a)
            },
            pointerout: function(a) {
                X(d, a)
            },
            MSPointerOut: function(a) {
                X(d, a)
            },
            pointerdown: function(a) {
                Y(d, a)
            },
            MSPointerDown: function(a) {
                Y(d, a)
            },
            pointerup: function(a) {
                Z(d, a)
            },
            MSPointerUp: function(a) {
                Z(d, a)
            },
            pointermove: function(a) {
                ab(d, a)
            },
            MSPointerMove: function(a) {
                ab(d, a)
            },
            pointercancel: function(a) {
                db(d, a)
            },
            MSPointerCancel: function(a) {
                db(d, a)
            },
            pointerupcaptured: function(a) {
                $(d, a)
            },
            pointermovecaptured: function(a) {
                bb(d, a)
            },
            tracking: !1,
            activePointersLists: [],
            lastClickPos: null,
            dblClickTimeOut: null,
            pinchGPoints: [],
            lastPinchDist: 0,
            currentPinchDist: 0,
            lastPinchCenter: null,
            currentPinchCenter: null
        },
        b.startDisabled || this.setTracking(!0)
    }
    ,
    a.MouseTracker.prototype = {
        destroy: function() {
            var a;
            for (d(this),
            this.element = null,
            a = 0; a < nb.length; a++)
                if (nb[a] === this) {
                    nb.splice(a, 1);
                    break
                }
            ob[this.hash] = null,
            delete ob[this.hash]
        },
        isTracking: function() {
            return ob[this.hash].tracking
        },
        setTracking: function(a) {
            return a ? c(this) : d(this),
            this
        },
        getActivePointersListByType: function(b) {
            var c, d, e = ob[this.hash], f = e.activePointersLists.length;
            for (c = 0; f > c; c++)
                if (e.activePointersLists[c].type === b)
                    return e.activePointersLists[c];
            return d = new a.MouseTracker.GesturePointList(b),
            e.activePointersLists.push(d),
            d
        },
        getActivePointerCount: function() {
            var a, b = ob[this.hash], c = b.activePointersLists.length, d = 0;
            for (a = 0; c > a; a++)
                d += b.activePointersLists[a].getLength();
            return d
        },
        enterHandler: function() {},
        exitHandler: function() {},
        pressHandler: function() {},
        nonPrimaryPressHandler: function() {},
        releaseHandler: function() {},
        nonPrimaryReleaseHandler: function() {},
        moveHandler: function() {},
        scrollHandler: function() {},
        clickHandler: function() {},
        dblClickHandler: function() {},
        dragHandler: function() {},
        dragEndHandler: function() {},
        pinchHandler: function() {},
        stopHandler: function() {},
        keyDownHandler: function() {},
        keyUpHandler: function() {},
        keyHandler: function() {},
        focusHandler: function() {},
        blurHandler: function() {}
    },
    a.MouseTracker.gesturePointVelocityTracker = function() {
        var b = []
          , c = 0
          , d = 0
          , e = function(a, b) {
            return a.hash.toString() + b.type + b.id.toString()
        }
          , f = function() {
            var c, e, f, g, h, i, j = b.length, k = a.now();
            for (g = k - d,
            d = k,
            c = 0; j > c; c++)
                e = b[c],
                f = e.gPoint,
                f.direction = Math.atan2(f.currentPos.y - e.lastPos.y, f.currentPos.x - e.lastPos.x),
                h = e.lastPos.distanceTo(f.currentPos),
                e.lastPos = f.currentPos,
                i = 1e3 * h / (g + 1),
                f.speed = .75 * i + .25 * f.speed
        }
          , g = function(g, h) {
            var i = e(g, h);
            b.push({
                guid: i,
                gPoint: h,
                lastPos: h.currentPos
            }),
            1 === b.length && (d = a.now(),
            c = window.setInterval(f, 50))
        }
          , h = function(a, d) {
            var f, g = e(a, d), h = b.length;
            for (f = 0; h > f; f++)
                if (b[f].guid === g) {
                    b.splice(f, 1),
                    h--,
                    0 === h && window.clearInterval(c);
                    break
                }
        };
        return {
            addPoint: g,
            removePoint: h
        }
    }(),
    a.MouseTracker.captureElement = document,
    a.MouseTracker.wheelEventName = a.Browser.vendor == a.BROWSERS.IE && a.Browser.version > 8 || "onwheel"in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
    a.MouseTracker.supportsMouseCapture = function() {
        var b = document.createElement("div");
        return a.isFunction(b.setCapture) && a.isFunction(b.releaseCapture)
    }(),
    a.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", a.MouseTracker.wheelEventName],
    "DOMMouseScroll" == a.MouseTracker.wheelEventName && a.MouseTracker.subscribeEvents.push("MozMousePixelScroll"),
    window.PointerEvent && (window.navigator.pointerEnabled || a.Browser.vendor !== a.BROWSERS.IE) ? (a.MouseTracker.havePointerEvents = !0,
    a.MouseTracker.subscribeEvents.push("pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"),
    a.MouseTracker.unprefixedPointerEvents = !0,
    a.MouseTracker.maxTouchPoints = navigator.maxTouchPoints ? navigator.maxTouchPoints : 0,
    a.MouseTracker.haveMouseEnter = !1) : window.MSPointerEvent && window.navigator.msPointerEnabled ? (a.MouseTracker.havePointerEvents = !0,
    a.MouseTracker.subscribeEvents.push("MSPointerOver", "MSPointerOut", "MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"),
    a.MouseTracker.unprefixedPointerEvents = !1,
    a.MouseTracker.maxTouchPoints = navigator.msMaxTouchPoints ? navigator.msMaxTouchPoints : 0,
    a.MouseTracker.haveMouseEnter = !1) : (a.MouseTracker.havePointerEvents = !1,
    a.Browser.vendor === a.BROWSERS.IE && a.Browser.version < 9 ? (a.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave"),
    a.MouseTracker.haveMouseEnter = !0) : (a.MouseTracker.subscribeEvents.push("mouseover", "mouseout"),
    a.MouseTracker.haveMouseEnter = !1),
    a.MouseTracker.subscribeEvents.push("mousedown", "mouseup", "mousemove"),
    "ontouchstart"in window && a.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"),
    "ongesturestart"in window && a.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange"),
    a.MouseTracker.mousePointerId = "legacy-mouse",
    a.MouseTracker.maxTouchPoints = 10),
    a.MouseTracker.GesturePointList = function(a) {
        this._gPoints = [],
        this.type = a,
        this.buttons = 0,
        this.contacts = 0,
        this.clicks = 0,
        this.captureCount = 0
    }
    ,
    a.MouseTracker.GesturePointList.prototype = {
        getLength: function() {
            return this._gPoints.length
        },
        asArray: function() {
            return this._gPoints
        },
        add: function(a) {
            return this._gPoints.push(a)
        },
        removeById: function(a) {
            var b, c = this._gPoints.length;
            for (b = 0; c > b; b++)
                if (this._gPoints[b].id === a) {
                    this._gPoints.splice(b, 1);
                    break
                }
            return this._gPoints.length
        },
        getByIndex: function(a) {
            return a < this._gPoints.length ? this._gPoints[a] : null
        },
        getById: function(a) {
            var b, c = this._gPoints.length;
            for (b = 0; c > b; b++)
                if (this._gPoints[b].id === a)
                    return this._gPoints[b];
            return null
        },
        getPrimary: function() {
            var a, b = this._gPoints.length;
            for (a = 0; b > a; a++)
                if (this._gPoints[a].isPrimary)
                    return this._gPoints[a];
            return null
        }
    }
}(OpenSeadragon),
function(a) {
    a.ControlAnchor = {
        NONE: 0,
        TOP_LEFT: 1,
        TOP_RIGHT: 2,
        BOTTOM_RIGHT: 3,
        BOTTOM_LEFT: 4,
        ABSOLUTE: 5
    },
    a.Control = function(b, c, d) {
        var e = b.parentNode;
        "number" == typeof c && (a.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"),
        c = {
            anchor: c
        }),
        c.attachToViewer = "undefined" == typeof c.attachToViewer ? !0 : c.attachToViewer,
        this.autoFade = "undefined" == typeof c.autoFade ? !0 : c.autoFade,
        this.element = b,
        this.anchor = c.anchor,
        this.container = d,
        this.anchor == a.ControlAnchor.ABSOLUTE ? (this.wrapper = a.makeNeutralElement("div"),
        this.wrapper.style.position = "absolute",
        this.wrapper.style.top = "number" == typeof c.top ? c.top + "px" : c.top,
        this.wrapper.style.left = "number" == typeof c.left ? c.left + "px" : c.left,
        this.wrapper.style.height = "number" == typeof c.height ? c.height + "px" : c.height,
        this.wrapper.style.width = "number" == typeof c.width ? c.width + "px" : c.width,
        this.wrapper.style.margin = "0px",
        this.wrapper.style.padding = "0px",
        this.element.style.position = "relative",
        this.element.style.top = "0px",
        this.element.style.left = "0px",
        this.element.style.height = "100%",
        this.element.style.width = "100%") : (this.wrapper = a.makeNeutralElement("div"),
        this.wrapper.style.display = "inline-block",
        this.anchor == a.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")),
        this.wrapper.appendChild(this.element),
        c.attachToViewer ? this.anchor == a.ControlAnchor.TOP_RIGHT || this.anchor == a.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(this.wrapper, this.container.firstChild) : this.container.appendChild(this.wrapper) : e.appendChild(this.wrapper)
    }
    ,
    a.Control.prototype = {
        destroy: function() {
            this.wrapper.removeChild(this.element),
            this.container.removeChild(this.wrapper)
        },
        isVisible: function() {
            return "none" != this.wrapper.style.display
        },
        setVisible: function(b) {
            this.wrapper.style.display = b ? this.anchor == a.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none"
        },
        setOpacity: function(b) {
            this.element[a.SIGNAL] && a.Browser.vendor == a.BROWSERS.IE ? a.setElementOpacity(this.element, b, !0) : a.setElementOpacity(this.wrapper, b, !0)
        }
    }
}(OpenSeadragon),
function(a) {
    function b(a, b) {
        var c, d = a.controls;
        for (c = d.length - 1; c >= 0; c--)
            if (d[c].element == b)
                return c;
        return -1
    }
    a.ControlDock = function(b) {
        var c, d, e = ["topleft", "topright", "bottomright", "bottomleft"];
        for (a.extend(!0, this, {
            id: "controldock-" + a.now() + "-" + Math.floor(1e6 * Math.random()),
            container: a.makeNeutralElement("div"),
            controls: []
        }, b),
        this.container.onsubmit = function() {
            return !1
        }
        ,
        this.element && (this.element = a.getElement(this.element),
        this.element.appendChild(this.container),
        this.element.style.position = "relative",
        this.container.style.width = "100%",
        this.container.style.height = "100%"),
        d = 0; d < e.length; d++)
            c = e[d],
            this.controls[c] = a.makeNeutralElement("div"),
            this.controls[c].style.position = "absolute",
            c.match("left") && (this.controls[c].style.left = "0px"),
            c.match("right") && (this.controls[c].style.right = "0px"),
            c.match("top") && (this.controls[c].style.top = "0px"),
            c.match("bottom") && (this.controls[c].style.bottom = "0px");
        this.container.appendChild(this.controls.topleft),
        this.container.appendChild(this.controls.topright),
        this.container.appendChild(this.controls.bottomright),
        this.container.appendChild(this.controls.bottomleft)
    }
    ,
    a.ControlDock.prototype = {
        addControl: function(c, d) {
            c = a.getElement(c);
            var e = null;
            if (!(b(this, c) >= 0)) {
                switch (d.anchor) {
                case a.ControlAnchor.TOP_RIGHT:
                    e = this.controls.topright,
                    c.style.position = "relative",
                    c.style.paddingRight = "0px",
                    c.style.paddingTop = "0px";
                    break;
                case a.ControlAnchor.BOTTOM_RIGHT:
                    e = this.controls.bottomright,
                    c.style.position = "relative",
                    c.style.paddingRight = "0px",
                    c.style.paddingBottom = "0px";
                    break;
                case a.ControlAnchor.BOTTOM_LEFT:
                    e = this.controls.bottomleft,
                    c.style.position = "relative",
                    c.style.paddingLeft = "0px",
                    c.style.paddingBottom = "0px";
                    break;
                case a.ControlAnchor.TOP_LEFT:
                    e = this.controls.topleft,
                    c.style.position = "relative",
                    c.style.paddingLeft = "0px",
                    c.style.paddingTop = "0px";
                    break;
                case a.ControlAnchor.ABSOLUTE:
                    e = this.container,
                    c.style.margin = "0px",
                    c.style.padding = "0px";
                    break;
                default:
                case a.ControlAnchor.NONE:
                    e = this.container,
                    c.style.margin = "0px",
                    c.style.padding = "0px"
                }
                this.controls.push(new a.Control(c,d,e)),
                c.style.display = "inline-block"
            }
        },
        removeControl: function(c) {
            c = a.getElement(c);
            var d = b(this, c);
            return d >= 0 && (this.controls[d].destroy(),
            this.controls.splice(d, 1)),
            this
        },
        clearControls: function() {
            for (; this.controls.length > 0; )
                this.controls.pop().destroy();
            return this
        },
        areControlsEnabled: function() {
            var a;
            for (a = this.controls.length - 1; a >= 0; a--)
                if (this.controls[a].isVisible())
                    return !0;
            return !1
        },
        setControlsEnabled: function(a) {
            var b;
            for (b = this.controls.length - 1; b >= 0; b--)
                this.controls[b].setVisible(a);
            return this
        }
    }
}(OpenSeadragon),
function($) {
    function _getSafeElemSize(a) {
        return a = $.getElement(a),
        new $.Point(0 === a.clientWidth ? 1 : a.clientWidth,0 === a.clientHeight ? 1 : a.clientHeight)
    }
    function getTileSourceImplementation(viewer, tileSource, successCallback, failCallback) {
        var _this = viewer;
        "string" == $.type(tileSource) && (tileSource.match(/\s*<.*/) ? tileSource = $.parseXml(tileSource) : tileSource.match(/\s*[\{\[].*/) && (tileSource = eval("(" + tileSource + ")"))),
        setTimeout(function() {
            if ("string" == $.type(tileSource))
                tileSource = new $.TileSource(tileSource,function(a) {
                    successCallback(a.tileSource)
                }
                ),
                tileSource.addHandler("open-failed", function(a) {
                    failCallback(a)
                });
            else if ($.isPlainObject(tileSource) || tileSource.nodeType)
                if ($.isFunction(tileSource.getTileUrl)) {
                    var a = new $.TileSource(tileSource);
                    a.getTileUrl = tileSource.getTileUrl,
                    successCallback(a)
                } else {
                    var b = $.TileSource.determineType(_this, tileSource);
                    if (!b)
                        return void failCallback({
                            message: "Unable to load TileSource",
                            source: tileSource
                        });
                    var c = b.prototype.configure.apply(_this, [tileSource])
                      , d = new b(c);
                    successCallback(d)
                }
            else
                successCallback(tileSource)
        }, 1)
    }
    function openTileSource(a, b) {
        var c, d = a;
        return d.source && d.close(),
        THIS[d.hash].prevContainerSize = _getSafeElemSize(d.container),
        d.collectionMode ? (d.source = new $.TileSourceCollection({
            rows: d.collectionRows,
            layout: d.collectionLayout,
            tileSize: d.collectionTileSize,
            tileSources: d.tileSources,
            tileMargin: d.collectionTileMargin
        }),
        d.viewport = d.viewport ? d.viewport : new $.Viewport({
            collectionMode: !0,
            collectionTileSource: d.source,
            containerSize: THIS[d.hash].prevContainerSize,
            contentSize: d.source.dimensions,
            springStiffness: d.springStiffness,
            animationTime: d.animationTime,
            showNavigator: !1,
            minZoomImageRatio: 1,
            maxZoomPixelRatio: 1,
            viewer: d,
            degrees: d.degrees
        })) : (b && (d.source = b),
        d.viewport = d.viewport ? d.viewport : new $.Viewport({
            containerSize: THIS[d.hash].prevContainerSize,
            contentSize: d.source.dimensions,
            springStiffness: d.springStiffness,
            animationTime: d.animationTime,
            minZoomImageRatio: d.minZoomImageRatio,
            maxZoomPixelRatio: d.maxZoomPixelRatio,
            visibilityRatio: d.visibilityRatio,
            wrapHorizontal: d.wrapHorizontal,
            wrapVertical: d.wrapVertical,
            defaultZoomLevel: d.defaultZoomLevel,
            minZoomLevel: d.minZoomLevel,
            maxZoomLevel: d.maxZoomLevel,
            viewer: d,
            degrees: d.degrees,
            navigatorRotate: d.navigatorRotate,
            homeFillsViewer: d.homeFillsViewer
        })),
        d.preserveViewport && d.viewport.resetContentSize(d.source.dimensions),
        d.preserveOverlays && (d.overlays = d.currentOverlays),
        d.source.overlays = d.source.overlays || [],
        d.drawer = new $.Drawer({
            viewer: d,
            source: d.source,
            viewport: d.viewport,
            element: d.drawersContainer,
            opacity: d.opacity,
            maxImageCacheCount: d.maxImageCacheCount,
            imageLoaderLimit: d.imageLoaderLimit,
            minZoomImageRatio: d.minZoomImageRatio,
            wrapHorizontal: d.wrapHorizontal,
            wrapVertical: d.wrapVertical,
            immediateRender: d.immediateRender,
            blendTime: d.blendTime,
            alwaysBlend: d.alwaysBlend,
            minPixelRatio: d.collectionMode ? 0 : d.minPixelRatio,
            timeout: d.timeout,
            debugMode: d.debugMode,
            debugGridColor: d.debugGridColor,
            crossOriginPolicy: d.crossOriginPolicy
        }),
        d.drawers = [d.drawer],
        d.drawer.canRotate() || (d.rotateLeft && (c = d.buttons.buttons.indexOf(d.rotateLeft),
        d.buttons.buttons.splice(c, 1),
        d.buttons.element.removeChild(d.rotateLeft.element)),
        d.rotateRight && (c = d.buttons.buttons.indexOf(d.rotateRight),
        d.buttons.buttons.splice(c, 1),
        d.buttons.element.removeChild(d.rotateRight.element))),
        d.showNavigator && !d.collectionMode && (d.navigator ? d.navigator.open(b) : d.navigator = new $.Navigator({
            id: d.navigatorId,
            position: d.navigatorPosition,
            sizeRatio: d.navigatorSizeRatio,
            maintainSizeRatio: d.navigatorMaintainSizeRatio,
            top: d.navigatorTop,
            left: d.navigatorLeft,
            width: d.navigatorWidth,
            height: d.navigatorHeight,
            autoResize: d.navigatorAutoResize,
            tileSources: b,
            tileHost: d.tileHost,
            prefixUrl: d.prefixUrl,
            viewer: d,
            navigatorRotate: d.navigatorRotate
        })),
        d.showReferenceStrip && !d.referenceStrip && (d.referenceStrip = new $.ReferenceStrip({
            id: d.referenceStripElement,
            position: d.referenceStripPosition,
            sizeRatio: d.referenceStripSizeRatio,
            scroll: d.referenceStripScroll,
            height: d.referenceStripHeight,
            width: d.referenceStripWidth,
            tileSources: d.tileSources,
            tileHost: d.tileHost,
            prefixUrl: d.prefixUrl,
            viewer: d
        })),
        THIS[d.hash].animating = !1,
        THIS[d.hash].forceRedraw = !0,
        d._updateRequestId = scheduleUpdate(d, updateMulti),
        VIEWERS[d.hash] = d,
        loadOverlays(d),
        d.raiseEvent("open", {
            source: b
        }),
        d
    }
    function loadOverlays(a) {
        a.currentOverlays = [];
        for (var b = 0; b < a.overlays.length; b++)
            a.currentOverlays[b] = getOverlayObject(a, a.overlays[b]);
        for (var c = 0; c < a.source.overlays.length; c++)
            a.currentOverlays[b + c] = getOverlayObject(a, a.source.overlays[c])
    }
    function getOverlayObject(a, b) {
        if (b instanceof $.Overlay)
            return b;
        var c = null;
        if (b.element)
            c = $.getElement(b.element);
        else {
            var d = b.id ? b.id : "openseadragon-overlay-" + Math.floor(1e7 * Math.random());
            c = $.getElement(b.id),
            c || (c = document.createElement("a"),
            c.href = "#/overlay/" + d),
            c.id = d,
            $.addClass(c, b.className ? b.className : "openseadragon-overlay")
        }
        var e = b.location;
        e || (e = b.width && b.height ? void 0 !== b.px ? a.viewport.imageToViewportRectangle(new $.Rect(b.px,b.py,b.width,b.height)) : new $.Rect(b.x,b.y,b.width,b.height) : void 0 !== b.px ? a.viewport.imageToViewportCoordinates(new $.Point(b.px,b.py)) : new $.Point(b.x,b.y));
        var f = b.placement;
        return f && "string" === $.type(f) && (f = $.OverlayPlacement[b.placement.toUpperCase()]),
        new $.Overlay({
            element: c,
            location: e,
            placement: f,
            onDraw: b.onDraw,
            checkResize: b.checkResize
        })
    }
    function getOverlayIndex(a, b) {
        var c;
        for (c = a.length - 1; c >= 0; c--)
            if (a[c].element === b)
                return c;
        return -1
    }
    function drawOverlays(a, b, c) {
        var d, e = b.length;
        for (d = 0; e > d; d++)
            b[d].drawHTML(c, a)
    }
    function scheduleUpdate(a, b) {
        return $.requestAnimationFrame(function() {
            b(a)
        })
    }
    function scheduleControlsFade(a) {
        $.requestAnimationFrame(function() {
            updateControlsFade(a)
        })
    }
    function beginControlsAutoHide(a) {
        a.autoHideControls && (a.controlsShouldFade = !0,
        a.controlsFadeBeginTime = $.now() + a.controlsFadeDelay,
        window.setTimeout(function() {
            scheduleControlsFade(a)
        }, a.controlsFadeDelay))
    }
    function updateControlsFade(a) {
        var b, c, d, e;
        if (a.controlsShouldFade) {
            for (b = $.now(),
            c = b - a.controlsFadeBeginTime,
            d = 1 - c / a.controlsFadeLength,
            d = Math.min(1, d),
            d = Math.max(0, d),
            e = a.controls.length - 1; e >= 0; e--)
                a.controls[e].autoFade && a.controls[e].setOpacity(d);
            d > 0 && scheduleControlsFade(a)
        }
    }
    function abortControlsAutoHide(a) {
        var b;
        for (a.controlsShouldFade = !1,
        b = a.controls.length - 1; b >= 0; b--)
            a.controls[b].setOpacity(1)
    }
    function onFocus() {
        abortControlsAutoHide(this)
    }
    function onBlur() {
        beginControlsAutoHide(this)
    }
    function onCanvasKeyDown(a) {
        if (a.preventDefaultAction || a.ctrl || a.alt || a.meta)
            return !0;
        switch (a.keyCode) {
        case 38:
            return a.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(new $.Point(0,-.05)),
            this.viewport.applyConstraints(),
            !1;
        case 40:
            return a.shift ? this.viewport.zoomBy(.9) : this.viewport.panBy(new $.Point(0,.05)),
            this.viewport.applyConstraints(),
            !1;
        case 37:
            return this.viewport.panBy(new $.Point(-.05,0)),
            this.viewport.applyConstraints(),
            !1;
        case 39:
            return this.viewport.panBy(new $.Point(.05,0)),
            this.viewport.applyConstraints(),
            !1;
        default:
            return !0
        }
    }
    function onCanvasKeyPress(a) {
        if (a.preventDefaultAction || a.ctrl || a.alt || a.meta)
            return !0;
        switch (a.keyCode) {
        case 61:
            return this.viewport.zoomBy(1.1),
            this.viewport.applyConstraints(),
            !1;
        case 45:
            return this.viewport.zoomBy(.9),
            this.viewport.applyConstraints(),
            !1;
        case 48:
            return this.viewport.goHome(),
            this.viewport.applyConstraints(),
            !1;
        case 119:
        case 87:
            return a.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(new $.Point(0,-.05)),
            this.viewport.applyConstraints(),
            !1;
        case 115:
        case 83:
            return a.shift ? this.viewport.zoomBy(.9) : this.viewport.panBy(new $.Point(0,.05)),
            this.viewport.applyConstraints(),
            !1;
        case 97:
            return this.viewport.panBy(new $.Point(-.05,0)),
            this.viewport.applyConstraints(),
            !1;
        case 100:
            return this.viewport.panBy(new $.Point(.05,0)),
            this.viewport.applyConstraints(),
            !1;
        default:
            return !0
        }
    }
    function onCanvasClick(a) {
        var b, c = document.activeElement == this.canvas;
        c || this.canvas.focus(),
        !a.preventDefaultAction && this.viewport && a.quick && (b = this.gestureSettingsByDeviceType(a.pointerType),
        b.clickToZoom && (this.viewport.zoomBy(a.shift ? 1 / this.zoomPerClick : this.zoomPerClick, this.viewport.pointFromPixel(a.position, !0)),
        this.viewport.applyConstraints())),
        this.raiseEvent("canvas-click", {
            tracker: a.eventSource,
            position: a.position,
            quick: a.quick,
            shift: a.shift,
            originalEvent: a.originalEvent
        })
    }
    function onCanvasDblClick(a) {
        var b;
        !a.preventDefaultAction && this.viewport && (b = this.gestureSettingsByDeviceType(a.pointerType),
        b.dblClickToZoom && (this.viewport.zoomBy(a.shift ? 1 / this.zoomPerClick : this.zoomPerClick, this.viewport.pointFromPixel(a.position, !0)),
        this.viewport.applyConstraints())),
        this.raiseEvent("canvas-double-click", {
            tracker: a.eventSource,
            position: a.position,
            shift: a.shift,
            originalEvent: a.originalEvent
        })
    }
    function onCanvasDrag(a) {
        var b;
        !a.preventDefaultAction && this.viewport && (b = this.gestureSettingsByDeviceType(a.pointerType),
        this.panHorizontal || (a.delta.x = 0),
        this.panVertical || (a.delta.y = 0),
        this.viewport.panBy(this.viewport.deltaPointsFromPixels(a.delta.negate()), b.flickEnabled),
        this.constrainDuringPan && this.viewport.applyConstraints()),
        this.raiseEvent("canvas-drag", {
            tracker: a.eventSource,
            position: a.position,
            delta: a.delta,
            speed: a.speed,
            direction: a.direction,
            shift: a.shift,
            originalEvent: a.originalEvent
        })
    }
    function onCanvasDragEnd(a) {
        var b;
        if (!a.preventDefaultAction && this.viewport) {
            if (b = this.gestureSettingsByDeviceType(a.pointerType),
            b.flickEnabled && a.speed >= b.flickMinSpeed) {
                var c = b.flickMomentum * a.speed * Math.cos(a.direction - Math.PI / 180 * this.viewport.degrees)
                  , d = b.flickMomentum * a.speed * Math.sin(a.direction - Math.PI / 180 * this.viewport.degrees)
                  , e = this.viewport.pixelFromPoint(this.viewport.getCenter(!0))
                  , f = this.viewport.pointFromPixel(new $.Point(e.x - c,e.y - d));
                this.panHorizontal || (f.x = e.x),
                this.panVertical || (f.y = e.y),
                this.viewport.panTo(f, !1)
            }
            this.viewport.applyConstraints()
        }
        this.raiseEvent("canvas-drag-end", {
            tracker: a.eventSource,
            position: a.position,
            speed: a.speed,
            direction: a.direction,
            shift: a.shift,
            originalEvent: a.originalEvent
        })
    }
    function onCanvasEnter(a) {
        this.raiseEvent("canvas-enter", {
            tracker: a.eventSource,
            pointerType: a.pointerType,
            position: a.position,
            buttons: a.buttons,
            pointers: a.pointers,
            insideElementPressed: a.insideElementPressed,
            buttonDownAny: a.buttonDownAny,
            originalEvent: a.originalEvent
        })
    }
    function onCanvasExit(a) {
        this.raiseEvent("canvas-exit", {
            tracker: a.eventSource,
            pointerType: a.pointerType,
            position: a.position,
            buttons: a.buttons,
            pointers: a.pointers,
            insideElementPressed: a.insideElementPressed,
            buttonDownAny: a.buttonDownAny,
            originalEvent: a.originalEvent
        })
    }
    function onCanvasPress(a) {
        this.raiseEvent("canvas-press", {
            tracker: a.eventSource,
            pointerType: a.pointerType,
            position: a.position,
            insideElementPressed: a.insideElementPressed,
            insideElementReleased: a.insideElementReleased,
            originalEvent: a.originalEvent
        })
    }
    function onCanvasRelease(a) {
        this.raiseEvent("canvas-release", {
            tracker: a.eventSource,
            pointerType: a.pointerType,
            position: a.position,
            insideElementPressed: a.insideElementPressed,
            insideElementReleased: a.insideElementReleased,
            originalEvent: a.originalEvent
        })
    }
    function onCanvasNonPrimaryPress(a) {
        this.raiseEvent("canvas-nonprimary-press", {
            tracker: a.eventSource,
            position: a.position,
            pointerType: a.pointerType,
            button: a.button,
            buttons: a.buttons,
            originalEvent: a.originalEvent
        })
    }
    function onCanvasNonPrimaryRelease(a) {
        this.raiseEvent("canvas-nonprimary-release", {
            tracker: a.eventSource,
            position: a.position,
            pointerType: a.pointerType,
            button: a.button,
            buttons: a.buttons,
            originalEvent: a.originalEvent
        })
    }
    function onCanvasPinch(a) {
        var b, c, d, e;
        if (!a.preventDefaultAction && this.viewport && (b = this.gestureSettingsByDeviceType(a.pointerType),
        b.pinchToZoom && (c = this.viewport.pointFromPixel(a.center, !0),
        d = this.viewport.pointFromPixel(a.lastCenter, !0),
        e = d.minus(c),
        this.panHorizontal || (e.x = 0),
        this.panVertical || (e.y = 0),
        this.viewport.zoomBy(a.distance / a.lastDistance, c, !0),
        this.viewport.panBy(e, !0),
        this.viewport.applyConstraints()),
        b.pinchRotate)) {
            var f = Math.atan2(a.gesturePoints[0].currentPos.y - a.gesturePoints[1].currentPos.y, a.gesturePoints[0].currentPos.x - a.gesturePoints[1].currentPos.x)
              , g = Math.atan2(a.gesturePoints[0].lastPos.y - a.gesturePoints[1].lastPos.y, a.gesturePoints[0].lastPos.x - a.gesturePoints[1].lastPos.x);
            this.viewport.setRotation(this.viewport.getRotation() + (f - g) * (180 / Math.PI))
        }
        return this.raiseEvent("canvas-pinch", {
            tracker: a.eventSource,
            gesturePoints: a.gesturePoints,
            lastCenter: a.lastCenter,
            center: a.center,
            lastDistance: a.lastDistance,
            distance: a.distance,
            shift: a.shift,
            originalEvent: a.originalEvent
        }),
        !1
    }
    function onCanvasScroll(a) {
        var b, c;
        return !a.preventDefaultAction && this.viewport && (b = this.gestureSettingsByDeviceType(a.pointerType),
        b.scrollToZoom && (c = Math.pow(this.zoomPerScroll, a.scroll),
        this.viewport.zoomBy(c, this.viewport.pointFromPixel(a.position, !0)),
        this.viewport.applyConstraints())),
        this.raiseEvent("canvas-scroll", {
            tracker: a.eventSource,
            position: a.position,
            scroll: a.scroll,
            shift: a.shift,
            originalEvent: a.originalEvent
        }),
        !1
    }
    function onContainerEnter(a) {
        THIS[this.hash].mouseInside = !0,
        abortControlsAutoHide(this),
        this.raiseEvent("container-enter", {
            tracker: a.eventSource,
            position: a.position,
            buttons: a.buttons,
            pointers: a.pointers,
            insideElementPressed: a.insideElementPressed,
            buttonDownAny: a.buttonDownAny,
            originalEvent: a.originalEvent
        })
    }
    function onContainerExit(a) {
        a.pointers < 1 && (THIS[this.hash].mouseInside = !1,
        THIS[this.hash].animating || beginControlsAutoHide(this)),
        this.raiseEvent("container-exit", {
            tracker: a.eventSource,
            position: a.position,
            buttons: a.buttons,
            pointers: a.pointers,
            insideElementPressed: a.insideElementPressed,
            buttonDownAny: a.buttonDownAny,
            originalEvent: a.originalEvent
        })
    }
    function updateMulti(a) {
        return a.source ? (updateOnce(a),
        void (a.source && (a._updateRequestId = scheduleUpdate(a, updateMulti)))) : void (a._updateRequestId = null)
    }
    function updateOnce(a) {
        var b, c;
        if (a.source) {
            if (a.autoResize && (b = _getSafeElemSize(a.container),
            !b.equals(THIS[a.hash].prevContainerSize))) {
                var d = a.viewport.getBounds()
                  , e = a.viewport.getCenter();
                resizeViewportAndRecenter(a, b, d, e),
                THIS[a.hash].prevContainerSize = b,
                THIS[a.hash].forceRedraw = !0
            }
            c = a.viewport.update(),
            a.referenceStrip && (c = a.referenceStrip.update(a.viewport) || c),
            !THIS[a.hash].animating && c && (a.raiseEvent("animation-start"),
            abortControlsAutoHide(a)),
            c ? (updateDrawers(a),
            drawOverlays(a.viewport, a.currentOverlays, a.overlaysContainer),
            a.navigator && a.navigator.update(a.viewport),
            a.raiseEvent("animation")) : (THIS[a.hash].forceRedraw || drawersNeedUpdate(a)) && (updateDrawers(a),
            drawOverlays(a.viewport, a.currentOverlays, a.overlaysContainer),
            a.navigator && a.navigator.update(a.viewport),
            THIS[a.hash].forceRedraw = !1),
            THIS[a.hash].animating && !c && (a.raiseEvent("animation-finish"),
            THIS[a.hash].mouseInside || beginControlsAutoHide(a)),
            THIS[a.hash].animating = c
        }
    }
    function resizeViewportAndRecenter(a, b, c, d) {
        var e = a.viewport;
        e.resize(b, !0);
        var f = 1 / a.source.aspectRatio
          , g = c.width <= 1 ? c.width : 1
          , h = c.height <= f ? c.height : f
          , i = new $.Rect(d.x - g / 2,d.y - h / 2,g,h);
        e.fitBounds(i, !0)
    }
    function updateDrawers(a) {
        for (var b = 0; b < a.drawers.length; b++)
            a.drawers[b].update()
    }
    function drawersNeedUpdate(a) {
        for (var b = 0; b < a.drawers.length; b++)
            if (a.drawers[b].needsUpdate())
                return !0;
        return !1
    }
    function resolveUrl(a, b) {
        return a ? a + b : b
    }
    function beginZoomingIn() {
        THIS[this.hash].lastZoomTime = $.now(),
        THIS[this.hash].zoomFactor = this.zoomPerSecond,
        THIS[this.hash].zooming = !0,
        scheduleZoom(this)
    }
    function beginZoomingOut() {
        THIS[this.hash].lastZoomTime = $.now(),
        THIS[this.hash].zoomFactor = 1 / this.zoomPerSecond,
        THIS[this.hash].zooming = !0,
        scheduleZoom(this)
    }
    function endZooming() {
        THIS[this.hash].zooming = !1
    }
    function scheduleZoom(a) {
        $.requestAnimationFrame($.delegate(a, doZoom))
    }
    function doZoom() {
        var a, b, c;
        THIS[this.hash].zooming && this.viewport && (a = $.now(),
        b = a - THIS[this.hash].lastZoomTime,
        c = Math.pow(THIS[this.hash].zoomFactor, b / 1e3),
        this.viewport.zoomBy(c),
        this.viewport.applyConstraints(),
        THIS[this.hash].lastZoomTime = a,
        scheduleZoom(this))
    }
    function doSingleZoomIn() {
        this.viewport && (THIS[this.hash].zooming = !1,
        this.viewport.zoomBy(this.zoomPerClick / 1),
        this.viewport.applyConstraints())
    }
    function doSingleZoomOut() {
        this.viewport && (THIS[this.hash].zooming = !1,
        this.viewport.zoomBy(1 / this.zoomPerClick),
        this.viewport.applyConstraints())
    }
    function lightUp() {
        this.buttons.emulateEnter(),
        this.buttons.emulateExit()
    }
    function onHome() {
        this.viewport && this.viewport.goHome()
    }
    function onFullScreen() {
        this.isFullPage() && !$.isFullScreen() ? this.setFullPage(!1) : this.setFullScreen(!this.isFullPage()),
        this.buttons && this.buttons.emulateExit(),
        this.fullPageButton.element.focus(),
        this.viewport && this.viewport.applyConstraints()
    }
    function onRotateLeft() {
        if (this.viewport) {
            var a = this.viewport.getRotation();
            0 === a ? a = 270 : a -= 90,
            this.viewport.setRotation(a)
        }
    }
    function onRotateRight() {
        if (this.viewport) {
            var a = this.viewport.getRotation();
            270 === a ? a = 0 : a += 90,
            this.viewport.setRotation(a)
        }
    }
    function onPrevious() {
        var a = THIS[this.hash].sequence - 1;
        this.navPrevNextWrap && 0 > a && (a += this.tileSources.length),
        this.goToPage(a)
    }
    function onNext() {
        var a = THIS[this.hash].sequence + 1;
        this.navPrevNextWrap && a >= this.tileSources.length && (a = 0),
        this.goToPage(a)
    }
    var THIS = {}
      , VIEWERS = {};
    $.Viewer = function(a) {
        var b, c = arguments, d = this;
        if ($.isPlainObject(a) || (a = {
            id: c[0],
            xmlPath: c.length > 1 ? c[1] : void 0,
            prefixUrl: c.length > 2 ? c[2] : void 0,
            controls: c.length > 3 ? c[3] : void 0,
            overlays: c.length > 4 ? c[4] : void 0
        }),
        a.config && ($.extend(!0, a, a.config),
        delete a.config),
        $.extend(!0, this, {
            id: a.id,
            hash: a.hash || a.id,
            element: null,
            container: null,
            canvas: null,
            overlays: [],
            overlaysContainer: null,
            previousBody: [],
            customControls: [],
            source: null,
            drawer: null,
            drawers: [],
            drawersContainer: null,
            viewport: null,
            navigator: null,
            collectionViewport: null,
            collectionDrawer: null,
            navImages: null,
            buttons: null,
            profiler: null
        }, $.DEFAULT_SETTINGS, a),
        "undefined" == typeof this.hash)
            throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
        "undefined" != typeof THIS[this.hash] && $.console.warn("Hash " + this.hash + " has already been used."),
        THIS[this.hash] = {
            fsBoundsDelta: new $.Point(1,1),
            prevContainerSize: null,
            animating: !1,
            forceRedraw: !1,
            mouseInside: !1,
            group: null,
            zooming: !1,
            zoomFactor: null,
            lastZoomTime: null,
            sequenced: !1,
            sequence: 0,
            fullPage: !1,
            onfullscreenchange: null
        },
        this._updateRequestId = null,
        this.currentOverlays = [],
        $.EventSource.call(this),
        this.addHandler("open-failed", function(a) {
            var b = $.getString("Errors.OpenFailed", a.eventSource, a.message);
            d._showMessage(b)
        }),
        $.ControlDock.call(this, a);
        var e;
        for (this.xmlPath && (this.tileSources = [this.xmlPath]),
        this.tileSources && ($.isArray(this.tileSources) ? (this.tileSources.length > 1 && (THIS[this.hash].sequenced = !0),
        this.initialPage > this.tileSources.length - 1 && (this.initialPage = this.tileSources.length - 1),
        e = this.tileSources[this.initialPage],
        THIS[this.hash].sequence = this.initialPage) : e = this.tileSources),
        this.element = this.element || document.getElementById(this.id),
        this.canvas = $.makeNeutralElement("div"),
        this.drawersContainer = $.makeNeutralElement("div"),
        this.overlaysContainer = $.makeNeutralElement("div"),
        this.canvas.className = "openseadragon-canvas",
        function(a) {
            a.width = "100%",
            a.height = "100%",
            a.overflow = "hidden",
            a.position = "absolute",
            a.top = "0px",
            a.left = "0px"
        }(this.canvas.style),
        $.setElementTouchActionNone(this.canvas),
        this.canvas.tabIndex = a.tabIndex || 0,
        this.container.className = "openseadragon-container",
        function(a) {
            a.width = "100%",
            a.height = "100%",
            a.position = "relative",
            a.overflow = "hidden",
            a.left = "0px",
            a.top = "0px",
            a.textAlign = "left"
        }(this.container.style),
        this.container.insertBefore(this.canvas, this.container.firstChild),
        this.element.appendChild(this.container),
        this.canvas.appendChild(this.drawersContainer),
        this.canvas.appendChild(this.overlaysContainer),
        this.bodyWidth = document.body.style.width,
        this.bodyHeight = document.body.style.height,
        this.bodyOverflow = document.body.style.overflow,
        this.docOverflow = document.documentElement.style.overflow,
        this.innerTracker = new $.MouseTracker({
            element: this.canvas,
            startDisabled: this.mouseNavEnabled ? !1 : !0,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            dblClickTimeThreshold: this.dblClickTimeThreshold,
            dblClickDistThreshold: this.dblClickDistThreshold,
            keyDownHandler: $.delegate(this, onCanvasKeyDown),
            keyHandler: $.delegate(this, onCanvasKeyPress),
            clickHandler: $.delegate(this, onCanvasClick),
            dblClickHandler: $.delegate(this, onCanvasDblClick),
            dragHandler: $.delegate(this, onCanvasDrag),
            dragEndHandler: $.delegate(this, onCanvasDragEnd),
            enterHandler: $.delegate(this, onCanvasEnter),
            exitHandler: $.delegate(this, onCanvasExit),
            pressHandler: $.delegate(this, onCanvasPress),
            releaseHandler: $.delegate(this, onCanvasRelease),
            nonPrimaryPressHandler: $.delegate(this, onCanvasNonPrimaryPress),
            nonPrimaryReleaseHandler: $.delegate(this, onCanvasNonPrimaryRelease),
            scrollHandler: $.delegate(this, onCanvasScroll),
            pinchHandler: $.delegate(this, onCanvasPinch)
        }),
        this.outerTracker = new $.MouseTracker({
            element: this.container,
            startDisabled: this.mouseNavEnabled ? !1 : !0,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            dblClickTimeThreshold: this.dblClickTimeThreshold,
            dblClickDistThreshold: this.dblClickDistThreshold,
            enterHandler: $.delegate(this, onContainerEnter),
            exitHandler: $.delegate(this, onContainerExit)
        }),
        this.toolbar && (this.toolbar = new $.ControlDock({
            element: this.toolbar
        })),
        this.bindStandardControls(),
        this.bindSequenceControls(),
        e && (this.open(e),
        this.tileSources.length > 1 && this._updateSequenceButtons(this.initialPage)),
        b = 0; b < this.customControls.length; b++)
            this.addControl(this.customControls[b].id, {
                anchor: this.customControls[b].anchor
            });
        $.requestAnimationFrame(function() {
            beginControlsAutoHide(d)
        })
    }
    ,
    $.extend($.Viewer.prototype, $.EventSource.prototype, $.ControlDock.prototype, {
        isOpen: function() {
            return !!this.source
        },
        openDzi: function(a) {
            return this.open(a)
        },
        openTileSource: function(a) {
            return this.open(a)
        },
        open: function(a) {
            var b = this;
            return b._hideMessage(),
            getTileSourceImplementation(b, a, function(a) {
                openTileSource(b, a)
            }, function(a) {
                b.raiseEvent("open-failed", a)
            }),
            this
        },
        close: function() {
            return THIS[this.hash] ? (null !== this._updateRequestId && ($.cancelAnimationFrame(this._updateRequestId),
            this._updateRequestId = null),
            this.navigator && this.navigator.close(),
            this.preserveOverlays || (this.clearOverlays(),
            this.overlaysContainer.innerHTML = ""),
            this.drawersContainer.innerHTML = "",
            this.drawer && this.drawer.destroy(),
            this.source = null,
            this.drawer = null,
            this.drawers = [],
            this.viewport = this.preserveViewport ? this.viewport : null,
            VIEWERS[this.hash] = null,
            delete VIEWERS[this.hash],
            this.raiseEvent("close"),
            this) : this
        },
        destroy: function() {
            if (this.close(),
            this.removeAllHandlers(),
            this.element)
                for (; this.element.firstChild; )
                    this.element.removeChild(this.element.firstChild);
            this.innerTracker && this.innerTracker.destroy(),
            this.outerTracker && this.outerTracker.destroy(),
            THIS[this.hash] = null,
            delete THIS[this.hash],
            this.canvas = null,
            this.container = null,
            this.element = null
        },
        isMouseNavEnabled: function() {
            return this.innerTracker.isTracking()
        },
        setMouseNavEnabled: function(a) {
            return this.innerTracker.setTracking(a),
            this.raiseEvent("mouse-enabled", {
                enabled: a
            }),
            this
        },
        areControlsEnabled: function() {
            var a, b = this.controls.length;
            for (a = 0; a < this.controls.length; a++)
                b = b && this.controls[a].isVisibile();
            return b
        },
        setControlsEnabled: function(a) {
            return a ? abortControlsAutoHide(this) : beginControlsAutoHide(this),
            this.raiseEvent("controls-enabled", {
                enabled: a
            }),
            this
        },
        isFullPage: function() {
            return THIS[this.hash].fullPage
        },
        setFullPage: function(a) {
            var b, c, d = document.body, e = d.style, f = document.documentElement.style, g = this;
            if (a == this.isFullPage())
                return this;
            var h = {
                fullPage: a,
                preventDefaultAction: !1
            };
            if (this.raiseEvent("pre-full-page", h),
            h.preventDefaultAction)
                return this;
            if (a) {
                for (this.elementSize = $.getElementSize(this.element),
                this.pageScroll = $.getPageScroll(),
                this.elementMargin = this.element.style.margin,
                this.element.style.margin = "0",
                this.elementPadding = this.element.style.padding,
                this.element.style.padding = "0",
                this.bodyMargin = e.margin,
                this.docMargin = f.margin,
                e.margin = "0",
                f.margin = "0",
                this.bodyPadding = e.padding,
                this.docPadding = f.padding,
                e.padding = "0",
                f.padding = "0",
                this.bodyWidth = e.width,
                this.bodyHeight = e.height,
                e.width = "100%",
                e.height = "100%",
                this.previousBody = [],
                THIS[this.hash].prevElementParent = this.element.parentNode,
                THIS[this.hash].prevNextSibling = this.element.nextSibling,
                THIS[this.hash].prevElementWidth = this.element.style.width,
                THIS[this.hash].prevElementHeight = this.element.style.height,
                b = d.childNodes.length,
                c = 0; b > c; c++)
                    this.previousBody.push(d.childNodes[0]),
                    d.removeChild(d.childNodes[0]);
                this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode,
                this.toolbar.nextSibling = this.toolbar.element.nextSibling,
                d.appendChild(this.toolbar.element),
                $.addClass(this.toolbar.element, "fullpage")),
                $.addClass(this.element, "fullpage"),
                d.appendChild(this.element),
                this.element.style.height = $.getWindowSize().y + "px",
                this.element.style.width = $.getWindowSize().x + "px",
                this.toolbar && this.toolbar.element && (this.element.style.height = $.getElementSize(this.element).y - $.getElementSize(this.toolbar.element).y + "px"),
                THIS[this.hash].fullPage = !0,
                $.delegate(this, onContainerEnter)({})
            } else {
                for (this.element.style.margin = this.elementMargin,
                this.element.style.padding = this.elementPadding,
                e.margin = this.bodyMargin,
                f.margin = this.docMargin,
                e.padding = this.bodyPadding,
                f.padding = this.docPadding,
                e.width = this.bodyWidth,
                e.height = this.bodyHeight,
                d.removeChild(this.element),
                b = this.previousBody.length,
                c = 0; b > c; c++)
                    d.appendChild(this.previousBody.shift());
                $.removeClass(this.element, "fullpage"),
                THIS[this.hash].prevElementParent.insertBefore(this.element, THIS[this.hash].prevNextSibling),
                this.toolbar && this.toolbar.element && (d.removeChild(this.toolbar.element),
                $.removeClass(this.toolbar.element, "fullpage"),
                this.toolbar.parentNode.insertBefore(this.toolbar.element, this.toolbar.nextSibling),
                delete this.toolbar.parentNode,
                delete this.toolbar.nextSibling),
                this.element.style.width = THIS[this.hash].prevElementWidth,
                this.element.style.height = THIS[this.hash].prevElementHeight;
                var i = 0
                  , j = function() {
                    $.setPageScroll(g.pageScroll);
                    var a = $.getPageScroll();
                    i++,
                    (10 > i && a.x !== g.pageScroll.x || a.y !== g.pageScroll.y) && $.requestAnimationFrame(j)
                };
                $.requestAnimationFrame(j),
                THIS[this.hash].fullPage = !1,
                $.delegate(this, onContainerExit)({})
            }
            return this.navigator && this.viewport && this.navigator.update(this.viewport),
            this.raiseEvent("full-page", {
                fullPage: a
            }),
            this
        },
        setFullScreen: function(a) {
            var b = this;
            if (!$.supportsFullScreen)
                return this.setFullPage(a);
            if ($.isFullScreen() === a)
                return this;
            var c = {
                fullScreen: a,
                preventDefaultAction: !1
            };
            if (this.raiseEvent("pre-full-screen", c),
            c.preventDefaultAction)
                return this;
            if (a) {
                if (this.setFullPage(!0),
                !this.isFullPage())
                    return this;
                this.fullPageStyleWidth = this.element.style.width,
                this.fullPageStyleHeight = this.element.style.height,
                this.element.style.width = "100%",
                this.element.style.height = "100%";
                var d = function() {
                    var a = $.isFullScreen();
                    a || ($.removeEvent(document, $.fullScreenEventName, d),
                    $.removeEvent(document, $.fullScreenErrorEventName, d),
                    b.setFullPage(!1),
                    b.isFullPage() && (b.element.style.width = b.fullPageStyleWidth,
                    b.element.style.height = b.fullPageStyleHeight)),
                    b.navigator && b.viewport && b.navigator.update(b.viewport),
                    b.raiseEvent("full-screen", {
                        fullScreen: a
                    })
                };
                $.addEvent(document, $.fullScreenEventName, d),
                $.addEvent(document, $.fullScreenErrorEventName, d),
                $.requestFullScreen(document.body)
            } else
                $.exitFullScreen();
            return this
        },
        isVisible: function() {
            return "hidden" != this.container.style.visibility
        },
        setVisible: function(a) {
            return this.container.style.visibility = a ? "" : "hidden",
            this.raiseEvent("visible", {
                visible: a
            }),
            this
        },
        addLayer: function(a) {
            function b(a) {
                c.raiseEvent("add-layer-failed", a)
            }
            var c = this
              , d = a.tileSource;
            if (!this.isOpen())
                throw new Error("An image must be loaded before adding layers.");
            if (!d)
                throw new Error("No tile source provided as new layer.");
            if (this.collectionMode)
                throw new Error("Layers not supported in collection mode.");
            return getTileSourceImplementation(this, d, function(d) {
                if (d instanceof Array)
                    return void b({
                        message: "Sequences can not be added as layers.",
                        source: d,
                        options: a
                    });
                for (var e = 0; e < c.drawers.length; e++) {
                    var f = c.drawers[e].source.aspectRatio
                      , g = f - d.aspectRatio;
                    if (Math.abs(g) > c.layersAspectRatioEpsilon)
                        return void b({
                            message: "Aspect ratio mismatch with layer " + e + ".",
                            source: d,
                            options: a
                        })
                }
                var h = new $.Drawer({
                    viewer: c,
                    source: d,
                    viewport: c.viewport,
                    element: c.drawersContainer,
                    opacity: void 0 !== a.opacity ? a.opacity : c.opacity,
                    maxImageCacheCount: c.maxImageCacheCount,
                    imageLoaderLimit: c.imageLoaderLimit,
                    minZoomImageRatio: c.minZoomImageRatio,
                    wrapHorizontal: c.wrapHorizontal,
                    wrapVertical: c.wrapVertical,
                    immediateRender: c.immediateRender,
                    blendTime: c.blendTime,
                    alwaysBlend: c.alwaysBlend,
                    minPixelRatio: c.minPixelRatio,
                    timeout: c.timeout,
                    debugMode: c.debugMode,
                    debugGridColor: c.debugGridColor
                });
                c.drawers.push(h),
                void 0 !== a.level && c.setLayerLevel(h, a.level),
                THIS[c.hash].forceRedraw = !0,
                c.raiseEvent("add-layer", {
                    options: a,
                    drawer: h
                })
            }, function(c) {
                c.options = a,
                b(c)
            }),
            this
        },
        getLayerAtLevel: function(a) {
            if (a >= this.drawers.length)
                throw new Error("Level bigger than number of layers.");
            return this.drawers[a]
        },
        getLevelOfLayer: function(a) {
            return $.indexOf(this.drawers, a)
        },
        getLayersCount: function() {
            return this.drawers.length
        },
        setLayerLevel: function(a, b) {
            var c = this.getLevelOfLayer(a);
            if (b >= this.drawers.length)
                throw new Error("Level bigger than number of layers.");
            if (b === c || -1 === c)
                return this;
            if (0 === b || 0 === c) {
                if (THIS[this.hash].sequenced)
                    throw new Error("Cannot reassign base level when in sequence mode.");
                this.drawer = 0 === b ? a : this.getLayerAtLevel(b),
                this.source = this.drawer.source
            }
            if (this.drawers.splice(c, 1),
            this.drawers.splice(b, 0, a),
            this.drawersContainer.removeChild(a.canvas),
            0 === b) {
                var d = this.drawers[1].canvas;
                d.parentNode.insertBefore(a.canvas, d)
            } else {
                var e = this.drawers[b - 1].canvas;
                e.parentNode.insertBefore(a.canvas, e.nextSibling)
            }
            return this.raiseEvent("layer-level-changed", {
                drawer: a,
                previousLevel: c,
                newLevel: b
            }),
            this
        },
        removeLayer: function(a) {
            var b = this.drawers.indexOf(a);
            if (-1 === b)
                return this;
            if (0 === b) {
                if (THIS[this.hash].sequenced)
                    throw new Error("Cannot remove base layer when in sequence mode.");
                if (1 === this.drawers.length)
                    return this.close(),
                    this;
                this.drawer = this.drawers[1]
            }
            return this.drawers.splice(b, 1),
            this.drawersContainer.removeChild(a.canvas),
            this.raiseEvent("remove-layer", {
                drawer: a
            }),
            this
        },
        forceRedraw: function() {
            return THIS[this.hash].forceRedraw = !0,
            this
        },
        bindSequenceControls: function() {
            var a = $.delegate(this, onFocus)
              , b = $.delegate(this, onBlur)
              , c = $.delegate(this, onNext)
              , d = $.delegate(this, onPrevious)
              , e = this.navImages
              , f = !0;
            return this.showSequenceControl && THIS[this.hash].sequenced && ((this.previousButton || this.nextButton) && (f = !1),
            this.previousButton = new $.Button({
                element: this.previousButton ? $.getElement(this.previousButton) : null,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                tooltip: $.getString("Tooltips.PreviousPage"),
                srcRest: resolveUrl(this.prefixUrl, e.previous.REST),
                srcGroup: resolveUrl(this.prefixUrl, e.previous.GROUP),
                srcHover: resolveUrl(this.prefixUrl, e.previous.HOVER),
                srcDown: resolveUrl(this.prefixUrl, e.previous.DOWN),
                onRelease: d,
                onFocus: a,
                onBlur: b
            }),
            this.nextButton = new $.Button({
                element: this.nextButton ? $.getElement(this.nextButton) : null,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                tooltip: $.getString("Tooltips.NextPage"),
                srcRest: resolveUrl(this.prefixUrl, e.next.REST),
                srcGroup: resolveUrl(this.prefixUrl, e.next.GROUP),
                srcHover: resolveUrl(this.prefixUrl, e.next.HOVER),
                srcDown: resolveUrl(this.prefixUrl, e.next.DOWN),
                onRelease: c,
                onFocus: a,
                onBlur: b
            }),
            this.navPrevNextWrap || this.previousButton.disable(),
            f && (this.paging = new $.ButtonGroup({
                buttons: [this.previousButton, this.nextButton],
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold
            }),
            this.pagingControl = this.paging.element,
            this.toolbar ? this.toolbar.addControl(this.pagingControl, {
                anchor: $.ControlAnchor.BOTTOM_RIGHT
            }) : this.addControl(this.pagingControl, {
                anchor: this.sequenceControlAnchor || $.ControlAnchor.TOP_LEFT
            }))),
            this
        },
        bindStandardControls: function() {
            var a = $.delegate(this, beginZoomingIn)
              , b = $.delegate(this, endZooming)
              , c = $.delegate(this, doSingleZoomIn)
              , d = $.delegate(this, beginZoomingOut)
              , e = $.delegate(this, doSingleZoomOut)
              , f = $.delegate(this, onHome)
              , g = $.delegate(this, onFullScreen)
              , h = $.delegate(this, onRotateLeft)
              , i = $.delegate(this, onRotateRight)
              , j = $.delegate(this, onFocus)
              , k = $.delegate(this, onBlur)
              , l = this.navImages
              , m = []
              , n = !0;
            return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton) && (n = !1),
            this.showZoomControl && (m.push(this.zoomInButton = new $.Button({
                element: this.zoomInButton ? $.getElement(this.zoomInButton) : null,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                tooltip: $.getString("Tooltips.ZoomIn"),
                srcRest: resolveUrl(this.prefixUrl, l.zoomIn.REST),
                srcGroup: resolveUrl(this.prefixUrl, l.zoomIn.GROUP),
                srcHover: resolveUrl(this.prefixUrl, l.zoomIn.HOVER),
                srcDown: resolveUrl(this.prefixUrl, l.zoomIn.DOWN),
                onPress: a,
                onRelease: b,
                onClick: c,
                onEnter: a,
                onExit: b,
                onFocus: j,
                onBlur: k
            })),
            m.push(this.zoomOutButton = new $.Button({
                element: this.zoomOutButton ? $.getElement(this.zoomOutButton) : null,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                tooltip: $.getString("Tooltips.ZoomOut"),
                srcRest: resolveUrl(this.prefixUrl, l.zoomOut.REST),
                srcGroup: resolveUrl(this.prefixUrl, l.zoomOut.GROUP),
                srcHover: resolveUrl(this.prefixUrl, l.zoomOut.HOVER),
                srcDown: resolveUrl(this.prefixUrl, l.zoomOut.DOWN),
                onPress: d,
                onRelease: b,
                onClick: e,
                onEnter: d,
                onExit: b,
                onFocus: j,
                onBlur: k
            }))),
            this.showHomeControl && m.push(this.homeButton = new $.Button({
                element: this.homeButton ? $.getElement(this.homeButton) : null,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                tooltip: $.getString("Tooltips.Home"),
                srcRest: resolveUrl(this.prefixUrl, l.home.REST),
                srcGroup: resolveUrl(this.prefixUrl, l.home.GROUP),
                srcHover: resolveUrl(this.prefixUrl, l.home.HOVER),
                srcDown: resolveUrl(this.prefixUrl, l.home.DOWN),
                onRelease: f,
                onFocus: j,
                onBlur: k
            })),
            this.showFullPageControl && m.push(this.fullPageButton = new $.Button({
                element: this.fullPageButton ? $.getElement(this.fullPageButton) : null,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                tooltip: $.getString("Tooltips.FullPage"),
                srcRest: resolveUrl(this.prefixUrl, l.fullpage.REST),
                srcGroup: resolveUrl(this.prefixUrl, l.fullpage.GROUP),
                srcHover: resolveUrl(this.prefixUrl, l.fullpage.HOVER),
                srcDown: resolveUrl(this.prefixUrl, l.fullpage.DOWN),
                onRelease: g,
                onFocus: j,
                onBlur: k
            })),
            this.showRotationControl && (m.push(this.rotateLeftButton = new $.Button({
                element: this.rotateLeftButton ? $.getElement(this.rotateLeftButton) : null,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                tooltip: $.getString("Tooltips.RotateLeft"),
                srcRest: resolveUrl(this.prefixUrl, l.rotateleft.REST),
                srcGroup: resolveUrl(this.prefixUrl, l.rotateleft.GROUP),
                srcHover: resolveUrl(this.prefixUrl, l.rotateleft.HOVER),
                srcDown: resolveUrl(this.prefixUrl, l.rotateleft.DOWN),
                onRelease: h,
                onFocus: j,
                onBlur: k
            })),
            m.push(this.rotateRightButton = new $.Button({
                element: this.rotateRightButton ? $.getElement(this.rotateRightButton) : null,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                tooltip: $.getString("Tooltips.RotateRight"),
                srcRest: resolveUrl(this.prefixUrl, l.rotateright.REST),
                srcGroup: resolveUrl(this.prefixUrl, l.rotateright.GROUP),
                srcHover: resolveUrl(this.prefixUrl, l.rotateright.HOVER),
                srcDown: resolveUrl(this.prefixUrl, l.rotateright.DOWN),
                onRelease: i,
                onFocus: j,
                onBlur: k
            }))),
            n && (this.buttons = new $.ButtonGroup({
                buttons: m,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold
            }),
            this.navControl = this.buttons.element,
            this.addHandler("open", $.delegate(this, lightUp)),
            this.toolbar ? this.toolbar.addControl(this.navControl, {
                anchor: $.ControlAnchor.TOP_LEFT
            }) : this.addControl(this.navControl, {
                anchor: this.navigationControlAnchor || $.ControlAnchor.TOP_LEFT
            }))),
            this
        },
        currentPage: function() {
            return THIS[this.hash].sequence
        },
        goToPage: function(a) {
            return a >= 0 && a < this.tileSources.length && (this.raiseEvent("page", {
                page: a
            }),
            THIS[this.hash].sequence = a,
            this._updateSequenceButtons(a),
            this.open(this.tileSources[a]),
            this.referenceStrip && this.referenceStrip.setFocus(a)),
            this
        },
        addOverlay: function(a, b, c, d) {
            var e;
            return e = $.isPlainObject(a) ? a : {
                element: a,
                location: b,
                placement: c,
                onDraw: d
            },
            a = $.getElement(e.element),
            getOverlayIndex(this.currentOverlays, a) >= 0 ? this : (this.currentOverlays.push(getOverlayObject(this, e)),
            THIS[this.hash].forceRedraw = !0,
            this.raiseEvent("add-overlay", {
                element: a,
                location: e.location,
                placement: e.placement
            }),
            this)
        },
        updateOverlay: function(a, b, c) {
            var d;
            return a = $.getElement(a),
            d = getOverlayIndex(this.currentOverlays, a),
            d >= 0 && (this.currentOverlays[d].update(b, c),
            THIS[this.hash].forceRedraw = !0,
            this.raiseEvent("update-overlay", {
                element: a,
                location: b,
                placement: c
            })),
            this
        },
        removeOverlay: function(a) {
            var b;
            return a = $.getElement(a),
            b = getOverlayIndex(this.currentOverlays, a),
            b >= 0 && (this.currentOverlays[b].destroy(),
            this.currentOverlays.splice(b, 1),
            THIS[this.hash].forceRedraw = !0,
            this.raiseEvent("remove-overlay", {
                element: a
            })),
            this
        },
        clearOverlays: function() {
            for (; this.currentOverlays.length > 0; )
                this.currentOverlays.pop().destroy();
            return THIS[this.hash].forceRedraw = !0,
            this.raiseEvent("clear-overlay", {}),
            this
        },
        _updateSequenceButtons: function(a) {
            this.nextButton && (this.tileSources.length - 1 === a ? this.navPrevNextWrap || this.nextButton.disable() : this.nextButton.enable()),
            this.previousButton && (a > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable())
        },
        _showMessage: function(a) {
            this._hideMessage();
            var b = $.makeNeutralElement("div");
            b.appendChild(document.createTextNode(a)),
            this.messageDiv = $.makeCenteredNode(b),
            $.addClass(this.messageDiv, "openseadragon-message"),
            this.container.appendChild(this.messageDiv)
        },
        _hideMessage: function() {
            var a = this.messageDiv;
            a && (a.parentNode.removeChild(a),
            delete this.messageDiv)
        },
        gestureSettingsByDeviceType: function(a) {
            switch (a) {
            case "mouse":
                return this.gestureSettingsMouse;
            case "touch":
                return this.gestureSettingsTouch;
            case "pen":
                return this.gestureSettingsPen;
            default:
                return this.gestureSettingsUnknown
            }
        }
    })
}(OpenSeadragon),
function(a) {
    function b(a) {
        a.quick && this.viewer.viewport && (this.viewer.viewport.panTo(this.viewport.pointFromPixel(a.position).rotate(-this.viewer.viewport.degrees, this.viewer.viewport.getHomeBounds().getCenter())),
        this.viewer.viewport.applyConstraints())
    }
    function c(a) {
        this.viewer.viewport && (this.panHorizontal || (a.delta.x = 0),
        this.panVertical || (a.delta.y = 0),
        this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(a.delta)))
    }
    function d(a) {
        a.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints()
    }
    function e(a) {
        return this.viewer.raiseEvent("navigator-scroll", {
            tracker: a.eventSource,
            position: a.position,
            scroll: a.scroll,
            shift: a.shift,
            originalEvent: a.originalEvent
        }),
        !1
    }
    function f(a, b) {
        a.style.webkitTransform = "rotate(" + b + "deg)",
        a.style.mozTransform = "rotate(" + b + "deg)",
        a.style.msTransform = "rotate(" + b + "deg)",
        a.style.oTransform = "rotate(" + b + "deg)",
        a.style.transform = "rotate(" + b + "deg)"
    }
    a.Navigator = function(g) {
        var h, i, j = g.viewer, k = this;
        g.id ? (this.element = document.getElementById(g.id),
        g.controlOptions = {
            anchor: a.ControlAnchor.NONE,
            attachToViewer: !1,
            autoFade: !1
        }) : (g.id = "navigator-" + a.now(),
        this.element = a.makeNeutralElement("div"),
        g.controlOptions = {
            anchor: a.ControlAnchor.TOP_RIGHT,
            attachToViewer: !0,
            autoFade: !0
        },
        g.position && ("BOTTOM_RIGHT" == g.position ? g.controlOptions.anchor = a.ControlAnchor.BOTTOM_RIGHT : "BOTTOM_LEFT" == g.position ? g.controlOptions.anchor = a.ControlAnchor.BOTTOM_LEFT : "TOP_RIGHT" == g.position ? g.controlOptions.anchor = a.ControlAnchor.TOP_RIGHT : "TOP_LEFT" == g.position ? g.controlOptions.anchor = a.ControlAnchor.TOP_LEFT : "ABSOLUTE" == g.position && (g.controlOptions.anchor = a.ControlAnchor.ABSOLUTE,
        g.controlOptions.top = g.top,
        g.controlOptions.left = g.left,
        g.controlOptions.height = g.height,
        g.controlOptions.width = g.width))),
        this.element.id = g.id,
        this.element.className += " navigator",
        g = a.extend(!0, {
            sizeRatio: a.DEFAULT_SETTINGS.navigatorSizeRatio
        }, g, {
            element: this.element,
            tabIndex: -1,
            showNavigator: !1,
            mouseNavEnabled: !1,
            showNavigationControl: !1,
            showSequenceControl: !1,
            immediateRender: !0,
            blendTime: 0,
            animationTime: 0,
            autoResize: g.autoResize
        }),
        g.minPixelRatio = this.minPixelRatio = j.minPixelRatio,
        a.setElementTouchActionNone(this.element),
        this.borderWidth = 2,
        this.fudge = new a.Point(1,1),
        this.totalBorderWidths = new a.Point(2 * this.borderWidth,2 * this.borderWidth).minus(this.fudge),
        g.controlOptions.anchor != a.ControlAnchor.NONE && !function(a, b) {
            a.margin = "0px",
            a.border = b + "px solid #555",
            a.padding = "0px",
            a.background = "#000",
            a.opacity = .8,
            a.overflow = "hidden"
        }(this.element.style, this.borderWidth),
        this.displayRegion = a.makeNeutralElement("div"),
        this.displayRegion.id = this.element.id + "-displayregion",
        this.displayRegion.className = "displayregion",
        function(a, b) {
            a.position = "relative",
            a.top = "0px",
            a.left = "0px",
            a.fontSize = "0px",
            a.overflow = "hidden",
            a.border = b + "px solid #900",
            a.margin = "0px",
            a.padding = "0px",
            a.background = "transparent",
            a["float"] = "left",
            a.cssFloat = "left",
            a.styleFloat = "left",
            a.zIndex = 999999999,
            a.cursor = "default"
        }(this.displayRegion.style, this.borderWidth),
        this.displayRegionContainer = a.makeNeutralElement("div"),
        this.displayRegionContainer.id = this.element.id + "-displayregioncontainer",
        this.displayRegionContainer.className = "displayregioncontainer",
        this.displayRegionContainer.style.width = "100%",
        this.displayRegionContainer.style.height = "100%",
        j.addControl(this.element, g.controlOptions),
        g.controlOptions.anchor != a.ControlAnchor.ABSOLUTE && g.controlOptions.anchor != a.ControlAnchor.NONE && (g.width && g.height ? (this.element.style.height = "number" == typeof g.height ? g.height + "px" : g.height,
        this.element.style.width = "number" == typeof g.width ? g.width + "px" : g.width) : (h = a.getElementSize(j.element),
        this.element.style.height = Math.round(h.y * g.sizeRatio) + "px",
        this.element.style.width = Math.round(h.x * g.sizeRatio) + "px",
        this.oldViewerSize = h),
        i = a.getElementSize(this.element),
        this.elementArea = i.x * i.y),
        this.oldContainerSize = new a.Point(0,0),
        a.Viewer.apply(this, [g]),
        this.displayRegionContainer.appendChild(this.displayRegion),
        this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer),
        g.navigatorRotate && g.viewer.addHandler("rotate", function(a) {
            f(k.displayRegionContainer, a.degrees),
            f(k.displayRegion, -a.degrees),
            k.viewport.setRotation(a.degrees)
        }),
        this.innerTracker.destroy(),
        this.innerTracker = new a.MouseTracker({
            element: this.element,
            dragHandler: a.delegate(this, c),
            clickHandler: a.delegate(this, b),
            releaseHandler: a.delegate(this, d),
            scrollHandler: a.delegate(this, e)
        })
    }
    ,
    a.extend(a.Navigator.prototype, a.EventSource.prototype, a.Viewer.prototype, {
        updateSize: function() {
            if (this.viewport) {
                var b = new a.Point(0 === this.container.clientWidth ? 1 : this.container.clientWidth,0 === this.container.clientHeight ? 1 : this.container.clientHeight);
                if (!b.equals(this.oldContainerSize)) {
                    var c = this.viewport.getBounds()
                      , d = this.viewport.getCenter();
                    this.viewport.resize(b, !0);
                    var e = 1 / this.source.aspectRatio
                      , f = c.width <= 1 ? c.width : 1
                      , g = c.height <= e ? c.height : e
                      , h = new a.Rect(d.x - f / 2,d.y - g / 2,f,g);
                    this.viewport.fitBounds(h, !0),
                    this.oldContainerSize = b,
                    this.drawer.update()
                }
            }
        },
        update: function(b) {
            var c, d, e, f, g, h;
            c = a.getElementSize(this.viewer.element),
            c.equals(this.oldViewerSize) || (this.oldViewerSize = c,
            this.maintainSizeRatio ? (d = c.x * this.sizeRatio,
            e = c.y * this.sizeRatio) : (d = Math.sqrt(this.elementArea * (c.x / c.y)),
            e = this.elementArea / d),
            this.element.style.width = Math.round(d) + "px",
            this.element.style.height = Math.round(e) + "px",
            this.updateSize()),
            b && this.viewport && (f = b.getBounds(!0),
            g = this.viewport.pixelFromPoint(f.getTopLeft(), !1),
            h = this.viewport.pixelFromPoint(f.getBottomRight(), !1).minus(this.totalBorderWidths),
            function(a) {
                a.top = Math.round(g.y) + "px",
                a.left = Math.round(g.x) + "px";
                var b = Math.abs(g.x - h.x)
                  , c = Math.abs(g.y - h.y);
                a.width = Math.round(Math.max(b, 0)) + "px",
                a.height = Math.round(Math.max(c, 0)) + "px"
            }(this.displayRegion.style))
        },
        open: function(b) {
            this.updateSize();
            var c = this.viewer.viewport.containerSize.times(this.sizeRatio)
              , d = b.getTileSize(b.maxLevel);
            return this.minPixelRatio = d > c.x || d > c.y ? Math.min(c.x, c.y) / d : this.viewer.minPixelRatio,
            a.Viewer.prototype.open.apply(this, [b])
        }
    })
}(OpenSeadragon),
function(a) {
    var b = {
        Errors: {
            Dzc: "Sorry, we don't support Deep Zoom Collections!",
            Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
            Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
            ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.",
            Security: "It looks like a security restriction stopped us from loading this Deep Zoom Image.",
            Status: "This space unintentionally left blank ({0} {1}).",
            OpenFailed: "Unable to open {0}: {1}"
        },
        Tooltips: {
            FullPage: "Toggle full page",
            Home: "Go home",
            ZoomIn: "Zoom in",
            ZoomOut: "Zoom out",
            NextPage: "Next page",
            PreviousPage: "Previous page",
            RotateLeft: "Rotate left",
            RotateRight: "Rotate right"
        }
    };
    a.extend(a, {
        getString: function(c) {
            var d, e = c.split("."), f = null, g = arguments, h = b;
            for (d = 0; d < e.length - 1; d++)
                h = h[e[d]] || {};
            return f = h[e[d]],
            "string" != typeof f && (a.console.debug("Untranslated source string:", c),
            f = ""),
            f.replace(/\{\d+\}/g, function(a) {
                var b = parseInt(a.match(/\d+/), 10) + 1;
                return b < g.length ? g[b] : ""
            })
        },
        setString: function(a, c) {
            var d, e = a.split("."), f = b;
            for (d = 0; d < e.length - 1; d++)
                f[e[d]] || (f[e[d]] = {}),
                f = f[e[d]];
            f[e[d]] = c
        }
    })
}(OpenSeadragon),
function(a) {
    a.Point = function(a, b) {
        this.x = "number" == typeof a ? a : 0,
        this.y = "number" == typeof b ? b : 0
    }
    ,
    a.Point.prototype = {
        plus: function(b) {
            return new a.Point(this.x + b.x,this.y + b.y)
        },
        minus: function(b) {
            return new a.Point(this.x - b.x,this.y - b.y)
        },
        times: function(b) {
            return new a.Point(this.x * b,this.y * b)
        },
        divide: function(b) {
            return new a.Point(this.x / b,this.y / b)
        },
        negate: function() {
            return new a.Point(-this.x,-this.y)
        },
        distanceTo: function(a) {
            return Math.sqrt(Math.pow(this.x - a.x, 2) + Math.pow(this.y - a.y, 2))
        },
        apply: function(b) {
            return new a.Point(b(this.x),b(this.y))
        },
        equals: function(b) {
            return b instanceof a.Point && this.x === b.x && this.y === b.y
        },
        rotate: function(b, c) {
            var d = b * Math.PI / 180
              , e = Math.cos(d) * (this.x - c.x) - Math.sin(d) * (this.y - c.y) + c.x
              , f = Math.sin(d) * (this.x - c.x) + Math.cos(d) * (this.y - c.y) + c.y;
            return new a.Point(e,f)
        },
        toString: function() {
            return "(" + Math.round(this.x) + "," + Math.round(this.y) + ")"
        }
    }
}(OpenSeadragon),
function($) {
    function processResponse(xhr) {
        var responseText = xhr.responseText, status = xhr.status, statusText, data;
        if (!xhr)
            throw new Error($.getString("Errors.Security"));
        if (200 !== xhr.status && 0 !== xhr.status)
            throw status = xhr.status,
            statusText = 404 == status ? "Not Found" : xhr.statusText,
            new Error($.getString("Errors.Status", status, statusText));
        if (responseText.match(/\s*<.*/))
            try {
                data = xhr.responseXML && xhr.responseXML.documentElement ? xhr.responseXML : $.parseXml(responseText)
            } catch (e) {
                data = xhr.responseText
            }
        else
            data = responseText.match(/\s*[\{\[].*/) ? eval("(" + responseText + ")") : responseText;
        return data
    }
    $.TileSource = function(a) {
        var b, c, d = null, e = arguments;
        for (b = $.isPlainObject(a) ? a : {
            width: e[0],
            height: e[1],
            tileSize: e[2],
            tileOverlap: e[3],
            minLevel: e[4],
            maxLevel: e[5]
        },
        $.EventSource.call(this),
        $.extend(!0, this, b),
        c = 0; c < arguments.length; c++)
            if ($.isFunction(arguments[c])) {
                d = arguments[c],
                this.addHandler("ready", function(a) {
                    d(a)
                });
                break
            }
        "string" == $.type(arguments[0]) ? (this.aspectRatio = 1,
        this.dimensions = new $.Point(10,10),
        this.tileSize = 0,
        this.tileOverlap = 0,
        this.minLevel = 0,
        this.maxLevel = 0,
        this.ready = !1,
        this.getImageInfo(arguments[0])) : (this.ready = !0,
        this.aspectRatio = b.width && b.height ? b.width / b.height : 1,
        this.dimensions = new $.Point(b.width,b.height),
        this.tileSize = b.tileSize ? b.tileSize : 0,
        this.tileOverlap = b.tileOverlap ? b.tileOverlap : 0,
        this.minLevel = b.minLevel ? b.minLevel : 0,
        this.maxLevel = void 0 !== b.maxLevel && null !== b.maxLevel ? b.maxLevel : b.width && b.height ? Math.ceil(Math.log(Math.max(b.width, b.height)) / Math.log(2)) : 0,
        d && $.isFunction(d) && d(this))
    }
    ,
    $.TileSource.prototype = {
        getTileSize: function() {
            return this.tileSize
        },
        getLevelScale: function(a) {
            var b, c = {};
            for (b = 0; b <= this.maxLevel; b++)
                c[b] = 1 / Math.pow(2, this.maxLevel - b);
            return this.getLevelScale = function(a) {
                return c[a]
            }
            ,
            this.getLevelScale(a)
        },
        getNumTiles: function(a) {
            var b = this.getLevelScale(a)
              , c = Math.ceil(b * this.dimensions.x / this.getTileSize(a))
              , d = Math.ceil(b * this.dimensions.y / this.getTileSize(a));
            return new $.Point(c,d)
        },
        getPixelRatio: function(a) {
            var b = this.dimensions.times(this.getLevelScale(a))
              , c = 1 / b.x
              , d = 1 / b.y;
            return new $.Point(c,d)
        },
        getClosestLevel: function(a) {
            var b, c, d;
            for (b = this.minLevel; b < this.maxLevel && (d = this.getNumTiles(b),
            c = Math.floor(Math.max(a.x, a.y) / this.getTileSize(b)),
            !(Math.max(d.x, d.y) + 1 >= c)); b++)
                ;
            return Math.max(0, b - 1)
        },
        getTileAtPoint: function(a, b) {
            var c = b.times(this.dimensions.x).times(this.getLevelScale(a))
              , d = Math.floor(c.x / this.getTileSize(a))
              , e = Math.floor(c.y / this.getTileSize(a));
            return new $.Point(d,e)
        },
        getTileBounds: function(a, b, c) {
            var d = this.dimensions.times(this.getLevelScale(a))
              , e = this.getTileSize(a)
              , f = 0 === b ? 0 : e * b - this.tileOverlap
              , g = 0 === c ? 0 : e * c - this.tileOverlap
              , h = e + (0 === b ? 1 : 2) * this.tileOverlap
              , i = e + (0 === c ? 1 : 2) * this.tileOverlap
              , j = 1 / d.x;
            return h = Math.min(h, d.x - f),
            i = Math.min(i, d.y - g),
            new $.Rect(f * j,g * j,h * j,i * j)
        },
        getImageInfo: function(a) {
            var b, c, d, e, f, g, h, i = this;
            a && (f = a.split("/"),
            g = f[f.length - 1],
            h = g.lastIndexOf("."),
            h > -1 && (f[f.length - 1] = g.slice(0, h))),
            c = function(b) {
                "string" == typeof b && (b = $.parseXml(b));
                var c = $.TileSource.determineType(i, b, a);
                return c ? (e = c.prototype.configure.apply(i, [b, a]),
                d = new c(e),
                i.ready = !0,
                void i.raiseEvent("ready", {
                    tileSource: d
                })) : void i.raiseEvent("open-failed", {
                    message: "Unable to load TileSource",
                    source: a
                })
            }
            ,
            a.match(/\.js$/) ? (b = a.split("/").pop().replace(".js", ""),
            $.jsonp({
                url: a,
                async: !1,
                callbackName: b,
                callback: c
            })) : $.makeAjaxRequest(a, function(a) {
                var b = processResponse(a);
                c(b)
            }, function(b, c) {
                var d;
                try {
                    d = "HTTP " + b.status + " attempting to load TileSource"
                } catch (e) {
                    var f;
                    f = "undefined" != typeof c && c.toString ? c.toString() : "Unknown error",
                    d = f + " attempting to load TileSource"
                }
                i.raiseEvent("open-failed", {
                    message: d,
                    source: a
                })
            })
        },
        supports: function() {
            return !1
        },
        configure: function() {
            throw new Error("Method not implemented.")
        },
        getTileUrl: function() {
            throw new Error("Method not implemented.")
        },
        tileExists: function(a, b, c) {
            var d = this.getNumTiles(a);
            return a >= this.minLevel && a <= this.maxLevel && b >= 0 && c >= 0 && b < d.x && c < d.y
        }
    },
    $.extend(!0, $.TileSource.prototype, $.EventSource.prototype),
    $.TileSource.determineType = function(a, b, c) {
        var d;
        for (d in OpenSeadragon)
            if (d.match(/.+TileSource$/) && $.isFunction(OpenSeadragon[d]) && $.isFunction(OpenSeadragon[d].prototype.supports) && OpenSeadragon[d].prototype.supports.call(a, b, c))
                return OpenSeadragon[d];
        $.console.error("No TileSource was able to open %s %s", c, b)
    }
}(OpenSeadragon),
function(a) {
    function b(b, d) {
        if (!d || !d.documentElement)
            throw new Error(a.getString("Errors.Xml"));
        var e, f, g, h, i, j = d.documentElement, k = j.localName || j.tagName, l = d.documentElement.namespaceURI, m = null, n = [];
        if ("Image" == k)
            try {
                if (h = j.getElementsByTagName("Size")[0],
                void 0 === h && (h = j.getElementsByTagNameNS(l, "Size")[0]),
                m = {
                    Image: {
                        xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                        Url: j.getAttribute("Url"),
                        Format: j.getAttribute("Format"),
                        DisplayRect: null,
                        Overlap: parseInt(j.getAttribute("Overlap"), 10),
                        TileSize: parseInt(j.getAttribute("TileSize"), 10),
                        Size: {
                            Height: parseInt(h.getAttribute("Height"), 10),
                            Width: parseInt(h.getAttribute("Width"), 10)
                        }
                    }
                },
                !a.imageFormatSupported(m.Image.Format))
                    throw new Error(a.getString("Errors.ImageFormat", m.Image.Format.toUpperCase()));
                for (e = j.getElementsByTagName("DisplayRect"),
                void 0 === e && (e = j.getElementsByTagNameNS(l, "DisplayRect")[0]),
                i = 0; i < e.length; i++)
                    f = e[i],
                    g = f.getElementsByTagName("Rect")[0],
                    void 0 === g && (g = f.getElementsByTagNameNS(l, "Rect")[0]),
                    n.push({
                        Rect: {
                            X: parseInt(g.getAttribute("X"), 10),
                            Y: parseInt(g.getAttribute("Y"), 10),
                            Width: parseInt(g.getAttribute("Width"), 10),
                            Height: parseInt(g.getAttribute("Height"), 10),
                            MinLevel: parseInt(f.getAttribute("MinLevel"), 10),
                            MaxLevel: parseInt(f.getAttribute("MaxLevel"), 10)
                        }
                    });
                return n.length && (m.Image.DisplayRect = n),
                c(b, m)
            } catch (o) {
                throw o instanceof Error ? o : new Error(a.getString("Errors.Dzi"))
            }
        else {
            if ("Collection" == k)
                throw new Error(a.getString("Errors.Dzc"));
            if ("Error" == k)
                return a._processDZIError(j)
        }
        throw new Error(a.getString("Errors.Dzi"))
    }
    function c(b, c) {
        var d, e, f = c.Image, g = f.Url, h = f.Format, i = f.Size, j = f.DisplayRect || [], k = parseInt(i.Width, 10), l = parseInt(i.Height, 10), m = parseInt(f.TileSize, 10), n = parseInt(f.Overlap, 10), o = [];
        for (e = 0; e < j.length; e++)
            d = j[e].Rect,
            o.push(new a.DisplayRect(parseInt(d.X, 10),parseInt(d.Y, 10),parseInt(d.Width, 10),parseInt(d.Height, 10),parseInt(d.MinLevel, 10),parseInt(d.MaxLevel, 10)));
        return a.extend(!0, {
            width: k,
            height: l,
            tileSize: m,
            tileOverlap: n,
            minLevel: null,
            maxLevel: null,
            tilesUrl: g,
            fileFormat: h,
            displayRects: o
        }, c)
    }
    a.DziTileSource = function(b) {
        var c, d, e, f;
        if (f = a.isPlainObject(b) ? b : {
            width: arguments[0],
            height: arguments[1],
            tileSize: arguments[2],
            tileOverlap: arguments[3],
            tilesUrl: arguments[4],
            fileFormat: arguments[5],
            displayRects: arguments[6],
            minLevel: arguments[7],
            maxLevel: arguments[8]
        },
        this._levelRects = {},
        this.tilesUrl = f.tilesUrl,
        this.fileFormat = f.fileFormat,
        this.displayRects = f.displayRects,
        this.displayRects)
            for (c = this.displayRects.length - 1; c >= 0; c--)
                for (d = this.displayRects[c],
                e = d.minLevel; e <= d.maxLevel; e++)
                    this._levelRects[e] || (this._levelRects[e] = []),
                    this._levelRects[e].push(d);
        a.TileSource.apply(this, [f])
    }
    ,
    a.extend(a.DziTileSource.prototype, a.TileSource.prototype, {
        supports: function(a) {
            var b;
            return a.Image ? b = a.Image.xmlns : a.documentElement && ("Image" == a.documentElement.localName || "Image" == a.documentElement.tagName) && (b = a.documentElement.namespaceURI),
            "http://schemas.microsoft.com/deepzoom/2008" == b || "http://schemas.microsoft.com/deepzoom/2009" == b
        },
        configure: function(d, e) {
            var f;
            return f = a.isPlainObject(d) ? c(this, d) : b(this, d),
            e && !f.tilesUrl && (f.tilesUrl = e.replace(/([^\/]+)\.(dzi|xml|js)(\?.*|$)/, "$1_files/"),
            f.queryParams = -1 != e.search(/\.(dzi|xml|js)\?/) ? e.match(/\?.*/) : ""),
            f
        },
        getTileUrl: function(a, b, c) {
            return [this.tilesUrl, a, "/", b, "_", c, ".", this.fileFormat, this.queryParams].join("")
        },
        tileExists: function(a, b, c) {
            var d, e, f, g, h, i, j, k = this._levelRects[a];
            if (!k || !k.length)
                return !0;
            for (j = k.length - 1; j >= 0; j--)
                if (d = k[j],
                !(a < d.minLevel || a > d.maxLevel) && (e = this.getLevelScale(a),
                f = d.x * e,
                g = d.y * e,
                h = f + d.width * e,
                i = g + d.height * e,
                f = Math.floor(f / this.tileSize),
                g = Math.floor(g / this.tileSize),
                h = Math.ceil(h / this.tileSize),
                i = Math.ceil(i / this.tileSize),
                b >= f && h > b && c >= g && i > c))
                    return !0;
            return !1
        }
    })
}(OpenSeadragon),
function(a) {
    function b(b) {
        if (!b || !b.documentElement)
            throw new Error(a.getString("Errors.Xml"));
        var d = b.documentElement
          , e = d.tagName
          , f = null;
        if ("info" == e)
            try {
                return f = {},
                c(d, f),
                f
            } catch (g) {
                throw g instanceof Error ? g : new Error(a.getString("Errors.IIIF"))
            }
        throw new Error(a.getString("Errors.IIIF"))
    }
    function c(b, d, e) {
        var f, g;
        if (3 == b.nodeType && e)
            g = b.nodeValue.trim(),
            g.match(/^\d*$/) && (g = Number(g)),
            d[e] ? (a.isArray(d[e]) || (d[e] = [d[e]]),
            d[e].push(g)) : d[e] = g;
        else if (1 == b.nodeType)
            for (f = 0; f < b.childNodes.length; f++)
                c(b.childNodes[f], d, b.nodeName)
    }
    a.IIIFTileSource = function(b) {
        if (a.extend(!0, this, b),
        !(this.height && this.width && this["@id"]))
            throw new Error("IIIF required parameters not provided.");
        if (b.tileSizePerScaleFactor = {},
        this.tile_width)
            b.tileSize = this.tile_width;
        else if (this.tile_height)
            b.tileSize = this.tile_height;
        else if (this.tiles)
            if (1 == this.tiles.length)
                b.tileSize = this.tiles[0].width,
                this.scale_factors = this.tiles[0].scaleFactors;
            else {
                this.scale_factors = [];
                for (var c = 0; c < this.tiles.length; c++)
                    for (var d = 0; d < this.tiles[c].scaleFactors.length; d++) {
                        var e = this.tiles[c].scaleFactors[d];
                        this.scale_factors.push(e),
                        b.tileSizePerScaleFactor[e] = this.tiles[c].width
                    }
            }
        else {
            for (var f = Math.min(this.height, this.width), g = [256, 512, 1024], h = [], i = 0; i < g.length; i++)
                g[i] <= f && h.push(g[i]);
            b.tileSize = h.length > 0 ? Math.max.apply(null, h) : f,
            this.tile_width = b.tileSize,
            this.tile_height = b.tileSize
        }
        b.maxLevel || (b.maxLevel = this.scale_factors ? Math.floor(Math.pow(Math.max.apply(null, this.scale_factors), .5)) : Number(Math.ceil(Math.log(Math.max(this.width, this.height), 2)))),
        a.TileSource.apply(this, [b])
    }
    ,
    a.extend(a.IIIFTileSource.prototype, a.TileSource.prototype, {
        supports: function(a) {
            return a.protocol && "http://iiif.io/api/image" == a.protocol ? !0 : !a["@context"] || "http://library.stanford.edu/iiif/image-api/1.1/context.json" != a["@context"] && "http://iiif.io/api/image/1/context.json" != a["@context"] ? a.profile && 0 === a.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html") ? !0 : a.identifier && a.width && a.height ? !0 : a.documentElement && "info" == a.documentElement.tagName && "http://library.stanford.edu/iiif/image-api/ns/" == a.documentElement.namespaceURI ? !0 : !1 : !0
        },
        configure: function(c, d) {
            if (a.isPlainObject(c))
                return c["@context"] ? c : (c["@context"] = "http://iiif.io/api/image/1.0/context.json",
                c["@id"] = d.replace("/info.json", ""),
                c);
            var e = b(c);
            return e["@context"] = "http://iiif.io/api/image/1.0/context.json",
            e["@id"] = d.replace("/info.xml", ""),
            e
        },
        getTileSize: function(a) {
            var b = Math.pow(2, this.maxLevel - a);
            return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[b] && (this.tileSize = this.tileSizePerScaleFactor[b]),
            this.tileSize
        },
        getTileUrl: function(a, b, c) {
            var d, e, f, g, h, i, j, k, l, m, n = "0", o = Math.pow(.5, this.maxLevel - a), p = Math.ceil(this.width * o), q = Math.ceil(this.height * o);
            return d = Math.ceil(this.getTileSize(a) / o),
            e = d,
            l = this["@context"].indexOf("/1.0/context.json") > -1 || this["@context"].indexOf("/1.1/context.json") > -1 || this["@context"].indexOf("/1/context.json") > -1 ? "native.jpg" : "default.jpg",
            p < this.tile_width && q < this.tile_height ? (k = p + ",",
            f = "full") : (g = b * d,
            h = c * e,
            i = Math.min(d, this.width - g),
            j = Math.min(e, this.height - h),
            k = Math.ceil(i * o) + ",",
            f = [g, h, i, j].join(",")),
            m = [this["@id"], f, k, n, l].join("/")
        }
    })
}(OpenSeadragon),
function(a) {
    a.OsmTileSource = function(b) {
        var c;
        c = a.isPlainObject(b) ? b : {
            width: arguments[0],
            height: arguments[1],
            tileSize: arguments[2],
            tileOverlap: arguments[3],
            tilesUrl: arguments[4]
        },
        c.width && c.height || (c.width = 65572864,
        c.height = 65572864),
        c.tileSize || (c.tileSize = 256,
        c.tileOverlap = 0),
        c.tilesUrl || (c.tilesUrl = "http://tile.openstreetmap.org/"),
        c.minLevel = 8,
        a.TileSource.apply(this, [c])
    }
    ,
    a.extend(a.OsmTileSource.prototype, a.TileSource.prototype, {
        supports: function(a) {
            return a.type && "openstreetmaps" == a.type
        },
        configure: function(a) {
            return a
        },
        getTileUrl: function(a, b, c) {
            return this.tilesUrl + (a - 8) + "/" + b + "/" + c + ".png"
        }
    })
}(OpenSeadragon),
function(a) {
    a.TmsTileSource = function(b) {
        var c;
        c = a.isPlainObject(b) ? b : {
            width: arguments[0],
            height: arguments[1],
            tileSize: arguments[2],
            tileOverlap: arguments[3],
            tilesUrl: arguments[4]
        };
        var d, e = 256 * Math.ceil(c.width / 256), f = 256 * Math.ceil(c.height / 256);
        d = e > f ? e / 256 : f / 256,
        c.maxLevel = Math.ceil(Math.log(d) / Math.log(2)) - 1,
        c.tileSize = 256,
        c.width = e,
        c.height = f,
        a.TileSource.apply(this, [c])
    }
    ,
    a.extend(a.TmsTileSource.prototype, a.TileSource.prototype, {
        supports: function(a) {
            return a.type && "tiledmapservice" == a.type
        },
        configure: function(a) {
            return a
        },
        getTileUrl: function(a, b, c) {
            var d = this.getNumTiles(a).y - 1;
            return this.tilesUrl + a + "/" + b + "/" + (d - c) + ".png"
        }
    })
}(OpenSeadragon),
function(a) {
    function b(b) {
        var c, d, e = [];
        for (d = 0; d < b.length; d++)
            c = b[d],
            c.height && c.width && c.url && (c.url.toLowerCase().match(/^.*\.(png|jpg|jpeg|gif)$/) || c.mimetype && c.mimetype.toLowerCase().match(/^.*\/(png|jpg|jpeg|gif)$/)) ? e.push({
                url: c.url,
                width: Number(c.width),
                height: Number(c.height)
            }) : a.console.error("Unsupported image format: %s", c.url ? c.url : "<no URL>");
        return e.sort(function(a, b) {
            return a.height - b.height
        })
    }
    function c(b, c) {
        if (!c || !c.documentElement)
            throw new Error(a.getString("Errors.Xml"));
        var e, f, g = c.documentElement, h = g.tagName, i = null, j = [];
        if ("image" == h)
            try {
                for (i = {
                    type: g.getAttribute("type"),
                    levels: []
                },
                j = g.getElementsByTagName("level"),
                f = 0; f < j.length; f++)
                    e = j[f],
                    i.levels.push({
                        url: e.getAttribute("url"),
                        width: parseInt(e.getAttribute("width"), 10),
                        height: parseInt(e.getAttribute("height"), 10)
                    });
                return d(b, i)
            } catch (k) {
                throw k instanceof Error ? k : new Error("Unknown error parsing Legacy Image Pyramid XML.")
            }
        else {
            if ("collection" == h)
                throw new Error("Legacy Image Pyramid Collections not yet supported.");
            if ("error" == h)
                throw new Error("Error: " + c)
        }
        throw new Error("Unknown element " + h)
    }
    function d(a, b) {
        return b.levels
    }
    a.LegacyTileSource = function(c) {
        var d, e, f;
        a.isArray(c) && (d = {
            type: "legacy-image-pyramid",
            levels: c
        }),
        d.levels = b(d.levels),
        d.levels.length > 0 ? (e = d.levels[d.levels.length - 1].width,
        f = d.levels[d.levels.length - 1].height) : (e = 0,
        f = 0,
        a.console.error("No supported image formats found")),
        a.extend(!0, d, {
            width: e,
            height: f,
            tileSize: Math.max(f, e),
            tileOverlap: 0,
            minLevel: 0,
            maxLevel: d.levels.length > 0 ? d.levels.length - 1 : 0
        }),
        a.TileSource.apply(this, [d]),
        this.levels = d.levels
    }
    ,
    a.extend(a.LegacyTileSource.prototype, a.TileSource.prototype, {
        supports: function(a) {
            return a.type && "legacy-image-pyramid" == a.type || a.documentElement && "legacy-image-pyramid" == a.documentElement.getAttribute("type")
        },
        configure: function(b) {
            var e;
            return e = a.isPlainObject(b) ? d(this, b) : c(this, b)
        },
        getLevelScale: function(a) {
            var b = 0 / 0;
            return this.levels.length > 0 && a >= this.minLevel && a <= this.maxLevel && (b = this.levels[a].width / this.levels[this.maxLevel].width),
            b
        },
        getNumTiles: function(b) {
            var c = this.getLevelScale(b);
            return c ? new a.Point(1,1) : new a.Point(0,0)
        },
        getTileAtPoint: function() {
            return new a.Point(0,0)
        },
        getTileUrl: function(a) {
            var b = null;
            return this.levels.length > 0 && a >= this.minLevel && a <= this.maxLevel && (b = this.levels[a].url),
            b
        }
    })
}(OpenSeadragon),
function(a) {
    a.TileSourceCollection = function(b) {
        var c;
        c = a.isPlainObject(b) ? b : {
            tileSize: arguments[0],
            tileSources: arguments[1],
            rows: arguments[2],
            layout: arguments[3]
        },
        c.layout || (c.layout = "horizontal");
        var d = 0
          , e = 1
          , f = Math.ceil(c.tileSources.length / c.rows)
          , g = f >= c.rows ? f : c.rows;
        for ("horizontal" == c.layout ? (c.width = c.tileSize * f,
        c.height = c.tileSize * c.rows) : (c.height = c.tileSize * f,
        c.width = c.tileSize * c.rows),
        c.tileOverlap = -c.tileMargin,
        c.tilesPerRow = f; e < c.tileSize * g; )
            e = 2 * e,
            d++;
        c.minLevel = d,
        a.TileSource.apply(this, [c])
    }
    ,
    a.extend(a.TileSourceCollection.prototype, a.TileSource.prototype, {
        getTileBounds: function(b, c, d) {
            var e = this.dimensions.times(this.getLevelScale(b))
              , f = this.tileSize * c - this.tileOverlap
              , g = this.tileSize * d - this.tileOverlap
              , h = this.tileSize + 1 * this.tileOverlap
              , i = this.tileSize + 1 * this.tileOverlap
              , j = 1 / e.x;
            return h = Math.min(h, e.x - f),
            i = Math.min(i, e.y - g),
            new a.Rect(f * j,g * j,h * j,i * j)
        },
        configure: function() {},
        getTileUrl: function() {
            return null
        }
    })
}(OpenSeadragon),
function(a) {
    function b(b) {
        a.requestAnimationFrame(function() {
            c(b)
        })
    }
    function c(c) {
        var d, e, f;
        c.shouldFade && (d = a.now(),
        e = d - c.fadeBeginTime,
        f = 1 - e / c.fadeLength,
        f = Math.min(1, f),
        f = Math.max(0, f),
        c.imgGroup && a.setElementOpacity(c.imgGroup, f, !0),
        f > 0 && b(c))
    }
    function d(c) {
        c.shouldFade = !0,
        c.fadeBeginTime = a.now() + c.fadeDelay,
        window.setTimeout(function() {
            b(c)
        }, c.fadeDelay)
    }
    function e(b) {
        b.shouldFade = !1,
        b.imgGroup && a.setElementOpacity(b.imgGroup, 1, !0)
    }
    function f(b, c) {
        b.element.disabled || (c >= a.ButtonState.GROUP && b.currentState == a.ButtonState.REST && (e(b),
        b.currentState = a.ButtonState.GROUP),
        c >= a.ButtonState.HOVER && b.currentState == a.ButtonState.GROUP && (b.imgHover && (b.imgHover.style.visibility = ""),
        b.currentState = a.ButtonState.HOVER),
        c >= a.ButtonState.DOWN && b.currentState == a.ButtonState.HOVER && (b.imgDown && (b.imgDown.style.visibility = ""),
        b.currentState = a.ButtonState.DOWN))
    }
    function g(b, c) {
        b.element.disabled || (c <= a.ButtonState.HOVER && b.currentState == a.ButtonState.DOWN && (b.imgDown && (b.imgDown.style.visibility = "hidden"),
        b.currentState = a.ButtonState.HOVER),
        c <= a.ButtonState.GROUP && b.currentState == a.ButtonState.HOVER && (b.imgHover && (b.imgHover.style.visibility = "hidden"),
        b.currentState = a.ButtonState.GROUP),
        c <= a.ButtonState.REST && b.currentState == a.ButtonState.GROUP && (d(b),
        b.currentState = a.ButtonState.REST))
    }
    a.ButtonState = {
        REST: 0,
        GROUP: 1,
        HOVER: 2,
        DOWN: 3
    },
    a.Button = function(b) {
        var c = this;
        a.EventSource.call(this),
        a.extend(!0, this, {
            tooltip: null,
            srcRest: null,
            srcGroup: null,
            srcHover: null,
            srcDown: null,
            clickTimeThreshold: a.DEFAULT_SETTINGS.clickTimeThreshold,
            clickDistThreshold: a.DEFAULT_SETTINGS.clickDistThreshold,
            fadeDelay: 0,
            fadeLength: 2e3,
            onPress: null,
            onRelease: null,
            onClick: null,
            onEnter: null,
            onExit: null,
            onFocus: null,
            onBlur: null
        }, b),
        this.element = b.element || a.makeNeutralElement("div"),
        b.element || (this.imgRest = a.makeTransparentImage(this.srcRest),
        this.imgGroup = a.makeTransparentImage(this.srcGroup),
        this.imgHover = a.makeTransparentImage(this.srcHover),
        this.imgDown = a.makeTransparentImage(this.srcDown),
        this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip,
        this.element.style.position = "relative",
        a.setElementTouchActionNone(this.element),
        this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute",
        this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px",
        this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px",
        this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden",
        a.Browser.vendor == a.BROWSERS.FIREFOX && a.Browser.version < 3 && (this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = ""),
        this.element.appendChild(this.imgRest),
        this.element.appendChild(this.imgGroup),
        this.element.appendChild(this.imgHover),
        this.element.appendChild(this.imgDown)),
        this.addHandler("press", this.onPress),
        this.addHandler("release", this.onRelease),
        this.addHandler("click", this.onClick),
        this.addHandler("enter", this.onEnter),
        this.addHandler("exit", this.onExit),
        this.addHandler("focus", this.onFocus),
        this.addHandler("blur", this.onBlur),
        this.currentState = a.ButtonState.GROUP,
        this.fadeBeginTime = null,
        this.shouldFade = !1,
        this.element.style.display = "inline-block",
        this.element.style.position = "relative",
        this.element.title = this.tooltip,
        this.tracker = new a.MouseTracker({
            element: this.element,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            enterHandler: function(b) {
                b.insideElementPressed ? (f(c, a.ButtonState.DOWN),
                c.raiseEvent("enter", {
                    originalEvent: b.originalEvent
                })) : b.buttonDownAny || f(c, a.ButtonState.HOVER)
            },
            focusHandler: function(a) {
                this.enterHandler(a),
                c.raiseEvent("focus", {
                    originalEvent: a.originalEvent
                })
            },
            exitHandler: function(b) {
                g(c, a.ButtonState.GROUP),
                b.insideElementPressed && c.raiseEvent("exit", {
                    originalEvent: b.originalEvent
                })
            },
            blurHandler: function(a) {
                this.exitHandler(a),
                c.raiseEvent("blur", {
                    originalEvent: a.originalEvent
                })
            },
            pressHandler: function(b) {
                f(c, a.ButtonState.DOWN),
                c.raiseEvent("press", {
                    originalEvent: b.originalEvent
                })
            },
            releaseHandler: function(b) {
                b.insideElementPressed && b.insideElementReleased ? (g(c, a.ButtonState.HOVER),
                c.raiseEvent("release", {
                    originalEvent: b.originalEvent
                })) : b.insideElementPressed ? g(c, a.ButtonState.GROUP) : f(c, a.ButtonState.HOVER)
            },
            clickHandler: function(a) {
                a.quick && c.raiseEvent("click", {
                    originalEvent: a.originalEvent
                })
            },
            keyHandler: function(a) {
                return 13 === a.keyCode ? (c.raiseEvent("click", {
                    originalEvent: a.originalEvent
                }),
                c.raiseEvent("release", {
                    originalEvent: a.originalEvent
                }),
                !1) : !0
            }
        }),
        g(this, a.ButtonState.REST)
    }
    ,
    a.extend(a.Button.prototype, a.EventSource.prototype, {
        notifyGroupEnter: function() {
            f(this, a.ButtonState.GROUP)
        },
        notifyGroupExit: function() {
            g(this, a.ButtonState.REST)
        },
        disable: function() {
            this.notifyGroupExit(),
            this.element.disabled = !0,
            a.setElementOpacity(this.element, .2, !0)
        },
        enable: function() {
            this.element.disabled = !1,
            a.setElementOpacity(this.element, 1, !0),
            this.notifyGroupEnter()
        }
    })
}(OpenSeadragon),
function(a) {
    a.ButtonGroup = function(b) {
        a.extend(!0, this, {
            buttons: [],
            clickTimeThreshold: a.DEFAULT_SETTINGS.clickTimeThreshold,
            clickDistThreshold: a.DEFAULT_SETTINGS.clickDistThreshold,
            labelText: ""
        }, b);
        var c, d = this.buttons.concat([]), e = this;
        if (this.element = b.element || a.makeNeutralElement("div"),
        !b.group)
            for (this.label = a.makeNeutralElement("label"),
            this.element.style.display = "inline-block",
            this.element.appendChild(this.label),
            c = 0; c < d.length; c++)
                this.element.appendChild(d[c].element);
        a.setElementTouchActionNone(this.element),
        this.tracker = new a.MouseTracker({
            element: this.element,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            enterHandler: function() {
                var a;
                for (a = 0; a < e.buttons.length; a++)
                    e.buttons[a].notifyGroupEnter()
            },
            exitHandler: function(a) {
                var b;
                if (!a.insideElementPressed)
                    for (b = 0; b < e.buttons.length; b++)
                        e.buttons[b].notifyGroupExit()
            }
        })
    }
    ,
    a.ButtonGroup.prototype = {
        emulateEnter: function() {
            this.tracker.enterHandler({
                eventSource: this.tracker
            })
        },
        emulateExit: function() {
            this.tracker.exitHandler({
                eventSource: this.tracker
            })
        }
    }
}(OpenSeadragon),
function(a) {
    a.Rect = function(a, b, c, d) {
        this.x = "number" == typeof a ? a : 0,
        this.y = "number" == typeof b ? b : 0,
        this.width = "number" == typeof c ? c : 0,
        this.height = "number" == typeof d ? d : 0
    }
    ,
    a.Rect.prototype = {
        getAspectRatio: function() {
            return this.width / this.height
        },
        getTopLeft: function() {
            return new a.Point(this.x,this.y)
        },
        getBottomRight: function() {
            return new a.Point(this.x + this.width,this.y + this.height)
        },
        getTopRight: function() {
            return new a.Point(this.x + this.width,this.y)
        },
        getBottomLeft: function() {
            return new a.Point(this.x,this.y + this.height)
        },
        getCenter: function() {
            return new a.Point(this.x + this.width / 2,this.y + this.height / 2)
        },
        getSize: function() {
            return new a.Point(this.width,this.height)
        },
        equals: function(b) {
            return b instanceof a.Rect && this.x === b.x && this.y === b.y && this.width === b.width && this.height === b.height
        },
        times: function(a) {
            return new OpenSeadragon.Rect(this.x * a,this.y * a,this.width * a,this.height * a)
        },
        rotate: function(b, c) {
            var d, e = this.width, f = this.height;
            if (b = (b + 360) % 360,
            b % 90 !== 0)
                throw new Error("Currently only 0, 90, 180, and 270 degrees are supported.");
            if (0 === b)
                return new a.Rect(this.x,this.y,this.width,this.height);
            switch (c = c || this.getCenter(),
            b) {
            case 90:
                d = this.getBottomLeft(),
                e = this.height,
                f = this.width;
                break;
            case 180:
                d = this.getBottomRight();
                break;
            case 270:
                d = this.getTopRight(),
                e = this.height,
                f = this.width;
                break;
            default:
                d = this.getTopLeft()
            }
            return d = d.rotate(b, c),
            new a.Rect(d.x,d.y,e,f)
        },
        toString: function() {
            return "[" + Math.round(100 * this.x) + "," + Math.round(100 * this.y) + "," + Math.round(100 * this.width) + "x" + Math.round(100 * this.height) + "]"
        }
    }
}(OpenSeadragon),
function(a) {
    function b(b) {
        var c = Number(this.element.style.marginLeft.replace("px", ""))
          , e = Number(this.element.style.marginTop.replace("px", ""))
          , f = Number(this.element.style.width.replace("px", ""))
          , g = Number(this.element.style.height.replace("px", ""))
          , h = a.getElementSize(this.viewer.canvas);
        return this.dragging = !0,
        this.element && ("horizontal" == this.scroll ? -b.delta.x > 0 ? c > -(f - h.x) && (this.element.style.marginLeft = c + 2 * b.delta.x + "px",
        d(this, h.x, c + 2 * b.delta.x)) : -b.delta.x < 0 && 0 > c && (this.element.style.marginLeft = c + 2 * b.delta.x + "px",
        d(this, h.x, c + 2 * b.delta.x)) : -b.delta.y > 0 ? e > -(g - h.y) && (this.element.style.marginTop = e + 2 * b.delta.y + "px",
        d(this, h.y, e + 2 * b.delta.y)) : -b.delta.y < 0 && 0 > e && (this.element.style.marginTop = e + 2 * b.delta.y + "px",
        d(this, h.y, e + 2 * b.delta.y))),
        !1
    }
    function c(b) {
        var c = Number(this.element.style.marginLeft.replace("px", ""))
          , e = Number(this.element.style.marginTop.replace("px", ""))
          , f = Number(this.element.style.width.replace("px", ""))
          , g = Number(this.element.style.height.replace("px", ""))
          , h = a.getElementSize(this.viewer.canvas);
        return this.element && ("horizontal" == this.scroll ? b.scroll > 0 ? c > -(f - h.x) && (this.element.style.marginLeft = c - 60 * b.scroll + "px",
        d(this, h.x, c - 60 * b.scroll)) : b.scroll < 0 && 0 > c && (this.element.style.marginLeft = c - 60 * b.scroll + "px",
        d(this, h.x, c - 60 * b.scroll)) : b.scroll < 0 ? e > h.y - g && (this.element.style.marginTop = e + 60 * b.scroll + "px",
        d(this, h.y, e + 60 * b.scroll)) : b.scroll > 0 && 0 > e && (this.element.style.marginTop = e + 60 * b.scroll + "px",
        d(this, h.y, e + 60 * b.scroll))),
        !1
    }
    function d(b, c, d) {
        var e, f, g, h, i, j, k;
        for (e = "horizontal" == b.scroll ? b.panelWidth : b.panelHeight,
        f = Math.ceil(c / e) + 5,
        g = Math.ceil((Math.abs(d) + c) / e) + 1,
        f = g - f,
        f = 0 > f ? 0 : f,
        j = f; g > j && j < b.panels.length; j++)
            k = b.panels[j],
            k.activePanel || (h = new a.Viewer({
                id: k.id,
                tileSources: [b.viewer.tileSources[j]],
                element: k,
                navigatorSizeRatio: b.sizeRatio,
                showNavigator: !1,
                mouseNavEnabled: !1,
                showNavigationControl: !1,
                showSequenceControl: !1,
                immediateRender: !0,
                blendTime: 0,
                animationTime: 0
            }),
            h.displayRegion = a.makeNeutralElement("textarea"),
            h.displayRegion.id = k.id + "-displayregion",
            h.displayRegion.className = "displayregion",
            i = h.displayRegion.style,
            i.position = "relative",
            i.top = "0px",
            i.left = "0px",
            i.fontSize = "0px",
            i.overflow = "hidden",
            i.float = "left",
            i.cssFloat = "left",
            i.styleFloat = "left",
            i.zIndex = 999999999,
            i.cursor = "default",
            i.width = b.panelWidth - 4 + "px",
            i.height = b.panelHeight - 4 + "px",
            h.displayRegion.innerTracker = new a.MouseTracker({
                element: h.displayRegion,
                startDisabled: !0
            }),
            k.getElementsByTagName("div")[0].appendChild(h.displayRegion),
            k.activePanel = !0)
    }
    function e(a) {
        var b = a.eventSource.element;
        return "horizontal" == this.scroll ? b.style.marginBottom = "0px" : b.style.marginLeft = "0px",
        !1
    }
    function f(b) {
        var c = b.eventSource.element;
        return "horizontal" == this.scroll ? c.style.marginBottom = "-" + a.getElementSize(c).y / 2 + "px" : c.style.marginLeft = "-" + a.getElementSize(c).x / 2 + "px",
        !1
    }
    function g(a) {
        if (a.preventDefaultAction || a.ctrl || a.alt || a.meta)
            return !0;
        switch (a.keyCode) {
        case 38:
            return c.call(this, {
                eventSource: this.tracker,
                position: null,
                scroll: 1,
                shift: null
            }),
            !1;
        case 40:
            return c.call(this, {
                eventSource: this.tracker,
                position: null,
                scroll: -1,
                shift: null
            }),
            !1;
        case 37:
            return c.call(this, {
                eventSource: this.tracker,
                position: null,
                scroll: -1,
                shift: null
            }),
            !1;
        case 39:
            return c.call(this, {
                eventSource: this.tracker,
                position: null,
                scroll: 1,
                shift: null
            }),
            !1;
        default:
            return !0
        }
    }
    function h(a) {
        if (a.preventDefaultAction || a.ctrl || a.alt || a.meta)
            return !0;
        switch (a.keyCode) {
        case 61:
            return c.call(this, {
                eventSource: this.tracker,
                position: null,
                scroll: 1,
                shift: null
            }),
            !1;
        case 45:
            return c.call(this, {
                eventSource: this.tracker,
                position: null,
                scroll: -1,
                shift: null
            }),
            !1;
        case 48:
        case 119:
        case 87:
            return c.call(this, {
                eventSource: this.tracker,
                position: null,
                scroll: 1,
                shift: null
            }),
            !1;
        case 115:
        case 83:
            return c.call(this, {
                eventSource: this.tracker,
                position: null,
                scroll: -1,
                shift: null
            }),
            !1;
        case 97:
            return c.call(this, {
                eventSource: this.tracker,
                position: null,
                scroll: -1,
                shift: null
            }),
            !1;
        case 100:
            return c.call(this, {
                eventSource: this.tracker,
                position: null,
                scroll: 1,
                shift: null
            }),
            !1;
        default:
            return !0
        }
    }
    var i = {};
    a.ReferenceStrip = function(j) {
        var k, l, m, n = this, o = j.viewer, p = a.getElementSize(o.element);
        for (j.id || (j.id = "referencestrip-" + a.now(),
        this.element = a.makeNeutralElement("div"),
        this.element.id = j.id,
        this.element.className = "referencestrip"),
        j = a.extend(!0, {
            sizeRatio: a.DEFAULT_SETTINGS.referenceStripSizeRatio,
            position: a.DEFAULT_SETTINGS.referenceStripPosition,
            scroll: a.DEFAULT_SETTINGS.referenceStripScroll,
            clickTimeThreshold: a.DEFAULT_SETTINGS.clickTimeThreshold
        }, j, {
            element: this.element,
            showNavigator: !1,
            mouseNavEnabled: !1,
            showNavigationControl: !1,
            showSequenceControl: !1
        }),
        a.extend(this, j),
        i[this.id] = {
            animating: !1
        },
        this.minPixelRatio = this.viewer.minPixelRatio,
        l = this.element.style,
        l.marginTop = "0px",
        l.marginRight = "0px",
        l.marginBottom = "0px",
        l.marginLeft = "0px",
        l.left = "0px",
        l.bottom = "0px",
        l.border = "0px",
        l.background = "#000",
        l.position = "relative",
        a.setElementTouchActionNone(this.element),
        a.setElementOpacity(this.element, .8),
        this.viewer = o,
        this.innerTracker = new a.MouseTracker({
            element: this.element,
            dragHandler: a.delegate(this, b),
            scrollHandler: a.delegate(this, c),
            enterHandler: a.delegate(this, e),
            exitHandler: a.delegate(this, f),
            keyDownHandler: a.delegate(this, g),
            keyHandler: a.delegate(this, h)
        }),
        j.width && j.height ? (this.element.style.width = j.width + "px",
        this.element.style.height = j.height + "px",
        o.addControl(this.element, {
            anchor: a.ControlAnchor.BOTTOM_LEFT
        })) : "horizontal" == j.scroll ? (this.element.style.width = p.x * j.sizeRatio * o.tileSources.length + 12 * o.tileSources.length + "px",
        this.element.style.height = p.y * j.sizeRatio + "px",
        o.addControl(this.element, {
            anchor: a.ControlAnchor.BOTTOM_LEFT
        })) : (this.element.style.height = p.y * j.sizeRatio * o.tileSources.length + 12 * o.tileSources.length + "px",
        this.element.style.width = p.x * j.sizeRatio + "px",
        o.addControl(this.element, {
            anchor: a.ControlAnchor.TOP_LEFT
        })),
        this.panelWidth = p.x * this.sizeRatio + 8,
        this.panelHeight = p.y * this.sizeRatio + 8,
        this.panels = [],
        m = 0; m < o.tileSources.length; m++)
            k = a.makeNeutralElement("div"),
            k.id = this.element.id + "-" + m,
            k.style.width = n.panelWidth + "px",
            k.style.height = n.panelHeight + "px",
            k.style.display = "inline",
            k.style.float = "left",
            k.style.cssFloat = "left",
            k.style.styleFloat = "left",
            k.style.padding = "2px",
            a.setElementTouchActionNone(k),
            k.innerTracker = new a.MouseTracker({
                element: k,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                pressHandler: function(b) {
                    b.eventSource.dragging = a.now()
                },
                releaseHandler: function(b) {
                    var c = b.eventSource
                      , d = c.element.id
                      , e = Number(d.split("-")[2])
                      , f = a.now();
                    b.insideElementPressed && b.insideElementReleased && c.dragging && f - c.dragging < c.clickTimeThreshold && (c.dragging = null,
                    o.goToPage(e))
                }
            }),
            this.element.appendChild(k),
            k.activePanel = !1,
            this.panels.push(k);
        d(this, "vertical" == this.scroll ? p.y : p.y, 0),
        this.setFocus(0)
    }
    ,
    a.extend(a.ReferenceStrip.prototype, a.EventSource.prototype, a.Viewer.prototype, {
        setFocus: function(b) {
            var c, f = a.getElement(this.element.id + "-" + b), g = a.getElementSize(this.viewer.canvas), h = Number(this.element.style.width.replace("px", "")), i = Number(this.element.style.height.replace("px", "")), j = -Number(this.element.style.marginLeft.replace("px", "")), k = -Number(this.element.style.marginTop.replace("px", ""));
            this.currentSelected !== f && (this.currentSelected && (this.currentSelected.style.background = "#000"),
            this.currentSelected = f,
            this.currentSelected.style.background = "#999",
            "horizontal" == this.scroll ? (c = Number(b) * (this.panelWidth + 3),
            c > j + g.x - this.panelWidth ? (c = Math.min(c, h - g.x),
            this.element.style.marginLeft = -c + "px",
            d(this, g.x, -c)) : j > c && (c = Math.max(0, c - g.x / 2),
            this.element.style.marginLeft = -c + "px",
            d(this, g.x, -c))) : (c = Number(b) * (this.panelHeight + 3),
            c > k + g.y - this.panelHeight ? (c = Math.min(c, i - g.y),
            this.element.style.marginTop = -c + "px",
            d(this, g.y, -c)) : k > c && (c = Math.max(0, c - g.y / 2),
            this.element.style.marginTop = -c + "px",
            d(this, g.y, -c))),
            this.currentPage = b,
            a.getElement(f.id + "-displayregion").focus(),
            e.call(this, {
                eventSource: this.innerTracker
            }))
        },
        update: function() {
            return i[this.id].animating ? (a.console.log("image reference strip update"),
            !0) : !1
        }
    })
}(OpenSeadragon),
function(a) {
    a.DisplayRect = function(b, c, d, e, f, g) {
        a.Rect.apply(this, [b, c, d, e]),
        this.minLevel = f,
        this.maxLevel = g
    }
    ,
    a.extend(a.DisplayRect.prototype, a.Rect.prototype)
}(OpenSeadragon),
function(a) {
    function b(a, b) {
        return (1 - Math.exp(a * -b)) / (1 - Math.exp(-a))
    }
    a.Spring = function(b) {
        var c = arguments;
        "object" != typeof b && (b = {
            initial: c.length && "number" == typeof c[0] ? c[0] : 0,
            springStiffness: c.length > 1 ? c[1].springStiffness : 5,
            animationTime: c.length > 1 ? c[1].animationTime : 1.5
        }),
        a.extend(!0, this, b),
        this.current = {
            value: "number" == typeof this.initial ? this.initial : 0,
            time: a.now()
        },
        this.start = {
            value: this.current.value,
            time: this.current.time
        },
        this.target = {
            value: this.current.value,
            time: this.current.time
        }
    }
    ,
    a.Spring.prototype = {
        resetTo: function(a) {
            this.target.value = a,
            this.target.time = this.current.time,
            this.start.value = this.target.value,
            this.start.time = this.target.time
        },
        springTo: function(a) {
            this.start.value = this.current.value,
            this.start.time = this.current.time,
            this.target.value = a,
            this.target.time = this.start.time + 1e3 * this.animationTime
        },
        shiftBy: function(a) {
            this.start.value += a,
            this.target.value += a
        },
        update: function() {
            this.current.time = a.now(),
            this.current.value = this.current.time >= this.target.time ? this.target.value : this.start.value + (this.target.value - this.start.value) * b(this.springStiffness, (this.current.time - this.start.time) / (this.target.time - this.start.time))
        }
    }
}(OpenSeadragon),
function(a) {
    function b(b) {
        a.extend(!0, this, {
            timeout: a.DEFAULT_SETTINGS.timeout,
            jobId: null
        }, b),
        this.image = null
    }
    function c(a, b, c) {
        var d;
        a.jobsInProgress--,
        (!a.jobLimit || a.jobsInProgress < a.jobLimit) && a.jobQueue.length > 0 && (d = a.jobQueue.shift(),
        d.start()),
        c(b.image)
    }
    b.prototype = {
        start: function() {
            var a = this;
            this.image = new Image,
            this.crossOriginPolicy !== !1 && (this.image.crossOrigin = this.crossOriginPolicy),
            this.image.onload = function() {
                a.finish(!0)
            }
            ,
            this.image.onabort = this.image.onerror = function() {
                a.finish(!1)
            }
            ,
            this.jobId = window.setTimeout(function() {
                a.finish(!1)
            }, this.timeout),
            this.image.src = this.src
        },
        finish: function(a) {
            this.image.onload = this.image.onerror = this.image.onabort = null,
            a || (this.image = null),
            this.jobId && window.clearTimeout(this.jobId),
            this.callback(this)
        }
    },
    a.ImageLoader = function() {
        a.extend(!0, this, {
            jobLimit: a.DEFAULT_SETTINGS.imageLoaderLimit,
            jobQueue: [],
            jobsInProgress: 0
        })
    }
    ,
    a.ImageLoader.prototype = {
        addJob: function(a) {
            var d = this
              , e = function(b) {
                c(d, b, a.callback)
            }
              , f = {
                src: a.src,
                crossOriginPolicy: a.crossOriginPolicy,
                callback: e
            }
              , g = new b(f);
            !this.jobLimit || this.jobsInProgress < this.jobLimit ? (g.start(),
            this.jobsInProgress++) : this.jobQueue.push(g)
        },
        clear: function() {
            this.jobQueue = []
        }
    }
}(OpenSeadragon),
function(a) {
    var b = {};
    a.Tile = function(a, b, c, d, e, f) {
        this.level = a,
        this.x = b,
        this.y = c,
        this.bounds = d,
        this.exists = e,
        this.url = f,
        this.loaded = !1,
        this.loading = !1,
        this.element = null,
        this.imgElement = null,
        this.image = null,
        this.style = null,
        this.position = null,
        this.size = null,
        this.blendStart = null,
        this.opacity = null,
        this.distance = null,
        this.visibility = null,
        this.beingDrawn = !1,
        this.lastTouchTime = 0
    }
    ,
    a.Tile.prototype = {
        toString: function() {
            return this.level + "/" + this.x + "_" + this.y
        },
        drawHTML: function(b) {
            return this.loaded && this.image ? (this.element || (this.element = a.makeNeutralElement("div"),
            this.imgElement = a.makeNeutralElement("img"),
            this.imgElement.src = this.url,
            this.imgElement.style.msInterpolationMode = "nearest-neighbor",
            this.imgElement.style.width = "100%",
            this.imgElement.style.height = "100%",
            this.style = this.element.style,
            this.style.position = "absolute"),
            this.element.parentNode != b && b.appendChild(this.element),
            this.imgElement.parentNode != this.element && this.element.appendChild(this.imgElement),
            this.style.top = this.position.y + "px",
            this.style.left = this.position.x + "px",
            this.style.height = this.size.y + "px",
            this.style.width = this.size.x + "px",
            void a.setElementOpacity(this.element, this.opacity)) : void a.console.warn("Attempting to draw tile %s when it's not yet loaded.", this.toString())
        },
        drawCanvas: function(c, d) {
            var e, f, g = this.position, h = this.size;
            return this.loaded && (this.image || b[this.url]) ? (c.globalAlpha = this.opacity,
            1 == c.globalAlpha && this.url.match(".png") && c.clearRect(g.x + 1, g.y + 1, h.x - 2, h.y - 2),
            b[this.url] || (f = document.createElement("canvas"),
            f.width = this.image.width,
            f.height = this.image.height,
            e = f.getContext("2d"),
            e.drawImage(this.image, 0, 0),
            b[this.url] = e,
            this.image = null),
            e = b[this.url],
            d({
                context: c,
                tile: this,
                rendered: e
            }),
            void c.drawImage(e.canvas, 0, 0, e.canvas.width, e.canvas.height, g.x, g.y, h.x, h.y)) : void a.console.warn("Attempting to draw tile %s when it's not yet loaded.", this.toString())
        },
        unload: function() {
            this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement),
            this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element),
            b[this.url] && delete b[this.url],
            this.element = null,
            this.imgElement = null,
            this.image = null,
            this.loaded = !1,
            this.loading = !1
        }
    }
}(OpenSeadragon),
function(a) {
    a.OverlayPlacement = {
        CENTER: 0,
        TOP_LEFT: 1,
        TOP: 2,
        TOP_RIGHT: 3,
        RIGHT: 4,
        BOTTOM_RIGHT: 5,
        BOTTOM: 6,
        BOTTOM_LEFT: 7,
        LEFT: 8
    },
    a.Overlay = function(b, c, d) {
        var e;
        e = a.isPlainObject(b) ? b : {
            element: b,
            location: c,
            placement: d
        },
        this.element = e.element,
        this.scales = e.location instanceof a.Rect,
        this.bounds = new a.Rect(e.location.x,e.location.y,e.location.width,e.location.height),
        this.position = new a.Point(e.location.x,e.location.y),
        this.size = new a.Point(e.location.width,e.location.height),
        this.style = e.element.style,
        this.placement = e.location instanceof a.Point ? e.placement : a.OverlayPlacement.TOP_LEFT,
        this.onDraw = e.onDraw,
        this.checkResize = void 0 === e.checkResize ? !0 : e.checkResize
    }
    ,
    a.Overlay.prototype = {
        adjust: function(b, c) {
            switch (this.placement) {
            case a.OverlayPlacement.TOP_LEFT:
                break;
            case a.OverlayPlacement.TOP:
                b.x -= c.x / 2;
                break;
            case a.OverlayPlacement.TOP_RIGHT:
                b.x -= c.x;
                break;
            case a.OverlayPlacement.RIGHT:
                b.x -= c.x,
                b.y -= c.y / 2;
                break;
            case a.OverlayPlacement.BOTTOM_RIGHT:
                b.x -= c.x,
                b.y -= c.y;
                break;
            case a.OverlayPlacement.BOTTOM:
                b.x -= c.x / 2,
                b.y -= c.y;
                break;
            case a.OverlayPlacement.BOTTOM_LEFT:
                b.y -= c.y;
                break;
            case a.OverlayPlacement.LEFT:
                b.y -= c.y / 2;
                break;
            default:
            case a.OverlayPlacement.CENTER:
                b.x -= c.x / 2,
                b.y -= c.y / 2
            }
        },
        destroy: function() {
            var a = this.element
              , b = this.style;
            a.parentNode && (a.parentNode.removeChild(a),
            a.prevElementParent && (b.display = "none",
            document.body.appendChild(a))),
            this.onDraw = null,
            b.top = "",
            b.left = "",
            b.position = "",
            this.scales && (b.width = "",
            b.height = "")
        },
        drawHTML: function(b, c) {
            var d, e, f = this.element, g = this.style, h = this.scales, i = c.degrees, j = c.pixelFromPoint(this.bounds.getTopLeft(), !0);
            if (f.parentNode != b && (f.prevElementParent = f.parentNode,
            f.prevNextSibling = f.nextSibling,
            b.appendChild(f),
            this.size = a.getElementSize(f)),
            d = h ? c.deltaPixelsFromPoints(this.bounds.getSize(), !0) : this.checkResize ? a.getElementSize(f) : this.size,
            this.position = j,
            this.size = d,
            this.adjust(j, d),
            j = j.apply(Math.floor),
            d = d.apply(Math.ceil),
            0 !== i && this.scales) {
                e = new a.Point(d.x / 2,d.y / 2);
                var k = new a.Point(c.viewer.drawer.canvas.width / 2,c.viewer.drawer.canvas.height / 2);
                j = j.plus(e).rotate(i, k).minus(e),
                d = d.rotate(i, new a.Point(0,0)),
                d = new a.Point(Math.abs(d.x),Math.abs(d.y))
            }
            this.onDraw ? this.onDraw(j, d, f) : (g.left = j.x + "px",
            g.top = j.y + "px",
            g.position = "absolute",
            g.display = "block",
            h && (g.width = d.x + "px",
            g.height = d.y + "px"))
        },
        update: function(b, c) {
            this.scales = b instanceof a.Rect,
            this.bounds = new a.Rect(b.x,b.y,b.width,b.height),
            this.placement = b instanceof a.Point ? c : a.OverlayPlacement.TOP_LEFT
        }
    }
}(OpenSeadragon),
function(a) {
    function b(b) {
        b.updateAgain = !1,
        b.viewer && b.viewer.raiseEvent("update-viewport", {});
        for (var d, e, g, h, i, j, k, m, n = null, o = !1, p = a.now(), r = b.viewport.getContainerSize(), s = b.viewport.getBounds(!0), t = s.getTopLeft(), u = s.getBottomRight(), v = b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(0), !0).x, w = Math.max(b.source.minLevel, Math.floor(Math.log(b.minZoomImageRatio) / Math.log(2))), x = Math.min(Math.abs(b.source.maxLevel), Math.abs(Math.floor(Math.log(v / b.minPixelRatio) / Math.log(2)))), y = b.viewport.degrees; b.lastDrawn.length > 0; )
            d = b.lastDrawn.pop(),
            d.beingDrawn = !1;
        if (b.canvas.innerHTML = "",
        b.useCanvas && ((b.canvas.width != r.x || b.canvas.height != r.y) && (b.canvas.width = r.x,
        b.canvas.height = r.y),
        b.context.clearRect(0, 0, r.x, r.y)),
        90 === y || 270 === y) {
            var z = s.rotate(y);
            t = z.getTopLeft(),
            u = z.getBottomRight()
        } else if (0 !== y) {
            var A = s.rotate(90);
            s.x -= A.width / 2,
            s.y -= A.height / 2,
            s.width += A.width,
            s.height += A.height,
            t = s.getTopLeft(),
            u = s.getBottomRight()
        }
        if (!(!b.wrapHorizontal && (u.x < 0 || t.x > 1) || !b.wrapVertical && (u.y < 0 || t.y > b.normHeight))) {
            b.wrapHorizontal || (t.x = Math.max(t.x, 0),
            u.x = Math.min(u.x, 1)),
            b.wrapVertical || (t.y = Math.max(t.y, 0),
            u.y = Math.min(u.y, b.normHeight)),
            w = Math.min(w, x);
            var B;
            for (e = x; e >= w; e--) {
                if (B = !1,
                g = b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(e), !0).x,
                !o && g >= b.minPixelRatio || e == w)
                    B = !0,
                    o = !0;
                else if (!o)
                    continue;
                if (h = b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(e), !1).x,
                i = b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(Math.max(b.source.getClosestLevel(b.viewport.containerSize) - 1, 0)), !1).x,
                j = b.immediateRender ? 1 : i,
                k = Math.min(1, (g - .5) / .5),
                m = j / Math.abs(j - h),
                n = c(b, o, B, e, k, m, t, u, p, n),
                l(b.coverage, e))
                    break
            }
            q(b, b.lastDrawn),
            n && (f(b, n, p),
            b.updateAgain = !0)
        }
    }
    function c(a, b, c, e, f, g, h, i, j, k) {
        var l, m, n, p, q, r = a.viewport.pixelFromPoint(a.viewport.getCenter());
        for (a.viewer && a.viewer.raiseEvent("update-level", {
            havedrawn: b,
            level: e,
            opacity: f,
            visibility: g,
            topleft: h,
            bottomright: i,
            currenttime: j,
            best: k
        }),
        n = a.source.getTileAtPoint(e, h),
        p = a.source.getTileAtPoint(e, i),
        q = a.source.getNumTiles(e),
        o(a.coverage, e),
        a.wrapHorizontal || (p.x = Math.min(p.x, q.x - 1)),
        a.wrapVertical || (p.y = Math.min(p.y, q.y - 1)),
        l = n.x; l <= p.x; l++)
            for (m = n.y; m <= p.y; m++)
                k = d(a, c, b, l, m, e, f, g, r, q, j, k);
        return k
    }
    function d(a, b, c, d, f, g, h, k, l, o, q, r) {
        var s = e(d, f, g, a.source, a.tilesMatrix, q, o, a.normHeight)
          , t = b;
        if (a.viewer && a.viewer.raiseEvent("update-tile", {
            tile: s
        }),
        n(a.coverage, g, d, f, !1),
        !s.exists)
            return r;
        if (c && !t && (m(a.coverage, g, d, f) ? n(a.coverage, g, d, f, !0) : t = !0),
        !t)
            return r;
        if (i(s, a.source.tileOverlap, a.viewport, l, k),
        s.loaded) {
            var u = j(a, s, d, f, g, h, q);
            u && (a.updateAgain = !0)
        } else
            s.loading || (r = p(r, s));
        return r
    }
    function e(b, c, d, e, f, g, h, i) {
        var j, k, l, m, n, o;
        return f[d] || (f[d] = {}),
        f[d][b] || (f[d][b] = {}),
        f[d][b][c] || (j = (h.x + b % h.x) % h.x,
        k = (h.y + c % h.y) % h.y,
        l = e.getTileBounds(d, j, k),
        m = e.tileExists(d, j, k),
        n = e.getTileUrl(d, j, k),
        l.x += 1 * (b - j) / h.x,
        l.y += i * (c - k) / h.y,
        f[d][b][c] = new a.Tile(d,b,c,l,m,n)),
        o = f[d][b][c],
        o.lastTouchTime = g,
        o
    }
    function f(a, b, c) {
        a.viewport.collectionMode ? (a.midUpdate = !1,
        g(a, b, c)) : (b.loading = !0,
        a.imageLoader.addJob({
            src: b.url,
            crossOriginPolicy: a.crossOriginPolicy,
            callback: function(d) {
                g(a, b, c, d)
            }
        }))
    }
    function g(b, c, d, e) {
        if (c.loading = !1,
        e || b.viewport.collectionMode) {
            if (d < b.lastResetTime)
                return void a.console.log("Ignoring tile %s loaded before reset: %s", c, c.url)
        } else if (a.console.log("Tile %s failed to load: %s", c, c.url),
        !b.debugMode)
            return void (c.exists = !1);
        c.loaded = !0,
        c.image = e,
        b.tilesLoaded.length < b.maxImageCacheCount ? b.tilesLoaded[b.tilesLoaded.length] = c : b.midUpdate ? window.setTimeout(function() {
            h(c, b)
        }, 1) : h(c, b),
        b.updateAgain = !0
    }
    function h(a, b) {
        var c, d, e, f, g, h, i = b.tilesLoaded.length, j = (Math.ceil(Math.log(b.source.getTileSize(a.level)) / Math.log(2)),
        null), k = -1;
        for (c = b.tilesLoaded.length - 1; c >= 0; c--)
            d = b.tilesLoaded[c],
            d.level <= b.cutoff || d.beingDrawn || (j ? (e = d.lastTouchTime,
            f = j.lastTouchTime,
            g = d.level,
            h = j.level,
            (f > e || e == f && g > h) && (j = d,
            k = c)) : (j = d,
            k = c));
        j && k >= 0 && (j.unload(),
        i = k),
        b.tilesLoaded[i] = a
    }
    function i(b, c, d, e, f) {
        var g = b.bounds.getTopLeft()
          , h = b.bounds.getSize()
          , i = d.pixelFromPoint(g, !0)
          , j = d.pixelFromPoint(g, !1)
          , k = d.deltaPixelsFromPoints(h, !0)
          , l = d.deltaPixelsFromPoints(h, !1)
          , m = j.plus(l.divide(2))
          , n = e.distanceTo(m);
        c || (k = k.plus(new a.Point(1,1))),
        b.position = i,
        b.size = k,
        b.distance = n,
        b.visibility = f
    }
    function j(a, b, c, d, e, f, g) {
        var h, i, j = 1e3 * a.blendTime;
        if (b.blendStart || (b.blendStart = g),
        h = g - b.blendStart,
        i = j ? Math.min(1, h / j) : 1,
        a.alwaysBlend && (i *= f),
        b.opacity = i,
        a.lastDrawn.push(b),
        1 == i)
            n(a.coverage, e, c, d, !0);
        else if (j > h)
            return !0;
        return !1
    }
    function k(a) {
        a.tilesMatrix = {},
        a.tilesLoaded = []
    }
    function l(a, b, c, d) {
        var e, f, g, h;
        if (!a[b])
            return !1;
        if (void 0 === c || void 0 === d) {
            e = a[b];
            for (g in e)
                if (e.hasOwnProperty(g)) {
                    f = e[g];
                    for (h in f)
                        if (f.hasOwnProperty(h) && !f[h])
                            return !1
                }
            return !0
        }
        return void 0 === a[b][c] || void 0 === a[b][c][d] || a[b][c][d] === !0
    }
    function m(a, b, c, d) {
        return void 0 === c || void 0 === d ? l(a, b + 1) : l(a, b + 1, 2 * c, 2 * d) && l(a, b + 1, 2 * c, 2 * d + 1) && l(a, b + 1, 2 * c + 1, 2 * d) && l(a, b + 1, 2 * c + 1, 2 * d + 1)
    }
    function n(b, c, d, e, f) {
        return b[c] ? (b[c][d] || (b[c][d] = {}),
        void (b[c][d][e] = f)) : void a.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s", c)
    }
    function o(a, b) {
        a[b] = {}
    }
    function p(a, b) {
        return a ? b.visibility > a.visibility ? b : b.visibility == a.visibility && b.distance < a.distance ? b : a : b
    }
    function q(b, c) {
        var d, e, f, g, h, i, j, k, l = function(a) {
            b.viewer && b.viewer.raiseEvent("tile-drawing", a)
        };
        for (d = c.length - 1; d >= 0; d--) {
            if (e = c[d],
            b.viewport.collectionMode ? (f = e.x + "/" + e.y,
            h = b.viewport,
            k = h.collectionTileSource,
            b.collectionOverlays[f] ? (g = b.collectionOverlays[f],
            g.viewport && (g.viewport.resize(e.size, !0),
            g.viewport.goHome(!0))) : (i = "horizontal" == k.layout ? e.y + e.x * k.rows : e.x + e.y * k.rows,
            j = i < k.tileSources.length ? k.tileSources[i] : null,
            j && (b.collectionOverlays[f] = g = new a.Viewer({
                hash: h.viewer.hash + "-" + f,
                element: a.makeNeutralElement("div"),
                mouseNavEnabled: !1,
                showNavigator: !1,
                showSequenceControl: !1,
                showNavigationControl: !1,
                tileSources: [j]
            }),
            w && (g.element.style.border = "1px solid rgba(255,255,255,0.38)",
            g.element.style["-webkit-box-reflect"] = "below 0px -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(62%,transparent),to(rgba(255,255,255,0.62)))"),
            b.viewer.addOverlay(g.element, e.bounds)))) : (b.useCanvas ? 0 !== b.viewport.degrees ? (r(e, b.canvas, b.context, b.viewport.degrees),
            e.drawCanvas(b.context, l),
            s(e, b.canvas, b.context)) : e.drawCanvas(b.context, l) : e.drawHTML(b.canvas),
            e.beingDrawn = !0),
            b.debugMode)
                try {
                    t(b, e, c.length, d)
                } catch (m) {
                    a.console.error(m)
                }
            b.viewer && b.viewer.raiseEvent("tile-drawn", {
                tile: e
            })
        }
    }
    function r(a, b, c, d) {
        var e = b.width / 2
          , f = b.height / 2
          , g = a.position.x - e
          , h = a.position.y - f;
        c.save(),
        c.translate(e, f),
        c.rotate(Math.PI / 180 * d),
        a.position.x = g,
        a.position.y = h
    }
    function s(a, b, c) {
        var d = b.width / 2
          , e = b.height / 2
          , f = a.position.x + d
          , g = a.position.y + e;
        a.position.x = f,
        a.position.y = g,
        c.restore()
    }
    function t(a, b, c, d) {
        if (a.useCanvas) {
            a.context.save(),
            a.context.lineWidth = 2,
            a.context.font = "small-caps bold 13px ariel",
            a.context.strokeStyle = a.debugGridColor,
            a.context.fillStyle = a.debugGridColor,
            r(b, a.canvas, a.context, a.viewport.degrees),
            a.context.strokeRect(b.position.x, b.position.y, b.size.x, b.size.y);
            var e = b.position.x + b.size.x / 2
              , f = b.position.y + b.size.y / 2;
            a.context.translate(e, f),
            a.context.rotate(Math.PI / 180 * -a.viewport.degrees),
            a.context.translate(-e, -f),
            0 === b.x && 0 === b.y && (a.context.fillText("Zoom: " + a.viewport.getZoom(), b.position.x, b.position.y - 30),
            a.context.fillText("Pan: " + a.viewport.getBounds().toString(), b.position.x, b.position.y - 20)),
            a.context.fillText("Level: " + b.level, b.position.x + 10, b.position.y + 20),
            a.context.fillText("Column: " + b.x, b.position.x + 10, b.position.y + 30),
            a.context.fillText("Row: " + b.y, b.position.x + 10, b.position.y + 40),
            a.context.fillText("Order: " + d + " of " + c, b.position.x + 10, b.position.y + 50),
            a.context.fillText("Size: " + b.size.toString(), b.position.x + 10, b.position.y + 60),
            a.context.fillText("Position: " + b.position.toString(), b.position.x + 10, b.position.y + 70),
            s(b, a.canvas, a.context),
            a.context.restore()
        }
    }
    var u = (a.getWindowSize(),
    a.Browser.vendor)
      , v = a.Browser.version
      , w = u == a.BROWSERS.FIREFOX || u == a.BROWSERS.OPERA || u == a.BROWSERS.SAFARI && v >= 4 || u == a.BROWSERS.CHROME && v >= 2 || u == a.BROWSERS.IE && v >= 9;
    a.Drawer = function(b) {
        var c = arguments;
        a.isPlainObject(b) || (b = {
            source: c[0],
            viewport: c[1],
            element: c[2]
        }),
        a.extend(!0, this, {
            viewer: null,
            imageLoader: new a.ImageLoader,
            tilesMatrix: {},
            tilesLoaded: [],
            coverage: {},
            lastDrawn: [],
            lastResetTime: 0,
            midUpdate: !1,
            updateAgain: !0,
            collectionOverlays: {},
            opacity: a.DEFAULT_SETTINGS.opacity,
            maxImageCacheCount: a.DEFAULT_SETTINGS.maxImageCacheCount,
            minZoomImageRatio: a.DEFAULT_SETTINGS.minZoomImageRatio,
            wrapHorizontal: a.DEFAULT_SETTINGS.wrapHorizontal,
            wrapVertical: a.DEFAULT_SETTINGS.wrapVertical,
            immediateRender: a.DEFAULT_SETTINGS.immediateRender,
            blendTime: a.DEFAULT_SETTINGS.blendTime,
            alwaysBlend: a.DEFAULT_SETTINGS.alwaysBlend,
            minPixelRatio: a.DEFAULT_SETTINGS.minPixelRatio,
            debugMode: a.DEFAULT_SETTINGS.debugMode,
            timeout: a.DEFAULT_SETTINGS.timeout,
            crossOriginPolicy: a.DEFAULT_SETTINGS.crossOriginPolicy
        }, b),
        this.useCanvas = a.supportsCanvas && (this.viewer ? this.viewer.useCanvas : !0),
        this.container = a.getElement(this.element),
        this.canvas = a.makeNeutralElement(this.useCanvas ? "canvas" : "div"),
        this.context = this.useCanvas ? this.canvas.getContext("2d") : null,
        this.normHeight = this.source.dimensions.y / this.source.dimensions.x,
        this.element = this.container,
        this.container.dir = "ltr",
        this.canvas.style.width = "100%",
        this.canvas.style.height = "100%",
        this.canvas.style.position = "absolute",
        a.setElementOpacity(this.canvas, this.opacity, !0),
        this.container.style.textAlign = "left",
        this.container.appendChild(this.canvas)
    }
    ,
    a.Drawer.prototype = {
        addOverlay: function(b, c, d, e) {
            return a.console.error("drawer.addOverlay is deprecated. Use viewer.addOverlay instead."),
            this.viewer.addOverlay(b, c, d, e),
            this
        },
        updateOverlay: function(b, c, d) {
            return a.console.error("drawer.updateOverlay is deprecated. Use viewer.updateOverlay instead."),
            this.viewer.updateOverlay(b, c, d),
            this
        },
        removeOverlay: function(b) {
            return a.console.error("drawer.removeOverlay is deprecated. Use viewer.removeOverlay instead."),
            this.viewer.removeOverlay(b),
            this
        },
        clearOverlays: function() {
            return a.console.error("drawer.clearOverlays is deprecated. Use viewer.clearOverlays instead."),
            this.viewer.clearOverlays(),
            this
        },
        setOpacity: function(b) {
            return this.opacity = b,
            a.setElementOpacity(this.canvas, this.opacity, !0),
            this
        },
        getOpacity: function() {
            return this.opacity
        },
        needsUpdate: function() {
            return this.updateAgain
        },
        numTilesLoaded: function() {
            return this.tilesLoaded.length
        },
        reset: function() {
            return k(this),
            this.lastResetTime = a.now(),
            this.updateAgain = !0,
            this
        },
        update: function() {
            return this.midUpdate = !0,
            b(this),
            this.midUpdate = !1,
            this
        },
        canRotate: function() {
            return this.useCanvas
        },
        destroy: function() {
            for (var a = 0; a < this.tilesLoaded.length; ++a)
                this.tilesLoaded[a].unload();
            this.canvas.width = 1,
            this.canvas.height = 1
        }
    }
}(OpenSeadragon),
function(a) {
    a.Viewport = function(b) {
        var c = arguments;
        c.length && c[0]instanceof a.Point && (b = {
            containerSize: c[0],
            contentSize: c[1],
            config: c[2]
        }),
        b.config && (a.extend(!0, b, b.config),
        delete b.config),
        a.extend(!0, this, {
            containerSize: null,
            contentSize: null,
            zoomPoint: null,
            viewer: null,
            springStiffness: a.DEFAULT_SETTINGS.springStiffness,
            animationTime: a.DEFAULT_SETTINGS.animationTime,
            minZoomImageRatio: a.DEFAULT_SETTINGS.minZoomImageRatio,
            maxZoomPixelRatio: a.DEFAULT_SETTINGS.maxZoomPixelRatio,
            visibilityRatio: a.DEFAULT_SETTINGS.visibilityRatio,
            wrapHorizontal: a.DEFAULT_SETTINGS.wrapHorizontal,
            wrapVertical: a.DEFAULT_SETTINGS.wrapVertical,
            defaultZoomLevel: a.DEFAULT_SETTINGS.defaultZoomLevel,
            minZoomLevel: a.DEFAULT_SETTINGS.minZoomLevel,
            maxZoomLevel: a.DEFAULT_SETTINGS.maxZoomLevel,
            degrees: a.DEFAULT_SETTINGS.degrees,
            homeFillsViewer: a.DEFAULT_SETTINGS.homeFillsViewer
        }, b),
        this.centerSpringX = new a.Spring({
            initial: 0,
            springStiffness: this.springStiffness,
            animationTime: this.animationTime
        }),
        this.centerSpringY = new a.Spring({
            initial: 0,
            springStiffness: this.springStiffness,
            animationTime: this.animationTime
        }),
        this.zoomSpring = new a.Spring({
            initial: 1,
            springStiffness: this.springStiffness,
            animationTime: this.animationTime
        }),
        this.resetContentSize(this.contentSize),
        this.goHome(!0),
        this.update()
    }
    ,
    a.Viewport.prototype = {
        resetContentSize: function(b) {
            return this.contentSize = b,
            this.contentAspectX = this.contentSize.x / this.contentSize.y,
            this.contentAspectY = this.contentSize.y / this.contentSize.x,
            this.fitWidthBounds = new a.Rect(0,0,1,this.contentAspectY),
            this.fitHeightBounds = new a.Rect(0,0,this.contentAspectY,this.contentAspectY),
            this.homeBounds = new a.Rect(0,0,1,this.contentAspectY),
            this.viewer && this.viewer.raiseEvent("reset-size", {
                contentSize: b
            }),
            this
        },
        getHomeZoom: function() {
            if (this.defaultZoomLevel)
                return this.defaultZoomLevel;
            var a = this.contentAspectX / this.getAspectRatio();
            return this.homeFillsViewer ? a >= 1 ? a : 1 : a >= 1 ? 1 : a
        },
        getHomeBounds: function() {
            var b = this.homeBounds.getCenter()
              , c = 1 / this.getHomeZoom()
              , d = c / this.getAspectRatio();
            return new a.Rect(b.x - c / 2,b.y - d / 2,c,d)
        },
        goHome: function(a) {
            return this.viewer && this.viewer.raiseEvent("home", {
                immediately: a
            }),
            this.fitBounds(this.getHomeBounds(), a)
        },
        getMinZoom: function() {
            var a = this.getHomeZoom()
              , b = this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * a;
            return Math.min(b, a)
        },
        getMaxZoom: function() {
            var a = this.maxZoomLevel ? this.maxZoomLevel : this.contentSize.x * this.maxZoomPixelRatio / this.containerSize.x;
            return Math.max(a, this.getHomeZoom())
        },
        getAspectRatio: function() {
            return this.containerSize.x / this.containerSize.y
        },
        getContainerSize: function() {
            return new a.Point(this.containerSize.x,this.containerSize.y)
        },
        getBounds: function(b) {
            var c = this.getCenter(b)
              , d = 1 / this.getZoom(b)
              , e = d / this.getAspectRatio();
            return new a.Rect(c.x - d / 2,c.y - e / 2,d,e)
        },
        getCenter: function(b) {
            var c, d, e, f, g, h, i, j, k = new a.Point(this.centerSpringX.current.value,this.centerSpringY.current.value), l = new a.Point(this.centerSpringX.target.value,this.centerSpringY.target.value);
            return b ? k : this.zoomPoint ? (c = this.pixelFromPoint(this.zoomPoint, !0),
            d = this.getZoom(),
            e = 1 / d,
            f = e / this.getAspectRatio(),
            g = new a.Rect(k.x - e / 2,k.y - f / 2,e,f),
            h = this.zoomPoint.minus(g.getTopLeft()).times(this.containerSize.x / g.width),
            i = h.minus(c),
            j = i.divide(this.containerSize.x * d),
            l.plus(j)) : l
        },
        getZoom: function(a) {
            return a ? this.zoomSpring.current.value : this.zoomSpring.target.value
        },
        _applyBoundaryConstraints: function(b, c) {
            var d, e, f, g, h, i, j = 0, k = 0, l = new a.Rect(b.x,b.y,b.width,b.height);
            return d = this.visibilityRatio * l.width,
            e = this.visibilityRatio * l.height,
            f = l.x + l.width,
            g = 1 - l.x,
            h = l.y + l.height,
            i = this.contentAspectY - l.y,
            this.wrapHorizontal || (d > f && (j = d - f),
            d > g && (j = j ? (j + g - d) / 2 : g - d)),
            this.wrapVertical || (e > h && (k = e - h),
            e > i && (k = k ? (k + i - e) / 2 : i - e)),
            (j || k || c) && (l.x += j,
            l.y += k,
            l.width > 1 && (l.x = .5 - l.width / 2),
            l.height > this.contentAspectY && (l.y = this.contentAspectY / 2 - l.height / 2)),
            this.viewer && this.viewer.raiseEvent("constrain", {
                immediately: c
            }),
            l
        },
        applyConstraints: function(a) {
            var b, c, d = this.getZoom(), e = Math.max(Math.min(d, this.getMaxZoom()), this.getMinZoom());
            return d != e && this.zoomTo(e, this.zoomPoint, a),
            b = this.getBounds(),
            c = this._applyBoundaryConstraints(b, a),
            (b.x !== c.x || b.y !== c.y || a) && this.fitBounds(c, a),
            this
        },
        ensureVisible: function(a) {
            return this.applyConstraints(a)
        },
        _fitBounds: function(b, c) {
            c = c || {};
            var d, e, f, g, h, i, j = c.immediately || !1, k = c.constraints || !1, l = this.getAspectRatio(), m = b.getCenter(), n = new a.Rect(b.x,b.y,b.width,b.height);
            return n.getAspectRatio() >= l ? (n.height = b.width / l,
            n.y = m.y - n.height / 2) : (n.width = b.height * l,
            n.x = m.x - n.width / 2),
            k && (h = n.getAspectRatio()),
            this.panTo(this.getCenter(!0), !0),
            this.zoomTo(this.getZoom(!0), null, !0),
            d = this.getBounds(),
            e = this.getZoom(),
            f = 1 / n.width,
            k && (i = Math.max(Math.min(f, this.getMaxZoom()), this.getMinZoom()),
            f !== i && (f = i,
            n.width = 1 / f,
            n.x = m.x - n.width / 2,
            n.height = n.width / h,
            n.y = m.y - n.height / 2),
            n = this._applyBoundaryConstraints(n, j)),
            f == e || n.width == d.width ? this.panTo(k ? n.getCenter() : m, j) : (g = d.getTopLeft().times(this.containerSize.x / d.width).minus(n.getTopLeft().times(this.containerSize.x / n.width)).divide(this.containerSize.x / d.width - this.containerSize.x / n.width),
            this.zoomTo(f, g, j))
        },
        fitBounds: function(a, b) {
            return this._fitBounds(a, {
                immediately: b,
                constraints: !1
            })
        },
        fitBoundsWithConstraints: function(a, b) {
            return this._fitBounds(a, {
                immediately: b,
                constraints: !0
            })
        },
        fitVertically: function(a) {
            var b = this.getCenter();
            return this.wrapHorizontal && (b.x = (1 + b.x % 1) % 1,
            this.centerSpringX.resetTo(b.x),
            this.centerSpringX.update()),
            this.wrapVertical && (b.y = (this.contentAspectY + b.y % this.contentAspectY) % this.contentAspectY,
            this.centerSpringY.resetTo(b.y),
            this.centerSpringY.update()),
            this.fitBounds(this.fitHeightBounds, a)
        },
        fitHorizontally: function(a) {
            var b = this.getCenter();
            return this.wrapHorizontal && (b.x = (this.contentAspectX + b.x % this.contentAspectX) % this.contentAspectX,
            this.centerSpringX.resetTo(b.x),
            this.centerSpringX.update()),
            this.wrapVertical && (b.y = (1 + b.y % 1) % 1,
            this.centerSpringY.resetTo(b.y),
            this.centerSpringY.update()),
            this.fitBounds(this.fitWidthBounds, a)
        },
        panBy: function(b, c) {
            var d = new a.Point(this.centerSpringX.target.value,this.centerSpringY.target.value);
            return b = b.rotate(-this.degrees, new a.Point(0,0)),
            this.panTo(d.plus(b), c)
        },
        panTo: function(a, b) {
            return b ? (this.centerSpringX.resetTo(a.x),
            this.centerSpringY.resetTo(a.y)) : (this.centerSpringX.springTo(a.x),
            this.centerSpringY.springTo(a.y)),
            this.viewer && this.viewer.raiseEvent("pan", {
                center: a,
                immediately: b
            }),
            this
        },
        zoomBy: function(b, c, d) {
            return c instanceof a.Point && !isNaN(c.x) && !isNaN(c.y) && (c = c.rotate(-this.degrees, new a.Point(this.centerSpringX.target.value,this.centerSpringY.target.value))),
            this.zoomTo(this.zoomSpring.target.value * b, c, d)
        },
        zoomTo: function(b, c, d) {
            return this.zoomPoint = c instanceof a.Point && !isNaN(c.x) && !isNaN(c.y) ? c : null,
            d ? this.zoomSpring.resetTo(b) : this.zoomSpring.springTo(b),
            this.viewer && this.viewer.raiseEvent("zoom", {
                zoom: b,
                refPoint: c,
                immediately: d
            }),
            this
        },
        setRotation: function(a) {
            return this.viewer && this.viewer.drawer.canRotate() ? (a = (a + 360) % 360,
            this.degrees = a,
            this.viewer.forceRedraw(),
            null !== this.viewer && this.viewer.raiseEvent("rotate", {
                degrees: a
            }),
            this) : this
        },
        getRotation: function() {
            return this.degrees
        },
        resize: function(b, c) {
            var d, e = this.getBounds(), f = e;
            return this.containerSize = new a.Point(b.x,b.y),
            c && (d = b.x / this.containerSize.x,
            f.width = e.width * d,
            f.height = f.width / this.getAspectRatio()),
            this.viewer && this.viewer.raiseEvent("resize", {
                newContainerSize: b,
                maintain: c
            }),
            this.fitBounds(f, !0)
        },
        update: function() {
            var a, b, c, d, e = this.centerSpringX.current.value, f = this.centerSpringY.current.value, g = this.zoomSpring.current.value;
            return this.zoomPoint && (a = this.pixelFromPoint(this.zoomPoint, !0)),
            this.zoomSpring.update(),
            this.zoomPoint && this.zoomSpring.current.value != g ? (b = this.pixelFromPoint(this.zoomPoint, !0),
            c = b.minus(a),
            d = this.deltaPointsFromPixels(c, !0),
            this.centerSpringX.shiftBy(d.x),
            this.centerSpringY.shiftBy(d.y)) : this.zoomPoint = null,
            this.centerSpringX.update(),
            this.centerSpringY.update(),
            this.centerSpringX.current.value != e || this.centerSpringY.current.value != f || this.zoomSpring.current.value != g
        },
        deltaPixelsFromPoints: function(a, b) {
            return a.times(this.containerSize.x * this.getZoom(b))
        },
        deltaPointsFromPixels: function(a, b) {
            return a.divide(this.containerSize.x * this.getZoom(b))
        },
        pixelFromPoint: function(a, b) {
            var c = this.getBounds(b);
            return a.minus(c.getTopLeft()).times(this.containerSize.x / c.width)
        },
        pointFromPixel: function(a, b) {
            var c = this.getBounds(b);
            return a.divide(this.containerSize.x / c.width).plus(c.getTopLeft())
        },
        viewportToImageCoordinates: function(b, c) {
            return 1 == arguments.length ? this.viewportToImageCoordinates(b.x, b.y) : new a.Point(b * this.contentSize.x,c * this.contentSize.y * this.contentAspectX)
        },
        imageToViewportCoordinates: function(b, c) {
            return 1 == arguments.length ? this.imageToViewportCoordinates(b.x, b.y) : new a.Point(b / this.contentSize.x,c / this.contentSize.y / this.contentAspectX)
        },
        imageToViewportRectangle: function(b, c, d, e) {
            var f, g, h;
            return 1 == arguments.length ? (h = b,
            this.imageToViewportRectangle(h.x, h.y, h.width, h.height)) : (f = this.imageToViewportCoordinates(b, c),
            g = this.imageToViewportCoordinates(d, e),
            new a.Rect(f.x,f.y,g.x,g.y))
        },
        viewportToImageRectangle: function(b, c, d, e) {
            var f, g, h;
            return 1 == arguments.length ? (h = b,
            this.viewportToImageRectangle(h.x, h.y, h.width, h.height)) : (f = this.viewportToImageCoordinates(b, c),
            g = this.viewportToImageCoordinates(d, e),
            new a.Rect(f.x,f.y,g.x,g.y))
        },
        viewerElementToImageCoordinates: function(a) {
            var b = this.pointFromPixel(a, !0);
            return this.viewportToImageCoordinates(b)
        },
        imageToViewerElementCoordinates: function(a) {
            var b = this.imageToViewportCoordinates(a);
            return this.pixelFromPoint(b, !0)
        },
        windowToImageCoordinates: function(a) {
            var b = a.minus(OpenSeadragon.getElementPosition(this.viewer.element));
            return this.viewerElementToImageCoordinates(b)
        },
        imageToWindowCoordinates: function(a) {
            var b = this.imageToViewerElementCoordinates(a);
            return b.plus(OpenSeadragon.getElementPosition(this.viewer.element))
        },
        viewerElementToViewportCoordinates: function(a) {
            return this.pointFromPixel(a, !0)
        },
        viewportToViewerElementCoordinates: function(a) {
            return this.pixelFromPoint(a, !0)
        },
        windowToViewportCoordinates: function(a) {
            var b = a.minus(OpenSeadragon.getElementPosition(this.viewer.element));
            return this.viewerElementToViewportCoordinates(b)
        },
        viewportToWindowCoordinates: function(a) {
            var b = this.viewportToViewerElementCoordinates(a);
            return b.plus(OpenSeadragon.getElementPosition(this.viewer.element))
        },
        viewportToImageZoom: function(a) {
            var b = this.viewer.source.dimensions.x
              , c = this.getContainerSize().x
              , d = c / b;
            return a * d
        },
        imageToViewportZoom: function(a) {
            var b = this.viewer.source.dimensions.x
              , c = this.getContainerSize().x
              , d = b / c;
            return a * d
        }
    }
}(OpenSeadragon);
//# sourceMappingURL=openseadragon.min.js.map
