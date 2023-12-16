(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    35300: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function i(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" !== typeof e || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" !== typeof r) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" === typeof t ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e) {
        return (
          "span" === e._type &&
          "text" in e &&
          "string" === typeof e.text &&
          ("undefined" === typeof e.marks ||
            (Array.isArray(e.marks) &&
              e.marks.every((e) => "string" === typeof e)))
        );
      }
      function s(e) {
        return (
          "string" === typeof e._type &&
          "@" !== e._type[0] &&
          (!("markDefs" in e) ||
            (Array.isArray(e.markDefs) &&
              e.markDefs.every((e) => "string" === typeof e._key))) &&
          "children" in e &&
          Array.isArray(e.children) &&
          e.children.every((e) => "object" === typeof e && "_type" in e)
        );
      }
      function u(e) {
        return (
          s(e) &&
          "listItem" in e &&
          "string" === typeof e.listItem &&
          ("undefined" === typeof e.level || "number" === typeof e.level)
        );
      }
      function c(e) {
        return "@list" === e._type;
      }
      function l(e) {
        return "@span" === e._type;
      }
      function p(e) {
        return "@text" === e._type;
      }
      n.d(t, {
        YI: function () {
          return E;
        },
      });
      const f = ["strong", "em", "code", "underline", "strike-through"];
      function d(e, t, n) {
        if (!a(e) || !e.marks) return [];
        if (!e.marks.length) return [];
        const r = e.marks.slice(),
          o = {};
        return (
          r.forEach((e) => {
            o[e] = 1;
            for (let r = t + 1; r < n.length; r++) {
              const t = n[r];
              if (
                !(
                  t &&
                  a(t) &&
                  Array.isArray(t.marks) &&
                  -1 !== t.marks.indexOf(e)
                )
              )
                break;
              o[e]++;
            }
          }),
          r.sort((e, t) =>
            (function (e, t, n) {
              const r = e[t],
                o = e[n];
              if (r !== o) return o - r;
              const i = f.indexOf(t),
                a = f.indexOf(n);
              if (i !== a) return i - a;
              return t.localeCompare(n);
            })(o, e, t)
          )
        );
      }
      function y(e, t) {
        return (e.level || 1) === t.level && e.listItem === t.listItem;
      }
      function h(e, t, n) {
        return {
          _type: "@list",
          _key: "".concat(e._key || "".concat(t), "-parent"),
          mode: n,
          level: e.level || 1,
          listItem: e.listItem,
          children: [e],
        };
      }
      function b(e, t) {
        const n = t.level || 1,
          r = t.listItem || "normal",
          o = "string" === typeof t.listItem;
        if (c(e) && (e.level || 1) === n && o && (e.listItem || "normal") === r)
          return e;
        if (!("children" in e)) return;
        const i = e.children[e.children.length - 1];
        return i && !a(i) ? b(i, t) : void 0;
      }
      function g(e) {
        let t = "";
        return (
          e.children.forEach((e) => {
            p(e) ? (t += e.text) : l(e) && (t += g(e));
          }),
          t
        );
      }
      var m = n(52322),
        v = n(2784);
      function w(e, t, n) {
        const r = t[n],
          o = e[n];
        return "function" === typeof r || (r && "function" === typeof o)
          ? r
          : r
          ? { ...o, ...r }
          : o;
      }
      const O = { textDecoration: "underline" },
        P = (e, t) =>
          "[@portabletext/react] Unknown "
            .concat(e, ", specify a component for it in the `components.")
            .concat(t, "` prop"),
        k = (e) => P('block type "'.concat(e, '"'), "types");
      function S(e) {
        console.warn(e);
      }
      const _ = { display: "none" },
        x = {
          types: {},
          block: {
            normal: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("p", { children: t });
            },
            blockquote: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("blockquote", { children: t });
            },
            h1: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("h1", { children: t });
            },
            h2: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("h2", { children: t });
            },
            h3: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("h3", { children: t });
            },
            h4: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("h4", { children: t });
            },
            h5: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("h5", { children: t });
            },
            h6: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("h6", { children: t });
            },
          },
          marks: {
            em: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("em", { children: t });
            },
            strong: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("strong", { children: t });
            },
            code: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("code", { children: t });
            },
            underline: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("span", { style: O, children: t });
            },
            "strike-through": (e) => {
              let { children: t } = e;
              return (0, m.jsx)("del", { children: t });
            },
            link: (e) => {
              let { children: t, value: n } = e;
              return (0, m.jsx)("a", {
                href: null == n ? void 0 : n.href,
                children: t,
              });
            },
          },
          list: {
            number: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("ol", { children: t });
            },
            bullet: (e) => {
              let { children: t } = e;
              return (0, m.jsx)("ul", { children: t });
            },
          },
          listItem: (e) => {
            let { children: t } = e;
            return (0, m.jsx)("li", { children: t });
          },
          hardBreak: () => (0, m.jsx)("br", {}),
          unknownType: (e) => {
            let { value: t, isInline: n } = e;
            const r = k(t._type);
            return n
              ? (0, m.jsx)("span", { style: _, children: r })
              : (0, m.jsx)("div", { style: _, children: r });
          },
          unknownMark: (e) => {
            let { markType: t, children: n } = e;
            return (0, m.jsx)("span", {
              className: "unknown__pt__mark__".concat(t),
              children: n,
            });
          },
          unknownList: (e) => {
            let { children: t } = e;
            return (0, m.jsx)("ul", { children: t });
          },
          unknownListItem: (e) => {
            let { children: t } = e;
            return (0, m.jsx)("li", { children: t });
          },
          unknownBlockStyle: (e) => {
            let { children: t } = e;
            return (0, m.jsx)("p", { children: t });
          },
        };
      function E(e) {
        let {
          value: t,
          components: n,
          listNestingMode: r,
          onMissingComponent: i = S,
        } = e;
        const a = i || T,
          s = (function (e, t) {
            const n = [];
            let r;
            for (let i = 0; i < e.length; i++) {
              const a = e[i];
              if (a)
                if (u(a))
                  if (r)
                    if (y(a, r)) r.children.push(a);
                    else if ((a.level || 1) > r.level) {
                      const e = h(a, i, t);
                      if ("html" === t) {
                        const t = r.children[r.children.length - 1],
                          n = o(o({}, t), {}, { children: [...t.children, e] });
                        r.children[r.children.length - 1] = n;
                      } else r.children.push(e);
                      r = e;
                    } else if ((a.level || 1) < r.level) {
                      const e = n[n.length - 1],
                        o = e && b(e, a);
                      if (o) {
                        (r = o), r.children.push(a);
                        continue;
                      }
                      (r = h(a, i, t)), n.push(r);
                    } else if (a.listItem === r.listItem)
                      console.warn("Unknown state encountered for block", a),
                        n.push(a);
                    else {
                      const e = n[n.length - 1],
                        o = e && b(e, { level: a.level || 1 });
                      if (o && o.listItem === a.listItem) {
                        (r = o), r.children.push(a);
                        continue;
                      }
                      (r = h(a, i, t)), n.push(r);
                    }
                  else (r = h(a, i, t)), n.push(r);
                else n.push(a), (r = void 0);
            }
            return n;
          })(Array.isArray(t) ? t : [t], r || "html"),
          c = (0, v.useMemo)(
            () =>
              n
                ? (function (e, t) {
                    const {
                      block: n,
                      list: r,
                      listItem: o,
                      marks: i,
                      types: a,
                      ...s
                    } = t;
                    return {
                      ...e,
                      block: w(e, t, "block"),
                      list: w(e, t, "list"),
                      listItem: w(e, t, "listItem"),
                      marks: w(e, t, "marks"),
                      types: w(e, t, "types"),
                      ...s,
                    };
                  })(x, n)
                : x,
            [n]
          ),
          l = (0, v.useMemo)(() => j(c, a), [c, a]),
          p = s.map((e, t) =>
            l({ node: e, index: t, isInline: !1, renderNode: l })
          );
        return (0, m.jsx)(m.Fragment, { children: p });
      }
      const j = (e, t) => {
        function n(r) {
          const { node: o, index: i, isInline: a } = r,
            f = o._key || "node-".concat(i);
          return c(o)
            ? (function (r, o, i) {
                const a = r.children.map((e, t) =>
                    n({
                      node: e._key
                        ? e
                        : { ...e, _key: "li-".concat(o, "-").concat(t) },
                      index: t,
                      isInline: !1,
                      renderNode: n,
                    })
                  ),
                  s = e.list,
                  u =
                    ("function" === typeof s ? s : s[r.listItem]) ||
                    e.unknownList;
                if (u === e.unknownList) {
                  const e = r.listItem || "bullet";
                  t(P('list style "'.concat(e, '"'), "list"), {
                    nodeType: "listStyle",
                    type: e,
                  });
                }
                return (0, m.jsx)(
                  u,
                  {
                    value: r,
                    index: o,
                    isInline: !1,
                    renderNode: n,
                    children: a,
                  },
                  i
                );
              })(o, i, f)
            : u(o)
            ? (function (r, o, i) {
                const a = A({ node: r, index: o, isInline: !1, renderNode: n }),
                  s = e.listItem,
                  u =
                    ("function" === typeof s ? s : s[r.listItem]) ||
                    e.unknownListItem;
                if (u === e.unknownListItem) {
                  const e = r.listItem || "bullet";
                  t(P('list item style "'.concat(e, '"'), "listItem"), {
                    type: e,
                    nodeType: "listItemStyle",
                  });
                }
                let c = a.children;
                if (r.style && "normal" !== r.style) {
                  const { listItem: e, ...t } = r;
                  c = n({ node: t, index: o, isInline: !1, renderNode: n });
                }
                return (0, m.jsx)(
                  u,
                  {
                    value: r,
                    index: o,
                    isInline: !1,
                    renderNode: n,
                    children: c,
                  },
                  i
                );
              })(o, i, f)
            : l(o)
            ? (function (r, o, i) {
                const { markDef: a, markType: s, markKey: u } = r,
                  c = e.marks[s] || e.unknownMark,
                  l = r.children.map((e, t) =>
                    n({ node: e, index: t, isInline: !0, renderNode: n })
                  );
                c === e.unknownMark &&
                  t(((e) => P('mark type "'.concat(e, '"'), "marks"))(s), {
                    nodeType: "mark",
                    type: s,
                  });
                return (0, m.jsx)(
                  c,
                  {
                    text: g(r),
                    value: a,
                    markType: s,
                    markKey: u,
                    renderNode: n,
                    children: l,
                  },
                  i
                );
              })(o, 0, f)
            : s(o)
            ? (function (r, o, i, a) {
                const { _key: s, ...u } = A({
                    node: r,
                    index: o,
                    isInline: a,
                    renderNode: n,
                  }),
                  c = u.node.style || "normal",
                  l =
                    ("function" === typeof e.block ? e.block : e.block[c]) ||
                    e.unknownBlockStyle;
                l === e.unknownBlockStyle &&
                  t(P('block style "'.concat(c, '"'), "block"), {
                    nodeType: "blockStyle",
                    type: c,
                  });
                return (0, m.jsx)(l, { ...u, value: u.node, renderNode: n }, i);
              })(o, i, f, a)
            : p(o)
            ? (function (t, n) {
                if ("\n" === t.text) {
                  const t = e.hardBreak;
                  return t ? (0, m.jsx)(t, {}, n) : "\n";
                }
                return t.text;
              })(o, f)
            : (function (r, o, i, a) {
                const s = e.types[r._type],
                  u = { value: r, isInline: a, index: o, renderNode: n };
                if (s) return (0, m.jsx)(s, { ...u }, i);
                t(k(r._type), { nodeType: "block", type: r._type });
                const c = e.unknownType;
                return (0, m.jsx)(c, { ...u }, i);
              })(o, i, f, a);
        }
        return n;
      };
      function A(e) {
        const { node: t, index: n, isInline: r, renderNode: o } = e,
          i = (function (e) {
            var t;
            const { children: n, markDefs: r = [] } = e;
            if (!n || !n.length) return [];
            const o = n.map(d),
              i = { _type: "@span", children: [], markType: "<unknown>" };
            let s = [i];
            for (let u = 0; u < n.length; u++) {
              const e = n[u];
              if (!e) continue;
              const i = o[u] || [];
              let c = 1;
              if (s.length > 1)
                for (; c < s.length; c++) {
                  const e = (null == (t = s[c]) ? void 0 : t.markKey) || "",
                    n = i.indexOf(e);
                  if (-1 === n) break;
                  i.splice(n, 1);
                }
              s = s.slice(0, c);
              let l = s[s.length - 1];
              if (l) {
                for (const t of i) {
                  const n = r.find((e) => e._key === t),
                    o = n ? n._type : t,
                    i = {
                      _type: "@span",
                      _key: e._key,
                      children: [],
                      markDef: n,
                      markType: o,
                      markKey: t,
                    };
                  l.children.push(i), s.push(i), (l = i);
                }
                if (a(e)) {
                  const t = e.text.split("\n");
                  for (let e = t.length; e-- > 1; ) t.splice(e, 0, "\n");
                  l.children = l.children.concat(
                    t.map((e) => ({ _type: "@text", text: e }))
                  );
                } else l.children = l.children.concat(e);
              }
            }
            return i.children;
          })(t),
          s = i.map((e, t) =>
            o({ node: e, isInline: !0, index: t, renderNode: o })
          );
        return {
          _key: t._key || "block-".concat(n),
          children: s,
          index: n,
          isInline: r,
          node: t,
        };
      }
      function T() {}
    },
    71010: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n;
        return (
          "string" === typeof e
            ? t
              ? ((null !== (n = t[e]) && void 0 !== n) ||
                  (t[e] = document.querySelectorAll(e)),
                (e = t[e]))
              : (e = document.querySelectorAll(e))
            : e instanceof Element && (e = [e]),
          Array.from(e || [])
        );
      }
      n.d(t, {
        I: function () {
          return r;
        },
      });
    },
    26766: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return r;
        },
      });
      const r = (e) => "function" === typeof e;
    },
    71537: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var r,
              o,
              i = [],
              a = !0,
              s = !1;
            try {
              for (
                n = n.call(e);
                !(a = (r = n.next()).done) &&
                (i.push(r.value), !t || i.length !== t);
                a = !0
              );
            } catch (u) {
              (s = !0), (o = u);
            } finally {
              try {
                a || null == n.return || n.return();
              } finally {
                if (s) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return o(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var i = n(4079),
        a = n(58475),
        s = a.map,
        u = a.filter,
        c = n(72257),
        l = n(26623);
      function p(e) {
        this.client = e;
      }
      function f(e, t) {
        return "undefined" !== typeof window && t instanceof window.File
          ? i(
              {
                filename: !1 === e.preserveFilename ? void 0 : t.name,
                contentType: t.type,
              },
              e
            )
          : e;
      }
      i(p.prototype, {
        upload: function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          l.validateAssetType(e);
          var r = n.extract || void 0;
          r && !r.length && (r = ["none"]);
          var o = l.hasDataset(this.client.clientConfig),
            i = "image" === e ? "images" : "files",
            a = f(n, t),
            c = a.tag,
            p = a.label,
            d = a.title,
            y = a.description,
            h = a.creditLine,
            b = a.filename,
            g = a.source,
            m = {
              label: p,
              title: d,
              description: y,
              filename: b,
              meta: r,
              creditLine: h,
            };
          g &&
            ((m.sourceId = g.id),
            (m.sourceName = g.name),
            (m.sourceUrl = g.url));
          var v = this.client._requestObservable({
            tag: c,
            method: "POST",
            timeout: a.timeout || 0,
            uri: "/assets/".concat(i, "/").concat(o),
            headers: a.contentType ? { "Content-Type": a.contentType } : {},
            query: m,
            body: t,
          });
          return this.client.isPromiseAPI()
            ? v
                .pipe(
                  u(function (e) {
                    return "response" === e.type;
                  }),
                  s(function (e) {
                    return e.body.document;
                  })
                )
                .toPromise()
            : v;
        },
        delete: function (e, t) {
          console.warn(
            "client.assets.delete() is deprecated, please use client.delete(<document-id>)"
          );
          var n = t || "";
          return (
            /^(image|file)-/.test(n)
              ? e._id && (n = e._id)
              : (n = "".concat(e, "-").concat(n)),
            l.hasDataset(this.client.clientConfig),
            this.client.delete(n)
          );
        },
        getImageUrl: function (e, t) {
          var n = e._ref || e;
          if ("string" !== typeof n)
            throw new Error(
              "getImageUrl() needs either an object with a _ref, or a string with an asset document ID"
            );
          if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(n))
            throw new Error(
              'Unsupported asset ID "'.concat(
                n,
                '". URL generation only works for auto-generated IDs.'
              )
            );
          var o = r(n.split("-"), 4),
            i = o[1],
            a = o[2],
            s = o[3];
          l.hasDataset(this.client.clientConfig);
          var u = this.client.clientConfig,
            p = u.projectId,
            f = u.dataset,
            d = t ? c(t) : "";
          return "https://cdn.sanity.io/images/"
            .concat(p, "/")
            .concat(f, "/")
            .concat(i, "-")
            .concat(a, ".")
            .concat(s)
            .concat(d);
        },
      }),
        (e.exports = p);
    },
    79188: function (e, t, n) {
      "use strict";
      function r(e) {
        this.client = e;
      }
      n(4079)(r.prototype, {
        getLoginProviders: function () {
          return this.client.request({ uri: "/auth/providers" });
        },
        logout: function () {
          return this.client.request({ uri: "/auth/logout", method: "POST" });
        },
      }),
        (e.exports = r);
    },
    93408: function (e, t, n) {
      "use strict";
      var r = n(4079),
        o = n(84546),
        i = n(26623),
        a = n(54895),
        s = {
          apiHost: "https://api.sanity.io",
          apiVersion: "1",
          useProjectHostname: !0,
          isPromiseAPI: !0,
        },
        u = ["localhost", "127.0.0.1", "0.0.0.0"];
      (t.defaultConfig = s),
        (t.initConfig = function (e, n) {
          var c = r({}, n, e);
          c.apiVersion || a.printNoApiVersionSpecifiedWarning();
          var l = r({}, s, c),
            p = l.useProjectHostname;
          if ("undefined" === typeof Promise) {
            var f = o("js-client-promise-polyfill");
            throw new Error(
              "No native Promise-implementation found, polyfill needed - see ".concat(
                f
              )
            );
          }
          if (p && !l.projectId)
            throw new Error("Configuration must contain `projectId`");
          var d =
              "undefined" !== typeof window &&
              window.location &&
              window.location.hostname,
            y =
              d &&
              (function (e) {
                return -1 !== u.indexOf(e);
              })(window.location.hostname);
          d && y && l.token && !0 !== l.ignoreBrowserTokenWarning
            ? a.printBrowserTokenWarning()
            : "undefined" === typeof l.useCdn && a.printCdnWarning(),
            p && i.projectId(l.projectId),
            l.dataset && i.dataset(l.dataset),
            "requestTagPrefix" in l &&
              (l.requestTagPrefix = l.requestTagPrefix
                ? i.requestTag(l.requestTagPrefix).replace(/\.+$/, "")
                : void 0),
            (l.apiVersion = "".concat(l.apiVersion).replace(/^v/, "")),
            (l.isDefaultApi = l.apiHost === s.apiHost),
            (l.useCdn = Boolean(l.useCdn) && !l.withCredentials),
            t.validateApiVersion(l.apiVersion);
          var h = l.apiHost.split("://", 2),
            b = h[0],
            g = h[1],
            m = l.isDefaultApi ? "apicdn.sanity.io" : g;
          return (
            l.useProjectHostname
              ? ((l.url = ""
                  .concat(b, "://")
                  .concat(l.projectId, ".")
                  .concat(g, "/v")
                  .concat(l.apiVersion)),
                (l.cdnUrl = ""
                  .concat(b, "://")
                  .concat(l.projectId, ".")
                  .concat(m, "/v")
                  .concat(l.apiVersion)))
              : ((l.url = "".concat(l.apiHost, "/v").concat(l.apiVersion)),
                (l.cdnUrl = l.url)),
            l
          );
        }),
        (t.validateApiVersion = function (e) {
          if ("1" !== e && "X" !== e) {
            var t = new Date(e);
            if (
              !(
                /^\d{4}-\d{2}-\d{2}$/.test(e) &&
                t instanceof Date &&
                t.getTime() > 0
              )
            )
              throw new Error(
                "Invalid API version string, expected `1` or date in format `YYYY-MM-DD`"
              );
          }
        });
    },
    17138: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var o = n(4079),
        i = n(58475),
        a = i.map,
        s = i.filter,
        u = n(26623),
        c = n(1989),
        l = n(5162),
        p = n(41326),
        f = n(42797),
        d = n(30154),
        y = function (e, t) {
          return !1 === e ? void 0 : "undefined" === typeof e ? t : e;
        },
        h = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            dryRun: e.dryRun,
            returnIds: !0,
            returnDocuments: y(e.returnDocuments, !0),
            visibility: e.visibility || "sync",
            autoGenerateArrayKeys: e.autoGenerateArrayKeys,
            skipCrossDatasetReferenceValidation:
              e.skipCrossDatasetReferenceValidation,
          };
        },
        b = function (e) {
          return "response" === e.type;
        },
        g = function (e) {
          return e.body;
        },
        m = function (e, t) {
          return e.reduce(function (e, n) {
            return (e[t(n)] = n), e;
          }, Object.create(null));
        },
        v = function (e) {
          return e.toPromise();
        };
      e.exports = {
        listen: d,
        getDataUrl: function (e, t) {
          var n = this.clientConfig,
            r = u.hasDataset(n),
            o = "/".concat(e, "/").concat(r),
            i = t ? "".concat(o, "/").concat(t) : o;
          return "/data".concat(i).replace(/\/($|\?)/, "$1");
        },
        fetch: function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r =
              !1 === n.filterResponse
                ? function (e) {
                    return e;
                  }
                : function (e) {
                    return e.result;
                  },
            o = this._dataRequest("query", { query: e, params: t }, n).pipe(
              a(r)
            );
          return this.isPromiseAPI() ? v(o) : o;
        },
        getDocument: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = { uri: this.getDataUrl("doc", e), json: !0, tag: t.tag },
            r = this._requestObservable(n).pipe(
              s(b),
              a(function (e) {
                return e.body.documents && e.body.documents[0];
              })
            );
          return this.isPromiseAPI() ? v(r) : r;
        },
        getDocuments: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = {
              uri: this.getDataUrl("doc", e.join(",")),
              json: !0,
              tag: t.tag,
            },
            r = this._requestObservable(n).pipe(
              s(b),
              a(function (t) {
                var n = m(t.body.documents || [], function (e) {
                  return e._id;
                });
                return e.map(function (e) {
                  return n[e] || null;
                });
              })
            );
          return this.isPromiseAPI() ? v(r) : r;
        },
        create: function (e, t) {
          return this._create(e, "create", t);
        },
        createIfNotExists: function (e, t) {
          return (
            u.requireDocumentId("createIfNotExists", e),
            this._create(e, "createIfNotExists", t)
          );
        },
        createOrReplace: function (e, t) {
          return (
            u.requireDocumentId("createOrReplace", e),
            this._create(e, "createOrReplace", t)
          );
        },
        patch: function (e, t) {
          return new f(e, t, this);
        },
        delete: function (e, t) {
          return this.dataRequest(
            "mutate",
            { mutations: [{ delete: c(e) }] },
            t
          );
        },
        mutate: function (e, t) {
          var n = e instanceof f || e instanceof p ? e.serialize() : e,
            r = Array.isArray(n) ? n : [n],
            o = t && t.transactionId;
          return this.dataRequest(
            "mutate",
            { mutations: r, transactionId: o },
            t
          );
        },
        transaction: function (e) {
          return new p(e, this);
        },
        dataRequest: function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = this._dataRequest(e, t, n);
          return this.isPromiseAPI() ? v(r) : r;
        },
        _dataRequest: function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = "mutate" === e,
            i = "query" === e,
            u = !o && l(t),
            c = !o && u.length < 11264,
            p = c ? u : "",
            f = n.returnFirst,
            d = n.timeout,
            y = n.token,
            m = n.tag,
            v = n.headers,
            w = this.getDataUrl(e, p),
            O = {
              method: c ? "GET" : "POST",
              uri: w,
              json: !0,
              body: c ? void 0 : t,
              query: o && h(n),
              timeout: d,
              headers: v,
              token: y,
              tag: m,
              canUseCdn: i,
            };
          return this._requestObservable(O).pipe(
            s(b),
            a(g),
            a(function (e) {
              if (!o) return e;
              var t = e.results || [];
              if (n.returnDocuments)
                return f
                  ? t[0] && t[0].document
                  : t.map(function (e) {
                      return e.document;
                    });
              var i = f ? "documentId" : "documentIds",
                a = f
                  ? t[0] && t[0].id
                  : t.map(function (e) {
                      return e.id;
                    });
              return r({ transactionId: e.transactionId, results: t }, i, a);
            })
          );
        },
        _create: function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = r({}, t, e),
            a = o({ returnFirst: !0, returnDocuments: !0 }, n);
          return this.dataRequest("mutate", { mutations: [i] }, a);
        },
      };
    },
    5162: function (e) {
      "use strict";
      var t = ["tag"];
      function n(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var r = encodeURIComponent;
      e.exports = function (e) {
        var o = e.query,
          i = e.params,
          a = void 0 === i ? {} : i,
          s = e.options,
          u = void 0 === s ? {} : s,
          c = u.tag,
          l = n(u, t),
          p = "query=".concat(r(o)),
          f = c ? "?tag=".concat(r(c), "&").concat(p) : "?".concat(p),
          d = Object.keys(a).reduce(function (e, t) {
            return ""
              .concat(e, "&")
              .concat(r("$".concat(t)), "=")
              .concat(r(JSON.stringify(a[t])));
          }, f);
        return Object.keys(l).reduce(function (e, t) {
          return u[t] ? "".concat(e, "&").concat(r(t), "=").concat(r(u[t])) : e;
        }, d);
      };
    },
    30154: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var a = n(4079),
        s = n(58475).Observable,
        u = n(58292),
        c = n(84949),
        l = n(29106),
        p = n(5162),
        f = u,
        d = [
          "includePreviousRevision",
          "includeResult",
          "visibility",
          "effectFormat",
          "tag",
        ],
        y = { includeResult: !0 };
      function h(e) {
        try {
          var t = (e.data && JSON.parse(e.data)) || {};
          return a({ type: e.type }, t);
        } catch (n) {
          return n;
        }
      }
      function b(e) {
        if (e instanceof Error) return e;
        var t = h(e);
        return t instanceof Error
          ? t
          : new Error(
              (function (e) {
                if (!e.error) return e.message || "Unknown listener error";
                if (e.error.description) return e.error.description;
                return "string" === typeof e.error
                  ? e.error
                  : JSON.stringify(e.error, null, 2);
              })(t)
            );
      }
      e.exports = function (e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = this.clientConfig,
          i = r.url,
          a = r.token,
          u = r.withCredentials,
          g = r.requestTagPrefix,
          m = n.tag && g ? [g, n.tag].join(".") : n.tag,
          v = o(o({}, l(n, y)), {}, { tag: m }),
          w = c(v, d),
          O = p({ query: e, params: t, options: w, tag: m }),
          P = "".concat(i).concat(this.getDataUrl("listen", O));
        if (P.length > 14800)
          return new s(function (e) {
            return e.error(new Error("Query too large for listener"));
          });
        var k = v.events ? v.events : ["mutation"],
          S = -1 !== k.indexOf("reconnect"),
          _ = {};
        return (
          (a || u) && (_.withCredentials = !0),
          a && (_.headers = { Authorization: "Bearer ".concat(a) }),
          new s(function (e) {
            var t,
              n = c(),
              r = !1;
            function o() {
              r ||
                (S && e.next({ type: "reconnect" }),
                r ||
                  (n.readyState === f.CLOSED &&
                    (u(), clearTimeout(t), (t = setTimeout(l, 100)))));
            }
            function i(t) {
              e.error(b(t));
            }
            function a(t) {
              var n = h(t);
              return n instanceof Error ? e.error(n) : e.next(n);
            }
            function s(t) {
              (r = !0), u(), e.complete();
            }
            function u() {
              n.removeEventListener("error", o, !1),
                n.removeEventListener("channelError", i, !1),
                n.removeEventListener("disconnect", s, !1),
                k.forEach(function (e) {
                  return n.removeEventListener(e, a, !1);
                }),
                n.close();
            }
            function c() {
              var e = new f(P, _);
              return (
                e.addEventListener("error", o, !1),
                e.addEventListener("channelError", i, !1),
                e.addEventListener("disconnect", s, !1),
                k.forEach(function (t) {
                  return e.addEventListener(t, a, !1);
                }),
                e
              );
            }
            function l() {
              n = c();
            }
            return function () {
              (r = !0), u();
            };
          })
        );
      };
    },
    42797: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var o = n(4079),
        i = n(1989),
        a = n(26623),
        s = a.validateObject,
        u = a.validateInsert;
      function c(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        (this.selection = e), (this.operations = o({}, t)), (this.client = n);
      }
      o(c.prototype, {
        clone: function () {
          return new c(this.selection, o({}, this.operations), this.client);
        },
        set: function (e) {
          return this._assign("set", e);
        },
        diffMatchPatch: function (e) {
          return s("diffMatchPatch", e), this._assign("diffMatchPatch", e);
        },
        unset: function (e) {
          if (!Array.isArray(e))
            throw new Error(
              "unset(attrs) takes an array of attributes to unset, non-array given"
            );
          return (this.operations = o({}, this.operations, { unset: e })), this;
        },
        setIfMissing: function (e) {
          return this._assign("setIfMissing", e);
        },
        replace: function (e) {
          return s("replace", e), this._set("set", { $: e });
        },
        inc: function (e) {
          return this._assign("inc", e);
        },
        dec: function (e) {
          return this._assign("dec", e);
        },
        insert: function (e, t, n) {
          var o;
          return (
            u(e, t, n),
            this._assign("insert", (r((o = {}), e, t), r(o, "items", n), o))
          );
        },
        append: function (e, t) {
          return this.insert("after", "".concat(e, "[-1]"), t);
        },
        prepend: function (e, t) {
          return this.insert("before", "".concat(e, "[0]"), t);
        },
        splice: function (e, t, n, r) {
          var o = t < 0 ? t - 1 : t,
            i = "undefined" === typeof n || -1 === n ? -1 : Math.max(0, t + n),
            a = o < 0 && i >= 0 ? "" : i,
            s = "".concat(e, "[").concat(o, ":").concat(a, "]");
          return this.insert("replace", s, r || []);
        },
        ifRevisionId: function (e) {
          return (this.operations.ifRevisionID = e), this;
        },
        serialize: function () {
          return o(i(this.selection), this.operations);
        },
        toJSON: function () {
          return this.serialize();
        },
        commit: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!this.client)
            throw new Error(
              "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
            );
          var t = "string" === typeof this.selection,
            n = o({ returnFirst: t, returnDocuments: !0 }, e);
          return this.client.mutate({ patch: this.serialize() }, n);
        },
        reset: function () {
          return (this.operations = {}), this;
        },
        _set: function (e, t) {
          return this._assign(e, t, !1);
        },
        _assign: function (e, t) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          return (
            s(e, t),
            (this.operations = o(
              {},
              this.operations,
              r({}, e, o({}, (n && this.operations[e]) || {}, t))
            )),
            this
          );
        },
      }),
        (e.exports = c);
    },
    41326: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var o = n(4079),
        i = n(26623),
        a = n(42797),
        s = { returnDocuments: !1 };
      function u() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 ? arguments[2] : void 0;
        (this.trxId = n), (this.operations = e), (this.client = t);
      }
      o(u.prototype, {
        clone: function () {
          return new u(this.operations.slice(0), this.client, this.trxId);
        },
        create: function (e) {
          return i.validateObject("create", e), this._add({ create: e });
        },
        createIfNotExists: function (e) {
          var t = "createIfNotExists";
          return (
            i.validateObject(t, e),
            i.requireDocumentId(t, e),
            this._add(r({}, t, e))
          );
        },
        createOrReplace: function (e) {
          var t = "createOrReplace";
          return (
            i.validateObject(t, e),
            i.requireDocumentId(t, e),
            this._add(r({}, t, e))
          );
        },
        delete: function (e) {
          return (
            i.validateDocumentId("delete", e), this._add({ delete: { id: e } })
          );
        },
        patch: function (e, t) {
          var n = "function" === typeof t;
          if (e instanceof a) return this._add({ patch: e.serialize() });
          if (n) {
            var r = t(new a(e, {}, this.client));
            if (!(r instanceof a))
              throw new Error(
                "function passed to `patch()` must return the patch"
              );
            return this._add({ patch: r.serialize() });
          }
          return this._add({ patch: o({ id: e }, t) });
        },
        transactionId: function (e) {
          return e ? ((this.trxId = e), this) : this.trxId;
        },
        serialize: function () {
          return this.operations.slice();
        },
        toJSON: function () {
          return this.serialize();
        },
        commit: function (e) {
          if (!this.client)
            throw new Error(
              "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
            );
          return this.client.mutate(
            this.serialize(),
            o({ transactionId: this.trxId }, s, e || {})
          );
        },
        reset: function () {
          return (this.operations = []), this;
        },
        _add: function (e) {
          return this.operations.push(e), this;
        },
      }),
        (e.exports = u);
    },
    49158: function (e, t, n) {
      "use strict";
      var r = n(4079),
        o = n(26623);
      function i(e) {
        this.request = e.request.bind(e);
      }
      r(i.prototype, {
        create: function (e, t) {
          return this._modify("PUT", e, t);
        },
        edit: function (e, t) {
          return this._modify("PATCH", e, t);
        },
        delete: function (e) {
          return this._modify("DELETE", e);
        },
        list: function () {
          return this.request({ uri: "/datasets" });
        },
        _modify: function (e, t, n) {
          return (
            o.dataset(t),
            this.request({ method: e, uri: "/datasets/".concat(t), body: n })
          );
        },
      }),
        (e.exports = i);
    },
    84546: function (e) {
      "use strict";
      e.exports = function (e) {
        return "https://docs.sanity.io/help/" + e;
      };
    },
    90517: function (e) {
      "use strict";
      e.exports = [];
    },
    59477: function (e, t, n) {
      "use strict";
      var r = n(85598),
        o = n(4079);
      function i(e) {
        var t = s(e);
        i.super.call(this, t.message), o(this, t);
      }
      function a(e) {
        var t = s(e);
        a.super.call(this, t.message), o(this, t);
      }
      function s(e) {
        var t = e.body,
          n = { response: e, statusCode: e.statusCode, responseBody: u(t, e) };
        return t.error && t.message
          ? ((n.message = "".concat(t.error, " - ").concat(t.message)), n)
          : t.error && t.error.description
          ? ((n.message = t.error.description), (n.details = t.error), n)
          : ((n.message =
              t.error ||
              t.message ||
              (function (e) {
                var t = e.statusMessage ? " ".concat(e.statusMessage) : "";
                return ""
                  .concat(e.method, "-request to ")
                  .concat(e.url, " resulted in HTTP ")
                  .concat(e.statusCode)
                  .concat(t);
              })(e)),
            n);
      }
      function u(e, t) {
        return -1 !==
          (t.headers["content-type"] || "")
            .toLowerCase()
            .indexOf("application/json")
          ? JSON.stringify(e, null, 2)
          : e;
      }
      r(i), r(a), (t.ClientError = i), (t.ServerError = a);
    },
    72257: function (e) {
      "use strict";
      e.exports = function (e) {
        var t = [];
        for (var n in e)
          e.hasOwnProperty(n) &&
            t.push(
              ""
                .concat(encodeURIComponent(n), "=")
                .concat(encodeURIComponent(e[n]))
            );
        return t.length > 0 ? "?".concat(t.join("&")) : "";
      };
    },
    2392: function (e, t, n) {
      "use strict";
      var r = n(88948),
        o = n(4079),
        i = n(75588),
        a = n(32962),
        s = n(65897),
        u = n(86257),
        c = n(58475).Observable,
        l = n(59477),
        p = l.ClientError,
        f = l.ServerError,
        d = {
          onResponse: function (e) {
            if (e.statusCode >= 500) throw new f(e);
            if (e.statusCode >= 400) throw new p(e);
            return e;
          },
        },
        y = {
          onResponse: function (e) {
            var t = e.headers["x-sanity-warning"];
            return (
              (Array.isArray(t) ? t : [t])
                .filter(Boolean)
                .forEach(function (e) {
                  return console.warn(e);
                }),
              e
            );
          },
        },
        h = r(n(90517).concat([y, a(), s(), u(), d, i({ implementation: c })]));
      function b(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
        return t(o({ maxRedirects: 0 }, e));
      }
      (b.defaultRequester = h),
        (b.ClientError = p),
        (b.ServerError = f),
        (e.exports = b);
    },
    76333: function (e, t, n) {
      "use strict";
      var r = n(4079),
        o = "X-Sanity-Project-ID";
      e.exports = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = {},
          i = t.token || e.token;
        i && (n.Authorization = "Bearer ".concat(i)),
          t.useGlobalApi ||
            e.useProjectHostname ||
            !e.projectId ||
            (n[o] = e.projectId);
        var a = Boolean(
            "undefined" === typeof t.withCredentials
              ? e.token || e.withCredentials
              : t.withCredentials
          ),
          s = "undefined" === typeof t.timeout ? e.timeout : t.timeout;
        return r({}, t, {
          headers: r({}, n, t.headers || {}),
          timeout: "undefined" === typeof s ? 3e5 : s,
          proxy: t.proxy || e.proxy,
          json: !0,
          withCredentials: a,
        });
      };
    },
    20327: function (e, t, n) {
      "use strict";
      function r(e) {
        this.client = e;
      }
      n(4079)(r.prototype, {
        list: function () {
          return this.client.request({ uri: "/projects" });
        },
        getById: function (e) {
          return this.client.request({ uri: "/projects/".concat(e) });
        },
      }),
        (e.exports = r);
    },
    41981: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var a = n(4079),
        s = n(58475),
        u = s.Observable,
        c = s.map,
        l = s.filter,
        p = n(42797),
        f = n(41326),
        d = n(17138),
        y = n(49158),
        h = n(20327),
        b = n(71537),
        g = n(23002),
        m = n(79188),
        v = n(2392),
        w = n(76333),
        O = n(93408),
        P = O.defaultConfig,
        k = O.initConfig,
        S = n(26623);
      function _() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P;
        if (!(this instanceof _)) return new _(e);
        if (
          (this.config(e),
          (this.assets = new b(this)),
          (this.datasets = new y(this)),
          (this.projects = new h(this)),
          (this.users = new g(this)),
          (this.auth = new m(this)),
          this.clientConfig.isPromiseAPI)
        ) {
          var t = a({}, this.clientConfig, { isPromiseAPI: !1 });
          this.observable = new _(t);
        }
      }
      a(_.prototype, d),
        a(_.prototype, {
          clone: function () {
            return new _(this.config());
          },
          config: function (e) {
            if ("undefined" === typeof e) return a({}, this.clientConfig);
            if (this.clientConfig && !1 === this.clientConfig.allowReconfigure)
              throw new Error(
                "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
              );
            if (this.observable) {
              var t = a({}, e, { isPromiseAPI: !1 });
              this.observable.config(t);
            }
            return (this.clientConfig = k(e, this.clientConfig || {})), this;
          },
          withConfig: function (e) {
            return new _(o(o({}, this.config()), e));
          },
          getUrl: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = t ? this.clientConfig.cdnUrl : this.clientConfig.url;
            return "".concat(n, "/").concat(e.replace(/^\//, ""));
          },
          isPromiseAPI: function () {
            return this.clientConfig.isPromiseAPI;
          },
          _requestObservable: function (e) {
            var t = this,
              n = e.url || e.uri,
              r =
                "undefined" === typeof e.canUseCdn
                  ? ["GET", "HEAD"].indexOf(e.method || "GET") >= 0 &&
                    0 === n.indexOf("/data/")
                  : e.canUseCdn,
              i = this.clientConfig.useCdn && r,
              s =
                e.tag && this.clientConfig.requestTagPrefix
                  ? [this.clientConfig.requestTagPrefix, e.tag].join(".")
                  : e.tag || this.clientConfig.requestTagPrefix;
            s && (e.query = o({ tag: S.requestTag(s) }, e.query));
            var c = w(this.clientConfig, a({}, e, { url: this.getUrl(n, i) }));
            return new u(function (e) {
              return v(c, t.clientConfig.requester).subscribe(e);
            });
          },
          request: function (e) {
            var t = this._requestObservable(e).pipe(
              l(function (e) {
                return "response" === e.type;
              }),
              c(function (e) {
                return e.body;
              })
            );
            return this.isPromiseAPI()
              ? (function (e) {
                  return e.toPromise();
                })(t)
              : t;
          },
        }),
        (_.Patch = p),
        (_.Transaction = f),
        (_.ClientError = v.ClientError),
        (_.ServerError = v.ServerError),
        (_.requester = v.defaultRequester),
        (e.exports = _);
    },
    23002: function (e, t, n) {
      "use strict";
      function r(e) {
        this.client = e;
      }
      n(4079)(r.prototype, {
        getById: function (e) {
          return this.client.request({ uri: "/users/".concat(e) });
        },
      }),
        (e.exports = r);
    },
    29106: function (e) {
      "use strict";
      e.exports = function (e, t) {
        return Object.keys(t)
          .concat(Object.keys(e))
          .reduce(function (n, r) {
            return (n[r] = "undefined" === typeof e[r] ? t[r] : e[r]), n;
          }, {});
      };
    },
    1989: function (e) {
      "use strict";
      e.exports = function (e) {
        if ("string" === typeof e || Array.isArray(e)) return { id: e };
        if (e && e.query)
          return "params" in e
            ? { query: e.query, params: e.params }
            : { query: e.query };
        var t = [
          "* Document ID (<docId>)",
          "* Array of document IDs",
          "* Object containing `query`",
        ].join("\n");
        throw new Error("Unknown selection - must be one of:\n\n".concat(t));
      };
    },
    58475: function (e, t, n) {
      "use strict";
      var r = n(77213).Observable,
        o = n(65512).filter,
        i = n(38770).map;
      e.exports = { Observable: r, filter: o, map: i };
    },
    67281: function (e) {
      "use strict";
      e.exports = function (e) {
        var t,
          n = !1;
        return function () {
          return n || ((t = e.apply(void 0, arguments)), (n = !0)), t;
        };
      };
    },
    84949: function (e) {
      "use strict";
      e.exports = function (e, t) {
        return t.reduce(function (t, n) {
          return "undefined" === typeof e[n] || (t[n] = e[n]), t;
        }, {});
      };
    },
    26623: function (e, t) {
      "use strict";
      function n(e) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(e)
        );
      }
      var r = ["image", "file"],
        o = ["before", "after", "replace"];
      (t.dataset = function (e) {
        if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e))
          throw new Error(
            "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
          );
      }),
        (t.projectId = function (e) {
          if (!/^[-a-z0-9]+$/i.test(e))
            throw new Error(
              "`projectId` can only contain only a-z, 0-9 and dashes"
            );
        }),
        (t.validateAssetType = function (e) {
          if (-1 === r.indexOf(e))
            throw new Error(
              "Invalid asset type: "
                .concat(e, ". Must be one of ")
                .concat(r.join(", "))
            );
        }),
        (t.validateObject = function (e, t) {
          if (null === t || "object" !== n(t) || Array.isArray(t))
            throw new Error("".concat(e, "() takes an object of properties"));
        }),
        (t.requireDocumentId = function (e, n) {
          if (!n._id)
            throw new Error(
              "".concat(
                e,
                '() requires that the document contains an ID ("_id" property)'
              )
            );
          t.validateDocumentId(e, n._id);
        }),
        (t.validateDocumentId = function (e, t) {
          if ("string" !== typeof t || !/^[a-z0-9_.-]+$/i.test(t))
            throw new Error(
              "".concat(e, '(): "').concat(t, '" is not a valid document ID')
            );
        }),
        (t.validateInsert = function (e, t, n) {
          var r = "insert(at, selector, items)";
          if (-1 === o.indexOf(e)) {
            var i = o
              .map(function (e) {
                return '"'.concat(e, '"');
              })
              .join(", ");
            throw new Error(
              ""
                .concat(r, ' takes an "at"-argument which is one of: ')
                .concat(i)
            );
          }
          if ("string" !== typeof t)
            throw new Error(
              "".concat(
                r,
                ' takes a "selector"-argument which must be a string'
              )
            );
          if (!Array.isArray(n))
            throw new Error(
              "".concat(r, ' takes an "items"-argument which must be an array')
            );
        }),
        (t.hasDataset = function (e) {
          if (!e.dataset)
            throw new Error("`dataset` must be provided to perform queries");
          return e.dataset || "";
        }),
        (t.requestTag = function (e) {
          if ("string" !== typeof e || !/^[a-z0-9._-]{1,75}$/i.test(e))
            throw new Error(
              "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
            );
          return e;
        });
    },
    54895: function (e, t, n) {
      "use strict";
      var r = n(84546),
        o = n(67281),
        i = function (e) {
          return o(function () {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (t = console).warn.apply(t, [e.join(" ")].concat(r));
          });
        };
      (t.printCdnWarning = i([
        "You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and",
        "cheaper. Think about it! For more info, see ".concat(
          r("js-client-cdn-configuration"),
          "."
        ),
        "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating",
        "the client.",
      ])),
        (t.printBrowserTokenWarning = i([
          "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
          "See ".concat(
            r("js-client-browser-token"),
            " for more information and how to hide this warning."
          ),
        ])),
        (t.printNoApiVersionSpecifiedWarning = i([
          "Using the Sanity client without specifying an API version is deprecated.",
          "See ".concat(r("js-client-api-version")),
        ]));
    },
    88948: function (e, t, n) {
      e.exports = n(79320);
    },
    79320: function (e, t, n) {
      "use strict";
      var r = n(82390),
        o = n(29807),
        i = n(59861),
        a = n(12235),
        s = n(23877),
        u = ["request", "response", "progress", "error", "abort"],
        c = [
          "processOptions",
          "validateOptions",
          "interceptRequest",
          "finalizeOptions",
          "onRequest",
          "onResponse",
          "onError",
          "onReturn",
          "onHeaders",
        ];
      e.exports = function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
          l = [],
          p = c.reduce(
            function (e, t) {
              return (e[t] = e[t] || []), e;
            },
            { processOptions: [i], validateOptions: [a] }
          );
        function f(e) {
          var t = u.reduce(function (e, t) {
              return (e[t] = r()), e;
            }, {}),
            i = o(p),
            a = i("processOptions", e);
          i("validateOptions", a);
          var s = { options: a, channels: t, applyMiddleware: i },
            c = null,
            l = t.request.subscribe(function (e) {
              c = n(e, function (n, r) {
                return (function (e, r, o) {
                  var a = e,
                    s = r;
                  if (!a)
                    try {
                      s = i("onResponse", r, o);
                    } catch (n) {
                      (s = null), (a = n);
                    }
                  (a = a && i("onError", a, o))
                    ? t.error.publish(a)
                    : s && t.response.publish(s);
                })(n, r, e);
              });
            });
          t.abort.subscribe(function () {
            l(), c && c.abort();
          });
          var f = i("onReturn", t, s);
          return f === t && t.request.publish(s), f;
        }
        return (
          (f.use = function (e) {
            if (!e)
              throw new Error(
                "Tried to add middleware that resolved to falsey value"
              );
            if ("function" === typeof e)
              throw new Error(
                "Tried to add middleware that was a function. It probably expects you to pass options to it."
              );
            if (e.onReturn && p.onReturn.length > 0)
              throw new Error(
                "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event"
              );
            return (
              c.forEach(function (t) {
                e[t] && p[t].push(e[t]);
              }),
              l.push(e),
              f
            );
          }),
          (f.clone = function () {
            return e(l);
          }),
          t.forEach(f.use),
          f
        );
      };
    },
    59861: function (e, t, n) {
      "use strict";
      var r = n(4079),
        o = n(64846),
        i =
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product,
        a = Object.prototype.hasOwnProperty,
        s = { timeout: i ? 6e4 : 12e4 };
      function u(e) {
        var t = [];
        for (var n in e) a.call(e, n) && r(n, e[n]);
        return t.length ? t.join("&") : "";
        function r(e, n) {
          Array.isArray(n)
            ? n.forEach(function (t) {
                return r(e, t);
              })
            : t.push([e, n].map(encodeURIComponent).join("="));
        }
      }
      function c(e) {
        if (!1 === e || 0 === e) return !1;
        if (e.connect || e.socket) return e;
        var t = Number(e);
        return isNaN(t) ? c(s.timeout) : { connect: t, socket: t };
      }
      e.exports = function (e) {
        var t = "string" === typeof e ? r({ url: e }, s) : r({}, s, e),
          n = o(t.url, {}, !0);
        return (
          (t.timeout = c(t.timeout)),
          t.query &&
            (n.query = r(
              {},
              n.query,
              (function (e) {
                var t = {};
                for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                return t;
              })(t.query)
            )),
          (t.method =
            t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase()),
          (t.url = n.toString(u)),
          t
        );
      };
    },
    12235: function (e) {
      "use strict";
      var t = /^https?:\/\//i;
      e.exports = function (e) {
        if (!t.test(e.url))
          throw new Error('"'.concat(e.url, '" is not a valid URL'));
      };
    },
    32962: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      var o = n(4079),
        i = n(78138),
        a = ["boolean", "string", "number"];
      e.exports = function () {
        return {
          processOptions: function (e) {
            var t,
              n = e.body;
            return n &&
              !("function" === typeof n.pipe) &&
              !(
                (t = n).constructor &&
                "function" === typeof t.constructor.isBuffer &&
                t.constructor.isBuffer(t)
              ) &&
              (-1 !== a.indexOf(r(n)) || Array.isArray(n) || i(n))
              ? o({}, e, {
                  body: JSON.stringify(e.body),
                  headers: o({}, e.headers, {
                    "Content-Type": "application/json",
                  }),
                })
              : e;
          },
        };
      };
    },
    65897: function (e, t, n) {
      "use strict";
      var r = n(4079);
      function o(e) {
        try {
          return JSON.parse(e);
        } catch (t) {
          throw (
            ((t.message = "Failed to parsed response body as JSON: ".concat(
              t.message
            )),
            t)
          );
        }
      }
      e.exports = function (e) {
        return {
          onResponse: function (t) {
            var n = t.headers["content-type"] || "",
              i = (e && e.force) || -1 !== n.indexOf("application/json");
            return t.body && n && i ? r({}, t, { body: o(t.body) }) : t;
          },
          processOptions: function (e) {
            return r({}, e, {
              headers: r({ Accept: "application/json" }, e.headers),
            });
          },
        };
      };
    },
    75588: function (e, t, n) {
      "use strict";
      var r = n(58667),
        o = n(4079);
      e.exports = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.implementation || r.Observable;
        if (!t)
          throw new Error(
            "`Observable` is not available in global scope, and no implementation was passed"
          );
        return {
          onReturn: function (e, n) {
            return new t(function (t) {
              return (
                e.error.subscribe(function (e) {
                  return t.error(e);
                }),
                e.progress.subscribe(function (e) {
                  return t.next(o({ type: "progress" }, e));
                }),
                e.response.subscribe(function (e) {
                  t.next(o({ type: "response" }, e)), t.complete();
                }),
                e.request.publish(n),
                function () {
                  return e.abort.publish();
                }
              );
            });
          },
        };
      };
    },
    6224: function (e) {
      "use strict";
      e.exports = function () {
        return {
          onRequest: function (e) {
            if ("xhr" === e.adapter) {
              var t = e.request,
                n = e.context;
              "upload" in t &&
                "onprogress" in t.upload &&
                (t.upload.onprogress = r("upload")),
                "onprogress" in t && (t.onprogress = r("download"));
            }
            function r(e) {
              return function (t) {
                var r = t.lengthComputable ? (t.loaded / t.total) * 100 : -1;
                n.channels.progress.publish({
                  stage: e,
                  percent: r,
                  total: t.total,
                  loaded: t.loaded,
                  lengthComputable: t.lengthComputable,
                });
              };
            }
          },
        };
      };
    },
    86257: function (e, t, n) {
      "use strict";
      e.exports = n(6224);
    },
    56788: function (e, t, n) {
      "use strict";
      var r = n(1392),
        o = n(44655),
        i = n(90768),
        a = "undefined" === typeof window ? void 0 : window,
        s = a ? "xhr" : "fetch",
        u =
          "function" === typeof XMLHttpRequest
            ? XMLHttpRequest
            : function () {},
        c = "withCredentials" in new u(),
        l = "undefined" === typeof XDomainRequest ? void 0 : XDomainRequest,
        p = c ? u : l;
      a || ((u = i), (p = i)),
        (e.exports = function (e, t) {
          var n = e.options,
            i = e.applyMiddleware("finalizeOptions", n),
            c = {},
            l = a && a.location && !r(a.location.href, i.url),
            f = e.applyMiddleware("interceptRequest", void 0, {
              adapter: s,
              context: e,
            });
          if (f) {
            var d = setTimeout(t, 0, null, f);
            return {
              abort: function () {
                return clearTimeout(d);
              },
            };
          }
          var y = l ? new p() : new u(),
            h = a && a.XDomainRequest && y instanceof a.XDomainRequest,
            b = i.headers,
            g = i.timeout,
            m = !1,
            v = !1,
            w = !1;
          if (
            ((y.onerror = S),
            (y.ontimeout = S),
            (y.onabort = function () {
              k(!0), (m = !0);
            }),
            (y.onprogress = function () {}),
            (y[h ? "onload" : "onreadystatechange"] = function () {
              !(function () {
                if (!g) return;
                k(),
                  (c.socket = setTimeout(function () {
                    return P("ESOCKETTIMEDOUT");
                  }, g.socket));
              })(),
                m ||
                  (4 !== y.readyState && !h) ||
                  (0 !== y.status &&
                    (function () {
                      if (m || v || w) return;
                      if (0 === y.status)
                        return void S(new Error("Unknown XHR error"));
                      k(),
                        (v = !0),
                        t(
                          null,
                          (function () {
                            var e = y.status,
                              t = y.statusText;
                            if (h && void 0 === e) e = 200;
                            else {
                              if (e > 12e3 && e < 12156) return S();
                              (e = 1223 === y.status ? 204 : y.status),
                                (t = 1223 === y.status ? "No Content" : t);
                            }
                            return {
                              body: y.response || y.responseText,
                              url: i.url,
                              method: i.method,
                              headers: h ? {} : o(y.getAllResponseHeaders()),
                              statusCode: e,
                              statusMessage: t,
                            };
                          })()
                        );
                    })());
            }),
            y.open(i.method, i.url, !0),
            (y.withCredentials = !!i.withCredentials),
            b && y.setRequestHeader)
          )
            for (var O in b) b.hasOwnProperty(O) && y.setRequestHeader(O, b[O]);
          else if (b && h)
            throw new Error(
              "Headers cannot be set on an XDomainRequest object"
            );
          return (
            i.rawBody && (y.responseType = "arraybuffer"),
            e.applyMiddleware("onRequest", {
              options: i,
              adapter: s,
              request: y,
              context: e,
            }),
            y.send(i.body || null),
            g &&
              (c.connect = setTimeout(function () {
                return P("ETIMEDOUT");
              }, g.connect)),
            {
              abort: function () {
                (m = !0), y && y.abort();
              },
            }
          );
          function P(t) {
            (w = !0), y.abort();
            var n = new Error(
              "ESOCKETTIMEDOUT" === t
                ? "Socket timed out on request to ".concat(i.url)
                : "Connection timed out on request to ".concat(i.url)
            );
            (n.code = t), e.channels.error.publish(n);
          }
          function k(e) {
            (e || m || (y.readyState >= 2 && c.connect)) &&
              clearTimeout(c.connect),
              c.socket && clearTimeout(c.socket);
          }
          function S(e) {
            if (!v) {
              k(!0), (v = !0), (y = null);
              var n =
                e ||
                new Error(
                  "Network error while attempting to reach ".concat(i.url)
                );
              (n.isNetworkError = !0), (n.request = i), t(n);
            }
          }
        });
    },
    90768: function (e) {
      "use strict";
      function t() {
        this.readyState = 0;
      }
      (t.prototype.open = function (e, t) {
        (this._method = e),
          (this._url = t),
          (this._resHeaders = ""),
          (this.readyState = 1),
          this.onreadystatechange();
      }),
        (t.prototype.abort = function () {
          this._controller && this._controller.abort();
        }),
        (t.prototype.getAllResponseHeaders = function () {
          return this._resHeaders;
        }),
        (t.prototype.setRequestHeader = function (e, t) {
          (this._headers = this._headers || {}), (this._headers[e] = t);
        }),
        (t.prototype.send = function (e) {
          var t = this,
            n = (this._controller =
              "function" === typeof AbortController && new AbortController()),
            r = "arraybuffer" !== this.responseType,
            o = {
              method: this._method,
              headers: this._headers,
              signal: n && n.signal,
              body: e,
            };
          "undefined" !== typeof window &&
            (o.credentials = this.withCredentials ? "include" : "omit"),
            fetch(this._url, o)
              .then(function (e) {
                return (
                  e.headers.forEach(function (e, n) {
                    t._resHeaders += "".concat(n, ": ").concat(e, "\r\n");
                  }),
                  (t.status = e.status),
                  (t.statusText = e.statusText),
                  (t.readyState = 3),
                  r ? e.text() : e.arrayBuffer()
                );
              })
              .then(function (e) {
                r ? (t.responseText = e) : (t.response = e),
                  (t.readyState = 4),
                  t.onreadystatechange();
              })
              .catch(function (e) {
                "AbortError" !== e.name ? t.onerror(e) : t.onabort();
              });
        }),
        (e.exports = t);
    },
    23877: function (e, t, n) {
      "use strict";
      e.exports = n(56788);
    },
    58667: function (e, t, n) {
      "use strict";
      "undefined" !== typeof globalThis
        ? (e.exports = globalThis)
        : "undefined" !== typeof window
        ? (e.exports = window)
        : "undefined" !== typeof n.g
        ? (e.exports = n.g)
        : "undefined" !== typeof self
        ? (e.exports = self)
        : (e.exports = {});
    },
    29807: function (e) {
      "use strict";
      e.exports = function (e) {
        return function (t, n) {
          for (
            var r = "onError" === t,
              o = n,
              i = arguments.length,
              a = new Array(i > 2 ? i - 2 : 0),
              s = 2;
            s < i;
            s++
          )
            a[s - 2] = arguments[s];
          for (var u = 0; u < e[t].length; u++) {
            var c = e[t][u];
            if (((o = c.apply(void 0, [o].concat(a))), r && !o)) break;
          }
          return o;
        };
      };
    },
    78138: function (e, t, n) {
      "use strict";
      var r = n(98558);
      function o(e) {
        return (
          !0 === r(e) && "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      e.exports = function (e) {
        var t, n;
        return (
          !1 !== o(e) &&
          "function" === typeof (t = e.constructor) &&
          !1 !== o((n = t.prototype)) &&
          !1 !== n.hasOwnProperty("isPrototypeOf")
        );
      };
    },
    77213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(86469),
        o = n(5e4),
        i = n(97044),
        a = n(81904),
        s = n(37632),
        u = (function () {
          function e(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          return (
            (e.prototype.lift = function (t) {
              var n = new e();
              return (n.source = this), (n.operator = t), n;
            }),
            (e.prototype.subscribe = function (e, t, n) {
              var r = this.operator,
                i = o.toSubscriber(e, t, n);
              if (
                (r
                  ? i.add(r.call(i, this.source))
                  : i.add(
                      this.source ||
                        (s.config.useDeprecatedSynchronousErrorHandling &&
                          !i.syncErrorThrowable)
                        ? this._subscribe(i)
                        : this._trySubscribe(i)
                    ),
                s.config.useDeprecatedSynchronousErrorHandling &&
                  i.syncErrorThrowable &&
                  ((i.syncErrorThrowable = !1), i.syncErrorThrown))
              )
                throw i.syncErrorValue;
              return i;
            }),
            (e.prototype._trySubscribe = function (e) {
              try {
                return this._subscribe(e);
              } catch (t) {
                s.config.useDeprecatedSynchronousErrorHandling &&
                  ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                  r.canReportError(e) ? e.error(t) : console.warn(t);
              }
            }),
            (e.prototype.forEach = function (e, t) {
              var n = this;
              return new (t = c(t))(function (t, r) {
                var o;
                o = n.subscribe(
                  function (t) {
                    try {
                      e(t);
                    } catch (n) {
                      r(n), o && o.unsubscribe();
                    }
                  },
                  r,
                  t
                );
              });
            }),
            (e.prototype._subscribe = function (e) {
              var t = this.source;
              return t && t.subscribe(e);
            }),
            (e.prototype[i.observable] = function () {
              return this;
            }),
            (e.prototype.pipe = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return 0 === e.length ? this : a.pipeFromArray(e)(this);
            }),
            (e.prototype.toPromise = function (e) {
              var t = this;
              return new (e = c(e))(function (e, n) {
                var r;
                t.subscribe(
                  function (e) {
                    return (r = e);
                  },
                  function (e) {
                    return n(e);
                  },
                  function () {
                    return e(r);
                  }
                );
              });
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            e
          );
        })();
      function c(e) {
        if ((e || (e = s.config.Promise || Promise), !e))
          throw new Error("no Promise impl found");
        return e;
      }
      t.Observable = u;
    },
    78273: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(37632),
        o = n(25989);
      t.empty = {
        closed: !0,
        next: function (e) {},
        error: function (e) {
          if (r.config.useDeprecatedSynchronousErrorHandling) throw e;
          o.hostReportError(e);
        },
        complete: function () {},
      };
    },
    38331: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(13432),
        i = n(78273),
        a = n(69983),
        s = n(47783),
        u = n(37632),
        c = n(25989),
        l = (function (e) {
          function t(n, r, o) {
            var a = e.call(this) || this;
            switch (
              ((a.syncErrorValue = null),
              (a.syncErrorThrown = !1),
              (a.syncErrorThrowable = !1),
              (a.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                a.destination = i.empty;
                break;
              case 1:
                if (!n) {
                  a.destination = i.empty;
                  break;
                }
                if ("object" === typeof n) {
                  n instanceof t
                    ? ((a.syncErrorThrowable = n.syncErrorThrowable),
                      (a.destination = n),
                      n.add(a))
                    : ((a.syncErrorThrowable = !0),
                      (a.destination = new p(a, n)));
                  break;
                }
              default:
                (a.syncErrorThrowable = !0),
                  (a.destination = new p(a, n, r, o));
            }
            return a;
          }
          return (
            r(t, e),
            (t.prototype[s.rxSubscriber] = function () {
              return this;
            }),
            (t.create = function (e, n, r) {
              var o = new t(e, n, r);
              return (o.syncErrorThrowable = !1), o;
            }),
            (t.prototype.next = function (e) {
              this.isStopped || this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped || ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              this.destination.error(e), this.unsubscribe();
            }),
            (t.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (t.prototype._unsubscribeAndRecycle = function () {
              var e = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = e),
                this
              );
            }),
            t
          );
        })(a.Subscription);
      t.Subscriber = l;
      var p = (function (e) {
        function t(t, n, r, a) {
          var s,
            u = e.call(this) || this;
          u._parentSubscriber = t;
          var c = u;
          return (
            o.isFunction(n)
              ? (s = n)
              : n &&
                ((s = n.next),
                (r = n.error),
                (a = n.complete),
                n !== i.empty &&
                  ((c = Object.create(n)),
                  o.isFunction(c.unsubscribe) && u.add(c.unsubscribe.bind(c)),
                  (c.unsubscribe = u.unsubscribe.bind(u)))),
            (u._context = c),
            (u._next = s),
            (u._error = r),
            (u._complete = a),
            u
          );
        }
        return (
          r(t, e),
          (t.prototype.next = function (e) {
            if (!this.isStopped && this._next) {
              var t = this._parentSubscriber;
              u.config.useDeprecatedSynchronousErrorHandling &&
              t.syncErrorThrowable
                ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                : this.__tryOrUnsub(this._next, e);
            }
          }),
          (t.prototype.error = function (e) {
            if (!this.isStopped) {
              var t = this._parentSubscriber,
                n = u.config.useDeprecatedSynchronousErrorHandling;
              if (this._error)
                n && t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, this._error, e),
                    this.unsubscribe())
                  : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
              else if (t.syncErrorThrowable)
                n
                  ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                  : c.hostReportError(e),
                  this.unsubscribe();
              else {
                if ((this.unsubscribe(), n)) throw e;
                c.hostReportError(e);
              }
            }
          }),
          (t.prototype.complete = function () {
            var e = this;
            if (!this.isStopped) {
              var t = this._parentSubscriber;
              if (this._complete) {
                var n = function () {
                  return e._complete.call(e._context);
                };
                u.config.useDeprecatedSynchronousErrorHandling &&
                t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, n), this.unsubscribe())
                  : (this.__tryOrUnsub(n), this.unsubscribe());
              } else this.unsubscribe();
            }
          }),
          (t.prototype.__tryOrUnsub = function (e, t) {
            try {
              e.call(this._context, t);
            } catch (n) {
              if (
                (this.unsubscribe(),
                u.config.useDeprecatedSynchronousErrorHandling)
              )
                throw n;
              c.hostReportError(n);
            }
          }),
          (t.prototype.__tryOrSetError = function (e, t, n) {
            if (!u.config.useDeprecatedSynchronousErrorHandling)
              throw new Error("bad call");
            try {
              t.call(this._context, n);
            } catch (r) {
              return u.config.useDeprecatedSynchronousErrorHandling
                ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
                : (c.hostReportError(r), !0);
            }
            return !1;
          }),
          (t.prototype._unsubscribe = function () {
            var e = this._parentSubscriber;
            (this._context = null),
              (this._parentSubscriber = null),
              e.unsubscribe();
          }),
          t
        );
      })(l);
      t.SafeSubscriber = p;
    },
    69983: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(44392),
        o = n(1666),
        i = n(13432),
        a = n(79212),
        s = (function () {
          function e(e) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              e && ((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
          }
          var t;
          return (
            (e.prototype.unsubscribe = function () {
              var t;
              if (!this.closed) {
                var n = this,
                  s = n._parentOrParents,
                  c = n._ctorUnsubscribe,
                  l = n._unsubscribe,
                  p = n._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  s instanceof e)
                )
                  s.remove(this);
                else if (null !== s)
                  for (var f = 0; f < s.length; ++f) {
                    s[f].remove(this);
                  }
                if (i.isFunction(l)) {
                  c && (this._unsubscribe = void 0);
                  try {
                    l.call(this);
                  } catch (h) {
                    t = h instanceof a.UnsubscriptionError ? u(h.errors) : [h];
                  }
                }
                if (r.isArray(p)) {
                  f = -1;
                  for (var d = p.length; ++f < d; ) {
                    var y = p[f];
                    if (o.isObject(y))
                      try {
                        y.unsubscribe();
                      } catch (h) {
                        (t = t || []),
                          h instanceof a.UnsubscriptionError
                            ? (t = t.concat(u(h.errors)))
                            : t.push(h);
                      }
                  }
                }
                if (t) throw new a.UnsubscriptionError(t);
              }
            }),
            (e.prototype.add = function (t) {
              var n = t;
              if (!t) return e.EMPTY;
              switch (typeof t) {
                case "function":
                  n = new e(t);
                case "object":
                  if (
                    n === this ||
                    n.closed ||
                    "function" !== typeof n.unsubscribe
                  )
                    return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof e)) {
                    var r = n;
                    (n = new e())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error(
                    "unrecognized teardown " + t + " added to Subscription."
                  );
              }
              var o = n._parentOrParents;
              if (null === o) n._parentOrParents = this;
              else if (o instanceof e) {
                if (o === this) return n;
                n._parentOrParents = [o, this];
              } else {
                if (-1 !== o.indexOf(this)) return n;
                o.push(this);
              }
              var i = this._subscriptions;
              return null === i ? (this._subscriptions = [n]) : i.push(n), n;
            }),
            (e.prototype.remove = function (e) {
              var t = this._subscriptions;
              if (t) {
                var n = t.indexOf(e);
                -1 !== n && t.splice(n, 1);
              }
            }),
            (e.EMPTY = (((t = new e()).closed = !0), t)),
            e
          );
        })();
      function u(e) {
        return e.reduce(function (e, t) {
          return e.concat(t instanceof a.UnsubscriptionError ? t.errors : t);
        }, []);
      }
      t.Subscription = s;
    },
    37632: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = !1;
      t.config = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            var t = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                t.stack
            );
          } else
            n &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          n = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return n;
        },
      };
    },
    65512: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(38331);
      t.filter = function (e, t) {
        return function (n) {
          return n.lift(new i(e, t));
        };
      };
      var i = (function () {
          function e(e, t) {
            (this.predicate = e), (this.thisArg = t);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new a(e, this.predicate, this.thisArg));
            }),
            e
          );
        })(),
        a = (function (e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return (o.predicate = n), (o.thisArg = r), (o.count = 0), o;
          }
          return (
            r(t, e),
            (t.prototype._next = function (e) {
              var t;
              try {
                t = this.predicate.call(this.thisArg, e, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              t && this.destination.next(e);
            }),
            t
          );
        })(o.Subscriber);
    },
    38770: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            function r() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(38331);
      t.map = function (e, t) {
        return function (n) {
          if ("function" !== typeof e)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new i(e, t));
        };
      };
      var i = (function () {
        function e(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new a(e, this.project, this.thisArg));
          }),
          e
        );
      })();
      t.MapOperator = i;
      var a = (function (e) {
        function t(t, n, r) {
          var o = e.call(this, t) || this;
          return (o.project = n), (o.count = 0), (o.thisArg = r || o), o;
        }
        return (
          r(t, e),
          (t.prototype._next = function (e) {
            var t;
            try {
              t = this.project.call(this.thisArg, e, this.count++);
            } catch (n) {
              return void this.destination.error(n);
            }
            this.destination.next(t);
          }),
          t
        );
      })(o.Subscriber);
    },
    97044: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.observable =
          ("function" === typeof Symbol && Symbol.observable) ||
          "@@observable");
    },
    47783: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.rxSubscriber =
          "function" === typeof Symbol
            ? Symbol("rxSubscriber")
            : "@@rxSubscriber_" + Math.random()),
        (t.$$rxSubscriber = t.rxSubscriber);
    },
    79212: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e(e) {
          return (
            Error.call(this),
            (this.message = e
              ? e.length +
                " errors occurred during unsubscription:\n" +
                e
                  .map(function (e, t) {
                    return t + 1 + ") " + e.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = e),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      t.UnsubscriptionError = n;
    },
    86469: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(38331);
      t.canReportError = function (e) {
        for (; e; ) {
          var t = e,
            n = t.closed,
            o = t.destination,
            i = t.isStopped;
          if (n || i) return !1;
          e = o && o instanceof r.Subscriber ? o : null;
        }
        return !0;
      };
    },
    25989: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hostReportError = function (e) {
          setTimeout(function () {
            throw e;
          }, 0);
        });
    },
    47873: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.identity = function (e) {
          return e;
        });
    },
    44392: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isArray =
          Array.isArray ||
          function (e) {
            return e && "number" === typeof e.length;
          });
    },
    13432: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isFunction = function (e) {
          return "function" === typeof e;
        });
    },
    1666: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isObject = function (e) {
          return null !== e && "object" === typeof e;
        });
    },
    81904: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(47873);
      function o(e) {
        return 0 === e.length
          ? r.identity
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce(function (e, t) {
                return t(e);
              }, t);
            };
      }
      (t.pipe = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return o(e);
      }),
        (t.pipeFromArray = o);
    },
    5e4: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(38331),
        o = n(47783),
        i = n(78273);
      t.toSubscriber = function (e, t, n) {
        if (e) {
          if (e instanceof r.Subscriber) return e;
          if (e[o.rxSubscriber]) return e[o.rxSubscriber]();
        }
        return e || t || n
          ? new r.Subscriber(e, t, n)
          : new r.Subscriber(i.empty);
      };
    },
    53116: function (e) {
      e.exports = (function () {
        function e() {
          return (
            (e =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            e.apply(this, arguments)
          );
        }
        function t(e, t) {
          if (e) {
            if ("string" === typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? n(e, t)
                : void 0
            );
          }
        }
        function n(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function r(e, n) {
          var r =
            ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (r) return (r = r.call(e)).next.bind(r);
          if (
            Array.isArray(e) ||
            (r = t(e)) ||
            (n && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            var o = 0;
            return function () {
              return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
        function i(e) {
          var t = e.split("-"),
            n = t[1],
            r = t[2],
            i = t[3];
          if (!n || !r || !i)
            throw new Error(
              "Malformed asset _ref '" +
                e +
                "'. Expected an id like \"" +
                o +
                '".'
            );
          var a = r.split("x"),
            s = +a[0],
            u = +a[1];
          if (!isFinite(s) || !isFinite(u))
            throw new Error(
              "Malformed asset _ref '" +
                e +
                "'. Expected an id like \"" +
                o +
                '".'
            );
          return { id: n, width: s, height: u, format: i };
        }
        var a = function (e) {
            return !!e && "string" === typeof e._ref;
          },
          s = function (e) {
            return !!e && "string" === typeof e._id;
          },
          u = function (e) {
            var t = e;
            return !(!t || !t.asset) && "string" === typeof t.asset.url;
          };
        function c(t) {
          if (!t) return null;
          var n;
          if ("string" === typeof t && l(t)) n = { asset: { _ref: p(t) } };
          else if ("string" === typeof t) n = { asset: { _ref: t } };
          else if (a(t)) n = { asset: t };
          else if (s(t)) n = { asset: { _ref: t._id || "" } };
          else if (u(t)) n = { asset: { _ref: p(t.asset.url) } };
          else {
            if ("object" !== typeof t.asset) return null;
            n = e({}, t);
          }
          var r = t;
          return (
            r.crop && (n.crop = r.crop),
            r.hotspot && (n.hotspot = r.hotspot),
            f(n)
          );
        }
        function l(e) {
          return /^https?:\/\//.test("" + e);
        }
        function p(e) {
          return ("image-" + e.split("/").slice(-1)[0]).replace(
            /\.([a-z]+)$/,
            "-$1"
          );
        }
        function f(t) {
          if (t.crop && t.hotspot) return t;
          var n = e({}, t);
          return (
            n.crop || (n.crop = { left: 0, top: 0, bottom: 0, right: 0 }),
            n.hotspot || (n.hotspot = { x: 0.5, y: 0.5, height: 1, width: 1 }),
            n
          );
        }
        var d = [
          ["width", "w"],
          ["height", "h"],
          ["format", "fm"],
          ["download", "dl"],
          ["blur", "blur"],
          ["sharpen", "sharp"],
          ["invert", "invert"],
          ["orientation", "or"],
          ["minHeight", "min-h"],
          ["maxHeight", "max-h"],
          ["minWidth", "min-w"],
          ["maxWidth", "max-w"],
          ["quality", "q"],
          ["fit", "fit"],
          ["crop", "crop"],
          ["saturation", "sat"],
          ["auto", "auto"],
          ["dpr", "dpr"],
          ["pad", "pad"],
        ];
        function y(t) {
          var n = e({}, t || {}),
            r = n.source;
          delete n.source;
          var o = c(r);
          if (!o)
            throw new Error(
              "Unable to resolve image URL from source (" +
                JSON.stringify(r) +
                ")"
            );
          var a = i(o.asset._ref || o.asset._id || ""),
            s = Math.round(o.crop.left * a.width),
            u = Math.round(o.crop.top * a.height),
            l = {
              left: s,
              top: u,
              width: Math.round(a.width - o.crop.right * a.width - s),
              height: Math.round(a.height - o.crop.bottom * a.height - u),
            },
            p = (o.hotspot.height * a.height) / 2,
            f = (o.hotspot.width * a.width) / 2,
            d = o.hotspot.x * a.width,
            y = o.hotspot.y * a.height,
            g = { left: d - f, top: y - p, right: d + f, bottom: y + p };
          return (
            n.rect ||
              n.focalPoint ||
              n.ignoreImageParams ||
              n.crop ||
              (n = e({}, n, b({ crop: l, hotspot: g }, n))),
            h(e({}, n, { asset: a }))
          );
        }
        function h(e) {
          var t = (e.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
            n =
              e.asset.id +
              "-" +
              e.asset.width +
              "x" +
              e.asset.height +
              "." +
              e.asset.format,
            r = t + "/images/" + e.projectId + "/" + e.dataset + "/" + n,
            o = [];
          if (e.rect) {
            var i = e.rect,
              a = i.left,
              s = i.top,
              u = i.width,
              c = i.height;
            (0 !== a ||
              0 !== s ||
              c !== e.asset.height ||
              u !== e.asset.width) &&
              o.push("rect=" + a + "," + s + "," + u + "," + c);
          }
          e.bg && o.push("bg=" + e.bg),
            e.focalPoint &&
              (o.push("fp-x=" + e.focalPoint.x),
              o.push("fp-y=" + e.focalPoint.y));
          var l = [e.flipHorizontal && "h", e.flipVertical && "v"]
            .filter(Boolean)
            .join("");
          return (
            l && o.push("flip=" + l),
            d.forEach(function (t) {
              var n = t[0],
                r = t[1];
              "undefined" !== typeof e[n]
                ? o.push(r + "=" + encodeURIComponent(e[n]))
                : "undefined" !== typeof e[r] &&
                  o.push(r + "=" + encodeURIComponent(e[r]));
            }),
            0 === o.length ? r : r + "?" + o.join("&")
          );
        }
        function b(e, t) {
          var n,
            r = t.width,
            o = t.height;
          if (!r || !o) return { width: r, height: o, rect: e.crop };
          var i = e.crop,
            a = e.hotspot,
            s = r / o;
          if (i.width / i.height > s) {
            var u = Math.round(i.height),
              c = Math.round(u * s),
              l = Math.max(0, Math.round(i.top)),
              p = Math.round((a.right - a.left) / 2 + a.left),
              f = Math.max(0, Math.round(p - c / 2));
            f < i.left
              ? (f = i.left)
              : f + c > i.left + i.width && (f = i.left + i.width - c),
              (n = { left: f, top: l, width: c, height: u });
          } else {
            var d = i.width,
              y = Math.round(d / s),
              h = Math.max(0, Math.round(i.left)),
              b = Math.round((a.bottom - a.top) / 2 + a.top),
              g = Math.max(0, Math.round(b - y / 2));
            g < i.top
              ? (g = i.top)
              : g + y > i.top + i.height && (g = i.top + i.height - y),
              (n = { left: h, top: g, width: d, height: y });
          }
          return { width: r, height: o, rect: n };
        }
        var g = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
          m = [
            "top",
            "bottom",
            "left",
            "right",
            "center",
            "focalpoint",
            "entropy",
          ],
          v = ["format"];
        function w(e) {
          return !(!e || !("config" in e)) && "function" === typeof e.config;
        }
        function O(e) {
          return (
            !(!e || !("clientConfig" in e)) &&
            "object" === typeof e.clientConfig
          );
        }
        function P(e) {
          for (var t, n = r(d); !(t = n()).done; ) {
            var o = t.value,
              i = o[0],
              a = o[1];
            if (e === i || e === a) return i;
          }
          return e;
        }
        function k(e) {
          if (w(e)) {
            var t = e.config(),
              n = t.apiHost,
              r = t.projectId,
              o = t.dataset;
            return new S(null, {
              baseUrl: (n || "https://api.sanity.io").replace(
                /^https:\/\/api\./,
                "https://cdn."
              ),
              projectId: r,
              dataset: o,
            });
          }
          var i = e;
          if (O(i)) {
            var a = i.clientConfig,
              s = a.apiHost,
              u = a.projectId,
              c = a.dataset;
            return new S(null, {
              baseUrl: (s || "https://api.sanity.io").replace(
                /^https:\/\/api\./,
                "https://cdn."
              ),
              projectId: u,
              dataset: c,
            });
          }
          return new S(null, e);
        }
        var S = (function () {
          function t(t, n) {
            (this.options = void 0),
              (this.options = t
                ? e({}, t.options || {}, n || {})
                : e({}, n || {}));
          }
          var n = t.prototype;
          return (
            (n.withOptions = function (n) {
              var r = n.baseUrl || this.options.baseUrl,
                o = { baseUrl: r };
              for (var i in n) n.hasOwnProperty(i) && (o[P(i)] = n[i]);
              return new t(this, e({ baseUrl: r }, o));
            }),
            (n.image = function (e) {
              return this.withOptions({ source: e });
            }),
            (n.dataset = function (e) {
              return this.withOptions({ dataset: e });
            }),
            (n.projectId = function (e) {
              return this.withOptions({ projectId: e });
            }),
            (n.bg = function (e) {
              return this.withOptions({ bg: e });
            }),
            (n.dpr = function (e) {
              return this.withOptions(e && 1 !== e ? { dpr: e } : {});
            }),
            (n.width = function (e) {
              return this.withOptions({ width: e });
            }),
            (n.height = function (e) {
              return this.withOptions({ height: e });
            }),
            (n.focalPoint = function (e, t) {
              return this.withOptions({ focalPoint: { x: e, y: t } });
            }),
            (n.maxWidth = function (e) {
              return this.withOptions({ maxWidth: e });
            }),
            (n.minWidth = function (e) {
              return this.withOptions({ minWidth: e });
            }),
            (n.maxHeight = function (e) {
              return this.withOptions({ maxHeight: e });
            }),
            (n.minHeight = function (e) {
              return this.withOptions({ minHeight: e });
            }),
            (n.size = function (e, t) {
              return this.withOptions({ width: e, height: t });
            }),
            (n.blur = function (e) {
              return this.withOptions({ blur: e });
            }),
            (n.sharpen = function (e) {
              return this.withOptions({ sharpen: e });
            }),
            (n.rect = function (e, t, n, r) {
              return this.withOptions({
                rect: { left: e, top: t, width: n, height: r },
              });
            }),
            (n.format = function (e) {
              return this.withOptions({ format: e });
            }),
            (n.invert = function (e) {
              return this.withOptions({ invert: e });
            }),
            (n.orientation = function (e) {
              return this.withOptions({ orientation: e });
            }),
            (n.quality = function (e) {
              return this.withOptions({ quality: e });
            }),
            (n.forceDownload = function (e) {
              return this.withOptions({ download: e });
            }),
            (n.flipHorizontal = function () {
              return this.withOptions({ flipHorizontal: !0 });
            }),
            (n.flipVertical = function () {
              return this.withOptions({ flipVertical: !0 });
            }),
            (n.ignoreImageParams = function () {
              return this.withOptions({ ignoreImageParams: !0 });
            }),
            (n.fit = function (e) {
              if (-1 === g.indexOf(e))
                throw new Error('Invalid fit mode "' + e + '"');
              return this.withOptions({ fit: e });
            }),
            (n.crop = function (e) {
              if (-1 === m.indexOf(e))
                throw new Error('Invalid crop mode "' + e + '"');
              return this.withOptions({ crop: e });
            }),
            (n.saturation = function (e) {
              return this.withOptions({ saturation: e });
            }),
            (n.auto = function (e) {
              if (-1 === v.indexOf(e))
                throw new Error('Invalid auto mode "' + e + '"');
              return this.withOptions({ auto: e });
            }),
            (n.pad = function (e) {
              return this.withOptions({ pad: e });
            }),
            (n.url = function () {
              return y(this.options);
            }),
            (n.toString = function () {
              return this.url();
            }),
            t
          );
        })();
        return k;
      })();
    },
    72779: function (e, t) {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var i = typeof n;
              if ("string" === i || "number" === i) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var a = o.apply(null, n);
                  a && e.push(a);
                }
              } else if ("object" === i) {
                if (
                  n.toString !== Object.prototype.toString &&
                  !n.toString.toString().includes("[native code]")
                ) {
                  e.push(n.toString());
                  continue;
                }
                for (var s in n) r.call(n, s) && n[s] && e.push(s);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    97327: function (e, t) {
      "use strict";
      t.Q = function (e) {
        var t,
          n = [],
          r = String(e || ""),
          o = r.indexOf(","),
          i = 0,
          a = !1;
        for (; !a; )
          -1 === o && ((o = r.length), (a = !0)),
            (!(t = r.slice(i, o).trim()) && a) || n.push(t),
            (i = o + 1),
            (o = r.indexOf(",", i));
        return n;
      };
    },
    39714: function (e) {
      "use strict";
      var t = function (e) {
        return (
          (function (e) {
            return !!e && "object" === typeof e;
          })(e) &&
          !(function (e) {
            var t = Object.prototype.toString.call(e);
            return (
              "[object RegExp]" === t ||
              "[object Date]" === t ||
              (function (e) {
                return e.$$typeof === n;
              })(e)
            );
          })(e)
        );
      };
      var n =
        "function" === typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function r(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? u(((n = e), Array.isArray(n) ? [] : {}), e, t)
          : e;
      }
      function o(e, t, n) {
        return e.concat(t).map(function (e) {
          return r(e, n);
        });
      }
      function i(e) {
        return Object.keys(e).concat(
          (function (e) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function (t) {
                  return Object.propertyIsEnumerable.call(e, t);
                })
              : [];
          })(e)
        );
      }
      function a(e, t) {
        try {
          return t in e;
        } catch (n) {
          return !1;
        }
      }
      function s(e, t, n) {
        var o = {};
        return (
          n.isMergeableObject(e) &&
            i(e).forEach(function (t) {
              o[t] = r(e[t], n);
            }),
          i(t).forEach(function (i) {
            (function (e, t) {
              return (
                a(e, t) &&
                !(
                  Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t)
                )
              );
            })(e, i) ||
              (a(e, i) && n.isMergeableObject(t[i])
                ? (o[i] = (function (e, t) {
                    if (!t.customMerge) return u;
                    var n = t.customMerge(e);
                    return "function" === typeof n ? n : u;
                  })(i, n)(e[i], t[i], n))
                : (o[i] = r(t[i], n)));
          }),
          o
        );
      }
      function u(e, n, i) {
        ((i = i || {}).arrayMerge = i.arrayMerge || o),
          (i.isMergeableObject = i.isMergeableObject || t),
          (i.cloneUnlessOtherwiseSpecified = r);
        var a = Array.isArray(n);
        return a === Array.isArray(e)
          ? a
            ? i.arrayMerge(e, n, i)
            : s(e, n, i)
          : r(n, i);
      }
      u.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, n) {
          return u(e, n, t);
        }, {});
      };
      var c = u;
      e.exports = c;
    },
    76372: function (e, t) {
      var n, r, o;
      !(function (i) {
        "use strict";
        var a = i.setTimeout,
          s = i.clearTimeout,
          u = i.XMLHttpRequest,
          c = i.XDomainRequest,
          l = i.ActiveXObject,
          p = i.EventSource,
          f = i.document,
          d = i.Promise,
          y = i.fetch,
          h = i.Response,
          b = i.TextDecoder,
          g = i.TextEncoder,
          m = i.AbortController;
        if (
          ("undefined" === typeof window ||
            "undefined" === typeof f ||
            "readyState" in f ||
            null != f.body ||
            ((f.readyState = "loading"),
            window.addEventListener(
              "load",
              function (e) {
                f.readyState = "complete";
              },
              !1
            )),
          null == u &&
            null != l &&
            (u = function () {
              return new l("Microsoft.XMLHTTP");
            }),
          void 0 == Object.create &&
            (Object.create = function (e) {
              function t() {}
              return (t.prototype = e), new t();
            }),
          Date.now ||
            (Date.now = function () {
              return new Date().getTime();
            }),
          void 0 == m)
        ) {
          var v = y;
          (y = function (e, t) {
            var n = t.signal;
            return v(e, {
              headers: t.headers,
              credentials: t.credentials,
              cache: t.cache,
            }).then(function (e) {
              var t = e.body.getReader();
              return (
                (n._reader = t),
                n._aborted && n._reader.cancel(),
                {
                  status: e.status,
                  statusText: e.statusText,
                  headers: e.headers,
                  body: {
                    getReader: function () {
                      return t;
                    },
                  },
                }
              );
            });
          }),
            (m = function () {
              (this.signal = { _reader: null, _aborted: !1 }),
                (this.abort = function () {
                  null != this.signal._reader && this.signal._reader.cancel(),
                    (this.signal._aborted = !0);
                });
            });
        }
        function w() {
          (this.bitsNeeded = 0), (this.codePoint = 0);
        }
        w.prototype.decode = function (e) {
          function t(e, t, n) {
            if (1 === n) return e >= 128 >> t && e << t <= 2047;
            if (2 === n)
              return (
                (e >= 2048 >> t && e << t <= 55295) ||
                (e >= 57344 >> t && e << t <= 65535)
              );
            if (3 === n) return e >= 65536 >> t && e << t <= 1114111;
            throw new Error();
          }
          function n(e, t) {
            if (6 === e) return t >> 6 > 15 ? 3 : t > 31 ? 2 : 1;
            if (12 === e) return t > 15 ? 3 : 2;
            if (18 === e) return 3;
            throw new Error();
          }
          for (
            var r = 65533,
              o = "",
              i = this.bitsNeeded,
              a = this.codePoint,
              s = 0;
            s < e.length;
            s += 1
          ) {
            var u = e[s];
            0 !== i &&
              (u < 128 || u > 191 || !t((a << 6) | (63 & u), i - 6, n(i, a))) &&
              ((i = 0), (a = r), (o += String.fromCharCode(a))),
              0 === i
                ? (u >= 0 && u <= 127
                    ? ((i = 0), (a = u))
                    : u >= 192 && u <= 223
                    ? ((i = 6), (a = 31 & u))
                    : u >= 224 && u <= 239
                    ? ((i = 12), (a = 15 & u))
                    : u >= 240 && u <= 247
                    ? ((i = 18), (a = 7 & u))
                    : ((i = 0), (a = r)),
                  0 === i || t(a, i, n(i, a)) || ((i = 0), (a = r)))
                : ((i -= 6), (a = (a << 6) | (63 & u))),
              0 === i &&
                (a <= 65535
                  ? (o += String.fromCharCode(a))
                  : ((o += String.fromCharCode(
                      55296 + ((a - 65535 - 1) >> 10)
                    )),
                    (o += String.fromCharCode(
                      56320 + ((a - 65535 - 1) & 1023)
                    ))));
          }
          return (this.bitsNeeded = i), (this.codePoint = a), o;
        };
        (void 0 != b &&
          void 0 != g &&
          (function () {
            try {
              return (
                "test" ===
                new b().decode(new g().encode("test"), { stream: !0 })
              );
            } catch (e) {
              console.debug(
                "TextDecoder does not support streaming option. Using polyfill instead: " +
                  e
              );
            }
            return !1;
          })()) ||
          (b = w);
        var O = function () {};
        function P(e) {
          (this.withCredentials = !1),
            (this.readyState = 0),
            (this.status = 0),
            (this.statusText = ""),
            (this.responseText = ""),
            (this.onprogress = O),
            (this.onload = O),
            (this.onerror = O),
            (this.onreadystatechange = O),
            (this._contentType = ""),
            (this._xhr = e),
            (this._sendTimeout = 0),
            (this._abort = O);
        }
        function k(e) {
          return e.replace(/[A-Z]/g, function (e) {
            return String.fromCharCode(e.charCodeAt(0) + 32);
          });
        }
        function S(e) {
          for (
            var t = Object.create(null), n = e.split("\r\n"), r = 0;
            r < n.length;
            r += 1
          ) {
            var o = n[r].split(": "),
              i = o.shift(),
              a = o.join(": ");
            t[k(i)] = a;
          }
          this._map = t;
        }
        function _() {}
        function x(e) {
          this._headers = e;
        }
        function E() {}
        function j() {
          this._listeners = Object.create(null);
        }
        function A(e) {
          a(function () {
            throw e;
          }, 0);
        }
        function T(e) {
          (this.type = e), (this.target = void 0);
        }
        function C(e, t) {
          T.call(this, e),
            (this.data = t.data),
            (this.lastEventId = t.lastEventId);
        }
        function I(e, t) {
          T.call(this, e),
            (this.status = t.status),
            (this.statusText = t.statusText),
            (this.headers = t.headers);
        }
        function R(e, t) {
          T.call(this, e), (this.error = t.error);
        }
        (P.prototype.open = function (e, t) {
          this._abort(!0);
          var n = this,
            r = this._xhr,
            o = 1,
            i = 0;
          this._abort = function (e) {
            0 !== n._sendTimeout && (s(n._sendTimeout), (n._sendTimeout = 0)),
              (1 !== o && 2 !== o && 3 !== o) ||
                ((o = 4),
                (r.onload = O),
                (r.onerror = O),
                (r.onabort = O),
                (r.onprogress = O),
                (r.onreadystatechange = O),
                r.abort(),
                0 !== i && (s(i), (i = 0)),
                e ||
                  ((n.readyState = 4),
                  n.onabort(null),
                  n.onreadystatechange())),
              (o = 0);
          };
          var c = function () {
              if (1 === o) {
                var e = 0,
                  t = "",
                  i = void 0;
                if ("contentType" in r)
                  (e = 200), (t = "OK"), (i = r.contentType);
                else
                  try {
                    (e = r.status),
                      (t = r.statusText),
                      (i = r.getResponseHeader("Content-Type"));
                  } catch (a) {
                    (e = 0), (t = ""), (i = void 0);
                  }
                0 !== e &&
                  ((o = 2),
                  (n.readyState = 2),
                  (n.status = e),
                  (n.statusText = t),
                  (n._contentType = i),
                  n.onreadystatechange());
              }
            },
            l = function () {
              if ((c(), 2 === o || 3 === o)) {
                o = 3;
                var e = "";
                try {
                  e = r.responseText;
                } catch (t) {}
                (n.readyState = 3), (n.responseText = e), n.onprogress();
              }
            },
            p = function (e, t) {
              if (
                ((null != t && null != t.preventDefault) ||
                  (t = { preventDefault: O }),
                l(),
                1 === o || 2 === o || 3 === o)
              ) {
                if (
                  ((o = 4),
                  0 !== i && (s(i), (i = 0)),
                  (n.readyState = 4),
                  "load" === e)
                )
                  n.onload(t);
                else if ("error" === e) n.onerror(t);
                else {
                  if ("abort" !== e) throw new TypeError();
                  n.onabort(t);
                }
                n.onreadystatechange();
              }
            },
            f = function () {
              (i = a(function () {
                f();
              }, 500)),
                3 === r.readyState && l();
            };
          "onload" in r &&
            (r.onload = function (e) {
              p("load", e);
            }),
            "onerror" in r &&
              (r.onerror = function (e) {
                p("error", e);
              }),
            "onabort" in r &&
              (r.onabort = function (e) {
                p("abort", e);
              }),
            "onprogress" in r && (r.onprogress = l),
            "onreadystatechange" in r &&
              (r.onreadystatechange = function (e) {
                !(function (e) {
                  void 0 != r &&
                    (4 === r.readyState
                      ? ("onload" in r && "onerror" in r && "onabort" in r) ||
                        p("" === r.responseText ? "error" : "load", e)
                      : 3 === r.readyState
                      ? "onprogress" in r || l()
                      : 2 === r.readyState && c());
                })(e);
              }),
            (!("contentType" in r) && "ontimeout" in u.prototype) ||
              (t += (-1 === t.indexOf("?") ? "?" : "&") + "padding=true"),
            r.open(e, t, !0),
            "readyState" in r &&
              (i = a(function () {
                f();
              }, 0));
        }),
          (P.prototype.abort = function () {
            this._abort(!1);
          }),
          (P.prototype.getResponseHeader = function (e) {
            return this._contentType;
          }),
          (P.prototype.setRequestHeader = function (e, t) {
            var n = this._xhr;
            "setRequestHeader" in n && n.setRequestHeader(e, t);
          }),
          (P.prototype.getAllResponseHeaders = function () {
            return (
              (void 0 != this._xhr.getAllResponseHeaders &&
                this._xhr.getAllResponseHeaders()) ||
              ""
            );
          }),
          (P.prototype.send = function () {
            if (
              ("ontimeout" in u.prototype &&
                ("sendAsBinary" in u.prototype || "mozAnon" in u.prototype)) ||
              void 0 == f ||
              void 0 == f.readyState ||
              "complete" === f.readyState
            ) {
              var e = this._xhr;
              "withCredentials" in e &&
                (e.withCredentials = this.withCredentials);
              try {
                e.send(void 0);
              } catch (n) {
                throw n;
              }
            } else {
              var t = this;
              t._sendTimeout = a(function () {
                (t._sendTimeout = 0), t.send();
              }, 4);
            }
          }),
          (S.prototype.get = function (e) {
            return this._map[k(e)];
          }),
          null != u && null == u.HEADERS_RECEIVED && (u.HEADERS_RECEIVED = 2),
          (_.prototype.open = function (e, t, n, r, o, i, a) {
            e.open("GET", o);
            var s = 0;
            for (var c in ((e.onprogress = function () {
              var t = e.responseText.slice(s);
              (s += t.length), n(t);
            }),
            (e.onerror = function (e) {
              e.preventDefault(), r(new Error("NetworkError"));
            }),
            (e.onload = function () {
              r(null);
            }),
            (e.onabort = function () {
              r(null);
            }),
            (e.onreadystatechange = function () {
              if (e.readyState === u.HEADERS_RECEIVED) {
                var n = e.status,
                  r = e.statusText,
                  o = e.getResponseHeader("Content-Type"),
                  i = e.getAllResponseHeaders();
                t(n, r, o, new S(i));
              }
            }),
            (e.withCredentials = i),
            a))
              Object.prototype.hasOwnProperty.call(a, c) &&
                e.setRequestHeader(c, a[c]);
            return e.send(), e;
          }),
          (x.prototype.get = function (e) {
            return this._headers.get(e);
          }),
          (E.prototype.open = function (e, t, n, r, o, i, a) {
            var s = null,
              u = new m(),
              c = u.signal,
              l = new b();
            return (
              y(o, {
                headers: a,
                credentials: i ? "include" : "same-origin",
                signal: c,
                cache: "no-store",
              })
                .then(function (e) {
                  return (
                    (s = e.body.getReader()),
                    t(
                      e.status,
                      e.statusText,
                      e.headers.get("Content-Type"),
                      new x(e.headers)
                    ),
                    new d(function (e, t) {
                      var r = function () {
                        s.read()
                          .then(function (t) {
                            if (t.done) e(void 0);
                            else {
                              var o = l.decode(t.value, { stream: !0 });
                              n(o), r();
                            }
                          })
                          .catch(function (e) {
                            t(e);
                          });
                      };
                      r();
                    })
                  );
                })
                .catch(function (e) {
                  return "AbortError" === e.name ? void 0 : e;
                })
                .then(function (e) {
                  r(e);
                }),
              {
                abort: function () {
                  null != s && s.cancel(), u.abort();
                },
              }
            );
          }),
          (j.prototype.dispatchEvent = function (e) {
            e.target = this;
            var t = this._listeners[e.type];
            if (void 0 != t)
              for (var n = t.length, r = 0; r < n; r += 1) {
                var o = t[r];
                try {
                  "function" === typeof o.handleEvent
                    ? o.handleEvent(e)
                    : o.call(this, e);
                } catch (i) {
                  A(i);
                }
              }
          }),
          (j.prototype.addEventListener = function (e, t) {
            e = String(e);
            var n = this._listeners,
              r = n[e];
            void 0 == r && ((r = []), (n[e] = r));
            for (var o = !1, i = 0; i < r.length; i += 1)
              r[i] === t && (o = !0);
            o || r.push(t);
          }),
          (j.prototype.removeEventListener = function (e, t) {
            e = String(e);
            var n = this._listeners,
              r = n[e];
            if (void 0 != r) {
              for (var o = [], i = 0; i < r.length; i += 1)
                r[i] !== t && o.push(r[i]);
              0 === o.length ? delete n[e] : (n[e] = o);
            }
          }),
          (C.prototype = Object.create(T.prototype)),
          (I.prototype = Object.create(T.prototype)),
          (R.prototype = Object.create(T.prototype));
        var D = -1,
          M = -1,
          L = /^text\/event\-stream(;.*)?$/i,
          N = function (e, t) {
            var n = null == e ? t : parseInt(e, 10);
            return n !== n && (n = t), U(n);
          },
          U = function (e) {
            return Math.min(Math.max(e, 1e3), 18e6);
          },
          z = function (e, t, n) {
            try {
              "function" === typeof t && t.call(e, n);
            } catch (r) {
              A(r);
            }
          };
        function F(e, t) {
          j.call(this),
            (t = t || {}),
            (this.onopen = void 0),
            (this.onmessage = void 0),
            (this.onerror = void 0),
            (this.url = void 0),
            (this.readyState = void 0),
            (this.withCredentials = void 0),
            (this.headers = void 0),
            (this._close = void 0),
            (function (e, t, n) {
              t = String(t);
              var r = Boolean(n.withCredentials),
                o = n.lastEventIdQueryParameterName || "lastEventId",
                i = U(1e3),
                l = N(n.heartbeatTimeout, 45e3),
                p = "",
                f = i,
                d = !1,
                y = 0,
                h = n.headers || {},
                b = n.Transport,
                g =
                  H && void 0 == b
                    ? void 0
                    : new P(
                        void 0 != b
                          ? new b()
                          : (void 0 != u && "withCredentials" in u.prototype) ||
                            void 0 == c
                          ? new u()
                          : new c()
                      ),
                m =
                  null != b && "string" !== typeof b
                    ? new b()
                    : void 0 == g
                    ? new E()
                    : new _(),
                v = void 0,
                w = 0,
                O = D,
                k = "",
                S = "",
                x = "",
                j = "",
                A = 0,
                T = 0,
                F = 0,
                $ = function (t, n, r, o) {
                  if (0 === O)
                    if (200 === t && void 0 != r && L.test(r)) {
                      (O = 1), (d = Date.now()), (f = i), (e.readyState = 1);
                      var a = new I("open", {
                        status: t,
                        statusText: n,
                        headers: o,
                      });
                      e.dispatchEvent(a), z(e, e.onopen, a);
                    } else {
                      var s = "";
                      200 !== t
                        ? (n && (n = n.replace(/\s+/g, " ")),
                          (s =
                            "EventSource's response has a status " +
                            t +
                            " " +
                            n +
                            " that is not 200. Aborting the connection."))
                        : (s =
                            "EventSource's response has a Content-Type specifying an unsupported type: " +
                            (void 0 == r ? "-" : r.replace(/\s+/g, " ")) +
                            ". Aborting the connection."),
                        V();
                      a = new I("error", {
                        status: t,
                        statusText: n,
                        headers: o,
                      });
                      e.dispatchEvent(a), z(e, e.onerror, a), console.error(s);
                    }
                },
                B = function (t) {
                  if (1 === O) {
                    for (var n = -1, r = 0; r < t.length; r += 1) {
                      ((c = t.charCodeAt(r)) !== "\n".charCodeAt(0) &&
                        c !== "\r".charCodeAt(0)) ||
                        (n = r);
                    }
                    var o = (-1 !== n ? j : "") + t.slice(0, n + 1);
                    (j = (-1 === n ? j : "") + t.slice(n + 1)),
                      "" !== t && ((d = Date.now()), (y += t.length));
                    for (var u = 0; u < o.length; u += 1) {
                      var c = o.charCodeAt(u);
                      if (A === M && c === "\n".charCodeAt(0)) A = 0;
                      else if (
                        (A === M && (A = 0),
                        c === "\r".charCodeAt(0) || c === "\n".charCodeAt(0))
                      ) {
                        if (0 !== A) {
                          1 === A && (F = u + 1);
                          var h = o.slice(T, F - 1),
                            b = o.slice(
                              F +
                                (F < u && o.charCodeAt(F) === " ".charCodeAt(0)
                                  ? 1
                                  : 0),
                              u
                            );
                          "data" === h
                            ? ((k += "\n"), (k += b))
                            : "id" === h
                            ? (S = b)
                            : "event" === h
                            ? (x = b)
                            : "retry" === h
                            ? ((i = N(b, i)), (f = i))
                            : "heartbeatTimeout" === h &&
                              ((l = N(b, l)),
                              0 !== w &&
                                (s(w),
                                (w = a(function () {
                                  W();
                                }, l))));
                        }
                        if (0 === A) {
                          if ("" !== k) {
                            (p = S), "" === x && (x = "message");
                            var g = new C(x, {
                              data: k.slice(1),
                              lastEventId: S,
                            });
                            if (
                              (e.dispatchEvent(g),
                              "open" === x
                                ? z(e, e.onopen, g)
                                : "message" === x
                                ? z(e, e.onmessage, g)
                                : "error" === x && z(e, e.onerror, g),
                              2 === O)
                            )
                              return;
                          }
                          (k = ""), (x = "");
                        }
                        A = c === "\r".charCodeAt(0) ? M : 0;
                      } else
                        0 === A && ((T = u), (A = 1)),
                          1 === A
                            ? c === ":".charCodeAt(0) && ((F = u + 1), (A = 2))
                            : 2 === A && (A = 3);
                    }
                  }
                },
                q = function (t) {
                  if (1 === O || 0 === O) {
                    (O = D),
                      0 !== w && (s(w), (w = 0)),
                      (w = a(function () {
                        W();
                      }, f)),
                      (f = U(Math.min(16 * i, 2 * f))),
                      (e.readyState = 0);
                    var n = new R("error", { error: t });
                    e.dispatchEvent(n),
                      z(e, e.onerror, n),
                      void 0 != t && console.error(t);
                  }
                },
                V = function () {
                  (O = 2),
                    void 0 != v && (v.abort(), (v = void 0)),
                    0 !== w && (s(w), (w = 0)),
                    (e.readyState = 2);
                },
                W = function () {
                  if (((w = 0), O === D)) {
                    (d = !1),
                      (y = 0),
                      (w = a(function () {
                        W();
                      }, l)),
                      (O = 0),
                      (k = ""),
                      (x = ""),
                      (S = p),
                      (j = ""),
                      (T = 0),
                      (F = 0),
                      (A = 0);
                    var n = t;
                    if (
                      "data:" !== t.slice(0, 5) &&
                      "blob:" !== t.slice(0, 5) &&
                      "" !== p
                    ) {
                      var r = t.indexOf("?");
                      (n =
                        -1 === r
                          ? t
                          : t.slice(0, r + 1) +
                            t
                              .slice(r + 1)
                              .replace(
                                /(?:^|&)([^=&]*)(?:=[^&]*)?/g,
                                function (e, t) {
                                  return t === o ? "" : e;
                                }
                              )),
                        (n +=
                          (-1 === t.indexOf("?") ? "?" : "&") +
                          o +
                          "=" +
                          encodeURIComponent(p));
                    }
                    var i = e.withCredentials,
                      s = { Accept: "text/event-stream" },
                      u = e.headers;
                    if (void 0 != u)
                      for (var c in u)
                        Object.prototype.hasOwnProperty.call(u, c) &&
                          (s[c] = u[c]);
                    try {
                      v = m.open(g, $, B, q, n, i, s);
                    } catch (h) {
                      throw (V(), h);
                    }
                  } else if (d || void 0 == v) {
                    var f = Math.max((d || Date.now()) + l - Date.now(), 1);
                    (d = !1),
                      (w = a(function () {
                        W();
                      }, f));
                  } else
                    q(
                      new Error(
                        "No activity within " +
                          l +
                          " milliseconds. " +
                          (0 === O
                            ? "No response received."
                            : y + " chars received.") +
                          " Reconnecting."
                      )
                    ),
                      void 0 != v && (v.abort(), (v = void 0));
                };
              (e.url = t),
                (e.readyState = 0),
                (e.withCredentials = r),
                (e.headers = h),
                (e._close = V),
                W();
            })(this, e, t);
        }
        var H = void 0 != y && void 0 != h && "body" in h.prototype;
        (F.prototype = Object.create(j.prototype)),
          (F.prototype.CONNECTING = 0),
          (F.prototype.OPEN = 1),
          (F.prototype.CLOSED = 2),
          (F.prototype.close = function () {
            this._close();
          }),
          (F.CONNECTING = 0),
          (F.OPEN = 1),
          (F.CLOSED = 2),
          (F.prototype.withCredentials = void 0);
        var $ = p;
        void 0 == u ||
          (void 0 != p && "withCredentials" in p.prototype) ||
          ($ = F),
          (function (i) {
            if ("object" === typeof e.exports) {
              var a = i(t);
              void 0 !== a && (e.exports = a);
            } else
              (r = [t]),
                void 0 ===
                  (o = "function" === typeof (n = i) ? n.apply(t, r) : n) ||
                  (e.exports = o);
          })(function (e) {
            (e.EventSourcePolyfill = F),
              (e.NativeEventSource = p),
              (e.EventSource = $);
          });
      })(
        "undefined" === typeof globalThis
          ? "undefined" !== typeof window
            ? window
            : "undefined" !== typeof self
            ? self
            : this
          : globalThis
      );
    },
    72350: function (e) {
      "use strict";
      e.exports = function (e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        var o = e.length - 1;
        return (
          e.slice(0, o).reduce(function (e, t, r) {
            return e + t + n[r];
          }, "") + e[o]
        );
      };
    },
    74163: function (e) {
      "use strict";
      e.exports = function (e, n) {
        var r,
          o,
          i,
          a = e || "",
          s = n || "div",
          u = {},
          c = 0;
        for (; c < a.length; )
          (t.lastIndex = c),
            (i = t.exec(a)),
            (r = a.slice(c, i ? i.index : a.length)) &&
              (o
                ? "#" === o
                  ? (u.id = r)
                  : u.className
                  ? u.className.push(r)
                  : (u.className = [r])
                : (s = r),
              (c += r.length)),
            i && ((o = i[0]), c++);
        return { type: "element", tagName: s, properties: u, children: [] };
      };
      var t = /[#.]/g;
    },
    68924: function (e, t, n) {
      "use strict";
      var r = n(70521),
        o = n(2939),
        i = n(74163),
        a = n(93113).Q,
        s = n(97327).Q;
      e.exports = function (e, t, n) {
        var o = n
          ? (function (e) {
              var t,
                n = e.length,
                r = -1,
                o = {};
              for (; ++r < n; ) o[(t = e[r]).toLowerCase()] = t;
              return o;
            })(n)
          : null;
        return function (e, n) {
          var r,
            a = i(e, t),
            s = Array.prototype.slice.call(arguments, 2),
            p = a.tagName.toLowerCase();
          (a.tagName = o && u.call(o, p) ? o[p] : p),
            n && c(n, a) && (s.unshift(n), (n = null));
          if (n) for (r in n) f(a.properties, r, n[r]);
          l(a.children, s),
            "template" === a.tagName &&
              ((a.content = { type: "root", children: a.children }),
              (a.children = []));
          return a;
        };
        function f(t, n, o) {
          var i, u, c;
          null !== o &&
            void 0 !== o &&
            o === o &&
            ((u = (i = r(e, n)).property),
            "string" === typeof (c = o) &&
              (i.spaceSeparated
                ? (c = a(c))
                : i.commaSeparated
                ? (c = s(c))
                : i.commaOrSpaceSeparated && (c = a(s(c).join(" ")))),
            "style" === u &&
              "string" !== typeof o &&
              (c = (function (e) {
                var t,
                  n = [];
                for (t in e) n.push([t, e[t]].join(": "));
                return n.join("; ");
              })(c)),
            "className" === u && t.className && (c = t.className.concat(c)),
            (t[u] = (function (e, t, n) {
              var r, o, i;
              if ("object" !== typeof n || !("length" in n)) return p(e, t, n);
              (o = n.length), (r = -1), (i = []);
              for (; ++r < o; ) i[r] = p(e, t, n[r]);
              return i;
            })(i, u, c)));
        }
      };
      var u = {}.hasOwnProperty;
      function c(e, t) {
        return (
          "string" === typeof e ||
          "length" in e ||
          (function (e, t) {
            var n = t.type;
            if ("input" === e || !n || "string" !== typeof n) return !1;
            if ("object" === typeof t.children && "length" in t.children)
              return !0;
            if (((n = n.toLowerCase()), "button" === e))
              return (
                "menu" !== n &&
                "submit" !== n &&
                "reset" !== n &&
                "button" !== n
              );
            return "value" in t;
          })(t.tagName, e)
        );
      }
      function l(e, t) {
        var n, r;
        if ("string" !== typeof t && "number" !== typeof t)
          if ("object" === typeof t && "length" in t)
            for (n = -1, r = t.length; ++n < r; ) l(e, t[n]);
          else {
            if ("object" !== typeof t || !("type" in t))
              throw new Error(
                "Expected node, nodes, or string, got `" + t + "`"
              );
            e.push(t);
          }
        else e.push({ type: "text", value: String(t) });
      }
      function p(e, t, n) {
        var r = n;
        return (
          e.number || e.positiveNumber
            ? isNaN(r) || "" === r || (r = Number(r))
            : (e.boolean || e.overloadedBoolean) &&
              ("string" !== typeof r ||
                ("" !== r && o(n) !== o(t)) ||
                (r = !0)),
          r
        );
      }
    },
    88977: function (e, t, n) {
      "use strict";
      var r = n(59209),
        o = n(68924)(r, "div");
      (o.displayName = "html"), (e.exports = o);
    },
    22896: function (e, t, n) {
      "use strict";
      e.exports = n(88977);
    },
    73756: function (e) {
      "use strict";
      e.exports = function (e) {
        var t = "string" === typeof e ? e.charCodeAt(0) : e;
        return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
      };
    },
    65279: function (e, t, n) {
      "use strict";
      var r = n(73756),
        o = n(61278);
      e.exports = function (e) {
        return r(e) || o(e);
      };
    },
    61278: function (e) {
      "use strict";
      e.exports = function (e) {
        var t = "string" === typeof e ? e.charCodeAt(0) : e;
        return t >= 48 && t <= 57;
      };
    },
    48833: function (e) {
      "use strict";
      e.exports = function (e) {
        var t = "string" === typeof e ? e.charCodeAt(0) : e;
        return (
          (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || (t >= 48 && t <= 57)
        );
      };
    },
    98558: function (e) {
      "use strict";
      e.exports = function (e) {
        return null != e && "object" === typeof e && !1 === Array.isArray(e);
      };
    },
    9599: function (e) {
      function t(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(new Error("Failed to load " + this.src), e);
          });
      }
      function n(e, t) {
        e.onreadystatechange = function () {
          ("complete" != this.readyState && "loaded" != this.readyState) ||
            ((this.onreadystatechange = null), t(null, e));
        };
      }
      e.exports = function (e, r, o) {
        var i = document.head || document.getElementsByTagName("head")[0],
          a = document.createElement("script");
        "function" === typeof r && ((o = r), (r = {})),
          (r = r || {}),
          (o = o || function () {}),
          (a.type = r.type || "text/javascript"),
          (a.charset = r.charset || "utf8"),
          (a.async = !("async" in r) || !!r.async),
          (a.src = e),
          r.attrs &&
            (function (e, t) {
              for (var n in t) e.setAttribute(n, t[n]);
            })(a, r.attrs),
          r.text && (a.text = "" + r.text),
          ("onload" in a ? t : n)(a, o),
          a.onload || t(a, o),
          i.appendChild(a);
      };
    },
    85598: function (e, t) {
      "use strict";
      var n = "undefined" !== typeof Reflect ? Reflect.construct : void 0,
        r = Object.defineProperty,
        o = Error.captureStackTrace;
      function i(e) {
        void 0 !== e &&
          r(this, "message", { configurable: !0, value: e, writable: !0 });
        var t = this.constructor.name;
        void 0 !== t &&
          t !== this.name &&
          r(this, "name", { configurable: !0, value: t, writable: !0 }),
          o(this, this.constructor);
      }
      void 0 === o &&
        (o = function (e) {
          var t = new Error();
          r(e, "stack", {
            configurable: !0,
            get: function () {
              var e = t.stack;
              return (
                r(this, "stack", { configurable: !0, value: e, writable: !0 }),
                e
              );
            },
            set: function (t) {
              r(e, "stack", { configurable: !0, value: t, writable: !0 });
            },
          });
        }),
        (i.prototype = Object.create(Error.prototype, {
          constructor: { configurable: !0, value: i, writable: !0 },
        }));
      var a = (function () {
        function e(e, t) {
          return r(e, "name", { configurable: !0, value: t });
        }
        try {
          var t = function () {};
          if ((e(t, "foo"), "foo" === t.name)) return e;
        } catch (n) {}
      })();
      (t = e.exports =
        function (e, t) {
          if (null == t || t === Error) t = i;
          else if ("function" !== typeof t)
            throw new TypeError("super_ should be a function");
          var r;
          if ("string" === typeof e)
            (r = e),
              (e =
                void 0 !== n
                  ? function () {
                      return n(t, arguments, this.constructor);
                    }
                  : function () {
                      t.apply(this, arguments);
                    }),
              void 0 !== a && (a(e, r), (r = void 0));
          else if ("function" !== typeof e)
            throw new TypeError(
              "constructor should be either a string or a function"
            );
          e.super_ = e.super = t;
          var o = { constructor: { configurable: !0, value: e, writable: !0 } };
          return (
            void 0 !== r &&
              (o.name = { configurable: !0, value: r, writable: !0 }),
            (e.prototype = Object.create(t.prototype, o)),
            e
          );
        }),
        (t.BaseError = i);
    },
    36631: function (e, t, n) {
      "use strict";
      n.r(t);
      var r =
        Number.isNaN ||
        function (e) {
          return "number" === typeof e && e !== e;
        };
      function o(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (((o = e[n]), (i = t[n]), !(o === i || (r(o) && r(i))))) return !1;
        var o, i;
        return !0;
      }
      t.default = function (e, t) {
        var n;
        void 0 === t && (t = o);
        var r,
          i = [],
          a = !1;
        return function () {
          for (var o = [], s = 0; s < arguments.length; s++)
            o[s] = arguments[s];
          return (
            (a && n === this && t(o, i)) ||
              ((r = e.apply(this, o)), (a = !0), (n = this), (i = o)),
            r
          );
        };
      };
    },
    82390: function (e) {
      e.exports = function () {
        var e = [];
        return {
          subscribe: function (t) {
            return (
              e.push(t),
              function () {
                var n = e.indexOf(t);
                n > -1 && e.splice(n, 1);
              }
            );
          },
          publish: function () {
            for (var t = 0; t < e.length; t++) e[t].apply(null, arguments);
          },
        };
      };
    },
    94630: function (e, t, n) {
      "use strict";
      n.d(t, {
        KF: function () {
          return c;
        },
      });
      n(41981);
      var r = n(2784);
      n(72350);
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var i = (function () {
        function e() {
          this._signal = { aborted: !1 };
        }
        var t, n, r;
        return (
          (e.prototype.abort = function () {
            this._signal.aborted = !0;
          }),
          (t = e),
          (n = [
            {
              key: "signal",
              get: function () {
                return this._signal;
              },
            },
          ]) && o(t.prototype, n),
          r && o(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function a() {
        return "undefined" === typeof AbortController
          ? new i()
          : new AbortController();
      }
      function s(e, t, n) {
        var r = n ? { Authorization: "Bearer " + n } : void 0;
        return fetch("https://" + e + ".api.sanity.io/v1/users/me", {
          credentials: "include",
          signal: t.signal,
          headers: r,
        })
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            return null != e && e.id ? e : null;
          });
      }
      var u = {};
      function c(e) {
        var t,
          o = e.projectId,
          i = e.dataset,
          c = e.token,
          l = e.EventSource,
          p = e.documentLimit,
          f = void 0 === p ? 3e3 : p;
        return function (e, t) {
          void 0 === t && (t = {});
          var n = t,
            i = n.params,
            l = void 0 === i ? u : i,
            p = n.initialData,
            f = n.enabled;
          return (function (e) {
            var t = e.getStore,
              n = e.projectId,
              o = e.query,
              i = e.initialData,
              u = e.enabled,
              c = void 0 !== u && u,
              l = e.token,
              p = (0, r.useState)(),
              f = p[0],
              d = p[1],
              y = (0, r.useState)(!1),
              h = y[0],
              b = y[1],
              g = (0, r.useState)(),
              m = g[0],
              v = g[1],
              w = (function (e) {
                var t = (0, r.useMemo)(
                  function () {
                    return JSON.stringify(e);
                  },
                  [e]
                );
                return (0, r.useMemo)(
                  function () {
                    return JSON.parse(t);
                  },
                  [t]
                );
              })(e.params);
            return (
              (0, r.useEffect)(
                function () {
                  if (c) {
                    b(!0);
                    var e,
                      r = a();
                    return (
                      s(n, r, l)
                        .then(function (e) {
                          if (!e)
                            throw (
                              (console.warn(
                                "Not authenticated - preview not available"
                              ),
                              new Error(
                                "Not authenticated - preview not available"
                              ))
                            );
                        })
                        .then(function () {
                          return t(r);
                        })
                        .then(function (t) {
                          e = t.subscribe(o, w, function (e, t) {
                            e ? d(e) : v(t);
                          });
                        })
                        .catch(function (e) {
                          return "AbortError" === e.name ? null : d(e);
                        })
                        .finally(function () {
                          return b(!1);
                        }),
                      function () {
                        e && e.unsubscribe(), r.abort();
                      }
                    );
                  }
                },
                [t, o, w, c, n, l]
              ),
              { data: "undefined" === typeof m ? i : m, loading: h, error: f }
            );
          })({
            getStore: d,
            projectId: o,
            query: e,
            params: l,
            initialData: p,
            enabled: !!f && "undefined" !== typeof window,
            token: c,
          });
        };
        function d(e) {
          return (
            t ||
              (t = n
                .e(186)
                .then(n.t.bind(n, 79186, 19))
                .then(function (t) {
                  var n = t.groqStore;
                  if (e.signal.aborted) {
                    var r = new Error("Cancelling groq store creation");
                    return (r.name = "AbortError"), Promise.reject(r);
                  }
                  return n({
                    projectId: o,
                    dataset: i,
                    documentLimit: f,
                    token: c,
                    EventSource: l,
                    listen: !0,
                    overlayDrafts: !0,
                    subscriptionThrottleMs: 10,
                  });
                })),
            t
          );
        }
      }
    },
    4079: function (e) {
      "use strict";
      var t = Object.assign.bind(Object);
      (e.exports = t), (e.exports.default = e.exports);
    },
    87732: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return g;
          },
        });
      const r = n(43219),
        o = n(16794)._(n(2784)),
        i = n(28316),
        a = r._(n(30501)),
        s = n(98829),
        u = n(72422),
        c = n(49910),
        l = (n(70186), n(63981)),
        p = r._(n(65381)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function d(e, t, n, r, o, i) {
        const a = null == e ? void 0 : e.src;
        if (!e || e["data-loaded-src"] === a) return;
        e["data-loaded-src"] = a;
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && o(!0), null == n ? void 0 : n.current)) {
                const t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let r = !1,
                  o = !1;
                n.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => r,
                  isPropagationStopped: () => o,
                  persist: () => {},
                  preventDefault: () => {
                    (r = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (o = !0), t.stopPropagation();
                  },
                });
              }
              (null == r ? void 0 : r.current) && r.current(e);
            }
          });
      }
      function y(e) {
        const [t, n] = o.version.split("."),
          r = parseInt(t, 10),
          i = parseInt(n, 10);
        return r > 18 || (18 === r && i >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      const h = (0, o.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: i,
          height: a,
          width: s,
          decoding: u,
          className: c,
          style: l,
          fetchPriority: p,
          placeholder: f,
          loading: h,
          unoptimized: b,
          fill: g,
          onLoadRef: m,
          onLoadingCompleteRef: v,
          setBlurComplete: w,
          setShowAltText: O,
          onLoad: P,
          onError: k,
          ...S
        } = e;
        return o.default.createElement("img", {
          ...S,
          ...y(p),
          loading: h,
          width: s,
          height: a,
          decoding: u,
          "data-nimg": g ? "fill" : "1",
          className: c,
          style: l,
          sizes: i,
          srcSet: r,
          src: n,
          ref: (0, o.useCallback)(
            (e) => {
              t &&
                ("function" === typeof t
                  ? t(e)
                  : "object" === typeof t && (t.current = e)),
                e && (k && (e.src = e.src), e.complete && d(e, f, m, v, w));
            },
            [n, f, m, v, w, k, b, t]
          ),
          onLoad: (e) => {
            d(e.currentTarget, f, m, v, w);
          },
          onError: (e) => {
            O(!0), "empty" !== f && w(!0), k && k(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: n } = e;
        const r = {
          as: "image",
          imageSrcSet: n.srcSet,
          imageSizes: n.sizes,
          crossOrigin: n.crossOrigin,
          referrerPolicy: n.referrerPolicy,
          ...y(n.fetchPriority),
        };
        return t && i.preload
          ? ((0, i.preload)(n.src, r), null)
          : o.default.createElement(
              a.default,
              null,
              o.default.createElement("link", {
                key: "__nimg-" + n.src + n.srcSet + n.sizes,
                rel: "preload",
                href: n.srcSet ? void 0 : n.src,
                ...r,
              })
            );
      }
      const g = (0, o.forwardRef)((e, t) => {
        const n = !(0, o.useContext)(l.RouterContext),
          r = (0, o.useContext)(c.ImageConfigContext),
          i = (0, o.useMemo)(() => {
            const e = f || r || u.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: a, onLoadingComplete: d } = e,
          y = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          y.current = a;
        }, [a]);
        const g = (0, o.useRef)(d);
        (0, o.useEffect)(() => {
          g.current = d;
        }, [d]);
        const [m, v] = (0, o.useState)(!1),
          [w, O] = (0, o.useState)(!1),
          { props: P, meta: k } = (0, s.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: m,
            showAltText: w,
          });
        return o.default.createElement(
          o.default.Fragment,
          null,
          o.default.createElement(h, {
            ...P,
            unoptimized: k.unoptimized,
            placeholder: k.placeholder,
            fill: k.fill,
            onLoadRef: y,
            onLoadingCompleteRef: g,
            setBlurComplete: v,
            setShowAltText: O,
            ref: t,
          }),
          k.priority
            ? o.default.createElement(b, { isAppRouter: n, imgAttributes: P })
            : null
        );
      });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    98829: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      n(70186);
      const r = n(14799),
        o = n(72422);
      function i(e) {
        return void 0 !== e.default;
      }
      new Map();
      function a(e) {
        return "undefined" === typeof e
          ? e
          : "number" === typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" === typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function s(e) {
        let {
          config: t,
          src: n,
          unoptimized: r,
          width: o,
          quality: i,
          sizes: a,
          loader: s,
        } = e;
        if (r) return { src: n, srcSet: void 0, sizes: void 0 };
        const { widths: u, kind: c } = (function (e, t, n) {
            let { deviceSizes: r, allSizes: o } = e;
            if (n) {
              const e = /(^|\s)(1?\d?\d)vw/g,
                t = [];
              for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
              if (t.length) {
                const e = 0.01 * Math.min(...t);
                return { widths: o.filter((t) => t >= r[0] * e), kind: "w" };
              }
              return { widths: o, kind: "w" };
            }
            return "number" !== typeof t
              ? { widths: r, kind: "w" }
              : {
                  widths: [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => o.find((t) => t >= e) || o[o.length - 1]
                      )
                    ),
                  ],
                  kind: "x",
                };
          })(t, o, a),
          l = u.length - 1;
        return {
          sizes: a || "w" !== c ? a : "100vw",
          srcSet: u
            .map(
              (e, r) =>
                s({ config: t, src: n, quality: i, width: e }) +
                " " +
                ("w" === c ? e : r + 1) +
                c
            )
            .join(", "),
          src: s({ config: t, src: n, quality: i, width: u[l] }),
        };
      }
      function u(e, t) {
        let {
          src: n,
          sizes: u,
          unoptimized: c = !1,
          priority: l = !1,
          loading: p,
          className: f,
          quality: d,
          width: y,
          height: h,
          fill: b = !1,
          style: g,
          onLoad: m,
          onLoadingComplete: v,
          placeholder: w = "empty",
          blurDataURL: O,
          fetchPriority: P,
          layout: k,
          objectFit: S,
          objectPosition: _,
          lazyBoundary: x,
          lazyRoot: E,
          ...j
        } = e;
        const {
          imgConf: A,
          showAltText: T,
          blurComplete: C,
          defaultLoader: I,
        } = t;
        let R,
          D = A || o.imageConfigDefault;
        if ("allSizes" in D) R = D;
        else {
          const e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
            t = D.deviceSizes.sort((e, t) => e - t);
          R = { ...D, allSizes: e, deviceSizes: t };
        }
        let M = j.loader || I;
        delete j.loader, delete j.srcSet;
        const L = "__next_img_default" in M;
        if (L) {
          if ("custom" === R.loader)
            throw new Error(
              'Image with src "' +
                n +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          const e = M;
          M = (t) => {
            const { config: n, ...r } = t;
            return e(r);
          };
        }
        if (k) {
          "fill" === k && (b = !0);
          const e = { responsive: "100vw", fill: "100vw" },
            t = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[k];
          t && (g = { ...g, ...t });
          const n = e[k];
          n && !u && (u = n);
        }
        let N,
          U,
          z = "",
          F = a(y),
          H = a(h);
        if (
          (function (e) {
            return (
              "object" === typeof e &&
              (i(e) ||
                (function (e) {
                  return void 0 !== e.src;
                })(e))
            );
          })(n)
        ) {
          const e = i(n) ? n.default : n;
          if (!e.src)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((N = e.blurWidth),
            (U = e.blurHeight),
            (O = O || e.blurDataURL),
            (z = e.src),
            !b)
          )
            if (F || H) {
              if (F && !H) {
                const t = F / e.width;
                H = Math.round(e.height * t);
              } else if (!F && H) {
                const t = H / e.height;
                F = Math.round(e.width * t);
              }
            } else (F = e.width), (H = e.height);
        }
        n = "string" === typeof n ? n : z;
        let $ = !l && ("lazy" === p || "undefined" === typeof p);
        (!n || n.startsWith("data:") || n.startsWith("blob:")) &&
          ((c = !0), ($ = !1)),
          R.unoptimized && (c = !0),
          L && n.endsWith(".svg") && !R.dangerouslyAllowSVG && (c = !0),
          l && (P = "high");
        const B = a(d);
        const q = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: S,
                  objectPosition: _,
                }
              : {},
            T ? {} : { color: "transparent" },
            g
          ),
          V =
            C || "empty" === w
              ? null
              : "blur" === w
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: F,
                  heightInt: H,
                  blurWidth: N,
                  blurHeight: U,
                  blurDataURL: O || "",
                  objectFit: q.objectFit,
                }) +
                '")'
              : 'url("' + w + '")';
        let W = V
          ? {
              backgroundSize: q.objectFit || "cover",
              backgroundPosition: q.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: V,
            }
          : {};
        const Z = s({
          config: R,
          src: n,
          unoptimized: c,
          width: F,
          quality: B,
          sizes: u,
          loader: M,
        });
        return {
          props: {
            ...j,
            loading: $ ? "lazy" : p,
            fetchPriority: P,
            width: F,
            height: H,
            decoding: "async",
            className: f,
            style: { ...q, ...W },
            sizes: Z.sizes,
            srcSet: Z.srcSet,
            src: Z.src,
          },
          meta: { unoptimized: c, priority: l, placeholder: w, fill: b },
        };
      }
    },
    14799: function (e, t) {
      "use strict";
      function n(e) {
        let {
          widthInt: t,
          heightInt: n,
          blurWidth: r,
          blurHeight: o,
          blurDataURL: i,
          objectFit: a,
        } = e;
        const s = r ? 40 * r : t,
          u = o ? 40 * o : n,
          c = s && u ? "viewBox='0 0 " + s + " " + u + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          c +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (c
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    7169: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return c;
          },
          unstable_getImgProps: function () {
            return u;
          },
        });
      const r = n(43219),
        o = n(98829),
        i = n(70186),
        a = n(87732),
        s = r._(n(65381)),
        u = (e) => {
          (0, i.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          const { props: t } = (0, o.getImgProps)(e, {
            defaultLoader: s.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (const [n, r] of Object.entries(t)) void 0 === r && delete t[n];
          return { props: t };
        },
        c = a.Image;
    },
    65381: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: r, quality: o } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          r +
          "&q=" +
          (o || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      const r = n;
    },
    38398: function (e, t, n) {
      !(function () {
        var t = {
            452: function (e) {
              "use strict";
              e.exports = n(50176);
            },
          },
          r = {};
        function o(e) {
          var n = r[e];
          if (void 0 !== n) return n.exports;
          var i = (r[e] = { exports: {} }),
            a = !0;
          try {
            t[e](i, i.exports, o), (a = !1);
          } finally {
            a && delete r[e];
          }
          return i.exports;
        }
        o.ab = "//";
        var i = {};
        !(function () {
          var e,
            t = i,
            n =
              (e = o(452)) && "object" == typeof e && "default" in e
                ? e.default
                : e,
            r = /https?|ftp|gopher|file/;
          function a(e) {
            "string" == typeof e && (e = v(e));
            var t = (function (e, t, n) {
              var r = e.auth,
                o = e.hostname,
                i = e.protocol || "",
                a = e.pathname || "",
                s = e.hash || "",
                u = e.query || "",
                c = !1;
              (r = r ? encodeURIComponent(r).replace(/%3A/i, ":") + "@" : ""),
                e.host
                  ? (c = r + e.host)
                  : o &&
                    ((c = r + (~o.indexOf(":") ? "[" + o + "]" : o)),
                    e.port && (c += ":" + e.port)),
                u && "object" == typeof u && (u = t.encode(u));
              var l = e.search || (u && "?" + u) || "";
              return (
                i && ":" !== i.substr(-1) && (i += ":"),
                e.slashes || ((!i || n.test(i)) && !1 !== c)
                  ? ((c = "//" + (c || "")), a && "/" !== a[0] && (a = "/" + a))
                  : c || (c = ""),
                s && "#" !== s[0] && (s = "#" + s),
                l && "?" !== l[0] && (l = "?" + l),
                {
                  protocol: i,
                  host: c,
                  pathname: (a = a.replace(/[?#]/g, encodeURIComponent)),
                  search: (l = l.replace("#", "%23")),
                  hash: s,
                }
              );
            })(e, n, r);
            return "" + t.protocol + t.host + t.pathname + t.search + t.hash;
          }
          var s = "http://",
            u = "w.w",
            c = s + u,
            l = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
            p = /https?|ftp|gopher|file/;
          function f(e, t) {
            var n = "string" == typeof e ? v(e) : e;
            e = "object" == typeof e ? a(e) : e;
            var r = v(t),
              o = "";
            n.protocol &&
              !n.slashes &&
              ((o = n.protocol),
              (e = e.replace(n.protocol, "")),
              (o += "/" === t[0] || "/" === e[0] ? "/" : "")),
              o &&
                r.protocol &&
                ((o = ""),
                r.slashes ||
                  ((o = r.protocol), (t = t.replace(r.protocol, ""))));
            var i = e.match(l);
            i &&
              !r.protocol &&
              ((e = e.substr((o = i[1] + (i[2] || "")).length)),
              /^\/\/[^/]/.test(t) && (o = o.slice(0, -1)));
            var u = new URL(e, c + "/"),
              f = new URL(t, u).toString().replace(c, ""),
              d = r.protocol || n.protocol;
            return (
              (d += n.slashes || r.slashes ? "//" : ""),
              !o && d ? (f = f.replace(s, d)) : o && (f = f.replace(s, "")),
              p.test(f) ||
                ~t.indexOf(".") ||
                "/" === e.slice(-1) ||
                "/" === t.slice(-1) ||
                "/" !== f.slice(-1) ||
                (f = f.slice(0, -1)),
              o && (f = o + ("/" === f[0] ? f.substr(1) : f)),
              f
            );
          }
          function d() {}
          (d.prototype.parse = v),
            (d.prototype.format = a),
            (d.prototype.resolve = f),
            (d.prototype.resolveObject = f);
          var y = /^https?|ftp|gopher|file/,
            h = /^(.*?)([#?].*)/,
            b = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
            g = /^([a-z0-9.+-]*:)?\/\/\/*/i,
            m = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
          function v(e, t, r) {
            if (
              (void 0 === t && (t = !1),
              void 0 === r && (r = !1),
              e && "object" == typeof e && e instanceof d)
            )
              return e;
            var o = (e = e.trim()).match(h);
            (e = o ? o[1].replace(/\\/g, "/") + o[2] : e.replace(/\\/g, "/")),
              m.test(e) && "/" !== e.slice(-1) && (e += "/");
            var i = !/(^javascript)/.test(e) && e.match(b),
              s = g.test(e),
              l = "";
            i &&
              (y.test(i[1]) ||
                ((l = i[1].toLowerCase()), (e = "" + i[2] + i[3])),
              i[2] ||
                ((s = !1),
                y.test(i[1])
                  ? ((l = i[1]), (e = "" + i[3]))
                  : (e = "//" + i[3])),
              (3 !== i[2].length && 1 !== i[2].length) ||
                ((l = i[1]), (e = "/" + i[3])));
            var p,
              f = (o ? o[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
              v = f && f[1],
              w = new d(),
              O = "",
              P = "";
            try {
              p = new URL(e);
            } catch (t) {
              (O = t),
                l ||
                  r ||
                  !/^\/\//.test(e) ||
                  /^\/\/.+[@.]/.test(e) ||
                  ((P = "/"), (e = e.substr(1)));
              try {
                p = new URL(e, c);
              } catch (e) {
                return (w.protocol = l), (w.href = l), w;
              }
            }
            (w.slashes = s && !P),
              (w.host = p.host === u ? "" : p.host),
              (w.hostname =
                p.hostname === u ? "" : p.hostname.replace(/(\[|\])/g, "")),
              (w.protocol = O ? l || null : p.protocol),
              (w.search = p.search.replace(/\\/g, "%5C")),
              (w.hash = p.hash.replace(/\\/g, "%5C"));
            var k = e.split("#");
            !w.search && ~k[0].indexOf("?") && (w.search = "?"),
              w.hash || "" !== k[1] || (w.hash = "#"),
              (w.query = t ? n.decode(p.search.substr(1)) : w.search.substr(1)),
              (w.pathname =
                P +
                (i
                  ? (function (e) {
                      return e
                        .replace(/['^|`]/g, function (e) {
                          return (
                            "%" + e.charCodeAt().toString(16).toUpperCase()
                          );
                        })
                        .replace(/((?:%[0-9A-F]{2})+)/g, function (e, t) {
                          try {
                            return decodeURIComponent(t)
                              .split("")
                              .map(function (e) {
                                var t = e.charCodeAt();
                                return t > 256 || /^[a-z0-9]$/i.test(e)
                                  ? e
                                  : "%" + t.toString(16).toUpperCase();
                              })
                              .join("");
                          } catch (e) {
                            return t;
                          }
                        });
                    })(p.pathname)
                  : p.pathname)),
              "about:" === w.protocol &&
                "blank" === w.pathname &&
                ((w.protocol = ""), (w.pathname = "")),
              O && "/" !== e[0] && (w.pathname = w.pathname.substr(1)),
              l &&
                !y.test(l) &&
                "/" !== e.slice(-1) &&
                "/" === w.pathname &&
                (w.pathname = ""),
              (w.path = w.pathname + w.search),
              (w.auth = [p.username, p.password]
                .map(decodeURIComponent)
                .filter(Boolean)
                .join(":")),
              (w.port = p.port),
              v &&
                !w.host.endsWith(v) &&
                ((w.host += v), (w.port = v.slice(1))),
              (w.href = P ? "" + w.pathname + w.search + w.hash : a(w));
            var S = /^(file)/.test(w.href) ? ["host", "hostname"] : [];
            return (
              Object.keys(w).forEach(function (e) {
                ~S.indexOf(e) || (w[e] = w[e] || null);
              }),
              w
            );
          }
          (t.parse = v),
            (t.format = a),
            (t.resolve = f),
            (t.resolveObject = function (e, t) {
              return v(f(e, t));
            }),
            (t.Url = d);
        })(),
          (e.exports = i);
      })();
    },
    50176: function (e) {
      !(function () {
        "use strict";
        var t = {
            815: function (e) {
              function t(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }
              e.exports = function (e, r, o, i) {
                (r = r || "&"), (o = o || "=");
                var a = {};
                if ("string" !== typeof e || 0 === e.length) return a;
                var s = /\+/g;
                e = e.split(r);
                var u = 1e3;
                i && "number" === typeof i.maxKeys && (u = i.maxKeys);
                var c = e.length;
                u > 0 && c > u && (c = u);
                for (var l = 0; l < c; ++l) {
                  var p,
                    f,
                    d,
                    y,
                    h = e[l].replace(s, "%20"),
                    b = h.indexOf(o);
                  b >= 0
                    ? ((p = h.substr(0, b)), (f = h.substr(b + 1)))
                    : ((p = h), (f = "")),
                    (d = decodeURIComponent(p)),
                    (y = decodeURIComponent(f)),
                    t(a, d)
                      ? n(a[d])
                        ? a[d].push(y)
                        : (a[d] = [a[d], y])
                      : (a[d] = y);
                }
                return a;
              };
              var n =
                Array.isArray ||
                function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                };
            },
            577: function (e) {
              var t = function (e) {
                switch (typeof e) {
                  case "string":
                    return e;
                  case "boolean":
                    return e ? "true" : "false";
                  case "number":
                    return isFinite(e) ? e : "";
                  default:
                    return "";
                }
              };
              e.exports = function (e, i, a, s) {
                return (
                  (i = i || "&"),
                  (a = a || "="),
                  null === e && (e = void 0),
                  "object" === typeof e
                    ? r(o(e), function (o) {
                        var s = encodeURIComponent(t(o)) + a;
                        return n(e[o])
                          ? r(e[o], function (e) {
                              return s + encodeURIComponent(t(e));
                            }).join(i)
                          : s + encodeURIComponent(t(e[o]));
                      }).join(i)
                    : s
                    ? encodeURIComponent(t(s)) + a + encodeURIComponent(t(e))
                    : ""
                );
              };
              var n =
                Array.isArray ||
                function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                };
              function r(e, t) {
                if (e.map) return e.map(t);
                for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
                return n;
              }
              var o =
                Object.keys ||
                function (e) {
                  var t = [];
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                  return t;
                };
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var i = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](i, i.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return i.exports;
        }
        r.ab = "//";
        var o = {};
        !(function () {
          var e = o;
          (e.decode = e.parse = r(815)), (e.encode = e.stringify = r(577));
        })(),
          (e.exports = o);
      })();
    },
    96577: function (e, t, n) {
      e.exports = n(7169);
    },
    68108: function (e) {
      "use strict";
      var t;
      e.exports = function (e) {
        var n,
          r = "&" + e + ";";
        if (
          (((t = t || document.createElement("i")).innerHTML = r),
          59 === (n = t.textContent).charCodeAt(n.length - 1) && "semi" !== e)
        )
          return !1;
        return n !== r && n;
      };
    },
    18309: function (e, t, n) {
      "use strict";
      var r = n(93562),
        o = n(71216),
        i = n(61278),
        a = n(48833),
        s = n(65279),
        u = n(68108);
      e.exports = function (e, t) {
        var n,
          i,
          a = {};
        t || (t = {});
        for (i in f) (n = t[i]), (a[i] = null === n || void 0 === n ? f[i] : n);
        (a.position.indent || a.position.start) &&
          ((a.indent = a.position.indent || []),
          (a.position = a.position.start));
        return (function (e, t) {
          var n,
            i,
            a,
            f,
            O,
            P,
            k,
            S,
            _,
            x,
            E,
            j,
            A,
            T,
            C,
            I,
            R,
            D,
            M,
            L = t.additional,
            N = t.nonTerminated,
            U = t.text,
            z = t.reference,
            F = t.warning,
            H = t.textContext,
            $ = t.referenceContext,
            B = t.warningContext,
            q = t.position,
            V = t.indent || [],
            W = e.length,
            Z = 0,
            G = -1,
            K = q.column || 1,
            X = q.line || 1,
            Y = "",
            J = [];
          "string" === typeof L && (L = L.charCodeAt(0));
          (I = Q()), (S = F ? ee : p), Z--, W++;
          for (; ++Z < W; )
            if ((10 === O && (K = V[G] || 1), 38 === (O = e.charCodeAt(Z)))) {
              if (
                9 === (k = e.charCodeAt(Z + 1)) ||
                10 === k ||
                12 === k ||
                32 === k ||
                38 === k ||
                60 === k ||
                k !== k ||
                (L && k === L)
              ) {
                (Y += l(O)), K++;
                continue;
              }
              for (
                j = A = Z + 1,
                  M = A,
                  35 === k
                    ? ((M = ++j),
                      88 === (k = e.charCodeAt(M)) || 120 === k
                        ? ((T = y), (M = ++j))
                        : (T = h))
                    : (T = d),
                  n = "",
                  E = "",
                  f = "",
                  C = g[T],
                  M--;
                ++M < W && C((k = e.charCodeAt(M)));

              )
                (f += l(k)), T === d && c.call(r, f) && ((n = f), (E = r[f]));
              (a = 59 === e.charCodeAt(M)) &&
                (M++, (i = T === d && u(f)) && ((n = f), (E = i))),
                (D = 1 + M - A),
                (a || N) &&
                  (f
                    ? T === d
                      ? (a && !E
                          ? S(5, 1)
                          : (n !== f &&
                              ((D = 1 + (M = j + n.length) - j), (a = !1)),
                            a ||
                              ((_ = n ? 1 : 3),
                              t.attribute
                                ? 61 === (k = e.charCodeAt(M))
                                  ? (S(_, D), (E = null))
                                  : s(k)
                                  ? (E = null)
                                  : S(_, D)
                                : S(_, D))),
                        (P = E))
                      : (a || S(2, D),
                        v((P = parseInt(f, b[T])))
                          ? (S(7, D), (P = l(65533)))
                          : P in o
                          ? (S(6, D), (P = o[P]))
                          : ((x = ""),
                            w(P) && S(6, D),
                            P > 65535 &&
                              ((x += l(((P -= 65536) >>> 10) | 55296)),
                              (P = 56320 | (1023 & P))),
                            (P = x + l(P))))
                    : T !== d && S(4, D)),
                P
                  ? (te(),
                    (I = Q()),
                    (Z = M - 1),
                    (K += M - A + 1),
                    J.push(P),
                    (R = Q()).offset++,
                    z && z.call($, P, { start: I, end: R }, e.slice(A - 1, M)),
                    (I = R))
                  : ((f = e.slice(A - 1, M)),
                    (Y += f),
                    (K += f.length),
                    (Z = M - 1));
            } else
              10 === O && (X++, G++, (K = 0)),
                O === O ? ((Y += l(O)), K++) : te();
          return J.join("");
          function Q() {
            return { line: X, column: K, offset: Z + (q.offset || 0) };
          }
          function ee(e, t) {
            var n = Q();
            (n.column += t), (n.offset += t), F.call(B, m[e], n, e);
          }
          function te() {
            Y &&
              (J.push(Y), U && U.call(H, Y, { start: I, end: Q() }), (Y = ""));
          }
        })(e, a);
      };
      var c = {}.hasOwnProperty,
        l = String.fromCharCode,
        p = Function.prototype,
        f = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        d = "named",
        y = "hexadecimal",
        h = "decimal",
        b = { hexadecimal: 16, decimal: 10 },
        g = {};
      (g.named = s), (g[h] = i), (g[y] = a);
      var m = {};
      function v(e) {
        return (e >= 55296 && e <= 57343) || e > 1114111;
      }
      function w(e) {
        return (
          (e >= 1 && e <= 8) ||
          11 === e ||
          (e >= 13 && e <= 31) ||
          (e >= 127 && e <= 159) ||
          (e >= 64976 && e <= 65007) ||
          65535 === (65535 & e) ||
          65534 === (65535 & e)
        );
      }
      (m[1] = "Named character references must be terminated by a semicolon"),
        (m[2] =
          "Numeric character references must be terminated by a semicolon"),
        (m[3] = "Named character references cannot be empty"),
        (m[4] = "Numeric character references cannot be empty"),
        (m[5] = "Named character references must be known"),
        (m[6] = "Numeric character references cannot be disallowed"),
        (m[7] =
          "Numeric character references cannot be outside the permissible Unicode range");
    },
    44655: function (e) {
      var t = function (e) {
        return e.replace(/^\s+|\s+$/g, "");
      };
      e.exports = function (e) {
        if (!e) return {};
        for (var n, r = {}, o = t(e).split("\n"), i = 0; i < o.length; i++) {
          var a = o[i],
            s = a.indexOf(":"),
            u = t(a.slice(0, s)).toLowerCase(),
            c = t(a.slice(s + 1));
          "undefined" === typeof r[u]
            ? (r[u] = c)
            : ((n = r[u]),
              "[object Array]" === Object.prototype.toString.call(n)
                ? r[u].push(c)
                : (r[u] = [r[u], c]));
        }
        return r;
      };
    },
    68262: function (e, t, n) {
      "use strict";
      var r = n(23586);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, a) {
            if (a !== r) {
              var s = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    13980: function (e, t, n) {
      e.exports = n(68262)();
    },
    23586: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    70521: function (e, t, n) {
      "use strict";
      var r = n(2939),
        o = n(54688),
        i = n(9975),
        a = "data";
      e.exports = function (e, t) {
        var n = r(t),
          f = t,
          d = i;
        if (n in e.normal) return e.property[e.normal[n]];
        n.length > 4 &&
          n.slice(0, 4) === a &&
          s.test(t) &&
          ("-" === t.charAt(4)
            ? (f = (function (e) {
                var t = e.slice(5).replace(u, p);
                return a + t.charAt(0).toUpperCase() + t.slice(1);
              })(t))
            : (t = (function (e) {
                var t = e.slice(4);
                if (u.test(t)) return e;
                "-" !== (t = t.replace(c, l)).charAt(0) && (t = "-" + t);
                return a + t;
              })(t)),
          (d = o));
        return new d(f, t);
      };
      var s = /^data[-\w.:]+$/i,
        u = /-[a-z]/g,
        c = /[A-Z]/g;
      function l(e) {
        return "-" + e.toLowerCase();
      }
      function p(e) {
        return e.charAt(1).toUpperCase();
      }
    },
    59209: function (e, t, n) {
      "use strict";
      var r = n(2706),
        o = n(62322),
        i = n(13837),
        a = n(45367),
        s = n(12024),
        u = n(61921);
      e.exports = r([i, o, a, s, u]);
    },
    12024: function (e, t, n) {
      "use strict";
      var r = n(87311),
        o = n(96486),
        i = r.booleanish,
        a = r.number,
        s = r.spaceSeparated;
      e.exports = o({
        transform: function (e, t) {
          return "role" === t ? t : "aria-" + t.slice(4).toLowerCase();
        },
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: i,
          ariaAutoComplete: null,
          ariaBusy: i,
          ariaChecked: i,
          ariaColCount: a,
          ariaColIndex: a,
          ariaColSpan: a,
          ariaControls: s,
          ariaCurrent: null,
          ariaDescribedBy: s,
          ariaDetails: null,
          ariaDisabled: i,
          ariaDropEffect: s,
          ariaErrorMessage: null,
          ariaExpanded: i,
          ariaFlowTo: s,
          ariaGrabbed: i,
          ariaHasPopup: null,
          ariaHidden: i,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: s,
          ariaLevel: a,
          ariaLive: null,
          ariaModal: i,
          ariaMultiLine: i,
          ariaMultiSelectable: i,
          ariaOrientation: null,
          ariaOwns: s,
          ariaPlaceholder: null,
          ariaPosInSet: a,
          ariaPressed: i,
          ariaReadOnly: i,
          ariaRelevant: null,
          ariaRequired: i,
          ariaRoleDescription: s,
          ariaRowCount: a,
          ariaRowIndex: a,
          ariaRowSpan: a,
          ariaSelected: i,
          ariaSetSize: a,
          ariaSort: null,
          ariaValueMax: a,
          ariaValueMin: a,
          ariaValueNow: a,
          ariaValueText: null,
          role: null,
        },
      });
    },
    61921: function (e, t, n) {
      "use strict";
      var r = n(87311),
        o = n(96486),
        i = n(12660),
        a = r.boolean,
        s = r.overloadedBoolean,
        u = r.booleanish,
        c = r.number,
        l = r.spaceSeparated,
        p = r.commaSeparated;
      e.exports = o({
        space: "html",
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv",
        },
        transform: i,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: p,
          acceptCharset: l,
          accessKey: l,
          action: null,
          allow: null,
          allowFullScreen: a,
          allowPaymentRequest: a,
          allowUserMedia: a,
          alt: null,
          as: null,
          async: a,
          autoCapitalize: null,
          autoComplete: l,
          autoFocus: a,
          autoPlay: a,
          capture: a,
          charSet: null,
          checked: a,
          cite: null,
          className: l,
          cols: c,
          colSpan: null,
          content: null,
          contentEditable: u,
          controls: a,
          controlsList: l,
          coords: c | p,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: a,
          defer: a,
          dir: null,
          dirName: null,
          disabled: a,
          download: s,
          draggable: u,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: a,
          formTarget: null,
          headers: l,
          height: c,
          hidden: a,
          high: c,
          href: null,
          hrefLang: null,
          htmlFor: l,
          httpEquiv: l,
          id: null,
          imageSizes: null,
          imageSrcSet: p,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: a,
          itemId: null,
          itemProp: l,
          itemRef: l,
          itemScope: a,
          itemType: l,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: a,
          low: c,
          manifest: null,
          max: null,
          maxLength: c,
          media: null,
          method: null,
          min: null,
          minLength: c,
          multiple: a,
          muted: a,
          name: null,
          nonce: null,
          noModule: a,
          noValidate: a,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: a,
          optimum: c,
          pattern: null,
          ping: l,
          placeholder: null,
          playsInline: a,
          poster: null,
          preload: null,
          readOnly: a,
          referrerPolicy: null,
          rel: l,
          required: a,
          reversed: a,
          rows: c,
          rowSpan: c,
          sandbox: l,
          scope: null,
          scoped: a,
          seamless: a,
          selected: a,
          shape: null,
          size: c,
          sizes: null,
          slot: null,
          span: c,
          spellCheck: u,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: p,
          start: c,
          step: null,
          style: null,
          tabIndex: c,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: a,
          useMap: null,
          value: u,
          width: c,
          wrap: null,
          align: null,
          aLink: null,
          archive: l,
          axis: null,
          background: null,
          bgColor: null,
          border: c,
          borderColor: null,
          bottomMargin: c,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: a,
          declare: a,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: c,
          leftMargin: c,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: c,
          marginWidth: c,
          noResize: a,
          noHref: a,
          noShade: a,
          noWrap: a,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: c,
          rules: null,
          scheme: null,
          scrolling: u,
          standby: null,
          summary: null,
          text: null,
          topMargin: c,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: c,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: a,
          disableRemotePlayback: a,
          prefix: null,
          property: null,
          results: c,
          security: null,
          unselectable: null,
        },
      });
    },
    12660: function (e, t, n) {
      "use strict";
      var r = n(72003);
      e.exports = function (e, t) {
        return r(e, t.toLowerCase());
      };
    },
    72003: function (e) {
      "use strict";
      e.exports = function (e, t) {
        return t in e ? e[t] : t;
      };
    },
    96486: function (e, t, n) {
      "use strict";
      var r = n(2939),
        o = n(74362),
        i = n(54688);
      e.exports = function (e) {
        var t,
          n,
          a = e.space,
          s = e.mustUseProperty || [],
          u = e.attributes || {},
          c = e.properties,
          l = e.transform,
          p = {},
          f = {};
        for (t in c)
          (n = new i(t, l(u, t), c[t], a)),
            -1 !== s.indexOf(t) && (n.mustUseProperty = !0),
            (p[t] = n),
            (f[r(t)] = t),
            (f[r(n.attribute)] = t);
        return new o(p, f, a);
      };
    },
    54688: function (e, t, n) {
      "use strict";
      var r = n(9975),
        o = n(87311);
      (e.exports = s), (s.prototype = new r()), (s.prototype.defined = !0);
      var i = [
          "boolean",
          "booleanish",
          "overloadedBoolean",
          "number",
          "commaSeparated",
          "spaceSeparated",
          "commaOrSpaceSeparated",
        ],
        a = i.length;
      function s(e, t, n, s) {
        var c,
          l = -1;
        for (u(this, "space", s), r.call(this, e, t); ++l < a; )
          u(this, (c = i[l]), (n & o[c]) === o[c]);
      }
      function u(e, t, n) {
        n && (e[t] = n);
      }
    },
    9975: function (e) {
      "use strict";
      e.exports = n;
      var t = n.prototype;
      function n(e, t) {
        (this.property = e), (this.attribute = t);
      }
      (t.space = null),
        (t.attribute = null),
        (t.property = null),
        (t.boolean = !1),
        (t.booleanish = !1),
        (t.overloadedBoolean = !1),
        (t.number = !1),
        (t.commaSeparated = !1),
        (t.spaceSeparated = !1),
        (t.commaOrSpaceSeparated = !1),
        (t.mustUseProperty = !1),
        (t.defined = !1);
    },
    2706: function (e, t, n) {
      "use strict";
      var r = n(51960),
        o = n(74362);
      e.exports = function (e) {
        var t,
          n,
          i = e.length,
          a = [],
          s = [],
          u = -1;
        for (; ++u < i; )
          (t = e[u]), a.push(t.property), s.push(t.normal), (n = t.space);
        return new o(r.apply(null, a), r.apply(null, s), n);
      };
    },
    74362: function (e) {
      "use strict";
      e.exports = n;
      var t = n.prototype;
      function n(e, t, n) {
        (this.property = e), (this.normal = t), n && (this.space = n);
      }
      (t.space = null), (t.normal = {}), (t.property = {});
    },
    87311: function (e, t) {
      "use strict";
      var n = 0;
      function r() {
        return Math.pow(2, ++n);
      }
      (t.boolean = r()),
        (t.booleanish = r()),
        (t.overloadedBoolean = r()),
        (t.number = r()),
        (t.spaceSeparated = r()),
        (t.commaSeparated = r()),
        (t.commaOrSpaceSeparated = r());
    },
    62322: function (e, t, n) {
      "use strict";
      var r = n(96486);
      e.exports = r({
        space: "xlink",
        transform: function (e, t) {
          return "xlink:" + t.slice(5).toLowerCase();
        },
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
    },
    13837: function (e, t, n) {
      "use strict";
      var r = n(96486);
      e.exports = r({
        space: "xml",
        transform: function (e, t) {
          return "xml:" + t.slice(3).toLowerCase();
        },
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
      });
    },
    45367: function (e, t, n) {
      "use strict";
      var r = n(96486),
        o = n(12660);
      e.exports = r({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: o,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
    2939: function (e) {
      "use strict";
      e.exports = function (e) {
        return e.toLowerCase();
      };
    },
    97375: function (e, t) {
      "use strict";
      var n = Object.prototype.hasOwnProperty;
      function r(e) {
        try {
          return decodeURIComponent(e.replace(/\+/g, " "));
        } catch (t) {
          return null;
        }
      }
      function o(e) {
        try {
          return encodeURIComponent(e);
        } catch (t) {
          return null;
        }
      }
      (t.stringify = function (e, t) {
        t = t || "";
        var r,
          i,
          a = [];
        for (i in ("string" !== typeof t && (t = "?"), e))
          if (n.call(e, i)) {
            if (
              ((r = e[i]) ||
                (null !== r && undefined !== r && !isNaN(r)) ||
                (r = ""),
              (i = o(i)),
              (r = o(r)),
              null === i || null === r)
            )
              continue;
            a.push(i + "=" + r);
          }
        return a.length ? t + a.join("&") : "";
      }),
        (t.parse = function (e) {
          for (var t, n = /([^=?#&]+)=?([^&]*)/g, o = {}; (t = n.exec(e)); ) {
            var i = r(t[1]),
              a = r(t[2]);
            null === i || null === a || i in o || (o[i] = a);
          }
          return o;
        });
    },
    66582: function (e, t, n) {
      "use strict";
      var r,
        o = n(2784),
        i = (r = o) && "object" === typeof r && "default" in r ? r.default : r,
        a = n(2897),
        s = new a(),
        u = s.getBrowser(),
        c = s.getCPU(),
        l = s.getDevice(),
        p = s.getEngine(),
        f = s.getOS(),
        d = s.getUA(),
        y = function (e) {
          return s.setUA(e);
        },
        h = function (e) {
          if (e) {
            var t = new a(e);
            return {
              UA: t,
              browser: t.getBrowser(),
              cpu: t.getCPU(),
              device: t.getDevice(),
              engine: t.getEngine(),
              os: t.getOS(),
              ua: t.getUA(),
              setUserAgent: function (e) {
                return t.setUA(e);
              },
            };
          }
          console.error("No userAgent string was provided");
        },
        b = Object.freeze({
          ClientUAInstance: s,
          browser: u,
          cpu: c,
          device: l,
          engine: p,
          os: f,
          ua: d,
          setUa: y,
          parseUserAgent: h,
        });
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        return (
          (m =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          m(e)
        );
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function w(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function O() {
        return (
          (O =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          O.apply(this, arguments)
        );
      }
      function P(e) {
        return (
          (P = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          P(e)
        );
      }
      function k(e, t) {
        return (
          (k =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          k(e, t)
        );
      }
      function S(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function _(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function x(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var r,
              o,
              i = [],
              a = !0,
              s = !1;
            try {
              for (
                n = n.call(e);
                !(a = (r = n.next()).done) &&
                (i.push(r.value), !t || i.length !== t);
                a = !0
              );
            } catch (u) {
              (s = !0), (o = u);
            } finally {
              try {
                a || null == n.return || n.return();
              } finally {
                if (s) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return E(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return E(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var j = "mobile",
        A = "tablet",
        T = "smarttv",
        C = "console",
        I = "wearable",
        R = "embedded",
        D = void 0,
        M = {
          Chrome: "Chrome",
          Firefox: "Firefox",
          Opera: "Opera",
          Yandex: "Yandex",
          Safari: "Safari",
          InternetExplorer: "Internet Explorer",
          Edge: "Edge",
          Chromium: "Chromium",
          Ie: "IE",
          MobileSafari: "Mobile Safari",
          EdgeChromium: "Edge Chromium",
          MIUI: "MIUI Browser",
          SamsungBrowser: "Samsung Browser",
        },
        L = {
          IOS: "iOS",
          Android: "Android",
          WindowsPhone: "Windows Phone",
          Windows: "Windows",
          MAC_OS: "Mac OS",
        },
        N = {
          isMobile: !1,
          isTablet: !1,
          isBrowser: !1,
          isSmartTV: !1,
          isConsole: !1,
          isWearable: !1,
        },
        U = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "none";
          return e || t;
        },
        z = function () {
          return (
            !(
              "undefined" === typeof window ||
              (!window.navigator && !navigator)
            ) &&
            (window.navigator || navigator)
          );
        },
        F = function (e) {
          var t = z();
          return (
            t &&
            t.platform &&
            (-1 !== t.platform.indexOf(e) ||
              ("MacIntel" === t.platform &&
                t.maxTouchPoints > 1 &&
                !window.MSStream))
          );
        },
        H = function (e, t, n, r) {
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? g(Object(n), !0).forEach(function (t) {
                    w(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : g(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })({}, e, {
            vendor: U(t.vendor),
            model: U(t.model),
            os: U(n.name),
            osVersion: U(n.version),
            ua: U(r),
          });
        };
      var $ = function (e) {
          return e.type === j;
        },
        B = function (e) {
          return e.type === A;
        },
        q = function (e) {
          var t = e.type;
          return t === j || t === A;
        },
        V = function (e) {
          return e.type === T;
        },
        W = function (e) {
          return e.type === D;
        },
        Z = function (e) {
          return e.type === I;
        },
        G = function (e) {
          return e.type === C;
        },
        K = function (e) {
          return e.type === R;
        },
        X = function (e) {
          var t = e.vendor;
          return U(t);
        },
        Y = function (e) {
          var t = e.model;
          return U(t);
        },
        J = function (e) {
          var t = e.type;
          return U(t, "browser");
        },
        Q = function (e) {
          return e.name === L.Android;
        },
        ee = function (e) {
          return e.name === L.Windows;
        },
        te = function (e) {
          return e.name === L.MAC_OS;
        },
        ne = function (e) {
          return e.name === L.WindowsPhone;
        },
        re = function (e) {
          return e.name === L.IOS;
        },
        oe = function (e) {
          var t = e.version;
          return U(t);
        },
        ie = function (e) {
          var t = e.name;
          return U(t);
        },
        ae = function (e) {
          return e.name === M.Chrome;
        },
        se = function (e) {
          return e.name === M.Firefox;
        },
        ue = function (e) {
          return e.name === M.Chromium;
        },
        ce = function (e) {
          return e.name === M.Edge;
        },
        le = function (e) {
          return e.name === M.Yandex;
        },
        pe = function (e) {
          var t = e.name;
          return t === M.Safari || t === M.MobileSafari;
        },
        fe = function (e) {
          return e.name === M.MobileSafari;
        },
        de = function (e) {
          return e.name === M.Opera;
        },
        ye = function (e) {
          var t = e.name;
          return t === M.InternetExplorer || t === M.Ie;
        },
        he = function (e) {
          return e.name === M.MIUI;
        },
        be = function (e) {
          return e.name === M.SamsungBrowser;
        },
        ge = function (e) {
          var t = e.version;
          return U(t);
        },
        me = function (e) {
          var t = e.major;
          return U(t);
        },
        ve = function (e) {
          var t = e.name;
          return U(t);
        },
        we = function (e) {
          var t = e.name;
          return U(t);
        },
        Oe = function (e) {
          var t = e.version;
          return U(t);
        },
        Pe = function () {
          var e = z(),
            t = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" === typeof t && /electron/.test(t);
        },
        ke = function (e) {
          return "string" === typeof e && -1 !== e.indexOf("Edg/");
        },
        Se = function () {
          var e = z();
          return (
            e &&
            (/iPad|iPhone|iPod/.test(e.platform) ||
              ("MacIntel" === e.platform && e.maxTouchPoints > 1)) &&
            !window.MSStream
          );
        },
        _e = function () {
          return F("iPad");
        },
        xe = function () {
          return F("iPhone");
        },
        Ee = function () {
          return F("iPod");
        },
        je = function (e) {
          return U(e);
        };
      function Ae(e) {
        var t = e || b,
          n = t.device,
          r = t.browser,
          o = t.os,
          i = t.engine,
          a = t.ua;
        return {
          isSmartTV: V(n),
          isConsole: G(n),
          isWearable: Z(n),
          isEmbedded: K(n),
          isMobileSafari: fe(r) || _e(),
          isChromium: ue(r),
          isMobile: q(n) || _e(),
          isMobileOnly: $(n),
          isTablet: B(n) || _e(),
          isBrowser: W(n),
          isDesktop: W(n),
          isAndroid: Q(o),
          isWinPhone: ne(o),
          isIOS: re(o) || _e(),
          isChrome: ae(r),
          isFirefox: se(r),
          isSafari: pe(r),
          isOpera: de(r),
          isIE: ye(r),
          osVersion: oe(o),
          osName: ie(o),
          fullBrowserVersion: ge(r),
          browserVersion: me(r),
          browserName: ve(r),
          mobileVendor: X(n),
          mobileModel: Y(n),
          engineName: we(i),
          engineVersion: Oe(i),
          getUA: je(a),
          isEdge: ce(r) || ke(a),
          isYandex: le(r),
          deviceType: J(n),
          isIOS13: Se(),
          isIPad13: _e(),
          isIPhone13: xe(),
          isIPod13: Ee(),
          isElectron: Pe(),
          isEdgeChromium: ke(a),
          isLegacyEdge: ce(r) && !ke(a),
          isWindows: ee(o),
          isMacOs: te(o),
          isMIUI: he(r),
          isSamsungBrowser: be(r),
        };
      }
      var Te = V(l),
        Ce = G(l),
        Ie = Z(l),
        Re = K(l),
        De = fe(u) || _e(),
        Me = ue(u),
        Le = q(l) || _e(),
        Ne = $(l),
        Ue = B(l) || _e(),
        ze = W(l),
        Fe = W(l),
        He = Q(f),
        $e = ne(f),
        Be = re(f) || _e(),
        qe = ae(u),
        Ve = se(u),
        We = pe(u),
        Ze = de(u),
        Ge = ye(u),
        Ke = oe(f),
        Xe = ie(f),
        Ye = ge(u),
        Je = me(u),
        Qe = ve(u),
        et = X(l),
        tt = Y(l),
        nt = we(p),
        rt = Oe(p),
        ot = je(d),
        it = ce(u) || ke(d),
        at = le(u),
        st = J(l),
        ut = Se(),
        ct = _e(),
        lt = xe(),
        pt = Ee(),
        ft = Pe(),
        dt = ke(d),
        yt = ce(u) && !ke(d),
        ht = ee(f),
        bt = te(f),
        gt = he(u),
        mt = be(u);
      function vt(e) {
        var t = e || window.navigator.userAgent;
        return h(t);
      }
      t.tq = Le;
    },
    78435: function (e) {
      var t = "undefined" !== typeof Element,
        n = "function" === typeof Map,
        r = "function" === typeof Set,
        o = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
      function i(e, a) {
        if (e === a) return !0;
        if (e && a && "object" == typeof e && "object" == typeof a) {
          if (e.constructor !== a.constructor) return !1;
          var s, u, c, l;
          if (Array.isArray(e)) {
            if ((s = e.length) != a.length) return !1;
            for (u = s; 0 !== u--; ) if (!i(e[u], a[u])) return !1;
            return !0;
          }
          if (n && e instanceof Map && a instanceof Map) {
            if (e.size !== a.size) return !1;
            for (l = e.entries(); !(u = l.next()).done; )
              if (!a.has(u.value[0])) return !1;
            for (l = e.entries(); !(u = l.next()).done; )
              if (!i(u.value[1], a.get(u.value[0]))) return !1;
            return !0;
          }
          if (r && e instanceof Set && a instanceof Set) {
            if (e.size !== a.size) return !1;
            for (l = e.entries(); !(u = l.next()).done; )
              if (!a.has(u.value[0])) return !1;
            return !0;
          }
          if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
            if ((s = e.length) != a.length) return !1;
            for (u = s; 0 !== u--; ) if (e[u] !== a[u]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === a.source && e.flags === a.flags;
          if (
            e.valueOf !== Object.prototype.valueOf &&
            "function" === typeof e.valueOf &&
            "function" === typeof a.valueOf
          )
            return e.valueOf() === a.valueOf();
          if (
            e.toString !== Object.prototype.toString &&
            "function" === typeof e.toString &&
            "function" === typeof a.toString
          )
            return e.toString() === a.toString();
          if ((s = (c = Object.keys(e)).length) !== Object.keys(a).length)
            return !1;
          for (u = s; 0 !== u--; )
            if (!Object.prototype.hasOwnProperty.call(a, c[u])) return !1;
          if (t && e instanceof Element) return !1;
          for (u = s; 0 !== u--; )
            if (
              (("_owner" !== c[u] && "__v" !== c[u] && "__o" !== c[u]) ||
                !e.$$typeof) &&
              !i(e[c[u]], a[c[u]])
            )
              return !1;
          return !0;
        }
        return e !== e && a !== a;
      }
      e.exports = function (e, t) {
        try {
          return i(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
    16403: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        a = (o = n(78435)) && o.__esModule ? o : { default: o },
        s = n(29090),
        u = n(77838);
      function c() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e, t) {
        return (
          (d =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          d(e, t)
        );
      }
      function y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = g(e);
          if (t) {
            var o = g(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return h(this, n);
        };
      }
      function h(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? b(e) : t;
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e) {
        return (
          (g = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          g(e)
        );
      }
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var v = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && d(e, t);
        })(s, e);
        var t,
          n,
          r,
          o = y(s);
        function s() {
          var e;
          p(this, s);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            m(b((e = o.call.apply(o, [this].concat(n)))), "mounted", !1),
            m(b(e), "isReady", !1),
            m(b(e), "isPlaying", !1),
            m(b(e), "isLoading", !0),
            m(b(e), "loadOnReady", null),
            m(b(e), "startOnPlay", !0),
            m(b(e), "seekOnPlay", null),
            m(b(e), "onDurationCalled", !1),
            m(b(e), "handlePlayerMount", function (t) {
              e.player ||
                ((e.player = t), e.player.load(e.props.url), e.progress());
            }),
            m(b(e), "getInternalPlayer", function (t) {
              return e.player ? e.player[t] : null;
            }),
            m(b(e), "progress", function () {
              if (e.props.url && e.player && e.isReady) {
                var t = e.getCurrentTime() || 0,
                  n = e.getSecondsLoaded(),
                  r = e.getDuration();
                if (r) {
                  var o = { playedSeconds: t, played: t / r };
                  null !== n && ((o.loadedSeconds = n), (o.loaded = n / r)),
                    (o.playedSeconds === e.prevPlayed &&
                      o.loadedSeconds === e.prevLoaded) ||
                      e.props.onProgress(o),
                    (e.prevPlayed = o.playedSeconds),
                    (e.prevLoaded = o.loadedSeconds);
                }
              }
              e.progressTimeout = setTimeout(
                e.progress,
                e.props.progressFrequency || e.props.progressInterval
              );
            }),
            m(b(e), "handleReady", function () {
              if (e.mounted) {
                (e.isReady = !0), (e.isLoading = !1);
                var t = e.props,
                  n = t.onReady,
                  r = t.playing,
                  o = t.volume,
                  i = t.muted;
                n(),
                  i || null === o || e.player.setVolume(o),
                  e.loadOnReady
                    ? (e.player.load(e.loadOnReady, !0), (e.loadOnReady = null))
                    : r && e.player.play(),
                  e.handleDurationCheck();
              }
            }),
            m(b(e), "handlePlay", function () {
              (e.isPlaying = !0), (e.isLoading = !1);
              var t = e.props,
                n = t.onStart,
                r = t.onPlay,
                o = t.playbackRate;
              e.startOnPlay &&
                (e.player.setPlaybackRate &&
                  1 !== o &&
                  e.player.setPlaybackRate(o),
                n(),
                (e.startOnPlay = !1)),
                r(),
                e.seekOnPlay && (e.seekTo(e.seekOnPlay), (e.seekOnPlay = null)),
                e.handleDurationCheck();
            }),
            m(b(e), "handlePause", function (t) {
              (e.isPlaying = !1), e.isLoading || e.props.onPause(t);
            }),
            m(b(e), "handleEnded", function () {
              var t = e.props,
                n = t.activePlayer,
                r = t.loop,
                o = t.onEnded;
              n.loopOnEnded && r && e.seekTo(0), r || ((e.isPlaying = !1), o());
            }),
            m(b(e), "handleError", function () {
              var t;
              (e.isLoading = !1), (t = e.props).onError.apply(t, arguments);
            }),
            m(b(e), "handleDurationCheck", function () {
              clearTimeout(e.durationCheckTimeout);
              var t = e.getDuration();
              t
                ? e.onDurationCalled ||
                  (e.props.onDuration(t), (e.onDurationCalled = !0))
                : (e.durationCheckTimeout = setTimeout(
                    e.handleDurationCheck,
                    100
                  ));
            }),
            m(b(e), "handleLoaded", function () {
              e.isLoading = !1;
            }),
            e
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.mounted = !0;
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.progressTimeout),
                  clearTimeout(this.durationCheckTimeout),
                  this.isReady &&
                    this.props.stopOnUnmount &&
                    (this.player.stop(),
                    this.player.disablePIP && this.player.disablePIP()),
                  (this.mounted = !1);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t = this;
                if (this.player) {
                  var n = this.props,
                    r = n.url,
                    o = n.playing,
                    i = n.volume,
                    s = n.muted,
                    c = n.playbackRate,
                    l = n.pip,
                    p = n.loop,
                    f = n.activePlayer,
                    d = n.disableDeferredLoading;
                  if (!(0, a.default)(e.url, r)) {
                    if (
                      this.isLoading &&
                      !f.forceLoad &&
                      !d &&
                      !(0, u.isMediaStream)(r)
                    )
                      return (
                        console.warn(
                          "ReactPlayer: the attempt to load ".concat(
                            r,
                            " is being deferred until the player has loaded"
                          )
                        ),
                        void (this.loadOnReady = r)
                      );
                    (this.isLoading = !0),
                      (this.startOnPlay = !0),
                      (this.onDurationCalled = !1),
                      this.player.load(r, this.isReady);
                  }
                  e.playing || !o || this.isPlaying || this.player.play(),
                    e.playing && !o && this.isPlaying && this.player.pause(),
                    !e.pip &&
                      l &&
                      this.player.enablePIP &&
                      this.player.enablePIP(),
                    e.pip &&
                      !l &&
                      this.player.disablePIP &&
                      this.player.disablePIP(),
                    e.volume !== i && null !== i && this.player.setVolume(i),
                    e.muted !== s &&
                      (s
                        ? this.player.mute()
                        : (this.player.unmute(),
                          null !== i &&
                            setTimeout(function () {
                              return t.player.setVolume(i);
                            }))),
                    e.playbackRate !== c &&
                      this.player.setPlaybackRate &&
                      this.player.setPlaybackRate(c),
                    e.loop !== p &&
                      this.player.setLoop &&
                      this.player.setLoop(p);
                }
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.isReady ? this.player.getDuration() : null;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.isReady ? this.player.getCurrentTime() : null;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.isReady ? this.player.getSecondsLoaded() : null;
              },
            },
            {
              key: "seekTo",
              value: function (e, t) {
                var n = this;
                if (this.isReady) {
                  if (t ? "fraction" === t : e > 0 && e < 1) {
                    var r = this.player.getDuration();
                    return r
                      ? void this.player.seekTo(r * e)
                      : void console.warn(
                          "ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available"
                        );
                  }
                  this.player.seekTo(e);
                } else
                  0 !== e &&
                    ((this.seekOnPlay = e),
                    setTimeout(function () {
                      n.seekOnPlay = null;
                    }, 5e3));
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.activePlayer;
                return e
                  ? i.default.createElement(
                      e,
                      l({}, this.props, {
                        onMount: this.handlePlayerMount,
                        onReady: this.handleReady,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onLoaded: this.handleLoaded,
                        onError: this.handleError,
                      })
                    )
                  : null;
              },
            },
          ]),
          n && f(t.prototype, n),
          r && f(t, r),
          s
        );
      })(i.Component);
      (t.default = v),
        m(v, "displayName", "Player"),
        m(v, "propTypes", s.propTypes),
        m(v, "defaultProps", s.defaultProps);
    },
    52055: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createReactPlayer = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = p(n(39714)),
        a = p(n(36631)),
        s = p(n(78435)),
        u = n(29090),
        c = n(77838),
        l = p(n(16403));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                _(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function h() {
        return (
          (h =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          h.apply(this, arguments)
        );
      }
      function b(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return g(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return g(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return g(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function m(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function w(e, t) {
        return (
          (w =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          w(e, t)
        );
      }
      function O(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = S(e);
          if (t) {
            var o = S(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return P(this, n);
        };
      }
      function P(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? k(e) : t;
      }
      function k(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function S(e) {
        return (
          (S = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          S(e)
        );
      }
      function _(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var x = (0, o.lazy)(function () {
          return n.e(664).then(n.bind(n, 27296));
        }),
        E = "undefined" !== typeof window && window.document,
        j = "undefined" !== typeof n.g && n.g.window && n.g.window.document,
        A = Object.keys(u.propTypes),
        T =
          E || j
            ? o.Suspense
            : function () {
                return null;
              },
        C = [];
      t.createReactPlayer = function (e, t) {
        var n, r;
        return (
          (r = n =
            (function (n) {
              !(function (e, t) {
                if ("function" !== typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && w(e, t);
              })(g, n);
              var r,
                p,
                f,
                d = O(g);
              function g() {
                var n;
                m(this, g);
                for (
                  var r = arguments.length, s = new Array(r), p = 0;
                  p < r;
                  p++
                )
                  s[p] = arguments[p];
                return (
                  _(k((n = d.call.apply(d, [this].concat(s)))), "state", {
                    showPreview: !!n.props.light,
                  }),
                  _(k(n), "references", {
                    wrapper: function (e) {
                      n.wrapper = e;
                    },
                    player: function (e) {
                      n.player = e;
                    },
                  }),
                  _(k(n), "handleClickPreview", function (e) {
                    n.setState({ showPreview: !1 }), n.props.onClickPreview(e);
                  }),
                  _(k(n), "showPreview", function () {
                    n.setState({ showPreview: !0 });
                  }),
                  _(k(n), "getDuration", function () {
                    return n.player ? n.player.getDuration() : null;
                  }),
                  _(k(n), "getCurrentTime", function () {
                    return n.player ? n.player.getCurrentTime() : null;
                  }),
                  _(k(n), "getSecondsLoaded", function () {
                    return n.player ? n.player.getSecondsLoaded() : null;
                  }),
                  _(k(n), "getInternalPlayer", function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "player";
                    return n.player ? n.player.getInternalPlayer(e) : null;
                  }),
                  _(k(n), "seekTo", function (e, t) {
                    if (!n.player) return null;
                    n.player.seekTo(e, t);
                  }),
                  _(k(n), "handleReady", function () {
                    n.props.onReady(k(n));
                  }),
                  _(
                    k(n),
                    "getActivePlayer",
                    (0, a.default)(function (n) {
                      for (
                        var r = 0, o = [].concat(C, b(e));
                        r < o.length;
                        r++
                      ) {
                        var i = o[r];
                        if (i.canPlay(n)) return i;
                      }
                      return t || null;
                    })
                  ),
                  _(
                    k(n),
                    "getConfig",
                    (0, a.default)(function (e, t) {
                      var r = n.props.config;
                      return i.default.all([
                        u.defaultProps.config,
                        u.defaultProps.config[t] || {},
                        r,
                        r[t] || {},
                      ]);
                    })
                  ),
                  _(
                    k(n),
                    "getAttributes",
                    (0, a.default)(function (e) {
                      return (0, c.omit)(n.props, A);
                    })
                  ),
                  _(k(n), "renderActivePlayer", function (e) {
                    if (!e) return null;
                    var t = n.getActivePlayer(e);
                    if (!t) return null;
                    var r = n.getConfig(e, t.key);
                    return o.default.createElement(
                      l.default,
                      h({}, n.props, {
                        key: t.key,
                        ref: n.references.player,
                        config: r,
                        activePlayer: t.lazyPlayer || t,
                        onReady: n.handleReady,
                      })
                    );
                  }),
                  n
                );
              }
              return (
                (r = g),
                (p = [
                  {
                    key: "shouldComponentUpdate",
                    value: function (e, t) {
                      return (
                        !(0, s.default)(this.props, e) ||
                        !(0, s.default)(this.state, t)
                      );
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      var t = this.props.light;
                      !e.light && t && this.setState({ showPreview: !0 }),
                        e.light && !t && this.setState({ showPreview: !1 });
                    },
                  },
                  {
                    key: "renderPreview",
                    value: function (e) {
                      if (!e) return null;
                      var t = this.props,
                        n = t.light,
                        r = t.playIcon,
                        i = t.previewTabIndex,
                        a = t.oEmbedUrl;
                      return o.default.createElement(x, {
                        url: e,
                        light: n,
                        playIcon: r,
                        previewTabIndex: i,
                        oEmbedUrl: a,
                        onClick: this.handleClickPreview,
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.url,
                        n = e.style,
                        r = e.width,
                        i = e.height,
                        a = e.fallback,
                        s = e.wrapper,
                        u = this.state.showPreview,
                        c = this.getAttributes(t);
                      return o.default.createElement(
                        s,
                        h(
                          {
                            ref: this.references.wrapper,
                            style: y(y({}, n), {}, { width: r, height: i }),
                          },
                          c
                        ),
                        o.default.createElement(
                          T,
                          { fallback: a },
                          u ? this.renderPreview(t) : this.renderActivePlayer(t)
                        )
                      );
                    },
                  },
                ]),
                p && v(r.prototype, p),
                f && v(r, f),
                g
              );
            })(o.Component)),
          _(n, "displayName", "ReactPlayer"),
          _(n, "propTypes", u.propTypes),
          _(n, "defaultProps", u.defaultProps),
          _(n, "addCustomPlayer", function (e) {
            C.push(e);
          }),
          _(n, "removeCustomPlayers", function () {
            C.length = 0;
          }),
          _(n, "canPlay", function (t) {
            for (var n = 0, r = [].concat(C, b(e)); n < r.length; n++) {
              if (r[n].canPlay(t)) return !0;
            }
            return !1;
          }),
          _(n, "canEnablePIP", function (t) {
            for (var n = 0, r = [].concat(C, b(e)); n < r.length; n++) {
              var o = r[n];
              if (o.canEnablePIP && o.canEnablePIP(t)) return !0;
            }
            return !1;
          }),
          r
        );
      };
    },
    84372: function (e, t, n) {
      "use strict";
      t.Z = void 0;
      var r,
        o = (r = n(18350)) && r.__esModule ? r : { default: r },
        i = n(52055);
      var a = o.default[o.default.length - 1],
        s = (0, i.createReactPlayer)(o.default, a);
      t.Z = s;
    },
    842: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canPlay =
          t.FLV_EXTENSIONS =
          t.DASH_EXTENSIONS =
          t.HLS_EXTENSIONS =
          t.VIDEO_EXTENSIONS =
          t.AUDIO_EXTENSIONS =
          t.MATCH_URL_KALTURA =
          t.MATCH_URL_VIDYARD =
          t.MATCH_URL_MIXCLOUD =
          t.MATCH_URL_DAILYMOTION =
          t.MATCH_URL_TWITCH_CHANNEL =
          t.MATCH_URL_TWITCH_VIDEO =
          t.MATCH_URL_WISTIA =
          t.MATCH_URL_STREAMABLE =
          t.MATCH_URL_FACEBOOK_WATCH =
          t.MATCH_URL_FACEBOOK =
          t.MATCH_URL_VIMEO =
          t.MATCH_URL_SOUNDCLOUD =
          t.MATCH_URL_YOUTUBE =
            void 0);
      var r = n(77838);
      function o(e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return i(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return i(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          s = !0,
          u = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var a =
        /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
      t.MATCH_URL_YOUTUBE = a;
      var s = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
      t.MATCH_URL_SOUNDCLOUD = s;
      var u = /vimeo\.com\/(?!progressive_redirect).+/;
      t.MATCH_URL_VIMEO = u;
      var c =
        /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
      t.MATCH_URL_FACEBOOK = c;
      var l = /^https?:\/\/fb\.watch\/.+$/;
      t.MATCH_URL_FACEBOOK_WATCH = l;
      var p = /streamable\.com\/([a-z0-9]+)$/;
      t.MATCH_URL_STREAMABLE = p;
      var f =
        /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
      t.MATCH_URL_WISTIA = f;
      var d = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
      t.MATCH_URL_TWITCH_VIDEO = d;
      var y = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
      t.MATCH_URL_TWITCH_CHANNEL = y;
      var h =
        /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
      t.MATCH_URL_DAILYMOTION = h;
      var b = /mixcloud\.com\/([^/]+\/[^/]+)/;
      t.MATCH_URL_MIXCLOUD = b;
      var g = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
      t.MATCH_URL_VIDYARD = g;
      var m =
        /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
      t.MATCH_URL_KALTURA = m;
      var v =
        /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
      t.AUDIO_EXTENSIONS = v;
      var w = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
      t.VIDEO_EXTENSIONS = w;
      var O = /\.(m3u8)($|\?)/i;
      t.HLS_EXTENSIONS = O;
      var P = /\.(mpd)($|\?)/i;
      t.DASH_EXTENSIONS = P;
      var k = /\.(flv)($|\?)/i;
      t.FLV_EXTENSIONS = k;
      var S = {
        youtube: function (e) {
          return e instanceof Array
            ? e.every(function (e) {
                return a.test(e);
              })
            : a.test(e);
        },
        soundcloud: function (e) {
          return s.test(e) && !v.test(e);
        },
        vimeo: function (e) {
          return u.test(e) && !w.test(e) && !O.test(e);
        },
        facebook: function (e) {
          return c.test(e) || l.test(e);
        },
        streamable: function (e) {
          return p.test(e);
        },
        wistia: function (e) {
          return f.test(e);
        },
        twitch: function (e) {
          return d.test(e) || y.test(e);
        },
        dailymotion: function (e) {
          return h.test(e);
        },
        mixcloud: function (e) {
          return b.test(e);
        },
        vidyard: function (e) {
          return g.test(e);
        },
        kaltura: function (e) {
          return m.test(e);
        },
        file: function e(t) {
          if (t instanceof Array) {
            var n,
              i = o(t);
            try {
              for (i.s(); !(n = i.n()).done; ) {
                var a = n.value;
                if ("string" === typeof a && e(a)) return !0;
                if (e(a.src)) return !0;
              }
            } catch (s) {
              i.e(s);
            } finally {
              i.f();
            }
            return !1;
          }
          return (
            !(!(0, r.isMediaStream)(t) && !(0, r.isBlobUrl)(t)) ||
            v.test(t) ||
            w.test(t) ||
            O.test(t) ||
            P.test(t) ||
            k.test(t)
          );
        },
      };
      t.canPlay = S;
    },
    18350: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(2784),
        o = n(77838),
        i = n(842),
        a = [
          {
            key: "youtube",
            name: "YouTube",
            canPlay: i.canPlay.youtube,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(439).then(n.bind(n, 56250));
            }),
          },
          {
            key: "soundcloud",
            name: "SoundCloud",
            canPlay: i.canPlay.soundcloud,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(125).then(n.bind(n, 71323));
            }),
          },
          {
            key: "vimeo",
            name: "Vimeo",
            canPlay: i.canPlay.vimeo,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(743).then(n.bind(n, 22127));
            }),
          },
          {
            key: "facebook",
            name: "Facebook",
            canPlay: i.canPlay.facebook,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(121).then(n.bind(n, 1027));
            }),
          },
          {
            key: "streamable",
            name: "Streamable",
            canPlay: i.canPlay.streamable,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(546).then(n.bind(n, 69788));
            }),
          },
          {
            key: "wistia",
            name: "Wistia",
            canPlay: i.canPlay.wistia,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(55).then(n.bind(n, 5337));
            }),
          },
          {
            key: "twitch",
            name: "Twitch",
            canPlay: i.canPlay.twitch,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(216).then(n.bind(n, 13691));
            }),
          },
          {
            key: "dailymotion",
            name: "DailyMotion",
            canPlay: i.canPlay.dailymotion,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(596).then(n.bind(n, 82353));
            }),
          },
          {
            key: "mixcloud",
            name: "Mixcloud",
            canPlay: i.canPlay.mixcloud,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(667).then(n.bind(n, 96123));
            }),
          },
          {
            key: "vidyard",
            name: "Vidyard",
            canPlay: i.canPlay.vidyard,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(965).then(n.bind(n, 85987));
            }),
          },
          {
            key: "kaltura",
            name: "Kaltura",
            canPlay: i.canPlay.kaltura,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(261).then(n.bind(n, 2630));
            }),
          },
          {
            key: "file",
            name: "FilePlayer",
            canPlay: i.canPlay.file,
            canEnablePIP: function (e) {
              return (
                i.canPlay.file(e) &&
                (document.pictureInPictureEnabled ||
                  (0, o.supportsWebKitPresentationMode)()) &&
                !i.AUDIO_EXTENSIONS.test(e)
              );
            },
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(11).then(n.bind(n, 53377));
            }),
          },
        ];
      t.default = a;
    },
    29090: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultProps = t.propTypes = void 0);
      var r,
        o = (r = n(13980)) && r.__esModule ? r : { default: r };
      var i = o.default.string,
        a = o.default.bool,
        s = o.default.number,
        u = o.default.array,
        c = o.default.oneOfType,
        l = o.default.shape,
        p = o.default.object,
        f = o.default.func,
        d = o.default.node,
        y = {
          url: c([i, u, p]),
          playing: a,
          loop: a,
          controls: a,
          volume: s,
          muted: a,
          playbackRate: s,
          width: c([i, s]),
          height: c([i, s]),
          style: p,
          progressInterval: s,
          playsinline: a,
          pip: a,
          stopOnUnmount: a,
          light: c([a, i]),
          playIcon: d,
          previewTabIndex: s,
          fallback: d,
          oEmbedUrl: i,
          wrapper: c([i, f, l({ render: f.isRequired })]),
          config: l({
            soundcloud: l({ options: p }),
            youtube: l({ playerVars: p, embedOptions: p, onUnstarted: f }),
            facebook: l({ appId: i, version: i, playerId: i, attributes: p }),
            dailymotion: l({ params: p }),
            vimeo: l({ playerOptions: p, title: i }),
            file: l({
              attributes: p,
              tracks: u,
              forceVideo: a,
              forceAudio: a,
              forceHLS: a,
              forceDASH: a,
              forceFLV: a,
              hlsOptions: p,
              hlsVersion: i,
              dashVersion: i,
              flvVersion: i,
            }),
            wistia: l({ options: p, playerId: i, customControls: u }),
            mixcloud: l({ options: p }),
            twitch: l({ options: p, playerId: i }),
            vidyard: l({ options: p }),
          }),
          onReady: f,
          onStart: f,
          onPlay: f,
          onPause: f,
          onBuffer: f,
          onBufferEnd: f,
          onEnded: f,
          onError: f,
          onDuration: f,
          onSeek: f,
          onPlaybackRateChange: f,
          onProgress: f,
          onClickPreview: f,
          onEnablePIP: f,
          onDisablePIP: f,
        };
      t.propTypes = y;
      var h = function () {},
        b = {
          playing: !1,
          loop: !1,
          controls: !1,
          volume: null,
          muted: !1,
          playbackRate: 1,
          width: "640px",
          height: "360px",
          style: {},
          progressInterval: 1e3,
          playsinline: !1,
          pip: !1,
          stopOnUnmount: !0,
          light: !1,
          fallback: null,
          wrapper: "div",
          previewTabIndex: 0,
          oEmbedUrl: "https://noembed.com/embed?url={url}",
          config: {
            soundcloud: {
              options: {
                visual: !0,
                buying: !1,
                liking: !1,
                download: !1,
                sharing: !1,
                show_comments: !1,
                show_playcount: !1,
              },
            },
            youtube: {
              playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1,
              },
              embedOptions: {},
              onUnstarted: h,
            },
            facebook: {
              appId: "1309697205772819",
              version: "v3.3",
              playerId: null,
              attributes: {},
            },
            dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
            vimeo: {
              playerOptions: {
                autopause: !1,
                byline: !1,
                portrait: !1,
                title: !1,
              },
              title: null,
            },
            file: {
              attributes: {},
              tracks: [],
              forceVideo: !1,
              forceAudio: !1,
              forceHLS: !1,
              forceDASH: !1,
              forceFLV: !1,
              hlsOptions: {},
              hlsVersion: "1.1.4",
              dashVersion: "3.1.3",
              flvVersion: "1.5.0",
            },
            wistia: { options: {}, playerId: null, customControls: null },
            mixcloud: { options: { hide_cover: 1 } },
            twitch: { options: {}, playerId: null },
            vidyard: { options: {} },
          },
          onReady: h,
          onStart: h,
          onPlay: h,
          onPause: h,
          onBuffer: h,
          onBufferEnd: h,
          onEnded: h,
          onError: h,
          onDuration: h,
          onSeek: h,
          onPlaybackRateChange: h,
          onProgress: h,
          onClickPreview: h,
          onEnablePIP: h,
          onDisablePIP: h,
        };
      t.defaultProps = b;
    },
    77838: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseStartTime = function (e) {
          return f(e, u);
        }),
        (t.parseEndTime = function (e) {
          return f(e, c);
        }),
        (t.randomString = function () {
          return Math.random().toString(36).substr(2, 5);
        }),
        (t.queryString = function (e) {
          return Object.keys(e)
            .map(function (t) {
              return "".concat(t, "=").concat(e[t]);
            })
            .join("&");
        }),
        (t.getSDK = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {
                    return !0;
                  },
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : r.default,
            a = d(t);
          if (a && o(a)) return Promise.resolve(a);
          return new Promise(function (r, o) {
            if (y[e]) y[e].push({ resolve: r, reject: o });
            else {
              y[e] = [{ resolve: r, reject: o }];
              var a = function (t) {
                y[e].forEach(function (e) {
                  return e.resolve(t);
                });
              };
              if (n) {
                var s = window[n];
                window[n] = function () {
                  s && s(), a(d(t));
                };
              }
              i(e, function (r) {
                r
                  ? (y[e].forEach(function (e) {
                      return e.reject(r);
                    }),
                    (y[e] = null))
                  : n || a(d(t));
              });
            }
          });
        }),
        (t.getConfig = function (e, t) {
          return (0, o.default)(t.config, e.config);
        }),
        (t.omit = function (e) {
          for (
            var t,
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          for (
            var i = (t = []).concat.apply(t, r),
              a = {},
              s = Object.keys(e),
              u = 0,
              c = s;
            u < c.length;
            u++
          ) {
            var l = c[u];
            -1 === i.indexOf(l) && (a[l] = e[l]);
          }
          return a;
        }),
        (t.callPlayer = function (e) {
          var t;
          if (!this.player || !this.player[e]) {
            var n = "ReactPlayer: "
              .concat(this.constructor.displayName, " player could not call %c")
              .concat(e, "%c \u2013 ");
            return (
              this.player
                ? this.player[e] || (n += "The method was not available")
                : (n += "The player was not available"),
              console.warn(n, "font-weight: bold", ""),
              null
            );
          }
          for (
            var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            o[i - 1] = arguments[i];
          return (t = this.player)[e].apply(t, o);
        }),
        (t.isMediaStream = function (e) {
          return (
            "undefined" !== typeof window &&
            "undefined" !== typeof window.MediaStream &&
            e instanceof window.MediaStream
          );
        }),
        (t.isBlobUrl = function (e) {
          return /^blob:/.test(e);
        }),
        (t.supportsWebKitPresentationMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document.createElement("video"),
            t = !1 === /iPhone|iPod/.test(navigator.userAgent);
          return (
            e.webkitSupportsPresentationMode &&
            "function" === typeof e.webkitSetPresentationMode &&
            t
          );
        });
      var r = i(n(9599)),
        o = i(n(39714));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              "undefined" === typeof Symbol ||
              !(Symbol.iterator in Object(e))
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (u) {
              (o = !0), (i = u);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return s(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var u = /[?&#](?:start|t)=([0-9hms]+)/,
        c = /[?&#]end=([0-9hms]+)/,
        l = /(\d+)(h|m|s)/g,
        p = /^\d+$/;
      function f(e, t) {
        if (!(e instanceof Array)) {
          var n = e.match(t);
          if (n) {
            var r = n[1];
            if (r.match(l))
              return (function (e) {
                var t = 0,
                  n = l.exec(e);
                for (; null !== n; ) {
                  var r = a(n, 3),
                    o = r[1],
                    i = r[2];
                  "h" === i && (t += 60 * parseInt(o, 10) * 60),
                    "m" === i && (t += 60 * parseInt(o, 10)),
                    "s" === i && (t += parseInt(o, 10)),
                    (n = l.exec(e));
                }
                return t;
              })(r);
            if (p.test(r)) return parseInt(r);
          }
        }
      }
      function d(e) {
        return window[e]
          ? window[e]
          : window.exports && window.exports[e]
          ? window.exports[e]
          : window.module && window.module.exports && window.module.exports[e]
          ? window.module.exports[e]
          : null;
      }
      var y = {};
    },
    79022: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        a = (o = n(78435)) && o.__esModule ? o : { default: o },
        s = n(78313),
        u = n(43756);
      function c() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e, t) {
        return (
          (d =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          d(e, t)
        );
      }
      function y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = g(e);
          if (t) {
            var o = g(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return h(this, n);
        };
      }
      function h(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? b(e) : t;
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e) {
        return (
          (g = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          g(e)
        );
      }
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var v = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && d(e, t);
        })(s, e);
        var t,
          n,
          r,
          o = y(s);
        function s() {
          var e;
          p(this, s);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            m(b((e = o.call.apply(o, [this].concat(n)))), "mounted", !1),
            m(b(e), "isReady", !1),
            m(b(e), "isPlaying", !1),
            m(b(e), "isLoading", !0),
            m(b(e), "loadOnReady", null),
            m(b(e), "startOnPlay", !0),
            m(b(e), "seekOnPlay", null),
            m(b(e), "onDurationCalled", !1),
            m(b(e), "handlePlayerMount", function (t) {
              e.player ||
                ((e.player = t), e.player.load(e.props.url), e.progress());
            }),
            m(b(e), "getInternalPlayer", function (t) {
              return e.player ? e.player[t] : null;
            }),
            m(b(e), "progress", function () {
              if (e.props.url && e.player && e.isReady) {
                var t = e.getCurrentTime() || 0,
                  n = e.getSecondsLoaded(),
                  r = e.getDuration();
                if (r) {
                  var o = { playedSeconds: t, played: t / r };
                  null !== n && ((o.loadedSeconds = n), (o.loaded = n / r)),
                    (o.playedSeconds === e.prevPlayed &&
                      o.loadedSeconds === e.prevLoaded) ||
                      e.props.onProgress(o),
                    (e.prevPlayed = o.playedSeconds),
                    (e.prevLoaded = o.loadedSeconds);
                }
              }
              e.progressTimeout = setTimeout(
                e.progress,
                e.props.progressFrequency || e.props.progressInterval
              );
            }),
            m(b(e), "handleReady", function () {
              if (e.mounted) {
                (e.isReady = !0), (e.isLoading = !1);
                var t = e.props,
                  n = t.onReady,
                  r = t.playing,
                  o = t.volume,
                  i = t.muted;
                n(),
                  i || null === o || e.player.setVolume(o),
                  e.loadOnReady
                    ? (e.player.load(e.loadOnReady, !0), (e.loadOnReady = null))
                    : r && e.player.play(),
                  e.handleDurationCheck();
              }
            }),
            m(b(e), "handlePlay", function () {
              (e.isPlaying = !0), (e.isLoading = !1);
              var t = e.props,
                n = t.onStart,
                r = t.onPlay,
                o = t.playbackRate;
              e.startOnPlay &&
                (e.player.setPlaybackRate &&
                  1 !== o &&
                  e.player.setPlaybackRate(o),
                n(),
                (e.startOnPlay = !1)),
                r(),
                e.seekOnPlay && (e.seekTo(e.seekOnPlay), (e.seekOnPlay = null)),
                e.handleDurationCheck();
            }),
            m(b(e), "handlePause", function (t) {
              (e.isPlaying = !1), e.isLoading || e.props.onPause(t);
            }),
            m(b(e), "handleEnded", function () {
              var t = e.props,
                n = t.activePlayer,
                r = t.loop,
                o = t.onEnded;
              n.loopOnEnded && r && e.seekTo(0), r || ((e.isPlaying = !1), o());
            }),
            m(b(e), "handleError", function () {
              var t;
              (e.isLoading = !1), (t = e.props).onError.apply(t, arguments);
            }),
            m(b(e), "handleDurationCheck", function () {
              clearTimeout(e.durationCheckTimeout);
              var t = e.getDuration();
              t
                ? e.onDurationCalled ||
                  (e.props.onDuration(t), (e.onDurationCalled = !0))
                : (e.durationCheckTimeout = setTimeout(
                    e.handleDurationCheck,
                    100
                  ));
            }),
            m(b(e), "handleLoaded", function () {
              e.isLoading = !1;
            }),
            e
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.mounted = !0;
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.progressTimeout),
                  clearTimeout(this.durationCheckTimeout),
                  this.isReady &&
                    this.props.stopOnUnmount &&
                    (this.player.stop(),
                    this.player.disablePIP && this.player.disablePIP()),
                  (this.mounted = !1);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t = this;
                if (this.player) {
                  var n = this.props,
                    r = n.url,
                    o = n.playing,
                    i = n.volume,
                    s = n.muted,
                    c = n.playbackRate,
                    l = n.pip,
                    p = n.loop,
                    f = n.activePlayer,
                    d = n.disableDeferredLoading;
                  if (!(0, a.default)(e.url, r)) {
                    if (
                      this.isLoading &&
                      !f.forceLoad &&
                      !d &&
                      !(0, u.isMediaStream)(r)
                    )
                      return (
                        console.warn(
                          "ReactPlayer: the attempt to load ".concat(
                            r,
                            " is being deferred until the player has loaded"
                          )
                        ),
                        void (this.loadOnReady = r)
                      );
                    (this.isLoading = !0),
                      (this.startOnPlay = !0),
                      (this.onDurationCalled = !1),
                      this.player.load(r, this.isReady);
                  }
                  e.playing || !o || this.isPlaying || this.player.play(),
                    e.playing && !o && this.isPlaying && this.player.pause(),
                    !e.pip &&
                      l &&
                      this.player.enablePIP &&
                      this.player.enablePIP(),
                    e.pip &&
                      !l &&
                      this.player.disablePIP &&
                      this.player.disablePIP(),
                    e.volume !== i && null !== i && this.player.setVolume(i),
                    e.muted !== s &&
                      (s
                        ? this.player.mute()
                        : (this.player.unmute(),
                          null !== i &&
                            setTimeout(function () {
                              return t.player.setVolume(i);
                            }))),
                    e.playbackRate !== c &&
                      this.player.setPlaybackRate &&
                      this.player.setPlaybackRate(c),
                    e.loop !== p &&
                      this.player.setLoop &&
                      this.player.setLoop(p);
                }
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.isReady ? this.player.getDuration() : null;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.isReady ? this.player.getCurrentTime() : null;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.isReady ? this.player.getSecondsLoaded() : null;
              },
            },
            {
              key: "seekTo",
              value: function (e, t) {
                var n = this;
                if (this.isReady) {
                  if (t ? "fraction" === t : e > 0 && e < 1) {
                    var r = this.player.getDuration();
                    return r
                      ? void this.player.seekTo(r * e)
                      : void console.warn(
                          "ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available"
                        );
                  }
                  this.player.seekTo(e);
                } else
                  0 !== e &&
                    ((this.seekOnPlay = e),
                    setTimeout(function () {
                      n.seekOnPlay = null;
                    }, 5e3));
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.activePlayer;
                return e
                  ? i.default.createElement(
                      e,
                      l({}, this.props, {
                        onMount: this.handlePlayerMount,
                        onReady: this.handleReady,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onLoaded: this.handleLoaded,
                        onError: this.handleError,
                      })
                    )
                  : null;
              },
            },
          ]),
          n && f(t.prototype, n),
          r && f(t, r),
          s
        );
      })(i.Component);
      (t.default = v),
        m(v, "displayName", "Player"),
        m(v, "propTypes", s.propTypes),
        m(v, "defaultProps", s.defaultProps);
    },
    92149: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" !== typeof e))
          return { default: e };
        var t = i();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(n, a, s)
              : (n[a] = e[a]);
          }
        (n.default = e), t && t.set(e, n);
        return n;
      })(n(2784));
      function i() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, t) {
        return (
          (l =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          l(e, t)
        );
      }
      function p(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = y(e);
          if (t) {
            var o = y(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return f(this, n);
        };
      }
      function f(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? d(e) : t;
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          y(e)
        );
      }
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var b = "64px",
        g = {},
        m = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && l(e, t);
          })(a, e);
          var t,
            n,
            r,
            i = p(a);
          function a() {
            var e;
            u(this, a);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              h(d((e = i.call.apply(i, [this].concat(n)))), "mounted", !1),
              h(d(e), "state", { image: null }),
              h(d(e), "handleKeyPress", function (t) {
                ("Enter" !== t.key && " " !== t.key) || e.props.onClick();
              }),
              e
            );
          }
          return (
            (t = a),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0), this.fetchImage(this.props);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props,
                    n = t.url,
                    r = t.light;
                  (e.url === n && e.light === r) || this.fetchImage(this.props);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "fetchImage",
                value: function (e) {
                  var t = this,
                    n = e.url,
                    r = e.light,
                    o = e.oEmbedUrl;
                  if ("string" !== typeof r) {
                    if (!g[n])
                      return (
                        this.setState({ image: null }),
                        window
                          .fetch(o.replace("{url}", n))
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            if (e.thumbnail_url && t.mounted) {
                              var r = e.thumbnail_url.replace(
                                "height=100",
                                "height=480"
                              );
                              t.setState({ image: r }), (g[n] = r);
                            }
                          })
                      );
                    this.setState({ image: g[n] });
                  } else this.setState({ image: r });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    n = e.playIcon,
                    r = e.previewTabIndex,
                    i = this.state.image,
                    a = {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    u = {
                      preview: s(
                        {
                          width: "100%",
                          height: "100%",
                          backgroundImage: i ? "url(".concat(i, ")") : void 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          cursor: "pointer",
                        },
                        a
                      ),
                      shadow: s(
                        {
                          background:
                            "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                          borderRadius: b,
                          width: b,
                          height: b,
                        },
                        a
                      ),
                      playIcon: {
                        borderStyle: "solid",
                        borderWidth: "16px 0 16px 26px",
                        borderColor:
                          "transparent transparent transparent white",
                        marginLeft: "7px",
                      },
                    },
                    c = o.default.createElement(
                      "div",
                      { style: u.shadow, className: "react-player__shadow" },
                      o.default.createElement("div", {
                        style: u.playIcon,
                        className: "react-player__play-icon",
                      })
                    );
                  return o.default.createElement(
                    "div",
                    {
                      style: u.preview,
                      className: "react-player__preview",
                      onClick: t,
                      tabIndex: r,
                      onKeyPress: this.handleKeyPress,
                    },
                    n || c
                  );
                },
              },
            ]) && c(t.prototype, n),
            r && c(t, r),
            a
          );
        })(o.Component);
      t.default = m;
    },
    48591: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createReactPlayer = void 0);
      var r = x(n(2784)),
        o = l(n(39714)),
        i = l(n(36631)),
        a = l(n(78435)),
        s = n(78313),
        u = n(43756),
        c = l(n(79022));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p(e) {
        return (
          (p =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          p(e)
        );
      }
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                S(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function y() {
        return (
          (y =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          y.apply(this, arguments)
        );
      }
      function h(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return b(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return b(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return b(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function g(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function m(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function v(e, t) {
        return (
          (v =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          v(e, t)
        );
      }
      function w(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = k(e);
          if (t) {
            var o = k(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O(this, n);
        };
      }
      function O(e, t) {
        return !t || ("object" !== p(t) && "function" !== typeof t) ? P(e) : t;
      }
      function P(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function k(e) {
        return (
          (k = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          k(e)
        );
      }
      function S(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function _() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      function x(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== p(e) && "function" !== typeof e))
          return { default: e };
        var t = _();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(n, o, i)
              : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      var E = (0, r.lazy)(function () {
          return Promise.resolve().then(function () {
            return x(n(92149));
          });
        }),
        j = "undefined" !== typeof window && window.document,
        A = "undefined" !== typeof n.g && n.g.window && n.g.window.document,
        T = Object.keys(s.propTypes),
        C =
          j || A
            ? r.Suspense
            : function () {
                return null;
              },
        I = [];
      t.createReactPlayer = function (e, t) {
        var n, l;
        return (
          (l = n =
            (function (n) {
              !(function (e, t) {
                if ("function" !== typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && v(e, t);
              })(O, n);
              var l,
                p,
                f,
                b = w(O);
              function O() {
                var n;
                g(this, O);
                for (
                  var a = arguments.length, l = new Array(a), p = 0;
                  p < a;
                  p++
                )
                  l[p] = arguments[p];
                return (
                  S(P((n = b.call.apply(b, [this].concat(l)))), "state", {
                    showPreview: !!n.props.light,
                  }),
                  S(P(n), "references", {
                    wrapper: function (e) {
                      n.wrapper = e;
                    },
                    player: function (e) {
                      n.player = e;
                    },
                  }),
                  S(P(n), "handleClickPreview", function (e) {
                    n.setState({ showPreview: !1 }), n.props.onClickPreview(e);
                  }),
                  S(P(n), "showPreview", function () {
                    n.setState({ showPreview: !0 });
                  }),
                  S(P(n), "getDuration", function () {
                    return n.player ? n.player.getDuration() : null;
                  }),
                  S(P(n), "getCurrentTime", function () {
                    return n.player ? n.player.getCurrentTime() : null;
                  }),
                  S(P(n), "getSecondsLoaded", function () {
                    return n.player ? n.player.getSecondsLoaded() : null;
                  }),
                  S(P(n), "getInternalPlayer", function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "player";
                    return n.player ? n.player.getInternalPlayer(e) : null;
                  }),
                  S(P(n), "seekTo", function (e, t) {
                    if (!n.player) return null;
                    n.player.seekTo(e, t);
                  }),
                  S(P(n), "handleReady", function () {
                    n.props.onReady(P(n));
                  }),
                  S(
                    P(n),
                    "getActivePlayer",
                    (0, i.default)(function (n) {
                      for (
                        var r = 0, o = [].concat(I, h(e));
                        r < o.length;
                        r++
                      ) {
                        var i = o[r];
                        if (i.canPlay(n)) return i;
                      }
                      return t || null;
                    })
                  ),
                  S(
                    P(n),
                    "getConfig",
                    (0, i.default)(function (e, t) {
                      var r = n.props.config;
                      return o.default.all([
                        s.defaultProps.config,
                        s.defaultProps.config[t] || {},
                        r,
                        r[t] || {},
                      ]);
                    })
                  ),
                  S(
                    P(n),
                    "getAttributes",
                    (0, i.default)(function (e) {
                      return (0, u.omit)(n.props, T);
                    })
                  ),
                  S(P(n), "renderActivePlayer", function (e) {
                    if (!e) return null;
                    var t = n.getActivePlayer(e);
                    if (!t) return null;
                    var o = n.getConfig(e, t.key);
                    return r.default.createElement(
                      c.default,
                      y({}, n.props, {
                        key: t.key,
                        ref: n.references.player,
                        config: o,
                        activePlayer: t.lazyPlayer || t,
                        onReady: n.handleReady,
                      })
                    );
                  }),
                  n
                );
              }
              return (
                (l = O),
                (p = [
                  {
                    key: "shouldComponentUpdate",
                    value: function (e, t) {
                      return (
                        !(0, a.default)(this.props, e) ||
                        !(0, a.default)(this.state, t)
                      );
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      var t = this.props.light;
                      !e.light && t && this.setState({ showPreview: !0 }),
                        e.light && !t && this.setState({ showPreview: !1 });
                    },
                  },
                  {
                    key: "renderPreview",
                    value: function (e) {
                      if (!e) return null;
                      var t = this.props,
                        n = t.light,
                        o = t.playIcon,
                        i = t.previewTabIndex,
                        a = t.oEmbedUrl;
                      return r.default.createElement(E, {
                        url: e,
                        light: n,
                        playIcon: o,
                        previewTabIndex: i,
                        oEmbedUrl: a,
                        onClick: this.handleClickPreview,
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.url,
                        n = e.style,
                        o = e.width,
                        i = e.height,
                        a = e.fallback,
                        s = e.wrapper,
                        u = this.state.showPreview,
                        c = this.getAttributes(t);
                      return r.default.createElement(
                        s,
                        y(
                          {
                            ref: this.references.wrapper,
                            style: d(d({}, n), {}, { width: o, height: i }),
                          },
                          c
                        ),
                        r.default.createElement(
                          C,
                          { fallback: a },
                          u ? this.renderPreview(t) : this.renderActivePlayer(t)
                        )
                      );
                    },
                  },
                ]),
                p && m(l.prototype, p),
                f && m(l, f),
                O
              );
            })(r.Component)),
          S(n, "displayName", "ReactPlayer"),
          S(n, "propTypes", s.propTypes),
          S(n, "defaultProps", s.defaultProps),
          S(n, "addCustomPlayer", function (e) {
            I.push(e);
          }),
          S(n, "removeCustomPlayers", function () {
            I.length = 0;
          }),
          S(n, "canPlay", function (t) {
            for (var n = 0, r = [].concat(I, h(e)); n < r.length; n++) {
              if (r[n].canPlay(t)) return !0;
            }
            return !1;
          }),
          S(n, "canEnablePIP", function (t) {
            for (var n = 0, r = [].concat(I, h(e)); n < r.length; n++) {
              var o = r[n];
              if (o.canEnablePIP && o.canEnablePIP(t)) return !0;
            }
            return !1;
          }),
          l
        );
      };
    },
    80960: function (e, t, n) {
      "use strict";
      t.Z = void 0;
      var r,
        o = (r = n(43843)) && r.__esModule ? r : { default: r },
        i = n(48591);
      var a = o.default[o.default.length - 1],
        s = (0, i.createReactPlayer)(o.default, a);
      t.Z = s;
    },
    85299: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canPlay =
          t.FLV_EXTENSIONS =
          t.DASH_EXTENSIONS =
          t.HLS_EXTENSIONS =
          t.VIDEO_EXTENSIONS =
          t.AUDIO_EXTENSIONS =
          t.MATCH_URL_KALTURA =
          t.MATCH_URL_VIDYARD =
          t.MATCH_URL_MIXCLOUD =
          t.MATCH_URL_DAILYMOTION =
          t.MATCH_URL_TWITCH_CHANNEL =
          t.MATCH_URL_TWITCH_VIDEO =
          t.MATCH_URL_WISTIA =
          t.MATCH_URL_STREAMABLE =
          t.MATCH_URL_FACEBOOK_WATCH =
          t.MATCH_URL_FACEBOOK =
          t.MATCH_URL_VIMEO =
          t.MATCH_URL_SOUNDCLOUD =
          t.MATCH_URL_YOUTUBE =
            void 0);
      var r = n(43756);
      function o(e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return i(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return i(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          s = !0,
          u = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var a =
        /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
      t.MATCH_URL_YOUTUBE = a;
      var s = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
      t.MATCH_URL_SOUNDCLOUD = s;
      var u = /vimeo\.com\/(?!progressive_redirect).+/;
      t.MATCH_URL_VIMEO = u;
      var c =
        /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
      t.MATCH_URL_FACEBOOK = c;
      var l = /^https?:\/\/fb\.watch\/.+$/;
      t.MATCH_URL_FACEBOOK_WATCH = l;
      var p = /streamable\.com\/([a-z0-9]+)$/;
      t.MATCH_URL_STREAMABLE = p;
      var f =
        /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
      t.MATCH_URL_WISTIA = f;
      var d = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
      t.MATCH_URL_TWITCH_VIDEO = d;
      var y = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
      t.MATCH_URL_TWITCH_CHANNEL = y;
      var h =
        /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
      t.MATCH_URL_DAILYMOTION = h;
      var b = /mixcloud\.com\/([^/]+\/[^/]+)/;
      t.MATCH_URL_MIXCLOUD = b;
      var g = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
      t.MATCH_URL_VIDYARD = g;
      var m =
        /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
      t.MATCH_URL_KALTURA = m;
      var v =
        /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
      t.AUDIO_EXTENSIONS = v;
      var w = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
      t.VIDEO_EXTENSIONS = w;
      var O = /\.(m3u8)($|\?)/i;
      t.HLS_EXTENSIONS = O;
      var P = /\.(mpd)($|\?)/i;
      t.DASH_EXTENSIONS = P;
      var k = /\.(flv)($|\?)/i;
      t.FLV_EXTENSIONS = k;
      var S = {
        youtube: function (e) {
          return e instanceof Array
            ? e.every(function (e) {
                return a.test(e);
              })
            : a.test(e);
        },
        soundcloud: function (e) {
          return s.test(e) && !v.test(e);
        },
        vimeo: function (e) {
          return u.test(e) && !w.test(e) && !O.test(e);
        },
        facebook: function (e) {
          return c.test(e) || l.test(e);
        },
        streamable: function (e) {
          return p.test(e);
        },
        wistia: function (e) {
          return f.test(e);
        },
        twitch: function (e) {
          return d.test(e) || y.test(e);
        },
        dailymotion: function (e) {
          return h.test(e);
        },
        mixcloud: function (e) {
          return b.test(e);
        },
        vidyard: function (e) {
          return g.test(e);
        },
        kaltura: function (e) {
          return m.test(e);
        },
        file: function e(t) {
          if (t instanceof Array) {
            var n,
              i = o(t);
            try {
              for (i.s(); !(n = i.n()).done; ) {
                var a = n.value;
                if ("string" === typeof a && e(a)) return !0;
                if (e(a.src)) return !0;
              }
            } catch (s) {
              i.e(s);
            } finally {
              i.f();
            }
            return !1;
          }
          return (
            !(!(0, r.isMediaStream)(t) && !(0, r.isBlobUrl)(t)) ||
            v.test(t) ||
            w.test(t) ||
            O.test(t) ||
            P.test(t) ||
            k.test(t)
          );
        },
      };
      t.canPlay = S;
    },
    45575: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              "undefined" === typeof Symbol ||
              !(Symbol.iterator in Object(e))
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (u) {
              (o = !0), (i = u);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return p(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return p(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function y(e, t) {
        return (
          (y =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          y(e, t)
        );
      }
      function h(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = m(e);
          if (t) {
            var o = m(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return b(this, n);
        };
      }
      function b(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? g(e) : t;
      }
      function g(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          m(e)
        );
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var w = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && y(e, t);
        })(u, e);
        var t,
          n,
          r,
          s = h(u);
        function u() {
          var e;
          f(this, u);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            v(
              g((e = s.call.apply(s, [this].concat(n)))),
              "callPlayer",
              i.callPlayer
            ),
            v(g(e), "onDurationChange", function () {
              var t = e.getDuration();
              e.props.onDuration(t);
            }),
            v(g(e), "mute", function () {
              e.callPlayer("setMuted", !0);
            }),
            v(g(e), "unmute", function () {
              e.callPlayer("setMuted", !1);
            }),
            v(g(e), "ref", function (t) {
              e.container = t;
            }),
            e
          );
        }
        return (
          (t = u),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this,
                  n = this.props,
                  r = n.controls,
                  o = n.config,
                  s = n.onError,
                  u = n.playing,
                  p = l(e.match(a.MATCH_URL_DAILYMOTION), 2)[1];
                this.player
                  ? this.player.load(p, {
                      start: (0, i.parseStartTime)(e),
                      autoplay: u,
                    })
                  : (0, i.getSDK)(
                      "https://api.dmcdn.net/all.js",
                      "DM",
                      "dmAsyncInit",
                      function (e) {
                        return e.player;
                      }
                    ).then(function (n) {
                      if (t.container) {
                        var a = n.player;
                        t.player = new a(t.container, {
                          width: "100%",
                          height: "100%",
                          video: p,
                          params: c(
                            {
                              controls: r,
                              autoplay: t.props.playing,
                              mute: t.props.muted,
                              start: (0, i.parseStartTime)(e),
                              origin: window.location.origin,
                            },
                            o.params
                          ),
                          events: {
                            apiready: t.props.onReady,
                            seeked: function () {
                              return t.props.onSeek(t.player.currentTime);
                            },
                            video_end: t.props.onEnded,
                            durationchange: t.onDurationChange,
                            pause: t.props.onPause,
                            playing: t.props.onPlay,
                            waiting: t.props.onBuffer,
                            error: function (e) {
                              return s(e);
                            },
                          },
                        });
                      }
                    }, s);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seek", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.player.duration || null;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.player.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.player.bufferedTime;
              },
            },
            {
              key: "render",
              value: function () {
                var e = {
                  width: "100%",
                  height: "100%",
                  display: this.props.display,
                };
                return o.default.createElement(
                  "div",
                  { style: e },
                  o.default.createElement("div", { ref: this.ref })
                );
              },
            },
          ]) && d(t.prototype, n),
          r && d(t, r),
          u
        );
      })(o.Component);
      (t.default = w),
        v(w, "displayName", "DailyMotion"),
        v(w, "canPlay", a.canPlay.dailymotion),
        v(w, "loopOnEnded", !0);
    },
    2607: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        return (
          (u =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          u.apply(this, arguments)
        );
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          p(e, t)
        );
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? y(e) : t;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var g = "https://connect.facebook.net/en_US/sdk.js",
        m = "fbAsyncInit",
        v = "facebook-player-",
        w = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(s, e);
          var t,
            n,
            r,
            a = f(s);
          function s() {
            var e;
            c(this, s);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              b(
                y((e = a.call.apply(a, [this].concat(n)))),
                "callPlayer",
                i.callPlayer
              ),
              b(
                y(e),
                "playerID",
                e.props.config.playerId ||
                  "".concat(v).concat((0, i.randomString)())
              ),
              b(y(e), "mute", function () {
                e.callPlayer("mute");
              }),
              b(y(e), "unmute", function () {
                e.callPlayer("unmute");
              }),
              e
            );
          }
          return (
            (t = s),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this);
                },
              },
              {
                key: "load",
                value: function (e, t) {
                  var n = this;
                  t
                    ? (0, i.getSDK)(g, "FB", m).then(function (e) {
                        return e.XFBML.parse();
                      })
                    : (0, i.getSDK)(g, "FB", m).then(function (e) {
                        e.init({
                          appId: n.props.config.appId,
                          xfbml: !0,
                          version: n.props.config.version,
                        }),
                          e.Event.subscribe("xfbml.render", function (e) {
                            n.props.onLoaded();
                          }),
                          e.Event.subscribe("xfbml.ready", function (e) {
                            "video" === e.type &&
                              e.id === n.playerID &&
                              ((n.player = e.instance),
                              n.player.subscribe(
                                "startedPlaying",
                                n.props.onPlay
                              ),
                              n.player.subscribe("paused", n.props.onPause),
                              n.player.subscribe(
                                "finishedPlaying",
                                n.props.onEnded
                              ),
                              n.player.subscribe(
                                "startedBuffering",
                                n.props.onBuffer
                              ),
                              n.player.subscribe(
                                "finishedBuffering",
                                n.props.onBufferEnd
                              ),
                              n.player.subscribe("error", n.props.onError),
                              n.props.muted
                                ? n.callPlayer("mute")
                                : n.callPlayer("unmute"),
                              n.props.onReady(),
                              (document
                                .getElementById(n.playerID)
                                .querySelector("iframe").style.visibility =
                                "visible"));
                          });
                      });
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentPosition");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.config.attributes;
                  return o.default.createElement(
                    "div",
                    u(
                      {
                        style: { width: "100%", height: "100%" },
                        id: this.playerID,
                        className: "fb-video",
                        "data-href": this.props.url,
                        "data-autoplay": this.props.playing ? "true" : "false",
                        "data-allowfullscreen": "true",
                        "data-controls": this.props.controls ? "true" : "false",
                      },
                      e
                    )
                  );
                },
              },
            ]) && l(t.prototype, n),
            r && l(t, r),
            s
          );
        })(o.Component);
      (t.default = w),
        b(w, "displayName", "Facebook"),
        b(w, "canPlay", a.canPlay.facebook),
        b(w, "loopOnEnded", !0);
    },
    86734: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        return (
          (u =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          u.apply(this, arguments)
        );
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          p(e, t)
        );
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? y(e) : t;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var g = "undefined" !== typeof navigator,
        m =
          g &&
          "MacIntel" === navigator.platform &&
          navigator.maxTouchPoints > 1,
        v =
          g &&
          (/iPad|iPhone|iPod/.test(navigator.userAgent) || m) &&
          !window.MSStream,
        w = /www\.dropbox\.com\/.+/,
        O = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,
        P = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(d, e);
          var t,
            n,
            r,
            s = f(d);
          function d() {
            var e;
            c(this, d);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              b(
                y((e = s.call.apply(s, [this].concat(n)))),
                "onReady",
                function () {
                  var t;
                  return (t = e.props).onReady.apply(t, arguments);
                }
              ),
              b(y(e), "onPlay", function () {
                var t;
                return (t = e.props).onPlay.apply(t, arguments);
              }),
              b(y(e), "onBuffer", function () {
                var t;
                return (t = e.props).onBuffer.apply(t, arguments);
              }),
              b(y(e), "onBufferEnd", function () {
                var t;
                return (t = e.props).onBufferEnd.apply(t, arguments);
              }),
              b(y(e), "onPause", function () {
                var t;
                return (t = e.props).onPause.apply(t, arguments);
              }),
              b(y(e), "onEnded", function () {
                var t;
                return (t = e.props).onEnded.apply(t, arguments);
              }),
              b(y(e), "onError", function () {
                var t;
                return (t = e.props).onError.apply(t, arguments);
              }),
              b(y(e), "onPlayBackRateChange", function (t) {
                return e.props.onPlaybackRateChange(t.target.playbackRate);
              }),
              b(y(e), "onEnablePIP", function () {
                var t;
                return (t = e.props).onEnablePIP.apply(t, arguments);
              }),
              b(y(e), "onDisablePIP", function (t) {
                var n = e.props,
                  r = n.onDisablePIP,
                  o = n.playing;
                r(t), o && e.play();
              }),
              b(y(e), "onPresentationModeChange", function (t) {
                if (
                  e.player &&
                  (0, i.supportsWebKitPresentationMode)(e.player)
                ) {
                  var n = e.player.webkitPresentationMode;
                  "picture-in-picture" === n
                    ? e.onEnablePIP(t)
                    : "inline" === n && e.onDisablePIP(t);
                }
              }),
              b(y(e), "onSeek", function (t) {
                e.props.onSeek(t.target.currentTime);
              }),
              b(y(e), "mute", function () {
                e.player.muted = !0;
              }),
              b(y(e), "unmute", function () {
                e.player.muted = !1;
              }),
              b(y(e), "renderSourceElement", function (e, t) {
                return "string" === typeof e
                  ? o.default.createElement("source", { key: t, src: e })
                  : o.default.createElement("source", u({ key: t }, e));
              }),
              b(y(e), "renderTrack", function (e, t) {
                return o.default.createElement("track", u({ key: t }, e));
              }),
              b(y(e), "ref", function (t) {
                e.player && (e.prevPlayer = e.player), (e.player = t);
              }),
              e
            );
          }
          return (
            (t = d),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this),
                    this.addListeners(this.player),
                    v && this.player.load();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) &&
                    (this.removeListeners(this.prevPlayer, e.url),
                    this.addListeners(this.player)),
                    this.props.url === e.url ||
                      (0, i.isMediaStream)(this.props.url) ||
                      (this.player.srcObject = null);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.removeListeners(this.player),
                    this.hls && this.hls.destroy();
                },
              },
              {
                key: "addListeners",
                value: function (e) {
                  var t = this.props,
                    n = t.url,
                    r = t.playsinline;
                  e.addEventListener("play", this.onPlay),
                    e.addEventListener("waiting", this.onBuffer),
                    e.addEventListener("playing", this.onBufferEnd),
                    e.addEventListener("pause", this.onPause),
                    e.addEventListener("seeked", this.onSeek),
                    e.addEventListener("ended", this.onEnded),
                    e.addEventListener("error", this.onError),
                    e.addEventListener("ratechange", this.onPlayBackRateChange),
                    e.addEventListener(
                      "enterpictureinpicture",
                      this.onEnablePIP
                    ),
                    e.addEventListener(
                      "leavepictureinpicture",
                      this.onDisablePIP
                    ),
                    e.addEventListener(
                      "webkitpresentationmodechanged",
                      this.onPresentationModeChange
                    ),
                    this.shouldUseHLS(n) ||
                      e.addEventListener("canplay", this.onReady),
                    r &&
                      (e.setAttribute("playsinline", ""),
                      e.setAttribute("webkit-playsinline", ""),
                      e.setAttribute("x5-playsinline", ""));
                },
              },
              {
                key: "removeListeners",
                value: function (e, t) {
                  e.removeEventListener("canplay", this.onReady),
                    e.removeEventListener("play", this.onPlay),
                    e.removeEventListener("waiting", this.onBuffer),
                    e.removeEventListener("playing", this.onBufferEnd),
                    e.removeEventListener("pause", this.onPause),
                    e.removeEventListener("seeked", this.onSeek),
                    e.removeEventListener("ended", this.onEnded),
                    e.removeEventListener("error", this.onError),
                    e.removeEventListener(
                      "ratechange",
                      this.onPlayBackRateChange
                    ),
                    e.removeEventListener(
                      "enterpictureinpicture",
                      this.onEnablePIP
                    ),
                    e.removeEventListener(
                      "leavepictureinpicture",
                      this.onDisablePIP
                    ),
                    e.removeEventListener(
                      "webkitpresentationmodechanged",
                      this.onPresentationModeChange
                    ),
                    this.shouldUseHLS(t) ||
                      e.removeEventListener("canplay", this.onReady);
                },
              },
              {
                key: "shouldUseAudio",
                value: function (e) {
                  return (
                    !e.config.forceVideo &&
                    !e.config.attributes.poster &&
                    (a.AUDIO_EXTENSIONS.test(e.url) || e.config.forceAudio)
                  );
                },
              },
              {
                key: "shouldUseHLS",
                value: function (e) {
                  return (
                    !!this.props.config.forceHLS ||
                    (!v && (a.HLS_EXTENSIONS.test(e) || O.test(e)))
                  );
                },
              },
              {
                key: "shouldUseDASH",
                value: function (e) {
                  return (
                    a.DASH_EXTENSIONS.test(e) || this.props.config.forceDASH
                  );
                },
              },
              {
                key: "shouldUseFLV",
                value: function (e) {
                  return a.FLV_EXTENSIONS.test(e) || this.props.config.forceFLV;
                },
              },
              {
                key: "load",
                value: function (e) {
                  var t = this,
                    n = this.props.config,
                    r = n.hlsVersion,
                    o = n.hlsOptions,
                    a = n.dashVersion,
                    s = n.flvVersion;
                  if (
                    (this.hls && this.hls.destroy(),
                    this.dash && this.dash.reset(),
                    this.shouldUseHLS(e) &&
                      (0, i.getSDK)(
                        "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace(
                          "VERSION",
                          r
                        ),
                        "Hls"
                      ).then(function (n) {
                        if (
                          ((t.hls = new n(o)),
                          t.hls.on(n.Events.MANIFEST_PARSED, function () {
                            t.props.onReady();
                          }),
                          t.hls.on(n.Events.ERROR, function (e, r) {
                            t.props.onError(e, r, t.hls, n);
                          }),
                          O.test(e))
                        ) {
                          var r = e.match(O)[1];
                          t.hls.loadSource(
                            "https://videodelivery.net/{id}/manifest/video.m3u8".replace(
                              "{id}",
                              r
                            )
                          );
                        } else t.hls.loadSource(e);
                        t.hls.attachMedia(t.player), t.props.onLoaded();
                      }),
                    this.shouldUseDASH(e) &&
                      (0, i.getSDK)(
                        "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace(
                          "VERSION",
                          a
                        ),
                        "dashjs"
                      ).then(function (n) {
                        (t.dash = n.MediaPlayer().create()),
                          t.dash.initialize(t.player, e, t.props.playing),
                          t.dash.on("error", t.props.onError),
                          parseInt(a) < 3
                            ? t.dash.getDebug().setLogToBrowserConsole(!1)
                            : t.dash.updateSettings({
                                debug: { logLevel: n.Debug.LOG_LEVEL_NONE },
                              }),
                          t.props.onLoaded();
                      }),
                    this.shouldUseFLV(e) &&
                      (0, i.getSDK)(
                        "https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace(
                          "VERSION",
                          s
                        ),
                        "flvjs"
                      ).then(function (n) {
                        (t.flv = n.createPlayer({ type: "flv", url: e })),
                          t.flv.attachMediaElement(t.player),
                          t.flv.on(n.Events.ERROR, function (e, r) {
                            t.props.onError(e, r, t.flv, n);
                          }),
                          t.flv.load(),
                          t.props.onLoaded();
                      }),
                    e instanceof Array)
                  )
                    this.player.load();
                  else if ((0, i.isMediaStream)(e))
                    try {
                      this.player.srcObject = e;
                    } catch (u) {
                      this.player.src = window.URL.createObjectURL(e);
                    }
                },
              },
              {
                key: "play",
                value: function () {
                  var e = this.player.play();
                  e && e.catch(this.props.onError);
                },
              },
              {
                key: "pause",
                value: function () {
                  this.player.pause();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.player.removeAttribute("src"),
                    this.dash && this.dash.reset();
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.player.currentTime = e;
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.player.volume = e;
                },
              },
              {
                key: "enablePIP",
                value: function () {
                  this.player.requestPictureInPicture &&
                  document.pictureInPictureElement !== this.player
                    ? this.player.requestPictureInPicture()
                    : (0, i.supportsWebKitPresentationMode)(this.player) &&
                      "picture-in-picture" !==
                        this.player.webkitPresentationMode &&
                      this.player.webkitSetPresentationMode(
                        "picture-in-picture"
                      );
                },
              },
              {
                key: "disablePIP",
                value: function () {
                  document.exitPictureInPicture &&
                  document.pictureInPictureElement === this.player
                    ? document.exitPictureInPicture()
                    : (0, i.supportsWebKitPresentationMode)(this.player) &&
                      "inline" !== this.player.webkitPresentationMode &&
                      this.player.webkitSetPresentationMode("inline");
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  try {
                    this.player.playbackRate = e;
                  } catch (t) {
                    this.props.onError(t);
                  }
                },
              },
              {
                key: "getDuration",
                value: function () {
                  if (!this.player) return null;
                  var e = this.player,
                    t = e.duration,
                    n = e.seekable;
                  return t === 1 / 0 && n.length > 0 ? n.end(n.length - 1) : t;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.player ? this.player.currentTime : null;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  if (!this.player) return null;
                  var e = this.player.buffered;
                  if (0 === e.length) return 0;
                  var t = e.end(e.length - 1),
                    n = this.getDuration();
                  return t > n ? n : t;
                },
              },
              {
                key: "getSource",
                value: function (e) {
                  var t = this.shouldUseHLS(e),
                    n = this.shouldUseDASH(e),
                    r = this.shouldUseFLV(e);
                  if (
                    !(
                      e instanceof Array ||
                      (0, i.isMediaStream)(e) ||
                      t ||
                      n ||
                      r
                    )
                  )
                    return w.test(e)
                      ? e.replace(
                          "www.dropbox.com",
                          "dl.dropboxusercontent.com"
                        )
                      : e;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.url,
                    n = e.playing,
                    r = e.loop,
                    i = e.controls,
                    a = e.muted,
                    s = e.config,
                    c = e.width,
                    l = e.height,
                    p = this.shouldUseAudio(this.props) ? "audio" : "video",
                    f = {
                      width: "auto" === c ? c : "100%",
                      height: "auto" === l ? l : "100%",
                    };
                  return o.default.createElement(
                    p,
                    u(
                      {
                        ref: this.ref,
                        src: this.getSource(t),
                        style: f,
                        preload: "auto",
                        autoPlay: n || void 0,
                        controls: i,
                        muted: a,
                        loop: r,
                      },
                      s.attributes
                    ),
                    t instanceof Array && t.map(this.renderSourceElement),
                    s.tracks.map(this.renderTrack)
                  );
                },
              },
            ]) && l(t.prototype, n),
            r && l(t, r),
            d
          );
        })(o.Component);
      (t.default = P),
        b(P, "displayName", "FilePlayer"),
        b(P, "canPlay", a.canPlay.file);
    },
    60653: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, t) {
        return (
          (l =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          l(e, t)
        );
      }
      function p(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = y(e);
          if (t) {
            var o = y(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return f(this, n);
        };
      }
      function f(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? d(e) : t;
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          y(e)
        );
      }
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var b = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && l(e, t);
        })(s, e);
        var t,
          n,
          r,
          a = p(s);
        function s() {
          var e;
          u(this, s);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            h(
              d((e = a.call.apply(a, [this].concat(n)))),
              "callPlayer",
              i.callPlayer
            ),
            h(d(e), "duration", null),
            h(d(e), "currentTime", null),
            h(d(e), "secondsLoaded", null),
            h(d(e), "mute", function () {
              e.callPlayer("mute");
            }),
            h(d(e), "unmute", function () {
              e.callPlayer("unmute");
            }),
            h(d(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (0, i.getSDK)(
                  "https://cdn.embed.ly/player-0.1.0.min.js",
                  "playerjs"
                ).then(function (e) {
                  t.iframe &&
                    ((t.player = new e.Player(t.iframe)),
                    t.player.on("ready", function () {
                      setTimeout(function () {
                        (t.player.isReady = !0),
                          t.player.setLoop(t.props.loop),
                          t.props.muted && t.player.mute(),
                          t.addListeners(t.player, t.props),
                          t.props.onReady();
                      }, 500);
                    }));
                }, this.props.onError);
              },
            },
            {
              key: "addListeners",
              value: function (e, t) {
                var n = this;
                e.on("play", t.onPlay),
                  e.on("pause", t.onPause),
                  e.on("ended", t.onEnded),
                  e.on("error", t.onError),
                  e.on("timeupdate", function (e) {
                    var t = e.duration,
                      r = e.seconds;
                    (n.duration = t), (n.currentTime = r);
                  });
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("setCurrentTime", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "setLoop",
              value: function (e) {
                this.callPlayer("setLoop", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.secondsLoaded;
              },
            },
            {
              key: "render",
              value: function () {
                return o.default.createElement("iframe", {
                  ref: this.ref,
                  src: this.props.url,
                  frameBorder: "0",
                  scrolling: "no",
                  style: { width: "100%", height: "100%" },
                  allow: "encrypted-media; autoplay; fullscreen;",
                  referrerPolicy: "no-referrer-when-downgrade",
                });
              },
            },
          ]) && c(t.prototype, n),
          r && c(t, r),
          s
        );
      })(o.Component);
      (t.default = b),
        h(b, "displayName", "Kaltura"),
        h(b, "canPlay", a.canPlay.kaltura);
    },
    72833: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t) {
        return (
          (f =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          f(e, t)
        );
      }
      function d(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var o = b(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return y(this, n);
        };
      }
      function y(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? h(e) : t;
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var m = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && f(e, t);
        })(u, e);
        var t,
          n,
          r,
          s = d(u);
        function u() {
          var e;
          l(this, u);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            g(
              h((e = s.call.apply(s, [this].concat(n)))),
              "callPlayer",
              i.callPlayer
            ),
            g(h(e), "duration", null),
            g(h(e), "currentTime", null),
            g(h(e), "secondsLoaded", null),
            g(h(e), "mute", function () {}),
            g(h(e), "unmute", function () {}),
            g(h(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (t = u),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (0, i.getSDK)(
                  "https://widget.mixcloud.com/media/js/widgetApi.js",
                  "Mixcloud"
                ).then(function (e) {
                  (t.player = e.PlayerWidget(t.iframe)),
                    t.player.ready.then(function () {
                      t.player.events.play.on(t.props.onPlay),
                        t.player.events.pause.on(t.props.onPause),
                        t.player.events.ended.on(t.props.onEnded),
                        t.player.events.error.on(t.props.error),
                        t.player.events.progress.on(function (e, n) {
                          (t.currentTime = e), (t.duration = n);
                        }),
                        t.props.onReady();
                    });
                }, this.props.onError);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seek", e);
              },
            },
            { key: "setVolume", value: function (e) {} },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.url,
                  n = e.config,
                  r = t.match(a.MATCH_URL_MIXCLOUD)[1],
                  s = (0, i.queryString)(
                    c(c({}, n.options), {}, { feed: "/".concat(r, "/") })
                  );
                return o.default.createElement("iframe", {
                  key: r,
                  ref: this.ref,
                  style: { width: "100%", height: "100%" },
                  src: "https://www.mixcloud.com/widget/iframe/?".concat(s),
                  frameBorder: "0",
                });
              },
            },
          ]),
          n && p(t.prototype, n),
          r && p(t, r),
          u
        );
      })(o.Component);
      (t.default = m),
        g(m, "displayName", "Mixcloud"),
        g(m, "canPlay", a.canPlay.mixcloud),
        g(m, "loopOnEnded", !0);
    },
    48083: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t) {
        return (
          (f =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          f(e, t)
        );
      }
      function d(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var o = b(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return y(this, n);
        };
      }
      function y(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? h(e) : t;
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var m = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && f(e, t);
        })(s, e);
        var t,
          n,
          r,
          a = d(s);
        function s() {
          var e;
          l(this, s);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            g(
              h((e = a.call.apply(a, [this].concat(n)))),
              "callPlayer",
              i.callPlayer
            ),
            g(h(e), "duration", null),
            g(h(e), "currentTime", null),
            g(h(e), "fractionLoaded", null),
            g(h(e), "mute", function () {
              e.setVolume(0);
            }),
            g(h(e), "unmute", function () {
              null !== e.props.volume && e.setVolume(e.props.volume);
            }),
            g(h(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e, t) {
                var n = this;
                (0, i.getSDK)(
                  "https://w.soundcloud.com/player/api.js",
                  "SC"
                ).then(function (r) {
                  if (n.iframe) {
                    var o = r.Widget.Events,
                      i = o.PLAY,
                      a = o.PLAY_PROGRESS,
                      s = o.PAUSE,
                      u = o.FINISH,
                      l = o.ERROR;
                    t ||
                      ((n.player = r.Widget(n.iframe)),
                      n.player.bind(i, n.props.onPlay),
                      n.player.bind(s, function () {
                        n.duration - n.currentTime < 0.05 || n.props.onPause();
                      }),
                      n.player.bind(a, function (e) {
                        (n.currentTime = e.currentPosition / 1e3),
                          (n.fractionLoaded = e.loadedProgress);
                      }),
                      n.player.bind(u, function () {
                        return n.props.onEnded();
                      }),
                      n.player.bind(l, function (e) {
                        return n.props.onError(e);
                      })),
                      n.player.load(
                        e,
                        c(
                          c({}, n.props.config.options),
                          {},
                          {
                            callback: function () {
                              n.player.getDuration(function (e) {
                                (n.duration = e / 1e3), n.props.onReady();
                              });
                            },
                          }
                        )
                      );
                  }
                });
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seekTo", 1e3 * e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", 100 * e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.fractionLoaded * this.duration;
              },
            },
            {
              key: "render",
              value: function () {
                var e = {
                  width: "100%",
                  height: "100%",
                  display: this.props.display,
                };
                return o.default.createElement("iframe", {
                  ref: this.ref,
                  src: "https://w.soundcloud.com/player/?url=".concat(
                    encodeURIComponent(this.props.url)
                  ),
                  style: e,
                  frameBorder: 0,
                  allow: "autoplay",
                });
              },
            },
          ]) && p(t.prototype, n),
          r && p(t, r),
          s
        );
      })(o.Component);
      (t.default = m),
        g(m, "displayName", "SoundCloud"),
        g(m, "canPlay", a.canPlay.soundcloud),
        g(m, "loopOnEnded", !0);
    },
    74466: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e, t) {
        return (
          (l =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          l(e, t)
        );
      }
      function p(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = y(e);
          if (t) {
            var o = y(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return f(this, n);
        };
      }
      function f(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? d(e) : t;
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          y(e)
        );
      }
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var b = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && l(e, t);
        })(f, e);
        var t,
          n,
          r,
          s = p(f);
        function f() {
          var e;
          u(this, f);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            h(
              d((e = s.call.apply(s, [this].concat(n)))),
              "callPlayer",
              i.callPlayer
            ),
            h(d(e), "duration", null),
            h(d(e), "currentTime", null),
            h(d(e), "secondsLoaded", null),
            h(d(e), "mute", function () {
              e.callPlayer("mute");
            }),
            h(d(e), "unmute", function () {
              e.callPlayer("unmute");
            }),
            h(d(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (t = f),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (0, i.getSDK)(
                  "https://cdn.embed.ly/player-0.1.0.min.js",
                  "playerjs"
                ).then(function (e) {
                  t.iframe &&
                    ((t.player = new e.Player(t.iframe)),
                    t.player.setLoop(t.props.loop),
                    t.player.on("ready", t.props.onReady),
                    t.player.on("play", t.props.onPlay),
                    t.player.on("pause", t.props.onPause),
                    t.player.on("seeked", t.props.onSeek),
                    t.player.on("ended", t.props.onEnded),
                    t.player.on("error", t.props.onError),
                    t.player.on("timeupdate", function (e) {
                      var n = e.duration,
                        r = e.seconds;
                      (t.duration = n), (t.currentTime = r);
                    }),
                    t.player.on("buffered", function (e) {
                      var n = e.percent;
                      t.duration && (t.secondsLoaded = t.duration * n);
                    }),
                    t.props.muted && t.player.mute());
                }, this.props.onError);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("setCurrentTime", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", 100 * e);
              },
            },
            {
              key: "setLoop",
              value: function (e) {
                this.callPlayer("setLoop", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.secondsLoaded;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.url.match(a.MATCH_URL_STREAMABLE)[1];
                return o.default.createElement("iframe", {
                  ref: this.ref,
                  src: "https://streamable.com/o/".concat(e),
                  frameBorder: "0",
                  scrolling: "no",
                  style: { width: "100%", height: "100%" },
                  allow: "encrypted-media; autoplay; fullscreen;",
                });
              },
            },
          ]) && c(t.prototype, n),
          r && c(t, r),
          f
        );
      })(o.Component);
      (t.default = b),
        h(b, "displayName", "Streamable"),
        h(b, "canPlay", a.canPlay.streamable);
    },
    21841: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          p(e, t)
        );
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? y(e) : t;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var g = "twitch-player-",
        m = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(d, e);
          var t,
            n,
            r,
            s = f(d);
          function d() {
            var e;
            c(this, d);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              b(
                y((e = s.call.apply(s, [this].concat(n)))),
                "callPlayer",
                i.callPlayer
              ),
              b(
                y(e),
                "playerID",
                e.props.config.playerId ||
                  "".concat(g).concat((0, i.randomString)())
              ),
              b(y(e), "mute", function () {
                e.callPlayer("setMuted", !0);
              }),
              b(y(e), "unmute", function () {
                e.callPlayer("setMuted", !1);
              }),
              e
            );
          }
          return (
            (t = d),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this);
                },
              },
              {
                key: "load",
                value: function (e, t) {
                  var n = this,
                    r = this.props,
                    o = r.playsinline,
                    s = r.onError,
                    c = r.config,
                    l = r.controls,
                    p = a.MATCH_URL_TWITCH_CHANNEL.test(e),
                    f = p
                      ? e.match(a.MATCH_URL_TWITCH_CHANNEL)[1]
                      : e.match(a.MATCH_URL_TWITCH_VIDEO)[1];
                  t
                    ? p
                      ? this.player.setChannel(f)
                      : this.player.setVideo("v" + f)
                    : (0, i.getSDK)(
                        "https://player.twitch.tv/js/embed/v1.js",
                        "Twitch"
                      ).then(function (t) {
                        n.player = new t.Player(
                          n.playerID,
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? u(Object(n), !0).forEach(function (t) {
                                    b(e, t, n[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(n)
                                  )
                                : u(Object(n)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(n, t)
                                    );
                                  });
                            }
                            return e;
                          })(
                            {
                              video: p ? "" : f,
                              channel: p ? f : "",
                              height: "100%",
                              width: "100%",
                              playsinline: o,
                              autoplay: n.props.playing,
                              muted: n.props.muted,
                              controls: !!p || l,
                              time: (0, i.parseStartTime)(e),
                            },
                            c.options
                          )
                        );
                        var r = t.Player,
                          a = r.READY,
                          s = r.PLAYING,
                          d = r.PAUSE,
                          y = r.ENDED,
                          h = r.ONLINE,
                          g = r.OFFLINE,
                          m = r.SEEK;
                        n.player.addEventListener(a, n.props.onReady),
                          n.player.addEventListener(s, n.props.onPlay),
                          n.player.addEventListener(d, n.props.onPause),
                          n.player.addEventListener(y, n.props.onEnded),
                          n.player.addEventListener(m, n.props.onSeek),
                          n.player.addEventListener(h, n.props.onLoaded),
                          n.player.addEventListener(g, n.props.onLoaded);
                      }, s);
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "stop",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentTime");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  return o.default.createElement("div", {
                    style: { width: "100%", height: "100%" },
                    id: this.playerID,
                  });
                },
              },
            ]),
            n && l(t.prototype, n),
            r && l(t, r),
            d
          );
        })(o.Component);
      (t.default = m),
        b(m, "displayName", "Twitch"),
        b(m, "canPlay", a.canPlay.twitch),
        b(m, "loopOnEnded", !0);
    },
    90543: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          p(e, t)
        );
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? y(e) : t;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var g = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(d, e);
        var t,
          n,
          r,
          s = f(d);
        function d() {
          var e;
          c(this, d);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            b(
              y((e = s.call.apply(s, [this].concat(n)))),
              "callPlayer",
              i.callPlayer
            ),
            b(y(e), "mute", function () {
              e.setVolume(0);
            }),
            b(y(e), "unmute", function () {
              null !== e.props.volume && e.setVolume(e.props.volume);
            }),
            b(y(e), "ref", function (t) {
              e.container = t;
            }),
            e
          );
        }
        return (
          (t = d),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this,
                  n = this.props,
                  r = n.playing,
                  o = n.config,
                  s = n.onError,
                  c = n.onDuration,
                  l = e && e.match(a.MATCH_URL_VIDYARD)[1];
                this.player && this.stop(),
                  (0, i.getSDK)(
                    "https://play.vidyard.com/embed/v4.js",
                    "VidyardV4",
                    "onVidyardAPI"
                  ).then(function (e) {
                    t.container &&
                      (e.api.addReadyListener(function (e, n) {
                        t.player ||
                          ((t.player = n),
                          t.player.on("ready", t.props.onReady),
                          t.player.on("play", t.props.onPlay),
                          t.player.on("pause", t.props.onPause),
                          t.player.on("seek", t.props.onSeek),
                          t.player.on("playerComplete", t.props.onEnded));
                      }, l),
                      e.api.renderPlayer(
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? u(Object(n), !0).forEach(function (t) {
                                  b(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n)
                                )
                              : u(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t)
                                  );
                                });
                          }
                          return e;
                        })(
                          {
                            uuid: l,
                            container: t.container,
                            autoplay: r ? 1 : 0,
                          },
                          o.options
                        )
                      ),
                      e.api.getPlayerMetadata(l).then(function (e) {
                        (t.duration = e.length_in_seconds),
                          c(e.length_in_seconds);
                      }));
                  }, s);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            {
              key: "stop",
              value: function () {
                window.VidyardV4.api.destroyPlayer(this.player);
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seek", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "setPlaybackRate",
              value: function (e) {
                this.callPlayer("setPlaybackSpeed", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.callPlayer("currentTime");
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var e = {
                  width: "100%",
                  height: "100%",
                  display: this.props.display,
                };
                return o.default.createElement(
                  "div",
                  { style: e },
                  o.default.createElement("div", { ref: this.ref })
                );
              },
            },
          ]),
          n && l(t.prototype, n),
          r && l(t, r),
          d
        );
      })(o.Component);
      (t.default = g),
        b(g, "displayName", "Vidyard"),
        b(g, "canPlay", a.canPlay.vidyard);
    },
    74878: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          p(e, t)
        );
      }
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? y(e) : t;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var g = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(s, e);
        var t,
          n,
          r,
          a = f(s);
        function s() {
          var e;
          c(this, s);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            b(
              y((e = a.call.apply(a, [this].concat(n)))),
              "callPlayer",
              i.callPlayer
            ),
            b(y(e), "duration", null),
            b(y(e), "currentTime", null),
            b(y(e), "secondsLoaded", null),
            b(y(e), "mute", function () {
              e.setVolume(0);
            }),
            b(y(e), "unmute", function () {
              null !== e.props.volume && e.setVolume(e.props.volume);
            }),
            b(y(e), "ref", function (t) {
              e.container = t;
            }),
            e
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (this.duration = null),
                  (0, i.getSDK)(
                    "https://player.vimeo.com/api/player.js",
                    "Vimeo"
                  ).then(function (n) {
                    if (t.container) {
                      var r = t.props.config,
                        o = r.playerOptions,
                        i = r.title;
                      (t.player = new n.Player(
                        t.container,
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? u(Object(n), !0).forEach(function (t) {
                                  b(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n)
                                )
                              : u(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t)
                                  );
                                });
                          }
                          return e;
                        })(
                          {
                            url: e,
                            autoplay: t.props.playing,
                            muted: t.props.muted,
                            loop: t.props.loop,
                            playsinline: t.props.playsinline,
                            controls: t.props.controls,
                          },
                          o
                        )
                      )),
                        t.player
                          .ready()
                          .then(function () {
                            var e = t.container.querySelector("iframe");
                            (e.style.width = "100%"),
                              (e.style.height = "100%"),
                              i && (e.title = i);
                          })
                          .catch(t.props.onError),
                        t.player.on("loaded", function () {
                          t.props.onReady(), t.refreshDuration();
                        }),
                        t.player.on("play", function () {
                          t.props.onPlay(), t.refreshDuration();
                        }),
                        t.player.on("pause", t.props.onPause),
                        t.player.on("seeked", function (e) {
                          return t.props.onSeek(e.seconds);
                        }),
                        t.player.on("ended", t.props.onEnded),
                        t.player.on("error", t.props.onError),
                        t.player.on("timeupdate", function (e) {
                          var n = e.seconds;
                          t.currentTime = n;
                        }),
                        t.player.on("progress", function (e) {
                          var n = e.seconds;
                          t.secondsLoaded = n;
                        }),
                        t.player.on("bufferstart", t.props.onBuffer),
                        t.player.on("bufferend", t.props.onBufferEnd);
                    }
                  }, this.props.onError);
              },
            },
            {
              key: "refreshDuration",
              value: function () {
                var e = this;
                this.player.getDuration().then(function (t) {
                  e.duration = t;
                });
              },
            },
            {
              key: "play",
              value: function () {
                var e = this.callPlayer("play");
                e && e.catch(this.props.onError);
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            {
              key: "stop",
              value: function () {
                this.callPlayer("unload");
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("setCurrentTime", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "setLoop",
              value: function (e) {
                this.callPlayer("setLoop", e);
              },
            },
            {
              key: "setPlaybackRate",
              value: function (e) {
                this.callPlayer("setPlaybackRate", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.secondsLoaded;
              },
            },
            {
              key: "render",
              value: function () {
                var e = {
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  display: this.props.display,
                };
                return o.default.createElement("div", {
                  key: this.props.url,
                  ref: this.ref,
                  style: e,
                });
              },
            },
          ]),
          n && l(t.prototype, n),
          r && l(t, r),
          s
        );
      })(o.Component);
      (t.default = g),
        b(g, "displayName", "Vimeo"),
        b(g, "canPlay", a.canPlay.vimeo),
        b(g, "forceLoad", !0);
    },
    94671: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t) {
        return (
          (f =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          f(e, t)
        );
      }
      function d(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var o = b(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return y(this, n);
        };
      }
      function y(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? h(e) : t;
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var m = "wistia-player-",
        v = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && f(e, t);
          })(u, e);
          var t,
            n,
            r,
            s = d(u);
          function u() {
            var e;
            l(this, u);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              g(
                h((e = s.call.apply(s, [this].concat(n)))),
                "callPlayer",
                i.callPlayer
              ),
              g(
                h(e),
                "playerID",
                e.props.config.playerId ||
                  "".concat(m).concat((0, i.randomString)())
              ),
              g(h(e), "onPlay", function () {
                var t;
                return (t = e.props).onPlay.apply(t, arguments);
              }),
              g(h(e), "onPause", function () {
                var t;
                return (t = e.props).onPause.apply(t, arguments);
              }),
              g(h(e), "onSeek", function () {
                var t;
                return (t = e.props).onSeek.apply(t, arguments);
              }),
              g(h(e), "onEnded", function () {
                var t;
                return (t = e.props).onEnded.apply(t, arguments);
              }),
              g(h(e), "onPlaybackRateChange", function () {
                var t;
                return (t = e.props).onPlaybackRateChange.apply(t, arguments);
              }),
              g(h(e), "mute", function () {
                e.callPlayer("mute");
              }),
              g(h(e), "unmute", function () {
                e.callPlayer("unmute");
              }),
              e
            );
          }
          return (
            (t = u),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this);
                },
              },
              {
                key: "load",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.playing,
                    o = n.muted,
                    a = n.controls,
                    s = n.onReady,
                    u = n.config,
                    l = n.onError;
                  (0, i.getSDK)(
                    "https://fast.wistia.com/assets/external/E-v1.js",
                    "Wistia"
                  ).then(function (e) {
                    u.customControls &&
                      u.customControls.forEach(function (t) {
                        return e.defineControl(t);
                      }),
                      (window._wq = window._wq || []),
                      window._wq.push({
                        id: t.playerID,
                        options: c(
                          {
                            autoPlay: r,
                            silentAutoPlay: "allow",
                            muted: o,
                            controlsVisibleOnLoad: a,
                            fullscreenButton: a,
                            playbar: a,
                            playbackRateControl: a,
                            qualityControl: a,
                            volumeControl: a,
                            settingsControl: a,
                            smallPlayButton: a,
                          },
                          u.options
                        ),
                        onReady: function (e) {
                          (t.player = e),
                            t.unbind(),
                            t.player.bind("play", t.onPlay),
                            t.player.bind("pause", t.onPause),
                            t.player.bind("seek", t.onSeek),
                            t.player.bind("end", t.onEnded),
                            t.player.bind(
                              "playbackratechange",
                              t.onPlaybackRateChange
                            ),
                            s();
                        },
                      });
                  }, l);
                },
              },
              {
                key: "unbind",
                value: function () {
                  this.player.unbind("play", this.onPlay),
                    this.player.unbind("pause", this.onPause),
                    this.player.unbind("seek", this.onSeek),
                    this.player.unbind("end", this.onEnded),
                    this.player.unbind(
                      "playbackratechange",
                      this.onPlaybackRateChange
                    );
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              {
                key: "stop",
                value: function () {
                  this.unbind(), this.callPlayer("remove");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("time", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("volume", e);
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  this.callPlayer("playbackRate", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("duration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("time");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.url,
                    t = e && e.match(a.MATCH_URL_WISTIA)[1],
                    n = "wistia_embed wistia_async_".concat(t);
                  return o.default.createElement("div", {
                    id: this.playerID,
                    key: t,
                    className: n,
                    style: { width: "100%", height: "100%" },
                  });
                },
              },
            ]),
            n && p(t.prototype, n),
            r && p(t, r),
            u
          );
        })(o.Component);
      (t.default = v),
        g(v, "displayName", "Wistia"),
        g(v, "canPlay", a.canPlay.wistia),
        g(v, "loopOnEnded", !0);
    },
    43928: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(2784)),
        i = n(43756),
        a = n(85299);
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              "undefined" === typeof Symbol ||
              !(Symbol.iterator in Object(e))
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (u) {
              (o = !0), (i = u);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return p(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return p(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function y(e, t) {
        return (
          (y =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          y(e, t)
        );
      }
      function h(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = m(e);
          if (t) {
            var o = m(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return b(this, n);
        };
      }
      function b(e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? g(e) : t;
      }
      function g(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          m(e)
        );
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var w = "YT",
        O = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,
        P = /user\/([a-zA-Z0-9_-]+)\/?/,
        k = /youtube-nocookie\.com/,
        S = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && y(e, t);
          })(u, e);
          var t,
            n,
            r,
            s = h(u);
          function u() {
            var e;
            f(this, u);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              v(
                g((e = s.call.apply(s, [this].concat(n)))),
                "callPlayer",
                i.callPlayer
              ),
              v(g(e), "parsePlaylist", function (t) {
                return t instanceof Array
                  ? { listType: "playlist", playlist: t.map(e.getID).join(",") }
                  : O.test(t)
                  ? {
                      listType: "playlist",
                      list: l(t.match(O), 2)[1].replace(/^UC/, "UU"),
                    }
                  : P.test(t)
                  ? { listType: "user_uploads", list: l(t.match(P), 2)[1] }
                  : {};
              }),
              v(g(e), "onStateChange", function (t) {
                var n = t.data,
                  r = e.props,
                  o = r.onPlay,
                  i = r.onPause,
                  a = r.onBuffer,
                  s = r.onBufferEnd,
                  u = r.onEnded,
                  c = r.onReady,
                  l = r.loop,
                  p = r.config,
                  f = p.playerVars,
                  d = p.onUnstarted,
                  y = window.YT.PlayerState,
                  h = y.UNSTARTED,
                  b = y.PLAYING,
                  g = y.PAUSED,
                  m = y.BUFFERING,
                  v = y.ENDED,
                  w = y.CUED;
                if (
                  (n === h && d(),
                  n === b && (o(), s()),
                  n === g && i(),
                  n === m && a(),
                  n === v)
                ) {
                  var O = !!e.callPlayer("getPlaylist");
                  l && !O && (f.start ? e.seekTo(f.start) : e.play()), u();
                }
                n === w && c();
              }),
              v(g(e), "mute", function () {
                e.callPlayer("mute");
              }),
              v(g(e), "unmute", function () {
                e.callPlayer("unMute");
              }),
              v(g(e), "ref", function (t) {
                e.container = t;
              }),
              e
            );
          }
          return (
            (t = u),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this);
                },
              },
              {
                key: "getID",
                value: function (e) {
                  return !e || e instanceof Array || O.test(e)
                    ? null
                    : e.match(a.MATCH_URL_YOUTUBE)[1];
                },
              },
              {
                key: "load",
                value: function (e, t) {
                  var n = this,
                    r = this.props,
                    o = r.playing,
                    a = r.muted,
                    s = r.playsinline,
                    u = r.controls,
                    l = r.loop,
                    p = r.config,
                    f = r.onError,
                    d = p.playerVars,
                    y = p.embedOptions,
                    h = this.getID(e);
                  if (t)
                    return O.test(e) || P.test(e) || e instanceof Array
                      ? void this.player.loadPlaylist(this.parsePlaylist(e))
                      : void this.player.cueVideoById({
                          videoId: h,
                          startSeconds: (0, i.parseStartTime)(e) || d.start,
                          endSeconds: (0, i.parseEndTime)(e) || d.end,
                        });
                  (0, i.getSDK)(
                    "https://www.youtube.com/iframe_api",
                    w,
                    "onYouTubeIframeAPIReady",
                    function (e) {
                      return e.loaded;
                    }
                  ).then(function (t) {
                    n.container &&
                      (n.player = new t.Player(
                        n.container,
                        c(
                          {
                            width: "100%",
                            height: "100%",
                            videoId: h,
                            playerVars: c(
                              c(
                                {
                                  autoplay: o ? 1 : 0,
                                  mute: a ? 1 : 0,
                                  controls: u ? 1 : 0,
                                  start: (0, i.parseStartTime)(e),
                                  end: (0, i.parseEndTime)(e),
                                  origin: window.location.origin,
                                  playsinline: s ? 1 : 0,
                                },
                                n.parsePlaylist(e)
                              ),
                              d
                            ),
                            events: {
                              onReady: function () {
                                l && n.player.setLoop(!0), n.props.onReady();
                              },
                              onPlaybackRateChange: function (e) {
                                return n.props.onPlaybackRateChange(e.data);
                              },
                              onStateChange: n.onStateChange,
                              onError: function (e) {
                                return f(e.data);
                              },
                            },
                            host: k.test(e)
                              ? "https://www.youtube-nocookie.com"
                              : void 0,
                          },
                          y
                        )
                      ));
                  }, f),
                    y.events &&
                      console.warn(
                        "Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause"
                      );
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("playVideo");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pauseVideo");
                },
              },
              {
                key: "stop",
                value: function () {
                  document.body.contains(this.callPlayer("getIframe")) &&
                    this.callPlayer("stopVideo");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seekTo", e),
                    this.props.playing || this.pause();
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", 100 * e);
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  this.callPlayer("setPlaybackRate", e);
                },
              },
              {
                key: "setLoop",
                value: function (e) {
                  this.callPlayer("setLoop", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentTime");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return (
                    this.callPlayer("getVideoLoadedFraction") *
                    this.getDuration()
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = {
                    width: "100%",
                    height: "100%",
                    display: this.props.display,
                  };
                  return o.default.createElement(
                    "div",
                    { style: e },
                    o.default.createElement("div", { ref: this.ref })
                  );
                },
              },
            ]) && d(t.prototype, n),
            r && d(t, r),
            u
          );
        })(o.Component);
      (t.default = S),
        v(S, "displayName", "YouTube"),
        v(S, "canPlay", a.canPlay.youtube);
    },
    43843: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(2784),
        o = n(43756),
        i = n(85299);
      function a(e) {
        return (
          (a =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          a(e)
        );
      }
      function s() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== a(e) && "function" !== typeof e))
          return { default: e };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(n, o, i)
              : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      var c = [
        {
          key: "youtube",
          name: "YouTube",
          canPlay: i.canPlay.youtube,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(43928));
            });
          }),
        },
        {
          key: "soundcloud",
          name: "SoundCloud",
          canPlay: i.canPlay.soundcloud,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(48083));
            });
          }),
        },
        {
          key: "vimeo",
          name: "Vimeo",
          canPlay: i.canPlay.vimeo,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(74878));
            });
          }),
        },
        {
          key: "facebook",
          name: "Facebook",
          canPlay: i.canPlay.facebook,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(2607));
            });
          }),
        },
        {
          key: "streamable",
          name: "Streamable",
          canPlay: i.canPlay.streamable,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(74466));
            });
          }),
        },
        {
          key: "wistia",
          name: "Wistia",
          canPlay: i.canPlay.wistia,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(94671));
            });
          }),
        },
        {
          key: "twitch",
          name: "Twitch",
          canPlay: i.canPlay.twitch,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(21841));
            });
          }),
        },
        {
          key: "dailymotion",
          name: "DailyMotion",
          canPlay: i.canPlay.dailymotion,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(45575));
            });
          }),
        },
        {
          key: "mixcloud",
          name: "Mixcloud",
          canPlay: i.canPlay.mixcloud,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(72833));
            });
          }),
        },
        {
          key: "vidyard",
          name: "Vidyard",
          canPlay: i.canPlay.vidyard,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(90543));
            });
          }),
        },
        {
          key: "kaltura",
          name: "Kaltura",
          canPlay: i.canPlay.kaltura,
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(60653));
            });
          }),
        },
        {
          key: "file",
          name: "FilePlayer",
          canPlay: i.canPlay.file,
          canEnablePIP: function (e) {
            return (
              i.canPlay.file(e) &&
              (document.pictureInPictureEnabled ||
                (0, o.supportsWebKitPresentationMode)()) &&
              !i.AUDIO_EXTENSIONS.test(e)
            );
          },
          lazyPlayer: (0, r.lazy)(function () {
            return Promise.resolve().then(function () {
              return u(n(86734));
            });
          }),
        },
      ];
      t.default = c;
    },
    78313: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultProps = t.propTypes = void 0);
      var r,
        o = (r = n(13980)) && r.__esModule ? r : { default: r };
      var i = o.default.string,
        a = o.default.bool,
        s = o.default.number,
        u = o.default.array,
        c = o.default.oneOfType,
        l = o.default.shape,
        p = o.default.object,
        f = o.default.func,
        d = o.default.node,
        y = {
          url: c([i, u, p]),
          playing: a,
          loop: a,
          controls: a,
          volume: s,
          muted: a,
          playbackRate: s,
          width: c([i, s]),
          height: c([i, s]),
          style: p,
          progressInterval: s,
          playsinline: a,
          pip: a,
          stopOnUnmount: a,
          light: c([a, i]),
          playIcon: d,
          previewTabIndex: s,
          fallback: d,
          oEmbedUrl: i,
          wrapper: c([i, f, l({ render: f.isRequired })]),
          config: l({
            soundcloud: l({ options: p }),
            youtube: l({ playerVars: p, embedOptions: p, onUnstarted: f }),
            facebook: l({ appId: i, version: i, playerId: i, attributes: p }),
            dailymotion: l({ params: p }),
            vimeo: l({ playerOptions: p, title: i }),
            file: l({
              attributes: p,
              tracks: u,
              forceVideo: a,
              forceAudio: a,
              forceHLS: a,
              forceDASH: a,
              forceFLV: a,
              hlsOptions: p,
              hlsVersion: i,
              dashVersion: i,
              flvVersion: i,
            }),
            wistia: l({ options: p, playerId: i, customControls: u }),
            mixcloud: l({ options: p }),
            twitch: l({ options: p, playerId: i }),
            vidyard: l({ options: p }),
          }),
          onReady: f,
          onStart: f,
          onPlay: f,
          onPause: f,
          onBuffer: f,
          onBufferEnd: f,
          onEnded: f,
          onError: f,
          onDuration: f,
          onSeek: f,
          onPlaybackRateChange: f,
          onProgress: f,
          onClickPreview: f,
          onEnablePIP: f,
          onDisablePIP: f,
        };
      t.propTypes = y;
      var h = function () {},
        b = {
          playing: !1,
          loop: !1,
          controls: !1,
          volume: null,
          muted: !1,
          playbackRate: 1,
          width: "640px",
          height: "360px",
          style: {},
          progressInterval: 1e3,
          playsinline: !1,
          pip: !1,
          stopOnUnmount: !0,
          light: !1,
          fallback: null,
          wrapper: "div",
          previewTabIndex: 0,
          oEmbedUrl: "https://noembed.com/embed?url={url}",
          config: {
            soundcloud: {
              options: {
                visual: !0,
                buying: !1,
                liking: !1,
                download: !1,
                sharing: !1,
                show_comments: !1,
                show_playcount: !1,
              },
            },
            youtube: {
              playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1,
              },
              embedOptions: {},
              onUnstarted: h,
            },
            facebook: {
              appId: "1309697205772819",
              version: "v3.3",
              playerId: null,
              attributes: {},
            },
            dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
            vimeo: {
              playerOptions: {
                autopause: !1,
                byline: !1,
                portrait: !1,
                title: !1,
              },
              title: null,
            },
            file: {
              attributes: {},
              tracks: [],
              forceVideo: !1,
              forceAudio: !1,
              forceHLS: !1,
              forceDASH: !1,
              forceFLV: !1,
              hlsOptions: {},
              hlsVersion: "1.1.4",
              dashVersion: "3.1.3",
              flvVersion: "1.5.0",
            },
            wistia: { options: {}, playerId: null, customControls: null },
            mixcloud: { options: { hide_cover: 1 } },
            twitch: { options: {}, playerId: null },
            vidyard: { options: {} },
          },
          onReady: h,
          onStart: h,
          onPlay: h,
          onPause: h,
          onBuffer: h,
          onBufferEnd: h,
          onEnded: h,
          onError: h,
          onDuration: h,
          onSeek: h,
          onPlaybackRateChange: h,
          onProgress: h,
          onClickPreview: h,
          onEnablePIP: h,
          onDisablePIP: h,
        };
      t.defaultProps = b;
    },
    43756: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseStartTime = function (e) {
          return f(e, u);
        }),
        (t.parseEndTime = function (e) {
          return f(e, c);
        }),
        (t.randomString = function () {
          return Math.random().toString(36).substr(2, 5);
        }),
        (t.queryString = function (e) {
          return Object.keys(e)
            .map(function (t) {
              return "".concat(t, "=").concat(e[t]);
            })
            .join("&");
        }),
        (t.getSDK = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {
                    return !0;
                  },
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : r.default,
            a = d(t);
          if (a && o(a)) return Promise.resolve(a);
          return new Promise(function (r, o) {
            if (y[e]) y[e].push({ resolve: r, reject: o });
            else {
              y[e] = [{ resolve: r, reject: o }];
              var a = function (t) {
                y[e].forEach(function (e) {
                  return e.resolve(t);
                });
              };
              if (n) {
                var s = window[n];
                window[n] = function () {
                  s && s(), a(d(t));
                };
              }
              i(e, function (r) {
                r
                  ? (y[e].forEach(function (e) {
                      return e.reject(r);
                    }),
                    (y[e] = null))
                  : n || a(d(t));
              });
            }
          });
        }),
        (t.getConfig = function (e, t) {
          return (0, o.default)(t.config, e.config);
        }),
        (t.omit = function (e) {
          for (
            var t,
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          for (
            var i = (t = []).concat.apply(t, r),
              a = {},
              s = Object.keys(e),
              u = 0,
              c = s;
            u < c.length;
            u++
          ) {
            var l = c[u];
            -1 === i.indexOf(l) && (a[l] = e[l]);
          }
          return a;
        }),
        (t.callPlayer = function (e) {
          var t;
          if (!this.player || !this.player[e]) {
            var n = "ReactPlayer: "
              .concat(this.constructor.displayName, " player could not call %c")
              .concat(e, "%c \u2013 ");
            return (
              this.player
                ? this.player[e] || (n += "The method was not available")
                : (n += "The player was not available"),
              console.warn(n, "font-weight: bold", ""),
              null
            );
          }
          for (
            var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            o[i - 1] = arguments[i];
          return (t = this.player)[e].apply(t, o);
        }),
        (t.isMediaStream = function (e) {
          return (
            "undefined" !== typeof window &&
            "undefined" !== typeof window.MediaStream &&
            e instanceof window.MediaStream
          );
        }),
        (t.isBlobUrl = function (e) {
          return /^blob:/.test(e);
        }),
        (t.supportsWebKitPresentationMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document.createElement("video"),
            t = !1 === /iPhone|iPod/.test(navigator.userAgent);
          return (
            e.webkitSupportsPresentationMode &&
            "function" === typeof e.webkitSetPresentationMode &&
            t
          );
        });
      var r = i(n(9599)),
        o = i(n(39714));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if (
              "undefined" === typeof Symbol ||
              !(Symbol.iterator in Object(e))
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (u) {
              (o = !0), (i = u);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return s(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var u = /[?&#](?:start|t)=([0-9hms]+)/,
        c = /[?&#]end=([0-9hms]+)/,
        l = /(\d+)(h|m|s)/g,
        p = /^\d+$/;
      function f(e, t) {
        if (!(e instanceof Array)) {
          var n = e.match(t);
          if (n) {
            var r = n[1];
            if (r.match(l))
              return (function (e) {
                var t = 0,
                  n = l.exec(e);
                for (; null !== n; ) {
                  var r = a(n, 3),
                    o = r[1],
                    i = r[2];
                  "h" === i && (t += 60 * parseInt(o, 10) * 60),
                    "m" === i && (t += 60 * parseInt(o, 10)),
                    "s" === i && (t += parseInt(o, 10)),
                    (n = l.exec(e));
                }
                return t;
              })(r);
            if (p.test(r)) return parseInt(r);
          }
        }
      }
      function d(e) {
        return window[e]
          ? window[e]
          : window.exports && window.exports[e]
          ? window.exports[e]
          : window.module && window.module.exports && window.module.exports[e]
          ? window.module.exports[e]
          : null;
      }
      var y = {};
    },
    13565: function (e, t, n) {
      "use strict";
      n.d(t, {
        jp: function () {
          return y;
        },
        zi: function () {
          return u;
        },
      });
      var r,
        o = n(2784);
      function i() {
        if (!document) return null;
        var e = document.createElement("style");
        e.type = "text/css";
        var t = r || n.nc;
        return t && e.setAttribute("nonce", t), e;
      }
      var a = function () {
          var e = 0,
            t = null;
          return {
            add: function (n) {
              var r, o;
              0 == e &&
                (t = i()) &&
                ((o = n),
                (r = t).styleSheet
                  ? (r.styleSheet.cssText = o)
                  : r.appendChild(document.createTextNode(o)),
                (function (e) {
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(e);
                })(t)),
                e++;
            },
            remove: function () {
              !--e &&
                t &&
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        s = "right-scroll-bar-position",
        u = "width-before-scroll-bar",
        c = { left: 0, top: 0, right: 0, gap: 0 },
        l = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        p = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" === typeof window))
            return c;
          var t = (function (e) {
              var t = window.getComputedStyle(document.body),
                n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                r = t["padding" === e ? "paddingTop" : "marginTop"],
                o = t["padding" === e ? "paddingRight" : "marginRight"];
              return [l(n), l(r), l(o)];
            })(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        f = (function () {
          var e = (function () {
            var e = a();
            return function (t, n) {
              o.useEffect(
                function () {
                  return (
                    e.add(t),
                    function () {
                      e.remove();
                    }
                  );
                },
                [t && n]
              );
            };
          })();
          return function (t) {
            var n = t.styles,
              r = t.dynamic;
            return e(n, r), null;
          };
        })(),
        d = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            c = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  body {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(c, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(c, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(s, " {\n    right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u, " {\n    margin-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(s, " .")
              .concat(s, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u, " .")
              .concat(u, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(c, "px;\n  }\n")
          );
        },
        y = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            i = void 0 === r ? "margin" : r,
            a = o.useMemo(
              function () {
                return p(i);
              },
              [i]
            );
          return o.createElement(f, {
            styles: d(a, !t, i, n ? "" : "!important"),
          });
        };
    },
    43492: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(49839)).default;
      t.Z = o;
    },
    28756: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(75993)).default;
      t.Z = o;
    },
    51257: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(40614)).default;
      t.Z = o;
    },
    60940: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(69407)).default;
      t.Z = o;
    },
    90425: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(28473)).default;
      t.Z = o;
    },
    26440: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(16275)).default;
      t.Z = o;
    },
    78808: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(38367)).default;
      t.Z = o;
    },
    102: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(75369)).default;
      t.Z = o;
    },
    47531: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(96974)).default;
      t.Z = o;
    },
    69741: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(90990)).default;
      t.Z = o;
    },
    22812: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(43811)).default;
      t.Z = o;
    },
    13722: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(26562)).default;
      t.Z = o;
    },
    56582: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(81203)).default;
      t.Z = o;
    },
    49109: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(43343)).default;
      t.Z = o;
    },
    74972: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(97288)).default;
      t.Z = o;
    },
    63117: function (e, t, n) {
      "use strict";
      var r = n(71600);
      t.Z = void 0;
      var o = r(n(28919)).default;
      t.Z = o;
    },
    69430: function (e, t) {
      "use strict";
      t.Z = void 0;
      t.Z = {
        'pre[class*="language-"]': {
          color: "#d4d4d4",
          fontSize: "13px",
          textShadow: "none",
          fontFamily:
            'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto",
          background: "#1e1e1e",
        },
        'code[class*="language-"]': {
          color: "#d4d4d4",
          fontSize: "13px",
          textShadow: "none",
          fontFamily:
            'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
          direction: "ltr",
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          lineHeight: "1.5",
          MozTabSize: "4",
          OTabSize: "4",
          tabSize: "4",
          WebkitHyphens: "none",
          MozHyphens: "none",
          msHyphens: "none",
          hyphens: "none",
        },
        'pre[class*="language-"]::selection': {
          textShadow: "none",
          background: "#264F78",
        },
        'code[class*="language-"]::selection': {
          textShadow: "none",
          background: "#264F78",
        },
        'pre[class*="language-"] *::selection': {
          textShadow: "none",
          background: "#264F78",
        },
        'code[class*="language-"] *::selection': {
          textShadow: "none",
          background: "#264F78",
        },
        ':not(pre) > code[class*="language-"]': {
          padding: ".1em .3em",
          borderRadius: ".3em",
          color: "#db4c69",
          background: "#1e1e1e",
        },
        ".namespace": { Opacity: ".7" },
        "doctype.doctype-tag": { color: "#569CD6" },
        "doctype.name": { color: "#9cdcfe" },
        comment: { color: "#6a9955" },
        prolog: { color: "#6a9955" },
        punctuation: { color: "#d4d4d4" },
        ".language-html .language-css .token.punctuation": { color: "#d4d4d4" },
        ".language-html .language-javascript .token.punctuation": {
          color: "#d4d4d4",
        },
        property: { color: "#9cdcfe" },
        tag: { color: "#569cd6" },
        boolean: { color: "#569cd6" },
        number: { color: "#b5cea8" },
        constant: { color: "#9cdcfe" },
        symbol: { color: "#b5cea8" },
        inserted: { color: "#b5cea8" },
        unit: { color: "#b5cea8" },
        selector: { color: "#d7ba7d" },
        "attr-name": { color: "#9cdcfe" },
        string: { color: "#ce9178" },
        char: { color: "#ce9178" },
        builtin: { color: "#ce9178" },
        deleted: { color: "#ce9178" },
        ".language-css .token.string.url": { textDecoration: "underline" },
        operator: { color: "#d4d4d4" },
        entity: { color: "#569cd6" },
        "operator.arrow": { color: "#569CD6" },
        atrule: { color: "#ce9178" },
        "atrule.rule": { color: "#c586c0" },
        "atrule.url": { color: "#9cdcfe" },
        "atrule.url.function": { color: "#dcdcaa" },
        "atrule.url.punctuation": { color: "#d4d4d4" },
        keyword: { color: "#569CD6" },
        "keyword.module": { color: "#c586c0" },
        "keyword.control-flow": { color: "#c586c0" },
        function: { color: "#dcdcaa" },
        "function.maybe-class-name": { color: "#dcdcaa" },
        regex: { color: "#d16969" },
        important: { color: "#569cd6" },
        italic: { fontStyle: "italic" },
        "class-name": { color: "#4ec9b0" },
        "maybe-class-name": { color: "#4ec9b0" },
        console: { color: "#9cdcfe" },
        parameter: { color: "#9cdcfe" },
        interpolation: { color: "#9cdcfe" },
        "punctuation.interpolation-punctuation": { color: "#569cd6" },
        variable: { color: "#9cdcfe" },
        "imports.maybe-class-name": { color: "#9cdcfe" },
        "exports.maybe-class-name": { color: "#9cdcfe" },
        escape: { color: "#d7ba7d" },
        "tag.punctuation": { color: "#808080" },
        cdata: { color: "#808080" },
        "attr-value": { color: "#ce9178" },
        "attr-value.punctuation": { color: "#ce9178" },
        "attr-value.punctuation.attr-equals": { color: "#d4d4d4" },
        namespace: { color: "#4ec9b0" },
        'pre[class*="language-javascript"]': { color: "#9cdcfe" },
        'code[class*="language-javascript"]': { color: "#9cdcfe" },
        'pre[class*="language-jsx"]': { color: "#9cdcfe" },
        'code[class*="language-jsx"]': { color: "#9cdcfe" },
        'pre[class*="language-typescript"]': { color: "#9cdcfe" },
        'code[class*="language-typescript"]': { color: "#9cdcfe" },
        'pre[class*="language-tsx"]': { color: "#9cdcfe" },
        'code[class*="language-tsx"]': { color: "#9cdcfe" },
        'pre[class*="language-css"]': { color: "#ce9178" },
        'code[class*="language-css"]': { color: "#ce9178" },
        'pre[class*="language-html"]': { color: "#d4d4d4" },
        'code[class*="language-html"]': { color: "#d4d4d4" },
        ".language-regex .token.anchor": { color: "#dcdcaa" },
        ".language-html .token.punctuation": { color: "#808080" },
        'pre[class*="language-"] > code[class*="language-"]': {
          position: "relative",
          zIndex: "1",
        },
        ".line-highlight.line-highlight": {
          background: "#f7ebc6",
          boxShadow: "inset 5px 0 0 #f7d87c",
          zIndex: "0",
        },
      };
    },
    82028: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return R;
        },
      });
      var r = n(31461);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" === typeof e) return o(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? o(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var a = n(25339),
        s = n(2784),
        u = n(7896);
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var p = {};
      function f(e) {
        if (0 === e.length || 1 === e.length) return e;
        var t = e.join(".");
        return (
          p[t] ||
            (p[t] = (function (e) {
              var t = e.length;
              return 0 === t || 1 === t
                ? e
                : 2 === t
                ? [
                    e[0],
                    e[1],
                    "".concat(e[0], ".").concat(e[1]),
                    "".concat(e[1], ".").concat(e[0]),
                  ]
                : 3 === t
                ? [
                    e[0],
                    e[1],
                    e[2],
                    "".concat(e[0], ".").concat(e[1]),
                    "".concat(e[0], ".").concat(e[2]),
                    "".concat(e[1], ".").concat(e[0]),
                    "".concat(e[1], ".").concat(e[2]),
                    "".concat(e[2], ".").concat(e[0]),
                    "".concat(e[2], ".").concat(e[1]),
                    "".concat(e[0], ".").concat(e[1], ".").concat(e[2]),
                    "".concat(e[0], ".").concat(e[2], ".").concat(e[1]),
                    "".concat(e[1], ".").concat(e[0], ".").concat(e[2]),
                    "".concat(e[1], ".").concat(e[2], ".").concat(e[0]),
                    "".concat(e[2], ".").concat(e[0], ".").concat(e[1]),
                    "".concat(e[2], ".").concat(e[1], ".").concat(e[0]),
                  ]
                : t >= 4
                ? [
                    e[0],
                    e[1],
                    e[2],
                    e[3],
                    "".concat(e[0], ".").concat(e[1]),
                    "".concat(e[0], ".").concat(e[2]),
                    "".concat(e[0], ".").concat(e[3]),
                    "".concat(e[1], ".").concat(e[0]),
                    "".concat(e[1], ".").concat(e[2]),
                    "".concat(e[1], ".").concat(e[3]),
                    "".concat(e[2], ".").concat(e[0]),
                    "".concat(e[2], ".").concat(e[1]),
                    "".concat(e[2], ".").concat(e[3]),
                    "".concat(e[3], ".").concat(e[0]),
                    "".concat(e[3], ".").concat(e[1]),
                    "".concat(e[3], ".").concat(e[2]),
                    "".concat(e[0], ".").concat(e[1], ".").concat(e[2]),
                    "".concat(e[0], ".").concat(e[1], ".").concat(e[3]),
                    "".concat(e[0], ".").concat(e[2], ".").concat(e[1]),
                    "".concat(e[0], ".").concat(e[2], ".").concat(e[3]),
                    "".concat(e[0], ".").concat(e[3], ".").concat(e[1]),
                    "".concat(e[0], ".").concat(e[3], ".").concat(e[2]),
                    "".concat(e[1], ".").concat(e[0], ".").concat(e[2]),
                    "".concat(e[1], ".").concat(e[0], ".").concat(e[3]),
                    "".concat(e[1], ".").concat(e[2], ".").concat(e[0]),
                    "".concat(e[1], ".").concat(e[2], ".").concat(e[3]),
                    "".concat(e[1], ".").concat(e[3], ".").concat(e[0]),
                    "".concat(e[1], ".").concat(e[3], ".").concat(e[2]),
                    "".concat(e[2], ".").concat(e[0], ".").concat(e[1]),
                    "".concat(e[2], ".").concat(e[0], ".").concat(e[3]),
                    "".concat(e[2], ".").concat(e[1], ".").concat(e[0]),
                    "".concat(e[2], ".").concat(e[1], ".").concat(e[3]),
                    "".concat(e[2], ".").concat(e[3], ".").concat(e[0]),
                    "".concat(e[2], ".").concat(e[3], ".").concat(e[1]),
                    "".concat(e[3], ".").concat(e[0], ".").concat(e[1]),
                    "".concat(e[3], ".").concat(e[0], ".").concat(e[2]),
                    "".concat(e[3], ".").concat(e[1], ".").concat(e[0]),
                    "".concat(e[3], ".").concat(e[1], ".").concat(e[2]),
                    "".concat(e[3], ".").concat(e[2], ".").concat(e[0]),
                    "".concat(e[3], ".").concat(e[2], ".").concat(e[1]),
                    ""
                      .concat(e[0], ".")
                      .concat(e[1], ".")
                      .concat(e[2], ".")
                      .concat(e[3]),
                    ""
                      .concat(e[0], ".")
                      .concat(e[1], ".")
                      .concat(e[3], ".")
                      .concat(e[2]),
                    ""
                      .concat(e[0], ".")
                      .concat(e[2], ".")
                      .concat(e[1], ".")
                      .concat(e[3]),
                    ""
                      .concat(e[0], ".")
                      .concat(e[2], ".")
                      .concat(e[3], ".")
                      .concat(e[1]),
                    ""
                      .concat(e[0], ".")
                      .concat(e[3], ".")
                      .concat(e[1], ".")
                      .concat(e[2]),
                    ""
                      .concat(e[0], ".")
                      .concat(e[3], ".")
                      .concat(e[2], ".")
                      .concat(e[1]),
                    ""
                      .concat(e[1], ".")
                      .concat(e[0], ".")
                      .concat(e[2], ".")
                      .concat(e[3]),
                    ""
                      .concat(e[1], ".")
                      .concat(e[0], ".")
                      .concat(e[3], ".")
                      .concat(e[2]),
                    ""
                      .concat(e[1], ".")
                      .concat(e[2], ".")
                      .concat(e[0], ".")
                      .concat(e[3]),
                    ""
                      .concat(e[1], ".")
                      .concat(e[2], ".")
                      .concat(e[3], ".")
                      .concat(e[0]),
                    ""
                      .concat(e[1], ".")
                      .concat(e[3], ".")
                      .concat(e[0], ".")
                      .concat(e[2]),
                    ""
                      .concat(e[1], ".")
                      .concat(e[3], ".")
                      .concat(e[2], ".")
                      .concat(e[0]),
                    ""
                      .concat(e[2], ".")
                      .concat(e[0], ".")
                      .concat(e[1], ".")
                      .concat(e[3]),
                    ""
                      .concat(e[2], ".")
                      .concat(e[0], ".")
                      .concat(e[3], ".")
                      .concat(e[1]),
                    ""
                      .concat(e[2], ".")
                      .concat(e[1], ".")
                      .concat(e[0], ".")
                      .concat(e[3]),
                    ""
                      .concat(e[2], ".")
                      .concat(e[1], ".")
                      .concat(e[3], ".")
                      .concat(e[0]),
                    ""
                      .concat(e[2], ".")
                      .concat(e[3], ".")
                      .concat(e[0], ".")
                      .concat(e[1]),
                    ""
                      .concat(e[2], ".")
                      .concat(e[3], ".")
                      .concat(e[1], ".")
                      .concat(e[0]),
                    ""
                      .concat(e[3], ".")
                      .concat(e[0], ".")
                      .concat(e[1], ".")
                      .concat(e[2]),
                    ""
                      .concat(e[3], ".")
                      .concat(e[0], ".")
                      .concat(e[2], ".")
                      .concat(e[1]),
                    ""
                      .concat(e[3], ".")
                      .concat(e[1], ".")
                      .concat(e[0], ".")
                      .concat(e[2]),
                    ""
                      .concat(e[3], ".")
                      .concat(e[1], ".")
                      .concat(e[2], ".")
                      .concat(e[0]),
                    ""
                      .concat(e[3], ".")
                      .concat(e[2], ".")
                      .concat(e[0], ".")
                      .concat(e[1]),
                    ""
                      .concat(e[3], ".")
                      .concat(e[2], ".")
                      .concat(e[1], ".")
                      .concat(e[0]),
                  ]
                : void 0;
            })(e)),
          p[t]
        );
      }
      function d(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = e.filter(function (e) {
            return "token" !== e;
          }),
          o = f(r);
        return o.reduce(function (e, t) {
          return l(l({}, e), n[t]);
        }, t);
      }
      function y(e) {
        return e.join(" ");
      }
      function h(e) {
        var t = e.node,
          n = e.stylesheet,
          r = e.style,
          o = void 0 === r ? {} : r,
          i = e.useInlineStyles,
          a = e.key,
          c = t.properties,
          p = t.type,
          f = t.tagName,
          b = t.value;
        if ("text" === p) return b;
        if (f) {
          var g,
            m = (function (e, t) {
              var n = 0;
              return function (r) {
                return (
                  (n += 1),
                  r.map(function (r, o) {
                    return h({
                      node: r,
                      stylesheet: e,
                      useInlineStyles: t,
                      key: "code-segment-".concat(n, "-").concat(o),
                    });
                  })
                );
              };
            })(n, i);
          if (i) {
            var v = Object.keys(n).reduce(function (e, t) {
                return (
                  t.split(".").forEach(function (t) {
                    e.includes(t) || e.push(t);
                  }),
                  e
                );
              }, []),
              w = c.className && c.className.includes("token") ? ["token"] : [],
              O =
                c.className &&
                w.concat(
                  c.className.filter(function (e) {
                    return !v.includes(e);
                  })
                );
            g = l(
              l({}, c),
              {},
              {
                className: y(O) || void 0,
                style: d(c.className, Object.assign({}, c.style, o), n),
              }
            );
          } else g = l(l({}, c), {}, { className: y(c.className) });
          var P = m(t.children);
          return s.createElement(f, (0, u.Z)({ key: a }, g), P);
        }
      }
      var b = [
        "language",
        "children",
        "style",
        "customStyle",
        "codeTagProps",
        "useInlineStyles",
        "showLineNumbers",
        "showInlineLineNumbers",
        "startingLineNumber",
        "lineNumberContainerStyle",
        "lineNumberStyle",
        "wrapLines",
        "wrapLongLines",
        "lineProps",
        "renderer",
        "PreTag",
        "CodeTag",
        "code",
        "astGenerator",
      ];
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var v = /\n/g;
      function w(e) {
        var t = e.codeString,
          n = e.codeStyle,
          r = e.containerStyle,
          o = void 0 === r ? { float: "left", paddingRight: "10px" } : r,
          i = e.numberStyle,
          a = void 0 === i ? {} : i,
          u = e.startingLineNumber;
        return s.createElement(
          "code",
          { style: Object.assign({}, n, o) },
          (function (e) {
            var t = e.lines,
              n = e.startingLineNumber,
              r = e.style;
            return t.map(function (e, t) {
              var o = t + n;
              return s.createElement(
                "span",
                {
                  key: "line-".concat(t),
                  className: "react-syntax-highlighter-line-number",
                  style: "function" === typeof r ? r(o) : r,
                },
                "".concat(o, "\n")
              );
            });
          })({
            lines: t.replace(/\n$/, "").split("\n"),
            style: a,
            startingLineNumber: u,
          })
        );
      }
      function O(e, t) {
        return {
          type: "element",
          tagName: "span",
          properties: {
            key: "line-number--".concat(e),
            className: [
              "comment",
              "linenumber",
              "react-syntax-highlighter-line-number",
            ],
            style: t,
          },
          children: [{ type: "text", value: e }],
        };
      }
      function P(e, t, n) {
        var r,
          o = {
            display: "inline-block",
            minWidth: ((r = n), "".concat(r.toString().length, ".25em")),
            paddingRight: "1em",
            textAlign: "right",
            userSelect: "none",
          },
          i = "function" === typeof e ? e(t) : e;
        return m(m({}, o), i);
      }
      function k(e) {
        var t = e.children,
          n = e.lineNumber,
          r = e.lineNumberStyle,
          o = e.largestLineNumber,
          i = e.showInlineLineNumbers,
          a = e.lineProps,
          s = void 0 === a ? {} : a,
          u = e.className,
          c = void 0 === u ? [] : u,
          l = e.showLineNumbers,
          p = e.wrapLongLines,
          f = "function" === typeof s ? s(n) : s;
        if (((f.className = c), n && i)) {
          var d = P(r, n, o);
          t.unshift(O(n, d));
        }
        return (
          p & l && (f.style = m(m({}, f.style), {}, { display: "flex" })),
          { type: "element", tagName: "span", properties: f, children: t }
        );
      }
      function S(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            r = 0;
          r < e.length;
          r++
        ) {
          var o = e[r];
          if ("text" === o.type)
            n.push(k({ children: [o], className: i(new Set(t)) }));
          else if (o.children) {
            var a = t.concat(o.properties.className);
            S(o.children, a).forEach(function (e) {
              return n.push(e);
            });
          }
        }
        return n;
      }
      function _(e, t, n, r, o, i, a, s, u) {
        var c,
          l = S(e.value),
          p = [],
          f = -1,
          d = 0;
        function y(e, t) {
          var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return k({
            children: e,
            lineNumber: t,
            lineNumberStyle: s,
            largestLineNumber: a,
            showInlineLineNumbers: o,
            lineProps: n,
            className: i,
            showLineNumbers: r,
            wrapLongLines: u,
          });
        }
        function h(e, t) {
          if (r && t && o) {
            var n = P(s, t, a);
            e.unshift(O(t, n));
          }
          return e;
        }
        function b(e, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return t || r.length > 0 ? y(e, n, r) : h(e, n);
        }
        for (
          var g = function () {
            var e = l[d],
              t = e.children[0].value;
            if (t.match(v)) {
              var n = t.split("\n");
              n.forEach(function (t, o) {
                var a = r && p.length + i,
                  s = { type: "text", value: "".concat(t, "\n") };
                if (0 === o) {
                  var u = b(
                    l
                      .slice(f + 1, d)
                      .concat(
                        k({ children: [s], className: e.properties.className })
                      ),
                    a
                  );
                  p.push(u);
                } else if (o === n.length - 1) {
                  var c = l[d + 1] && l[d + 1].children && l[d + 1].children[0],
                    y = { type: "text", value: "".concat(t) };
                  if (c) {
                    var h = k({
                      children: [y],
                      className: e.properties.className,
                    });
                    l.splice(d + 1, 0, h);
                  } else {
                    var g = b([y], a, e.properties.className);
                    p.push(g);
                  }
                } else {
                  var m = b([s], a, e.properties.className);
                  p.push(m);
                }
              }),
                (f = d);
            }
            d++;
          };
          d < l.length;

        )
          g();
        if (f !== l.length - 1) {
          var m = l.slice(f + 1, l.length);
          if (m && m.length) {
            var w = b(m, r && p.length + i);
            p.push(w);
          }
        }
        return t ? p : (c = []).concat.apply(c, p);
      }
      function x(e) {
        var t = e.rows,
          n = e.stylesheet,
          r = e.useInlineStyles;
        return t.map(function (e, t) {
          return h({
            node: e,
            stylesheet: n,
            useInlineStyles: r,
            key: "code-segement".concat(t),
          });
        });
      }
      function E(e) {
        return e && "undefined" !== typeof e.highlightAuto;
      }
      var j,
        A,
        T = n(92037),
        C = n.n(T),
        I =
          ((j = C()),
          (A = {}),
          function (e) {
            var t = e.language,
              n = e.children,
              o = e.style,
              i = void 0 === o ? A : o,
              a = e.customStyle,
              u = void 0 === a ? {} : a,
              c = e.codeTagProps,
              l =
                void 0 === c
                  ? {
                      className: t ? "language-".concat(t) : void 0,
                      style: m(
                        m({}, i['code[class*="language-"]']),
                        i['code[class*="language-'.concat(t, '"]')]
                      ),
                    }
                  : c,
              p = e.useInlineStyles,
              f = void 0 === p || p,
              d = e.showLineNumbers,
              y = void 0 !== d && d,
              h = e.showInlineLineNumbers,
              g = void 0 === h || h,
              v = e.startingLineNumber,
              O = void 0 === v ? 1 : v,
              P = e.lineNumberContainerStyle,
              k = e.lineNumberStyle,
              S = void 0 === k ? {} : k,
              T = e.wrapLines,
              C = e.wrapLongLines,
              I = void 0 !== C && C,
              R = e.lineProps,
              D = void 0 === R ? {} : R,
              M = e.renderer,
              L = e.PreTag,
              N = void 0 === L ? "pre" : L,
              U = e.CodeTag,
              z = void 0 === U ? "code" : U,
              F = e.code,
              H = void 0 === F ? (Array.isArray(n) ? n[0] : n) || "" : F,
              $ = e.astGenerator,
              B = (function (e, t) {
                if (null == e) return {};
                var n,
                  o,
                  i = (0, r.Z)(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (o = 0; o < a.length; o++)
                    (n = a[o]),
                      t.indexOf(n) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, n) &&
                          (i[n] = e[n]));
                }
                return i;
              })(e, b);
            $ = $ || j;
            var q = y
                ? s.createElement(w, {
                    containerStyle: P,
                    codeStyle: l.style || {},
                    numberStyle: S,
                    startingLineNumber: O,
                    codeString: H,
                  })
                : null,
              V = i.hljs ||
                i['pre[class*="language-"]'] || { backgroundColor: "#fff" },
              W = E($) ? "hljs" : "prismjs",
              Z = f
                ? Object.assign({}, B, { style: Object.assign({}, V, u) })
                : Object.assign({}, B, {
                    className: B.className
                      ? "".concat(W, " ").concat(B.className)
                      : W,
                    style: Object.assign({}, u),
                  });
            if (
              ((l.style = m(
                m({}, l.style),
                {},
                I ? { whiteSpace: "pre-wrap" } : { whiteSpace: "pre" }
              )),
              !$)
            )
              return s.createElement(N, Z, q, s.createElement(z, l, H));
            ((void 0 === T && M) || I) && (T = !0), (M = M || x);
            var G = [{ type: "text", value: H }],
              K = (function (e) {
                var t = e.astGenerator,
                  n = e.language,
                  r = e.code,
                  o = e.defaultCodeValue;
                if (E(t)) {
                  var i = (function (e, t) {
                    return -1 !== e.listLanguages().indexOf(t);
                  })(t, n);
                  return "text" === n
                    ? { value: o, language: "text" }
                    : i
                    ? t.highlight(n, r)
                    : t.highlightAuto(r);
                }
                try {
                  return n && "text" !== n
                    ? { value: t.highlight(r, n) }
                    : { value: o };
                } catch (a) {
                  return { value: o };
                }
              })({
                astGenerator: $,
                language: t,
                code: H,
                defaultCodeValue: G,
              });
            null === K.language && (K.value = G);
            var X = _(K, T, D, y, g, O, K.value.length + O, S, I);
            return s.createElement(
              N,
              Z,
              s.createElement(
                z,
                l,
                !g && q,
                M({ rows: X, stylesheet: i, useInlineStyles: f })
              )
            );
          });
      (I.registerLanguage = function (e, t) {
        return C().register(t);
      }),
        (I.alias = function (e, t) {
          return C().alias(e, t);
        });
      var R = I;
    },
    13629: function (e, t, n) {
      "use strict";
      n.d(t, {
        iD: function () {
          return i;
        },
      });
      var r = n(2784),
        o = "https://platform.twitter.com/widgets.js",
        i = function (e) {
          var t = r.useRef(null),
            i = r.useState(!0),
            a = i[0],
            s = i[1];
          return (
            r.useEffect(function () {
              var r = !0;
              return (
                n(88391)(o, "twitter-embed", function () {
                  if (window.twttr) {
                    if (r) {
                      if (!window.twttr.widgets.createTweet)
                        return void console.error(
                          "Method createTweet is not present anymore in twttr.widget api"
                        );
                      window.twttr.widgets
                        .createTweet(
                          e.tweetId,
                          null === t || void 0 === t ? void 0 : t.current,
                          e.options
                        )
                        .then(function (t) {
                          s(!1), e.onLoad && e.onLoad(t);
                        });
                    }
                  } else
                    console.error(
                      "Failure to load window.twttr, aborting load"
                    );
                }),
                function () {
                  r = !1;
                }
              );
            }, []),
            r.createElement(
              r.Fragment,
              null,
              a && r.createElement(r.Fragment, null, e.placeholder),
              r.createElement("div", { ref: t })
            )
          );
        };
    },
    6917: function (e, t, n) {
      "use strict";
      var r = n(2784),
        o = n(36883);
      t.Z = function (e, t) {
        var n = (0, r.useState)(
            (function (e, t) {
              return void 0 !== t ? t : !!o.jU && window.matchMedia(e).matches;
            })(e, t)
          ),
          i = n[0],
          a = n[1];
        return (
          (0, r.useEffect)(
            function () {
              var t = !0,
                n = window.matchMedia(e),
                r = function () {
                  t && a(!!n.matches);
                };
              return (
                n.addListener(r),
                a(n.matches),
                function () {
                  (t = !1), n.removeListener(r);
                }
              );
            },
            [e]
          ),
          i
        );
      };
    },
    47699: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(2784),
        o = function (e) {
          (0, r.useEffect)(e, []);
        },
        i = function (e) {
          var t = (0, r.useRef)(e);
          (t.current = e),
            o(function () {
              return function () {
                return t.current();
              };
            });
        },
        a = function (e) {
          var t = (0, r.useRef)(0),
            n = (0, r.useState)(e),
            o = n[0],
            a = n[1],
            s = (0, r.useCallback)(function (e) {
              cancelAnimationFrame(t.current),
                (t.current = requestAnimationFrame(function () {
                  a(e);
                }));
            }, []);
          return (
            i(function () {
              cancelAnimationFrame(t.current);
            }),
            [o, s]
          );
        };
    },
    11138: function (e, t, n) {
      "use strict";
      var r = n(2784),
        o = n(36883),
        i = n(47699);
      t.Z = function () {
        var e = (0, i.Z)(function () {
            return {
              x: o.jU ? window.pageXOffset : 0,
              y: o.jU ? window.pageYOffset : 0,
            };
          }),
          t = e[0],
          n = e[1];
        return (
          (0, r.useEffect)(function () {
            var e = function () {
              n(function (e) {
                var t = window.pageXOffset,
                  n = window.pageYOffset;
                return e.x !== t || e.y !== n ? { x: t, y: n } : e;
              });
            };
            return (
              e(),
              (0, o.on)(window, "scroll", e, { capture: !1, passive: !0 }),
              function () {
                (0, o.S1)(window, "scroll", e);
              }
            );
          }, []),
          t
        );
      };
    },
    92037: function (e, t, n) {
      "use strict";
      var r =
          "object" === typeof globalThis
            ? globalThis
            : "object" === typeof self
            ? self
            : "object" === typeof window
            ? window
            : "object" === typeof n.g
            ? n.g
            : {},
        o = (function () {
          var e = "Prism" in r,
            t = e ? r.Prism : void 0;
          return function () {
            e ? (r.Prism = t) : delete r.Prism;
            (e = void 0), (t = void 0);
          };
        })();
      r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
      var i = n(22896),
        a = n(18309),
        s = n(39399),
        u = n(26495),
        c = n(40614),
        l = n(42449),
        p = n(28473);
      o();
      var f = {}.hasOwnProperty;
      function d() {}
      d.prototype = s;
      var y = new d();
      function h(e) {
        if ("function" !== typeof e || !e.displayName)
          throw new Error("Expected `function` for `grammar`, got `" + e + "`");
        void 0 === y.languages[e.displayName] && e(y);
      }
      (e.exports = y),
        (y.highlight = function (e, t) {
          var n,
            r = s.highlight;
          if ("string" !== typeof e)
            throw new Error("Expected `string` for `value`, got `" + e + "`");
          if ("Object" === y.util.type(t)) (n = t), (t = null);
          else {
            if ("string" !== typeof t)
              throw new Error("Expected `string` for `name`, got `" + t + "`");
            if (!f.call(y.languages, t))
              throw new Error(
                "Unknown language: `" + t + "` is not registered"
              );
            n = y.languages[t];
          }
          return r.call(this, e, n, t);
        }),
        (y.register = h),
        (y.alias = function (e, t) {
          var n,
            r,
            o,
            i,
            a = y.languages,
            s = e;
          t && ((s = {})[e] = t);
          for (n in s)
            for (
              r = s[n],
                o = (r = "string" === typeof r ? [r] : r).length,
                i = -1;
              ++i < o;

            )
              a[r[i]] = a[n];
        }),
        (y.registered = function (e) {
          if ("string" !== typeof e)
            throw new Error(
              "Expected `string` for `language`, got `" + e + "`"
            );
          return f.call(y.languages, e);
        }),
        (y.listLanguages = function () {
          var e,
            t = y.languages,
            n = [];
          for (e in t) f.call(t, e) && "object" === typeof t[e] && n.push(e);
          return n;
        }),
        h(u),
        h(c),
        h(l),
        h(p),
        (y.util.encode = function (e) {
          return e;
        }),
        (y.Token.stringify = function (e, t, n) {
          var r;
          if ("string" === typeof e) return { type: "text", value: e };
          if ("Array" === y.util.type(e))
            return (function (e, t) {
              var n,
                r = [],
                o = e.length,
                i = -1;
              for (; ++i < o; )
                "" !== (n = e[i]) && null !== n && void 0 !== n && r.push(n);
              (i = -1), (o = r.length);
              for (; ++i < o; ) (n = r[i]), (r[i] = y.Token.stringify(n, t, r));
              return r;
            })(e, t);
          (r = {
            type: e.type,
            content: y.Token.stringify(e.content, t, n),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: t,
            parent: n,
          }),
            e.alias && (r.classes = r.classes.concat(e.alias));
          return (
            y.hooks.run("wrap", r),
            i(
              r.tag + "." + r.classes.join("."),
              (function (e) {
                var t;
                for (t in e) e[t] = a(e[t]);
                return e;
              })(r.attributes),
              r.content
            )
          );
        });
    },
    49839: function (e) {
      "use strict";
      function t(e) {
        !(function (e) {
          var t =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            r = {
              bash: n,
              environment: { pattern: RegExp("\\$" + t), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + t),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: r.entity },
              },
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: r.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash);
          for (
            var o = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              i = r.variable[1].inside,
              a = 0;
            a < o.length;
            a++
          )
            i[o[a]] = e.languages.bash[o[a]];
          e.languages.shell = e.languages.bash;
        })(e);
      }
      (e.exports = t), (t.displayName = "bash"), (t.aliases = ["shell"]);
    },
    42449: function (e) {
      "use strict";
      function t(e) {
        e.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        };
      }
      (e.exports = t), (t.displayName = "clike"), (t.aliases = []);
    },
    75993: function (e) {
      "use strict";
      function t(e) {
        !(function (e) {
          function t(e, t) {
            return e.replace(/<<(\d+)>>/g, function (e, n) {
              return "(?:" + t[+n] + ")";
            });
          }
          function n(e, n, r) {
            return RegExp(t(e, n), r || "");
          }
          function r(e, t) {
            for (var n = 0; n < t; n++)
              e = e.replace(/<<self>>/g, function () {
                return "(?:" + e + ")";
              });
            return e.replace(/<<self>>/g, "[^\\s\\S]");
          }
          var o =
              "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
            i = "class enum interface record struct",
            a =
              "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
            s =
              "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
          function u(e) {
            return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
          }
          var c = u(i),
            l = RegExp(u(o + " " + i + " " + a + " " + s)),
            p = u(i + " " + a + " " + s),
            f = u(o + " " + i + " " + s),
            d = r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2),
            y = r(/\((?:[^()]|<<self>>)*\)/.source, 2),
            h = /@?\b[A-Za-z_]\w*\b/.source,
            b = t(/<<0>>(?:\s*<<1>>)?/.source, [h, d]),
            g = t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [p, b]),
            m = /\[\s*(?:,\s*)*\]/.source,
            v = t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [g, m]),
            w = t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [d, y, m]),
            O = t(/\(<<0>>+(?:,<<0>>+)+\)/.source, [w]),
            P = t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [
              O,
              g,
              m,
            ]),
            k = { keyword: l, punctuation: /[<>()?,.:[\]]/ },
            S = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,
            _ = /"(?:\\.|[^\\"\r\n])*"/.source,
            x = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
          (e.languages.csharp = e.languages.extend("clike", {
            string: [
              {
                pattern: n(/(^|[^$\\])<<0>>/.source, [x]),
                lookbehind: !0,
                greedy: !0,
              },
              {
                pattern: n(/(^|[^@$\\])<<0>>/.source, [_]),
                lookbehind: !0,
                greedy: !0,
              },
            ],
            "class-name": [
              {
                pattern: n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [g]),
                lookbehind: !0,
                inside: k,
              },
              {
                pattern: n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [
                  h,
                  P,
                ]),
                lookbehind: !0,
                inside: k,
              },
              {
                pattern: n(/(\busing\s+)<<0>>(?=\s*=)/.source, [h]),
                lookbehind: !0,
              },
              {
                pattern: n(/(\b<<0>>\s+)<<1>>/.source, [c, b]),
                lookbehind: !0,
                inside: k,
              },
              {
                pattern: n(/(\bcatch\s*\(\s*)<<0>>/.source, [g]),
                lookbehind: !0,
                inside: k,
              },
              { pattern: n(/(\bwhere\s+)<<0>>/.source, [h]), lookbehind: !0 },
              {
                pattern: n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [v]),
                lookbehind: !0,
                inside: k,
              },
              {
                pattern: n(
                  /\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/
                    .source,
                  [P, f, h]
                ),
                inside: k,
              },
            ],
            keyword: l,
            number:
              /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
            operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
            punctuation: /\?\.?|::|[{}[\];(),.:]/,
          })),
            e.languages.insertBefore("csharp", "number", {
              range: { pattern: /\.\./, alias: "operator" },
            }),
            e.languages.insertBefore("csharp", "punctuation", {
              "named-parameter": {
                pattern: n(/([(,]\s*)<<0>>(?=\s*:)/.source, [h]),
                lookbehind: !0,
                alias: "punctuation",
              },
            }),
            e.languages.insertBefore("csharp", "class-name", {
              namespace: {
                pattern: n(
                  /(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/
                    .source,
                  [h]
                ),
                lookbehind: !0,
                inside: { punctuation: /\./ },
              },
              "type-expression": {
                pattern: n(
                  /(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/
                    .source,
                  [y]
                ),
                lookbehind: !0,
                alias: "class-name",
                inside: k,
              },
              "return-type": {
                pattern: n(
                  /<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/
                    .source,
                  [P, g]
                ),
                inside: k,
                alias: "class-name",
              },
              "constructor-invocation": {
                pattern: n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [P]),
                lookbehind: !0,
                inside: k,
                alias: "class-name",
              },
              "generic-method": {
                pattern: n(/<<0>>\s*<<1>>(?=\s*\()/.source, [h, d]),
                inside: {
                  function: n(/^<<0>>/.source, [h]),
                  generic: {
                    pattern: RegExp(d),
                    alias: "class-name",
                    inside: k,
                  },
                },
              },
              "type-list": {
                pattern: n(
                  /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/
                    .source,
                  [c, b, h, P, l.source, y, /\bnew\s*\(\s*\)/.source]
                ),
                lookbehind: !0,
                inside: {
                  "record-arguments": {
                    pattern: n(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [b, y]),
                    lookbehind: !0,
                    greedy: !0,
                    inside: e.languages.csharp,
                  },
                  keyword: l,
                  "class-name": { pattern: RegExp(P), greedy: !0, inside: k },
                  punctuation: /[,()]/,
                },
              },
              preprocessor: {
                pattern: /(^[\t ]*)#.*/m,
                lookbehind: !0,
                alias: "property",
                inside: {
                  directive: {
                    pattern:
                      /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                    lookbehind: !0,
                    alias: "keyword",
                  },
                },
              },
            });
          var E = _ + "|" + S,
            j = t(
              /\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/
                .source,
              [E]
            ),
            A = r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [j]), 2),
            T =
              /\b(?:assembly|event|field|method|module|param|property|return|type)\b/
                .source,
            C = t(/<<0>>(?:\s*\(<<1>>*\))?/.source, [g, A]);
          e.languages.insertBefore("csharp", "class-name", {
            attribute: {
              pattern: n(
                /((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/
                  .source,
                [T, C]
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                target: {
                  pattern: n(/^<<0>>(?=\s*:)/.source, [T]),
                  alias: "keyword",
                },
                "attribute-arguments": {
                  pattern: n(/\(<<0>>*\)/.source, [A]),
                  inside: e.languages.csharp,
                },
                "class-name": {
                  pattern: RegExp(g),
                  inside: { punctuation: /\./ },
                },
                punctuation: /[:,]/,
              },
            },
          });
          var I = /:[^}\r\n]+/.source,
            R = r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [j]), 2),
            D = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [R, I]),
            M = r(
              t(
                /[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/
                  .source,
                [E]
              ),
              2
            ),
            L = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [M, I]);
          function N(t, r) {
            return {
              interpolation: {
                pattern: n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [t]),
                lookbehind: !0,
                inside: {
                  "format-string": {
                    pattern: n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [
                      r,
                      I,
                    ]),
                    lookbehind: !0,
                    inside: { punctuation: /^:/ },
                  },
                  punctuation: /^\{|\}$/,
                  expression: {
                    pattern: /[\s\S]+/,
                    alias: "language-csharp",
                    inside: e.languages.csharp,
                  },
                },
              },
              string: /[\s\S]+/,
            };
          }
          e.languages.insertBefore("csharp", "string", {
            "interpolation-string": [
              {
                pattern: n(
                  /(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/
                    .source,
                  [D]
                ),
                lookbehind: !0,
                greedy: !0,
                inside: N(D, R),
              },
              {
                pattern: n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [
                  L,
                ]),
                lookbehind: !0,
                greedy: !0,
                inside: N(L, M),
              },
            ],
            char: { pattern: RegExp(S), greedy: !0 },
          }),
            (e.languages.dotnet = e.languages.cs = e.languages.csharp);
        })(e);
      }
      (e.exports = t),
        (t.displayName = "csharp"),
        (t.aliases = ["dotnet", "cs"]);
    },
    40614: function (e) {
      "use strict";
      function t(e) {
        !(function (e) {
          var t =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                "\\burl\\((?:" +
                  t.source +
                  "|" +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ")\\)",
                "i"
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
              },
            },
            selector: {
              pattern: RegExp(
                "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                  t.source +
                  ")*(?=\\s*\\{)"
              ),
              lookbehind: !0,
            },
            string: { pattern: t, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined("style", "css"),
            n.tag.addAttribute("style", "css"));
        })(e);
      }
      (e.exports = t), (t.displayName = "css"), (t.aliases = []);
    },
    69407: function (e) {
      "use strict";
      function t(e) {
        !(function (e) {
          var t =
              /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
            n = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,
            r = {
              pattern: RegExp(n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
              lookbehind: !0,
              inside: {
                namespace: {
                  pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                  inside: { punctuation: /\./ },
                },
                punctuation: /\./,
              },
            };
          (e.languages.java = e.languages.extend("clike", {
            string: {
              pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
              lookbehind: !0,
              greedy: !0,
            },
            "class-name": [
              r,
              {
                pattern: RegExp(n + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),
                lookbehind: !0,
                inside: r.inside,
              },
            ],
            keyword: t,
            function: [
              e.languages.clike.function,
              { pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0 },
            ],
            number:
              /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
            operator: {
              pattern:
                /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("java", "string", {
              "triple-quoted-string": {
                pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
                greedy: !0,
                alias: "string",
              },
              char: { pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: !0 },
            }),
            e.languages.insertBefore("java", "class-name", {
              annotation: {
                pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
                lookbehind: !0,
                alias: "punctuation",
              },
              generics: {
                pattern:
                  /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
                inside: {
                  "class-name": r,
                  keyword: t,
                  punctuation: /[<>(),.:]/,
                  operator: /[?&|]/,
                },
              },
              namespace: {
                pattern: RegExp(
                  /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(
                    /<keyword>/g,
                    function () {
                      return t.source;
                    }
                  )
                ),
                lookbehind: !0,
                inside: { punctuation: /\./ },
              },
            });
        })(e);
      }
      (e.exports = t), (t.displayName = "java"), (t.aliases = []);
    },
    28473: function (e) {
      "use strict";
      function t(e) {
        (e.languages.javascript = e.languages.extend("clike", {
          "class-name": [
            e.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                /NaN|Infinity/.source +
                "|" +
                /0[bB][01]+(?:_[01]+)*n?/.source +
                "|" +
                /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                "|" +
                /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                "|" +
                /\d+(?:_\d+)*n/.source +
                "|" +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                  .source +
                ")" +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
          (e.languages.javascript["class-name"][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          e.languages.insertBefore("javascript", "keyword", {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                "regex-source": {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: "language-regex",
                  inside: e.languages.regex,
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/,
              },
            },
            "function-variable": {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: "function",
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              {
                pattern:
                  /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          e.languages.insertBefore("javascript", "string", {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
            "template-string": {
              pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                  pattern:
                    /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\$\{|\}$/,
                      alias: "punctuation",
                    },
                    rest: e.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
            "string-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: "property",
            },
          }),
          e.languages.insertBefore("javascript", "operator", {
            "literal-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: "property",
            },
          }),
          e.languages.markup &&
            (e.languages.markup.tag.addInlined("script", "javascript"),
            e.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              "javascript"
            )),
          (e.languages.js = e.languages.javascript);
      }
      (e.exports = t), (t.displayName = "javascript"), (t.aliases = ["js"]);
    },
    16275: function (e) {
      "use strict";
      function t(e) {
        (e.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
          (e.languages.webmanifest = e.languages.json);
      }
      (e.exports = t), (t.displayName = "json"), (t.aliases = ["webmanifest"]);
    },
    38367: function (e) {
      "use strict";
      function t(e) {
        !(function (e) {
          var t = e.util.clone(e.languages.javascript),
            n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            o = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function i(e, t) {
            return (
              (e = e
                .replace(/<S>/g, function () {
                  return n;
                })
                .replace(/<BRACES>/g, function () {
                  return r;
                })
                .replace(/<SPREAD>/g, function () {
                  return o;
                })),
              RegExp(e, t)
            );
          }
          (o = i(o).source),
            (e.languages.jsx = e.languages.extend("markup", t)),
            (e.languages.jsx.tag.pattern = i(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (e.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (e.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (e.languages.jsx.tag.inside.comment = t.comment),
            e.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: i(/<SPREAD>/.source),
                  inside: e.languages.jsx,
                },
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              "inside",
              "special-attr",
              {
                script: {
                  pattern: i(/=<BRACES>/.source),
                  alias: "language-javascript",
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?=\{)/,
                      alias: "punctuation",
                    },
                    rest: e.languages.jsx,
                  },
                },
              },
              e.languages.jsx.tag
            );
          var a = function (e) {
              return e
                ? "string" === typeof e
                  ? e
                  : "string" === typeof e.content
                  ? e.content
                  : e.content.map(a).join("")
                : "";
            },
            s = function (t) {
              for (var n = [], r = 0; r < t.length; r++) {
                var o = t[r],
                  i = !1;
                if (
                  ("string" !== typeof o &&
                    ("tag" === o.type &&
                    o.content[0] &&
                    "tag" === o.content[0].type
                      ? "</" === o.content[0].content[0].content
                        ? n.length > 0 &&
                          n[n.length - 1].tagName ===
                            a(o.content[0].content[1]) &&
                          n.pop()
                        : "/>" === o.content[o.content.length - 1].content ||
                          n.push({
                            tagName: a(o.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : n.length > 0 &&
                        "punctuation" === o.type &&
                        "{" === o.content
                      ? n[n.length - 1].openedBraces++
                      : n.length > 0 &&
                        n[n.length - 1].openedBraces > 0 &&
                        "punctuation" === o.type &&
                        "}" === o.content
                      ? n[n.length - 1].openedBraces--
                      : (i = !0)),
                  (i || "string" === typeof o) &&
                    n.length > 0 &&
                    0 === n[n.length - 1].openedBraces)
                ) {
                  var u = a(o);
                  r < t.length - 1 &&
                    ("string" === typeof t[r + 1] ||
                      "plain-text" === t[r + 1].type) &&
                    ((u += a(t[r + 1])), t.splice(r + 1, 1)),
                    r > 0 &&
                      ("string" === typeof t[r - 1] ||
                        "plain-text" === t[r - 1].type) &&
                      ((u = a(t[r - 1]) + u), t.splice(r - 1, 1), r--),
                    (t[r] = new e.Token("plain-text", u, null, u));
                }
                o.content && "string" !== typeof o.content && s(o.content);
              }
            };
          e.hooks.add("after-tokenize", function (e) {
            ("jsx" !== e.language && "tsx" !== e.language) || s(e.tokens);
          });
        })(e);
      }
      (e.exports = t), (t.displayName = "jsx"), (t.aliases = []);
    },
    75369: function (e) {
      "use strict";
      function t(e) {
        !(function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            );
          }
          var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return r;
              }
            ),
            i =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (e.languages.markdown = e.languages.extend("markup", {})),
            e.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + o + i + "(?:" + o + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + o + i + ")(?:" + o + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(r),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + o + ")" + i + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + o + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(r),
                        alias: "important",
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: n(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              "code-snippet": {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"],
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (t) {
              ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                function (n) {
                  t !== n &&
                    (e.languages.markdown[t].inside.content.inside[n] =
                      e.languages.markdown[n]);
                }
              );
            }),
            e.hooks.add("after-tokenize", function (e) {
              ("markdown" !== e.language && "md" !== e.language) ||
                (function e(t) {
                  if (t && "string" !== typeof t)
                    for (var n = 0, r = t.length; n < r; n++) {
                      var o = t[n];
                      if ("code" === o.type) {
                        var i = o.content[1],
                          a = o.content[3];
                        if (
                          i &&
                          a &&
                          "code-language" === i.type &&
                          "code-block" === a.type &&
                          "string" === typeof i.content
                        ) {
                          var s = i.content
                              .replace(/\b#/g, "sharp")
                              .replace(/\b\+\+/g, "pp"),
                            u =
                              "language-" +
                              (s = (/[a-z][\w-]*/i.exec(s) || [
                                "",
                              ])[0].toLowerCase());
                          a.alias
                            ? "string" === typeof a.alias
                              ? (a.alias = [a.alias, u])
                              : a.alias.push(u)
                            : (a.alias = [u]);
                        }
                      } else e(o.content);
                    }
                })(e.tokens);
            }),
            e.hooks.add("wrap", function (t) {
              if ("code-block" === t.type) {
                for (var n = "", r = 0, o = t.classes.length; r < o; r++) {
                  var i = t.classes[r],
                    c = /language-(.+)/.exec(i);
                  if (c) {
                    n = c[1];
                    break;
                  }
                }
                var l = e.languages[n];
                if (l)
                  t.content = e.highlight(
                    (function (e) {
                      var t = e.replace(a, "");
                      return (t = t.replace(
                        /&(\w{1,8}|#x?[\da-f]{1,8});/gi,
                        function (e, t) {
                          var n;
                          if ("#" === (t = t.toLowerCase())[0])
                            return (
                              (n =
                                "x" === t[1]
                                  ? parseInt(t.slice(2), 16)
                                  : Number(t.slice(1))),
                              u(n)
                            );
                          var r = s[t];
                          return r || e;
                        }
                      ));
                    })(t.content.value),
                    l,
                    n
                  );
                else if (n && "none" !== n && e.plugins.autoloader) {
                  var p =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (t.attributes.id = p),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var t = document.getElementById(p);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n
                        ));
                    });
                }
              }
            });
          var a = RegExp(e.languages.markup.tag.pattern.source, "gi"),
            s = { amp: "&", lt: "<", gt: ">", quot: '"' },
            u = String.fromCodePoint || String.fromCharCode;
          e.languages.md = e.languages.markdown;
        })(e);
      }
      (e.exports = t), (t.displayName = "markdown"), (t.aliases = ["md"]);
    },
    46546: function (e) {
      "use strict";
      function t(e) {
        !(function (e) {
          function t(e, t) {
            return "___" + e.toUpperCase() + t + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (n, r, o, i) {
                if (n.language === r) {
                  var a = (n.tokenStack = []);
                  (n.code = n.code.replace(o, function (e) {
                    if ("function" === typeof i && !i(e)) return e;
                    for (
                      var o, s = a.length;
                      -1 !== n.code.indexOf((o = t(r, s)));

                    )
                      ++s;
                    return (a[s] = e), o;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r];
                  var o = 0,
                    i = Object.keys(n.tokenStack);
                  !(function a(s) {
                    for (var u = 0; u < s.length && !(o >= i.length); u++) {
                      var c = s[u];
                      if (
                        "string" === typeof c ||
                        (c.content && "string" === typeof c.content)
                      ) {
                        var l = i[o],
                          p = n.tokenStack[l],
                          f = "string" === typeof c ? c : c.content,
                          d = t(r, l),
                          y = f.indexOf(d);
                        if (y > -1) {
                          ++o;
                          var h = f.substring(0, y),
                            b = new e.Token(
                              r,
                              e.tokenize(p, n.grammar),
                              "language-" + r,
                              p
                            ),
                            g = f.substring(y + d.length),
                            m = [];
                          h && m.push.apply(m, a([h])),
                            m.push(b),
                            g && m.push.apply(m, a([g])),
                            "string" === typeof c
                              ? s.splice.apply(s, [u, 1].concat(m))
                              : (c.content = m);
                        }
                      } else c.content && a(c.content);
                    }
                    return s;
                  })(n.tokens);
                }
              },
            },
          });
        })(e);
      }
      (e.exports = t), (t.displayName = "markupTemplating"), (t.aliases = []);
    },
    26495: function (e) {
      "use strict";
      function t(e) {
        (e.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
          (e.languages.markup.tag.inside["attr-value"].inside.entity =
            e.languages.markup.entity),
          (e.languages.markup.doctype.inside["internal-subset"].inside =
            e.languages.markup),
          e.hooks.add("wrap", function (e) {
            "entity" === e.type &&
              (e.attributes.title = e.content.value.replace(/&amp;/, "&"));
          }),
          Object.defineProperty(e.languages.markup.tag, "addInlined", {
            value: function (t, n) {
              var r = {};
              (r["language-" + n] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: e.languages[n],
              }),
                (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var o = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: r,
                },
              };
              o["language-" + n] = {
                pattern: /[\s\S]+/,
                inside: e.languages[n],
              };
              var i = {};
              (i[t] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return t;
                    }
                  ),
                  "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: o,
              }),
                e.languages.insertBefore("markup", "cdata", i);
            },
          }),
          Object.defineProperty(e.languages.markup.tag, "addAttribute", {
            value: function (t, n) {
              e.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                  /(^|["'\s])/.source +
                    "(?:" +
                    t +
                    ")" +
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  "i"
                ),
                lookbehind: !0,
                inside: {
                  "attr-name": /^[^\s=]+/,
                  "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [n, "language-" + n],
                        inside: e.languages[n],
                      },
                      punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        /"|'/,
                      ],
                    },
                  },
                },
              });
            },
          }),
          (e.languages.html = e.languages.markup),
          (e.languages.mathml = e.languages.markup),
          (e.languages.svg = e.languages.markup),
          (e.languages.xml = e.languages.extend("markup", {})),
          (e.languages.ssml = e.languages.xml),
          (e.languages.atom = e.languages.xml),
          (e.languages.rss = e.languages.xml);
      }
      (e.exports = t),
        (t.displayName = "markup"),
        (t.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"]);
    },
    96974: function (e, t, n) {
      "use strict";
      var r = n(46546);
      function o(e) {
        e.register(r),
          (function (e) {
            var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
              n = [
                { pattern: /\b(?:false|true)\b/i, alias: "boolean" },
                {
                  pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
                  greedy: !0,
                  lookbehind: !0,
                },
                /\b(?:null)\b/i,
                /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
              ],
              r =
                /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
              o =
                /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
              i = /[{}\[\](),:;]/;
            e.languages.php = {
              delimiter: {
                pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                alias: "important",
              },
              comment: t,
              variable: /\$+(?:\w+\b|(?=\{))/,
              package: {
                pattern:
                  /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
              "class-name-definition": {
                pattern:
                  /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
                lookbehind: !0,
                alias: "class-name",
              },
              "function-definition": {
                pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
                lookbehind: !0,
                alias: "function",
              },
              keyword: [
                {
                  pattern:
                    /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
                  alias: "type-casting",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern:
                    /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
                  alias: "type-hint",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern:
                    /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string|void)\b/i,
                  alias: "return-type",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern:
                    /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
                  alias: "type-declaration",
                  greedy: !0,
                },
                {
                  pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
                  alias: "type-declaration",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                  alias: "static-context",
                  greedy: !0,
                },
                { pattern: /(\byield\s+)from\b/i, lookbehind: !0 },
                /\bclass\b/i,
                {
                  pattern:
                    /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
                  lookbehind: !0,
                },
              ],
              "argument-name": {
                pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
                lookbehind: !0,
              },
              "class-name": [
                {
                  pattern:
                    /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                  greedy: !0,
                  lookbehind: !0,
                },
                { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0 },
                {
                  pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                  alias: "class-name-fully-qualified",
                  greedy: !0,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                  alias: "class-name-fully-qualified",
                  greedy: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern:
                    /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                  alias: "class-name-fully-qualified",
                  greedy: !0,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                  alias: "type-declaration",
                  greedy: !0,
                },
                {
                  pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                  alias: ["class-name-fully-qualified", "type-declaration"],
                  greedy: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern: /\b[a-z_]\w*(?=\s*::)/i,
                  alias: "static-context",
                  greedy: !0,
                },
                {
                  pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                  alias: ["class-name-fully-qualified", "static-context"],
                  greedy: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                  alias: "type-hint",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                  alias: ["class-name-fully-qualified", "type-hint"],
                  greedy: !0,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                  alias: "return-type",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                  alias: ["class-name-fully-qualified", "return-type"],
                  greedy: !0,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ },
                },
              ],
              constant: n,
              function: {
                pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
              property: { pattern: /(->\s*)\w+/, lookbehind: !0 },
              number: r,
              operator: o,
              punctuation: i,
            };
            var a = {
                pattern:
                  /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
                lookbehind: !0,
                inside: e.languages.php,
              },
              s = [
                {
                  pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
                  alias: "nowdoc-string",
                  greedy: !0,
                  inside: {
                    delimiter: {
                      pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                      alias: "symbol",
                      inside: { punctuation: /^<<<'?|[';]$/ },
                    },
                  },
                },
                {
                  pattern:
                    /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                  alias: "heredoc-string",
                  greedy: !0,
                  inside: {
                    delimiter: {
                      pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                      alias: "symbol",
                      inside: { punctuation: /^<<<"?|[";]$/ },
                    },
                    interpolation: a,
                  },
                },
                {
                  pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                  alias: "backtick-quoted-string",
                  greedy: !0,
                },
                {
                  pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                  alias: "single-quoted-string",
                  greedy: !0,
                },
                {
                  pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                  alias: "double-quoted-string",
                  greedy: !0,
                  inside: { interpolation: a },
                },
              ];
            e.languages.insertBefore("php", "variable", {
              string: s,
              attribute: {
                pattern:
                  /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
                greedy: !0,
                inside: {
                  "attribute-content": {
                    pattern: /^(#\[)[\s\S]+(?=\]$)/,
                    lookbehind: !0,
                    inside: {
                      comment: t,
                      string: s,
                      "attribute-class-name": [
                        {
                          pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                          alias: "class-name",
                          greedy: !0,
                          lookbehind: !0,
                        },
                        {
                          pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                          alias: ["class-name", "class-name-fully-qualified"],
                          greedy: !0,
                          lookbehind: !0,
                          inside: { punctuation: /\\/ },
                        },
                      ],
                      constant: n,
                      number: r,
                      operator: o,
                      punctuation: i,
                    },
                  },
                  delimiter: { pattern: /^#\[|\]$/, alias: "punctuation" },
                },
              },
            }),
              e.hooks.add("before-tokenize", function (t) {
                if (/<\?/.test(t.code)) {
                  e.languages["markup-templating"].buildPlaceholders(
                    t,
                    "php",
                    /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g
                  );
                }
              }),
              e.hooks.add("after-tokenize", function (t) {
                e.languages["markup-templating"].tokenizePlaceholders(t, "php");
              });
          })(e);
      }
      (e.exports = o), (o.displayName = "php"), (o.aliases = []);
    },
    90990: function (e) {
      "use strict";
      function t(e) {
        (e.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
          "string-interpolation": {
            pattern:
              /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=\}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:False|None|True)\b/,
          number:
            /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
          operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
          (e.languages.python[
            "string-interpolation"
          ].inside.interpolation.inside.rest = e.languages.python),
          (e.languages.py = e.languages.python);
      }
      (e.exports = t), (t.displayName = "python"), (t.aliases = ["py"]);
    },
    43811: function (e) {
      "use strict";
      function t(e) {
        !(function (e) {
          (e.languages.ruby = e.languages.extend("clike", {
            comment: { pattern: /#.*|^=begin\s[\s\S]*?^=end/m, greedy: !0 },
            "class-name": {
              pattern:
                /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
              lookbehind: !0,
              inside: { punctuation: /[.\\]/ },
            },
            keyword:
              /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
            operator:
              /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
            punctuation: /[(){}[\].,;]/,
          })),
            e.languages.insertBefore("ruby", "operator", {
              "double-colon": { pattern: /::/, alias: "punctuation" },
            });
          var t = {
            pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
            lookbehind: !0,
            inside: {
              content: {
                pattern: /^(#\{)[\s\S]+(?=\}$)/,
                lookbehind: !0,
                inside: e.languages.ruby,
              },
              delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" },
            },
          };
          delete e.languages.ruby.function;
          var n =
              "(?:" +
              [
                /([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
                /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
                /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/
                  .source,
                /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source,
              ].join("|") +
              ")",
            r =
              /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/
                .source;
          e.languages.insertBefore("ruby", "keyword", {
            "regex-literal": [
              {
                pattern: RegExp(/%r/.source + n + /[egimnosux]{0,6}/.source),
                greedy: !0,
                inside: { interpolation: t, regex: /[\s\S]+/ },
              },
              {
                pattern:
                  /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
                lookbehind: !0,
                greedy: !0,
                inside: { interpolation: t, regex: /[\s\S]+/ },
              },
            ],
            variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
            symbol: [
              {
                pattern: RegExp(/(^|[^:]):/.source + r),
                lookbehind: !0,
                greedy: !0,
              },
              {
                pattern: RegExp(
                  /([\r\n{(,][ \t]*)/.source + r + /(?=:(?!:))/.source
                ),
                lookbehind: !0,
                greedy: !0,
              },
            ],
            "method-definition": {
              pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
              lookbehind: !0,
              inside: {
                function: /\b\w+$/,
                keyword: /^self\b/,
                "class-name": /^\w+/,
                punctuation: /\./,
              },
            },
          }),
            e.languages.insertBefore("ruby", "string", {
              "string-literal": [
                {
                  pattern: RegExp(/%[qQiIwWs]?/.source + n),
                  greedy: !0,
                  inside: { interpolation: t, string: /[\s\S]+/ },
                },
                {
                  pattern:
                    /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
                  greedy: !0,
                  inside: { interpolation: t, string: /[\s\S]+/ },
                },
                {
                  pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                  alias: "heredoc-string",
                  greedy: !0,
                  inside: {
                    delimiter: {
                      pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
                      inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?/ },
                    },
                    interpolation: t,
                    string: /[\s\S]+/,
                  },
                },
                {
                  pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                  alias: "heredoc-string",
                  greedy: !0,
                  inside: {
                    delimiter: {
                      pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
                      inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?'|'$/ },
                    },
                    string: /[\s\S]+/,
                  },
                },
              ],
              "command-literal": [
                {
                  pattern: RegExp(/%x/.source + n),
                  greedy: !0,
                  inside: {
                    interpolation: t,
                    command: { pattern: /[\s\S]+/, alias: "string" },
                  },
                },
                {
                  pattern:
                    /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
                  greedy: !0,
                  inside: {
                    interpolation: t,
                    command: { pattern: /[\s\S]+/, alias: "string" },
                  },
                },
              ],
            }),
            delete e.languages.ruby.string,
            e.languages.insertBefore("ruby", "number", {
              builtin:
                /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
              constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/,
            }),
            (e.languages.rb = e.languages.ruby);
        })(e);
      }
      (e.exports = t), (t.displayName = "ruby"), (t.aliases = ["rb"]);
    },
    26562: function (e) {
      "use strict";
      function t(e) {
        !(function (e) {
          (e.languages.sass = e.languages.extend("css", {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
              lookbehind: !0,
              greedy: !0,
            },
          })),
            e.languages.insertBefore("sass", "atrule", {
              "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                greedy: !0,
                inside: { atrule: /(?:@[\w-]+|[+=])/ },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
              { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore("sass", "property", {
            "variable-line": {
              pattern: /^[ \t]*\$.+/m,
              greedy: !0,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            "property-line": {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              greedy: !0,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", {
              selector: {
                pattern:
                  /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                lookbehind: !0,
                greedy: !0,
              },
            });
        })(e);
      }
      (e.exports = t), (t.displayName = "sass"), (t.aliases = []);
    },
    81203: function (e) {
      "use strict";
      function t(e) {
        (e.languages.scss = e.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern:
              /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
          e.languages.insertBefore("scss", "atrule", {
            keyword: [
              /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
              { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
            ],
          }),
          e.languages.insertBefore("scss", "important", {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/,
          }),
          e.languages.insertBefore("scss", "function", {
            "module-modifier": {
              pattern: /\b(?:as|hide|show|with)\b/i,
              alias: "keyword",
            },
            placeholder: { pattern: /%[-\w]+/, alias: "selector" },
            statement: {
              pattern: /\B!(?:default|optional)\b/i,
              alias: "keyword",
            },
            boolean: /\b(?:false|true)\b/,
            null: { pattern: /\bnull\b/, alias: "keyword" },
            operator: {
              pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
              lookbehind: !0,
            },
          }),
          (e.languages.scss.atrule.inside.rest = e.languages.scss);
      }
      (e.exports = t), (t.displayName = "scss"), (t.aliases = []);
    },
    43343: function (e, t, n) {
      "use strict";
      var r = n(38367),
        o = n(97288);
      function i(e) {
        e.register(r),
          e.register(o),
          (function (e) {
            var t = e.util.clone(e.languages.typescript);
            (e.languages.tsx = e.languages.extend("jsx", t)),
              delete e.languages.tsx.parameter,
              delete e.languages.tsx["literal-property"];
            var n = e.languages.tsx.tag;
            (n.pattern = RegExp(
              /(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")",
              n.pattern.flags
            )),
              (n.lookbehind = !0);
          })(e);
      }
      (e.exports = i), (i.displayName = "tsx"), (i.aliases = []);
    },
    97288: function (e) {
      "use strict";
      function t(e) {
        !(function (e) {
          (e.languages.typescript = e.languages.extend("javascript", {
            "class-name": {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin:
              /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            e.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete e.languages.typescript.parameter,
            delete e.languages.typescript["literal-property"];
          var t = e.languages.extend("typescript", {});
          delete t["class-name"],
            (e.languages.typescript["class-name"].inside = t),
            e.languages.insertBefore("typescript", "function", {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: { pattern: /^@/, alias: "operator" },
                  function: /^[\s\S]+/,
                },
              },
              "generic-function": {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: t,
                  },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript);
        })(e);
      }
      (e.exports = t), (t.displayName = "typescript"), (t.aliases = ["ts"]);
    },
    28919: function (e) {
      "use strict";
      function t(e) {
        !(function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r =
              "(?:" +
              n.source +
              "(?:[ \t]+" +
              t.source +
              ")?|" +
              t.source +
              "(?:[ \t]+" +
              n.source +
              ")?)",
            o =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function a(e, t) {
            t = (t || "").replace(/m/g, "") + "m";
            var n =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return r;
                })
                .replace(/<<value>>/g, function () {
                  return e;
                });
            return RegExp(n, t);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return r;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return r;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + o + "|" + i + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: a(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: a(/false|true/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: a(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: { pattern: a(i), lookbehind: !0, greedy: !0 },
            number: {
              pattern: a(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i"
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(e);
      }
      (e.exports = t), (t.displayName = "yaml"), (t.aliases = ["yml"]);
    },
    39399: function (e, t, n) {
      var r = (function (e) {
        var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
          n = 0,
          r = {},
          o = {
            manual: e.Prism && e.Prism.manual,
            disableWorkerMessageHandler:
              e.Prism && e.Prism.disableWorkerMessageHandler,
            util: {
              encode: function e(t) {
                return t instanceof i
                  ? new i(t.type, e(t.content), t.alias)
                  : Array.isArray(t)
                  ? t.map(e)
                  : t
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/\u00a0/g, " ");
              },
              type: function (e) {
                return Object.prototype.toString.call(e).slice(8, -1);
              },
              objId: function (e) {
                return (
                  e.__id || Object.defineProperty(e, "__id", { value: ++n }),
                  e.__id
                );
              },
              clone: function e(t, n) {
                var r, i;
                switch (((n = n || {}), o.util.type(t))) {
                  case "Object":
                    if (((i = o.util.objId(t)), n[i])) return n[i];
                    for (var a in ((r = {}), (n[i] = r), t))
                      t.hasOwnProperty(a) && (r[a] = e(t[a], n));
                    return r;
                  case "Array":
                    return (
                      (i = o.util.objId(t)),
                      n[i]
                        ? n[i]
                        : ((r = []),
                          (n[i] = r),
                          t.forEach(function (t, o) {
                            r[o] = e(t, n);
                          }),
                          r)
                    );
                  default:
                    return t;
                }
              },
              getLanguage: function (e) {
                for (; e; ) {
                  var n = t.exec(e.className);
                  if (n) return n[1].toLowerCase();
                  e = e.parentElement;
                }
                return "none";
              },
              setLanguage: function (e, n) {
                (e.className = e.className.replace(RegExp(t, "gi"), "")),
                  e.classList.add("language-" + n);
              },
              currentScript: function () {
                if ("undefined" === typeof document) return null;
                if ("currentScript" in document) return document.currentScript;
                try {
                  throw new Error();
                } catch (r) {
                  var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) ||
                    [])[1];
                  if (e) {
                    var t = document.getElementsByTagName("script");
                    for (var n in t) if (t[n].src == e) return t[n];
                  }
                  return null;
                }
              },
              isActive: function (e, t, n) {
                for (var r = "no-" + t; e; ) {
                  var o = e.classList;
                  if (o.contains(t)) return !0;
                  if (o.contains(r)) return !1;
                  e = e.parentElement;
                }
                return !!n;
              },
            },
            languages: {
              plain: r,
              plaintext: r,
              text: r,
              txt: r,
              extend: function (e, t) {
                var n = o.util.clone(o.languages[e]);
                for (var r in t) n[r] = t[r];
                return n;
              },
              insertBefore: function (e, t, n, r) {
                var i = (r = r || o.languages)[e],
                  a = {};
                for (var s in i)
                  if (i.hasOwnProperty(s)) {
                    if (s == t)
                      for (var u in n) n.hasOwnProperty(u) && (a[u] = n[u]);
                    n.hasOwnProperty(s) || (a[s] = i[s]);
                  }
                var c = r[e];
                return (
                  (r[e] = a),
                  o.languages.DFS(o.languages, function (t, n) {
                    n === c && t != e && (this[t] = a);
                  }),
                  a
                );
              },
              DFS: function e(t, n, r, i) {
                i = i || {};
                var a = o.util.objId;
                for (var s in t)
                  if (t.hasOwnProperty(s)) {
                    n.call(t, s, t[s], r || s);
                    var u = t[s],
                      c = o.util.type(u);
                    "Object" !== c || i[a(u)]
                      ? "Array" !== c ||
                        i[a(u)] ||
                        ((i[a(u)] = !0), e(u, n, s, i))
                      : ((i[a(u)] = !0), e(u, n, null, i));
                  }
              },
            },
            plugins: {},
            highlightAll: function (e, t) {
              o.highlightAllUnder(document, e, t);
            },
            highlightAllUnder: function (e, t, n) {
              var r = {
                callback: n,
                container: e,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
              };
              o.hooks.run("before-highlightall", r),
                (r.elements = Array.prototype.slice.apply(
                  r.container.querySelectorAll(r.selector)
                )),
                o.hooks.run("before-all-elements-highlight", r);
              for (var i, a = 0; (i = r.elements[a++]); )
                o.highlightElement(i, !0 === t, r.callback);
            },
            highlightElement: function (t, n, r) {
              var i = o.util.getLanguage(t),
                a = o.languages[i];
              o.util.setLanguage(t, i);
              var s = t.parentElement;
              s &&
                "pre" === s.nodeName.toLowerCase() &&
                o.util.setLanguage(s, i);
              var u = {
                element: t,
                language: i,
                grammar: a,
                code: t.textContent,
              };
              function c(e) {
                (u.highlightedCode = e),
                  o.hooks.run("before-insert", u),
                  (u.element.innerHTML = u.highlightedCode),
                  o.hooks.run("after-highlight", u),
                  o.hooks.run("complete", u),
                  r && r.call(u.element);
              }
              if (
                (o.hooks.run("before-sanity-check", u),
                (s = u.element.parentElement) &&
                  "pre" === s.nodeName.toLowerCase() &&
                  !s.hasAttribute("tabindex") &&
                  s.setAttribute("tabindex", "0"),
                !u.code)
              )
                return (
                  o.hooks.run("complete", u), void (r && r.call(u.element))
                );
              if ((o.hooks.run("before-highlight", u), u.grammar))
                if (n && e.Worker) {
                  var l = new Worker(o.filename);
                  (l.onmessage = function (e) {
                    c(e.data);
                  }),
                    l.postMessage(
                      JSON.stringify({
                        language: u.language,
                        code: u.code,
                        immediateClose: !0,
                      })
                    );
                } else c(o.highlight(u.code, u.grammar, u.language));
              else c(o.util.encode(u.code));
            },
            highlight: function (e, t, n) {
              var r = { code: e, grammar: t, language: n };
              if ((o.hooks.run("before-tokenize", r), !r.grammar))
                throw new Error(
                  'The language "' + r.language + '" has no grammar.'
                );
              return (
                (r.tokens = o.tokenize(r.code, r.grammar)),
                o.hooks.run("after-tokenize", r),
                i.stringify(o.util.encode(r.tokens), r.language)
              );
            },
            tokenize: function (e, t) {
              var n = t.rest;
              if (n) {
                for (var r in n) t[r] = n[r];
                delete t.rest;
              }
              var o = new u();
              return (
                c(o, o.head, e),
                s(e, o, t, o.head, 0),
                (function (e) {
                  var t = [],
                    n = e.head.next;
                  for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                  return t;
                })(o)
              );
            },
            hooks: {
              all: {},
              add: function (e, t) {
                var n = o.hooks.all;
                (n[e] = n[e] || []), n[e].push(t);
              },
              run: function (e, t) {
                var n = o.hooks.all[e];
                if (n && n.length) for (var r, i = 0; (r = n[i++]); ) r(t);
              },
            },
            Token: i,
          };
        function i(e, t, n, r) {
          (this.type = e),
            (this.content = t),
            (this.alias = n),
            (this.length = 0 | (r || "").length);
        }
        function a(e, t, n, r) {
          e.lastIndex = t;
          var o = e.exec(n);
          if (o && r && o[1]) {
            var i = o[1].length;
            (o.index += i), (o[0] = o[0].slice(i));
          }
          return o;
        }
        function s(e, t, n, r, u, p) {
          for (var f in n)
            if (n.hasOwnProperty(f) && n[f]) {
              var d = n[f];
              d = Array.isArray(d) ? d : [d];
              for (var y = 0; y < d.length; ++y) {
                if (p && p.cause == f + "," + y) return;
                var h = d[y],
                  b = h.inside,
                  g = !!h.lookbehind,
                  m = !!h.greedy,
                  v = h.alias;
                if (m && !h.pattern.global) {
                  var w = h.pattern.toString().match(/[imsuy]*$/)[0];
                  h.pattern = RegExp(h.pattern.source, w + "g");
                }
                for (
                  var O = h.pattern || h, P = r.next, k = u;
                  P !== t.tail && !(p && k >= p.reach);
                  k += P.value.length, P = P.next
                ) {
                  var S = P.value;
                  if (t.length > e.length) return;
                  if (!(S instanceof i)) {
                    var _,
                      x = 1;
                    if (m) {
                      if (!(_ = a(O, k, e, g)) || _.index >= e.length) break;
                      var E = _.index,
                        j = _.index + _[0].length,
                        A = k;
                      for (A += P.value.length; E >= A; )
                        A += (P = P.next).value.length;
                      if (((k = A -= P.value.length), P.value instanceof i))
                        continue;
                      for (
                        var T = P;
                        T !== t.tail && (A < j || "string" === typeof T.value);
                        T = T.next
                      )
                        x++, (A += T.value.length);
                      x--, (S = e.slice(k, A)), (_.index -= k);
                    } else if (!(_ = a(O, 0, S, g))) continue;
                    E = _.index;
                    var C = _[0],
                      I = S.slice(0, E),
                      R = S.slice(E + C.length),
                      D = k + S.length;
                    p && D > p.reach && (p.reach = D);
                    var M = P.prev;
                    if (
                      (I && ((M = c(t, M, I)), (k += I.length)),
                      l(t, M, x),
                      (P = c(t, M, new i(f, b ? o.tokenize(C, b) : C, v, C))),
                      R && c(t, P, R),
                      x > 1)
                    ) {
                      var L = { cause: f + "," + y, reach: D };
                      s(e, t, n, P.prev, k, L),
                        p && L.reach > p.reach && (p.reach = L.reach);
                    }
                  }
                }
              }
            }
        }
        function u() {
          var e = { value: null, prev: null, next: null },
            t = { value: null, prev: e, next: null };
          (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
        }
        function c(e, t, n) {
          var r = t.next,
            o = { value: n, prev: t, next: r };
          return (t.next = o), (r.prev = o), e.length++, o;
        }
        function l(e, t, n) {
          for (var r = t.next, o = 0; o < n && r !== e.tail; o++) r = r.next;
          (t.next = r), (r.prev = t), (e.length -= o);
        }
        if (
          ((e.Prism = o),
          (i.stringify = function e(t, n) {
            if ("string" == typeof t) return t;
            if (Array.isArray(t)) {
              var r = "";
              return (
                t.forEach(function (t) {
                  r += e(t, n);
                }),
                r
              );
            }
            var i = {
                type: t.type,
                content: e(t.content, n),
                tag: "span",
                classes: ["token", t.type],
                attributes: {},
                language: n,
              },
              a = t.alias;
            a &&
              (Array.isArray(a)
                ? Array.prototype.push.apply(i.classes, a)
                : i.classes.push(a)),
              o.hooks.run("wrap", i);
            var s = "";
            for (var u in i.attributes)
              s +=
                " " +
                u +
                '="' +
                (i.attributes[u] || "").replace(/"/g, "&quot;") +
                '"';
            return (
              "<" +
              i.tag +
              ' class="' +
              i.classes.join(" ") +
              '"' +
              s +
              ">" +
              i.content +
              "</" +
              i.tag +
              ">"
            );
          }),
          !e.document)
        )
          return e.addEventListener
            ? (o.disableWorkerMessageHandler ||
                e.addEventListener(
                  "message",
                  function (t) {
                    var n = JSON.parse(t.data),
                      r = n.language,
                      i = n.code,
                      a = n.immediateClose;
                    e.postMessage(o.highlight(i, o.languages[r], r)),
                      a && e.close();
                  },
                  !1
                ),
              o)
            : o;
        var p = o.util.currentScript();
        function f() {
          o.manual || o.highlightAll();
        }
        if (
          (p &&
            ((o.filename = p.src),
            p.hasAttribute("data-manual") && (o.manual = !0)),
          !o.manual)
        ) {
          var d = document.readyState;
          "loading" === d || ("interactive" === d && p && p.defer)
            ? document.addEventListener("DOMContentLoaded", f)
            : window.requestAnimationFrame
            ? window.requestAnimationFrame(f)
            : window.setTimeout(f, 16);
        }
        return o;
      })(
        "undefined" !== typeof window
          ? window
          : "undefined" !== typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope
          ? self
          : {}
      );
      e.exports && (e.exports = r),
        "undefined" !== typeof n.g && (n.g.Prism = r);
    },
    57245: function (e) {
      "use strict";
      e.exports = function (e, t) {
        if (((t = t.split(":")[0]), !(e = +e))) return !1;
        switch (t) {
          case "http":
          case "ws":
            return 80 !== e;
          case "https":
          case "wss":
            return 443 !== e;
          case "ftp":
            return 21 !== e;
          case "gopher":
            return 70 !== e;
          case "file":
            return !1;
        }
        return 0 !== e;
      };
    },
    1392: function (e, t, n) {
      "use strict";
      var r = n(38398);
      e.exports = function (e, t, n) {
        if (e === t) return !0;
        var o = r.parse(e, !1, !0),
          i = r.parse(t, !1, !0),
          a = 0 | o.port || ("https" === o.protocol ? 443 : 80),
          s = 0 | i.port || ("https" === i.protocol ? 443 : 80),
          u = {
            proto: o.protocol === i.protocol,
            hostname: o.hostname === i.hostname,
            port: a === s,
          };
        return u.proto && u.hostname && (u.port || n);
      };
    },
    88391: function (e, t, n) {
      var r, o, i;
      (i = function () {
        var e,
          t,
          n = document,
          r = n.getElementsByTagName("head")[0],
          o = {},
          i = {},
          a = {},
          s = {};
        function u(e, t) {
          for (var n = 0, r = e.length; n < r; ++n) if (!t(e[n])) return !1;
          return 1;
        }
        function c(e, t) {
          u(e, function (e) {
            return t(e), 1;
          });
        }
        function l(t, n, r) {
          t = t.push ? t : [t];
          var f = n && n.call,
            d = f ? n : r,
            y = f ? t.join("") : n,
            h = t.length;
          function b(e) {
            return e.call ? e() : o[e];
          }
          function g() {
            if (!--h)
              for (var e in ((o[y] = 1), d && d(), a))
                u(e.split("|"), b) && !c(a[e], b) && (a[e] = []);
          }
          return (
            setTimeout(function () {
              c(t, function t(n, r) {
                return null === n
                  ? g()
                  : (r ||
                      /^https?:\/\//.test(n) ||
                      !e ||
                      (n = -1 === n.indexOf(".js") ? e + n + ".js" : e + n),
                    s[n]
                      ? (y && (i[y] = 1),
                        2 == s[n]
                          ? g()
                          : setTimeout(function () {
                              t(n, !0);
                            }, 0))
                      : ((s[n] = 1), y && (i[y] = 1), void p(n, g)));
              });
            }, 0),
            l
          );
        }
        function p(e, o) {
          var i,
            a = n.createElement("script");
          (a.onload =
            a.onerror =
            a.onreadystatechange =
              function () {
                (a.readyState && !/^c|loade/.test(a.readyState)) ||
                  i ||
                  ((a.onload = a.onreadystatechange = null),
                  (i = 1),
                  (s[e] = 2),
                  o());
              }),
            (a.async = 1),
            (a.src = t ? e + (-1 === e.indexOf("?") ? "?" : "&") + t : e),
            r.insertBefore(a, r.lastChild);
        }
        return (
          (l.get = p),
          (l.order = function (e, t, n) {
            !(function r(o) {
              (o = e.shift()), e.length ? l(o, r) : l(o, t, n);
            })();
          }),
          (l.path = function (t) {
            e = t;
          }),
          (l.urlArgs = function (e) {
            t = e;
          }),
          (l.ready = function (e, t, n) {
            e = e.push ? e : [e];
            var r,
              i = [];
            return (
              !c(e, function (e) {
                o[e] || i.push(e);
              }) &&
              u(e, function (e) {
                return o[e];
              })
                ? t()
                : ((r = e.join("|")),
                  (a[r] = a[r] || []),
                  a[r].push(t),
                  n && n(i)),
              l
            );
          }),
          (l.done = function (e) {
            l([null], e);
          }),
          l
        );
      }),
        e.exports
          ? (e.exports = i())
          : void 0 ===
              (o = "function" === typeof (r = i) ? r.call(t, n, t, e) : r) ||
            (e.exports = o);
    },
    93113: function (e, t) {
      "use strict";
      t.Q = function (e) {
        var t = String(e || "").trim();
        return "" === t ? [] : t.split(n);
      };
      var n = /[ \t\n\r\f]+/g;
    },
    2897: function (e, t, n) {
      var r;
      !(function (o, i) {
        "use strict";
        var a = "function",
          s = "undefined",
          u = "object",
          c = "string",
          l = "major",
          p = "model",
          f = "name",
          d = "type",
          y = "vendor",
          h = "version",
          b = "architecture",
          g = "console",
          m = "mobile",
          v = "tablet",
          w = "smarttv",
          O = "wearable",
          P = "embedded",
          k = "Amazon",
          S = "Apple",
          _ = "ASUS",
          x = "BlackBerry",
          E = "Firefox",
          j = "Google",
          A = "Huawei",
          T = "LG",
          C = "Microsoft",
          I = "Motorola",
          R = "Opera",
          D = "Samsung",
          M = "Sharp",
          L = "Sony",
          N = "Xiaomi",
          U = "Zebra",
          z = "Facebook",
          F = "Chromium OS",
          H = "Mac OS",
          $ = function (e) {
            for (var t = {}, n = 0; n < e.length; n++)
              t[e[n].toUpperCase()] = e[n];
            return t;
          },
          B = function (e, t) {
            return typeof e === c && -1 !== q(t).indexOf(q(e));
          },
          q = function (e) {
            return e.toLowerCase();
          },
          V = function (e, t) {
            if (typeof e === c)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 350)
              );
          },
          W = function (e, t) {
            for (var n, r, o, s, c, l, p = 0; p < t.length && !c; ) {
              var f = t[p],
                d = t[p + 1];
              for (n = r = 0; n < f.length && !c && f[n]; )
                if ((c = f[n++].exec(e)))
                  for (o = 0; o < d.length; o++)
                    (l = c[++r]),
                      typeof (s = d[o]) === u && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, l))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== a || (s[1].exec && s[1].test)
                            ? (this[s[0]] = l ? l.replace(s[1], s[2]) : i)
                            : (this[s[0]] = l ? s[1].call(this, l, s[2]) : i)
                          : 4 === s.length &&
                            (this[s[0]] = l
                              ? s[3].call(this, l.replace(s[1], s[2]))
                              : i)
                        : (this[s] = l || i);
              p += 2;
            }
          },
          Z = function (e, t) {
            for (var n in t)
              if (typeof t[n] === u && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++)
                  if (B(t[n][r], e)) return "?" === n ? i : n;
              } else if (B(t[n], e)) return "?" === n ? i : n;
            return e;
          },
          G = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          K = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [h, [f, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [h, [f, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [f, h],
              [/opios[\/ ]+([\w\.]+)/i],
              [h, [f, "Opera Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [h, [f, R]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [f, h],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [h, [f, "UCBrowser"]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
              [h, [f, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [h, [f, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [h, [f, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [h, [f, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [h, [f, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[f, /(.+)/, "$1 Secure Browser"], h],
              [/\bfocus\/([\w\.]+)/i],
              [h, [f, "Firefox Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [h, [f, "Opera Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [h, [f, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [h, [f, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [h, [f, "Opera Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [h, [f, "MIUI Browser"]],
              [/fxios\/([-\w\.]+)/i],
              [h, [f, E]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[f, "360 Browser"]],
              [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
              [[f, /(.+)/, "$1 Browser"], h],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[f, /_/g, " "], h],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [f, h],
              [
                /(metasr)[\/ ]?([\w\.]+)/i,
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i,
              ],
              [f],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[f, z], h],
              [
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i,
              ],
              [f, h],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [h, [f, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [h, [f, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [h, [f, "Chrome Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[f, "Chrome WebView"], h],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [h, [f, "Android Browser"]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [f, h],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [h, [f, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [h, f],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                f,
                [
                  h,
                  Z,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [f, h],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[f, "Netscape"], h],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [h, [f, "Firefox Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
                /panasonic;(viera)/i,
              ],
              [f, h],
              [/(cobalt)\/([\w\.]+)/i],
              [f, [h, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[b, "amd64"]],
              [/(ia32(?=;))/i],
              [[b, q]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[b, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[b, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[b, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[b, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[b, /ower/, "", q]],
              [/(sun4\w)[;\)]/i],
              [[b, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[b, q]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [p, [y, D], [d, v]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [p, [y, D], [d, m]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [p, [y, S], [d, m]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [p, [y, S], [d, v]],
              [/(macintosh);/i],
              [p, [y, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [p, [y, M], [d, m]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [p, [y, A], [d, v]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [p, [y, A], [d, m]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [p, /_/g, " "],
                [y, N],
                [d, m],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [p, /_/g, " "],
                [y, N],
                [d, v],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [p, [y, "OPPO"], [d, m]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [p, [y, "Vivo"], [d, m]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [p, [y, "Realme"], [d, m]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [p, [y, I], [d, m]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [p, [y, I], [d, v]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [p, [y, T], [d, v]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [p, [y, T], [d, m]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [p, [y, "Lenovo"], [d, v]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [p, /_/g, " "],
                [y, "Nokia"],
                [d, m],
              ],
              [/(pixel c)\b/i],
              [p, [y, j], [d, v]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [p, [y, j], [d, m]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [p, [y, L], [d, m]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [p, "Xperia Tablet"],
                [y, L],
                [d, v],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [p, [y, "OnePlus"], [d, m]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [p, [y, k], [d, v]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [p, /(.+)/g, "Fire Phone $1"],
                [y, k],
                [d, m],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [p, y, [d, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [p, [y, x], [d, m]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [p, [y, _], [d, v]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [p, [y, _], [d, m]],
              [/(nexus 9)/i],
              [p, [y, "HTC"], [d, v]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [y, [p, /_/g, " "], [d, m]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [p, [y, "Acer"], [d, v]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [p, [y, "Meizu"], [d, m]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [y, p, [d, m]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [y, p, [d, v]],
              [/(surface duo)/i],
              [p, [y, C], [d, v]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [p, [y, "Fairphone"], [d, m]],
              [/(u304aa)/i],
              [p, [y, "AT&T"], [d, m]],
              [/\bsie-(\w*)/i],
              [p, [y, "Siemens"], [d, m]],
              [/\b(rct\w+) b/i],
              [p, [y, "RCA"], [d, v]],
              [/\b(venue[\d ]{2,7}) b/i],
              [p, [y, "Dell"], [d, v]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [p, [y, "Verizon"], [d, v]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [p, [y, "Barnes & Noble"], [d, v]],
              [/\b(tm\d{3}\w+) b/i],
              [p, [y, "NuVision"], [d, v]],
              [/\b(k88) b/i],
              [p, [y, "ZTE"], [d, v]],
              [/\b(nx\d{3}j) b/i],
              [p, [y, "ZTE"], [d, m]],
              [/\b(gen\d{3}) b.+49h/i],
              [p, [y, "Swiss"], [d, m]],
              [/\b(zur\d{3}) b/i],
              [p, [y, "Swiss"], [d, v]],
              [/\b((zeki)?tb.*\b) b/i],
              [p, [y, "Zeki"], [d, v]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[y, "Dragon Touch"], p, [d, v]],
              [/\b(ns-?\w{0,9}) b/i],
              [p, [y, "Insignia"], [d, v]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [p, [y, "NextBook"], [d, v]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[y, "Voice"], p, [d, m]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[y, "LvTel"], p, [d, m]],
              [/\b(ph-1) /i],
              [p, [y, "Essential"], [d, m]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [p, [y, "Envizen"], [d, v]],
              [/\b(trio[-\w\. ]+) b/i],
              [p, [y, "MachSpeed"], [d, v]],
              [/\btu_(1491) b/i],
              [p, [y, "Rotor"], [d, v]],
              [/(shield[\w ]+) b/i],
              [p, [y, "Nvidia"], [d, v]],
              [/(sprint) (\w+)/i],
              [y, p, [d, m]],
              [/(kin\.[onetw]{3})/i],
              [
                [p, /\./g, " "],
                [y, C],
                [d, m],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [p, [y, U], [d, v]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [p, [y, U], [d, m]],
              [/smart-tv.+(samsung)/i],
              [y, [d, w]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [p, /^/, "SmartTV"],
                [y, D],
                [d, w],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [y, T],
                [d, w],
              ],
              [/(apple) ?tv/i],
              [y, [p, "Apple TV"], [d, w]],
              [/crkey/i],
              [
                [p, "Chromecast"],
                [y, j],
                [d, w],
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [p, [y, k], [d, w]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [p, [y, M], [d, w]],
              [/(bravia[\w ]+)( bui|\))/i],
              [p, [y, L], [d, w]],
              [/(mitv-\w{5}) bui/i],
              [p, [y, N], [d, w]],
              [/Hbbtv.*(technisat) (.*);/i],
              [y, p, [d, w]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [y, V],
                [p, V],
                [d, w],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[d, w]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [y, p, [d, g]],
              [/droid.+; (shield) bui/i],
              [p, [y, "Nvidia"], [d, g]],
              [/(playstation [345portablevi]+)/i],
              [p, [y, L], [d, g]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [p, [y, C], [d, g]],
              [/((pebble))app/i],
              [y, p, [d, O]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [p, [y, S], [d, O]],
              [/droid.+; (glass) \d/i],
              [p, [y, j], [d, O]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [p, [y, U], [d, O]],
              [/(quest( 2| pro)?)/i],
              [p, [y, z], [d, O]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [y, [d, P]],
              [/(aeobc)\b/i],
              [p, [y, k], [d, P]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [p, [d, m]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [p, [d, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[d, v]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[d, m]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [p, [y, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [h, [f, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [h, [f, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [f, h],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [h, f],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [f, h],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [f, [h, Z, G]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [f, "Windows"],
                [h, Z, G],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /ios;fbsv\/([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [h, /_/g, "."],
                [f, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [f, H],
                [h, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [h, f],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [f, h],
              [/\(bb(10);/i],
              [h, [f, x]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [h, [f, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [h, [f, "Firefox OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [h, [f, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [h, [f, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [h, [f, "Chromecast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[f, F], h],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [f, h],
              [/(sunos) ?([\w\.\d]*)/i],
              [[f, "Solaris"], h],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [f, h],
            ],
          },
          X = function (e, t) {
            if ((typeof e === u && ((t = e), (e = i)), !(this instanceof X)))
              return new X(e, t).getResult();
            var n = typeof o !== s && o.navigator ? o.navigator : i,
              r = e || (n && n.userAgent ? n.userAgent : ""),
              l = n && n.userAgentData ? n.userAgentData : i,
              p = t
                ? (function (e, t) {
                    var n = {};
                    for (var r in e)
                      t[r] && t[r].length % 2 === 0
                        ? (n[r] = t[r].concat(e[r]))
                        : (n[r] = e[r]);
                    return n;
                  })(K, t)
                : K,
              f = n && n.userAgent == r;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t.name = i),
                  (t.version = i),
                  W.call(t, r, p.browser),
                  (t.major =
                    typeof (e = t.version) === c
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : i),
                  f &&
                    n &&
                    n.brave &&
                    typeof n.brave.isBrave == a &&
                    (t.name = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e.architecture = i), W.call(e, r, p.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e.vendor = i),
                  (e.model = i),
                  (e.type = i),
                  W.call(e, r, p.device),
                  f && !e.type && l && l.mobile && (e.type = m),
                  f &&
                    "Macintosh" == e.model &&
                    n &&
                    typeof n.standalone !== s &&
                    n.maxTouchPoints &&
                    n.maxTouchPoints > 2 &&
                    ((e.model = "iPad"), (e.type = v)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e.name = i), (e.version = i), W.call(e, r, p.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e.name = i),
                  (e.version = i),
                  W.call(e, r, p.os),
                  f &&
                    !e.name &&
                    l &&
                    "Unknown" != l.platform &&
                    (e.name = l.platform
                      .replace(/chrome os/i, F)
                      .replace(/macos/i, H)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return r;
              }),
              (this.setUA = function (e) {
                return (
                  (r = typeof e === c && e.length > 350 ? V(e, 350) : e), this
                );
              }),
              this.setUA(r),
              this
            );
          };
        (X.VERSION = "1.0.35"),
          (X.BROWSER = $([f, h, l])),
          (X.CPU = $([b])),
          (X.DEVICE = $([p, y, d, g, m, w, v, O, P])),
          (X.ENGINE = X.OS = $([f, h])),
          typeof t !== s
            ? (e.exports && (t = e.exports = X), (t.UAParser = X))
            : n.amdO
            ? (r = function () {
                return X;
              }.call(t, n, t, e)) === i || (e.exports = r)
            : typeof o !== s && (o.UAParser = X);
        var Y = typeof o !== s && (o.jQuery || o.Zepto);
        if (Y && !Y.ua) {
          var J = new X();
          (Y.ua = J.getResult()),
            (Y.ua.get = function () {
              return J.getUA();
            }),
            (Y.ua.set = function (e) {
              J.setUA(e);
              var t = J.getResult();
              for (var n in t) Y.ua[n] = t[n];
            });
        }
      })("object" === typeof window ? window : this);
    },
    64846: function (e, t, n) {
      "use strict";
      var r = n(57245),
        o = n(97375),
        i =
          /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        a = /[\n\r\t]/g,
        s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        u = /:\d+$/,
        c = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        l = /^[a-zA-Z]:/;
      function p(e) {
        return (e || "").toString().replace(i, "");
      }
      var f = [
          ["#", "hash"],
          ["?", "query"],
          function (e, t) {
            return h(t.protocol) ? e.replace(/\\/g, "/") : e;
          },
          ["/", "pathname"],
          ["@", "auth", 1],
          [NaN, "host", void 0, 1, 1],
          [/:(\d*)$/, "port", void 0, 1],
          [NaN, "hostname", void 0, 1, 1],
        ],
        d = { hash: 1, query: 1 };
      function y(e) {
        var t,
          r =
            ("undefined" !== typeof window
              ? window
              : "undefined" !== typeof n.g
              ? n.g
              : "undefined" !== typeof self
              ? self
              : {}
            ).location || {},
          o = {},
          i = typeof (e = e || r);
        if ("blob:" === e.protocol) o = new g(unescape(e.pathname), {});
        else if ("string" === i) for (t in ((o = new g(e, {})), d)) delete o[t];
        else if ("object" === i) {
          for (t in e) t in d || (o[t] = e[t]);
          void 0 === o.slashes && (o.slashes = s.test(e.href));
        }
        return o;
      }
      function h(e) {
        return (
          "file:" === e ||
          "ftp:" === e ||
          "http:" === e ||
          "https:" === e ||
          "ws:" === e ||
          "wss:" === e
        );
      }
      function b(e, t) {
        (e = (e = p(e)).replace(a, "")), (t = t || {});
        var n,
          r = c.exec(e),
          o = r[1] ? r[1].toLowerCase() : "",
          i = !!r[2],
          s = !!r[3],
          u = 0;
        return (
          i
            ? s
              ? ((n = r[2] + r[3] + r[4]), (u = r[2].length + r[3].length))
              : ((n = r[2] + r[4]), (u = r[2].length))
            : s
            ? ((n = r[3] + r[4]), (u = r[3].length))
            : (n = r[4]),
          "file:" === o
            ? u >= 2 && (n = n.slice(2))
            : h(o)
            ? (n = r[4])
            : o
            ? i && (n = n.slice(2))
            : u >= 2 && h(t.protocol) && (n = r[4]),
          { protocol: o, slashes: i || h(o), slashesCount: u, rest: n }
        );
      }
      function g(e, t, n) {
        if (((e = (e = p(e)).replace(a, "")), !(this instanceof g)))
          return new g(e, t, n);
        var i,
          s,
          u,
          c,
          d,
          m,
          v = f.slice(),
          w = typeof t,
          O = this,
          P = 0;
        for (
          "object" !== w && "string" !== w && ((n = t), (t = null)),
            n && "function" !== typeof n && (n = o.parse),
            i = !(s = b(e || "", (t = y(t)))).protocol && !s.slashes,
            O.slashes = s.slashes || (i && t.slashes),
            O.protocol = s.protocol || t.protocol || "",
            e = s.rest,
            (("file:" === s.protocol && (2 !== s.slashesCount || l.test(e))) ||
              (!s.slashes &&
                (s.protocol || s.slashesCount < 2 || !h(O.protocol)))) &&
              (v[3] = [/(.*)/, "pathname"]);
          P < v.length;
          P++
        )
          "function" !== typeof (c = v[P])
            ? ((u = c[0]),
              (m = c[1]),
              u !== u
                ? (O[m] = e)
                : "string" === typeof u
                ? ~(d = "@" === u ? e.lastIndexOf(u) : e.indexOf(u)) &&
                  ("number" === typeof c[2]
                    ? ((O[m] = e.slice(0, d)), (e = e.slice(d + c[2])))
                    : ((O[m] = e.slice(d)), (e = e.slice(0, d))))
                : (d = u.exec(e)) && ((O[m] = d[1]), (e = e.slice(0, d.index))),
              (O[m] = O[m] || (i && c[3] && t[m]) || ""),
              c[4] && (O[m] = O[m].toLowerCase()))
            : (e = c(e, O));
        n && (O.query = n(O.query)),
          i &&
            t.slashes &&
            "/" !== O.pathname.charAt(0) &&
            ("" !== O.pathname || "" !== t.pathname) &&
            (O.pathname = (function (e, t) {
              if ("" === e) return t;
              for (
                var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")),
                  r = n.length,
                  o = n[r - 1],
                  i = !1,
                  a = 0;
                r--;

              )
                "." === n[r]
                  ? n.splice(r, 1)
                  : ".." === n[r]
                  ? (n.splice(r, 1), a++)
                  : a && (0 === r && (i = !0), n.splice(r, 1), a--);
              return (
                i && n.unshift(""),
                ("." !== o && ".." !== o) || n.push(""),
                n.join("/")
              );
            })(O.pathname, t.pathname)),
          "/" !== O.pathname.charAt(0) &&
            h(O.protocol) &&
            (O.pathname = "/" + O.pathname),
          r(O.port, O.protocol) || ((O.host = O.hostname), (O.port = "")),
          (O.username = O.password = ""),
          O.auth &&
            (~(d = O.auth.indexOf(":"))
              ? ((O.username = O.auth.slice(0, d)),
                (O.username = encodeURIComponent(
                  decodeURIComponent(O.username)
                )),
                (O.password = O.auth.slice(d + 1)),
                (O.password = encodeURIComponent(
                  decodeURIComponent(O.password)
                )))
              : (O.username = encodeURIComponent(decodeURIComponent(O.auth))),
            (O.auth = O.password ? O.username + ":" + O.password : O.username)),
          (O.origin =
            "file:" !== O.protocol && h(O.protocol) && O.host
              ? O.protocol + "//" + O.host
              : "null"),
          (O.href = O.toString());
      }
      (g.prototype = {
        set: function (e, t, n) {
          var i = this;
          switch (e) {
            case "query":
              "string" === typeof t && t.length && (t = (n || o.parse)(t)),
                (i[e] = t);
              break;
            case "port":
              (i[e] = t),
                r(t, i.protocol)
                  ? t && (i.host = i.hostname + ":" + t)
                  : ((i.host = i.hostname), (i[e] = ""));
              break;
            case "hostname":
              (i[e] = t), i.port && (t += ":" + i.port), (i.host = t);
              break;
            case "host":
              (i[e] = t),
                u.test(t)
                  ? ((t = t.split(":")),
                    (i.port = t.pop()),
                    (i.hostname = t.join(":")))
                  : ((i.hostname = t), (i.port = ""));
              break;
            case "protocol":
              (i.protocol = t.toLowerCase()), (i.slashes = !n);
              break;
            case "pathname":
            case "hash":
              if (t) {
                var a = "pathname" === e ? "/" : "#";
                i[e] = t.charAt(0) !== a ? a + t : t;
              } else i[e] = t;
              break;
            case "username":
            case "password":
              i[e] = encodeURIComponent(t);
              break;
            case "auth":
              var s = t.indexOf(":");
              ~s
                ? ((i.username = t.slice(0, s)),
                  (i.username = encodeURIComponent(
                    decodeURIComponent(i.username)
                  )),
                  (i.password = t.slice(s + 1)),
                  (i.password = encodeURIComponent(
                    decodeURIComponent(i.password)
                  )))
                : (i.username = encodeURIComponent(decodeURIComponent(t)));
          }
          for (var c = 0; c < f.length; c++) {
            var l = f[c];
            l[4] && (i[l[1]] = i[l[1]].toLowerCase());
          }
          return (
            (i.auth = i.password ? i.username + ":" + i.password : i.username),
            (i.origin =
              "file:" !== i.protocol && h(i.protocol) && i.host
                ? i.protocol + "//" + i.host
                : "null"),
            (i.href = i.toString()),
            i
          );
        },
        toString: function (e) {
          (e && "function" === typeof e) || (e = o.stringify);
          var t,
            n = this,
            r = n.host,
            i = n.protocol;
          i && ":" !== i.charAt(i.length - 1) && (i += ":");
          var a = i + ((n.protocol && n.slashes) || h(n.protocol) ? "//" : "");
          return (
            n.username
              ? ((a += n.username),
                n.password && (a += ":" + n.password),
                (a += "@"))
              : n.password
              ? ((a += ":" + n.password), (a += "@"))
              : "file:" !== n.protocol &&
                h(n.protocol) &&
                !r &&
                "/" !== n.pathname &&
                (a += "@"),
            (":" === r[r.length - 1] || (u.test(n.hostname) && !n.port)) &&
              (r += ":"),
            (a += r + n.pathname),
            (t = "object" === typeof n.query ? e(n.query) : n.query) &&
              (a += "?" !== t.charAt(0) ? "?" + t : t),
            n.hash && (a += n.hash),
            a
          );
        },
      }),
        (g.extractProtocol = b),
        (g.location = y),
        (g.trimLeft = p),
        (g.qs = o),
        (e.exports = g);
    },
    51960: function (e) {
      e.exports = function () {
        for (var e = {}, n = 0; n < arguments.length; n++) {
          var r = arguments[n];
          for (var o in r) t.call(r, o) && (e[o] = r[o]);
        }
        return e;
      };
      var t = Object.prototype.hasOwnProperty;
    },
    71600: function (e) {
      (e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    58292: function (e, t, n) {
      e.exports = n(76372).EventSourcePolyfill;
    },
    83264: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return s;
        },
      });
      var r = n(2784),
        o = n(71010),
        i = n(26766);
      const a = { any: 0, all: 1 };
      function s(e, { root: t, margin: n, amount: s, once: u = !1 } = {}) {
        const [c, l] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (u && c)) return;
            const r = {
              root: (t && t.current) || void 0,
              margin: n,
              amount: "some" === s ? "any" : s,
            };
            return (function (
              e,
              t,
              { root: n, margin: r, amount: s = "any" } = {}
            ) {
              if ("undefined" === typeof IntersectionObserver) return () => {};
              const u = (0, o.I)(e),
                c = new WeakMap(),
                l = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      const n = c.get(e.target);
                      if (e.isIntersecting !== Boolean(n))
                        if (e.isIntersecting) {
                          const n = t(e);
                          (0, i.m)(n)
                            ? c.set(e.target, n)
                            : l.unobserve(e.target);
                        } else n && (n(e), c.delete(e.target));
                    });
                  },
                  {
                    root: n,
                    rootMargin: r,
                    threshold: "number" === typeof s ? s : a[s],
                  }
                );
              return u.forEach((e) => l.observe(e)), () => l.disconnect();
            })(e.current, () => (l(!0), u ? void 0 : () => l(!1)), r);
          }, [t, e, n, u]),
          c
        );
      }
    },
    4960: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return s;
        },
      });
      var r = n(2784),
        o = n(33234),
        i = n(16014),
        a = n(96681);
      function s(e) {
        const t = (0, a.h)(() => (0, o.B)(e)),
          { isStatic: n } = (0, r.useContext)(i._);
        if (n) {
          const [, n] = (0, r.useState)(e);
          (0, r.useEffect)(() => t.on("change", n), []);
        }
        return t;
      }
    },
    75262: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return a;
        },
        p: function () {
          return i;
        },
      });
      var r = n(40406),
        o = n(58868);
      function i(e, t) {
        (0, o.L)(() => {
          if ((0, r.i)(e)) return t(e.get()), e.on("change", t);
        }, [e, t]);
      }
      function a(e, t, n) {
        (0, o.L)(() => {
          const r = e.map((e) => e.on("change", t));
          return () => {
            r.forEach((e) => e()), n();
          };
        });
      }
    },
    80578: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return u;
        },
      });
      var r = n(52200);
      var o = n(4960),
        i = n(75262),
        a = n(30404);
      var s = n(96681);
      function u(e, t, n, o) {
        const i =
          "function" === typeof t
            ? t
            : (function (...e) {
                const t = !Array.isArray(e[0]),
                  n = t ? 0 : -1,
                  o = e[0 + n],
                  i = e[1 + n],
                  a = e[2 + n],
                  s = e[3 + n],
                  u = (0, r.s)(i, a, {
                    mixer:
                      ((c = a[0]),
                      ((e) => "object" === typeof e && e.mix)(c)
                        ? c.mix
                        : void 0),
                    ...s,
                  });
                var c;
                return t ? u(o) : u;
              })(t, n, o);
        return Array.isArray(e) ? c(e, i) : c([e], ([e]) => i(e));
      }
      function c(e, t) {
        const n = (0, s.h)(() => []);
        return (function (e, t) {
          const n = (0, o.c)(t()),
            r = () => n.set(t());
          return (
            r(),
            (0, i.f)(
              e,
              () => a.Z_.update(r, !1, !0),
              () => a.qY.update(r)
            ),
            n
          );
        })(e, () => {
          n.length = 0;
          const r = e.length;
          for (let t = 0; t < r; t++) n[t] = e[t].get();
          return t(n);
        });
      }
    },
    25339: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      function o(e) {
        var t = (function (e, t) {
          if ("object" !== r(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" !== r(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === r(t) ? t : String(t);
      }
      function i(e, t, n) {
        return (
          (t = o(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return i;
        },
      });
    },
    31461: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    61003: function (e, t, n) {
      "use strict";
      n.d(t, {
        w0: function () {
          return i;
        },
      });
      Symbol();
      const r = Symbol();
      !(function (e) {
        let t, n;
        const o = {
          getItem: (o) => {
            var i, a;
            const s = (e) => {
                if (t !== (e = e || "")) {
                  try {
                    n = JSON.parse(e);
                  } catch {
                    return r;
                  }
                  t = e;
                }
                return n;
              },
              u =
                null != (a = null == (i = e()) ? void 0 : i.getItem(o))
                  ? a
                  : null;
            return u instanceof Promise ? u.then(s) : s(u);
          },
          setItem: (t, n) => {
            var r;
            return null == (r = e()) ? void 0 : r.setItem(t, JSON.stringify(n));
          },
          removeItem: (t) => {
            var n;
            return null == (n = e()) ? void 0 : n.removeItem(t);
          },
        };
        "undefined" !== typeof window &&
          "function" === typeof window.addEventListener &&
          (o.subscribe = (e, t) => {
            const n = (n) => {
              n.key === e && n.newValue && t(JSON.parse(n.newValue));
            };
            return (
              window.addEventListener("storage", n),
              () => {
                window.removeEventListener("storage", n);
              }
            );
          });
      })(() => ("undefined" !== typeof window ? window.localStorage : void 0));
      var o = n(50154);
      n(2784);
      function i(e, t) {
        const n = (0, o.cn)(e, (e, r, o) => r(n, t(e(n), o)));
        return n;
      }
      const a = () => {
        const e = new WeakMap();
        return (t, n) => {
          const r = ((e, t) => {
            do {
              const [n, ...r] = t,
                o = e.get(n);
              if (!o) return;
              if (!r.length) return o[1];
              (e = o[0]), (t = r);
            } while (t.length);
          })(e, n);
          if (r) return r;
          const o = t();
          return (
            ((e, t, n) => {
              do {
                const [r, ...o] = t;
                let i = e.get(r);
                if ((i || ((i = [new WeakMap()]), e.set(r, i)), !o.length))
                  return void (i[1] = n);
                (e = i[0]), (t = o);
              } while (t.length);
            })(e, n, o),
            o
          );
        };
      };
      a();
      a();
      a();
      a(), (0, o.cn)(() => []);
      !(function (e) {
        let t, n;
        const o = {
          getItem: (o) => {
            var i, a;
            const s = (e) => {
                if (t !== (e = e || "")) {
                  try {
                    n = JSON.parse(e);
                  } catch {
                    return r;
                  }
                  t = e;
                }
                return n;
              },
              u =
                null != (a = null == (i = e()) ? void 0 : i.getItem(o))
                  ? a
                  : null;
            return u instanceof Promise ? u.then(s) : s(u);
          },
          setItem: (t, n) => {
            var r;
            return null == (r = e()) ? void 0 : r.setItem(t, JSON.stringify(n));
          },
          removeItem: (t) => {
            var n;
            return null == (n = e()) ? void 0 : n.removeItem(t);
          },
        };
        "undefined" !== typeof window &&
          "function" === typeof window.addEventListener &&
          (o.subscribe = (e, t) => {
            const n = (n) => {
              n.key === e && n.newValue && t(JSON.parse(n.newValue));
            };
            return (
              window.addEventListener("storage", n),
              () => {
                window.removeEventListener("storage", n);
              }
            );
          });
      })(() => ("undefined" !== typeof window ? window.localStorage : void 0));
      a();
    },
    93562: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"AElig":"\xc6","AMP":"&","Aacute":"\xc1","Acirc":"\xc2","Agrave":"\xc0","Aring":"\xc5","Atilde":"\xc3","Auml":"\xc4","COPY":"\xa9","Ccedil":"\xc7","ETH":"\xd0","Eacute":"\xc9","Ecirc":"\xca","Egrave":"\xc8","Euml":"\xcb","GT":">","Iacute":"\xcd","Icirc":"\xce","Igrave":"\xcc","Iuml":"\xcf","LT":"<","Ntilde":"\xd1","Oacute":"\xd3","Ocirc":"\xd4","Ograve":"\xd2","Oslash":"\xd8","Otilde":"\xd5","Ouml":"\xd6","QUOT":"\\"","REG":"\xae","THORN":"\xde","Uacute":"\xda","Ucirc":"\xdb","Ugrave":"\xd9","Uuml":"\xdc","Yacute":"\xdd","aacute":"\xe1","acirc":"\xe2","acute":"\xb4","aelig":"\xe6","agrave":"\xe0","amp":"&","aring":"\xe5","atilde":"\xe3","auml":"\xe4","brvbar":"\xa6","ccedil":"\xe7","cedil":"\xb8","cent":"\xa2","copy":"\xa9","curren":"\xa4","deg":"\xb0","divide":"\xf7","eacute":"\xe9","ecirc":"\xea","egrave":"\xe8","eth":"\xf0","euml":"\xeb","frac12":"\xbd","frac14":"\xbc","frac34":"\xbe","gt":">","iacute":"\xed","icirc":"\xee","iexcl":"\xa1","igrave":"\xec","iquest":"\xbf","iuml":"\xef","laquo":"\xab","lt":"<","macr":"\xaf","micro":"\xb5","middot":"\xb7","nbsp":"\xa0","not":"\xac","ntilde":"\xf1","oacute":"\xf3","ocirc":"\xf4","ograve":"\xf2","ordf":"\xaa","ordm":"\xba","oslash":"\xf8","otilde":"\xf5","ouml":"\xf6","para":"\xb6","plusmn":"\xb1","pound":"\xa3","quot":"\\"","raquo":"\xbb","reg":"\xae","sect":"\xa7","shy":"\xad","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","szlig":"\xdf","thorn":"\xfe","times":"\xd7","uacute":"\xfa","ucirc":"\xfb","ugrave":"\xf9","uml":"\xa8","uuml":"\xfc","yacute":"\xfd","yen":"\xa5","yuml":"\xff"}'
      );
    },
    71216: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"0":"\ufffd","128":"\u20ac","130":"\u201a","131":"\u0192","132":"\u201e","133":"\u2026","134":"\u2020","135":"\u2021","136":"\u02c6","137":"\u2030","138":"\u0160","139":"\u2039","140":"\u0152","142":"\u017d","145":"\u2018","146":"\u2019","147":"\u201c","148":"\u201d","149":"\u2022","150":"\u2013","151":"\u2014","152":"\u02dc","153":"\u2122","154":"\u0161","155":"\u203a","156":"\u0153","158":"\u017e","159":"\u0178"}'
      );
    },
  },
]);
