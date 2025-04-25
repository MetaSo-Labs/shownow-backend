(self["webpackChunk"] = self["webpackChunk"] || []).push([[1490],{

/***/ 38161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25688);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);





var NumberFormat = function NumberFormat(props) {
  var prefix = props.prefix,
    suffix = props.suffix,
    wrapper = props.wrapper,
    style = props.style;
  var beautyNumber = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var value = props.value,
      _props$precision = props.precision,
      precision = _props$precision === void 0 ? 16 : _props$precision,
      _props$isBig = props.isBig,
      isBig = _props$isBig === void 0 ? false : _props$isBig,
      decimal = props.decimal,
      _props$tiny = props.tiny,
      tiny = _props$tiny === void 0 ? false : _props$tiny;
    var _value = value;
    if (Number.isNaN(Number(_value))) return '--';
    if (isBig && decimal) {
      if (String(_value).indexOf('.') > -1) {
        _value = new decimal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(new decimal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(_value).times(1e8)).div(Math.pow(10, Number(decimal) + 8));
      } else {
        _value = new decimal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(_value || '0').div(Math.pow(10, Number(decimal)));
      }
    }
    try {
      if (tiny && Number(_value) < 0.0000001 && Number(_value) > 0) {
        var string = String(parseFloat(String(_value)));
        var ret = string.replace('.', '').match(/(\d+)e-(\d+)/);
        var left = '';
        var dex = '';
        if (ret && ret[1] && ret[2]) {
          left = ret[1].substring(0, precision);
          dex = String(Number(ret[2]) - 1);
        }
        return {
          type: 'tiny',
          left: left,
          dex: dex
        };
      }
    } catch (err) {
      return '--';
    }
    return Number(_value).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: precision
    });
  }, [props]);
  if (wrapper) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
      style: style,
      children: [prefix, typeof beautyNumber === 'string' ? beautyNumber : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: ["0.0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          style: {
            fontSize: '0.8em',
            top: "0.2em",
            position: "relative"
          },
          children: beautyNumber.dex
        }), beautyNumber.left]
      }), suffix]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [prefix, typeof beautyNumber === 'string' ? beautyNumber : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: ["0.0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: {
          fontSize: '0.8em',
          top: "0.2em",
          position: "relative"
        },
        children: beautyNumber.dex
      }), beautyNumber.left]
    }), suffix]
  });
};
/* harmony default export */ __webpack_exports__.Z = (NumberFormat);

/***/ }),

/***/ 87192:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ dashboard_metaso; }
});

// EXTERNAL MODULE: ./src/Components/NumberFormat/index.tsx
var NumberFormat = __webpack_require__(38161);
// EXTERNAL MODULE: ./src/request/metaso.ts
var metaso = __webpack_require__(57828);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/index.js + 4 modules
var es_alert = __webpack_require__(81751);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(19391);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(86821);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(62319);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/assets/dashboard/usd-coin.svg
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

const SvgUsdCoin = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 140, height: 112 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("mask", { id: "usd-coin_svg__a", style: {
  maskType: "alpha"
}, maskUnits: "objectBoundingBox" }, /* @__PURE__ */ React.createElement("rect", { width: 140, height: 112, rx: 0, fill: "#FFF" }))), /* @__PURE__ */ React.createElement("g", { style: {
  opacity: 0.30000001192092896
}, mask: "url(#usd-coin_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M98.875 103.25a4.327 4.327 0 0 1-3.092-1.283c-1.691-1.692-1.691-4.492 0-6.184C102.667 88.9 106.458 79.742 106.458 70s-3.791-18.9-10.675-25.783c-1.691-1.692-1.691-4.492 0-6.184 1.692-1.691 4.492-1.691 6.184 0 8.516 8.517 13.241 19.892 13.241 31.967s-4.725 23.45-13.241 31.967a4.327 4.327 0 0 1-3.092 1.283ZM41.125 103.25a4.327 4.327 0 0 1-3.092-1.283C29.517 93.45 24.792 82.075 24.792 70s4.725-23.45 13.241-31.967c1.692-1.691 4.492-1.691 6.184 0 1.691 1.692 1.691 4.492 0 6.184C37.333 51.1 33.542 60.258 33.542 70s3.791 18.9 10.675 25.783c1.691 1.692 1.691 4.492 0 6.184a4.327 4.327 0 0 1-3.092 1.283ZM75.717 93.45H65.45c-7.408 0-13.475-6.242-13.475-13.883 0-2.392 1.983-4.375 4.375-4.375s4.375 1.983 4.375 4.375c0 2.858 2.1 5.133 4.725 5.133h10.267c1.925 0 3.558-1.75 3.558-3.908 0-2.742-.642-3.092-2.508-3.734l-16.392-5.716c-5.6-1.984-8.342-5.892-8.342-12.017 0-7 5.484-12.658 12.309-12.658h10.266c7.409 0 13.475 6.241 13.475 13.883 0 2.392-1.983 4.375-4.375 4.375-2.391 0-4.375-1.983-4.375-4.375 0-2.858-2.1-5.133-4.725-5.133H64.342c-1.925 0-3.559 1.75-3.559 3.908 0 2.742.642 3.092 2.509 3.733l16.391 5.717c5.6 1.983 8.342 5.892 8.342 12.017-.058 6.941-5.542 12.658-12.308 12.658Z", fill: "#FFF" }), /* @__PURE__ */ React.createElement("path", { d: "M70 98.875c-2.392 0-4.375-1.983-4.375-4.375v-49c0-2.392 1.983-4.375 4.375-4.375s4.375 1.983 4.375 4.375v49c0 2.392-1.983 4.375-4.375 4.375Z", fill: "#FFF" }), /* @__PURE__ */ React.createElement("path", { d: "M70 132.709c-34.592 0-62.708-28.117-62.708-62.709S35.408 7.292 70 7.292 132.709 35.408 132.709 70 104.592 132.709 70 132.709Zm0-116.667C40.25 16.042 16.042 40.25 16.042 70S40.25 123.959 70 123.959 123.959 99.75 123.959 70c0-29.75-24.209-53.958-53.959-53.958Z", fill: "#FFF" })));

/* harmony default export */ var usd_coin = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTEyIj48ZGVmcz48bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PHJlY3Qgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxMTIiIHJ4PSIwIiBmaWxsPSIjRkZGIi8+PC9tYXNrPjwvZGVmcz48ZyBzdHlsZT0ib3BhY2l0eTouMzAwMDAwMDExOTIwOTI4OTYiIG1hc2s9InVybCgjYSkiPjxwYXRoIGQ9Ik05OC44NzUgMTAzLjI1YTQuMzI3IDQuMzI3IDAgMCAxLTMuMDkyLTEuMjgzYy0xLjY5MS0xLjY5Mi0xLjY5MS00LjQ5MiAwLTYuMTg0QzEwMi42NjcgODguOSAxMDYuNDU4IDc5Ljc0MiAxMDYuNDU4IDcwcy0zLjc5MS0xOC45LTEwLjY3NS0yNS43ODNjLTEuNjkxLTEuNjkyLTEuNjkxLTQuNDkyIDAtNi4xODQgMS42OTItMS42OTEgNC40OTItMS42OTEgNi4xODQgMCA4LjUxNiA4LjUxNyAxMy4yNDEgMTkuODkyIDEzLjI0MSAzMS45NjdzLTQuNzI1IDIzLjQ1LTEzLjI0MSAzMS45NjdhNC4zMjcgNC4zMjcgMCAwIDEtMy4wOTIgMS4yODNaTTQxLjEyNSAxMDMuMjVhNC4zMjcgNC4zMjcgMCAwIDEtMy4wOTItMS4yODNDMjkuNTE3IDkzLjQ1IDI0Ljc5MiA4Mi4wNzUgMjQuNzkyIDcwczQuNzI1LTIzLjQ1IDEzLjI0MS0zMS45NjdjMS42OTItMS42OTEgNC40OTItMS42OTEgNi4xODQgMCAxLjY5MSAxLjY5MiAxLjY5MSA0LjQ5MiAwIDYuMTg0QzM3LjMzMyA1MS4xIDMzLjU0MiA2MC4yNTggMzMuNTQyIDcwczMuNzkxIDE4LjkgMTAuNjc1IDI1Ljc4M2MxLjY5MSAxLjY5MiAxLjY5MSA0LjQ5MiAwIDYuMTg0YTQuMzI3IDQuMzI3IDAgMCAxLTMuMDkyIDEuMjgzWk03NS43MTcgOTMuNDVINjUuNDVjLTcuNDA4IDAtMTMuNDc1LTYuMjQyLTEzLjQ3NS0xMy44ODMgMC0yLjM5MiAxLjk4My00LjM3NSA0LjM3NS00LjM3NXM0LjM3NSAxLjk4MyA0LjM3NSA0LjM3NWMwIDIuODU4IDIuMSA1LjEzMyA0LjcyNSA1LjEzM2gxMC4yNjdjMS45MjUgMCAzLjU1OC0xLjc1IDMuNTU4LTMuOTA4IDAtMi43NDItLjY0Mi0zLjA5Mi0yLjUwOC0zLjczNGwtMTYuMzkyLTUuNzE2Yy01LjYtMS45ODQtOC4zNDItNS44OTItOC4zNDItMTIuMDE3IDAtNyA1LjQ4NC0xMi42NTggMTIuMzA5LTEyLjY1OGgxMC4yNjZjNy40MDkgMCAxMy40NzUgNi4yNDEgMTMuNDc1IDEzLjg4MyAwIDIuMzkyLTEuOTgzIDQuMzc1LTQuMzc1IDQuMzc1LTIuMzkxIDAtNC4zNzUtMS45ODMtNC4zNzUtNC4zNzUgMC0yLjg1OC0yLjEtNS4xMzMtNC43MjUtNS4xMzNINjQuMzQyYy0xLjkyNSAwLTMuNTU5IDEuNzUtMy41NTkgMy45MDggMCAyLjc0Mi42NDIgMy4wOTIgMi41MDkgMy43MzNsMTYuMzkxIDUuNzE3YzUuNiAxLjk4MyA4LjM0MiA1Ljg5MiA4LjM0MiAxMi4wMTctLjA1OCA2Ljk0MS01LjU0MiAxMi42NTgtMTIuMzA4IDEyLjY1OFoiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNNzAgOTguODc1Yy0yLjM5MiAwLTQuMzc1LTEuOTgzLTQuMzc1LTQuMzc1di00OWMwLTIuMzkyIDEuOTgzLTQuMzc1IDQuMzc1LTQuMzc1czQuMzc1IDEuOTgzIDQuMzc1IDQuMzc1djQ5YzAgMi4zOTItMS45ODMgNC4zNzUtNC4zNzUgNC4zNzVaIiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTcwIDEzMi43MDljLTM0LjU5MiAwLTYyLjcwOC0yOC4xMTctNjIuNzA4LTYyLjcwOVMzNS40MDggNy4yOTIgNzAgNy4yOTIgMTMyLjcwOSAzNS40MDggMTMyLjcwOSA3MCAxMDQuNTkyIDEzMi43MDkgNzAgMTMyLjcwOVptMC0xMTYuNjY3QzQwLjI1IDE2LjA0MiAxNi4wNDIgNDAuMjUgMTYuMDQyIDcwUzQwLjI1IDEyMy45NTkgNzAgMTIzLjk1OSAxMjMuOTU5IDk5Ljc1IDEyMy45NTkgNzBjMC0yOS43NS0yNC4yMDktNTMuOTU4LTUzLjk1OS01My45NThaIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/assets/dashboard/chart-2.svg
var chart_2_defProp = Object.defineProperty;
var chart_2_getOwnPropSymbols = Object.getOwnPropertySymbols;
var chart_2_hasOwnProp = Object.prototype.hasOwnProperty;
var chart_2_propIsEnum = Object.prototype.propertyIsEnumerable;
var chart_2_defNormalProp = (obj, key, value) => key in obj ? chart_2_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var chart_2_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (chart_2_hasOwnProp.call(b, prop))
      chart_2_defNormalProp(a, prop, b[prop]);
  if (chart_2_getOwnPropSymbols)
    for (var prop of chart_2_getOwnPropSymbols(b)) {
      if (chart_2_propIsEnum.call(b, prop))
        chart_2_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgChart2 = (props) => /* @__PURE__ */ React.createElement("svg", chart_2_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 137, height: 112 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("mask", { id: "chart-2_svg__a", style: {
  maskType: "alpha"
}, maskUnits: "objectBoundingBox" }, /* @__PURE__ */ React.createElement("rect", { width: 137, height: 112, rx: 0, fill: "#FFF" }))), /* @__PURE__ */ React.createElement("g", { style: {
  opacity: 0.30000001192092896
}, mask: "url(#chart-2_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M86.5 132.709h-35c-31.675 0-45.208-13.534-45.208-45.209v-35c0-31.675 13.533-45.208 45.208-45.208h35c31.675 0 45.209 13.533 45.209 45.208v35c0 31.675-13.534 45.209-45.209 45.209Zm-35-116.667c-26.892 0-36.458 9.566-36.458 36.458v35c0 26.892 9.566 36.459 36.458 36.459h35c26.892 0 36.459-9.567 36.459-36.459v-35c0-26.892-9.567-36.458-36.459-36.458h-35Z", fill: "#FFF" }), /* @__PURE__ */ React.createElement("path", { d: "M89.417 112.292c-8.867 0-16.042-7.175-16.042-16.042v-52.5c0-8.867 7.175-16.042 16.042-16.042 8.866 0 16.041 7.175 16.041 16.042v52.5c0 8.867-7.175 16.042-16.041 16.042Zm0-75.834a7.294 7.294 0 0 0-7.292 7.292v52.5a7.294 7.294 0 0 0 7.292 7.292 7.294 7.294 0 0 0 7.291-7.292v-52.5a7.294 7.294 0 0 0-7.291-7.292ZM48.583 112.292c-8.866 0-16.041-7.175-16.041-16.042V75.833c0-8.866 7.175-16.041 16.041-16.041 8.867 0 16.042 7.175 16.042 16.041V96.25c0 8.867-7.175 16.042-16.042 16.042Zm0-43.75a7.294 7.294 0 0 0-7.291 7.291V96.25a7.294 7.294 0 0 0 7.291 7.292 7.294 7.294 0 0 0 7.292-7.292V75.833a7.294 7.294 0 0 0-7.292-7.291Z", fill: "#FFF" })));

