"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4125],{

/***/ 69101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9807);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82296);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99478);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83250);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19391);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81581);
/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52676);







/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var _profileUserData$meta;
  var address = _ref.address;
  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQuery */ .a)({
      queryKey: ['userInfo', address],
      queryFn: function queryFn() {
        return (0,_request_api__WEBPACK_IMPORTED_MODULE_0__/* .getUserInfo */ .bG)({
          address: address
        });
      }
    }),
    profileUserData = _useQuery.data,
    isFetching = _useQuery.isFetching;
  return isFetching ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.Avatar, {
      active: true,
      size: 40,
      shape: "circle"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.Input, {
      active: true,
      size: "default",
      style: {
        maxWidth: 100
      }
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      umi__WEBPACK_IMPORTED_MODULE_1__.history.push("/profile/".concat(address));
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_UserAvatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      src: profileUserData === null || profileUserData === void 0 ? void 0 : profileUserData.avatar,
      size: 40
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Text, {
        strong: true,
        style: {
          display: 'block',
          maxWidth: 100,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        children: (profileUserData === null || profileUserData === void 0 ? void 0 : profileUserData.name) || (address === null || address === void 0 ? void 0 : address.slice(0, 6)) + '...'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Text, {
        type: "secondary",
        copyable: {
          text: profileUserData === null || profileUserData === void 0 ? void 0 : profileUserData.metaid,
          tooltips: ['Copy', 'Copied!']
        },
        style: {
          display: 'block',
          maxWidth: 100,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        children: ["MetaID:", (profileUserData === null || profileUserData === void 0 ? void 0 : profileUserData.metaid) || (profileUserData === null || profileUserData === void 0 || (_profileUserData$meta = profileUserData.metaid) === null || _profileUserData$meta === void 0 ? void 0 : _profileUserData$meta.slice(0, 4)) + '...']
      })]
    })]
  });
});

/***/ }),

/***/ 7245:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ notification; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 3 modules
var es_list = __webpack_require__(17675);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(83250);
;// CONCATENATED MODULE: ./src/pages/notification/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/utils/NotificationStore.ts
var NotificationStore = __webpack_require__(93681);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(81581);
;// CONCATENATED MODULE: ./src/assets/notify/comment.svg
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgComment = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 38, height: 38 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "comment_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 38, height: 38, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#comment_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M34.705 1.812H3.539C1.707 1.812 0 3.587 0 5.419v22.856c0 1.834 1.707 3.617 3.54 3.617h11.327l4.254 4.252 4.254-4.252h11.33c1.834 0 3.11-1.783 3.11-3.617v-3.723l.104-.129.111-19.145c0-1.834-1.49-3.466-3.325-3.466ZM11.388 19.143a2.22 2.22 0 1 1 0-4.44 2.22 2.22 0 0 1 0 4.44Zm7.734 0a2.22 2.22 0 1 1 0-4.44 2.22 2.22 0 0 1 0 4.44Zm7.736 0a2.22 2.22 0 1 1 0-4.44 2.22 2.22 0 0 1 0 4.44Z", fill: "#06BE80", style: {
  mixBlendMode: "passthrough"
} })));

/* harmony default export */ var comment = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMzQuNzA1IDEuODEySDMuNTM5QzEuNzA3IDEuODEyIDAgMy41ODcgMCA1LjQxOXYyMi44NTZjMCAxLjgzNCAxLjcwNyAzLjYxNyAzLjU0IDMuNjE3aDExLjMyN2w0LjI1NCA0LjI1MiA0LjI1NC00LjI1MmgxMS4zM2MxLjgzNCAwIDMuMTEtMS43ODMgMy4xMS0zLjYxN3YtMy43MjNsLjEwNC0uMTI5LjExMS0xOS4xNDVjMC0xLjgzNC0xLjQ5LTMuNDY2LTMuMzI1LTMuNDY2Wk0xMS4zODggMTkuMTQzYTIuMjIgMi4yMiAwIDEgMSAwLTQuNDQgMi4yMiAyLjIyIDAgMCAxIDAgNC40NFptNy43MzQgMGEyLjIyIDIuMjIgMCAxIDEgMC00LjQ0IDIuMjIgMi4yMiAwIDAgMSAwIDQuNDRabTcuNzM2IDBhMi4yMiAyLjIyIDAgMSAxIDAtNC40NCAyLjIyIDIuMjIgMCAwIDEgMCA0LjQ0WiIgZmlsbD0iIzA2QkU4MCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnBhc3N0aHJvdWdoIi8+PC9nPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/assets/notify/like.svg
var like_defProp = Object.defineProperty;
var like_getOwnPropSymbols = Object.getOwnPropertySymbols;
var like_hasOwnProp = Object.prototype.hasOwnProperty;
var like_propIsEnum = Object.prototype.propertyIsEnumerable;
var like_defNormalProp = (obj, key, value) => key in obj ? like_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var like_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (like_hasOwnProp.call(b, prop))
      like_defNormalProp(a, prop, b[prop]);
  if (like_getOwnPropSymbols)
    for (var prop of like_getOwnPropSymbols(b)) {
      if (like_propIsEnum.call(b, prop))
        like_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgLike = (props) => /* @__PURE__ */ React.createElement("svg", like_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 41, height: 41 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "like_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 41, height: 41, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#like_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M31.016 2.594a19.481 19.481 0 0 0-1.865-.097c-4.066 0-6.476 1.494-8.657 3.793-2.479-2.63-5.312-4.202-10.522-3.696C5.59 3.022.604 6.879 0 14.324v2.434c.487 6.466 5.01 11.74 17.845 20.898a4.548 4.548 0 0 0 5.288 0c12.844-9.178 17.348-14.451 17.85-20.918v-2.434c-.6-7.425-5.585-11.282-9.967-11.71Z", fill: "#FC457B", style: {
  mixBlendMode: "passthrough"
} })));

