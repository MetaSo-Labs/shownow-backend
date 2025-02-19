"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6773],{

/***/ 50168:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35453);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80189);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63297);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93556);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82187);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72439);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57495);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42335);




var _excluded = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];
// Seems this is used for iconFont





var Icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var className = props.className,
    Component = props.component,
    viewBox = props.viewBox,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    children = props.children,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(props, _excluded);
  var iconRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var mergedRef = (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_2__/* .useComposeRef */ .x1)(iconRef, ref);
  (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .warning */ .Kp)(Boolean(Component || children), 'Should have `component` prop or `children`.');
  (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useInsertStyles */ .C3)(iconRef);
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Context__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(rootClassName, prefixCls, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, "".concat(prefixCls, "-spin"), !!spin && !!Component), className);
  var svgClassString = classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, "".concat(prefixCls, "-spin"), !!spin));
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var innerSvgProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, _utils__WEBPACK_IMPORTED_MODULE_4__/* .svgBaseProps */ .vD), {}, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });
  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }

  // component > children
  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, innerSvgProps, children);
    }
    if (children) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .warning */ .Kp)(Boolean(viewBox) || react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) && react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children).type === 'use', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, innerSvgProps, {
        viewBox: viewBox
      }), children);
    }
    return null;
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
    role: "img"
  }, restProps, {
    ref: mergedRef,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), renderInnerNode());
});
Icon.displayName = 'AntdIcon';
/* harmony default export */ __webpack_exports__.Z = (Icon);

/***/ }),

/***/ 83378:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_FileTextOutlined; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(35453);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/FileTextOutlined.js
// This icon file is generated automatically.
var FileTextOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z" } }] }, "name": "file-text", "theme": "outlined" };
/* harmony default export */ var asn_FileTextOutlined = (FileTextOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/AntdIcon.js
var AntdIcon = __webpack_require__(11256);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileTextOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FileTextOutlined_FileTextOutlined = function FileTextOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_FileTextOutlined
  }));
};

/**![file-text](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OC42TDYzOS40IDczLjRjLTYtNi0xNC4xLTkuNC0yMi42LTkuNEgxOTJjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjgzMmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg2NDBjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzExLjNjMC04LjUtMy40LTE2LjctOS40LTIyLjd6TTc5MC4yIDMyNkg2MDJWMTM3LjhMNzkwLjIgMzI2em0xLjggNTYySDIzMlYxMzZoMzAydjIxNmE0MiA0MiAwIDAwNDIgNDJoMjE2djQ5NHpNNTA0IDYxOEgzMjBjLTQuNCAwLTggMy42LTggOHY0OGMwIDQuNCAzLjYgOCA4IDhoMTg0YzQuNCAwIDgtMy42IDgtOHYtNDhjMC00LjQtMy42LTgtOC04ek0zMTIgNDkwdjQ4YzAgNC40IDMuNiA4IDggOGgzODRjNC40IDAgOC0zLjYgOC04di00OGMwLTQuNC0zLjYtOC04LThIMzIwYy00LjQgMC04IDMuNi04IDh6IiAvPjwvc3ZnPg==) */
var RefIcon = /*#__PURE__*/react.forwardRef(FileTextOutlined_FileTextOutlined);
if (false) {}
/* harmony default export */ var icons_FileTextOutlined = (RefIcon);

/***/ }),

/***/ 62608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_MenuOutlined; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(35453);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/MenuOutlined.js
// This icon file is generated automatically.
var MenuOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" } }] }, "name": "menu", "theme": "outlined" };
/* harmony default export */ var asn_MenuOutlined = (MenuOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/AntdIcon.js
var AntdIcon = __webpack_require__(11256);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MenuOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var MenuOutlined_MenuOutlined = function MenuOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_MenuOutlined
  }));
};

/**![menu](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkwNCAxNjBIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHptMCA2MjRIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHptMC0zMTJIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHoiIC8+PC9zdmc+) */
var RefIcon = /*#__PURE__*/react.forwardRef(MenuOutlined_MenuOutlined);
if (false) {}
/* harmony default export */ var icons_MenuOutlined = (RefIcon);

/***/ }),

/***/ 79161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_PoweroffOutlined; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(35453);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/PoweroffOutlined.js
// This icon file is generated automatically.
var PoweroffOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M705.6 124.9a8 8 0 00-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0162.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0127.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 01-76.3 113.3 353.06 353.06 0 01-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 01-113.2-76.4A355.92 355.92 0 01184 650.4a355 355 0 01-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z" } }] }, "name": "poweroff", "theme": "outlined" };
/* harmony default export */ var asn_PoweroffOutlined = (PoweroffOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/AntdIcon.js
var AntdIcon = __webpack_require__(11256);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/PoweroffOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PoweroffOutlined_PoweroffOutlined = function PoweroffOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_PoweroffOutlined
  }));
};

/**![poweroff](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcwNS42IDEyNC45YTggOCAwIDAwLTExLjYgNy4ydjY0LjJjMCA1LjUgMi45IDEwLjYgNy41IDEzLjZhMzUyLjIgMzUyLjIgMCAwMTYyLjIgNDkuOGMzMi43IDMyLjggNTguNCA3MC45IDc2LjMgMTEzLjNhMzU1IDM1NSAwIDAxMjcuOSAxMzguN2MwIDQ4LjEtOS40IDk0LjgtMjcuOSAxMzguN2EzNTUuOTIgMzU1LjkyIDAgMDEtNzYuMyAxMTMuMyAzNTMuMDYgMzUzLjA2IDAgMDEtMTEzLjIgNzYuNGMtNDMuOCAxOC42LTkwLjUgMjgtMTM4LjUgMjhzLTk0LjctOS40LTEzOC41LTI4YTM1My4wNiAzNTMuMDYgMCAwMS0xMTMuMi03Ni40QTM1NS45MiAzNTUuOTIgMCAwMTE4NCA2NTAuNGEzNTUgMzU1IDAgMDEtMjcuOS0xMzguN2MwLTQ4LjEgOS40LTk0LjggMjcuOS0xMzguNyAxNy45LTQyLjQgNDMuNi04MC41IDc2LjMtMTEzLjMgMTktMTkgMzkuOC0zNS42IDYyLjItNDkuOCA0LjctMi45IDcuNS04LjEgNy41LTEzLjZWMTMyYzAtNi02LjMtOS44LTExLjYtNy4yQzE3OC41IDE5NS4yIDgyIDMzOS4zIDgwIDUwNi4zIDc3LjIgNzQ1LjEgMjcyLjUgOTQzLjUgNTExLjIgOTQ0YzIzOSAuNSA0MzIuOC0xOTMuMyA0MzIuOC00MzIuNCAwLTE2OS4yLTk3LTMxNS43LTIzOC40LTM4Ni43ek00ODAgNTYwaDY0YzQuNCAwIDgtMy42IDgtOFY4OGMwLTQuNC0zLjYtOC04LThoLTY0Yy00LjQgMC04IDMuNi04IDh2NDY0YzAgNC40IDMuNiA4IDggOHoiIC8+PC9zdmc+) */
var RefIcon = /*#__PURE__*/react.forwardRef(PoweroffOutlined_PoweroffOutlined);
if (false) {}
/* harmony default export */ var icons_PoweroffOutlined = (RefIcon);

/***/ }),

/***/ 87616:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_UserOutlined; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(35453);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/UserOutlined.js
// This icon file is generated automatically.
var UserOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] }, "name": "user", "theme": "outlined" };
/* harmony default export */ var asn_UserOutlined = (UserOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/AntdIcon.js
var AntdIcon = __webpack_require__(11256);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UserOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var UserOutlined_UserOutlined = function UserOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_UserOutlined
  }));
};

