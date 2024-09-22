/**
Copyright 2024 Google LLC
This Software is made available under Section 3 of the General Service Terms of the Google Cloud Platform Service Specific Terms at https://cloud.google.com/terms/service-terms, except that Customer may additionally embed and/or distribute this Software to Customer End Users in connection with Customer Applications integrating with the Dialogflow Service.
*/
'use strict';
var DF_M;

function DF_Maa(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}
var DF_Mba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function DF_Mca(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var DF_Ma = DF_Mca(this);

function DF_Mb(a, b) {
    if (b) a: {
        var c = DF_Ma;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && DF_Mba(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}
DF_Mb("Symbol", function(a) {
    function b(f) {
        if (this instanceof b) throw new TypeError("Symbol is not a constructor");
        return new c(d + (f || "") + "_" + e++, f)
    }

    function c(f, g) {
        this.g = f;
        DF_Mba(this, "description", {
            configurable: !0,
            writable: !0,
            value: g
        })
    }
    if (a) return a;
    c.prototype.toString = function() {
        return this.g
    };
    var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
        e = 0;
    return b
});
DF_Mb("Symbol.iterator", function(a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
        var d = DF_Ma[b[c]];
        typeof d === "function" && typeof d.prototype[a] != "function" && DF_Mba(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return DF_Mda(DF_Maa(this))
            }
        })
    }
    return a
});

function DF_Mda(a) {
    a = {
        next: a
    };
    a[Symbol.iterator] = function() {
        return this
    };
    return a
}

function DF_Mc(a) {
    return DF_Mea(a, a)
}

function DF_Mea(a, b) {
    a.raw = b;
    Object.freeze && (Object.freeze(a), Object.freeze(b));
    return a
}

function DF_Md(a) {
    var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if (typeof a.length == "number") return {
        next: DF_Maa(a)
    };
    throw Error(String(a) + " is not an iterable or ArrayLike");
}

function DF_Me(a) {
    if (!(a instanceof Array)) {
        a = DF_Md(a);
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        a = c
    }
    return a
}

function DF_Mfa(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
}
var DF_Mga = typeof Object.assign == "function" ? Object.assign : function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d)
            for (var e in d) DF_Mfa(d, e) && (a[e] = d[e])
    }
    return a
};
DF_Mb("Object.assign", function(a) {
    return a || DF_Mga
});
var DF_Mha = typeof Object.create == "function" ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    },
    DF_Mia = function() {
        function a() {
            function c() {}
            new c;
            Reflect.construct(c, [], function() {});
            return new c instanceof c
        }
        if (typeof Reflect != "undefined" && Reflect.construct) {
            if (a()) return Reflect.construct;
            var b = Reflect.construct;
            return function(c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            e === void 0 && (e = c);
            e = DF_Mha(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c,
                e, d) || e
        }
    }(),
    DF_Mja;
if (typeof Object.setPrototypeOf == "function") DF_Mja = Object.setPrototypeOf;
else {
    var DF_Mka;
    a: {
        var DF_Mla = {
                a: !0
            },
            DF_Mma = {};
        try {
            DF_Mma.__proto__ = DF_Mla;
            DF_Mka = DF_Mma.a;
            break a
        } catch (a) {}
        DF_Mka = !1
    }
    DF_Mja = DF_Mka ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a
    } : null
}
var DF_Mna = DF_Mja;

function DF_Mf(a, b) {
    a.prototype = DF_Mha(b.prototype);
    a.prototype.constructor = a;
    if (DF_Mna) DF_Mna(a, b);
    else
        for (var c in b)
            if (c != "prototype")
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d)
                } else a[c] = b[c];
    a.Fd = b.prototype
}

function DF_Moa() {
    this.F = !1;
    this.i = null;
    this.h = void 0;
    this.g = 1;
    this.O = this.G = 0;
    this.j = null
}

function DF_Mpa(a) {
    if (a.F) throw new TypeError("Generator is already running");
    a.F = !0
}
DF_Moa.prototype.L = function(a) {
    this.h = a
};

function DF_Mqa(a, b) {
    a.j = {
        oc: b,
        td: !0
    };
    a.g = a.G || a.O
}
DF_Moa.prototype.return = function(a) {
    this.j = {
        return: a
    };
    this.g = this.O
};

function DF_Mg(a, b, c) {
    a.g = c;
    return {
        value: b
    }
}

function DF_Mra(a) {
    a.G = 0;
    var b = a.j.oc;
    a.j = null;
    return b
}

function DF_Msa(a) {
    this.g = new DF_Moa;
    this.h = a
}

function DF_Mta(a, b) {
    DF_Mpa(a.g);
    var c = a.g.i;
    if (c) return DF_Mua(a, "return" in c ? c["return"] : function(d) {
        return {
            value: d,
            done: !0
        }
    }, b, a.g.return);
    a.g.return(b);
    return DF_Mva(a)
}

function DF_Mua(a, b, c, d) {
    try {
        var e = b.call(a.g.i, c);
        if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return a.g.F = !1, e;
        var f = e.value
    } catch (g) {
        return a.g.i = null, DF_Mqa(a.g, g), DF_Mva(a)
    }
    a.g.i = null;
    d.call(a.g, f);
    return DF_Mva(a)
}

function DF_Mva(a) {
    for (; a.g.g;) try {
        var b = a.h(a.g);
        if (b) return a.g.F = !1, {
            value: b.value,
            done: !1
        }
    } catch (c) {
        a.g.h = void 0, DF_Mqa(a.g, c)
    }
    a.g.F = !1;
    if (a.g.j) {
        b = a.g.j;
        a.g.j = null;
        if (b.td) throw b.oc;
        return {
            value: b.return,
            done: !0
        }
    }
    return {
        value: void 0,
        done: !0
    }
}

function DF_Mwa(a) {
    this.next = function(b) {
        DF_Mpa(a.g);
        a.g.i ? b = DF_Mua(a, a.g.i.next, b, a.g.L) : (a.g.L(b), b = DF_Mva(a));
        return b
    };
    this.throw = function(b) {
        DF_Mpa(a.g);
        a.g.i ? b = DF_Mua(a, a.g.i["throw"], b, a.g.L) : (DF_Mqa(a.g, b), b = DF_Mva(a));
        return b
    };
    this.return = function(b) {
        return DF_Mta(a, b)
    };
    this[Symbol.iterator] = function() {
        return this
    }
}

function DF_Mxa(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function DF_Mh(a) {
    return DF_Mxa(new DF_Mwa(new DF_Msa(a)))
}

function DF_Mi() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
    return b
}
DF_Mb("Reflect", function(a) {
    return a ? a : {}
});
DF_Mb("Reflect.construct", function() {
    return DF_Mia
});
DF_Mb("Reflect.setPrototypeOf", function(a) {
    return a ? a : DF_Mna ? function(b, c) {
        try {
            return DF_Mna(b, c), !0
        } catch (d) {
            return !1
        }
    } : null
});
DF_Mb("Promise", function(a) {
    function b(g) {
        this.h = 0;
        this.i = void 0;
        this.g = [];
        this.L = !1;
        var h = this.j();
        try {
            g(h.resolve, h.reject)
        } catch (k) {
            h.reject(k)
        }
    }

    function c() {
        this.g = null
    }

    function d(g) {
        return g instanceof b ? g : new b(function(h) {
            h(g)
        })
    }
    if (a) return a;
    c.prototype.h = function(g) {
        if (this.g == null) {
            this.g = [];
            var h = this;
            this.i(function() {
                h.G()
            })
        }
        this.g.push(g)
    };
    var e = DF_Ma.setTimeout;
    c.prototype.i = function(g) {
        e(g, 0)
    };
    c.prototype.G = function() {
        for (; this.g && this.g.length;) {
            var g = this.g;
            this.g = [];
            for (var h = 0; h <
                g.length; ++h) {
                var k = g[h];
                g[h] = null;
                try {
                    k()
                } catch (l) {
                    this.j(l)
                }
            }
        }
        this.g = null
    };
    c.prototype.j = function(g) {
        this.i(function() {
            throw g;
        })
    };
    b.prototype.j = function() {
        function g(l) {
            return function(m) {
                k || (k = !0, l.call(h, m))
            }
        }
        var h = this,
            k = !1;
        return {
            resolve: g(this.sa),
            reject: g(this.G)
        }
    };
    b.prototype.sa = function(g) {
        if (g === this) this.G(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof b) this.Aa(g);
        else {
            a: switch (typeof g) {
                case "object":
                    var h = g != null;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
            }
            h ? this.Z(g) : this.F(g)
        }
    };
    b.prototype.Z = function(g) {
        var h = void 0;
        try {
            h = g.then
        } catch (k) {
            this.G(k);
            return
        }
        typeof h == "function" ? this.La(h, g) : this.F(g)
    };
    b.prototype.G = function(g) {
        this.O(2, g)
    };
    b.prototype.F = function(g) {
        this.O(1, g)
    };
    b.prototype.O = function(g, h) {
        if (this.h != 0) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
        this.h = g;
        this.i = h;
        this.h === 2 && this.za();
        this.M()
    };
    b.prototype.za = function() {
        var g = this;
        e(function() {
            if (g.la()) {
                var h = DF_Ma.console;
                typeof h !== "undefined" &&
                    h.error(g.i)
            }
        }, 1)
    };
    b.prototype.la = function() {
        if (this.L) return !1;
        var g = DF_Ma.CustomEvent,
            h = DF_Ma.Event,
            k = DF_Ma.dispatchEvent;
        if (typeof k === "undefined") return !0;
        typeof g === "function" ? g = new g("unhandledrejection", {
            cancelable: !0
        }) : typeof h === "function" ? g = new h("unhandledrejection", {
            cancelable: !0
        }) : (g = DF_Ma.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
        g.promise = this;
        g.reason = this.i;
        return k(g)
    };
    b.prototype.M = function() {
        if (this.g != null) {
            for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
            this.g = null
        }
    };
    var f = new c;
    b.prototype.Aa = function(g) {
        var h = this.j();
        g.eb(h.resolve, h.reject)
    };
    b.prototype.La = function(g, h) {
        var k = this.j();
        try {
            g.call(h, k.resolve, k.reject)
        } catch (l) {
            k.reject(l)
        }
    };
    b.prototype.then = function(g, h) {
        function k(p, q) {
            return typeof p == "function" ? function(r) {
                try {
                    l(p(r))
                } catch (t) {
                    m(t)
                }
            } : q
        }
        var l, m, n = new b(function(p, q) {
            l = p;
            m = q
        });
        this.eb(k(g, l), k(h, m));
        return n
    };
    b.prototype.catch = function(g) {
        return this.then(void 0, g)
    };
    b.prototype.eb = function(g, h) {
        function k() {
            switch (l.h) {
                case 1:
                    g(l.i);
                    break;
                case 2:
                    h(l.i);
                    break;
                default:
                    throw Error("Unexpected state: " + l.h);
            }
        }
        var l = this;
        this.g == null ? f.h(k) : this.g.push(k);
        this.L = !0
    };
    b.resolve = d;
    b.reject = function(g) {
        return new b(function(h, k) {
            k(g)
        })
    };
    b.race = function(g) {
        return new b(function(h, k) {
            for (var l = DF_Md(g), m = l.next(); !m.done; m = l.next()) d(m.value).eb(h, k)
        })
    };
    b.all = function(g) {
        var h = DF_Md(g),
            k = h.next();
        return k.done ? d([]) : new b(function(l, m) {
            function n(r) {
                return function(t) {
                    p[r] = t;
                    q--;
                    q == 0 && l(p)
                }
            }
            var p = [],
                q = 0;
            do p.push(void 0), q++, d(k.value).eb(n(p.length -
                1), m), k = h.next(); while (!k.done)
        })
    };
    return b
});
DF_Mb("Object.setPrototypeOf", function(a) {
    return a || DF_Mna
});
DF_Mb("WeakMap", function(a) {
    function b(k) {
        this.g = (h += Math.random() + 1).toString();
        if (k) {
            k = DF_Md(k);
            for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
        }
    }

    function c() {}

    function d(k) {
        var l = typeof k;
        return l === "object" && k !== null || l === "function"
    }

    function e(k) {
        if (!DF_Mfa(k, g)) {
            var l = new c;
            DF_Mba(k, g, {
                value: l
            })
        }
    }

    function f(k) {
        var l = Object[k];
        l && (Object[k] = function(m) {
            if (m instanceof c) return m;
            Object.isExtensible(m) && e(m);
            return l(m)
        })
    }
    if (function() {
            if (!a || !Object.seal) return !1;
            try {
                var k = Object.seal({}),
                    l = Object.seal({}),
                    m = new a([
                        [k, 2],
                        [l, 3]
                    ]);
                if (m.get(k) != 2 || m.get(l) != 3) return !1;
                m.delete(k);
                m.set(l, 4);
                return !m.has(k) && m.get(l) == 4
            } catch (n) {
                return !1
            }
        }()) return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0;
    b.prototype.set = function(k, l) {
        if (!d(k)) throw Error("Invalid WeakMap key");
        e(k);
        if (!DF_Mfa(k, g)) throw Error("WeakMap key fail: " + k);
        k[g][this.g] = l;
        return this
    };
    b.prototype.get = function(k) {
        return d(k) && DF_Mfa(k, g) ? k[g][this.g] : void 0
    };
    b.prototype.has =
        function(k) {
            return d(k) && DF_Mfa(k, g) && DF_Mfa(k[g], this.g)
        };
    b.prototype.delete = function(k) {
        return d(k) && DF_Mfa(k, g) && DF_Mfa(k[g], this.g) ? delete k[g][this.g] : !1
    };
    return b
});
DF_Mb("Map", function(a) {
    function b() {
        var h = {};
        return h.ka = h.next = h.head = h
    }

    function c(h, k) {
        var l = h[1];
        return DF_Mda(function() {
            if (l) {
                for (; l.head != h[1];) l = l.ka;
                for (; l.next != l.head;) return l = l.next, {
                    done: !1,
                    value: k(l)
                };
                l = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }

    function d(h, k) {
        var l = k && typeof k;
        l == "object" || l == "function" ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
        var m = h[0][l];
        if (m && DF_Mfa(h[0], l))
            for (h = 0; h < m.length; h++) {
                var n = m[h];
                if (k !== k && n.key !== n.key || k === n.key) return {
                    id: l,
                    list: m,
                    index: h,
                    W: n
                }
            }
        return {
            id: l,
            list: m,
            index: -1,
            W: void 0
        }
    }

    function e(h) {
        this[0] = {};
        this[1] = b();
        this.size = 0;
        if (h) {
            h = DF_Md(h);
            for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
        }
    }
    if (function() {
            if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
            try {
                var h = Object.seal({
                        x: 4
                    }),
                    k = new a(DF_Md([
                        [h, "s"]
                    ]));
                if (k.get(h) != "s" || k.size != 1 || k.get({
                        x: 4
                    }) || k.set({
                        x: 4
                    }, "t") != k || k.size != 2) return !1;
                var l = k.entries(),
                    m = l.next();
                if (m.done || m.value[0] != h || m.value[1] != "s") return !1;
                m = l.next();
                return m.done ||
                    m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? !1 : !0
            } catch (n) {
                return !1
            }
        }()) return a;
    var f = new WeakMap;
    e.prototype.set = function(h, k) {
        h = h === 0 ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this[0][l.id] = []);
        l.W ? l.W.value = k : (l.W = {
            next: this[1],
            ka: this[1].ka,
            head: this[1],
            key: h,
            value: k
        }, l.list.push(l.W), this[1].ka.next = l.W, this[1].ka = l.W, this.size++);
        return this
    };
    e.prototype.delete = function(h) {
        h = d(this, h);
        return h.W && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.W.ka.next = h.W.next, h.W.next.ka =
            h.W.ka, h.W.head = null, this.size--, !0) : !1
    };
    e.prototype.clear = function() {
        this[0] = {};
        this[1] = this[1].ka = b();
        this.size = 0
    };
    e.prototype.has = function(h) {
        return !!d(this, h).W
    };
    e.prototype.get = function(h) {
        return (h = d(this, h).W) && h.value
    };
    e.prototype.entries = function() {
        return c(this, function(h) {
            return [h.key, h.value]
        })
    };
    e.prototype.keys = function() {
        return c(this, function(h) {
            return h.key
        })
    };
    e.prototype.values = function() {
        return c(this, function(h) {
            return h.value
        })
    };
    e.prototype.forEach = function(h, k) {
        for (var l = this.entries(),
                m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e
});
DF_Mb("WeakSet", function(a) {
    function b(c) {
        this.g = new WeakMap;
        if (c) {
            c = DF_Md(c);
            for (var d; !(d = c.next()).done;) this.add(d.value)
        }
    }
    if (function() {
            if (!a || !Object.seal) return !1;
            try {
                var c = Object.seal({}),
                    d = Object.seal({}),
                    e = new a([c]);
                if (!e.has(c) || e.has(d)) return !1;
                e.delete(c);
                e.add(d);
                return !e.has(c) && e.has(d)
            } catch (f) {
                return !1
            }
        }()) return a;
    b.prototype.add = function(c) {
        this.g.set(c, !0);
        return this
    };
    b.prototype.has = function(c) {
        return this.g.has(c)
    };
    b.prototype.delete = function(c) {
        return this.g.delete(c)
    };
    return b
});
DF_Mb("Object.is", function(a) {
    return a ? a : function(b, c) {
        return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
    }
});
DF_Mb("Set", function(a) {
    function b(c) {
        this.g = new Map;
        if (c) {
            c = DF_Md(c);
            for (var d; !(d = c.next()).done;) this.add(d.value)
        }
        this.size = this.g.size
    }
    if (function() {
            if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
            try {
                var c = Object.seal({
                        x: 4
                    }),
                    d = new a(DF_Md([c]));
                if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                        x: 4
                    }) != d || d.size != 2) return !1;
                var e = d.entries(),
                    f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                f = e.next();
                return f.done || f.value[0] == c || f.value[0].x !=
                    4 || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }()) return a;
    b.prototype.add = function(c) {
        c = c === 0 ? 0 : c;
        this.g.set(c, c);
        this.size = this.g.size;
        return this
    };
    b.prototype.delete = function(c) {
        c = this.g.delete(c);
        this.size = this.g.size;
        return c
    };
    b.prototype.clear = function() {
        this.g.clear();
        this.size = 0
    };
    b.prototype.has = function(c) {
        return this.g.has(c)
    };
    b.prototype.entries = function() {
        return this.g.entries()
    };
    b.prototype.values = function() {
        return this.g.values()
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] =
        b.prototype.values;
    b.prototype.forEach = function(c, d) {
        var e = this;
        this.g.forEach(function(f) {
            return c.call(d, f, f, e)
        })
    };
    return b
});
DF_Mb("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) DF_Mfa(b, d) && c.push([d, b[d]]);
        return c
    }
});
DF_Mb("globalThis", function(a) {
    return a || DF_Ma
});
DF_Mb("Array.from", function(a) {
    return a ? a : function(b, c, d) {
        c = c != null ? c : function(h) {
            return h
        };
        var e = [],
            f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
        if (typeof f == "function") {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
        } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
        return e
    }
});

function DF_Mya(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
DF_Mb("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return DF_Mya(this, function(b) {
            return b
        })
    }
});
DF_Mb("Array.prototype.flat", function(a) {
    return a ? a : function(b) {
        b = b === void 0 ? 1 : b;
        var c = [];
        Array.prototype.forEach.call(this, function(d) {
            Array.isArray(d) && b > 0 ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
        });
        return c
    }
});
DF_Mb("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});

function DF_Mza(a, b, c) {
    if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
}
DF_Mb("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        return DF_Mza(this, b, "includes").indexOf(b, c || 0) !== -1
    }
});
DF_Mb("String.prototype.endsWith", function(a) {
    return a ? a : function(b, c) {
        var d = DF_Mza(this, b, "endsWith");
        c === void 0 && (c = d.length);
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var e = b.length; e > 0 && c > 0;)
            if (d[--c] != b[--e]) return !1;
        return e <= 0
    }
});
DF_Mb("Array.prototype.entries", function(a) {
    return a ? a : function() {
        return DF_Mya(this, function(b, c) {
            return [b, c]
        })
    }
});
DF_Mb("Array.prototype.values", function(a) {
    return a ? a : function() {
        return DF_Mya(this, function(b, c) {
            return c
        })
    }
});
DF_Mb("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
        var d = DF_Mza(this, b, "startsWith"),
            e = d.length,
            f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < f && c < e;)
            if (d[c++] != b[g++]) return !1;
        return g >= f
    }
});
DF_Mb("Array.prototype.fill", function(a) {
    return a ? a : function(b, c, d) {
        var e = this.length || 0;
        c < 0 && (c = Math.max(0, e + c));
        if (d == null || d > e) d = e;
        d = Number(d);
        d < 0 && (d = Math.max(0, e + d));
        for (c = Number(c || 0); c < d; c++) this[c] = b;
        return this
    }
});

function DF_MAa(a) {
    return a ? a : Array.prototype.fill
}
DF_Mb("Int8Array.prototype.fill", DF_MAa);
DF_Mb("Uint8Array.prototype.fill", DF_MAa);
DF_Mb("Uint8ClampedArray.prototype.fill", DF_MAa);
DF_Mb("Int16Array.prototype.fill", DF_MAa);
DF_Mb("Uint16Array.prototype.fill", DF_MAa);
DF_Mb("Int32Array.prototype.fill", DF_MAa);
DF_Mb("Uint32Array.prototype.fill", DF_MAa);
DF_Mb("Float32Array.prototype.fill", DF_MAa);
DF_Mb("Float64Array.prototype.fill", DF_MAa);
DF_Mb("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
DF_Mb("Object.fromEntries", function(a) {
    return a ? a : function(b) {
        var c = {};
        if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
        b = b[Symbol.iterator].call(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
            c[d[0]] = d[1]
        }
        return c
    }
});
DF_Mb("Math.trunc", function(a) {
    return a ? a : function(b) {
        b = Number(b);
        if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
        var c = Math.floor(Math.abs(b));
        return b < 0 ? -c : c
    }
});

function DF_MBa(a) {
    a = Math.trunc(a) || 0;
    a < 0 && (a += this.length);
    if (!(a < 0 || a >= this.length)) return this[a]
}
DF_Mb("Array.prototype.at", function(a) {
    return a ? a : DF_MBa
});

function DF_MCa(a) {
    return a ? a : DF_MBa
}
DF_Mb("Int8Array.prototype.at", DF_MCa);
DF_Mb("Uint8Array.prototype.at", DF_MCa);
DF_Mb("Uint8ClampedArray.prototype.at", DF_MCa);
DF_Mb("Int16Array.prototype.at", DF_MCa);
DF_Mb("Uint16Array.prototype.at", DF_MCa);
DF_Mb("Int32Array.prototype.at", DF_MCa);
DF_Mb("Uint32Array.prototype.at", DF_MCa);
DF_Mb("Float32Array.prototype.at", DF_MCa);
DF_Mb("Float64Array.prototype.at", DF_MCa);
DF_Mb("String.prototype.at", function(a) {
    return a ? a : DF_MBa
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var DF_Mj = this || self;

function DF_MDa(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function DF_MEa(a, b, c) {
    if (!a) throw Error();
    if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function DF_MFa(a, b, c) {
    DF_MFa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? DF_MDa : DF_MEa;
    return DF_MFa.apply(null, arguments)
}

function DF_MGa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
    }
}

function DF_MHa(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Fd = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Ld = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
}

function DF_MIa(a) {
    return a
};

function DF_Mk(a, b, c, d) {
    var e = arguments.length,
        f = e < 3 ? b : d === null ? d = Object.getOwnPropertyDescriptor(b, c) : d,
        g;
    if (typeof Reflect === "object" && Reflect && typeof Reflect.decorate === "function") f = Reflect.decorate(a, b, c, d);
    else
        for (var h = a.length - 1; h >= 0; h--)
            if (g = a[h]) f = (e < 3 ? g(f) : e > 3 ? g(b, c, f) : g(b, c)) || f;
    return e > 3 && f && Object.defineProperty(b, c, f), f
}

function DF_Ml(a, b) {
    if (typeof Reflect === "object" && Reflect && typeof Reflect.metadata === "function") return Reflect.metadata(a, b)
};

function DF_MJa(a) {
    return new Promise(function(b, c) {
        var d = new FileReader;
        d.onload = function() {
            b(d.result.split(",")[1])
        };
        d.onerror = function() {
            c()
        };
        d.readAsDataURL(a)
    })
}

function DF_MKa(a, b) {
    var c, d;
    return DF_Mh(function(e) {
        if (e.g == 1) return DF_Mg(e, a.arrayBuffer(), 2);
        if (e.g != 3) return c = e.h, DF_Mg(e, b.decodeAudioData(c), 3);
        d = e.h;
        var f = e.return,
            g = d.numberOfChannels,
            h = d.length * g * 2 + 44,
            k = new ArrayBuffer(h),
            l = new DataView(k);
        var m = DF_MLa(l, 0, 1179011410);
        m = DF_MLa(l, m, h - 8);
        m = DF_MLa(l, m, 1163280727);
        m = DF_MLa(l, m, 544501094);
        m = DF_MLa(l, m, 16);
        m = DF_MMa(l, m, 1);
        m = DF_MMa(l, m, g);
        m = DF_MLa(l, m, d.sampleRate);
        m = DF_MLa(l, m, d.sampleRate * 2 * g);
        m = DF_MMa(l, m, g * 2);
        m = DF_MMa(l, m, 16);
        m = DF_MLa(l,
            m, 1635017060);
        m = DF_MLa(l, m, h - m - 8);
        for (var n = [], p = 0; p < d.numberOfChannels; ++p) n.push(d.getChannelData(p));
        for (p = 0; m < h;) {
            for (var q = 0; q < g; ++q) {
                var r = Math.max(-1, Math.min(1, n[q][p]));
                r = (.5 + r < 0 ? r * 32768 : r * 32767) | 0;
                l.setInt16(m, r, !0);
                m += 2
            }
            p++
        }
        return f.call(e, new Blob([k], {
            type: "audio/wav"
        }))
    })
}

function DF_MMa(a, b, c) {
    a.setUint16(b, c, !0);
    return b + 2
}

function DF_MLa(a, b, c) {
    a.setUint32(b, c, !0);
    return b + 4
};

function DF_MNa(a, b, c) {
    var d, e, f, g, h, k, l, m, n;
    return DF_Mh(function(p) {
        switch (p.g) {
            case 1:
                return d = "https://speech.googleapis.com/v1p1beta1/speech:recognize?key=" + b, DF_Mg(p, DF_MJa(a), 2);
            case 2:
                return e = {
                    audio: {
                        content: p.h
                    },
                    config: {
                        encoding: 1,
                        sampleRateHertz: 48E3,
                        languageCode: c && c !== "en" ? c : "en-US",
                        model: "latest_short"
                    }
                }, DF_Mg(p, fetch(d, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(e)
                }), 3);
            case 3:
                return f = p.h, f.ok ? DF_Mg(p, f.json(), 4) : (console.error("Speech-to-Text", "Error",
                    f), p.return());
            case 4:
                return g = p.h, console.debug("Speech-to-Text", "Result", g), (n = (h = g.results) == null ? void 0 : (k = h[0]) == null ? void 0 : (l = k.alternatives) == null ? void 0 : (m = l[0]) == null ? void 0 : m.transcript) || console.warn("Speech-to-Text", "No transcript"), p.return(n)
        }
    })
};
var DF_MOa = !/^\s*class\s*\{\s*\}\s*$/.test(function() {}.toString());
var DF_MPa = DF_Mj.Reflect;

function DF_MQa() {
    return DF_MPa.construct(Event, DF_Mi.apply(0, arguments), this.constructor)
}
DF_MQa.prototype = Event.prototype;
var DF_MRa = DF_MOa ? DF_MQa : Event;
/*

 Copyright 2021 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_MSa(a, b, c) {
    var d = DF_MRa.call(this, "context-request", {
        bubbles: !0,
        composed: !0
    }) || this;
    d.context = a;
    d.callback = b;
    d.subscribe = c != null ? c : !1;
    return d
}
DF_Mf(DF_MSa, DF_MRa);

function DF_MTa() {
    var a = this;
    this.g = new Map;
    this.h = function(b) {
        var c = a.g.get(b.context);
        if (c !== void 0) {
            a.g.delete(b.context);
            c = DF_Md(c.uc);
            for (var d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = e.fd.deref();
                e = e.ad.deref();
                d !== void 0 && e !== void 0 && d.dispatchEvent(new DF_MSa(b.context, e, !0))
            }
        }
    };
    this.Rb = function(b) {
        if (b.subscribe === !0) {
            var c = b.composedPath()[0],
                d = b.callback,
                e = a.g.get(b.context);
            e === void 0 && a.g.set(b.context, e = {
                jc: new WeakMap,
                uc: []
            });
            b = e.jc.get(c);
            b === void 0 && e.jc.set(c, b = new WeakSet);
            b.has(d) || (b.add(d), e.uc.push({
                fd: new WeakRef(c),
                ad: new WeakRef(d)
            }))
        }
    }
};

function DF_MUa(a, b) {
    var c = this;
    this.Ub = this.subscribe = !1;
    this.value = void 0;
    this.Rc = function(e, f) {
        c.unsubscribe && (c.unsubscribe !== f && (c.Ub = !1, c.unsubscribe()), c.subscribe || c.unsubscribe());
        c.value = e;
        DF_MVa(c.host);
        if (!c.Ub || c.subscribe) c.Ub = !0, c.callback && c.callback(e, f);
        c.unsubscribe = f
    };
    this.host = a;
    if (b.context !== void 0) {
        this.context = b.context;
        this.callback = b.callback;
        var d;
        this.subscribe = (d = b.subscribe) != null ? d : !1
    } else this.context = b, this.callback = void 0, this.subscribe = !1;
    this.host.fc(this)
}
DF_MUa.prototype.Lb = function() {
    this.host.dispatchEvent(new DF_MSa(this.context, this.Rc, this.subscribe))
};
DF_MUa.prototype.rd = function() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0)
};

function DF_MWa(a) {
    var b = this;
    this.Ka = new Map;
    this.h = function() {
        for (var c = DF_Md(b.Ka), d = c.next(); !d.done; d = c.next()) {
            var e = DF_Md(d.value);
            d = e.next().value;
            e = e.next().value.mc;
            d(b.g, e)
        }
    };
    a !== void 0 && (this.value = a)
}

function DF_MXa(a, b) {
    var c = !Object.is(b, a.g);
    a.g = b;
    c && a.h()
}

function DF_MYa(a, b, c, d) {
    d ? (a.Ka.has(b) || a.Ka.set(b, {
        mc: function() {
            a.Ka.delete(b)
        },
        bd: c
    }), c = a.Ka.get(b).mc, b(a.value, c)) : b(a.value)
}
DF_Ma.Object.defineProperties(DF_MWa.prototype, {
    value: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g
        },
        set: function(a) {
            DF_MXa(this, a)
        }
    }
});

function DF_MZa(a) {
    var b = DF_MRa.call(this, "context-provider", {
        bubbles: !0,
        composed: !0
    }) || this;
    b.context = a;
    return b
}
DF_Mf(DF_MZa, DF_MRa);

function DF_M_a(a, b, c) {
    DF_MWa.call(this, b.context !== void 0 ? b.initialValue : c);
    var d = this;
    this.Rb = function(g) {
        var h = g.composedPath()[0];
        g.context === d.context && h !== d.host && (g.stopPropagation(), DF_MYa(d, g.callback, h, g.subscribe))
    };
    this.xd = function(g) {
        var h = g.composedPath()[0];
        if (g.context === d.context && h !== d.host) {
            h = new Set;
            for (var k = DF_Md(d.Ka), l = k.next(); !l.done; l = k.next()) {
                var m = DF_Md(l.value);
                l = m.next().value;
                m = m.next().value.bd;
                h.has(l) || (h.add(l), m.dispatchEvent(new DF_MSa(d.context, l, !0)))
            }
            g.stopPropagation()
        }
    };
    this.host = a;
    this.context = b.context !== void 0 ? b.context : b;
    this.host.addEventListener("context-request", this.Rb);
    this.host.addEventListener("context-provider", this.xd);
    var e, f;
    (f = (e = this.host).fc) == null || f.call(e, this)
}
DF_Mf(DF_M_a, DF_MWa);
DF_M_a.prototype.Lb = function() {
    this.host.dispatchEvent(new DF_MZa(this.context))
};
/*

 Copyright 2022 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_M0a(a) {
    var b = a.context;
    var c = a.subscribe;
    return function(d, e) {
        typeof e === "object" ? e.m(function() {
            var f = this;
            new DF_MUa(this, {
                context: b,
                callback: function(g) {
                    d.set.call(f, g)
                },
                subscribe: c
            })
        }) : d.constructor.m(function(f) {
            new DF_MUa(f, {
                context: b,
                callback: function(g) {
                    f[e] = g
                },
                subscribe: c
            })
        })
    }
};
/*

 Copyright 2017 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_M1a(a) {
    var b = a.context;
    return function(c, d) {
        var e = new WeakMap;
        if (typeof d === "object") return d.m(function() {
            e.set(this, new DF_M_a(this, {
                context: b
            }))
        }), {
            get: function() {
                return c.get.call(this)
            },
            set: function(k) {
                var l;
                (l = e.get(this)) == null || DF_MXa(l, k);
                return c.set.call(this, k)
            },
            sd: function(k) {
                var l;
                (l = e.get(this)) == null || DF_MXa(l, k);
                return k
            }
        };
        c.constructor.m(function(k) {
            e.set(k, new DF_M_a(k, {
                context: b
            }))
        });
        var f = Object.getOwnPropertyDescriptor(c, d);
        if (f === void 0) {
            var g = new WeakMap;
            f = {
                get: function() {
                    return g.get(this)
                },
                set: function(k) {
                    DF_MXa(e.get(this), k);
                    g.set(this, k)
                },
                configurable: !0,
                enumerable: !0
            }
        } else {
            var h = f.set;
            f = Object.assign({}, f, {
                set: function(k) {
                    DF_MXa(e.get(this), k);
                    h == null || h.call(this, k)
                }
            })
        }
        Object.defineProperty(c, d, f)
    }
};

function DF_Mm(a, b, c) {
    console.debug("DF-MESSENGER", "fireCustomEvent", b, c);
    b = new CustomEvent(b, {
        detail: c,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    });
    return a.dispatchEvent(b)
};
var DF_Mn = new Map([
    ["en", {
        askSomething: "Ask something...",
        chatTitle: "Chat",
        genericErrorMessage: "Something went wrong, please try again.",
        messageTooLong: "Oops! Your message is {$numOfChars} character(s) too long.",
        authErrorMessage: "Permission denied.",
        openAriaLabel: "Open {$chatTitle}",
        closeAriaLabel: "Close {$chatTitle}",
        sendAriaLabel: "Send",
        inputAriaLabel: "Talk to Agent",
        opensInANewTab: "Opens in a new tab",
        agentSays: "Agent Says:",
        iSay: "I Say:",
        citationsMessage: "Source:",
        feedbackWhyRatingText: "Why did you choose this rating?",
        feedbackOptionalText: "optional",
        feedbackPlaceholder: "Additional Feedback",
        feedbackSubmit: "Submit",
        feedbackChipIrrelevant: "Irrelevant",
        feedbackChipIncorrect: "Incorrect",
        feedbackChipUnsafe: "Unsafe",
        feedbackInputAriaLabel: "Provide additional feedback",
        feedbackCloseAriaLabel: "Close additional feedback",
        feedbackSubmitAriaLabel: "Submit additional feedback",
        feedbackThankYouText: "Thank you for your feedback",
        feedbackPrivacyNoticeText: "Please do not provide any personal or sensitive data",
        requestAccess: "Request Access",
        useCodeWithCautionText: "Use code with caution.",
        copyCodeAriaLabel: "Copy code",
        jumpToBottom: "Jump to bottom",
        youtubeVideoLabel: "Youtube video",
        videoNoSupportFallbackText: "Your browser does not support the video tag.",
        cancelClientSideTask: "Cancel task",
        messageTooLongWarning: 'You\'re writing a long input, which may result in a "no match" result. Shorten your query for a better response.',
        positiveFeedbackAriaLabel: "Good response",
        negativeFeedbackAriaLabel: "Bad response",
        uploadFileAriaLabel: "Upload file",
        microphoneAriaLabel: "Use microphone"
    }]
]);
DF_Mn.set("da", {
    askSomething: "Stil et sp\u00f8rgsm\u00e5l\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Der opstod en fejl. Pr\u00f8v igen.",
    messageTooLong: "Ups! Din besked er {$numOfChars} tegn for lang.",
    authErrorMessage: "Tilladelsen blev n\u00e6gtet.",
    openAriaLabel: "\u00c5bn {$chatTitle}",
    closeAriaLabel: "Luk {$chatTitle}",
    sendAriaLabel: "Send",
    inputAriaLabel: "Tal med en repr\u00e6sentant",
    opensInANewTab: "\u00c5bnes p\u00e5 en ny fane",
    agentSays: "Repr\u00e6sentanten siger:",
    iSay: "Jeg siger:",
    citationsMessage: "Kilde:",
    feedbackWhyRatingText: "Hvorfor valgte du denne bed\u00f8mmelse?",
    feedbackOptionalText: "valgfrit",
    feedbackPlaceholder: "Yderligere feedback",
    feedbackSubmit: "Send",
    feedbackChipIrrelevant: "Irrelevant",
    feedbackChipIncorrect: "Forkert",
    feedbackChipUnsafe: "Usikkert",
    feedbackInputAriaLabel: "Giv yderligere feedback",
    feedbackCloseAriaLabel: "Luk sektion til yderligere feedback",
    feedbackSubmitAriaLabel: "Indsend yderligere feedback",
    feedbackThankYouText: "Tak for din feedback",
    feedbackPrivacyNoticeText: "S\u00f8rg for ikke at angive personlige eller f\u00f8lsomme oplysninger",
    requestAccess: "Anmod om adgang",
    useCodeWithCautionText: "V\u00e6r forsigtig med at bruge denne kode.",
    copyCodeAriaLabel: "Kopi\u00e9r kode",
    jumpToBottom: "G\u00e5 til bunden",
    youtubeVideoLabel: "YouTube-video",
    videoNoSupportFallbackText: "Din browser underst\u00f8tter ikke videotagget.",
    cancelClientSideTask: "Annuller opgave",
    messageTooLongWarning: 'Du er ved at skrive en lang tekst, som kan resultere i et "intet match"-resultat. Forkort din foresp\u00f8rgsel for at f\u00e5 et bedre svar.',
    positiveFeedbackAriaLabel: "Godt svar",
    negativeFeedbackAriaLabel: "D\u00e5rligt svar",
    uploadFileAriaLabel: "Upload fil",
    microphoneAriaLabel: "Brug mikrofonen"
});
DF_Mn.set("de", {
    askSomething: "Stellen Sie eine Frage\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Ein Problem ist aufgetreten. Bitte versuchen Sie es noch einmal.",
    messageTooLong: "Hoppla! Ihre Nachricht ist {$numOfChars}\u00a0Zeichen zu lang.",
    authErrorMessage: "Die Berechtigung wurde verweigert.",
    openAriaLabel: "{$chatTitle} \u00f6ffnen",
    closeAriaLabel: "{$chatTitle} schlie\u00dfen",
    sendAriaLabel: "Senden",
    inputAriaLabel: "Mit Agent sprechen",
    opensInANewTab: "Wird in einem neuen Tab ge\u00f6ffnet",
    agentSays: "Agent sagt:",
    iSay: "Ich sage:",
    citationsMessage: "Quelle:",
    feedbackWhyRatingText: "Warum haben Sie sich f\u00fcr diese Bewertung entschieden?",
    feedbackOptionalText: "optional",
    feedbackPlaceholder: "Zus\u00e4tzliches Feedback",
    feedbackSubmit: "Senden",
    feedbackChipIrrelevant: "Irrelevant",
    feedbackChipIncorrect: "Falsch",
    feedbackChipUnsafe: "Unsicher",
    feedbackInputAriaLabel: "Zus\u00e4tzliches Feedback geben",
    feedbackCloseAriaLabel: "Zus\u00e4tzliches Feedback schlie\u00dfen",
    feedbackSubmitAriaLabel: "Zus\u00e4tzliches Feedback senden",
    feedbackThankYouText: "Vielen Dank f\u00fcr Ihr Feedback",
    feedbackPrivacyNoticeText: "Geben Sie bitte keine personenbezogenen oder vertraulichen Daten an",
    requestAccess: "Zugriff anfordern",
    useCodeWithCautionText: "Seien Sie vorsichtig, wenn sie den Code verwenden.",
    copyCodeAriaLabel: "Code kopieren",
    jumpToBottom: "Nach unten springen",
    youtubeVideoLabel: "YouTube-Video",
    videoNoSupportFallbackText: "Ihr Browser unterst\u00fctzt das Video-Tag nicht.",
    cancelClientSideTask: "Task abbrechen",
    messageTooLongWarning: "Ihre Eingabe umfasst viel Text, was zu einem Ergebnis ohne \u00dcbereinstimmung f\u00fchren kann. K\u00fcrzen Sie die Abfrage, um eine bessere Antwort zu erhalten.",
    positiveFeedbackAriaLabel: "Gute Antwort",
    negativeFeedbackAriaLabel: "Schlechte Antwort",
    uploadFileAriaLabel: "Datei hochladen",
    microphoneAriaLabel: "Mikrofon verwenden"
});
DF_Mn.set("de-at", {
    askSomething: "Stellen Sie eine Frage\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Ein Problem ist aufgetreten. Bitte versuchen Sie es noch einmal.",
    messageTooLong: "Hoppla! Ihre Nachricht ist {$numOfChars}\u00a0Zeichen zu lang.",
    authErrorMessage: "Die Berechtigung wurde verweigert.",
    openAriaLabel: "{$chatTitle} \u00f6ffnen",
    closeAriaLabel: "{$chatTitle} schlie\u00dfen",
    sendAriaLabel: "Senden",
    inputAriaLabel: "Mit Agent sprechen",
    opensInANewTab: "Wird in einem neuen Tab ge\u00f6ffnet",
    agentSays: "Agent sagt:",
    iSay: "Ich sage:",
    citationsMessage: "Quelle:",
    feedbackWhyRatingText: "Warum haben Sie sich f\u00fcr diese Bewertung entschieden?",
    feedbackOptionalText: "optional",
    feedbackPlaceholder: "Zus\u00e4tzliches Feedback",
    feedbackSubmit: "Senden",
    feedbackChipIrrelevant: "Irrelevant",
    feedbackChipIncorrect: "Falsch",
    feedbackChipUnsafe: "Unsicher",
    feedbackInputAriaLabel: "Zus\u00e4tzliches Feedback geben",
    feedbackCloseAriaLabel: "Zus\u00e4tzliches Feedback schlie\u00dfen",
    feedbackSubmitAriaLabel: "Zus\u00e4tzliches Feedback senden",
    feedbackThankYouText: "Vielen Dank f\u00fcr Ihr Feedback",
    feedbackPrivacyNoticeText: "Geben Sie bitte keine personenbezogenen oder vertraulichen Daten an",
    requestAccess: "Zugriff anfordern",
    useCodeWithCautionText: "Seien Sie vorsichtig, wenn sie den Code verwenden.",
    copyCodeAriaLabel: "Code kopieren",
    jumpToBottom: "Nach unten springen",
    youtubeVideoLabel: "YouTube-Video",
    videoNoSupportFallbackText: "Ihr Browser unterst\u00fctzt das Video-Tag nicht.",
    cancelClientSideTask: "Task abbrechen",
    messageTooLongWarning: "Ihre Eingabe umfasst viel Text, was zu einem Ergebnis ohne \u00dcbereinstimmung f\u00fchren kann. K\u00fcrzen Sie die Abfrage, um eine bessere Antwort zu erhalten.",
    positiveFeedbackAriaLabel: "Gute Antwort",
    negativeFeedbackAriaLabel: "Schlechte Antwort",
    uploadFileAriaLabel: "Datei hochladen",
    microphoneAriaLabel: "Mikrofon verwenden"
});
DF_Mn.set("de-ch", {
    askSomething: "Stellen Sie eine Frage\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Ein Problem ist aufgetreten. Bitte versuchen Sie es noch einmal.",
    messageTooLong: "Hoppla! Ihre Nachricht ist {$numOfChars}\u00a0Zeichen zu lang.",
    authErrorMessage: "Die Berechtigung wurde verweigert.",
    openAriaLabel: "{$chatTitle} \u00f6ffnen",
    closeAriaLabel: "{$chatTitle} schlie\u00dfen",
    sendAriaLabel: "Senden",
    inputAriaLabel: "Mit Agent sprechen",
    opensInANewTab: "Wird in einem neuen Tab ge\u00f6ffnet",
    agentSays: "Agent sagt:",
    iSay: "Ich sage:",
    citationsMessage: "Quelle:",
    feedbackWhyRatingText: "Warum haben Sie sich f\u00fcr diese Bewertung entschieden?",
    feedbackOptionalText: "optional",
    feedbackPlaceholder: "Zus\u00e4tzliches Feedback",
    feedbackSubmit: "Senden",
    feedbackChipIrrelevant: "Irrelevant",
    feedbackChipIncorrect: "Falsch",
    feedbackChipUnsafe: "Unsicher",
    feedbackInputAriaLabel: "Zus\u00e4tzliches Feedback geben",
    feedbackCloseAriaLabel: "Zus\u00e4tzliches Feedback schlie\u00dfen",
    feedbackSubmitAriaLabel: "Zus\u00e4tzliches Feedback senden",
    feedbackThankYouText: "Vielen Dank f\u00fcr Ihr Feedback",
    feedbackPrivacyNoticeText: "Geben Sie bitte keine personenbezogenen oder vertraulichen Daten an",
    requestAccess: "Zugriff anfordern",
    useCodeWithCautionText: "Seien Sie vorsichtig, wenn sie den Code verwenden.",
    copyCodeAriaLabel: "Code kopieren",
    jumpToBottom: "Nach unten springen",
    youtubeVideoLabel: "YouTube-Video",
    videoNoSupportFallbackText: "Ihr Browser unterst\u00fctzt das Video-Tag nicht.",
    cancelClientSideTask: "Task abbrechen",
    messageTooLongWarning: "Ihre Eingabe umfasst viel Text, was zu einem Ergebnis ohne \u00dcbereinstimmung f\u00fchren kann. K\u00fcrzen Sie die Abfrage, um eine bessere Antwort zu erhalten.",
    positiveFeedbackAriaLabel: "Gute Antwort",
    negativeFeedbackAriaLabel: "Schlechte Antwort",
    uploadFileAriaLabel: "Datei hochladen",
    microphoneAriaLabel: "Mikrofon verwenden"
});
DF_Mn.set("es", {
    askSomething: "Pregunta algo...",
    chatTitle: "Chat",
    genericErrorMessage: "Se ha producido un error. Vuelve a intentarlo.",
    messageTooLong: "\u00a1Vaya! Tu mensaje contiene caracteres de m\u00e1s: {$numOfChars}",
    authErrorMessage: "Permiso denegado.",
    openAriaLabel: "Abrir {$chatTitle}",
    closeAriaLabel: "Cerrar {$chatTitle}",
    sendAriaLabel: "Enviar",
    inputAriaLabel: "Hablar con agente",
    opensInANewTab: "Se abre en una nueva pesta\u00f1a",
    agentSays: "Mensaje del agente:",
    iSay: "Mi mensaje:",
    citationsMessage: "Fuente:",
    feedbackWhyRatingText: "\u00bfPor qu\u00e9 has elegido esta valoraci\u00f3n?",
    feedbackOptionalText: "opcional",
    feedbackPlaceholder: "M\u00e1s comentarios",
    feedbackSubmit: "Enviar",
    feedbackChipIrrelevant: "Irrelevante",
    feedbackChipIncorrect: "Incorrecto",
    feedbackChipUnsafe: "No seguro",
    feedbackInputAriaLabel: "Proporciona m\u00e1s comentarios",
    feedbackCloseAriaLabel: "Cerrar comentarios adicionales",
    feedbackSubmitAriaLabel: "Enviar m\u00e1s comentarios",
    feedbackThankYouText: "Gracias por enviarnos tus comentarios",
    feedbackPrivacyNoticeText: "No incluyas datos personales ni sensibles",
    requestAccess: "Solicitar acceso",
    useCodeWithCautionText: "Usa el c\u00f3digo con precauci\u00f3n.",
    copyCodeAriaLabel: "Copiar c\u00f3digo",
    jumpToBottom: "Ir al final",
    youtubeVideoLabel: "V\u00eddeo de YouTube",
    videoNoSupportFallbackText: "Tu navegador no es compatible con la etiqueta de v\u00eddeo.",
    cancelClientSideTask: "Cancelar tarea",
    messageTooLongWarning: "Est\u00e1s escribiendo una entrada larga, lo que puede generar un resultado sin coincidencias. Acorta tu consulta para recibir una respuesta m\u00e1s acertada.",
    positiveFeedbackAriaLabel: "Buena respuesta",
    negativeFeedbackAriaLabel: "Mala respuesta",
    uploadFileAriaLabel: "Subir archivo",
    microphoneAriaLabel: "Usar micr\u00f3fono"
});
DF_Mn.set("fr", {
    askSomething: "Posez une question\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Une erreur s'est produite. Veuillez r\u00e9essayer.",
    messageTooLong: "Petit probl\u00e8me\u2026 Votre message contient {$numOfChars}\u00a0caract\u00e8re(s) en trop.",
    authErrorMessage: "Autorisation refus\u00e9e.",
    openAriaLabel: "Ouvrir\u00a0{$chatTitle}",
    closeAriaLabel: "Fermer {$chatTitle}",
    sendAriaLabel: "Envoyer",
    inputAriaLabel: "Parlez \u00e0 l'agent",
    opensInANewTab: "La page s'ouvre dans un nouvel onglet",
    agentSays: "L'agent dit\u00a0:",
    iSay: "Je dis\u00a0:",
    citationsMessage: "Source\u00a0:",
    feedbackWhyRatingText: "Pourquoi \u00eates-vous de cet avis\u00a0?",
    feedbackOptionalText: "facultatif",
    feedbackPlaceholder: "Autres commentaires",
    feedbackSubmit: "Envoyer",
    feedbackChipIrrelevant: "Non pertinent",
    feedbackChipIncorrect: "Incorrect",
    feedbackChipUnsafe: "Non s\u00e9curis\u00e9",
    feedbackInputAriaLabel: "Fournir d'autres commentaires",
    feedbackCloseAriaLabel: "Fermer les commentaires suppl\u00e9mentaires",
    feedbackSubmitAriaLabel: "Envoyer les commentaires suppl\u00e9mentaires",
    feedbackThankYouText: "Merci de vos commentaires",
    feedbackPrivacyNoticeText: "Veuillez ne pas fournir d'informations personnelles ni sensibles",
    requestAccess: "Demander l'acc\u00e8s",
    useCodeWithCautionText: "Utilisez ce code avec pr\u00e9caution.",
    copyCodeAriaLabel: "Copier le code",
    jumpToBottom: "Aller en bas",
    youtubeVideoLabel: "Vid\u00e9o YouTube",
    videoNoSupportFallbackText: "Votre navigateur n'est pas compatible avec le tag vid\u00e9o.",
    cancelClientSideTask: "Annuler la t\u00e2che",
    messageTooLongWarning: "Vous saisissez une requ\u00eate longue, ce qui peut aboutir \u00e0 un r\u00e9sultat sans correspondance. Raccourcissez votre requ\u00eate pour obtenir une r\u00e9ponse plus appropri\u00e9e.",
    positiveFeedbackAriaLabel: "Bonne r\u00e9ponse",
    negativeFeedbackAriaLabel: "Mauvaise r\u00e9ponse",
    uploadFileAriaLabel: "Importer un fichier",
    microphoneAriaLabel: "Utiliser le micro"
});
DF_Mn.set("fr-ch", {
    askSomething: "Posez une question\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Une erreur s'est produite. Veuillez r\u00e9essayer.",
    messageTooLong: "Petit probl\u00e8me\u2026 Votre message contient {$numOfChars}\u00a0caract\u00e8re(s) en trop.",
    authErrorMessage: "Autorisation refus\u00e9e.",
    openAriaLabel: "Ouvrir\u00a0{$chatTitle}",
    closeAriaLabel: "Fermer {$chatTitle}",
    sendAriaLabel: "Envoyer",
    inputAriaLabel: "Parlez \u00e0 l'agent",
    opensInANewTab: "La page s'ouvre dans un nouvel onglet",
    agentSays: "L'agent dit\u00a0:",
    iSay: "Je dis\u00a0:",
    citationsMessage: "Source\u00a0:",
    feedbackWhyRatingText: "Pourquoi \u00eates-vous de cet avis\u00a0?",
    feedbackOptionalText: "facultatif",
    feedbackPlaceholder: "Autres commentaires",
    feedbackSubmit: "Envoyer",
    feedbackChipIrrelevant: "Non pertinent",
    feedbackChipIncorrect: "Incorrect",
    feedbackChipUnsafe: "Non s\u00e9curis\u00e9",
    feedbackInputAriaLabel: "Fournir d'autres commentaires",
    feedbackCloseAriaLabel: "Fermer les commentaires suppl\u00e9mentaires",
    feedbackSubmitAriaLabel: "Envoyer les commentaires suppl\u00e9mentaires",
    feedbackThankYouText: "Merci de vos commentaires",
    feedbackPrivacyNoticeText: "Veuillez ne pas fournir d'informations personnelles ni sensibles",
    requestAccess: "Demander l'acc\u00e8s",
    useCodeWithCautionText: "Utilisez ce code avec pr\u00e9caution.",
    copyCodeAriaLabel: "Copier le code",
    jumpToBottom: "Aller en bas",
    youtubeVideoLabel: "Vid\u00e9o YouTube",
    videoNoSupportFallbackText: "Votre navigateur n'est pas compatible avec le tag vid\u00e9o.",
    cancelClientSideTask: "Annuler la t\u00e2che",
    messageTooLongWarning: "Vous saisissez une requ\u00eate longue, ce qui peut aboutir \u00e0 un r\u00e9sultat sans correspondance. Raccourcissez votre requ\u00eate pour obtenir une r\u00e9ponse plus appropri\u00e9e.",
    positiveFeedbackAriaLabel: "Bonne r\u00e9ponse",
    negativeFeedbackAriaLabel: "Mauvaise r\u00e9ponse",
    uploadFileAriaLabel: "Importer un fichier",
    microphoneAriaLabel: "Utiliser le micro"
});
DF_Mn.set("hi", {
    askSomething: "\u0915\u0941\u091b \u092a\u0942\u091b\u0947\u0902...",
    chatTitle: "\u091a\u0948\u091f \u0915\u0930\u0947\u0902",
    genericErrorMessage: "\u0915\u094b\u0908 \u0917\u0921\u093c\u092c\u0921\u093c\u0940 \u0939\u0941\u0908, \u0915\u0943\u092a\u092f\u093e \u092b\u093f\u0930 \u0938\u0947 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902.",
    messageTooLong: "\u0913\u0939! \u0906\u092a\u0915\u0947 \u092e\u0948\u0938\u0947\u091c \u092e\u0947\u0902 {$numOfChars} \u0935\u0930\u094d\u0923 \u091c\u093c\u094d\u092f\u093e\u0926\u093e \u0939\u0948\u0902.",
    authErrorMessage: "\u0905\u0928\u0941\u092e\u0924\u093f \u0928\u0939\u0940\u0902 \u0926\u0940 \u0917\u0908.",
    openAriaLabel: "{$chatTitle} \u0916\u094b\u0932\u0947\u0902",
    closeAriaLabel: "{$chatTitle} \u092c\u0902\u0926 \u0915\u0930\u0947\u0902",
    sendAriaLabel: "\u092d\u0947\u091c\u0947\u0902",
    inputAriaLabel: "\u090f\u091c\u0947\u0902\u091f \u0938\u0947 \u092c\u093e\u0924 \u0915\u0930\u0947\u0902",
    opensInANewTab: "\u0928\u090f \u091f\u0948\u092c \u092e\u0947\u0902 \u0916\u0941\u0932\u0924\u093e \u0939\u0948",
    agentSays: "\u090f\u091c\u0947\u0902\u091f \u0928\u0947 \u0915\u0939\u093e:",
    iSay: "\u092e\u0948\u0902\u0928\u0947 \u0915\u0939\u093e:",
    citationsMessage: "\u0938\u094d\u0930\u094b\u0924:",
    feedbackWhyRatingText: "\u0906\u092a\u0915\u0947 \u092f\u0939 \u0930\u0947\u091f\u093f\u0902\u0917 \u0926\u0947\u0928\u0947 \u0915\u0940 \u0935\u091c\u0939 \u0915\u094d\u092f\u093e \u0939\u0948?",
    feedbackOptionalText: "\u091c\u093c\u0930\u0942\u0930\u0940 \u0928\u0939\u0940\u0902",
    feedbackPlaceholder: "\u0905\u0928\u094d\u092f \u0938\u0941\u091d\u093e\u0935",
    feedbackSubmit: "\u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0947\u0902",
    feedbackChipIrrelevant: "\u0915\u093e\u092e \u0915\u093e \u0928\u0939\u0940\u0902 \u0939\u0948",
    feedbackChipIncorrect: "\u0917\u0932\u0924 \u0939\u0948",
    feedbackChipUnsafe: "\u0905\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0939\u0948",
    feedbackInputAriaLabel: "\u0915\u094b\u0908 \u0905\u0928\u094d\u092f \u0938\u0941\u091d\u093e\u0935 \u0926\u0947\u0902",
    feedbackCloseAriaLabel: "\u0905\u0928\u094d\u092f \u0936\u093f\u0915\u093e\u092f\u0924 \u0935\u093e\u0932\u093e \u0938\u0947\u0915\u094d\u0936\u0928 \u092c\u0902\u0926 \u0915\u0930\u0947\u0902",
    feedbackSubmitAriaLabel: "\u0905\u0928\u094d\u092f \u0938\u0941\u091d\u093e\u0935 \u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0947\u0902",
    feedbackThankYouText: "\u0906\u092a\u0915\u0947 \u0938\u0941\u091d\u093e\u0935 \u0915\u0947 \u0932\u093f\u090f \u0927\u0928\u094d\u092f\u0935\u093e\u0926",
    feedbackPrivacyNoticeText: "\u0915\u0943\u092a\u092f\u093e \u0915\u094b\u0908 \u0928\u093f\u091c\u0940 \u092f\u093e \u0938\u0902\u0935\u0947\u0926\u0928\u0936\u0940\u0932 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0928 \u0926\u0947\u0902",
    requestAccess: "\u0910\u0915\u094d\u0938\u0947\u0938 \u092e\u093e\u0902\u0917\u0947\u0902",
    useCodeWithCautionText: "\u0915\u094b\u0921 \u0915\u093e \u0907\u0938\u094d\u0924\u0947\u092e\u093e\u0932 \u0938\u093e\u0935\u0927\u093e\u0928\u0940 \u0938\u0947 \u0915\u0930\u0947\u0902.",
    copyCodeAriaLabel: "\u0915\u094b\u0921 \u0915\u0949\u092a\u0940 \u0915\u0930\u0947\u0902",
    jumpToBottom: "\u0938\u092c\u0938\u0947 \u0928\u0940\u091a\u0947 \u091c\u093e\u090f\u0902",
    youtubeVideoLabel: "YouTube \u0935\u0940\u0921\u093f\u092f\u094b",
    videoNoSupportFallbackText: "\u0906\u092a\u0915\u0947 \u092c\u094d\u0930\u093e\u0909\u091c\u093c\u0930 \u092e\u0947\u0902, \u0935\u0940\u0921\u093f\u092f\u094b \u092e\u0947\u0902 \u091f\u0948\u0917 \u091c\u094b\u0921\u093c\u0928\u0947 \u0915\u0940 \u0938\u0941\u0935\u093f\u0927\u093e \u0915\u093e\u092e \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u0940.",
    cancelClientSideTask: "\u091f\u093e\u0938\u094d\u0915 \u0930\u0926\u094d\u0926 \u0915\u0930\u0947\u0902",
    messageTooLongWarning: '\u0906\u092a\u0915\u093e \u0907\u0928\u092a\u0941\u091f \u092c\u0939\u0941\u0924 \u0932\u0902\u092c\u093e \u0939\u0948. \u0907\u0938 \u0915\u093e\u0930\u0923, \u0906\u092a\u0915\u094b "\u0915\u094b\u0908 \u092e\u0948\u091a \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u093e" \u0935\u093e\u0932\u093e \u0928\u0924\u0940\u091c\u093e \u092e\u093f\u0932 \u0938\u0915\u0924\u093e \u0939\u0948. \u092c\u0947\u0939\u0924\u0930 \u091c\u0935\u093e\u092c \u0915\u0947 \u0932\u093f\u090f \u0905\u092a\u0928\u0940 \u0915\u094d\u0935\u0947\u0930\u0940 \u0915\u094b \u091b\u094b\u091f\u093e \u0915\u0930\u0947\u0902.',
    positiveFeedbackAriaLabel: "\u0905\u091a\u094d\u091b\u093e \u091c\u0935\u093e\u092c",
    negativeFeedbackAriaLabel: "\u0916\u0930\u093e\u092c \u091c\u0935\u093e\u092c",
    uploadFileAriaLabel: "\u092b\u093c\u093e\u0907\u0932 \u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0947\u0902",
    microphoneAriaLabel: "\u092e\u093e\u0907\u0915\u094d\u0930\u094b\u092b\u093c\u094b\u0928 \u0907\u0938\u094d\u0924\u0947\u092e\u093e\u0932 \u0915\u0930\u0947\u0902"
});
DF_Mn.set("it", {
    askSomething: "Poni una domanda\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Si \u00e8 verificato un errore. Riprova.",
    messageTooLong: "Spiacenti. Il tuo messaggio \u00e8 troppo lungo (caratteri oltre la lunghezza massima consentita: {$numOfChars}).",
    authErrorMessage: "Autorizzazione negata.",
    openAriaLabel: "Apri {$chatTitle}",
    closeAriaLabel: "Chiudi {$chatTitle}",
    sendAriaLabel: "Invia",
    inputAriaLabel: "Parla con l'agente",
    opensInANewTab: "Si apre in una nuova scheda",
    agentSays: "Messaggio dell'agente:",
    iSay: "Messaggio dell'utente:",
    citationsMessage: "Fonte:",
    feedbackWhyRatingText: "Perch\u00e9 hai assegnato questa valutazione?",
    feedbackOptionalText: "facoltativo",
    feedbackPlaceholder: "Feedback aggiuntivo",
    feedbackSubmit: "Invia",
    feedbackChipIrrelevant: "Non pertinente",
    feedbackChipIncorrect: "Incorretto",
    feedbackChipUnsafe: "Non sicuro",
    feedbackInputAriaLabel: "Fornisci un feedback aggiuntivo",
    feedbackCloseAriaLabel: "Chiudi feedback aggiuntivo",
    feedbackSubmitAriaLabel: "Invia feedback aggiuntivo",
    feedbackThankYouText: "Grazie per il tuo feedback",
    feedbackPrivacyNoticeText: "Non fornire dati personali o sensibili",
    requestAccess: "Richiedi accesso",
    useCodeWithCautionText: "Usa il codice con cautela.",
    copyCodeAriaLabel: "Copia codice",
    jumpToBottom: "Vai alla fine",
    youtubeVideoLabel: "Video di YouTube",
    videoNoSupportFallbackText: "Il tuo browser non supporta il tag video.",
    cancelClientSideTask: "Annulla attivit\u00e0",
    messageTooLongWarning: 'Stai scrivendo un input lungo, il che potrebbe generare "nessuna corrispondenza" come risultato. Abbrevia la query per una risposta migliore.',
    positiveFeedbackAriaLabel: "Risposta buona",
    negativeFeedbackAriaLabel: "Risposta scadente",
    uploadFileAriaLabel: "Carica file",
    microphoneAriaLabel: "Usa il microfono"
});
DF_Mn.set("nl", {
    askSomething: "Vraag iets...",
    chatTitle: "Chat",
    genericErrorMessage: "Er is iets misgegaan. Probeer het opnieuw.",
    messageTooLong: "Oeps! Uw bericht is {$numOfChars} teken(s) te lang.",
    authErrorMessage: "Toestemming geweigerd.",
    openAriaLabel: "{$chatTitle} openen",
    closeAriaLabel: "{$chatTitle} sluiten",
    sendAriaLabel: "Sturen",
    inputAriaLabel: "Praten met medewerker",
    opensInANewTab: "Wordt op een nieuw tabblad geopend",
    agentSays: "Medewerker zegt:",
    iSay: "Ik zeg:",
    citationsMessage: "Bron:",
    feedbackWhyRatingText: "Waarom heb je deze beoordeling gekozen?",
    feedbackOptionalText: "optioneel",
    feedbackPlaceholder: "Aanvullende feedback",
    feedbackSubmit: "Sturen",
    feedbackChipIrrelevant: "Niet relevant",
    feedbackChipIncorrect: "Onjuist",
    feedbackChipUnsafe: "Onveilig",
    feedbackInputAriaLabel: "Aanvullende feedback geven",
    feedbackCloseAriaLabel: "Aanvullende feedback sluiten",
    feedbackSubmitAriaLabel: "Aanvullende feedback sturen",
    feedbackThankYouText: "Hartelijk dank voor uw feedback",
    feedbackPrivacyNoticeText: "Vermeld geen persoonlijke of gevoelige gegevens",
    requestAccess: "Toegang aanvragen",
    useCodeWithCautionText: "Wees voorzichtig met het gebruik van code.",
    copyCodeAriaLabel: "Code kopi\u00ebren",
    jumpToBottom: "Naar beneden",
    youtubeVideoLabel: "YouTube-video",
    videoNoSupportFallbackText: "Uw browser ondersteunt de videotag niet.",
    cancelClientSideTask: "Taak annuleren",
    messageTooLongWarning: "Uw invoer is lang, waardoor er misschien geen overeenkomst wordt gevonden. Kort de query in voor een betere reactie.",
    positiveFeedbackAriaLabel: "Goede reactie",
    negativeFeedbackAriaLabel: "Slechte reactie",
    uploadFileAriaLabel: "Bestand uploaden",
    microphoneAriaLabel: "Microfoon gebruiken"
});
DF_Mn.set("pt-pt", {
    askSomething: "Fa\u00e7a uma pergunta\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Algo correu mal. Tente mais tarde.",
    messageTooLong: "Ups! A sua mensagem tem {$numOfChars} car\u00e1ter/carateres a mais.",
    authErrorMessage: "Autoriza\u00e7\u00e3o recusada.",
    openAriaLabel: "Abrir {$chatTitle}",
    closeAriaLabel: "Fechar {$chatTitle}",
    sendAriaLabel: "Enviar",
    inputAriaLabel: "Fale com um agente",
    opensInANewTab: "Abre-se num novo separador",
    agentSays: "O agente disse:",
    iSay: "Eu disse:",
    citationsMessage: "Fonte:",
    feedbackWhyRatingText: "Porque escolheu esta classifica\u00e7\u00e3o?",
    feedbackOptionalText: "opcional",
    feedbackPlaceholder: "Feedback adicional",
    feedbackSubmit: "Enviar",
    feedbackChipIrrelevant: "Irrelevante",
    feedbackChipIncorrect: "Incorreto",
    feedbackChipUnsafe: "Inseguro",
    feedbackInputAriaLabel: "Envie feedback adicional",
    feedbackCloseAriaLabel: "Fechar feedback adicional",
    feedbackSubmitAriaLabel: "Enviar feedback adicional",
    feedbackThankYouText: "Obrigado pelo seu feedback",
    feedbackPrivacyNoticeText: "N\u00e3o partilhe dados pessoais nem confidenciais",
    requestAccess: "Pedir acesso",
    useCodeWithCautionText: "Use o c\u00f3digo com cuidado.",
    copyCodeAriaLabel: "Copiar c\u00f3digo",
    jumpToBottom: "Ir para o final",
    youtubeVideoLabel: "V\u00eddeo do YouTube",
    videoNoSupportFallbackText: "O seu navegador n\u00e3o suporta a etiqueta de v\u00eddeo.",
    cancelClientSideTask: "Cancelar tarefa",
    messageTooLongWarning: 'A sua entrada \u00e9 demasiado comprida, o que pode originar o resultado "Sem correspond\u00eancias". Encurte a consulta para obter uma melhor resposta.',
    positiveFeedbackAriaLabel: "Boa resposta",
    negativeFeedbackAriaLabel: "Resposta de baixa qualidade",
    uploadFileAriaLabel: "Carregar ficheiro",
    microphoneAriaLabel: "Usar microfone"
});
DF_Mn.set("sv", {
    askSomething: "St\u00e4ll en fr\u00e5ga\u00a0\u2026",
    chatTitle: "Chatt",
    genericErrorMessage: "Ett fel uppstod. F\u00f6rs\u00f6k igen.",
    messageTooLong: "Hoppsan! Ditt meddelande \u00e4r {$numOfChars} tecken f\u00f6r l\u00e5ngt.",
    authErrorMessage: "Beh\u00f6righet nekad.",
    openAriaLabel: "\u00d6ppna {$chatTitle}",
    closeAriaLabel: "St\u00e4ng {$chatTitle}",
    sendAriaLabel: "Skicka",
    inputAriaLabel: "Prata med representant",
    opensInANewTab: "\u00d6ppnas p\u00e5 en ny flik",
    agentSays: "Representanten s\u00e4ger:",
    iSay: "Jag s\u00e4ger:",
    citationsMessage: "K\u00e4lla:",
    feedbackWhyRatingText: "Varf\u00f6r valde du det h\u00e4r betyget?",
    feedbackOptionalText: "valfritt",
    feedbackPlaceholder: "\u00d6vrig feedback",
    feedbackSubmit: "Skicka",
    feedbackChipIrrelevant: "Irrelevant",
    feedbackChipIncorrect: "Felaktig",
    feedbackChipUnsafe: "Os\u00e4ker",
    feedbackInputAriaLabel: "L\u00e4mna ytterligare feedback",
    feedbackCloseAriaLabel: "St\u00e4ng ytterligare feedback",
    feedbackSubmitAriaLabel: "L\u00e4mna ytterligare feedback",
    feedbackThankYouText: "Tack f\u00f6r din feedback!",
    feedbackPrivacyNoticeText: "Ange inga personliga eller k\u00e4nsliga uppgifter",
    requestAccess: "Beg\u00e4r \u00e5tkomst",
    useCodeWithCautionText: "Anv\u00e4nd koden med f\u00f6rsiktighet.",
    copyCodeAriaLabel: "Kopiera kod",
    jumpToBottom: "Hoppa l\u00e4ngst ned",
    youtubeVideoLabel: "YouTube-video",
    videoNoSupportFallbackText: "Din webbl\u00e4sare har inte st\u00f6d f\u00f6r videotaggen.",
    cancelClientSideTask: "Avbryt uppgift",
    messageTooLongWarning: "Du skriver ett l\u00e5ngt meddelande, vilket kan leda till att ingen matchning hittas. F\u00f6rkorta s\u00f6kfr\u00e5gan f\u00f6r att f\u00e5 ett b\u00e4ttre svar.",
    positiveFeedbackAriaLabel: "Bra svar",
    negativeFeedbackAriaLabel: "D\u00e5ligt svar",
    uploadFileAriaLabel: "Ladda upp fil",
    microphoneAriaLabel: "Anv\u00e4nd mikrofonen"
});

function DF_Mo(a, b, c) {
    a = DF_M2a(a, b);
    if (!c) return a;
    c = DF_Md(Object.entries(c));
    for (b = c.next(); !b.done; b = c.next()) {
        var d = DF_Md(b.value);
        b = d.next().value;
        d = d.next().value;
        a = a.replace(new RegExp("\\{\\$" + b + "\\}", "g"), d)
    }
    return a
}

function DF_M2a(a, b) {
    var c, d;
    if (c = (d = globalThis.dfMessengerTexts) == null ? void 0 : d[b]) return c;
    if (!a) return DF_Mn.get("en")[b] || "";
    a = a.toLowerCase();
    return DF_Mn.has(a) ? (a = DF_Mn.get(a)[b]) ? a : DF_Mn.get("en")[b] || "" : DF_Mn.get("en")[b] || ""
};

function DF_M3a(a, b, c) {
    var d = new Image;
    d.onload = function() {
        b()
    };
    d.onerror = function() {
        c()
    };
    d.src = a
}

function DF_M4a(a) {
    return a !== void 0 && a !== null
}

function DF_M5a(a, b, c) {
    return a != null ? a : DF_Mo(b, c)
}

function DF_M6a(a) {
    DF_Mm(a, "df-messenger-scroll-into-view", {
        padding: 10,
        element: a
    })
}

function DF_M7a(a) {
    return typeof a === "string" || a instanceof String
}

function DF_M8a(a) {
    return a != null && (typeof a === "object" || a instanceof Object) && !Array.isArray(a)
}
var DF_M9a = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu\.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/;

function DF_M$a(a) {
    if ((a = a.match(DF_M9a)) && !(a.length < 6)) return a[6]
}

function DF_Mab(a) {
    return function() {
        var b = !1;
        return function() {
            b || (b = a())
        }
    }()
}

function DF_Mbb(a, b) {
    return b < 0 ? !0 : a <= b
}
var DF_Mcb = new Set(["image/gif", "image/jpeg", "image/png"]);

function DF_Mp(a) {
    return function(b, c) {
        c !== void 0 ? c.m(function() {
            customElements.define(a, b)
        }) : customElements.define(a, b)
    }
};
/*

 Copyright 2016 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var DF_Mdb = !DF_MOa || HTMLElement.es5Shimmed || DF_Mj.Reflect === void 0 || DF_Mj.customElements === void 0 || DF_Mj.customElements.polyfillWrapFlushCallback || !1,
    DF_Meb;

function DF_Mfb() {
    function a() {
        return c.construct(b, [], this.constructor)
    }
    var b = HTMLElement;
    if (DF_Mdb) return b;
    if (DF_Meb !== void 0) return DF_Meb;
    var c = DF_Mj.Reflect;
    a.prototype = b.prototype;
    a.prototype.constructor = a;
    a.es5Shimmed = !0;
    Object.setPrototypeOf(a, b);
    return DF_Meb = a
}
var DF_Mgb = !1;
/*

 Copyright 2019 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var DF_Mhb = DF_Mj.ShadowRoot && (DF_Mj.ShadyCSS === void 0 || DF_Mj.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    DF_Mib = Symbol(),
    DF_Mjb = new WeakMap;

function DF_Mkb(a, b, c) {
    this._$cssResult$ = !0;
    if (c !== DF_Mib) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = a;
    this.h = b
}
DF_Mkb.prototype.toString = function() {
    return this.cssText
};
DF_Ma.Object.defineProperties(DF_Mkb.prototype, {
    g: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a = this.i,
                b = this.h;
            if (DF_Mhb && a === void 0) {
                var c = b !== void 0 && b.length === 1;
                c && (a = DF_Mjb.get(b));
                a === void 0 && ((this.i = a = new CSSStyleSheet).replaceSync(this.cssText), c && DF_Mjb.set(b, a))
            }
            return a
        }
    }
});

function DF_Mq(a) {
    var b = DF_Mi.apply(1, arguments);
    return function() {
        var c = a.length === 1 ? a[0] : b.reduce(function(d, e, f) {
            if (e._$cssResult$ === !0) e = e.cssText;
            else if (typeof e !== "number") throw Error("Value passed to 'css' function must be a 'css' function result: " + (e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."));
            return d + e + a[f + 1]
        }, a[0]);
        return new DF_Mkb(c, a, DF_Mib)
    }()
}

function DF_Mlb(a, b) {
    if (DF_Mhb) a.adoptedStyleSheets = b.map(function(f) {
        return f instanceof CSSStyleSheet ? f : f.g
    });
    else {
        b = DF_Md(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = document.createElement("style"),
                e = DF_Mj.litNonce;
            e !== void 0 && d.setAttribute("nonce", e);
            d.textContent = c.cssText;
            a.appendChild(d)
        }
    }
}
var DF_Mmb = DF_Mhb ? function(a) {
    return a
} : function(a) {
    if (a instanceof CSSStyleSheet) {
        var b = "";
        a = DF_Md(a.cssRules);
        for (var c = a.next(); !c.done; c = a.next()) b += c.value.cssText;
        b = new DF_Mkb(typeof b === "string" ? b : String(b), void 0, DF_Mib)
    } else b = a;
    return b
};

function DF_Mnb(a) {
    if (window.ShadyCSS !== void 0 && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
        a = a.ReactiveElement.prototype;
        window.ShadyDOM && window.ShadyDOM.inUse && window.ShadyDOM.noPatch === !0 && window.ShadyDOM.patchElementProto(a);
        var b = a.ha;
        a.ha = function() {
            var e = this.localName;
            if (window.ShadyCSS.nativeShadow) return b.call(this);
            if (!this.constructor.hasOwnProperty("__scoped")) {
                this.constructor.__scoped = !0;
                var f = this.constructor.o.map(function(l) {
                        return l instanceof CSSStyleSheet ? Array.from(l.cssRules).reduce(function(m,
                            n) {
                            return m + n.cssText
                        }, "") : l.cssText
                    }),
                    g, h;
                (g = window.ShadyCSS) == null || (h = g.ScopingShim) == null || h.prepareAdoptedCssText(f, e);
                this.constructor.Ic === void 0 && window.ShadyCSS.prepareTemplateStyles(document.createElement("template"), e)
            }
            var k;
            return (k = this.shadowRoot) != null ? k : this.attachShadow(this.constructor.D)
        };
        var c = a.connectedCallback;
        a.connectedCallback = function() {
            c.call(this);
            this.Ha && window.ShadyCSS.styleElement(this)
        };
        var d = a.vb;
        a.vb = function(e) {
            this.Ha || window.ShadyCSS.styleElement(this);
            d.call(this,
                e)
        }
    }
}
var DF_Mob;
(DF_Mob = window).reactiveElementPolyfillSupport != null || (DF_Mob.reactiveElementPolyfillSupport = DF_Mnb);
DF_Mdb || DF_Mgb || (DF_Mgb = !0, DF_Mj.HTMLElement = DF_Mfb());
var DF_Mpb = DF_Mfb(),
    DF_Mqb = Object,
    DF_Mrb = DF_Mqb.is,
    DF_Msb = DF_Mqb.defineProperty,
    DF_Mtb = DF_Mqb.getOwnPropertyDescriptor,
    DF_Mub = DF_Mqb.getOwnPropertyNames,
    DF_Mvb = DF_Mqb.getOwnPropertySymbols,
    DF_Mwb = DF_Mqb.getPrototypeOf,
    DF_Mxb = DF_Mj.trustedTypes,
    DF_Myb = DF_Mxb ? DF_Mxb.emptyScript : "",
    DF_Mzb = DF_Mj.reactiveElementPolyfillSupport,
    DF_MAb = {
        wc: function(a, b) {
            switch (b) {
                case Boolean:
                    a = a ? DF_Myb : null;
                    break;
                case Object:
                case Array:
                    a = a == null ? a : JSON.stringify(a)
            }
            return a
        },
        Kb: function(a, b) {
            var c = a;
            switch (b) {
                case Boolean:
                    c =
                        a !== null;
                    break;
                case Number:
                    c = a === null ? null : Number(a);
                    break;
                case Object:
                case Array:
                    try {
                        c = JSON.parse(a)
                    } catch (d) {
                        c = null
                    }
            }
            return c
        }
    };

function DF_MBb(a, b) {
    return !DF_Mrb(a, b)
}
var DF_MCb = {
        l: !0,
        type: String,
        va: DF_MAb,
        K: !1,
        pc: DF_MBb
    },
    DF_MDb;
Symbol.metadata == null && (Symbol.metadata = Symbol("metadata"));
DF_MDb = Symbol.metadata;
var DF_MEb = new WeakMap;

function DF_Mr() {
    var a = DF_Mpb.call(this) || this;
    a.L = void 0;
    a.G = !1;
    a.Ha = !1;
    a.h = null;
    a.Mc();
    return a
}
DF_Mf(DF_Mr, DF_Mpb);
DF_Mr.m = function(a) {
    this.g();
    var b;
    ((b = this.Na) != null ? b : this.Na = []).push(a)
};
DF_Mr.u = function(a, b) {
    b = b === void 0 ? DF_MCb : b;
    b.state && (b.l = !1);
    this.g();
    this.aa.set(a, b);
    b.Qd || (b = this.i(a, Symbol(), b), b !== void 0 && DF_Msb(this.prototype, a, b))
};
DF_Mr.i = function(a, b, c) {
    var d, e = (d = DF_Mtb(this.prototype, a)) != null ? d : {
            get: function() {
                return this[b]
            },
            set: function(h) {
                this[b] = h
            }
        },
        f = e.get,
        g = e.set;
    return {
        get: function() {
            return f == null ? void 0 : f.call(this)
        },
        set: function(h) {
            var k = f == null ? void 0 : f.call(this);
            g.call(this, h);
            DF_MVa(this, a, k, c)
        },
        configurable: !0,
        enumerable: !0
    }
};
DF_Mr.C = function(a) {
    var b;
    return (b = this.aa.get(a)) != null ? b : DF_MCb
};
DF_Mr.g = function() {
    if (!this.hasOwnProperty("aa")) {
        var a = DF_Mwb(this);
        a.v();
        a.Na !== void 0 && (this.Na = [].concat(DF_Me(a.Na)));
        this.aa = new Map(a.aa)
    }
};
DF_Mr.v = function() {
    DF_MFb();
    if (!this.hasOwnProperty("Jb")) {
        this.Jb = !0;
        this.g();
        if (this.hasOwnProperty("yd")) {
            var a = this.yd,
                b = [].concat(DF_Me(DF_Mub(a)), DF_Me(DF_Mvb(a)));
            b = DF_Md(b);
            for (var c = b.next(); !c.done; c = b.next()) c = c.value, this.u(c, a[c])
        }
        a = this[DF_MDb];
        if (a !== null && (a = DF_MEb.get(a), a !== void 0))
            for (a = DF_Md(a), b = a.next(); !b.done; b = a.next()) c = DF_Md(b.value), b = c.next().value, c = c.next().value, this.aa.set(b, c);
        this.cb = new Map;
        a = DF_Md(this.aa);
        for (b = a.next(); !b.done; b = a.next()) c = DF_Md(b.value), b = c.next().value,
            c = c.next().value, c = this.s(b, c), c !== void 0 && this.cb.set(c, b);
        this.o = this.h(this.j)
    }
};
DF_Mr.h = function(a) {
    var b = [];
    if (Array.isArray(a)) {
        a = new Set(a.flat(Infinity).reverse());
        a = DF_Md(a);
        for (var c = a.next(); !c.done; c = a.next()) b.unshift(DF_Mmb(c.value))
    } else a !== void 0 && b.push(DF_Mmb(a));
    return b
};
DF_Mr.s = function(a, b) {
    b = b.l;
    return b === !1 ? void 0 : typeof b === "string" ? b : typeof a === "string" ? a.toLowerCase() : void 0
};
DF_M = DF_Mr.prototype;
DF_M.Mc = function() {
    var a = this;
    this.za = new Promise(function(c) {
        return a.nc = c
    });
    this.i = new Map;
    this.Oc();
    DF_MVa(this);
    var b;
    (b = this.constructor.Na) == null || b.forEach(function(c) {
        return c(a)
    })
};
DF_M.fc = function(a) {
    var b;
    ((b = this.j) != null ? b : this.j = new Set).add(a);
    if (this.T !== void 0 && this.isConnected) {
        var c;
        (c = a.Lb) == null || c.call(a)
    }
};
DF_M.Oc = function() {
    for (var a = new Map, b = DF_Md(this.constructor.aa.keys()), c = b.next(); !c.done; c = b.next()) c = c.value, this.hasOwnProperty(c) && (a.set(c, this[c]), delete this[c]);
    a.size > 0 && (this.L = a)
};
DF_M.ha = function() {
    var a, b = (a = this.shadowRoot) != null ? a : this.attachShadow(this.constructor.D);
    DF_Mlb(b, this.constructor.o);
    return b
};
DF_M.connectedCallback = function() {
    this.T != null || (this.T = this.ha());
    this.nc(!0);
    var a;
    (a = this.j) == null || a.forEach(function(b) {
        var c;
        return (c = b.Lb) == null ? void 0 : c.call(b)
    })
};
DF_M.nc = function() {};
DF_M.disconnectedCallback = function() {
    var a;
    (a = this.j) == null || a.forEach(function(b) {
        var c;
        return (c = b.rd) == null ? void 0 : c.call(b)
    })
};
DF_M.attributeChangedCallback = function(a, b, c) {
    this.Hc(a, c)
};
DF_M.Nc = function(a, b) {
    var c = this.constructor.aa.get(a),
        d = this.constructor.s(a, c);
    if (d !== void 0 && c.K === !0) {
        var e, f = (((e = c.va) == null ? void 0 : e.wc) !== void 0 ? c.va : DF_MAb).wc(b, c.type);
        this.h = a;
        f == null ? this.removeAttribute(d) : this.setAttribute(d, f);
        this.h = null
    }
};
DF_M.Hc = function(a, b) {
    var c = this.constructor;
    a = c.cb.get(a);
    if (a !== void 0 && this.h !== a) {
        c = c.C(a);
        var d, e = typeof c.va === "function" ? {
            Kb: c.va
        } : ((d = c.va) == null ? void 0 : d.Kb) !== void 0 ? c.va : DF_MAb;
        this.h = a;
        this[a] = e.Kb(b, c.type);
        this.h = null
    }
};

function DF_MVa(a, b, c, d) {
    if (b !== void 0) {
        d != null || (d = a.constructor.C(b));
        var e;
        if (((e = d.pc) != null ? e : DF_MBb)(a[b], c)) a.ub(b, c, d);
        else return
    }
    a.G === !1 && (a.za = a.Lc())
}
DF_M.ub = function(a, b, c) {
    this.i.has(a) || this.i.set(a, b);
    if (c.K === !0 && this.h !== a) {
        var d;
        ((d = this.O) != null ? d : this.O = new Set).add(a)
    }
};
DF_M.Lc = function() {
    var a = this,
        b, c;
    return DF_Mh(function(d) {
        switch (d.g) {
            case 1:
                return a.G = !0, d.G = 2, DF_Mg(d, a.za, 4);
            case 4:
                d.g = 3;
                d.G = 0;
                break;
            case 2:
                b = DF_Mra(d), a.Kd || Promise.reject(b);
            case 3:
                c = DF_MGb(a);
                if (c == null) {
                    d.g = 5;
                    break
                }
                return DF_Mg(d, c, 5);
            case 5:
                return d.return(!a.G)
        }
    })
};

function DF_MGb(a) {
    if (a.G) {
        if (!a.Ha) {
            a.T != null || (a.T = a.ha());
            if (a.L) {
                for (var b = DF_Md(a.L), c = b.next(); !c.done; c = b.next()) {
                    var d = DF_Md(c.value);
                    c = d.next().value;
                    d = d.next().value;
                    a[c] = d
                }
                a.L = void 0
            }
            b = a.constructor.aa;
            if (b.size > 0)
                for (b = DF_Md(b), c = b.next(); !c.done; c = b.next()) d = DF_Md(c.value), c = d.next().value, d = d.next().value, d.Jd !== !0 || a.i.has(c) || a[c] === void 0 || a.ub(c, a[c], d)
        }
        b = !1;
        c = a.i;
        try {
            b = !0;
            var e;
            (e = a.j) == null || e.forEach(function(f) {
                var g;
                return (g = f.Od) == null ? void 0 : g.call(f)
            });
            a.ta(c)
        } catch (f) {
            throw b = !1, a.cc(), f;
        }
        b && a.vb(c)
    }
}
DF_M.vb = function(a) {
    var b;
    (b = this.j) == null || b.forEach(function(c) {
        var d;
        return (d = c.Pd) == null ? void 0 : d.call(c)
    });
    this.Ha || (this.Ha = !0, this.ia(a));
    this.ra(a)
};
DF_M.cc = function() {
    this.i = new Map;
    this.G = !1
};
DF_M.ta = function() {
    var a = this;
    this.O && (this.O = this.O.forEach(function(b) {
        return a.Nc(b, a[b])
    }));
    this.cc()
};
DF_M.ra = function() {};
DF_M.ia = function() {};
DF_Ma.Object.defineProperties(DF_Mr, {
    observedAttributes: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            this.v();
            return this.cb && [].concat(DF_Me(this.cb.keys()))
        }
    }
});
DF_Mr.o = [];
DF_Mr.D = {
    mode: "open"
};
DF_Mr.aa = new Map;
DF_Mr.Jb = new Map;
DF_Mzb == null || DF_Mzb({
    ReactiveElement: DF_Mr
});

function DF_MFb() {
    var a;
    ((a = DF_Mj.reactiveElementVersions) != null ? a : DF_Mj.reactiveElementVersions = []).push("2.0.4");
    DF_MFb = function() {}
};
var DF_MHb = {
    l: !0,
    type: String,
    va: DF_MAb,
    K: !1,
    pc: DF_MBb
};

function DF_MIb(a, b, c) {
    a = a === void 0 ? DF_MHb : a;
    var d = c.kind,
        e = c.metadata,
        f = DF_MEb.get(e);
    f === void 0 && DF_MEb.set(e, f = new Map);
    f.set(c.name, a);
    if (d === "accessor") {
        var g = c.name;
        return {
            set: function(k) {
                var l = b.get.call(this);
                b.set.call(this, k);
                DF_MVa(this, g, l, a)
            },
            sd: function(k) {
                k !== void 0 && this.ub(g, void 0, a);
                return k
            }
        }
    }
    if (d === "setter") {
        var h = c.name;
        return function(k) {
            var l = this[h];
            b.call(this, k);
            DF_MVa(this, h, l, a)
        }
    }
    throw Error("Unsupported decorator location: " + d);
}

function DF_Ms(a) {
    return function(b, c) {
        if (typeof c === "object") b = DF_MIb(a, b, c);
        else {
            var d = b.hasOwnProperty(c);
            b.constructor.u(c, d ? Object.assign({}, a, {
                Jd: !0
            }) : a);
            b = d ? Object.getOwnPropertyDescriptor(b, c) : void 0
        }
        return b
    }
};

function DF_MJb(a, b, c) {
    c.configurable = !0;
    c.enumerable = !0;
    Reflect.Nd && typeof b !== "object" && Object.defineProperty(a, b, c);
    return c
};

function DF_Mt() {
    return DF_Ms(Object.assign({}, void 0, {
        state: !0,
        l: !1
    }))
};
var DF_MKb = new Set,
    DF_MLb = new Map;

function DF_MMb(a, b) {
    if (window.ShadyCSS !== void 0 && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
        var c, d, e = ((c = window.ShadyDOM) == null ? 0 : c.inUse) && ((d = window.ShadyDOM) == null ? void 0 : d.noPatch) === !0 ? window.ShadyDOM.wrap : function(n) {
                return n
            },
            f = function(n) {
                var p = DF_MLb.get(n);
                p === void 0 && DF_MLb.set(n, p = []);
                return p
            },
            g = new Map,
            h = a.createElement;
        a.createElement = function(n, p) {
            n = h.call(a, n, p);
            p = p == null ? void 0 : p.scope;
            p !== void 0 && (window.ShadyCSS.nativeShadow || window.ShadyCSS.prepareTemplateDom(n,
                p), p === void 0 || DF_MKb.has(p) || (p = f(p), p.push.apply(p, DF_Me(Array.from(n.content.querySelectorAll("style")).map(function(q) {
                var r;
                (r = q.parentNode) == null || r.removeChild(q);
                return q.textContent
            })))));
            return n
        };
        var k = document.createDocumentFragment(),
            l = document.createComment("");
        b = b.prototype;
        var m = b.fa;
        b.fa = function(n, p) {
            p = p === void 0 ? this : p;
            var q = e(this.ga).parentNode,
                r, t = (r = this.options) == null ? void 0 : r.scope,
                v;
            if ((q instanceof ShadowRoot || q === ((v = this.options) == null ? void 0 : v.Sd)) && t !== void 0 && !DF_MKb.has(t)) {
                r =
                    this.ga;
                v = this.Da;
                k.appendChild(l);
                this.ga = l;
                this.Da = null;
                m.call(this, n, p);
                n = (n == null ? 0 : n._$litType$) ? this.J.wb.Ga : document.createElement("template");
                p = f(t);
                var u = p.length !== 0;
                if (u) {
                    var w = document.createElement("style");
                    w.textContent = p.join("\n");
                    n.content.appendChild(w)
                }
                DF_MKb.add(t);
                DF_MLb.delete(t);
                window.ShadyCSS.prepareTemplateStyles(n, t);
                u && window.ShadyCSS.nativeShadow && (t = n.content.querySelector("style"), t !== null && n.content.appendChild(t));
                k.removeChild(l);
                var x;
                if ((x = window.ShadyCSS) == null ?
                    0 : x.nativeShadow) x = n.content.querySelector("style"), x !== null && k.appendChild(x.cloneNode(!0));
                q.insertBefore(k, v);
                this.ga = r;
                this.Da = v
            } else m.call(this, n, p)
        };
        b.bc = function(n) {
            var p, q = (p = this.options) == null ? void 0 : p.scope;
            p = g.get(q);
            p === void 0 && g.set(q, p = new Map);
            q = p.get(n.strings);
            q === void 0 && p.set(n.strings, q = new a(n, this.options));
            return q
        }
    }
}
var DF_MNb;
(DF_MNb = window).litHtmlPolyfillSupport != null || (DF_MNb.litHtmlPolyfillSupport = DF_MMb);
var DF_MOb = "";
if (window.Symbol) {
    var DF_MPb = Symbol();
    typeof DF_MPb !== "symbol" && (DF_MOb = Object.keys(DF_MPb)[0])
}
var DF_MQb = DF_MOb !== "",
    DF_MRb = DF_MQb ? function(a) {
        return a != null && a[DF_MOb] !== void 0
    } : function() {
        return !1
    };
if (DF_MQb && !window.Symbol.for) {
    var DF_MSb = new Map;
    window.Symbol.for = function(a) {
        DF_MSb.has(a) || DF_MSb.set(a, Symbol(a));
        return DF_MSb.get(a)
    }
};

function DF_MTb(a) {
    a = a.LitElement;
    if (window.ShadyCSS !== void 0 && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
        a.Ic = !0;
        a = a.prototype;
        var b = a.ha;
        a.ha = function() {
            this.mb.scope = this.localName;
            return b.call(this)
        }
    }
}
var DF_MUb;
(DF_MUb = window).litElementPolyfillSupport != null || (DF_MUb.litElementPolyfillSupport = DF_MTb);
var DF_MVb;

function DF_MWb() {
    if (DF_MVb === void 0) {
        var a = null,
            b = DF_Mj.trustedTypes;
        if (b && b.createPolicy) {
            try {
                a = b.createPolicy("goog#html", {
                    createHTML: DF_MIa,
                    createScript: DF_MIa,
                    createScriptURL: DF_MIa
                })
            } catch (c) {
                DF_Mj.console && DF_Mj.console.error(c.message)
            }
            DF_MVb = a
        } else DF_MVb = a
    }
    return DF_MVb
};
/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var DF_MXb = DF_Mj.trustedTypes;

function DF_MYb(a) {
    this.g = a
}
DF_MYb.prototype.toString = function() {
    return this.g + ""
};

function DF_MZb(a) {
    var b = DF_MWb();
    return new DF_MYb(b ? b.createHTML(a) : a)
}
var DF_M_b = new DF_MYb(DF_MXb ? DF_MXb.emptyHTML : "");

function DF_M0b(a) {
    if (a instanceof DF_MYb) return a.g;
    throw Error("");
};

function DF_M1b(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, DF_M1b);
    else {
        var c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b)
}
DF_MHa(DF_M1b, Error);
DF_M1b.prototype.name = "CustomError";

function DF_M2b(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    DF_M1b.call(this, c + a[d])
}
DF_MHa(DF_M2b, DF_M1b);
DF_M2b.prototype.name = "AssertionError";

function DF_M3b(a, b) {
    this.g = a === DF_M4b && b || "";
    this.h = DF_M5b
}
DF_M3b.prototype.toString = function() {
    return this.g
};
var DF_M5b = {},
    DF_M4b = {};
var DF_M6b = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
var DF_M7b = {};

function DF_M8b(a) {
    this.g = a
}
DF_M8b.prototype.toString = function() {
    return this.g + ""
};

function DF_M9b(a) {
    return a instanceof DF_M8b && a.constructor === DF_M8b ? a.g : "type_error:TrustedResourceUrl"
}

function DF_M$b(a) {
    var b = DF_MWb();
    a = b ? b.createScriptURL(a) : a;
    return new DF_M8b(a, DF_M7b)
};

function DF_Mac(a) {
    this.g = a
}
DF_Mac.prototype.toString = function() {
    return this.g
};
var DF_Mbc = new DF_Mac("about:invalid#zClosurez");

function DF_Mcc(a) {
    if (a instanceof DF_Mac) return a.g;
    throw Error("");
};

function DF_Mdc(a) {
    this.ud = a
}

function DF_Mec(a) {
    return new DF_Mdc(function(b) {
        return b.substr(0, a.length + 1).toLowerCase() === a + ":"
    })
}
var DF_Mfc = [DF_Mec("data"), DF_Mec("http"), DF_Mec("https"), DF_Mec("mailto"), DF_Mec("ftp"), new DF_Mdc(function(a) {
    return /^[^:]*([/?#]|$)/.test(a)
})];

function DF_Mgc(a) {
    var b = b === void 0 ? DF_Mfc : b;
    a: if (b = b === void 0 ? DF_Mfc : b, !(a instanceof DF_Mac)) {
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof DF_Mdc && d.ud(a)) {
                a = new DF_Mac(a);
                break a
            }
        }
        a = void 0
    }
    return a || DF_Mbc
}
var DF_Mhc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

function DF_Mic(a) {
    this.g = a
}
DF_Mic.prototype.toString = function() {
    return this.g
};

function DF_Mjc(a) {
    if (a instanceof DF_Mic) return a.g;
    throw Error("");
};
var DF_Mkc = new DF_Mic("");

function DF_Mlc(a) {
    if (a instanceof DF_Mac) return 'url("' + a.toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    if (a instanceof DF_M3b) a = a instanceof DF_M3b && a.constructor === DF_M3b && a.h === DF_M5b ? a.g : "type_error:Const";
    else {
        a = String(a);
        var b = a.replace(DF_Mmc, "$1").replace(DF_Mmc, "$1").replace(DF_Mnc, "url");
        if (DF_Moc.test(b)) {
            if (b = !DF_Mpc.test(a)) {
                for (var c = b = !0, d = 0; d < a.length; d++) {
                    var e = a.charAt(d);
                    e == "'" && c ? b = !b : e == '"' && b && (c = !c)
                }
                b = b && c && DF_Mqc(a)
            }
            a = b ? DF_Mrc(a) : "zClosurez"
        } else a = "zClosurez"
    }
    if (/[{;}]/.test(a)) throw new DF_M2b("Value does not allow [{;}], got: %s.", [a]);
    return a
}

function DF_Mqc(a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (e == "]") {
            if (b) return !1;
            b = !0
        } else if (e == "[") {
            if (!b) return !1;
            b = !1
        } else if (!b && !c.test(e)) return !1
    }
    return b
}
var DF_Moc = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    DF_Mnc = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
    DF_Mmc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
    DF_Mpc = /\/\*/;

function DF_Mrc(a) {
    return a.replace(DF_Mnc, function(b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
            f = h;
            return k
        });
        b = DF_Mgc(d).toString();
        return c + f + b + f + e
    })
};

function DF_Msc(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = d;
    return b
}

function DF_Mtc(a) {
    var b = {},
        c;
    for (c in a) b[c] = a[c];
    return b
};
var DF_Muc = {};

function DF_Mvc(a) {
    this.g = a
}
DF_Mvc.prototype.toString = function() {
    return this.g.toString()
};

function DF_Mwc(a) {
    function b(d) {
        Array.isArray(d) ? d.forEach(b) : c += DF_Mxc(d)
    }
    var c = "";
    Array.prototype.forEach.call(arguments, b);
    return new DF_Mvc(c, DF_Muc)
}

function DF_Mxc(a) {
    return a instanceof DF_Mvc && a.constructor === DF_Mvc ? a.g : "type_error:SafeStyleSheet"
}
var DF_Myc = new DF_Mvc("", DF_Muc);

function DF_Mzc(a) {
    var b = DF_Mi.apply(1, arguments);
    if (b.length === 0) return DF_M$b(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return DF_M$b(c)
};
var DF_MAc = DF_Mc(["about:invalid#zClosurez"]),
    DF_MCc = DF_MBc;

function DF_MBc(a, b, c) {
    if (a.nodeType !== 1) return DF_MDc;
    b = b.toLowerCase();
    if (b === "innerhtml" || b === "innertext" || b === "textcontent" || b === "outerhtml") return function() {
        return DF_M0b(DF_M_b)
    };
    var d = DF_MEc.get(a.tagName + " " + b);
    return d !== void 0 ? d : /^on/.test(b) && c === "attribute" && (a = a.tagName.includes("-") ? HTMLElement.prototype : a, b in a) ? function() {
        throw Error("invalid binding");
    } : DF_MDc
}
var DF_MFc = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
    DF_MGc = DF_M9b(DF_Mzc(DF_MAc));

function DF_MDc(a) {
    return a
}

function DF_MHc(a) {
    return DF_MFc.test(String(a)) ? a : DF_MGc
}

function DF_MIc() {
    return DF_MGc
}

function DF_MJc(a) {
    return a instanceof DF_M8b ? DF_M9b(a) : DF_MGc
}
var DF_MEc = new Map([
    ["A href", DF_MHc],
    ["AREA href", DF_MHc],
    ["BASE href", DF_MIc],
    ["BUTTON formaction", DF_MHc],
    ["EMBED src", DF_MIc],
    ["FORM action", DF_MHc],
    ["FRAME src", DF_MIc],
    ["IFRAME src", DF_MJc],
    ["IFRAME srcdoc", function(a) {
        return a instanceof DF_MYb ? DF_M0b(a) : DF_M0b(DF_M_b)
    }],
    ["INPUT formaction", DF_MHc],
    ["LINK href", DF_MJc],
    ["OBJECT codebase", DF_MIc],
    ["OBJECT data", DF_MIc],
    ["SCRIPT href", DF_MJc],
    ["SCRIPT src", DF_MJc],
    ["SCRIPT text", DF_MIc],
    ["USE href", DF_MJc]
]);
var DF_MKc, DF_MLc, DF_MMc, DF_MNc = ((DF_MKc = DF_Mj.ShadyDOM) == null ? 0 : DF_MKc.inUse) && (((DF_MLc = DF_Mj.ShadyDOM) == null ? void 0 : DF_MLc.noPatch) === !0 || ((DF_MMc = DF_Mj.ShadyDOM) == null ? void 0 : DF_MMc.noPatch) === "on-demand") ? DF_Mj.ShadyDOM.wrap : function(a) {
        return a
    },
    DF_MOc = DF_Mj.trustedTypes,
    DF_MPc = DF_MOc ? DF_MOc.createPolicy("lit-html", {
        createHTML: function(a) {
            return a
        }
    }) : void 0;

function DF_MQc(a) {
    return a
}

function DF_MRc() {
    return DF_MQc
}
var DF_MSc = "lit$" + Math.random().toFixed(9).slice(2) + "$",
    DF_MTc = "?" + DF_MSc,
    DF_MUc = "<" + DF_MTc + ">",
    DF_MVc = document;

function DF_MWc(a) {
    return a === null || typeof a != "object" && typeof a != "function" || DF_MRb(a)
}
var DF_MXc = Array.isArray,
    DF_MYc = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    DF_MZc = /--\x3e/g,
    DF_M_c = />/g,
    DF_M0c = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
    DF_M1c = /'/g,
    DF_M2c = /"/g,
    DF_M3c = /^(?:script|style|textarea|title)$/i;

function DF_Mu(a) {
    var b = DF_Mi.apply(1, arguments),
        c = {};
    return c._$litType$ = 1, c.strings = a, c.values = b, c
}
var DF_M4c = Symbol.for ? Symbol.for("lit-noChange") : Symbol("lit-noChange"),
    DF_Mv = Symbol.for ? Symbol.for("lit-nothing") : Symbol("lit-nothing"),
    DF_M5c = new WeakMap,
    DF_M6c = DF_MVc.createTreeWalker(DF_MVc, 129);

function DF_M7c(a, b) {
    if (!DF_MXc(a) || !a.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return DF_MPc !== void 0 ? DF_MPc.createHTML(b) : b
}

function DF_M8c(a, b) {
    var c = a.strings;
    var d = a._$litType$;
    this.parts = [];
    for (var e = a = 0, f = c.length - 1, g = this.parts, h = c.length - 1, k = [], l = d === 2 ? "<svg>" : d === 3 ? "<math>" : "", m, n = DF_MYc, p = 0; p < h; p++) {
        for (var q = c[p], r = -1, t = void 0, v = 0, u; v < q.length;) {
            n.lastIndex = v;
            u = n.exec(q);
            if (u === null) break;
            v = n.lastIndex;
            n === DF_MYc ? u[1] === "!--" ? n = DF_MZc : u[1] !== void 0 ? n = DF_M_c : u[2] !== void 0 ? (DF_M3c.test(u[2]) && (m = new RegExp("</" + u[2], "g")), n = DF_M0c) : u[3] !== void 0 && (n = DF_M0c) : n === DF_M0c ? u[0] === ">" ? (r = void 0, n = (r = m) != null ? r : DF_MYc,
                r = -1) : u[1] === void 0 ? r = -2 : (r = n.lastIndex - u[2].length, t = u[1], n = u[3] === void 0 ? DF_M0c : u[3] === '"' ? DF_M2c : DF_M1c) : n === DF_M2c || n === DF_M1c ? n = DF_M0c : n === DF_MZc || n === DF_M_c ? n = DF_MYc : (n = DF_M0c, m = void 0)
        }
        v = n === DF_M0c && c[p + 1].startsWith("/>") ? " " : "";
        l += n === DF_MYc ? q + DF_MUc : r >= 0 ? (k.push(t), q.slice(0, r) + "$lit$" + q.slice(r)) + DF_MSc + v : q + DF_MSc + (r === -2 ? p : v)
    }
    c = [DF_M7c(c, l + (c[h] || "<?>") + (d === 2 ? "</svg>" : d === 3 ? "</math>" : "")), k];
    c = DF_Md(c);
    m = c.next().value;
    c = c.next().value;
    this.Ga = DF_M8c.createElement(m, b);
    DF_M6c.currentNode =
        this.Ga.content;
    if (d === 2 || d === 3) b = this.Ga.content.firstChild, b.replaceWith.apply(b, DF_Me(b.childNodes));
    for (;
        (b = DF_M6c.nextNode()) !== null && g.length < f;) {
        if (b.nodeType === 1) {
            if (b.hasAttributes())
                for (d = DF_Md(b.getAttributeNames()), m = d.next(); !m.done; m = d.next()) m = m.value, m.endsWith("$lit$") ? (k = c[e++], h = b.getAttribute(m).split(DF_MSc), k = /([.?@])?(.*)/.exec(k), g.push({
                        type: 1,
                        index: a,
                        name: k[2],
                        strings: h,
                        dd: k[1] === "." ? DF_M9c : k[1] === "?" ? DF_M$c : k[1] === "@" ? DF_Mad : DF_Mbd
                    }), b.removeAttribute(m)) : m.startsWith(DF_MSc) &&
                    (g.push({
                        type: 6,
                        index: a
                    }), b.removeAttribute(m));
            if (DF_M3c.test(b.tagName) && (d = b.textContent.split(DF_MSc), m = d.length - 1, m > 0)) {
                b.textContent = DF_MOc ? DF_MOc.emptyScript : "";
                for (h = 0; h < m; h++) b.append(d[h], DF_MVc.createComment("")), DF_M6c.nextNode(), g.push({
                    type: 2,
                    index: ++a
                });
                b.append(d[m], DF_MVc.createComment(""))
            }
        } else if (b.nodeType === 8)
            if (b.data === DF_MTc) g.push({
                type: 2,
                index: a
            });
            else
                for (d = -1;
                    (d = b.data.indexOf(DF_MSc, d + 1)) !== -1;) g.push({
                    type: 7,
                    index: a
                }), d += DF_MSc.length - 1;
        a++
    }
}
DF_M8c.createElement = function(a) {
    var b = DF_MVc.createElement("template");
    b.innerHTML = a;
    return b
};

function DF_Mcd(a, b, c, d) {
    c = c === void 0 ? a : c;
    if (b === DF_M4c) return b;
    var e, f = d !== void 0 ? (e = c.h) == null ? void 0 : e[d] : c.F;
    e = DF_MWc(b) ? void 0 : b._$litDirective$;
    var g;
    if (((g = f) == null ? void 0 : g.constructor) !== e) {
        var h, k;
        (h = f) == null || (k = h._$notifyDirectiveConnectionChanged) == null || k.call(h, !1);
        e === void 0 ? f = void 0 : (f = new e(a), f.Jc(a, c, d));
        if (d !== void 0) {
            var l, m;
            ((m = (l = c).h) != null ? m : l.h = [])[d] = f
        } else c.F = f
    }
    f !== void 0 && (b = DF_Mcd(a, f.Kc(a, b.values), f, d));
    return b
}

function DF_Mdd(a, b) {
    this.h = [];
    this.i = void 0;
    this.wb = a;
    this.g = b
}
DF_Mdd.prototype.G = function(a) {
    var b = this.wb,
        c = b.Ga.content;
    b = b.parts;
    var d, e = ((d = a == null ? void 0 : a.Md) != null ? d : DF_MVc).importNode(c, !0);
    DF_M6c.currentNode = e;
    c = DF_M6c.nextNode();
    for (var f = d = 0, g = b[0]; g !== void 0;) {
        if (d === g.index) {
            var h = void 0;
            g.type === 2 ? h = new DF_Med(c, c.nextSibling, this, a) : g.type === 1 ? h = new g.dd(c, g.name, g.strings, this, a) : g.type === 6 && (h = new DF_Mfd(c, this, a));
            this.h.push(h);
            g = b[++f]
        }
        h = void 0;
        d !== ((h = g) == null ? void 0 : h.index) && (c = DF_M6c.nextNode(), d++)
    }
    DF_M6c.currentNode = DF_MVc;
    return e
};
DF_Mdd.prototype.j = function(a) {
    for (var b = 0, c = DF_Md(this.h), d = c.next(); !d.done; d = c.next()) d = d.value, d !== void 0 && (d.strings !== void 0 ? (d.fa(a, d, b), b += d.strings.length - 2) : d.fa(a[b])), b++
};
DF_Ma.Object.defineProperties(DF_Mdd.prototype, {
    parentNode: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.parentNode
        }
    },
    ea: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.ea
        }
    }
});

function DF_Med(a, b, c, d) {
    this.type = 2;
    this.J = DF_Mv;
    this.i = void 0;
    this.ga = a;
    this.Da = b;
    this.g = c;
    this.options = d;
    var e;
    this.j = (e = d == null ? void 0 : d.isConnected) != null ? e : !0;
    this.h = void 0
}
DF_M = DF_Med.prototype;
DF_M.fa = function(a, b) {
    a = DF_Mcd(this, a, b === void 0 ? this : b);
    DF_MWc(a) ? a === DF_Mv || a == null || a === "" ? (this.J !== DF_Mv && this.bb(), this.J = DF_Mv) : a !== this.J && a !== DF_M4c && this.dc(a) : a._$litType$ !== void 0 ? this.Tc(a) : a.nodeType !== void 0 ? this.yb(a) : DF_MXc(a) || typeof(a == null ? void 0 : a[Symbol.iterator]) === "function" ? this.Sc(a) : this.dc(a)
};
DF_M.Ab = function(a) {
    return DF_MNc(DF_MNc(this.ga).parentNode).insertBefore(a, this.Da)
};
DF_M.yb = function(a) {
    if (this.J !== a) {
        this.bb();
        if (DF_MCc !== DF_MRc) {
            var b, c = (b = this.ga.parentNode) == null ? void 0 : b.nodeName;
            if (c === "STYLE" || c === "SCRIPT") throw Error("Forbidden");
        }
        this.J = this.Ab(a)
    }
};
DF_M.dc = function(a) {
    if (this.J !== DF_Mv && DF_MWc(this.J)) {
        var b = DF_MNc(this.ga).nextSibling;
        this.h === void 0 && (this.h = DF_MCc(b, "data", "property"));
        a = this.h(a);
        b.data = a
    } else b = DF_MVc.createTextNode(""), this.yb(b), this.h === void 0 && (this.h = DF_MCc(b, "data", "property")), a = this.h(a), b.data = a;
    this.J = a
};
DF_M.Tc = function(a) {
    var b = a.values,
        c = a._$litType$;
    a = typeof c === "number" ? this.bc(a) : (c.Ga === void 0 && (c.Ga = DF_M8c.createElement(DF_M7c(c.kd, c.kd[0]), this.options)), c);
    var d;
    ((d = this.J) == null ? void 0 : d.wb) === a ? this.J.j(b) : (d = new DF_Mdd(a, this), a = d.G(this.options), d.j(b), this.yb(a), this.J = d)
};
DF_M.bc = function(a) {
    var b = DF_M5c.get(a.strings);
    b === void 0 && DF_M5c.set(a.strings, b = new DF_M8c(a));
    return b
};
DF_M.Sc = function(a) {
    DF_MXc(this.J) || (this.J = [], this.bb());
    var b = this.J,
        c = 0,
        d;
    a = DF_Md(a);
    for (var e = a.next(); !e.done; e = a.next()) e = e.value, c === b.length ? b.push(d = new DF_Med(this.Ab(DF_MVc.createComment("")), this.Ab(DF_MVc.createComment("")), this, this.options)) : d = b[c], d.fa(e), c++;
    c < b.length && (this.bb(d && DF_MNc(d.Da).nextSibling, c), b.length = c)
};
DF_M.bb = function(a, b) {
    a = a === void 0 ? DF_MNc(this.ga).nextSibling : a;
    var c;
    for ((c = this.G) == null || c.call(this, !1, !0, b); a && a !== this.Da;) b = DF_MNc(a).nextSibling, DF_MNc(a).remove(), a = b
};

function DF_Mgd(a, b) {
    if (a.g === void 0) {
        a.j = b;
        var c;
        (c = a.G) == null || c.call(a, b)
    }
}
DF_Ma.Object.defineProperties(DF_Med.prototype, {
    ea: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a, b;
            return (b = (a = this.g) == null ? void 0 : a.ea) != null ? b : this.j
        }
    },
    parentNode: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a = DF_MNc(this.ga).parentNode,
                b = this.g,
                c;
            b !== void 0 && ((c = a) == null ? void 0 : c.nodeType) === 11 && (a = b.parentNode);
            return a
        }
    }
});

function DF_Mbd(a, b, c, d, e) {
    this.type = 1;
    this.J = DF_Mv;
    this.i = void 0;
    this.element = a;
    this.name = b;
    this.g = d;
    this.options = e;
    c.length > 2 || c[0] !== "" || c[1] !== "" ? (this.J = Array(c.length - 1).fill(new String), this.strings = c) : this.J = DF_Mv;
    this.Ea = void 0
}
DF_Mbd.prototype.fa = function(a, b, c, d) {
    b = b === void 0 ? this : b;
    var e = this.strings,
        f = !1;
    if (e === void 0) {
        if (a = DF_Mcd(this, a, b, 0), f = !DF_MWc(a) || a !== this.J && a !== DF_M4c) this.J = a
    } else {
        var g = a;
        a = e[0];
        var h;
        for (h = 0; h < e.length - 1; h++) {
            var k = DF_Mcd(this, g[c + h], b, h);
            k === DF_M4c && (k = this.J[h]);
            f || (f = !DF_MWc(k) || k !== this.J[h]);
            if (k === DF_Mv) a = DF_Mv;
            else if (a !== DF_Mv) {
                var l = void 0;
                a += ((l = k) != null ? l : "") + e[h + 1]
            }
            this.J[h] = k
        }
    }
    f && !d && this.zb(a)
};
DF_Mbd.prototype.zb = function(a) {
    if (a === DF_Mv) DF_MNc(this.element).removeAttribute(this.name);
    else {
        this.Ea === void 0 && (this.Ea = DF_MCc(this.element, this.name, "attribute"));
        var b;
        a = this.Ea((b = a) != null ? b : "");
        var c;
        DF_MNc(this.element).setAttribute(this.name, (c = a) != null ? c : "")
    }
};
DF_Ma.Object.defineProperties(DF_Mbd.prototype, {
    tagName: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.element.tagName
        }
    },
    ea: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.ea
        }
    }
});

function DF_M9c() {
    DF_Mbd.apply(this, arguments);
    this.type = 3
}
DF_Mf(DF_M9c, DF_Mbd);
DF_M9c.prototype.zb = function(a) {
    this.Ea === void 0 && (this.Ea = DF_MCc(this.element, this.name, "property"));
    a = this.Ea(a);
    this.element[this.name] = a === DF_Mv ? void 0 : a
};

function DF_M$c() {
    DF_Mbd.apply(this, arguments);
    this.type = 4
}
DF_Mf(DF_M$c, DF_Mbd);
DF_M$c.prototype.zb = function(a) {
    DF_MNc(this.element).toggleAttribute(this.name, !!a && a !== DF_Mv)
};

function DF_Mad(a, b, c, d, e) {
    DF_Mbd.call(this, a, b, c, d, e);
    this.type = 5
}
DF_Mf(DF_Mad, DF_Mbd);
DF_Mad.prototype.fa = function(a, b) {
    var c;
    a = (c = DF_Mcd(this, a, b === void 0 ? this : b, 0)) != null ? c : DF_Mv;
    if (a !== DF_M4c) {
        b = this.J;
        c = a === DF_Mv && b !== DF_Mv || a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive;
        var d = a !== DF_Mv && (b === DF_Mv || c);
        c && this.element.removeEventListener(this.name, this, b);
        d && this.element.addEventListener(this.name, this, a);
        this.J = a
    }
};
DF_Mad.prototype.handleEvent = function(a) {
    if (typeof this.J === "function") {
        var b, c;
        this.J.call((c = (b = this.options) == null ? void 0 : b.host) != null ? c : this.element, a)
    } else this.J.handleEvent(a)
};

function DF_Mfd(a, b, c) {
    this.element = a;
    this.type = 6;
    this.i = void 0;
    this.g = b;
    this.options = c
}
DF_Mfd.prototype.fa = function(a) {
    DF_Mcd(this, a)
};
DF_Ma.Object.defineProperties(DF_Mfd.prototype, {
    ea: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.ea
        }
    }
});
var DF_Mhd;
(DF_Mhd = window.litHtmlPolyfillSupport) == null || DF_Mhd(DF_M8c, DF_Med);
var DF_Mid, DF_Mjd;
((DF_Mjd = DF_Mj.litHtmlVersions) != null ? DF_Mjd : DF_Mj.litHtmlVersions = []).push("3.2.0");
DF_Mid = function(a, b, c) {
    var d, e = (d = c == null ? void 0 : c.lb) != null ? d : b;
    d = e._$litPart$;
    if (d === void 0) {
        var f;
        d = (f = c == null ? void 0 : c.lb) != null ? f : null;
        e._$litPart$ = d = new DF_Med(b.insertBefore(DF_MVc.createComment(""), d), d, void 0, c != null ? c : {})
    }
    d.fa(a);
    return d
};

function DF_Mw() {
    var a = DF_Mr.apply(this, arguments) || this;
    a.mb = {
        host: a
    };
    a.la = void 0;
    return a
}
DF_Mf(DF_Mw, DF_Mr);
DF_Mw.D = DF_Mr.D;
DF_Mw.o = DF_Mr.o;
DF_Mw.s = DF_Mr.s;
DF_Mw.h = DF_Mr.h;
DF_Mw.g = DF_Mr.g;
DF_Mw.C = DF_Mr.C;
DF_Mw.i = DF_Mr.i;
DF_Mw.u = DF_Mr.u;
DF_Mw.m = DF_Mr.m;
DF_M = DF_Mw.prototype;
DF_M.ha = function() {
    var a = DF_Mr.prototype.ha.call(this),
        b;
    (b = this.mb).lb != null || (b.lb = a.firstChild);
    return a
};
DF_M.ta = function(a) {
    var b = this.render();
    this.Ha || (this.mb.isConnected = this.isConnected);
    DF_Mr.prototype.ta.call(this, a);
    this.la = DF_Mid(b, this.T, this.mb)
};
DF_M.connectedCallback = function() {
    DF_Mr.prototype.connectedCallback.call(this);
    var a;
    (a = this.la) == null || DF_Mgd(a, !0)
};
DF_M.disconnectedCallback = function() {
    DF_Mr.prototype.disconnectedCallback.call(this);
    var a;
    (a = this.la) == null || DF_Mgd(a, !1)
};
DF_M.render = function() {
    return DF_M4c
};
DF_Mw.v = function() {
    DF_Mkd();
    return DF_Mr.v.call(this)
};
DF_Mw._$litElement$ = !0;
DF_Mw.Jb = !0;
var DF_Mld;
(DF_Mld = window.litElementPolyfillSupport) == null || DF_Mld({
    LitElement: DF_Mw
});

function DF_Mkd() {
    var a, b;
    ((b = (a = window).litElementVersions) != null ? b : a.litElementVersions = []).push("4.1.0");
    DF_Mkd = function() {}
};
var DF_Mmd = DF_Mab(function() {
    var a = new DF_MTa,
        b = document.documentElement;
    b.addEventListener("context-request", a.Rb);
    b.addEventListener("context-provider", a.h);
    return !0
});

function DF_Mx() {
    var a = DF_Mw.call(this) || this;
    a.chatTitle = null;
    a.chatSubtitle = null;
    a.chatTitleIcon = null;
    a.botWritingText = null;
    a.botWritingImage = null;
    a.requestAuthText = null;
    a.placeholderText = null;
    a.languageCode = null;
    a.botActorImage = null;
    a.userActorImage = null;
    a.enableFileUpload = !1;
    a.fileUploadIcon = null;
    a.enableAudioInput = !1;
    a.audioStateImageActive = null;
    a.audioStateImagePassive = null;
    DF_Mmd();
    return a
}
DF_Mf(DF_Mx, DF_Mw);
DF_Mx.D = DF_Mw.D;
DF_Mx.o = DF_Mw.o;
DF_Mx.s = DF_Mw.s;
DF_Mx.h = DF_Mw.h;
DF_Mx.g = DF_Mw.g;
DF_Mx.C = DF_Mw.C;
DF_Mx.i = DF_Mw.i;
DF_Mx.u = DF_Mw.u;
DF_Mx.m = DF_Mw.m;
DF_Mx.v = DF_Mw.v;

function DF_Mnd(a) {
    var b, c;
    return DF_Mh(function(d) {
        return (b = a.R) == null || !b.welcomeIntent || ((c = a.R) == null ? 0 : c.isAuthenticationPending) ? d.return() : DF_Mg(d, a.R.presenter.triggerWelcomeIntent(a.R.welcomeIntent), 0)
    })
}
DF_Mk([DF_Ms({
    l: "chat-title",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "chatTitle", void 0);
DF_Mk([DF_Ms({
    l: "chat-subtitle",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "chatSubtitle", void 0);
DF_Mk([DF_Ms({
    l: "chat-title-icon",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "chatTitleIcon", void 0);
DF_Mk([DF_Ms({
    l: "bot-writing-text",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "botWritingText", void 0);
DF_Mk([DF_Ms({
    l: "bot-writing-image",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "botWritingImage", void 0);
DF_Mk([DF_Ms({
    l: "request-auth-text",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "requestAuthText", void 0);
DF_Mk([DF_Ms({
    l: "placeholder-text",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "placeholderText", void 0);
DF_Mk([DF_M0a({
    context: "df-languagecode",
    subscribe: !0
}), DF_Ms({
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "languageCode", void 0);
DF_Mk([DF_Ms({
    l: "bot-actor-image",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "botActorImage", void 0);
DF_Mk([DF_Ms({
    l: "user-actor-image",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "userActorImage", void 0);
DF_Mk([DF_Ms({
    l: "enable-file-upload",
    type: Boolean
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "enableFileUpload", void 0);
DF_Mk([DF_Ms({
    l: "file-upload-icon",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "fileUploadIcon", void 0);
DF_Mk([DF_Ms({
    l: "enable-audio-input",
    type: Boolean
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "enableAudioInput", void 0);
DF_Mk([DF_Ms({
    l: "audio-state-image-active",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "audioStateImageActive", void 0);
DF_Mk([DF_Ms({
    l: "audio-state-image-passive",
    type: String
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "audioStateImagePassive", void 0);
DF_Mk([DF_M0a({
    context: "df-instance",
    subscribe: !0
}), DF_Ml("design:type", Object)], DF_Mx.prototype, "R", void 0);
var DF_Mod = DF_Mq([".wrapper{font-family:var(--df-messenger-font-family,var(--df-messenger-default-font-family));font-size:var(--df-messenger-font-size,var(--df-messenger-default-font-size));font-weight:400;height:100%;margin:0;padding:0}.chat-bubble-default-wrapper{bottom:20px;position:fixed;right:20px;z-index:999}"]);

function DF_Mpd(a, b) {
    return {
        event: {
            event: a
        },
        languageCode: b || ""
    }
};

function DF_Mqd(a, b) {
    var c = DF_Mi.apply(2, arguments);
    return DF_Mh(function(d) {
        switch (b) {
            case "query":
                return d.return(DF_Mrd.apply(null, [a].concat(DF_Me(c))));
            case "event":
                return d.return(DF_Msd.apply(null, [a].concat(DF_Me(c))));
            case "audio":
                return d.return(DF_Mtd.apply(null, [a].concat(DF_Me(c))));
            case "feedback":
                return d.return(DF_Mud.apply(null, [a].concat(DF_Me(c))));
            case "tool-call-result":
                return d.return(DF_Mvd.apply(null, [a].concat(DF_Me(c))));
            case "tool-call-error":
                return d.return(DF_Mwd.apply(null, [a].concat(DF_Me(c))));
            default:
                console.error("DF-MESSENGER", "Unknown request type: " + b)
        }
        d.g = 0
    })
}

function DF_Mrd(a) {
    var b = DF_Mi.apply(1, arguments),
        c;
    return DF_Mh(function(d) {
        if (b.length !== 1 || !DF_M7a(b[0])) return console.error("DF-MESSENGER", "Bad argument type, 'query' expects string"), d.return();
        c = b[0];
        return DF_Mbb(c.length, a.maxQueryLength) ? d.return(a.presenter.sendQuery(c)) : (console.error("DF-MESSENGER", "Bad argument, payload exceeds " + a.maxQueryLength + " characters"), d.return())
    })
}

function DF_Msd(a) {
    var b = DF_Mi.apply(1, arguments),
        c;
    return DF_Mh(function(d) {
        if (b.length !== 1 || !DF_M7a(b[0])) return console.error("DF-MESSENGER", "Bad argument type, 'event' expects string"), d.return();
        c = b[0];
        return d.return(a.presenter.sendDialogflowRequest(DF_Mpd(c, a.languageCode)))
    })
}

function DF_Mtd(a) {
    var b = DF_Mi.apply(1, arguments),
        c;
    return DF_Mh(function(d) {
        if (b.length !== 1 || !DF_M7a(b[0])) return console.error("DF-MESSENGER", "Bad argument type, 'audio' expects string"), d.return();
        c = b[0];
        return d.return(a.presenter.sendDialogflowRequest({
            audio: {
                audio: c,
                config: {
                    audioEncoding: 1,
                    sampleRateHertz: 48E3,
                    model: "latest_short"
                }
            },
            languageCode: a.languageCode || ""
        }))
    })
}

function DF_Mud(a) {
    var b = DF_Mi.apply(1, arguments),
        c, d;
    return DF_Mh(function(e) {
        if (b.length !== 1 || !DF_M8a(b[0])) return console.error("DF-MESSENGER", "Bad argument type, 'feedback' expects object"), e.return();
        c = b[0];
        return DF_M7a(c.responseId) && DF_M8a(c.answerFeedback) ? (((d = c.answerFeedback.customRating) == null ? void 0 : d.length) || 0) > 1024 ? (console.error("DF-MESSENGER", "Bad argument, payload's customRating exceeds 1024 characters"), e.return()) : e.return(a.presenter.sendFeedback(c)) : (console.error("DF-MESSENGER",
            "Bad argument type, 'responseId' and 'answerFeedback' are required"), e.return())
    })
}

function DF_Mvd(a) {
    var b = DF_Mi.apply(1, arguments),
        c, d, e;
    return DF_Mh(function(f) {
        if (b.length !== 3 || !DF_M7a(b[0]) || !DF_M7a(b[1]) || !DF_M8a(b[2])) return console.error("DF-MESSENGER", "Bad argument type, 'tool-call-result' expects string, string, object"), f.return();
        c = b[0];
        d = b[1];
        e = b[2];
        return f.return(a.presenter.sendClientSideFunctionCallResult({
            tool: c,
            actionName: d,
            output: e
        }))
    })
}

function DF_Mwd(a) {
    var b = DF_Mi.apply(1, arguments),
        c, d, e;
    return DF_Mh(function(f) {
        if (b.length !== 3 || !DF_M7a(b[0]) || !DF_M7a(b[1]) || !DF_M7a(b[2])) return console.error("DF-MESSENGER", "Bad argument type, 'tool-call-error' expects string, string, string"), f.return();
        c = b[0];
        d = b[1];
        e = b[2];
        return f.return(a.presenter.sendClientSideFunctionCallResult({
            tool: c,
            actionName: d,
            error: e
        }))
    })
};
var DF_Mxd = DF_Mq([".auth-screen-wrapper{align-items:center;background:var(--df-messenger-auth-background,var(--df-messenger-auth-background-color,hsla(0,0%,80%,.8))\n    );display:flex;height:100%;justify-content:center;width:100%}.auth-screen-wrapper .auth-button{background:var(--df-messenger-auth-button-background,var(--df-messenger-auth-button-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color)\n        )\n      )\n    );border:var(--df-messenger-auth-button-border,none);border-radius:var(--df-messenger-auth-button-border-radius,8px);color:var(--df-messenger-auth-button-font-color,#fff);font-family:var(--df-messenger-auth-button-font-family,var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-auth-button-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n      )\n    );padding:8px}"]);
var DF_Myd = DF_Mc(["var(--df-messenger-focus-color-contrast, var(--df-messenger-default-focus-color-contrast))"]),
    DF_Mzd = DF_Mc(["var(--df-messenger-focus-color, var(--df-messenger-default-focus-color))"]),
    DF_MAd = DF_Mc(["\n    border-radius: ", ";\n    border: 3px solid\n      ", ";\n    bottom: 0;\n    box-sizing: border-box;\n    content: '';\n    left: 0;\n    outline: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n  "]),
    DF_MBd = DF_Mc(["inherit"]),
    DF_MCd = DF_Mc(["inherit"]),
    DF_MDd = DF_Mc(["\n  .visually-hidden {\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    white-space: nowrap;\n    outline: 0;\n    user-select: none;\n  }\n\n  .focus-outline:focus-visible,\n  .focus-outline-contrast:focus-visible {\n    outline: none;\n    position: relative;\n  }\n\n  .focus-outline:focus-visible::before {\n    ",
        "\n  }\n\n  .focus-outline-contrast:focus-visible::before {\n    ", "\n  }\n\n  .focus-outset:focus-visible::before {\n    margin: -5px;\n  }\n\n  .focus-box:focus-visible::before {\n    border-radius: var(--df-messenger-default-border-radius);\n  }\n\n  button.action-button {\n    background-color: transparent;\n    border: none;\n    border-radius: 999px;\n    transition: background-color 0.3s;\n  }\n\n  button.action-button:not(:disabled) {\n    cursor: pointer;\n  }\n\n  button.action-button:hover:not(:disabled) {\n    background-color: rgba(68, 71, 70, 0.08);\n    transition: background-color 0.3s;\n  }\n\n  .word-wrap {\n    overflow-wrap: break-word;\n    word-break: break-word;\n    word-wrap: break-word;\n  }\n"
    ]);

function DF_MEd(a, b) {
    return DF_Mq(DF_MAd, a, (b === void 0 ? 0 : b) ? DF_Mq(DF_Myd) : DF_Mq(DF_Mzd))
}
var DF_My = DF_Mq(DF_MDd, DF_MEd(DF_Mq(DF_MBd), !1), DF_MEd(DF_Mq(DF_MCd), !0));

function DF_Mz() {
    var a = DF_Mw.apply(this, arguments) || this;
    a.languageCode = "";
    return a
}
DF_Mf(DF_Mz, DF_Mw);
DF_Mz.D = DF_Mw.D;
DF_Mz.o = DF_Mw.o;
DF_Mz.s = DF_Mw.s;
DF_Mz.h = DF_Mw.h;
DF_Mz.g = DF_Mw.g;
DF_Mz.C = DF_Mw.C;
DF_Mz.i = DF_Mw.i;
DF_Mz.u = DF_Mw.u;
DF_Mz.m = DF_Mw.m;
DF_Mz.v = DF_Mw.v;
DF_Mk([DF_Ms({
    type: String
}), DF_Ml("design:type", Object)], DF_Mz.prototype, "languageCode", void 0);
var DF_MFd = DF_Mc(['<div class="auth-screen-wrapper">\n      <button class="auth-button" @click="', '">\n        ', "\n      </button>\n    </div>"]);

function DF_MA() {
    var a = DF_Mz.apply(this, arguments) || this;
    a.requestAuthText = null;
    return a
}
DF_Mf(DF_MA, DF_Mz);
DF_MA.D = DF_Mz.D;
DF_MA.o = DF_Mz.o;
DF_MA.s = DF_Mz.s;
DF_MA.h = DF_Mz.h;
DF_MA.g = DF_Mz.g;
DF_MA.C = DF_Mz.C;
DF_MA.i = DF_Mz.i;
DF_MA.u = DF_Mz.u;
DF_MA.m = DF_Mz.m;
DF_MA.v = DF_Mz.v;
DF_MA.prototype.requestAuthentication = function() {
    var a = this;
    return DF_Mh(function(b) {
        return DF_Mg(b, a.xc.requestAuthentication(), 0)
    })
};
DF_MA.prototype.render = function() {
    var a = DF_M5a(this.requestAuthText, this.languageCode, "requestAccess");
    return DF_Mu(DF_MFd, this.requestAuthentication, a)
};
var DF_MGd = DF_MA;
DF_MGd.j = [DF_Mxd, DF_My];
DF_Mk([DF_M0a({
    context: "df-instance",
    subscribe: !0
}), DF_Ml("design:type", Object)], DF_MGd.prototype, "xc", void 0);
DF_Mk([DF_Ms({
    l: !1,
    type: String
}), DF_Ml("design:type", Object)], DF_MGd.prototype, "requestAuthText", void 0);
DF_MGd = DF_Mk([DF_Mp("df-messenger-auth-screen")], DF_MGd);
var DF_MHd = DF_Mq([".chat-wrapper{border:var(--df-messenger-chat-border,none);border-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius)\n    );display:flex;flex-direction:column;height:100%;position:relative;width:100%;z-index:0}.chat-wrapper df-messenger-auth-screen{inset:0;position:absolute;z-index:100}.chat-wrapper .demo-banner{background:#fef7e0;color:#410e0b;display:var(--df-messenger-demo-banner,none);font-family:var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n    );left:0;opacity:.8;padding:8px;position:absolute;right:0;text-align:center;z-index:1}.message-list-wrapper{display:flex;flex-direction:column;flex-grow:1;min-height:0;overflow:hidden;position:relative}:host([no-titlebar]) .message-list-wrapper{border-top-left-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius)\n    );border-top-right-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius)\n    )}df-messenger-message-list{display:flex;flex-direction:column;flex-grow:1;min-height:0}.error{align-items:center;background:var(--df-messenger-message-error-background,var(--df-messenger-message-error-background-color,rgba(0,0,0,.87))\n    );box-shadow:1px 4px 15px 0 rgba(0,0,0,.24);box-sizing:border-box;color:var(--df-messenger-message-error-font-color,#fff);display:flex;font-family:var(--df-messenger-message-error-font-family,var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-message-error-font-size,12px);justify-content:center;opacity:0;padding:10px;position:absolute;transform:translateY(-100%);width:100%;z-index:1}.error,.error.show{transition:transform .2s,opacity .2s}.error.show{opacity:.8;transform:translateY(0)}.function-call{bottom:0;color:var(--df-messenger-chat-function-call-button-font-color,#fff);display:flex;font-size:var(--df-messenger-chat-function-call-button-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n      )\n    );justify-content:var(--df-messenger-chat-function-call-button-align,center);left:0;opacity:0;padding:var(--df-messenger-chat-function-call-button-container-padding,8px);pointer-events:none;position:absolute;right:0;transition:opacity .3s,visibility 0s linear .3s;visibility:hidden}.function-call.show{opacity:1;transition:opacity .3s,visibility 0s;visibility:visible}.function-call button{background:var(--df-messenger-chat-function-call-button-background,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color)\n      )\n    );border:none;border-radius:var(--df-messenger-chat-function-call-button-border-radius,999px);box-shadow:var(--df-messenger-chat-function-call-button-box-shadow,var(--df-messenger-default-box-shadow)\n    );color:inherit;cursor:pointer;font-size:inherit;padding:8px 16px;pointer-events:auto}"]);
var DF_MId = DF_Mq([':host{--df-messenger-message-internal-border-radius:var(--df-messenger-message-border-radius,var(--df-messenger-default-border-radius)\n    )}:host([minimized]) #message-list{overflow-y:hidden;padding:var(--df-messenger-chat-padding-minimized,var(--df-messenger-chat-padding,10px)\n    )}.message-list-wrapper{background:var(--df-messenger-chat-background,var(--df-messenger-chat-background-color,#fafafa)\n    );border-radius:var(--df-messenger-chat-border-radius,initial);display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative}:host(:not([minimized])) .message-list-wrapper{border-left:var(--df-messenger-chat-messagelist-border,none);border-right:var(--df-messenger-chat-messagelist-border,none)}.message-list-wrapper:after{background:var(--df-messenger-chat-messagelist-scroll-shadow-background,radial-gradient(farthest-side at 50% 100%,rgba(0,0,0,.2),transparent) bottom\n    );bottom:0;content:"";display:block;margin-top:-4px;opacity:0;padding-top:4px;pointer-events:none;position:absolute;transition:opacity .3s ease;width:100%}.message-list-wrapper.show-shadow:after{opacity:1;transition:opacity .3s ease}#message-list{overflow:var(--df-messenger-chat-overflow,hidden scroll);padding:var(--df-messenger-chat-padding,10px)}#message-list,.content{display:flex;flex-direction:column;flex-grow:1}.content{margin-left:auto;margin-right:auto;max-width:var(--df-messenger-chat-max-width,none);width:100%}.entry:first-child{margin-top:auto!important}.entry:not(:first-child){margin-top:var(--df-messenger-message-spacing,10px)}.entry{animation:present-yourself .3s ease .1s forwards;border-radius:var(--df-messenger-message-group-border-radius,0);display:flex;gap:var(--df-messenger-message-actor-spacing,16px);opacity:0;padding:var(--df-messenger-message-group-padding,0)}.entry.bot{background:var(--df-messenger-message-bot-group-background,var(--df-messenger-message-bot-group-background-color,transparent)\n    );flex-direction:var(--df-messenger-message-bot-actor-order,row)}.entry.user{background:var(--df-messenger-message-user-group-background,var(--df-messenger-message-user-group-background-color,transparent)\n    );flex-direction:var(--df-messenger-message-user-actor-order,row-reverse)}.actor-container{display:flex;flex-direction:var(--df-messenger-message-actor-direction,column);justify-content:var(--df-messenger-message-actor-align,flex-start)}.actor{border-radius:var(--df-messenger-message-actor-border-radius,999px);height:var(--df-messenger-message-actor-image-size,24px);padding:var(--df-messenger-message-actor-padding,8px);width:var(--df-messenger-message-actor-image-size,24px);z-index:1}.actor img{height:inherit;width:inherit}.entry.bot .actor{background:var(--df-messenger-message-bot-actor-background,#fff);border:var(--df-messenger-message-bot-actor-border,none);margin:var(--df-messenger-message-bot-actor-offset,0)}.entry.user .actor{background:var(--df-messenger-message-user-actor-background,#fff);border:var(--df-messenger-message-user-actor-border,none);margin:var(--df-messenger-message-user-actor-offset,0)}df-messenger-utterance{flex-grow:1;min-width:0}.scroll-to-bottom,.scroll-to-bottom-legacy{bottom:0;color:var(--df-messenger-chat-scroll-button-font-color,#fff);font-size:var(--df-messenger-chat-scroll-button-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n      )\n    );left:0;opacity:0;padding:var(--df-messenger-chat-scroll-button-container-padding,8px);pointer-events:none;position:absolute;right:0;transition:opacity .3s,visibility 0s linear .3s;visibility:hidden}.scroll-to-bottom{display:var(--df-messenger-chat-scroll-button-enabled-display,none);justify-content:var(--df-messenger-chat-scroll-button-align,center)}.scroll-to-bottom-legacy{display:var(--df-messenger-chat-scroll-button-display,none)}.scroll-to-bottom-legacy.show,.scroll-to-bottom.show{opacity:1;transition:opacity .3s,visibility 0s;visibility:visible}.scroll-to-bottom-button{align-items:center;background:var(--df-messenger-chat-scroll-button-background,var(--df-messenger-chat-scroll-button-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color)\n        )\n      )\n    );border:var(--df-messenger-chat-scroll-button-border,none);border-radius:var(--df-messenger-chat-scroll-button-border-radius,999px);box-shadow:var(--df-messenger-chat-scroll-button-box-shadow,var(--df-messenger-default-box-shadow)\n    );color:inherit;cursor:pointer;display:flex;font-size:inherit;justify-content:center;padding:var(--df-messenger-chat-scroll-button-padding,8px 16px);pointer-events:auto}.scroll-to-bottom-legacy .scroll-to-bottom-button{margin:0 auto}.scroll-to-bottom-button .icon{color:inherit;font-size:1.5em}.scroll-to-bottom-button .text{display:var(--df-messenger-chat-scroll-button-text-display,inline);margin-left:8px}.typing-message{display:flex;flex-direction:column;flex-grow:1;min-width:0}.message{align-self:var(--df-messenger-message-bot-writing-align,var(--df-messenger-message-bot-align,flex-start)\n    );background:var(--df-messenger-message-bot-writing-background,var(--df-messenger-message-bot-writing-background-color,var(--df-messenger-message-bot-background,var(--df-messenger-message-bot-background-color,#ecf3fe)\n        )\n      )\n    );border:var(--df-messenger-message-bot-writing-border,var(--df-messenger-message-bot-border,var(--df-messenger-message-border,none)\n      )\n    );border-bottom-left-radius:var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-border-bottom-left-radius,var(--df-messenger-message-internal-border-radius)\n      )\n    );border-bottom-right-radius:var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-border-bottom-right-radius,var(--df-messenger-message-internal-border-radius)\n      )\n    );border-top-left-radius:var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-border-top-left-radius,var(--df-messenger-message-internal-border-radius)\n      )\n    );border-top-right-radius:var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-border-top-right-radius,var(--df-messenger-message-internal-border-radius)\n      )\n    );color:var(--df-messenger-message-bot-writing-font-color,var(--df-messenger-message-bot-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n        )\n      )\n    );font-family:var(--df-messenger-message-font-family,var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-message-bot-writing-font-size,var(--df-messenger-message-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n        )\n      )\n    );font-style:var(--df-messenger-message-bot-writing-font-style,normal);font-weight:var(--df-messenger-message-bot-writing-font-weight,var(--df-messenger-message-bot-font-weight,var(--df-messenger-message-font-weight,normal)\n      )\n    );line-height:var(--df-messenger-message-line-height,normal);margin-left:var(--df-messenger-message-bot-margin-left,0);margin-right:var(--df-messenger-message-bot-margin-right,75px);margin-top:var(--df-messenger-message-bot-writing-spacing,var(--df-messenger-message-spacing,10px)\n    );padding:var(--df-messenger-message-bot-writing-padding,var(--df-messenger-message-padding,12px)\n    )}.message img{height:var(--df-messenger-message-bot-writing-image-height,24px);width:var(--df-messenger-message-bot-writing-image-width,24px)}@keyframes present-yourself{to{opacity:1}}']);
var DF_MJd = DF_Mq([':host{--df-messenger-internal-message-feedback-icon-fill:var(--df-messenger-message-feedback-icon-font-color,var(--df-messenger-message-feedback-font-color,var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color)\n        )\n      )\n    )}.feedback{color:var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n    );display:flex;flex-direction:column;font-family:var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n    )}.feedback .thumbs{align-self:var(--df-messenger-message-bot-align,flex-start);margin-left:var(--df-messenger-message-bot-margin-left,0);margin-right:var(--df-messenger-message-bot-margin-right,75px)}.thumb{fill:var(--df-messenger-internal-message-feedback-icon-fill);background:var(--df-messenger-message-feedback-icon-background,none);border:var(--df-messenger-message-feedback-icon-border,none);border-radius:var(--df-messenger-message-feedback-icon-border-radius,0);padding:var(--df-messenger-message-feedback-icon-padding,0)}.thumb:hover{background:var(--df-messenger-message-feedback-icon-background-hover,var(--df-messenger-message-feedback-icon-background,none)\n    )}.thumb.active{fill:var(--df-messenger-message-feedback-icon-font-color-active,var(--df-messenger-internal-message-feedback-icon-fill)\n    )}.thumbs-up{margin-right:var(--df-messenger-message-feedback-icon-distance,8px)}.feedback-box{background:var(--df-messenger-message-rich-feedback-background,none);border:var(--df-messenger-message-rich-feedback-border,none);border-radius:var(--df-messenger-message-rich-feedback-border-radius,0);display:flex;flex-direction:column;gap:var(--df-messenger-message-rich-feedback-spacing,10px);margin-left:var(--df-messenger-rich-feedback-offset-left,0);margin-top:10px;padding:var(--df-messenger-message-rich-feedback-padding,0);position:relative}.feedback-box .separator{background:var(--df-messenger-chat-background,var(--df-messenger-chat-background-color,#fafafa)\n    );display:var(--df-messenger-message-rich-feedback-block-separator-display,none);height:calc(var(--df-messenger-message-stack-spacing, var(--df-messenger-message-spacing, 10px)) + var(--df-messenger-message-group-border-radius)*2);margin:calc(0px - var(--df-messenger-message-rich-feedback-spacing, 10px)) var(--df-messenger-message-rich-feedback-block-separator-padding-offset,0)}.feedback-box .separator:before{border-bottom-left-radius:var(--df-messenger-message-group-border-radius);border-bottom-right-radius:var(--df-messenger-message-group-border-radius)}.feedback-box .separator:after,.feedback-box .separator:before{background:var(--df-messenger-message-bot-group-background,var(--df-messenger-message-bot-group-background-color,transparent)\n    );content:"";display:block;height:var(--df-messenger-message-group-border-radius)}.feedback-box .separator:after{border-top-left-radius:var(--df-messenger-message-group-border-radius);border-top-right-radius:var(--df-messenger-message-group-border-radius);margin-top:10px}.feedback-title-row{align-items:center;display:flex;justify-content:space-between}.feedback-close{fill:var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color)\n    );background-color:transparent;border:none;margin:-12px -10px -12px -12px;padding:12px}.feedback-title{font-weight:700}.feedback-subtitle{font-weight:400;margin-left:10px}.feedback-reason-row{display:flex;flex-direction:var(--df-messenger-message-rich-feedback-chips-flex-direction,row);flex-wrap:wrap;gap:var(--df-messenger-message-rich-feedback-chips-spacing,10px);row-gap:var(--df-messenger-message-rich-feedback-chips-spacing,10px)}.feedback-reason-chip,.feedback-submit{border:var(--df-messenger-default-border);border-radius:var(--df-messenger-default-border-radius);margin:0;padding:8px 16px}.feedback-reason-chip{align-self:flex-start;background:var(--df-messenger-message-rich-feedback-chips-background,none);color:var(--df-messenger-message-rich-feedback-chips-font-color,inherit)}.feedback-reason-chip:hover,.feedback-submit:not(:disabled):hover{background:var(--df-messenger-message-rich-feedback-chips-background-hover,rgba(68,71,70,.08))}.feedback-reason-chip.active{background:var(--df-messenger-message-rich-feedback-chips-background-active,#e8f0fe);color:var(--df-messenger-message-rich-feedback-chips-font-color-active,#174ea6)}.feedback-submit{background:var(--df-messenger-message-rich-feedback-submit-background,none);color:var(--df-messenger-message-rich-feedback-submit-font-color,inherit)}.feedback-submit:disabled{opacity:.5}.textarea-row{display:flex;position:relative}.textarea-row textarea{background:var(--df-messenger-message-rich-feedback-input-background,#fff);border:var(--df-messenger-default-border);border-radius:var(--df-messenger-default-border-radius);box-sizing:border-box;color:var(--df-messenger-message-rich-feedback-input-font-color,inherit);flex-grow:1;font-family:inherit;font-size:inherit;padding:8px 16px;resize:none}.textarea-row textarea:focus{outline:0}.privacy-notice-row{color:var(--df-messenger-message-rich-feedback-notice-font-color,var(--df-messenger-default-secondary-font-color)\n    );font-size:12px;padding:0 17px}.feedback-submit-row{display:flex;flex-direction:column}.feedback-submit{align-self:var(--df-messenger-message-rich-feedback-submit-align,flex-end)}.thank-you{animation:present-yourself .3s ease .1s forwards;color:var(--df-messenger-message-rich-feedback-notice-font-color,var(--df-messenger-default-secondary-font-color)\n    );font-size:12px;margin-top:10px;opacity:0}@keyframes present-yourself{to{opacity:1}}']);

function DF_MKd(a) {
    return a > 0 ? 1 : a < 0 ? 2 : 0
}
var DF_MLd = [1, 2, 3];
var DF_MMd = DF_Mc(['\n  <svg\n    width="36"\n    height="36"\n    viewBox="0 0 36 36"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg">\n    <mask\n      id="mask0"\n      mask-type="alpha"\n      maskUnits="userSpaceOnUse"\n      x="3"\n      y="3"\n      width="30"\n      height="30">\n      <path\n        fill-rule="evenodd"\n        clip-rule="evenodd"\n        d="M24.0001 19.5C24.8251 19.5 25.5001 18.825 25.5001 18V4.5C25.5001 3.675 24.8251 3 24.0001 3H4.50006C3.67506 3 3.00006 3.675 3.00006 4.5V25.5L9.00006 19.5H24.0001ZM22.5001 5.99999V16.5H9.00013H6.00013V5.99999H22.5001ZM28.5 9.00001H31.5C32.325 9.00001 33 9.67501 33 10.5V33L27 27H10.5C9.675 27 9 26.325 9 25.5V22.5H28.5V9.00001Z" />\n    </mask>\n    <g mask="url(#mask0)">\n      <rect width="36" height="36" />\n    </g>\n  </svg>\n']),
    DF_MNd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path\n    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />\n  <path d="M0 0h24v24H0z" fill="none" />\n</svg>']),
    DF_MOd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path\n    d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7H2v13h16c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM7 18H4V9h3v9zm14-7l-3 7H9V8l4.34-4.34L12 9h9v2z" />\n</svg>']),
    DF_MPd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path\n    d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7v13h11c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM5 7H1v13h4V7z" />\n</svg>']),
    DF_MQd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path\n    d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7h5V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zM17 6h3v9h-3V6zM3 13l3-7h9v10l-4.34 4.34L12 15H3v-2z" />\n</svg>']),
    DF_MRd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path\n    d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zm16 0h4V4h-4v13z" />\n</svg>']),
    DF_MSd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0V0z" fill="none" />\n  <path\n    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />\n</svg>']),
    DF_MTd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  enable-background="new 0 0 24 24">\n  <g>\n    <rect fill="none" height="24" width="24" />\n    <rect fill="none" height="24" width="24" />\n    <rect fill="none" height="24" width="24" />\n  </g>\n  <g>\n    <g />\n    <path\n      d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M4,9h10.5v3.5H4V9z M4,14.5 h10.5V18L4,18V14.5z M20,18l-3.5,0V9H20V18z" />\n  </g>\n</svg>']),
    DF_MUd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <path d="M0 0h24v24H0z" fill="none" />\n  <path\n    d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />\n</svg>']),
    DF_MVd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 -960 960 960">\n  <path d="M320-200v-560l440 280-440 280Z" />\n</svg>']),
    DF_MWd = DF_Mc(['<svg\n  viewBox="0 0 30 20"\n  id="brandmark"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg">\n  <path\n    d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"\n    fill="#FF0000"></path>\n  <path\n    d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"\n    fill="white"></path>\n</svg>']),
    DF_MXd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 -960 960 960">\n  <path\n    d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />\n</svg>']),
    DF_MYd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  enable-background="new 0 0 24 24"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24">\n  <g>\n    <rect fill="none" height="24" width="24" />\n    <rect fill="none" height="24" width="24" />\n    <rect fill="none" height="24" width="24" />\n  </g>\n  <g>\n    <g />\n    <g>\n      <path\n        d="M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z" />\n      <path\n        d="M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z" />\n    </g>\n  </g>\n</svg>']),
    DF_MZd = DF_Mc(['<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 -960 960 960">\n  <path\n    d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />\n</svg>']),
    DF_M_d = DF_Mu(DF_MMd),
    DF_M0d = DF_Mu(DF_MNd),
    DF_M1d = DF_Mu(DF_MOd),
    DF_M2d = DF_Mu(DF_MPd),
    DF_M3d = DF_Mu(DF_MQd),
    DF_M4d = DF_Mu(DF_MRd),
    DF_M5d = DF_Mu(DF_MSd),
    DF_M6d = DF_Mu(DF_MTd),
    DF_M7d = DF_Mu(DF_MUd),
    DF_M8d = DF_Mu(DF_MVd),
    DF_M9d = DF_Mu(DF_MWd),
    DF_M$d = DF_Mu(DF_MXd),
    DF_Mae = DF_Mu(DF_MYd),
    DF_Mbe = DF_Mu(DF_MZd);
var DF_Mce = DF_Mc(["var(--df-messenger-default-border-radius)"]),
    DF_Mde = DF_Mc(["\n  .show-focus::after {\n    ", "\n  }\n"]),
    DF_Mee = DF_Mc([' <div class="feedback">\n      <div class="thumbs">\n        ', "", "\n      </div>\n      ", " ", "\n    </div>"]),
    DF_Mfe = DF_Mc([' <button\n      class="thumb focus-outline thumbs-up ', '"\n      aria-label="', '"\n      @click=', ">\n      ", "\n    </button>"]),
    DF_Mge = DF_Mc([' <button\n      class="thumb focus-outline thumbs-down ', '"\n      aria-label="', '"\n      @click=',
        ">\n      ", "\n    </button>"
    ]),
    DF_Mhe = DF_Mc([' <div class="feedback-box">\n      <div class="separator"></div>\n      ', "\n    </div>"]),
    DF_Mie = DF_Mc([' <button\n              class="feedback-reason-chip focus-outline\n                    ', '"\n              @click=', ">\n              ", "\n            </button>"]),
    DF_Mje = DF_Mc(' <div class="feedback-box">\n      <div class="separator"></div>\n      <div class="feedback-title-row">\n        <div>\n          <span class="feedback-title">;</span>\n          <span class="feedback-subtitle">(;)</span>\n        </div>\n        <button\n          class="feedback-close focus-outline action-button"\n          @click=;\n          aria-label=";">\n          ;\n        </button>\n      </div>\n      <div class="feedback-reason-row">\n        ;\n      </div>\n      <div class="textarea-row ;">\n        <textarea\n          rows="1"\n          placeholder=";"\n          @input=;\n          @mousedown=;\n          @focusin=;\n          @focusout=;\n          aria-label=";"></textarea>\n      </div>\n      <div class="privacy-notice-row"> ; </div>\n      <div class="feedback-submit-row">\n        <button\n          class="feedback-submit focus-outline"\n          @click=;\n          ?disabled=;\n          aria-label=";">\n          ;\n        </button>\n      </div>\n    </div>'.split(";")),
    DF_Mke = DF_Mc(['<div class="thank-you">', "</div>"]),
    DF_Mle = DF_Mq(DF_Mde, DF_MEd(DF_Mq(DF_Mce), !1));

function DF_MB() {
    var a = DF_Mz.apply(this, arguments) || this;
    a.responseId = null;
    a.showNegativeFeedback = !1;
    a.F = !1;
    a.Y = 0;
    a.qb = !1;
    a.ob = !1;
    a.pa = 0;
    a.pb = !1;
    return a
}
DF_Mf(DF_MB, DF_Mz);
DF_MB.D = DF_Mz.D;
DF_MB.o = DF_Mz.o;
DF_MB.s = DF_Mz.s;
DF_MB.h = DF_Mz.h;
DF_MB.g = DF_Mz.g;
DF_MB.C = DF_Mz.C;
DF_MB.i = DF_Mz.i;
DF_MB.u = DF_Mz.u;
DF_MB.m = DF_Mz.m;
DF_MB.v = DF_Mz.v;
DF_M = DF_MB.prototype;
DF_M.ia = function(a) {
    DF_Mz.prototype.ia.call(this, a);
    var b, c;
    this.Y = (c = (b = this.Ba) == null ? void 0 : b.presenter.getUtteranceReaction(this.responseId)) != null ? c : 0
};
DF_M.ta = function(a) {
    DF_Mz.prototype.ta.call(this, a);
    this.showNegativeFeedback && this.showNegativeFeedback !== this.F && (a = this.T.querySelector(".feedback-box")) && DF_M6a(a);
    this.F = this.showNegativeFeedback
};
DF_M.render = function() {
    var a = DF_Mo(this.languageCode, "positiveFeedbackAriaLabel");
    var b = this.Y > 0;
    a = DF_Mu(DF_Mfe, b ? "active" : "", a, this.Id.bind(this, b), b ? DF_M2d : DF_M1d);
    b = DF_Mo(this.languageCode, "negativeFeedbackAriaLabel");
    var c = this.Y < 0;
    b = DF_Mu(DF_Mge, c ? "active" : "", b, this.Hd.bind(this, c), c ? DF_M4d : DF_M3d);
    c = DF_Mme(this);
    if (!this.pb || this.showNegativeFeedback) var d = null;
    else d = DF_Mo(this.languageCode, "feedbackThankYouText"), d = DF_Mu(DF_Mke, d);
    return DF_Mu(DF_Mee, a, b, c, d)
};
DF_M.Id = function(a) {
    this.Y = a ? 0 : 1;
    this.showNegativeFeedback = !1;
    var b;
    (b = this.Ba) == null || b.presenter.storeUtteranceReaction(this.responseId, this.Y);
    var c;
    (c = this.Ba) == null || c.presenter.sendFeedback({
        responseId: this.responseId,
        answerFeedback: {
            rating: DF_MKd(this.Y)
        }
    })
};
DF_M.Hd = function(a) {
    this.Y = a ? 0 : -1;
    this.showNegativeFeedback = this.Y < 0;
    var b;
    (b = this.Ba) == null || b.presenter.storeUtteranceReaction(this.responseId, this.Y);
    var c;
    (c = this.Ba) == null || c.presenter.sendFeedback({
        responseId: this.responseId,
        answerFeedback: {
            rating: DF_MKd(this.Y)
        }
    })
};

function DF_Mne(a) {
    var b = document.createElement("df-external-custom-feedback");
    b.addEventListener("df-custom-submit-feedback-clicked", function(c) {
        c = c.detail;
        console.debug("DF-MESSENGER", "Event df-custom-submit-feedback-clicked received", c);
        DF_Moe(a, {
            responseId: a.responseId,
            answerFeedback: {
                rating: DF_MKd(a.Y),
                customRating: c
            }
        })
    });
    console.debug("DF-MESSENGER", "Registered listener for event df-custom-submit-feedback-clicked");
    return DF_Mu(DF_Mhe, b)
}

function DF_Mme(a) {
    if (!a.showNegativeFeedback) return null;
    if (customElements.get("df-external-custom-feedback")) return DF_Mne(a);
    var b = DF_Mo(a.languageCode, "feedbackPlaceholder"),
        c = DF_Mo(a.languageCode, "feedbackInputAriaLabel"),
        d = DF_Mo(a.languageCode, "feedbackWhyRatingText"),
        e = DF_Mo(a.languageCode, "feedbackOptionalText"),
        f = DF_Mo(a.languageCode, "feedbackCloseAriaLabel"),
        g = DF_Mo(a.languageCode, "feedbackPrivacyNoticeText"),
        h = DF_Mo(a.languageCode, "feedbackSubmit"),
        k = DF_Mo(a.languageCode, "feedbackSubmitAriaLabel");
    return DF_Mu(DF_Mje, d, e, a.vc, f, DF_M0d, DF_MLd.map(function(l) {
        return DF_Mu(DF_Mie, a.pa === l ? "active" : "", a.md.bind(a, l), DF_Mpe(a, l))
    }), a.ob ? "show-focus" : "", b, a.Ac, function() {
        return a.qb = !0
    }, a.yc, a.zc, c, g, a.Ed, a.pa === 0 && !a.M, k, h)
}

function DF_Mpe(a, b) {
    switch (b) {
        case 1:
            return DF_Mo(a.languageCode, "feedbackChipIrrelevant");
        case 2:
            return DF_Mo(a.languageCode, "feedbackChipIncorrect");
        case 3:
            return DF_Mo(a.languageCode, "feedbackChipUnsafe");
        default:
            return null
    }
}
DF_M.md = function(a) {
    this.pa = this.pa === a ? 0 : a
};
DF_M.Ac = function() {
    this.g.style.height = "";
    this.g.style.height = this.g.scrollHeight + 2 + "px";
    DF_MVa(this)
};
DF_M.yc = function() {
    this.ob = this.qb ? !1 : !0;
    this.qb = !1
};
DF_M.zc = function() {
    this.ob = !1
};
DF_M.Ed = function() {
    var a;
    DF_Moe(this, {
        responseId: this.responseId,
        answerFeedback: {
            rating: DF_MKd(this.Y),
            ratingReason: Object.assign({}, this.pa === 0 ? {} : {
                reasonLabels: [DF_Mpe(this, this.pa)]
            }, {
                feedback: (a = this.M) != null ? a : ""
            })
        }
    })
};

function DF_Moe(a, b) {
    var c;
    (c = a.Ba) == null || c.presenter.sendFeedback(b);
    a.vc();
    a.pb = !0;
    setTimeout(function() {
        a.pb = !1
    }, 2400)
}
DF_M.vc = function() {
    this.pa = 0;
    this.showNegativeFeedback = !1
};
DF_Ma.Object.defineProperties(DF_MB.prototype, {
    g: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.T.querySelector("textarea")
        }
    },
    M: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a;
            return (a = this.g) == null ? void 0 : a.value
        }
    }
});
var DF_Mqe = DF_MB;
DF_Mqe.j = [DF_MJd, DF_My, DF_Mle];
DF_Mk([DF_Ms({
    type: String
}), DF_Ml("design:type", Object)], DF_Mqe.prototype, "responseId", void 0);
DF_Mk([DF_Ms({
    type: Boolean
}), DF_Ml("design:type", Object)], DF_Mqe.prototype, "showNegativeFeedback", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mqe.prototype, "Y", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mqe.prototype, "qb", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mqe.prototype, "ob", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Number)], DF_Mqe.prototype, "pa", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_Mqe.prototype, "pb", void 0);
DF_Mk([DF_M0a({
    context: "df-instance",
    subscribe: !0
}), DF_Ml("design:type", Object)], DF_Mqe.prototype, "Ba", void 0);
DF_Mqe = DF_Mk([DF_Mp("df-messenger-feedback")], DF_Mqe);
var DF_Mre = DF_Mq([".message-stack{display:flex;flex-direction:column}.message-stack:not(:first-child){margin-top:var(--df-messenger-message-stack-spacing,var(--df-messenger-message-spacing,10px)\n    )}.message-stack.none{margin-top:0}df-card,df-chips,df-citations,df-custom-template,df-html-message,df-markdown-message,df-text-message{max-width:100%}df-chips,df-citations{align-self:var(--df-messenger-message-bot-align,flex-start)}df-card{align-self:var(--df-messenger-message-card-align,var(--df-messenger-message-bot-align,flex-start)\n    )}df-custom-template{align-self:stretch}:host(:not(.minimized)) df-html-message,:host(:not(.minimized)) df-markdown-message,:host(:not(.minimized)) df-text-message[isbot]{margin-left:var(--df-messenger-message-bot-margin-left,0);margin-right:var(--df-messenger-message-bot-margin-right,75px);max-width:calc(100% - var(--df-messenger-message-bot-margin-left, 0px) - var(--df-messenger-message-bot-margin-right, 75px))}df-html-message,df-markdown-message,df-text-message[isbot]{align-self:var(--df-messenger-message-rich-text-align,var(--df-messenger-message-bot-align,flex-start)\n    )}:host(:not(.minimized)) df-text-message:not([isbot]){margin-left:var(--df-messenger-message-user-margin-left,75px);margin-right:var(--df-messenger-message-user-margin-right,0);max-width:calc(100% - var(--df-messenger-message-user-margin-left, 75px) - var(--df-messenger-message-user-margin-right, 0px))}df-text-message:not([isbot]){align-self:var(--df-messenger-message-user-align,flex-end)}.feedback{margin-top:var(--df-messenger-message-feedback-spacing,var(--df-messenger-message-spacing,10px)\n    )}:host(.minimized) .feedback{display:none}"]);

function DF_MC(a, b, c) {
    var d = DF_Mz.call(this) || this;
    d.type = c;
    d.uniqueId = c + "-" + a + "-" + b;
    return d
}
DF_Mf(DF_MC, DF_Mz);
DF_MC.D = DF_Mz.D;
DF_MC.o = DF_Mz.o;
DF_MC.s = DF_Mz.s;
DF_MC.h = DF_Mz.h;
DF_MC.g = DF_Mz.g;
DF_MC.C = DF_Mz.C;
DF_MC.i = DF_Mz.i;
DF_MC.u = DF_Mz.u;
DF_MC.m = DF_Mz.m;
DF_MC.v = DF_Mz.v;
DF_MC.prototype.isVisible = function() {
    return !0
};
DF_MC.prototype.connectedCallback = function() {
    DF_Mz.prototype.connectedCallback.call(this);
    this.cssWidth && (this.style.display = "block", this.style.width = this.cssWidth)
};
var DF_Mse = DF_Mc([" ", "\n    ", ""]),
    DF_Mte = DF_Mc([' <div class="feedback">\n      <df-messenger-feedback\n        .responseId=', "\n        .languageCode=", "></df-messenger-feedback>\n    </div>"]),
    DF_Mue = DF_Mc([' <div class="message-stack ', '"> ', " </div>"]);

function DF_Mve(a) {
    return a.type === "chips" || a.type === "match_citations" || a.type === "files"
}

function DF_MD() {
    return DF_Mz.apply(this, arguments) || this
}
DF_Mf(DF_MD, DF_Mz);
DF_MD.D = DF_Mz.D;
DF_MD.o = DF_Mz.o;
DF_MD.s = DF_Mz.s;
DF_MD.h = DF_Mz.h;
DF_MD.g = DF_Mz.g;
DF_MD.C = DF_Mz.C;
DF_MD.i = DF_Mz.i;
DF_MD.u = DF_Mz.u;
DF_MD.m = DF_Mz.m;
DF_MD.v = DF_Mz.v;
DF_MD.prototype.render = function() {
    var a = DF_Mwe(this.utterance.elements),
        b, c, d;
    var e = ((b = this.utterance) == null ? 0 : b.isBot) && ((c = this.utterance) == null ? 0 : c.allowFeedback) && ((d = this.Bc) == null ? 0 : d.reactionsAllowed()) ? DF_Mu(DF_Mte, this.utterance.responseId, this.languageCode) : null;
    return DF_Mu(DF_Mse, a, e)
};

function DF_Mwe(a) {
    function b(c) {
        return c < a.length - 1 && !DF_Mve(a[c + 1])
    }
    return a.map(function(c, d) {
        var e = DF_Mve(a[d]) ? "none" : d > 0 && !DF_Mve(a[d - 1]) || b(d) ? d > 0 && !DF_Mve(a[d - 1]) ? b(d) ? "mid" : "last" : b(d) ? d > 0 && !DF_Mve(a[d - 1]) ? "mid" : "first" : "unknown" : "single";
        c.classList.add(e);
        d === 0 && c.classList.add("first-child");
        d === a.length - 1 && c.classList.add("last-child");
        return DF_Mu(DF_Mue, e, c)
    })
}
var DF_Mxe = DF_MD;
DF_Mxe.j = [DF_Mre, DF_My];
DF_Mk([DF_Ms({
    type: Object,
    l: !1
}), DF_Ml("design:type", Object)], DF_Mxe.prototype, "utterance", void 0);
DF_Mk([DF_M0a({
    context: "df-instance",
    subscribe: !0
}), DF_Ml("design:type", Object)], DF_Mxe.prototype, "Bc", void 0);
DF_Mxe = DF_Mk([DF_Mp("df-messenger-utterance")], DF_Mxe);
var DF_Mye = {
        type: "info",
        title: "",
        subtitle: "",
        image: {
            src: {
                rawUrl: ""
            }
        },
        actionLink: ""
    },
    DF_Mze = {
        type: "description",
        title: "",
        text: []
    },
    DF_MAe = {
        type: "image",
        rawUrl: "",
        accessibilityText: ""
    },
    DF_MBe = {
        type: "list",
        title: "",
        subtitle: "",
        image: {
            src: {
                rawUrl: ""
            }
        },
        event: {
            event: ""
        }
    },
    DF_MCe = {
        type: "button",
        icon: {
            type: "",
            color: ""
        },
        image: {
            src: {
                rawUrl: ""
            }
        },
        text: "",
        link: ""
    },
    DF_MDe = {
        type: "accordion",
        title: "",
        subtitle: "",
        image: {
            src: {
                rawUrl: ""
            }
        },
        text: ""
    },
    DF_MEe = {
        type: "chips",
        options: [{
            text: "Suggestion",
            link: ""
        }, {
            text: "Suggestion with icon",
            image: {
                src: {
                    rawUrl: "https://d30y9cdsu7xlg0.cloudfront.net/png/29715-200.png"
                }
            },
            link: ""
        }, {
            text: "Suggestion with link",
            link: "https://google.com"
        }, {
            text: "Suggestion with link & icon",
            image: {
                src: {
                    rawUrl: "https://d30y9cdsu7xlg0.cloudfront.net/png/29715-200.png"
                }
            },
            link: "https://google.com"
        }]
    },
    DF_MFe = {
        type: "html",
        html: ""
    },
    DF_MGe = {
        type: "match_citations",
        citations: [{
            title: "Citation title",
            subtitle: "Citation subtitle",
            actionLink: ""
        }]
    },
    DF_MHe = {
        type: "custom_template",
        name: "",
        payload: {}
    },
    DF_MIe = {
        type: "video",
        source: {
            type: "link",
            anchor: {
                href: ""
            }
        }
    },
    DF_MJe = {
        type: "files",
        files: [{
            name: "",
            image: {
                rawUrl: ""
            },
            anchor: {
                href: ""
            }
        }]
    };
var DF_MKe = {
    BUILD_EMBED_LABEL: "dialogflow_infobot_20240828_0908_RC00",
    BUILD_BASELINE_CHANGELIST: "668034418",
    BUILD_CHANGELIST: "668034418"
};

function DF_MLe() {}
DF_MLe.prototype.payloadForTesting = function(a) {
    switch (a) {
        case "info":
            return Object.assign({}, DF_Mye);
        case "description":
            return Object.assign({}, DF_Mze);
        case "image":
            return Object.assign({}, DF_MAe);
        case "list":
            return Object.assign({}, DF_MBe);
        case "button":
            return Object.assign({}, DF_MCe);
        case "accordion":
            return Object.assign({}, DF_MDe);
        case "chips":
            return Object.assign({}, DF_MEe);
        case "html":
            return Object.assign({}, DF_MFe);
        case "match_citations":
            return Object.assign({}, DF_MGe);
        case "custom_template":
            return Object.assign({}, DF_MHe);
        case "video":
            return Object.assign({}, DF_MIe);
        case "files":
            return Object.assign({}, DF_MJe);
        case "text":
            return [];
        default:
            console.error("DF-MESSENGER", "Could not find a payload for " + a)
    }
};
DF_MLe.prototype.getBuildChangelist = function() {
    if ("BUILD_CHANGELIST" in DF_MKe) {
        var a = Number(DF_MKe.BUILD_CHANGELIST);
        a = isFinite(a) ? a : void 0
    } else a = void 0;
    return a
};
DF_MLe.prototype.getAvailableLanguages = function() {
    return Array.from(DF_Mn.keys())
};
DF_MLe.prototype.getAvailableTexts = function() {
    return Object.assign({}, DF_Mn.get("en"))
};
var DF_MMe = DF_Mq(["#df-accordion-wrapper{color:var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n    );cursor:pointer;display:flex;flex-direction:column;font-family:var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-default-font-size);padding:var(--df-messenger-card-padding,16px);text-decoration:none}#df-accordion-wrapper .top-row{align-items:stretch;background-color:transparent;border:none;display:flex;justify-content:space-between}#df-accordion-wrapper .top-row:hover{cursor:pointer}#df-accordion-wrapper .top-row .content{display:flex}#df-accordion-wrapper #image{margin-right:16px;max-height:24px;max-width:24px}#df-accordion-wrapper #title{color:var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n    );font-size:inherit;font-weight:700;line-height:22px;margin:0}#df-accordion-wrapper #subtitle{color:var(--df-messenger-secondary-font-color,var(--df-messenger-default-secondary-font-color)\n    );line-height:22px;text-align:left}#df-accordion-wrapper .text-content{display:flex;flex-direction:column;justify-content:space-evenly}#df-accordion-wrapper .text-row{max-height:inherit;transition:max-height .25s ease-in}#df-accordion-wrapper #text{padding-top:10px}.expand-icon{margin:-8px -8px -8px 0;padding:8px}#df-accordion-wrapper #expandIcon{color:var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color)\n    );font-size:32px;transform:rotate(90deg);transition:transform .15s ease-out}#df-accordion-wrapper #expandIcon.open{font-size:32px;transform:rotate(-90deg);transition:transform .15s ease-in}button{font-family:inherit;font-size:inherit;padding:0;text-align:left}#accordion-content.collapsed{max-height:0;overflow:hidden}#accordion-content.expanded{max-height:unset}"]);
var DF_MNe = DF_Mq([".message pre:not(.code-block){border-radius:var(--df-messenger-default-border-radius);overflow:auto hidden;padding:var(--df-messenger-code-block-code-padding,16px)}.message :not(pre)>code,.message pre:not(.code-block){background-color:var(--df-messenger-code-block-code-background,#f2f2f2)}.message :not(pre)>code{border-radius:6px;padding:1px 6px}.message.markdown.code-block{border:var(--df-messenger-code-block-border,var(--df-messenger-default-border)\n    );overflow:hidden;padding:0}.message a{background:var(--df-messenger-link-background,var(--df-messenger-link-background-color,transparent)\n    );border:var(--df-messenger-link-border,none);border-radius:var(--df-messenger-link-border-radius,0);color:var(--df-messenger-link-font-color,var(--df-messenger-default-link-font-color)\n    );padding:var(--df-messenger-link-padding,0);text-decoration:var(--df-messenger-link-decoration,var(--df-messenger-default-link-decoration)\n    )}.message a:visited{color:var(--df-messenger-link-visited-font-color,var(--df-messenger-default-link-font-color)\n    )}.message a:hover{color:var(--df-messenger-link-hover-font-color,var(--df-messenger-default-link-font-color)\n    )}.message table{border-bottom-left-radius:var(--df-messenger-table-border-radius,0);border-bottom-right-radius:var(--df-messenger-table-border-radius,0);border-collapse:var(--df-messenger-table-border-collapse,separate);border-spacing:0;border-top-left-radius:var(--df-messenger-table-header-border-radius,var(--df-messenger-table-border-radius,0)\n    );border-top-right-radius:var(--df-messenger-table-header-border-radius,var(--df-messenger-table-border-radius,0)\n    );max-width:100%;width:var(--df-messenger-table-width,auto)}.message table thead th{border-bottom:var(--df-messenger-table-header-border-bottom,none);border-left:var(--df-messenger-table-header-border-left,none);border-right:var(--df-messenger-table-header-border-right,none);border-top:var(--df-messenger-table-header-border-top,none);color:var(--df-messenger-table-header-font-color,var(--df-messenger-table-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n        )\n      )\n    );font-size:var(--df-messenger-table-header-font-size,var(--df-messenger-table-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n        )\n      )\n    );font-weight:var(--df-messenger-table-header-font-weight,bold);padding:var(--df-messenger-table-header-padding,var(--df-messenger-table-padding,0)\n    );text-align:var(--df-messenger-table-header-align,var(--df-messenger-table-align,left)\n    )}.message table thead th:first-child{border-left:var(--df-messenger-table-header-border-left-first,var(--df-messenger-table-header-border-left,none)\n    );border-top-left-radius:var(--df-messenger-table-header-border-radius,var(--df-messenger-table-border-radius,0)\n    )}.message table thead th:last-child{border-right:var(--df-messenger-table-header-border-right-last,var(--df-messenger-table-header-border-right,none)\n    );border-top-right-radius:var(--df-messenger-table-header-border-radius,var(--df-messenger-table-border-radius,0)\n    )}.message table thead tr{background:var(--df-messenger-table-header-background,var(--df-messenger-table-header-background-color,var(--df-messenger-table-background-color,transparent)\n      )\n    )}.message table tbody td{border-bottom:var(--df-messenger-table-border-bottom,none);border-left:var(--df-messenger-table-border-left,none);border-right:var(--df-messenger-table-border-right,none);border-top:var(--df-messenger-table-border-top,none);color:var(--df-messenger-table-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n      )\n    );font-size:var(--df-messenger-table-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n      )\n    );padding:var(--df-messenger-table-padding,0);text-align:var(--df-messenger-table-align,left)}.message table tbody tr:first-child td{border-top:var(--df-messenger-table-border-top-first,var(--df-messenger-table-border-top,none)\n    )}.message table tbody tr:last-child td{border-bottom:var(--df-messenger-table-border-bottom-last,var(--df-messenger-table-border-bottom,none)\n    )}.message table tbody tr:last-child td:first-child{border-bottom-left-radius:var(--df-messenger-table-border-radius,0)}.message table tbody tr:last-child td:last-child{border-bottom-right-radius:var(--df-messenger-table-border-radius,0)}.message table tbody td:first-child{border-left:var(--df-messenger-table-border-left-first,var(--df-messenger-table-border-left,none)\n    )}.message table tbody td:last-child{border-right:var(--df-messenger-table-border-right-last,var(--df-messenger-table-border-right,none)\n    )}.message table tbody tr:nth-child(2n){background:var(--df-messenger-table-even-background,var(--df-messenger-table-even-background-color,var(--df-messenger-table-background-color,transparent)\n      )\n    )}.message table tbody tr:nth-child(odd){background:var(--df-messenger-table-odd-background,var(--df-messenger-table-odd-background-color,var(--df-messenger-table-background-color,transparent)\n      )\n    )}.message img{border:var(--df-messenger-image-inner-border,var(--df-messenger-image-border,none)\n    );border-radius:var(--df-messenger-image-inner-border-radius,var(--df-messenger-image-border-radius,0)\n    );margin:var(--df-messenger-card-padding,16px);margin-left:0;margin-right:0;max-width:100%}.message img:first-child{margin-top:0}.message img:last-child{margin-bottom:0}"]);

function DF_MOe(a) {
    return function() {
        var b = DF_Mi.apply(0, arguments),
            c = {};
        return c._$litDirective$ = a, c.values = b, c
    }
}

function DF_MPe() {}
DF_MPe.prototype.Jc = function(a, b, c) {
    this.G = a;
    this.g = b;
    this.j = c
};
DF_MPe.prototype.Kc = function(a, b) {
    return this.i(a, b)
};
DF_MPe.prototype.i = function(a, b) {
    return this.render.apply(this, DF_Me(b))
};
DF_Ma.Object.defineProperties(DF_MPe.prototype, {
    ea: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.ea
        }
    }
});

function DF_MQe(a) {
    this.value = DF_Mv;
    if (a.type !== 2) throw Error(this.constructor.ed + "() can only be used in child bindings");
}
DF_Mf(DF_MQe, DF_MPe);
DF_MQe.prototype.render = function(a) {
    if (a === DF_Mv || a === void 0) return this.h = void 0, this.value = a;
    if (a === DF_M4c) return a;
    if (a === this.value) return this.h;
    this.value = a;
    a = [DF_M0b(a)];
    a.raw = a;
    var b = {};
    return this.h = (b._$litType$ = this.constructor.resultType, b.strings = a, b.values = [], b)
};
DF_MQe.ed = "safeHTML";
DF_MQe.resultType = 1;
var DF_MRe = DF_MOe(DF_MQe);
var DF_MSe = DF_Mc(["<style>\n      @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n    </style>"]),
    DF_MTe = DF_Mc([' <div class="expand-icon">\n          <span\n            class="', '"\n            id="expandIcon"\n            aria-hidden="true"\n            >chevron_right</span\n          >\n        </div>']),
    DF_MUe = DF_Mc([' <div class="image-content">\n            <img id="image" src="', '" />\n          </div>']),
    DF_MVe = DF_Mc([' <div\n          id="accordion-content"\n          class="text-row ',
        '"\n          aria-labelledby="title"\n          role="region">\n          <div id="text" class="message word-wrap">', "</div>\n        </div>"
    ]),
    DF_MWe = DF_Mc(' ;\n      <div id="df-accordion-wrapper">\n        <button\n          @click=";"\n          id="accordion-button"\n          class="top-row focus-outline focus-outset focus-box"\n          aria-controls="accordion-content"\n          aria-expanded=";">\n          <div class="content">\n            ;\n            <div class="text-content">\n              <h3 id="title" class="word-wrap">;</h3>\n              <div id="subtitle" class="word-wrap"> ; </div>\n            </div>\n          </div>\n          ;\n        </button>\n        ;\n      </div>'.split(";"));

function DF_ME(a, b) {
    a = DF_MC.call(this, a, b, "accordion") || this;
    a.expanded = !1;
    a.title = "";
    a.subtitle = "";
    a.text = null;
    a.image = null;
    a.Za = !1;
    return a
}
DF_Mf(DF_ME, DF_MC);
DF_ME.D = DF_MC.D;
DF_ME.o = DF_MC.o;
DF_ME.s = DF_MC.s;
DF_ME.h = DF_MC.h;
DF_ME.g = DF_MC.g;
DF_ME.C = DF_MC.C;
DF_ME.i = DF_MC.i;
DF_ME.u = DF_MC.u;
DF_ME.m = DF_MC.m;
DF_ME.v = DF_MC.v;
DF_ME.prototype.connectedCallback = function() {
    var a = this;
    DF_MC.prototype.connectedCallback.call(this);
    var b;
    ((b = this.image) == null ? 0 : b.rawUrl) && DF_M3a(this.image.rawUrl, function() {
        a.Za = !0
    }, function() {
        a.Za = !1
    })
};
DF_ME.prototype.ta = function(a) {
    DF_MC.prototype.ta.call(this, a);
    this.expanded && DF_M6a(this)
};
DF_ME.prototype.render = function() {
    var a = DF_Mu(DF_MSe),
        b = this.text ? DF_Mu(DF_MTe, this.expanded ? "material-icons open" : "material-icons") : void 0,
        c, d = ((c = this.image) == null ? 0 : c.rawUrl) && this.Za ? DF_Mu(DF_MUe, this.image.rawUrl) : void 0;
    c = this.text ? DF_Mu(DF_MVe, this.expanded ? "expanded" : "collapsed", DF_MRe(this.text)) : void 0;
    return DF_Mu(DF_MWe, a, this.g, this.expanded, d, this.title, this.subtitle, b, c)
};
DF_ME.prototype.g = function() {
    this.text && (DF_Mm(this, "df-accordion-clicked", {}), this.expanded = !this.expanded)
};
var DF_MXe = DF_ME;
DF_MXe.j = [DF_MMe, DF_MNe, DF_My];
DF_Mk([DF_Ms({
    type: Boolean
}), DF_Ml("design:type", Object)], DF_MXe.prototype, "expanded", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_MXe.prototype, "title", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_MXe.prototype, "subtitle", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_MXe.prototype, "text", void 0);
DF_Mk([DF_Ms({
    type: Object
}), DF_Ml("design:type", Object)], DF_MXe.prototype, "image", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MXe.prototype, "Za", void 0);
DF_MXe = DF_Mk([DF_Mp("df-accordion"), DF_Ml("design:paramtypes", [String, String])], DF_MXe);
var DF_MYe = DF_Mq(["#dfButtonAnchorWrapper,#dfButtonWrapper{align-items:center;background:none;border:var(--df-messenger-button-border,none);border-radius:var(--df-messenger-button-border-radius,var(--df-messenger-default-border-radius)\n    );box-sizing:border-box;color:var(--df-messenger-button-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n      )\n    );cursor:pointer;display:flex;font-family:var(--df-messenger-button-font-family,var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-button-font-size,var(--df-messenger-default-font-size)\n    );overflow:hidden;padding:var(--df-messenger-button-padding,var(--df-messenger-card-padding,16px)\n    );text-decoration:none;width:100%}#dfButtonAnchorWrapper:hover>.df-button-icon,#dfButtonAnchorWrapper:hover>.text,#dfButtonWrapper:hover>.df-button-icon,#dfButtonWrapper:hover>.text{opacity:.5}.text{overflow:hidden;padding-left:var(--df-messenger-button-icon-spacing,12px);text-align:var(--df-messenger-button-text-align,center);text-overflow:ellipsis;white-space:var(--df-messenger-button-text-wrap,normal)}.df-button-icon,.df-button-icon #materialButtonIcon{height:var(--df-messenger-button-icon-font-size,24px);width:var(--df-messenger-button-icon-font-size,24px)}.df-button-image img{display:block;height:var(--df-messenger-button-image-size,var(--df-messenger-button-icon-font-size,24px)\n    );margin:var(--df-messenger-button-image-offset,0);width:var(--df-messenger-button-image-size,var(--df-messenger-button-icon-font-size,24px)\n    )}"]);

function DF_MF() {
    return DF_MC.apply(this, arguments) || this
}
DF_Mf(DF_MF, DF_MC);
DF_MF.D = DF_MC.D;
DF_MF.o = DF_MC.o;
DF_MF.s = DF_MC.s;
DF_MF.h = DF_MC.h;
DF_MF.g = DF_MC.g;
DF_MF.C = DF_MC.C;
DF_MF.i = DF_MC.i;
DF_MF.u = DF_MC.u;
DF_MF.m = DF_MC.m;
DF_MF.v = DF_MC.v;
DF_Mk([DF_M0a({
    context: "df-instance",
    subscribe: !0
}), DF_Ml("design:type", Object)], DF_MF.prototype, "ua", void 0);
/*

 Copyright 2018 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_MZe(a) {
    var b;
    if (a.type !== 1 || a.name !== "style" || ((b = a.strings) == null ? void 0 : b.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
}
DF_Mf(DF_MZe, DF_MPe);
DF_MZe.prototype.render = function(a) {
    return Object.keys(a).reduce(function(b, c) {
        var d = a[c];
        if (d == null) return b;
        c = c.includes("-") ? c : c.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
        return b + (c + ":" + d + ";")
    }, "")
};
DF_MZe.prototype.i = function(a, b) {
    b = DF_Md(b).next().value;
    a = a.element.style;
    this.h === void 0 && (this.h = new Set);
    for (var c = DF_Md(this.h), d = c.next(); !d.done; d = c.next()) d = d.value, b[d] == null && (this.h.delete(d), d.includes("-") ? a.removeProperty(d) : a[d] = null);
    for (var e in b) c = b[e], c != null && (this.h.add(e), d = typeof c === "string" && c.endsWith(" !important"), e.includes("-") || d ? a.setProperty(e, d ? c.slice(0, -11) : c, d ? "important" : "") : a[e] = c);
    return DF_M4c
};
var DF_M_e = DF_MOe(DF_MZe);
var DF_M0e = DF_Mc(' <a\n        href=";"\n        class="focus-outline"\n        target=";"\n        rel=";"\n        id="dfButtonAnchorWrapper"\n        @click=";">\n        <span class="visually-hidden">;</span>\n        ;\n        <span class="text word-wrap"> ; </span>\n      </a>'.split(";")),
    DF_M1e = DF_Mc(['\n        <button\n          class="focus-outline"\n          id="dfButtonWrapper"\n          @click="', '">\n          ', '\n          <span class="text word-wrap"> ', " </span>\n        </button>\n      "]),
    DF_M2e = DF_Mc([' <div class="df-button-image">\n        <img src="', '" />\n      </div>']),
    DF_M3e = DF_Mc([' <style>\n        @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <div class="df-button-icon">\n        <span\n          aria-hidden="true"\n          class="material-icons"\n          id="materialButtonIcon"\n          style=', ">\n          ", "\n        </span>\n      </div>"]);

function DF_MG(a, b) {
    a = DF_MF.call(this, a, b, "button") || this;
    a.anchor = null;
    a.text = "";
    a.icon = null;
    a.image = null;
    a.event = void 0;
    a.mode = "normal";
    return a
}
DF_Mf(DF_MG, DF_MF);
DF_MG.D = DF_MF.D;
DF_MG.o = DF_MF.o;
DF_MG.s = DF_MF.s;
DF_MG.h = DF_MF.h;
DF_MG.g = DF_MF.g;
DF_MG.C = DF_MF.C;
DF_MG.i = DF_MF.i;
DF_MG.u = DF_MF.u;
DF_MG.m = DF_MF.m;
DF_MG.v = DF_MF.v;
DF_MG.prototype.connectedCallback = function() {
    var a = this;
    DF_MF.prototype.connectedCallback.call(this);
    var b;
    ((b = this.image) == null ? 0 : b.rawUrl) ? DF_M3a(this.image.rawUrl, function() {
        a.Ma = !0
    }, function() {
        a.Ma = !1
    }): this.Ma = !1
};
DF_MG.prototype.g = function() {
    var a = this,
        b, c, d, e, f, g, h, k, l, m;
    return DF_Mh(function(n) {
        d = ((b = a.event) == null ? void 0 : b.languageCode) || ((c = a.ua) == null ? void 0 : c.languageCode);
        h = DF_Mm(a, "df-button-clicked", Object.assign({}, {
            text: a.text,
            event: (e = a.event) == null ? void 0 : e.event
        }, ((f = a.event) == null ? 0 : f.event) ? {
            languageCode: d || void 0
        } : {}, {
            actionLink: (g = a.anchor) == null ? void 0 : g.href
        }));
        a.mode === "blocking" && a.ua && (a.ua.isWaitingForElement = !1);
        if (h && ((k = a.event) == null ? 0 : k.event)) return l = DF_Mpd(a.event.event, d ||
            null), DF_Mg(n, (m = a.ua) == null ? void 0 : m.presenter.sendDialogflowRequest(l), 0);
        n.g = 0
    })
};
DF_MG.prototype.render = function() {
    if (this.anchor) {
        var a = DF_Mo(this.languageCode, "opensInANewTab");
        return DF_Mu(DF_M0e, this.anchor.href, this.anchor.target, this.anchor.rel, this.g, a, DF_M4e(this), this.text || "")
    }
    return DF_Mu(DF_M1e, this.g, DF_M4e(this), this.text || "")
};

function DF_M4e(a) {
    if (a.Ma === void 0) return null;
    var b;
    if (((b = a.image) == null ? 0 : b.rawUrl) && a.Ma) return DF_Mu(DF_M2e, a.image.rawUrl);
    var c;
    b = DF_M_e({
        color: ((c = a.icon) == null ? void 0 : c.color) || "#444746"
    });
    var d;
    return DF_Mu(DF_M3e, b, ((d = a.icon) == null ? void 0 : d.type) || "forward_arrow")
}
var DF_M5e = DF_MG;
DF_M5e.j = [DF_MYe, DF_My];
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_M5e.prototype, "anchor", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_M5e.prototype, "text", void 0);
DF_Mk([DF_Ms({
    type: Object
}), DF_Ml("design:type", Object)], DF_M5e.prototype, "icon", void 0);
DF_Mk([DF_Ms({
    type: Object
}), DF_Ml("design:type", Object)], DF_M5e.prototype, "image", void 0);
DF_Mk([DF_Ms({
    type: Object
}), DF_Ml("design:type", Object)], DF_M5e.prototype, "event", void 0);
DF_Mk([DF_Ms({
    type: String
}), DF_Ml("design:type", Object)], DF_M5e.prototype, "mode", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Boolean)], DF_M5e.prototype, "Ma", void 0);
DF_M5e = DF_Mk([DF_Mp("df-button"), DF_Ml("design:paramtypes", [String, String])], DF_M5e);
var DF_M6e = DF_Mq([":host{--df-messenger-card-internal-border-radius:var(--df-messenger-card-border-radius,var(--df-messenger-default-border-radius)\n    );--df-messenger-card-internal-border-top-left-radius:var(--df-messenger-card-border-top-left-radius,var(--df-messenger-card-internal-border-radius)\n    );--df-messenger-card-internal-border-top-right-radius:var(--df-messenger-card-border-top-right-radius,var(--df-messenger-card-internal-border-radius)\n  );--df-messenger-card-internal-border-bottom-left-radius:var(--df-messenger-card-border-bottom-left-radius,var(--df-messenger-card-internal-border-radius)\n    );--df-messenger-card-internal-border-bottom-right-radius:var(--df-messenger-card-border-bottom-right-radius,var(--df-messenger-card-internal-border-radius)\n    );--df-messenger-card-internal-button-radius:var(--df-messenger-button-border-radius,var(--df-messenger-default-border-radius)\n  )}.card-wrapper{background:var(--df-messenger-card-background,var(--df-messenger-card-background-color,#fff)\n    );border:var(--df-messenger-card-border,var(--df-messenger-default-border)\n    );border-bottom-left-radius:var(--df-messenger-card-internal-border-bottom-left-radius);border-bottom-right-radius:var(--df-messenger-card-internal-border-bottom-right-radius);border-top-left-radius:var(--df-messenger-card-internal-border-top-left-radius);border-top-right-radius:var(--df-messenger-card-internal-border-top-right-radius);box-shadow:var(--df-messenger-card-box-shadow,var(--df-messenger-default-box-shadow)\n    )}.card-wrapper.flex{display:flex;flex-wrap:wrap}:host(.first) .card-wrapper{border-bottom-left-radius:var(--df-messenger-card-stack-border-bottom-left-radius,var(--df-messenger-card-internal-border-bottom-left-radius)\n    );border-bottom-right-radius:var(--df-messenger-card-stack-border-bottom-right-radius,var(--df-messenger-card-internal-border-bottom-right-radius)\n    )}:host(.mid) .card-wrapper{border-bottom-left-radius:var(--df-messenger-card-stack-border-bottom-left-radius,var(--df-messenger-card-internal-border-bottom-left-radius)\n    );border-bottom-right-radius:var(--df-messenger-card-stack-border-bottom-right-radius,var(--df-messenger-card-internal-border-bottom-right-radius)\n    );border-top-left-radius:var(--df-messenger-card-stack-border-top-left-radius,var(--df-messenger-card-internal-border-top-left-radius)\n    );border-top-right-radius:var(--df-messenger-card-stack-border-top-right-radius,var(--df-messenger-card-internal-border-top-right-radius)\n    )}:host(.last) .card-wrapper{border-top-left-radius:var(--df-messenger-card-stack-border-top-left-radius,var(--df-messenger-card-internal-border-top-left-radius)\n    );border-top-right-radius:var(--df-messenger-card-stack-border-top-right-radius,var(--df-messenger-card-internal-border-top-right-radius)\n    )}.card-wrapper.button{border:none;border-bottom-left-radius:var(--df-messenger-card-internal-button-radius)!important;border-bottom-right-radius:var(--df-messenger-card-internal-button-radius)!important;border-top-left-radius:var(--df-messenger-card-internal-button-radius)!important;border-top-right-radius:var(--df-messenger-card-internal-button-radius)!important}.card-wrapper.video{border:var(--df-messenger-video-border,var(--df-messenger-card-border,var(--df-messenger-default-border)\n      )\n    );overflow:hidden}.card-wrapper.image{border:var(--df-messenger-image-border,var(--df-messenger-card-border,var(--df-messenger-default-border)\n      )\n    );overflow:hidden}"]);
var DF_M7e = DF_Mc([' <span class="visually-hidden">', '</span>\n      <div\n        class="card-wrapper ', " ", '">\n        ', "\n      </div>"]);

function DF_MH(a, b) {
    a = DF_MC.call(this, a, b, "customCard") || this;
    a.elements = [];
    return a
}
DF_Mf(DF_MH, DF_MC);
DF_MH.D = DF_MC.D;
DF_MH.o = DF_MC.o;
DF_MH.s = DF_MC.s;
DF_MH.h = DF_MC.h;
DF_MH.g = DF_MC.g;
DF_MH.C = DF_MC.C;
DF_MH.i = DF_MC.i;
DF_MH.u = DF_MC.u;
DF_MH.m = DF_MC.m;
DF_MH.v = DF_MC.v;
DF_MH.prototype.ra = function(a) {
    a.has("elements") && this.elements.some(function(b) {
        return (b == null ? void 0 : b.type) === "list"
    }) && this.setAttribute("role", "list")
};
DF_MH.prototype.render = function() {
    if (this.elements && this.elements.length) {
        var a = DF_Mo(this.languageCode, "agentSays"),
            b = this.elements.some(function(c) {
                return !!c.cssWidth
            });
        return DF_Mu(DF_M7e, a, this.elements.length === 1 ? this.elements[0].type : "", b ? "flex" : "", this.elements)
    }
};
var DF_M8e = DF_MH;
DF_M8e.j = [DF_M6e, DF_My];
DF_Mk([DF_Ms({
    type: Array
}), DF_Ml("design:type", Array)], DF_M8e.prototype, "elements", void 0);
DF_M8e = DF_Mk([DF_Mp("df-card"), DF_Ml("design:paramtypes", [String, String])], DF_M8e);
var DF_M9e = DF_Mq([".df-chips-wrapper{display:flex;flex-wrap:wrap;gap:var(--df-messenger-chips-distance,8px);justify-content:var(--df-messenger-message-bot-align,flex-start);padding:var(--df-messenger-chips-spacing,10px) 0;row-gap:var(--df-messenger-chips-distance,8px)}:host(.first-child) .df-chips-wrapper{padding-top:0}:host(.last-child) .df-chips-wrapper{padding-bottom:0}.df-chips-wrapper.clicked{display:none}.chip{align-items:center;background:var(--df-messenger-chips-background,var(--df-messenger-chips-background-color,#fff)\n    );border:1px solid;border-color:var(--df-messenger-chips-border-color,var(--df-messenger-default-border-color)\n    );border-radius:var(--df-messenger-chips-border-radius,999px);box-shadow:var(--df-messenger-chips-box-shadow,var(--df-messenger-default-box-shadow)\n    );display:inline-flex;max-width:100%;overflow:hidden;padding:var(--df-messenger-chips-padding,6px 16px);position:relative}.chip .focus-outline:focus-visible{position:static}.chip .focus-outline:focus-visible:before{border-radius:var(--df-messenger-chips-border-radius,999px)}.chip:hover{background:var(--df-messenger-chips-background-hover,var(--df-messenger-chips-hover-background,var(--df-messenger-chips-hover-background-color,rgba(68,71,70,.08))\n      )\n    );border-color:var(--df-messenger-chips-border-color-hover,var(--df-messenger-chips-border-color,var(--df-messenger-default-border-color)\n      )\n    )}.chip a,.chip button{align-items:var(--df-messenger-chips-content-align,flex-start);background:none;border:none;color:var(--df-messenger-chips-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n      )\n    );cursor:pointer;display:inline-flex;font-family:var(--df-messenger-chips-font-family,var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-chips-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n      )\n    );font-weight:var(--df-messenger-chips-font-weight,normal);min-width:0;padding:0;text-decoration:none}.chip:hover a,.chip:hover button{font-weight:var(--df-messenger-chips-font-weight-hover,var(--df-messenger-chips-font-weight,normal)\n  )}.chip .text{overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:var(--df-messenger-chips-text-wrap,nowrap)}.chip img{margin-left:var(--df-messenger-chips-icon-offset,-8px);margin-right:var(--df-messenger-chips-icon-spacing,8px);max-height:var(--df-messenger-chips-icon-font-size,18px);max-width:var(--df-messenger-chips-icon-font-size,18px)}.chip .icon{align-self:center;height:var(--df-messenger-chips-icon-font-size,18px);margin-left:var(--df-messenger-chips-icon-spacing,8px);margin-right:var(--df-messenger-chips-icon-offset,-8px);width:var(--df-messenger-chips-icon-font-size,18px)}.chip .icon svg{fill:var(--df-messenger-chips-icon-font-color,var(--df-messenger-chips-font-color,var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color)\n        )\n      )\n    );height:inherit;width:inherit}"]);
var DF_M$e = DF_Mc(['\n      <span class="visually-hidden">', '</span>\n      <div class="df-chips-wrapper" role="list"> ', " </div>\n    "]);

function DF_MI(a, b) {
    a = DF_MF.call(this, a, b, "chips") || this;
    a.chips = [];
    return a
}
DF_Mf(DF_MI, DF_MF);
DF_MI.D = DF_MF.D;
DF_MI.o = DF_MF.o;
DF_MI.s = DF_MF.s;
DF_MI.h = DF_MF.h;
DF_MI.g = DF_MF.g;
DF_MI.C = DF_MF.C;
DF_MI.i = DF_MF.i;
DF_MI.u = DF_MF.u;
DF_MI.m = DF_MF.m;
DF_MI.v = DF_MF.v;
DF_MI.prototype.isVisible = function() {
    return this.chips.length > 0 && !this.clicked
};
DF_MI.prototype.render = function() {
    var a = this;
    if (!this.chips.length || this.clicked) return null;
    var b = DF_Mo(this.languageCode, "agentSays"),
        c = this.chips.map(function(d) {
            return d.render(a, a.ua)
        });
    return DF_Mu(DF_M$e, b, c)
};
var DF_Maf = DF_MI;
DF_Maf.j = [DF_M9e, DF_My];
DF_Mk([DF_Ms({
    type: Array
}), DF_Ml("design:type", Array)], DF_Maf.prototype, "chips", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Boolean)], DF_Maf.prototype, "clicked", void 0);
DF_Maf = DF_Mk([DF_Mp("df-chips"), DF_Ml("design:paramtypes", [String, String])], DF_Maf);
var DF_Mbf = DF_Mq([".citations-wrapper{padding:var(--df-messenger-citations-spacing,10px) 0}:host(.first-child) .citations-wrapper{padding-top:0}:host(.last-child) .citations-wrapper{padding-bottom:0}.citations-message{color:var(--df-messenger-citations-message-font-color,#041e49);display:var(--df-messenger-citations-message-display,flex);font-size:var(--df-messenger-citations-message-font-size,12px);margin-bottom:var(--df-messenger-citations-distance,8px)}.citations-list,.citations-message{justify-content:var(--df-messenger-message-bot-align,flex-start)}.citations-list{align-items:var(--df-messenger-message-bot-align,flex-start);display:flex;flex-direction:var(--df-messenger-citations-flex-direction,row);flex-wrap:wrap;gap:var(--df-messenger-citations-distance,8px);row-gap:var(--df-messenger-citations-distance,8px)}.citation{align-items:center;background:var(--df-messenger-citations-background,var(--df-messenger-citations-background-color,#fff)\n    );border:1px solid;border-color:var(--df-messenger-citations-border-color,#1a73e8);border-radius:var(--df-messenger-citations-border-radius,4px);box-shadow:var(--df-messenger-citations-box-shadow,none);box-sizing:border-box;color:var(--df-messenger-citations-font-color,#1a73e8);display:flex;font-family:var(--df-messenger-citations-font-family,var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-citations-font-size,11px);font-weight:var(--df-messenger-citations-font-weight,normal);max-width:100%;overflow:hidden;padding:var(--df-messenger-citations-padding,8px);text-decoration:none}.citation:hover{background:var(--df-messenger-citations-background-hover,var(--df-messenger-citations-hover-background,var(--df-messenger-citations-hover-background-color,rgba(68,71,70,.08))\n      )\n    );border-color:var(--df-messenger-citations-border-color-hover,var(--df-messenger-citations-border-color,#1a73e8)\n    );font-weight:var(--df-messenger-citations-font-weight-hover,var(--df-messenger-citations-font-weight,normal)\n    )}.citation .icon{height:var(--df-messenger-citations-icon-font-size,14px);margin-left:var(--df-messenger-citations-icon-offset,0);margin-right:var(--df-messenger-citations-icon-spacing,8px);width:var(--df-messenger-citations-icon-font-size,14px)}.citation .icon svg{fill:var(--df-messenger-citations-icon-font-color,var(--df-messenger-citations-font-color,#1a73e8)\n    );height:inherit;width:inherit}.citation .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]);
var DF_Mcf = DF_Mc(['\n      <span class="visually-hidden">', '</span>\n      <div class="citations-wrapper" role="list">\n        <div class="citations-message"> ', ' </div>\n        <div class="citations-list"> ', " </div>\n      </div>\n    "]),
    DF_Mdf = DF_Mc(' <a\n      class="citation focus-outline"\n      href=";"\n      target=";"\n      rel=";"\n      @click=;\n      role="listitem">\n      <span class="visually-hidden">;</span>\n      <span class="icon">;</span>\n      <span class="title">;</span>\n    </a>'.split(";"));

function DF_MJ(a, b) {
    a = DF_MC.call(this, a, b, "match_citations") || this;
    a.citations = [];
    return a
}
DF_Mf(DF_MJ, DF_MC);
DF_MJ.D = DF_MC.D;
DF_MJ.o = DF_MC.o;
DF_MJ.s = DF_MC.s;
DF_MJ.h = DF_MC.h;
DF_MJ.g = DF_MC.g;
DF_MJ.C = DF_MC.C;
DF_MJ.i = DF_MC.i;
DF_MJ.u = DF_MC.u;
DF_MJ.m = DF_MC.m;
DF_MJ.v = DF_MC.v;
DF_MJ.prototype.render = function() {
    var a = this;
    if (this.citations.length === 0) return null;
    var b = DF_Mo(this.languageCode, "agentSays"),
        c = DF_Mo(this.languageCode, "citationsMessage"),
        d = this.citations.map(function(e) {
            return DF_Mef(a, e)
        });
    return DF_Mu(DF_Mcf, b, c, d)
};

function DF_Mef(a, b) {
    var c = DF_Mo(a.languageCode, "opensInANewTab");
    return DF_Mu(DF_Mdf, b.anchor.href, b.anchor.target, b.anchor.rel, function() {
        var d;
        DF_Mm(a, "df-citation-clicked", {
            title: b.title,
            actionLink: (d = b.anchor) == null ? void 0 : d.href
        })
    }, c, DF_M6d, b.title)
}
var DF_Mff = DF_MJ;
DF_Mff.j = [DF_Mbf, DF_My];
DF_Mk([DF_Ms({
    type: Array
}), DF_Ml("design:type", Array)], DF_Mff.prototype, "citations", void 0);
DF_Mff = DF_Mk([DF_Mp("df-citations"), DF_Ml("design:paramtypes", [String, String])], DF_Mff);
var DF_Mgf = DF_Mc(["", ""]);

function DF_MK(a, b) {
    a = DF_MC.call(this, a, b, "custom_template") || this;
    a.elementName = null;
    a.payload = null;
    a.responseId = null;
    a.element = null;
    return a
}
DF_Mf(DF_MK, DF_MC);
DF_MK.D = DF_MC.D;
DF_MK.o = DF_MC.o;
DF_MK.s = DF_MC.s;
DF_MK.h = DF_MC.h;
DF_MK.g = DF_MC.g;
DF_MK.C = DF_MC.C;
DF_MK.i = DF_MC.i;
DF_MK.u = DF_MC.u;
DF_MK.m = DF_MC.m;
DF_MK.v = DF_MC.v;
DF_MK.prototype.connectedCallback = function() {
    DF_MC.prototype.connectedCallback.call(this);
    this.elementName && customElements.get(this.elementName) ? (this.element = document.createElement(this.elementName), this.element.dfPayload = this.payload, this.element.dfResponseId = this.responseId) : console.error("DF-MESSENGER", "df-custom-template", "Unknown custom element", this.elementName)
};
DF_MK.prototype.render = function() {
    return this.element ? DF_Mu(DF_Mgf, this.element) : null
};
var DF_Mhf = DF_MK;
DF_Mk([DF_Ms({
    type: String
}), DF_Ml("design:type", Object)], DF_Mhf.prototype, "elementName", void 0);
DF_Mk([DF_Ms({
    type: Object
}), DF_Ml("design:type", Object)], DF_Mhf.prototype, "payload", void 0);
DF_Mk([DF_Ms({
    type: String
}), DF_Ml("design:type", Object)], DF_Mhf.prototype, "responseId", void 0);
DF_Mhf = DF_Mk([DF_Mp("df-custom-template"), DF_Ml("design:paramtypes", [String, String])], DF_Mhf);
var DF_Mif = DF_Mq(["#description-wrapper{color:var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n    );display:flex;flex-direction:column;font-family:var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-default-font-size);padding:var(--df-messenger-card-padding,16px)}.description-line{padding-top:8px}.title{color:inherit;font-size:inherit;font-weight:700;margin:0}"]);
var DF_Mjf = DF_Mc(['<h3 class="title word-wrap">', "</h3>"]),
    DF_Mkf = DF_Mc(['<div class="description-line word-wrap">', "</div>"]),
    DF_Mlf = DF_Mc([' <div id="description-wrapper">', " ", "</div> "]);

function DF_ML(a, b) {
    a = DF_MC.call(this, a, b, "description") || this;
    a.title = "";
    a.text = [];
    return a
}
DF_Mf(DF_ML, DF_MC);
DF_ML.D = DF_MC.D;
DF_ML.o = DF_MC.o;
DF_ML.s = DF_MC.s;
DF_ML.h = DF_MC.h;
DF_ML.g = DF_MC.g;
DF_ML.C = DF_MC.C;
DF_ML.i = DF_MC.i;
DF_ML.u = DF_MC.u;
DF_ML.m = DF_MC.m;
DF_ML.v = DF_MC.v;
DF_ML.prototype.render = function() {
    if (this.text || this.title) {
        var a = this.title ? DF_Mu(DF_Mjf, this.title) : void 0,
            b, c = (b = this.text) == null ? void 0 : b.map(function(d) {
                return DF_Mu(DF_Mkf, d)
            });
        return DF_Mu(DF_Mlf, a, c)
    }
};
var DF_Mmf = DF_ML;
DF_Mmf.j = [DF_Mif, DF_My];
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_Mmf.prototype, "title", void 0);
DF_Mk([DF_Ms({
    type: Array
}), DF_Ml("design:type", Object)], DF_Mmf.prototype, "text", void 0);
DF_Mmf = DF_Mk([DF_Mp("df-description"), DF_Ml("design:paramtypes", [String, String])], DF_Mmf);
var DF_Mnf = DF_Mc(['<hr class="divider" />']);

function DF_MM(a, b) {
    return DF_MC.call(this, a, b, "divider") || this
}
DF_Mf(DF_MM, DF_MC);
DF_MM.D = DF_MC.D;
DF_MM.o = DF_MC.o;
DF_MM.s = DF_MC.s;
DF_MM.h = DF_MC.h;
DF_MM.g = DF_MC.g;
DF_MM.C = DF_MC.C;
DF_MM.i = DF_MC.i;
DF_MM.u = DF_MC.u;
DF_MM.m = DF_MC.m;
DF_MM.v = DF_MC.v;
DF_MM.prototype.ha = function() {
    return this
};
DF_MM.prototype.render = function() {
    return DF_Mu(DF_Mnf)
};
var DF_Mof = DF_MM;
DF_Mof = DF_Mk([DF_Mp("df-divider"), DF_Ml("design:paramtypes", [String, String])], DF_Mof);
var DF_Mpf = DF_Mq([".files-wrapper{display:flex;justify-content:var(--df-messenger-message-bot-align,flex-start);padding:var(--df-messenger-files-spacing,10px) 0}:host(.first-child) .files-wrapper{padding-top:0}:host(.last-child) .files-wrapper{padding-bottom:0}.files-list{align-items:var(--df-messenger-message-bot-align,flex-start);display:flex;flex-direction:var(--df-messenger-files-flex-direction,row);flex-wrap:wrap;gap:var(--df-messenger-files-distance,8px);justify-content:var(--df-messenger-message-bot-align,flex-start);min-width:0;row-gap:var(--df-messenger-files-distance,8px)}.file{background:var(--df-messenger-files-background,var(--df-messenger-files-background-color,#fff)\n    );border:var(--df-messenger-files-border,var(--df-messenger-default-border)\n    );border-radius:var(--df-messenger-files-border-radius,999px);box-shadow:var(--df-messenger-files-box-shadow,var(--df-messenger-default-box-shadow)\n    );box-sizing:border-box;max-width:100%;overflow:hidden;padding:var(--df-messenger-files-padding,6px 16px);position:relative}.file .focus-outline:focus-visible{position:static}.file .focus-outline:focus-visible:before{border-radius:var(--df-messenger-files-border-radius,999px)}.file:hover{background:var(--df-messenger-files-background-hover,rgba(68,71,70,.08)\n    );border:var(--df-messenger-files-border-hover,var(--df-messenger-files-border,var(--df-messenger-default-border)\n      )\n    )}.file-content{align-items:center;color:var(--df-messenger-files-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n      )\n    );display:flex;font-family:var(--df-messenger-files-font-family,var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-files-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n      )\n    );font-weight:var(--df-messenger-files-font-weight,normal);text-decoration:none}.file:hover a{font-weight:var(--df-messenger-files-font-weight-hover,var(--df-messenger-files-font-weight,normal)\n  )}.file-content img{height:var(--df-messenger-files-image-size,18px);margin:var(--df-messenger-files-image-offset,0 0 0 -8px);padding-right:var(--df-messenger-files-text-spacing,8px);width:var(--df-messenger-files-image-size,18px)}.file-content .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.file-content .icon{height:var(--df-messenger-files-icon-size,18px);margin:var(--df-messenger-files-icon-offset,0 -8px 0 0);padding-left:var(--df-messenger-files-text-spacing,8px);width:var(--df-messenger-files-icon-size,18px)}.file-content .icon svg{fill:var(--df-messenger-files-icon-font-color,var(--df-messenger-default-icon-font-color)\n    );height:inherit;width:inherit}"]);
var DF_Mqf = DF_Mc(['\n      <span class="visually-hidden">', '</span>\n      <div class="files-wrapper">\n        <div class="files-list" role="list"> ', " </div>\n      </div>\n    "]),
    DF_Mrf = DF_Mc([' <span role="listitem" class="file focus-outline">\n      ', "\n    </span>"]),
    DF_Msf = DF_Mc(['<img src="', '" aria-hidden="true" />']),
    DF_Mtf = DF_Mc(' <a\n        class="file-content focus-outline"\n        href=";"\n        target=";"\n        rel=";"\n        @click=;\n        download>\n        ;\n        <span class="text">;</span>\n        <span class="icon">;</span>\n      </a>'.split(";")),
    DF_Muf = DF_Mc([' <span class="file-content">\n      ', '\n      <span class="text">', "</span>\n    </span>"]);

function DF_MN(a, b) {
    a = DF_MC.call(this, a, b, "files") || this;
    a.files = [];
    return a
}
DF_Mf(DF_MN, DF_MC);
DF_MN.D = DF_MC.D;
DF_MN.o = DF_MC.o;
DF_MN.s = DF_MC.s;
DF_MN.h = DF_MC.h;
DF_MN.g = DF_MC.g;
DF_MN.C = DF_MC.C;
DF_MN.i = DF_MC.i;
DF_MN.u = DF_MC.u;
DF_MN.m = DF_MC.m;
DF_MN.v = DF_MC.v;
DF_MN.prototype.render = function() {
    var a = this,
        b = DF_Mo(this.languageCode, "agentSays"),
        c = this.files.map(function(d) {
            return DF_Mu(DF_Mrf, DF_Mvf(a, d))
        });
    return DF_Mu(DF_Mqf, b, c)
};

function DF_Mvf(a, b) {
    var c, d = ((c = b.image) == null ? 0 : c.rawUrl) ? DF_Mu(DF_Msf, b.image.rawUrl) : null;
    return b.anchor ? DF_Mu(DF_Mtf, b.anchor.href, b.anchor.target, b.anchor.rel, function() {
        var e;
        DF_Mm(a, "df-file-clicked", {
            name: b.name,
            actionLink: (e = b.anchor) == null ? void 0 : e.href
        })
    }, d, b.name, DF_Mbe) : DF_Mu(DF_Muf, d, b.name)
}
var DF_Mwf = DF_MN;
DF_Mwf.j = [DF_Mpf, DF_My];
DF_Mk([DF_Ms({
    type: Array
}), DF_Ml("design:type", Array)], DF_Mwf.prototype, "files", void 0);
DF_Mwf = DF_Mk([DF_Mp("df-files"), DF_Ml("design:paramtypes", [String, String])], DF_Mwf);
var DF_Mxf = DF_Mq([".markdown :first-child{margin-top:0}.markdown :last-child{margin-bottom:0}"]);
var DF_Myf = DF_Mq([":host{--df-messenger-message-internal-border-radius:var(--df-messenger-message-border-radius,var(--df-messenger-default-border-radius)\n    );--df-messenger-message-internal-border-top-left-radius:var(--df-messenger-message-border-top-left-radius,var(--df-messenger-message-internal-border-radius)\n    );--df-messenger-message-internal-border-top-right-radius:var(--df-messenger-message-border-top-right-radius,var(--df-messenger-message-internal-border-radius)\n  );--df-messenger-message-internal-border-bottom-left-radius:var(--df-messenger-message-border-bottom-left-radius,var(--df-messenger-message-internal-border-radius)\n    );--df-messenger-message-internal-border-bottom-right-radius:var(--df-messenger-message-border-bottom-right-radius,var(--df-messenger-message-internal-border-radius)\n    )}.message{word-wrap:break-word;font-family:var(--df-messenger-message-font-family,var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-message-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n      )\n    );line-height:var(--df-messenger-message-line-height,normal);word-break:break-word}.message.bot-message{background:var(--df-messenger-message-bot-background,var(--df-messenger-message-bot-background-color,#ecf3fe)\n    );border:var(--df-messenger-message-bot-border,var(--df-messenger-message-border,none)\n    );border-bottom-left-radius:var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius)\n    );border-bottom-right-radius:var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius)\n    );border-top-left-radius:var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius)\n    );border-top-right-radius:var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius)\n    );color:var(--df-messenger-message-bot-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n      )\n    );font-weight:var(--df-messenger-message-bot-font-weight,var(--df-messenger-message-font-weight,normal)\n    );padding:var(--df-messenger-message-bot-padding,var(--df-messenger-message-padding,12px)\n    )}.message.user-message{background:var(--df-messenger-message-user-background,var(--df-messenger-message-user-background-color,#e1e3e1)\n    );border:var(--df-messenger-message-user-border,var(--df-messenger-message-border,none)\n    );border-bottom-left-radius:var(--df-messenger-message-user-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius)\n    );border-bottom-right-radius:var(--df-messenger-message-user-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius)\n    );border-top-left-radius:var(--df-messenger-message-user-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius)\n    );border-top-right-radius:var(--df-messenger-message-user-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius)\n    );color:var(--df-messenger-message-user-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n      )\n    );font-weight:var(--df-messenger-message-user-font-weight,var(--df-messenger-message-font-weight,normal)\n    );padding:var(--df-messenger-message-user-padding,var(--df-messenger-message-padding,12px)\n    )}:host(.first) .message.bot-message{border-bottom-left-radius:var(--df-messenger-message-bot-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius)\n        )\n      )\n    );border-bottom-right-radius:var(--df-messenger-message-bot-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius)\n        )\n      )\n    )}:host(.mid) .message.bot-message{border-bottom-left-radius:var(--df-messenger-message-bot-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius)\n        )\n      )\n    );border-bottom-right-radius:var(--df-messenger-message-bot-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius)\n        )\n      )\n    );border-top-left-radius:var(--df-messenger-message-bot-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius)\n        )\n      )\n    );border-top-right-radius:var(--df-messenger-message-bot-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius)\n        )\n      )\n    )}:host(.last) .message.bot-message{border-top-left-radius:var(--df-messenger-message-bot-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius)\n        )\n      )\n    );border-top-right-radius:var(--df-messenger-message-bot-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius)\n        )\n      )\n    )}:host(.first) .message.user-message{border-bottom-left-radius:var(--df-messenger-message-user-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-user-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius)\n        )\n      )\n    );border-bottom-right-radius:var(--df-messenger-message-user-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-user-border-bottom-right-radius,ar(--df-messenger-message-internal-border-bottom-right-radius)\n        )\n      )\n    )}:host(.mid) .message.user-message{border-bottom-left-radius:var(--df-messenger-message-user-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-user-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius)\n        )\n      )\n    );border-bottom-right-radius:var(--df-messenger-message-user-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-user-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius)\n        )\n      )\n    );border-top-left-radius:var(--df-messenger-message-user-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-user-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius)\n        )\n      )\n    );border-top-right-radius:var(--df-messenger-message-user-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-user-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius)\n        )\n      )\n    )}:host(.last) .message.user-message{border-top-left-radius:var(--df-messenger-message-user-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-user-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius)\n        )\n      )\n    );border-top-right-radius:var(--df-messenger-message-user-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-user-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius)\n        )\n      )\n    )}"]);
var DF_Mzf = DF_Mc([""]),
    DF_MAf = DF_Mc([' <span class="visually-hidden">\n        ', '\n      </span>\n      <div class="message bot-message"> ', " </div>"]);

function DF_MO(a, b) {
    a = DF_MC.call(this, a, b, "html") || this;
    a.html = null;
    return a
}
DF_Mf(DF_MO, DF_MC);
DF_MO.D = DF_MC.D;
DF_MO.o = DF_MC.o;
DF_MO.s = DF_MC.s;
DF_MO.h = DF_MC.h;
DF_MO.g = DF_MC.g;
DF_MO.C = DF_MC.C;
DF_MO.i = DF_MC.i;
DF_MO.u = DF_MC.u;
DF_MO.m = DF_MC.m;
DF_MO.v = DF_MC.v;
DF_MO.prototype.render = function() {
    return this.html ? DF_Mu(DF_MAf, DF_Mo(this.languageCode, "agentSays"), DF_MRe(this.html)) : DF_Mu(DF_Mzf)
};
var DF_MBf = DF_MO;
DF_MBf.j = [DF_Mxf, DF_MNe, DF_Myf, DF_My];
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_MBf.prototype, "html", void 0);
DF_MBf = DF_Mk([DF_Mp("df-html-message"), DF_Ml("design:paramtypes", [String, String])], DF_MBf);
var DF_MCf = DF_Mq([":host(:only-child) .image-wrapper{padding:var(--df-messenger-image-inner-padding,0)}:host(:only-child) img.image{border:var(--df-messenger-image-inner-border,none);border-radius:var(--df-messenger-image-inner-border-radius,0)}:host(:not(:only-child)) .image-wrapper{padding:var(--df-messenger-card-padding,16px)}:host(:not(:only-child)) img.image{border:var(--df-messenger-image-inner-border,var(--df-messenger-image-border,none)\n    );border-radius:var(--df-messenger-image-inner-border-radius,var(--df-messenger-image-border-radius,0)\n    )}img.image{max-width:100%}.loading{height:200px}a{display:block}.image-container{position:relative}.reference{align-items:center;background:var(--df-messenger-image-reference-background,hsla(0,0%,100%,.7));border:var(--df-messenger-image-reference-border,none);border-radius:var(--df-messenger-image-reference-border-radius,999px);display:flex;font-size:var(--df-messenger-image-reference-font-size,11px);margin:var(--df-messenger-image-reference-offset,0);max-width:calc(100% - 48px + var(--df-messenger-image-reference-max-width-fix, 0px));padding:var(--df-messenger-image-reference-padding,4px 8px);position:absolute;right:16px;top:16px}.reference img{height:var(--df-messenger-image-reference-image-size,16px);margin-right:var(--df-messenger-image-reference-image-spacing,4px);width:var(--df-messenger-image-reference-image-size,16x)}.reference .text{color:var(--df-messenger-image-reference-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n      )\n    );overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]);
var DF_MDf = DF_Mc(['<img class="loading" style=', " />"]),
    DF_MEf = DF_Mc(["", ""]),
    DF_MFf = DF_Mc(['<img\n      class="image"\n      src=', '\n      alt="', '" />']),
    DF_MGf = DF_Mc(['<div class="image-wrapper">', "</div>"]),
    DF_MHf = DF_Mc('<a\n      class="image-wrapper focus-outline focus-box"\n      href=";"\n      target=";"\n      rel=";"\n      @click=;>\n      <div class="image-container">; ;</div>\n    </a>'.split(";")),
    DF_MIf = DF_Mc(['<img src="', '" />']),
    DF_MJf = DF_Mc(['<div class="reference">\n      ',
        '\n      <span class="text">', "</span>\n    </div>"
    ]);

function DF_MP(a, b) {
    a = DF_MC.call(this, a, b, "image") || this;
    a.source = "";
    a.accessibilityText = "";
    a.reference = null;
    a.ib = !0;
    a.error = !1;
    a.Tb = a.Tb.bind(a);
    a.Sb = a.Sb.bind(a);
    return a
}
DF_Mf(DF_MP, DF_MC);
DF_MP.D = DF_MC.D;
DF_MP.o = DF_MC.o;
DF_MP.s = DF_MC.s;
DF_MP.h = DF_MC.h;
DF_MP.g = DF_MC.g;
DF_MP.C = DF_MC.C;
DF_MP.i = DF_MC.i;
DF_MP.u = DF_MC.u;
DF_MP.m = DF_MC.m;
DF_MP.v = DF_MC.v;
DF_M = DF_MP.prototype;
DF_M.connectedCallback = function() {
    DF_MC.prototype.connectedCallback.call(this);
    this.source && DF_M3a(this.source, this.Tb, this.Sb)
};
DF_M.render = function() {
    if (!this.source) return null;
    if (this.ib) {
        var a = DF_M_e({
            background: 'url("https://www.gstatic.com/dialogflow-console/common/assets/integrations/dialogflow-messenger/progress_spinner_grey.gif") 50% no-repeat'
        });
        return DF_Mu(DF_MDf, a)
    }
    if (this.error) a = DF_Mu(DF_MEf, this.accessibilityText);
    else if (a = DF_Mu(DF_MFf, this.source, this.accessibilityText), this.reference) {
        if (this.reference) {
            var b = null;
            var c;
            if ((c = this.reference.image) == null ? 0 : c.rawUrl) b = DF_Mu(DF_MIf, this.reference.image.rawUrl);
            b = DF_Mu(DF_MJf, b, this.reference.text)
        } else b = null;
        a = DF_Mu(DF_MHf, this.reference.anchor.href, this.reference.anchor.target, this.reference.anchor.rel, this.Cc, a, b)
    } else a = DF_Mu(DF_MGf, a);
    return a
};
DF_M.Tb = function() {
    this.ib = !1
};
DF_M.Sb = function() {
    this.ib = !1;
    this.error = !0
};
DF_M.Cc = function() {
    var a, b;
    DF_Mm(this, "df-image-clicked", {
        actionLink: (a = this.reference) == null ? void 0 : (b = a.anchor) == null ? void 0 : b.href
    })
};
var DF_MKf = DF_MP;
DF_MKf.j = [DF_MCf, DF_My];
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_MKf.prototype, "source", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_MKf.prototype, "accessibilityText", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_MKf.prototype, "reference", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MKf.prototype, "ib", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MKf.prototype, "error", void 0);
DF_MKf = DF_Mk([DF_Mp("df-image"), DF_Ml("design:paramtypes", [String, String])], DF_MKf);
var DF_MLf = DF_Mq([":host([role=listitem]) .title-card-elements{margin:0 var(--df-messenger-list-inset,0);padding:var(--df-messenger-list-padding,var(--df-messenger-card-padding,16px)\n    )}:host(:not(:first-of-type)) .title-card-elements{padding-top:var(--df-messenger-list-spacing,10px)}:host(:not(:last-of-type)) .title-card-elements{border-bottom:var(--df-messenger-list-border-bottom,var(--df-messenger-default-border)\n    );padding-bottom:var(--df-messenger-list-spacing,10px)}.list-button{background:none;border:none;box-sizing:border-box;cursor:pointer;text-align:left;width:calc(100% - var(--df-messenger-list-inset, 0px)*2)}.list-button.focus-outline:focus-visible:before{margin:0 calc(0px - var(--df-messenger-list-inset, 0px))}"]);
var DF_MMf = DF_Mq([".title-card-elements{display:flex;font-family:var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-default-font-size);padding:var(--df-messenger-card-padding,16px)}.link-wrapper{text-decoration:none}.image{margin-right:16px;max-height:24px;max-width:24px}.title{color:var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n    );font-size:var(--df-messenger-default-font-size);font-weight:700;line-height:22px;margin:0}.subtitle{color:var(--df-messenger-secondary-font-color,var(--df-messenger-default-secondary-font-color)\n    );display:var(--df-messenger-info-subtitle-display,block);line-height:22px}"]);
var DF_MNf = DF_Mc([' <img class="image" src="', '" />']),
    DF_MOf = DF_Mc([' <h3 class="title word-wrap"> ', " </h3>"]),
    DF_MPf = DF_Mc([' <div class="subtitle word-wrap"> ', " </div>"]),
    DF_MQf = DF_Mc([" ", '\n      <div class="text-container"> ', " ", " </div>"]),
    DF_MRf = DF_Mc(' <a\n        @click=";"\n        class="link-wrapper focus-outline focus-box"\n        target=";"\n        href=";"\n        rel=";">\n        <span class="visually-hidden">;</span>\n        <div class="title-card-elements"> ; </div>\n      </a>'.split(";")),
    DF_MSf = DF_Mc([' <div class="title-card-elements"> ', " </div>"]);

function DF_MQ(a, b, c) {
    a = DF_MF.call(this, a, b, c === void 0 ? "info" : c) || this;
    a.title = "";
    a.subtitle = "";
    a.image = null;
    a.anchor = null;
    a.F = a.F.bind(a);
    return a
}
DF_Mf(DF_MQ, DF_MF);
DF_MQ.D = DF_MF.D;
DF_MQ.o = DF_MF.o;
DF_MQ.s = DF_MF.s;
DF_MQ.h = DF_MF.h;
DF_MQ.g = DF_MF.g;
DF_MQ.C = DF_MF.C;
DF_MQ.i = DF_MF.i;
DF_MQ.u = DF_MF.u;
DF_MQ.m = DF_MF.m;
DF_MQ.v = DF_MF.v;
DF_MQ.prototype.render = function() {
    var a, b = ((a = this.image) == null ? 0 : a.rawUrl) ? DF_Mu(DF_MNf, this.image.rawUrl) : void 0;
    return this.M(DF_Mu(DF_MQf, b, this.title ? DF_Mu(DF_MOf, this.title) : void 0, this.subtitle ? DF_Mu(DF_MPf, this.subtitle) : void 0), this.F)
};
DF_MQ.prototype.M = function(a, b) {
    if (this.anchor) {
        var c = DF_Mo(this.languageCode, "opensInANewTab");
        return DF_Mu(DF_MRf, b, this.anchor.target, this.anchor.href, this.anchor.rel, c, a)
    }
    return DF_Mu(DF_MSf, a)
};
DF_MQ.prototype.F = function() {
    var a;
    DF_Mm(this, "df-info-card-clicked", {
        title: this.title,
        actionLink: (a = this.anchor) == null ? void 0 : a.href
    })
};
var DF_MR = DF_MQ;
DF_MR.j = [DF_MMf, DF_My];
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_MR.prototype, "title", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_MR.prototype, "subtitle", void 0);
DF_Mk([DF_Ms({
    l: !1
}), DF_Ml("design:type", Object)], DF_MR.prototype, "image", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_MR.prototype, "anchor", void 0);
DF_MR = DF_Mk([DF_Mp("df-title"), DF_Ml("design:paramtypes", [String, String, Object])], DF_MR);
var DF_MTf = DF_Mc([" <button\n        @click=", '\n        class="list-button focus-outline focus-box title-card-elements">\n        ', "\n      </button>"]);

function DF_MS(a, b) {
    a = DF_MR.call(this, a, b, "list") || this;
    a.event = null;
    return a
}
DF_Mf(DF_MS, DF_MR);
DF_MS.D = DF_MR.D;
DF_MS.o = DF_MR.o;
DF_MS.s = DF_MR.s;
DF_MS.h = DF_MR.h;
DF_MS.g = DF_MR.g;
DF_MS.C = DF_MR.C;
DF_MS.i = DF_MR.i;
DF_MS.u = DF_MR.u;
DF_MS.m = DF_MR.m;
DF_MS.v = DF_MR.v;
DF_MS.prototype.connectedCallback = function() {
    DF_MR.prototype.connectedCallback.call(this);
    this.setAttribute("role", "listitem");
    this.g = this.g.bind(this)
};
DF_MS.prototype.M = function(a) {
    return this.event && !this.anchor ? DF_Mu(DF_MTf, this.g, a) : DF_MR.prototype.M.call(this, a, this.g)
};
DF_MS.prototype.F = function() {
    var a = this;
    return DF_Mh(function(b) {
        return DF_Mg(b, a.g(), 0)
    })
};
DF_MS.prototype.g = function() {
    var a = this,
        b, c, d, e, f, g, h, k, l, m;
    return DF_Mh(function(n) {
        d = ((b = a.event) == null ? void 0 : b.languageCode) || ((c = a.ua) == null ? void 0 : c.languageCode);
        if ((h = DF_Mm(a, "df-list-element-clicked", Object.assign({}, {
                title: a.title,
                event: (e = a.event) == null ? void 0 : e.event
            }, ((f = a.event) == null ? 0 : f.event) ? {
                languageCode: d || void 0
            } : {}, {
                actionLink: (g = a.anchor) == null ? void 0 : g.href
            }))) && ((k = a.event) == null ? 0 : k.event)) return l = DF_Mpd(a.event.event, d || null), DF_Mg(n, (m = a.ua) == null ? void 0 : m.presenter.sendDialogflowRequest(l),
            0);
        n.g = 0
    })
};
var DF_MUf = DF_MS;
DF_MUf.j = [DF_MLf, DF_MMf, DF_My];
DF_Mk([DF_Ms({
    type: Object
}), DF_Ml("design:type", Object)], DF_MUf.prototype, "event", void 0);
DF_MUf = DF_Mk([DF_Mp("df-list-element"), DF_Ml("design:paramtypes", [String, String])], DF_MUf);
var DF_MVf = DF_Mc([' <style>\n        @import url(https://www.gstatic.com/external_hosted/highlightjs/styles/googlecode.css);\n      </style>\n      <span class="visually-hidden">\n        ', '\n      </span>\n      <div class="message bot-message markdown">\n        ', "\n      </div>"]);

function DF_MT(a, b) {
    a = DF_MC.call(this, a, b, "markdown") || this;
    a.markdown = null;
    return a
}
DF_Mf(DF_MT, DF_MC);
DF_MT.D = DF_MC.D;
DF_MT.o = DF_MC.o;
DF_MT.s = DF_MC.s;
DF_MT.h = DF_MC.h;
DF_MT.g = DF_MC.g;
DF_MT.C = DF_MC.C;
DF_MT.i = DF_MC.i;
DF_MT.u = DF_MC.u;
DF_MT.m = DF_MC.m;
DF_MT.v = DF_MC.v;
DF_MT.prototype.render = function() {
    return this.markdown ? DF_Mu(DF_MVf, DF_Mo(this.languageCode, "agentSays"), DF_MRe(this.markdown)) : null
};
var DF_MWf = DF_MT;
DF_MWf.j = [DF_Mxf, DF_MNe, DF_Myf, DF_My];
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_MWf.prototype, "markdown", void 0);
DF_MWf = DF_Mk([DF_Mp("df-markdown-message"), DF_Ml("design:paramtypes", [String, String])], DF_MWf);
var DF_MXf = DF_Mc(["<br />"]),
    DF_MYf = DF_Mc([" ", " ", ""]),
    DF_MZf = DF_Mc([" ", ""]),
    DF_M_f = DF_Mc([' <span class="visually-hidden">', '</span>\n      <div class="message ', '">\n        ', "\n      </div>"]);

function DF_MU(a, b) {
    a = DF_MC.call(this, a, b, "text") || this;
    a.text = "";
    a.isBot = !1;
    a.screenReaderTextKey = void 0;
    return a
}
DF_Mf(DF_MU, DF_MC);
DF_MU.D = DF_MC.D;
DF_MU.o = DF_MC.o;
DF_MU.s = DF_MC.s;
DF_MU.h = DF_MC.h;
DF_MU.g = DF_MC.g;
DF_MU.C = DF_MC.C;
DF_MU.i = DF_MC.i;
DF_MU.u = DF_MC.u;
DF_MU.m = DF_MC.m;
DF_MU.v = DF_MC.v;

function DF_M0f(a) {
    var b = a.split("\n");
    return DF_Mu(DF_MZf, b.map(function(c, d) {
        return DF_Mu(DF_MYf, c, d < b.length - 1 ? DF_Mu(DF_MXf) : null)
    }))
}
DF_MU.prototype.render = function() {
    var a = this.screenReaderTextKey ? DF_Mo(this.languageCode, this.screenReaderTextKey) : DF_Mo(this.languageCode, this.isBot ? "agentSays" : "iSay");
    return DF_Mu(DF_M_f, a, this.isBot ? "bot-message" : "user-message", DF_M0f(this.text))
};
var DF_M1f = DF_MU;
DF_M1f.j = [DF_Myf, DF_My];
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_M1f.prototype, "text", void 0);
DF_Mk([DF_Ms({
    type: Boolean,
    K: !0
}), DF_Ml("design:type", Object)], DF_M1f.prototype, "isBot", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_M1f.prototype, "screenReaderTextKey", void 0);
DF_M1f = DF_Mk([DF_Mp("df-text-message"), DF_Ml("design:paramtypes", [String, String])], DF_M1f);
var DF_M2f = DF_Mq([":host(:only-child) .wrapper{padding:var(--df-messenger-video-inner-padding,0)}:host(:not(.markdown):not(:only-child)) .embed,:host(:not(:only-child)) .link,:host(:not(:only-child)) .video{border:var(--df-messenger-video-inner-border,none);border-radius:var(--df-messenger-video-inner-border-radius,0);overflow:hidden}:host(:not(:only-child)) .wrapper{padding:var(--df-messenger-card-padding,16px)}:host(.markdown) .wrapper{display:inline-block;padding:var(--df-messenger-card-padding,16px);padding-left:0;padding-right:0}:host(.markdown:first-child) .wrapper{padding-top:0}:host(.markdown:last-child) .wrapper{padding-bottom:0}:host(.markdown) .embed,:host(:not(:only-child)) .embed,:host(:not(:only-child)) .link,:host(:not(:only-child)) .video{border:var(--df-messenger-video-inner-border,var(--df-messenger-video-border,var(--df-messenger-default-border)\n      )\n    );border-radius:var(--df-messenger-video-inner-border-radius,var(--df-messenger-video-border-radius,var(--df-messenger-default-border-radius)\n      )\n    );overflow:hidden}.link{display:inline-block;position:relative;text-decoration:none}.thumbnail,video{height:var(--df-messenger-video-height,auto);width:var(--df-messenger-video-width,auto)}.thumbnail,iframe,video{display:block;max-width:100%}iframe{height:var(--df-messenger-video-embed-height,var(--df-messenger-video-height,315px)\n    );width:var(--df-messenger-video-embed-width,var(--df-messenger-video-width,560px)\n    )}.title{align-items:center;color:var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n    );display:flex;font-family:var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n    );padding:12px 16px}.youtube svg{height:24px;margin-right:8px;width:24px}.play{background:#000;border-radius:999px;height:36px;left:50%;opacity:.8;padding:8px;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:36px}.play svg{fill:#fff;height:inherit;width:inherit}"]);

function DF_M3f(a) {
    var b, c = (b = a.anchor) != null ? b : a.actionLink ? {
        href: a.actionLink
    } : null;
    return c ? new DF_M4f(c) : null
}

function DF_M5f(a) {
    var b, c = (b = a.anchor) != null ? b : a.actionLink ? {
        href: a.actionLink
    } : null;
    return c ? new DF_M4f(c) : null
}

function DF_M4f(a) {
    this.href = (a == null ? void 0 : a.href) || "";
    this.target = (a == null ? void 0 : a.target) || "_blank";
    this.rel = (a == null ? void 0 : a.rel) || "noopener noreferrer"
};
var DF_M6f = DF_Mc([' <div class="wrapper">\n        <div class="video">\n          <video src="', '" controls>', "</video>\n          ", "\n        </div>\n      </div>"]),
    DF_M7f = DF_Mc(["https://www.youtube.com/embed"]),
    DF_M8f = DF_Mc([' <div class="wrapper">\n        <div class="embed">\n          <iframe\n            src="', '"\n            title="', '"\n            frameborder="0"\n            allowfullscreen></iframe>\n          ', "\n        </div>\n      </div>"]),
    DF_M9f = DF_Mc(' <div class="wrapper">\n      <a\n        class="link"\n        href=";"\n        target=";"\n        rel=";">\n        <span class="visually-hidden">;</span>\n        <img class="thumbnail" src=";" />\n        ;\n        <div class="play">;</div>\n      </a>\n    </div>'.split(";")),
    DF_M$f = DF_Mc(['<div class="title">', "</div>"]),
    DF_Mag = DF_Mc([' <div class="title youtube">\n        ', "", "\n      </div>"]);

function DF_MV(a, b) {
    a = DF_MC.call(this, a, b, "video") || this;
    a.videoType = null;
    a.anchor = null;
    a.source = null;
    a.embeddedPlayer = null;
    a.thumbnail = null;
    a.videoTitle = null;
    return a
}
DF_Mf(DF_MV, DF_MC);
DF_MV.D = DF_MC.D;
DF_MV.o = DF_MC.o;
DF_MV.s = DF_MC.s;
DF_MV.h = DF_MC.h;
DF_MV.g = DF_MC.g;
DF_MV.C = DF_MC.C;
DF_MV.i = DF_MC.i;
DF_MV.u = DF_MC.u;
DF_MV.m = DF_MC.m;
DF_MV.v = DF_MC.v;
DF_MV.prototype.connectedCallback = function() {
    DF_MC.prototype.connectedCallback.call(this);
    var a = this.dataset.markdownUrl;
    a && (this.videoType = "link", this.anchor = new DF_M4f({
        href: a
    }), this.embeddedPlayer = "youtube", this.classList.add("markdown"))
};
DF_MV.prototype.render = function() {
    if (this.videoType === "raw") return DF_Mu(DF_M6f, this.source, "Your browser does not support the video tag.", DF_Mbg(this));
    if (this.videoType === "link" && this.embeddedPlayer === "youtube") {
        var a = DF_Mzc(DF_M7f);
        var b = DF_M$a(this.anchor.href);
        var c = DF_M9b(a).toString();
        var d = c.split(/[?#]/);
        a = /[?]/.test(c) ? "?" + d[1] : "";
        var e = d[0];
        c = /[#]/.test(c) ? "#" + (a ? d[2] : d[1]) : "";
        b = e + (e.slice(-1) === "/" ? "" : "/") + encodeURIComponent(b);
        b = DF_M$b(b + a + c);
        return DF_Mu(DF_M8f, b, this.title, DF_Mbg(this))
    }
    b =
        DF_Mo(this.languageCode, "opensInANewTab");
    return DF_Mu(DF_M9f, this.anchor.href, this.anchor.target, this.anchor.rel, b, this.thumbnail.rawUrl, DF_Mbg(this), DF_M8d)
};

function DF_Mbg(a) {
    return a.videoTitle ? DF_Mu(DF_M$f, a.videoTitle) : a.videoType === "link" && DF_M9a.test(a.anchor.href) ? DF_Mu(DF_Mag, DF_M9d, a.dataset.markdownTitle || "Youtube video") : null
}
DF_Ma.Object.defineProperties(DF_MV.prototype, {
    F: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            this.dataset.markdownUrl = a
        }
    },
    g: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            this.dataset.markdownTitle = a
        }
    }
});
var DF_Mcg = DF_MV;
DF_Mcg.j = [DF_M2f, DF_My];
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_Mcg.prototype, "videoType", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_Mcg.prototype, "anchor", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_Mcg.prototype, "source", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_Mcg.prototype, "embeddedPlayer", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_Mcg.prototype, "thumbnail", void 0);
DF_Mk([DF_Ms(), DF_Ml("design:type", Object)], DF_Mcg.prototype, "videoTitle", void 0);
DF_Mcg = DF_Mk([DF_Mp("df-video"), DF_Ml("design:paramtypes", [String, String])], DF_Mcg);

function DF_Mdg(a) {
    if (!a) return null;
    var b;
    return ((b = a.src) == null ? 0 : b.rawUrl) ? {
        rawUrl: a.src.rawUrl
    } : a.rawUrl ? {
        rawUrl: a.rawUrl
    } : null
};
var DF_Meg = DF_Mc(['<img\n          src="', '"\n          aria-hidden="true"\n          alt="', '" />']),
    DF_Mfg = DF_Mc([' <span role="listitem" class="chip">\n      <button\n        class="focus-outline"\n        @click=', ">\n        ", '\n        <span class="text word-wrap">', "</span>\n      </button>\n    </span>"]),
    DF_Mgg = DF_Mc(['<img\n          src="', '"\n          aria-hidden="true"\n          alt="', '" />']),
    DF_Mhg = DF_Mc(' <span role="listitem" class="chip">\n      <a\n        @click=;\n        class="chip-link focus-outline"\n        href=";"\n        target=";"\n        rel=";">\n        <span class="visually-hidden">;</span>\n        ;\n        <span class="text word-wrap">;</span>\n        <span class="icon">;</span>\n      </a>\n    </span>'.split(";"));

function DF_Mig(a, b, c, d) {
    this.text = a;
    this.image = b;
    this.accessibilityText = c;
    this.mode = d
}
DF_Mig.prototype.render = function(a, b) {
    var c = this,
        d, e = ((d = this.image) == null ? 0 : d.rawUrl) ? DF_Mu(DF_Meg, this.image.rawUrl, this.accessibilityText || "") : null;
    return DF_Mu(DF_Mfg, function() {
        a.clicked = !0;
        b == null || b.presenter.storeMessageClicked(a.uniqueId);
        DF_Mm(a, "df-chip-clicked", {
            text: c.text
        });
        c.mode === "blocking" && b && (b.isWaitingForElement = !1);
        b == null || b.renderCustomText(c.text, !1);
        b == null || b.presenter.sendQuery(c.text)
    }, e, this.text)
};

function DF_Mjg(a, b, c, d, e) {
    this.text = a;
    this.anchor = b;
    this.image = c;
    this.accessibilityText = d;
    this.mode = e
}
DF_Mjg.prototype.render = function(a, b) {
    var c = this,
        d = DF_Mo(a.languageCode, "opensInANewTab"),
        e, f = ((e = this.image) == null ? 0 : e.rawUrl) ? DF_Mu(DF_Mgg, this.image.rawUrl, this.accessibilityText || "") : null;
    return DF_Mu(DF_Mhg, function() {
        DF_Mm(a, "df-chip-clicked", {
            text: c.text,
            actionLink: c.anchor.href
        });
        c.mode === "blocking" && b && (b.isWaitingForElement = !1)
    }, this.anchor.href, this.anchor.target, this.anchor.rel, d, f, this.text, DF_M7d)
};
var DF_Mkg = DF_Mq([":host{font-size:0}:host(:only-child) .code-block-wrapper{padding:var(--df-messenger-code-block-inner-padding,0)}:host(:only-child) .code-block-wrapper{border:var(--df-messenger-image-code-block-border,none);border-radius:var(--df-messenger-code-block-inner-border-radius,0)}:host(:not(.only-child)) .code-block-wrapper{border:var(--df-messenger-code-block-inner-border,var(--df-messenger-code-block-border,var(--df-messenger-default-border)\n      )\n    );border-radius:var(--df-messenger-code-block-inner-border-radius,var(--df-messenger-code-block-border-radius,var(--df-messenger-default-border-radius)\n      )\n    )}.code-block-wrapper{box-sizing:border-box;color:var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n    );display:inline-block;font-family:var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n    );max-width:100%;overflow:hidden;width:var(--df-messenger-code-block-width,auto)}.header{background:var(--df-messenger-code-block-header-background,#fff);border-bottom:var(--df-messenger-code-block-border,var(--df-messenger-default-border)\n    );display:var(--df-messenger-code-block-header-display,block);font-size:var(--df-messenger-code-block-header-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n      )\n    );font-weight:var(--df-messenger-code-block-header-font-weight,500);padding:var(--df-messenger-code-block-header-padding,12px 16px)}.footer{align-items:center;background:var(--df-messenger-code-block-footer-background,#fff);border-top:var(--df-messenger-code-block-border,var(--df-messenger-default-border)\n    );box-sizing:border-box;display:flex;font-size:var(--df-messenger-code-block-footer-font-size,12px);font-weight:var(--df-messenger-code-block-footer-font-weight,normal);justify-content:space-between;min-height:49px;padding:var(--df-messenger-code-block-footer-padding,8px 16px)}.footer .coding-language{display:var(--df-messenger-code-block-footer-coding-language-display,none)}.footer .caution-text{display:var(--df-messenger-code-block-footer-caution-text-display,block);font-style:var(--df-messenger-code-block-footer-caution-text-font-style,unset)}.code{background:var(--df-messenger-code-block-code-background,#f2f2f2);font-size:var(--df-messenger-code-block-code-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n      )\n    );overflow-x:auto;padding:var(--df-messenger-code-block-code-padding,16px)}.copy-button{fill:var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color)\n    );margin:-12px -12px -12px 0;padding:12px}.copy-button.action-button.active{background-color:rgba(0,0,0,.33);transition:background-color .2s}"]);
var DF_Mlg = DF_Mc(['<div>\n      <div class="code-block-wrapper">\n        ', '\n        <div class="code">\n          <slot></slot>\n        </div>\n        ', "\n      </div>\n    </div>"]),
    DF_Mmg = DF_Mc(['<div class="header">', "</div>"]),
    DF_Mng = DF_Mc('<div class="footer">\n      <span class="coding-language">;</span>\n      <span class="caution-text">;</span>\n      <button\n        class="copy-button action-button focus-outline"\n        aria-label=";"\n        @click=;>\n        ;\n      </button>\n    </div>'.split(";"));

function DF_MW() {
    return DF_Mw.apply(this, arguments) || this
}
DF_Mf(DF_MW, DF_Mw);
DF_MW.D = DF_Mw.D;
DF_MW.o = DF_Mw.o;
DF_MW.s = DF_Mw.s;
DF_MW.h = DF_Mw.h;
DF_MW.g = DF_Mw.g;
DF_MW.C = DF_Mw.C;
DF_MW.i = DF_Mw.i;
DF_MW.u = DF_Mw.u;
DF_MW.m = DF_Mw.m;
DF_MW.v = DF_Mw.v;
DF_MW.prototype.connectedCallback = function() {
    DF_Mw.prototype.connectedCallback.call(this);
    if (this.classList.contains("only-child")) {
        var a;
        (a = this.parentElement) == null || a.classList.add("code-block")
    }
};
DF_MW.prototype.render = function() {
    var a = (a = this.g) ? DF_Mu(DF_Mmg, a) : null;
    var b, c = DF_Mo((b = this.F) == null ? void 0 : b.languageCode, "useCodeWithCautionText"),
        d;
    b = DF_Mo((d = this.F) == null ? void 0 : d.languageCode, "copyCodeAriaLabel");
    return DF_Mu(DF_Mlg, a, DF_Mu(DF_Mng, this.g || "", c, b, this.M, DF_M5d))
};
DF_MW.prototype.M = function() {
    if (this.Yb.length !== 0) {
        var a = this.Yb[0].textContent;
        if (a) {
            var b = this.T.querySelector(".copy-button");
            b == null || b.classList.add("active");
            setTimeout(function() {
                b == null || b.classList.remove("active")
            }, 200);
            navigator.clipboard.writeText(a)
        }
    }
};
DF_Ma.Object.defineProperties(DF_MW.prototype, {
    g: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            this.dataset.language = a
        },
        get: function() {
            var a;
            return (a = this.dataset.language) != null ? a : ""
        }
    },
    F: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.closest("df-markdown-message")
        }
    }
});
var DF_Mog = DF_MW;
DF_Mog.G = "language";
DF_Mog.j = [DF_Mkg, DF_My];
DF_Mk([function(a) {
    return function(b, c) {
        var d = a != null ? a : {},
            e = d.slot,
            f = d.Td,
            g = "slot" + (e ? "[name=" + e + "]" : ":not([name])");
        return DF_MJb(b, c, {
            get: function() {
                var h, k, l, m = (l = (k = (h = this.T) == null ? void 0 : h.querySelector(g)) == null ? void 0 : k.assignedElements(a)) != null ? l : [];
                return f === void 0 ? m : m.filter(function(n) {
                    return n.matches(f)
                })
            }
        })
    }
}(), DF_Ml("design:type", Array)], DF_Mog.prototype, "Yb", void 0);
DF_Mog = DF_Mk([DF_Mp("df-code-block")], DF_Mog);

function DF_Mpg(a, b) {
    if (a.nodeType === 1) {
        var c = a.tagName;
        if (c === "SCRIPT" || c === "STYLE") throw Error("");
    }
    a.innerHTML = DF_M0b(b)
};
var DF_Mqg = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

function DF_Mrg(a) {
    var b = DF_Mzc(DF_Msg);
    if (b instanceof DF_M8b) a.href = DF_M9b(b).toString(), a.rel = "stylesheet";
    else {
        if (DF_Mqg.indexOf("stylesheet") === -1) throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');
        b instanceof DF_Mac ? b = DF_Mcc(b) : b = DF_Mhc.test(b) ? b : void 0;
        b !== void 0 && (a.href = b, a.rel = "stylesheet")
    }
};

function DF_Mtg(a, b) {
    a.src = DF_M9b(b);
    var c, d;
    (c = (b = (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
};
var DF_Mug = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    DF_Mvg = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = typeof a === "string" ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    DF_Mwg = Array.prototype.map ? function(a, b) {
        return Array.prototype.map.call(a,
            b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    };

function DF_Mxg(a) {
    return Array.prototype.concat.apply([], arguments)
}

function DF_Myg(a) {
    var b = a.length;
    if (b > 0) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function DF_Mzg(a, b) {
    return DF_Mxg.apply([], DF_Mwg(a, b))
};

function DF_MAg(a) {
    this.Ta = a;
    this.lc = "CodeBlock"
}
DF_MAg.prototype.hc = function(a) {
    return DF_MBg(a, "df-code-block", ["data-language"])
};
DF_MAg.prototype.sc = function(a) {
    var b;
    return a.nodeType === Node.ELEMENT_NODE && a.nodeName.toLowerCase() === "code" && ((b = a.parentNode) == null ? void 0 : b.nodeName.toLowerCase()) === "pre"
};
DF_MAg.prototype.gb = function(a) {
    if (a.textContent) {
        var b = globalThis,
            c = a.classList[0];
        if (c == null ? 0 : c.startsWith("language-")) var d = c.substring(9);
        if (b.hljs && d) try {
            var e = b.hljs.getLanguage(d).name,
                f = b.hljs.highlight(d, a.textContent);
            DF_Mpg(a, this.Ta.da(f.value));
            DF_MCg(a, e)
        } catch (h) {
            console.warn("DF-MESSENGER", "hljs", h)
        } else {
            var g;
            d && (g = d[0].toUpperCase() + d.substring(1));
            DF_MCg(a, g)
        }
    }
};

function DF_MCg(a, b) {
    var c = a.parentElement,
        d = new DF_Mog;
    b && (d.g = b);
    var e, f;
    ((e = a.parentNode) == null ? void 0 : (f = e.parentNode) == null ? void 0 : f.childElementCount) === 1 && d.classList.add("only-child");
    b = document.createElement("pre");
    b.classList.add("code-block");
    b.appendChild(a);
    d.appendChild(b);
    c.replaceWith(d)
};

function DF_MDg() {
    this.lc = "Youtube"
}
DF_MDg.prototype.hc = function(a) {
    return DF_MBg(a, "df-video", ["data-markdown-url", "data-markdown-title"])
};
DF_MDg.prototype.sc = function(a) {
    return a.nodeType === Node.ELEMENT_NODE && a.nodeName.toLowerCase() === "a"
};
DF_MDg.prototype.gb = function(a) {
    var b = a.getAttribute("href");
    if (b && DF_M$a(b)) {
        var c = new DF_Mcg("", "");
        c.F = b;
        a.textContent && (c.g = a.textContent);
        a.replaceWith(c)
    }
};

function DF_MEg() {
    return null
};
var DF_MFg = {
        "* ARIA-CHECKED": !0,
        "* ARIA-COLCOUNT": !0,
        "* ARIA-COLINDEX": !0,
        "* ARIA-CONTROLS": !0,
        "* ARIA-DESCRIBEDBY": !0,
        "* ARIA-DISABLED": !0,
        "* ARIA-EXPANDED": !0,
        "* ARIA-GOOG-EDITABLE": !0,
        "* ARIA-HASPOPUP": !0,
        "* ARIA-HIDDEN": !0,
        "* ARIA-LABEL": !0,
        "* ARIA-LABELLEDBY": !0,
        "* ARIA-MULTILINE": !0,
        "* ARIA-MULTISELECTABLE": !0,
        "* ARIA-ORIENTATION": !0,
        "* ARIA-PLACEHOLDER": !0,
        "* ARIA-READONLY": !0,
        "* ARIA-REQUIRED": !0,
        "* ARIA-ROLEDESCRIPTION": !0,
        "* ARIA-ROWCOUNT": !0,
        "* ARIA-ROWINDEX": !0,
        "* ARIA-SELECTED": !0,
        "* ABBR": !0,
        "* ACCEPT": !0,
        "* ACCESSKEY": !0,
        "* ALIGN": !0,
        "* ALT": !0,
        "* AUTOCOMPLETE": !0,
        "* AXIS": !0,
        "* BGCOLOR": !0,
        "* BORDER": !0,
        "* CELLPADDING": !0,
        "* CELLSPACING": !0,
        "* CHAROFF": !0,
        "* CHAR": !0,
        "* CHECKED": !0,
        "* CLEAR": !0,
        "* COLOR": !0,
        "* COLSPAN": !0,
        "* COLS": !0,
        "* COMPACT": !0,
        "* CONTROLS": !0,
        "* CONTROLSLIST": !0,
        "* COORDS": !0,
        "* DATETIME": !0,
        "* DIR": !0,
        "* DISABLED": !0,
        "* ENCTYPE": !0,
        "* FACE": !0,
        "* FRAME": !0,
        "* HEIGHT": !0,
        "* HREFLANG": !0,
        "* HSPACE": !0,
        "* ISMAP": !0,
        "* LABEL": !0,
        "* LANG": !0,
        "* MAX": !0,
        "* MAXLENGTH": !0,
        "* METHOD": !0,
        "* MULTIPLE": !0,
        "* NOHREF": !0,
        "* NOSHADE": !0,
        "* NOWRAP": !0,
        "* OPEN": !0,
        "* READONLY": !0,
        "* REQUIRED": !0,
        "* REL": !0,
        "* REV": !0,
        "* ROLE": !0,
        "* ROWSPAN": !0,
        "* ROWS": !0,
        "* RULES": !0,
        "* SCOPE": !0,
        "* SELECTED": !0,
        "* SHAPE": !0,
        "* SIZE": !0,
        "* SPAN": !0,
        "* START": !0,
        "* SUMMARY": !0,
        "* TABINDEX": !0,
        "* TITLE": !0,
        "* TYPE": !0,
        "* VALIGN": !0,
        "* VALUE": !0,
        "* VSPACE": !0,
        "* WIDTH": !0
    },
    DF_MGg = {
        "* USEMAP": !0,
        "* ACTION": !0,
        "* CITE": !0,
        "* HREF": !0,
        "* LONGDESC": !0,
        "* SRC": !0,
        "LINK HREF": !0,
        "* FOR": !0,
        "* HEADERS": !0,
        "* NAME": !0,
        "A TARGET": !0,
        "* CLASS": !0,
        "* ID": !0,
        "* STYLE": !0
    };
var DF_MHg, DF_MIg;
a: {
    for (var DF_MJg = ["CLOSURE_FLAGS"], DF_MKg = DF_Mj, DF_MLg = 0; DF_MLg < DF_MJg.length; DF_MLg++)
        if (DF_MKg = DF_MKg[DF_MJg[DF_MLg]], DF_MKg == null) {
            DF_MIg = null;
            break a
        }
    DF_MIg = DF_MKg
}
var DF_MMg = DF_MIg && DF_MIg[610401301];
DF_MHg = DF_MMg != null ? DF_MMg : !1;

function DF_MNg() {
    var a = DF_Mj.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var DF_MOg, DF_MPg = DF_Mj.navigator;
DF_MOg = DF_MPg ? DF_MPg.userAgentData || null : null;

function DF_MQg(a) {
    return DF_MHg ? DF_MOg ? DF_MOg.brands.some(function(b) {
        return (b = b.brand) && b.indexOf(a) != -1
    }) : !1 : !1
}

function DF_MX(a) {
    return DF_MNg().indexOf(a) != -1
};

function DF_MRg() {
    return DF_MHg ? !!DF_MOg && DF_MOg.brands.length > 0 : !1
}

function DF_MSg() {
    return DF_MRg() ? DF_MQg("Chromium") : (DF_MX("Chrome") || DF_MX("CriOS")) && !(DF_MRg() ? 0 : DF_MX("Edge")) || DF_MX("Silk")
};
var DF_MTg = DF_MRg() ? !1 : DF_MX("Trident") || DF_MX("MSIE"),
    DF_MUg = DF_MNg().toLowerCase().indexOf("webkit") != -1 && !DF_MX("Edge");

function DF_MVg(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
var DF_MWg = {};

function DF_MXg(a) {
    var b = DF_MWg.hasOwnProperty(a) ? DF_MWg[a] : null;
    if (b) return b;
    Object.keys(DF_MWg).length > 65536 && (DF_MWg = {});
    var c = [0, 0, 0, 0],
        d = RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
    b = DF_MYg(a, RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g"));
    b = DF_MYg(b, d);
    b = DF_MYg(b, /\\./g);
    b = b.replace(RegExp(":not\\(([^\\)]*)\\)", "g"), "     $1 ");
    b = b.replace(RegExp("{[^]*", "gm"), "");
    b = DF_MZg(b, c, RegExp("(\\[[^\\]]+\\])", "g"), 2);
    b = DF_MZg(b, c, RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)", "g"), 1);
    b = DF_MZg(b, c, RegExp("(\\.[^\\s\\+>~\\.\\[:]+)", "g"),
        2);
    b = DF_MZg(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
    b = DF_MZg(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
    b = DF_MZg(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    DF_MZg(b, c, /([^\s\+>~\.\[:]+)/g, 3);
    b = c;
    return DF_MWg[a] = b
}

function DF_MZg(a, b, c, d) {
    return a.replace(c, function(e) {
        b[d] += 1;
        return Array(e.length + 1).join(" ")
    })
}

function DF_MYg(a, b) {
    return a.replace(b, function(c) {
        return Array(c.length + 1).join("A")
    })
};
var DF_M_g = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    },
    DF_M0g = /[\n\f\r"'()*<>]/g,
    DF_M1g = {
        "\n": "%0a",
        "\f": "%0c",
        "\r": "%0d",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "*": "%2a",
        "<": "%3c",
        ">": "%3e"
    };

function DF_M2g(a) {
    return DF_M1g[a]
}

function DF_M3g(a, b, c) {
    b = DF_M6b(b);
    if (b == "") return null;
    var d = String(b.slice(0, 4)).toLowerCase();
    if (("url(" < d ? -1 : "url(" == d ? 0 : 1) == 0) {
        if (!b.endsWith(")") || (b ? b.split("(").length - 1 : 0) > 1 || (b ? b.split(")").length - 1 : 0) > 1 || !c) a = null;
        else {
            a: for (b = b.substring(4, b.length - 1), d = 0; d < 2; d++) {
                var e = "\"'".charAt(d);
                if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                    b = b.substring(1, b.length - 1);
                    break a
                }
            }
            a = c ? (a = c(b, a)) && DF_Mcc(a) != DF_Mbc.toString() ? 'url("' + DF_Mcc(a).replace(DF_M0g, DF_M2g) + '")' : null : null
        }
        return a
    }
    if (b.indexOf("(") >
        0) {
        if (/"|'/.test(b)) return null;
        for (a = /([\-\w]+)\(/g; c = a.exec(b);)
            if (!(c[1].toLowerCase() in DF_M_g)) return null
    }
    return b
};
!DF_MX("Android") || DF_MSg();
DF_MSg();
DF_MX("Safari") && (DF_MSg() || (DF_MRg() ? 0 : DF_MX("Coast")) || (DF_MRg() ? 0 : DF_MX("Opera")) || (DF_MRg() ? 0 : DF_MX("Edge")) || (DF_MRg() ? DF_MQg("Microsoft Edge") : DF_MX("Edg/")) || DF_MRg() && DF_MQg("Opera"));

function DF_M4g(a, b) {
    a = DF_Mj[a];
    return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
}

function DF_M5g(a, b) {
    return (a = DF_Mj[a]) && a.prototype && a.prototype[b] || null
}
var DF_M6g = DF_M4g("Element", "attributes") || DF_M4g("Node", "attributes"),
    DF_M7g = DF_M5g("Element", "hasAttribute"),
    DF_M8g = DF_M5g("Element", "getAttribute"),
    DF_M9g = DF_M5g("Element", "setAttribute"),
    DF_M$g = DF_M5g("Element", "removeAttribute");
DF_M4g("Element", "innerHTML") || DF_M4g("HTMLElement", "innerHTML");
var DF_Mah = DF_M5g("Element", "getElementsByTagName"),
    DF_Mbh = DF_M5g("Element", "matches") || DF_M5g("Element", "msMatchesSelector"),
    DF_Mch = DF_M4g("Node", "nodeName"),
    DF_Mdh = DF_M4g("Node", "nodeType"),
    DF_Meh = DF_M4g("Node", "parentNode");
DF_M4g("Node", "childNodes");
var DF_Mfh = DF_M4g("HTMLElement", "style") || DF_M4g("Element", "style"),
    DF_Mgh = DF_M4g("HTMLStyleElement", "sheet"),
    DF_Mhh = DF_M5g("CSSStyleDeclaration", "getPropertyValue"),
    DF_Mih = DF_M5g("CSSStyleDeclaration", "setProperty"),
    DF_Mjh = DF_M4g("Element", "namespaceURI") || DF_M4g("Node", "namespaceURI");

function DF_Mkh(a, b, c, d) {
    if (a) return a.apply(b);
    a = b[c];
    if (!d(a)) throw Error("Clobbering detected");
    return a
}

function DF_Mlh(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (DF_MTg && document.documentMode < 10) {
        if (!b[c].call) throw Error("IE Clobbering detected");
    } else if (typeof b[c] != "function") throw Error("Clobbering detected");
    return b[c].apply(b, d)
}

function DF_Mmh(a) {
    return DF_Mkh(DF_M6g, a, "attributes", function(b) {
        return b instanceof NamedNodeMap
    })
}

function DF_Mnh(a, b, c) {
    try {
        DF_Mlh(DF_M9g, a, "setAttribute", [b, c])
    } catch (d) {
        if (d.message.indexOf("A security problem occurred") == -1) throw Error('Failed to set attribute "' + b + '" on element: <' + a.tagName + ">: " + d.message, {
            cause: d
        });
    }
}

function DF_Moh(a) {
    return DF_Mkh(DF_Mfh, a, "style", function(b) {
        return b instanceof CSSStyleDeclaration
    })
}

function DF_Mph(a) {
    return DF_Mkh(DF_Mgh, a, "sheet", function(b) {
        return b instanceof CSSStyleSheet
    })
}

function DF_Mqh(a) {
    return DF_Mkh(DF_Mch, a, "nodeName", function(b) {
        return typeof b == "string"
    })
}

function DF_Mrh(a) {
    return DF_Mkh(DF_Mdh, a, "nodeType", function(b) {
        return typeof b == "number"
    })
}

function DF_Msh(a) {
    return DF_Mkh(DF_Meh, a, "parentNode", function(b) {
        return !(b && typeof b.name == "string" && b.name && b.name.toLowerCase() == "parentnode")
    })
}

function DF_Mth(a, b) {
    return DF_Mlh(DF_Mhh, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || ""
}

function DF_Muh(a, b, c) {
    DF_Mlh(DF_Mih, a, a.setProperty ? "setProperty" : "setAttribute", [b, c])
}

function DF_Mvh(a) {
    return DF_Mkh(DF_Mjh, a, "namespaceURI", function(b) {
        return typeof b == "string"
    })
};
var DF_Mwh = RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)", "g"),
    DF_Mxh = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    };

function DF_Myh(a, b, c) {
    var d = [];
    DF_Mzh(DF_Myg(a.cssRules)).forEach(function(e) {
        if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
        if (!(b && DF_MTg && document.documentMode == 10 && /\\['"]/.test(e.selectorText))) {
            var f = b ? e.selectorText.replace(DF_Mwh, "#" + b + " $1") : e.selectorText,
                g = d.push;
            e = DF_MAh(e.style, c);
            if (f.indexOf("<") != -1) throw Error("Selector does not allow '<', got: " + f);
            var h = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(h)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " +
                f);
            a: {
                for (var k = {
                        "(": ")",
                        "[": "]"
                    }, l = [], m = 0; m < h.length; m++) {
                    var n = h[m];
                    if (k[n]) l.push(k[n]);
                    else {
                        b: {
                            var p = void 0;
                            for (p in k)
                                if (k[p] == n) {
                                    p = !0;
                                    break b
                                }
                            p = !1
                        }
                        if (p && l.pop() != n) {
                            h = !1;
                            break a
                        }
                    }
                }
                h = l.length == 0
            }
            if (!h) throw Error("() and [] in selector must be balanced, got: " + f);
            if (!(e instanceof DF_Mic)) {
                h = "";
                for (var q in e)
                    if (Object.prototype.hasOwnProperty.call(e, q)) {
                        if (!/^[-_a-zA-Z0-9]+$/.test(q)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + q);
                        k = e[q];
                        k != null && (k = Array.isArray(k) ? k.map(DF_Mlc).join(" ") :
                            DF_Mlc(k), h += q + ":" + k + ";")
                    }
                e = h ? new DF_Mic(h) : DF_Mkc
            }
            f = f + "{" + DF_Mjc(e).replace(/</g, "\\3C ") + "}";
            g.call(d, new DF_Mvc(f, DF_Muc))
        }
    });
    return DF_Mwc(d)
}

function DF_Mzh(a) {
    return a.filter(function(b) {
        return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
    })
}

function DF_MBh(a, b, c) {
    a = DF_MCh("<style>" + a + "</style>");
    return a == null || a.sheet == null ? DF_Myc : DF_Myh(a.sheet, b != void 0 ? b : null, c)
}

function DF_MCh(a) {
    a = DF_MZb("<html><head></head><body>" + a + "</body></html>");
    return (new DOMParser).parseFromString(DF_M0b(a), "text/html").body.children[0]
}

function DF_MAh(a, b) {
    if (!a) return DF_Mkc;
    var c = document.createElement("div").style;
    DF_MDh(a).forEach(function(d) {
        var e = DF_MUg && d in DF_Mxh ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
        e.lastIndexOf("--", 0) != 0 && e.lastIndexOf("var", 0) != 0 && (d = DF_Mth(a, d), d = DF_M3g(e, d, b), d != null && DF_Muh(c, e, d))
    });
    return new DF_Mic(c.cssText || "")
}

function DF_MEh(a) {
    var b = Array.from(DF_Mlh(DF_Mah, a, "getElementsByTagName", ["STYLE"])),
        c = DF_Mzg(b, function(g) {
            return DF_Myg(DF_Mph(g).cssRules)
        });
    c = DF_Mzh(c);
    for (var d = [], e = 0; e < c.length; e++) d[e] = {
        index: e,
        Vb: c[e]
    };
    d.sort(function(g, h) {
        var k = DF_MXg(g.Vb.selectorText),
            l = DF_MXg(h.Vb.selectorText);
        a: {
            for (var m = Math.min(k.length, l.length), n = 0; n < m; n++) {
                var p = k[n],
                    q = l[n];
                p = p > q ? 1 : p < q ? -1 : 0;
                if (p != 0) {
                    l = p;
                    break a
                }
            }
            k = k.length;l = l.length;l = k > l ? 1 : k < l ? -1 : 0
        }
        return l || g.index - h.index
    });
    for (e = 0; e < d.length; e++) c[e] = d[e].Vb;
    c.reverse();
    a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
    for (var f; f = a.nextNode();) c.forEach(function(g) {
        DF_Mlh(DF_Mbh, f, f.matches ? "matches" : "msMatchesSelector", [g.selectorText]) && g.style && DF_MFh(f, g.style)
    });
    b.forEach(DF_MVg)
}

function DF_MFh(a, b) {
    var c = DF_MDh(a.style);
    DF_MDh(b).forEach(function(d) {
        if (!(c.indexOf(d) >= 0)) {
            var e = DF_Mth(b, d);
            DF_Muh(a.style, d, e)
        }
    })
}

function DF_MDh(a) {
    var b = typeof a;
    b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
    b == "array" || b == "object" && typeof a.length == "number" ? a = DF_Myg(a) : (a = DF_Msc(a), b = DF_Mug(a, "cssText"), b >= 0 && Array.prototype.splice.call(a, b, 1));
    return a
};
var DF_MGh = typeof WeakMap != "undefined" && WeakMap.toString().indexOf("[native code]") != -1,
    DF_MHh = 0;

function DF_MIh() {
    this.i = [];
    this.h = [];
    this.g = "data-elementweakmap-index-" + DF_MHh++
}
DF_MIh.prototype.set = function(a, b) {
    if (DF_Mlh(DF_M7g, a, "hasAttribute", [this.g])) {
        var c = parseInt(DF_Mlh(DF_M8g, a, "getAttribute", [this.g]) || null, 10);
        this.h[c] = b
    } else c = this.h.push(b) - 1, DF_Mnh(a, this.g, c.toString()), this.i.push(a);
    return this
};
DF_MIh.prototype.get = function(a) {
    if (DF_Mlh(DF_M7g, a, "hasAttribute", [this.g])) return a = parseInt(DF_Mlh(DF_M8g, a, "getAttribute", [this.g]) || null, 10), this.h[a]
};
DF_MIh.prototype.clear = function() {
    this.i.forEach(function(a) {
        DF_Mlh(DF_M$g, a, "removeAttribute", [this.g])
    }, this);
    this.i = [];
    this.h = []
};

function DF_MJh() {
    this.h = document.implementation.createHTMLDocument("")
};
var DF_MKh = {
    APPLET: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0
};
var DF_MLh = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    AUDIO: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    VIDEO: !0,
    WBR: !0
};
var DF_MMh = {
    "ANNOTATION-XML": !0,
    "COLOR-PROFILE": !0,
    "FONT-FACE": !0,
    "FONT-FACE-SRC": !0,
    "FONT-FACE-URI": !0,
    "FONT-FACE-FORMAT": !0,
    "FONT-FACE-NAME": !0,
    "MISSING-GLYPH": !0
};

function DF_MNh(a) {
    this.h = document.implementation.createHTMLDocument("");
    a = a || new DF_MOh;
    DF_MPh(a);
    this.g = DF_Mtc(a.g);
    this.F = DF_Mtc(a.O);
    this.i = DF_Mtc(a.j);
    this.M = a.sa;
    a.za.forEach(function(b) {
        if (b.lastIndexOf("data-", 0) != 0) throw new DF_M2b('Only "data-" attributes allowed, got: %s.', [b]);
        if (b.lastIndexOf("data-sanitizer-", 0) == 0) throw new DF_M2b('Attributes with "%s" prefix are not allowed, got: %s.', ["data-sanitizer-", b]);
        this.g["* " + b.toUpperCase()] = DF_MQh
    }, this);
    a.M.forEach(function(b) {
        b = b.toUpperCase();
        if (b.indexOf("-") == -1 || DF_MMh[b]) throw new DF_M2b("Only valid custom element tag names allowed, got: %s.", [b]);
        this.i[b] = !0
    }, this);
    this.O = a.i;
    this.G = a.L;
    this.j = null;
    this.L = a.F
}
DF_MHa(DF_MNh, DF_MJh);

function DF_MRh(a) {
    return function(b, c) {
        return (b = a(DF_M6b(b), c)) && DF_Mcc(b) != DF_Mbc.toString() ? DF_Mcc(b) : null
    }
}

function DF_MOh() {
    this.g = {};
    DF_Mvg([DF_MFg, DF_MGg], function(a) {
        DF_Msc(a).forEach(function(b) {
            this.g[b] = DF_MQh
        }, this)
    }, this);
    this.h = {};
    this.za = [];
    this.M = [];
    this.O = DF_Mtc(DF_MKh);
    this.j = DF_Mtc(DF_MLh);
    this.sa = !1;
    this.La = DF_MSh;
    this.Z = this.G = this.Aa = this.i = DF_MEg;
    this.L = null;
    this.la = this.F = !1
}

function DF_MBg(a, b, c) {
    a.M.push(b);
    c && c.forEach(function(d) {
        d = DF_MTh(b, d);
        this.g[d] = DF_MQh;
        this.h[d] = !0
    }, a);
    return a
}

function DF_MUh() {
    var a = DF_MVh();
    if (a.F) throw Error("Rules from STYLE tags are already being inlined.");
    delete a.O.STYLE;
    a.L = "*";
    a.Z = DF_MWh;
    return a
}

function DF_MVh() {
    var a = new DF_MOh,
        b = DF_MXh.concat("style");
    a.j = {
        SPAN: !0
    };
    b.forEach(function(c) {
        c = c.toUpperCase();
        if (DF_MLh[c]) this.j[c] = !0;
        else throw Error("Only whitelisted tags can be allowed. See goog.html.sanitizer.TagWhitelist.");
    }, a);
    return a
}

function DF_MYh(a, b) {
    a.i = b;
    return a
}

function DF_MZh(a, b) {
    a.G = b;
    return a
}

function DF_M_h(a, b) {
    return function(c, d, e, f) {
        c = a(c, d, e, f);
        return c == null ? null : b(c, d, e, f)
    }
}

function DF_M0h(a, b, c, d) {
    a[c] && !b[c] && (a[c] = DF_M_h(a[c], d))
}

function DF_MPh(a) {
    if (a.la) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
    DF_M0h(a.g, a.h, "* USEMAP", DF_M1h);
    var b = DF_MRh(a.La);
    ["* ACTION", "* CITE", "* HREF"].forEach(function(d) {
        DF_M0h(this.g, this.h, d, b)
    }, a);
    var c = DF_MRh(a.i);
    ["* LONGDESC", "* SRC", "LINK HREF"].forEach(function(d) {
        DF_M0h(this.g, this.h, d, c)
    }, a);
    ["* FOR", "* HEADERS", "* NAME"].forEach(function(d) {
        DF_M0h(this.g, this.h, d, DF_MGa(DF_M2h, this.Aa))
    }, a);
    DF_M0h(a.g, a.h, "A TARGET", DF_MGa(DF_M3h, ["_blank", "_self"]));
    DF_M0h(a.g,
        a.h, "* CLASS", DF_MGa(DF_M4h, a.G));
    DF_M0h(a.g, a.h, "* ID", DF_MGa(DF_M5h, a.G));
    DF_M0h(a.g, a.h, "* STYLE", DF_MGa(a.Z, c));
    a.la = !0
}

function DF_MSh(a) {
    return DF_Mgc(a)
}

function DF_MTh(a, b) {
    a || (a = "*");
    return (a + " " + b).toUpperCase()
}

function DF_MWh(a, b, c, d) {
    if (!d.Fb) return null;
    b = DF_Mjc(DF_MAh(d.Fb, function(e, f) {
        c.cd = f;
        e = a(e, c);
        var g;
        e == null ? g = null : g = new DF_Mac(e);
        return g
    }));
    return b == "" ? null : b
}

function DF_MQh(a) {
    return DF_M6b(a)
}

function DF_M3h(a, b) {
    b = DF_M6b(b);
    return DF_Mug(a, b.toLowerCase()) >= 0 ? b : null
}

function DF_M1h(a) {
    return (a = DF_M6b(a)) && a.charAt(0) == "#" ? a : null
}

function DF_M2h(a, b, c) {
    return a(DF_M6b(b), c)
}

function DF_M4h(a, b, c) {
    b = b.split(/(?:\s+)/);
    for (var d = [], e = 0; e < b.length; e++) {
        var f = a(b[e], c);
        f && d.push(f)
    }
    return d.length == 0 ? null : d.join(" ")
}

function DF_M5h(a, b, c) {
    return a(DF_M6b(b), c)
}
DF_MNh.prototype.da = function(a) {
    var b = !("STYLE" in this.F) && "STYLE" in this.i;
    this.j = this.G == "*" && b ? "sanitizer-" + (Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36)) : this.G;
    b = a;
    a = this.h.createElement("span");
    this.j && this.G == "*" && (a.id = this.j);
    this.L && (b = DF_MCh("<div>" + b + "</div>"), DF_MEh(b), b = b.innerHTML);
    b = DF_MZb(b);
    var c = document.createElement("template");
    if ("content" in c) DF_Mpg(c, b), c = c.content;
    else {
        var d = document.implementation.createHTMLDocument("x");
        c = d.body;
        DF_Mpg(d.body, b)
    }
    b = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
    for (c = DF_MGh ? new WeakMap : new DF_MIh; d = b.nextNode();) {
        a: {
            var e = d;
            switch (DF_Mrh(e)) {
                case 3:
                    e = DF_M6h(this, e);
                    break a;
                case 1:
                    if (DF_Mqh(e).toUpperCase() == "TEMPLATE") e = null;
                    else {
                        var f = DF_Mqh(e).toUpperCase();
                        if (f in this.F || DF_Mvh(e) != "http://www.w3.org/1999/xhtml") var g = null;
                        else this.i[f] ? g = this.h.createElement(f) : (g = this.h.createElement("span"), this.M && DF_Mnh(g, "data-sanitizer-original-tag",
                            f.toLowerCase()));
                        if (g) {
                            var h = g,
                                k = DF_Mmh(e);
                            if (k != null)
                                for (var l = 0; f = k[l]; l++)
                                    if (f.specified) {
                                        var m = e;
                                        var n = f;
                                        var p = n.name;
                                        if (p.lastIndexOf("data-sanitizer-", 0) == 0) n = null;
                                        else {
                                            var q = DF_Mqh(m);
                                            n = n.value;
                                            var r = {
                                                    tagName: DF_M6b(q).toLowerCase(),
                                                    attributeName: DF_M6b(p).toLowerCase()
                                                },
                                                t = {
                                                    Fb: void 0
                                                };
                                            r.attributeName == "style" && (t.Fb = DF_Moh(m));
                                            m = DF_MTh(q, p);
                                            m in this.g ? (p = this.g[m], n = p(n, r, t)) : (p = DF_MTh(null, p), p in this.g ? (p = this.g[p], n = p(n, r, t)) : n = null)
                                        }
                                        n !== null && DF_Mnh(h, f.name, n)
                                    }
                            e = g
                        } else e = null
                    }
                    break a;
                default:
                    e = null
            }
        }
        if (e) {
            if (DF_Mrh(e) == 1 && c.set(d, e), d = DF_Msh(d), f = !1, d) g = DF_Mrh(d), h = DF_Mqh(d).toLowerCase(), k = DF_Msh(d), g != 11 || k ? h == "body" && k && (g = DF_Msh(k)) && !DF_Msh(g) && (f = !0) : f = !0, g = null, f || !d ? g = a : DF_Mrh(d) == 1 && (g = c.get(d)), g.content && (g = g.content), g.appendChild(e)
        } else
            for (e = d; d = e.firstChild;) e.removeChild(d)
    }
    c.clear && c.clear();
    DF_Mmh(a).length > 0 && (b = this.h.createElement("span"), b.appendChild(a), a = b);
    a = (new XMLSerializer).serializeToString(a);
    return DF_MZb(a.slice(a.indexOf(">") + 1, a.lastIndexOf("</")))
};

function DF_M6h(a, b) {
    var c = b.data;
    (b = DF_Msh(b)) && DF_Mqh(b).toLowerCase() == "style" && !("STYLE" in a.F) && "STYLE" in a.i && (c = DF_Mxc(DF_MBh(c, a.j, DF_MFa(function(d, e) {
        return this.O(d, {
            cd: e
        })
    }, a))));
    return document.createTextNode(c)
};
var DF_MXh = "a b br div h1 h2 h3 i img li ol p span table td thead tbody th tr u ul".split(" ");

function DF_M7h(a, b) {
    if (!b) return DF_Mbc;
    if (b === "*") return DF_Mgc(a);
    b = DF_Md(b.split(","));
    for (var c = b.next(); !c.done; c = b.next())
        if (c = c.value.trim(), c.length !== 0 && a.startsWith(c)) return DF_Mgc(a);
    return DF_Mbc
}

function DF_M8h(a) {
    return new DF_MNh(DF_MYh(DF_MZh(DF_MUh(), function(b, c) {
        return (c == null ? void 0 : c.attributeName) === "class" ? b : null
    }), function(b) {
        return DF_M7h(b, a)
    }))
};
/*

 Copyright (c) 2011-2018, Christopher Jeffrey (https://github.com/chjj/)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
function DF_M9h(a, b, c) {
    if (a.length === 0) return "";
    for (var d = 0; d < a.length;) {
        var e = a.charAt(a.length - d - 1);
        if (e !== b || c)
            if (e !== b && c) d++;
            else break;
        else d++
    }
    return a.substr(0, a.length - d)
}

function DF_M$h(a, b) {
    a = a.replace(/\|/g, function(d, e, f) {
        for (d = !1; --e >= 0 && f[e] === "\\";) d = !d;
        return d ? "|" : " |"
    }).split(/ \|/);
    var c = 0;
    if (a.length > b) a.splice(b);
    else
        for (; a.length < b;) a.push("");
    for (; c < a.length; c++) a[c] = a[c].trim().replace(/\\\|/g, "|");
    return a
}

function DF_Mai(a, b) {
    for (var c = 1, d, e; c < arguments.length; c++)
        for (e in d = arguments[c], d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
    return a
}

function DF_Mbi() {}

function DF_Mci(a, b, c) {
    if (a) {
        try {
            var d = decodeURIComponent(DF_Mdi(c)).replace(/[^\w:]/g, "").toLowerCase()
        } catch (e) {
            return null
        }
        if (d.indexOf("javascript:") === 0 || d.indexOf("vbscript:") === 0 || d.indexOf("data:") === 0) return null
    }
    b && !DF_Mei.test(c) && (a = b, DF_Mfi[" " + a] || (DF_Mfi[" " + a] = /^[^:]+:\/*[^/]*$/.test(a) ? a + "/" : DF_M9h(a, "/", !0)), a = DF_Mfi[" " + a], c = c.slice(0, 2) === "//" ? a.replace(/:[\s\S]*/, ":") + c : c.charAt(0) === "/" ? a.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + c : a + c);
    try {
        c = encodeURI(c).replace(/%25/g, "%")
    } catch (e) {
        return null
    }
    return c
}

function DF_MY(a, b) {
    a = a.source || a;
    b = b || "";
    return {
        replace: function(c, d) {
            d = d.source || d;
            d = d.replace(/(^|[^\[])\^/g, "$1");
            a = a.replace(c, d);
            return this
        },
        N: function() {
            return new RegExp(a, b)
        }
    }
}

function DF_Mdi(a) {
    return a.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(b, c) {
        c = c.toLowerCase();
        return c === "colon" ? ":" : c.charAt(0) === "#" ? c.charAt(1) === "x" ? String.fromCharCode(parseInt(c.substring(2), 16)) : String.fromCharCode(+c.substring(1)) : ""
    })
}

function DF_MZ(a, b) {
    if (b) {
        if (DF_Mgi.test(a)) return a.replace(DF_Mhi, function(c) {
            return DF_Mii[c]
        })
    } else if (DF_Mji.test(a)) return a.replace(DF_Mki, function(c) {
        return DF_Mii[c]
    });
    return a
}

function DF_Mli() {
    this.Ua = {}
}

function DF_Mmi(a) {
    this.g = [];
    this.token = null;
    this.options = a || DF_M_.oa;
    this.options.H = this.options.H || new DF_Mni;
    this.H = this.options.H;
    this.H.options = this.options;
    this.i = new DF_Mli
}

function DF_Moi() {}

function DF_Mni() {
    this.options = DF_M_.oa
}

function DF_Mpi(a, b) {
    this.options = b || DF_M_.oa;
    this.links = a;
    this.g = DF_M0.xa;
    this.H = this.options.H || new DF_Mni;
    this.H.options = this.options;
    this.h = !1;
    if (!this.links) throw Error("Tokens array requires a `links` property.");
    this.options.ja ? this.g = DF_M0.ja : this.options.X && (this.g = this.options.Db ? DF_M0.Db : DF_M0.X)
}

function DF_Mqi(a) {
    this.g = [];
    this.g.links = Object.create(null);
    this.options = a || DF_M_.oa;
    this.h = DF_M1.xa;
    this.options.ja ? this.h = DF_M1.ja : this.options.X && (this.h = this.options.Xb ? DF_M1.Xb : DF_M1.X)
}
var DF_M1 = {
    wd: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    Ib: DF_Mbi,
    hb: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
    tc: DF_Mbi,
    Oa: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
    Pa: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: DF_Mbi,
    qc: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
    ca: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
    text: /^[^\n]+/,
    na: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    Bb: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
};
DF_M1.Pa = DF_MY(DF_M1.Pa).replace("label", DF_M1.na).replace("title", DF_M1.Bb).N();
DF_M1.Eb = /(?:[*+-]|\d{1,9}\.)/;
DF_M1.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
DF_M1.item = DF_MY(DF_M1.item, "gm").replace(/bull/g, DF_M1.Eb).N();
DF_M1.list = DF_MY(DF_M1.list).replace(/bull/g, DF_M1.Eb).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + DF_M1.Pa.source + ")").N();
DF_M1.ec = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
DF_M1.xb = /\x3c!--(?!-?>)[\s\S]*?--\x3e/;
DF_M1.html = DF_MY(DF_M1.html, "i").replace("comment", DF_M1.xb).replace("tag", DF_M1.ec).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).N();
DF_M1.ca = DF_MY(DF_M1.ca).replace("hr", DF_M1.hb).replace("heading", DF_M1.heading).replace("lheading", DF_M1.qc).replace("tag", DF_M1.ec).N();
DF_M1.Oa = DF_MY(DF_M1.Oa).replace("paragraph", DF_M1.ca).N();
DF_M1.xa = DF_Mai({}, DF_M1);
DF_M1.X = DF_Mai({}, DF_M1.xa, {
    Ib: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    ca: /^/,
    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});
DF_M1.X.ca = DF_MY(DF_M1.ca).replace("(?!", "(?!" + DF_M1.X.Ib.source.replace("\\1", "\\2") + "|" + DF_M1.list.source.replace("\\1", "\\3") + "|").N();
DF_M1.Xb = DF_Mai({}, DF_M1.X, {
    tc: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
    table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
});
DF_M1.ja = DF_Mai({}, DF_M1.xa, {
    html: DF_MY("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", DF_M1.xb).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").N(),
    Pa: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
});

function DF_Mri(a, b) {
    return (new DF_Mqi(b)).token(a.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), !0)
}
DF_Mqi.prototype.token = function(a, b) {
    a = a.replace(/^ +$/gm, "");
    for (var c, d, e, f, g, h, k, l, m, n, p; a;) {
        if (e = this.h.wd.exec(a)) a = a.substring(e[0].length), e[0].length > 1 && this.g.push({
            type: "space"
        });
        if (e = this.h.code.exec(a)) a = a.substring(e[0].length), e = e[0].replace(/^ {4}/gm, ""), this.g.push({
            type: "code",
            text: this.options.ja ? e : DF_M9h(e, "\n")
        });
        else if (e = this.h.Ib.exec(a)) a = a.substring(e[0].length), this.g.push({
            type: "code",
            lang: e[2] ? e[2].trim() : e[2],
            text: e[3] || ""
        });
        else if (e = this.h.heading.exec(a)) a = a.substring(e[0].length),
            this.g.push({
                type: "heading",
                depth: e[1].length,
                text: e[2]
            });
        else {
            if (b && (e = this.h.tc.exec(a)) && (g = {
                    type: "table",
                    ba: DF_M$h(e[1].replace(/^ *| *\| *$/g, "")),
                    align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : []
                }, g.ba.length === g.align.length)) {
                a = a.substring(e[0].length);
                for (l = 0; l < g.align.length; l++) g.align[l] = /^ *-+: *$/.test(g.align[l]) ? "right" : /^ *:-+: *$/.test(g.align[l]) ? "center" : /^ *:-+ *$/.test(g.align[l]) ? "left" : null;
                for (l = 0; l < g.cells.length; l++) g.cells[l] =
                    DF_M$h(g.cells[l], g.ba.length);
                this.g.push(g);
                continue
            }
            if (e = this.h.hb.exec(a)) a = a.substring(e[0].length), this.g.push({
                type: "hr"
            });
            else if (e = this.h.Oa.exec(a)) a = a.substring(e[0].length), this.g.push({
                type: "blockquote_start"
            }), e = e[0].replace(/^ *> ?/gm, ""), this.token(e, b), this.g.push({
                type: "blockquote_end"
            });
            else if (e = this.h.list.exec(a)) {
                a = a.substring(e[0].length);
                f = e[2];
                c = f.length > 1;
                h = {
                    type: "list_start",
                    ordered: c,
                    start: c ? +f : "",
                    Sa: !1
                };
                this.g.push(h);
                e = e[0].match(this.h.item);
                k = [];
                c = !1;
                m = e.length;
                for (l =
                    0; l < m; l++) g = e[l], d = g.length, g = g.replace(/^ *([*+-]|\d+\.) */, ""), ~g.indexOf("\n ") && (d -= g.length, g = this.options.ja ? g.replace(/^ {1,4}/gm, "") : g.replace(new RegExp("^ {1," + d + "}", "gm"), "")), l !== m - 1 && (d = DF_M1.Eb.exec(e[l + 1])[0], f.length > 1 ? d.length === 1 : d.length > 1 || this.options.Dd && d !== f) && (a = e.slice(l + 1).join("\n") + a, l = m - 1), d = c || /\n\n(?!\s*$)/.test(g), l !== m - 1 && (c = g.charAt(g.length - 1) === "\n", d || (d = c)), d && (h.Sa = !0), n = /^\[[ xX]\] /.test(g), p = void 0, n && (p = g[1] !== " ", g = g.replace(/^\[[ xX]\] +/, "")), d = {
                    type: "list_item_start",
                    Gd: n,
                    checked: p,
                    Sa: d
                }, k.push(d), this.g.push(d), this.token(g, !1), this.g.push({
                    type: "list_item_end"
                });
                if (h.Sa)
                    for (m = k.length, l = 0; l < m; l++) k[l].Sa = !0;
                this.g.push({
                    type: "list_end"
                })
            } else if (e = this.h.html.exec(a)) a = a.substring(e[0].length), this.g.push({
                type: this.options.da ? "paragraph" : "html",
                Rd: !this.options.Ta && (e[1] === "pre" || e[1] === "script" || e[1] === "style"),
                text: e[0]
            });
            else if (b && (e = this.h.Pa.exec(a))) a = a.substring(e[0].length), e[3] && (e[3] = e[3].substring(1, e[3].length - 1)), f = e[1].toLowerCase().replace(/\s+/g,
                " "), this.g.links[f] || (this.g.links[f] = {
                href: e[2],
                title: e[3]
            });
            else {
                if (b && (e = this.h.table.exec(a)) && (g = {
                        type: "table",
                        ba: DF_M$h(e[1].replace(/^ *| *\| *$/g, "")),
                        align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: e[3] ? e[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
                    }, g.ba.length === g.align.length)) {
                    a = a.substring(e[0].length);
                    for (l = 0; l < g.align.length; l++) g.align[l] = /^ *-+: *$/.test(g.align[l]) ? "right" : /^ *:-+: *$/.test(g.align[l]) ? "center" : /^ *:-+ *$/.test(g.align[l]) ? "left" : null;
                    for (l = 0; l < g.cells.length; l++) g.cells[l] =
                        DF_M$h(g.cells[l].replace(/^ *\| *| *\| *$/g, ""), g.ba.length);
                    this.g.push(g);
                    continue
                }
                if (e = this.h.qc.exec(a)) a = a.substring(e[0].length), this.g.push({
                    type: "heading",
                    depth: e[2] === "=" ? 1 : 2,
                    text: e[1]
                });
                else if (b && (e = this.h.ca.exec(a))) a = a.substring(e[0].length), this.g.push({
                    type: "paragraph",
                    text: e[1].charAt(e[1].length - 1) === "\n" ? e[1].slice(0, -1) : e[1]
                });
                else if (e = this.h.text.exec(a)) a = a.substring(e[0].length), this.g.push({
                    type: "text",
                    text: e[0]
                });
                else if (a) throw Error("Infinite loop on byte: " + a.charCodeAt(0));
            }
        }
    }
    return this.g
};
var DF_M0 = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    Cb: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: DF_Mbi,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
    kb: /^!?\[(label)\]\[(ref)\]/,
    Qb: /^!?\[(ref)\](?:\[\])?/,
    Va: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
    wa: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    Fa: /^( {2,}|\\)\n(?!\s*$)/,
    Qa: DF_Mbi,
    text: /^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/,
    Yc: "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"
};
DF_M0.wa = DF_MY(DF_M0.wa).replace(/punctuation/g, DF_M0.Yc).N();
DF_M0.Vc = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
DF_M0.Zc = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
DF_M0.Uc = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
DF_M0.Cb = DF_MY(DF_M0.Cb).replace("scheme", DF_M0.Zc).replace("email", DF_M0.Uc).N();
DF_M0.Pc = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
DF_M0.tag = DF_MY(DF_M0.tag).replace("comment", DF_M1.xb).replace("attribute", DF_M0.Pc).N();
DF_M0.na = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/;
DF_M0.Xc = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/;
DF_M0.Bb = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
DF_M0.link = DF_MY(DF_M0.link).replace("label", DF_M0.na).replace("href", DF_M0.Xc).replace("title", DF_M0.Bb).N();
DF_M0.kb = DF_MY(DF_M0.kb).replace("label", DF_M0.na).replace("ref", DF_M1.na).N();
DF_M0.Qb = DF_MY(DF_M0.Qb).replace("ref", DF_M1.na).N();
DF_M0.xa = DF_Mai({}, DF_M0);
DF_M0.ja = DF_Mai({}, DF_M0.xa, {
    Va: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    wa: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
    link: DF_MY(/^!?\[(label)\]\((.*?)\)/).replace("label", DF_M0.na).N(),
    kb: DF_MY(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", DF_M0.na).N()
});
DF_M0.X = DF_Mai({}, DF_M0.xa, {
    escape: DF_MY(DF_M0.escape).replace("])", "~|])").N(),
    Wc: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    Qc: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    Qa: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: DF_MY(DF_M0.text).replace("]|", "~]|").replace("|$", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$").N()
});
DF_M0.X.url = DF_MY(DF_M0.X.url, "i").replace("email", DF_M0.X.Wc).N();
DF_M0.Db = DF_Mai({}, DF_M0.X, {
    Fa: DF_MY(DF_M0.Fa).replace("{2,}", "*").N(),
    text: DF_MY(DF_M0.X.text).replace("{2,}", "*").N()
});
DF_Mpi.prototype.output = function(a) {
    for (var b = "", c, d, e; a;)
        if (e = this.g.escape.exec(a)) a = a.substring(e[0].length), b += DF_MZ(e[1]);
        else if (e = this.g.tag.exec(a)) !this.h && /^<a /i.test(e[0]) ? this.h = !0 : this.h && /^<\/a>/i.test(e[0]) && (this.h = !1), !this.i && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? this.i = !0 : this.i && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (this.i = !1), a = a.substring(e[0].length), b += this.options.da ? this.options.Ta ? this.options.Ta(e[0]) : DF_MZ(e[0]) : e[0];
    else if (e = this.g.link.exec(a)) {
        a: {
            d =
            e[2];
            if (d.indexOf(")") !== -1)
                for (var f = c = 0; f < d.length; f++)
                    if (d[f] === "\\") f++;
                    else if (d[f] === "(") c++;
            else if (d[f] === ")" && (c--, c < 0)) {
                d = f;
                break a
            }
            d = -1
        }
        d > -1 && (c = e[2].length - d, e[2] = e[2].substring(0, d), e[0] = e[0].substring(0, e[0].length - c));a = a.substring(e[0].length);this.h = !0;d = e[2];this.options.ja ? (c = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(d)) ? (d = c[1], c = c[3]) : c = "" : c = e[3] ? e[3].slice(1, -1) : "";d = d.trim().replace(/^<([\s\S]*)>$/, "$1");b += DF_Msi(this, e, {
            href: DF_Mti(d),
            title: DF_Mti(c)
        });this.h = !1
    }
    else if ((e = this.g.kb.exec(a)) ||
        (e = this.g.Qb.exec(a))) a = a.substring(e[0].length), c = (e[2] || e[1]).replace(/\s+/g, " "), (c = this.links[c.toLowerCase()]) && c.href ? (this.h = !0, b += DF_Msi(this, e, c), this.h = !1) : (b += e[0].charAt(0), a = e[0].substring(1) + a);
    else if (e = this.g.Va.exec(a)) a = a.substring(e[0].length), b += this.H.Va(this.output(e[4] || e[3] || e[2] || e[1]));
    else if (e = this.g.wa.exec(a)) a = a.substring(e[0].length), b += this.H.wa(this.output(e[6] || e[5] || e[4] || e[3] || e[2] || e[1]));
    else if (e = this.g.code.exec(a)) a = a.substring(e[0].length), b += this.H.kc(DF_MZ(e[2].trim(), !0));
    else if (e = this.g.Fa.exec(a)) a = a.substring(e[0].length), b += this.H.Fa();
    else if (e = this.g.Qa.exec(a)) a = a.substring(e[0].length), b += this.H.Qa(this.output(e[1]));
    else if (e = this.g.Cb.exec(a)) a = a.substring(e[0].length), e[2] === "@" ? (c = DF_MZ(this.Pb(e[1])), d = "mailto:" + c) : d = c = DF_MZ(e[1]), b += this.H.link(d, null, c);
    else if (!this.h && (e = this.g.url.exec(a))) {
        if (e[2] === "@") c = DF_MZ(e[0]), d = "mailto:" + c;
        else {
            do d = e[0], e[0] = this.g.Qc.exec(e[0])[0]; while (d !== e[0]);
            c = DF_MZ(e[0]);
            d = e[1] === "www." ? "http://" + c : c
        }
        a = a.substring(e[0].length);
        b += this.H.link(d, null, c)
    } else if (e = this.g.text.exec(a)) a = a.substring(e[0].length), b = this.i ? b + this.H.text(e[0]) : b + this.H.text(DF_MZ(this.Wb(e[0])));
    else if (a) throw Error("Infinite loop on byte: " + a.charCodeAt(0));
    return b
};

function DF_Mti(a) {
    return a ? a.replace(DF_M0.Vc, "$1") : a
}

function DF_Msi(a, b, c) {
    var d = c.href;
    c = c.title ? DF_MZ(c.title) : null;
    return b[0].charAt(0) !== "!" ? a.H.link(d, c, a.output(b[1])) : a.H.image(d, c, DF_MZ(b[1]))
}
DF_Mpi.prototype.Wb = function(a) {
    return this.options.Wb ? a.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026") : a
};
DF_Mpi.prototype.Pb = function(a) {
    if (!this.options.Pb) return a;
    for (var b = "", c = a.length, d = 0, e; d < c; d++) e = a.charCodeAt(d), Math.random() > .5 && (e = "x" + e.toString(16)), b += "&#" + e + ";";
    return b
};
DF_M = DF_Mni.prototype;
DF_M.code = function(a, b, c) {
    b = (b || "").match(/\S*/)[0];
    if (this.options.highlight) {
        var d = this.options.highlight(a, b);
        d != null && d !== a && (c = !0, a = d)
    }
    return b ? '<pre><code class="' + this.options.vd + DF_MZ(b, !0) + '">' + (c ? a : DF_MZ(a, !0)) + "</code></pre>\n" : "<pre><code>" + (c ? a : DF_MZ(a, !0)) + "</code></pre>"
};
DF_M.Oa = function(a) {
    return "<blockquote>\n" + a + "</blockquote>\n"
};
DF_M.html = function(a) {
    return a
};
DF_M.heading = function(a, b, c, d) {
    if (this.options.pd) {
        var e = "<h" + b + ' id="' + this.options.qd;
        c = c.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
        if (d.Ua.hasOwnProperty(c)) {
            var f = c;
            do d.Ua[f]++, c = f + "-" + d.Ua[f]; while (d.Ua.hasOwnProperty(c))
        }
        d.Ua[c] = 0;
        a = e + c + '">' + a + "</h" + b + ">\n"
    } else a = "<h" + b + ">" + a + "</h" + b + ">\n";
    return a
};
DF_M.hb = function() {
    return this.options.tb ? "<hr/>\n" : "<hr>\n"
};
DF_M.list = function(a, b, c) {
    var d = b ? "ol" : "ul";
    return "<" + d + (b && c !== 1 ? ' start="' + c + '"' : "") + ">\n" + a + "</" + d + ">\n"
};
DF_M.ca = function(a) {
    return "<p>" + a + "</p>\n"
};
DF_M.table = function(a, b) {
    b && (b = "<tbody>" + b + "</tbody>");
    return "<table>\n<thead>\n" + a + "</thead>\n" + b + "</table>\n"
};

function DF_Mui(a, b) {
    var c = b.ba ? "th" : "td";
    return (b.align ? "<" + c + ' align="' + b.align + '">' : "<" + c + ">") + a + "</" + c + ">\n"
}
DF_M.Va = function(a) {
    return "<strong>" + a + "</strong>"
};
DF_M.wa = function(a) {
    return "<em>" + a + "</em>"
};
DF_M.kc = function(a) {
    return "<code>" + a + "</code>"
};
DF_M.Fa = function() {
    return this.options.tb ? "<br/>" : "<br>"
};
DF_M.Qa = function(a) {
    return "<del>" + a + "</del>"
};
DF_M.link = function(a, b, c) {
    a = DF_Mci(this.options.da, this.options.ic, a);
    if (a === null) return c;
    a = '<a href="' + DF_MZ(a) + '"';
    b && (a += ' title="' + b + '"');
    return a + (">" + c + "</a>")
};
DF_M.image = function(a, b, c) {
    a = DF_Mci(this.options.da, this.options.ic, a);
    if (a === null) return c;
    a = '<img src="' + a + '" alt="' + c + '"';
    b && (a += ' title="' + b + '"');
    return a += this.options.tb ? "/>" : ">"
};
DF_M.text = function(a) {
    return a
};
DF_M = DF_Moi.prototype;
DF_M.Va = function(a) {
    return a
};
DF_M.wa = function(a) {
    return a
};
DF_M.kc = function(a) {
    return a
};
DF_M.Qa = function(a) {
    return a
};
DF_M.text = function(a) {
    return a
};
DF_M.link = function(a, b, c) {
    return c
};
DF_M.image = function(a, b, c) {
    return c
};
DF_M.Fa = function() {
    return ""
};

function DF_Mvi(a, b) {
    return (new DF_Mmi(b)).parse(a)
}
DF_Mmi.prototype.parse = function(a) {
    this.inline = new DF_Mpi(a.links, this.options);
    this.h = new DF_Mpi(a.links, DF_Mai({}, this.options, {
        H: new DF_Moi
    }));
    this.g = a.reverse();
    for (a = ""; this.next();) a += DF_Mwi(this);
    return a
};
DF_Mmi.prototype.next = function() {
    return this.token = this.g.pop()
};

function DF_Mxi(a) {
    for (var b = a.token.text;
        (a.g[a.g.length - 1] || 0).type === "text";) b += "\n" + a.next().text;
    return a.inline.output(b)
}

function DF_Mwi(a) {
    switch (a.token.type) {
        case "space":
            return "";
        case "hr":
            return a.H.hb();
        case "heading":
            return a.H.heading(a.inline.output(a.token.text), a.token.depth, DF_Mdi(a.h.output(a.token.text)), a.i);
        case "code":
            return a.H.code(a.token.text, a.token.lang, a.token.gd);
        case "table":
            var b = "",
                c = "",
                d, e;
            var f = "";
            for (d = 0; d < a.token.ba.length; d++) f += DF_Mui(a.inline.output(a.token.ba[d]), {
                ba: !0,
                align: a.token.align[d]
            });
            b += "<tr>\n" + f + "</tr>\n";
            for (d = 0; d < a.token.cells.length; d++) {
                var g = a.token.cells[d];
                f = "";
                for (e = 0; e < g.length; e++) f += DF_Mui(a.inline.output(g[e]), {
                    ba: !1,
                    align: a.token.align[e]
                });
                c += "<tr>\n" + f + "</tr>\n"
            }
            return a.H.table(b, c);
        case "blockquote_start":
            for (c = ""; a.next().type !== "blockquote_end";) c += DF_Mwi(a);
            return a.H.Oa(c);
        case "list_start":
            c = "";
            b = a.token.ordered;
            for (d = a.token.start; a.next().type !== "list_end";) c += DF_Mwi(a);
            return a.H.list(c, b, d);
        case "list_item_start":
            c = "";
            b = a.token.Sa;
            for (a.token.Gd && (c += "<input " + (a.token.checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (a.H.options.tb ?
                    " /" : "") + "> "); a.next().type !== "list_item_end";) c += b || a.token.type !== "text" ? DF_Mwi(a) : DF_Mxi(a);
            return "<li>" + c + "</li>\n";
        case "html":
            return a.H.html(a.token.text);
        case "paragraph":
            return a.H.ca(a.inline.output(a.token.text));
        case "text":
            return a.H.ca(DF_Mxi(a));
        default:
            c = 'Token with "' + a.token.type + '" type was not found.';
            if (a.options.silent) return console.log(c), "";
            throw Error(c);
    }
}
var DF_Mgi = /[&<>"']/,
    DF_Mhi = /[&<>"']/g,
    DF_Mii = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    },
    DF_Mji = /[<>"']|&(?!#?\w+;)/,
    DF_Mki = /[<>"']|&(?!#?\w+;)/g,
    DF_Mfi = {},
    DF_Mei = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
DF_Mbi.exec = DF_Mbi;

function DF_M_(a, b, c) {
    if (typeof a === "undefined" || a === null) throw Error("marked(): input parameter is undefined or null");
    if (typeof a !== "string") throw Error("marked(): input parameter is of type " + Object.prototype.toString.call(a) + ", string expected");
    if (c || typeof b === "function") {
        c || (c = b, b = null);
        b = DF_Mai({}, DF_M_.oa, b || {});
        var d = b.highlight,
            e = 0;
        try {
            var f = DF_Mri(a, b)
        } catch (k) {
            return c(k)
        }
        var g = f.length;
        var h = function(k) {
            if (k) return b.highlight = d, c(k);
            try {
                var l = DF_Mvi(f, b)
            } catch (m) {
                k = m
            }
            b.highlight = d;
            return k ? c(k) : c(null, l)
        };
        if (!d || d.length < 3) return h();
        delete b.highlight;
        if (!g) return h();
        for (; e < f.length; e++)(function(k) {
            return k.type !== "code" ? --g || h() : d(k.text, k.lang, function(l, m) {
                if (l) return h(l);
                if (m == null || m === k.text) return --g || h();
                k.text = m;
                k.gd = !0;
                --g || h()
            })
        })(f[e])
    } else try {
        return b && (b = DF_Mai({}, DF_M_.oa, b)), DF_Mvi(DF_Mri(a, b), b)
    } catch (k) {
        k.message += "\nPlease report this to https://github.com/markedjs/marked.";
        if ((b || DF_M_.oa).silent) return "<p>An error occurred:</p><pre>" + DF_MZ(k.message, !0) + "</pre>";
        throw k;
    }
}
DF_M_.options = function(a) {
    DF_Mai(DF_M_.oa, a);
    return DF_M_
};
DF_M_.jd = function() {
    return {
        ic: null,
        Db: !1,
        X: !0,
        pd: !0,
        qd: "",
        highlight: null,
        vd: "language-",
        Pb: !0,
        ja: !1,
        H: new DF_Mni,
        da: !1,
        Ta: null,
        silent: !1,
        Dd: !1,
        Wb: !1,
        Xb: !0,
        tb: !1
    }
};
DF_M_.oa = DF_M_.jd();
DF_M_.parse = DF_M_;

function DF_Myi(a) {
    return DF_MYh(DF_MZh(new DF_MOh, function(b, c) {
        return (c == null ? void 0 : c.attributeName) === "class" ? b : null
    }), function(b) {
        return DF_M7h(b, a)
    })
}

function DF_Mzi(a) {
    this.g = new DF_MNh(DF_Myi(a));
    this.h = [new DF_MAg(this.g), new DF_MDg];
    a = DF_Myi(a);
    for (var b = DF_Md(this.h), c = b.next(); !c.done; c = b.next()) a = c.value.hc(a);
    this.i = new DF_MNh(a)
}
DF_Mzi.prototype.gb = function(a) {
    var b = document.createElement("template");
    DF_Mpg(b, a);
    a = document.createNodeIterator(b.content, NodeFilter.SHOW_ELEMENT, function(h) {
        return h.nodeType === Node.ELEMENT_NODE ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    });
    for (var c = a.nextNode(); c;) {
        var d = c;
        c = a.nextNode();
        for (var e = [], f = DF_Md(this.h), g = f.next(); !g.done; g = f.next()) g = g.value, g.sc(d) && (e.push(g.lc), e.length > 1 || g.gb(d));
        e.length > 1 && console.debug("DF-MESSENGER", "Node '" + d.nodeName + "' targeted by multiple enrichers: " +
            e.join(", ") + " (first one executed)")
    }
    return this.i.da(b.innerHTML)
};

function DF_MAi(a, b, c, d) {
    a = a.substring(b, c);
    return d ? a : a.replace(/\n/g, "  \n")
};

function DF_MBi(a, b) {
    this.utterance = a;
    this.urlAllowlist = b === void 0 ? null : b
}
DF_MBi.prototype.render = function() {
    return Object.assign({}, {
        utteranceId: this.utterance.utteranceId,
        languageCode: this.utterance.languageCode,
        isBot: this.utterance.isBot,
        mode: this.utterance.mode,
        elements: DF_MCi(this)
    }, this.utterance.allowFeedback !== void 0 ? {
        allowFeedback: this.utterance.allowFeedback
    } : {}, this.utterance.responseId ? {
        responseId: this.utterance.responseId
    } : {})
};

function DF_MCi(a) {
    return a.utterance.messages.map(function(b) {
        switch (b.type) {
            case "text":
                b = b.text;
                if (b.length !== 0)
                    if (a.utterance.isBot) {
                        for (var c, d = new DF_Mzi(a.urlAllowlist), e = DF_M_, f = b.trim(), g = "", h = /```/g, k, l = !1, m = 0; k = h.exec(f);) k = k.index + 3, g += DF_MAi(f, m, k, l), l = !l, m = k;
                        g += DF_MAi(f, m, f.length, l);
                        (c = (e = (c = e(g)) == null ? void 0 : c.trim()) ? d.gb(d.g.da(e)) : null) ? (b = new DF_MWf(a.utterance.utteranceId, "none"), b.languageCode = a.utterance.languageCode, b.markdown = c) : b = DF_MDi(a, b)
                    } else b = DF_MDi(a, b);
                else b = void 0;
                return b;
            case "customCard":
                return DF_MEi(a, b.richElements);
            default:
                return DF_MFi(a, b)
        }
    }).filter(DF_M4a)
}

function DF_MDi(a, b) {
    var c = new DF_M1f(a.utterance.utteranceId, "none");
    c.isBot = a.utterance.isBot;
    c.languageCode = a.utterance.languageCode;
    c.text = b;
    return c
}

function DF_MEi(a, b) {
    b = b.map(function(d) {
        return DF_MFi(a, d)
    }).filter(DF_M4a);
    if (b.length === 0) return null;
    var c = new DF_M8e(a.utterance.utteranceId, "none");
    c.languageCode = a.utterance.languageCode;
    c.elements = b;
    return c
}

function DF_MFi(a, b) {
    var c = void 0;
    switch (b.type) {
        case "info":
            var d = new DF_MR(a.utterance.utteranceId, b.id);
            d.title = b.title ? b.title : "";
            d.subtitle = b.subtitle ? b.subtitle : "";
            d.image = DF_Mdg(b.image);
            d.anchor = DF_M3f(b);
            c = d;
            break;
        case "description":
            d = new DF_Mmf(a.utterance.utteranceId, b.id);
            d.title = b.title ? b.title : "";
            var e;
            d.text = (e = b.text) != null ? e : null;
            c = d;
            break;
        case "button":
            d = new DF_M5e(a.utterance.utteranceId, b.id);
            d.text = b.text;
            var f;
            e = (f = b.anchor) != null ? f : b.link ? {
                href: b.link
            } : null;
            d.anchor = e ? new DF_M4f(e) :
                null;
            var g;
            d.icon = (g = b.icon) != null ? g : null;
            d.image = DF_Mdg(b.image);
            d.event = b.event;
            d.mode = b.mode || "normal";
            d.cssWidth = b.cssWidth;
            c = d;
            break;
        case "image":
            d = new DF_MKf(a.utterance.utteranceId, b.id);
            d.source = b.rawUrl ? b.rawUrl : "";
            d.accessibilityText = b.accessibilityText ? b.accessibilityText : "image";
            var h;
            d.reference = b.reference ? {
                text: b.reference.text,
                anchor: new DF_M4f(b.reference.anchor),
                image: (h = DF_Mdg(b.reference.image)) != null ? h : void 0
            } : null;
            d.cssWidth = b.cssWidth;
            c = d;
            break;
        case "list":
            d = new DF_MUf(a.utterance.utteranceId,
                b.id);
            d.title = b.title ? b.title : "";
            d.subtitle = b.subtitle ? b.subtitle : "";
            d.image = DF_Mdg(b.image);
            var k;
            d.event = (k = b.event) != null ? k : null;
            d.anchor = b.anchor ? new DF_M4f(b.anchor) : null;
            c = d;
            break;
        case "divider":
            c = new DF_Mof(a.utterance.utteranceId, b.id);
            break;
        case "accordion":
            d = new DF_MXe(a.utterance.utteranceId, b.id);
            d.title = b.title;
            d.subtitle = b.subtitle;
            d.image = DF_Mdg(b.image);
            d.text = DF_M8h(a.urlAllowlist).da(b.text);
            c = d;
            break;
        case "chips":
            c = DF_MGi(a, b);
            break;
        case "html":
            d = new DF_MBf(a.utterance.utteranceId,
                b.id);
            d.html = DF_M8h(a.urlAllowlist).da(b.html);
            c = d;
            break;
        case "match_citations":
            c = DF_MHi(a, b);
            break;
        case "custom_template":
            d = new DF_Mhf(a.utterance.utteranceId, b.id);
            d.elementName = b.name;
            d.payload = b.payload;
            var l;
            d.responseId = (l = a.utterance.responseId) != null ? l : null;
            c = d;
            break;
        case "video":
            a: {
                f = new DF_Mcg(a.utterance.utteranceId, b.id);
                switch (b.source.type) {
                    case "link":
                        f.anchor = new DF_M4f(b.source.anchor);
                        var m;
                        f.embeddedPlayer = (m = b.source.embeddedPlayer) != null ? m : null;
                        b.source.thumbnail ? f.thumbnail =
                            DF_Mdg(b.source.thumbnail) : !b.source.embeddedPlayer && DF_M9a.test(b.source.anchor.href) && (g = (g = DF_M$a(b.source.anchor.href)) ? "https://ytimg.googleusercontent.com/vi/" + g + "/hqdefault.jpg" : void 0, g && (f.thumbnail = {
                                rawUrl: g
                            }));
                        if (!f.thumbnail && !f.embeddedPlayer) {
                            c = void 0;
                            break a
                        }
                        break;
                    case "raw":
                        f.source = b.source.rawUrl;
                        break;
                    default:
                        console.debug("DF-MESSENGER", "Unknown video source", b.source);
                        c = void 0;
                        break a
                }
                f.videoTitle = (d = b.title) != null ? d : null;f.videoType = b.source.type;f.cssWidth = b.cssWidth;c = f
            }
            break;
        case "files":
            c = DF_MIi(a, b);
            break;
        default:
            console.error("DF-MESSENGER", "Parser", "Could not render " + b.type)
    }
    c && (c.languageCode = a.utterance.languageCode);
    return c
}

function DF_MGi(a, b) {
    if (b.options.length !== 0) return a = new DF_Maf(a.utterance.utteranceId, b.id), a.chips = b.options.map(function(c) {
        var d, e = (d = c.anchor) != null ? d : c.link ? {
            href: c.link
        } : null;
        d = e ? new DF_M4f(e) : null;
        var f;
        e = (f = DF_Mdg(c.image)) != null ? f : void 0;
        return d ? new DF_Mjg(c.text, d, e, c.accessibilityText, c.mode) : new DF_Mig(c.text, e, c.accessibilityText, c.mode)
    }), a
}

function DF_MHi(a, b) {
    var c = b.citations.map(function(d) {
        var e = DF_M5f(d);
        return e ? {
            title: d.title,
            anchor: e
        } : null
    }).filter(DF_M4a);
    if (c.length !== 0) return a = new DF_Mff(a.utterance.utteranceId, b.id), a.citations = c, a
}

function DF_MIi(a, b) {
    a = new DF_Mwf(a.utterance.utteranceId, b.id);
    a.files = b.files.map(function(c) {
        var d = c.anchor ? new DF_M4f(c.anchor) : void 0,
            e, f = (e = DF_Mdg(c.image)) != null ? e : void 0;
        return {
            name: c.name,
            image: f,
            anchor: d
        }
    });
    return a
}

function DF_MJi(a) {
    return a.reduce(function(b, c) {
        var d = Object.assign({}, c);
        d.elements = c.elements.filter(function(e) {
            return e.isVisible()
        });
        d.elements.length > 0 && b.push(d);
        return b
    }, [])
};
var DF_MKi = DF_Mc(["https://www.gstatic.com/external_hosted/highlightjs/highlight.pack.js"]),
    DF_Msg = DF_Mc(["https://www.gstatic.com/external_hosted/highlightjs/styles/googlecode.css"]),
    DF_MLi = function() {
        var a = null;
        return function() {
            if (a == null) {
                var b = document.createElement("script");
                DF_Mtg(b, DF_Mzc(DF_MKi));
                var c = new Promise(function(f) {
                    b.addEventListener("load", function() {
                        return void f()
                    })
                });
                document.head.appendChild(b);
                var d = document.createElement("link");
                DF_Mrg(d);
                var e = new Promise(function(f) {
                    d.addEventListener("load",
                        function() {
                            return void f()
                        })
                });
                document.head.appendChild(d);
                a = Promise.all([c, e]).then(function() {})
            }
            return a
        }
    }();

function DF_MMi() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
        var b = Math.random() * 16 | 0;
        return a === "x" ? b.toString(16) : (b & 3 | 8).toString(16)
    })
};
var DF_MNi = DF_Mc([' <div class="entry ', '">\n      ', " ", "\n    </div>"]),
    DF_MOi = DF_Mc([' <div class="actor-container">\n      <div class="actor">\n        <img src=', " />\n      </div>\n    </div>"]),
    DF_MPi = DF_Mc([' <df-messenger-utterance\n        class="', '"\n        .utterance=', "\n        .languageCode=", "></df-messenger-utterance>"]),
    DF_MQi = DF_Mc([' <div class="typing-message">\n        <div class="message">', "</div>\n      </div>"]),
    DF_MRi = DF_Mc(['<img src="', '" />']),
    DF_MSi = DF_Mc(["", ""]),
    DF_MTi = DF_Mc([' <div id="message-list" aria-live="polite">\n      <div class="content">\n        ', " ", "\n      </div>\n    </div>"]),
    DF_MUi = DF_Mc([' <div\n        class="scroll-to-bottom-legacy\n          ', '">\n        ', '\n      </div>\n      <div class="scroll-to-bottom ', '">\n        ', "\n      </div>"]),
    DF_MVi = DF_Mc([' <button\n      class="scroll-to-bottom-button focus-outline"\n      aria-label="', '"\n      @click=', '>\n      <span class="material-icons icon">arrow_downward</span>\n      <span class="text">',
        "</span>\n    </button>"
    ]),
    DF_MWi = DF_Mc([' <style>\n        @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <div\n        class="message-list-wrapper\n          ', '">\n        ', " ", "\n      </div>"]);

function DF_M2() {
    var a = DF_Mz.apply(this, arguments) || this;
    a.consumerId = DF_MMi();
    a.enableCodeHighlight = !1;
    a.botWritingText = null;
    a.botWritingImage = null;
    a.urlAllowlist = null;
    a.botActorImage = null;
    a.userActorImage = null;
    a.minimized = !1;
    a.showBotWriting = !1;
    a.initialMessages = [];
    a.messages = [];
    a.M = 0;
    a.sa = !1;
    a.qa = !1;
    a.Aa = 0;
    a.Z = !1;
    a.La = new Promise(function(b) {
        a.Gc = b
    });
    a.debug = new DF_MLe;
    a.F = !1;
    return a
}
DF_Mf(DF_M2, DF_Mz);
DF_M2.D = DF_Mz.D;
DF_M2.o = DF_Mz.o;
DF_M2.s = DF_Mz.s;
DF_M2.h = DF_Mz.h;
DF_M2.g = DF_Mz.g;
DF_M2.C = DF_Mz.C;
DF_M2.i = DF_Mz.i;
DF_M2.u = DF_Mz.u;
DF_M2.m = DF_Mz.m;
DF_M2.v = DF_Mz.v;
DF_M = DF_M2.prototype;
DF_M.connectedCallback = function() {
    var a = this;
    DF_Mz.prototype.connectedCallback.call(this);
    Promise.all([].concat(DF_Me(this.enableCodeHighlight ? [DF_MLi()] : []))).then(function() {
        return void DF_MXi(a)
    })
};
DF_M.ia = function(a) {
    var b = this;
    DF_Mz.prototype.ia.call(this, a);
    DF_Mm(this, "df-messenger-message-list-loaded", {});
    (new ResizeObserver(function() {
        b.F || (b.qa = DF_MYi(b.g))
    })).observe(this.g.querySelector(".content"))
};
DF_M.ra = function(a) {
    var b = this;
    DF_Mz.prototype.ra.call(this, a);
    this.sa && (a.has("messages") || this.showBotWriting) && (this.F = !0, setTimeout(function() {
        var c = b.T.querySelector(".entry:last-child");
        c ? DF_MZi(b, c, 10) : b.F = !1
    }, 50))
};
DF_M.clearMessages = function() {
    this.messages = []
};
DF_M.addMessages = function(a) {
    var b = this;
    return DF_Mh(function(c) {
        if (c.g == 1) return DF_Mg(c, b.La, 2);
        b.messages = [].concat(DF_Me(b.messages), DF_Me(a.map(function(d) {
            return (new DF_MBi(d, b.urlAllowlist)).render()
        })));
        c.g = 0
    })
};
DF_M.getRenderedMessages = function() {
    return [].concat(DF_Me(this.messages))
};

function DF_MXi(a) {
    a.messages = a.initialMessages.map(function(b) {
        return (new DF_MBi(b, a.urlAllowlist)).render()
    });
    a.Gc();
    DF_M_i(a);
    setTimeout(function() {
        DF_M0i(a);
        DF_M1i(a);
        DF_M2i(a)
    })
}

function DF_M_i(a) {
    a.addEventListener("df-chip-clicked", function() {
        a.messages = DF_MJi(a.messages)
    })
}

function DF_M0i(a) {
    var b = a.g;
    b.addEventListener("scroll", function() {
        b.scrollTop <= a.M || (DF_Mm(a, "df-messenger-message-list-highest-scrolltop", {
            scrollTop: b.scrollTop
        }), a.M = b.scrollTop)
    });
    DF_M3i(a, a.M);
    a.sa = !0
}

function DF_M1i(a) {
    a.g.addEventListener("df-messenger-scroll-into-view", function(b) {
        b = b.detail;
        DF_MZi(a, b.element, b.padding)
    })
}

function DF_M3i(a, b) {
    var c = a.g;
    c.scrollTop = b;
    a.qa = DF_MYi(c)
}

function DF_M4i(a, b) {
    a.F = !0;
    a.g.scrollTo({
        top: b,
        behavior: "smooth"
    })
}

function DF_MZi(a, b, c) {
    var d = a.g,
        e = d.scrollTop,
        f = b.offsetTop - (c != null ? c : 0);
    if (b.offsetTop + b.offsetHeight + (c != null ? c : 0) > d.scrollTop + d.clientHeight || f < e) b.offsetHeight > d.clientHeight && (a.Z = !0), DF_M4i(a, d.scrollTop - (e - f))
}
DF_M.Ad = function() {
    var a = this.g;
    DF_M4i(this, a.scrollHeight - a.clientHeight)
};

function DF_M2i(a) {
    var b = a.g;
    a.g.addEventListener("scroll", function() {
        var c = Math.ceil(b.scrollTop),
            d = c < Math.min(a.Aa, b.scrollHeight - b.clientHeight);
        a.qa = DF_MYi(b) && (d || a.Z || a.qa);
        a.Aa = c;
        a.Z = !1;
        a.F = !1
    })
}

function DF_MYi(a) {
    return a.scrollHeight > a.clientHeight && a.scrollHeight - Math.ceil(a.scrollTop) > a.clientHeight
}

function DF_M5i(a, b) {
    return (a = b ? a.botActorImage : a.userActorImage) ? DF_Mu(DF_MOi, a) : null
}

function DF_M6i(a) {
    return a.messages.map(function(b) {
        var c = b.isBot;
        return DF_Mu(DF_MNi, c ? "bot" : "user", DF_M5i(a, c), DF_Mu(DF_MPi, a.minimized ? "minimized" : "", b, a.languageCode))
    })
}

function DF_M7i(a) {
    var b = DF_Mo(a.languageCode, "jumpToBottom");
    return DF_Mu(DF_MVi, b, a.Ad, b)
}
DF_M.render = function() {
    var a = this.qa ? "show-shadow" : "",
        b = DF_M6i(this);
    if (this.showBotWriting) {
        if (this.botWritingImage) var c = DF_Mu(DF_MRi, this.botWritingImage);
        else {
            var d;
            c = DF_Mu(DF_MSi, (d = this.botWritingText) != null ? d : "...")
        }
        c = DF_Mu(DF_MNi, "bot", DF_M5i(this, !0), DF_Mu(DF_MQi, c))
    } else c = null;
    return DF_Mu(DF_MWi, a, DF_Mu(DF_MTi, b, c), DF_Mu(DF_MUi, this.qa ? "show" : "", DF_M7i(this), this.qa ? "show" : "", DF_M7i(this)))
};
DF_Ma.Object.defineProperties(DF_M2.prototype, {
    listScrollTop: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            this.M = a;
            this.sa && DF_M3i(this, a)
        }
    },
    g: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.T.querySelector("#message-list")
        }
    }
});
var DF_M3 = DF_M2;
DF_M3.j = [DF_MId, DF_My];
DF_Mk([DF_Ms({
    l: "enable-code-highlight",
    type: Boolean
}), DF_Ml("design:type", Object)], DF_M3.prototype, "enableCodeHighlight", void 0);
DF_Mk([DF_Ms({
    l: "bot-writing-text",
    type: String
}), DF_Ml("design:type", Object)], DF_M3.prototype, "botWritingText", void 0);
DF_Mk([DF_Ms({
    l: "bot-writing-image",
    type: String
}), DF_Ml("design:type", Object)], DF_M3.prototype, "botWritingImage", void 0);
DF_Mk([DF_Ms({
    l: "url-allowlist",
    type: String
}), DF_Ml("design:type", Object)], DF_M3.prototype, "urlAllowlist", void 0);
DF_Mk([DF_Ms({
    l: "bot-actor-image",
    type: String
}), DF_Ml("design:type", Object)], DF_M3.prototype, "botActorImage", void 0);
DF_Mk([DF_Ms({
    l: "user-actor-image",
    type: String
}), DF_Ml("design:type", Object)], DF_M3.prototype, "userActorImage", void 0);
DF_Mk([DF_Ms({
    l: "minimized",
    type: Boolean,
    K: !0
}), DF_Ml("design:type", Object)], DF_M3.prototype, "minimized", void 0);
DF_Mk([DF_Ms({
    type: Boolean
}), DF_Ml("design:type", Object)], DF_M3.prototype, "showBotWriting", void 0);
DF_Mk([DF_Ms({
    type: Array
}), DF_Ml("design:type", Array)], DF_M3.prototype, "initialMessages", void 0);
DF_Mk([DF_Ms({
    type: Array
}), DF_Ml("design:type", Array)], DF_M3.prototype, "messages", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M3.prototype, "qa", void 0);
DF_M3 = DF_Mk([DF_Mp("df-messenger-message-list")], DF_M3);
var DF_M8i = DF_Mq([".titlebar-wrapper{align-items:center;background:var(--df-messenger-titlebar-background,var(--df-messenger-titlebar-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color)\n        )\n      )\n    );border:var(--df-messenger-titlebar-border,none);border-bottom:var(--df-messenger-titlebar-border-bottom,none);border-top-left-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius)\n    );border-top-right-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius)\n    );color:var(--df-messenger-titlebar-font-color,#fff);display:flex;min-height:50px;padding:var(--df-messenger-titlebar-padding,0 15px)}#titlebar-title{align-items:center;display:flex;flex-direction:var(--df-messenger-titlebar-title-order,row);flex-grow:1;justify-content:var(--df-messenger-titlebar-title-align,flex-start);margin:-6px;overflow:hidden;padding:6px}#titlebar-title:focus-visible:before{inset:6px}#titlebar-title img{height:var(--df-messenger-titlebar-icon-height,var(--df-messenger-titlebar-title-font-size,18px)\n    );margin:var(--df-messenger-titlebar-icon-padding,0 12px 0 0);width:var(--df-messenger-titlebar-icon-width,var(--df-messenger-titlebar-title-font-size,18px)\n    )}#titlebar-title .title-text{align-items:var(--df-messenger-titlebar-title-align,start);display:flex;flex-direction:column;flex-grow:1;overflow:hidden}#titlebar-title h2{font-family:var(--df-messenger-titlebar-title-font-family,var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-titlebar-title-font-size,18px);font-weight:var(--df-messenger-titlebar-title-font-weight,400);letter-spacing:var(--df-messenger-titlebar-title-letter-spacing,var(--df-messenger-titlebar-letter-spacing,normal)\n    );line-height:var(--df-messenger-titlebar-title-line-height,normal)}#titlebar-title h2,#titlebar-title h3{margin:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#titlebar-title h3{color:var(--df-messenger-titlebar-subtitle-font-color,var(--df-messenger-titlebar-font-color,#fff)\n    );font-family:var(--df-messenger-titlebar-subtitle-font-family,var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-titlebar-subtitle-font-size,14px);font-weight:var(--df-messenger-titlebar-subtitle-font-weight,400);letter-spacing:var(--df-messenger-titlebar-subtitle-letter-spacing,var(--df-messenger-titlebar-letter-spacing,normal)\n    );line-height:var(--df-messenger-titlebar-subtitle-line-height,normal)}.actions{align-items:center;display:flex}.actions .offset{margin-right:-12px}"]);
var DF_M9i = DF_Mc(['<img src="', '" />']),
    DF_M$i = DF_Mc(['<h2 tabindex="-1">', "</h2>"]),
    DF_Maj = DF_Mc(['<h3 tabindex="-1">', "</h3>"]),
    DF_Mbj = DF_Mc([' <div class="title-text"> ', " ", " </div>"]),
    DF_Mcj = DF_Mc(['\n      <div class="titlebar-wrapper">\n        <div\n          id="titlebar-title"\n          class="focus-outline-contrast focus-outset focus-box"\n          tabindex="0">\n          ', " ", '\n        </div>\n        <div class="actions">\n          <slot name="action"></slot>\n          <div class="offset"></div>\n        </div>\n      </div>\n    ']);

function DF_Mdj() {
    var a = DF_Mz.apply(this, arguments) || this;
    a.chatTitle = null;
    a.chatSubtitle = null;
    a.chatTitleIcon = null;
    return a
}
DF_Mf(DF_Mdj, DF_Mz);
DF_Mdj.D = DF_Mz.D;
DF_Mdj.o = DF_Mz.o;
DF_Mdj.s = DF_Mz.s;
DF_Mdj.h = DF_Mz.h;
DF_Mdj.g = DF_Mz.g;
DF_Mdj.C = DF_Mz.C;
DF_Mdj.i = DF_Mz.i;
DF_Mdj.u = DF_Mz.u;
DF_Mdj.m = DF_Mz.m;
DF_Mdj.v = DF_Mz.v;
DF_Mdj.prototype.render = function() {
    var a = this.chatTitleIcon ? DF_Mu(DF_M9i, this.chatTitleIcon) : null;
    var b = (b = DF_M5a(this.chatTitle, this.languageCode, "chatTitle")) ? DF_Mu(DF_M$i, b) : null;
    var c = this.chatSubtitle ? DF_Mu(DF_Maj, this.chatSubtitle) : null;
    return DF_Mu(DF_Mcj, a, b || c ? DF_Mu(DF_Mbj, b, c) : null)
};
var DF_Mej = DF_Mdj;
DF_Mej.j = [DF_M8i, DF_My];
DF_Mk([DF_Ms({
    type: String
}), DF_Ml("design:type", Object)], DF_Mej.prototype, "chatTitle", void 0);
DF_Mk([DF_Ms({
    type: String
}), DF_Ml("design:type", Object)], DF_Mej.prototype, "chatSubtitle", void 0);
DF_Mk([DF_Ms({
    type: String
}), DF_Ml("design:type", Object)], DF_Mej.prototype, "chatTitleIcon", void 0);
DF_Mej = DF_Mk([DF_Mp("df-messenger-titlebar")], DF_Mej);
var DF_Mfj = DF_Mq([":host{--df-messenger-internal-input-font-size:var(--df-messenger-input-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n      )\n    );--df-messenger-internal-input-font-color:var(--df-messenger-input-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n      )\n    );--df-messenger-internal-input-font-family:var(--df-messenger-input-font-family,var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n    )\n  )}.input-container{background:var(--df-messenger-input-background,var(--df-messenger-input-background-color,#fff)\n    );border:var(--df-messenger-input-border,none);border-bottom-left-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius)\n    );border-bottom-right-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius)\n    );position:relative}:host(.border-top) .input-container{border-top:var(--df-messenger-input-border-top,var(--df-messenger-default-border)\n    )}.input-box-wrapper{align-items:flex-end;display:flex;margin-left:auto;margin-right:auto;max-width:var(--df-messenger-input-max-width,var(--df-messenger-chat-max-width,none)\n    );overflow-y:auto;padding:var(--df-messenger-input-padding,8px);scrollbar-gutter:var(--df-messenger-input-gutter,stable)}.input-wrapper{border-bottom:var(--df-messenger-input-border-bottom,none);flex-grow:1;min-width:0;overflow:hidden;padding:var(--df-messenger-input-inner-padding,0 48px 0 0)}.input-wrapper.with-upload{padding:var(--df-messenger-input-inner-padding,0 48px 0 48px)}.input-element-wrapper{align-items:center;background:var(--df-messenger-input-box-background,var(--df-messenger-input-box-background-color,transparent)\n    );border:var(--df-messenger-input-box-border,none);border-radius:var(--df-messenger-input-box-border-radius,0);cursor:text;display:flex;padding:var(--df-messenger-input-box-padding,12px 0);position:relative}.input-element-wrapper:focus-within{border:var(--df-messenger-input-box-focus-border,var(--df-messenger-input-box-border,none)\n    );padding:var(--df-messenger-input-box-focus-padding,var(--df-messenger-input-box-padding,12px 0)\n    )}::placeholder{color:var(--df-messenger-input-placeholder-font-color,var(--df-messenger-internal-input-font-color)\n    );opacity:.7}::-ms-input-placeholder{color:var(--df-messenger-input-placeholder-font-color,var(--df-messenger-internal-input-font-color)\n    );opacity:.7}.input-content-wrapper{flex-grow:1;font-size:0;min-width:0}textarea.input-box{background-color:transparent;border:none;color:var(--df-messenger-internal-input-font-color);font-family:var(--df-messenger-internal-input-font-family);font-size:var(--df-messenger-internal-input-font-size);font-weight:var(--df-messenger-input-font-weight,normal);margin:0;max-height:calc(var(--df-messenger-internal-input-font-size)*4);outline:0;padding:0;resize:none;text-overflow:ellipsis;width:100%}textarea.input-box:focus{outline-width:0}textarea.input-box::placeholder{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.microphone{fill:var(--df-messenger-send-icon-color,var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color)\n      )\n    );height:48px;margin:var(--df-messenger-input-microphone-offset,-12px 0 -12px 0);padding:12px;width:48px}.input-box-wrapper.show-focus{position:relative}.upload-icon-button-wrapper{align-items:center;display:flex;height:48px;justify-content:center;margin-right:calc(-48px + var(--df-messenger-upload-offset-x, 0px));position:relative;width:48px;z-index:1}.upload-icon-button-wrapper button{padding:0}.upload-icon-button-wrapper input{inset:0;opacity:0;position:absolute;z-index:-1}.upload-icon-button-wrapper img{height:24px;margin:12px;width:24px}.send-icon-button-wrapper{align-items:center;display:flex;height:48px;justify-content:center;margin-left:calc(-48px + var(--df-messenger-send-icon-offset-x, 0px));position:relative;width:48px;z-index:1}#send-icon-button,#send-icon-button:focus,#send-icon-button:hover{border:none;padding:0}#send-icon-button:not(.action-button){background-color:transparent}#send-icon-button:focus{outline:none}#send-icon-button:focus-visible{position:relative}#send-icon,.upload-icon-button-wrapper svg{fill:var(--df-messenger-send-icon-color,var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color)\n      )\n    );height:24px;margin:12px;width:24px}#send-icon-button.active:hover #send-icon{fill:var(--df-messenger-send-icon-color-hover,var(--df-messenger-send-icon-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color)\n        )\n      )\n    )}#send-icon-button.active #send-icon,.microphone.active{fill:var(--df-messenger-send-icon-color-active,var(--df-messenger-send-icon-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color)\n      )\n    )\n  )}#send-icon-button:disabled #send-icon,#upload-button:disabled svg,.microphone:disabled{fill:var(--df-messenger-send-icon-color-disabled,rgba(31,31,31,.38))}#upload-button:disabled img{opacity:var(--df-messenger-upload-icon-opacity-disabled,.38)}.send-icon-button-wrapper,.upload-icon-button-wrapper{margin-bottom:var(--df-messenger-send-icon-offset-y,-4px)}.popout-wrapper{left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:1px;transform:translateY(-100%)}.popout-wrapper.show{pointer-events:auto}.popout-wrapper .popout{display:flex;font-family:var(--df-messenger-font-family,var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-input-info-font-size,var(--df-messenger-font-size,var(--df-messenger-default-font-size)\n      )\n    );font-weight:var(--df-messenger-input-info-font-weight,normal);gap:16px;line-height:var(--df-messenger-input-info-line-height,20px);padding:var(--df-messenger-input-info-padding,14px 16px);transform:translateY(100%);transition:transform .2s}.popout-wrapper.show .popout{transform:translateY(0);transition:transform .2s}.error{background:var(--df-messenger-input-error-background,var(--df-messenger-input-error-background-color,#f9dedc)\n    );color:var(--df-messenger-input-error-color,#410e0b)}.error .material-icons{color:var(--df-messenger-input-error-icon-color,#b3261e)}.warning-wrapper{display:var(--df-messenger-input-long-text-warning-display,none)}.warning{background:var(--df-messenger-input-warning-background,#fef7e0);color:var(--df-messenger-input-warning-color,#410e0b)}.warning .material-icons{color:var(--df-messenger-input-warning-icon-color,#e37400)}.audio-state{align-items:center;background:var(--df-messenger-input-audio-recording-background,#f0f4f9);border:var(--df-messenger-input-audio-recording-border,var(--df-messenger-default-border)\n    );border-radius:var(--df-messenger-input-audio-recording-border-radius,999px);display:inline-flex;height:24px;margin:var(--df-messenger-input-audio-recording-offset,-12px 0);padding:11px}.audio-state img{margin-left:8px;max-height:24px}.audio-state button{background:none;border:var(--df-messenger-input-audio-recording-cancel-border,none);border-radius:var(--df-messenger-input-audio-recording-cancel-border-radius,999px);margin-left:16px;padding:0}.audio-state svg{fill:var(--df-messenger-input-audio-recording-cancel-color,var(--df-messenger-default-icon-font-color)\n    );cursor:pointer;height:24px;width:24px}.file-state{align-items:center;background:var(--df-messenger-input-file-background,#f0f4f9);border:var(--df-messenger-input-file-border,var(--df-messenger-default-border)\n    );color:var(--df-messenger-input-file-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)\n      )\n    );display:inline-flex;height:24px;margin:var(--df-messenger-input-file-offset,12px 0 -8px 0);max-width:calc(100% + var(--df-messenger-input-file-max-width-fix, -24px));padding:11px}.file-state.image{border-radius:var(--df-messenger-input-file-image-border-radius,var(--df-messenger-default-border-radius)\n    )}.file-state.file{border-radius:var(--df-messenger-input-file-file-border-radius,999px)}.file-state .file-icon{color:inherit;font-size:24px;margin-right:8px}.file-state .image-preview{border-radius:inherit;height:var(--df-messenger-input-file-image-height,24px);margin:var(--df-messenger-input-file-image-offset,0 8px 0 0);width:auto}.file-state .file-name{font-family:var(--df-messenger-internal-input-font-family);font-size:var(--df-messenger-internal-input-font-size);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.file-state button{background:none;border:var(--df-messenger-input-file-cancel-border,none);border-radius:var(--df-messenger-input-file-cancel-border-radius,999px);margin-left:16px;padding:0}.file-state svg{fill:var(--df-messenger-input-file-cancel-color,var(--df-messenger-default-icon-font-color)\n    );cursor:pointer;height:24px;width:24px}"]);
var DF_Mgj = DF_Mc(["var(--df-messenger-default-border-radius)"]),
    DF_Mhj = DF_Mc(["\n  .show-focus::after {\n    ", "\n  }\n"]),
    DF_Mij = DF_Mc('<div class="upload-icon-button-wrapper">\n      <button\n        id="upload-button"\n        class="focus-outline action-button"\n        ?disabled=;\n        aria-label=";"\n        @click=;>\n        ;\n      </button>\n      <input\n        type="file"\n        name="filedata"\n        aria-hidden="true"\n        tabindex="-1"\n        @change=; />\n    </div>'.split(";")),
    DF_Mjj = DF_Mc(['<img\n        class="file-upload-icon"\n        src="', '" />']),
    DF_Mkj = DF_Mc(['<textarea class="input-box" disabled rows="1"></textarea>']),
    DF_Mlj = DF_Mc(' <textarea\n      class="input-box"\n      rows="1"\n      @input=;\n      @keydown=;\n      @focusin=;\n      @focusout=;\n      type="text"\n      aria-label=";"\n      placeholder=";"></textarea>'.split(";")),
    DF_Mmj = DF_Mc(' <button\n      class="microphone action-button focus-outline\n          ;"\n      ?disabled=;\n      aria-label=";"\n      @click=;>\n      ;\n    </button>'.split(";")),
    DF_Mnj = DF_Mc([' <div class="audio-state">\n      <img src="', '" />\n      <button\n        class="focus-outline"\n        @click=', ">\n        ", "\n      </button>\n    </div>"]),
    DF_Moj = DF_Mc(' <div\n      class="file-state ;">\n      ;\n      <span class="file-name">;</span>\n      <button\n        class="focus-outline"\n        @click=;>\n        ;\n      </button>\n    </div>'.split(";")),
    DF_Mpj = DF_Mc(['<img\n        class="image-preview"\n        src="', '" />']),
    DF_Mqj = DF_Mc(['<span class="material-icons file-icon">',
        "</span>"
    ]),
    DF_Mrj = DF_Mc(' <div\n      class="input-element-wrapper"\n      @mousedown=;\n      @click=;>\n      <div class="input-content-wrapper">\n        ;\n        \x3c!-- Additional elements. --\x3e\n        ; ;\n      </div>\n      ;\n    </div>'.split(";")),
    DF_Msj = DF_Mc(' <style>\n        @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <div class="input-container">\n        <div\n          class="popout-wrapper ,"\n          aria-hidden=,>\n          <div class="popout error">\n            <span class="material-icons">warning_amber</span>\n            <div>,</div>\n          </div>\n        </div>\n        <div\n          class="popout-wrapper\n            ,"\n          aria-hidden=,>\n          <div class="popout warning">\n            <span class="material-icons">error_outline</span>\n            <div>,</div>\n          </div>\n        </div>\n        <div class="input-box-wrapper ,">\n          ,\n          <div\n            class="input-wrapper ,">\n            ,\n          </div>\n          <div class="send-icon-button-wrapper">\n            <button\n              class="focus-outline focus-inset\n                  ,"\n              ?disabled=,\n              id="send-icon-button"\n              @click=,\n              aria-label=",">\n              <svg xmlns="http://www.w3.org/2000/svg" id="send-icon">\n                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />\n                <path d="M0 0h24v24H0z" fill="none" />\n              </svg>\n            </button>\n          </div>\n        </div>\n      </div>'.split(",")),
    DF_Mtj = DF_Mq(DF_Mhj, DF_MEd(DF_Mq(DF_Mgj), !1));

function DF_M4() {
    var a = DF_Mz.apply(this, arguments) || this;
    a.disabled = !1;
    a.submitDisabled = !1;
    a.ya = !1;
    a.Gb = "";
    a.Ja = !1;
    a.jb = !1;
    a.nb = !1;
    a.placeholderText = null;
    a.maxInputValueLength = 256;
    a.enableFileUpload = !1;
    a.fileUploadIcon = null;
    a.enableAudioInput = !1;
    a.audioStateImageActive = null;
    a.audioStateImagePassive = null;
    a.file = null;
    a.audio = null;
    a.V = null;
    return a
}
DF_Mf(DF_M4, DF_Mz);
DF_M4.D = DF_Mz.D;
DF_M4.o = DF_Mz.o;
DF_M4.s = DF_Mz.s;
DF_M4.h = DF_Mz.h;
DF_M4.g = DF_Mz.g;
DF_M4.C = DF_Mz.C;
DF_M4.i = DF_Mz.i;
DF_M4.u = DF_Mz.u;
DF_M4.m = DF_Mz.m;
DF_M4.v = DF_Mz.v;
DF_M = DF_M4.prototype;
DF_M.ac = function() {
    var a = this,
        b, c;
    return DF_Mh(function(d) {
        if (d.g == 1) {
            if (a.disabled || a.submitDisabled || !(DF_Muj(a) || a.file || a.audio || a.V)) return d.return();
            (b = DF_Muj(a)) || !a.V ? (d.g = 2, d = void 0) : d = DF_Mg(d, DF_Mvj(a.V), 2);
            return d
        }
        c = DF_Mm(a, "df-user-input-entered", Object.assign({}, b ? {
            input: a.g
        } : {}, a.file ? {
            file: a.file
        } : {}, a.audio ? {
            audio: a.audio
        } : {}));
        if (!c) return d.return();
        b && (a.ab.renderCustomText(a.g, !1), a.sendRequest(a.g));
        DF_Mwj(a);
        d.g = 0
    })
};
DF_M.Zb = function() {
    this.ma.style.height = "";
    this.ma.style.height = this.ma.scrollHeight.toString() + "px";
    var a = this.g.length;
    DF_Mbb(a, this.maxInputValueLength) ? (this.ya = !1, this.Ja = a > 256) : (this.ya = !0, this.Gb = DF_Mo(this.languageCode, "messageTooLong", {
        numOfChars: "" + (a - this.maxInputValueLength)
    }), this.Ja = !1);
    DF_MVa(this)
};
DF_M.sendRequest = function(a) {
    var b = this,
        c;
    return DF_Mh(function(d) {
        return DF_Mg(d, (c = b.ab) == null ? void 0 : c.presenter.sendQuery(a), 0)
    })
};

function DF_Mwj(a) {
    a.audio = null;
    a.file = null;
    var b = a.ma;
    b && (a.ya = !1, a.Ja = !1, b.value = "", b.style.height = "")
}

function DF_Muj(a) {
    var b = a.g.length;
    return b > 0 && DF_Mbb(b, a.maxInputValueLength)
}
DF_M.Dc = function() {
    var a = this;
    this.nb = !this.jb;
    setTimeout(function() {
        a.jb = !1
    }, 1)
};
DF_M.Ec = function() {
    this.nb = !1
};
DF_M.od = function() {
    this.T.querySelector(".upload-icon-button-wrapper input").click()
};

function DF_Mxj(a, b) {
    b.stopPropagation();
    a.ab && (a.V ? DF_Mvj(a.V) : (DF_Mwj(a), a.V = a.ab.presenter.createAudioRecorder(), DF_Myj(a.V).then(function(c) {
        c && (a.audio = c, DF_Mm(a, "df-audio-input-recorded", {
            data: c
        }))
    }).catch(function() {}).finally(function() {
        a.V = null
    })))
}

function DF_Mzj(a) {
    if (!a.enableFileUpload) return null;
    var b = DF_Mo(a.languageCode, "uploadFileAriaLabel");
    return DF_Mu(DF_Mij, !(!a.disabled && !a.submitDisabled), b, a.od, a.fileUploadIcon ? DF_Mu(DF_Mjj, a.fileUploadIcon) : DF_M$d, function(c) {
        var d, e = (d = c.target.files) == null ? void 0 : d[0];
        e && (a.audio = null, a.file = e, DF_Mm(a, "df-upload-file-selected", {
            file: e
        }), c.target.value = "")
    })
}

function DF_MAj(a) {
    if (a.V || a.audio) return null;
    if (a.disabled) return DF_Mu(DF_Mkj);
    var b = a.placeholderText || DF_Mo(a.languageCode, "askSomething"),
        c = DF_Mo(a.languageCode, "inputAriaLabel");
    return DF_Mu(DF_Mlj, a.Zb, function(d) {
        d.key !== "Enter" || d.shiftKey || (d.preventDefault(), DF_Muj(a) && a.ac())
    }, a.Dc, a.Ec, c, b)
}

function DF_MBj(a) {
    if (!a.enableAudioInput) return null;
    var b = DF_Mo(a.languageCode, "microphoneAriaLabel");
    return DF_Mu(DF_Mmj, a.V ? "active" : "", !(!a.disabled && !a.submitDisabled), b, function(c) {
        return void DF_Mxj(a, c)
    }, DF_Mae)
}

function DF_MCj(a) {
    return a.V || a.audio ? DF_Mu(DF_Mnj, a.V ? a.audioStateImageActive || "https://www.gstatic.com/dialogflow-console/common/assets/dialogflow-messenger/sound-wave.gif" : a.audioStateImagePassive || "https://www.gstatic.com/dialogflow-console/common/assets/dialogflow-messenger/sound-wave-silent.gif", function(b) {
        b.stopPropagation();
        a.audio = null;
        (b = a.V) != null && (b.Ob = !0, DF_Mvj(b))
    }, DF_M0d) : null
}

function DF_MDj(a) {
    return a.file ? DF_Mu(DF_Moj, DF_Mcb.has(a.file.type) ? "image" : "file", DF_MEj(a.file), a.file.name, function(b) {
        b.stopPropagation();
        a.file = null
    }, DF_M0d) : null
}

function DF_MEj(a) {
    if (DF_Mcb.has(a.type)) {
        if (typeof MediaSource !== "undefined" && a instanceof MediaSource) a = new DF_Mac(URL.createObjectURL(a));
        else {
            var b = a.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
            if ((b == null ? void 0 : b.length) !== 2 || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(b[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1]) || /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1]) ||
                    /^font\/\w+/i.test(b[1]))) throw Error("");
            a = new DF_Mac(URL.createObjectURL(a))
        }
        a = DF_Mu(DF_Mpj, a)
    } else a = DF_Mu(DF_Mqj, a.type === "application/pdf" ? "picture_as_pdf" : "file_present");
    return a
}

function DF_MFj(a) {
    return DF_Mu(DF_Mrj, function() {
        return a.jb = !0
    }, function() {
        var b;
        return void((b = a.ma) == null ? void 0 : b.focus())
    }, DF_MAj(a), DF_MCj(a), DF_MDj(a), DF_MBj(a))
}
DF_M.render = function() {
    var a = DF_Mo(this.languageCode, "sendAriaLabel"),
        b = DF_Mo(this.languageCode, "messageTooLongWarning");
    return DF_Mu(DF_Msj, this.ya ? "show" : "", !this.ya, this.Gb, this.Ja ? "show warning-wrapper" : "", !this.Ja, b, this.nb ? "show-focus" : "", DF_Mzj(this), this.enableFileUpload ? "with-upload" : "", DF_MFj(this), this.active ? "active action-button" : "", !this.active, this.ac, a)
};
DF_Ma.Object.defineProperties(DF_M4.prototype, {
    active: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return !this.ya && !this.disabled && !this.submitDisabled && (DF_Muj(this) || !!this.file || !!this.audio || !!this.V)
        }
    },
    ma: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.T.querySelector("textarea")
        }
    },
    g: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a;
            return ((a = this.ma) == null ? void 0 : a.value) || ""
        }
    }
});
var DF_M5 = DF_M4;
DF_M5.j = [DF_Mfj, DF_My, DF_Mtj];
DF_Mk([DF_M0a({
    context: "df-instance",
    subscribe: !0
}), DF_Ml("design:type", Object)], DF_M5.prototype, "ab", void 0);
DF_Mk([DF_Ms({
    l: !1
}), DF_Ml("design:type", Object)], DF_M5.prototype, "disabled", void 0);
DF_Mk([DF_Ms({
    l: !1
}), DF_Ml("design:type", Object)], DF_M5.prototype, "submitDisabled", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M5.prototype, "ya", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M5.prototype, "Gb", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M5.prototype, "Ja", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M5.prototype, "nb", void 0);
DF_Mk([DF_Ms({
    l: !1,
    type: String
}), DF_Ml("design:type", Object)], DF_M5.prototype, "placeholderText", void 0);
DF_Mk([DF_Ms({
    l: !1,
    type: Number
}), DF_Ml("design:type", Object)], DF_M5.prototype, "maxInputValueLength", void 0);
DF_Mk([DF_Ms({
    l: !1,
    type: Boolean
}), DF_Ml("design:type", Object)], DF_M5.prototype, "enableFileUpload", void 0);
DF_Mk([DF_Ms({
    l: !1,
    type: String
}), DF_Ml("design:type", Object)], DF_M5.prototype, "fileUploadIcon", void 0);
DF_Mk([DF_Ms({
    l: !1,
    type: Boolean
}), DF_Ml("design:type", Object)], DF_M5.prototype, "enableAudioInput", void 0);
DF_Mk([DF_Ms({
    l: !1,
    type: String
}), DF_Ml("design:type", Object)], DF_M5.prototype, "audioStateImageActive", void 0);
DF_Mk([DF_Ms({
    l: !1,
    type: String
}), DF_Ml("design:type", Object)], DF_M5.prototype, "audioStateImagePassive", void 0);
DF_Mk([DF_Ms({
    l: !1,
    type: File
}), DF_Ml("design:type", Object)], DF_M5.prototype, "file", void 0);
DF_Mk([DF_Ms({
    l: !1,
    type: Blob
}), DF_Ml("design:type", Object)], DF_M5.prototype, "audio", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M5.prototype, "V", void 0);
DF_M5 = DF_Mk([DF_Mp("df-messenger-user-input")], DF_M5);
var DF_MGj = DF_Mc(['<div\n      class="function-call\n          ', '">\n      <button @click=', ">\n        ", "\n      </button>\n    </div>"]),
    DF_MHj = DF_Mc([' <div class="error ', '">\n      ', "\n    </div>"]),
    DF_MIj = DF_Mc(' ;\n      <div class="message-list-wrapper">\n        ; ;\n        ;\n      </div>\n      <df-messenger-user-input\n        class="border-top"\n        .disabled=;\n        .submitDisabled=;\n        .placeholderText=;\n        .maxInputValueLength=;\n        .enableFileUpload=;\n        .enableAudioInput=;\n        .audioStateImageActive=;\n        .audioStateImagePassive=;\n        .fileUploadIcon=;\n        .languageCode=;></df-messenger-user-input>'.split(";")),
    DF_MJj = DF_Mc(["<df-messenger-auth-screen\n      .requestAuthText=", "></df-messenger-auth-screen>"]),
    DF_MKj = DF_Mc(['<div class="demo-banner">\n      UI Demo. Not connected to an agent.\n    </div>']),
    DF_MLj = DF_Mc([' <slot name="titlebar">\n      \x3c!--\n          Use default titlebar, used if nothing else specified for the slot.\n        --\x3e\n      <df-messenger-titlebar\n        .chatTitle=', "\n        .chatSubtitle=", "\n        .chatTitleIcon=", "\n        .languageCode=", '>\n        <slot name="titlebar-actions" slot="action"></slot>\n      </df-messenger-titlebar>\n    </slot>']),
    DF_MMj = DF_Mc([' <div\n      class="chat-wrapper"\n      role="dialog"\n      aria-label="', '">\n      ', " ", " ", "\n    </div>"]);

function DF_MNj() {
    var a = DF_Mx.apply(this, arguments) || this;
    a.noTitlebar = !1;
    a.isNestedChatElement = !1;
    a.Ca = null;
    a.F = null;
    a.botWriting = !1;
    a.isAuthenticationPending = !1;
    a.Hb = !1;
    a.isWaitingForElement = !1;
    a.g = new DF_M3;
    a.M = DF_Mab(function() {
        if (!a.R) return !1;
        a.R.registerMessageConsumer(a.g);
        DF_MOj(a);
        setTimeout(function() {
            var b, c;
            a.g.listScrollTop = (c = (b = a.R) == null ? void 0 : b.presenter.getChatScrollDistance()) != null ? c : 0
        });
        a.isNestedChatElement || DF_Mnd(a);
        return !0
    });
    return a
}
DF_Mf(DF_MNj, DF_Mx);
DF_MNj.D = DF_Mx.D;
DF_MNj.o = DF_Mx.o;
DF_MNj.s = DF_Mx.s;
DF_MNj.h = DF_Mx.h;
DF_MNj.g = DF_Mx.g;
DF_MNj.C = DF_Mx.C;
DF_MNj.i = DF_Mx.i;
DF_MNj.u = DF_Mx.u;
DF_MNj.m = DF_Mx.m;
DF_MNj.v = DF_Mx.v;
DF_M = DF_MNj.prototype;
DF_M.connectedCallback = function() {
    var a = this;
    DF_Mx.prototype.connectedCallback.call(this);
    this.id = "df-chat-wrapper";
    this.addEventListener("df-messenger-message-list-highest-scrolltop", function(b) {
        b = b.detail.scrollTop;
        var c;
        (c = a.R) == null || c.presenter.storeChatScrollDistance(b)
    })
};
DF_M.ra = function(a) {
    DF_Mx.prototype.ra.call(this, a);
    this.M()
};
DF_M.setInput = function(a) {
    var b;
    if ((b = this.T.querySelector("df-messenger-user-input")) != null) {
        b.file = null;
        b.audio = null;
        var c = b.ma;
        if (c) {
            c.value = a;
            if (a = b.ma) b.jb = !0, a.focus();
            b.Zb()
        }
    }
};

function DF_MOj(a) {
    var b;
    (b = a.R) == null || b.addEventListener("df-messenger-error", function(c) {
        var d, e;
        a.Ca = (e = (d = c.detail.error.error) == null ? void 0 : d.status) != null ? e : null;
        clearTimeout(a.Z);
        a.Z = setTimeout(function() {
            a.Ca = null
        }, 5E3)
    })
}
DF_M.ld = function() {
    var a;
    (a = this.R) == null || a.abandonClientSideFunctionCalls()
};
DF_M.render = function() {
    var a = DF_M5a(this.chatTitle, this.languageCode, "chatTitle");
    var b = this.isWaitingForElement;
    var c = this.botWriting || this.Hb,
        d, e = this.noTitlebar ? null : DF_Mu(DF_MLj, this.chatTitle, this.chatSubtitle, this.chatTitleIcon, this.languageCode),
        f, g = DF_Mo(this.languageCode, ((f = this.Ca) != null ? f : this.F) === "403" ? "authErrorMessage" : "genericErrorMessage");
    this.F = this.Ca;
    f = DF_Mu(DF_MHj, this.Ca ? "show" : "", g);
    var h;
    this.g.enableCodeHighlight = ((h = this.R) == null ? void 0 : h.enableCodeHighlight) || !1;
    var k;
    this.g.urlAllowlist = ((k = this.R) == null ? void 0 : k.urlAllowlist) || null;
    this.g.languageCode = this.languageCode;
    this.g.showBotWriting = this.botWriting;
    this.g.botWritingText = this.botWritingText;
    this.g.botWritingImage = this.botWritingImage;
    this.g.botActorImage = this.botActorImage;
    this.g.userActorImage = this.userActorImage;
    h = this.g;
    k = DF_Mo(this.languageCode, "cancelClientSideTask");
    b = DF_Mu(DF_MIj, e, f, h, DF_Mu(DF_MGj, this.Hb ? "show" : "", this.ld, k), b, c, this.placeholderText, ((d = this.R) == null ? void 0 : d.maxQueryLength) ||
        DF_Mv, this.enableFileUpload, this.enableAudioInput, this.audioStateImageActive, this.audioStateImagePassive, this.fileUploadIcon, this.languageCode);
    return DF_Mu(DF_MMj, a, b, this.isAuthenticationPending ? DF_Mu(DF_MJj, this.requestAuthText) : null, DF_Mu(DF_MKj))
};
var DF_MPj = DF_MNj;
DF_MPj.j = [DF_MHd, DF_My];
DF_Mk([DF_Ms({
    l: "no-titlebar",
    type: Boolean,
    K: !0
}), DF_Ml("design:type", Object)], DF_MPj.prototype, "noTitlebar", void 0);
DF_Mk([DF_Ms({
    l: !1,
    type: Boolean
}), DF_Ml("design:type", Object)], DF_MPj.prototype, "isNestedChatElement", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MPj.prototype, "Ca", void 0);
DF_Mk([DF_M0a({
    context: "df-botwriting",
    subscribe: !0
}), DF_Mt(), DF_Ml("design:type", Object)], DF_MPj.prototype, "botWriting", void 0);
DF_Mk([DF_M0a({
    context: "df-authenticationpending",
    subscribe: !0
}), DF_Mt(), DF_Ml("design:type", Object)], DF_MPj.prototype, "isAuthenticationPending", void 0);
DF_Mk([DF_M0a({
    context: "df-executingclientsidefunction",
    subscribe: !0
}), DF_Mt(), DF_Ml("design:type", Object)], DF_MPj.prototype, "Hb", void 0);
DF_Mk([DF_M0a({
    context: "df-iswaitingforelement",
    subscribe: !0
}), DF_Mt(), DF_Ml("design:type", Object)], DF_MPj.prototype, "isWaitingForElement", void 0);
DF_MPj = DF_Mk([DF_Mp("df-messenger-chat")], DF_MPj);
var DF_MQj = DF_Mq([":host{--df-messenger-internal-chat-bubble-size:var(--df-messenger-chat-bubble-size,64px);--df-messenger-internal-chat-window-offset:var(--df-messenger-chat-window-offset,16px);--df-messenger-internal-chat-bubble-size-offset:calc(var(--df-messenger-internal-chat-bubble-size) + var(--df-messenger-internal-chat-window-offset));--df-messenger-internal-chat-bubble-size-half:calc(var(--df-messenger-internal-chat-bubble-size)/2);--df-messenger-internal-chat-bubble-size-half-neg:calc(0px - var(--df-messenger-internal-chat-bubble-size)/2);--df-messenger-internal-chat-bubble-size-half-offset:calc(var(--df-messenger-internal-chat-bubble-size)/2 + var(--df-messenger-internal-chat-window-offset));--df-messenger-internal-chat-bubble-size-half-offset-neg:calc(0px - var(--df-messenger-internal-chat-bubble-size)/2 - var(--df-messenger-internal-chat-window-offset))}.container{display:inline-block;position:relative}.bubble{align-items:center;background:var(--df-messenger-chat-bubble-background,var(--df-messenger-chat-bubble-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color)\n        )\n      )\n    );border:none;border:var(--df-messenger-chat-bubble-border,none);border-radius:var(--df-messenger-chat-bubble-border-radius,var(--df-messenger-internal-chat-bubble-size-half)\n    );cursor:pointer;display:flex;height:var(--df-messenger-internal-chat-bubble-size);justify-content:center;margin:0;padding:0;position:relative;user-select:none;width:var(--df-messenger-internal-chat-bubble-size)}.bubble .icon{height:var(--df-messenger-chat-bubble-icon-size,36px);opacity:1;transition:opacity .5s;width:var(--df-messenger-chat-bubble-icon-size,36px)}.bubble .icon.fade{opacity:0;transition:opacity .5s}.bubble .close-icon{height:var(--df-messenger-chat-bubble-close-icon-size,24px);left:50%;opacity:0;position:absolute;top:50%;transform:translate(-50%,-50%) rotate(0deg);transition:transform .5s,opacity .5s;width:var(--df-messenger-chat-bubble-close-icon-size,24px)}.bubble .close-icon.rotate-fade{opacity:1;transform:translate(-50%,-50%) rotate(var(--df-messenger-chat-bubble-close-icon-transform-rotate,-90deg));transition:transform .5s,opacity .5s}.bubble .close-icon svg,.bubble .icon svg{fill:var(--df-messenger-chat-bubble-icon-color,#fff);height:inherit;width:inherit}.bubble .close-icon img,.bubble .icon img{height:inherit;width:inherit}.chat-wrapper{border-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius)\n    );bottom:var(--df-messenger-internal-chat-bubble-size-offset);box-shadow:var(--df-messenger-chat-window-box-shadow,none);height:var(--df-messenger-chat-window-height,480px);position:absolute;right:0;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-neg),var(--df-messenger-internal-chat-bubble-size-half-offset)) scale(.01);transform-origin:bottom right;transition:transform .3s,visibility .3s 0s;visibility:hidden;width:var(--df-messenger-chat-window-width,320px)}.chat-wrapper.right-bottom,.min-chat-wrapper.right-bottom{bottom:unset;left:var(--df-messenger-internal-chat-bubble-size-offset);right:unset;top:0;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset-neg),var(--df-messenger-internal-chat-bubble-size-half)) scale(.01);transform-origin:top left}.chat-wrapper.right-top,.min-chat-wrapper.right-top{bottom:0;left:var(--df-messenger-internal-chat-bubble-size-offset);right:unset;top:unset;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset-neg),var(--df-messenger-internal-chat-bubble-size-half-neg)) scale(.01);transform-origin:bottom left}.chat-wrapper.left-bottom,.min-chat-wrapper.left-bottom{bottom:unset;left:unset;right:var(--df-messenger-internal-chat-bubble-size-offset);top:0;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset),var(--df-messenger-internal-chat-bubble-size-half)) scale(.01);transform-origin:top right}.chat-wrapper.left-top,.min-chat-wrapper.left-top{bottom:0;left:unset;right:var(--df-messenger-internal-chat-bubble-size-offset);top:unset;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset),var(--df-messenger-internal-chat-bubble-size-half-neg)) scale(.01);transform-origin:bottom right}.chat-wrapper.top-right,.min-chat-wrapper.top-right{bottom:var(--df-messenger-internal-chat-bubble-size-offset);left:0;right:unset;top:unset;transform:translate(var(--df-messenger-internal-chat-bubble-size-half),var(--df-messenger-internal-chat-bubble-size-half-offset)) scale(.01);transform-origin:bottom left}.chat-wrapper.top-left,.min-chat-wrapper.top-left{bottom:var(--df-messenger-internal-chat-bubble-size-offset);left:unset;right:0;top:unset;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-neg),var(--df-messenger-internal-chat-bubble-size-half-offset)) scale(.01);transform-origin:bottom right}.chat-wrapper.bottom-right,.min-chat-wrapper.bottom-right{bottom:unset;left:0;right:unset;top:var(--df-messenger-internal-chat-bubble-size-offset);transform:translate(var(--df-messenger-internal-chat-bubble-size-half),var(--df-messenger-internal-chat-bubble-size-half-offset-neg)) scale(.01);transform-origin:top left}.chat-wrapper.bottom-left,.min-chat-wrapper.bottom-left{bottom:unset;left:unset;right:0;top:var(--df-messenger-internal-chat-bubble-size-offset);transform:translate(var(--df-messenger-internal-chat-bubble-size-half-neg),var(--df-messenger-internal-chat-bubble-size-half-offset-neg)) scale(.01);transform-origin:top right}.chat-wrapper.fullscreen-always{height:unset;inset:0;position:fixed;transform-origin:center;width:unset}@media screen and (max-width:500px){.chat-wrapper.fullscreen-small{height:unset;inset:0;position:fixed;transform-origin:center;width:unset}}.chat-wrapper.expanded{transform:translate(0) scale(1);transition:transform .3s;visibility:visible}.min-chat-wrapper{align-items:flex-start;animation-delay:var(--df-messenger-chat-animation-delay-minimized,.1s);animation-duration:.3s;animation-fill-mode:forwards;animation-name:scale-in;animation-timing-function:ease;background:var(--df-messenger-chat-background,var(--df-messenger-chat-background-color,#fafafa)\n    );border:var(--df-messenger-chat-border-minimized,var(--df-messenger-chat-border,none)\n    );border-radius:var(--df-messenger-chat-border-radius-minimized,var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius)\n      )\n    );bottom:0;box-shadow:var(--df-messenger-chat-window-box-shadow-minimized,var(--df-messenger-chat-window-box-shadow,none)\n    );display:flex;overflow:hidden;position:absolute;right:var(--df-messenger-internal-chat-bubble-size-offset);transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset),var(--df-messenger-internal-chat-bubble-size-half-neg)) scale(.01);transform-origin:bottom right;width:var(--df-messenger-chat-window-width-minimized,var(--df-messenger-chat-window-width,320px)\n    )}.min-chat-wrapper df-messenger-message-list{flex-grow:1;min-width:0}.min-chat-wrapper .action-button{display:var(--df-messenger-chat-collapse-icon-display-minimized,block);font-size:0;padding:12px}.min-chat-wrapper .action-button img{height:var(--df-messenger-chat-bubble-close-icon-size,24px);width:var(--df-messenger-chat-bubble-close-icon-size,24px)}.min-chat-wrapper .action-button svg{fill:var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color)\n    )}@keyframes scale-in{to{transform:translate(0) scale(1)}}"]);
var DF_MRj = DF_Mc('\n      <div class="container">\n        <button\n          class="close-button bubble focus-outline"\n          @click=;\n          aria-expanded=";"\n          aria-label=";">\n          ;\n          <span class="close-icon ;">\n            ;\n          </span>\n        </button>\n        ; ;\n      </div>\n    '.split(";")),
    DF_MSj = DF_Mc([' <span class="icon ', '">\n        ', "\n      </span>"]),
    DF_MTj = DF_Mc([' <img\n      src="', '"\n      alt=""\n      class="icon ', '" />']),
    DF_MUj =
    DF_Mc(['<img src="', '" alt="" />']),
    DF_MVj = DF_Mc([' <style>\n          @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n          .close-action {\n            margin: 0;\n            padding: 12px;\n            color: var(--df-messenger-titlebar-icon-font-color, inherit);\n          }\n        </style>\n        <button\n          class="material-icons close-action focus-outline-contrast\n            action-button"\n          @click=', '\n          slot="action"\n          aria-label="',
        '">\n          ', "\n        </button>"
    ]),
    DF_MWj = DF_Mc([' <style>\n        .close-action {\n          margin: 0;\n          padding: 12px;\n          background: var(\n            --df-messenger-titlebar-button-background,\n            transparent\n          );\n          border: var(--df-messenger-titlebar-button-border, none);\n          border-radius: var(\n            --df-messenger-titlebar-button-border-radius,\n            999px\n          );\n          cursor: pointer;\n          transition: background-color 0.3s;\n        }\n\n        .close-action:hover {\n          background: var(\n            --df-messenger-titlebar-button-background-hover,\n            rgba(200, 220, 252, 0.08)\n          );\n          transition: background-color 0.3s;\n        }\n\n        .close-action img {\n          width: var(--df-messenger-chat-collapse-icon-size, unset);\n          height: var(--df-messenger-chat-collapse-icon-size, unset);\n        }\n      </style>\n      <button\n        class="close-action focus-outline-contrast"\n        @click=',
        '\n        slot="action"\n        aria-label="', '">\n        <img src="', '" />\n      </button>'
    ]),
    DF_MXj = DF_Mc('\n      <div\n        style=;\n        class="chat-wrapper\n          ; ;\n          ;">\n        <df-messenger-chat\n          .chatTitle=;\n          .chatSubtitle=;\n          .botWritingText=;\n          .botWritingImage=;\n          .requestAuthText=;\n          .placeholderText=;\n          .botActorImage=;\n          .userActorImage=;\n          .enableFileUpload=;\n          .enableAudioInput=;\n          .audioStateImageActive=;\n          .audioStateImagePassive=;\n          .fileUploadIcon=;\n          .isNestedChatElement=;>\n          <df-messenger-titlebar\n            .chatTitle=;\n            .chatSubtitle=;\n            .chatTitleIcon=;\n            .languageCode=;\n            slot="titlebar">\n            <slot name="titlebar-actions" slot="action"></slot>\n            ;\n          </df-messenger-titlebar>\n        </df-messenger-chat>\n      </div>\n    '.split(";")),
    DF_MYj = DF_Mc(["", ""]),
    DF_MZj = DF_Mc(['<img src="', '" />']),
    DF_M_j = DF_Mc(' <div\n      class="min-chat-wrapper ;"\n      @click=;>\n      <df-messenger-message-list\n        minimized\n        .initialMessages=;\n        .botActorImage=;\n        .userActorImage=;></df-messenger-message-list>\n      <button\n        class="action-button"\n        @click=;>\n        ;\n      </button>\n    </div>'.split(";"));

function DF_M0j() {
    var a = DF_Mx.apply(this, arguments) || this;
    a.anchor = null;
    a.minimized = null;
    a.chatIcon = null;
    a.chatCloseIcon = null;
    a.chatCollapseIcon = null;
    a.allowFullscreen = null;
    a.F = DF_Mab(function() {
        if (!a.R) return !1;
        a.expanded === void 0 && (a.expanded = a.R.presenter.isChatBubbleExpanded());
        a.expanded && (a.minimized = null);
        DF_M1j(a);
        (a.expanded || a.minimized) && DF_Mnd(a).finally(function() {
            return void DF_MVa(a)
        });
        return !0
    });
    return a
}
DF_Mf(DF_M0j, DF_Mx);
DF_M0j.D = DF_Mx.D;
DF_M0j.o = DF_Mx.o;
DF_M0j.s = DF_Mx.s;
DF_M0j.h = DF_Mx.h;
DF_M0j.g = DF_Mx.g;
DF_M0j.C = DF_Mx.C;
DF_M0j.i = DF_Mx.i;
DF_M0j.u = DF_Mx.u;
DF_M0j.m = DF_Mx.m;
DF_M0j.v = DF_Mx.v;
DF_M = DF_M0j.prototype;
DF_M.connectedCallback = function() {
    DF_M2j(this);
    DF_M3j(this);
    DF_M4j(this);
    DF_Mx.prototype.connectedCallback.call(this)
};
DF_M.ia = function(a) {
    var b = this;
    DF_Mx.prototype.ia.call(this, a);
    DF_M5j(this);
    window.addEventListener("resize", function() {
        return void DF_M5j(b)
    })
};
DF_M.ra = function(a) {
    DF_Mx.prototype.ra.call(this, a);
    this.F();
    a.has("chatIcon") && DF_M2j(this);
    a.has("chatCloseIcon") && DF_M3j(this);
    a.has("chatCollapseIcon") && DF_M4j(this)
};
DF_M.openChat = function() {
    this.expanded || this.Wa()
};
DF_M.closeChat = function() {
    this.expanded && this.Wa()
};
DF_M.openMinChat = function(a) {
    var b = this,
        c;
    return DF_Mh(function(d) {
        if (d.g == 1) return b.expanded = !1, DF_Mg(d, DF_Mnd(b), 2);
        b.minimized = ((c = a) == null ? void 0 : c.anchor) || "left-top";
        b.g = a;
        d.g = 0
    })
};
DF_M.closeMinChat = function() {
    this.minimized = null;
    this.g = void 0
};
DF_M.setInput = function(a) {
    var b;
    (b = this.T.querySelector("df-messenger-chat")) == null || b.setInput(a)
};
DF_M.Wa = function() {
    var a = this,
        b;
    return DF_Mh(function(c) {
        if (c.g == 1) return a.expanded = !a.expanded, a.minimized = null, DF_M1j(a), (b = a.R) == null || b.presenter.storeChatBubbleExpanded(a.expanded), a.expanded ? c = DF_Mg(c, DF_Mnd(a), 2) : (c.g = 2, c = void 0), c;
        DF_M5j(a);
        c.g = 0
    })
};

function DF_M1j(a) {
    DF_Mm(a, "df-chat-open-changed", {
        isOpen: a.expanded
    })
}

function DF_M5j(a) {
    var b = a.T.querySelector(".chat-wrapper");
    b && (a.expanded ? b.style.transform = "" : a.allowFullscreen === "always" || a.allowFullscreen === "small" && window.innerWidth < 500 ? (a = a.parentElement.getBoundingClientRect(), b.style.transform = "translate(" + ((a.left + a.right) / 2 - window.innerWidth / 2) + "px, " + ((a.top + a.bottom) / 2 - window.innerHeight / 2) + "px) scale(0.01, 0.01)") : b.style.transform = "")
}
DF_M.render = function() {
    var a = DF_M6j(this, !!this.expanded),
        b = this.Wa,
        c = !!this.expanded,
        d = this.Ya === void 0 ? null : this.Ya ? DF_Mu(DF_MSj, this.expanded ? "fade" : "", DF_M_d) : DF_Mu(DF_MTj, this.chatIcon, this.expanded ? "fade" : ""),
        e = this.expanded ? "rotate-fade" : "",
        f = this.sb ? DF_M0d : DF_Mu(DF_MUj, this.chatCloseIcon),
        g = {};
    this.chatWidth && (g.width = this.chatWidth + "px");
    this.chatHeight && (g.height = this.chatHeight + "px");
    g = DF_M_e(g);
    var h = this.expanded ? "expanded" : "",
        k = this.anchor,
        l = this.allowFullscreen ? "fullscreen-" + this.allowFullscreen :
        "",
        m = this.chatTitle,
        n = this.chatSubtitle,
        p = this.botWritingText,
        q = this.botWritingImage,
        r = this.requestAuthText,
        t = this.placeholderText,
        v = this.botActorImage,
        u = this.userActorImage,
        w = this.enableFileUpload,
        x = this.enableAudioInput,
        z = this.audioStateImageActive,
        A = this.audioStateImagePassive,
        B = this.fileUploadIcon,
        C = this.chatTitle,
        D = this.chatSubtitle,
        E = this.chatTitleIcon,
        F = this.languageCode,
        y = DF_M6j(this, !0);
    return DF_Mu(DF_MRj, b, c, a, d, e, f, DF_Mu(DF_MXj, g, h, k, l, m, n, p, q, r, t, v, u, w, x, z, A, B, !0, C, D, E, F, this.Xa ? DF_Mu(DF_MVj,
        this.Wa, y, DF_M7j(this)) : DF_Mu(DF_MWj, this.Wa, y, this.chatCollapseIcon)), DF_M8j(this))
};

function DF_M2j(a) {
    a.chatIcon ? DF_M3a(a.chatIcon, function() {
        a.Ya = !1
    }, function() {
        a.Ya = !0
    }) : a.Ya = !0
}

function DF_M3j(a) {
    a.chatCloseIcon ? DF_M3a(a.chatCloseIcon, function() {
        a.sb = !1
    }, function() {
        a.sb = !0
    }) : a.sb = !0
}

function DF_M4j(a) {
    a.chatCollapseIcon ? DF_M3a(a.chatCollapseIcon, function() {
        a.Xa = !1
    }, function() {
        a.Xa = !0
    }) : a.Xa = !0
}

function DF_M7j(a) {
    switch (a.anchor) {
        case "top-left":
        case "left-top":
            return "south_east";
        case "top-right":
        case "right-top":
            return "south_west";
        case "right-bottom":
        case "bottom-right":
            return "north_west";
        case "left-bottom":
        case "bottom-left":
            return "north_east";
        default:
            return "south_east"
    }
}

function DF_M6j(a, b) {
    return DF_Mo(a.languageCode, b ? "closeAriaLabel" : "openAriaLabel", {
        chatTitle: DF_M5a(a.chatTitle, a.languageCode, "chatTitle")
    })
}

function DF_M8j(a) {
    if (!a.minimized) return null;
    var b, c = (b = a.R) == null ? void 0 : b.presenter.getUtterances();
    if (!c || c.length === 0) return null;
    b = a.Xa ? DF_Mu(DF_MYj, DF_M0d) : DF_Mu(DF_MZj, a.chatCollapseIcon);
    var d, e;
    return DF_Mu(DF_M_j, a.minimized, a.nd, [c[0]], ((d = a.g) == null ? 0 : d.showActorImages) ? a.botActorImage : DF_Mv, ((e = a.g) == null ? 0 : e.showActorImages) ? a.userActorImage : DF_Mv, function(f) {
        f.stopPropagation();
        a.closeMinChat()
    }, b)
}
DF_M.nd = function() {
    var a;
    ((a = window.getSelection()) == null ? void 0 : a.type) !== "Range" && this.openChat()
};
var DF_M6 = DF_M0j;
DF_M6.j = [DF_MQj, DF_My];
DF_Mk([DF_Ms({
    l: "expanded",
    type: Boolean
}), DF_Ml("design:type", Boolean)], DF_M6.prototype, "expanded", void 0);
DF_Mk([DF_Ms({
    l: "anchor",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M6.prototype, "anchor", void 0);
DF_Mk([DF_Ms({
    l: "minimized",
    type: String
}), DF_Ml("design:type", Object)], DF_M6.prototype, "minimized", void 0);
DF_Mk([DF_Ms({
    l: "chat-icon",
    type: String
}), DF_Ml("design:type", Object)], DF_M6.prototype, "chatIcon", void 0);
DF_Mk([DF_Ms({
    l: "chat-close-icon",
    type: String
}), DF_Ml("design:type", Object)], DF_M6.prototype, "chatCloseIcon", void 0);
DF_Mk([DF_Ms({
    l: "chat-collapse-icon",
    type: String
}), DF_Ml("design:type", Object)], DF_M6.prototype, "chatCollapseIcon", void 0);
DF_Mk([DF_Ms({
    l: "chat-width",
    type: Number,
    K: !0
}), DF_Ml("design:type", Number)], DF_M6.prototype, "chatWidth", void 0);
DF_Mk([DF_Ms({
    l: "chat-height",
    type: Number,
    K: !0
}), DF_Ml("design:type", Number)], DF_M6.prototype, "chatHeight", void 0);
DF_Mk([DF_Ms({
    l: "allow-fullscreen",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M6.prototype, "allowFullscreen", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Boolean)], DF_M6.prototype, "Ya", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Boolean)], DF_M6.prototype, "sb", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Boolean)], DF_M6.prototype, "Xa", void 0);
DF_M6 = DF_Mk([DF_Mp("df-messenger-chat-bubble")], DF_M6);

function DF_M9j(a) {
    var b = {
        name: "dialogflow"
    };
    if (a) try {
        var c;
        b = (c = JSON.parse(a)) != null ? c : b
    } catch (d) {
        console.error("DF-MESSENGER", d)
    }
    return b
};

function DF_M$j(a) {
    return {
        type: "text",
        text: a
    }
}

function DF_Mak(a) {
    return {
        type: "customCard",
        richElements: a
    }
}

function DF_Mbk(a) {
    var b = a.filter(DF_Mck);
    a = a.filter(DF_Mdk);
    var c = [],
        d = a.filter(function(e) {
            return e.type === "html"
        });
    d.length > 0 && c.push.apply(c, DF_Me(d.map(function(e) {
        return e
    })));
    b.length > 0 && c.push(DF_Mak(b));
    DF_Mek(a, "custom_template", c);
    DF_Mek(a, "match_citations", c);
    DF_Mek(a, "chips", c);
    DF_Mek(a, "files", c);
    return c
}

function DF_Mek(a, b, c) {
    a = a.filter(function(d) {
        return d.type === b
    });
    a.length !== 0 && c.push.apply(c, DF_Me(a.map(function(d) {
        return d
    })))
}

function DF_Mdk(a) {
    return a.type === "chips" || a.type === "html" || a.type === "match_citations" || a.type === "custom_template" || a.type === "files"
}

function DF_Mck(a) {
    return !DF_Mdk(a)
};

function DF_Mfk() {
    this.g = null;
    this.Ob = !1;
    this.promise = null
}

function DF_Myj(a) {
    var b, c, d;
    return DF_Mh(function(e) {
        switch (e.g) {
            case 1:
                return e.G = 2, DF_Mg(e, navigator.mediaDevices.getUserMedia({
                    audio: !0
                }), 4);
            case 4:
                b = e.h;
                e.g = 3;
                e.G = 0;
                break;
            case 2:
                return c = DF_Mra(e), console.error("DF-MESSENGER", "AudioRecorder", "Could not start recording", c), e.return(Promise.reject(c));
            case 3:
                return a.promise && console.warn("DF-MESSENGER", "AudioRecorder", "Recording already started"), d = new AudioContext, a.Ob = !1, a.promise = new Promise(function(f, g) {
                    a.g = new MediaRecorder(b);
                    a.g.ondataavailable =
                        function(h) {
                            var k, l = (k = a.g) == null ? void 0 : k.state;
                            a.g = null;
                            a.promise = null;
                            a.Ob ? f(null) : l !== "inactive" ? (console.error("DF-MESSENGER", "AudioRecorder", "Unexpected recorder state", l), g()) : DF_Mgk(h.data, d, f)
                        };
                    a.g.start()
                }), e.return(a.promise)
        }
    })
}

function DF_Mvj(a) {
    var b;
    return DF_Mh(function(c) {
        (b = a.g) == null || b.stop();
        a.promise || console.warn("DF-MESSENGER", "AudioRecorder", "Recording stopped before startRecording");
        return DF_Mg(c, a.promise, 0)
    })
}

function DF_Mgk(a, b, c) {
    var d;
    DF_Mh(function(e) {
        if (e.g == 1) return d = c, DF_Mg(e, DF_MKa(a, b), 2);
        d(e.h);
        e.g = 0
    })
};

function DF_Mhk() {}
DF_Mhk.prototype.requestAuthentication = function() {
    return Promise.resolve(void 0)
};
var DF_Mik = DF_Mc(["https://accounts.google.com/gsi/client"]);

function DF_Mjk(a, b) {
    this.clientId = a;
    this.scope = b
}
DF_Mjk.prototype.requestAuthentication = function() {
    var a = this;
    return DF_Mh(function(b) {
        return b.g == 1 ? DF_Mg(b, DF_Mkk(), 2) : b.return(a.requestAccessToken())
    })
};
DF_Mjk.prototype.requestAccessToken = function() {
    var a = this;
    return new Promise(function(b, c) {
        globalThis.google.accounts.oauth2.initTokenClient({
            client_id: a.clientId,
            scope: a.scope,
            callback: function(d) {
                var e = console,
                    f = e.debug,
                    g = Object.assign({}, d);
                g.access_token && (g.access_token = "REDACTED");
                f.call(e, "DF-MESSENGER", "requestAccessToken", g);
                d.access_token ? b(Object.assign({}, {
                    token: d.access_token
                }, d.expires_in && {
                    expirationMs: d.expires_in * 1E3
                })) : c()
            },
            error_callback: function(d) {
                console.error("DF-MESSENGER",
                    "requestAccessToken", d);
                c()
            }
        }).requestAccessToken()
    })
};
var DF_Mkk = function() {
    var a = null;
    return function() {
        if (a == null) {
            var b = document.createElement("script");
            DF_Mtg(b, DF_Mzc(DF_Mik));
            a = new Promise(function(c) {
                b.addEventListener("load", function() {
                    return void c()
                })
            });
            document.head.appendChild(b)
        }
        return a
    }
}();

function DF_Mlk(a) {
    this.audience = a
}

function DF_Mmk(a, b) {
    var c, d, e, f, g;
    return DF_Mh(function(h) {
        switch (h.g) {
            case 1:
                return c = JSON.stringify({
                    grantType: "urn:ietf:params:oauth:grant-type:token-exchange",
                    audience: a.audience,
                    scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/cloud-platform",
                    requestedTokenType: "urn:ietf:params:oauth:token-type:access_token",
                    subjectToken: b,
                    subjectTokenType: "urn:ietf:params:oauth:token-type:jwt"
                }), DF_Mg(h, fetch("https://sts.googleapis.com/v1/token", {
                        method: "POST",
                        body: c
                    }),
                    2);
            case 2:
                d = h.h;
                if (d.ok) {
                    h.g = 3;
                    break
                }
                return DF_Mg(h, d.text(), 4);
            case 4:
                throw e = h.h, f = d.status, {
                    message: e,
                    status: f
                };
            case 3:
                return DF_Mg(h, d.json(), 5);
            case 5:
                return g = h.h, h.return({
                    token: g.access_token,
                    expirationMs: g.expires_in * 1E3
                })
        }
    })
};

function DF_Mnk(a, b, c, d) {
    this.clientId = b;
    this.authority = c;
    this.redirectUri = d;
    this.g = new DF_Mlk(a)
}
DF_Mnk.prototype.requestAuthentication = function() {
    var a = this;
    return DF_Mh(function(b) {
        return b.return(new Promise(function(c) {
            var d, e, f, g, h;
            return DF_Mh(function(k) {
                switch (k.g) {
                    case 1:
                        return d = {
                            auth: {
                                clientId: a.clientId,
                                authority: a.authority,
                                redirectUri: a.redirectUri
                            },
                            cache: {
                                cacheLocation: "sessionStorage"
                            }
                        }, e = new window.msal.PublicClientApplication(d), DF_Mg(k, e.initialize(), 2);
                    case 2:
                        return f = {
                            scopes: ["user.read"]
                        }, DF_Mg(k, e.loginPopup(f), 3);
                    case 3:
                        return g = k.h, DF_Mg(k, DF_Mmk(a.g, g.idToken), 4);
                    case 4:
                        h =
                            k.h, c(h), k.g = 0
                }
            })
        }))
    })
};

function DF_Mok() {
    this.g = document || {
        cookie: ""
    }
}
DF_Mok.prototype.set = function(a, b, c) {
    var d = !1;
    if (typeof c === "object") {
        var e = c.zd;
        d = c.Bd || !1;
        var f = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.rc
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    h === void 0 && (h = -1);
    this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (h < 0 ? "" : h == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + h * 1E3)).toUTCString()) + (d ? ";secure" : "") + (e != null ? ";samesite=" +
        e : "")
};
DF_Mok.prototype.get = function(a, b) {
    for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = DF_M6b(d[e]);
        if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
DF_Mok.prototype.remove = function(a, b, c) {
    var d = this.get(a) !== void 0;
    this.set(a, "", {
        rc: 0,
        path: b,
        domain: c
    });
    return d
};

function DF_Mpk(a) {
    this.g = a
}
DF_Mpk.prototype.storeAccessToken = function(a) {
    this.g.storeAccessToken(a.token, (new Date).getTime() + a.expirationMs)
};
DF_Mpk.prototype.restoreAccessToken = function() {
    var a = this.g.getAccessToken(),
        b = this.g.getAccessTokenExpiration();
    if (!a || !b) return null;
    var c = (new Date).getTime();
    return b <= c ? null : {
        token: a,
        expirationMs: b - c
    }
};
DF_Mpk.prototype.clearAccessToken = function() {
    this.g.clearAccessToken()
};

function DF_Mqk() {}
DF_Mqk.prototype.storeAccessToken = function(a) {
    console.debug("DF-MESSENGER", "setAccessTokenCookie", a);
    var b = new DF_Mok,
        c = {
            rc: a.expirationMs / 1E3,
            Bd: !0,
            zd: "strict"
        };
    b.set("accessToken", a.token, c);
    b.set("accessTokenExpiration", ((new Date).getTime() + a.expirationMs).toString(), c)
};
DF_Mqk.prototype.restoreAccessToken = function() {
    var a = new DF_Mok,
        b = a.get("accessToken");
    a = a.get("accessTokenExpiration");
    if (!b || !a) return null;
    a = Number(a);
    var c = (new Date).getTime();
    return a <= c ? null : {
        token: b,
        expirationMs: a - c
    }
};
DF_Mqk.prototype.clearAccessToken = function() {
    var a = new DF_Mok;
    a.remove("accessToken");
    a.remove("accessTokenExpiration")
};

function DF_Mrk(a, b) {
    this.g = a;
    this.i = 0;
    a = this.g;
    if (a.authSettings) try {
        var c = JSON.parse(a.authSettings)
    } catch (d) {
        console.error(d), c = null
    } else c = null;
    this.j = DF_Msk(this, c);
    this.h = (c == null ? 0 : c.storeInCookie) ? new DF_Mqk : new DF_Mpk(b)
}

function DF_Msk(a, b) {
    if (!b) return new DF_Mjk(a.g.oauthClientId, "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/cloud-platform");
    var c;
    switch ((c = b.provider) == null ? void 0 : c.toLowerCase()) {
        case "google":
            return new DF_Mjk(b.clientId, b.scope);
        case "microsoft":
            return new DF_Mnk(b.audience, b.clientId, b.authority, b.redirectUri);
        case "custom":
            return new DF_Mhk;
        default:
            throw Error("Unsupported auth provider: " + b.provider);
    }
}
DF_Mrk.prototype.requestAuthentication = function() {
    var a = this,
        b;
    return DF_Mh(function(c) {
        if (c.g == 1) return DF_Mm(a.g, "df-auth-requested", {}), DF_Mg(c, a.j.requestAuthentication(), 2);
        b = c.h;
        if (!b) return c.return();
        a.g.accessToken = b.token;
        b.expirationMs && (DF_Mtk(a, b.expirationMs), a.h.storeAccessToken(b));
        c.g = 0
    })
};
DF_Mrk.prototype.restoreAccessToken = function() {
    var a = this.h.restoreAccessToken();
    if (!a) return !1;
    this.g.accessToken = a.token;
    DF_Mtk(this, a.expirationMs);
    return !0
};
DF_Mrk.prototype.clearAccessToken = function() {
    this.h.clearAccessToken();
    this.g.accessToken = null
};

function DF_Mtk(a, b) {
    clearTimeout(a.i);
    a.i = setTimeout(function() {
        a.g.accessToken = null;
        a.h.clearAccessToken()
    }, b)
};

function DF_Muk(a) {
    this.g = a
}
DF_Ma.Object.defineProperties(DF_Muk.prototype, {
    h: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.apiUri || this.i()
        }
    }
});

function DF_Mvk() {
    this.headers = new Map
}

function DF_Mwk() {
    return DF_Mxk(new DF_Mvk, "Content-Type", "application/json")
}

function DF_Mxk(a, b, c) {
    a.headers.set(b, c);
    return a
}

function DF_Myk(a, b) {
    a.isAuthenticationRequired && (DF_Mxk(b, "Authorization", "Bearer " + a.accessToken), DF_Mxk(b, "X-Goog-User-Project", a.projectId));
    return b
};

function DF_Mzk(a) {
    this.i = a;
    this.h = new TextDecoder;
    this.g = new DF_MAk;
    this.message = {
        data: ""
    }
}
DF_Mzk.prototype.parse = function(a) {
    var b = this,
        c, d;
    return DF_Mh(function(e) {
        e.g == 1 && (c = a.getReader());
        if (e.g != 5) return DF_Mg(e, c.read(), 5);
        (d = e.h).done ? e.g = 0 : (DF_MBk(b.g, d.value), b.g.parse(function(f, g) {
            if (f.length === 0) b.i(b.message), b.message = {
                data: ""
            };
            else if (!(g <= 0)) {
                var h = b.h.decode(f.subarray(0, g));
                f = b.h.decode(f.subarray(g + (f[g + 1] === 32 ? 2 : 1)));
                switch (h) {
                    case "data":
                        b.message.data = b.message.data ? b.message.data + "\n" + f : f
                }
            }
        }), e.g = 2)
    })
};

function DF_MAk() {
    this.position = 0;
    this.i = -1;
    this.h = !1
}

function DF_MBk(a, b) {
    if (a.g === void 0) a.g = b;
    else {
        var c = new Uint8Array(a.g.length + b.length);
        c.set(a.g);
        c.set(b, a.g.length);
        a.g = c
    }
}
DF_MAk.prototype.parse = function(a) {
    if (this.g !== void 0) {
        for (var b = this.g, c = this.position, d = this.h, e = this.i, f = b.length, g = 0; c < f;) {
            d && (b[c] === 10 && (g = ++c), d = !1);
            for (var h = -1; c < f && h === -1; c++) switch (b[c]) {
                case 58:
                    e === -1 && (e = c - g);
                    break;
                case 13:
                    d = !0;
                    h = c;
                    break;
                case 10:
                    h = c
            }
            if (h === -1) break;
            a(b.subarray(g, h), e);
            g = c;
            e = -1
        }
        a = DF_Md(g === f ? [void 0, 0, d, -1] : [b.subarray(g), c - g, d, e]);
        this.g = a.next().value;
        this.position = a.next().value;
        this.h = a.next().value;
        this.i = a.next().value
    }
};

function DF_MCk(a, b) {
    this.g = a;
    this.apiUri = b
}

function DF_MDk(a, b, c, d) {
    var e = DF_MEk(a, b, "df-request-sent");
    if (!e) return Promise.resolve({});
    a.g.botWriting = !0;
    return new Promise(function(f, g) {
        DF_MFk(a, JSON.stringify(e), c, d).then(function(h) {
            h = JSON.parse(h);
            console.debug("DF-MESSENGER", "fetch", "Response", h);
            f(h)
        }).catch(function(h) {
            console.error("DF-MESSENGER", "fetch", "Error", h);
            DF_Mm(a.g, "df-messenger-error", {
                error: h
            });
            g(h)
        }).finally(function() {
            a.g.botWriting = !1
        })
    })
}

function DF_MEk(a, b, c) {
    var d = {
        requestBody: b
    };
    if (DF_Mm(a.g, c, {
            requestBody: b,
            data: d
        })) return d.requestBody
}

function DF_MFk(a, b, c, d) {
    var e, f;
    return DF_Mh(function(g) {
        if (g.g == 1) {
            var h, k;
            var l = a.g.registeredBackendService && ((k = (h = a.g.registeredBackendService).isServing) == null ? void 0 : k.call(h, a.g.targetId)) !== !1 ? a.g.registeredBackendService.fetch : window.fetch;
            return DF_Mg(g, l(c, {
                method: "POST",
                headers: Object.fromEntries(d.headers),
                body: b
            }), 2)
        }
        if (g.g != 3) {
            e = g.h;
            if (!e.ok) throw {
                error: {
                    code: e.status === 404 ? "NOT_FOUND" : e.status === 401 || e.status === 403 ? "AUTH_ERROR" : "UNKNOWN",
                    message: "Fetch error",
                    status: e.status.toString()
                }
            };
            return DF_Mg(g, e.text(), 3)
        }
        return (f = g.h) && f.indexOf(")]}'\n") === 0 ? g.return(f.substring(5)) : g.return(f)
    })
}

function DF_MGk(a, b, c, d) {
    var e, f, g;
    return DF_Mh(function(h) {
        if (h.g == 1) return DF_Mg(h, fetch(b, {
            method: "POST",
            headers: Object.fromEntries(c.headers),
            body: a
        }), 2);
        e = h.h;
        f = e.headers.get("content-type");
        if (f !== "text/event-stream") return console.error("DF-MESSENGER", "EventSource", "Expected content-type to be: 'text/event-stream', actual: '" + f + "'"), h.return();
        g = new DF_Mzk(d);
        return DF_Mg(h, g.parse(e.body), 0)
    })
};

function DF_MHk() {
    DF_Muk.apply(this, arguments)
}
DF_Mf(DF_MHk, DF_Muk);
DF_MHk.prototype.i = function() {
    return this.g.isAuthenticationRequired ? this.g.location && this.g.location !== "global" ? "https://" + this.g.location + "-dialogflow.googleapis.com/v3" : "https://dialogflow.googleapis.com/v3" : this.g.location && this.g.location !== "global" ? "https://dialogflow.cloud.google.com/v1/cx/locations/" + this.g.location + "/integrations/messenger/webhook" : "https://dialogflow.cloud.google.com/v1/cx/integrations/messenger/webhook"
};

function DF_MIk(a) {
    DF_MCk.call(this, a, new DF_MHk(a))
}
DF_Mf(DF_MIk, DF_MCk);

function DF_MJk(a, b) {
    return DF_MDk(a, b, DF_MKk(a, "detectIntent"), DF_Myk(a.g, DF_Mwk()))
}

function DF_MLk(a, b, c) {
    if (!DF_MEk(a, b, "df-request-sent")) return Promise.resolve();
    var d = DF_Mwk();
    DF_Mxk(d, "Accept", "text/event-stream");
    DF_Mxk(d, "X-Goog-Visibilities", "DIALOGFLOW_UNDER_CONSTRUCTION");
    return DF_MGk(JSON.stringify(b), DF_MKk(a, "serverStreamingDetectIntent?alt=sse"), DF_Myk(a.g, d), function(e) {
        e = JSON.parse(e.data);
        console.debug("DF-MESSENGER", "serverStreamingDetectIntent", "Response", e);
        c(e)
    }).catch(function(e) {
        console.error("DF-MESSENGER", "serverStreamingDetectIntent", "Error", e);
        DF_Mm(a.g,
            "df-messenger-error", {
                error: e
            });
        throw e;
    }).finally(function() {
        a.g.botWriting = !1
    })
}
DF_MIk.prototype.sendFeedback = function(a) {
    var b = this,
        c = DF_MEk(this, a, "df-feedback-request-sent");
    return c ? new Promise(function(d, e) {
        DF_MFk(b, JSON.stringify(c), DF_MKk(b, "submitAnswerFeedback"), DF_Myk(b.g, DF_Mwk())).then(function(f) {
            console.debug("DF-MESSENGER", "submitAnswerFeedback", "Response", JSON.parse(f));
            d()
        }).catch(function(f) {
            console.error("DF-MESSENGER", "submitAnswerFeedback", "Error", f);
            DF_Mm(b.g, "df-messenger-error", {
                error: f
            });
            e(f)
        })
    }) : Promise.resolve()
};

function DF_MKk(a, b) {
    if (a.g.isAuthenticationRequired) return a.apiUri.h + "/projects/" + a.g.projectId + "/locations/" + a.g.location + "/agents/" + a.g.agentId + "/" + (a.g.environment ? "environments/" + a.g.environment + "/" : "") + "sessions/" + a.g.sessionId + ":" + b;
    switch (b) {
        case "detectIntent":
            return a.g.projectId ? a.apiUri.h + "/projects/" + a.g.projectId + "/agents/" + a.g.agentId + "/sessions/" + a.g.sessionId : a.apiUri.h + "/" + a.g.agentId + "/sessions/" + a.g.sessionId;
        case "submitAnswerFeedback":
            return a.g.projectId ? a.apiUri.h + "/submitanswerfeedback/projects/" +
                a.g.projectId + "/agents/" + a.g.agentId + "/sessions/" + a.g.sessionId : a.apiUri.h + "/submitanswerfeedback/" + a.g.agentId + "/sessions/" + a.g.sessionId;
        default:
            throw Error("Unimplemented");
    }
};

function DF_MMk(a) {
    return "projects/" + a.projectId + "/locations/" + a.location + "/sessions/" + a.sessionId
};

function DF_MNk(a, b) {
    this.g = a;
    this.version = b
}
DF_Mf(DF_MNk, DF_Muk);
DF_MNk.prototype.i = function() {
    return "https://" + this.g.location + "-aiplatform.googleapis.com/" + this.version
};

function DF_MOk(a, b) {
    DF_MCk.call(this, a, new DF_MNk(a, b))
}
DF_Mf(DF_MOk, DF_MCk);
DF_MOk.prototype.query = function(a) {
    var b = this,
        c, d, e, f, g, h;
    return DF_Mh(function(k) {
        if (!b.g.isAuthenticationRequired) throw Error("Unauthenticated access is not implemented for Vertex AI");
        c = DF_M9j(b.g.service);
        d = DF_Myk(b.g, DF_Mwk());
        ((e = c) == null ? 0 : e.visibilityLabel) && DF_Mxk(d, "X-Goog-Visibilities", c.visibilityLabel);
        switch ((g = c) == null ? void 0 : g.name) {
            case "vertex-agent":
                f = b.apiUri.h + "/" + DF_MMk(b.g) + ":runSession";
                break;
            case "aiplatform:predict":
                f = b.apiUri.h + "/projects/" + b.g.projectId + "/locations/" + b.g.location +
                    "/publishers/" + c.publisher + "/models/" + c.model + ":predict";
                break;
            case "aiplatform:extension-controller":
                f = b.apiUri.h + "/projects/" + b.g.projectId + "/locations/" + b.g.location + "/extensionControllers/" + c.controllerId + ":query";
                break;
            default:
                throw Error("Unsupported service name: " + ((h = c) == null ? void 0 : h.name));
        }
        return k.return(DF_MDk(b, a, f, d))
    })
};

function DF_MPk(a) {
    this.g = a;
    this.h = new DF_MIk(a);
    this.j = new DF_MOk(a, "v1");
    this.i = new DF_MOk(a, "v1");
    this.G = new DF_MOk(a, "v1beta1")
}

function DF_MQk(a, b, c) {
    var d;
    ((d = DF_M9j(a.g.service)) == null ? void 0 : d.method) === "server-streaming" ? DF_MLk(a.h, b, c.message).then(function() {
        var e;
        (e = c.complete) == null || e.call(c)
    }).catch(function(e) {
        var f;
        (f = c.error) == null || f.call(c, e)
    }): DF_MJk(a.h, b).then(function(e) {
        var f;
        (f = c.message) == null || f.call(c, e);
        var g;
        (g = c.complete) == null || g.call(c)
    }).catch(function(e) {
        var f;
        (f = c.error) == null || f.call(c, e)
    })
}
DF_MPk.prototype.sendFeedback = function(a) {
    return this.h.sendFeedback(a)
};

function DF_MRk() {
    var a = Error.call(this, "Function cancelled by client");
    this.message = a.message;
    "stack" in a && (this.stack = a.stack)
}
DF_Mf(DF_MRk, Error);

function DF_MSk(a, b, c, d) {
    var e = this;
    this.tool = a;
    this.action = b;
    this.h = null;
    this.id = DF_MMi();
    try {
        var f = c(d);
        this.g = f instanceof Promise ? new Promise(function(g, h) {
            e.h = h;
            f.then(function(k) {
                return void g(k)
            }).catch(function(k) {
                return void h(k)
            })
        }) : Promise.resolve(f)
    } catch (g) {
        this.g = Promise.reject(g)
    }
};

function DF_MTk() {
    return DF_Mi.apply(0, arguments).join(".")
}

function DF_MUk(a, b) {
    a = Error.call(this, "Call to unknown " + a + " " + b);
    this.message = a.message;
    "stack" in a && (this.stack = a.stack)
}
DF_Mf(DF_MUk, Error);

function DF_MVk(a) {
    this.h = a;
    this.i = new Map;
    this.j = new Map;
    this.g = new Map
}
DF_MVk.prototype.register = function(a, b, c) {
    this.i.set(DF_MTk(a, b), c)
};

function DF_MWk(a, b, c, d, e) {
    e = e === void 0 ? !0 : e;
    var f, g;
    return DF_Mh(function(h) {
        f = a.i.get(DF_MTk(b, c)) || a.j.get(c);
        if (!f) return console.error("DF-MESSENGER", "Call to unknown " + b + " " + c), a.h.presenter.sendClientSideFunctionCallResult({
            tool: b,
            actionName: c,
            error: (new DF_MUk(b, c)).message
        }), h.return(void 0);
        g = new DF_MSk(b, c, f, d);
        a.g.set(DF_MTk(g.tool, g.action, g.id), g);
        return h.return(g.g.then(function(k) {
            console.debug("DF-MESSENGER", b, c, k);
            e && a.h.presenter.sendClientSideFunctionCallResult({
                tool: b,
                actionName: c,
                output: k
            });
            return k
        }).catch(function(k) {
            console.error("DF-MESSENGER", b, c, k);
            e && a.h.presenter.sendClientSideFunctionCallResult({
                tool: b,
                actionName: c,
                error: k.message
            })
        }).finally(function() {
            a.g.delete(DF_MTk(g.tool, g.action, g.id))
        }))
    })
}

function DF_MXk(a) {
    a.g.forEach(function(b) {
        var c;
        (c = b.h) == null || c.call(b, new DF_MRk)
    });
    a.g.clear()
};

function DF_MYk() {}
DF_MYk.prototype.Ia = function(a) {
    var b = a.responseId,
        c, d = ((c = a.queryResult) == null ? void 0 : c.responseMessages) || [],
        e;
    c = ((e = a.queryResult) == null ? void 0 : e.allowAnswerFeedback) || !1;
    var f, g;
    a = (f = a.queryResult) == null ? void 0 : (g = f.currentPage) == null ? void 0 : g.name;
    f = [];
    g = [];
    d = DF_Md(d);
    for (e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        if (e.text && e.text.text) {
            var h = e.text.text.map(function(l) {
                return DF_M$j(l)
            });
            f.push.apply(f, DF_Me(h))
        }
        if (e.payload && e.payload.richContent) {
            h = void 0;
            var k = ((h = e.payload.richContent) == null ?
                void 0 : h.map(function(l) {
                    if (!Array.isArray(l)) throw Error("Invalid rich content format. It should be nested within two levels of arrays ([[ ... ]]). See https://cloud.google.com/dialogflow/cx/docs/concept/integration/dialogflow-messenger/fulfillment.");
                    return l.filter(DF_M4a).map(function(m) {
                        m.id || (m.id = DF_MMi());
                        return m
                    })
                })) || [];
            h = DF_Md(k);
            for (k = h.next(); !k.done; k = h.next()) f.push.apply(f, DF_Me(DF_Mbk(k.value)))
        }
        e.toolCall && g.push({
            tool: e.toolCall.tool,
            actionName: e.toolCall.action,
            args: e.toolCall.inputParameters || {}
        })
    }
    return Object.assign({}, {
        responseId: b,
        messages: f,
        clientSideFunctionCalls: g,
        allowFeedback: c
    }, a ? {
        currentPageName: a
    } : {})
};

function DF_MZk() {
    this.allowFeedback = !1;
    this.languageCode = null;
    this.utteranceId = "utterance-" + DF_MMi()
}

function DF_M_k(a, b, c) {
    return Object.assign({}, {
        utteranceId: a.utteranceId,
        languageCode: a.languageCode,
        mode: b.some(DF_M0k) ? "blocking" : "normal",
        messages: b,
        isBot: c
    }, a.responseId ? {
        responseId: a.responseId
    } : {}, c ? {
        allowFeedback: a.allowFeedback
    } : {})
}

function DF_M1k(a, b) {
    a.languageCode = b;
    return a
}

function DF_M0k(a) {
    return a.type === "customCard" && a.richElements.some(DF_M2k) || a.type === "chips" && DF_M2k(a)
}

function DF_M2k(a) {
    switch (a.type) {
        case "button":
            return a.mode === "blocking";
        case "chips":
            return a.options.some(function(b) {
                return b.mode === "blocking"
            });
        default:
            return !1
    }
};

function DF_M3k(a, b) {
    this.g = a;
    this.h = b
}
DF_M3k.prototype.Ia = function(a) {
    return this.h.Ia(a)
};
DF_M3k.prototype.processResponse = function(a) {
    var b = this.Ia(a),
        c = {
            messages: b.messages
        };
    if (DF_Mm(this.g, "df-response-received", {
            messages: b.messages,
            data: c,
            raw: a
        })) {
        a = Object.assign({}, b, {
            messages: c.messages
        });
        if (a.messages.length > 0) {
            b = new DF_MZk;
            b.responseId = a.responseId;
            b.allowFeedback = a.allowFeedback;
            b = DF_M_k(DF_M1k(b, this.g.languageCode), a.messages, !0);
            this.g.addUtterance(b);
            b = [];
            c = DF_Md(a.messages);
            for (var d = c.next(); !d.done; d = c.next())
                if (d = d.value, d.type === "customCard") {
                    d = DF_Md(d.richElements);
                    for (var e = d.next(); !e.done; e = d.next()) e = e.value, e.type === "info" && (e = DF_M3f(e)) && b.push(e.href)
                } else if (d.type === "match_citations")
                for (d = DF_Md(d.citations), e = d.next(); !e.done; e = d.next())(e = DF_M5f(e.value)) && b.push(e.href);
            b.length && DF_Mm(this.g, "df-url-suggested", {
                suggestedUrls: b
            })
        }
        var f;
        ((f = a.currentPageName) == null ? 0 : f.endsWith("END_SESSION")) && DF_Mm(this.g, "df-session-ended", {});
        f = DF_Md(a.clientSideFunctionCalls);
        for (a = f.next(); !a.done; a = f.next()) a = a.value, this.g.callClientSideFunction(a.tool, a.actionName,
            a.args, !0)
    }
};

function DF_M4k() {}
DF_M4k.prototype.Ia = function(a) {
    return {
        messages: a.response ? [DF_M$j(a.response)] : [],
        clientSideFunctionCalls: [],
        responseId: DF_MMi(),
        allowFeedback: !1
    }
};

function DF_M5k() {}
DF_M5k.prototype.Ia = function(a) {
    var b;
    return {
        messages: ((b = a.predictions) == null ? void 0 : b.map(function(c) {
            return c.content !== void 0 ? DF_M$j(c.content) : c.bytesBase64Encoded !== void 0 ? DF_Mak([{
                type: "image",
                rawUrl: "data:" + c.mimeType + ";base64," + c.bytesBase64Encoded
            }]) : null
        }).filter(DF_M4a)) || [],
        clientSideFunctionCalls: [],
        responseId: DF_MMi(),
        allowFeedback: !1
    }
};

function DF_M6k() {}
DF_M6k.prototype.Ia = function(a) {
    var b = [],
        c = [],
        d, e, f = DF_Md((e = a == null ? void 0 : (d = a.content) == null ? void 0 : d.parts) != null ? e : []);
    for (d = f.next(); !d.done; d = f.next()) {
        d = d.value;
        e = b.push;
        var g = e.apply;
        if (d == null ? 0 : d.inlineData) {
            var h = void 0,
                k = d.inlineData;
            var l = (k == null ? 0 : (h = k.mimeType) == null ? 0 : h.startsWith("image/")) ? {
                type: "image",
                rawUrl: "data:" + k.mimeType + ";base64," + k.data
            } : void 0
        } else l = void 0;
        if (d == null ? 0 : d.fileData) {
            h = void 0;
            k = d.fileData;
            var m = k.fileUri;
            try {
                var n = (new URL(m)).pathname.split("/").pop() || "";
                h = decodeURIComponent(n)
            } catch (p) {
                console.error("Error extracting file name:", p), h = m
            }
            h = {
                type: "files",
                files: [{
                    name: h,
                    anchor: {
                        href: k.fileUri
                    }
                }]
            }
        } else h = void 0;
        l = [l, h].filter(DF_M4a);
        h = [];
        (d == null ? 0 : d.text) && h.push(DF_M$j(d.text));
        l.length > 0 && h.push(DF_Mak(l));
        g.call(e, b, DF_Me(h));
        d.functionCall && c.push({
            tool: a.agent,
            actionName: d.functionCall.name,
            args: d.functionCall.args || {}
        })
    }
    return {
        messages: b,
        clientSideFunctionCalls: c,
        responseId: DF_MMi(),
        allowFeedback: !1
    }
};

function DF_M7k() {
    this.sessionId = null;
    this.O = [];
    this.F = {};
    this.h = !1;
    this.i = 0;
    this.G = new Set;
    this.L = new Map;
    this.isWaitingForElement = !1;
    this.g = this.accessToken = this.j = this.endUserMetadata = null
}
DF_M = DF_M7k.prototype;
DF_M.storeSessionId = function(a) {
    this.sessionId = a
};
DF_M.storeUtterance = function(a) {
    this.O.push(a)
};
DF_M.storeChatBubbleExpanded = function(a) {
    this.h = a
};
DF_M.storeChatScrollDistance = function(a) {
    this.i = a
};
DF_M.storeMessageClicked = function(a) {
    this.G.add(a)
};
DF_M.storeUtteranceReaction = function(a, b) {
    this.L.set(a, b)
};
DF_M.storeIsWaitingForElement = function(a) {
    this.isWaitingForElement = a
};
DF_M.storeEndUserMetadata = function(a) {
    this.endUserMetadata = a
};
DF_M.storeQueryParameters = function(a) {
    this.F = a
};
DF_M.storeLastResponseInstant = function(a) {
    this.j = a
};
DF_M.storeAccessToken = function(a, b) {
    this.accessToken = a;
    this.g = b
};
DF_M.getEndUserMetadata = function() {
    return this.endUserMetadata === null ? null : Object.assign({}, this.endUserMetadata)
};
DF_M.getLastResponseInstant = function() {
    return this.j
};
DF_M.getSessionId = function() {
    return this.sessionId
};
DF_M.getUtterances = function() {
    return [].concat(DF_Me(this.O))
};
DF_M.isChatBubbleExpanded = function() {
    return this.h
};
DF_M.getChatScrollDistance = function() {
    return this.i
};
DF_M.isMessageClicked = function(a) {
    return this.G.has(a)
};
DF_M.getUtteranceReaction = function(a) {
    return this.L.get(a) || 0
};
DF_M.getIsWaitingForElement = function() {
    return this.isWaitingForElement
};
DF_M.getQueryParameters = function() {
    return this.F
};
DF_M.getAccessToken = function() {
    return !this.accessToken || !this.g || (new Date).getTime() > this.g ? null : this.accessToken
};
DF_M.getAccessTokenExpiration = function() {
    return this.g
};
DF_M.clearMessages = function() {
    this.O = []
};
DF_M.clearLastResponseInstant = function() {
    this.j = null
};
DF_M.clearAccessToken = function() {
    this.g = this.accessToken = null
};
DF_M.clearAll = function() {
    this.sessionId = null;
    this.clearMessages();
    this.endUserMetadata = null;
    this.F = {};
    this.clearLastResponseInstant();
    this.G.clear();
    this.L.clear();
    this.h = this.isWaitingForElement = !1;
    this.i = 0;
    this.clearAccessToken()
};

function DF_M8k() {}
DF_M = DF_M8k.prototype;
DF_M.storeSessionId = function(a) {
    DF_M9k("sessionID", a)
};
DF_M.storeUtterance = function(a) {
    a = JSON.stringify(a);
    var b = DF_M$k("messages") || "";
    DF_M9k("messages", b.length ? b + "," + a : a)
};
DF_M.storeChatBubbleExpanded = function(a) {
    DF_M9k("chatBubbleExpansion", String(a))
};
DF_M.storeChatScrollDistance = function(a) {
    DF_M9k("chatScrollDistance", String(a))
};
DF_M.storeMessageClicked = function(a) {
    DF_M9k(a + "-clicked", "true")
};
DF_M.storeUtteranceReaction = function(a, b) {
    DF_M9k(a + "-reaction", String(b))
};
DF_M.storeIsWaitingForElement = function(a) {
    DF_M9k("isWaitingForElement", String(a))
};
DF_M.storeEndUserMetadata = function(a) {
    DF_M9k("endUserMetadata", JSON.stringify(a))
};
DF_M.storeQueryParameters = function(a) {
    DF_M9k("queryParameters", JSON.stringify(a))
};
DF_M.storeLastResponseInstant = function(a) {
    DF_M9k("lastResponseInstant", String(a))
};
DF_M.storeAccessToken = function(a, b) {
    DF_M9k("accessToken", a);
    DF_M9k("accessTokenExpiration", String(b))
};

function DF_M9k(a, b) {
    console.debug("DF-MESSENGER", "SessionStorage", "setItem", a, b === null ? null : b.length < 24 ? b : b.substring(0, 24) + "...");
    try {
        window.sessionStorage.setItem("df-messenger-" + a, b)
    } catch (c) {
        console.error("DF-MESSENGER", "SessionStorage", "setItem", c)
    }
}
DF_M.getEndUserMetadata = function() {
    try {
        var a = DF_M$k("endUserMetadata");
        if (a) return JSON.parse(a)
    } catch (b) {
        console.error("DF-MESSENGER", "SessionStorage", "getEndUserMetadata", b)
    }
    return null
};
DF_M.getQueryParameters = function() {
    try {
        var a = DF_M$k("queryParameters");
        if (a) return JSON.parse(a)
    } catch (b) {
        console.error("DF-MESSENGER", "SessionStorage", "getQueryParameters", b)
    }
    return {}
};
DF_M.getLastResponseInstant = function() {
    var a = DF_M$k("lastResponseInstant");
    return a ? Number(a) : null
};
DF_M.getSessionId = function() {
    return DF_M$k("sessionID")
};
DF_M.getUtterances = function() {
    try {
        var a = DF_M$k("messages");
        if (a) return JSON.parse("[" + a + "]")
    } catch (b) {
        console.error("DF-MESSENGER", "SessionStorage", "getStoredMessages", b)
    }
    return []
};
DF_M.isChatBubbleExpanded = function() {
    var a = DF_M$k("chatBubbleExpansion");
    return !!a && a === "true"
};
DF_M.getChatScrollDistance = function() {
    var a = DF_M$k("chatScrollDistance");
    return a ? Number(a) : 0
};
DF_M.isMessageClicked = function(a) {
    a = DF_M$k(a + "-clicked");
    return !!a && a === "true"
};
DF_M.getUtteranceReaction = function(a) {
    return (a = DF_M$k(a + "-reaction")) ? Number(a) : 0
};
DF_M.getIsWaitingForElement = function() {
    return DF_M$k("isWaitingForElement") === "true"
};
DF_M.getAccessToken = function() {
    var a = DF_M$k("accessToken"),
        b = this.getAccessTokenExpiration();
    return !a || !b || (new Date).getTime() > Number(b) ? null : a
};
DF_M.getAccessTokenExpiration = function() {
    var a = DF_M$k("accessTokenExpiration");
    return a ? Number(a) : null
};

function DF_M$k(a) {
    var b = null;
    try {
        b = window.sessionStorage.getItem("df-messenger-" + a), console.debug("DF-MESSENGER", "SessionStorage", "getItem", a, b === null ? null : b.length < 24 ? b : b.substring(0, 24) + "...")
    } catch (c) {
        console.error("DF-MESSENGER", "SessionStorage", "getItem", a, c)
    }
    return b
}
DF_M.clearMessages = function() {
    DF_Mal("messages")
};
DF_M.clearLastResponseInstant = function() {
    DF_Mal("lastResponseInstant")
};
DF_M.clearAccessToken = function() {
    DF_Mal("accessToken");
    DF_Mal("accessTokenExpiration")
};

function DF_Mal(a) {
    console.debug("DF-MESSENGER", "SessionStorage", "removeItem", a);
    window.sessionStorage.removeItem("df-messenger-" + a)
}
DF_M.clearAll = function() {
    console.debug("DF-MESSENGER", "SessionStorage", "clear");
    for (var a = [], b = 0; b < window.sessionStorage.length; ++b) {
        var c = void 0,
            d = (c = window.sessionStorage.key(b)) != null ? c : "";
        d.startsWith("df-messenger") && a.push(d)
    }
    a.forEach(function(e) {
        return void window.sessionStorage.removeItem(e)
    })
};

function DF_Mbl(a) {
    this.h = a;
    this.L = !1;
    this.F = 0;
    a: switch (this.h.storageOption) {
        case "none":
            a = new DF_M7k;
            break a;
        default:
            a = new DF_M8k
    }
    this.g = a;
    this.j = new DF_Mrk(this.h, this.g);
    this.i = new DF_MPk(this.h);
    this.G = new DF_MVk(this.h)
}
DF_M = DF_Mbl.prototype;
DF_M.triggerWelcomeIntent = function(a) {
    var b = this;
    return DF_Mh(function(c) {
        if (c.g == 1) {
            if (!b.L) return c.return(!1);
            console.debug("DF-MESSENGER", "trigger welcome intent");
            b.L = !1;
            return DF_Mg(c, b.sendDialogflowRequest(DF_Mpd(a, b.h.languageCode)), 2)
        }
        return c.return(!0)
    })
};
DF_M.restoreSessionTimeout = function(a) {
    var b = this,
        c = this.g.getLastResponseInstant();
    c && (a -= (new Date).getTime() - c, a <= 0 ? DF_Mcl(this) : this.F = window.setTimeout(function() {
        return void DF_Mcl(b)
    }, a))
};
DF_M.requestAuthentication = function() {
    return this.j.requestAuthentication()
};
DF_M.storeEndUserMetadata = function(a) {
    this.g.storeEndUserMetadata(a)
};
DF_M.setQueryParameters = function(a) {
    this.g.storeQueryParameters(a)
};
DF_M.storeNewSessionId = function(a) {
    this.L = !0;
    DF_Mdl(this);
    this.g.storeSessionId(a)
};
DF_M.storeUtterance = function(a) {
    this.g.storeUtterance(a)
};
DF_M.storeMessageClicked = function(a) {
    this.g.storeMessageClicked(a)
};
DF_M.storeUtteranceReaction = function(a, b) {
    this.g.storeUtteranceReaction(a, b)
};
DF_M.storeChatBubbleExpanded = function(a) {
    this.g.storeChatBubbleExpanded(a)
};
DF_M.storeChatScrollDistance = function(a) {
    this.g.storeChatScrollDistance(a)
};
DF_M.storeIsWaitingForElement = function(a) {
    this.g.storeIsWaitingForElement(a)
};
DF_M.storeLastResponseInstant = function(a) {
    this.g.storeLastResponseInstant(a)
};
DF_M.getIsWaitingForElement = function() {
    return this.g.getIsWaitingForElement()
};
DF_M.getSessionId = function() {
    return this.g.getSessionId()
};
DF_M.getUtterances = function() {
    var a = this;
    return this.g.getUtterances().reduce(function(b, c) {
        c.messages = DF_Mel(a, c.messages, c.utteranceId);
        c.messages.length > 0 && b.push(c);
        return b
    }, [])
};
DF_M.getQueryParameters = function() {
    return this.g.getQueryParameters()
};
DF_M.registerClientSideFunction = function(a, b, c) {
    this.G.register(a, b, c)
};
DF_M.registerClientSideFunctionForAllTools = function(a, b) {
    this.G.j.set(a, b)
};
DF_M.callClientSideFunction = function(a, b, c, d) {
    d = d === void 0 ? !0 : d;
    var e = this;
    return DF_Mh(function(f) {
        return f.return(DF_MWk(e.G, a, b, c, d))
    })
};
DF_M.abandonClientSideFunctionCalls = function() {
    DF_MXk(this.G)
};

function DF_Mel(a, b, c) {
    return b.filter(function(d) {
        return d.type === "chips" ? !a.g.isMessageClicked("chips-" + c + "-" + d.id) : !0
    })
}
DF_M.isChatBubbleExpanded = function() {
    return this.g.isChatBubbleExpanded()
};
DF_M.getChatScrollDistance = function() {
    return this.g.getChatScrollDistance()
};
DF_M.getUtteranceReaction = function(a) {
    return this.g.getUtteranceReaction(a)
};
DF_M.restoreAccessToken = function() {
    return this.j.restoreAccessToken()
};
DF_M.clearStorage = function() {
    this.g.clearAll();
    this.clearAuthentication()
};
DF_M.clearAuthentication = function() {
    this.j.clearAccessToken()
};
DF_M.sendQuery = function(a) {
    var b;
    switch ((b = DF_M9j(this.h.service)) == null ? void 0 : b.name) {
        case "dialogflow":
            return this.sendDialogflowRequest({
                text: {
                    text: a
                },
                languageCode: this.h.languageCode || ""
            });
        case "vertex-agent":
            return DF_Mfl(this, a);
        case "aiplatform:predict":
            return DF_Mgl(this, a);
        case "aiplatform:extension-controller":
            return DF_Mhl(this, a);
        default:
            return Promise.reject("Unsupported service: " + this.h.service)
    }
};
DF_M.sendClientSideFunctionCallResult = function(a) {
    var b;
    switch ((b = DF_M9j(this.h.service)) == null ? void 0 : b.name) {
        case "dialogflow":
            b = this.sendDialogflowRequest;
            var c = this.h.languageCode;
            a = {
                toolCallResult: Object.assign({}, {
                    tool: a.tool,
                    action: a.actionName
                }, a.error ? {
                    error: {
                        message: a.error
                    }
                } : {
                    outputParameters: a.output || {}
                }),
                languageCode: c || ""
            };
            return b.call(this, a);
        default:
            return Promise.reject("Unsupported service: " + this.h.service)
    }
};
DF_M.sendDialogflowRequest = function(a) {
    var b = this,
        c, d;
    return DF_Mh(function(e) {
        c = new DF_M3k(b.h, new DF_MYk);
        d = b;
        return e.return(new Promise(function(f, g) {
            DF_MQk(b.i, DF_Mil(d, a), {
                message: function(h) {
                    c.processResponse(h)
                },
                error: function(h) {
                    g(h)
                },
                complete: function() {
                    DF_Mjl(d);
                    f()
                }
            })
        }))
    })
};

function DF_Mil(a, b) {
    var c = a.getQueryParameters(),
        d = a.g.getEndUserMetadata();
    b = {
        queryInput: b
    };
    c.channel = "DF_MESSENGER";
    a.h.alternativeLanguageCodes && (b.queryInput.alternativeLanguageCodes = a.h.alternativeLanguageCodes);
    d && (c.endUserMetadata = d);
    a.h.sessionTtl && (a.h.sessionTtl >= 86400 && console.warn("DF-MESSENGER", "session-ttl must be strictly less than 86400 seconds"), c.sessionTtl = a.h.sessionTtl + "s");
    Object.keys(c).length > 0 && (b.queryParams = c);
    return b
}

function DF_Mfl(a, b) {
    var c;
    return DF_Mh(function(d) {
        if (d.g == 1) {
            var e = a.i;
            var f = {
                session: DF_MMk(e.g),
                content: {
                    parts: [{
                        text: b
                    }]
                }
            };
            f.agent = e.g.agentId;
            e = e.G.query(f);
            return DF_Mg(d, e, 2)
        }
        c = d.h;
        (new DF_M3k(a.h, new DF_M6k)).processResponse(c);
        d.g = 0
    })
}

function DF_Mgl(a, b) {
    var c;
    return DF_Mh(function(d) {
        if (d.g == 1) {
            var e = a.i;
            var f = {
                instances: [{
                    prompt: b
                }],
                parameters: {
                    temperature: .2,
                    maxOutputTokens: 1024,
                    topP: .8,
                    topK: 40,
                    candidateCount: 1,
                    sampleCount: 1
                }
            };
            f = e.g.postData ? Object.assign({}, f, JSON.parse(e.g.postData)) : f;
            e = e.j.query(f);
            return DF_Mg(d, e, 2)
        }
        c = d.h;
        (new DF_M3k(a.h, new DF_M5k)).processResponse(c);
        d.g = 0
    })
}

function DF_Mhl(a, b) {
    var c;
    return DF_Mh(function(d) {
        if (d.g == 1) {
            var e = a.i;
            var f = {
                query: {
                    query: b
                },
                experimentalFeatures: {
                    useFlowReact: !0
                }
            };
            f = e.g.postData ? Object.assign({}, f, JSON.parse(e.g.postData)) : f;
            e = e.i.query(f);
            return DF_Mg(d, e, 2)
        }
        c = d.h;
        (new DF_M3k(a.h, new DF_M4k)).processResponse(c);
        d.g = 0
    })
}

function DF_Mcl(a) {
    DF_Mdl(a);
    console.debug("DF-MESSENGER", "session timed out!");
    DF_Mm(a.h, "df-session-expired", {})
}

function DF_Mjl(a) {
    DF_Mdl(a);
    a.F = window.setTimeout(function() {
        return void DF_Mcl(a)
    }, (a.h.sessionTtl || 1800) * 1E3);
    a.g.storeLastResponseInstant((new Date).getTime())
}

function DF_Mdl(a) {
    window.clearTimeout(a.F);
    a.F = 0;
    a.g.clearLastResponseInstant()
}
DF_M.sendFeedback = function(a) {
    return this.i.sendFeedback(a)
};
DF_M.createAudioRecorder = function() {
    return new DF_Mfk
};
DF_M.getStorageHandler = function() {
    return this.g
};
DF_M.getAuthProvider = function() {
    return this.j
};
var DF_Mkl = DF_Mc([' <link\n        rel="stylesheet"\n        href="https://fonts.googleapis.com/icon?family=Material+Icons" />\n      <link\n        rel="stylesheet"\n        href="https://fonts.googleapis.com/css?family=Google+Sans" />\n      <style>\n        :root {\n          --df-messenger-default-font-family: \'Google Sans\', \'Helvetica Neue\',\n            sans-serif;\n          --df-messenger-default-font-size: 14px;\n          --df-messenger-default-font-color: #1f1f1f;\n          --df-messenger-default-secondary-font-color: #757575;\n          --df-messenger-default-icon-font-color: #444746;\n          --df-messenger-default-primary-color: #0b57d0;\n          --df-messenger-default-link-font-color: #0b57d0;\n          --df-messenger-default-link-decoration: underline;\n          --df-messenger-default-focus-color: #1e88e5;\n          --df-messenger-default-focus-color-contrast: #fff;\n          --df-messenger-default-border-color: #e0e0e0;\n          --df-messenger-default-border: 1px solid\n            var(--df-messenger-default-border-color);\n          --df-messenger-default-border-radius: 8px;\n          --df-messenger-default-chat-border-radius: 0;\n          --df-messenger-default-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24);\n        }\n      </style>']);
var DF_Mll = DF_Mc([' <div class="chat-bubble-default-wrapper">\n      <df-messenger-chat-bubble\n        .chatTitle=', "></df-messenger-chat-bubble>\n    </div>"]),
    DF_Mml = DF_Mc(["<style>\n      :host {\n        --df-messenger-demo-banner: block;\n      }\n    </style>"]),
    DF_Mnl = DF_Mc(['\n      <div class="wrapper">\n        ', " ", "\n        <slot @slotchange=", "></slot>\n      </div>\n    "]);

function DF_M7() {
    var a = DF_Mw.call(this) || this;
    a.service = null;
    a.apiUri = null;
    a.postData = null;
    a.oauthClientId = null;
    a.authSettings = null;
    a.projectId = null;
    a.agentId = null;
    a.rb = null;
    a.g = null;
    a.allowFeedback = null;
    a.chatTitle = null;
    a.welcomeIntent = null;
    a.gcsUpload = null;
    a.sessionId = null;
    a.Nb = null;
    a.location = null;
    a.environment = null;
    a.urlAllowlist = null;
    a.sessionTtl = null;
    a.maxQueryLength = 256;
    a.botWriting = !1;
    a.Ra = !1;
    a.fb = !1;
    a.isAuthenticationPending = !1;
    a.Fc = a;
    a.F = new Map;
    a.debug = new DF_MLe;
    a.Mb = !1;
    a.addUtterance =
        a.addUtterance.bind(a);
    return a
}
DF_Mf(DF_M7, DF_Mw);
DF_M7.D = DF_Mw.D;
DF_M7.o = DF_Mw.o;
DF_M7.s = DF_Mw.s;
DF_M7.h = DF_Mw.h;
DF_M7.g = DF_Mw.g;
DF_M7.C = DF_Mw.C;
DF_M7.i = DF_Mw.i;
DF_M7.u = DF_Mw.u;
DF_M7.m = DF_Mw.m;
DF_M7.v = DF_Mw.v;
DF_M = DF_M7.prototype;
DF_M.registerBackendService = function(a) {
    this.registeredBackendService = a
};
DF_M.connectedCallback = function() {
    var a = this;
    this.languageCode || (console.debug("DF-MESSENGER", "df-messenger", "using en language code"), this.languageCode = "en");
    switch (DF_M9j(this.service).name) {
        case "dialogflow":
            this.location || (console.debug("DF-MESSENGER", "df-messenger", "using global location"), this.location = "global")
    }
    this.gcsUpload && (console.error("Attribute \"gcs-upload\" is deprecated. Please use \"globalThis.dfInstallUtil('gcs-bucket-upload', {bucketName: '" + this.gcsUpload + "'});\" instead."),
        setTimeout(function() {
            globalThis.dfInstallUtil("gcs-bucket-upload", {
                bucketName: a.gcsUpload
            })
        }, 0));
    this.presenter = new DF_Mbl(this);
    DF_Mol(this);
    this.isAuthenticationPending = !this.accessToken && this.isAuthenticationRequired;
    DF_Mpl(this);
    this.isAuthenticationPending && this.presenter.restoreAccessToken();
    this.Ra = this.presenter.getIsWaitingForElement();
    DF_Mid(DF_Mu(DF_Mkl), document.head, {
        lb: document.head.querySelector("link,style")
    });
    DF_Mw.prototype.connectedCallback.call(this)
};
DF_M.ia = function(a) {
    var b = this;
    DF_Mw.prototype.ia.call(this, a);
    this.presenter.restoreSessionTimeout((this.sessionTtl || 1800) * 1E3);
    setTimeout(function() {
        b.Mb = !0
    }, 1);
    DF_Mm(this, "df-messenger-loaded", {})
};
DF_M.getMessageConsumers = function() {
    return [].concat(DF_Me(this.F.values()))
};
DF_M.renderCustomText = function(a, b) {
    b = b === void 0 ? !0 : b;
    a = DF_M$j(a);
    b = DF_M_k(DF_M1k(new DF_MZk, this.languageCode), [a], b);
    this.addUtterance(b)
};
DF_M.renderCustomCard = function(a) {
    this.renderCustomMessages(DF_Mbk(a))
};
DF_M.renderCustomMessages = function(a) {
    a = DF_M_k(DF_M1k(new DF_MZk, this.languageCode), a, !0);
    this.addUtterance(a)
};
DF_M.registerClientSideFunction = function(a, b, c) {
    this.presenter.registerClientSideFunction(a, b, c)
};

function DF_Mol(a) {
    a.presenter.registerClientSideFunctionForAllTools("df_render_custom_card", function(b) {
        var c, d;
        return DF_Mh(function(e) {
            (d = (c = b) == null ? void 0 : c.payloads) && d.length > 0 && a.renderCustomCard(d);
            e.g = 0
        })
    })
}
DF_M.callClientSideFunction = function(a, b, c, d) {
    var e = this;
    this.fb = !0;
    return this.presenter.callClientSideFunction(a, b, c, d === void 0 ? !0 : d).finally(function() {
        return e.fb = !1
    })
};
DF_M.setContext = function(a) {
    this.presenter.storeEndUserMetadata(a)
};
DF_M.setQueryParameters = function(a) {
    this.presenter.setQueryParameters(a)
};
DF_M.clearStorage = function() {
    this.presenter.clearStorage();
    this.fb = this.Ra = !1;
    this.F.forEach(function(a) {
        return void a.clearMessages()
    })
};
DF_M.clearAuthentication = function() {
    this.presenter.clearAuthentication()
};
DF_M.startNewSession = function(a) {
    (a == null ? 0 : a.retainHistory) || this.clearStorage();
    DF_Mql(this);
    this.welcomeIntent && !this.isAuthenticationPending && this.presenter.triggerWelcomeIntent(this.welcomeIntent)
};
DF_M.sendQuery = function(a) {
    var b = this;
    return DF_Mh(function(c) {
        return DF_Mg(c, b.sendRequest("query", a), 0)
    })
};
DF_M.sendRequest = function(a) {
    var b = DF_Mi.apply(1, arguments),
        c = this;
    return DF_Mh(function(d) {
        return DF_Mg(d, DF_Mqd.apply(null, [c, a].concat(DF_Me(b))), 0)
    })
};
DF_M.requestAuthentication = function() {
    var a = this;
    return DF_Mh(function(b) {
        b.g == 1 ? b = DF_Mg(b, a.presenter.requestAuthentication(), 2) : a.welcomeIntent ? b = DF_Mg(b, a.presenter.triggerWelcomeIntent(a.welcomeIntent), 0) : (b.g = 0, b = void 0);
        return b
    })
};
DF_M.reactionsAllowed = function() {
    return this.allowFeedback === "all"
};
DF_M.addUtterance = function(a) {
    a.mode === "blocking" && (this.isWaitingForElement = !0);
    this.presenter.storeUtterance(a);
    this.F.forEach(function(b) {
        return void b.addMessages([a])
    })
};
DF_M.abandonClientSideFunctionCalls = function() {
    this.presenter.abandonClientSideFunctionCalls()
};
DF_M.registerMessageConsumer = function(a) {
    this.F.set(a.consumerId, a);
    var b = this.presenter.getUtterances();
    b.length > 0 && a.addMessages(b)
};
DF_M.unregisterMessageConsumer = function(a) {
    this.F.delete(a.consumerId)
};

function DF_Mpl(a) {
    if (!a.sessionId) {
        var b = a.presenter.getSessionId();
        b ? (a.sessionId = b, DF_Mm(a, "df-session-id-set", {
            sessionId: a.sessionId,
            isNew: !1
        })) : DF_Mql(a)
    }
}

function DF_Mql(a) {
    a.sessionId = "dfMessenger-" + DF_MMi();
    a.presenter.storeNewSessionId(a.sessionId);
    DF_Mm(a, "df-session-id-set", {
        sessionId: a.sessionId,
        isNew: !0
    })
}
DF_M.Cd = function() {
    DF_MVa(this)
};
DF_M.render = function() {
    var a, b;
    var c = ((a = this.registeredBackendService) == null ? 0 : (b = a.isDemo) == null ? 0 : b.call(a, this.targetId)) ? DF_Mu(DF_Mml) : void 0;
    return DF_Mu(DF_Mnl, c, !this.Mb || this.M ? null : DF_Mu(DF_Mll, this.chatTitle), this.Cd)
};
DF_Ma.Object.defineProperties(DF_M7.prototype, {
    targetId: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.agentId
        }
    },
    languageCode: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            if (a) {
                this.g = a.split(",").map(function(c) {
                    return c.trim()
                });
                var b;
                this.rb = (b = this.g[0]) != null ? b : null
            } else this.rb = this.g = null
        },
        get: function() {
            return this.rb
        }
    },
    alternativeLanguageCodes: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return !this.g || this.g.length <= 1 ? null : this.g
        }
    },
    accessToken: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.Nb
        },
        set: function(a) {
            this.Nb = a;
            this.isAuthenticationPending = !this.accessToken && this.isAuthenticationRequired
        }
    },
    storageOption: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.getAttribute("storage-option")
        }
    },
    enableCodeHighlight: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.hasAttribute("enable-code-highlight")
        }
    },
    isWaitingForElement: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.Ra
        },
        set: function(a) {
            this.Ra = a;
            this.presenter.storeIsWaitingForElement(a)
        }
    },
    isAuthenticationRequired: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return !!this.oauthClientId || !!this.authSettings
        }
    },
    assignedNodes: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a;
            return (a = this.T.querySelector("slot")) == null ? void 0 : a.assignedNodes()
        }
    },
    M: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a;
            return (a = this.assignedNodes) == null ? void 0 : a.some(function(b) {
                if (b.nodeType === Node.TEXT_NODE) {
                    var c;
                    return ((c = b.textContent) != null ? c : "").trim().length > 0
                }
                return !0
            })
        }
    }
});
var DF_M8 = DF_M7;
DF_M8.j = [DF_Mod, DF_My];
DF_Mk([DF_Ms({
    l: "service",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "service", void 0);
DF_Mk([DF_Ms({
    l: "api-uri",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "apiUri", void 0);
DF_Mk([DF_Ms({
    l: "post-data",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "postData", void 0);
DF_Mk([DF_Ms({
    l: "oauth-client-id",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "oauthClientId", void 0);
DF_Mk([DF_Ms({
    l: "auth",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "authSettings", void 0);
DF_Mk([DF_Ms({
    l: "project-id",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "projectId", void 0);
DF_Mk([DF_Ms({
    l: "agent-id",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "agentId", void 0);
DF_Mk([DF_Ms({
    l: "language-code",
    type: String,
    K: !0
}), DF_Ml("design:type", Object), DF_Ml("design:paramtypes", [Object])], DF_M8.prototype, "languageCode", null);
DF_Mk([DF_M1a({
    context: "df-languagecode"
}), DF_Mt(), DF_Ml("design:type", Object)], DF_M8.prototype, "rb", void 0);
DF_Mk([DF_Ms({
    l: "allow-feedback",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "allowFeedback", void 0);
DF_Mk([DF_Ms({
    l: "chat-title",
    type: String
}), DF_Ml("design:type", Object)], DF_M8.prototype, "chatTitle", void 0);
DF_Mk([DF_Ms({
    l: "intent",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "welcomeIntent", void 0);
DF_Mk([DF_Ms({
    l: "gcs-upload",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "gcsUpload", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M8.prototype, "sessionId", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M8.prototype, "Nb", void 0);
DF_Mk([DF_Ms({
    l: "location",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "location", void 0);
DF_Mk([DF_Ms({
    l: "environment",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "environment", void 0);
DF_Mk([DF_Ms({
    l: "url-allowlist",
    type: String,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "urlAllowlist", void 0);
DF_Mk([DF_Ms({
    l: "session-ttl",
    type: Number,
    K: !0
}), DF_Ml("design:type", Object)], DF_M8.prototype, "sessionTtl", void 0);
DF_Mk([DF_Ms({
    l: "max-query-length",
    type: Number,
    K: !0
}), DF_Ml("design:type", Number)], DF_M8.prototype, "maxQueryLength", void 0);
DF_Mk([DF_M1a({
    context: "df-botwriting"
}), DF_Mt(), DF_Ml("design:type", Object)], DF_M8.prototype, "botWriting", void 0);
DF_Mk([DF_M1a({
    context: "df-iswaitingforelement"
}), DF_Mt(), DF_Ml("design:type", Object)], DF_M8.prototype, "Ra", void 0);
DF_Mk([DF_M1a({
    context: "df-executingclientsidefunction"
}), DF_Mt(), DF_Ml("design:type", Object)], DF_M8.prototype, "fb", void 0);
DF_Mk([DF_M1a({
    context: "df-authenticationpending"
}), DF_Mt(), DF_Ml("design:type", Object)], DF_M8.prototype, "isAuthenticationPending", void 0);
DF_Mk([DF_M1a({
    context: "df-instance"
}), DF_Ml("design:type", Object)], DF_M8.prototype, "Fc", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M8.prototype, "registeredBackendService", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_M8.prototype, "Mb", void 0);
DF_M8 = DF_Mk([DF_Mp("df-messenger"), DF_Ml("design:paramtypes", [])], DF_M8);

function DF_Mrl(a, b) {
    var c, d, e, f, g;
    DF_Mh(function(h) {
        if (h.g == 1) return c = document.querySelector("df-messenger"), DF_Mg(h, DF_MNa(a, b, ((d = c) == null ? void 0 : d.languageCode) || null), 2);
        e = h.h;
        if (!e) return h.return();
        (f = c) == null || f.renderCustomText(e, !1);
        return DF_Mg(h, (g = c) == null ? void 0 : g.sendQuery(e), 0)
    })
}

function DF_Msl(a, b) {
    var c, d, e, f, g, h, k, l, m;
    return DF_Mh(function(n) {
        if (n.g == 1) {
            c = document.querySelector("df-messenger");
            if ((d = b) == null ? 0 : d.temporaryMessage)(e = c) == null || e.renderCustomText(b.temporaryMessage, !1);
            (f = c) == null || f.addEventListener("df-response-received", function(p) {
                p = p.detail.raw;
                var q = c.getMessageConsumers();
                if (q.length === 1) {
                    var r, t, v;
                    var u = (t = (r = q[0]).getRenderedMessages) == null ? void 0 : (v = t.call(r).at(-1)) == null ? void 0 : v.elements.at(-1)
                }
                var w;
                r = (w = p.queryResult) == null ? void 0 : w.transcript;
                u instanceof DF_M1f && u.isBot === !1 ? u.text = r || "" : r && c.renderCustomText(r, !1)
            }, {
                once: !0
            });
            if ((g = c) == null) {
                h = void 0;
                n.g = 3;
                return
            }
            k = g;
            l = k.sendRequest;
            m = k;
            return DF_Mg(n, DF_MJa(a), 4)
        }
        n.g != 3 && (h = l.call(m, "audio", n.h));
        return DF_Mg(n, h, 0)
    })
}

function DF_Mtl(a) {
    window.addEventListener("df-audio-input-recorded", function(b) {
        var c;
        (c = document.querySelector("df-messenger-chat,df-messenger-chat-bubble")) == null || c.setInput("");
        DF_Mrl(b.detail.data, a.apiKey)
    })
}

function DF_Mul(a) {
    window.addEventListener("df-user-input-entered", function(b) {
        b = b.detail;
        b.audio && DF_Mrl(b.audio, a.apiKey)
    })
}

function DF_Mvl(a) {
    window.addEventListener("df-audio-input-recorded", function(b) {
        var c, d;
        return DF_Mh(function(e) {
            (c = document.querySelector("df-messenger-chat,df-messenger-chat-bubble")) == null || c.setInput("");
            d = b.detail;
            return DF_Mg(e, DF_Msl(d.data, a), 0)
        })
    })
}

function DF_Mwl(a) {
    window.addEventListener("df-user-input-entered", function(b) {
        var c;
        return DF_Mh(function(d) {
            c = b.detail;
            return c.audio ? DF_Mg(d, DF_Msl(c.audio, a), 0) : d.return()
        })
    })
};
var DF_Mxl = DF_Mq([".title-button{background:var(--df-messenger-titlebar-button-background,transparent);border:var(--df-messenger-titlebar-button-border,none);border-radius:var(--df-messenger-titlebar-button-border-radius,999px);color:var(--df-messenger-titlebar-button-color,var(--df-messenger-titlebar-font-color,#fff)\n    );cursor:pointer;margin:0;padding:12px;transition:background-color .3s}.title-button:hover{background:var(--df-messenger-titlebar-button-background-hover,rgba(200,220,252,.08));color:var(--df-messenger-titlebar-button-color-hover,var(--df-messenger-titlebar-font-color,#fff)\n    );transition:background-color .3s}.title-button.inactive{color:var(--df-messenger-titlebar-button-color-inactive,#757575)}.title-button.inactive:not(:hover){background:var(--df-messenger-titlebar-button-background-inactive,transparent)}.title-button.active{color:var(--df-messenger-titlebar-button-color-active,var(--df-messenger-titlebar-button-color,var(--df-messenger-titlebar-font-color,#fff)\n      )\n    )}.title-button.active:not(:hover){background:var(--df-messenger-titlebar-button-background-active,transparent)}"]);
var DF_Myl = DF_Mc(['\n      <style>\n        @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <button\n        class="title-button"\n        @click=', "\n        title=", '>\n        <span class="material-icons">restart_alt</span>\n      </button>\n    ']);

function DF_M9() {
    return DF_Mw.apply(this, arguments) || this
}
DF_Mf(DF_M9, DF_Mw);
DF_M9.D = DF_Mw.D;
DF_M9.o = DF_Mw.o;
DF_M9.s = DF_Mw.s;
DF_M9.h = DF_Mw.h;
DF_M9.g = DF_Mw.g;
DF_M9.C = DF_Mw.C;
DF_M9.i = DF_Mw.i;
DF_M9.u = DF_Mw.u;
DF_M9.m = DF_Mw.m;
DF_M9.v = DF_Mw.v;
DF_M9.prototype.render = function() {
    return DF_Mu(DF_Myl, this.g, this.titleText || DF_Mv)
};
DF_M9.prototype.g = function() {
    var a;
    (a = this.parent) == null || a.startNewSession()
};
DF_Ma.Object.defineProperties(DF_M9.prototype, {
    parent: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return document.querySelector("df-messenger")
        }
    }
});
var DF_Mzl = DF_M9;
DF_Mzl.j = [DF_Mxl];
DF_Mk([DF_Ms({
    l: "title-text",
    type: String
}), DF_Ml("design:type", String)], DF_Mzl.prototype, "titleText", void 0);
DF_Mzl = DF_Mk([DF_Mp("df-reset-session-button")], DF_Mzl);
var DF_MAl = DF_Mc(['\n      <style>\n        @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <button\n        class="title-button ', '"\n        @click=', "\n        title=", '>\n        <span class="material-icons">graphic_eq</span>\n      </button>\n    ']);

function DF_M$() {
    var a = DF_Mw.apply(this, arguments) || this;
    a.active = !1;
    return a
}
DF_Mf(DF_M$, DF_Mw);
DF_M$.D = DF_Mw.D;
DF_M$.o = DF_Mw.o;
DF_M$.s = DF_Mw.s;
DF_M$.h = DF_Mw.h;
DF_M$.g = DF_Mw.g;
DF_M$.C = DF_Mw.C;
DF_M$.i = DF_Mw.i;
DF_M$.u = DF_Mw.u;
DF_M$.m = DF_Mw.m;
DF_M$.v = DF_Mw.v;
DF_M$.prototype.connectedCallback = function() {
    var a = this;
    DF_Mw.prototype.connectedCallback.call(this);
    window.addEventListener("df-request-sent", function(b) {
        a.active && (b.detail.data.requestBody.outputAudioConfig = Object.assign({}, {
            audioEncoding: 3,
            sampleRateHertz: 48E3
        }, a.voice ? {
            synthesizeSpeechConfig: {
                voice: {
                    name: a.voice
                }
            }
        } : {}, {
            useAgentSettings: !0
        }))
    });
    window.addEventListener("df-response-received", function(b) {
        a.active && (b = b.detail.raw, b.outputAudio && (new Audio("data:audio/ogg;base64," + b.outputAudio)).play())
    })
};
DF_M$.prototype.render = function() {
    var a;
    var b = (a = this.active ? this.titleTextActive : this.titleTextInactive) != null ? a : this.titleText;
    return DF_Mu(DF_MAl, this.active ? "active" : "inactive", this.g, b || DF_Mv)
};
DF_M$.prototype.g = function() {
    this.active = !this.active
};
var DF_MBl = DF_M$;
DF_MBl.j = [DF_Mxl];
DF_Mk([DF_Ms({
    l: "title-text",
    type: String
}), DF_Ml("design:type", String)], DF_MBl.prototype, "titleText", void 0);
DF_Mk([DF_Ms({
    l: "title-text-active",
    type: String
}), DF_Ml("design:type", String)], DF_MBl.prototype, "titleTextActive", void 0);
DF_Mk([DF_Ms({
    l: "title-text-inactive",
    type: String
}), DF_Ml("design:type", String)], DF_MBl.prototype, "titleTextInactive", void 0);
DF_Mk([DF_Ms({
    l: "voice",
    type: String
}), DF_Ml("design:type", String)], DF_MBl.prototype, "voice", void 0);
DF_Mk([DF_Mt(), DF_Ml("design:type", Object)], DF_MBl.prototype, "active", void 0);
DF_MBl = DF_Mk([DF_Mp("df-tts-button")], DF_MBl);
var DF_MCl = new Set(["image/gif", "image/jpeg", "image/png"]);

function DF_MDl(a, b) {
    var c = document.querySelector("df-messenger");
    if (!c) return !1;
    if (((b == null ? 0 : b.imageTypes) ? new Set(b.imageTypes) : DF_MCl).has(a.file.type)) {
        if (b == null ? 0 : b.convertToBase64) {
            var d = new FileReader;
            d.onload = function() {
                c.renderCustomCard([{
                    type: "image",
                    rawUrl: d.result
                }])
            };
            d.onerror = function(e) {
                console.error("DF-MESSENGER", "Failed reading file", e)
            };
            d.readAsDataURL(a.file);
            return !0
        }
        if (!a.actionLink || c.oauthClientId || c.authSettings) return !1;
        c.renderCustomCard([{
            type: "image",
            rawUrl: a.actionLink
        }]);
        return !0
    }
    return !1
}

function DF_MEl(a, b, c, d) {
    var e;
    return DF_Mh(function(f) {
        if (f.g == 1) return console.debug("DF-MESSENGER", "uploadFile", {
            file: c,
            path: d
        }), DF_Mg(f, fetch("https://storage.googleapis.com/upload/storage/v1/b/" + b + "/o?uploadType=media&name=" + encodeURIComponent(d), {
            method: "POST",
            headers: Object.fromEntries(DF_Myk(a, DF_Mxk(new DF_Mvk, "Content-Type", c.type)).headers),
            body: c
        }), 2);
        e = f.h;
        if (!e.ok) return console.error("DF-MESSENGER", "uploadFile", "Error", e), f.return(!1);
        console.debug("DF-MESSENGER", "uploadFile", "Response",
            "ok");
        return f.return(!0)
    })
}

function DF_MFl(a, b, c) {
    var d, e, f, g, h, k, l;
    return DF_Mh(function(m) {
        if (m.g == 1) return d = a.sessionId + "/" + DF_MMi() + "_" + c.name, e = b + "/" + d, DF_Mg(m, DF_MEl(a, b, c, d), 2);
        f = m.h;
        if (!f) return m.return();
        g = a.presenter.getQueryParameters();
        g.parameters ? g.parameters.files || (g.parameters.files = []) : g.parameters = {
            files: []
        };
        g.parameters.files.push(e);
        a.setQueryParameters(g);
        h = (a.isAuthenticationRequired ? "https://storage.mtls.cloud.google.com/" : "https://storage.googleapis.com/") + e;
        k = DF_Mm(a, "df-file-upload-completed", {
            file: c,
            gcsPath: e,
            actionLink: h
        });
        if (!k) return m.return();
        l = {
            type: "files",
            files: [{
                name: c.name,
                anchor: {
                    href: h
                },
                image: {
                    rawUrl: "https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/cloud_download/default/24px.svg"
                }
            }]
        };
        a.renderCustomCard([l]);
        m.g = 0
    })
}

function DF_MGl(a) {
    window.addEventListener("df-file-upload-completed", function(b) {
        DF_MDl(b.detail, a) && b.preventDefault()
    })
}

function DF_MHl(a) {
    window.addEventListener("df-upload-file-selected", function(b) {
        var c;
        (c = document.querySelector("df-messenger-chat,df-messenger-chat-bubble")) == null || c.setInput("");
        (b = b.detail.file) && a != null && a.bucketName && (a != null && a.bucketName ? (c = document.querySelector("df-messenger")) && DF_MFl(c, a.bucketName, b) : console.error("DF-MESSENGER", "gcs-bucket-upload", "Missing bucket name"))
    })
}

function DF_MIl(a) {
    window.addEventListener("df-user-input-entered", function(b) {
        var c, d, e, f, g;
        return DF_Mh(function(h) {
            if (h.g == 1) {
                c = b.detail.file;
                if (!c) return h.return();
                (d = document.querySelector("df-messenger-chat,df-messenger-chat-bubble")) == null || d.setInput("");
                b.preventDefault();
                if ((e = a) == null || !e.bucketName) return console.error("DF-MESSENGER", "gcs-bucket-upload", "Missing bucket name"), h.return();
                f = document.querySelector("df-messenger");
                if (!f) return h.return();
                (g = b.detail.input) && f.renderCustomText(g, !1);
                return DF_Mg(h, DF_MFl(f, a.bucketName, c), 2)
            }
            g ? h = DF_Mg(h, f.sendQuery(g), 0) : (h.g = 0, h = void 0);
            return h
        })
    })
};

function DF_MJl(a) {
    return a.type === "text"
}

function DF_MKl() {
    window.addEventListener("df-response-received", function(a) {
        a.detail.data.messages.filter(DF_MJl).forEach(function(b) {
            for (var c = b.text.split("\n"), d = [], e = 0; e < c.length; ++e) {
                var f = c[e],
                    g = e === 0 ? void 0 : c[e - 1],
                    h = e === c.length - 1 ? void 0 : c[e + 1],
                    k = void 0;
                var l = f.trim();
                var m = (k = h) == null ? void 0 : k.trim();
                if (m) {
                    k = /^(\s*-*\s*\|)+\s*-*$/;
                    var n = /^\|(.*?\|)+$/,
                        p = /^\|(\s*-*\s*\|)+$/;
                    l = /^(.*?\|)+.*?$/.test(l) && k.test(m) || n.test(l) && p.test(m)
                } else l = !1;
                l ? g === void 0 || g.trim() === "" ? d.push(f) : d.push("\n" +
                    f) : (m = void 0, g = f.trim(), (l = (m = h) == null ? void 0 : m.trim()) ? (m = /^(.*?\|)+.*?$/, k = /^\|(.*?\|)+$/, g = m.test(g) && !m.test(l) || k.test(g) && !k.test(l)) : g = !1, g ? h === void 0 || h.trim() === "" ? d.push(f) : d.push(f + "\n") : d.push(f))
            }
            b.text = d.join("\n")
        })
    })
};

function DF_MLl(a, b) {
    switch (a) {
        case "markdown-fixer":
            DF_MKl();
            break;
        case "audio-stt-direct":
            DF_Mtl(b);
            break;
        case "audio-stt-onsend":
            DF_Mul(b);
            break;
        case "audio-df-direct":
            DF_Mvl(b);
            break;
        case "audio-df-onsend":
            DF_Mwl(b);
            break;
        case "gcs-bucket-upload":
            DF_MHl(b);
            break;
        case "gcs-upload-response":
            DF_MGl(b);
            break;
        case "gcs-bucket-upload-onsend":
            DF_MIl(b);
            break;
        default:
            console.error("DF-MESSENGER", "Unknown util: " + a)
    }
}
globalThis.dfInstallUtils = function(a) {
    Object.entries(a).forEach(function(b) {
        var c = DF_Md(b);
        b = c.next().value;
        c = c.next().value;
        DF_MLl(b, c)
    })
};
globalThis.dfInstallUtil = function(a, b) {
    DF_MLl(a, b)
};