/* harmony default export */ var like = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MSIgaGVpZ2h0PSI0MSI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDEiIGhlaWdodD0iNDEiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMzEuMDE2IDIuNTk0YTE5LjQ4MSAxOS40ODEgMCAwIDAtMS44NjUtLjA5N2MtNC4wNjYgMC02LjQ3NiAxLjQ5NC04LjY1NyAzLjc5My0yLjQ3OS0yLjYzLTUuMzEyLTQuMjAyLTEwLjUyMi0zLjY5NkM1LjU5IDMuMDIyLjYwNCA2Ljg3OSAwIDE0LjMyNHYyLjQzNGMuNDg3IDYuNDY2IDUuMDEgMTEuNzQgMTcuODQ1IDIwLjg5OGE0LjU0OCA0LjU0OCAwIDAgMCA1LjI4OCAwYzEyLjg0NC05LjE3OCAxNy4zNDgtMTQuNDUxIDE3Ljg1LTIwLjkxOHYtMi40MzRjLS42LTcuNDI1LTUuNTg1LTExLjI4Mi05Ljk2Ny0xMS43MVoiIGZpbGw9IiNGQzQ1N0IiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpwYXNzdGhyb3VnaCIvPjwvZz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/notify/follow.svg
var follow_defProp = Object.defineProperty;
var follow_getOwnPropSymbols = Object.getOwnPropertySymbols;
var follow_hasOwnProp = Object.prototype.hasOwnProperty;
var follow_propIsEnum = Object.prototype.propertyIsEnumerable;
var follow_defNormalProp = (obj, key, value) => key in obj ? follow_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var follow_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (follow_hasOwnProp.call(b, prop))
      follow_defNormalProp(a, prop, b[prop]);
  if (follow_getOwnPropSymbols)
    for (var prop of follow_getOwnPropSymbols(b)) {
      if (follow_propIsEnum.call(b, prop))
        follow_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgFollow = (props) => /* @__PURE__ */ React.createElement("svg", follow_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 48, height: 48 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "follow_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 48, height: 48, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#follow_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M30 24.052c.483-.282.872-1.088.056-1.472a17.005 17.005 0 0 0-.848-.356 9.924 9.924 0 0 0 3.323-7.411c0-5.494-4.458-9.952-9.951-9.952-5.494 0-9.952 4.458-9.952 9.952a9.924 9.924 0 0 0 3.324 7.41c-6.029 2.368-10.477 7.87-11.344 14.504a2.268 2.268 0 0 0 2.255 2.508h18.871a11.303 11.303 0 0 1-1.364-5.391A11.343 11.343 0 0 1 30 24.052Z", fill: "#FC457B", style: {
  mixBlendMode: "passthrough"
} }), /* @__PURE__ */ React.createElement("path", { d: "M35.705 24.534c-5.128 0-9.305 4.172-9.305 9.305 0 5.128 4.172 9.305 9.305 9.305s9.305-4.172 9.305-9.305c0-5.128-4.172-9.305-9.305-9.305Zm5.845 8.846-2.006 2.034c-.084.085-.145.23-.113.342l.488 2.925a.97.97 0 0 1-.403 1.003 1.05 1.05 0 0 1-.572.174.924.924 0 0 1-.46-.113l-2.493-1.373a.264.264 0 0 0-.286 0l-2.494 1.373a1.016 1.016 0 0 1-1.031-.056c-.342-.23-.488-.6-.431-1.003l.487-2.892c.028-.145 0-.258-.084-.342l-2.035-2.063a1.103 1.103 0 0 1-.23-1.06.976.976 0 0 1 .774-.66l2.78-.431c.112 0 .201-.085.258-.202l1.232-2.634a.965.965 0 0 1 .886-.572c.37 0 .718.23.886.572l1.261 2.634a.372.372 0 0 0 .258.202l2.78.43c.342.029.66.287.773.662.145.36.033.764-.225 1.05Z", fill: "#FC457B", style: {
  mixBlendMode: "passthrough"
} })));

