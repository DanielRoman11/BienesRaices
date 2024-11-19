(() => {
  // node_modules/.pnpm/tw-elements@1.1.0_postcss@8.4.49/node_modules/tw-elements/dist/js/tw-elements.es.min.js
  var In = /* @__PURE__ */ (() => {
    const s = {};
    let t = 1;
    return {
      set(e, i, n) {
        typeof e[i] > "u" && (e[i] = {
          key: i,
          id: t
        }, t++), s[e[i].id] = n;
      },
      get(e, i) {
        if (!e || typeof e[i] > "u")
          return null;
        const n = e[i];
        return n.key === i ? s[n.id] : null;
      },
      delete(e, i) {
        if (typeof e[i] > "u")
          return;
        const n = e[i];
        n.key === i && (delete s[n.id], delete e[i]);
      }
    };
  })();
  var A = {
    setData(s, t, e) {
      In.set(s, t, e);
    },
    getData(s, t) {
      return In.get(s, t);
    },
    removeData(s, t) {
      In.delete(s, t);
    }
  };
  var ud = 1e6;
  var pd = 1e3;
  var Ho = "transitionend";
  var _d = (s) => s == null ? `${s}` : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
  var et = (s) => {
    do
      s += Math.floor(Math.random() * ud);
    while (document.getElementById(s));
    return s;
  };
  var pc = (s) => {
    let t = s.getAttribute("data-te-target");
    if (!t || t === "#") {
      let e = s.getAttribute("href");
      if (!e || !e.includes("#") && !e.startsWith("."))
        return null;
      e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? e.trim() : null;
    }
    return t;
  };
  var lr = (s) => {
    const t = pc(s);
    return t && document.querySelector(t) ? t : null;
  };
  var te = (s) => {
    const t = pc(s);
    return t ? document.querySelector(t) : null;
  };
  var cn = (s) => {
    if (!s)
      return 0;
    let { transitionDuration: t, transitionDelay: e } = window.getComputedStyle(s);
    const i = Number.parseFloat(t), n = Number.parseFloat(e);
    return !i && !n ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * pd);
  };
  var _c = (s) => {
    s.dispatchEvent(new Event(Ho));
  };
  var Xe = (s) => !s || typeof s != "object" ? false : (typeof s.jquery < "u" && (s = s[0]), typeof s.nodeType < "u");
  var ee = (s) => Xe(s) ? s.jquery ? s[0] : s : typeof s == "string" && s.length > 0 ? document.querySelector(s) : null;
  var I = (s, t, e) => {
    Object.keys(e).forEach((i) => {
      const n = e[i], o = t[i], r = o && Xe(o) ? "element" : _d(o);
      if (!new RegExp(n).test(r))
        throw new Error(
          `${s.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`
        );
    });
  };
  var Mt = (s) => {
    if (!s || s.getClientRects().length === 0)
      return false;
    if (s.style && s.parentNode && s.parentNode.style) {
      const t = getComputedStyle(s), e = getComputedStyle(s.parentNode);
      return getComputedStyle(s).getPropertyValue("visibility") === "visible" || t.display !== "none" && e.display !== "none" && t.visibility !== "hidden";
    }
    return false;
  };
  var be = (s) => !s || s.nodeType !== Node.ELEMENT_NODE || s.classList.contains("disabled") ? true : typeof s.disabled < "u" ? s.disabled : s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false";
  var fc = (s) => {
    if (!document.documentElement.attachShadow)
      return null;
    if (typeof s.getRootNode == "function") {
      const t = s.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    }
    return s instanceof ShadowRoot ? s : s.parentNode ? fc(s.parentNode) : null;
  };
  var hn = () => function() {
  };
  var si = (s) => {
    s.offsetHeight;
  };
  var mc = () => {
    const { jQuery: s } = window;
    return s && !document.body.hasAttribute("data-te-no-jquery") ? s : null;
  };
  var Dn = [];
  var gc = (s) => {
    document.readyState === "loading" ? (Dn.length || document.addEventListener("DOMContentLoaded", () => {
      Dn.forEach((t) => t());
    }), Dn.push(s)) : s();
  };
  var W = () => document.documentElement.dir === "rtl";
  var $ = (s) => document.createElement(s);
  var ge = (s) => {
    typeof s == "function" && s();
  };
  var bc = (s, t, e = true) => {
    if (!e) {
      ge(s);
      return;
    }
    const i = 5, n = cn(t) + i;
    let o = false;
    const r = ({ target: a }) => {
      a === t && (o = true, t.removeEventListener(Ho, r), ge(s));
    };
    t.addEventListener(Ho, r), setTimeout(() => {
      o || _c(t);
    }, n);
  };
  var vc = (s, t, e, i) => {
    let n = s.indexOf(t);
    if (n === -1)
      return s[!e && i ? s.length - 1 : 0];
    const o = s.length;
    return n += e ? 1 : -1, i && (n = (n + o) % o), s[Math.max(0, Math.min(n, o - 1))];
  };
  var md = /[^.]*(?=\..*)\.|.*/;
  var gd = /\..*/;
  var bd = /::\d+$/;
  var $n = {};
  var Hr = 1;
  var vd = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var Td = /^(mouseenter|mouseleave)/i;
  var Tc = /* @__PURE__ */ new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
  ]);
  function Ec(s, t) {
    return t && `${t}::${Hr++}` || s.uidEvent || Hr++;
  }
  function Cc(s) {
    const t = Ec(s);
    return s.uidEvent = t, $n[t] = $n[t] || {}, $n[t];
  }
  function Ed(s, t) {
    return function e(i) {
      return i.delegateTarget = s, e.oneOff && c.off(s, i.type, t), t.apply(s, [i]);
    };
  }
  function Cd(s, t, e) {
    return function i(n) {
      const o = s.querySelectorAll(t);
      for (let { target: r } = n; r && r !== this; r = r.parentNode)
        for (let a = o.length; a--; "")
          if (o[a] === r)
            return n.delegateTarget = r, i.oneOff && c.off(s, n.type, e), e.apply(r, [n]);
      return null;
    };
  }
  function Ac(s, t, e = null) {
    const i = Object.keys(s);
    for (let n = 0, o = i.length; n < o; n++) {
      const r = s[i[n]];
      if (r.originalHandler === t && r.delegationSelector === e)
        return r;
    }
    return null;
  }
  function yc(s, t, e) {
    const i = typeof t == "string", n = i ? e : t;
    let o = wc(s);
    return Tc.has(o) || (o = s), [i, n, o];
  }
  function Vr(s, t, e, i, n) {
    if (typeof t != "string" || !s)
      return;
    if (e || (e = i, i = null), Td.test(t)) {
      const g = (m) => function(b) {
        if (!b.relatedTarget || b.relatedTarget !== b.delegateTarget && !b.delegateTarget.contains(b.relatedTarget))
          return m.call(this, b);
      };
      i ? i = g(i) : e = g(e);
    }
    const [o, r, a] = yc(
      t,
      e,
      i
    ), l = Cc(s), p = l[a] || (l[a] = {}), u = Ac(
      p,
      r,
      o ? e : null
    );
    if (u) {
      u.oneOff = u.oneOff && n;
      return;
    }
    const _ = Ec(
      r,
      t.replace(md, "")
    ), f = o ? Cd(s, e, i) : Ed(s, e);
    f.delegationSelector = o ? e : null, f.originalHandler = r, f.oneOff = n, f.uidEvent = _, p[_] = f, s.addEventListener(a, f, o);
  }
  function Vo(s, t, e, i, n) {
    const o = Ac(t[e], i, n);
    o && (s.removeEventListener(e, o, !!n), delete t[e][o.uidEvent]);
  }
  function Ad(s, t, e, i) {
    const n = t[e] || {};
    Object.keys(n).forEach((o) => {
      if (o.includes(i)) {
        const r = n[o];
        Vo(
          s,
          t,
          e,
          r.originalHandler,
          r.delegationSelector
        );
      }
    });
  }
  function wc(s) {
    return s = s.replace(gd, ""), vd[s] || s;
  }
  var c = {
    on(s, t, e, i) {
      Vr(s, t, e, i, false);
    },
    one(s, t, e, i) {
      Vr(s, t, e, i, true);
    },
    off(s, t, e, i) {
      if (typeof t != "string" || !s)
        return;
      const [n, o, r] = yc(
        t,
        e,
        i
      ), a = r !== t, l = Cc(s), p = t.startsWith(".");
      if (typeof o < "u") {
        if (!l || !l[r])
          return;
        Vo(
          s,
          l,
          r,
          o,
          n ? e : null
        );
        return;
      }
      p && Object.keys(l).forEach((_) => {
        Ad(
          s,
          l,
          _,
          t.slice(1)
        );
      });
      const u = l[r] || {};
      Object.keys(u).forEach((_) => {
        const f = _.replace(bd, "");
        if (!a || t.includes(f)) {
          const g = u[_];
          Vo(
            s,
            l,
            r,
            g.originalHandler,
            g.delegationSelector
          );
        }
      });
    },
    trigger(s, t, e) {
      if (typeof t != "string" || !s)
        return null;
      const i = mc(), n = wc(t), o = t !== n, r = Tc.has(n);
      let a, l = true, p = true, u = false, _ = null;
      return o && i && (a = i.Event(t, e), i(s).trigger(a), l = !a.isPropagationStopped(), p = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), r ? (_ = document.createEvent("HTMLEvents"), _.initEvent(n, l, true)) : _ = new CustomEvent(t, {
        bubbles: l,
        cancelable: true
      }), typeof e < "u" && Object.keys(e).forEach((f) => {
        Object.defineProperty(_, f, {
          get() {
            return e[f];
          }
        });
      }), u && _.preventDefault(), p && s.dispatchEvent(_), _.defaultPrevented && typeof a < "u" && a.preventDefault(), _;
    }
  };
  var yd = "5.1.3";
  var ft = class {
    constructor(t) {
      t = ee(t), t && (this._element = t, A.setData(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      A.removeData(this._element, this.constructor.DATA_KEY), c.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
        this[t] = null;
      });
    }
    _queueCallback(t, e, i = true) {
      bc(t, e, i);
    }
    /** Static */
    static getInstance(t) {
      return A.getData(ee(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
    }
    static get VERSION() {
      return yd;
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `te.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  };
  var st = "top";
  var ut = "bottom";
  var pt = "right";
  var nt = "left";
  var ji = "auto";
  var ni = [st, ut, pt, nt];
  var Ae = "start";
  var Ge = "end";
  var xc = "clippingParents";
  var cr = "viewport";
  var Be = "popper";
  var Oc = "reference";
  var Wo = /* @__PURE__ */ ni.reduce(function(s, t) {
    return s.concat([t + "-" + Ae, t + "-" + Ge]);
  }, []);
  var hr = /* @__PURE__ */ [].concat(ni, [ji]).reduce(function(s, t) {
    return s.concat([t, t + "-" + Ae, t + "-" + Ge]);
  }, []);
  var Sc = "beforeRead";
  var Ic = "read";
  var Dc = "afterRead";
  var $c = "beforeMain";
  var Lc = "main";
  var Nc = "afterMain";
  var Mc = "beforeWrite";
  var Rc = "write";
  var Pc = "afterWrite";
  var dn = [Sc, Ic, Dc, $c, Lc, Nc, Mc, Rc, Pc];
  function Rt(s) {
    return s ? (s.nodeName || "").toLowerCase() : null;
  }
  function _t(s) {
    if (s == null)
      return window;
    if (s.toString() !== "[object Window]") {
      var t = s.ownerDocument;
      return t && t.defaultView || window;
    }
    return s;
  }
  function ye(s) {
    var t = _t(s).Element;
    return s instanceof t || s instanceof Element;
  }
  function dt(s) {
    var t = _t(s).HTMLElement;
    return s instanceof t || s instanceof HTMLElement;
  }
  function dr(s) {
    if (typeof ShadowRoot > "u")
      return false;
    var t = _t(s).ShadowRoot;
    return s instanceof t || s instanceof ShadowRoot;
  }
  function xd(s) {
    var t = s.state;
    Object.keys(t.elements).forEach(function(e) {
      var i = t.styles[e] || {}, n = t.attributes[e] || {}, o = t.elements[e];
      !dt(o) || !Rt(o) || (Object.assign(o.style, i), Object.keys(n).forEach(function(r) {
        var a = n[r];
        a === false ? o.removeAttribute(r) : o.setAttribute(r, a === true ? "" : a);
      }));
    });
  }
  function Od(s) {
    var t = s.state, e = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
      Object.keys(t.elements).forEach(function(i) {
        var n = t.elements[i], o = t.attributes[i] || {}, r = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : e[i]), a = r.reduce(function(l, p) {
          return l[p] = "", l;
        }, {});
        !dt(n) || !Rt(n) || (Object.assign(n.style, a), Object.keys(o).forEach(function(l) {
          n.removeAttribute(l);
        }));
      });
    };
  }
  var ur = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: xd,
    effect: Od,
    requires: ["computeStyles"]
  };
  function Et(s) {
    return s.split("-")[0];
  }
  var ve = Math.max;
  var un = Math.min;
  var qe = Math.round;
  function Fo() {
    var s = navigator.userAgentData;
    return s != null && s.brands && Array.isArray(s.brands) ? s.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Bc() {
    return !/^((?!chrome|android).)*safari/i.test(Fo());
  }
  function Ze(s, t, e) {
    t === void 0 && (t = false), e === void 0 && (e = false);
    var i = s.getBoundingClientRect(), n = 1, o = 1;
    t && dt(s) && (n = s.offsetWidth > 0 && qe(i.width) / s.offsetWidth || 1, o = s.offsetHeight > 0 && qe(i.height) / s.offsetHeight || 1);
    var r = ye(s) ? _t(s) : window, a = r.visualViewport, l = !Bc() && e, p = (i.left + (l && a ? a.offsetLeft : 0)) / n, u = (i.top + (l && a ? a.offsetTop : 0)) / o, _ = i.width / n, f = i.height / o;
    return {
      width: _,
      height: f,
      top: u,
      right: p + _,
      bottom: u + f,
      left: p,
      x: p,
      y: u
    };
  }
  function pr(s) {
    var t = Ze(s), e = s.offsetWidth, i = s.offsetHeight;
    return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
      x: s.offsetLeft,
      y: s.offsetTop,
      width: e,
      height: i
    };
  }
  function Hc(s, t) {
    var e = t.getRootNode && t.getRootNode();
    if (s.contains(t))
      return true;
    if (e && dr(e)) {
      var i = t;
      do {
        if (i && s.isSameNode(i))
          return true;
        i = i.parentNode || i.host;
      } while (i);
    }
    return false;
  }
  function At(s) {
    return _t(s).getComputedStyle(s);
  }
  function Sd(s) {
    return ["table", "td", "th"].indexOf(Rt(s)) >= 0;
  }
  function ie(s) {
    return ((ye(s) ? s.ownerDocument : (
      // $FlowFixMe[prop-missing]
      s.document
    )) || window.document).documentElement;
  }
  function mn(s) {
    return Rt(s) === "html" ? s : (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      s.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      s.parentNode || // DOM Element detected
      (dr(s) ? s.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      ie(s)
    );
  }
  function Wr(s) {
    return !dt(s) || // https://github.com/popperjs/popper-core/issues/837
    At(s).position === "fixed" ? null : s.offsetParent;
  }
  function Id(s) {
    var t = /firefox/i.test(Fo()), e = /Trident/i.test(Fo());
    if (e && dt(s)) {
      var i = At(s);
      if (i.position === "fixed")
        return null;
    }
    var n = mn(s);
    for (dr(n) && (n = n.host); dt(n) && ["html", "body"].indexOf(Rt(n)) < 0; ) {
      var o = At(n);
      if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
        return n;
      n = n.parentNode;
    }
    return null;
  }
  function Ki(s) {
    for (var t = _t(s), e = Wr(s); e && Sd(e) && At(e).position === "static"; )
      e = Wr(e);
    return e && (Rt(e) === "html" || Rt(e) === "body" && At(e).position === "static") ? t : e || Id(s) || t;
  }
  function _r(s) {
    return ["top", "bottom"].indexOf(s) >= 0 ? "x" : "y";
  }
  function Mi(s, t, e) {
    return ve(s, un(t, e));
  }
  function Dd(s, t, e) {
    var i = Mi(s, t, e);
    return i > e ? e : i;
  }
  function Vc() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Wc(s) {
    return Object.assign({}, Vc(), s);
  }
  function Fc(s, t) {
    return t.reduce(function(e, i) {
      return e[i] = s, e;
    }, {});
  }
  var $d = function(t, e) {
    return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
      placement: e.placement
    })) : t, Wc(typeof t != "number" ? t : Fc(t, ni));
  };
  function Ld(s) {
    var t, e = s.state, i = s.name, n = s.options, o = e.elements.arrow, r = e.modifiersData.popperOffsets, a = Et(e.placement), l = _r(a), p = [nt, pt].indexOf(a) >= 0, u = p ? "height" : "width";
    if (!(!o || !r)) {
      var _ = $d(n.padding, e), f = pr(o), g = l === "y" ? st : nt, m = l === "y" ? ut : pt, b = e.rects.reference[u] + e.rects.reference[l] - r[l] - e.rects.popper[u], v = r[l] - e.rects.reference[l], T = Ki(o), y = T ? l === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, C = b / 2 - v / 2, E = _[g], w = y - f[u] - _[m], k = y / 2 - f[u] / 2 + C, D = Mi(E, k, w), O = l;
      e.modifiersData[i] = (t = {}, t[O] = D, t.centerOffset = D - k, t);
    }
  }
  function Nd(s) {
    var t = s.state, e = s.options, i = e.element, n = i === void 0 ? "[data-popper-arrow]" : i;
    if (n != null && !(typeof n == "string" && (n = t.elements.popper.querySelector(n), !n))) {
      if ({}.NODE_ENV !== "production" && (dt(n) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Hc(t.elements.popper, n)) {
        ({}).NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
        return;
      }
      t.elements.arrow = n;
    }
  }
  var Yc = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Ld,
    effect: Nd,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function Qe(s) {
    return s.split("-")[1];
  }
  var Md = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Rd(s, t) {
    var e = s.x, i = s.y, n = t.devicePixelRatio || 1;
    return {
      x: qe(e * n) / n || 0,
      y: qe(i * n) / n || 0
    };
  }
  function Fr(s) {
    var t, e = s.popper, i = s.popperRect, n = s.placement, o = s.variation, r = s.offsets, a = s.position, l = s.gpuAcceleration, p = s.adaptive, u = s.roundOffsets, _ = s.isFixed, f = r.x, g = f === void 0 ? 0 : f, m = r.y, b = m === void 0 ? 0 : m, v = typeof u == "function" ? u({
      x: g,
      y: b
    }) : {
      x: g,
      y: b
    };
    g = v.x, b = v.y;
    var T = r.hasOwnProperty("x"), y = r.hasOwnProperty("y"), C = nt, E = st, w = window;
    if (p) {
      var k = Ki(e), D = "clientHeight", O = "clientWidth";
      if (k === _t(e) && (k = ie(e), At(k).position !== "static" && a === "absolute" && (D = "scrollHeight", O = "scrollWidth")), k = k, n === st || (n === nt || n === pt) && o === Ge) {
        E = ut;
        var x = _ && k === w && w.visualViewport ? w.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          k[D]
        );
        b -= x - i.height, b *= l ? 1 : -1;
      }
      if (n === nt || (n === st || n === ut) && o === Ge) {
        C = pt;
        var L = _ && k === w && w.visualViewport ? w.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          k[O]
        );
        g -= L - i.width, g *= l ? 1 : -1;
      }
    }
    var S = Object.assign({
      position: a
    }, p && Md), N = u === true ? Rd({
      x: g,
      y: b
    }, _t(e)) : {
      x: g,
      y: b
    };
    if (g = N.x, b = N.y, l) {
      var P;
      return Object.assign({}, S, (P = {}, P[E] = y ? "0" : "", P[C] = T ? "0" : "", P.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)", P));
    }
    return Object.assign({}, S, (t = {}, t[E] = y ? b + "px" : "", t[C] = T ? g + "px" : "", t.transform = "", t));
  }
  function Pd(s) {
    var t = s.state, e = s.options, i = e.gpuAcceleration, n = i === void 0 ? true : i, o = e.adaptive, r = o === void 0 ? true : o, a = e.roundOffsets, l = a === void 0 ? true : a;
    if ({}.NODE_ENV !== "production") {
      var p = At(t.elements.popper).transitionProperty || "";
      r && ["transform", "top", "right", "bottom", "left"].some(function(_) {
        return p.indexOf(_) >= 0;
      }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
    var u = {
      placement: Et(t.placement),
      variation: Qe(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: n,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Fr(Object.assign({}, u, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: r,
      roundOffsets: l
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Fr(Object.assign({}, u, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: l
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  var fr = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Pd,
    data: {}
  };
  var ns = {
    passive: true
  };
  function Bd(s) {
    var t = s.state, e = s.instance, i = s.options, n = i.scroll, o = n === void 0 ? true : n, r = i.resize, a = r === void 0 ? true : r, l = _t(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return o && p.forEach(function(u) {
      u.addEventListener("scroll", e.update, ns);
    }), a && l.addEventListener("resize", e.update, ns), function() {
      o && p.forEach(function(u) {
        u.removeEventListener("scroll", e.update, ns);
      }), a && l.removeEventListener("resize", e.update, ns);
    };
  }
  var mr = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: Bd,
    data: {}
  };
  var Hd = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Ws(s) {
    return s.replace(/left|right|bottom|top/g, function(t) {
      return Hd[t];
    });
  }
  var Vd = {
    start: "end",
    end: "start"
  };
  function Yr(s) {
    return s.replace(/start|end/g, function(t) {
      return Vd[t];
    });
  }
  function gr(s) {
    var t = _t(s), e = t.pageXOffset, i = t.pageYOffset;
    return {
      scrollLeft: e,
      scrollTop: i
    };
  }
  function br(s) {
    return Ze(ie(s)).left + gr(s).scrollLeft;
  }
  function Wd(s, t) {
    var e = _t(s), i = ie(s), n = e.visualViewport, o = i.clientWidth, r = i.clientHeight, a = 0, l = 0;
    if (n) {
      o = n.width, r = n.height;
      var p = Bc();
      (p || !p && t === "fixed") && (a = n.offsetLeft, l = n.offsetTop);
    }
    return {
      width: o,
      height: r,
      x: a + br(s),
      y: l
    };
  }
  function Fd(s) {
    var t, e = ie(s), i = gr(s), n = (t = s.ownerDocument) == null ? void 0 : t.body, o = ve(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), r = ve(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -i.scrollLeft + br(s), l = -i.scrollTop;
    return At(n || e).direction === "rtl" && (a += ve(e.clientWidth, n ? n.clientWidth : 0) - o), {
      width: o,
      height: r,
      x: a,
      y: l
    };
  }
  function vr(s) {
    var t = At(s), e = t.overflow, i = t.overflowX, n = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(e + n + i);
  }
  function jc(s) {
    return ["html", "body", "#document"].indexOf(Rt(s)) >= 0 ? s.ownerDocument.body : dt(s) && vr(s) ? s : jc(mn(s));
  }
  function Ri(s, t) {
    var e;
    t === void 0 && (t = []);
    var i = jc(s), n = i === ((e = s.ownerDocument) == null ? void 0 : e.body), o = _t(i), r = n ? [o].concat(o.visualViewport || [], vr(i) ? i : []) : i, a = t.concat(r);
    return n ? a : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      a.concat(Ri(mn(r)))
    );
  }
  function Yo(s) {
    return Object.assign({}, s, {
      left: s.x,
      top: s.y,
      right: s.x + s.width,
      bottom: s.y + s.height
    });
  }
  function Yd(s, t) {
    var e = Ze(s, false, t === "fixed");
    return e.top = e.top + s.clientTop, e.left = e.left + s.clientLeft, e.bottom = e.top + s.clientHeight, e.right = e.left + s.clientWidth, e.width = s.clientWidth, e.height = s.clientHeight, e.x = e.left, e.y = e.top, e;
  }
  function jr(s, t, e) {
    return t === cr ? Yo(Wd(s, e)) : ye(t) ? Yd(t, e) : Yo(Fd(ie(s)));
  }
  function jd(s) {
    var t = Ri(mn(s)), e = ["absolute", "fixed"].indexOf(At(s).position) >= 0, i = e && dt(s) ? Ki(s) : s;
    return ye(i) ? t.filter(function(n) {
      return ye(n) && Hc(n, i) && Rt(n) !== "body";
    }) : [];
  }
  function Kd(s, t, e, i) {
    var n = t === "clippingParents" ? jd(s) : [].concat(t), o = [].concat(n, [e]), r = o[0], a = o.reduce(function(l, p) {
      var u = jr(s, p, i);
      return l.top = ve(u.top, l.top), l.right = un(u.right, l.right), l.bottom = un(u.bottom, l.bottom), l.left = ve(u.left, l.left), l;
    }, jr(s, r, i));
    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
  }
  function Kc(s) {
    var t = s.reference, e = s.element, i = s.placement, n = i ? Et(i) : null, o = i ? Qe(i) : null, r = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, l;
    switch (n) {
      case st:
        l = {
          x: r,
          y: t.y - e.height
        };
        break;
      case ut:
        l = {
          x: r,
          y: t.y + t.height
        };
        break;
      case pt:
        l = {
          x: t.x + t.width,
          y: a
        };
        break;
      case nt:
        l = {
          x: t.x - e.width,
          y: a
        };
        break;
      default:
        l = {
          x: t.x,
          y: t.y
        };
    }
    var p = n ? _r(n) : null;
    if (p != null) {
      var u = p === "y" ? "height" : "width";
      switch (o) {
        case Ae:
          l[p] = l[p] - (t[u] / 2 - e[u] / 2);
          break;
        case Ge:
          l[p] = l[p] + (t[u] / 2 - e[u] / 2);
          break;
      }
    }
    return l;
  }
  function Je(s, t) {
    t === void 0 && (t = {});
    var e = t, i = e.placement, n = i === void 0 ? s.placement : i, o = e.strategy, r = o === void 0 ? s.strategy : o, a = e.boundary, l = a === void 0 ? xc : a, p = e.rootBoundary, u = p === void 0 ? cr : p, _ = e.elementContext, f = _ === void 0 ? Be : _, g = e.altBoundary, m = g === void 0 ? false : g, b = e.padding, v = b === void 0 ? 0 : b, T = Wc(typeof v != "number" ? v : Fc(v, ni)), y = f === Be ? Oc : Be, C = s.rects.popper, E = s.elements[m ? y : f], w = Kd(ye(E) ? E : E.contextElement || ie(s.elements.popper), l, u, r), k = Ze(s.elements.reference), D = Kc({
      reference: k,
      element: C,
      strategy: "absolute",
      placement: n
    }), O = Yo(Object.assign({}, C, D)), x = f === Be ? O : k, L = {
      top: w.top - x.top + T.top,
      bottom: x.bottom - w.bottom + T.bottom,
      left: w.left - x.left + T.left,
      right: x.right - w.right + T.right
    }, S = s.modifiersData.offset;
    if (f === Be && S) {
      var N = S[n];
      Object.keys(L).forEach(function(P) {
        var ot = [pt, ut].indexOf(P) >= 0 ? 1 : -1, rt = [st, ut].indexOf(P) >= 0 ? "y" : "x";
        L[P] += N[rt] * ot;
      });
    }
    return L;
  }
  function zd(s, t) {
    t === void 0 && (t = {});
    var e = t, i = e.placement, n = e.boundary, o = e.rootBoundary, r = e.padding, a = e.flipVariations, l = e.allowedAutoPlacements, p = l === void 0 ? hr : l, u = Qe(i), _ = u ? a ? Wo : Wo.filter(function(m) {
      return Qe(m) === u;
    }) : ni, f = _.filter(function(m) {
      return p.indexOf(m) >= 0;
    });
    f.length === 0 && (f = _, {}.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
    var g = f.reduce(function(m, b) {
      return m[b] = Je(s, {
        placement: b,
        boundary: n,
        rootBoundary: o,
        padding: r
      })[Et(b)], m;
    }, {});
    return Object.keys(g).sort(function(m, b) {
      return g[m] - g[b];
    });
  }
  function Ud(s) {
    if (Et(s) === ji)
      return [];
    var t = Ws(s);
    return [Yr(s), t, Yr(t)];
  }
  function Xd(s) {
    var t = s.state, e = s.options, i = s.name;
    if (!t.modifiersData[i]._skip) {
      for (var n = e.mainAxis, o = n === void 0 ? true : n, r = e.altAxis, a = r === void 0 ? true : r, l = e.fallbackPlacements, p = e.padding, u = e.boundary, _ = e.rootBoundary, f = e.altBoundary, g = e.flipVariations, m = g === void 0 ? true : g, b = e.allowedAutoPlacements, v = t.options.placement, T = Et(v), y = T === v, C = l || (y || !m ? [Ws(v)] : Ud(v)), E = [v].concat(C).reduce(function(Oe, Vt) {
        return Oe.concat(Et(Vt) === ji ? zd(t, {
          placement: Vt,
          boundary: u,
          rootBoundary: _,
          padding: p,
          flipVariations: m,
          allowedAutoPlacements: b
        }) : Vt);
      }, []), w = t.rects.reference, k = t.rects.popper, D = /* @__PURE__ */ new Map(), O = true, x = E[0], L = 0; L < E.length; L++) {
        var S = E[L], N = Et(S), P = Qe(S) === Ae, ot = [st, ut].indexOf(N) >= 0, rt = ot ? "width" : "height", G = Je(t, {
          placement: S,
          boundary: u,
          rootBoundary: _,
          altBoundary: f,
          padding: p
        }), vt = ot ? P ? pt : nt : P ? ut : st;
        w[rt] > k[rt] && (vt = Ws(vt));
        var Ji = Ws(vt), oe = [];
        if (o && oe.push(G[N] <= 0), a && oe.push(G[vt] <= 0, G[Ji] <= 0), oe.every(function(Oe) {
          return Oe;
        })) {
          x = S, O = false;
          break;
        }
        D.set(S, oe);
      }
      if (O)
        for (var ts = m ? 3 : 1, kn = function(Vt) {
          var di = E.find(function(is) {
            var re = D.get(is);
            if (re)
              return re.slice(0, Vt).every(function(xn) {
                return xn;
              });
          });
          if (di)
            return x = di, "break";
        }, hi = ts; hi > 0; hi--) {
          var es = kn(hi);
          if (es === "break")
            break;
        }
      t.placement !== x && (t.modifiersData[i]._skip = true, t.placement = x, t.reset = true);
    }
  }
  var zc = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: Xd,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
  function Kr(s, t, e) {
    return e === void 0 && (e = {
      x: 0,
      y: 0
    }), {
      top: s.top - t.height - e.y,
      right: s.right - t.width + e.x,
      bottom: s.bottom - t.height + e.y,
      left: s.left - t.width - e.x
    };
  }
  function zr(s) {
    return [st, pt, ut, nt].some(function(t) {
      return s[t] >= 0;
    });
  }
  function Gd(s) {
    var t = s.state, e = s.name, i = t.rects.reference, n = t.rects.popper, o = t.modifiersData.preventOverflow, r = Je(t, {
      elementContext: "reference"
    }), a = Je(t, {
      altBoundary: true
    }), l = Kr(r, i), p = Kr(a, n, o), u = zr(l), _ = zr(p);
    t.modifiersData[e] = {
      referenceClippingOffsets: l,
      popperEscapeOffsets: p,
      isReferenceHidden: u,
      hasPopperEscaped: _
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": _
    });
  }
  var Uc = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Gd
  };
  function qd(s, t, e) {
    var i = Et(s), n = [nt, st].indexOf(i) >= 0 ? -1 : 1, o = typeof e == "function" ? e(Object.assign({}, t, {
      placement: s
    })) : e, r = o[0], a = o[1];
    return r = r || 0, a = (a || 0) * n, [nt, pt].indexOf(i) >= 0 ? {
      x: a,
      y: r
    } : {
      x: r,
      y: a
    };
  }
  function Zd(s) {
    var t = s.state, e = s.options, i = s.name, n = e.offset, o = n === void 0 ? [0, 0] : n, r = hr.reduce(function(u, _) {
      return u[_] = qd(_, t.rects, o), u;
    }, {}), a = r[t.placement], l = a.x, p = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += p), t.modifiersData[i] = r;
  }
  var Xc = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Zd
  };
  function Qd(s) {
    var t = s.state, e = s.name;
    t.modifiersData[e] = Kc({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement
    });
  }
  var Tr = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: Qd,
    data: {}
  };
  function Jd(s) {
    return s === "x" ? "y" : "x";
  }
  function tu(s) {
    var t = s.state, e = s.options, i = s.name, n = e.mainAxis, o = n === void 0 ? true : n, r = e.altAxis, a = r === void 0 ? false : r, l = e.boundary, p = e.rootBoundary, u = e.altBoundary, _ = e.padding, f = e.tether, g = f === void 0 ? true : f, m = e.tetherOffset, b = m === void 0 ? 0 : m, v = Je(t, {
      boundary: l,
      rootBoundary: p,
      padding: _,
      altBoundary: u
    }), T = Et(t.placement), y = Qe(t.placement), C = !y, E = _r(T), w = Jd(E), k = t.modifiersData.popperOffsets, D = t.rects.reference, O = t.rects.popper, x = typeof b == "function" ? b(Object.assign({}, t.rects, {
      placement: t.placement
    })) : b, L = typeof x == "number" ? {
      mainAxis: x,
      altAxis: x
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, x), S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = {
      x: 0,
      y: 0
    };
    if (k) {
      if (o) {
        var P, ot = E === "y" ? st : nt, rt = E === "y" ? ut : pt, G = E === "y" ? "height" : "width", vt = k[E], Ji = vt + v[ot], oe = vt - v[rt], ts = g ? -O[G] / 2 : 0, kn = y === Ae ? D[G] : O[G], hi = y === Ae ? -O[G] : -D[G], es = t.elements.arrow, Oe = g && es ? pr(es) : {
          width: 0,
          height: 0
        }, Vt = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Vc(), di = Vt[ot], is = Vt[rt], re = Mi(0, D[G], Oe[G]), xn = C ? D[G] / 2 - ts - re - di - L.mainAxis : kn - re - di - L.mainAxis, nd = C ? -D[G] / 2 + ts + re + is + L.mainAxis : hi + re + is + L.mainAxis, On = t.elements.arrow && Ki(t.elements.arrow), od = On ? E === "y" ? On.clientTop || 0 : On.clientLeft || 0 : 0, Ir = (P = S == null ? void 0 : S[E]) != null ? P : 0, rd = vt + xn - Ir - od, ad = vt + nd - Ir, Dr = Mi(g ? un(Ji, rd) : Ji, vt, g ? ve(oe, ad) : oe);
        k[E] = Dr, N[E] = Dr - vt;
      }
      if (a) {
        var $r, ld = E === "x" ? st : nt, cd = E === "x" ? ut : pt, ae = k[w], ss = w === "y" ? "height" : "width", Lr = ae + v[ld], Nr = ae - v[cd], Sn = [st, nt].indexOf(T) !== -1, Mr = ($r = S == null ? void 0 : S[w]) != null ? $r : 0, Rr = Sn ? Lr : ae - D[ss] - O[ss] - Mr + L.altAxis, Pr = Sn ? ae + D[ss] + O[ss] - Mr - L.altAxis : Nr, Br = g && Sn ? Dd(Rr, ae, Pr) : Mi(g ? Rr : Lr, ae, g ? Pr : Nr);
        k[w] = Br, N[w] = Br - ae;
      }
      t.modifiersData[i] = N;
    }
  }
  var Gc = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: tu,
    requiresIfExists: ["offset"]
  };
  function eu(s) {
    return {
      scrollLeft: s.scrollLeft,
      scrollTop: s.scrollTop
    };
  }
  function iu(s) {
    return s === _t(s) || !dt(s) ? gr(s) : eu(s);
  }
  function su(s) {
    var t = s.getBoundingClientRect(), e = qe(t.width) / s.offsetWidth || 1, i = qe(t.height) / s.offsetHeight || 1;
    return e !== 1 || i !== 1;
  }
  function nu(s, t, e) {
    e === void 0 && (e = false);
    var i = dt(t), n = dt(t) && su(t), o = ie(t), r = Ze(s, n, e), a = {
      scrollLeft: 0,
      scrollTop: 0
    }, l = {
      x: 0,
      y: 0
    };
    return (i || !i && !e) && ((Rt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    vr(o)) && (a = iu(t)), dt(t) ? (l = Ze(t, true), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = br(o))), {
      x: r.left + a.scrollLeft - l.x,
      y: r.top + a.scrollTop - l.y,
      width: r.width,
      height: r.height
    };
  }
  function ou(s) {
    var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), i = [];
    s.forEach(function(o) {
      t.set(o.name, o);
    });
    function n(o) {
      e.add(o.name);
      var r = [].concat(o.requires || [], o.requiresIfExists || []);
      r.forEach(function(a) {
        if (!e.has(a)) {
          var l = t.get(a);
          l && n(l);
        }
      }), i.push(o);
    }
    return s.forEach(function(o) {
      e.has(o.name) || n(o);
    }), i;
  }
  function ru(s) {
    var t = ou(s);
    return dn.reduce(function(e, i) {
      return e.concat(t.filter(function(n) {
        return n.phase === i;
      }));
    }, []);
  }
  function au(s) {
    var t;
    return function() {
      return t || (t = new Promise(function(e) {
        Promise.resolve().then(function() {
          t = void 0, e(s());
        });
      })), t;
    };
  }
  function Wt(s) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      e[i - 1] = arguments[i];
    return [].concat(e).reduce(function(n, o) {
      return n.replace(/%s/, o);
    }, s);
  }
  var le = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
  var lu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
  var Ur = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
  function cu(s) {
    s.forEach(function(t) {
      [].concat(Object.keys(t), Ur).filter(function(e, i, n) {
        return n.indexOf(e) === i;
      }).forEach(function(e) {
        switch (e) {
          case "name":
            typeof t.name != "string" && console.error(Wt(le, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
            break;
          case "enabled":
            typeof t.enabled != "boolean" && console.error(Wt(le, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
            break;
          case "phase":
            dn.indexOf(t.phase) < 0 && console.error(Wt(le, t.name, '"phase"', "either " + dn.join(", "), '"' + String(t.phase) + '"'));
            break;
          case "fn":
            typeof t.fn != "function" && console.error(Wt(le, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
            break;
          case "effect":
            t.effect != null && typeof t.effect != "function" && console.error(Wt(le, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
            break;
          case "requires":
            t.requires != null && !Array.isArray(t.requires) && console.error(Wt(le, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
            break;
          case "requiresIfExists":
            Array.isArray(t.requiresIfExists) || console.error(Wt(le, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
            break;
          case "options":
          case "data":
            break;
          default:
            console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Ur.map(function(i) {
              return '"' + i + '"';
            }).join(", ") + '; but "' + e + '" was provided.');
        }
        t.requires && t.requires.forEach(function(i) {
          s.find(function(n) {
            return n.name === i;
          }) == null && console.error(Wt(lu, String(t.name), i, i));
        });
      });
    });
  }
  function hu(s, t) {
    var e = /* @__PURE__ */ new Set();
    return s.filter(function(i) {
      var n = t(i);
      if (!e.has(n))
        return e.add(n), true;
    });
  }
  function du(s) {
    var t = s.reduce(function(e, i) {
      var n = e[i.name];
      return e[i.name] = n ? Object.assign({}, n, i, {
        options: Object.assign({}, n.options, i.options),
        data: Object.assign({}, n.data, i.data)
      }) : i, e;
    }, {});
    return Object.keys(t).map(function(e) {
      return t[e];
    });
  }
  var Xr = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
  var uu = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
  var Gr = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function qr() {
    for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++)
      t[e] = arguments[e];
    return !t.some(function(i) {
      return !(i && typeof i.getBoundingClientRect == "function");
    });
  }
  function gn(s) {
    s === void 0 && (s = {});
    var t = s, e = t.defaultModifiers, i = e === void 0 ? [] : e, n = t.defaultOptions, o = n === void 0 ? Gr : n;
    return function(a, l, p) {
      p === void 0 && (p = o);
      var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Gr, o),
        modifiersData: {},
        elements: {
          reference: a,
          popper: l
        },
        attributes: {},
        styles: {}
      }, _ = [], f = false, g = {
        state: u,
        setOptions: function(T) {
          var y = typeof T == "function" ? T(u.options) : T;
          b(), u.options = Object.assign({}, o, u.options, y), u.scrollParents = {
            reference: ye(a) ? Ri(a) : a.contextElement ? Ri(a.contextElement) : [],
            popper: Ri(l)
          };
          var C = ru(du([].concat(i, u.options.modifiers)));
          if (u.orderedModifiers = C.filter(function(S) {
            return S.enabled;
          }), {}.NODE_ENV !== "production") {
            var E = hu([].concat(C, u.options.modifiers), function(S) {
              var N = S.name;
              return N;
            });
            if (cu(E), Et(u.options.placement) === ji) {
              var w = u.orderedModifiers.find(function(S) {
                var N = S.name;
                return N === "flip";
              });
              w || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
            var k = At(l), D = k.marginTop, O = k.marginRight, x = k.marginBottom, L = k.marginLeft;
            [D, O, x, L].some(function(S) {
              return parseFloat(S);
            }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
          return m(), g.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function() {
          if (!f) {
            var T = u.elements, y = T.reference, C = T.popper;
            if (!qr(y, C)) {
              ({}).NODE_ENV !== "production" && console.error(Xr);
              return;
            }
            u.rects = {
              reference: nu(y, Ki(C), u.options.strategy === "fixed"),
              popper: pr(C)
            }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(S) {
              return u.modifiersData[S.name] = Object.assign({}, S.data);
            });
            for (var E = 0, w = 0; w < u.orderedModifiers.length; w++) {
              if ({}.NODE_ENV !== "production" && (E += 1, E > 100)) {
                console.error(uu);
                break;
              }
              if (u.reset === true) {
                u.reset = false, w = -1;
                continue;
              }
              var k = u.orderedModifiers[w], D = k.fn, O = k.options, x = O === void 0 ? {} : O, L = k.name;
              typeof D == "function" && (u = D({
                state: u,
                options: x,
                name: L,
                instance: g
              }) || u);
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: au(function() {
          return new Promise(function(v) {
            g.forceUpdate(), v(u);
          });
        }),
        destroy: function() {
          b(), f = true;
        }
      };
      if (!qr(a, l))
        return {}.NODE_ENV !== "production" && console.error(Xr), g;
      g.setOptions(p).then(function(v) {
        !f && p.onFirstUpdate && p.onFirstUpdate(v);
      });
      function m() {
        u.orderedModifiers.forEach(function(v) {
          var T = v.name, y = v.options, C = y === void 0 ? {} : y, E = v.effect;
          if (typeof E == "function") {
            var w = E({
              state: u,
              name: T,
              instance: g,
              options: C
            }), k = function() {
            };
            _.push(w || k);
          }
        });
      }
      function b() {
        _.forEach(function(v) {
          return v();
        }), _ = [];
      }
      return g;
    };
  }
  var pu = /* @__PURE__ */ gn();
  var _u = [mr, Tr, fr, ur];
  var fu = /* @__PURE__ */ gn({
    defaultModifiers: _u
  });
  var mu = [mr, Tr, fr, ur, Xc, zc, Gc, Yc, Uc];
  var se = /* @__PURE__ */ gn({
    defaultModifiers: mu
  });
  var qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    afterMain: Nc,
    afterRead: Dc,
    afterWrite: Pc,
    applyStyles: ur,
    arrow: Yc,
    auto: ji,
    basePlacements: ni,
    beforeMain: $c,
    beforeRead: Sc,
    beforeWrite: Mc,
    bottom: ut,
    clippingParents: xc,
    computeStyles: fr,
    createPopper: se,
    createPopperBase: pu,
    createPopperLite: fu,
    detectOverflow: Je,
    end: Ge,
    eventListeners: mr,
    flip: zc,
    hide: Uc,
    left: nt,
    main: Lc,
    modifierPhases: dn,
    offset: Xc,
    placements: hr,
    popper: Be,
    popperGenerator: gn,
    popperOffsets: Tr,
    preventOverflow: Gc,
    read: Ic,
    reference: Oc,
    right: pt,
    start: Ae,
    top: st,
    variationPlacements: Wo,
    viewport: cr,
    write: Rc
  }, Symbol.toStringTag, { value: "Module" }));
  function Ln(s) {
    return s === "true" ? true : s === "false" ? false : s === Number(s).toString() ? Number(s) : s === "" || s === "null" ? null : s;
  }
  function Nn(s) {
    return s.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  var h = {
    setDataAttribute(s, t, e) {
      s.setAttribute(`data-te-${Nn(t)}`, e);
    },
    removeDataAttribute(s, t) {
      s.removeAttribute(`data-te-${Nn(t)}`);
    },
    getDataAttributes(s) {
      if (!s)
        return {};
      const t = {};
      return Object.keys(s.dataset).filter((e) => e.startsWith("te")).forEach((e) => {
        if (e.startsWith("teClass"))
          return;
        let i = e.replace(/^te/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = Ln(s.dataset[e]);
      }), t;
    },
    getDataClassAttributes(s) {
      if (!s)
        return {};
      const t = {
        ...s.dataset
      };
      return Object.keys(t).filter((e) => e.startsWith("teClass")).forEach((e) => {
        let i = e.replace(/^teClass/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = Ln(t[e]);
      }), t;
    },
    getDataAttribute(s, t) {
      return Ln(
        s.getAttribute(`data-te-${Nn(t)}`)
      );
    },
    offset(s) {
      const t = s.getBoundingClientRect();
      return {
        top: t.top + document.body.scrollTop,
        left: t.left + document.body.scrollLeft
      };
    },
    position(s) {
      return {
        top: s.offsetTop,
        left: s.offsetLeft
      };
    },
    style(s, t) {
      Object.assign(s.style, t);
    },
    toggleClass(s, t) {
      s && Mn(t).forEach((e) => {
        s.classList.contains(e) ? s.classList.remove(e) : s.classList.add(e);
      });
    },
    addClass(s, t) {
      Mn(t).forEach(
        (e) => !s.classList.contains(e) && s.classList.add(e)
      );
    },
    addStyle(s, t) {
      Object.keys(t).forEach((e) => {
        s.style[e] = t[e];
      });
    },
    removeClass(s, t) {
      Mn(t).forEach(
        (e) => s.classList.contains(e) && s.classList.remove(e)
      );
    },
    hasClass(s, t) {
      return s.classList.contains(t);
    },
    maxOffset(s) {
      const t = s.getBoundingClientRect();
      return {
        top: t.top + Math.max(
          document.body.scrollTop,
          document.documentElement.scrollTop,
          window.scrollY
        ),
        left: t.left + Math.max(
          document.body.scrollLeft,
          document.documentElement.scrollLeft,
          window.scrollX
        )
      };
    }
  };
  function Mn(s) {
    return typeof s == "string" ? s.split(" ") : Array.isArray(s) ? s : false;
  }
  var gu = 3;
  var d = {
    closest(s, t) {
      return s.closest(t);
    },
    matches(s, t) {
      return s.matches(t);
    },
    find(s, t = document.documentElement) {
      return [].concat(
        ...Element.prototype.querySelectorAll.call(t, s)
      );
    },
    findOne(s, t = document.documentElement) {
      return Element.prototype.querySelector.call(t, s);
    },
    children(s, t) {
      return [].concat(...s.children).filter((i) => i.matches(t));
    },
    parents(s, t) {
      const e = [];
      let i = s.parentNode;
      for (; i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== gu; )
        this.matches(i, t) && e.push(i), i = i.parentNode;
      return e;
    },
    prev(s, t) {
      let e = s.previousElementSibling;
      for (; e; ) {
        if (e.matches(t))
          return [e];
        e = e.previousElementSibling;
      }
      return [];
    },
    next(s, t) {
      let e = s.nextElementSibling;
      for (; e; ) {
        if (this.matches(e, t))
          return [e];
        e = e.nextElementSibling;
      }
      return [];
    },
    focusableChildren(s) {
      const t = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]'
      ].map((e) => `${e}:not([tabindex^="-"])`).join(", ");
      return this.find(t, s).filter(
        (e) => !be(e) && Mt(e)
      );
    }
  };
  var Rn = "dropdown";
  var bu = "te.dropdown";
  var xe = `.${bu}`;
  var Er = ".data-api";
  var Fs = "Escape";
  var Zr = "Space";
  var Qr = "Tab";
  var jo = "ArrowUp";
  var Ys = "ArrowDown";
  var vu = 2;
  var Tu = new RegExp(
    `${jo}|${Ys}|${Fs}`
  );
  var Eu = `hide${xe}`;
  var Cu = `hidden${xe}`;
  var Au = `show${xe}`;
  var yu = `shown${xe}`;
  var wu = `click${xe}${Er}`;
  var Jr = `keydown${xe}${Er}`;
  var ku = `keyup${xe}${Er}`;
  var Ft = "show";
  var xu = "dropup";
  var Ou = "dropend";
  var Su = "dropstart";
  var Iu = "[data-te-navbar-ref]";
  var os = "[data-te-dropdown-toggle-ref]";
  var Pn = "[data-te-dropdown-menu-ref]";
  var Du = "[data-te-navbar-nav-ref]";
  var $u = "[data-te-dropdown-menu-ref] [data-te-dropdown-item-ref]:not(.disabled):not(:disabled)";
  var Lu = W() ? "top-end" : "top-start";
  var Nu = W() ? "top-start" : "top-end";
  var Mu = W() ? "bottom-end" : "bottom-start";
  var Ru = W() ? "bottom-start" : "bottom-end";
  var Pu = W() ? "left-start" : "right-start";
  var Bu = W() ? "right-start" : "left-start";
  var Hu = [{ opacity: "0" }, { opacity: "1" }];
  var Vu = [{ opacity: "1" }, { opacity: "0" }];
  var ta = {
    iterations: 1,
    easing: "ease",
    fill: "both"
  };
  var Wu = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: true,
    dropdownAnimation: "on",
    animationDuration: 550
  };
  var Fu = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)",
    dropdownAnimation: "string",
    animationDuration: "number"
  };
  var $t = class _$t extends ft {
    constructor(t, e) {
      super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._fadeOutAnimate = null;
      const i = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      this._animationCanPlay = this._config.dropdownAnimation === "on" && !i, this._didInit = false, this._init();
    }
    // Getters
    static get Default() {
      return Wu;
    }
    static get DefaultType() {
      return Fu;
    }
    static get NAME() {
      return Rn;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (be(this._element) || this._isShown(this._menu))
        return;
      const t = {
        relatedTarget: this._element
      };
      if (c.trigger(
        this._element,
        Au,
        t
      ).defaultPrevented)
        return;
      const i = _$t.getParentFromElement(this._element);
      this._inNavbar ? h.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i), "ontouchstart" in document.documentElement && !i.closest(Du) && [].concat(...document.body.children).forEach((n) => c.on(n, "mouseover", hn)), this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.setAttribute(`data-te-dropdown-${Ft}`, ""), this._animationCanPlay && this._menu.animate(Hu, {
        ...ta,
        duration: this._config.animationDuration
      }), this._element.setAttribute(`data-te-dropdown-${Ft}`, ""), setTimeout(
        () => {
          c.trigger(this._element, yu, t);
        },
        this._animationCanPlay ? this._config.animationDuration : 0
      );
    }
    hide() {
      if (be(this._element) || !this._isShown(this._menu))
        return;
      const t = {
        relatedTarget: this._element
      };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    // Private
    _init() {
      this._didInit || (c.on(
        document,
        Jr,
        os,
        _$t.dataApiKeydownHandler
      ), c.on(
        document,
        Jr,
        Pn,
        _$t.dataApiKeydownHandler
      ), c.on(document, wu, _$t.clearMenus), c.on(document, ku, _$t.clearMenus), this._didInit = true);
    }
    _completeHide(t) {
      this._fadeOutAnimate && this._fadeOutAnimate.playState === "running" || c.trigger(
        this._element,
        Eu,
        t
      ).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((i) => c.off(i, "mouseover", hn)), this._animationCanPlay && (this._fadeOutAnimate = this._menu.animate(Vu, {
        ...ta,
        duration: this._config.animationDuration
      })), setTimeout(
        () => {
          this._popper && this._popper.destroy(), this._menu.removeAttribute(`data-te-dropdown-${Ft}`), this._element.removeAttribute(`data-te-dropdown-${Ft}`), this._element.setAttribute("aria-expanded", "false"), h.removeDataAttribute(this._menu, "popper"), c.trigger(this._element, Cu, t);
        },
        this._animationCanPlay ? this._config.animationDuration : 0
      ));
    }
    _getConfig(t) {
      if (t = {
        ...this.constructor.Default,
        ...h.getDataAttributes(this._element),
        ...t
      }, I(Rn, t, this.constructor.DefaultType), typeof t.reference == "object" && !Xe(t.reference) && typeof t.reference.getBoundingClientRect != "function")
        throw new TypeError(
          `${Rn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper(t) {
      if (typeof qc > "u")
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let e = this._element;
      this._config.reference === "parent" ? e = t : Xe(this._config.reference) ? e = ee(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
      const i = this._getPopperConfig(), n = i.modifiers.find(
        (o) => o.name === "applyStyles" && o.enabled === false
      );
      this._popper = se(
        e,
        this._menu,
        i
      ), n && h.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t = this._element) {
      return t.dataset[`teDropdown${Ft.charAt(0).toUpperCase() + Ft.slice(1)}`] === "";
    }
    _getMenuElement() {
      return d.next(this._element, Pn)[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.dataset.teDropdownPosition === Ou)
        return Pu;
      if (t.dataset.teDropdownPosition === Su)
        return Bu;
      const e = t.dataset.teDropdownAlignment === "end";
      return t.dataset.teDropdownPosition === xu ? e ? Nu : Lu : e ? Ru : Mu;
    }
    _detectNavbar() {
      return this._element.closest(Iu) !== null;
    }
    _getOffset() {
      const { offset: t } = this._config;
      return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }
        ]
      };
      return this._config.display === "static" && (t.modifiers = [
        {
          name: "applyStyles",
          enabled: false
        }
      ]), {
        ...t,
        ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig
      };
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = d.find(
        $u,
        this._menu
      ).filter(Mt);
      i.length && vc(
        i,
        e,
        t === Ys,
        !i.includes(e)
      ).focus();
    }
    // Static
    static jQueryInterface(t) {
      return this.each(function() {
        const e = _$t.getOrCreateInstance(this, t);
        if (typeof t == "string") {
          if (typeof e[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t && (t.button === vu || t.type === "keyup" && t.key !== Qr))
        return;
      const e = d.find(os);
      for (let i = 0, n = e.length; i < n; i++) {
        const o = _$t.getInstance(e[i]);
        if (!o || o._config.autoClose === false || !o._isShown())
          continue;
        const r = {
          relatedTarget: o._element
        };
        if (t) {
          const a = t.composedPath(), l = a.includes(o._menu);
          if (a.includes(o._element) || o._config.autoClose === "inside" && !l || o._config.autoClose === "outside" && l || o._menu.contains(t.target) && (t.type === "keyup" && t.key === Qr || /input|select|option|textarea|form/i.test(t.target.tagName)))
            continue;
          t.type === "click" && (r.clickEvent = t);
        }
        o._completeHide(r);
      }
    }
    static getParentFromElement(t) {
      return te(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (/input|textarea/i.test(t.target.tagName) ? t.key === Zr || t.key !== Fs && (t.key !== Ys && t.key !== jo || t.target.closest(Pn)) : !Tu.test(t.key))
        return;
      const e = this.dataset[`teDropdown${Ft.charAt(0).toUpperCase() + Ft.slice(1)}`] === "";
      if (!e && t.key === Fs || (t.preventDefault(), t.stopPropagation(), be(this)))
        return;
      const i = this.matches(os) ? this : d.prev(this, os)[0], n = _$t.getOrCreateInstance(i);
      if (t.key === Fs) {
        n.hide();
        return;
      }
      if (t.key === jo || t.key === Ys) {
        e || n.show(), n._selectMenuItem(t);
        return;
      }
      (!e || t.key === Zr) && _$t.clearMenus();
    }
  };
  var Bn = "collapse";
  var Zc = "te.collapse";
  var bn = `.${Zc}`;
  var ea = {
    toggle: true,
    parent: null
  };
  var Yu = {
    toggle: "boolean",
    parent: "(null|element)"
  };
  var ju = `show${bn}`;
  var Ku = `shown${bn}`;
  var zu = `hide${bn}`;
  var Uu = `hidden${bn}`;
  var Hn = "data-te-collapse-show";
  var ia = "data-te-collapse-collapsed";
  var rs = "data-te-collapse-collapsing";
  var Xu = "data-te-collapse-horizontal";
  var We = "data-te-collapse-item";
  var sa = `:scope [${We}] [${We}]`;
  var Gu = "width";
  var qu = "height";
  var Zu = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]";
  var na = "[data-te-collapse-init]";
  var Qu = {
    visible: "!visible",
    hidden: "hidden",
    baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
    collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
    collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
  };
  var Ju = {
    visible: "string",
    hidden: "string",
    baseTransition: "string",
    collapsing: "string",
    collapsingHorizontal: "string"
  };
  var Qt = class _Qt extends ft {
    constructor(t, e, i) {
      super(t), this._isTransitioning = false, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._triggerArray = [];
      const n = d.find(na);
      for (let o = 0, r = n.length; o < r; o++) {
        const a = n[o], l = lr(a), p = d.find(l).filter(
          (u) => u === this._element
        );
        l !== null && p.length && (this._selector = l, this._triggerArray.push(a));
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    // Getters
    static get Default() {
      return ea;
    }
    static get NAME() {
      return Bn;
    }
    // Public
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown())
        return;
      let t = [], e;
      if (this._config.parent) {
        const u = d.find(
          sa,
          this._config.parent
        );
        t = d.find(
          Zu,
          this._config.parent
        ).filter((_) => !u.includes(_));
      }
      const i = d.findOne(this._selector);
      if (t.length) {
        const u = t.find((_) => i !== _);
        if (e = u ? _Qt.getInstance(u) : null, e && e._isTransitioning)
          return;
      }
      if (c.trigger(this._element, ju).defaultPrevented)
        return;
      t.forEach((u) => {
        i !== u && _Qt.getOrCreateInstance(u, { toggle: false }).hide(), e || A.setData(u, Zc, null);
      });
      const o = this._getDimension(), r = o === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
      h.removeClass(this._element, this._classes.visible), h.removeClass(this._element, this._classes.hidden), h.addClass(this._element, r), this._element.removeAttribute(We), this._element.setAttribute(rs, ""), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const a = () => {
        this._isTransitioning = false, h.removeClass(this._element, this._classes.hidden), h.removeClass(this._element, r), h.addClass(this._element, this._classes.visible), this._element.removeAttribute(rs), this._element.setAttribute(We, ""), this._element.setAttribute(Hn, ""), this._element.style[o] = "", c.trigger(this._element, Ku);
      }, p = `scroll${o[0].toUpperCase() + o.slice(1)}`;
      this._queueCallback(a, this._element, true), this._element.style[o] = `${this._element[p]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown() || c.trigger(this._element, zu).defaultPrevented)
        return;
      const e = this._getDimension(), i = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
      this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, si(this._element), h.addClass(this._element, i), h.removeClass(this._element, this._classes.visible), h.removeClass(this._element, this._classes.hidden), this._element.setAttribute(rs, ""), this._element.removeAttribute(We), this._element.removeAttribute(Hn);
      const n = this._triggerArray.length;
      for (let r = 0; r < n; r++) {
        const a = this._triggerArray[r], l = te(a);
        l && !this._isShown(l) && this._addAriaAndCollapsedClass([a], false);
      }
      this._isTransitioning = true;
      const o = () => {
        this._isTransitioning = false, h.removeClass(this._element, i), h.addClass(this._element, this._classes.visible), h.addClass(this._element, this._classes.hidden), this._element.removeAttribute(rs), this._element.setAttribute(We, ""), c.trigger(this._element, Uu);
      };
      this._element.style[e] = "", this._queueCallback(o, this._element, true);
    }
    _isShown(t = this._element) {
      return t.hasAttribute(Hn);
    }
    // Private
    _getConfig(t) {
      return t = {
        ...ea,
        ...h.getDataAttributes(this._element),
        ...t
      }, t.toggle = !!t.toggle, t.parent = ee(t.parent), I(Bn, t, Yu), t;
    }
    _getClasses(t) {
      const e = h.getDataClassAttributes(this._element);
      return t = {
        ...Qu,
        ...e,
        ...t
      }, I(Bn, t, Ju), t;
    }
    _getDimension() {
      return this._element.hasAttribute(Xu) ? Gu : qu;
    }
    _initializeChildren() {
      if (!this._config.parent)
        return;
      const t = d.find(
        sa,
        this._config.parent
      );
      d.find(na, this._config.parent).filter((e) => !t.includes(e)).forEach((e) => {
        const i = te(e);
        i && this._addAriaAndCollapsedClass([e], this._isShown(i));
      });
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length && t.forEach((i) => {
        e ? i.removeAttribute(ia) : i.setAttribute(`${ia}`, ""), i.setAttribute("aria-expanded", e);
      });
    }
    // Static
    static jQueryInterface(t) {
      return this.each(function() {
        const e = {};
        typeof t == "string" && /show|hide/.test(t) && (e.toggle = false);
        const i = _Qt.getOrCreateInstance(this, e);
        if (typeof t == "string") {
          if (typeof i[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }
  };
  var Qc = "backdrop";
  var aa = `mousedown.te.${Qc}`;
  var ip = "te.offcanvas";
  var oi = `.${ip}`;
  var sp = ".data-api";
  var np = `load${oi}${sp}`;
  var lp = `show${oi}`;
  var cp = `shown${oi}`;
  var hp = `hide${oi}`;
  var dp = `hidden${oi}`;
  var up = `keydown.dismiss${oi}`;
  var pp = "te.alert";
  var Jc = `.${pp}`;
  var _p = `close${Jc}`;
  var fp = `closed${Jc}`;
  var Wn = "carousel";
  var vp = "te.carousel";
  var mt = `.${vp}`;
  var th = ".data-api";
  var Tp = "ArrowLeft";
  var Ep = "ArrowRight";
  var Cp = 500;
  var Ap = 40;
  var pa = {
    interval: 5e3,
    keyboard: true,
    ride: false,
    pause: "hover",
    wrap: true,
    touch: true
  };
  var yp = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    ride: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  };
  var wp = {
    pointer: "touch-pan-y",
    block: "!block",
    visible: "data-[te-carousel-fade]:opacity-100 data-[te-carousel-fade]:z-[1]",
    invisible: "data-[te-carousel-fade]:z-0 data-[te-carousel-fade]:opacity-0 data-[te-carousel-fade]:duration-[600ms] data-[te-carousel-fade]:delay-600",
    slideRight: "translate-x-full",
    slideLeft: "-translate-x-full"
  };
  var kp = {
    pointer: "string",
    block: "string",
    visible: "string",
    invisible: "string",
    slideRight: "string",
    slideLeft: "string"
  };
  var ce = "next";
  var he = "prev";
  var fe = "left";
  var Ei = "right";
  var xp = {
    [Tp]: Ei,
    [Ep]: fe
  };
  var Op = `slide${mt}`;
  var Fn = `slid${mt}`;
  var Sp = `keydown${mt}`;
  var Ip = `mouseenter${mt}`;
  var Dp = `mouseleave${mt}`;
  var $p = `touchstart${mt}`;
  var Lp = `touchmove${mt}`;
  var Np = `touchend${mt}`;
  var Mp = `pointerdown${mt}`;
  var Rp = `pointerup${mt}`;
  var Pp = `dragstart${mt}`;
  var Bp = `load${mt}${th}`;
  var Hp = `click${mt}${th}`;
  var _a = "data-te-carousel-init";
  var de = "data-te-carousel-active";
  var Vp = "data-te-carousel-item-end";
  var Yn = "data-te-carousel-item-start";
  var Wp = "data-te-carousel-item-next";
  var Fp = "data-te-carousel-item-prev";
  var Yp = "data-te-carousel-pointer-event";
  var jp = "[data-te-carousel-init]";
  var eh = "[data-te-carousel-active]";
  var Ar = "[data-te-carousel-item]";
  var Se = `${eh}${Ar}`;
  var Kp = `${Ar} img`;
  var zp = "[data-te-carousel-item-next], [data-te-carousel-item-prev]";
  var Up = "[data-te-carousel-indicators]";
  var Xp = "[data-te-target]";
  var Gp = "[data-te-slide], [data-te-slide-to]";
  var qp = "touch";
  var Zp = "pen";
  var Xt = class _Xt extends ft {
    constructor(t, e, i) {
      super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._classes = this._getClasses(i), this._indicatorsElement = d.findOne(
        Up,
        this._element
      ), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = !!window.PointerEvent, this._setActiveElementClass(), this._addEventListeners(), this._didInit = false, this._init(), this._config.ride === "carousel" && this.cycle();
    }
    // Getters
    static get Default() {
      return pa;
    }
    static get NAME() {
      return Wn;
    }
    // Public
    next() {
      this._slide(ce);
    }
    nextWhenVisible() {
      !document.hidden && Mt(this._element) && this.next();
    }
    prev() {
      this._slide(he);
    }
    pause(t) {
      t || (this._isPaused = true), d.findOne(zp, this._element) && (_c(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
    }
    cycle(t) {
      t || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval(
        (document.visibilityState ? this.nextWhenVisible : this.next).bind(
          this
        ),
        this._config.interval
      ));
    }
    to(t) {
      this._activeElement = d.findOne(
        Se,
        this._element
      );
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0)
        return;
      if (this._isSliding) {
        c.one(this._element, Fn, () => this.to(t));
        return;
      }
      if (e === t) {
        this.pause(), this.cycle();
        return;
      }
      const i = t > e ? ce : he;
      this._slide(i, this._items[t]);
    }
    // Private
    _init() {
      this._didInit || (c.on(
        document,
        Hp,
        Gp,
        _Xt.dataApiClickHandler
      ), c.on(window, Bp, () => {
        const t = d.find(jp);
        for (let e = 0, i = t.length; e < i; e++)
          _Xt.carouselInterface(
            t[e],
            _Xt.getInstance(t[e])
          );
      }), this._didInit = true);
    }
    _getConfig(t) {
      return t = {
        ...pa,
        ...h.getDataAttributes(this._element),
        ...typeof t == "object" ? t : {}
      }, I(Wn, t, yp), t;
    }
    _getClasses(t) {
      const e = h.getDataClassAttributes(this._element);
      return t = {
        ...wp,
        ...e,
        ...t
      }, I(Wn, t, kp), t;
    }
    _enableCycle() {
      if (this._config.ride) {
        if (this._isSliding) {
          c.one(this._element, Fn, () => this.cycle());
          return;
        }
        this.cycle();
      }
    }
    _applyInitialClasses() {
      const t = d.findOne(
        Se,
        this._element
      );
      t.classList.add(
        this._classes.block,
        ...this._classes.visible.split(" ")
      ), this._setActiveIndicatorElement(t);
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= Ap)
        return;
      const e = t / this.touchDeltaX;
      this.touchDeltaX = 0, e && this._slide(e > 0 ? Ei : fe);
    }
    _setActiveElementClass() {
      this._activeElement = d.findOne(
        Se,
        this._element
      ), h.addClass(this._activeElement, "hidden");
    }
    _addEventListeners() {
      this._config.keyboard && c.on(
        this._element,
        Sp,
        (t) => this._keydown(t)
      ), this._config.pause === "hover" && (c.on(
        this._element,
        Ip,
        (t) => this.pause(t)
      ), c.on(
        this._element,
        Dp,
        (t) => this._enableCycle(t)
      )), this._config.touch && this._touchSupported && this._addTouchEventListeners(), this._applyInitialClasses();
    }
    _addTouchEventListeners() {
      const t = (o) => this._pointerEvent && (o.pointerType === Zp || o.pointerType === qp), e = (o) => {
        t(o) ? this.touchStartX = o.clientX : this._pointerEvent || (this.touchStartX = o.touches[0].clientX);
      }, i = (o) => {
        this.touchDeltaX = o.touches && o.touches.length > 1 ? 0 : o.touches[0].clientX - this.touchStartX;
      }, n = (o) => {
        t(o) && (this.touchDeltaX = o.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(
          (r) => this._enableCycle(r),
          Cp + this._config.interval
        ));
      };
      d.find(Kp, this._element).forEach(
        (o) => {
          c.on(
            o,
            Pp,
            (r) => r.preventDefault()
          );
        }
      ), this._pointerEvent ? (c.on(
        this._element,
        Mp,
        (o) => e(o)
      ), c.on(this._element, Rp, (o) => n(o)), this._element.classList.add(this._classes.pointer), this._element.setAttribute(`${Yp}`, "")) : (c.on(this._element, $p, (o) => e(o)), c.on(this._element, Lp, (o) => i(o)), c.on(this._element, Np, (o) => n(o)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName))
        return;
      const e = xp[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return this._items = t && t.parentNode ? d.find(Ar, t.parentNode) : [], this._items.indexOf(t);
    }
    _getItemByOrder(t, e) {
      const i = t === ce;
      return vc(
        this._items,
        e,
        i,
        this._config.wrap
      );
    }
    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t), n = this._getItemIndex(
        d.findOne(Se, this._element)
      );
      return c.trigger(this._element, Op, {
        relatedTarget: t,
        direction: e,
        from: n,
        to: i
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = d.findOne(
          eh,
          this._indicatorsElement
        );
        e.removeAttribute(de), e.removeAttribute("aria-current"), e.classList.remove("!opacity-100");
        const i = d.find(
          Xp,
          this._indicatorsElement
        );
        for (let n = 0; n < i.length; n++)
          if (Number.parseInt(
            i[n].getAttribute("data-te-slide-to"),
            10
          ) === this._getItemIndex(t)) {
            i[n].setAttribute(`${de}`, ""), i[n].setAttribute("aria-current", "true"), i[n].classList.add("!opacity-100");
            break;
          }
      }
    }
    _updateInterval() {
      const t = this._activeElement || d.findOne(Se, this._element);
      if (!t)
        return;
      const e = Number.parseInt(
        t.getAttribute("data-te-interval"),
        10
      );
      e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
    }
    _slide(t, e) {
      const i = this._directionToOrder(t), n = d.findOne(
        Se,
        this._element
      ), o = this._getItemIndex(n), r = e || this._getItemByOrder(i, n), a = this._getItemIndex(r), l = !!this._interval, p = i === ce, u = p ? Yn : Vp, _ = p ? Wp : Fp, f = this._orderToDirection(i), g = u === Yn ? this._classes.slideLeft : this._classes.slideRight, m = u !== Yn ? this._classes.slideLeft : this._classes.slideRight;
      if (r && r.hasAttribute(de)) {
        this._isSliding = false;
        return;
      }
      if (this._isSliding || this._triggerSlideEvent(r, f).defaultPrevented || !n || !r)
        return;
      this._isSliding = true, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
      const v = () => {
        c.trigger(this._element, Fn, {
          relatedTarget: r,
          direction: f,
          from: o,
          to: a
        });
      };
      if (this._element.hasAttribute(_a)) {
        r.setAttribute(`${_}`, ""), r.classList.add(this._classes.block, m), si(r), n.setAttribute(`${u}`, ""), n.classList.add(
          g,
          ...this._classes.invisible.split(" ")
        ), n.classList.remove(...this._classes.visible.split(" ")), r.setAttribute(`${u}`, ""), r.classList.add(...this._classes.visible.split(" ")), r.classList.remove(
          this._classes.slideRight,
          this._classes.slideLeft
        );
        const T = () => {
          r.removeAttribute(u), r.removeAttribute(_), r.setAttribute(`${de}`, ""), n.removeAttribute(de), n.classList.remove(
            g,
            ...this._classes.invisible.split(" "),
            this._classes.block
          ), n.removeAttribute(_), n.removeAttribute(u), this._isSliding = false, setTimeout(v, 0);
        };
        this._queueCallback(T, n, true);
      } else
        n.removeAttribute(de), n.classList.remove(this._classes.block), r.setAttribute(`${de}`, ""), r.classList.add(this._classes.block), this._isSliding = false, v();
      l && this.cycle();
    }
    _directionToOrder(t) {
      return [Ei, fe].includes(t) ? W() ? t === fe ? he : ce : t === fe ? ce : he : t;
    }
    _orderToDirection(t) {
      return [ce, he].includes(t) ? W() ? t === he ? fe : Ei : t === he ? Ei : fe : t;
    }
    // Static
    static carouselInterface(t, e) {
      const i = _Xt.getOrCreateInstance(t, e);
      let { _config: n } = i;
      typeof e == "object" && (n = {
        ...n,
        ...e
      });
      const o = typeof e == "string" ? e : e.slide;
      if (typeof e == "number") {
        i.to(e);
        return;
      }
      if (typeof o == "string") {
        if (typeof i[o] > "u")
          throw new TypeError(`No method named "${o}"`);
        i[o]();
      } else
        n.interval && n.ride === true && i.pause();
    }
    static jQueryInterface(t) {
      return this.each(function() {
        _Xt.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = te(this);
      if (!e || !e.hasAttribute(_a))
        return;
      const i = {
        ...h.getDataAttributes(e),
        ...h.getDataAttributes(this)
      }, n = this.getAttribute("data-te-slide-to");
      n && (i.interval = false), _Xt.carouselInterface(e, i), n && _Xt.getInstance(e).to(n), t.preventDefault();
    }
  };
  var Qp = "te.modal";
  var yt = `.${Qp}`;
  var i_ = `hide${yt}`;
  var s_ = `hidePrevented${yt}`;
  var n_ = `hidden${yt}`;
  var o_ = `show${yt}`;
  var r_ = `shown${yt}`;
  var ga = `resize${yt}`;
  var ba = `click.dismiss${yt}`;
  var va = `keydown.dismiss${yt}`;
  var a_ = `mouseup.dismiss${yt}`;
  var Ta = `mousedown.dismiss${yt}`;
  var c_ = /* @__PURE__ */ new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href"
  ]);
  var ih = /^aria-[\w-]*$/i;
  var d_ = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  var u_ = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  var p_ = (s, t) => {
    const e = s.nodeName.toLowerCase();
    if (t.includes(e))
      return c_.has(e) ? !!(d_.test(s.nodeValue) || u_.test(s.nodeValue)) : true;
    const i = t.filter(
      (n) => n instanceof RegExp
    );
    for (let n = 0, o = i.length; n < o; n++)
      if (i[n].test(e))
        return true;
    return false;
  };
  var __ = {
    // Global attributes allowed on any supplied element below.
    "*": ["class", "dir", "id", "lang", "role", ih],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  function pn(s, t, e) {
    if (!s.length)
      return s;
    if (e && typeof e == "function")
      return e(s);
    const n = new window.DOMParser().parseFromString(s, "text/html"), o = [].concat(...n.body.querySelectorAll("*"));
    for (let r = 0, a = o.length; r < a; r++) {
      const l = o[r], p = l.nodeName.toLowerCase();
      if (!Object.keys(t).includes(p)) {
        l.remove();
        continue;
      }
      const u = [].concat(...l.attributes), _ = [].concat(
        t["*"] || [],
        t[p] || []
      );
      u.forEach((f) => {
        p_(f, _) || l.removeAttribute(f.nodeName);
      });
    }
    return n.body.innerHTML;
  }
  var Aa = "tooltip";
  var f_ = "te.tooltip";
  var kt = `.${f_}`;
  var m_ = "te-tooltip";
  var g_ = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  var b_ = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)"
  };
  var v_ = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: W() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: W() ? "right" : "left"
  };
  var T_ = {
    animation: true,
    template: '<div class="opacity-0 transition-opacity duration-300 ease-in-out absolute z-[1080] block m-0 text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal" role="tooltip"><div data-te-tooltip-inner-ref class="tooltip-inner max-w-[200px] text-sm py-1.5 px-4 text-white text-center bg-[#6d6d6d] rounded"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: false,
    selector: false,
    placement: "top",
    offset: [0, 0],
    container: false,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: true,
    sanitizeFn: null,
    allowList: __,
    popperConfig: { hide: true }
  };
  var E_ = {
    HIDE: `hide${kt}`,
    HIDDEN: `hidden${kt}`,
    SHOW: `show${kt}`,
    SHOWN: `shown${kt}`,
    INSERTED: `inserted${kt}`,
    CLICK: `click${kt}`,
    FOCUSIN: `focusin${kt}`,
    FOCUSOUT: `focusout${kt}`,
    MOUSEENTER: `mouseenter${kt}`,
    MOUSELEAVE: `mouseleave${kt}`
  };
  var C_ = "fade";
  var A_ = "modal";
  var Kn = "show";
  var _i = "show";
  var zn = "out";
  var ya = ".tooltip-inner";
  var wa = `.${A_}`;
  var ka = "hide.te.modal";
  var fi = "hover";
  var Un = "focus";
  var y_ = "click";
  var w_ = "manual";
  var ri = class _ri extends ft {
    constructor(t, e) {
      if (typeof qc > "u")
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t), this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
    }
    // Getters
    static get Default() {
      return T_;
    }
    static get NAME() {
      return Aa;
    }
    static get Event() {
      return E_;
    }
    static get DefaultType() {
      return b_;
    }
    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains(Kn)) {
            this._leave(null, this);
            return;
          }
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout), c.off(
        this._element.closest(wa),
        ka,
        this._hideModalHandler
      ), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
    }
    show() {
      if (this._element.style.display === "none")
        throw new Error("Please use show on visible elements");
      if (!(this.isWithContent() && this._isEnabled))
        return;
      const t = c.trigger(
        this._element,
        this.constructor.Event.SHOW
      ), e = fc(this._element), i = e === null ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
      if (t.defaultPrevented || !i)
        return;
      this.constructor.NAME === "tooltip" && this.tip && this.getTitle() !== this.tip.querySelector(ya).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
      const n = this.getTipElement(), o = et(this.constructor.NAME);
      n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && setTimeout(() => {
        this.tip.classList.add("opacity-100"), this.tip.classList.remove("opacity-0");
      }, 100);
      const r = typeof this._config.placement == "function" ? this._config.placement.call(this, n, this._element) : this._config.placement, a = this._getAttachment(r);
      this._addAttachmentClass(a);
      const { container: l } = this._config;
      if (A.setData(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), c.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = se(
        this._element,
        n,
        this._getPopperConfig(a)
      ), n.getAttribute("id").includes("tooltip"))
        switch (r) {
          case "bottom":
            n.classList.add("py-[0.4rem]");
            break;
          case "left":
            n.classList.add("px-[0.4rem]");
            break;
          case "right":
            n.classList.add("px-[0.4rem]");
            break;
          default:
            n.classList.add("py-[0.4rem]");
            break;
        }
      const u = this._resolvePossibleFunction(this._config.customClass);
      u && n.classList.add(...u.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((g) => {
        c.on(g, "mouseover", hn);
      });
      const _ = () => {
        const g = this._hoverState;
        this._hoverState = null, c.trigger(this._element, this.constructor.Event.SHOWN), g === zn && this._leave(null, this);
      }, f = this.tip.classList.contains("transition-opacity");
      this._queueCallback(_, this.tip, f);
    }
    hide() {
      if (!this._popper)
        return;
      const t = this.getTipElement(), e = () => {
        this._isWithActiveTrigger() || (this._hoverState !== _i && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), c.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
      };
      if (c.trigger(
        this._element,
        this.constructor.Event.HIDE
      ).defaultPrevented)
        return;
      t.classList.add("opacity-0"), t.classList.remove("opacity-100"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((o) => c.off(o, "mouseover", hn)), this._activeTrigger[y_] = false, this._activeTrigger[Un] = false, this._activeTrigger[fi] = false;
      const n = this.tip.classList.contains("opacity-0");
      this._queueCallback(e, this.tip, n), this._hoverState = "";
    }
    update() {
      this._popper !== null && this._popper.update();
    }
    // Protected
    isWithContent() {
      return !!this.getTitle();
    }
    getTipElement() {
      if (this.tip)
        return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return this.setContent(e), e.classList.remove(C_, Kn), this.tip = e, this.tip;
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ya);
    }
    _sanitizeAndSetContent(t, e, i) {
      const n = d.findOne(i, t);
      if (!e && n) {
        n.remove();
        return;
      }
      this.setElementContent(n, e);
    }
    setElementContent(t, e) {
      if (t !== null) {
        if (Xe(e)) {
          e = ee(e), this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent;
          return;
        }
        this._config.html ? (this._config.sanitize && (e = pn(
          e,
          this._config.allowList,
          this._config.sanitizeFn
        )), t.innerHTML = e) : t.textContent = e;
      }
    }
    getTitle() {
      const t = this._element.getAttribute("data-te-original-title") || this._config.title;
      return this._resolvePossibleFunction(t);
    }
    updateAttachment(t) {
      return t === "right" ? "end" : t === "left" ? "start" : t;
    }
    // Private
    _initializeOnDelegatedTarget(t, e) {
      return e || this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
    }
    _resolvePossibleFunction(t) {
      return typeof t == "function" ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          },
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "arrow",
            options: {
              element: `.${this.constructor.NAME}-arrow`
            }
          },
          {
            name: "onChange",
            enabled: true,
            phase: "afterWrite",
            fn: (i) => this._handlePopperPlacementChange(i)
          }
        ],
        onFirstUpdate: (i) => {
          i.options.placement !== i.placement && this._handlePopperPlacementChange(i);
        }
      };
      return {
        ...e,
        ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
      );
    }
    _getAttachment(t) {
      return v_[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((e) => {
        if (e === "click")
          c.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (i) => this.toggle(i)
          );
        else if (e !== w_) {
          const i = e === fi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, n = e === fi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          c.on(
            this._element,
            i,
            this._config.selector,
            (o) => this._enter(o)
          ), c.on(
            this._element,
            n,
            this._config.selector,
            (o) => this._leave(o)
          );
        }
      }), this._hideModalHandler = () => {
        this._element && this.hide();
      }, c.on(
        this._element.closest(wa),
        ka,
        this._hideModalHandler
      ), this._config.selector ? this._config = {
        ...this._config,
        trigger: "manual",
        selector: ""
      } : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute(
        "data-te-original-title"
      );
      (t || e !== "string") && (this._element.setAttribute("data-te-original-title", t || ""), t && !this._element.getAttribute("aria-label") && !this._element.textContent && this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusin" ? Un : fi] = true), e.getTipElement().classList.contains(Kn) || e._hoverState === _i) {
        e._hoverState = _i;
        return;
      }
      if (clearTimeout(e._timeout), e._hoverState = _i, !e._config.delay || !e._config.delay.show) {
        e.show();
        return;
      }
      e._timeout = setTimeout(() => {
        e._hoverState === _i && e.show();
      }, e._config.delay.show);
    }
    _leave(t, e) {
      if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusout" ? Un : fi] = e._element.contains(t.relatedTarget)), !e._isWithActiveTrigger()) {
        if (clearTimeout(e._timeout), e._hoverState = zn, !e._config.delay || !e._config.delay.hide) {
          e.hide();
          return;
        }
        e._timeout = setTimeout(() => {
          e._hoverState === zn && e.hide();
        }, e._config.delay.hide);
      }
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t])
          return true;
      return false;
    }
    _getConfig(t) {
      const e = h.getDataAttributes(this._element);
      return Object.keys(e).forEach((i) => {
        g_.has(i) && delete e[i];
      }), t = {
        ...this.constructor.Default,
        ...e,
        ...typeof t == "object" && t ? t : {}
      }, t.container = t.container === false ? document.body : ee(t.container), typeof t.delay == "number" && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), I(Aa, t, this.constructor.DefaultType), t.sanitize && (t.template = pn(
        t.template,
        t.allowList,
        t.sanitizeFn
      )), t;
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(), e = new RegExp(
        `(^|\\s)${this._getBasicClassPrefix()}\\S+`,
        "g"
      ), i = t.getAttribute("class").match(e);
      i !== null && i.length > 0 && i.map((n) => n.trim()).forEach((n) => t.classList.remove(n));
    }
    _getBasicClassPrefix() {
      return m_;
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null);
    }
    // Static
    static jQueryInterface(t) {
      return this.each(function() {
        const e = _ri.getOrCreateInstance(this, t);
        if (typeof t == "string") {
          if (typeof e[t] > "u")
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  };
  var x_ = "te.popover";
  var xt = `.${x_}`;
  var S_ = {
    ...ri.Default,
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="opacity-0 transition-opacity duration-150 ease-in-out absolute top-0 left-0 z-[1070] block max-w-[267px] break-words bg-white bg-clip-padding border border-neutral-100 rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal dark:bg-neutral-700 dark:border-0 dark:text-white data-[popper-reference-hidden]:hidden" role="tooltip"><h3 class="popover-header py-2 px-4 mb-0 border-b-2 border-neutral-100 rounded-t-lg font-medium empty:hidden dark:border-neutral-500"></h3><div class="popover-body p-4 text-[#212529] dark:text-white"></div></div>'
  };
  var I_ = {
    ...ri.DefaultType,
    content: "(string|element|function)"
  };
  var D_ = {
    HIDE: `hide${xt}`,
    HIDDEN: `hidden${xt}`,
    SHOW: `show${xt}`,
    SHOWN: `shown${xt}`,
    INSERTED: `inserted${xt}`,
    CLICK: `click${xt}`,
    FOCUSIN: `focusin${xt}`,
    FOCUSOUT: `focusout${xt}`,
    MOUSEENTER: `mouseenter${xt}`,
    MOUSELEAVE: `mouseleave${xt}`
  };
  var N_ = "te.scrollspy";
  var yr = `.${N_}`;
  var B_ = `activate${yr}`;
  var H_ = `scroll${yr}`;
  var oh = "[data-te-dropdown-item-ref]";
  var Uo = "[data-te-nav-link-ref]";
  var rh = "[data-te-list-group-item-ref]";
  var qn = `${Uo}, ${rh}, ${oh}`;
  var K_ = "te.tab";
  var Tn = `.${K_}`;
  var z_ = `hide${Tn}`;
  var U_ = `hidden${Tn}`;
  var X_ = `show${Tn}`;
  var G_ = `shown${Tn}`;
  var He = "data-te-tab-active";
  var Ks = "data-te-nav-active";
  var Ia = `[${He}]`;
  var J_ = `[${Ks}]`;
  var of = "te.toast";
  var ne = `.${of}`;
  var rf = `mouseover${ne}`;
  var af = `mouseout${ne}`;
  var lf = `focusin${ne}`;
  var cf = `focusout${ne}`;
  var hf = `hide${ne}`;
  var df = `hidden${ne}`;
  var uf = `show${ne}`;
  var pf = `shown${ne}`;
  (() => {
    var s = { 454: (i, n, o) => {
      o.d(n, { Z: () => l });
      var r = o(645), a = o.n(r)()(function(p) {
        return p[1];
      });
      a.push([i.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
      const l = a;
    }, 645: (i) => {
      i.exports = function(n) {
        var o = [];
        return o.toString = function() {
          return this.map(function(r) {
            var a = n(r);
            return r[2] ? "@media ".concat(r[2], " {").concat(a, "}") : a;
          }).join("");
        }, o.i = function(r, a, l) {
          typeof r == "string" && (r = [[null, r, ""]]);
          var p = {};
          if (l)
            for (var u = 0; u < this.length; u++) {
              var _ = this[u][0];
              _ != null && (p[_] = true);
            }
          for (var f = 0; f < r.length; f++) {
            var g = [].concat(r[f]);
            l && p[g[0]] || (a && (g[2] ? g[2] = "".concat(a, " and ").concat(g[2]) : g[2] = a), o.push(g));
          }
        }, o;
      };
    }, 810: () => {
      (function() {
        if (typeof window < "u")
          try {
            var i = new window.CustomEvent("test", { cancelable: true });
            if (i.preventDefault(), i.defaultPrevented !== true)
              throw new Error("Could not prevent default");
          } catch {
            var n = function(r, a) {
              var l, p;
              return (a = a || {}).bubbles = !!a.bubbles, a.cancelable = !!a.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(r, a.bubbles, a.cancelable, a.detail), p = l.preventDefault, l.preventDefault = function() {
                p.call(this);
                try {
                  Object.defineProperty(this, "defaultPrevented", { get: function() {
                    return true;
                  } });
                } catch {
                  this.defaultPrevented = true;
                }
              }, l;
            };
            n.prototype = window.Event.prototype, window.CustomEvent = n;
          }
      })();
    }, 379: (i, n, o) => {
      var r, a = /* @__PURE__ */ function() {
        var C = {};
        return function(E) {
          if (C[E] === void 0) {
            var w = document.querySelector(E);
            if (window.HTMLIFrameElement && w instanceof window.HTMLIFrameElement)
              try {
                w = w.contentDocument.head;
              } catch {
                w = null;
              }
            C[E] = w;
          }
          return C[E];
        };
      }(), l = [];
      function p(C) {
        for (var E = -1, w = 0; w < l.length; w++)
          if (l[w].identifier === C) {
            E = w;
            break;
          }
        return E;
      }
      function u(C, E) {
        for (var w = {}, k = [], D = 0; D < C.length; D++) {
          var O = C[D], x = E.base ? O[0] + E.base : O[0], L = w[x] || 0, S = "".concat(x, " ").concat(L);
          w[x] = L + 1;
          var N = p(S), P = { css: O[1], media: O[2], sourceMap: O[3] };
          N !== -1 ? (l[N].references++, l[N].updater(P)) : l.push({ identifier: S, updater: y(P, E), references: 1 }), k.push(S);
        }
        return k;
      }
      function _(C) {
        var E = document.createElement("style"), w = C.attributes || {};
        if (w.nonce === void 0) {
          var k = o.nc;
          k && (w.nonce = k);
        }
        if (Object.keys(w).forEach(function(O) {
          E.setAttribute(O, w[O]);
        }), typeof C.insert == "function")
          C.insert(E);
        else {
          var D = a(C.insert || "head");
          if (!D)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          D.appendChild(E);
        }
        return E;
      }
      var f, g = (f = [], function(C, E) {
        return f[C] = E, f.filter(Boolean).join(`
`);
      });
      function m(C, E, w, k) {
        var D = w ? "" : k.media ? "@media ".concat(k.media, " {").concat(k.css, "}") : k.css;
        if (C.styleSheet)
          C.styleSheet.cssText = g(E, D);
        else {
          var O = document.createTextNode(D), x = C.childNodes;
          x[E] && C.removeChild(x[E]), x.length ? C.insertBefore(O, x[E]) : C.appendChild(O);
        }
      }
      function b(C, E, w) {
        var k = w.css, D = w.media, O = w.sourceMap;
        if (D ? C.setAttribute("media", D) : C.removeAttribute("media"), O && typeof btoa < "u" && (k += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(O)))), " */")), C.styleSheet)
          C.styleSheet.cssText = k;
        else {
          for (; C.firstChild; )
            C.removeChild(C.firstChild);
          C.appendChild(document.createTextNode(k));
        }
      }
      var v = null, T = 0;
      function y(C, E) {
        var w, k, D;
        if (E.singleton) {
          var O = T++;
          w = v || (v = _(E)), k = m.bind(null, w, O, false), D = m.bind(null, w, O, true);
        } else
          w = _(E), k = b.bind(null, w, E), D = function() {
            (function(x) {
              if (x.parentNode === null)
                return false;
              x.parentNode.removeChild(x);
            })(w);
          };
        return k(C), function(x) {
          if (x) {
            if (x.css === C.css && x.media === C.media && x.sourceMap === C.sourceMap)
              return;
            k(C = x);
          } else
            D();
        };
      }
      i.exports = function(C, E) {
        (E = E || {}).singleton || typeof E.singleton == "boolean" || (E.singleton = (r === void 0 && (r = !!(window && document && document.all && !window.atob)), r));
        var w = u(C = C || [], E);
        return function(k) {
          if (k = k || [], Object.prototype.toString.call(k) === "[object Array]") {
            for (var D = 0; D < w.length; D++) {
              var O = p(w[D]);
              l[O].references--;
            }
            for (var x = u(k, E), L = 0; L < w.length; L++) {
              var S = p(w[L]);
              l[S].references === 0 && (l[S].updater(), l.splice(S, 1));
            }
            w = x;
          }
        };
      };
    } }, t = {};
    function e(i) {
      var n = t[i];
      if (n !== void 0)
        return n.exports;
      var o = t[i] = { id: i, exports: {} };
      return s[i](o, o.exports, e), o.exports;
    }
    e.n = (i) => {
      var n = i && i.__esModule ? () => i.default : () => i;
      return e.d(n, { a: n }), n;
    }, e.d = (i, n) => {
      for (var o in n)
        e.o(n, o) && !e.o(i, o) && Object.defineProperty(i, o, { enumerable: true, get: n[o] });
    }, e.o = (i, n) => Object.prototype.hasOwnProperty.call(i, n), (() => {
      var i = e(379), n = e.n(i), o = e(454);
      function r(l) {
        if (!l.hasAttribute("autocompleted")) {
          l.setAttribute("autocompleted", "");
          var p = new window.CustomEvent("onautocomplete", { bubbles: true, cancelable: true, detail: null });
          l.dispatchEvent(p) || (l.value = "");
        }
      }
      function a(l) {
        l.hasAttribute("autocompleted") && (l.removeAttribute("autocompleted"), l.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: true, cancelable: false, detail: null })));
      }
      n()(o.Z, { insert: "head", singleton: false }), o.Z.locals, e(810), document.addEventListener("animationstart", function(l) {
        l.animationName === "onautofillstart" ? r(l.target) : a(l.target);
      }, true), document.addEventListener("input", function(l) {
        l.inputType !== "insertReplacementText" && "data" in l ? a(l.target) : r(l.target);
      }, true);
    })();
  })();
  var ch = "data-te-input-wrapper-init";
  var hh = "data-te-input-notch-ref";
  var dh = "data-te-input-notch-leading-ref";
  var uh = "data-te-input-notch-middle-ref";
  var bf = "data-te-input-helper-ref";
  var cs = `[${ch}] input`;
  var hs = `[${ch}] textarea`;
  var Ie = `[${hh}]`;
  var Ra = `[${dh}]`;
  var Pa = `[${uh}]`;
  var Tf = `[${bf}]`;
  var kf = {
    property: "color",
    defaultValue: null,
    inherit: true
  };
  var De = (s, t) => {
    const { property: e, defaultValue: i, inherit: n } = { ...kf, ...t }, o = document.createElement("div");
    o.classList.add(s), document.body.appendChild(o);
    const a = window.getComputedStyle(o)[e] || i, p = window.getComputedStyle(o.parentElement)[e];
    return document.body.removeChild(o), !n && p && a === p ? i : a || i;
  };
  var Sf = [
    {
      name: "primary",
      gradientColor: De("text-primary", { defaultValue: "#3B71CA", inherit: false })
    },
    {
      name: "secondary",
      gradientColor: De("text-secondary", { defaultValue: "#9FA6B2", inherit: false })
    },
    {
      name: "success",
      gradientColor: De("text-success", { defaultValue: "#14A44D", inherit: false })
    },
    {
      name: "danger",
      gradientColor: De("text-danger", { defaultValue: "#DC4C64", inherit: false })
    },
    {
      name: "warning",
      gradientColor: De("text-warning", { defaultValue: "#E4A11B", inherit: false })
    },
    {
      name: "info",
      gradientColor: De("text-info", { defaultValue: "#54B4D3", inherit: false })
    },
    {
      name: "light",
      gradientColor: "#fbfbfb"
    },
    {
      name: "dark",
      gradientColor: "#262626"
    }
  ];
  var Qs = "te.datepicker";
  var En = `.${Qs}`;
  var am = ".data-api";
  var lm = `close${En}`;
  var cm = `open${En}`;
  var hm = `dateChange${En}`;
  var fs = `click${En}${am}`;
  var fh = "data-te-datepicker-modal-container-ref";
  var mh = "data-te-datepicker-dropdown-container-ref";
  var dm = `[${fh}]`;
  var um = `[${mh}]`;
  var Bi = "timepicker";
  var M = `data-te-${Bi}`;
  var Js = `te.${Bi}`;
  var Pt = `.${Js}`;
  var Bt = ".data-api";
  var qa = `click${Pt}${Bt}`;
  var vs = `keydown${Pt}${Bt}`;
  var Za = `mousedown${Pt}${Bt}`;
  var Qa = `mouseup${Pt}${Bt}`;
  var Ja = `mousemove${Pt}${Bt}`;
  var tl = `mouseleave${Pt}${Bt}`;
  var el = `mouseover${Pt}${Bt}`;
  var il = `touchmove${Pt}${Bt}`;
  var sl = `touchend${Pt}${Bt}`;
  var nl = `touchstart${Pt}${Bt}`;
  var pg = `[${M}-am]`;
  var _g = `[${M}-pm]`;
  var fg = `[${M}-format24]`;
  var Ts = `[${M}-current]`;
  var Es = `[${M}-hour-mode]`;
  var mg = `[${M}-toggle-button]`;
  var oo = `${M}-cancel`;
  var ol = `${M}-clear`;
  var ro = `${M}-submit`;
  var gg = `${M}-icon`;
  var ao = `${M}-icon-up`;
  var lo = `${M}-icon-down`;
  var bg = `${M}-icon-inline-hour`;
  var vg = `${M}-icon-inline-minute`;
  var rl = `${M}-inline-hour-icons`;
  var Tg = `${M}-current-inline`;
  var Cg = `${M}-invalid-feedback`;
  var co = `${M}-is-invalid`;
  var jt = `${M}-disabled`;
  var H = `${M}-active`;
  var Ag = `${M}-input`;
  var ue = `${M}-clock`;
  var mi = `${M}-clock-inner`;
  var ho = `${M}-wrapper`;
  var al = `${M}-clock-wrapper`;
  var Cs = `${M}-hour`;
  var uo = `${M}-minute`;
  var As = `${M}-tips-element`;
  var X = `${M}-tips-hours`;
  var q = `${M}-tips-minutes`;
  var ht = `${M}-tips-inner`;
  var ys = `${M}-tips-inner-element`;
  var ll = `${M}-middle-dot`;
  var po = `${M}-hand-pointer`;
  var _o = `${M}-circle`;
  var cl = `${M}-modal`;
  var Bg = W() ? 100 : -100;
  var Hg = W() ? -100 : 100;
  var Zo = "stepper";
  var tn = "te.stepper";
  var ai = `.${tn}`;
  var Ui = `data-te-${Zo}`;
  var Fg = `onChangeStep${ai}`;
  var Yg = `onChangedStep${ai}`;
  var dl = `mousedown${ai}`;
  var ul = `keydown${ai}`;
  var zg = `keyup${ai}`;
  var pl = `resize${ai}`;
  var Kt = `[${Ui}-step-ref]`;
  var Z = `[${Ui}-head-ref]`;
  var _l = `[${Ui}-head-text-ref]`;
  var ks = `[${Ui}-head-icon-ref]`;
  var Q = `[${Ui}-content-ref]`;
  var yi = "te.select";
  var Xi = `.${yi}`;
  var Tb = `close${Xi}`;
  var Eb = `open${Xi}`;
  var Tl = `optionSelect${Xi}`;
  var El = `optionDeselect${Xi}`;
  var Cb = `valueChange${Xi}`;
  var xh = "data-te-select-no-results-ref";
  var Lb = `[${xh}]`;
  var en = "chip";
  var Wb = `te.${en}`;
  var Oh = "data-te-chip-close";
  var vo = `[${Oh}]`;
  var Hi = "chips";
  var Gi = `data-te-${Hi}`;
  var xl = `te.${Hi}`;
  var Gb = `${Gi}-input-init`;
  var bt = `${Gi}-active`;
  var Ol = `${Gi}-initial`;
  var Sh = `${Gi}-placeholder`;
  var qb = `${Gi}-input-wrapper`;
  var Jo = "data-te-chip-init";
  var Ih = "data-te-chip-close";
  var Dh = "data-te-chip-text";
  var Zb = `[${bt}]`;
  var tr = `[${Jo}]`;
  var Qb = `${tr}${Zb}`;
  var To = `[${Ih}]`;
  var Jb = `[${qb}]`;
  var tv = `[${Dh}]`;
  var ev = `[${Sh}]`;
  var iv = "data-te-input-notch-leading-ref";
  var sv = "data-te-input-notch-middle-ref";
  var nv = `[${iv}]`;
  var ov = `[${sv}]`;
  var uv = {
    inputID: et("chips-input-"),
    parentSelector: "",
    initialValues: [{ tag: "init1" }, { tag: "init2" }],
    editable: false,
    labelText: "Example label",
    inputClasses: {},
    inputOptions: {}
  };
  var Ut = {
    plugins: {
      legend: {
        labels: {
          color: "rgb(102,102,102)"
        }
      }
    }
  };
  var wi = {
    line: {
      options: {
        ...Ut,
        elements: {
          line: {
            backgroundColor: "rgba(59, 112, 202, 0.0)",
            borderColor: "rgb(59, 112, 202)",
            borderWidth: 2,
            tension: 0
          },
          point: {
            borderColor: "rgb(59, 112, 202)",
            backgroundColor: "rgb(59, 112, 202)"
          }
        },
        responsive: true,
        legend: {
          display: true
        },
        tooltips: {
          intersect: false,
          mode: "index"
        },
        datasets: {
          borderColor: "red"
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            },
            ticks: {
              fontColor: "rgba(0,0,0, 0.5)"
            }
          },
          y: {
            stacked: false,
            grid: {
              borderDash: [2],
              drawBorder: false,
              zeroLineColor: "rgba(0,0,0,0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            },
            ticks: {
              fontColor: "rgba(0,0,0, 0.5)"
            }
          }
        }
      }
    },
    bar: {
      options: {
        ...Ut,
        backgroundColor: "rgb(59, 112, 202)",
        borderWidth: 0,
        responsive: true,
        legend: {
          display: true
        },
        tooltips: {
          intersect: false,
          mode: "index"
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            },
            ticks: {
              fontColor: "rgba(0,0,0, 0.5)"
            }
          },
          y: {
            stacked: true,
            grid: {
              borderDash: [2],
              drawBorder: false,
              zeroLineColor: "rgba(0,0,0,0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            },
            ticks: {
              fontColor: "rgba(0,0,0, 0.5)"
            }
          }
        }
      }
    },
    pie: {
      options: {
        ...Ut,
        elements: {
          arc: { backgroundColor: "rgb(59, 112, 202)" }
        },
        responsive: true,
        legend: {
          display: true
        }
      }
    },
    doughnut: {
      options: {
        ...Ut,
        elements: {
          arc: { backgroundColor: "rgb(59, 112, 202)" }
        },
        responsive: true,
        legend: {
          display: true
        }
      }
    },
    polarArea: {
      options: {
        ...Ut,
        elements: {
          arc: { backgroundColor: "rgba(59, 112, 202, 0.5)" }
        },
        responsive: true,
        legend: {
          display: true
        }
      }
    },
    radar: {
      options: {
        ...Ut,
        elements: {
          line: {
            backgroundColor: "rgba(59, 112, 202, 0.5)",
            borderColor: "rgb(59, 112, 202)",
            borderWidth: 2
          },
          point: {
            borderColor: "rgb(59, 112, 202)",
            backgroundColor: "rgb(59, 112, 202)"
          }
        },
        responsive: true,
        legend: {
          display: true
        }
      }
    },
    scatter: {
      options: {
        ...Ut,
        elements: {
          line: {
            backgroundColor: "rgba(59, 112, 202, 0.5)",
            borderColor: "rgb(59, 112, 202)",
            borderWidth: 2,
            tension: 0
          },
          point: {
            borderColor: "rgb(59, 112, 202)",
            backgroundColor: "rgba(59, 112, 202, 0.5)"
          }
        },
        responsive: true,
        legend: {
          display: true
        },
        tooltips: {
          intersect: false,
          mode: "index"
        },
        datasets: {
          borderColor: "red"
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            },
            ticks: {
              fontColor: "rgba(0,0,0, 0.5)"
            }
          },
          y: {
            stacked: false,
            grid: {
              borderDash: [2],
              drawBorder: false,
              zeroLineColor: "rgba(0,0,0,0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            },
            ticks: {
              fontColor: "rgba(0,0,0, 0.5)"
            }
          }
        }
      }
    },
    bubble: {
      options: {
        ...Ut,
        elements: {
          point: {
            borderColor: "rgb(59, 112, 202)",
            backgroundColor: "rgba(59, 112, 202, 0.5)"
          }
        },
        responsive: true,
        legend: {
          display: true
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              fontColor: "rgba(0,0,0, 0.5)"
            }
          },
          y: {
            grid: {
              borderDash: [2],
              drawBorder: false,
              zeroLineColor: "rgba(0,0,0,0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            },
            ticks: {
              fontColor: "rgba(0,0,0, 0.5)"
            }
          }
        }
      }
    }
  };
  var fv = function(t) {
    return mv(t) && !gv(t);
  };
  function mv(s) {
    return !!s && typeof s == "object";
  }
  function gv(s) {
    var t = Object.prototype.toString.call(s);
    return t === "[object RegExp]" || t === "[object Date]" || Tv(s);
  }
  var bv = typeof Symbol == "function" && Symbol.for;
  var vv = bv ? Symbol.for("react.element") : 60103;
  function Tv(s) {
    return s.$$typeof === vv;
  }
  function Ev(s) {
    return Array.isArray(s) ? [] : {};
  }
  function Yi(s, t) {
    return t.clone !== false && t.isMergeableObject(s) ? ii(Ev(s), s, t) : s;
  }
  function Cv(s, t, e) {
    return s.concat(t).map(function(i) {
      return Yi(i, e);
    });
  }
  function Av(s, t) {
    if (!t.customMerge)
      return ii;
    var e = t.customMerge(s);
    return typeof e == "function" ? e : ii;
  }
  function yv(s) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(s).filter(function(t) {
      return Object.propertyIsEnumerable.call(s, t);
    }) : [];
  }
  function Dl(s) {
    return Object.keys(s).concat(yv(s));
  }
  function $h(s, t) {
    try {
      return t in s;
    } catch {
      return false;
    }
  }
  function wv(s, t) {
    return $h(s, t) && !(Object.hasOwnProperty.call(s, t) && Object.propertyIsEnumerable.call(s, t));
  }
  function kv(s, t, e) {
    var i = {};
    return e.isMergeableObject(s) && Dl(s).forEach(function(n) {
      i[n] = Yi(s[n], e);
    }), Dl(t).forEach(function(n) {
      wv(s, n) || ($h(s, n) && e.isMergeableObject(t[n]) ? i[n] = Av(n, e)(s[n], t[n], e) : i[n] = Yi(t[n], e));
    }), i;
  }
  function ii(s, t, e) {
    e = e || {}, e.arrayMerge = e.arrayMerge || Cv, e.isMergeableObject = e.isMergeableObject || fv, e.cloneUnlessOtherwiseSpecified = Yi;
    var i = Array.isArray(t), n = Array.isArray(s), o = i === n;
    return o ? i ? e.arrayMerge(s, t, e) : kv(s, t, e) : Yi(t, e);
  }
  ii.all = function(t, e) {
    if (!Array.isArray(t))
      throw new Error("first argument should be an array");
    return t.reduce(function(i, n) {
      return ii(i, n, e);
    }, {});
  };
  function Nt(s) {
    return getComputedStyle(s);
  }
  function ct(s, t) {
    for (var e in t) {
      var i = t[e];
      typeof i == "number" && (i = i + "px"), s.style[e] = i;
    }
    return s;
  }
  function Is(s) {
    var t = document.createElement("div");
    return t.className = s, t;
  }
  var Ll = typeof Element < "u" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
  function Jt(s, t) {
    if (!Ll)
      throw new Error("No element matching method supported");
    return Ll.call(s, t);
  }
  function Ye(s) {
    s.remove ? s.remove() : s.parentNode && s.parentNode.removeChild(s);
  }
  function Nl(s, t) {
    return Array.prototype.filter.call(
      s.children,
      function(e) {
        return Jt(e, t);
      }
    );
  }
  var j = {
    main: "ps",
    rtl: "ps__rtl",
    element: {
      thumb: function(s) {
        return "ps__thumb-" + s;
      },
      rail: function(s) {
        return "ps__rail-" + s;
      },
      consuming: "ps__child--consume"
    },
    state: {
      focus: "ps--focus",
      clicking: "ps--clicking",
      active: function(s) {
        return "ps--active-" + s;
      },
      scrolling: function(s) {
        return "ps--scrolling-" + s;
      }
    }
  };
  var Nh = { x: null, y: null };
  function Mh(s, t) {
    var e = s.element.classList, i = j.state.scrolling(t);
    e.contains(i) ? clearTimeout(Nh[t]) : e.add(i);
  }
  function Rh(s, t) {
    Nh[t] = setTimeout(
      function() {
        return s.isAlive && s.element.classList.remove(j.state.scrolling(t));
      },
      s.settings.scrollingThreshold
    );
  }
  function Dv(s, t) {
    Mh(s, t), Rh(s, t);
  }
  var qi = function(t) {
    this.element = t, this.handlers = {};
  };
  var Ph = { isEmpty: { configurable: true } };
  qi.prototype.bind = function(t, e) {
    typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, false);
  };
  qi.prototype.unbind = function(t, e) {
    var i = this;
    this.handlers[t] = this.handlers[t].filter(function(n) {
      return e && n !== e ? true : (i.element.removeEventListener(t, n, false), false);
    });
  };
  qi.prototype.unbindAll = function() {
    for (var t in this.handlers)
      this.unbind(t);
  };
  Ph.isEmpty.get = function() {
    var s = this;
    return Object.keys(this.handlers).every(
      function(t) {
        return s.handlers[t].length === 0;
      }
    );
  };
  Object.defineProperties(qi.prototype, Ph);
  var li = function() {
    this.eventElements = [];
  };
  li.prototype.eventElement = function(t) {
    var e = this.eventElements.filter(function(i) {
      return i.element === t;
    })[0];
    return e || (e = new qi(t), this.eventElements.push(e)), e;
  };
  li.prototype.bind = function(t, e, i) {
    this.eventElement(t).bind(e, i);
  };
  li.prototype.unbind = function(t, e, i) {
    var n = this.eventElement(t);
    n.unbind(e, i), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
  };
  li.prototype.unbindAll = function() {
    this.eventElements.forEach(function(t) {
      return t.unbindAll();
    }), this.eventElements = [];
  };
  li.prototype.once = function(t, e, i) {
    var n = this.eventElement(t), o = function(r) {
      n.unbind(e, o), i(r);
    };
    n.bind(e, o);
  };
  function Ds(s) {
    if (typeof window.CustomEvent == "function")
      return new CustomEvent(s);
    var t = document.createEvent("CustomEvent");
    return t.initCustomEvent(s, false, false, void 0), t;
  }
  function fn(s, t, e, i, n) {
    i === void 0 && (i = true), n === void 0 && (n = false);
    var o;
    if (t === "top")
      o = [
        "contentHeight",
        "containerHeight",
        "scrollTop",
        "y",
        "up",
        "down"
      ];
    else if (t === "left")
      o = [
        "contentWidth",
        "containerWidth",
        "scrollLeft",
        "x",
        "left",
        "right"
      ];
    else
      throw new Error("A proper axis should be provided");
    $v(s, e, o, i, n);
  }
  function $v(s, t, e, i, n) {
    var o = e[0], r = e[1], a = e[2], l = e[3], p = e[4], u = e[5];
    i === void 0 && (i = true), n === void 0 && (n = false);
    var _ = s.element;
    s.reach[l] = null, _[a] < 1 && (s.reach[l] = "start"), _[a] > s[o] - s[r] - 1 && (s.reach[l] = "end"), t && (_.dispatchEvent(Ds("ps-scroll-" + l)), t < 0 ? _.dispatchEvent(Ds("ps-scroll-" + p)) : t > 0 && _.dispatchEvent(Ds("ps-scroll-" + u)), i && Dv(s, l)), s.reach[l] && (t || n) && _.dispatchEvent(Ds("ps-" + l + "-reach-" + s.reach[l]));
  }
  function F(s) {
    return parseInt(s, 10) || 0;
  }
  function Lv(s) {
    return Jt(s, "input,[contenteditable]") || Jt(s, "select,[contenteditable]") || Jt(s, "textarea,[contenteditable]") || Jt(s, "button,[contenteditable]");
  }
  function Nv(s) {
    var t = Nt(s);
    return F(t.width) + F(t.paddingLeft) + F(t.paddingRight) + F(t.borderLeftWidth) + F(t.borderRightWidth);
  }
  var Ve = {
    isWebKit: typeof document < "u" && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
    supportsIePointer: typeof navigator < "u" && navigator.msMaxTouchPoints,
    isChrome: typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent)
  };
  function Ht(s) {
    var t = s.element, e = Math.floor(t.scrollTop), i = t.getBoundingClientRect();
    s.containerWidth = Math.round(i.width), s.containerHeight = Math.round(i.height), s.contentWidth = t.scrollWidth, s.contentHeight = t.scrollHeight, t.contains(s.scrollbarXRail) || (Nl(t, j.element.rail("x")).forEach(
      function(n) {
        return Ye(n);
      }
    ), t.appendChild(s.scrollbarXRail)), t.contains(s.scrollbarYRail) || (Nl(t, j.element.rail("y")).forEach(
      function(n) {
        return Ye(n);
      }
    ), t.appendChild(s.scrollbarYRail)), !s.settings.suppressScrollX && s.containerWidth + s.settings.scrollXMarginOffset < s.contentWidth ? (s.scrollbarXActive = true, s.railXWidth = s.containerWidth - s.railXMarginWidth, s.railXRatio = s.containerWidth / s.railXWidth, s.scrollbarXWidth = Ml(
      s,
      F(s.railXWidth * s.containerWidth / s.contentWidth)
    ), s.scrollbarXLeft = F(
      (s.negativeScrollAdjustment + t.scrollLeft) * (s.railXWidth - s.scrollbarXWidth) / (s.contentWidth - s.containerWidth)
    )) : s.scrollbarXActive = false, !s.settings.suppressScrollY && s.containerHeight + s.settings.scrollYMarginOffset < s.contentHeight ? (s.scrollbarYActive = true, s.railYHeight = s.containerHeight - s.railYMarginHeight, s.railYRatio = s.containerHeight / s.railYHeight, s.scrollbarYHeight = Ml(
      s,
      F(s.railYHeight * s.containerHeight / s.contentHeight)
    ), s.scrollbarYTop = F(
      e * (s.railYHeight - s.scrollbarYHeight) / (s.contentHeight - s.containerHeight)
    )) : s.scrollbarYActive = false, s.scrollbarXLeft >= s.railXWidth - s.scrollbarXWidth && (s.scrollbarXLeft = s.railXWidth - s.scrollbarXWidth), s.scrollbarYTop >= s.railYHeight - s.scrollbarYHeight && (s.scrollbarYTop = s.railYHeight - s.scrollbarYHeight), Mv(t, s), s.scrollbarXActive ? t.classList.add(j.state.active("x")) : (t.classList.remove(j.state.active("x")), s.scrollbarXWidth = 0, s.scrollbarXLeft = 0, t.scrollLeft = s.isRtl === true ? s.contentWidth : 0), s.scrollbarYActive ? t.classList.add(j.state.active("y")) : (t.classList.remove(j.state.active("y")), s.scrollbarYHeight = 0, s.scrollbarYTop = 0, t.scrollTop = 0);
  }
  function Ml(s, t) {
    return s.settings.minScrollbarLength && (t = Math.max(t, s.settings.minScrollbarLength)), s.settings.maxScrollbarLength && (t = Math.min(t, s.settings.maxScrollbarLength)), t;
  }
  function Mv(s, t) {
    var e = { width: t.railXWidth }, i = Math.floor(s.scrollTop);
    t.isRtl ? e.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth - t.contentWidth : e.left = s.scrollLeft, t.isScrollbarXUsingBottom ? e.bottom = t.scrollbarXBottom - i : e.top = t.scrollbarXTop + i, ct(t.scrollbarXRail, e);
    var n = { top: i, height: t.railYHeight };
    t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + s.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth - 9 : n.right = t.scrollbarYRight - s.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + s.scrollLeft + t.containerWidth * 2 - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + s.scrollLeft, ct(t.scrollbarYRail, n), ct(t.scrollbarX, {
      left: t.scrollbarXLeft,
      width: t.scrollbarXWidth - t.railBorderXWidth
    }), ct(t.scrollbarY, {
      top: t.scrollbarYTop,
      height: t.scrollbarYHeight - t.railBorderYWidth
    });
  }
  function Rv(s) {
    s.element, s.event.bind(s.scrollbarY, "mousedown", function(t) {
      return t.stopPropagation();
    }), s.event.bind(s.scrollbarYRail, "mousedown", function(t) {
      var e = t.pageY - window.pageYOffset - s.scrollbarYRail.getBoundingClientRect().top, i = e > s.scrollbarYTop ? 1 : -1;
      s.element.scrollTop += i * s.containerHeight, Ht(s), t.stopPropagation();
    }), s.event.bind(s.scrollbarX, "mousedown", function(t) {
      return t.stopPropagation();
    }), s.event.bind(s.scrollbarXRail, "mousedown", function(t) {
      var e = t.pageX - window.pageXOffset - s.scrollbarXRail.getBoundingClientRect().left, i = e > s.scrollbarXLeft ? 1 : -1;
      s.element.scrollLeft += i * s.containerWidth, Ht(s), t.stopPropagation();
    });
  }
  function Pv(s) {
    Rl(s, [
      "containerWidth",
      "contentWidth",
      "pageX",
      "railXWidth",
      "scrollbarX",
      "scrollbarXWidth",
      "scrollLeft",
      "x",
      "scrollbarXRail"
    ]), Rl(s, [
      "containerHeight",
      "contentHeight",
      "pageY",
      "railYHeight",
      "scrollbarY",
      "scrollbarYHeight",
      "scrollTop",
      "y",
      "scrollbarYRail"
    ]);
  }
  function Rl(s, t) {
    var e = t[0], i = t[1], n = t[2], o = t[3], r = t[4], a = t[5], l = t[6], p = t[7], u = t[8], _ = s.element, f = null, g = null, m = null;
    function b(y) {
      y.touches && y.touches[0] && (y[n] = y.touches[0].pageY), _[l] = f + m * (y[n] - g), Mh(s, p), Ht(s), y.stopPropagation(), y.type.startsWith("touch") && y.changedTouches.length > 1 && y.preventDefault();
    }
    function v() {
      Rh(s, p), s[u].classList.remove(j.state.clicking), s.event.unbind(s.ownerDocument, "mousemove", b);
    }
    function T(y, C) {
      f = _[l], C && y.touches && (y[n] = y.touches[0].pageY), g = y[n], m = (s[i] - s[e]) / (s[o] - s[a]), C ? s.event.bind(s.ownerDocument, "touchmove", b) : (s.event.bind(s.ownerDocument, "mousemove", b), s.event.once(s.ownerDocument, "mouseup", v), y.preventDefault()), s[u].classList.add(j.state.clicking), y.stopPropagation();
    }
    s.event.bind(s[r], "mousedown", function(y) {
      T(y);
    }), s.event.bind(s[r], "touchstart", function(y) {
      T(y, true);
    });
  }
  function Bv(s) {
    var t = s.element, e = function() {
      return Jt(t, ":hover");
    }, i = function() {
      return Jt(s.scrollbarX, ":focus") || Jt(s.scrollbarY, ":focus");
    };
    function n(o, r) {
      var a = Math.floor(t.scrollTop);
      if (o === 0) {
        if (!s.scrollbarYActive)
          return false;
        if (a === 0 && r > 0 || a >= s.contentHeight - s.containerHeight && r < 0)
          return !s.settings.wheelPropagation;
      }
      var l = t.scrollLeft;
      if (r === 0) {
        if (!s.scrollbarXActive)
          return false;
        if (l === 0 && o < 0 || l >= s.contentWidth - s.containerWidth && o > 0)
          return !s.settings.wheelPropagation;
      }
      return true;
    }
    s.event.bind(s.ownerDocument, "keydown", function(o) {
      if (!(o.isDefaultPrevented && o.isDefaultPrevented() || o.defaultPrevented) && !(!e() && !i())) {
        var r = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
        if (r) {
          if (r.tagName === "IFRAME")
            r = r.contentDocument.activeElement;
          else
            for (; r.shadowRoot; )
              r = r.shadowRoot.activeElement;
          if (Lv(r))
            return;
        }
        var a = 0, l = 0;
        switch (o.which) {
          case 37:
            o.metaKey ? a = -s.contentWidth : o.altKey ? a = -s.containerWidth : a = -30;
            break;
          case 38:
            o.metaKey ? l = s.contentHeight : o.altKey ? l = s.containerHeight : l = 30;
            break;
          case 39:
            o.metaKey ? a = s.contentWidth : o.altKey ? a = s.containerWidth : a = 30;
            break;
          case 40:
            o.metaKey ? l = -s.contentHeight : o.altKey ? l = -s.containerHeight : l = -30;
            break;
          case 32:
            o.shiftKey ? l = s.containerHeight : l = -s.containerHeight;
            break;
          case 33:
            l = s.containerHeight;
            break;
          case 34:
            l = -s.containerHeight;
            break;
          case 36:
            l = s.contentHeight;
            break;
          case 35:
            l = -s.contentHeight;
            break;
          default:
            return;
        }
        s.settings.suppressScrollX && a !== 0 || s.settings.suppressScrollY && l !== 0 || (t.scrollTop -= l, t.scrollLeft += a, Ht(s), n(a, l) && o.preventDefault());
      }
    });
  }
  function Hv(s) {
    var t = s.element;
    function e(r, a) {
      var l = Math.floor(t.scrollTop), p = t.scrollTop === 0, u = l + t.offsetHeight === t.scrollHeight, _ = t.scrollLeft === 0, f = t.scrollLeft + t.offsetWidth === t.scrollWidth, g;
      return Math.abs(a) > Math.abs(r) ? g = p || u : g = _ || f, g ? !s.settings.wheelPropagation : true;
    }
    function i(r) {
      var a = r.deltaX, l = -1 * r.deltaY;
      return (typeof a > "u" || typeof l > "u") && (a = -1 * r.wheelDeltaX / 6, l = r.wheelDeltaY / 6), r.deltaMode && r.deltaMode === 1 && (a *= 10, l *= 10), a !== a && l !== l && (a = 0, l = r.wheelDelta), r.shiftKey ? [-l, -a] : [a, l];
    }
    function n(r, a, l) {
      if (!Ve.isWebKit && t.querySelector("select:focus"))
        return true;
      if (!t.contains(r))
        return false;
      for (var p = r; p && p !== t; ) {
        if (p.classList.contains(j.element.consuming))
          return true;
        var u = Nt(p);
        if (l && u.overflowY.match(/(scroll|auto)/)) {
          var _ = p.scrollHeight - p.clientHeight;
          if (_ > 0 && (p.scrollTop > 0 && l < 0 || p.scrollTop < _ && l > 0))
            return true;
        }
        if (a && u.overflowX.match(/(scroll|auto)/)) {
          var f = p.scrollWidth - p.clientWidth;
          if (f > 0 && (p.scrollLeft > 0 && a < 0 || p.scrollLeft < f && a > 0))
            return true;
        }
        p = p.parentNode;
      }
      return false;
    }
    function o(r) {
      var a = i(r), l = a[0], p = a[1];
      if (!n(r.target, l, p)) {
        var u = false;
        s.settings.useBothWheelAxes ? s.scrollbarYActive && !s.scrollbarXActive ? (p ? t.scrollTop -= p * s.settings.wheelSpeed : t.scrollTop += l * s.settings.wheelSpeed, u = true) : s.scrollbarXActive && !s.scrollbarYActive && (l ? t.scrollLeft += l * s.settings.wheelSpeed : t.scrollLeft -= p * s.settings.wheelSpeed, u = true) : (t.scrollTop -= p * s.settings.wheelSpeed, t.scrollLeft += l * s.settings.wheelSpeed), Ht(s), u = u || e(l, p), u && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
      }
    }
    typeof window.onwheel < "u" ? s.event.bind(t, "wheel", o) : typeof window.onmousewheel < "u" && s.event.bind(t, "mousewheel", o);
  }
  function Vv(s) {
    if (!Ve.supportsTouch && !Ve.supportsIePointer)
      return;
    var t = s.element;
    function e(m, b) {
      var v = Math.floor(t.scrollTop), T = t.scrollLeft, y = Math.abs(m), C = Math.abs(b);
      if (C > y) {
        if (b < 0 && v === s.contentHeight - s.containerHeight || b > 0 && v === 0)
          return window.scrollY === 0 && b > 0 && Ve.isChrome;
      } else if (y > C && (m < 0 && T === s.contentWidth - s.containerWidth || m > 0 && T === 0))
        return true;
      return true;
    }
    function i(m, b) {
      t.scrollTop -= b, t.scrollLeft -= m, Ht(s);
    }
    var n = {}, o = 0, r = {}, a = null;
    function l(m) {
      return m.targetTouches ? m.targetTouches[0] : m;
    }
    function p(m) {
      return m.pointerType && m.pointerType === "pen" && m.buttons === 0 ? false : !!(m.targetTouches && m.targetTouches.length === 1 || m.pointerType && m.pointerType !== "mouse" && m.pointerType !== m.MSPOINTER_TYPE_MOUSE);
    }
    function u(m) {
      if (p(m)) {
        var b = l(m);
        n.pageX = b.pageX, n.pageY = b.pageY, o = (/* @__PURE__ */ new Date()).getTime(), a !== null && clearInterval(a);
      }
    }
    function _(m, b, v) {
      if (!t.contains(m))
        return false;
      for (var T = m; T && T !== t; ) {
        if (T.classList.contains(j.element.consuming))
          return true;
        var y = Nt(T);
        if (v && y.overflowY.match(/(scroll|auto)/)) {
          var C = T.scrollHeight - T.clientHeight;
          if (C > 0 && (T.scrollTop > 0 && v < 0 || T.scrollTop < C && v > 0))
            return true;
        }
        if (b && y.overflowX.match(/(scroll|auto)/)) {
          var E = T.scrollWidth - T.clientWidth;
          if (E > 0 && (T.scrollLeft > 0 && b < 0 || T.scrollLeft < E && b > 0))
            return true;
        }
        T = T.parentNode;
      }
      return false;
    }
    function f(m) {
      if (p(m)) {
        var b = l(m), v = { pageX: b.pageX, pageY: b.pageY }, T = v.pageX - n.pageX, y = v.pageY - n.pageY;
        if (_(m.target, T, y))
          return;
        i(T, y), n = v;
        var C = (/* @__PURE__ */ new Date()).getTime(), E = C - o;
        E > 0 && (r.x = T / E, r.y = y / E, o = C), e(T, y) && m.preventDefault();
      }
    }
    function g() {
      s.settings.swipeEasing && (clearInterval(a), a = setInterval(function() {
        if (s.isInitialized) {
          clearInterval(a);
          return;
        }
        if (!r.x && !r.y) {
          clearInterval(a);
          return;
        }
        if (Math.abs(r.x) < 0.01 && Math.abs(r.y) < 0.01) {
          clearInterval(a);
          return;
        }
        if (!s.element) {
          clearInterval(a);
          return;
        }
        i(r.x * 30, r.y * 30), r.x *= 0.8, r.y *= 0.8;
      }, 10));
    }
    Ve.supportsTouch ? (s.event.bind(t, "touchstart", u), s.event.bind(t, "touchmove", f), s.event.bind(t, "touchend", g)) : Ve.supportsIePointer && (window.PointerEvent ? (s.event.bind(t, "pointerdown", u), s.event.bind(t, "pointermove", f), s.event.bind(t, "pointerup", g)) : window.MSPointerEvent && (s.event.bind(t, "MSPointerDown", u), s.event.bind(t, "MSPointerMove", f), s.event.bind(t, "MSPointerUp", g)));
  }
  var Wv = function() {
    return {
      handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollingThreshold: 1e3,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: false,
      suppressScrollY: false,
      swipeEasing: true,
      useBothWheelAxes: false,
      wheelPropagation: true,
      wheelSpeed: 1
    };
  };
  var Fv = {
    "click-rail": Rv,
    "drag-thumb": Pv,
    keyboard: Bv,
    wheel: Hv,
    touch: Vv
  };
  var Zi = function(t, e) {
    var i = this;
    if (e === void 0 && (e = {}), typeof t == "string" && (t = document.querySelector(t)), !t || !t.nodeName)
      throw new Error("no element is specified to initialize PerfectScrollbar");
    this.element = t, t.classList.add(j.main), this.settings = Wv();
    for (var n in e)
      this.settings[n] = e[n];
    this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
    var o = function() {
      return t.classList.add(j.state.focus);
    }, r = function() {
      return t.classList.remove(j.state.focus);
    };
    this.isRtl = Nt(t).direction === "rtl", this.isRtl === true && t.classList.add(j.rtl), this.isNegativeScroll = function() {
      var p = t.scrollLeft, u = null;
      return t.scrollLeft = -1, u = t.scrollLeft < 0, t.scrollLeft = p, u;
    }(), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new li(), this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = Is(j.element.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = Is(j.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", o), this.event.bind(this.scrollbarX, "blur", r), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
    var a = Nt(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(a.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = false, this.scrollbarXTop = F(a.top)) : this.isScrollbarXUsingBottom = true, this.railBorderXWidth = F(a.borderLeftWidth) + F(a.borderRightWidth), ct(this.scrollbarXRail, { display: "block" }), this.railXMarginWidth = F(a.marginLeft) + F(a.marginRight), ct(this.scrollbarXRail, { display: "" }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = Is(j.element.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = Is(j.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", o), this.event.bind(this.scrollbarY, "blur", r), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
    var l = Nt(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(l.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = false, this.scrollbarYLeft = F(l.left)) : this.isScrollbarYUsingRight = true, this.scrollbarYOuterWidth = this.isRtl ? Nv(this.scrollbarY) : null, this.railBorderYWidth = F(l.borderTopWidth) + F(l.borderBottomWidth), ct(this.scrollbarYRail, { display: "block" }), this.railYMarginHeight = F(l.marginTop) + F(l.marginBottom), ct(this.scrollbarYRail, { display: "" }), this.railYHeight = null, this.railYRatio = null, this.reach = {
      x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
      y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
    }, this.isAlive = true, this.settings.handlers.forEach(function(p) {
      return Fv[p](i);
    }), this.lastScrollTop = Math.floor(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", function(p) {
      return i.onScroll(p);
    }), Ht(this);
  };
  Zi.prototype.update = function() {
    this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, ct(this.scrollbarXRail, { display: "block" }), ct(this.scrollbarYRail, { display: "block" }), this.railXMarginWidth = F(Nt(this.scrollbarXRail).marginLeft) + F(Nt(this.scrollbarXRail).marginRight), this.railYMarginHeight = F(Nt(this.scrollbarYRail).marginTop) + F(Nt(this.scrollbarYRail).marginBottom), ct(this.scrollbarXRail, { display: "none" }), ct(this.scrollbarYRail, { display: "none" }), Ht(this), fn(this, "top", 0, false, true), fn(this, "left", 0, false, true), ct(this.scrollbarXRail, { display: "" }), ct(this.scrollbarYRail, { display: "" }));
  };
  Zi.prototype.onScroll = function(t) {
    this.isAlive && (Ht(this), fn(this, "top", this.element.scrollTop - this.lastScrollTop), fn(
      this,
      "left",
      this.element.scrollLeft - this.lastScrollLeft
    ), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
  };
  Zi.prototype.destroy = function() {
    this.isAlive && (this.event.unbindAll(), Ye(this.scrollbarX), Ye(this.scrollbarY), Ye(this.scrollbarXRail), Ye(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = false);
  };
  Zi.prototype.removePsClasses = function() {
    this.element.className = this.element.className.split(" ").filter(function(t) {
      return !t.match(/^ps([-_].+|)$/);
    }).join(" ");
  };
  var St = "te";
  var It = "ps";
  var yo = [
    { te: `scrollX.${St}.${It}`, ps: "ps-scroll-x" },
    { te: `scrollY.${St}.${It}`, ps: "ps-scroll-y" },
    { te: `scrollUp.${St}.${It}`, ps: "ps-scroll-up" },
    { te: `scrollDown.${St}.${It}`, ps: "ps-scroll-down" },
    { te: `scrollLeft.${St}.${It}`, ps: "ps-scroll-left" },
    { te: `scrollRight.${St}.${It}`, ps: "ps-scroll-right" },
    { te: `scrollXEnd.${St}.${It}`, ps: "ps-x-reach-end" },
    { te: `scrollYEnd.${St}.${It}`, ps: "ps-y-reach-end" },
    { te: `scrollXStart.${St}.${It}`, ps: "ps-x-reach-start" },
    { te: `scrollYStart.${St}.${It}`, ps: "ps-y-reach-start" }
  ];
  var Vi = "datatable";
  var gt = `data-te-${Vi}`;
  var ki = `te.${Vi}`;
  var An = `.${ki}`;
  var uT = `[${gt}-inner-ref]`;
  var wo = `[${gt}-cell-ref]`;
  var pT = `[${gt}-header-ref]`;
  var _T = `[${gt}-header-checkbox-ref]`;
  var fT = `[${gt}-pagination-right-ref]`;
  var mT = `[${gt}-pagination-left-ref]`;
  var gT = `[${gt}-pagination-start-ref]`;
  var bT = `[${gt}-pagination-end-ref]`;
  var vT = `[${gt}-pagination-nav-ref]`;
  var TT = `[${gt}-select-ref]`;
  var ko = `[${gt}-sort-icon-ref]`;
  var Ti = `[${gt}-row-ref]`;
  var xo = `[${gt}-row-checkbox-ref]`;
  var ET = `selectRows${An}`;
  var Hl = `render${An}`;
  var CT = `rowClick${An}`;
  var AT = `update${An}`;
  var sn = "te.rating";
  var ci = `.${sn}`;
  var Wl = `onSelect${ci}`;
  var $E = `onHover${ci}`;
  var Fl = `keyup${ci}`;
  var Yl = `focusout${ci}`;
  var jl = `keydown${ci}`;
  var Kl = `mousedown${ci}`;
  var xi = "te.popconfirm";
  var Vh = `.${xi}`;
  var LE = `cancel${Vh}`;
  var NE = `confirm${Vh}`;
  var Oi = "te.lightbox";
  var WE = `.${Oi}`;
  var FE = ".data-api";
  var Me = `click${WE}${FE}`;
  var Fh = "[data-te-lightbox-init]";
  var YE = `${Fh} img:not([data-te-lightbox-disabled])`;
  var ir = "te.validation";
  var yn = `.${ir}`;
  var Yh = "data-te-validate";
  var n0 = "data-te-submit-btn-ref";
  var o0 = `[${Yh}]`;
  var a0 = `[${n0}]`;
  var l0 = `validated${yn}`;
  var c0 = `valid${yn}`;
  var h0 = `invalid${yn}`;
  var d0 = `changed${yn}`;
  var Zt = "pan";
  var A0 = `${Zt}start`;
  var y0 = `${Zt}end`;
  var w0 = `${Zt}move`;
  var Ue = "pinch";
  var D0 = `${Ue}end`;
  var $0 = `${Ue}start`;
  var L0 = `${Ue}move`;
  var Wi = "rotate";
  var V0 = `${Wi}end`;
  var W0 = `${Wi}start`;
  var sr = "touch";
  var Mo = `te.${sr}`;
  var nr = "smoothScroll";
  var Si = `te.${nr}`;
  var Or = `.${Si}`;
  var G0 = `scrollStart${Or}`;
  var q0 = `scrollEnd${Or}`;
  var Z0 = `scrollCancel${Or}`;
  var Ii = "te.clipboard";
  var sC = `.${Ii}`;
  var rC = `copy${sC}`;
  var rr = "infiniteScroll";
  var Bs = `te.${rr}`;
  var Fi = "loadingManagement";
  var Hs = `te.${Fi}`;
  var uC = `show.te.${Fi}`;
  var on = "datetimepicker";
  var Di = `te.${on}`;
  var Sr = `.${Di}`;
  var qh = "data-te-datepicker-init";
  var Zh = "data-te-timepicker-init";
  var DC = "data-te-date-timepicker-toggle-ref";
  var LC = "data-te-timepicker-toggle-button-ref";
  var NC = `[${Zh}]`;
  var MC = `[${qh}]`;
  var RC = `[${DC}]`;
  var PC = `[${LC}]`;
  var FC = `open${Sr}`;
  var YC = `close${Sr}`;
  var jC = `datetimeChange${Sr}`;
  var Re = $("div");
  var rn = "sticky";
  var $i = `te.${rn}`;
  var Jh = `.${$i}`;
  var XC = `active${Jh}`;
  var GC = `inactive${Jh}`;
  var Li = "te.autocomplete";
  var aA = "data-te-autocomplete-custom-content-ref";
  var hA = `[${aA}]`;
  var wn = `.${Li}`;
  var uA = `close${wn}`;
  var pA = `open${wn}`;
  var lc = `itemSelect${wn}`;
  var _A = `update${wn}`;
  var an = "multiRangeSlider";
  var ln = `te.${an}`;
  var CA = `.${ln}`;
  var cc = `valueChanged${CA}`;
  var xA = (s) => {
    gc(() => {
      const t = mc();
      if (t) {
        const e = s.NAME, i = t.fn[e];
        t.fn[e] = s.jQueryInterface, t.fn[e].Constructor = s, t.fn[e].noConflict = () => (t.fn[e] = i, s.jQueryInterface);
      }
    });
  };
  var OA = (s, t) => {
    c.on(
      document,
      `click.te.${s.NAME}`,
      t,
      function(e) {
        e.preventDefault(), s.getOrCreateInstance(this).toggle();
      }
    );
  };
  var SA = (s, t) => {
    c.on(
      document,
      `click.te.${s.NAME}.data-api`,
      t,
      function(e) {
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), be(this))
          return;
        s.getOrCreateInstance(this).show();
      }
    );
  };
  var IA = (s, t) => {
    c.on(
      document,
      `click.te.${s.NAME}.data-api`,
      t,
      function(e) {
        const i = te(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), be(this))
          return;
        c.one(i, s.EVENT_HIDDEN, () => {
          Mt(this) && this.focus();
        });
        const n = d.findOne(s.OPEN_SELECTOR);
        n && n !== i && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
      }
    );
  };
  var DA = (s, t) => {
    c.on(
      document,
      `click.te.${s.NAME}`,
      t,
      (e) => {
        e.preventDefault();
        const i = e.target.closest(t);
        s.getOrCreateInstance(i).toggle();
      }
    );
  };
  var $A = (s, t) => {
    c.on(
      document,
      `click.te.${s.NAME}`,
      t,
      function(e) {
        const i = te(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), c.one(i, s.EVENT_SHOW, (r) => {
          r.defaultPrevented || c.one(i, s.EVENT_HIDDEN, () => {
            Mt(this) && this.focus();
          });
        });
        const n = d.findOne(
          `[${s.OPEN_SELECTOR}="true"]`
        );
        n && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
      }
    );
  };
  var LA = (s, t) => {
    c.one(
      document,
      "mousedown",
      t,
      s.autoInitial(new s())
    );
  };
  var NA = (s, t) => {
    c.on(
      document,
      `click.te.${s.NAME}.data-api`,
      t,
      function(e) {
        (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
        const i = lr(this);
        d.find(i).forEach((o) => {
          s.getOrCreateInstance(o, { toggle: false }).toggle();
        });
      }
    );
  };
  var MA = (s, t) => {
    [].slice.call(
      document.querySelectorAll(t)
    ).map(function(i) {
      return new s(i);
    });
  };
  var RA = (s, t) => {
    [].slice.call(
      document.querySelectorAll(t)
    ).map(function(i) {
      return new s(i);
    });
  };
  var PA = (s, t) => {
    d.find(t).forEach((e) => {
      new s(e);
    }), c.on(
      document,
      `click.te.${s.NAME}.data-api`,
      `${t} img:not([data-te-lightbox-disabled])`,
      s.toggle()
    );
  };
  var BA = (s, t) => {
    const e = (o) => o[0] === "{" && o[o.length - 1] === "}" || o[0] === "[" && o[o.length - 1] === "]", i = (o) => typeof o != "string" ? o : e(o) ? JSON.parse(o.replace(/'/g, '"')) : o, n = (o) => {
      const r = {};
      return Object.keys(o).forEach((a) => {
        if (a.match(/dataset.*/)) {
          const l = a.slice(7, 8).toLowerCase().concat(a.slice(8));
          r[l] = i(o[a]);
        }
      }), r;
    };
    d.find(t).forEach((o) => {
      if (h.getDataAttribute(o, "chart") !== "bubble" && h.getDataAttribute(o, "chart") !== "scatter") {
        const r = h.getDataAttributes(o), a = {
          data: {
            datasets: [n(r)]
          }
        };
        return r.chart && (a.type = r.chart), r.labels && (a.data.labels = JSON.parse(r.labels.replace(/'/g, '"'))), new s(o, {
          ...a,
          ...wi[a.type]
        });
      }
      return null;
    });
  };
  var HA = class {
    constructor() {
      this.inits = [];
    }
    get initialized() {
      return this.inits;
    }
    isInited(t) {
      return this.inits.includes(t);
    }
    add(t) {
      this.isInited(t) || this.inits.push(t);
    }
  };
  var ar = new HA();
  var Ni = {
    alert: {
      name: "Alert",
      selector: "[data-te-alert-init]",
      isToggler: false
    },
    animation: {
      name: "Animate",
      selector: "[data-te-animation-init]",
      isToggler: false
    },
    carousel: {
      name: "Carousel",
      selector: "[data-te-carousel-init]",
      isToggler: false
    },
    chips: {
      name: "ChipsInput",
      selector: "[data-te-chips-input-init]",
      isToggler: false
    },
    chip: {
      name: "Chip",
      selector: "[data-te-chip-init]",
      isToggler: false,
      onInit: "init"
    },
    datepicker: {
      name: "Datepicker",
      selector: "[data-te-datepicker-init]",
      isToggler: false
    },
    datetimepicker: {
      name: "Datetimepicker",
      selector: "[data-te-date-timepicker-init]",
      isToggler: false
    },
    input: {
      name: "Input",
      selector: "[data-te-input-wrapper-init]",
      isToggler: false
    },
    perfectScrollbar: {
      name: "PerfectScrollbar",
      selector: "[data-te-perfect-scrollbar-init]",
      isToggler: false
    },
    rating: {
      name: "Rating",
      selector: "[data-te-rating-init]",
      isToggler: false
    },
    scrollspy: {
      name: "ScrollSpy",
      selector: "[data-te-spy='scroll']",
      isToggler: false
    },
    select: {
      name: "Select",
      selector: "[data-te-select-init]",
      isToggler: false
    },
    sidenav: {
      name: "Sidenav",
      selector: "[data-te-sidenav-init]",
      isToggler: false
    },
    stepper: {
      name: "Stepper",
      selector: "[data-te-stepper-init]",
      isToggler: false
    },
    timepicker: {
      name: "Timepicker",
      selector: "[data-te-timepicker-init]",
      isToggler: false
    },
    toast: {
      name: "Toast",
      selector: "[data-te-toast-init]",
      isToggler: false
    },
    datatable: {
      name: "Datatable",
      selector: "[data-te-datatable-init]"
    },
    popconfirm: {
      name: "Popconfirm",
      selector: "[data-te-toggle='popconfirm']"
    },
    validation: {
      name: "Validation",
      selector: "[data-te-validation-init]"
    },
    smoothScroll: {
      name: "SmoothScroll",
      selector: "a[data-te-smooth-scroll-init]"
    },
    lazyLoad: {
      name: "LazyLoad",
      selector: "[data-te-lazy-load-init]"
    },
    clipboard: {
      name: "Clipboard",
      selector: "[data-te-clipboard-init]"
    },
    infiniteScroll: {
      name: "InfiniteScroll",
      selector: "[data-te-infinite-scroll-init]"
    },
    loadingManagement: {
      name: "LoadingManagement",
      selector: "[data-te-loading-management-init]"
    },
    sticky: {
      name: "Sticky",
      selector: "[data-te-sticky-init]"
    },
    multiRangeSlider: {
      name: "MultiRangeSlider",
      selector: "[data-te-multi-range-slider-init]"
    },
    // advancedInits
    chart: {
      name: "Chart",
      selector: "[data-te-chart]",
      isToggler: false,
      advanced: BA
    },
    // togglers
    button: {
      name: "Button",
      selector: "[data-te-toggle='button']",
      isToggler: true,
      callback: DA
    },
    collapse: {
      name: "Collapse",
      selector: "[data-te-collapse-init]",
      isToggler: true,
      callback: NA
    },
    dropdown: {
      name: "Dropdown",
      selector: "[data-te-dropdown-toggle-ref]",
      isToggler: true,
      callback: OA
    },
    modal: {
      name: "Modal",
      selector: "[data-te-toggle='modal']",
      isToggler: true,
      callback: $A
    },
    ripple: {
      name: "Ripple",
      selector: "[data-te-ripple-init]",
      isToggler: true,
      callback: LA
    },
    offcanvas: {
      name: "Offcanvas",
      selector: "[data-te-offcanvas-toggle]",
      isToggler: true,
      callback: IA
    },
    tab: {
      name: "Tab",
      selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
      isToggler: true,
      callback: SA
    },
    tooltip: {
      name: "Tooltip",
      selector: "[data-te-toggle='tooltip']",
      isToggler: false,
      callback: MA
    },
    popover: {
      name: "Popover",
      selector: "[data-te-toggle='popover']",
      isToggler: true,
      callback: RA
    },
    lightbox: {
      name: "Lightbox",
      selector: "[data-te-lightbox-init]",
      isToggler: true,
      callback: PA
    },
    touch: {
      name: "Touch",
      selector: "[data-te-touch-init]"
    }
  };
  var VA = (s) => Ni[s.NAME] || null;
  var WA = (s, t) => {
    if (!s || !t.allowReinits && ar.isInited(s.NAME))
      return;
    ar.add(s.NAME);
    const e = VA(s), i = (e == null ? void 0 : e.isToggler) || false;
    if (xA(s), e != null && e.advanced) {
      e == null || e.advanced(s, e == null ? void 0 : e.selector);
      return;
    }
    if (i) {
      e == null || e.callback(s, e == null ? void 0 : e.selector);
      return;
    }
    d.find(e == null ? void 0 : e.selector).forEach((n) => {
      let o = s.getInstance(n);
      o || (o = new s(n), e != null && e.onInit && o[e.onInit]());
    });
  };
  var FA = (s, t) => {
    s.forEach((e) => WA(e, t));
  };
  var YA = {
    allowReinits: false,
    checkOtherImports: false
  };
  var qA = (s, t = {}) => {
    t = { ...YA, ...t };
    const e = Object.keys(Ni).map((i) => {
      if (!!document.querySelector(Ni[i].selector)) {
        const o = s[Ni[i].name];
        return !o && !ar.isInited(i) && t.checkOtherImports && console.warn(
          `Please import ${Ni[i].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
        ), o;
      }
    });
    FA(e, t);
  };

  // src/js/tw-elements.js
  qA({ Carousel: Xt, Collapse: Qt, Dropdown: $t });
})();
/*! Bundled license information:

tw-elements/dist/js/tw-elements.es.min.js:
  (*!
  * TW Elements 1.1.0
  * 
  * TW Elements is an open-source UI kit of advanced components for TailwindCSS.
  * Copyright © 2023 MDBootstrap.com
  * 
  * Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
  * In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
  * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
  * 
  * If you would like to purchase a COMMERCIAL, non-AGPL license for TWE, please check out our pricing: https://tw-elements.com/pro/
  *)

tw-elements/dist/js/tw-elements.es.min.js:
  (*!
   * perfect-scrollbar v1.5.3
   * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
   * Licensed under MIT
   *)
*/