/* harmony default export */ var chart_2 = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIxMzciIGhlaWdodD0iMTEyIj48ZGVmcz48bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PHJlY3Qgd2lkdGg9IjEzNyIgaGVpZ2h0PSIxMTIiIHJ4PSIwIiBmaWxsPSIjRkZGIi8+PC9tYXNrPjwvZGVmcz48ZyBzdHlsZT0ib3BhY2l0eTouMzAwMDAwMDExOTIwOTI4OTYiIG1hc2s9InVybCgjYSkiPjxwYXRoIGQ9Ik04Ni41IDEzMi43MDloLTM1Yy0zMS42NzUgMC00NS4yMDgtMTMuNTM0LTQ1LjIwOC00NS4yMDl2LTM1YzAtMzEuNjc1IDEzLjUzMy00NS4yMDggNDUuMjA4LTQ1LjIwOGgzNWMzMS42NzUgMCA0NS4yMDkgMTMuNTMzIDQ1LjIwOSA0NS4yMDh2MzVjMCAzMS42NzUtMTMuNTM0IDQ1LjIwOS00NS4yMDkgNDUuMjA5Wm0tMzUtMTE2LjY2N2MtMjYuODkyIDAtMzYuNDU4IDkuNTY2LTM2LjQ1OCAzNi40NTh2MzVjMCAyNi44OTIgOS41NjYgMzYuNDU5IDM2LjQ1OCAzNi40NTloMzVjMjYuODkyIDAgMzYuNDU5LTkuNTY3IDM2LjQ1OS0zNi40NTl2LTM1YzAtMjYuODkyLTkuNTY3LTM2LjQ1OC0zNi40NTktMzYuNDU4aC0zNVoiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNODkuNDE3IDExMi4yOTJjLTguODY3IDAtMTYuMDQyLTcuMTc1LTE2LjA0Mi0xNi4wNDJ2LTUyLjVjMC04Ljg2NyA3LjE3NS0xNi4wNDIgMTYuMDQyLTE2LjA0MiA4Ljg2NiAwIDE2LjA0MSA3LjE3NSAxNi4wNDEgMTYuMDQydjUyLjVjMCA4Ljg2Ny03LjE3NSAxNi4wNDItMTYuMDQxIDE2LjA0MlptMC03NS44MzRhNy4yOTQgNy4yOTQgMCAwIDAtNy4yOTIgNy4yOTJ2NTIuNWE3LjI5NCA3LjI5NCAwIDAgMCA3LjI5MiA3LjI5MiA3LjI5NCA3LjI5NCAwIDAgMCA3LjI5MS03LjI5MnYtNTIuNWE3LjI5NCA3LjI5NCAwIDAgMC03LjI5MS03LjI5MlpNNDguNTgzIDExMi4yOTJjLTguODY2IDAtMTYuMDQxLTcuMTc1LTE2LjA0MS0xNi4wNDJWNzUuODMzYzAtOC44NjYgNy4xNzUtMTYuMDQxIDE2LjA0MS0xNi4wNDEgOC44NjcgMCAxNi4wNDIgNy4xNzUgMTYuMDQyIDE2LjA0MVY5Ni4yNWMwIDguODY3LTcuMTc1IDE2LjA0Mi0xNi4wNDIgMTYuMDQyWm0wLTQzLjc1YTcuMjk0IDcuMjk0IDAgMCAwLTcuMjkxIDcuMjkxVjk2LjI1YTcuMjk0IDcuMjk0IDAgMCAwIDcuMjkxIDcuMjkyIDcuMjk0IDcuMjk0IDAgMCAwIDcuMjkyLTcuMjkyVjc1LjgzM2E3LjI5NCA3LjI5NCAwIDAgMC03LjI5Mi03LjI5MVoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+");

;// CONCATENATED MODULE: ./src/assets/dashboard/global.svg
var global_defProp = Object.defineProperty;
var global_getOwnPropSymbols = Object.getOwnPropertySymbols;
var global_hasOwnProp = Object.prototype.hasOwnProperty;
var global_propIsEnum = Object.prototype.propertyIsEnumerable;
var global_defNormalProp = (obj, key, value) => key in obj ? global_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var global_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (global_hasOwnProp.call(b, prop))
      global_defNormalProp(a, prop, b[prop]);
  if (global_getOwnPropSymbols)
    for (var prop of global_getOwnPropSymbols(b)) {
      if (global_propIsEnum.call(b, prop))
        global_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgGlobal = (props) => /* @__PURE__ */ React.createElement("svg", global_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 140, height: 112 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("mask", { id: "global_svg__a", style: {
  maskType: "alpha"
}, maskUnits: "objectBoundingBox" }, /* @__PURE__ */ React.createElement("rect", { width: 140, height: 112, rx: 0, fill: "#FFF" }))), /* @__PURE__ */ React.createElement("g", { style: {
  opacity: 0.30000001192092896
}, mask: "url(#global_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M70 132.709c-34.592 0-62.708-28.117-62.708-62.709S35.408 7.292 70 7.292 132.709 35.408 132.709 70 104.592 132.709 70 132.709Zm0-116.667C40.25 16.042 16.042 40.25 16.042 70S40.25 123.959 70 123.959 123.959 99.75 123.959 70c0-29.75-24.209-53.958-53.959-53.958Z", fill: "#FFF" }), /* @__PURE__ */ React.createElement("path", { d: "M52.5 126.875h-5.833c-2.392 0-4.375-1.983-4.375-4.375a4.345 4.345 0 0 1 4.258-4.375c-9.158-31.267-9.158-64.983 0-96.25a4.345 4.345 0 0 1-4.258-4.375c0-2.392 1.983-4.375 4.375-4.375H52.5c1.4 0 2.742.7 3.558 1.808.817 1.167 1.05 2.625.584 3.967-10.967 32.958-10.967 69.242 0 102.258.466 1.342.233 2.8-.584 3.967-.816 1.05-2.158 1.75-3.558 1.75ZM87.5 126.875c-.467 0-.933-.059-1.4-.234-2.275-.758-3.558-3.266-2.742-5.54 10.967-32.96 10.967-69.243 0-102.26-.758-2.275.467-4.783 2.742-5.541 2.333-.759 4.783.466 5.542 2.741 11.608 34.767 11.608 73.034 0 107.742a4.338 4.338 0 0 1-4.142 3.092Z", fill: "#FFF" }), /* @__PURE__ */ React.createElement("path", { d: "M70 100.334c-16.275 0-32.492-2.275-48.125-6.884A4.384 4.384 0 0 1 17.5 97.71c-2.392 0-4.375-1.984-4.375-4.375V87.5c0-1.4.7-2.741 1.808-3.558 1.167-.817 2.625-1.05 3.967-.583 32.958 10.966 69.3 10.966 102.258 0 1.342-.467 2.8-.234 3.967.583 1.167.817 1.808 2.158 1.808 3.558v5.834c0 2.391-1.983 4.375-4.375 4.375a4.346 4.346 0 0 1-4.375-4.259c-15.691 4.609-31.908 6.884-48.183 6.884ZM122.5 56.875c-.467 0-.934-.058-1.4-.233-32.958-10.967-69.3-10.967-102.258 0-2.334.758-4.784-.467-5.542-2.742-.7-2.333.525-4.783 2.8-5.541 34.767-11.609 73.033-11.609 107.741 0 2.275.758 3.56 3.266 2.742 5.541-.525 1.809-2.275 2.975-4.083 2.975Z", fill: "#FFF" })));