/* harmony default export */ var follow = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMzAgMjQuMDUyYy40ODMtLjI4Mi44NzItMS4wODguMDU2LTEuNDcyYTE3LjAwNSAxNy4wMDUgMCAwIDAtLjg0OC0uMzU2IDkuOTI0IDkuOTI0IDAgMCAwIDMuMzIzLTcuNDExYzAtNS40OTQtNC40NTgtOS45NTItOS45NTEtOS45NTItNS40OTQgMC05Ljk1MiA0LjQ1OC05Ljk1MiA5Ljk1MmE5LjkyNCA5LjkyNCAwIDAgMCAzLjMyNCA3LjQxYy02LjAyOSAyLjM2OC0xMC40NzcgNy44Ny0xMS4zNDQgMTQuNTA0YTIuMjY4IDIuMjY4IDAgMCAwIDIuMjU1IDIuNTA4aDE4Ljg3MWExMS4zMDMgMTEuMzAzIDAgMCAxLTEuMzY0LTUuMzkxQTExLjM0MyAxMS4zNDMgMCAwIDEgMzAgMjQuMDUyWiIgZmlsbD0iI0ZDNDU3QiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnBhc3N0aHJvdWdoIi8+PHBhdGggZD0iTTM1LjcwNSAyNC41MzRjLTUuMTI4IDAtOS4zMDUgNC4xNzItOS4zMDUgOS4zMDUgMCA1LjEyOCA0LjE3MiA5LjMwNSA5LjMwNSA5LjMwNXM5LjMwNS00LjE3MiA5LjMwNS05LjMwNWMwLTUuMTI4LTQuMTcyLTkuMzA1LTkuMzA1LTkuMzA1Wm01Ljg0NSA4Ljg0Ni0yLjAwNiAyLjAzNGMtLjA4NC4wODUtLjE0NS4yMy0uMTEzLjM0MmwuNDg4IDIuOTI1YS45Ny45NyAwIDAgMS0uNDAzIDEuMDAzIDEuMDUgMS4wNSAwIDAgMS0uNTcyLjE3NC45MjQuOTI0IDAgMCAxLS40Ni0uMTEzbC0yLjQ5My0xLjM3M2EuMjY0LjI2NCAwIDAgMC0uMjg2IDBsLTIuNDk0IDEuMzczYTEuMDE2IDEuMDE2IDAgMCAxLTEuMDMxLS4wNTZjLS4zNDItLjIzLS40ODgtLjYtLjQzMS0xLjAwM2wuNDg3LTIuODkyYy4wMjgtLjE0NSAwLS4yNTgtLjA4NC0uMzQybC0yLjAzNS0yLjA2M2ExLjEwMyAxLjEwMyAwIDAgMS0uMjMtMS4wNi45NzYuOTc2IDAgMCAxIC43NzQtLjY2bDIuNzgtLjQzMWMuMTEyIDAgLjIwMS0uMDg1LjI1OC0uMjAybDEuMjMyLTIuNjM0YS45NjUuOTY1IDAgMCAxIC44ODYtLjU3MmMuMzcgMCAuNzE4LjIzLjg4Ni41NzJsMS4yNjEgMi42MzRhLjM3Mi4zNzIgMCAwIDAgLjI1OC4yMDJsMi43OC40M2MuMzQyLjAyOS42Ni4yODcuNzczLjY2Mi4xNDUuMzYuMDMzLjc2NC0uMjI1IDEuMDVaIiBmaWxsPSIjRkM0NTdCIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6cGFzc3Rocm91Z2giLz48L2c+PC9zdmc+");

;// CONCATENATED MODULE: ./src/assets/notify/reward.svg
var reward_defProp = Object.defineProperty;
var reward_getOwnPropSymbols = Object.getOwnPropertySymbols;
var reward_hasOwnProp = Object.prototype.hasOwnProperty;
var reward_propIsEnum = Object.prototype.propertyIsEnumerable;
var reward_defNormalProp = (obj, key, value) => key in obj ? reward_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var reward_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (reward_hasOwnProp.call(b, prop))
      reward_defNormalProp(a, prop, b[prop]);
  if (reward_getOwnPropSymbols)
    for (var prop of reward_getOwnPropSymbols(b)) {
      if (reward_propIsEnum.call(b, prop))
        reward_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgReward = (props) => /* @__PURE__ */ React.createElement("svg", reward_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 38, height: 38 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "reward_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 38, height: 38, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#reward_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M20.188 20.781v13.99a.298.298 0 0 1-.297.297h-1.782a.298.298 0 0 1-.297-.297v-13.99H2.376v14.287a2.377 2.377 0 0 0 2.375 2.375h28.5a2.375 2.375 0 0 0 2.375-2.375V20.781H20.187ZM33.25 7.756h-1.559a.297.297 0 0 1-.244-.464c.578-.861.86-1.807.801-2.746-.07-1.12-.634-2.093-1.625-2.813-.713-.516-1.66-.89-2.661-1.061-1.818-.305-3.744.211-5.43 1.458-.905.672-1.729 1.529-2.463 2.568a1.187 1.187 0 0 1-1.934 0c-.734-1.04-1.558-1.9-2.464-2.568C13.991.883 12.064.364 10.246.672c-1.002.17-1.948.545-2.66 1.06-.992.717-1.556 1.69-1.626 2.814-.06.939.219 1.885.801 2.746a.296.296 0 0 1-.245.464H4.75A4.75 4.75 0 0 0 0 12.506v4.75c0 .553.379 1.02.89 1.15h36.22c.511-.13.89-.597.89-1.15v-4.75a4.75 4.75 0 0 0-4.75-4.75Zm-12.02-.442c1.974-3.58 4.476-4.616 6.335-4.3.226.036 2.226.411 2.312 1.684.07 1.11-1.154 2.58-3.266 3.058H21.49a.298.298 0 0 1-.26-.442ZM8.327 4.698c.082-1.273 2.082-1.644 2.312-1.685 1.863-.312 4.364.72 6.335 4.301a.297.297 0 0 1-.26.442h-5.121c-2.108-.483-3.336-1.948-3.266-3.058Z", fill: "#FC457B", style: {
  mixBlendMode: "passthrough"
} })));

