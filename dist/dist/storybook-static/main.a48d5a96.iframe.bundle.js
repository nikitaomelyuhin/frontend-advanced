"use strict";
/*! For license information please see main.a48d5a96.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkfrontend_advanced = self.webpackChunkfrontend_advanced || []).push([[179], { "./config/storybook/preview.js-generated-config-entry.js": function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
            "use strict";
            var preview_namespaceObject = {};
            __webpack_require__.r(preview_namespaceObject), __webpack_require__.d(preview_namespaceObject, { parameters: function () { return parameters; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.js"), __webpack_require__("./node_modules/core-js/modules/es.array.filter.js"), __webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"), __webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"), __webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"), __webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"), __webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"), __webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");
            var ClientApi = __webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"), esm = __webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"), client = __webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), styles = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(styles.Z, options);
            styles.Z && styles.Z.locals && styles.Z.locals;
            var ThemeDecorator = __webpack_require__("./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx"), react_router_dom = __webpack_require__("./node_modules/react-router-dom/index.js"), jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"), RouterDecorator = function RouterDecorator(story) { return (0, jsx_runtime.jsx)(react_router_dom.VK, { children: (0, jsx_runtime.jsx)("div", { children: story() }) }); };
            RouterDecorator.displayName = "RouterDecorator";
            var ThemeProvider = __webpack_require__("./src/shared/providers/ThemeProvider/index.ts"), parameters = { actions: { argTypesRegex: "^on[A-Z].*" }, controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } } };
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    enumerableOnly && (symbols = symbols.filter((function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }))), keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function _defineProperty(obj, key, value) { return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj; }
            (0, client.addDecorator)((function StyleDecorator(story) { return story(); })), (0, client.addDecorator)((0, ThemeDecorator.F)(ThemeProvider.Q2.NORMAL)), (0, client.addDecorator)(RouterDecorator), Object.keys(preview_namespaceObject).forEach((function (key) {
                var value = preview_namespaceObject[key];
                switch (key) {
                    case "args":
                    case "argTypes": return esm.kg.warn("Invalid args/argTypes in config, ignoring.", JSON.stringify(value));
                    case "decorators": return value.forEach((function (decorator) { return (0, ClientApi.$9)(decorator, !1); }));
                    case "loaders": return value.forEach((function (loader) { return (0, ClientApi.HZ)(loader, !1); }));
                    case "parameters": return (0, ClientApi.h1)(function _objectSpread(target) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? ownKeys(Object(source), !0).forEach((function (key) { _defineProperty(target, key, source[key]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }));
                        }
                        return target;
                    }({}, value), !1);
                    case "argTypesEnhancers": return value.forEach((function (enhancer) { return (0, ClientApi.My)(enhancer); }));
                    case "argsEnhancers": return value.forEach((function (enhancer) { return (0, ClientApi._C)(enhancer); }));
                    case "render": return (0, ClientApi.$P)(value);
                    case "globals":
                    case "globalTypes":
                        var v = {};
                        return v[key] = value, (0, ClientApi.h1)(v, !1);
                    case "__namedExportsOrder":
                    case "decorateStory":
                    case "renderToDOM": return null;
                    default: return console.log(key + " was not supported :( !");
                }
            }));
        }, "./generated-stories-entry.js": function (module, __unused_webpack_exports, __webpack_require__) {
            "use strict";
            module = __webpack_require__.nmd(module), (0, __webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")], module, !1);
        }, "./src/pages/AboutPage/ui/AboutPage.stories.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { Dark: function () { return Dark; }, Normal: function () { return Normal; }, default: function () { return AboutPage_stories; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"), __webpack_require__("./node_modules/core-js/modules/es.function.bind.js"), __webpack_require__("./node_modules/react/index.js");
            var ThemeDecorator = __webpack_require__("./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx"), ThemeProvider = __webpack_require__("./src/shared/providers/ThemeProvider/index.ts"), useTranslation = __webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"), classNames = __webpack_require__("./src/shared/lib/classNames/classNames.ts"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), AboutPage_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/AboutPage/ui/AboutPage.module.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(AboutPage_module.Z, options);
            var ui_AboutPage_module = AboutPage_module.Z && AboutPage_module.Z.locals ? AboutPage_module.Z.locals : void 0;
            var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"), AboutPage = function AboutPage(props) { var className = props.className, t = (0, useTranslation.$)("about").t; return (0, jsx_runtime.jsx)("div", { className: (0, classNames.A)(ui_AboutPage_module.AboutPage, {}, [className]), children: t("About page") }); };
            AboutPage.displayName = "AboutPage";
            var ui_AboutPage = AboutPage;
            var AboutPage_stories = { title: "pages/AboutPage", component: ui_AboutPage, argTypes: { backgroundColor: { control: "color" } } };
            var Template = function Template(args) { return (0, jsx_runtime.jsx)(ui_AboutPage, Object.assign({}, args)); };
            Template.displayName = "Template";
            var Normal = Template.bind({}), Dark = Template.bind({});
            Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)], Normal.parameters = Object.assign({ storySource: { source: "(args) => <AboutPage {...args} />" } }, Normal.parameters), Dark.parameters = Object.assign({ storySource: { source: "(args) => <AboutPage {...args} />" } }, Dark.parameters);
        }, "./src/pages/MainPage/ui/MainPage.stories.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { Dark: function () { return Dark; }, Normal: function () { return Normal; }, default: function () { return MainPage_stories; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"), __webpack_require__("./node_modules/core-js/modules/es.function.bind.js");
            var react = __webpack_require__("./node_modules/react/index.js"), ThemeDecorator = __webpack_require__("./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx"), ThemeProvider = __webpack_require__("./src/shared/providers/ThemeProvider/index.ts"), useTranslation = (__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"), __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"), __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"), __webpack_require__("./node_modules/core-js/modules/es.function.name.js"), __webpack_require__("./node_modules/core-js/modules/es.array.from.js"), __webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js")), classNames = __webpack_require__("./src/shared/lib/classNames/classNames.ts"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), MainPage_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/MainPage/ui/MainPage.module.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(MainPage_module.Z, options);
            var ui_MainPage_module = MainPage_module.Z && MainPage_module.Z.locals ? MainPage_module.Z.locals : void 0;
            var Input = __webpack_require__("./src/shared/ui/Input/Input.tsx"), jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
            function _slicedToArray(arr, i) {
                return function _arrayWithHoles(arr) {
                    if (Array.isArray(arr))
                        return arr;
                }(arr) || function _iterableToArrayLimit(r, l) {
                    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                    if (null != t) {
                        var e, n, i, u, a = [], f = !0, o = !1;
                        try {
                            if (i = (t = t.call(r)).next, 0 === l) {
                                if (Object(t) !== t)
                                    return;
                                f = !1;
                            }
                            else
                                for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
                                    ;
                        }
                        catch (r) {
                            o = !0, n = r;
                        }
                        finally {
                            try {
                                if (!f && null != t.return && (u = t.return(), Object(u) !== u))
                                    return;
                            }
                            finally {
                                if (o)
                                    throw n;
                            }
                        }
                        return a;
                    }
                }(arr, i) || function _unsupportedIterableToArray(o, minLen) {
                    if (!o)
                        return;
                    if ("string" == typeof o)
                        return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    "Object" === n && o.constructor && (n = o.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(o);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return _arrayLikeToArray(o, minLen);
                }(arr, i) || function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }();
            }
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                    arr2[i] = arr[i];
                return arr2;
            }
            var MainPage = function MainPage(props) { var className = props.className, t = (0, useTranslation.$)().t, _useState2 = _slicedToArray((0, react.useState)(""), 2), value = _useState2[0], setValue = _useState2[1]; return (0, jsx_runtime.jsxs)("div", { className: (0, classNames.A)(ui_MainPage_module.MainPage, {}, [className]), children: [t("Main page"), (0, jsx_runtime.jsx)(Input.I, { value: value, onChange: function onChange(val) { setValue(val); }, placeholder: "Введите текст" })] }); };
            MainPage.displayName = "MainPage";
            var ui_MainPage = MainPage;
            var MainPage_stories = { title: "pages/MainPage", component: ui_MainPage, argTypes: { backgroundColor: { control: "color" } } };
            var Template = function Template(args) { return (0, jsx_runtime.jsx)(ui_MainPage, Object.assign({}, args)); };
            Template.displayName = "Template";
            var Normal = Template.bind({}), Dark = Template.bind({});
            Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)], Normal.parameters = Object.assign({ storySource: { source: "(args) => <MainPage {...args} />" } }, Normal.parameters), Dark.parameters = Object.assign({ storySource: { source: "(args) => <MainPage {...args} />" } }, Dark.parameters);
        }, "./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { Dark: function () { return Dark; }, Normal: function () { return Normal; }, default: function () { return NotFoundPage_stories; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"), __webpack_require__("./node_modules/core-js/modules/es.function.bind.js"), __webpack_require__("./node_modules/react/index.js");
            var ThemeDecorator = __webpack_require__("./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx"), ThemeProvider = __webpack_require__("./src/shared/providers/ThemeProvider/index.ts"), useTranslation = __webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"), classNames = __webpack_require__("./src/shared/lib/classNames/classNames.ts"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), NotFoundPage_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(NotFoundPage_module.Z, options);
            var ui_NotFoundPage_module = NotFoundPage_module.Z && NotFoundPage_module.Z.locals ? NotFoundPage_module.Z.locals : void 0;
            var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"), NotFoundPage = function NotFoundPage(props) { var className = props.className, t = (0, useTranslation.$)().t; return (0, jsx_runtime.jsx)("div", { className: (0, classNames.A)(ui_NotFoundPage_module.NotFoundPage, {}, [className]), children: t("Not found") }); };
            NotFoundPage.displayName = "NotFoundPage";
            var NotFoundPage_stories = { title: "pages/NotFoundPage", component: NotFoundPage, argTypes: { backgroundColor: { control: "color" } } };
            var Template = function Template(args) { return (0, jsx_runtime.jsx)(NotFoundPage, Object.assign({}, args)); };
            Template.displayName = "Template";
            var Normal = Template.bind({}), Dark = Template.bind({});
            Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)], Normal.parameters = Object.assign({ storySource: { source: "(args) => <NotFoundPage {...args} />" } }, Normal.parameters), Dark.parameters = Object.assign({ storySource: { source: "(args) => <NotFoundPage {...args} />" } }, Dark.parameters);
        }, "./src/shared/ui/AppLink/AppLink.stories.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: function () { return __WEBPACK_DEFAULT_EXPORT__; }, Normal: function () { return Normal; }, Inverted: function () { return Inverted; }, Dark: function () { return Dark; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"), __webpack_require__("./node_modules/core-js/modules/es.function.bind.js"), __webpack_require__("./node_modules/react/index.js");
            var _app_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx"), _shared_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/shared/providers/ThemeProvider/index.ts"), _AppLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/shared/ui/AppLink/AppLink.tsx"), react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
            var __WEBPACK_DEFAULT_EXPORT__ = { title: "shared/AppLink", component: _AppLink__WEBPACK_IMPORTED_MODULE_5__.F, argTypes: { backgroundColor: { control: "color" } }, args: { to: "/" } };
            var Template = function Template(args) { return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AppLink__WEBPACK_IMPORTED_MODULE_5__.F, Object.assign({}, args)); };
            Template.displayName = "Template";
            var Normal = Template.bind({});
            Normal.args = { children: "Text", theme: _AppLink__WEBPACK_IMPORTED_MODULE_5__.J.PRIMARY };
            var Inverted = Template.bind({});
            Inverted.args = { children: "Text", theme: _AppLink__WEBPACK_IMPORTED_MODULE_5__.J.INVERTED };
            var Dark = Template.bind({});
            Dark.args = { children: "Text", theme: _AppLink__WEBPACK_IMPORTED_MODULE_5__.J.PRIMARY }, Dark.decorators = [(0, _app_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.F)(_shared_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Q2.DARK)], Normal.parameters = Object.assign({ storySource: { source: "(args) => <AppLink {...args} />" } }, Normal.parameters), Inverted.parameters = Object.assign({ storySource: { source: "(args) => <AppLink {...args} />" } }, Inverted.parameters), Dark.parameters = Object.assign({ storySource: { source: "(args) => <AppLink {...args} />" } }, Dark.parameters);
        }, "./src/shared/ui/Button/Button.stories.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: function () { return __WEBPACK_DEFAULT_EXPORT__; }, Clear: function () { return Clear; }, Outline: function () { return Outline; }, OutlineL: function () { return OutlineL; }, OutlineXL: function () { return OutlineXL; }, OutlineDark: function () { return OutlineDark; }, Background: function () { return Background; }, BackgroundInverted: function () { return BackgroundInverted; }, Square: function () { return Square; }, SquareM: function () { return SquareM; }, SquareXL: function () { return SquareXL; }, SquareL: function () { return SquareL; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"), __webpack_require__("./node_modules/core-js/modules/es.function.bind.js"), __webpack_require__("./node_modules/react/index.js");
            var _app_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx"), _shared_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/shared/providers/ThemeProvider/index.ts"), _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/shared/ui/Button/Button.tsx"), _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/shared/ui/Button/Button.types.ts"), react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
            var __WEBPACK_DEFAULT_EXPORT__ = { title: "shared/Button", component: _Button__WEBPACK_IMPORTED_MODULE_5__.z, argTypes: { backgroundColor: { control: "color" } } };
            var Template = function Template(args) { return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_5__.z, Object.assign({}, args)); };
            Template.displayName = "Template";
            var Clear = Template.bind({});
            Clear.args = { children: "Text", theme: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.l.CLEAR };
            var Outline = Template.bind({});
            Outline.args = { children: "Text", theme: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.l.OUTLINE };
            var OutlineL = Template.bind({});
            OutlineL.args = { children: "Text", theme: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.l.OUTLINE, size: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.q.L };
            var OutlineXL = Template.bind({});
            OutlineXL.args = { children: "Text", theme: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.l.OUTLINE, size: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.q.XL };
            var OutlineDark = Template.bind({});
            OutlineDark.args = { children: "Text", theme: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.l.OUTLINE }, OutlineDark.decorators = [(0, _app_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.F)(_shared_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Q2.DARK)];
            var Background = Template.bind({});
            Background.args = { children: "Text", theme: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.l.BACKGROUND };
            var BackgroundInverted = Template.bind({});
            BackgroundInverted.args = { children: "Text", theme: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.l.BACKGROUND_INVERTED };
            var Square = Template.bind({});
            Square.args = { children: ">", theme: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.l.BACKGROUND, square: !0 };
            var SquareM = Template.bind({});
            SquareM.args = { children: ">", theme: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.l.BACKGROUND, square: !0, size: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.q.M };
            var SquareXL = Template.bind({});
            SquareXL.args = { children: ">", theme: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.l.BACKGROUND, square: !0, size: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.q.XL };
            var SquareL = Template.bind({});
            SquareL.args = { children: ">", theme: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.l.BACKGROUND, square: !0, size: _shared_ui_Button_Button_types__WEBPACK_IMPORTED_MODULE_6__.q.L }, Clear.parameters = Object.assign({ storySource: { source: "(args) => <Button {...args} />" } }, Clear.parameters), Outline.parameters = Object.assign({ storySource: { source: "(args) => <Button {...args} />" } }, Outline.parameters), OutlineL.parameters = Object.assign({ storySource: { source: "(args) => <Button {...args} />" } }, OutlineL.parameters), OutlineXL.parameters = Object.assign({ storySource: { source: "(args) => <Button {...args} />" } }, OutlineXL.parameters), OutlineDark.parameters = Object.assign({ storySource: { source: "(args) => <Button {...args} />" } }, OutlineDark.parameters), Background.parameters = Object.assign({ storySource: { source: "(args) => <Button {...args} />" } }, Background.parameters), BackgroundInverted.parameters = Object.assign({ storySource: { source: "(args) => <Button {...args} />" } }, BackgroundInverted.parameters), Square.parameters = Object.assign({ storySource: { source: "(args) => <Button {...args} />" } }, Square.parameters), SquareM.parameters = Object.assign({ storySource: { source: "(args) => <Button {...args} />" } }, SquareM.parameters), SquareXL.parameters = Object.assign({ storySource: { source: "(args) => <Button {...args} />" } }, SquareXL.parameters), SquareL.parameters = Object.assign({ storySource: { source: "(args) => <Button {...args} />" } }, SquareL.parameters);
        }, "./src/shared/ui/Loader/Loader.stories.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { Dark: function () { return Dark; }, Normal: function () { return Normal; }, default: function () { return Loader_stories; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"), __webpack_require__("./node_modules/core-js/modules/es.function.bind.js"), __webpack_require__("./node_modules/react/index.js");
            var ThemeDecorator = __webpack_require__("./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx"), ThemeProvider = __webpack_require__("./src/shared/providers/ThemeProvider/index.ts"), classNames = __webpack_require__("./src/shared/lib/classNames/classNames.ts"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), Loader_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.module.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(Loader_module.Z, options);
            var Loader_Loader_module = Loader_module.Z && Loader_module.Z.locals ? Loader_module.Z.locals : void 0;
            var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"), Loader = function Loader(props) { var className = props.className; return (0, jsx_runtime.jsx)("div", { className: (0, classNames.A)(Loader_Loader_module.Loader, {}, [className]), children: (0, jsx_runtime.jsx)("div", { className: Loader_Loader_module.loader }) }); };
            Loader.displayName = "Loader";
            var Loader_stories = { title: "shared/Loader", component: Loader, argTypes: { backgroundColor: { control: "color" } } };
            var Template = function Template(args) { return (0, jsx_runtime.jsx)(Loader, Object.assign({}, args)); };
            Template.displayName = "Template";
            var Normal = Template.bind({}), Dark = Template.bind({});
            Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)], Normal.parameters = Object.assign({ storySource: { source: "(args) => <Loader {...args} />" } }, Normal.parameters), Dark.parameters = Object.assign({ storySource: { source: "(args) => <Loader {...args} />" } }, Dark.parameters);
        }, "./src/shared/ui/Modal/Modal.stories.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: function () { return __WEBPACK_DEFAULT_EXPORT__; }, Normal: function () { return Normal; }, Dark: function () { return Dark; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"), __webpack_require__("./node_modules/core-js/modules/es.function.bind.js"), __webpack_require__("./node_modules/react/index.js");
            var _app_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx"), _shared_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/shared/providers/ThemeProvider/index.ts"), _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/shared/ui/Modal/Modal.tsx"), react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
            var __WEBPACK_DEFAULT_EXPORT__ = { title: "shared/Modal", component: _Modal__WEBPACK_IMPORTED_MODULE_5__.u, argTypes: { backgroundColor: { control: "color" } }, decorators: [(0, _app_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.F)(_shared_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Q2.NORMAL)] };
            var Template = function Template(args) { return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_5__.u, Object.assign({}, args)); };
            Template.displayName = "Template";
            var Normal = Template.bind({});
            Normal.args = { isOpen: !0, children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam." };
            var Dark = Template.bind({});
            Dark.args = { isOpen: !0, children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam." }, Dark.decorators = [(0, _app_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.F)(_shared_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Q2.DARK)], Normal.parameters = Object.assign({ storySource: { source: "(args) => (\n  <Modal {...args} />\n)" } }, Normal.parameters), Dark.parameters = Object.assign({ storySource: { source: "(args) => (\n  <Modal {...args} />\n)" } }, Dark.parameters);
        }, "./src/widgets/Header/ui/Header.stories.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { Dark: function () { return Dark; }, Normal: function () { return Normal; }, default: function () { return Header_stories; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"), __webpack_require__("./node_modules/core-js/modules/es.function.bind.js");
            var react = __webpack_require__("./node_modules/react/index.js"), ThemeDecorator = __webpack_require__("./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx"), ThemeProvider = __webpack_require__("./src/shared/providers/ThemeProvider/index.ts"), useTranslation = (__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"), __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"), __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"), __webpack_require__("./node_modules/core-js/modules/es.function.name.js"), __webpack_require__("./node_modules/core-js/modules/es.array.from.js"), __webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js")), classNames = __webpack_require__("./src/shared/lib/classNames/classNames.ts"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), Header_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Header/ui/Header.module.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(Header_module.Z, options);
            var ui_Header_module = Header_module.Z && Header_module.Z.locals ? Header_module.Z.locals : void 0;
            var Button = __webpack_require__("./src/shared/ui/Button/Button.tsx"), Button_types = __webpack_require__("./src/shared/ui/Button/Button.types.ts"), Modal = __webpack_require__("./src/shared/ui/Modal/Modal.tsx"), LoginForm_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUserName/ui/LoginForm/LoginForm.module.scss"), LoginForm_module_options = {};
            LoginForm_module_options.styleTagTransform = styleTagTransform_default(), LoginForm_module_options.setAttributes = setAttributesWithoutAttributes_default(), LoginForm_module_options.insert = insertBySelector_default().bind(null, "head"), LoginForm_module_options.domAPI = styleDomAPI_default(), LoginForm_module_options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(LoginForm_module.Z, LoginForm_module_options);
            var LoginForm_LoginForm_module = LoginForm_module.Z && LoginForm_module.Z.locals ? LoginForm_module.Z.locals : void 0;
            var Input = __webpack_require__("./src/shared/ui/Input/Input.tsx"), jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"), LoginForm = function LoginForm(props) { var className = props.className, t = (0, useTranslation.$)().t; return (0, jsx_runtime.jsxs)("div", { className: (0, classNames.A)(LoginForm_LoginForm_module.loginForm, {}, [className]), children: [(0, jsx_runtime.jsx)(Input.I, { type: "text", className: LoginForm_LoginForm_module.input, placeholder: t("Enter username"), autofocus: !0 }), (0, jsx_runtime.jsx)(Input.I, { type: "text", className: LoginForm_LoginForm_module.input, placeholder: t("Enter password") }), (0, jsx_runtime.jsx)(Button.z, { className: LoginForm_LoginForm_module.button, theme: Button_types.l.OUTLINE, children: t("Sign in") })] }); };
            LoginForm.displayName = "LoginForm";
            var LoginModal = function LoginModal(props) { var className = props.className, isOpen = props.isOpen, onClose = props.onClose; return (0, jsx_runtime.jsx)(Modal.u, { lazy: !0, className: (0, classNames.A)("", {}, [className]), isOpen: isOpen, onClose: onClose, children: (0, jsx_runtime.jsx)(LoginForm, {}) }); };
            function _slicedToArray(arr, i) {
                return function _arrayWithHoles(arr) {
                    if (Array.isArray(arr))
                        return arr;
                }(arr) || function _iterableToArrayLimit(r, l) {
                    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                    if (null != t) {
                        var e, n, i, u, a = [], f = !0, o = !1;
                        try {
                            if (i = (t = t.call(r)).next, 0 === l) {
                                if (Object(t) !== t)
                                    return;
                                f = !1;
                            }
                            else
                                for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
                                    ;
                        }
                        catch (r) {
                            o = !0, n = r;
                        }
                        finally {
                            try {
                                if (!f && null != t.return && (u = t.return(), Object(u) !== u))
                                    return;
                            }
                            finally {
                                if (o)
                                    throw n;
                            }
                        }
                        return a;
                    }
                }(arr, i) || function _unsupportedIterableToArray(o, minLen) {
                    if (!o)
                        return;
                    if ("string" == typeof o)
                        return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    "Object" === n && o.constructor && (n = o.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(o);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return _arrayLikeToArray(o, minLen);
                }(arr, i) || function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }();
            }
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                    arr2[i] = arr[i];
                return arr2;
            }
            LoginModal.displayName = "LoginModal";
            var Header = function Header(props) { var className = props.className, t = (0, useTranslation.$)().t, _useState2 = _slicedToArray((0, react.useState)(!1), 2), isOpen = _useState2[0], setIsOpen = _useState2[1]; return (0, jsx_runtime.jsxs)("div", { className: (0, classNames.A)(ui_Header_module.NavBar, {}, [className]), children: [(0, jsx_runtime.jsx)(Button.z, { onClick: function openSignInModal() { setIsOpen(!0); }, theme: Button_types.l.CLEAR, children: t("Sign in") }), (0, jsx_runtime.jsx)(LoginModal, { isOpen: isOpen, onClose: function onClose() { console.log("onClose"), setIsOpen(!1); } })] }); };
            Header.displayName = "Header";
            var Header_stories = { title: "widgets/Header", component: Header, argTypes: { backgroundColor: { control: "color" } } };
            var Template = function Template(args) { return (0, jsx_runtime.jsx)(Header, Object.assign({}, args)); };
            Template.displayName = "Template";
            var Normal = Template.bind({}), Dark = Template.bind({});
            Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)], Normal.parameters = Object.assign({ storySource: { source: "(args) => <Header {...args} />" } }, Normal.parameters), Dark.parameters = Object.assign({ storySource: { source: "(args) => <Header {...args} />" } }, Dark.parameters);
        }, "./src/widgets/PageError/ui/PageError.stories.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { Dark: function () { return Dark; }, Normal: function () { return Normal; }, default: function () { return PageError_stories; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"), __webpack_require__("./node_modules/core-js/modules/es.function.bind.js"), __webpack_require__("./node_modules/react/index.js");
            var ThemeDecorator = __webpack_require__("./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx"), ThemeProvider = __webpack_require__("./src/shared/providers/ThemeProvider/index.ts"), useTranslation = __webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"), classNames = __webpack_require__("./src/shared/lib/classNames/classNames.ts"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), PageError_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(PageError_module.Z, options);
            var ui_PageError_module = PageError_module.Z && PageError_module.Z.locals ? PageError_module.Z.locals : void 0;
            var Button = __webpack_require__("./src/shared/ui/Button/Button.tsx"), Button_types = __webpack_require__("./src/shared/ui/Button/Button.types.ts"), jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"), PageError = function PageError(props) { var className = props.className, t = (0, useTranslation.$)().t; return (0, jsx_runtime.jsxs)("div", { className: (0, classNames.A)(ui_PageError_module.PageError, {}, [className]), children: [t("Something went wrong"), (0, jsx_runtime.jsx)(Button.z, { onClick: function reloadPage() { window.location.reload(); }, theme: Button_types.l.CLEAR, children: t("Reload page") })] }); };
            PageError.displayName = "PageError";
            var PageError_stories = { title: "widgets/PageError", component: PageError, argTypes: { backgroundColor: { control: "color" } } };
            var Template = function Template(args) { return (0, jsx_runtime.jsx)(PageError, Object.assign({}, args)); };
            Template.displayName = "Template";
            var Normal = Template.bind({}), Dark = Template.bind({});
            Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)], Normal.parameters = Object.assign({ storySource: { source: "(args) => <PageError {...args} />" } }, Normal.parameters), Dark.parameters = Object.assign({ storySource: { source: "(args) => <PageError {...args} />" } }, Dark.parameters);
        }, "./src/widgets/SideBar/ui/SideBar/SideBar.stories.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { Dark: function () { return Dark; }, Normal: function () { return Normal; }, default: function () { return SideBar_stories; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"), __webpack_require__("./node_modules/core-js/modules/es.function.bind.js");
            var react = __webpack_require__("./node_modules/react/index.js"), ThemeDecorator = __webpack_require__("./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx"), ThemeProvider = __webpack_require__("./src/shared/providers/ThemeProvider/index.ts"), useTranslation = (__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"), __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"), __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"), __webpack_require__("./node_modules/core-js/modules/es.function.name.js"), __webpack_require__("./node_modules/core-js/modules/es.array.from.js"), __webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js")), classNames = __webpack_require__("./src/shared/lib/classNames/classNames.ts"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), SideBar_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/SideBar/ui/SideBar/SideBar.module.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(SideBar_module.Z, options);
            var SideBar_SideBar_module = SideBar_module.Z && SideBar_module.Z.locals ? SideBar_module.Z.locals : void 0;
            var _path, Button = __webpack_require__("./src/shared/ui/Button/Button.tsx");
            function _extends() {
                return _extends = Object.assign ? Object.assign.bind() : function (target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source)
                            Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }, _extends.apply(this, arguments);
            }
            var arrow_left = function SvgArrowLeft(props) { return react.createElement("svg", _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, props), _path || (_path = react.createElement("path", { d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))); };
            var arrow_right_path;
            function arrow_right_extends() {
                return arrow_right_extends = Object.assign ? Object.assign.bind() : function (target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source)
                            Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }, arrow_right_extends.apply(this, arguments);
            }
            var arrow_right = function SvgArrowRight(props) { return react.createElement("svg", arrow_right_extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, props), arrow_right_path || (arrow_right_path = react.createElement("path", { d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" }))); };
            __webpack_require__("./node_modules/core-js/modules/es.promise.js"), __webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"), __webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"), __webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"), __webpack_require__("./node_modules/core-js/modules/es.object.create.js"), __webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"), __webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"), __webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"), __webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"), __webpack_require__("./node_modules/core-js/modules/es.array.reverse.js");
            var LangSwitcher_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/LangSwitcher/ui/LangSwitcher.module.scss"), LangSwitcher_module_options = {};
            LangSwitcher_module_options.styleTagTransform = styleTagTransform_default(), LangSwitcher_module_options.setAttributes = setAttributesWithoutAttributes_default(), LangSwitcher_module_options.insert = insertBySelector_default().bind(null, "head"), LangSwitcher_module_options.domAPI = styleDomAPI_default(), LangSwitcher_module_options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(LangSwitcher_module.Z, LangSwitcher_module_options);
            var ui_LangSwitcher_module = LangSwitcher_module.Z && LangSwitcher_module.Z.locals ? LangSwitcher_module.Z.locals : void 0;
            var Button_types = __webpack_require__("./src/shared/ui/Button/Button.types.ts"), jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
            function _regeneratorRuntime() {
                _regeneratorRuntime = function _regeneratorRuntime() { return e; };
                var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
                function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; }
                try {
                    define({}, "");
                }
                catch (t) {
                    define = function define(t, e, r) { return t[e] = r; };
                }
                function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; }
                function tryCatch(t, e, r) {
                    try {
                        return { type: "normal", arg: t.call(e, r) };
                    }
                    catch (t) {
                        return { type: "throw", arg: t };
                    }
                }
                e.wrap = wrap;
                var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
                function Generator() { }
                function GeneratorFunction() { }
                function GeneratorFunctionPrototype() { }
                var p = {};
                define(p, a, (function () { return this; }));
                var d = Object.getPrototypeOf, v = d && d(d(values([])));
                v && v !== r && n.call(v, a) && (p = v);
                var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
                function defineIteratorMethods(t) { ["next", "throw", "return"].forEach((function (e) { define(t, e, (function (t) { return this._invoke(e, t); })); })); }
                function AsyncIterator(t, e) {
                    function invoke(r, o, i, a) {
                        var c = tryCatch(t[r], t, o);
                        if ("throw" !== c.type) {
                            var u = c.arg, h = u.value;
                            return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then((function (t) { invoke("next", t, i, a); }), (function (t) { invoke("throw", t, i, a); })) : e.resolve(h).then((function (t) { u.value = t, i(u); }), (function (t) { return invoke("throw", t, i, a); }));
                        }
                        a(c.arg);
                    }
                    var r;
                    o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e((function (e, r) { invoke(t, n, e, r); })); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } });
                }
                function makeInvokeMethod(e, r, n) {
                    var o = h;
                    return function (i, a) {
                        if (o === f)
                            throw Error("Generator is already running");
                        if (o === s) {
                            if ("throw" === i)
                                throw a;
                            return { value: t, done: !0 };
                        }
                        for (n.method = i, n.arg = a;;) {
                            var c = n.delegate;
                            if (c) {
                                var u = maybeInvokeDelegate(c, n);
                                if (u) {
                                    if (u === y)
                                        continue;
                                    return u;
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === h)
                                    throw o = s, n.arg;
                                n.dispatchException(n.arg);
                            }
                            else
                                "return" === n.method && n.abrupt("return", n.arg);
                            o = f;
                            var p = tryCatch(e, r, n);
                            if ("normal" === p.type) {
                                if (o = n.done ? s : l, p.arg === y)
                                    continue;
                                return { value: p.arg, done: n.done };
                            }
                            "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
                        }
                    };
                }
                function maybeInvokeDelegate(e, r) {
                    var n = r.method, o = e.iterator[n];
                    if (o === t)
                        return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
                    var i = tryCatch(o, e.iterator, r.arg);
                    if ("throw" === i.type)
                        return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
                }
                function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); }
                function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; }
                function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); }
                function values(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r)
                            return r.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var o = -1, i = function next() {
                                for (; ++o < e.length;)
                                    if (n.call(e, o))
                                        return next.value = e[o], next.done = !1, next;
                                return next.value = t, next.done = !0, next;
                            };
                            return i.next = i;
                        }
                    }
                    throw new TypeError(typeof e + " is not iterable");
                }
                return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, (function () { return this; })), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then((function (t) { return t.done ? t.value : a.next(); })); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, (function () { return this; })), define(g, "toString", (function () { return "[object Generator]"; })), e.keys = function (t) {
                    var e = Object(t), r = [];
                    for (var n in e)
                        r.push(n);
                    return r.reverse(), function next() {
                        for (; r.length;) {
                            var t = r.pop();
                            if (t in e)
                                return next.value = t, next.done = !1, next;
                        }
                        return next.done = !0, next;
                    };
                }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e)
                            for (var r in this)
                                "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
                    }, stop: function stop() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval;
                    }, dispatchException: function dispatchException(e) {
                        if (this.done)
                            throw e;
                        var r = this;
                        function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o], a = i.completion;
                            if ("root" === i.tryLoc)
                                return handle("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc)
                                        return handle(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc)
                                        return handle(i.finallyLoc);
                                }
                                else if (c) {
                                    if (this.prev < i.catchLoc)
                                        return handle(i.catchLoc, !0);
                                }
                                else {
                                    if (!u)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc)
                                        return handle(i.finallyLoc);
                                }
                            }
                        }
                    }, abrupt: function abrupt(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break;
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
                    }, complete: function complete(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
                    }, finish: function finish(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t)
                                return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
                        }
                    }, catch: function _catch(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    resetTryEntry(r);
                                }
                                return o;
                            }
                        }
                        throw Error("illegal catch attempt");
                    }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e;
            }
            function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                try {
                    var info = gen[key](arg), value = info.value;
                }
                catch (error) {
                    return void reject(error);
                }
                info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
            }
            var LangSwitcher = function LangSwitcher(props) {
                var className = props.className, _short = props.short, _useTranslation = (0, useTranslation.$)(), i18n = _useTranslation.i18n, t = _useTranslation.t, changeLang = function () {
                    var _ref = function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise((function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(void 0); })); }; }(_regeneratorRuntime().mark((function _callee() {
                        return _regeneratorRuntime().wrap((function _callee$(_context) {
                            for (;;)
                                switch (_context.prev = _context.next) {
                                    case 0: return _context.next = 2, i18n.changeLanguage("ru" === i18n.language ? "en" : "ru");
                                    case 2:
                                    case "end": return _context.stop();
                                }
                        }), _callee);
                    })));
                    return function changeLang() { return _ref.apply(this, arguments); };
                }();
                return (0, jsx_runtime.jsx)("div", { className: (0, classNames.A)(ui_LangSwitcher_module.LangSwitcher, {}, [className]), children: (0, jsx_runtime.jsx)(Button.z, { onClick: changeLang, theme: Button_types.l.CLEAR, className: ui_LangSwitcher_module.button, children: t(_short ? "lang" : "language") }) });
            };
            LangSwitcher.displayName = "LangSwitcher";
            var ThemeSwitcher_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/ThemeSwitcher/ui/ThemeSwitcher.module.scss"), ThemeSwitcher_module_options = {};
            ThemeSwitcher_module_options.styleTagTransform = styleTagTransform_default(), ThemeSwitcher_module_options.setAttributes = setAttributesWithoutAttributes_default(), ThemeSwitcher_module_options.insert = insertBySelector_default().bind(null, "head"), ThemeSwitcher_module_options.domAPI = styleDomAPI_default(), ThemeSwitcher_module_options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(ThemeSwitcher_module.Z, ThemeSwitcher_module_options);
            var ui_ThemeSwitcher_module = ThemeSwitcher_module.Z && ThemeSwitcher_module.Z.locals ? ThemeSwitcher_module.Z.locals : void 0;
            var moon_path;
            function moon_extends() {
                return moon_extends = Object.assign ? Object.assign.bind() : function (target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source)
                            Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }, moon_extends.apply(this, arguments);
            }
            var moon = function SvgMoon(props) { return react.createElement("svg", moon_extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" }, props), moon_path || (moon_path = react.createElement("path", { d: "M223.5 32C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" }))); };
            var sun_path;
            function sun_extends() {
                return sun_extends = Object.assign ? Object.assign.bind() : function (target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source)
                            Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }, sun_extends.apply(this, arguments);
            }
            var sun = function SvgSun(props) { return react.createElement("svg", sun_extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, props), sun_path || (sun_path = react.createElement("path", { d: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391l-19.9 107.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121l19.9-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1-192 0zm224 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0z" }))); };
            var ThemeSwitcher = function ThemeSwitcher(props) { var className = props.className, _useTheme = (0, ThemeProvider.Fg)(), toggleTheme = _useTheme.toggleTheme, theme = _useTheme.theme; return (0, jsx_runtime.jsx)("div", { className: (0, classNames.A)(ui_ThemeSwitcher_module.ThemeSwitcher, {}, [className]), children: (0, jsx_runtime.jsx)(Button.z, { theme: Button_types.l.CLEAR, onClick: toggleTheme, children: "dark" === theme ? (0, jsx_runtime.jsx)(moon, { className: (0, classNames.A)(ui_ThemeSwitcher_module.icon, {}, [ui_ThemeSwitcher_module.iconMoon]) }) : (0, jsx_runtime.jsx)(sun, { className: (0, classNames.A)(ui_ThemeSwitcher_module.icon, {}, [ui_ThemeSwitcher_module.iconSun]) }) }) }); };
            ThemeSwitcher.displayName = "ThemeSwitcher";
            var _RoutePath, home_path, AppLink = __webpack_require__("./src/shared/ui/AppLink/AppLink.tsx"), AppRoutes = function (AppRoutes) { return AppRoutes.MAIN = "main", AppRoutes.ABOUT = "about", AppRoutes.NOT_FOUND = "not-found", AppRoutes; }({}), RoutePath = ((_RoutePath = {})[AppRoutes.MAIN] = "/", _RoutePath[AppRoutes.ABOUT] = "/about", _RoutePath[AppRoutes.NOT_FOUND] = "*", _RoutePath);
            function home_extends() {
                return home_extends = Object.assign ? Object.assign.bind() : function (target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source)
                            Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }, home_extends.apply(this, arguments);
            }
            var home = function SvgHome(props) { return react.createElement("svg", home_extends({ viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" }, props), home_path || (home_path = react.createElement("path", { d: "M.415 9.84 8.939.818 9.51.214A.676.676 0 0 1 10 0c.184 0 .36.077.49.214l9.095 9.625c.134.141.239.309.31.493.072.185.107.383.105.582-.009.822-.655 1.478-1.432 1.478h-.937V20H2.369v-7.608h-.957c-.377 0-.733-.156-1-.439a1.494 1.494 0 0 1-.306-.485A1.562 1.562 0 0 1 0 10.895c0-.397.148-.773.415-1.056Zm8.35 8.478h2.47v-4.765h-2.47v4.765Zm-4.807-7.607v7.607h3.395v-5.325c0-.517.395-.935.882-.935h3.53c.487 0 .882.418.882.935v5.325h3.395v-7.607h2.118L9.998 2.075l-.51.54-7.65 8.096h2.12Z" }))); };
            var _g, _defs;
            function about_extends() {
                return about_extends = Object.assign ? Object.assign.bind() : function (target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source)
                            Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }, about_extends.apply(this, arguments);
            }
            var about = function SvgAbout(props) { return react.createElement("svg", about_extends({ viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" }, props), _g || (_g = react.createElement("g", { clipPath: "url(#about_svg__a)" }, react.createElement("path", { d: "M8.333 6.667h5v1.11h-5v-1.11ZM8.333 8.889h5V10h-5V8.889ZM8.333 11.111h5v1.111h-5v-1.11ZM8.333 13.333h5v1.111h-5v-1.11ZM6.111 4.444h1.111v1.112h-1.11V4.444ZM6.111 6.667h1.111v1.11h-1.11v-1.11ZM6.111 8.889h1.111V10h-1.11V8.889ZM6.111 11.111h1.111v1.111h-1.11v-1.11ZM6.111 13.333h1.111v1.111h-1.11v-1.11ZM8.333 4.444v1.112h4.811a4.14 4.14 0 0 1-.494-1.112H8.333Z" }), react.createElement("path", { d: "M15.556 7.344v10.434H4.444V2.222h8.212a4.14 4.14 0 0 1 .488-1.11h-8.7a1.111 1.111 0 0 0-1.11 1.11v15.556a1.111 1.111 0 0 0 1.11 1.11h11.111a1.111 1.111 0 0 0 1.112-1.11V7.5a4.162 4.162 0 0 1-1.112-.156Z" }), react.createElement("path", { d: "M16.667 6.111a2.778 2.778 0 1 0 0-5.555 2.778 2.778 0 0 0 0 5.555Z" }))), _defs || (_defs = react.createElement("defs", null, react.createElement("clipPath", { id: "about_svg__a" }, react.createElement("path", { d: "M0 0h20v20H0z" }))))); };
            function _slicedToArray(arr, i) {
                return function _arrayWithHoles(arr) {
                    if (Array.isArray(arr))
                        return arr;
                }(arr) || function _iterableToArrayLimit(r, l) {
                    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                    if (null != t) {
                        var e, n, i, u, a = [], f = !0, o = !1;
                        try {
                            if (i = (t = t.call(r)).next, 0 === l) {
                                if (Object(t) !== t)
                                    return;
                                f = !1;
                            }
                            else
                                for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
                                    ;
                        }
                        catch (r) {
                            o = !0, n = r;
                        }
                        finally {
                            try {
                                if (!f && null != t.return && (u = t.return(), Object(u) !== u))
                                    return;
                            }
                            finally {
                                if (o)
                                    throw n;
                            }
                        }
                        return a;
                    }
                }(arr, i) || function _unsupportedIterableToArray(o, minLen) {
                    if (!o)
                        return;
                    if ("string" == typeof o)
                        return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    "Object" === n && o.constructor && (n = o.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(o);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return _arrayLikeToArray(o, minLen);
                }(arr, i) || function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }();
            }
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                    arr2[i] = arr[i];
                return arr2;
            }
            var SideBar = function SideBar(props) { var _classNames, _classNames2, _classNames3, className = props.className, t = (0, useTranslation.$)(["translation", "about"]).t, _useState2 = _slicedToArray((0, react.useState)(!1), 2), collapsed = _useState2[0], setCollapsed = _useState2[1], _useState4 = _slicedToArray((0, react.useState)(!1), 2), setIsOpen = (_useState4[0], _useState4[1]); (0, react.useCallback)((function () { setIsOpen(!0); }), []), (0, react.useCallback)((function () { setIsOpen(!1); }), []); return (0, jsx_runtime.jsxs)("div", { "data-testid": "SideBar", className: (0, classNames.A)(SideBar_SideBar_module.SideBar, (_classNames = {}, _classNames[SideBar_SideBar_module.collapsed] = collapsed, _classNames), [className]), children: [(0, jsx_runtime.jsxs)("div", { className: SideBar_SideBar_module.nav, children: [(0, jsx_runtime.jsxs)(AppLink.F, { className: SideBar_SideBar_module.item, to: RoutePath[AppRoutes.MAIN], theme: AppLink.J.PRIMARY, children: [(0, jsx_runtime.jsx)(home, { className: SideBar_SideBar_module.nav_icon }), (0, jsx_runtime.jsx)("span", { className: (0, classNames.A)(SideBar_SideBar_module.nav_text, (_classNames2 = {}, _classNames2[SideBar_SideBar_module.nav_text_hidden] = collapsed, _classNames2)), children: t("Main page") })] }), (0, jsx_runtime.jsxs)(AppLink.F, { className: SideBar_SideBar_module.item, to: RoutePath[AppRoutes.ABOUT], theme: AppLink.J.PRIMARY, children: [(0, jsx_runtime.jsx)(about, { className: SideBar_SideBar_module.nav_icon }), (0, jsx_runtime.jsx)("span", { className: (0, classNames.A)(SideBar_SideBar_module.nav_text, (_classNames3 = {}, _classNames3[SideBar_SideBar_module.nav_text_hidden] = collapsed, _classNames3)), children: t("About page", { ns: "about" }) })] })] }), (0, jsx_runtime.jsx)(Button.z, { onClick: function toggleBar() { setCollapsed((function (prev) { return !prev; })); }, className: SideBar_SideBar_module.button, theme: Button_types.l.BACKGROUND, square: !0, size: Button_types.q.L, "data-testid": "side-bar-button", children: collapsed ? (0, jsx_runtime.jsx)(arrow_right, { className: (0, classNames.A)(SideBar_SideBar_module.icon) }) : (0, jsx_runtime.jsx)(arrow_left, { className: (0, classNames.A)(SideBar_SideBar_module.icon) }) }), (0, jsx_runtime.jsxs)("div", { className: (0, classNames.A)(SideBar_SideBar_module.footer), children: [(0, jsx_runtime.jsx)(ThemeSwitcher, {}), (0, jsx_runtime.jsx)(LangSwitcher, { short: collapsed })] })] }); };
            SideBar.displayName = "SideBar";
            var SideBar_stories = { title: "widgets/SideBar", component: SideBar, argTypes: { backgroundColor: { control: "color" } } };
            var Template = function Template(args) { return (0, jsx_runtime.jsx)(SideBar, Object.assign({}, args)); };
            Template.displayName = "Template";
            var Normal = Template.bind({}), Dark = Template.bind({});
            Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)], Normal.parameters = Object.assign({ storySource: { source: "(args) => <SideBar {...args} />" } }, Normal.parameters), Dark.parameters = Object.assign({ storySource: { source: "(args) => <SideBar {...args} />" } }, Dark.parameters);
        }, "./src/app/config/storybook/ThemeDecorator/ThemeDecorator.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { F: function () { return ThemeDecorator; } });
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js"), ThemeDecorator = function ThemeDecorator(theme) { return function (StoryComponent) { return document.body.className = "app " + theme, (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: "app", className: "app " + theme, children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StoryComponent, {}) }); }; };
        }, "./src/shared/lib/classNames/classNames.ts": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { A: function () { return classNames; } });
            __webpack_require__("./node_modules/core-js/modules/es.string.trim.js"), __webpack_require__("./node_modules/core-js/modules/es.array.join.js"), __webpack_require__("./node_modules/core-js/modules/es.array.concat.js"), __webpack_require__("./node_modules/core-js/modules/es.array.map.js"), __webpack_require__("./node_modules/core-js/modules/es.array.filter.js"), __webpack_require__("./node_modules/core-js/modules/es.object.entries.js"), __webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"), __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"), __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.from.js"), __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"), __webpack_require__("./node_modules/core-js/modules/es.function.name.js");
            function _slicedToArray(arr, i) {
                return function _arrayWithHoles(arr) {
                    if (Array.isArray(arr))
                        return arr;
                }(arr) || function _iterableToArrayLimit(r, l) {
                    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                    if (null != t) {
                        var e, n, i, u, a = [], f = !0, o = !1;
                        try {
                            if (i = (t = t.call(r)).next, 0 === l) {
                                if (Object(t) !== t)
                                    return;
                                f = !1;
                            }
                            else
                                for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
                                    ;
                        }
                        catch (r) {
                            o = !0, n = r;
                        }
                        finally {
                            try {
                                if (!f && null != t.return && (u = t.return(), Object(u) !== u))
                                    return;
                            }
                            finally {
                                if (o)
                                    throw n;
                            }
                        }
                        return a;
                    }
                }(arr, i) || _unsupportedIterableToArray(arr, i) || function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }();
            }
            function _toConsumableArray(arr) {
                return function _arrayWithoutHoles(arr) {
                    if (Array.isArray(arr))
                        return _arrayLikeToArray(arr);
                }(arr) || function _iterableToArray(iter) {
                    if ("undefined" != typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"])
                        return Array.from(iter);
                }(arr) || _unsupportedIterableToArray(arr) || function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }();
            }
            function _unsupportedIterableToArray(o, minLen) {
                if (o) {
                    if ("string" == typeof o)
                        return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    return "Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n ? Array.from(o) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
                }
            }
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                    arr2[i] = arr[i];
                return arr2;
            }
            function classNames(cls) { var mods = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return [cls].concat(_toConsumableArray(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []), _toConsumableArray(Object.entries(mods).filter((function (_ref) { var _ref2 = _slicedToArray(_ref, 2), value = (_ref2[0], _ref2[1]); return Boolean(value); })).map((function (_ref3) { return _slicedToArray(_ref3, 1)[0]; })))).join(" ").trim(); }
        }, "./src/shared/providers/ThemeProvider/index.ts": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Q2: function () { return Theme; }, Fg: function () { return useTheme; } });
            __webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"), __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"), __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"), __webpack_require__("./node_modules/core-js/modules/es.function.name.js"), __webpack_require__("./node_modules/core-js/modules/es.array.from.js");
            var react = __webpack_require__("./node_modules/react/index.js"), ThemeContext = (0, react.createContext)({}), Theme = function (Theme) { return Theme.NORMAL = "normal", Theme.DARK = "dark", Theme; }({}), LOCAL_STORAGE_THEME_KEY = "theme";
            __webpack_require__("./node_modules/react/jsx-runtime.js");
            localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.NORMAL;
            function useTheme() { var _useContext = (0, react.useContext)(ThemeContext), theme = _useContext.theme, setTheme = _useContext.setTheme; return { toggleTheme: function toggleTheme() { var newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK; setTheme(newTheme), document.body.classList.remove(theme), document.body.classList.add(newTheme), localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme); }, theme: theme }; }
        }, "./src/shared/ui/AppLink/AppLink.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { F: function () { return AppLink; }, J: function () { return AppLinkThemes; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"), __webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.js"), __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
            var react_router_dom = __webpack_require__("./node_modules/react-router-dom/index.js"), classNames = __webpack_require__("./src/shared/lib/classNames/classNames.ts"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), AppLink_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(AppLink_module.Z, options);
            var AppLink_AppLink_module = AppLink_module.Z && AppLink_module.Z.locals ? AppLink_module.Z.locals : void 0;
            var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"), _excluded = ["className", "to", "children", "theme"];
            function _objectWithoutProperties(source, excluded) {
                if (null == source)
                    return {};
                var key, i, target = function _objectWithoutPropertiesLoose(source, excluded) {
                    if (null == source)
                        return {};
                    var key, i, target = {}, sourceKeys = Object.keys(source);
                    for (i = 0; i < sourceKeys.length; i++)
                        key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
                    return target;
                }(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }
            var AppLinkThemes = function (AppLinkThemes) { return AppLinkThemes.PRIMARY = "primary", AppLinkThemes.INVERTED = "inverted", AppLinkThemes; }({}), AppLink = function AppLink(props) { var className = props.className, to = props.to, children = props.children, _props$theme = props.theme, theme = void 0 === _props$theme ? AppLinkThemes.PRIMARY : _props$theme, otherProps = _objectWithoutProperties(props, _excluded); return (0, jsx_runtime.jsx)(react_router_dom.rU, Object.assign({ to: to, className: (0, classNames.A)(AppLink_AppLink_module.AppLink, {}, [className, AppLink_AppLink_module[theme]]) }, otherProps, { children: children })); };
            AppLink.displayName = "AppLink";
        }, "./src/shared/ui/Button/Button.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { z: function () { return Button; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"), __webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.js"), __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
            var classNames = __webpack_require__("./src/shared/lib/classNames/classNames.ts"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), Button_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(Button_module.Z, options);
            var Button_Button_module = Button_module.Z && Button_module.Z.locals ? Button_module.Z.locals : void 0;
            var Button_types = __webpack_require__("./src/shared/ui/Button/Button.types.ts"), jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"), _excluded = ["className", "children", "theme", "square", "size"];
            function _objectWithoutProperties(source, excluded) {
                if (null == source)
                    return {};
                var key, i, target = function _objectWithoutPropertiesLoose(source, excluded) {
                    if (null == source)
                        return {};
                    var key, i, target = {}, sourceKeys = Object.keys(source);
                    for (i = 0; i < sourceKeys.length; i++)
                        key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
                    return target;
                }(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }
            var Button = function Button(props) { var _classNames, className = props.className, children = props.children, theme = props.theme, square = props.square, _props$size = props.size, size = void 0 === _props$size ? Button_types.q.M : _props$size, otherProps = _objectWithoutProperties(props, _excluded); return (0, jsx_runtime.jsx)("button", Object.assign({ type: "button", className: (0, classNames.A)(Button_Button_module.Button, (_classNames = {}, _classNames[Button_Button_module.square] = square, _classNames), [className, Button_Button_module[theme], Button_Button_module[size]]) }, otherProps, { children: children })); };
            Button.displayName = "Button";
        }, "./src/shared/ui/Button/Button.types.ts": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { l: function () { return ButtonThemes; }, q: function () { return ButtonSize; } });
            var ButtonThemes = function (ButtonThemes) { return ButtonThemes.CLEAR = "clear", ButtonThemes.OUTLINE = "outline", ButtonThemes.BACKGROUND = "background", ButtonThemes.BACKGROUND_INVERTED = "backgroundInverted", ButtonThemes; }({}), ButtonSize = function (ButtonSize) { return ButtonSize.M = "size_m", ButtonSize.L = "size_l", ButtonSize.XL = "size_xl", ButtonSize; }({});
        }, "./src/shared/ui/Input/Input.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { I: function () { return Input; } });
            __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"), __webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.js"), __webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"), __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"), __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"), __webpack_require__("./node_modules/core-js/modules/es.function.name.js"), __webpack_require__("./node_modules/core-js/modules/es.array.from.js"), __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
            var react = __webpack_require__("./node_modules/react/index.js"), classNames = __webpack_require__("./src/shared/lib/classNames/classNames.ts"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), Input_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(Input_module.Z, options);
            var Input_Input_module = Input_module.Z && Input_module.Z.locals ? Input_module.Z.locals : void 0;
            var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"), _excluded = ["className", "value", "autofocus", "type", "placeholder", "onChange"];
            function _slicedToArray(arr, i) {
                return function _arrayWithHoles(arr) {
                    if (Array.isArray(arr))
                        return arr;
                }(arr) || function _iterableToArrayLimit(r, l) {
                    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                    if (null != t) {
                        var e, n, i, u, a = [], f = !0, o = !1;
                        try {
                            if (i = (t = t.call(r)).next, 0 === l) {
                                if (Object(t) !== t)
                                    return;
                                f = !1;
                            }
                            else
                                for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
                                    ;
                        }
                        catch (r) {
                            o = !0, n = r;
                        }
                        finally {
                            try {
                                if (!f && null != t.return && (u = t.return(), Object(u) !== u))
                                    return;
                            }
                            finally {
                                if (o)
                                    throw n;
                            }
                        }
                        return a;
                    }
                }(arr, i) || function _unsupportedIterableToArray(o, minLen) {
                    if (!o)
                        return;
                    if ("string" == typeof o)
                        return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    "Object" === n && o.constructor && (n = o.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(o);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return _arrayLikeToArray(o, minLen);
                }(arr, i) || function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }();
            }
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                    arr2[i] = arr[i];
                return arr2;
            }
            function _objectWithoutProperties(source, excluded) {
                if (null == source)
                    return {};
                var key, i, target = function _objectWithoutPropertiesLoose(source, excluded) {
                    if (null == source)
                        return {};
                    var key, i, target = {}, sourceKeys = Object.keys(source);
                    for (i = 0; i < sourceKeys.length; i++)
                        key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
                    return target;
                }(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }
            var Input = (0, react.memo)((function (props) { var className = props.className, value = props.value, autofocus = props.autofocus, _props$type = props.type, type = void 0 === _props$type ? "text" : _props$type, placeholder = props.placeholder, onChange = props.onChange, otherProps = _objectWithoutProperties(props, _excluded), ref = (0, react.useRef)(null), _useState2 = _slicedToArray((0, react.useState)(!1), 2), isFocused = _useState2[0], setIsFocused = _useState2[1], _useState4 = _slicedToArray((0, react.useState)(0), 2), caretPosition = _useState4[0], setCaretPosition = _useState4[1]; (0, react.useEffect)((function () { var _ref$current; autofocus && (setIsFocused(!0), null === (_ref$current = ref.current) || void 0 === _ref$current || _ref$current.focus()); }), [autofocus]); return (0, jsx_runtime.jsxs)("div", { className: (0, classNames.A)(Input_Input_module.input, {}, [className]), children: [placeholder && (0, jsx_runtime.jsx)("div", { className: Input_Input_module.placeholder, children: placeholder + ">" }), (0, jsx_runtime.jsxs)("div", { className: Input_Input_module.fieldWrapper, children: [(0, jsx_runtime.jsx)("input", Object.assign({ ref: ref, className: Input_Input_module.field, type: type, value: value, onChange: function onChangeHandler(e) { null == onChange || onChange(e.target.value), setCaretPosition(e.target.value.length); }, onSelect: function onSelect(e) { var _e$target; setCaretPosition((null == e || null === (_e$target = e.target) || void 0 === _e$target ? void 0 : _e$target.selectionStart) || 0); }, onFocus: function onFocus() { setIsFocused(!0); }, onBlur: function onBlur() { setIsFocused(!1); } }, otherProps)), isFocused && (0, jsx_runtime.jsx)("span", { style: { left: 9 * caretPosition + "px" }, className: Input_Input_module.caret })] })] }); }));
        }, "./src/shared/ui/Modal/Modal.tsx": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { u: function () { return Modal; } });
            __webpack_require__("./node_modules/core-js/modules/web.timers.js"), __webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"), __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"), __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"), __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"), __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"), __webpack_require__("./node_modules/core-js/modules/es.function.name.js"), __webpack_require__("./node_modules/core-js/modules/es.array.from.js");
            var react = __webpack_require__("./node_modules/react/index.js"), classNames = __webpack_require__("./src/shared/lib/classNames/classNames.ts"), injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"), injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag), styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"), styleDomAPI_default = __webpack_require__.n(styleDomAPI), insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"), insertBySelector_default = __webpack_require__.n(insertBySelector), setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"), setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes), insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"), insertStyleElement_default = __webpack_require__.n(insertStyleElement), styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"), styleTagTransform_default = __webpack_require__.n(styleTagTransform), Modal_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.scss"), options = {};
            options.styleTagTransform = styleTagTransform_default(), options.setAttributes = setAttributesWithoutAttributes_default(), options.insert = insertBySelector_default().bind(null, "head"), options.domAPI = styleDomAPI_default(), options.insertStyleElement = insertStyleElement_default();
            injectStylesIntoStyleTag_default()(Modal_module.Z, options);
            var Modal_Modal_module = Modal_module.Z && Modal_module.Z.locals ? Modal_module.Z.locals : void 0;
            var react_dom = __webpack_require__("./node_modules/react-dom/index.js"), Portal = function Portal(props) { var _ref, children = props.children, domNode = props.domNode, root = null !== (_ref = null != domNode ? domNode : document.getElementById("app")) && void 0 !== _ref ? _ref : document.body; return (0, react_dom.createPortal)(children, root); }, jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
            function _slicedToArray(arr, i) {
                return function _arrayWithHoles(arr) {
                    if (Array.isArray(arr))
                        return arr;
                }(arr) || function _iterableToArrayLimit(r, l) {
                    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                    if (null != t) {
                        var e, n, i, u, a = [], f = !0, o = !1;
                        try {
                            if (i = (t = t.call(r)).next, 0 === l) {
                                if (Object(t) !== t)
                                    return;
                                f = !1;
                            }
                            else
                                for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
                                    ;
                        }
                        catch (r) {
                            o = !0, n = r;
                        }
                        finally {
                            try {
                                if (!f && null != t.return && (u = t.return(), Object(u) !== u))
                                    return;
                            }
                            finally {
                                if (o)
                                    throw n;
                            }
                        }
                        return a;
                    }
                }(arr, i) || function _unsupportedIterableToArray(o, minLen) {
                    if (!o)
                        return;
                    if ("string" == typeof o)
                        return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    "Object" === n && o.constructor && (n = o.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(o);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return _arrayLikeToArray(o, minLen);
                }(arr, i) || function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }();
            }
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++)
                    arr2[i] = arr[i];
                return arr2;
            }
            var Modal = function Modal(props) { var _classNames, _classNames2, className = props.className, children = props.children, isOpen = props.isOpen, lazy = props.lazy, onClose = props.onClose, timeoutRef = (0, react.useRef)(), _useState2 = _slicedToArray((0, react.useState)(!1), 2), isClosing = _useState2[0], setIsClosing = _useState2[1], _useState4 = _slicedToArray((0, react.useState)(!1), 2), isMounted = _useState4[0], setIsMounted = _useState4[1], closeModal = (0, react.useCallback)((function () { onClose && (setIsClosing(!0), timeoutRef.current = setTimeout((function () { onClose(), setIsClosing(!1); }), 300)); }), [onClose]), onKeyDown = (0, react.useCallback)((function (e) { "Escape" === e.key && onClose(); }), [onClose]); return (0, react.useEffect)((function () { return window.addEventListener("keydown", onKeyDown), function () { window.removeEventListener("keydown", onKeyDown), clearTimeout(timeoutRef.current); }; }), [isOpen, onKeyDown]), (0, react.useEffect)((function () { isOpen && setIsMounted(!0); }), [isOpen]), lazy && !isMounted ? null : (0, jsx_runtime.jsx)(Portal, { children: (0, jsx_runtime.jsx)("div", { className: (0, classNames.A)(Modal_Modal_module.Modal, (_classNames = {}, _classNames[Modal_Modal_module.open] = isOpen, _classNames[Modal_Modal_module.closing] = isClosing, _classNames), [className]), children: (0, jsx_runtime.jsx)("div", { className: Modal_Modal_module.overlay, onClick: closeModal, children: (0, jsx_runtime.jsx)("div", { className: (0, classNames.A)(Modal_Modal_module.content, (_classNames2 = {}, _classNames2[Modal_Modal_module.contentOpened] = isOpen, _classNames2)), onClick: function onContentClick(e) { e.stopPropagation(); }, children: children }) }) }) }); };
            Modal.displayName = "Modal";
        }, "./storybook-init-framework-entry.js": function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js");
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, '*{margin:0;padding:0;box-sizing:border-box}input,button,textarea,select{margin:0;font:inherit}:root{--font-family-main: consolas, "Courier New", monospace;--font-size-m: 16px;--font-line-m: 24px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-size-l: 24px;--font-line-l: 32px;--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--font-size-xl: 32px;--font-line-xl: 40px;--font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);--navbar-height: 50px;--sidebar-width: 300px;--sidebar-width-collapsed: 80px;--overlay: rgb(0 0 0 / 80%);--z-main: 50;--z-select: 2000;--z-nav: 3000;--z-header: 4000;--z-other: 5000;--z-modal-backdrop: 7999;--z-modal: 8000;--z-notification: 9000}.dark{--bg-color: #202124;--bg-color-inverted: #c5d1de;--nav-bar-bg-color: #171717;--primary-color: #c5d1de;--secondary-color: #9793a9;--primary-color-inverted: #202124;--secondary-color-inverted: #9793a9}.normal{--bg-color: #c5d1de;--bg-color-inverted: #202124;--nav-bar-bg-color: #002b49;--primary-color: #7a63df;--secondary-color: #9793a9;--primary-color-inverted: #c5d1de;--secondary-color-inverted: #9793a9}body{font:var(--font-m);color:var(--primary-color)}.app{background:var(--bg-color);min-height:100vh}.content{display:flex}.content-body{flex:1;height:calc(100vh - var(--navbar-height))}', "", { version: 3, sources: ["webpack://./src/app/styles/reset.scss", "webpack://./src/app/styles/variables/global.scss", "webpack://./src/app/styles/themes/dark.scss", "webpack://./src/app/styles/themes/normal.scss", "webpack://./src/app/styles/index.scss"], names: [], mappings: "AAAA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,6BAII,QAAA,CACA,YAAA,CCXJ,MACI,sDAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,oBAAA,CACA,oBAAA,CACA,4EAAA,CACA,qBAAA,CACA,sBAAA,CACA,+BAAA,CAIA,2BAAA,CAIA,YAAA,CACA,gBAAA,CACA,aAAA,CACA,gBAAA,CACA,eAAA,CACA,wBAAA,CACA,eAAA,CACA,sBAAA,CC5BJ,MACI,mBAAA,CACA,4BAAA,CACA,2BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCPJ,QACI,mBAAA,CACA,4BAAA,CACA,2BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCFJ,KACI,kBAAA,CACA,0BAAA,CAGJ,KACI,0BAAA,CACA,gBAAA,CAGJ,SACI,YAAA,CAGJ,cACI,MAAA,CACA,yCAAA", sourcesContent: ["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    margin: 0;\n    font: inherit;\n}\n", ':root {\n    --font-family-main: consolas, "Courier New", monospace;\n    --font-size-m: 16px;\n    --font-line-m: 24px;\n    --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\n    --font-size-l: 24px;\n    --font-line-l: 32px;\n    --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\n    --font-size-xl: 32px;\n    --font-line-xl: 40px;\n    --font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);\n    --navbar-height: 50px;\n    --sidebar-width: 300px;\n    --sidebar-width-collapsed: 80px;\n\n    // colors\n\n    --overlay: rgb(0 0 0 / 80%);\n\n    // z-indexes\n\n    --z-main: 50;\n    --z-select: 2000;\n    --z-nav: 3000;\n    --z-header: 4000;\n    --z-other: 5000;\n    --z-modal-backdrop: 7999;\n    --z-modal: 8000;\n    --z-notification: 9000;\n}\n', ".dark {\n    --bg-color: #202124;\n    --bg-color-inverted: #c5d1de;\n    --nav-bar-bg-color: #171717;\n    --primary-color: #c5d1de;\n    --secondary-color: #9793a9;\n    --primary-color-inverted: #202124;\n    --secondary-color-inverted: #9793a9;\n}\n", ".normal {\n    --bg-color: #c5d1de;\n    --bg-color-inverted: #202124;\n    --nav-bar-bg-color: #002b49;\n    --primary-color: #7a63df;\n    --secondary-color: #9793a9;\n    --primary-color-inverted: #c5d1de;\n    --secondary-color-inverted: #9793a9;\n}\n", '@import "reset";\n@import "variables/global";\n@import "themes/dark";\n@import "themes/normal";\n\nbody {\n    font: var(--font-m);\n    color: var(--primary-color);\n}\n\n.app {\n    background: var(--bg-color);\n    min-height: 100vh;\n}\n\n.content {\n    display: flex;\n}\n\n.content-body {\n    flex: 1;\n    height: calc(100vh - var(--navbar-height));\n}\n'], sourceRoot: "" }]);
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUserName/ui/LoginForm/LoginForm.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-features-AuthByUserName-ui-LoginForm-LoginForm-module__login-form--bDloS{display:flex;flex-direction:column;gap:10px;width:400px;padding:20px;align-items:center}.src-features-AuthByUserName-ui-LoginForm-LoginForm-module__input--WvK8o{width:100%}.src-features-AuthByUserName-ui-LoginForm-LoginForm-module__button--XaFwy{align-self:flex-end}", "", { version: 3, sources: ["webpack://./src/features/AuthByUserName/ui/LoginForm/LoginForm.module.scss"], names: [], mappings: "AAAA,8EACI,YAAA,CACA,qBAAA,CACA,QAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CAGJ,yEACI,UAAA,CAGJ,0EACI,mBAAA", sourcesContent: [".login-form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 400px;\n    padding: 20px;\n    align-items: center;\n}\n\n.input {\n    width: 100%;\n}\n\n.button {\n    align-self: flex-end;\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { "login-form": "src-features-AuthByUserName-ui-LoginForm-LoginForm-module__login-form--bDloS", loginForm: "src-features-AuthByUserName-ui-LoginForm-LoginForm-module__login-form--bDloS", input: "src-features-AuthByUserName-ui-LoginForm-LoginForm-module__input--WvK8o", button: "src-features-AuthByUserName-ui-LoginForm-LoginForm-module__button--XaFwy" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/LangSwitcher/ui/LangSwitcher.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-features-LangSwitcher-ui-LangSwitcher-module__LangSwitcher--VO2os{display:flex;color:var(--primary-color)}.src-features-LangSwitcher-ui-LangSwitcher-module__button--S87e3{color:var(--primary-color)}", "", { version: 3, sources: ["webpack://./src/features/LangSwitcher/ui/LangSwitcher.module.scss"], names: [], mappings: "AAAA,uEACI,YAAA,CACA,0BAAA,CAGJ,iEACI,0BAAA", sourcesContent: [".LangSwitcher {\n    display: flex;\n    color: var(--primary-color);\n}\n\n.button {\n    color: var(--primary-color);\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { LangSwitcher: "src-features-LangSwitcher-ui-LangSwitcher-module__LangSwitcher--VO2os", langSwitcher: "src-features-LangSwitcher-ui-LangSwitcher-module__LangSwitcher--VO2os", button: "src-features-LangSwitcher-ui-LangSwitcher-module__button--S87e3" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/ThemeSwitcher/ui/ThemeSwitcher.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-features-ThemeSwitcher-ui-ThemeSwitcher-module__ThemeSwitcher--CbdWf{display:flex}.src-features-ThemeSwitcher-ui-ThemeSwitcher-module__icon--iJq6M{width:26px;height:26px}.src-features-ThemeSwitcher-ui-ThemeSwitcher-module__iconSun--UF3RH{fill:#e3e371}.src-features-ThemeSwitcher-ui-ThemeSwitcher-module__iconMoon--Hy9HI{fill:#5c5f69}", "", { version: 3, sources: ["webpack://./src/features/ThemeSwitcher/ui/ThemeSwitcher.module.scss"], names: [], mappings: "AAAA,0EACI,YAAA,CAGJ,iEACI,UAAA,CACA,WAAA,CAGJ,oEACI,YAAA,CAGJ,qEACI,YAAA", sourcesContent: [".ThemeSwitcher {\n    display: flex;\n}\n\n.icon {\n    width: 26px;\n    height: 26px;\n}\n\n.iconSun {\n    fill: #e3e371;\n}\n\n.iconMoon {\n    fill: #5c5f69;\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { ThemeSwitcher: "src-features-ThemeSwitcher-ui-ThemeSwitcher-module__ThemeSwitcher--CbdWf", themeSwitcher: "src-features-ThemeSwitcher-ui-ThemeSwitcher-module__ThemeSwitcher--CbdWf", icon: "src-features-ThemeSwitcher-ui-ThemeSwitcher-module__icon--iJq6M", iconSun: "src-features-ThemeSwitcher-ui-ThemeSwitcher-module__iconSun--UF3RH", iconMoon: "src-features-ThemeSwitcher-ui-ThemeSwitcher-module__iconMoon--Hy9HI" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/AboutPage/ui/AboutPage.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-pages-AboutPage-ui-AboutPage-module__AboutPage--KYUVI{color:var(--primary-color);height:100%;padding:30px}", "", { version: 3, sources: ["webpack://./src/pages/AboutPage/ui/AboutPage.module.scss"], names: [], mappings: "AAAA,2DACI,0BAAA,CACA,WAAA,CACA,YAAA", sourcesContent: [".AboutPage {\n    color: var(--primary-color);\n    height: 100%;\n    padding: 30px;\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { AboutPage: "src-pages-AboutPage-ui-AboutPage-module__AboutPage--KYUVI", aboutPage: "src-pages-AboutPage-ui-AboutPage-module__AboutPage--KYUVI" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/MainPage/ui/MainPage.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-pages-MainPage-ui-MainPage-module__MainPage--sdKIp{color:var(--primary-color);height:100%;padding:30px}", "", { version: 3, sources: ["webpack://./src/pages/MainPage/ui/MainPage.module.scss"], names: [], mappings: "AAAA,wDACI,0BAAA,CACA,WAAA,CACA,YAAA", sourcesContent: [".MainPage {\n    color: var(--primary-color);\n    height: 100%;\n    padding: 30px;\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { MainPage: "src-pages-MainPage-ui-MainPage-module__MainPage--sdKIp", mainPage: "src-pages-MainPage-ui-MainPage-module__MainPage--sdKIp" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9{height:100%;display:flex;justify-content:center;align-items:center}", "", { version: 3, sources: ["webpack://./src/pages/NotFoundPage/ui/NotFoundPage.module.scss"], names: [], mappings: "AAAA,oEACI,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA", sourcesContent: [".NotFoundPage {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { NotFoundPage: "src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9", notFoundPage: "src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW{text-decoration:none}.src-shared-ui-AppLink-AppLink-module__primary--lPwbq{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__inverted--LrMef{color:var(--primary-color-inverted)}", "", { version: 3, sources: ["webpack://./src/shared/ui/AppLink/AppLink.module.scss"], names: [], mappings: "AAAA,sDACI,oBAAA,CAGJ,sDACI,0BAAA,CAGJ,uDACI,mCAAA", sourcesContent: [".AppLink {\n    text-decoration: none;\n}\n\n.primary {\n    color: var(--primary-color);\n}\n\n.inverted {\n    color: var(--primary-color-inverted);\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { AppLink: "src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW", appLink: "src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW", primary: "src-shared-ui-AppLink-AppLink-module__primary--lPwbq", inverted: "src-shared-ui-AppLink-AppLink-module__inverted--LrMef" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;display:flex;border:none;padding:8px 20px;color:var(--primary-color)}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;outline:none;background:transparent;border:none}.src-shared-ui-Button-Button-module__outline--pxBl_{border:1px solid var(--primary-color);background:none;color:var(--primary-color);border-radius:5px}.src-shared-ui-Button-Button-module__background--nXdyj{background-color:var(--nav-bar-bg-color);color:var(--primary-color)}.src-shared-ui-Button-Button-module__background-inverted--wMlKF{background-color:var(--bg-color-inverted);color:var(--primary-color-inverted)}.src-shared-ui-Button-Button-module__square--pKS1A{padding:0;display:flex;justify-content:center;align-items:center}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_m--xvXQX{width:var(--font-line-m);height:var(--font-line-m)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_l--rsm7T{width:var(--font-line-l);height:var(--font-line-l)}.src-shared-ui-Button-Button-module__square--pKS1A.src-shared-ui-Button-Button-module__size_xl--WJ8He{width:var(--font-line-xl);height:var(--font-line-xl)}.src-shared-ui-Button-Button-module__size_m--xvXQX{font:var(--font-m)}.src-shared-ui-Button-Button-module__size_l--rsm7T{font:var(--font-l)}.src-shared-ui-Button-Button-module__size_xl--WJ8He{font:var(--font-xl)}", "", { version: 3, sources: ["webpack://./src/shared/ui/Button/Button.module.scss"], names: [], mappings: "AAAA,mDACI,cAAA,CACA,YAAA,CACA,WAAA,CACA,gBAAA,CACA,0BAAA,CAGJ,kDACI,SAAA,CACA,YAAA,CACA,sBAAA,CACA,WAAA,CAGJ,oDACI,qCAAA,CACA,eAAA,CACA,0BAAA,CACA,iBAAA,CAGJ,uDACI,wCAAA,CACA,0BAAA,CAGJ,gEACI,yCAAA,CACA,mCAAA,CAGJ,mDACI,SAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAGJ,qGACI,wBAAA,CACA,yBAAA,CAGJ,qGACI,wBAAA,CACA,yBAAA,CAGJ,sGACI,yBAAA,CACA,0BAAA,CAGJ,mDACI,kBAAA,CAGJ,mDACI,kBAAA,CAGJ,oDACI,mBAAA", sourcesContent: [".Button {\n    cursor: pointer;\n    display: flex;\n    border: none;\n    padding: 8px 20px;\n    color: var(--primary-color);\n}\n\n.clear {\n    padding: 0;\n    outline: none;\n    background: transparent;\n    border: none;\n}\n\n.outline {\n    border: 1px solid var(--primary-color);\n    background: none;\n    color: var(--primary-color);\n    border-radius: 5px;\n}\n\n.background {\n    background-color: var(--nav-bar-bg-color);\n    color: var(--primary-color);\n}\n\n.background-inverted {\n    background-color: var(--bg-color-inverted);\n    color: var(--primary-color-inverted);\n}\n\n.square {\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.square.size_m {\n    width: var(--font-line-m);\n    height: var(--font-line-m);\n}\n\n.square.size_l {\n    width: var(--font-line-l);\n    height: var(--font-line-l);\n}\n\n.square.size_xl {\n    width: var(--font-line-xl);\n    height: var(--font-line-xl);\n}\n\n.size_m {\n    font: var(--font-m);\n}\n\n.size_l {\n    font: var(--font-l);\n}\n\n.size_xl {\n    font: var(--font-xl);\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { Button: "src-shared-ui-Button-Button-module__Button--a4nOa", button: "src-shared-ui-Button-Button-module__Button--a4nOa", clear: "src-shared-ui-Button-Button-module__clear--FAEtI", outline: "src-shared-ui-Button-Button-module__outline--pxBl_", background: "src-shared-ui-Button-Button-module__background--nXdyj", "background-inverted": "src-shared-ui-Button-Button-module__background-inverted--wMlKF", backgroundInverted: "src-shared-ui-Button-Button-module__background-inverted--wMlKF", square: "src-shared-ui-Button-Button-module__square--pKS1A", size_m: "src-shared-ui-Button-Button-module__size_m--xvXQX", sizeM: "src-shared-ui-Button-Button-module__size_m--xvXQX", size_l: "src-shared-ui-Button-Button-module__size_l--rsm7T", sizeL: "src-shared-ui-Button-Button-module__size_l--rsm7T", size_xl: "src-shared-ui-Button-Button-module__size_xl--WJ8He", sizeXl: "src-shared-ui-Button-Button-module__size_xl--WJ8He" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/Input.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-shared-ui-Input-Input-module__input--LVdIP{width:100%;display:flex;align-items:center}.src-shared-ui-Input-Input-module__placeholder--emAQQ{margin-right:5px;white-space:nowrap}.src-shared-ui-Input-Input-module__field-wrapper--MRdDk{flex-grow:1;position:relative}.src-shared-ui-Input-Input-module__field--tjhlY{background:transparent;border:none;outline:none;color:transparent;text-shadow:0 0 0 var(--primary-color);width:100%}.src-shared-ui-Input-Input-module__field--tjhlY:focus{outline:none}.src-shared-ui-Input-Input-module__caret--lqMFG{position:absolute;height:3px;width:9px;background:var(--primary-color);bottom:0;left:0;animation:src-shared-ui-Input-Input-module__blink--M7n8f .7s infinite}@keyframes src-shared-ui-Input-Input-module__blink--M7n8f{0%{opacity:0}50%{opacity:.01}100%{opacity:1}}", "", { version: 3, sources: ["webpack://./src/shared/ui/Input/Input.module.scss"], names: [], mappings: "AAAA,gDACI,UAAA,CACA,YAAA,CACA,kBAAA,CAGJ,sDACI,gBAAA,CACA,kBAAA,CAGJ,wDACI,WAAA,CACA,iBAAA,CAGJ,gDACI,sBAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,sCAAA,CACA,UAAA,CAEA,sDACI,YAAA,CAIR,gDACI,iBAAA,CACA,UAAA,CACA,SAAA,CACA,+BAAA,CACA,QAAA,CACA,MAAA,CACA,qEAAA,CAGJ,0DACI,GACI,SAAA,CAGJ,IACI,WAAA,CAGJ,KACI,SAAA,CAAA", sourcesContent: [".input {\n    width: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.placeholder {\n    margin-right: 5px;\n    white-space: nowrap;\n}\n\n.field-wrapper {\n    flex-grow: 1;\n    position: relative;\n}\n\n.field {\n    background: transparent;\n    border: none;\n    outline: none;\n    color: transparent;\n    text-shadow: 0 0 0 var(--primary-color);\n    width: 100%;\n\n    &:focus {\n        outline: none;\n    }\n}\n\n.caret {\n    position: absolute;\n    height: 3px;\n    width: 9px;\n    background: var(--primary-color);\n    bottom: 0;\n    left: 0;\n    animation: blink 0.7s infinite;\n}\n\n@keyframes blink {\n    0% {\n        opacity: 0;\n    }\n\n    50% {\n        opacity: 0.01;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { input: "src-shared-ui-Input-Input-module__input--LVdIP", placeholder: "src-shared-ui-Input-Input-module__placeholder--emAQQ", "field-wrapper": "src-shared-ui-Input-Input-module__field-wrapper--MRdDk", fieldWrapper: "src-shared-ui-Input-Input-module__field-wrapper--MRdDk", field: "src-shared-ui-Input-Input-module__field--tjhlY", caret: "src-shared-ui-Input-Input-module__caret--lqMFG", blink: "src-shared-ui-Input-Input-module__blink--M7n8f" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-shared-ui-Loader-Loader-module__Loader--sTsTk{display:flex}.src-shared-ui-Loader-Loader-module__loader--Cvt9d{width:50px;aspect-ratio:1;border-radius:50%;border:8px solid var(--bg-color-inverted);animation:src-shared-ui-Loader-Loader-module__l20-1--vJlCh .8s infinite linear alternate,src-shared-ui-Loader-Loader-module__l20-2--n5WYS 1.6s infinite linear}@keyframes src-shared-ui-Loader-Loader-module__l20-1--vJlCh{0%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)}12.5%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)}25%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%)}50%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}62.5%{clip-path:polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}75%{clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%)}100%{clip-path:polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%)}}@keyframes src-shared-ui-Loader-Loader-module__l20-2--n5WYS{0%{transform:scaleY(1) rotate(0deg)}49.99%{transform:scaleY(1) rotate(135deg)}50%{transform:scaleY(-1) rotate(0deg)}100%{transform:scaleY(-1) rotate(-135deg)}}", "", { version: 3, sources: ["webpack://./src/shared/ui/Loader/Loader.module.scss"], names: [], mappings: "AAAA,mDACI,YAAA,CAIJ,mDACI,UAAA,CACA,cAAA,CACA,iBAAA,CACA,yCAAA,CACA,8JACI,CAIR,4DACI,GAAA,uEAAA,CACA,MAAA,2EAAA,CACA,IAAA,iFAAA,CACA,IAAA,8EAAA,CACA,MAAA,kFAAA,CACA,IAAA,yFAAA,CACA,KAAA,qFAAA,CAAA,CAGJ,4DACI,GAAA,gCAAA,CACA,OAAA,kCAAA,CACA,IAAA,iCAAA,CACA,KAAA,oCAAA,CAAA", sourcesContent: ['.Loader {\n    display: flex;\n}\n\n/* HTML: <div class="loader"></div> */\n.loader {\n    width: 50px;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    border: 8px solid var(--bg-color-inverted);\n    animation:\n        l20-1 0.8s infinite linear alternate,\n        l20-2 1.6s infinite linear;\n}\n\n@keyframes l20-1 {\n    0% { clip-path: polygon(50% 50%, 0       0, 50%   0%, 50%    0%, 50%    0%, 50%    0%, 50%    0%); }\n    12.5% { clip-path: polygon(50% 50%, 0       0, 50%   0%, 100%   0%, 100%   0%, 100%   0%, 100%   0%); }\n    25% { clip-path: polygon(50% 50%, 0       0, 50%   0%, 100%   0%, 100% 100%, 100% 100%, 100% 100%); }\n    50% { clip-path: polygon(50% 50%, 0       0, 50%   0%, 100%   0%, 100% 100%, 50%  100%, 0%   100%); }\n    62.5% { clip-path: polygon(50% 50%, 100%    0, 100%   0%, 100%   0%, 100% 100%, 50%  100%, 0%   100%); }\n    75% { clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50%  100%, 0%   100%); }\n    100% { clip-path: polygon(50% 50%, 50%  100%, 50% 100%, 50% 100%, 50% 100%, 50%  100%, 0%   100%); }\n}\n\n@keyframes l20-2 {\n    0% { transform: scaleY(1)  rotate(0deg); }\n    49.99% { transform: scaleY(1)  rotate(135deg); }\n    50% { transform: scaleY(-1) rotate(0deg); }\n    100% { transform: scaleY(-1) rotate(-135deg); }\n}\n'], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { Loader: "src-shared-ui-Loader-Loader-module__Loader--sTsTk", loader: "src-shared-ui-Loader-Loader-module__Loader--sTsTk", loader: "src-shared-ui-Loader-Loader-module__loader--Cvt9d", "l20-1": "src-shared-ui-Loader-Loader-module__l20-1--vJlCh", l201: "src-shared-ui-Loader-Loader-module__l20-1--vJlCh", "l20-2": "src-shared-ui-Loader-Loader-module__l20-2--n5WYS", l202: "src-shared-ui-Loader-Loader-module__l20-2--n5WYS" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Modal/Modal.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-shared-ui-Modal-Modal-module__Modal--ESw4g{position:fixed;width:100%;height:100%;top:0;left:0;transition:.3s ease;opacity:0;display:block;z-index:-1}.src-shared-ui-Modal-Modal-module__overlay--OTlZW{position:relative;background:var(--overlay);opacity:0;transition:opacity .3s ease;display:flex;align-items:center;justify-content:center;height:100%;width:100%;z-index:var(--z-modal-backdrop)}.src-shared-ui-Modal-Modal-module__content--NxhSG{position:relative;background:var(--bg-color);min-width:30%;max-width:80%;min-height:30%;max-height:80%;z-index:100000;border-radius:10px;display:block;transition:transform .4s ease;transform:scale(0.5)}.src-shared-ui-Modal-Modal-module__open--KnTwQ{opacity:1;z-index:var(--z-index-modal)}.src-shared-ui-Modal-Modal-module__open--KnTwQ .src-shared-ui-Modal-Modal-module__content--NxhSG{transform:scale(1)}.src-shared-ui-Modal-Modal-module__open--KnTwQ .src-shared-ui-Modal-Modal-module__overlay--OTlZW{opacity:1}.src-shared-ui-Modal-Modal-module__closing--MMA88 .src-shared-ui-Modal-Modal-module__content--NxhSG{transform:scale(0.1)}.src-shared-ui-Modal-Modal-module__closing--MMA88 .src-shared-ui-Modal-Modal-module__overlay--OTlZW{opacity:0}", "", { version: 3, sources: ["webpack://./src/shared/ui/Modal/Modal.module.scss"], names: [], mappings: "AAAA,gDACI,cAAA,CACA,UAAA,CACA,WAAA,CACA,KAAA,CACA,MAAA,CACA,mBAAA,CACA,SAAA,CACA,aAAA,CACA,UAAA,CAGJ,kDACI,iBAAA,CACA,yBAAA,CACA,SAAA,CACA,2BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,WAAA,CACA,UAAA,CACA,+BAAA,CAGJ,kDACI,iBAAA,CACA,0BAAA,CACA,aAAA,CACA,aAAA,CACA,cAAA,CACA,cAAA,CACA,cAAA,CACA,kBAAA,CACA,aAAA,CACA,6BAAA,CACA,oBAAA,CAGJ,+CACI,SAAA,CACA,4BAAA,CAEA,iGACI,kBAAA,CAGJ,iGACI,SAAA,CAKJ,oGACI,oBAAA,CAGJ,oGACI,SAAA", sourcesContent: [".Modal {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease;\n    opacity: 0;\n    display: block;\n    z-index: -1;\n}\n\n.overlay {\n    position: relative;\n    background: var(--overlay);\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    z-index: var(--z-modal-backdrop);\n}\n\n.content {\n    position: relative;\n    background: var(--bg-color);\n    min-width: 30%;\n    max-width: 80%;\n    min-height: 30%;\n    max-height: 80%;\n    z-index: 100000;\n    border-radius: 10px;\n    display: block;\n    transition: transform 0.4s ease;\n    transform: scale(0.5);\n}\n\n.open {\n    opacity: 1;\n    z-index: var(--z-index-modal);\n\n    & .content {\n        transform: scale(1);\n    }\n\n    & .overlay {\n        opacity: 1;\n    }\n}\n\n.closing {\n    & .content {\n        transform: scale(0.1);\n    }\n\n    & .overlay {\n        opacity: 0;\n    }\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { Modal: "src-shared-ui-Modal-Modal-module__Modal--ESw4g", modal: "src-shared-ui-Modal-Modal-module__Modal--ESw4g", overlay: "src-shared-ui-Modal-Modal-module__overlay--OTlZW", content: "src-shared-ui-Modal-Modal-module__content--NxhSG", open: "src-shared-ui-Modal-Modal-module__open--KnTwQ", closing: "src-shared-ui-Modal-Modal-module__closing--MMA88" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Header/ui/Header.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-widgets-Header-ui-Header-module__NavBar--EpubE{width:100%;height:var(--navbar-height);background-color:var(--nav-bar-bg-color);display:flex;justify-content:flex-end;align-items:center;gap:10px;padding:0 20px}", "", { version: 3, sources: ["webpack://./src/widgets/Header/ui/Header.module.scss"], names: [], mappings: "AAAA,oDACI,UAAA,CACA,2BAAA,CACA,wCAAA,CACA,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,QAAA,CACA,cAAA", sourcesContent: [".NavBar {\n    width: 100%;\n    height: var(--navbar-height);\n    background-color: var(--nav-bar-bg-color);\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 10px;\n    padding: 0 20px;\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { NavBar: "src-widgets-Header-ui-Header-module__NavBar--EpubE", navBar: "src-widgets-Header-ui-Header-module__NavBar--EpubE" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-widgets-PageError-ui-PageError-module__PageError--HSFBb{display:flex;height:100vh;font:var(--font-l);width:100%;justify-content:center;align-items:center;flex-direction:column}", "", { version: 3, sources: ["webpack://./src/widgets/PageError/ui/PageError.module.scss"], names: [], mappings: "AAAA,6DACI,YAAA,CACA,YAAA,CACA,kBAAA,CACA,UAAA,CACA,sBAAA,CACA,kBAAA,CACA,qBAAA", sourcesContent: [".PageError {\n    display: flex;\n    height: 100vh;\n    font: var(--font-l);\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { PageError: "src-widgets-PageError-ui-PageError-module__PageError--HSFBb", pageError: "src-widgets-PageError-ui-PageError-module__PageError--HSFBb" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/SideBar/ui/SideBar/SideBar.module.scss": function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, { Z: function () { return __WEBPACK_DEFAULT_EXPORT__; } });
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"), _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([module.id, ".src-widgets-SideBar-ui-SideBar-SideBar-module__SideBar--hCtfK{height:calc(100vh - var(--navbar-height));position:relative;width:var(--sidebar-width);transition:width .3s ease;background-color:var(--nav-bar-bg-color)}.src-widgets-SideBar-ui-SideBar-SideBar-module__collapsed--rUaZo{width:var(--sidebar-width-collapsed)}.src-widgets-SideBar-ui-SideBar-SideBar-module__button--tJ68M{margin-left:auto;position:absolute;bottom:var(--font-line-l);right:calc(var(--font-line-l)*-1)}.src-widgets-SideBar-ui-SideBar-SideBar-module__icon--tV94q{fill:var(--primary-color);width:var(--font-size-m);height:var(--font-size-m)}.src-widgets-SideBar-ui-SideBar-SideBar-module__footer--LNoyl{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:15px}.src-widgets-SideBar-ui-SideBar-SideBar-module__nav--XMMvV{display:flex;flex-direction:column;gap:20px;margin-top:20px;margin-left:30px}.src-widgets-SideBar-ui-SideBar-SideBar-module__item--j7ioN{display:flex;align-items:center}.src-widgets-SideBar-ui-SideBar-SideBar-module__nav_icon--DoCrU{fill:var(--primary-color);width:var(--font-size-l);height:var(--font-size-l);flex-shrink:0}.src-widgets-SideBar-ui-SideBar-SideBar-module__nav_text--jv3aq{margin-left:15px;opacity:1;transition:opacity .3s ease;white-space:nowrap}.src-widgets-SideBar-ui-SideBar-SideBar-module__nav_text_hidden--Dsa1h{opacity:0}", "", { version: 3, sources: ["webpack://./src/widgets/SideBar/ui/SideBar/SideBar.module.scss"], names: [], mappings: "AAAA,+DACI,yCAAA,CACA,iBAAA,CACA,0BAAA,CACA,yBAAA,CACA,wCAAA,CAGJ,iEACI,oCAAA,CAGJ,8DACI,gBAAA,CACA,iBAAA,CACA,yBAAA,CACA,iCAAA,CAGJ,4DACI,yBAAA,CACA,wBAAA,CACA,yBAAA,CAGJ,8DACI,iBAAA,CACA,WAAA,CACA,QAAA,CACA,0BAAA,CACA,YAAA,CACA,kBAAA,CACA,QAAA,CAGJ,2DACI,YAAA,CACA,qBAAA,CACA,QAAA,CACA,eAAA,CACA,gBAAA,CAGJ,4DACI,YAAA,CACA,kBAAA,CAGJ,gEACI,yBAAA,CACA,wBAAA,CACA,yBAAA,CACA,aAAA,CAGJ,gEACI,gBAAA,CACA,SAAA,CACA,2BAAA,CACA,kBAAA,CAGJ,uEACI,SAAA", sourcesContent: [".SideBar {\n    height: calc(100vh - var(--navbar-height));\n    position: relative;\n    width: var(--sidebar-width);\n    transition: width 0.3s ease;\n    background-color: var(--nav-bar-bg-color);\n}\n\n.collapsed {\n    width: var(--sidebar-width-collapsed);\n}\n\n.button {\n    margin-left: auto;\n    position: absolute;\n    bottom: var(--font-line-l);\n    right: calc(var(--font-line-l) * -1);\n}\n\n.icon {\n    fill: var(--primary-color);\n    width: var(--font-size-m);\n    height: var(--font-size-m);\n}\n\n.footer {\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.nav {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin-top: 20px;\n    margin-left: 30px;\n}\n\n.item {\n    display: flex;\n    align-items: center;\n}\n\n.nav_icon {\n    fill: var(--primary-color);\n    width: var(--font-size-l);\n    height: var(--font-size-l);\n    flex-shrink: 0;\n}\n\n.nav_text {\n    margin-left: 15px;\n    opacity: 1;\n    transition: opacity 0.3s ease;\n    white-space: nowrap;\n}\n\n.nav_text_hidden {\n    opacity: 0;\n}\n"], sourceRoot: "" }]), ___CSS_LOADER_EXPORT___.locals = { SideBar: "src-widgets-SideBar-ui-SideBar-SideBar-module__SideBar--hCtfK", sideBar: "src-widgets-SideBar-ui-SideBar-SideBar-module__SideBar--hCtfK", collapsed: "src-widgets-SideBar-ui-SideBar-SideBar-module__collapsed--rUaZo", button: "src-widgets-SideBar-ui-SideBar-SideBar-module__button--tJ68M", icon: "src-widgets-SideBar-ui-SideBar-SideBar-module__icon--tV94q", footer: "src-widgets-SideBar-ui-SideBar-SideBar-module__footer--LNoyl", nav: "src-widgets-SideBar-ui-SideBar-SideBar-module__nav--XMMvV", item: "src-widgets-SideBar-ui-SideBar-SideBar-module__item--j7ioN", nav_icon: "src-widgets-SideBar-ui-SideBar-SideBar-module__nav_icon--DoCrU", navIcon: "src-widgets-SideBar-ui-SideBar-SideBar-module__nav_icon--DoCrU", nav_text: "src-widgets-SideBar-ui-SideBar-SideBar-module__nav_text--jv3aq", navText: "src-widgets-SideBar-ui-SideBar-SideBar-module__nav_text--jv3aq", nav_text_hidden: "src-widgets-SideBar-ui-SideBar-SideBar-module__nav_text_hidden--Dsa1h", navTextHidden: "src-widgets-SideBar-ui-SideBar-SideBar-module__nav_text_hidden--Dsa1h" };
            var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        }, "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$": function (module, __unused_webpack_exports, __webpack_require__) {
            var map = { "./pages/AboutPage/ui/AboutPage.stories.tsx": "./src/pages/AboutPage/ui/AboutPage.stories.tsx", "./pages/MainPage/ui/MainPage.stories.tsx": "./src/pages/MainPage/ui/MainPage.stories.tsx", "./pages/NotFoundPage/ui/NotFoundPage.stories.tsx": "./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx", "./shared/ui/AppLink/AppLink.stories.tsx": "./src/shared/ui/AppLink/AppLink.stories.tsx", "./shared/ui/Button/Button.stories.tsx": "./src/shared/ui/Button/Button.stories.tsx", "./shared/ui/Loader/Loader.stories.tsx": "./src/shared/ui/Loader/Loader.stories.tsx", "./shared/ui/Modal/Modal.stories.tsx": "./src/shared/ui/Modal/Modal.stories.tsx", "./widgets/Header/ui/Header.stories.tsx": "./src/widgets/Header/ui/Header.stories.tsx", "./widgets/PageError/ui/PageError.stories.tsx": "./src/widgets/PageError/ui/PageError.stories.tsx", "./widgets/SideBar/ui/SideBar/SideBar.stories.tsx": "./src/widgets/SideBar/ui/SideBar/SideBar.stories.tsx" };
            function webpackContext(req) { var id = webpackContextResolve(req); return __webpack_require__(id); }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    throw e.code = "MODULE_NOT_FOUND", e;
                }
                return map[req];
            }
            webpackContext.keys = function webpackContextKeys() { return Object.keys(map); }, webpackContext.resolve = webpackContextResolve, module.exports = webpackContext, webpackContext.id = "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$";
        }, "?4f7e": function () { } }, function (__webpack_require__) { var __webpack_exec__ = function (moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }; __webpack_require__.O(0, [375], (function () { return (__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"), __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"), __webpack_exec__("./storybook-init-framework-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"), __webpack_exec__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"), __webpack_exec__("./config/storybook/preview.js-generated-config-entry.js"), __webpack_exec__("./generated-stories-entry.js")); })); __webpack_require__.O(); }]);
