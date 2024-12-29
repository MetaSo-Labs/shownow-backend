"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5899],{

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
    showConf = _useModel2.showConf,
    loading = _useModel2.loading;
  if (initializing || loading) {
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
  if (isLogin || !(showConf !== null && showConf !== void 0 && showConf.checkLogin)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(umi__WEBPACK_IMPORTED_MODULE_0__.Outlet, {});
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(umi__WEBPACK_IMPORTED_MODULE_0__.Navigate, {
      to: "/login"
    });
  }
});

/***/ })

}]);