/* harmony default export */ var global = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTEyIj48ZGVmcz48bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PHJlY3Qgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxMTIiIHJ4PSIwIiBmaWxsPSIjRkZGIi8+PC9tYXNrPjwvZGVmcz48ZyBzdHlsZT0ib3BhY2l0eTouMzAwMDAwMDExOTIwOTI4OTYiIG1hc2s9InVybCgjYSkiPjxwYXRoIGQ9Ik03MCAxMzIuNzA5Yy0zNC41OTIgMC02Mi43MDgtMjguMTE3LTYyLjcwOC02Mi43MDlTMzUuNDA4IDcuMjkyIDcwIDcuMjkyIDEzMi43MDkgMzUuNDA4IDEzMi43MDkgNzAgMTA0LjU5MiAxMzIuNzA5IDcwIDEzMi43MDlabTAtMTE2LjY2N0M0MC4yNSAxNi4wNDIgMTYuMDQyIDQwLjI1IDE2LjA0MiA3MFM0MC4yNSAxMjMuOTU5IDcwIDEyMy45NTkgMTIzLjk1OSA5OS43NSAxMjMuOTU5IDcwYzAtMjkuNzUtMjQuMjA5LTUzLjk1OC01My45NTktNTMuOTU4WiIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik01Mi41IDEyNi44NzVoLTUuODMzYy0yLjM5MiAwLTQuMzc1LTEuOTgzLTQuMzc1LTQuMzc1YTQuMzQ1IDQuMzQ1IDAgMCAxIDQuMjU4LTQuMzc1Yy05LjE1OC0zMS4yNjctOS4xNTgtNjQuOTgzIDAtOTYuMjVhNC4zNDUgNC4zNDUgMCAwIDEtNC4yNTgtNC4zNzVjMC0yLjM5MiAxLjk4My00LjM3NSA0LjM3NS00LjM3NUg1Mi41YzEuNCAwIDIuNzQyLjcgMy41NTggMS44MDguODE3IDEuMTY3IDEuMDUgMi42MjUuNTg0IDMuOTY3LTEwLjk2NyAzMi45NTgtMTAuOTY3IDY5LjI0MiAwIDEwMi4yNTguNDY2IDEuMzQyLjIzMyAyLjgtLjU4NCAzLjk2Ny0uODE2IDEuMDUtMi4xNTggMS43NS0zLjU1OCAxLjc1Wk04Ny41IDEyNi44NzVjLS40NjcgMC0uOTMzLS4wNTktMS40LS4yMzQtMi4yNzUtLjc1OC0zLjU1OC0zLjI2Ni0yLjc0Mi01LjU0IDEwLjk2Ny0zMi45NiAxMC45NjctNjkuMjQzIDAtMTAyLjI2LS43NTgtMi4yNzUuNDY3LTQuNzgzIDIuNzQyLTUuNTQxIDIuMzMzLS43NTkgNC43ODMuNDY2IDUuNTQyIDIuNzQxIDExLjYwOCAzNC43NjcgMTEuNjA4IDczLjAzNCAwIDEwNy43NDJhNC4zMzggNC4zMzggMCAwIDEtNC4xNDIgMy4wOTJaIiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTcwIDEwMC4zMzRjLTE2LjI3NSAwLTMyLjQ5Mi0yLjI3NS00OC4xMjUtNi44ODRBNC4zODQgNC4zODQgMCAwIDEgMTcuNSA5Ny43MWMtMi4zOTIgMC00LjM3NS0xLjk4NC00LjM3NS00LjM3NVY4Ny41YzAtMS40LjctMi43NDEgMS44MDgtMy41NTggMS4xNjctLjgxNyAyLjYyNS0xLjA1IDMuOTY3LS41ODMgMzIuOTU4IDEwLjk2NiA2OS4zIDEwLjk2NiAxMDIuMjU4IDAgMS4zNDItLjQ2NyAyLjgtLjIzNCAzLjk2Ny41ODMgMS4xNjcuODE3IDEuODA4IDIuMTU4IDEuODA4IDMuNTU4djUuODM0YzAgMi4zOTEtMS45ODMgNC4zNzUtNC4zNzUgNC4zNzVhNC4zNDYgNC4zNDYgMCAwIDEtNC4zNzUtNC4yNTljLTE1LjY5MSA0LjYwOS0zMS45MDggNi44ODQtNDguMTgzIDYuODg0Wk0xMjIuNSA1Ni44NzVjLS40NjcgMC0uOTM0LS4wNTgtMS40LS4yMzMtMzIuOTU4LTEwLjk2Ny02OS4zLTEwLjk2Ny0xMDIuMjU4IDAtMi4zMzQuNzU4LTQuNzg0LS40NjctNS41NDItMi43NDItLjctMi4zMzMuNTI1LTQuNzgzIDIuOC01LjU0MSAzNC43NjctMTEuNjA5IDczLjAzMy0xMS42MDkgMTA3Ljc0MSAwIDIuMjc1Ljc1OCAzLjU2IDMuMjY2IDIuNzQyIDUuNTQxLS41MjUgMS44MDktMi4yNzUgMi45NzUtNC4wODMgMi45NzVaIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==");

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ArrowUpOutlined.js + 1 modules
var ArrowUpOutlined = __webpack_require__(81716);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ArrowDownOutlined.js + 1 modules
var ArrowDownOutlined = __webpack_require__(25617);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/dashboard/metaso/CoinSummary.tsx












/* harmony default export */ var CoinSummary = (function () {
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['coinSummary'],
      queryFn: function queryFn() {
        return (0,metaso/* fetchCoinSummary */.Ub)();
      }
    }),
    data = _useQuery.data,
    isFetching = _useQuery.isFetching;
  var coinSummary = (0,react.useMemo)(function () {
    return data === null || data === void 0 ? void 0 : data.data;
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [coinSummary && coinSummary.isActive === false && /*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
      message: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
        style: {
          color: '#fff'
        },
        children: (coinSummary === null || coinSummary === void 0 ? void 0 : coinSummary.activeMetaBlockHeight) > 0 ? "Activated at block height ".concat(coinSummary === null || coinSummary === void 0 ? void 0 : coinSummary.activeMetaBlockHeight) : 'Not activated yet'
      }),
      type: "error",
      style: {
        marginBottom: 24,
        backgroundColor: '#ff4d4f'
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: [24, 24],
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        xs: 24,
        sm: 24,
        md: 8,
        lg: 8,
        xl: 8,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
          loading: isFetching,
          bordered: false,
          style: {
            backgroundImage: 'linear-gradient(141deg, #3B82F6 -5%, #9333EA 105%)'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: usd_coin,
            alt: "",
            style: {
              width: 140,
              position: 'absolute',
              bottom: 0,
              right: 24
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            style: {
              color: '#fff',
              opacity: 0.8
            },
            children: "$METASO Price"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
            level: 4,
            style: {
              color: "#fff",
              marginTop: 10
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              prefix: "$ ",
              value: coinSummary === null || coinSummary === void 0 ? void 0 : coinSummary.priceUsd
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            style: {
              color: '#fff'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              prefix: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: Number(coinSummary === null || coinSummary === void 0 ? void 0 : coinSummary.priceChange24h) >= 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowUpOutlined/* default */.Z, {
                  size: 16,
                  style: {
                    color: '#86EFAC'
                  }
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDownOutlined/* default */.Z, {
                  size: 16,
                  style: {
                    color: '#DF7348'
                  }
                })
              }),
              suffix: "%",
              value: coinSummary === null || coinSummary === void 0 ? void 0 : coinSummary.priceChange24h,
              precision: 2
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        xs: 24,
        sm: 24,
        md: 8,
        lg: 8,
        xl: 8,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
          loading: isFetching,
          bordered: false,
          style: {
            backgroundImage: 'linear-gradient(141deg, #31EACB -4%, #2763DB 105%)'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: chart_2,
            alt: "",
            style: {
              width: 140,
              position: 'absolute',
              bottom: 0,
              right: 24
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            style: {
              color: '#fff',
              opacity: 0.8
            },
            children: "Market Cap"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
            level: 4,
            style: {
              color: "#fff",
              marginTop: 10
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              prefix: "$ ",
              value: coinSummary === null || coinSummary === void 0 ? void 0 : coinSummary.marketCapUsd
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            style: {
              color: '#fff'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              prefix: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: Number(coinSummary === null || coinSummary === void 0 ? void 0 : coinSummary.marketCapChange24h) >= 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowUpOutlined/* default */.Z, {
                  size: 16,
                  style: {
                    color: '#86EFAC'
                  }
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowDownOutlined/* default */.Z, {
                  size: 16,
                  style: {
                    color: '#DF7348'
                  }
                })
              }),
              suffix: "%",
              value: coinSummary === null || coinSummary === void 0 ? void 0 : coinSummary.marketCapChange24h
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        xs: 24,
        sm: 24,
        md: 8,
        lg: 8,
        xl: 8,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
          loading: isFetching,
          bordered: false,
          style: {
            backgroundImage: 'linear-gradient(141deg, #EC4899 -5%, #DC2626 105%)'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: global,
            alt: "",
            style: {
              width: 140,
              position: 'absolute',
              bottom: 0,
              right: 24
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            style: {
              color: '#fff',
              opacity: 0.8
            },
            children: "Circulating Supply"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
            level: 4,
            style: {
              color: "#fff",
              marginTop: 10
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: coinSummary === null || coinSummary === void 0 ? void 0 : coinSummary.circulatingSupply
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
            style: {
              color: '#fff'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: (coinSummary === null || coinSummary === void 0 ? void 0 : coinSummary.circulatingSupply) / (coinSummary === null || coinSummary === void 0 ? void 0 : coinSummary.totalSupply) * 100,
              precision: 2,
              suffix: "%"
            }), " Percent of the Total Supply"]
          })]
        })
      })]
    })]
  });
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
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./src/utils/metaso.ts
var utils_metaso = __webpack_require__(48606);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/GiftOutlined.js + 1 modules
var GiftOutlined = __webpack_require__(94427);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/index.js + 8 modules
var notification = __webpack_require__(28169);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var es_modal = __webpack_require__(90789);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/index.js + 8 modules
var descriptions = __webpack_require__(97116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/decimal.js@10.5.0/node_modules/decimal.js/decimal.mjs
var decimal = __webpack_require__(25688);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(37373);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileTextOutlined.js + 1 modules
var FileTextOutlined = __webpack_require__(31178);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-list@2.6.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18._vlcniagmj4dpnzgejtkkqpzerq/node_modules/@ant-design/pro-list/es/index.js + 10 modules
var es = __webpack_require__(4328);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(16483);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/relativeTime.js
var relativeTime = __webpack_require__(97148);
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime);
;// CONCATENATED MODULE: ./src/assets/dashboard/mataso.svg
var mataso_defProp = Object.defineProperty;
var mataso_getOwnPropSymbols = Object.getOwnPropertySymbols;
var mataso_hasOwnProp = Object.prototype.hasOwnProperty;
var mataso_propIsEnum = Object.prototype.propertyIsEnumerable;
var mataso_defNormalProp = (obj, key, value) => key in obj ? mataso_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var mataso_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (mataso_hasOwnProp.call(b, prop))
      mataso_defNormalProp(a, prop, b[prop]);
  if (mataso_getOwnPropSymbols)
    for (var prop of mataso_getOwnPropSymbols(b)) {
      if (mataso_propIsEnum.call(b, prop))
        mataso_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgMataso = (props) => /* @__PURE__ */ React.createElement("svg", mataso_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 20, height: 20 }, props), /* @__PURE__ */ React.createElement("circle", { cx: 10, cy: 10, fill: "#95EBF0", r: 10 }), /* @__PURE__ */ React.createElement("path", { d: "M14.347 7.44q.825 1.332.825 2.905 0 1.122-.433 2.148-.42.99-1.183 1.753-.763.763-1.753 1.182-1.026.434-2.148.434t-2.148-.434q-.99-.419-1.753-1.182-.764-.763-1.182-1.753-.434-1.026-.434-2.148t.434-2.148q.418-.99 1.182-1.753.763-.764 1.753-1.183 1.026-.433 2.148-.433 1.266 0 2.397.546l-.348.72q-.966-.467-2.049-.467-.96 0-1.836.37-.847.359-1.5 1.012t-1.01 1.5q-.371.876-.371 1.836 0 .96.37 1.836.358.847 1.011 1.5.653.653 1.5 1.01.876.371 1.836.371.96 0 1.836-.37.847-.358 1.5-1.011.653-.653 1.011-1.5.37-.876.37-1.836 0-1.346-.704-2.483l.679-.421Z", fillRule: "evenodd", fill: "#002E33" }), /* @__PURE__ */ React.createElement("path", { d: "M8.693 15.337a4.03 4.03 0 1 0 0-8.06 4.03 4.03 0 0 0 0 8.06Zm0-7.26a3.23 3.23 0 1 1 0 6.46 3.23 3.23 0 0 1 0-6.46Z", fillRule: "evenodd", fill: "#002E33" }), /* @__PURE__ */ React.createElement("path", { d: "M10.382 13.426q.188-.494.188-1.025 0-.532-.188-1.026-.206-.537-.6-.947-.397-.411-.92-.625-.481-.198-1-.198t-1.001.198q-.522.214-.919.625-.395.41-.6.947-.189.494-.189 1.026 0 .53.19 1.025.204.537.6.947.396.411.918.625.482.198 1 .198.52 0 1.002-.198.522-.214.918-.625.395-.41.6-.947Zm-.648-1.803q.143.374.143.778 0 .403-.143.778-.155.405-.451.713-.296.306-.683.465-.356.146-.738.146t-.738-.146q-.387-.159-.683-.465-.297-.308-.451-.713-.144-.375-.144-.778 0-.404.144-.778.154-.406.451-.714.296-.306.683-.465.356-.146.738-.146t.738.146q.387.159.683.465.296.308.451.714ZM15.048 7.345q.124-.325.124-.674 0-.35-.124-.675-.136-.354-.398-.624-.264-.272-.61-.413-.322-.131-.667-.131-.345 0-.666.13-.347.142-.61.414-.263.27-.399.624-.124.325-.124.675 0 .35.124.674.136.355.398.625.264.271.61.413.322.13.667.13.345 0 .666-.13.347-.142.61-.413.263-.27.399-.625Zm-.972-1.417q.297.307.297.743t-.297.742q-.292.301-.703.301-.41 0-.703-.3-.297-.307-.297-.743t.297-.743q.292-.3.703-.3.41 0 .703.3Z", fillRule: "evenodd", fill: "#002E33" }));

