"use strict";
(self.webpackChunkfrontend_advanced = self.webpackChunkfrontend_advanced || []).push([[341], { 5341: function (e, n, t) { t.r(n), t.d(n, { default: function () { return s; } }); var a = t(5893), l = t(2327), r = t(7294), o = t(4611); var c = t(6925); var s = function (e) { var n = e.className, t = (0, l.$)().t, s = (0, r.useState)(""), u = s[0], i = s[1]; return (0, a.jsxs)("div", { className: (0, o.A)("sdKIpzsO", {}, [n]), children: [t("Main page"), (0, a.jsx)(c.I, { value: u, onChange: function (e) { i(e); }, placeholder: "Введите текст" })] }); }; }, 6925: function (e, n, t) {
            t.d(n, { I: function () { return c; } });
            var a = t(5893), l = t(7294), r = t(4611);
            var o = function () {
                return o = Object.assign || function (e) {
                    for (var n, t = 1, a = arguments.length; t < a; t++)
                        for (var l in n = arguments[t])
                            Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
                    return e;
                }, o.apply(this, arguments);
            }, c = (0, l.memo)((function (e) {
                var n = e.className, t = e.value, c = e.autofocus, s = e.type, u = void 0 === s ? "text" : s, i = e.placeholder, f = e.onChange, d = function (e, n) {
                    var t = {};
                    for (var a in e)
                        Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (t[a] = e[a]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var l = 0;
                        for (a = Object.getOwnPropertySymbols(e); l < a.length; l++)
                            n.indexOf(a[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[l]) && (t[a[l]] = e[a[l]]);
                    }
                    return t;
                }(e, ["className", "value", "autofocus", "type", "placeholder", "onChange"]), v = (0, l.useRef)(null), p = (0, l.useState)(!1), h = p[0], y = p[1], m = (0, l.useState)(0), g = m[0], j = m[1];
                return (0, l.useEffect)((function () { var e; c && (y(!0), null === (e = v.current) || void 0 === e || e.focus()); }), [c]), (0, a.jsxs)("div", { className: (0, r.A)("LVdIPwcx", {}, [n]), children: [i && (0, a.jsx)("div", { className: "emAQQ85i", children: "".concat(i, ">") }), (0, a.jsxs)("div", { className: "MRdDkCxl", children: [(0, a.jsx)("input", o({ ref: v, className: "tjhlYVyS", type: u, value: t, onChange: function (e) { null == f || f(e.target.value), j(e.target.value.length); }, onSelect: function (e) { var n; j((null === (n = null == e ? void 0 : e.target) || void 0 === n ? void 0 : n.selectionStart) || 0); }, onFocus: function () { y(!0); }, onBlur: function () { y(!1); } }, d)), h && (0, a.jsx)("span", { style: { left: "".concat(9 * g, "px") }, className: "lqMFGBuL" })] })] });
            }));
        } }]);