/* harmony default export */ var reward = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMjAuMTg4IDIwLjc4MXYxMy45OWEuMjk4LjI5OCAwIDAgMS0uMjk3LjI5N2gtMS43ODJhLjI5OC4yOTggMCAwIDEtLjI5Ny0uMjk3di0xMy45OUgyLjM3NnYxNC4yODdhMi4zNzcgMi4zNzcgMCAwIDAgMi4zNzUgMi4zNzVoMjguNWEyLjM3NSAyLjM3NSAwIDAgMCAyLjM3NS0yLjM3NVYyMC43ODFIMjAuMTg3Wk0zMy4yNSA3Ljc1NmgtMS41NTlhLjI5Ny4yOTcgMCAwIDEtLjI0NC0uNDY0Yy41NzgtLjg2MS44Ni0xLjgwNy44MDEtMi43NDYtLjA3LTEuMTItLjYzNC0yLjA5My0xLjYyNS0yLjgxMy0uNzEzLS41MTYtMS42Ni0uODktMi42NjEtMS4wNjEtMS44MTgtLjMwNS0zLjc0NC4yMTEtNS40MyAxLjQ1OC0uOTA1LjY3Mi0xLjcyOSAxLjUyOS0yLjQ2MyAyLjU2OGExLjE4NyAxLjE4NyAwIDAgMS0xLjkzNCAwYy0uNzM0LTEuMDQtMS41NTgtMS45LTIuNDY0LTIuNTY4QzEzLjk5MS44ODMgMTIuMDY0LjM2NCAxMC4yNDYuNjcyYy0xLjAwMi4xNy0xLjk0OC41NDUtMi42NiAxLjA2LS45OTIuNzE3LTEuNTU2IDEuNjktMS42MjYgMi44MTQtLjA2LjkzOS4yMTkgMS44ODUuODAxIDIuNzQ2YS4yOTYuMjk2IDAgMCAxLS4yNDUuNDY0SDQuNzVBNC43NSA0Ljc1IDAgMCAwIDAgMTIuNTA2djQuNzVjMCAuNTUzLjM3OSAxLjAyLjg5IDEuMTVoMzYuMjJjLjUxMS0uMTMuODktLjU5Ny44OS0xLjE1di00Ljc1YTQuNzUgNC43NSAwIDAgMC00Ljc1LTQuNzVabS0xMi4wMi0uNDQyYzEuOTc0LTMuNTggNC40NzYtNC42MTYgNi4zMzUtNC4zLjIyNi4wMzYgMi4yMjYuNDExIDIuMzEyIDEuNjg0LjA3IDEuMTEtMS4xNTQgMi41OC0zLjI2NiAzLjA1OEgyMS40OWEuMjk4LjI5OCAwIDAgMS0uMjYtLjQ0MlpNOC4zMjcgNC42OThjLjA4Mi0xLjI3MyAyLjA4Mi0xLjY0NCAyLjMxMi0xLjY4NSAxLjg2My0uMzEyIDQuMzY0LjcyIDYuMzM1IDQuMzAxYS4yOTcuMjk3IDAgMCAxLS4yNi40NDJoLTUuMTIxYy0yLjEwOC0uNDgzLTMuMzM2LTEuOTQ4LTMuMjY2LTMuMDU4WiIgZmlsbD0iI0ZDNDU3QiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnBhc3N0aHJvdWdoIi8+PC9nPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/assets/notify/repost.svg
var repost_defProp = Object.defineProperty;
var repost_getOwnPropSymbols = Object.getOwnPropertySymbols;
var repost_hasOwnProp = Object.prototype.hasOwnProperty;
var repost_propIsEnum = Object.prototype.propertyIsEnumerable;
var repost_defNormalProp = (obj, key, value) => key in obj ? repost_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var repost_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (repost_hasOwnProp.call(b, prop))
      repost_defNormalProp(a, prop, b[prop]);
  if (repost_getOwnPropSymbols)
    for (var prop of repost_getOwnPropSymbols(b)) {
      if (repost_propIsEnum.call(b, prop))
        repost_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgRepost = (props) => /* @__PURE__ */ React.createElement("svg", repost_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 40, height: 40 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "repost_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 40, height: 40, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#repost_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M37.732 21.96 23.579 34.48c-1.202 1.148-3.16.27-3.16-1.42v-6.307a20.183 20.183 0 0 0-1.438-.054c-6.484 0-12.132 3.035-15.1 7.536-.612.92-1.998.568-2.116-.54a16.553 16.553 0 0 1-.098-1.812c0-9.441 8.138-17.256 18.759-18.634V6.94c0-1.69 1.958-2.567 3.16-1.42l14.152 13.61c.794.757.794 2.068-.006 2.832Z", fill: "#1C70FE", style: {
  mixBlendMode: "passthrough"
} })));