/* harmony default export */ var mataso = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgZmlsbD0iIzk1RUJGMCIgcj0iMTAiLz48cGF0aCBkPSJNMTQuMzQ3IDcuNDRxLjgyNSAxLjMzMi44MjUgMi45MDUgMCAxLjEyMi0uNDMzIDIuMTQ4LS40Mi45OS0xLjE4MyAxLjc1My0uNzYzLjc2My0xLjc1MyAxLjE4Mi0xLjAyNi40MzQtMi4xNDguNDM0dC0yLjE0OC0uNDM0cS0uOTktLjQxOS0xLjc1My0xLjE4Mi0uNzY0LS43NjMtMS4xODItMS43NTMtLjQzNC0xLjAyNi0uNDM0LTIuMTQ4dC40MzQtMi4xNDhxLjQxOC0uOTkgMS4xODItMS43NTMuNzYzLS43NjQgMS43NTMtMS4xODMgMS4wMjYtLjQzMyAyLjE0OC0uNDMzIDEuMjY2IDAgMi4zOTcuNTQ2bC0uMzQ4LjcycS0uOTY2LS40NjctMi4wNDktLjQ2Ny0uOTYgMC0xLjgzNi4zNy0uODQ3LjM1OS0xLjUgMS4wMTJ0LTEuMDEgMS41cS0uMzcxLjg3Ni0uMzcxIDEuODM2IDAgLjk2LjM3IDEuODM2LjM1OC44NDcgMS4wMTEgMS41LjY1My42NTMgMS41IDEuMDEuODc2LjM3MSAxLjgzNi4zNzEuOTYgMCAxLjgzNi0uMzcuODQ3LS4zNTggMS41LTEuMDExLjY1My0uNjUzIDEuMDExLTEuNS4zNy0uODc2LjM3LTEuODM2IDAtMS4zNDYtLjcwNC0yLjQ4M2wuNjc5LS40MjFaIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDJFMzMiLz48cGF0aCBkPSJNOC42OTMgMTUuMzM3YTQuMDMgNC4wMyAwIDEgMCAwLTguMDYgNC4wMyA0LjAzIDAgMCAwIDAgOC4wNlptMC03LjI2YTMuMjMgMy4yMyAwIDEgMSAwIDYuNDYgMy4yMyAzLjIzIDAgMCAxIDAtNi40NloiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzAwMkUzMyIvPjxwYXRoIGQ9Ik0xMC4zODIgMTMuNDI2cS4xODgtLjQ5NC4xODgtMS4wMjUgMC0uNTMyLS4xODgtMS4wMjYtLjIwNi0uNTM3LS42LS45NDctLjM5Ny0uNDExLS45Mi0uNjI1LS40ODEtLjE5OC0xLS4xOTh0LTEuMDAxLjE5OHEtLjUyMi4yMTQtLjkxOS42MjUtLjM5NS40MS0uNi45NDctLjE4OS40OTQtLjE4OSAxLjAyNiAwIC41My4xOSAxLjAyNS4yMDQuNTM3LjYuOTQ3LjM5Ni40MTEuOTE4LjYyNS40ODIuMTk4IDEgLjE5OC41MiAwIDEuMDAyLS4xOTguNTIyLS4yMTQuOTE4LS42MjUuMzk1LS40MS42LS45NDdabS0uNjQ4LTEuODAzcS4xNDMuMzc0LjE0My43NzggMCAuNDAzLS4xNDMuNzc4LS4xNTUuNDA1LS40NTEuNzEzLS4yOTYuMzA2LS42ODMuNDY1LS4zNTYuMTQ2LS43MzguMTQ2dC0uNzM4LS4xNDZxLS4zODctLjE1OS0uNjgzLS40NjUtLjI5Ny0uMzA4LS40NTEtLjcxMy0uMTQ0LS4zNzUtLjE0NC0uNzc4IDAtLjQwNC4xNDQtLjc3OC4xNTQtLjQwNi40NTEtLjcxNC4yOTYtLjMwNi42ODMtLjQ2NS4zNTYtLjE0Ni43MzgtLjE0NnQuNzM4LjE0NnEuMzg3LjE1OS42ODMuNDY1LjI5Ni4zMDguNDUxLjcxNFpNMTUuMDQ4IDcuMzQ1cS4xMjQtLjMyNS4xMjQtLjY3NCAwLS4zNS0uMTI0LS42NzUtLjEzNi0uMzU0LS4zOTgtLjYyNC0uMjY0LS4yNzItLjYxLS40MTMtLjMyMi0uMTMxLS42NjctLjEzMS0uMzQ1IDAtLjY2Ni4xMy0uMzQ3LjE0Mi0uNjEuNDE0LS4yNjMuMjctLjM5OS42MjQtLjEyNC4zMjUtLjEyNC42NzUgMCAuMzUuMTI0LjY3NC4xMzYuMzU1LjM5OC42MjUuMjY0LjI3MS42MS40MTMuMzIyLjEzLjY2Ny4xMy4zNDUgMCAuNjY2LS4xMy4zNDctLjE0Mi42MS0uNDEzLjI2My0uMjcuMzk5LS42MjVabS0uOTcyLTEuNDE3cS4yOTcuMzA3LjI5Ny43NDN0LS4yOTcuNzQycS0uMjkyLjMwMS0uNzAzLjMwMS0uNDEgMC0uNzAzLS4zLS4yOTctLjMwNy0uMjk3LS43NDN0LjI5Ny0uNzQzcS4yOTItLjMuNzAzLS4zLjQxIDAgLjcwMy4zWiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDAyRTMzIi8+PC9zdmc+");

;// CONCATENATED MODULE: ./src/pages/dashboard/metaso/claimRecord.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js + 4 modules
var arrow_up_right = __webpack_require__(24683);
;// CONCATENATED MODULE: ./src/pages/dashboard/metaso/ClaimHistory.tsx












dayjs_min_default().extend((relativeTime_default()));
dayjs_min_default().locale('en');







/* harmony default export */ var ClaimHistory = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    admin = _useModel.admin;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var showModal = function showModal() {
    setIsModalOpen(true);
  };
  var handleOk = function handleOk() {
    setIsModalOpen(false);
  };
  var handleCancel = function handleCancel() {
    setIsModalOpen(false);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
      color: "primary",
      variant: "outlined",
      onClick: showModal,
      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(FileTextOutlined/* default */.Z, {})
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_modal/* default */.Z, {
      title: "Historical Records",
      open: isModalOpen,
      onOk: handleOk,
      onCancel: handleCancel,
      footer: null,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es/* ProList */.Rs, {
        search: false,
        rowKey: "txId",
        ghost: true,
        request: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
          var params,
            res,
            _args = arguments;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                _context.next = 3;
                return (0,metaso/* getClaimRecords */.Mf)({
                  cursor: ((params.current || 1) - 1) * 5,
                  size: 5,
                  host: admin.host
                });
              case 3:
                res = _context.sent;
                return _context.abrupt("return", {
                  data: res.data.list,
                  success: true,
                  total: res.data.total
                });
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })),
        pagination: {
          pageSize: 5
        },
        showActions: "hover",
        rowClassName: "claim-record",
        grid: {
          gutter: 16,
          column: 1
        },
        metas: {
          title: {
            render: function render(text, record) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                type: record.orderState === 2 ? record.confirmationState === 1 ? 'warning' : 'success' : 'danger',
                children: record.orderState === 2 ? record.confirmationState === 1 ? 'Pending' : 'Success' : 'Failed'
              });
            }
          },
          actions: {
            render: function render(text, record) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                direction: "vertical",
                align: "end",
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                    src: mataso,
                    alt: "mataso",
                    style: {
                      display: 'flex'
                    }
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                    strong: true,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: record.claimAmount,
                      suffix: " $METASO"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
                    href: "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(record.txId),
                    target: "_blank",
                    children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(arrow_up_right/* default */.Z, {
                      size: 20
                    })]
                  })]
                }), dayjs_min_default()(record.createTime).format('YYYY-MM-DD HH:mm:ss')]
              });
            }
          }
        }
      })
    })]
  });
});
;// CONCATENATED MODULE: ./src/pages/dashboard/metaso/MyArea.tsx
