/**![user](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1OC41IDc2My42YTM3NCAzNzQgMCAwMC04MC42LTExOS41IDM3NS42MyAzNzUuNjMgMCAwMC0xMTkuNS04MC42Yy0uNC0uMi0uOC0uMy0xLjItLjVDNzE5LjUgNTE4IDc2MCA0NDQuNyA3NjAgMzYyYzAtMTM3LTExMS0yNDgtMjQ4LTI0OFMyNjQgMjI1IDI2NCAzNjJjMCA4Mi43IDQwLjUgMTU2IDEwMi44IDIwMS4xLS40LjItLjguMy0xLjIuNS00NC44IDE4LjktODUgNDYtMTE5LjUgODAuNmEzNzUuNjMgMzc1LjYzIDAgMDAtODAuNiAxMTkuNUEzNzEuNyAzNzEuNyAwIDAwMTM2IDkwMS44YTggOCAwIDAwOCA4LjJoNjBjNC40IDAgNy45LTMuNSA4LTcuOCAyLTc3LjIgMzMtMTQ5LjUgODcuOC0yMDQuMyA1Ni43LTU2LjcgMTMyLTg3LjkgMjEyLjItODcuOXMxNTUuNSAzMS4yIDIxMi4yIDg3LjlDNzc5IDc1Mi43IDgxMCA4MjUgODEyIDkwMi4yYy4xIDQuNCAzLjYgNy44IDggNy44aDYwYTggOCAwIDAwOC04LjJjLTEtNDcuOC0xMC45LTk0LjMtMjkuNS0xMzguMnpNNTEyIDUzNGMtNDUuOSAwLTg5LjEtMTcuOS0xMjEuNi01MC40UzM0MCA0MDcuOSAzNDAgMzYyYzAtNDUuOSAxNy45LTg5LjEgNTAuNC0xMjEuNlM0NjYuMSAxOTAgNTEyIDE5MHM4OS4xIDE3LjkgMTIxLjYgNTAuNFM2ODQgMzE2LjEgNjg0IDM2MmMwIDQ1LjktMTcuOSA4OS4xLTUwLjQgMTIxLjZTNTU3LjkgNTM0IDUxMiA1MzR6IiAvPjwvc3ZnPg==) */
var RefIcon = /*#__PURE__*/react.forwardRef(UserOutlined_UserOutlined);
if (false) {}
/* harmony default export */ var icons_UserOutlined = (RefIcon);

/***/ }),

/***/ 9126:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ Activity; }
/* harmony export */ });
/* unused harmony export Offscreen */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);


var Repeater = function Repeater(props) {
  // props
  var mode = props.mode,
    children = props.children;
  // refs
  var promiseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var resolveRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // methods
  var resolvePromise = function resolvePromise(ignoreMode) {
    if ((ignoreMode || mode === "visible") && typeof resolveRef.current === "function") {
      resolveRef.current();
      resolveRef.current = null;
      promiseRef.current = null;
    }
  };
  // effect
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      return resolvePromise(true);
    };
  }, []);
  if (mode === "hidden") {
    if (resolveRef.current === null) {
      promiseRef.current = new Promise(function (resolve) {
        return resolveRef.current = resolve;
      });
    }
    var promise = promiseRef.current;
    // @ts-ignore
    if ( false && typeof react__WEBPACK_IMPORTED_MODULE_0__.use === "function") {
      // @ts-ignore
      react__WEBPACK_IMPORTED_MODULE_0__.use(promise);
    } else {
      throw promise;
    }
  }
  resolvePromise();
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, typeof children === 'function' ? children(mode) : children);
};

/**
 * @description determine whether it is a browser environment
 */
var canUseDOM = function canUseDOM() {
  return !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
};

var isSupportStableActivity = ( false);
var isBrowser = /*#__PURE__*/canUseDOM();
var NativeActivity = isSupportStableActivity
// @ts-ignore
? react__WEBPACK_IMPORTED_MODULE_0__.Activity :  false
// @ts-ignore
? react__WEBPACK_IMPORTED_MODULE_0__.unstable_Activity : null;
if (isBrowser && isSupportStableActivity) {
  console.warn(navigator.language === "zh-CN" ? '检测到您使用的react已经原生支持了Activity，我们 建议您迁移至原生Activity。' : 'It is detected that the react you are using already supports Activity natively. We recommend that you migrate to native Activity.');
}
/**
 *
 * @param {IProps} props
 * @description This is a component that keeps its state while hiding it
 * @example
 * when visible
 * <Activity mode="visible">
 *  <Child />
 * </Activity>
 * when hidden
 * <Activity mode="hidden">
 *  <Child />
 * </Activity>
 */
var Activity = function Activity(props) {
  // props
  var mode = props.mode,
    children = props.children;
  if (NativeActivity) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(NativeActivity, {
      mode: mode
    }, children);
  }
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: null
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(Repeater, {
    mode: mode
  }, children));
};
/**
 * @deprecated
 * @description please rename Offscreen to Activity
 */
var Offscreen = (/* unused pure expression or super */ null && (Activity));


//# sourceMappingURL=react-offscreen.esm.js.map


/***/ }),

/***/ 26819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96992);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87564);


function throttleByAnimationFrame(fn) {
  let requestId;
  const later = args => () => {
    requestId = null;
    fn.apply(void 0, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(args));
  };
  const throttled = function () {
    if (requestId == null) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      requestId = (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(later(args));
    }
  };
  throttled.cancel = () => {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.cancel(requestId);
    requestId = null;
  };
  return throttled;
}
/* harmony default export */ __webpack_exports__.Z = (throttleByAnimationFrame);

/***/ }),

/***/ 69294:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ float_button; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/VerticalAlignTopOutlined.js + 1 modules
var VerticalAlignTopOutlined = __webpack_require__(2774);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.9.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-motion/es/index.js + 13 modules
var es = __webpack_require__(78878);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(72439);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/getScroll.js
var getScroll = __webpack_require__(1713);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/scrollTo.js + 1 modules
var scrollTo = __webpack_require__(44255);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/throttleByAnimationFrame.js
var throttleByAnimationFrame = __webpack_require__(26819);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(83756);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/context.js

const FloatButtonGroupContext = /*#__PURE__*/react.createContext(undefined);
const {
  Provider: FloatButtonGroupProvider
} = FloatButtonGroupContext;
/* harmony default export */ var float_button_context = (FloatButtonGroupContext);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(30454);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useZIndex.js
var useZIndex = __webpack_require__(27152);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/badge/index.js + 5 modules
var es_badge = __webpack_require__(25194);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(91880);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 3 modules
var es_tooltip = __webpack_require__(35691);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileTextOutlined.js + 1 modules
var FileTextOutlined = __webpack_require__(83378);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/FloatButtonContent.js
"use client";