/* harmony default export */ var repost = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMzcuNzMyIDIxLjk2IDIzLjU3OSAzNC40OGMtMS4yMDIgMS4xNDgtMy4xNi4yNy0zLjE2LTEuNDJ2LTYuMzA3YTIwLjE4MyAyMC4xODMgMCAwIDAtMS40MzgtLjA1NGMtNi40ODQgMC0xMi4xMzIgMy4wMzUtMTUuMSA3LjUzNi0uNjEyLjkyLTEuOTk4LjU2OC0yLjExNi0uNTRhMTYuNTUzIDE2LjU1MyAwIDAgMS0uMDk4LTEuODEyYzAtOS40NDEgOC4xMzgtMTcuMjU2IDE4Ljc1OS0xOC42MzRWNi45NGMwLTEuNjkgMS45NTgtMi41NjcgMy4xNi0xLjQybDE0LjE1MiAxMy42MWMuNzk0Ljc1Ny43OTQgMi4wNjgtLjAwNiAyLjgzMloiIGZpbGw9IiMxQzcwRkUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpwYXNzdGhyb3VnaCIvPjwvZz48L3N2Zz4=");

// EXTERNAL MODULE: ./src/Components/UserInfo/PendingUser.tsx
var PendingUser = __webpack_require__(69101);
;// CONCATENATED MODULE: ./src/Components/NotificationItem/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(19391);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./src/utils/buzz.ts
var buzz = __webpack_require__(518);
// EXTERNAL MODULE: ./src/Components/Buzz/ImageGallery.tsx + 1 modules
var ImageGallery = __webpack_require__(83946);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/UserInfo/PendingUserAvatar.tsx






/* harmony default export */ var PendingUserAvatar = (function (_ref) {
  var address = _ref.address,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 34 : _ref$size;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['userInfo', address],
      queryFn: function queryFn() {
        return (0,api/* getUserInfo */.bG)({
          address: address
        });
      }
    }),
    profileUserData = _useQuery.data,
    isFetching = _useQuery.isFetching;
  return isFetching ? /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z.Avatar, {
    active: true,
    size: size,
    shape: "circle"
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
    src: profileUserData === null || profileUserData === void 0 ? void 0 : profileUserData.avatar,
    size: size,
    onClick: function onClick() {
      _umi_production_exports.history.push("/profile/".concat(address));
    }
  });
});
;// CONCATENATED MODULE: ./src/Components/Buzz/SimpleBuzz.tsx












var SimpleBuzzContent = function SimpleBuzzContent(_ref) {
  var buzzId = _ref.buzzId;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(buzzId),
      queryKey: ['buzzContent', buzzId],
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
          var ret;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,api/* fetchBuzzContent */.wz)({
                  pinId: buzzId
                });
              case 2:
                ret = _context.sent;
                if (!(typeof ret === 'string')) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", (0,buzz/* formatSimpleBuzz */.hr)({
                  content: ret,
                  attachments: []
                }));
              case 5:
                if (!(typeof ret.content === 'string')) {
                  _context.next = 10;
                  break;
                }
                console.log('buzzDetail', ret);
                return _context.abrupt("return", (0,buzz/* formatSimpleBuzz */.hr)(ret));
              case 10:
                return _context.abrupt("return", ret);
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function queryFn() {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    isLoading = _useQuery.isLoading,
    buzzDetail = _useQuery.data,
    refetch = _useQuery.refetch;
  console.log('buzzDetail2222', buzzDetail);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
      active: true
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Paragraph, {
        style: {
          marginBottom: 0,
          fontSize: 12
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          style: {
            lineHeight: '34px'
          },
          children: buzzDetail === null || buzzDetail === void 0 ? void 0 : buzzDetail.publicContent
        })
      }), (buzzDetail === null || buzzDetail === void 0 ? void 0 : buzzDetail.publicFiles) && (buzzDetail === null || buzzDetail === void 0 ? void 0 : buzzDetail.publicFiles.length) > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(ImageGallery/* default */.Z, {
        decryptContent: buzzDetail
      })]
    })
  });
};
/* harmony default export */ var SimpleBuzz = (function (_ref2) {
  var buzzId = _ref2.buzzId,
    userAddress = _ref2.userAddress;
  var _theme$useToken = theme/* default */.Z.useToken(),
    colorBgLayout = _theme$useToken.token.colorBgLayout;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
    style: {
      padding: 0,
      marginBottom: 12,
      boxShadow: "none",
      border: 'none',
      background: colorBgLayout
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        gap: 8
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserAvatar, {
        address: userAddress,
        size: 34
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SimpleBuzzContent, {
        buzzId: buzzId
      })]
    })
  });
});
;// CONCATENATED MODULE: ./src/Components/Buzz/ReplyBuzz.tsx








/* harmony default export */ var ReplyBuzz = (function (_ref) {
  var buzzId = _ref.buzzId,
    replyPinId = _ref.replyPinId,
    replyAddress = _ref.replyAddress,
    userAddress = _ref.userAddress;
  var _theme$useToken = theme/* default */.Z.useToken(),
    colorBgLayout = _theme$useToken.token.colorBgLayout;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['replyContent', replyPinId],
      queryFn: function queryFn() {
        return (0,api/* getReplyContent */.$m)({
          pinId: replyPinId
        });
      },
      enabled: !(0,isEmpty/* default */.Z)(buzzId)
    }),
    isLoadingUser = _useQuery.isLoading,
    replyContent = _useQuery.data;
  console.log('replyContent', replyContent);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
    style: {
      padding: 0,
      marginBottom: 12,
      boxShadow: "none",
      border: 'none',
      background: colorBgLayout
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        gap: 8
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserAvatar, {
        address: replyAddress,
        size: 34
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
        style: {
          lineHeight: '34px'
        },
        children: replyContent === null || replyContent === void 0 ? void 0 : replyContent.content
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
      type: "vertical",
      style: {
        height: 26,
        margin: '12px 17px'
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        gap: 8
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserAvatar, {
        address: userAddress,
        size: 34
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SimpleBuzzContent, {
        buzzId: buzzId
      })]
    })]
  });
});
;// CONCATENATED MODULE: ./src/Components/UserInfo/PendingUserName.tsx