/* harmony default export */ var MyArea = (function () {
  var _notification$useNoti = notification/* default */.ZP.useNotification(),
    _notification$useNoti2 = slicedToArray_default()(_notification$useNoti, 2),
    api = _notification$useNoti2[0],
    contextHolder2 = _notification$useNoti2[1];
  var _Modal$useModal = es_modal/* default */.Z.useModal(),
    _Modal$useModal2 = slicedToArray_default()(_Modal$useModal, 2),
    modal = _Modal$useModal2[0],
    contextHolder = _Modal$useModal2[1];
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    admin = _useModel.admin;
  var _useModel2 = (0,_umi_production_exports.useModel)('user'),
    feeRate = _useModel2.feeRate;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    commiting = _useState2[0],
    setCommiting = _useState2[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['coinSummary', admin === null || admin === void 0 ? void 0 : admin.host],
      enabled: Boolean(admin === null || admin === void 0 ? void 0 : admin.host),
      queryFn: function queryFn() {
        return (0,metaso/* fetchAreaInfo */.Y)({
          host: admin.host
        });
      }
    }),
    data = _useQuery.data,
    isFetching = _useQuery.isFetching,
    refetch = _useQuery.refetch;
  var areaInfo = (0,react.useMemo)(function () {
    return data === null || data === void 0 ? void 0 : data.data;
  }, [data]);
  var successNotice = function successNotice(txid) {
    var key = "open".concat(Date.now());
    var btn = /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "primary",
        size: "small",
        onClick: function onClick() {
          var link = "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(txid);
          window.open(link, "_blank");
        },
        children: "open"
      })
    });
    api.open({
      message: 'Claim Success',
      description: txid,
      btn: btn,
      key: key
    });
  };
  var handleClaim = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var address, _yield$claimPre, code, msg, order, _yield$buildClaimPsbt, fee, confirmed, _yield$buildClaimPsbt2, rawTx, commitRes;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setCommiting(true);
            _context.prev = 1;
            if (areaInfo) {
              _context.next = 4;
              break;
            }
            throw new Error('No data');
          case 4:
            _context.next = 6;
            return window.metaidwallet.btc.getAddress();
          case 6:
            address = _context.sent;
            if (!(address !== (admin === null || admin === void 0 ? void 0 : admin.host))) {
              _context.next = 9;
              break;
            }
            throw new Error('Address not match');
          case 9:
            _context.next = 11;
            return (0,metaso/* claimPre */.iw)({
              receiveAddress: admin.host,
              networkFeeRate: feeRate,
              claimAmount: areaInfo.pendingReward
            });
          case 11:
            _yield$claimPre = _context.sent;
            code = _yield$claimPre.code;
            msg = _yield$claimPre.message;
            order = _yield$claimPre.data;
            if (!(code !== 0)) {
              _context.next = 17;
              break;
            }
            throw new Error(msg);
          case 17:
            _context.next = 19;
            return (0,utils_metaso/* buildClaimPsbt */.Lc)(order, config/* curNetwork */.eM, address, feeRate, false, false);
          case 19:
            _yield$buildClaimPsbt = _context.sent;
            fee = _yield$buildClaimPsbt.fee;
            _context.next = 23;
            return modal.confirm({
              title: 'Trade Confirm',
              content: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 16,
                  textAlign: 'left'
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(descriptions/* default */.Z, {
                  column: 1,
                  items: [{
                    label: 'Amount',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: order.claimAmount,
                      suffix: " $METASO"
                    })
                  }, {
                    label: 'Receive Address',
                    children: address
                  }, {
                    label: 'Gas Fee',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: new decimal/* default */.Z(fee).add(order.minerGas).toFixed(8),
                      suffix: " SAT"
                    })
                  }, {
                    label: 'Fee Rate',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: feeRate,
                      suffix: " sat/vB"
                    })
                  }]
                })
              })
            });
          case 23:
            confirmed = _context.sent;
            if (confirmed) {
              _context.next = 26;
              break;
            }
            throw new Error('canceled');
          case 26:
            _context.next = 28;
            return (0,utils_metaso/* buildClaimPsbt */.Lc)(order, config/* curNetwork */.eM, address, feeRate);
          case 28:
            _yield$buildClaimPsbt2 = _context.sent;
            rawTx = _yield$buildClaimPsbt2.rawTx;
            _context.next = 32;
            return (0,metaso/* claimCommit */.LQ)({
              orderId: order.orderId,
              commitTxOutIndex: 0,
              commitTxRaw: rawTx
            });
          case 32:
            commitRes = _context.sent;
            if (!(commitRes.code !== 0)) {
              _context.next = 35;
              break;
            }
            throw new Error(commitRes.message);
          case 35:
            successNotice(commitRes.data.commitTxId);
            _context.next = 38;
            return refetch();
          case 38:
            _context.next = 43;
            break;
          case 40:
            _context.prev = 40;
            _context.t0 = _context["catch"](1);
            if (_context.t0.message === 'Insufficient funds to reach the target amount') {
              message/* default */.ZP.error('Insufficient BTC for network fee');
            } else {
              message/* default */.ZP.error(_context.t0.message);
            }
          case 43:
            setCommiting(false);
          case 44:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 40]]);
    }));
    return function handleClaim() {
      return _ref.apply(this, arguments);
    };
  }();
  var items = [{
    key: '1',
    label: 'Total Acquisition Quantity',
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
      wrapper: true,
      style: {
        fontSize: 24,
        fontWeight: 'bold'
      },
      value: areaInfo === null || areaInfo === void 0 ? void 0 : areaInfo.totalAcquisitionReward,
      suffix: " $METASO"
    })
  }, {
    key: '2',
    label: 'Current Expected Metablock Rewards',
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
      wrapper: true,
      style: {
        fontSize: 24,
        fontWeight: 'bold'
      },
      value: areaInfo === null || areaInfo === void 0 ? void 0 : areaInfo.currentExpectedMetaBlockReward,
      suffix: " $METASO"
    })
  }, {
    key: '3',
    label: 'Pending Rewards',
    rowSpan: 2,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      direction: "vertical",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
        wrapper: true,
        style: {
          fontSize: 24,
          fontWeight: 'bold',
          color: '#2563EB'
        },
        value: areaInfo === null || areaInfo === void 0 ? void 0 : areaInfo.pendingReward,
        suffix: " $METASO"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          loading: commiting,
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(GiftOutlined/* default */.Z, {}),
          disabled: (areaInfo === null || areaInfo === void 0 ? void 0 : areaInfo.pendingReward) <= 0,
          onClick: handleClaim,
          children: "Claim"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ClaimHistory, {})]
      })]
    })
  }, {
    key: '4',
    label: 'Last Metablock Rewards',
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
      wrapper: true,
      style: {
        fontSize: 24,
        fontWeight: 'bold'
      },
      value: areaInfo === null || areaInfo === void 0 ? void 0 : areaInfo.lastMetaBlockReward,
      suffix: " $METASO"
    })
  }, {
    key: '5',
    label: "Last Metablock's Share ",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
      wrapper: true,
      style: {
        fontSize: 24,
        fontWeight: 'bold'
      },
      value: areaInfo === null || areaInfo === void 0 ? void 0 : areaInfo.lastMetaBlockShare,
      suffix: " %"
    })
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
      level: 4,
      children: "My Area"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      loading: isFetching,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(descriptions/* default */.Z, {
        layout: "vertical",
        items: items
      })
    }), contextHolder, contextHolder2]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/progress/index.js + 6 modules
var progress = __webpack_require__(67732);
;// CONCATENATED MODULE: ./src/pages/dashboard/metaso/MetaBlockArea.tsx








/* harmony default export */ var MetaBlockArea = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    admin = _useModel.admin;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['metablockArea', admin === null || admin === void 0 ? void 0 : admin.host],
      enabled: Boolean(admin === null || admin === void 0 ? void 0 : admin.host),
      queryFn: function queryFn() {
        return (0,metaso/* fetchMetaBlockAreaInfo */.rA)({
          host: admin.host
        });
      }
    }),
    data = _useQuery.data,
    isFetching = _useQuery.isFetching;
  var areaInfo = (0,react.useMemo)(function () {
    return data === null || data === void 0 ? void 0 : data.data;
  }, [data]);
  var items = [{
    key: '1',
    label: 'Current TX Total',
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
      wrapper: true,
      style: {
        fontSize: 24,
        fontWeight: 'bold'
      },
      value: areaInfo === null || areaInfo === void 0 ? void 0 : areaInfo.currentTxCount,
      suffix: ""
    })
  }, {
    key: '2',
    label: 'My ΔNDV/ ΔtMDV',
    span: 2,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
        wrapper: true,
        style: {
          fontSize: 24,
          fontWeight: 'bold'
        },
        value: areaInfo === null || areaInfo === void 0 ? void 0 : areaInfo.ownMdvDeltaValueStr
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
        type: "secondary",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
          wrapper: true,
          style: {
            fontSize: 24
          },
          prefix: "/",
          value: areaInfo === null || areaInfo === void 0 ? void 0 : areaInfo.currentMdvDeltaValueStr
        })
      })]
    })
  }, {
    key: '3',
    label: 'Block Progress Bar ',
    span: 3,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(progress/* default */.Z, {
        percent: areaInfo !== null && areaInfo !== void 0 && areaInfo.progressBlockTotal ? areaInfo.progressBlockCount / areaInfo.progressBlockTotal * 100 : 0,
        showInfo: false
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          whiteSpace: 'nowrap'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
          wrapper: true,
          style: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#2563EB'
          },
          value: areaInfo === null || areaInfo === void 0 ? void 0 : areaInfo.progressBlockCount,
          suffix: " Blocks"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          type: "secondary",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
            wrapper: true,
            style: {
              fontSize: 16
            },
            prefix: "/ ",
            value: areaInfo === null || areaInfo === void 0 ? void 0 : areaInfo.progressBlockTotal,
            suffix: " Blocks"
          })
        })]
      })]
    })
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
      level: 4,
      children: "MetaBlock Area"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      loading: isFetching,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(descriptions/* default */.Z, {
        layout: "vertical",
        items: items
      })
    })]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(10443);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/index.js + 33 modules
