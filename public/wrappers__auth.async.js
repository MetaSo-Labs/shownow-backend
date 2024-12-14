"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5899],{

/***/ 8298:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_LoadingOutlined; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(35453);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js
// This icon file is generated automatically.
var LoadingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
/* harmony default export */ var asn_LoadingOutlined = (LoadingOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/AntdIcon.js
var AntdIcon = __webpack_require__(11256);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var LoadingOutlined_LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_LoadingOutlined
  }));
};

/**![loading](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTk4OCA1NDhjLTE5LjkgMC0zNi0xNi4xLTM2LTM2IDAtNTkuNC0xMS42LTExNy0zNC42LTE3MS4zYTQ0MC40NSA0NDAuNDUgMCAwMC05NC4zLTEzOS45IDQzNy43MSA0MzcuNzEgMCAwMC0xMzkuOS05NC4zQzYyOSA4My42IDU3MS40IDcyIDUxMiA3MmMtMTkuOSAwLTM2LTE2LjEtMzYtMzZzMTYuMS0zNiAzNi0zNmM2OS4xIDAgMTM2LjIgMTMuNSAxOTkuMyA0MC4zQzc3Mi4zIDY2IDgyNyAxMDMgODc0IDE1MGM0NyA0NyA4My45IDEwMS44IDEwOS43IDE2Mi43IDI2LjcgNjMuMSA0MC4yIDEzMC4yIDQwLjIgMTk5LjMuMSAxOS45LTE2IDM2LTM1LjkgMzZ6IiAvPjwvc3ZnPg==) */
var RefIcon = /*#__PURE__*/react.forwardRef(LoadingOutlined_LoadingOutlined);
if (false) {}
/* harmony default export */ var icons_LoadingOutlined = (RefIcon);

/***/ }),

/***/ 1477:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8298);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34888);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12798);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52676);




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_0__.useModel)('user'),
    isLogin = _useModel.isLogin,
    initializing = _useModel.initializing;
  var _useModel2 = (0,umi__WEBPACK_IMPORTED_MODULE_0__.useModel)('dashboard'),
    showConf = _useModel2.showConf;
  if (initializing) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      spinning: true,
      fullscreen: true,
      indicator: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        style: {
          color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
        },
        spin: true
      })
    });
  }
  if (isLogin) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(umi__WEBPACK_IMPORTED_MODULE_0__.Outlet, {});
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(umi__WEBPACK_IMPORTED_MODULE_0__.Navigate, {
      to: "/login"
    });
  }
});

/***/ }),

/***/ 81864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M2: function() { return /* binding */ isFragment; },
/* harmony export */   Tm: function() { return /* binding */ cloneElement; },
/* harmony export */   wm: function() { return /* binding */ replaceElement; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);

function isFragment(child) {
  return child && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
const replaceElement = (element, replacement, props) => {
  if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
    return replacement;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
};
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

/***/ })

}]);