/* harmony default export */ var PendingUserName = (function (_ref) {
  var address = _ref.address,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 34 : _ref$size;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['userInfo', address],
      queryFn: function queryFn() {
        return (0,api/* getUserInfo */.bG)({
          address: address
        });
      }
    }),
    profileUserData = _useQuery.data,
    isFetching = _useQuery.isFetching;
  return isFetching ? /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z.Input, {
    active: true,
    size: "small",
    style: {
      maxWidth: 100
    }
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
    strong: true,
    children: (profileUserData === null || profileUserData === void 0 ? void 0 : profileUserData.name) || (address === null || address === void 0 ? void 0 : address.slice(0, 6)) + '...'
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/GiftOutlined.js + 1 modules
var GiftOutlined = __webpack_require__(94427);
// EXTERNAL MODULE: ./src/assets/btc.png
var btc = __webpack_require__(33401);
// EXTERNAL MODULE: ./src/assets/mvc.png
var mvc = __webpack_require__(61133);
;// CONCATENATED MODULE: ./src/Components/NotificationItem/RewardContent.tsx









/* harmony default export */ var RewardContent = (function (_ref) {
  var pinId = _ref.pinId;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorBgLayout = _theme$useToken$token.colorBgLayout;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['rewardData', pinId],
      queryFn: function queryFn() {
        return (0,api/* getRewardContent */.M1)({
          pinId: pinId
        });
      },
      enabled: !(0,isEmpty/* default */.Z)(pinId)
    }),
    rewardData = _useQuery.data,
    isLoading = _useQuery.isLoading;
  console.log('rewardData', rewardData);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
    style: {
      background: colorBgLayout,
      border: 'none',
      boxShadow: 'none'
    },
    loading: isLoading,
    styles: {
      body: {
        padding: 12
      }
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z, {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GiftOutlined/* default */.Z, {
        style: {
          color: colorPrimary
        }
      }), " Reward you ", /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: (rewardData === null || rewardData === void 0 ? void 0 : rewardData.coinType) === 'btc' ? btc : mvc,
        alt: "",
        style: {
          width: 20,
          height: 20
        }
      }), rewardData === null || rewardData === void 0 ? void 0 : rewardData.amount, " ", (rewardData === null || rewardData === void 0 ? void 0 : rewardData.coinType) === 'btc' ? 'BTC' : 'SPACE', " "]
    })
  });
});
;// CONCATENATED MODULE: ./src/Components/NotificationItem/index.tsx















/* harmony default export */ var NotificationItem = (function (_ref) {
  var notification = _ref.notification,
    address = _ref.address;
  switch (notification.notifcationType) {
    case '/follow':
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "notificationItem",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "notificationIcon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: follow,
            alt: "Like Icon"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "notificationContent",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
            address: notification.fromAddress
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserName, {
              address: notification.fromAddress
            }), " followed you"]
          })]
        })]
      });
    case '/protocols/simpledonate':
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "notificationItem",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "notificationIcon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: reward,
            alt: "Like Icon"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "notificationContent",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
            address: notification.fromAddress
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserName, {
              address: notification.fromAddress
            }), " reward your ", /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Link, {
              onClick: function onClick() {
                _umi_production_exports.history.push("/tweet/".concat(notification.notifcationPin));
              },
              children: "buzz"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(RewardContent, {
            pinId: notification.fromPinId
          })]
        })]
      });
    case '/protocols/paylike':
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "notificationItem",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "notificationIcon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: like,
            alt: "Like Icon"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "notificationContent",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
            address: notification.fromAddress
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserName, {
              address: notification.fromAddress
            }), " liked your buzz"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(SimpleBuzz, {
            buzzId: notification.notifcationPin,
            userAddress: address
          })]
        })]
      });
    case '/protocols/paycomment':
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "notificationItem",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "notificationIcon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: comment,
            alt: "Like Icon"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "notificationContent",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
            address: notification.fromAddress
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserName, {
              address: notification.fromAddress
            }), " reply your buzz"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ReplyBuzz, {
            buzzId: notification.notifcationPin,
            replyPinId: notification.fromPinId,
            replyAddress: notification.fromAddress,
            userAddress: address
          })]
        })]
      });
    case '/protocols/simplebuzz':
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "notificationItem",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "notificationIcon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: repost,
            alt: "Like Icon"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "notificationContent",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
            address: notification.fromAddress
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserName, {
              address: notification.fromAddress
            }), " forward your buzz"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ReplyBuzz, {
            buzzId: notification.notifcationPin,
            replyPinId: notification.fromPinId,
            replyAddress: notification.fromAddress,
            userAddress: address
          })]
        })]
      });
    default:
      return null;
  }
});
;// CONCATENATED MODULE: ./src/pages/notification/index.tsx