var table = __webpack_require__(98421);
;// CONCATENATED MODULE: ./src/pages/dashboard/metaso/BrowseBlocks.tsx







dayjs_min_default().extend((relativeTime_default()));
dayjs_min_default().locale('en');




/* harmony default export */ var BrowseBlocks = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    admin = _useModel.admin;
  var columns = [{
    title: 'Height',
    dataIndex: 'metaBlockHeight',
    key: 'metaBlockHeight'
  }, {
    title: 'Timestamp (utc)',
    dataIndex: 'metaBlockTime',
    key: 'metaBlockTime',
    render: function render(text) {
      return dayjs_min_default()(text * 1000).format('YYYY-MM-DD HH:mm:ss');
    }
  }, {
    title: 'Age',
    dataIndex: 'metaBlockTime',
    key: 'metaBlockTimeAge',
    render: function render(text) {
      return dayjs_min_default()().to(dayjs_min_default()(text * 1000));
    }
  }, {
    title: 'tMDV',
    dataIndex: 'mdvValueStr',
    key: 'mdvValue',
    render: function render(text) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
        value: text
      });
    }
  }, {
    title: 'ΔtMDV',
    dataIndex: 'mdvDeltaValueStr',
    key: 'mdvDeltaValue',
    render: function render(text) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
        value: text
      });
    }
  }, {
    title: 'My NDV',
    dataIndex: 'hostMdvValueStr',
    key: 'hostMdvValueStr',
    render: function render(text) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
        value: text
      });
    }
  }, {
    title: 'My ΔNDV',
    dataIndex: 'hostMdvDeltaValueStr',
    key: 'hostMdvDeltaValueStr',
    render: function render(text) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
        value: text
      });
    }
  }];
  var _useState = (0,react.useState)(0),
    _useState2 = slicedToArray_default()(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      enabled: Boolean(admin === null || admin === void 0 ? void 0 : admin.host),
      queryKey: ['metablockList', page, admin === null || admin === void 0 ? void 0 : admin.host],
      queryFn: function queryFn() {
        return (0,metaso/* fetchMetaBlockList */.tc)({
          cursor: page * 5,
          size: 5,
          host: admin.host
        });
      }
    }),
    isLoading = _useQuery.isLoading,
    isError = _useQuery.isError,
    error = _useQuery.error,
    data = _useQuery.data,
    isFetching = _useQuery.isFetching,
    isPreviousData = _useQuery.isPreviousData;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
      level: 4,
      children: "Browse Blocks"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
      theme: {
        components: {
          Table: {
            headerBg: '#2563EB',
            headerColor: '#fff'
          }
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
        columns: columns,
        dataSource: data === null || data === void 0 ? void 0 : data.data.list,
        loading: isFetching,
        pagination: {
          current: page + 1,
          onChange: function onChange(page) {
            setPage(page - 1);
          },
          total: data === null || data === void 0 ? void 0 : data.data.total,
          pageSize: 5
        }
      })
    })]
  });
});
;// CONCATENATED MODULE: ./src/pages/dashboard/metaso/index.tsx







/* harmony default export */ var dashboard_metaso = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CoinSummary, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(MyArea, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(MetaBlockArea, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(BrowseBlocks, {})]
  });
});

/***/ }),

/***/ 48606:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F_: function() { return /* binding */ DUST_SIZE; },
/* harmony export */   Lc: function() { return /* binding */ buildClaimPsbt; },
/* harmony export */   df: function() { return /* binding */ SIGHASH_ALL; }
/* harmony export */ });
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31759);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(335);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10642);
/* harmony import */ var _bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48507);
/* harmony import */ var _psbtBuild__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49105);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72898);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78488);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25688);
/* provided dependency */ var Buffer = __webpack_require__(36379)["Buffer"];











var SIGHASH_ALL = 0x01;
var DUST_SIZE = 546;
var _buildClaimPsbt = /*#__PURE__*/function () {
  var _ref = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default()().mark(function _callee(buildClaimPsbtParams, selectedUTXOs, change, needChange, signPsbt) {
    var addressType, address, publicKey, script, network, receiveAddress, totalAmount, minerFee, psbt, _iterator, _step, utxo, psbtInput, _signed, signed;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          addressType = buildClaimPsbtParams.addressType, address = buildClaimPsbtParams.address, publicKey = buildClaimPsbtParams.publicKey, script = buildClaimPsbtParams.script, network = buildClaimPsbtParams.network, receiveAddress = buildClaimPsbtParams.receiveAddress, totalAmount = buildClaimPsbtParams.totalAmount, minerFee = buildClaimPsbtParams.minerFee;
          psbt = new bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_5__/* .Psbt */ ._B({
            network: _config__WEBPACK_IMPORTED_MODULE_9__/* .TYPED_NETWORK */ .vM
          });
          _iterator = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(selectedUTXOs);
          _context.prev = 3;
          _iterator.s();
        case 5:
          if ((_step = _iterator.n()).done) {
            _context.next = 14;
            break;
          }
          utxo = _step.value;
          _context.next = 9;
          return (0,_psbtBuild__WEBPACK_IMPORTED_MODULE_7__/* .createPsbtInput */ .o2)({
            utxo: utxo,
            addressType: addressType,
            publicKey: publicKey,
            script: script,
            network: network
          });
        case 9:
          psbtInput = _context.sent;
          psbtInput.sighashType = SIGHASH_ALL;
          psbt.addInput(psbtInput);
        case 12:
          _context.next = 5;
          break;
        case 14:
          _context.next = 19;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](3);
          _iterator.e(_context.t0);
        case 19:
          _context.prev = 19;
          _iterator.f();
          return _context.finish(19);
        case 22:
          psbt.addOutput({
            address: receiveAddress,
            value: BigInt(minerFee)
          });
          if (needChange || change.gt(DUST_SIZE)) {
            psbt.addOutput({
              address: address,
              value: BigInt(change.toNumber())
            });
          }
          if (signPsbt) {
            _context.next = 26;
            break;
          }
          return _context.abrupt("return", psbt);
        case 26:
          _context.next = 28;
          return window.metaidwallet.btc.signPsbt({
            psbtHex: psbt.toHex(),
            options: {
              autoFinalized: true
            }
          });
        case 28:
          _signed = _context.sent;
          if (!(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_typeof_js__WEBPACK_IMPORTED_MODULE_2___default()(_signed) === "object")) {
            _context.next = 33;
            break;
          }
          if (!(_signed.status === "canceled")) {
            _context.next = 32;
            break;
          }
          throw new Error("canceled");
        case 32:
          throw new Error("");
        case 33:
          signed = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_5__/* .Psbt */ ._B.fromHex(_signed);
          return _context.abrupt("return", signed);
        case 35:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 16, 19, 22]]);
  }));
  return function _buildClaimPsbt(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
var buildClaimPsbt = /*#__PURE__*/function () {
  var _ref2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default()().mark(function _callee2(order, network, address, feeRate) {
    var extract,
      signPsbt,
      minerFee,
      utxos,
      addressType,
      publicKey,
      script,
      ret,
      _args2 = arguments;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          extract = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : true;
          signPsbt = _args2.length > 5 && _args2[5] !== undefined ? _args2[5] : true;
          (0,bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_5__/* .initEccLib */ .Wi)(_bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_6__);
          minerFee = order.minerFee;
          _context2.next = 6;
          return (0,_psbtBuild__WEBPACK_IMPORTED_MODULE_7__/* .getUtxos */ .t4)(address, network);
        case 6:
          utxos = _context2.sent.sort(function (a, b) {
            return b.satoshi - a.satoshi;
          });
          addressType = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .determineAddressInfo */ .uY)(address).toUpperCase();
          _context2.next = 10;
          return window.metaidwallet.btc.getPublicKey();
        case 10:
          publicKey = _context2.sent;
          script = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_5__/* .address.toOutputScript */ .Lk.toOutputScript(address, _config__WEBPACK_IMPORTED_MODULE_9__/* .TYPED_NETWORK */ .vM);
          _context2.next = 14;
          return (0,_psbtBuild__WEBPACK_IMPORTED_MODULE_7__/* .buildTx */ .lE)(utxos, new decimal_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z(minerFee), feeRate, _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({
            addressType: addressType,
            address: address,
            publicKey: Buffer.from(publicKey, "hex"),
            script: script,
            network: network
          }, order), address, _buildClaimPsbt, extract, signPsbt);
        case 14:
          ret = _context2.sent;
          return _context2.abrupt("return", ret);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function buildClaimPsbt(_x6, _x7, _x8, _x9) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ 49105:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EG: function() { return /* binding */ fillInternalKey; },
/* harmony export */   HL: function() { return /* binding */ getPkScriprt; },
/* harmony export */   L7: function() { return /* binding */ calcFee; },
/* harmony export */   eo: function() { return /* binding */ getMvcBalance; },
/* harmony export */   lE: function() { return /* binding */ buildTx; },
/* harmony export */   o2: function() { return /* binding */ createPsbtInput; },
/* harmony export */   t4: function() { return /* binding */ getUtxos; },
/* harmony export */   xd: function() { return /* binding */ getUtxoBalance; }
/* harmony export */ });
/* unused harmony exports addUtxoSafe, toXOnly, updateInputKey, checkWalletAddress */
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(335);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25688);
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10642);
/* harmony import */ var _mempool_mempool_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4940);
/* harmony import */ var _mempool_mempool_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mempool_mempool_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitcoinjs_lib_src_psbt_bip371__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5465);
/* harmony import */ var _bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48507);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36379);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72898);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78488);











