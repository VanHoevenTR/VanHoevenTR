! function() {
  var t = {
      9074: function(t, e, n) {
        n(6253), n(9115), n(1181), n(851), t.exports = n(5645).Promise
      },
      4963: function(t) {
        t.exports = function(t) {
          if ("function" != typeof t) throw TypeError(t + " is not a function!");
          return t
        }
      },
      7722: function(t, e, n) {
        var i = n(6314)("unscopables"),
          o = Array.prototype;
        null == o[i] && n(7728)(o, i, {}), t.exports = function(t) {
          o[i][t] = !0
        }
      },
      3328: function(t) {
        t.exports = function(t, e, n, i) {
          if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
          return t
        }
      },
      7007: function(t, e, n) {
        var i = n(5286);
        t.exports = function(t) {
          if (!i(t)) throw TypeError(t + " is not an object!");
          return t
        }
      },
      9315: function(t, e, n) {
        var i = n(2110),
          o = n(875),
          r = n(2337);
        t.exports = function(t) {
          return function(e, n, s) {
            var c, u = i(e),
              l = o(u.length),
              f = r(s, l);
            if (t && n != n) {
              for (; l > f;)
                if ((c = u[f++]) != c) return !0
            } else
              for (; l > f; f++)
                if ((t || f in u) && u[f] === n) return t || f || 0;
            return !t && -1
          }
        }
      },
      1488: function(t, e, n) {
        var i = n(2032),
          o = n(6314)("toStringTag"),
          r = "Arguments" == i(function() {
            return arguments
          }());
        t.exports = function(t) {
          var e, n, s;
          return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
              return t[e]
            } catch (t) {}
          }(e = Object(t), o)) ? n : r ? i(e) : "Object" == (s = i(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
      },
      2032: function(t) {
        var e = {}.toString;
        t.exports = function(t) {
          return e.call(t).slice(8, -1)
        }
      },
      5645: function(t) {
        var e = t.exports = {
          version: "2.6.12"
        };
        "number" == typeof __e && (__e = e)
      },
      741: function(t, e, n) {
        var i = n(4963);
        t.exports = function(t, e, n) {
          if (i(t), void 0 === e) return t;
          switch (n) {
            case 1:
              return function(n) {
                return t.call(e, n)
              };
            case 2:
              return function(n, i) {
                return t.call(e, n, i)
              };
            case 3:
              return function(n, i, o) {
                return t.call(e, n, i, o)
              }
          }
          return function() {
            return t.apply(e, arguments)
          }
        }
      },
      1355: function(t) {
        t.exports = function(t) {
          if (null == t) throw TypeError("Can't call method on  " + t);
          return t
        }
      },
      7057: function(t, e, n) {
        t.exports = !n(4253)((function() {
          return 7 != Object.defineProperty({}, "a", {
            get: function() {
              return 7
            }
          }).a
        }))
      },
      2457: function(t, e, n) {
        var i = n(5286),
          o = n(3816).document,
          r = i(o) && i(o.createElement);
        t.exports = function(t) {
          return r ? o.createElement(t) : {}
        }
      },
      4430: function(t) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
      },
      2985: function(t, e, n) {
        var i = n(3816),
          o = n(5645),
          r = n(7728),
          s = n(7234),
          c = n(741),
          $export = function(t, e, n) {
            var u, l, f, d, h = t & $export.F,
              m = t & $export.G,
              _ = t & $export.S,
              p = t & $export.P,
              g = t & $export.B,
              v = m ? i : _ ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
              w = m ? o : o[e] || (o[e] = {}),
              E = w.prototype || (w.prototype = {});
            for (u in m && (n = e), n) f = ((l = !h && v && void 0 !== v[u]) ? v : n)[u], d = g && l ? c(f, i) : p && "function" == typeof f ? c(Function.call, f) : f, v && s(v, u, f, t & $export.U), w[u] != f && r(w, u, d), p && E[u] != f && (E[u] = f)
          };
        i.core = o, $export.F = 1, $export.G = 2, $export.S = 4, $export.P = 8, $export.B = 16, $export.W = 32, $export.U = 64, $export.R = 128, t.exports = $export
      },
      4253: function(t) {
        t.exports = function(t) {
          try {
            return !!t()
          } catch (t) {
            return !0
          }
        }
      },
      3531: function(t, e, n) {
        var i = n(741),
          o = n(8851),
          r = n(6555),
          s = n(7007),
          c = n(875),
          u = n(9002),
          l = {},
          f = {},
          d = t.exports = function(t, e, n, d, h) {
            var m, _, p, g, v = h ? function() {
                return t
              } : u(t),
              w = i(n, d, e ? 2 : 1),
              E = 0;
            if ("function" != typeof v) throw TypeError(t + " is not iterable!");
            if (r(v)) {
              for (m = c(t.length); m > E; E++)
                if ((g = e ? w(s(_ = t[E])[0], _[1]) : w(t[E])) === l || g === f) return g
            } else
              for (p = v.call(t); !(_ = p.next()).done;)
                if ((g = o(p, w, _.value, e)) === l || g === f) return g
          };
        d.BREAK = l, d.RETURN = f
      },
      18: function(t, e, n) {
        t.exports = n(3825)("native-function-to-string", Function.toString)
      },
      3816: function(t) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
      },
      9181: function(t) {
        var e = {}.hasOwnProperty;
        t.exports = function(t, n) {
          return e.call(t, n)
        }
      },
      7728: function(t, e, n) {
        var i = n(9275),
          o = n(681);
        t.exports = n(7057) ? function(t, e, n) {
          return i.f(t, e, o(1, n))
        } : function(t, e, n) {
          return t[e] = n, t
        }
      },
      639: function(t, e, n) {
        var i = n(3816).document;
        t.exports = i && i.documentElement
      },
      1734: function(t, e, n) {
        t.exports = !n(7057) && !n(4253)((function() {
          return 7 != Object.defineProperty(n(2457)("div"), "a", {
            get: function() {
              return 7
            }
          }).a
        }))
      },
      7242: function(t) {
        t.exports = function(t, e, n) {
          var i = void 0 === n;
          switch (e.length) {
            case 0:
              return i ? t() : t.call(n);
            case 1:
              return i ? t(e[0]) : t.call(n, e[0]);
            case 2:
              return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
              return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
              return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
          }
          return t.apply(n, e)
        }
      },
      9797: function(t, e, n) {
        var i = n(2032);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
          return "String" == i(t) ? t.split("") : Object(t)
        }
      },
      6555: function(t, e, n) {
        var i = n(2803),
          o = n(6314)("iterator"),
          r = Array.prototype;
        t.exports = function(t) {
          return void 0 !== t && (i.Array === t || r[o] === t)
        }
      },
      5286: function(t) {
        t.exports = function(t) {
          return "object" == typeof t ? null !== t : "function" == typeof t
        }
      },
      8851: function(t, e, n) {
        var i = n(7007);
        t.exports = function(t, e, n, o) {
          try {
            return o ? e(i(n)[0], n[1]) : e(n)
          } catch (e) {
            var r = t.return;
            throw void 0 !== r && i(r.call(t)), e
          }
        }
      },
      9988: function(t, e, n) {
        "use strict";
        var i = n(2503),
          o = n(681),
          r = n(2943),
          s = {};
        n(7728)(s, n(6314)("iterator"), (function() {
          return this
        })), t.exports = function(t, e, n) {
          t.prototype = i(s, {
            next: o(1, n)
          }), r(t, e + " Iterator")
        }
      },
      2923: function(t, e, n) {
        "use strict";
        var i = n(4461),
          o = n(2985),
          r = n(7234),
          s = n(7728),
          c = n(2803),
          u = n(9988),
          l = n(2943),
          f = n(468),
          d = n(6314)("iterator"),
          h = !([].keys && "next" in [].keys()),
          m = "keys",
          _ = "values",
          returnThis = function() {
            return this
          };
        t.exports = function(t, e, n, p, g, v, w) {
          u(n, e, p);
          var E, y, b, getMethod = function(t) {
              if (!h && t in I) return I[t];
              switch (t) {
                case m:
                  return function keys() {
                    return new n(this, t)
                  };
                case _:
                  return function values() {
                    return new n(this, t)
                  }
              }
              return function entries() {
                return new n(this, t)
              }
            },
            P = e + " Iterator",
            x = g == _,
            M = !1,
            I = t.prototype,
            O = I[d] || I["@@iterator"] || g && I[g],
            C = O || getMethod(g),
            S = g ? x ? getMethod("entries") : C : void 0,
            N = "Array" == e && I.entries || O;
          if (N && (b = f(N.call(new t))) !== Object.prototype && b.next && (l(b, P, !0), i || "function" == typeof b[d] || s(b, d, returnThis)), x && O && O.name !== _ && (M = !0, C = function values() {
              return O.call(this)
            }), i && !w || !h && !M && I[d] || s(I, d, C), c[e] = C, c[P] = returnThis, g)
            if (E = {
                values: x ? C : getMethod(_),
                keys: v ? C : getMethod(m),
                entries: S
              }, w)
              for (y in E) y in I || r(I, y, E[y]);
            else o(o.P + o.F * (h || M), e, E);
          return E
        }
      },
      7462: function(t, e, n) {
        var i = n(6314)("iterator"),
          o = !1;
        try {
          var r = [7][i]();
          r.return = function() {
            o = !0
          }, Array.from(r, (function() {
            throw 2
          }))
        } catch (t) {}
        t.exports = function(t, e) {
          if (!e && !o) return !1;
          var n = !1;
          try {
            var r = [7],
              s = r[i]();
            s.next = function() {
              return {
                done: n = !0
              }
            }, r[i] = function() {
              return s
            }, t(r)
          } catch (t) {}
          return n
        }
      },
      5436: function(t) {
        t.exports = function(t, e) {
          return {
            value: e,
            done: !!t
          }
        }
      },
      2803: function(t) {
        t.exports = {}
      },
      4461: function(t) {
        t.exports = !1
      },
      4351: function(t, e, n) {
        var i = n(3816),
          o = n(4193).set,
          r = i.MutationObserver || i.WebKitMutationObserver,
          s = i.process,
          c = i.Promise,
          u = "process" == n(2032)(s);
        t.exports = function() {
          var t, e, n, flush = function() {
            var i, o;
            for (u && (i = s.domain) && i.exit(); t;) {
              o = t.fn, t = t.next;
              try {
                o()
              } catch (i) {
                throw t ? n() : e = void 0, i
              }
            }
            e = void 0, i && i.enter()
          };
          if (u) n = function() {
            s.nextTick(flush)
          };
          else if (!r || i.navigator && i.navigator.standalone)
            if (c && c.resolve) {
              var l = c.resolve(void 0);
              n = function() {
                l.then(flush)
              }
            } else n = function() {
              o.call(i, flush)
            };
          else {
            var f = !0,
              d = document.createTextNode("");
            new r(flush).observe(d, {
              characterData: !0
            }), n = function() {
              d.data = f = !f
            }
          }
          return function(i) {
            var o = {
              fn: i,
              next: void 0
            };
            e && (e.next = o), t || (t = o, n()), e = o
          }
        }
      },
      3499: function(t, e, n) {
        "use strict";
        var i = n(4963);

        function PromiseCapability(t) {
          var e, n;
          this.promise = new t((function(t, i) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = i
          })), this.resolve = i(e), this.reject = i(n)
        }
        t.exports.f = function(t) {
          return new PromiseCapability(t)
        }
      },
      2503: function(t, e, n) {
        var i = n(7007),
          o = n(5588),
          r = n(4430),
          s = n(9335)("IE_PROTO"),
          Empty = function() {},
          createDict = function() {
            var t, e = n(2457)("iframe"),
              i = r.length;
            for (e.style.display = "none", n(639).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), createDict = t.F; i--;) delete createDict.prototype[r[i]];
            return createDict()
          };
        t.exports = Object.create || function create(t, e) {
          var n;
          return null !== t ? (Empty.prototype = i(t), n = new Empty, Empty.prototype = null, n[s] = t) : n = createDict(), void 0 === e ? n : o(n, e)
        }
      },
      9275: function(t, e, n) {
        var i = n(7007),
          o = n(1734),
          r = n(1689),
          s = Object.defineProperty;
        e.f = n(7057) ? Object.defineProperty : function defineProperty(t, e, n) {
          if (i(t), e = r(e, !0), i(n), o) try {
            return s(t, e, n)
          } catch (t) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
          return "value" in n && (t[e] = n.value), t
        }
      },
      5588: function(t, e, n) {
        var i = n(9275),
          o = n(7007),
          r = n(7184);
        t.exports = n(7057) ? Object.defineProperties : function defineProperties(t, e) {
          o(t);
          for (var n, s = r(e), c = s.length, u = 0; c > u;) i.f(t, n = s[u++], e[n]);
          return t
        }
      },
      468: function(t, e, n) {
        var i = n(9181),
          o = n(508),
          r = n(9335)("IE_PROTO"),
          s = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
          return t = o(t), i(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
      },
      189: function(t, e, n) {
        var i = n(9181),
          o = n(2110),
          r = n(9315)(!1),
          s = n(9335)("IE_PROTO");
        t.exports = function(t, e) {
          var n, c = o(t),
            u = 0,
            l = [];
          for (n in c) n != s && i(c, n) && l.push(n);
          for (; e.length > u;) i(c, n = e[u++]) && (~r(l, n) || l.push(n));
          return l
        }
      },
      7184: function(t, e, n) {
        var i = n(189),
          o = n(4430);
        t.exports = Object.keys || function keys(t) {
          return i(t, o)
        }
      },
      188: function(t) {
        t.exports = function(t) {
          try {
            return {
              e: !1,
              v: t()
            }
          } catch (t) {
            return {
              e: !0,
              v: t
            }
          }
        }
      },
      94: function(t, e, n) {
        var i = n(7007),
          o = n(5286),
          r = n(3499);
        t.exports = function(t, e) {
          if (i(t), o(e) && e.constructor === t) return e;
          var n = r.f(t);
          return (0, n.resolve)(e), n.promise
        }
      },
      681: function(t) {
        t.exports = function(t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
          }
        }
      },
      4408: function(t, e, n) {
        var i = n(7234);
        t.exports = function(t, e, n) {
          for (var o in e) i(t, o, e[o], n);
          return t
        }
      },
      7234: function(t, e, n) {
        var i = n(3816),
          o = n(7728),
          r = n(9181),
          s = n(3953)("src"),
          c = n(18),
          u = "toString",
          l = ("" + c).split(u);
        n(5645).inspectSource = function(t) {
          return c.call(t)
        }, (t.exports = function(t, e, n, c) {
          var u = "function" == typeof n;
          u && (r(n, "name") || o(n, "name", e)), t[e] !== n && (u && (r(n, s) || o(n, s, t[e] ? "" + t[e] : l.join(String(e)))), t === i ? t[e] = n : c ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
        })(Function.prototype, u, (function toString() {
          return "function" == typeof this && this[s] || c.call(this)
        }))
      },
      2974: function(t, e, n) {
        "use strict";
        var i = n(3816),
          o = n(9275),
          r = n(7057),
          s = n(6314)("species");
        t.exports = function(t) {
          var e = i[t];
          r && e && !e[s] && o.f(e, s, {
            configurable: !0,
            get: function() {
              return this
            }
          })
        }
      },
      2943: function(t, e, n) {
        var i = n(9275).f,
          o = n(9181),
          r = n(6314)("toStringTag");
        t.exports = function(t, e, n) {
          t && !o(t = n ? t : t.prototype, r) && i(t, r, {
            configurable: !0,
            value: e
          })
        }
      },
      9335: function(t, e, n) {
        var i = n(3825)("keys"),
          o = n(3953);
        t.exports = function(t) {
          return i[t] || (i[t] = o(t))
        }
      },
      3825: function(t, e, n) {
        var i = n(5645),
          o = n(3816),
          r = "__core-js_shared__",
          s = o[r] || (o[r] = {});
        (t.exports = function(t, e) {
          return s[t] || (s[t] = void 0 !== e ? e : {})
        })("versions", []).push({
          version: i.version,
          mode: n(4461) ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
      },
      8364: function(t, e, n) {
        var i = n(7007),
          o = n(4963),
          r = n(6314)("species");
        t.exports = function(t, e) {
          var n, s = i(t).constructor;
          return void 0 === s || null == (n = i(s)[r]) ? e : o(n)
        }
      },
      4496: function(t, e, n) {
        var i = n(1467),
          o = n(1355);
        t.exports = function(t) {
          return function(e, n) {
            var r, s, c = String(o(e)),
              u = i(n),
              l = c.length;
            return u < 0 || u >= l ? t ? "" : void 0 : (r = c.charCodeAt(u)) < 55296 || r > 56319 || u + 1 === l || (s = c.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? c.charAt(u) : r : t ? c.slice(u, u + 2) : s - 56320 + (r - 55296 << 10) + 65536
          }
        }
      },
      4193: function(t, e, n) {
        var i, o, r, s = n(741),
          c = n(7242),
          u = n(639),
          l = n(2457),
          f = n(3816),
          d = f.process,
          h = f.setImmediate,
          m = f.clearImmediate,
          _ = f.MessageChannel,
          p = f.Dispatch,
          g = 0,
          v = {},
          w = "onreadystatechange",
          run = function() {
            var t = +this;
            if (v.hasOwnProperty(t)) {
              var e = v[t];
              delete v[t], e()
            }
          },
          listener = function(t) {
            run.call(t.data)
          };
        h && m || (h = function setImmediate(t) {
          for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
          return v[++g] = function() {
            c("function" == typeof t ? t : Function(t), e)
          }, i(g), g
        }, m = function clearImmediate(t) {
          delete v[t]
        }, "process" == n(2032)(d) ? i = function(t) {
          d.nextTick(s(run, t, 1))
        } : p && p.now ? i = function(t) {
          p.now(s(run, t, 1))
        } : _ ? (r = (o = new _).port2, o.port1.onmessage = listener, i = s(r.postMessage, r, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (i = function(t) {
          f.postMessage(t + "", "*")
        }, f.addEventListener("message", listener, !1)) : i = w in l("script") ? function(t) {
          u.appendChild(l("script")).onreadystatechange = function() {
            u.removeChild(this), run.call(t)
          }
        } : function(t) {
          setTimeout(s(run, t, 1), 0)
        }), t.exports = {
          set: h,
          clear: m
        }
      },
      2337: function(t, e, n) {
        var i = n(1467),
          o = Math.max,
          r = Math.min;
        t.exports = function(t, e) {
          return (t = i(t)) < 0 ? o(t + e, 0) : r(t, e)
        }
      },
      1467: function(t) {
        var e = Math.ceil,
          n = Math.floor;
        t.exports = function(t) {
          return isNaN(t = +t) ? 0 : (t > 0 ? n : e)(t)
        }
      },
      2110: function(t, e, n) {
        var i = n(9797),
          o = n(1355);
        t.exports = function(t) {
          return i(o(t))
        }
      },
      875: function(t, e, n) {
        var i = n(1467),
          o = Math.min;
        t.exports = function(t) {
          return t > 0 ? o(i(t), 9007199254740991) : 0
        }
      },
      508: function(t, e, n) {
        var i = n(1355);
        t.exports = function(t) {
          return Object(i(t))
        }
      },
      1689: function(t, e, n) {
        var i = n(5286);
        t.exports = function(t, e) {
          if (!i(t)) return t;
          var n, o;
          if (e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) return o;
          if ("function" == typeof(n = t.valueOf) && !i(o = n.call(t))) return o;
          if (!e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) return o;
          throw TypeError("Can't convert object to primitive value")
        }
      },
      3953: function(t) {
        var e = 0,
          n = Math.random();
        t.exports = function(t) {
          return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + n).toString(36))
        }
      },
      575: function(t, e, n) {
        var i = n(3816).navigator;
        t.exports = i && i.userAgent || ""
      },
      6314: function(t, e, n) {
        var i = n(3825)("wks"),
          o = n(3953),
          r = n(3816).Symbol,
          s = "function" == typeof r;
        (t.exports = function(t) {
          return i[t] || (i[t] = s && r[t] || (s ? r : o)("Symbol." + t))
        }).store = i
      },
      9002: function(t, e, n) {
        var i = n(1488),
          o = n(6314)("iterator"),
          r = n(2803);
        t.exports = n(5645).getIteratorMethod = function(t) {
          if (null != t) return t[o] || t["@@iterator"] || r[i(t)]
        }
      },
      6997: function(t, e, n) {
        "use strict";
        var i = n(7722),
          o = n(5436),
          r = n(2803),
          s = n(2110);
        t.exports = n(2923)(Array, "Array", (function(t, e) {
          this._t = s(t), this._i = 0, this._k = e
        }), (function() {
          var t = this._t,
            e = this._k,
            n = this._i++;
          return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }), "values"), r.Arguments = r.Array, i("keys"), i("values"), i("entries")
      },
      6253: function(t, e, n) {
        "use strict";
        var i = n(1488),
          o = {};
        o[n(6314)("toStringTag")] = "z", o + "" != "[object z]" && n(7234)(Object.prototype, "toString", (function toString() {
          return "[object " + i(this) + "]"
        }), !0)
      },
      851: function(t, e, n) {
        "use strict";
        var i, o, r, s, c = n(4461),
          u = n(3816),
          l = n(741),
          f = n(1488),
          d = n(2985),
          h = n(5286),
          m = n(4963),
          _ = n(3328),
          p = n(3531),
          g = n(8364),
          v = n(4193).set,
          w = n(4351)(),
          E = n(3499),
          y = n(188),
          b = n(575),
          P = n(94),
          x = "Promise",
          M = u.TypeError,
          I = u.process,
          O = I && I.versions,
          C = O && O.v8 || "",
          S = u.Promise,
          N = "process" == f(I),
          empty = function() {},
          T = o = E.f,
          R = !! function() {
            try {
              var t = S.resolve(1),
                e = (t.constructor = {})[n(6314)("species")] = function(t) {
                  t(empty, empty)
                };
              return (N || "function" == typeof PromiseRejectionEvent) && t.then(empty) instanceof e && 0 !== C.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
            } catch (t) {}
          }(),
          isThenable = function(t) {
            var e;
            return !(!h(t) || "function" != typeof(e = t.then)) && e
          },
          notify = function(t, e) {
            if (!t._n) {
              t._n = !0;
              var n = t._c;
              w((function() {
                for (var i = t._v, o = 1 == t._s, r = 0, run = function(e) {
                    var n, r, s, c = o ? e.ok : e.fail,
                      u = e.resolve,
                      l = e.reject,
                      f = e.domain;
                    try {
                      c ? (o || (2 == t._h && onHandleUnhandled(t), t._h = 1), !0 === c ? n = i : (f && f.enter(), n = c(i), f && (f.exit(), s = !0)), n === e.promise ? l(M("Promise-chain cycle")) : (r = isThenable(n)) ? r.call(n, u, l) : u(n)) : l(i)
                    } catch (t) {
                      f && !s && f.exit(), l(t)
                    }
                  }; n.length > r;) run(n[r++]);
                t._c = [], t._n = !1, e && !t._h && onUnhandled(t)
              }))
            }
          },
          onUnhandled = function(t) {
            v.call(u, (function() {
              var e, n, i, o = t._v,
                r = isUnhandled(t);
              if (r && (e = y((function() {
                  N ? I.emit("unhandledRejection", o, t) : (n = u.onunhandledrejection) ? n({
                    promise: t,
                    reason: o
                  }) : (i = u.console) && i.error && i.error("Unhandled promise rejection", o)
                })), t._h = N || isUnhandled(t) ? 2 : 1), t._a = void 0, r && e.e) throw e.v
            }))
          },
          isUnhandled = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
          },
          onHandleUnhandled = function(t) {
            v.call(u, (function() {
              var e;
              N ? I.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                promise: t,
                reason: t._v
              })
            }))
          },
          $reject = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), notify(e, !0))
          },
          $resolve = function(t) {
            var e, n = this;
            if (!n._d) {
              n._d = !0, n = n._w || n;
              try {
                if (n === t) throw M("Promise can't be resolved itself");
                (e = isThenable(t)) ? w((function() {
                  var i = {
                    _w: n,
                    _d: !1
                  };
                  try {
                    e.call(t, l($resolve, i, 1), l($reject, i, 1))
                  } catch (t) {
                    $reject.call(i, t)
                  }
                })): (n._v = t, n._s = 1, notify(n, !1))
              } catch (t) {
                $reject.call({
                  _w: n,
                  _d: !1
                }, t)
              }
            }
          };
        R || (S = function Promise(t) {
          _(this, S, x, "_h"), m(t), i.call(this);
          try {
            t(l($resolve, this, 1), l($reject, this, 1))
          } catch (t) {
            $reject.call(this, t)
          }
        }, (i = function Promise(t) {
          this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = n(4408)(S.prototype, {
          then: function then(t, e) {
            var n = T(g(this, S));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = N ? I.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && notify(this, !1), n.promise
          },
          catch: function(t) {
            return this.then(void 0, t)
          }
        }), r = function() {
          var t = new i;
          this.promise = t, this.resolve = l($resolve, t, 1), this.reject = l($reject, t, 1)
        }, E.f = T = function(t) {
          return t === S || t === s ? new r(t) : o(t)
        }), d(d.G + d.W + d.F * !R, {
          Promise: S
        }), n(2943)(S, x), n(2974)(x), s = n(5645).Promise, d(d.S + d.F * !R, x, {
          reject: function reject(t) {
            var e = T(this);
            return (0, e.reject)(t), e.promise
          }
        }), d(d.S + d.F * (c || !R), x, {
          resolve: function resolve(t) {
            return P(c && this === s ? S : this, t)
          }
        }), d(d.S + d.F * !(R && n(7462)((function(t) {
          S.all(t).catch(empty)
        }))), x, {
          all: function all(t) {
            var e = this,
              n = T(e),
              i = n.resolve,
              o = n.reject,
              r = y((function() {
                var n = [],
                  r = 0,
                  s = 1;
                p(t, !1, (function(t) {
                  var c = r++,
                    u = !1;
                  n.push(void 0), s++, e.resolve(t).then((function(t) {
                    u || (u = !0, n[c] = t, --s || i(n))
                  }), o)
                })), --s || i(n)
              }));
            return r.e && o(r.v), n.promise
          },
          race: function race(t) {
            var e = this,
              n = T(e),
              i = n.reject,
              o = y((function() {
                p(t, !1, (function(t) {
                  e.resolve(t).then(n.resolve, i)
                }))
              }));
            return o.e && i(o.v), n.promise
          }
        })
      },
      9115: function(t, e, n) {
        "use strict";
        var i = n(4496)(!0);
        n(2923)(String, "String", (function(t) {
          this._t = String(t), this._i = 0
        }), (function() {
          var t, e = this._t,
            n = this._i;
          return n >= e.length ? {
            value: void 0,
            done: !0
          } : (t = i(e, n), this._i += t.length, {
            value: t,
            done: !1
          })
        }))
      },
      1181: function(t, e, n) {
        for (var i = n(6997), o = n(7184), r = n(7234), s = n(3816), c = n(7728), u = n(2803), l = n(6314), f = l("iterator"), d = l("toStringTag"), h = u.Array, m = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
          }, _ = o(m), p = 0; p < _.length; p++) {
          var g, v = _[p],
            w = m[v],
            E = s[v],
            y = E && E.prototype;
          if (y && (y[f] || c(y, f, h), y[d] || c(y, d, v), u[v] = h, w))
            for (g in i) y[g] || r(y, g, i[g], !0)
        }
      },
      58: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ExtIframe = void 0;
        var i, o, r = n(8643),
          s = n(8122),
          c = n(7992);
        ! function(t) {
          t[t.win = 0] = "win", t[t.def = 1] = "def"
        }(i || (i = {})),
        function(t) {
          t[t.win = 0] = "win", t[t.def = 1] = "def", t[t.turn = 2] = "turn"
        }(o || (o = {}));
        var u = function() {
          function ExtIframe(t) {
            var e = this;
            this.onInit = new r.CEvent, this.onInitComplite = new r.CEvent, this.onDestroy = new r.CEvent, this.onOpen = new r.CEvent, this.onClose = new r.CEvent, this.onResize = new r.CEvent, this.onRender = new r.CEvent, this.onOpenButton = new r.CEvent, this.onRenderFirst = function() {
              e.wrapper.view = !0, e.render(), e.onInit.trigger()
            }, this.onResizeWindowTimer = function() {
              e.extwin.win.clearTimeout(e.resizeWindowTimer), e.resizeWindowTimer = e.extwin.win.setTimeout(e.onResizeWindow, 300)
            }, this.onResizeWindow = function() {
              e.render(), e.onResize.trigger()
            }, this.render = function() {
              if (null != e.server) {
                e.config.mobile && 1 == e.show_classic_mobile && (e.wrapper.view = !e._turn);
                var t = e.server.view_border,
                  n = e.server.view_position;
                e.config.mobile && (t = 0);
                var i = e.extwin.windowWidth,
                  o = e.extwin.windowHeight;
                if (e.height_auto) e.wrapper.size = ExtIframe.CreateSizeHeightAuto(e._turn, e._turn_height, e.height_value, e.comment_element), e.wrapper.position = ExtIframe.createPositionComment();
                else if (e.render_in_comment_element) e.wrapper.size = ExtIframe.CreateSizeComment(e._turn, e._turn_height, o, e.comment_element), e.wrapper.position = ExtIframe.createPositionComment();
                else {
                  var r = {
                    width: Math.min(e.server.view_width, i),
                    height: Math.min(e.server.view_height, o)
                  };
                  e.wrapper.size = ExtIframe.CreateSizeDefault(e.config.mobile, e._turn, r, e._turn_height, i, o, n), e.wrapper.position = ExtIframe.createPositionDefault(e.config.mobile, e._turn, r, e.wrapper.size, t, i, o, n)
                }
                if (e.iframe.size = e.wrapper.size, e.config.mobile && 0 == e.render_in_comment_element && e._focus != !e._turn && (e._focus = !e._turn, e.extwin.Hide(e._focus), e._focus || (e.extwin.scrollTop = e._scroll_window)), null != e._scrollTopNext) {
                  var s = e.iframe.rect(),
                    c = e.extwin.scrollTop + s.top + Math.max(0, Math.min(s.height - e.extwin.windowHeight - e.config.scroll_border_top, e._scrollTopNext)) - e.config.scroll_border_top;
                  e.extwin.scrollTop = c, e._scrollTopNext = null
                }
                e.onRender.trigger({
                  elem: e.wrapper,
                  turn: e._turn,
                  isMobile: e.config.mobile,
                  has_comment_element: null != e.comment_element,
                  render_in_comment_element: e.render_in_comment_element,
                  size: e.wrapper.size,
                  view_position: n,
                  border: t
                })
              }
            }, this._height = function(t) {
              e.height_value = t.height, e.render()
            }, this._scroll = function(t) {
              e._scrollTopNext = t.scroll, e.render()
            }, this.scrollWindowTimer = null, this.onScrollWindowEvent = function() {
              null == e.scrollWindowTimer && e.PostMessage(c.PM_WINDOW_SCROLL_BEGIN), e.extwin.win.clearTimeout(e.scrollWindowTimer), e.scrollWindowTimer = e.extwin.win.setTimeout(e.onScrollWindowCallback, 300)
            }, this.onScrollWindowCallback = function() {
              var t = e.iframe.rect(),
                n = e.extwin.win.pageYOffset + t.top;
              e.PostMessage(c.PM_WINDOW_SCROLL, {
                scroll: e.extwin.scrollTop - n
              }), e._focus || (e._scroll_window = e.extwin.scrollTop), e.scrollWindowTimer = null
            }, this._turn = !0, this._turn_height = 50, this._focus = !1, this._scroll_window = 0, this.plagins = {}, this._dragtimer = null, this._dragenter = function() {
              e.PostMessage(c.PM_DRAG_ENTER)
            }, this._dragleave = function() {
              e.PostMessage(c.PM_DRAG_LEAVE)
            }, this.AddPlagin = function(t) {
              null == e.plagins[t.name] && (e.plagins[t.name] = t, e.plagins[t.name].install.call(null, e))
            }, this.RemovePlagin = function(t) {
              null != e.plagins[t.name] && (e.plagins[t.name].uninstall.call(null, e), delete e.plagins[t.name])
            }, this.InitComplite = function() {
              e.onInitComplite.trigger()
            }, this.IsRenderElement = function() {
              return e.render_in_comment_element
            }, this.IsHeightAuto = function() {
              return e.height_auto
            }, this.Turn = function() {
              return !e._turn
            }, this.TurnOpen = function() {
              e._turn && (e._turn = !1, e.render(), e.onOpen.trigger())
            }, this.TurnClose = function() {
              e._turn || (e._turn = !0, e.render(), e.onClose.trigger())
            }, this.Scroll = function() {
              if (!e.config.mobile && null != e.comment_element) var t = 100,
                n = window.setInterval((function() {
                  0 != e.iframe.rect().top && ("scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"), window.scrollTo(0, window.pageYOffset + e.iframe.rect().top - e.config.scroll_border_top), clearInterval(n)), t < 0 && clearInterval(n), t--
                }), 100)
            }, this.Open = function() {
              e.PostMessage(c.PM_BEGIN_OPEN)
            }, this.lose = function() {
              e.PostMessage(c.PM_BEGIN_CLOSE)
            }, this._EventOpen = function() {
              e.PostMessage(c.PM_COMPLITE_OPEN)
            }, this._EventClose = function() {
              e.PostMessage(c.PM_COMPLITE_CLOSE)
            }, this._EventRender = function(t) {
              e.PostMessage(c.PM_RENDER, {
                size: {
                  width: t.size.width,
                  height: t.size.height
                },
                window: {
                  width: e.extwin.windowWidth,
                  height: e.extwin.windowHeight
                }
              })
            }, this.Cursor = function() {
              e.render()
            }, this.PostMessage = function(t, n) {
              void 0 === n && (n = null), null != e.iframe && null != e.iframe.el && null != e.iframe.el.contentWindow && s.default.send(e.iframe.el.contentWindow, {
                type: t,
                data: n
              })
            }, this.destroy = function() {
              for (var t in e.pm.off(c.PM_VIEW_HEIGHT, e._height), e.pm.off(c.PM_WINDOW_SCROLL, e._scroll), e.EventOpen.off(e._EventOpen), e.EventClose.off(e._EventClose), e.EventRender.off(e._EventRender), e.extwin.win.removeEventListener("resize", e.onResizeWindowTimer, !1), e.extwin.win.removeEventListener("scroll", e.onScrollWindowEvent, !1), e.wrapper.el.parentNode.removeChild(e.wrapper.el), e.plagins) e.plagins[t].name && e.plagins[t].uninstall.call(null, e);
              e.onDestroy.trigger(), e.extwin.win.document.removeEventListener("dragenter", e._dragenter, !1), e.extwin.win.document.removeEventListener("dragover", e._dragenter, !1), e.extwin.win.document.removeEventListener("dragleave", e._dragleave, !1), e.extwin.win.document.removeEventListener("drop", e._dragleave, !1)
            }, this.pm = new s.default(window), this.pm.on(c.PM_VIEW_HEIGHT, this._height), this.pm.on(c.PM_WINDOW_SCROLL, this._scroll), this.EventOpen.on(this._EventOpen), this.EventClose.on(this._EventClose), this.EventRender.on(this._EventRender), this.server = t.server, this.config = t.config, this.extwin = new r.ExtExtendWindow(t.window, t.windowName), this.show_classic_desktop = null != this.config.show_classic_desktop ? this.config.show_classic_desktop : this.server.show_classic_desktop, this.show_classic_mobile = null != this.config.show_classic_mobile ? this.config.show_classic_mobile : this.server.show_classic_mobile, this.comment_element = ExtIframe.InitCommentBlock({
              window: t.window,
              desktop_class: this.config.desktop_class,
              show_classic_desktop: this.show_classic_desktop,
              show_classic_mobile: this.show_classic_mobile,
              mobile: this.config.mobile
            }), this.render_in_comment_element = !1;
            var n = !0;
            if (null != this.comment_element)
              if (this.config.mobile) switch (this.show_classic_mobile) {
                case 2:
                  n = !1
              } else switch (this.show_classic_desktop) {
                case 2:
                case 1:
                  n = !1
              }
            if (this.iframe = this.extwin.CreateIframe(n, t.src), this.wrapper = this.extwin.CreateWrapper(n), this.wrapper.view = !1, this.style = this.extwin.CreateStyle(this.config.theme, this.server.theme), this.extwin.win.addEventListener("resize", this.onResizeWindowTimer, !1), this.extwin.win.addEventListener("scroll", this.onScrollWindowEvent, !1), this.wrapper.el.appendChild(this.iframe.el), this.wrapper.el.appendChild(this.style), null != this.comment_element)
              if (this.config.mobile && 1 == this.show_classic_mobile) {
                var i = document.createElement("a");
                i.innerText = this.config.comment_button_text, i.className = t.windowName + "-button", i.addEventListener("click", (function() {
                  e.onOpenButton.trigger()
                })), "SCRIPT" == this.comment_element.tagName ? this.comment_element.parentNode.insertBefore(i, this.comment_element) : this.comment_element.appendChild(i), t.window.document.body.appendChild(this.wrapper.el)
              } else "SCRIPT" == this.comment_element.tagName ? this.comment_element.parentNode.insertBefore(this.wrapper.el, this.comment_element) : this.comment_element.appendChild(this.wrapper.el), this.render_in_comment_element = !0;
            else t.window.document.body.appendChild(this.wrapper.el);
            this.height_auto = this.render_in_comment_element && 2 === (this.config.mobile ? this.show_classic_mobile : this.show_classic_desktop), this.config.drop && (this.extwin.win.document.addEventListener("dragenter", this._dragenter, !1), this.extwin.win.document.addEventListener("dragover", this._dragenter, !1), this.extwin.win.document.addEventListener("dragleave", this._dragleave, !1), this.extwin.win.document.addEventListener("drop", this._dragleave, !1))
          }
          return ExtIframe.CreateSizeDefault = function(t, e, n, i, o, r, s) {
            return {
              width: t ? o : s >= 6 && e ? i : n.width,
              height: t ? e ? i : r : e ? s >= 6 ? Math.min(r, 300) : i : n.height
            }
          }, ExtIframe.CreateSizeHeightAuto = function(t, e, n, i) {
            return {
              width: ("SCRIPT" == i.tagName ? i.parentElement : i).getBoundingClientRect().width,
              height: t ? e : n
            }
          }, ExtIframe.CreateSizeComment = function(t, e, n, i) {
            return {
              width: ("SCRIPT" == i.tagName ? i.parentElement : i).getBoundingClientRect().width,
              height: t ? e : Math.min(800, Math.max(n - 200, 550))
            }
          }, ExtIframe.FindScriptTC = function() {
            var t, e = document.getElementsByTagName("script");
            for (var n in e) {
              if ((t = e[n]).textContent && t.textContent.length < 300)
                if (t.textContent.match(/\/\/(test|web)\.tolstoycomments\.com\/sitejs\/app\.js\?i\=/)) return t
            }
            return null
          }, ExtIframe.InitCommentBlock = function(t) {
            if (t.mobile ? t.show_classic_mobile : t.show_classic_desktop > 0) {
              var e = t.window.document.getElementsByClassName(t.desktop_class)[0];
              return null != e ? e : this.FindScriptTC()
            }
            return null
          }, Object.defineProperty(ExtIframe.prototype, "EventInit", {
            get: function() {
              return this.onInit.expose()
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(ExtIframe.prototype, "EventInitComplite", {
            get: function() {
              return this.onInitComplite.expose()
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(ExtIframe.prototype, "EventDestroy", {
            get: function() {
              return this.onDestroy.expose()
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(ExtIframe.prototype, "EventOpen", {
            get: function() {
              return this.onOpen.expose()
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(ExtIframe.prototype, "EventClose", {
            get: function() {
              return this.onClose.expose()
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(ExtIframe.prototype, "EventRender", {
            get: function() {
              return this.onRender.expose()
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(ExtIframe.prototype, "EventOpenButton", {
            get: function() {
              return this.onOpenButton.expose()
            },
            enumerable: !1,
            configurable: !0
          }), ExtIframe.createPositionDefault = function(t, e, n, i, o, r, s, c) {
            var u = 0,
              l = 0,
              f = 0;
            if (t) return {
              top: -1,
              left: u,
              bottom: 0
            };
            if (e) {
              switch (c) {
                case 0:
                case 3:
                  u = r - (n.width + o);
                  break;
                case 1:
                case 4:
                  u = o;
                  break;
                case 2:
                case 5:
                  u = r / 2 - n.width / 2;
                  break;
                case 6:
                case 7:
                case 8:
                  u = 0;
                  break;
                case 9:
                case 10:
                case 11:
                  u = r - i.width
              }
              return u = c < 6 ? Math.max(Math.min(Math.max(r - n.width, 0), u), 0) : Math.max(Math.min(Math.max(r - i.width, 0), u), 0), c < 3 ? (l = -1, f = 0) : c < 6 ? (l = 0, f = -1) : 6 == c || 9 == c ? (l = 20, f = -1) : 8 == c || 11 == c ? (l = -1, f = 20) : (l = s / 2 - i.height / 2, f = -1), {
                top: l,
                left: u,
                bottom: f
              }
            }
            switch (c) {
              case 0:
              case 3:
              case 9:
              case 10:
              case 11:
                u = r - (n.width + o);
                break;
              case 1:
              case 4:
              case 6:
              case 7:
              case 8:
                u = o;
                break;
              case 2:
              case 5:
                u = r / 2 - n.width / 2
            }
            return c < 3 || c >= 6 ? (l = -1, f = 0) : c < 6 && (l = 0, f = -1), {
              top: l,
              left: u = Math.max(Math.min(Math.max(r - n.width, 0), u), 0),
              bottom: f
            }
          }, ExtIframe.createPositionComment = function() {
            return {
              top: 0,
              bottom: 0,
              left: 0
            }
          }, ExtIframe
        }();
        e.ExtIframe = u
      },
      2194: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.DOMAIN_ZONE = e.VERSION = void 0, e.VERSION = "0.0.1", e.DOMAIN_ZONE = ".tolstoycomments.com"
      },
      3602: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var i = n(8643),
          o = function() {
            function Comment(t, e, n) {
              var i = this;
              this.update = function(t, e) {
                void 0 === t && (t = i.config.comment_class), void 0 === e && (e = i.config.comment_render);
                var n = i.window.document.getElementsByClassName(t),
                  o = Comment._getKeys(n);
                if (0 != o.urls.length || 0 != o.identityes.length) {
                  var r = o.identityes.length > 0 ? "&i=" + o.identityes.join("&i=") : "",
                    s = o.urls.length > 0 ? "&h=" + o.urls.join("&h=") : "",
                    c = [i.setting.ServerUrl, "/api/chat/countcomment?siteid=", i.setting.SiteId, r, s].join("");
                  return fetch(c).then((function(t) {
                    return t.json()
                  })).then((function(t) {
                    return t.data.hashas
                  })).then((function(t) {
                    return Comment._onCountComment(t, o.elems, e), t
                  })).catch((function(t) {
                    throw new Error("tc: server comment no load")
                  }))
                }
              }, this.setting = t, this.config = e, this.window = n, this.config.comment_class && this.update()
            }
            return Comment._getKeys = function(t) {
              for (var e, n, o = [], r = [], s = 100, c = {}, u = 0; u < t.length && !(s < 0); u++) n = "", (e = t[u]).hasAttribute("data-identity") ? (n = i.MD5(e.getAttribute("data-identity")), -1 == r.indexOf(n) && r.push(n)) : e.hasAttribute("data-url") && (n = i.Md5UrlWithoutHost(e.getAttribute("data-url")), -1 == o.indexOf(n) && o.push(n)), "" != n && (c[n] = c[n] || [], c[n].push(e), s--);
              return {
                elems: c,
                urls: o,
                identityes: r
              }
            }, Comment._onCountComment = function(t, e, n) {
              var i, o, r, s;
              for (o in t)
                if (i = t[o], e[o].length)
                  for (r in e[o])(s = n.call(e[o][r], i)) && (e[o][r].textContent = s)
            }, Comment
          }();
        e.default = o
      },
      2834: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var i = n(8643),
          o = function() {
            function Reaction(t, e, n) {
              var i = this;
              this.update = function(t, e) {
                void 0 === t && (t = i.config.reaction_class), void 0 === e && (e = i.config.reaction_render);
                var n = i.window.document.getElementsByClassName(t),
                  o = Reaction.getKeys(n),
                  r = Reaction.createParams(o),
                  s = i.setting,
                  c = s.ServerUrl,
                  u = s.SiteId;
                return fetch(c + "/api/chat/countreaction?siteid=" + u + r).then((function(t) {
                  return t.json()
                })).then((function(t) {
                  return t.data
                })).then((function(t) {
                  return Reaction.success(t, o, e), t
                })).catch((function(t) {
                  throw new Error("tc: server reaction no load")
                }))
              }, this.setting = t, this.config = e, this.window = n, this.config.reaction_class && this.update()
            }
            return Reaction.renderGroup = function(t, e, n) {
              for (var i in t) {
                var o = t[i];
                if (e[i].length)
                  for (var r in e[i]) {
                    var s = n.call(e[i][r], o);
                    s && (e[i][r].textContent = s)
                  }
              }
            }, Reaction.success = function(t, e, n) {
              Reaction.renderGroup(t.emoji, e.emoji.elems, n), Reaction.renderGroup(t.stars, e.stars.elems, n)
            }, Reaction.createDefaultKeys = function() {
              return {
                emoji: {
                  elems: {},
                  urls: [],
                  identityes: []
                },
                stars: {
                  elems: {},
                  urls: [],
                  identityes: []
                }
              }
            }, Reaction.getKeys = function(t) {
              for (var e, n, o, r = Reaction.createDefaultKeys(), s = 0; s < t.length; s++) n = "", o = "stars" == (e = t[s]).getAttribute("data-type") ? r.stars : r.emoji, e.hasAttribute("data-identity") ? (n = i.MD5(e.getAttribute("data-identity")), -1 == o.identityes.indexOf(n) && o.identityes.push(n)) : e.hasAttribute("data-url") && (n = i.Md5UrlWithoutHost(e.getAttribute("data-url")), -1 == o.urls.indexOf(n) && o.urls.push(n)), "" != n && (o.elems[n] = o.elems[n] || [], o.elems[n].push(e));
              return r
            }, Reaction.createUrlPart = function(t, e) {
              return t.map((function(t) {
                return "&" + e + "=" + t
              })).join("")
            }, Reaction.createParams = function(t) {
              return Reaction.createUrlPart(t.emoji.urls, "he") + Reaction.createUrlPart(t.emoji.identityes, "ie") + Reaction.createUrlPart(t.stars.urls, "hs") + Reaction.createUrlPart(t.stars.identityes, "hs")
            }, Reaction
          }();
        e.default = o
      },
      8643: function(t, e, n) {
        "use strict";
        var i, o = this && this.__extends || (i = function(t, e) {
          return (i = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function(t, e) {
              t.__proto__ = e
            } || function(t, e) {
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
        }, function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

          function __() {
            this.constructor = t
          }
          i(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __)
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ActionEnumGetFileName = e.ActionEnum = e.trim = e.VidjetEventName = e.NormolizeURL = e.extend = e.Md5UrlWithoutHost = e.MD5 = e.GetCommentShow = e.ExtElement = e.SetStyle = e.ExtExtendWindow = e.ExtWindow = e.CEvent = e.LoadConfig = e.LoadSettings = e.LoadServer = e.TCLog = e.IsMobileiOS = e.GetLang = e.IsMobile = e.escapeHtml = void 0;
        var r = n(1779),
          s = n(2194);

        function LoadTitle(t) {
          var e = t.document.getElementsByTagName("title");
          return e.length > 0 ? trim(e[0].innerText).substr(0, 255).toString() : ""
        }
        var c = {
          "&amp;": "&",
          "&#038;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#039;": "'",
          "&#8217;": "’",
          "&#8216;": "‘",
          "&#8211;": "–",
          "&#8212;": "—",
          "&#8230;": "…",
          "&#8220;": "“",
          "&#8221;": "”",
          "&#171;": "«",
          "&#187;": "»"
        };

        function IsMobile() {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
        }

        function GetLang() {
          return window.navigator.language
        }

        function ReactionRender(t) {
          var e = t.reduce((function(t, e) {
            return t + e
          }), 0);
          if (this.hasAttribute("data-type") && "stars" == this.getAttribute("data-type")) switch (this.getAttribute("data-type")) {
            case "stars":
              return (t.map((function(t, e) {
                return t * (e + 1)
              })).reduce((function(t, e) {
                return t + e
              }), 0) / e).toFixed(2)
          }
          return e.toString()
        }

        function CommentRender(t) {
          return t.toString()
        }
        e.escapeHtml = function escapeHtml(t) {
          return t.replace(/\&[\w\d\#]{2,5}\;/g, (function(t) {
            return c[t] ? c[t] : ""
          }))
        }, e.IsMobile = IsMobile, e.GetLang = GetLang, e.IsMobileiOS = /iPhone|iPad|iPod/i.test(window.navigator.userAgent), e.TCLog = function TCLog(t) {
          console.error("tc:", t)
        }, e.LoadServer = function LoadServer(t) {
          return fetch(t.ServerUrl + "/api/site/settings/" + t.SiteId).then((function(t) {
            return t.json()
          })).then((function(t) {
            return t.data
          })).catch((function(t) {
            throw new Error("tc: server settings no load")
          }))
        }, e.LoadSettings = function LoadSettings(t) {
          for (var e = t.document.getElementsByTagName("script"), n = 0; n < e.length; n++) {
            var i = e[n];
            if (i.tagName && i.hasAttribute("src")) {
              var o = i.getAttribute("src"),
                r = o.toString().match(/(.+?)\/site.+\?i=(.+?)&x=([0-9]+)*?&/);
              if (r && 4 == r.length && o.indexOf(s.DOMAIN_ZONE) > 0 || "localhost" == location.hostname || o.indexOf("172.16.0.188") > 0) {
                var c = t.location.href,
                  u = r[1];
                return 0 == u.indexOf("//") && (u = "https://" + u.substr(2)), {
                  SiteId: r[3],
                  WindowName: r[2],
                  ServerUrl: u,
                  Href: c,
                  time: 0
                }
              }
            }
          }
          return null
        }, e.LoadConfig = function LoadConfig(t, e, n) {
          return extend({
            main: !1,
            identity: null,
            url: NormolizeURL(t.document.location.href),
            title: LoadTitle(window),
            visible: null == n,
            comment_class: "",
            comment_render: CommentRender,
            reaction_class: "",
            reaction_render: ReactionRender,
            comment_button_text: "Обсудить",
            desktop_class: "tolstoycomments-feed",
            success: function() {},
            show_classic_desktop: null,
            show_classic_mobile: null,
            scroll_border_top: 0,
            scroll_border_bottom: 0,
            sso: null,
            mobile: IsMobile(),
            lang: GetLang(),
            theme: null,
            drop: !0,
            comment_show_sort: null,
            comment_show_format: null,
            hide_all_chats: !1,
            page: null
          }, t[e].config)
        };
        var u = function() {
          function CEvent() {
            this.handlers = []
          }
          return CEvent.prototype.on = function(t) {
            this.handlers.push(t)
          }, CEvent.prototype.off = function(t) {
            this.handlers = this.handlers.filter((function(e) {
              return e !== t
            }))
          }, CEvent.prototype.trigger = function(t) {
            this.handlers.slice(0).forEach((function(e) {
              return e(t)
            }))
          }, CEvent.prototype.expose = function() {
            return this
          }, CEvent
        }();
        e.CEvent = u;
        var l = function() {
          function ExtWindow(t) {
            this.win = t, this.html = this.win.document.documentElement || this.win.document.body
          }
          return Object.defineProperty(ExtWindow.prototype, "scrollTop", {
            get: function() {
              return this.win.pageYOffset || this.win.document.documentElement.scrollTop || this.win.document.body.scrollTop
            },
            set: function(t) {
              this.win.scrollTo(0, t)
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(ExtWindow.prototype, "scrollLeft", {
            get: function() {
              return this.win.pageXOffset || this.win.document.documentElement.scrollLeft || this.win.document.body.scrollLeft
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(ExtWindow.prototype, "scrollHeight", {
            get: function() {
              return Math.max(this.win.document.body.scrollHeight, this.win.document.documentElement.scrollHeight, this.win.document.body.offsetHeight, this.win.document.documentElement.offsetHeight, this.win.document.body.clientHeight, this.win.document.documentElement.clientHeight)
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(ExtWindow.prototype, "windowWidth", {
            get: function() {
              return this.win.document.documentElement.clientWidth || this.win.document.body.clientWidth
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(ExtWindow.prototype, "windowHeight", {
            get: function() {
              return this.win.innerHeight || this.win.document.documentElement.clientHeight || this.win.document.body.clientHeight
            },
            enumerable: !1,
            configurable: !0
          }), ExtWindow
        }();
        e.ExtWindow = l;
        var f = function(t) {
          function ExtExtendWindow(e, n) {
            var i = t.call(this, e) || this,
              o = Math.random().toString().substr(2);
            return i.windowName = n, i.bodyclass = n + o, i.iframeclass = n + "iframe" + o, i.wrapperclass = n + "wrapper" + o, i
          }
          return o(ExtExtendWindow, t), ExtExtendWindow.prototype.CreateHiddenIframe = function(t) {
            var e = this.win.document.createElement("iframe");
            return e.setAttribute("async", "async"), e.setAttribute("scrolling", "yes"), e.src = t, e.frameBorder = "0", e.id = this.iframeclass + "hide", SetStyle(e.style, {
              position: "absolute",
              top: "-100000px",
              left: "-100000px",
              width: "1px",
              height: "1px"
            }), e
          }, ExtExtendWindow.prototype.CreateIframe = function(t, e) {
            var n = this.win.document.createElement("iframe");
            n.setAttribute("async", "async"), n.setAttribute("scrolling", "yes"), n.src = e, n.frameBorder = "0", n.id = this.iframeclass;
            var i = {
              display: "block",
              position: "absolute",
              width: "100%",
              height: "100%",
              boxShadow: "none",
              border: "none",
              background: "#fff",
              margin: 0,
              padding: 0
            };
            return t && (i.zIndex = "2000000002", i.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.3)"), SetStyle(n.style, i), new h(n)
          }, ExtExtendWindow.prototype.CreateWrapper = function(t) {
            var e = this.win.document.createElement("div");
            e.id = this.wrapperclass;
            var n = {
              display: "none",
              position: "relative",
              top: "auto",
              left: "auto",
              right: "auto",
              bottom: "auto",
              border: "none"
            };
            return t && (n.zIndex = "2000000001", n.position = "fixed"), SetStyle(e.style, n), new h(e)
          }, ExtExtendWindow.prototype.CreateStyle = function(t, e) {
            var n = this,
              i = n.windowName,
              o = n.bodyclass,
              r = n.wrapperclass,
              s = n.iframeclass,
              c = {
                theme_white: !0,
                color_main: "#4FA3BA",
                color_main_middle_dark: "#2C616F",
                color_main_middle: "#1D3F49"
              };
            for (var u in e) e.hasOwnProperty(u) && (c[u] = e[u]);
            var l = t && t.colorBackground ? t.colorBackground : "#fff",
              f = t && t.colorMain ? t.colorMain : c.color_main,
              d = t && t.colorMainMiddleDark ? t.colorMainMiddleDark : c.theme_white ? c.color_main_middle_dark : c.color_main_middle,
              h = document.createElement("style"),
              m = [{
                name: "." + o,
                styles: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "100%",
                  width: "100%"
                }
              }, {
                name: "." + o + " body",
                styles: {
                  "z-index": "auto"
                }
              }, {
                name: "." + o + " body::after",
                styles: {
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  border: "none",
                  background: "rgba(0, 0, 0, 0.3)",
                  content: '" "',
                  "box-sizing": "border-box",
                  "-webkit-box-sizing": "border-box",
                  "-moz-box-sizing": "border-box",
                  "z-index": "2000000000",
                  margin: 0,
                  padding: 0
                }
              }, {
                name: "." + o + " #" + r,
                styles: {
                  position: "absolute",
                  "z-index": "2000000004"
                }
              }, {
                name: "." + o + " #" + s,
                styles: {
                  "z-index": "2000000005"
                }
              }, {
                name: "." + i + "-button",
                styles: {
                  display: "block",
                  margin: "0px auto",
                  "font-size": "14px",
                  "line-height": "14px",
                  "font-weight": "bold",
                  border: "2px solid #4db6ba",
                  padding: "11px 20px",
                  "border-radius": "5px",
                  "border-width": "0px",
                  "border-style": "solid",
                  cursor: "pointer",
                  background: f,
                  color: l,
                  "text-align": "center",
                  "text-transform": "uppercase"
                }
              }, {
                name: "." + i + "-button:hover",
                styles: {
                  background: d
                }
              }],
              _ = "";
            for (var u in m) {
              var p = "",
                g = m[u].styles;
              for (var v in g) p += v + ": " + g[v] + ";";
              _ += m[u].name + "{" + p + "}"
            }
            return h.innerHTML = _, h
          }, ExtExtendWindow.prototype.Hide = function(t) {
            var e = this;
            this.html.classList ? t ? this.html.classList.add(this.bodyclass) : this.html.classList.remove(this.bodyclass) : this.html.className = this.html.className.split(" ").filter((function(t) {
              return t != e.bodyclass
            })).concat(t ? this.bodyclass : "").filter((function(t) {
              return "" != t
            })).join(" ")
          }, ExtExtendWindow
        }(l);

        function SetStyle(t, e) {
          for (var n in e) t[n] = e[n]
        }
        e.ExtExtendWindow = f, e.SetStyle = SetStyle;
        var d, h = function() {
          function ExtElement(t) {
            this.elem = t, this._size = {
              width: 0,
              height: 0
            }, this._SetPosition({
              top: -1,
              left: 0,
              bottom: 0
            })
          }
          return ExtElement.prototype.px = function(t) {
            return t < 0 ? "auto" : t + "px"
          }, Object.defineProperty(ExtElement.prototype, "el", {
            get: function() {
              return this.elem
            },
            enumerable: !1,
            configurable: !0
          }), ExtElement.prototype._SetSize = function(t) {
            this.elem.style.width = this.px(t.width), this.elem.style.height = this.px(t.height), this._size = t
          }, Object.defineProperty(ExtElement.prototype, "size", {
            get: function() {
              return this._size
            },
            set: function(t) {
              t.width == this._size.width && t.height == this._size.height || this._SetSize(t)
            },
            enumerable: !1,
            configurable: !0
          }), ExtElement.prototype._SetPosition = function(t) {
            this.elem.style.top = this.px(t.top), this.elem.style.left = this.px(t.left), this.elem.style.bottom = this.px(t.bottom), this._position = t
          }, Object.defineProperty(ExtElement.prototype, "position", {
            get: function() {
              return this._position
            },
            set: function(t) {
              t.top == this._position.top && t.bottom == this._position.bottom && t.left == this.position.left || this._SetPosition(t)
            },
            enumerable: !1,
            configurable: !0
          }), ExtElement.prototype._SetView = function(t) {
            this._view = t, this.elem.style.display = t ? "block" : "none"
          }, Object.defineProperty(ExtElement.prototype, "view", {
            get: function() {
              return this._view
            },
            set: function(t) {
              this._view != t && this._SetView(t)
            },
            enumerable: !1,
            configurable: !0
          }), ExtElement.prototype.rect = function() {
            return this.elem.getBoundingClientRect()
          }, ExtElement
        }();

        function extend(t, e) {
          for (var n in t = t || {}, e) t[n] = e[n];
          return t
        }

        function NormolizeURL(t) {
          var e = t,
            n = e.indexOf("#"),
            i = e.indexOf("?");
          return -1 != n && (e = e.substr(0, n)), -1 != i && (e = e.substr(0, i)), e
        }

        function trim(t) {
          return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
        e.ExtElement = h, e.GetCommentShow = function GetCommentShow(t, e, n) {
            if (t) {
              var i = n[t.toLowerCase()];
              return i || 0
            }
            return e
          }, e.MD5 = function MD5(t) {
            return r.md5(t)
          }, e.Md5UrlWithoutHost = function Md5UrlWithoutHost(t) {
            return r.md5(t.replace(/^(http[s]*:\/\/(m\.|www\.)*)*(.+)$/i, "$3"))
          }, e.extend = extend, e.NormolizeURL = NormolizeURL,
          function(t) {
            t[t.domready = 0] = "domready", t[t.ready = 1] = "ready", t[t.open = 2] = "open", t[t.close = 3] = "close"
          }(e.VidjetEventName || (e.VidjetEventName = {})), e.trim = trim,
          function(t) {
            t.init = "init", t.miniwidget = "miniwidget", t.eventwidget = "eventwidget", t.reaction = "reaction"
          }(d = e.ActionEnum || (e.ActionEnum = {})), e.ActionEnumGetFileName = function ActionEnumGetFileName(t) {
            switch (t) {
              case d.miniwidget:
                return "/widget/banner.html";
              case d.eventwidget:
                return "/widget/events.html";
              case d.reaction:
                return "/widget/reaction.html";
              default:
                throw new Error("Widget is not found: " + t)
            }
          }
      },
      1779: function(t, e) {
        "use strict";

        function safeAdd(t, e) {
          var n = (65535 & t) + (65535 & e);
          return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
        }

        function md5cmn(t, e, n, i, o, r) {
          return safeAdd(function bitRotateLeft(t, e) {
            return t << e | t >>> 32 - e
          }(safeAdd(safeAdd(e, t), safeAdd(i, r)), o), n)
        }

        function md5ff(t, e, n, i, o, r, s) {
          return md5cmn(e & n | ~e & i, t, e, o, r, s)
        }

        function md5gg(t, e, n, i, o, r, s) {
          return md5cmn(e & i | n & ~i, t, e, o, r, s)
        }

        function md5hh(t, e, n, i, o, r, s) {
          return md5cmn(e ^ n ^ i, t, e, o, r, s)
        }

        function md5ii(t, e, n, i, o, r, s) {
          return md5cmn(n ^ (e | ~i), t, e, o, r, s)
        }

        function rstrMD5(t) {
          return function binl2rstr(t) {
            var e, n = "",
              i = 32 * t.length;
            for (e = 0; e < i; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
            return n
          }(function binlMD5(t, e) {
            var n, i, o, r, s;
            t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
            var c = 1732584193,
              u = -271733879,
              l = -1732584194,
              f = 271733878;
            for (n = 0; n < t.length; n += 16) i = c, o = u, r = l, s = f, c = md5ff(c, u, l, f, t[n], 7, -680876936), f = md5ff(f, c, u, l, t[n + 1], 12, -389564586), l = md5ff(l, f, c, u, t[n + 2], 17, 606105819), u = md5ff(u, l, f, c, t[n + 3], 22, -1044525330), c = md5ff(c, u, l, f, t[n + 4], 7, -176418897), f = md5ff(f, c, u, l, t[n + 5], 12, 1200080426), l = md5ff(l, f, c, u, t[n + 6], 17, -1473231341), u = md5ff(u, l, f, c, t[n + 7], 22, -45705983), c = md5ff(c, u, l, f, t[n + 8], 7, 1770035416), f = md5ff(f, c, u, l, t[n + 9], 12, -1958414417), l = md5ff(l, f, c, u, t[n + 10], 17, -42063), u = md5ff(u, l, f, c, t[n + 11], 22, -1990404162), c = md5ff(c, u, l, f, t[n + 12], 7, 1804603682), f = md5ff(f, c, u, l, t[n + 13], 12, -40341101), l = md5ff(l, f, c, u, t[n + 14], 17, -1502002290), c = md5gg(c, u = md5ff(u, l, f, c, t[n + 15], 22, 1236535329), l, f, t[n + 1], 5, -165796510), f = md5gg(f, c, u, l, t[n + 6], 9, -1069501632), l = md5gg(l, f, c, u, t[n + 11], 14, 643717713), u = md5gg(u, l, f, c, t[n], 20, -373897302), c = md5gg(c, u, l, f, t[n + 5], 5, -701558691), f = md5gg(f, c, u, l, t[n + 10], 9, 38016083), l = md5gg(l, f, c, u, t[n + 15], 14, -660478335), u = md5gg(u, l, f, c, t[n + 4], 20, -405537848), c = md5gg(c, u, l, f, t[n + 9], 5, 568446438), f = md5gg(f, c, u, l, t[n + 14], 9, -1019803690), l = md5gg(l, f, c, u, t[n + 3], 14, -187363961), u = md5gg(u, l, f, c, t[n + 8], 20, 1163531501), c = md5gg(c, u, l, f, t[n + 13], 5, -1444681467), f = md5gg(f, c, u, l, t[n + 2], 9, -51403784), l = md5gg(l, f, c, u, t[n + 7], 14, 1735328473), c = md5hh(c, u = md5gg(u, l, f, c, t[n + 12], 20, -1926607734), l, f, t[n + 5], 4, -378558), f = md5hh(f, c, u, l, t[n + 8], 11, -2022574463), l = md5hh(l, f, c, u, t[n + 11], 16, 1839030562), u = md5hh(u, l, f, c, t[n + 14], 23, -35309556), c = md5hh(c, u, l, f, t[n + 1], 4, -1530992060), f = md5hh(f, c, u, l, t[n + 4], 11, 1272893353), l = md5hh(l, f, c, u, t[n + 7], 16, -155497632), u = md5hh(u, l, f, c, t[n + 10], 23, -1094730640), c = md5hh(c, u, l, f, t[n + 13], 4, 681279174), f = md5hh(f, c, u, l, t[n], 11, -358537222), l = md5hh(l, f, c, u, t[n + 3], 16, -722521979), u = md5hh(u, l, f, c, t[n + 6], 23, 76029189), c = md5hh(c, u, l, f, t[n + 9], 4, -640364487), f = md5hh(f, c, u, l, t[n + 12], 11, -421815835), l = md5hh(l, f, c, u, t[n + 15], 16, 530742520), c = md5ii(c, u = md5hh(u, l, f, c, t[n + 2], 23, -995338651), l, f, t[n], 6, -198630844), f = md5ii(f, c, u, l, t[n + 7], 10, 1126891415), l = md5ii(l, f, c, u, t[n + 14], 15, -1416354905), u = md5ii(u, l, f, c, t[n + 5], 21, -57434055), c = md5ii(c, u, l, f, t[n + 12], 6, 1700485571), f = md5ii(f, c, u, l, t[n + 3], 10, -1894986606), l = md5ii(l, f, c, u, t[n + 10], 15, -1051523), u = md5ii(u, l, f, c, t[n + 1], 21, -2054922799), c = md5ii(c, u, l, f, t[n + 8], 6, 1873313359), f = md5ii(f, c, u, l, t[n + 15], 10, -30611744), l = md5ii(l, f, c, u, t[n + 6], 15, -1560198380), u = md5ii(u, l, f, c, t[n + 13], 21, 1309151649), c = md5ii(c, u, l, f, t[n + 4], 6, -145523070), f = md5ii(f, c, u, l, t[n + 11], 10, -1120210379), l = md5ii(l, f, c, u, t[n + 2], 15, 718787259), u = md5ii(u, l, f, c, t[n + 9], 21, -343485551), c = safeAdd(c, i), u = safeAdd(u, o), l = safeAdd(l, r), f = safeAdd(f, s);
            return [c, u, l, f]
          }(function rstr2binl(t) {
            var e, n = [];
            for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
            var i = 8 * t.length;
            for (e = 0; e < i; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
            return n
          }(t), 8 * t.length))
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.md5 = void 0, e.md5 = function md5(t) {
          return function rstr2hex(t) {
            var e, n, i = "0123456789abcdef",
              o = "";
            for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n), o += i.charAt(e >>> 4 & 15) + i.charAt(15 & e);
            return o
          }(rstrMD5(unescape(encodeURIComponent(t))))
        }
      },
      8122: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var i = n(7992),
          o = n(8643),
          r = function() {
            function PostMessage(t) {
              this.onEvents = {}, this._messageEvent = this._messageEvent.bind(this), this.win = t, this.win.addEventListener("message", this._messageEvent, !1)
            }
            return PostMessage.prototype._messageEvent = function(t) {
              var e = null;
              try {
                e = t.data
              } catch (t) {}
              null != e && e.type && i[e.type] && this.onEvents[e.type] && this.onEvents[e.type].trigger(e.data)
            }, PostMessage.prototype.destroy = function() {
              this.win.removeEventListener("message", this._messageEvent, !1)
            }, PostMessage.prototype.on = function(t, e) {
              return this.onEvents[t] || (this.onEvents[t] = new o.CEvent), this.onEvents[t].on(e), this
            }, PostMessage.prototype.off = function(t, e) {
              return this.onEvents[t] || (this.onEvents[t] = new o.CEvent), this.onEvents[t].off(e), this
            }, PostMessage.send = function(t, e) {
              t.postMessage({
                type: e.type,
                data: e.data
              }, "*")
            }, PostMessage
          }();
        e.default = r
      },
      4318: function(t, e, n) {
        "use strict";
        var i = this && this.__assign || function() {
          return (i = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
          }).apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), n(9074), n(4609);
        var o = n(8643),
          r = n(1669),
          s = n(4023),
          c = n(3602),
          u = n(2834);
        ! function(t) {
          var e = o.LoadSettings(t);
          if (null === e) throw new Error("tc: settings no load");
          var n = t[e.WindowName];
          if (null == n.settings) {
            n.settings = e;
            var l = o.LoadConfig(t, e.WindowName, n.t);
            n.filter((function(t) {
              return t.action == o.ActionEnum.init
            })).forEach((function(t) {
              return l = i(i({}, l), t.values)
            })), n.comment = new c.default(e, l, t), n.reaction = new u.default(e, l, t), o.LoadServer(e).then((function(i) {
              n.settings.time = Date.now(), n.widget = n.vidget = new r.default(e, l, i, t), l.visible && n.widget.init(), n.miniwidgets = new s.MiniWidgetGroup(e, l, i, t), n.miniwidgets.onHashChange((function(t) {
                return n.widget.page(t)
              })), n.filter((function(t) {
                return createValues(t)
              })).forEach((function(t) {
                return n.miniwidgets.create(t.values, t.action)
              })), "function" == typeof l.success && l.success()
            }))
          }
          var createValues = function(t) {
            switch (t.action) {
              case o.ActionEnum.miniwidget:
              case o.ActionEnum.eventwidget:
              case o.ActionEnum.reaction:
                return t.values;
              default:
                return null
            }
          }
        }(window)
      },
      4023: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.MiniWidgetGroup = void 0;
        var i, o = n(8643),
          r = n(8122),
          s = n(7992);
        ! function(t) {
          t.chat_top = "chat_top", t.comment_top = "chat_top", t.comment_last = "comment_last"
        }(i || (i = {}));
        var c = function() {
            function MiniWidgetItem(t, e, n, i, r, s) {
              this._setting = t, this._config = e, this._window = i, this._server = n, this._action = r, this._data = s;
              var c = document.getElementById(this._data.id);
              if (null == c) throw new Error("tc: element not found by id: " + this._data.id);
              this._iframe = new o.ExtElement(c.appendChild(this._createIfrmae(this._data, this._action)))
            }
            return MiniWidgetItem.prototype._createIfrmae = function(t, e) {
              var n = this._window.document.createElement("iframe"),
                i = Math.round((new Date).getTime() / 3e3).toString(),
                r = o.ActionEnumGetFileName(e),
                s = {
                  async: "async",
                  scrolling: "no",
                  src: this._setting.ServerUrl + r + "?t=" + i + "#" + t.id,
                  frameBorder: "0"
                };
              for (var c in s) n.setAttribute(c, s[c]);
              return o.SetStyle(n.style, {
                width: "100%",
                height: "0px"
              }), n
            }, MiniWidgetItem.prototype.init = function() {
              r.default.send(this._iframe.el.contentWindow, {
                type: s.PM_FRAME_INIT,
                data: {
                  init: this._data,
                  server: this._server,
                  config: JSON.parse(JSON.stringify(this._config)),
                  setting: this._setting
                }
              })
            }, MiniWidgetItem.prototype.resize = function(t) {
              this._height != t && (this._height = t, this._iframe.el.style.height = this._height + "px")
            }, MiniWidgetItem.prototype.destroy = function() {
              this._iframe.el.parentNode.removeChild(this._iframe.el)
            }, MiniWidgetItem
          }(),
          u = function() {
            function MiniWidgetGroup(t, e, n, i) {
              var o = this;
              this._items = {}, this._count = 0, this.create = function(t, e) {
                return 0 == o._count && (o._pm = new r.default(o._window), o._pm.on(s.PM_FRAME_INIT, o._init), o._pm.on(s.PM_FRAME_RESIZE, o._resize), o._pm.on(s.PM_FRAME_HASHCHANGE, o._hashchange)), o._items[t.id] = new c(o._setting, o._config, o._server, o._window, e, t), o._count++, o._items[t.id]
              }, this.onHashChange = function(t) {
                o._onHashChange = t
              }, this.destroy = function(t) {
                o._items[t] && (o._items[t].destroy(), o._items[t] = null, o._count--), 0 == o._count && (o._pm.off(s.PM_FRAME_INIT, o._init), o._pm.off(s.PM_FRAME_RESIZE, o._resize), o._pm.off(s.PM_FRAME_HASHCHANGE, o._hashchange), o._pm = null)
              }, this._init = function(t) {
                o._items[t.id] && o._items[t.id].init()
              }, this._resize = function(t) {
                o._items[t.id] && o._items[t.id].resize(t.height)
              }, this._hashchange = function(t) {
                o._items[t.id] && o._onHashChange && o._onHashChange(t.url)
              }, this._setting = t, this._config = e, this._window = i, this._server = n
            }
            return Object.defineProperty(MiniWidgetGroup.prototype, "items", {
              get: function() {
                return this._items
              },
              enumerable: !1,
              configurable: !0
            }), MiniWidgetGroup
          }();
        e.MiniWidgetGroup = u
      },
      772: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.PopupPlagin = void 0;
        var i = n(8643),
          o = n(8122),
          r = n(7992),
          s = function() {
            function PopupPlagin(t) {
              this.name_iframe_class = "app-comment__popup", this.name_iframe_class_hide = "app-comment__popup-hide", this.name = "PopupPlagin", this.extwin = new i.ExtWindow(t.window), this.setting = t.setting, this.version = t.version, this.eventRender = this.eventRender.bind(this), this.eventPM = this.eventPM.bind(this), this.install = this.install.bind(this), this.uninstall = this.uninstall.bind(this), this.init = this.init.bind(this)
            }
            return PopupPlagin.createIframe = function(t) {
              var e = window.document.createElement("iframe");
              return e.setAttribute("async", "async"), e.setAttribute("scrolling", "yes"), e.frameBorder = "0", i.SetStyle(e.style, {
                display: "none",
                position: "fixed",
                width: "0px",
                height: "0px",
                "z-index": "2000000010",
                margin: "0px",
                padding: "0px"
              }), e
            }, PopupPlagin.prototype.eventRender = function(t) {
              this.data_render_old = t;
              var e = Math.min(this.extwin.windowWidth, 400),
                n = e + t.border;
              this.iframe.position = {
                top: -1,
                left: this.dirRtl ? t.border : this.extwin.windowWidth > n ? this.extwin.windowWidth - n : 0,
                bottom: t.has_comment_element || t.view_position >= 3 ? 0 : t.size.height
              }, this.iframe.size = {
                width: e,
                height: this.win && this.iframe_div.offsetHeight
              }
            }, PopupPlagin.prototype.sendPM = function(t) {
              this.main.PostMessage(r.PM_PLAGIN, {
                name: this.name,
                data: t
              })
            }, PopupPlagin.prototype._showIframeDiv = function(t) {
              var e = this;
              this.iframe_div.className = this.iframe_div.className.split(" ").filter((function(t) {
                return t != e.name_iframe_class_hide
              })).concat(t ? "" : this.name_iframe_class_hide).filter((function(t) {
                return "" != t
              })).join(" ")
            }, PopupPlagin.prototype.eventPM = function(t) {
              var e = this;
              if (t.name == this.name || !t.data) {
                if (null != t.data.render) {
                  this.dirRtl = t.data.dirRtl, "" != t.data.render && (this.iframe_div.innerHTML = t.data.render);
                  for (var n = this.iframe.el.contentDocument.getElementsByClassName("action-plagin"), _loop_1 = function(t) {
                      var i = n[t];
                      i.addEventListener("click", (function(t) {
                        t.stopPropagation(), e.sendPM({
                          action: i.getAttribute("data-action")
                        })
                      }))
                    }, i = 0; i < n.length; i++) _loop_1(i)
                }
                null != t.data.show && this._showIframeDiv(t.data.show), null != t.data.view && (this.iframe.view = t.data.view, this.iframe.view ? this.timer_resize = this.extwin.win.setInterval((function() {
                  e.data_render_old && e.eventRender(e.data_render_old)
                }), 1e3) : this.extwin.win.clearInterval(this.timer_resize)), this.data_render_old && this.eventRender(this.data_render_old)
              }
            }, PopupPlagin.prototype.init = function() {
              this.extwin.win.document.body.appendChild(this.iframe.el), this.iframe.view = !0;
              var t = ["<!doctype html>", "<html>", "<head>", '<meta charset="utf-8">', '<meta name="viewport" content="width=device-width, initial-scale=1">', '<link id="css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">', '<link rel="stylesheet" href="' + this.setting.ServerUrl + "/widget/css/popup.css?v=" + this.version + '">', "</head>", "<body>", '<div class="' + this.name_iframe_class + " " + this.name_iframe_class_hide + '"></div>', "</body>", "</html>"],
                e = this.iframe.el.contentDocument;
              e.open(), e.write(t.join("")), e.close(), this.iframe_div = e.getElementsByClassName(this.name_iframe_class)[0], this.win = new i.ExtWindow(this.iframe.el.contentWindow), this.pm = new o.default(window), this.pm.on(r.PM_PLAGIN, this.eventPM), this.sendPM({
                action: "init"
              })
            }, PopupPlagin.prototype.install = function(t) {
              this.main = t, t.EventInitComplite.on(this.init), t.EventRender.on(this.eventRender), this.iframe = new i.ExtElement(PopupPlagin.createIframe(this.setting.ServerUrl))
            }, PopupPlagin.prototype.uninstall = function(t) {
              this.extwin.win.document.body.removeChild(this.iframe.el), this.pm.off(r.PM_PLAGIN, this.eventPM), t.EventInitComplite.off(this.init), t.EventRender.off(this.eventRender), clearInterval(this.timer_resize)
            }, PopupPlagin
          }();
        e.PopupPlagin = s
      },
      1669: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var i = n(8643),
          o = n(58),
          r = n(7992),
          s = n(8122),
          c = n(772),
          u = function u(t, e, n, l) {
            var f, d = this;
            this.isinit = !1, this.isdomlaod = !1, this.events = ((f = {})[i.VidjetEventName[i.VidjetEventName.domready]] = new i.CEvent, f[i.VidjetEventName[i.VidjetEventName.ready]] = new i.CEvent, f[i.VidjetEventName[i.VidjetEventName.open]] = new i.CEvent, f[i.VidjetEventName[i.VidjetEventName.close]] = new i.CEvent, f), this.init = function() {
              d.isinit || (d.isinit = !0, d.iframe = new o.ExtIframe({
                window: d.window,
                windowName: d.setting.WindowName,
                server: d.server,
                src: "widget/index.html",
                config: d.config
              }), d.pm.on(r.PM_BEGIN_CLOSE, d.close).on(r.PM_BEGIN_OPEN, d.open).on(r.PM_COMPLITE_CLOSE, d._close).on(r.PM_COMPLITE_OPEN, d._open).on(r.PM_INIT, d._initial).on(r.PM_INIT_COMPLITE, d._init_complite).on(r.PM_INIT_PREVIEW, d._init_preview).on(r.PM_VIEW_NAV_FIRST, d._navFirst).on(r.PM_ALERT, d._alert).on(r.PM_FOCUS, d.scroll).on(r.PM_CURSOR, d.cursor).on(r.PM_DOCUMENT_TITLE, d._title), d.iframe.EventOpenButton.on(d._openButton), /inter|comp/.test(document.readyState) ? d._readyDom() : (d.window.addEventListener("load", d._readyDom, !1), d.window.document.addEventListener("DOMContentLoaded", d._readyDom, !1), d.timerdomload = d.window.setTimeout(d._readyDom, 1e4)), d.window.document.addEventListener("visibilitychange", d._eventVisibilitychange, !1))
            }, this.destroy = function() {
              d.isinit && (d.isinit = !1, d.iframe.destroy(), d.pm.off(r.PM_BEGIN_CLOSE, d._close).off(r.PM_BEGIN_OPEN, d._open).off(r.PM_COMPLITE_CLOSE, d.close).off(r.PM_COMPLITE_OPEN, d.open).off(r.PM_INIT, d._initial).off(r.PM_INIT_COMPLITE, d._init_complite).off(r.PM_INIT_PREVIEW, d._init_preview).off(r.PM_VIEW_NAV_FIRST, d._navFirst).off(r.PM_ALERT, d._alert).off(r.PM_FOCUS, d.scroll).off(r.PM_CURSOR, d.cursor).off(r.PM_DOCUMENT_TITLE, d._title), d.iframe.EventOpenButton.off(d._openButton), d.window.removeEventListener("load", d._readyDom, !1), d.window.removeEventListener("DOMContentLoaded", d._readyDom, !1), clearTimeout(d.timerdomload), d.window.document.removeEventListener("visibilitychange", d._eventVisibilitychange, !1))
            }, this._nav = function(t) {
              if (d.iframe) {
                var e = null == t.url ? d.config.url : t.url;
                d.postmessage(r.PM_VIEW_NAV, {
                  site_id: d.setting.SiteId,
                  url: e,
                  title: i.escapeHtml(i.trim(null == t.title ? d.config.title : t.title).substr(0, 255)),
                  hash: null == t.identity ? null : i.MD5(t.identity),
                  identity: t.identity
                })
              }
            }, this._main = function() {
              d.postmessage(r.PM_VIEW_MAIN)
            }, this._auth = function() {
              d.postmessage(r.PM_VIEW_AUTH)
            }, this._windowFocus = !0, this._eventVisibilitychange = function() {
              d._eventWindowTimer(!d.window.document.hidden)
            }, this._eventWindowTimer = function(t) {
              d._windowFocus != t && (d._windowFocus = t, d.postmessage(t ? r.PM_WINDOW_FOCUS : r.PM_WINDOW_BLUR))
            }, this._initial = function(t) {
              d.VERSION = t.VERSION, d.lang(d.config.lang), d.init_data = {
                site_id: d.setting.SiteId,
                uuid: d.server.uuid,
                vidjet_open: d.iframe && d.iframe.Turn(),
                url: d.config.url,
                title: i.escapeHtml(i.trim(d.config.title).substr(0, 255)),
                hash: null == d.config.identity ? null : i.MD5(d.config.identity),
                identity: d.config.identity,
                render_in_content: d.iframe.IsRenderElement(),
                height_auto: d.iframe.IsHeightAuto(),
                server: d.server,
                href: d.setting.Href,
                sso: d.config.sso,
                scroll_border_top: d.config.scroll_border_top,
                scroll_border_bottom: d.config.scroll_border_bottom,
                time_client: d.setting.time,
                theme: d.config.theme,
                comment_show_sort: i.GetCommentShow(d.config.comment_show_sort, d.server.comment_show_sort, {
                  desc: 1,
                  rating: 2
                }),
                comment_show_format: i.GetCommentShow(d.config.comment_show_format, d.server.comment_show_format, {
                  tree: 1
                }),
                hide_all_chats: !!d.config.hide_all_chats,
                page: d.config.page,
                main: d.config.main
              }, d.postmessage(r.PM_INIT, d.init_data), d.events[i.VidjetEventName[i.VidjetEventName.ready]].trigger()
            }, this._alert = function(t) {
              alert(t)
            }, this._title = function(t) {
              d.postmessage(r.PM_DOCUMENT_TITLE, {
                title: document.title
              }), "" != t && document.title != t && (document.title = t)
            }, this._openButton = function() {
              d.open(), d.navfirst()
            }, this._navFirst = function() {
              d.postmessage(r.PM_VIEW_NAV_FIRST, d.init_data)
            }, this._readyDom = function() {
              d.isdomlaod || (d.isdomlaod = !0, d.events[i.VidjetEventName[i.VidjetEventName.domready]].trigger())
            }, this._init_complite = function() {
              d.iframe.InitComplite()
            }, this._init_preview = function() {
              null == d.server.show_popup_mobile && null == d.server.show_popup_desktop || d.iframe.AddPlagin(new c.PopupPlagin({
                setting: d.setting,
                config: d.config,
                window: d.window,
                version: d.VERSION,
                isRenderElement: d.iframe.IsRenderElement()
              })), d.iframe.onRenderFirst(), d.postmessage(r.PM_INIT_PREVIEW)
            }, this.postmessage = function(t, e) {
              void 0 === e && (e = null), d.iframe.PostMessage(t, e)
            }, this.on = function(t, e) {
              d.events[t] && d.events[t].on(e)
            }, this.off = function(t, e) {
              d.events[t] && d.events[t].off(e)
            }, this.ready = function() {
              return d.isinit
            }, this._open = function() {
              d.iframe.TurnOpen(), d.events[i.VidjetEventName[i.VidjetEventName.open]].trigger()
            }, this._close = function() {
              d.iframe.TurnClose(), d.events[i.VidjetEventName[i.VidjetEventName.close]].trigger()
            }, this.open = function() {
              d.iframe.PostMessage(r.PM_BEGIN_OPEN)
            }, this.close = function() {
              d.iframe.PostMessage(r.PM_BEGIN_CLOSE)
            }, this.isopen = function() {
              return d.iframe.Turn()
            }, this.main = function() {
              d._main()
            }, this.nav = function(t) {
              d._nav(t)
            }, this.navfirst = function() {
              d._navFirst()
            }, this.auth = function() {
              d._auth()
            }, this.scroll = function() {
              d.iframe.Scroll()
            }, this.cursor = function() {
              d.iframe.Cursor()
            }, this.lang = function(t) {
              d.postmessage(r.PM_LANG, {
                lang: t
              })
            }, this.log = function(t) {
              d.postmessage(r.PM_LOG, {
                value: t
              })
            }, this.page = function(t) {
              if (d.isinit) {
                var e = "#tc-",
                  n = t.indexOf(e);
                if (n >= 0) {
                  var i = t.substr(n + e.length);
                  d.postmessage(r.PM_VIEW_NAV_FIRST, Object.assign({}, d.init_data, {
                    page: i
                  }))
                }
              }
            }, this.setting = t, this.window = l, this.config = e, this.server = n, this.pm = new s.default(l), this.time = (new Date).getTime().toString()
          };
        e.default = u
      },
      4609: function() {
        self.fetch || (self.fetch = function(t, e) {
          return e = e || {}, new Promise((function(n, i) {
            var o = new XMLHttpRequest,
              r = [],
              s = [],
              c = {},
              a = function() {
                return {
                  ok: 2 == (o.status / 100 | 0),
                  statusText: o.statusText,
                  status: o.status,
                  url: o.responseURL,
                  text: function() {
                    return Promise.resolve(o.responseText)
                  },
                  json: function() {
                    return Promise.resolve(o.responseText).then(JSON.parse)
                  },
                  blob: function() {
                    return Promise.resolve(new Blob([o.response]))
                  },
                  clone: a,
                  headers: {
                    keys: function() {
                      return r
                    },
                    entries: function() {
                      return s
                    },
                    get: function(t) {
                      return c[t.toLowerCase()]
                    },
                    has: function(t) {
                      return t.toLowerCase() in c
                    }
                  }
                }
              };
            for (var u in o.open(e.method || "get", t, !0), o.onload = function() {
                o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(t, e, n) {
                  r.push(e = e.toLowerCase()), s.push([e, n]), c[e] = c[e] ? c[e] + "," + n : n
                })), n(a())
              }, o.onerror = i, o.withCredentials = "include" == e.credentials, e.headers) o.setRequestHeader(u, e.headers[u]);
            o.send(e.body || null)
          }))
        })
      },
      7992: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, {
          PM_ALERT: function() {
            return i
          },
          PM_LOG: function() {
            return o
          },
          PM_PLAGIN: function() {
            return r
          },
          PM_INIT: function() {
            return s
          },
          PM_INIT_PREVIEW: function() {
            return c
          },
          PM_INIT_COMPLITE: function() {
            return u
          },
          PM_BEGIN_OPEN: function() {
            return l
          },
          PM_BEGIN_CLOSE: function() {
            return f
          },
          PM_COMPLITE_OPEN: function() {
            return d
          },
          PM_COMPLITE_CLOSE: function() {
            return h
          },
          PM_FOCUS: function() {
            return m
          },
          PM_RENDER: function() {
            return _
          },
          PM_RESIZE: function() {
            return p
          },
          PM_CURSOR: function() {
            return g
          },
          PM_LANG: function() {
            return v
          },
          PM_VIEW_NAV_FIRST: function() {
            return w
          },
          PM_VIEW_NAV: function() {
            return E
          },
          PM_VIEW_MAIN: function() {
            return y
          },
          PM_VIEW_AUTH: function() {
            return b
          },
          PM_VIEW_HEIGHT: function() {
            return P
          },
          PM_WINDOW_FOCUS: function() {
            return x
          },
          PM_WINDOW_BLUR: function() {
            return M
          },
          PM_WINDOW_SCROLL: function() {
            return I
          },
          PM_WINDOW_SCROLL_BEGIN: function() {
            return O
          },
          PM_DOCUMENT_TITLE: function() {
            return C
          },
          PM_FRAME_INIT: function() {
            return S
          },
          PM_FRAME_RESIZE: function() {
            return N
          },
          PM_FRAME_HASHCHANGE: function() {
            return T
          },
          PM_DRAG_ENTER: function() {
            return R
          },
          PM_DRAG_LEAVE: function() {
            return L
          }
        });
        var i = "PM_ALERT",
          o = "PM_LOG",
          r = "PM_PLAGIN",
          s = "PM_INIT",
          c = "PM_INIT_PREVIEW",
          u = "PM_INIT_COMPLITE",
          l = "PM_BEGIN_OPEN",
          f = "PM_BEGIN_CLOSE",
          d = "PM_COMPLITE_OPEN",
          h = "PM_COMPLITE_CLOSE",
          m = "PM_FOCUS",
          _ = "PM_RENDER",
          p = "PM_RESIZE",
          g = "PM_CURSOR",
          v = "PM_LANG",
          w = "PM_VIEW_NAV_FIRST",
          E = "PM_VIEW_NAV",
          y = "PM_VIEW_MAIN",
          b = "PM_VIEW_AUTH",
          P = "PM_VIEW_HEIGHT",
          x = "PM_WINDOW_FOCUS",
          M = "PM_WINDOW_BLUR",
          I = "PM_WINDOW_SCROLL",
          O = "PM_WINDOW_SCROLL_BEGIN",
          C = "PM_DOCUMENT_TITLE",
          S = "PM_FRAME_INIT",
          N = "PM_FRAME_RESIZE",
          T = "PM_FRAME_HASHCHANGE",
          R = "PM_DRAG_ENTER",
          L = "PM_DRAG_LEAVE"
      }
    },
    e = {};

  function __webpack_require__(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var o = e[n] = {
      exports: {}
    };
    return t[n].call(o.exports, o, o.exports, __webpack_require__), o.exports
  }
  __webpack_require__.d = function(t, e) {
    for (var n in e) __webpack_require__.o(e, n) && !__webpack_require__.o(t, n) && Object.defineProperty(t, n, {
      enumerable: !0,
      get: e[n]
    })
  }, __webpack_require__.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, __webpack_require__.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  };
  __webpack_require__(4318)
}();