const FloatButtonContent = props => {
  const {
    icon,
    description,
    prefixCls,
    className
  } = props;
  const defaultElement = /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-icon`
  }, /*#__PURE__*/react.createElement(FileTextOutlined/* default */.Z, null));
  return /*#__PURE__*/react.createElement("div", {
    onClick: props.onClick,
    onFocus: props.onFocus,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    className: classnames_default()(className, `${prefixCls}-content`)
  }, icon || description ? (/*#__PURE__*/react.createElement(react.Fragment, null, icon && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-icon`
  }, icon), description && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-description`
  }, description))) : defaultElement);
};
/* harmony default export */ var float_button_FloatButtonContent = (/*#__PURE__*/(0,react.memo)(FloatButtonContent));
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.21.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var cssinjs_es = __webpack_require__(20693);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(13587);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/motion/fade.js
var fade = __webpack_require__(53881);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(61372);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(53557);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/util.js
const getOffset = radius => {
  if (radius === 0) {
    return 0;
  }
  // 如果要考虑通用性，这里应该用三角函数 Math.sin(45)
  // 但是这个场景比较特殊，始终是等腰直角三角形，所以直接用 Math.sqrt() 开方即可
  return radius - Math.sqrt(Math.pow(radius, 2) / 2);
};
/* harmony default export */ var util = (getOffset);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/motion/motion.js
var motion = __webpack_require__(39894);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/style/keyframes.js


const floatButtonGroupMotion = token => {
  const {
    componentCls,
    floatButtonSize,
    motionDurationSlow,
    motionEaseInOutCirc,
    calc
  } = token;
  const moveTopIn = new cssinjs_es.Keyframes('antFloatButtonMoveTopIn', {
    '0%': {
      transform: `translate3d(0, ${(0,cssinjs_es.unit)(floatButtonSize)}, 0)`,
      transformOrigin: '0 0',
      opacity: 0
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    }
  });
  const moveTopOut = new cssinjs_es.Keyframes('antFloatButtonMoveTopOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    },
    '100%': {
      transform: `translate3d(0, ${(0,cssinjs_es.unit)(floatButtonSize)}, 0)`,
      transformOrigin: '0 0',
      opacity: 0
    }
  });
  const moveRightIn = new cssinjs_es.Keyframes('antFloatButtonMoveRightIn', {
    '0%': {
      transform: `translate3d(${calc(floatButtonSize).mul(-1).equal()}, 0, 0)`,
      transformOrigin: '0 0',
      opacity: 0
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    }
  });
  const moveRightOut = new cssinjs_es.Keyframes('antFloatButtonMoveRightOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    },
    '100%': {
      transform: `translate3d(${calc(floatButtonSize).mul(-1).equal()}, 0, 0)`,
      transformOrigin: '0 0',
      opacity: 0
    }
  });
  const moveBottomIn = new cssinjs_es.Keyframes('antFloatButtonMoveBottomIn', {
    '0%': {
      transform: `translate3d(0, ${calc(floatButtonSize).mul(-1).equal()}, 0)`,
      transformOrigin: '0 0',
      opacity: 0
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    }
  });
  const moveBottomOut = new cssinjs_es.Keyframes('antFloatButtonMoveBottomOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    },
    '100%': {
      transform: `translate3d(0, ${calc(floatButtonSize).mul(-1).equal()}, 0)`,
      transformOrigin: '0 0',
      opacity: 0
    }
  });
  const moveLeftIn = new cssinjs_es.Keyframes('antFloatButtonMoveLeftIn', {
    '0%': {
      transform: `translate3d(${(0,cssinjs_es.unit)(floatButtonSize)}, 0, 0)`,
      transformOrigin: '0 0',
      opacity: 0
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    }
  });
  const moveLeftOut = new cssinjs_es.Keyframes('antFloatButtonMoveLeftOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    },
    '100%': {
      transform: `translate3d(${(0,cssinjs_es.unit)(floatButtonSize)}, 0, 0)`,
      transformOrigin: '0 0',
      opacity: 0
    }
  });
  const groupPrefixCls = `${componentCls}-group`;
  return [{
    [groupPrefixCls]: {
      [`&${groupPrefixCls}-top ${groupPrefixCls}-wrap`]: (0,motion/* initMotion */.R)(`${groupPrefixCls}-wrap`, moveTopIn, moveTopOut, motionDurationSlow, true),
      [`&${groupPrefixCls}-bottom ${groupPrefixCls}-wrap`]: (0,motion/* initMotion */.R)(`${groupPrefixCls}-wrap`, moveBottomIn, moveBottomOut, motionDurationSlow, true),
      [`&${groupPrefixCls}-left ${groupPrefixCls}-wrap`]: (0,motion/* initMotion */.R)(`${groupPrefixCls}-wrap`, moveLeftIn, moveLeftOut, motionDurationSlow, true),
      [`&${groupPrefixCls}-right ${groupPrefixCls}-wrap`]: (0,motion/* initMotion */.R)(`${groupPrefixCls}-wrap`, moveRightIn, moveRightOut, motionDurationSlow, true)
    }
  }, {
    [`${groupPrefixCls}-wrap`]: {
      [`&${groupPrefixCls}-wrap-enter, &${groupPrefixCls}-wrap-appear`]: {
        opacity: 0,
        animationTimingFunction: motionEaseInOutCirc
      },
      [`&${groupPrefixCls}-wrap-leave`]: {
        opacity: 1,
        animationTimingFunction: motionEaseInOutCirc
      }
    }
  }];
};
/* harmony default export */ var keyframes = (floatButtonGroupMotion);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/style/index.js






// ============================== Group ==============================
const floatButtonGroupStyle = token => {
  const {
    antCls,
    componentCls,
    floatButtonSize,
    margin,
    borderRadiusLG,
    borderRadiusSM,
    badgeOffset,
    floatButtonBodyPadding,
    zIndexPopupBase,
    calc
  } = token;
  const groupPrefixCls = `${componentCls}-group`;
  return {
    [groupPrefixCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      zIndex: zIndexPopupBase,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      position: 'fixed',
      height: 'auto',
      boxShadow: 'none',
      minWidth: floatButtonSize,
      minHeight: floatButtonSize,
      insetInlineEnd: token.floatButtonInsetInlineEnd,
      bottom: token.floatButtonInsetBlockEnd,
      borderRadius: borderRadiusLG,
      [`${groupPrefixCls}-wrap`]: {
        zIndex: -1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
      },
      [`&${groupPrefixCls}-rtl`]: {
        direction: 'rtl'
      },
      [componentCls]: {
        position: 'static'
      }
    }),
    [`${groupPrefixCls}-top > ${groupPrefixCls}-wrap`]: {
      flexDirection: 'column',
      top: 'auto',
      bottom: calc(floatButtonSize).add(margin).equal()
    },
    [`${groupPrefixCls}-bottom > ${groupPrefixCls}-wrap`]: {
      flexDirection: 'column',
      top: calc(floatButtonSize).add(margin).equal(),
      bottom: 'auto'
    },
    [`${groupPrefixCls}-right > ${groupPrefixCls}-wrap`]: {
      flexDirection: 'row',
      left: {
        _skip_check_: true,
        value: calc(floatButtonSize).add(margin).equal()
      },
      right: {
        _skip_check_: true,
        value: 'auto'
      }
    },
    [`${groupPrefixCls}-left > ${groupPrefixCls}-wrap`]: {
      flexDirection: 'row',
      left: {
        _skip_check_: true,
        value: 'auto'
      },
      right: {
        _skip_check_: true,
        value: calc(floatButtonSize).add(margin).equal()
      }
    },
    [`${groupPrefixCls}-circle`]: {
      gap: margin,
      [`${groupPrefixCls}-wrap`]: {
        gap: margin
      }
    },
    [`${groupPrefixCls}-square`]: {
      [`${componentCls}-square`]: {
        padding: 0,
        borderRadius: 0,
        [`&${groupPrefixCls}-trigger`]: {
          borderRadius: borderRadiusLG
        },
        '&:first-child': {
          borderStartStartRadius: borderRadiusLG,
          borderStartEndRadius: borderRadiusLG
        },
        '&:last-child': {
          borderEndStartRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        },
        '&:not(:last-child)': {
          borderBottom: `${(0,cssinjs_es.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
        },
        [`${antCls}-badge`]: {
          [`${antCls}-badge-count`]: {
            top: calc(calc(floatButtonBodyPadding).add(badgeOffset)).mul(-1).equal(),
            insetInlineEnd: calc(calc(floatButtonBodyPadding).add(badgeOffset)).mul(-1).equal()
          }
        }
      },
      [`${groupPrefixCls}-wrap`]: {
        borderRadius: borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
        [`${componentCls}-square`]: {
          boxShadow: 'none',
          borderRadius: 0,
          padding: floatButtonBodyPadding,
          [`${componentCls}-body`]: {
            width: token.floatButtonBodySize,
            height: token.floatButtonBodySize,
            borderRadius: borderRadiusSM
          }
        }
      }
    },
    [`${groupPrefixCls}-top > ${groupPrefixCls}-wrap, ${groupPrefixCls}-bottom > ${groupPrefixCls}-wrap`]: {
      [`> ${componentCls}-square`]: {
        '&:first-child': {
          borderStartStartRadius: borderRadiusLG,
          borderStartEndRadius: borderRadiusLG
        },
        '&:last-child': {
          borderEndStartRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        },
        '&:not(:last-child)': {
          borderBottom: `${(0,cssinjs_es.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
        }
      }
    },
    [`${groupPrefixCls}-left > ${groupPrefixCls}-wrap, ${groupPrefixCls}-right > ${groupPrefixCls}-wrap`]: {
      [`> ${componentCls}-square`]: {
        '&:first-child': {
          borderStartStartRadius: borderRadiusLG,
          borderEndStartRadius: borderRadiusLG
        },
        '&:last-child': {
          borderStartEndRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG
        },
        '&:not(:last-child)': {
          borderInlineEnd: `${(0,cssinjs_es.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
        }
      }
    },
    [`${groupPrefixCls}-circle-shadow`]: {
      boxShadow: 'none'
    },
    [`${groupPrefixCls}-square-shadow`]: {
      boxShadow: token.boxShadowSecondary,
      [`${componentCls}-square`]: {
        boxShadow: 'none',
        padding: floatButtonBodyPadding,
        [`${componentCls}-body`]: {
          width: token.floatButtonBodySize,
          height: token.floatButtonBodySize,
          borderRadius: borderRadiusSM
        }
      }
    }
  };
};
// ============================== Shared ==============================
const sharedFloatButtonStyle = token => {
  const {
    antCls,
    componentCls,
    floatButtonBodyPadding,
    floatButtonIconSize,
    floatButtonSize,
    borderRadiusLG,
    badgeOffset,
    dotOffsetInSquare,
    dotOffsetInCircle,
    zIndexPopupBase,
    calc
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      border: 'none',
      position: 'fixed',
      cursor: 'pointer',
      zIndex: zIndexPopupBase,
      // Do not remove the 'display: block' here.
      // Deleting it will cause marginBottom to become ineffective.
      // Ref: https://github.com/ant-design/ant-design/issues/44700
      display: 'block',
      width: floatButtonSize,
      height: floatButtonSize,
      insetInlineEnd: token.floatButtonInsetInlineEnd,
      bottom: token.floatButtonInsetBlockEnd,
      boxShadow: token.boxShadowSecondary,
      // Pure Panel
      '&-pure': {
        position: 'relative',
        inset: 'auto'
      },
      '&:empty': {
        display: 'none'
      },
      [`${antCls}-badge`]: {
        width: '100%',
        height: '100%',
        [`${antCls}-badge-count`]: {
          transform: 'translate(0, 0)',
          transformOrigin: 'center',
          top: calc(badgeOffset).mul(-1).equal(),
          insetInlineEnd: calc(badgeOffset).mul(-1).equal()
        }
      },
      [`${componentCls}-body`]: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: `all ${token.motionDurationMid}`,
        [`${componentCls}-content`]: {
          overflow: 'hidden',
          textAlign: 'center',
          minHeight: floatButtonSize,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: `${(0,cssinjs_es.unit)(calc(floatButtonBodyPadding).div(2).equal())} ${(0,cssinjs_es.unit)(floatButtonBodyPadding)}`,
          [`${componentCls}-icon`]: {
            textAlign: 'center',
            margin: 'auto',
            width: floatButtonIconSize,
            fontSize: floatButtonIconSize,
            lineHeight: 1
          }
        }
      }
    }),
    [`${componentCls}-rtl`]: {
      direction: 'rtl'
    },
    [`${componentCls}-circle`]: {
      height: floatButtonSize,
      borderRadius: '50%',
      [`${antCls}-badge`]: {
        [`${antCls}-badge-dot`]: {
          top: dotOffsetInCircle,
          insetInlineEnd: dotOffsetInCircle
        }
      },
      [`${componentCls}-body`]: {
        borderRadius: '50%'
      }
    },
    [`${componentCls}-square`]: {
      height: 'auto',
      minHeight: floatButtonSize,
      borderRadius: borderRadiusLG,
      [`${antCls}-badge`]: {
        [`${antCls}-badge-dot`]: {
          top: dotOffsetInSquare,
          insetInlineEnd: dotOffsetInSquare
        }
      },
      [`${componentCls}-body`]: {
        height: 'auto',
        borderRadius: borderRadiusLG
      }
    },
    [`${componentCls}-default`]: {
      backgroundColor: token.floatButtonBackgroundColor,
      transition: `background-color ${token.motionDurationMid}`,
      [`${componentCls}-body`]: {
        backgroundColor: token.floatButtonBackgroundColor,
        transition: `background-color ${token.motionDurationMid}`,
        '&:hover': {
          backgroundColor: token.colorFillContent
        },
        [`${componentCls}-content`]: {
          [`${componentCls}-icon`]: {
            color: token.colorText
          },
          [`${componentCls}-description`]: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: (0,cssinjs_es.unit)(token.fontSizeLG),
            color: token.colorText,
            fontSize: token.fontSizeSM
          }
        }
      }
    },
    [`${componentCls}-primary`]: {
      backgroundColor: token.colorPrimary,
      [`${componentCls}-body`]: {
        backgroundColor: token.colorPrimary,
        transition: `background-color ${token.motionDurationMid}`,
        '&:hover': {
          backgroundColor: token.colorPrimaryHover
        },
        [`${componentCls}-content`]: {
          [`${componentCls}-icon`]: {
            color: token.colorTextLightSolid
          },
          [`${componentCls}-description`]: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: (0,cssinjs_es.unit)(token.fontSizeLG),
            color: token.colorTextLightSolid,
            fontSize: token.fontSizeSM
          }
        }
      }
    }
  };
};
// ============================== Export ==============================
const prepareComponentToken = token => ({
  dotOffsetInCircle: util(token.controlHeightLG / 2),
  dotOffsetInSquare: util(token.borderRadiusLG)
});
/* harmony default export */ var float_button_style = ((0,genStyleUtils/* genStyleHooks */.I$)('FloatButton', token => {
  const {
    colorTextLightSolid,
    colorBgElevated,
    controlHeightLG,
    marginXXL,
    marginLG,
    fontSize,
    fontSizeIcon,
    controlItemBgHover,
    paddingXXS,
    calc
  } = token;
  const floatButtonToken = (0,cssinjs_utils_es.mergeToken)(token, {
    floatButtonBackgroundColor: colorBgElevated,
    floatButtonColor: colorTextLightSolid,
    floatButtonHoverBackgroundColor: controlItemBgHover,
    floatButtonFontSize: fontSize,
    floatButtonIconSize: calc(fontSizeIcon).mul(1.5).equal(),
    floatButtonSize: controlHeightLG,
    floatButtonInsetBlockEnd: marginXXL,
    floatButtonInsetInlineEnd: marginLG,
    floatButtonBodySize: calc(controlHeightLG).sub(calc(paddingXXS).mul(2)).equal(),
    // 这里的 paddingXXS 是简写，完整逻辑是 (controlHeightLG - (controlHeightLG - paddingXXS * 2)) / 2,
    floatButtonBodyPadding: paddingXXS,
    badgeOffset: calc(paddingXXS).mul(1.5).equal()
  });
  return [floatButtonGroupStyle(floatButtonToken), sharedFloatButtonStyle(floatButtonToken), (0,fade/* initFadeMotion */.J$)(token), keyframes(floatButtonToken)];
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/FloatButton.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












const floatButtonPrefixCls = 'float-btn';
const InternalFloatButton = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style,
      type = 'default',
      shape = 'circle',
      icon,
      description,
      tooltip,
      htmlType = 'button',
      badge = {}
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "rootClassName", "style", "type", "shape", "icon", "description", "tooltip", "htmlType", "badge"]);
  const {
    getPrefixCls,
    direction
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const groupShape = (0,react.useContext)(float_button_context);
  const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = float_button_style(prefixCls, rootCls);
  const mergedShape = groupShape || shape;
  const classString = classnames_default()(hashId, cssVarCls, rootCls, prefixCls, className, rootClassName, `${prefixCls}-${type}`, `${prefixCls}-${mergedShape}`, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });
  // ============================ zIndex ============================
  const [zIndex] = (0,useZIndex/* useZIndex */.Cn)('FloatButton', style === null || style === void 0 ? void 0 : style.zIndex);
  const mergedStyle = Object.assign(Object.assign({}, style), {
    zIndex
  });
  // 虽然在 ts 中已经 omit 过了，但是为了防止多余的属性被透传进来，这里再 omit 一遍，以防万一
  const badgeProps = (0,omit/* default */.Z)(badge, ['title', 'children', 'status', 'text']);
  const contentProps = (0,react.useMemo)(() => ({
    prefixCls,
    description,
    icon,
    type
  }), [prefixCls, description, icon, type]);
  let buttonNode = /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-body`
  }, /*#__PURE__*/react.createElement(float_button_FloatButtonContent, Object.assign({}, contentProps)));
  if ('badge' in props) {
    buttonNode = /*#__PURE__*/react.createElement(es_badge/* default */.Z, Object.assign({}, badgeProps), buttonNode);
  }
  if ('tooltip' in props) {
    buttonNode = /*#__PURE__*/react.createElement(es_tooltip/* default */.Z, {
      title: tooltip,
      placement: direction === 'rtl' ? 'right' : 'left'
    }, buttonNode);
  }
  if (false) {}
  return wrapCSSVar(props.href ? (/*#__PURE__*/react.createElement("a", Object.assign({
    ref: ref
  }, restProps, {
    className: classString,
    style: mergedStyle
  }), buttonNode)) : (/*#__PURE__*/react.createElement("button", Object.assign({
    ref: ref
  }, restProps, {
    className: classString,
    style: mergedStyle,
    type: htmlType
  }), buttonNode)));
});
const FloatButton = InternalFloatButton;
if (false) {}
/* harmony default export */ var float_button_FloatButton = (FloatButton);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/BackTop.js
"use client";

var BackTop_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











const BackTop = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      type = 'default',
      shape = 'circle',
      visibilityHeight = 400,
      icon = /*#__PURE__*/react.createElement(VerticalAlignTopOutlined/* default */.Z, null),
      target,
      onClick,
      duration = 450
    } = props,
    restProps = BackTop_rest(props, ["prefixCls", "className", "type", "shape", "visibilityHeight", "icon", "target", "onClick", "duration"]);
  const [visible, setVisible] = (0,react.useState)(visibilityHeight === 0);
  const internalRef = react.useRef(null);
  react.useImperativeHandle(ref, () => ({
    nativeElement: internalRef.current
  }));
  const getDefaultTarget = () => {
    var _a;
    return ((_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) || window;
  };
  const handleScroll = (0,throttleByAnimationFrame/* default */.Z)(e => {
    const scrollTop = (0,getScroll/* default */.Z)(e.target);
    setVisible(scrollTop >= visibilityHeight);
  });
  (0,react.useEffect)(() => {
    const getTarget = target || getDefaultTarget;
    const container = getTarget();
    handleScroll({
      target: container
    });
    container === null || container === void 0 ? void 0 : container.addEventListener('scroll', handleScroll);
    return () => {
      handleScroll.cancel();
      container === null || container === void 0 ? void 0 : container.removeEventListener('scroll', handleScroll);
    };
  }, [target]);
  const scrollToTop = e => {
    (0,scrollTo/* default */.Z)(0, {
      getContainer: target || getDefaultTarget,
      duration
    });
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  const {
    getPrefixCls
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const groupShape = (0,react.useContext)(float_button_context);
  const mergedShape = groupShape || shape;
  const contentProps = Object.assign({
    prefixCls,
    icon,
    type,
    shape: mergedShape
  }, restProps);
  return /*#__PURE__*/react.createElement(es["default"], {
    visible: visible,
    motionName: `${rootPrefixCls}-fade`
  }, (_ref, setRef) => {
    let {
      className: motionClassName
    } = _ref;
    return /*#__PURE__*/react.createElement(float_button_FloatButton, Object.assign({
      ref: (0,es_ref/* composeRef */.sQ)(internalRef, setRef)
    }, contentProps, {
      onClick: scrollToTop,
      className: classnames_default()(className, motionClassName)
    }));
  });
});
if (false) {}
/* harmony default export */ var float_button_BackTop = (BackTop);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(71232);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(35677);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(31998);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/FloatButtonGroup.js
"use client";

var FloatButtonGroup_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};














const FloatButtonGroup = props => {
  var _a;
  const {
      prefixCls: customizePrefixCls,
      className,
      style,
      shape = 'circle',
      type = 'default',
      placement = 'top',
      icon = /*#__PURE__*/react.createElement(FileTextOutlined/* default */.Z, null),
      closeIcon,
      description,
      trigger,
      children,
      onOpenChange,
      open: customOpen,
      onClick: onTriggerButtonClick
    } = props,
    floatButtonProps = FloatButtonGroup_rest(props, ["prefixCls", "className", "style", "shape", "type", "placement", "icon", "closeIcon", "description", "trigger", "children", "onOpenChange", "open", "onClick"]);
  const {
    direction,
    getPrefixCls,
    floatButtonGroup
  } = react.useContext(context/* ConfigContext */.E_);
  const mergedCloseIcon = (_a = closeIcon !== null && closeIcon !== void 0 ? closeIcon : floatButtonGroup === null || floatButtonGroup === void 0 ? void 0 : floatButtonGroup.closeIcon) !== null && _a !== void 0 ? _a : /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null);
  const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = float_button_style(prefixCls, rootCls);
  const groupPrefixCls = `${prefixCls}-group`;
  const isMenuMode = trigger && ['click', 'hover'].includes(trigger);
  const isValidPlacement = placement && ['top', 'left', 'right', 'bottom'].includes(placement);
  const groupCls = classnames_default()(groupPrefixCls, hashId, cssVarCls, rootCls, className, {
    [`${groupPrefixCls}-rtl`]: direction === 'rtl',
    [`${groupPrefixCls}-${shape}`]: shape,
    [`${groupPrefixCls}-${shape}-shadow`]: !isMenuMode,
    [`${groupPrefixCls}-${placement}`]: isMenuMode && isValidPlacement // 只有菜单模式才支持弹出方向
  });
  // ============================ zIndex ============================
  const [zIndex] = (0,useZIndex/* useZIndex */.Cn)('FloatButton', style === null || style === void 0 ? void 0 : style.zIndex);
  const mergedStyle = Object.assign(Object.assign({}, style), {
    zIndex
  });
  const wrapperCls = classnames_default()(hashId, `${groupPrefixCls}-wrap`);
  const [open, setOpen] = (0,useMergedState/* default */.Z)(false, {
    value: customOpen
  });
  const floatButtonGroupRef = react.useRef(null);
  // ========================== Open ==========================
  const hoverTrigger = trigger === 'hover';
  const clickTrigger = trigger === 'click';
  const triggerOpen = (0,useEvent/* default */.Z)(nextOpen => {
    if (open !== nextOpen) {
      setOpen(nextOpen);
      onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(nextOpen);
    }
  });
  // ===================== Trigger: Hover =====================
  const onMouseEnter = () => {
    if (hoverTrigger) {
      triggerOpen(true);
    }
  };
  const onMouseLeave = () => {
    if (hoverTrigger) {
      triggerOpen(false);
    }
  };
  // ===================== Trigger: Click =====================
  const onInternalTriggerButtonClick = e => {
    if (clickTrigger) {
      triggerOpen(!open);
    }
    onTriggerButtonClick === null || onTriggerButtonClick === void 0 ? void 0 : onTriggerButtonClick(e);
  };
  react.useEffect(() => {
    if (clickTrigger) {
      const onDocClick = e => {
        var _a;
        // Skip if click on the group
        if ((_a = floatButtonGroupRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
          return;
        }
        triggerOpen(false);
      };
      document.addEventListener('click', onDocClick, {
        capture: true
      });
      return () => document.removeEventListener('click', onDocClick, {
        capture: true
      });
    }
  }, [clickTrigger]);
  // ======================== Warning =========================
  if (false) {}
  // ========================= Render =========================
  return wrapCSSVar(/*#__PURE__*/react.createElement(FloatButtonGroupProvider, {
    value: shape
  }, /*#__PURE__*/react.createElement("div", {
    ref: floatButtonGroupRef,
    className: groupCls,
    style: mergedStyle,
    // Hover trigger
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, isMenuMode ? (/*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(es["default"], {
    visible: open,
    motionName: `${groupPrefixCls}-wrap`
  }, _ref => {
    let {
      className: motionClassName
    } = _ref;
    return /*#__PURE__*/react.createElement("div", {
      className: classnames_default()(motionClassName, wrapperCls)
    }, children);
  }), /*#__PURE__*/react.createElement(float_button_FloatButton, Object.assign({
    type: type,
    icon: open ? mergedCloseIcon : icon,
    description: description,
    "aria-label": props['aria-label'],
    className: `${groupPrefixCls}-trigger`,
    onClick: onInternalTriggerButtonClick
  }, floatButtonProps)))) : children)));
};
/* harmony default export */ var float_button_FloatButtonGroup = (FloatButtonGroup);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/PurePanel.js
"use client";

var PurePanel_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/no-array-index-key */






const PureFloatButton = _a => {
  var {
      backTop
    } = _a,
    props = PurePanel_rest(_a, ["backTop"]);
  return backTop ? /*#__PURE__*/react.createElement(float_button_BackTop, Object.assign({}, props, {
    visibilityHeight: 0
  })) : /*#__PURE__*/react.createElement(float_button_FloatButton, Object.assign({}, props));
};
/** @private Internal Component. Do not use in your production. */
const PurePanel = _a => {
  var {
      className,
      items
    } = _a,
    props = PurePanel_rest(_a, ["className", "items"]);
  const {
    prefixCls: customizePrefixCls
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  const pureCls = `${prefixCls}-pure`;
  if (items) {
    return /*#__PURE__*/react.createElement(float_button_FloatButtonGroup, Object.assign({
      className: classnames_default()(className, pureCls)
    }, props), items.map((item, index) => (/*#__PURE__*/react.createElement(PureFloatButton, Object.assign({
      key: index
    }, item)))));
  }
  return /*#__PURE__*/react.createElement(PureFloatButton, Object.assign({
    className: classnames_default()(className, pureCls)
  }, props));
};
/* harmony default export */ var float_button_PurePanel = (PurePanel);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/index.js
"use client";





float_button_FloatButton.BackTop = float_button_BackTop;
float_button_FloatButton.Group = float_button_FloatButtonGroup;
float_button_FloatButton._InternalPanelDoNotUseOrYouWillBeFired = float_button_PurePanel;
/* harmony default export */ var float_button = (float_button_FloatButton);

/***/ }),

/***/ 16514:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return /* binding */ es_notification; }
});

// UNUSED EXPORTS: actDestroy, actWrapper

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/React/render.js
var render = __webpack_require__(73113);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/app/context.js
var context = __webpack_require__(81418);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(83756);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 7 modules
var config_provider = __webpack_require__(38587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(26282);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(16449);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(71232);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(76117);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js + 1 modules
var InfoCircleFilled = __webpack_require__(42250);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(8298);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-notification@5.6.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-notification/es/index.js + 6 modules
var es = __webpack_require__(73551);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(91880);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.21.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var cssinjs_es = __webpack_require__(20693);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useZIndex.js
var useZIndex = __webpack_require__(27152);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(13587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(53557);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(61372);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/style/placement.js

const genNotificationPlacementStyle = token => {
  const {
    componentCls,
    notificationMarginEdge,
    animationMaxHeight
  } = token;
  const noticeCls = `${componentCls}-notice`;
  const rightFadeIn = new cssinjs_es.Keyframes('antNotificationFadeIn', {
    '0%': {
      transform: `translate3d(100%, 0, 0)`,
      opacity: 0
    },
    '100%': {
      transform: `translate3d(0, 0, 0)`,
      opacity: 1
    }
  });
  const topFadeIn = new cssinjs_es.Keyframes('antNotificationTopFadeIn', {
    '0%': {
      top: -animationMaxHeight,
      opacity: 0
    },
    '100%': {
      top: 0,
      opacity: 1
    }
  });
  const bottomFadeIn = new cssinjs_es.Keyframes('antNotificationBottomFadeIn', {
    '0%': {
      bottom: token.calc(animationMaxHeight).mul(-1).equal(),
      opacity: 0
    },
    '100%': {
      bottom: 0,
      opacity: 1
    }
  });
  const leftFadeIn = new cssinjs_es.Keyframes('antNotificationLeftFadeIn', {
    '0%': {
      transform: `translate3d(-100%, 0, 0)`,
      opacity: 0
    },
    '100%': {
      transform: `translate3d(0, 0, 0)`,
      opacity: 1
    }
  });
  return {
    [componentCls]: {
      [`&${componentCls}-top, &${componentCls}-bottom`]: {
        marginInline: 0,
        [noticeCls]: {
          marginInline: 'auto auto'
        }
      },
      [`&${componentCls}-top`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: topFadeIn
        }
      },
      [`&${componentCls}-bottom`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: bottomFadeIn
        }
      },
      [`&${componentCls}-topRight, &${componentCls}-bottomRight`]: {
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: rightFadeIn
        }
      },
      [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
        marginRight: {
          value: 0,
          _skip_check_: true
        },
        marginLeft: {
          value: notificationMarginEdge,
          _skip_check_: true
        },
        [noticeCls]: {
          marginInlineEnd: 'auto',
          marginInlineStart: 0
        },
        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
          animationName: leftFadeIn
        }
      }
    }
  };
};
/* harmony default export */ var placement = (genNotificationPlacementStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/interface.js
const NotificationPlacements = ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'];
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/style/stack.js

const placementAlignProperty = {
  topLeft: 'left',
  topRight: 'right',
  bottomLeft: 'left',
  bottomRight: 'right',
  top: 'left',
  bottom: 'left'
};
const genPlacementStackStyle = (token, placement) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-${placement}`]: {
      [`&${componentCls}-stack > ${componentCls}-notice-wrapper`]: {
        [placement.startsWith('top') ? 'top' : 'bottom']: 0,
        [placementAlignProperty[placement]]: {
          value: 0,
          _skip_check_: true
        }
      }
    }
  };
};
const genStackChildrenStyle = token => {
  const childrenStyle = {};
  for (let i = 1; i < token.notificationStackLayer; i++) {
    childrenStyle[`&:nth-last-child(${i + 1})`] = {
      overflow: 'hidden',
      [`& > ${token.componentCls}-notice`]: {
        opacity: 0,
        transition: `opacity ${token.motionDurationMid}`
      }
    };
  }
  return Object.assign({
    [`&:not(:nth-last-child(-n+${token.notificationStackLayer}))`]: {
      opacity: 0,
      overflow: 'hidden',
      color: 'transparent',
      pointerEvents: 'none'
    }
  }, childrenStyle);
};
const genStackedNoticeStyle = token => {
  const childrenStyle = {};
  for (let i = 1; i < token.notificationStackLayer; i++) {
    childrenStyle[`&:nth-last-child(${i + 1})`] = {
      background: token.colorBgBlur,
      backdropFilter: 'blur(10px)',
      '-webkit-backdrop-filter': 'blur(10px)'
    };
  }
  return Object.assign({}, childrenStyle);
};
const genStackStyle = token => {
  const {
    componentCls
  } = token;
  return Object.assign({
    [`${componentCls}-stack`]: {
      [`& > ${componentCls}-notice-wrapper`]: Object.assign({
        transition: `all ${token.motionDurationSlow}, backdrop-filter 0s`,
        position: 'absolute'
      }, genStackChildrenStyle(token))
    },
    [`${componentCls}-stack:not(${componentCls}-stack-expanded)`]: {
      [`& > ${componentCls}-notice-wrapper`]: Object.assign({}, genStackedNoticeStyle(token))
    },
    [`${componentCls}-stack${componentCls}-stack-expanded`]: {
      [`& > ${componentCls}-notice-wrapper`]: {
        '&:not(:nth-last-child(-n + 1))': {
          opacity: 1,
          overflow: 'unset',
          color: 'inherit',
          pointerEvents: 'auto',
          [`& > ${token.componentCls}-notice`]: {
            opacity: 1
          }
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          height: token.margin,
          width: '100%',
          insetInline: 0,
          bottom: token.calc(token.margin).mul(-1).equal(),
          background: 'transparent',
          pointerEvents: 'auto'
        }
      }
    }
  }, NotificationPlacements.map(placement => genPlacementStackStyle(token, placement)).reduce((acc, cur) => Object.assign(Object.assign({}, acc), cur), {}));
};
/* harmony default export */ var stack = (genStackStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/style/index.js






const genNoticeStyle = token => {
  const {
    iconCls,
    componentCls,
    // .ant-notification
    boxShadow,
    fontSizeLG,
    notificationMarginBottom,
    borderRadiusLG,
    colorSuccess,
    colorInfo,
    colorWarning,
    colorError,
    colorTextHeading,
    notificationBg,
    notificationPadding,
    notificationMarginEdge,
    notificationProgressBg,
    notificationProgressHeight,
    fontSize,
    lineHeight,
    width,
    notificationIconSize,
    colorText
  } = token;
  const noticeCls = `${componentCls}-notice`;
  return {
    position: 'relative',
    marginBottom: notificationMarginBottom,
    marginInlineStart: 'auto',
    background: notificationBg,
    borderRadius: borderRadiusLG,
    boxShadow,
    [noticeCls]: {
      padding: notificationPadding,
      width,
      maxWidth: `calc(100vw - ${(0,cssinjs_es.unit)(token.calc(notificationMarginEdge).mul(2).equal())})`,
      overflow: 'hidden',
      lineHeight,
      wordWrap: 'break-word'
    },
    [`${noticeCls}-message`]: {
      marginBottom: token.marginXS,
      color: colorTextHeading,
      fontSize: fontSizeLG,
      lineHeight: token.lineHeightLG
    },
    [`${noticeCls}-description`]: {
      fontSize,
      color: colorText
    },
    [`${noticeCls}-closable ${noticeCls}-message`]: {
      paddingInlineEnd: token.paddingLG
    },
    [`${noticeCls}-with-icon ${noticeCls}-message`]: {
      marginBottom: token.marginXS,
      marginInlineStart: token.calc(token.marginSM).add(notificationIconSize).equal(),
      fontSize: fontSizeLG
    },
    [`${noticeCls}-with-icon ${noticeCls}-description`]: {
      marginInlineStart: token.calc(token.marginSM).add(notificationIconSize).equal(),
      fontSize
    },
    // Icon & color style in different selector level
    // https://github.com/ant-design/ant-design/issues/16503
    // https://github.com/ant-design/ant-design/issues/15512
    [`${noticeCls}-icon`]: {
      position: 'absolute',
      fontSize: notificationIconSize,
      lineHeight: 1,
      // icon-font
      [`&-success${iconCls}`]: {
        color: colorSuccess
      },
      [`&-info${iconCls}`]: {
        color: colorInfo
      },
      [`&-warning${iconCls}`]: {
        color: colorWarning
      },
      [`&-error${iconCls}`]: {
        color: colorError
      }
    },
    [`${noticeCls}-close`]: Object.assign({
      position: 'absolute',
      top: token.notificationPaddingVertical,
      insetInlineEnd: token.notificationPaddingHorizontal,
      color: token.colorIcon,
      outline: 'none',
      width: token.notificationCloseButtonSize,
      height: token.notificationCloseButtonSize,
      borderRadius: token.borderRadiusSM,
      transition: `background-color ${token.motionDurationMid}, color ${token.motionDurationMid}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        color: token.colorIconHover,
        backgroundColor: token.colorBgTextHover
      },
      '&:active': {
        backgroundColor: token.colorBgTextActive
      }
    }, (0,style/* genFocusStyle */.Qy)(token)),
    [`${noticeCls}-progress`]: {
      position: 'absolute',
      display: 'block',
      appearance: 'none',
      WebkitAppearance: 'none',
      inlineSize: `calc(100% - ${(0,cssinjs_es.unit)(borderRadiusLG)} * 2)`,
      left: {
        _skip_check_: true,
        value: borderRadiusLG
      },
      right: {
        _skip_check_: true,
        value: borderRadiusLG
      },
      bottom: 0,
      blockSize: notificationProgressHeight,
      border: 0,
      '&, &::-webkit-progress-bar': {
        borderRadius: borderRadiusLG,
        backgroundColor: `rgba(0, 0, 0, 0.04)`
      },
      '&::-moz-progress-bar': {
        background: notificationProgressBg
      },
      '&::-webkit-progress-value': {
        borderRadius: borderRadiusLG,
        background: notificationProgressBg
      }
    },
    [`${noticeCls}-btn`]: {
      float: 'right',
      marginTop: token.marginSM
    }
  };
};
const genNotificationStyle = token => {
  const {
    componentCls,
    // .ant-notification
    notificationMarginBottom,
    notificationMarginEdge,
    motionDurationMid,
    motionEaseInOut
  } = token;
  const noticeCls = `${componentCls}-notice`;
  const fadeOut = new cssinjs_es.Keyframes('antNotificationFadeOut', {
    '0%': {
      maxHeight: token.animationMaxHeight,
      marginBottom: notificationMarginBottom
    },
    '100%': {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
  // ============================ Holder ============================
  {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'fixed',
      zIndex: token.zIndexPopup,
      marginRight: {
        value: notificationMarginEdge,
        _skip_check_: true
      },
      [`${componentCls}-hook-holder`]: {
        position: 'relative'
      },
      //  animation
      [`${componentCls}-fade-appear-prepare`]: {
        opacity: '0 !important'
      },
      [`${componentCls}-fade-enter, ${componentCls}-fade-appear`]: {
        animationDuration: token.motionDurationMid,
        animationTimingFunction: motionEaseInOut,
        animationFillMode: 'both',
        opacity: 0,
        animationPlayState: 'paused'
      },
      [`${componentCls}-fade-leave`]: {
        animationTimingFunction: motionEaseInOut,
        animationFillMode: 'both',
        animationDuration: motionDurationMid,
        animationPlayState: 'paused'
      },
      [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
        animationPlayState: 'running'
      },
      [`${componentCls}-fade-leave${componentCls}-fade-leave-active`]: {
        animationName: fadeOut,
        animationPlayState: 'running'
      },
      // RTL
      '&-rtl': {
        direction: 'rtl',
        [`${noticeCls}-btn`]: {
          float: 'left'
        }
      }
    })
  },
  // ============================ Notice ============================
  {
    [componentCls]: {
      [`${noticeCls}-wrapper`]: Object.assign({}, genNoticeStyle(token))
    }
  }];
};
// ============================== Export ==============================
const prepareComponentToken = token => ({
  zIndexPopup: token.zIndexPopupBase + useZIndex/* CONTAINER_MAX_OFFSET */.u6 + 50,
  width: 384
});
const prepareNotificationToken = token => {
  const notificationPaddingVertical = token.paddingMD;
  const notificationPaddingHorizontal = token.paddingLG;
  const notificationToken = (0,cssinjs_utils_es.mergeToken)(token, {
    notificationBg: token.colorBgElevated,
    notificationPaddingVertical,
    notificationPaddingHorizontal,
    notificationIconSize: token.calc(token.fontSizeLG).mul(token.lineHeightLG).equal(),
    notificationCloseButtonSize: token.calc(token.controlHeightLG).mul(0.55).equal(),
    notificationMarginBottom: token.margin,
    notificationPadding: `${(0,cssinjs_es.unit)(token.paddingMD)} ${(0,cssinjs_es.unit)(token.paddingContentHorizontalLG)}`,
    notificationMarginEdge: token.marginLG,
    animationMaxHeight: 150,
    notificationStackLayer: 3,
    notificationProgressHeight: 2,
    notificationProgressBg: `linear-gradient(90deg, ${token.colorPrimaryBorderHover}, ${token.colorPrimary})`
  });
  return notificationToken;
};
/* harmony default export */ var notification_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Notification', token => {
  const notificationToken = prepareNotificationToken(token);
  return [genNotificationStyle(notificationToken), placement(notificationToken), stack(notificationToken)];
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/style/pure-panel.js



/* harmony default export */ var pure_panel = ((0,genStyleUtils/* genSubStyleComponent */.bk)(['Notification', 'PurePanel'], token => {
  const noticeCls = `${token.componentCls}-notice`;
  const notificationToken = prepareNotificationToken(token);
  return {
    [`${noticeCls}-pure-panel`]: Object.assign(Object.assign({}, genNoticeStyle(notificationToken)), {
      width: notificationToken.width,
      maxWidth: `calc(100vw - ${(0,cssinjs_es.unit)(token.calc(notificationToken.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/PurePanel.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













const TypeIcon = {
  info: /*#__PURE__*/react.createElement(InfoCircleFilled/* default */.Z, null),
  success: /*#__PURE__*/react.createElement(CheckCircleFilled/* default */.Z, null),
  error: /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null),
  warning: /*#__PURE__*/react.createElement(ExclamationCircleFilled/* default */.Z, null),
  loading: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null)
};
function getCloseIcon(prefixCls, closeIcon) {
  if (closeIcon === null || closeIcon === false) {
    return null;
  }
  return closeIcon || /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    className: `${prefixCls}-close-icon`
  });
}
const typeToIcon = {
  success: CheckCircleFilled/* default */.Z,
  info: InfoCircleFilled/* default */.Z,
  error: CloseCircleFilled/* default */.Z,
  warning: ExclamationCircleFilled/* default */.Z
};
const PureContent = props => {
  const {
    prefixCls,
    icon,
    type,
    message,
    description,
    btn,
    role = 'alert'
  } = props;
  let iconNode = null;
  if (icon) {
    iconNode = /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-icon`
    }, icon);
  } else if (type) {
    iconNode = /*#__PURE__*/react.createElement(typeToIcon[type] || null, {
      className: classnames_default()(`${prefixCls}-icon`, `${prefixCls}-icon-${type}`)
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()({
      [`${prefixCls}-with-icon`]: iconNode
    }),
    role: role
  }, iconNode, /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-message`
  }, message), /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-description`
  }, description), btn && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-btn`
  }, btn));
};
/** @private Internal Component. Do not use in your production. */
const PurePanel = props => {
  const {
      prefixCls: staticPrefixCls,
      className,
      icon,
      type,
      message,
      description,
      btn,
      closable = true,
      closeIcon,
      className: notificationClassName
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon", "className"]);
  const {
    getPrefixCls
  } = react.useContext(config_provider_context/* ConfigContext */.E_);
  const prefixCls = staticPrefixCls || getPrefixCls('notification');
  const noticePrefixCls = `${prefixCls}-notice`;
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = notification_style(prefixCls, rootCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${noticePrefixCls}-pure-panel`, hashId, className, cssVarCls, rootCls)
  }, /*#__PURE__*/react.createElement(pure_panel, {
    prefixCls: prefixCls
  }), /*#__PURE__*/react.createElement(es.Notice, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    eventKey: "pure",
    duration: null,
    closable: closable,
    className: classnames_default()({
      notificationClassName
    }),
    closeIcon: getCloseIcon(prefixCls, closeIcon),
    content: /*#__PURE__*/react.createElement(PureContent, {
      prefixCls: noticePrefixCls,
      icon: icon,
      type: type,
      message: message,
      description: description,
      btn: btn
    })
  }))));
};
/* harmony default export */ var notification_PurePanel = (PurePanel);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/warning.js
var _util_warning = __webpack_require__(15564);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/useToken.js
var useToken = __webpack_require__(2100);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/util.js
function getPlacementStyle(placement, top, bottom) {
  let style;
  switch (placement) {
    case 'top':
      style = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top,
        bottom: 'auto'
      };
      break;
    case 'topLeft':
      style = {
        left: 0,
        top,
        bottom: 'auto'
      };
      break;
    case 'topRight':
      style = {
        right: 0,
        top,
        bottom: 'auto'
      };
      break;
    case 'bottom':
      style = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: 'auto',
        bottom
      };
      break;
    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom
      };
      break;
    default:
      style = {
        right: 0,
        top: 'auto',
        bottom
      };
      break;
  }
  return style;
}
function getMotion(prefixCls) {
  return {
    motionName: `${prefixCls}-fade`
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/useNotification.js
"use client";

var useNotification_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const DEFAULT_OFFSET = 24;
const DEFAULT_DURATION = 4.5;
const DEFAULT_PLACEMENT = 'topRight';
const Wrapper = _ref => {
  let {
    children,
    prefixCls
  } = _ref;
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = notification_style(prefixCls, rootCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement(es.NotificationProvider, {
    classNames: {
      list: classnames_default()(hashId, cssVarCls, rootCls)
    }
  }, children));
};
const renderNotifications = (node, _ref2) => {
  let {
    prefixCls,
    key
  } = _ref2;
  return /*#__PURE__*/react.createElement(Wrapper, {
    prefixCls: prefixCls,
    key: key
  }, node);
};
const Holder = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    top,
    bottom,
    prefixCls: staticPrefixCls,
    getContainer: staticGetContainer,
    maxCount,
    rtl,
    onAllRemoved,
    stack,
    duration,
    pauseOnHover = true,
    showProgress
  } = props;
  const {
    getPrefixCls,
    getPopupContainer,
    notification,
    direction
  } = (0,react.useContext)(config_provider_context/* ConfigContext */.E_);
  const [, token] = (0,useToken/* default */.ZP)();
  const prefixCls = staticPrefixCls || getPrefixCls('notification');
  // =============================== Style ===============================
  const getStyle = placement => getPlacementStyle(placement, top !== null && top !== void 0 ? top : DEFAULT_OFFSET, bottom !== null && bottom !== void 0 ? bottom : DEFAULT_OFFSET);
  const getClassName = () => classnames_default()({
    [`${prefixCls}-rtl`]: rtl !== null && rtl !== void 0 ? rtl : direction === 'rtl'
  });
  // ============================== Motion ===============================
  const getNotificationMotion = () => getMotion(prefixCls);
  // ============================== Origin ===============================
  const [api, holder] = (0,es.useNotification)({
    prefixCls,
    style: getStyle,
    className: getClassName,
    motion: getNotificationMotion,
    closable: true,
    closeIcon: getCloseIcon(prefixCls),
    duration: duration !== null && duration !== void 0 ? duration : DEFAULT_DURATION,
    getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
    maxCount,
    pauseOnHover,
    showProgress,
    onAllRemoved,
    renderNotifications,
    stack: stack === false ? false : {
      threshold: typeof stack === 'object' ? stack === null || stack === void 0 ? void 0 : stack.threshold : undefined,
      offset: 8,
      gap: token.margin
    }
  });
  // ================================ Ref ================================
  react.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
    prefixCls,
    notification
  }));
  return holder;
});
// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
function useInternalNotification(notificationConfig) {
  const holderRef = react.useRef(null);
  const warning = (0,_util_warning/* devUseWarning */.ln)('Notification');
  // ================================ API ================================
  const wrapAPI = react.useMemo(() => {
    // Wrap with notification content
    // >>> Open
    const open = config => {
      var _a;
      if (!holderRef.current) {
         false ? 0 : void 0;
        return;
      }
      const {
        open: originOpen,
        prefixCls,
        notification
      } = holderRef.current;
      const noticePrefixCls = `${prefixCls}-notice`;
      const {
          message,
          description,
          icon,
          type,
          btn,
          className,
          style,
          role = 'alert',
          closeIcon,
          closable
        } = config,
        restConfig = useNotification_rest(config, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon", "closable"]);
      const realCloseIcon = getCloseIcon(noticePrefixCls, typeof closeIcon !== 'undefined' ? closeIcon : notification === null || notification === void 0 ? void 0 : notification.closeIcon);
      return originOpen(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (_a = notificationConfig === null || notificationConfig === void 0 ? void 0 : notificationConfig.placement) !== null && _a !== void 0 ? _a : DEFAULT_PLACEMENT
      }, restConfig), {
        content: (/*#__PURE__*/react.createElement(PureContent, {
          prefixCls: noticePrefixCls,
          icon: icon,
          type: type,
          message: message,
          description: description,
          btn: btn,
          role: role
        })),
        className: classnames_default()(type && `${noticePrefixCls}-${type}`, className, notification === null || notification === void 0 ? void 0 : notification.className),
        style: Object.assign(Object.assign({}, notification === null || notification === void 0 ? void 0 : notification.style), style),
        closeIcon: realCloseIcon,
        closable: closable !== null && closable !== void 0 ? closable : !!realCloseIcon
      }));
    };
    // >>> destroy
    const destroy = key => {
      var _a, _b;
      if (key !== undefined) {
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
      } else {
        (_b = holderRef.current) === null || _b === void 0 ? void 0 : _b.destroy();
      }
    };
    const clone = {
      open,
      destroy
    };
    const keys = ['success', 'info', 'warning', 'error'];
    keys.forEach(type => {
      clone[type] = config => open(Object.assign(Object.assign({}, config), {
        type
      }));
    });
    return clone;
  }, []);
  // ============================== Return ===============================
  return [wrapAPI, /*#__PURE__*/react.createElement(Holder, Object.assign({
    key: "notification-holder"
  }, notificationConfig, {
    ref: holderRef
  }))];
}
function useNotification(notificationConfig) {
  return useInternalNotification(notificationConfig);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/index.js
"use client";







let notification = null;
let act = callback => callback();
let taskQueue = [];
let defaultGlobalConfig = {};
function getGlobalContext() {
  const {
    getContainer,
    rtl,
    maxCount,
    top,
    bottom,
    showProgress,
    pauseOnHover
  } = defaultGlobalConfig;
  const mergedContainer = (getContainer === null || getContainer === void 0 ? void 0 : getContainer()) || document.body;
  return {
    getContainer: () => mergedContainer,
    rtl,
    maxCount,
    top,
    bottom,
    showProgress,
    pauseOnHover
  };
}
const GlobalHolder = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    notificationConfig,
    sync
  } = props;
  const {
    getPrefixCls
  } = (0,react.useContext)(config_provider_context/* ConfigContext */.E_);
  const prefixCls = defaultGlobalConfig.prefixCls || getPrefixCls('notification');
  const appConfig = (0,react.useContext)(context/* AppConfigContext */.J);
  const [api, holder] = useInternalNotification(Object.assign(Object.assign(Object.assign({}, notificationConfig), {
    prefixCls
  }), appConfig.notification));
  react.useEffect(sync, []);
  react.useImperativeHandle(ref, () => {
    const instance = Object.assign({}, api);
    Object.keys(instance).forEach(method => {
      instance[method] = function () {
        sync();
        return api[method].apply(api, arguments);
      };
    });
    return {
      instance,
      sync
    };
  });
  return holder;
});
const GlobalHolderWrapper = /*#__PURE__*/react.forwardRef((_, ref) => {
  const [notificationConfig, setNotificationConfig] = react.useState(getGlobalContext);
  const sync = () => {
    setNotificationConfig(getGlobalContext);
  };
  react.useEffect(sync, []);
  const global = (0,config_provider/* globalConfig */.w6)();
  const rootPrefixCls = global.getRootPrefixCls();
  const rootIconPrefixCls = global.getIconPrefixCls();
  const theme = global.getTheme();
  const dom = /*#__PURE__*/react.createElement(GlobalHolder, {
    ref: ref,
    sync: sync,
    notificationConfig: notificationConfig
  });
  return /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: rootIconPrefixCls,
    theme: theme
  }, global.holderRender ? global.holderRender(dom) : dom);
});
function flushNotice() {
  if (!notification) {
    const holderFragment = document.createDocumentFragment();
    const newNotification = {
      fragment: holderFragment
    };
    notification = newNotification;
    // Delay render to avoid sync issue
    act(() => {
      (0,render/* render */.s)(/*#__PURE__*/react.createElement(GlobalHolderWrapper, {
        ref: node => {
          const {
            instance,
            sync
          } = node || {};
          Promise.resolve().then(() => {
            if (!newNotification.instance && instance) {
              newNotification.instance = instance;
              newNotification.sync = sync;
              flushNotice();
            }
          });
        }
      }), holderFragment);
    });
    return;
  }
  // Notification not ready
  if (!notification.instance) {
    return;
  }
  // >>> Execute task
  taskQueue.forEach(task => {
    switch (task.type) {
      case 'open':
        {
          act(() => {
            notification.instance.open(Object.assign(Object.assign({}, defaultGlobalConfig), task.config));
          });
          break;
        }
      case 'destroy':
        act(() => {
          notification === null || notification === void 0 ? void 0 : notification.instance.destroy(task.key);
        });
        break;
    }
  });
  // Clean up
  taskQueue = [];
}
// ==============================================================================
// ==                                  Export                                  ==
// ==============================================================================
function setNotificationGlobalConfig(config) {
  defaultGlobalConfig = Object.assign(Object.assign({}, defaultGlobalConfig), config);
  // Trigger sync for it
  act(() => {
    var _a;
    (_a = notification === null || notification === void 0 ? void 0 : notification.sync) === null || _a === void 0 ? void 0 : _a.call(notification);
  });
}
function notification_open(config) {
  const global = (0,config_provider/* globalConfig */.w6)();
  if (false) {}
  taskQueue.push({
    type: 'open',
    config
  });
  flushNotice();
}
const destroy = key => {
  taskQueue.push({
    type: 'destroy',
    key
  });
  flushNotice();
};
const methods = ['success', 'info', 'warning', 'error'];
const baseStaticMethods = {
  open: notification_open,
  destroy,
  config: setNotificationGlobalConfig,
  useNotification: useNotification,
  _InternalPanelDoNotUseOrYouWillBeFired: notification_PurePanel
};
const staticMethods = baseStaticMethods;
methods.forEach(type => {
  staticMethods[type] = config => notification_open(Object.assign(Object.assign({}, config), {
    type
  }));
});
// ==============================================================================
// ==                                   Test                                   ==
// ==============================================================================
const noop = () => {};
/** @internal Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
let actWrapper = (/* unused pure expression or super */ null && (noop));
if (false) {}
/** @internal Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
let actDestroy = (/* unused pure expression or super */ null && (noop));
if (false) {}
/* harmony default export */ var es_notification = (staticMethods);

/***/ })

}]);