function toUint8Array(obj) {
  return new Uint8Array(Object.values(obj));
}
var TX_EMPTY_SIZE = 4 + 1 + 1 + 4;
var TX_INPUT_BASE = 32 + 4 + 1 + 4; // 41
var TX_INPUT_PUBKEYHASH = 107;
var TX_INPUT_SEGWIT = 27;
var TX_INPUT_TAPROOT = 17; // round up 16.5 bytes
var TX_OUTPUT_BASE = 8 + 1;
var TX_OUTPUT_PUBKEYHASH = 25;
var TX_OUTPUT_SCRIPTHASH = 23;
var TX_OUTPUT_SEGWIT = 22;
var TX_OUTPUT_SEGWIT_SCRIPTHASH = 34;
var TX_INPUT_SCRIPT_BASE = 0;
function selectUTXOs(utxos, targetAmount) {
  var totalAmount = new decimal_js__WEBPACK_IMPORTED_MODULE_3__/* .Decimal */ .t(0);
  var selectedUtxos = [];
  var _iterator = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(utxos),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var utxo = _step.value;
      selectedUtxos.push(utxo);
      totalAmount = totalAmount.add(utxo.satoshis);
      if (totalAmount.gte(targetAmount)) {
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (totalAmount.lt(targetAmount)) {
    throw new Error("Insufficient funds to reach the target amount");
  }
  return selectedUtxos;
}
function getTotalSatoshi(utxos) {
  return utxos.reduce(function (total, utxo) {
    return total.add(utxo.satoshis);
  }, new decimal_js__WEBPACK_IMPORTED_MODULE_3__/* .Decimal */ .t(0));
}
function calculateEstimatedFee(psbt, feeRate) {
  var tx = psbt.extractTransaction();
  var size = tx.virtualSize();
  return new Decimal(size).mul(feeRate);
}
function inputBytes(input) {
  // todo: script length

  if ((0,bitcoinjs_lib_src_psbt_bip371__WEBPACK_IMPORTED_MODULE_6__/* .isTaprootInput */ .xm)(input)) {
    return TX_INPUT_BASE + TX_INPUT_TAPROOT;
  }
  if (input.redeemScript) return TX_INPUT_BASE + input.redeemScript.length;
  if (input.nonWitnessUtxo) return TX_INPUT_BASE + TX_INPUT_PUBKEYHASH;
  if (input.witnessUtxo) return TX_INPUT_BASE + TX_INPUT_SEGWIT;
  return TX_INPUT_BASE + TX_INPUT_PUBKEYHASH;
}
function outputBytes(output) {
  var _output$address, _output$address2, _output$address3, _output$address4, _output$address5;
  // if output is op-return, use it's buffer size

  return TX_OUTPUT_BASE + (output.script ? output.script.length : (_output$address = output.address) !== null && _output$address !== void 0 && _output$address.startsWith("bc1") || (_output$address2 = output.address) !== null && _output$address2 !== void 0 && _output$address2.startsWith("tb1") ? ((_output$address3 = output.address) === null || _output$address3 === void 0 ? void 0 : _output$address3.length) === 42 // TODO: looks like something wrong here
  ? TX_OUTPUT_SEGWIT : TX_OUTPUT_SEGWIT_SCRIPTHASH : (_output$address4 = output.address) !== null && _output$address4 !== void 0 && _output$address4.startsWith("3") || (_output$address5 = output.address) !== null && _output$address5 !== void 0 && _output$address5.startsWith("2") ? TX_OUTPUT_SCRIPTHASH : TX_OUTPUT_PUBKEYHASH);
}
function transactionBytes(inputs, outputs) {
  var inputsSize = inputs.reduce(function (a, x) {
    return a + inputBytes(x);
  }, 0);
  var outputsSize = outputs.reduce(function (a, x, index) {
    return a + outputBytes(x);
  }, 0);
  console.log({
    inputsSize: inputsSize,
    outputsSize: outputsSize,
    TX_EMPTY_SIZE: TX_EMPTY_SIZE
  });
  return TX_EMPTY_SIZE + inputsSize + outputsSize;
}
function calcFee(psbt, feeRate) {
  var inputs = psbt.data.inputs;
  var outputs = psbt.txOutputs;
  var bytes = transactionBytes(inputs, outputs);
  console.log({
    bytes: bytes
  });
  return new decimal_js__WEBPACK_IMPORTED_MODULE_3__/* .Decimal */ .t(bytes).mul(feeRate);
}
function buildTx(_x, _x2, _x3, _x4, _x5, _x6) {
  return _buildTx.apply(this, arguments);
}
function _buildTx() {
  _buildTx = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee6(utxos, amount, feeRate, buildPsbtParams, address, buildPsbt) {
    var extract,
      signPsbt,
      selectedUTXOs,
      total,
      psbt,
      estimatedFee,
      _args6 = arguments;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          extract = _args6.length > 6 && _args6[6] !== undefined ? _args6[6] : false;
          signPsbt = _args6.length > 7 && _args6[7] !== undefined ? _args6[7] : true;
          selectedUTXOs = selectUTXOs(utxos, amount);
          total = getTotalSatoshi(selectedUTXOs);
          _context6.next = 6;
          return buildPsbt(buildPsbtParams, selectedUTXOs, total.minus(amount), true, false);
        case 6:
          psbt = _context6.sent;
          estimatedFee = calcFee(psbt, feeRate);
        case 8:
          if (!total.lt(amount.add(estimatedFee))) {
            _context6.next = 19;
            break;
          }
          if (!(selectedUTXOs.length === utxos.length)) {
            _context6.next = 11;
            break;
          }
          throw new Error("Insufficient funds");
        case 11:
          selectedUTXOs = selectUTXOs(utxos, amount.add(estimatedFee));
          total = getTotalSatoshi(selectedUTXOs);
          _context6.next = 15;
          return buildPsbt(buildPsbtParams, selectedUTXOs, total.minus(amount.add(estimatedFee)), true, false);
        case 15:
          psbt = _context6.sent;
          estimatedFee = calcFee(psbt, feeRate);
          _context6.next = 8;
          break;
        case 19:
          _context6.next = 21;
          return buildPsbt(buildPsbtParams, selectedUTXOs, total.minus(amount.add(estimatedFee)), false, signPsbt);
        case 21:
          psbt = _context6.sent;
          console.log(psbt, "psbt in buildTx");
          return _context6.abrupt("return", {
            psbt: psbt,
            fee: total.minus(psbt.txOutputs.reduce(function (acc, cur) {
              return acc + Number(cur.value);
            }, 0)).toString(),
            txId: !extract ? "" : psbt.extractTransaction().getId(),
            rawTx: !extract ? psbt.toHex() : psbt.extractTransaction().toHex(),
            txInputs: selectedUTXOs.map(function (utxo) {
              return {
                address: address,
                value: utxo.satoshis
              };
            }),
            txOutputs: psbt.txOutputs.map(function (out) {
              return {
                address: out.address || "",
                value: out.value
              };
            })
          });
        case 24:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _buildTx.apply(this, arguments);
}
function createPsbtInput(_x7) {
  return _createPsbtInput.apply(this, arguments);
}
function _createPsbtInput() {
  _createPsbtInput = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee7(_ref) {
    var utxo, addressType, publicKey, script, network, payInput, tx, mempoolReturn, rawTx, _tx, _payments$p2sh, redeem;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          utxo = _ref.utxo, addressType = _ref.addressType, publicKey = _ref.publicKey, script = _ref.script, network = _ref.network;
          network = network || _config__WEBPACK_IMPORTED_MODULE_10__/* .curNetwork */ .eM;
          payInput = {
            hash: utxo.txId,
            index: utxo.vout,
            sequence: 0xffffffff // These are defaults. This line is not needed.
          };
          if (["P2TR"].includes(addressType)) {
            payInput["tapInternalKey"] = publicKey.subarray(1);
            payInput["witnessUtxo"] = {
              value: BigInt(utxo.satoshi),
              script: toUint8Array(script)
            };
          }
          if (["P2WPKH"].includes(addressType)) {
            payInput["witnessUtxo"] = {
              value: BigInt(utxo.satoshi),
              script: toUint8Array(script)
            };
          }
          if (!["P2PKH"].includes(addressType)) {
            _context7.next = 17;
            break;
          }
          if (!utxo.rawTx) {
            _context7.next = 11;
            break;
          }
          tx = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .Transaction */ .YW.fromHex(utxo.rawTx);
          payInput["nonWitnessUtxo"] = tx.toBuffer();
          _context7.next = 17;
          break;
        case 11:
          mempoolReturn = _mempool_mempool_js__WEBPACK_IMPORTED_MODULE_5___default()({
            hostname: "mempool.space",
            network: _config__WEBPACK_IMPORTED_MODULE_10__/* .curNetwork */ .eM === "testnet" ? "testnet" : "main"
          });
          _context7.next = 14;
          return mempoolReturn.bitcoin.transactions.getTxHex({
            txid: utxo.txId
          });
        case 14:
          rawTx = _context7.sent;
          _tx = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .Transaction */ .YW.fromHex(rawTx);
          payInput["nonWitnessUtxo"] = _tx.toBuffer();
        case 17:
          if (!["P2SH"].includes(addressType)) {
            _context7.next = 23;
            break;
          }
          _payments$p2sh = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .payments.p2sh */ .PP.p2sh({
            redeem: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .payments.p2wpkh */ .PP.p2wpkh({
              pubkey: publicKey,
              network: _config__WEBPACK_IMPORTED_MODULE_10__/* .TYPED_NETWORK */ .vM
            }),
            network: _config__WEBPACK_IMPORTED_MODULE_10__/* .TYPED_NETWORK */ .vM
          }), redeem = _payments$p2sh.redeem;
          if (redeem) {
            _context7.next = 21;
            break;
          }
          throw new Error("redeemScript");
        case 21:
          payInput.redeemScript = redeem.output;
          payInput["witnessUtxo"] = {
            value: BigInt(utxo.satoshi),
            script: toUint8Array(script)
          }; // { value: utxo.satoshi, script };
        case 23:
          return _context7.abrupt("return", payInput);
        case 24:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _createPsbtInput.apply(this, arguments);
}
function fillInternalKey(_x8) {
  return _fillInternalKey.apply(this, arguments);
}
function _fillInternalKey() {
  _fillInternalKey = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee8(_ref2) {
    var publicKey, addressType, payInput, _payments$p2sh2, redeem;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          publicKey = _ref2.publicKey, addressType = _ref2.addressType;
          payInput = {};
          if (["P2TR"].includes(addressType)) {
            payInput["tapInternalKey"] = publicKey.subarray(1);
          }
          if (!["P2SH"].includes(addressType)) {
            _context8.next = 9;
            break;
          }
          console.log("input.tapInternalKey");
          _payments$p2sh2 = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .payments.p2sh */ .PP.p2sh({
            redeem: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .payments.p2wpkh */ .PP.p2wpkh({
              pubkey: publicKey,
              network: _config__WEBPACK_IMPORTED_MODULE_10__/* .TYPED_NETWORK */ .vM
            }),
            network: _config__WEBPACK_IMPORTED_MODULE_10__/* .TYPED_NETWORK */ .vM
          }), redeem = _payments$p2sh2.redeem;
          if (redeem) {
            _context8.next = 8;
            break;
          }
          throw new Error("redeemScript");
        case 8:
          payInput.redeemScript = redeem.output;
        case 9:
          return _context8.abrupt("return", payInput);
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _fillInternalKey.apply(this, arguments);
}
var getUtxos = /*#__PURE__*/function () {
  var _ref3 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(address, network) {
    var addressType, utxos, i, _utxos$i, txId, vout, ret;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // const mempoolReturn = mempoolJS({
          //   hostname: 'mempool.space',
          //   network: network === 'mainnet' ? 'main' : 'testnet',
          // })
          // const rawUtxoList = await mempoolReturn.bitcoin.addresses.getAddressTxsUtxo({
          //   address,
          // })
          // const utxos: API.UTXO[] = []
          // for (const utxoElement of rawUtxoList) {
          //   if (utxoElement.value > 1000) {
          //     utxos.push({
          //       txId: utxoElement.txid,
          //       vout: utxoElement.vout,
          //       satoshi: utxoElement.value,
          //       confirmed: utxoElement.status.confirmed,
          //       inscriptions: null,
          //       outputIndex: utxoElement.vout,
          //       satoshis: utxoElement.value,
          //     })
          //   }
          // }
          // return utxos
          addressType = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .determineAddressInfo */ .uY)(address).toUpperCase();
          _context.next = 3;
          return window.metaidwallet.btc.getUtxos({
            needRawTx: ["P2PKH"].includes(addressType),
            useUnconfirmed: true
          });
        case 3:
          utxos = _context.sent;
          i = 0;
        case 5:
          if (!(i < utxos.length)) {
            _context.next = 15;
            break;
          }
          _utxos$i = utxos[i], txId = _utxos$i.txId, vout = _utxos$i.vout;
          if (utxos[i].confirmed) {
            _context.next = 12;
            break;
          }
          _context.next = 10;
          return window.metaidwallet.btc.addSafeUtxo({
            address: address,
            unspentOutput: "".concat(txId, ":").concat(vout)
          });
        case 10:
          ret = _context.sent;
          console.log(ret, "addSafeUtxo");
        case 12:
          i++;
          _context.next = 5;
          break;
        case 15:
          return _context.abrupt("return", utxos);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getUtxos(_x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}();
var addUtxoSafe = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(address, utxos) {
    var i, _utxos$i2, txId, vout, ret;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log(utxos, "addUtxoSafe");
          i = 0;
        case 2:
          if (!(i < utxos.length)) {
            _context2.next = 17;
            break;
          }
          _context2.prev = 3;
          _utxos$i2 = utxos[i], txId = _utxos$i2.txId, vout = _utxos$i2.vout;
          _context2.next = 7;
          return window.metaidwallet.btc.addSafeUtxo({
            address: address,
            unspentOutput: "".concat(txId, ":").concat(vout)
          });
        case 7:
          ret = _context2.sent;
          console.log(ret, "addUtxoSafe");
          _context2.next = 14;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](3);
          console.log(_context2.t0);
        case 14:
          i++;
          _context2.next = 2;
          break;
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 11]]);
  }));
  return function addUtxoSafe(_x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}()));