var PAGE_SIZE = 10;
/* harmony default export */ var notification = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    updateNotify = _useModel.updateNotify;
  var _useState = (0,react.useState)(true),
    _useState2 = slicedToArray_default()(_useState, 2),
    initLoading = _useState2[0],
    setInitLoading = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = slicedToArray_default()(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = slicedToArray_default()(_useState7, 2),
    list = _useState8[0],
    setList = _useState8[1];
  var _useState9 = (0,react.useState)(1),
    _useState10 = slicedToArray_default()(_useState9, 2),
    page = _useState10[0],
    setPage = _useState10[1];
  var _useState11 = (0,react.useState)(true),
    _useState12 = slicedToArray_default()(_useState11, 2),
    hasMore = _useState12[0],
    setHasMore = _useState12[1];
  var _useState13 = (0,react.useState)('all'),
    _useState14 = slicedToArray_default()(_useState13, 2),
    activeTabKey = _useState14[0],
    setActiveTabKey = _useState14[1];
  var tabList = [{
    key: 'all',
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "All"
    })
  }, {
    key: 'reward',
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Reward"
    })
  }, {
    key: 'mint',
    label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Mint"
    }),
    disabled: true
  }];
  var fetchData = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(currentPage, _activeTabKey) {
      var store, currentAddress, data;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (user.address) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", Promise.resolve([]));
          case 2:
            store = new NotificationStore/* NotificationStore */.X();
            currentAddress = user.address;
            _context.next = 6;
            return store.markAllAsRead(currentAddress);
          case 6:
            _context.next = 8;
            return updateNotify();
          case 8:
            _context.next = 10;
            return store.getAllNotifications(currentAddress, {
              offset: (currentPage - 1) * PAGE_SIZE,
              limit: PAGE_SIZE,
              notifcationType: _activeTabKey === 'reward' ? '/protocols/simpledonate' : undefined
            });
          case 10:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetchData(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    fetchData(page, activeTabKey).then(function (res) {
      var results = Array.isArray(res) ? res : [];
      setInitLoading(false);
      setData(results);
      setList(results);
      setLoading(false);
      if (results.length < PAGE_SIZE) {
        setHasMore(false);
      }
    });
  }, [page, activeTabKey]);
  var onLoadMore = function onLoadMore() {
    setLoading(true);
    setList(data.concat(Array.from({
      length: PAGE_SIZE
    }).map(function () {
      return {
        loading: true
      };
    })));
    var nextPage = page + 1;
    setPage(nextPage);
  };
  var loadMore = !initLoading && !loading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      textAlign: 'center',
      marginTop: 12,
      height: 32,
      lineHeight: '32px'
    },
    children: hasMore ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
      onClick: onLoadMore,
      children: "loading more"
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
      plain: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "It is all, nothing more \uD83E\uDD10"
      })
    })
  }) : null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Notifications"
    }),
    bordered: false,
    className: "notificationPage",
    tabList: tabList,
    activeTabKey: activeTabKey,
    onTabChange: function onTabChange(key) {
      setActiveTabKey(key);
      setPage(1);
    },
    tabProps: {
      centered: true,
      className: "homeTabs"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_list/* default */.Z, {
      className: "notifications-list",
      loading: initLoading,
      itemLayout: "horizontal",
      loadMore: loadMore,
      dataSource: list,
      renderItem: function renderItem(item) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(es_list/* default */.Z.Item, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
            avatar: true,
            title: false,
            loading: item.loading,
            active: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NotificationItem, {
              notification: item,
              address: user.address
            })
          })
        });
      }
    })
  });
});

/***/ }),

/***/ 33713:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ divider; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1225);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var es = __webpack_require__(20865);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(9894);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(21275);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83509);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/style/index.js



