(function() {
  function aa() {
    return function(a) {
      return a;
    };
  }
  function h() {
    return function() {};
  }
  function ba(a) {
    return function(b) {
      this[a] = b;
    };
  }
  function u(a) {
    return function() {
      return this[a];
    };
  }
  function w(a) {
    return function() {
      return a;
    };
  }
  var y,
    ca =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
          },
    ea =
      "undefined" != typeof window && window === this
        ? this
        : "undefined" != typeof global && null != global ? global : this;
  function ja() {
    ja = h();
    ea.Symbol || (ea.Symbol = ka);
  }
  var ka = (function() {
    var a = 0;
    return function(b) {
      return "jscomp_symbol_" + (b || "") + a++;
    };
  })();
  function la() {
    ja();
    var a = ea.Symbol.iterator;
    a || (a = ea.Symbol.iterator = ea.Symbol("iterator"));
    "function" != typeof Array.prototype[a] &&
      ca(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
          return ma(this);
        }
      });
    la = h();
  }
  function ma(a) {
    var b = 0;
    return na(function() {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    });
  }
  function na(a) {
    la();
    a = { next: a };
    a[ea.Symbol.iterator] = function() {
      return this;
    };
    return a;
  }
  function oa(a) {
    la();
    var b = a[Symbol.iterator];
    return b ? b.call(a) : ma(a);
  }
  var pa =
      "function" == typeof Object.create
        ? Object.create
        : function(a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    ra;
  if ("function" == typeof Object.setPrototypeOf) ra = Object.setPrototypeOf;
  else {
    var sa;
    a: {
      var ta = { Ui: !0 },
        ua = {};
      try {
        ua.__proto__ = ta;
        sa = ua.Ui;
        break a;
      } catch (a) {}
      sa = !1;
    }
    ra = sa
      ? function(a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var va = ra;
  function C(a, b) {
    a.prototype = pa(b.prototype);
    a.prototype.constructor = a;
    if (va) va(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.X = b.prototype;
  }
  function wa(a) {
    if (!(a instanceof Array)) {
      a = oa(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  function xa(a, b) {
    if (b) {
      var c = ea;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d &&
        null != b &&
        ca(c, a, { configurable: !0, writable: !0, value: b });
    }
  }
  xa("Math.log10", function(a) {
    return a
      ? a
      : function(a) {
          return Math.log(a) / Math.LN10;
        };
  });
  function ya(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  xa("WeakMap", function(a) {
    function b(a) {
      this.ca = (f += Math.random() + 1).toString();
      if (a) {
        ja();
        la();
        a = oa(a);
        for (var b; !(b = a.next()).done; ) (b = b.value), this.set(b[0], b[1]);
      }
    }
    function c(a) {
      ya(a, e) || ca(a, e, { value: {} });
    }
    function d(a) {
      var b = Object[a];
      b &&
        (Object[a] = function(a) {
          c(a);
          return b(a);
        });
    }
    if (
      (function() {
        if (!a || !Object.seal) return !1;
        try {
          var b = Object.seal({}),
            c = Object.seal({}),
            d = new a([[b, 2], [c, 3]]);
          if (2 != d.get(b) || 3 != d.get(c)) return !1;
          d["delete"](b);
          d.set(c, 4);
          return !d.has(b) && 4 == d.get(c);
        } catch (m) {
          return !1;
        }
      })()
    )
      return a;
    var e = "$jscomp_hidden_" + Math.random();
    d("freeze");
    d("preventExtensions");
    d("seal");
    var f = 0;
    b.prototype.set = function(a, b) {
      c(a);
      if (!ya(a, e)) throw Error("WeakMap key fail: " + a);
      a[e][this.ca] = b;
      return this;
    };
    b.prototype.get = function(a) {
      return ya(a, e) ? a[e][this.ca] : void 0;
    };
    b.prototype.has = function(a) {
      return ya(a, e) && ya(a[e], this.ca);
    };
    b.prototype["delete"] = function(a) {
      return ya(a, e) && ya(a[e], this.ca) ? delete a[e][this.ca] : !1;
    };
    return b;
  });
  xa("Map", function(a) {
    function b() {
      var a = {};
      return (a.Hb = a.next = a.head = a);
    }
    function c(a, b) {
      var c = a.A;
      return na(function() {
        if (c) {
          for (; c.head != a.A; ) c = c.Hb;
          for (; c.next != c.head; )
            return (c = c.next), { done: !1, value: b(c) };
          c = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(a, b) {
      var c = b && typeof b;
      "object" == c || "function" == c
        ? f.has(b) ? (c = f.get(b)) : ((c = "" + ++g), f.set(b, c))
        : (c = "p_" + b);
      var d = a.B[c];
      if (d && ya(a.B, c))
        for (a = 0; a < d.length; a++) {
          var e = d[a];
          if ((b !== b && e.key !== e.key) || b === e.key)
            return { id: c, list: d, index: a, Ia: e };
        }
      return {
        id: c,
        list: d,
        index: -1,
        Ia: void 0
      };
    }
    function e(a) {
      this.B = {};
      this.A = b();
      this.size = 0;
      if (a) {
        a = oa(a);
        for (var c; !(c = a.next()).done; ) (c = c.value), this.set(c[0], c[1]);
      }
    }
    if (
      (function() {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var b = Object.seal({ x: 4 }),
            c = new a(oa([[b, "s"]]));
          if (
            "s" != c.get(b) ||
            1 != c.size ||
            c.get({ x: 4 }) ||
            c.set({ x: 4 }, "t") != c ||
            2 != c.size
          )
            return !1;
          var d = c.entries(),
            e = d.next();
          if (e.done || e.value[0] != b || "s" != e.value[1]) return !1;
          e = d.next();
          return e.done ||
            4 != e.value[0].x ||
            "t" != e.value[1] ||
            !d.next().done
            ? !1
            : !0;
        } catch (p) {
          return !1;
        }
      })()
    )
      return a;
    ja();
    la();
    var f = new WeakMap();
    e.prototype.set = function(a, b) {
      a = 0 === a ? 0 : a;
      var c = d(this, a);
      c.list || (c.list = this.B[c.id] = []);
      c.Ia
        ? (c.Ia.value = b)
        : ((c.Ia = {
            next: this.A,
            Hb: this.A.Hb,
            head: this.A,
            key: a,
            value: b
          }),
          c.list.push(c.Ia),
          (this.A.Hb.next = c.Ia),
          (this.A.Hb = c.Ia),
          this.size++);
      return this;
    };
    e.prototype["delete"] = function(a) {
      a = d(this, a);
      return a.Ia && a.list
        ? (a.list.splice(a.index, 1),
          a.list.length || delete this.B[a.id],
          (a.Ia.Hb.next = a.Ia.next),
          (a.Ia.next.Hb = a.Ia.Hb),
          (a.Ia.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function() {
      this.B = {};
      this.A = this.A.Hb = b();
      this.size = 0;
    };
    e.prototype.has = function(a) {
      return !!d(this, a).Ia;
    };
    e.prototype.get = function(a) {
      return (a = d(this, a).Ia) && a.value;
    };
    e.prototype.entries = function() {
      return c(this, function(a) {
        return [a.key, a.value];
      });
    };
    e.prototype.keys = function() {
      return c(this, function(a) {
        return a.key;
      });
    };
    e.prototype.values = function() {
      return c(this, function(a) {
        return a.value;
      });
    };
    e.prototype.forEach = function(a, b) {
      for (var c = this.entries(), d; !(d = c.next()).done; )
        (d = d.value), a.call(b, d[1], d[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e;
  });
  xa("Array.prototype.fill", function(a) {
    return a
      ? a
      : function(a, c, d) {
          var b = this.length || 0;
          0 > c && (c = Math.max(0, b + c));
          if (null == d || d > b) d = b;
          d = Number(d);
          0 > d && (d = Math.max(0, b + d));
          for (c = Number(c || 0); c < d; c++) this[c] = a;
          return this;
        };
  });
  xa("Set", function(a) {
    function b(a) {
      this.A = new Map();
      if (a) {
        a = oa(a);
        for (var b; !(b = a.next()).done; ) this.add(b.value);
      }
      this.size = this.A.size;
    }
    if (
      (function() {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var b = Object.seal({ x: 4 }),
            d = new a(oa([b]));
          if (
            !d.has(b) ||
            1 != d.size ||
            d.add(b) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != b || f.value[1] != b) return !1;
          f = e.next();
          return f.done ||
            f.value[0] == b ||
            4 != f.value[0].x ||
            f.value[1] != f.value[0]
            ? !1
            : e.next().done;
        } catch (g) {
          return !1;
        }
      })()
    )
      return a;
    ja();
    la();
    b.prototype.add = function(a) {
      a = 0 === a ? 0 : a;
      this.A.set(a, a);
      this.size = this.A.size;
      return this;
    };
    b.prototype["delete"] = function(a) {
      a = this.A["delete"](a);
      this.size = this.A.size;
      return a;
    };
    b.prototype.clear = function() {
      this.A.clear();
      this.size = 0;
    };
    b.prototype.has = function(a) {
      return this.A.has(a);
    };
    b.prototype.entries = function() {
      return this.A.entries();
    };
    b.prototype.values = function() {
      return this.A.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(a, b) {
      var c = this;
      this.A.forEach(function(d) {
        return a.call(b, d, d, c);
      });
    };
    return b;
  });
  xa("Object.entries", function(a) {
    return a
      ? a
      : function(a) {
          var b = [],
            d;
          for (d in a) ya(a, d) && b.push([d, a[d]]);
          return b;
        };
  });
  xa("Object.is", function(a) {
    return a
      ? a
      : function(a, c) {
          return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c;
        };
  });
  xa("Array.prototype.includes", function(a) {
    return a
      ? a
      : function(a, c) {
          var b = this;
          b instanceof String && (b = String(b));
          var e = b.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = b[c];
            if (f === a || Object.is(f, a)) return !0;
          }
          return !1;
        };
  });
  xa("Array.from", function(a) {
    return a
      ? a
      : function(a, c, d) {
          la();
          c = null != c ? c : aa();
          var b = [],
            f = a[Symbol.iterator];
          if ("function" == typeof f) {
            a = f.call(a);
            for (var g = 0; !(f = a.next()).done; )
              b.push(c.call(d, f.value, g++));
          } else
            for (f = a.length, g = 0; g < f; g++) b.push(c.call(d, a[g], g));
          return b;
        };
  });
  var za = za || {},
    E = this;
  function F(a) {
    return void 0 !== a;
  }
  function Aa(a) {
    return "string" == typeof a;
  }
  function Ba(a) {
    return "number" == typeof a;
  }
  function Ca(a, b) {
    a = a.split(".");
    var c = E;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      !a.length && F(b)
        ? (c[d] = b)
        : c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {});
  }
  var Ea = /^[\w+/_-]+[=]{0,2}$/,
    Fa = null;
  function Ga(a) {
    a = a.split(".");
    for (var b = E, c = 0; c < a.length; c++)
      if (((b = b[a[c]]), null == b)) return null;
    return b;
  }
  function Ha() {}
  function Ia(a) {
    a.kb = void 0;
    a.Te = function() {
      return a.kb ? a.kb : (a.kb = new a());
    };
  }
  function Ja(a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if (
          "[object Array]" == c ||
          ("number" == typeof a.length &&
            "undefined" != typeof a.splice &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("splice"))
        )
          return "array";
        if (
          "[object Function]" == c ||
          ("undefined" != typeof a.call &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("call"))
        )
          return "function";
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  }
  function Ka(a) {
    return "array" == Ja(a);
  }
  function La(a) {
    var b = Ja(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }
  function Ma(a) {
    return "function" == Ja(a);
  }
  function Na(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function Oa(a) {
    return a[Pa] || (a[Pa] = ++Qa);
  }
  var Pa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    Qa = 0;
  function Ra(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function Sa(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }
    return function() {
      return a.apply(b, arguments);
    };
  }
  function G(a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? (G = Ra)
      : (G = Sa);
    return G.apply(null, arguments);
  }
  function Ta(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b);
    };
  }
  function Ua() {
    return +new Date();
  }
  function I(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.X = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.vo = function(a, c, f) {
      for (
        var d = Array(arguments.length - 2), e = 2;
        e < arguments.length;
        e++
      )
        d[e - 2] = arguments[e];
      return b.prototype[c].apply(a, d);
    };
  }
  function Va(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Va);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  I(Va, Error);
  Va.prototype.name = "CustomError";
  var Wa;
  function Xa() {}
  function Ya(a) {
    return a[a.length - 1];
  }
  function Za(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (Aa(a)) return Aa(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function $a(a, b, c) {
    for (var d = a.length, e = Aa(a) ? a.split("") : a, f = 0; f < d; f++)
      f in e && b.call(c, e[f], f, a);
  }
  function ab(a, b) {
    for (
      var c = a.length, d = [], e = 0, f = Aa(a) ? a.split("") : a, g = 0;
      g < c;
      g++
    )
      if (g in f) {
        var k = f[g];
        b.call(void 0, k, g, a) && (d[e++] = k);
      }
    return d;
  }
  function bb(a, b) {
    for (
      var c = a.length, d = Array(c), e = Aa(a) ? a.split("") : a, f = 0;
      f < c;
      f++
    )
      f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }
  function db(a, b) {
    for (var c = a.length, d = Aa(a) ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function eb(a, b) {
    b = fb(a, b, void 0);
    return 0 > b ? null : Aa(a) ? a.charAt(b) : a[b];
  }
  function fb(a, b, c) {
    for (var d = a.length, e = Aa(a) ? a.split("") : a, f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a)) return f;
    return -1;
  }
  function gb(a, b) {
    return 0 <= Za(a, b);
  }
  function hb(a, b) {
    b = Za(a, b);
    var c;
    (c = 0 <= b) && ib(a, b);
    return c;
  }
  function ib(a, b) {
    Array.prototype.splice.call(a, b, 1);
  }
  function jb(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function kb(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function lb(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (La(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  }
  function mb(a, b, c, d) {
    Array.prototype.splice.apply(a, nb(arguments, 1));
  }
  function nb(a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  }
  function ob(a, b) {
    a.sort(b || pb);
  }
  function qb(a, b, c) {
    if (!La(a) || !La(b) || a.length != b.length) return !1;
    var d = a.length;
    c = c || rb;
    for (var e = 0; e < d; e++) if (!c(a[e], b[e])) return !1;
    return !0;
  }
  function pb(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function rb(a, b) {
    return a === b;
  }
  function sb(a, b, c) {
    return Math.min(Math.max(a, b), c);
  }
  function ub(a, b) {
    a %= b;
    return 0 > a * b ? a + b : a;
  }
  function vb(a, b, c) {
    return a + c * (b - a);
  }
  function wb(a) {
    return ub(a, 360);
  }
  function xb(a) {
    return a * Math.PI / 180;
  }
  function yb(a) {
    return 180 * a / Math.PI;
  }
  function zb(a, b) {
    a = wb(b) - wb(a);
    180 < a ? (a -= 360) : -180 >= a && (a = 360 + a);
    return a;
  }
  function Ab(a) {
    var b = a;
    if (a instanceof Array) (b = Array(a.length)), Bb(b, a);
    else if (a instanceof Object) {
      var c = (b = {}),
        d;
      for (d in a) a.hasOwnProperty(d) && (c[d] = Ab(a[d]));
    }
    return b;
  }
  function Bb(a, b) {
    for (var c = 0; c < b.length; ++c) b.hasOwnProperty(c) && (a[c] = Ab(b[c]));
  }
  function Cb(a, b) {
    a !== b && ((a.length = 0), b && ((a.length = b.length), Bb(a, b)));
  }
  function Db(a, b) {
    a[b] || (a[b] = []);
    return a[b];
  }
  function Fb(a, b) {
    if (null == a || null == b) return (null == a) == (null == b);
    if (a.constructor != Array && a.constructor != Object)
      throw Error("Invalid object type passed into jsproto.areObjectsEqual()");
    if (a === b) return !0;
    if (a.constructor != b.constructor) return !1;
    for (var c in a) if (!(c in b && Gb(a[c], b[c]))) return !1;
    for (var d in b) if (!(d in a)) return !1;
    return !0;
  }
  function Gb(a, b) {
    if (
      a === b ||
      !((!0 !== a && 1 !== a) || (!0 !== b && 1 !== b)) ||
      !((!1 !== a && 0 !== a) || (!1 !== b && 0 !== b))
    )
      return !0;
    if (a instanceof Object && b instanceof Object) {
      if (!Fb(a, b)) return !1;
    } else return !1;
    return !0;
  }
  function Ib(a) {
    return Jb(
      a.replace(/[+/]/g, function(a) {
        return "+" == a ? "-" : "_";
      })
    );
  }
  function Kb(a) {
    return Jb(
      a.replace(/[-_]/g, function(a) {
        return "-" == a ? "+" : "/";
      })
    );
  }
  function Jb(a) {
    return a.replace(/[.=]+$/, "");
  }
  function Lb(a, b) {
    a = new Mb(a);
    b.Pc = a.Pc;
    var c = [];
    a.forEach(function(a) {
      var b = a.Ac,
        d = a.type,
        g;
      a.Zg && (g = "");
      var k = k || (a.we ? 3 : 1);
      a.we || F(g) || (g = Nb(d));
      if ("m" == d && !l)
        if (((a = a.Ef), Aa(a))) {
          var l = {};
          Lb(a, l);
        } else a.A ? (l = a.A) : ((l = a.A = {}), Lb(a, a.A));
      c[b] = new Ob(d, k, g, l);
    });
    b.Se = c;
  }
  function Ob(a, b, c, d) {
    this.type = a;
    this.label = b;
    this.ej = c;
    this.ha = d;
  }
  function Mb(a) {
    Aa(a) ? (this.A = a) : ((this.A = a.ha), (this.C = a.ka));
    a = this.A;
    var b = Pb[a];
    if (!b) {
      var c = 1 == parseInt(a, 10) ? 0 : -1;
      Pb[a] = b = [c];
      Qb.lastIndex = 1 + c;
      c = 1;
      for (var d; (d = Qb.exec(a)); )
        (d = d[0]),
          (b[c++] = Qb.lastIndex - d.length),
          (b[c++] = parseInt(d, 10));
      b[c] = a.length;
    }
    this.B = b;
    this.Pc = this.B[0];
  }
  var Pb = {},
    Qb = /(\d+)/g;
  Mb.prototype.forEach = function(a, b) {
    for (
      var c = {
          type: "s",
          Ac: 0,
          Ef: this.C ? this.C[0] : "",
          we: !1,
          Zg: !1,
          value: null
        },
        d = 1,
        e = this.B[1],
        f = 2,
        g = 1 + this.Pc,
        k = this.A.length;
      g < k;

    ) {
      c.Ac++;
      g == e &&
        ((c.Ac = this.B[f++]),
        (e = this.B[f++]),
        (g += Math.ceil(Math.log10(c.Ac + 1))));
      var l = this.A.charCodeAt(g++),
        m = l & -33,
        n = (c.type = Rb[m]);
      c.value = b && b[c.Ac + this.Pc];
      (b && null == c.value) ||
        ((c.we = l == m),
        (l = m - 75),
        (c.Zg = 0 <= m && 0 < (4321 & (1 << l))),
        a(c));
      "m" == n && d < this.C.length && (c.Ef = this.C[d++]);
    }
  };
  var Rb = [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    "B",
    "b",
    ,
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "j",
    ,
    "m",
    "n",
    "o",
    "o",
    "y",
    "h",
    "s",
    ,
    "u",
    "v",
    "v",
    "x",
    "y",
    "z"
  ];
  function Nb(a) {
    switch (a) {
      case "d":
      case "f":
      case "i":
      case "j":
      case "u":
      case "v":
      case "x":
      case "y":
      case "g":
      case "h":
      case "n":
      case "o":
      case "e":
        return 0;
      case "s":
      case "z":
      case "B":
        return "";
      case "b":
        return !1;
      default:
        return null;
    }
  }
  function Tb(a) {
    var b = F(void 0) ? void 0 : Nb(a);
    new Ob(a, 1, b, void 0);
  }
  function Ub(a) {
    var b = F(void 0) ? void 0 : Nb(a);
    new Ob(a, 2, b, void 0);
  }
  function Vb(a, b, c) {
    new Ob(a, 3, c, b);
  }
  Tb("d");
  Ub("d");
  Vb("d");
  Tb("f");
  Ub("f");
  Vb("f");
  Tb("i");
  Ub("i");
  Vb("i");
  Tb("j");
  Ub("j");
  Vb("j", void 0, void 0);
  Vb("j", void 0, "");
  Tb("u");
  Ub("u");
  Vb("u");
  Tb("v");
  Ub("v");
  Vb("v", void 0, void 0);
  Vb("v", void 0, "");
  Tb("b");
  Ub("b");
  Vb("b");
  Tb("e");
  Ub("e");
  Vb("e");
  Tb("s");
  Ub("s");
  Vb("s");
  Tb("B");
  Ub("B");
  Vb("B");
  Tb("x");
  Ub("x");
  Vb("x");
  Tb("y");
  Ub("y");
  Vb("y", void 0, void 0);
  Vb("y", void 0, "");
  Tb("g");
  Ub("g");
  Vb("g");
  Tb("h");
  Ub("h");
  Vb("h", void 0, void 0);
  Vb("h", void 0, "");
  Tb("n");
  Ub("n");
  Vb("n");
  Tb("o");
  Ub("o");
  Vb("o", void 0, void 0);
  Vb("o", void 0, "");
  function Wb(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  }
  function Xb(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function Zb(a) {
    if (!$b.test(a)) return a;
    -1 != a.indexOf("&") && (a = a.replace(ac, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(bc, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(cc, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(dc, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(ec, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(fc, "&#0;"));
    return a;
  }
  var ac = /&/g,
    bc = /</g,
    cc = />/g,
    dc = /"/g,
    ec = /'/g,
    fc = /\x00/g,
    $b = /[\x00&<>"']/;
  function gc(a) {
    return -1 != a.indexOf("&") ? ("document" in E ? hc(a) : ic(a)) : a;
  }
  function hc(a) {
    var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
    var c = E.document.createElement("div");
    return a.replace(jc, function(a, e) {
      var d = b[a];
      if (d) return d;
      "#" == e.charAt(0) &&
        ((e = Number("0" + e.substr(1))),
        isNaN(e) || (d = String.fromCharCode(e)));
      d || ((c.innerHTML = a + " "), (d = c.firstChild.nodeValue.slice(0, -1)));
      return (b[a] = d);
    });
  }
  function ic(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
      switch (c) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        default:
          return "#" != c.charAt(0) ||
            ((c = Number("0" + c.substr(1))), isNaN(c))
            ? a
            : String.fromCharCode(c);
      }
    });
  }
  var jc = /&([^;\s<&]+);?/g;
  function kc() {
    return -1 != lc.toLowerCase().indexOf("webkit");
  }
  var mc = String.prototype.repeat
    ? function(a, b) {
        return a.repeat(b);
      }
    : function(a, b) {
        return Array(b + 1).join(a);
      };
  function nc(a, b) {
    a = F(void 0) ? a.toFixed(void 0) : String(a);
    var c = a.indexOf(".");
    -1 == c && (c = a.length);
    return mc("0", Math.max(0, b - c)) + a;
  }
  function oc(a, b) {
    var c = 0;
    a = Xb(String(a)).split(".");
    b = Xb(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
      var f = a[e] || "",
        g = b[e] || "";
      do {
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        if (0 == f[0].length && 0 == g[0].length) break;
        c =
          pc(
            0 == f[1].length ? 0 : parseInt(f[1], 10),
            0 == g[1].length ? 0 : parseInt(g[1], 10)
          ) ||
          pc(0 == f[2].length, 0 == g[2].length) ||
          pc(f[2], g[2]);
        f = f[3];
        g = g[3];
      } while (0 == c);
    }
    return c;
  }
  function pc(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var qc = (2147483648 * Math.random()) | 0;
  function rc(a) {
    return String(a).replace(/\-([a-z])/g, function(a, c) {
      return c.toUpperCase();
    });
  }
  function sc(a) {
    var b = Aa(void 0)
      ? "undefined"
          .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
          .replace(/\x08/g, "\\x08")
      : "\\s";
    return a.replace(
      new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"),
      function(a, b, e) {
        return b + e.toUpperCase();
      }
    );
  }
  var lc;
  a: {
    var tc = E.navigator;
    if (tc) {
      var uc = tc.userAgent;
      if (uc) {
        lc = uc;
        break a;
      }
    }
    lc = "";
  }
  function xc(a) {
    return -1 != lc.indexOf(a);
  }
  function yc(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  function zc(a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function Ac(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  }
  function Bc(a) {
    for (var b in a) return !1;
    return !0;
  }
  var Cc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
  function Dc(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Cc.length; f++)
        (c = Cc[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function Gc() {
    return xc("Trident") || xc("MSIE");
  }
  function Hc() {
    return (xc("Chrome") || xc("CriOS")) && !xc("Edge");
  }
  function Ic() {
    return xc("iPhone") && !xc("iPod") && !xc("iPad");
  }
  function Jc(a) {
    Jc[" "](a);
    return a;
  }
  Jc[" "] = Ha;
  function Kc(a, b) {
    var c = Lc;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
  }
  var Mc = xc("Opera"),
    Nc = Gc(),
    Oc = xc("Edge"),
    Pc =
      xc("Gecko") &&
      !(kc() && !xc("Edge")) &&
      !(xc("Trident") || xc("MSIE")) &&
      !xc("Edge"),
    Qc = kc() && !xc("Edge"),
    Rc = Qc && xc("Mobile"),
    Tc = xc("Macintosh"),
    Uc = xc("Windows"),
    Vc = xc("Linux") || xc("CrOS");
  function Wc() {
    var a = E.document;
    return a ? a.documentMode : void 0;
  }
  var Xc;
  a: {
    var Yc = "",
      Zc = (function() {
        var a = lc;
        if (Pc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Oc) return /Edge\/([\d\.]+)/.exec(a);
        if (Nc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Qc) return /WebKit\/(\S+)/.exec(a);
        if (Mc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Zc && (Yc = Zc ? Zc[1] : "");
    if (Nc) {
      var $c = Wc();
      if (null != $c && $c > parseFloat(Yc)) {
        Xc = String($c);
        break a;
      }
    }
    Xc = Yc;
  }
  var ad = Xc,
    Lc = {};
  function bd(a) {
    return Kc(a, function() {
      return 0 <= oc(ad, a);
    });
  }
  var cd;
  var dd = E.document;
  cd =
    dd && Nc
      ? Wc() || ("CSS1Compat" == dd.compatMode ? parseInt(ad, 10) : 5)
      : void 0;
  var ed = xc("Firefox"),
    fd = Ic() || xc("iPod"),
    gd = xc("iPad"),
    hd = xc("Android") && !(Hc() || xc("Firefox") || xc("Opera") || xc("Silk")),
    id = Hc(),
    jd =
      xc("Safari") &&
      !(
        Hc() ||
        xc("Coast") ||
        xc("Opera") ||
        xc("Edge") ||
        xc("Silk") ||
        xc("Android")
      ) &&
      !(Ic() || xc("iPad") || xc("iPod"));
  var kd = null,
    ld = null,
    md = null,
    nd = Pc || (Qc && !jd) || Mc,
    od = nd || "function" == typeof E.btoa,
    pd = nd || (!jd && !Nc && "function" == typeof E.atob);
  function qd(a, b) {
    La(a);
    rd();
    b = b ? md : kd;
    for (var c = [], d = 0; d < a.length; d += 3) {
      var e = a[d],
        f = d + 1 < a.length,
        g = f ? a[d + 1] : 0,
        k = d + 2 < a.length,
        l = k ? a[d + 2] : 0,
        m = e >> 2;
      e = ((e & 3) << 4) | (g >> 4);
      g = ((g & 15) << 2) | (l >> 6);
      l &= 63;
      k || ((l = 64), f || (g = 64));
      c.push(b[m], b[e], b[g], b[l]);
    }
    return c.join("");
  }
  function sd(a) {
    if (pd) return E.atob(a);
    var b = "";
    td(a, function(a) {
      b += String.fromCharCode(a);
    });
    return b;
  }
  function ud(a) {
    var b = [];
    td(a, function(a) {
      b.push(a);
    });
    return b;
  }
  function vd(a) {
    var b = a.length,
      c = 0;
    "=" === a[b - 2] ? (c = 2) : "=" === a[b - 1] && (c = 1);
    var d = new Uint8Array(Math.ceil(3 * b / 4) - c),
      e = 0;
    td(a, function(a) {
      d[e++] = a;
    });
    return d.subarray(0, e);
  }
  function td(a, b) {
    function c(b) {
      for (; d < a.length; ) {
        var c = a.charAt(d++),
          e = ld[c];
        if (null != e) return e;
        if (!/^[\s\xa0]*$/.test(c))
          throw Error("Unknown base64 encoding at char: " + c);
      }
      return b;
    }
    rd();
    for (var d = 0; ; ) {
      var e = c(-1),
        f = c(0),
        g = c(64),
        k = c(64);
      if (64 === k && -1 === e) break;
      b((e << 2) | (f >> 4));
      64 != g &&
        (b(((f << 4) & 240) | (g >> 2)), 64 != k && b(((g << 6) & 192) | k));
    }
  }
  function rd() {
    if (!kd) {
      kd = {};
      ld = {};
      md = {};
      for (var a = 0; 65 > a; a++)
        (kd[
          a
        ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
          a
        )),
          (ld[kd[a]] = a),
          (md[
            a
          ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(
            a
          )),
          62 <= a &&
            (ld[
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(
                a
              )
            ] = a);
    }
  }
  function wd(a) {
    var b = Error();
    if (Error.captureStackTrace)
      Error.captureStackTrace(b, a || wd), (b = String(b.stack));
    else {
      try {
        throw b;
      } catch (c) {
        b = c;
      }
      b = (b = b.stack) ? String(b) : null;
    }
    b || (b = xd(a || arguments.callee.caller, []));
    return b;
  }
  function xd(a, b) {
    var c = [];
    if (gb(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
      c.push(yd(a) + "(");
      for (var d = a.arguments, e = 0; d && e < d.length; e++) {
        0 < e && c.push(", ");
        var f = d[e];
        switch (typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = yd(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f;
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(xd(a.caller, b));
      } catch (g) {
        c.push("[exception trying to get caller]\n");
      }
    } else a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("");
  }
  function yd(a) {
    if (zd[a]) return zd[a];
    a = String(a);
    if (!zd[a]) {
      var b = /function\s+([^\(]+)/m.exec(a);
      zd[a] = b ? b[1] : "[Anonymous]";
    }
    return zd[a];
  }
  var zd = {};
  function K(a) {
    this.data = a || [];
  }
  K.prototype.clear = function() {
    this.data.length = 0;
  };
  function L(a, b) {
    return null != a.data[b];
  }
  function Ad(a, b, c) {
    a = a.data[b];
    return null != a ? a : c;
  }
  function Bd(a, b, c) {
    return !!Ad(a, b, c);
  }
  function M(a, b, c) {
    return Ad(a, b, c || 0);
  }
  function N(a, b, c) {
    return Ad(a, b, c || 0);
  }
  function O(a, b, c) {
    return Ad(a, b, c || "");
  }
  function P(a, b) {
    var c = a.data[b];
    c || (c = a.data[b] = []);
    return c;
  }
  function Cd(a, b) {
    b in a.data && delete a.data[b];
  }
  function Dd(a, b, c) {
    Db(a.data, b).push(c);
  }
  function Ed(a, b, c) {
    return Db(a.data, b)[c];
  }
  function Fd(a, b) {
    var c = [];
    Db(a.data, b).push(c);
    return c;
  }
  function Gd(a, b, c) {
    return Db(a.data, b)[c];
  }
  function Q(a, b) {
    return a.data[b] ? a.data[b].length : 0;
  }
  function Hd(a, b) {
    return Fb(a.data, b ? (b && b).data : null);
  }
  K.prototype.Sa = u("data");
  function Kd(a) {
    var b = [];
    Cb(b, a.Sa());
    return b;
  }
  function Ld(a) {
    return new a.constructor(Kd(a));
  }
  function R(a, b) {
    b = b && b;
    Cb(a.data, b ? b.Sa() : null);
  }
  function Md(a, b) {
    this.data = a;
    this.index = b;
  }
  function Nd(a) {
    return a.data[a.index] || "";
  }
  function Od(a, b) {
    Md.call(this, a, b);
  }
  I(Od, Md);
  function Pd(a) {
    this.data = a || [];
  }
  I(Pd, K);
  function Qd(a, b) {
    a.data[0] = b;
  }
  function Rd(a, b) {
    a.data[1] = b;
  }
  function Sd(a) {
    this.data = a || [];
  }
  I(Sd, K);
  function Td(a) {
    return O(a, 0);
  }
  var Ud;
  function Vd() {
    Ud || (Ud = { ha: "qqm", ka: [""] });
    return Ud;
  }
  function Wd(a) {
    this.data = a || [];
  }
  var Xd;
  I(Wd, K);
  function Yd(a) {
    this.data = a || [];
  }
  I(Yd, K);
  function Zd(a) {
    this.data = a || [];
  }
  I(Zd, K);
  Zd.prototype.oa = function() {
    return new Yd(this.data[1]);
  };
  function $d(a) {
    this.data = a || [];
  }
  I($d, K);
  function ae(a) {
    this.data = a || [];
  }
  I(ae, K);
  function be(a) {
    return new Sd(a.data[0]);
  }
  function ce(a) {
    this.data = a || [];
  }
  I(ce, K);
  ce.prototype.V = function() {
    return N(this, 1);
  };
  function de(a) {
    this.data = a || [];
  }
  I(de, K);
  function ee(a) {
    this.data = a || [];
  }
  I(ee, K);
  var fe;
  function ge(a) {
    this.data = a || [];
  }
  I(ge, K);
  function he(a) {
    this.data = a || [];
  }
  I(he, K);
  function ie(a) {
    this.data = a || [];
  }
  var je;
  I(ie, K);
  function ke(a) {
    return new ee(a.data[0]);
  }
  function le(a, b) {
    a.data[2] = b;
  }
  function me(a, b) {
    a.data[3] = b;
  }
  function ne(a) {
    this.data = a || [];
  }
  I(ne, K);
  function oe(a) {
    this.data = a || [];
  }
  I(oe, K);
  function pe(a) {
    this.data = a || [];
  }
  var qe;
  I(pe, K);
  function re() {
    qe || (qe = { ha: "Mbmbb", ka: ["ebee", "ii"] });
    return qe;
  }
  function se(a) {
    return new oe(Fd(a, 0));
  }
  function ve(a) {
    this.data = a || [];
  }
  I(ve, K);
  function we(a) {
    this.data = a || [];
  }
  I(we, K);
  var xe;
  function ye(a) {
    this.data = a || [];
  }
  var ze;
  I(ye, K);
  function Ae() {
    if (!ze) {
      var a = (ze = { ha: "mswmsse" }),
        b = Vd();
      xe || ((xe = { ha: "MMMmbi" }), (xe.ka = ["xx", Vd(), Vd(), "xx"]));
      a.ka = [b, xe];
    }
    return ze;
  }
  function Be(a, b) {
    a.data[4] = b;
  }
  function Ce(a) {
    this.data = a || [];
  }
  I(Ce, K);
  function De(a) {
    this.data = a || [];
  }
  I(De, K);
  function Ee(a) {
    this.data = a || [];
  }
  var Fe;
  I(Ee, K);
  function Ge() {
    Fe || ((Fe = { ha: "mMMMm" }), (Fe.ka = [Vd(), "xx", Vd(), Vd(), "xx"]));
    return Fe;
  }
  function He(a, b) {
    var c = Ge();
    a = a.Sa();
    var d = Ie,
      e = "!",
      f = { Se: [] };
    Lb(c, f);
    c = b[0];
    if ("0" > c || "9" < c) (b = b.substr(1)), c != e && ((e = c), (d = Je(e)));
    c = b.split(e);
    a.length = 0;
    Ke(0, c.length, c, d, f, a);
  }
  function Le(a) {
    this.data = a || [];
  }
  I(Le, K);
  function Me(a) {
    this.data = a || [];
  }
  I(Me, K);
  function Ne(a) {
    this.data = a || [];
  }
  I(Ne, K);
  function Oe(a) {
    this.data = a || [];
  }
  I(Oe, K);
  function Pe(a) {
    this.data = a || [];
  }
  I(Pe, K);
  function Qe(a) {
    this.data = a || [];
  }
  I(Qe, K);
  function Re(a) {
    this.data = a || [];
  }
  I(Re, K);
  function Se(a) {
    this.data = a || [];
  }
  I(Se, K);
  function Te(a) {
    this.data = a || [];
  }
  I(Te, K);
  function Ue(a) {
    this.data = a || [];
  }
  I(Ue, K);
  function Ve(a) {
    this.data = a || [];
  }
  I(Ve, K);
  function We(a) {
    this.data = a || [];
  }
  I(We, K);
  function Xe(a) {
    this.data = a || [];
  }
  I(Xe, K);
  function Ye(a) {
    this.data = a || [];
  }
  I(Ye, K);
  function Ze(a) {
    this.data = a || [];
  }
  I(Ze, K);
  function $e(a) {
    this.data = a || [];
  }
  I($e, K);
  function af(a) {
    this.data = a || [];
  }
  I(af, K);
  function bf(a) {
    return new de(a.data[1]);
  }
  Oe.prototype.getTime = function(a) {
    return new Ue(Gd(this, 8, a));
  };
  function df(a) {
    return new Pd(a.data[0]);
  }
  Re.prototype.fa = function() {
    return new ne(this.data[1]);
  };
  function ef(a, b) {
    return new Re(Gd(a, 0, b));
  }
  function ff(a) {
    this.data = a || [];
  }
  var gf;
  I(ff, K);
  function hf(a) {
    this.data = a || [];
  }
  I(hf, K);
  var jf, kf, lf, nf;
  function of() {
    if (!jf) {
      var a = (jf = { ha: "mmmsseemsssssme" });
      Xd || ((Xd = { ha: "mmmww" }), (Xd.ka = ["s", Vd(), "s"]));
      var b = Xd;
      fe || (fe = { ha: "3mme", ka: ["3dde", "3dde"] });
      a.ka = [b, fe, "3eES", "dd", "es"];
    }
    return jf;
  }
  function pf() {
    kf || ((kf = { ha: "eMMss" }), (kf.ka = [of(), pf()]));
    return kf;
  }
  function qf(a) {
    this.data = a || [];
  }
  var rf;
  I(qf, K);
  var sf, tf;
  var uf;
  function vf(a) {
    this.data = a || [];
  }
  var wf;
  I(vf, K);
  var xf;
  function yf() {
    if (!wf) {
      var a = (wf = { ha: "mmmm8mmbmmmbesiEmmmmm" });
      gf || (gf = { ha: "mbb5bbmbbmm", ka: ["E", "3eES", "SSb", "dd"] });
      var b = gf;
      if (!xf) {
        var c = (xf = { ha: "2m4m" });
        if (!tf) {
          var d = (tf = { ha: "MbMb" });
          sf || (sf = { ha: "msb", ka: ["ii"] });
          d.ka = ["ii", sf];
        }
        c.ka = [tf, "ee"];
      }
      c = xf;
      rf || (rf = { ha: "edddm", ka: ["e"] });
      d = rf;
      var e = re();
      if (!nf) {
        var f = (nf = { ha: "mM" }),
          g = pf();
        lf || ((lf = { ha: "mss" }), (lf.ka = [of()]));
        f.ka = [g, lf];
      }
      a.ka = [
        b,
        "sss",
        c,
        "isi",
        "",
        d,
        e,
        "eb",
        "E",
        "S",
        nf,
        "S",
        "E",
        "eie"
      ];
    }
    return wf;
  }
  var zf;
  function Af(a) {
    this.data = a || [];
  }
  var Bf;
  I(Af, K);
  function Cf(a) {
    this.data = a || [];
  }
  I(Cf, K);
  function Df(a) {
    this.data = a || [];
  }
  I(Df, K);
  function Ef(a) {
    this.data = a || [];
  }
  I(Ef, K);
  function Ff(a) {
    this.data = a || [];
  }
  I(Ff, K);
  function Gf(a) {
    this.data = a || [];
  }
  I(Gf, K);
  function Hf(a) {
    return new Df(a.data[3]);
  }
  Cf.prototype.hb = function() {
    return new Gf(this.data[8]);
  };
  function If(a) {
    this.data = a || [];
  }
  I(If, K);
  function Jf(a) {
    this.data = a || [];
  }
  I(Jf, K);
  function Kf(a) {
    this.data = a || [];
  }
  var Lf;
  I(Kf, K);
  var Mf;
  var Nf;
  var Of;
  var Pf, Qf;
  var Rf;
  function Sf(a) {
    this.data = a || [];
  }
  var Tf;
  I(Sf, K);
  function Uf() {
    if (!Tf) {
      var a = (Tf = { ha: "sekesmemsmmmm15f" });
      Rf || (Rf = { ha: "m", ka: ["2b"] });
      var b = Rf;
      if (!Pf) {
        var c = (Pf = { ha: "bbbbbSsm" });
        if (!Qf) {
          var d = (Qf = { ha: "md" });
          if (!Of) {
            var e = (Of = { ha: "xx15m500m" });
            if (!Nf) {
              var f = (Nf = { ha: "15m" });
              Mf || (Mf = { ha: "mb", ka: ["es"] });
              f.ka = [Mf];
            }
            e.ka = ["", Nf];
          }
          d.ka = [Of];
        }
        c.ka = [Qf];
      }
      c = Pf;
      Lf || (Lf = { ha: "mmm", ka: ["bb", "b", "bb"] });
      a.ka = ["bi", b, c, Lf, "2bbb", "kxx"];
    }
    return Tf;
  }
  function Vf(a, b) {
    a.data[0] = b;
  }
  function Wf(a) {
    this.data = a || [];
  }
  I(Wf, K);
  Wf.prototype.Zb = function() {
    return N(this, 0);
  };
  function Xf(a) {
    this.data = a || [];
  }
  I(Xf, K);
  function Yf(a, b) {
    a.data[0] = b;
  }
  function Zf(a) {
    this.data = a || [];
  }
  var $f;
  I(Zf, K);
  function ag(a) {
    this.data = a || [];
  }
  I(ag, K);
  function bg(a) {
    this.data = a || [];
  }
  var cg;
  I(bg, K);
  function dg(a) {
    this.data = a || [];
  }
  var eg;
  I(dg, K);
  function fg(a) {
    this.data = a || [];
  }
  I(fg, K);
  function gg(a) {
    this.data = a || [];
  }
  I(gg, K);
  function hg(a) {
    this.data = a || [];
  }
  I(hg, K);
  function ig(a) {
    this.data = a || [];
  }
  var jg;
  I(ig, K);
  function kg(a) {
    this.data = a || [];
  }
  I(kg, K);
  function lg(a) {
    this.data = a || [];
  }
  I(lg, K);
  var mg = {
      io: 0,
      Hi: 1,
      xi: 2,
      wi: 3,
      Bi: 4,
      vi: 5,
      Fi: 6,
      eo: 7,
      Ii: 8,
      Wn: 9,
      co: 10
    },
    ng = { jo: 0, If: 1, bo: 2, Jf: 3, Vn: 4 };
  function og() {
    if (!$f) {
      var a = ($f = { ha: "mmMm" }),
        b = Uf();
      cg || ((cg = { ha: "mm" }), (cg.ka = ["es", Ae()]));
      a.ka = [b, "sss", cg, pg()];
    }
    return $f;
  }
  Zf.prototype.getContext = function() {
    return new Sf(this.data[0]);
  };
  Zf.prototype.getQuery = function(a) {
    return new bg(Gd(this, 2, a));
  };
  ag.prototype.Ca = function() {
    return new Wf(this.data[0]);
  };
  ag.prototype.Tl = function() {
    return Q(this, 1);
  };
  ag.prototype.hb = function(a) {
    return new gg(Gd(this, 1, a));
  };
  function pg() {
    eg ||
      ((eg = { ha: "EMemMM8Mm" }), (eg.ka = ["e", "i", "e", "e", "ee", re()]));
    return eg;
  }
  function qg(a) {
    return new pe(P(a, 8));
  }
  gg.prototype.Ca = function() {
    return new hg(this.data[0]);
  };
  function rg(a) {
    return new Pd(a.data[1]);
  }
  function sg(a) {
    return new Pd(P(a, 1));
  }
  function wg(a) {
    return new Cf(a.data[2]);
  }
  function xg(a) {
    return new Cf(P(a, 2));
  }
  function yg(a) {
    return new we(a.data[3]);
  }
  function zg(a) {
    return new De(a.data[6]);
  }
  function Ag(a, b) {
    return new Oe(Gd(a, 5, b));
  }
  hg.prototype.Zb = function() {
    return M(this, 0);
  };
  function Bg() {
    if (!jg) {
      var a = (jg = { ha: "mmmmmmmm" }),
        b = Uf();
      if (!Bf) {
        var c = (Bf = { ha: "mdmMms" });
        je || (je = { ha: "wfmm", ka: ["ss", "ss"] });
        c.ka = ["3dde", je, Vd(), "3dde"];
      }
      c = Bf;
      var d = yf(),
        e = pg(),
        f = Ge();
      if (!zf) {
        var g = (zf = { ha: "Mms5m" }),
          k = Ae(),
          l = yf();
        uf || ((uf = { ha: "Mbe" }), (uf.ka = [yf()]));
        g.ka = [k, l, uf];
      }
      a.ka = [b, c, d, e, "es", "", f, zf];
    }
    return jg;
  }
  ig.prototype.getContext = function() {
    return new Sf(this.data[0]);
  };
  kg.prototype.Ca = function() {
    return new Wf(this.data[0]);
  };
  kg.prototype.getMetadata = function() {
    return new gg(this.data[1]);
  };
  kg.prototype.Zc = function() {
    return L(this, 3);
  };
  kg.prototype.Bb = function() {
    return new lg(this.data[3]);
  };
  function Cg(a) {
    this.data = a || [];
  }
  I(Cg, K);
  function Dg(a) {
    this.data = a || [];
  }
  I(Dg, K);
  function Eg(a) {
    this.data = a || [];
  }
  I(Eg, K);
  function Fg(a) {
    this.data = a || [];
  }
  I(Fg, K);
  function Gg(a) {
    this.data = a || [];
  }
  I(Gg, K);
  function Hg(a) {
    this.data = a || [];
  }
  I(Hg, K);
  function Ig(a) {
    return N(a, 3);
  }
  function Jg(a) {
    return new Fg(a.data[0]);
  }
  function Kg(a) {
    return new Fg(P(a, 0));
  }
  function Lg(a) {
    return new Gg(a.data[1]);
  }
  function Mg(a) {
    return new Gg(P(a, 1));
  }
  function Ng(a) {
    return new Hg(a.data[2]);
  }
  function Og(a) {
    return new Hg(P(a, 2));
  }
  function Pg(a) {
    return N(a, 1);
  }
  function Qg(a) {
    return N(a, 2);
  }
  function Rg(a) {
    return N(a, 0);
  }
  function Sg(a, b) {
    a.data[0] = b;
  }
  function Tg(a) {
    return N(a, 0);
  }
  Hg.prototype.V = function() {
    return N(this, 0);
  };
  function Ug(a, b) {
    a.data[0] = b;
  }
  function Vg(a) {
    return N(a, 1);
  }
  function Wg(a, b) {
    a.data[1] = b;
  }
  function Xg(a) {
    this.data = a || [];
  }
  I(Xg, K);
  Xg.prototype.getQuery = function() {
    return O(this, 1);
  };
  function Yg(a) {
    this.data = a || [];
  }
  I(Yg, K);
  function Zg(a, b) {
    a.data[0] = b;
  }
  function $g(a, b) {
    a.data[1] = b;
  }
  function ah(a) {
    this.data = a || [];
  }
  I(ah, K);
  function bh(a) {
    this.data = a || [];
  }
  I(bh, K);
  function ch(a) {
    this.data = a || [];
  }
  I(ch, K);
  function dh(a) {
    return M(a, 2, 1);
  }
  ah.prototype.$ = function() {
    return new gg(this.data[21]);
  };
  function eh(a) {
    return new gg(P(a, 21));
  }
  ah.prototype.fa = function() {
    return new Eg(this.data[8]);
  };
  function fh(a) {
    return new Eg(P(a, 8));
  }
  function gh(a, b) {
    Dd(a, 17, b);
  }
  function hh(a) {
    return new ch(Gd(a, 15, 0));
  }
  function ih(a) {
    return new Yg(P(a, 1));
  }
  function jh(a) {
    this.data = a || [];
  }
  I(jh, K);
  function kh(a) {
    this.data = a || [];
  }
  I(kh, K);
  function lh(a) {
    this.data = a || [];
  }
  I(lh, K);
  function mh(a) {
    this.data = a || [];
  }
  I(mh, K);
  function nh(a) {
    return new mh(a.data[4]);
  }
  function oh() {
    this.A = new kh();
    new Dg(P(this.A, 5)).data[6] = 98;
  }
  function qh(a, b) {
    new lh(P(a.A, 2)).data[10] = b;
  }
  function rh(a, b) {
    a = new lh(P(a.A, 2));
    Dd(a, 3, b);
  }
  function sh(a, b) {
    a = new lh(P(a.A, 2));
    Dd(a, 9, b);
  }
  function th(a, b) {
    new lh(P(a.A, 2)).data[0] = b;
  }
  function uh(a, b) {
    new jh(P(a.A, 1)).data[0] = b;
  }
  function vh(a, b) {
    new jh(P(a.A, 1)).data[1] = b;
  }
  function wh(a, b) {
    new If(P(new Kf(P(a.A, 16)), 0)).data[0] = b;
  }
  var xh = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  };
  function yh(a, b) {
    this.A = (a === zh && b) || "";
    this.B = Ah;
  }
  yh.prototype.Qb = !0;
  yh.prototype.Xa = u("A");
  yh.prototype.toString = function() {
    return "Const{" + this.A + "}";
  };
  function Bh(a) {
    return a instanceof yh && a.constructor === yh && a.B === Ah
      ? a.A
      : "type_error:Const";
  }
  var Ah = {},
    zh = {};
  var Ch = /<[^>]*>|&[^;]+;/g;
  function Dh(a, b) {
    return b ? a.replace(Ch, "") : a;
  }
  var Eh = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
    Fh = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/,
    Gh = /^http:\/\/.*/,
    Hh = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff][^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*$/,
    Ih = /[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc][^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*$/,
    Jh = /\s+/,
    Kh = /[\d\u06f0-\u06f9]/;
  function Lh(a, b) {
    var c = 0,
      d = 0,
      e = !1;
    a = Dh(a, b).split(Jh);
    for (b = 0; b < a.length; b++) {
      var f = a[b];
      Fh.test(Dh(f, void 0))
        ? (c++, d++)
        : Gh.test(f)
          ? (e = !0)
          : Eh.test(Dh(f, void 0)) ? d++ : Kh.test(f) && (e = !0);
    }
    return 0 == d ? (e ? 1 : 0) : 0.4 < c / d ? -1 : 1;
  }
  function Mh() {
    this.B = "";
    this.C = Nh;
  }
  Mh.prototype.Qb = !0;
  Mh.prototype.Xa = u("B");
  Mh.prototype.Ze = !0;
  Mh.prototype.A = w(1);
  function Oh(a) {
    if (a instanceof Mh && a.constructor === Mh && a.C === Nh) return a.B;
    Ja(a);
    return "type_error:TrustedResourceUrl";
  }
  var Nh = {};
  function Ph(a) {
    var b = new Mh();
    b.B = a;
    return b;
  }
  function Qh() {
    this.B = "";
    this.C = Rh;
  }
  Qh.prototype.Qb = !0;
  Qh.prototype.Xa = u("B");
  Qh.prototype.Ze = !0;
  Qh.prototype.A = w(1);
  function Sh(a) {
    if (a instanceof Qh && a.constructor === Qh && a.C === Rh) return a.B;
    Ja(a);
    return "type_error:SafeUrl";
  }
  var ci = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function di(a) {
    if (a instanceof Qh) return a;
    a = "object" == typeof a && a.Qb ? a.Xa() : String(a);
    ci.test(a) || (a = "about:invalid#zClosurez");
    return ei(a);
  }
  var Rh = {};
  function ei(a) {
    var b = new Qh();
    b.B = a;
    return b;
  }
  ei("about:blank");
  function fi() {
    this.A = "";
    this.B = gi;
  }
  fi.prototype.Qb = !0;
  var gi = {};
  fi.prototype.Xa = u("A");
  function hi(a) {
    var b = new fi();
    b.A = a;
    return b;
  }
  var ii = hi("");
  function ji(a) {
    return a instanceof Qh
      ? 'url("' +
          Sh(a)
            .replace(/</g, "%3c")
            .replace(/[\\"]/g, "\\$&") +
          '")'
      : a instanceof yh ? Bh(a) : ki(String(a));
  }
  function ki(a) {
    var b = a
      .replace(li, "$1")
      .replace(li, "$1")
      .replace(mi, "url");
    if (ni.test(b)) {
      if (oi.test(a)) return "zClosurez";
      for (var c = (b = !0), d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
      }
      if (!b || !c || !pi(a)) return "zClosurez";
    } else return "zClosurez";
    return qi(a);
  }
  function pi(a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if ("]" == e) {
        if (b) return !1;
        b = !0;
      } else if ("[" == e) {
        if (!b) return !1;
        b = !1;
      } else if (!b && !c.test(e)) return !1;
    }
    return b;
  }
  var ni = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
    mi = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    li = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
    oi = /\/\*/;
  function qi(a) {
    return a.replace(mi, function(a, c, d, e) {
      var b = "";
      d = d.replace(/^(['"])(.*)\1$/, function(a, c, d) {
        b = c;
        return d;
      });
      a = di(d).Xa();
      return c + b + a + b + e;
    });
  }
  function ri() {
    this.B = "";
    this.D = si;
    this.C = null;
  }
  ri.prototype.Ze = !0;
  ri.prototype.A = u("C");
  ri.prototype.Qb = !0;
  ri.prototype.Xa = u("B");
  function ti(a) {
    if (a instanceof ri && a.constructor === ri && a.D === si) return a.B;
    Ja(a);
    return "type_error:SafeHtml";
  }
  function ui(a) {
    if (a instanceof ri) return a;
    var b = "object" == typeof a,
      c = null;
    b && a.Ze && (c = a.A());
    a = Zb(b && a.Qb ? a.Xa() : String(a));
    return vi(a, c);
  }
  function wi(a) {
    if (a instanceof ri) return a;
    a = ui(a);
    var b = ti(a)
      .replace(/  /g, " &#160;")
      .replace(/(\r\n|\r|\n)/g, "<br>");
    return vi(b, a.A());
  }
  var xi = /^[a-zA-Z0-9-]+$/,
    yi = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0
    },
    zi = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0
    };
  function Ai(a) {
    function b(a) {
      Ka(a)
        ? $a(a, b)
        : ((a = ui(a)),
          (d += ti(a)),
          (a = a.A()),
          0 == c ? (c = a) : 0 != a && c != a && (c = null));
    }
    var c = 0,
      d = "";
    $a(arguments, b);
    return vi(d, c);
  }
  var si = {};
  function vi(a, b) {
    var c = new ri();
    c.B = a;
    c.C = b;
    return c;
  }
  vi("<!DOCTYPE html>", 0);
  vi("", 0);
  vi("<br>", 0);
  function Bi(a, b) {
    Bh(a);
    Bh(a);
    return vi(b, null);
  }
  function Ci(a) {
    try {
      var b = Ga("window.location.href");
      if (Aa(a))
        var c = {
          message: a,
          name: "Unknown error",
          lineNumber: "Not available",
          fileName: b,
          stack: "Not available"
        };
      else {
        var d = !1;
        try {
          var e = a.lineNumber || a.line || "Not available";
        } catch (T) {
          (e = "Not available"), (d = !0);
        }
        try {
          var f =
            a.fileName || a.filename || a.sourceURL || E.$googDebugFname || b;
        } catch (T) {
          (f = "Not available"), (d = !0);
        }
        c =
          !d && a.lineNumber && a.fileName && a.stack && a.message && a.name
            ? a
            : {
                message: a.message || "Not available",
                name: a.name || "UnknownError",
                lineNumber: e,
                fileName: f,
                stack: a.stack || "Not available"
              };
      }
      var g = c.fileName;
      null != g || (g = "");
      if (/^https?:\/\//i.test(g)) {
        var k = di(g),
          l = new yh(zh, "view-source scheme plus HTTP/HTTPS URL"),
          m = "view-source:" + Sh(k);
        Bh(l);
        Bh(l);
        var n = ei(m);
      } else n = ei(Bh(new yh(zh, "sanitizedviewsrc")));
      var p = wi("Message: " + c.message + "\nUrl: ");
      a = { href: n, target: "_new" };
      var q = c.fileName;
      if (!xi.test("a")) throw Error("Invalid tag name <a>.");
      if ("A" in zi) throw Error("Tag name <a> is not allowed for SafeHtml.");
      b = null;
      e = "";
      if (a)
        for (var t in a) {
          if (!xi.test(t)) throw Error('Invalid attribute name "' + t + '".');
          var r = a[t];
          if (null != r) {
            f = e;
            d = t;
            n = r;
            if (n instanceof yh) n = Bh(n);
            else if ("style" == d.toLowerCase()) {
              k = g = void 0;
              l = n;
              if (!Na(l))
                throw Error(
                  'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                    typeof l +
                    " given: " +
                    l
                );
              if (!(l instanceof fi)) {
                m = l;
                var v = "";
                for (k in m) {
                  if (!/^[-_a-zA-Z0-9]+$/.test(k))
                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + k);
                  var x = m[k];
                  null != x &&
                    ((x = Ka(x) ? bb(x, ji).join(" ") : ji(x)),
                    (v += k + ":" + x + ";"));
                }
                l = v ? hi(v) : ii;
              }
              l instanceof fi && l.constructor === fi && l.B === gi
                ? (g = l.A)
                : (Ja(l), (g = "type_error:SafeStyle"));
              n = g;
            } else {
              if (/^on/i.test(d))
                throw Error(
                  'Attribute "' +
                    d +
                    '" requires goog.string.Const value, "' +
                    n +
                    '" given.'
                );
              if (d.toLowerCase() in yi)
                if (n instanceof Mh) n = Oh(n);
                else if (n instanceof Qh) n = Sh(n);
                else if (Aa(n)) n = di(n).Xa();
                else
                  throw Error(
                    'Attribute "' +
                      d +
                      '" on tag "a" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                      n +
                      '" given.'
                  );
            }
            n.Qb && (n = n.Xa());
            var z = d + '="' + Zb(String(n)) + '"';
            e = f + (" " + z);
          }
        }
      var A = "<a" + e;
      null != q ? Ka(q) || (q = [q]) : (q = []);
      if (!0 === xh.a) A += ">";
      else {
        var H = Ai(q);
        A += ">" + ti(H) + "</a>";
        b = H.A();
      }
      var B = a && a.dir;
      B && (/^(ltr|rtl|auto)$/i.test(B) ? (b = 0) : (b = null));
      var J = vi(A, b);
      var D = Ai(
        p,
        J,
        wi(
          "\nLine: " +
            c.lineNumber +
            "\n\nBrowser stack:\n" +
            c.stack +
            "-> [end]\n\nJS stack traversal:\n" +
            wd(void 0) +
            "-> "
        )
      );
    } catch (T) {
      D = wi("Exception trying to expose exception! You win, we lose. " + T);
    }
    return ti(D);
  }
  function Di() {
    this.K = this.K;
    this.H = this.H;
  }
  Di.prototype.K = !1;
  Di.prototype.O = u("K");
  Di.prototype.ta = function() {
    this.K || ((this.K = !0), this.ga());
  };
  function Ei(a, b) {
    a.K
      ? F(void 0) ? b.call(void 0) : b()
      : (a.H || (a.H = []), a.H.push(F(void 0) ? G(b, void 0) : b));
  }
  Di.prototype.ga = function() {
    if (this.H) for (; this.H.length; ) this.H.shift()();
  };
  function Fi(a) {
    a && "function" == typeof a.ta && a.ta();
  }
  var Gi = !Nc || 9 <= Number(cd);
  function Hi(a) {
    return function() {
      return a;
    };
  }
  var Ii = Hi(!0);
  var Ji = (function(a) {
    var b = !1,
      c;
    return function() {
      b || ((c = a()), (b = !0));
      return c;
    };
  })(function() {
    var a = document.createElement("div");
    a.innerHTML = "<div><div></div></div>";
    var b = a.firstChild.firstChild;
    a.innerHTML = "";
    return !b.parentElement;
  });
  function Ki(a, b) {
    b = ti(b);
    if (Ji()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = b;
  }
  function Li(a, b) {
    a.src = Oh(b);
    if (null === Fa) {
      a: {
        b = E.document;
        if (
          (b = b.querySelector && b.querySelector("script[nonce]")) &&
          (b = b.nonce || b.getAttribute("nonce")) &&
          Ea.test(b)
        )
          break a;
        b = null;
      }
      Fa = b || "";
    }
    (b = Fa) && a.setAttribute("nonce", b);
  }
  function Mi(a, b) {
    this.x = F(a) ? a : 0;
    this.y = F(b) ? b : 0;
  }
  y = Mi.prototype;
  y.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  y.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  y.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  y.translate = function(a, b) {
    a instanceof Mi
      ? ((this.x += a.x), (this.y += a.y))
      : ((this.x += Number(a)), Ba(b) && (this.y += b));
    return this;
  };
  y.scale = function(a, b) {
    b = Ba(b) ? b : a;
    this.x *= a;
    this.y *= b;
    return this;
  };
  function Ni(a, b) {
    this.width = a;
    this.height = b;
  }
  y = Ni.prototype;
  y.Yi = function() {
    return this.width * this.height;
  };
  y.aspectRatio = function() {
    return this.width / this.height;
  };
  y.Ya = function() {
    return !this.Yi();
  };
  y.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  y.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  y.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  y.scale = function(a, b) {
    b = Ba(b) ? b : a;
    this.width *= a;
    this.height *= b;
    return this;
  };
  function Oi(a) {
    return a ? new Pi(Qi(a)) : Wa || (Wa = new Pi());
  }
  function Ri(a, b, c) {
    var d = document;
    c = c || d;
    a = a && "*" != a ? String(a).toUpperCase() : "";
    if (c.querySelectorAll && c.querySelector && (a || b))
      return c.querySelectorAll(a + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
      c = c.getElementsByClassName(b);
      if (a) {
        d = {};
        for (var e = 0, f = 0, g; (g = c[f]); f++)
          a == g.nodeName && (d[e++] = g);
        d.length = e;
        return d;
      }
      return c;
    }
    c = c.getElementsByTagName(a || "*");
    if (b) {
      d = {};
      for (f = e = 0; (g = c[f]); f++)
        (a = g.className),
          "function" == typeof a.split && gb(a.split(/\s+/), b) && (d[e++] = g);
      d.length = e;
      return d;
    }
    return c;
  }
  function Si(a, b) {
    yc(b, function(b, d) {
      b && "object" == typeof b && b.Qb && (b = b.Xa());
      "style" == d
        ? (a.style.cssText = b)
        : "class" == d
          ? (a.className = b)
          : "for" == d
            ? (a.htmlFor = b)
            : Ti.hasOwnProperty(d)
              ? a.setAttribute(Ti[d], b)
              : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
                ? a.setAttribute(d, b)
                : (a[d] = b);
    });
  }
  var Ti = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };
  function Ui(a, b, c) {
    return Vi(document, arguments);
  }
  function Vi(a, b) {
    var c = String(b[0]),
      d = b[1];
    if (!Gi && d && (d.name || d.type)) {
      c = ["<", c];
      d.name && c.push(' name="', Zb(d.name), '"');
      if (d.type) {
        c.push(' type="', Zb(d.type), '"');
        var e = {};
        Dc(e, d);
        delete e.type;
        d = e;
      }
      c.push(">");
      c = c.join("");
    }
    c = a.createElement(c);
    d &&
      (Aa(d)
        ? (c.className = d)
        : Ka(d) ? (c.className = d.join(" ")) : Si(c, d));
    2 < b.length && Wi(a, c, b);
    return c;
  }
  function Wi(a, b, c) {
    function d(c) {
      c && b.appendChild(Aa(c) ? a.createTextNode(c) : c);
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      !La(f) || (Na(f) && 0 < f.nodeType) ? d(f) : $a(Xi(f) ? kb(f) : f, d);
    }
  }
  function Yi(a) {
    return document.createElement(String(a));
  }
  function Zi(a) {
    for (var b; (b = a.firstChild); ) a.removeChild(b);
  }
  function $i(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
  }
  function aj(a) {
    a && a.parentNode && a.parentNode.removeChild(a);
  }
  function bj(a) {
    return F(a.firstElementChild) ? a.firstElementChild : cj(a.firstChild);
  }
  function dj(a) {
    return F(a.nextElementSibling) ? a.nextElementSibling : cj(a.nextSibling);
  }
  function cj(a) {
    for (; a && 1 != a.nodeType; ) a = a.nextSibling;
    return a;
  }
  function ej(a) {
    return Na(a) && 1 == a.nodeType;
  }
  function fj(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  }
  function Qi(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  function Xi(a) {
    if (a && "number" == typeof a.length) {
      if (Na(a))
        return "function" == typeof a.item || "string" == typeof a.item;
      if (Ma(a)) return "function" == typeof a.item;
    }
    return !1;
  }
  function gj(a) {
    return window.matchMedia(
      "(min-resolution: " +
        a +
        "dppx),(min--moz-device-pixel-ratio: " +
        a +
        "),(min-resolution: " +
        96 * a +
        "dpi)"
    ).matches
      ? a
      : 0;
  }
  function Pi(a) {
    this.A = a || E.document || document;
  }
  y = Pi.prototype;
  y.Z = function(a) {
    return Aa(a) ? this.A.getElementById(a) : a;
  };
  y.getElementsByTagName = function(a, b) {
    return (b || this.A).getElementsByTagName(String(a));
  };
  y.We = function(a, b, c) {
    return Vi(this.A, arguments);
  };
  y.appendChild = function(a, b) {
    a.appendChild(b);
  };
  y.canHaveChildren = function(a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  y.contains = fj;
  function hj() {
    return Qc ? "Webkit" : Pc ? "Moz" : Nc ? "ms" : Mc ? "O" : null;
  }
  function ij(a, b) {
    if (b && a in b) return a;
    var c = hj();
    return c
      ? ((c = c.toLowerCase()), (a = c + sc(a)), !F(b) || a in b ? a : null)
      : null;
  }
  var jj = !Nc || 9 <= Number(cd),
    kj = !Nc || 9 <= Number(cd),
    lj = Nc && !bd("9"),
    mj = (function() {
      if (!E.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
        b = Object.defineProperty({}, "passive", {
          get: function() {
            a = !0;
          }
        });
      try {
        E.addEventListener("test", Ha, b), E.removeEventListener("test", Ha, b);
      } catch (c) {}
      return a;
    })();
  function nj(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.hc = !1;
    this.Ph = !0;
  }
  nj.prototype.stopPropagation = function() {
    this.hc = !0;
  };
  nj.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.Ph = !1;
  };
  function oj(a, b) {
    nj.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.Pa = null;
    if (a) {
      var c = (this.type = a.type),
        d = a.changedTouches ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.currentTarget = b;
      if ((b = a.relatedTarget)) {
        if (Pc) {
          a: {
            try {
              Jc(b.nodeName);
              var e = !0;
              break a;
            } catch (f) {}
            e = !1;
          }
          e || (b = null);
        }
      } else
        "mouseover" == c
          ? (b = a.fromElement)
          : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      null === d
        ? ((this.offsetX = Qc || void 0 !== a.offsetX ? a.offsetX : a.layerX),
          (this.offsetY = Qc || void 0 !== a.offsetY ? a.offsetY : a.layerY),
          (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
          (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
          (this.screenX = a.screenX || 0),
          (this.screenY = a.screenY || 0))
        : ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
          (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
          (this.screenX = d.screenX || 0),
          (this.screenY = d.screenY || 0));
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || "";
      this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = Aa(a.pointerType)
        ? a.pointerType
        : pj[a.pointerType] || "";
      this.state = a.state;
      this.Pa = a;
      a.defaultPrevented && this.preventDefault();
    }
  }
  I(oj, nj);
  var qj = [1, 4, 2],
    pj = { 2: "touch", 3: "pen", 4: "mouse" };
  function rj(a, b) {
    return jj
      ? a.Pa.button == b
      : "click" == a.type ? 0 == b : !!(a.Pa.button & qj[b]);
  }
  function sj(a) {
    return rj(a, 0) && !(Qc && Tc && a.ctrlKey);
  }
  oj.prototype.stopPropagation = function() {
    oj.X.stopPropagation.call(this);
    this.Pa.stopPropagation
      ? this.Pa.stopPropagation()
      : (this.Pa.cancelBubble = !0);
  };
  oj.prototype.preventDefault = function() {
    oj.X.preventDefault.call(this);
    var a = this.Pa;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), lj))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  var tj = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  function uj(a) {
    return !(!a || !a[tj]);
  }
  var vj = 0;
  function wj(a, b, c, d, e) {
    this.listener = a;
    this.A = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.jb = e;
    this.key = ++vj;
    this.Cc = this.Vd = !1;
  }
  function xj(a) {
    a.Cc = !0;
    a.listener = null;
    a.A = null;
    a.src = null;
    a.jb = null;
  }
  function yj(a) {
    this.src = a;
    this.A = {};
    this.B = 0;
  }
  yj.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.A[f];
    a || ((a = this.A[f] = []), this.B++);
    var g = zj(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.Vd = !1))
      : ((b = new wj(b, this.src, f, !!d, e)), (b.Vd = c), a.push(b));
    return b;
  };
  yj.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.A)) return !1;
    var e = this.A[a];
    b = zj(e, b, c, d);
    return -1 < b
      ? (xj(e[b]), ib(e, b), 0 == e.length && (delete this.A[a], this.B--), !0)
      : !1;
  };
  function Aj(a, b) {
    var c = b.type;
    if (!(c in a.A)) return !1;
    var d = hb(a.A[c], b);
    d && (xj(b), 0 == a.A[c].length && (delete a.A[c], a.B--));
    return d;
  }
  function Bj(a) {
    var b = 0,
      c;
    for (c in a.A) {
      for (var d = a.A[c], e = 0; e < d.length; e++) ++b, xj(d[e]);
      delete a.A[c];
      a.B--;
    }
  }
  yj.prototype.Uc = function(a, b, c, d) {
    a = this.A[a.toString()];
    var e = -1;
    a && (e = zj(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  yj.prototype.hasListener = function(a, b) {
    var c = F(a),
      d = c ? a.toString() : "",
      e = F(b);
    return zc(this.A, function(a) {
      for (var f = 0; f < a.length; ++f)
        if (!((c && a[f].type != d) || (e && a[f].capture != b))) return !0;
      return !1;
    });
  };
  function zj(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Cc && f.listener == b && f.capture == !!c && f.jb == d) return e;
    }
    return -1;
  }
  var Cj = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Dj = {},
    Ej = 0;
  function Fj(a, b, c, d, e) {
    if (d && d.once) return Gj(a, b, c, d, e);
    if (Ka(b)) {
      for (var f = 0; f < b.length; f++) Fj(a, b[f], c, d, e);
      return null;
    }
    c = Hj(c);
    return uj(a)
      ? a.listen(b, c, Na(d) ? !!d.capture : !!d, e)
      : Ij(a, b, c, !1, d, e);
  }
  function Ij(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = Na(e) ? !!e.capture : !!e,
      k = Jj(a);
    k || (a[Cj] = k = new yj(a));
    c = k.add(b, c, d, g, f);
    if (c.A) return c;
    d = Kj();
    c.A = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
      mj || (e = g),
        void 0 === e && (e = !1),
        a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Lj(b.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Ej++;
    return c;
  }
  function Kj() {
    var a = Mj,
      b = kj
        ? function(c) {
            return a.call(b.src, b.listener, c);
          }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c;
          };
    return b;
  }
  function Gj(a, b, c, d, e) {
    if (Ka(b)) {
      for (var f = 0; f < b.length; f++) Gj(a, b[f], c, d, e);
      return null;
    }
    c = Hj(c);
    return uj(a)
      ? a.ih(b, c, Na(d) ? !!d.capture : !!d, e)
      : Ij(a, b, c, !0, d, e);
  }
  function Nj(a, b, c, d, e) {
    if (Ka(b)) for (var f = 0; f < b.length; f++) Nj(a, b[f], c, d, e);
    else
      (d = Na(d) ? !!d.capture : !!d),
        (c = Hj(c)),
        uj(a)
          ? a.oc(b, c, d, e)
          : a && (a = Jj(a)) && (b = a.Uc(b, c, d, e)) && Oj(b);
  }
  function Oj(a) {
    if (Ba(a) || !a || a.Cc) return !1;
    var b = a.src;
    if (uj(b)) return Aj(b.cb, a);
    var c = a.type,
      d = a.A;
    b.removeEventListener
      ? b.removeEventListener(c, d, a.capture)
      : b.detachEvent
        ? b.detachEvent(Lj(c), d)
        : b.addListener && b.removeListener && b.removeListener(d);
    Ej--;
    (c = Jj(b))
      ? (Aj(c, a), 0 == c.B && ((c.src = null), (b[Cj] = null)))
      : xj(a);
    return !0;
  }
  function Pj(a) {
    if (a)
      if (uj(a)) a.cb && Bj(a.cb);
      else if ((a = Jj(a))) {
        var b = 0,
          c;
        for (c in a.A)
          for (var d = a.A[c].concat(), e = 0; e < d.length; ++e)
            Oj(d[e]) && ++b;
      }
  }
  function Lj(a) {
    return a in Dj ? Dj[a] : (Dj[a] = "on" + a);
  }
  function Qj(a, b, c, d) {
    var e = !0;
    if ((a = Jj(a)))
      if ((b = a.A[b.toString()]))
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var f = b[a];
          f && f.capture == c && !f.Cc && ((f = Rj(f, d)), (e = e && !1 !== f));
        }
    return e;
  }
  function Rj(a, b) {
    var c = a.listener,
      d = a.jb || a.src;
    a.Vd && Oj(a);
    return c.call(d, b);
  }
  function Mj(a, b) {
    if (a.Cc) return !0;
    if (!kj) {
      var c = b || Ga("window.event");
      b = new oj(c, this);
      var d = !0;
      if (!(0 > c.keyCode || void 0 != c.returnValue)) {
        a: {
          var e = !1;
          if (0 == c.keyCode)
            try {
              c.keyCode = -1;
              break a;
            } catch (g) {
              e = !0;
            }
          if (e || void 0 == c.returnValue) c.returnValue = !0;
        }
        c = [];
        for (e = b.currentTarget; e; e = e.parentNode) c.push(e);
        a = a.type;
        for (e = c.length - 1; !b.hc && 0 <= e; e--) {
          b.currentTarget = c[e];
          var f = Qj(c[e], a, !0, b);
          d = d && f;
        }
        for (e = 0; !b.hc && e < c.length; e++)
          (b.currentTarget = c[e]), (f = Qj(c[e], a, !1, b)), (d = d && f);
      }
      return d;
    }
    return Rj(a, new oj(b, this));
  }
  function Jj(a) {
    a = a[Cj];
    return a instanceof yj ? a : null;
  }
  var Sj = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function Hj(a) {
    if (Ma(a)) return a;
    a[Sj] ||
      (a[Sj] = function(b) {
        return a.handleEvent(b);
      });
    return a[Sj];
  }
  function Tj(a) {
    Di.call(this);
    this.D = a;
    this.A = {};
  }
  I(Tj, Di);
  var Uj = [];
  y = Tj.prototype;
  y.listen = function(a, b, c, d) {
    return Vj(this, a, b, c, d);
  };
  function Vj(a, b, c, d, e, f) {
    Ka(c) || (c && (Uj[0] = c.toString()), (c = Uj));
    for (var g = 0; g < c.length; g++) {
      var k = Fj(b, c[g], d || a.handleEvent, e || !1, f || a.D || a);
      if (!k) break;
      a.A[k.key] = k;
    }
    return a;
  }
  y.ih = function(a, b, c, d) {
    return Wj(this, a, b, c, d);
  };
  function Wj(a, b, c, d, e, f) {
    if (Ka(c)) for (var g = 0; g < c.length; g++) Wj(a, b, c[g], d, e, f);
    else {
      b = Gj(b, c, d || a.handleEvent, e, f || a.D || a);
      if (!b) return a;
      a.A[b.key] = b;
    }
    return a;
  }
  y.oc = function(a, b, c, d, e) {
    if (Ka(b)) for (var f = 0; f < b.length; f++) this.oc(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (d = Na(d) ? !!d.capture : !!d),
        (e = e || this.D || this),
        (c = Hj(c)),
        (d = !!d),
        (b = uj(a)
          ? a.Uc(b, c, d, e)
          : a ? ((a = Jj(a)) ? a.Uc(b, c, d, e) : null) : null),
        b && (Oj(b), delete this.A[b.key]);
  };
  function Xj(a) {
    yc(
      a.A,
      function(a, c) {
        this.A.hasOwnProperty(c) && Oj(a);
      },
      a
    );
    a.A = {};
  }
  y.ga = function() {
    Tj.X.ga.call(this);
    Xj(this);
  };
  y.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  function Yj() {
    Di.call(this);
    this.cb = new yj(this);
    this.Vi = this;
    this.mf = null;
  }
  I(Yj, Di);
  Yj.prototype[tj] = !0;
  y = Yj.prototype;
  y.be = u("mf");
  y.Bf = ba("mf");
  y.addEventListener = function(a, b, c, d) {
    Fj(this, a, b, c, d);
  };
  y.removeEventListener = function(a, b, c, d) {
    Nj(this, a, b, c, d);
  };
  y.dispatchEvent = function(a) {
    var b = this.be();
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.be()) c.push(b), ++d;
    }
    b = this.Vi;
    d = a.type || a;
    if (Aa(a)) a = new nj(a, b);
    else if (a instanceof nj) a.target = a.target || b;
    else {
      var e = a;
      a = new nj(d, b);
      Dc(a, e);
    }
    e = !0;
    if (c)
      for (var f = c.length - 1; !a.hc && 0 <= f; f--) {
        var g = (a.currentTarget = c[f]);
        e = Zj(g, d, !0, a) && e;
      }
    a.hc ||
      ((g = a.currentTarget = b),
      (e = Zj(g, d, !0, a) && e),
      a.hc || (e = Zj(g, d, !1, a) && e));
    if (c)
      for (f = 0; !a.hc && f < c.length; f++)
        (g = a.currentTarget = c[f]), (e = Zj(g, d, !1, a) && e);
    return e;
  };
  y.ga = function() {
    Yj.X.ga.call(this);
    this.cb && Bj(this.cb);
    this.mf = null;
  };
  y.listen = function(a, b, c, d) {
    return this.cb.add(String(a), b, !1, c, d);
  };
  y.ih = function(a, b, c, d) {
    return this.cb.add(String(a), b, !0, c, d);
  };
  y.oc = function(a, b, c, d) {
    this.cb.remove(String(a), b, c, d);
  };
  function Zj(a, b, c, d) {
    b = a.cb.A[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Cc && g.capture == c) {
        var k = g.listener,
          l = g.jb || g.src;
        g.Vd && Aj(a.cb, g);
        e = !1 !== k.call(l, d) && e;
      }
    }
    return e && 0 != d.Ph;
  }
  y.Uc = function(a, b, c, d) {
    return this.cb.Uc(String(a), b, c, d);
  };
  y.hasListener = function(a, b) {
    return this.cb.hasListener(F(a) ? String(a) : void 0, b);
  };
  function ak() {
    this.left = this.bottom = this.right = this.top = 0;
  }
  y = ak.prototype;
  y.V = function() {
    return this.right - this.left;
  };
  y.contains = function(a) {
    return this && a
      ? a instanceof ak
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1;
  };
  y.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  y.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  y.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  y.translate = function(a, b) {
    a instanceof Mi
      ? ((this.left += a.x),
        (this.right += a.x),
        (this.top += a.y),
        (this.bottom += a.y))
      : ((this.left += a),
        (this.right += a),
        Ba(b) && ((this.top += b), (this.bottom += b)));
    return this;
  };
  y.scale = function(a, b) {
    b = Ba(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this;
  };
  function bk(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  }
  y = bk.prototype;
  y.contains = function(a) {
    return a instanceof Mi
      ? a.x >= this.left &&
          a.x <= this.left + this.width &&
          a.y >= this.top &&
          a.y <= this.top + this.height
      : this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height;
  };
  y.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  y.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  y.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  y.translate = function(a, b) {
    a instanceof Mi
      ? ((this.left += a.x), (this.top += a.y))
      : ((this.left += a), Ba(b) && (this.top += b));
    return this;
  };
  y.scale = function(a, b) {
    b = Ba(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= b;
    this.height *= b;
    return this;
  };
  function ck(a, b) {
    this.B = {};
    this.A = [];
    this.da = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof ck)
        for (c = a.ob(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  }
  y = ck.prototype;
  y.Ha = function() {
    dk(this);
    for (var a = [], b = 0; b < this.A.length; b++) a.push(this.B[this.A[b]]);
    return a;
  };
  y.ob = function() {
    dk(this);
    return this.A.concat();
  };
  y.Ya = function() {
    return 0 == this.da;
  };
  y.clear = function() {
    this.B = {};
    this.da = this.A.length = 0;
  };
  y.remove = function(a) {
    return jk(this.B, a)
      ? (delete this.B[a],
        this.da--,
        this.A.length > 2 * this.da && dk(this),
        !0)
      : !1;
  };
  function dk(a) {
    if (a.da != a.A.length) {
      for (var b = 0, c = 0; b < a.A.length; ) {
        var d = a.A[b];
        jk(a.B, d) && (a.A[c++] = d);
        b++;
      }
      a.A.length = c;
    }
    if (a.da != a.A.length) {
      var e = {};
      for (c = b = 0; b < a.A.length; )
        (d = a.A[b]), jk(e, d) || ((a.A[c++] = d), (e[d] = 1)), b++;
      a.A.length = c;
    }
  }
  y.get = function(a, b) {
    return jk(this.B, a) ? this.B[a] : b;
  };
  y.set = function(a, b) {
    jk(this.B, a) || (this.da++, this.A.push(a));
    this.B[a] = b;
  };
  y.forEach = function(a, b) {
    for (var c = this.ob(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  function jk(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function kk(a) {
    if (a.Ha && "function" == typeof a.Ha) return a.Ha();
    if (Aa(a)) return a.split("");
    if (La(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    b = [];
    c = 0;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function lk(a, b) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
    else if (La(a) || Aa(a)) $a(a, b, void 0);
    else {
      if (a.ob && "function" == typeof a.ob) var c = a.ob();
      else if (a.Ha && "function" == typeof a.Ha) c = void 0;
      else if (La(a) || Aa(a)) {
        c = [];
        for (var d = a.length, e = 0; e < d; e++) c.push(e);
      } else c = Ac(a);
      d = kk(a);
      e = d.length;
      for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
    }
  }
  function mk(a) {
    this.A = new ck();
    a && nk(this, a);
  }
  function ok(a) {
    var b = typeof a;
    return ("object" == b && a) || "function" == b
      ? "o" + Oa(a)
      : b.substr(0, 1) + a;
  }
  y = mk.prototype;
  y.add = function(a) {
    this.A.set(ok(a), a);
  };
  function nk(a, b) {
    b = kk(b);
    for (var c = b.length, d = 0; d < c; d++) a.add(b[d]);
  }
  y.remove = function(a) {
    return this.A.remove(ok(a));
  };
  y.clear = function() {
    this.A.clear();
  };
  y.Ya = function() {
    return this.A.Ya();
  };
  y.contains = function(a) {
    a = ok(a);
    return jk(this.A.B, a);
  };
  function pk(a, b) {
    a = new mk(a);
    b = kk(b);
    for (var c = b.length, d = 0; d < c; d++) a.remove(b[d]);
    return a;
  }
  y.Ha = function() {
    return this.A.Ha();
  };
  var qk = {};
  function rk(a, b) {
    var c = qk[b];
    if (!c) {
      var d = rc(b);
      c = d;
      void 0 === a.style[d] &&
        ((d = hj() + sc(d)), void 0 !== a.style[d] && (c = d));
      qk[b] = c;
    }
    return c;
  }
  function sk(a, b) {
    a: {
      var c = Qi(a);
      if (
        c.defaultView &&
        c.defaultView.getComputedStyle &&
        (c = c.defaultView.getComputedStyle(a, null))
      ) {
        c = c[b] || c.getPropertyValue(b) || "";
        break a;
      }
      c = "";
    }
    return (
      c ||
      (a.currentStyle ? a.currentStyle[b] : null) ||
      (a.style && a.style[b])
    );
  }
  function tk(a) {
    try {
      var b = a.getBoundingClientRect();
    } catch (c) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
    Nc &&
      a.ownerDocument.body &&
      ((a = a.ownerDocument),
      (b.left -= a.documentElement.clientLeft + a.body.clientLeft),
      (b.top -= a.documentElement.clientTop + a.body.clientTop));
    return b;
  }
  function uk(a, b, c) {
    if (b instanceof Ni) (c = b.height), (b = b.width);
    else if (void 0 == c) throw Error("missing height argument");
    a.style.width = vk(b);
    a.style.height = vk(c);
  }
  function vk(a) {
    "number" == typeof a && (a = Math.round(a) + "px");
    return a;
  }
  function wk(a) {
    var b = xk;
    if ("none" != sk(a, "display")) return b(a);
    var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a;
  }
  function xk(a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = Qc && !b && !c;
    return (F(b) && !d) || !a.getBoundingClientRect
      ? new Ni(b, c)
      : ((a = tk(a)), new Ni(a.right - a.left, a.bottom - a.top));
  }
  function yk(a, b) {
    a = a.style;
    "opacity" in a
      ? (a.opacity = b)
      : "MozOpacity" in a
        ? (a.MozOpacity = b)
        : "filter" in a &&
          (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")");
  }
  function zk(a, b) {
    a.style.display = b ? "" : "none";
  }
  function Ak(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0;
  }
  Ak.prototype.A = 4;
  Ak.prototype.set = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++)
      this[b + c] = a[c];
  };
  Ak.prototype.toString = Array.prototype.join;
  "undefined" == typeof Float32Array &&
    ((Ak.BYTES_PER_ELEMENT = 4),
    (Ak.prototype.BYTES_PER_ELEMENT = Ak.prototype.A),
    (Ak.prototype.set = Ak.prototype.set),
    (Ak.prototype.toString = Ak.prototype.toString),
    Ca("Float32Array", Ak));
  function Bk(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0;
  }
  Bk.prototype.A = 8;
  Bk.prototype.set = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++)
      this[b + c] = a[c];
  };
  Bk.prototype.toString = Array.prototype.join;
  if ("undefined" == typeof Float64Array) {
    try {
      Bk.BYTES_PER_ELEMENT = 8;
    } catch (a) {}
    Bk.prototype.BYTES_PER_ELEMENT = Bk.prototype.A;
    Bk.prototype.set = Bk.prototype.set;
    Bk.prototype.toString = Bk.prototype.toString;
    Ca("Float64Array", Bk);
  }
  function Ck() {
    return new Float64Array(3);
  }
  function Dk(a, b, c, d) {
    a[0] = b;
    a[1] = c;
    a[2] = d;
    return a;
  }
  function Ek(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
  }
  function Fk(a, b, c) {
    c[0] = a[0] + b[0];
    c[1] = a[1] + b[1];
    c[2] = a[2] + b[2];
  }
  function Gk(a, b, c) {
    c[0] = a[0] - b[0];
    c[1] = a[1] - b[1];
    c[2] = a[2] - b[2];
  }
  function Hk(a, b, c) {
    c[0] = a[0] * b;
    c[1] = a[1] * b;
    c[2] = a[2] * b;
  }
  function Ik(a) {
    var b = a[0],
      c = a[1];
    a = a[2];
    return Math.sqrt(b * b + c * c + a * a);
  }
  function Jk(a, b) {
    var c = a[0],
      d = a[1];
    a = a[2];
    var e = 1 / Math.sqrt(c * c + d * d + a * a);
    b[0] = c * e;
    b[1] = d * e;
    b[2] = a * e;
  }
  function Kk(a, b, c) {
    var d = a[0],
      e = a[1];
    a = a[2];
    var f = b[0],
      g = b[1];
    b = b[2];
    c[0] = e * b - a * g;
    c[1] = a * f - d * b;
    c[2] = d * g - e * f;
  }
  function Lk(a, b) {
    var c = a[0] - b[0],
      d = a[1] - b[1];
    a = a[2] - b[2];
    return c * c + d * d + a * a;
  }
  function Mk() {
    return new Float64Array(9);
  }
  function Nk(a, b) {
    var c = a[0],
      d = a[1],
      e = a[2],
      f = a[3],
      g = a[4],
      k = a[5],
      l = a[6],
      m = a[7];
    a = a[8];
    var n = g * a - m * k,
      p = m * e - d * a,
      q = d * k - g * e,
      t = c * n + f * p + l * q;
    0 != t &&
      ((t = 1 / t),
      (b[0] = n * t),
      (b[3] = (l * k - f * a) * t),
      (b[6] = (f * m - l * g) * t),
      (b[1] = p * t),
      (b[4] = (c * a - l * e) * t),
      (b[7] = (l * d - c * m) * t),
      (b[2] = q * t),
      (b[5] = (f * e - c * k) * t),
      (b[8] = (c * g - f * d) * t));
  }
  function Ok(a, b, c) {
    var d = b[0],
      e = b[1];
    b = b[2];
    c[0] = d * a[0] + e * a[3] + b * a[6];
    c[1] = d * a[1] + e * a[4] + b * a[7];
    c[2] = d * a[2] + e * a[5] + b * a[8];
  }
  function Pk() {
    return new Float64Array(4);
  }
  function Qk(a, b, c) {
    c[0] = a[0] * b;
    c[1] = a[1] * b;
    c[2] = a[2] * b;
    c[3] = a[3] * b;
  }
  function Rk() {
    return new Float64Array(16);
  }
  function Sk(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    a[4] = b[4];
    a[5] = b[5];
    a[6] = b[6];
    a[7] = b[7];
    a[8] = b[8];
    a[9] = b[9];
    a[10] = b[10];
    a[11] = b[11];
    a[12] = b[12];
    a[13] = b[13];
    a[14] = b[14];
    a[15] = b[15];
  }
  function Tk(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    a[4] = b[4];
    a[5] = b[5];
    a[6] = b[6];
    a[7] = b[7];
    a[8] = b[8];
    a[9] = b[9];
    a[10] = b[10];
    a[11] = b[11];
    a[12] = b[12];
    a[13] = b[13];
    a[14] = b[14];
    a[15] = b[15];
  }
  function Uk(a, b, c) {
    b *= 4;
    c[0] = a[b];
    c[1] = a[b + 1];
    c[2] = a[b + 2];
    c[3] = a[b + 3];
  }
  function Vk(a, b, c) {
    a[b] = c[0];
    a[b + 4] = c[1];
    a[b + 8] = c[2];
    a[b + 12] = c[3];
  }
  function Wk(a, b, c) {
    c[0] = a[b];
    c[1] = a[b + 4];
    c[2] = a[b + 8];
    c[3] = a[b + 12];
  }
  function Xk(a) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
  }
  function Yk(a, b, c) {
    var d = a[0],
      e = a[1],
      f = a[2],
      g = a[3],
      k = a[4],
      l = a[5],
      m = a[6],
      n = a[7],
      p = a[8],
      q = a[9],
      t = a[10],
      r = a[11],
      v = a[12],
      x = a[13],
      z = a[14];
    a = a[15];
    var A = b[0],
      H = b[1],
      B = b[2],
      J = b[3],
      D = b[4],
      T = b[5],
      S = b[6],
      W = b[7],
      da = b[8],
      ia = b[9],
      fa = b[10],
      ha = b[11],
      qa = b[12],
      Hb = b[13],
      Yb = b[14];
    b = b[15];
    c[0] = d * A + k * H + p * B + v * J;
    c[1] = e * A + l * H + q * B + x * J;
    c[2] = f * A + m * H + t * B + z * J;
    c[3] = g * A + n * H + r * B + a * J;
    c[4] = d * D + k * T + p * S + v * W;
    c[5] = e * D + l * T + q * S + x * W;
    c[6] = f * D + m * T + t * S + z * W;
    c[7] = g * D + n * T + r * S + a * W;
    c[8] = d * da + k * ia + p * fa + v * ha;
    c[9] = e * da + l * ia + q * fa + x * ha;
    c[10] = f * da + m * ia + t * fa + z * ha;
    c[11] = g * da + n * ia + r * fa + a * ha;
    c[12] = d * qa + k * Hb + p * Yb + v * b;
    c[13] = e * qa + l * Hb + q * Yb + x * b;
    c[14] = f * qa + m * Hb + t * Yb + z * b;
    c[15] = g * qa + n * Hb + r * Yb + a * b;
  }
  function Zk(a, b) {
    var c = a[0],
      d = a[1],
      e = a[2],
      f = a[3],
      g = a[4],
      k = a[5],
      l = a[6],
      m = a[7],
      n = a[8],
      p = a[9],
      q = a[10],
      t = a[11],
      r = a[12],
      v = a[13],
      x = a[14];
    a = a[15];
    var z = c * k - d * g,
      A = c * l - e * g,
      H = c * m - f * g,
      B = d * l - e * k,
      J = d * m - f * k,
      D = e * m - f * l,
      T = n * v - p * r,
      S = n * x - q * r,
      W = n * a - t * r,
      da = p * x - q * v,
      ia = p * a - t * v,
      fa = q * a - t * x,
      ha = z * fa - A * ia + H * da + B * W - J * S + D * T;
    0 != ha &&
      ((ha = 1 / ha),
      (b[0] = (k * fa - l * ia + m * da) * ha),
      (b[1] = (-d * fa + e * ia - f * da) * ha),
      (b[2] = (v * D - x * J + a * B) * ha),
      (b[3] = (-p * D + q * J - t * B) * ha),
      (b[4] = (-g * fa + l * W - m * S) * ha),
      (b[5] = (c * fa - e * W + f * S) * ha),
      (b[6] = (-r * D + x * H - a * A) * ha),
      (b[7] = (n * D - q * H + t * A) * ha),
      (b[8] = (g * ia - k * W + m * T) * ha),
      (b[9] = (-c * ia + d * W - f * T) * ha),
      (b[10] = (r * J - v * H + a * z) * ha),
      (b[11] = (-n * J + p * H - t * z) * ha),
      (b[12] = (-g * da + k * S - l * T) * ha),
      (b[13] = (c * da - d * S + e * T) * ha),
      (b[14] = (-r * B + v * A - x * z) * ha),
      (b[15] = (n * B - p * A + q * z) * ha));
  }
  function $k(a, b, c) {
    var d = b[0],
      e = b[1];
    b = b[2];
    c[0] = d * a[0] + e * a[4] + b * a[8] + a[12];
    c[1] = d * a[1] + e * a[5] + b * a[9] + a[13];
    c[2] = d * a[2] + e * a[6] + b * a[10] + a[14];
  }
  function al(a, b, c) {
    var d = b[0],
      e = b[1];
    b = b[2];
    c[0] = d * a[0] + e * a[4] + b * a[8];
    c[1] = d * a[1] + e * a[5] + b * a[9];
    c[2] = d * a[2] + e * a[6] + b * a[10];
  }
  function bl(a, b, c) {
    var d = b[0],
      e = b[1],
      f = b[2];
    b = b[3];
    c[0] = d * a[0] + e * a[4] + f * a[8] + b * a[12];
    c[1] = d * a[1] + e * a[5] + f * a[9] + b * a[13];
    c[2] = d * a[2] + e * a[6] + f * a[10] + b * a[14];
    c[3] = d * a[3] + e * a[7] + f * a[11] + b * a[15];
  }
  function cl(a, b, c, d) {
    var e = dl[0];
    Gk(c, b, e);
    Jk(e, e);
    e[3] = 0;
    c = dl[1];
    Kk(e, d, c);
    Jk(c, c);
    c[3] = 0;
    d = dl[2];
    Kk(c, e, d);
    Jk(d, d);
    d[3] = 0;
    e[0] = -e[0];
    e[1] = -e[1];
    e[2] = -e[2];
    Vk(a, 0, c);
    Vk(a, 1, d);
    Vk(a, 2, e);
    a[3] = 0;
    a[7] = 0;
    a[11] = 0;
    a[15] = 1;
    el(a, -b[0], -b[1], -b[2]);
  }
  function el(a, b, c, d) {
    a[12] += a[0] * b + a[4] * c + a[8] * d;
    a[13] += a[1] * b + a[5] * c + a[9] * d;
    a[14] += a[2] * b + a[6] * c + a[10] * d;
    a[15] += a[3] * b + a[7] * c + a[11] * d;
  }
  function fl(a, b, c, d) {
    a[0] *= b;
    a[1] *= b;
    a[2] *= b;
    a[3] *= b;
    a[4] *= c;
    a[5] *= c;
    a[6] *= c;
    a[7] *= c;
    a[8] *= d;
    a[9] *= d;
    a[10] *= d;
    a[11] *= d;
    a[12] = a[12];
    a[13] = a[13];
    a[14] = a[14];
    a[15] = a[15];
  }
  function gl(a, b) {
    var c = a[4],
      d = a[5],
      e = a[6],
      f = a[7],
      g = a[8],
      k = a[9],
      l = a[10],
      m = a[11],
      n = Math.cos(b);
    b = Math.sin(b);
    a[4] = c * n + g * b;
    a[5] = d * n + k * b;
    a[6] = e * n + l * b;
    a[7] = f * n + m * b;
    a[8] = c * -b + g * n;
    a[9] = d * -b + k * n;
    a[10] = e * -b + l * n;
    a[11] = f * -b + m * n;
  }
  function hl(a, b) {
    var c = a[0],
      d = a[1],
      e = a[2],
      f = a[3],
      g = a[8],
      k = a[9],
      l = a[10],
      m = a[11],
      n = Math.cos(b);
    b = Math.sin(b);
    a[0] = c * n + g * -b;
    a[1] = d * n + k * -b;
    a[2] = e * n + l * -b;
    a[3] = f * n + m * -b;
    a[8] = c * b + g * n;
    a[9] = d * b + k * n;
    a[10] = e * b + l * n;
    a[11] = f * b + m * n;
  }
  function il(a, b) {
    var c = a[0],
      d = a[1],
      e = a[2],
      f = a[3],
      g = a[4],
      k = a[5],
      l = a[6],
      m = a[7],
      n = Math.cos(b);
    b = Math.sin(b);
    a[0] = c * n + g * b;
    a[1] = d * n + k * b;
    a[2] = e * n + l * b;
    a[3] = f * n + m * b;
    a[4] = c * -b + g * n;
    a[5] = d * -b + k * n;
    a[6] = e * -b + l * n;
    a[7] = f * -b + m * n;
  }
  var dl = [Pk(), Pk(), Pk()];
  function jl() {
    return new Float32Array(4);
  }
  function kl(a, b, c, d, e) {
    a[0] = b;
    a[1] = c;
    a[2] = d;
    a[3] = e;
    return a;
  }
  function ll() {
    return new Float32Array(16);
  }
  function ml(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    a[4] = b[4];
    a[5] = b[5];
    a[6] = b[6];
    a[7] = b[7];
    a[8] = b[8];
    a[9] = b[9];
    a[10] = b[10];
    a[11] = b[11];
    a[12] = b[12];
    a[13] = b[13];
    a[14] = b[14];
    a[15] = b[15];
  }
  function nl(a, b, c) {
    var d = a[0],
      e = a[1],
      f = a[2],
      g = a[3],
      k = a[4],
      l = a[5],
      m = a[6],
      n = a[7],
      p = a[8],
      q = a[9],
      t = a[10],
      r = a[11],
      v = a[12],
      x = a[13],
      z = a[14];
    a = a[15];
    var A = b[0],
      H = b[1],
      B = b[2],
      J = b[3],
      D = b[4],
      T = b[5],
      S = b[6],
      W = b[7],
      da = b[8],
      ia = b[9],
      fa = b[10],
      ha = b[11],
      qa = b[12],
      Hb = b[13],
      Yb = b[14];
    b = b[15];
    c[0] = d * A + k * H + p * B + v * J;
    c[1] = e * A + l * H + q * B + x * J;
    c[2] = f * A + m * H + t * B + z * J;
    c[3] = g * A + n * H + r * B + a * J;
    c[4] = d * D + k * T + p * S + v * W;
    c[5] = e * D + l * T + q * S + x * W;
    c[6] = f * D + m * T + t * S + z * W;
    c[7] = g * D + n * T + r * S + a * W;
    c[8] = d * da + k * ia + p * fa + v * ha;
    c[9] = e * da + l * ia + q * fa + x * ha;
    c[10] = f * da + m * ia + t * fa + z * ha;
    c[11] = g * da + n * ia + r * fa + a * ha;
    c[12] = d * qa + k * Hb + p * Yb + v * b;
    c[13] = e * qa + l * Hb + q * Yb + x * b;
    c[14] = f * qa + m * Hb + t * Yb + z * b;
    c[15] = g * qa + n * Hb + r * Yb + a * b;
  }
  function ol(a, b, c) {
    var d = b[0],
      e = b[1],
      f = b[2];
    b = b[3];
    c[0] = d * a[0] + e * a[4] + f * a[8] + b * a[12];
    c[1] = d * a[1] + e * a[5] + f * a[9] + b * a[13];
    c[2] = d * a[2] + e * a[6] + f * a[10] + b * a[14];
    c[3] = d * a[3] + e * a[7] + f * a[11] + b * a[15];
  }
  function pl(a, b) {
    var c = ql;
    c[0] = 1;
    c[1] = 0;
    c[2] = 0;
    c[3] = 0;
    c[4] = 0;
    c[5] = 1;
    c[6] = 0;
    c[7] = 0;
    c[8] = 0;
    c[9] = 0;
    c[10] = 1;
    c[11] = 0;
    c[12] = a;
    c[13] = b;
    c[14] = 0;
    c[15] = 1;
    return c;
  }
  function rl(a, b) {
    var c = Math.cos(b),
      d = 1 - c;
    b = Math.sin(b);
    a[0] = 0 * d + c;
    a[1] = 0 * d + 1 * b;
    a[2] = 0 * d - 0 * b;
    a[3] = 0;
    a[4] = 0 * d - 1 * b;
    a[5] = 0 * d + c;
    a[6] = 0 * d + 0 * b;
    a[7] = 0;
    a[8] = 0 * d + 0 * b;
    a[9] = 0 * d - 0 * b;
    a[10] = 1 * d + c;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
  }
  function sl() {
    this.origin = new Float64Array(3);
    this.A = new Float64Array(3);
  }
  sl.prototype.set = function(a, b) {
    var c = this.origin;
    c[0] = a[0];
    c[1] = a[1];
    c[2] = a[2];
    a = this.A;
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
  };
  function tl() {
    return new Float32Array(2);
  }
  function ul(a, b) {
    a[0] = b[0];
    a[1] = b[1];
  }
  function vl(a, b, c) {
    c[0] = a[0] + b[0];
    c[1] = a[1] + b[1];
  }
  function wl(a, b, c) {
    c[0] = a[0] - b[0];
    c[1] = a[1] - b[1];
  }
  function xl(a, b) {
    var c = a[0] - b[0];
    a = a[1] - b[1];
    return c * c + a * a;
  }
  function yl(a, b) {
    return function(c) {
      c || (c = window.event);
      return b.call(a, c);
    };
  }
  function zl(a) {
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  }
  function Al(a) {
    a = a.target || a.srcElement;
    !a.getAttribute && a.parentNode && (a = a.parentNode);
    return a;
  }
  var Bl =
      "undefined" != typeof navigator && /Macintosh/.test(navigator.userAgent),
    Cl =
      "undefined" != typeof navigator &&
      !/Opera/.test(navigator.userAgent) &&
      /WebKit/.test(navigator.userAgent),
    Dl =
      "undefined" != typeof navigator &&
      /WebKit/.test(navigator.userAgent) &&
      /Safari/.test(navigator.userAgent),
    El =
      "undefined" != typeof navigator &&
      (/MSIE/.test(navigator.userAgent) || /Trident/.test(navigator.userAgent)),
    Fl =
      "undefined" != typeof navigator &&
      !/Opera|WebKit/.test(navigator.userAgent) &&
      /Gecko/.test(navigator.product);
  function Gl() {
    this._mouseEventsPrevented = !0;
  }
  function Hl(a) {
    var b = E.document;
    if (b && !b.createEvent && b.createEventObject)
      try {
        return b.createEventObject(a);
      } catch (c) {
        return a;
      }
    else return a;
  }
  function Il(a, b, c, d, e, f) {
    Yj.call(this);
    this.N = a.replace(Jl, "_");
    this.Y = a;
    this.B = b || null;
    this.Pa = c ? Hl(c) : null;
    this.aa = e || null;
    this.I = f || null;
    !this.I && c && c.target && ej(c.target) && (this.I = c.target);
    this.L = [];
    this.W = {};
    this.T = this.R = d || Ua();
    this.A = {};
    this.A["main-actionflow-branch"] = 1;
    this.G = {};
    this.C = !1;
    this.D = {};
    this.Sc = {};
    this.M = !1;
    c && b && "click" == c.type && this.action(b);
    Kl.push(this);
    this.ca = ++Ll;
    a = new Ml("created", this);
    null != Nl && Nl.dispatchEvent(a);
  }
  I(Il, Yj);
  var Kl = [],
    Nl = new Yj(),
    Jl = /[~.,?&-]/g,
    Ll = 0;
  y = Il.prototype;
  y.id = u("ca");
  y.Qd = function() {
    this.M = !0;
  };
  y.ad = function(a) {
    this.N = a.replace(Jl, "_");
    this.Y = a;
  };
  y.ua = function(a, b) {
    this.C && Ol(this, "tick", void 0, a);
    b = b || {};
    a in this.W && (this.G[a] = !0);
    var c = b.time || Ua();
    !b.gj && !b.yo && c > this.T && (this.T = c);
    for (var d = c - this.R, e = this.L.length; 0 < e && this.L[e - 1][1] > d; )
      e--;
    mb(this.L, e, 0, [a, d, b.gj]);
    this.W[a] = c;
  };
  y.done = function(a, b, c) {
    this.C || !this.A[a]
      ? Ol(this, "done", a, b)
      : (b && this.ua(b, c),
        this.A[a]--,
        0 == this.A[a] && delete this.A[a],
        Bc(this.A) &&
          Pl(this) &&
          ((this.C = !0), hb(Kl, this), (this.Pa = this.B = null), this.ta()));
  };
  y.na = function(a, b, c) {
    this.C && Ol(this, "branch", a, b);
    b && this.ua(b, c);
    this.A[a] ? this.A[a]++ : (this.A[a] = 1);
  };
  function Pl(a) {
    if (!Nl) return !0;
    if (a.M) {
      var b = new Ml("abandoned", a);
      a.dispatchEvent(b);
      Nl.dispatchEvent(b);
      return !0;
    }
    var c = (b = ""),
      d;
    for (d in a.G) a.G.hasOwnProperty(d) && ((c = c + b + d), (b = "|"));
    c && (a.Sc.dup = c);
    b = new Ml("beforedone", a);
    if (!a.dispatchEvent(b) || !Nl.dispatchEvent(b)) return !1;
    (c = Ql(a.Sc)) && (a.D.cad = c);
    b.type = "done";
    return Nl.dispatchEvent(b);
  }
  function Ol(a, b, c, d) {
    if (Nl) {
      var e = new Ml("error", a);
      e.error = b;
      e.na = c;
      e.B = d;
      e.A = a.C;
      Nl.dispatchEvent(e);
    }
  }
  function Ql(a) {
    var b = [];
    yc(a, function(a, d) {
      d = encodeURIComponent(d);
      a = encodeURIComponent(a).replace(/%7C/g, "|");
      b.push(d + ":" + a);
    });
    return b.join(",");
  }
  y.action = function(a) {
    this.C && Ol(this, "action");
    var b = [],
      c = null,
      d = null,
      e = null,
      f = null;
    Rl(a, function(a) {
      var g;
      !a.__oi && a.getAttribute && (a.__oi = a.getAttribute("oi"));
      if ((g = a.__oi)) b.unshift(g), c || (c = a.getAttribute("jsinstance"));
      e || (d && "1" != d) || (e = a.getAttribute("ved"));
      f || (f = a.getAttribute("vet"));
      d || (d = a.getAttribute("jstrack"));
    });
    f && (this.D.vet = f);
    d &&
      ((this.D.ct = this.N),
      0 < b.length && Sl(this, "oi", b.join(".")),
      c &&
        ((c = "*" == c.charAt(0) ? parseInt(c.substr(1), 10) : parseInt(c, 10)),
        (this.D.cd = c)),
      "1" != d && (this.D.ei = d),
      e && (this.D.ved = e));
  };
  function Sl(a, b, c) {
    a.C && Ol(a, "extradata");
    a.Sc[b] = c.toString().replace(/[:;,\s]/g, "_");
  }
  function Rl(a, b) {
    for (; a && 1 == a.nodeType; a = a.parentNode) b(a);
  }
  y.va = function(a, b, c, d) {
    this.na(b, c);
    var e = this;
    return function() {
      try {
        var c = a.apply(this, arguments);
      } finally {
        e.done(b, d);
      }
      return c;
    };
  };
  y.event = u("Pa");
  y.yb = u("aa");
  y.target = u("I");
  y.value = function(a) {
    var b = this.B;
    return b
      ? a in b ? b[a] : b.getAttribute ? b.getAttribute(a) : void 0
      : void 0;
  };
  function Ml(a, b) {
    nj.call(this, a, b);
    this.sa = b;
  }
  I(Ml, nj);
  function Tl() {}
  function Ul(a, b, c, d, e) {
    Il.call(this, b, c, d, e);
    this.J = a;
    this.F = null;
  }
  C(Ul, Il);
  y = Ul.prototype;
  y.ub = function(a, b) {
    this.F = b;
    Sl(this, "an", b);
    this.J.start(a, b, this);
  };
  y.kh = function(a, b) {
    this.F = b;
    Sl(this, "an", b);
    return Vl(this.J, this, a, b);
  };
  y.bd = function() {
    return !!Wl(this.J, this);
  };
  y.ua = function(a, b) {
    Il.prototype.ua.call(this, a, b);
  };
  y.Qd = function() {
    Il.prototype.Qd.call(this);
  };
  y.ad = function(a) {
    Il.prototype.ad.call(this, a);
  };
  function Xl(a, b, c) {
    Di.call(this);
    this.B = a;
    this.Wb = b;
    this.D = c;
    this.C = [];
    this.A = Yl++;
  }
  C(Xl, Di);
  Xl.prototype.cancel = function() {
    if (!this.O()) {
      for (var a = oa(this.C), b = a.next(); !b.done; b = a.next())
        (b = b.value), b(this.D);
      this.ta();
    }
  };
  Xl.prototype.ga = function() {
    this.D = null;
    this.C.length = 0;
  };
  var Yl = 1;
  function Zl(a, b, c) {
    yc(a.J(), function(a, e) {
      Sl(b, c + e, "" + a);
    });
  }
  function $l(a) {
    var b = this;
    this.D = a;
    this.B = new Map();
    this.A = {};
    this.C = {};
    this.G = {};
    this.F = {};
    this.H = {};
    yc(this.D, function(a, d) {
      b.A[d] = {};
      b.C[d] = 0;
    });
  }
  function am(a, b, c) {
    var d = a.B.get(b.id());
    a.B["delete"](b.id());
    d && (delete a.A[d.B][d.Wb], c && d.cancel(), d.ta());
  }
  function Wl(a, b) {
    return Bc(b.A) ? (am(a, b, !1), null) : a.B.get(b.id()) || null;
  }
  function bm(a, b, c) {
    return (b = a.A[b] && a.A[b][c]) ? Wl(a, b) : null;
  }
  function cm(a, b, c, d) {
    var e = a.A[b] && a.A[b][c];
    e && (Bc(e.A) || (e.ua("int"), Sl(e, "ian", d)), bm(a, b, c), am(a, e, !0));
  }
  function dm(a, b, c, d) {
    var e = a.A[b];
    if (!(a.C[b] > c)) {
      for (var f in e) (e = bm(a, b, f)) && e.A < c && cm(a, b, f, d);
      a.C[b] = c;
    }
  }
  function em(a, b, c) {
    return (a = a.D[b]) && !!a.actions[c];
  }
  function Vl(a, b, c, d) {
    if (!em(a, c, d)) return !1;
    var e = Wl(a, b);
    if (!e) return !1;
    if (e.B == c && e.Wb == d) return !0;
    if (a.C[c] > e.A) return !1;
    var f = a.D[c];
    if (f.Kb) {
      var g = bm(a, c, d);
      if (g && g.A > e.A) return !1;
    }
    g = oa(f.Yb);
    for (var k = g.next(); !k.done; k = g.next()) dm(a, k.value, e.A, d);
    cm(a, c, d, d);
    e.B = c;
    e.Wb = d;
    a.A[e.B][e.Wb] = b;
    a.B.set(b.id(), e);
    f.Kb || dm(a, c, e.A, d);
    return !0;
  }
  $l.prototype.start = function(a, b, c) {
    if (em(this, a, b) && !Wl(this, c)) {
      for (
        var d = new Xl(a, b, c), e = this.D[a], f = oa(e.Yb), g = f.next();
        !g.done;
        g = f.next()
      )
        dm(this, g.value, d.A, b);
      e.Kb ? cm(this, a, b, b) : dm(this, a, d.A, b);
      a = oa(e.actions[b].tags);
      for (b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        if ((e = this.G[b]))
          for (e = oa(e), f = e.next(); !f.done; f = e.next())
            new fm(f.value, b, c);
        if ((e = this.F[b]))
          for (e = oa(e), f = e.next(); !f.done; f = e.next())
            (f = f.value), (g = f.Nh.B()) && Fj(c, "beforedone", Ta(gm, g, f));
        if ((b = this.H[b]))
          for (b = oa(b), e = b.next(); !e.done; e = b.next()) e.value.A(c);
      }
      this.A[d.B][d.Wb] = c;
      this.B.set(c.id(), d);
    }
  };
  function hm(a, b, c) {
    c = { prefix: void 0, Nh: c };
    a.F[b] || (a.F[b] = []);
    a.F[b].push(c);
  }
  function gm(a, b, c) {
    var d = b.prefix;
    if ((b = b.Nh.B())) (a = b.M(a)), Zl(a, c.sa, d || "");
  }
  function fm(a, b, c) {
    this.B = a;
    this.C = "actionmanager.flowgate-" + b;
    this.A = !1;
    this.F = Fj(c, "beforedone", G(this.D, this));
  }
  fm.prototype.D = function(a) {
    var b = this,
      c = a.sa;
    !this.A &&
      this.B.B(c) &&
      ((this.A = !0),
      c.na(this.C),
      this.B.A(function() {
        b.A = !1;
        c.done(b.C);
        Bc(c.A) && Oj(b.F);
      }, c));
    return !this.A;
  };
  function im() {
    var a = {};
    (a.init = { Kb: !0, Yb: [], actions: {} }).actions.application_init = {
      tags: ["render"]
    };
    var b = (a.card = { Kb: !0, Yb: [], actions: {} });
    b.actions.star = { tags: ["render"] };
    b.actions.unstar = { tags: ["render"] };
    b = a.scene = { Kb: !0, Yb: ["transitions"], actions: {} };
    b.actions.click_scene = { tags: ["render"] };
    b.actions.move_camera = { tags: ["render", "camera_change"] };
    b.actions.scroll_zoom = { tags: ["render", "camera_change"] };
    b = a.scene_hover = { Kb: !0, Yb: [], actions: {} };
    b.actions.hover_on_map = { tags: [] };
    b.actions.hover_on_poi = { tags: ["render"] };
    b = a.transitions = { Kb: !1, Yb: ["scene"], actions: {} };
    b.actions.clear_map = { tags: ["render"] };
    b.actions.compose_directions_request = { tags: ["render"] };
    b.actions.directions_drag = { tags: ["render"] };
    b.actions.directions_inspect_step = { tags: ["render"] };
    b.actions.directions_inspect_step_done = { tags: ["render"] };
    b.actions.get_directions = { tags: ["render"] };
    b.actions.high_confidence_suggest = { tags: ["render"] };
    b.actions.highlight_suggestion = { tags: ["render"] };
    b.actions.manual_url_change = { tags: ["render"] };
    b.actions.search = { tags: ["render", "camera_change"] };
    b.actions.spotlight_alternate_route = { tags: ["render"] };
    b.actions.spotlight_implicit_route = { tags: ["render"] };
    b.actions.spotlight_indoor = { tags: ["render"] };
    b.actions.spotlight_poi = { tags: ["render"] };
    b.actions.spotlight_reveal = { tags: ["render"] };
    b.actions.spotlight_suggestion = { tags: ["render"] };
    b.actions.suggest = { tags: ["render"] };
    b.actions.switch_map_mode = { tags: ["render"] };
    b.actions.switch_to_map_mode = { tags: ["render"] };
    b.actions.switch_to_text_mode = { tags: ["render"] };
    b = a.runway = { Kb: !1, Yb: [], actions: {} };
    b.actions.change_runway_state = { tags: [] };
    b.actions.toggle_lookbook = { tags: [] };
    return a;
  }
  var jm = {};
  function km(a, b) {
    var c = Oa(a);
    jm[c] = { errorMessage: "", Re: b, error: a };
    b = Error();
    b.message = "~#!#~" + c + "~#!#~" + a.message + "~#!#~";
    throw b;
  }
  function lm(a) {
    Na(a) || (a = Error("" + a));
    var b = Ga("globals.ErrorHandler.log");
    return b ? b(a, void 0) : a;
  }
  function mm() {
    Ul.call(this, {}, "NULL_FLOW");
    this.Qd();
    Ul.prototype.done.call(this, "main-actionflow-branch");
  }
  C(mm, Ul);
  y = mm.prototype;
  y.na = h();
  y.done = h();
  y.ub = h();
  y.kh = w(!1);
  y.bd = w(!1);
  var nm = new Yj();
  new Yj();
  var om = null;
  function pm() {
    om || (om = new $l(im()));
    return om;
  }
  function qm(a, b, c) {
    a = rm(a);
    return Fj(a, b, sm(c), !1);
  }
  function tm(a, b, c, d) {
    if (d instanceof nj) {
      var e = d;
      e.type = b;
    } else e = new nj(b);
    e.cl = { event: d, sa: c };
    rm(a).dispatchEvent(e);
  }
  function um(a, b, c) {
    a = rm(a);
    var d = rm(c);
    return Fj(a, b, function(a) {
      d.dispatchEvent(a);
    });
  }
  function rm(a) {
    if (a.dispatchEvent) return a.be || (a.be = Ha), a;
    a.Lf = a.Lf || new Yj();
    return a.Lf;
  }
  function sm(a) {
    return function(b) {
      var c = b.cl;
      c
        ? a.call(void 0, c.sa, c.event)
        : b instanceof Ml
          ? a.call(void 0, new mm(), b)
          : ((c = new Ul(om, "event_" + b.type)),
            a.call(void 0, c, b),
            c.done("main-actionflow-branch"));
    };
  }
  function U(a, b) {
    b = void 0 === b ? [] : b;
    this.F = a;
    this.H = b;
    this.D = [];
    this.G = !1;
  }
  U.prototype.B = function() {
    return !!this.I;
  };
  U.prototype.C = function(a, b) {
    var c = this;
    this.B()
      ? a(this.A(), b)
      : this.D.push(function(b) {
          a(c.A(), b);
        });
  };
  U.prototype.get = function(a, b) {
    var c = this;
    vm(
      [this],
      function(b) {
        a(c.A(), b);
      },
      b
    );
  };
  U.prototype.A = u("I");
  function wm(a, b) {
    try {
      if (!a.G) {
        var c = xm[a.F];
        a.G = !0;
        c.apply(
          null,
          jb(
            function(c) {
              a.I = c;
              a.H = null;
              c = "delayed:ready:" + a.F;
              b.na(c);
              try {
                for (var d = a.D.length, f = 0; f < d; f++) a.D[f](b);
                a.D = null;
              } finally {
                b.done(c);
              }
            },
            b,
            a.H
          )
        );
      }
    } catch (d) {
      throw (Tl(d.stack || Ci(d)), lm(d));
    }
  }
  function ym(a, b) {
    xm[a] = b;
    if ((b = zm[a])) {
      for (var c = b.length, d = 0; d < c; d++) b[d]();
      delete zm[a];
    }
  }
  function Am(a, b, c) {
    if (0 == a.length) b(c);
    else
      for (
        var d = a.length,
          e = function(a, c) {
            --d || b(c);
          },
          f = a.length,
          g = 0;
        g < f;
        g++
      ) {
        var k = a[g];
        k ? k.C(e, c) : e(null, c);
      }
  }
  function vm(a, b, c) {
    if (0 == a.length) b(c);
    else {
      var d = a.length,
        e = [],
        f = [],
        g = c.va(b, "delayed:getMultiple");
      b = function() {
        --d || g(c);
      };
      for (
        var k = function(a) {
            return function() {
              wm(a, c);
            };
          },
          l = a.length,
          m = 0;
        m < l;
        m++
      ) {
        var n = a[m];
        if (!n || n.B()) b(c);
        else {
          n.D.push(b);
          var p = n.F;
          if (xm[p]) wm(n, c);
          else {
            e.push(n);
            f.push(p);
            var q = zm[p];
            q || (q = zm[p] = []);
            q.push(k(n));
          }
        }
      }
    }
  }
  var Bm = null,
    zm = {},
    xm = {};
  function Cm(a) {
    this.data = a || [];
  }
  I(Cm, K);
  function Dm(a) {
    this.data = a || [];
  }
  I(Dm, K);
  function Em(a) {
    this.data = a || [];
  }
  I(Em, K);
  function Fm(a) {
    this.data = a || [];
  }
  I(Fm, K);
  Dm.prototype.fa = function() {
    return new Eg(this.data[8]);
  };
  function Gm(a) {
    return new Eg(P(a, 8));
  }
  Fm.prototype.hb = function() {
    return new ah(this.data[4]);
  };
  function Hm(a) {
    this.data = a || [];
  }
  I(Hm, K);
  function Im(a) {
    this.data = a || [];
  }
  I(Im, K);
  function Jm(a) {
    this.data = a || [];
  }
  I(Jm, K);
  Jm.prototype.fa = function() {
    return new Eg(this.data[0]);
  };
  function Km(a) {
    this.data = a || [];
  }
  I(Km, K);
  function Lm(a) {
    return new Eg(a.data[2]);
  }
  function Mm(a) {
    this.data = a || [];
  }
  I(Mm, K);
  function Nm(a) {
    Cm.apply(this, arguments);
  }
  C(Nm, Cm);
  Ia(Nm);
  function Om(a, b, c, d) {
    this.handle = a;
    this.B = b;
    this.size = c;
    this.A = null;
    this.next = d;
  }
  function Qm() {
    this.G = this.D = this.F = 0;
    this.C = this.A = null;
    this.B = {};
  }
  Qm.prototype.add = function(a, b) {
    if (a > this.F) return -1;
    var c = this.G++;
    b = new Om(c, b, a, this.A);
    this.B[c] = b;
    this.A && (this.A.A = b);
    this.A = b;
    this.D += a;
    null == this.C && (this.C = b);
    for (; this.D > this.F; )
      (a = this.C), a.B && a.B(a.handle), this.remove(a.handle);
    return c;
  };
  function Rm(a, b) {
    (b = a.B[b]) &&
      b.A &&
      ((b.A.next = b.next) ? (b.next.A = b.A) : (a.C = b.A),
      (b.A = null),
      (b.next = a.A),
      (a.A.A = b),
      (a.A = b));
  }
  Qm.prototype.remove = function(a) {
    var b = this.B[a];
    b &&
      (b.A ? (b.A.next = b.next) : (this.A = b.next),
      b.next ? (b.next.A = b.A) : (this.C = b.A),
      (b.A = b.next = null),
      delete this.B[a],
      (this.D -= b.size));
  };
  Qm.prototype.contains = function(a) {
    return a in this.B;
  };
  Qm.prototype.clear = function() {
    for (var a = this.A; a; a = a.next) a.B && a.B(a.handle);
    this.C = this.A = null;
    this.B = {};
    this.D = 0;
  };
  function Sm(a, b) {
    this.A = new Qm();
    this.A.F = a || Infinity;
    this.C = {};
    this.B = {};
    this.F = b || Ha;
  }
  function Tm(a, b, c) {
    var d = a.B[b];
    F(d) && -1 != d
      ? Rm(a.A, d)
      : ((d = a.A.add(1, G(a.D, a, b))), (a.B[b] = d));
    a.C[b] = c;
  }
  function Um(a, b) {
    var c = a.B[b];
    b = a.C[b];
    F(c) && -1 != c && Rm(a.A, c);
    return b;
  }
  Sm.prototype.clear = function() {
    this.A.clear();
    this.C = {};
    this.B = {};
  };
  Sm.prototype.D = function(a) {
    this.F(a, this.C[a]);
    delete this.B[a];
    delete this.C[a];
  };
  function Vm(a, b, c, d, e, f, g) {
    var k = b[0];
    b = b[1];
    var l = d[0];
    d = d[1];
    var m = f[0],
      n = f[1],
      p = d - n,
      q = n - b,
      t = b - d;
    f = k * p + l * q + m * t;
    if (0 == f) return !1;
    f = 1 / f;
    p *= f;
    var r = (m - l) * f,
      v = (l * n - m * d) * f;
    q *= f;
    var x = (k - m) * f;
    m = (m * b - k * n) * f;
    t *= f;
    n = (l - k) * f;
    k = (k * d - l * b) * f;
    g[0] = a[0] * p + c[0] * q + e[0] * t;
    g[1] = a[1] * p + c[1] * q + e[1] * t;
    g[2] = 0;
    g[3] = a[0] * r + c[0] * x + e[0] * n;
    g[4] = a[1] * r + c[1] * x + e[1] * n;
    g[5] = 0;
    g[6] = a[0] * v + c[0] * m + e[0] * k;
    g[7] = a[1] * v + c[1] * m + e[1] * k;
    g[8] = 1;
    return 1e-6 > Math.abs(g[0]) || 1e-6 > Math.abs(g[4]) ? !1 : !0;
  }
  function Wm(a) {
    this.B = a;
    this.A = Math.ceil(3 * a.length / 4);
    if (!F(Xm[0])) {
      for (a = 0; a < Xm.length; a++) Xm[a] = Math.pow(2, a - 150);
      for (a = 0; 65 > a; a++)
        Ym[
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charCodeAt(
            a
          )
        ] = a;
      for (a = 0; 65 > a; a++)
        Zm[
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charCodeAt(
            a
          )
        ] = a;
    }
  }
  function $m(a, b, c) {
    var d = Array(c),
      e = 0;
    b += Math.floor(b / 3);
    c = Math.ceil(4 * c / 3);
    var f = a.B.length;
    f - b < c && (c = f - b);
    f = Zm;
    for (var g = b - b % 4; g < b + c; g += 4) {
      var k = e,
        l = g >= b;
      k += l ? 1 : 0;
      var m = g + 1 >= b && k < d.length;
      k += m ? 1 : 0;
      k = g + 2 >= b && k < d.length;
      var n = void 0;
      if (l && ((n = f[a.B.charCodeAt(g + 0)]), !F(n))) return null;
      var p = void 0;
      if (l || m) if (((p = f[a.B.charCodeAt(g + 1)]), !F(p))) return null;
      var q = void 0;
      if (m || k) if (((q = f[a.B.charCodeAt(g + 2)]), !F(q))) return null;
      var t = void 0;
      if (k && ((t = f[a.B.charCodeAt(g + 3)]), !F(t))) return null;
      l && 64 != n && 64 != p && (d[e++] = (n << 2) | (p >> 4));
      m && 64 != p && 64 != q && (d[e++] = ((p << 4) & 240) | (q >> 2));
      k && 64 != q && 64 != t && (d[e++] = ((q << 6) & 192) | t);
    }
    d.length = e;
    return d;
  }
  function an(a, b) {
    if (!(0 > b || b > a.A - 1) && (a = $m(a, b, 1)) && 1 == a.length)
      return a[0];
  }
  function bn(a, b) {
    if (!(0 > b || b > a.A - 2 || ((a = $m(a, b, 2)), 2 > a.length)))
      return a[0] + (a[1] << 8);
  }
  function cn(a, b, c) {
    if (!a.A) return [];
    var d = 4 * c;
    if (0 > b || b + d > a.A) return [];
    c = Array(c);
    a = $m(a, b, d);
    for (b = 0; b < c.length; b++)
      (d = 4 * b),
        (c[b] =
          0 == ((a[d + 3] & 127) | a[d + 2] | a[d + 1] | a[d])
            ? 0
            : (1 - ((a[d + 3] & 128) >> 6)) *
              (((a[d + 2] | 128) << 16) | (a[d + 1] << 8) | a[d]) *
              Xm[((a[d + 3] & 127) << 1) | ((a[d + 2] & 128) >> 7)]);
    return c;
  }
  var Xm = Array(256),
    Ym = Array(64),
    Zm = Array(64);
  function dn(a, b) {
    this.A = Ck();
    this.B = new Float64Array(2);
    this.D = a;
    this.C = a / (2 * Math.PI);
    this.G = 1 / this.C;
    this.F = b / Math.PI;
    this.H = 1 / this.F;
  }
  function en(a, b, c) {
    var d = (c + 0.5) * a.H;
    c = Math.sin(d);
    d = Math.cos(d);
    b = 1.5 * Math.PI - b * a.G;
    var e = Math.sin(b);
    a.A[0] = c * Math.cos(b);
    a.A[1] = c * e;
    a.A[2] = d;
    return a.A;
  }
  function fn(a, b, c, d, e, f, g) {
    this.C = a;
    this.A = b;
    this.F = f || 0;
    this.G = g || 0;
    this.H = d || null;
    this.I = e || 0;
    this.B = c || [];
    this.D = new dn(a, b);
  }
  fn.prototype.V = u("C");
  function gn(a, b, c, d) {
    if (0 == a.C || 0 == a.A || !a.D) return null;
    b = sb(b, 0, 1);
    c = sb(c, 0, 1);
    b *= a.V() - 1;
    c = en(a.D, b, c * (a.A - 1));
    d = d || new sl();
    a = hn(a, c, d.A);
    if (0 == a) return null;
    Hk(c, a, d.origin);
    return d;
  }
  function jn(a, b, c) {
    c && Ek(c, kn);
    return 0 == a.F && 0 < a.G && 0 > b[2] ? -a.G * Ik(b) / b[2] : a.F;
  }
  function hn(a, b, c) {
    if (!a.B || !a.B.length) return jn(a, b, c);
    var d = a.D;
    var e = Math.acos(b[2]) * d.F - 0.5;
    var f = (Math.atan2(b[0], b[1]) + Math.PI) * d.C;
    f >= d.D - 0.5 && (f -= d.D);
    d.B[0] = f;
    d.B[1] = e;
    e = d.B;
    if (a.H) {
      d = Math.floor(e[0] + 0.5);
      e = Math.floor(e[1] + 0.5);
      d >= a.C ? (d -= a.C) : 0 > d && (d += a.C);
      e >= a.A ? (e -= a.A) : 0 > e && (e += a.A);
      var g = an(a.H, a.I + e * a.C + d) || 0;
    } else g = 0;
    if (0 >= g) return jn(a, b, c);
    g *= 4;
    d = a.B[g++];
    e = a.B[g++];
    f = a.B[g++];
    a = a.B[g++];
    c && ((c[0] = d), (c[1] = e), (c[2] = f));
    return sb(a / (b[0] * d + b[1] * e + b[2] * f), 0.1, 500);
  }
  var kn = Dk(Ck(), 0, 0, 1),
    ln = new fn(512, 512, null, null, 0, 500),
    mn = new fn(512, 512, null, null, 0, 0, 3);
  function nn() {
    this.height = this.width = this.M = this.O = this.D = this.F = this.J = this.G = this.C = this.B = this.A = this.L = this.K = this.I = this.H = void 0;
  }
  function on(a, b) {
    var c = 2 * Math.atan(Math.exp(a[1])) - Math.PI / 2;
    pn(a[0], c, 6371010 * a[2] * Math.cos(c), b, 6371010);
  }
  function qn(a, b) {
    var c = a[0],
      d = a[1],
      e = a[2];
    a = Math.atan2(e, Math.sqrt(c * c + d * d));
    e = Math.sqrt(c * c + d * d + e * e) - 6371010;
    b[0] = Math.atan2(d, c);
    b[1] = a;
    b[2] = e;
    c = b[1];
    d = b[2];
    a = Math.sin(c);
    b[1] = 0.5 * Math.log((1 + a) / (1 - a));
    b[2] = d / (6371010 * Math.cos(c));
  }
  function rn(a, b, c, d) {
    a = xb(a);
    b = xb(b);
    b = sb(b, -1.48442222974533, 1.48442222974533);
    d[0] = a;
    a = Math.sin(b);
    d[1] = 0.5 * Math.log((1 + a) / (1 - a));
    d[2] = c / (6371010 * Math.cos(b));
  }
  function sn(a, b, c, d, e) {
    b = 2 * Math.atan(Math.exp(b)) - Math.PI / 2;
    c = c * (e || 6371010) * Math.cos(b);
    d[0] = a;
    d[1] = b;
    d[2] = c;
  }
  function tn(a) {
    a = xb(a);
    a = sb(a, -1.48442222974533, 1.48442222974533);
    return 1 / (6371010 * Math.cos(a));
  }
  function un(a, b, c, d, e) {
    pn(xb(a), xb(b), c, d, e);
  }
  function pn(a, b, c, d, e) {
    var f = Math.cos(b);
    c += e || 6371010;
    Dk(d, c * f * Math.cos(a), c * f * Math.sin(a), c * Math.sin(b));
  }
  var vn = Ck(),
    wn = Ck(),
    xn = Ck(),
    yn = Ck(),
    zn = {
      earth: 6371010,
      mars: 3396e3,
      moon: 1737100,
      mercury: 2439700,
      venus: 6051800
    };
  var An = new nn(),
    Bn = Ck();
  function Cn(a, b) {
    var c = Lg(a),
      d = Ng(a),
      e = Jg(a);
    a = Ig(a);
    An.H = void 0;
    An.I = void 0;
    An.K = void 0;
    An.O = void 0;
    An.M = void 0;
    An.G = -xb(Tg(c));
    An.J = xb(N(c, 1));
    An.F = -xb(N(c, 2));
    An.D = xb(a);
    An.width = d.V();
    An.height = Vg(d);
    rn(Pg(e), Qg(e), Rg(e), Bn);
    An.A = Bn[0];
    An.B = Bn[1];
    An.C = Bn[2];
    c = 1 * tn(Qg(e));
    d = Math.abs(Bn[2]);
    An.L = d > c ? d : c;
    Dn(b, An);
    b.ia = 0;
  }
  function En(a, b) {
    return Fn(Qg(a), Qg(b)) && Fn(Pg(a), Pg(b)) && Fn(Rg(a), Rg(b), 1);
  }
  function Fn(a, b, c) {
    return Math.abs(a - b) < (F(c) ? c : 1e-7);
  }
  function Gn(a, b) {
    if (L(a, 0)) {
      var c = Jg(a),
        d = Kg(b);
      L(c, 0) && Sg(d, Rg(c));
      L(c, 2) && (d.data[2] = Qg(c));
      L(c, 1) && (d.data[1] = Pg(c));
    }
    L(a, 1) &&
      ((c = Lg(a)),
      (d = Mg(b)),
      L(c, 0) && (d.data[0] = Tg(c)),
      L(c, 2) && (d.data[2] = N(c, 2)),
      L(c, 1) && (d.data[1] = N(c, 1)));
    L(a, 3) && (b.data[3] = Ig(a));
  }
  function Hn() {
    this.ia = 0;
    this.W = ll();
    this.ja = ll();
    this.ma = ll();
    this.O = Ck();
    this.qa = Pk();
    Dk(Ck(), 1, 1, 1);
    this.M = Rk();
    this.aa = !0;
    this.H = this.G = this.F = 0;
    this.K = 1;
    this.T = this.R = this.N = this.C = this.B = this.A = 0;
    this.I = 0.4363323129985824;
    this.L = 1 / 3;
    this.J = Number.MAX_VALUE;
    this.Y = this.D = this.ea = 1;
    this.la = [];
  }
  Hn.prototype.V = u("ea");
  function Dn(a, b) {
    var c = !1,
      d = !1,
      e = !1,
      f = !1,
      g = !1;
    F(b.H) && (b.H != a.F && ((g = !0), (a.F = b.H)), (c = !0));
    F(b.I) && (b.I != a.G && ((g = !0), (a.G = b.I)), (c = !0));
    F(b.K) && (b.K != a.H && ((g = !0), (a.H = b.K)), (c = !0));
    F(b.L) && (b.L != a.K && ((g = !0), (a.K = b.L)), (d = !0));
    F(b.A) && (b.A != a.A && ((g = !0), (a.A = b.A)), (e = !0));
    F(b.B) && (b.B != a.B && ((g = !0), (a.B = b.B)), (e = !0));
    F(b.C) && (b.C != a.C && ((g = !0), (a.C = b.C)), (e = !0));
    F(b.G) && (b.G != a.N && ((g = !0), (a.N = b.G)), (f = !0));
    F(b.J) && (b.J != a.R && ((g = !0), (a.R = b.J)), (f = !0));
    F(b.F) && (b.F != a.T && ((g = !0), (a.T = b.F)), (f = !0));
    F(b.D) && b.D != a.I && ((g = !0), (a.I = b.D));
    F(b.O) && b.O != a.L && ((g = !0), (a.L = b.O));
    F(b.M) && b.M != a.J && ((g = !0), (a.J = b.M));
    F(b.width) && b.width != a.ea && ((g = !0), (a.ea = b.width));
    F(b.height) && b.height != a.D && ((g = !0), (a.D = b.height));
    if (g)
      for (
        !f || c || e || (e = !0),
          !d &&
            e &&
            c &&
            ((b = a.A - a.F),
            (d = a.B - a.G),
            (f = a.C - a.H),
            (a.K = Math.sqrt(b * b + d * d + f * f))),
          e &&
            !c &&
            (In(a, a.O),
            (a.F = a.A + a.O[0]),
            (a.G = a.B + a.O[1]),
            (a.H = a.C + a.O[2])),
          c &&
            !e &&
            (In(a, a.O),
            (a.A = a.F - a.O[0]),
            (a.B = a.G - a.O[1]),
            (a.C = a.H - a.O[2])),
          a.aa = !0,
          a.Y++,
          c = 0;
        c < a.la.length;
        c++
      )
        a.la[c]();
  }
  function Jn(a, b) {
    b = b || new nn();
    b.H = a.F;
    b.I = a.G;
    b.K = a.H;
    b.L = a.K;
    b.A = a.A;
    b.B = a.B;
    b.C = a.C;
    b.G = a.N;
    b.J = a.R;
    b.F = a.T;
    b.D = a.I;
    b.O = a.L;
    b.M = a.J;
    b.width = a.V();
    b.height = a.D;
    return b;
  }
  function Kn(a) {
    Ln(a);
    return a.W;
  }
  function Ln(a) {
    if (a.aa) {
      var b = a.W,
        c = a.V() / a.D,
        d = a.L,
        e = a.J,
        f = a.I / 2,
        g = e - d,
        k = Math.sin(f);
      0 != g &&
        0 != k &&
        0 != c &&
        ((f = Math.cos(f) / k),
        (b[0] = f / c),
        (b[1] = 0),
        (b[2] = 0),
        (b[3] = 0),
        (b[4] = 0),
        (b[5] = f),
        (b[6] = 0),
        (b[7] = 0),
        (b[8] = 0),
        (b[9] = 0),
        (b[10] = -(e + d) / g),
        (b[11] = -1),
        (b[12] = 0),
        (b[13] = 0),
        (b[14] = -(2 * d * e) / g),
        (b[15] = 0));
      b = a.ma;
      e = -a.T;
      f = -a.R;
      d = -a.N;
      c = Math.cos(e);
      e = Math.sin(e);
      g = Math.cos(f);
      f = Math.sin(f);
      k = Math.cos(d);
      d = Math.sin(d);
      b[0] = c * k - g * e * d;
      b[1] = g * c * d + k * e;
      b[2] = d * f;
      b[3] = 0;
      b[4] = -c * d - k * g * e;
      b[5] = c * g * k - e * d;
      b[6] = k * f;
      b[7] = 0;
      b[8] = f * e;
      b[9] = -c * f;
      b[10] = g;
      b[11] = 0;
      b[12] = 0;
      b[13] = 0;
      b[14] = 0;
      b[15] = 1;
      nl(a.W, a.ma, a.W);
      e = 1 / a.K;
      b = a.W;
      c = e * (a.F - a.A);
      d = e * (a.G - a.B);
      e *= a.H - a.C;
      b[12] += b[0] * c + b[4] * d + b[8] * e;
      b[13] += b[1] * c + b[5] * d + b[9] * e;
      b[14] += b[2] * c + b[6] * d + b[10] * e;
      b[15] += b[3] * c + b[7] * d + b[11] * e;
      var l = a.W;
      b = a.ja;
      c = l[0];
      d = l[1];
      e = l[2];
      g = l[3];
      f = l[4];
      k = l[5];
      var m = l[6],
        n = l[7],
        p = l[8],
        q = l[9],
        t = l[10],
        r = l[11],
        v = l[12],
        x = l[13],
        z = l[14];
      l = l[15];
      var A = c * k - d * f,
        H = c * m - e * f,
        B = c * n - g * f,
        J = d * m - e * k,
        D = d * n - g * k,
        T = e * n - g * m,
        S = p * x - q * v,
        W = p * z - t * v,
        da = p * l - r * v,
        ia = q * z - t * x,
        fa = q * l - r * x,
        ha = t * l - r * z,
        qa = A * ha - H * fa + B * ia + J * da - D * W + T * S;
      0 != qa &&
        ((qa = 1 / qa),
        (b[0] = (k * ha - m * fa + n * ia) * qa),
        (b[1] = (-d * ha + e * fa - g * ia) * qa),
        (b[2] = (x * T - z * D + l * J) * qa),
        (b[3] = (-q * T + t * D - r * J) * qa),
        (b[4] = (-f * ha + m * da - n * W) * qa),
        (b[5] = (c * ha - e * da + g * W) * qa),
        (b[6] = (-v * T + z * B - l * H) * qa),
        (b[7] = (p * T - t * B + r * H) * qa),
        (b[8] = (f * fa - k * da + n * S) * qa),
        (b[9] = (-c * fa + d * da - g * S) * qa),
        (b[10] = (v * D - x * B + l * A) * qa),
        (b[11] = (-p * D + q * B - r * A) * qa),
        (b[12] = (-f * ia + k * W - m * S) * qa),
        (b[13] = (c * ia - d * W + e * S) * qa),
        (b[14] = (-v * J + x * H - z * A) * qa),
        (b[15] = (p * J - q * H + t * A) * qa));
      a.aa = !1;
    }
  }
  function Mn(a, b, c, d) {
    d = d || new sl();
    var e = a.O,
      f = a.L,
      g = a.J;
    e[0] = b;
    e[1] = c;
    e[2] = g / (g - f);
    b = e || Ck();
    c = e[1];
    var k = e[2];
    b[0] = 2 * e[0] / a.V() - 1;
    b[1] = 2 * -c / a.D + 1;
    b[2] = 2 * k - 1;
    e[2] = (g + f) / (g - f);
    f = a.M;
    Ln(a);
    Tk(f, a.ja);
    $k(a.M, e, d.A);
    Jk(d.A, d.A);
    Dk(d.origin, a.A, a.B, a.C);
  }
  function In(a, b) {
    Dk(b, 0, 0, -a.K);
    var c = a.M,
      d = a.N,
      e = a.R,
      f = a.T,
      g = Math.cos(d);
    d = Math.sin(d);
    var k = Math.cos(e);
    e = Math.sin(e);
    var l = Math.cos(f);
    f = Math.sin(f);
    c[0] = g * l - k * d * f;
    c[1] = k * g * f + l * d;
    c[2] = f * e;
    c[3] = 0;
    c[4] = -g * f - l * k * d;
    c[5] = g * k * l - d * f;
    c[6] = l * e;
    c[7] = 0;
    c[8] = e * d;
    c[9] = -g * e;
    c[10] = k;
    c[11] = 0;
    c[12] = 0;
    c[13] = 0;
    c[14] = 0;
    c[15] = 1;
    al(a.M, b, b);
  }
  function Nn() {
    this.O = !1;
    this.A = null;
    this.J = new Eg();
    this.I = Rk();
    this.L = Rk();
    this.M = this.C = this.K = this.B = this.N = 0;
    this.D = new Hg();
    this.G = new Hg();
    this.F = new Hg();
    this.H = new Hg();
  }
  y = Nn.prototype;
  y.he = u("O");
  y.xc = u("D");
  y.Ma = u("M");
  y.ac = u("K");
  y.Mb = u("C");
  y.Ue = function(a) {
    return 1 << (this.Ma() - a);
  };
  y.Kg = function(a, b, c, d) {
    var e = this.Ue(c);
    c = Math.min(a + e, this.N);
    e = Math.min(b + e, this.B);
    var f = [],
      g = Math.PI * (2 * this.Ta(a) - 1),
      k = Math.PI * (2 * this.Ta(c) - 1),
      l = Math.PI * (0.5 - this.Ua(b)),
      m = Math.PI * (0.5 - this.Ua(e)),
      n = Math.cos(l) * (k - g),
      p = Math.cos(m) * (k - g);
    d = xb(d ? 8 : 4);
    var q = 1;
    1 == this.B && (q = Math.max(1, Math.ceil((k - g) / d)));
    f[0] = Math.max(1, Math.ceil((l - m) / d));
    f[1] = Math.max(q, Math.ceil(n / d));
    f[2] = Math.max(q, Math.ceil(p / d));
    f[0] = On(f[0], e - b);
    f[1] = On(f[1], c - a);
    f[2] = On(f[2], c - a);
    0 == b && (f[1] = f[2]);
    return f;
  };
  y.Fg = w(0);
  y.uc = function(a, b) {
    if (b) {
      var c = new Eg();
      R(c, this.J);
      Gn(b, c);
      Pn(c, a);
    } else Sk(a, this.I);
  };
  y.Ig = function(a) {
    Sk(a, this.L);
  };
  y.Ta = function(a) {
    var b = this.H.V(),
      c = this.G.V(),
      d = this.F.V(),
      e = 1,
      f = 0;
    b && c && ((e = c / b), d && (f = d / b));
    return f + Math.min(a / this.ac(), 1) * e;
  };
  y.Ua = function(a) {
    var b = Vg(this.H),
      c = Vg(this.G),
      d = Vg(this.F),
      e = 1,
      f = 0;
    b && c && ((e = c / b), d && (f = d / b));
    return f + Math.min(a / this.Mb(), 1) * e;
  };
  y.zb = function(a, b, c, d) {
    var e = this.A;
    var f = a * this.A.V();
    f = en(e.D, f, b * this.A.A);
    e = hn(e, f);
    0 == e && (e = 500);
    a = Math.PI * (2 * a - 1);
    b = Math.PI * (0.5 - b);
    c[d + 0] = Math.sin(a) * Math.cos(b) * e;
    c[d + 1] = Math.cos(a) * Math.cos(b) * e;
    c[d + 2] = Math.sin(b) * e;
  };
  y.ug = function(a, b, c, d, e, f) {
    d = this.Ua(b);
    var g = this.Ua(b + 1);
    f
      ? (e = (g - d) * Math.PI)
      : ((f = this.Ta(a)),
        (a = this.Ta(a + 1)),
        (a = (f + a) / 2),
        this.zb(a, d, Qn, 0),
        this.zb(a, g, Rn, 0),
        (d = Rn),
        $k(e, Qn, Sn),
        $k(e, d, Tn),
        (Sn[0] -= c.A),
        (Sn[1] -= c.B),
        (Sn[2] -= c.C),
        (Tn[0] -= c.A),
        (Tn[1] -= c.B),
        (Tn[2] -= c.C),
        (e = Math.acos(
          (Sn[0] * Tn[0] + Sn[1] * Tn[1] + Sn[2] * Tn[2]) / (Ik(Sn) * Ik(Tn))
        )));
    d = c.I;
    e = 1e-6 < Math.abs(d) ? e * c.D / d : 0;
    c = this.Ma();
    d = this.C - (this.B - 1);
    1 > d && b == this.B - 1 && (e /= d);
    b = Math.floor(Math.log(Vg(this.xc()) / e) / Math.LN2);
    b = sb(b, 0, c);
    return Math.max(2, c - b);
  };
  y.ef = function(a, b, c) {
    al(b, a.A, Qn);
    Jk(Qn, Qn);
    c.x = Math.atan2(Qn[0], Qn[1]) / (2 * Math.PI) + 0.5;
    c.y = Math.acos(Qn[2]) / Math.PI;
  };
  y.Mg = function(a, b, c) {
    this.uc(Un, b);
    Zk(Un, Vn);
    this.ef(a, Vn, Wn);
    a = gn(this.A, Wn.x, Wn.y, c);
    if (!a) return null;
    $k(Un, a.origin, a.origin);
    al(Un, a.A, a.A);
    Jk(a.A, a.A);
    return a;
  };
  y.ti = w(1);
  var Qn = Ck(),
    Rn = Ck(),
    Sn = Ck(),
    Tn = Ck(),
    Un = Rk(),
    Vn = Rk(),
    Wn = new Mi();
  function On(a, b) {
    return Math.ceil(a / b) * b;
  }
  function Pn(a, b) {
    var c = new Hn();
    Cn(a, c);
    var d = c.A,
      e = c.B;
    c = c.C;
    b[0] = 1;
    b[1] = 0;
    b[2] = 0;
    b[3] = 0;
    b[4] = 0;
    b[5] = 1;
    b[6] = 0;
    b[7] = 0;
    b[8] = 0;
    b[9] = 0;
    b[10] = 1;
    b[11] = 0;
    b[12] = d;
    b[13] = e;
    b[14] = c;
    b[15] = 1;
    d = tn(Qg(Jg(a)));
    fl(b, d, d, d);
    a = Lg(a);
    il(b, xb(-Tg(a)));
    gl(b, xb(N(a, 1) - 90));
    hl(b, xb(N(a, 2)));
  }
  function Xn(a) {
    this.data = a || [];
  }
  I(Xn, K);
  function Yn(a) {
    this.data = a || [];
  }
  I(Yn, K);
  function Zn(a) {
    this.data = a || [];
  }
  I(Zn, K);
  function $n(a) {
    this.data = a || [];
  }
  I($n, K);
  function ao(a) {
    this.data = a || [];
  }
  I(ao, K);
  function jo(a) {
    this.data = a || [];
  }
  I(jo, K);
  function ko(a) {
    this.data = a || [];
  }
  I(ko, K);
  function lo(a) {
    this.data = a || [];
  }
  I(lo, K);
  function mo(a) {
    return M(a, 0);
  }
  function no(a) {
    return new ah(a.data[4]);
  }
  function oo(a) {
    return new ah(P(a, 4));
  }
  function po(a) {
    return new jo(a.data[8]);
  }
  function qo(a, b, c) {
    Yj.call(this);
    this.L = "" + Oa(this);
    this.M = a;
    this.B = c;
    this.I = [c];
    this.J = !1;
    this.A = new Float32Array(12);
    this.C = 0;
    this.G = null;
    this.F = this.D = 1;
    ro(this);
    c = this.J ? 2 : 1;
    var d = 2 * c / 1.25 / 80,
      e = 1.25 * c;
    a = this.A;
    a[0] = c;
    a[1] = 7.5;
    a[2] = -3;
    a[3] = -c;
    a[4] = 7.5;
    a[5] = -3;
    a[6] = e;
    a[7] = this.C * d + 7.5;
    a[8] = -3;
    a[9] = -e;
    a[10] = this.C * d + 7.5;
    a[11] = -3;
    rl(so, -xb(b));
    for (b = 0; 4 > b; b++) {
      to[0] = a[3 * b];
      to[1] = a[3 * b + 1];
      to[2] = a[3 * b + 2];
      c = so;
      var f = to;
      d = to;
      e = f[0];
      var g = f[1];
      f = f[2];
      d[0] = e * c[0] + g * c[4] + f * c[8];
      d[1] = e * c[1] + g * c[5] + f * c[9];
      d[2] = e * c[2] + g * c[6] + f * c[10];
      a[3 * b] = to[0];
      a[3 * b + 1] = to[1];
      a[3 * b + 2] = to[2];
    }
  }
  C(qo, Yj);
  y = qo.prototype;
  y.nb = w(2);
  y.Ba = w(null);
  y.fa = w(null);
  y.id = u("L");
  y.Tb = h();
  y.gc = function(a) {
    a(3);
  };
  y.oa = u("M");
  function ro(a) {
    if (!a.G) {
      if (!a.B || 1 > a.B.length) var b = null;
      else {
        b = Ui("CANVAS");
        if (b.getContext) {
          var c = b.getContext("2d");
          var d = G(c.measureText, c);
        } else (c = null), (d = uo);
        vo(c);
        var e = a.B,
          f = [],
          g = "",
          k = e,
          l;
        c ? (l = G(c.measureText, c)) : (l = uo);
        if (1024 < l(e).width) {
          e = e.split(" ");
          for (var m = 0, n = 1, p = 0; p < e.length && m < n; p++)
            (g = g + e[p] + " "),
              (k = k.substring(e[p].length + 1)),
              (m = l(g).width),
              (n = l(k).width);
        }
        g && f.push(g);
        k && f.push(k);
        a.I = f;
        g = 0;
        k = 100 * f.length;
        0 != (k & (k - 1)) && ((l = wo(k)), (a.D = k / l), (k = l));
        b.height = k;
        vo(c);
        d = d(f[0]);
        g = Math.max(g, d.width);
        a.C = g;
        0 != (g & (g - 1)) && ((d = wo(g)), (a.F = g / d), (g = d));
        b.width = g;
        vo(c);
        c &&
          (c.strokeText(f[0], 0, 0),
          c.fillText(f[0], 0, 0),
          f[1] &&
            ((a.J = !0), c.strokeText(f[1], 0, 100), c.fillText(f[1], 0, 100)));
      }
      a.G = b;
    }
    return a.G;
  }
  function vo(a) {
    a &&
      ((a.fillStyle = "rgba(255, 255, 255, 0.7)"),
      (a.font = "bold 80px Arial"),
      (a.textBaseline = "top"),
      (a.strokeStyle = "rgba(0, 0, 0, 0.15)"),
      (a.lineWidth = 2),
      (a.shadowOffsetX = -1.5),
      (a.shadowOffsetY = -1.5),
      (a.shadowBlur = 4),
      (a.shadowColor = "rgba(0, 0, 0, 0.5)"));
  }
  function uo(a, b, c) {
    b = b || "Arial";
    c = c || 80;
    var d = Ui("dummyContainer");
    E.document.body.appendChild(d);
    var e = Yi("dummyText");
    Si(e, {
      style:
        "font-family:" +
        b +
        ";position:absolute;top:-20000px;left:-20000px;padding:0;margin:0;border:0;white-space:pre;font-size:" +
        c +
        "px"
    });
    e.appendChild(document.createTextNode(String(a)));
    d.appendChild(e);
    c = Qi(e);
    a = new Mi(0, 0);
    b = c ? Qi(c) : document;
    b =
      !Nc || 9 <= Number(cd) || "CSS1Compat" == Oi(b).A.compatMode
        ? b.documentElement
        : b.body;
    if (e != b) {
      b = tk(e);
      var f = Oi(c).A;
      c = f.scrollingElement
        ? f.scrollingElement
        : Qc || "CSS1Compat" != f.compatMode
          ? f.body || f.documentElement
          : f.documentElement;
      f = f.parentWindow || f.defaultView;
      c =
        Nc && bd("10") && f.pageYOffset != c.scrollTop
          ? new Mi(c.scrollLeft, c.scrollTop)
          : new Mi(f.pageXOffset || c.scrollLeft, f.pageYOffset || c.scrollTop);
      a.x = b.left + c.x;
      a.y = b.top + c.y;
    }
    b = wk(e);
    a = new bk(a.x, a.y, b.width, b.height);
    d.removeChild(e);
    E.document.body.removeChild(d);
    return { width: a.width };
  }
  var to = new Float32Array(3),
    so = ll();
  function wo(a) {
    for (var b = 1; b < a; ) b <<= 1;
    return b;
  }
  function xo(a) {
    this.B = null;
    this.D = a;
    this.H = this.C = !1;
    this.A = new Float32Array(8);
  }
  xo.prototype.F = u("C");
  xo.prototype.G = function() {
    if (!this.F() && !this.H) {
      var a = ro(this.D);
      if (a) {
        this.C = !0;
        for (
          var b = a.width,
            c = a.height,
            d = Ui("CANVAS", { width: b, height: c }),
            e = d.getContext("2d"),
            f = 0,
            g = 0;
          g < b;
          g += 30
        ) {
          var k = 30;
          g + 30 > b && (k = b - g);
          var l = Math.max(c * (1 - 4e-4 * g), 0),
            m = 0.6 * Math.max(k * (1 - 4e-4 * g), 0);
          e.drawImage(a, g, 0, k, c, f, (c - l) / 2, m, l);
          f += m;
        }
        this.B = d;
        this.A[0] = this.A[1] = 0;
        this.A[2] = 0;
        this.A[3] = 0.5 * this.B.height;
        this.A[4] = 0.5 * this.B.width;
        this.A[5] = 0.5 * this.B.height;
        this.A[6] = 0.5 * this.B.width;
        this.A[7] = 0;
      } else this.H = !0;
    }
  };
  function yo(a, b) {
    Yj.call(this);
    this.S = a;
    this.D = [];
    this.G = [];
    this.I = new Sm(b || 8);
  }
  C(yo, Yj);
  y = yo.prototype;
  y.wc = function(a) {
    Cn(a, this.S);
  };
  y.kc = function(a) {
    this.D = [];
    for (var b = 0; b < a.length; ++b) a[b] && this.D.push(a[b]);
  };
  y.La = function() {
    this.ec();
    this.Xd();
  };
  y.ec = function() {
    var a;
    for (a = 0; a < this.G.length; ++a) zo(this, this.G[a]).G();
    for (a = 0; a < this.D.length; ++a) zo(this, this.D[a]).G();
  };
  y.Xd = function() {
    for (var a = 0; a < this.D.length; ++a) {
      var b = zo(this, this.D[a]);
      this.Va(b);
    }
  };
  y.Va = h();
  function zo(a, b) {
    var c = Um(a.I, b.id());
    c || ((c = a.Me(b)), Tm(a.I, b.id(), c));
    return c;
  }
  y.clear = function() {
    this.I.clear();
    this.D = [];
    this.G = [];
  };
  y.Rb = h();
  y.Za = w(null);
  y.ed = h();
  y.dd = w(!0);
  y.Me = h();
  function Ao(a, b, c, d) {
    this.F = a;
    this.G = b;
    this.C = c;
    this.D = d;
    this.L = a + "|" + b + "|" + c;
  }
  Ao.prototype.toString = u("L");
  function Bo() {
    Yj.call(this);
    this.P = null;
    this.A = [];
    this.B = "" + Oa(this);
  }
  C(Bo, Yj);
  y = Bo.prototype;
  y.nb = function() {
    return this.P ? this.P.nb() : 0;
  };
  function Co(a, b) {
    a.P = b;
    for (um(a.P, "TileReady", a); 0 < a.A.length; ) a.A.shift()();
  }
  y.Ba = function() {
    return this.P ? this.P.Ba() : null;
  };
  y.fa = function() {
    return this.P ? this.P.fa() : null;
  };
  y.Tb = function(a) {
    if (this.P) this.P.Tb(a);
    else {
      var b = this;
      this.A.push(
        a.va(function() {
          b.P.Tb(a);
        }, "dtr-prefetch")
      );
    }
  };
  y.oa = function() {
    return this.P ? this.P.oa() : null;
  };
  y.sb = function() {
    if (this.P) this.P.sb();
    else {
      var a = this;
      this.A.push(function() {
        a.P.sb();
      });
    }
  };
  y.rb = function(a) {
    if (this.P) this.P.rb(a);
    else {
      var b = this;
      this.A.push(function() {
        b.P.rb(a);
      });
    }
  };
  y.Zc = function(a) {
    return this.P ? this.P.Zc(a) : !1;
  };
  y.Bb = function(a, b, c) {
    return this.P ? this.P.Bb(a, b, c) : null;
  };
  y.Sd = function(a, b) {
    if (this.P) this.P.Sd(a, b);
    else {
      var c = this;
      this.A.push(function() {
        c.P.Sd(a, b);
      });
    }
  };
  y.Rd = function(a, b) {
    if (this.P) this.P.Rd(a, b);
    else {
      var c = this;
      this.A.push(function() {
        c.P.Rd(a, b);
      });
    }
  };
  y.Ec = function(a, b) {
    if (this.P) this.P.Ec(a, b);
    else {
      var c = this;
      this.A.push(
        a.va(function() {
          c.P.Ec(a, b);
        }, "dtr-getconfig")
      );
    }
  };
  y.Cb = function(a, b) {
    if (this.P) this.P.Cb(a, b);
    else {
      var c = this;
      this.A.push(
        b.va(function() {
          c.P.Cb(a, b);
        }, "dtr-setconfig")
      );
    }
  };
  y.vd = function() {
    if (this.P) this.P.vd();
    else {
      var a = this;
      this.A.push(function() {
        a.P.vd();
      });
    }
  };
  y.Ib = function(a, b, c, d, e) {
    if (this.P) this.P.Ib(a, b, c, d, e);
    else {
      var f = this;
      this.A.push(
        d.va(function() {
          f.P.Ib(a, b, c, d, e);
        }, "dtr-getile")
      );
    }
  };
  y.Kc = function(a, b, c) {
    if (this.P) this.P.Kc(a, b, c);
    else {
      var d = this;
      this.A.push(function() {
        d.P.Kc(a, b, c);
      });
    }
  };
  y.Md = function(a, b, c) {
    if (this.P) this.P.Md(a, b, c);
    else {
      var d = this;
      this.A.push(function() {
        d.P.Md(a, b, c);
      });
    }
  };
  y.Ye = function() {
    return this.P ? this.P.Ye() : !1;
  };
  y.Qc = function() {
    if (this.P) this.P.Qc();
    else {
      var a = this;
      this.A.push(function() {
        a.P.Qc();
      });
    }
  };
  y.af = function() {
    return this.P ? this.P.af() : !1;
  };
  y.Vc = function(a, b) {
    return this.P ? this.P.Vc(a, b) : null;
  };
  y.Nb = function() {
    return this.P ? this.P.Nb() : [];
  };
  y.Fd = function(a) {
    if (this.P) this.P.Fd(a);
    else {
      var b = this;
      this.A.push(function() {
        b.P.Fd(a);
      });
    }
  };
  y.id = u("B");
  y.$ = function() {
    return this.P ? this.P.$() : null;
  };
  y.gc = function(a) {
    if (this.P) this.P.gc(a);
    else {
      var b = this;
      this.A.push(function() {
        b.P.gc(a);
      });
    }
  };
  function Do() {
    this.C = this.A = 0;
    this.B = null;
    this.D = 0;
    this.G = [];
    this.F = {};
    this.H = {};
  }
  Do.prototype.V = u("A");
  function Eo(a, b, c) {
    return (a = a.H[b]) ? (R(Kg(c), a), !0) : !1;
  }
  function Fo(a) {
    Bo.apply(this, arguments);
  }
  C(Fo, Bo);
  Fo.prototype.Da = function() {
    return this.P ? this.P.Da() : null;
  };
  Fo.prototype.Nb = function() {
    return this.P ? this.P.Nb() : [];
  };
  Fo.prototype.Zd = function() {
    return this.P ? this.P.Zd() : null;
  };
  Fo.prototype.Ab = function() {
    return this.P ? this.P.Ab() : null;
  };
  function Go() {
    this.G = new ArrayBuffer(Ho);
    this.D = new Uint8Array(this.G);
    this.C = new Uint16Array(this.G);
    this.H = new Uint32Array(this.G);
    this.F = new Int32Array(this.G);
    this.B = new Float32Array(this.G);
    this.clear();
  }
  Go.prototype.clear = function() {
    this.wb(3042);
    this.wb(2884);
    this.wb(2929);
    this.wb(3024);
    this.wb(32823);
    this.wb(32926);
    this.wb(32928);
    this.wb(3089);
    this.wb(2960);
    this.Tf();
    this.Uf();
    this.Vf();
    this.ag();
    this.lg();
    this.Wf();
    this.Xf();
    this.Yf();
    this.Zf();
    this.bg();
    this.cg();
    this.mg();
    this.ph();
    this.$f();
    this.gg();
    this.ig();
    this.jg();
    for (var a = 0; 32 > a; ++a) this.tg(a);
    this.Rf();
    this.Db(3317);
    this.Db(3333);
    this.Db(37440);
    this.Db(37441);
    this.Db(37443);
    this.hg(33170);
  };
  Go.prototype.apply = function(a) {
    Io(a, 3042) && Jo(a, 3042) != Jo(this, 3042) && this.Na(3042, Jo(a, 3042));
    Io(a, 2884) && Jo(a, 2884) != Jo(this, 2884) && this.Na(2884, Jo(a, 2884));
    Io(a, 2929) && Jo(a, 2929) != Jo(this, 2929) && this.Na(2929, Jo(a, 2929));
    Io(a, 3024) && Jo(a, 3024) != Jo(this, 3024) && this.Na(3024, Jo(a, 3024));
    Io(a, 32823) &&
      Jo(a, 32823) != Jo(this, 32823) &&
      this.Na(32823, Jo(a, 32823));
    Io(a, 32926) &&
      Jo(a, 32926) != Jo(this, 32926) &&
      this.Na(32926, Jo(a, 32926));
    Io(a, 32928) &&
      Jo(a, 32928) != Jo(this, 32928) &&
      this.Na(32928, Jo(a, 32928));
    Io(a, 3089) && Jo(a, 3089) != Jo(this, 3089) && this.Na(3089, Jo(a, 3089));
    Io(a, 2960) && Jo(a, 2960) != Jo(this, 2960) && this.Na(2960, Jo(a, 2960));
    if (0 <= a.B[3]) {
      var b = a.B[3],
        c = a.B[4],
        d = a.B[5],
        e = a.B[6];
      (this.B[3] == b && this.B[4] == c && this.B[5] == d && this.B[6] == e) ||
        this.qd(b, c, d, e);
    }
    65535 == a.C[14] ||
      (Ko(this, !1) == Ko(a, !1) && Ko(this, !0) == Ko(a, !0)) ||
      ((b = Ko(a, !1)), (c = Ko(a, !0)), c == b && (c = void 0), this.Fc(b, c));
    65535 != a.C[16] &&
      ((b = a.C[16]),
      (c = a.C[17]),
      (d = a.C[18]),
      (e = a.C[19]),
      this.C[16] != b ||
        this.C[17] != c ||
        this.C[18] != d ||
        this.C[19] != e) &&
      (d == b && e == c && (e = d = void 0), this.Gc(b, c, d, e));
    65535 != a.C[20] && Lo(a) != Lo(this) && this.xd(Lo(a));
    0 < a.D[48] &&
      ((b = a.B[11]),
      (c = 2 == a.D[48]),
      (this.B[11] == b && this.D[48] == (c ? 2 : 1)) || this.Id(b, c));
    0 <= a.B[13] &&
      ((b = a.B[13]),
      (c = a.B[14]),
      (d = a.B[15]),
      (e = a.B[16]),
      (this.B[13] == b &&
        this.B[14] == c &&
        this.B[15] == d &&
        this.B[16] == e) ||
        this.rd(b, c, d, e));
    0 <= a.B[17] && Mo(a) != Mo(this) && this.sd(Mo(a));
    1 == a.D[76] && No(a) != No(this) && this.td(No(a));
    0 < a.D[80] &&
      ((b = 2 == a.D[80]),
      (c = 2 == a.D[81]),
      (d = 2 == a.D[82]),
      (e = 2 == a.D[83]),
      Oo(this, b, c, d, e) || this.ud(b, c, d, e));
    0 < a.D[84] && Po(a) != Po(this) && this.yd(Po(a));
    0 <= a.B[Qo] &&
      ((b = a.B[Qo]),
      (c = a.B[Qo + 1]),
      (this.B[Qo] == b && this.B[Qo + 1] == c) || this.zd(b, c));
    0 <= a.F[Ro + 2] &&
      ((b = a.F[Ro]),
      (c = a.F[Ro + 1]),
      (d = a.F[Ro + 2]),
      (e = a.F[Ro + 3]),
      (this.F[Ro] == b &&
        this.F[Ro + 1] == c &&
        this.F[Ro + 2] == d &&
        this.F[Ro + 3] == e) ||
        this.Jd(b, c, d, e));
    0 <= a.F[So + 2] &&
      ((b = a.F[So]),
      (c = a.F[So + 1]),
      (d = a.F[So + 2]),
      (e = a.F[So + 3]),
      (this.F[So] == b &&
        this.F[So + 1] == c &&
        this.F[So + 2] == d &&
        this.F[So + 3] == e) ||
        this.Kd(b, c, d, e));
    65535 != a.C[To] && Uo(a) != Uo(this) && this.wd(Uo(a));
    65535 != a.C[Vo] && Wo(a) != Wo(this) && this.Cd(Wo(a));
    0 < a.B[Xo] && Yo(a) != Yo(this) && this.Ed(Yo(a));
    0 < a.D[Zo] &&
      ((b = a.B[$o]),
      (c = a.B[$o + 1]),
      (0 < this.D[Zo] && this.B[$o] == b && this.B[$o + 1] == c) ||
        this.Gd(b, c));
    for (b = 0; 32 > b; ++b)
      0 < a.D[ap + b] && bp(a, b) != bp(this, b) && this.Hc(b, bp(a, b));
    65535 != a.C[cp] && dp(a) != dp(this) && this.Vb(dp(a));
    ep(a, 3317) && fp(a, 3317) != fp(this, 3317) && this.lb(3317, fp(a, 3317));
    ep(a, 3333) && fp(a, 3333) != fp(this, 3333) && this.lb(3333, fp(a, 3333));
    ep(a, 37440) &&
      fp(a, 37440) != fp(this, 37440) &&
      this.lb(37440, fp(a, 37440));
    ep(a, 37441) &&
      fp(a, 37441) != fp(this, 37441) &&
      this.lb(37441, fp(a, 37441));
    ep(a, 37443) &&
      fp(a, 37443) != fp(this, 37443) &&
      this.lb(37443, fp(a, 37443));
    65535 != a.C[gp] && hp(a) != hp(this) && this.Dd(33170, hp(a));
  };
  var ip = [];
  ip[3042] = 0;
  ip[2884] = 1;
  ip[2929] = 2;
  ip[3024] = 3;
  ip[32823] = 4;
  ip[32926] = 5;
  ip[32928] = 6;
  ip[3089] = 7;
  ip[2960] = 8;
  y = Go.prototype;
  y.Na = function(a, b) {
    this.D[0 + ip[a]] = b ? 2 : 1;
  };
  function Jo(a, b) {
    a = a.D[0 + ip[b]];
    if (0 != a) return 2 == a;
  }
  function Io(a, b) {
    return 0 < a.D[0 + ip[b]];
  }
  y.wb = function(a) {
    this.D[0 + ip[a]] = 0;
  };
  y.qd = function(a, b, c, d) {
    this.B[3] = a;
    this.B[4] = b;
    this.B[5] = c;
    this.B[6] = d;
  };
  y.Tf = function() {
    this.B[3] = -1;
    this.B[4] = -1;
    this.B[5] = -1;
    this.B[6] = -1;
  };
  y.Fc = function(a, b) {
    this.C[14] = a;
    this.C[15] = b || a;
  };
  function Ko(a, b) {
    a = b ? a.C[15] : a.C[14];
    if (65535 != a) return a;
  }
  y.Uf = function() {
    this.C[14] = 65535;
    this.C[15] = 65535;
  };
  y.Gc = function(a, b, c, d) {
    this.C[16] = a;
    this.C[17] = b;
    this.C[18] = void 0 === c ? a : c;
    this.C[19] = void 0 === d ? b : d;
  };
  y.Vf = function() {
    this.C[16] = 65535;
    this.C[17] = 65535;
    this.C[18] = 65535;
    this.C[19] = 65535;
  };
  y.xd = function(a) {
    this.C[20] = a;
  };
  function Lo(a) {
    a = a.C[20];
    if (65535 != a) return a;
  }
  y.ag = function() {
    this.C[20] = 65535;
  };
  y.Id = function(a, b) {
    this.B[11] = a;
    this.D[48] = b ? 2 : 1;
  };
  y.lg = function() {
    this.D[48] = 0;
  };
  y.rd = function(a, b, c, d) {
    this.B[13] = a;
    this.B[14] = b;
    this.B[15] = c;
    this.B[16] = d;
  };
  y.Wf = function() {
    this.B[13] = -1;
    this.B[14] = -1;
    this.B[15] = -1;
    this.B[16] = -1;
  };
  y.sd = function(a) {
    this.B[17] = a;
  };
  function Mo(a) {
    a = a.B[17];
    if (!(0 > a)) return a;
  }
  y.Xf = function() {
    this.B[17] = -1;
  };
  y.td = function(a) {
    this.H[18] = a;
    this.D[76] = 1;
  };
  function No(a) {
    if (1 == a.D[76]) return a.H[18];
  }
  y.Yf = function() {
    this.D[76] = 0;
  };
  y.ud = function(a, b, c, d) {
    this.D[80] = a ? 2 : 1;
    this.D[81] = b ? 2 : 1;
    this.D[82] = c ? 2 : 1;
    this.D[83] = d ? 2 : 1;
  };
  y.Zf = function() {
    this.D[80] = 0;
    this.D[81] = 0;
    this.D[82] = 0;
    this.D[83] = 0;
  };
  function Oo(a, b, c, d, e) {
    return (
      a.D[80] == (b ? 2 : 1) &&
      a.D[81] == (c ? 2 : 1) &&
      a.D[82] == (d ? 2 : 1) &&
      a.D[83] == (e ? 2 : 1)
    );
  }
  y.yd = function(a) {
    this.D[84] = a ? 2 : 1;
  };
  function Po(a) {
    a = a.D[84];
    if (0 != a) return 2 == a;
  }
  y.bg = function() {
    this.D[84] = 0;
  };
  var jp = 96,
    Qo = 22;
  Go.prototype.zd = function(a, b) {
    this.B[Qo] = a;
    this.B[Qo + 1] = b;
  };
  Go.prototype.cg = function() {
    this.B[Qo] = -1;
    this.B[Qo + 1] = -1;
  };
  var kp = jp + 16,
    Ro = jp / 4;
  Go.prototype.Jd = function(a, b, c, d) {
    this.F[Ro] = a;
    this.F[Ro + 1] = b;
    this.F[Ro + 2] = c;
    this.F[Ro + 3] = d;
  };
  Go.prototype.mg = function() {
    this.F[Ro + 2] = -1;
    this.F[Ro + 3] = -1;
  };
  var lp = kp + 16,
    So = kp / 4;
  Go.prototype.Kd = function(a, b, c, d) {
    this.F[So] = a;
    this.F[So + 1] = b;
    this.F[So + 2] = c;
    this.F[So + 3] = d;
  };
  Go.prototype.ph = function() {
    this.F[So + 2] = -1;
    this.F[So + 3] = -1;
  };
  var mp = lp + 4,
    To = lp / 2;
  Go.prototype.wd = function(a) {
    this.C[To] = a;
  };
  function Uo(a) {
    a = a.C[To];
    if (65535 != a) return a;
  }
  Go.prototype.$f = function() {
    this.C[To] = 65535;
  };
  var np = mp + 4,
    Vo = mp / 2;
  Go.prototype.Cd = function(a) {
    this.C[Vo] = a;
  };
  function Wo(a) {
    a = a.C[Vo];
    if (65535 != a) return a;
  }
  Go.prototype.gg = function() {
    this.C[Vo] = 65535;
  };
  var op = np + 4,
    Xo = np / 4;
  Go.prototype.Ed = function(a) {
    this.B[Xo] = a;
  };
  function Yo(a) {
    a = a.B[Xo];
    if (!(0 > a)) return a;
  }
  Go.prototype.ig = function() {
    this.B[Xo] = -1;
  };
  var ap = op + 12,
    $o = op / 4,
    Zo = op + 8;
  Go.prototype.Gd = function(a, b) {
    this.B[$o] = a;
    this.B[$o + 1] = b;
    this.D[Zo] = 1;
  };
  Go.prototype.jg = function() {
    this.D[Zo] = 0;
  };
  var pp = ap + 32;
  Go.prototype.Hc = function(a, b) {
    this.D[ap + a] = b ? 2 : 1;
  };
  function bp(a, b) {
    a = a.D[ap + b];
    if (0 != a) return 2 == a;
  }
  Go.prototype.tg = function(a) {
    this.D[ap + a] = 0;
  };
  var qp = pp + 4,
    cp = pp / 2;
  Go.prototype.Vb = function(a) {
    this.C[cp] = a;
  };
  function dp(a) {
    a = a.C[cp];
    if (65535 != a) return a;
  }
  Go.prototype.Rf = function() {
    this.C[cp] = 65535;
  };
  var rp = [];
  rp[3317] = 0;
  rp[3333] = 1;
  rp[37440] = 2;
  rp[37441] = 3;
  rp[37443] = 4;
  var sp = qp + 12,
    tp = qp / 2;
  Go.prototype.lb = function(a, b) {
    this.C[tp + rp[a]] = b;
  };
  function fp(a, b) {
    a = a.C[tp + rp[b]];
    if (65535 != a) return a;
  }
  function ep(a, b) {
    return 65535 != a.C[tp + rp[b]];
  }
  Go.prototype.Db = function(a) {
    this.C[tp + rp[a]] = 65535;
  };
  var Ho = sp + 4,
    gp = sp / 2;
  Go.prototype.Dd = function(a, b) {
    this.C[gp] = b;
  };
  function hp(a) {
    a = a.C[gp];
    if (65535 != a) return a;
  }
  Go.prototype.hg = function() {
    this.C[gp] = 65535;
  };
  function up(a, b, c) {
    this.B = a;
    this.F = b;
    this.D = c;
    this.G = this.B.createTexture();
    this.L = this.J = 10497;
    this.K = 9986;
    this.I = 9729;
    this.C = 0;
    this.A = 3553;
    this.N = this.H = 0;
    this.O = !1;
    this.M = 34069;
  }
  up.prototype.bind = function() {
    3553 == this.A ? this.D.lc(this.C, this) : this.D.mc(this.C, this);
  };
  function vp(a, b) {
    a.J != b && (a.bind(), a.B.texParameteri(a.A, 10242, b), (a.J = b));
  }
  function wp(a, b) {
    a.L != b && (a.bind(), a.B.texParameteri(a.A, 10243, b), (a.L = b));
  }
  function xp(a, b) {
    a.K != b && (a.bind(), a.B.texParameteri(a.A, 10241, b), (a.K = b));
  }
  function yp(a, b) {
    a.I != b && (a.bind(), a.B.texParameteri(a.A, 10240, b), (a.I = b));
  }
  up.prototype.deleteTexture = function() {
    for (var a = dp(this.F), b = 0; b <= this.D.Jg(); ++b)
      this.C != b && (this.C = b),
        3553 == this.A
          ? this.D.B[this.C] == this && this.D.lc(this.C, null)
          : this.D.C[this.C] == this && this.D.mc(this.C, null);
    this.O = !0;
    this.B.deleteTexture(this.G);
    this.F.Vb(a);
  };
  up.prototype.V = u("H");
  up.prototype.generateMipmap = function() {
    if (34067 == this.A) for (var a = 0; 6 > a; ++a);
    this.bind();
    this.B.generateMipmap(this.A);
  };
  function zp(a, b, c, d, e) {
    Ap(a, b.width, b.height, c, d, e);
    var f = Bp(a);
    a.bind();
    Cp(a, b.width, c, d);
    a.B.texImage2D(f, e, c, c, d, b);
    a.F.Db(3317);
  }
  function Ap(a, b, c, d, e, f) {
    0 != f ||
      (b == a.H && c == a.N && d == a.R && e == a.T) ||
      ((a.H = b), (a.N = c));
  }
  function Bp(a) {
    return 34067 == a.A ? a.M : a.A;
  }
  var Dp = { 6408: 4, 6407: 3, 6410: 2, 6409: 1, 6406: 1 },
    Ep = { 5121: 1, 5126: 4, 32819: 2, 33635: 2, 32820: 2 };
  function Cp(a, b, c, d) {
    b *= (5121 == d || 5126 == d ? Dp[c] : 1) * Ep[d];
    0 != b % 4 && ((c = 1), 0 == b % 2 && (c = 2), a.F.lb(3317, c));
  }
  function Fp(a, b, c, d, e) {
    Ao.call(this, a, b, c, d);
    this.J = e;
  }
  C(Fp, Ao);
  Fp.prototype.H = w(null);
  Fp.prototype.B = w(!0);
  Fp.prototype.K = h();
  var Gp = Pk(),
    Hp = Pk();
  function Ip(a) {
    a[0] = a[1] = a[2] = Infinity;
    a[3] = a[4] = a[5] = -Infinity;
  }
  function Jp(a, b) {
    for (var c = !0, d = 0; 6 > d; ++d) {
      var e = b[d];
      for (var f = e[3], g = e[3], k = 0; 3 > k; ++k) {
        var l = 0 > e[k],
          m = l ? a[k] : a[3 + k];
        f += e[k] * (l ? a[3 + k] : a[k]);
        g += e[k] * m;
      }
      e = 0 < f ? 1 : 0 < g ? 0 : -1;
      if (1 == e) return 0;
      0 == e && (c = !1);
    }
    return c ? 2 : 1;
  }
  function Kp(a, b, c, d, e) {
    this.D = a;
    this.F = b;
    this.C = c;
    this.G = d;
    (a = e) ||
      ((a = Float64Array),
      d.B || ((d.B = new Float64Array(6)), Lp(d, d.B, !1)),
      (a = new a(d.B)));
    this.B = a;
    this.A = [];
  }
  function Mp(a, b, c, d, e) {
    if (!(3 <= a.C || a.C >= d)) {
      a.A = [];
      Np(a, b, c, d, e);
      for (var f = 0; f < a.A.length; f++) Mp(a.A[f], b, c, d, e);
      for (b = 0; b < a.A.length; b++) {
        c = a.A[b].B;
        for (d = 0; 3 > d; d++) a.B[d] = Math.min(a.B[d], c[d]);
        for (d = 3; 6 > d; d++) a.B[d] = Math.max(a.B[d], c[d]);
      }
    }
  }
  function Op(a, b, c, d, e, f, g, k) {
    if (!Jp(a.B, b)) return [];
    var l = k(a.D, a.F);
    l = Math.min(l, f);
    var m = a.G;
    m.K = Math.min(l, m.L);
    if (a.C >= l)
      return (
        c &&
          ((c = a.G),
          c.C || ((c.C = new Float64Array(6)), Lp(c, c.C, !0)),
          (c = !Jp(c.C, b))),
        c ? [] : [a.G]
      );
    0 == a.A.length && Np(a, d, e, f, g);
    l = [];
    for (m = 0; m < a.A.length; m++)
      l = l.concat(Op(a.A[m], b, c, d, e, f, g, k));
    return l;
  }
  function Np(a, b, c, d, e) {
    var f = a.C + 1;
    if (!(f > d)) {
      var g = 1 << (d - f);
      d = a.D;
      var k = a.D + g,
        l = a.F;
      g = a.F + g;
      Pp(a, d, l, f, b, c, e);
      Pp(a, k, l, f, b, c, e);
      Pp(a, d, g, f, b, c, e);
      Pp(a, k, g, f, b, c, e);
    }
  }
  function Pp(a, b, c, d, e, f, g) {
    b >= e ||
      c >= f ||
      !(e = g(b, c, d)) ||
      ((b = new Kp(b, c, d, e)), a.A.push(b));
  }
  function Qp() {}
  var Rp = [],
    Sp = 1e3 / 30;
  function Tp(a, b, c) {
    this.H = b;
    this.A = !0;
    b.na("img-patch-prepare");
    this.B = a;
    this.G = c || Ha;
  }
  Tp.prototype.start = function() {
    return this.A ? (0 == this.B.length ? (Up(this), Qp) : this.D()) : Qp;
  };
  function Up(a) {
    a.G();
    a.H.done("img-patch-prepare");
    a.A = !1;
  }
  Tp.prototype.D = function() {
    var a = this.B.shift();
    this.C(a);
    return 0 == this.B.length ? (Up(this), Qp) : this.D;
  };
  Tp.prototype.cancel = function() {
    this.A && ((this.F = null), Up(this));
  };
  Tp.prototype.C = function(a) {
    a.ff();
  };
  function Vp(a, b, c) {
    Tp.call(this, a, b, c);
  }
  C(Vp, Tp);
  Vp.prototype.C = function(a) {
    a.bf();
  };
  function Wp(a, b, c, d, e) {
    nj.call(this, a, b);
    this.x = c;
    this.y = d;
    this.zoom = e;
  }
  C(Wp, nj);
  function Xp(a, b, c, d) {
    this.A = a;
    this.G = b;
    this.W = new Km();
    this.C = c;
    this.M = null;
    this.la = d;
    this.ia = this.R = this.ea = this.N = 1;
    this.ja = 0;
    this.K = this.F = null;
    this.L = [];
    this.B = [];
    this.J = ll();
    this.O = Rk();
    this.Y = Rk();
    this.ma = {};
    this.D = {};
    this.I = [];
    this.H = 0;
    this.aa = !1;
    Yp(this);
    this.T = new Kp(0, 0, 0, Zp(this, 0, 0, 0), $p);
  }
  function aq(a) {
    bq(a);
    for (var b = [], c = 0; c < a.B.length; ++c) {
      var d = a.B[c];
      d.fd() && b.push(d);
    }
    return b;
  }
  function cq(a, b) {
    bq(a);
    for (var c = 0; c < a.B.length; ++c) {
      var d = a.B[c],
        e = b,
        f = d.K,
        g = Math.max(0, d.P.oa().Ma() - f),
        k = d.F >> g;
      g = d.G >> g;
      d.P.Ib(k, g, f, e);
      e = k + "|" + g + "|" + f;
      f = a;
      f.A.Zc(e) ||
        (f.D[e] || (f.D[e] = []), -1 == f.D[e].indexOf(d) && f.D[e].push(d));
    }
  }
  function dq(a, b, c, d) {
    a.F && (a.F.cancel(b), (a.F = null));
    bq(a);
    for (var e = [], f = 0; f < a.B.length; ++f) {
      var g = a.B[f];
      g.Wg() && e.push(g);
    }
    e.length ? ((a.F = new Tp(e, c, d)), eq(b, a.F, fq(2, !1))) : d && d();
  }
  function gq(a, b, c, d) {
    a.K && (a.K.cancel(b), (a.K = null));
    bq(a);
    b = [];
    for (var e = 0; e < a.B.length; ++e) {
      var f = a.B[e];
      f.fd() || b.push(f);
    }
    if (b.length)
      for (a = new Vp(b, c, d), c = a.start(); c != Qp; ) c = c.apply(a);
    else d && d();
  }
  function hq(a) {
    bq(a);
    return a.J;
  }
  function iq(a) {
    var b = a.A.oa();
    a.ea = b.ac();
    a.ia = b.Mb();
    a.N = Math.ceil(a.ea);
    a.R = Math.ceil(a.ia);
    Mp(a.T, a.N, a.R, b.Ma(), function(b, d, e) {
      return Zp(a, b, d, e);
    });
    a.ja = a.C.I;
    a.aa = !0;
  }
  function bq(a) {
    if (!a.aa) {
      if (!a.A.oa() || !a.A.oa().he()) return;
      iq(a);
    }
    var b = !Hd(Lm(a.W), Lm(a.G)) || !a.M,
      c;
    if (!(c = !a.M)) {
      c = a.M;
      var d = a.C;
      c = !(
        c.F === d.F &&
        c.G === d.G &&
        c.H === d.H &&
        c.K === d.K &&
        c.A === d.A &&
        c.B === d.B &&
        c.C === d.C &&
        c.N === d.N &&
        c.R === d.R &&
        c.T === d.T &&
        c.I === d.I &&
        c.L === d.L &&
        c.J === d.J &&
        c.V() === d.V() &&
        c.D === d.D
      );
    }
    if (c || b) {
      c = a.C;
      d = new Hn();
      Dn(d, Jn(c));
      d.Y = c.Y;
      a.M = d;
      R(a.W, a.G);
      if (b) {
        b = a.A.oa();
        var e;
        L(a.G, 2) && (e = Lm(a.G));
        b.uc(a.O, e);
        Zk(a.O, a.Y);
      }
      e = a.J;
      b = a.C;
      c = a.O;
      d = b.M;
      var f = 1 / b.K,
        g = b.M;
      g[0] = f;
      g[1] = 0;
      g[2] = 0;
      g[3] = 0;
      g[4] = 0;
      g[5] = f;
      g[6] = 0;
      g[7] = 0;
      g[8] = 0;
      g[9] = 0;
      g[10] = f;
      g[11] = 0;
      g[12] = 0;
      g[13] = 0;
      g[14] = 0;
      g[15] = 1;
      el(g, -b.F, -b.G, -b.H);
      Yk(g, c, d);
      ml(e, b.M);
      nl(Kn(a.C), e, a.J);
      e = a.J;
      b = a.A.oa().ti(a.C);
      1 != b &&
        ((c = pl(0.5, 0.5)),
        nl(e, c, e),
        (c = ql),
        (c[0] = b),
        (c[1] = 0),
        (c[2] = 0),
        (c[3] = 0),
        (c[4] = 0),
        (c[5] = b),
        (c[6] = 0),
        (c[7] = 0),
        (c[8] = 0),
        (c[9] = 0),
        (c[10] = 1),
        (c[11] = 0),
        (c[12] = 0),
        (c[13] = 0),
        (c[14] = 0),
        (c[15] = 1),
        nl(e, c, e),
        (c = pl(-0.5, -0.5)),
        nl(e, c, e));
      a.J = e;
      jq(a);
    }
  }
  function jq(a) {
    kq(a);
    var b = a.A instanceof Fo && lq(a),
      c = a.A.oa();
    a.B = Op(
      a.T,
      mq,
      b,
      a.N,
      a.R,
      c.Ma(),
      function(b, c, f) {
        return Zp(a, b, c, f);
      },
      function(b, e) {
        return c.ug(b, e, a.C, a.ja, a.O, lq(a));
      }
    );
  }
  function Zp(a, b, c, d) {
    var e = b + c * a.N;
    d >= a.L.length && (a.L[d] = []);
    a.L[d][e] || (a.L[d][e] = a.la.create(a.A, a.ma, b, c, d));
    return a.L[d][e];
  }
  function Yp(a) {
    qm(a.A, "TileReady", function(b, c) {
      b = c.x + "|" + c.y + "|" + c.zoom;
      if (a.D[b]) {
        c = a.D[b].length;
        for (var d = 0; d < c; d++) {
          var e = a.D[b][d];
          1 == e.N && ((e.N = 0), a.I.push(e));
        }
        delete a.D[b];
        if (!a.H) {
          b = 0;
          for (var f in a.D) b++;
          5 >= b && (a.H = Ua());
        }
      }
    });
  }
  function lq(a) {
    var b = L(a.G, 2) ? Jg(Lm(a.G)) : Jg(a.A.fa());
    un(Pg(b), Qg(b), Rg(b), nq);
    sn(a.C.A, a.C.B, a.C.C, oq);
    pn(oq[0], oq[1], oq[2], oq);
    return 0.01 > Math.sqrt(Lk(oq, nq));
  }
  function kq(a) {
    var b = mq;
    Tk(pq, a.J);
    a = pq;
    Wk(a, 3, Gp);
    Gp[0] = -Gp[0];
    Gp[1] = -Gp[1];
    Gp[2] = -Gp[2];
    Gp[3] = -Gp[3];
    for (var c = 0; 3 > c; c++) {
      var d = 2 * c;
      Wk(a, c, Hp);
      var e = b[d],
        f = e,
        g = Gp,
        k = Hp;
      f[0] = g[0] - k[0];
      f[1] = g[1] - k[1];
      f[2] = g[2] - k[2];
      f[3] = g[3] - k[3];
      Qk(e, 1 / Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), e);
      e = d = b[d + 1];
      f = Gp;
      g = Hp;
      e[0] = f[0] + g[0];
      e[1] = f[1] + g[1];
      e[2] = f[2] + g[2];
      e[3] = f[3] + g[3];
      Qk(d, 1 / Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]), d);
    }
  }
  var $p = new Float64Array(6);
  $p.set([-Infinity, -Infinity, -Infinity, Infinity, Infinity, Infinity]);
  var mq = [Pk(), Pk(), Pk(), Pk(), Pk(), Pk()],
    pq = Rk(),
    ql = ll(),
    nq = Ck(),
    oq = Ck();
  function qq(a) {
    this.A = a;
  }
  qq.prototype.create = function(a, b, c) {
    return new Xp(a, b, c, this.A);
  };
  function rq(a, b) {
    yo.call(this, a);
    this.A = b;
    this.C = b.canvas;
    this.F = null;
    this.B = new ak();
  }
  C(rq, yo);
  rq.prototype.Xd = function() {
    for (var a = 0; a < this.D.length; ++a) {
      var b = zo(this, this.D[a]);
      this.Va(b);
    }
  };
  rq.prototype.Me = function(a) {
    return new xo(a);
  };
  rq.prototype.Va = function(a) {
    if (a.F() && this.F) {
      for (
        var b = a.D.A,
          c = hq(this.F),
          d = Math.max(1, this.C.width - this.B.left - this.B.right),
          e = Math.max(1, this.C.height - this.B.bottom - this.B.top),
          f = !1,
          g = 0;
        4 > g;
        ++g
      ) {
        kl(sq, b[3 * g], b[3 * g + 1], b[3 * g + 2], 1);
        var k = tq[g];
        ol(c, sq, k);
        var l =
          k[2] < -k[3] ||
          k[1] < -k[3] ||
          k[0] < -k[3] ||
          k[2] > +k[3] ||
          k[1] > +k[3] ||
          k[0] > +k[3];
        f = f || l;
        k[0] = (k[0] / k[3] + 1) * d / 2;
        k[1] = (-k[1] / k[3] + 1) * e / 2;
        k[0] += this.B.left;
        k[1] += this.B.top;
      }
      f ||
        ((b = a.A),
        (c = (b[2] + b[3]) / 2),
        (uq[0] = (b[0] + b[1]) / 2),
        (uq[1] = c),
        (c = b[5]),
        (vq[0] = b[4]),
        (vq[1] = c),
        (c = b[7]),
        (wq[0] = b[6]),
        (wq[1] = c),
        vl(tq[0], tq[1], sq),
        (sq[0] *= 0.5),
        (sq[1] *= 0.5),
        Vm(sq, uq, tq[2], vq, tq[3], wq, xq) &&
          ((b = this.A),
          b.save(),
          b.setTransform(xq[0], xq[1], xq[3], xq[4], xq[6], xq[7]),
          b.drawImage(a.B, 0, 0),
          b.restore()));
    }
  };
  rq.prototype.Rb = function(a, b, c, d) {
    this.B.top = a || 0;
    this.B.right = b || 0;
    this.B.bottom = c || 0;
    this.B.left = d || 0;
  };
  var xq = Mk(),
    uq = tl(),
    vq = tl(),
    wq = tl(),
    sq = jl(),
    tq = [jl(), jl(), jl(), jl()];
  function yq(a, b, c, d, e) {
    Fp.call(this, a, b, c, d, e);
    this.A = null;
  }
  C(yq, Fp);
  yq.prototype.B = function() {
    return !!this.A;
  };
  yq.prototype.H = u("A");
  yq.prototype.K = function() {
    if (!this.B()) {
      var a = this.D;
      if (Nc) var b = a;
      else {
        var c = a.width,
          d = a.height;
        b = Yi("canvas");
        b.width = c + 2;
        b.height = d + 2;
        try {
          var e = b.getContext("2d");
          e.drawImage(a, 0, 0, c, d, 1, 1, c, d);
          e.drawImage(a, 0, 0, c, 1, 1, 0, c, 1);
          e.drawImage(a, 0, d - 1, c, 1, 1, d + 1, c, 1);
          e.drawImage(b, 1, 0, 1, d + 2, 0, 0, 1, d + 1 + 2);
          e.drawImage(b, c, 0, 1, d + 2, c + 1, 0, 1, d + 1 + 2);
        } catch (f) {
          (a = Error()),
            (a.message = "drawScreenQuad_: Error accessing canvas."),
            km(a, 3);
        }
      }
      this.A = b;
    }
  };
  function zq(a, b, c, d, e, f) {
    this.P = a;
    this.Y = b;
    this.F = c;
    this.G = d;
    this.L = e;
    this.K = 0;
    this.aa = f || !1;
    this.N = 1;
    this.C = this.B = this.R = this.D = this.I = this.T = null;
    this.W = !0;
  }
  y = zq.prototype;
  y.Xc = function() {
    var a = Aq(this, !0);
    a && a.C != this.K && (this.T = a);
    return a;
  };
  y.Wg = function() {
    if (!this.Gb()) return !0;
    var a = Aq(this);
    return !!a && !a.B();
  };
  y.ff = function() {
    this.je();
    var a = Aq(this);
    a && a.K();
  };
  y.bf = function() {
    this.je();
    var a = Aq(this, !0);
    a || (a = Aq(this));
    a && a.K();
  };
  y.fd = function() {
    if (this.Gb()) {
      var a = this.Xc();
      return !!a && a.B();
    }
    return !1;
  };
  y.bh = function() {
    var a = Bq(this, this.K);
    return !!a && a.B() && this.Gb();
  };
  y.Gb = w(!0);
  y.je = h();
  function Aq(a, b) {
    var c;
    for (c = a.K; 0 <= c; --c) {
      var d = Bq(a, c);
      if (d && (!b || d.B())) return d;
    }
    d = a.P.oa().Ma();
    d = Math.min(d, a.L);
    for (c = a.K + 1; c <= d; ++c) {
      var e = Bq(a, c);
      if (e && (!b || e.B())) return e;
    }
    return null;
  }
  function Bq(a, b) {
    var c = Math.max(0, a.P.oa().Ma() - b);
    (b = a.P.Bb(a.F >> c, a.G >> c, b))
      ? ((c = a.Y[b]), c || ((c = a.Le(b, Cq(a, b))), (a.Y[b] = c)), (a = c))
      : (a = null);
    return a;
  }
  function Cq(a, b) {
    var c = a.P.oa();
    a = c.Ue(b.C);
    var d = b.F * a,
      e = b.G * a;
    b = c.Ta(d);
    var f = c.Ta(d + 1),
      g = c.Ua(e),
      k = f - b;
    f = c.Ua(e + 1) - g;
    var l = c.ac();
    d == Math.floor(l) && (k /= l - Math.floor(l));
    c = c.Mb();
    e == Math.floor(c) && (f /= c - Math.floor(c));
    c = 1 / k / a;
    a = 1 / f / a;
    return kl(jl(), c, a, -(b * c), -(g * a));
  }
  y.Le = function(a, b) {
    return new Fp(a.F, a.G, a.C, a.D, b);
  };
  function Dq(a) {
    Eq(a);
    return a.I;
  }
  function Fq(a) {
    Eq(a);
    return a.D;
  }
  function Lp(a, b, c) {
    Ip(b);
    var d = a.P.oa(),
      e = 1 << (d.Ma() - a.L),
      f = d.Ta(a.F),
      g = d.Ta(a.F + e),
      k = d.Ua(a.G);
    a = d.Ua(a.G + e);
    d.zb(f, k, Gq, 0);
    Hq(b, Gq, 0, c);
    d.zb(g, k, Gq, 0);
    Hq(b, Gq, 0, c);
    d.zb(f, a, Gq, 0);
    Hq(b, Gq, 0, c);
    d.zb(g, a, Gq, 0);
    Hq(b, Gq, 0, c);
    d.zb((f + g) / 2, (k + a) / 2, Gq, 0);
    Hq(b, Gq, 0, c);
  }
  function Iq(a) {
    Eq(a);
    return a.R;
  }
  function Eq(a) {
    if (!(a.I && a.D && a.R && a.B))
      if (a.W) {
        var b = a.P.oa();
        a.B || (a.B = new Float64Array(6));
        a.C || (a.C = new Float64Array(6));
        Ip(a.B);
        Ip(a.C);
        var c = 1 << (b.Ma() - a.L),
          d = 7 * c + 1,
          e = 7 * c + 1;
        a.I = new Float32Array(2 * d * e);
        a.D = new Float32Array(3 * d * e);
        var f = 0,
          g = b.Ta(a.F),
          k = b.Ta(a.F + c),
          l = b.Ua(a.G);
        c = b.Ua(a.G + c);
        for (var m = 0; m < d; ++m)
          for (var n = m / (d - 1), p = 0; p < e; ++p) {
            var q = vb(g, k, p / (e - 1)),
              t = vb(l, c, n);
            a.I[2 * f] = q;
            a.I[2 * f + 1] = t;
            b.zb(q, t, a.D, 3 * f);
            Hq(a.B, a.D, 3 * f);
            Hq(a.C, a.D, 3 * f, !0);
            ++f;
          }
        b = [];
        for (g = f = 0; g < d - 1; g++)
          for (
            0 < g && ((b[f++] = (g + 1) * e - 1), (b[f++] = g * e)), k = 0;
            k < e;
            k++
          )
            (b[f++] = g * e + k), (b[f++] = (g + 1) * e + k);
        a.R = new Uint16Array(b);
      } else Jq(a);
  }
  function Jq(a) {
    var b = a.P.oa(),
      c = b.Kg(a.F, a.G, a.L, a.aa),
      d = Math.round(c[0]) + 1,
      e = Math.round(c[1]) + 1,
      f = Math.round(c[2]) + 1;
    c = [];
    for (var g = 0, k = 0; k < d; ++k) {
      c[k] = [];
      for (var l = Math.round(vb(e, f, k / (d - 1))), m = 0; m < l; ++m)
        c[k][m] = g++;
    }
    a.B || (a.B = new Float64Array(6));
    a.C || (a.C = new Float64Array(6));
    Ip(a.B);
    Ip(a.C);
    a.I = new Float32Array(2 * g);
    a.D = new Float32Array(3 * g);
    g = 0;
    l = 1 << (b.Ma() - a.L);
    e = b.Ta(a.F);
    f = b.Ta(a.F + l);
    k = b.Ua(a.G);
    l = b.Ua(a.G + l);
    for (m = 0; m < d; ++m)
      for (var n = m / (d - 1), p = c[m].length, q = 0; q < p; ++q) {
        var t = vb(e, f, q / (p - 1)),
          r = vb(k, l, n);
        a.I[2 * g] = t;
        a.I[2 * g + 1] = r;
        b.zb(t, r, a.D, 3 * g);
        Hq(a.B, a.D, 3 * g);
        Hq(a.C, a.D, 3 * g, !0);
        ++g;
      }
    b = [];
    for (e = g = 0; e < d - 1; e++)
      for (
        k = c[e].length,
          l = c[e + 1].length,
          0 < e && ((b[g++] = c[e][k - 1]), (b[g++] = c[e][0])),
          f = Math.max(k, l),
          k = (k - 1) / (f - 1),
          l = (l - 1) / (f - 1),
          m = 0;
        m < f;
        ++m
      )
        (b[g++] = c[e][Math.round(m * k)]),
          (b[g++] = c[e + 1][Math.round(m * l)]);
    a.R = new Uint16Array(b);
  }
  var Gq = new Float32Array(3);
  function Hq(a, b, c, d) {
    var e = b[c],
      f = b[c + 1];
    b = b[c + 2];
    d &&
      ((d = 10 / Math.sqrt(e * e + f * f + b * b)),
      (e *= d),
      (f *= d),
      (b *= d));
    e < a[0] && (a[0] = e);
    f < a[1] && (a[1] = f);
    b < a[2] && (a[2] = b);
    e > a[3] && (a[3] = e);
    f > a[4] && (a[4] = f);
    b > a[5] && (a[5] = b);
  }
  function Kq(a, b, c, d, e) {
    zq.call(this, a, b, c, d, e, !0);
    this.J = !1;
    this.A = null;
    this.M = c + ":" + d;
    this.H = null;
  }
  C(Kq, zq);
  y = Kq.prototype;
  y.Gb = u("J");
  y.fd = function() {
    return this.Gb() && !!this.A && this.A.B();
  };
  y.Xc = u("A");
  y.bh = function() {
    var a = Bq(this, this.K);
    return this.Gb() && !!a && a.B() && a === this.A;
  };
  y.Wg = function() {
    if (!this.Gb()) return !0;
    var a = Aq(this);
    return !!a && !(a.B() && a === this.A);
  };
  y.ff = function() {
    zq.prototype.ff.call(this);
    Lq(this);
  };
  y.bf = function() {
    zq.prototype.bf.call(this);
    Lq(this);
  };
  y.je = function() {
    this.Gb() || (this.J = !0);
  };
  y.toString = u("M");
  y.Le = function(a, b) {
    return new yq(a.F, a.G, a.C, a.D, b);
  };
  function Lq(a) {
    var b = Aq(a, !0);
    if (b && a.A !== b) {
      a.A = b;
      var c = b.J,
        d = b.H();
      b = d.width - 2;
      d = d.height - 2;
      Mq[0] = c[0] * b;
      Mq[1] = c[1] * d;
      Mq[2] = c[2] * b + 1;
      Mq[3] = c[3] * d + 1;
      0 != a.W && ((a.W = !1), Jq(a));
      c = Dq(a);
      b = c.length / 2;
      a.H || (a.H = new Float32Array(2 * b));
      a = a.H;
      for (var e = (d = 0); e < b; ++e, d += 2) {
        var f = c[d + 1];
        a[d] = c[d] * Mq[0] + Mq[2];
        a[d + 1] = f * Mq[1] + Mq[3];
      }
    }
  }
  var Mq = jl();
  function Nq() {}
  Nq.prototype.create = function(a, b, c, d, e) {
    return new Kq(a, b, c, d, e);
  };
  function Oq(a, b) {
    this.A = a;
    this.C = b;
    this.K = this.C.getContext("2d");
    this.H = [];
    this.G = this.F = 0;
    this.D = new rq(new Hn(), this.A);
    this.I = "black";
    this.B = new ak();
  }
  y = Oq.prototype;
  y.Of = function() {
    var a = this.A.canvas;
    this.A.clearRect(0, 0, a.width, a.height);
    this.A.fillStyle = this.I;
    this.A.fillRect(0, 0, a.width, a.height);
  };
  y.Mf = h();
  y.zg = function(a, b, c) {
    var d = N(b, 0);
    if (0 != d) {
      if (1 == d) Pq(this, c, this.A);
      else {
        if (
          this.A.canvas.width != this.C.width ||
          this.A.canvas.height != this.C.height
        )
          (this.C.width = this.A.canvas.width),
            (this.C.height = this.A.canvas.height);
        this.K.clearRect(0, 0, this.C.width, this.C.height);
        Pq(this, c, this.K);
        this.A.globalAlpha = d;
        this.A.drawImage(this.C, 0, 0);
        this.A.globalAlpha = 1;
      }
      b = N(b, 4);
      a = a.Nb();
      0 < b && 0 < a.length && (this.D.kc(a), (this.D.F = c), this.D.La());
    }
  };
  function Pq(a, b, c) {
    var d = aq(b);
    b = hq(b);
    for (var e = d.length, f = 0; f < e; ++f) {
      var g = a,
        k = d[f],
        l = c;
      if (k.fd()) {
        var m = l.canvas.width - g.B.left - g.B.right,
          n = l.canvas.height - g.B.top - g.B.bottom;
        Qq[0] = m / 2;
        Qq[1] = -n / 2;
        Qq[2] = m / 2 + g.B.left;
        Qq[3] = n / 2 + g.B.top;
        m = k.Xc().H();
        n = Iq(k);
        var p = k.H,
          q = Fq(k),
          t = q.length / 3;
        k = Rq;
        if (!k || k.length < 4 * t) k = Rq = new Float32Array(4 * t);
        for (var r = 0; r < t; ++r) {
          var v = Sq,
            x = Tq;
          kl(v, q[3 * r], q[3 * r + 1], q[3 * r + 2], 1);
          ol(b, v, x);
          k[4 * r] = x[0];
          k[4 * r + 1] = x[1];
          k[4 * r + 2] = x[2];
          k[4 * r + 3] = x[3];
        }
        for (q = 0; q < n.length - 2; ++q) {
          g.F = 0;
          var z = n[q];
          x = n[q + 1];
          r = n[q + 2];
          if (z != x && x != r && r != z) {
            if (q < n.length - 3 && ((v = n[q + 3]), x != v && v != r)) {
              t = g;
              var A = z,
                H = x,
                B = v,
                J = r;
              x = k;
              var D = p;
              r = m;
              v = l;
              z = Qq;
              Uq(x, A, Sq);
              Uq(x, H, Tq);
              Uq(x, B, Vq);
              Uq(x, J, Wq);
              var T = Xq(Sq),
                S = Xq(Tq),
                W = Xq(Vq),
                da = Xq(Wq);
              if (!(T & S & W & da))
                if ((T | S | W | da) & 1)
                  Yq(t, A, H, B, x, D, r, z, v), Yq(t, A, B, J, x, D, r, z, v);
                else {
                  Zq(Sq, z);
                  Zq(Tq, z);
                  Zq(Vq, z);
                  Zq(Wq, z);
                  x = $q(t);
                  z = $q(t);
                  T = $q(t);
                  S = $q(t);
                  ar(D, A, x);
                  ar(D, H, z);
                  ar(D, B, T);
                  ar(D, J, S);
                  A = Sq;
                  H = Tq;
                  B = Vq;
                  J = Wq;
                  var ia = $q(t),
                    fa = $q(t);
                  W = $q(t);
                  D = $q(t);
                  wl(H, A, ia);
                  wl(B, H, fa);
                  wl(J, B, W);
                  wl(A, J, D);
                  var ha = (da = W);
                  ha[0] = -1 * da[0];
                  ha[1] = -1 * da[1];
                  vl(ia, W, ia);
                  da = W = D;
                  da[0] = -1 * W[0];
                  da[1] = -1 * W[1];
                  vl(fa, D, fa);
                  W = $q(t);
                  da = $q(t);
                  ha = $q(t);
                  D = $q(t);
                  var qa = W,
                    Hb = da,
                    Yb = ha,
                    tb = D,
                    Eb = 1 / (ia[0] * fa[1] - ia[1] * fa[0]),
                    Id = Eb * fa[1],
                    Sc = Eb * -fa[0],
                    vc = Eb * -ia[1],
                    wc = Eb * ia[0],
                    Jd = Id * A[0] + Sc * A[1];
                  Eb = vc * A[0] + wc * A[1];
                  var Sb = Id * H[0] + Sc * H[1],
                    ph = vc * H[0] + wc * H[1],
                    cf = Id * B[0] + Sc * B[1],
                    Pm = vc * B[0] + wc * B[1];
                  Id = Id * J[0] + Sc * J[1];
                  wc = vc * J[0] + wc * J[1];
                  vc = br(Jd, Sb, cf, Id);
                  Sc = br(Eb, ph, Pm, wc);
                  Jd = cr(Jd, Sb, cf, Id);
                  Eb = cr(Eb, ph, Pm, wc);
                  qa[0] = ia[0] * vc + fa[0] * Sc;
                  qa[1] = ia[1] * vc + fa[1] * Sc;
                  Hb[0] = ia[0] * Jd + fa[0] * Sc;
                  Hb[1] = ia[1] * Jd + fa[1] * Sc;
                  Yb[0] = ia[0] * Jd + fa[0] * Eb;
                  Yb[1] = ia[1] * Jd + fa[1] * Eb;
                  tb[0] = ia[0] * vc + fa[0] * Eb;
                  tb[1] = ia[1] * vc + fa[1] * Eb;
                  ia = cr(xl(A, W), xl(H, da), xl(B, ha), xl(J, D));
                  if (Vm(W, x, da, z, ha, T, dr))
                    if (
                      ((W = $q(t)),
                      (W[0] = dr[0] * S[0] + dr[3] * S[1] + dr[6]),
                      (W[1] = dr[1] * S[0] + dr[4] * S[1] + dr[7]),
                      (D = xl(D, W)),
                      4 < ia || 4 < D)
                    )
                      er(t, A, x, H, z, J, S, r, v),
                        er(t, J, S, H, z, B, T, r, v);
                    else {
                      x = $q(t);
                      z = $q(t);
                      T = $q(t);
                      S = $q(t);
                      ul(x, A);
                      ul(z, H);
                      ul(T, B);
                      ul(S, J);
                      A = z;
                      H = T;
                      B = S;
                      J = (x[0] + A[0] + H[0] + B[0]) / 4;
                      D = (x[1] + A[1] + H[1] + B[1]) / 4;
                      fr(x, J, D);
                      fr(A, J, D);
                      fr(H, J, D);
                      fr(B, J, D);
                      try {
                        v.save(),
                          v.beginPath(),
                          v.moveTo(x[0], x[1]),
                          v.lineTo(z[0], z[1]),
                          v.lineTo(T[0], T[1]),
                          v.lineTo(S[0], S[1]),
                          v.closePath(),
                          v.clip(),
                          v.setTransform(
                            dr[0],
                            dr[1],
                            dr[3],
                            dr[4],
                            dr[6],
                            dr[7]
                          ),
                          v.drawImage(r, 0, 0),
                          v.restore();
                      } catch (yz) {
                        (r = Error()),
                          (r.message =
                            "drawScreenQuad_: Error accessing canvas."),
                          km(r, 3);
                      }
                      ++t.G;
                    }
                }
              ++q;
              continue;
            }
            Yq(g, z, x, r, k, p, m, Qq, l);
          }
        }
      }
    }
    a.G = 0;
  }
  function $q(a) {
    a.F == a.H.length && (a.H[a.F] = tl());
    return a.H[a.F++];
  }
  function Yq(a, b, c, d, e, f, g, k, l) {
    var m = Sq,
      n = Tq,
      p = Vq;
    Uq(e, b, m);
    Uq(e, c, n);
    Uq(e, d, p);
    e = Xq(m);
    var q = Xq(n),
      t = Xq(p);
    if (!(e & q & t)) {
      var r = gr,
        v = hr,
        x = ir;
      ar(f, b, r);
      ar(f, c, v);
      ar(f, d, x);
      f = (e & 1) + (q & 1) + (t & 1);
      if (1 == f) {
        for (; !(e & 1); )
          (f = e),
            (e = q),
            (q = t),
            (t = f),
            (f = m),
            (m = n),
            (n = p),
            (p = f),
            (f = r),
            (r = v),
            (v = x),
            (x = f),
            (f = b),
            (b = c),
            (c = d),
            (d = f);
        jr(m, p, Wq, r, x, kr);
        jr(m, n, m, r, v, r);
        Zq(m, k);
        Zq(n, k);
        Zq(p, k);
        Zq(Wq, k);
        er(a, m, r, n, v, Wq, kr, g, l);
        er(a, n, v, p, x, Wq, kr, g, l);
      } else {
        if (2 == f) {
          for (; e & 1; )
            (f = e),
              (e = q),
              (q = t),
              (t = f),
              (f = m),
              (m = n),
              (n = p),
              (p = f),
              (f = r),
              (r = v),
              (v = x),
              (x = f),
              (f = b),
              (b = c),
              (c = d),
              (d = f);
          jr(m, n, n, r, v, v);
          jr(m, p, p, r, x, x);
        }
        Zq(m, k);
        Zq(n, k);
        Zq(p, k);
        er(a, m, r, n, v, p, x, g, l);
      }
    }
  }
  function er(a, b, c, d, e, f, g, k, l) {
    if (Vm(b, c, d, e, f, g, lr)) {
      c = $q(a);
      e = $q(a);
      g = $q(a);
      ul(c, b);
      ul(e, d);
      ul(g, f);
      b = (c[0] + e[0] + g[0]) / 3;
      d = (c[1] + e[1] + g[1]) / 3;
      fr(c, b, d);
      fr(e, b, d);
      fr(g, b, d);
      try {
        l.save(),
          l.beginPath(),
          l.moveTo(c[0], c[1]),
          l.lineTo(e[0], e[1]),
          l.lineTo(g[0], g[1]),
          l.closePath(),
          l.clip(),
          l.setTransform(lr[0], lr[1], lr[3], lr[4], lr[6], lr[7]),
          l.drawImage(k, 0, 0),
          l.restore();
      } catch (m) {
        (k = Error()),
          (k.message = "drawScreenQuad_: Error accessing canvas."),
          km(k, 9);
      }
      ++a.G;
    }
  }
  y.lh = function(a) {
    this.I = 1 == a ? "white" : "black";
  };
  y.mh = function(a, b, c, d) {
    this.B.top = a;
    this.B.right = b;
    this.B.bottom = c;
    this.B.left = d;
    this.D.Rb(a, b, c, d);
  };
  var Qq = jl(),
    gr = tl(),
    hr = tl(),
    ir = tl(),
    kr = tl(),
    Sq = jl(),
    Tq = jl(),
    Vq = jl(),
    Wq = jl(),
    Rq = null,
    dr = Mk(),
    lr = Mk();
  function Uq(a, b, c) {
    kl(c, a[4 * b], a[4 * b + 1], a[4 * b + 2], a[4 * b + 3]);
  }
  function ar(a, b, c) {
    var d = a[2 * b + 1];
    c[0] = a[2 * b];
    c[1] = d;
  }
  function Xq(a) {
    return (
      ((a[2] < -a[3]) << 0) |
      ((a[1] < -a[3]) << 1) |
      ((a[0] < -a[3]) << 2) |
      ((a[2] > +a[3]) << 3) |
      ((a[1] > +a[3]) << 4) |
      ((a[0] > +a[3]) << 5)
    );
  }
  function Zq(a, b) {
    a[0] = a[0] / a[3] * b[0] + b[2];
    a[1] = a[1] / a[3] * b[1] + b[3];
  }
  function cr(a, b, c, d) {
    a = b > a ? b : a;
    a = c > a ? c : a;
    return d > a ? d : a;
  }
  function br(a, b, c, d) {
    a = b < a ? b : a;
    a = c < a ? c : a;
    return d < a ? d : a;
  }
  function jr(a, b, c, d, e, f) {
    var g = -a[2] - a[3];
    g /= g - (-b[2] - b[3]);
    var k = a[0],
      l = a[1],
      m = a[2];
    a = a[3];
    c[0] = (b[0] - k) * g + k;
    c[1] = (b[1] - l) * g + l;
    c[2] = (b[2] - m) * g + m;
    c[3] = (b[3] - a) * g + a;
    b = d[0];
    d = d[1];
    f[0] = (e[0] - b) * g + b;
    f[1] = (e[1] - d) * g + d;
  }
  function fr(a, b, c) {
    b = a[0] - b;
    c = a[1] - c;
    var d = Math.sqrt(b * b + c * c);
    1e-6 < d && ((a[0] += 3 * b / d), (a[1] += 3 * c / d));
  }
  var mr = Ck(),
    nr = new Hn();
  function or(a) {
    return a ? 2 === a.nb() || 3 === a.nb() : !1;
  }
  function pr(a) {
    return a ? 4 === a.nb() : !1;
  }
  function qr(a, b) {
    if (a.length !== b.length) return !1;
    for (var c = 0; c < a.length; ++c) if (a[c] !== b[c]) return !1;
    return !0;
  }
  function rr(a, b) {
    var c = sr;
    a = a || [];
    b = b || [];
    for (var d = a.length > b.length ? a.length : b.length, e = 0; e < d; ++e)
      if ((a[e] || c) !== (b[e] || c)) return !1;
    return !0;
  }
  function tr(a, b) {
    Cn(a, nr);
    mr[0] = b[0] - nr.A;
    mr[1] = b[1] - nr.B;
    mr[2] = b[2] - nr.C;
    b = yb(ub(Math.atan2(mr[0], mr[1]), 2 * Math.PI));
    var c = yb(
      Math.atan2(mr[2], Math.sqrt(mr[0] * mr[0] + mr[1] * mr[1])) + Math.PI / 2
    );
    Mg(a).data[0] = b;
    Mg(a).data[1] = c;
  }
  function ur(a, b, c) {
    nj.call(this, "RenderComplete", a);
    this.endTime = c;
  }
  I(ur, nj);
  function vr(a) {
    nj.call(this, "RenderStart", a);
  }
  I(vr, nj);
  function wr(a, b, c) {
    var d = c || E.document;
    if (d) {
      var e = null;
      c = null;
      for (var f = 0; f < xr.length; f += 2)
        if (F(d[xr[f]])) {
          e = xr[f];
          c = xr[f + 1];
          break;
        }
      e &&
        c &&
        ((f = function() {
          a(!d[e]);
        }),
        b ? b.listen(d, c, f) : Fj(d, c, f));
    }
  }
  var xr = "hidden visibilitychange webkitHidden webkitvisibilitychange mozHidden mozvisibilitychange msHidden msvisibilitychange".split(
    " "
  );
  function yr(a, b, c) {
    Yj.call(this);
    this.D = new Tj(this);
    Ei(this, Ta(Fi, this.D));
    this.B = a;
    this.F = !!c;
    this.A = null;
    this.C = !1;
    zr(this, b);
  }
  I(yr, Yj);
  function zr(a, b) {
    wr(
      function(b) {
        b && Ar(a);
      },
      a.D,
      b
    );
  }
  function Ar(a) {
    if (a.A && !a.C) {
      var b = a.B;
      b.G.push(a);
      Br(b.B);
      a.C = !0;
    }
  }
  yr.prototype.L = function() {
    this.C = !1;
    if (!this.O() && this.A) {
      var a = Ua();
      this.dispatchEvent(new vr(this, a));
      this.A && this.A.La();
      this.dispatchEvent(new ur(this, a, Ua()));
      this.F && Ar(this);
    }
  };
  function Cr(a, b, c, d) {
    Yj.call(this);
    this.D = function() {
      Ar(a);
    };
    this.F = a.B;
    this.S = new Hn();
    this.C = !1;
    this.L = d || 6;
    this.N = new Sm(this.L);
    this.T = c;
    this.J = b;
    this.A = [];
    this.B = [];
    this.G = new mk();
    this.M = [];
    this.I = new ak();
    this.R = new Eg();
  }
  C(Cr, Yj);
  y = Cr.prototype;
  y.kc = function(a, b, c) {
    if (!qr(this.A, a) || !rr(this.B, c)) {
      this.C = !1;
      Dr(this);
      nk(this.G, this.A);
      this.G = pk(this.G, a);
      Er(this);
      this.A = [];
      this.B = [];
      var d = a.length;
      d = d > this.L ? this.L : d;
      for (
        var e = {}, f = 0;
        f < d;
        e = { self: e.self, P: e.P, Dc: e.Dc }, ++f
      )
        if (((e.P = a[f]), !pr(e.P))) {
          this.A.push(e.P);
          e.Dc = sr;
          if (c) {
            var g = c[f];
            g && (e.Dc = g);
          }
          this.B.push(e.Dc);
          or(e.P)
            ? Fr(this, e.P, e.Dc, this.D, b)
            : (e.P.Tb(b),
              (e.self = this),
              e.P.gc(
                b.va(
                  (function(a) {
                    return function(c) {
                      4 != c && 0 != c && Fr(a.self, a.P, a.Dc, a.self.D, b);
                    };
                  })(e),
                  "br-onready"
                )
              ));
        }
      Gr(this);
    }
  };
  function Fr(a, b, c, d, e) {
    or(b) && (Bd(c, 5) || cq(Hr(a, b, c), e));
    b = Hr(a, b, c);
    gq(b, a.F, e, a.D);
    dq(b, a.F, e, d);
  }
  y.La = function() {
    this.C = !1;
    this.J.Of();
    for (var a = this.A.length, b = 0; b < a; ++b) {
      var c = this.A[b],
        d = this.B[b];
      if (or(c) && 0 !== N(d, 0)) {
        var e = Hr(this, c, d);
        var f = e;
        if (f.H) {
          for (
            var g = (Ua() - f.H) / 400, k = [], l = f.I.length, m = 0;
            m < l;
            m++
          ) {
            var n = f.I[m];
            n.N = g;
            1 > g && k.push(n);
          }
          f.I = k;
          f.I.length || (f.H = 0);
          f = !!f.I.length;
        } else f = !1;
        f && this.D();
        this.J.zg(c, d, e);
      }
    }
    this.J.Mf();
    this.C = !1;
    if (0 != this.A.length) {
      a = !0;
      for (b = 0; b < this.A.length; ++b) {
        c = Hr(this, this.A[b], this.B[b]);
        a: if (0 == c.B.length) d = !1;
        else {
          for (d = 0; d < c.B.length; ++d)
            if (!c.B[d].bh()) {
              d = !1;
              break a;
            }
          d = !0;
        }
        if (!d || c.H) {
          a = !1;
          break;
        }
      }
      this.C = a;
    }
    this.C && this.dispatchEvent(new nj("ViewportReady", this));
  };
  y.ec = function(a) {
    Ir(this, a);
    Jr(this, a);
  };
  function Kr(a, b, c) {
    var d = Lr,
      e;
    a: {
      for (e = a.A.length - 1; 0 <= e; e--) {
        var f = a.B[e];
        if (L(f, 0) && 1 == N(f, 0)) break a;
      }
      e = -1;
    }
    if ((f = -1 != e))
      if (((f = a.A[e]), or(f))) {
        var g = a.B[e];
        Mn(a.S, b, c, Mr);
        a = Hr(a, f, g);
        b = Mr;
        bq(a);
        a.A.oa().ef(b, a.Y, d);
        f = 0 <= d.x && 1 >= d.x && 0 <= d.y && 1 >= d.y ? !0 : !1;
      } else f = !1;
    return f ? e : -1;
  }
  function Er(a) {
    for (var b = a.G.Ha(); 0 < b.length; ) {
      var c = b.shift();
      c.Qc();
      c = Hr(a, c, sr);
      c.F && (c.F.cancel(a.F), (c.F = null));
      c.K && (c.K.cancel(a.F), (c.K = null));
    }
    a.G.clear();
  }
  function Jr(a, b) {
    for (var c = 0; c < a.A.length; ++c) {
      var d = a,
        e = b,
        f = a.D,
        g = Hr(d, a.A[c], a.B[c]);
      gq(g, d.F, e, d.D);
      dq(g, d.F, e, f);
    }
  }
  function Ir(a, b) {
    for (var c = 0; c < a.A.length; ++c) {
      var d = a.A[c],
        e = a.B[c],
        f = b;
      or(d) && (Bd(e, 5) || cq(Hr(a, d, e), f));
    }
  }
  function Hr(a, b, c) {
    var d = Um(a.N, b.id());
    d || ((d = a.T.create(b, c, a.S)), Tm(a.N, b.id(), d));
    d.G = c;
    return d;
  }
  y.fa = u("S");
  function Gr(a) {
    for (var b = 0; b < a.A.length; ++b) {
      var c = qm(a.A[b], "TileReady", function(b) {
        Jr(a, b);
      });
      a.M.push(c);
    }
  }
  function Dr(a) {
    for (var b = 0; b < a.A.length; ++b) Oj(a.M[b]);
    a.M = [];
  }
  y.clear = function() {
    Dr(this);
    nk(this.G, this.A);
    Er(this);
    this.N.clear();
    this.A = [];
    this.B = [];
  };
  function Nr(a) {
    var b = a.Za();
    if (b) {
      var c = Jn(a.S),
        d = Ng(a.R);
      c.width = Math.max(1, d.V() - b.left - b.right);
      c.height = Math.max(1, Vg(d) - b.top - b.bottom);
      Dn(a.S, c);
    }
  }
  y.Rb = function(a, b, c, d, e) {
    var f = Nm.Te();
    Bd(f, 0) &&
      ((this.I.top = a),
      (this.I.right = b),
      (this.I.bottom = c),
      (this.I.left = d),
      this.J.mh(a, b, c, d),
      Nr(this),
      Ir(this, e),
      Jr(this, e),
      this.D());
  };
  y.Za = u("I");
  y.dd = u("C");
  y.ed = function(a) {
    this.J.lh(a);
  };
  y.wc = function(a, b) {
    this.C = !1;
    Cn(a, this.S);
    var c = tn(Qg(Jg(a))),
      d = Jn(this.S);
    d.L = 0.01 * c;
    d.H = void 0;
    d.I = void 0;
    d.K = void 0;
    Dn(this.S, d);
    this.R = a;
    Nr(this);
    Ir(this, b);
    Jr(this, b);
  };
  var Or = new Km();
  Or.data[0] = 1;
  Or.data[4] = 1;
  Or.data[1] = 0;
  var sr = Or,
    Mr = new sl();
  function Pr(a, b, c, d) {
    Cr.call(this, a, b, c, d);
  }
  C(Pr, Cr);
  Pr.prototype.Wc = function(a, b, c) {
    var d = Kr(this, a, b);
    if (-1 == d) return null;
    var e = this.A[d];
    d = this.B[d];
    Mn(this.S, a, b, Qr);
    return e.oa().Mg(Qr, L(d, 2) ? Lm(d) : void 0, c);
  };
  Pr.prototype.Yc = h();
  Pr.prototype.ke = function(a) {
    a[0] = 1;
    a[1] = 179;
  };
  Pr.prototype.ae = function(a, b, c) {
    a = Kr(this, a, b);
    return -1 == a ? null : this.A[a].Vc(Lr, c);
  };
  var Qr = new sl(),
    Lr = new Mi();
  function Rr(a, b, c, d) {
    b = new Oq(b, c);
    Cr.call(this, a, b, new qq(new Nq()), d);
  }
  C(Rr, Pr);
  function Sr(a, b, c, d) {
    U.call(this, "CPNR", [].concat(wa(arguments)));
  }
  C(Sr, U);
  function Tr(a, b, c, d, e, f) {
    b = new Rr(c, d, e, f);
    a(b);
  }
  function Ur(a, b) {
    this.C = a;
    this.D = b;
    this.B = 0;
    this.A = null;
  }
  Ur.prototype.get = function() {
    if (0 < this.B) {
      this.B--;
      var a = this.A;
      this.A = a.next;
      a.next = null;
    } else a = this.C();
    return a;
  };
  function Vr(a, b) {
    a.D(b);
    100 > a.B && (a.B++, (b.next = a.A), (a.A = b));
  }
  function Wr(a) {
    E.setTimeout(function() {
      throw a;
    }, 0);
  }
  function Xr(a, b, c) {
    var d = a;
    b && (d = G(a, b));
    d = Xr.D(d);
    Ma(E.setImmediate) && (c || Xr.C())
      ? E.setImmediate(d)
      : (Xr.A || (Xr.A = Xr.B()), Xr.A(d));
  }
  Xr.C = function() {
    return E.Window &&
      E.Window.prototype &&
      !xc("Edge") &&
      E.Window.prototype.setImmediate == E.setImmediate
      ? !1
      : !0;
  };
  Xr.B = function() {
    var a = E.MessageChannel;
    "undefined" === typeof a &&
      "undefined" !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      !xc("Presto") &&
      (a = function() {
        var a = document.createElement("IFRAME");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow;
        a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(),
          d =
            "file:" == b.location.protocol
              ? "*"
              : b.location.protocol + "//" + b.location.host;
        a = G(function(a) {
          if (("*" == d || a.origin == d) && a.data == c)
            this.port1.onmessage();
        }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function() {
            b.postMessage(c, d);
          }
        };
      });
    if ("undefined" !== typeof a && !Gc()) {
      var b = new a(),
        c = {},
        d = c;
      b.port1.onmessage = function() {
        if (F(c.next)) {
          c = c.next;
          var a = c.Qf;
          c.Qf = null;
          a();
        }
      };
      return function(a) {
        d.next = { Qf: a };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return "undefined" !== typeof document &&
      "onreadystatechange" in document.createElement("SCRIPT")
      ? function(a) {
          var b = document.createElement("SCRIPT");
          b.onreadystatechange = function() {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null;
          };
          document.documentElement.appendChild(b);
        }
      : function(a) {
          E.setTimeout(a, 0);
        };
  };
  Xr.D = aa();
  function Yr() {
    this.B = this.A = null;
  }
  var $r = new Ur(
    function() {
      return new Zr();
    },
    function(a) {
      a.reset();
    }
  );
  Yr.prototype.add = function(a, b) {
    var c = $r.get();
    c.set(a, b);
    this.B ? (this.B.next = c) : (this.A = c);
    this.B = c;
  };
  Yr.prototype.remove = function() {
    var a = null;
    this.A &&
      ((a = this.A),
      (this.A = this.A.next),
      this.A || (this.B = null),
      (a.next = null));
    return a;
  };
  function Zr() {
    this.next = this.scope = this.Tc = null;
  }
  Zr.prototype.set = function(a, b) {
    this.Tc = a;
    this.scope = b;
    this.next = null;
  };
  Zr.prototype.reset = function() {
    this.next = this.scope = this.Tc = null;
  };
  function as(a, b) {
    bs || cs();
    ds || (bs(), (ds = !0));
    es.add(a, b);
  }
  var bs;
  function cs() {
    if (E.Promise && E.Promise.resolve) {
      var a = E.Promise.resolve(void 0);
      bs = function() {
        a.then(fs);
      };
    } else
      bs = function() {
        Xr(fs);
      };
  }
  var ds = !1,
    es = new Yr();
  function fs() {
    for (var a; (a = es.remove()); ) {
      try {
        a.Tc.call(a.scope);
      } catch (b) {
        Wr(b);
      }
      Vr($r, a);
    }
    ds = !1;
  }
  function gs(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable = !0;
  }
  function hs(a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  }
  function is(a, b) {
    this.A = 0;
    this.H = void 0;
    this.D = this.B = this.C = null;
    this.F = this.G = !1;
    if (a != Ha)
      try {
        var c = this;
        a.call(
          b,
          function(a) {
            js(c, 2, a);
          },
          function(a) {
            js(c, 3, a);
          }
        );
      } catch (d) {
        js(this, 3, d);
      }
  }
  function ks() {
    this.next = this.C = this.B = this.D = this.A = null;
    this.F = !1;
  }
  ks.prototype.reset = function() {
    this.C = this.B = this.D = this.A = null;
    this.F = !1;
  };
  var ls = new Ur(
    function() {
      return new ks();
    },
    function(a) {
      a.reset();
    }
  );
  function ms(a, b, c) {
    var d = ls.get();
    d.D = a;
    d.B = b;
    d.C = c;
    return d;
  }
  is.prototype.then = function(a, b, c) {
    return ns(this, Ma(a) ? a : null, Ma(b) ? b : null, c);
  };
  gs(is);
  is.prototype.cancel = function(a) {
    0 == this.A &&
      as(function() {
        var b = new os(a);
        ps(this, b);
      }, this);
  };
  function ps(a, b) {
    if (0 == a.A)
      if (a.C) {
        var c = a.C;
        if (c.B) {
          for (
            var d = 0, e = null, f = null, g = c.B;
            g && (g.F || (d++, g.A == a && (e = g), !(e && 1 < d)));
            g = g.next
          )
            e || (f = g);
          e &&
            (0 == c.A && 1 == d
              ? ps(c, b)
              : (f
                  ? ((d = f),
                    d.next == c.D && (c.D = d),
                    (d.next = d.next.next))
                  : qs(c),
                rs(c, e, 3, b)));
        }
        a.C = null;
      } else js(a, 3, b);
  }
  function ss(a, b) {
    a.B || (2 != a.A && 3 != a.A) || ts(a);
    a.D ? (a.D.next = b) : (a.B = b);
    a.D = b;
  }
  function ns(a, b, c, d) {
    var e = ms(null, null, null);
    e.A = new is(function(a, g) {
      e.D = b
        ? function(c) {
            try {
              var e = b.call(d, c);
              a(e);
            } catch (m) {
              g(m);
            }
          }
        : a;
      e.B = c
        ? function(b) {
            try {
              var e = c.call(d, b);
              !F(e) && b instanceof os ? g(b) : a(e);
            } catch (m) {
              g(m);
            }
          }
        : g;
    });
    e.A.C = a;
    ss(a, e);
    return e.A;
  }
  is.prototype.K = function(a) {
    this.A = 0;
    js(this, 2, a);
  };
  is.prototype.J = function(a) {
    this.A = 0;
    js(this, 3, a);
  };
  function js(a, b, c) {
    if (0 == a.A) {
      a === c &&
        ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
      a.A = 1;
      a: {
        var d = c,
          e = a.K,
          f = a.J;
        if (d instanceof is) {
          ss(d, ms(e || Ha, f || null, a));
          var g = !0;
        } else if (hs(d)) d.then(e, f, a), (g = !0);
        else {
          if (Na(d))
            try {
              var k = d.then;
              if (Ma(k)) {
                us(d, k, e, f, a);
                g = !0;
                break a;
              }
            } catch (l) {
              f.call(a, l);
              g = !0;
              break a;
            }
          g = !1;
        }
      }
      g ||
        ((a.H = c),
        (a.A = b),
        (a.C = null),
        ts(a),
        3 != b || c instanceof os || vs(a, c));
    }
  }
  function us(a, b, c, d, e) {
    function f(a) {
      k || ((k = !0), d.call(e, a));
    }
    function g(a) {
      k || ((k = !0), c.call(e, a));
    }
    var k = !1;
    try {
      b.call(a, g, f);
    } catch (l) {
      f(l);
    }
  }
  function ts(a) {
    a.G || ((a.G = !0), as(a.I, a));
  }
  function qs(a) {
    var b = null;
    a.B && ((b = a.B), (a.B = b.next), (b.next = null));
    a.B || (a.D = null);
    return b;
  }
  is.prototype.I = function() {
    for (var a; (a = qs(this)); ) rs(this, a, this.A, this.H);
    this.G = !1;
  };
  function rs(a, b, c, d) {
    if (3 == c && b.B && !b.F) for (; a && a.F; a = a.C) a.F = !1;
    if (b.A) (b.A.C = null), ws(b, c, d);
    else
      try {
        b.F ? b.D.call(b.C) : ws(b, c, d);
      } catch (e) {
        xs.call(null, e);
      }
    Vr(ls, b);
  }
  function ws(a, b, c) {
    2 == b ? a.D.call(a.C, c) : a.B && a.B.call(a.C, c);
  }
  function vs(a, b) {
    a.F = !0;
    as(function() {
      a.F && xs.call(null, b);
    });
  }
  var xs = Wr;
  function os(a) {
    Va.call(this, a);
  }
  I(os, Va);
  os.prototype.name = "cancel";
  function ys(a, b) {
    return new is(function(c, d) {
      var e = F(b) ? (Ma(b) ? b() : b) : new Image();
      var f = Nc && 11 > ad ? "readystatechange" : "load",
        g = new Tj();
      g.listen(e, [f, "abort", "error"], function(a) {
        if ("readystatechange" != a.type || "complete" == e.readyState)
          Fi(g), a.type == f ? c(e) : d(null);
      });
      e.src = a;
    });
  }
  var zs = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function As(a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
          e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  function Bs(a, b, c) {
    if (Ka(b)) for (var d = 0; d < b.length; d++) Bs(a, String(b[d]), c);
    else
      null != b &&
        c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
  }
  var Cs = /#|$/;
  function Ds(a) {
    var b = a.search(Cs),
      c;
    a: {
      for (c = 0; 0 <= (c = a.indexOf("cid", c)) && c < b; ) {
        var d = a.charCodeAt(c - 1);
        if (38 == d || 63 == d)
          if (((d = a.charCodeAt(c + 3)), !d || 61 == d || 38 == d || 35 == d))
            break a;
        c += 4;
      }
      c = -1;
    }
    if (0 > c) return null;
    d = a.indexOf("&", c);
    if (0 > d || d > b) d = b;
    c += 4;
    return decodeURIComponent(a.substr(c, d - c).replace(/\+/g, " "));
  }
  function Es(a, b) {
    this.F = this.I = this.B = "";
    this.H = null;
    this.D = this.C = "";
    this.G = !1;
    if (a instanceof Es) {
      this.G = F(b) ? b : a.G;
      Fs(this, a.B);
      this.I = a.I;
      this.F = a.$b();
      Gs(this, a.H);
      this.C = a.C;
      b = a.A;
      var c = new Hs();
      c.B = b.B;
      b.A && ((c.A = new ck(b.A)), (c.da = b.da));
      Is(this, c);
      this.D = a.D;
    } else
      a && (c = String(a).match(zs))
        ? ((this.G = !!b),
          Fs(this, c[1] || "", !0),
          (this.I = Js(c[2] || "")),
          (this.F = Js(c[3] || "", !0)),
          Gs(this, c[4]),
          (this.C = Js(c[5] || "", !0)),
          Is(this, c[6] || "", !0),
          (this.D = Js(c[7] || "")))
        : ((this.G = !!b), (this.A = new Hs(null, this.G)));
  }
  Es.prototype.toString = function() {
    var a = [],
      b = this.B;
    b && a.push(Ks(b, Ls, !0), ":");
    var c = this.$b();
    if (c || "file" == b)
      a.push("//"),
        (b = this.I) && a.push(Ks(b, Ls, !0), "@"),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (c = this.H),
        null != c && a.push(":", String(c));
    if ((c = this.C))
      this.F && "/" != c.charAt(0) && a.push("/"),
        a.push(Ks(c, "/" == c.charAt(0) ? Ms : Ns, !0));
    (c = this.A.toString()) && a.push("?", c);
    (c = this.D) && a.push("#", Ks(c, Os));
    return a.join("");
  };
  function Fs(a, b, c) {
    a.B = c ? Js(b, !0) : b;
    a.B && (a.B = a.B.replace(/:$/, ""));
  }
  Es.prototype.$b = u("F");
  function Gs(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.H = b;
    } else a.H = null;
  }
  function Is(a, b, c) {
    b instanceof Hs
      ? ((a.A = b), Ps(a.A, a.G))
      : (c || (b = Ks(b, Qs)), (a.A = new Hs(b, a.G)));
  }
  Es.prototype.getQuery = function() {
    return this.A.toString();
  };
  function Js(a, b) {
    return a
      ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)
      : "";
  }
  function Ks(a, b, c) {
    return Aa(a)
      ? ((a = encodeURI(a).replace(b, Rs)),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a)
      : null;
  }
  function Rs(a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  }
  var Ls = /[#\/\?@]/g,
    Ns = /[#\?:]/g,
    Ms = /[#\?]/g,
    Qs = /[#\?@]/g,
    Os = /#/g;
  function Hs(a, b) {
    this.da = this.A = null;
    this.B = a || null;
    this.C = !!b;
  }
  function Ss(a) {
    a.A ||
      ((a.A = new ck()),
      (a.da = 0),
      a.B &&
        As(a.B, function(b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  }
  y = Hs.prototype;
  y.add = function(a, b) {
    Ss(this);
    this.B = null;
    a = Ts(this, a);
    var c = this.A.get(a);
    c || this.A.set(a, (c = []));
    c.push(b);
    this.da = this.da + 1;
    return this;
  };
  y.remove = function(a) {
    Ss(this);
    a = Ts(this, a);
    return jk(this.A.B, a)
      ? ((this.B = null),
        (this.da = this.da - this.A.get(a).length),
        this.A.remove(a))
      : !1;
  };
  y.clear = function() {
    this.A = this.B = null;
    this.da = 0;
  };
  y.Ya = function() {
    Ss(this);
    return 0 == this.da;
  };
  function Us(a, b) {
    Ss(a);
    b = Ts(a, b);
    return jk(a.A.B, b);
  }
  y.forEach = function(a, b) {
    Ss(this);
    this.A.forEach(function(c, d) {
      $a(
        c,
        function(c) {
          a.call(b, c, d, this);
        },
        this
      );
    }, this);
  };
  y.ob = function() {
    Ss(this);
    for (var a = this.A.Ha(), b = this.A.ob(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  y.Ha = function(a) {
    Ss(this);
    var b = [];
    if (Aa(a)) Us(this, a) && (b = jb(b, this.A.get(Ts(this, a))));
    else {
      a = this.A.Ha();
      for (var c = 0; c < a.length; c++) b = jb(b, a[c]);
    }
    return b;
  };
  y.set = function(a, b) {
    Ss(this);
    this.B = null;
    a = Ts(this, a);
    Us(this, a) && (this.da = this.da - this.A.get(a).length);
    this.A.set(a, [b]);
    this.da = this.da + 1;
    return this;
  };
  y.get = function(a, b) {
    if (!a) return b;
    a = this.Ha(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  y.toString = function() {
    if (this.B) return this.B;
    if (!this.A) return "";
    for (var a = [], b = this.A.ob(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.Ha(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return (this.B = a.join("&"));
  };
  function Ts(a, b) {
    b = String(b);
    a.C && (b = b.toLowerCase());
    return b;
  }
  function Ps(a, b) {
    b &&
      !a.C &&
      (Ss(a),
      (a.B = null),
      a.A.forEach(function(a, b) {
        var c = b.toLowerCase();
        b != c &&
          (this.remove(b),
          this.remove(c),
          0 < a.length &&
            ((this.B = null),
            this.A.set(Ts(this, c), kb(a)),
            (this.da = this.da + a.length)));
      }, a));
    a.C = b;
  }
  function Vs(a) {
    this.B = !1;
    this.C = a;
  }
  Vs.prototype.A = function() {
    this.B || ((this.B = !0), this.C());
  };
  function Ws() {}
  I(Ws, Error);
  function Xs() {
    this.A = "pending";
    this.C = [];
    this.B = this.D = void 0;
  }
  gs(Xs);
  function Ys() {
    Va.call(this, "Multiple attempts to set the state of this Result");
  }
  I(Ys, Va);
  y = Xs.prototype;
  y.getError = u("B");
  y.wait = function(a, b) {
    "pending" == this.A
      ? this.C.push({ va: a, scope: b || null })
      : a.call(b, this);
  };
  y.ml = function(a) {
    if ("pending" == this.A) (this.D = a), (this.A = "success"), Zs(this);
    else if (!$s(this)) throw new Ys();
  };
  y.Rh = function(a) {
    if ("pending" == this.A) (this.B = a), (this.A = "error"), Zs(this);
    else if (!$s(this)) throw new Ys();
  };
  function Zs(a) {
    var b = a.C;
    a.C = [];
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      d.va.call(d.scope, a);
    }
  }
  y.cancel = function() {
    return "pending" == this.A ? (this.Rh(new Ws()), !0) : !1;
  };
  function $s(a) {
    return "error" == a.A && a.B instanceof Ws;
  }
  y.then = function(a, b, c) {
    var d,
      e,
      f = new is(function(a, b) {
        d = a;
        e = b;
      });
    this.wait(function(a) {
      $s(a)
        ? f.cancel()
        : "success" == a.A ? d(a.D) : "error" == a.A && e(a.getError());
    });
    return f.then(a, b, c);
  };
  function at(a) {
    var b = new Xs();
    a.then(b.ml, b.Rh, b);
    return b;
  }
  function bt(a) {
    this.B = a = void 0 === a ? ct : a;
  }
  bt.prototype.A = function(a, b) {
    var c = this;
    a = new Es(a);
    var d = !a.F,
      e = !!a.B && "data" === a.B,
      f = at(
        ys(a.toString(), function() {
          return c.B(d, e);
        })
      );
    f.wait(function(a) {
      try {
        b(a.D);
      } catch (k) {
        throw k;
      }
    });
    return new Vs(function() {
      return f.cancel();
    });
  };
  function ct(a, b) {
    var c = Yi("IMG");
    a || b || (c.crossOrigin = "");
    return c;
  }
  function dt(a, b) {
    this.B = a;
    this.C = b;
  }
  dt.prototype.A = function(a, b, c) {
    c = void 0 === c ? 2 : c;
    b = new et(this.B, b);
    a = new ft(a, G(b.C, b), this.C);
    b.B = a;
    gt(this.B, a, c);
    return b;
  };
  function et(a, b) {
    this.G = a;
    this.F = b;
    this.D = !1;
    this.B = null;
  }
  et.prototype.C = function(a) {
    this.D || (this.F(a), (this.D = !0));
  };
  et.prototype.A = function() {
    this.B && (this.G.remove(this.B), this.C(void 0));
  };
  function ft(a, b, c) {
    this.C = a;
    this.A = b;
    this.B = c;
    this.state = null;
  }
  ft.prototype.start = function(a) {
    var b = this.A;
    this.B.A(this.C, function(c) {
      a();
      b(c);
    });
  };
  ft.prototype.cancel = function() {
    this.A(void 0);
    return !1;
  };
  function ht(a, b) {
    this.A = new dt(a, b ? b : new bt());
  }
  function it(a, b, c, d) {
    if (!b) return c(null), Ha;
    a = a.A.A(
      b,
      function(a) {
        c(a);
      },
      d || 3
    );
    return G(a.A, a);
  }
  var jt = null,
    kt = !1;
  function lt(a, b, c) {
    this.B = b;
    this.A = new ht(
      a,
      new bt(function() {
        var a = Yi("IMG");
        c && (a.crossOrigin = "");
        return a;
      })
    );
  }
  lt.prototype.Bb = function(a, b, c, d, e, f) {
    a = jt.In(this.B, d, b, c);
    return a
      ? it(this.A, a, f.va(e, "custom-pano-tile"), void 0)
      : (e(null), Ha);
  };
  lt.prototype.Cb = h();
  function mt(a, b, c) {
    U.call(this, "CUTS", [].concat(wa(arguments)));
  }
  C(mt, U);
  function nt(a, b, c, d, e) {
    a(new lt(c, d, e));
  }
  var ot = {
      Ai: ["BC", "AD"],
      zi: ["Before Christ", "Anno Domini"],
      Ei: "JFMAMJJASOND".split(""),
      Ni: "JFMAMJJASOND".split(""),
      Ci: "January February March April May June July August September October November December".split(
        " "
      ),
      Mi: "January February March April May June July August September October November December".split(
        " "
      ),
      Ji: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
      Pi: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
      Si: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
      Ri: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
      Li: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
      Qi: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
      ao: "SMTWTFS".split(""),
      Oi: "SMTWTFS".split(""),
      Ki: ["Q1", "Q2", "Q3", "Q4"],
      Gi: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
      ui: ["AM", "PM"],
      Od: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
      Pd: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
      Ff: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
      Gf: 6,
      oo: [5, 6],
      Hf: 5
    },
    pt = ot;
  pt = ot;
  function qt(a, b, c, d, e) {
    a = new Date(a, b, c);
    e = e || 0;
    return (
      a.valueOf() +
      864e5 *
        (((F(d) ? d : 3) - e + 7) % 7 - ((a.getDay() + 6) % 7 - e + 7) % 7)
    );
  }
  function rt(a, b, c) {
    Ba(a)
      ? ((this.A = st(a, b || 0, c || 1)), tt(this, c || 1))
      : Na(a)
        ? ((this.A = st(a.getFullYear(), a.getMonth(), a.getDate())),
          tt(this, a.getDate()))
        : ((this.A = new Date(Ua())),
          (a = this.A.getDate()),
          this.A.setHours(0),
          this.A.setMinutes(0),
          this.A.setSeconds(0),
          this.A.setMilliseconds(0),
          tt(this, a));
  }
  function st(a, b, c) {
    b = new Date(a, b, c);
    0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
    return b;
  }
  y = rt.prototype;
  y.getFullYear = function() {
    return this.A.getFullYear();
  };
  y.getMonth = function() {
    return this.A.getMonth();
  };
  y.getDate = function() {
    return this.A.getDate();
  };
  y.getTime = function() {
    return this.A.getTime();
  };
  y.getDay = function() {
    return this.A.getDay();
  };
  y.getUTCFullYear = function() {
    return this.A.getUTCFullYear();
  };
  y.getUTCMonth = function() {
    return this.A.getUTCMonth();
  };
  y.getUTCDate = function() {
    return this.A.getUTCDate();
  };
  y.getUTCHours = function() {
    return this.A.getUTCHours();
  };
  y.getUTCMinutes = function() {
    return this.A.getUTCMinutes();
  };
  y.getTimezoneOffset = function() {
    return this.A.getTimezoneOffset();
  };
  y.set = function(a) {
    this.A = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  };
  y.setFullYear = function(a) {
    this.A.setFullYear(a);
  };
  y.setMonth = function(a) {
    this.A.setMonth(a);
  };
  y.setDate = function(a) {
    this.A.setDate(a);
  };
  y.setTime = function(a) {
    this.A.setTime(a);
  };
  y.add = function(a) {
    if (a.G || a.F) {
      var b = this.getMonth() + a.F + 12 * a.G,
        c = this.getFullYear() + Math.floor(b / 12);
      b %= 12;
      0 > b && (b += 12);
      a: {
        switch (b) {
          case 1:
            var d = 0 != c % 4 || (0 == c % 100 && 0 != c % 400) ? 28 : 29;
            break a;
          case 5:
          case 8:
          case 10:
          case 3:
            d = 30;
            break a;
        }
        d = 31;
      }
      d = Math.min(d, this.getDate());
      this.setDate(1);
      this.setFullYear(c);
      this.setMonth(b);
      this.setDate(d);
    }
    a.A &&
      ((a = new Date(
        new Date(
          this.getFullYear(),
          this.getMonth(),
          this.getDate(),
          12
        ).getTime() +
          864e5 * a.A
      )),
      this.setDate(1),
      this.setFullYear(a.getFullYear()),
      this.setMonth(a.getMonth()),
      this.setDate(a.getDate()),
      tt(this, a.getDate()));
  };
  y.ye = function(a) {
    return (
      [
        this.getFullYear(),
        nc(this.getMonth() + 1, 2),
        nc(this.getDate(), 2)
      ].join(a ? "-" : "") + ""
    );
  };
  y.toString = function() {
    return this.ye();
  };
  function tt(a, b) {
    a.getDate() != b &&
      a.A.setUTCHours(a.A.getUTCHours() + (a.getDate() < b ? 1 : -1));
  }
  y.valueOf = function() {
    return this.A.valueOf();
  };
  function ut(a, b, c, d, e, f, g) {
    this.A = Ba(a)
      ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0)
      : new Date(a && a.getTime ? a.getTime() : Ua());
  }
  I(ut, rt);
  y = ut.prototype;
  y.getHours = function() {
    return this.A.getHours();
  };
  y.getMinutes = function() {
    return this.A.getMinutes();
  };
  y.getSeconds = function() {
    return this.A.getSeconds();
  };
  y.getMilliseconds = function() {
    return this.A.getMilliseconds();
  };
  y.getUTCHours = function() {
    return this.A.getUTCHours();
  };
  y.getUTCMinutes = function() {
    return this.A.getUTCMinutes();
  };
  y.setHours = function(a) {
    this.A.setHours(a);
  };
  y.setMinutes = function(a) {
    this.A.setMinutes(a);
  };
  y.setSeconds = function(a) {
    this.A.setSeconds(a);
  };
  y.setMilliseconds = function(a) {
    this.A.setMilliseconds(a);
  };
  y.add = function(a) {
    rt.prototype.add.call(this, a);
    a.B && this.A.setUTCHours(this.A.getUTCHours() + a.B);
    a.C && this.A.setUTCMinutes(this.A.getUTCMinutes() + a.C);
    a.D && this.A.setUTCSeconds(this.A.getUTCSeconds() + a.D);
  };
  y.ye = function(a) {
    var b = rt.prototype.ye.call(this, a);
    return a
      ? b +
          " " +
          nc(this.getHours(), 2) +
          ":" +
          nc(this.getMinutes(), 2) +
          ":" +
          nc(this.getSeconds(), 2)
      : b +
          "T" +
          nc(this.getHours(), 2) +
          nc(this.getMinutes(), 2) +
          nc(this.getSeconds(), 2);
  };
  y.toString = function() {
    return this.ye();
  };
  function vt() {}
  function wt(a) {
    if ("number" == typeof a) {
      var b = new vt();
      b.B = a;
      var c = a;
      if (0 == c) c = "Etc/GMT";
      else {
        var d = ["Etc/GMT", 0 > c ? "-" : "+"];
        c = Math.abs(c);
        d.push(Math.floor(c / 60) % 100);
        c %= 60;
        0 != c && d.push(":", nc(c, 2));
        c = d.join("");
      }
      b.D = c;
      c = a;
      0 == c
        ? (c = "UTC")
        : ((d = ["UTC", 0 > c ? "+" : "-"]),
          (c = Math.abs(c)),
          d.push(Math.floor(c / 60) % 100),
          (c %= 60),
          0 != c && d.push(":", c),
          (c = d.join("")));
      a = xt(a);
      b.F = [c, c];
      b.A = { ho: a, Kf: a };
      b.C = [];
      return b;
    }
    b = new vt();
    b.D = a.id;
    b.B = -a.std_offset;
    b.F = a.names;
    b.A = a.names_ext;
    b.C = a.transitions;
    return b;
  }
  function xt(a) {
    var b = ["GMT"];
    b.push(0 >= a ? "+" : "-");
    a = Math.abs(a);
    b.push(nc(Math.floor(a / 60) % 100, 2), ":", nc(a % 60, 2));
    return b.join("");
  }
  function yt(a, b) {
    b =
      Date.UTC(
        b.getUTCFullYear(),
        b.getUTCMonth(),
        b.getUTCDate(),
        b.getUTCHours(),
        b.getUTCMinutes()
      ) / 36e5;
    for (var c = 0; c < a.C.length && b >= a.C[c]; ) c += 2;
    return 0 == c ? 0 : a.C[c - 1];
  }
  function zt(a) {
    this.B = [];
    this.A = pt;
    "number" == typeof a ? At(this, a) : Bt(this, a);
  }
  var Ct = [
    /^'(?:[^']|'')*('|$)/,
    /^(?:G+|y+|Y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/,
    /^[^'GyYMkSEahKHcLQdmsvVwzZ]+/
  ];
  function Dt(a) {
    return a.getHours ? a.getHours() : 0;
  }
  function Bt(a, b) {
    for (Et && (b = b.replace(/\u200f/g, "")); b; ) {
      for (var c = b, d = 0; d < Ct.length; ++d) {
        var e = b.match(Ct[d]);
        if (e) {
          var f = e[0];
          b = b.substring(f.length);
          0 == d &&
            ("''" == f
              ? (f = "'")
              : ((f = f.substring(1, "'" == e[1] ? f.length - 1 : f.length)),
                (f = f.replace(/''/g, "'"))));
          a.B.push({ text: f, type: d });
          break;
        }
      }
      if (c === b) throw Error("Malformed pattern part: " + b);
    }
  }
  zt.prototype.format = function(a, b) {
    if (!a) throw Error("The date to format must be non-null.");
    var c = b ? 6e4 * (a.getTimezoneOffset() - (b.B - yt(b, a))) : 0,
      d = c ? new Date(a.getTime() + c) : a,
      e = d;
    b &&
      d.getTimezoneOffset() != a.getTimezoneOffset() &&
      ((e = 6e4 * (d.getTimezoneOffset() - a.getTimezoneOffset())),
      (d = new Date(d.getTime() + e)),
      (c += 0 < c ? -864e5 : 864e5),
      (e = new Date(a.getTime() + c)));
    c = [];
    for (var f = 0; f < this.B.length; ++f) {
      var g = this.B[f].text;
      1 == this.B[f].type ? c.push(Xt(this, g, a, d, e, b)) : c.push(g);
    }
    return c.join("");
  };
  function At(a, b) {
    if (4 > b) var c = a.A.Od[b];
    else if (8 > b) c = a.A.Pd[b - 4];
    else if (12 > b)
      (c = a.A.Ff[b - 8]),
        (c = c.replace("{1}", a.A.Od[b - 8])),
        (c = c.replace("{0}", a.A.Pd[b - 8]));
    else {
      At(a, 10);
      return;
    }
    Bt(a, c);
  }
  function Yt(a, b) {
    b = String(b);
    a = a.A || pt;
    if (void 0 !== a.Ti) {
      for (var c = [], d = 0; d < b.length; d++) {
        var e = b.charCodeAt(d);
        c.push(
          48 <= e && 57 >= e ? String.fromCharCode(a.Ti + e - 48) : b.charAt(d)
        );
      }
      b = c.join("");
    }
    return b;
  }
  var Et = !1;
  function Zt(a) {
    if (!(a.getHours && a.getSeconds && a.getMinutes))
      throw Error(
        "The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields."
      );
  }
  function Xt(a, b, c, d, e, f) {
    var g = b.length;
    switch (b.charAt(0)) {
      case "G":
        return (
          (c = 0 < d.getFullYear() ? 1 : 0), 4 <= g ? a.A.zi[c] : a.A.Ai[c]
        );
      case "y":
        return (
          (c = d.getFullYear()),
          0 > c && (c = -c),
          2 == g && (c %= 100),
          Yt(a, nc(c, g))
        );
      case "Y":
        return (
          (c = new Date(
            qt(d.getFullYear(), d.getMonth(), d.getDate(), a.A.Hf, a.A.Gf)
          ).getFullYear()),
          0 > c && (c = -c),
          2 == g && (c %= 100),
          Yt(a, nc(c, g))
        );
      case "M":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.A.Ei[c];
            break a;
          case 4:
            g = a.A.Ci[c];
            break a;
          case 3:
            g = a.A.Ji[c];
            break a;
          default:
            g = Yt(a, nc(c + 1, g));
        }
        return g;
      case "k":
        return Zt(e), Yt(a, nc(Dt(e) || 24, g));
      case "S":
        return Yt(
          a,
          (e.getMilliseconds() / 1e3).toFixed(Math.min(3, g)).substr(2) +
            (3 < g ? nc(0, g - 3) : "")
        );
      case "E":
        return (c = d.getDay()), 4 <= g ? a.A.Si[c] : a.A.Li[c];
      case "a":
        return Zt(e), (g = Dt(e)), a.A.ui[12 <= g && 24 > g ? 1 : 0];
      case "h":
        return Zt(e), Yt(a, nc(Dt(e) % 12 || 12, g));
      case "K":
        return Zt(e), Yt(a, nc(Dt(e) % 12, g));
      case "H":
        return Zt(e), Yt(a, nc(Dt(e), g));
      case "c":
        a: switch (((c = d.getDay()), g)) {
          case 5:
            g = a.A.Oi[c];
            break a;
          case 4:
            g = a.A.Ri[c];
            break a;
          case 3:
            g = a.A.Qi[c];
            break a;
          default:
            g = Yt(a, nc(c, 1));
        }
        return g;
      case "L":
        a: switch (((c = d.getMonth()), g)) {
          case 5:
            g = a.A.Ni[c];
            break a;
          case 4:
            g = a.A.Mi[c];
            break a;
          case 3:
            g = a.A.Pi[c];
            break a;
          default:
            g = Yt(a, nc(c + 1, g));
        }
        return g;
      case "Q":
        return (
          (c = Math.floor(d.getMonth() / 3)), 4 > g ? a.A.Ki[c] : a.A.Gi[c]
        );
      case "d":
        return Yt(a, nc(d.getDate(), g));
      case "m":
        return Zt(e), Yt(a, nc(e.getMinutes(), g));
      case "s":
        return Zt(e), Yt(a, nc(e.getSeconds(), g));
      case "v":
        return (g = f || wt(c.getTimezoneOffset())), g.D;
      case "V":
        return (
          (a = f || wt(c.getTimezoneOffset())),
          2 >= g
            ? a.D
            : 0 < yt(a, c)
              ? F(a.A.yi) ? a.A.yi : a.A.DST_GENERIC_LOCATION
              : F(a.A.Kf) ? a.A.Kf : a.A.STD_GENERIC_LOCATION
        );
      case "w":
        return (
          (c = qt(e.getFullYear(), e.getMonth(), e.getDate(), a.A.Hf, a.A.Gf)),
          Yt(
            a,
            nc(
              Math.floor(
                Math.round(
                  (c - new Date(new Date(c).getFullYear(), 0, 1).valueOf()) /
                    864e5
                ) / 7
              ) + 1,
              g
            )
          )
        );
      case "z":
        return (
          (a = f || wt(c.getTimezoneOffset())),
          4 > g ? a.F[0 < yt(a, c) ? 2 : 0] : a.F[0 < yt(a, c) ? 3 : 1]
        );
      case "Z":
        return (
          (b = f || wt(c.getTimezoneOffset())),
          4 > g
            ? ((g = -(b.B - yt(b, c))),
              (a = [0 > g ? "-" : "+"]),
              (g = Math.abs(g)),
              a.push(nc(Math.floor(g / 60) % 100, 2), nc(g % 60, 2)),
              (g = a.join("")))
            : (g = Yt(a, xt(b.B - yt(b, c)))),
          g
        );
      default:
        return "";
    }
  }
  function $t(a) {
    var b = wg(a.$());
    if (L(b, 1)) return 2 == M(b, 1);
    a = dh(a);
    return 1 === a || 2 === a || 4 === a || 13 === a || 11 === a || 5 === a;
  }
  function au(a) {
    var b = wg(a.$());
    if (L(b, 1)) return 3 == M(b, 1);
    a = dh(a);
    return 3 === a || 10 === a || 15 === a || 12 === a || 7 === a || 27 === a;
  }
  function bu(a) {
    a = wg(a.$());
    return L(a, 1) ? 4 == M(a, 1) : !1;
  }
  function cu(a) {
    a = new Ce(zg(a.$()).data[5]);
    for (var b = 0; b < Q(a, 3); b++) if (9 == Ed(a, 3, b)) return !0;
    return !1;
  }
  function du(a, b) {
    for (var c = 0; c < Q(a, 5); c++) if (b(Ag(a, c))) return Ag(a, c);
    return null;
  }
  function eu(a) {
    du(a, function(a) {
      return 1 == M(new Pe(a.data[0]), 0);
    });
  }
  function fu(a, b) {
    var c = !1;
    if (L(a, 0)) {
      var d = new de(a.data[0]);
      if (L(d, 0) && L(ke(d), 2) && L(ke(d), 3)) {
        c = N(ke(d), 2);
        var e = N(ke(d), 3);
        Kg(b).data[2] = c;
        Kg(b).data[1] = e;
        c = !0;
      }
      L(d, 2) &&
        ((d = new he(d.data[2])),
        (c = Mg(b)),
        L(d, 0) && (c.data[0] = N(d, 0)),
        L(d, 1) && (c.data[1] = N(d, 1, 90)),
        L(d, 2) && (c.data[2] = N(d, 2)),
        (c = !0));
    }
    L(a, 2) && ((b.data[3] = N(a, 2)), (c = !0));
    L(a, 1) &&
      ((a = new ce(a.data[1])),
      (b = Og(b)),
      Ug(b, a.V()),
      Wg(b, N(a, 0)),
      (c = !0));
    return c;
  }
  var gu = new zt("MMM yyyy"),
    hu = new zt("MMMM yyyy");
  function iu(a) {
    var b = void 0 === b ? !1 : b;
    if (L(zg(a), 7)) {
      a = new ve(zg(a).data[7]);
      var c = Td(new Sd(a.data[8]));
      return c && !b
        ? c
        : (b ? hu : gu).format(
            new ut(
              N(a, 0),
              L(a, 1) ? N(a, 1) - 1 : void 0,
              L(a, 2) ? N(a, 2) : void 0,
              L(a, 3) ? N(a, 3) : void 0,
              L(a, 4) ? N(a, 4) : void 0
            )
          );
    }
    return "";
  }
  function ju(a, b) {
    return L(a, 21) && L(b, 21)
      ? ((a = a.$()),
        (b = b.$()),
        L(a, 1) &&
          L(b, 1) &&
          M(rg(a), 0) == M(rg(b), 0) &&
          O(rg(a), 1) == O(rg(b), 1))
      : L(a, 0) && L(b, 0) ? O(a, 0) == O(b, 0) : !1;
  }
  function ku(a) {
    return L(a.$(), 1) ? O(rg(a.$()), 1) : L(a, 0) ? O(a, 0) : "";
  }
  function lu(a) {
    return L(a.$(), 1) ? M(rg(a.$()), 0) : L(a, 1) ? mu(M(a, 1, 99)) : 0;
  }
  function mu(a) {
    switch (a) {
      case 0:
        return 2;
      case 1:
        return 4;
      case 4:
        return 3;
      case 9:
        return 8;
      case 7:
        return 1;
      case 8:
        return 5;
      case 10:
        return 10;
    }
    return 0;
  }
  function nu(a) {
    Yj.call(this);
    this.D = 0;
    this.Y = a;
    this.F = {};
    this.A = {};
    this.aa = "" + Oa(this);
    this.M = this.L = !1;
    this.N = new ko();
    this.T = null;
    this.G = [];
  }
  C(nu, Yj);
  y = nu.prototype;
  y.nb = u("D");
  function ou(a, b) {
    if (b != a.D && (0 == b || 4 !== a.D) && ((a.D = b), or(a) || pr(a))) {
      b = a.G;
      a.G = [];
      for (var c = 0; c < b.length; ++c) (0, b[c])(a.D);
    }
  }
  y.gc = function(a) {
    or(this) || pr(this) ? a(this.D) : this.G.push(a);
  };
  y.Tb = function(a) {
    this.Ib(0, 0, this.oa().Fg(), a, "pfdd");
    this.Ec(a, "pfdd");
  };
  y.Ba = u("N");
  y.fa = h();
  y.Vc = h();
  y.oa = h();
  y.sb = h();
  y.rb = function(a) {
    R(oo(this.N), a);
  };
  y.Cb = h();
  y.id = u("aa");
  y.Zc = function(a) {
    return !!this.F[a];
  };
  y.Bb = function(a, b, c) {
    return this.F[a + "|" + b + "|" + c] || null;
  };
  y.Sd = function(a, b) {
    var c = a.toString();
    this.F[c] = a;
    this.A[c] && delete this.A[c];
    1 === this.nb() && ou(this, 2);
    tm(this, "TileReady", b, new Wp("TileReady", this, a.F, a.G, a.C));
  };
  y.Rd = function(a, b) {
    var c = a.toString();
    this.F[c] = a;
    this.A[c] && delete this.A[c];
    c = this.nb();
    1 === c ? (ou(this, 2), ou(this, 3)) : 2 === c && ou(this, 3);
    tm(this, "TileReady", b, new Wp("TileReady", this, a.F, a.G, a.C));
  };
  y.Ec = function(a, b) {
    this.L || 0 !== this.nb() || ((this.L = !0), this.Y.Ec(this, a, b));
  };
  y.Qc = function() {
    this.M = !0;
    for (var a in this.A) this.A[a]();
    ou(this, 0);
    for (this.L = !1; this.G.length; ) this.G.shift()(0);
    this.M = !1;
    this.A = {};
  };
  y.vd = function() {
    ou(this, 4);
  };
  y.Ib = function(a, b, c, d, e) {
    var f = a + "|" + b + "|" + c;
    this.F[f] || this.A[f] || (this.A[f] = this.Y.Ib(this, a, b, c, d, e));
  };
  y.Kc = function(a, b, c) {
    a = a + "|" + b + "|" + c;
    this.A[a] && delete this.A[a];
  };
  y.Md = function(a, b, c) {
    a = a + "|" + b + "|" + c;
    this.A[a] && delete this.A[a];
  };
  y.Ye = function() {
    for (var a in this.A) return !0;
    return !1;
  };
  y.af = u("M");
  y.ga = function() {
    Yj.prototype.ga.call(this);
    this.F = {};
    this.Ye() && this.Qc();
  };
  y.Fd = function(a) {
    this.T = a;
    var b = eh(oo(this.N)),
      c = wg(b);
    R(b, a);
    L(c, 8) && !L(wg(b), 8) && R(new Gf(P(xg(b), 8)), c.hb());
  };
  y.$ = u("T");
  y.Nb = function() {
    return [];
  };
  function pu(a, b) {
    nu.call(this, a);
    this.rb(b);
    this.C = this.B = null;
    this.R = new Eg();
    this.ea = new Do();
    this.I = new Nn();
    this.J = null;
    this.W = !1;
  }
  C(pu, nu);
  y = pu.prototype;
  y.fa = u("R");
  y.Da = u("B");
  y.Vc = function(a, b) {
    var c = sb(a.y, 0, 1),
      d = Math.round(sb(a.x, 0, 1) * (this.Ab().V() - 1)),
      e = this.Ab();
    c = Math.round(c * (this.Ab().C - 1));
    d =
      !e.B || 0 > d || 0 > c || d >= e.A || c >= e.C
        ? ""
        : e.G[an(e.B, e.D + (c * e.A + d))] || "";
    if (!d) return null;
    Cd(b, 8);
    b.data[0] = d;
    if (!Eo(this.Ab(), d, fh(b))) return null;
    e = qu;
    (a = gn(this.Zd(), a.x, a.y, ru))
      ? (this.oa().uc(su), $k(su, a.origin, e), (a = e))
      : (a = null);
    a && tr(fh(b), a);
    a = this.Ab().F[d];
    switch (a) {
      case 3:
        b.data[1] = 4;
        break;
      case 8:
        b.data[1] = 9;
        break;
      case 10:
        b.data[1] = 10;
        break;
      default:
        b.data[1] = 0;
    }
    e = 1;
    L(no(this.Ba()), 2) && (e = dh(no(this.Ba())));
    b.data[2] = e;
    c = eh(b);
    e = xg(c);
    c = sg(c);
    e.data[1] = 2;
    e.data[9] = d;
    e.data[0] = a;
    Rd(c, d);
    Qd(c, a);
    return b;
  };
  y.Ab = u("ea");
  y.Zd = u("C");
  y.oa = function() {
    this.I.he() || this.sb();
    return this.I;
  };
  y.sb = function() {
    if (this.B && this.C) {
      var a = this.I,
        b = this.B;
      a.A = this.C;
      a.J = b.fa();
      Pn(a.J, a.I);
      Zk(a.I, a.L);
      R(a.D, new Hg(b.data[3]));
      var c = Ng(b.fa());
      a.K = c.V() / a.D.V();
      a.C = Vg(c) / Vg(a.D);
      a.N = Math.ceil(a.K);
      a.B = Math.ceil(a.C);
      a.M = N(b, 5);
      R(a.H, new Hg(b.data[26]));
      R(a.G, new Hg(b.data[27]));
      R(a.F, new Hg(b.data[28]));
      a.O = !0;
    }
    tu(this);
  };
  y.Nb = function() {
    if (!this.B) return [];
    if (!this.J) {
      this.J = [];
      for (var a = Q(this.B, 19), b = 0; b < a; b++) {
        var c = new Fm(Gd(this.B, 19, b)),
          d = N(c, 0) - N(this.B, 10);
        a: {
          var e = O(c, 3);
          c = e.split("/");
          if (1 == c.length) c = e;
          else {
            for (e = 0; e < c.length; ++e) {
              var f = Xb(c[e]);
              if (f == O(this.B, 13)) {
                c = f;
                break a;
              }
            }
            c = Xb(c[0]);
          }
        }
        c && ((d = new qo(this.I, d, c)), this.J.push(d));
      }
    }
    return this.J;
  };
  y.Cb = function(a, b) {
    this.B = a;
    var c = new ah();
    R(c, no(this.Ba()));
    var d = !1;
    O(a, 0) &&
      O(c, 0) != O(a, 0) &&
      ((c.data[0] = O(a, 0)), Rd(sg(eh(c)), O(a, 0)), (d = !0));
    L(a, 13) && Bd(a, 29) && (c.data[3] = O(a, 13));
    this.rb(c);
    d
      ? (ou(this, 0), tu(this), this.Md(0, 0, 0), this.Ib(0, 0, 0, b))
      : this.W && ou(this, 4);
    var e;
    0 < Q(c.$(), 5) && (e = Ag(c.$(), 0));
    e &&
      L(bf(e), 2) &&
      ((b = new he(bf(e).data[2])),
      L(b, 0) && (Mg(Gm(a)).data[0] = N(b, 0)),
      L(b, 1) && (Mg(Gm(a)).data[1] = N(b, 1, 90)),
      L(b, 2) && (Mg(Gm(a)).data[2] = N(b, 2)));
    R(this.R, a.fa());
    c = wg(c.$());
    b = new Ff(c.data[4]);
    L(b, 0) &&
      ((d = new ce(b.data[0])),
      Ug(new Hg(P(a, 26)), d.V()),
      Wg(new Hg(P(a, 26)), N(d, 0)));
    L(b, 1) &&
      ((b = new ce(b.data[1])),
      Ug(new Hg(P(a, 28)), b.V()),
      Wg(new Hg(P(a, 28)), N(b, 0)));
    L(c, 2) &&
      ((c = new ce(c.data[2])),
      Ug(new Hg(P(a, 27)), c.V()),
      Wg(new Hg(P(a, 27)), N(c, 0)));
    Bd(a, 1) ? ou(this, 4) : this.sb();
  };
  y.Kc = function(a, b, c) {
    nu.prototype.Kc.call(this, a, b, c);
    0 == a && 0 == b && 0 == c && (this.B ? ou(this, 4) : (this.W = !0));
  };
  function tu(a) {
    or(a) ||
      pr(a) ||
      (a.B && a.C && a.I.he() && (a.Zc("0|0|0") ? ou(a, 2) : ou(a, 1)));
  }
  var ru = new sl(),
    su = Rk(),
    qu = Ck();
  function uu(a) {
    this.C = null;
    this.H = this.D = this.G = 0;
    this.B = null;
    this.A = new Wm(a);
  }
  y = uu.prototype;
  y.oe = ba("C");
  y.me = w(1);
  y.start = function() {
    return this.C ? this.Sl : Qp;
  };
  y.Sl = function() {
    if (8 != an(this.A, 0) || 8 != an(this.A, 7)) {
      var a = this.C;
      a.C = mn;
      a.sb();
      return Qp;
    }
    this.H = bn(this.A, 1) || 0;
    this.G = bn(this.A, 3) || 0;
    this.D = bn(this.A, 5) || 0;
    this.I = a = an(this.A, 7) || 0;
    a += this.G * this.D;
    this.B = cn(this.A, a, 4 * this.H);
    a = this.B.length;
    for (var b = 0; b < a; ++b) this.B[b] *= -1;
    return this.el;
  };
  y.el = function() {
    var a = this.C;
    a.C = new fn(this.G, this.D, this.B, this.A, this.I);
    a.sb();
    return Qp;
  };
  function vu() {
    this.B = null;
    this.C = [];
    this.A = null;
  }
  function wu(a) {
    return 10 == a || 8 == a || 3 == a;
  }
  function xu(a) {
    var b = new Dm(),
      c = null,
      d = null,
      e = null;
    b.data[13] = L(yg(a), 5)
      ? Td(new Sd(yg(a).data[5]))
      : Td(new Sd(yg(a).data[6]));
    for (var f = 0; f < Q(a, 5); ++f) {
      var g = Ag(a, f);
      L(g, 1) &&
        ((e = e || g),
        2 === M(new Pe(g.data[0]), 0) && (c = g),
        1 === M(new Pe(g.data[0]), 0) && (d = g));
    }
    null == e && 0 < Q(a, 5) && (e = Ag(a, 0));
    f = !1;
    g = Db(zg(a).data, 3);
    for (var k = 0; k < g.length; k++)
      if (1 == g[k]) {
        f = !0;
        break;
      }
    b.data[29] = f;
    d &&
      (yu(d, b, f),
      (g = bf(d)),
      (new Fg(P(b, 9)).data[2] = N(ke(g), 2)),
      (new Fg(P(b, 9)).data[1] = N(ke(g), 3)));
    c && yu(c, b, f);
    c || d || !e || yu(e, b, f);
    if (L(a, 4)) {
      d = new $d(a.data[4]);
      c = [];
      for (e = 0; e < Q(d, 0); ++e)
        (f = new ae(Gd(d, 0, e))), c.push(Td(be(f)));
      for (e = 0; e < Q(d, 1); ++e)
        (f = new ae(Gd(d, 1, e))), c.push(Td(be(f)));
      for (e = 0; e < Q(d, 2); ++e)
        (f = new ae(Gd(d, 2, e))), c.push(Td(be(f)));
      0 < Q(d, 4) &&
        ((d = new ae(Gd(d, 4, 0))), L(d, 1) && (b.data[14] = O(d, 1)));
      b.data[11] = c.join(" ");
    }
    L(a, 1) && (b.data[0] = O(rg(a), 1));
    L(a, 2) &&
      ((c = wg(a)),
      Ug(new Hg(P(b, 3)), new ce(Hf(c).data[1]).V()),
      Wg(new Hg(P(b, 3)), N(new ce(Hf(c).data[1]), 0)),
      (b.data[4] = Q(Hf(c), 0) - 1),
      (b.data[5] = Q(Hf(c), 0) - 1),
      L(c, 2) &&
        (Ug(Og(Gm(b)), new ce(c.data[2]).V()),
        Wg(Og(Gm(b)), N(new ce(c.data[2]), 0))));
    if (
      (0 == new Hg(b.data[3]).V() || 0 == Vg(new Hg(b.data[3]))) &&
      wu(M(rg(a), 0))
    ) {
      Ug(new Hg(P(b, 3)), 512);
      Wg(new Hg(P(b, 3)), 512);
      c = Ng(b.fa());
      c = Math.max(c.V(), Vg(c));
      d = 0;
      for (e = 512; e < c; ) (e <<= 1), d++;
      c = d;
      b.data[4] = c;
      b.data[5] = c;
    }
    b.data[1] = 1 != M(new Xf(a.data[7]), 1, 1);
    return b;
  }
  function zu(a, b) {
    var c = M(wg(b), 0);
    4 == c && (a.data[0] = 1);
    wu(c) && (a.data[0] = 2);
    L(b, 4) &&
      ((c = new $d(b.data[4])),
      0 < Q(c, 1) && ((c = Td(be(new ae(Gd(c, 1, 0))))), (a.data[3] = c)));
    a.data[4] = L(yg(b), 5)
      ? Td(new Sd(yg(b).data[5]))
      : Td(new Sd(yg(b).data[6]));
    a.data[1] = O(rg(b), 1);
  }
  function Au(a) {
    switch (a) {
      case 1:
        return 7;
      case 2:
        return 0;
      case 3:
        return 4;
      case 8:
        return 9;
      case 10:
        return 10;
      case 4:
        return 1;
      default:
        return 0;
    }
  }
  function yu(a, b, c) {
    var d = Gm(b),
      e = bf(a),
      f = new ne();
    R(new de(P(f, 0)), e);
    fu(f, d);
    L(Lg(d), 1) || (Mg(d).data[1] = 90);
    c = c ? 1.5 : 3;
    L(Jg(d), 0) || Sg(Kg(d), c);
    b.data[23] = N(new ge(e.data[1]), 0) ? N(new ge(e.data[1]), 0) : 3;
    L(new he(e.data[2]), 0) && (b.data[10] = N(new he(e.data[2]), 0));
    L(e, 3) && (b.data[2] = O(new ie(e.data[3]), 0, ""));
    for (d = 0; d < Q(a, 12); ++d)
      if (((f = new Ne(Gd(a, 12, d))), Q(f, 0))) {
        var g = new Me(Gd(f, 0, 0));
        g = Td(new Sd(g.data[2]));
        for (var k = 0; k < Q(f, 1); ++k) {
          var l = new Fm(Fd(b, 19));
          new ah(P(l, 4)).data[1] = 0;
          new ah(P(l, 4)).data[2] = 1;
          l.data[3] = g;
          var m = Ed(f, 1, k);
          l.data[0] = m;
        }
      }
    for (d = 0; d < Q(a, 6); ++d)
      if (
        ((f = new Se(Gd(a, 6, d))),
        L(f, 0) && ((k = ef(new Ve(a.data[3]), N(f, 0))), L(k, 2)))
      ) {
        l = new Fm(Fd(b, 19));
        f = N(ke(new de(k.data[2])), 2);
        g = N(ke(new de(k.data[2])), 3);
        m = xb(N(ke(e), 2));
        var n = xb(f),
          p = xb(g) - xb(N(ke(e), 3));
        p > Math.PI ? (p -= 2 * Math.PI) : p < -Math.PI && (p += 2 * Math.PI);
        Dk(vn, 0, 0, 1);
        Dk(wn, Math.cos(m), 0, Math.sin(m));
        Dk(
          xn,
          Math.cos(p) * Math.cos(n),
          Math.sin(p) * Math.cos(n),
          Math.sin(n)
        );
        Kk(xn, wn, yn);
        l.data[0] =
          (360 +
            yb(
              Math.atan2(
                (0 < p ? 1 : 0 > p ? -1 : p) *
                  Math.sqrt(yn[0] * yn[0] + yn[2] * yn[2]),
                yn[1]
              )
            )) %
          360;
        l = new ah(P(l, 4));
        m = Au(M(df(k), 0));
        l.data[1] = m;
        l.data[2] = 1;
        l.data[0] = O(df(k), 1);
        k = Kg(fh(l));
        k.data[2] = f;
        k.data[1] = g;
        Sg(k, c);
      }
    for (e = 0; e < Q(a, 7); ++e)
      (c = N(new Te(Gd(a, 7, e)), 0)),
        0 > c ||
          c >= Q(new Ve(a.data[3]), 0) ||
          ((c = ef(new Ve(a.data[3]), c)),
          (d = new ie(new de(c.data[2]).data[3])),
          (f = new Em(Fd(b, 20))),
          (f.data[1] = O(df(c), 1)),
          (f.data[0] = O(d, 0, "")),
          (f.data[2] = N(d, 1)),
          L(d, 3) && (f.data[4] = Td(new Sd(d.data[3]))),
          L(d, 2) && (f.data[3] = Td(new Sd(d.data[2]))));
  }
  function Bu(a) {
    this.A = a;
  }
  Bu.prototype.Da = function(a, b) {
    a = new vu();
    a.A = jt.wh(this.A);
    if (a.A) {
      a.B = xu(a.A);
      var c = new uu("");
      a.C.push(c);
      b(a);
    } else b(null);
  };
  function Cu(a) {
    U.call(this, "CUCS", [].concat(wa(arguments)));
  }
  C(Cu, U);
  function Du(a, b, c) {
    a(new Bu(c));
  }
  function Eu() {
    this.A = {};
    this.ca = "";
  }
  function Fu() {}
  Fu.prototype.A = function(a) {
    a: {
      if ((a = a.A)) {
        var b = [];
        for (c in a) Bs(c, a[c], b);
        var c = b.join("&");
        if ("" != c) break a;
      }
      c = "";
    }
    return c;
  };
  function Gu(a, b) {
    this.A = [];
    for (var c = 0; c < b.length; c++) this.A.push(new Es(b[c]));
    this.B = a;
    this.C = new Fu();
  }
  Gu.prototype.Bb = function(a, b, c, d, e, f) {
    var g = new Eu();
    a = ku(no(a.Ba()));
    if (!a) return Ha;
    g.A.panoid = a;
    g.A.output = "tile";
    g.A.x = "" + b;
    g.A.y = "" + c;
    g.A.zoom = "" + d;
    g.A.nbt = "";
    g.A.fover = "2";
    b = this.A[(b + c) % this.A.length];
    e = f.va(e, "cts-get-tile");
    f = this.B;
    b = b.toString();
    g = this.C.A(g);
    return it(f, -1 == b.indexOf("?") ? b + "?" + g : b + "&" + g, e, void 0);
  };
  Gu.prototype.Cb = h();
  function Hu(a, b) {
    U.call(this, "CTS", [].concat(wa(arguments)));
  }
  C(Hu, U);
  function Iu(a, b, c, d) {
    b = new Gu(c, d);
    a(b);
  }
  function Ju(a) {
    this.B = null;
    this.F = this.G = this.A = this.D = this.C = 0;
    this.H = !1;
    a && Ku(this, a);
  }
  var Lu = [];
  Ju.prototype.clear = function() {
    this.B = null;
    this.A = this.D = this.C = 0;
    this.H = !1;
  };
  function Ku(a, b) {
    b =
      b.constructor === Uint8Array
        ? b
        : b.constructor === ArrayBuffer
          ? new Uint8Array(b)
          : b.constructor === Array
            ? new Uint8Array(b)
            : b.constructor === String ? vd(b) : new Uint8Array(0);
    a.B = b;
    a.C = F(void 0) ? void 0 : 0;
    a.D = F(void 0) ? a.C + void 0 : a.B.length;
    a.A = a.C;
  }
  Ju.prototype.reset = function() {
    this.A = this.C;
  };
  Ju.prototype.getError = function() {
    return this.H || 0 > this.A || this.A > this.D;
  };
  function Mu(a) {
    var b = a.B;
    var c = b[a.A + 0];
    var d = c & 127;
    if (128 > c) return (a.A += 1), d;
    c = b[a.A + 1];
    d |= (c & 127) << 7;
    if (128 > c) return (a.A += 2), d;
    c = b[a.A + 2];
    d |= (c & 127) << 14;
    if (128 > c) return (a.A += 3), d;
    c = b[a.A + 3];
    d |= (c & 127) << 21;
    if (128 > c) return (a.A += 4), d;
    c = b[a.A + 4];
    d |= (c & 15) << 28;
    if (128 > c) return (a.A += 5), d >>> 0;
    a.A += 5;
    128 <= b[a.A++] &&
      128 <= b[a.A++] &&
      128 <= b[a.A++] &&
      128 <= b[a.A++] &&
      a.A++;
    return d;
  }
  function Nu() {
    this.A = [];
  }
  Nu.prototype.length = function() {
    return this.A.length;
  };
  function Ou(a) {
    var b = a.A;
    a.A = [];
    return b;
  }
  function Pu(a, b) {
    for (; 127 < b; ) a.A.push((b & 127) | 128), (b >>>= 7);
    a.A.push(b);
  }
  function Qu(a) {
    if (Lu.length) {
      var b = Lu.pop();
      a && Ku(b, a);
      a = b;
    } else a = new Ju(a);
    this.A = a;
    this.F = this.A.A;
    this.B = this.C = -1;
    this.D = !1;
  }
  Qu.prototype.getError = function() {
    return this.D || this.A.getError();
  };
  Qu.prototype.reset = function() {
    this.A.reset();
    this.B = this.C = -1;
  };
  function Ru(a) {
    var b = a.A;
    if (b.A == b.D || a.getError()) return !1;
    a.F = a.A.A;
    b = Mu(a.A);
    var c = b & 7;
    if (0 != c && 5 != c && 1 != c && 2 != c && 3 != c && 4 != c)
      return (a.D = !0), !1;
    a.C = b >>> 3;
    a.B = c;
    return !0;
  }
  function Su(a) {
    switch (a.B) {
      case 0:
        if (0 != a.B) Su(a);
        else {
          for (a = a.A; a.B[a.A] & 128; ) a.A++;
          a.A++;
        }
        break;
      case 1:
        1 != a.B ? Su(a) : ((a = a.A), (a.A += 8));
        break;
      case 2:
        if (2 != a.B) Su(a);
        else {
          var b = Mu(a.A);
          a = a.A;
          a.A += b;
        }
        break;
      case 5:
        5 != a.B ? Su(a) : ((a = a.A), (a.A += 4));
        break;
      case 3:
        b = a.C;
        do {
          if (!Ru(a)) {
            a.D = !0;
            break;
          }
          if (4 == a.B) {
            a.C != b && (a.D = !0);
            break;
          }
          Su(a);
        } while (1);
    }
  }
  function Tu() {
    this.C = [];
    this.B = 0;
    this.A = new Nu();
  }
  Tu.prototype.reset = function() {
    this.C = [];
    Ou(this.A);
    this.B = 0;
  };
  function Uu() {}
  var Vu = "function" == typeof Uint8Array;
  function Wu(a, b) {
    a.A = null;
    b || (b = []);
    a.O = void 0;
    a.D = -1;
    a.C = b;
    a: {
      if ((b = a.C.length)) {
        --b;
        var c = a.C[b];
        if (
          c &&
          "object" == typeof c &&
          !Ka(c) &&
          !(Vu && c instanceof Uint8Array)
        ) {
          a.F = b - a.D;
          a.B = c;
          break a;
        }
      }
      a.F = Number.MAX_VALUE;
    }
    a.M = {};
  }
  var Xu = [];
  function V(a, b) {
    if (b < a.F) {
      b += a.D;
      var c = a.C[b];
      return c === Xu ? (a.C[b] = []) : c;
    }
    if (a.B) return (c = a.B[b]), c === Xu ? (a.B[b] = []) : c;
  }
  function Yu(a, b) {
    a = V(a, b);
    return null == a ? a : +a;
  }
  function Zu(a, b) {
    a = V(a, b);
    return null == a ? !1 : a;
  }
  function X(a, b, c) {
    if (b < a.F) a.C[b + a.D] = c;
    else {
      var d = a.F + a.D;
      a.C[d] || (a.B = a.C[d] = {});
      a.B[b] = c;
    }
  }
  function $u(a) {
    if (a.A)
      for (var b in a.A) {
        var c = a.A[b];
        if (Ka(c)) for (var d = 0; d < c.length; d++) c[d] && c[d].Sa();
        else c && c.Sa();
      }
  }
  Uu.prototype.Sa = function() {
    $u(this);
    return this.C;
  };
  Uu.prototype.toString = function() {
    $u(this);
    return this.C.toString();
  };
  Uu.prototype.getExtension = function(a) {
    if (this.B) {
      this.A || (this.A = {});
      var b = a.C;
      if (a.D) {
        if (a.B())
          return (
            this.A[b] ||
              (this.A[b] = bb(this.B[b] || [], function(b) {
                return new a.A(b);
              })),
            this.A[b]
          );
      } else if (a.B())
        return (
          !this.A[b] && this.B[b] && (this.A[b] = new a.A(this.B[b])), this.A[b]
        );
      return this.B[b];
    }
  };
  var av = /^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(lh[3-6]\.(googleadsserving\.cn|xn--9kr7l\.com))|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\//i,
    bv = /^(https?:)?\/\/sp[1-4]\.((ggpht)|(googleusercontent))\.com\//i,
    cv = /^(https?:)?\/\/(qa(-red|-blue)?|dev2?|image-dev)(-|\.)lighthouse(-auth)?\.sandbox\.google\.com\//i,
    dv = /^(https?:)?\/\/lighthouse-(qa(-red|-blue)?|dev2)\.corp\.google\.com\//i;
  function ev(a) {
    Wu(this, a);
  }
  I(ev, Uu);
  y = ev.prototype;
  y.ve = function() {
    return V(this, 1);
  };
  y.Fh = function(a) {
    X(this, 1, a);
  };
  y.V = function() {
    return V(this, 12);
  };
  y.Mh = function(a) {
    X(this, 12, a);
  };
  y.yf = function() {
    return V(this, 13);
  };
  y.Ch = function(a) {
    X(this, 13, a);
  };
  y.sk = function() {
    return V(this, 33);
  };
  y.gn = function(a) {
    X(this, 33, a);
  };
  y.Eg = function() {
    return Zu(this, 2);
  };
  y.Bh = function(a) {
    X(this, 2, a);
  };
  y.Cg = function() {
    return V(this, 51);
  };
  y.Ah = function(a) {
    X(this, 51, a);
  };
  y.Gg = function() {
    return V(this, 32);
  };
  y.Dh = function(a) {
    X(this, 32, a);
  };
  y.Ng = function() {
    return Zu(this, 19);
  };
  y.Gh = function(a) {
    X(this, 19, a);
  };
  y.Og = function() {
    return Zu(this, 52);
  };
  y.Hh = function(a) {
    X(this, 52, a);
  };
  y.Pg = function() {
    return Zu(this, 67);
  };
  y.Ih = function(a) {
    X(this, 67, a);
  };
  y.vj = function() {
    return V(this, 80);
  };
  y.gm = function(a) {
    X(this, 80, a);
  };
  y.Bg = function() {
    return Zu(this, 20);
  };
  y.zh = function(a) {
    X(this, 20, a);
  };
  y.Lg = function() {
    return V(this, 60);
  };
  y.Eh = function(a) {
    X(this, 60, a);
  };
  y.wj = function() {
    return Zu(this, 3);
  };
  y.hm = function(a) {
    X(this, 3, a);
  };
  y.Jj = function() {
    return Zu(this, 4);
  };
  y.vm = function(a) {
    X(this, 4, a);
  };
  y.Qj = function() {
    return V(this, 65);
  };
  y.Em = function(a) {
    X(this, 65, a);
  };
  y.Aj = function() {
    return V(this, 94);
  };
  y.lm = function(a) {
    X(this, 94, a);
  };
  y.Qg = function() {
    return V(this, 9);
  };
  y.Jh = function(a) {
    X(this, 9, a);
  };
  y.Rg = function() {
    return V(this, 10);
  };
  y.Kh = function(a) {
    X(this, 10, a);
  };
  y.yh = function() {
    return V(this, 11);
  };
  y.Lh = function(a) {
    X(this, 11, a);
  };
  y.yk = function() {
    return Zu(this, 14);
  };
  y.mn = function(a) {
    X(this, 14, a);
  };
  y.Fj = function() {
    return Zu(this, 34);
  };
  y.qm = function(a) {
    X(this, 34, a);
  };
  y.zk = function() {
    return Zu(this, 72);
  };
  y.nn = function(a) {
    X(this, 72, a);
  };
  y.zj = function() {
    return V(this, 15);
  };
  y.km = function(a) {
    X(this, 15, a);
  };
  y.Mj = function() {
    return V(this, 16);
  };
  y.ym = function(a) {
    X(this, 16, a);
  };
  y.Pj = function() {
    return V(this, 17);
  };
  y.Dm = function(a) {
    X(this, 17, a);
  };
  y.Sg = function() {
    return V(this, 18);
  };
  y.pn = function(a) {
    X(this, 18, a);
  };
  y.Tg = function() {
    return V(this, 45);
  };
  y.qn = function(a) {
    X(this, 45, a);
  };
  y.Nj = function() {
    return V(this, 22);
  };
  y.Am = function(a) {
    X(this, 22, a);
  };
  y.Oj = function() {
    return V(this, 54);
  };
  y.Bm = function(a) {
    X(this, 54, a);
  };
  y.uk = function() {
    return V(this, 82);
  };
  y.jn = function(a) {
    X(this, 82, a);
  };
  y.ck = function() {
    return V(this, 83);
  };
  y.Sm = function(a) {
    X(this, 83, a);
  };
  y.vk = function() {
    return V(this, 93);
  };
  y.kn = function(a) {
    X(this, 93, a);
  };
  y.tk = function() {
    return V(this, 95);
  };
  y.hn = function(a) {
    X(this, 95, a);
  };
  y.yj = function() {
    return V(this, 21);
  };
  y.jm = function(a) {
    X(this, 21, a);
  };
  y.tj = function() {
    return Zu(this, 23);
  };
  y.dm = function(a) {
    X(this, 23, a);
  };
  y.Xl = function() {
    return V(this, 24);
  };
  y.on = function(a) {
    X(this, 24, a);
  };
  y.Ak = function() {
    return V(this, 36);
  };
  y.rn = function(a) {
    X(this, 36, a);
  };
  y.rk = function() {
    return Zu(this, 6);
  };
  y.fn = function(a) {
    X(this, 6, a);
  };
  y.pk = function() {
    return V(this, 26);
  };
  y.dn = function(a) {
    X(this, 26, a);
  };
  y.Ij = function() {
    return V(this, 30);
  };
  y.um = function(a) {
    X(this, 30, a);
  };
  y.Bk = function() {
    return V(this, 31);
  };
  y.sn = function(a) {
    X(this, 31, a);
  };
  y.Wl = function() {
    return V(this, 27);
  };
  y.Om = function(a) {
    X(this, 27, a);
  };
  y.fk = function() {
    return V(this, 28);
  };
  y.Vm = function(a) {
    X(this, 28, a);
  };
  y.jk = function() {
    return V(this, 57);
  };
  y.Zm = function(a) {
    X(this, 57, a);
  };
  y.kk = function() {
    return V(this, 58);
  };
  y.$m = function(a) {
    X(this, 58, a);
  };
  y.hk = function() {
    return V(this, 59);
  };
  y.Xm = function(a) {
    X(this, 59, a);
  };
  y.lk = function() {
    return Zu(this, 35);
  };
  y.an = function(a) {
    X(this, 35, a);
  };
  y.mk = function() {
    return Zu(this, 41);
  };
  y.bn = function(a) {
    X(this, 41, a);
  };
  y.gk = function() {
    return Zu(this, 64);
  };
  y.Wm = function(a) {
    X(this, 64, a);
  };
  y.Zj = function() {
    return Zu(this, 48);
  };
  y.Nm = function(a) {
    X(this, 48, a);
  };
  y.ik = function() {
    return Zu(this, 49);
  };
  y.Ym = function(a) {
    X(this, 49, a);
  };
  y.Wj = function() {
    return Zu(this, 37);
  };
  y.Km = function(a) {
    X(this, 37, a);
  };
  y.sj = function() {
    return V(this, 38);
  };
  y.cm = function(a) {
    X(this, 38, a);
  };
  y.qj = function() {
    return V(this, 86);
  };
  y.bm = function(a) {
    X(this, 86, a);
  };
  y.pj = function() {
    return V(this, 39);
  };
  y.am = function(a) {
    X(this, 39, a);
  };
  y.nj = function() {
    return V(this, 87);
  };
  y.Zl = function(a) {
    X(this, 87, a);
  };
  y.$j = function() {
    return V(this, 88);
  };
  y.Pm = function(a) {
    X(this, 88, a);
  };
  y.xk = function() {
    return V(this, 89);
  };
  y.ln = function(a) {
    X(this, 89, a);
  };
  y.Xj = function() {
    return V(this, 40);
  };
  y.Lm = function(a) {
    X(this, 40, a);
  };
  y.Dj = function() {
    return V(this, 42);
  };
  y.om = function(a) {
    X(this, 42, a);
  };
  y.Cj = function() {
    return V(this, 43);
  };
  y.nm = function(a) {
    X(this, 43, a);
  };
  y.ek = function() {
    return V(this, 44);
  };
  y.Um = function(a) {
    X(this, 44, a);
  };
  y.dk = function() {
    return V(this, 62);
  };
  y.Tm = function(a) {
    X(this, 62, a);
  };
  y.Yj = function() {
    return V(this, 46);
  };
  y.Mm = function(a) {
    X(this, 46, a);
  };
  y.bk = function() {
    return V(this, 61);
  };
  y.Rm = function(a) {
    X(this, 61, a);
  };
  y.Gj = function() {
    return V(this, 50);
  };
  y.rm = function(a) {
    X(this, 50, a);
  };
  y.Vj = function() {
    return V(this, 53);
  };
  y.Jm = function(a) {
    X(this, 53, a);
  };
  y.Uj = function() {
    return V(this, 55);
  };
  y.Im = function(a) {
    X(this, 55, a);
  };
  y.qk = function() {
    return V(this, 56);
  };
  y.en = function(a) {
    X(this, 56, a);
  };
  y.Dk = function() {
    return V(this, 63);
  };
  y.un = function(a) {
    X(this, 63, a);
  };
  y.Fk = function() {
    return V(this, 81);
  };
  y.wn = function(a) {
    X(this, 81, a);
  };
  y.xj = function() {
    return V(this, 90);
  };
  y.im = function(a) {
    X(this, 90, a);
  };
  y.Ck = function() {
    return V(this, 68);
  };
  y.tn = function(a) {
    X(this, 68, a);
  };
  y.Ek = function() {
    return V(this, 69);
  };
  y.vn = function(a) {
    X(this, 69, a);
  };
  y.Rj = function() {
    return V(this, 66);
  };
  y.Fm = function(a) {
    X(this, 66, a);
  };
  y.Lj = function() {
    return V(this, 70);
  };
  y.xm = function(a) {
    X(this, 70, a);
  };
  y.Vl = function() {
    return V(this, 71);
  };
  y.Cm = function(a) {
    X(this, 71, a);
  };
  y.Sj = function() {
    return V(this, 73);
  };
  y.Gm = function(a) {
    X(this, 73, a);
  };
  y.Ej = function() {
    return V(this, 84);
  };
  y.pm = function(a) {
    X(this, 84, a);
  };
  y.Tj = function() {
    return V(this, 91);
  };
  y.Hm = function(a) {
    X(this, 91, a);
  };
  y.Kj = function() {
    return V(this, 96);
  };
  y.wm = function(a) {
    X(this, 96, a);
  };
  y.mj = function() {
    return V(this, 74);
  };
  y.Yl = function(a) {
    X(this, 74, a);
  };
  y.Ul = function() {
    return V(this, 75);
  };
  y.zm = function(a) {
    X(this, 75, a);
  };
  y.ak = function() {
    return Yu(this, 76);
  };
  y.Qm = function(a) {
    X(this, 76, a);
  };
  y.Gk = function() {
    return Yu(this, 77);
  };
  y.xn = function(a) {
    X(this, 77, a);
  };
  y.nk = function() {
    return Yu(this, 78);
  };
  y.cn = function(a) {
    X(this, 78, a);
  };
  y.Hj = function() {
    return Yu(this, 79);
  };
  y.tm = function(a) {
    X(this, 79, a);
  };
  y.oj = function() {
    return V(this, 85);
  };
  y.$l = function(a) {
    X(this, 85, a);
  };
  y.uj = function() {
    return V(this, 92);
  };
  y.em = function(a) {
    X(this, 92, a);
  };
  function Y() {
    Wu(this, void 0);
  }
  I(Y, ev);
  Y.prototype.J = ba("G");
  Y.prototype.I = u("G");
  Y.prototype.L = ba("H");
  Y.prototype.K = u("H");
  function fv(a, b) {
    var c = Array.prototype.slice.call(arguments),
      d = c.shift();
    if ("undefined" == typeof d)
      throw Error("[goog.string.format] Template required");
    d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(
      a,
      b,
      d,
      k,
      l,
      m,
      n,
      p
    ) {
      if ("%" == m) return "%";
      var e = c.shift();
      if ("undefined" == typeof e)
        throw Error("[goog.string.format] Not enough arguments");
      arguments[0] = e;
      return gv[m].apply(null, arguments);
    });
  }
  var gv = {
    s: function(a, b, c) {
      return isNaN(c) || "" == c || a.length >= Number(c)
        ? a
        : (a =
            -1 < b.indexOf("-", 0)
              ? a + mc(" ", Number(c) - a.length)
              : mc(" ", Number(c) - a.length) + a);
    },
    f: function(a, b, c, d, e) {
      d = a.toString();
      isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
      var f =
        0 > Number(a)
          ? "-"
          : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
      0 <= Number(a) && (d = f + d);
      if (isNaN(c) || d.length >= Number(c)) return d;
      d = isNaN(e)
        ? Math.abs(Number(a)).toString()
        : Math.abs(Number(a)).toFixed(e);
      a = Number(c) - d.length - f.length;
      return (d =
        0 <= b.indexOf("-", 0)
          ? f + d + mc(" ", a)
          : f + mc(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d);
    },
    d: function(a, b, c, d, e, f, g, k) {
      return gv.f(parseInt(a, 10), b, c, d, 0, f, g, k);
    }
  };
  gv.i = gv.d;
  gv.u = gv.d;
  function hv() {
    this.A = void 0;
    this.Fa = {};
  }
  y = hv.prototype;
  y.set = function(a, b) {
    iv(this, a, b, !1);
  };
  y.add = function(a, b) {
    iv(this, a, b, !0);
  };
  function iv(a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
      var f = b.charAt(e);
      a.Fa[f] || (a.Fa[f] = new hv());
      a = a.Fa[f];
    }
    if (d && void 0 !== a.A)
      throw Error('The collection already contains the key "' + b + '"');
    a.A = c;
  }
  function jv(a, b) {
    for (var c = 0; c < b.length; c++)
      if (((a = a.Fa[b.charAt(c)]), !a)) return;
    return a;
  }
  y.get = function(a) {
    return (a = jv(this, a)) ? a.A : void 0;
  };
  y.Ha = function() {
    var a = [];
    kv(this, a);
    return a;
  };
  function kv(a, b) {
    void 0 !== a.A && b.push(a.A);
    for (var c in a.Fa) kv(a.Fa[c], b);
  }
  y.ob = function(a) {
    var b = [];
    if (a) {
      for (var c = this, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (!c.Fa[e]) return [];
        c = c.Fa[e];
      }
      lv(c, a, b);
    } else lv(this, "", b);
    return b;
  };
  function lv(a, b, c) {
    void 0 !== a.A && c.push(b);
    for (var d in a.Fa) lv(a.Fa[d], b + d, c);
  }
  y.clear = function() {
    this.Fa = {};
    this.A = void 0;
  };
  y.remove = function(a) {
    for (var b = this, c = [], d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if (!b.Fa[e])
        throw Error('The collection does not have the key "' + a + '"');
      c.push([b, e]);
      b = b.Fa[e];
    }
    a = b.A;
    for (delete b.A; 0 < c.length; )
      if (((e = c.pop()), (b = e[0]), (e = e[1]), b.Fa[e].Ya())) delete b.Fa[e];
      else break;
    return a;
  };
  y.Ya = function() {
    return void 0 === this.A && Bc(this.Fa);
  };
  function mv() {
    if (!nv) {
      var a = (nv = new hv()),
        b;
      for (b in ov) a.add(b, ov[b]);
    }
  }
  var nv;
  function Z(a, b) {
    this.A = a;
    this.B = b;
  }
  var ov = {
    a: new Z([3, 0], [Y.prototype.jm, Y.prototype.en]),
    al: new Z([3], [Y.prototype.Yl]),
    b: new Z([3, 0], [Y.prototype.dm, Y.prototype.cm]),
    ba: new Z([0], [Y.prototype.$l]),
    bc: new Z([0], [Y.prototype.Zl]),
    br: new Z([0], [Y.prototype.bm]),
    c: new Z([3, 0], [Y.prototype.Bh, Y.prototype.am]),
    cc: new Z([3], [Y.prototype.Ah]),
    ci: new Z([3], [Y.prototype.Dh]),
    cp: new Z([0], [Y.prototype.em]),
    cv: new Z([0], [Y.prototype.lm]),
    d: new Z([3], [Y.prototype.hm]),
    df: new Z([3], [Y.prototype.gm]),
    dv: new Z([3], [Y.prototype.im]),
    e: new Z([0], [Y.prototype.km]),
    f: new Z([4], [Y.prototype.ym]),
    fg: new Z([3], [Y.prototype.qm]),
    fh: new Z([3], [Y.prototype.um]),
    fm: new Z([3], [Y.prototype.pm]),
    fo: new Z([2], [Y.prototype.tm]),
    ft: new Z([3], [Y.prototype.rm]),
    fv: new Z([3], [Y.prototype.sn]),
    g: new Z([3], [Y.prototype.mn]),
    gd: new Z([3], [Y.prototype.Sm]),
    h: new Z([3, 0], [Y.prototype.vm, Y.prototype.Ch]),
    i: new Z([3], [Y.prototype.Am]),
    ic: new Z([0], [Y.prototype.Cm]),
    id: new Z([3], [Y.prototype.xm]),
    il: new Z([3], [Y.prototype.wm]),
    ip: new Z([3], [Y.prototype.Bm]),
    iv: new Z([0], [Y.prototype.zm]),
    j: new Z([1], [Y.prototype.J]),
    k: new Z([3, 0], [Y.prototype.Dm, Y.prototype.om]),
    l: new Z([0], [Y.prototype.Um]),
    lf: new Z([3], [Y.prototype.Em]),
    m: new Z([0], [Y.prototype.un]),
    md: new Z([3], [Y.prototype.Hm]),
    mm: new Z([4], [Y.prototype.wn]),
    mo: new Z([3], [Y.prototype.Gm]),
    mv: new Z([3], [Y.prototype.Fm]),
    n: new Z([3], [Y.prototype.zh]),
    nc: new Z([3], [Y.prototype.Im]),
    nd: new Z([3], [Y.prototype.Jm]),
    ng: new Z([3], [Y.prototype.hn]),
    no: new Z([3], [Y.prototype.Km]),
    ns: new Z([3], [Y.prototype.Lm]),
    nt0: new Z([4], [Y.prototype.rn]),
    nu: new Z([3], [Y.prototype.Mm]),
    nw: new Z([3], [Y.prototype.Nm]),
    o: new Z([1, 3], [Y.prototype.L, Y.prototype.Om]),
    p: new Z([3, 0], [Y.prototype.Gh, Y.prototype.nm]),
    pa: new Z([3], [Y.prototype.Rm]),
    pc: new Z([0], [Y.prototype.Pm]),
    pd: new Z([3], [Y.prototype.Eh]),
    pf: new Z([3], [Y.prototype.Ih]),
    pg: new Z([3], [Y.prototype.nn]),
    pi: new Z([2], [Y.prototype.Qm]),
    pp: new Z([3], [Y.prototype.Hh]),
    q: new Z([4], [Y.prototype.Vm]),
    r: new Z([3, 0], [Y.prototype.fn, Y.prototype.dn]),
    rg: new Z([3], [Y.prototype.Xm]),
    rh: new Z([3], [Y.prototype.Ym]),
    rj: new Z([3], [Y.prototype.Zm]),
    ro: new Z([2], [Y.prototype.cn]),
    rp: new Z([3], [Y.prototype.$m]),
    rw: new Z([3], [Y.prototype.an]),
    rwa: new Z([3], [Y.prototype.Wm]),
    rwu: new Z([3], [Y.prototype.bn]),
    s: new Z([3, 0], [Y.prototype.gn, Y.prototype.Fh]),
    sc: new Z([0], [Y.prototype.ln]),
    sg: new Z([3], [Y.prototype.jn]),
    sm: new Z([3], [Y.prototype.kn]),
    t: new Z([4], [Y.prototype.on]),
    u: new Z([3], [Y.prototype.pn]),
    ut: new Z([3], [Y.prototype.qn]),
    v: new Z([0], [Y.prototype.Tm]),
    vb: new Z([0], [Y.prototype.tn]),
    vl: new Z([0], [Y.prototype.vn]),
    w: new Z([0], [Y.prototype.Mh]),
    x: new Z([0], [Y.prototype.Jh]),
    y: new Z([0], [Y.prototype.Kh]),
    ya: new Z([2], [Y.prototype.xn]),
    z: new Z([0], [Y.prototype.Lh])
  };
  function pv(a, b) {
    fv("For token '%s': %s", a, b);
  }
  function qv(a, b) {
    var c = new Y(),
      d = new Y();
    if ("" != b) {
      b = b.split("-");
      for (var e = 0; e < b.length; e++) {
        var f = b[e];
        if (0 != f.length) {
          var g = f,
            k = !1,
            l = g;
          var m = g.substring(0, 1);
          m != m.toLowerCase() &&
            ((k = !0), (l = g.substring(0, 1).toLowerCase() + g.substring(1)));
          var n = nv;
          for (m = 1; m <= l.length; ++m) {
            var p = n,
              q = l.substring(0, m);
            if (0 == q.length ? p.Ya() : !jv(p, q)) break;
          }
          m =
            1 == m
              ? null
              : (l = n.get(l.substring(0, m - 1)))
                ? {
                    Ll: g.substring(0, m - 1),
                    value: g.substring(m - 1),
                    Dn: k,
                    attributes: l
                  }
                : null;
          if (m) {
            g = [];
            k = [];
            l = !1;
            for (n = 0; n < m.attributes.A.length; n++) {
              p = m.attributes.A[n];
              var t = m.value;
              q = e;
              if (m.Dn && 1 == p)
                for (var r = t.length; 12 > r && q < b.length - 1; )
                  (t += "-" + b[q + 1]), (r = t.length), ++q;
              else if (2 == p)
                for (; q < b.length - 1 && b[q + 1].match(/^[\d\.]/); )
                  (t += "-" + b[q + 1]), ++q;
              r = m.attributes.B[n];
              t = rv(a, p)(m.Ll, t, c, d, r);
              if (null === t) {
                l = !0;
                e = q;
                break;
              } else g.push(p), k.push(t);
            }
            if (!l)
              for (m = 0; m < k.length; m++)
                (l = g[m]), (t = k[m]), sv(a, l)(f, t);
          }
        }
      }
    }
    return new tv(c, d);
  }
  function uv(a, b, c, d, e) {
    e.apply(c, [b]);
    a = a.substring(0, 1);
    e.apply(d, [a == a.toUpperCase()]);
  }
  y = mv.prototype;
  y.Pl = function(a, b, c, d, e) {
    if ("" == b) return 0;
    isFinite(b) && (b = String(b));
    b = Aa(b) ? (/^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10)) : NaN;
    if (isNaN(b)) return 1;
    uv(a, b, c, d, e);
    return null;
  };
  y.$k = function(a, b) {
    switch (b) {
      case 1:
        pv(a, "Option value could not be interpreted as an integer.");
        break;
      case 0:
        pv(a, "Missing value for integer option.");
    }
  };
  y.Ol = function(a, b, c, d, e) {
    if ("" == b) return 0;
    var f = Number(b);
    b = 0 == f && /^[\s\xa0]*$/.test(b) ? NaN : f;
    if (isNaN(b)) return 1;
    uv(a, b, c, d, e);
    return null;
  };
  y.Zk = function(a, b) {
    switch (b) {
      case 1:
        pv(a, "Option value could not be interpreted as a float.");
        break;
      case 0:
        pv(a, "Missing value for float option.");
    }
  };
  y.Nl = function(a, b, c, d, e) {
    if ("" != b) return 2;
    uv(a, !0, c, d, e);
    return null;
  };
  y.Yk = function(a, b) {
    switch (b) {
      case 2:
        pv(a, "Unexpected value specified for boolean option.");
    }
  };
  y.Ql = function(a, b, c, d, e) {
    if ("" == b) return 0;
    uv(a, b, c, d, e);
    return null;
  };
  y.bl = function(a, b) {
    switch (b) {
      case 0:
        pv(a, "Missing value for string option.");
    }
  };
  function rv(a, b) {
    switch (b) {
      case 0:
        return G(a.Pl, a);
      case 2:
        return G(a.Ol, a);
      case 3:
        return G(a.Nl, a);
      case 4:
      case 1:
        return G(a.Ql, a);
      default:
        return h();
    }
  }
  function sv(a, b) {
    switch (b) {
      case 0:
        return G(a.$k, a);
      case 2:
        return G(a.Zk, a);
      case 3:
        return G(a.Yk, a);
      case 4:
      case 1:
        return G(a.bl, a);
      default:
        return h();
    }
  }
  function tv(a, b) {
    this.A = a;
    this.B = b;
  }
  function vv(a, b) {
    null != a && this.fe.apply(this, arguments);
  }
  y = vv.prototype;
  y.dc = "";
  y.set = function(a) {
    this.dc = "" + a;
  };
  y.fe = function(a, b, c) {
    this.dc += String(a);
    if (null != b)
      for (var d = 1; d < arguments.length; d++) this.dc += arguments[d];
    return this;
  };
  y.clear = function() {
    this.dc = "";
  };
  y.toString = u("dc");
  function wv(a) {
    this.D = null;
    this.C = [];
    this.B = null;
    this.B = a ? (Aa(a) ? qv(xv(this), a) : a) : qv(xv(this), "");
  }
  y = wv.prototype;
  y.ce = u("B");
  function xv(a) {
    null == a.D && (a.D = new mv());
    return a.D;
  }
  function yv(a, b, c, d) {
    b || ("number" == typeof b && 0 == b) || (b = void 0);
    var e = a.B.A;
    a = a.B.B;
    var f = c.call(e);
    b != f && (void 0 != f && c.call(a), d.call(e, b));
  }
  y.Fe = function(a) {
    yv(this, a, Y.prototype.Eg, Y.prototype.Bh);
    return this;
  };
  y.Ee = function(a) {
    yv(this, a, Y.prototype.Cg, Y.prototype.Ah);
    return this;
  };
  y.Ge = function(a) {
    yv(this, a, Y.prototype.Gg, Y.prototype.Dh);
    return this;
  };
  y.Td = function(a) {
    yv(this, a, Y.prototype.yf, Y.prototype.Ch);
    return this;
  };
  y.De = function(a) {
    yv(this, a, Y.prototype.Bg, Y.prototype.zh);
    return this;
  };
  y.Ie = function(a) {
    yv(this, a, Y.prototype.Ng, Y.prototype.Gh);
    return this;
  };
  y.He = function(a) {
    yv(this, a, Y.prototype.Lg, Y.prototype.Eh);
    return this;
  };
  y.Ke = function(a) {
    yv(this, a, Y.prototype.Pg, Y.prototype.Ih);
    return this;
  };
  y.Je = function(a) {
    yv(this, a, Y.prototype.Og, Y.prototype.Hh);
    return this;
  };
  y.qc = function(a) {
    yv(this, a, Y.prototype.ve, Y.prototype.Fh);
    return this;
  };
  y.Ud = function(a) {
    yv(this, a, Y.prototype.V, Y.prototype.Mh);
    return this;
  };
  y.Oc = function() {
    this.C.length = 0;
    zv(this, "s", Y.prototype.ve);
    zv(this, "w", Y.prototype.V);
    Av(this, "c", Y.prototype.Eg);
    zv(this, "c", Y.prototype.pj, 16, 6);
    Av(this, "d", Y.prototype.wj);
    zv(this, "h", Y.prototype.yf);
    Av(this, "s", Y.prototype.sk);
    Av(this, "h", Y.prototype.Jj);
    Av(this, "p", Y.prototype.Ng);
    Av(this, "pa", Y.prototype.bk);
    Av(this, "pd", Y.prototype.Lg);
    Av(this, "pp", Y.prototype.Og);
    Av(this, "pf", Y.prototype.Pg);
    zv(this, "p", Y.prototype.Cj);
    Av(this, "n", Y.prototype.Bg);
    zv(this, "r", Y.prototype.pk);
    Av(this, "r", Y.prototype.rk);
    Av(this, "fh", Y.prototype.Ij);
    Av(this, "fv", Y.prototype.Bk);
    Av(this, "cc", Y.prototype.Cg);
    Av(this, "ci", Y.prototype.Gg);
    Av(this, "o", Y.prototype.Wl);
    Bv(this, "o", Y.prototype.K);
    Bv(this, "j", Y.prototype.I);
    zv(this, "x", Y.prototype.Qg);
    zv(this, "y", Y.prototype.Rg);
    zv(this, "z", Y.prototype.yh);
    Av(this, "g", Y.prototype.yk);
    Av(this, "fg", Y.prototype.Fj);
    Av(this, "ft", Y.prototype.Gj);
    zv(this, "e", Y.prototype.zj);
    Bv(this, "f", Y.prototype.Mj);
    Av(this, "k", Y.prototype.Pj);
    zv(this, "k", Y.prototype.Dj);
    Av(this, "u", Y.prototype.Sg);
    Av(this, "ut", Y.prototype.Tg);
    Av(this, "i", Y.prototype.Nj);
    Av(this, "ip", Y.prototype.Oj);
    Av(this, "a", Y.prototype.yj);
    zv(this, "a", Y.prototype.qk);
    zv(this, "m", Y.prototype.Dk);
    zv(this, "vb", Y.prototype.Ck);
    zv(this, "vl", Y.prototype.Ek);
    Av(this, "lf", Y.prototype.Qj);
    Av(this, "mv", Y.prototype.Rj);
    Av(this, "id", Y.prototype.Lj);
    zv(this, "ic", Y.prototype.Vl);
    Av(this, "b", Y.prototype.tj);
    zv(this, "b", Y.prototype.sj);
    Bv(this, "t", Y.prototype.Xl);
    Bv(this, "nt0", Y.prototype.Ak);
    Av(this, "rw", Y.prototype.lk);
    Av(this, "rwu", Y.prototype.mk);
    Av(this, "rwa", Y.prototype.gk);
    Av(this, "nw", Y.prototype.Zj);
    Av(this, "rh", Y.prototype.ik);
    Av(this, "nc", Y.prototype.Uj);
    Av(this, "nd", Y.prototype.Vj);
    Av(this, "no", Y.prototype.Wj);
    Bv(this, "q", Y.prototype.fk);
    Av(this, "ns", Y.prototype.Xj);
    zv(this, "l", Y.prototype.ek);
    zv(this, "v", Y.prototype.dk);
    Av(this, "nu", Y.prototype.Yj);
    Av(this, "rj", Y.prototype.jk);
    Av(this, "rp", Y.prototype.kk);
    Av(this, "rg", Y.prototype.hk);
    Av(this, "pg", Y.prototype.zk);
    Av(this, "mo", Y.prototype.Sj);
    Av(this, "al", Y.prototype.mj);
    zv(this, "iv", Y.prototype.Ul);
    zv(this, "pi", Y.prototype.ak);
    zv(this, "ya", Y.prototype.Gk);
    zv(this, "ro", Y.prototype.nk);
    zv(this, "fo", Y.prototype.Hj);
    Av(this, "df", Y.prototype.vj);
    Bv(this, "mm", Y.prototype.Fk);
    Av(this, "sg", Y.prototype.uk);
    Av(this, "gd", Y.prototype.ck);
    Av(this, "fm", Y.prototype.Ej);
    zv(this, "ba", Y.prototype.oj);
    zv(this, "br", Y.prototype.qj);
    zv(this, "bc", Y.prototype.nj, 16, 6);
    zv(this, "pc", Y.prototype.$j, 16, 6);
    zv(this, "sc", Y.prototype.xk, 16, 6);
    Av(this, "dv", Y.prototype.xj);
    Av(this, "md", Y.prototype.Tj);
    zv(this, "cp", Y.prototype.uj);
    Av(this, "sm", Y.prototype.vk);
    zv(this, "cv", Y.prototype.Aj);
    Av(this, "ng", Y.prototype.tk);
    Av(this, "il", Y.prototype.Kj);
    return this.C.join("-");
  };
  function Cv(a, b) {
    if (void 0 == b) return "";
    a = b - a.length;
    return 0 >= a ? "" : mc("0", a);
  }
  function zv(a, b, c, d, e) {
    var f = c.call(a.B.A);
    if (void 0 != f && null != f) {
      d = void 0 == d ? 10 : 10 != d && 16 != d ? 10 : d;
      f = f.toString(d);
      var g = new vv();
      g.fe(16 == d ? "0x" : "");
      g.fe(Cv(f, e));
      g.fe(f);
      Dv(a, b, g.toString(), c);
    }
  }
  function Av(a, b, c) {
    c.call(a.B.A) && Dv(a, b, "", c);
  }
  function Bv(a, b, c) {
    var d = c.call(a.B.A);
    d && Dv(a, b, d, c);
  }
  function Dv(a, b, c, d) {
    d.call(a.B.B) && (b = b.substring(0, 1).toUpperCase() + b.substring(1));
    a.C.push(b + c);
  }
  function Ev(a) {
    wv.call(this, a);
  }
  I(Ev, wv);
  y = Ev.prototype;
  y.Fe = function(a) {
    a && Fv(this);
    return Ev.X.Fe.call(this, a);
  };
  y.Td = function(a) {
    null != a && this.qc();
    return Ev.X.Td.call(this, a);
  };
  y.Ge = function(a) {
    a && Fv(this);
    return Ev.X.Ge.call(this, a);
  };
  y.Ee = function(a) {
    a && Fv(this);
    return Ev.X.Ee.call(this, a);
  };
  y.qc = function(a) {
    Na(a) && (a = Math.max(a.width, a.height));
    null != a && (this.Ud(), this.Td());
    return Ev.X.qc.call(this, a);
  };
  y.Ie = function(a) {
    a && Fv(this);
    return Ev.X.Ie.call(this, a);
  };
  y.Je = function(a) {
    a && Fv(this);
    return Ev.X.Je.call(this, a);
  };
  y.Ke = function(a) {
    a && Fv(this);
    return Ev.X.Ke.call(this, a);
  };
  y.De = function(a) {
    a && Fv(this);
    return Ev.X.De.call(this, a);
  };
  y.He = function(a) {
    a && Fv(this);
    return Ev.X.He.call(this, a);
  };
  y.Ud = function(a) {
    null != a && this.qc();
    return Ev.X.Ud.call(this, a);
  };
  function Fv(a) {
    a.De();
    a.Ee();
    a.Fe();
    a.Ge();
    a.He();
    a.Ie();
    a.Je();
    a.Ke();
  }
  y.Oc = function() {
    var a = this.ce().A;
    a.Sg() || a.Tg()
      ? a.ve() || this.qc(0)
      : ((a = this.ce().A),
        a.ve() ||
          a.V() ||
          a.yf() ||
          (this.qc(), this.Td(), this.Ud(), Fv(this)));
    return Ev.X.Oc.call(this);
  };
  var Gv = /^[^\/]*\/\//;
  function Hv() {}
  function Iv(a) {
    this.D = a;
    this.qe = "";
    (a = this.D.match(Gv)) && a[0]
      ? ((this.qe = a[0]),
        (a = this.qe.match(/\w+/)
          ? this.D
          : "http://" + this.D.substring(this.qe.length)))
      : (a = "http://" + this.D);
    this.C = a instanceof Es ? new Es(a) : new Es(a, !0);
    this.F = !0;
    this.M = !1;
  }
  function Jv(a, b) {
    a.B = a.B ? a.B + ("/" + b) : b;
  }
  function Kv(a) {
    if (void 0 == a.A) {
      a.B = null;
      a.A = a.C.C.substring(1).split("/");
      var b = a.A.length;
      2 < b &&
        Wb(a.C.$b(), "google.com") &&
        "u" == a.A[0] &&
        (Jv(a, a.A[0] + "/" + a.A[1]), a.A.shift(), a.A.shift(), (b -= 2));
      if (0 == b || 4 == b || 7 < b) return (a.F = !1), a.A;
      if (2 == b) Jv(a, a.A[0]);
      else if ("image" == a.A[0]) Jv(a, a.A[0]);
      else if (7 == b || 3 == b) return (a.F = !1), a.A;
      if (3 >= b) {
        a.M = !0;
        3 == b && (Jv(a, a.A[1]), a.A.shift(), --b);
        --b;
        var c = a.A[b],
          d = c.indexOf("=");
        -1 != d && ((a.A[b] = c.substr(0, d)), a.A.push(c.substr(d + 1)));
      }
    }
    return a.A;
  }
  function Lv(a) {
    Kv(a);
    return a.M;
  }
  Iv.prototype.$b = function() {
    var a = this.C.H;
    return this.C.$b() + (a ? ":" + a : "");
  };
  Iv.prototype.getQuery = function() {
    return this.C.A.toString();
  };
  function Mv(a) {
    Kv(a);
    void 0 == a.B && (a.B = null);
    return a.B;
  }
  function Nv(a) {
    switch (Kv(a).length) {
      case 7:
        return !0;
      case 6:
        return null == Mv(a);
      case 5:
        return !1;
      case 3:
        return !0;
      case 2:
        return null == Mv(a);
      case 1:
        return !1;
      default:
        return !1;
    }
  }
  function Ov(a, b) {
    if (Lv(a))
      a: {
        var c = null != Mv(a) ? 1 : 0;
        switch (b) {
          case 6:
            b = 0 + c;
            break;
          case 4:
            if (!Nv(a)) {
              a = null;
              break a;
            }
            b = 1 + c;
            break;
          default:
            a = null;
            break a;
        }
        a = Kv(a)[b];
      }
    else
      a: {
        c = null != Mv(a) ? 1 : 0;
        switch (b) {
          case 0:
            b = 0 + c;
            break;
          case 1:
            b = 1 + c;
            break;
          case 2:
            b = 2 + c;
            break;
          case 3:
            b = 3 + c;
            break;
          case 4:
            if (!Nv(a)) {
              a = null;
              break a;
            }
            b = 4 + c;
            break;
          case 5:
            b = Nv(a) ? 1 : 0;
            b = 4 + c + b;
            break;
          default:
            a = null;
            break a;
        }
        a = Kv(a)[b];
      }
    return a;
  }
  function Pv(a) {
    void 0 == a.L && (a.L = Ov(a, 0));
    return a.L;
  }
  function Qv(a) {
    void 0 == a.O && (a.O = Ov(a, 1));
    return a.O;
  }
  function Rv(a) {
    void 0 == a.K && (a.K = Ov(a, 2));
    return a.K;
  }
  function Sv(a) {
    void 0 == a.N && (a.N = Ov(a, 3));
    return a.N;
  }
  Iv.prototype.ce = function() {
    if (void 0 == this.I) {
      var a;
      void 0 == this.H && (this.H = Ov(this, 4));
      (a = this.H) || (a = "");
      this.I = qv(new mv(), a);
    }
    return this.I;
  };
  function Tv(a) {
    void 0 == a.G && (a.G = Ov(a, 5));
    return a.G;
  }
  function Uv(a) {
    this.A = null;
    a instanceof Iv
      ? (this.A = a)
      : (void 0 == Vv && (Vv = new Hv()), (this.A = new Iv(a.toString())));
    a = this.A.ce();
    wv.call(this, a);
    this.H = this.A.qe;
    this.G = this.A.$b();
    this.F = this.A.getQuery();
  }
  var Vv;
  I(Uv, Ev);
  Uv.prototype.Oc = function() {
    var a = this.A;
    Kv(a);
    if (!a.F) return this.A.D;
    a = Uv.X.Oc.call(this);
    var b = [];
    null != Mv(this.A) && b.push(Mv(this.A));
    if (Lv(this.A)) {
      var c = this.A;
      void 0 == c.J && (c.J = Ov(c, 6));
      b.push(c.J + (a ? "=" + a : ""));
    } else
      b.push(Pv(this.A)),
        b.push(Qv(this.A)),
        b.push(Rv(this.A)),
        b.push(Sv(this.A)),
        a && b.push(a),
        b.push(Tv(this.A));
    return this.H + this.G + "/" + b.join("/") + (this.F ? "?" + this.F : "");
  };
  function Wv(a, b, c, d) {
    U.call(this, "FPSC", [].concat(wa(arguments)));
  }
  C(Wv, U);
  function Xv(a, b, c) {
    U.call(this, "FPCS", [].concat(wa(arguments)));
  }
  C(Xv, U);
  function Yv(a, b, c, d) {
    U.call(this, "FPTS", [].concat(wa(arguments)));
  }
  C(Yv, U);
  function Zv(a, b, c) {
    this.C = c;
    this.B = a;
    this.A = b;
  }
  function $v(a, b) {
    vm([a.A, a.B], h(), b);
  }
  Zv.prototype.Ec = function(a, b, c) {
    var d = this;
    $v(this, b);
    this.B.get(function(b, f) {
      b.Da(
        a,
        function(b) {
          c && f.ua(c);
          aw(d, a, f, b);
        },
        f
      );
    }, b);
  };
  Zv.prototype.Ib = function(a, b, c, d, e, f) {
    function g(g, k) {
      f && e.ua(f);
      g
        ? k ? a.Sd(new Ao(b, c, d, g), e) : a.Rd(new Ao(b, c, d, g), e)
        : a.af() ? a.Md(b, c, d) : a.Kc(b, c, d);
    }
    var k = null,
      l = !1;
    $v(this, e);
    this.A.get(function(e, f) {
      l || (k = e.Bb(a, b, c, d, g, f));
    }, e);
    return function() {
      l = !0;
      k && k();
    };
  };
  function aw(a, b, c, d) {
    if (d && d.B)
      if (bw(no(b.Ba()).$(), d)) b.Fd(d.A), b.vd();
      else {
        d.A && b.Fd(d.A);
        var e = d.B;
        a.A.get(function(a, b) {
          a.Cb(e, b);
        }, c);
        b.Cb(e, c);
        for (c = 0; c < d.C.length; c++) {
          var f = d.C[c];
          f.oe(b);
          eq(a.C, f, fq(f.me(), !1));
        }
      }
    else b.vd();
  }
  function bw(a, b) {
    if (!L(a, 1) || !b.A || !L(b.A, 1) || 1 != b.A.Ca().Zb()) return !1;
    b = b.A;
    if (Hd(rg(a), rg(b))) return !1;
    b = M(wg(b), 0);
    return 9 == M(wg(a), 0) && 2 == b ? !1 : !0;
  }
  function cw(a, b, c) {
    this.H = a;
    this.C = b;
    this.G = c;
    this.A = new Sm(5);
  }
  cw.prototype.B = function(a) {
    var b = ku(a),
      c = lu(a);
    if (av.test(b) || bv.test(b) || cv.test(b) || dv.test(b)) {
      c = b.substr(0, b.lastIndexOf("/"));
      var d = b.substr(b.lastIndexOf("/") + 1);
    } else
      10 != c
        ? ((c = this.G[0] + b), (d = "p"))
        : ((c = this.G[0] + "p"), (d = b)),
        (b = c + "/" + d);
    var e = Um(this.A, b);
    e || ((e = this.F(c, d)), Tm(this.A, b, e));
    return this.D(e, a);
  };
  cw.prototype.D = h();
  cw.prototype.F = h();
  cw.prototype.clear = function() {
    this.A.clear();
  };
  function dw(a, b, c, d) {
    cw.call(this, a, b, c);
    this.I = d;
  }
  C(dw, cw);
  dw.prototype.D = function(a, b) {
    a = new pu(a, b);
    a.C = ln;
    a.sb();
    return a;
  };
  dw.prototype.F = function(a, b) {
    var c = new Yv(this.H, this.C, a, b);
    a = this.I || new Xv(this.H, a, b);
    return new Zv(a, c, this.C);
  };
  function ew(a, b, c, d, e, f) {
    b = new dw(c, d, e, f);
    a(b);
  } /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
  function fw(a, b) {
    this.G = [];
    this.L = a;
    this.J = b || null;
    this.D = this.B = !1;
    this.C = void 0;
    this.K = this.M = this.I = !1;
    this.H = 0;
    this.A = null;
    this.F = 0;
  }
  y = fw.prototype;
  y.cancel = function(a) {
    if (this.B) this.C instanceof fw && this.C.cancel();
    else {
      if (this.A) {
        var b = this.A;
        delete this.A;
        a ? b.cancel(a) : (b.F--, 0 >= b.F && b.cancel());
      }
      this.L ? this.L.call(this.J, this) : (this.K = !0);
      this.B || this.Yd(new gw(this));
    }
  };
  y.vg = function(a, b) {
    this.I = !1;
    hw(this, a, b);
  };
  function hw(a, b, c) {
    a.B = !0;
    a.C = c;
    a.D = !b;
    iw(a);
  }
  function jw(a) {
    if (a.B) {
      if (!a.K) throw new kw(a);
      a.K = !1;
    }
  }
  y.va = function(a) {
    jw(this);
    hw(this, !0, a);
  };
  y.Yd = function(a) {
    jw(this);
    hw(this, !1, a);
  };
  function lw(a, b, c, d) {
    a.G.push([b, c, d]);
    a.B && iw(a);
  }
  y.then = function(a, b, c) {
    var d,
      e,
      f = new is(function(a, b) {
        d = a;
        e = b;
      });
    lw(this, d, function(a) {
      a instanceof gw ? f.cancel() : e(a);
    });
    return f.then(a, b, c);
  };
  gs(fw);
  fw.prototype.na = function(a) {
    var b = new fw();
    lw(this, b.va, b.Yd, b);
    a && ((b.A = this), this.F++);
    return b;
  };
  function mw(a) {
    return db(a.G, function(a) {
      return Ma(a[1]);
    });
  }
  function iw(a) {
    if (a.H && a.B && mw(a)) {
      var b = a.H,
        c = nw[b];
      c && (E.clearTimeout(c.ca), delete nw[b]);
      a.H = 0;
    }
    a.A && (a.A.F--, delete a.A);
    b = a.C;
    for (var d = (c = !1); a.G.length && !a.I; ) {
      var e = a.G.shift(),
        f = e[0],
        g = e[1];
      e = e[2];
      if ((f = a.D ? g : f))
        try {
          var k = f.call(e || a.J, b);
          F(k) &&
            ((a.D = a.D && (k == b || k instanceof Error)), (a.C = b = k));
          if (
            hs(b) ||
            ("function" === typeof E.Promise && b instanceof E.Promise)
          )
            (d = !0), (a.I = !0);
        } catch (l) {
          (b = l), (a.D = !0), mw(a) || (c = !0);
        }
    }
    a.C = b;
    d &&
      ((k = G(a.vg, a, !0)),
      (d = G(a.vg, a, !1)),
      b instanceof fw ? (lw(b, k, d), (b.M = !0)) : b.then(k, d));
    c && ((b = new ow(b)), (nw[b.ca] = b), (a.H = b.ca));
  }
  function kw() {
    Va.call(this);
  }
  I(kw, Va);
  kw.prototype.message = "Deferred has already fired";
  kw.prototype.name = "AlreadyCalledError";
  function gw() {
    Va.call(this);
  }
  I(gw, Va);
  gw.prototype.message = "Deferred was canceled";
  gw.prototype.name = "CanceledError";
  function ow(a) {
    this.ca = E.setTimeout(G(this.B, this), 0);
    this.A = a;
  }
  ow.prototype.B = function() {
    delete nw[this.ca];
    throw this.A;
  };
  var nw = {};
  function pw() {}
  pw.prototype.A = null;
  function qw(a) {
    var b;
    (b = a.A) || ((b = {}), rw(a) && ((b[0] = !0), (b[1] = !0)), (b = a.A = b));
    return b;
  }
  var sw;
  function tw() {}
  I(tw, pw);
  function uw(a) {
    return (a = rw(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
  }
  function rw(a) {
    if (
      !a.B &&
      "undefined" == typeof XMLHttpRequest &&
      "undefined" != typeof ActiveXObject
    ) {
      for (
        var b = [
            "MSXML2.XMLHTTP.6.0",
            "MSXML2.XMLHTTP.3.0",
            "MSXML2.XMLHTTP",
            "Microsoft.XMLHTTP"
          ],
          c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c];
        try {
          return new ActiveXObject(d), (a.B = d);
        } catch (e) {}
      }
      throw Error(
        "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
      );
    }
    return a.B;
  }
  sw = new tw();
  function vw(a, b) {
    Yj.call(this);
    this.B = a || 1;
    this.A = b || E;
    this.C = G(this.Hn, this);
    this.D = Ua();
  }
  I(vw, Yj);
  y = vw.prototype;
  y.de = !1;
  y.Eb = null;
  y.Hn = function() {
    if (this.de) {
      var a = Ua() - this.D;
      0 < a && a < 0.8 * this.B
        ? (this.Eb = this.A.setTimeout(this.C, this.B - a))
        : (this.Eb && (this.A.clearTimeout(this.Eb), (this.Eb = null)),
          this.dispatchEvent("tick"),
          this.de && (ww(this), this.start()));
    }
  };
  y.start = function() {
    this.de = !0;
    this.Eb || ((this.Eb = this.A.setTimeout(this.C, this.B)), (this.D = Ua()));
  };
  function ww(a) {
    a.de = !1;
    a.Eb && (a.A.clearTimeout(a.Eb), (a.Eb = null));
  }
  y.ga = function() {
    vw.X.ga.call(this);
    ww(this);
    delete this.A;
  };
  function xw(a, b, c) {
    if (Ma(a)) c && (a = G(a, c));
    else if (a && "function" == typeof a.handleEvent) a = G(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : E.setTimeout(a, b || 0);
  }
  function yw(a) {
    Yj.call(this);
    this.headers = new ck();
    this.M = a || null;
    this.B = !1;
    this.L = this.A = null;
    this.I = this.aa = this.W = "";
    this.C = this.T = this.G = this.N = !1;
    this.J = 0;
    this.F = null;
    this.D = "";
    this.Y = this.R = !1;
  }
  I(yw, Yj);
  var zw = /^https?$/i,
    Aw = ["POST", "PUT"];
  function Bw(a, b, c, d, e) {
    if (a.A)
      throw Error(
        "[goog.net.XhrIo] Object is active with another request=" +
          a.W +
          "; newUri=" +
          b
      );
    c = c ? c.toUpperCase() : "GET";
    a.W = b;
    a.I = "";
    a.aa = c;
    a.N = !1;
    a.B = !0;
    a.A = a.M ? uw(a.M) : uw(sw);
    a.L = a.M ? qw(a.M) : qw(sw);
    a.A.onreadystatechange = G(a.uh, a);
    try {
      (a.T = !0), a.A.open(c, String(b), !0), (a.T = !1);
    } catch (g) {
      Cw(a, g);
      return;
    }
    b = d || "";
    var f = new ck(a.headers);
    e &&
      lk(e, function(a, b) {
        f.set(b, a);
      });
    e = eb(f.ob(), Dw);
    d = E.FormData && b instanceof E.FormData;
    !gb(Aw, c) ||
      e ||
      d ||
      f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function(a, b) {
      this.A.setRequestHeader(b, a);
    }, a);
    a.D && (a.A.responseType = a.D);
    "withCredentials" in a.A &&
      a.A.withCredentials !== a.R &&
      (a.A.withCredentials = a.R);
    try {
      Ew(a),
        0 < a.J &&
          ((a.Y = Fw(a.A)),
          a.Y
            ? ((a.A.timeout = a.J), (a.A.ontimeout = G(a.Jb, a)))
            : (a.F = xw(a.Jb, a.J, a))),
        (a.G = !0),
        a.A.send(b),
        (a.G = !1);
    } catch (g) {
      Cw(a, g);
    }
  }
  function Fw(a) {
    return Nc && bd(9) && Ba(a.timeout) && F(a.ontimeout);
  }
  function Dw(a) {
    return "content-type" == a.toLowerCase();
  }
  y = yw.prototype;
  y.Jb = function() {
    "undefined" != typeof za &&
      this.A &&
      ((this.I = "Timed out after " + this.J + "ms, aborting"),
      this.dispatchEvent("timeout"),
      this.abort(8));
  };
  function Cw(a, b) {
    a.B = !1;
    a.A && ((a.C = !0), a.A.abort(), (a.C = !1));
    a.I = b;
    Gw(a);
    Hw(a);
  }
  function Gw(a) {
    a.N || ((a.N = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
  }
  y.abort = function() {
    this.A &&
      this.B &&
      ((this.B = !1),
      (this.C = !0),
      this.A.abort(),
      (this.C = !1),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      Hw(this));
  };
  y.ga = function() {
    this.A &&
      (this.B && ((this.B = !1), (this.C = !0), this.A.abort(), (this.C = !1)),
      Hw(this, !0));
    yw.X.ga.call(this);
  };
  y.uh = function() {
    this.O() || (this.T || this.G || this.C ? Iw(this) : this.Jl());
  };
  y.Jl = function() {
    Iw(this);
  };
  function Iw(a) {
    if (
      a.B &&
      "undefined" != typeof za &&
      (!a.L[1] || 4 != Jw(a) || 2 != a.Ca())
    )
      if (a.G && 4 == Jw(a)) xw(a.uh, 0, a);
      else if ((a.dispatchEvent("readystatechange"), 4 == Jw(a))) {
        a.B = !1;
        try {
          if (Kw(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
          else {
            try {
              var b = 2 < Jw(a) ? a.A.statusText : "";
            } catch (c) {
              b = "";
            }
            a.I = b + " [" + a.Ca() + "]";
            Gw(a);
          }
        } finally {
          Hw(a);
        }
      }
  }
  function Hw(a, b) {
    if (a.A) {
      Ew(a);
      var c = a.A,
        d = a.L[0] ? Ha : null;
      a.A = null;
      a.L = null;
      b || a.dispatchEvent("ready");
      try {
        c.onreadystatechange = d;
      } catch (e) {}
    }
  }
  function Ew(a) {
    a.A && a.Y && (a.A.ontimeout = null);
    a.F && (E.clearTimeout(a.F), (a.F = null));
  }
  function Kw(a) {
    var b = a.Ca();
    a: switch (b) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        var c = !0;
        break a;
      default:
        c = !1;
    }
    if (!c) {
      if ((b = 0 === b))
        (a = String(a.W).match(zs)[1] || null),
          !a &&
            E.self &&
            E.self.location &&
            ((a = E.self.location.protocol), (a = a.substr(0, a.length - 1))),
          (b = !zw.test(a ? a.toLowerCase() : ""));
      c = b;
    }
    return c;
  }
  function Jw(a) {
    return a.A ? a.A.readyState : 0;
  }
  y.Ca = function() {
    try {
      return 2 < Jw(this) ? this.A.status : -1;
    } catch (a) {
      return -1;
    }
  };
  function Lw(a) {
    try {
      if (!a.A) return null;
      if ("response" in a.A) return a.A.response;
      switch (a.D) {
        case "":
        case "text":
          return a.A.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a.A)
            return a.A.mozResponseArrayBuffer;
      }
      return null;
    } catch (b) {
      return null;
    }
  }
  function Mw() {
    this.D = null;
    this.C = !1;
    this.A = {};
    this.B = {};
  }
  y = Mw.prototype;
  y.Ve = h();
  y.Bb = function(a, b, c, d, e, f) {
    var g = "x" + b + "-y" + c + "-z" + d;
    return this.C
      ? this.Ve(a, b, c, d, e, f, void 0)
      : ((this.A[g] = G(this.Ve, this, a, b, c, d, e, f, void 0)),
        G(this.aj, this, g));
  };
  y.aj = function(a) {
    a in this.A
      ? delete this.A[a]
      : a in this.B && (this.B[a](), delete this.B[a]);
  };
  y.Cb = function(a) {
    this.C = !0;
    this.D = a;
    for (var b in this.A) (a = this.A[b]()), (this.B[b] = a);
    this.A = {};
  };
  y.Da = u("D");
  function Nw() {
    this.A = 0;
    this.D = 2;
    this.B = 0;
    this.F = this.C = this.G = null;
  }
  function Ow(a, b, c) {
    a.C = b;
    a.F = c || null;
  }
  Nw.prototype.cancel = function() {
    if (3 == this.A) return !1;
    var a = !1;
    this.C && (a = this.C.call(this.F)) && (this.A = 3);
    return a;
  };
  Nw.prototype.start = function(a) {
    if (0 != this.A)
      throw Error("Trying to reuse an Rpc object. Status is not INACTIVE");
    this.A = 1;
    this.G = a;
  };
  Nw.prototype.done = h();
  function Pw(a, b) {
    if (0 == b) throw Error("Trying to set the Rpc status to INACTIVE.");
    a.A = b;
  }
  Nw.prototype.Ca = u("A");
  function Qw(a) {
    var b = new Nw();
    b.D = a.D;
    return b;
  }
  function Rw(a, b) {
    this.B = a;
    this.C = b;
  }
  Rw.prototype.A = function(a, b, c, d) {
    d = d || new Nw();
    a = new Sw(a, b, c ? c : null, d, this.B, this.C);
    gt(this.B, a, d.D);
  };
  function Sw(a, b, c, d, e, f) {
    this.J = a;
    this.F = b;
    this.G = c;
    this.B = d;
    this.C = !1;
    this.A = null;
    this.K = e;
    this.I = f;
    this.D = !1;
    this.state = null;
    Ow(this.B, this.H, this);
  }
  Sw.prototype.start = function(a) {
    this.A = Qw(this.B);
    this.A.start(this.B.G + ".RequestSchedulerChannel");
    Pw(this.A, 1);
    var b = this;
    this.I.A(
      this.J,
      function(a) {
        b.D = !0;
        b.F(a);
        ++b.B.B;
      },
      function() {
        var c = b.G;
        b.A.done();
        Pw(b.B, b.A.Ca());
        c && c();
        a();
      },
      this.A
    );
  };
  Sw.prototype.cancel = function() {
    return !this.A || (this.D && !this.C) ? !1 : this.A.cancel();
  };
  Sw.prototype.H = function() {
    this.C = !0;
    return this.K.remove(this);
  };
  function Tw(a) {
    a = new Es(a).toString();
    this.A = a += -1 == a.indexOf("?") ? "?" : "&";
  }
  function Uw(a, b) {
    if (0 == b.length) return a.A.slice(0, a.A.length - 1);
    if ("?" == b[0] || "&" == b[0]) b = b.slice(1);
    return a.A + b;
  }
  function Vw(a, b, c) {
    this.B = Aa(a) || a instanceof Es ? new Tw(a) : a;
    this.C = b;
    this.D = c || "GET";
  }
  function Ww(a, b, c, d) {
    function e(a) {
      Pj(c);
      3 != d.Ca() && a && b();
    }
    Fj(c, "success", function() {
      e(!0);
    });
    Fj(c, "abort", function() {
      e(!1);
    });
    Fj(c, "error", function() {
      Pw(d, 2);
      e(!0);
    });
    Fj(c, "timeout", function() {
      Pw(d, 2);
      e(!0);
    });
    Fj(c, "readystatechange", function() {
      var b = Lw(c);
      Kw(c) && 4 == Jw(c) && a(b);
    });
  }
  Vw.prototype.A = function(a, b, c, d) {
    d = d || new Nw();
    c = c || Ha;
    var e = new yw();
    e.R = !1;
    F(this.C) && (e.D = this.C);
    Ow(d, function() {
      e.abort();
      return !0;
    });
    Ww(b, c, e, d);
    "POST" == this.D
      ? ((b = Uw(this.B, "")),
        Bw(e, b, "POST", a, {
          "Content-type": "application/x-www-form-urlencoded"
        }))
      : ((b = Uw(this.B, a)), Bw(e, b));
  };
  function Xw(a, b, c) {
    this.B = a;
    this.C = b;
    this.D = c;
    this.A = Ha;
  }
  function Yw(a, b, c, d) {
    b = a.C.A(b);
    var e = d || new Nw();
    e.start("GpmsConfigService.getConfig");
    a.B.A(
      b,
      function(b) {
        try {
          if (3 != e.Ca() && (++e.B, 1 == e.B)) {
            var d = null;
            try {
              d = a.D.A(b);
            } catch (k) {
              Pw(e, 2), (d = null);
            }
            c(d);
          }
        } catch (k) {
          throw (a.A(k), k);
        }
      },
      function() {
        try {
          3 != e.Ca() && (0 == e.B && (Pw(e, 2), c(null)), e.done());
        } catch (f) {
          throw (a.A(f), f);
        }
      },
      e
    );
  }
  function Zw(a, b, c, d) {
    Mw.call(this);
    this.H = new ht(a);
    this.F = new Es(c);
    this.G = d;
  }
  C(Zw, Mw);
  Zw.prototype.Ve = function(a, b, c, d, e, f, g) {
    (a = this.Da()) && 0 != N(a, 4)
      ? ((a = new Uv(this.F.toString() + "/" + this.G)),
        yv(a, b, Y.prototype.Qg, Y.prototype.Jh),
        yv(a, c, Y.prototype.Rg, Y.prototype.Kh),
        yv(a, d, Y.prototype.yh, Y.prototype.Lh),
        (b = a.Oc()))
      : (b = this.F.toString() + "/s2560-no/" + this.G);
    e = f.va(e, "fpts-get-tile");
    return it(this.H, b, e, g);
  };
  function $w(a, b, c, d, e, f) {
    b = new Zw(c, d, e, f);
    a(b);
  }
  function ax(a, b) {
    U.call(this, "HPNR", [].concat(wa(arguments)));
  }
  C(ax, U);
  function bx(a, b, c) {
    this.H = a;
    this.I = b;
    this.K = c;
    this.B = !1;
    this.O = -1;
    this.A = this.C = null;
    this.F = this.G = this.L = this.D = 0;
    this.J = !1;
    this.M = 0;
  }
  function cx(a, b) {
    a.A && (a.A.style.display = b ? "inline" : "none");
  }
  function dx(a) {
    a.A && ((a.A.style.left = a.D + "px"), (a.A.style.top = a.L + "px"));
  }
  function ex(a) {
    a.A && ((a.A.style.width = a.G + "px"), (a.A.style.height = a.F + "px"));
  }
  function fx(a, b, c) {
    a.C = b;
    b = b.D;
    a.A = c ? b.cloneNode(!0) : b;
    a.A.className = "tile-image-3d";
    a.J && ((a.J = !1), (a.M = Ua()));
  }
  bx.prototype.remove = function() {
    this.A && this.A.parentElement && this.A.parentElement.removeChild(this.A);
  };
  function gx(a, b, c, d) {
    this.C = a;
    this.A = Yi("div");
    this.A.style.overflow = "hidden";
    this.A.style.position = "absolute";
    this.A.style.width = "inherit";
    this.A.style.height = "inherit";
    this.I = -1;
    this.F = b;
    this.J = c;
    this.O = d;
    var e = d.oa();
    a = e.xc();
    d = a.V() * e.ac();
    var f = Vg(a) * e.Mb();
    e = Math.pow(2, e.Ma() - b);
    b = Math.pow(2, c - b);
    this.B = d / (e * a.V());
    this.D = f / (e * Vg(a));
    this.N = Math.ceil(this.B);
    this.M = Math.round(b * a.V());
    this.L = Math.round(b * Vg(a));
    this.K = {};
    this.H = [];
    this.G = 0;
  }
  function hx(a, b) {
    b != a.I &&
      ((a.I = b),
      yk(a.A, b),
      0 < b && a.A.parentElement != a.C
        ? a.C.appendChild(a.A)
        : 0 == b && a.A.parentElement && a.C.removeChild(a.A));
  }
  function ix(a) {
    this.D = a;
    this.A = null;
    this.H = Mk();
    this.B = Mk();
    this.I = [];
    this.F = Infinity;
    this.C = null;
    this.G = -1;
  }
  function jx(a) {
    a.A ||
      ((a.A = Yi("div")),
      (a.A.style.overflow = "hidden"),
      (a.A.style.position = "absolute"),
      (a.A.style.width = "inherit"),
      (a.A.style.height = "inherit"));
    return a.A;
  }
  function kx(a, b) {
    var c = Math.round(4 * b),
      d = a.I[c];
    d ||
      ((d = c / 4),
      (b = Math.round(b)),
      (d = a.I[c] = new gx(jx(a), b, d, a.D)));
    return d;
  }
  ix.prototype.detach = function() {
    this.A && this.A.parentElement && this.A.parentElement.removeChild(this.A);
  };
  var lx = Ck(),
    mx = Ck();
  function nx(a, b) {
    Yj.call(this);
    this.B = new Eg();
    this.J = b;
    this.F = !1;
    this.G = new Sm(5, function(a, b) {
      b.detach();
    });
    this.A = [];
    this.I = 0.5;
    this.C = function() {
      Ar(a);
    };
    this.D = [];
    this.L = new $l(im());
  }
  C(nx, Yj);
  y = nx.prototype;
  y.wc = function(a) {
    this.B = a;
    this.C();
  };
  function ox(a, b) {
    var c = Um(a.G, b.id());
    c || ((c = new ix(b)), Tm(a.G, b.id(), c));
    return c;
  }
  function px(a, b, c) {
    var d = qx;
    if (0 == a.A.length) return null;
    var e = a.A[0];
    a = ox(a, e);
    Dk(d, b, c, 1);
    Ok(a.B, d, d);
    d[0] -= Math.floor(d[0]);
    return e;
  }
  y.Yc = function(a, b) {
    if (0 != this.A.length) {
      var c = this.A[0];
      if (0 != this.A.length) {
        var d = 0.5 * Vg(Ng(this.B)),
          e = 0.5 * Ng(this.B).V(),
          f = ox(this, this.A[0]);
        Dk(qx, e, d, 1);
        Ok(f.B, qx, qx);
        this.I = qx[0];
      }
      d = this.I;
      c.oa().Ig(rx);
      qn(a, qx);
      $k(rx, qx, qx);
      a = qx[0];
      e = qx[1];
      Dk(
        qx,
        Math.atan2(a, e) / Math.PI * 0.5 + 0.5,
        -Math.atan2(qx[2], Math.sqrt(a * a + e * e)) / Math.PI + 0.5,
        1
      );
      a = qx[0] - d + 0.5;
      a -= Math.floor(a);
      qx[0] = a - 0.5 + d;
      c = ox(this, c);
      Ok(c.H, qx, qx);
      b[0] = qx[0];
      b[1] = qx[1];
    }
  };
  y.ke = function(a) {
    a[0] = 1;
    a[1] = 179;
    if (0 != this.A.length) {
      var b = this.B;
      b = ox(this, this.A[0]).B[4] * Vg(Ng(b)) * 90;
      a[0] = Math.max(27 + b, 1);
      a[1] = Math.min(156 - b, 179);
      a[0] > a[1] && ((a[0] = (a[0] + a[1]) / 2), (a[1] = a[0]));
    }
  };
  y.ae = function(a, b, c) {
    a = px(this, a, b);
    if (!a) return null;
    sx.x = qx[0];
    sx.y = qx[1];
    return a.Vc(sx, c);
  };
  y.Wc = function(a, b, c) {
    a = px(this, a, b);
    if (!a) return null;
    if ((b = a.Zd())) {
      c = gn(b, qx[0], qx[1], c);
      if (!c) return null;
      a.oa().uc(rx);
      $k(rx, c.origin, c.origin);
      al(rx, c.A, c.A);
      Jk(c.A, c.A);
      return c;
    }
    return null;
  };
  y.kc = function(a, b) {
    if (!qr(this.A, a)) {
      tx(this);
      for (var c = 0; c < this.A.length; ++c) {
        var d = this.A[c];
        -1 == Za(a, d) && ox(this, d).detach();
      }
      this.A = [];
      for (c = 0; c < a.length; ++c)
        (d = a[c]),
          $t(no(d.Ba())) &&
            !pr(d) &&
            (or(d) || (d.Tb(b), d.gc(this.C)), this.A.push(d));
      for (a = 0; a < this.A.length; ++a)
        (b = qm(this.A[a], "TileReady", this.C)), this.D.push(b);
    }
  };
  function tx(a) {
    for (var b = 0; b < a.A.length; ++b) Oj(a.D[b]);
    a.D = [];
  }
  y.clear = function() {
    tx(this);
    this.G.clear();
    this.A = [];
  };
  y.Rb = h();
  y.Za = w(null);
  y.ed = function(a) {
    var b = this.J;
    a = 0.5 < a ? "white" : "black";
    if (Aa("background-color")) {
      var c = rk(b, "background-color");
      c && (b.style[c] = a);
    } else
      for (c in "background-color") {
        a = b;
        var d = "background-color"[c],
          e = rk(a, c);
        e && (a.style[e] = d);
      }
  };
  y.La = function() {
    ux(this, !0);
  };
  y.ec = function() {
    ux(this, !1);
  };
  function ux(a, b) {
    var c = (a.F = !1),
      d = new Ul(a.L, "render_html4_pano");
    d.Qd();
    for (var e = 0; e < a.A.length; ++e) {
      var f = a.A[e];
      if (or(f)) {
        f = ox(a, f);
        var g = a.B,
          k = a.J,
          l = jx(f);
        l.parentElement != k && k.appendChild(l);
        var m = f.D.oa(),
          n = Ng(g);
        l = n.V();
        var p = Vg(n),
          q = Tg(Lg(g));
        q -= N(f.D.Da(), 10);
        var t = sb(N(Lg(g), 1), 0, 180);
        k = m.Ma();
        k =
          Math.round(
            4 *
              sb(
                k -
                  Math.log(
                    sb(Ig(g), 0, 180) / 180 * Vg(m.xc()) * m.Mb() / Vg(n)
                  ) /
                    Math.LN2,
                0,
                k
              )
          ) / 4;
        g = f.F;
        f.F = k;
        var r = f;
        q = q / 360 + 0.5;
        t = 1 - t / 180;
        var v = k,
          x = m;
        m = x.xc();
        var z = m.V() * x.ac(),
          A = Vg(m) * x.Mb();
        m = n.V();
        n = Vg(n);
        x = Math.pow(2, x.Ma() - v);
        v = x * m / z;
        z = x * n / A;
        A = r.B;
        n = z / n;
        A[0] = v / m;
        A[1] = 0;
        A[2] = 0;
        A[3] = 0;
        A[4] = n;
        A[5] = 0;
        A[6] = 0;
        A[7] = 0;
        A[8] = 1;
        r.B[6] = q - v / 2;
        r.B[7] = t - z / 2;
        r.B[8] = 1;
        Nk(r.B, r.H);
        Dk(lx, 0, 0, 1);
        Dk(mx, l, p, 1);
        Ok(f.B, lx, lx);
        Ok(f.B, mx, mx);
        p = l = kx(f, k);
        r = lx;
        q = mx;
        ++p.G;
        t = r[1] * p.D;
        m = Math.min(p.D, q[1] * p.D);
        v = (r[0] - Math.floor(r[0])) * p.B;
        n = v + (q[0] - r[0]) * p.B;
        z = n + 1;
        r = !1;
        A = p.F != p.J;
        q = p.H;
        p.H = [];
        for (x = Math.max(0, Math.floor(t)); x < m; ++x)
          for (var H = (x - t) * p.L, B = Math.floor(v); B < z; ++B) {
            var J = ub(B, p.N),
              D = B < p.B ? B : J + p.B;
            if (!(D > n)) {
              D = (D - v) * p.M;
              var T = J + "|" + x + "|" + p.F,
                S = p.K[T];
              S || ((S = new bx(J, x, p.F)), (p.K[T] = S));
              T = J = S;
              S = H;
              if (D != T.D || S != T.L) (T.D = D), (T.L = S), dx(T);
              D = J;
              T = p.M;
              S = p.L;
              if (T != D.G || S != D.F) (D.G = T), (D.F = S), ex(D);
              D = J;
              1 != D.B && (cx(D, !0), (D.B = !0));
              D = J;
              T = p.O;
              S = p.A;
              var W = A;
              if (D.C && !W) {
                var da = T.Bb(D.H, D.I, D.K);
                da && D.C != da && (D.remove(), fx(D, da, W));
              }
              D.C ||
                ((da = T.Bb(D.H, D.I, D.K))
                  ? fx(D, da, W)
                  : (T.Ib(D.H, D.I, D.K, d), (D.J = !0)));
              D.A &&
                D.A.parentElement != S &&
                (Zi(S),
                S.appendChild(D.A),
                (D.A.style.position = "absolute"),
                (D.A.style.pointerEvents = "none"),
                cx(D, D.B),
                dx(D),
                ex(D));
              D = J;
              D.A
                ? ((T = sb((Ua() - D.M) / 250, 0, 1)), yk(D.A, T), (D = 1 > T))
                : (D = !1);
              r = D || r;
              J.O = p.G;
              p.H.push(J);
            }
          }
        for (t = 0; t < q.length; ++t)
          (m = q[t]), m.O != p.G && 0 != m.B && (cx(m, !1), (m.B = !1));
        p = r;
        Infinity != g &&
          k != g &&
          ((k = kx(f, g)),
          f.C && f.C.J != g && hx(f.C, 0),
          (f.G = Ua()),
          (f.C = k),
          (f.C.A.style.zIndex = 1),
          (l.A.style.zIndex = 0));
        f.C &&
          ((g = (Ua() - f.G) / 250),
          (g = sb(g, 0, 1)),
          hx(f.C, 1 - g),
          1 > g ? (p = !0) : (f.C = null));
        hx(l, 1);
        c = p || c;
      }
    }
    c ? b && a.C() : ((a.F = !0), a.dispatchEvent(new nj("ViewportReady", a)));
    d.done("main-actionflow-branch");
  }
  y.dd = u("F");
  var qx = Ck(),
    rx = Rk(),
    sx = new Mi();
  function vx(a, b, c, d) {
    b = new nx(c, d);
    a(b);
  }
  function wx(a) {
    xx();
    return Ph(a);
  }
  var xx = Ha;
  function yx(a, b) {
    var c = b || {};
    b = c.document || document;
    var d = Oh(a),
      e = Yi("SCRIPT"),
      f = { Qh: e, Jb: void 0 },
      g = new fw(zx, f),
      k = null,
      l = null != c.timeout ? c.timeout : 5e3;
    0 < l &&
      ((k = window.setTimeout(function() {
        Ax(e, !0);
        g.Yd(new Bx(1, "Timeout reached for loading script " + d));
      }, l)),
      (f.Jb = k));
    e.onload = e.onreadystatechange = function() {
      (e.readyState &&
        "loaded" != e.readyState &&
        "complete" != e.readyState) ||
        (Ax(e, c.bj || !1, k), g.va(null));
    };
    e.onerror = function() {
      Ax(e, !0, k);
      g.Yd(new Bx(0, "Error while loading script " + d));
    };
    f = c.attributes || {};
    Dc(f, { type: "text/javascript", charset: "UTF-8" });
    Si(e, f);
    Li(e, a);
    Cx(b).appendChild(e);
    return g;
  }
  function Cx(a) {
    var b;
    return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length
      ? b[0]
      : a.documentElement;
  }
  function zx() {
    if (this && this.Qh) {
      var a = this.Qh;
      a && "SCRIPT" == a.tagName && Ax(a, !0, this.Jb);
    }
  }
  function Ax(a, b, c) {
    null != c && E.clearTimeout(c);
    a.onload = Ha;
    a.onerror = Ha;
    a.onreadystatechange = Ha;
    b &&
      window.setTimeout(function() {
        aj(a);
      }, 0);
  }
  function Bx(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    Va.call(this, c);
    this.code = a;
  }
  I(Bx, Va);
  function Dx(a) {
    this.A = a;
    this.Jb = 5e3;
  }
  var Ex = 0;
  function Fx(a, b, c) {
    var d = {},
      e = "_" + (Ex++).toString(36) + Ua().toString(36),
      f = "_callbacks___" + e;
    b && ((E[f] = Gx(e, b)), (d.callback = f));
    b = { timeout: a.Jb, bj: !0 };
    a = Oh(a.A);
    if (/#/.test(a))
      throw Error("Found a hash in url (" + a + "), appending not supported.");
    f = /\?/.test(a) ? "&" : "?";
    for (l in d)
      for (var g = Ka(d[l]) ? d[l] : [d[l]], k = 0; k < g.length; k++)
        null != g[k] &&
          ((a +=
            f + encodeURIComponent(l) + "=" + encodeURIComponent(String(g[k]))),
          (f = "&"));
    var l = Ph(a);
    l = yx(l, b);
    lw(l, null, Hx(e, d, c), void 0);
    return { ca: e, xg: l };
  }
  Dx.prototype.cancel = function(a) {
    a && (a.xg && a.xg.cancel(), a.ca && Ix(a.ca, !1));
  };
  function Hx(a, b, c) {
    return function() {
      Ix(a, !1);
      c && c(b);
    };
  }
  function Gx(a, b) {
    return function(c) {
      Ix(a, !0);
      b.apply(void 0, arguments);
    };
  }
  function Ix(a, b) {
    a = "_callbacks___" + a;
    if (E[a])
      if (b)
        try {
          delete E[a];
        } catch (c) {
          E[a] = void 0;
        }
      else E[a] = Ha;
  }
  function Jx(a, b, c, d, e, f, g) {
    U.call(this, "GCS", [].concat(wa(arguments)));
  }
  C(Jx, U);
  function Kx(a) {
    this.D = null;
    this.L = this.B = this.H = this.I = 0;
    this.C = [];
    this.K = [];
    this.G = {};
    this.J = {};
    this.A = new Wm(a);
  }
  y = Kx.prototype;
  y.oe = ba("D");
  y.me = w(0);
  y.start = function() {
    return this.D ? this.Rl : Qp;
  };
  y.Rl = function() {
    if (8 != an(this.A, 0) || 8 != an(this.A, 7)) return Qp;
    this.B = (bn(this.A, 1) || 1) - 1;
    this.I = bn(this.A, 3) || 0;
    this.H = bn(this.A, 5) || 0;
    var a = an(this.A, 7) || 0;
    this.L = a;
    this.C = Array(this.B + 1);
    a += this.I * this.H;
    var b = 22 * this.B;
    var c = this.A;
    c = !c.A || 0 > a ? [] : $m(c, a, b) || [];
    this.C[0] = "";
    for (var d = 1; d <= this.B; d++) {
      for (var e = "", f = 0; 22 > f; f++)
        e += String.fromCharCode(c[22 * (d - 1) + f] || 0);
      this.C[d] = e;
    }
    a = cn(this.A, a + b, 2 * this.B);
    if (a.length != 2 * this.B) return this.nh;
    this.K = a;
    return this.cj;
  };
  y.cj = function() {
    var a = this.D.Da(),
      b = Jg(a.fa());
    b = tn(Qg(b));
    rl(Lx, -xb(N(a, 10)));
    for (var c = 0; c < this.B; c++) {
      var d = this.C[c + 1],
        e = this.K[2 * c + 1],
        f = Mx;
      f[0] = this.K[2 * c];
      f[1] = e;
      f[2] = 0;
      e = Lx;
      var g = Mx;
      f = Mx;
      var k = g[0],
        l = g[1];
      g = g[2];
      f[0] = k * e[0] + l * e[4] + g * e[8] + e[12];
      f[1] = k * e[1] + l * e[5] + g * e[9] + e[13];
      f[2] = k * e[2] + l * e[6] + g * e[10] + e[14];
      Cn(a.fa(), Nx);
      e = Jn(Nx);
      e.A += Mx[0] * b;
      e.B += Mx[1] * b;
      Dn(Nx, e);
      e = new Eg();
      f = Nx;
      if (0 != f.ia) throw Error("Invalid Coordinate System");
      Jn(f, An);
      k = Mg(e);
      l = Og(e);
      f = Kg(e);
      F(An.G) && (k.data[0] = wb(-yb(An.G)));
      F(An.J) && (k.data[1] = wb(yb(An.J)));
      F(An.F) && (k.data[2] = wb(-yb(An.F)));
      F(An.D) && (e.data[3] = yb(An.D));
      F(An.width) && Ug(l, An.width);
      F(An.height) && Wg(l, An.height);
      k = Bn;
      sn(An.A, An.B, An.C, k, void 0);
      k[0] = yb(k[0]);
      k[1] = yb(k[1]);
      f.data[1] = Bn[0];
      f.data[2] = Bn[1];
      Sg(f, Bn[2]);
      this.G[d] = Jg(e);
      this.J[d] = 2;
    }
    for (b = 0; b < Q(a, 19); ++b)
      (c = new ah(P(new Fm(Gd(a, 19, b)), 4))),
        (d = this.G[ku(c)]) && R(Kg(fh(c)), d);
    return this.nh;
  };
  y.nh = function() {
    var a = this.D.Ab(),
      b = this.H,
      c = this.A,
      d = this.L,
      e = this.C,
      f = this.G,
      g = this.J;
    a.A = this.I;
    a.C = b;
    a.B = c;
    a.D = d;
    a.G = e;
    a.H = f;
    a.F = g;
    return Qp;
  };
  var Mx = new Float32Array(3),
    Lx = ll(),
    Nx = new Hn();
  function Ox(a, b, c, d) {
    this.B = null;
    this.G = a;
    this.D = b;
    this.A = [];
    for (a = 0; a < Q(c, 0); ++a) {
      b = 4 * a;
      var e = new Ye(new Xe(Gd(c, 0, a)).data[0]);
      this.A[b + 0] = -N(e, 0);
      this.A[b + 1] = -N(e, 1);
      this.A[b + 2] = -N(e, 2);
      this.A[b + 3] = -N(e, 3);
    }
    this.C = new Wm(d);
  }
  Ox.prototype.oe = ba("B");
  Ox.prototype.me = w(1);
  Ox.prototype.start = function() {
    return this.B ? this.H : Qp;
  };
  Ox.prototype.H = function() {
    var a = this.B;
    a.C = new fn(this.G, this.D, this.A, this.C);
    a.sb();
    return Qp;
  };
  function Px(a, b, c, d) {
    this.A = null;
    this.I = a;
    this.H = b;
    this.G = new Wm(d);
    this.C = [];
    this.B = {};
    this.D = {};
    for (a = 0; a < Q(c, 0); ++a) {
      b = O(df(ef(c, a)), 1);
      this.C.push(b);
      this.B[b] = M(df(ef(c, a)), 0);
      d = new de(ef(c, a).data[2]);
      var e = new Fg();
      e.data[1] = N(ke(d), 3);
      e.data[2] = N(ke(d), 2);
      Sg(e, N(new ge(d.data[1]), 0) || 3);
      this.D[b] = e;
    }
  }
  Px.prototype.oe = ba("A");
  Px.prototype.me = w(0);
  Px.prototype.start = function() {
    return this.A ? this.K : Qp;
  };
  Px.prototype.K = function() {
    var a = this.A.Ab(),
      b = this.H,
      c = this.G,
      d = this.C,
      e = this.D,
      f = this.B;
    a.A = this.I;
    a.C = b;
    a.B = c;
    a.D = 0;
    a.G = d;
    a.H = e;
    a.F = f;
    return Qp;
  };
  function Qx(a) {
    this.B = Aa(a) || a instanceof Es ? new Tw(a) : a;
  }
  Qx.prototype.A = function(a, b, c, d) {
    var e = d || new Nw(),
      f = c || Ha,
      g = new Dx(wx(Uw(this.B, a))),
      k = !1,
      l = Fx(
        g,
        function(a) {
          Pw(e, 1);
          b(a);
          f();
        },
        function() {
          k || (Pw(e, 2), f());
        }
      );
    Ow(e, function() {
      k = !0;
      if (null === l) var a = !1;
      else g.cancel(l), (a = !0);
      return a;
    });
  };
  function Rx(a, b) {
    var c = Sx(a);
    c = Array(c);
    Tx(a, b, c, 0);
    return c.join("");
  }
  var Ux = /^([0-9]+)([a-zB])([\s\S]*)/,
    Vx = /(\*)/g,
    Wx = /(!)/g,
    Xx = /(\*2A)/gi,
    Yx = /(\*21)/gi,
    Zx = /^[-A-Za-z0-9_.!~*() ]*$/;
  function Sx(a) {
    for (var b = 0, c = a.length, d = 0; d < c; ++d) {
      var e = a[d];
      null != e && ((b += 4), Ka(e) && (b += Sx(e)));
    }
    return b;
  }
  function Tx(a, b, c, d) {
    new Mb(b).forEach(function(a) {
      var b = a.Ac;
      if (a.we)
        for (var e = a.value, k = 0; k < e.length; ++k)
          d = $x(e[k], b, a, c, d);
      else d = $x(a.value, b, a, c, d);
    }, a);
    return d;
  }
  function $x(a, b, c, d, e) {
    d[e++] = "!";
    d[e++] = b;
    if ("m" == c.type)
      (d[e++] = "m"),
        (d[e++] = 0),
        (b = e),
        (e = Tx(a, c.Ef, d, e)),
        (d[b - 1] = (e - b) >> 2);
    else {
      c = c.type;
      switch (c) {
        case "b":
          a = a ? 1 : 0;
          break;
        case "i":
        case "j":
        case "u":
        case "v":
        case "n":
        case "o":
          a = !Aa(a) || ("j" != c && "v" != c && "o" != c) ? Math.floor(a) : a;
          break;
        case "s":
          Aa(a) || (a = "" + a);
          var f = a;
          if (Zx.test(f)) b = !1;
          else {
            b = encodeURIComponent(f).replace(/%20/g, "+");
            var g = b.match(/%[89AB]/gi);
            f = f.length + (g ? g.length : 0);
            b = 4 * Math.ceil(f / 3) - (3 - f % 3) % 3 < b.length;
          }
          b && (c = "z");
          if ("z" == c) {
            b = [];
            for (g = f = 0; g < a.length; g++) {
              var k = a.charCodeAt(g);
              128 > k
                ? (b[f++] = k)
                : (2048 > k
                    ? (b[f++] = (k >> 6) | 192)
                    : (55296 == (k & 64512) &&
                      g + 1 < a.length &&
                      56320 == (a.charCodeAt(g + 1) & 64512)
                        ? ((k =
                            65536 +
                            ((k & 1023) << 10) +
                            (a.charCodeAt(++g) & 1023)),
                          (b[f++] = (k >> 18) | 240),
                          (b[f++] = ((k >> 12) & 63) | 128))
                        : (b[f++] = (k >> 12) | 224),
                      (b[f++] = ((k >> 6) & 63) | 128)),
                  (b[f++] = (k & 63) | 128));
            }
            a = qd(b, !0);
            a = Jb(a);
          } else
            -1 != a.indexOf("*") && (a = a.replace(Vx, "*2A")),
              -1 != a.indexOf("!") && (a = a.replace(Wx, "*21"));
          break;
        case "B":
          Aa(a) ? (a = Ib(a)) : La(a) && (a = qd(a, !0)), (a = Jb(a));
      }
      d[e++] = c;
      d[e++] = a;
    }
    return e;
  }
  function Ie(a) {
    return -1 != a.indexOf("*21") ? a.replace(Yx, "!") : a;
  }
  function Je(a) {
    var b = a.charCodeAt(0).toString(16),
      c = new RegExp("(\\*" + b + ")", "gi");
    b = "*" + b;
    var d = b.toLowerCase();
    return function(e) {
      return -1 != e.indexOf(b) || -1 != e.indexOf(d) ? e.replace(c, a) : e;
    };
  }
  function Ke(a, b, c, d, e, f) {
    if (a + b > c.length) return !1;
    var g = a;
    for (a += b; g < a; ++g) {
      var k = Ux.exec(c[g]);
      if (!k) return !1;
      b = parseInt(k[1], 10);
      var l = k[2],
        m = k[3];
      m = d(m);
      if (-1 != m.indexOf("*2A") || -1 != m.indexOf("*2a"))
        m = m.replace(Xx, "*");
      var n = 0;
      if ("m" == l && ((n = parseInt(m, 10)), isNaN(n))) return !1;
      var p = e.Se[b];
      if (p) {
        k = k[2];
        if ("z" == k) {
          k = "s";
          m = ud(m);
          l = [];
          for (var q = 0, t = 0; q < m.length; ) {
            var r = m[q++];
            if (128 > r) l[t++] = String.fromCharCode(r);
            else if (191 < r && 224 > r) {
              var v = m[q++];
              l[t++] = String.fromCharCode(((r & 31) << 6) | (v & 63));
            } else if (239 < r && 365 > r) {
              v = m[q++];
              var x = m[q++],
                z = m[q++];
              r =
                (((r & 7) << 18) |
                  ((v & 63) << 12) |
                  ((x & 63) << 6) |
                  (z & 63)) -
                65536;
              l[t++] = String.fromCharCode(55296 + (r >> 10));
              l[t++] = String.fromCharCode(56320 + (r & 1023));
            } else
              (v = m[q++]),
                (x = m[q++]),
                (l[t++] = String.fromCharCode(
                  ((r & 15) << 12) | ((v & 63) << 6) | (x & 63)
                ));
          }
          m = l.join("");
        }
        if (p.type != k) return !1;
        if ("m" == p.type) {
          p = p.ha;
          m = [];
          if (!Ke(g + 1, n, c, d, p, m)) return !1;
          g += n;
        }
        a: {
          n = m;
          k = b;
          m = e;
          b = f;
          p = m.Se[k];
          if ("B" == p.type) n = Kb(String(n));
          else if ("s" != p.type && "m" != p.type && !Aa(p.ej)) {
            l =
              "f" != p.type && "d" != p.type ? parseInt(n, 10) : parseFloat(n);
            if (isNaN(l)) {
              b = !1;
              break a;
            }
            "b" == p.type ? (n = 0 != l) : (n = l);
          }
          k += m.Pc || 0;
          3 == p.label ? Db(b, k).push(n) : (b[k] = n);
          b = !0;
        }
        if (!b) return !1;
      } else "m" == l && (g += n);
    }
    return !0;
  }
  function ay(a) {
    this.B = a;
  }
  ay.prototype.A = function(a) {
    a = Rx(a.Sa(), this.B);
    return "pb=" + encodeURIComponent(a).replace(/%20/g, "+");
  };
  function by(a) {
    this.B = a;
  }
  by.prototype.A = function(a) {
    return new this.B(a);
  };
  function cy(a) {
    this.C = a;
    this.B = Tl || Ha;
  }
  cy.prototype.A = function(a) {
    ")]}'\n" == a.substr(0, 5) && (a = a.substr(5));
    try {
      var b = JSON.parse(a);
    } catch (c) {}
    if (!(b instanceof Array))
      throw (this.B(a), Error("JspbDeserializer parse error."));
    return new this.C(b);
  };
  function dy(a, b, c, d, e, f, g) {
    c
      ? (a = new Xw(new Rw(d, new Qx(a)), new ay(og()), new by(ag)))
      : ((a = new Vw(a, void 0, void 0)),
        (a = new Xw(new Rw(d, a), new ay(og()), new cy(ag))));
    this.F = a;
    this.C = b
      ? c
        ? new Xw(new Rw(d, new Qx(b)), new ay(Bg()), new by(kg))
        : new Xw(new Rw(d, new Vw(b)), new ay(Bg()), new cy(kg))
      : null;
    this.D = f;
    this.B = e;
    this.A = g;
  }
  dy.prototype.Da = function(a, b, c) {
    ey(this, a.Ba(), c.va(b, "gcs-get-config"));
  };
  function fy(a, b, c) {
    var d = no(b),
      e = new ig();
    Vf(new Sf(P(e, 0)), a.B);
    var f = new Ee();
    He(f, O(d, 0));
    L(f, 0)
      ? R(new Ee(P(e, 6)), f)
      : ((f = new Af(P(e, 1))),
        (b = Jg(no(b).fa())),
        le(new ee(P(f, 0)), Qg(b)),
        me(new ee(P(f, 0)), Pg(b)),
        (f.data[1] = 50),
        (new qf(P(new vf(P(e, 2)), 8)).data[0] = 2));
    R(new Le(P(new vf(P(e, 2)), 1)), a.D);
    Dd(new hf(P(new ff(P(new vf(P(e, 2)), 0)), 0)), 0, 2);
    b = new pe(P(new vf(P(e, 2)), 10));
    f = se(b);
    f.data[0] = 2;
    f.data[1] = !0;
    f.data[2] = 2;
    f = se(b);
    f.data[0] = 3;
    f.data[1] = !0;
    f.data[2] = 2;
    a.A && R(new Kf(P(new Sf(P(e, 0)), 10)), a.A);
    gy(new dg(P(e, 3)));
    var g = new Nw();
    Yw(
      a.C,
      e,
      function(a) {
        a && L(a, 1) ? hy(a.getMetadata(), c, g, d) : c(new vu());
      },
      g
    );
  }
  function ey(a, b, c) {
    var d = no(b),
      e = new Zf(),
      f = new bg(Fd(e, 2));
    if (L(d.$(), 1)) R(new Pd(P(f, 0)), rg(d.$()));
    else {
      Rd(new Pd(P(f, 0)), ku(d));
      var g = 0;
      switch (M(no(b), 1, 99)) {
        case 7:
          g = 1;
          break;
        case 0:
          g = 2;
          break;
        case 4:
          g = 3;
          break;
        case 9:
          g = 8;
          break;
        case 10:
          g = 10;
          break;
        case 1:
          g = 4;
          break;
        default:
          g = iy(dh(d));
      }
      Qd(new Pd(P(f, 0)), g);
    }
    gy(new dg(P(e, 3)));
    f = null;
    0 < Q(d, 15) &&
      0 == M(new Xg(hh(d).data[0]), 8) &&
      ((f = O(new Xg(hh(d).data[0]), 0)),
      Be(new ye(P(new bg(Gd(e, 2, 0)), 1)), f));
    R(new Le(P(e, 1)), a.D);
    a.A && R(new Kf(P(new Sf(P(e, 0)), 10)), a.A);
    Vf(new Sf(P(e, 0)), a.B);
    var k = new Nw();
    Yw(
      a.F,
      e,
      function(e) {
        1 === k.Ca() &&
        e &&
        e.Tl() &&
        0 === e.Ca().Zb() &&
        (e
          .hb(0)
          .Ca()
          .Zb() === ng.If ||
          e
            .hb(0)
            .Ca()
            .Zb() === ng.Jf)
          ? hy(e.hb(0), c, k, d)
          : a.C
            ? fy(a, b, c)
            : ((e = new vu()),
              9 == M(oo(b), 1, 99) &&
                L(oo(b), 0) &&
                ((e.B = new Hm()), (e.A = new gg())),
              c(e));
      },
      k
    );
  }
  function iy(a) {
    switch (a) {
      case 1:
      case 2:
      case 4:
      case 5:
      case 11:
      case 13:
      case 3:
        return 2;
      case 10:
        return 4;
      case 12:
      case 15:
        return 3;
      case 27:
        return 1;
      default:
        return 0;
    }
  }
  function gy(a) {
    Dd(a, 0, mg.Hi);
    Dd(a, 0, mg.xi);
    Dd(a, 0, mg.wi);
    Dd(a, 0, mg.Bi);
    Dd(a, 0, mg.vi);
    Dd(a, 0, mg.Fi);
    Dd(a, 0, mg.Ii);
    new Pe(Fd(a, 1)).data[0] = 1;
    new fg(P(a, 3)).data[0] = 48;
    new Qe(Fd(a, 5)).data[0] = 1;
    new Qe(Fd(a, 5)).data[0] = 2;
    new We(Fd(a, 4)).data[0] = 1;
    new We(Fd(a, 4)).data[0] = 2;
    var b = se(qg(a));
    b.data[0] = 2;
    b.data[1] = !0;
    b.data[2] = 2;
    b = se(qg(a));
    b.data[0] = 2;
    b.data[1] = !1;
    b.data[2] = 3;
    b = se(qg(a));
    b.data[0] = 3;
    b.data[1] = !0;
    b.data[2] = 2;
    b = se(qg(a));
    b.data[0] = 3;
    b.data[1] = !1;
    b.data[2] = 3;
    b = se(qg(a));
    b.data[0] = 8;
    b.data[1] = !1;
    b.data[2] = 3;
    b = se(qg(a));
    b.data[0] = 1;
    b.data[1] = !1;
    b.data[2] = 3;
    b = se(qg(a));
    b.data[0] = 4;
    b.data[1] = !1;
    b.data[2] = 3;
    b = se(qg(a));
    b.data[0] = 10;
    b.data[1] = !0;
    b.data[2] = 2;
    b = se(qg(a));
    b.data[0] = 10;
    b.data[1] = !1;
    b.data[2] = 3;
  }
  function jy(a) {
    for (var b = 0; b < Q(a, 5); ++b) {
      var c = Ag(a, b);
      if (L(c, 5)) {
        var d = new af(c.data[5]);
        if (L(d, 1))
          return (
            (a = new $e(d.data[1])),
            (b = Ib(Nd(new Od(a.data, 2)))),
            2 == M(new We(d.data[0]), 0)
              ? new uu(b)
              : new Ox(
                  new ce(a.data[0]).V(),
                  N(new ce(a.data[0]), 0),
                  new Ze(c.data[4]),
                  b
                )
          );
      }
    }
    return new uu("");
  }
  function hy(a, b, c, d) {
    var e = new vu();
    if (1 === c.Ca() && (a.Ca().Zb() === ng.If || a.Ca().Zb() === ng.Jf))
      if (((e.A = a), $t(d))) {
        e.B = xu(a);
        e.C.push(jy(a));
        a: {
          for (var f = 0; f < Q(a, 5); ++f)
            if (
              ((c = Ag(a, f)), L(c, 5) && ((d = new af(c.data[5])), L(d, 3)))
            ) {
              a = new $e(d.data[3]);
              f = String(Ib(Nd(new Od(a.data, 2))));
              a =
                2 == M(new Qe(d.data[2]), 0)
                  ? new Kx(f)
                  : new Px(
                      new ce(a.data[0]).V(),
                      N(new ce(a.data[0]), 0),
                      new Ve(c.data[3]),
                      f
                    );
              break a;
            }
          a = null;
        }
        a && e.C.push(a);
      } else if (bu(d))
        (c = new Mm()), (d = new Im(P(c, 1))), zu(d, a), (e.B = c);
      else {
        c = new Hm();
        d = null;
        for (f = 0; f < Q(a, 5); ++f) {
          var g = Ag(a, f);
          if (L(g, 1) && ((d = g), 2 === M(new Pe(d.data[0]), 0))) break;
        }
        d &&
          ((f = new ne()),
          R(new de(P(f, 0)), bf(d)),
          fu(f, new Eg(P(new Jm(P(c, 1)), 0))));
        L(wg(a), 2) &&
          ((d = new ce(wg(a).data[2])),
          (f = new Eg(P(new Jm(P(c, 1)), 0))),
          Ug(Og(f), d.V()),
          Wg(Og(f), N(d, 0)));
        d = new Im(P(c, 2));
        zu(d, a);
        L(wg(a), 3) &&
          2 != M(wg(a), 0) &&
          ((a = Hf(wg(a))),
          (d = new Hg(P(c, 8))),
          L(a, 1)
            ? (Ug(d, new ce(a.data[1]).V()), Wg(d, N(new ce(a.data[1]), 0)))
            : (Ug(d, new ce(new Ef(Gd(a, 0, 0)).data[0]).V()),
              Wg(d, N(new ce(new Ef(Gd(a, 0, 0)).data[0]), 0))),
          (c.data[9] = Q(a, 0) - 1));
        e.B = c;
      }
    b(e);
  }
  function ky(a, b, c, d, e, f, g, k, l) {
    b = new dy(c, d, e, f, g, k, l);
    a(b);
  }
  function ly(a) {
    if (Pc) a = my(a);
    else if (Tc && Qc)
      switch (a) {
        case 93:
          a = 91;
      }
    return a;
  }
  function my(a) {
    switch (a) {
      case 61:
        return 187;
      case 59:
        return 186;
      case 173:
        return 189;
      case 224:
        return 91;
      case 0:
        return 224;
      default:
        return a;
    }
  }
  function ny(a, b, c, d, e, f) {
    if (6 == arguments.length) oy(this, a, b, c, d, e, f);
    else {
      if (0 != arguments.length) throw Error("Insufficient matrix parameters");
      this.B = this.F = 1;
      this.A = this.C = this.D = this.G = 0;
    }
  }
  function py(a) {
    return new ny(a.B, a.A, a.C, a.F, a.D, a.G);
  }
  function oy(a, b, c, d, e, f, g) {
    if (!(Ba(b) && Ba(c) && Ba(d) && Ba(e) && Ba(f) && Ba(g)))
      throw Error("Invalid transform parameters");
    a.B = b;
    a.A = c;
    a.C = d;
    a.F = e;
    a.D = f;
    a.G = g;
    return a;
  }
  y = ny.prototype;
  y.scale = function(a, b) {
    this.B *= a;
    this.A *= a;
    this.C *= b;
    this.F *= b;
    return this;
  };
  y.translate = function(a, b) {
    this.D += a * this.B + b * this.C;
    this.G += a * this.A + b * this.F;
    return this;
  };
  y.rotate = function(a, b, c) {
    var d = new ny(),
      e = Math.cos(a);
    a = Math.sin(a);
    b = oy(d, e, a, -a, e, b - b * e + c * a, c - b * a - c * e);
    c = this.B;
    d = this.C;
    this.B = b.B * c + b.A * d;
    this.C = b.C * c + b.F * d;
    this.D += b.D * c + b.G * d;
    c = this.A;
    d = this.F;
    this.A = b.B * c + b.A * d;
    this.F = b.C * c + b.F * d;
    this.G += b.D * c + b.G * d;
    return this;
  };
  y.toString = function() {
    return (
      "matrix(" + [this.B, this.A, this.C, this.F, this.D, this.G].join() + ")"
    );
  };
  y.transform = function(a, b, c, d, e) {
    var f = b;
    for (b += 2 * e; f < b; ) {
      e = a[f++];
      var g = a[f++];
      c[d++] = e * this.B + g * this.C + this.D;
      c[d++] = e * this.A + g * this.F + this.G;
    }
  };
  function qy(a, b) {
    Yj.call(this);
    this.Ob = a;
    this.ib = b;
    this[tj] = !1;
  }
  I(qy, Yj);
  y = qy.prototype;
  y.ib = null;
  y.Ob = null;
  y.ee = null;
  y.Z = u("Ob");
  y.addEventListener = function(a, b, c, d) {
    Fj(this.Ob, a, b, c, d);
  };
  y.removeEventListener = function(a, b, c, d) {
    Nj(this.Ob, a, b, c, d);
  };
  y.ga = function() {
    qy.X.ga.call(this);
    Pj(this.Ob);
  };
  function ry(a, b, c, d) {
    qy.call(this, a, b);
    this.Th(c);
    this.Sh(d);
  }
  I(ry, qy);
  y = ry.prototype;
  y.fill = null;
  y.Df = null;
  y.Sh = function(a) {
    this.fill = a;
    this.ib.zf(this, a);
  };
  y.Bj = u("fill");
  y.Th = function(a) {
    this.Df = a;
    this.ib.Af(this, a);
  };
  y.wk = u("Df");
  function sy() {}
  function ty() {
    this.size = 80;
    this.A = "Arial";
  }
  function uy(a, b) {
    qy.call(this, a, b);
  }
  I(uy, qy);
  function vy() {
    this.Ra = [];
    this.da = [];
    this.bb = [];
  }
  vy.prototype.xb = null;
  vy.prototype.Oa = null;
  vy.prototype.Ic = !0;
  var wy = [2, 2, 6, 6, 0];
  y = vy.prototype;
  y.clear = function() {
    this.Ra.length = 0;
    this.da.length = 0;
    this.bb.length = 0;
    delete this.xb;
    delete this.Oa;
    delete this.Ic;
    return this;
  };
  y.Vg = function(a, b) {
    0 == Ya(this.Ra)
      ? (this.bb.length -= 2)
      : (this.Ra.push(0), this.da.push(1));
    this.bb.push(a, b);
    this.Oa = this.xb = [a, b];
    return this;
  };
  y.Ug = function(a) {
    var b = Ya(this.Ra);
    if (null == b) throw Error("Path cannot start with lineTo");
    1 != b && (this.Ra.push(1), this.da.push(0));
    for (b = 0; b < arguments.length; b += 2) {
      var c = arguments[b],
        d = arguments[b + 1];
      this.bb.push(c, d);
    }
    this.da[this.da.length - 1] += b / 2;
    this.Oa = [c, d];
    return this;
  };
  y.wg = function(a) {
    var b = Ya(this.Ra);
    if (null == b) throw Error("Path cannot start with curve");
    2 != b && (this.Ra.push(2), this.da.push(0));
    for (b = 0; b < arguments.length; b += 6) {
      var c = arguments[b + 4],
        d = arguments[b + 5];
      this.bb.push(
        arguments[b],
        arguments[b + 1],
        arguments[b + 2],
        arguments[b + 3],
        c,
        d
      );
    }
    this.da[this.da.length - 1] += b / 6;
    this.Oa = [c, d];
    return this;
  };
  y.close = function() {
    var a = Ya(this.Ra);
    if (null == a) throw Error("Path cannot start with close");
    4 != a && (this.Ra.push(4), this.da.push(1), (this.Oa = this.xb));
    return this;
  };
  y.Xi = function(a, b, c, d) {
    var e = this.Oa[0] - a * Math.cos(xb(c)),
      f = this.Oa[1] - b * Math.sin(xb(c)),
      g = xb(d);
    d = Math.ceil(Math.abs(g) / Math.PI * 2);
    g /= d;
    c = xb(c);
    for (var k = 0; k < d; k++) {
      var l = Math.cos(c),
        m = Math.sin(c),
        n = 4 / 3 * Math.sin(g / 2) / (1 + Math.cos(g / 2)),
        p = e + (l - n * m) * a,
        q = f + (m + n * l) * b;
      c += g;
      l = Math.cos(c);
      m = Math.sin(c);
      this.wg(
        p,
        q,
        e + (l + n * m) * a,
        f + (m - n * l) * b,
        e + l * a,
        f + m * b
      );
    }
    return this;
  };
  function xy(a, b) {
    for (var c = a.bb, d = 0, e = 0, f = a.Ra.length; e < f; e++) {
      var g = a.Ra[e],
        k = wy[g] * a.da[e];
      b(g, c.slice(d, d + k));
      d += k;
    }
  }
  function yy(a) {
    var b = new a.constructor();
    b.Ra = a.Ra.concat();
    b.da = a.da.concat();
    b.bb = a.bb.concat();
    b.xb = a.xb && a.xb.concat();
    b.Oa = a.Oa && a.Oa.concat();
    b.Ic = a.Ic;
    return b;
  }
  var zy = {};
  zy[0] = vy.prototype.Vg;
  zy[1] = vy.prototype.Ug;
  zy[4] = vy.prototype.close;
  zy[2] = vy.prototype.wg;
  zy[3] = vy.prototype.Xi;
  function Ay(a) {
    if (a.Ic) return yy(a);
    var b = new vy();
    xy(a, function(a, d) {
      zy[a].apply(b, d);
    });
    return b;
  }
  vy.prototype.transform = function(a) {
    if (!this.Ic) throw Error("Non-simple path");
    a.transform(this.bb, 0, this.bb, 0, this.bb.length / 2);
    this.xb && a.transform(this.xb, 0, this.xb, 0, 1);
    this.Oa && this.xb != this.Oa && a.transform(this.Oa, 0, this.Oa, 0, 1);
    return this;
  };
  vy.prototype.Ya = function() {
    return 0 == this.Ra.length;
  };
  function By(a, b, c, d) {
    ry.call(this, a, b, c, d);
  }
  I(By, ry);
  function Cy(a, b, c) {
    this.C = a;
    this.B = b;
    this.A = null == c ? 1 : c;
  }
  Cy.prototype.V = u("C");
  Cy.prototype.fb = u("B");
  function Dy(a, b, c, d) {
    ry.call(this, a, b, c, d);
  }
  I(Dy, ry);
  function Ey() {}
  Ia(Ey);
  Ey.prototype.A = 0;
  function Fy(a) {
    Yj.call(this);
    this.G = a || Oi();
    this.ca = null;
    this.Ka = !1;
    this.D = null;
    this.L = void 0;
    this.M = this.N = this.J = null;
  }
  I(Fy, Yj);
  y = Fy.prototype;
  y.Nk = Ey.Te();
  y.Z = u("D");
  y.Bf = function(a) {
    if (this.J && this.J != a) throw Error("Method not supported");
    Fy.X.Bf.call(this, a);
  };
  y.vc = function() {
    this.D = this.G.A.createElement("DIV");
  };
  y.Lb = function() {
    this.Ka = !0;
    Gy(this, function(a) {
      !a.Ka && a.Z() && a.Lb();
    });
  };
  y.Rc = function() {
    Gy(this, function(a) {
      a.Ka && a.Rc();
    });
    this.L && Xj(this.L);
    this.Ka = !1;
  };
  y.ga = function() {
    this.Ka && this.Rc();
    this.L && (this.L.ta(), delete this.L);
    Gy(this, function(a) {
      a.ta();
    });
    this.D && aj(this.D);
    this.J = this.D = this.M = this.N = null;
    Fy.X.ga.call(this);
  };
  function Gy(a, b) {
    a.N && $a(a.N, b, void 0);
  }
  y.removeChild = function(a, b) {
    if (a) {
      var c = Aa(a) ? a : a.ca || (a.ca = ":" + (a.Nk.A++).toString(36));
      this.M && c
        ? ((a = this.M), (a = (null !== a && c in a ? a[c] : void 0) || null))
        : (a = null);
      if (c && a) {
        var d = this.M;
        c in d && delete d[c];
        hb(this.N, a);
        b && (a.Rc(), a.D && aj(a.D));
        b = a;
        if (null == b) throw Error("Unable to set parent component");
        b.J = null;
        Fy.X.Bf.call(b, null);
      }
    }
    if (!a) throw Error("Child is not in parent component");
    return a;
  };
  function Hy(a, b, c, d, e) {
    Fy.call(this, e);
    this.width = a;
    this.height = b;
    this.F = c || null;
    this.I = d || null;
  }
  I(Hy, Fy);
  Hy.prototype.B = null;
  Hy.prototype.jc = function(a, b) {
    this.F = a;
    this.I = b;
  };
  function Iy(a) {
    return a.F ? new Ni(a.F, a.I) : a.Wa();
  }
  Hy.prototype.Wa = function() {
    return this.Ka
      ? wk(this.Z())
      : Ba(this.width) && Ba(this.height)
        ? new Ni(this.width, this.height)
        : null;
  };
  function Jy(a) {
    var b = a.Wa();
    return b ? b.width / Iy(a).width : 0;
  }
  function Ky(a, b, c, d, e, f) {
    c += d.size / 2;
    return a.Qe(b, 0, c, 1, c, "left", d, e, f, void 0);
  }
  function Ly(a, b) {
    qy.call(this, a, b);
  }
  I(Ly, qy);
  function My(a) {
    qy.call(this, null, a);
    this.A = [];
  }
  I(My, uy);
  My.prototype.clear = function() {
    this.A.length && ((this.A.length = 0), Ny(this.ib));
  };
  My.prototype.appendChild = function(a) {
    this.A.push(a);
  };
  My.prototype.Va = function() {
    for (var a = 0, b = this.A.length; a < b; a++) Oy(this.ib, this.A[a]);
  };
  function Py(a, b, c, d, e) {
    ry.call(this, a, b, d, e);
    this.A(c);
  }
  I(Py, By);
  Py.prototype.B = !1;
  Py.prototype.A = function(a) {
    this.C = a.Ic ? a : Ay(a);
    this.B && Ny(this.ib);
  };
  Py.prototype.Va = function(a) {
    this.B = !0;
    a.beginPath();
    xy(this.C, function(b, c) {
      switch (b) {
        case 0:
          a.moveTo(c[0], c[1]);
          break;
        case 1:
          for (b = 0; b < c.length; b += 2) a.lineTo(c[b], c[b + 1]);
          break;
        case 2:
          for (b = 0; b < c.length; b += 6)
            a.bezierCurveTo(
              c[b],
              c[b + 1],
              c[b + 2],
              c[b + 3],
              c[b + 4],
              c[b + 5]
            );
          break;
        case 3:
          throw Error("Canvas paths cannot contain arcs");
        case 4:
          a.closePath();
      }
    });
  };
  function Qy(a, b, c, d, e, f, g, k, l, m) {
    var n = Ui("DIV", {
      style: "display:table;position:absolute;padding:0;margin:0;border:0"
    });
    ry.call(this, n, a, l, m);
    this.B = b;
    this.C = c;
    this.I = d;
    this.D = e;
    this.J = f;
    this.F = g || "left";
    this.G = k;
    this.A = Ui("DIV", {
      style: "display:table-cell;padding: 0;margin: 0;border: 0"
    });
    c = this.C;
    k = this.D;
    d = this.I;
    e = this.J;
    l = this.F;
    f = this.G;
    b = this.Z().style;
    g = Jy(this.ib);
    m = this.ib;
    var p = m.Wa();
    m = p ? p.height / Iy(m).height : 0;
    c == k
      ? ((b.lineHeight = "90%"),
        (this.A.style.verticalAlign =
          "center" == l
            ? "middle"
            : "left" == l
              ? d < e ? "top" : "bottom"
              : d < e ? "bottom" : "top"),
        (b.textAlign = "center"),
        (k = f.size * g),
        (b.top = Math.round(Math.min(d, e) * m) + "px"),
        (b.left = Math.round((c - k / 2) * g) + "px"),
        (b.width = Math.round(k) + "px"),
        (b.height = Math.abs(d - e) * m + "px"),
        (b.fontSize = 0.6 * f.size * m + "pt"))
      : ((b.lineHeight = "100%"),
        (this.A.style.verticalAlign = "top"),
        (b.textAlign = l),
        (b.top = Math.round(((d + e) / 2 - 2 * f.size / 3) * m) + "px"),
        (b.left = Math.round(c * g) + "px"),
        (b.width = Math.round(Math.abs(k - c) * g) + "px"),
        (b.height = "auto"),
        (b.fontSize = f.size * m + "pt"));
    b.fontWeight = "normal";
    b.fontStyle = "normal";
    b.fontFamily = f.A;
    c = this.fill;
    b.color = c.fb() || c.Dg();
    Ry(this);
    a.Z().appendChild(n);
    n.appendChild(this.A);
  }
  I(Qy, Dy);
  Qy.prototype.Sh = function(a) {
    this.fill = a;
    var b = this.Z();
    b && (b.style.color = a.fb() || a.Dg());
  };
  Qy.prototype.Th = h();
  Qy.prototype.Va = h();
  function Ry(a) {
    if (a.C == a.D) {
      var b = bb(a.B.split(""), function(a) {
        return Zb(a);
      }).join("<br>");
      b = Bi(new yh(zh, "Concatenate escaped chars and <br>"), b);
      Ki(a.A, b);
    } else Ki(a.A, ui(a.B));
  }
  function Sy(a, b, c, d, e, f, g) {
    qy.call(this, a, b);
    this.D = c;
    this.F = d;
    this.C = e;
    this.A = f;
    this.I = g;
  }
  I(Sy, Ly);
  Sy.prototype.Va = function(a) {
    this.B
      ? this.C && this.A && a.drawImage(this.B, this.D, this.F, this.C, this.A)
      : ((a = new Image()), (a.onload = G(this.G, this, a)), (a.src = this.I));
  };
  Sy.prototype.G = function(a) {
    this.B = a;
    Ny(this.ib);
  };
  function Ty(a, b) {
    this.B = a;
    this.A = null == b ? 1 : b;
  }
  I(Ty, sy);
  Ty.prototype.fb = u("B");
  function Uy(a, b, c, d, e) {
    Hy.call(this, a, b, c, d, e);
  }
  I(Uy, Hy);
  y = Uy.prototype;
  y.zf = function() {
    Ny(this);
  };
  y.Af = function() {
    Ny(this);
  };
  y.xe = function() {
    Ny(this);
  };
  function Vy(a, b) {
    a = a.getContext();
    a.save();
    b = b.ee ? py(b.ee) : new ny();
    var c = b.D,
      d = b.G;
    (c || d) && a.translate(c, d);
    (b = b.A) && a.rotate(Math.asin(b));
  }
  y.vc = function() {
    var a = this.G.We("DIV", { style: "position:relative;overflow:hidden" });
    this.D = a;
    this.C = this.G.We("CANVAS");
    a.appendChild(this.C);
    this.R = this.B = new My(this);
    this.T = 0;
    Wy(this);
  };
  y.getContext = function() {
    this.Z() || this.vc();
    this.A || ((this.A = this.C.getContext("2d")), this.A.save());
    return this.A;
  };
  y.jc = function(a, b) {
    Uy.X.jc.apply(this, arguments);
    Ny(this);
  };
  y.Wa = function() {
    var a = this.width,
      b = this.height,
      c = Aa(a) && -1 != a.indexOf("%"),
      d = Aa(b) && -1 != b.indexOf("%");
    if (!this.Ka && (c || d)) return null;
    if (c) {
      var e = this.Z().parentNode;
      var f = wk(e);
      a = parseFloat(a) * f.width / 100;
    }
    d &&
      ((e = e || this.Z().parentNode),
      (f = f || wk(e)),
      (b = parseFloat(b) * f.height / 100));
    return new Ni(a, b);
  };
  function Wy(a) {
    uk(a.Z(), a.width, a.height);
    var b = a.Wa();
    b &&
      (uk(a.C, b.width, b.height),
      (a.C.width = b.width),
      (a.C.height = b.height),
      (a.A = null));
  }
  y.reset = function() {
    var a = this.getContext();
    a.restore();
    var b = this.Wa();
    b.width && b.height && a.clearRect(0, 0, b.width, b.height);
    a.save();
  };
  y.clear = function() {
    this.reset();
    this.B.clear();
    for (var a = this.Z(); 1 < a.childNodes.length; )
      a.removeChild(a.lastChild);
  };
  function Ny(a) {
    if (!a.W && a.Ka) {
      a.reset();
      if (a.F) {
        var b = a.Wa();
        a.getContext().scale(b.width / a.F, b.height / a.I);
      }
      Vy(a, a.B);
      a.B.Va(a.A);
      a.getContext().restore();
    }
  }
  function Oy(a, b) {
    if (!(b instanceof Qy)) {
      var c = a.getContext();
      Vy(a, b);
      if (b.Bj && b.wk) {
        var d = b.fill;
        if (d)
          if (d instanceof Ty)
            0 != d.A &&
              ((c.globalAlpha = d.A),
              (c.fillStyle = d.fb()),
              b.Va(c),
              c.fill(),
              (c.globalAlpha = 1));
          else {
            var e = c.createLinearGradient(d.Co(), d.Eo(), d.Do(), d.Fo());
            e.addColorStop(0, d.Dg());
            e.addColorStop(1, d.Bo());
            c.fillStyle = e;
            b.Va(c);
            c.fill();
          }
        if ((d = b.Df))
          b.Va(c),
            (c.strokeStyle = d.fb()),
            (b = d.V()),
            Aa(b) && -1 != b.indexOf("px") && (b = parseFloat(b) / Jy(a)),
            (c.lineWidth = b),
            c.stroke();
      } else b.Va(c);
      a.getContext().restore();
    }
  }
  function Xy(a, b, c) {
    c = c || a.B;
    c.appendChild(b);
    !a.Ka || a.T || (c != a.B && c != a.R) || Oy(a, b);
  }
  y.drawImage = function(a, b, c, d, e, f) {
    a = new Sy(null, this, a, b, c, d, e);
    Xy(this, a, f);
    return a;
  };
  y.Qe = function(a, b, c, d, e, f, g, k, l, m) {
    a = new Qy(this, a, b, c, d, e, f, g, k, l);
    Xy(this, a, m);
    return a;
  };
  y.Pe = function(a, b, c) {
    a = new Py(null, this, a, b, c);
    Xy(this, a, void 0);
  };
  y.ga = function() {
    this.A = null;
    Uy.X.ga.call(this);
  };
  y.Lb = function() {
    var a = this.Wa();
    Uy.X.Lb.call(this);
    a || (Wy(this), this.dispatchEvent("resize"));
    Ny(this);
  };
  function Yy(a, b) {
    qy.call(this, a, b);
  }
  I(Yy, uy);
  Yy.prototype.clear = function() {
    Zi(this.Z());
  };
  function Zy(a, b, c, d) {
    ry.call(this, a, b, c, d);
  }
  I(Zy, By);
  Zy.prototype.A = function(a) {
    var b = this.Z();
    a = { d: $y(a) };
    for (var c in a) b.setAttribute(c, a[c]);
  };
  function az(a, b, c, d) {
    ry.call(this, a, b, c, d);
  }
  I(az, Dy);
  function bz(a, b) {
    qy.call(this, a, b);
  }
  I(bz, Ly);
  function cz(a, b, c, d, e) {
    Hy.call(this, a, b, c, d, e);
    this.T = {};
    this.R = Qc && !bd(526);
    this.A = new Tj(this);
  }
  var dz;
  I(cz, Hy);
  function ez(a, b, c) {
    a = a.G.A.createElementNS("http://www.w3.org/2000/svg", b);
    if (c) for (var d in c) a.setAttribute(d, c[d]);
    return a;
  }
  y = cz.prototype;
  y.zf = function(a, b) {
    a = a.Z();
    b instanceof Ty
      ? (a.setAttribute("fill", b.fb()), a.setAttribute("fill-opacity", b.A))
      : a.setAttribute("fill", "none");
  };
  y.Af = function(a, b) {
    a = a.Z();
    b
      ? (a.setAttribute("stroke", b.fb()),
        a.setAttribute("stroke-opacity", b.A),
        (b = b.V()),
        Aa(b) && -1 != b.indexOf("px")
          ? a.setAttribute("stroke-width", parseFloat(b) / Jy(this))
          : a.setAttribute("stroke-width", b))
      : a.setAttribute("stroke", "none");
  };
  y.xe = function(a, b) {
    b = [b.B, b.A, b.C, b.F, b.D, b.G].join();
    a.Z().setAttribute("transform", "matrix(" + b + ")");
  };
  y.vc = function() {
    var a = ez(this, "svg", {
        width: this.width,
        height: this.height,
        overflow: "hidden"
      }),
      b = ez(this, "g");
    this.C = ez(this, "defs");
    this.B = new Yy(b, this);
    a.appendChild(this.C);
    a.appendChild(b);
    this.D = a;
    fz(this);
  };
  y.jc = function(a, b) {
    cz.X.jc.apply(this, arguments);
    fz(this);
  };
  function fz(a) {
    a.F &&
      (a.Z().setAttribute("preserveAspectRatio", "none"),
      a.R
        ? a.Be()
        : a.Z().setAttribute("viewBox", "0 0 " + (a.F ? a.F + " " + a.I : "")));
  }
  y.Be = function() {
    if (this.Ka) {
      var a = this.Wa();
      if (0 == a.width) this.Z().style.visibility = "hidden";
      else {
        this.Z().style.visibility = "";
        var b = a.width / this.F;
        a = a.height / this.I;
        this.B.Z().setAttribute(
          "transform",
          "scale(" + b + " " + a + ") translate(0 0)"
        );
      }
    }
  };
  y.Wa = function() {
    if (!Pc) return this.Ka ? wk(this.Z()) : cz.X.Wa.call(this);
    var a = this.width,
      b = this.height,
      c = Aa(a) && -1 != a.indexOf("%"),
      d = Aa(b) && -1 != b.indexOf("%");
    if (!this.Ka && (c || d)) return null;
    if (c) {
      var e = this.Z().parentNode;
      var f = wk(e);
      a = parseFloat(a) * f.width / 100;
    }
    d &&
      ((e = e || this.Z().parentNode),
      (f = f || wk(e)),
      (b = parseFloat(b) * f.height / 100));
    return new Ni(a, b);
  };
  y.clear = function() {
    this.B.clear();
    Zi(this.C);
    this.T = {};
  };
  y.drawImage = function(a, b, c, d, e, f) {
    a = ez(this, "image", {
      x: a,
      y: b,
      width: c,
      height: d,
      "image-rendering": "optimizeQuality",
      preserveAspectRatio: "none"
    });
    a.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
    e = new bz(a, this);
    (f || this.B).Z().appendChild(e.Z());
    return e;
  };
  y.Qe = function(a, b, c, d, e, f, g, k, l, m) {
    var n = Math.round(wb(yb(Math.atan2(e - c, d - b))));
    d -= b;
    e -= c;
    e = Math.round(Math.sqrt(d * d + e * e));
    d = g.size;
    g = { "font-family": g.A, "font-size": d };
    d = Math.round(c - d / 2 + Math.round(0.85 * d));
    var p = b;
    "center" == f
      ? ((p += Math.round(e / 2)), (g["text-anchor"] = "middle"))
      : "right" == f && ((p += e), (g["text-anchor"] = "end"));
    g.x = p;
    g.y = d;
    0 != n && (g.transform = "rotate(" + n + " " + b + " " + c + ")");
    b = ez(this, "text", g);
    b.appendChild(this.G.A.createTextNode(a));
    null == k &&
      Pc &&
      Tc &&
      ((a = "black"), l instanceof Ty && (a = l.fb()), (k = new Cy(1, a)));
    l = new az(b, this, k, l);
    (m || this.B).Z().appendChild(l.Z());
    return l;
  };
  y.Pe = function(a, b, c) {
    a = ez(this, "path", { d: $y(a) });
    b = new Zy(a, this, b, c);
    this.B.Z().appendChild(b.Z());
  };
  function $y(a) {
    var b = [];
    xy(a, function(a, d) {
      switch (a) {
        case 0:
          b.push("M");
          Array.prototype.push.apply(b, d);
          break;
        case 1:
          b.push("L");
          Array.prototype.push.apply(b, d);
          break;
        case 2:
          b.push("C");
          Array.prototype.push.apply(b, d);
          break;
        case 3:
          a = d[3];
          b.push(
            "A",
            d[0],
            d[1],
            0,
            180 < Math.abs(a) ? 1 : 0,
            0 < a ? 1 : 0,
            d[4],
            d[5]
          );
          break;
        case 4:
          b.push("Z");
      }
    });
    return b.join(" ");
  }
  y.Lb = function() {
    var a = this.Wa();
    cz.X.Lb.call(this);
    a || this.dispatchEvent("resize");
    if (this.R) {
      a = this.width;
      var b = this.height;
      "string" == typeof a &&
        -1 != a.indexOf("%") &&
        "string" == typeof b &&
        -1 != b.indexOf("%") &&
        this.A.listen(gz(), "tick", this.Be);
      this.Be();
    }
  };
  y.Rc = function() {
    cz.X.Rc.call(this);
    this.R && this.A.oc(gz(), "tick", this.Be);
  };
  y.ga = function() {
    delete this.T;
    delete this.C;
    delete this.B;
    this.A.ta();
    delete this.A;
    cz.X.ga.call(this);
  };
  function gz() {
    dz || ((dz = new vw(400)), dz.start());
    return dz;
  }
  function hz() {
    return (this.Ob = this.ib.G.Z(this.ca) || this.Ob);
  }
  function iz(a, b) {
    this.ca = a.id;
    qy.call(this, a, b);
  }
  I(iz, uy);
  iz.prototype.Z = hz;
  iz.prototype.clear = function() {
    Zi(this.Z());
  };
  function jz(a, b, c, d) {
    this.ca = a.id;
    ry.call(this, a, b, c, d);
  }
  I(jz, By);
  jz.prototype.Z = hz;
  jz.prototype.A = function(a) {
    kz(this.Z(), "path", lz(a));
  };
  function mz(a, b, c, d) {
    this.ca = a.id;
    ry.call(this, a, b, c, d);
  }
  I(mz, Dy);
  mz.prototype.Z = hz;
  function nz(a, b) {
    this.ca = a.id;
    qy.call(this, a, b);
  }
  I(nz, Ly);
  nz.prototype.Z = hz;
  function oz(a, b, c, d, e) {
    Hy.call(this, a, b, c, d, e);
    this.A = new Tj(this);
    Ei(this, Ta(Fi, this.A));
  }
  I(oz, Hy);
  var pz =
    E.document && E.document.documentMode && 8 <= E.document.documentMode;
  function qz(a) {
    return Aa(a) && Wb(a, "%") ? a : parseFloat(a.toString()) + "px";
  }
  function rz(a) {
    return Math.round(100 * (parseFloat(a.toString()) - 0.5));
  }
  function sz(a) {
    return Math.round(100 * parseFloat(a.toString()));
  }
  function kz(a, b, c) {
    pz ? (a[b] = c) : a.setAttribute(b, c);
  }
  function tz(a, b) {
    a = a.G.A.createElement(String("g_vml_:" + b));
    a.id = "goog_" + qc++;
    return a;
  }
  function uz(a) {
    if (pz && a.Ka) {
      var b = Bi(new yh(zh, "Assign innerHTML to itself"), a.Z().innerHTML);
      Ki(a.Z(), b);
    }
  }
  function vz(a, b, c) {
    (c || a.B).Z().appendChild(b.Z());
    uz(a);
  }
  oz.prototype.zf = function(a, b) {
    a = a.Z();
    wz(a);
    if (b instanceof Ty)
      if ("transparent" == b.fb()) a.filled = !1;
      else if (1 != b.A) {
        a.filled = !0;
        var c = tz(this, "fill");
        c.opacity = Math.round(100 * b.A) + "%";
        c.color = b.fb();
        a.appendChild(c);
      } else (a.filled = !0), (a.fillcolor = b.fb());
    else a.filled = !1;
    uz(this);
  };
  oz.prototype.Af = function(a, b) {
    a = a.Z();
    if (b) {
      a.stroked = !0;
      var c = b.V();
      c = Aa(c) && -1 == c.indexOf("px") ? parseFloat(c) : c * Jy(this);
      var d = a.getElementsByTagName("stroke")[0];
      d || ((d = d || tz(this, "stroke")), a.appendChild(d));
      d.opacity = b.A;
      d.weight = c + "px";
      d.color = b.fb();
    } else a.stroked = !1;
    uz(this);
  };
  oz.prototype.xe = function(a, b) {
    a = a.Z();
    xz(a);
    var c = tz(this, "skew");
    c.Oo = "true";
    c.origin =
      -a.style.pixelLeft / a.style.pixelWidth -
      0.5 +
      "," +
      (-a.style.pixelTop / a.style.pixelHeight - 0.5);
    c.offset = b.D.toFixed(1) + "px," + b.G.toFixed(1) + "px";
    c.Jo = [
      b.B.toFixed(6),
      b.C.toFixed(6),
      b.A.toFixed(6),
      b.F.toFixed(6),
      0,
      0
    ].join();
    a.appendChild(c);
    uz(this);
  };
  function xz(a) {
    $a(a.childNodes, function(b) {
      "skew" == b.tagName && a.removeChild(b);
    });
  }
  function wz(a) {
    a.fillcolor = "";
    $a(a.childNodes, function(b) {
      "fill" == b.tagName && a.removeChild(b);
    });
  }
  function zz(a, b, c, d, e) {
    var f = a.style;
    f.position = "absolute";
    f.left = rz(b) + "px";
    f.top = rz(c) + "px";
    f.width = sz(d) + "px";
    f.height = sz(e) + "px";
    "shape" == a.tagName && (a.coordsize = sz(d) + " " + sz(e));
  }
  function Az(a) {
    var b = tz(a, "shape");
    a = Iy(a);
    zz(b, 0, 0, a.width, a.height);
    return b;
  }
  if (Nc)
    try {
      Jc(document.namespaces);
    } catch (a) {}
  y = oz.prototype;
  y.vc = function() {
    var a = this.G.A;
    a.namespaces.g_vml_ ||
      (pz
        ? a.namespaces.add(
            "g_vml_",
            "urn:schemas-microsoft-com:vml",
            "#default#VML"
          )
        : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"),
      (a.createStyleSheet().cssText =
        "g_vml_\\:*{behavior:url(#default#VML)}"));
    a = this.width;
    var b = this.height,
      c = this.G.We("DIV", {
        style:
          "overflow:hidden;position:relative;width:" +
          qz(a) +
          ";height:" +
          qz(b)
      });
    this.D = c;
    var d = tz(this, "group"),
      e = d.style;
    e.position = "absolute";
    e.left = e.top = "0";
    e.width = this.width;
    e.height = this.height;
    d.coordsize = this.F ? sz(this.F) + " " + sz(this.I) : sz(a) + " " + sz(b);
    d.coordorigin = F(0) ? sz(0) + " " + sz(0) : "0 0";
    c.appendChild(d);
    this.B = new iz(d, this);
    Fj(c, "resize", G(this.Xe, this));
  };
  y.Xe = function() {
    var a = wk(this.Z()),
      b = this.B.Z().style;
    if (a.width) (b.width = a.width + "px"), (b.height = a.height + "px");
    else {
      for (
        a = this.Z();
        a && a.currentStyle && "none" != a.currentStyle.display;

      )
        a = a.parentNode;
      a && a.currentStyle && this.A.listen(a, "propertychange", this.Xe);
    }
    this.dispatchEvent("resize");
  };
  y.jc = function(a, b) {
    oz.X.jc.apply(this, arguments);
    this.B.Z().coordsize = sz(a) + " " + sz(b);
  };
  y.Wa = function() {
    var a = this.Z();
    return new Ni(
      a.style.pixelWidth || a.offsetWidth || 1,
      a.style.pixelHeight || a.offsetHeight || 1
    );
  };
  y.clear = function() {
    this.B.clear();
  };
  y.drawImage = function(a, b, c, d, e, f) {
    var g = tz(this, "image");
    zz(g, a, b, c, d);
    kz(g, "src", e);
    a = new nz(g, this);
    vz(this, a, f);
    return a;
  };
  y.Qe = function(a, b, c, d, e, f, g, k, l, m) {
    var n = Az(this),
      p = tz(this, "path");
    kz(p, "v", "M" + rz(b) + "," + rz(c) + "L" + rz(d) + "," + rz(e) + "E");
    kz(p, "textpathok", "true");
    b = tz(this, "textpath");
    b.setAttribute("on", "true");
    c = b.style;
    c.fontSize = g.size * Jy(this);
    c.fontFamily = g.A;
    null != f && (c["v-text-align"] = f);
    kz(b, "string", a);
    n.appendChild(p);
    n.appendChild(b);
    a = new mz(n, this, k, l);
    vz(this, a, m);
    return a;
  };
  y.Pe = function(a, b, c) {
    var d = Az(this);
    kz(d, "path", lz(a));
    a = new jz(d, this, b, c);
    vz(this, a, void 0);
  };
  function lz(a) {
    var b = [];
    xy(a, function(a, d) {
      switch (a) {
        case 0:
          b.push("m");
          Array.prototype.push.apply(b, bb(d, sz));
          break;
        case 1:
          b.push("l");
          Array.prototype.push.apply(b, bb(d, sz));
          break;
        case 2:
          b.push("c");
          Array.prototype.push.apply(b, bb(d, sz));
          break;
        case 4:
          b.push("x");
          break;
        case 3:
          (a = d[2] + d[3]),
            b.push(
              "ae",
              sz(d[4] - d[0] * Math.cos(xb(a))),
              sz(d[5] - d[1] * Math.sin(xb(a))),
              sz(d[0]),
              sz(d[1]),
              Math.round(-65536 * d[2]),
              Math.round(-65536 * d[3])
            );
      }
    });
    return b.join(" ");
  }
  y.Lb = function() {
    oz.X.Lb.call(this);
    this.Xe();
    uz(this);
  };
  y.ga = function() {
    this.B = null;
    oz.X.ga.call(this);
  };
  function Bz(a, b, c) {
    this.A = a;
    this.C = b;
    this.B = c;
  }
  function Cz(a, b) {
    if (0 == b) return 0;
    if (1 == b) return 1;
    var c = vb(0, a.A, b),
      d = vb(a.A, a.B, b);
    a = vb(a.B, 1, b);
    c = vb(c, d, b);
    d = vb(d, a, b);
    return vb(c, d, b);
  }
  function Dz(a, b) {
    if (0 == b) return 0;
    if (1 == b) return 1;
    var c = vb(0, a.C, b);
    a = vb(a.C, 1, b);
    var d = vb(1, 1, b);
    c = vb(c, a, b);
    a = vb(a, d, b);
    return vb(c, a, b);
  }
  function Ez(a, b) {
    var c = b - 0;
    if (0 >= c) return 0;
    if (1 <= c) return 1;
    for (var d = 0, e = 1, f = 0, g = 0; 8 > g; g++) {
      f = Cz(a, c);
      var k = (Cz(a, c + 1e-6) - f) / 1e-6;
      if (1e-6 > Math.abs(f - b)) return c;
      if (1e-6 > Math.abs(k)) break;
      else f < b ? (d = c) : (e = c), (c -= (f - b) / k);
    }
    for (g = 0; 1e-6 < Math.abs(f - b) && 8 > g; g++)
      f < b ? ((d = c), (c = (c + e) / 2)) : ((e = c), (c = (c + d) / 2)),
        (f = Cz(a, c));
    return c;
  }
  function Fz(a, b) {
    this.x = a;
    this.y = b;
  }
  I(Fz, Mi);
  Fz.prototype.scale = Mi.prototype.scale;
  Fz.prototype.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    return this;
  };
  Fz.prototype.rotate = function(a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    var c = this.y * b + this.x * a;
    this.x = this.x * b - this.y * a;
    this.y = c;
    return this;
  };
  function Gz(a) {
    return (a = a.exec(lc)) ? a[1] : "";
  }
  var Hz = (function() {
    if (ed) return Gz(/Firefox\/([0-9.]+)/);
    if (Nc || Oc || Mc) return ad;
    if (id)
      return Ic() || xc("iPad") || xc("iPod")
        ? Gz(/CriOS\/([0-9.]+)/)
        : Gz(/Chrome\/([0-9.]+)/);
    if (jd && !(Ic() || xc("iPad") || xc("iPod")))
      return Gz(/Version\/([0-9.]+)/);
    if (fd || gd) {
      var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(lc);
      if (a) return a[1] + "." + a[2];
    } else if (hd)
      return (a = Gz(/Android\s+([0-9.]+)/)) ? a : Gz(/Version\/([0-9.]+)/);
    return "";
  })();
  var Iz = {};
  function Jz(a, b) {
    if (document.createEvent) {
      var c = document.createEvent("Event");
      c.initEvent(b || a.type, !0, !0);
    } else (c = document.createEventObject()), (c.type = b || a.type);
    c.kd = a.timeStamp;
    return c;
  }
  function Kz() {
    this.F = [];
    this.A = [];
    this.B = [];
    this.G = {};
    this.C = null;
    this.D = [];
    this.H = Ha;
  }
  var Lz =
      "undefined" != typeof navigator &&
      /iPhone|iPad|iPod/.test(navigator.userAgent),
    Mz = String.prototype.trim
      ? function(a) {
          return a.trim();
        }
      : function(a) {
          return a.replace(/^\s+/, "").replace(/\s+$/, "");
        },
    Nz = /\s*;\s*/;
  function Oz(a, b) {
    return function(c) {
      var d = b;
      var e;
      "click" == d &&
        ((Bl && c.metaKey) ||
          (!Bl && c.ctrlKey) ||
          2 == c.which ||
          (null == c.which && 4 == c.button) ||
          c.shiftKey) &&
        (d = "clickmod");
      var f = c.srcElement || c.target,
        g = Pz(d, c, f, "", null),
        k;
      for (e = f; e && e != this; e = e.__owner || e.parentNode) {
        var l = (k = e);
        var m = d,
          n = l.__jsaction;
        if (!n) {
          var p = Qz(l, "jsaction");
          if (p) {
            n = Iz[p];
            if (!n) {
              n = {};
              for (
                var q = p.split(Nz), t = 0, r = q ? q.length : 0;
                t < r;
                t++
              ) {
                var v = q[t];
                if (v) {
                  var x = v.indexOf(":"),
                    z = -1 != x,
                    A = z ? Mz(v.substr(0, x)) : "click";
                  v = z ? Mz(v.substr(x + 1)) : v;
                  n[A] = v;
                }
              }
              Iz[p] = n;
            }
            p = n;
            n = {};
            for (A in p) {
              q = n;
              t = A;
              b: if (((r = p[A]), !(0 <= r.indexOf("."))))
                for (v = l; v; v = v.parentNode) {
                  x = v;
                  z = x.__jsnamespace;
                  F(z) || ((z = Qz(x, "jsnamespace")), (x.__jsnamespace = z));
                  if ((x = z)) {
                    r = x + "." + r;
                    break b;
                  }
                  if (v == this) break;
                }
              q[t] = r;
            }
            l.__jsaction = n;
          } else (n = Rz), (l.__jsaction = n);
        }
        l = { yb: m, action: n[m] || "", event: null, Qk: !1 };
        if (l.Qk || l.action) break;
      }
      l && (g = Pz(l.yb, l.event || c, f, l.action || "", k, g.timeStamp));
      g && "touchend" == g.eventType && (g.event._preventMouseEvents = Gl);
      (l && l.action) || ((g.action = ""), (g.actionElement = null));
      d = g;
      a.C &&
        ((e = Pz(
          d.eventType,
          d.event,
          d.targetElement,
          d.action,
          d.actionElement,
          d.timeStamp
        )),
        "clickonly" == e.eventType && (e.eventType = "click"),
        a.C(e, !0));
      if (
        d.actionElement &&
        ("A" != d.actionElement.tagName ||
          ("click" != d.eventType && "clickmod" != d.eventType) ||
          null == a.C ||
          zl(c),
        a.C ? a.C(d) : (a.H(d), (c = Hl(c)), (d.event = c), a.D.push(d)),
        "touchend" == d.event.type && d.event._mouseEventsPrevented)
      ) {
        c = d.event;
        for (var H in c) (d = c[H]), "type" == H || "srcElement" == H || Ma(d);
        Ua();
      }
    };
  }
  function Pz(a, b, c, d, e, f) {
    return {
      eventType: a,
      event: b,
      targetElement: c,
      action: d,
      actionElement: e,
      timeStamp: f || Ua()
    };
  }
  function Qz(a, b) {
    var c = null;
    "getAttribute" in a && (c = a.getAttribute(b));
    return c;
  }
  var Rz = {};
  function Sz(a, b) {
    return function(c) {
      var d = a,
        e = b,
        f = !1;
      "mouseenter" == d
        ? (d = "mouseover")
        : "mouseleave" == d && (d = "mouseout");
      if (c.addEventListener) {
        if ("focus" == d || "blur" == d || "error" == d || "load" == d) f = !0;
        c.addEventListener(d, e, f);
      } else
        c.attachEvent &&
          ("focus" == d ? (d = "focusin") : "blur" == d && (d = "focusout"),
          (e = yl(c, e)),
          c.attachEvent("on" + d, e));
      return { yb: d, jb: e, capture: f };
    };
  }
  Kz.prototype.jb = function(a) {
    return this.G[a];
  };
  function Tz(a) {
    for (var b = a.B.concat(a.A), c = [], d = [], e = 0; e < a.A.length; ++e) {
      var f = a.A[e];
      Uz(f, b) ? (c.push(f), Vz(f)) : d.push(f);
    }
    for (e = 0; e < a.B.length; ++e)
      (f = a.B[e]), Uz(f, b) ? c.push(f) : (d.push(f), Wz(a, f));
    a.A = d;
    a.B = c;
  }
  function Wz(a, b) {
    var c = b.A;
    Lz && (c.style.cursor = "pointer");
    for (c = 0; c < a.F.length; ++c) b.B.push(a.F[c].call(null, b.A));
  }
  function Xz(a) {
    this.A = a;
    this.B = [];
  }
  function Uz(a, b) {
    for (var c = 0; c < b.length; ++c)
      if (b[c].A != a.A && Yz(b[c].A, a.A)) return !0;
    return !1;
  }
  function Yz(a, b) {
    for (; a != b && b.parentNode; ) b = b.parentNode;
    return a == b;
  }
  function Vz(a) {
    for (var b = 0; b < a.B.length; ++b) {
      var c = a.A,
        d = a.B[b];
      c.removeEventListener
        ? c.removeEventListener(d.yb, d.jb, d.capture)
        : c.detachEvent && c.detachEvent("on" + d.yb, d.jb);
    }
    a.B = [];
  }
  var Zz = { Ae: 18896 },
    $z = { Ae: 18895 },
    aA = { Ae: 6176 },
    bA = { Ae: 5610 },
    cA = { Ae: 5611 };
  function dA(a, b) {
    return E.setTimeout(function() {
      try {
        a();
      } catch (c) {
        throw c;
      }
    }, b);
  }
  function eA(a) {
    return E.setInterval(function() {
      try {
        a();
      } catch (b) {
        throw b;
      }
    }, 1e4);
  }
  function fA(a) {
    this.G = F(void 0) ? void 0 : 20;
    this.F = a;
    this.C = this.B = this.A = null;
    var b = this;
    this.D = function() {
      b.B = null;
      b.C = null;
      if (null !== b.A) {
        var a = Ua();
        a >= b.A - b.G
          ? ((b.A = null), (a = b.F), a())
          : ((b.C = b.A), (b.B = dA(b.D, b.A - a)));
      }
    };
  }
  fA.prototype.start = function(a) {
    this.A = Ua() + a;
    if (null !== this.B) {
      if (this.A >= this.C) return;
      E.clearTimeout(this.B);
    }
    this.C = this.A;
    this.B = dA(this.D, a);
  };
  fA.prototype.cancel = function() {
    this.A = null;
  };
  function gA(a, b, c) {
    var d = this;
    this.G = a;
    this.F = b;
    this.C = c;
    this.B = null;
    this.D = new fA(function() {
      var a = d.B;
      a && ((d.B = null), d.F(a), a.done(d.C));
    });
  }
  gA.prototype.start = function(a) {
    null === this.D.A &&
      (a.na(this.C),
      this.B && this.B.done(this.C),
      (this.B = a),
      this.D.start(this.G));
  };
  gA.prototype.A = function() {
    this.D.cancel();
    this.B && (this.B.done(this.C), (this.B = null));
  };
  function hA() {}
  hA.prototype.A = h();
  var iA = {};
  function jA(a, b, c, d) {
    var e = E.setTimeout(function() {
      var b = iA[e];
      delete iA[e];
      try {
        a.call(E, b.sa);
      } catch (g) {
        throw lm(g);
      }
      b.sa.done(b.Pf);
    }, b);
    c.na(d);
    b = {};
    b.sa = c;
    b.Pf = d;
    iA[e] = b;
    return e;
  }
  function kA(a) {
    E.clearTimeout(a);
    var b = iA[a];
    b && (b.sa.done(b.Pf), delete iA[a]);
  }
  function lA(a) {
    this.A = a || Yi("CANVAS");
    this.B = [];
    this.C = 1;
  }
  lA.prototype.addEventListener = function(a, b) {
    this.B.push({ type: a, listener: b });
    this.A.addEventListener(a, b, !1);
  };
  lA.prototype.removeEventListener = function(a, b) {
    for (var c = 0; c < this.B.length; c++)
      if (b === this.B[c].listener && a === this.B[c].type) {
        this.B.splice(c, 1);
        break;
      }
    this.A.removeEventListener(a, b, !1);
  };
  lA.prototype.dispatchEvent = function(a) {
    for (var b = 0, c = 0; c < this.B.length; c++)
      if (a.type == this.B[c].type) {
        var d = this.B[c].listener;
        b = "function" === typeof d ? b | d(a) : b | d.handleEvent(a);
      }
    return !!b;
  };
  function mA() {
    this.A = this.B = !1;
  }
  var nA = ["webgl", "experimental-webgl", "moz-webgl"],
    oA = 0;
  function pA(a, b) {
    var c = b || new mA();
    b = b || new mA();
    b = {
      alpha: !0,
      stencil: !0,
      preserveDrawingBuffer: b.B,
      failIfMajorPerformanceCaveat: !b.A && !0
    };
    Pc && !bd(25) && (b.preserveDrawingBuffer = !0);
    a: {
      for (var d = null, e = nA.length, f = 0; f < e; ++f) {
        try {
          d = a.getContext(nA[f], b);
        } catch (g) {}
        if (d) {
          b = d;
          break a;
        }
      }
      b = null;
    }
    if (!b) return (oA = 1), null;
    b.getExtension("WEBGL_debug_renderer_info")
      ? ((d = b.getParameter(37446)), (qA = rA(d)))
      : (qA = null);
    if (b.drawingBufferWidth != a.width || b.drawingBufferHeight != a.height)
      return (oA = 2), null;
    if (4 > b.getParameter(35660)) return (oA = 3), null;
    a = b.getParameter(3379);
    if (F(void 0) && void 0 > a) return (oA = 6), null;
    if (23 > b.getShaderPrecisionFormat(35632, 36338).precision)
      return (oA = 4), null;
    a = qA;
    return Nc && !a
      ? ((oA = 8), null)
      : !c.A && a && (("Intel Q45" == a && (Nc || ed)) || -1 != sA.indexOf(a))
        ? ((oA = 5), null)
        : b;
  }
  var qA = void 0;
  function rA(a) {
    if (void 0 === a) return null;
    a = a.toLowerCase();
    var b = a.match(/angle \((.*)\)/);
    b && ((a = b[1]), (a = a.replace(/\s*direct3d.*$/, "")));
    a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
    var c = a;
    0 > c.indexOf("intel")
      ? (b = null)
      : ((b = ["Intel"]),
        0 <= c.indexOf("mobile") && b.push("Mobile"),
        (0 <= c.indexOf("gma") ||
          0 <= c.indexOf("graphics media accelerator")) &&
          b.push("GMA"),
        0 <= c.indexOf("haswell")
          ? b.push("Haswell")
          : 0 <= c.indexOf("ivy")
            ? b.push("HD 4000")
            : 0 <= c.indexOf("sandy")
              ? b.push("HD 3000")
              : 0 <= c.indexOf("ironlake")
                ? b.push("HD")
                : (0 <= c.indexOf("hd") && b.push("HD"),
                  (c = c.match(tA)) && b.push(c[1].toUpperCase())),
        (b = b.join(" ")));
    if (b) return b;
    b = a;
    if (
      0 > b.indexOf("nvidia") &&
      0 > b.indexOf("quadro") &&
      0 > b.indexOf("geforce") &&
      0 > b.indexOf("nvs")
    )
      b = null;
    else {
      c = ["nVidia"];
      0 <= b.indexOf("geforce") && c.push("geForce");
      0 <= b.indexOf("quadro") && c.push("Quadro");
      0 <= b.indexOf("nvs") && c.push("NVS");
      b.match(/\bion\b/) && c.push("ION");
      b.match(/gtx\b/)
        ? c.push("GTX")
        : b.match(/gts\b/)
          ? c.push("GTS")
          : b.match(/gt\b/)
            ? c.push("GT")
            : b.match(/gs\b/)
              ? c.push("GS")
              : b.match(/ge\b/)
                ? c.push("GE")
                : b.match(/fx\b/) && c.push("FX");
      var d = b.match(tA);
      d && c.push(d[1].toUpperCase().replace("GS", ""));
      0 <= b.indexOf("titan")
        ? c.push("TITAN")
        : 0 <= b.indexOf("ti") && c.push("Ti");
      b = c.join(" ");
    }
    if (b) return b;
    c = a;
    0 > c.indexOf("amd") &&
    0 > c.indexOf("ati") &&
    0 > c.indexOf("radeon") &&
    0 > c.indexOf("firegl") &&
    0 > c.indexOf("firepro")
      ? (b = null)
      : ((b = ["AMD"]),
        0 <= c.indexOf("mobil") && b.push("Mobility"),
        (d = c.indexOf("radeon")),
        0 <= d && b.push("Radeon"),
        0 <= c.indexOf("firepro")
          ? b.push("FirePro")
          : 0 <= c.indexOf("firegl") && b.push("FireGL"),
        0 <= c.indexOf("hd") && b.push("HD"),
        (c = (0 <= d ? c.substring(d) : c).match(tA)) &&
          b.push(c[1].toUpperCase().replace("HD", "")),
        (b = b.join(" ")));
    return b ? b : a.substring(0, 100);
  }
  var tA = /([a-z0-9]*\d+[a-z0-9]*)/,
    sA = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(
      ";"
    );
  function uA() {
    this.H = this.G = this.F = this.D = void 0;
    this.B = [];
    this.C = [];
  }
  y = uA.prototype;
  y.clear = function() {
    this.Sf();
    this.dg();
    this.eg();
    this.kg();
    for (var a = 31; 0 <= a; --a) this.og(a), this.qg(a);
  };
  y.apply = function(a) {
    void 0 !== a.D && a.D !== this.D && this.od(a.D);
    void 0 !== a.F && a.F !== this.F && this.Ad(a.F);
    void 0 !== a.G && a.G !== this.G && this.Bd(a.G);
    void 0 !== a.H && a.H !== this.H && this.Hd(a.H);
    for (var b = 31; 0 <= b; --b)
      void 0 !== a.B[b] && a.B[b] !== this.B[b] && this.lc(b, a.B[b]),
        void 0 !== a.C[b] && a.C[b] !== this.C[b] && this.mc(b, a.C[b]);
  };
  y.Jg = w(32);
  y.od = ba("D");
  y.Sf = function() {
    this.D = void 0;
  };
  y.Ad = ba("F");
  y.dg = function() {
    this.F = void 0;
  };
  y.Bd = ba("G");
  y.eg = function() {
    this.G = void 0;
  };
  y.Hd = ba("H");
  y.kg = function() {
    this.H = void 0;
  };
  y.lc = function(a, b) {
    this.B[a] = b;
  };
  y.og = function(a) {
    delete this.B[a];
  };
  y.mc = function(a, b) {
    this.C[a] = b;
  };
  y.qg = function(a) {
    delete this.C[a];
  };
  function vA(a) {
    this.A = a;
    a.scissor(0, 0, 0, 0);
    a.viewport(0, 0, 0, 0);
    a.enableVertexAttribArray(0);
    a = this.A;
    this.A = null;
    Go.call(this);
    this.A = a;
  }
  I(vA, Go);
  y = vA.prototype;
  y.Na = function(a, b) {
    if (Jo(this, a) != b) {
      vA.X.Na.call(this, a, b);
      var c = this.A;
      c && (b ? c.enable(a) : c.disable(a));
    }
  };
  y.wb = function(a) {
    3024 == a ? this.Na(a, !0) : this.Na(a, !1);
  };
  y.qd = function(a, b, c, d) {
    if (this.B[3] != a || this.B[4] != b || this.B[5] != c || this.B[6] != d) {
      vA.X.qd.call(this, a, b, c, d);
      var e = this.A;
      e && e.blendColor(a, b, c, d);
    }
  };
  y.Tf = function() {
    this.qd(0, 0, 0, 0);
  };
  y.Fc = function(a, b) {
    var c = void 0 === b ? a : b;
    if (Ko(this, !1) != a || Ko(this, !0) != c)
      vA.X.Fc.call(this, a, b),
        (b = this.A) &&
          (c == a ? b.blendEquation(a) : b.blendEquationSeparate(a, c));
  };
  y.Uf = function() {
    this.Fc(32774);
  };
  y.Gc = function(a, b, c, d) {
    var e = void 0 === c ? a : c,
      f = void 0 === d ? b : d;
    if (
      this.C[16] != a ||
      this.C[17] != b ||
      this.C[18] != e ||
      this.C[19] != f
    )
      vA.X.Gc.call(this, a, b, c, d),
        (c = this.A) &&
          (e == a && f == b
            ? c.blendFunc(a, b)
            : c.blendFuncSeparate(a, b, e, f));
  };
  y.Vf = function() {
    this.Gc(1, 0);
  };
  y.xd = function(a) {
    if (Lo(this) != a) {
      vA.X.xd.call(this, a);
      var b = this.A;
      b && b.depthFunc(a);
    }
  };
  y.ag = function() {
    this.xd(513);
  };
  y.Id = function(a, b) {
    if (this.B[11] != a || this.D[48] != (b ? 2 : 1)) {
      vA.X.Id.call(this, a, b);
      var c = this.A;
      c && c.sampleCoverage(a, b);
    }
  };
  y.lg = function() {
    this.Id(1, !1);
  };
  y.rd = function(a, b, c, d) {
    if (
      this.B[13] != a ||
      this.B[14] != b ||
      this.B[15] != c ||
      this.B[16] != d
    ) {
      vA.X.rd.call(this, a, b, c, d);
      var e = this.A;
      e && e.clearColor(a, b, c, d);
    }
  };
  y.Wf = function() {
    this.rd(0, 0, 0, 0);
  };
  y.sd = function(a) {
    if (Mo(this) != a) {
      vA.X.sd.call(this, a);
      var b = this.A;
      b && b.clearDepth(a);
    }
  };
  y.Xf = function() {
    this.sd(1);
  };
  y.td = function(a) {
    if (No(this) != a) {
      vA.X.td.call(this, a);
      var b = this.A;
      b && b.clearStencil(a);
    }
  };
  y.Yf = function() {
    this.td(0);
  };
  y.ud = function(a, b, c, d) {
    if (!Oo(this, a, b, c, d)) {
      vA.X.ud.call(this, a, b, c, d);
      var e = this.A;
      e && e.colorMask(a, b, c, d);
    }
  };
  y.Zf = function() {
    this.ud(!0, !0, !0, !0);
  };
  y.yd = function(a) {
    if (Po(this) != a) {
      vA.X.yd.call(this, a);
      var b = this.A;
      b && b.depthMask(a);
    }
  };
  y.bg = function() {
    this.yd(!0);
  };
  y.zd = function(a, b) {
    if (this.B[Qo] != a || this.B[Qo + 1] != b) {
      vA.X.zd.call(this, a, b);
      var c = this.A;
      c && c.depthRange(a, b);
    }
  };
  y.cg = function() {
    this.zd(0, 1);
  };
  y.Jd = function(a, b, c, d) {
    if (
      this.F[Ro] != a ||
      this.F[Ro + 1] != b ||
      this.F[Ro + 2] != c ||
      this.F[Ro + 3] != d
    ) {
      vA.X.Jd.call(this, a, b, c, d);
      var e = this.A;
      e && e.scissor(a, b, c, d);
    }
  };
  y.mg = function() {
    this.Jd(0, 0, 0, 0);
  };
  y.Kd = function(a, b, c, d) {
    if (
      this.F[So] != a ||
      this.F[So + 1] != b ||
      this.F[So + 2] != c ||
      this.F[So + 3] != d
    ) {
      vA.X.Kd.call(this, a, b, c, d);
      var e = this.A;
      e && e.viewport(a, b, c, d);
    }
  };
  y.ph = function() {
    this.Kd(0, 0, 0, 0);
  };
  y.wd = function(a) {
    if (Uo(this) != a) {
      vA.X.wd.call(this, a);
      var b = this.A;
      b && b.cullFace(a);
    }
  };
  y.$f = function() {
    this.wd(1029);
  };
  y.Cd = function(a) {
    if (Wo(this) != a) {
      vA.X.Cd.call(this, a);
      var b = this.A;
      b && b.frontFace(a);
    }
  };
  y.gg = function() {
    this.Cd(2305);
  };
  y.Ed = function(a) {
    if (Yo(this) != a) {
      vA.X.Ed.call(this, a);
      var b = this.A;
      b && b.lineWidth(a);
    }
  };
  y.ig = function() {
    this.Ed(1);
  };
  y.Gd = function(a, b) {
    if (!(0 < this.D[Zo]) || this.B[$o] != a || this.B[$o + 1] != b) {
      vA.X.Gd.call(this, a, b);
      var c = this.A;
      c && c.polygonOffset(a, b);
    }
  };
  y.jg = function() {
    this.Gd(0, 0);
  };
  y.Hc = function(a, b) {
    if (bp(this, a) != b) {
      vA.X.Hc.call(this, a, b);
      var c = this.A;
      c && (b ? c.enableVertexAttribArray(a) : c.disableVertexAttribArray(a));
    }
  };
  y.tg = function(a) {
    this.Hc(a, !1);
  };
  y.Vb = function(a) {
    if (dp(this) != a) {
      Go.prototype.Vb.call(this, a);
      var b = this.A;
      b && b.activeTexture(a);
    }
  };
  y.Rf = function() {
    this.Vb(33984);
  };
  y.lb = function(a, b) {
    if (fp(this, a) != b) {
      vA.X.lb.call(this, a, b);
      var c = this.A;
      c && c.pixelStorei(a, b);
    }
  };
  y.Db = function(a) {
    switch (a) {
      case 3317:
      case 3333:
        this.lb(a, 4);
        break;
      case 37440:
      case 37441:
        this.lb(a, 0);
        break;
      default:
        this.lb(a, 37444);
    }
  };
  y.Dd = function(a, b) {
    if (hp(this) != b) {
      vA.X.Dd.call(this, a, b);
      var c = this.A;
      c && c.hint(a, b);
    }
  };
  y.hg = function(a) {
    this.Dd(a, 4352);
  };
  function wA(a, b) {
    uA.call(this);
    this.A = a;
    this.K = Math.min(32, a.getParameter(35661));
    this.J = b;
    this.I = jd || (Qc && !bd("536.3"));
    a = this.A;
    this.A = null;
    this.clear();
    this.A = a;
  }
  I(wA, uA);
  y = wA.prototype;
  y.od = function(a) {
    if (this.I || this.D !== a)
      wA.X.od.call(this, a), this.A && this.A.bindBuffer(34962, a);
  };
  y.Sf = function() {
    this.od(null);
  };
  y.Ad = function(a) {
    if (this.I || this.F !== a)
      wA.X.Ad.call(this, a), this.A && this.A.bindBuffer(34963, a);
  };
  y.dg = function() {
    this.Ad(null);
  };
  y.Bd = function(a) {
    if (this.I || this.G !== a)
      wA.X.Bd.call(this, a), this.A && this.A.bindFramebuffer(36160, a);
  };
  y.eg = function() {
    this.Bd(null);
  };
  y.Hd = function(a) {
    if (this.I || this.H !== a)
      wA.X.Hd.call(this, a), this.A && this.A.bindRenderbuffer(36161, a);
  };
  y.kg = function() {
    this.Hd(null);
  };
  y.lc = function(a, b) {
    a < this.K && this.J.Vb(33984 + a);
    if (this.I || this.B[a] !== b)
      wA.X.lc.call(this, a, b),
        this.A &&
          (b ? this.A.bindTexture(3553, b.G) : this.A.bindTexture(3553, null));
  };
  y.og = function(a) {
    this.lc(a, null);
  };
  y.mc = function(a, b) {
    a < this.K && this.J.Vb(33984 + a);
    if (this.I || this.C[a] !== b)
      wA.X.mc.call(this, a, b),
        this.A &&
          (b
            ? this.A.bindTexture(34067, b.G)
            : this.A.bindTexture(34067, null));
  };
  y.qg = function(a) {
    this.mc(a, null);
  };
  y.Jg = function() {
    return this.K - 1;
  };
  function xA() {
    this.L = !1;
    this.J = this.C = null;
  }
  xA.prototype.O = u("L");
  xA.prototype.ta = function() {
    if (!this.L) {
      this.L = !0;
      this.ga();
      if (this.C) {
        for (var a = 0; a < this.C.length; ++a) this.C[a].ta();
        this.C = null;
      }
      if (this.J) {
        for (a = 0; a < this.J.length; ++a) this.J[a]();
        this.J = null;
      }
    }
  };
  xA.prototype.ga = h();
  function yA() {
    this.B = [0, 0];
    this.A = [0, 0];
    this.G = 0;
    this.F = this.C = null;
    this.D = {};
  }
  function zA(a, b, c, d, e, f, g) {
    this.handle = a;
    this.item = b;
    this.D = c;
    this.F = d;
    this.A = null;
    this.next = e;
    this.B = f;
    this.C = g;
  }
  y = yA.prototype;
  y.add = function(a, b, c, d, e) {
    c = c || 0;
    d = d || 0;
    if (c > this.B[0] || d > this.B[1]) return -1;
    var f = this.G++;
    a = new zA(f, a, b, e || null, this.C, c, d);
    this.D[f] = a;
    this.C && (this.C.A = a);
    this.C = a;
    this.A[0] += c;
    this.A[1] += d;
    null == this.F && (this.F = a);
    AA(this);
    return f;
  };
  y.get = function(a) {
    return (a = this.D[a]) ? a.item : void 0;
  };
  function AA(a) {
    for (var b = a.F; b && (a.A[0] > a.B[0] || a.A[1] > a.B[1]); ) {
      var c = b;
      b = b.A;
      if (
        (a.A[0] > a.B[0] && 0 < c.B) ||
        (a.A[1] > a.B[1] && 0 < c.C) ||
        (0 == c.B && 0 == c.C)
      )
        c.D && c.D.call(c.F, c.handle, c.item, !1), a.remove(c.handle);
    }
  }
  y.remove = function(a) {
    var b = this.D[a];
    b &&
      (b.A ? (b.A.next = b.next) : (this.C = b.next),
      b.next ? (b.next.A = b.A) : (this.F = b.A),
      (b.A = b.next = b.item = null),
      (b.handle = -1),
      delete this.D[a],
      (this.A[0] -= b.B),
      (this.A[1] -= b.C));
  };
  y.contains = function(a) {
    return a in this.D;
  };
  y.clear = function() {
    for (; this.C; ) {
      var a = this.C;
      a.D.call(a.F, a.handle, a.item, !0);
      this.remove(a.handle);
    }
    Object.keys(this.D);
  };
  function BA(a, b, c) {
    this.B = new yA();
    this.A = a;
    this.K = this.M = 0;
    this.N = 1;
    this.I = this.W = this.H = this.T = 0;
    this.D = [];
    this.G = [];
    this.F = [];
    this.Y = G(this.Oe, this, this.G);
    this.R = G(this.Oe, this, this.D);
    G(this.Oe, this, this.F);
    CA(this);
    var d = this;
    wr(
      function(a) {
        d.N = a ? 1 : 0.5;
        CA(d);
      },
      c,
      b
    );
  }
  I(BA, xA);
  y = BA.prototype;
  y.ga = function() {
    this.clear();
    DA(this);
    BA.X.ga.call(this);
  };
  y.contains = function(a) {
    return this.B.contains(a);
  };
  function EA(a, b) {
    a = a.B;
    (b = a.D[b]) &&
      b.A &&
      ((b.A.next = b.next) ? (b.next.A = b.A) : (a.F = b.A),
      (b.A = null),
      (b.next = a.C),
      (a.C.A = b),
      (a.C = b));
  }
  y.clear = function() {
    this.B.clear();
  };
  y.remove = function(a) {
    this.B.remove(a);
  };
  function FA(a, b, c) {
    return a.B.add(b, a.Y, c, 1);
  }
  function GA(a, b, c) {
    return a.B.add(null, b, c, void 0);
  }
  y.createTexture = function(a) {
    var b = this.A,
      c = b.createTexture();
    b.bindTexture(3553, c);
    b.texParameteri(3553, 10241, a);
    b.texParameteri(3553, 10240, a);
    b.texParameteri(3553, 10242, 33071);
    b.texParameteri(3553, 10243, 33071);
    return FA(this, c, 0);
  };
  function CA(a) {
    var b = 100 * (0.75 * a.K + 0.25 * a.M);
    b = Math.max(48e6, b * a.N);
    var c = Math.max(200, 0.002 * a.K * a.N);
    a.T = 0.1 * b;
    a.W = 0.1 * c;
    a = a.B;
    a.B[0] = F(b) ? b : a.B[0];
    a.B[1] = F(c) ? c : a.B[1];
    AA(a);
  }
  y.Oe = function(a, b, c) {
    var d = this.B.D[b];
    this.H += d && d.B;
    b = this.B.D[b];
    this.I += b && b.C;
    a.push(c);
    (this.H >= this.T || this.I >= this.W) && DA(this);
  };
  function DA(a) {
    for (var b = 0; b < a.D.length; b++) a.A.deleteBuffer(a.D[b]);
    for (b = 0; b < a.G.length; b++) a.A.deleteTexture(a.G[b]);
    for (b = 0; b < a.F.length; b++) a.A.deleteRenderbuffer(a.F[b]);
    a.H = 0;
    a.I = 0;
    a.D.splice(0, a.D.length);
    a.G.splice(0, a.G.length);
    a.F.splice(0, a.F.length);
  }
  function HA(a) {
    Va.call(this, a);
  }
  I(HA, Va);
  HA.prototype.name = "LostContextError";
  function IA(a, b) {
    this.F = a.createProgram();
    this.B = a;
    this.L = b;
    this.I = [];
    this.J = !1;
    this.C = !0;
    this.D = [];
    this.K = [];
    this.A = [];
    this.G = {};
    this.H = {};
  }
  y = IA.prototype;
  y.gf = function() {
    this.L.D != this && ((this.L.D = this), this.B.useProgram(this.F));
  };
  y.attachShader = function(a) {
    this.I.push(a);
    this.B.attachShader(this.F, a);
  };
  y.detachShader = function(a) {
    hb(this.I, a);
    this.B.detachShader(this.F, a);
  };
  y.getAttachedShaders = u("I");
  y.bindAttribLocation = function(a, b) {
    this.B.bindAttribLocation(this.F, a, b);
    this.H[b] = a;
  };
  y.getAttribLocation = function(a) {
    var b = this.H[a];
    void 0 === b &&
      ((b = this.B.getAttribLocation(this.F, a)), (this.H[a] = b));
    return b;
  };
  y.deleteProgram = function() {
    this.B.deleteProgram(this.F);
    this.J = !0;
  };
  y.getParameter = function(a) {
    return this.B.getProgramParameter(this.F, a);
  };
  y.Hg = function() {
    return this.B.getProgramInfoLog(this.F);
  };
  y.oh = function() {
    return !this.J && this.B.isProgram(this.F);
  };
  y.pe = function() {
    this.B.linkProgram(this.F);
    this.C = !1;
  };
  function JA(a) {
    a.C = !0;
    a.H = {};
    a.D = [];
    a.A = [];
    a.G = {};
    for (
      var b = a.B.getProgramParameter(a.F, 35718), c = 0, d, e = 0;
      e < b;
      ++e
    ) {
      var f = a.B.getActiveUniform(a.F, e);
      if (0 <= f.name.indexOf("[")) {
        var g = f.name.substr(0, f.name.indexOf("[")),
          k = f.size;
        a.G[g] = c;
        for (var l = 0; l < k; ++l) {
          d = c++;
          var m = g + "[" + l + "]";
          a.G[m] = d;
          a.K[d] = k - l;
          a.D[d] = a.B.getUniformLocation(a.F, m);
          a.A[d] = KA(f.type);
        }
      } else
        (d = c++),
          (a.G[f.name] = d),
          (a.K[d] = 0),
          (a.D[d] = a.B.getUniformLocation(a.F, f.name)),
          (a.A[d] = KA(f.type));
    }
  }
  y.si = function() {
    this.B.validateProgram(this.F);
  };
  y.getActiveAttrib = function(a) {
    return this.B.getActiveAttrib(this.F, a);
  };
  y.getActiveUniform = function(a) {
    return this.B.getActiveUniform(this.F, a);
  };
  y.getUniform = function(a) {
    this.C || JA(this);
    return -1 == a ? null : this.A[a];
  };
  y.getUniformLocation = function(a) {
    this.C || JA(this);
    return void 0 !== this.G[a] ? this.G[a] : -1;
  };
  y.Uh = function(a, b) {
    this.C || JA(this);
    var c = this.D,
      d = this.A,
      e = this.B;
    -1 != a && b != d[a] && ((d[a] = b), e.uniform1f(c[a], b));
  };
  y.Yh = function(a, b, c) {
    this.C || JA(this);
    var d = this.D,
      e = this.A,
      f = this.B;
    -1 != a &&
      ((e = e[a]), b != e[0] || c != e[1]) &&
      ((e[0] = b), (e[1] = c), f.uniform2f(d[a], b, c));
  };
  y.bi = function(a, b, c, d) {
    this.C || JA(this);
    var e = this.D,
      f = this.A,
      g = this.B;
    -1 != a &&
      ((f = f[a]), b != f[0] || c != f[1] || d != f[2]) &&
      ((f[0] = b), (f[1] = c), (f[2] = d), g.uniform3f(e[a], b, c, d));
  };
  y.hi = function(a, b, c, d, e) {
    this.C || JA(this);
    var f = this.D,
      g = this.A,
      k = this.B;
    -1 != a &&
      ((g = g[a]), b != g[0] || c != g[1] || d != g[2] || e != g[3]) &&
      ((g[0] = b),
      (g[1] = c),
      (g[2] = d),
      (g[3] = e),
      k.uniform4f(f[a], b, c, d, e));
  };
  y.Wh = function(a, b) {
    this.C || JA(this);
    var c = this.D,
      d = this.A,
      e = this.B;
    if (-1 != a) {
      var f = b;
      "boolean" == typeof d[a] && (f = !!b);
      f != d[a] && ((d[a] = f), e.uniform1i(c[a], b));
    }
  };
  y.$h = function(a, b, c) {
    this.C || JA(this);
    var d = this.D,
      e = this.A,
      f = this.B;
    if (-1 != a) {
      e = e[a];
      var g = b,
        k = c;
      e instanceof Array && ((g = !!b), (k = !!c));
      if (g != e[0] || k != e[1])
        (e[0] = g), (e[1] = k), f.uniform2i(d[a], b, c);
    }
  };
  y.fi = function(a, b, c, d) {
    this.C || JA(this);
    var e = this.D,
      f = this.A,
      g = this.B;
    if (-1 != a) {
      f = f[a];
      var k = b,
        l = c,
        m = d;
      f instanceof Array && ((k = !!b), (l = !!c), (m = !!d));
      if (k != f[0] || l != f[1] || m != f[2])
        (f[0] = k), (f[1] = l), (f[2] = m), g.uniform3i(e[a], b, c, d);
    }
  };
  y.ji = function(a, b, c, d, e) {
    this.C || JA(this);
    var f = this.D,
      g = this.A,
      k = this.B;
    if (-1 != a) {
      g = g[a];
      var l = b,
        m = c,
        n = d,
        p = e;
      g instanceof Array && ((l = !!b), (m = !!c), (n = !!d), (p = !!e));
      if (l != g[0] || m != g[1] || n != g[2] || p != g[3])
        (g[0] = l),
          (g[1] = m),
          (g[2] = n),
          (g[3] = p),
          k.uniform4i(f[a], b, c, d, e);
    }
  };
  y.Vh = function(a, b) {
    this.C || JA(this);
    if (-1 != a) {
      var c = !1,
        d;
      for (d = 0; !c && d < b.length; ++d) c = b[d] != this.A[a + d];
      if (c) {
        for (d = 0; d < b.length; ++d) this.A[a + d] = b[d];
        this.B.uniform1fv(this.D[a], b);
      }
    }
  };
  y.Zh = function(a, b) {
    this.C || JA(this);
    if (-1 != a) {
      var c = !1,
        d;
      for (d = 0; !c && d < b.length / 2; ++d)
        c = b[2 * d] != this.A[a + d][0] || b[2 * d + 1] != this.A[a + d][1];
      if (c) {
        for (d = 0; d < b.length / 2; ++d)
          (this.A[a + d][0] = b[2 * d]), (this.A[a + d][1] = b[2 * d + 1]);
        this.B.uniform2fv(this.D[a], b);
      }
    }
  };
  y.di = function(a, b) {
    this.C || JA(this);
    if (-1 != a) {
      var c = !1,
        d;
      for (d = 0; !c && d < b.length / 3; ++d)
        c =
          b[3 * d] != this.A[a + d][0] ||
          b[3 * d + 1] != this.A[a + d][1] ||
          b[3 * d + 2] != this.A[a + d][2];
      if (c) {
        for (d = 0; d < b.length / 3; ++d)
          (this.A[a + d][0] = b[3 * d]),
            (this.A[a + d][1] = b[3 * d + 1]),
            (this.A[a + d][2] = b[3 * d + 2]);
        this.B.uniform3fv(this.D[a], b);
      }
    }
  };
  y.ii = function(a, b) {
    this.C || JA(this);
    if (-1 != a) {
      var c = !1,
        d;
      for (d = 0; !c && d < b.length / 4; ++d)
        c =
          b[4 * d] != this.A[a + d][0] ||
          b[4 * d + 1] != this.A[a + d][1] ||
          b[4 * d + 2] != this.A[a + d][2] ||
          b[4 * d + 3] != this.A[a + d][3];
      if (c) {
        for (d = 0; d < b.length / 4; ++d)
          (this.A[a + d][0] = b[4 * d]),
            (this.A[a + d][1] = b[4 * d + 1]),
            (this.A[a + d][2] = b[4 * d + 2]),
            (this.A[a + d][3] = b[4 * d + 3]);
        this.B.uniform4fv(this.D[a], b);
      }
    }
  };
  y.Xh = function(a, b) {
    this.C || JA(this);
    if (-1 != a) {
      var c = "boolean" == typeof this.A[a],
        d = !1,
        e;
      for (e = 0; !d && e < b.length; ++e)
        d = (c ? !!b[e] : b[e]) != this.A[a + e];
      if (d) {
        for (e = 0; e < b.length; ++e) this.A[a + e] = c ? !!b[e] : b[e];
        this.B.uniform1iv(this.D[a], b);
      }
    }
  };
  y.ai = function(a, b) {
    this.C || JA(this);
    if (-1 != a) {
      var c = this.A[a] instanceof Array,
        d = !1,
        e;
      for (e = 0; !d && e < b.length / 2; ++e)
        (d = c ? !!b[2 * e + 1] : b[2 * e + 1]),
          (d =
            (c ? !!b[2 * e] : b[2 * e]) != this.A[a + e][0] ||
            d != this.A[a + e][1]);
      if (d) {
        for (e = 0; e < b.length / 2; ++e)
          (this.A[a + e][0] = c ? !!b[2 * e] : b[2 * e]),
            (this.A[a + e][1] = c ? !!b[2 * e + 1] : b[2 * e + 1]);
        this.B.uniform2iv(this.D[a], b);
      }
    }
  };
  y.gi = function(a, b) {
    this.C || JA(this);
    if (-1 != a) {
      var c = this.A[a] instanceof Array,
        d = !1,
        e;
      for (e = 0; !d && e < b.length / 3; ++e) {
        d = c ? !!b[3 * e + 1] : b[3 * e + 1];
        var f = c ? !!b[3 * e + 2] : b[3 * e + 2];
        d =
          (c ? !!b[3 * e] : b[3 * e]) != this.A[a + e][0] ||
          d != this.A[a + e][1] ||
          f != this.A[a + e][2];
      }
      if (d) {
        for (e = 0; e < b.length / 3; ++e)
          (this.A[a + e][0] = c ? !!b[3 * e] : b[3 * e]),
            (this.A[a + e][1] = c ? !!b[3 * e + 1] : b[3 * e + 1]),
            (this.A[a + e][2] = c ? !!b[3 * e + 2] : b[3 * e + 2]);
        this.B.uniform3iv(this.D[a], b);
      }
    }
  };
  y.ki = function(a, b) {
    this.C || JA(this);
    if (-1 != a) {
      var c = this.A[a] instanceof Array,
        d = !1,
        e;
      for (e = 0; !d && e < b.length / 4; ++e) {
        d = c ? !!b[4 * e + 1] : b[4 * e + 1];
        var f = c ? !!b[4 * e + 2] : b[4 * e + 2],
          g = c ? !!b[4 * e + 3] : b[4 * e + 3];
        d =
          (c ? !!b[4 * e] : b[4 * e]) != this.A[a + e][0] ||
          d != this.A[a + e][1] ||
          f != this.A[a + e][2] ||
          g != this.A[a + e][3];
      }
      if (d) {
        for (e = 0; e < b.length / 4; ++e)
          (this.A[a + e][0] = c ? !!b[4 * e] : b[4 * e]),
            (this.A[a + e][1] = c ? !!b[4 * e + 1] : b[4 * e + 1]),
            (this.A[a + e][2] = c ? !!b[4 * e + 2] : b[4 * e + 2]),
            (this.A[a + e][3] = c ? !!b[4 * e + 3] : b[4 * e + 3]);
        this.B.uniform4iv(this.D[a], b);
      }
    }
  };
  y.li = function(a, b, c) {
    this.C || JA(this);
    if (-1 != a) {
      b = !1;
      var d;
      for (d = 0; !b && d < c.length / 4; ++d)
        b =
          c[4 * d] != this.A[a + d][0] ||
          c[4 * d + 1] != this.A[a + d][1] ||
          c[4 * d + 2] != this.A[a + d][2] ||
          c[4 * d + 3] != this.A[a + d][3];
      if (b) {
        for (d = 0; d < c.length / 4; ++d)
          (this.A[a + d][0] = c[4 * d]),
            (this.A[a + d][1] = c[4 * d + 1]),
            (this.A[a + d][2] = c[4 * d + 2]),
            (this.A[a + d][3] = c[4 * d + 3]);
        this.B.uniformMatrix2fv(this.D[a], !1, c);
      }
    }
  };
  y.mi = function(a, b, c) {
    this.C || JA(this);
    if (-1 != a) {
      var d = !1;
      for (b = 0; !d && b < c.length / 9; ++b) {
        d = 9 * b;
        var e = this.A[a + b];
        d =
          c[d] != e[0] ||
          c[d + 1] != e[1] ||
          c[d + 2] != e[2] ||
          c[d + 3] != e[3] ||
          c[d + 4] != e[4] ||
          c[d + 5] != e[5] ||
          c[d + 6] != e[6] ||
          c[d + 7] != e[7] ||
          c[d + 8] != e[8];
      }
      if (d) {
        for (b = 0; b < c.length / 9; ++b) {
          e = this.A[a + b];
          d = 9 * b;
          for (var f = 0; 9 > f; ++f) e[f] = c[d + f];
        }
        this.B.uniformMatrix3fv(this.D[a], !1, c);
      }
    }
  };
  y.ni = function(a, b, c) {
    this.C || JA(this);
    if (-1 != a) {
      var d = !1;
      for (b = 0; !d && b < c.length / 16; ++b) {
        d = 16 * b;
        var e = this.A[a + b];
        d =
          c[d] != e[0] ||
          c[d + 1] != e[1] ||
          c[d + 2] != e[2] ||
          c[d + 3] != e[3] ||
          c[d + 4] != e[4] ||
          c[d + 5] != e[5] ||
          c[d + 6] != e[6] ||
          c[d + 7] != e[7] ||
          c[d + 8] != e[8] ||
          c[d + 9] != e[9] ||
          c[d + 10] != e[10] ||
          c[d + 11] != e[11] ||
          c[d + 12] != e[12] ||
          c[d + 13] != e[13] ||
          c[d + 14] != e[14] ||
          c[d + 15] != e[15];
      }
      if (d) {
        for (b = 0; b < c.length / 16; ++b) {
          e = this.A[a + b];
          d = 16 * b;
          for (var f = 0; 16 > f; ++f) e[f] = c[d + f];
        }
        this.B.uniformMatrix4fv(this.D[a], !1, c);
      }
    }
  };
  function KA(a) {
    switch (a) {
      case 35670:
        return !1;
      case 5124:
      case 5126:
      case 35678:
      case 35680:
        return 0;
      case 35664:
        return new Float32Array(2);
      case 35667:
        return new Int32Array(2);
      case 35671:
        return [!1, !1];
      case 35665:
        return new Float32Array(3);
      case 35668:
        return new Int32Array(3);
      case 35672:
        return [!1, !1, !1];
      case 35666:
        return new Float32Array(4);
      case 35669:
        return new Int32Array(4);
      case 35673:
        return [!1, !1, !1, !1];
      case 35674:
        return new Float32Array(4);
      case 35675:
        return new Float32Array(9);
      case 35676:
        return new Float32Array(16);
    }
    return null;
  }
  function LA(a, b) {
    Yj.call(this);
    this.ca = MA++;
    this.C = a;
    this.A = b;
    this.state = new vA(this.A);
    this.F = new wA(this.A, this.state);
    this.M = new Tj(this);
    Ei(this, Ta(Fi, this.M));
    this.B = new BA(this, void 0, this.M);
    Ei(this, Ta(Fi, this.B));
    this.D = null;
    this.I = this.L = this.G = void 0;
    this.getParameter(3379);
    this.getParameter(34076);
    this.J = void 0;
    Vj(this.M, a, "webglcontextlost", this.ll, !1, this);
    Vj(this.M, a, "webglcontextrestored", this.Dl, !1, this);
    NA(this);
  }
  I(LA, Yj);
  var MA = 0;
  y = LA.prototype;
  y.ga = function() {
    this.D = null;
    this.A.useProgram(null);
    LA.X.ga.call(this);
  };
  function NA(a) {
    var b =
        (a.A.drawingBufferWidth || a.C.A.width) *
        (a.A.drawingBufferHeight || a.C.A.height),
      c = a.C.C;
    a = a.B;
    c = b / (c * c);
    if (b != a.M || c != a.K) (a.M = b), (a.K = c), CA(a);
  }
  function OA(a, b) {
    var c = dp(a.state) - 33984;
    3553 == b
      ? ((a = a.F.B[c]), 3553 != a.A && (a.A = 3553))
      : ((a = a.F.C[c]),
        34067 != a.A && (a.A = 34067),
        34067 != b && (a.M = b));
    return a;
  }
  function PA(a, b, c, d, e, f, g, k) {
    a = OA(a, b);
    Ap(a, d, e, f, g, c);
    b = Bp(a);
    a.bind();
    Cp(a, d, f, g);
    a.B.texImage2D(b, c, f, d, e, 0, f, g, k);
    a.F.Db(3317);
  }
  y.texImage2D = function(a, b, c, d, e, f, g, k, l) {
    g ? PA(this, a, b, d, e, g, k, l) : zp(OA(this, a), f, d, e, b);
  };
  y.texSubImage2D = function(a, b, c, d, e, f, g, k, l) {
    if (k) {
      a = OA(this, a);
      var m = Bp(a);
      a.bind();
      a.B.texSubImage2D(m, b, c, d, e, f, g, k, l);
    } else
      (k = OA(this, a)),
        (l = Bp(k)),
        k.bind(),
        Cp(k, g.width, e, f),
        k.B.texSubImage2D(l, b, c, d, e, f, g),
        k.F.Db(3317);
  };
  y.compressedTexImage2D = function(a, b, c, d, e, f, g) {
    a = OA(this, a);
    Ap(a, d, e, c, 0, b);
    f = Bp(a);
    a.bind();
    a.B.compressedTexImage2D(f, b, c, d, e, 0, g);
  };
  y.compressedTexSubImage2D = function(a, b, c, d, e, f, g, k) {
    a = OA(this, a);
    var l = Bp(a);
    a.bind();
    a.B.compressedTexSubImage2D(l, b, c, d, e, f, g, k);
  };
  y.activeTexture = function(a) {
    this.state.Vb(a);
  };
  y.blendColor = function(a, b, c, d) {
    this.state.qd(a, b, c, d);
  };
  y.blendEquation = function(a) {
    this.state.Fc(a);
  };
  y.blendEquationSeparate = function(a, b) {
    this.state.Fc(a, b);
  };
  y.blendFunc = function(a, b) {
    this.state.Gc(a, b);
  };
  y.blendFuncSeparate = function(a, b, c, d) {
    this.state.Gc(a, b, c, d);
  };
  y.clearColor = function(a, b, c, d) {
    this.state.rd(a, b, c, d);
  };
  y.clearDepth = function(a) {
    this.state.sd(a);
  };
  y.clearStencil = function(a) {
    this.state.td(a);
  };
  y.colorMask = function(a, b, c, d) {
    this.state.ud(a, b, c, d);
  };
  y.cullFace = function(a) {
    this.state.wd(a);
  };
  y.depthFunc = function(a) {
    this.state.xd(a);
  };
  y.depthMask = function(a) {
    this.state.yd(a);
  };
  y.depthRange = function(a, b) {
    this.state.zd(a, b);
  };
  y.disable = function(a) {
    this.state.Na(a, !1);
  };
  y.disableVertexAttribArray = function(a) {
    this.state.Hc(a, !1);
  };
  y.enable = function(a) {
    this.state.Na(a, !0);
  };
  y.enableVertexAttribArray = function(a) {
    this.state.Hc(a, !0);
  };
  y.frontFace = function(a) {
    this.state.Cd(a);
  };
  y.hint = function(a, b) {
    this.state.Dd(a, b);
  };
  y.isEnabled = function(a) {
    return Jo(this.state, a);
  };
  y.lineWidth = function(a) {
    this.state.Ed(a);
  };
  y.pixelStorei = function(a, b) {
    this.state.lb(a, b);
  };
  y.polygonOffset = function(a, b) {
    this.state.Gd(a, b);
  };
  y.sampleCoverage = function(a, b) {
    this.state.Id(a, b);
  };
  y.scissor = function(a, b, c, d) {
    this.state.Jd(a, b, c, d);
  };
  y.stencilFunc = function(a, b, c) {
    this.A.stencilFunc(a, b, c);
  };
  y.stencilMask = function(a) {
    this.A.stencilMask(a);
  };
  y.stencilOp = function(a, b, c) {
    this.A.stencilOp(a, b, c);
  };
  y.viewport = function(a, b, c, d) {
    NA(this);
    this.state.Kd(a, b, c, d);
  };
  y.bindBuffer = function(a, b) {
    34962 == a ? this.F.od(b) : this.F.Ad(b);
  };
  y.bindFramebuffer = function(a, b) {
    this.F.Bd(b);
  };
  y.bindRenderbuffer = function(a, b) {
    this.F.Hd(b);
  };
  y.bindTexture = function(a, b) {
    var c = dp(this.state) - 33984;
    b && (b.A != a && (b.A = a), b.C != c && (b.C = c));
    3553 == a ? this.F.lc(c, b) : this.F.mc(c, b);
  };
  y.attachShader = function(a, b) {
    a.attachShader && a.attachShader(b);
  };
  y.bindAttribLocation = function(a, b, c) {
    a.bindAttribLocation && a.bindAttribLocation(b, c);
  };
  y.createProgram = function() {
    return new IA(this.A, this);
  };
  y.deleteProgram = function(a) {
    a.deleteProgram && a.deleteProgram();
  };
  y.detachShader = function(a, b) {
    a.detachShader && a.detachShader(b);
  };
  y.getActiveAttrib = function(a, b) {
    return a.getActiveAttrib ? a.getActiveAttrib(b) : null;
  };
  y.getActiveUniform = function(a, b) {
    return a.getActiveUniform ? a.getActiveUniform(b) : null;
  };
  y.getAttachedShaders = function(a) {
    return a.getAttachedShaders ? a.getAttachedShaders() : [];
  };
  y.getAttribLocation = function(a, b) {
    return a.getAttribLocation ? a.getAttribLocation(b) : -1;
  };
  y.getProgramParameter = function(a, b) {
    return a.getParameter ? a.getParameter(b) : -1;
  };
  y.getProgramInfoLog = function(a) {
    return a.Hg ? a.Hg() : "";
  };
  y.getUniform = function(a, b) {
    return a.getUniform ? a.getUniform(b) : null;
  };
  y.getUniformLocation = function(a, b) {
    return a.getUniformLocation ? a.getUniformLocation(b) : -1;
  };
  y.isProgram = function(a) {
    return a.oh ? a.oh() : !1;
  };
  y.linkProgram = function(a) {
    a.pe && a.pe();
  };
  y.uniform1f = function(a, b) {
    var c = this.D;
    c && c.Uh && c.Uh(a, b);
  };
  y.uniform1fv = function(a, b) {
    var c = this.D;
    c && c.Vh && c.Vh(a, b);
  };
  y.uniform1i = function(a, b) {
    var c = this.D;
    c && c.Wh && c.Wh(a, b);
  };
  y.uniform1iv = function(a, b) {
    var c = this.D;
    c && c.Xh && c.Xh(a, b);
  };
  y.uniform2f = function(a, b, c) {
    var d = this.D;
    d && d.Yh && d.Yh(a, b, c);
  };
  y.uniform2fv = function(a, b) {
    var c = this.D;
    c && c.Zh && c.Zh(a, b);
  };
  y.uniform2i = function(a, b, c) {
    var d = this.D;
    d && d.$h && d.$h(a, b, c);
  };
  y.uniform2iv = function(a, b) {
    var c = this.D;
    c && c.ai && c.ai(a, b);
  };
  y.uniform3f = function(a, b, c, d) {
    var e = this.D;
    e && e.bi && e.bi(a, b, c, d);
  };
  y.uniform3fv = function(a, b) {
    var c = this.D;
    c && c.di && c.di(a, b);
  };
  y.uniform3i = function(a, b, c, d) {
    var e = this.D;
    e && e.fi && e.fi(a, b, c, d);
  };
  y.uniform3iv = function(a, b) {
    var c = this.D;
    c && c.gi && c.gi(a, b);
  };
  y.uniform4f = function(a, b, c, d, e) {
    var f = this.D;
    f && f.hi && f.hi(a, b, c, d, e);
  };
  y.uniform4fv = function(a, b) {
    var c = this.D;
    c && c.ii && c.ii(a, b);
  };
  y.uniform4i = function(a, b, c, d, e) {
    var f = this.D;
    f && f.ji && f.ji(a, b, c, d, e);
  };
  y.uniform4iv = function(a, b) {
    var c = this.D;
    c && c.ki && c.ki(a, b);
  };
  y.uniformMatrix2fv = function(a, b, c) {
    var d = this.D;
    d && d.li && d.li(a, b, c);
  };
  y.uniformMatrix3fv = function(a, b, c) {
    var d = this.D;
    d && d.mi && d.mi(a, b, c);
  };
  y.uniformMatrix4fv = function(a, b, c) {
    var d = this.D;
    d && d.ni && d.ni(a, b, c);
  };
  y.useProgram = function(a) {
    a.gf && a.gf();
  };
  y.validateProgram = function(a) {
    a.si && a.si();
  };
  y.getContextAttributes = function() {
    return this.A.getContextAttributes();
  };
  y.isContextLost = function() {
    return this.A.isContextLost();
  };
  y.getSupportedExtensions = function() {
    var a = this.A.getSupportedExtensions();
    if (!a && this.isContextLost())
      throw new HA("getSupportedExtensions", this);
    return a;
  };
  y.getExtension = function(a) {
    return this.A.getExtension(a);
  };
  var QA = [
    "WEBGL_compressed_texture_s3tc",
    "WEBKIT_WEBGL_compressed_texture_s3tc",
    "MOZ_WEBGL_compressed_texture_s3tc"
  ];
  function RA(a) {
    if (F(a.G)) return !!a.G;
    if (id && !bd(30))
      for (var b = a.getSupportedExtensions(), c = QA, d = 0; d < b.length; d++)
        for (var e = 0; e < c.length; e++) {
          if (b[d] == c[e] && ((a.G = a.getExtension(c[e])), a.G)) return !0;
        }
    else
      for (c = QA, e = 0; e < c.length; e++)
        if (((a.G = a.getExtension(c[e])), a.G)) return !0;
    a.G = null;
    return !1;
  }
  y = LA.prototype;
  y.bufferData = function(a, b, c) {
    this.A.bufferData(a, b, c);
  };
  y.bufferSubData = function(a, b, c) {
    this.A.bufferSubData(a, b, c);
  };
  y.checkFramebufferStatus = function(a) {
    return this.A.checkFramebufferStatus(a);
  };
  y.clear = function(a) {
    this.A.clear(a);
  };
  y.compileShader = function(a) {
    this.A.compileShader(a);
  };
  y.copyTexImage2D = function(a, b, c, d, e, f, g) {
    a = OA(this, a);
    Ap(a, f, g, c, 5121, b);
    var k = Bp(a);
    a.bind();
    a.B.copyTexImage2D(k, b, c, d, e, f, g, 0);
  };
  y.copyTexSubImage2D = function(a, b, c, d, e, f, g, k) {
    a = OA(this, a);
    var l = Bp(a);
    a.bind();
    a.B.copyTexSubImage2D(l, b, c, d, e, f, g, k);
  };
  y.createBuffer = function() {
    return this.A.createBuffer();
  };
  y.createFramebuffer = function() {
    return this.A.createFramebuffer();
  };
  y.createRenderbuffer = function() {
    return this.A.createRenderbuffer();
  };
  y.createShader = function(a) {
    return this.A.createShader(a);
  };
  y.createTexture = function() {
    return new up(this.A, this.state, this.F);
  };
  y.deleteBuffer = function(a) {
    this.A.deleteBuffer(a);
  };
  y.deleteFramebuffer = function(a) {
    this.A.deleteFramebuffer(a);
  };
  y.deleteRenderbuffer = function(a) {
    this.A.deleteRenderbuffer(a);
  };
  y.deleteShader = function(a) {
    this.A.deleteShader(a);
  };
  y.deleteTexture = function(a) {
    a && a.deleteTexture();
  };
  y.drawArrays = function(a, b, c) {
    this.A.drawArrays(a, b, c);
  };
  y.drawElements = function(a, b, c, d) {
    this.A.drawElements(a, b, c, d);
  };
  y.finish = function() {
    this.A.finish();
  };
  y.flush = function() {
    this.A.flush();
  };
  y.framebufferRenderbuffer = function(a, b, c, d) {
    this.A.framebufferRenderbuffer(a, b, c, d);
  };
  y.framebufferTexture2D = function(a, b, c, d, e) {
    this.A.framebufferTexture2D(a, b, c, d.G, e);
  };
  y.generateMipmap = function(a) {
    OA(this, a).generateMipmap();
  };
  y.getBufferParameter = function(a, b) {
    a = this.A.getBufferParameter(a, b);
    if (null === a && this.isContextLost())
      throw new HA("getBufferParameter", this);
    return a;
  };
  y.getParameter = function(a) {
    switch (a) {
      case 32873:
        return this.F.B[dp(this.state) - 33984];
      case 34068:
        return this.F.C[dp(this.state) - 33984];
      case 35725:
        return this.D;
    }
    a = this.A.getParameter(a);
    if (null === a && this.isContextLost()) throw new HA("getParameter", this);
    return a;
  };
  y.getError = function() {
    return this.A.getError();
  };
  y.getFramebufferAttachmentParameter = function(a, b, c) {
    a = this.A.getFramebufferAttachmentParameter(a, b, c);
    if (null === a && this.isContextLost())
      throw new HA("getFramebufferAttachmentParameter", this);
    return a;
  };
  y.getRenderbufferParameter = function(a, b) {
    a = this.A.getRenderbufferParameter(a, b);
    if (null === a && this.isContextLost())
      throw new HA("getRenderbufferParameter", this);
    return a;
  };
  y.getShaderParameter = function(a, b) {
    a = this.A.getShaderParameter(a, b);
    if (null === a && this.isContextLost())
      throw new HA("getShaderParameter", this);
    return a;
  };
  y.getShaderInfoLog = function(a) {
    return this.A.getShaderInfoLog(a);
  };
  y.getShaderSource = function(a) {
    return this.A.getShaderSource(a);
  };
  y.getTexParameter = function(a, b) {
    a = OA(this, a);
    switch (b) {
      case 10241:
        return a.K;
      case 10240:
        return a.I;
      case 10242:
        return a.J;
      case 10243:
        return a.L;
    }
    return 0;
  };
  y.getVertexAttrib = function(a, b) {
    a = this.A.getVertexAttrib(a, b);
    if (null === a && this.isContextLost())
      throw new HA("getVertexAttrib", this);
    return a;
  };
  y.getVertexAttribOffset = function(a, b) {
    return this.A.getVertexAttribOffset(a, b);
  };
  y.isBuffer = function(a) {
    return this.A.isBuffer(a);
  };
  y.isFramebuffer = function(a) {
    return this.A.isFramebuffer(a);
  };
  y.isRenderbuffer = function(a) {
    return this.A.isRenderbuffer(a);
  };
  y.isShader = function(a) {
    return this.A.isShader(a);
  };
  y.isTexture = function(a) {
    return !a.O && this.A.isTexture(a.G);
  };
  y.readPixels = function(a, b, c, d, e, f, g) {
    this.A.readPixels(a, b, c, d, e, f, g);
  };
  y.renderbufferStorage = function(a, b, c, d) {
    this.A.renderbufferStorage(a, b, c, d);
  };
  y.shaderSource = function(a, b) {
    this.A.shaderSource(a, b);
  };
  y.texParameterf = function(a, b, c) {
    a = OA(this, a);
    switch (b) {
      case 10241:
        xp(a, c);
        break;
      case 10240:
        yp(a, c);
        break;
      case 10242:
        vp(a, c);
        break;
      case 10243:
        wp(a, c);
    }
  };
  y.texParameteri = function(a, b, c) {
    a = OA(this, a);
    switch (b) {
      case 10241:
        xp(a, c);
        break;
      case 10240:
        yp(a, c);
        break;
      case 10242:
        vp(a, c);
        break;
      case 10243:
        wp(a, c);
    }
  };
  y.vertexAttrib1f = function(a, b) {
    this.A.vertexAttrib1f(a, b);
  };
  y.vertexAttrib1fv = function(a, b) {
    this.A.vertexAttrib1fv(a, b);
  };
  y.vertexAttrib2f = function(a, b, c) {
    this.A.vertexAttrib2f(a, b, c);
  };
  y.vertexAttrib2fv = function(a, b) {
    this.A.vertexAttrib2fv(a, b);
  };
  y.vertexAttrib3f = function(a, b, c, d) {
    this.A.vertexAttrib3f(a, b, c, d);
  };
  y.vertexAttrib3fv = function(a, b) {
    this.A.vertexAttrib3fv(a, b);
  };
  y.vertexAttrib4f = function(a, b, c, d, e) {
    this.A.vertexAttrib4f(a, b, c, d, e);
  };
  y.vertexAttrib4fv = function(a, b) {
    this.A.vertexAttrib4fv(a, b);
  };
  y.vertexAttribPointer = function(a, b, c, d, e, f) {
    this.A.vertexAttribPointer(a, b, c, d, e, f);
  };
  function SA(a) {
    a.B.clear();
    a.D = null;
    a.F.clear();
    a.state.clear();
  }
  y.ll = function(a) {
    a.preventDefault();
    SA(this);
    Ua();
    this.dispatchEvent("webglcontextlost");
  };
  y.Dl = function() {
    SA(this);
    if (this.G && ((this.G = void 0), !RA(this)))
      throw Error("Lost compressed textures extension.");
    if (this.L) {
      this.L = void 0;
      if (F(this.L)) var a = !!this.L;
      else {
        if ((a = this.getExtension("OES_texture_float"))) {
          this.getExtension("OES_texture_float_linear");
          this.getExtension("WEBGL_color_buffer_float");
          for (var b = 0; 8 > b; ++b) this.disableVertexAttribArray(b);
          this.disable(3089);
          this.disable(2960);
          this.disable(2929);
          this.disable(3042);
          this.disable(2884);
          b = this.createShader(35633);
          this.shaderSource(
            b,
            "attribute vec4 vertexClip;\nvoid main() {\n  gl_Position = vec4(vertexClip.xy, 0.0, 1.0);\n}"
          );
          this.compileShader(b);
          var c = this.createShader(35632);
          this.shaderSource(
            c,
            "precision highp float;\nuniform sampler2D sampler;\nuniform float mode;\nvoid main() {\n  if (mode == 0.0) {\n    gl_FragColor = floor(gl_FragCoord.xyxy);\n  } else {\n    gl_FragColor = texture2D(sampler, vec2(0.5));\n  }\n}\n"
          );
          this.compileShader(c);
          var d = this.createProgram();
          d.attachShader(b);
          d.attachShader(c);
          d.pe();
          d.gf();
          var e = this.createBuffer();
          this.bindBuffer(34962, e);
          this.bufferData(
            34962,
            new Float32Array([
              -1,
              -1,
              1,
              1,
              1,
              -1,
              1,
              1,
              -1,
              1,
              1,
              1,
              1,
              1,
              1,
              1
            ]),
            35044
          );
          this.enableVertexAttribArray(d.getAttribLocation("vertexClip"));
          this.vertexAttribPointer(
            d.getAttribLocation("vertexClip"),
            4,
            5126,
            !1,
            0,
            0
          );
          this.activeTexture(33984);
          var f = this.createTexture();
          this.bindTexture(3553, f);
          this.texParameteri(3553, 10241, 9729);
          this.texParameteri(3553, 10240, 9729);
          this.texParameteri(3553, 10242, 33071);
          this.texParameteri(3553, 10243, 33071);
          PA(this, 3553, 0, 2, 2, 6408, 5126, null);
          this.bindTexture(3553, null);
          var g = this.createFramebuffer();
          this.bindFramebuffer(36160, g);
          this.framebufferTexture2D(36160, 36064, 3553, f, 0);
          this.uniform1f(d.getUniformLocation("mode"), 0);
          this.uniform1i(d.getUniformLocation("sampler"), 0);
          this.viewport(0, 0, 2, 2);
          this.drawArrays(5, 0, 4);
          this.bindFramebuffer(36160, null);
          this.uniform1f(d.getUniformLocation("mode"), 1);
          this.drawArrays(5, 0, 4);
          var k = new Uint8Array([0, 0, 0, 0]);
          this.readPixels(0, 0, 1, 1, 6408, 5121, k);
          this.disableVertexAttribArray(d.getAttribLocation("vertexClip"));
          this.deleteBuffer(e);
          this.deleteTexture(f);
          this.deleteFramebuffer(g);
          this.detachShader(d, b);
          this.deleteShader(b);
          this.detachShader(d, c);
          this.deleteShader(c);
          this.deleteProgram(d);
          if (
            2 < Math.abs(k[0] - 127) ||
            2 < Math.abs(k[1] - 127) ||
            2 < Math.abs(k[2] - 127)
          )
            a = null;
        }
        this.L = a;
        a = !!a;
      }
      if (!a) throw Error("Lost texture float extension.");
    }
    if (
      this.I &&
      ((this.I = void 0),
      F(this.I) || (this.I = this.getExtension("WEBGL_depth_texture")),
      !this.I)
    )
      throw Error("Lost depth texture extension.");
    F(this.J) &&
      ((this.J = void 0),
      F(this.J) ||
        ((id && Uc && !(0 <= oc(Hz, "30"))) ||
        (ed && Uc && !(0 <= oc(Hz, "27")))
          ? (this.J = null)
          : (this.J = this.getExtension("ANGLE_instanced_arrays"))));
    Ua();
    this.dispatchEvent("webglcontextrestored");
  };
  function TA(a, b, c) {
    this.tb = a;
    this.Xb = b;
    this.A = c;
  }
  function UA() {
    this.B = this.canvas = null;
  }
  UA.prototype.D = h();
  UA.prototype.C = h();
  UA.prototype.getContext = h();
  UA.prototype.F = h();
  function VA() {
    this.jh = !1;
    this.W = null;
  }
  VA.prototype.ta = function(a) {
    this.jh || ((this.jh = !0), this.ga(a));
  };
  VA.prototype.ga = function(a) {
    if (this.W) {
      for (var b = this.W.length - 1; 0 <= b; b--) this.W[b](a);
      this.W = null;
    }
  };
  function WA(a, b, c, d, e) {
    var f = O(new Xf(b.data[7]), 0);
    if (!f) return "";
    f = new Es(f);
    O(e, 0) && f.A.set("hl", O(e, 0));
    O(e, 1) && f.A.set("gl", O(e, 1));
    2 == M(wg(b), 1)
      ? a && f.A.set("cbp", "1," + Math.floor(Tg(Lg(a))) + ",,0,0")
      : c ? f.A.set("cid", c) : d && f.A.set("fid", d);
    return f.toString();
  }
  function XA(a) {
    if (!a || !L(a, 5)) return null;
    a = new Ce(a.data[5]);
    var b;
    (b = !L(a, 4)) ||
      ((b = Td(new Sd(a.data[4]))),
      (b = /^[\s\xa0]*$/.test(null == b ? "" : String(b))));
    return b ? null : Td(new Sd(a.data[4]));
  }
  function YA(a) {
    this.data = a || [];
  }
  I(YA, K);
  function ZA(a) {
    this.data = a || [];
  }
  I(ZA, K);
  function $A() {
    return "Let people see what this place is like";
  }
  function aB() {
    return "Show people what your business has to offer";
  }
  function bB(a, b, c, d, e) {
    var f = a.Bc,
      g = a.eb;
    a = [];
    var k = [],
      l;
    R(eh(f), b);
    L(b, 7) &&
      ((c = WA(null, b, c, d, e)),
      Yf(new Xf(P(eh(f), 7)), c),
      Zg(new Yg(P(g, 12)), c));
    c = new $d(b.data[4]);
    d = zg(b);
    for (l = 0; l < Q(c, 1); l++) a.push(cB(new ae(Gd(c, 1, l))));
    for (l = 0; l < Q(c, 0); l++) k.push(dB(new ae(Gd(c, 0, l))));
    Q(c, 0) ||
      ((e = new ZA()),
      (e.data[0] = "Photos are copyrighted by their owners"),
      k.push(e));
    for (l = 0; l < Q(c, 2); l++) k.push(dB(new ae(Gd(c, 2, l))));
    for (l = 0; l < Q(c, 3); l++)
      (e = new ae(Gd(c, 3, l))), Bd(e, 4, !0) ? k.push(dB(e)) : a.push(cB(e));
    e = yg(b);
    var m = !1;
    if (Q(e, 2)) {
      var n = Td(new Sd(Gd(e, 2, 0)));
      m = !0;
    } else 2 != M(wg(b), 1) && (n = "Untitled");
    l = eB(b);
    var p = !1;
    l || ((l = n), (p = !0));
    n = m && p;
    m = M(rg(b), 0);
    1 != m &&
      l &&
      (Q(c, 4) && O(new ae(Gd(c, 4, 0)), 1)
        ? ((p = new bh()),
          Zg(ih(p), O(new ae(Gd(c, 4, 0)), 1)),
          $g(ih(p), l),
          a.unshift(p))
        : (f.data[3] = l));
    1 == m &&
      (l && (f.data[3] = l),
      (c = XA(d)) ? gh(f, c) : cu(f) && gh(f, "From the web"));
    for (l = n ? 1 : 0; l < Q(e, 2); l++) gh(f, Td(new Sd(Gd(e, 2, l))));
    Td(new Sd(e.data[4])) && (f.data[20] = Td(new Sd(e.data[4])));
    if ((b = iu(b)))
      (n = new ZA()), (n.data[0] = "Image capture: " + b), k.unshift(n);
    Cd(g, 11);
    $a(k, function(a) {
      R(new ZA(Fd(g, 11)), a);
    });
    Cd(f, 18);
    $a(a, function(a) {
      R(new bh(Fd(f, 18)), a);
    });
  }
  function eB(a) {
    var b =
      Td(new Sd(yg(a).data[5])) ||
      Td(new Sd(yg(a).data[6])) ||
      Td(new Sd(yg(a).data[7]));
    if (b) return b;
    for (var c = 0; c < Q(a, 5); c++)
      for (var d = Ag(a, c), e = 0; e < Q(d, 9); e++) {
        var f = new Zd(Gd(d, 9, e));
        if ((b = Td(new Sd(f.data[2]))) && !L(f, 1)) return b;
      }
    return null;
  }
  function dB(a) {
    var b = new ZA(),
      c = Td(be(a)) || (1 == M(a, 3) && "From a Google User") || "";
    L(a, 2) ? ((b.data[2] = O(a, 2)), (b.data[5] = c)) : c && (b.data[0] = c);
    L(a, 1) && (b.data[1] = O(a, 1));
    return b;
  }
  function cB(a) {
    var b = new bh(),
      c = Td(be(a)) || (1 == M(a, 3) && "From a Google User") || "";
    L(a, 1)
      ? (c && $g(ih(b), c),
        Zg(ih(b), O(a, 1)),
        L(a, 2) && (ih(b).data[2] = O(a, 2)))
      : c && (b.data[0] = c);
    return b;
  }
  var fB = "dragstart drag dragend keypress keydown keyup".split(" ");
  function gB(a) {
    VA.call(this);
    this.B = a;
    this.A = [];
  }
  C(gB, VA);
  y = gB.prototype;
  y.ga = function() {
    for (var a = this.A.length, b = 0; b < a; ++b) this.B.jd(this.A[b]);
    this.A = [];
  };
  y.jd = function(a) {
    this.B.jd(a);
    null != a && hb(this.A, a);
  };
  y.Sb = function(a, b, c, d) {
    a = this.B.Sb(a, b, c, d);
    null != a && this.A.push(a);
    return a;
  };
  y.yc = function(a, b, c, d, e, f) {
    a = this.B.yc(a, b, c, d, e, f);
    null != a && this.A.push(a);
    return a;
  };
  y.tc = function() {
    return this.B.tc();
  };
  function hB(a, b, c) {
    this.C = a;
    this.F = b;
    this.D = c;
    this.A = !1;
    this.B = null;
  }
  var iB = 1e5;
  function jB(a, b) {
    if (!a.A) {
      var c = a.F;
      !1 === (a.D ? c.call(a.D, b) : c(b)) && a.cancel();
    }
  }
  y = hB.prototype;
  y.cancel = function() {
    this.A = !0;
  };
  y.key = u("B");
  y.ta = function() {
    this.C && this.oc();
    this.C = null;
  };
  y.listen = function() {
    if (null == this.B && this.C) {
      this.A = !1;
      this.B = iB++;
      var a = this.C;
      a.C || (a.C = {});
      a.C[this.key()] = this;
      (a = a.A.B) && a.A.push(this);
    }
  };
  y.oc = function() {
    null != this.B && this.C && (kB(this.C, this.B), (this.B = null));
  };
  function lB() {
    this.A = [];
    this.B = !1;
  }
  function mB() {
    this.H = nB++;
    this.F = null;
    this.D = {};
    this.C = null;
    this.A = this;
    this.B = null;
  }
  function oB() {
    this.B = 0;
    this.A = [];
    this.C = !1;
  }
  var nB = 1e5;
  function pB(a, b) {
    if (a.C) for (var c in a.C) (c = Number(c)), jB(a.C[c], b);
    for (var d in a.D) (d = Number(d)), pB(a.D[d], b);
  }
  function kB(a, b) {
    if (null !== b && void 0 !== b && (a.C && delete a.C[b], (a = a.A.B))) {
      var c = eb(a.A, function(a) {
        return a.key() == b;
      });
      c && (c.cancel(), (a.C = !0));
    }
  }
  function qB(a, b) {
    b !== a.F &&
      (a.F && delete a.F.D[a.H],
      (a.F = b),
      (a.A.B = null),
      rB(a, a),
      b &&
        b.A !== a &&
        ((b.D[a.H] = a), (a.F = b), (b.A.B = null), rB(a, b.A)));
  }
  function rB(a, b) {
    a.A = b;
    for (var c in a.D) (c = Number(c)), rB(a.D[c], b);
  }
  function sB(a) {
    a = a.B;
    a.C &&
      0 == a.B &&
      ((a.A = ab(a.A, function(a) {
        return !a.A;
      })),
      (a.C = !1));
  }
  function tB(a) {
    if (a.B) a.B.C && 0 == a.B.B && sB(a);
    else {
      var b = new oB();
      uB(a, b);
      a.B = b;
    }
  }
  function uB(a, b) {
    if (a.C) for (var c in a.C) (c = Number(c)), b.A.push(a.C[c]);
    for (var d in a.D) (d = Number(d)), uB(a.D[d], b);
  }
  function vB(a, b, c) {
    mB.call(this, c || void 0);
    this.G = b;
  }
  I(vB, mB);
  function wB(a, b, c) {
    var d = a.get(),
      e = b.get();
    d = d !== e;
    qB(a, b);
    a.G = void 0;
    d && pB(a, c);
  }
  function xB(a, b) {
    var c = a.F && yB(a);
    qB(a, null);
    c && pB(a, b);
  }
  function yB(a) {
    return F(a.get());
  }
  vB.prototype.get = function() {
    return this.A.G;
  };
  vB.prototype.listen = function(a, b) {
    a = new hB(this, a, b);
    a.listen();
    return a;
  };
  vB.prototype.set = function(a, b) {
    var c = this.A;
    a !== c.G && ((c.G = a), zB(this, b));
  };
  function zB(a, b) {
    tB(a.A);
    a = a.A.B;
    var c = a.A;
    a.B += 1;
    for (var d = 0, e = c.length; d < e; d++) {
      var f = c[d];
      f.A || jB(f, b);
    }
    --a.B;
  }
  function AB() {}
  AB.prototype.freeze = function() {
    return this;
  };
  function BB(a, b) {
    return new vB(!1, b, null);
  }
  function CB(a, b) {
    return new vB(!0, b, null);
  }
  new AB().freeze();
  new AB().freeze();
  new AB().freeze();
  function DB() {
    this.left = this.bottom = this.right = this.top = 0;
    this.A = !0;
  }
  function EB(a) {
    this.A = void 0 === a ? 1 : a;
    this.C = !0;
    this.B = !1;
  }
  EB.prototype.D = function() {
    var a = new EB();
    a.A = this.A;
    a.C = this.C;
    a.B = this.B;
    return a;
  };
  function FB(a, b, c, d) {
    Ld(a);
    this.B = Ld(c);
    Ld(b);
    this.A = Ld(d);
  }
  new AB().freeze();
  function GB() {
    this.A = this.B = this.C = null;
  }
  GB.prototype.start = function(a, b, c) {
    var d = this;
    this.A = a;
    this.C = b;
    this.B = jA(
      function(a) {
        d.D(a);
      },
      200,
      c,
      "sceneContZoomStart"
    );
  };
  GB.prototype.D = function(a) {
    this.cancel(a);
  };
  GB.prototype.cancel = function(a) {
    this.A && (this.A.cancel(a), (this.C = this.B = this.A = null));
  };
  function HB(a) {
    var b = {
        x: a.x,
        y: a.y,
        ze: 0,
        type: a.type,
        altKey: a.altKey,
        ctrlKey: a.ctrlKey,
        shiftKey: a.shiftKey,
        metaKey: a.metaKey,
        button: a.button
      },
      c = null;
    a.touches && 0 < a.touches.length
      ? (c = a.touches)
      : a.changedTouches &&
        0 < a.changedTouches.length &&
        (c = a.changedTouches);
    var d = void 0;
    a.pointerType
      ? (d = a.pointerType)
      : a instanceof oj && a.Pa.pointerType && (d = a.Pa.pointerType);
    b.pointerType = d;
    if (c) {
      a = c[0];
      var e = c[c.length - 1],
        f = a.target;
      c = a.clientX - f.clientLeft;
      a = a.clientY - f.clientTop;
      d = e.clientX - f.clientLeft;
      e = e.clientY - f.clientTop;
      f = d - c;
      var g = e - a;
      b.x = (c + d) / 2;
      b.y = (a + e) / 2;
      b.ze = Math.sqrt(f * f + g * g);
    }
    return b;
  }
  function IB() {
    this.eb = new vB(!0, new YA(), null);
    this.S = CB(0);
    this.D = BB(0);
    this.C = CB(0);
    this.M = BB(0);
    this.R = this.I = this.L = this.la = this.G = null;
  }
  y = IB.prototype;
  y.jf = h();
  y.hf = h();
  y.Nc = w(!1);
  y.zc = function(a, b, c, d, e) {
    e(d);
    return !1;
  };
  y.Ne = h();
  y.se = w(!1);
  y.vf = w(!1);
  y.rf = h();
  y.xf = h();
  y.te = h();
  y.ue = h();
  y.sf = h();
  y.re = h();
  y.qf = h();
  y.kf = h();
  y.$d = w("n");
  function JB(a) {
    this.data = a || [];
  }
  I(JB, K);
  JB.prototype.A = function() {
    return L(this, 89);
  };
  function KB(a, b) {
    return LB(a.Sa(), b.Sa());
  }
  function LB(a, b) {
    return qb(a, b, function(a, b) {
      return a instanceof Array && b instanceof Array ? LB(a, b) : a === b;
    });
  }
  function MB(a) {
    return 0 === a || 3 === a;
  }
  function NB(a) {
    a = mo(a);
    return 1 === a || 2 === a || 4 === a || 5 === a;
  }
  function OB(a, b) {
    var c = !1;
    L(a, 0) && ((b.data[0] = mo(a)), (c = !0));
    L(a, 4) && (R(oo(b), no(a)), (c = !0));
    L(a, 2) && (R(new lo(P(b, 2)), new lo(a.data[2])), (c = !0));
    L(a, 3) && (R(new ao(P(b, 3)), new ao(a.data[3])), (c = !0));
    L(a, 5) && ((b.data[5] = O(a, 5)), (c = !0));
    L(a, 6) && ((b.data[6] = Bd(a, 6)), (c = !0));
    L(a, 8) && (R(new jo(P(b, 8)), po(a)), (c = !0));
    a: {
      a = no(b).$();
      for (var d = 0; d < Q(a, 5); d++)
        if (0 < Q(Ag(a, d), 9)) {
          a = !0;
          break a;
        }
      a = !1;
    }
    !a && L(b, 8) && (Cd(b, 8), (c = !0));
    return c;
  }
  function PB(a) {
    var b = new ko();
    R(oo(b), a);
    b.data[0] = $t(a) ? 1 : au(a) ? 2 : bu(a) ? 5 : 4;
    if (!L(a, 1)) {
      var c = 99;
      var d = wg(a.$()),
        e = rg(a.$());
      L(d, 0) ? (c = QB(M(d, 0))) : L(e, 0) && (c = QB(M(e, 0)));
      if (99 == c)
        switch (dh(a)) {
          case 1:
          case 2:
          case 4:
          case 5:
          case 11:
          case 13:
          case 3:
            c = 0;
            break;
          case 10:
            c = 1;
            break;
          case 12:
          case 15:
            c = 4;
            break;
          case 7:
          case 14:
            c = 5;
            break;
          case 27:
            c = 7;
        }
      oo(b).data[1] = c;
    }
    if (L(a, 21)) {
      a: {
        a = a.$();
        for (c = 0; c < Q(a, 5); ++c)
          if (L(Ag(a, c), 1) && ((d = ke(bf(Ag(a, c)))), L(d, 4))) {
            a = RB[M(d, 4, 1)];
            break a;
          }
        a = 0;
      }
      0 != a && (b.data[7] = a);
    }
    return b;
  }
  function QB(a) {
    switch (a) {
      case 1:
        return 7;
      case 2:
        return 0;
      case 3:
      case 8:
        return 4;
      case 4:
        return 1;
      case 10:
        return 10;
      default:
        return 99;
    }
  }
  var RB = { 1: 1, 2: 2, 3: 3 };
  function SB(a) {
    for (; -180 > a; ) a += 360;
    for (; 180 < a; ) a -= 360;
    return a;
  }
  function TB(a, b) {
    var c = !1;
    !b ||
      (Ng(a).V() === b.V() && Vg(Ng(a)) === Vg(b)) ||
      ((c = !0), R(Og(a), b));
    b = 75;
    L(a, 3) && (b = sb(Ig(a), 1, 179));
    b != Ig(a) && ((a.data[3] = b), (c = !0));
    L(Lg(a), 1) || ((Mg(a).data[1] = 90), (c = !0));
    a = Kg(a);
    b = Qg(a);
    b = 90 < b ? 90 : -90 > b ? -90 : b;
    b != Qg(a) && ((a.data[2] = b), (c = !0));
    b = SB(Pg(a));
    b != Pg(a) && ((a.data[1] = b), (c = !0));
    return c;
  }
  function UB(a, b) {
    if (!a) return [];
    var c = [];
    b = !!b;
    a = no(a).$();
    for (var d = 0; d < Q(a, 5); d++)
      for (var e = Ag(a, d), f = 0; f < Q(e, 9); f++) {
        var g = new Zd(Gd(e, 9, f)),
          k = g.oa(),
          l;
        (l = !b) ||
          ((l = new Wd(g.data[0])), (l = !L(l, 1) && !L(l, 0) && L(g, 5)));
        l && 0 < Q(k, 1) && c.push(g);
      }
    return c;
  }
  function VB() {
    this.B = E;
  }
  VB.prototype.requestAnimationFrame = function(a) {
    var b = this.B;
    (
      b.requestAnimationFrame ||
      b.webkitRequestAnimationFrame ||
      b.oRequestAnimationFrame ||
      b.msRequestAnimationFrame ||
      Ha
    ).call(b, a);
  };
  VB.prototype.A = function() {
    var a = this.B;
    return (
      a.animationStartTime ||
      a.mozAnimationStartTime ||
      a.webkitAnimationStartTime ||
      a.osAnimationStartTime ||
      a.msAnimationStartTime ||
      Ua()
    );
  };
  function WB(a) {
    this.F = a ? a : new VB();
    this.A = [];
    this.B = [];
    this.C = [];
    this.G = G(this.H, this);
    this.D = !1;
  }
  function XB(a, b, c) {
    this.A = a;
    this.D = 1 / b;
    this.B = 0;
    this.G = c;
    this.C = 0;
    this.F = !1;
  }
  function YB(a) {
    a.D || ((a.D = !0), a.F.requestAnimationFrame(a.G));
  }
  WB.prototype.H = function(a) {
    this.D = !1;
    var b = [],
      c = this.A;
    this.A = this.B;
    this.B = c;
    var d;
    for (d = 0; d < c.length; d++) {
      var e = c[d],
        f = (a - e.B) * e.D;
      1 <= f
        ? (ZB(e.A, 1),
          e.C++,
          e.C >= e.G ? (b.push(d), (e.F = !0)) : (ZB(e.A, 0), (e.B = a)))
        : 0 < f && ZB(e.A, f);
    }
    a = b.length;
    e = c.length;
    for (d = a - 1; 0 <= d; d--) c[b[d]] = c[--e];
    c.length = e;
    a = this.C.length;
    for (d = 0; d < a; d++)
      for (b = this.C[d], f = e - 1; 0 <= f; f--)
        if (c[f].A == b.A) {
          c[f] = c[--e];
          break;
        }
    c.length = e;
    for (d = this.C.length = 0; d < e; d++) this.A.push(c[d]);
    this.B.length = 0;
    0 < e && YB(this);
  };
  function $B(a, b, c, d, e, f) {
    U.call(this, "AN", [].concat(wa(arguments)));
  }
  C($B, U);
  function aC(a) {
    this.data = a || [];
  }
  I(aC, K);
  function bC(a, b, c, d) {
    this.ca = a;
    this.A = null;
    b &&
      c &&
      d &&
      ((this.A = new aC()),
      (this.A.data[1] = b),
      (this.A.data[2] = c),
      (this.A.data[0] = "//maps.gstatic.com/tactile/unifiedviewer/" + d));
  }
  new bC("main");
  new bC("panorama");
  new bC(
    "food",
    "Add a photo of a dish from here",
    $A(),
    "menu-food-photo-set-v2-1x.png"
  );
  new bC(
    "amenities",
    "Add photos of amenities",
    "Help people see the perks at this place",
    "amenities-tab-photo-set-1x.png"
  );
  new bC(
    "vibe",
    "Add photos of the atmosphere",
    "Help people experience what this place is like",
    "atmosphere-tab-photo-set-1x.png"
  );
  new bC(
    "rooms",
    "Add a photo of a room here",
    $A(),
    "room-hotel-photo-set-v2-1x.png"
  );
  new bC(
    "in-store",
    "Add a photo inside this place",
    "Help people see what this place is like",
    "menu-food-photo-set-v2-1x.png"
  );
  new bC(
    "owners",
    "Add photos for your customers",
    aB(),
    "from-owner-generic-zero-state.svg"
  );
  new bC(
    "dining-owners",
    "Add photos for your customers",
    aB(),
    "from-owner-photo-set-1x.png"
  );
  new bC(
    "hotel-owners",
    "Add photos of your hotel",
    "Help people see what this place is like, inside and out",
    "from-owner-hotel-zero-state.svg"
  );
  new bC(
    "visitors",
    "Add your own photos",
    "Help people see what this place is like",
    "from-visitors-tab-photo-set-1x.png"
  );
  new bC("videos");
  function cC(a) {
    this.A = CB(new AB().freeze(), "in");
    new gB(a).Sb("popstate", this, this.Il);
    this.B = !1;
    this.C = CB(new AB().freeze());
    this.C.listen(this.Hl, this);
    this.D = BB(new AB().freeze());
    this.G = CB(0);
    this.F = CB(new AB().freeze(), 0);
  }
  y = cC.prototype;
  y.listen = function(a, b) {
    this.A.listen(a, b);
  };
  function dC(a, b) {
    b
      ? void 0 !== E.history.replaceState
        ? E.history.pushState(null, document.title, a)
        : (E.history.href = a)
      : void 0 !== E.history.replaceState
        ? E.history.replaceState(E.history.state, document.title, a)
        : (E.history.href = a);
    if (
      E.A &&
      ((b = E.A), b.oi && Ma(b.oi) && b.ri && Ma(b.ri) && b.nf && Ma(b.nf))
    ) {
      var c = b.oi(),
        d = b.ri();
      c && b.nf(c);
      for (c = 0; c < d.length; c++) b.nf(d[c]);
    }
    eC(a);
  }
  y.set = function(a, b) {
    var c = new Es(E.location.href);
    c.A.set("viewerState", a);
    "lb" === a || "im" === a
      ? this.B
        ? dC(c.toString(), !0)
        : ("lb" === a && (this.B = !0), dC(c.toString()))
      : "ga" === a && ((this.B = !0), dC(c.toString()));
    this.A.set(a, b);
  };
  y.get = function() {
    return this.A.get() || "in";
  };
  y.Il = function(a) {
    var b = this.get();
    var c = (c = new Es(E.location.href).A.get("viewerState")) ? c : "in";
    "in" !== c &&
      ("lb" === b && "ga" === c
        ? this.set("ltgl", a)
        : (eC(E.location.href), this.A.set(c, a)));
  };
  y.Hl = function() {
    var a = this.D.get(),
      b = this.C.get();
    a &&
      void 0 !== b &&
      ((a = rg(a.hb(b).$())),
      (a = Rx(a.Sa(), "es")),
      (b = new Es(E.location.href)),
      b.A.set("imagekey", a),
      dC(b.toString()));
  };
  y.bind = function(a, b, c) {
    wB(this.D, a, c);
    wB(this.C, b, c);
  };
  function eC(a) {
    try {
      if (
        a != E.parent.location.href &&
        E.parent &&
        E.parent.google &&
        F(E.parent.google.uvPubSub)
      ) {
        var b = new Es(a),
          c = b.C + "?" + b.getQuery();
        E.parent.google.uvPubSub.Qo("uup", c);
      }
    } catch (d) {}
  }
  function fC(a, b, c, d) {
    U.call(this, "SCPI", [].concat(wa(arguments)));
  }
  C(fC, U);
  function gC(a) {
    var b = new Sm(30);
    this.C = a;
    this.A = b;
  }
  gC.prototype.B = function(a, b) {
    var c = ku(a);
    c ||
      ((c = Jg(a.fa())), (c = L(c, 2) && L(c, 1) ? Qg(c) + "," + Pg(c) : ""));
    if (!c) return null;
    var d = Um(this.A, c);
    d || ((d = this.C.B(a, b)), Tm(this.A, c, d));
    return d;
  };
  gC.prototype.clear = function() {
    this.A.clear();
  };
  function hC(a, b) {
    U.call(this, "CPS", [].concat(wa(arguments)));
  }
  C(hC, U);
  function iC(a, b) {
    U.call(this, "FPS", [].concat(wa(arguments)));
  }
  C(iC, U);
  function jC() {
    U.call(this, "NCS", [].concat(wa(arguments)));
  }
  C(jC, U);
  function kC() {
    U.call(this, "NTS", [].concat(wa(arguments)));
  }
  C(kC, U);
  function lC(a, b) {
    U.call(this, "PNI", [].concat(wa(arguments)));
  }
  C(lC, U);
  function mC(a, b, c, d) {
    U.call(this, "PTI", [].concat(wa(arguments)));
  }
  C(mC, U);
  function nC(a) {
    U.call(this, "SPS", [].concat(wa(arguments)));
  }
  C(nC, U);
  function oC(a) {
    U.call(this, "SPTS", [].concat(wa(arguments)));
  }
  C(oC, U);
  function pC(a) {
    Bo.apply(this, arguments);
  }
  C(pC, Bo);
  pC.prototype.Da = function() {
    return this.P ? this.P.Da() : null;
  };
  function qC() {
    this.B = [];
    this.C = Rk();
    this.A = Math.max(0, this.B.length - 1);
    this.D = new Hg();
  }
  y = qC.prototype;
  y.he = w(!1);
  y.ac = w(1);
  y.Mb = w(1);
  y.xc = u("D");
  y.Ma = u("A");
  y.Kg = function() {
    var a = [];
    a[0] = a[1] = a[2] = 1;
    return a;
  };
  y.Ue = w(1);
  y.Fg = function() {
    a: {
      var a = E.devicePixelRatio || 1;
      for (var b = this.A; 0 < b; b--)
        if (this.B[b] <= 614.4 * a) {
          a = b;
          break a;
        }
      a = 0;
    }
    return a;
  };
  y.Ta = function(a) {
    return Math.min(a / this.ac(), 1);
  };
  y.Ua = function(a) {
    return Math.min(a / this.Mb(), 1);
  };
  y.zb = function(a, b, c, d) {
    c[d + 0] = a;
    c[d + 1] = b;
    c[d + 2] = 1;
  };
  y.ug = function(a, b, c, d) {
    a = this.Ma();
    c = Math.floor(
      Math.log(Vg(this.xc()) / (c.D * Math.tan(d / 2) / Math.tan(c.I / 2))) /
        Math.LN2
    );
    c = sb(c, 0, a);
    return a - c;
  };
  y.uc = h();
  y.Ig = function(a) {
    Sk(a, this.C);
  };
  y.ef = h();
  y.Mg = w(null);
  y.ti = function(a) {
    var b = Ng(new Jm(null.data[1]).fa());
    b = b.V() / Vg(b);
    a = a.V() / a.D;
    return Math.min(a / b, 1);
  };
  new Hn();
  function rC(a, b) {
    nu.call(this, a);
    this.rb(b);
    this.B = null;
    this.C = new Eg();
    this.I = new qC();
  }
  C(rC, nu);
  y = rC.prototype;
  y.Da = u("B");
  y.fa = u("C");
  y.oa = u("I");
  y.sb = h();
  y.Cb = function(a) {
    this.B = a;
    var b = new ah();
    R(b, no(this.Ba()));
    a = new Im(a.data[1]);
    var c = !1;
    !O(b, 3) && O(a, 4) && ((b.data[3] = O(a, 4)), (c = !0));
    if (0 == Q(b, 18) && L(a, 0) && 2 == M(a, 0, 1) && O(a, 2) && O(a, 3)) {
      c = !0;
      var d = ih(new bh(Fd(b, 18)));
      $g(d, O(b, 3));
      Cd(b, 3);
      Zg(
        d,
        "https://picasaweb.google.com/lh/sredir?target=PHOTO&uname=" +
          O(a, 2) +
          "&id=" +
          O(a, 1)
      );
      d = ih(new bh(Fd(b, 18)));
      $g(d, O(a, 3));
      Zg(d, "https://picasaweb.google.com/" + O(a, 2));
    }
    c && this.rb(b);
    ou(this, 3);
  };
  function sC(a, b, c, d) {
    this.C = a;
    this.L = b;
    this.A = c;
    this.O = d;
    this.M = this.D = this.I = this.H = this.G = this.F = null;
    this.N = new jC();
    this.K = null;
    this.J = new ht(this.C);
  }
  sC.prototype.clear = h();
  sC.prototype.B = function(a, b) {
    if (jt && null != jt.wh(ku(a))) return tC(this, a, b);
    var c = $t(a),
      d = lu(a);
    if (c && wu(d)) {
      c = uC(this);
      var e = new Fo();
      c.get(function(b, c) {
        Co(e, b.B(a, c));
      }, b);
      return e;
    }
    d = vC(this, a, b);
    if (!d) return null;
    if (au(a)) {
      c = new mC(d, a, wC(a));
      var f = new pC();
      c.get(function(a) {
        Co(f, a);
      }, b);
      return f;
    }
    if (c) {
      c = new lC(d, a);
      var g = new Fo();
      c.get(function(a) {
        Co(g, a);
      }, b);
      return g;
    }
    if (bu(a)) return new rC(d, a);
    Xa("Unable to getRenderable for: " + Kd(a));
    return null;
  };
  function tC(a, b, c) {
    var d = ku(b),
      e = new mt(a.C, d, kt);
    d = new Cu(d);
    a = new lC(new Zv(d, e, a.L), b);
    var f = new Fo();
    a.get(function(a) {
      Co(f, a);
    }, c);
    return f;
  }
  function vC(a, b, c) {
    var d = O(a.A, 75) ? xC(a) : a.N;
    a: {
      var e = wg(b.$());
      if (L(e, 0) && L(e, 1))
        switch (M(e, 0)) {
          case 1:
            c =
              3 == M(e, 1) && L(e.hb(), 0) && !cu(b) ? new oC(yC(a)) : zC(a, c);
            break a;
          case 2:
            3 == M(e, 1)
              ? (a.F || (a.F = new hC(a.J, Db(a.A.data, 13))),
                (c = new oC(a.F)))
              : (c = AC(a));
            break a;
          case 10:
          case 8:
          case 3:
            4 == M(e, 1)
              ? (a.M || (a.M = new kC()), (c = a.M))
              : (c = new oC(yC(a)));
            break a;
        }
      b = dh(b);
      c =
        1 === b || 2 === b || 11 === b || 13 === b || 5 === b || 4 === b
          ? AC(a)
          : 3 === b
            ? new oC(AC(a))
            : 12 === b || 15 === b ? new oC(yC(a)) : 27 === b ? zC(a, c) : null;
    }
    return d && c ? new Zv(d, c, a.L) : null;
  }
  function wC(a) {
    var b = wg(a.$());
    if (L(b, 0) && L(b, 1))
      switch (M(b, 0)) {
        case 2:
          return 3 == M(b, 1) ? [0, 0, 0, 0, 85, 320, 512, 768, 1024] : [];
        case 1:
        case 8:
        case 3:
        case 10:
          return [512, 1024, 1536];
      }
    a = dh(a);
    return 12 === a || 15 === a
      ? [512, 1024, 1536]
      : 3 === a ? [0, 0, 0, 0, 85, 320, 512, 768, 1024] : [];
  }
  function yC(a) {
    a.I || (a.I = new iC(a.J, Db(a.A.data, 73)));
    return a.I;
  }
  function AC(a) {
    a.G || (a.G = new Hu(a.J, Db(a.A.data, 13)));
    return a.G;
  }
  function uC(a) {
    if (!a.H) {
      var b = null;
      O(a.A, 75) && (b = xC(a));
      a.H = new Wv(a.C, a.L, Db(a.A.data, 73), b);
    }
    return a.H;
  }
  function zC(a, b) {
    if (!a.D) {
      a.D = new nC(a.C);
      var c = G(a.R, a);
      a.D.get(function(a) {
        Fj(a, "Success", c);
        Fj(a, "Failure", c);
      }, b);
    }
    return a.D;
  }
  function xC(a) {
    if (!a.K) {
      var b = new Le();
      b.data[0] = O(new jh(a.A.data[16]), 0);
      b.data[1] = O(new jh(a.A.data[16]), 1);
      a.K = new Jx(
        O(a.A, 75),
        O(a.A, 85),
        Bd(a.A, 86),
        a.C,
        L(a.A, 87) ? O(a.A, 87) : "maps_sv.tactile",
        b,
        a.A.A ? new Kf(a.A.data[89]) : null
      );
    }
    return a.K;
  }
  sC.prototype.R = function(a) {
    switch (a.type) {
      case "Success":
        var b = $z;
        break;
      case "Failure":
        b = Zz;
    }
    this.O.C(b);
  };
  function BC(a, b, c, d, e, f, g) {
    Yj.call(this);
    this.B = b;
    this.N = c;
    this.C = d;
    this.L = e;
    this.F = !1;
    this.J = new Eg();
    this.A = new ak();
    this.M = 0;
    this.I = !1;
    this.D = null;
    this.G = !1;
    var k = this;
    this.B &&
      this.B.C(function(b, c) {
        k.G && (b.ec(c), (k.G = !1));
        g && g(b, c);
        Fj(b, "ViewportReady", function() {
          k.B == CC(k) &&
            ((k.F = !0), k.dispatchEvent(new nj("ViewportReady", k)));
        });
        k.I && (Ar(a), (k.I = !1));
      }, f);
    this.C &&
      this.C.C(function(b, c) {
        k.G && (b.ec(c), (k.G = !1));
        g && g(b, c);
        Fj(b, "ViewportReady", function() {
          k.C == CC(k) &&
            ((k.F = !0), k.dispatchEvent(new nj("ViewportReady", k)));
        });
        k.I && (Ar(a), (k.I = !1));
      }, f);
  }
  C(BC, Yj);
  y = BC.prototype;
  y.wc = function(a, b) {
    R(this.J, a);
    var c = this;
    CC(this).get(function(a, b) {
      a.wc(c.J, b);
    }, b);
  };
  y.kc = function(a, b, c) {
    if (a.length) {
      var d = this.xh(a) ? this.C || this.B : this.B || this.C;
      DC(this, d);
      var e = this;
      CC(this).get(function(b, d) {
        b.wc(e.J, d);
        b.ed(e.M, d);
        b.Rb(e.A.top, e.A.right, e.A.bottom, e.A.left, d);
        b.kc(a, d, c);
      }, b);
    }
  };
  y.xh = h();
  y.clear = function() {
    this.B && this.B.B() && this.B.A().clear();
    this.C && this.C.B() && this.C.A().clear();
  };
  y.La = function() {
    this.F = !1;
    var a = CC(this);
    a.B() ? a.A().La() : (this.I = !0);
  };
  y.ec = function(a) {
    this.F = !1;
    var b = CC(this);
    b.B() ? b.A().ec(a) : (this.G = !0);
  };
  y.Rb = function(a, b, c, d, e) {
    this.A.top = a;
    this.A.right = b;
    this.A.bottom = c;
    this.A.left = d;
    var f = this;
    CC(this).get(function(a, b) {
      a.Rb(f.A.top, f.A.right, f.A.bottom, f.A.left, b);
      a.La();
    }, e);
  };
  y.Za = function() {
    var a = CC(this);
    return a.B() ? a.A().Za() : new ak();
  };
  y.dd = u("F");
  function CC(a) {
    if (a.D) return a.D;
    var b = a.B ? a.B : a.C;
    DC(a, b);
    return b;
  }
  function DC(a, b) {
    a.D && a.D != b && a.D.B() && a.D.A().clear();
    a.D = b;
    b = a.D == a.B;
    a.N && zk(a.N, b);
    a.L && (zk(a.L, !b), (b = b ? "0" : "100%"), uk(a.L, b, b));
  }
  y.ed = function(a, b) {
    this.M = a;
    var c = this;
    CC(this).get(function(a, b) {
      a.ed(c.M, b);
    }, b);
  };
  function EC(a) {
    return !!eb(a, function(a) {
      var b;
      if ((b = !!a.Ba()))
        b = (a = no(a.Ba()))
          ? L(wg(a.$()), 0) ? 1 == M(wg(a.$()), 0) : 7 == M(a, 1, 99)
          : !1;
      return b;
    });
  }
  function FC(a, b, c, d, e, f) {
    BC.call(this, a, b, c, d, e, f);
  }
  C(FC, BC);
  y = FC.prototype;
  y.ae = function(a, b, c) {
    var d = CC(this);
    return d.B() ? d.A().ae(a, b, c) : null;
  };
  y.Wc = function(a, b, c) {
    var d = CC(this);
    return d.B() ? d.A().Wc(a, b, c) : null;
  };
  y.Yc = function(a, b) {
    var c = CC(this);
    if (c.B()) return c.A().Yc(a, b);
  };
  y.ke = function(a) {
    var b = CC(this);
    b.B() ? b.A().ke(a) : ((a[0] = 1), (a[1] = 179));
  };
  y.xh = function(a) {
    return EC(a);
  };
  function GC(a, b, c) {
    U.call(this, "WPNR", [].concat(wa(arguments)));
  }
  C(GC, U);
  function HC(a) {
    var b = a[0],
      c = a[1],
      d = a[2];
    a = a[3];
    return (
      (0 >= a) |
      ((b > +a) << 1) |
      ((b < -a) << 2) |
      ((c > +a) << 3) |
      ((c < -a) << 4) |
      ((d > +a) << 5) |
      ((d < -a) << 6)
    );
  }
  function IC(a, b, c) {
    xA.call(this);
    this.A = a;
    this.D = null;
    this.I = b;
    this.G = c;
    a = this.F = new Tj();
    this.C || (this.C = []);
    this.C.push(a);
    Vj(this.F, this.A.C, "webglcontextrestored", this.H, !1, this);
  }
  I(IC, xA);
  IC.prototype.H = function() {
    this.D = null;
  };
  function JC(a, b, c) {
    c = a.createShader(c);
    a.shaderSource(c, b);
    a.compileShader(c);
    return c;
  }
  IC.prototype.getContext = u("A");
  function KC(a) {
    if (!a.D) {
      var b = JC(a.A, a.I, 35633),
        c = JC(a.A, a.G, 35632);
      a.D = a.A.createProgram();
      a.D.attachShader(b);
      a.D.attachShader(c);
      a.D.pe();
    }
    return a.D;
  }
  function LC(a) {
    a.A.useProgram(KC(a));
  }
  function MC(a, b) {
    this.name = a;
    this.A = b;
  }
  function NC(a) {
    return KC(a.A).getAttribLocation(a.name);
  }
  MC.prototype.vertexAttribPointer = function(a, b, c, d, e, f) {
    var g = this.A.getContext(),
      k = NC(this);
    g.vertexAttribPointer(k, a, b, c, d, e);
    f && g.enableVertexAttribArray(k);
  };
  function OC(a, b) {
    this.name = a;
    this.A = b;
  }
  function PC(a) {
    return KC(a.A).getUniformLocation(a.name);
  }
  function QC(a, b) {
    OC.call(this, a, b);
  }
  I(QC, OC);
  QC.prototype.set = function(a) {
    this.A.getContext().uniform1i(PC(this), a);
  };
  function RC(a, b) {
    OC.call(this, a, b);
  }
  I(RC, OC);
  RC.prototype.set = function(a) {
    this.A.getContext().uniform1f(PC(this), a);
  };
  function SC(a, b) {
    OC.call(this, a, b);
  }
  I(SC, OC);
  SC.prototype.set = function(a, b) {
    this.A.getContext().uniform2f(PC(this), a, b);
  };
  function TC(a, b) {
    OC.call(this, a, b);
  }
  I(TC, OC);
  TC.prototype.set = function(a, b, c) {
    this.A.getContext().uniform3f(PC(this), a, b, c);
  };
  function UC(a, b) {
    OC.call(this, a, b);
  }
  I(UC, OC);
  UC.prototype.set = function(a, b, c, d) {
    this.A.getContext().uniform4f(PC(this), a, b, c, d);
  };
  function VC(a, b) {
    a.A.getContext().uniform4fv(PC(a), b);
  }
  function WC(a, b) {
    OC.call(this, a, b);
  }
  I(WC, OC);
  function XC(a, b) {
    a.A.getContext().uniformMatrix4fv(PC(a), !1, b);
  }
  function YC(a) {
    IC.call(
      this,
      a,
      "varying vec2 a;varying float b;uniform mat4 matrixClipFromModel;uniform vec2 modelToPixelScale,iconSize;attribute vec3 vert;uniform vec3 pivot;uniform float opacity,texCoordOffset,texCoordScale;void main(){a=.5*vert.xy+.5;a.y=texCoordScale*a.y+texCoordOffset;gl_Position=matrixClipFromModel*vec4(pivot,1);if(gl_Position.z<-gl_Position.w)b=0.;else b=opacity;gl_Position=vec4(gl_Position.x/gl_Position.w+vert.x*modelToPixelScale.x,gl_Position.y/gl_Position.w+vert.y*modelToPixelScale.y,0,1);}",
      "precision highp float;varying vec2 a;varying float b;uniform sampler2D iconSampler;void main(){if(b==0.)discard;gl_FragColor=texture2D(iconSampler,a);gl_FragColor.w*=b;}"
    );
    this.B = new ZC(this);
    this.attributes = new $C(this);
  }
  I(YC, IC);
  function ZC(a) {
    this.C = new WC("matrixClipFromModel", a);
    this.B = new SC("modelToPixelScale", a);
    this.D = new TC("pivot", a);
    this.opacity = new RC("opacity", a);
    this.F = new RC("texCoordOffset", a);
    this.G = new RC("texCoordScale", a);
    this.A = new QC("iconSampler", a);
  }
  function $C(a) {
    this.A = new MC("vert", a);
  }
  function aD(a, b) {
    b = (b || new bD()).A ? "#define  1\n" : "";
    IC.call(
      this,
      a,
      b +
        "varying vec4 a;\n#ifdef ENABLE_TEXTURE\nvarying vec2 b;\n#endif\nuniform mat4 matrixClipFromModel;uniform vec4 color;attribute vec3 vert;\n#ifdef ENABLE_TEXTURE\nattribute vec2 aTexCoord;\n#endif\nvoid main(){a=color;\n#ifdef ENABLE_TEXTURE\nb=aTexCoord;\n#endif\ngl_Position=matrixClipFromModel*vec4(vert,1);}",
      b +
        "precision highp float;varying vec4 a;\n#ifdef ENABLE_TEXTURE\nvarying vec2 b;\n#endif\n#ifdef ENABLE_TEXTURE\nuniform sampler2D texture;uniform float textureBlendFactor;\n#endif\nvoid main(){gl_FragColor=a;\n#ifdef ENABLE_TEXTURE\ngl_FragColor.rgb=mix(gl_FragColor.rgb,texture2D(texture,b).rgb,textureBlendFactor);\n#endif\n}"
    );
    this.B = new cD(this);
    this.attributes = new dD(this);
  }
  I(aD, IC);
  function cD(a) {
    this.A = new WC("matrixClipFromModel", a);
    this.color = new UC("color", a);
    this.B = new RC("textureBlendFactor", a);
  }
  function dD(a) {
    this.A = new MC("vert", a);
    this.B = new MC("aTexCoord", a);
  }
  function bD() {
    this.A = eD[0];
  }
  var eD = [0, 1];
  function fD() {
    Yj.call(this);
    Yj.call(this);
    this.A = new Float32Array(0);
    this.D = [1, 1, 1, 1];
    this.C = null;
    this.B = new gD();
    this.G = -1;
    this.F = null;
  }
  C(fD, Yj);
  function hD(a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      Yk(iD(d), iD(a), iD(d));
      jD(d);
      d.B = a.B;
    }
  }
  function uD(a, b) {
    a.D[0] = b[0];
    a.D[1] = b[1];
    a.D[2] = b[2];
    a.D[3] = b[3];
  }
  function vD(a) {
    return a.B.hidden || (0 == a.D[3] && (!a.C || 0 == a.C[3]));
  }
  function iD(a) {
    return a.B.A;
  }
  function jD(a) {
    for (var b = Ck(), c = iD(a), d = 0; d < a.A.length / 3; d++)
      (b[0] = a.A[3 * d]),
        (b[1] = a.A[3 * d + 1]),
        (b[2] = a.A[3 * d + 2]),
        $k(c, b, b),
        (a.A[3 * d] = b[0]),
        (a.A[3 * d + 1] = b[1]),
        (a.A[3 * d + 2] = b[2]);
    Xk(iD(a));
  }
  function FD(a, b, c, d) {
    cl(iD(a), b, c, d);
    Zk(iD(a), iD(a));
  }
  fD.prototype.scale = function(a, b, c) {
    fl(iD(this), a, b, c);
  };
  function GD(a, b) {
    fl(iD(a), b, b, b);
  }
  fD.prototype.translate = function(a, b, c) {
    el(iD(this), a, b, c);
  };
  fD.prototype.rotate = function(a, b, c, d) {
    var e = iD(this),
      f = e[0],
      g = e[1],
      k = e[2],
      l = e[3],
      m = e[4],
      n = e[5],
      p = e[6],
      q = e[7],
      t = e[8],
      r = e[9],
      v = e[10],
      x = e[11],
      z = Math.cos(a),
      A = Math.sin(a),
      H = 1 - z;
    a = b * b * H + z;
    var B = b * c * H + d * A,
      J = b * d * H - c * A,
      D = b * c * H - d * A,
      T = c * c * H + z,
      S = c * d * H + b * A,
      W = b * d * H + c * A;
    b = c * d * H - b * A;
    d = d * d * H + z;
    e[0] = f * a + m * B + t * J;
    e[1] = g * a + n * B + r * J;
    e[2] = k * a + p * B + v * J;
    e[3] = l * a + q * B + x * J;
    e[4] = f * D + m * T + t * S;
    e[5] = g * D + n * T + r * S;
    e[6] = k * D + p * T + v * S;
    e[7] = l * D + q * T + x * S;
    e[8] = f * W + m * b + t * d;
    e[9] = g * W + n * b + r * d;
    e[10] = k * W + p * b + v * d;
    e[11] = l * W + q * b + x * d;
  };
  function HD(a, b) {
    var c = a.A.length;
    a.F = b.createBuffer();
    a.G = GA(
      b.B,
      function() {
        var c = a.F;
        c && b.deleteBuffer(c);
        a.F = null;
      },
      c
    );
    b.bindBuffer(34962, a.F);
    b.bufferData(34962, a.A, 35044);
  }
  function ID(a, b) {
    EA(b.B, a.G);
    return a.F;
  }
  function JD() {
    for (var a = new fD(), b = new Float32Array(150), c = 0; 50 > c; c++)
      (b[3 * c] = Math.sin(c / 50 * Math.PI * 2)),
        (b[3 * c + 1] = Math.cos(c / 50 * Math.PI * 2)),
        (b[3 * c + 2] = 0);
    a.A = b;
    return a;
  }
  function KD() {
    var a = new fD();
    a.A = new Float32Array([
      -0.5,
      0.5,
      0,
      0.5,
      0.5,
      0,
      0.5,
      -0.5,
      0,
      -0.5,
      -0.5,
      0
    ]);
    return a;
  }
  var LD = Pk();
  function gD() {
    this.hidden = !1;
    this.A = Rk();
    Xk(this.A);
  }
  function MD(a) {
    return a.tb ? 1 : a.Xb ? 2 : 3;
  }
  function ND(a, b, c, d, e) {
    try {
      var f = a.A,
        g = OD(b, c),
        k = Math.max(d * g, 1),
        l = Math.max(e * g, 1);
      id || Nc
        ? ((k = Math.round(k)), (l = Math.round(l)))
        : ((k = Math.floor(k)), (l = Math.floor(l)));
      if (f.width !== k || f.height !== l || a.C !== c)
        (a.C = c),
          (f.width = k),
          (f.height = l),
          (f.style.width = d + "px"),
          (f.style.height = e + "px");
    } catch (m) {
      (a = Error()),
        (a.message = "setCanvasSize: Error accessing canvas."),
        km(a, 3);
    }
  }
  function OD(a, b) {
    2 == a && jd
      ? (0 >= PD &&
          (PD =
            Yi("canvas").getContext("2d").webkitBackingStorePixelRatio || 1),
        (a = b / PD))
      : (a = b);
    return a;
  }
  var PD = -1;
  function QD() {
    this.A = [];
    this.I = Rk();
    this.H = Rk();
    this.O = Rk();
    this.C = this.F = this.N = this.D = this.K = null;
    this.G = [];
    this.B = [];
    this.la = this.ma = this.ja = this.T = null;
    this.J = 1;
    this.Y = Infinity;
    this.ea = this.ia = -1;
    var a = RD("rgba(255, 255, 255, 0.7)"),
      b = RD("rgba(0, 0, 0, 0.15)"),
      c = RD("rgba(0, 0, 0, 0.5)");
    this.ja = new Ty(SD(a), a[3]);
    this.ma = new Cy(2, SD(b), b[3]);
    this.T = new ty();
    this.la = new Ty(SD(c), c[3]);
    this.aa = Rk();
    this.L = Rk();
    this.xa = Mk();
    this.za = Mk();
    this.qa = ll();
    this.M = Ck();
    this.Aa = Ck();
    this.Ja = Ck();
    this.R = new Float64Array(2);
    this.W = Pk();
    this.mb = Pk();
    this.Ga = new vy();
  }
  function TD(a, b) {
    for (var c = 0; c < b.length; c++) a.add(b[c]);
  }
  QD.prototype.add = function(a) {
    this.A.push(a);
    jD(a);
  };
  function UD(a, b, c, d, e) {
    var f = (e = e || new ak()),
      g = b.L,
      k = b.J,
      l = b.D / 2,
      m = b.V() / 2,
      n = a.O,
      p = m + f.left,
      q = l + f.top;
    n[0] = m;
    n[1] = 0;
    n[2] = 0;
    n[3] = 0;
    n[4] = 0;
    n[5] = -l;
    n[6] = 0;
    n[7] = 0;
    n[8] = 0;
    n[9] = 0;
    n[10] = (k - g) / 2;
    n[11] = 0;
    n[12] = p;
    n[13] = q;
    n[14] = (k + g) / 2;
    n[15] = 1;
    var t = a.M,
      r = a.Aa,
      v = a.Ja;
    Dk(t, b.A, b.B, b.C);
    Dk(r, b.F, b.G, b.H);
    on(t, t);
    on(r, r);
    Jk(t, v);
    cl(a.H, t, r, v);
    var x = b.V() / b.D,
      z = a.I,
      A = b.L,
      H = b.J,
      B = b.I / 2,
      J = H - A,
      D = Math.sin(B);
    if (0 != J && 0 != D && 0 != x) {
      var T = Math.cos(B) / D;
      z[0] = T / x;
      z[1] = 0;
      z[2] = 0;
      z[3] = 0;
      z[4] = 0;
      z[5] = T;
      z[6] = 0;
      z[7] = 0;
      z[8] = 0;
      z[9] = 0;
      z[10] = -(H + A) / J;
      z[11] = -1;
      z[12] = 0;
      z[13] = 0;
      z[14] = -(2 * A * H) / J;
      z[15] = 0;
    }
    Yk(a.I, a.H, a.aa);
    if (c.Xb) {
      for (
        var S = c.Xb, W = OD(2, E.devicePixelRatio || 1), da = a.L, ia = 0;
        ia < a.A.length;
        ia++
      ) {
        var fa = a.A[ia];
        if (!vD(fa)) {
          Yk(a.I, a.H, da);
          Yk(da, iD(fa), da);
          a: {
            for (var ha = fa.A, qa = a.W, Hb = 0; Hb < ha.length; Hb += 3)
              if (
                ((qa[0] = ha[Hb + 0]),
                (qa[1] = ha[Hb + 1]),
                (qa[2] = ha[Hb + 2]),
                (qa[3] = 1),
                bl(da, qa, qa),
                HC(qa) & 1)
              ) {
                var Yb = !1;
                break a;
              }
            Yb = !0;
          }
          if (Yb) {
            var tb = a.W;
            S.beginPath();
            for (var Eb = 0; Eb < fa.A.length / 3; Eb++)
              (tb[0] = fa.A[3 * Eb]),
                (tb[1] = fa.A[3 * Eb + 1]),
                (tb[2] = fa.A[3 * Eb + 2]),
                (tb[3] = 1),
                bl(da, tb, tb),
                Hk(tb, 1 / tb[3], tb),
                $k(a.O, tb, tb),
                Hk(tb, W, tb),
                0 == Eb ? S.moveTo(tb[0], tb[1]) : S.lineTo(tb[0], tb[1]);
            S.closePath();
            S.fillStyle = VD(fa.D);
            S.fill();
            var Id = fa.C;
            Id && ((S.strokeStyle = VD(Id)), S.stroke());
          }
        }
      }
      if (0 != a.B.length && 0 != a.J) {
        S.globalAlpha = a.J;
        var Sc = a.L;
        Yk(a.I, a.H, Sc);
        for (var vc = 0; vc < a.B.length; vc++) {
          var wc = a.B[vc],
            Jd = wc.F(),
            Sb = a.W,
            ph = wc.C(),
            cf = a.mb,
            Pm = ph[1],
            yz = ph[2];
          cf[0] = ph[0];
          cf[1] = Pm;
          cf[2] = yz;
          cf[3] = 1;
          var LM = a;
          bl(Sc, cf, Sb);
          var kD = !1;
          0 != (HC(Sb) & 6) && (kD = !0);
          Hk(Sb, 1 / Sb[3], Sb);
          $k(LM.O, Sb, Sb);
          if (!kD && Jd) {
            var Th = wc.D(),
              lD = W * wc.B(),
              mD = W * wc.A();
            Sb[0] = Sb[0] * W - lD / 2;
            Sb[1] = Sb[1] * W - mD / 2;
            S.drawImage(
              Jd,
              Th.left,
              Th.top,
              Th.right - Th.left,
              Th.bottom - Th.top,
              Sb[0],
              Sb[1],
              lD,
              mD
            );
          }
        }
        S.globalAlpha = 1;
      }
    } else if (c.tb) {
      var Da = c.tb,
        nD = e;
      Da.clear(256);
      Da.disable(2884);
      Da.disable(2929);
      Da.enable(3042);
      Da.blendFuncSeparate(770, 771, 1, 771);
      if (!a.K) {
        var Ft = new bD();
        0 != Ft.A && (Ft.A = 0);
        a.K = new aD(Da, Ft);
      }
      LC(a.K);
      var MM = NC(a.K.attributes.A);
      Da.enableVertexAttribArray(MM);
      for (var Gt = 0; Gt < a.A.length; Gt++) {
        var Ht = a.A[Gt],
          It = Da;
        It.B.contains(Ht.G) ? EA(It.B, Ht.G) : HD(Ht, It);
      }
      var bo = E.devicePixelRatio || 1;
      Da.viewport(nD.left * bo, nD.bottom * bo, b.V() * bo, b.D * bo);
      for (var co = a.L, Jt = 0; Jt < a.A.length; Jt++) {
        var tg = a.A[Jt];
        if (!vD(tg)) {
          var Uh = a.K;
          Yk(a.I, a.H, co);
          Yk(co, iD(tg), co);
          var oD = a.qa;
          ml(oD, co);
          XC(Uh.B.A, oD);
          VC(Uh.B.color, tg.D);
          Da.bindBuffer(34962, ID(tg, Da));
          Uh.attributes.A.vertexAttribPointer(3, 5126, !1, 0, 0);
          -1 != NC(Uh.attributes.B) && Uh.B.B.set(0);
          Da.drawArrays(6, 0, tg.A.length / 3);
          var pD = tg.C;
          pD && (VC(Uh.B.color, pD), Da.drawArrays(2, 0, tg.A.length / 3));
        }
      }
      if (0 != a.B.length) {
        a.D || (a.D = new YC(Da));
        LC(a.D);
        var te = a.M;
        Dk(te, b.A, b.B, b.C);
        on(te, te);
        var Kt = a.L;
        Yk(a.I, a.H, Kt);
        el(Kt, te[0], te[1], te[2]);
        var qD = a.qa;
        ml(qD, Kt);
        XC(a.D.B.C, qD);
        a.D.B.opacity.set(a.J);
        a.N
          ? Da.bindBuffer(34962, a.N)
          : ((a.N = Da.createBuffer()),
            Da.bindBuffer(34962, a.N),
            Da.bufferData(
              34962,
              new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
              35044
            ));
        var mf = a.D;
        Da.vertexAttribPointer(NC(mf.attributes.A), 2, 5126, !1, 0, 0);
        Da.enableVertexAttribArray(NC(mf.attributes.A));
        mf.B.A.set(0);
        for (var Lt = 0; Lt < a.B.length; Lt++) {
          var Vh = a.B[Lt],
            Mt = Vh.C(),
            rD = Vh.I(Da),
            NM = Vh.B(),
            OM = Vh.A();
          rD &&
            (Da.uniform3fv(PC(mf.B.D), [
              Mt[0] - te[0],
              Mt[1] - te[1],
              Mt[2] - te[2]
            ]),
            Da.uniform2fv(PC(mf.B.B), [NM / b.V(), OM / b.D]),
            Da.uniform1f(PC(mf.B.F), Vh.G()),
            Da.uniform1f(PC(mf.B.G), Vh.H()),
            Da.activeTexture(33984),
            Da.bindTexture(3553, rD),
            Da.drawArrays(5, 0, 4));
        }
        Da.disableVertexAttribArray(NC(mf.attributes.A));
      }
      var PM = NC(a.K.attributes.A);
      Da.disableVertexAttribArray(PM);
      Da.disable(3042);
    } else if (c.A && d) {
      var Ec = c.A,
        Wh = a.M,
        Xh = a.Aa;
      Dk(Wh, b.A, b.B, b.C);
      Dk(Xh, b.F, b.G, b.H);
      on(Wh, Wh);
      on(Xh, Xh);
      Hk(Wh, 2, Wh);
      Gk(Wh, Xh, Xh);
      var Yh = a.R;
      d(Xh, Yh);
      var sD = 2 * Math.abs(b.V() / 2 - Yh[0]);
      Yh[0] < b.V() / 2 && (Yh[0] += sD);
      a.Y = Yh[0] - 0.1 * sD;
      if (0 !== a.A.length || 0 !== a.G.length || 0 !== a.B.length) {
        var ek;
        a.C ||
          ((a.C = Yi("canvas")),
          (a.C.style.position = "absolute"),
          (a.C.style.zIndex = "2"),
          Ec.appendChild(a.C));
        if (a.C.width != Ec.clientWidth || a.C.height != Ec.clientHeight)
          (a.C.width = Ec.clientWidth), (a.C.height = Ec.clientHeight);
        var cb = (ek = a.C) && ek.getContext ? ek.getContext("2d") : null;
        if (cb) {
          cb.save();
          cb.setTransform(1, 0, 0, 1, 0, 0);
          cb.clearRect(0, 0, ek.width, ek.height);
          cb.restore();
          for (var Nt = 0; Nt < a.G.length; Nt++) {
            var tD = a.G[Nt],
              ug = a.xa;
            WD(a, tD, ug, d) &&
              (cb.save(),
              cb.transform(ug[0], ug[1], ug[3], ug[4], ug[6], ug[7]),
              cb.drawImage(ro(tD), 0, 0),
              cb.restore());
          }
          cb.save();
          cb.setTransform(1, 0, 0, 1, 0, 0);
          for (var Ot = 0; Ot < a.A.length; Ot++) {
            var eo = a.A[Ot];
            if (!vD(eo)) {
              var Zh = [];
              if (XD(a, eo, Zh, d)) {
                cb.beginPath();
                cb.moveTo(Zh[0], Zh[1]);
                for (var fo = 1; fo < Zh.length / 2; fo++)
                  cb.lineTo(Zh[2 * fo], Zh[2 * fo + 1]);
                cb.closePath();
                cb.fillStyle = VD(eo.D);
                cb.fill();
                var wD = eo.C;
                wD && ((cb.strokeStyle = VD(wD)), cb.stroke());
              }
            }
          }
          cb.restore();
          if (0 != a.J) {
            cb.globalAlpha = a.J;
            for (var Pt = 0; Pt < a.B.length; Pt++) {
              var fk = a.B[Pt],
                QM = fk.C(),
                vg = a.R;
              d(QM, vg);
              var xD = fk.F();
              if (xD) {
                var $h = fk.D(),
                  yD = fk.B(),
                  zD = fk.A();
                vg[0] -= yD / 2;
                vg[1] -= zD / 2;
                cb.drawImage(
                  xD,
                  $h.left,
                  $h.top,
                  $h.right - $h.left,
                  $h.bottom - $h.top,
                  vg[0],
                  vg[1],
                  yD,
                  zD
                );
              }
            }
            cb.globalAlpha = 1;
          }
        } else {
          if (!a.F) {
            var gk;
            !Nc || (bd("9") && Oi().A.createElementNS)
              ? !Qc || (bd("420") && !Rc)
                ? (gk = new cz("100%", "100%", void 0, void 0, void 0))
                : (gk = new Uy("100%", "100%", void 0, void 0, void 0))
              : (gk = new oz("100%", "100%", void 0, void 0, void 0));
            gk.vc();
            a.F = gk;
            var Qt = a.F.Z();
            Qt.style.position = "absolute";
            Qt.style.zIndex = "1";
            Qt.setAttribute("pointer-events", "none");
            var ue = a.F;
            if (ue.Ka) throw Error("Component already rendered");
            ue.D || ue.vc();
            Ec ? Ec.insertBefore(ue.D, null) : ue.G.A.body.appendChild(ue.D);
            (ue.J && !ue.J.Ka) || ue.Lb();
          }
          if (a.ia != Ec.clientWidth || a.ea != Ec.clientHeight)
            a.F.jc(Ec.clientWidth, Ec.clientHeight),
              (a.ia = Ec.clientWidth),
              (a.ea = Ec.clientHeight);
          var go = a.F;
          go.clear();
          for (var Rt = 0; Rt < a.G.length; Rt++) {
            var St = a.G[Rt],
              Fc = a.xa;
            if (WD(a, St, Fc, d))
              for (
                var AD = new ny(Fc[0], Fc[1], Fc[3], Fc[4], Fc[6], Fc[7]),
                  BD = new ny(
                    Fc[0],
                    Fc[1],
                    Fc[3],
                    Fc[4],
                    Fc[6] + -1.5,
                    Fc[7] + 0
                  ),
                  CD = ro(St).height / 1.25,
                  hk = St.I,
                  ai = 0;
                ai < hk.length;
                ++ai
              ) {
                var Tt = Ky(go, hk[ai], CD / hk.length * ai, a.T, null, a.la);
                Tt.ee = py(BD);
                Tt.ib.xe(Tt, BD);
                var Ut = Ky(go, hk[ai], CD / hk.length * ai, a.T, a.ma, a.ja);
                Ut.ee = py(AD);
                Ut.ib.xe(Ut, AD);
              }
          }
          for (var Vt = 0; Vt < a.A.length; Vt++) {
            var ho = a.A[Vt];
            if (!vD(ho)) {
              var bi = [];
              if (XD(a, ho, bi, d)) {
                var ik = a.Ga;
                ik.clear();
                ik.Vg(bi[0], bi[1]);
                for (var io = 1; io < bi.length / 2; io++)
                  ik.Ug(bi[2 * io], bi[2 * io + 1]);
                ik.close();
                var DD = ho.D,
                  RM = new Ty(SD(DD), DD[3]),
                  Wt = ho.C,
                  ED = null;
                if (Wt) {
                  var SM = SD(Wt);
                  ED = new Cy(1, SM, Wt[3]);
                }
                go.Pe(ik, ED, RM);
              }
            }
          }
        }
      }
    } else throw Error("ShapeLayer: invalid context: " + c);
  }
  function VD(a) {
    return (
      "rgba(" +
      Math.floor(255 * a[0]) +
      "," +
      Math.floor(255 * a[1]) +
      "," +
      Math.floor(255 * a[2]) +
      "," +
      a[3] +
      ")"
    );
  }
  function RD(a) {
    var b = a.substring(5, a.length - 1).split(",");
    a = [];
    for (var c = 0; c < b.length; c++) a.push(+b[c]);
    for (b = 0; 3 > b; b++) a[b] /= 255;
    return a;
  }
  function YD(a) {
    a = a.toString(16);
    return 1 == a.length ? "0" + a : a;
  }
  function SD(a) {
    return (
      "#" +
      YD(Math.floor(255 * a[0])) +
      YD(Math.floor(255 * a[1])) +
      YD(Math.floor(255 * a[2]))
    );
  }
  function XD(a, b, c, d) {
    var e = a.Y;
    0 != c.length && (c = []);
    for (var f = !1, g = 0; g < b.A.length / 3; g++) {
      var k = a.M;
      k[0] = b.A[3 * g];
      k[1] = b.A[3 * g + 1];
      k[2] = b.A[3 * g + 2];
      $k(iD(b), k, k);
      var l = a.R;
      d(k, l);
      c.push(l[0]);
      c.push(l[1]);
      f = l[0] > e || f;
    }
    return !f;
  }
  function WD(a, b, c, d) {
    var e = a.Y,
      f = b.oa(),
      g = a.L;
    f.uc(g);
    var k = a.za,
      l = b.A.length;
    for (f = 6; f < l; f++) k[f - 3] = b.A[f];
    for (f = 0; 3 > f; f++) k[f] = (b.A[f] + b.A[f + 3]) / 2;
    f = !1;
    l = k.length / 3;
    for (var m = 0; m < l; m++) {
      var n = a.M;
      n[0] = k[3 * m];
      n[1] = k[3 * m + 1];
      n[2] = k[3 * m + 2];
      $k(g, n, n);
      on(n, n);
      var p = a.R;
      d(n, p);
      c[3 * m] = p[0];
      c[3 * m + 1] = p[1];
      c[3 * m + 2] = 1;
      f = p[0] > e || f;
    }
    d = ro(b);
    b = d.height / 1.25;
    d = d.width;
    a = a.za;
    a[0] = 0;
    a[1] = b / 2;
    a[2] = 1;
    a[3] = 0 + d;
    a[4] = 0 + b;
    a[5] = 1;
    a[6] = 0 + d;
    a[7] = 0;
    a[8] = 1;
    Nk(a, a);
    b = c[0];
    d = c[1];
    e = c[2];
    g = c[3];
    k = c[4];
    l = c[5];
    m = c[6];
    n = c[7];
    p = c[8];
    var q = a[0],
      t = a[1],
      r = a[2],
      v = a[3],
      x = a[4],
      z = a[5],
      A = a[6],
      H = a[7];
    a = a[8];
    c[0] = b * q + g * t + m * r;
    c[1] = d * q + k * t + n * r;
    c[2] = e * q + l * t + p * r;
    c[3] = b * v + g * x + m * z;
    c[4] = d * v + k * x + n * z;
    c[5] = e * v + l * x + p * z;
    c[6] = b * A + g * H + m * a;
    c[7] = d * A + k * H + n * a;
    c[8] = e * A + l * H + p * a;
    return !f;
  }
  function ZD(a, b) {
    this.G = a;
    this.B = new Hn();
    this.A = b;
    this.F = new QD();
    this.D = null;
    this.H = G(this.G.Yc, this.G);
    this.I = Ck();
    this.K = Ck();
    this.J = Ck();
    this.C = [];
  }
  ZD.prototype.La = function() {
    0 != this.C.length && UD(this.F, this.B, this.A, this.H, this.G.Za());
  };
  function $D(a, b) {
    Cn(b, a.B);
    var c = a.B.A,
      d = a.B.B,
      e = a.B.F,
      f = a.B.G,
      g = a.B.H - a.B.C;
    b = e - c;
    var k = f - d,
      l = g - 0,
      m = Rk(),
      n = Ck(),
      p = Ck();
    Dk(n, c, d, 0);
    on(n, n);
    Dk(p, e, f, g);
    on(p, p);
    Jk(n, aE);
    cl(m, n, p, aE);
    Zk(m, m);
    Uk(m, 2, bE);
    Uk(m, 1, aE);
    Hk(bE, 3.2, bE);
    Hk(aE, 1, aE);
    Fk(n, bE, n);
    Fk(n, aE, n);
    qn(n, n);
    c = Jn(a.B);
    c.A = n[0];
    c.B = n[1];
    c.C = n[2];
    c.H = n[0] + b;
    c.I = n[1] + k;
    c.K = n[2] + l;
    Dn(a.B, c);
  }
  var bE = Ck(),
    aE = Ck(),
    cE = Rk();
  function dE(a, b) {
    for (var c = null, d = 90, e = 0; e < Q(b, 19); e++) {
      var f = new Fm(Gd(b, 19, e));
      if (L(f.hb(), 0)) {
        var g = Math.abs(zb(a, N(f, 0)));
        g < d && ((c = f), (d = g));
      }
    }
    if (!c) return null;
    a = new ah();
    R(a, c.hb());
    return a;
  }
  function eE(a, b, c) {
    this.N = a;
    this.H = b;
    this.F = new Hn();
    this.A = c;
    a = new QD();
    b = new fD();
    uD(b, [0, 0, 0, 0.4]);
    b.A = new Float32Array([
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      -1,
      0,
      -1,
      0,
      0,
      -1,
      1,
      0
    ]);
    b.translate(0, 0, 0.01);
    GD(b, 0.5);
    c = JD();
    uD(c, [0, 0, 0, 0.1]);
    c.translate(0, 0, 0.001);
    GD(c, 0.92);
    var d = JD();
    uD(d, [1, 1, 1, 0.4]);
    gl(iD(d), Math.PI / 2);
    hD(d, [c, b]);
    TD(a, [d, c, b]);
    this.ma = d;
    b = KD();
    uD(b, [1, 1, 1, 0.4]);
    c = [0, 0, 0, 0.4];
    b.C || (b.C = [1, 1, 1, 1]);
    b.C[0] = c[0];
    b.C[1] = c[1];
    b.C[2] = c[2];
    b.C[3] = c[3];
    gl(iD(b), Math.PI / 2);
    b.scale(3.23606798, 2, 1);
    this.Y = b;
    a.add(this.Y);
    var e = [0, 0, 0, 0.1];
    b = [1, 1, 1, 0.3];
    c = KD();
    uD(c, e);
    c.scale(1.9, 0.15, 1);
    d = KD();
    uD(d, e);
    d.translate(0, 0.5125, 0);
    d.scale(0.15, 0.875, 1);
    var f = KD();
    uD(f, e);
    f.translate(0, -0.5125, 0);
    f.scale(0.15, 0.875, 1);
    e = KD();
    uD(e, b);
    e.scale(2, 0.25, 1);
    e.translate(0, 0, 0.001);
    var g = KD();
    uD(g, b);
    g.translate(0, 0.5625, 0.001);
    g.scale(0.25, 0.875, 1);
    var k = KD();
    uD(k, b);
    k.translate(0, -0.5625, 0.001);
    k.scale(0.25, 0.875, 1);
    b = [c, d, f, e, g, k];
    TD(a, b);
    c = new fD();
    gl(iD(c), Math.PI / 2);
    il(iD(c), Math.PI / 4);
    hD(c, b);
    this.ea = c;
    this.J = a;
    this.G = !0;
    this.I = this.K = !1;
    this.D = new sl();
    this.O = Ck();
    this.M = !1;
    this.W = new sl();
    this.T = this.R = 0;
    this.B = this.C = null;
    this.L = !0;
    this.ia = Ck();
    this.xa = Ck();
    this.ja = Ck();
    this.la = Ck();
    this.qa = Ck();
    this.Aa = Ck();
    this.za = new ah();
    this.aa = G(this.H.Yc, this.H);
  }
  eE.prototype.isEnabled = u("G");
  function fE(a, b) {
    (a.G = b) ? gE(a, a.F.V() / 2, a.F.D / 2) : Ar(a.N);
  }
  function hE(a) {
    a = a.G && a.K ? a.D.A : null;
    return !!a && 0.85 >= a[2] && -0.85 <= a[2];
  }
  function iE(a) {
    return a.M ? a.O : null;
  }
  eE.prototype.La = function() {
    if (this.G) {
      var a = this.C,
        b = a && a.Da();
      var c = this.ea;
      var d = this.Y,
        e = this.ma;
      d.B.hidden = !0;
      e.B.hidden = !0;
      var f = this.D.origin,
        g = this.D.A,
        k = this.B && this.B.fa();
      if (or(a) && k && f && g) {
        this.J && ((a = a.Nb()), (this.J.G = a));
        a = this.ia;
        var l = this.xa,
          m = this.qa,
          n = this.ja,
          p = this.Aa,
          q = this.la,
          t = Jg(b.fa());
        un(Pg(t), Qg(t), Rg(t), a);
        k = Jg(k);
        rn(Pg(k), Qg(k), Rg(k) - N(b, 23), n);
        b = this.H;
        k = this.F;
        t = Ck();
        var r = 1 / k.K,
          v = k.qa,
          x = n[1],
          z = n[2];
        v[0] = (n[0] - k.F) * r;
        v[1] = (x - k.G) * r;
        v[2] = (z - k.H) * r;
        v[3] = 1;
        Tk(k.M, Kn(k));
        bl(k.M, v, v);
        r = 1 / v[3];
        v[0] *= r;
        v[1] *= r;
        v[2] *= r;
        r = t || Ck();
        x = v[1];
        z = v[2];
        r[0] = 0.5 * (v[0] + 1) * k.V();
        r[1] = 0.5 * (-x + 1) * k.D;
        r[2] = 0.5 * (z + 1);
        F(b)
          ? (b.Wc(t[0], t[1], this.W),
            (b = this.W.A),
            Dk(p, b[0], b[1], b[2]),
            jE(p) || Dk(p, 0, 0, 1))
          : Dk(p, 0, 0, 1);
        on(n, n);
        on(f, l);
        kE(f, g, l, m);
        kE(f, p, l, p);
        Jk(l, q);
        jE(this.G && this.K ? this.D.A : null)
          ? (Gk(n, a, lE),
            Kk(lE, q, mE),
            Kk(m, mE, lE),
            Fk(lE, l, lE),
            FD(e, l, lE, q),
            this.I && fl(iD(e), 0.4, 0.4, 0.4),
            (e.B.hidden = !1))
          : hE(this) &&
            (FD(d, l, m, q),
            (f = Math.sqrt(Lk(l, a))),
            (f = sb(this.I ? 0.4 : 1, f / 5, f / 50)),
            fl(iD(d), f, f, f),
            (d.B.hidden = !1));
        c.B.hidden = !1;
        this.L || ((d.B.hidden = !0), (e.B.hidden = !0), (c.B.hidden = !0));
        Gk(n, a, lE);
        Kk(lE, q, mE);
        Kk(p, mE, lE);
        Fk(lE, n, lE);
        FD(c, n, lE, q);
        this.I && fl(iD(c), 0.4, 0.4, 0.4);
        c = !0;
      } else c = !1;
      c && UD(this.J, this.F, this.A, this.aa, this.H.Za());
    }
  };
  function gE(a, b, c) {
    a.R = b;
    a.T = c;
    var d = a.R,
      e = a.T,
      f = a.H;
    c = !1;
    b = !!f.Wc(d, e, a.D);
    var g = jE(a.D.A),
      k = a.za;
    F(f) && f.ae(d, e, k)
      ? (a.B || (a.B = new ah()),
        R(a.B, k),
        or(a.C) && g && ju(a.B, no(a.C.Ba())) && (c = !0))
      : (c = !0);
    d = a.C && a.C.Da();
    a.I = !!d && Bd(d, 29);
    c &&
      a.C &&
      (d
        ? ((e = wb(-yb(a.F.N))),
          (a.B = dE(e, d)),
          a.B &&
            ((f = fh(a.B)),
            (c = O(a.B, 0)),
            nE(a, f),
            Eo(a.C.Ab(), c, f),
            (c = Jg(d.fa())),
            (d = Kg(f)),
            L(d, 1) ||
              L(d, 2) ||
              ((e = e * Math.PI / 180),
              (f = Math.sin(e)),
              (g = 180 / Math.PI / 6371010),
              (k = g / Math.cos(Qg(c))),
              (d.data[2] = Qg(c) + 40 * g * Math.cos(e)),
              (d.data[1] = Pg(c) + 40 * k * f))))
        : (a.B = null));
    a.B && nE(a, fh(a.B));
    a.K = !!a.B && b;
    Ar(a.N);
  }
  function nE(a, b) {
    if (or(a.C)) {
      var c = a.C.fa(),
        d = !0;
      a.M = !1;
      hE(a) &&
        ((c = Jg(c)),
        un(Pg(c), Qg(c), Rg(c), mE),
        (c = Jg(b)),
        un(Pg(c), Qg(c), Rg(c), lE),
        Gk(lE, mE, oE),
        (d = 60 < Ik(oE)));
      d ? Cd(b, 1) : a.D.origin && ((a.M = !0), Ek(a.O, a.D.origin));
    }
  }
  eE.prototype.clear = function() {
    this.B = this.C = null;
  };
  function kE(a, b, c, d) {
    sn(a[0], a[1], a[2], mE, void 0);
    mE[0] = yb(mE[0]);
    mE[1] = yb(mE[1]);
    Hk(b, tn(mE[1]), d);
    Fk(a, d, d);
    on(d, d);
    Gk(d, c, d);
    Jk(d, d);
  }
  var mE = Ck(),
    lE = Ck(),
    oE = Ck();
  function jE(a) {
    return !!a && 0.85 < a[2];
  }
  function pE(a, b, c, d, e, f, g, k, l) {
    this.H = a;
    e = new sC(e, this.H.B, d, f);
    this.ma = new gC(e);
    this.xa = 2 === M(d, 20, 1);
    this.ia = !0;
    e = b.B;
    if (c.Xb && this.xa) {
      var m = this.H;
      var n = b.C();
      b = b.B;
      var p = new Sr(m, c.Xb, Yi("CANVAS"), void 0),
        q = new ax(m, b);
      m = new FC(m, p, n, q, b, k);
    } else
      c.tb && 1 === M(d, 20, 1)
        ? ((m = this.H),
          (n = b.C()),
          (b = b.B),
          (p = new GC(m, c.tb, void 0)),
          (q = new ax(m, b)),
          (m = new FC(m, p, n, q, b, k)))
        : e &&
          ((m = this.H),
          (b = b.C()),
          (n = new ax(m, e)),
          (m = new FC(m, null, b, n, e, k)));
    this.D = m;
    this.ea = this.T = !1;
    c.A = e || c.A;
    this.C = new eE(a, this.D, c);
    this.N = new ZD(this.D, c);
    this.O = !1;
    this.R = null;
    this.G = 0;
    this.qa = Bd(d, 88) && !Bd(d, 92);
    this.A = new $B(this.D, c, a, f, g, this.qa);
    this.B = null;
    this.F = !1;
    this.J = void 0;
    this.M = null;
    this.K = void 0;
    this.I = this.L = null;
    this.Ja = Ha;
    this.za = Bd(d, 88);
    this.Y = null;
    this.ja = BB(new AB().freeze());
    this.ja.listen(this.Ga, this);
    this.W = {};
    this.aa = null;
    this.la = l || null;
  }
  function qE(a, b, c, d) {
    c = rE(a, b, c);
    b = c[0];
    c = c[1];
    gE(a.C, b, c);
    var e = a.C.B;
    e && (e = Ld(e));
    !a.G || !a.R || (e && Hd(a.R, e)) || (kA(a.G), (a.G = 0));
    !a.G &&
      e &&
      ((a.R = e),
      (a.G = jA(
        function() {
          (e = a.C.B) && Hd(a.R, e) && sE(a, e, d).Tb(d);
          a.G = 0;
        },
        250,
        d,
        "prd-update-cursor"
      )));
  }
  function tE(a, b, c, d) {
    a.B = b;
    a.B.listen("TileReady", function(b) {
      a.Ja(b, c);
    });
    a.J = d;
    a.C.clear();
    a.C.C = b;
    uE(a, c);
  }
  function uE(a, b) {
    a.F = a.za && 0 < UB(a.B.Ba(), a.qa).length;
    a.F &&
      a.A.get(function(b, d) {
        b.J(a.B);
        b.A(a.Y);
        d.ua("arp");
        Ar(a.H);
      }, b);
  }
  function vE(a, b, c) {
    c = rE(a, b, c);
    b = c[0];
    c = c[1];
    return a.F && a.A.B() ? a.A.A().H(b, c) : !1;
  }
  function wE(a, b, c) {
    if (a.F && a.A.B()) {
      var d = a.A.A();
      if ((a = a.B ? a.B.fa() : null)) return d.F(b, c, a);
    }
    return null;
  }
  function xE(a, b) {
    return (a = a.B.Da()) && Q(a, 19) ? dE(b, a) : null;
  }
  pE.prototype.La = function() {
    this.D.La();
    this.C.La();
    this.O && this.N.La();
    this.la && this.la.La();
    yE(this);
  };
  function zE(a, b) {
    a.Y = b;
    a.F && a.A.B() && a.A.A().A(b);
  }
  function yE(a) {
    if (a.F && a.A.B()) {
      var b = a.A.A();
      b.I();
      b.A(a.Y);
    }
  }
  function AE(a, b) {
    a.ea = !1;
    BE(a);
    a.L = new gA(
      15e3,
      function() {
        a.B = null;
        a.J = void 0;
        a.M = null;
        a.K = void 0;
        a.I && a.I();
        a.ma.clear();
        a.D.clear();
        a.C.clear();
      },
      "clear-pano-render-cache"
    );
    a.L.start(b);
    a.G && (kA(a.G), (a.G = 0));
  }
  function CE(a, b) {
    var c = [],
      d = [];
    if (a.B) {
      a.J || ((a.J = new Km()), (a.J.data[0] = 1));
      var e = a.B,
        f = a.J;
      e && (c.push(e), (f.data[4] = a.ia ? 1 : 0), d.push(f));
    }
    a.M &&
      (a.K || ((a.K = new Km()), (a.K.data[0] = 1)),
      (e = a.M),
      (f = a.K),
      e && (c.push(e), (f.data[4] = a.ia ? 1 : 0), d.push(f)));
    a.D.kc(c, b, d);
    Ar(a.H);
  }
  function DE(a, b, c) {
    var d = sE(a, b, c);
    if (d) {
      tE(a, d, c, void 0);
      a.M = null;
      a.K = void 0;
      fE(a.C, !0);
      CE(a, c);
      var e = G(function() {
        var a = this.N,
          b = this.B;
        if (b && !(a.D && b.$() && Hd(rg(b.$()), rg(a.D.$())))) {
          var c = b.Da();
          if (c) {
            a.D = b;
            a.C = [];
            a.F.A = [];
            var d = Jg(c.fa());
            b = a.I;
            var e = a.K;
            un(Pg(d), Qg(d), 0, b);
            un(Pg(d), Qg(d) + 1e-5, 0, e);
            d = a.J;
            Ek(d, b);
            Jk(d, d);
            cl(cE, b, e, d);
            Zk(cE, cE);
            b = Q(c, 19);
            for (e = 0; e < b; e++)
              if (((d = new Fm(Gd(c, 19, e))), L(d.hb(), 0))) {
                var n = [
                    0,
                    0,
                    0,
                    1,
                    0.6,
                    0,
                    1,
                    0,
                    0,
                    0,
                    -0.6,
                    0,
                    -1,
                    0,
                    0,
                    -1,
                    0.6,
                    0
                  ],
                  p = new fD();
                uD(p, [0.9, 0.9, 0.9, 1]);
                var q = new Float32Array(n);
                p.A = q;
                gl(iD(p), Math.PI / 2);
                GD(p, 0.25);
                q = new fD();
                uD(q, [0, 0, 0, 0.6]);
                n = new Float32Array(n);
                q.A = n;
                gl(iD(q), Math.PI / 2);
                GD(q, 0.25);
                q.translate(0, 0, 0.15);
                p = [q, p];
                n = new fD();
                hD(n, p);
                TD(a.F, p);
                var t = a;
                q = N(d, 0);
                Sk(iD(n), cE);
                if (L(t.D.fa(), 1)) {
                  var r = N(Lg(t.D.fa()), 1);
                  t = Tg(Lg(t.D.fa()));
                  hl(iD(n), xb(-t));
                  gl(iD(n), xb(r - 90));
                  hl(iD(n), xb(t));
                }
                hl(iD(n), xb(-q));
                n.translate(0, 0, -0.75);
                for (n = 0; n < p.length; n++)
                  a.C.push({ shape: p[n], target: d.hb() });
              }
          }
        }
      }, a);
      EE(
        a,
        b,
        function(a, b) {
          e();
          a && b.ua("vrp");
        },
        c
      );
    }
  }
  function FE(a) {
    return a.B ? ((a = a.B.Ba()) ? oo(a) : null) : null;
  }
  function sE(a, b, c) {
    if (!b) return null;
    var d = ku(b);
    (a = a.ma.B(d ? a.W[d] || b : b, c)) && a.Tb(c);
    return a;
  }
  function GE(a, b, c) {
    a.aa = b;
    R(HE, b);
    TB(HE);
    var d = IE(Ng(b), a.D.Za());
    Cn(d, a.C.F);
    $D(a.N, d);
    a.F &&
      a.A.get(function(a) {
        a.K(d);
      }, c);
    a.D.wc(HE, c);
    a.T = !0;
    Ar(a.H);
  }
  function JE(a, b, c, d) {
    function e() {
      d && !g && ((g = !0), d(!f, c));
    }
    sE(a, no(b), c);
    var f = !1,
      g = !1;
    e();
    return new Vs(function() {
      f = !0;
      e();
    });
  }
  function KE(a, b, c, d) {
    function e(a, b, d, e) {
      e && R(eh(f), e);
      c(a, b, d, f);
    }
    var f = Ld(b);
    return LE(a, f, e, e, d);
  }
  function EE(a, b, c, d) {
    LE(
      a,
      b,
      function(b, d, g) {
        if (a.D.dd()) c(b, g);
        else {
          g.na("pano-wait-for-content");
          var e = Gj(a.D, "ViewportReady", function() {
            a.I = null;
            c(b, g);
            g.done("pano-wait-for-content");
          });
          a.I && a.I();
          a.I = function() {
            Oj(e);
            a.I = null;
            g.done("pano-wait-for-content");
          };
        }
      },
      function(a, b, d) {
        c(a, d);
      },
      d
    );
  }
  function LE(a, b, c, d, e) {
    if (!b) return d(!1, null, e, null), new hA();
    var f = sE(a, b, e);
    if (!f) return d(!1, null, e, null), new hA();
    var g = !1;
    f.gc(
      e.va(function(a) {
        g || 0 === a
          ? d(!1, null, e, null)
          : 4 === a ? d(!1, null, e, f.$()) : c(!0, f.fa(), e, f.$());
      }, "pano-wait-for-content")
    );
    return new Vs(function() {
      g = !0;
    });
  }
  pE.prototype.rb = h();
  function ME(a) {
    if (!a.B) return !0;
    if (!a.ea) return !1;
    var b = a.B.nb();
    return 4 == b ? !0 : a.D.dd() && !a.T && (2 == b || 3 == b);
  }
  function NE(a, b, c) {
    return b && ((a = sE(a, b, c)), or(a) && L(a.Da(), 23))
      ? N(a.Da(), 23)
      : null;
  }
  function BE(a) {
    a.L && a.L.A();
    a.L = null;
  }
  pE.prototype.Ga = function() {
    var a = this.ja.get();
    a && ((a = "im" == a), a !== this.O && Ar(this.H), (this.O = a));
  };
  function rE(a, b, c) {
    return (a = a.D.Za()) ? [b - a.left, c - a.top] : [b, c];
  }
  var HE = new Eg();
  function IE(a, b) {
    var c = HE;
    if (!b) return c;
    c = Ld(c);
    var d = Og(c);
    Ug(d, Math.max(1, a.V() - b.left - b.right));
    Wg(d, Math.max(1, Vg(a) - b.top - b.bottom));
    return c;
  }
  pE.prototype.Aa = Ii;
  function OE(a, b, c, d, e, f, g) {
    this.M = Ld(a);
    this.R = b;
    this.O = no(this.R);
    this.J = Ld(c);
    this.L = d;
    this.B = no(this.L);
    this.Y = e;
    this.C = f;
    this.F = Ld(a);
    this.I = new Km();
    R(Kg(new Eg(P(this.I, 2))), Jg(a));
    this.I.data[5] = !0;
    this.A = new Km();
    R(Kg(new Eg(P(this.A, 2))), e ? Jg(a) : Jg(c));
    this.A.data[5] = !0;
    this.T = null;
    this.W = !1;
    this.N = 0;
    this.K = g;
  }
  OE.prototype.D = w(500);
  OE.prototype.G = function(a) {
    PE(this);
    var b = 2 * a - 1;
    b = 0.5 * (b * (2 + b * ((0 <= b ? -1 : 1) + 0 * b)) + 1);
    if (!this.Y) {
      var c = Jg(this.M),
        d = Jg(this.J),
        e = Kg(this.F),
        f = Pg(c);
      e.data[1] = SB(vb(f, f + zb(f, Pg(d)), b));
      e.data[2] = vb(Qg(c), Qg(d), b);
      Sg(e, vb(Rg(c), Rg(d), b));
    }
    c = Lg(this.M);
    d = Lg(this.J);
    e = Mg(this.F);
    f = Tg(c);
    var g = N(c, 2),
      k = zb(g, N(d, 2));
    e.data[0] = wb(f + vb(0, zb(f, Tg(d)), b));
    e.data[1] = vb(N(c, 1), N(d, 1), b);
    e.data[2] = wb(g + vb(0, k, b));
    c = Ig(this.M);
    d = Ig(this.J);
    this.F.data[3] = 1e-6 >= Math.abs(c - d) ? c : vb(c, d, b);
    0 === a || ju(this.O, this.B)
      ? DE(this.C, this.O, this.K)
      : 1 === a
        ? (DE(this.C, this.B, this.K),
          L(this.B.fa(), 0) && R(Kg(this.F), Jg(this.B.fa())))
        : ((this.I.data[0] = 1),
          !this.W || 0.2 > a
            ? ((this.N = a), (this.A.data[0] = 0))
            : (this.A.data[0] = (a - this.N) / (1 - this.N)),
          (this.I.data[4] = vb(1, 0, 10 * sb(b, 0, 0.1))),
          (a = vb(0, 1, 10 * (sb(b, 0.9, 1) - 0.9))),
          this.A && (this.A.data[4] = a),
          (a = this.C),
          (f = this.B),
          (b = this.K),
          (c = this.I),
          (d = this.A),
          (e = sE(a, this.O, b)),
          (f = sE(a, f, b)),
          e && f && (tE(a, e, b, c), (a.M = f), (a.K = d), CE(a, b)));
    return this.F;
  };
  OE.prototype.H = function(a) {
    var b = !ju(no(this.R), no(this.L));
    if (0 === a) b && ((a = this.C), fE(a.C, !1), a.A.B() && a.A.A().B(!1));
    else if (1 === a)
      return b && ((a = this.C), fE(a.C, !0), a.A.B() && a.A.A().B(!0)), this.L;
    return null;
  };
  function PE(a) {
    if (!a.T) {
      var b = PB(a.B);
      a.T = JE(a.C, b, a.K, function(b) {
        a.W = b;
      });
    }
  }
  function QE(a, b, c) {
    this.K = Tg(Lg(a));
    this.C = Ld(a);
    this.J = b ? -1 : 1;
    this.I = c;
    this.B = -2 / 3 * 0.075;
    this.F = 1 / 0.016875;
    this.A = 1 / (1 + this.B);
  }
  QE.prototype.D = w(4e3);
  QE.prototype.G = function(a) {
    this.I &&
      (a = 0.075 >= a ? this.A * this.F * a * a * a : this.A * (a + this.B));
    a = wb(this.K + 360 * this.J * a);
    Mg(this.C).data[0] = a;
    return this.C;
  };
  QE.prototype.H = w(null);
  function RE(a, b, c) {
    a = new Bz(a, b, c);
    var d = Array(51);
    for (b = 0; 51 > b; b++) d[b] = Dz(a, Ez(a, b / 50));
    return function(a) {
      if (0 >= a) return 0;
      if (1 <= a) return 1;
      var b = 50 * a;
      a = Math.floor(b);
      b -= a;
      return d[a] * (1 - b) + d[a + 1] * b;
    };
  }
  RE(0, 0, 0.58);
  var SE = RE(0.52, 0, 0.48);
  RE(0.52, 0, 0.25);
  var TE = RE(0.36, 0.67, 0.533);
  RE(0.24, 0.67, 0.533);
  RE(0.56, 1, 0.56);
  RE(0.91, 1, 0.82);
  function UE(a) {
    var b = VE;
    this.J = Ld(a);
    this.M = TE;
    this.C = wb(N(Lg(a), 1));
    this.B = wb(Tg(Lg(a)));
    this.I = wb(N(Lg(a), 2));
    this.K = zb(this.C, wb(N(b, 1)));
    this.F = zb(this.I, wb(N(b, 2)));
    this.A = zb(this.B, wb(Tg(b)));
    this.L = 0 != this.A || 0 != this.F || 0 != this.K ? 650 : 0;
  }
  UE.prototype.D = u("L");
  UE.prototype.G = function(a) {
    var b = this.J,
      c = this.M(a);
    a = wb(this.B + vb(0, this.A, c));
    var d = wb(this.C + vb(0, this.K, c));
    c = wb(this.I + vb(0, this.F, c));
    Mg(b).data[0] = a;
    Mg(b).data[1] = d;
    Mg(b).data[2] = c;
    return b;
  };
  UE.prototype.H = w(null);
  function WE(a, b, c, d, e) {
    this.B = Ld(a);
    this.L = TE;
    this.C = Ig(a);
    this.A = b;
    this.K = Tg(Lg(a));
    var f = (e = e || new ak()),
      g = Ng(a),
      k = Math.max(1, g.V() - f.left - f.right);
    g = Math.max(1, Vg(g) - f.top - f.bottom);
    c -= k / 2 + f.left;
    this.F = Tg(Lg(a)) + c / k * (k / g) * Ig(a) - c / k * (k / g) * b;
    this.J = N(Lg(a), 1);
    k = Math.max(1, Vg(Ng(a)) - e.top - e.bottom);
    d -= k / 2 + e.top;
    this.I = sb(N(Lg(a), 1) - d / k * Ig(a) + d / k * b, 0, 170);
  }
  WE.prototype.D = function() {
    return 1e3 * Math.abs(this.A - this.C) / 72;
  };
  WE.prototype.G = function(a) {
    var b = this.L(a);
    a = vb(this.C, this.A, b);
    var c = vb(this.K, this.F, b);
    b = vb(this.J, this.I, b);
    var d = this.B;
    Mg(d).data[0] = c;
    Mg(d).data[1] = b;
    d.data[3] = a;
    return this.B;
  };
  WE.prototype.H = w(null);
  function XE(a, b, c, d) {
    IB.call(this);
    this.A = a;
    this.A.C.L = !1;
    this.ma = null;
    this.W = !1;
    this.Aa = this.za = this.Ja = this.Ga = 0;
    this.qa = d;
    this.S.listen(this.jl, this);
    this.D.listen(this.kl, this);
    this.aa = new Le();
    this.aa.data[0] = O(new jh(b.data[16]), 0);
    this.aa.data[1] = O(new jh(b.data[16]), 1);
    this.O = new GB();
    this.H = this.K = this.F = null;
    this.N = [];
    this.B = null;
    this.ea = new Float64Array(2);
    this.ia = new Float64Array(2);
    this.xa = Ua();
    this.Y = !1;
    this.T = !0;
    this.Fb = !1;
    this.Pb = Bd(b, 88);
    this.ja = !0;
    this.J = null;
    this.G = this;
    this.la = this.A;
    this.L = this;
    this.I = this;
    this.mb = new gA(4e3, G(this.El, this), "inactivity");
  }
  C(XE, IB);
  y = XE.prototype;
  y.jf = function(a) {
    zE(this.A, L(a, 8) ? po(a) : null);
  };
  y.Nc = function(a, b) {
    b = TB(a, b || void 0);
    a = YE(a);
    return b || a;
  };
  function YE(a) {
    var b = !1,
      c = Ig(a),
      d = sb(c, 15, 90);
    d !== c && ((b = !0), (a.data[3] = d));
    return b;
  }
  y.zc = function(a, b, c, d, e) {
    if (this.H) return this.N.push(e), !0;
    var f = this.S.get(),
      g = this.C.get();
    if (b && 1 === mo(b) && !ju(no(b), no(g)) && 2 === c.A) return !1;
    if (!b || mo(b) == mo(g)) return ZE(this, a, b, c, d, e), !0;
    if ((c = 2 != c.A)) (c = this.ma), (c = !!c.sh.get() && !c.Ja.get());
    return c && b && MB(mo(b))
      ? ($E(this, d),
        (a = a || f),
        (b = b || g),
        (g = this.M.get()),
        Cd(a, 1),
        aF(this, d),
        bF(g, a, b, d, e),
        !0)
      : !1;
  };
  function ZE(a, b, c, d, e, f) {
    var g = a.S.get(),
      k = a.C.get();
    $E(a, e);
    if (
      (c &&
        !(
          NB(k) &&
          mo(k) == mo(c) &&
          (L(k, 4) && L(c, 4) ? ju(no(k), no(c)) : KB(k, c))
        )) ||
      b ||
      !c
    ) {
      c && L(c, 8) && (R(new jo(P(a.C.get(), 8)), po(c)), cF(a), zB(a.C, e));
      var l = new Eg();
      b && (R(l, b), a.Nc(l, Ng(g)));
      b || (l = g);
      if (!c || KB(k, c)) {
        if (2 === d.A) {
          R(g, l);
          zB(a.S, e);
          f(e);
          return;
        }
        c || (c = k);
      }
      b = null;
      k && L(k, 4) && (b = no(k));
      k = new ah();
      R(k, no(c));
      b && ju(b, k) && (DE(a.A, k, e), dF(a, k, e));
      g
        ? ((g = Jg(g)), un(Pg(g), Qg(g), Rg(g), eF))
        : (eF[0] = eF[1] = eF[2] = 0);
      g = Jg(l);
      un(Pg(g), Qg(g), Rg(g), fF);
      g = Math.sqrt(Lk(eF, fF));
      gF(a, l, c, 2 == d.A || 800 < g, f, e);
    } else (d = new ko()), R(d, c), a.C.set(d, e), cF(a), f(e);
  }
  y.Kl = function(a) {
    this.F = null;
    a.ua("thp1");
  };
  y.Jc = w(!0);
  y.Lc = function(a, b, c, d, e) {
    if (this.ja) {
      var f = this.S.get(),
        g = this.M.get();
      if (0 !== a && !this.F && !this.H) {
        b.ad("zoom");
        var k = Ig(f);
        a = 0 < a ? 0 : 1;
        var l = 0 === a ? 15 : 90;
        var m = this.A.D.Za();
        F(c) || ((c = Ng(f).V() / 2), m && (c += m.left / 2 - m.right / 2));
        d = F(d) ? d : Vg(Ng(f)) / 2;
        e
          ? this.O.A
            ? ((g = this.O),
              g.C === a
                ? (kA(g.B),
                  (g.B = jA(G(g.D, g), 200, b, "sceneContZoomTickle")))
                : g.cancel(b))
            : ((e = l),
              e !== k &&
                ((f = new WE(f, e, c, d, this.A.D.Za())),
                (g = g.animate(f, b, G(this.vh, this))),
                this.O.start(g, a, b)))
          : (this.O.cancel(b),
            (e = 0 === a ? k / 2 : 2 * k),
            (e = 0 === a ? Math.max(l, e) : Math.min(l, e)),
            10 >= Math.abs(e - l) && (e = l),
            e !== k &&
              ((f = new WE(f, e, c, d, this.A.D.Za())),
              (this.K = g.animate(f, b, G(this.vh, this)))));
      }
    }
  };
  y.Nd = function(a, b) {
    if (this.ja) {
      var c = this.S.get(),
        d = Ig(c);
      d *= Math.pow(2, -a);
      c.data[3] = d;
      YE(c) && zB(this.S, b);
      if ((a = this.C.get()))
        (d = new Eg()),
          R(d, c),
          tm(this, "user-input-event", b, {
            type: "zoom",
            S: d,
            contentType: mo(a)
          });
    }
  };
  y.vh = function(a) {
    this.K = null;
    var b = this.S.get(),
      c = this.C.get();
    if (b && c) {
      var d = new Eg();
      R(d, b);
      tm(this, "user-input-event", a, {
        type: "zoom",
        S: d,
        contentType: mo(c)
      });
    }
  };
  function hF(a, b, c, d) {
    var e = d.event();
    e && iF(a, e);
    qE(a.A, b, c, d);
    a.A.F &&
      ((b = a.A), b.F && b.A.B() && b.A.A().L(), a.mb.A(), a.mb.start(d));
  }
  y.rf = function(a, b) {
    iF(this, a);
    qE(this.A, a.x, a.y, b);
    this.F && (this.F.cancel(b), b.ua("thp1"));
    var c = this.A;
    var d = a.x;
    a = a.y;
    a = rE(c, d, a);
    d = a[0];
    a = a[1];
    if (c.O)
      a: {
        c = c.N;
        for (var e = c.F.O, f = 0; f < c.C.length; f++) {
          var g = cE;
          Sk(g, c.F.aa);
          b: {
            var k = c.C[f].shape,
              l = d,
              m = a,
              n = -Infinity,
              p = Infinity,
              q = -Infinity,
              t = Infinity;
            if (vD(k)) g = !1;
            else {
              Yk(g, iD(k), g);
              for (var r = 0; r < k.A.length / 3; r++) {
                LD[0] = k.A[3 * r];
                LD[1] = k.A[3 * r + 1];
                LD[2] = k.A[3 * r + 2];
                LD[3] = 1;
                bl(g, LD, LD);
                if (0 > LD[3]) {
                  g = !1;
                  break b;
                }
                Hk(LD, 1 / LD[3], LD);
                $k(e, LD, LD);
                LD[0] < p && (p = LD[0]);
                LD[1] < t && (t = LD[1]);
                LD[0] > n && (n = LD[0]);
                LD[1] > q && (q = LD[1]);
              }
              g = l <= n && l >= p && m <= q && m >= t ? !0 : !1;
            }
          }
          if (g) {
            c = c.C[f].target;
            break a;
          }
        }
        c = null;
      }
    else c = null;
    c && jF(this, c, b);
  };
  y.xf = function(a, b) {
    iF(this, a);
    qE(this.A, a.x, a.y, b);
  };
  function kF(a, b) {
    a.A.D.ke(lF);
    return sb(b, lF[0], lF[1]);
  }
  y.ue = function(a, b) {
    iF(this, a);
    if (this.W) {
      mF(this, a.x, a.y);
      var c = this.S.get(),
        d = this.A.D.Za() || new DB(),
        e = Math.max(1, Ng(c).V() - d.left - d.right),
        f = 1 / Math.tan(xb(Ig(c) / 2)),
        g = Math.max(1, Vg(Ng(c)) - d.bottom - d.top) / 2 + d.top;
      d = e / 2 + d.left;
      d = yb(Math.atan2((a.x - d) / g, f) - Math.atan2((this.Ga - d) / g, f));
      a = kF(
        this,
        this.Aa +
          yb(Math.atan2((a.y - g) / g, f) - Math.atan2((this.Ja - g) / g, f))
      );
      f = wb(this.za - d);
      Mg(c).data[1] = a;
      Mg(c).data[0] = f;
      zB(this.S, b);
    } else qE(this.A, a.x, a.y, b);
  };
  y.te = function(a, b) {
    iF(this, a);
    b.ad("pan");
    this.W = !0;
    b = this.A;
    b.F && b.A.B() && b.A.A().C();
    this.Ga = a.x;
    this.Ja = a.y;
    this.za = Tg(Lg(this.S.get()));
    this.Aa = N(Lg(this.S.get()), 1);
    b = this.ia;
    var c = a.y;
    b[0] = a.x;
    b[1] = c;
    a = this.ea;
    a[0] = 0;
    a[1] = 0;
    this.xa = Ua();
  };
  y.sf = function(a, b) {
    iF(this, a);
    if (!this.H) {
      var c = this.S.get();
      mF(this, a.x, a.y);
      if (this.W) {
        var d = -1 * this.ea[0],
          e = this.ea[1];
        if (0.25 < Math.sqrt(d * d + e * e)) {
          a = this.M.get();
          var f = Lg(c);
          e = N(f, 1) + 10 * e;
          e = kF(this, e);
          VE.data[1] = e;
          VE.data[0] = Tg(f) + 10 * d;
          d = new UE(c);
          b.ua("thp0");
          this.F = a.animate(d, b, G(this.Kl, this));
        }
      }
      this.W = !1;
      a = this.A;
      a.F && a.A.B() && a.A.A().D();
      if ((a = this.C.get()))
        (d = new Eg()),
          R(d, c),
          tm(this, "user-input-event", b, {
            type: "rotate",
            S: d,
            contentType: mo(a)
          });
    }
  };
  function iF(a, b) {
    b =
      !(
        b &&
        ("touchstart" === b.type ||
          "touchmove" === b.type ||
          "touchend" === b.type ||
          "touchcancel" === b.type ||
          nF[b.pointerType])
      ) &&
      a.T &&
      !vE(a.A, b.x, b.y);
    a.A.C.L = b;
  }
  function mF(a, b, c) {
    var d = Ua(),
      e = d - a.xa;
    if (0 < e) {
      var f = a.ea,
        g = c - a.ia[1],
        k = Math.exp(-e / 32);
      f[0] = k * f[0] + (1 - k) * (b - a.ia[0]) / e;
      f[1] = k * f[1] + (1 - k) * g / e;
    }
    e = a.ia;
    e[0] = b;
    e[1] = c;
    a.xa = d;
  }
  y.se = function(a, b) {
    return (this.H && this.H.A) ||
      (this.K && this.K.A) ||
      (this.F && this.F.A) ||
      (this.B && this.B.A)
      ? !1
      : vE(this.A, a, b) ? !0 : this.T ? !!this.A.C.B : !1;
  };
  y.vf = aa();
  y.re = function(a, b) {
    iF(this, a);
    if (
      this.se(a.x, a.y) &&
      this.A.C &&
      (qE(this.A, a.x, a.y, b), !vE(this.A, a.x, a.y))
    ) {
      var c = new ah();
      R(c, this.A.C.B);
      var d = iE(this.A.C);
      if (c) {
        var e = this;
        oF(this);
        this.J = KE(
          this.A,
          c,
          function(a, b, k, l) {
            a && (R(c, l), b && R(Kg(fh(c)), Jg(b)), pF(e, c, d, k), qF(e, c));
          },
          b
        );
      }
    }
  };
  function qF(a, b, c, d) {
    var e = O(b, 9);
    b = O(b, 10);
    e && b && a.qa.F(e, b, aA, void 0, !0, c, d);
  }
  function jF(a, b, c) {
    c.ub("scene", "move_camera");
    oF(a);
    a.J = KE(
      a.A,
      b,
      function(c, e, f, g) {
        c &&
          (R(b, g),
          Cd(fh(b), 1),
          e && R(Kg(fh(b)), Jg(e)),
          pF(a, b, null, f),
          qF(a, b, 4));
      },
      c
    );
  }
  function oF(a) {
    a.J && (a.J.A(), (a.J = null));
  }
  function rF(a, b, c, d) {
    a.B && a.B.cancel(c);
    a.F && a.F.cancel(c);
    var e = a.S.get(),
      f = Tg(Lg(e)),
      g = xE(a.A, (b ? f : f + 180) % 360);
    b = a.C.get();
    if (e && b) {
      var k = new Eg();
      var l = mo(b);
    }
    g &&
      (c.ub("scene", "move_camera"),
      oF(a),
      (a.J = KE(
        a.A,
        g,
        function(b, c, e, f) {
          b &&
            (R(g, f),
            c && R(Kg(fh(g)), Jg(c)),
            R(Mg(fh(g)), Lg(a.S.get())),
            pF(a, g, null, e),
            qF(a, g, 24, d),
            F(k) &&
              F(l) &&
              tm(a, "user-input-event", e, {
                type: "pan",
                S: k,
                contentType: l
              }));
        },
        c
      )));
  }
  function sF(a, b, c, d) {
    if (!a.B && !a.H) {
      d.ad("pan");
      a.F && a.F.cancel(d);
      var e = a.S.get(),
        f = a.M.get();
      c && d.ua("pan0");
      c = new QE(e, b, c);
      a.B = f.animate(c, d, G(a.Fl, a, b));
    }
  }
  y.Fl = function(a, b) {
    this.B.F
      ? ((this.B = null), b.ua("pan1"))
      : ((this.B = null), sF(this, a, !1, b));
    a = this.S.get();
    var c = this.C.get();
    if (a && c) {
      var d = new Eg();
      R(d, a);
      tm(this, "user-input-event", b, {
        type: "rotate",
        S: d,
        contentType: mo(c)
      });
    }
  };
  function tF(a, b, c) {
    (37 != b.keyCode &&
      39 != b.keyCode &&
      65 != b.keyCode &&
      68 != b.keyCode) ||
      !a.B ||
      a.B.cancel(c);
  }
  y.qf = function(a, b) {
    iF(this, a);
    this.re(a, b);
  };
  function pF(a, b, c, d) {
    if (d.kh("scene", "move_camera")) {
      var e = a.S.get(),
        f = fh(b);
      c
        ? tr(f, c)
        : L(f, 1) || ((c = Mg(f)), e ? R(c, Lg(e)) : (c.data[1] = 90));
      e = a.C.get();
      b = PB(b);
      R(new jo(P(b, 8)), po(e));
      L(e, 7) && (b.data[7] = M(e, 7));
      gF(a, f, b, !1, Ha, d);
    }
  }
  function gF(a, b, c, d, e, f) {
    if (!(a.K || a.F || a.H || a.B) && a.Y) {
      var g = a.M.get();
      if (g) {
        var k = a.S.get();
        if (k) {
          var l = a.C.get();
          if (l) {
            var m = no(l),
              n = no(c),
              p = Ld(b);
            a.Fb ? L(p, 3) || (p.data[3] = Ig(k)) : (p.data[3] = 75);
            m = NE(a.A, m, f);
            var q = NE(a.A, n, f);
            null != m &&
              null != q &&
              3 != m &&
              3 != q &&
              ((b = Rg(Jg(b)) + (q - m)), Sg(Kg(p), b));
            c = new OE(k, l, p, c, d, a.A, f);
            f.ua("c2g0");
            a.N.push(e);
            a.H = g.animate(c, f, function(b) {
              b.ua("c2g1");
              a.H = null;
              dF(a, n, b);
              for (var c = 0; c < a.N.length; c++) a.N[c](b);
              a.N = [];
            });
          }
        }
      }
    }
  }
  y.hf = function(a, b) {
    this.Y = !0;
    this.ma = a;
    uF(a, this.A, b);
    a = this.A;
    a.ea = !0;
    BE(a);
    var c = this.C.get();
    a = this.S.get();
    Cd(oo(c), 17);
    c = oo(c);
    R(fh(c), a);
    DE(this.A, c, b);
    var d = FE(this.A);
    d ? (R(fh(d), a), dF(this, d, b)) : dF(this, c, b);
  };
  y.Ne = function(a) {
    this.Y = !1;
    $E(this, a);
    oF(this);
    aF(this, a);
    var b = this.C.get();
    b && ((oo(b).data[3] = ""), Cd(oo(b), 17));
    AE(this.A, a);
    this.ma = null;
  };
  function $E(a, b) {
    a.F && (a.F.cancel(b), (a.F = null));
    a.K && (a.K.cancel(b), (a.K = null));
    a.H && (a.H.cancel(b), (a.H = null));
    a.B && (a.B.cancel(b), (a.B = null));
    a.O.A && a.O.cancel(b);
  }
  y.jl = function(a) {
    var b = this.S.get();
    b && GE(this.A, b, a);
  };
  y.kl = function(a) {
    if (this.S.get()) {
      if (FE(this.A)) {
        this.D.get() && (vF(this), zB(this.eb, a));
        var b = this.A;
        b = b.B ? b.B.fa() : null;
        var c = this.S.get();
        c &&
          L(c, 0) &&
          L(Jg(c), 0) &&
          b &&
          L(b, 0) &&
          L(Jg(b), 0) &&
          0.1 < Math.abs(Rg(Jg(c)) - Rg(Jg(b))) &&
          ((c = new EB()), (c.A = 2), ZE(this, b, null, c, a, Ha));
      }
      a = this.A;
      a.T = !1;
      Ar(a.H);
    }
  };
  function cF(a) {
    var b = a.C.get();
    b && zE(a.A, L(b, 8) ? po(b) : null);
  }
  function dF(a, b, c) {
    var d = a.A.B;
    if (!d || 4 != d.nb()) {
      var e = new Pd();
      R(e, rg(b.$()));
      oF(a);
      a.J = KE(
        a.A,
        b,
        function(c, d, k, l) {
          if (a.Y)
            if (c) {
              c = new ah();
              R(c, l);
              d && (R(Kg(fh(c)), Jg(d)), R(Mg(fh(c)), Lg(d)));
              wF(a, c, k);
              l = l.$();
              var f = a.aa;
              d = { eb: new YA(), Bc: new ah() };
              R(d.Bc, c);
              if (
                l &&
                (L(l, 6) ||
                  L(l, 4) ||
                  L(l, 3) ||
                  L(l, 9) ||
                  L(l, 1) ||
                  L(l, 2) ||
                  L(l, 8) ||
                  L(l, 0) ||
                  L(l, 7))
              ) {
                if (c && L(c, 11)) {
                  var g = O(new Yg(c.data[11]), 0);
                  var p = Ds(g);
                  p ||
                    ((g = decodeURIComponent(g.match(zs)[6] || "")),
                    (p = Ds(g)));
                  g = p ? p : null;
                } else g = null;
                p = null;
                0 < Q(c, 15) &&
                  0 == M(new Xg(hh(c).data[0]), 8) &&
                  (p = O(new Xg(hh(c).data[0]), 0));
                Cd(d.Bc, 3);
                Cd(d.Bc, 17);
                bB(d, l, g, p, f);
              }
              c = a.C.get();
              l = a.eb.get();
              f = null;
              L(c, 4) && L(no(c), 21) && L(no(c).$(), 1) && (f = rg(no(c).$()));
              R(oo(c), d.Bc);
              f && xF(a, f);
              d.eb && R(l, d.eb);
              OB(PB(no(c)), c);
              vF(a);
              if (a.Pb) {
                c = a.A;
                if ((l = c.B)) l.rb(d.Bc), uE(c, k);
                zB(a.S, k);
              }
              cF(a);
              d = new lB();
              c = a.C;
              tB(c.A);
              d.B || d.A.push.apply(d.A, c.A.B.A);
              c = a.eb;
              tB(c.A);
              d.B || d.A.push.apply(d.A, c.A.B.A);
              d.B = !0;
              c = d.A;
              l = 0;
              for (f = c.length; l < f; l++) (g = c[l]), g.A || jB(g, k);
              d.A = [];
              d.B = !1;
            } else
              (d = l.$()),
                Hd(e, rg(d))
                  ? (d = !1)
                  : (c = a.C.get())
                    ? ((l = a.A),
                      L(e, 1) &&
                        L(d, 1) &&
                        !Hd(e, rg(d)) &&
                        (f = O(e, 1)) &&
                        !l.W[f] &&
                        ((g = new ah()), R(eh(g), d), (l.W[f] = g)),
                      R(eh(oo(c)), d),
                      xF(a, e),
                      (d = no(c)),
                      wF(a, d, k),
                      DE(a.A, d, k),
                      dF(a, d, k),
                      (d = !0))
                    : (d = !1),
                d ||
                  ((d = new ah()),
                  R(d, b),
                  Cd(d, 0),
                  L(d, 21) && Cd(eh(d), 1),
                  wF(a, d, k));
        },
        c
      );
    }
  }
  function xF(a, b) {
    var c = a.C.get();
    c &&
      (a = a.A.W[O(b, 1)]) &&
      Hd(rg(a.$()), rg(no(c).$())) &&
      R(sg(eh(oo(c))), b);
  }
  function vF(a) {
    var b = a.D.get(),
      c = a.C.get(),
      d = a.eb.get();
    b &&
      d &&
      c &&
      ((a = WA(b, no(c).$(), null, null, a.aa)), Zg(new Yg(P(d, 12)), a));
  }
  function aF(a, b) {
    var c = a.eb.get();
    c.data[0] = "";
    c.data[2] = "";
    zB(a.eb, b);
  }
  function wF(a, b, c) {
    var d = a.S.get();
    if (d) {
      var e = a.C.get(),
        f = rg(no(e).$());
      e = OB(PB(b), e);
      xF(a, f);
      e && (cF(a), zB(a.C, c));
      f = !1;
      e = Jg(b.fa());
      if (Qg(Jg(d)) !== Qg(e) || Pg(Jg(d)) !== Pg(e) || Rg(Jg(d)) !== Rg(e))
        R(Kg(d), e), (f = !0);
      e = b.$();
      0 < Q(e, 5) &&
        L(Ag(e, 0), 10) &&
        ((e = new ne(Ag(e, 0).data[10])), fu(e, d) && (f = !0));
      f && zB(a.S, c);
      L(b, 0) && a.D.get() && (vF(a), zB(a.eb, c));
    }
  }
  y.El = function(a) {
    var b = this.A;
    b.F && b.A.B() && b.A.A().G();
    tm(this, "user-input-event", a, { type: "annotationshidden" });
  };
  y.kf = function(a, b) {
    var c = this.S.get();
    R(Og(c), a);
    zB(this.S, b);
    if ((a = this.C.get())) {
      var d = new Eg();
      R(d, c);
      tm(this, "user-input-event", b, {
        type: "resize",
        S: d,
        contentType: mo(a)
      });
    }
  };
  y.$d = w("pa");
  var VE = new Gg(),
    lF = new Float64Array(2),
    eF = Ck(),
    fF = Ck(),
    nF = { touch: !0, pen: !0 };
  function yF(a, b, c, d, e, f) {
    c.load("pa", b, function(b, c) {
      a(new XE(b, d, e, f, c));
    });
  }
  function zF(a, b, c, d) {
    b = new pu(c, d);
    a(b);
  }
  function AF(a, b, c, d, e, f, g) {
    U.call(this, "SCPR", [].concat(wa(arguments)));
  }
  C(AF, U);
  function BF(a, b, c, d, e, f, g, k, l) {
    d.getContext(function(b, n) {
      a(new pE(c, d, b, e, f, g, k, n, l));
    }, b);
  }
  new rt(0, 0, 1);
  new rt(9999, 11, 31);
  function CF(a) {
    this.A = [];
    this.B = pt;
    if ("number" == typeof a) {
      11 < a && (a = 10);
      if (4 > a) var b = this.B.Od[a];
      else
        8 > a
          ? (b = this.B.Pd[a - 4])
          : ((b = this.B.Ff[a - 8]),
            (b = b.replace("{1}", this.B.Od[a - 8])),
            (b = b.replace("{0}", this.B.Pd[a - 8])));
      DF(this, b);
    } else DF(this, a);
  }
  function DF(a, b) {
    for (var c = !1, d = "", e = 0; e < b.length; e++) {
      var f = b.charAt(e);
      if (" " == f)
        for (
          0 < d.length && (a.A.push({ text: d, count: 0, Mc: !1 }), (d = "")),
            a.A.push({ text: " ", count: 0, Mc: !1 });
          e < b.length - 1 && " " == b.charAt(e + 1);

        )
          e++;
      else if (c)
        "'" == f
          ? e + 1 < b.length && "'" == b.charAt(e + 1)
            ? ((d += "'"), e++)
            : (c = !1)
          : (d += f);
      else if (0 <= "GyMdkHmsSEDahKzZvQL".indexOf(f)) {
        0 < d.length && (a.A.push({ text: d, count: 0, Mc: !1 }), (d = ""));
        var g = b.charAt(e);
        for (var k = e + 1; k < b.length && b.charAt(k) == g; ) k++;
        g = k - e;
        a.A.push({ text: f, count: g, Mc: !1 });
        e += g - 1;
      } else
        "'" == f
          ? e + 1 < b.length && "'" == b.charAt(e + 1)
            ? ((d += "'"), e++)
            : (c = !0)
          : (d += f);
    }
    0 < d.length && a.A.push({ text: d, count: 0, Mc: !1 });
    b = !1;
    for (c = 0; c < a.A.length; c++)
      EF(a.A[c])
        ? !b &&
          c + 1 < a.A.length &&
          EF(a.A[c + 1]) &&
          ((b = !0), (a.A[c].Mc = !0))
        : (b = !1);
  }
  function EF(a) {
    if (0 >= a.count) return !1;
    var b = "MydhHmsSDkK".indexOf(a.text.charAt(0));
    return 0 < b || (0 == b && 3 > a.count);
  }
  var FF = {
      po: "y",
      qo: "y G",
      so: "MMM y",
      to: "MMMM y",
      Xn: "MMM d",
      Yn: "MMMM dd",
      Di: "M/d",
      Zn: "MMMM d",
      $n: "MMM d, y",
      ko: "EEE, MMM d",
      lo: "EEE, MMM d, y",
      Un: "d"
    },
    GF = FF;
  GF = FF;
  function HF() {
    return xc("iPad") || (xc("Android") && !xc("Mobile")) || xc("Silk");
  }
  function IF(a) {
    this.data = a || {};
  }
  function JF(a, b, c) {
    a = a.data[b];
    return null != a ? a : c;
  }
  function KF(a, b) {
    return JF(a, b, "");
  }
  function LF(a) {
    var b = {};
    Db(a.data, "param").push(b);
    return b;
  }
  function MF(a, b) {
    return Db(a.data, "param")[b];
  }
  function NF(a) {
    return a.data.param ? a.data.param.length : 0;
  }
  function OF(a) {
    var b = a.length - 1,
      c = null;
    switch (a[b]) {
      case "filter_url":
        c = 1;
        break;
      case "filter_imgurl":
        c = 2;
        break;
      case "filter_css_regular":
        c = 5;
        break;
      case "filter_css_string":
        c = 6;
        break;
      case "filter_css_url":
        c = 7;
    }
    c && ib(a, b);
    return c;
  }
  function PF(a) {
    if (QF.test(a)) return a;
    a = di(a).Xa();
    return "about:invalid#zClosurez" === a ? "about:invalid#zjslayoutz" : a;
  }
  var QF = /^data:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp);base64,[-+/_a-z0-9]+(?:=|%3d)*$/i;
  function RF(a) {
    var b = SF.exec(a);
    if (!b) return "0;url=about:invalid#zjslayoutz";
    var c = b[2];
    return b[1]
      ? "about:invalid#zClosurez" == di(c).Xa()
        ? "0;url=about:invalid#zjslayoutz"
        : a
      : 0 == c.length ? a : "0;url=about:invalid#zjslayoutz";
  }
  var SF = /^(?:[0-9]+)([ ]*;[ ]*url=)?(.*)$/;
  function TF(a) {
    if (null == a) return null;
    if (!UF.test(a) || 0 != VF(a, 0)) return "zjslayoutzinvalid";
    for (var b = /([-_a-zA-Z0-9]+)\(/g, c; null !== (c = b.exec(a)); )
      if (null === WF(c[1], !1)) return "zjslayoutzinvalid";
    return a;
  }
  function VF(a, b) {
    if (0 > b) return -1;
    for (var c = 0; c < a.length; c++) {
      var d = a.charAt(c);
      if ("(" == d) b++;
      else if (")" == d)
        if (0 < b) b--;
        else return -1;
    }
    return b;
  }
  function XF(a) {
    if (null == a) return null;
    for (
      var b = /([-_a-zA-Z0-9]+)\(/g,
        c = /[ \t]*((?:"(?:[^\x00"\\\n\r\f\u0085\u000b\u2028\u2029]*)"|'(?:[^\x00'\\\n\r\f\u0085\u000b\u2028\u2029]*)')|(?:[?&/:=]|[+\-.,!#%_a-zA-Z0-9\t])*)[ \t]*/g,
        d = !0,
        e = 0,
        f = "";
      d;

    ) {
      b.lastIndex = 0;
      var g = b.exec(a);
      d = null !== g;
      var k = a;
      if (d) {
        if (void 0 === g[1]) return "zjslayoutzinvalid";
        var l = WF(g[1], !0);
        if (null === l) return "zjslayoutzinvalid";
        k = a.substring(0, b.lastIndex);
        a = a.substring(b.lastIndex);
      }
      e = VF(k, e);
      if (0 > e || !UF.test(k)) return "zjslayoutzinvalid";
      f += k;
      if (d && "url" == l) {
        c.lastIndex = 0;
        g = c.exec(a);
        if (null === g || 0 != g.index) return "zjslayoutzinvalid";
        var m = g[1];
        if (void 0 === m) return "zjslayoutzinvalid";
        g = 0 == m.length ? 0 : c.lastIndex;
        if (")" != a.charAt(g)) return "zjslayoutzinvalid";
        k = "";
        1 < m.length &&
          (0 == m.lastIndexOf('"', 0) && Wb(m, '"')
            ? ((m = m.substring(1, m.length - 1)), (k = '"'))
            : 0 == m.lastIndexOf("'", 0) &&
              Wb(m, "'") &&
              ((m = m.substring(1, m.length - 1)), (k = "'")));
        m = PF(m);
        if ("about:invalid#zjslayoutz" == m) return "zjslayoutzinvalid";
        f += k + m + k;
        a = a.substring(g);
      }
    }
    return 0 != e ? "zjslayoutzinvalid" : f;
  }
  function WF(a, b) {
    var c = a.toLowerCase();
    a = YF.exec(a);
    if (null !== a) {
      if (void 0 === a[1]) return null;
      c = a[1];
    }
    return (b && "url" == c) || c in ZF ? c : null;
  }
  var ZF = {
      blur: !0,
      brightness: !0,
      calc: !0,
      circle: !0,
      contrast: !0,
      counter: !0,
      counters: !0,
      "cubic-bezier": !0,
      "drop-shadow": !0,
      ellipse: !0,
      grayscale: !0,
      hsl: !0,
      hsla: !0,
      "hue-rotate": !0,
      inset: !0,
      invert: !0,
      opacity: !0,
      "linear-gradient": !0,
      matrix: !0,
      matrix3d: !0,
      polygon: !0,
      "radial-gradient": !0,
      rgb: !0,
      rgba: !0,
      rect: !0,
      rotate: !0,
      rotate3d: !0,
      rotatex: !0,
      rotatey: !0,
      rotatez: !0,
      saturate: !0,
      sepia: !0,
      scale: !0,
      scale3d: !0,
      scalex: !0,
      scaley: !0,
      scalez: !0,
      steps: !0,
      skew: !0,
      skewx: !0,
      skewy: !0,
      translate: !0,
      translate3d: !0,
      translatex: !0,
      translatey: !0,
      translatez: !0
    },
    UF = /^(?:[*/]?(?:(?:[+\-.,!#%_a-zA-Z0-9\t]| )|\)|[a-zA-Z0-9]\(|$))*$/,
    $F = /^(?:[*/]?(?:(?:"(?:[^\x00"\\\n\r\f\u0085\u000b\u2028\u2029]|\\(?:[\x21-\x2f\x3a-\x40\x47-\x60\x67-\x7e]|[0-9a-fA-F]{1,6}[ \t]?))*"|'(?:[^\x00'\\\n\r\f\u0085\u000b\u2028\u2029]|\\(?:[\x21-\x2f\x3a-\x40\x47-\x60\x67-\x7e]|[0-9a-fA-F]{1,6}[ \t]?))*')|(?:[+\-.,!#%_a-zA-Z0-9\t]| )|$))*$/,
    YF = /^-(?:moz|ms|o|webkit|css3)-(.*)$/;
  var aG = {};
  function bG(a) {
    this.data = a || {};
  }
  I(bG, IF);
  function cG(a) {
    dG.data.css3_prefix = a;
  }
  function eG() {
    this.A = {};
    this.B = null;
    this.kb = ++fG;
  }
  var gG = 0,
    fG = 0;
  function hG() {
    dG ||
      ((dG = new bG()),
      kc() && !xc("Edge")
        ? cG("-webkit-")
        : xc("Firefox")
          ? cG("-moz-")
          : Gc() ? cG("-ms-") : xc("Opera") && cG("-o-"),
      (dG.data.is_rtl = !1));
    return dG;
  }
  var dG = null;
  function iG() {
    return hG().data;
  }
  function jG(a, b, c) {
    return b.call(c, a.A, aG);
  }
  function kG(a, b, c) {
    null != b.B && (a.B = b.B);
    a = a.A;
    b = b.A;
    if ((c = c || null)) {
      a.Ea = b.Ea;
      a.ab = b.ab;
      for (var d = 0; d < c.length; ++d) a[c[d]] = b[c[d]];
    } else for (d in b) a[d] = b[d];
  }
  function lG(a, b) {
    var c = a.__innerhtml;
    c || (c = a.__innerhtml = [a.innerHTML, a.innerHTML]);
    if (c[0] != b || c[1] != a.innerHTML)
      (a.innerHTML = b), (c[0] = b), (c[1] = a.innerHTML);
  }
  var mG = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    icon: !0,
    manifest: !0,
    poster: !0,
    src: !0
  };
  function nG(a) {
    if ((a = a.getAttribute("jsinstance"))) {
      var b = a.indexOf(";");
      return (0 <= b ? a.substr(0, b) : a).split(",");
    }
    return [];
  }
  function oG(a) {
    if ((a = a.getAttribute("jsinstance"))) {
      var b = a.indexOf(";");
      return 0 <= b ? a.substr(b + 1) : null;
    }
    return null;
  }
  function pG(a, b, c) {
    var d = a[c] || "0",
      e = b[c] || "0";
    d = parseInt("*" == d.charAt(0) ? d.substring(1) : d, 10);
    e = parseInt("*" == e.charAt(0) ? e.substring(1) : e, 10);
    return d == e
      ? a.length > c || b.length > c ? pG(a, b, c + 1) : !1
      : d > e;
  }
  function qG(a, b, c, d, e, f) {
    b[c] = e >= d - 1 ? "*" + e : String(e);
    b = b.join(",");
    f && (b += ";" + f);
    a.setAttribute("jsinstance", b);
  }
  function rG(a) {
    if (!a.hasAttribute("jsinstance")) return a;
    for (var b = nG(a); ; ) {
      var c = dj(a);
      if (!c) return a;
      var d = nG(c);
      if (!pG(d, b, 0)) return a;
      a = c;
      b = d;
    }
  }
  var sG = { for: "htmlFor", class: "className" },
    tG = {},
    uG;
  for (uG in sG) tG[sG[uG]] = uG;
  var vG = /^<\/?(b|u|i|em|br|sub|sup|wbr|span)( dir=(rtl|ltr|'ltr'|'rtl'|"ltr"|"rtl"))?>/,
    wG = /^&([a-zA-Z]+|#[0-9]+|#x[0-9a-fA-F]+);/,
    xG = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" };
  function yG(a) {
    if (null == a) return "";
    if (!zG.test(a)) return a;
    -1 != a.indexOf("&") && (a = a.replace(AG, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(BG, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(CG, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(DG, "&quot;"));
    return a;
  }
  function EG(a) {
    if (null == a) return "";
    -1 != a.indexOf('"') && (a = a.replace(DG, "&quot;"));
    return a;
  }
  var AG = /&/g,
    BG = /</g,
    CG = />/g,
    DG = /"/g,
    zG = /[&<>"]/,
    FG = null;
  function GG(a) {
    for (var b = "", c = 0, d; (d = a[c]); ++c)
      switch (d) {
        case "<":
        case "&":
          var e = ("<" == d ? vG : wG).exec(a.substr(c));
          if (e && e[0]) {
            b += a.substr(c, e[0].length);
            c += e[0].length - 1;
            continue;
          }
        case ">":
        case '"':
          b += xG[d];
          break;
        default:
          b += d;
      }
    null == FG && (FG = document.createElement("div"));
    FG.innerHTML = b;
    return FG.innerHTML;
  }
  var HG = { 9: 1, 11: 3, 10: 4, 12: 5, 13: 6, 14: 7 };
  function IG(a, b, c, d) {
    if (null == a[1]) {
      var e = (a[1] = a[0].match(zs));
      if (e[6]) {
        for (var f = e[6].split("&"), g = {}, k = 0, l = f.length; k < l; ++k) {
          var m = f[k].split("=");
          if (2 == m.length) {
            var n = m[1]
              .replace(/,/gi, "%2C")
              .replace(/[+]/g, "%20")
              .replace(/:/g, "%3A");
            try {
              g[decodeURIComponent(m[0])] = decodeURIComponent(n);
            } catch (p) {}
          }
        }
        e[6] = g;
      }
      a[0] = null;
    }
    a = a[1];
    b in HG &&
      ((e = HG[b]),
      13 == b
        ? c &&
          ((b = a[e]),
          null != d ? (b || (b = a[e] = {}), (b[c] = d)) : b && delete b[c])
        : (a[e] = d));
  }
  function JG(a) {
    this.H = a;
    this.G = this.F = this.C = this.A = null;
    this.I = this.D = 0;
    this.K = !1;
    this.B = -1;
    this.ca = ++KG;
  }
  JG.prototype.name = u("H");
  function LG(a, b) {
    return "href" == b.toLowerCase()
      ? "#"
      : "img" == a.toLowerCase() && "src" == b.toLowerCase()
        ? "/images/cleardot.gif"
        : "";
  }
  JG.prototype.id = u("ca");
  var KG = 0;
  function MG(a) {
    a.C = a.A;
    a.A = a.C.slice(0, a.B);
    a.B = -1;
  }
  function NG(a) {
    for (var b = (a = a.A) ? a.length : 0, c = 0; c < b; c += 7)
      if (0 == a[c + 0] && "dir" == a[c + 1]) return a[c + 5];
    return null;
  }
  function OG(a, b, c, d, e, f, g, k) {
    var l = a.B;
    if (-1 != l) {
      if (
        a.A[l + 0] == b &&
        a.A[l + 1] == c &&
        a.A[l + 2] == d &&
        a.A[l + 3] == e &&
        a.A[l + 4] == f &&
        a.A[l + 5] == g &&
        a.A[l + 6] == k
      ) {
        a.B += 7;
        return;
      }
      MG(a);
    } else a.A || (a.A = []);
    a.A.push(b);
    a.A.push(c);
    a.A.push(d);
    a.A.push(e);
    a.A.push(f);
    a.A.push(g);
    a.A.push(k);
  }
  function PG(a, b) {
    a.D |= b;
  }
  function QG(a) {
    return a.D & 1024
      ? ((a = NG(a)),
        "rtl" == a ? "\u202c\u200e" : "ltr" == a ? "\u202c\u200f" : "")
      : !1 === a.G ? "" : "</" + a.H + ">";
  }
  function RG(a, b, c, d) {
    for (var e = -1 != a.B ? a.B : a.A ? a.A.length : 0, f = 0; f < e; f += 7)
      if (a.A[f + 0] == b && a.A[f + 1] == c && a.A[f + 2] == d) return !0;
    if (a.F)
      for (f = 0; f < a.F.length; f += 7)
        if (a.F[f + 0] == b && a.F[f + 1] == c && a.F[f + 2] == d) return !0;
    return !1;
  }
  JG.prototype.reset = function(a) {
    if (!this.K && ((this.K = !0), (this.B = -1), null != this.A)) {
      for (var b = 0; b < this.A.length; b += 7)
        if (this.A[b + 6]) {
          var c = this.A.splice(b, 7);
          b -= 7;
          this.F || (this.F = []);
          Array.prototype.push.apply(this.F, c);
        }
      this.I = 0;
      if (a)
        for (b = 0; b < this.A.length; b += 7)
          if (((c = this.A[b + 5]), -1 == this.A[b + 0] && c == a)) {
            this.I = b;
            break;
          }
      0 == this.I
        ? (this.B = 0)
        : (this.C = this.A.splice(this.I, this.A.length));
    }
  };
  function SG(a, b, c, d, e, f) {
    if (6 == b) {
      if (d)
        for (
          e && (d = gc(d)), b = d.split(" "), c = b.length, d = 0;
          d < c;
          d++
        )
          "" != b[d] && TG(a, 7, "class", b[d], "", f);
    } else
      (18 != b && 20 != b && 22 != b && RG(a, b, c)) ||
        OG(a, b, c, null, null, e || null, d, !!f);
  }
  function UG(a, b, c, d, e) {
    switch (b) {
      case 2:
      case 1:
        var f = 8;
        break;
      case 8:
        f = 0;
        d = RF(d);
        break;
      default:
        (f = 0), (d = "sanitization_error_" + b);
    }
    RG(a, f, c) || OG(a, f, c, null, b, null, d, !!e);
  }
  function TG(a, b, c, d, e, f) {
    switch (b) {
      case 5:
        c = "style";
        -1 != a.B && "display" == d && MG(a);
        break;
      case 7:
        c = "class";
    }
    RG(a, b, c, d) || OG(a, b, c, d, null, null, e, !!f);
  }
  function VG(a, b) {
    return b.toUpperCase();
  }
  function WG(a, b) {
    null === a.G ? (a.G = b) : a.G && !b && null != NG(a) && (a.H = "span");
  }
  function XG(a, b, c) {
    if (c[1]) {
      var d = c[1];
      if (d[6]) {
        var e = d[6],
          f = [];
        for (k in e) {
          var g = e[k];
          null != g &&
            f.push(
              encodeURIComponent(k) +
                "=" +
                encodeURIComponent(g)
                  .replace(/%3A/gi, ":")
                  .replace(/%20/g, "+")
                  .replace(/%2C/gi, ",")
                  .replace(/%7C/gi, "|")
            );
        }
        d[6] = f.join("&");
      }
      "http" == d[1] && "80" == d[4] && (d[4] = null);
      "https" == d[1] && "443" == d[4] && (d[4] = null);
      e = d[3];
      /:[0-9]+$/.test(e) &&
        ((f = e.lastIndexOf(":")),
        (d[3] = e.substr(0, f)),
        (d[4] = e.substr(f + 1)));
      e = d[1];
      f = d[2];
      var k = d[3];
      g = d[4];
      var l = d[5],
        m = d[6];
      d = d[7];
      var n = "";
      e && (n += e + ":");
      k && ((n += "//"), f && (n += f + "@"), (n += k), g && (n += ":" + g));
      l && (n += l);
      m && (n += "?" + m);
      d && (n += "#" + d);
      d = n;
    } else d = c[0];
    (c = YG(c[2], d)) || (c = LG(a.H, b));
    return c;
  }
  function ZG(a, b, c) {
    if (a.D & 1024)
      return (a = NG(a)), "rtl" == a ? "\u202b" : "ltr" == a ? "\u202a" : "";
    if (!1 === a.G) return "";
    for (
      var d = "<" + a.H,
        e = null,
        f = "",
        g = null,
        k = null,
        l = "",
        m,
        n = "",
        p = "",
        q = 0 != (a.D & 832) ? "" : null,
        t = "",
        r = a.A,
        v = r ? r.length : 0,
        x = 0;
      x < v;
      x += 7
    ) {
      var z = r[x + 0],
        A = r[x + 1],
        H = r[x + 2],
        B = r[x + 5],
        J = r[x + 3],
        D = r[x + 6];
      if (null != B && null != q && !D)
        switch (z) {
          case -1:
            q += B + ",";
            break;
          case 7:
          case 5:
            q += z + "." + H + ",";
            break;
          case 13:
            q += z + "." + A + "." + H + ",";
            break;
          case 18:
          case 20:
          case 21:
            break;
          default:
            q += z + "." + A + ",";
        }
      switch (z) {
        case 7:
          null === B
            ? null != k && hb(k, H)
            : null != B && (null == k ? (k = [H]) : gb(k, H) || k.push(H));
          break;
        case 4:
          m = !1;
          g = J;
          null == B
            ? (f = null)
            : "" == f
              ? (f = B)
              : ";" == B.charAt(B.length - 1) ? (f = B + f) : (f = B + ";" + f);
          break;
        case 5:
          m = !1;
          null != B &&
            null !== f &&
            ("" != f && ";" != f[f.length - 1] && (f += ";"),
            (f += H + ":" + B));
          break;
        case 8:
          null == e && (e = {});
          null === B
            ? (e[A] = null)
            : B
              ? ((z = r[x + 4]) && (B = gc(B)), (e[A] = [B, null, J]))
              : (e[A] = ["", null, J]);
          break;
        case 18:
          null != B &&
            ("jsl" == A ? ((m = !0), (l += B)) : "jsvs" == A && (n += B));
          break;
        case 20:
          null != B && (p && (p += ","), (p += B));
          break;
        case 22:
          null != B && (t && (t += ";"), (t += B));
          break;
        case 0:
          null != B &&
            ((d += " " + A + "="),
            (B = YG(J, B)),
            (d = (z = r[x + 4])
              ? d + ('"' + EG(B) + '"')
              : d + ('"' + yG(B) + '"')));
          break;
        case 14:
        case 11:
        case 12:
        case 10:
        case 9:
        case 13:
          null == e && (e = {}),
            (J = e[A]),
            null !== J && (J || (J = e[A] = ["", null, null]), IG(J, z, H, B));
      }
    }
    if (null != e)
      for (A in e) (r = XG(a, A, e[A])), (d += " " + A + '="' + yG(r) + '"');
    t && (d += ' jsaction="' + EG(t) + '"');
    p && (d += ' jsinstance="' + yG(p) + '"');
    null != k && 0 < k.length && (d += ' class="' + yG(k.join(" ")) + '"');
    l && !m && (d += ' jsl="' + yG(l) + '"');
    if (null != f) {
      for (; "" != f && ";" == f[f.length - 1]; ) f = f.substr(0, f.length - 1);
      "" != f && ((f = YG(g, f)), (d += ' style="' + yG(f) + '"'));
    }
    l && m && (d += ' jsl="' + yG(l) + '"');
    n && (d += ' jsvs="' + yG(n) + '"');
    null != q &&
      -1 != q.indexOf(".") &&
      (d += ' jsan="' + q.substr(0, q.length - 1) + '"');
    c && (d += ' jstid="' + a.ca + '"');
    return d + (b ? "/>" : ">");
  }
  JG.prototype.apply = function(a) {
    var b = a.nodeName;
    b =
      "input" == b ||
      "INPUT" == b ||
      "option" == b ||
      "OPTION" == b ||
      "select" == b ||
      "SELECT" == b ||
      "textarea" == b ||
      "TEXTAREA" == b;
    this.K = !1;
    a: {
      var c = null == this.A ? 0 : this.A.length;
      var d = this.B == c;
      d ? (this.C = this.A) : -1 != this.B && MG(this);
      if (d) {
        if (b)
          for (d = 0; d < c; d += 7) {
            var e = this.A[d + 1];
            if (("checked" == e || "value" == e) && this.A[d + 5] != a[e]) {
              c = !1;
              break a;
            }
          }
        c = !0;
      } else c = !1;
    }
    if (!c) {
      c = null;
      if (
        null != this.C &&
        ((d = c = {}), 0 != (this.D & 768) && null != this.C)
      ) {
        e = this.C.length;
        for (var f = 0; f < e; f += 7)
          if (null != this.C[f + 5]) {
            var g = this.C[f + 0],
              k = this.C[f + 1],
              l = this.C[f + 2];
            5 == g || 7 == g
              ? (d[k + "." + l] = !0)
              : -1 != g && 18 != g && 20 != g && (d[k] = !0);
          }
      }
      var m = "";
      e = d = "";
      f = null;
      g = !1;
      var n = null;
      a.hasAttribute("class") && (n = a.getAttribute("class").split(" "));
      k = 0 != (this.D & 832) ? "" : null;
      l = "";
      for (var p = this.A, q = p ? p.length : 0, t = 0; t < q; t += 7) {
        var r = p[t + 5],
          v = p[t + 0],
          x = p[t + 1],
          z = p[t + 2],
          A = p[t + 3],
          H = p[t + 6];
        if (null !== r && null != k && !H)
          switch (v) {
            case -1:
              k += r + ",";
              break;
            case 7:
            case 5:
              k += v + "." + z + ",";
              break;
            case 13:
              k += v + "." + x + "." + z + ",";
              break;
            case 18:
            case 20:
              break;
            default:
              k += v + "." + x + ",";
          }
        if (!(t < this.I))
          switch ((null != c &&
            void 0 !== r &&
            (5 == v || 7 == v ? delete c[x + "." + z] : delete c[x]),
          v)) {
            case 7:
              null === r
                ? null != n && hb(n, z)
                : null != r && (null == n ? (n = [z]) : gb(n, z) || n.push(z));
              break;
            case 4:
              null === r
                ? (a.style.cssText = "")
                : void 0 !== r && (a.style.cssText = YG(A, r));
              for (var B in c) 0 == B.lastIndexOf("style.", 0) && delete c[B];
              break;
            case 5:
              try {
                (B = z.replace(/-(\S)/g, VG)),
                  a.style[B] != r && (a.style[B] = r || "");
              } catch (J) {}
              break;
            case 8:
              null == f && (f = {});
              f[x] =
                null === r
                  ? null
                  : r
                    ? [r, null, A]
                    : [a[x] || a.getAttribute(x) || "", null, A];
              break;
            case 18:
              null != r && ("jsl" == x ? (m += r) : "jsvs" == x && (e += r));
              break;
            case 22:
              null === r
                ? a.removeAttribute("jsaction")
                : null != r &&
                  ((v = p[t + 4]) && (r = gc(r)), l && (l += ";"), (l += r));
              break;
            case 20:
              null != r && (d && (d += ","), (d += r));
              break;
            case 0:
              null === r
                ? a.removeAttribute(x)
                : null != r &&
                  ((v = p[t + 4]) && (r = gc(r)),
                  (r = YG(A, r)),
                  (v = a.nodeName),
                  (!(
                    ("CANVAS" != v && "canvas" != v) ||
                    ("width" != x && "height" != x)
                  ) &&
                    r == a.getAttribute(x)) ||
                    a.setAttribute(x, r));
              if (b)
                if ("checked" == x) g = !0;
                else if (
                  ((v = x),
                  (v = v.toLowerCase()),
                  "value" == v ||
                    "checked" == v ||
                    "selected" == v ||
                    "selectedindex" == v)
                )
                  (v = tG.hasOwnProperty(x) ? tG[x] : x),
                    a[v] != r && (a[v] = r);
              break;
            case 14:
            case 11:
            case 12:
            case 10:
            case 9:
            case 13:
              null == f && (f = {}),
                (A = f[x]),
                null !== A &&
                  (A ||
                    (A = f[x] = [a[x] || a.getAttribute(x) || "", null, null]),
                  IG(A, v, z, r));
          }
      }
      if (null != c)
        for (B in c)
          if (0 == B.lastIndexOf("class.", 0)) hb(n, B.substr(6));
          else if (0 == B.lastIndexOf("style.", 0))
            try {
              a.style[B.substr(6).replace(/-(\S)/g, VG)] = "";
            } catch (J) {}
          else 0 != (this.D & 512) && "data-rtid" != B && a.removeAttribute(B);
      null != n && 0 < n.length
        ? a.setAttribute("class", yG(n.join(" ")))
        : a.hasAttribute("class") && a.setAttribute("class", "");
      if (null != m && "" != m && a.hasAttribute("jsl")) {
        B = a.getAttribute("jsl");
        b = m.charAt(0);
        for (c = 0; ; ) {
          c = B.indexOf(b, c);
          if (-1 == c) {
            m = B + m;
            break;
          }
          if (0 == m.lastIndexOf(B.substr(c), 0)) {
            m = B.substr(0, c) + m;
            break;
          }
          c += 1;
        }
        a.setAttribute("jsl", m);
      }
      if (null != f)
        for (x in f)
          (A = f[x]),
            null === A
              ? (a.removeAttribute(x), (a[x] = null))
              : ((B = XG(this, x, A)), (a[x] = B), a.setAttribute(x, B));
      l && a.setAttribute("jsaction", l);
      d && a.setAttribute("jsinstance", d);
      e && a.setAttribute("jsvs", e);
      null != k &&
        (-1 != k.indexOf(".")
          ? a.setAttribute("jsan", k.substr(0, k.length - 1))
          : a.removeAttribute("jsan"));
      g && (a.checked = !!a.getAttribute("checked"));
    }
  };
  function YG(a, b) {
    switch (a) {
      case null:
        return b;
      case 2:
        return PF(b);
      case 1:
        return (
          (a = di(b).Xa()),
          "about:invalid#zClosurez" === a ? "about:invalid#zjslayoutz" : a
        );
      case 8:
        return RF(b);
      default:
        return "sanitization_error_" + a;
    }
  }
  function $G(a) {
    this.data = a || {};
  }
  I($G, IF);
  function aH(a) {
    this.data = a || {};
  }
  I(aH, IF);
  function bH(a, b) {
    this.A = "";
    this.B = b || {};
    if ("string" === typeof a) this.A = a;
    else {
      b = a.B;
      this.A = a.A;
      for (var c in b) null == this.B[c] && (this.B[c] = b[c]);
    }
  }
  function cH(a) {
    return a.A;
  }
  function dH(a) {
    if (!a) return eH();
    for (a = a.parentNode; ej(a); a = a.parentNode) {
      var b = a.getAttribute("dir");
      if (b && ((b = b.toLowerCase()), "ltr" == b || "rtl" == b)) return b;
    }
    return eH();
  }
  function fH(a) {
    for (var b = 0; b < arguments.length; ++b) if (!arguments[b]) return !1;
    return !0;
  }
  function gH(a, b) {
    return a > b;
  }
  function hH(a, b) {
    return a < b;
  }
  function iH(a, b) {
    return a >= b;
  }
  function jH(a, b) {
    return a <= b;
  }
  function kH(a) {
    return "string" == typeof a
      ? "'" + a.replace(/'/g, "\\'") + "'"
      : String(a);
  }
  function lH(a) {
    return (
      null != a &&
      "object" == typeof a &&
      "number" == typeof a.length &&
      "undefined" != typeof a.propertyIsEnumerable &&
      !a.propertyIsEnumerable("length")
    );
  }
  function mH(a, b, c) {
    for (var d = 2; d < arguments.length; ++d) {
      if (null == a || null == arguments[d]) return b;
      var e = arguments[d];
      if ("number" == typeof e && 0 > e)
        if (null == a.length) a = a[-e];
        else {
          e = -e - 1;
          var f = a[e];
          null == f || (Na(f) && !lH(f))
            ? ((f = a[a.length - 1]),
              (e = lH(f) || !Na(f) ? null : f[e + 1] || null))
            : (e = f);
          a = e;
        }
      else a = a[e];
    }
    return null == a ? b : a;
  }
  function nH(a, b, c) {
    c = ~~(c || 0);
    0 == c && (c = 1);
    var d = [];
    if (0 < c) for (a = ~~a; a < b; a += c) d.push(a);
    else for (a = ~~a; a > b; a += c) d.push(a);
    return d;
  }
  function eH() {
    var a = hG();
    return JF(a, "is_rtl", void 0) ? "rtl" : "ltr";
  }
  function oH(a, b, c) {
    switch (Lh(a, b)) {
      case 1:
        return "ltr";
      case -1:
        return "rtl";
      default:
        return c;
    }
  }
  function pH(a, b, c) {
    switch (Lh(a, b)) {
      case 1:
        return !1;
      case -1:
        return !0;
      default:
        return c;
    }
  }
  function qH(a, b, c) {
    return rH(a, b, "rtl" == c) ? "rtl" : "ltr";
  }
  function rH(a, b, c) {
    return c ? !Hh.test(Dh(a, b)) : Ih.test(Dh(a, b));
  }
  var sH = /['"\(]/,
    tH = ["border-color", "border-style", "border-width", "margin", "padding"],
    uH = /left/g,
    vH = /right/g,
    wH = /\s+/;
  function xH(a, b) {
    if (sH.test(b)) return b;
    b = 0 <= b.indexOf("left") ? b.replace(uH, "right") : b.replace(vH, "left");
    gb(tH, a) &&
      ((a = b.split(wH)),
      4 <= a.length && (b = [a[0], a[3], a[2], a[1]].join(" ")));
    return b;
  }
  function yH(a) {
    if (null != a) {
      var b = a.ordinal;
      null == b && (b = a.Ml);
      if (null != b && "function" == typeof b) return String(b.call(a));
    }
    return "" + a;
  }
  function zH(a) {
    if (null == a) return 0;
    var b = a.ordinal;
    null == b && (b = a.Ml);
    return null != b && "function" == typeof b
      ? b.call(a)
      : 0 <= a ? Math.floor(a) : Math.ceil(a);
  }
  function AH(a) {
    try {
      return void 0 !== a.call(null);
    } catch (b) {
      return !1;
    }
  }
  function BH(a) {
    try {
      var b = a.call(null);
      return lH(b) ? b.length : void 0 === b ? 0 : 1;
    } catch (c) {
      return 0;
    }
  }
  function CH(a, b) {
    return null == a ? null : new bH(a, b);
  }
  function DH(a) {
    if (null != a.data.original_value) {
      var b = new Es(KF(a, "original_value"));
      "original_value" in a.data && delete a.data.original_value;
      b.B && (a.data.protocol = b.B);
      b.F && (a.data.host = b.$b());
      null != b.H
        ? (a.data.port = b.H)
        : b.B &&
          ("http" == b.B
            ? (a.data.port = 80)
            : "https" == b.B && (a.data.port = 443));
      b.C && (a.data.path = b.C);
      b.D && (a.data.hash = b.D);
      for (var c = b.A.ob(), d = 0; d < c.length; ++d) {
        var e = c[d],
          f = new $G(LF(a));
        f.data.key = e;
        e = b.A.Ha(e)[0];
        f.data.value = e;
      }
    }
  }
  function EH(a, b) {
    if ("string" == typeof a) {
      var c = new aH();
      c.data.original_value = a;
    } else c = new aH(a);
    DH(c);
    if (b)
      for (a = 0; a < b.length; ++a) {
        var d = b[a],
          e = null != d.key ? d.key : d.key,
          f = null != d.value ? d.value : d.value;
        d = !1;
        for (var g = 0; g < NF(c); ++g)
          if (KF(new $G(MF(c, g)), "key") == e) {
            new $G(MF(c, g)).data.value = f;
            d = !0;
            break;
          }
        d || ((d = new $G(LF(c))), (d.data.key = e), (d.data.value = f));
      }
    return c.data;
  }
  function FH(a) {
    a = new aH(a);
    DH(a);
    var b = null != a.data.protocol ? KF(a, "protocol") : null,
      c = null != a.data.host ? KF(a, "host") : null,
      d =
        null != a.data.port &&
        (null == a.data.protocol ||
          ("http" == KF(a, "protocol") && 80 != JF(a, "port", 0)) ||
          ("https" == KF(a, "protocol") && 443 != JF(a, "port", 0)))
          ? JF(a, "port", 0)
          : null,
      e = null != a.data.path ? KF(a, "path") : null,
      f = null != a.data.hash ? KF(a, "hash") : null,
      g = new Es(null, void 0);
    b && Fs(g, b);
    c && (g.F = c);
    d && Gs(g, d);
    e && (g.C = e);
    f && (g.D = f);
    for (b = 0; b < NF(a); ++b)
      (c = new $G(MF(a, b))), g.A.set(KF(c, "key"), KF(c, "value"));
    return g.toString();
  }
  function GH(a, b) {
    a = new aH(a);
    DH(a);
    for (var c = 0; c < NF(a); ++c) {
      var d = new $G(MF(a, c));
      if (KF(d, "key") == b) return KF(d, "value");
    }
    return "";
  }
  function HH(a, b) {
    a = new aH(a);
    DH(a);
    for (var c = 0; c < NF(a); ++c)
      if (KF(new $G(MF(a, c)), "key") == b) return !0;
    return !1;
  }
  var IH = /\s*;\s*/,
    JH = /&/g,
    KH = /^[$a-z_]*$/i,
    LH = /^[\$_a-z][\$_0-9a-z]*$/i,
    MH = /^\s*$/,
    NH = /^((de|en)codeURI(Component)?|is(Finite|NaN)|parse(Float|Int)|document|false|function|jslayout|null|this|true|undefined|window|Array|Boolean|Date|Error|JSON|Math|Number|Object|RegExp|String|__event)$/,
    OH = /[\$_a-z][\$_0-9a-z]*|'(\\\\|\\'|\\?[^'\\])*'|"(\\\\|\\"|\\?[^"\\])*"|[0-9]*\.?[0-9]+([e][-+]?[0-9]+)?|0x[0-9a-f]+|\-|\+|\*|\/|\%|\=|\<|\>|\&\&?|\|\|?|\!|\^|\~|\(|\)|\{|\}|\[|\]|\,|\;|\.|\?|\:|\@|#[0-9]+|[\s]+/gi,
    PH = {},
    QH = {};
  function RH(a) {
    var b = a.match(OH);
    null == b && (b = []);
    if (b.join("").length != a.length) {
      for (
        var c = 0, d = 0;
        d < b.length && a.substr(c, b[d].length) == b[d];
        d++
      )
        c += b[d].length;
      throw Error("Parsing error at position " + c + " of " + a);
    }
    return b;
  }
  function SH(a, b, c) {
    for (var d = !1, e = []; b < c; b++) {
      var f = a[b];
      if ("{" == f) (d = !0), e.push("}");
      else if ("." == f || "new" == f || ("," == f && "}" == e[e.length - 1]))
        d = !0;
      else if (MH.test(f)) a[b] = " ";
      else {
        if (!d && LH.test(f) && !NH.test(f)) {
          if (
            ((a[b] = (null != aG[f] ? "g" : "v") + "." + f),
            "has" == f || "size" == f)
          )
            b = TH(a, b + 1);
        } else if ("(" == f) e.push(")");
        else if ("[" == f) e.push("]");
        else if (")" == f || "]" == f || "}" == f) {
          if (0 == e.length) throw Error('Unexpected "' + f + '".');
          d = e.pop();
          if (f != d)
            throw Error('Expected "' + d + '" but found "' + f + '".');
        }
        d = !1;
      }
    }
    if (0 != e.length) throw Error("Missing bracket(s): " + e.join());
  }
  function TH(a, b) {
    for (; "(" != a[b] && b < a.length; ) b++;
    a[b] = "(function(){return ";
    if (b == a.length) throw Error('"(" missing for has() or size().');
    b++;
    for (var c = b, d = 0, e = !0; b < a.length; ) {
      var f = a[b];
      if ("(" == f) d++;
      else if (")" == f) {
        if (0 == d) break;
        d--;
      } else
        "" != f.trim() &&
          '"' != f.charAt(0) &&
          "'" != f.charAt(0) &&
          "+" != f &&
          (e = !1);
      b++;
    }
    if (b == a.length) throw Error('matching ")" missing for has() or size().');
    a[b] = "})";
    d = a
      .slice(c, b)
      .join("")
      .trim();
    if (e)
      for (
        e = "" + eval(d),
          e = RH(e),
          SH(e, 0, e.length),
          a[c] = e.join(""),
          c += 1;
        c < b;
        c++
      )
        a[c] = "";
    else SH(a, c, b);
    return b;
  }
  function UH(a, b) {
    for (var c = a.length; b < c; b++) {
      var d = a[b];
      if (":" == d) return b;
      if ("{" == d || "?" == d || ";" == d) break;
    }
    return -1;
  }
  function VH(a, b) {
    for (var c = a.length; b < c; b++) if (";" == a[b]) return b;
    return c;
  }
  function WH(a) {
    a = RH(a);
    return XH(a);
  }
  function YH(a) {
    return function(b, c) {
      b[a] = c;
    };
  }
  function XH(a, b) {
    SH(a, 0, a.length);
    a = a.join("");
    b && (a = 'v["' + b + '"] = ' + a);
    b = QH[a];
    b || ((b = new Function("v", "g", "return " + a)), (QH[a] = b));
    return b;
  }
  function ZH(a) {
    return a;
  }
  var $H = [];
  function aI(a) {
    $H.length = 0;
    for (var b = 5; b < a.length; ++b) {
      var c = a[b];
      JH.test(c) ? $H.push(c.replace(JH, "&&")) : $H.push(c);
    }
    return $H.join("&");
  }
  function bI(a) {
    var b = [];
    for (c in PH) delete PH[c];
    a = RH(a);
    var c = 0;
    for (var d = a.length; c < d; ) {
      for (var e = [null, null, null, null, null], f = "", g = ""; c < d; c++) {
        g = a[c];
        if ("?" == g || ":" == g) {
          "" != f && e.push(f);
          break;
        }
        MH.test(g) ||
          ("." == g
            ? ("" != f && e.push(f), (f = ""))
            : (f =
                '"' == g.charAt(0) || "'" == g.charAt(0)
                  ? f + eval(g)
                  : f + g));
      }
      if (c >= d) break;
      f = VH(a, c + 1);
      var k = aI(e),
        l = PH[k],
        m = "undefined" == typeof l;
      m && ((l = PH[k] = b.length), b.push(e));
      e = b[l];
      e[1] = OF(e);
      c = XH(a.slice(c + 1, f));
      ":" == g ? (e[4] = c) : "?" == g && (e[3] = c);
      if (m) {
        g = e[5];
        if ("class" == g || "className" == g)
          if (6 == e.length) var n = 6;
          else e.splice(5, 1), (n = 7);
        else
          "style" == g
            ? 6 == e.length ? (n = 4) : (e.splice(5, 1), (n = 5))
            : g in mG
              ? 6 == e.length
                ? (n = 8)
                : "hash" == e[6]
                  ? ((n = 14), (e.length = 6))
                  : "host" == e[6]
                    ? ((n = 11), (e.length = 6))
                    : "path" == e[6]
                      ? ((n = 12), (e.length = 6))
                      : "param" == e[6] && 8 <= e.length
                        ? ((n = 13), e.splice(6, 1))
                        : "port" == e[6]
                          ? ((n = 10), (e.length = 6))
                          : "protocol" == e[6]
                            ? ((n = 9), (e.length = 6))
                            : b.splice(l, 1)
              : (n = 0);
        e[0] = n;
      }
      c = f + 1;
    }
    return b;
  }
  function cI(a, b) {
    var c = YH(a);
    return function(a) {
      var d = b(a);
      c(a, d);
      return d;
    };
  }
  function dI() {
    this.A = {};
  }
  dI.prototype.add = function(a, b) {
    this.A[a] = b;
  };
  var eI = 0,
    fI = { 0: [] },
    gI = {};
  function hI(a, b) {
    var c = String(++eI);
    gI[b] = c;
    fI[c] = a;
    return c;
  }
  function iI(a, b) {
    a.setAttribute("jstcache", b);
    a.__jstcache = fI[b];
  }
  var jI = [];
  function kI(a) {
    a.length = 0;
    jI.push(a);
  }
  for (
    var lI = [
        ["jscase", WH, "$sc"],
        ["jscasedefault", ZH, "$sd"],
        ["jsl", null, null],
        [
          "jsglobals",
          function(a) {
            var b = [];
            a = a.split(IH);
            for (var c = 0, d = a ? a.length : 0; c < d; ++c) {
              var e = Xb(a[c]);
              if (e) {
                var f = e.indexOf(":");
                if (-1 != f) {
                  var g = Xb(e.substring(0, f));
                  e = Xb(e.substring(f + 1));
                  f = e.indexOf(" ");
                  -1 != f && (e = e.substring(f + 1));
                  b.push([YH(g), e]);
                }
              }
            }
            return b;
          },
          "$g",
          !0
        ],
        [
          "jsfor",
          function(a) {
            var b = [];
            a = RH(a);
            for (var c = 0, d = a.length; c < d; ) {
              var e = [],
                f = UH(a, c);
              if (-1 == f) {
                if (MH.test(a.slice(c, d).join(""))) break;
                f = c - 1;
              } else
                for (var g = c; g < f; ) {
                  var k = Za(a, ",", g);
                  if (-1 == k || k > f) k = f;
                  e.push(YH(Xb(a.slice(g, k).join(""))));
                  g = k + 1;
                }
              0 == e.length && e.push(YH("$this"));
              1 == e.length && e.push(YH("$index"));
              2 == e.length && e.push(YH("$count"));
              if (3 != e.length)
                throw Error("Max 3 vars for jsfor; got " + e.length);
              c = VH(a, c);
              e.push(XH(a.slice(f + 1, c)));
              b.push(e);
              c += 1;
            }
            return b;
          },
          "for",
          !0
        ],
        ["jskey", WH, "$k"],
        ["jsdisplay", WH, "display"],
        ["jsmatch", null, null],
        ["jsif", WH, "display"],
        [null, WH, "$if"],
        [
          "jsvars",
          function(a) {
            var b = [];
            a = RH(a);
            for (var c = 0, d = a.length; c < d; ) {
              var e = UH(a, c);
              if (-1 == e) break;
              var f = VH(a, e + 1);
              c = Xb(a.slice(c, e).join(""));
              e = XH(a.slice(e + 1, f), c);
              b.push(e);
              c = f + 1;
            }
            return b;
          },
          "var",
          !0
        ],
        [
          null,
          function(a) {
            return [YH(a)];
          },
          "$vs"
        ],
        ["jsattrs", bI, "_a", !0],
        [null, bI, "$a", !0],
        [
          null,
          function(a) {
            var b = a.indexOf(":");
            return [a.substr(0, b), a.substr(b + 1)];
          },
          "$ua"
        ],
        [
          null,
          function(a) {
            var b = a.indexOf(":");
            return [a.substr(0, b), WH(a.substr(b + 1))];
          },
          "$uae"
        ],
        [
          null,
          function(a) {
            var b = [];
            a = RH(a);
            for (var c = 0, d = a.length; c < d; ) {
              var e = UH(a, c);
              if (-1 == e) break;
              var f = VH(a, e + 1);
              c = Xb(a.slice(c, e).join(""));
              e = XH(a.slice(e + 1, f), c);
              b.push([c, e]);
              c = f + 1;
            }
            return b;
          },
          "$ia",
          !0
        ],
        [
          null,
          function(a) {
            var b = [];
            a = RH(a);
            for (var c = 0, d = a.length; c < d; ) {
              var e = UH(a, c);
              if (-1 == e) break;
              var f = VH(a, e + 1);
              c = Xb(a.slice(c, e).join(""));
              e = XH(a.slice(e + 1, f), c);
              b.push([c, YH(c), e]);
              c = f + 1;
            }
            return b;
          },
          "$ic",
          !0
        ],
        [null, ZH, "$rj"],
        [
          "jseval",
          function(a) {
            var b = [];
            a = RH(a);
            for (var c = 0, d = a.length; c < d; ) {
              var e = VH(a, c);
              b.push(XH(a.slice(c, e)));
              c = e + 1;
            }
            return b;
          },
          "$e",
          !0
        ],
        ["jsskip", WH, "$sk"],
        ["jsswitch", WH, "$s"],
        [
          "jscontent",
          function(a) {
            var b = a.indexOf(":"),
              c = null;
            if (-1 != b) {
              var d = Xb(a.substr(0, b));
              KH.test(d) &&
                ((c =
                  "html_snippet" == d
                    ? 1
                    : "raw" == d ? 2 : "safe" == d ? 7 : null),
                (a = Xb(a.substr(b + 1))));
            }
            return [c, !1, WH(a)];
          },
          "$c"
        ],
        ["transclude", ZH, "$u"],
        [null, WH, "$ue"],
        [null, null, "$up"]
      ],
      mI = {},
      nI = 0;
    nI < lI.length;
    ++nI
  ) {
    var oI = lI[nI];
    oI[2] && (mI[oI[2]] = [oI[1], oI[3]]);
  }
  mI.$t = [ZH, !1];
  mI.$x = [ZH, !1];
  mI.$u = [ZH, !1];
  function pI(a, b) {
    if (!b || !b.getAttribute) return null;
    qI(a, b, null);
    var c = b.__rt;
    return c && c.length ? c[c.length - 1] : pI(a, b.parentNode);
  }
  function rI(a) {
    var b = fI[gI[a + " 0"] || "0"];
    "$t" != b[0] && (b = ["$t", a].concat(b));
    return b;
  }
  var sI = /^\$x (\d+);?/;
  function tI(a, b) {
    a = gI[b + " " + a];
    return fI[a] ? a : null;
  }
  function uI(a, b) {
    a = tI(a, b);
    return null != a ? fI[a] : null;
  }
  function vI(a, b, c, d, e) {
    if (d == e) return kI(b), "0";
    "$t" == b[0]
      ? (a = b[1] + " 0")
      : ((a += ":"),
        (a =
          0 == d && e == c.length
            ? a + c.join(":")
            : a + c.slice(d, e).join(":")));
    (c = gI[a]) ? kI(b) : (c = hI(b, a));
    return c;
  }
  var wI = /\$t ([^;]*)/g;
  function xI(a) {
    var b = a.__rt;
    b || (b = a.__rt = []);
    return b;
  }
  function qI(a, b, c) {
    if (!b.__jstcache) {
      b.hasAttribute("jstid") &&
        (b.getAttribute("jstid"), b.removeAttribute("jstid"));
      var d = b.getAttribute("jstcache");
      if (null != d && fI[d]) b.__jstcache = fI[d];
      else {
        d = b.getAttribute("jsl");
        wI.lastIndex = 0;
        for (var e; (e = wI.exec(d)); ) xI(b).push(e[1]);
        null == c && (c = String(pI(a, b.parentNode)));
        if ((a = sI.exec(d)))
          (e = a[1]),
            (d = tI(e, c)),
            null == d &&
              ((a = jI.length ? jI.pop() : []),
              a.push("$x"),
              a.push(e),
              (e = c + ":" + a.join(":")),
              (d = gI[e]) && fI[d] ? kI(a) : (d = hI(a, e))),
            iI(b, d),
            b.removeAttribute("jsl");
        else {
          a = jI.length ? jI.pop() : [];
          d = 0;
          for (e = lI.length; d < e; ++d) {
            var f = lI[d],
              g = f[0];
            if (g) {
              var k = b.getAttribute(g);
              if (k) {
                f = f[2];
                if ("jsl" == g) {
                  f = k;
                  k = a;
                  for (var l = RH(f), m = l.length, n = 0, p = ""; n < m; ) {
                    var q = VH(l, n);
                    MH.test(l[n]) && n++;
                    if (!(n >= q)) {
                      var t = l[n++];
                      if (!LH.test(t))
                        throw Error(
                          'Cmd name expected; got "' + t + '" in "' + f + '".'
                        );
                      if (n < q && !MH.test(l[n]))
                        throw Error('" " expected between cmd and param.');
                      n = l.slice(n + 1, q).join("");
                      "$a" == t
                        ? (p += n + ";")
                        : (p && (k.push("$a"), k.push(p), (p = "")),
                          mI[t] && (k.push(t), k.push(n)));
                    }
                    n = q + 1;
                  }
                  p && (k.push("$a"), k.push(p));
                } else if ("jsmatch" == g)
                  for (f = a, k = RH(k), l = k.length, q = 0; q < l; )
                    (m = UH(k, q)),
                      (p = VH(k, q)),
                      (q = k.slice(q, p).join("")),
                      MH.test(q) ||
                        (-1 !== m
                          ? (f.push("display"),
                            f.push(k.slice(m + 1, p).join("")),
                            f.push("var"))
                          : f.push("display"),
                        f.push(q)),
                      (q = p + 1);
                else a.push(f), a.push(k);
                b.removeAttribute(g);
              }
            }
          }
          if (0 == a.length) iI(b, "0");
          else {
            if ("$u" == a[0] || "$t" == a[0]) c = a[1];
            e = c + ":" + a.join(":");
            d = gI[e];
            if (!d || !fI[d])
              a: {
                d = a;
                e = "0";
                g = jI.length ? jI.pop() : [];
                k = f = 0;
                for (l = d.length; k < l; k += 2) {
                  m = d[k];
                  q = d[k + 1];
                  p = mI[m];
                  t = p[1];
                  p = (0, p[0])(q);
                  "$t" == m && q && (c = q);
                  if ("$k" == m)
                    "for" == g[g.length - 2] &&
                      ((g[g.length - 2] = "$fk"), g[g.length - 2 + 1].push(p));
                  else if ("$t" == m && "$x" == d[k + 2]) {
                    p = tI("0", c);
                    if (null != p) {
                      0 == f && (e = p);
                      kI(g);
                      d = e;
                      break a;
                    }
                    g.push("$t");
                    g.push(q);
                  } else if (t)
                    for (q = 0, t = p.length; q < t; ++q)
                      if (((n = p[q]), "_a" == m)) {
                        var r = n[0],
                          v = n[5],
                          x = v.charAt(0);
                        "$" == x
                          ? (g.push("var"), g.push(cI(n[5], n[4])))
                          : "@" == x
                            ? (g.push("$a"), (n[5] = v.substr(1)), g.push(n))
                            : 6 == r ||
                              7 == r ||
                              4 == r ||
                              5 == r ||
                              "jsaction" == v ||
                              "jsnamespace" == v ||
                              v in mG
                              ? (g.push("$a"), g.push(n))
                              : (tG.hasOwnProperty(v) && (n[5] = tG[v]),
                                6 == n.length && (g.push("$a"), g.push(n)));
                      } else g.push(m), g.push(n);
                  else g.push(m), g.push(p);
                  if ("$u" == m || "$ue" == m || "$up" == m || "$x" == m)
                    (m = k + 2),
                      (p = vI(c, g, d, f, m)),
                      0 == f && (e = p),
                      (g = []),
                      (f = m);
                }
                p = vI(c, g, d, f, d.length);
                0 == f && (e = p);
                d = e;
              }
            iI(b, d);
          }
          kI(a);
        }
      }
    }
  }
  function yI(a) {
    return function() {
      return a;
    };
  }
  function zI() {
    this.error = this.A = null;
    this.B = !1;
    this.F = this.ra = this.D = this.C = null;
  }
  function AI(a, b) {
    this.B = a;
    this.A = b;
  }
  AI.prototype.get = function(a) {
    return this.B.A[this.A[a]] || null;
  };
  function BI(a) {
    var b = Ga("google.cd");
    b && a(b);
  }
  function CI(a, b) {
    BI(function(c) {
      c.c(a, null, void 0, void 0, b);
    });
  }
  function DI(a) {
    a = a.split("$");
    this.B = a[0];
    this.A = a[1] || null;
  }
  function EI(a, b, c) {
    var d = b.call(c, a.B);
    F(d) || null == a.A || (d = b.call(c, a.A));
    return d;
  }
  function FI() {
    this.B = new GI();
    this.A = {};
    this.D = {};
    this.G = {};
    this.F = {};
    this.C = {};
  }
  function HI(a, b) {
    return !!EI(
      new DI(b),
      function(a) {
        return this.A[a];
      },
      a
    );
  }
  FI.prototype.Ya = function() {
    for (var a in this.A) if (this.A.hasOwnProperty(a)) return !1;
    return !0;
  };
  function II(a, b, c, d) {
    b = EI(
      new DI(b),
      function(a) {
        return a in this.A ? a : void 0;
      },
      a
    );
    var e = a.D[b],
      f = a.G[b],
      g = a.F[b],
      k = a.C[b];
    try {
      var l = new e();
      c.A = l;
      l.Oh = c;
      l.xo = b;
      c.C = a;
      var m = f ? new f(d) : null;
      c.D = m;
      var n = g ? new g(l) : null;
      c.ra = n;
      k(l, m, n);
      c.B = !0;
      return l;
    } catch (p) {
      c.A = null;
      c.error = p;
      CI(b, p);
      try {
        a.B.A(p);
      } catch (q) {}
      return null;
    }
  }
  function GI() {
    this.A = Ha;
  }
  function JI(a, b) {
    this.B = F(a) ? a : document;
    this.G = null;
    this.H = {};
    this.C = [];
    this.F = b || new dI();
    this.K = this.B
      ? bb(this.B.getElementsByTagName("style"), function(a) {
          return a.innerHTML;
        }).join()
      : "";
    this.A = {};
  }
  JI.prototype.document = u("B");
  function KI(a) {
    var b = a.B.createElement("STYLE");
    a.B.head ? a.B.head.appendChild(b) : a.B.body.appendChild(b);
    return b;
  }
  function LI(a, b, c) {
    JI.call(this, a, c);
    this.D = b || new FI();
    this.I = [];
  }
  I(LI, JI);
  var MI = [];
  function NI(a, b) {
    if ("number" == typeof a[3]) {
      var c = a[3];
      a[3] = b[c];
      a.A = c;
    } else "undefined" == typeof a[3] && ((a[3] = MI), (a.A = -1));
    "number" != typeof a[1] && (a[1] = 0);
    if ((a = a[4]) && "string" != typeof a)
      for (c = 0; c < a.length; ++c)
        a[c] && "string" != typeof a[c] && NI(a[c], b);
  }
  var OI = ["unresolved", null];
  function PI(a) {
    this.element = a;
    this.C = this.F = this.B = this.A = this.next = null;
    this.D = !1;
  }
  function QI() {
    this.B = null;
    this.D = String;
    this.C = "";
    this.A = null;
  }
  function RI(a, b, c, d, e) {
    this.B = a;
    this.F = b;
    this.L = this.I = this.H = 0;
    this.N = "";
    this.J = [];
    this.M = !1;
    this.U = c;
    this.A = d;
    this.K = 0;
    this.G = this.C = null;
    this.D = e;
    this.O = null;
  }
  function SI(a, b) {
    return a == b || (null != a.G && SI(a.G, b))
      ? !0
      : 2 == a.K && null != a.C && null != a.C[0] && SI(a.C[0], b);
  }
  function TI(a, b, c) {
    if (a.B == OI && a.D == b) return a;
    if (null != a.J && 0 < a.J.length && "$t" == a.B[a.H]) {
      if (a.B[a.H + 1] == b) return a;
      c && c.push(a.B[a.H + 1]);
    }
    if (null != a.G) {
      var d = TI(a.G, b, c);
      if (d) return d;
    }
    return 2 == a.K && null != a.C && null != a.C[0] ? TI(a.C[0], b, c) : null;
  }
  function UI(a) {
    var b = a.O;
    if (null != b) {
      var c = b["action:load"];
      null != c && (c.call(a.U.element), (b["action:load"] = null));
      c = b["action:create"];
      null != c && (c.call(a.U.element), (b["action:create"] = null));
    }
    null != a.G && UI(a.G);
    2 == a.K && null != a.C && null != a.C[0] && UI(a.C[0]);
  }
  function VI(a) {
    this.B = a;
    this.G = a.document();
    ++gG;
    this.F = this.D = this.A = null;
    this.C = !1;
  }
  var WI = [];
  function XI(a, b, c) {
    if (null == b || null == b.Ag) return !1;
    b = c.getAttribute("jssc");
    if (!b) return !1;
    c.removeAttribute("jssc");
    c = b.split(" ");
    for (var d = 0; d < c.length; d++) {
      b = c[d].split(":");
      if (2 > b.length) return !0;
      var e = b[1];
      if ((b = a.A[b[0]]) && b.Ag != e) return !0;
    }
    return !1;
  }
  function YI(a, b, c) {
    if (a.D == b) b = null;
    else if (a.D == c) return null == b;
    if (null != a.G) return YI(a.G, b, c);
    if (null != a.C)
      for (var d = 0; d < a.C.length; d++) {
        var e = a.C[d];
        if (null != e) {
          if (e.U.element != a.U.element) break;
          e = YI(e, b, c);
          if (null != e) return e;
        }
      }
    return null;
  }
  function ZI(a, b) {
    if (b.U.element && !b.U.element.__cdn) $I(a, b);
    else if (aJ(b)) {
      var c = b.D;
      if (b.U.element) {
        var d = b.U.element;
        if (b.M) {
          var e = b.U.A;
          null != e && e.reset(c || void 0);
        }
        c = b.J;
        e = !!b.A.A.Ea;
        for (var f = c.length, g = 1 == b.K, k = b.H, l = 0; l < f; ++l) {
          var m = c[l],
            n = b.B[k],
            p = bJ[n];
          if (null != m)
            if (null == m.B) p.method.call(a, b, m, k);
            else {
              var q = jG(b.A, m.B, d),
                t = m.D(q);
              if (0 != p.na) {
                if (
                  (p.method.call(a, b, m, k, q, m.C != t),
                  (m.C = t),
                  (("display" == n || "$if" == n) && !q) || ("$sk" == n && q))
                ) {
                  g = !1;
                  break;
                }
              } else t != m.C && ((m.C = t), p.method.call(a, b, m, k, q));
            }
          k += 2;
        }
        g && (cJ(a, b.U, b), dJ(a, b));
        b.A.A.Ea = e;
      } else dJ(a, b);
    }
  }
  function dJ(a, b) {
    if (1 == b.K && ((b = b.C), null != b))
      for (var c = 0; c < b.length; ++c) {
        var d = b[c];
        null != d && ZI(a, d);
      }
  }
  function eJ(a, b) {
    var c = a.__cdn;
    (null != c && SI(c, b)) || (a.__cdn = b);
  }
  function $I(a, b) {
    var c = b.U.element;
    if (!aJ(b)) return !1;
    var d = b.D;
    c.__vs && (c.__vs[0] = 1);
    eJ(c, b);
    c = !!b.A.A.Ea;
    if (!b.B.length)
      return (b.C = []), (b.K = 1), fJ(a, b, d), (b.A.A.Ea = c), !0;
    b.M = !0;
    gJ(a, b);
    b.A.A.Ea = c;
    return !0;
  }
  function fJ(a, b, c) {
    for (var d = b.A, e = bj(b.U.element); e; e = dj(e)) {
      var f = new RI(hJ(a, e, c), null, new PI(e), d, c);
      $I(a, f);
      e = f.U.next || f.U.element;
      0 == f.J.length && e.__cdn ? null != f.C && lb(b.C, f.C) : b.C.push(f);
    }
  }
  function iJ(a, b, c) {
    var d = b.A,
      e = b.F[4];
    if (e)
      if ("string" == typeof e) a.A += e;
      else
        for (var f = !!d.A.Ea, g = 0; g < e.length; ++g) {
          var k = e[g];
          if ("string" == typeof k) a.A += k;
          else {
            k = new RI(k[3], k, new PI(null), d, c);
            var l = a,
              m = k;
            if (0 == m.B.length) {
              var n = m.D,
                p = m.U;
              m.C = [];
              m.K = 1;
              jJ(l, m);
              cJ(l, p, m);
              if (0 != (p.A.D & 2048)) {
                var q = m.A.A.ab;
                m.A.A.ab = !1;
                iJ(l, m, n);
                m.A.A.ab = !1 !== q;
              } else iJ(l, m, n);
              kJ(l, p, m);
            } else (m.M = !0), gJ(l, m);
            0 != k.J.length ? b.C.push(k) : null != k.C && lb(b.C, k.C);
            d.A.Ea = f;
          }
        }
  }
  function lJ(a, b, c) {
    var d = b.U;
    d.D = !0;
    !1 === b.A.A.ab
      ? (cJ(a, d, b), kJ(a, d, b))
      : ((d = a.C), (a.C = !0), gJ(a, b, c), (a.C = d));
  }
  function gJ(a, b, c) {
    var d = b.U,
      e = b.D,
      f = b.B,
      g = c || b.H;
    if (0 == g)
      if ("$t" == f[0] && "$x" == f[2]) {
        var k = f[3];
        c = f[1];
        k = uI(k, c);
        if (null != k) {
          b.B = k;
          b.D = c;
          gJ(a, b);
          return;
        }
      } else if ("$x" == f[0] && ((k = f[1]), (k = uI(k, e)), null != k)) {
        b.B = k;
        gJ(a, b);
        return;
      }
    for (c = f.length; g < c; g += 2) {
      k = f[g];
      var l = f[g + 1];
      "$t" == k && (e = l);
      d.A ||
        (null != a.A
          ? "for" != k && "$fk" != k && jJ(a, b)
          : ("$a" == k ||
              "$u" == k ||
              "$ua" == k ||
              "$uae" == k ||
              "$ue" == k ||
              "$up" == k ||
              "display" == k ||
              "$if" == k ||
              "$dd" == k ||
              "$dc" == k ||
              "$dh" == k ||
              "$sk" == k) &&
            mJ(d, e));
      if ((k = bJ[k])) {
        var m = new QI();
        l = b;
        var n = m,
          p = l.B[g + 1];
        switch (l.B[g]) {
          case "$ue":
            n.D = cH;
            n.B = p;
            break;
          case "for":
            n.D = nJ;
            n.B = p[3];
            break;
          case "$fk":
            n.A = [];
            n.D = oJ(l.A, l.U, p, n.A);
            n.B = p[3];
            break;
          case "display":
          case "$if":
          case "$sk":
          case "$s":
            n.B = p;
            break;
          case "$c":
            n.B = p[2];
        }
        l = a;
        n = b;
        p = g;
        var q = n.U,
          t = q.element,
          r = n.B[p],
          v = n.A,
          x = null;
        if (m.B)
          if (l.C) {
            x = "";
            switch (r) {
              case "$ue":
                x = pJ;
                break;
              case "for":
              case "$fk":
                x = WI;
                break;
              case "display":
              case "$if":
              case "$sk":
                x = !0;
                break;
              case "$s":
                x = 0;
                break;
              case "$c":
                x = "";
            }
            x = qJ(v, m.B, t, x);
          } else x = jG(v, m.B, t);
        t = m.D(x);
        m.C = t;
        r = bJ[r];
        4 == r.na
          ? ((n.C = []), (n.K = r.A))
          : 3 == r.na &&
            ((q = n.G = new RI(OI, null, q, new eG(), "null")),
            (q.I = n.I + 1),
            (q.L = n.L));
        n.J.push(m);
        r.method.call(l, n, m, p, x, !0);
        if (0 != k.na) return;
      } else g == b.H ? (b.H += 2) : b.J.push(null);
    }
    if (null == a.A || "style" != d.A.name())
      cJ(a, d, b),
        (b.C = []),
        (b.K = 1),
        null != a.A ? iJ(a, b, e) : fJ(a, b, e),
        0 == b.C.length && (b.C = null),
        kJ(a, d, b);
  }
  function qJ(a, b, c, d) {
    try {
      return jG(a, b, c);
    } catch (e) {
      return d;
    }
  }
  var pJ = new bH("null");
  function nJ(a) {
    return String(rJ(a).length);
  }
  VI.prototype.H = function(a, b, c, d, e) {
    cJ(this, a.U, a);
    c = a.C;
    if (e)
      if (null != this.A) {
        c = a.C;
        e = a.A;
        for (var f = a.F[4], g = -1, k = 0; k < f.length; ++k) {
          var l = f[k][3];
          if ("$sc" == l[0]) {
            if (jG(e, l[1], null) === d) {
              g = k;
              break;
            }
          } else "$sd" == l[0] && (g = k);
        }
        b.A = g;
        for (k = 0; k < f.length; ++k)
          (b = f[k]),
            (b = c[k] = new RI(b[3], b, new PI(null), e, a.D)),
            this.C && (b.U.D = !0),
            k == g ? gJ(this, b) : a.F[2] && lJ(this, b);
        kJ(this, a.U, a);
      } else {
        e = a.A;
        k = a.U.element;
        g = [];
        f = -1;
        for (k = bj(k); k; k = dj(k))
          (l = hJ(this, k, a.D)),
            "$sc" == l[0]
              ? (g.push(k), jG(e, l[1], k) === d && (f = g.length - 1))
              : "$sd" == l[0] && (g.push(k), -1 == f && (f = g.length - 1)),
            (k = rG(k));
        d = 0;
        for (l = g.length; d < l; ++d) {
          var m = d == f;
          k = c[d];
          m || null == k || sJ(this.B, k, !0);
          k = g[d];
          for (var n = rG(k), p = !0; p; k = k.nextSibling)
            zk(k, m), k == n && (p = !1);
        }
        b.A = f;
        -1 != f &&
          ((b = c[f]),
          null == b
            ? ((b = g[f]),
              (k = c[f] = new RI(hJ(this, b, a.D), null, new PI(b), e, a.D)),
              $I(this, k))
            : ZI(this, b));
      }
    else -1 != b.A && ((f = b.A), ZI(this, c[f]));
  };
  function tJ(a, b) {
    a = a.B;
    for (var c in a) b.A[c] = a[c];
  }
  function uJ(a) {
    this.A = a;
    this.fc = null;
  }
  uJ.prototype.ta = function() {
    if (null != this.fc)
      for (var a = 0; a < this.fc.length; ++a) this.fc[a].B(this);
  };
  function vJ(a) {
    null == a.O && (a.O = {});
    return a.O;
  }
  y = VI.prototype;
  y.Cl = function(a, b, c) {
    b = a.A;
    var d = a.U.element;
    c = a.B[c + 1];
    var e = c[0],
      f = c[1];
    c = vJ(a);
    e = "observer:" + e;
    var g = c[e];
    b = jG(b, f, d);
    if (null != g) {
      if (g.fc[0] == b) return;
      g.ta();
    }
    a = new uJ(a);
    null == a.fc ? (a.fc = [b]) : a.fc.push(b);
    b.A(a);
    c[e] = a;
  };
  y.Nn = function(a, b, c, d, e) {
    c = a.G;
    e && ((c.J.length = 0), (c.D = d.A), (c.B = OI));
    if (!wJ(this, a, b)) {
      e = a.U;
      var f = this.B.A[d.A];
      null != f &&
        (PG(e.A, 768), kG(c.A, a.A, WI), tJ(d, c.A), xJ(this, a, c, f, b, d.B));
    }
  };
  y.Jb = function(a, b, c) {
    if (null != this.A) return !1;
    var d = b.A;
    if (null == d) (b.A = d = new eG()), kG(d, a.A);
    else {
      b = d;
      a = a.A;
      for (var e in b.A)
        (d = a.A[e]), b.A[e] != d && ((b.A[e] = d), c && Ka(c));
    }
    return !1;
  };
  function yJ(a, b, c) {
    return null != a.A && a.C && b.F[2] ? ((c.C = ""), !0) : !1;
  }
  function wJ(a, b, c) {
    return yJ(a, b, c) ? (cJ(a, b.U, b), kJ(a, b.U, b), !0) : !1;
  }
  y.Kn = function(a, b, c) {
    if (!wJ(this, a, b)) {
      var d = a.G;
      c = a.B[c + 1];
      d.D = c;
      c = this.B.A[c];
      null != c && (kG(d.A, a.A, c.rc), xJ(this, a, d, c, b, c.rc));
    }
  };
  function xJ(a, b, c, d, e, f) {
    if (null == e || null == d || !d.async || !a.Jb(c, e, f))
      if (c.B != OI) ZI(a, c);
      else {
        f = c.U;
        (e = f.element) && eJ(e, c);
        null == f.B && (f.B = e ? xI(e) : []);
        f = f.B;
        var g = c.I;
        f.length < g - 1
          ? ((c.B = rI(c.D)), gJ(a, c))
          : f.length == g - 1
            ? zJ(a, b, c)
            : f[g - 1] != c.D
              ? ((f.length = g - 1), null != b && sJ(a.B, b, !1), zJ(a, b, c))
              : e && XI(a.B, d, e)
                ? ((f.length = g - 1), zJ(a, b, c))
                : ((c.B = rI(c.D)), gJ(a, c));
      }
  }
  y.On = function(a, b, c) {
    var d = a.B[c + 1];
    if (d[2] || !wJ(this, a, b)) {
      var e = a.G;
      e.D = d[0];
      var f = this.B.A[e.D];
      if (null != f) {
        var g = e.A;
        kG(g, a.A, WI);
        c = a.U.element;
        if ((d = d[1]))
          for (var k in d) {
            var l = jG(a.A, d[k], c);
            g.A[k] = l;
          }
        f.hh
          ? (cJ(this, a.U, a),
            (b = f.Rk(this.B, g.A)),
            null != this.A
              ? (this.A += b)
              : (lG(c, b),
                ("TEXTAREA" != c.nodeName && "textarea" != c.nodeName) ||
                  c.value === b ||
                  (c.value = b)),
            kJ(this, a.U, a))
          : xJ(this, a, e, f, b, d);
      }
    }
  };
  y.Ln = function(a, b, c) {
    var d = a.B[c + 1];
    c = d[0];
    var e = d[1],
      f = a.U,
      g = f.A;
    if (!f.element || "NARROW_PATH" != f.element.__narrow_strategy)
      if ((f = this.B.A[e]))
        if (((d = d[2]), null == d || jG(a.A, d, null)))
          (d = b.A),
            null == d && (b.A = d = new eG()),
            kG(d, a.A, f.rc),
            "*" == c ? AJ(this, e, f, d, g) : BJ(this, e, f, c, d, g);
  };
  y.Mn = function(a, b, c) {
    var d = a.B[c + 1];
    c = d[0];
    var e = a.U.element;
    if (!e || "NARROW_PATH" != e.__narrow_strategy) {
      var f = a.U.A;
      e = jG(a.A, d[1], e);
      var g = e.A,
        k = this.B.A[g];
      k &&
        ((d = d[2]), null == d || jG(a.A, d, null)) &&
        ((d = b.A),
        null == d && (b.A = d = new eG()),
        kG(d, a.A, WI),
        tJ(e, d),
        "*" == c ? AJ(this, g, k, d, f) : BJ(this, g, k, c, d, f));
    }
  };
  function BJ(a, b, c, d, e, f) {
    e.A.ab = !1;
    var g = "";
    if (c.elements || c.hh)
      c.hh
        ? (g = yG(Xb(c.Rk(a.B, e.A))))
        : ((c = c.elements),
          (e = new RI(c[3], c, new PI(null), e, b)),
          (e.U.B = []),
          (b = a.A),
          (a.A = ""),
          gJ(a, e),
          (e = a.A),
          (a.A = b),
          (g = e));
    g || (g = LG(f.name(), d));
    g && SG(f, 0, d, g, !0, !1);
  }
  function AJ(a, b, c, d, e) {
    c.elements &&
      ((c = c.elements),
      (b = new RI(c[3], c, new PI(null), d, b)),
      (b.U.B = []),
      (b.U.A = e),
      PG(e, c[1]),
      (e = a.A),
      (a.A = ""),
      gJ(a, b),
      (a.A = e));
  }
  function zJ(a, b, c) {
    var d = c.D,
      e = c.U,
      f = e.B || e.element.__rt,
      g = a.B.A[d];
    if (g && g.Xk)
      null != a.A &&
        ((c = e.A.id()), (a.A += ZG(e.A, !1, !0) + QG(e.A)), (a.D[c] = e));
    else if (g && g.elements) {
      e.element &&
        SG(
          e.A,
          0,
          "jstcache",
          e.element.getAttribute("jstcache") || "0",
          !1,
          !0
        );
      null == e.element &&
        b &&
        b.F &&
        b.F[2] &&
        -1 != b.F.A &&
        0 != b.F.A &&
        CJ(e.A, b.D, b.F.A);
      f.push(d);
      d = a.B;
      f = c.A;
      for (var k = g.dj, l = null == k ? 0 : k.length, m = 0; m < l; ++m)
        for (var n = k[m], p = 0; p < n.length; p += 2) {
          var q = n[p + 1];
          switch (n[p]) {
            case "css":
              var t = "string" == typeof q ? q : jG(f, q, null);
              t &&
                ((q = d),
                t in q.H ||
                  ((q.H[t] = !0), -1 == q.K.indexOf(t) && q.C.push(t)));
              break;
            case "$g":
              (0, q[0])(f.A, f.B ? f.B.A[q[1]] : null);
              break;
            case "var":
              jG(f, q, null);
          }
        }
      null == e.element && e.A && b && DJ(e.A, b);
      "jsl" == g.elements[0] &&
        ("jsl" != e.A.name() || (b.F && b.F[2])) &&
        WG(e.A, !0);
      c.F = g.elements;
      e = c.U;
      g = c.F;
      if ((b = null == a.A)) (a.A = ""), (a.D = {}), (a.F = {});
      c.B = g[3];
      PG(e.A, g[1]);
      g = a.A;
      a.A = "";
      0 != (e.A.D & 2048)
        ? ((d = c.A.A.ab),
          (c.A.A.ab = !1),
          gJ(a, c, void 0),
          (c.A.A.ab = !1 !== d))
        : gJ(a, c, void 0);
      a.A = g + a.A;
      if (b) {
        c = a.B;
        c.B &&
          0 != c.C.length &&
          ((b = c.C.join("")),
          Nc ? (c.G || (c.G = KI(c)), (g = c.G)) : (g = KI(c)),
          g.styleSheet && !g.sheet
            ? (g.styleSheet.cssText += b)
            : (g.textContent += b),
          (c.C.length = 0));
        c = e.element;
        g = a.G;
        b = a.A;
        if ("" != b || "" != c.innerHTML)
          if (
            ((d = c.nodeName.toLowerCase()),
            (e = 0),
            "table" == d
              ? ((b = "<table>" + b + "</table>"), (e = 1))
              : "tbody" == d ||
                "thead" == d ||
                "tfoot" == d ||
                "caption" == d ||
                "colgroup" == d ||
                "col" == d
                ? ((b = "<table><tbody>" + b + "</tbody></table>"), (e = 2))
                : "tr" == d &&
                  ((b = "<table><tbody><tr>" + b + "</tr></tbody></table>"),
                  (e = 3)),
            0 == e)
          )
            c.innerHTML = b;
          else {
            g = g.createElement("div");
            g.innerHTML = b;
            for (b = 0; b < e; ++b) g = g.firstChild;
            Zi(c);
            for (e = g.firstChild; e; e = g.firstChild) c.appendChild(e);
          }
        c = c.querySelectorAll ? c.querySelectorAll("[jstid]") : [];
        for (e = 0; e < c.length; ++e) {
          g = c[e];
          d = g.getAttribute("jstid");
          b = a.D[d];
          d = a.F[d];
          g.removeAttribute("jstid");
          for (f = b; f; f = f.F) f.element = g;
          b.B && ((g.__rt = b.B), (b.B = null));
          g.__cdn = d;
          UI(d);
          g.__jstcache = d.B;
          if (b.C) {
            for (g = 0; g < b.C.length; ++g)
              (d = b.C[g]), d.shift().apply(a, d);
            b.C = null;
          }
        }
        a.A = null;
        a.D = null;
        a.F = null;
      }
    }
  }
  function EJ(a, b, c, d) {
    var e = b.cloneNode(!1);
    if (null == b.__rt)
      for (b = b.firstChild; null != b; b = b.nextSibling)
        1 == b.nodeType
          ? e.appendChild(EJ(a, b, c, !0))
          : e.appendChild(b.cloneNode(!0));
    else e.__rt && delete e.__rt;
    e.__cdn && delete e.__cdn;
    e.__ctx && delete e.__ctx;
    e.__rjsctx && delete e.__rjsctx;
    d || zk(e, !0);
    return e;
  }
  function rJ(a) {
    return null == a ? [] : Ka(a) ? a : [a];
  }
  function oJ(a, b, c, d) {
    var e = c[0],
      f = c[1],
      g = c[2],
      k = c[4];
    return function(c) {
      var l = b.element;
      c = rJ(c);
      var n = c.length;
      g(a.A, n);
      for (var p = (d.length = 0); p < n; ++p) {
        e(a.A, c[p]);
        f(a.A, p);
        var q = jG(a, k, l);
        d.push(String(q));
      }
      return d.join(",");
    };
  }
  y.jj = function(a, b, c, d, e) {
    var f = a.C,
      g = a.B[c + 1],
      k = g[0],
      l = g[1],
      m = g[2],
      n = a.A;
    g = a.U;
    d = rJ(d);
    var p = d.length;
    m(n.A, p);
    if (e)
      if (null != this.A) FJ(this, a, b, c, d);
      else {
        for (v = p; v < f.length; ++v) sJ(this.B, f[v], !0);
        0 < f.length && (f.length = Math.max(p, 1));
        var q = g.element;
        b = q;
        var t = !1;
        e = a.L;
        m = nG(b);
        for (v = 0; v < p || 0 == v; ++v) {
          if (t) {
            var r = EJ(this, q, a.D);
            $i(r, b);
            b = r;
            m.length = e + 1;
          } else
            0 < v && ((b = dj(b)), (m = nG(b))),
              (m[e] && "*" != m[e].charAt(0)) || (t = 0 < p);
          qG(b, m, e, p, v);
          0 == v && zk(b, 0 < p);
          0 < p &&
            (k(n.A, d[v]),
            l(n.A, v),
            hJ(this, b, null),
            (r = f[v]),
            null == r
              ? ((r = f[v] = new RI(a.B, a.F, new PI(b), n, a.D)),
                (r.H = c + 2),
                (r.I = a.I),
                (r.L = e + 1),
                (r.M = !0),
                $I(this, r))
              : ZI(this, r),
            (b = r.U.next || r.U.element));
        }
        if (!t)
          for (a = dj(b); a && pG(nG(a), m, e); ) (c = dj(a)), aj(a), (a = c);
        g.next = b;
      }
    else for (var v = 0; v < p; ++v) k(n.A, d[v]), l(n.A, v), ZI(this, f[v]);
  };
  y.kj = function(a, b, c, d, e) {
    var f = a.C,
      g = a.A,
      k = a.B[c + 1],
      l = k[0],
      m = k[1];
    k = a.U;
    d = rJ(d);
    if (e || !k.element || k.element.__forkey_has_unprocessed_elements) {
      e = b.A;
      var n = d.length;
      if (null != this.A) FJ(this, a, b, c, d, e);
      else {
        var p = k.element;
        b = p;
        var q = a.L,
          t = nG(b),
          r = [],
          v = {},
          x = null;
        var z = this.G;
        try {
          var A = z && z.activeElement;
          var H = A && A.nodeName ? A : null;
        } catch (D) {
          H = null;
        }
        z = b;
        for (A = t; z; ) {
          hJ(this, z, a.D);
          var B = oG(z);
          B && (v[B] = r.length);
          r.push(z);
          !x && H && fj(z, H) && (x = z);
          (z = dj(z))
            ? ((B = nG(z)), pG(B, A, q) ? (A = B) : (z = null))
            : (z = null);
        }
        z = b.previousSibling;
        z ||
          ((z = this.G.createComment("jsfor")),
          b.parentNode && b.parentNode.insertBefore(z, b));
        H = [];
        p.__forkey_has_unprocessed_elements = !1;
        if (0 < n)
          for (A = 0; A < n; ++A) {
            var J = e[A];
            if (J in v) {
              B = v[J];
              delete v[J];
              b = r[B];
              r[B] = null;
              if (z.nextSibling != b)
                if (b != x) $i(b, z);
                else for (; z.nextSibling != b; ) $i(z.nextSibling, b);
              H[A] = f[B];
            } else (b = EJ(this, p, a.D)), $i(b, z);
            l(g.A, d[A]);
            m(g.A, A);
            qG(b, t, q, n, A, J);
            0 == A && zk(b, !0);
            hJ(this, b, null);
            0 == A && p != b && (p = k.element = b);
            z = H[A];
            null == z
              ? ((z = new RI(a.B, a.F, new PI(b), g, a.D)),
                (z.H = c + 2),
                (z.I = a.I),
                (z.L = q + 1),
                (z.M = !0),
                $I(this, z)
                  ? (H[A] = z)
                  : (p.__forkey_has_unprocessed_elements = !0))
              : ZI(this, z);
            z = b = z.U.next || z.U.element;
          }
        else
          (r[0] = null),
            f[0] && (H[0] = f[0]),
            zk(b, !1),
            qG(b, t, q, 0, 0, oG(b));
        for (J in v) (B = v[J]), (c = f[B]) && sJ(this.B, c, !0);
        a.C = H;
        for (A = 0; A < r.length; ++A) r[A] && aj(r[A]);
        k.next = b;
      }
    } else if (0 < d.length)
      for (A = 0; A < f.length; ++A) l(g.A, d[A]), m(g.A, A), ZI(this, f[A]);
  };
  function FJ(a, b, c, d, e, f) {
    var g = b.C,
      k = b.B[d + 1],
      l = k[0];
    k = k[1];
    var m = b.A;
    c = yJ(a, b, c) ? 0 : e.length;
    for (var n = 0 == c, p = b.F[2], q = 0; q < c || (0 == q && p); ++q) {
      n || (l(m.A, e[q]), k(m.A, q));
      var t = (g[q] = new RI(b.B, b.F, new PI(null), m, b.D));
      t.H = d + 2;
      t.I = b.I;
      t.L = b.L + 1;
      t.M = !0;
      t.N =
        (b.N ? b.N + "," : "") +
        (q == c - 1 || n ? "*" : "") +
        String(q) +
        (f && !n ? ";" + f[q] : "");
      var r = jJ(a, t);
      p && 0 < c && SG(r, 20, "jsinstance", t.N);
      0 == q && (t.U.F = b.U);
      n ? lJ(a, t) : gJ(a, t);
    }
  }
  y.Qn = function(a, b, c) {
    b = a.A;
    c = a.B[c + 1];
    var d = a.U.element;
    this.C && a.F && a.F[2] ? qJ(b, c, d, "") : jG(b, c, d);
  };
  y.Rn = function(a, b, c) {
    var d = a.A,
      e = a.B[c + 1];
    c = e[0];
    if (null != this.A) (a = jG(d, e[1], null)), c(d.A, a), (b.A = yI(a));
    else {
      a = a.U.element;
      if (null == b.A) {
        e = a.__vs;
        if (!e) {
          e = a.__vs = [1];
          var f = a.getAttribute("jsvs");
          f = RH(f);
          for (var g = 0, k = f.length; g < k; ) {
            var l = VH(f, g),
              m = f.slice(g, l).join("");
            g = l + 1;
            e.push(WH(m));
          }
        }
        f = e[0]++;
        b.A = e[f];
      }
      a = jG(d, b.A, a);
      c(d.A, a);
    }
  };
  y.hj = function(a, b, c) {
    jG(a.A, a.B[c + 1], a.U.element);
  };
  y.Hk = function(a, b, c) {
    b = a.B[c + 1];
    a = a.A;
    (0, b[0])(a.A, a.B ? a.B.A[b[1]] : null);
  };
  function CJ(a, b, c) {
    SG(a, 0, "jstcache", tI(String(c), b), !1, !0);
  }
  y.Gn = function(a, b, c) {
    b = a.A;
    var d = a.U;
    c = a.B[c + 1];
    null != this.A && a.F[2] && CJ(d.A, a.D, 0);
    d.A && c && OG(d.A, -1, null, null, null, null, c, !1);
    HI(this.B.D, c) &&
      (d.element
        ? this.Xg(d, c, b)
        : (d.C = d.C || []).push([this.Xg, d, c, b]));
  };
  y.Xg = function(a, b, c) {
    var d = this.B.D;
    if (!c.A.Ce) {
      var e = this.B;
      e = new AI(c, e.A[b] && e.A[b].Nf ? e.A[b].Nf : null);
      var f = new zI();
      f.F = a.element;
      b = II(d, b, f, e);
      c.A.Ce = b;
      a.element.__ctx || (a.element.__ctx = c);
    }
  };
  y.Tk = function(a, b) {
    if (!b.A) {
      var c = a.U;
      a = a.A;
      c.element ? this.Yg(c, a) : (c.C = c.C || []).push([this.Yg, c, a]);
      b.A = !0;
    }
  };
  y.Yg = function(a, b) {
    a = a.element;
    a.__rjsctx || (a.__rjsctx = b);
  };
  function sJ(a, b, c) {
    if (b) {
      if (c) {
        c = b.O;
        if (null != c) {
          for (var d in c)
            if (0 == d.indexOf("controller:") || 0 == d.indexOf("observer:")) {
              var e = c[d];
              null != e && e.ta && e.ta();
            }
          b.O = null;
        }
        if ("$t" == b.B[b.H]) {
          d = b.A;
          if ((c = d.A.Ce)) {
            c = c.Oh;
            e = a.D;
            if (c.A)
              try {
                Fi(c.A);
              } catch (f) {
                try {
                  e.B.A(f);
                } catch (g) {}
              } finally {
                c.A.Oh = null;
              }
            d.A.Ce = null;
          }
          b.U.element && b.U.element.__ctx && (b.U.element.__ctx = null);
        }
      }
      null != b.G && sJ(a, b.G, !0);
      if (null != b.C)
        for (d = 0; d < b.C.length; ++d) (c = b.C[d]) && sJ(a, c, !0);
    }
  }
  y.yg = function(a, b, c, d, e) {
    var f = a.U,
      g = "$if" == a.B[c];
    if (null != this.A)
      d && this.C && ((f.D = !0), (b.C = "")),
        (c += 2),
        g
          ? d ? gJ(this, a, c) : a.F[2] && lJ(this, a, c)
          : d ? gJ(this, a, c) : lJ(this, a, c),
        (b.A = !0);
    else {
      var k = f.element;
      g && f.A && PG(f.A, 768);
      d || cJ(this, f, a);
      if (e)
        if ((zk(k, !!d), d)) b.A || (gJ(this, a, c + 2), (b.A = !0));
        else if ((b.A && sJ(this.B, a, "$t" != a.B[a.H]), g)) {
          d = !1;
          for (g = c + 2; g < a.B.length; g += 2)
            if (((e = a.B[g]), "$u" == e || "$ue" == e || "$up" == e)) {
              d = !0;
              break;
            }
          if (d) {
            for (; (d = k.firstChild); ) k.removeChild(d);
            d = k.__cdn;
            for (g = a.G; null != g; ) {
              if (d == g) {
                k.__cdn = null;
                break;
              }
              g = g.G;
            }
            b.A = !1;
            a.J.length = (c - a.H) / 2 + 1;
            a.K = 0;
            a.G = null;
            a.C = null;
            b = xI(k);
            b.length > a.I && (b.length = a.I);
          }
        }
    }
  };
  y.An = function(a, b, c) {
    b = a.U;
    null != b && null != b.element && jG(a.A, a.B[c + 1], b.element);
  };
  y.En = function(a, b, c, d, e) {
    null != this.A
      ? (gJ(this, a, c + 2), (b.A = !0))
      : (d && cJ(this, a.U, a),
        !e || d || b.A || (gJ(this, a, c + 2), (b.A = !0)));
  };
  y.Ok = function(a, b, c) {
    var d = a.U.element,
      e = a.B[c + 1];
    c = e[0];
    var f = e[1],
      g = b.A;
    e = null != g;
    e || (b.A = g = new eG());
    kG(g, a.A);
    b = jG(g, f, d);
    ("create" != c && "load" != c) || !d
      ? (vJ(a)["action:" + c] = b)
      : e || (eJ(d, a), b.call(d));
  };
  y.Pk = function(a, b, c) {
    b = a.A;
    var d = a.B[c + 1],
      e = d[0];
    c = d[1];
    var f = d[2];
    d = d[3];
    var g = a.U.element;
    a = vJ(a);
    e = "controller:" + e;
    var k = a[e];
    null == k ? (a[e] = jG(b, f, g)) : (c(b.A, k), d && jG(b, d, g));
  };
  function mJ(a, b) {
    var c = a.element,
      d = c.__tag;
    if (null != d) (a.A = d), d.reset(b || void 0);
    else if (
      ((a = d = a.A = c.__tag = new JG(c.nodeName.toLowerCase())),
      (b = b || void 0),
      (d = c.getAttribute("jsan")))
    ) {
      PG(a, 64);
      d = d.split(",");
      var e = d.length;
      if (0 < e) {
        a.A = [];
        for (var f = 0; f < e; f++) {
          var g = d[f],
            k = g.indexOf(".");
          if (-1 == k) OG(a, -1, null, null, null, null, g, !1);
          else {
            var l = parseInt(g.substr(0, k), 10),
              m = g.substr(k + 1),
              n = null;
            k = "_jsan_";
            switch (l) {
              case 7:
                g = "class";
                n = m;
                k = "";
                break;
              case 5:
                g = "style";
                n = m;
                break;
              case 13:
                m = m.split(".");
                g = m[0];
                n = m[1];
                break;
              case 0:
                g = m;
                k = c.getAttribute(m);
                break;
              default:
                g = m;
            }
            OG(a, l, g, n, null, null, k, !1);
          }
        }
      }
      a.K = !1;
      a.reset(b);
    }
  }
  function jJ(a, b) {
    var c = b.F,
      d = (b.U.A = new JG(c[0]));
    PG(d, c[1]);
    !1 === b.A.A.ab && PG(d, 1024);
    a.F && (a.F[d.id()] = b);
    b.M = !0;
    return d;
  }
  y.Zi = function(a, b, c) {
    var d = a.B[c + 1];
    b = a.U.A;
    var e = a.A,
      f = a.U.element;
    if (!f || "NARROW_PATH" != f.__narrow_strategy) {
      var g = d[0],
        k = d[1],
        l = d[3],
        m = d[4];
      a = d[5];
      c = !!d[7];
      if (!c || null != this.A)
        if (!d[8] || !this.C) {
          var n = !0;
          null != l && (n = this.C && "nonce" != a ? !0 : !!jG(e, l, f));
          e = n
            ? null == m
              ? void 0
              : "string" == typeof m
                ? m
                : this.C ? qJ(e, m, f, "") : jG(e, m, f)
            : null;
          var p;
          null != l || (!0 !== e && !1 !== e)
            ? null === e ? (p = null) : void 0 === e ? (p = a) : (p = String(e))
            : (p = (n = e) ? a : null);
          e = null !== p || null == this.A;
          switch (g) {
            case 6:
              PG(b, 256);
              e && SG(b, g, "class", p, !1, c);
              break;
            case 7:
              e && TG(b, g, "class", a, n ? "" : null, c);
              break;
            case 4:
              e && SG(b, g, "style", p, !1, c);
              break;
            case 5:
              if (n) {
                if (m)
                  if (k && null !== p) {
                    d = p;
                    p = 5;
                    switch (k) {
                      case 5:
                        k = TF(d);
                        break;
                      case 6:
                        k = $F.test(d) ? d : "zjslayoutzinvalid";
                        break;
                      case 7:
                        k = XF(d);
                        break;
                      default:
                        (p = 6), (k = "sanitization_error_" + k);
                    }
                    TG(b, p, "style", a, k, c);
                  } else e && TG(b, g, "style", a, p, c);
              } else e && TG(b, g, "style", a, null, c);
              break;
            case 8:
              k && null !== p ? UG(b, k, a, p, c) : e && SG(b, g, a, p, !1, c);
              break;
            case 13:
              k = d[6];
              e && TG(b, g, a, k, p, c);
              break;
            case 14:
            case 11:
            case 12:
            case 10:
            case 9:
              e && TG(b, g, a, "", p, c);
              break;
            default:
              "jsaction" == a
                ? (e && SG(b, g, a, p, !1, c),
                  f && "__jsaction" in f && delete f.__jsaction)
                : "jsnamespace" == a
                  ? (e && SG(b, g, a, p, !1, c),
                    f && "__jsnamespace" in f && delete f.__jsnamespace)
                  : a &&
                    null == d[6] &&
                    (k && null !== p
                      ? UG(b, k, a, p, c)
                      : e && SG(b, g, a, p, !1, c));
          }
        }
    }
  };
  function DJ(a, b) {
    for (var c = b.B, d = 0; c && d < c.length; d += 2)
      if ("$tg" == c[d]) {
        !1 === jG(b.A, c[d + 1], null) && WG(a, !1);
        break;
      }
  }
  function cJ(a, b, c) {
    var d = b.A;
    if (null != d) {
      var e = b.element;
      null == e
        ? (DJ(d, c),
          -1 != c.F.A && c.F[2] && "$t" != c.F[3][0] && CJ(d, c.D, c.F.A),
          c.U.D && TG(d, 5, "style", "display", "none", !0),
          (e = d.id()),
          (c = 0 != (c.F[1] & 16)),
          a.D ? ((a.A += ZG(d, c, !0)), (a.D[e] = b)) : (a.A += ZG(d, c, !1)))
        : "NARROW_PATH" != e.__narrow_strategy &&
          (c.U.D && TG(d, 5, "style", "display", "none", !0), d.apply(e));
    }
  }
  function kJ(a, b, c) {
    var d = b.element;
    b = b.A;
    null != b &&
      null != a.A &&
      null == d &&
      ((c = c.F), 0 == (c[1] & 16) && 0 == (c[1] & 8) && (a.A += QG(b)));
  }
  y.Vk = function(a, b, c) {
    if (!yJ(this, a, b)) {
      var d = a.B[c + 1];
      b = a.A;
      c = a.U.A;
      var e = d[1],
        f = !!b.A.Ea;
      d = jG(b, d[0], a.U.element);
      a = pH(d, e, f);
      e = rH(d, e, f);
      if (f != a || f != e) (c.G = !0), SG(c, 0, "dir", a ? "rtl" : "ltr");
      b.A.Ea = a;
    }
  };
  y.Wk = function(a, b, c) {
    if (!yJ(this, a, b)) {
      var d = a.B[c + 1];
      b = a.A;
      c = a.U.element;
      if (!c || "NARROW_PATH" != c.__narrow_strategy) {
        a = a.U.A;
        var e = d[0],
          f = d[1],
          g = d[2];
        d = !!b.A.Ea;
        f = f ? jG(b, f, c) : null;
        c = "rtl" == jG(b, e, c);
        e = null != f ? rH(f, g, d) : d;
        if (d != c || d != e) (a.G = !0), SG(a, 0, "dir", c ? "rtl" : "ltr");
        b.A.Ea = c;
      }
    }
  };
  y.fj = function(a, b) {
    yJ(this, a, b) ||
      ((b = a.A),
      (a = a.U.element),
      (a && "NARROW_PATH" == a.__narrow_strategy) || (b.A.Ea = !!b.A.Ea));
  };
  y.Uk = function(a, b, c, d, e) {
    var f = a.B[c + 1],
      g = f[0],
      k = a.A;
    d = String(d);
    c = a.U;
    var l = !1,
      m = !1;
    3 < f.length &&
      null != c.A &&
      !yJ(this, a, b) &&
      ((m = f[3]),
      (f = !!jG(k, f[4], null)),
      (l = 7 == g || 2 == g || 1 == g),
      (m = null != m ? jG(k, m, null) : pH(d, l, f)),
      (l = m != f || f != rH(d, l, f))) &&
      (null == c.element && DJ(c.A, a), null == this.A || !1 !== c.A.G) &&
      (SG(c.A, 0, "dir", m ? "rtl" : "ltr"), (l = !1));
    cJ(this, c, a);
    if (e) {
      if (null != this.A) {
        if (!yJ(this, a, b)) {
          b = null;
          l &&
            (!1 !== k.A.ab
              ? ((this.A += '<span dir="' + (m ? "rtl" : "ltr") + '">'),
                (b = "</span>"))
              : ((this.A += m ? "\u202b" : "\u202a"),
                (b = "\u202c" + (m ? "\u200e" : "\u200f"))));
          switch (g) {
            case 7:
            case 2:
              this.A += d;
              break;
            case 1:
              this.A += GG(d);
              break;
            default:
              this.A += yG(d);
          }
          null != b && (this.A += b);
        }
      } else {
        b = c.element;
        switch (g) {
          case 7:
          case 2:
            lG(b, d);
            break;
          case 1:
            g = GG(d);
            lG(b, g);
            break;
          default:
            g = !1;
            e = "";
            for (k = b.firstChild; k; k = k.nextSibling) {
              if (3 != k.nodeType) {
                g = !0;
                break;
              }
              e += k.nodeValue;
            }
            if ((k = b.firstChild)) {
              if (g || e != d) for (; k.nextSibling; ) aj(k.nextSibling);
              3 != k.nodeType && aj(k);
            }
            b.firstChild
              ? e != d && (b.firstChild.nodeValue = d)
              : b.appendChild(b.ownerDocument.createTextNode(d));
        }
        ("TEXTAREA" != b.nodeName && "textarea" != b.nodeName) ||
          b.value === d ||
          (b.value = d);
      }
      kJ(this, c, a);
    }
  };
  function hJ(a, b, c) {
    qI(a.G, b, c);
    return b.__jstcache;
  }
  function GJ(a) {
    this.method = a;
    this.A = this.na = 0;
  }
  var bJ = {},
    HJ = !1;
  function IJ() {
    if (!HJ) {
      HJ = !0;
      var a = VI.prototype,
        b = function(a) {
          return new GJ(a);
        };
      bJ.$a = b(a.Zi);
      bJ.$c = b(a.Uk);
      bJ.$dh = b(a.fj);
      bJ.$dc = b(a.Vk);
      bJ.$dd = b(a.Wk);
      bJ.display = b(a.yg);
      bJ.$e = b(a.hj);
      bJ["for"] = b(a.jj);
      bJ.$fk = b(a.kj);
      bJ.$g = b(a.Hk);
      bJ.$ia = b(a.Ok);
      bJ.$ic = b(a.Pk);
      bJ.$if = b(a.yg);
      bJ.$o = b(a.Cl);
      bJ.$rj = b(a.Tk);
      bJ.$r = b(a.An);
      bJ.$sk = b(a.En);
      bJ.$s = b(a.H);
      bJ.$t = b(a.Gn);
      bJ.$u = b(a.Kn);
      bJ.$ua = b(a.Ln);
      bJ.$uae = b(a.Mn);
      bJ.$ue = b(a.Nn);
      bJ.$up = b(a.On);
      bJ["var"] = b(a.Qn);
      bJ.$vs = b(a.Rn);
      bJ.$c.na = 1;
      bJ.display.na = 1;
      bJ.$if.na = 1;
      bJ.$sk.na = 1;
      bJ["for"].na = 4;
      bJ["for"].A = 2;
      bJ.$fk.na = 4;
      bJ.$fk.A = 2;
      bJ.$s.na = 4;
      bJ.$s.A = 3;
      bJ.$u.na = 3;
      bJ.$ue.na = 3;
      bJ.$up.na = 3;
      aG.runtime = iG;
      aG.and = fH;
      aG.bidiCssFlip = xH;
      aG.bidiDir = oH;
      aG.bidiExitDir = qH;
      aG.bidiLocaleDir = eH;
      aG.url = EH;
      aG.urlToString = FH;
      aG.urlParam = GH;
      aG.hasUrlParam = HH;
      aG.bind = CH;
      aG.debug = kH;
      aG.ge = iH;
      aG.gt = gH;
      aG.le = jH;
      aG.lt = hH;
      aG.has = AH;
      aG.size = BH;
      aG.range = nH;
      aG.string = yH;
      aG["int"] = zH;
    }
  }
  function aJ(a) {
    var b = a.U.element;
    if (
      !b ||
      !b.parentNode ||
      "NARROW_PATH" != b.parentNode.__narrow_strategy ||
      b.__narrow_strategy
    )
      return !0;
    for (b = 0; b < a.B.length; b += 2) {
      var c = a.B[b];
      if ("for" == c || ("$fk" == c && b >= a.H)) return !0;
    }
    return !1;
  }
  function JJ(a, b) {
    this.C = a;
    this.B = new eG();
    this.B.B = this.C.F;
    this.A = null;
    this.D = b;
  }
  function KJ(a, b) {
    if (a.A) {
      var c = a.B,
        d = a.A,
        e = a.C;
      a = a.D;
      IJ();
      for (var f = e.I, g = f.length - 1; 0 <= g; --g) {
        var k = f[g];
        var l = d;
        var m = a;
        var n = k.A.U.element;
        k = k.A.D;
        n != l
          ? (m = fj(l, n))
          : m == k
            ? (m = !0)
            : ((l = l.__cdn), (m = null != l && 1 == YI(l, m, k)));
        m && f.splice(g, 1);
      }
      g = "rtl" == dH(d);
      c.A.Ea = g;
      c.A.ab = !0;
      m = null;
      (g = d.__cdn) &&
        g.B != OI &&
        "no_key" != a &&
        (g = TI(g, a, null)) &&
        ((m = "rebind"),
        (f = new VI(e)),
        kG(g.A, c),
        g.U.A && !g.M && d == g.U.element && g.U.A.reset(a),
        ZI(f, g));
      if (null == m) {
        e.document();
        Qi(d);
        f = new VI(e);
        e = hJ(f, d, null);
        l = "$t" == e[0] ? 1 : 0;
        m = 0;
        if ("no_key" != a && a != d.getAttribute("id")) {
          var p = !1;
          g = e.length - 2;
          if ("$t" == e[0] && e[1] == a) (m = 0), (p = !0);
          else if ("$u" == e[g] && e[g + 1] == a) (m = g), (p = !0);
          else
            for (n = xI(d), g = 0; g < n.length; ++g)
              if (n[g] == a) {
                e = rI(a);
                l = g + 1;
                m = 0;
                p = !0;
                break;
              }
        }
        g = new eG();
        kG(g, c);
        g = new RI(e, null, new PI(d), g, a);
        g.H = m;
        g.I = l;
        g.U.B = xI(d);
        c = !1;
        p && "$t" == e[m] && (mJ(g.U, a), (c = XI(f.B, f.B.A[a], d)));
        c ? zJ(f, null, g) : $I(f, g);
      }
    }
    b && b();
  }
  JJ.prototype.remove = function() {
    var a = this.A;
    if (null != a) {
      var b = a.parentElement;
      if (null == b || !b.__cdn) {
        b = this.C;
        if (a) {
          var c = a.__cdn;
          c && (c = TI(c, this.D)) && sJ(b, c, !0);
        }
        null != a.parentNode && a.parentNode.removeChild(a);
        this.A = null;
        this.B = new eG();
        this.B.B = this.C.F;
      }
    }
  };
  function LJ(a, b) {
    JJ.call(this, a, b);
  }
  I(LJ, JJ);
  function MJ(a, b) {
    JJ.call(this, a, b);
  }
  I(MJ, LJ);
  new rt();
  new zt(7);
  new CF(7);
  new CF("h:mma");
  new zt("EEEE");
  new zt("EEE");
  new zt(GF.Di);
  var NJ = new Xn();
  NJ.data[1] = "transit";
  NJ.data[0] = 2;
  var OJ = new Yn(Fd(NJ, 3));
  OJ.data[0] = "sp";
  OJ.data[1] = "2";
  var PJ = new Xn();
  PJ.data[1] = "bike";
  PJ.data[0] = 2;
  var QJ = new Xn();
  QJ.data[1] = "t";
  QJ.data[0] = 4;
  var RJ = new Xn();
  RJ.data[1] = "shading";
  RJ.data[0] = 5;
  var SJ = new Xn();
  SJ.data[1] = "contours";
  SJ.data[0] = 6;
  function TJ(a) {
    var b = new Zn();
    b.data[0] = 68;
    b = new $n(Fd(b, 1));
    b.data[0] = "set";
    b.data[1] = a;
  }
  TJ("RoadmapMuted");
  TJ("NonRoadmap");
  TJ("TransitFocused");
  TJ("Terrain");
  TJ("BasemapEditing");
  function UJ(a) {
    this.D = a;
    VJ ||
      ((VJ = !0),
      (a = a.style || void 0),
      ij("transformOrigin", a),
      (WJ = ij("transform", a) || "transform"));
  }
  UJ.prototype.F = h();
  UJ.prototype.detach = function(a) {
    a.parentNode === this.D && aj(a);
  };
  function XJ(a) {
    for (var b = a.D.firstChild; b; b = b.nextSibling)
      if (1 === b.nodeType) {
        var c = a,
          d = b,
          e = d.__tai;
        (e && e.fixed) ||
          (c.F(e.Ho, YJ)
            ? ((c = e.uo),
              (d.style.display = "block"),
              (d.style[WJ] =
                "translateZ(0) translate(" +
                ZJ(YJ[0] - c[0]) +
                "px," +
                ZJ(YJ[1] - c[1]) +
                "px) scale(" +
                c[2] +
                ")"))
            : (d.style.display = "none"));
      }
  }
  var VJ = !1,
    WJ = "",
    YJ = new Float64Array(2);
  function ZJ(a) {
    var b = E.devicePixelRatio || 1;
    return Math.round(a * b) / b;
  }
  function $J(a, b) {
    zl(b);
  }
  function aK(a, b) {
    this.A = a;
    this.D = Ka(b) ? b : [b];
    this.B = [];
    this.C = [];
  }
  aK.prototype.jd = function(a) {
    this.A.jd(a);
    if (null != a && (hb(this.C, a), 0 == this.C.length && 0 < this.B.length)) {
      for (a = 0; a < this.B.length; a++) {
        var b = this.A.tc(),
          c = this.B[a];
        Vz(c);
        for (var d = !1, e = 0; e < b.A.length; ++e)
          if (b.A[e] === c) {
            b.A.splice(e, 1);
            d = !0;
            break;
          }
        if (!d)
          for (e = 0; e < b.B.length; ++e)
            if (b.B[e] === c) {
              b.B.splice(e, 1);
              break;
            }
        Tz(b);
      }
      this.B.length = 0;
    }
  };
  aK.prototype.Sb = function(a, b, c, d) {
    return this.A.Sb(a, b, c, d);
  };
  aK.prototype.yc = function(a, b, c, d, e, f) {
    a = this.A.yc(a, b, c, d, e, f);
    if (null != a) {
      if (0 == this.C.length)
        for (b = 0; b < this.D.length; b++) {
          c = this.A.tc();
          e = this.D[b];
          d = new Xz(e);
          b: {
            for (f = 0; f < c.A.length; f++)
              if (Yz(c.A[f].A, e)) {
                e = !0;
                break b;
              }
            e = !1;
          }
          e ? c.B.push(d) : (Wz(c, d), c.A.push(d), Tz(c));
          c = d;
          this.B.push(c);
        }
      this.C.push(a);
    }
    return a;
  };
  aK.prototype.tc = function() {
    return this.A.tc();
  };
  new AB().freeze();
  new AB().freeze();
  new AB().freeze();
  new AB().freeze();
  new AB().freeze();
  new AB().freeze();
  new AB().freeze();
  new AB().freeze();
  new AB().freeze();
  function bK(a) {
    this.C = a;
    this.K = !1;
    this.I = [];
  }
  bK.prototype.M = h();
  bK.prototype.O = function(a) {
    a.na("maps-consumer-kvo-view-redraw-later");
    this.I.push(a);
    this.K || ((this.K = !0), (a = this.C), a.G.push(this), Br(a.B));
  };
  bK.prototype.start = function() {
    this.L();
    return Qp;
  };
  bK.prototype.L = function() {
    this.K = !1;
    var a = this.I;
    this.I = [];
    this.M(a[0]);
    a = oa(a);
    for (var b = a.next(); !b.done; b = a.next())
      b.value.done("maps-consumer-kvo-view-redraw-later");
  };
  function cK(a) {
    var b = BB(0, !0);
    b.listen(a.O, a);
    return b;
  }
  function dK(a) {
    var b = BB(0, 0);
    b.listen(a.O, a);
    return b;
  }
  function eK(a) {
    var b = BB(0, void 0);
    b.listen(a.O, a);
    return b;
  }
  function fK(a, b, c) {
    this.id = a;
    this.name = b;
    this.title = c;
    this.A = zn[b] || 6371010;
  }
  var gK = [];
  function hK(a, b, c, d, e, f, g, k, l, m, n) {
    this.F = a;
    this.D = b;
    this.A = c;
    this.C = d;
    this.B = e;
    this.G = f;
    this.H = g;
    this.I = k;
    this.L = l;
    this.O = m;
    this.K = n;
  }
  hK.prototype.M = function(a) {
    return new hK(
      this.F - a.F,
      this.D - a.D,
      this.A - a.A,
      this.C - a.C,
      this.B - a.B,
      this.G - a.G,
      this.H - a.H,
      this.I - a.I,
      a.L,
      this.O,
      this.K
    );
  };
  function iK(a) {
    return Infinity == a ? 0 : a;
  }
  hK.prototype.J = function() {
    var a = 0.001 * this.B,
      b = iK(this.A / a),
      c = Math.max(this.C - this.A, 0);
    a = iK(c / a);
    var d = this.D / this.A,
      e = {};
    e.f = this.F.toString();
    e.cf = this.A.toString();
    e.tf = this.C.toString();
    isNaN(b) ||
      ((e.fps = b.toFixed(1)),
      (b = this.G / this.B),
      isNaN(b) && (b = 0),
      (e.stp = b.toFixed(3)));
    e.df = c.toFixed(0);
    isNaN(a) || (e.dfps = a.toFixed(1));
    !isNaN(d) && isFinite(d) && (e.ms = 0.05 > d ? "1" : "0");
    e.pr = this.O.toFixed(2).toString();
    null != this.K && (e.wr = this.K);
    e.crt = this.B.toString();
    e.tr = this.H.toString();
    e.tp = this.I.toString();
    e.fsd = this.L.toFixed(2).toString();
    return e;
  };
  function jK(a) {
    this.A = a;
  }
  jK.prototype.B = function() {
    var a = this.A;
    return new hK(
      this.A.la,
      this.A.ja,
      this.A.ia,
      Math.floor(this.A.L / Sp),
      this.A.L,
      this.A.Y,
      this.A.C,
      this.A.aa,
      Math.sqrt(a.I - a.D * a.D),
      E.devicePixelRatio || 1,
      qA || void 0
    );
  };
  function kK(a, b, c, d) {
    this.A = a;
    this.B = b;
    this.D = void 0 === c ? 0 : c;
    this.C = void 0 === d ? 0 : d;
  }
  kK.prototype.M = function(a) {
    if (!this.A || !a.A) return new kK(null, this.B);
    var b = a.A,
      c = this.A,
      d = Ck(),
      e = Ck(),
      f = Qg(c);
    c = Pg(c);
    un(Pg(b), Qg(b), 0, d, 1);
    un(c, f, 0, e, 1);
    b = this.B;
    0 < gK.length ||
      ((gK[0] = null),
      (gK[1] = new fK(1, "earth", "Earth")),
      (gK[2] = new fK(2, "moon", "Moon")),
      (gK[3] = new fK(3, "mars", "Mars")),
      (gK[5] = new fK(5, "mercury", "Mercury")),
      (gK[6] = new fK(6, "venus", "Venus")),
      (gK[4] = new fK(4, "iss", "International Space Station")),
      (gK[11] = new fK(11, "ceres", "Ceres")),
      (gK[12] = new fK(12, "pluto", "Pluto")),
      (gK[17] = new fK(17, "vesta", "Vesta")),
      (gK[18] = new fK(18, "io", "Io")),
      (gK[19] = new fK(19, "europa", "Europa")),
      (gK[20] = new fK(20, "ganymede", "Ganymede")),
      (gK[21] = new fK(21, "callisto", "Callisto")),
      (gK[22] = new fK(22, "mimas", "Mimas")),
      (gK[23] = new fK(23, "enceladus", "Enceladus")),
      (gK[24] = new fK(24, "tethys", "Tethys")),
      (gK[25] = new fK(25, "dione", "Dione")),
      (gK[26] = new fK(26, "rhea", "Rhea")),
      (gK[27] = new fK(27, "titan", "Titan")),
      (gK[28] = new fK(28, "iapetus", "Iapetus")),
      (gK[29] = new fK(29, "charon", "Charon")));
    b = gK[b] || null;
    return new kK(
      this.A,
      this.B,
      (b ? b.A : 6371010) * Math.acos(e[0] * d[0] + e[1] * d[1] + e[2] * d[2]),
      Rg(this.A) - Rg(a.A)
    );
  };
  kK.prototype.J = function() {
    var a = {};
    if (null == this.A) return a;
    a.sca = Math.round(this.C) + "";
    a.scm = Math.round(this.D) + "";
    return a;
  };
  function lK(a) {
    this.C = a;
    this.A = BB(0);
  }
  lK.prototype.B = function() {
    var a = this.A.get() ? M(this.A.get(), 7) : 1;
    return this.C.get() ? new kK(Jg(this.C.get()), a) : new kK(null, a);
  };
  var mK = null;
  function nK(a, b) {
    Nl &&
      (mK ||
        ((mK = []),
        Fj(Nl, "beforedone", function(a) {
          for (var b = mK, c = b.length, f = 0; f < c; f++) {
            var g = b[f].key,
              k = b[f].value;
            (k = Ma(k) ? k(a.sa) : k) && !a.sa.Sc[g] && Sl(a.sa, g, k);
          }
        })),
      mK.push({ key: a, value: b }));
  }
  function oK(a) {
    this.data = a || [];
  }
  I(oK, K);
  function pK(a, b) {
    a.data[0] = b;
  }
  function qK(a, b) {
    a.data[2] = b;
  }
  function rK(a, b) {
    a.data[6] = b;
  }
  function sK(a) {
    JJ.call(this, a, tK);
    var b = tK;
    if (!(b in a.A) || a.A[b].Xk) {
      b = tK;
      var c = [
          "div",
          ,
          1,
          0,
          [
            " ",
            ["canvas", , , 1],
            " ",
            ["div", , , 2],
            " ",
            ["div", , , 3],
            " "
          ]
        ],
        d = uK();
      if (d)
        for (var e = 0; e < d.length; ++e)
          d[e] && hI(d[e], b + " " + String(e));
      NI(c, d);
      a = a.A;
      d = { Ub: 0 };
      if ("array" == Ja(d)) var f = d;
      else {
        e = [];
        for (f in d) e[d[f]] = f;
        f = e;
      }
      a[b] = {
        Bn: 0,
        elements: c,
        dj: [
          [
            "css",
            ".widget-scene{width:100%;height:100%;overflow:hidden;position:absolute;z-index:0;background-color:black}",
            "css",
            ".keynav-mode .widget-scene:focus::after{content:'';border:2px solid #4d90fe;box-sizing:border-box;height:100%;pointer-events:none;position:absolute;width:100%;z-index:1}",
            "css",
            ".print-mode .widget-scene:focus::after{display:none}",
            "css",
            ".widget-scene-effects{position:absolute;left:0;top:0;z-index:2}",
            "css",
            ".widget-scene-imagery-render{position:absolute;left:0;top:0;z-index:1;background-color:black}",
            "css",
            ".widget-scene-imagery-iframe{position:absolute}",
            "css",
            ".widget-scene .canvas-renderer{position:absolute;left:0;top:0}",
            "css",
            ".widget-scene-canvas{position:absolute;left:0;top:0;background-color:black}",
            "css",
            ".widget-scene-capture-canvas{position:relative;z-index:3}",
            "css",
            ".tile-image-3d{-webkit-perspective:1000;-webkit-backface-visibility:hidden;perspective:1000;backface-visibility:hidden;-moz-perspective:1000;-moz-backface-visibility:hidden;-o-perspective:1000;-o-backface-visibility:hidden}",
            "css",
            ".accelerated{-webkit-transform:translateZ(0);transform:translateZ(0)}",
            "css",
            "@media print{.widget-scene{background:white;position:static;overflow:visible}.widget-scene-canvas{display:block;background:white}.app-globe-mode .widget-scene-canvas{background:black}.widget-scene-imagery-render{position:relative;background:white;z-index:4}.widget-scene-imagery-iframe{position:relative;left:50% !important;transform:translateX(-50%);-webkit-transform:translateX(-50%)}.widget-scene .canvas-renderer,.widget-scene .canvas-container,.widget-scene canvas{position:static !important}.canvas-renderer+.widget-scene-canvas{display:none !important}.widget-scene-capture-canvas+.widget-scene-canvas,.widget-scene-capture-canvas+.canvas-renderer{display:none !important}.widget-scene-canvas{width:100% !important;height:auto !important;-webkit-transform:none !important;transform:none !important}}",
            "css",
            ".print-mode .widget-scene{background:white;position:static;overflow:visible}",
            "css",
            ".print-mode .widget-scene-canvas{display:block;background:white}",
            "css",
            ".print-mode .app-globe-mode .widget-scene-canvas{background:black}",
            "css",
            ".print-mode .widget-scene-imagery-render{position:relative;background:white;z-index:4}",
            "css",
            ".print-mode .widget-scene-imagery-iframe{position:relative;left:50% !important;transform:translateX(-50%);-webkit-transform:translateX(-50%)}",
            "css",
            ".print-mode .widget-scene .canvas-renderer,.print-mode .widget-scene .canvas-container,.print-mode .widget-scene canvas{position:static !important}",
            "css",
            ".print-mode .canvas-renderer+.widget-scene-canvas{display:none !important}",
            "css",
            ".print-mode .widget-scene-capture-canvas+.widget-scene-canvas,.print-mode .widget-scene-capture-canvas+.canvas-renderer{display:none !important}"
          ]
        ],
        rc: f,
        Nf: null,
        async: !1,
        Ag: null
      };
    }
  }
  I(sK, MJ);
  sK.prototype.fill = function(a) {
    a = null != a && a.Sa ? a.Sa() : a;
    this.B.A[this.C.A[this.D].rc[0]] = a;
  };
  var tK = "t-nrD2PAT7leI";
  function uK() {
    return [
      [
        "$t",
        "t-nrD2PAT7leI",
        "var",
        function(a) {
          return (a.wa = mH(a.Ub, "", -4) + "." + mH(a.Ub, "", -5));
        },
        "var",
        function(a) {
          return (a.action = mH(a.Ub, !1, -2)
            ? "click: " +
              a.wa +
              ";dblclick: " +
              a.wa +
              ";mousedown: " +
              a.wa +
              ";mousemove: " +
              a.wa +
              ";mouseup: " +
              a.wa +
              ";mouseover: " +
              a.wa +
              ";mouseout: " +
              a.wa +
              ";touchstart: " +
              a.wa +
              ";touchmove: " +
              a.wa +
              ";touchend: " +
              a.wa +
              ";pointerdown: " +
              a.wa +
              ";pointermove: " +
              a.wa +
              ";pointerup: " +
              a.wa +
              ";pointercancel: " +
              a.wa +
              ";MSPointerDown: " +
              a.wa +
              ";MSPointerMove: " +
              a.wa +
              ";MSPointerUp: " +
              a.wa +
              ";MSPointerCancel: " +
              a.wa +
              ";contextmenu: " +
              a.wa +
              ";keydown: " +
              a.wa +
              ";keyup: " +
              a.wa +
              ";" +
              (mH(a.Ub, !1, -3)
                ? "wheel: " +
                  a.wa +
                  ";mousewheel: " +
                  a.wa +
                  ";DOMMouseScroll: " +
                  a.wa +
                  ";"
                : "")
            : "");
        },
        "$a",
        [7, , , , , "widget-scene"],
        "$a",
        [
          0,
          ,
          ,
          ,
          function(a) {
            return mH(a.Ub, "", -6);
          },
          "aria-label",
          ,
          ,
          1
        ],
        "$a",
        [
          5,
          5,
          ,
          ,
          function(a) {
            return a.Ea ? xH("cursor", mH(a.Ub, "", -1)) : mH(a.Ub, "", -1);
          },
          "cursor",
          ,
          ,
          1
        ],
        "$a",
        [
          0,
          ,
          ,
          ,
          function(a) {
            return String(mH(a.Ub, 0, -7));
          },
          "tabindex",
          ,
          ,
          1
        ],
        "$a",
        [
          0,
          ,
          ,
          ,
          function(a) {
            return a.action;
          },
          "jsaction",
          ,
          ,
          1
        ]
      ],
      ["$a", [7, , , , , "widget-scene-canvas", , 1]],
      ["$a", [7, , , , , "widget-scene-imagery-render", , 1]],
      [
        "$a",
        [7, , , , , "widget-scene-effects", , 1],
        "$a",
        [7, , , , , "noprint", , 1]
      ]
    ];
  }
  function vK(a, b, c, d, e, f, g, k) {
    bK.call(this, d, e, f);
    this.T = a;
    this.A = b;
    this.B = eK(this);
    this.D = cK(this);
    this.G = dK(this);
    this.H = c;
    this.Y = g;
    this.R = k;
    this.N = !1;
    this.J = new Hg();
    a = this.H.A;
    0 == a.width && (a.width = 1);
    0 == a.height && (a.height = 1);
  }
  C(vK, bK);
  vK.prototype.W = function(a, b) {
    this.J = a;
    ND(this.H, this.Y, E.devicePixelRatio || 1, this.J.V(), Vg(this.J));
    this.R &&
      (0.75 > this.H.C && (this.N = !0),
      1 <= this.H.C && (this.N = !1),
      this.R(this.N, b));
  };
  vK.prototype.M = function(a) {
    pK(this.A, this.B.get() || "");
    qK(this.A, !!this.D.get());
    rK(this.A, this.G.get() || 0);
    this.T.fill(this.A);
    KJ(this.T, a.va(h(), "scene.template-render"));
  };
  function wK(a, b) {
    VA.call(this);
    var c = this;
    this.D = a;
    this.A = b;
    this.G = new Tj(this);
    Vj(this.G, a, "RenderComplete", this.L, !1, this);
    this.H = this.C = this.B = null;
    xK++;
    this.F = this.I = !1;
    this.J = new yK(b, this);
    b.tb &&
      this.G.listen(b.tb, "webglcontextrestored", function() {
        zK(c, "contextrestored");
        Ar(a);
      });
    this.K = eA(function() {
      zK(c, "timer");
    });
  }
  C(wK, VA);
  function AK(a, b) {
    (a.F || !a.B ? 0 : ME(a.B)) ? b() : a.C ? a.C.push(b) : (a.C = [b]);
  }
  wK.prototype.L = function() {
    var a = this.F || !this.B ? !1 : ME(this.B),
      b = this.B ? this.B.Aa() : !1;
    this.I != a && (this.I = a) && Ua();
    if (this.C && a) {
      a = this.C;
      this.C = null;
      for (var c = 0; c < a.length; c++) a[c]();
    }
    if (this.H && b)
      for (b = this.H, this.H = null, a = 0; a < b.length; a++) b[a]();
  };
  function zK(a, b) {
    var c = a.J;
    BK(c, b);
    if (!c.C) {
      c.C = !0;
      var d = a.D.B;
      AK(a, function() {
        eq(d, c, fq(0, !1));
      });
    }
  }
  wK.prototype.ga = function() {
    this.G.ta();
    E.clearInterval(this.K);
  };
  var xK = 1;
  function yK(a, b) {
    this.A = a;
    this.C = !1;
    this.B = {};
    this.D = "";
    this.G = b.D.B;
  }
  yK.prototype.start = function() {
    if (0 < CK(this.G)) {
      var a = this.G;
      a.T.push({ Sk: this, priority: 0 });
      DK(a.B);
      return Qp;
    }
    this.C = !1;
    this.B = {};
    this.D = "";
    return Qp;
  };
  function BK(a, b) {
    a.B[b] || ((a.D += b + ";"), (a.B[b] = !0));
  }
  function EK(a, b) {
    this.A = a;
    this.D = b;
    this.C = this.B = null;
  }
  EK.prototype.animate = function(a, b, c) {
    c = b.va(G(this.G, this, c), "animation-");
    this.B = new FK(this.A, a, this.D, c, b);
    a = this.A;
    a.F.A();
    a.H.A++;
    GK(this.B);
    return this.B;
  };
  function HK(a, b, c, d) {
    a.C = b;
    var e = c.va(
      function() {
        a.C = null;
        var b = a.A,
          e = b.S.get(),
          k = b.D.get();
        R(k, e);
        IK(b.H);
        b.Ga = !1;
        d(c);
      },
      "transition-default-",
      "df0",
      "df1"
    );
    JK(a.A);
    KK(b, function(b) {
      a.F(c, e, b);
    });
  }
  EK.prototype.F = function(a, b, c) {
    var d = this;
    c
      ? GK(
          new FK(
            this.A,
            c,
            this.D,
            function() {
              KK(d.C, G(d.F, d, a, b));
            },
            a
          )
        )
      : b();
  };
  EK.prototype.G = function(a, b, c) {
    this.B = null;
    var d = this.A,
      e = d.S.get(),
      f = d.D.get();
    R(f, e);
    d.F.start(b);
    d.J.x = -1;
    d.J.y = -1;
    IK(d.H, d.J);
    0 <= d.J.x && 0 <= d.J.y && d.B.I && hF(d.B.I, d.J.x, d.J.y, b);
    a(b, c);
  };
  function FK(a, b, c, d, e) {
    this.D = a;
    this.B = b;
    this.F = this.A = !1;
    this.C = c;
    this.G = d;
    this.sa = e;
  }
  function ZB(a, b) {
    var c = a.B.G(b);
    if (c) {
      var d = a.D,
        e = a.sa,
        f = d.S.get();
      R(f, c);
      LK(d, f);
      zB(d.S, e);
    }
    (c = a.B.H(b)) && a.D.rb(c, a.sa);
    1 === b && a.finish(!1, a.sa);
  }
  function GK(a) {
    if (!a.A) {
      a.A = !0;
      var b = a.C,
        c = F(void 0) ? void 0 : 1;
      0 < c &&
        ((c = new XB(a, a.B.D(), c)),
        (c.B = b.F.A()),
        b.A.push(c),
        ZB(a, 0),
        YB(b));
    }
  }
  FK.prototype.finish = function(a) {
    if (this.A) {
      this.A = !1;
      this.F = a;
      a: {
        a = this.C;
        var b;
        for (b = 0; b < a.A.length; b++)
          if (a.A[b].A == this) {
            a.A[b] = a.A[a.A.length - 1];
            a.A.pop();
            break a;
          }
        for (b = 0; b < a.B.length; b++) {
          var c = a.B[b];
          if (c.A == this) {
            a.C.push(c);
            break;
          }
        }
      }
      this.G(this.sa, this);
    }
  };
  FK.prototype.cancel = function(a) {
    this.finish(!0, a);
  };
  function MK() {
    IB.call(this);
    this.G = this;
  }
  C(MK, IB);
  y = MK.prototype;
  y.jf = h();
  y.hf = h();
  y.Nc = w(!1);
  y.zc = w(!1);
  y.Ne = h();
  y.se = w(!1);
  y.vf = w(!1);
  y.rf = h();
  y.xf = h();
  y.te = h();
  y.ue = h();
  y.sf = h();
  y.re = h();
  y.qf = h();
  y.kf = function(a, b) {
    var c = this.S.get();
    c && (R(Og(c), a), zB(this.S, b));
  };
  y.$d = w("n");
  y.Lc = h();
  y.Nd = h();
  y.Jc = w(!1);
  function NK(a, b, c, d) {
    this.D = a;
    this.K = b;
    this.H = c;
    this.I = d;
    this.B = !1;
    this.C = [];
    this.A = {};
    this.G = {};
    this.F = {};
    this.J = 0;
  }
  function OK(a, b, c, d, e) {
    PK(a, b, c, d, !1, e);
  }
  function QK(a, b, c, d) {
    PK(a, b, !1, c, !0, d);
  }
  function RK(a, b, c, d, e) {
    var f = e || null,
      g = a.A[b];
    g || ((g = {}), (a.A[b] = g));
    var k = g[f];
    e = !!k;
    k || ((k = []), (g[f] = k));
    b = new SK(b, f, c, d);
    k.push(b);
    c = a.J++;
    a.G[c] = b;
    return e;
  }
  function PK(a, b, c, d, e, f) {
    f ||
      ("drag" != b && "dragstart" != b && "dragend" != b) ||
      ((f = 0), (f = jj ? f : qj[f]));
    if (!RK(a, b, c, d, f)) {
      var g = f || null;
      c = function(c, d) {
        TK(a, b, g, c, d);
      };
      e = e ? a.D.Sb(b, null, c, f) : a.D.yc(a.K, a.H, b, null, c, f);
      c = a.F[b];
      c || ((c = {}), (a.F[b] = c));
      c[g] = e;
    }
  }
  function TK(a, b, c, d, e) {
    d.na("scene-async-event-handler");
    if (!a.B) {
      a.B = !0;
      var f = a.I;
      f.K.push(a);
      Br(f.B);
    }
    "scrollwheel" == b &&
      F(e.Ld) &&
      F(e.Cf) &&
      Math.abs(e.Ld) >= Math.abs(e.Cf) &&
      zl(e);
    a.C.push(new UK(b, c, e, d));
  }
  function UK(a, b, c, d) {
    this.type = a;
    this.qualifier = b;
    this.event = c;
    this.sa = d;
  }
  function SK(a, b, c, d) {
    this.yb = a;
    this.qualifier = b;
    this.A = c;
    this.jb = d;
  }
  function VK(a, b, c, d) {
    this.A = a;
    this.F = b;
    this.D = c;
    this.B = d;
    this.C = !1;
  }
  var WK = "ptrdown ptrhover ptrout ptrup dragstart drag dragend".split(" ");
  function XK(a) {
    this.H = !0;
    this.I = a;
    this.F = null;
    this.B = {};
    this.G = [];
    this.K = this.L = 0;
    this.J = -1;
    this.A = 0;
    this.C = !1;
    this.D = new Fz(-1, -1);
    for (a = 0; a < WK.length; ++a) {
      var b = WK[a],
        c = G(this.M, this, b);
      OK(this.I, b, !0, c);
    }
  }
  function YK(a, b, c, d, e) {
    var f = a.L++;
    e = e ? a.J-- : a.K++;
    d = new ZK(b, c, d, e, f);
    a.G[f] = d;
    b = "" + b + ":" + c;
    c = a.B[b];
    c ? a.C && ((c = kb(c)), (a.B[b] = c)) : ((c = []), (a.B[b] = c));
    c.push(d);
    return f;
  }
  function $K(a, b) {
    var c = a.G[b];
    if (c) {
      for (var d = "" + c.yb + ":" + c.A, e = a.B[d], f = 0; f < e.length; ++f)
        if (c == e[f]) {
          a.C && ((e = kb(e)), (a.B[d] = e));
          e.splice(f, 1);
          break;
        }
      delete a.G[b];
    }
  }
  function IK(a, b) {
    0 != a.A && (0 < a.A && a.A--, b && ((b.x = a.D.x), (b.y = a.D.y)));
  }
  XK.prototype.M = function(a, b, c) {
    if (this.H) {
      if ("ptrhover" == a && ((this.D.x = c.x), (this.D.y = c.y), 0 != this.A))
        return;
      var d = this.F && this.F.B.la;
      d = d && gb(aL, a) ? wE(d, c.x, c.y) : null;
      bL(this, a, c, d, b);
    }
  };
  function bL(a, b, c, d, e) {
    a.C = !0;
    c = new VK(c, b, d, e);
    e = d ? d.A() : cL;
    d = [];
    for (var f = 0; f < e.length; ++f) {
      var g = a.B["" + b + ":" + e[f]];
      g && d.push.apply(d, g);
    }
    ob(d, function(a, b) {
      return a.ah - b.ah;
    });
    for (b = 0; b < d.length; ++b) d[b].jb(c);
    a.C = !1;
  }
  var aL = ["ptrdown", "ptrhover", "ptrup"],
    cL = [1, 0];
  function ZK(a, b, c, d, e) {
    this.yb = a;
    this.A = b;
    this.jb = c;
    this.ah = d;
    this.id = e;
  }
  function dL(a, b, c, d, e, f, g, k, l, m, n, p, q, t, r) {
    VA.call(this);
    var v = this;
    this.yn = t;
    this.S = CB(0);
    this.S.listen(this.pl, this);
    this.G = CB(0, this);
    this.th = CB(0, this);
    this.C = CB(0);
    this.C.listen(this.ql, this);
    this.qa = CB(0);
    nK("sc", function() {
      return v.C.get() ? "" + mo(v.C.get()) : "";
    });
    this.Tn = BB(0, this);
    this.ea = this.la = this.Ga = !1;
    this.A = f;
    this.M = new wK(e, f, l, p);
    this.H = g;
    this.eh = r;
    this.Cn = BB(0, this);
    this.R = CB(0, this);
    this.width = BB(0);
    this.height = BB(0);
    this.T = BB(0);
    this.T.listen(this.qh, this);
    this.D = CB(0);
    this.Fb = new Eg();
    this.Pb = new ko();
    this.xa = null;
    this.N = 0;
    this.sh = BB(0);
    this.Ja = BB(0);
    this.B = this.I = new MK();
    wB(this.B.S, this.S, n);
    nK("drv", function() {
      return v.B.$d();
    });
    this.view = q;
    this.O = null;
    this.K = CB(0);
    this.Fn = CB(0, !0);
    this.Jn = CB(0, 0);
    this.gh = new vB(!0, void 0, null);
    this.Aa = new EK(this, k);
    this.mb = b;
    this.Sn = d;
    this.L = !1;
    this.aa = this.Y = 0;
    this.ma = !1;
    this.za = this.ja = null;
    this.F = new gA(
      100,
      function(a) {
        var b = v.S.get(),
          c = v.D.get();
        v.B === v.I ? (v.F.A(), v.F.start(a)) : (R(c, b), zB(v.D, a));
      },
      "stableCameraUpdaterFuse"
    );
    this.J = new Fz(-1, -1);
    this.Pn = m;
    this.ia = this.ie = null;
    this.zn = n;
  }
  C(dL, VA);
  y = dL.prototype;
  y.ga = function(a) {
    this.O && this.O.A();
    this.M.ta(a);
  };
  function uF(a, b, c) {
    var d = a.M;
    b !== d.B && (d.B = b) && d.D.A !== b && ((d = d.D), (d.A = b), Ar(d));
    a.qh(c);
  }
  function JK(a) {
    a.Ga = !0;
    a.F.A();
    a.H.A++;
  }
  y.rb = function(a, b) {
    var c = this.C.get();
    R(c, a);
    zB(this.C, b);
  };
  function LK(a, b) {
    var c = a.width.get();
    a = a.height.get();
    b = Og(b);
    Ug(b, c);
    Wg(b, a);
  }
  function eL(a, b) {
    LK(a, b);
    (a = a.C.get()) && MB(mo(a)) && (b.data[3] = 13.1);
  }
  function fL(a, b) {
    a.O
      ? a.O.start(b)
      : ((a.O = new gA(
          300,
          function(b) {
            gL(a, b);
          },
          "resize"
        )),
        gL(a, b));
  }
  function gL(a, b) {
    var c = new Hg();
    Ug(c, a.width.get() || 0);
    Wg(c, a.height.get() || 0);
    a.view.W(c, b);
    if (a.A.tb) {
      var d = a.A.tb.A;
      a.yn(
        !(
          d.drawingBufferWidth == d.canvas.width &&
          d.drawingBufferHeight == d.canvas.height
        ),
        b
      );
    }
    yB(a.S) &&
      yB(a.C) &&
      ((d = a.S.get()), (d = Ng(d)), d.V() != c.V() || Vg(d) != Vg(c)) &&
      (d.V(), c.V(), R(Og(a.D.get()), c), a.B.kf(c, b), zK(a.M, "resize"));
  }
  function hL(a, b, c) {
    b.na("stableViewport");
    AK(a.M, function() {
      c(b);
      b.done("stableViewport");
    });
  }
  y.zc = function(a, b, c, d, e) {
    function f() {
      k();
      IK(g.H);
    }
    var g = this;
    e = void 0 === e ? h() : e;
    if (b && 4 === mo(b)) return e(d), !1;
    c = c ? c.D() : new EB();
    if (this.Ga || this.la || this.ea) return e(d), !1;
    var k = d.va(
      function() {
        e(d);
      },
      "moveTo",
      "mt0",
      "mt1"
    );
    b && Sl(d, "sc", "" + mo(b));
    var l = yB(this.S) && yB(this.C);
    if (!l) {
      if (!b)
        if (this.xa) b = this.xa;
        else return k(), !1;
      this.xa = Ld(b);
      if (!a) return iL(this.C, b, d), k(), !0;
    }
    var m = this.C.get(),
      n = this.S.get();
    l || m || (m = new ko());
    l || n || ((n = new Eg()), eL(this, n));
    a &&
      En(Jg(n), Jg(a)) &&
      Fn(Tg(Lg(n)), Tg(Lg(a))) &&
      Fn(N(Lg(n), 1), N(Lg(a), 1)) &&
      Fn(N(Lg(n), 2), N(Lg(a), 2)) &&
      Fn(Ig(n), Ig(a)) &&
      (a = null);
    b && KB(m, b) && (b = null);
    if (!a && !b && !c.B) return k(), !1;
    a && (R(this.Fb, a), (a = this.Fb), L(a, 2) || LK(this, a));
    b && (R(this.Pb, b), (b = this.Pb));
    if (
      (m && 2 === mo(m) && 7 == M(no(m), 1, 99)) ||
      (b && 2 === mo(b) && 7 == M(no(b), 1, 99))
    )
      c.A = 2;
    !d.bd() &&
      m &&
      b &&
      L(m, 0) &&
      L(b, 0) &&
      mo(m) != mo(b) &&
      (d.ub("transitions", "switch_map_mode"),
      NB(m) && !a && this.eh && (a = this.eh.A()));
    this.H.A++;
    iL(this.qa, b || m, d);
    if (l && !c.B && this.B.zc(a, b, c, d, f)) return !0;
    jL(this, a || n, b || m, l, d, f);
    return !0;
  };
  function jL(a, b, c, d, e, f) {
    d && kL(a, a.I, null, null, e);
    a.N += 1;
    var g = a.N,
      k = Ld(c),
      l = Ld(b);
    a.mb.load(
      c,
      function(b, c) {
        if (a.N === g) {
          a.ea = !0;
          var m = a.C.get() || new ko();
          R(m, k);
          kL(a, b, l, m, c);
          d || ((a.H.H = !0), e.ua("scnd"), e.dispatchEvent("scnd"));
          a.ea = !1;
        }
        f(c);
      },
      e
    );
  }
  function kL(a, b, c, d, e) {
    if (b !== a.B) {
      a.M.F = !1;
      var f = a.B;
      f.Ne(e);
      Oj(a.ie);
      a.B = b;
      b.jf(d);
      a.ie = um(a.B, "user-input-event", a.Pn);
      f !== a.I && (xB(f.M, e), xB(f.D, e), xB(f.S, e), xB(f.C, e));
      f !== a.I && xB(a.gh, e);
      b !== a.I &&
        (wB(b.M, a.Tn, e), wB(b.D, a.D, e), wB(b.S, a.S, e), wB(b.C, a.C, e));
      d && iL(a.C, d, e);
      if (c) {
        f = a.width.get();
        var g = a.height.get();
        d = new Hg();
        Ug(d, f);
        Wg(d, g);
        c
          ? (b.Nc(c, d),
            LK(a, c),
            yB(a.S) ? (R(a.S.get(), c), zB(a.S, e)) : a.S.set(Ld(c), e),
            yB(a.D) || a.D.set(Ld(c), e))
          : ((c = a.S.get()), b.Nc(c, d) && (LK(a, c), zB(a.S, e)));
      }
      b !== a.I && wB(a.gh, b.eb, e);
      b.hf(a, e);
      zB(a.G, e);
      zB(a.th, e);
      zB(a.R, e);
      b !== a.I ? a.F.start(e) : a.F.A();
      "application_init" == e.F && !e.Sc.drv && Sl(e, "drv", b.$d());
    }
  }
  function lL(a, b) {
    a.ia && (a.ia(a.zn, b), (a.ia = null));
  }
  y.Nd = function(a, b, c, d) {
    this.B.G &&
      (b.bd() || b.ub("scene", "scroll_zoom"), this.B.G.Nd(a, b, c, d));
  };
  function mL(a, b) {
    lL(a, b.A);
    var c = a.C.get();
    if (!c || MB(mo(c))) return !1;
    c = b.A;
    var d = b.B;
    d.ub("scene", "click_scene");
    nL(a, c.x, c.y, a.L, d, b.D);
    a.B.re(HB(c), d);
    return !0;
  }
  function oL(a, b) {
    var c = b.A,
      d = b.B;
    nL(a, c.x, c.y, a.L, d, b.D);
    a.B.I && ((b = HB(c)), hF(a.B.I, b.x, b.y, d));
  }
  function pL(a, b, c) {
    if (
      (!(c.ctrlKey || c.metaKey || c.altKey) || c.shiftKey) &&
      a.B.L &&
      ((a = a.B.L), !a.H)
    )
      switch (c.keyCode) {
        case 38:
        case 87:
          rF(a, !0, b, 3);
          break;
        case 40:
        case 83:
          rF(a, !1, b, 4);
          break;
        case 37:
        case 65:
          sF(a, !0, !0, b);
          break;
        case 39:
        case 68:
          sF(a, !1, !0, b);
          break;
        case 107:
        case 187:
          a.Lc(1, b, void 0, void 0, !0);
          a.qa.C(bA, 32);
          break;
        case 109:
        case 189:
          a.Lc(-1, b, void 0, void 0, !0), a.qa.C(cA, 32);
      }
  }
  function nL(a, b, c, d, e, f) {
    a.Y = b;
    a.aa = c;
    a.L = d;
    qL(a, e, f);
  }
  function qL(a, b, c) {
    a.C.get();
    var d = a.B.la,
      e = a.B.se(a.Y, a.aa);
    a.B.vf(a.L)
      ? a.K.set("move", b)
      : e
        ? a.K.set("pointer", b)
        : F(c) || d
          ? ("pointer" !== a.K.get() && a.K.set("auto", b),
            0 == a.H.A && (F(c) ? rL(a, c, b) : rL(a, wE(d, a.Y, a.aa), b)))
          : a.K.set("auto", b);
  }
  function rL(a, b, c) {
    b && b.B() ? a.K.set("pointer", c) : a.K.set("auto", c);
  }
  y.Lc = function(a, b, c, d, e) {
    this.B.G &&
      (b.bd() || b.ub("scene", "scroll_zoom"), this.B.G.Lc(a, b, c, d, e));
  };
  function sL(a, b, c) {
    if (a.B.R) return sL(a.B.R, b, c);
    a = c || new Fz(0, 0);
    a.x = 0;
    a.y = 0;
    return a;
  }
  y.Jc = function() {
    return this.B.G ? this.B.G.Jc() : !1;
  };
  y.pl = function(a) {
    var b = this.C.get();
    if (b && MB(mo(b)) && (b = this.S.get()) && b && L(b, 0)) {
      var c = Jg(b);
      if (L(c, 2) && L(c, 1) && L(c, 0)) {
        var d = Qg(c);
        -90 > d ||
          90 < d ||
          isNaN(d) ||
          ((d = Pg(c)),
          -180 > d ||
            180 < d ||
            isNaN(d) ||
            ((c = Rg(c)),
            -10898 > c ||
              isNaN(c) ||
              !L(b, 3) ||
              ((c = Ig(b)),
              1 > c ||
                179 < c ||
                isNaN(c) ||
                !L(b, 2) ||
                ((b = Ng(b)),
                L(b, 0) && L(b, 1) && (1 > b.V() || 1 > Vg(b) || b.V())))));
      }
    }
    b = this.Aa;
    b.B || b.C || this.ma || (this.F.A(), this.F.start(a));
    qL(this, a);
  };
  y.ql = function(a) {
    var b = this.C.get();
    b && iL(this.qa, b, a);
  };
  y.qh = function(a) {
    var b = this.T.get();
    if (b) {
      var c = this.M.B;
      c &&
        (c.D.Rb(b.top, b.right, b.bottom, b.left, a),
        c.aa && (GE(c, c.aa, a), (c.T = !1)),
        yE(c));
    }
  };
  y.animate = function(a, b, c) {
    return this.Aa.animate(a, b, c);
  };
  function bF(a, b, c, d, e) {
    var f = a.S.get(),
      g = a.C.get();
    b = new FB(f, g, b, c);
    kL(a, a.I, null, null, d);
    uF(a, null, d);
    qL(a, d);
    a.Sn.load(b, d, function(b, c) {
      a.T.get();
      tL(c, function(c) {
        uL(a, b, e, c);
      });
    });
  }
  function uL(a, b, c, d) {
    a.la = !0;
    HK(a.Aa, b, d, function(b) {
      var d = a.S.get(),
        e = a.C.get();
      a.mb.load(
        e,
        function(b, f) {
          a.la = !1;
          kL(a, b, d, e, f);
          c(f);
        },
        b
      );
    });
  }
  var vL = 1 / 6;
  function iL(a, b, c) {
    yB(a) ? (R(a.get(), b), zB(a, c)) : a.set(Ld(b), c);
  }
  function wL(a) {
    UJ.call(this, a);
    this.B = BB(0);
    this.A = BB(0);
    this.C = !1;
  }
  C(wL, UJ);
  wL.prototype.bind = function(a, b, c) {
    wB(this.B, a, c);
    wB(this.A, b, c);
    this.B.listen(this.G, this);
    this.A.listen(this.H, this);
  };
  wL.prototype.F = function(a, b) {
    var c = this.A.get();
    if (!c) return !1;
    xL.data[1] = a[0];
    xL.data[2] = a[1];
    Sg(xL, a[2]);
    sL(c, xL, yL);
    b[0] = yL.x;
    b[1] = yL.y;
    return !0;
  };
  wL.prototype.G = function(a) {
    var b = this;
    this.B.get() &&
      this.A.get() &&
      !this.C &&
      ((this.C = !0),
      jA(
        function() {
          b.C = !1;
          XJ(b);
        },
        0,
        a,
        "effect-surface-camera-update"
      ));
  };
  wL.prototype.H = function() {
    this.B.get() && this.A.get() && !this.C && XJ(this);
  };
  var xL = new Fg(),
    yL = new Fz(0, 0);
  function zL(a, b, c) {
    bK.call(this, c, 4, 105);
    this.H = a;
    this.A = b;
    this.B = eK(this);
    this.D = cK(this);
    this.G = dK(this);
  }
  C(zL, bK);
  zL.prototype.M = function(a) {
    pK(this.A, this.B.get() || "");
    qK(this.A, !!this.D.get());
    rK(this.A, this.G.get() || 0);
    this.H.fill(this.A);
    KJ(this.H, a.va(h(), "scene.template-render"));
  };
  zL.prototype.W = h();
  function AL(a, b, c) {
    c = void 0 === c ? !1 : c;
    VA.call(this);
    this.D = a;
    this.I = b;
    this.J = c;
    this.K = [];
    this.B = this.C = !1;
    ++BL;
  }
  C(AL, VA);
  function CL(a) {
    a.ld();
    a.I.register(a);
  }
  function DL(a) {
    a.B || (a.reset(), (a.B = !0));
  }
  AL.prototype.ga = function() {
    for (var a = 0; a < this.K.length; ++a) $K(this.D, this.K[a]);
    this.K.length = 0;
    this.reset();
    hb(this.I.B, this);
  };
  AL.prototype.ld = h();
  function EL(a, b, c, d) {
    b = YK(a.D, b, c, d, a.J);
    a.K.push(b);
  }
  function FL(a, b) {
    if (!a.C) {
      var c;
      if ((c = !b.C))
        if (((c = a.I), c.A || !gb(c.B, a))) c = !1;
        else {
          for (var d = 0; d < c.B.length; ++d) {
            var e = c.B[d];
            e !== a && DL(e);
          }
          c.A = a;
          c = !0;
        }
      c && (b.C || (b.C = !0), (a.C = !0));
    }
  }
  AL.prototype.reset = function() {
    if (this.C && this.C) {
      this.C = !1;
      var a = this.I;
      if (a.A && a.A === this) {
        for (var b = 0; b < a.B.length; ++b) {
          var c = a.B[b];
          c !== this && c.B && (c.B = !1);
        }
        a.A = null;
      }
    }
  };
  var BL = 0;
  function GL(a, b, c, d, e, f, g) {
    AL.call(this, a, b, void 0 === g ? !1 : g, f);
    this.O = d;
    this.M = e;
    this.N = f;
    this.L = c;
    this.H = null;
    this.A = !1;
    this.F = this.G = null;
    CL(this);
  }
  C(GL, AL);
  GL.prototype.ld = function() {
    EL(this, "ptrdown", this.O, G(this.T, this));
    EL(this, "dragstart", 0, G(this.R, this));
    EL(this, "ptrup", 0, G(this.Y, this));
  };
  function HL(a) {
    a.H = null;
    a.G = null;
    null != a.F && (kA(a.F), (a.F = null));
    a.A = !1;
  }
  GL.prototype.R = function() {
    HL(this);
  };
  GL.prototype.T = function(a) {
    var b = "touchstart" === a.A.type;
    if (IL(this, a) || b)
      this.G && HL(this),
        this.A
          ? ((this.A = !1), (this.G = a.A))
          : ((this.A = !0), JL(this, a.B), (this.H = a.D));
  };
  GL.prototype.Y = function(a) {
    var b = "touchend" === a.A.type;
    if ((IL(this, a) || b) && this.G)
      if (a.C || this.B) HL(this);
      else {
        b = new Ul(this.L, "click_2");
        var c = new VK(a.A, a.F, this.H, b),
          d = this.N.A;
        lL(d, c.A);
        var e = c.D,
          f = c.A;
        c = c.B;
        c.ub("scene", "click_scene");
        nL(d, f.x, f.y, d.L, c, e);
        d.B.qf(HB(f), c);
        b.done("main-actionflow-branch");
        FL(this, a);
        HL(this);
        this.reset();
      }
  };
  function JL(a, b) {
    a.F = jA(
      G(function() {
        this.A = !1;
      }, a),
      250,
      b,
      "sceneDblClick"
    );
  }
  function IL(a, b) {
    b = b.A;
    switch (a.M) {
      case 0:
        return sj(b);
      case 1:
        return rj(b, 2) || (rj(b, 0) && !sj(b));
      default:
        return !1;
    }
  }
  function KL(a, b, c, d, e) {
    AL.call(this, a, b, void 0 === e ? !1 : e, d);
    this.M = c;
    this.L = d;
    this.H = this.G = !1;
    this.A = this.F = null;
    CL(this);
  }
  C(KL, AL);
  y = KL.prototype;
  y.ld = function() {
    EL(this, "ptrdown", this.M, G(this.sl, this));
    EL(this, "ptrup", 0, G(this.tl, this));
    EL(this, "dragstart", 0, G(this.rl, this));
  };
  y.reset = function() {
    AL.prototype.reset.call(this);
    this.H = this.G = !1;
    this.F && ($K(this.D, this.F), (this.F = null));
    this.A && ($K(this.D, this.A), (this.A = null));
  };
  y.sl = function(a) {
    a = a.A;
    this.B || ("mousedown" === a.type && !rj(a, 0)) || (this.H = this.G = !0);
  };
  y.tl = function(a) {
    a = a.A;
    ("mouseup" !== a.type || rj(a, 0)) && this.reset();
  };
  y.rl = function(a) {
    if (!this.B && this.G && ((this.G = !1), this.H && !a.C)) {
      var b = G(this.Kk, this);
      this.F = YK(this.D, "drag", 0, b, this.J);
      b = G(this.Jk, this);
      this.A = YK(this.D, "dragend", 0, b, this.J);
      if (null === this.F || null === this.A) this.reset();
      else {
        this.H = !1;
        FL(this, a);
        b = this.L.A;
        lL(b, a.A);
        var c = a.A,
          d = a.B;
        b.ma = !0;
        b.F.A();
        d.ub("scene", "move_camera");
        d.ua("dr0");
        d.na("dragging-branch");
        nL(b, c.x, c.y, !0, d, a.D);
        b.H.A++;
        a = HB(c);
        b.B.te(a, d);
        b.za = a;
        b.ja = a;
      }
    }
  };
  y.Kk = function(a) {
    if (!this.B && this.C) {
      var b = this.L.A,
        c = a.A,
        d = HB(c);
      if (c.touches) {
        if (((c = a.B), b.B.G))
          if ("touchstart" == d.type || "touchend" == d.type) b.B.te(d, c);
          else {
            var e = d.ze;
            if (e)
              if (b.Jc()) {
                var f = b.ja.ze;
                1 < Math.abs(e - f) &&
                  b.B.G.Nd(Math.log(e / f) / Math.log(2), c, d.x, d.y);
              } else if ((e = Math.round(Math.log(e / b.za.ze) / Math.log(2))))
                b.B.G.Nd(e, c, d.x, d.y), (b.za = d);
            b.B.ue(d, c);
          }
      } else b.B.ue(d, a.B);
      b.ja = d;
      a.C || (a.C = !0);
    }
  };
  y.Jk = function(a) {
    if (!this.B) {
      if (this.C) {
        a.C || (a.C = !0);
        var b = this.L.A,
          c = a.A,
          d = a.B;
        b.ma = !1;
        b.F.start(d);
        IK(b.H);
        b.B.sf(HB(c), d);
        nL(b, c.x, c.y, !1, d, a.D);
        d.ua("dr1");
        d.done("dragging-branch");
      }
      this.reset();
    }
  };
  function LL(a, b, c, d, e, f, g) {
    AL.call(this, a, b, void 0 === g ? !1 : g, f);
    this.N = d;
    this.L = f;
    this.O = e;
    this.M = c;
    this.G = this.A = null;
    this.F = !1;
    this.H = null;
    CL(this);
  }
  C(LL, AL);
  y = LL.prototype;
  y.ld = function() {
    EL(this, "ptrdown", this.N, G(this.wl, this));
    EL(this, "dragstart", 0, G(this.ul, this));
    EL(this, "ptrup", 0, G(this.xl, this));
  };
  y.ul = function() {
    this.A && ML(this);
  };
  y.wl = function(a) {
    if (NL(this, a))
      if ((this.A && !this.F && ML(this), this.F)) ML(this);
      else {
        this.F = !0;
        var b = a.B;
        this.H = jA(G(this.Ik, this), 250, b, "sceneExclusiveClick");
        this.A = a;
      }
  };
  y.xl = function(a) {
    if (NL(this, a))
      if (this.A)
        if (this.F) this.G = a;
        else {
          if (!a.C && !this.B) {
            var b = OL(this, this.A, a);
            mL(this.L.A, b) && FL(this, a);
            b.B.done("main-actionflow-branch");
          }
          ML(this);
        }
      else ML(this);
  };
  y.Ik = function() {
    this.F = !1;
    if (this.G && this.A) {
      if (!this.G.C && !this.B) {
        var a = OL(this, this.A, this.G);
        mL(this.L.A, a) && FL(this, this.G);
        a.B.done("main-actionflow-branch");
      }
      ML(this);
    }
  };
  function OL(a, b, c) {
    a = new Ul(a.M, "click_1");
    return new VK(b.A, c.F, b.D, a);
  }
  function ML(a) {
    a.reset();
    null != a.H && (kA(a.H), (a.H = null));
    a.F = !1;
    a.A = null;
    a.G = null;
  }
  function NL(a, b) {
    b = b.A;
    switch (a.O) {
      case 0:
        return sj(b);
      case 1:
        return rj(b, 2) || (rj(b, 0) && !sj(b));
      default:
        return !1;
    }
  }
  function PL(a, b, c, d, e) {
    AL.call(this, a, b, void 0 === e ? !1 : e, d);
    this.F = c;
    this.G = d;
    this.A = null;
    CL(this);
  }
  C(PL, AL);
  y = PL.prototype;
  y.ld = function() {
    EL(this, "ptrhover", 0, G(this.Lk, this));
    EL(this, "ptrdown", 0, G(this.yl, this));
    EL(this, "ptrout", 0, G(this.Mk, this));
    EL(this, "ptrup", this.F, G(this.zl, this));
  };
  y.Lk = function(a) {
    var b = a.D;
    var c = this.F;
    c = !b && (0 == c || 1 == c);
    var d = !(!b || !b.D(this.F));
    c = c || d;
    d = b && this.A && this.A.C(b);
    var e = !this.A && c;
    e = e || (this.A && c && !d);
    !this.A || (b && d) || (this.A = null);
    e &&
      (a.B.bd() || a.B.ub("scene_hover", "hover_on_map"),
      (this.A = b),
      oL(this.G.A, a));
  };
  y.yl = function() {
    this.A && (this.A = null);
  };
  y.zl = function(a) {
    this.A = a.D;
    oL(this.G.A, a);
  };
  y.Mk = function() {
    !this.B && this.A && (this.A = null);
  };
  function QL(a, b) {
    this.C = a;
    this.D = b;
    this.B = [];
    this.A = null;
  }
  QL.prototype.register = function(a) {
    gb(this.B, a) || this.B.push(a);
  };
  function RL(a, b, c) {
    b = new GL(a.C, a, a.D, 0, void 0 === c ? 0 : c, b, !1);
    a.A && DL(b);
    return b;
  }
  function SL(a, b, c, d, e, f, g, k, l, m, n, p, q, t, r, v, x) {
    VA.call(this);
    this.width = CB(0);
    this.width.listen(this.ea, this);
    this.height = CB(0);
    this.height.listen(this.ea, this);
    this.S = BB(0);
    this.J = BB(0);
    this.G = BB(0);
    this.G.listen(this.Fb, this);
    this.Ja = BB(0);
    this.T = BB(0, MD(d));
    this.O = BB(0);
    this.ja = BB(0);
    this.N = BB(0);
    this.F = BB(0);
    this.Ga = BB(0);
    this.mb = BB(0);
    this.Aa = BB(0);
    this.aa = BB(0);
    this.Y = new gB(f);
    this.C = g;
    hm(l, "render", new jK(g));
    var z = new lK(this.J);
    wB(z.A, this.G, n);
    hm(l, "camera_change", z);
    this.L = Bd(b, 0);
    this.R = O(b, 81) || "scene";
    this.M = O(b, 82) || "viewport";
    this.B = f = new NK(f, this.R, this.M, g);
    this.D = new oK();
    this.canvas = null;
    this.I = new sK(e);
    this.D.data[1] = this.L;
    qK(this.D, this.L);
    this.D.data[3] = this.R;
    this.D.data[4] = this.M;
    e = TL(this);
    this.D.data[5] = e;
    e = this.I;
    var A = e.C;
    z = e.D;
    if (A.document()) {
      var H = A.A[z];
      if (H && H.elements) {
        var B = H.elements[0];
        A = A.document().createElement(B);
        1 != H.Bn && A.setAttribute("jsl", "$u " + z + ";");
        z = A;
      } else z = null;
    } else z = null;
    e.A = z;
    e.A && (e.A.__attached_template = e);
    a && a.appendChild(e.A);
    z = "rtl" == dH(e.A);
    e.B.A.Ea = z;
    this.I.fill(this.D);
    KJ(this.I);
    e = Ri("canvas", void 0, a)[0];
    if ((this.canvas = c.D()))
      (z = this.canvas.A),
        (z.id = e.id),
        (z.className = e.className),
        (H = e.parentNode) && H.replaceChild(z, e);
    e = Ri("div", "widget-scene-imagery-render", a);
    (c = c.B) &&
      1 == e.length &&
      ((z = e[0]),
      (c.id = z.id),
      (c.className = z.className),
      (e = e[0]),
      (z = e.parentNode) && z.replaceChild(c, e));
    c = null;
    a = Ri("div", "widget-scene-effects", a);
    1 == a.length && (c = a[0]);
    this.qa = new wL(c || document.createElement("div"));
    this.qa.bind(this.S, this.N, n);
    a = Bd(b, 2) && !Bd(b, 7) && 1 === this.T.get();
    a = CB(0, !!a);
    wB(this.O, a, n);
    this.K = new XK(f);
    this.K.H = !1;
    this.H = new QL(this.K, l);
    this.Pb = r.A || new yr(g);
    var J;
    this.canvas
      ? (J = new vK(this.I, this.D, this.canvas, this.C, 6, 104, MD(d), p))
      : (J = new zL(this.I, this.D, this.C));
    this.view = J;
    b = this.A = new dL(
      b,
      t,
      r,
      v,
      this.Pb,
      d,
      this.K,
      k,
      l,
      this,
      n,
      m,
      this.view,
      q,
      x
    );
    d = this.aa;
    wB(b.Ja, this.ja, n);
    wB(b.T, d, n);
    wB(this.view.B, this.A.K, n);
    wB(this.view.D, this.A.Fn, n);
    wB(this.view.G, this.A.Jn, n);
    wB(this.A.width, this.width, n);
    wB(this.A.height, this.height, n);
    wB(this.A.sh, this.O, n);
    wB(this.S, this.A.S, n);
    wB(this.J, this.A.D, n);
    wB(this.G, this.A.C, n);
    wB(this.Ja, this.A.qa, n);
    wB(this.N, this.A.R, n);
    wB(this.F, this.A.Cn, n);
    wB(this.Ga, BB(0, this.A), n);
    wB(this.mb, this.A.G, n);
    wB(this.Aa, this.A.th, n);
    UL(this);
    this.K.F = this.A;
    n = this.H;
    b = new KL(n.C, n, 0, new VL(this.A), !1);
    n.A && DL(b);
    this.ia = b;
    n = this.H;
    b = new PL(n.C, n, 0, new WL(this.A), !1);
    n.A && DL(b);
    this.za = b;
    n = this.H;
    b = new LL(n.C, n, n.D, 0, 0, new XL(this.A), !1);
    n.A && DL(b);
    this.xa = b;
    n = new YL(this.A);
    this.la = RL(this.H, n, 0);
    this.ma = RL(this.H, n, 1);
  }
  C(SL, VA);
  function UL(a) {
    a.L &&
      (OK(a.B, "ptrdown", !1, function(b, c) {
        a.A.B.rf(HB(c), b);
      }),
      OK(a.B, "ptrup", !1, function(b, c) {
        a.A.B.xf(HB(c), b);
      }),
      OK(a.B, "ptrin", !0, function(b, c) {
        var d = a.A;
        d.B.I &&
          ((d = d.B.I),
          (c = HB(c)),
          iF(d, c),
          fE(d.A.C, !0),
          qE(d.A, c.x, c.y, b));
      }),
      OK(a.B, "ptrout", !0, function(b, c) {
        b = a.A;
        b.B.I && ((b = b.B.I), iF(b, HB(c)), fE(b.A.C, !1));
      }),
      OK(a.B, "scrollwheel", !0, function(b, c) {
        var d = a.A;
        if (
          !((c.ij && !d.Jc()) || Math.abs(c.Ld) < Math.abs(c.Cf) || 0 === c.Ld)
        ) {
          lL(d, c);
          nL(d, c.x, c.y, d.L, b);
          document.body.focus();
          if (d.Jc()) {
            var e = c.Bl;
            1 < Math.abs(e) && (e = vb(0 > e ? -1 : 1, e, vL));
            e = c.ctrlKey ? -e : -e / 4;
          } else e = 0 >= c.Ld ? 1 : -1;
          d.Lc(e, b, c.x, c.y, !0);
        }
      }),
      ZL(a, 38, !1),
      ZL(a, 40, !1),
      ZL(a, 37, !1),
      ZL(a, 39, !1),
      ZL(a, 32, !1),
      ZL(a, 65, !1),
      ZL(a, 68, !1),
      ZL(a, 83, !1),
      ZL(a, 87, !1),
      ZL(a, 78, !1),
      ZL(a, 85, !1),
      ZL(a, 82, !1),
      ZL(a, 97, !1),
      ZL(a, 98, !1),
      ZL(a, 99, !1),
      ZL(a, 100, !1),
      ZL(a, 101, !1),
      ZL(a, 102, !1),
      ZL(a, 103, !1),
      ZL(a, 104, !1),
      ZL(a, 105, !1),
      ZL(a, 107, !0),
      ZL(a, 109, !0),
      ZL(a, 49, !1),
      ZL(a, 50, !1),
      ZL(a, 51, !1),
      ZL(a, 52, !1),
      ZL(a, 53, !1),
      ZL(a, 54, !1),
      ZL(a, 55, !1),
      ZL(a, 56, !1),
      ZL(a, 57, !1),
      ZL(a, 187, !0),
      ZL(a, 189, !0),
      $L(a, 91, !0),
      $L(a, 17, !0),
      $L(a, 38, !1),
      $L(a, 40, !1),
      $L(a, 37, !1),
      $L(a, 39, !1),
      $L(a, 65, !1),
      $L(a, 68, !1),
      $L(a, 83, !1),
      $L(a, 87, !1));
    RK(a.B, "resize", !0, function(b) {
      fL(a.A, b);
    });
    a.Y.yc(a.R, a.M, "contextmenu", null, $J);
  }
  function ZL(a, b, c) {
    c
      ? QK(
          a.B,
          "keydown",
          function(b, c) {
            pL(a.A, b, c);
          },
          b
        )
      : OK(
          a.B,
          "keydown",
          !1,
          function(b, c) {
            pL(a.A, b, c);
          },
          b
        );
  }
  function $L(a, b, c) {
    c
      ? QK(
          a.B,
          "keyup",
          function(b, c) {
            var d = a.A;
            d.B.L && tF(d.B.L, c, b);
          },
          b
        )
      : OK(
          a.B,
          "keyup",
          !1,
          function(b, c) {
            var d = a.A;
            d.B.L && tF(d.B.L, c, b);
          },
          b
        );
  }
  SL.prototype.ga = function(a) {
    this.Y.ta(a);
    this.A.ta(a);
    this.ia.ta(a);
    this.za.ta(a);
    this.xa.ta(a);
    this.la.ta(a);
    this.ma.ta(a);
  };
  SL.prototype.ea = function(a) {
    TK(this.B, "resize", null, a, null);
  };
  SL.prototype.Fb = function() {
    var a = TL(this);
    this.D.data[5] = a;
    KJ(this.I);
  };
  function TL(a) {
    return (a = a.G.get()) && !NB(a)
      ? "Map"
      : a && 2 === mo(a)
        ? "Photo"
        : a && 1 === mo(a)
          ? "Street View"
          : a && 5 === mo(a) ? "Video" : "Main Display";
  }
  function VL(a) {
    this.A = a;
  }
  function WL(a) {
    this.A = a;
  }
  function XL(a) {
    this.A = a;
  }
  function YL(a) {
    this.A = a;
  }
  function aM(a) {
    this.B = a;
    this.A = !1;
  }
  function tL(a, b) {
    b(a);
  }
  function KK(a, b) {
    a.A ? b(null) : ((a.A = !0), b(new bM(a.B)));
  }
  function bM(a) {
    this.A = a;
    new lo(P(this.A.A, 2)).data[0] = !1;
  }
  bM.prototype.D = w(0);
  bM.prototype.G = function() {
    return this.A.B;
  };
  bM.prototype.H = function() {
    return this.A.A;
  };
  function cM(a, b, c, d, e, f, g, k, l, m, n, p, q, t) {
    U.call(this, "SCW", [].concat(wa(arguments)));
  }
  C(cM, U);
  function dM() {}
  dM.prototype.load = function(a, b, c) {
    b.ua("tdfl0");
    c(new aM(a), b);
    b.ua("tdfl1");
    return new hA();
  };
  function eM(a, b, c, d, e, f, g, k, l, m, n, p, q, t, r, v) {
    m.getContext(function(b, z) {
      if (3 != M(d, 20, 1) && !b.tb && !b.Xb) {
        if (v) {
          v(z);
          return;
        }
        throw Error("Could not build a rendering context for the scene.");
      }
      var x = new dM();
      b = new SL(
        c,
        d,
        m,
        b,
        e,
        new aK(f, c),
        g,
        k,
        l,
        n,
        z,
        p,
        q,
        t,
        r,
        x,
        null
      );
      a(b);
    }, b);
    m.F();
  }
  function fM(a) {
    IC.call(
      this,
      a,
      "const float f=3.1415926;varying vec3 a;uniform vec4 b;attribute vec3 c;attribute vec2 d;uniform mat4 e;void main(){vec4 g=vec4(c,1);gl_Position=e*g;a=vec3(d.xy*b.xy+b.zw,1);a*=length(c);}",
      "precision highp float;const float h=3.1415926;varying vec3 a;uniform vec4 b;uniform float f;uniform sampler2D g;void main(){vec4 i=vec4(texture2DProj(g,a).rgb,f);gl_FragColor=i;}"
    );
    this.B = new gM(this);
    this.attributes = new hM(this);
  }
  I(fM, IC);
  function gM(a) {
    this.A = new UC("b", a);
    this.C = new WC("e", a);
    this.alpha = new RC("f", a);
    this.D = new QC("g", a);
  }
  function hM(a) {
    this.B = new MC("c", a);
    this.A = new MC("d", a);
  }
  function iM(a) {
    IC.call(
      this,
      a,
      "attribute vec3 a;attribute vec2 b;uniform mat4 c;varying vec3 d;void main(){gl_Position=c*vec4(a,1);d=vec3(b.xy,1);}",
      "precision mediump float;uniform float e;uniform sampler2D f;varying vec3 d;void main(){vec4 g=texture2DProj(f,d);gl_FragColor=vec4(g.rgb,g.a*e);}"
    );
    this.B = new jM(this);
    this.attributes = new kM(this);
  }
  I(iM, IC);
  function jM(a) {
    this.A = new WC("c", a);
    this.opacity = new RC("e", a);
    this.B = new QC("f", a);
  }
  function kM(a) {
    this.A = new MC("a", a);
    this.B = new MC("b", a);
  }
  function lM(a, b) {
    if (!b) return mM(a);
    try {
      zp(OA(a, 3553), b, 6408, 5121, 0);
    } catch (c) {
      return E.console && E.console.log(c), mM(a);
    }
    return b.width * b.height * 4;
  }
  function mM(a) {
    PA(a, 3553, 0, 1, 1, 6408, 5121, new Uint8Array([0, 0, 0, 0]));
    return 4;
  }
  function nM(a, b) {
    this.H = a;
    this.A = b;
    this.B = this.C = this.D = -1;
  }
  nM.prototype.F = function() {
    return (
      this.A.B.contains(this.D) &&
      this.A.B.contains(this.C) &&
      this.A.B.contains(this.B)
    );
  };
  function oM(a, b) {
    return a.A.B.contains(b) ? (EA(a.A.B, b), !0) : !1;
  }
  nM.prototype.G = function() {
    if (!oM(this, this.D)) {
      var a = this.H.A,
        b = this.A.createBuffer(),
        c = this.A.B;
      this.D = c.B.add(b, c.R, 4 * a.length, 0);
      this.A.bindBuffer(34962, b);
      this.A.bufferData(34962, a, 35044);
    }
    oM(this, this.C) ||
      ((a = this.H),
      (a = [0, a.D, 0, 0, a.F, a.D, a.F, 0]),
      (b = this.A.createBuffer()),
      (c = this.A.B),
      (this.C = c.B.add(b, c.R, 4 * a.length, 0)),
      this.A.bindBuffer(34962, b),
      this.A.bufferData(34962, new Float32Array(a), 35044));
    oM(this, this.B) ||
      ((a = this.A.createTexture()),
      this.A.bindTexture(3553, a),
      this.A.texParameteri(3553, 10241, 9985),
      this.A.texParameteri(3553, 10240, 9729),
      this.A.texParameteri(3553, 10242, 33071),
      this.A.texParameteri(3553, 10243, 33071),
      (b = lM(this.A, ro(this.H))),
      (b = Math.round(4 * b / 3)),
      this.A.generateMipmap(3553),
      (this.B = FA(this.A.B, a, b)));
  };
  function pM(a) {
    EA(a.A.B, a.B);
    return a.A.B.B.get(a.B);
  }
  function qM(a, b) {
    yo.call(this, a);
    this.A = b;
    this.B = new iM(b);
    this.C = null;
    this.F = 1;
  }
  C(qM, yo);
  qM.prototype.Xd = function() {
    var a = this.A;
    a.depthMask(!1);
    a.disable(2884);
    a.enable(3042);
    a.disable(2929);
    a.disable(2960);
    a.disable(3089);
    yo.prototype.Xd.call(this);
    a.depthMask(!0);
  };
  qM.prototype.Me = function(a) {
    return new nM(a, this.A);
  };
  qM.prototype.Va = function(a) {
    if (a.F() && this.C) {
      var b = this.A;
      EA(a.A.B, a.D);
      var c = a.A.B.B.get(a.D) || null;
      EA(a.A.B, a.C);
      var d = a.A.B.B.get(a.C) || null,
        e = this.A,
        f = this.B;
      LC(f);
      f.B.B.set(0);
      f.B.opacity.set(this.F);
      var g = NC(f.attributes.A),
        k = NC(f.attributes.B);
      e.enableVertexAttribArray(g);
      e.enableVertexAttribArray(k);
      e.bindBuffer(34962, c);
      f.attributes.A.vertexAttribPointer(3, 5126, !1, 0, 0);
      e.bindBuffer(34962, d);
      f.attributes.B.vertexAttribPointer(2, 5126, !1, 0, 0);
      XC(this.B.B.A, hq(this.C));
      b.bindBuffer(34962, c);
      b.activeTexture(33984);
      b.bindTexture(3553, pM(a) || null);
      b.drawArrays(5, 0, 4);
      b.disableVertexAttribArray(NC(this.B.attributes.A));
      b.disableVertexAttribArray(NC(this.B.attributes.B));
    }
  };
  function rM(a, b, c, d, e, f) {
    Fp.call(this, a, b, c, d, e);
    this.A = f;
    this.I = -1;
  }
  C(rM, Fp);
  rM.prototype.H = function() {
    EA(this.A.B, this.I);
    return this.A.B.B.get(this.I) || null;
  };
  rM.prototype.B = function() {
    return this.A.B.contains(this.I);
  };
  rM.prototype.K = function() {
    if (this.B()) EA(this.A.B, this.I);
    else {
      var a = this.A.createTexture();
      this.A.bindTexture(3553, a);
      this.A.texParameteri(3553, 10241, 9729);
      this.A.texParameteri(3553, 10240, 9729);
      this.A.texParameteri(3553, 10242, 33071);
      this.A.texParameteri(3553, 10243, 33071);
      var b = lM(this.A, this.D);
      this.I = FA(this.A.B, a, b);
    }
  };
  function sM(a, b, c, d, e, f) {
    zq.call(this, a, b, c, d, e);
    this.A = f;
    this.H = -1;
    this.J = this.M = this.O = null;
  }
  C(sM, zq);
  sM.prototype.Gb = function() {
    return this.A.B.contains(this.H);
  };
  sM.prototype.je = function() {
    this.A.B.contains(this.H) ? EA(this.A.B, this.H) : tM(this);
  };
  function tM(a) {
    var b = Dq(a);
    a.M = a.A.createBuffer();
    var c = Iq(a);
    a.J = a.A.createBuffer();
    var d = b.byteLength + c.byteLength,
      e = a.P instanceof Fo,
      f = null;
    e && ((f = Fq(a)), (a.O = a.A.createBuffer()), (d += f.byteLength));
    a.H = GA(
      a.A.B,
      function() {
        e && a.O && a.A.deleteBuffer(a.O);
        a.M && a.A.deleteBuffer(a.M);
        a.J && a.A.deleteBuffer(a.J);
        a.O = a.J = a.M = null;
        a.H = -1;
      },
      d
    );
    e && (a.A.bindBuffer(34962, a.O), a.A.bufferData(34962, f, 35044));
    a.A.bindBuffer(34962, a.M);
    a.A.bufferData(34962, b, 35044);
    a.A.bindBuffer(34963, a.J);
    a.A.bufferData(34963, c, 35044);
  }
  function uM(a) {
    EA(a.A.B, a.H);
    return a.O;
  }
  function vM(a) {
    EA(a.A.B, a.H);
    return a.M;
  }
  function wM(a) {
    EA(a.A.B, a.H);
    return a.J;
  }
  sM.prototype.Le = function(a, b) {
    return new rM(a.F, a.G, a.C, a.D, b, this.A);
  };
  function xM(a) {
    this.A = a;
  }
  xM.prototype.create = function(a, b, c, d, e) {
    return new sM(a, b, c, d, e, this.A);
  };
  function yM(a) {
    IC.call(
      this,
      a,
      "attribute vec2 a;uniform vec4 b;uniform mat4 c;varying vec2 d;void main(){gl_Position=c*vec4(a.x,a.y,1,1);d=a.xy*b.xy+b.zw;}",
      "precision highp float;uniform float e,f;uniform sampler2D g;varying vec2 d;float j(){if(f==0.)return 1.;else{vec2 h=abs(d-.5)-.5+f;return 1.-length(max(h,0.))/f;}}void main(){vec4 h=texture2D(g,d);float i=j();gl_FragColor=vec4(h.rgb,e*i);}"
    );
    this.B = new zM(this);
    this.attributes = new AM(this);
  }
  I(yM, IC);
  function zM(a) {
    this.A = new UC("b", a);
    this.C = new WC("c", a);
    this.alpha = new RC("e", a);
    this.B = new RC("f", a);
    this.D = new QC("g", a);
  }
  function AM(a) {
    this.A = new MC("a", a);
  }
  function BM(a) {
    this.A = a;
    this.F = new fM(this.A);
    this.G = new yM(this.A);
    this.D = new qM(new Hn(), this.A);
    this.C = 0;
    this.B = new ak();
  }
  y = BM.prototype;
  y.Of = function() {
    this.A.bindFramebuffer(36160, null);
    this.A.cullFace(1029);
    this.A.depthFunc(515);
    this.A.depthMask(!0);
    this.A.disable(3089);
    this.A.disable(2960);
    for (var a = 0; 8 > a; ++a) this.A.disableVertexAttribArray(a);
    this.A.enable(3042);
    this.A.enable(2884);
    this.A.enable(2929);
    this.A.blendFuncSeparate(770, 771, 1, 771);
    a = this.A.C.A;
    var b = E.devicePixelRatio || 1;
    this.A.viewport(
      this.B.left * b,
      this.B.bottom * b,
      a.width - (this.B.left + this.B.right) * b,
      a.height - (this.B.top + this.B.bottom) * b
    );
    this.A.clearColor(this.C, this.C, this.C, 1);
    this.A.clear(16640);
  };
  y.Mf = function() {
    var a = this.A.C.A;
    this.A.viewport(0, 0, a.width, a.height);
  };
  y.zg = function(a, b, c) {
    if (0 != N(b, 0)) {
      this.A.clear(256);
      var d = a instanceof Fo,
        e = d ? this.F : this.G;
      LC(e);
      XC(e.B.C, hq(c));
      e.B.alpha.set(N(b, 0));
      e.B.D.set(0);
      var f = -1;
      d && ((f = NC(e.attributes.B)), this.A.enableVertexAttribArray(f));
      var g = NC(e.attributes.A);
      this.A.enableVertexAttribArray(g);
      e.B.B && e.B.B.set(N(b, 1));
      var k = aq(c);
      this.A.activeTexture(33984);
      for (var l = k.length, m = 0; m < l; ++m) {
        var n = a,
          p = k[m],
          q = b;
        if (p.fd()) {
          n instanceof Fo &&
            (this.A.bindBuffer(34962, uM(p)),
            e.attributes.B.vertexAttribPointer(3, 5126, !1, 0, 0));
          this.A.bindBuffer(34962, vM(p));
          e.attributes.A.vertexAttribPointer(2, 5126, !1, 0, 0);
          this.A.bindBuffer(34963, wM(p));
          n = Iq(p);
          q = N(q, 0);
          var t = p.N;
          p.T || p.Xc();
          var r = p.T;
          if (1 > t && r) {
            t = SE(t);
            var v = r.H();
            this.A.bindTexture(3553, v);
            VC(e.B.A, r.J);
            e.B.alpha.set(q);
            this.A.drawElements(5, n.length, 5123, 0);
          }
          p = p.Xc();
          r = p.H();
          this.A.bindTexture(3553, r);
          VC(e.B.A, p.J);
          e.B.alpha.set(q * t);
          this.A.drawElements(5, n.length, 5123, 0);
        }
      }
      e.B.alpha.set(N(b, 0));
      this.A.disableVertexAttribArray(g);
      d && this.A.disableVertexAttribArray(f);
      b = N(b, 4);
      a = a.Nb();
      0 < b &&
        0 < a.length &&
        (this.D.kc(a), (this.D.C = c), (this.D.F = b), this.D.La());
    }
  };
  y.lh = ba("C");
  y.mh = function(a, b, c, d) {
    this.B.top = a;
    this.B.right = b;
    this.B.bottom = c;
    this.B.left = d;
  };
  function CM(a, b, c) {
    var d = new BM(b);
    Cr.call(this, a, d, new qq(new xM(b)), c);
  }
  C(CM, Pr);
  function DM(a, b, c, d, e) {
    b = new CM(c, d, e);
    a(b);
  }
  function EM() {}
  function FM(a, b, c, d, e) {
    oj.call(this, a);
    this.type = "wheel";
    this.deltaMode = b;
    this.deltaX = c;
    this.deltaY = d;
    this.deltaZ = e;
    a = 1;
    switch (b) {
      case 2:
        a *= 450;
        break;
      case 1:
        a *= 15;
    }
    this.B = this.deltaX * a;
    this.A = this.deltaY * a;
  }
  I(FM, oj);
  function GM(a, b) {
    Yj.call(this);
    this.A = a;
    a = ej(this.A) ? this.A : this.A.body;
    this.C = !!a && "rtl" == sk(a, "direction");
    this.B = Fj(this.A, HM(), this, b);
  }
  I(GM, Yj);
  function HM() {
    return (Pc && bd(17)) || (Nc && bd(9)) || (id && 0 <= oc(Hz, 31))
      ? "wheel"
      : Pc ? "DOMMouseScroll" : "mousewheel";
  }
  GM.prototype.handleEvent = function(a) {
    var b = 0,
      c = 0,
      d = 0,
      e = 0;
    a = a.Pa;
    "wheel" == a.type
      ? ((b = a.deltaMode), (c = a.deltaX), (d = a.deltaY), (e = a.deltaZ))
      : "mousewheel" == a.type
        ? F(a.wheelDeltaX)
          ? ((c = -a.wheelDeltaX), (d = -a.wheelDeltaY))
          : (d = -a.wheelDelta)
        : ((b = 1),
          F(a.axis) && a.axis === a.HORIZONTAL_AXIS
            ? (c = a.detail)
            : (d = a.detail));
    this.C && (c = -c);
    b = new FM(a, b, c, d, e);
    this.dispatchEvent(b);
  };
  GM.prototype.ga = function() {
    GM.X.ga.call(this);
    Oj(this.B);
    this.B = null;
  };
  function IM() {
    this.A = [];
    this.B = [];
  }
  function JM(a, b) {
    a.B.push(b);
  }
  function KM(a) {
    0 == a.A.length && ((a.A = a.B), a.A.reverse(), (a.B = []));
    return a.A.pop();
  }
  y = IM.prototype;
  y.Ya = function() {
    return 0 == this.A.length && 0 == this.B.length;
  };
  y.clear = function() {
    this.A = [];
    this.B = [];
  };
  y.contains = function(a) {
    return gb(this.A, a) || gb(this.B, a);
  };
  y.remove = function(a) {
    var b = this.A;
    b: {
      var c = b.length - 1;
      0 > c && (c = Math.max(0, b.length + c));
      if (Aa(b)) c = Aa(a) && 1 == a.length ? b.lastIndexOf(a, c) : -1;
      else {
        for (; 0 <= c; c--) if (c in b && b[c] === a) break b;
        c = -1;
      }
    }
    0 <= c ? (ib(b, c), (b = !0)) : (b = !1);
    return b || hb(this.B, a);
  };
  y.Ha = function() {
    for (var a = [], b = this.A.length - 1; 0 <= b; --b) a.push(this.A[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  function TM(a) {
    this.B = {};
    this.F = {};
    this.I = {};
    this.C = [];
    var b = a || UM;
    this.H = function(a) {
      return b(a);
    };
    this.A = {};
    this.D = null;
  }
  TM.prototype.G = function(a, b) {
    if (Ka(a)) (this.C = kb(a)), VM(this);
    else if (b) {
      b = a.event;
      if ((a = this.A[a.eventType]))
        for (var c = !1, d = 0, e; (e = a[d++]); ) !1 === e(b) && (c = !0);
      c && zl(b);
    } else
      (d = a.action),
        (c = d.split(".")[0]),
        (b = this.F[c]),
        b ? b.accept(a) && (e = b.handle) : (e = this.B[d]),
        e
          ? ((a = this.H(a)), e(a), a.done("main-actionflow-branch"))
          : ((e = Hl(a.event)),
            (a.event = e),
            this.C.push(a),
            b || ((e = this.I[c]) && !e.$i && (e.Io(this, c, a), (e.$i = !0))));
  };
  function UM(a) {
    return new Il(
      a.action,
      a.actionElement,
      a.event,
      a.timeStamp,
      a.eventType,
      a.targetElement
    );
  }
  function WM(a, b, c) {
    yc(
      c,
      G(function(a, c) {
        a = b ? G(a, b) : a;
        this.B[c] = a;
      }, a)
    );
    VM(a);
  }
  function XM(a, b, c) {
    a.A[b] = a.A[b] || [];
    a.A[b].push(c);
  }
  function YM(a, b) {
    return a.B.hasOwnProperty(b) || a.F.hasOwnProperty(b.split(".")[0]);
  }
  function VM(a) {
    a.D &&
      0 != a.C.length &&
      as(function() {
        this.D(this.C, this);
      }, a);
  }
  function ZM(a, b) {
    b
      ? (($M.x = a.clientX - b.left), ($M.y = a.clientY - b.top))
      : ((b = Al(a)),
        (b = b.getBoundingClientRect || !b.parentNode ? b : b.parentNode),
        (b = b.getBoundingClientRect()),
        ($M.x = a.clientX - b.left),
        ($M.y = a.clientY - b.top));
    return $M;
  }
  function aN(a) {
    a.getAttribute("tabindex") || a.setAttribute("tabindex", "-1");
    a.focus();
  }
  var $M = new Mi();
  function bN(a, b) {
    this.C = a;
    this.B = b;
    this.A = {};
    this.A.hashchange = "hashchange";
    this.A.resize = "resize";
    this.A.load = "load";
    this.A.unload = "unload";
    this.A.beforeunload = "beforeunload";
    a = document;
    (a =
      "hidden" in a
        ? "visibilitychange"
        : "mozHidden" in a
          ? "mozvisibilitychange"
          : "msHidden" in a
            ? "msvisibilitychange"
            : "webkitHidden" in a ? "webkitvisibilitychange" : "") &&
      (this.A[a] = "visibilitychange");
  }
  bN.prototype.gb = function() {
    var a = { popstate: ["popstate"], error: ["error"] };
    yc(this.A, function(b, c) {
      a[b] || (a[b] = []);
      a[b].push(c);
    });
    return a;
  };
  bN.prototype.Qa = w(null);
  bN.prototype.qb = function(a) {
    var b = a.type,
      c = new Ul(this.C, b);
    if ("popstate" == b) this.B("popstate", c, a);
    else if ("error" == b) {
      var d = unescape(a.message);
      b = d.split("~#!#~");
      if (4 == b.length) {
        var e = jm[parseInt(b[1], 10)];
        var f = e.Re;
        e = e.error;
        b = b[0] + b[2] + b[3];
      } else b = d;
      a.message = b;
      a.file = a.file;
      a.line = parseInt(a.line, 10);
      a.stack = a.stack;
      a.So = a.stackUrls;
      a.Ro = a.stackTruncation;
      a.Re = a.errorType;
      f && (a.Re = f);
      a.Ko = a.count;
      a.count = a.count;
      a.error = e;
      this.B("error", c, a);
    } else
      this.A[b] &&
        ((f = this.A[b]),
        "visibilitychange" == f
          ? ((e = document),
            (b = !1),
            "hidden" in e
              ? (b = e.hidden)
              : "mozHidden" in e
                ? (b = e.mozHidden)
                : "msHidden" in e
                  ? (b = e.msHidden)
                  : "webkitHidden" in e && (b = e.webkitHidden),
            (a.hidden = b),
            this.B(f, c, a))
          : this.B(f, c));
    c.done("main-actionflow-branch");
  };
  bN.prototype.pb = h();
  function cN(a) {
    this.A = a;
  }
  cN.prototype.gb = w(null);
  cN.prototype.Qa = function() {
    return {
      copy: { ra: ["copy"], global: null },
      cut: { ra: ["cut"], global: null }
    };
  };
  cN.prototype.qb = h();
  cN.prototype.pb = function(a, b) {
    b.event();
    var c = b.event().type;
    "copy" == c
      ? ((c = b.event()), this.A(a, "copy", b, c))
      : "cut" == c && ((c = b.event()), this.A(a, "cut", b, c));
  };
  function dN() {
    this.A = {};
  }
  function eN(a, b, c, d) {
    b = Oa(b);
    d = d ? 1 : -1;
    for (var e = c.length, f = 0; f < e; ++f) {
      var g = c[f];
      g = a.A[g] = a.A[g] || new Map();
      var k = (g.get(b) || 0) + d;
      g.set(b, k);
    }
  }
  function fN(a, b, c) {
    b = Oa(b);
    return !!a.A[c] && 0 < (a.A[c].get(b) || 0);
  }
  function gN(a) {
    var b = [],
      c;
    for (c in a.A) {
      var d = a.A[c];
      d &&
        db(Array.from(d.values()), function(a) {
          return 0 < a;
        }) &&
        b.push(c);
    }
    return new Set(b);
  }
  function hN(a, b, c) {
    this.B = null;
    this.D = a;
    a = oa(a);
    for (var d = a.next(); !d.done; d = a.next())
      if ((d = d.value.Qa()))
        for (var e in d)
          for (var f = oa(d[e].ra), g = f.next(); !g.done; g = f.next()) {
            var k = b,
              l = g.value;
            if (
              !k.G.hasOwnProperty(l) &&
              "mouseenter" != l &&
              "mouseleave" != l
            ) {
              var m = Oz(k, l);
              g = Sz(l, m);
              k.G[l] = m;
              k.F.push(g);
              for (l = 0; l < k.A.length; ++l)
                (m = k.A[l]), m.B.push(g.call(null, m.A));
            }
          }
    c = this.A = new TM(iN(c));
    c.D = jN;
    VM(c);
    c = G(this.A.G, this.A);
    b.C = c;
    b.D && (0 < b.D.length && c(b.D), (b.D = null));
    kN(this);
    this.C = {};
  }
  function kN(a) {
    a.B = function(b) {
      var c = E.globals && E.globals.fua;
      c &&
        !F(c.data) &&
        ((c.data = {
          type: b.type,
          target: b.target,
          currentTarget: b.currentTarget,
          time: Ua(),
          wo: !1
        }),
        c.dispose && c.dispose());
      if (a.B) {
        b = oa(lN);
        for (var d = b.next(); !d.done; d = b.next())
          (c = a.A), (d = d.value), c.A[d] && hb(c.A[d], a.B);
        a.B = null;
      }
    };
    for (var b = oa(lN), c = b.next(); !c.done; c = b.next())
      XM(a.A, c.value, a.B);
  }
  hN.prototype.I = function(a, b, c) {
    if ("" != a) {
      var d = this.C[a];
      d || (d = this.C[a] = new dN());
      for (var e = oa(this.D), f = e.next(); !f.done; f = e.next()) {
        f = f.value;
        var g = f.Qa();
        g && (g = g[b]) && g.ra && eN(d, f, g.ra, c);
      }
      gN(d).size
        ? YM(this.A, a) || ((b = {}), (b[a] = this.F), WM(this.A, this, b))
        : delete this.A.B[a];
    }
  };
  hN.prototype.F = function(a) {
    try {
      for (
        var b = a.Y,
          c = a.event().type,
          d = this.C[b],
          e = oa(this.D),
          f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        fN(d, g, c) && g.pb(b, a);
      }
    } catch (k) {
      throw lm(k);
    }
  };
  function jN(a, b) {
    if (0 != a.length) {
      var c = a[a.length - 1];
      if (YM(b, c.action)) {
        b = c.event;
        var d = c.eventType,
          e;
        "_custom" == b.type ? (e = "_custom") : (e = d || b.type);
        if ("keypress" == e || "keydown" == e || "keyup" == e)
          if (Dl) {
            var f = Jz(b, d);
            f.ctrlKey = b.ctrlKey;
            f.altKey = b.altKey;
            f.shiftKey = b.shiftKey;
            f.metaKey = b.metaKey;
            f.keyCode = b.keyCode;
            f.charCode = b.charCode;
            f.kd = b.timeStamp;
            d = f;
          } else {
            if (document.createEvent)
              if (
                ((f = document.createEvent("KeyboardEvent")),
                f.initKeyboardEvent)
              ) {
                e = b.ctrlKey;
                var g = b.metaKey,
                  k = b.shiftKey,
                  l = [];
                b.altKey && l.push("Alt");
                e && l.push("Control");
                g && l.push("Meta");
                k && l.push("Shift");
                f.initKeyboardEvent(
                  d || b.type,
                  !0,
                  !0,
                  window,
                  b.charCode,
                  b.keyCode,
                  b.location,
                  l.join(" "),
                  b.repeat,
                  b.locale
                );
                if (Cl || El || Fl)
                  (d = Hi(b.keyCode)),
                    Object.defineProperty(f, "keyCode", { get: d }),
                    Object.defineProperty(f, "which", { get: d });
              } else
                f.initKeyEvent(
                  d || b.type,
                  !0,
                  !0,
                  window,
                  b.ctrlKey,
                  b.altKey,
                  b.shiftKey,
                  b.metaKey,
                  b.keyCode,
                  b.charCode
                );
            else
              (f = document.createEventObject()),
                (f.type = d || b.type),
                (f.repeat = b.repeat),
                (f.ctrlKey = b.ctrlKey),
                (f.altKey = b.altKey),
                (f.shiftKey = b.shiftKey),
                (f.metaKey = b.metaKey),
                (f.keyCode = b.keyCode),
                (f.charCode = b.charCode);
            f.kd = b.timeStamp;
            d = f;
          }
        else if (
          "click" == e ||
          "dblclick" == e ||
          "mousedown" == e ||
          "mouseover" == e ||
          "mouseout" == e ||
          "mousemove" == e
        )
          document.createEvent
            ? ((f = document.createEvent("MouseEvent")),
              f.initMouseEvent(
                d || b.type,
                !0,
                !0,
                window,
                b.detail || 1,
                b.screenX || 0,
                b.screenY || 0,
                b.clientX || 0,
                b.clientY || 0,
                b.ctrlKey || !1,
                b.altKey || !1,
                b.shiftKey || !1,
                b.metaKey || !1,
                b.button || 0,
                b.relatedTarget || null
              ))
            : ((f = document.createEventObject()),
              (f.type = d || b.type),
              (f.clientX = b.clientX),
              (f.clientY = b.clientY),
              (f.button = b.button),
              (f.detail = b.detail),
              (f.ctrlKey = b.ctrlKey),
              (f.altKey = b.altKey),
              (f.shiftKey = b.shiftKey),
              (f.metaKey = b.metaKey)),
            (f.kd = b.timeStamp),
            (d = f);
        else if (
          "focus" == e ||
          "blur" == e ||
          "focusin" == e ||
          "focusout" == e ||
          "scroll" == e
        )
          document.createEvent
            ? ((f = document.createEvent("UIEvent")),
              f.initUIEvent(
                d || b.type,
                F(b.bubbles) ? b.bubbles : !0,
                b.cancelable || !1,
                b.view || window,
                b.detail || 0
              ))
            : ((f = document.createEventObject()),
              (f.type = d || b.type),
              (f.bubbles = F(b.bubbles) ? b.bubbles : !0),
              (f.cancelable = b.cancelable || !1),
              (f.view = b.view || window),
              (f.detail = b.detail || 0)),
            (f.relatedTarget = b.relatedTarget || null),
            (f.kd = b.timeStamp),
            (d = f);
        else if ("_custom" == e) {
          d = {
            _type: d,
            type: d,
            data: b.detail.data,
            To: b.detail.triggeringEvent
          };
          try {
            (f = document.createEvent("CustomEvent")),
              f.initCustomEvent("_custom", !0, !1, d);
          } catch (m) {
            (f = document.createEvent("HTMLEvents")),
              f.initEvent("_custom", !0, !1),
              (f.detail = d);
          }
          d = f;
          d.kd = b.timeStamp;
        } else d = Jz(b, d);
        b = d;
        c = c.targetElement;
        c.dispatchEvent ? c.dispatchEvent(b) : c.fireEvent("on" + b.type, b);
        a.length = 0;
      }
    }
  }
  var lN = "click rightclick contextmenu mousedown keypress wheel".split(" ");
  function iN(a) {
    return function(b) {
      return new Ul(a, b.action, b.actionElement, b.event);
    };
  }
  function mN(a, b) {
    this.L = a;
    this.M = b;
    this.A = !1;
    this.B = null;
    this.C = !1;
    this.H = "";
    this.F = this.D = 0;
    this.G = this.J = null;
    this.K = this.I = 0;
  }
  function nN(a, b, c, d) {
    a.C ||
      ((a.H = b),
      (a.J = d),
      (a.G = d.getBoundingClientRect()),
      (b = ZM(c, a.G)),
      (a.I = a.D = b.x),
      (a.K = a.F = b.y),
      (a.C = !0));
  }
  function oN(a, b, c) {
    if (a.C) {
      var d = pN(b) ? 15 : 2;
      c = ZM(c, a.G);
      !a.A &&
        (Math.abs(a.I - c.x) > d || Math.abs(a.K - c.y) > d) &&
        ((a.A = !0), (a.B = new Ul(a.L, a.H)), qN(a, b, "dragstart", a.I, a.K));
      a.A && (qN(a, b, "drag", c.x, c.y), (a.D = c.x), (a.F = c.y));
    }
  }
  function rN(a, b, c) {
    if (!a.C) return !1;
    var d = a.D,
      e = a.F;
    c && ((c = ZM(c, a.G)), (d = c.x), (e = c.y));
    a.A &&
      (qN(a, b, "dragend", d, e),
      a.B && a.B.done("main-actionflow-branch"),
      (a.B = null));
    b = a.A;
    a.C = !1;
    a.A = !1;
    return b;
  }
  function qN(a, b, c, d, e) {
    var f = a.B;
    b.x = d;
    b.y = e;
    b.zo = d - a.D;
    b.Ao = e - a.F;
    pN(b) || (b.target = a.J);
    a.M(a.H, c, f, b);
  }
  function pN(a) {
    return (
      "touchstart" === a.type ||
      "touchmove" === a.type ||
      "touchend" === a.type ||
      "touchcancel" === a.type
    );
  }
  function sN(a) {
    this.A = a;
  }
  sN.prototype.gb = w(null);
  sN.prototype.Qa = function() {
    return {
      focus: { ra: ["focus"], global: null },
      blur: { ra: ["blur"], global: null }
    };
  };
  sN.prototype.qb = h();
  sN.prototype.pb = function(a, b) {
    b.event();
    var c = b.event().type;
    "focus" == c
      ? ((c = b.event()), this.A(a, "focus", b, c))
      : "blur" == c && ((c = b.event()), this.A(a, "blur", b, c));
  };
  function tN(a) {
    this.A = a;
  }
  tN.prototype.gb = w(null);
  tN.prototype.Qa = function() {
    return {
      change: { ra: ["change"], global: null },
      input: { ra: ["input"], global: null }
    };
  };
  tN.prototype.qb = h();
  tN.prototype.pb = function(a, b) {
    b.event();
    var c = b.event().type;
    "change" == c
      ? ((c = b.event()), this.A(a, "change", b, c))
      : "input" == c && ((c = b.event()), this.A(a, "input", b, c));
  };
  function uN(a, b) {
    Tj.call(this);
    this.F = a;
    this.L = b || E;
    this.C = new dN();
    this.B = new dN();
    this.J = vN(this);
  }
  C(uN, Tj);
  uN.prototype.I = function(a, b, c) {
    var d = "" == a,
      e = d ? this.B : this.C,
      f = d ? this.C : this.B;
    a = gN(f);
    for (var g = oa(this.F), k = g.next(); !k.done; k = g.next()) {
      k = k.value;
      var l = b;
      if (d) {
        var m = k.gb();
        l = m ? m[l] : void 0;
      } else l = (m = k.Qa()) && m[l] ? m[l].global : void 0;
      l && eN(f, k, l, c);
    }
    b = gN(f);
    e = gN(e);
    c = wN(wN(a, b), e);
    a = wN(wN(b, a), e);
    $a(Array.from(c.values()), this.N, this);
    $a(Array.from(a.values()), this.M, this);
  };
  uN.prototype.M = function(a) {
    ("error" == a && this.J) || Vj(this, this.L, a, this.G, !0, this);
  };
  uN.prototype.N = function(a) {
    ("error" == a && this.J) || this.oc(this.L, a, this.G, !0, this);
  };
  uN.prototype.G = function(a) {
    try {
      for (var b = a.type, c = this.F.length, d = 0; d < c; ++d) {
        var e = this.F[d];
        (fN(this.C, e, b) || fN(this.B, e, b)) && e.qb(a);
      }
    } catch (f) {
      throw lm(f);
    }
  };
  function vN(a) {
    var b = Ga("globals.ErrorHandler.listen");
    return b
      ? (b(function(b) {
          a.G(b);
        }),
        !0)
      : !1;
  }
  function wN(a, b) {
    a = new Set(a);
    b = oa(b);
    for (var c = b.next(); !c.done; c = b.next()) a["delete"](c.value);
    return a;
  }
  var xN = {},
    yN = {};
  function zN(a) {
    var b = Oa(a);
    xN[b] &&
      (Sl(a, "lhc", xN[b].toString()),
      Sl(a, "lht", yN[b].toFixed(3).toString()),
      delete xN[b],
      delete yN[b]);
  }
  function AN(a, b, c) {
    this.B = a;
    this.A = b;
    this.C = c;
  }
  AN.prototype.gb = function() {
    return { keypress: ["keypress"], keydown: ["keydown"], keyup: ["keyup"] };
  };
  AN.prototype.Qa = function() {
    return {
      keypress: { ra: ["keypress"], global: null },
      keydown: { ra: ["keydown"], global: null },
      keyup: { ra: ["keyup"], global: null }
    };
  };
  AN.prototype.qb = function(a) {
    var b = BN(a);
    if (b) {
      var c = new Ul(this.B, b);
      a = CN(a);
      this.C(b, c, a, a.keyCode);
      c.done("main-actionflow-branch");
    }
  };
  AN.prototype.pb = function(a, b) {
    b.event();
    var c = b.event();
    if (c) {
      var d = BN(c);
      d && ((c = CN(c)), this.A(a, d, b, c, c.keyCode));
    }
  };
  function BN(a) {
    switch (a.type) {
      case "keypress":
        return "keypress";
      case "keydown":
        return "keydown";
      case "keyup":
        return "keyup";
      default:
        return null;
    }
  }
  function CN(a) {
    return {
      type: a.type,
      keyCode: ly(a.keyCode),
      shiftKey: a.shiftKey,
      ctrlKey: a.ctrlKey,
      altKey: a.altKey,
      metaKey: a.metaKey,
      Po: a,
      preventDefault: function() {
        a.preventDefault();
      },
      stopPropagation: function() {
        a.stopPropagation();
      }
    };
  }
  function DN() {
    this.A = EN();
  }
  DN.prototype.getTime = function() {
    return this.A.call(E.performance);
  };
  function EN() {
    return F(E.performance)
      ? E.performance.now ||
          E.performance.mozNow ||
          E.performance.msNow ||
          E.performance.oNow ||
          E.performance.webkitNow ||
          null
      : null;
  }
  function FN(a, b) {
    this.D = b;
    this.B = !1;
    this.C = null;
    this.A = [];
    b = oa([0, 1, 2]);
    for (var c = b.next(); !c.done; c = b.next())
      this.A.push(new mN(a, G(this.nl, this, c.value)));
  }
  y = FN.prototype;
  y.gb = w(null);
  y.Qa = function() {
    var a;
    kj
      ? (a = { ra: ["mousedown"], global: ["mousemove", "mouseup"] })
      : (a = { ra: ["mousedown", "mousemove", "mouseup"], global: null });
    var b = {};
    b.dragstart = a;
    b.drag = a;
    b.dragend = a;
    return b;
  };
  y.qb = function(a) {
    GN(this, a);
  };
  y.pb = function(a, b) {
    b.event();
    var c = new oj(b.event());
    GN(this, c, a, b);
  };
  function GN(a, b, c, d) {
    var e;
    if ("mousedown" == b.type)
      (b = b.Pa), aN(Al(b)), zl(b), (e = a.A[b.button]) && nN(e, c, b, d.B);
    else if ("mousemove" == b.type)
      for (c = a.A.length, d = 0; d < c; ++d) oN(a.A[d], b, b);
    else
      "mouseup" == b.type &&
        ((e = a.A[b.button]),
        (a.B = !!e && rN(e, b, b)),
        (a.C = a.B ? b.target : null));
  }
  y.nl = function(a, b, c, d, e) {
    this.D(b, c, d, e, a);
  };
  function HN() {
    this.A = [];
    this.B = "touch";
    IN() && (this.B = E.MSPointerEvent.MSPOINTER_TYPE_TOUCH);
  }
  function JN(a, b) {
    var c = fb(a.A, function(a) {
        return a.identifier == b.pointerId;
      }),
      d = new KN(b);
    -1 == c ? a.A.push(d) : (a.A[c] = d);
    return d;
  }
  function LN(a, b, c, d) {
    var e = {};
    e.type = b;
    e.touches = kb(a.A);
    e.changedTouches = [c];
    e.target = d.target;
    e.currentTarget = d.currentTarget;
    e.preventDefault = function() {
      d.preventDefault();
    };
    return e;
  }
  function MN(a, b) {
    switch (b.type) {
      case "pointerdown":
      case "MSPointerDown":
        if (b.pointerType == a.B) {
          F(b.target.setPointerCapture)
            ? b.target.setPointerCapture(b.pointerId)
            : F(b.target.msSetPointerCapture) &&
              b.target.msSetPointerCapture(b.pointerId);
          var c = JN(a, b);
          a = LN(a, "touchstart", c, b);
        } else a = null;
        return a;
      case "pointermove":
      case "MSPointerMove":
        return (
          b.pointerType == a.B
            ? ((c = JN(a, b)), (a = LN(a, "touchmove", c, b)))
            : (a = null),
          a
        );
      case "pointerup":
      case "pointercancel":
      case "MSPointerUp":
      case "MSPointerCancel":
        return NN(a, b);
    }
    return null;
  }
  function NN(a, b) {
    if (b.pointerType == a.B) {
      if (F(b.target.releasePointerCapture))
        try {
          b.target.releasePointerCapture(b.pointerId);
        } catch (d) {}
      else
        F(b.target.msReleasePointerCapture) &&
          b.target.msReleasePointerCapture(b.pointerId);
      var c = fb(a.A, function(a) {
        return a.identifier == b.pointerId;
      });
      if (-1 != c) return ib(a.A, c), LN(a, "touchend", new KN(b), b);
    }
    return null;
  }
  function IN() {
    return !F(E.PointerEvent) && F(E.MSPointerEvent);
  }
  function ON() {
    return F(E.PointerEvent) || F(E.MSPointerEvent);
  }
  function KN(a) {
    this.identifier = a.pointerId;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.pageX = a.pageX;
    this.pageY = a.pageY;
    this.force = a.pressure;
    this.target = a.target;
  }
  function PN(a, b) {
    this.J = a;
    this.D = b;
    this.A = !1;
    this.G = (a = IN()) ? "MSPointerDown" : "pointerdown";
    this.H = a ? "MSPointerUp" : "pointerup";
    this.K = a ? "MSPointerCancel" : "pointercancel";
    this.I = a ? E.MSPointerEvent.MSPOINTER_TYPE_TOUCH : "touch";
    this.F = F(E.TouchEvent) && ON();
    this.C = this.B = null;
  }
  y = PN.prototype;
  y.gb = w(null);
  y.Qa = function() {
    var a = {
      click: { ra: ["click"], global: null },
      dblclick: { ra: ["dblclick"], global: null }
    };
    a.ptrdown = { ra: ["mousedown", "touchstart", this.G], global: null };
    a.ptrhover = { ra: ["mousemove"], global: ["mousedown", "mouseup"] };
    a.ptrup = { ra: ["mouseup", "touchend", this.H, this.K], global: null };
    a.contextmenu = { ra: ["contextmenu"], global: null };
    return a;
  };
  y.qb = function(a) {
    a = a.type;
    "mousedown" == a ? (this.A = !0) : "mouseup" == a && (this.A = !1);
  };
  function QN(a, b) {
    if ("mousedown" == b.type) return !0;
    var c;
    if ((c = a.F))
      (c = a.B), (c = null != c && 100 > Math.abs(b.timeStamp - c));
    if (c || "touchstart" != b.type)
      return b.type == a.G && b.pointerType == a.I
        ? ((a.B = b.timeStamp), b.isPrimary)
        : !1;
    a.B = null;
    a = b.touches;
    return 1 == (a ? a.length : 0);
  }
  function RN(a, b) {
    if ("mouseup" == b.type) return !0;
    var c;
    if ((c = a.F))
      (c = a.C), (c = null != c && 100 > Math.abs(b.timeStamp - c));
    if (c || "touchend" != b.type)
      return b.type == a.H && b.pointerType == a.I
        ? ((a.C = b.timeStamp), b.isPrimary)
        : !1;
    a.C = null;
    a = b.touches;
    return 0 == (a ? a.length : 0);
  }
  y.pb = function(a, b) {
    b.event();
    var c = b.event(),
      d = c.type;
    "click" == d
      ? ((c = b.event()),
        (d = this.D.C),
        this.D.B && c && d && c.target === d
          ? b.event().stopPropagation()
          : SN(this, a, "click", b))
      : "dblclick" == d
        ? SN(this, a, "dblclick", b)
        : QN(this, c)
          ? SN(this, a, "ptrdown", b)
          : "mousemove" != d || this.A
            ? RN(this, c)
              ? SN(this, a, "ptrup", b)
              : "contextmenu" == d && SN(this, a, "contextmenu", b)
            : SN(this, a, "ptrhover", b);
  };
  y.dh = u("A");
  function SN(a, b, c, d) {
    var e = d.B;
    if (e) {
      var f = d.event(),
        g = new oj(f);
      if ("touchstart" == f.type || "touchend" == f.type) {
        var k = f.touches;
        0 == k.length && (k = f.changedTouches);
        f = k[0];
        g.clientX = f.clientX;
        g.clientY = f.clientY;
        g.screenX = f.screenX;
        g.screenY = f.screenY;
      }
      e = ZM(g, e.getBoundingClientRect());
      g.x = e.x;
      g.y = e.y;
      a.J(b, c, d, g);
    }
  }
  function TN(a, b) {
    this.A = a;
    this.B = b;
  }
  TN.prototype.gb = w(null);
  TN.prototype.Qa = function() {
    return {
      ptrin: { ra: ["mouseover"], global: null },
      ptrout: { ra: ["mouseout"], global: null }
    };
  };
  TN.prototype.qb = h();
  TN.prototype.pb = function(a, b) {
    var c = b.event(),
      d = c.type;
    "mouseover" == d
      ? UN(this, a, "ptrin", b, c.relatedTarget || null, c.target)
      : "mouseout" == d &&
        UN(this, a, "ptrout", b, c.target, c.relatedTarget || null);
  };
  function UN(a, b, c, d, e, f) {
    var g = d.event();
    g.No = e;
    g.Lo = f;
    g.dh = a.B.dh();
    g.Go = function() {
      var a = d.B;
      return !a || (f && fj(a, f)) ? !1 : !0;
    };
    a.A(b, c, d, g);
  }
  function VN(a, b, c) {
    this.A = a;
    this.B = b;
    this.C = c;
  }
  VN.prototype.gb = function() {
    return { scroll: ["scroll"] };
  };
  VN.prototype.Qa = function() {
    return { scroll: { ra: ["scroll"], global: null } };
  };
  VN.prototype.qb = function(a) {
    if ("scroll" === a.type) {
      var b = new Ul(this.A, "scroll");
      this.C("scroll", b, a);
      b.done("main-actionflow-branch");
    }
  };
  VN.prototype.pb = function(a, b) {
    b.event();
    if ("scroll" == b.event().type) {
      var c = b.event();
      this.B(a, "scroll", b, c);
    }
  };
  function WN() {
    this.A = [];
    this.B = !1;
  }
  WN.prototype.filter = function(a) {
    if (!(id || jd || ed)) return !1;
    a = new XN(Ua(), a.A);
    if (0 < this.A.length) {
      var b = this.A[this.A.length - 1],
        c = 0 > a.B != 0 > b.B;
      if (100 < a.A - b.A || c) this.A.length = 0;
    }
    this.A.push(a);
    10 < this.A.length && this.A.shift();
    if (3 > this.A.length) this.B = !1;
    else {
      a = this.A;
      b = a.length;
      if (2 > b) a = NaN;
      else {
        c = [0, 0, 0, 0, 0];
        for (var d = a[0].A - 100, e, f, g = 0; g < b; g++)
          if (((e = a[g].A - d), (f = Math.abs(a[g].B))))
            (c[0] += e),
              (c[1] += f),
              (c[2] += e * e),
              (c[3] += e * f),
              (c[4] += f * f);
        a =
          c[1] / b -
          (b * c[3] - c[0] * c[1]) / (b * c[2] - c[0] * c[0]) * c[0] / b;
      }
      this.B = this.B ? 0 < a : 15 < a;
    }
    return this.B;
  };
  function XN(a, b) {
    this.A = a;
    this.B = b;
  }
  function YN() {
    this.A = ZN();
  }
  function ZN() {
    if (Uc) {
      if (id || Mc) return 100;
      if (ed) return 45;
      if (Nc) return 49.95;
    } else if (Tc) {
      if (!(id || Mc || jd) && ed) return 20;
    } else if (Vc) {
      if (id || Mc) return 53;
      if (ed) return 45;
    }
    return 50;
  }
  function $N(a) {
    var b = this;
    this.C = a;
    this.B = new GM(new Yj());
    this.B.listen("wheel", function(a) {
      b.A = a;
    });
    this.A = null;
    this.F = new WN();
    this.D = new YN();
  }
  $N.prototype.gb = w(null);
  $N.prototype.Qa = function() {
    var a = {};
    a.scrollwheel = { ra: [HM()], global: null };
    return a;
  };
  $N.prototype.qb = h();
  $N.prototype.pb = function(a, b) {
    var c = new oj(b.event());
    this.B.handleEvent(c);
    var d = this.A,
      e = ZM(c, b.B.getBoundingClientRect());
    c.x = e.x;
    c.y = e.y;
    c.Cf = d.B;
    c.Ld = d.A;
    c.Bl = d.A / this.D.A;
    c.ctrlKey = d.ctrlKey;
    c.ij = this.F.filter(d);
    this.C(a, "scrollwheel", b, c);
  };
  function aO(a, b) {
    this.G = b;
    b = null;
    ON() && (b = new HN());
    this.H = b;
    this.A = new mN(a, G(this.ol, this));
    this.D = (a = IN()) ? "MSPointerDown" : "pointerdown";
    this.B = a ? "MSPointerMove" : "pointermove";
    this.F = a ? "MSPointerUp" : "pointerup";
    this.C = a ? "MSPointerCancel" : "pointercancel";
  }
  y = aO.prototype;
  y.gb = w(null);
  y.Qa = function() {
    var a = ["touchstart", "touchmove", "touchend", "touchcancel"];
    ON() && (a = a.concat([this.D, this.B, this.F, this.C]));
    a = { ra: a, global: null };
    return { dragstart: a, drag: a, dragend: a };
  };
  y.qb = h();
  y.pb = function(a, b) {
    b.event();
    var c = b.event();
    if (this.H) {
      var d = c.type;
      if (d == this.D || d == this.B || d == this.F || d == this.C)
        c = MN(this.H, c);
      if (!c) return;
    }
    d = c.touches;
    var e = c.type;
    c.preventDefault();
    if ("touchstart" == e)
      (e = c.target) && aN(e), nN(this.A, a, d[0], b.B), oN(this.A, c, d[0]);
    else if ("touchmove" == e) oN(this.A, c, d[0]);
    else if ("touchcancel" == e || "touchend" == e)
      0 == d.length
        ? !rN(this.A, c) &&
          (d = b.B) &&
          ((c = new oj(b.event())),
          (d = ZM(c, d.getBoundingClientRect())),
          (c.x = d.x),
          (c.y = d.y),
          this.G(a, "click", b, c))
        : oN(this.A, c, d[0]);
  };
  y.ol = function(a, b, c, d) {
    this.G(a, b, c, d, 0);
  };
  function bO(a, b) {
    var c = this;
    var d = void 0 === d ? cO : d;
    this.I = a;
    this.B = null;
    EN() && (this.B = new DN());
    Nl && qm(Nl, "beforedone", zN);
    this.A = d(
      b,
      function(a, b, d, e, m) {
        dO(c, a, b, d, e, m);
      },
      function(a, b, d, e) {
        dO(c, "", a, b, d, e);
      }
    );
    this.G = new Set();
    this.H = new Set();
    this.F = {};
    this.C = [new hN(this.A, a, b), new uN(this.A, void 0)];
    this.D = {};
    a = this.A.length;
    for (b = 0; b < a; ++b) {
      if ((d = this.A[b].Qa())) {
        var e = oa(Ac(d));
        for (d = e.next(); !d.done; d = e.next()) this.G.add(d.value);
      }
      if ((d = this.A[b].gb()))
        for (e = oa(Ac(d)), d = e.next(); !d.done; d = e.next())
          this.H.add(d.value);
    }
  }
  bO.prototype.jd = function(a) {
    var b = this.D[a];
    if (b) {
      var c = b.Wb,
        d = b.yb;
      b = b.qualifier;
      delete this.D[a];
      a = this.F;
      delete a[c][d][b];
      Bc(a[c][d]) && (delete a[c][d], Bc(a[c]) && delete a[c]);
      a = this.C.length;
      for (b = 0; b < a; ++b) this.C[b].I(c, d, !1);
    }
  };
  bO.prototype.Sb = function(a, b, c, d) {
    d = void 0 === d ? null : d;
    return this.H.has(a) ? eO(this, "", a, b, c, d) : null;
  };
  bO.prototype.yc = function(a, b, c, d, e, f) {
    f = void 0 === f ? null : f;
    return this.G.has(c) ? eO(this, a ? a + "." + b : b, c, d, e, f) : null;
  };
  function eO(a, b, c, d, e, f) {
    a: for (var g = fB.length, k = 0; k < g; ++k) if (c == fB[k]) break a;
    g = a.F;
    g[b] = g[b] || {};
    g[b][c] = g[b][c] || {};
    g[b][c][f] = d ? { Tc: e, scope: d } : e;
    d = a.C.length;
    for (e = 0; e < d; ++e) a.C[e].I(b, c, !0);
    d = ++fO;
    a.D[d] = { Wb: b, yb: c, qualifier: f };
    return d;
  }
  function dO(a, b, c, d, e, f) {
    var g = a.F;
    g[b] && g[b][c]
      ? ((b = g[b][c]),
        (f = b[void 0 === f ? null : f] || b.all_others || b[null]))
      : (f = null);
    if (f) {
      var k;
      a.B && (k = a.B.getTime());
      Ma(f) ? f(d, e) : f.Tc.call(f.scope, d, e);
      a.B &&
        ((a = a.B.getTime() - k),
        0.75 > a ||
          ((d = Oa(d)),
          F(yN[d]) || F(xN[d])
            ? F(yN[d]) && F(xN[d]) && ((yN[d] += a), xN[d]++)
            : ((yN[d] = a), (xN[d] = 1))));
    }
  }
  bO.prototype.tc = u("I");
  function cO(a, b, c) {
    var d = [],
      e = new FN(a, b);
    d.push(e);
    d.push(new aO(a, b));
    e = new PN(b, e);
    d.push(e);
    d.push(new TN(b, e));
    d.push(new bN(a, c));
    d.push(new $N(b));
    d.push(new sN(b));
    d.push(new tN(b));
    d.push(new AN(a, b, c));
    d.push(new VN(a, b, c));
    d.push(new cN(b));
    return d;
  }
  var fO = 0;
  function gO() {
    this.A = {};
    this.B = this.C = void 0;
  }
  function hO(a, b, c) {
    c = Math.floor(c);
    a.A[c] || (a.A[c] = new IM());
    JM(a.A[c], b);
    if (!F(a.C) || c < a.C) a.C = c;
    if (!F(a.B) || c > a.B) a.B = c;
  }
  function iO(a) {
    a: {
      if (F(a.B))
        for (var b = a.B; b >= a.C; b--)
          if (a.A[b] && !a.A[b].Ya()) {
            a = a.A[b];
            break a;
          }
      a = null;
    }
    return a ? KM(a) : void 0;
  }
  gO.prototype.remove = function(a) {
    if (F(this.B))
      for (
        var b = this.B;
        b >= this.C && (!this.A[b] || !this.A[b].remove(a));
        b--
      );
  };
  function jO(a) {
    if (!F(a.B)) return -1;
    for (var b = a.B; b >= a.C; b--) if (a.A[b] && !a.A[b].Ya()) return b;
    return -1;
  }
  function kO(a) {
    this.C = a;
    this.B = 0;
    this.A = [];
    this.G = 0;
    this.H = new gO();
    this.I = {};
    this.D = -1;
    this.K = void 0;
  }
  function lO(a, b) {
    this.B = a;
    this.A = this.active = this.C = !1;
    this.priority = b;
    this.D = 0;
  }
  function gt(a, b, c) {
    var d = b.state;
    if (!d || d.priority != c) {
      if (d)
        a: if (((b = d), b.C)) {
          d = a.H;
          for (var e = Math.floor(c), f = d.B; f >= d.C; f--)
            if (d.A[f] && d.A[f].remove(b)) {
              hO(d, b, e);
              break;
            }
          b.priority = c;
        } else {
          if (b.active) {
            d = c > b.priority;
            e = 0 == a.G;
            f = jO(a.H) <= c;
            if (d || e || f) {
              mO(a, b);
              nO(a, b, c);
              break a;
            }
            a.remove(b.B) && oO(a, b, c);
          }
          b.A && (a.remove(b.B), oO(a, b, c));
        }
      else (d = new lO(b, c)), (b.state = d), oO(a, d, c);
      if (24 == a.B)
        for (b = !1, d = 1; d < c; d++) {
          if (a.A[d] && 0 < a.A[d].length) {
            e = a.A[d];
            f = e.length - 1;
            for (var g; (g = e[f]); f--)
              if (g.B.cancel()) {
                b = !0;
                g.B.state && mO(a, g);
                oO(a, g, d);
                break;
              }
          }
          if (b) break;
        }
      pO(a);
    }
  }
  kO.prototype.start = function() {
    for (var a = 0; 4 > a && qO(this); ++a) {
      var b;
      for (b = iO(this.H); b && !b.C; ) b = iO(this.H);
      b ? ((b.C = !1), (this.G += -1)) : (b = null);
      if (!b) break;
      rO(this, b);
    }
    for (a = 3; 1 <= a && !(this.A[a] && 0 < this.A[a].length); a--);
    for (b = 1; 3 >= b; b++)
      if (b < a) {
        var c = this.I[b];
        if (c && 0 < c.length)
          for (; 0 < c.length; ) {
            var d = c.pop();
            d.A = !1;
            d.B.cancel();
            oO(this, d, b);
          }
      }
    if (qO(this)) return this.start;
    this.K = void 0;
    return Qp;
  };
  function qO(a) {
    var b = -1 != jO(a.H);
    a = 24 > a.B;
    return b && a;
  }
  function pO(a) {
    var b = jO(a.H);
    if (-1 != b) {
      var c = 0;
      2 == b ? (c = 1) : 3 == b && (c = 2);
      if (!F(a.K)) eq(a.C, a, fq(c, !0)), (a.K = c);
      else if (a.K < c) {
        b = a.C;
        var d = a.F;
        if (d && d != Qp) {
          d = a.priority;
          var e = 1 == d || 3 == d || 5 == d ? fq(c, !0) : fq(c, !1);
          if (d != e) {
            for (var f = b.A[d].length, g = 0; g < f; ++g)
              if (b.A[d][g] == a) {
                b.A[d][g] = null;
                break;
              }
            a.priority = e;
            b.A[e].push(a);
          }
        }
        a.K = c;
      }
    }
  }
  function rO(a, b) {
    nO(a, b, b.priority);
    b.B.start(function() {
      sO(a, b);
    });
  }
  function oO(a, b, c) {
    b.priority = c;
    b.C = !0;
    a.G += 1;
    hO(a.H, b, c);
  }
  function mO(a, b) {
    a.A[b.priority] && hb(a.A[b.priority], b);
    b.active = !1;
    a.B += -1;
    0 == a.B && -1 != a.D && (E.clearTimeout(a.D), (a.D = -1));
  }
  function nO(a, b, c) {
    a.A[c] ? a.A[c].push(b) : (a.A[c] = [b]);
    b.D = Ua();
    b.active = !0;
    a.B += 1;
    b.priority = c;
    -1 == a.D && tO(a);
  }
  function tO(a) {
    a.D = E.setTimeout(function() {
      if (0 < a.B && -1 != a.D) {
        for (var b = Ua(), c = [], d = 1; 3 >= d; d++) {
          var e = a.A[d];
          if (e)
            for (var f = 0; f < e.length; ++f) {
              var g = e[f];
              1e4 <= b - g.D && c.push(g);
            }
        }
        for (b = 0; b < c.length; ++b)
          (d = a),
            (e = c[b]),
            mO(d, e),
            d.I[e.priority] ? d.I[e.priority].push(e) : (d.I[e.priority] = [e]),
            (e.A = !0),
            pO(d);
        0 < a.B ? tO(a) : (a.D = -1);
      }
    }, 1e4);
  }
  function sO(a, b) {
    b &&
      (b.active ? mO(a, b) : b.A && (hb(a.I[b.priority], b), (b.A = !1)),
      (b.B.state = null));
    pO(a);
  }
  kO.prototype.remove = function(a) {
    var b = a.state,
      c = !1;
    if (b && (b.active || b.A)) {
      if (a.cancel() || b.A) sO(this, b), (c = !0);
    } else b && b.C && ((b.C = !1), (this.G += -1), (c = !0));
    c && (a.state = null);
    return c;
  };
  function uO() {
    var a = this;
    var b = void 0 === b ? {} : b;
    this.D = this.F = !1;
    this.G = null;
    this.L = b.requestAnimationFrame || vO();
    this.K = function() {
      a.A = !1;
      wO(a);
    };
    this.J = b.Mo || Xr;
    this.I = function() {
      a.C = !1;
      a.F = !1;
      wO(a);
    };
    this.C = this.A = !1;
    this.B = !0;
    this.H = 0;
    wr(
      function(b) {
        (a.B = b) && !a.A ? xO(a) : (a.H = Ua() + 1e4);
      },
      void 0,
      b.document
    );
  }
  function wO(a) {
    a.D = !0;
    try {
      a.G.xa();
    } finally {
      a.F && ((a.A && a.B) || xO(a)), (a.D = !1);
    }
  }
  function Br(a) {
    a.B ? a.A || a.C || (a.L.call(E, a.K), (a.A = !0)) : xO(a);
  }
  function DK(a) {
    jd ? Br(a) : a.D ? (a.F = !0) : (a.B && a.A) || xO(a);
  }
  function xO(a) {
    a.C || (!a.B && Ua() > a.H) || (a.J(a.I), (a.C = !0));
  }
  function vO() {
    return (
      E.requestAnimationFrame ||
      E.webkitRequestAnimationFrame ||
      E.mozRequestAnimationFrame ||
      E.oRequestAnimationFrame ||
      E.msRequestAnimationFrame ||
      function(a) {
        E.setTimeout(a, 16);
      }
    );
  }
  function yO() {
    var a = {},
      b = void 0 === a.lj ? new uO() : a.lj,
      c = void 0 === a.Al ? !1 : a.Al;
    a = void 0 === a.Wi ? !0 : a.Wi;
    this.B = b;
    this.B.G = this;
    this.ea = Ua();
    this.R = zO;
    this.aa = this.C = this.ja = this.la = this.ia = this.W = this.I = this.D = this.F = 0;
    this.M = this.O = !1;
    this.K = [];
    this.H = [];
    this.G = [];
    this.A = [];
    this.A[0] = [];
    this.A[1] = [];
    this.A[2] = [];
    this.A[3] = [];
    this.A[4] = [];
    this.A[5] = [];
    this.T = [];
    this.qa = c;
    this.ma = a;
    this.J = !1;
    this.N = this.Y = this.L = 0;
    Rp.push(this);
  }
  function eq(a, b, c) {
    var d = b.F;
    (d && d != Qp) ||
      ((b.F = b.start), (b.priority = c), a.A[c].push(b), a.O || DK(a.B));
  }
  yO.prototype.xa = function() {
    var a = Ua();
    this.O = !0;
    var b = 0,
      c = this.T;
    if (0 < c.length) {
      for (b = 0; b < c.length; b++) eq(this, c[b].Sk, fq(c[b].priority, !1));
      this.T = [];
    }
    try {
      var d = Ua(),
        e = this.K;
      this.K = [];
      var f = e.length;
      for (c = 0; c < f; c++) {
        var g = e[c];
        AO();
        g.B = !1;
        var k = g.C;
        g.C = [];
        for (var l = 0; l < k.length; ++l) {
          var m = k[l],
            n = g.A[m.type][m.qualifier];
          if (n && 0 < n.length)
            for (
              var p = l + 1 < k.length ? k[l + 1] : null,
                q =
                  p &&
                  p.type == m.type &&
                  p.qualifier == m.qualifier &&
                  (null == p.event ||
                    null == m.event ||
                    p.event.type == m.event.type),
                t = 0;
              t < n.length;
              ++t
            ) {
              var r = n[t];
              (q && r.A) || r.jb(m.sa, m.event);
            }
          m.sa.done("scene-async-event-handler");
        }
      }
      this.C += Ua() - d;
      if (this.qa) {
        BO(this, a);
        CO(this, a);
        var v = Infinity;
      } else {
        if (this.ma)
          if (a - this.W < this.R - (6 + this.F)) var x = a + this.R - 3;
          else {
            BO(this, a);
            CO(this, a);
            var z = Ua();
            this.F *= 0.97;
            this.F += 0.03 * (z - a);
            var A = Math.ceil(1 / zO * (this.F + 3 + 6)) * zO;
            A = A < zO ? zO : A;
            this.R = A = A > DO ? DO : A;
            x = EO(this, a, z);
          }
        else {
          BO(this, a);
          CO(this, a);
          var H = Ua();
          x = EO(this, a, H);
        }
        v = x;
      }
      this.M = !1;
      for (b = 5; 0 <= b; b--) {
        d = b;
        e = v;
        var B = Ua();
        if (this.M && Ua() >= e) var J = !1;
        else {
          var D = this.A[d];
          if (0 == D.length) J = !0;
          else {
            f = [];
            g = !1;
            for (k = 0; k < D.length && !g; k++) {
              var T = D[k];
              if (T)
                for (;;) {
                  var S = T.F;
                  if (!S || S == Qp) break;
                  var W = Ua();
                  if (this.M && W >= e) {
                    g = !0;
                    f.push(k);
                    break;
                  }
                  AO();
                  S = Qp;
                  try {
                    S = T.F();
                  } finally {
                    (T.F = S), (this.M = !0);
                  }
                  if (S == Qp) break;
                }
            }
            this.aa += Ua() - B;
            m = [];
            for (n = 0; n < f.length; n++) {
              var da = D[f[n]];
              if (da) {
                var ia = da.F;
                ia && ia != Qp && m.push(da);
              }
            }
            g
              ? ((this.A[d] = m.concat(D.slice(k - 1))), (J = !1))
              : ((this.A[d] = m), (J = Ua() < e));
          }
        }
        if (!J) break;
      }
    } finally {
      (this.O = !1),
        (b = 0 < this.G.length || 0 < this.H.length || 0 < this.K.length),
        (v =
          0 < this.A[5].length ||
          0 < this.A[4].length ||
          0 < this.A[3].length ||
          0 < this.A[2].length ||
          0 < this.A[1].length ||
          0 < this.A[0].length),
        b ? Br(this.B) : v && DK(this.B),
        this.J && (this.N += Ua() - a),
        (this.J = v || b),
        this.la++;
    }
  };
  function BO(a, b) {
    var c = Ua(),
      d = a.H;
    a.H = [];
    a.ea = b;
    for (var e = d.length, f = 0; f < e; f++) {
      var g = d[f];
      AO();
      g.animate(b);
    }
    a.C += Ua() - c;
  }
  function EO(a, b, c) {
    a = b + a.R - 3;
    c -= a;
    0 < c && (a += Math.ceil(c / zO) * zO);
    return a;
  }
  function CO(a, b) {
    var c = Ua(),
      d = b - a.W;
    if (a.J) {
      var e = 1e3 / d;
      d > Sp && a.ja++;
      a.D *= 0.7;
      a.D += 0.3 * e;
      a.I *= 0.7;
      a.I += 0.3 * e * e;
      a.ia++;
      a.L += d;
      a.Y += a.N;
      a.N = 0;
    }
    a.W = b;
    b = a.G;
    a.G = [];
    d = b.length;
    for (e = 0; e < d; e++) {
      var f = b[e];
      AO();
      f.L();
    }
    a.C += Ua() - c;
  }
  function CK(a) {
    if (0 < a.G.length || 0 < a.H.length || 0 < a.K.length) return !0;
    if (!F(1)) return !1;
    for (var b = fq(1, !1); 5 >= b; b++) if (a.A[b].length) return !0;
    return !1;
  }
  var zO = 1e3 / 60,
    DO = 1e4 / 60;
  function fq(a, b) {
    a *= 2;
    b && (a += 1);
    return a;
  }
  function AO() {
    E.performance && E.performance.now ? E.performance.now() : Ua();
  }
  function FO(a, b, c) {
    this.H = a;
    this.C = b;
    this.A = c;
    this.G = null;
    this.D = new yO();
    this.B = GO();
    this.K = new cC(this.B);
    this.I = new kO(this.D);
    this.F =
      !(
        !HF() &&
        (xc("iPod") || xc("iPhone") || xc("Android") || xc("IEMobile"))
      ) && !HF();
  }
  FO.prototype.getContext = u("A");
  function GO() {
    var a = new Kz(),
      b = pm();
    a = new bO(a, b);
    a.Sb("beforeunload", null, function(a) {
      tm(nm, "beforeunload", a);
    });
    return a;
  }
  function HO(a, b) {
    Bm || (Bm = new EM());
    ym("CPNR", Tr);
    ym("CUTS", nt);
    ym("CUCS", Du);
    ym("CTS", Iu);
    ym("FPSC", ew);
    ym("FPTS", $w);
    ym("GCS", ky);
    ym("HPNR", vx);
    ym("SCPI", yF);
    ym("PNI", zF);
    ym("SCPR", BF);
    ym("SCW", eM);
    ym("WPNR", DM);
    return new IO(a.A, b);
  }
  function JO(a, b, c) {
    this.heading = a;
    a = Math.max(b, -90);
    this.pitch = a = Math.min(a, 90);
    this.zoom = Math.max(0, c);
  }
  function KO() {
    this.ca = this.A = null;
  }
  KO.prototype.getExtension = w(null);
  var LO;
  try {
    new Qu([]), (LO = !0);
  } catch (a) {
    LO = !1;
  }
  var MO = LO;
  function NO(a, b) {
    if (2 == b) return a;
    if (3 == b) return "F:" + a;
    var c = new Tu(),
      d = new KO();
    d.ca = a;
    d.A = b;
    var e = d.A;
    if (null != e) {
      Pu(c.A, 8);
      var f = c.A;
      if (0 <= e) Pu(f, e);
      else {
        for (var g = 0; 9 > g; g++) f.A.push((e & 127) | 128), (e >>= 7);
        f.A.push(1);
      }
    }
    f = d.ca;
    if (null != f) {
      Pu(c.A, 18);
      d = Ou(c.A);
      c.C.push(d);
      c.B += d.length;
      d.push(c.B);
      e = c.A;
      for (g = 0; g < f.length; g++) {
        var k = f.charCodeAt(g);
        if (128 > k) e.A.push(k);
        else if (2048 > k) e.A.push((k >> 6) | 192), e.A.push((k & 63) | 128);
        else if (65536 > k)
          if (55296 <= k && 56319 >= k && g + 1 < f.length) {
            var l = f.charCodeAt(g + 1);
            56320 <= l &&
              57343 >= l &&
              ((k = 1024 * (k - 55296) + l - 56320 + 65536),
              e.A.push((k >> 18) | 240),
              e.A.push(((k >> 12) & 63) | 128),
              e.A.push(((k >> 6) & 63) | 128),
              e.A.push((k & 63) | 128),
              g++);
          } else
            e.A.push((k >> 12) | 224),
              e.A.push(((k >> 6) & 63) | 128),
              e.A.push((k & 63) | 128);
      }
      f = d.pop();
      for (f = c.B + c.A.length() - f; 127 < f; )
        d.push((f & 127) | 128), (f >>>= 7), c.B++;
      d.push(f);
      c.B++;
    }
    try {
      var m = new Uint8Array(c.B + c.A.length()),
        n = c.C,
        p = n.length;
      for (f = d = 0; f < p; f++) {
        var q = n[f];
        m.set(q, d);
        d += q.length;
      }
      var t = Ou(c.A);
      m.set(t, d);
      c.C = [m];
      return qd(m, !0);
    } catch (r) {
      a =
        String.fromCharCode(8) +
        String.fromCharCode(b) +
        String.fromCharCode(18) +
        String.fromCharCode(a.length) +
        a;
      if (od) a = E.btoa(a);
      else {
        b = [];
        for (m = c = 0; m < a.length; m++)
          (n = a.charCodeAt(m)),
            255 < n && ((b[c++] = n & 255), (n >>= 8)),
            (b[c++] = n);
        a = qd(b, void 0);
      }
      return a;
    }
  }
  function OO(a) {
    this.data = a || [];
  }
  I(OO, K);
  function PO(a) {
    this.data = a || [];
  }
  I(PO, K);
  function QO(a) {
    this.data = a || [];
  }
  I(QO, K);
  function RO(a) {
    a.handled = !0;
    void 0 === a.bubbles && (a.returnValue = "handled");
  }
  function SO(a, b) {
    a.__e3_ || (a.__e3_ = {});
    a = a.__e3_;
    a[b] || (a[b] = {});
    return a[b];
  }
  function TO(a, b, c) {
    this.kb = a;
    this.B = b;
    this.A = RO;
    this.C = c;
    this.id = ++UO;
    SO(a, b)[this.id] = this;
  }
  var UO = 0;
  function VO(a) {
    return function(b) {
      b || (b = window.event);
      if (b && !b.target)
        try {
          b.target = b.srcElement;
        } catch (d) {}
      var c = a.A.apply(a.kb, [b]);
      return b &&
        "click" == b.type &&
        (b = b.srcElement) &&
        "A" == b.tagName &&
        "javascript:void(0)" == b.href
        ? !1
        : c;
    };
  }
  TO.prototype.remove = function() {
    if (this.kb) {
      if (this.kb.removeEventListener)
        switch (this.C) {
          case 1:
            this.kb.removeEventListener(this.B, this.A, !1);
            break;
          case 4:
            this.kb.removeEventListener(this.B, this.A, !0);
        }
      delete SO(this.kb, this.B)[this.id];
      this.A = this.kb = null;
    }
  };
  function WO(a) {
    this.B = a;
    this.A = Array(a);
    for (var b = 0; b < a; b++) this.A[b] = 0;
  }
  function XO() {}
  function YO(a, b, c) {
    if (a instanceof WO)
      for (
        this.length = c || a.B / this.A, this.B = new WO(a.B), b = 0;
        b < this.length;
        b++
      )
        this[b] = a.A[b];
    else {
      if (La(a)) {
        for (b = 0; b < a.length; b++) this[b] = a[b];
        this.length = a.length;
      } else
        for (this.length = a || 0, b = 0; b < this.length; b++) this[b] = 0;
      this.B = new WO(this.length * this.A);
    }
    this.B.A = this;
  }
  I(YO, XO);
  YO.prototype.set = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length; c++) this[b + c] = a[c];
  };
  YO.prototype.slice = h();
  YO.prototype.subarray = w(null);
  function ZO(a, b, c) {
    YO.call(this, a, b, c);
  }
  I(ZO, YO);
  ZO.prototype.A = 1;
  function $O(a, b, c) {
    YO.call(this, a, b, c);
  }
  I($O, YO);
  $O.prototype.A = 1;
  function aP(a, b, c) {
    YO.call(this, a, b, c);
  }
  I(aP, YO);
  aP.prototype.A = 2;
  function bP(a, b, c) {
    YO.call(this, a, b, c);
  }
  I(bP, YO);
  bP.prototype.A = 2;
  function cP(a, b, c) {
    YO.call(this, a, b, c);
  }
  I(cP, YO);
  cP.prototype.A = 4;
  function dP(a, b, c) {
    YO.call(this, a, b, c);
  }
  I(dP, YO);
  dP.prototype.A = 4;
  function eP(a, b, c) {
    YO.call(this, a, b, c);
  }
  I(eP, YO);
  eP.prototype.A = 4;
  function fP(a, b, c) {
    YO.call(this, a, b, c);
  }
  I(fP, YO);
  fP.prototype.A = 4;
  function gP() {}
  I(gP, XO);
  "undefined" == typeof ArrayBuffer && (E.ArrayBuffer = WO);
  "undefined" == typeof Int8Array && (E.Int8Array = ZO);
  "undefined" == typeof Uint8Array && (E.Uint8Array = $O);
  "undefined" == typeof Int16Array && (E.Int16Array = aP);
  "undefined" == typeof Uint16Array && (E.Uint16Array = bP);
  "undefined" == typeof Int32Array && (E.Int32Array = cP);
  "undefined" == typeof Uint32Array && (E.Uint32Array = dP);
  "undefined" == typeof Float32Array && (E.Float32Array = eP);
  "undefined" == typeof Float64Array && (E.Float64Array = fP);
  "undefined" == typeof DataView && (E.DataView = gP);
  function hP(a, b) {
    b = pA(a.A, b || new mA());
    if (!b) throw Error("Could not find a 3d context, error: " + oA);
    return new LA(a, b);
  }
  function iP() {}
  function jP() {
    this.A = [];
  }
  jP.prototype.handleEvent = function(a, b) {
    for (var c = oa(this.A), d = c.next(); !d.done; d = c.next())
      (d = d.value), d(a, b);
  };
  function kP() {
    this.D = this.A = null;
    this.B = [];
  }
  function lP(a, b, c) {
    var d = c ? c : new Ul(mP, "buff_pass_logger");
    b.get(function(b) {
      a.A = b;
      b = a.B.length;
      for (var e = 0; e < b; e++) {
        var g = a.B[e];
        g.dl(a.A).apply(a.A, g.rc);
        g.sa && g.sa.done("bpl-branch");
      }
      a.B.length = 0;
      a.D = null;
      c || d.done("main-actionflow-branch");
    }, d);
  }
  function nP(a, b, c) {
    a.A
      ? b(a.A).apply(a.A, c)
      : (a.B.push({ dl: b, rc: c, sa: null }), a.D && lP(a, a.D));
  }
  kP.prototype.F = function(a, b, c, d, e, f, g) {
    nP(
      this,
      function(a) {
        return a.F;
      },
      arguments
    );
  };
  kP.prototype.C = function(a, b, c) {
    nP(
      this,
      function(a) {
        return a.C;
      },
      arguments
    );
  };
  var mP = new $l(im());
  function oP(a) {
    Dg.apply(this, arguments);
  }
  C(oP, Dg);
  Ia(oP);
  function pP() {
    this.A = {};
  }
  pP.prototype.load = function(a, b, c) {
    var d;
    0 === mo(a)
      ? (d = 0)
      : 3 === mo(a)
        ? (d = 3)
        : 1 === mo(a)
          ? (d = 1)
          : 2 === mo(a) ? (d = 2) : 5 === mo(a) && (d = 5);
    this.A[d].load(a, b, c);
  };
  function qP(a) {
    this.data = a || [];
  }
  I(qP, K);
  function rP(a, b) {
    UA.call(this);
    this.A = a;
    this.canvas = b;
  }
  C(rP, UA);
  rP.prototype.getContext = function(a, b) {
    a(this.A, b);
  };
  rP.prototype.D = u("canvas");
  rP.prototype.C = function() {
    return this.canvas ? this.canvas.A : null;
  };
  rP.prototype.F = h();
  function sP(a, b, c, d, e, f) {
    U.call(this, "SCIR", [].concat(wa(arguments)));
  }
  C(sP, U);
  function tP(a, b, c, d, e) {
    U.call(this, "SCVR", [].concat(wa(arguments)));
  }
  C(tP, U);
  function uP(a, b, c, d, e, f, g) {
    this.F = a;
    this.C = b;
    this.H = c;
    this.A = new yr(d, void 0, Bd(a, 55));
    this.G = e;
    this.I = f;
    this.B = g;
    this.D = {};
  }
  uP.prototype.load = function(a, b, c) {
    var d = this.D[a];
    if (d) d.C(c, b);
    else {
      if ("pa" === a) {
        b.ua("pard0");
        var e = "pard1";
        var f = new AF(this.A, this.C, this.F, this.H, this.G, this.I, null);
        d = G(function(a, b) {
          this.B && wB(a.ja, this.B.A, b);
        }, this);
        f.C(d, b);
      } else
        "ph" === a
          ? (b.ua("phrd0"),
            (e = "phrd1"),
            (f = new sP(this.A, this.C, this.F, this.H, this.G, this.I)))
          : "vd" === a &&
            (b.ua("vdrd0"),
            (e = "vdrd1"),
            (f = new tP(this.A, this.C, this.F, this.H, this.G)),
            (d = G(function(a, b) {
              this.B && a.bind(this.B.G, b);
            }, this)),
            f.C(d, b));
      this.D[a] = f;
      f.get(function(a, b) {
        b.ua(e);
        c(a, b);
      }, b);
    }
    return new hA();
  };
  function vP(a, b, c) {
    var d = a.D.pa;
    d
      ? d.B()
        ? b(d.A())
        : d.C(function(a) {
            b(a);
          }, c)
      : a.load("pa", c, function(a) {
          b(a);
        });
  }
  function wP(a, b, c, d, e) {
    this.D = a;
    this.H = b;
    this.G = c;
    this.F = d;
    this.B = this.A = null;
    this.C = e || Ha;
  }
  wP.prototype.load = function(a, b, c) {
    if (this.A) b(this.A, c), this.C(this.A);
    else {
      var d = this;
      d.B || (d.B = new fC(d.G, d.D, d.H, this.F));
      d.B.get(function(a, c) {
        d.A = a;
        b(d.A, c);
        d.C(d.A);
      }, c);
    }
  };
  function xP(a, b, c, d) {
    U.call(this, "SCHI", [].concat(wa(arguments)));
  }
  C(xP, U);
  function yP(a, b, c, d) {
    this.B = a;
    this.D = b;
    this.C = c;
    this.F = d;
    this.A = null;
  }
  yP.prototype.load = function(a, b, c) {
    this.A || (this.A = new xP(this.D, this.B, this.C, this.F));
    this.A.get(function(a, c) {
      b(a, c);
    }, c);
  };
  function zP(a, b, c) {
    U.call(this, "SCVI", [].concat(wa(arguments)));
  }
  C(zP, U);
  function AP(a, b, c) {
    this.B = a;
    this.D = b;
    this.C = c;
    this.A = null;
  }
  AP.prototype.load = function(a, b, c) {
    this.A || (this.A = new zP(this.D, this.B, this.C));
    this.A.get(function(a, c) {
      b(a, c);
    }, c);
  };
  function BP(a, b, c, d, e, f, g, k, l) {
    U.call(this, "LOG", [].concat(wa(arguments)));
  }
  C(BP, U);
  function CP(a, b) {
    U.call(this, "VLG", [].concat(wa(arguments)));
  }
  C(CP, U);
  function DP() {
    this.D = new EP();
  }
  DP.prototype.B = w(!0);
  DP.prototype.get = function(a, b) {
    a(this.D, b);
  };
  DP.prototype.A = u("D");
  DP.prototype.C = function(a, b) {
    this.get(a, b);
  };
  function EP() {}
  EP.prototype.F = h();
  EP.prototype.C = h();
  function FP(a, b) {
    U.call(this, "OPH", [].concat(wa(arguments)));
  }
  C(FP, U);
  function GP(a) {
    this.data = a || [];
  }
  I(GP, K);
  GP.prototype.Ba = function() {
    return new ko(this.data[0]);
  };
  GP.prototype.fa = function() {
    return new Eg(this.data[1]);
  };
  function HP() {
    this.B = BB(0);
    this.B.listen(this.C, this);
    this.A = CB(0);
  }
  HP.prototype.C = function(a) {
    var b = this.A.get();
    b || ((b = new DB()), this.A.set(b, a));
    b.top = 0;
    b.bottom = this.B.get() || 0;
    b.A = !0;
    b.left = 0;
    b.right = 0;
    zB(this.A, a);
  };
  HP.prototype.bind = function(a, b) {
    wB(this.B, a, b);
  };
  function IP(a) {
    return 2 === mo(a) || 1 === mo(a) || 3 === mo(a) || 5 === mo(a);
  }
  function JP(a) {
    switch (a) {
      case 1:
        return new EB(1);
      case 3:
        return new EB(3);
    }
    return new EB(2);
  }
  function KP(a) {
    this.C = a;
    this.B = Ha;
  }
  KP.prototype.requestAnimationFrame = function(a) {
    this.B = a;
    a = this.C;
    a.H.push(this);
    Br(a.B);
  };
  KP.prototype.A = function() {
    var a = this.C;
    return a.O && a.J ? a.ea : Ua();
  };
  KP.prototype.animate = function(a) {
    this.B(a);
  };
  function IO(a, b, c) {
    Yj.call(this);
    this.D = pm();
    var d = new Ul(this.D, "application");
    this.Y = b;
    this.B = a;
    R(oP.Te(), new Dg(a.data[5]));
    this.W = b.H;
    this.qa = b.G;
    var e = (this.Aa = new LI()),
      f = new qP();
    a = new lh(a.data[2]);
    f.data[0] = L(a, 11) ? O(a, 11) : "//maps.gstatic.com";
    e = e.F;
    f = null != f && f.Sa ? f.Sa() : f;
    e.add("g-3ZqzcwcZGCQ", f);
    this.M = b.D;
    this.ia = b.B;
    this.R = b.I;
    this.T = b.K;
    new AB().freeze();
    this.width = CB(0);
    this.height = CB(0);
    this.za = !0;
    this.Ja = CB(0);
    this.ie = BB(new AB().freeze());
    new AB().freeze();
    this.Pb = BB(0, !1);
    BB(0, !1);
    new vB(!0, 0, null);
    f = new JB();
    e = this.B;
    a = new lh(e.data[2]);
    f.data[0] = !0;
    f.data[76] = Bd(nh(e), 4, !0);
    var g;
    for (g = 0; g < Q(a, 3); ++g) {
      var k = Ed(a, 3, g);
      Dd(f, 13, k);
    }
    R(new jh(P(f, 16)), new jh(e.data[1]));
    f.data[75] = O(a, 10);
    f.data[78] = Bd(nh(e), 7);
    for (g = 0; g < Q(a, 9); ++g) (k = Ed(a, 9, g)), Dd(f, 73, k);
    L(e, 14) && (f.data[86] = Bd(e, 14));
    L(e, 15) && (f.data[87] = O(e, 15));
    L(e, 16) && R(new Kf(P(f, 89)), new Kf(e.data[16]));
    L(nh(e), 3) &&
      ((e = Bd(nh(e), 3)),
      (f.data[88] = e),
      (new Jf(P(new Kf(P(f, 89)), 1)).data[0] = e));
    g = b.getContext();
    g.tb ? (f.data[20] = 1) : g.Xb ? (f.data[20] = 2) : g.A && (f.data[20] = 3);
    f.data[81] = this.W.id;
    f.data[82] = "viewport";
    BB(0, Bd(f, 2));
    this.Ga = new WB(new KP(this.M));
    a = Yi("div");
    a.style.width = "100%";
    a.style.height = "100%";
    e = new WB(new KP(this.M));
    b = new rP(g, b.C);
    b.B = a;
    c ||
      (Bd(this.B, 9, !0)
        ? ((c = new jP()),
          this.ia.Sb("visibilitychange", c, c.handleEvent),
          (c = new BP(
            O(new lh(this.B.data[2]), 0),
            this.ia,
            new iP(),
            c,
            this.R,
            !0,
            null,
            O(new Cg(this.B.data[11]), 2),
            O(this.B, 6)
          )))
        : (c = new DP()));
    this.xa = c;
    c = this.N = new kP();
    a = this.xa;
    c.B.length ? lP(c, a, d) : (c.D = a);
    this.ja = new uP(f, b, this.R, this.M, this.N, e, this.T);
    this.ma = null;
    this.C = { Wd: null, zoom: null };
    this.A = null;
    c = this.ja;
    e = this.N;
    a = new pP();
    this.ma = g = new wP(f, this.R, c, e, G(this.Gl, this));
    k = this.Y.F;
    a.A[1] = g;
    a.A[2] = new yP(f, c, e, k);
    a.A[5] = new AP(f, c, e);
    this.mb = new HP();
    this.F = new cM(
      this.W,
      f,
      this.Aa,
      this.ia,
      this.M,
      this.Ga,
      this.D,
      b,
      this.N,
      Ha,
      Ha,
      a,
      this.ja,
      null
    );
    LP(this, d);
    this.Fb = CB(new AB().freeze());
    new AB().freeze();
    f = new Sm(1e3);
    new AB().freeze();
    this.L = BB(0);
    this.L.listen(this.fl, this);
    this.la = BB(0);
    this.la.listen(this.hl, this);
    this.ea = !1;
    this.I = BB(new AB().freeze());
    this.I.listen(this.gl, this);
    BB(0, f);
    BB(0);
    Bd(nh(this.B), 3) && MP(this, d);
    this.J = null;
    this.G = [];
    this.aa = new IM();
    Fj(E, "resize", G(this.hd, this, d), !1, this);
    NP(this, d);
    this.hd(d);
    d.done("main-actionflow-branch");
  }
  C(IO, Yj);
  y = IO.prototype;
  y.bind = function(a, b, c, d, e, f, g) {
    wB(this.Fb, a, g);
    wB(this.Ja, b, g);
    wB(this.width, c, g);
    wB(this.height, d, g);
    wB(this.ie, e, g);
    wB(this.Pb, f, g);
  };
  function OP(a, b) {
    jt = a;
    kt = b;
  }
  function NP(a, b) {
    a.F.C(function(b, d) {
      a.A = b;
      wB(a.A.width, a.width, d);
      wB(a.A.height, a.height, d);
      wB(a.A.aa, a.mb.A, d);
      wB(a.L, a.A.S, d);
      wB(a.la, a.A.J, d);
      wB(a.I, a.A.G, d);
      for (b = 0; b < a.G.length; ++b) hL(a.A.F.get(), a.G[b].sa, a.G[b].va);
      a.G.length = 0;
      a.hd(d);
    }, b);
  }
  function LP(a, b) {
    if (Bd(a.B, 9, !0)) {
      var c = new CP(O(new lh(a.B.data[2]), 0), a.R);
      Am(
        [c, a.F],
        function(b) {
          var d = c.A(),
            f = a.F.A();
          d.bind(f.T, f.O, f.N, f.F, f.G, f.J, b);
        },
        b
      );
      c.get(Ha, b);
    }
  }
  y.fa = function() {
    var a = this.A && this.A.S.get();
    a || (a = new Eg());
    return a;
  };
  y.view = function(a, b) {
    if (L(a, 0) || L(a, 1)) {
      var c = new Ul(this.D, "move_camera"),
        d = this;
      this.F.get(function(c, f) {
        d.A = c;
        PP(d, a, f, b);
      }, c);
      c.done("main-actionflow-branch");
    }
  };
  function PP(a, b, c, d) {
    if (a.ea) JM(a.aa, { view: b, sa: c });
    else {
      L(b, 0) && (a.ea = !0);
      var e = function() {
        d && d(c);
        L(b, 0) && (a.ea = !1);
        if (!a.aa.Ya()) {
          var e = KM(a.aa);
          PP(a, e.view, e.sa);
        }
      };
      if (!L(b, 0) && L(b, 1)) {
        var f = a.A.S.get();
        if (f) {
          var g = new Eg();
          R(g, f);
          Gn(b.fa(), g);
          a.A.F.get().zc(g, a.I.get() || null, JP(M(b, 2, 2)), c, e);
        }
      } else
        IP(b.Ba()) &&
          ((f = new GP()),
          R(f, b),
          ((g = new Eg(P(f, 1))), L(g, 2) && L(Ng(g), 0)) ||
            (Ug(Og(g), a.width.get() || 1), Wg(Og(g), a.height.get() || 1)),
          QP(a, f, c, e));
    }
  }
  y.Gl = function(a) {
    null !== this.C.Wd && (a.T = this.C.Wd);
    null !== this.C.zoom && (a.ja = this.C.zoom);
    a.Fb = Bd(nh(this.B), 2);
    this.C = { Wd: null, zoom: null };
  };
  function QP(a, b, c, d) {
    var e = new Eg();
    R(e, b.fa());
    a.hd(c);
    a.A.F.get().zc(e, b.Ba(), JP(M(b, 2, 2)), c, d);
  }
  y.hd = function(a) {
    var b = "ga" === this.T.get() ? this.qa : this.W,
      c = b.clientWidth;
    b = b.clientHeight;
    if (this.Y.C) {
      var d = this.Y.C,
        e = MD(this.Y.getContext());
      var f = window;
      f = F(f.devicePixelRatio)
        ? f.devicePixelRatio
        : f.matchMedia ? gj(3) || gj(2) || gj(1.5) || gj(1) || 0.75 : 1;
      ND(d, e, f, c, b);
    }
    this.width.set(c, a);
    this.height.set(b, a);
    zB(this.T.F, a);
  };
  function MP(a, b) {
    a.F.C(function(b, d) {
      new FP(b.H, a.xa).get(function(c, d) {
        c.bind(a.L, a.I, b.F, d);
      }, d);
    }, b);
  }
  y.fl = function() {
    var a = this.L.get();
    a || (a = new Eg());
    this.dispatchEvent(new nj("CameraChanged", a));
  };
  function RP(a, b) {
    var c = new Ul(a.D, "show_road_labels");
    a.za = b;
    vP(
      a.ja,
      function(b) {
        b.ia = a.za;
        CE(b, c);
      },
      c
    );
    c.done("main-actionflow-branch");
  }
  y.hl = function() {
    var a = this.la.get();
    a || (a = new Eg());
    this.dispatchEvent(new nj("StableCameraChanged", a));
  };
  y.gl = function() {
    var a = this.I.get();
    a &&
      (eu(no(a).$()),
      (a = no(a)),
      (this.J && a && dh(this.J) == dh(a) && ju(this.J, a)) ||
        ((this.J = new ah(Kd(a))),
        this.dispatchEvent(new nj("PhotoChanged", a))));
  };
  function SP(a, b, c) {
    c = c || new Ul(a.D, "wait_for_render");
    a.A
      ? hL(a.A.F.get(), c, b)
      : a.G.push({ sa: c, va: c.va(b, "viewer-wait-for-stable") });
  }
  function TP(a, b, c, d, e, f) {
    this.ia = c;
    this.xa = d;
    var g = document.createElement("div");
    this.K = g;
    a.appendChild(g);
    g.style.height = g.style.width = "100%";
    this.C = c = document.createElement("canvas");
    this.M = a;
    a = new lA(c);
    var k = (d = null);
    if ("html5" != e && "html4" != e)
      try {
        if ("webgl" == e) d = hP(a);
        else if ("webgl_debug" == e) {
          var l = new mA();
          l.B = !0;
          l.A = !0;
          d = hP(a, l);
        }
      } catch (p) {}
    this.O = !!d;
    d || "html4" == e || (k = c.getContext("2d"));
    e = new TA(d, k, g);
    e = new FO(g, a, e);
    this.T = l = new oh();
    l.A.data[14] = !0;
    b = new PO(b);
    a = {};
    for (k = 0; k < Q(b, 8); ++k) a[Ed(b, 8, k)] = !0;
    d = new QO(b.data[24]);
    k = O(d, 8);
    var m = a[43] ? "maps_sv.tactile_lite" : "apiv3";
    l.A.data[15] = m;
    Bd(new OO(b.data[2]), 15) || (k = k.replace("http:", "https:"));
    qh(l, k);
    var n = Q(d, 7);
    for (k = 0; k < n; ++k) rh(l, Ed(d, 7, k) + "?cb_client=" + m);
    m = Q(d, 10);
    for (k = 0; k < m; ++k) sh(l, Ed(d, 10, k));
    th(l, O(d, 4));
    new mh(P(l.A, 4)).data[2] = !0;
    uh(l, O(new OO(b.data[2]), 0));
    vh(l, O(new OO(b.data[2]), 1));
    l.A.data[9] = !1;
    wh(l, !!a[56]);
    this.A = HO(l, e);
    f &&
      ((b = new $l({})),
      (b = new Ul(b, "apiv3")),
      SP(
        this.A,
        function() {
          f();
        },
        b
      ));
    this.W = b = new Tj();
    b.listen(this.A, "CameraChanged", G(this.N, this));
    b.listen(this.A, "PhotoChanged", G(this.R, this));
    $a(
      "touchstart touchmove touchend mousedown mousemove mouseup pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp click".split(
        " "
      ),
      function(a) {
        if (!g.addEventListener && g.attachEvent) {
          var b = new TO(g, a, 2);
          g.attachEvent("on" + a, VO(b));
        } else
          g.addEventListener && g.addEventListener(a, RO, void 0),
            new TO(g, a, 1);
      }
    );
    this.F = this.J = "";
    this.H = {};
    this.D = new JO(0, 0, 0);
    this.G = !1;
    this.I = c.height / c.width;
    this.B = !1;
  }
  TP.prototype.L = function() {
    if (!this.G) {
      var a = new GP(),
        b = new Eg(P(a, 1)),
        c = !1,
        d = this.F;
      if (d && this.J != this.F) {
        this.H[d] &&
          ((a.data[2] = 3),
          (Kg(b).data[2] = this.H[d].lat),
          (Kg(b).data[1] = this.H[d].lng),
          Sg(Kg(b), 3));
        c = new ko(P(a, 0));
        c.data[0] = 1;
        c = oo(c);
        var e = new KO();
        if ("F:" == d.substring(0, 2)) (e.ca = d.substring(2)), (e.A = 3);
        else if (d.match("^[-_A-Za-z0-9]{21}[AQgw]$")) (e.ca = d), (e.A = 2);
        else if (MO)
          try {
            for (var f = new Qu(ud(d)); Ru(f); )
              switch (f.C) {
                case 1:
                  var g = f.A;
                  a: {
                    for (
                      var k = void 0, l = void 0, m = g, n = 0, p = 0;
                      4 > p;
                      p++
                    )
                      if (
                        ((l = m.B[m.A++]), (n |= (l & 127) << (7 * p)), 128 > l)
                      ) {
                        m.G = n >>> 0;
                        m.F = 0;
                        break a;
                      }
                    l = m.B[m.A++];
                    n |= (l & 127) << 28;
                    k = 0 | ((l & 127) >> 4);
                    if (128 > l) (m.G = n >>> 0), (m.F = k >>> 0);
                    else {
                      for (p = 0; 5 > p; p++)
                        if (
                          ((l = m.B[m.A++]),
                          (k |= (l & 127) << (7 * p + 3)),
                          128 > l)
                        ) {
                          m.G = n >>> 0;
                          m.F = k >>> 0;
                          break a;
                        }
                      m.H = !0;
                    }
                  }
                  var q = g.G,
                    t = g.F;
                  if ((k = t & 2147483648))
                    (q = (~q + 1) >>> 0),
                      (t = ~t >>> 0),
                      0 == q && (t = (t + 1) >>> 0);
                  l = 4294967296 * t + q;
                  var r = k ? -l : l;
                  e.A = r;
                  break;
                case 2:
                  var v = Mu(f.A),
                    x = f.A,
                    z = x.B,
                    A = x.A;
                  l = A + v;
                  m = [];
                  for (k = ""; A < l; ) {
                    var H = z[A++];
                    if (128 > H) m.push(H);
                    else if (192 > H) continue;
                    else if (224 > H) {
                      var B = z[A++];
                      m.push(((H & 31) << 6) | (B & 63));
                    } else if (240 > H) {
                      B = z[A++];
                      var J = z[A++];
                      m.push(((H & 15) << 12) | ((B & 63) << 6) | (J & 63));
                    } else if (248 > H) {
                      B = z[A++];
                      J = z[A++];
                      var D = z[A++];
                      n =
                        ((H & 7) << 18) |
                        ((B & 63) << 12) |
                        ((J & 63) << 6) |
                        (D & 63);
                      n -= 65536;
                      m.push(((n >> 10) & 1023) + 55296, (n & 1023) + 56320);
                    }
                    8192 <= m.length &&
                      ((k += String.fromCharCode.apply(null, m)),
                      (m.length = 0));
                  }
                  l = k;
                  if (8192 >= m.length)
                    var T = String.fromCharCode.apply(null, m);
                  else {
                    n = "";
                    for (p = 0; p < m.length; p += 8192) {
                      var S = nb(m, p, p + 8192);
                      n += String.fromCharCode.apply(null, S);
                    }
                    T = n;
                  }
                  k = l + T;
                  x.A = A;
                  r = k;
                  e.ca = r;
                  break;
                default:
                  Su(f);
              }
          } catch (W) {}
        else
          try {
            (k = sd(d)),
              8 == k.charCodeAt(0) &&
                18 == k.charCodeAt(2) &&
                k.charCodeAt(3) == k.length - 4 &&
                ((l = k.slice(4)), (e.ca = l), (e.A = k.charCodeAt(1)));
          } catch (W) {}
        "" == (null == e.ca ? "" : e.ca) && ((e.ca = d), (e.A = 2));
        Rd(sg(eh(c)), null == e.ca ? "" : e.ca);
        Qd(sg(eh(c)), null == e.A ? 0 : e.A);
        c = !0;
        this.J = d;
      }
      this.D &&
        ((b.data[3] = yb(2 * Math.atan(Math.pow(2, 1 - this.D.zoom) * this.I))),
        (b = Mg(b)),
        (b.data[0] = this.D.heading),
        (b.data[1] = this.D.pitch + 90),
        (c = !0));
      c && this.A.view(a);
    }
    this.B = !1;
  };
  TP.prototype.N = function(a) {
    this.B ||
      ((this.G = !0),
      (a = a.target),
      (this.D = new JO(
        Tg(Lg(a)),
        N(Lg(a), 1) - 90,
        1 - Math.log(Math.tan(xb(Ig(a)) / 2) / this.I) / Math.log(2)
      )),
      this.ia(),
      (this.G = !1));
  };
  TP.prototype.R = function(a) {
    this.B ||
      ((a = a.target),
      L(a.$(), 1) &&
        ((this.G = !0),
        (this.F = NO(O(rg(a.$()), 1), M(rg(a.$()), 0))),
        this.xa(),
        (this.J = NO(O(rg(a.$()), 1), M(rg(a.$()), 0))),
        (this.G = !1)));
  };
  TP.prototype.aa = function(a, b) {
    var c = this.A,
      d = "ga" === c.T.get() ? c.qa : c.W;
    uk(d, a, b);
    d = new Ul(c.D, "resize");
    c.hd(d);
    d.done("main-actionflow-branch");
    this.I = b / a;
  };
  TP.prototype.setSize = TP.prototype.aa;
  TP.prototype.ja = function() {
    var a = this.C,
      b = document.createElement("div");
    b.innerText = "For development purposes only";
    b.style.cssText =
      "position:absolute;pointer-events:none;transform:translate(-50%,-50%);z-index:1000;top:50%;color:white;font-size:20px;left:50%;background-color:rgba(0,0,0,0.3);padding:5px;border-radius:3px;text-align:center;";
    this.M.insertBefore(b, this.M.firstChild);
    a.style.filter = "invert(1)";
    a.style.filter || (a.style.opacity = "0.2");
    setInterval(function() {
      var b = getComputedStyle(a);
      0 > b.filter.indexOf("invert(1)") &&
        "0.2" != b.opacity &&
        a.parentElement &&
        a.parentElement.removeChild(a);
    }, 3e3);
  };
  TP.prototype.dV = TP.prototype.ja;
  TP.prototype.Y = function(a) {
    var b = this.A,
      c = b.ma.A;
    c ? (c.T = a) : (b.C.Wd = a);
  };
  TP.prototype.enableClickToGo = TP.prototype.Y;
  TP.prototype.ea = function(a) {
    RP(this.A, a);
  };
  TP.prototype.showRoadLabels = TP.prototype.ea;
  TP.prototype.la = function(a) {
    var b = this.A,
      c = b.ma.A;
    c ? (c.ja = a) : (b.C.zoom = a);
  };
  TP.prototype.enableScrollToZoom = TP.prototype.la;
  TP.prototype.za = function(a, b) {
    if (this.O && a && !b) {
      var c = document.createElement("canvas"),
        d = c.getContext("2d");
      this.K.textContent = "";
      c = new lA(c);
      d = new TA(null, d, this.K);
      d = new FO(this.K, c, d);
      c = this.W;
      Xj(c);
      this.A = HO(this.T, d);
      c.listen(this.A, "CameraChanged", G(this.N, this));
      c.listen(this.A, "PhotoChanged", G(this.R, this));
      this.O = !1;
      this.L();
    }
    OP(
      {
        wh: function(b) {
          if (!a) return null;
          var c = a(b);
          if (c) {
            var d = c.tiles.worldSize.width,
              e = c.tiles.worldSize.height,
              l = d,
              m = e;
            c.tiles.imageSize &&
              ((l = c.tiles.imageSize.width), (m = c.tiles.imageSize.height));
            var n = 0,
              p = 0;
            c.tiles.imagePosition &&
              ((n = c.tiles.imagePosition.x), (p = c.tiles.imagePosition.y));
            var q = c.tiles.tileSize.width,
              t = c.tiles.tileSize.height,
              r = new gg();
            Rd(sg(r), b);
            Qd(sg(r), 2);
            xg(r).data[9] = b;
            xg(r).data[0] = 2;
            xg(r).data[1] = 2;
            new ce(P(new Df(P(xg(r), 3)), 1)).data[0] = t;
            new ce(P(new Df(P(xg(r), 3)), 1)).data[1] = q;
            new ce(P(xg(r), 2)).data[0] = m;
            new ce(P(xg(r), 2)).data[1] = l;
            new ce(P(new Ff(P(xg(r), 4)), 0)).data[0] = e;
            new ce(P(new Ff(P(xg(r), 4)), 0)).data[1] = d;
            new ce(P(new Ff(P(xg(r), 4)), 1)).data[1] = n;
            new ce(P(new Ff(P(xg(r), 4)), 1)).data[0] = p;
            for (b = [{ width: l, height: m }]; l > q || m > t; )
              (l = (l + 1) >> 1),
                (m = (m + 1) >> 1),
                b.push({ width: l, height: m });
            for (l = b.length - 1; 0 <= l; --l)
              (m = new ce(P(new Ef(Fd(new Df(P(xg(r), 3)), 0)), 0))),
                (m.data[1] = b[l].width),
                (m.data[0] = b[l].height);
            l = new Oe(Fd(r, 5));
            new Pe(P(l, 0)).data[0] = 1;
            l = new he(P(new de(P(l, 1)), 2));
            l.data[0] = c.tiles.centerHeading;
            l.data[1] = c.tiles.centerTilt || 90;
            l.data[2] = c.tiles.centerRoll || 0;
            c = r;
          } else c = null;
          return c;
        },
        In: function(b, c, d, k) {
          return a(b).tiles.getTileUrl(b, c, d, k);
        }
      },
      !!b
    );
  };
  TP.prototype.registerPanoProvider = TP.prototype.za;
  TP.prototype.qa = u("D");
  TP.prototype.getPov = TP.prototype.qa;
  TP.prototype.Ja = function(a) {
    this.D = a;
    this.B || (as(this.L, this), (this.B = !0));
  };
  TP.prototype.setPov = TP.prototype.Ja;
  TP.prototype.ma = u("F");
  TP.prototype.getPano = TP.prototype.ma;
  TP.prototype.Ga = function(a) {
    this.F = a;
    this.B || (as(this.L, this), (this.B = !0));
  };
  TP.prototype.setPano = TP.prototype.Ga;
  TP.prototype.Aa = ba("H");
  TP.prototype.setNeighborLocation = TP.prototype.Aa;
  Ca("google.maps.internal.iv", function(a, b, c, d, e, f) {
    return new TP(a, b, c, d, e, f);
  });
}.call(this));
google.maps.__gjsload__("imagery_viewer", function(_) {
  var Yr = _.l();
  Yr.prototype.b =
    window.google.maps.internal && window.google.maps.internal.iv;
  delete window.google.maps.internal;
  _.fe("imagery_viewer", new Yr());
});






let hahaha = document.body.querySelector("canvas")
let a7= hahaha.getContext('webgl')
a7.getParameter(a7.ARRAY_BUFFER_BINDING);
console.log(a7.ARRAY_BUFFER)

void a7.clear(a7.getParameter(a7.COLOR_BUFFER_BIT))
void a7.clear(a7.getParameter(a7.DEPTH_BUFFER_BIT))
void a7.clear(a7.STENCIL_BUFFER_BIT)
