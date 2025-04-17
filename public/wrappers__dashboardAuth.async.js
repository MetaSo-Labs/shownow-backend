"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5895],{

/***/ 87670:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71756);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52676);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_0__.useModel)('dashboard'),
    logined = _useModel.logined;
  if (logined) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(umi__WEBPACK_IMPORTED_MODULE_0__.Outlet, {});
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(umi__WEBPACK_IMPORTED_MODULE_0__.Navigate, {
      to: "/dashboardLogin"
    });
  }
});

/***/ })

}]);