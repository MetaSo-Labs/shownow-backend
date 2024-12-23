"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1717],{

/***/ 86805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Lay; }
/* harmony export */ });
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12798);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38587);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75271);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74902);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32120);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73118);
/* harmony import */ var _showLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5357);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52676);









var queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__/* .QueryClient */ .S();
function Lay() {
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_2__.useModel)('dashboard'),
    showConf = _useModel.showConf;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
    _useState2 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
    themeTokens = _useState2[0],
    setThemeTokens = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (showConf) {
      var tokens = {
        colorPrimary: showConf.brandColor,
        colorLink: showConf.brandColor
      };
      if (showConf.colorBgLayout) {
        tokens.colorBgLayout = showConf.colorBgLayout;
      }
      if (showConf.colorBorderSecondary) {
        tokens.colorBorderSecondary = showConf.colorBorderSecondary;
      }
      var components = {
        "Avatar": {
          "colorTextPlaceholder": showConf.brandColor
        },
        "Button": {
          "defaultBorderColor": "rgba(217,217,217,0)",
          "defaultShadow": "0 2px 0 rgba(0, 0, 0,0)"
        }
      };
      if (showConf.colorButton) {
        components.Button.primaryColor = showConf.colorButton;
      }
      setThemeTokens({
        token: tokens,
        components: components
      });
    }
  }, [showConf]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__/* .QueryClientProvider */ .aH, {
    client: queryClient,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
      theme: _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({
        algorithm: (showConf === null || showConf === void 0 ? void 0 : showConf.theme) !== 'dark' ? antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.defaultAlgorithm : antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.darkAlgorithm
      }, themeTokens),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_showLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
    })
  });
}

/***/ })

}]);