// ============================== Shared ==============================
const genSharedDividerStyle = token => {
  const {
    componentCls,
    sizePaddingEdgeHorizontal,
    colorSplit,
    lineWidth,
    textPaddingInline,
    orientationMargin,
    verticalMarginInline
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      borderBlockStart: `${(0,es.unit)(lineWidth)} solid ${colorSplit}`,
      // vertical
      '&-vertical': {
        position: 'relative',
        top: '-0.06em',
        display: 'inline-block',
        height: '0.9em',
        marginInline: verticalMarginInline,
        marginBlock: 0,
        verticalAlign: 'middle',
        borderTop: 0,
        borderInlineStart: `${(0,es.unit)(lineWidth)} solid ${colorSplit}`
      },
      '&-horizontal': {
        display: 'flex',
        clear: 'both',
        width: '100%',
        minWidth: '100%',
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${(0,es.unit)(token.dividerHorizontalGutterMargin)} 0`
      },
      [`&-horizontal${componentCls}-with-text`]: {
        display: 'flex',
        alignItems: 'center',
        margin: `${(0,es.unit)(token.dividerHorizontalWithTextGutterMargin)} 0`,
        color: token.colorTextHeading,
        fontWeight: 500,
        fontSize: token.fontSizeLG,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        borderBlockStart: `0 ${colorSplit}`,
        '&::before, &::after': {
          position: 'relative',
          width: '50%',
          borderBlockStart: `${(0,es.unit)(lineWidth)} solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: 'inherit',
          borderBlockEnd: 0,
          transform: 'translateY(50%)',
          content: "''"
        }
      },
      [`&-horizontal${componentCls}-with-text-start`]: {
        '&::before': {
          width: `calc(${orientationMargin} * 100%)`
        },
        '&::after': {
          width: `calc(100% - ${orientationMargin} * 100%)`
        }
      },
      [`&-horizontal${componentCls}-with-text-end`]: {
        '&::before': {
          width: `calc(100% - ${orientationMargin} * 100%)`
        },
        '&::after': {
          width: `calc(${orientationMargin} * 100%)`
        }
      },
      [`${componentCls}-inner-text`]: {
        display: 'inline-block',
        paddingBlock: 0,
        paddingInline: textPaddingInline
      },
      '&-dashed': {
        background: 'none',
        borderColor: colorSplit,
        borderStyle: 'dashed',
        borderWidth: `${(0,es.unit)(lineWidth)} 0 0`
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dashed`]: {
        '&::before, &::after': {
          borderStyle: 'dashed none none'
        }
      },
      [`&-vertical${componentCls}-dashed`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      '&-dotted': {
        background: 'none',
        borderColor: colorSplit,
        borderStyle: 'dotted',
        borderWidth: `${(0,es.unit)(lineWidth)} 0 0`
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dotted`]: {
        '&::before, &::after': {
          borderStyle: 'dotted none none'
        }
      },
      [`&-vertical${componentCls}-dotted`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${componentCls}-with-text`]: {
        color: token.colorText,
        fontWeight: 'normal',
        fontSize: token.fontSize
      },
      [`&-horizontal${componentCls}-with-text-start${componentCls}-no-default-orientation-margin-start`]: {
        '&::before': {
          width: 0
        },
        '&::after': {
          width: '100%'
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineStart: sizePaddingEdgeHorizontal
        }
      },
      [`&-horizontal${componentCls}-with-text-end${componentCls}-no-default-orientation-margin-end`]: {
        '&::before': {
          width: '100%'
        },
        '&::after': {
          width: 0
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineEnd: sizePaddingEdgeHorizontal
        }
      }
    })
  };
};
const prepareComponentToken = token => ({
  textPaddingInline: '1em',
  orientationMargin: 0.05,
  verticalMarginInline: token.marginXS
});
// ============================== Export ==============================
/* harmony default export */ var divider_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Divider', token => {
  const dividerToken = (0,cssinjs_utils_es.mergeToken)(token, {
    dividerHorizontalWithTextGutterMargin: token.margin,
    dividerHorizontalGutterMargin: token.marginLG,
    sizePaddingEdgeHorizontal: 0
  });
  return [genSharedDividerStyle(dividerToken)];
}, prepareComponentToken, {
  unitless: {
    orientationMargin: true
  }
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const Divider = props => {
  const {
    getPrefixCls,
    direction,
    className: dividerClassName,
    style: dividerStyle
  } = (0,context/* useComponentConfig */.dj)('divider');
  const {
      prefixCls: customizePrefixCls,
      type = 'horizontal',
      orientation = 'center',
      orientationMargin,
      className,
      rootClassName,
      children,
      dashed,
      variant = 'solid',
      plain,
      style
    } = props,
    restProps = __rest(props, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "variant", "plain", "style"]);
  const prefixCls = getPrefixCls('divider', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = divider_style(prefixCls);
  const hasChildren = !!children;
  const mergedOrientation = react.useMemo(() => {
    if (orientation === 'left') {
      return direction === 'rtl' ? 'end' : 'start';
    }
    if (orientation === 'right') {
      return direction === 'rtl' ? 'start' : 'end';
    }
    return orientation;
  }, [direction, orientation]);
  const hasMarginStart = mergedOrientation === 'start' && orientationMargin != null;
  const hasMarginEnd = mergedOrientation === 'end' && orientationMargin != null;
  const classString = classnames_default()(prefixCls, dividerClassName, hashId, cssVarCls, `${prefixCls}-${type}`, {
    [`${prefixCls}-with-text`]: hasChildren,
    [`${prefixCls}-with-text-${mergedOrientation}`]: hasChildren,
    [`${prefixCls}-dashed`]: !!dashed,
    [`${prefixCls}-${variant}`]: variant !== 'solid',
    [`${prefixCls}-plain`]: !!plain,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-no-default-orientation-margin-start`]: hasMarginStart,
    [`${prefixCls}-no-default-orientation-margin-end`]: hasMarginEnd
  }, className, rootClassName);
  const memoizedOrientationMargin = react.useMemo(() => {
    if (typeof orientationMargin === 'number') {
      return orientationMargin;
    }
    if (/^\d+$/.test(orientationMargin)) {
      return Number(orientationMargin);
    }
    return orientationMargin;
  }, [orientationMargin]);
  const innerStyle = {
    marginInlineStart: hasMarginStart ? memoizedOrientationMargin : undefined,
    marginInlineEnd: hasMarginEnd ? memoizedOrientationMargin : undefined
  };
  // Warning children not work in vertical mode
  if (false) {}
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", Object.assign({
    className: classString,
    style: Object.assign(Object.assign({}, dividerStyle), style)
  }, restProps, {
    role: "separator"
  }), children && type !== 'vertical' && (/*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-inner-text`,
    style: innerStyle
  }, children))));
};
if (false) {}
/* harmony default export */ var divider = (Divider);

/***/ })

}]);