function toXOnly(pubKey) {
  return pubKey.length === 32 ? pubKey : pubKey.slice(1, 33);
}
function updateInputKey(_x13) {
  return _updateInputKey.apply(this, arguments);
}
function _updateInputKey() {
  _updateInputKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref5) {
    var publicKey, addressType, network, payInput, tapInternalKey, _payments$p2sh3, redeem;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          publicKey = _ref5.publicKey, addressType = _ref5.addressType, network = _ref5.network;
          payInput = {};
          if (["P2TR"].includes(addressType)) {
            tapInternalKey = toXOnly(publicKey);
            payInput["tapInternalKey"] = tapInternalKey;
          }
          if (!["P2SH"].includes(addressType)) {
            _context9.next = 9;
            break;
          }
          console.log("input.tapInternalKey");
          _payments$p2sh3 = payments.p2sh({
            redeem: payments.p2wpkh({
              pubkey: publicKey,
              network: TYPED_NETWORK
            }),
            network: TYPED_NETWORK
          }), redeem = _payments$p2sh3.redeem;
          if (redeem) {
            _context9.next = 8;
            break;
          }
          throw new Error("redeemScript");
        case 8:
          payInput.redeemScript = redeem.output;
        case 9:
          return _context9.abrupt("return", payInput);
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _updateInputKey.apply(this, arguments);
}
var getUtxoBalance = /*#__PURE__*/function () {
  var _ref6 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee3(address) {
    var utxos;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (address) {
            _context3.next = 4;
            break;
          }
          _context3.next = 3;
          return window.metaidwallet.btc.getAddress();
        case 3:
          address = _context3.sent;
        case 4:
          _context3.next = 6;
          return getUtxos(address);
        case 6:
          utxos = _context3.sent;
          return _context3.abrupt("return", utxos.reduce(function (acc, cur) {
            return acc + cur.satoshis;
          }, 0));
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getUtxoBalance(_x14) {
    return _ref6.apply(this, arguments);
  };
}();
var getMvcBalance = /*#__PURE__*/function () {
  var _ref7 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee4(address) {
    var utxos;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (address) {
            _context4.next = 4;
            break;
          }
          _context4.next = 3;
          return window.metaidwallet.getAddress();
        case 3:
          address = _context4.sent;
        case 4:
          if (address) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", 0);
        case 6:
          _context4.next = 8;
          return window.metaidwallet.getUtxos(address);
        case 8:
          utxos = _context4.sent;
          return _context4.abrupt("return", utxos.reduce(function (acc, cur) {
            return acc + cur.value;
          }, 0));
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getMvcBalance(_x15) {
    return _ref7.apply(this, arguments);
  };
}();
var checkWalletAddress = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(address) {
    var _address;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return window.metaidwallet.btc.getAddress();
        case 2:
          _address = _context5.sent;
          if (!(address !== _address)) {
            _context5.next = 5;
            break;
          }
          return _context5.abrupt("return", {
            status: false,
            message: "Wallet address is not matched"
          });
        case 5:
          return _context5.abrupt("return", {
            status: true
          });
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function checkWalletAddress(_x16) {
    return _ref8.apply(this, arguments);
  };
}()));
var getPkScriprt = function getPkScriprt(address, network) {
  (0,bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .initEccLib */ .Wi)(_bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_7__);
  var btcNetwork = network === "mainnet" ? bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .networks.bitcoin */ .QW.zO : bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .networks.testnet */ .QW.$g;
  var paymentPrevOutputScript = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .address.toOutputScript */ .Lk.toOutputScript(address, btcNetwork);
  return buffer__WEBPACK_IMPORTED_MODULE_8__.Buffer.from(paymentPrevOutputScript).toString("hex");
};

/***/ }),

/***/ 72898:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LN: function() { return /* binding */ decryptPayloadAES; },
/* harmony export */   O3: function() { return /* binding */ checkImageSize; },
/* harmony export */   _v: function() { return /* binding */ sleep; },
/* harmony export */   lZ: function() { return /* binding */ detectUrl; },
/* harmony export */   mn: function() { return /* binding */ handleSpecial; },
/* harmony export */   uY: function() { return /* binding */ determineAddressInfo; },
/* harmony export */   wC: function() { return /* binding */ generateAESKey; },
/* harmony export */   wL: function() { return /* binding */ openWindowTarget; },
/* harmony export */   wv: function() { return /* binding */ formatMessage; },
/* harmony export */   yI: function() { return /* binding */ encryptPayloadAES; }
/* harmony export */ });
/* unused harmony export sha256sum */
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25778);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56283);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37373);




var ec = new elliptic__WEBPACK_IMPORTED_MODULE_1__.ec("secp256k1");
function generateAESKey() {
  // 32 字节 = 256 位
  var key = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().lib.WordArray.random(32);
  // 将密钥转换为十六进制字符串
  return key.toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc).Hex);
}
function encryptPayloadAES(keyHex, payload) {
  var key = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Hex.parse(keyHex);
  var payloadWordArray = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Hex.parse(payload);
  var iv = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().lib.WordArray.random(16);
  var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.encrypt(payloadWordArray, key, {
    iv: iv,
    mode: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().mode).CFB,
    padding: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().pad).NoPadding
  });
  var ivAndCiphertext = iv.concat(encrypted.ciphertext);
  return ivAndCiphertext.toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc).Hex);
}
function decryptPayloadAES(keyHex, encryptedHex) {
  // 将 Hex 格式的密钥解析为 CryptoJS WordArray
  var key = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Hex.parse(keyHex);

  // 将加密内容解析为 WordArray
  var encryptedWordArray = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc.Hex.parse(encryptedHex);

  // 提取 IV（前 16 字节）
  var iv = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().lib.WordArray.create(encryptedWordArray.words.slice(0, 4), 16);

  // 提取密文（去掉前 16 字节的 IV 部分）
  var ciphertext = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().lib.WordArray.create(encryptedWordArray.words.slice(4), encryptedWordArray.sigBytes - 16);

  // 使用 AES 解密
  var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0___default().AES.decrypt({
    ciphertext: ciphertext
  }, key, {
    iv: iv,
    mode: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().mode).CFB,
    padding: (crypto_js__WEBPACK_IMPORTED_MODULE_0___default().pad).NoPadding
  });

  // 去除多余的字节（可能是乱码）
  var rawData = decrypted.toString((crypto_js__WEBPACK_IMPORTED_MODULE_0___default().enc).Hex);

  // 因为输入是 Hex 字符串，去掉可能存在的填充字节
  return rawData.slice(0, ciphertext.sigBytes * 2);
}
function sha256sum(data) {
  return crypto.createHash("sha256").update(data).digest();
}
var handleSpecial = function handleSpecial(summary) {
  summary = summary.replace("<metaid_flag>", "metaid_flag").replace("<operation>", "operation").replace("<path>", "path").replace("<encryption>", "encryption").replace("<version>", "version").replace("<content-type>", "content-type").replace("<payload>", "payload");
  return summary;
};
var detectUrl = function detectUrl(summary) {
  var urlReg = /(https?:\/\/[^\s]+)/g;
  var urls = summary.match(urlReg);
  if (urls) {
    urls.forEach(function (url) {
      summary = summary.replace(url, "<a href=\"".concat(url, "\" target=\"_blank\" style=\"text-decoration: underline;\">").concat(url, "</a>"));
    });
  }
  return summary;
};
var openWindowTarget = function openWindowTarget() {
  if (window.innerWidth > 768) {
    return "_blank";
  }
  return "_self";
};
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
var formatMessage = function formatMessage(children) {
  var intl = (0,umi__WEBPACK_IMPORTED_MODULE_2__.getIntl)((0,umi__WEBPACK_IMPORTED_MODULE_2__.getLocale)());
  return intl.formatMessage({
    id: children,
    defaultMessage: children
  });
};
function checkImageSize(file) {
  return [true, ""];
  // if (file.size > 1024 * IMAGESIZE) {
  //   return [false, formatMessage("Image must smaller than 300k!")];
  // } else {
  //   return [true, ""];
  // }
}
function determineAddressInfo(address) {
  if (address.startsWith('bc1q')) {
    return 'p2wpkh';
  }
  if (address.startsWith('tb1q')) {
    return 'p2wpkh';
  }
  if (address.startsWith('bc1p')) {
    return 'p2tr';
  }
  if (address.startsWith('tb1p')) {
    return 'p2tr';
  }
  if (address.startsWith('1')) {
    return 'p2pkh';
  }
  if (address.startsWith('3') || address.startsWith('2')) {
    return 'p2sh';
  }
  if (address.startsWith('m') || address.startsWith('n')) {
    return 'p2pkh';
  }
  return 'unknown';
}

/***/ }),

/***/ 22647:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 81388:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 96581:
/***/ (function() {

/* (ignored) */

/***/ })

}]);