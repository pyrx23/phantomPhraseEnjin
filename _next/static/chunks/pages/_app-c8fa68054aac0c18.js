(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    2107: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return ot;
        },
      });
      var r = (function () {
          function t(t) {
            var e = this;
            (this._insertTag = function (t) {
              var n;
              (n =
                0 === e.tags.length
                  ? e.insertionPoint
                    ? e.insertionPoint.nextSibling
                    : e.prepend
                    ? e.container.firstChild
                    : e.before
                  : e.tags[e.tags.length - 1].nextSibling),
                e.container.insertBefore(t, n),
                e.tags.push(t);
            }),
              (this.isSpeedy = void 0 === t.speedy || t.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = t.nonce),
              (this.key = t.key),
              (this.container = t.container),
              (this.prepend = t.prepend),
              (this.insertionPoint = t.insertionPoint),
              (this.before = null);
          }
          var e = t.prototype;
          return (
            (e.hydrate = function (t) {
              t.forEach(this._insertTag);
            }),
            (e.insert = function (t) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                this._insertTag(
                  (function (t) {
                    var e = document.createElement("style");
                    return (
                      e.setAttribute("data-emotion", t.key),
                      void 0 !== t.nonce && e.setAttribute("nonce", t.nonce),
                      e.appendChild(document.createTextNode("")),
                      e.setAttribute("data-s", ""),
                      e
                    );
                  })(this)
                );
              var e = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (t) {
                  if (t.sheet) return t.sheet;
                  for (var e = 0; e < document.styleSheets.length; e++)
                    if (document.styleSheets[e].ownerNode === t)
                      return document.styleSheets[e];
                })(e);
                try {
                  n.insertRule(t, n.cssRules.length);
                } catch (r) {
                  0;
                }
              } else e.appendChild(document.createTextNode(t));
              this.ctr++;
            }),
            (e.flush = function () {
              this.tags.forEach(function (t) {
                return t.parentNode && t.parentNode.removeChild(t);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            t
          );
        })(),
        o = Math.abs,
        i = String.fromCharCode,
        a = Object.assign;
      function s(t) {
        return t.trim();
      }
      function c(t, e, n) {
        return t.replace(e, n);
      }
      function u(t, e) {
        return t.indexOf(e);
      }
      function l(t, e) {
        return 0 | t.charCodeAt(e);
      }
      function d(t, e, n) {
        return t.slice(e, n);
      }
      function f(t) {
        return t.length;
      }
      function p(t) {
        return t.length;
      }
      function h(t, e) {
        return e.push(t), t;
      }
      var v = 1,
        m = 1,
        g = 0,
        y = 0,
        b = 0,
        x = "";
      function w(t, e, n, r, o, i, a) {
        return {
          value: t,
          root: e,
          parent: n,
          type: r,
          props: o,
          children: i,
          line: v,
          column: m,
          length: a,
          return: "",
        };
      }
      function C(t, e) {
        return a(
          w("", null, null, "", null, null, 0),
          t,
          { length: -t.length },
          e
        );
      }
      function k() {
        return (b = y > 0 ? l(x, --y) : 0), m--, 10 === b && ((m = 1), v--), b;
      }
      function M() {
        return (b = y < g ? l(x, y++) : 0), m++, 10 === b && ((m = 1), v++), b;
      }
      function E() {
        return l(x, y);
      }
      function S() {
        return y;
      }
      function L(t, e) {
        return d(x, t, e);
      }
      function A(t) {
        switch (t) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function B(t) {
        return (v = m = 1), (g = f((x = t))), (y = 0), [];
      }
      function P(t) {
        return (x = ""), t;
      }
      function Z(t) {
        return s(L(y - 1, V(91 === t ? t + 2 : 40 === t ? t + 1 : t)));
      }
      function T(t) {
        for (; (b = E()) && b < 33; ) M();
        return A(t) > 2 || A(b) > 3 ? "" : " ";
      }
      function O(t, e) {
        for (
          ;
          --e &&
          M() &&
          !(b < 48 || b > 102 || (b > 57 && b < 65) || (b > 70 && b < 97));

        );
        return L(t, S() + (e < 6 && 32 == E() && 32 == M()));
      }
      function V(t) {
        for (; M(); )
          switch (b) {
            case t:
              return y;
            case 34:
            case 39:
              34 !== t && 39 !== t && V(b);
              break;
            case 40:
              41 === t && V(t);
              break;
            case 92:
              M();
          }
        return y;
      }
      function R(t, e) {
        for (; M() && t + b !== 57 && (t + b !== 84 || 47 !== E()); );
        return "/*" + L(e, y - 1) + "*" + i(47 === t ? t : M());
      }
      function N(t) {
        for (; !A(E()); ) M();
        return L(t, y);
      }
      var z = "-ms-",
        _ = "-moz-",
        I = "-webkit-",
        j = "comm",
        F = "rule",
        H = "decl",
        $ = "@keyframes";
      function D(t, e) {
        for (var n = "", r = p(t), o = 0; o < r; o++)
          n += e(t[o], o, t, e) || "";
        return n;
      }
      function W(t, e, n, r) {
        switch (t.type) {
          case "@layer":
            if (t.children.length) break;
          case "@import":
          case H:
            return (t.return = t.return || t.value);
          case j:
            return "";
          case $:
            return (t.return = t.value + "{" + D(t.children, r) + "}");
          case F:
            t.value = t.props.join(",");
        }
        return f((n = D(t.children, r)))
          ? (t.return = t.value + "{" + n + "}")
          : "";
      }
      function U(t) {
        return P(X("", null, null, null, [""], (t = B(t)), 0, [0], t));
      }
      function X(t, e, n, r, o, a, s, d, p) {
        for (
          var v = 0,
            m = 0,
            g = s,
            y = 0,
            b = 0,
            x = 0,
            w = 1,
            C = 1,
            L = 1,
            A = 0,
            B = "",
            P = o,
            V = a,
            z = r,
            _ = B;
          C;

        )
          switch (((x = A), (A = M()))) {
            case 40:
              if (108 != x && 58 == l(_, g - 1)) {
                -1 != u((_ += c(Z(A), "&", "&\f")), "&\f") && (L = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              _ += Z(A);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              _ += T(x);
              break;
            case 92:
              _ += O(S() - 1, 7);
              continue;
            case 47:
              switch (E()) {
                case 42:
                case 47:
                  h(Y(R(M(), S()), e, n), p);
                  break;
                default:
                  _ += "/";
              }
              break;
            case 123 * w:
              d[v++] = f(_) * L;
            case 125 * w:
            case 59:
            case 0:
              switch (A) {
                case 0:
                case 125:
                  C = 0;
                case 59 + m:
                  -1 == L && (_ = c(_, /\f/g, "")),
                    b > 0 &&
                      f(_) - g &&
                      h(
                        b > 32
                          ? K(_ + ";", r, n, g - 1)
                          : K(c(_, " ", "") + ";", r, n, g - 2),
                        p
                      );
                  break;
                case 59:
                  _ += ";";
                default:
                  if (
                    (h(
                      (z = q(_, e, n, v, m, o, d, B, (P = []), (V = []), g)),
                      a
                    ),
                    123 === A)
                  )
                    if (0 === m) X(_, e, z, z, P, a, g, d, V);
                    else
                      switch (99 === y && 110 === l(_, 3) ? 100 : y) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          X(
                            t,
                            z,
                            z,
                            r &&
                              h(q(t, z, z, 0, 0, o, d, B, o, (P = []), g), V),
                            o,
                            V,
                            g,
                            d,
                            r ? P : V
                          );
                          break;
                        default:
                          X(_, z, z, z, [""], V, 0, d, V);
                      }
              }
              (v = m = b = 0), (w = L = 1), (B = _ = ""), (g = s);
              break;
            case 58:
              (g = 1 + f(_)), (b = x);
            default:
              if (w < 1)
                if (123 == A) --w;
                else if (125 == A && 0 == w++ && 125 == k()) continue;
              switch (((_ += i(A)), A * w)) {
                case 38:
                  L = m > 0 ? 1 : ((_ += "\f"), -1);
                  break;
                case 44:
                  (d[v++] = (f(_) - 1) * L), (L = 1);
                  break;
                case 64:
                  45 === E() && (_ += Z(M())),
                    (y = E()),
                    (m = g = f((B = _ += N(S())))),
                    A++;
                  break;
                case 45:
                  45 === x && 2 == f(_) && (w = 0);
              }
          }
        return a;
      }
      function q(t, e, n, r, i, a, u, l, f, h, v) {
        for (
          var m = i - 1, g = 0 === i ? a : [""], y = p(g), b = 0, x = 0, C = 0;
          b < r;
          ++b
        )
          for (
            var k = 0, M = d(t, m + 1, (m = o((x = u[b])))), E = t;
            k < y;
            ++k
          )
            (E = s(x > 0 ? g[k] + " " + M : c(M, /&\f/g, g[k]))) &&
              (f[C++] = E);
        return w(t, e, n, 0 === i ? F : l, f, h, v);
      }
      function Y(t, e, n) {
        return w(t, e, n, j, i(b), d(t, 2, -2), 0);
      }
      function K(t, e, n, r) {
        return w(t, e, n, H, d(t, 0, r), d(t, r + 1, -1), r);
      }
      var G = function (t, e, n) {
          for (
            var r = 0, o = 0;
            (r = o), (o = E()), 38 === r && 12 === o && (e[n] = 1), !A(o);

          )
            M();
          return L(t, y);
        },
        Q = function (t, e) {
          return P(
            (function (t, e) {
              var n = -1,
                r = 44;
              do {
                switch (A(r)) {
                  case 0:
                    38 === r && 12 === E() && (e[n] = 1),
                      (t[n] += G(y - 1, e, n));
                    break;
                  case 2:
                    t[n] += Z(r);
                    break;
                  case 4:
                    if (44 === r) {
                      (t[++n] = 58 === E() ? "&\f" : ""), (e[n] = t[n].length);
                      break;
                    }
                  default:
                    t[n] += i(r);
                }
              } while ((r = M()));
              return t;
            })(B(t), e)
          );
        },
        J = new WeakMap(),
        tt = function (t) {
          if ("rule" === t.type && t.parent && !(t.length < 1)) {
            for (
              var e = t.value,
                n = t.parent,
                r = t.column === n.column && t.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== t.props.length || 58 === e.charCodeAt(0) || J.get(n)) &&
              !r
            ) {
              J.set(t, !0);
              for (
                var o = [], i = Q(e, o), a = n.props, s = 0, c = 0;
                s < i.length;
                s++
              )
                for (var u = 0; u < a.length; u++, c++)
                  t.props[c] = o[s]
                    ? i[s].replace(/&\f/g, a[u])
                    : a[u] + " " + i[s];
            }
          }
        },
        et = function (t) {
          if ("decl" === t.type) {
            var e = t.value;
            108 === e.charCodeAt(0) &&
              98 === e.charCodeAt(2) &&
              ((t.return = ""), (t.value = ""));
          }
        };
      function nt(t, e) {
        switch (
          (function (t, e) {
            return 45 ^ l(t, 0)
              ? (((((((e << 2) ^ l(t, 0)) << 2) ^ l(t, 1)) << 2) ^ l(t, 2)) <<
                  2) ^
                  l(t, 3)
              : 0;
          })(t, e)
        ) {
          case 5103:
            return "-webkit-print-" + t + t;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return I + t + t;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return I + t + _ + t + z + t + t;
          case 6828:
          case 4268:
            return I + t + z + t + t;
          case 6165:
            return I + t + z + "flex-" + t + t;
          case 5187:
            return (
              I +
              t +
              c(t, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") +
              t
            );
          case 5443:
            return I + t + z + "flex-item-" + c(t, /flex-|-self/, "") + t;
          case 4675:
            return (
              I +
              t +
              z +
              "flex-line-pack" +
              c(t, /align-content|flex-|-self/, "") +
              t
            );
          case 5548:
            return I + t + z + c(t, "shrink", "negative") + t;
          case 5292:
            return I + t + z + c(t, "basis", "preferred-size") + t;
          case 6060:
            return (
              "-webkit-box-" +
              c(t, "-grow", "") +
              I +
              t +
              z +
              c(t, "grow", "positive") +
              t
            );
          case 4554:
            return I + c(t, /([^-])(transform)/g, "$1-webkit-$2") + t;
          case 6187:
            return (
              c(
                c(
                  c(t, /(zoom-|grab)/, "-webkit-$1"),
                  /(image-set)/,
                  "-webkit-$1"
                ),
                t,
                ""
              ) + t
            );
          case 5495:
          case 3959:
            return c(t, /(image-set\([^]*)/, "-webkit-$1$`$1");
          case 4968:
            return (
              c(
                c(
                  t,
                  /(.+:)(flex-)?(.*)/,
                  "-webkit-box-pack:$3-ms-flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              I +
              t +
              t
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return c(t, /(.+)-inline(.+)/, "-webkit-$1$2") + t;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (f(t) - 1 - e > 6)
              switch (l(t, e + 1)) {
                case 109:
                  if (45 !== l(t, e + 4)) break;
                case 102:
                  return (
                    c(
                      t,
                      /(.+:)(.+)-([^]+)/,
                      "$1-webkit-$2-$3$1-moz-" +
                        (108 == l(t, e + 3) ? "$3" : "$2-$3")
                    ) + t
                  );
                case 115:
                  return ~u(t, "stretch")
                    ? nt(c(t, "stretch", "fill-available"), e) + t
                    : t;
              }
            break;
          case 4949:
            if (115 !== l(t, e + 1)) break;
          case 6444:
            switch (l(t, f(t) - 3 - (~u(t, "!important") && 10))) {
              case 107:
                return c(t, ":", ":-webkit-") + t;
              case 101:
                return (
                  c(
                    t,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1-webkit-" +
                      (45 === l(t, 14) ? "inline-" : "") +
                      "box$3$1" +
                      "-webkit-$2$3$1" +
                      "-ms-$2box$3"
                  ) + t
                );
            }
            break;
          case 5936:
            switch (l(t, e + 11)) {
              case 114:
                return I + t + z + c(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
              case 108:
                return I + t + z + c(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
              case 45:
                return I + t + z + c(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
            }
            return I + t + z + t + t;
        }
        return t;
      }
      var rt = [
          function (t, e, n, r) {
            if (t.length > -1 && !t.return)
              switch (t.type) {
                case H:
                  t.return = nt(t.value, t.length);
                  break;
                case $:
                  return D([C(t, { value: c(t.value, "@", "@-webkit-") })], r);
                case F:
                  if (t.length)
                    return (function (t, e) {
                      return t.map(e).join("");
                    })(t.props, function (e) {
                      switch (
                        (function (t, e) {
                          return (t = e.exec(t)) ? t[0] : t;
                        })(e, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ":read-only":
                        case ":read-write":
                          return D(
                            [
                              C(t, {
                                props: [c(e, /:(read-\w+)/, ":-moz-$1")],
                              }),
                            ],
                            r
                          );
                        case "::placeholder":
                          return D(
                            [
                              C(t, {
                                props: [
                                  c(e, /:(plac\w+)/, ":-webkit-input-$1"),
                                ],
                              }),
                              C(t, { props: [c(e, /:(plac\w+)/, ":-moz-$1")] }),
                              C(t, {
                                props: [c(e, /:(plac\w+)/, "-ms-input-$1")],
                              }),
                            ],
                            r
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        ot = function (t) {
          var e = t.key;
          if ("css" === e) {
            var n = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(n, function (t) {
              -1 !== t.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(t), t.setAttribute("data-s", ""));
            });
          }
          var o = t.stylisPlugins || rt;
          var i,
            a,
            s = {},
            c = [];
          (i = t.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + e + ' "]'),
              function (t) {
                for (
                  var e = t.getAttribute("data-emotion").split(" "), n = 1;
                  n < e.length;
                  n++
                )
                  s[e[n]] = !0;
                c.push(t);
              }
            );
          var u,
            l,
            d = [
              W,
              ((l = function (t) {
                u.insert(t);
              }),
              function (t) {
                t.root || ((t = t.return) && l(t));
              }),
            ],
            f = (function (t) {
              var e = p(t);
              return function (n, r, o, i) {
                for (var a = "", s = 0; s < e; s++) a += t[s](n, r, o, i) || "";
                return a;
              };
            })([tt, et].concat(o, d));
          a = function (t, e, n, r) {
            (u = n),
              D(U(t ? t + "{" + e.styles + "}" : e.styles), f),
              r && (h.inserted[e.name] = !0);
          };
          var h = {
            key: e,
            sheet: new r({
              key: e,
              container: i,
              nonce: t.nonce,
              speedy: t.speedy,
              prepend: t.prepend,
              insertionPoint: t.insertionPoint,
            }),
            nonce: t.nonce,
            inserted: s,
            registered: {},
            insert: a,
          };
          return h.sheet.hydrate(c), h;
        };
    },
    99362: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = (function (t) {
          var e = {};
          return function (n) {
            return void 0 === e[n] && (e[n] = t(n)), e[n];
          };
        })(function (t) {
          return (
            r.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              t.charCodeAt(2) < 91)
          );
        });
    },
    86894: function (t, e, n) {
      "use strict";
      function r(t) {
        var e = Object.create(null);
        return function (n) {
          return void 0 === e[n] && (e[n] = t(n)), e[n];
        };
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    79396: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return m;
        },
        T: function () {
          return f;
        },
        c: function () {
          return h;
        },
        h: function () {
          return u;
        },
        i: function () {
          return c;
        },
        w: function () {
          return d;
        },
      });
      var r = n(2784),
        o = n(2107),
        i = n(82792),
        a = n(56359),
        s = n(82668),
        c = !0,
        u = {}.hasOwnProperty,
        l = r.createContext(
          "undefined" !== typeof HTMLElement ? (0, o.Z)({ key: "css" }) : null
        );
      l.Provider;
      var d = function (t) {
        return (0, r.forwardRef)(function (e, n) {
          var o = (0, r.useContext)(l);
          return t(e, o, n);
        });
      };
      c ||
        (d = function (t) {
          return function (e) {
            var n = (0, r.useContext)(l);
            return null === n
              ? ((n = (0, o.Z)({ key: "css" })),
                r.createElement(l.Provider, { value: n }, t(e, n)))
              : t(e, n);
          };
        });
      var f = r.createContext({});
      var p = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        h = function (t, e) {
          var n = {};
          for (var r in e) u.call(e, r) && (n[r] = e[r]);
          return (n[p] = t), n;
        },
        v = function (t) {
          var e = t.cache,
            n = t.serialized,
            r = t.isStringTag;
          return (
            (0, i.hC)(e, n, r),
            (0, s.L)(function () {
              return (0, i.My)(e, n, r);
            }),
            null
          );
        };
      var m = d(function (t, e, n) {
        var o = t.css;
        "string" === typeof o &&
          void 0 !== e.registered[o] &&
          (o = e.registered[o]);
        var s = t[p],
          c = [o],
          l = "";
        "string" === typeof t.className
          ? (l = (0, i.fp)(e.registered, c, t.className))
          : null != t.className && (l = t.className + " ");
        var d = (0, a.O)(c, void 0, r.useContext(f));
        l += e.key + "-" + d.name;
        var h = {};
        for (var m in t)
          u.call(t, m) && "css" !== m && m !== p && (h[m] = t[m]);
        return (
          (h.ref = n),
          (h.className = l),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(v, {
              cache: e,
              serialized: d,
              isStringTag: "string" === typeof s,
            }),
            r.createElement(s, h)
          )
        );
      });
    },
    28165: function (t, e, n) {
      "use strict";
      n.d(e, {
        az: function () {
          return c;
        },
        iv: function () {
          return l;
        },
        xB: function () {
          return u;
        },
      });
      var r = n(79396),
        o = n(2784),
        i = n(82792),
        a = n(82668),
        s = n(56359),
        c =
          (n(2107),
          n(73463),
          function (t, e) {
            var n = arguments;
            if (null == e || !r.h.call(e, "css"))
              return o.createElement.apply(void 0, n);
            var i = n.length,
              a = new Array(i);
            (a[0] = r.E), (a[1] = (0, r.c)(t, e));
            for (var s = 2; s < i; s++) a[s] = n[s];
            return o.createElement.apply(null, a);
          }),
        u = (0, r.w)(function (t, e) {
          var n = t.styles,
            c = (0, s.O)([n], void 0, o.useContext(r.T));
          if (!r.i) {
            for (var u, l = c.name, d = c.styles, f = c.next; void 0 !== f; )
              (l += " " + f.name), (d += f.styles), (f = f.next);
            var p = !0 === e.compat,
              h = e.insert("", { name: l, styles: d }, e.sheet, p);
            return p
              ? null
              : o.createElement(
                  "style",
                  (((u = {})["data-emotion"] = e.key + "-global " + l),
                  (u.dangerouslySetInnerHTML = { __html: h }),
                  (u.nonce = e.sheet.nonce),
                  u)
                );
          }
          var v = o.useRef();
          return (
            (0, a.j)(
              function () {
                var t = e.key + "-global",
                  n = new e.sheet.constructor({
                    key: t,
                    nonce: e.sheet.nonce,
                    container: e.sheet.container,
                    speedy: e.sheet.isSpeedy,
                  }),
                  r = !1,
                  o = document.querySelector(
                    'style[data-emotion="' + t + " " + c.name + '"]'
                  );
                return (
                  e.sheet.tags.length && (n.before = e.sheet.tags[0]),
                  null !== o &&
                    ((r = !0),
                    o.setAttribute("data-emotion", t),
                    n.hydrate([o])),
                  (v.current = [n, r]),
                  function () {
                    n.flush();
                  }
                );
              },
              [e]
            ),
            (0, a.j)(
              function () {
                var t = v.current,
                  n = t[0];
                if (t[1]) t[1] = !1;
                else {
                  if (
                    (void 0 !== c.next && (0, i.My)(e, c.next, !0),
                    n.tags.length)
                  ) {
                    var r = n.tags[n.tags.length - 1].nextElementSibling;
                    (n.before = r), n.flush();
                  }
                  e.insert("", c, n, !1);
                }
              },
              [e, c.name]
            ),
            null
          );
        });
      function l() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return (0, s.O)(e);
      }
    },
    52903: function (t, e, n) {
      "use strict";
      n.d(e, {
        BX: function () {
          return s;
        },
        HY: function () {
          return i;
        },
        tZ: function () {
          return a;
        },
      });
      var r = n(52322),
        o = n(79396),
        i = (n(2784), n(2107), n(73463), n(56359), n(82668), r.Fragment);
      function a(t, e, n) {
        return o.h.call(e, "css")
          ? r.jsx(o.E, (0, o.c)(t, e), n)
          : r.jsx(t, e, n);
      }
      function s(t, e, n) {
        return o.h.call(e, "css")
          ? r.jsxs(o.E, (0, o.c)(t, e), n)
          : r.jsxs(t, e, n);
      }
    },
    56359: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return h;
        },
      });
      var r = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        o = n(86894),
        i = /[A-Z]|^ms/g,
        a = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        s = function (t) {
          return 45 === t.charCodeAt(1);
        },
        c = function (t) {
          return null != t && "boolean" !== typeof t;
        },
        u = (0, o.Z)(function (t) {
          return s(t) ? t : t.replace(i, "-$&").toLowerCase();
        }),
        l = function (t, e) {
          switch (t) {
            case "animation":
            case "animationName":
              if ("string" === typeof e)
                return e.replace(a, function (t, e, n) {
                  return (f = { name: e, styles: n, next: f }), e;
                });
          }
          return 1 === r[t] || s(t) || "number" !== typeof e || 0 === e
            ? e
            : e + "px";
        };
      function d(t, e, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (f = { name: n.name, styles: n.styles, next: f }), n.name;
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; )
                  (f = { name: r.name, styles: r.styles, next: f }),
                    (r = r.next);
              return n.styles + ";";
            }
            return (function (t, e, n) {
              var r = "";
              if (Array.isArray(n))
                for (var o = 0; o < n.length; o++) r += d(t, e, n[o]) + ";";
              else
                for (var i in n) {
                  var a = n[i];
                  if ("object" !== typeof a)
                    null != e && void 0 !== e[a]
                      ? (r += i + "{" + e[a] + "}")
                      : c(a) && (r += u(i) + ":" + l(i, a) + ";");
                  else if (
                    !Array.isArray(a) ||
                    "string" !== typeof a[0] ||
                    (null != e && void 0 !== e[a[0]])
                  ) {
                    var s = d(t, e, a);
                    switch (i) {
                      case "animation":
                      case "animationName":
                        r += u(i) + ":" + s + ";";
                        break;
                      default:
                        r += i + "{" + s + "}";
                    }
                  } else
                    for (var f = 0; f < a.length; f++)
                      c(a[f]) && (r += u(i) + ":" + l(i, a[f]) + ";");
                }
              return r;
            })(t, e, n);
          case "function":
            if (void 0 !== t) {
              var o = f,
                i = n(t);
              return (f = o), d(t, e, i);
            }
        }
        if (null == e) return n;
        var a = e[n];
        return void 0 !== a ? a : n;
      }
      var f,
        p = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
      var h = function (t, e, n) {
        if (
          1 === t.length &&
          "object" === typeof t[0] &&
          null !== t[0] &&
          void 0 !== t[0].styles
        )
          return t[0];
        var r = !0,
          o = "";
        f = void 0;
        var i = t[0];
        null == i || void 0 === i.raw
          ? ((r = !1), (o += d(n, e, i)))
          : (o += i[0]);
        for (var a = 1; a < t.length; a++)
          (o += d(n, e, t[a])), r && (o += i[a]);
        p.lastIndex = 0;
        for (var s, c = ""; null !== (s = p.exec(o)); ) c += "-" + s[1];
        var u =
          (function (t) {
            for (var e, n = 0, r = 0, o = t.length; o >= 4; ++r, o -= 4)
              (e =
                1540483477 *
                  (65535 &
                    (e =
                      (255 & t.charCodeAt(r)) |
                      ((255 & t.charCodeAt(++r)) << 8) |
                      ((255 & t.charCodeAt(++r)) << 16) |
                      ((255 & t.charCodeAt(++r)) << 24))) +
                ((59797 * (e >>> 16)) << 16)),
                (n =
                  (1540483477 * (65535 & (e ^= e >>> 24)) +
                    ((59797 * (e >>> 16)) << 16)) ^
                  (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
            switch (o) {
              case 3:
                n ^= (255 & t.charCodeAt(r + 2)) << 16;
              case 2:
                n ^= (255 & t.charCodeAt(r + 1)) << 8;
              case 1:
                n =
                  1540483477 * (65535 & (n ^= 255 & t.charCodeAt(r))) +
                  ((59797 * (n >>> 16)) << 16);
            }
            return (
              ((n =
                1540483477 * (65535 & (n ^= n >>> 13)) +
                ((59797 * (n >>> 16)) << 16)) ^
                (n >>> 15)) >>>
              0
            ).toString(36);
          })(o) + c;
        return { name: u, styles: o, next: f };
      };
    },
    11198: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return g;
        },
      });
      var r = n(7896),
        o = n(2784),
        i = n(86894),
        a =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        s = (0, i.Z)(function (t) {
          return (
            a.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              t.charCodeAt(2) < 91)
          );
        }),
        c = n(79396),
        u = n(82792),
        l = n(56359),
        d = n(82668),
        f = s,
        p = function (t) {
          return "theme" !== t;
        },
        h = function (t) {
          return "string" === typeof t && t.charCodeAt(0) > 96 ? f : p;
        },
        v = function (t, e, n) {
          var r;
          if (e) {
            var o = e.shouldForwardProp;
            r =
              t.__emotion_forwardProp && o
                ? function (e) {
                    return t.__emotion_forwardProp(e) && o(e);
                  }
                : o;
          }
          return (
            "function" !== typeof r && n && (r = t.__emotion_forwardProp), r
          );
        },
        m = function (t) {
          var e = t.cache,
            n = t.serialized,
            r = t.isStringTag;
          return (
            (0, u.hC)(e, n, r),
            (0, d.L)(function () {
              return (0, u.My)(e, n, r);
            }),
            null
          );
        },
        g = function t(e, n) {
          var i,
            a,
            s = e.__emotion_real === e,
            d = (s && e.__emotion_base) || e;
          void 0 !== n && ((i = n.label), (a = n.target));
          var f = v(e, n, s),
            p = f || h(d),
            g = !p("as");
          return function () {
            var y = arguments,
              b =
                s && void 0 !== e.__emotion_styles
                  ? e.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== i && b.push("label:" + i + ";"),
              null == y[0] || void 0 === y[0].raw)
            )
              b.push.apply(b, y);
            else {
              0, b.push(y[0][0]);
              for (var x = y.length, w = 1; w < x; w++) b.push(y[w], y[0][w]);
            }
            var C = (0, c.w)(function (t, e, n) {
              var r = (g && t.as) || d,
                i = "",
                s = [],
                v = t;
              if (null == t.theme) {
                for (var y in ((v = {}), t)) v[y] = t[y];
                v.theme = o.useContext(c.T);
              }
              "string" === typeof t.className
                ? (i = (0, u.fp)(e.registered, s, t.className))
                : null != t.className && (i = t.className + " ");
              var x = (0, l.O)(b.concat(s), e.registered, v);
              (i += e.key + "-" + x.name), void 0 !== a && (i += " " + a);
              var w = g && void 0 === f ? h(r) : p,
                C = {};
              for (var k in t) (g && "as" === k) || (w(k) && (C[k] = t[k]));
              return (
                (C.className = i),
                (C.ref = n),
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(m, {
                    cache: e,
                    serialized: x,
                    isStringTag: "string" === typeof r,
                  }),
                  o.createElement(r, C)
                )
              );
            });
            return (
              (C.displayName =
                void 0 !== i
                  ? i
                  : "Styled(" +
                    ("string" === typeof d
                      ? d
                      : d.displayName || d.name || "Component") +
                    ")"),
              (C.defaultProps = e.defaultProps),
              (C.__emotion_real = C),
              (C.__emotion_base = d),
              (C.__emotion_styles = b),
              (C.__emotion_forwardProp = f),
              Object.defineProperty(C, "toString", {
                value: function () {
                  return "." + a;
                },
              }),
              (C.withComponent = function (e, o) {
                return t(
                  e,
                  (0, r.Z)({}, n, o, { shouldForwardProp: v(C, o, !0) })
                ).apply(void 0, b);
              }),
              C
            );
          };
        }.bind();
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (t) {
        g[t] = g(t);
      });
    },
    82668: function (t, e, n) {
      "use strict";
      var r;
      n.d(e, {
        L: function () {
          return a;
        },
        j: function () {
          return s;
        },
      });
      var o = n(2784),
        i =
          !!(r || (r = n.t(o, 2))).useInsertionEffect &&
          (r || (r = n.t(o, 2))).useInsertionEffect,
        a =
          i ||
          function (t) {
            return t();
          },
        s = i || o.useLayoutEffect;
    },
    82792: function (t, e, n) {
      "use strict";
      n.d(e, {
        My: function () {
          return i;
        },
        fp: function () {
          return r;
        },
        hC: function () {
          return o;
        },
      });
      function r(t, e, n) {
        var r = "";
        return (
          n.split(" ").forEach(function (n) {
            void 0 !== t[n] ? e.push(t[n] + ";") : (r += n + " ");
          }),
          r
        );
      }
      var o = function (t, e, n) {
          var r = t.key + "-" + e.name;
          !1 === n &&
            void 0 === t.registered[r] &&
            (t.registered[r] = e.styles);
        },
        i = function (t, e, n) {
          o(t, e, n);
          var r = t.key + "-" + e.name;
          if (void 0 === t.inserted[e.name]) {
            var i = e;
            do {
              t.insert(e === i ? "." + r : "", i, t.sheet, !0), (i = i.next);
            } while (void 0 !== i);
          }
        };
    },
    10616: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.M = function (t) {
        return r({
          tag: "svg",
          attr: { viewBox: "0 0 16 16", fill: "currentColor" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M13.5 1h-11a1 1 0 00-1 1v12a1 1 0 001 1h11a1 1 0 001-1V2a1 1 0 00-1-1zm-11-1a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V2a2 2 0 00-2-2h-11z",
                clipRule: "evenodd",
              },
            },
            {
              tag: "rect",
              attr: { width: "3", height: "5", x: "6.5", y: "2", rx: "1" },
            },
            {
              tag: "rect",
              attr: { width: "3", height: "9", x: "2.5", y: "2", rx: "1" },
            },
            {
              tag: "rect",
              attr: { width: "3", height: "12", x: "10.5", y: "2", rx: "1" },
            },
          ],
        })(t);
      };
    },
    52780: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.j = function (t) {
        return r({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z",
              },
            },
          ],
        })(t);
      };
    },
    34045: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.B = function (t) {
        return r({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
              },
            },
          ],
        })(t);
      };
    },
    40770: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.$ = function (t) {
        return r({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M267.429 488.563C262.286 507.573 242.858 512 224 512c-18.857 0-38.286-4.427-43.428-23.437C172.927 460.134 160 388.898 160 355.75c0-35.156 31.142-43.75 64-43.75s64 8.594 64 43.75c0 32.949-12.871 104.179-20.571 132.813zM156.867 288.554c-18.693-18.308-29.958-44.173-28.784-72.599 2.054-49.724 42.395-89.956 92.124-91.881C274.862 121.958 320 165.807 320 220c0 26.827-11.064 51.116-28.866 68.552-2.675 2.62-2.401 6.986.628 9.187 9.312 6.765 16.46 15.343 21.234 25.363 1.741 3.654 6.497 4.66 9.449 1.891 28.826-27.043 46.553-65.783 45.511-108.565-1.855-76.206-63.595-138.208-139.793-140.369C146.869 73.753 80 139.215 80 220c0 41.361 17.532 78.7 45.55 104.989 2.953 2.771 7.711 1.77 9.453-1.887 4.774-10.021 11.923-18.598 21.235-25.363 3.029-2.2 3.304-6.566.629-9.185zM224 0C100.204 0 0 100.185 0 224c0 89.992 52.602 165.647 125.739 201.408 4.333 2.118 9.267-1.544 8.535-6.31-2.382-15.512-4.342-30.946-5.406-44.339-.146-1.836-1.149-3.486-2.678-4.512-47.4-31.806-78.564-86.016-78.187-147.347.592-96.237 79.29-174.648 175.529-174.899C320.793 47.747 400 126.797 400 224c0 61.932-32.158 116.49-80.65 147.867-.999 14.037-3.069 30.588-5.624 47.23-.732 4.767 4.203 8.429 8.535 6.31C395.227 389.727 448 314.187 448 224 448 100.205 347.815 0 224 0zm0 160c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64z",
              },
            },
          ],
        })(t);
      };
    },
    39305: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.V = function (t) {
        return r({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z",
              },
            },
          ],
        })(t);
      };
    },
    85438: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.f = function (t) {
        return r({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
              },
            },
          ],
        })(t);
      };
    },
    36914: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.V = function (t) {
        return r({
          tag: "svg",
          attr: { viewBox: "0 0 576 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
              },
            },
          ],
        })(t);
      };
    },
    50678: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.R = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "5", y1: "12", x2: "19", y2: "12" } },
            { tag: "polyline", attr: { points: "12 5 19 12 12 19" } },
          ],
        })(t);
      };
    },
    94532: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.i = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "12", y1: "19", x2: "12", y2: "5" } },
            { tag: "polyline", attr: { points: "5 12 12 5 19 12" } },
          ],
        })(t);
      };
    },
    31872: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.T = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "7", y1: "17", x2: "17", y2: "7" } },
            { tag: "polyline", attr: { points: "7 7 17 7 17 17" } },
          ],
        })(t);
      };
    },
    35149: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.h = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" },
            },
            {
              tag: "path",
              attr: { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" },
            },
          ],
        })(t);
      };
    },
    91187: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.l = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" },
            },
          ],
        })(t);
      };
    },
    30238: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.U = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [{ tag: "polyline", attr: { points: "20 6 9 17 4 12" } }],
        })(t);
      };
    },
    27300: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.b = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [{ tag: "polyline", attr: { points: "6 9 12 15 18 9" } }],
        })(t);
      };
    },
    41005: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.Y = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [{ tag: "polyline", attr: { points: "15 18 9 12 15 6" } }],
        })(t);
      };
    },
    10444: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.T = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [{ tag: "polyline", attr: { points: "9 18 15 12 9 6" } }],
        })(t);
      };
    },
    43446: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.B = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
              },
            },
          ],
        })(t);
      };
    },
    96678: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.t = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z",
              },
            },
            { tag: "polyline", attr: { points: "13 2 13 9 20 9" } },
          ],
        })(t);
      };
    },
    35581: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.I = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "polygon",
              attr: { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" },
            },
          ],
        })(t);
      };
    },
    67474: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.M = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
              },
            },
            { tag: "line", attr: { x1: "4", y1: "22", x2: "4", y2: "15" } },
          ],
        })(t);
      };
    },
    88523: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.u = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "18", cy: "18", r: "3" } },
            { tag: "circle", attr: { cx: "6", cy: "6", r: "3" } },
            { tag: "path", attr: { d: "M6 21V9a9 9 0 0 0 9 9" } },
          ],
        })(t);
      };
    },
    3705: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.R = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "12", cy: "12", r: "10" } },
            { tag: "line", attr: { x1: "2", y1: "12", x2: "22", y2: "12" } },
            {
              tag: "path",
              attr: {
                d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
              },
            },
          ],
        })(t);
      };
    },
    45605: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.c = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "path", attr: { d: "M3 18v-6a9 9 0 0 1 18 0v6" } },
            {
              tag: "path",
              attr: {
                d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z",
              },
            },
          ],
        })(t);
      };
    },
    26066: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.o = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
              },
            },
          ],
        })(t);
      };
    },
    50202: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.e = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3",
              },
            },
            { tag: "line", attr: { x1: "8", y1: "12", x2: "16", y2: "12" } },
          ],
        })(t);
      };
    },
    22429: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.d = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "12", y1: "2", x2: "12", y2: "6" } },
            { tag: "line", attr: { x1: "12", y1: "18", x2: "12", y2: "22" } },
            {
              tag: "line",
              attr: { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" },
            },
            {
              tag: "line",
              attr: { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" },
            },
            { tag: "line", attr: { x1: "2", y1: "12", x2: "6", y2: "12" } },
            { tag: "line", attr: { x1: "18", y1: "12", x2: "22", y2: "12" } },
            {
              tag: "line",
              attr: { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" },
            },
            {
              tag: "line",
              attr: { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" },
            },
          ],
        })(t);
      };
    },
    77913: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.U = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "rect",
              attr: {
                x: "3",
                y: "11",
                width: "18",
                height: "11",
                rx: "2",
                ry: "2",
              },
            },
            { tag: "path", attr: { d: "M7 11V7a5 5 0 0 1 10 0v4" } },
          ],
        })(t);
      };
    },
    42636: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.I = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
              },
            },
            { tag: "polyline", attr: { points: "22,6 12,13 2,6" } },
          ],
        })(t);
      };
    },
    1223: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.I = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              },
            },
          ],
        })(t);
      };
    },
    92348: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.w = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" },
            },
          ],
        })(t);
      };
    },
    54983: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.R = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "rect", attr: { x: "6", y: "4", width: "4", height: "16" } },
            {
              tag: "rect",
              attr: { x: "14", y: "4", width: "4", height: "16" },
            },
          ],
        })(t);
      };
    },
    43614: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.K = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [{ tag: "polygon", attr: { points: "5 3 19 12 5 21 5 3" } }],
        })(t);
      };
    },
    1859: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.b = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
            },
          ],
        })(t);
      };
    },
    38588: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.O = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z",
              },
            },
          ],
        })(t);
      };
    },
    82641: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.Q = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "polyline",
              attr: { points: "23 6 13.5 15.5 8.5 10.5 1 18" },
            },
            { tag: "polyline", attr: { points: "17 6 23 6 23 12" } },
          ],
        })(t);
      };
    },
    88310: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.H = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "polygon", attr: { points: "23 7 16 12 23 17 23 7" } },
            {
              tag: "rect",
              attr: {
                x: "1",
                y: "5",
                width: "15",
                height: "14",
                rx: "2",
                ry: "2",
              },
            },
          ],
        })(t);
      };
    },
    29525: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.l = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "polygon",
              attr: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" },
            },
            {
              tag: "path",
              attr: {
                d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07",
              },
            },
          ],
        })(t);
      };
    },
    29474: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.L = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "polygon",
              attr: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" },
            },
            { tag: "line", attr: { x1: "23", y1: "9", x2: "17", y2: "15" } },
            { tag: "line", attr: { x1: "17", y1: "9", x2: "23", y2: "15" } },
          ],
        })(t);
      };
    },
    21962: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.q = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "18", y1: "6", x2: "6", y2: "18" } },
            { tag: "line", attr: { x1: "6", y1: "6", x2: "18", y2: "18" } },
          ],
        })(t);
      };
    },
    62529: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.$ = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "12", cy: "12", r: "10" } },
            { tag: "line", attr: { x1: "15", y1: "9", x2: "9", y2: "15" } },
            { tag: "line", attr: { x1: "9", y1: "9", x2: "15", y2: "15" } },
          ],
        })(t);
      };
    },
    30071: function (t, e, n) {
      var r = n(8180).w_;
      t.exports.W = function (t) {
        return r({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "polygon",
              attr: { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" },
            },
          ],
        })(t);
      };
    },
    8180: function (t, e, n) {
      "use strict";
      n.d(e, {
        w_: function () {
          return u;
        },
      });
      var r = n(2784),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = r.createContext && r.createContext(o),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }),
            a.apply(this, arguments)
          );
        },
        s = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
              e.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                (n[r[o]] = t[r[o]]);
          }
          return n;
        };
      function c(t) {
        return (
          t &&
          t.map(function (t, e) {
            return r.createElement(t.tag, a({ key: e }, t.attr), c(t.child));
          })
        );
      }
      function u(t) {
        return function (e) {
          return r.createElement(l, a({ attr: a({}, t.attr) }, e), c(t.child));
        };
      }
      function l(t) {
        var e = function (e) {
          var n,
            o = t.attr,
            i = t.size,
            c = t.title,
            u = s(t, ["attr", "size", "title"]),
            l = i || e.size || "1em";
          return (
            e.className && (n = e.className),
            t.className && (n = (n ? n + " " : "") + t.className),
            r.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                o,
                u,
                {
                  className: n,
                  style: a(a({ color: t.color || e.color }, e.style), t.style),
                  height: l,
                  width: l,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              c && r.createElement("title", null, c),
              t.children
            )
          );
        };
        return void 0 !== i
          ? r.createElement(i.Consumer, null, function (t) {
              return e(t);
            })
          : e(o);
      }
    },
    86534: function () {
      !(function () {
        "use strict";
        function t(t) {
          var e = !0,
            n = !1,
            r = null,
            o = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function i(t) {
            return !!(
              t &&
              t !== document &&
              "HTML" !== t.nodeName &&
              "BODY" !== t.nodeName &&
              "classList" in t &&
              "contains" in t.classList
            );
          }
          function a(t) {
            var e = t.type,
              n = t.tagName;
            return (
              !("INPUT" !== n || !o[e] || t.readOnly) ||
              ("TEXTAREA" === n && !t.readOnly) ||
              !!t.isContentEditable
            );
          }
          function s(t) {
            t.classList.contains("focus-visible") ||
              (t.classList.add("focus-visible"),
              t.setAttribute("data-focus-visible-added", ""));
          }
          function c(t) {
            t.hasAttribute("data-focus-visible-added") &&
              (t.classList.remove("focus-visible"),
              t.removeAttribute("data-focus-visible-added"));
          }
          function u(n) {
            n.metaKey ||
              n.altKey ||
              n.ctrlKey ||
              (i(t.activeElement) && s(t.activeElement), (e = !0));
          }
          function l(t) {
            e = !1;
          }
          function d(t) {
            i(t.target) && (e || a(t.target)) && s(t.target);
          }
          function f(t) {
            i(t.target) &&
              (t.target.classList.contains("focus-visible") ||
                t.target.hasAttribute("data-focus-visible-added")) &&
              ((n = !0),
              window.clearTimeout(r),
              (r = window.setTimeout(function () {
                n = !1;
              }, 100)),
              c(t.target));
          }
          function p(t) {
            "hidden" === document.visibilityState && (n && (e = !0), h());
          }
          function h() {
            document.addEventListener("mousemove", m),
              document.addEventListener("mousedown", m),
              document.addEventListener("mouseup", m),
              document.addEventListener("pointermove", m),
              document.addEventListener("pointerdown", m),
              document.addEventListener("pointerup", m),
              document.addEventListener("touchmove", m),
              document.addEventListener("touchstart", m),
              document.addEventListener("touchend", m);
          }
          function v() {
            document.removeEventListener("mousemove", m),
              document.removeEventListener("mousedown", m),
              document.removeEventListener("mouseup", m),
              document.removeEventListener("pointermove", m),
              document.removeEventListener("pointerdown", m),
              document.removeEventListener("pointerup", m),
              document.removeEventListener("touchmove", m),
              document.removeEventListener("touchstart", m),
              document.removeEventListener("touchend", m);
          }
          function m(t) {
            (t.target.nodeName && "html" === t.target.nodeName.toLowerCase()) ||
              ((e = !1), v());
          }
          document.addEventListener("keydown", u, !0),
            document.addEventListener("mousedown", l, !0),
            document.addEventListener("pointerdown", l, !0),
            document.addEventListener("touchstart", l, !0),
            document.addEventListener("visibilitychange", p, !0),
            h(),
            t.addEventListener("focus", d, !0),
            t.addEventListener("blur", f, !0),
            t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t.host
              ? t.host.setAttribute("data-js-focus-visible", "")
              : t.nodeType === Node.DOCUMENT_NODE &&
                (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute(
                  "data-js-focus-visible",
                  ""
                ));
        }
        if ("undefined" !== typeof window && "undefined" !== typeof document) {
          var e;
          window.applyFocusVisiblePolyfill = t;
          try {
            e = new CustomEvent("focus-visible-polyfill-ready");
          } catch (n) {
            (e = document.createEvent("CustomEvent")).initCustomEvent(
              "focus-visible-polyfill-ready",
              !1,
              !1,
              {}
            );
          }
          window.dispatchEvent(e);
        }
        "undefined" !== typeof document && t(document);
      })();
    },
    9340: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return o;
        },
      });
      var r = function () {},
        o = function () {};
    },
    73463: function (t, e, n) {
      "use strict";
      var r = n(48570),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(t) {
        return r.isMemo(t) ? a : s[t.$$typeof] || o;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = a);
      var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      t.exports = function t(e, n, r) {
        if ("string" !== typeof n) {
          if (h) {
            var o = p(n);
            o && o !== h && t(e, o, r);
          }
          var a = l(n);
          d && (a = a.concat(d(n)));
          for (var s = c(e), v = c(n), m = 0; m < a.length; ++m) {
            var g = a[m];
            if (!i[g] && (!r || !r[g]) && (!v || !v[g]) && (!s || !s[g])) {
              var y = f(n, g);
              try {
                u(e, g, y);
              } catch (b) {}
            }
          }
        }
        return e;
      };
    },
    86570: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(51182);
        },
      ]);
    },
    19462: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return r;
        },
      });
      const r = (0, n(50154).cn)(!1);
    },
    23807: function (t, e, n) {
      "use strict";
      n.d(e, {
        f: function () {
          return r;
        },
      });
      const r = (0, n(50154).cn)(!1);
    },
    29568: function (t, e, n) {
      "use strict";
      n.d(e, {
        cU: function () {
          return a;
        },
        uY: function () {
          return i;
        },
      });
      var r = n(50154),
        o = n(75619);
      const i = (0, r.cn)(o.cx),
        a = (0, r.cn)({
          hoveredOrFocussedItem: "",
          hoveredOrFocussedSubItem: "",
          isIndicatorVisible: !1,
        });
      (0, r.cn)({ width: 0, left: 0 });
    },
    69656: function (t, e, n) {
      "use strict";
      var r = n(73235),
        o = n(52903),
        i = n(28165),
        a = n(11198),
        s = n(83485),
        c = n(75619),
        u = n(41496),
        l = n(65591);
      function d() {
        const t = (0, r._)([
          "\n          padding: 16px 32px;\n          border-radius: 32px;\n\n          ",
          " {\n            padding: 16px 24px;\n            border-radius: 75px;\n          }\n        ",
        ]);
        return (
          (d = function () {
            return t;
          }),
          t
        );
      }
      function f() {
        const t = (0, r._)([
          "\n          padding: 32px 48px;\n          border-radius: 75px;\n\n          ",
          " {\n            padding: 16px 30px;\n            border-radius: 75px;\n          }\n        ",
        ]);
        return (
          (f = function () {
            return t;
          }),
          t
        );
      }
      function p() {
        const t = (0, r._)([
          "\n          padding: 8px 24px;\n          border-radius: 75px;\n        ",
        ]);
        return (
          (p = function () {
            return t;
          }),
          t
        );
      }
      function h() {
        const t = (0, r._)([
          "\n          padding: 24px 32px;\n          border-radius: 100px;\n\n          ",
          " {\n            padding: 12px 16px;\n          }\n        ",
        ]);
        return (
          (h = function () {
            return t;
          }),
          t
        );
      }
      function v() {
        const t = (0, r._)([
          "\n          padding: 12px 20px;\n          border-radius: 32px;\n\n          ",
          " {\n            padding: 8px 16px;\n          }\n        ",
        ]);
        return (
          (v = function () {
            return t;
          }),
          t
        );
      }
      function m() {
        const t = (0, r._)([
          "\n          background: transparent;\n          border: none;\n          padding: 0px;\n          border-radius: 32px;\n          gap: 0px;\n\n          ",
          " {\n            padding: 8px;\n          }\n        ",
        ]);
        return (
          (m = function () {
            return t;
          }),
          t
        );
      }
      const g = (0, a.Z)("button", { target: "e119r9we0" })(
        "align-items:center;background-color:var(--themeDefaultButtonBgColor);color:var(--themeDefaultButtonTextColor);cursor:",
        (t) => t.disabled && "default",
        ";display:flex;gap:10px;text-align:center;transition:transform 0.2s ease-in,background-color 0.2s ease-in,color 0.2s ease-in;",
        (t) => {
          let { variant: e } = t;
          switch (e) {
            case "default":
              return (0, i.iv)(d(), c.Nn.m);
            case "large":
              return (0, i.iv)(f(), c.Nn.m);
            case "small":
              return (0, i.iv)(p());
            case "form":
              return (0, i.iv)(h(), c.Nn.m);
            case "arrow":
              return (0, i.iv)(v(), c.Nn.m);
            case "close":
              return (0, i.iv)(m(), c.Nn.m);
          }
        },
        "  @media (hover:hover){&:hover{background-color:var(--themeDefaultButtonHoverBgColor);color:var(--themeDefaultButtonHoverTextColor);transform:scale(0.985);span,svg{color:currentColor;}}}&:disabled{background-color:var(--dark11);color:var(--white);}svg{width:24px;height:24px;",
        c.Nn.m,
        "{width:14px;height:14px;}}"
      );
      e.Z = (t) => {
        let {
          className: e,
          children: n,
          variant: r = "default",
          disabled: i,
          href: a,
          type: c,
          onClick: d,
          onMouseEnter: f,
          onMouseLeave: p,
          onFocus: h,
          onBlur: v,
          onClickCapture: m,
          download: y,
          "aria-label": b,
        } = t;
        const x = "large" === r ? l.QE : l.xv,
          w = { href: a, download: y },
          C = { type: c, disabled: i };
        return (0, o.BX)(g, {
          className: e,
          variant: r,
          onClick: d,
          onMouseEnter: f,
          onMouseLeave: p,
          onFocus: h,
          onBlur: v,
          onClickCapture: m,
          as: a ? u.Z : "button",
          "aria-label": b,
          ...(a ? w : C),
          children: [
            (0, o.tZ)(x, {
              as: "span",
              size: "arrow" == r || "large" === r ? "m" : "s",
              children: n,
            }),
            "arrow" === r && (0, o.tZ)(s.J, { type: "arrowUpRight" }),
            "close" === r && (0, o.tZ)(s.J, { type: "close" }),
          ],
        });
      };
    },
    96299: function (t, e, n) {
      "use strict";
      var r = n(52903),
        o = n(2784),
        i = n(36919);
      const a = (t, e) => {
        let {
          className: n,
          href: o,
          onMouseEnter: a,
          onMouseLeave: s,
          onMouseMove: c,
          onFocus: u,
          onBlur: l,
          onClick: d,
          onClickCapture: f,
          children: p,
          download: h,
        } = t;
        const v = (0, i.fH)("link", { external: !0, href: o });
        return (0, r.tZ)("a", {
          ref: e,
          target: "_blank",
          rel: "noopener noreferrer",
          href: o,
          className: n,
          onMouseEnter: a,
          onMouseLeave: s,
          onMouseMove: c,
          onFocus: u,
          onBlur: l,
          onClick: d,
          onClickCapture: (t) => {
            f && f(t), v(t);
          },
          download: h,
          children: p,
        });
      };
      e.Z = (0, o.forwardRef)(a);
    },
    59473: function (t, e, n) {
      "use strict";
      var r = n(52903),
        o = n(2784),
        i = n(39097),
        a = n.n(i),
        s = n(40867);
      const c = (t, e) => {
        let {
          href: n,
          children: o,
          className: i,
          onMouseEnter: c,
          onMouseLeave: u,
          onMouseMove: l,
          onFocus: d,
          onBlur: f,
          onClick: p,
          onClickCapture: h,
          scroll: v,
          ...m
        } = t;
        return (0, r.tZ)(a(), {
          ref: e,
          className: i,
          onMouseEnter: c,
          onMouseLeave: u,
          onMouseMove: l,
          onFocus: d,
          onBlur: f,
          onClick: p,
          onClickCapture: h,
          href: n,
          scroll: v,
          ...(0, s.eQ)(m),
          children: o,
        });
      };
      e.Z = (0, o.forwardRef)(c);
    },
    41496: function (t, e, n) {
      "use strict";
      var r = n(52903),
        o = n(2784),
        i = n(36919),
        a = n(96299),
        s = n(59473);
      const c = (t, e) => {
        let { children: n, href: c, onClickCapture: u, ...l } = t;
        const d = c.includes("http") || c.includes("mailto"),
          f = d ? a.Z : s.Z,
          p = (0, i.fH)("link", { external: d, href: c }),
          h = (0, o.useCallback)(
            (t) => {
              u && u(t), p(t);
            },
            [p, u]
          );
        return c
          ? (0, r.tZ)(f, {
              ref: e,
              href: c,
              ...l,
              onClickCapture: h,
              children: n,
            })
          : (0, r.tZ)("span", { ...l, onClickCapture: h, children: n });
      };
      e.Z = (0, o.forwardRef)(c);
    },
    65591: function (t, e, n) {
      "use strict";
      n.d(e, {
        Dx: function () {
          return d;
        },
        QE: function () {
          return f;
        },
        Vp: function () {
          return h;
        },
        xv: function () {
          return p;
        },
      });
      var r = n(73235),
        o = n(99362),
        i = n(28165),
        a = n(11198),
        s = n(75619);
      function c() {
        const t = (0, r._)([
          "\n          font-size: 16px;\n          line-height: 1.25;\n          font-weight: 400;\n\n          ",
          " {\n            font-size: 14px;\n            line-height: 1.25;\n          }\n        ",
        ]);
        return (
          (c = function () {
            return t;
          }),
          t
        );
      }
      function u() {
        const t = (0, r._)([
          "\n          font-size: 20px;\n          line-height: 1.4;\n          font-weight: 300;\n          ",
          " {\n            font-size: 18px;\n          }\n\n          ",
          " {\n            font-size: 16px;\n            font-weight: 400;\n          }\n        ",
        ]);
        return (
          (u = function () {
            return t;
          }),
          t
        );
      }
      function l() {
        const t = (0, r._)([
          "\n          font-size: 20px;\n          line-height: 1.05;\n          font-weight: 350;\n          letter-spacing: -0.01em;\n          ",
          " {\n            font-size: 16px;\n            line-height: 1.21;\n            font-weight: 400;\n            letter-spacing: 0em;\n          }\n        ",
        ]);
        return (
          (l = function () {
            return t;
          }),
          t
        );
      }
      const d = (0, a.Z)("h1", {
          shouldForwardProp: (t) => (0, o.Z)(t) && "scale" !== t,
          target: "eyitmu90",
        })(
          "font-family:var(--phantomFont);text-align:",
          (t) => {
            let { align: e } = t;
            return e;
          },
          ";white-space:pre-wrap;",
          (t) => {
            let { size: e, scale: n } = t;
            switch (e) {
              case "xs":
                return (0, i.iv)(
                  "font-size:32px;font-weight:400;line-height:1.2;",
                  s.Nn.l,
                  "{font-size:30px;}",
                  s.Nn.m,
                  "{font-size:20px;}"
                );
              case "s":
                return (0, i.iv)(
                  "font-size:",
                  n ? "2.3vw" : "40px",
                  ";line-height:1.2;font-weight:400;",
                  s.wQ.xxxl,
                  "{font-size:",
                  n && "40px",
                  ";}",
                  s.Nn.xxl,
                  "{font-size:",
                  n && "2vw",
                  ";}",
                  s.Nn.xl,
                  "{font-size:",
                  n && "3.2vw",
                  ";}",
                  s.Nn.l,
                  "{font-size:",
                  !n && "36px",
                  ";}",
                  s.Nn.m,
                  "{font-size:",
                  n ? "3.5vw" : "24px",
                  ";line-height:1.05;}",
                  s.Nn.s,
                  "{font-size:",
                  n ? "7vw" : "24px",
                  ";}"
                );
              case "m":
                return (0, i.iv)(
                  "font-size:64px;line-height:1;letter-spacing:-0.025em;font-weight:400;",
                  s.Nn.m,
                  "{font-size:30px;line-height:0.98;}"
                );
              case "l":
                return (0, i.iv)(
                  "font-size:96px;line-height:1.1;letter-spacing:-0.025em;font-weight:400;",
                  s.Nn.xl,
                  "{font-size:72px;}",
                  s.Nn.m,
                  "{font-size:32px;}"
                );
              case "xl":
                return (0, i.iv)(
                  "font-size:150px;line-height:0.9;letter-spacing:-0.025em;font-weight:400;",
                  s.Nn.xl,
                  "{font-size:110px;}",
                  s.Nn.m,
                  "{font-size:48px;line-height:1;}"
                );
            }
          },
          ";"
        ),
        f = (0, a.Z)("h2", {
          shouldForwardProp: (t) => (0, o.Z)(t) && "scale" !== t,
          target: "eyitmu91",
        })(
          "font-family:var(--phantomFont);text-align:",
          (t) => {
            let { align: e } = t;
            return e;
          },
          ";white-space:pre-wrap;letter-spacing:-0.025em;",
          (t) => {
            let { size: e, scale: n } = t;
            switch (e) {
              case "s":
                return (0, i.iv)(
                  "font-size:24px;font-weight:400;",
                  s.Nn.xl,
                  "{font-size:20px;}",
                  s.Nn.m,
                  "{font-size:16px;}"
                );
              case "m":
                return (0, i.iv)(
                  "font-size:",
                  n ? "1.8vw" : "32px",
                  ";line-height:1.125;font-weight:400;",
                  s.Nn.xl,
                  "{font-size:",
                  n ? "3.2vw" : "32px",
                  ";}",
                  s.Nn.l,
                  "{font-size:",
                  n ? "3vw" : "24px",
                  ";line-height:1.205;}",
                  s.Nn.m,
                  "{font-size:",
                  n ? "3.5vw" : "18px",
                  ";}",
                  s.Nn.s,
                  "{font-size:",
                  n ? "6vw" : "18px",
                  ";}"
                );
            }
          }
        ),
        p = (0, a.Z)("p", { target: "eyitmu92" })(
          "font-family:var(--phantomFont);text-align:",
          (t) => {
            let { align: e } = t;
            return e;
          },
          ";white-space:pre-wrap;",
          (t) => {
            let { size: e } = t;
            switch (e) {
              case "s":
                return (0, i.iv)(c(), s.Nn.m);
              case "m":
                return (0, i.iv)(u(), s.Nn.xl, s.Nn.m);
              case "l":
                return (0, i.iv)(l(), s.Nn.m);
            }
          }
        ),
        h = (0, a.Z)("p", { target: "eyitmu93" })(
          "font-family:var(--phantomFont);font-size:15px;line-height:1.21;font-weight:400;text-align:",
          (t) => {
            let { align: e } = t;
            return e;
          },
          ";white-space:pre-wrap;",
          s.Nn.m,
          "{font-size:13px;line-height:1.25;}"
        );
    },
    75619: function (t, e, n) {
      "use strict";
      n.d(e, {
        Hg: function () {
          return b;
        },
        II: function () {
          return C;
        },
        Mv: function () {
          return x;
        },
        Nn: function () {
          return a;
        },
        Ub: function () {
          return u;
        },
        V6: function () {
          return p;
        },
        Wt: function () {
          return r;
        },
        XA: function () {
          return l;
        },
        aT: function () {
          return m;
        },
        bf: function () {
          return h;
        },
        cx: function () {
          return d;
        },
        gv: function () {
          return y;
        },
        j$: function () {
          return i;
        },
        mj: function () {
          return g;
        },
        nh: function () {
          return c;
        },
        sc: function () {
          return w;
        },
        tu: function () {
          return o;
        },
        uT: function () {
          return v;
        },
        wQ: function () {
          return s;
        },
        yU: function () {
          return f;
        },
      });
      const r = { mobile: 6, tablet: 8, desktop: 12 },
        o = { mobile: 8, tablet: 24, desktop: 32 },
        i = {
          xs: 375,
          s: 600,
          m: 768,
          l: 1024,
          xl: 1280,
          xxl: 1450,
          xxxl: 1727,
        },
        a = Object.entries(i).reduce((t, e) => {
          let [n, r] = e;
          return { ...t, [n]: "@media (max-width: ".concat(r, "px)") };
        }, {}),
        s = Object.entries(i).reduce((t, e) => {
          let [n, r] = e;
          return { ...t, [n]: "@media (min-width: ".concat(r + 1, "px)") };
        }, {}),
        c = Object.entries(i).reduce((t, e) => {
          let [n, r] = e;
          return { ...t, [n]: "(max-width: ".concat(r, "px)") };
        }, {}),
        u = Object.entries(i).reduce((t, e) => {
          let [n, r] = e;
          return { ...t, [n]: "(min-width: ".concat(r + 1, "px)") };
        }, {}),
        l = { mobile: 0, tablet: 1, desktop: 2 },
        d = [
          {
            label: "Security",
            href: "/security",
            icon: "shield",
            subItems: [],
          },
          { label: "Learn", href: "/learn", icon: "zap", subItems: [] },
          { label: "Explore", href: "/explore", icon: "globe", subItems: [] },
          {
            label: "Support",
            href: "https://help.phantom.app/hc/en-us",
            icon: "message",
            subItems: [],
          },
        ],
        f = {
          light: {
            cssVariables: {
              backgroundColor: "var(--white)",
              color: "var(--black)",
              titleColor: "var(--midnightPurple)",
              navLinkColor: "var(--midnightPurple)",
              navLinkHoverColor: "var(--midnightPurple)",
              subNavBgColor: "var(--light3)",
              footerBgColor: "var(--light3)",
              footerInputColor: "var(--white)",
              cardShadow: "var(--light6)",
              filterShadow: "var(--violet4)",
              footerButtonHoverColor: "var(--midnightPurple)",
              footerButtonHoverBgColor: "var(--dark12)",
              introSubtitleColor: "var(--light10)",
              defaultButtonBgColor: "var(--lilac)",
              defaultButtonTextColor: "var(--midnightPurple)",
              defaultButtonHoverBgColor: "var(--purple)",
              defaultButtonHoverTextColor: "var(--midnightPurple)",
              carouselTopBarBgColor: "var(--light3)",
            },
            lottieColor: "purple",
          },
          dark: {
            cssVariables: {
              backgroundColor: "var(--black)",
              color: "var(--white)",
              titleColor: "var(--white)",
              navLinkColor: "var(--white)",
              navLinkHoverColor: "var(--midnightPurple)",
              subNavBgColor: "var(--violet1)",
              footerBgColor: "var(--dark4)",
              footerInputColor: "var(--dark6)",
              cardShadow: "var(--dark4)",
              filterShadow: "var(--dark4)",
              footerButtonHoverColor: "var(--dark12)",
              footerButtonHoverBgColor: "var(--dark5)",
              introSubtitleColor: "var(--white)",
              defaultButtonBgColor: "var(--purple)",
              defaultButtonTextColor: "var(--black)",
              defaultButtonHoverBgColor: "var(--white)",
              defaultButtonHoverTextColor: "var(--black)",
              carouselTopBarBgColor: "var(--white)",
            },
            lottieColor: "purple",
          },
          darkPurple: {
            cssVariables: {
              backgroundColor: "var(--midnightPurple)",
              color: "var(--white)",
              titleColor: "var(--white)",
              navLinkColor: "var(--white)",
              navLinkHoverColor: "var(--midnightPurple)",
              subNavBgColor: "var(--violet1)",
              footerBgColor: "var(--darkViolet4)",
              footerInputColor: "var(--darkViolet6)",
              cardShadow: "var(--darkViolet6)",
              filterShadow: "var(--darkViolet4)",
              footerButtonHoverColor: "var(--white)",
              footerButtonHoverBgColor: "var(--midnightPurple)",
              introSubtitleColor: "var(--light10)",
              defaultButtonBgColor: "var(--lilac)",
              defaultButtonTextColor: "var(--midnightPurple)",
              defaultButtonHoverBgColor: "var(--white)",
              defaultButtonHoverTextColor: "var(--midnightPurple)",
              carouselTopBarBgColor: "var(--white)",
            },
            lottieColor: "purple",
          },
          lightPurple: {
            cssVariables: {
              backgroundColor: "var(--violet3)",
              color: "var(--black)",
              titleColor: "var(--midnightPurple)",
              navLinkColor: "var(--midnightPurple)",
              navLinkHoverColor: "var(--midnightPurple)",
              subNavBgColor: "var(--violet1)",
              footerBgColor: "var(--white)",
              footerInputColor: "var(--light3)",
              cardShadow: "var(--lilac)",
              filterShadow: "var(--lilac)",
              footerButtonHoverColor: "var(--black)",
              footerButtonHoverBgColor: "var(--dark12)",
              introSubtitleColor: "var(--light10)",
              defaultButtonBgColor: "var(--purple)",
              defaultButtonTextColor: "var(--black)",
              defaultButtonHoverBgColor: "var(--lilac)",
              defaultButtonHoverTextColor: "var(--black)",
              carouselTopBarBgColor: "var(--white)",
            },
            lottieColor: "purple",
          },
          yellow: {
            cssVariables: {
              backgroundColor: "var(--yellow)",
              color: "var(--black)",
              titleColor: "var(--midnightPurple)",
              navLinkColor: "var(--midnightPurple)",
              navLinkHoverColor: "var(--white)",
              subNavBgColor: "var(--light3)",
              footerBgColor: "var(--white)",
              footerInputColor: "var(--light3)",
              cardShadow: "var(--light6)",
              filterShadow: "var(--light9)",
              footerButtonHoverColor: "var(--black)",
              footerButtonHoverBgColor: "var(--dark12)",
              introSubtitleColor: "var(--light10)",
              defaultButtonBgColor: "var(--purple)",
              defaultButtonTextColor: "var(--black)",
              defaultButtonHoverBgColor: "var(--white)",
              defaultButtonHoverTextColor: "var(--black)",
              carouselTopBarBgColor: "var(--white)",
            },
            lottieColor: "purple",
          },
          purple: {
            cssVariables: {
              backgroundColor: "var(--purple)",
              color: "var(--black)",
              titleColor: "var(--midnightPurple)",
              navLinkColor: "var(--midnightPurple)",
              navLinkHoverColor: "var(--midnightPurple)",
              subNavBgColor: "var(--violet1)",
              footerBgColor: "var(--white)",
              footerInputColor: "var(--light3)",
              cardShadow: "var(--light6)",
              filterShadow: "var(--midnightPurple)",
              footerButtonHoverColor: "var(--black)",
              footerButtonHoverBgColor: "var(--dark12)",
              tagColor: "var(--black)",
              tagBgColor: "var(--white)",
              introSubtitleColor: "var(--dark6)",
              defaultButtonBgColor: "var(--midnightPurple)",
              defaultButtonTextColor: "var(--white)",
              defaultButtonHoverBgColor: "var(--black)",
              defaultButtonHoverTextColor: "var(--white)",
              carouselTopBarBgColor: "var(--white)",
            },
            lottieColor: "white",
          },
        },
        p = "light",
        h = f[p],
        v = {
          bounce: {
            white: "bounce-white.lottie",
            purple: "bounce-purple.lottie",
          },
          success: {
            white: "success-white.lottie",
            purple: "success-purple.lottie",
          },
          successBounce: {
            white: "successBounce-white.lottie",
            purple: "successBounce-purple.lottie",
          },
          wink: { white: "wink-white.lottie", purple: "wink-purple.lottie" },
          hearts: {
            white: "hearts-white.lottie",
            purple: "hearts-purple.lottie",
          },
          incorrect: {
            white: "incorrect-white.lottie",
            purple: "incorrect-purple.lottie",
          },
          idle: { white: "idle-white.lottie", purple: "idle-purple.lottie" },
        },
        m = {
          title:
            "Phantom \u2014 Crypto & NFT Wallet \u2014 Solana | Ethereum | Polygon",
          description:
            "Your trusted companion for NFTs & DeFi on Solana, Ethereum, & Polygon",
          siteName: "Phantom",
          image: "https://phantom.app/images/og-image.jpg",
        },
        g = [
          {
            start: { mobile: 1, tablet: 1, desktop: 5 },
            span: { mobile: 3, tablet: 2, desktop: 2 },
          },
          {
            start: { mobile: 4, tablet: 3, desktop: 7 },
            span: { mobile: 3, tablet: 2, desktop: 2 },
          },
          {
            start: { mobile: 1, tablet: 5, desktop: 9 },
            span: { mobile: 2, tablet: 2, desktop: 2 },
          },
          {
            start: { mobile: 4, tablet: 7, desktop: 11 },
            span: { mobile: 3, tablet: 2, desktop: 2 },
          },
        ],
        y = 107,
        b = 93,
        x = /vimeo\.com\/(?!progressive_redirect).+/,
        w = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
        C = /\.(m3u8)($|\?)/i;
    },
    2411: function (t, e, n) {
      "use strict";
      n.d(e, {
        Hg: function () {
          return l;
        },
        MX: function () {
          return c;
        },
        NM: function () {
          return d;
        },
        UI: function () {
          return o;
        },
        _0: function () {
          return p;
        },
        dI: function () {
          return h;
        },
        nI: function () {
          return f;
        },
        r7: function () {
          return u;
        },
        t7: function () {
          return i;
        },
        uZ: function () {
          return a;
        },
        vs: function () {
          return s;
        },
      });
      var r = n(40867);
      const o = (t, e, n) =>
          n[0] + ((t - e[0]) * (n[1] - n[0])) / (e[1] - e[0]),
        i = (t, e, n) => (1 - n) * t + n * e,
        a = (t, e, n) => Math.min(Math.max(t, e), n),
        s = (t, e, n) => {
          if (n[1] < n[0]) {
            const r = o(t, e, [...n].reverse());
            return a(n[1] + (n[0] - r), n[1], n[0]);
          }
          {
            const r = o(t, e, n);
            return a(r, n[0], n[1]);
          }
        },
        c = () => {
          const t = document.body,
            e = document.documentElement;
          return {
            scrollTop: window.pageYOffset || e.scrollTop || t.scrollTop,
            scrollLeft: window.pageXOffset || e.scrollLeft || t.scrollLeft,
          };
        },
        u = (t) => {
          const e = t.getBoundingClientRect(),
            n = document.body,
            r = document.documentElement,
            { scrollTop: o, scrollLeft: i } = c(),
            a = r.clientTop || n.clientTop || 0,
            s = r.clientLeft || n.clientLeft || 0;
          return { top: ~~(e.top + o - a), left: ~~(e.left + i - s) };
        };
      function l(t, e) {
        return t > e ? t - e : e - t;
      }
      function d() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 100;
        return ~~(t * e) / e;
      }
      function f(t, e) {
        return {
          x: Math.cos(t - Math.PI / 2) * e.x,
          y: Math.sin(t - Math.PI / 2) * e.y,
        };
      }
      const p = (t, e, n, o) => ({ x: (0, r.XF)(t, e), y: (0, r.XF)(n, o) }),
        h = (t, e, n) => {
          const r = e.width + (2 * n || 0),
            o = e.height + (2 * n || 0),
            i = e.x - (n || 0),
            a = e.y - (n || 0),
            s = t.x >= i && t.x <= i + r,
            c = t.y >= a && t.y <= a + o;
          return s && c;
        };
    },
    40867: function (t, e, n) {
      "use strict";
      n.d(e, {
        BY: function () {
          return l;
        },
        Qh: function () {
          return a;
        },
        XF: function () {
          return u;
        },
        eQ: function () {
          return s;
        },
        mG: function () {
          return d;
        },
        p6: function () {
          return c;
        },
        rV: function () {
          return i;
        },
      });
      var r = n(99362);
      const o = (t) => t.charAt(0).toUpperCase() + t.slice(1),
        i = (t) => t.split("-").map(o).join(" "),
        a = (t) => t.split(/[?#]/)[0],
        s = (t) => {
          const e = Object.entries(t).filter((t) => {
            let [e] = t;
            return (0, r.Z)(e);
          });
          return Object.fromEntries(e);
        },
        c = (t) =>
          new Date(t).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
      function u(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      }
      const l = (t) => {
          const e = Math.floor(t),
            n = Math.floor(e / 3600),
            r = Math.floor((e - 3600 * n) / 60),
            o = e - 3600 * n - 60 * r;
          return (
            n.toString().padStart(2, "0") +
            ":" +
            r.toString().padStart(2, "0") +
            ":" +
            o.toString().padStart(2, "0")
          );
        },
        d = (t) => {
          let { children: e } = t;
          const n = e
            .map((t) => {
              let { text: e } = t;
              return e;
            })
            .filter(Boolean)
            .join(" ");
          return n
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
        };
    },
    36919: function (t, e, n) {
      "use strict";
      n.d(e, {
        ng: function () {
          return u;
        },
        nK: function () {
          return p;
        },
        fH: function () {
          return f;
        },
        Bq: function () {
          return d;
        },
        w$: function () {
          return h;
        },
      });
      var r = n(52903),
        o = n(2784),
        i = n(5632);
      const a = "2SZAIlgoCS2fYmzpsuLVkHE2HyQ",
        s = "https://phantom-dataplane.rudderstack.com";
      const c = (0, o.createContext)(void 0),
        u = (t) => {
          let { children: e } = t;
          const [i, u] = (0, o.useState)(void 0);
          return (
            (0, o.useEffect)(() => {
              (async () => {
                try {
                  await (async function (t) {
                    (window.analytics = await n.e(473).then(n.bind(n, 44473))),
                      window.analytics.load(a, s, {
                        integrations: { All: !0 },
                      }),
                      window.analytics.ready(() => {
                        t(window.analytics);
                      });
                  })(u);
                } catch (t) {}
              })();
            }, []),
            (0, r.tZ)(c.Provider, { value: i, children: e })
          );
        },
        l = () => (0, o.useContext)(c),
        d = function (t, e) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          const i = l(),
            a = (0, o.useRef)(null);
          (0, o.useEffect)(() => {
            if (
              i &&
              !Object.is(a.current, {
                type: t,
                name: e,
                properties: n,
                onAnalyzed: r,
              })
            ) {
              a.current = { type: t, name: e, properties: n, onAnalyzed: r };
              const o = r;
              i.page(t, e || "unknown", n, o);
            }
          }, [i, e, r, n, t]);
        },
        f = function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          const r = l(),
            { asPath: a } = (0, i.useRouter)();
          return (0, o.useCallback)(
            (o) => {
              if (r) {
                const i = { ...e, currentPage: a };
                if (o) {
                  const t = o.target;
                  i.element = {
                    tag: t.tagName.toLowerCase(),
                    content: t.innerText,
                  };
                }
                const s = n;
                r.track(t, i, s);
              }
            },
            [r, a, n, e, t]
          );
        },
        p = (t, e) => f("download", t, e),
        h = (t, e, n, r) => {
          const i = l();
          (0, o.useEffect)(() => {
            if (i) {
              const o = [t]
                .flatMap((t) => ("string" === typeof t ? t.trim() : t))
                .filter((t) => !!t)
                .join(",")
                .trim();
              if (o) {
                const t = r;
                i.identify(o, e, n, t);
              }
            }
          }, [i, r, n, e, t]);
        };
    },
    81021: function (t, e, n) {
      "use strict";
      var r = n(2784),
        o = n(5632),
        i = n(50154),
        a = n(2411),
        s = n(19462);
      e.Z = () => {
        const [t] = (0, i.KO)(s.E),
          { asPath: e } = (0, o.useRouter)(),
          [n, c] = (0, r.useState)(null),
          [u, l] = (0, r.useState)("instant"),
          [d, f] = (0, r.useState)("/" !== e || t),
          [p, h] = (0, r.useState)(!1),
          v = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            const { scrollTop: t } = (0, a.MX)();
            c(t);
          }, []),
          (0, r.useEffect)(() => {
            null !== n &&
              ("/" !== e || t || 0 !== n ? l("instant") : (l("animate"), h(!0)),
              f(!0));
          }, [e, t, n]),
          (0, r.useEffect)(
            () => (
              "animate" === u && (v.current = setTimeout(() => h(!1), 2200)),
              () => clearTimeout(v.current)
            ),
            [u]
          ),
          [d, u, p]
        );
      };
    },
    36998: function (t, e, n) {
      "use strict";
      var r = n(2784),
        o = n(2411);
      e.Z = () => {
        const t = (0, r.useRef)(),
          [e, n] = (0, r.useState)({ top: 0, left: 0 }),
          i = (0, r.useCallback)(() => {
            if (!t.current) return;
            const { top: e, left: r } = (0, o.r7)(t.current);
            n({ top: e, left: r });
          }, []);
        return (
          (0, r.useEffect)(
            () => (
              i(),
              window.addEventListener("resize", i),
              () => window.removeEventListener("resize", i)
            ),
            [i]
          ),
          [(e) => (t.current = e), e]
        );
      };
    },
    46896: function (t, e, n) {
      "use strict";
      var r = n(2784);
      e.Z = (t) => {
        const e = (0, r.useRef)();
        return (
          (0, r.useEffect)(() => {
            e.current = t;
          }, [t]),
          e.current
        );
      };
    },
    51182: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return Tn;
          },
        });
      var r = n(52903),
        o = n(40217),
        i = n.n(o),
        a = (n(86534), n(99362)),
        s = n(28165),
        c = n(2784),
        u = n(70398),
        l = n(81879);
      function d({ children: t, features: e, strict: n = !1 }) {
        const [, r] = (0, c.useState)(!f(e)),
          o = (0, c.useRef)(void 0);
        if (!f(e)) {
          const { renderer: t, ...n } = e;
          (o.current = t), (0, l.K)(n);
        }
        return (
          (0, c.useEffect)(() => {
            f(e) &&
              e().then(({ renderer: t, ...e }) => {
                (0, l.K)(e), (o.current = t), r(!0);
              });
          }, []),
          c.createElement(
            u.u.Provider,
            { value: { renderer: o.current, strict: n } },
            t
          )
        );
      }
      function f(t) {
        return "function" === typeof t;
      }
      var p = n(2445),
        h = n(240);
      var v = n(48488);
      function m(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var g,
        y = n(9066),
        b = n(97732);
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit");
      })(g || (g = {}));
      var x = n(52248);
      const w = [g.Animate, g.InView, g.Focus, g.Hover, g.Tap, g.Drag, g.Exit],
        C = [...w].reverse(),
        k = w.length;
      function M(t) {
        let e = (function (t) {
          return (e) =>
            Promise.all(
              e.map(({ animation: e, options: n }) => (0, y.d5)(t, e, n))
            );
        })(t);
        const n = {
          [g.Animate]: S(!0),
          [g.InView]: S(),
          [g.Hover]: S(),
          [g.Tap]: S(),
          [g.Drag]: S(),
          [g.Focus]: S(),
          [g.Exit]: S(),
        };
        let r = !0;
        const o = (e, n) => {
          const r = (0, x.x)(t, n);
          if (r) {
            const { transition: t, transitionEnd: n, ...o } = r;
            e = { ...e, ...o, ...n };
          }
          return e;
        };
        function i(i, a) {
          const s = t.getProps(),
            c = t.getVariantContext(!0) || {},
            u = [],
            l = new Set();
          let d = {},
            f = 1 / 0;
          for (let e = 0; e < k; e++) {
            const h = C[e],
              g = n[h],
              y = void 0 !== s[h] ? s[h] : c[h],
              x = (0, b.$)(y),
              w = h === a ? g.isActive : null;
            !1 === w && (f = e);
            let k = y === c[h] && y !== s[h] && x;
            if (
              (k && r && t.manuallyAnimateOnMount && (k = !1),
              (g.protectedKeys = { ...d }),
              (!g.isActive && null === w) ||
                (!y && !g.prevProp) ||
                (0, p.H)(y) ||
                "boolean" === typeof y)
            )
              continue;
            const M = E(g.prevProp, y);
            let S = M || (h === a && g.isActive && !k && x) || (e > f && x);
            const L = Array.isArray(y) ? y : [y];
            let A = L.reduce(o, {});
            !1 === w && (A = {});
            const { prevResolvedValues: B = {} } = g,
              P = { ...B, ...A },
              Z = (t) => {
                (S = !0), l.delete(t), (g.needsAnimating[t] = !0);
              };
            for (const t in P) {
              const e = A[t],
                n = B[t];
              d.hasOwnProperty(t) ||
                (e !== n
                  ? (0, v.C)(e) && (0, v.C)(n)
                    ? !m(e, n) || M
                      ? Z(t)
                      : (g.protectedKeys[t] = !0)
                    : void 0 !== e
                    ? Z(t)
                    : l.add(t)
                  : void 0 !== e && l.has(t)
                  ? Z(t)
                  : (g.protectedKeys[t] = !0));
            }
            (g.prevProp = y),
              (g.prevResolvedValues = A),
              g.isActive && (d = { ...d, ...A }),
              r && t.blockInitialAnimation && (S = !1),
              S &&
                !k &&
                u.push(
                  ...L.map((t) => ({
                    animation: t,
                    options: { type: h, ...i },
                  }))
                );
          }
          if (l.size) {
            const e = {};
            l.forEach((n) => {
              const r = t.getBaseTarget(n);
              void 0 !== r && (e[n] = r);
            }),
              u.push({ animation: e });
          }
          let h = Boolean(u.length);
          return (
            r && !1 === s.initial && !t.manuallyAnimateOnMount && (h = !1),
            (r = !1),
            h ? e(u) : Promise.resolve()
          );
        }
        return {
          animateChanges: i,
          setActive: function (e, r, o) {
            var a;
            if (n[e].isActive === r) return Promise.resolve();
            null === (a = t.variantChildren) ||
              void 0 === a ||
              a.forEach((t) => {
                var n;
                return null === (n = t.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(e, r);
              }),
              (n[e].isActive = r);
            const s = i(o, e);
            for (const t in n) n[t].protectedKeys = {};
            return s;
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: () => n,
        };
      }
      function E(t, e) {
        return "string" === typeof e ? e !== t : !!Array.isArray(e) && !m(e, t);
      }
      function S(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      const L = (t) => (e) => (t(e), null),
        A = {
          animation: L(({ visualElement: t, animate: e }) => {
            t.animationState || (t.animationState = M(t)),
              (0, p.H)(e) && (0, c.useEffect)(() => e.subscribe(t), [e]);
          }),
          exit: L((t) => {
            const { custom: e, visualElement: n } = t,
              [r, o] = (function () {
                const t = (0, c.useContext)(h.O);
                if (null === t) return [!0, null];
                const { isPresent: e, onExitComplete: n, register: r } = t,
                  o = (0, c.useId)();
                return (
                  (0, c.useEffect)(() => r(o), []),
                  !e && n ? [!1, () => n && n(o)] : [!0]
                );
              })(),
              i = (0, c.useContext)(h.O);
            (0, c.useEffect)(() => {
              n.isPresent = r;
              const t =
                n.animationState &&
                n.animationState.setActive(g.Exit, !r, {
                  custom: (i && i.custom) || e,
                });
              t && !r && t.then(o);
            }, [r]);
          }),
        };
      function B(t, e, n, r = { passive: !0 }) {
        return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
      }
      function P(t, e, n, r) {
        (0, c.useEffect)(() => {
          const o = t.current;
          if (n && o) return B(o, e, n, r);
        }, [t, e, n, r]);
      }
      function Z(t) {
        return !!t.touches;
      }
      const T = { pageX: 0, pageY: 0 };
      function O(t, e = "page") {
        const n = t.touches[0] || t.changedTouches[0] || T;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function V(t, e = "page") {
        return { x: t[e + "X"], y: t[e + "Y"] };
      }
      const R = (t, e = !1) => {
        const n = (e) =>
          t(
            e,
            (function (t, e = "page") {
              return { point: Z(t) ? O(t, e) : V(t, e) };
            })(e)
          );
        return e
          ? ((r = n),
            (t) => {
              const e = t instanceof MouseEvent;
              (!e || (e && 0 === t.button)) && r(t);
            })
          : n;
      };
      var N = n(11741);
      const z = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        _ = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function I(t) {
        return N.j && null === window.onpointerdown
          ? t
          : N.j && null === window.ontouchstart
          ? _[t]
          : N.j && null === window.onmousedown
          ? z[t]
          : t;
      }
      function j(t, e, n, r) {
        return B(t, I(e), R(n, "pointerdown" === e), r);
      }
      function F(t, e, n, r) {
        return P(t, I(e), n && R(n, "pointerdown" === e), r);
      }
      function H(t) {
        let e = null;
        return () => {
          const n = () => {
            e = null;
          };
          return null === e && ((e = t), n);
        };
      }
      const $ = H("dragHorizontal"),
        D = H("dragVertical");
      function W() {
        const t = (function (t) {
          let e = !1;
          if ("y" === t) e = D();
          else if ("x" === t) e = $();
          else {
            const t = $(),
              n = D();
            t && n
              ? (e = () => {
                  t(), n();
                })
              : (t && t(), n && n());
          }
          return e;
        })(!0);
        return !t || (t(), !1);
      }
      function U(t, e, n) {
        return (r, o) => {
          (function (t) {
            return "undefined" !== typeof PointerEvent &&
              t instanceof PointerEvent
              ? !("mouse" !== t.pointerType)
              : t instanceof MouseEvent;
          })(r) &&
            !W() &&
            (t.animationState && t.animationState.setActive(g.Hover, e),
            n && n(r, o));
        };
      }
      const X = (t, e) => !!e && (t === e || X(t, e.parentElement));
      var q = n(65411),
        Y = n(83624);
      var K = n(49304),
        G = n(16034);
      const Q = new WeakMap(),
        J = new WeakMap(),
        tt = (t) => {
          const e = Q.get(t.target);
          e && e(t);
        },
        et = (t) => {
          t.forEach(tt);
        };
      function nt(t, e, n) {
        const r = (function ({ root: t, ...e }) {
          const n = t || document;
          J.has(n) || J.set(n, {});
          const r = J.get(n),
            o = JSON.stringify(e);
          return (
            r[o] || (r[o] = new IntersectionObserver(et, { root: t, ...e })),
            r[o]
          );
        })(e);
        return (
          Q.set(t, n),
          r.observe(t),
          () => {
            Q.delete(t), r.unobserve(t);
          }
        );
      }
      const rt = { some: 0, all: 1 };
      function ot(
        t,
        e,
        n,
        { root: r, margin: o, amount: i = "some", once: a }
      ) {
        (0, c.useEffect)(() => {
          if (!t || !n.current) return;
          const s = {
            root: null === r || void 0 === r ? void 0 : r.current,
            rootMargin: o,
            threshold: "number" === typeof i ? i : rt[i],
          };
          return nt(n.current, s, (t) => {
            const { isIntersecting: r } = t;
            if (e.isInView === r) return;
            if (((e.isInView = r), a && !r && e.hasEnteredView)) return;
            r && (e.hasEnteredView = !0),
              n.animationState && n.animationState.setActive(g.InView, r);
            const o = n.getProps(),
              i = r ? o.onViewportEnter : o.onViewportLeave;
            i && i(t);
          });
        }, [t, r, o, i]);
      }
      function it(t, e, n, { fallback: r = !0 }) {
        (0, c.useEffect)(() => {
          t &&
            r &&
            ("production" !== K.O &&
              (0, G.O)(
                !1,
                "IntersectionObserver not available on this device. whileInView animations will trigger on mount."
              ),
            requestAnimationFrame(() => {
              e.hasEnteredView = !0;
              const { onViewportEnter: t } = n.getProps();
              t && t(null),
                n.animationState && n.animationState.setActive(g.InView, !0);
            }));
        }, [t]);
      }
      const at = {
        inView: L(function ({
          visualElement: t,
          whileInView: e,
          onViewportEnter: n,
          onViewportLeave: r,
          viewport: o = {},
        }) {
          const i = (0, c.useRef)({ hasEnteredView: !1, isInView: !1 });
          let a = Boolean(e || n || r);
          o.once && i.current.hasEnteredView && (a = !1),
            ("undefined" === typeof IntersectionObserver ? it : ot)(
              a,
              i.current,
              t,
              o
            );
        }),
        tap: L(function ({
          onTap: t,
          onTapStart: e,
          onTapCancel: n,
          whileTap: r,
          visualElement: o,
        }) {
          const i = t || e || n || r,
            a = (0, c.useRef)(!1),
            s = (0, c.useRef)(null),
            u = { passive: !(e || t || n || h) };
          function l() {
            s.current && s.current(), (s.current = null);
          }
          function d() {
            return (
              l(),
              (a.current = !1),
              o.animationState && o.animationState.setActive(g.Tap, !1),
              !W()
            );
          }
          function f(e, r) {
            d() && (X(o.current, e.target) ? t && t(e, r) : n && n(e, r));
          }
          function p(t, e) {
            d() && n && n(t, e);
          }
          function h(t, n) {
            l(),
              a.current ||
                ((a.current = !0),
                (s.current = (0, Y.z)(
                  j(window, "pointerup", f, u),
                  j(window, "pointercancel", p, u)
                )),
                o.animationState && o.animationState.setActive(g.Tap, !0),
                e && e(t, n));
          }
          F(o, "pointerdown", i ? h : void 0, u), (0, q.z)(l);
        }),
        focus: L(function ({ whileFocus: t, visualElement: e }) {
          const { animationState: n } = e;
          P(
            e,
            "focus",
            t
              ? () => {
                  n && n.setActive(g.Focus, !0);
                }
              : void 0
          ),
            P(
              e,
              "blur",
              t
                ? () => {
                    n && n.setActive(g.Focus, !1);
                  }
                : void 0
            );
        }),
        hover: L(function ({
          onHoverStart: t,
          onHoverEnd: e,
          whileHover: n,
          visualElement: r,
        }) {
          F(r, "pointerenter", t || n ? U(r, !0, t) : void 0, { passive: !t }),
            F(r, "pointerleave", e || n ? U(r, !1, e) : void 0, {
              passive: !e,
            });
        }),
      };
      var st = n(38057),
        ct = n(57630),
        ut = n(94714),
        lt = n(50189),
        dt = n(34242),
        ft = n(2728);
      function pt(t, e) {
        return (function ({ top: t, left: e, right: n, bottom: r }) {
          return { x: { min: e, max: n }, y: { min: t, max: r } };
        })(
          (function (t, e) {
            if (!e) return t;
            const n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var ht = n(5759),
        vt = n(9340);
      function mt(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      const gt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function yt(t, e, n = 1) {
        (0, vt.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        const [r, o] = (function (t) {
          const e = gt.exec(t);
          if (!e) return [,];
          const [, n, r] = e;
          return [n, r];
        })(t);
        if (!r) return;
        const i = window.getComputedStyle(e).getPropertyValue(r);
        return i ? i.trim() : mt(o) ? yt(o, e, n + 1) : o;
      }
      var bt = n(56440),
        xt = n(61649),
        wt = n(96190);
      const Ct = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        kt = (t) => Ct.has(t),
        Mt = (t, e) => {
          t.set(e, !1), t.set(e);
        },
        Et = (t) => t === xt.Rx || t === wt.px;
      var St;
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(St || (St = {}));
      const Lt = (t, e) => parseFloat(t.split(", ")[e]),
        At =
          (t, e) =>
          (n, { transform: r }) => {
            if ("none" === r || !r) return 0;
            const o = r.match(/^matrix3d\((.+)\)$/);
            if (o) return Lt(o[1], e);
            {
              const e = r.match(/^matrix\((.+)\)$/);
              return e ? Lt(e[1], t) : 0;
            }
          },
        Bt = new Set(["x", "y", "z"]),
        Pt = ut._.filter((t) => !Bt.has(t));
      const Zt = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: At(4, 13),
          y: At(5, 14),
        },
        Tt = (t, e, n = {}, r = {}) => {
          (e = { ...e }), (r = { ...r });
          const o = Object.keys(e).filter(kt);
          let i = [],
            a = !1;
          const s = [];
          if (
            (o.forEach((o) => {
              const c = t.getValue(o);
              if (!t.hasValue(o)) return;
              let u = n[o],
                l = (0, bt.C)(u);
              const d = e[o];
              let f;
              if ((0, v.C)(d)) {
                const t = d.length,
                  e = null === d[0] ? 1 : 0;
                (u = d[e]), (l = (0, bt.C)(u));
                for (let n = e; n < t; n++)
                  f
                    ? (0, vt.k)(
                        (0, bt.C)(d[n]) === f,
                        "All keyframes must be of the same type"
                      )
                    : ((f = (0, bt.C)(d[n])),
                      (0, vt.k)(
                        f === l || (Et(l) && Et(f)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else f = (0, bt.C)(d);
              if (l !== f)
                if (Et(l) && Et(f)) {
                  const t = c.get();
                  "string" === typeof t && c.set(parseFloat(t)),
                    "string" === typeof d
                      ? (e[o] = parseFloat(d))
                      : Array.isArray(d) &&
                        f === wt.px &&
                        (e[o] = d.map(parseFloat));
                } else
                  (null === l || void 0 === l ? void 0 : l.transform) &&
                  (null === f || void 0 === f ? void 0 : f.transform) &&
                  (0 === u || 0 === d)
                    ? 0 === u
                      ? c.set(f.transform(u))
                      : (e[o] = l.transform(d))
                    : (a ||
                        ((i = (function (t) {
                          const e = [];
                          return (
                            Pt.forEach((n) => {
                              const r = t.getValue(n);
                              void 0 !== r &&
                                (e.push([n, r.get()]),
                                r.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (a = !0)),
                      s.push(o),
                      (r[o] = void 0 !== r[o] ? r[o] : e[o]),
                      Mt(c, d));
            }),
            s.length)
          ) {
            const n = s.indexOf("height") >= 0 ? window.pageYOffset : null,
              o = ((t, e, n) => {
                const r = e.measureViewportBox(),
                  o = e.current,
                  i = getComputedStyle(o),
                  { display: a } = i,
                  s = {};
                "none" === a &&
                  e.setStaticValue("display", t.display || "block"),
                  n.forEach((t) => {
                    s[t] = Zt[t](r, i);
                  }),
                  e.render();
                const c = e.measureViewportBox();
                return (
                  n.forEach((n) => {
                    const r = e.getValue(n);
                    Mt(r, s[n]), (t[n] = Zt[n](c, i));
                  }),
                  t
                );
              })(e, t, s);
            return (
              i.length &&
                i.forEach(([e, n]) => {
                  t.getValue(e).set(n);
                }),
              t.render(),
              N.j && null !== n && window.scrollTo({ top: n }),
              { target: o, transitionEnd: r }
            );
          }
          return { target: e, transitionEnd: r };
        };
      function Ot(t, e, n, r) {
        return ((t) => Object.keys(t).some(kt))(e)
          ? Tt(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      const Vt = (t, e, n, r) => {
        const o = (function (t, { ...e }, n) {
          const r = t.current;
          if (!(r instanceof Element)) return { target: e, transitionEnd: n };
          n && (n = { ...n }),
            t.values.forEach((t) => {
              const e = t.get();
              if (!mt(e)) return;
              const n = yt(e, r);
              n && t.set(n);
            });
          for (const o in e) {
            const t = e[o];
            if (!mt(t)) continue;
            const i = yt(t, r);
            i && ((e[o] = i), n && void 0 === n[o] && (n[o] = t));
          }
          return { target: e, transitionEnd: n };
        })(t, e, r);
        return Ot(t, (e = o.target), n, (r = o.transitionEnd));
      };
      var Rt = n(30404),
        Nt = n(9442);
      var zt = n(51804);
      const _t = { current: null },
        It = { current: !1 };
      var jt = n(65985),
        Ft = n(33234),
        Ht = n(12490),
        $t = n(40406),
        Dt = n(7504);
      var Wt = n(79432);
      const Ut = Object.keys(Nt.A),
        Xt = Ut.length,
        qt = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "Unmount",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      const Yt = ["initial", ...w],
        Kt = Yt.length;
      class Gt extends class {
        constructor(
          { parent: t, props: e, reducedMotionConfig: n, visualState: r },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.isPresent = !0),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => Rt.Z_.render(this.render, !1, !0));
          const { latestValues: i, renderState: a } = r;
          (this.latestValues = i),
            (this.baseTarget = { ...i }),
            (this.initialValues = e.initial ? { ...i } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.isControllingVariants = (0, Dt.G)(e)),
            (this.isVariantNode = (0, Dt.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(t && t.current));
          const { willChange: s, ...c } = this.scrapeMotionValuesFromProps(e);
          for (const u in c) {
            const t = c[u];
            void 0 !== i[u] &&
              (0, $t.i)(t) &&
              (t.set(i[u], !1), (0, Ht.L)(s) && s.add(u));
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {};
        }
        mount(t) {
          var e;
          (this.current = t),
            this.projection && this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree =
                null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            It.current ||
              (function () {
                if (((It.current = !0), N.j))
                  if (window.matchMedia) {
                    const t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (_t.current = t.matches);
                    t.addListener(e), e();
                  } else _t.current = !1;
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || _t.current)),
            this.parent && this.parent.children.add(this),
            this.setProps(this.props);
        }
        unmount() {
          var t, e, n;
          null === (t = this.projection) || void 0 === t || t.unmount(),
            Rt.qY.update(this.notifyUpdate),
            Rt.qY.render(this.render),
            this.valueSubscriptions.forEach((t) => t()),
            null === (e = this.removeFromVariantTree) ||
              void 0 === e ||
              e.call(this),
            null === (n = this.parent) ||
              void 0 === n ||
              n.children.delete(this);
          for (const r in this.events) this.events[r].clear();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          const n = ut.G.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && Rt.Z_.update(this.notifyUpdate, !1, !0),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            o = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            r(), o();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures(t, e, n, r, o, i) {
          const a = [];
          "production" !== K.O &&
            n &&
            e &&
            (0, vt.k)(
              !1,
              "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
            );
          for (let s = 0; s < Xt; s++) {
            const e = Ut[s],
              { isEnabled: n, Component: r } = Nt.A[e];
            n(t) &&
              r &&
              a.push(
                (0, c.createElement)(r, { key: e, ...t, visualElement: this })
              );
          }
          if (!this.projection && o) {
            this.projection = new o(
              r,
              this.latestValues,
              this.parent && this.parent.projection
            );
            const {
              layoutId: e,
              layout: n,
              drag: a,
              dragConstraints: s,
              layoutScroll: c,
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: Boolean(a) || (s && (0, zt.I)(s)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" === typeof n ? n : "both",
              initialPromotionConfig: i,
              layoutScroll: c,
            });
          }
          return a;
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        setProps(t) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.props = t);
          for (let e = 0; e < qt.length; e++) {
            const n = qt[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            const r = t["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          this.prevMotionValues = (function (t, e, n) {
            const { willChange: r } = e;
            for (const o in e) {
              const i = e[o],
                a = n[o];
              if ((0, $t.i)(i)) t.addValue(o, i), (0, Ht.L)(r) && r.add(o);
              else if ((0, $t.i)(a))
                t.addValue(o, (0, Ft.B)(i, { owner: t })),
                  (0, Ht.L)(r) && r.remove(o);
              else if (a !== i)
                if (t.hasValue(o)) {
                  const e = t.getValue(o);
                  !e.hasAnimated && e.set(i);
                } else {
                  const e = t.getStaticValue(o);
                  t.addValue(o, (0, Ft.B)(void 0 !== e ? e : i));
                }
            }
            for (const o in n) void 0 === e[o] && t.removeValue(o);
            return e;
          })(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          var e;
          return null === (e = this.props.variants) || void 0 === e
            ? void 0
            : e[t];
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          var t;
          return this.isVariantNode
            ? this
            : null === (t = this.parent) || void 0 === t
            ? void 0
            : t.getClosestVariantNode();
        }
        getVariantContext(t = !1) {
          var e, n;
          if (t)
            return null === (e = this.parent) || void 0 === e
              ? void 0
              : e.getVariantContext();
          if (!this.isControllingVariants) {
            const t =
              (null === (n = this.parent) || void 0 === n
                ? void 0
                : n.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          const r = {};
          for (let o = 0; o < Kt; o++) {
            const t = Yt[o],
              e = this.props[t];
            ((0, b.$)(e) || !1 === e) && (r[t] = e);
          }
          return r;
        }
        addVariantChild(t) {
          var e;
          const n = this.getClosestVariantNode();
          if (n)
            return (
              null === (e = n.variantChildren) || void 0 === e || e.add(t),
              () => n.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          this.hasValue(t) && this.removeValue(t),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()),
            this.bindToMotionValue(t, e);
        }
        removeValue(t) {
          var e;
          this.values.delete(t),
            null === (e = this.valueSubscriptions.get(t)) ||
              void 0 === e ||
              e(),
            this.valueSubscriptions.delete(t),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = (0, Ft.B)(e, { owner: this })), this.addValue(t, n)),
            n
          );
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current
            ? this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          const { initial: n } = this.props,
            r =
              "string" === typeof n || "object" === typeof n
                ? null === (e = (0, Wt.o)(this.props, n)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (n && void 0 !== r) return r;
          const o = this.getBaseTargetFromProps(this.props, t);
          return void 0 === o || (0, $t.i)(o)
            ? void 0 !== this.initialValues[t] && void 0 === r
              ? void 0
              : this.baseTarget[t]
            : o;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new jt.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          var n;
          null === (n = this.events[t]) || void 0 === n || n.notify(...e);
        }
      } {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          var n;
          return null === (n = t.style) || void 0 === n ? void 0 : n[e];
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...n },
          { transformValues: r },
          o
        ) {
          let i = (0, ht.P$)(n, t || {}, this);
          if ((r && (e && (e = r(e)), n && (n = r(n)), i && (i = r(i))), o)) {
            (0, ht.GJ)(this, n, i);
            const t = Vt(this, n, i, e);
            (e = t.transitionEnd), (n = t.target);
          }
          return { transition: t, transitionEnd: e, ...n };
        }
      }
      class Qt extends Gt {
        readValueFromInstance(t, e) {
          if (ut.G.has(e)) {
            const t = (0, ft.A)(e);
            return (t && t.default) || 0;
          }
          {
            const r = ((n = t), window.getComputedStyle(n)),
              o = ((0, ct.o)(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" === typeof o ? o.trim() : o;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return pt(t, e);
        }
        build(t, e, n, r) {
          (0, st.r)(t, e, n, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t) {
          return (0, lt.U)(t);
        }
        renderInstance(t, e, n, r) {
          (0, dt.N)(t, e, n, r);
        }
      }
      var Jt = n(16832),
        te = n(85415),
        ee = n(93193),
        ne = n(77302),
        re = n(68504),
        oe = n(79854);
      class ie extends Gt {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          var n;
          return ut.G.has(e)
            ? (null === (n = (0, ft.A)(e)) || void 0 === n
                ? void 0
                : n.default) || 0
            : ((e = ne.s.has(e) ? e : (0, ee.D)(e)), t.getAttribute(e));
        }
        measureInstanceViewportBox() {
          return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        }
        scrapeMotionValuesFromProps(t) {
          return (0, Jt.U)(t);
        }
        build(t, e, n, r) {
          (0, te.i)(t, e, n, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(t, e, n, r) {
          (0, re.K)(t, e, n, r);
        }
        mount(t) {
          (this.isSVGTag = (0, oe.a)(t.tagName)), super.mount(t);
        }
      }
      var ae = n(62627);
      const se = {
        renderer: (t, e) =>
          (0, ae.q)(t)
            ? new ie(e, { enableHardwareAcceleration: !1 })
            : new Qt(e, { enableHardwareAcceleration: !0 }),
        ...A,
        ...at,
      };
      var ce = n(16014),
        ue = n(91492),
        le = n(96681);
      function de({ children: t, isValidProp: e, ...n }) {
        e && (0, ue.K)(e),
          ((n = { ...(0, c.useContext)(ce._), ...n }).isStatic = (0, le.h)(
            () => n.isStatic
          ));
        const r = (0, c.useMemo)(
          () => n,
          [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
        );
        return c.createElement(ce._.Provider, { value: r }, t);
      }
      var fe = n(36919),
        pe = n(50154),
        he = n(23807);
      var ve = () => {
          const t = (0, pe.b9)(he.f);
          (0, c.useEffect)(() => {
            n.e(678)
              .then(n.bind(n, 87321))
              .then(() => t(!0));
          }, []);
        },
        me = n(5632),
        ge = n(19462);
      var ye = () => {
          const t = (0, me.useRouter)(),
            e = (0, pe.b9)(ge.E);
          (0, c.useEffect)(() => {
            const n = () => {
              e(!0), t.events.off("routeChangeStart", n);
            };
            return (
              t.events.on("routeChangeStart", n),
              () => {
                t.events.off("routeChangeStart", n);
              }
            );
          }, []);
        },
        be = n(11198),
        xe = n(62908),
        we = n(93983),
        Ce = n(81021),
        ke = n(83485),
        Me = n(25675),
        Ee = n(75619),
        Se = n(29568),
        Le = n(36998),
        Ae = n(69656),
        Be = n(59473),
        Pe = n(76542),
        Ze = n(2411),
        Te = n(46896),
        Oe = n(41496),
        Ve = n(65591);
      const Re = (0, be.Z)("li", { target: "e4uz3z20" })(
          "width:100%;padding:4px 4px 0;&:first-of-type{margin-top:8px;}&:last-of-type{padding-bottom:4px;}"
        ),
        Ne = (0, be.Z)(Oe.Z, { target: "e4uz3z21" })(
          "position:relative;display:block;width:100%;color:var(--midnightPurple);> span{display:flex;align-items:center;justify-content:center;text-align:center;width:100%;padding:8px 0;border-radius:32px;background-color:",
          (t) => {
            let { hasIndicator: e } = t;
            return e ? "var(--lilac)" : "transparent";
          },
          ";}"
        );
      var ze = (t) => {
        let {
          href: e,
          parentLabel: n,
          label: o,
          isChildOfNav: i,
          isChildOfSubNav: a,
        } = t;
        const { pathname: s } = (0, me.useRouter)(),
          c = s === e,
          [{ hoveredOrFocussedSubItem: u }, l] = (0, pe.KO)(Se.cU),
          d = u === o,
          f = (c && !(u && !d)) || d,
          p = () => {
            l((t) => ({
              ...t,
              hoveredOrFocussedItem: n,
              hoveredOrFocussedSubItem: o,
            }));
          },
          h = (t) => {
            l((e) => ({
              ...e,
              ...(i(t.relatedTarget) ? {} : { hoveredOrFocussedItem: "" }),
              ...(a(t.relatedTarget) ? {} : { hoveredOrFocussedSubItem: "" }),
            }));
          };
        return (0, r.tZ)(Re, {
          children: (0, r.tZ)(Ne, {
            href: e,
            className: "custom-focus",
            onFocus: p,
            onBlur: h,
            onMouseEnter: p,
            onMouseLeave: h,
            onClick: h,
            hasIndicator: f,
            children: (0, r.tZ)(Ve.xv, { as: "span", size: "s", children: o }),
          }),
        });
      };
      const _e = { type: "spring", stiffness: 100, damping: 15 },
        Ie = { active: { scale: 1 }, default: { scale: 0 } },
        je = {
          active: { x: "14px" },
          default: { x: "0px", transition: { delay: 0.1 } },
        },
        Fe = { open: { height: "auto" }, closed: { height: 0 } },
        He = (0, be.Z)("li", { target: "e1xdgtk40" })("position:relative;"),
        $e = (0, be.Z)(Oe.Z, { target: "e1xdgtk41" })(
          "position:relative;display:flex;align-items:center;padding:8px 38px;border-radius:32px;"
        ),
        De = (0, be.Z)(we.m.span, { target: "e1xdgtk42" })(
          "position:absolute;top:0;left:24px;bottom:0;display:flex;align-items:center;svg{width:20px;height:auto;}"
        ),
        We = (0, be.Z)(we.m.span, { target: "e1xdgtk43" })(
          "display:inline-block;"
        ),
        Ue = (0, be.Z)(we.m.ul, { target: "e1xdgtk44" })(
          'position:absolute;display:flex;flex-direction:column;width:100%;overflow:hidden;border-radius:21px;&:after{content:"";position:absolute;inset:0;top:8px;background-color:var(--themeSubNavBgColor);border-radius:21px;z-index:-1;}'
        );
      var Xe = (t) => {
        let {
          href: e,
          icon: n,
          label: o,
          subItems: i,
          animateIndicator: a,
          isChildOfNav: s,
        } = t;
        const { ref: u, width: l = 0 } = (0, Pe.Z)(),
          d = (0, Te.Z)(l),
          [f, { left: p }] = (0, Le.Z)(),
          h = (0, pe.Dv)(Se.uY),
          v = (0, c.useRef)(),
          { pathname: m } = (0, me.useRouter)(),
          g = m === e,
          [{ hoveredOrFocussedItem: y, isIndicatorVisible: b }, x] = (0, pe.KO)(
            Se.cU
          ),
          w = (0, Te.Z)(y),
          C = (0, Te.Z)(b),
          k = y === o,
          M = !!i && k,
          E = (g && !(y && !k)) || k,
          S = (0, Te.Z)(E),
          L = (0, Me._)(),
          A = (0, c.useCallback)(
            (t, e) => {
              var n, r;
              L.stop();
              const o = h.findIndex((t) => {
                  let { label: e, href: n } = t;
                  return w ? e === w : n === m;
                }),
                i = h.findIndex((t) => {
                  let { label: e, href: n } = t;
                  return y ? e === y : n === m;
                }),
                a = (0, Ze.Hg)(o, i);
              null === (n = (r = L)[e ? "set" : "start"]) ||
                void 0 === n ||
                n.call(
                  r,
                  (function () {
                    return {
                      dark: {
                        color: "var(--midnightPurple)",
                        transition: {
                          delay:
                            0.05 *
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0),
                          duration: 0.15,
                        },
                      },
                      default: {
                        color: "var(--themeNavLinkColor)",
                        transition: { delay: 0, duration: 0.15 },
                        transitionEnd: { color: "var(--themeNavLinkColor)" },
                      },
                    };
                  })(a)[t]
                );
            },
            [h, y, w, m, L]
          );
        (0, c.useEffect)(() => {
          (S === E && l === d) ||
            (E
              ? (l && a({ width: l, left: p }), A("dark", !C))
              : A("default", !b));
        }, [E, S, p, l, d, C, b, a, A]);
        const B = () => {
            x((t) => ({ ...t, hoveredOrFocussedItem: o }));
          },
          P = (t) => {
            s(t.relatedTarget) ||
              x((t) => ({ ...t, hoveredOrFocussedItem: "" }));
          },
          Z = (t) => {
            var e, n;
            return (
              (null === (e = t) || void 0 === e ? void 0 : e.nodeType) &&
              (null === (n = v.current) || void 0 === n
                ? void 0
                : n.contains(t))
            );
          },
          T = (0, c.useCallback)(
            (t) => {
              f(t), u(t);
            },
            [u, f]
          );
        return (0, r.BX)(He, {
          ref: T,
          children: [
            (0, r.tZ)($e, {
              href: e,
              onFocus: B,
              onBlur: P,
              onMouseEnter: B,
              onMouseLeave: P,
              className: "custom-focus",
              children: (0, r.BX)(we.m.span, {
                animate: L,
                children: [
                  (0, r.tZ)(De, {
                    variants: Ie,
                    initial: "default",
                    animate: E ? "active" : "default",
                    transition: _e,
                    children: (0, r.tZ)(ke.J, { type: n }),
                  }),
                  (0, r.tZ)(We, {
                    variants: je,
                    initial: "default",
                    animate: E ? "active" : "default",
                    transition: _e,
                    children: (0, r.tZ)(Ve.xv, {
                      as: "span",
                      size: "s",
                      children: o,
                    }),
                  }),
                ],
              }),
            }),
            i &&
              i.length > 0 &&
              (0, r.tZ)(Ue, {
                ref: v,
                variants: Fe,
                initial: "closed",
                animate: M ? "open" : "closed",
                transition: _e,
                onMouseLeave: () => {
                  x((t) => ({ ...t, hoveredOrFocussedSubItem: "" }));
                },
                children: i.map((t) => {
                  var e;
                  return (0, r.tZ)(
                    ze,
                    {
                      parentLabel: o,
                      isChildOfNav: s,
                      isChildOfSubNav: Z,
                      ...t,
                    },
                    null === (e = t) || void 0 === e ? void 0 : e.href
                  );
                }),
              }),
          ],
        });
      };
      const qe = { type: "spring", stiffness: 110, damping: 17 },
        Ye = (0, be.Z)("div", { target: "e12mjol50" })(
          "display:flex;justify-content:space-between;width:100%;max-width:var(--maxWidthContent);padding:24px 48px;margin:auto;",
          Ee.Nn.xl,
          "{display:none;}"
        ),
        Ke = (0, be.Z)("div", { target: "e12mjol51" })(
          "display:flex;gap:128px;",
          Ee.Nn.xxl,
          "{gap:6vw;}"
        ),
        Ge = (0, be.Z)(Be.Z, { target: "e12mjol52" })(
          "display:flex;align-items:center;border-radius:32px;color:var(--themeNavLinkColor);"
        ),
        Qe = (0, be.Z)(ke.J, { target: "e12mjol53" })(
          "width:auto;height:30px;"
        ),
        Je = (0, be.Z)("nav", { target: "e12mjol54" })(
          "position:relative;display:flex;align-items:center;> ul{display:flex;align-items:flex-start;}"
        ),
        tn = (0, be.Z)(we.m.span, { target: "e12mjol55" })(
          "position:absolute;top:4px;bottom:4px;left:0;width:100%;border-radius:32px;background-color:var(--lilac);z-index:-1;opacity:0;"
        );
      var en = () => {
          const { pathname: t } = (0, me.useRouter)(),
            [e, { left: n }] = (0, Le.Z)(),
            o = (0, pe.Dv)(Se.uY),
            i = (0, c.useRef)(),
            a = (0, Me._)(),
            s = o.find((e) => {
              let { href: n } = e;
              return t === n;
            }),
            [
              {
                hoveredOrFocussedItem: u,
                hoveredOrFocussedSubItem: l,
                isIndicatorVisible: d,
              },
              f,
            ] = (0, pe.KO)(Se.cU),
            p = (0, c.useCallback)(
              (t) => {
                const { width: e, left: r } = t,
                  o = r - n;
                a[d ? "start" : "set"]({ width: e, x: o }),
                  a.set({ opacity: 1 }),
                  f((t) => ({ ...t, isIndicatorVisible: !0 }));
              },
              [n, d, a, f]
            ),
            h = (0, c.useCallback)(() => {
              a.set({ opacity: 0 }),
                f((t) => ({ ...t, isIndicatorVisible: !1 }));
            }, [a, f]),
            v = (0, c.useCallback)(
              (t) => {
                a.set({ backgroundColor: t });
              },
              [a]
            );
          (0, c.useEffect)(() => {
            v(l ? "var(--themeSubNavBgColor)" : "var(--lilac)");
          }, [l, v]),
            (0, c.useEffect)(() => {
              s || u || h();
            }, [s, u, h]);
          const m = (t) => {
              var e, n;
              return (
                (null === (e = t) || void 0 === e ? void 0 : e.nodeType) &&
                (null === (n = i.current) || void 0 === n
                  ? void 0
                  : n.contains(t))
              );
            },
            g = (0, fe.fH)("navLogo", { viewport: "desktop" });
          return (0, r.BX)(Ye, {
            children: [
              (0, r.BX)(Ke, {
                children: [
                  (0, r.tZ)(Ge, {
                    href: "/",
                    onClickCapture: g,
                    children: (0, r.tZ)(Qe, { type: "logoFull" }),
                  }),
                  (0, r.BX)(Je, {
                    ref: e,
                    onMouseLeave: () => {
                      f((t) => ({
                        ...t,
                        hoveredOrFocussedItem: "",
                        hoveredOrFocussedSubItem: "",
                      }));
                    },
                    children: [
                      (0, r.tZ)("ul", {
                        ref: i,
                        children: o.map((t) => {
                          var e;
                          return (0, r.tZ)(
                            Xe,
                            { ...t, animateIndicator: p, isChildOfNav: m },
                            null === (e = t) || void 0 === e ? void 0 : e.href
                          );
                        }),
                      }),
                      (0, r.tZ)(tn, { animate: a, transition: qe }),
                    ],
                  }),
                ],
              }),
              (0, r.tZ)(Ae.Z, { href: "/download", children: "Connect" }),
            ],
          });
        },
        nn = n(27866),
        rn = n(65820);
      const on = {
          hidden: { scale: 0 },
          visible: { scale: 1, transition: { delay: 0.2 } },
        },
        an = {
          visible: { scale: 1, transition: { delay: 0.2 } },
          hidden: { scale: 0 },
        },
        sn = (0, be.Z)("button", { target: "e1qv8blz0" })(
          "position:relative;width:52px;height:52px;padding:16px;background-color:var(--white);border-radius:50%;",
          Ee.Nn.m,
          "{width:47px;height:47px;padding:13px;}"
        ),
        cn = (0, be.Z)("span", { target: "e1qv8blz1" })(
          "display:block;position:absolute;left:0;right:0;height:2px;width:20px;margin:auto;background-color:var(--black);border-radius:2px;"
        ),
        un = (0, be.Z)(we.m.span, { target: "e1qv8blz2" })(
          "display:inline-block;position:absolute;inset:0;span:nth-of-type(1){top:19px;",
          Ee.Nn.m,
          "{top:17px;}}span:nth-of-type(2){top:0;bottom:0;}span:nth-of-type(3){bottom:19px;",
          Ee.Nn.m,
          "{bottom:17px;}}"
        ),
        ln = (0, be.Z)(we.m.span, { target: "e1qv8blz3" })(
          "display:inline-block;position:absolute;inset:0;span{inset:0;}span:nth-of-type(1){transform:rotate(45deg);}span:nth-of-type(2){transform:rotate(-45deg);}"
        );
      var dn = (t) => {
        let { isNavOpen: e, onClick: n } = t;
        return (0, r.BX)(sn, {
          onClick: n,
          "aria-expanded": e,
          "aria-controls": "mobile-nav",
          title: e ? "Close menu" : "Open menu",
          children: [
            (0, r.BX)(un, {
              variants: on,
              initial: "visible",
              animate: e ? "hidden" : "visible",
              children: [
                (0, r.tZ)(cn, {}),
                (0, r.tZ)(cn, {}),
                (0, r.tZ)(cn, {}),
              ],
            }),
            (0, r.BX)(ln, {
              variants: an,
              initial: "hidden",
              animate: e ? "visible" : "hidden",
              children: [(0, r.tZ)(cn, {}), (0, r.tZ)(cn, {})],
            }),
          ],
        });
      };
      const fn = {
          open: {
            height: "auto",
            transition: { type: "spring", stiffness: 120, damping: 17 },
          },
          closed: {
            height: 0,
            transition: { type: "spring", stiffness: 300, damping: 32 },
          },
        },
        pn = (0, be.Z)("div", { target: "e18wg2hl0" })(
          "display:flex;justify-content:space-between;width:100%;padding:24px;",
          Ee.Nn.m,
          "{padding:12px 20px;}",
          Ee.wQ.xl,
          "{display:none;}"
        ),
        hn = (0, be.Z)("div", { target: "e18wg2hl1" })(
          "position:relative;display:flex;align-items:center;gap:8px;"
        ),
        vn = (0, be.Z)(Be.Z, { target: "e18wg2hl2" })(
          "display:flex;align-items:center;border-radius:32px;color:var(--themeNavLinkColor);"
        ),
        mn = (0, be.Z)(ke.J, { target: "e18wg2hl3" })(
          "width:auto;height:31px;",
          Ee.wQ.m,
          "{display:none;}"
        ),
        gn = (0, be.Z)(ke.J, { target: "e18wg2hl4" })(
          "width:auto;height:36px;",
          Ee.Nn.m,
          "{display:none;}"
        ),
        yn = (0, be.Z)("nav", { target: "e18wg2hl5" })(
          "position:absolute;top:calc(100% + 8px);right:0;width:197px;background-color:var(--white);border-radius:28px;overflow:hidden;",
          Ee.Nn.m,
          "{width:166px;border-radius:24px;}ul,li{display:flex;flex-direction:column;align-items:flex-start;gap:4px;width:100%;}"
        ),
        bn = (0, be.Z)("ul", { target: "e18wg2hl6" })("padding:6px;"),
        xn = (0, be.Z)("li", { target: "e18wg2hl7" })("width:100%;"),
        wn = (0, be.Z)(Be.Z, { target: "e18wg2hl8" })(
          "display:flex;align-items:center;gap:8px;width:100%;padding:16px 24px;background-color:",
          (t) => {
            let { isActive: e } = t;
            return e ? "var(--lilac)" : "transparent";
          },
          ";color:var(--midnightPurple);border-radius:32px;",
          Ee.Nn.m,
          "{padding:8px 24px;border-radius:18px;}svg{width:20px;height:20px;}"
        ),
        Cn = (0, be.Z)(Be.Z, { target: "e18wg2hl9" })(
          "display:inline-block;width:100%;padding:14px 24px 14px 52px;color:var(--midnightPurple);background-color:",
          (t) => {
            let { isActive: e } = t;
            return e ? "var(--lilac)" : "transparent";
          },
          ";border-radius:32px;font-size:14px;",
          Ee.Nn.m,
          "{padding:10px 24px 10px 52px;border-radius:18px;}"
        ),
        kn = (0, be.Z)(we.m.div, { target: "e18wg2hl10" })(
          "position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;opacity:0.3;background-color:var(--black);"
        );
      var Mn = () => {
        const t = (0, c.useRef)(),
          e = (0, pe.Dv)(Se.uY),
          { pathname: n } = (0, me.useRouter)(),
          [o, i] = (0, c.useState)(!1),
          a = (0, fe.fH)("navLogo", { viewport: "mobile" });
        return (
          (0, c.useEffect)(() => {
            const t = (t) => {
              "Escape" === t.key && i(!1);
            };
            return (
              document.addEventListener("keydown", t),
              () => {
                document.removeEventListener("keydown", t);
              }
            );
          }, []),
          (0, nn.Z)(t, () => i(!1)),
          (0, r.BX)(r.HY, {
            children: [
              (0, r.BX)(pn, {
                ref: t,
                children: [
                  (0, r.BX)(vn, {
                    href: "/",
                    onClick: () => i(!1),
                    onClickCapture: a,
                    children: [
                      (0, r.tZ)(mn, { type: "logo" }),
                      (0, r.tZ)(gn, { type: "logoFull" }),
                    ],
                  }),
                  (0, r.BX)(hn, {
                    children: [
                      (0, r.tZ)(Ae.Z, {
                        href: "/download",
                        children: "Download",
                      }),
                      (0, r.tZ)(dn, {
                        isNavOpen: o,
                        onClick: () => {
                          i((t) => !t);
                        },
                      }),
                      (0, r.tZ)(yn, {
                        id: "mobile-nav",
                        children: (0, r.tZ)(rn.M, {
                          children:
                            o &&
                            (0, r.tZ)(we.m.div, {
                              variants: fn,
                              initial: "closed",
                              animate: "open",
                              exit: "closed",
                              children: (0, r.tZ)(bn, {
                                children: e.map((t) => {
                                  let {
                                    href: e,
                                    label: o,
                                    icon: a,
                                    subItems: s,
                                  } = t;
                                  const c = n === e;
                                  return (0, r.BX)(
                                    xn,
                                    {
                                      children: [
                                        (0, r.BX)(wn, {
                                          href: e,
                                          isActive: c,
                                          onClick: () => i(!1),
                                          children: [
                                            (0, r.tZ)(ke.J, { type: a }),
                                            o,
                                          ],
                                        }),
                                        s &&
                                          s.length > 0 &&
                                          (0, r.tZ)("ul", {
                                            children: s.map((t) => {
                                              let { href: e, label: o } = t;
                                              const a = n === e;
                                              return (0, r.tZ)(
                                                "li",
                                                {
                                                  children: (0, r.tZ)(Cn, {
                                                    href: e,
                                                    isActive: a,
                                                    onClick: () => i(!1),
                                                    children: o,
                                                  }),
                                                },
                                                o
                                              );
                                            }),
                                          }),
                                      ],
                                    },
                                    o
                                  );
                                }),
                              }),
                            }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.tZ)(rn.M, {
                children:
                  o &&
                  (0, r.tZ)(kn, {
                    initial: { opacity: 0 },
                    animate: { opacity: 0.3 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.2 },
                  }),
              }),
            ],
          })
        );
      };
      const En = {
          hidden: { opacity: 0, transition: { duration: 0 } },
          visible: (t) => ({
            opacity: 1,
            transition:
              "instant" === t
                ? { duration: 0 }
                : { easeSinIn: xe.yx, duration: 0.25, delay: 1.8 },
          }),
        },
        Sn = (0, be.Z)(we.m.header, { target: "eeop6020" })(
          "position:absolute;top:0;left:0;right:0;z-index:10;"
        );
      var Ln = () => {
        const [t, e] = (0, Ce.Z)();
        return (0, r.BX)(Sn, {
          variants: En,
          custom: e,
          initial: "hidden",
          animate: t ? "visible" : "hidden",
          children: [(0, r.tZ)(en, {}), (0, r.tZ)(Mn, {})],
        });
      };
      var An = (0, s.iv)(
        '*,*:before,*:after{box-sizing:border-box;-webkit-tap-highlight-color:transparent;outline:none;}html{font-size:18px;background-color:var(--themeBgColor);color:var(--themeTextColor);transition:var(--themeTransition);scroll-behavior:smooth;}body{-webkit-font-smoothing:antialiased;position:relative;font-family:var(--phantomFont);font-feature-settings:"liga" on;hanging-punctuation:first;}a{border:none;color:inherit;text-decoration:none;user-select:none;}ul,ol{padding:0;margin:0;list-style-type:none;}button{background:transparent;border:none;outline:none;cursor:pointer;}.screenreader-only{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}.focus-visible:not(.custom-focus),*:focus-visible:not(.custom-focus){outline:4px solid var(--red);border-radius:32px;}.underline{text-decoration:underline;}'
      );
      var Bn = (0, s.iv)(
        '*:not(pre) > code[class*="language-"]{background:var(--dark3) !important;border-radius:8px;padding:4px;}pre[class*="language-"],code[class*="language-"]{font-size:14px !important;',
        Ee.Nn.m,
        '{font-size:12px !important;}}pre[class*="language-"]{padding:24px !important;margin:24px 0 !important;background:var(--dark3) !important;border-radius:16px !important;overflow:unset !important;overflow-wrap:break-word;',
        Ee.Nn.m,
        "{padding:16px !important;border-radius:8px !important;}}"
      );
      var Pn = (0, s.iv)(
        '/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense:none (public domain)\n*/\n\n  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,button,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,input{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;box-sizing:border-box;color:inherit;}/* HTML5 display-role reset for older browsers */\n  article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none;}table{border-collapse:collapse;border-spacing:0;}'
      );
      var Zn = (0, s.iv)(
        ':root{/* Colors */\n    --white:#fffdf8;--black:#1c1c1c;--purple:#ab9ff2;--lilac:#e2dffe;--yellow:#ffd13f;--blue:#4a87f2;--midnightPurple:#3c315b;--pink:#ffdadc;--green:#2ec08b;--moonYellow:#ffffc4;--red:#ff7243;--grey:#e8e6e2;--dark1:#161618;--dark3:#232326;--dark4:#28282c;--dark5:#2e2e32;--dark6:#34343a;--dark8:#5842c3;--dark9:#706f78;--dark10:#7e7d86;--dark11:#a09fa6;--dark12:#ededef;--light3:#f4f2f4;--light5:#e9e8ea;--light6:#e4e2e4;--light9:#908e96;--light10:#86848d;--darkViolet4:#2c2250;--darkViolet6:#392c72;--violet1:#fdfcfe;--violet3:#f5f2ff;--violet4:#ede9fe;--violet6:#d7cff9;--violet8:#aa99ec;--tomato:rgba(255,243,240,0.98);/* Themes */\n    --themeBgColor:var(--violet3);--themeTextColor:var(--black);--themeTitleColor:var(--midnightPurple);--themeSubNavBgColor:var(--violet1);--themeNavLinkColor:var(--midnightPurple);--themeNavLinkHoverColor:var(--midnightPurple);--themeFooterBgColor:var(--light3);--themeFooterInputColor:var(--white);--themeCardShadow:var(--light6);--themeCardTagBgColor:var(--white);--themeFooterButtonHoverColor:var(--black);--themeFooterButtonHoverBgColor:var(--dark12);--themeTagBgColor:var(--white);--themeTransition:"none";/* Grid */\n    --maxWidthContent:1728px;/* Spacings */\n    --spacingXXXS:4px;--spacingXXS:8px;--spacingXS:16px;--spacingS:24px;--spacingM:32px;--spacingL:48px;--spacingXL:64px;--spacingXXL:96px;--spacingXXXL:128px;/* Easings */\n    --snap:cubic-bezier(0,1,0.5,1);--easeOutCubic:cubic-bezier(0.215,0.61,0.355,1);--easeInOutCubic:cubic-bezier(0.645,0.045,0.355,1);--easeInCirc:cubic-bezier(0.6,0.04,0.98,0.335);--easeoutCirc:cubic-bezier(0.075,0.82,0.165,1);--easeInoutCirc:cubic-bezier(0.785,0.135,0.15,0.86);--easeInExpo:cubic-bezier(0.95,0.05,0.795,0.035);--easeOutExpo:cubic-bezier(0.19,1,0.22,1);--easeInOutExpo:cubic-bezier(1,0,0,1);--easeInQuad:cubic-bezier(0.55,0.085,0.68,0.53);--easeOutQuad:cubic-bezier(0.25,0.46,0.45,0.94);--easeInOutQuad:cubic-bezier(0.455,0.03,0.515,0.955);--easeInQuart:cubic-bezier(0.895,0.03,0.685,0.22);--easeOutQuart:cubic-bezier(0.165,0.84,0.44,1);--easeInOutQuart:cubic-bezier(0.77,0,0.175,1);--easeInQuint:cubic-bezier(0.755,0.05,0.855,0.06);--easeOutQuint:cubic-bezier(0.23,1,0.32,1);--easeInOutQuint:cubic-bezier(0.86,0,0.07,1);--easeInsine:cubic-bezier(0.47,0,0.745,0.715);--easeOutsine:cubic-bezier(0.39,0.575,0.565,1);--easeInOutsine:cubic-bezier(0.445,0.05,0.55,0.95);--easeInBack:cubic-bezier(0.6,-0.28,0.735,0.045);--easeOutVack:cubic-bezier(0.175,0.885,0.32,1.275);--easeInOutBack:cubic-bezier(0.68,-0.55,0.265,1.55);/* Zindex */\n    --zTop:99;}'
      );
      var Tn = function (t) {
        let { Component: e, pageProps: n } = t;
        return (
          ye(),
          ve(),
          (0, r.tZ)(fe.ng, {
            children: (0, r.tZ)(d, {
              strict: !0,
              features: se,
              children: (0, r.BX)(de, {
                isValidProp: a.Z,
                children: [
                  (0, r.tZ)(s.xB, {
                    styles: [
                      (0, s.iv)(
                        ":root{--phantomFont:",
                        i().style.fontFamily,
                        ";}"
                      ),
                    ],
                  }),
                  (0, r.tZ)(s.xB, {
                    styles: [(0, s.iv)(Pn, " ", Zn, " ", An, " ", Bn)],
                  }),
                  (0, r.tZ)(Ln, {}),
                  (0, r.tZ)(e, { ...n }),
                ],
              }),
            }),
          })
        );
      };
    },
    86074: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          PrefetchKind: function () {
            return u;
          },
          ACTION_REFRESH: function () {
            return n;
          },
          ACTION_NAVIGATE: function () {
            return r;
          },
          ACTION_RESTORE: function () {
            return o;
          },
          ACTION_SERVER_PATCH: function () {
            return i;
          },
          ACTION_PREFETCH: function () {
            return a;
          },
          ACTION_FAST_REFRESH: function () {
            return s;
          },
          ACTION_SERVER_ACTION: function () {
            return c;
          },
        });
      const n = "refresh",
        r = "navigate",
        o = "restore",
        i = "server-patch",
        a = "prefetch",
        s = "fast-refresh",
        c = "server-action";
      var u;
      !(function (t) {
        (t.AUTO = "auto"), (t.FULL = "full"), (t.TEMPORARY = "temporary");
      })(u || (u = {})),
        ("function" === typeof e.default ||
          ("object" === typeof e.default && null !== e.default)) &&
          "undefined" === typeof e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    18904: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      n(8314);
      function r(t, e, n, r) {
        return !1;
      }
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6850: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      const r = n(43219)._(n(2784)),
        o = n(96436),
        i = n(68944),
        a = n(42612),
        s = n(38119),
        c = n(92265),
        u = n(63981),
        l = n(29950),
        d = n(12544),
        f = n(18904),
        p = n(33890),
        h = n(86074),
        v = new Set();
      function m(t, e, n, r, o, a) {
        if (!a && !(0, i.isLocalURL)(e)) return;
        if (!r.bypassPrefetchedCheck) {
          const o =
            e +
            "%" +
            n +
            "%" +
            ("undefined" !== typeof r.locale
              ? r.locale
              : "locale" in t
              ? t.locale
              : void 0);
          if (v.has(o)) return;
          v.add(o);
        }
        const s = a ? t.prefetch(e, o) : t.prefetch(e, n, r);
        Promise.resolve(s).catch((t) => {
          0;
        });
      }
      function g(t) {
        return "string" === typeof t ? t : (0, a.formatUrl)(t);
      }
      const y = r.default.forwardRef(function (t, e) {
        let n;
        const {
          href: a,
          as: v,
          children: y,
          prefetch: b = null,
          passHref: x,
          replace: w,
          shallow: C,
          scroll: k,
          locale: M,
          onClick: E,
          onMouseEnter: S,
          onTouchStart: L,
          legacyBehavior: A = !1,
          ...B
        } = t;
        (n = y),
          !A ||
            ("string" !== typeof n && "number" !== typeof n) ||
            (n = r.default.createElement("a", null, n));
        const P = r.default.useContext(u.RouterContext),
          Z = r.default.useContext(l.AppRouterContext),
          T = null != P ? P : Z,
          O = !P,
          V = !1 !== b,
          R = null === b ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL;
        const { href: N, as: z } = r.default.useMemo(() => {
            if (!P) {
              const t = g(a);
              return { href: t, as: v ? g(v) : t };
            }
            const [t, e] = (0, o.resolveHref)(P, a, !0);
            return { href: t, as: v ? (0, o.resolveHref)(P, v) : e || t };
          }, [P, a, v]),
          _ = r.default.useRef(N),
          I = r.default.useRef(z);
        let j;
        A && (j = r.default.Children.only(n));
        const F = A ? j && "object" === typeof j && j.ref : e,
          [H, $, D] = (0, d.useIntersection)({ rootMargin: "200px" }),
          W = r.default.useCallback(
            (t) => {
              (I.current === z && _.current === N) ||
                (D(), (I.current = z), (_.current = N)),
                H(t),
                F &&
                  ("function" === typeof F
                    ? F(t)
                    : "object" === typeof F && (F.current = t));
            },
            [z, F, N, D, H]
          );
        r.default.useEffect(() => {
          T && $ && V && m(T, N, z, { locale: M }, { kind: R }, O);
        }, [z, N, $, M, V, null == P ? void 0 : P.locale, T, O, R]);
        const U = {
          ref: W,
          onClick(t) {
            A || "function" !== typeof E || E(t),
              A &&
                j.props &&
                "function" === typeof j.props.onClick &&
                j.props.onClick(t),
              T &&
                (t.defaultPrevented ||
                  (function (t, e, n, o, a, s, c, u, l, d) {
                    const { nodeName: f } = t.currentTarget;
                    if (
                      "A" === f.toUpperCase() &&
                      ((function (t) {
                        const e = t.currentTarget.getAttribute("target");
                        return (
                          (e && "_self" !== e) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which)
                        );
                      })(t) ||
                        (!l && !(0, i.isLocalURL)(n)))
                    )
                      return;
                    t.preventDefault();
                    const p = () => {
                      const t = null == c || c;
                      "beforePopState" in e
                        ? e[a ? "replace" : "push"](n, o, {
                            shallow: s,
                            locale: u,
                            scroll: t,
                          })
                        : e[a ? "replace" : "push"](o || n, {
                            forceOptimisticNavigation: !d,
                            scroll: t,
                          });
                    };
                    l ? r.default.startTransition(p) : p();
                  })(t, T, N, z, w, C, k, M, O, V));
          },
          onMouseEnter(t) {
            A || "function" !== typeof S || S(t),
              A &&
                j.props &&
                "function" === typeof j.props.onMouseEnter &&
                j.props.onMouseEnter(t),
              T &&
                ((!V && O) ||
                  m(
                    T,
                    N,
                    z,
                    { locale: M, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: R },
                    O
                  ));
          },
          onTouchStart(t) {
            A || "function" !== typeof L || L(t),
              A &&
                j.props &&
                "function" === typeof j.props.onTouchStart &&
                j.props.onTouchStart(t),
              T &&
                ((!V && O) ||
                  m(
                    T,
                    N,
                    z,
                    { locale: M, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: R },
                    O
                  ));
          },
        };
        if ((0, s.isAbsoluteUrl)(z)) U.href = z;
        else if (!A || x || ("a" === j.type && !("href" in j.props))) {
          const t =
              "undefined" !== typeof M ? M : null == P ? void 0 : P.locale,
            e =
              (null == P ? void 0 : P.isLocaleDomain) &&
              (0, f.getDomainLocale)(
                z,
                t,
                null == P ? void 0 : P.locales,
                null == P ? void 0 : P.domainLocales
              );
          U.href =
            e ||
            (0, p.addBasePath)(
              (0, c.addLocale)(z, t, null == P ? void 0 : P.defaultLocale)
            );
        }
        return A
          ? r.default.cloneElement(j, U)
          : r.default.createElement("a", { ...B, ...U }, n);
      });
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    12544: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      const r = n(2784),
        o = n(29282),
        i = "function" === typeof IntersectionObserver,
        a = new Map(),
        s = [];
      function c(t, e, n) {
        const {
          id: r,
          observer: o,
          elements: i,
        } = (function (t) {
          const e = { root: t.root || null, margin: t.rootMargin || "" },
            n = s.find((t) => t.root === e.root && t.margin === e.margin);
          let r;
          if (n && ((r = a.get(n)), r)) return r;
          const o = new Map(),
            i = new IntersectionObserver((t) => {
              t.forEach((t) => {
                const e = o.get(t.target),
                  n = t.isIntersecting || t.intersectionRatio > 0;
                e && n && e(n);
              });
            }, t);
          return (
            (r = { id: e, observer: i, elements: o }), s.push(e), a.set(e, r), r
          );
        })(n);
        return (
          i.set(t, e),
          o.observe(t),
          function () {
            if ((i.delete(t), o.unobserve(t), 0 === i.size)) {
              o.disconnect(), a.delete(r);
              const t = s.findIndex(
                (t) => t.root === r.root && t.margin === r.margin
              );
              t > -1 && s.splice(t, 1);
            }
          }
        );
      }
      function u(t) {
        let { rootRef: e, rootMargin: n, disabled: a } = t;
        const s = a || !i,
          [u, l] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          f = (0, r.useCallback)((t) => {
            d.current = t;
          }, []);
        (0, r.useEffect)(() => {
          if (i) {
            if (s || u) return;
            const t = d.current;
            if (t && t.tagName) {
              return c(t, (t) => t && l(t), {
                root: null == e ? void 0 : e.current,
                rootMargin: n,
              });
            }
          } else if (!u) {
            const t = (0, o.requestIdleCallback)(() => l(!0));
            return () => (0, o.cancelIdleCallback)(t);
          }
        }, [s, n, e, u, d.current]);
        const p = (0, r.useCallback)(() => {
          l(!1);
        }, []);
        return [f, u, p];
      }
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    83485: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return it;
        },
      });
      var r = n(52903),
        o = n(31872),
        i = n(94532),
        a = n(50678),
        s = n(91187),
        c = n(35149),
        u = n(30238),
        l = n(27300),
        d = n(41005),
        f = n(10444),
        p = n(43446),
        h = n(35581),
        v = n(67474),
        m = n(88523),
        g = n(3705),
        y = n(45605),
        b = n(26066),
        x = n(50202),
        w = n(22429),
        C = n(77913),
        k = n(42636),
        M = n(1223),
        E = n(92348),
        S = n(54983),
        L = n(43614),
        A = n(1859),
        B = n(38588),
        P = n(82641),
        Z = n(88310),
        T = n(29525),
        O = n(29474),
        V = n(21962),
        R = n(62529),
        N = n(30071),
        z = n(96678),
        _ = n(10616),
        I = n(52780),
        j = n(39305),
        F = n(36914),
        H = n(40770),
        $ = n(85438),
        D = n(34045);
      var W = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          fill: "none",
          className: e,
          viewBox: "0 0 24 24",
          children: [
            (0, r.tZ)("title", { children: "Authentication" }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M2.879 2.879A3 3 0 0 1 5 2h3a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0V5a3 3 0 0 1 .879-2.121ZM15 3a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1ZM3 15a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1Zm18 0a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1ZM10.151 13.223c0 .647.663 1.416 1.816 1.416 1.152 0 1.815-.77 1.815-1.416h2c0 2.03-1.86 3.416-3.815 3.416-1.956 0-3.816-1.385-3.816-3.416h2Z",
              fill: "currentColor",
            }),
            (0, r.tZ)("path", {
              d: "M16.208 10.606a1.354 1.354 0 1 1-2.707 0 1.354 1.354 0 0 1 2.707 0ZM10.499 10.606a1.354 1.354 0 1 1-2.708 0 1.354 1.354 0 0 1 2.708 0Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      var U = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          fill: "none",
          className: e,
          viewBox: "0 0 24 24",
          children: [
            (0, r.tZ)("title", { children: "Bug" }),
            (0, r.tZ)("path", {
              d: "M16.7071 3.70711C17.0976 3.31658 17.0976 2.68342 16.7071 2.29289C16.3166 1.90237 15.6834 1.90237 15.2929 2.29289L16.7071 3.70711ZM8.70711 2.29289C8.31658 1.90237 7.68342 1.90237 7.29289 2.29289C6.90237 2.68342 6.90237 3.31658 7.29289 3.70711L8.70711 2.29289ZM10.0342 20.6802L9.71757 21.6288L10.0342 20.6802ZM5.46286 10.1332L6.41079 10.4517L5.46286 10.1332ZM13.9658 20.6802L14.2824 21.6288L13.9658 20.6802ZM18.5371 10.1332L17.5892 10.4517L18.5371 10.1332ZM14.7071 5.70711L16.7071 3.70711L15.2929 2.29289L13.2929 4.29289L14.7071 5.70711ZM12 5C13.6569 5 15 6.34315 15 8H17C17 5.23858 14.7614 3 12 3V5ZM9 8C9 6.34315 10.3431 5 12 5V3C9.23858 3 7 5.23858 7 8H9ZM9.1366 10H14.8634V8H9.1366V10ZM7 8C7 9.30616 8.16326 10 9.1366 10V8C9.10077 8 9.06756 7.99379 9.03983 7.98403C9.01183 7.97419 8.99482 7.9627 8.98719 7.95631C8.98007 7.95035 8.98431 7.95173 8.99052 7.96429C8.99767 7.97876 9 7.99328 9 8H7ZM15 8C15 7.99328 15.0023 7.97876 15.0095 7.96429C15.0157 7.95173 15.0199 7.95035 15.0128 7.95631C15.0052 7.9627 14.9882 7.97419 14.9602 7.98403C14.9324 7.99379 14.8992 8 14.8634 8V10C15.8367 10 17 9.30616 17 8H15ZM10.7071 4.29289L8.70711 2.29289L7.29289 3.70711L9.29289 5.70711L10.7071 4.29289ZM10 8H7.16576V10H10V8ZM4.51493 9.81474C4.18145 10.8074 4 11.8814 4 13H6C6 12.098 6.14627 11.239 6.41079 10.4517L4.51493 9.81474ZM4 13C4 17.0065 6.34442 20.503 9.71757 21.6288L10.3508 19.7317C7.90585 18.9156 6 16.2701 6 13H4ZM13 19V11H11V19H13ZM9.71757 21.6288C10.6187 21.9295 11.4808 21.6692 12.0804 21.1275C12.6608 20.603 13 19.8212 13 19H11C11 19.2834 10.8801 19.5165 10.7396 19.6435C10.6182 19.7531 10.4974 19.7806 10.3508 19.7317L9.71757 21.6288ZM7.16576 8C6.06996 8 4.91788 8.61538 4.51493 9.81474L6.41079 10.4517C6.48811 10.2216 6.75356 10 7.16576 10V8ZM10 10C10.5523 10 11 10.4477 11 11H13C13 9.34315 11.6569 8 10 8V10ZM14 10H16.8342V8H14V10ZM17.5892 10.4517C17.8537 11.239 18 12.098 18 13H20C20 11.8814 19.8186 10.8074 19.4851 9.81474L17.5892 10.4517ZM18 13C18 16.2701 16.0941 18.9156 13.6492 19.7317L14.2824 21.6288C17.6556 20.503 20 17.0065 20 13H18ZM13.6492 19.7317C13.5026 19.7806 13.3818 19.7531 13.2604 19.6435C13.1199 19.5165 13 19.2834 13 19H11C11 19.8212 11.3392 20.603 11.9196 21.1275C12.5192 21.6692 13.3813 21.9295 14.2824 21.6288L13.6492 19.7317ZM16.8342 10C17.2464 10 17.5119 10.2216 17.5892 10.4517L19.4851 9.81474C19.0821 8.61538 17.93 8 16.8342 8V10ZM14 8C12.3431 8 11 9.34315 11 11H13C13 10.4477 13.4477 10 14 10V8Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      var X = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          fill: "none",
          className: e,
          viewBox: "0 0 24 24",
          children: [
            (0, r.tZ)("title", { children: "Database" }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "m4 5 .003.015a.296.296 0 0 0 .032.066c.043.07.13.174.291.301.33.26.87.539 1.626.79C7.454 6.674 9.592 7 12 7s4.546-.327 6.048-.827c.756-.252 1.296-.53 1.626-.79.162-.128.248-.232.29-.302a.293.293 0 0 0 .033-.066L20 5l-.003-.015a.293.293 0 0 0-.032-.066 1.235 1.235 0 0 0-.291-.301c-.33-.26-.87-.539-1.626-.79C16.546 3.326 14.408 3 12 3s-4.546.327-6.048.827c-.756.252-1.296.53-1.626.79a1.236 1.236 0 0 0-.29.302.296.296 0 0 0-.033.066L4 5Zm1.32-3.07C7.075 1.345 9.437 1 12 1c2.563 0 4.925.345 6.68.93.873.29 1.651.66 2.232 1.117C21.482 3.496 22 4.148 22 5c0 .852-.519 1.504-1.088 1.953-.581.458-1.36.826-2.232 1.117-1.755.585-4.117.93-6.68.93-2.563 0-4.925-.345-6.68-.93-.873-.29-1.651-.66-2.232-1.117C2.518 6.504 2 5.852 2 5c0-.852.519-1.504 1.088-1.953.581-.458 1.36-.826 2.232-1.117ZM3 11a1 1 0 0 1 1 1c0 .002 0 .007.003.018a.298.298 0 0 0 .033.067c.042.07.127.173.288.3.328.26.864.537 1.618.789 1.497.5 3.635.826 6.058.826s4.561-.326 6.058-.826c.754-.252 1.29-.53 1.618-.789.16-.127.246-.23.288-.3a.298.298 0 0 0 .033-.067A.061.061 0 0 0 20 12a1 1 0 1 1 2 0c0 .85-.513 1.502-1.082 1.953-.579.459-1.355.827-2.226 1.118-1.753.585-4.115.929-6.692.929s-4.939-.344-6.692-.929c-.87-.29-1.647-.66-2.226-1.118C2.513 13.502 2 12.849 2 12a1 1 0 0 1 1-1Z",
              fill: "currentColor",
            }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3 4a1 1 0 0 1 1 1v14c0 .002 0 .007.003.018a.298.298 0 0 0 .033.067c.042.07.127.173.288.3.328.26.864.537 1.618.789 1.497.5 3.635.826 6.058.826s4.561-.326 6.058-.826c.754-.252 1.29-.53 1.618-.789.16-.127.246-.23.288-.3a.298.298 0 0 0 .033-.067A.061.061 0 0 0 20 19V5a1 1 0 0 1 2 0v14c0 .85-.513 1.502-1.082 1.953-.579.459-1.355.827-2.226 1.118-1.753.585-4.115.929-6.692.929s-4.939-.344-6.692-.929c-.87-.29-1.647-.66-2.226-1.118C2.513 20.502 2 19.849 2 19V5a1 1 0 0 1 1-1Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      var q = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          fill: "none",
          className: e,
          viewBox: "0 0 24 24",
          children: [
            (0, r.tZ)("title", { children: "Edit" }),
            (0, r.tZ)("path", {
              d: "M19.673 12.91c-.291-.437-.364-.728-.364-.946 0-.219.11-.546.364-.946.29-.4.654-.873 1.127-1.309 1.345-1.382 1.891-3.09 1.491-4.69-.4-1.6-1.71-2.874-3.564-3.383-1.563-.436-3.2-.545-4.909-.545C6.91 1.09.982 5.818.982 12s5.927 10.91 12.836 10.91c1.673 0 3.346-.11 4.91-.546 1.854-.546 3.163-1.819 3.563-3.382.4-1.6-.11-3.31-1.49-4.691-.437-.51-.837-.946-1.128-1.382Zm.69 5.526c-.218.8-.908 1.6-2.181 1.964-1.273.364-2.727.473-4.327.473-6.182 0-10.873-4.146-10.873-8.946 0-4.763 4.69-8.945 10.873-8.945 1.6 0 3.054.109 4.327.473 1.273.363 1.963 1.163 2.182 1.963.218.837 0 1.855-.946 2.8-.473.51-.982 1.055-1.382 1.637-.363.581-.69 1.272-.69 2.036s.327 1.454.69 2.036c.4.582.873 1.128 1.382 1.637.946 1.018 1.164 2.072.946 2.872Z",
              fill: "currentColor",
            }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.927 13.927c1.091 0 2-.872 2-2 0-1.127-.872-2-2-2-1.127 0-2 .873-2 2 0 1.128.91 2 2 2ZM12.91 17.927c1.09 0 2-.872 2-2 0-1.09-.874-2-2-2-1.092 0-2 .873-2 2 0 1.091.908 2 2 2ZM12.91 9.964c1.09 0 2-.873 2-2 0-1.128-.874-2-2-2-1.092 0-2 .872-2 2 0 1.127.908 2 2 2Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      var Y = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          className: e,
          fill: "none",
          viewBox: "0 0 108 93",
          children: [
            (0, r.tZ)("title", { children: "Logo Phantom" }),
            (0, r.tZ)("path", {
              d: "M0.5 78.1789C0.5 90.2265 6.7065 93 13.1613 93C26.8155 93 37.077 80.6058 43.2007 70.8118C42.4559 72.9786 42.0422 75.1454 42.0422 77.2255C42.0422 82.946 45.1868 87.0196 51.3933 87.0196C59.9169 87.0196 69.0197 79.219 73.7367 70.8118C73.4056 72.0252 73.2401 73.1519 73.2401 74.192C73.2401 78.1789 75.3917 80.6924 79.7777 80.6924C93.5975 80.6924 107.5 55.124 107.5 32.7623C107.5 15.3411 99.0592 0 77.8743 0C40.6354 0 0.5 47.4967 0.5 78.1789ZM65.0476 30.8555C65.0476 26.5219 67.3647 23.4884 70.7575 23.4884C74.0677 23.4884 76.3848 26.5219 76.3848 30.8555C76.3848 35.1892 74.0677 38.3094 70.7575 38.3094C67.3647 38.3094 65.0476 35.1892 65.0476 30.8555ZM82.7568 30.8555C82.7568 26.5219 85.0739 23.4884 88.4668 23.4884C91.7769 23.4884 94.094 26.5219 94.094 30.8555C94.094 35.1892 91.7769 38.3094 88.4668 38.3094C85.0739 38.3094 82.7568 35.1892 82.7568 30.8555Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      var K = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          className: e,
          fill: "none",
          viewBox: "0 0 152 30",
          children: [
            (0, r.tZ)("title", { children: "Logo Phantom" }),
            (0, r.tZ)("path", {
              d: "M0 25.219C0 29.105 2.065 30 4.213 30c4.544 0 7.96-3.998 9.997-7.157-.248.698-.386 1.397-.386 2.069 0 1.845 1.047 3.159 3.112 3.159 2.837 0 5.866-2.517 7.436-5.229-.11.392-.165.755-.165 1.09 0 1.287.716 2.098 2.175 2.098 4.6 0 9.226-8.248 9.226-15.462 0-5.62-2.81-10.568-9.86-10.568C13.357 0 0 15.322 0 25.219ZM21.48 9.953c0-1.398.771-2.376 1.9-2.376 1.102 0 1.873.978 1.873 2.376s-.77 2.405-1.872 2.405c-1.13 0-1.9-1.007-1.9-2.405Zm5.894 0c0-1.398.77-2.376 1.9-2.376 1.101 0 1.872.978 1.872 2.376s-.77 2.405-1.872 2.405c-1.13 0-1.9-1.007-1.9-2.405ZM41.115 26.953h4.13v-3.775c0-1.985-.137-2.908-.936-4.725l.44-.224c1.323 3.048 3.278 4.25 5.316 4.25 3.277 0 5.893-2.908 5.893-7.41 0-4.305-2.396-7.464-5.838-7.464-2.038 0-4.048 1.174-5.37 4.222l-.44-.224c.55-1.202.935-2.404.935-3.55h-4.13v18.9Zm4.13-11.911c0-1.845 1.378-3.886 3.415-3.886 1.653 0 3.002 1.37 3.002 3.858 0 2.46-1.294 3.914-3.03 3.914-1.927 0-3.386-1.985-3.386-3.886ZM57.25 22.032h4.132V17.11c0-3.467 1.211-5.927 3.47-5.927 1.431 0 1.872.978 1.872 3.41v7.438h4.131v-8.108c0-4.418-1.57-6.32-4.572-6.32-3.056 0-4.048 2.098-5.232 4.502l-.44-.251c.605-1.51.77-2.46.77-3.803V3.327h-4.13v18.705ZM76.757 22.479c2.617 0 4.186-1.79 5.288-3.914l.468.251c-.44 1.007-.854 2.21-.854 3.216h4.049v-7.605c0-4.53-1.873-6.822-6.252-6.822-4.296 0-6.416 2.18-6.83 4.473l3.966.7c.138-1.203 1.102-2.014 2.644-2.014s2.423.783 2.423 1.734c0 .95-.908 1.398-3.332 1.426-3.58.056-6.224 1.37-6.224 4.166 0 2.292 1.79 4.389 4.654 4.389Zm-.55-4.641c0-2.265 3.442-.671 5.37-2.405v.532c0 1.985-1.763 3.41-3.415 3.41-.936 0-1.955-.39-1.955-1.537ZM87.56 22.032h4.13V17.11c0-3.467 1.212-5.927 3.47-5.927 1.432 0 1.873.978 1.873 3.41v7.438h4.131v-8.108c0-4.418-1.57-6.32-4.572-6.32-3.056 0-4.048 2.098-5.232 4.502l-.44-.251c.605-1.51.77-2.46.77-3.803h-4.13v13.98ZM112.328 22.088V18.62c-.882.307-3.333.838-3.333-1.202v-5.956h3.663v-3.41h-3.663V4.305l-4.158 1.258v2.488h-2.478v3.411h2.478l.028 6.291c0 4.67 4.103 5.34 7.463 4.334ZM120.988 22.479c4.185 0 7.38-3.243 7.38-7.465 0-4.194-3.195-7.41-7.38-7.41-4.186 0-7.408 3.216-7.408 7.41 0 4.222 3.222 7.465 7.408 7.465Zm-3.14-7.437c0-2.32 1.294-3.942 3.14-3.942 1.845 0 3.111 1.621 3.111 3.942 0 2.32-1.266 3.942-3.111 3.942-1.846 0-3.14-1.622-3.14-3.942ZM129.729 22.032h4.13V17.11c0-3.607 1.019-5.927 2.837-5.927 1.184 0 1.68.95 1.68 3.41v7.438h4.131V17.11c0-3.383 1.101-5.927 2.836-5.927 1.157 0 1.68 1.09 1.68 3.41v7.438h4.131v-8.108c0-4.446-1.432-6.32-4.241-6.32-2.919 0-4.076 2.014-4.847 4.446l-.468-.251c.413-1.454.165-2.237-.331-2.852-.716-.895-1.735-1.342-3.029-1.342-2.589 0-3.718 1.845-4.709 4.417l-.441-.28c.468-1.257.771-2.264.771-3.69h-4.13v13.98Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      var G = (t) => {
        let { className: e } = t;
        return (0, r.tZ)("svg", {
          className: e,
          width: "200",
          height: "180",
          viewBox: "0 0 200 180",
          fill: "none",
          children: (0, r.tZ)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M89.1138 112.613C83.1715 121.719 73.2139 133.243 59.9641 133.243C53.7005 133.243 47.6777 130.665 47.6775 119.464C47.677 90.9369 86.6235 46.777 122.76 46.7764C143.317 46.776 151.509 61.0389 151.509 77.2361C151.509 98.0264 138.018 121.799 124.608 121.799C120.352 121.799 118.264 119.462 118.264 115.756C118.264 114.789 118.424 113.741 118.746 112.613C114.168 120.429 105.335 127.683 97.0638 127.683C91.0411 127.683 87.9898 123.895 87.9897 118.576C87.9897 116.642 88.3912 114.628 89.1138 112.613ZM115.936 68.7103C112.665 68.7161 110.435 71.4952 110.442 75.4598C110.449 79.4244 112.689 82.275 115.96 82.2693C119.152 82.2636 121.381 79.4052 121.374 75.4405C121.367 71.4759 119.128 68.7047 115.936 68.7103ZM133.287 68.6914C130.016 68.6972 127.786 71.4763 127.793 75.4409C127.8 79.4055 130.039 82.2561 133.311 82.2504C136.503 82.2448 138.732 79.3863 138.725 75.4216C138.718 71.457 136.479 68.6858 133.287 68.6914Z",
            fill: "currentColor",
          }),
        });
      };
      var Q = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          fill: "none",
          className: e,
          viewBox: "0 0 24 24",
          children: [
            (0, r.tZ)("title", { children: "PhantomFilled" }),
            (0, r.tZ)("path", {
              d: "M3.603 21.32c2.808 0 4.918-2.442 6.177-4.37a3.765 3.765 0 0 0-.239 1.263c0 1.127.647 1.929 1.923 1.929 1.753 0 3.624-1.537 4.594-3.193a2.44 2.44 0 0 0-.102.666c0 .785.442 1.28 1.344 1.28 2.841 0 5.7-5.036 5.7-9.441C23 6.022 21.265 3 16.909 3 9.252 3 1 12.356 1 18.4c0 2.374 1.276 2.92 2.603 2.92ZM14.271 9.078c0-.853.477-1.451 1.174-1.451.681 0 1.157.598 1.157 1.451 0 .854-.476 1.469-1.157 1.469-.697 0-1.174-.615-1.174-1.469Zm3.642 0c0-.853.476-1.451 1.174-1.451.68 0 1.157.598 1.157 1.451 0 .854-.477 1.469-1.157 1.469-.698 0-1.174-.615-1.174-1.469Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      var J = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          fill: "none",
          className: e,
          viewBox: "0 0 24 24",
          children: [
            (0, r.tZ)("title", { children: "PhantomStroke" }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.382 20.354c-1.07.875-2.505 1.635-4.252 1.635-.77 0-1.883-.15-2.805-.975C1.361 20.153 1 18.916 1 17.6c0-3.226 2.094-6.853 4.728-9.551C8.387 5.324 12.125 3 16.016 3c2.287 0 4.135.818 5.37 2.314C22.572 6.748 23 8.57 23 10.28c0 2.192-.698 4.472-1.738 6.232-.524.886-1.18 1.717-1.957 2.347-.771.625-1.785 1.146-2.969 1.146-.426 0-.894-.07-1.342-.262a7.415 7.415 0 0 1-.132.099c-.87.635-2.018 1.183-3.3 1.183-.765 0-1.536-.2-2.18-.67Zm-1.184-1.616a9.22 9.22 0 0 0 1.24-1.291c.279-.348.528-.7.745-1.034-.125.35-.195.698-.195 1.034 0 .677.286 1.21.85 1.447.205.085.446.131.724.131.663 0 1.347-.269 1.969-.692a6.117 6.117 0 0 0 1.79-1.92 1.998 1.998 0 0 0-.084.545c0 .642.362 1.048 1.1 1.048.118 0 .236-.011.354-.032C18.893 17.588 21 13.701 21 10.28 21 7.473 19.58 5 16.016 5 9.752 5 3 12.655 3 17.6c0 1.942 1.044 2.39 2.13 2.39 1.178 0 2.207-.527 3.068-1.252Z",
              fill: "currentColor",
            }),
            (0, r.tZ)("path", {
              d: "M14.819 8.786c-.57 0-.96.489-.96 1.187 0 .698.39 1.201.96 1.201.557 0 .946-.502.946-1.2 0-.7-.39-1.188-.946-1.188ZM17.799 8.786c-.571 0-.961.489-.961 1.187 0 .698.39 1.201.96 1.201.557 0 .947-.502.947-1.2 0-.7-.39-1.188-.947-1.188Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      var tt = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          fill: "none",
          className: e,
          viewBox: "0 0 24 24",
          children: [
            (0, r.tZ)("title", { children: "Star" }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 1a1 1 0 0 1 .998.935c.147 2.25.283 3.889.532 5.124.248 1.226.585 1.92 1.038 2.373.454.454 1.145.791 2.371 1.04 1.235.25 2.875.384 5.126.53a1 1 0 0 1 0 1.996c-2.247.146-3.885.28-5.119.53-1.225.249-1.918.586-2.372 1.04-.455.455-.792 1.148-1.041 2.374-.251 1.235-.388 2.874-.535 5.123a1 1 0 0 1-1.996 0c-.147-2.25-.283-3.889-.532-5.123-.248-1.227-.585-1.92-1.038-2.374-.453-.454-1.145-.791-2.371-1.04-1.234-.25-2.875-.384-5.126-.53a1 1 0 0 1 0-1.996c2.247-.146 3.885-.28 5.119-.53 1.225-.249 1.918-.586 2.372-1.04.455-.455.792-1.148 1.041-2.374.251-1.235.388-2.874.535-5.123A1 1 0 0 1 12 1ZM8.997 11.999c.717.272 1.335.64 1.85 1.156.515.516.883 1.136 1.155 1.854.273-.719.641-1.339 1.158-1.855.514-.513 1.13-.88 1.843-1.153-.717-.272-1.335-.64-1.85-1.156-.515-.516-.883-1.136-1.155-1.854-.273.719-.641 1.339-1.158 1.855-.514.513-1.13.88-1.843 1.153Z",
              fill: "currentColor",
            }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19 1a1 1 0 0 1 .998.935c.045.683.083 1.127.147 1.444.03.15.061.241.085.295a.334.334 0 0 0 .036.061.328.328 0 0 0 .06.035c.054.024.144.055.295.085.316.064.76.103 1.444.147a1 1 0 0 1 0 1.996c-.683.044-1.126.083-1.442.147-.15.03-.241.06-.295.085-.047.021-.06.035-.06.036-.002 0-.015.013-.037.06a1.436 1.436 0 0 0-.085.296c-.065.316-.103.76-.148 1.443a1 1 0 0 1-1.996 0c-.045-.683-.083-1.127-.147-1.444a1.433 1.433 0 0 0-.085-.295.334.334 0 0 0-.036-.061.329.329 0 0 0-.06-.035 1.43 1.43 0 0 0-.295-.085c-.316-.064-.76-.103-1.444-.147a1 1 0 0 1 0-1.996c.682-.044 1.126-.083 1.442-.147.15-.03.241-.06.295-.085a.206.206 0 0 0 .06-.036c.002 0 .015-.013.037-.06.024-.055.055-.145.085-.296.065-.316.103-.76.148-1.443A1 1 0 0 1 19 1Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      var et = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          fill: "none",
          className: e,
          viewBox: "0 0 24 24",
          children: [
            (0, r.tZ)("title", { children: "Swap" }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.299 1.284a.993.993 0 0 1 1.404 0l3.972 3.971a.993.993 0 0 1 0 1.405l-3.972 3.971a.993.993 0 0 1-1.404-1.404l3.27-3.27-3.27-3.27a.993.993 0 0 1 0-1.403Z",
              fill: "currentColor",
            }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.072 6.95a2.979 2.979 0 0 0-2.98 2.98v1.985a.993.993 0 1 1-1.985 0V9.93a4.965 4.965 0 0 1 4.965-4.964h13.9a.993.993 0 1 1 0 1.985h-13.9ZM7.774 13.199a.993.993 0 0 1 0 1.404l-3.27 3.27 3.27 3.27a.993.993 0 1 1-1.405 1.404l-3.971-3.972a.993.993 0 0 1 0-1.404l3.971-3.972a.993.993 0 0 1 1.405 0Z",
              fill: "currentColor",
            }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.973 10.922c.548 0 .992.445.992.993v1.986a4.965 4.965 0 0 1-4.964 4.965H3.1a.993.993 0 1 1 0-1.986H17a2.979 2.979 0 0 0 2.98-2.979v-1.986c0-.548.444-.993.992-.993Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      var nt = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          fill: "none",
          className: e,
          viewBox: "0 0 24 24",
          children: [
            (0, r.tZ)("title", { children: "User" }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z",
              fill: "currentColor",
            }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.185 14.678c0 .646.663 1.415 1.815 1.415s1.815-.769 1.815-1.415h2c0 2.03-1.86 3.415-3.815 3.415-1.955 0-3.815-1.385-3.815-3.415h2Z",
              fill: "currentColor",
            }),
            (0, r.tZ)("path", {
              d: "M16.242 12.06a1.354 1.354 0 1 1-2.708 0 1.354 1.354 0 0 1 2.708 0ZM10.532 12.06a1.354 1.354 0 1 1-2.707 0 1.354 1.354 0 0 1 2.707 0Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      var rt = (t) => {
        let { className: e } = t;
        return (0, r.BX)("svg", {
          fill: "none",
          className: e,
          viewBox: "0 0 24 24",
          children: [
            (0, r.tZ)("title", { children: "Wallet" }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.599 12c0-2.723 2.388-4.779 5.138-4.779h6.883c1.222 0 2.38.932 2.38 2.26v5.037c0 1.327-1.158 2.259-2.38 2.259h-6.883c-2.75 0-5.138-2.055-5.138-4.778Zm5.138-2.779c-1.821 0-3.138 1.328-3.138 2.778s1.317 2.778 3.138 2.778h6.883a.445.445 0 0 0 .3-.109c.065-.06.08-.115.08-.15V9.48c0-.035-.015-.09-.08-.15a.444.444 0 0 0-.3-.11h-6.883Z",
              fill: "currentColor",
            }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4.353 5C3.52 5 3 5.6 3 6.148v11.704C3 18.4 3.52 19 4.353 19h12.834c.834 0 1.353-.6 1.353-1.148v-2.074h2v2.074c0 1.821-1.59 3.148-3.353 3.148H4.353C2.59 21 1 19.673 1 17.852V6.148C1 4.327 2.59 3 4.353 3h12.834c1.763 0 3.353 1.327 3.353 3.148v2.074h-2V6.148C18.54 5.6 18.02 5 17.187 5H4.353Z",
              fill: "currentColor",
            }),
            (0, r.tZ)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.4 12a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z",
              fill: "currentColor",
            }),
          ],
        });
      };
      const ot = {
          activity: (t) => {
            let { className: e } = t;
            return (0, r.BX)("svg", {
              fill: "none",
              className: e,
              viewBox: "0 0 24 24",
              children: [
                (0, r.tZ)("title", { children: "Activity" }),
                (0, r.tZ)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9 22a1 1 0 0 0 .949-.684L15 6.162l2.051 6.154A1 1 0 0 0 18 13h4a1 1 0 1 0 0-2h-3.28L15.95 2.684a1 1 0 0 0-1.898 0L9 17.838l-2.051-6.154A1 1 0 0 0 6 11H2a1 1 0 1 0 0 2h3.28l2.771 8.316A1 1 0 0 0 9 22Z",
                  fill: "currentColor",
                }),
              ],
            });
          },
          arrowUp: i.i,
          arrowRight: a.R,
          arrowUpRight: o.T,
          authentication: W,
          bookmark: s.l,
          bug: U,
          check: u.U,
          chevronDown: l.b,
          chevronLeft: d.Y,
          chevronRight: f.T,
          close: V.q,
          database: X,
          discord: I.j,
          edit: q,
          facebook: p.B,
          file: z.t,
          filter: h.I,
          flag: v.M,
          globe: g.R,
          kanban: _.M,
          key: b.o,
          link: x.e,
          linkedin: D.B,
          listen: y.c,
          loader: w.d,
          lock: C.U,
          logo: Y,
          logoFull: K,
          logoLottie: G,
          mail: k.I,
          merge: m.u,
          message: M.I,
          moon: E.w,
          pause: S.R,
          phantomFilled: Q,
          phantomStroke: J,
          play: L.K,
          podcast: H.$,
          read: c.h,
          reddit: j.V,
          shield: A.b,
          star: tt,
          swap: et,
          thermometer: B.O,
          trending: P.Q,
          twitter: $.f,
          user: nt,
          volume2: T.l,
          volumeX: O.L,
          wallet: rt,
          watch: Z.H,
          xCircle: R.$,
          youtube: F.V,
          zap: N.W,
        },
        it = (t) => {
          let { type: e, className: n, ...o } = t;
          const i = ot[e];
          return e && !i
            ? (console.error(
                'Icon "'
                  .concat(e, '" not found. Check iconsMap and make sure that "')
                  .concat(e, '" is has a corresponding React Component.')
              ),
              (0, r.tZ)(r.HY, {}))
            : (0, r.tZ)(i, { className: n, ...o });
        };
    },
    40217: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__phantomFont_9d5ea3', '__phantomFont_Fallback_9d5ea3'",
        },
        className: "__className_9d5ea3",
      };
    },
    39097: function (t, e, n) {
      t.exports = n(6850);
    },
    5632: function (t, e, n) {
      t.exports = n(16244);
    },
    34406: function (t) {
      var e,
        n,
        r = (t.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === o || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (n) {
          try {
            return e.call(null, t, 0);
          } catch (n) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" === typeof setTimeout ? setTimeout : o;
        } catch (t) {
          e = o;
        }
        try {
          n = "function" === typeof clearTimeout ? clearTimeout : i;
        } catch (t) {
          n = i;
        }
      })();
      var s,
        c = [],
        u = !1,
        l = -1;
      function d() {
        u &&
          s &&
          ((u = !1), s.length ? (c = s.concat(c)) : (l = -1), c.length && f());
      }
      function f() {
        if (!u) {
          var t = a(d);
          u = !0;
          for (var e = c.length; e; ) {
            for (s = c, c = []; ++l < e; ) s && s[l].run();
            (l = -1), (e = c.length);
          }
          (s = null),
            (u = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === i || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function h() {}
      (r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new p(t, e)), 1 !== c.length || u || a(f);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = h),
        (r.addListener = h),
        (r.once = h),
        (r.off = h),
        (r.removeListener = h),
        (r.removeAllListeners = h),
        (r.emit = h),
        (r.prependListener = h),
        (r.prependOnceListener = h),
        (r.listeners = function (t) {
          return [];
        }),
        (r.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    66866: function (t, e) {
      "use strict";
      var n = "function" === typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        l = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        h = n ? Symbol.for("react.suspense_list") : 60120,
        v = n ? Symbol.for("react.memo") : 60115,
        m = n ? Symbol.for("react.lazy") : 60116,
        g = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        x = n ? Symbol.for("react.scope") : 60119;
      function w(t) {
        if ("object" === typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case r:
              switch ((t = t.type)) {
                case l:
                case d:
                case i:
                case s:
                case a:
                case p:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case u:
                    case f:
                    case m:
                    case v:
                    case c:
                      return t;
                    default:
                      return e;
                  }
              }
            case o:
              return e;
          }
        }
      }
      function C(t) {
        return w(t) === d;
      }
      (e.AsyncMode = l),
        (e.ConcurrentMode = d),
        (e.ContextConsumer = u),
        (e.ContextProvider = c),
        (e.Element = r),
        (e.ForwardRef = f),
        (e.Fragment = i),
        (e.Lazy = m),
        (e.Memo = v),
        (e.Portal = o),
        (e.Profiler = s),
        (e.StrictMode = a),
        (e.Suspense = p),
        (e.isAsyncMode = function (t) {
          return C(t) || w(t) === l;
        }),
        (e.isConcurrentMode = C),
        (e.isContextConsumer = function (t) {
          return w(t) === u;
        }),
        (e.isContextProvider = function (t) {
          return w(t) === c;
        }),
        (e.isElement = function (t) {
          return "object" === typeof t && null !== t && t.$$typeof === r;
        }),
        (e.isForwardRef = function (t) {
          return w(t) === f;
        }),
        (e.isFragment = function (t) {
          return w(t) === i;
        }),
        (e.isLazy = function (t) {
          return w(t) === m;
        }),
        (e.isMemo = function (t) {
          return w(t) === v;
        }),
        (e.isPortal = function (t) {
          return w(t) === o;
        }),
        (e.isProfiler = function (t) {
          return w(t) === s;
        }),
        (e.isStrictMode = function (t) {
          return w(t) === a;
        }),
        (e.isSuspense = function (t) {
          return w(t) === p;
        }),
        (e.isValidElementType = function (t) {
          return (
            "string" === typeof t ||
            "function" === typeof t ||
            t === i ||
            t === d ||
            t === s ||
            t === a ||
            t === p ||
            t === h ||
            ("object" === typeof t &&
              null !== t &&
              (t.$$typeof === m ||
                t.$$typeof === v ||
                t.$$typeof === c ||
                t.$$typeof === u ||
                t.$$typeof === f ||
                t.$$typeof === y ||
                t.$$typeof === b ||
                t.$$typeof === x ||
                t.$$typeof === g))
          );
        }),
        (e.typeOf = w);
    },
    48570: function (t, e, n) {
      "use strict";
      t.exports = n(66866);
    },
    36883: function (t, e, n) {
      "use strict";
      n.d(e, {
        S1: function () {
          return o;
        },
        jU: function () {
          return i;
        },
        on: function () {
          return r;
        },
      });
      function r(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        t && t.addEventListener && t.addEventListener.apply(t, e);
      }
      function o(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        t && t.removeEventListener && t.removeEventListener.apply(t, e);
      }
      var i = "undefined" !== typeof window;
    },
    27866: function (t, e, n) {
      "use strict";
      var r = n(2784),
        o = n(36883),
        i = ["mousedown", "touchstart"];
      e.Z = function (t, e, n) {
        void 0 === n && (n = i);
        var a = (0, r.useRef)(e);
        (0, r.useEffect)(
          function () {
            a.current = e;
          },
          [e]
        ),
          (0, r.useEffect)(
            function () {
              for (
                var e = function (e) {
                    var n = t.current;
                    n && !n.contains(e.target) && a.current(e);
                  },
                  r = 0,
                  i = n;
                r < i.length;
                r++
              ) {
                var s = i[r];
                (0, o.on)(document, s, e);
              }
              return function () {
                for (var t = 0, r = n; t < r.length; t++) {
                  var i = r[t];
                  (0, o.S1)(document, i, e);
                }
              };
            },
            [n, t]
          );
      };
    },
    76542: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(2784);
      function o(t, e, n) {
        return t[e]
          ? t[e][0]
            ? t[e][0][n]
            : t[e][n]
          : "contentBoxSize" === e
          ? t.contentRect["inlineSize" === n ? "width" : "height"]
          : void 0;
      }
      function i(t) {
        void 0 === t && (t = {});
        var e = t.onResize,
          n = (0, r.useRef)(void 0);
        n.current = e;
        var i = t.round || Math.round,
          a = (0, r.useRef)(),
          s = (0, r.useState)({ width: void 0, height: void 0 }),
          c = s[0],
          u = s[1],
          l = (0, r.useRef)(!1);
        (0, r.useEffect)(function () {
          return (
            (l.current = !1),
            function () {
              l.current = !0;
            }
          );
        }, []);
        var d = (0, r.useRef)({ width: void 0, height: void 0 }),
          f = (function (t, e) {
            var n = (0, r.useRef)(null),
              o = (0, r.useRef)(null);
            o.current = e;
            var i = (0, r.useRef)(null);
            (0, r.useEffect)(function () {
              a();
            });
            var a = (0, r.useCallback)(
              function () {
                var e = i.current,
                  r = o.current,
                  a = e || (r ? (r instanceof Element ? r : r.current) : null);
                (n.current &&
                  n.current.element === a &&
                  n.current.subscriber === t) ||
                  (n.current && n.current.cleanup && n.current.cleanup(),
                  (n.current = {
                    element: a,
                    subscriber: t,
                    cleanup: a ? t(a) : void 0,
                  }));
              },
              [t]
            );
            return (
              (0, r.useEffect)(function () {
                return function () {
                  n.current &&
                    n.current.cleanup &&
                    (n.current.cleanup(), (n.current = null));
                };
              }, []),
              (0, r.useCallback)(
                function (t) {
                  (i.current = t), a();
                },
                [a]
              )
            );
          })(
            (0, r.useCallback)(
              function (e) {
                return (
                  (a.current &&
                    a.current.box === t.box &&
                    a.current.round === i) ||
                    (a.current = {
                      box: t.box,
                      round: i,
                      instance: new ResizeObserver(function (e) {
                        var r = e[0],
                          a =
                            "border-box" === t.box
                              ? "borderBoxSize"
                              : "device-pixel-content-box" === t.box
                              ? "devicePixelContentBoxSize"
                              : "contentBoxSize",
                          s = o(r, a, "inlineSize"),
                          c = o(r, a, "blockSize"),
                          f = s ? i(s) : void 0,
                          p = c ? i(c) : void 0;
                        if (d.current.width !== f || d.current.height !== p) {
                          var h = { width: f, height: p };
                          (d.current.width = f),
                            (d.current.height = p),
                            n.current ? n.current(h) : l.current || u(h);
                        }
                      }),
                    }),
                  a.current.instance.observe(e, { box: t.box }),
                  function () {
                    a.current && a.current.instance.unobserve(e);
                  }
                );
              },
              [t.box, i]
            ),
            t.ref
          );
        return (0, r.useMemo)(
          function () {
            return { ref: f, width: c.width, height: c.height };
          },
          [f, c.width, c.height]
        );
      }
    },
    25675: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return l;
        },
        E: function () {
          return u;
        },
      });
      var r = n(9340),
        o = n(9066),
        i = n(5759);
      function a() {
        let t = !1;
        const e = [],
          n = new Set(),
          a = {
            subscribe: (t) => (
              n.add(t),
              () => {
                n.delete(t);
              }
            ),
            start(r, i) {
              if (t) {
                const t = [];
                return (
                  n.forEach((e) => {
                    t.push((0, o.d5)(e, r, { transitionOverride: i }));
                  }),
                  Promise.all(t)
                );
              }
              return new Promise((t) => {
                e.push({ animation: [r, i], resolve: t });
              });
            },
            set: (e) => (
              (0, r.k)(
                t,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
              ),
              n.forEach((t) => {
                (0, i.gg)(t, e);
              })
            ),
            stop() {
              n.forEach((t) => {
                (0, o.p_)(t);
              });
            },
            mount: () => (
              (t = !0),
              e.forEach(({ animation: t, resolve: e }) => {
                a.start(...t).then(e);
              }),
              () => {
                (t = !1), a.stop();
              }
            ),
          };
        return a;
      }
      var s = n(2784),
        c = n(96681);
      function u() {
        const t = (0, c.h)(a);
        return (0, s.useEffect)(t.mount, []), t;
      }
      const l = u;
    },
    88741: function (t, e, n) {
      "use strict";
      n.d(e, {
        jt: function () {
          return N;
        },
      });
      const r = (t) => (e) =>
          e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        o = (t) => (e) => 1 - t(1 - e),
        i = (t) => t * t,
        a = o(i),
        s = r(i);
      var c = n(52200),
        u = n(9340);
      const l = (t) => t,
        d = (t, e, n) =>
          (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function f(t, e, n, r) {
        if (t === e && n === r) return l;
        const o = (e) =>
          (function (t, e, n, r, o) {
            let i,
              a,
              s = 0;
            do {
              (a = e + (n - e) / 2),
                (i = d(a, r, o) - t),
                i > 0 ? (n = a) : (e = a);
            } while (Math.abs(i) > 1e-7 && ++s < 12);
            return a;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : d(o(t), e, r));
      }
      const p = (t) => 1 - Math.sin(Math.acos(t)),
        h = o(p),
        v = r(h),
        m = f(0.33, 1.53, 0.69, 0.99),
        g = o(m),
        y = r(g),
        b = {
          linear: l,
          easeIn: i,
          easeInOut: s,
          easeOut: a,
          circIn: p,
          circInOut: v,
          circOut: h,
          backIn: g,
          backInOut: y,
          backOut: m,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * g(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        x = (t) => {
          if (Array.isArray(t)) {
            (0, u.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            const [e, n, r, o] = t;
            return f(e, n, r, o);
          }
          return "string" === typeof t
            ? ((0, u.k)(void 0 !== b[t], `Invalid easing type '${t}'`), b[t])
            : t;
        };
      function w({ keyframes: t, ease: e = s, times: n, duration: r = 300 }) {
        t = [...t];
        const o = w[0],
          i = ((t) => Array.isArray(t) && "number" !== typeof t[0])(e)
            ? e.map(x)
            : x(e),
          a = { done: !1, value: o },
          u = (function (t, e) {
            return t.map((t) => t * e);
          })(
            n && n.length === w.length
              ? n
              : (function (t) {
                  const e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(t),
            r
          );
        function l() {
          return (0, c.s)(u, t, {
            ease: Array.isArray(i)
              ? i
              : ((e = t), (n = i), e.map(() => n || s).splice(0, e.length - 1)),
          });
        }
        let d = l();
        return {
          next: (t) => ((a.value = d(t)), (a.done = t >= r), a),
          flipTarget: () => {
            t.reverse(), (d = l());
          },
        };
      }
      var C = n(24169);
      const k = 0.001;
      function M({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: n = 0,
        mass: r = 1,
      }) {
        let o, i;
        (0, u.K)(t <= 1e4, "Spring duration must be 10 seconds or less");
        let a = 1 - e;
        (a = (0, C.u)(0.05, 1, a)),
          (t = (0, C.u)(0.01, 10, t / 1e3)),
          a < 1
            ? ((o = (e) => {
                const r = e * a,
                  o = r * t,
                  i = r - n,
                  s = E(e, a),
                  c = Math.exp(-o);
                return k - (i / s) * c;
              }),
              (i = (e) => {
                const r = e * a * t,
                  i = r * n + n,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  c = Math.exp(-r),
                  u = E(Math.pow(e, 2), a);
                return ((-o(e) + k > 0 ? -1 : 1) * ((i - s) * c)) / u;
              }))
            : ((o = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - 0.001),
              (i = (e) => Math.exp(-e * t) * (t * t * (n - e))));
        const s = (function (t, e, n) {
          let r = n;
          for (let o = 1; o < 12; o++) r -= t(r) / e(r);
          return r;
        })(o, i, 5 / t);
        if (((t *= 1e3), isNaN(s)))
          return { stiffness: 100, damping: 10, duration: t };
        {
          const e = Math.pow(s, 2) * r;
          return {
            stiffness: e,
            damping: 2 * a * Math.sqrt(r * e),
            duration: t,
          };
        }
      }
      function E(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      var S = n(3038);
      const L = ["duration", "bounce"],
        A = ["stiffness", "damping", "mass"];
      function B(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function P({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: n = 0.01,
        ...r
      }) {
        let o = t[0],
          i = t[t.length - 1];
        const a = { done: !1, value: o },
          {
            stiffness: s,
            damping: c,
            mass: u,
            velocity: l,
            duration: d,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!B(t, A) && B(t, L)) {
              const n = M(t);
              (e = { ...e, ...n, velocity: 0, mass: 1 }),
                (e.isResolvedFromDuration = !0);
            }
            return e;
          })(r);
        let p = Z,
          h = l ? -l / 1e3 : 0;
        const v = c / (2 * Math.sqrt(s * u));
        function m() {
          const t = i - o,
            e = Math.sqrt(s / u) / 1e3;
          if (
            (void 0 === n && (n = Math.min(Math.abs(i - o) / 100, 0.4)), v < 1)
          ) {
            const n = E(e, v);
            p = (r) => {
              const o = Math.exp(-v * e * r);
              return (
                i -
                o *
                  (((h + v * e * t) / n) * Math.sin(n * r) +
                    t * Math.cos(n * r))
              );
            };
          } else if (1 === v)
            p = (n) => i - Math.exp(-e * n) * (t + (h + e * t) * n);
          else {
            const n = e * Math.sqrt(v * v - 1);
            p = (r) => {
              const o = Math.exp(-v * e * r),
                a = Math.min(n * r, 300);
              return (
                i -
                (o * ((h + v * e * t) * Math.sinh(a) + n * t * Math.cosh(a))) /
                  n
              );
            };
          }
        }
        return (
          m(),
          {
            next: (t) => {
              const r = p(t);
              if (f) a.done = t >= d;
              else {
                let o = h;
                if (0 !== t)
                  if (v < 1) {
                    const e = Math.max(0, t - 5);
                    o = (0, S.R)(r - p(e), t - e);
                  } else o = 0;
                const s = Math.abs(o) <= e,
                  c = Math.abs(i - r) <= n;
                a.done = s && c;
              }
              return (a.value = a.done ? i : r), a;
            },
            flipTarget: () => {
              (h = -h), ([o, i] = [i, o]), m();
            },
          }
        );
      }
      P.needsInterpolation = (t, e) =>
        "string" === typeof t || "string" === typeof e;
      const Z = (t) => 0;
      var T = n(30404);
      const O = {
        decay: function ({
          keyframes: t = [0],
          velocity: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: o = 0.5,
          modifyTarget: i,
        }) {
          const a = t[0],
            s = { done: !1, value: a };
          let c = n * e;
          const u = a + c,
            l = void 0 === i ? u : i(u);
          return (
            l !== u && (c = l - a),
            {
              next: (t) => {
                const e = -c * Math.exp(-t / r);
                return (
                  (s.done = !(e > o || e < -o)),
                  (s.value = s.done ? l : l + e),
                  s
                );
              },
              flipTarget: () => {},
            }
          );
        },
        keyframes: w,
        tween: w,
        spring: P,
      };
      function V(t, e, n = 0) {
        return t - e - n;
      }
      const R = (t) => {
        const e = ({ delta: e }) => t(e);
        return { start: () => T.Z_.update(e, !0), stop: () => T.qY.update(e) };
      };
      function N({
        duration: t,
        driver: e = R,
        elapsed: n = 0,
        repeat: r = 0,
        repeatType: o = "loop",
        repeatDelay: i = 0,
        keyframes: a,
        autoplay: s = !0,
        onPlay: u,
        onStop: l,
        onComplete: d,
        onRepeat: f,
        onUpdate: p,
        type: h = "keyframes",
        ...v
      }) {
        var m, g;
        let y,
          b,
          x,
          w = 0,
          C = t,
          k = !1,
          M = !0;
        const E = O[a.length > 2 ? "keyframes" : h],
          S = a[0],
          L = a[a.length - 1];
        (null === (g = (m = E).needsInterpolation) || void 0 === g
          ? void 0
          : g.call(m, S, L)) &&
          ((x = (0, c.s)([0, 100], [S, L], { clamp: !1 })), (a = [0, 100]));
        const A = E({ ...v, duration: t, keyframes: a });
        function B() {
          w++,
            "reverse" === o
              ? ((M = w % 2 === 0),
                (n = (function (t, e = 0, n = 0, r = !0) {
                  return r ? V(e + -t, e, n) : e - (t - e) + n;
                })(n, C, i, M)))
              : ((n = V(n, C, i)), "mirror" === o && A.flipTarget()),
            (k = !1),
            f && f();
        }
        function P(t) {
          if ((M || (t = -t), (n += t), !k)) {
            const t = A.next(Math.max(0, n));
            (b = t.value), x && (b = x(b)), (k = M ? t.done : n <= 0);
          }
          p && p(b),
            k &&
              (0 === w && (C = void 0 !== C ? C : n),
              w < r
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(n, C, i, M) && B()
                : (y.stop(), d && d()));
        }
        return (
          s && (u && u(), (y = e(P)), y.start()),
          {
            stop: () => {
              l && l(), y.stop();
            },
            sample: (t) => A.next(Math.max(0, t)),
          }
        );
      }
    },
    2445: function (t, e, n) {
      "use strict";
      function r(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      n.d(e, {
        H: function () {
          return r;
        },
      });
    },
    48488: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return r;
        },
      });
      const r = (t) => Array.isArray(t);
    },
    65820: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return y;
        },
      });
      var r = n(2784),
        o = n(49304),
        i = n(30404),
        a = n(58868);
      function s() {
        const t = (0, r.useRef)(!1);
        return (
          (0, a.L)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
      var c = n(240),
        u = n(96681);
      class l extends r.Component {
        getSnapshotBeforeUpdate(t) {
          const e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            const t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d({ children: t, isPresent: e }) {
        const n = (0, r.useId)(),
          o = (0, r.useRef)(null),
          i = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, r.useInsertionEffect)(() => {
            const { width: t, height: r, top: a, left: s } = i.current;
            if (e || !o.current || !t || !r) return;
            o.current.dataset.motionPopId = n;
            const c = document.createElement("style");
            return (
              document.head.appendChild(c),
              c.sheet &&
                c.sheet.insertRule(
                  `\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${r}px !important;\n            top: ${a}px !important;\n            left: ${s}px !important;\n          }\n        `
                ),
              () => {
                document.head.removeChild(c);
              }
            );
          }, [e]),
          r.createElement(
            l,
            { isPresent: e, childRef: o, sizeRef: i },
            r.cloneElement(t, { ref: o })
          )
        );
      }
      const f = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: o,
        custom: i,
        presenceAffectsLayout: a,
        mode: s,
      }) => {
        const l = (0, u.h)(p),
          f = (0, r.useId)(),
          h = (0, r.useMemo)(
            () => ({
              id: f,
              initial: e,
              isPresent: n,
              custom: i,
              onExitComplete: (t) => {
                l.set(t, !0);
                for (const e of l.values()) if (!e) return;
                o && o();
              },
              register: (t) => (l.set(t, !1), () => l.delete(t)),
            }),
            a ? void 0 : [n]
          );
        return (
          (0, r.useMemo)(() => {
            l.forEach((t, e) => l.set(e, !1));
          }, [n]),
          r.useEffect(() => {
            !n && !l.size && o && o();
          }, [n]),
          "popLayout" === s && (t = r.createElement(d, { isPresent: n }, t)),
          r.createElement(c.O.Provider, { value: h }, t)
        );
      };
      function p() {
        return new Map();
      }
      var h = n(25364),
        v = n(65411),
        m = n(16034);
      const g = (t) => t.key || "";
      const y = ({
        children: t,
        custom: e,
        initial: n = !0,
        onExitComplete: c,
        exitBeforeEnter: u,
        presenceAffectsLayout: l = !0,
        mode: d = "sync",
      }) => {
        u &&
          ((d = "wait"),
          (0, m.O)(!1, "Replace exitBeforeEnter with mode='wait'"));
        let [p] = (function () {
          const t = s(),
            [e, n] = (0, r.useState)(0),
            o = (0, r.useCallback)(() => {
              t.current && n(e + 1);
            }, [e]);
          return [(0, r.useCallback)(() => i.Z_.postRender(o), [o]), e];
        })();
        const y = (0, r.useContext)(h.p).forceRender;
        y && (p = y);
        const b = s(),
          x = (function (t) {
            const e = [];
            return (
              r.Children.forEach(t, (t) => {
                (0, r.isValidElement)(t) && e.push(t);
              }),
              e
            );
          })(t);
        let w = x;
        const C = new Set(),
          k = (0, r.useRef)(w),
          M = (0, r.useRef)(new Map()).current,
          E = (0, r.useRef)(!0);
        if (
          ((0, a.L)(() => {
            (E.current = !1),
              (function (t, e) {
                t.forEach((t) => {
                  const n = g(t);
                  e.set(n, t);
                });
              })(x, M),
              (k.current = w);
          }),
          (0, v.z)(() => {
            (E.current = !0), M.clear(), C.clear();
          }),
          E.current)
        )
          return r.createElement(
            r.Fragment,
            null,
            w.map((t) =>
              r.createElement(
                f,
                {
                  key: g(t),
                  isPresent: !0,
                  initial: !!n && void 0,
                  presenceAffectsLayout: l,
                  mode: d,
                },
                t
              )
            )
          );
        w = [...w];
        const S = k.current.map(g),
          L = x.map(g),
          A = S.length;
        for (let r = 0; r < A; r++) {
          const t = S[r];
          -1 === L.indexOf(t) && C.add(t);
        }
        return (
          "wait" === d && C.size && (w = []),
          C.forEach((t) => {
            if (-1 !== L.indexOf(t)) return;
            const n = M.get(t);
            if (!n) return;
            const o = S.indexOf(t);
            w.splice(
              o,
              0,
              r.createElement(
                f,
                {
                  key: g(n),
                  isPresent: !1,
                  onExitComplete: () => {
                    M.delete(t), C.delete(t);
                    const e = k.current.findIndex((e) => e.key === t);
                    if ((k.current.splice(e, 1), !C.size)) {
                      if (((k.current = x), !1 === b.current)) return;
                      p(), c && c();
                    }
                  },
                  custom: e,
                  presenceAffectsLayout: l,
                  mode: d,
                },
                n
              )
            );
          }),
          (w = w.map((t) => {
            const e = t.key;
            return C.has(e)
              ? t
              : r.createElement(
                  f,
                  {
                    key: g(t),
                    isPresent: !0,
                    presenceAffectsLayout: l,
                    mode: d,
                  },
                  t
                );
          })),
          "production" !== o.O &&
            "wait" === d &&
            w.length > 1 &&
            console.warn(
              'You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'
            ),
          r.createElement(
            r.Fragment,
            null,
            C.size ? w : w.map((t) => (0, r.cloneElement)(t))
          )
        );
      };
    },
    25364: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return r;
        },
      });
      const r = (0, n(2784).createContext)({});
    },
    70398: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return r;
        },
      });
      const r = (0, n(2784).createContext)({ strict: !1 });
    },
    16014: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return r;
        },
      });
      const r = (0, n(2784).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    240: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return r;
        },
      });
      const r = (0, n(2784).createContext)(null);
    },
    37367: function (t, e, n) {
      "use strict";
      n.d(e, {
        frameData: function () {
          return r;
        },
      });
      const r = { delta: 0, timestamp: 0 };
    },
    30404: function (t, e, n) {
      "use strict";
      n.d(e, {
        qY: function () {
          return p;
        },
        Z_: function () {
          return f;
        },
      });
      const r = (1 / 60) * 1e3,
        o =
          "undefined" !== typeof performance
            ? () => performance.now()
            : () => Date.now(),
        i =
          "undefined" !== typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(o()), r);
      var a = n(37367);
      let s = !0,
        c = !1,
        u = !1;
      const l = ["read", "update", "preRender", "render", "postRender"],
        d = l.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                o = !1,
                i = !1;
              const a = new WeakSet(),
                s = {
                  schedule: (t, i = !1, s = !1) => {
                    const c = s && o,
                      u = c ? e : n;
                    return (
                      i && a.add(t),
                      -1 === u.indexOf(t) &&
                        (u.push(t), c && o && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    const e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), a.delete(t);
                  },
                  process: (c) => {
                    if (o) i = !0;
                    else {
                      if (
                        ((o = !0),
                        ([e, n] = [n, e]),
                        (n.length = 0),
                        (r = e.length),
                        r)
                      )
                        for (let n = 0; n < r; n++) {
                          const r = e[n];
                          r(c), a.has(r) && (s.schedule(r), t());
                        }
                      (o = !1), i && ((i = !1), s.process(c));
                    }
                  },
                };
              return s;
            })(() => (c = !0))),
            t
          ),
          {}
        ),
        f = l.reduce((t, e) => {
          const n = d[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (c || m(), n.schedule(t, e, r))), t
          );
        }, {}),
        p = l.reduce((t, e) => ((t[e] = d[e].cancel), t), {}),
        h =
          (l.reduce(
            (t, e) => ((t[e] = () => d[e].process(a.frameData)), t),
            {}
          ),
          (t) => d[t].process(a.frameData)),
        v = (t) => {
          (c = !1),
            (a.frameData.delta = s
              ? r
              : Math.max(Math.min(t - a.frameData.timestamp, 40), 1)),
            (a.frameData.timestamp = t),
            (u = !0),
            l.forEach(h),
            (u = !1),
            c && ((s = !1), i(v));
        },
        m = () => {
          (c = !0), (s = !0), u || i(v);
        };
    },
    9442: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return o;
        },
      });
      const r = (t) => ({ isEnabled: (e) => t.some((t) => !!e[t]) }),
        o = {
          measureLayout: r(["layout", "layoutId", "drag"]),
          animation: r([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: r(["exit"]),
          drag: r(["drag", "dragControls"]),
          focus: r(["whileFocus"]),
          hover: r(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: r(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: r(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: r(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
    },
    81879: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return o;
        },
      });
      var r = n(9442);
      function o(t) {
        for (const e in t)
          "projectionNodeConstructor" === e
            ? (r.A.projectionNodeConstructor = t[e])
            : (r.A[e].Component = t[e]);
      }
    },
    96728: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return i;
        },
      });
      const r = {};
      var o = n(94714);
      function i(t, { layout: e, layoutId: n }) {
        return (
          o.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!r[t] || "opacity" === t))
        );
      }
    },
    93983: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return G;
        },
      });
      var r = n(2784),
        o = n(16014);
      const i = (0, r.createContext)({});
      var a = n(240),
        s = n(58868),
        c = n(70398);
      function u(t, e, n, u) {
        const l = (0, r.useContext)(i).visualElement,
          d = (0, r.useContext)(c.u),
          f = (0, r.useContext)(a.O),
          p = (0, r.useContext)(o._).reducedMotion,
          h = (0, r.useRef)();
        (u = u || d.renderer),
          !h.current &&
            u &&
            (h.current = u(t, {
              visualState: e,
              parent: l,
              props: n,
              presenceId: f ? f.id : void 0,
              blockInitialAnimation: !!f && !1 === f.initial,
              reducedMotionConfig: p,
            }));
        const v = h.current;
        return (
          (0, s.L)(() => {
            v && v.render();
          }),
          (0, s.L)(() => {
            v && v.animationState && v.animationState.animateChanges();
          }),
          (0, s.L)(() => () => v && v.notify("Unmount"), []),
          v
        );
      }
      var l = n(51804);
      var d = n(97732),
        f = n(7504);
      function p(t) {
        const { initial: e, animate: n } = (function (t, e) {
          if ((0, f.G)(t)) {
            const { initial: e, animate: n } = t;
            return {
              initial: !1 === e || (0, d.$)(e) ? e : void 0,
              animate: (0, d.$)(n) ? n : void 0,
            };
          }
          return !1 !== t.inherit ? e : {};
        })(t, (0, r.useContext)(i));
        return (0, r.useMemo)(() => ({ initial: e, animate: n }), [h(e), h(n)]);
      }
      function h(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var v = n(9442),
        m = n(81879),
        g = n(11741),
        y = n(96681);
      const b = !1;
      let x = 1;
      var w = n(25364);
      class C extends r.Component {
        getSnapshotBeforeUpdate() {
          const { visualElement: t, props: e } = this.props;
          return t && t.setProps(e), null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      const k = (0, r.createContext)({}),
        M = Symbol.for("motionComponentSymbol");
      function E({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: n,
        useRender: a,
        useVisualState: s,
        Component: d,
      }) {
        t && (0, m.K)(t);
        const f = (0, r.forwardRef)(function (f, h) {
          const m = { ...(0, r.useContext)(o._), ...f, layoutId: S(f) },
            { isStatic: w } = m;
          let M = null;
          const E = p(f),
            L = w
              ? void 0
              : (0, y.h)(() => {
                  if (b) return x++;
                }),
            A = s(f, w);
          if (!w && g.j) {
            E.visualElement = u(d, A, m, e);
            const o = (0, r.useContext)(c.u).strict,
              i = (0, r.useContext)(k);
            E.visualElement &&
              (M = E.visualElement.loadFeatures(
                m,
                o,
                t,
                L,
                n || v.A.projectionNodeConstructor,
                i
              ));
          }
          return r.createElement(
            C,
            { visualElement: E.visualElement, props: m },
            M,
            r.createElement(
              i.Provider,
              { value: E },
              a(
                d,
                f,
                L,
                (function (t, e, n) {
                  return (0, r.useCallback)(
                    (r) => {
                      r && t.mount && t.mount(r),
                        e && (r ? e.mount(r) : e.unmount()),
                        n &&
                          ("function" === typeof n
                            ? n(r)
                            : (0, l.I)(n) && (n.current = r));
                    },
                    [e]
                  );
                })(A, E.visualElement, h),
                A,
                w,
                E.visualElement
              )
            )
          );
        });
        return (f[M] = d), f;
      }
      function S({ layoutId: t }) {
        const e = (0, r.useContext)(w.p).id;
        return e && void 0 !== t ? e + "-" + t : t;
      }
      var L = n(62627),
        A = n(96728),
        B = n(40406),
        P = n(38057);
      const Z = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
      });
      function T(t, e, n) {
        for (const r in e) (0, B.i)(e[r]) || (0, A.j)(r, n) || (t[r] = e[r]);
      }
      function O(t, e, n) {
        const o = {};
        return (
          T(o, t.style || {}, t),
          Object.assign(
            o,
            (function ({ transformTemplate: t }, e, n) {
              return (0, r.useMemo)(() => {
                const r = {
                  style: {},
                  transform: {},
                  transformKeys: [],
                  transformOrigin: {},
                  vars: {},
                };
                return (
                  (0, P.r)(r, e, { enableHardwareAcceleration: !n }, t),
                  Object.assign({}, r.vars, r.style)
                );
              }, [e]);
            })(t, e, n)
          ),
          t.transformValues ? t.transformValues(o) : o
        );
      }
      function V(t, e, n) {
        const r = {},
          o = O(t, e, n);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
            (o.touchAction =
              !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x"))),
          (r.style = o),
          r
        );
      }
      var R = n(91492),
        N = n(85415);
      const z = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
        attrs: {},
      });
      var _ = n(79854);
      function I(t, e, n, o) {
        const i = (0, r.useMemo)(() => {
          const n = {
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {},
            attrs: {},
          };
          return (
            (0, N.i)(
              n,
              e,
              { enableHardwareAcceleration: !1 },
              (0, _.a)(o),
              t.transformTemplate
            ),
            { ...n.attrs, style: { ...n.style } }
          );
        }, [e]);
        if (t.style) {
          const e = {};
          T(e, t.style, t), (i.style = { ...e, ...i.style });
        }
        return i;
      }
      function j(t = !1) {
        return (e, n, o, i, { latestValues: a }, s) => {
          const c = ((0, L.q)(e) ? I : V)(n, a, s, e),
            u = { ...(0, R.L)(n, "string" === typeof e, t), ...c, ref: i };
          return o && (u["data-projection-id"] = o), (0, r.createElement)(e, u);
        };
      }
      var F = n(68504),
        H = n(16832),
        $ = n(2445),
        D = n(79432),
        W = n(8715);
      function U(t) {
        const e = (0, B.i)(t) ? t.get() : t;
        return (0, W.p)(e) ? e.toValue() : e;
      }
      const X = (t) => (e, n) => {
        const o = (0, r.useContext)(i),
          s = (0, r.useContext)(a.O),
          c = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: n,
              },
              r,
              o,
              i
            ) {
              const a = { latestValues: q(r, o, i, t), renderState: e() };
              return n && (a.mount = (t) => n(r, t, a)), a;
            })(t, e, o, s);
        return n ? c() : (0, y.h)(c);
      };
      function q(t, e, n, r) {
        const o = {},
          i = r(t);
        for (const f in i) o[f] = U(i[f]);
        let { initial: a, animate: s } = t;
        const c = (0, f.G)(t),
          u = (0, f.M)(t);
        e &&
          u &&
          !c &&
          !1 !== t.inherit &&
          (void 0 === a && (a = e.initial), void 0 === s && (s = e.animate));
        let l = !!n && !1 === n.initial;
        l = l || !1 === a;
        const d = l ? s : a;
        if (d && "boolean" !== typeof d && !(0, $.H)(d)) {
          (Array.isArray(d) ? d : [d]).forEach((e) => {
            const n = (0, D.o)(t, e);
            if (!n) return;
            const { transitionEnd: r, transition: i, ...a } = n;
            for (const t in a) {
              let e = a[t];
              if (Array.isArray(e)) {
                e = e[l ? e.length - 1 : 0];
              }
              null !== e && (o[t] = e);
            }
            for (const t in r) o[t] = r[t];
          });
        }
        return o;
      }
      const Y = {
        useVisualState: X({
          scrapeMotionValuesFromProps: H.U,
          createRenderState: z,
          onMount: (t, e, { renderState: n, latestValues: r }) => {
            try {
              n.dimensions =
                "function" === typeof e.getBBox
                  ? e.getBBox()
                  : e.getBoundingClientRect();
            } catch (o) {
              n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
            (0, N.i)(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              (0, _.a)(e.tagName),
              t.transformTemplate
            ),
              (0, F.K)(e, n);
          },
        }),
      };
      const K = {
        useVisualState: X({
          scrapeMotionValuesFromProps: n(50189).U,
          createRenderState: Z,
        }),
      };
      const G = (function (t) {
        function e(e, n = {}) {
          return E(t(e, n));
        }
        if ("undefined" === typeof Proxy) return e;
        const n = new Map();
        return new Proxy(e, {
          get: (t, r) => (n.has(r) || n.set(r, e(r)), n.get(r)),
        });
      })(function (t, { forwardMotionProps: e = !1 }, n, r, o) {
        return {
          ...((0, L.q)(t) ? Y : K),
          preloadedFeatures: n,
          useRender: j(e),
          createVisualElement: r,
          projectionNodeConstructor: o,
          Component: t,
        };
      });
    },
    93193: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return r;
        },
      });
      const r = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    },
    91492: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return s;
        },
        K: function () {
          return a;
        },
      });
      const r = new Set([
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "onHoverStart",
        "onHoverEnd",
        "layoutScroll",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
        "whileInView",
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
      ]);
      function o(t) {
        return r.has(t);
      }
      let i = (t) => !o(t);
      function a(t) {
        t && (i = (e) => (e.startsWith("on") ? !o(e) : t(e)));
      }
      try {
        a(require("@emotion/is-prop-valid").default);
      } catch (c) {}
      function s(t, e, n) {
        const r = {};
        for (const a in t)
          (i(a) ||
            (!0 === n && o(a)) ||
            (!e && !o(a)) ||
            (t.draggable && a.startsWith("onDrag"))) &&
            (r[a] = t[a]);
        return r;
      }
    },
    57630: function (t, e, n) {
      "use strict";
      function r(t) {
        return t.startsWith("--");
      }
      n.d(e, {
        o: function () {
          return r;
        },
      });
    },
    62627: function (t, e, n) {
      "use strict";
      n.d(e, {
        q: function () {
          return o;
        },
      });
      const r = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function o(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(r.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
    },
    79135: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return a;
        },
      });
      var r = n(51550),
        o = n(97197),
        i = n(2728);
      function a(t, e) {
        var n;
        let a = (0, i.A)(t);
        return (
          a !== o.h && (a = r.P),
          null === (n = a.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(a, e)
        );
      }
    },
    2728: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return a;
        },
      });
      var r = n(85385),
        o = n(97197);
      const i = {
          ...n(36173).j,
          color: r.$,
          backgroundColor: r.$,
          outlineColor: r.$,
          fill: r.$,
          stroke: r.$,
          borderColor: r.$,
          borderTopColor: r.$,
          borderRightColor: r.$,
          borderBottomColor: r.$,
          borderLeftColor: r.$,
          filter: o.h,
          WebkitFilter: o.h,
        },
        a = (t) => i[t];
    },
    56440: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return a;
        },
        C: function () {
          return s;
        },
      });
      var r = n(61649),
        o = n(96190),
        i = n(88340);
      const a = [
          r.Rx,
          o.px,
          o.aQ,
          o.RW,
          o.vw,
          o.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        s = (t) => a.find((0, i.l)(t));
    },
    36173: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return a;
        },
      });
      var r = n(61649),
        o = n(96190);
      const i = { ...r.Rx, transform: Math.round },
        a = {
          borderWidth: o.px,
          borderTopWidth: o.px,
          borderRightWidth: o.px,
          borderBottomWidth: o.px,
          borderLeftWidth: o.px,
          borderRadius: o.px,
          radius: o.px,
          borderTopLeftRadius: o.px,
          borderTopRightRadius: o.px,
          borderBottomRightRadius: o.px,
          borderBottomLeftRadius: o.px,
          width: o.px,
          maxWidth: o.px,
          height: o.px,
          maxHeight: o.px,
          size: o.px,
          top: o.px,
          right: o.px,
          bottom: o.px,
          left: o.px,
          padding: o.px,
          paddingTop: o.px,
          paddingRight: o.px,
          paddingBottom: o.px,
          paddingLeft: o.px,
          margin: o.px,
          marginTop: o.px,
          marginRight: o.px,
          marginBottom: o.px,
          marginLeft: o.px,
          rotate: o.RW,
          rotateX: o.RW,
          rotateY: o.RW,
          rotateZ: o.RW,
          scale: r.bA,
          scaleX: r.bA,
          scaleY: r.bA,
          scaleZ: r.bA,
          skew: o.RW,
          skewX: o.RW,
          skewY: o.RW,
          distance: o.px,
          translateX: o.px,
          translateY: o.px,
          translateZ: o.px,
          x: o.px,
          y: o.px,
          z: o.px,
          perspective: o.px,
          transformPerspective: o.px,
          opacity: r.Fq,
          originX: o.$C,
          originY: o.$C,
          originZ: o.px,
          zIndex: i,
          fillOpacity: r.Fq,
          strokeOpacity: r.Fq,
          numOctaves: i,
        };
    },
    88340: function (t, e, n) {
      "use strict";
      n.d(e, {
        l: function () {
          return r;
        },
      });
      const r = (t) => (e) => e.test(t);
    },
    38057: function (t, e, n) {
      "use strict";
      n.d(e, {
        r: function () {
          return u;
        },
      });
      var r = n(94714);
      const o = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        i = (t, e) => r._.indexOf(t) - r._.indexOf(e);
      var a = n(57630);
      const s = (t, e) => (e && "number" === typeof t ? e.transform(t) : t);
      var c = n(36173);
      function u(t, e, n, u) {
        const {
          style: l,
          vars: d,
          transform: f,
          transformKeys: p,
          transformOrigin: h,
        } = t;
        p.length = 0;
        let v = !1,
          m = !1,
          g = !0;
        for (const o in e) {
          const t = e[o];
          if ((0, a.o)(o)) {
            d[o] = t;
            continue;
          }
          const n = c.j[o],
            i = s(t, n);
          if (r.G.has(o)) {
            if (((v = !0), (f[o] = i), p.push(o), !g)) continue;
            t !== (n.default || 0) && (g = !1);
          } else o.startsWith("origin") ? ((m = !0), (h[o] = i)) : (l[o] = i);
        }
        if (
          (e.transform ||
            (v || u
              ? (l.transform = (function (
                  { transform: t, transformKeys: e },
                  {
                    enableHardwareAcceleration: n = !0,
                    allowTransformNone: r = !0,
                  },
                  a,
                  s
                ) {
                  let c = "";
                  e.sort(i);
                  for (const i of e) c += `${o[i] || i}(${t[i]}) `;
                  return (
                    n && !t.z && (c += "translateZ(0)"),
                    (c = c.trim()),
                    s ? (c = s(t, a ? "" : c)) : r && a && (c = "none"),
                    c
                  );
                })(t, n, g, u))
              : l.transform && (l.transform = "none")),
          m)
        ) {
          const { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = h;
          l.transformOrigin = `${t} ${e} ${n}`;
        }
      }
    },
    34242: function (t, e, n) {
      "use strict";
      function r(t, { style: e, vars: n }, r, o) {
        Object.assign(t.style, e, o && o.getProjectionStyles(r));
        for (const i in n) t.style.setProperty(i, n[i]);
      }
      n.d(e, {
        N: function () {
          return r;
        },
      });
    },
    50189: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return i;
        },
      });
      var r = n(96728),
        o = n(40406);
      function i(t) {
        const { style: e } = t,
          n = {};
        for (const i in e) ((0, o.i)(e[i]) || (0, r.j)(i, t)) && (n[i] = e[i]);
        return n;
      }
    },
    94714: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return o;
        },
        _: function () {
          return r;
        },
      });
      const r = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        o = new Set(r);
    },
    85415: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return c;
        },
      });
      var r = n(38057),
        o = n(96190);
      function i(t, e, n) {
        return "string" === typeof t ? t : o.px.transform(e + n * t);
      }
      const a = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        s = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function c(
        t,
        {
          attrX: e,
          attrY: n,
          originX: c,
          originY: u,
          pathLength: l,
          pathSpacing: d = 1,
          pathOffset: f = 0,
          ...p
        },
        h,
        v,
        m
      ) {
        if (((0, r.r)(t, p, h, m), v))
          return void (t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        (t.attrs = t.style), (t.style = {});
        const { attrs: g, style: y, dimensions: b } = t;
        g.transform && (b && (y.transform = g.transform), delete g.transform),
          b &&
            (void 0 !== c || void 0 !== u || y.transform) &&
            (y.transformOrigin = (function (t, e, n) {
              return `${i(e, t.x, t.width)} ${i(n, t.y, t.height)}`;
            })(b, void 0 !== c ? c : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== e && (g.x = e),
          void 0 !== n && (g.y = n),
          void 0 !== l &&
            (function (t, e, n = 1, r = 0, i = !0) {
              t.pathLength = 1;
              const c = i ? a : s;
              t[c.offset] = o.px.transform(-r);
              const u = o.px.transform(e),
                l = o.px.transform(n);
              t[c.array] = `${u} ${l}`;
            })(g, l, d, f, !1);
      }
    },
    77302: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return r;
        },
      });
      const r = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    79854: function (t, e, n) {
      "use strict";
      n.d(e, {
        a: function () {
          return r;
        },
      });
      const r = (t) => "string" === typeof t && "svg" === t.toLowerCase();
    },
    68504: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return a;
        },
      });
      var r = n(93193),
        o = n(34242),
        i = n(77302);
      function a(t, e, n, a) {
        (0, o.N)(t, e, void 0, a);
        for (const o in e.attrs)
          t.setAttribute(i.s.has(o) ? o : (0, r.D)(o), e.attrs[o]);
      }
    },
    16832: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return i;
        },
      });
      var r = n(40406),
        o = n(50189);
      function i(t) {
        const e = (0, o.U)(t);
        for (const n in t)
          if ((0, r.i)(t[n])) {
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
          }
        return e;
      }
    },
    9066: function (t, e, n) {
      "use strict";
      n.d(e, {
        d5: function () {
          return z;
        },
        p_: function () {
          return j;
        },
      });
      var r = n(5759),
        o = n(52248),
        i = n(94714),
        a = n(12490),
        s = n(30404);
      function c(t, e) {
        const { MotionAppearAnimations: n } = window,
          r = ((t, e) => `${t}: ${e}`)(t, i.G.has(e) ? "transform" : e),
          o = n && n.get(r);
        return o
          ? (s.Z_.render(() => {
              try {
                o.cancel(), n.delete(r);
              } catch (t) {}
            }),
            o.currentTime || 0)
          : 0;
      }
      const u = "data-" + (0, n(93193).D)("framerAppearId");
      var l = n(9340);
      const d = (t) => 1e3 * t,
        f = !1;
      var p = n(88741);
      const h = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
        v = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: h([0, 0.65, 0.55, 1]),
          circOut: h([0.55, 0, 1, 0.45]),
          backIn: h([0.31, 0.01, 0.66, -0.59]),
          backOut: h([0.33, 1.53, 0.69, 0.99]),
        };
      function m(t) {
        if (t) return Array.isArray(t) ? h(t) : v[t];
      }
      function g(t, e, { onUpdate: n, onComplete: r, ...o }) {
        let { keyframes: i, duration: a = 0.3, elapsed: c = 0, ease: u } = o;
        if (
          "spring" === o.type ||
          !(
            !(l = o.ease) ||
            Array.isArray(l) ||
            ("string" === typeof l && v[l])
          )
        ) {
          const t = (0, p.jt)(o);
          let e = { done: !1, value: i[0] };
          const n = [];
          let r = 0;
          for (; !e.done; ) (e = t.sample(r)), n.push(e.value), (r += 10);
          (i = n), (a = r - 10), (u = "linear");
        }
        var l;
        const d = (function (
          t,
          e,
          n,
          {
            delay: r = 0,
            duration: o,
            repeat: i = 0,
            repeatType: a = "loop",
            ease: s,
            times: c,
          } = {}
        ) {
          return t.animate(
            { [e]: n, offset: c },
            {
              delay: r,
              duration: o,
              easing: m(s),
              fill: "both",
              iterations: i + 1,
              direction: "reverse" === a ? "alternate" : "normal",
            }
          );
        })(t.owner.current, e, i, { ...o, delay: -c, duration: a, ease: u });
        return (
          (d.onfinish = () => {
            t.set(i[i.length - 1]), r && r();
          }),
          () => {
            const { currentTime: e } = d;
            if (e) {
              const n = (0, p.jt)(o);
              t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10);
            }
            s.Z_.update(() => d.cancel());
          }
        );
      }
      function y({ keyframes: t, elapsed: e, onUpdate: n, onComplete: r }) {
        const o = () => (n && n(t[t.length - 1]), r && r(), () => {});
        return e
          ? (function (t, e) {
              const n = performance.now(),
                r = ({ timestamp: o }) => {
                  const i = o - n;
                  i >= e && (s.qY.read(r), t(i - e));
                };
              return s.Z_.read(r, !0), () => s.qY.read(r);
            })(o, -e)
          : o();
      }
      var b = n(3038),
        x = n(37367);
      const w = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10,
        }),
        C = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        k = () => ({ type: "keyframes", ease: "linear", duration: 0.3 }),
        M = { type: "keyframes", duration: 0.8 },
        E = {
          x: w,
          y: w,
          z: w,
          rotate: w,
          rotateX: w,
          rotateY: w,
          rotateZ: w,
          scaleX: C,
          scaleY: C,
          scale: C,
          opacity: k,
          backgroundColor: k,
          color: k,
          default: C,
        },
        S = (t, { keyframes: e }) => {
          if (e.length > 2) return M;
          return (E[t] || E.default)(e[1]);
        };
      var L = n(51550);
      const A = (t, e) =>
        "zIndex" !== t &&
        (!("number" !== typeof e && !Array.isArray(e)) ||
          !("string" !== typeof e || !L.P.test(e) || e.startsWith("url(")));
      var B = n(79135);
      function P(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function Z(t) {
        return "number" === typeof t ? 0 : (0, B.T)("", t);
      }
      const T = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        O = {},
        V = {};
      for (const $ in T)
        V[$] = () => (void 0 === O[$] && (O[$] = T[$]()), O[$]);
      const R = new Set(["opacity"]),
        N =
          (t, e, n, r = {}) =>
          (o) => {
            const i =
                (function (t, e) {
                  return t[e] || t.default || t;
                })(r, t) || {},
              a = i.delay || r.delay || 0;
            let { elapsed: s = 0 } = r;
            s -= d(a);
            const c = (function (t, e, n, r) {
                const o = A(e, n);
                let i = void 0 !== r.from ? r.from : t.get();
                return (
                  "none" === i && o && "string" === typeof n
                    ? (i = (0, B.T)(e, n))
                    : P(i) && "string" === typeof n
                    ? (i = Z(n))
                    : !Array.isArray(n) &&
                      P(n) &&
                      "string" === typeof i &&
                      (n = Z(i)),
                  Array.isArray(n) ? (null === n[0] && (n[0] = i), n) : [i, n]
                );
              })(e, t, n, i),
              u = c[0],
              h = c[c.length - 1],
              v = A(t, u),
              m = A(t, h);
            (0, l.K)(
              v === m,
              `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`
            );
            let w = {
              keyframes: c,
              velocity: e.getVelocity(),
              ...i,
              elapsed: s,
              onUpdate: (t) => {
                e.set(t), i.onUpdate && i.onUpdate(t);
              },
              onComplete: () => {
                o(), i.onComplete && i.onComplete();
              },
            };
            if (!v || !m || f || !1 === i.type) return y(w);
            if ("inertia" === i.type) {
              const t = (function ({
                keyframes: t,
                velocity: e = 0,
                min: n,
                max: r,
                power: o = 0.8,
                timeConstant: i = 750,
                bounceStiffness: a = 500,
                bounceDamping: s = 10,
                restDelta: c = 1,
                modifyTarget: u,
                driver: l,
                onUpdate: d,
                onComplete: f,
                onStop: h,
              }) {
                const v = t[0];
                let m;
                function g(t) {
                  return (void 0 !== n && t < n) || (void 0 !== r && t > r);
                }
                function y(t) {
                  return void 0 === n
                    ? r
                    : void 0 === r || Math.abs(n - t) < Math.abs(r - t)
                    ? n
                    : r;
                }
                function w(t) {
                  null === m || void 0 === m || m.stop(),
                    (m = (0, p.jt)({
                      keyframes: [0, 1],
                      velocity: 0,
                      ...t,
                      driver: l,
                      onUpdate: (e) => {
                        var n;
                        null === d || void 0 === d || d(e),
                          null === (n = t.onUpdate) ||
                            void 0 === n ||
                            n.call(t, e);
                      },
                      onComplete: f,
                      onStop: h,
                    }));
                }
                function C(t) {
                  w({
                    type: "spring",
                    stiffness: a,
                    damping: s,
                    restDelta: c,
                    ...t,
                  });
                }
                if (g(v)) C({ velocity: e, keyframes: [v, y(v)] });
                else {
                  let t = o * e + v;
                  "undefined" !== typeof u && (t = u(t));
                  const r = y(t),
                    a = r === n ? -1 : 1;
                  let s, l;
                  const d = (t) => {
                    (s = l),
                      (l = t),
                      (e = (0, b.R)(t - s, x.frameData.delta)),
                      ((1 === a && t > r) || (-1 === a && t < r)) &&
                        C({ keyframes: [t, r], velocity: e });
                  };
                  w({
                    type: "decay",
                    keyframes: [v, 0],
                    velocity: e,
                    timeConstant: i,
                    power: o,
                    restDelta: c,
                    modifyTarget: u,
                    onUpdate: g(t) ? d : void 0,
                  });
                }
                return {
                  stop: () => (null === m || void 0 === m ? void 0 : m.stop()),
                };
              })(w);
              return () => t.stop();
            }
            (function ({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: r,
              staggerDirection: o,
              repeat: i,
              repeatType: a,
              repeatDelay: s,
              from: c,
              ...u
            }) {
              return !!Object.keys(u).length;
            })(i) || (w = { ...w, ...S(t, w) }),
              w.duration && (w.duration = d(w.duration)),
              w.repeatDelay && (w.repeatDelay = d(w.repeatDelay));
            const C = e.owner,
              k = C && C.current;
            if (
              V.waapi() &&
              R.has(t) &&
              !w.repeatDelay &&
              "mirror" !== w.repeatType &&
              0 !== w.damping &&
              C &&
              k instanceof HTMLElement &&
              !C.getProps().onUpdate
            )
              return g(e, t, w);
            {
              const t = (0, p.jt)(w);
              return () => t.stop();
            }
          };
      function z(t, e, n = {}) {
        let r;
        if ((t.notify("AnimationStart", e), Array.isArray(e))) {
          const o = e.map((e) => _(t, e, n));
          r = Promise.all(o);
        } else if ("string" === typeof e) r = _(t, e, n);
        else {
          const i = "function" === typeof e ? (0, o.x)(t, e, n.custom) : e;
          r = I(t, i, n);
        }
        return r.then(() => t.notify("AnimationComplete", e));
      }
      function _(t, e, n = {}) {
        var r;
        const i = (0, o.x)(t, e, n.custom);
        let { transition: a = t.getDefaultTransition() || {} } = i || {};
        n.transitionOverride && (a = n.transitionOverride);
        const s = i ? () => I(t, i, n) : () => Promise.resolve(),
          c = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? (r = 0) => {
                const {
                  delayChildren: o = 0,
                  staggerChildren: i,
                  staggerDirection: s,
                } = a;
                return (function (t, e, n = 0, r = 0, o = 1, i) {
                  const a = [],
                    s = (t.variantChildren.size - 1) * r,
                    c = 1 === o ? (t = 0) => t * r : (t = 0) => s - t * r;
                  return (
                    Array.from(t.variantChildren)
                      .sort(F)
                      .forEach((t, r) => {
                        a.push(
                          _(t, e, { ...i, delay: n + c(r) }).then(() =>
                            t.notify("AnimationComplete", e)
                          )
                        );
                      }),
                    Promise.all(a)
                  );
                })(t, e, o + r, i, s, n);
              }
            : () => Promise.resolve(),
          { when: u } = a;
        if (u) {
          const [t, e] = "beforeChildren" === u ? [s, c] : [c, s];
          return t().then(e);
        }
        return Promise.all([s(), c(n.delay)]);
      }
      function I(t, e, { delay: n = 0, transitionOverride: o, type: s } = {}) {
        var l;
        let {
          transition: d = t.getDefaultTransition(),
          transitionEnd: f,
          ...p
        } = t.makeTargetAnimatable(e);
        const h = t.getValue("willChange");
        o && (d = o);
        const v = [],
          m =
            s &&
            (null === (l = t.animationState) || void 0 === l
              ? void 0
              : l.getState()[s]);
        for (const r in p) {
          const e = t.getValue(r),
            o = p[r];
          if (!e || void 0 === o || (m && H(m, r))) continue;
          let s = { delay: n, elapsed: 0, ...d };
          if (
            (t.shouldReduceMotion &&
              i.G.has(r) &&
              (s = { ...s, type: !1, delay: 0 }),
            !e.hasAnimated)
          ) {
            const e = t.getProps()[u];
            e && (s.elapsed = c(e, r));
          }
          let l = e.start(N(r, e, o, s));
          (0, a.L)(h) && (h.add(r), (l = l.then(() => h.remove(r)))), v.push(l);
        }
        return Promise.all(v).then(() => {
          f && (0, r.CD)(t, f);
        });
      }
      function j(t) {
        t.values.forEach((t) => t.stop());
      }
      function F(t, e) {
        return t.sortNodePosition(e);
      }
      function H({ protectedKeys: t, needsAnimating: e }, n) {
        const r = t.hasOwnProperty(n) && !0 !== e[n];
        return (e[n] = !1), r;
      }
    },
    7504: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return a;
        },
        M: function () {
          return s;
        },
      });
      var r = n(2445),
        o = n(97732);
      const i = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];
      function a(t) {
        return (0, r.H)(t.animate) || i.some((e) => (0, o.$)(t[e]));
      }
      function s(t) {
        return Boolean(a(t) || t.variants);
      }
    },
    97732: function (t, e, n) {
      "use strict";
      function r(t) {
        return "string" === typeof t || Array.isArray(t);
      }
      n.d(e, {
        $: function () {
          return r;
        },
      });
    },
    52248: function (t, e, n) {
      "use strict";
      n.d(e, {
        x: function () {
          return o;
        },
      });
      var r = n(79432);
      function o(t, e, n) {
        const o = t.getProps();
        return (0, r.o)(
          o,
          e,
          void 0 !== n ? n : o.custom,
          (function (t) {
            const e = {};
            return t.values.forEach((t, n) => (e[n] = t.get())), e;
          })(t),
          (function (t) {
            const e = {};
            return t.values.forEach((t, n) => (e[n] = t.getVelocity())), e;
          })(t)
        );
      }
    },
    79432: function (t, e, n) {
      "use strict";
      function r(t, e, n, r = {}, o = {}) {
        return (
          "function" === typeof e && (e = e(void 0 !== n ? n : t.custom, r, o)),
          "string" === typeof e && (e = t.variants && t.variants[e]),
          "function" === typeof e && (e = e(void 0 !== n ? n : t.custom, r, o)),
          e
        );
      }
      n.d(e, {
        o: function () {
          return r;
        },
      });
    },
    5759: function (t, e, n) {
      "use strict";
      n.d(e, {
        GJ: function () {
          return y;
        },
        P$: function () {
          return x;
        },
        CD: function () {
          return v;
        },
        gg: function () {
          return g;
        },
      });
      const r = (t) => /^0[^.\s]+$/.test(t);
      var o = n(8715),
        i = n(33234),
        a = n(51550),
        s = n(79135),
        c = n(85385),
        u = n(56440),
        l = n(88340);
      const d = [...u.$, c.$, a.P],
        f = (t) => d.find((0, l.l)(t));
      var p = n(52248);
      function h(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, i.B)(n));
      }
      function v(t, e) {
        const n = (0, p.x)(t, e);
        let {
          transitionEnd: r = {},
          transition: i = {},
          ...a
        } = n ? t.makeTargetAnimatable(n, !1) : {};
        a = { ...a, ...r };
        for (const s in a) {
          h(t, s, (0, o.Y)(a[s]));
        }
      }
      function m(t, e) {
        [...e].reverse().forEach((n) => {
          var r;
          const o = t.getVariant(n);
          o && v(t, o),
            null === (r = t.variantChildren) ||
              void 0 === r ||
              r.forEach((t) => {
                m(t, e);
              });
        });
      }
      function g(t, e) {
        return Array.isArray(e)
          ? m(t, e)
          : "string" === typeof e
          ? m(t, [e])
          : void v(t, e);
      }
      function y(t, e, n) {
        var o, c;
        const u = Object.keys(e).filter((e) => !t.hasValue(e)),
          l = u.length;
        if (l)
          for (let d = 0; d < l; d++) {
            const l = u[d],
              p = e[l];
            let h = null;
            Array.isArray(p) && (h = p[0]),
              null === h &&
                (h =
                  null !==
                    (c =
                      null !== (o = n[l]) && void 0 !== o
                        ? o
                        : t.readValue(l)) && void 0 !== c
                    ? c
                    : e[l]),
              void 0 !== h &&
                null !== h &&
                ("string" === typeof h && (/^\-?\d*\.?\d+$/.test(h) || r(h))
                  ? (h = parseFloat(h))
                  : !f(h) && a.P.test(p) && (h = (0, s.T)(l, p)),
                t.addValue(l, (0, i.B)(h, { owner: t })),
                void 0 === n[l] && (n[l] = h),
                null !== h && t.setBaseTarget(l, h));
          }
      }
      function b(t, e) {
        if (!e) return;
        return (e[t] || e.default || e).from;
      }
      function x(t, e, n) {
        var r;
        const o = {};
        for (const i in t) {
          const t = b(i, e);
          o[i] =
            void 0 !== t
              ? t
              : null === (r = n.getValue(i)) || void 0 === r
              ? void 0
              : r.get();
        }
        return o;
      }
    },
    24169: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return r;
        },
      });
      const r = (t, e, n) => Math.min(Math.max(n, t), e);
    },
    52200: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return k;
        },
      });
      var r = n(9340),
        o = n(85385),
        i = n(24169);
      const a = (t, e, n) => -n * t + n * e + t;
      function s(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      var c = n(26382),
        u = n(40819),
        l = n(93184);
      const d = (t, e, n) => {
          const r = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - r) + r));
        },
        f = [c.$, u.m, l.J];
      function p(t) {
        const e = ((n = t), f.find((t) => t.test(n)));
        var n;
        (0, r.k)(
          Boolean(e),
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let o = e.parse(t);
        return (
          e === l.J &&
            (o = (function ({ hue: t, saturation: e, lightness: n, alpha: r }) {
              (t /= 360), (n /= 100);
              let o = 0,
                i = 0,
                a = 0;
              if ((e /= 100)) {
                const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  c = 2 * n - r;
                (o = s(c, r, t + 1 / 3)),
                  (i = s(c, r, t)),
                  (a = s(c, r, t - 1 / 3));
              } else o = i = a = n;
              return {
                red: Math.round(255 * o),
                green: Math.round(255 * i),
                blue: Math.round(255 * a),
                alpha: r,
              };
            })(o)),
          o
        );
      }
      const h = (t, e) => {
        const n = p(t),
          r = p(e),
          o = { ...n };
        return (t) => (
          (o.red = d(n.red, r.red, t)),
          (o.green = d(n.green, r.green, t)),
          (o.blue = d(n.blue, r.blue, t)),
          (o.alpha = a(n.alpha, r.alpha, t)),
          u.m.transform(o)
        );
      };
      var v = n(83624),
        m = n(51550);
      function g(t, e) {
        return "number" === typeof t
          ? (n) => a(t, e, n)
          : o.$.test(t)
          ? h(t, e)
          : x(t, e);
      }
      const y = (t, e) => {
          const n = [...t],
            r = n.length,
            o = t.map((t, n) => g(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = o[e](t);
            return n;
          };
        },
        b = (t, e) => {
          const n = { ...t, ...e },
            r = {};
          for (const o in n)
            void 0 !== t[o] && void 0 !== e[o] && (r[o] = g(t[o], e[o]));
          return (t) => {
            for (const e in r) n[e] = r[e](t);
            return n;
          };
        },
        x = (t, e) => {
          const n = m.P.createTransformer(e),
            o = (0, m.V)(t),
            i = (0, m.V)(e);
          return o.numColors === i.numColors && o.numNumbers >= i.numNumbers
            ? (0, v.z)(y(o.values, i.values), n)
            : ((0, r.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              (n) => `${n > 0 ? e : t}`);
        },
        w = (t, e) => (n) => a(t, e, n);
      function C(t, e, n) {
        const r = [],
          i =
            n ||
            ("number" === typeof (a = t[0])
              ? w
              : "string" === typeof a
              ? o.$.test(a)
                ? h
                : x
              : Array.isArray(a)
              ? y
              : "object" === typeof a
              ? b
              : w);
        var a;
        const s = t.length - 1;
        for (let o = 0; o < s; o++) {
          let n = i(t[o], t[o + 1]);
          if (e) {
            const t = Array.isArray(e) ? e[o] : e;
            n = (0, v.z)(t, n);
          }
          r.push(n);
        }
        return r;
      }
      function k(t, e, { clamp: n = !0, ease: o, mixer: a } = {}) {
        const s = t.length;
        (0, r.k)(
          s === e.length,
          "Both input and output ranges must be the same length"
        ),
          (0, r.k)(
            !o || !Array.isArray(o) || o.length === s - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        const c = C(e, o, a),
          u = c.length,
          l = (e) => {
            let n = 0;
            if (u > 1) for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            const r = ((t, e, n) => {
              const r = e - t;
              return 0 === r ? 1 : (n - t) / r;
            })(t[n], t[n + 1], e);
            return c[n](r);
          };
        return n ? (e) => l((0, i.u)(t[0], t[s - 1], e)) : l;
      }
    },
    11741: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return r;
        },
      });
      const r = "undefined" !== typeof document;
    },
    51804: function (t, e, n) {
      "use strict";
      function r(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      n.d(e, {
        I: function () {
          return r;
        },
      });
    },
    83624: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return o;
        },
      });
      const r = (t, e) => (n) => e(t(n)),
        o = (...t) => t.reduce(r);
    },
    49304: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return o;
        },
      });
      var r = n(34406);
      const o = ("undefined" === typeof r || r.env, "production");
    },
    8715: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return i;
        },
        p: function () {
          return o;
        },
      });
      var r = n(48488);
      const o = (t) =>
          Boolean(t && "object" === typeof t && t.mix && t.toValue),
        i = (t) => ((0, r.C)(t) ? t[t.length - 1] || 0 : t);
    },
    65985: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return r;
        },
      });
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          var e, n;
          return (
            (e = this.subscriptions),
            (n = t),
            -1 === e.indexOf(n) && e.push(n),
            () =>
              (function (t, e) {
                const n = t.indexOf(e);
                n > -1 && t.splice(n, 1);
              })(this.subscriptions, t)
          );
        }
        notify(t, e, n) {
          const r = this.subscriptions.length;
          if (r)
            if (1 === r) this.subscriptions[0](t, e, n);
            else
              for (let o = 0; o < r; o++) {
                const r = this.subscriptions[o];
                r && r(t, e, n);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    96681: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return o;
        },
      });
      var r = n(2784);
      function o(t) {
        const e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    58868: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return o;
        },
      });
      var r = n(2784);
      const o = n(11741).j ? r.useLayoutEffect : r.useEffect;
    },
    65411: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return o;
        },
      });
      var r = n(2784);
      function o(t) {
        return (0, r.useEffect)(() => () => t(), []);
      }
    },
    3038: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      n.d(e, {
        R: function () {
          return r;
        },
      });
    },
    16034: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return o;
        },
      });
      const r = new Set();
      function o(t, e, n) {
        t || r.has(e) || (console.warn(e), n && console.warn(n), r.add(e));
      }
    },
    33234: function (t, e, n) {
      "use strict";
      n.d(e, {
        B: function () {
          return c;
        },
      });
      var r = n(37367),
        o = n(30404),
        i = n(65985),
        a = n(3038);
      class s {
        constructor(t, e = {}) {
          var n;
          (this.version = "7.10.3"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              const { delta: n, timestamp: i } = r.frameData;
              this.lastUpdated !== i &&
                ((this.timeDelta = n),
                (this.lastUpdated = i),
                o.Z_.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              o.Z_.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity =
              ((n = this.current), !isNaN(parseFloat(n)))),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new i.L()),
            this.events[t].add(e)
          );
        }
        clearListeners() {
          for (const t in this.events) this.events[t].clear();
        }
        attach(t) {
          this.passiveEffect = t;
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e), (this.prev = t), (this.timeDelta = n);
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? (0, a.R)(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.stopAnimation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.stopAnimation &&
            (this.stopAnimation(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.stopAnimation;
        }
        clearAnimation() {
          this.stopAnimation = null;
        }
        destroy() {
          this.clearListeners(), this.stop();
        }
      }
      function c(t, e) {
        return new s(t, e);
      }
    },
    26382: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return o;
        },
      });
      var r = n(40819);
      const o = {
        test: (0, n(98834).i)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            r = "",
            o = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (n = t.substring(3, 5)),
                (r = t.substring(5, 7)),
                (o = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (n = t.substring(2, 3)),
                (r = t.substring(3, 4)),
                (o = t.substring(4, 5)),
                (e += e),
                (n += n),
                (r += r),
                (o += o)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: o ? parseInt(o, 16) / 255 : 1,
            }
          );
        },
        transform: r.m.transform,
      };
    },
    93184: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return s;
        },
      });
      var r = n(61649),
        o = n(96190),
        i = n(36430),
        a = n(98834);
      const s = {
        test: (0, a.i)("hsl", "hue"),
        parse: (0, a.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          o.aQ.transform((0, i.Nw)(e)) +
          ", " +
          o.aQ.transform((0, i.Nw)(n)) +
          ", " +
          (0, i.Nw)(r.Fq.transform(a)) +
          ")",
      };
    },
    85385: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return s;
        },
      });
      var r = n(36430),
        o = n(26382),
        i = n(93184),
        a = n(40819);
      const s = {
        test: (t) => a.m.test(t) || o.$.test(t) || i.J.test(t),
        parse: (t) =>
          a.m.test(t)
            ? a.m.parse(t)
            : i.J.test(t)
            ? i.J.parse(t)
            : o.$.parse(t),
        transform: (t) =>
          (0, r.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? a.m.transform(t)
            : i.J.transform(t),
      };
    },
    40819: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return c;
        },
      });
      var r = n(24169),
        o = n(61649),
        i = n(36430),
        a = n(98834);
      const s = {
          ...o.Rx,
          transform: (t) => Math.round(((t) => (0, r.u)(0, 255, t))(t)),
        },
        c = {
          test: (0, a.i)("rgb", "red"),
          parse: (0, a.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            s.transform(t) +
            ", " +
            s.transform(e) +
            ", " +
            s.transform(n) +
            ", " +
            (0, i.Nw)(o.Fq.transform(r)) +
            ")",
        };
    },
    98834: function (t, e, n) {
      "use strict";
      n.d(e, {
        d: function () {
          return i;
        },
        i: function () {
          return o;
        },
      });
      var r = n(36430);
      const o = (t, e) => (n) =>
          Boolean(
            ((0, r.HD)(n) && r.mj.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        i = (t, e, n) => (o) => {
          if (!(0, r.HD)(o)) return o;
          const [i, a, s, c] = o.match(r.KP);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(a),
            [n]: parseFloat(s),
            alpha: void 0 !== c ? parseFloat(c) : 1,
          };
        };
    },
    97197: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return c;
        },
      });
      var r = n(51550),
        o = n(36430);
      const i = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function a(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(o.KP) || [];
        if (!r) return t;
        const a = n.replace(r, "");
        let s = i.has(e) ? 1 : 0;
        return r !== n && (s *= 100), e + "(" + s + a + ")";
      }
      const s = /([a-z-]*)\(.*?\)/g,
        c = {
          ...r.P,
          getAnimatableNone: (t) => {
            const e = t.match(s);
            return e ? e.map(a).join(" ") : t;
          },
        };
    },
    51550: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return f;
        },
        V: function () {
          return c;
        },
      });
      var r = n(85385),
        o = n(61649),
        i = n(36430);
      const a = "${c}",
        s = "${n}";
      function c(t) {
        "number" === typeof t && (t = `${t}`);
        const e = [];
        let n = 0,
          c = 0;
        const u = t.match(i.dA);
        u &&
          ((n = u.length),
          (t = t.replace(i.dA, a)),
          e.push(...u.map(r.$.parse)));
        const l = t.match(i.KP);
        return (
          l &&
            ((c = l.length),
            (t = t.replace(i.KP, s)),
            e.push(...l.map(o.Rx.parse))),
          { values: e, numColors: n, numNumbers: c, tokenised: t }
        );
      }
      function u(t) {
        return c(t).values;
      }
      function l(t) {
        const { values: e, numColors: n, tokenised: o } = c(t),
          u = e.length;
        return (t) => {
          let e = o;
          for (let o = 0; o < u; o++)
            e = e.replace(
              o < n ? a : s,
              o < n ? r.$.transform(t[o]) : (0, i.Nw)(t[o])
            );
          return e;
        };
      }
      const d = (t) => ("number" === typeof t ? 0 : t);
      const f = {
        test: function (t) {
          var e, n;
          return (
            isNaN(t) &&
            (0, i.HD)(t) &&
            ((null === (e = t.match(i.KP)) || void 0 === e
              ? void 0
              : e.length) || 0) +
              ((null === (n = t.match(i.dA)) || void 0 === n
                ? void 0
                : n.length) || 0) >
              0
          );
        },
        parse: u,
        createTransformer: l,
        getAnimatableNone: function (t) {
          const e = u(t);
          return l(t)(e.map(d));
        },
      };
    },
    61649: function (t, e, n) {
      "use strict";
      n.d(e, {
        Fq: function () {
          return i;
        },
        Rx: function () {
          return o;
        },
        bA: function () {
          return a;
        },
      });
      var r = n(24169);
      const o = {
          test: (t) => "number" === typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        i = { ...o, transform: (t) => (0, r.u)(0, 1, t) },
        a = { ...o, default: 1 };
    },
    96190: function (t, e, n) {
      "use strict";
      n.d(e, {
        $C: function () {
          return l;
        },
        RW: function () {
          return i;
        },
        aQ: function () {
          return a;
        },
        px: function () {
          return s;
        },
        vh: function () {
          return c;
        },
        vw: function () {
          return u;
        },
      });
      var r = n(36430);
      const o = (t) => ({
          test: (e) =>
            (0, r.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        i = o("deg"),
        a = o("%"),
        s = o("px"),
        c = o("vh"),
        u = o("vw"),
        l = {
          ...a,
          parse: (t) => a.parse(t) / 100,
          transform: (t) => a.transform(100 * t),
        };
    },
    36430: function (t, e, n) {
      "use strict";
      n.d(e, {
        HD: function () {
          return s;
        },
        KP: function () {
          return o;
        },
        Nw: function () {
          return r;
        },
        dA: function () {
          return i;
        },
        mj: function () {
          return a;
        },
      });
      const r = (t) => Math.round(1e5 * t) / 1e5,
        o = /(-)?([\d]*\.?[\d])+/g,
        i =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        a =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function s(t) {
        return "string" === typeof t;
      }
    },
    12490: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return o;
        },
      });
      var r = n(40406);
      function o(t) {
        return Boolean((0, r.i)(t) && t.add);
      }
    },
    40406: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return r;
        },
      });
      const r = (t) => !!(null === t || void 0 === t ? void 0 : t.getVelocity);
    },
    7896: function (t, e, n) {
      "use strict";
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          r.apply(this, arguments)
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    73235: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      n.d(e, {
        _: function () {
          return r;
        },
      });
    },
    62908: function (t, e, n) {
      "use strict";
      n.d(e, {
        yx: function () {
          return i;
        },
      });
      var r = Math.PI,
        o = r / 2;
      function i(t) {
        return 1 === +t ? 1 : 1 - Math.cos(t * o);
      }
    },
    50154: function (t, e, n) {
      "use strict";
      n.d(e, {
        cn: function () {
          return w;
        },
        KO: function () {
          return M;
        },
        Dv: function () {
          return C;
        },
        b9: function () {
          return k;
        },
      });
      var r = n(2784);
      let o = 0;
      const i = Symbol(),
        a = (t) => !!t[i],
        s = (t) => !t[i].c,
        c = (t) => {
          var e;
          const { b: n, c: r } = t[i];
          r && (r(), null == (e = d.get(n)) || e());
        },
        u = (t, e) => {
          const n = t[i].o,
            r = e[i].o;
          return n === r || t === r || (a(n) && u(n, e));
        },
        l = (t, e) => {
          const n = { b: t, o: e, c: null },
            r = new Promise((t) => {
              (n.c = () => {
                (n.c = null), t();
              }),
                e.finally(n.c);
            });
          return (r[i] = n), r;
        },
        d = new WeakMap(),
        f = (t) => "init" in t,
        p = "r",
        h = "w",
        v = "c",
        m = "s",
        g = (t) => {
          const e = new WeakMap(),
            n = new WeakMap(),
            r = new Map();
          let o, d;
          if (((o = new Set()), (d = new Set()), t))
            for (const [i, a] of t) {
              const t = { v: a, r: 0, y: !0, d: new Map() };
              Object.freeze(t),
                f(i) ||
                  console.warn(
                    "Found initial value for derived atom which can cause unexpected behavior",
                    i
                  ),
                e.set(i, t);
            }
          const g = new WeakMap(),
            y = new WeakMap(),
            b = (t) => {
              let e = y.get(t);
              return e || ((e = new Map()), y.set(t, e)), e;
            },
            x = (t, n) => {
              if (t) {
                const e = b(t);
                let r = e.get(n);
                return (
                  r ||
                    ((r = x(t.p, n)),
                    r && "p" in r && s(r.p) && (r = void 0),
                    r && e.set(n, r)),
                  r
                );
              }
              return e.get(n);
            },
            w = (t, n, o) => {
              if ((Object.freeze(o), t)) {
                b(t).set(n, o);
              } else {
                const t = e.get(n);
                e.set(n, o), r.has(n) || r.set(n, t);
              }
            },
            C = (t, e = new Map(), n) => {
              if (!n) return e;
              const r = new Map();
              let o = !1;
              return (
                n.forEach((n) => {
                  var i;
                  const a = (null == (i = x(t, n)) ? void 0 : i.r) || 0;
                  r.set(n, a), e.get(n) !== a && (o = !0);
                }),
                e.size !== r.size || o ? r : e
              );
            },
            k = (t, e, n, r, o) => {
              const i = x(t, e);
              if (i) {
                if (o && (!("p" in i) || !u(i.p, o))) return i;
                "p" in i && c(i.p);
              }
              const a = {
                v: n,
                r: (null == i ? void 0 : i.r) || 0,
                y: !0,
                d: C(t, null == i ? void 0 : i.d, r),
              };
              let s = !(null == i ? void 0 : i.y);
              return (
                i && "v" in i && Object.is(i.v, n)
                  ? a.d === i.d ||
                    (a.d.size === i.d.size &&
                      Array.from(a.d.keys()).every((t) => i.d.has(t))) ||
                    ((s = !0),
                    Promise.resolve().then(() => {
                      N(t);
                    }))
                  : ((s = !0),
                    ++a.r,
                    a.d.has(e) && (a.d = new Map(a.d).set(e, a.r))),
                i && !s ? i : (w(t, e, a), a)
              );
            },
            M = (t, e, n, r, o) => {
              const i = x(t, e);
              if (i) {
                if (o && (!("p" in i) || !u(i.p, o))) return i;
                "p" in i && c(i.p);
              }
              const a = {
                e: n,
                r: ((null == i ? void 0 : i.r) || 0) + 1,
                y: !0,
                d: C(t, null == i ? void 0 : i.d, r),
              };
              return w(t, e, a), a;
            },
            E = (t, e, n, r) => {
              const o = x(t, e);
              if (o && "p" in o) {
                if (u(o.p, n) && !s(o.p)) return o.y ? o : { ...o, y: !0 };
                c(o.p);
              }
              ((t, e, n) => {
                let r = g.get(e);
                r || ((r = new Map()), g.set(e, r)),
                  n.then(() => {
                    r.get(t) === n && (r.delete(t), r.size || g.delete(e));
                  }),
                  r.set(t, n);
              })(t, e, n);
              const i = {
                p: n,
                r: ((null == o ? void 0 : o.r) || 0) + 1,
                y: !0,
                d: C(t, null == o ? void 0 : o.d, r),
              };
              return w(t, e, i), i;
            },
            S = (t, e, n, r) => {
              if (n instanceof Promise) {
                const o = l(
                  n,
                  n
                    .then((n) => {
                      k(t, e, n, r, o);
                    })
                    .catch((n) => {
                      if (n instanceof Promise)
                        return a(n)
                          ? n.then(() => {
                              L(t, e, !0);
                            })
                          : n;
                      M(t, e, n, r, o);
                    })
                );
                return E(t, e, o, r);
              }
              return k(t, e, n, r);
            },
            L = (t, e, r) => {
              if (!r) {
                const r = x(t, e);
                if (r) {
                  if (r.y && "p" in r && !s(r.p)) return r;
                  if (
                    (r.d.forEach((r, o) => {
                      if (o !== e)
                        if (n.has(o)) {
                          const e = x(t, o);
                          e && !e.y && L(t, o);
                        } else L(t, o);
                    }),
                    Array.from(r.d).every(([e, n]) => {
                      const r = x(t, e);
                      return r && !("p" in r) && r.r === n;
                    }))
                  )
                    return r.y ? r : { ...r, y: !0 };
                }
              }
              const o = new Set();
              try {
                const n = e.read((n) => {
                  o.add(n);
                  const r = n === e ? x(t, n) : L(t, n);
                  if (r) {
                    if ("e" in r) throw r.e;
                    if ("p" in r) throw r.p;
                    return r.v;
                  }
                  if (f(n)) return n.init;
                  throw new Error("no atom init");
                });
                return S(t, e, n, o);
              } catch (c) {
                if (c instanceof Promise) {
                  const n =
                    a(c) && s(c) ? ((t) => l(t[i].b, t[i].o))(c) : l(c, c);
                  return E(t, e, n, o);
                }
                return M(t, e, c, o);
              }
            },
            A = (t, e) => L(e, t),
            B = (t, e) =>
              !e.l.size && (!e.t.size || (1 === e.t.size && e.t.has(t))),
            P = (t, e) => {
              const r = n.get(e);
              null == r ||
                r.t.forEach((n) => {
                  n !== e &&
                    (((t, e) => {
                      const n = x(t, e);
                      if (n) {
                        const r = { ...n, y: !1 };
                        w(t, e, r);
                      } else
                        console.warn(
                          "[Bug] could not invalidate non existing atom",
                          e
                        );
                    })(t, n),
                    P(t, n));
                });
            },
            Z = (t, e, n) => {
              let r = !0;
              const o = (e, n) => {
                  const r = L(t, e);
                  if ("e" in r) throw r.e;
                  if ("p" in r) {
                    if (null == n ? void 0 : n.unstable_promise)
                      return r.p.then(() => {
                        const i = x(t, e);
                        return i && "p" in i && i.p === r.p
                          ? new Promise((t) => setTimeout(t)).then(() =>
                              o(e, n)
                            )
                          : o(e, n);
                      });
                    throw (
                      (console.info(
                        "Reading pending atom state in write operation. We throw a promise for now.",
                        e
                      ),
                      r.p)
                    );
                  }
                  if ("v" in r) return r.v;
                  throw (
                    (console.warn(
                      "[Bug] no value found while reading atom in write operation. This is probably a bug.",
                      e
                    ),
                    new Error("no value found"))
                  );
                },
                i = e.write(
                  o,
                  (n, o) => {
                    let i;
                    if (n === e) {
                      if (!f(n)) throw new Error("atom not writable");
                      const e = ((t) => {
                        const e = new Set(),
                          n = g.get(t);
                        return (
                          n &&
                            (g.delete(t),
                            n.forEach((t, n) => {
                              c(t), e.add(n);
                            })),
                          e
                        );
                      })(n);
                      e.forEach((e) => {
                        e !== t && S(e, n, o);
                      });
                      x(t, n) !== S(t, n, o) && P(t, n);
                    } else i = Z(t, n, o);
                    return r || N(t), i;
                  },
                  n
                );
              return (r = !1), i;
            },
            T = (t, e, n) => {
              const r = Z(n, t, e);
              return N(n), r;
            },
            O = (t, e, r) => {
              const o = { t: new Set(r && [r]), l: new Set() };
              n.set(e, o), d.add(e);
              if (
                (L(void 0, e).d.forEach((r, o) => {
                  const i = n.get(o);
                  i ? i.t.add(e) : o !== e && O(t, o, e);
                }),
                ((t) => !!t.write)(e) && e.onMount)
              ) {
                const n = (n) => T(e, n, t),
                  r = e.onMount(n);
                (t = void 0), r && (o.u = r);
              }
              return o;
            },
            V = (t, e) => {
              var r;
              const o = null == (r = n.get(e)) ? void 0 : r.u;
              o && o(), n.delete(e), d.delete(e);
              const i = x(t, e);
              i
                ? ("p" in i && c(i.p),
                  i.d.forEach((r, o) => {
                    if (o !== e) {
                      const r = n.get(o);
                      r && (r.t.delete(e), B(o, r) && V(t, o));
                    }
                  }))
                : console.warn("[Bug] could not find atom state to unmount", e);
            },
            R = (t, e, r, o) => {
              const i = new Set(r.d.keys());
              null == o ||
                o.forEach((r, o) => {
                  if (i.has(o)) return void i.delete(o);
                  const a = n.get(o);
                  a && (a.t.delete(e), B(o, a) && V(t, o));
                }),
                i.forEach((r) => {
                  const o = n.get(r);
                  o ? o.t.add(e) : n.has(e) && O(t, r, e);
                });
            },
            N = (t) => {
              if (t) {
                b(t).forEach((r, o) => {
                  if (r !== e.get(o)) {
                    const e = n.get(o);
                    null == e || e.l.forEach((e) => e(t));
                  }
                });
              } else {
                for (; r.size; ) {
                  const t = Array.from(r);
                  r.clear(),
                    t.forEach(([t, e]) => {
                      const r = x(void 0, t);
                      if (
                        (r &&
                          r.d !== (null == e ? void 0 : e.d) &&
                          R(void 0, t, r, null == e ? void 0 : e.d),
                        e && !e.y && (null == r ? void 0 : r.y))
                      )
                        return;
                      const o = n.get(t);
                      null == o || o.l.forEach((t) => t());
                    });
                }
                o.forEach((t) => t());
              }
            },
            z = (t, n) => {
              n &&
                ((t) => {
                  b(t).forEach((n, r) => {
                    const o = e.get(r);
                    (!o ||
                      n.r > o.r ||
                      n.y !== o.y ||
                      (n.r === o.r && n.d !== o.d)) &&
                      (e.set(r, n),
                      n.d !== (null == o ? void 0 : o.d) &&
                        R(t, r, n, null == o ? void 0 : o.d));
                  });
                })(n),
                N(void 0);
            },
            _ = (t, e, r) => {
              const o = ((t, e) => {
                  let r = n.get(e);
                  return r || (r = O(t, e)), r;
                })(r, t),
                i = o.l;
              return (
                i.add(e),
                () => {
                  i.delete(e),
                    ((t, e) => {
                      const r = n.get(e);
                      r && B(e, r) && V(t, e);
                    })(r, t);
                }
              );
            },
            I = (t, e) => {
              for (const [n, r] of t) f(n) && (S(e, n, r), P(e, n));
              N(e);
            };
          return {
            [p]: A,
            [h]: T,
            [v]: z,
            [m]: _,
            h: I,
            n: (t) => (
              o.add(t),
              () => {
                o.delete(t);
              }
            ),
            l: () => d.values(),
            a: (t) => e.get(t),
            m: (t) => n.get(t),
          };
        },
        y = (t, e) => ({ s: e ? e(t).SECRET_INTERNAL_store : g(t) }),
        b = new Map(),
        x = (t) => (b.has(t) || b.set(t, (0, r.createContext)(y())), b.get(t));
      function w(t, e) {
        return (function (t, e) {
          const n = "atom" + ++o,
            r = { toString: () => n };
          return (
            "function" === typeof t
              ? (r.read = t)
              : ((r.init = t),
                (r.read = (t) => t(r)),
                (r.write = (t, e, n) =>
                  e(r, "function" === typeof n ? n(t(r)) : n))),
            e && (r.write = e),
            r
          );
        })(t, e);
      }
      function C(t, e) {
        const n = x(e),
          o = (0, r.useContext)(n),
          { s: i, v: a } = o,
          s = (e) => {
            const n = i.r(t, e);
            if (!n.y) throw new Error("should not be invalidated");
            if ("e" in n) throw n.e;
            if ("p" in n) throw n.p;
            if ("v" in n) return n.v;
            throw new Error("no atom value");
          },
          [[c, u, l], d] = (0, r.useReducer)(
            (e, n) => {
              const r = s(n);
              return Object.is(e[1], r) && e[2] === t ? e : [n, r, t];
            },
            a,
            (e) => [e, s(e), t]
          );
        let f = u;
        return (
          l !== t && (d(c), (f = s(c))),
          (0, r.useEffect)(() => {
            const { v: e } = o;
            e && i.c(t, e);
            const n = i.s(t, d, e);
            return d(e), n;
          }, [i, t, o]),
          (0, r.useEffect)(() => {
            i.c(t, c);
          }),
          (0, r.useDebugValue)(f),
          f
        );
      }
      function k(t, e) {
        const n = x(e),
          { s: o, w: i } = (0, r.useContext)(n);
        return (0, r.useCallback)(
          (e) => {
            if (!("write" in t)) throw new Error("not writable atom");
            const n = (n) => o.w(t, e, n);
            return i ? i(n) : n();
          },
          [o, i, t]
        );
      }
      function M(t, e) {
        return (
          "scope" in t &&
            (console.warn(
              "atom.scope is deprecated. Please do useAtom(atom, scope) instead."
            ),
            (e = t.scope)),
          [C(t, e), k(t, e)]
        );
      }
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(86570), e(16244);
    });
    var n = t.O();
    _N_E = n;
  },
]);
