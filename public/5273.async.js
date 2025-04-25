"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5273],{

/***/ 79370:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75271);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46116);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10991);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39916);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37390);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16621);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70477);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37373);
/* harmony import */ var _Trans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57777);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78488);
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89927);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72898);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52676);













var getBase64 = function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};
var beforeUpload = function beforeUpload(file) {
  var isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP.error('You can only upload JPG/PNG file!');
  }
  var isLt300k = file.size / 1024 / 1024 < 0.3;
  if (!isLt300k) {
    antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP.error("file must smaller than 300k!");
    return false;
  }
  return isJpgOrPng && isLt300k;
};
var UploadAvatar = function UploadAvatar(props) {
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.useToken(),
    colorText = _theme$useToken.token.colorText;
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_4__.useModel)('user'),
    user = _useModel.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(props.value),
    _useState2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
    imageUrl = _useState2[0],
    setImageUrl = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState4 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    console.log(props.value);
    if (props.value && typeof props.value === 'string' && props.value.indexOf('http') === 0) {
      setImageUrl(props.value);
    } else {
      if (props.value === '') {
        setImageUrl('');
      }
    }
  }, [props.value]);
  var handleChange = function handleChange(info) {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, function (url) {
        setLoading(false);
        setImageUrl(url);
        if (props.onChange) {
          props.onChange(info.file.originFileObj);
        }
      });
    }
  };
  var uploadButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
    style: {
      border: 0,
      background: 'none',
      color: colorText
    },
    type: "button",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      style: {
        marginTop: 8
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: "Upload"
      })
    })]
  });
  var handleUpload = /*#__PURE__*/function () {
    var _ref2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(_ref) {
      var file, onSuccess, onError;
      return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            file = _ref.file, onSuccess = _ref.onSuccess, onError = _ref.onError;
            onSuccess();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleUpload(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    style: {
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_img_crop__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      rotationSlider: true,
      cropShape: "round",
      modalTitle: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatMessage */ .wv)('Avatar'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        beforeUpload: beforeUpload,
        onChange: handleChange,
        name: "avatar",
        listType: "picture-circle",
        className: "avatar-uploader",
        showUploadList: false,
        style: {
          overflow: 'hidden',
          background: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        customRequest: handleUpload,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          style: {
            position: 'relative',
            width: 100,
            height: 100
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
            src: imageUrl || _config__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_AVATAR */ .tU,
            alt: "avatar",
            style: {
              width: 100,
              height: 100,
              objectFit: 'cover',
              overflow: 'hidden',
              borderRadius: "50%"
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
            style: {
              position: 'absolute',
              bottom: 0,
              right: 0
            },
            size: "small",
            shape: "circle",
            type: "primary",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
          })]
        })
      })
    })
  });
};
/* harmony default export */ __webpack_exports__.Z = (UploadAvatar);

/***/ }),

/***/ 12521:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ShowLayout; }
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
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(37373);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(61408);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/layout/index.js + 2 modules
var layout = __webpack_require__(93840);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/index.js + 8 modules
var notification = __webpack_require__(28169);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(86821);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(62319);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/dropdown/index.js + 1 modules
var dropdown = __webpack_require__(22110);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(19391);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/menu/index.js + 10 modules
var menu = __webpack_require__(8807);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input-number/index.js + 2 modules
var input_number = __webpack_require__(18105);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(79063);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/index.js + 9 modules
var float_button = __webpack_require__(10468);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/layouts/index.less
var layouts = __webpack_require__(13013);
;// CONCATENATED MODULE: ./src/assets/nav/house-line.svg
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

const SvgHouseLine = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 24, height: 24 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "house-line_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 24, height: 24, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#house-line_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M9 16a1 1 0 1 0 0 2v-2Zm6 2a1 1 0 0 0 0-2v2ZM5.47 7.078l.615.79-.614-.79Zm2.6-2.022.615.79-.614-.79Zm7.86 0-.615.79.614-.79Zm2.6 2.022-.615.79.614-.79Zm2.034 11.738-.891-.454.891.454Zm-1.748 1.748-.454-.891.454.891Zm1.4-11.986.804-.595-.804.595Zm.636 1.3.963-.27-.963.27Zm-9.897-6.672-.262-.965.262.965Zm2.09 0-.261.966.261-.966ZM3.148 9.878l.963.27-.963-.27Zm.636-1.3.804.594-.804-.594Zm-.348 10.238.891-.454-.891.454Zm1.748 1.748.454-.891-.454.891ZM9 18h6v-2H9v2Zm-5-3.4v-2.47H2v2.47h2Zm2.085-6.732 2.6-2.023-1.228-1.578-2.6 2.022 1.228 1.579Zm9.23-2.023 2.6 2.023 1.228-1.58-2.6-2.021-1.228 1.578ZM20 12.13v2.47h2v-2.47h-2ZM14.6 20H9.4v2h5.2v-2Zm5.4-5.4c0 1.137 0 1.929-.051 2.546-.05.605-.142.953-.276 1.216l1.782.908c.302-.592.428-1.233.487-1.961.059-.718.058-1.605.058-2.709h-2ZM14.6 22c1.104 0 1.991 0 2.709-.058.729-.06 1.369-.185 1.961-.487l-.908-1.782c-.263.134-.611.226-1.216.276-.617.05-1.41.051-2.546.051v2Zm5.073-3.638a3 3 0 0 1-1.311 1.311l.908 1.782a5 5 0 0 0 2.185-2.185l-1.782-.908ZM17.915 7.868c.952.74 1.271 1 1.497 1.304l1.608-1.189c-.427-.578-1.015-1.024-1.877-1.694l-1.228 1.579ZM22 12.13c0-1.092.009-1.83-.185-2.521l-1.926.539c.102.365.111.777.111 1.982h2Zm-2.588-2.958a3 3 0 0 1 .477.976l1.926-.54a4.998 4.998 0 0 0-.795-1.625l-1.608 1.19ZM8.685 5.845c1.478-1.15 1.996-1.529 2.531-1.673l-.523-1.93c-1.017.275-1.904.988-3.236 2.025l1.228 1.578Zm7.858-1.578c-1.332-1.037-2.219-1.75-3.236-2.026l-.523 1.93c.535.145 1.053.525 2.531 1.674l1.228-1.578Zm-5.327-.095a3 3 0 0 1 1.568 0l.523-1.93a5 5 0 0 0-2.614 0l.523 1.93ZM4 12.13c0-1.205.009-1.617.111-1.982l-1.926-.54C1.991 10.302 2 11.039 2 12.13h2Zm.857-5.841c-.862.67-1.45 1.116-1.877 1.694l1.608 1.19c.226-.306.545-.565 1.497-1.305l-1.228-1.58Zm-.746 3.859a3 3 0 0 1 .477-.976L2.98 7.983a5 5 0 0 0-.795 1.626l1.926.539ZM2 14.6c0 1.104 0 1.991.058 2.709.06.728.185 1.369.487 1.96l1.782-.907c-.134-.263-.226-.611-.276-1.216C4.001 16.529 4 15.736 4 14.6H2ZM9.4 20c-1.137 0-1.929 0-2.546-.051-.605-.05-.953-.142-1.216-.276l-.908 1.782c.592.302 1.233.428 1.961.487.718.059 1.605.058 2.709.058v-2Zm-6.855-.73a5 5 0 0 0 2.185 2.185l.908-1.782a3 3 0 0 1-1.311-1.311l-1.782.908Z", fill: "#000", fillOpacity: 0.8 })));

/* harmony default export */ var house_line = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNOSAxNmExIDEgMCAxIDAgMCAydi0yWm02IDJhMSAxIDAgMCAwIDAtMnYyWk01LjQ3IDcuMDc4bC42MTUuNzktLjYxNC0uNzlabTIuNi0yLjAyMi42MTUuNzktLjYxNC0uNzlabTcuODYgMC0uNjE1Ljc5LjYxNC0uNzlabTIuNiAyLjAyMi0uNjE1Ljc5LjYxNC0uNzlabTIuMDM0IDExLjczOC0uODkxLS40NTQuODkxLjQ1NFptLTEuNzQ4IDEuNzQ4LS40NTQtLjg5MS40NTQuODkxWm0xLjQtMTEuOTg2LjgwNC0uNTk1LS44MDQuNTk1Wm0uNjM2IDEuMy45NjMtLjI3LS45NjMuMjdabS05Ljg5Ny02LjY3Mi0uMjYyLS45NjUuMjYyLjk2NVptMi4wOSAwLS4yNjEuOTY2LjI2MS0uOTY2Wk0zLjE0OCA5Ljg3OGwuOTYzLjI3LS45NjMtLjI3Wm0uNjM2LTEuMy44MDQuNTk0LS44MDQtLjU5NFptLS4zNDggMTAuMjM4Ljg5MS0uNDU0LS44OTEuNDU0Wm0xLjc0OCAxLjc0OC40NTQtLjg5MS0uNDU0Ljg5MVpNOSAxOGg2di0ySDl2MlptLTUtMy40di0yLjQ3SDJ2Mi40N2gyWm0yLjA4NS02LjczMiAyLjYtMi4wMjMtMS4yMjgtMS41NzgtMi42IDIuMDIyIDEuMjI4IDEuNTc5Wm05LjIzLTIuMDIzIDIuNiAyLjAyMyAxLjIyOC0xLjU4LTIuNi0yLjAyMS0xLjIyOCAxLjU3OFpNMjAgMTIuMTN2Mi40N2gydi0yLjQ3aC0yWk0xNC42IDIwSDkuNHYyaDUuMnYtMlptNS40LTUuNGMwIDEuMTM3IDAgMS45MjktLjA1MSAyLjU0Ni0uMDUuNjA1LS4xNDIuOTUzLS4yNzYgMS4yMTZsMS43ODIuOTA4Yy4zMDItLjU5Mi40MjgtMS4yMzMuNDg3LTEuOTYxLjA1OS0uNzE4LjA1OC0xLjYwNS4wNTgtMi43MDloLTJaTTE0LjYgMjJjMS4xMDQgMCAxLjk5MSAwIDIuNzA5LS4wNTguNzI5LS4wNiAxLjM2OS0uMTg1IDEuOTYxLS40ODdsLS45MDgtMS43ODJjLS4yNjMuMTM0LS42MTEuMjI2LTEuMjE2LjI3Ni0uNjE3LjA1LTEuNDEuMDUxLTIuNTQ2LjA1MXYyWm01LjA3My0zLjYzOGEzIDMgMCAwIDEtMS4zMTEgMS4zMTFsLjkwOCAxLjc4MmE1IDUgMCAwIDAgMi4xODUtMi4xODVsLTEuNzgyLS45MDhaTTE3LjkxNSA3Ljg2OGMuOTUyLjc0IDEuMjcxIDEgMS40OTcgMS4zMDRsMS42MDgtMS4xODljLS40MjctLjU3OC0xLjAxNS0xLjAyNC0xLjg3Ny0xLjY5NGwtMS4yMjggMS41NzlaTTIyIDEyLjEzYzAtMS4wOTIuMDA5LTEuODMtLjE4NS0yLjUyMWwtMS45MjYuNTM5Yy4xMDIuMzY1LjExMS43NzcuMTExIDEuOTgyaDJabS0yLjU4OC0yLjk1OGEzIDMgMCAwIDEgLjQ3Ny45NzZsMS45MjYtLjU0YTQuOTk4IDQuOTk4IDAgMCAwLS43OTUtMS42MjVsLTEuNjA4IDEuMTlaTTguNjg1IDUuODQ1YzEuNDc4LTEuMTUgMS45OTYtMS41MjkgMi41MzEtMS42NzNsLS41MjMtMS45M2MtMS4wMTcuMjc1LTEuOTA0Ljk4OC0zLjIzNiAyLjAyNWwxLjIyOCAxLjU3OFptNy44NTgtMS41NzhjLTEuMzMyLTEuMDM3LTIuMjE5LTEuNzUtMy4yMzYtMi4wMjZsLS41MjMgMS45M2MuNTM1LjE0NSAxLjA1My41MjUgMi41MzEgMS42NzRsMS4yMjgtMS41NzhabS01LjMyNy0uMDk1YTMgMyAwIDAgMSAxLjU2OCAwbC41MjMtMS45M2E1IDUgMCAwIDAtMi42MTQgMGwuNTIzIDEuOTNaTTQgMTIuMTNjMC0xLjIwNS4wMDktMS42MTcuMTExLTEuOTgybC0xLjkyNi0uNTRDMS45OTEgMTAuMzAyIDIgMTEuMDM5IDIgMTIuMTNoMlptLjg1Ny01Ljg0MWMtLjg2Mi42Ny0xLjQ1IDEuMTE2LTEuODc3IDEuNjk0bDEuNjA4IDEuMTljLjIyNi0uMzA2LjU0NS0uNTY1IDEuNDk3LTEuMzA1bC0xLjIyOC0xLjU4Wm0tLjc0NiAzLjg1OWEzIDMgMCAwIDEgLjQ3Ny0uOTc2TDIuOTggNy45ODNhNSA1IDAgMCAwLS43OTUgMS42MjZsMS45MjYuNTM5Wk0yIDE0LjZjMCAxLjEwNCAwIDEuOTkxLjA1OCAyLjcwOS4wNi43MjguMTg1IDEuMzY5LjQ4NyAxLjk2bDEuNzgyLS45MDdjLS4xMzQtLjI2My0uMjI2LS42MTEtLjI3Ni0xLjIxNkM0LjAwMSAxNi41MjkgNCAxNS43MzYgNCAxNC42SDJaTTkuNCAyMGMtMS4xMzcgMC0xLjkyOSAwLTIuNTQ2LS4wNTEtLjYwNS0uMDUtLjk1My0uMTQyLTEuMjE2LS4yNzZsLS45MDggMS43ODJjLjU5Mi4zMDIgMS4yMzMuNDI4IDEuOTYxLjQ4Ny43MTguMDU5IDEuNjA1LjA1OCAyLjcwOS4wNTh2LTJabS02Ljg1NS0uNzNhNSA1IDAgMCAwIDIuMTg1IDIuMTg1bC45MDgtMS43ODJhMyAzIDAgMCAxLTEuMzExLTEuMzExbC0xLjc4Mi45MDhaIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii44Ii8+PC9nPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/assets/nav/house-line-active.svg
var house_line_active_defProp = Object.defineProperty;
var house_line_active_getOwnPropSymbols = Object.getOwnPropertySymbols;
var house_line_active_hasOwnProp = Object.prototype.hasOwnProperty;
var house_line_active_propIsEnum = Object.prototype.propertyIsEnumerable;
var house_line_active_defNormalProp = (obj, key, value) => key in obj ? house_line_active_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var house_line_active_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (house_line_active_hasOwnProp.call(b, prop))
      house_line_active_defNormalProp(a, prop, b[prop]);
  if (house_line_active_getOwnPropSymbols)
    for (var prop of house_line_active_getOwnPropSymbols(b)) {
      if (house_line_active_propIsEnum.call(b, prop))
        house_line_active_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgHouseLineActive = (props) => /* @__PURE__ */ React.createElement("svg", house_line_active_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 24, height: 24 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "house-line-active_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 24, height: 24, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#house-line-active_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M9 16a1 1 0 1 0 0 2v-2Zm6 2a1 1 0 0 0 0-2v2ZM5.47 7.078l.615.79-.614-.79Zm2.6-2.022.615.79-.614-.79Zm7.86 0-.615.79.614-.79Zm2.6 2.022-.615.79.614-.79Zm2.034 11.738-.891-.454.891.454Zm-1.748 1.748-.454-.891.454.891Zm1.4-11.986.804-.595-.804.595Zm.636 1.3.963-.27-.963.27Zm-9.897-6.672-.262-.965.262.965Zm2.09 0-.261.966.261-.966ZM3.148 9.878l.963.27-.963-.27Zm.636-1.3.804.594-.804-.594Zm-.348 10.238.891-.454-.891.454Zm1.748 1.748.454-.891-.454.891ZM9 18h6v-2H9v2Zm-5-3.4v-2.47H2v2.47h2Zm2.085-6.732 2.6-2.023-1.228-1.578-2.6 2.022 1.228 1.579Zm9.23-2.023 2.6 2.023 1.228-1.58-2.6-2.021-1.228 1.578ZM20 12.13v2.47h2v-2.47h-2ZM14.6 20H9.4v2h5.2v-2Zm5.4-5.4c0 1.137 0 1.929-.051 2.546-.05.605-.142.953-.276 1.216l1.782.908c.302-.592.428-1.233.487-1.961.059-.718.058-1.605.058-2.709h-2ZM14.6 22c1.104 0 1.991 0 2.709-.058.729-.06 1.369-.185 1.961-.487l-.908-1.782c-.263.134-.611.226-1.216.276-.617.05-1.41.051-2.546.051v2Zm5.073-3.638a3 3 0 0 1-1.311 1.311l.908 1.782a5 5 0 0 0 2.185-2.185l-1.782-.908ZM17.915 7.868c.952.74 1.271 1 1.497 1.304l1.608-1.189c-.427-.578-1.015-1.024-1.877-1.694l-1.228 1.579ZM22 12.13c0-1.092.009-1.83-.185-2.521l-1.926.539c.102.365.111.777.111 1.982h2Zm-2.588-2.958a3 3 0 0 1 .477.976l1.926-.54a4.998 4.998 0 0 0-.795-1.625l-1.608 1.19ZM8.685 5.845c1.478-1.15 1.996-1.529 2.531-1.673l-.523-1.93c-1.017.275-1.904.988-3.236 2.025l1.228 1.578Zm7.858-1.578c-1.332-1.037-2.219-1.75-3.236-2.026l-.523 1.93c.535.145 1.053.525 2.531 1.674l1.228-1.578Zm-5.327-.095a3 3 0 0 1 1.568 0l.523-1.93a5 5 0 0 0-2.614 0l.523 1.93ZM4 12.13c0-1.205.009-1.617.111-1.982l-1.926-.54C1.991 10.302 2 11.039 2 12.13h2Zm.857-5.841c-.862.67-1.45 1.116-1.877 1.694l1.608 1.19c.226-.306.545-.565 1.497-1.305l-1.228-1.58Zm-.746 3.859a3 3 0 0 1 .477-.976L2.98 7.983a5 5 0 0 0-.795 1.626l1.926.539ZM2 14.6c0 1.104 0 1.991.058 2.709.06.728.185 1.369.487 1.96l1.782-.907c-.134-.263-.226-.611-.276-1.216C4.001 16.529 4 15.736 4 14.6H2ZM9.4 20c-1.137 0-1.929 0-2.546-.051-.605-.05-.953-.142-1.216-.276l-.908 1.782c.592.302 1.233.428 1.961.487.718.059 1.605.058 2.709.058v-2Zm-6.855-.73a5 5 0 0 0 2.185 2.185l.908-1.782a3 3 0 0 1-1.311-1.311l-1.782.908Z", fill: "#FC457B" })));

/* harmony default export */ var house_line_active = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNOSAxNmExIDEgMCAxIDAgMCAydi0yWm02IDJhMSAxIDAgMCAwIDAtMnYyWk01LjQ3IDcuMDc4bC42MTUuNzktLjYxNC0uNzlabTIuNi0yLjAyMi42MTUuNzktLjYxNC0uNzlabTcuODYgMC0uNjE1Ljc5LjYxNC0uNzlabTIuNiAyLjAyMi0uNjE1Ljc5LjYxNC0uNzlabTIuMDM0IDExLjczOC0uODkxLS40NTQuODkxLjQ1NFptLTEuNzQ4IDEuNzQ4LS40NTQtLjg5MS40NTQuODkxWm0xLjQtMTEuOTg2LjgwNC0uNTk1LS44MDQuNTk1Wm0uNjM2IDEuMy45NjMtLjI3LS45NjMuMjdabS05Ljg5Ny02LjY3Mi0uMjYyLS45NjUuMjYyLjk2NVptMi4wOSAwLS4yNjEuOTY2LjI2MS0uOTY2Wk0zLjE0OCA5Ljg3OGwuOTYzLjI3LS45NjMtLjI3Wm0uNjM2LTEuMy44MDQuNTk0LS44MDQtLjU5NFptLS4zNDggMTAuMjM4Ljg5MS0uNDU0LS44OTEuNDU0Wm0xLjc0OCAxLjc0OC40NTQtLjg5MS0uNDU0Ljg5MVpNOSAxOGg2di0ySDl2MlptLTUtMy40di0yLjQ3SDJ2Mi40N2gyWm0yLjA4NS02LjczMiAyLjYtMi4wMjMtMS4yMjgtMS41NzgtMi42IDIuMDIyIDEuMjI4IDEuNTc5Wm05LjIzLTIuMDIzIDIuNiAyLjAyMyAxLjIyOC0xLjU4LTIuNi0yLjAyMS0xLjIyOCAxLjU3OFpNMjAgMTIuMTN2Mi40N2gydi0yLjQ3aC0yWk0xNC42IDIwSDkuNHYyaDUuMnYtMlptNS40LTUuNGMwIDEuMTM3IDAgMS45MjktLjA1MSAyLjU0Ni0uMDUuNjA1LS4xNDIuOTUzLS4yNzYgMS4yMTZsMS43ODIuOTA4Yy4zMDItLjU5Mi40MjgtMS4yMzMuNDg3LTEuOTYxLjA1OS0uNzE4LjA1OC0xLjYwNS4wNTgtMi43MDloLTJaTTE0LjYgMjJjMS4xMDQgMCAxLjk5MSAwIDIuNzA5LS4wNTguNzI5LS4wNiAxLjM2OS0uMTg1IDEuOTYxLS40ODdsLS45MDgtMS43ODJjLS4yNjMuMTM0LS42MTEuMjI2LTEuMjE2LjI3Ni0uNjE3LjA1LTEuNDEuMDUxLTIuNTQ2LjA1MXYyWm01LjA3My0zLjYzOGEzIDMgMCAwIDEtMS4zMTEgMS4zMTFsLjkwOCAxLjc4MmE1IDUgMCAwIDAgMi4xODUtMi4xODVsLTEuNzgyLS45MDhaTTE3LjkxNSA3Ljg2OGMuOTUyLjc0IDEuMjcxIDEgMS40OTcgMS4zMDRsMS42MDgtMS4xODljLS40MjctLjU3OC0xLjAxNS0xLjAyNC0xLjg3Ny0xLjY5NGwtMS4yMjggMS41NzlaTTIyIDEyLjEzYzAtMS4wOTIuMDA5LTEuODMtLjE4NS0yLjUyMWwtMS45MjYuNTM5Yy4xMDIuMzY1LjExMS43NzcuMTExIDEuOTgyaDJabS0yLjU4OC0yLjk1OGEzIDMgMCAwIDEgLjQ3Ny45NzZsMS45MjYtLjU0YTQuOTk4IDQuOTk4IDAgMCAwLS43OTUtMS42MjVsLTEuNjA4IDEuMTlaTTguNjg1IDUuODQ1YzEuNDc4LTEuMTUgMS45OTYtMS41MjkgMi41MzEtMS42NzNsLS41MjMtMS45M2MtMS4wMTcuMjc1LTEuOTA0Ljk4OC0zLjIzNiAyLjAyNWwxLjIyOCAxLjU3OFptNy44NTgtMS41NzhjLTEuMzMyLTEuMDM3LTIuMjE5LTEuNzUtMy4yMzYtMi4wMjZsLS41MjMgMS45M2MuNTM1LjE0NSAxLjA1My41MjUgMi41MzEgMS42NzRsMS4yMjgtMS41NzhabS01LjMyNy0uMDk1YTMgMyAwIDAgMSAxLjU2OCAwbC41MjMtMS45M2E1IDUgMCAwIDAtMi42MTQgMGwuNTIzIDEuOTNaTTQgMTIuMTNjMC0xLjIwNS4wMDktMS42MTcuMTExLTEuOTgybC0xLjkyNi0uNTRDMS45OTEgMTAuMzAyIDIgMTEuMDM5IDIgMTIuMTNoMlptLjg1Ny01Ljg0MWMtLjg2Mi42Ny0xLjQ1IDEuMTE2LTEuODc3IDEuNjk0bDEuNjA4IDEuMTljLjIyNi0uMzA2LjU0NS0uNTY1IDEuNDk3LTEuMzA1bC0xLjIyOC0xLjU4Wm0tLjc0NiAzLjg1OWEzIDMgMCAwIDEgLjQ3Ny0uOTc2TDIuOTggNy45ODNhNSA1IDAgMCAwLS43OTUgMS42MjZsMS45MjYuNTM5Wk0yIDE0LjZjMCAxLjEwNCAwIDEuOTkxLjA1OCAyLjcwOS4wNi43MjguMTg1IDEuMzY5LjQ4NyAxLjk2bDEuNzgyLS45MDdjLS4xMzQtLjI2My0uMjI2LS42MTEtLjI3Ni0xLjIxNkM0LjAwMSAxNi41MjkgNCAxNS43MzYgNCAxNC42SDJaTTkuNCAyMGMtMS4xMzcgMC0xLjkyOSAwLTIuNTQ2LS4wNTEtLjYwNS0uMDUtLjk1My0uMTQyLTEuMjE2LS4yNzZsLS45MDggMS43ODJjLjU5Mi4zMDIgMS4yMzMuNDI4IDEuOTYxLjQ4Ny43MTguMDU5IDEuNjA1LjA1OCAyLjcwOS4wNTh2LTJabS02Ljg1NS0uNzNhNSA1IDAgMCAwIDIuMTg1IDIuMTg1bC45MDgtMS43ODJhMyAzIDAgMCAxLTEuMzExLTEuMzExbC0xLjc4Mi45MDhaIiBmaWxsPSIjRkM0NTdCIi8+PC9nPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/assets/nav/square-user-check.svg
var square_user_check_defProp = Object.defineProperty;
var square_user_check_getOwnPropSymbols = Object.getOwnPropertySymbols;
var square_user_check_hasOwnProp = Object.prototype.hasOwnProperty;
var square_user_check_propIsEnum = Object.prototype.propertyIsEnumerable;
var square_user_check_defNormalProp = (obj, key, value) => key in obj ? square_user_check_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var square_user_check_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (square_user_check_hasOwnProp.call(b, prop))
      square_user_check_defNormalProp(a, prop, b[prop]);
  if (square_user_check_getOwnPropSymbols)
    for (var prop of square_user_check_getOwnPropSymbols(b)) {
      if (square_user_check_propIsEnum.call(b, prop))
        square_user_check_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgSquareUserCheck = (props) => /* @__PURE__ */ React.createElement("svg", square_user_check_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 24, height: 24 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "square-user-check_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 24, height: 24, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#square-user-check_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M15.707 17.293a1 1 0 0 0-1.414 1.414l1.414-1.414ZM17 20l-.707.707a1 1 0 0 0 1.414 0L17 20Zm4.707-3.293a1 1 0 0 0-1.414-1.414l1.414 1.414ZM11 21a1 1 0 1 0 0-2v2Zm8-9a1 1 0 1 0 2 0h-2ZM5.092 19.782l.454-.891-.454.891Zm-.874-.874.891-.454-.891.454Zm14.69-14.69-.454.891.454-.891Zm.874.874-.891.454.891-.454Zm-14.69-.874-.454-.891.454.891Zm-.874.874-.891-.454.891.454ZM6 20a1 1 0 1 0 2 0H6Zm1.1-1-.98-.199.98.199Zm4.9-3a1 1 0 1 0 0-2v2Zm2.293 2.707 2 2 1.414-1.414-2-2-1.414 1.414Zm3.414 2 4-4-1.414-1.414-4 4 1.414 1.414ZM13 10a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1H9a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1V7a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2ZM7.2 5h9.6V3H7.2v2ZM11 19H7.2v2H11v-2Zm-6-2.2V7.2H3v9.6h2Zm14-9.6V12h2V7.2h-2ZM7.2 19c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085l-.908 1.782c.378.193.772.264 1.167.296.384.032.851.031 1.395.031v-2ZM3 16.8c0 .544 0 1.011.03 1.395.033.395.104.789.297 1.167l1.782-.908c-.025-.05-.063-.15-.085-.422C5 17.75 5 17.377 5 16.8H3Zm2.546 2.091a1 1 0 0 1-.437-.437l-1.782.908a3 3 0 0 0 1.311 1.311l.908-1.782ZM16.8 5c.577 0 .949 0 1.232.024.272.022.372.06.422.085l.908-1.782c-.378-.193-.772-.264-1.167-.296C17.811 2.999 17.344 3 16.8 3v2ZM21 7.2c0-.544 0-1.011-.03-1.395-.033-.395-.104-.789-.297-1.167l-1.782.908c.025.05.063.15.085.422C19 6.25 19 6.623 19 7.2h2Zm-2.546-2.091a1 1 0 0 1 .437.437l1.782-.908a3 3 0 0 0-1.311-1.311l-.908 1.782ZM7.2 3c-.544 0-1.011 0-1.395.03-.395.033-.789.104-1.167.297l.908 1.782c.05-.025.15-.063.422-.085C6.25 5 6.623 5 7.2 5V3ZM5 7.2c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422l-1.782-.908c-.193.378-.264.772-.296 1.167C2.999 6.189 3 6.656 3 7.2h2Zm-.362-3.873a3 3 0 0 0-1.311 1.311l1.782.908a1 1 0 0 1 .437-.437l-.908-1.782ZM8 20c0-.275.028-.543.08-.801L6.12 18.8C6.041 19.19 6 19.591 6 20h2Zm.08-.801A4.002 4.002 0 0 1 12 16v-2a6.002 6.002 0 0 0-5.88 4.801l1.96.398Z", fill: "#000", fillOpacity: 0.8 })));

/* harmony default export */ var square_user_check = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMTUuNzA3IDE3LjI5M2ExIDEgMCAwIDAtMS40MTQgMS40MTRsMS40MTQtMS40MTRaTTE3IDIwbC0uNzA3LjcwN2ExIDEgMCAwIDAgMS40MTQgMEwxNyAyMFptNC43MDctMy4yOTNhMSAxIDAgMCAwLTEuNDE0LTEuNDE0bDEuNDE0IDEuNDE0Wk0xMSAyMWExIDEgMCAxIDAgMC0ydjJabTgtOWExIDEgMCAxIDAgMiAwaC0yWk01LjA5MiAxOS43ODJsLjQ1NC0uODkxLS40NTQuODkxWm0tLjg3NC0uODc0Ljg5MS0uNDU0LS44OTEuNDU0Wm0xNC42OS0xNC42OS0uNDU0Ljg5MS40NTQtLjg5MVptLjg3NC44NzQtLjg5MS40NTQuODkxLS40NTRabS0xNC42OS0uODc0LS40NTQtLjg5MS40NTQuODkxWm0tLjg3NC44NzQtLjg5MS0uNDU0Ljg5MS40NTRaTTYgMjBhMSAxIDAgMSAwIDIgMEg2Wm0xLjEtMS0uOTgtLjE5OS45OC4xOTlabTQuOS0zYTEgMSAwIDEgMCAwLTJ2MlptMi4yOTMgMi43MDcgMiAyIDEuNDE0LTEuNDE0LTItMi0xLjQxNCAxLjQxNFptMy40MTQgMiA0LTQtMS40MTQtMS40MTQtNCA0IDEuNDE0IDEuNDE0Wk0xMyAxMGExIDEgMCAwIDEtMSAxdjJhMyAzIDAgMCAwIDMtM2gtMlptLTEgMWExIDEgMCAwIDEtMS0xSDlhMyAzIDAgMCAwIDMgM3YtMlptLTEtMWExIDEgMCAwIDEgMS0xVjdhMyAzIDAgMCAwLTMgM2gyWm0xLTFhMSAxIDAgMCAxIDEgMWgyYTMgMyAwIDAgMC0zLTN2MlpNNy4yIDVoOS42VjNINy4ydjJaTTExIDE5SDcuMnYySDExdi0yWm0tNi0yLjJWNy4ySDN2OS42aDJabTE0LTkuNlYxMmgyVjcuMmgtMlpNNy4yIDE5Yy0uNTc3IDAtLjk0OSAwLTEuMjMyLS4wMjQtLjI3Mi0uMDIyLS4zNzMtLjA2LS40MjItLjA4NWwtLjkwOCAxLjc4MmMuMzc4LjE5My43NzIuMjY0IDEuMTY3LjI5Ni4zODQuMDMyLjg1MS4wMzEgMS4zOTUuMDMxdi0yWk0zIDE2LjhjMCAuNTQ0IDAgMS4wMTEuMDMgMS4zOTUuMDMzLjM5NS4xMDQuNzg5LjI5NyAxLjE2N2wxLjc4Mi0uOTA4Yy0uMDI1LS4wNS0uMDYzLS4xNS0uMDg1LS40MjJDNSAxNy43NSA1IDE3LjM3NyA1IDE2LjhIM1ptMi41NDYgMi4wOTFhMSAxIDAgMCAxLS40MzctLjQzN2wtMS43ODIuOTA4YTMgMyAwIDAgMCAxLjMxMSAxLjMxMWwuOTA4LTEuNzgyWk0xNi44IDVjLjU3NyAwIC45NDkgMCAxLjIzMi4wMjQuMjcyLjAyMi4zNzIuMDYuNDIyLjA4NWwuOTA4LTEuNzgyYy0uMzc4LS4xOTMtLjc3Mi0uMjY0LTEuMTY3LS4yOTZDMTcuODExIDIuOTk5IDE3LjM0NCAzIDE2LjggM3YyWk0yMSA3LjJjMC0uNTQ0IDAtMS4wMTEtLjAzLTEuMzk1LS4wMzMtLjM5NS0uMTA0LS43ODktLjI5Ny0xLjE2N2wtMS43ODIuOTA4Yy4wMjUuMDUuMDYzLjE1LjA4NS40MjJDMTkgNi4yNSAxOSA2LjYyMyAxOSA3LjJoMlptLTIuNTQ2LTIuMDkxYTEgMSAwIDAgMSAuNDM3LjQzN2wxLjc4Mi0uOTA4YTMgMyAwIDAgMC0xLjMxMS0xLjMxMWwtLjkwOCAxLjc4MlpNNy4yIDNjLS41NDQgMC0xLjAxMSAwLTEuMzk1LjAzLS4zOTUuMDMzLS43ODkuMTA0LTEuMTY3LjI5N2wuOTA4IDEuNzgyYy4wNS0uMDI1LjE1LS4wNjMuNDIyLS4wODVDNi4yNSA1IDYuNjIzIDUgNy4yIDVWM1pNNSA3LjJjMC0uNTc3IDAtLjk0OS4wMjQtMS4yMzIuMDIyLS4yNzIuMDYtLjM3My4wODUtLjQyMmwtMS43ODItLjkwOGMtLjE5My4zNzgtLjI2NC43NzItLjI5NiAxLjE2N0MyLjk5OSA2LjE4OSAzIDYuNjU2IDMgNy4yaDJabS0uMzYyLTMuODczYTMgMyAwIDAgMC0xLjMxMSAxLjMxMWwxLjc4Mi45MDhhMSAxIDAgMCAxIC40MzctLjQzN2wtLjkwOC0xLjc4MlpNOCAyMGMwLS4yNzUuMDI4LS41NDMuMDgtLjgwMUw2LjEyIDE4LjhDNi4wNDEgMTkuMTkgNiAxOS41OTEgNiAyMGgyWm0uMDgtLjgwMUE0LjAwMiA0LjAwMiAwIDAgMSAxMiAxNnYtMmE2LjAwMiA2LjAwMiAwIDAgMC01Ljg4IDQuODAxbDEuOTYuMzk4WiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuOCIvPjwvZz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/nav/square-user-check-active.svg
var square_user_check_active_defProp = Object.defineProperty;
var square_user_check_active_getOwnPropSymbols = Object.getOwnPropertySymbols;
var square_user_check_active_hasOwnProp = Object.prototype.hasOwnProperty;
var square_user_check_active_propIsEnum = Object.prototype.propertyIsEnumerable;
var square_user_check_active_defNormalProp = (obj, key, value) => key in obj ? square_user_check_active_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var square_user_check_active_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (square_user_check_active_hasOwnProp.call(b, prop))
      square_user_check_active_defNormalProp(a, prop, b[prop]);
  if (square_user_check_active_getOwnPropSymbols)
    for (var prop of square_user_check_active_getOwnPropSymbols(b)) {
      if (square_user_check_active_propIsEnum.call(b, prop))
        square_user_check_active_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgSquareUserCheckActive = (props) => /* @__PURE__ */ React.createElement("svg", square_user_check_active_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 24, height: 24 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "square-user-check-active_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 24, height: 24, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#square-user-check-active_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M15.707 17.293a1 1 0 0 0-1.414 1.414l1.414-1.414ZM17 20l-.707.707a1 1 0 0 0 1.414 0L17 20Zm4.707-3.293a1 1 0 0 0-1.414-1.414l1.414 1.414ZM11 21a1 1 0 1 0 0-2v2Zm8-9a1 1 0 1 0 2 0h-2ZM5.092 19.782l.454-.891-.454.891Zm-.874-.874.891-.454-.891.454Zm14.69-14.69-.454.891.454-.891Zm.874.874-.891.454.891-.454Zm-14.69-.874-.454-.891.454.891Zm-.874.874-.891-.454.891.454ZM6 20a1 1 0 1 0 2 0H6Zm1.1-1-.98-.199.98.199Zm4.9-3a1 1 0 1 0 0-2v2Zm2.293 2.707 2 2 1.414-1.414-2-2-1.414 1.414Zm3.414 2 4-4-1.414-1.414-4 4 1.414 1.414ZM13 10a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1H9a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1V7a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2ZM7.2 5h9.6V3H7.2v2ZM11 19H7.2v2H11v-2Zm-6-2.2V7.2H3v9.6h2Zm14-9.6V12h2V7.2h-2ZM7.2 19c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085l-.908 1.782c.378.193.772.264 1.167.296.384.032.851.031 1.395.031v-2ZM3 16.8c0 .544 0 1.011.03 1.395.033.395.104.789.297 1.167l1.782-.908c-.025-.05-.063-.15-.085-.422C5 17.75 5 17.377 5 16.8H3Zm2.546 2.091a1 1 0 0 1-.437-.437l-1.782.908a3 3 0 0 0 1.311 1.311l.908-1.782ZM16.8 5c.577 0 .949 0 1.232.024.272.022.372.06.422.085l.908-1.782c-.378-.193-.772-.264-1.167-.296C17.811 2.999 17.344 3 16.8 3v2ZM21 7.2c0-.544 0-1.011-.03-1.395-.033-.395-.104-.789-.297-1.167l-1.782.908c.025.05.063.15.085.422C19 6.25 19 6.623 19 7.2h2Zm-2.546-2.091a1 1 0 0 1 .437.437l1.782-.908a3 3 0 0 0-1.311-1.311l-.908 1.782ZM7.2 3c-.544 0-1.011 0-1.395.03-.395.033-.789.104-1.167.297l.908 1.782c.05-.025.15-.063.422-.085C6.25 5 6.623 5 7.2 5V3ZM5 7.2c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422l-1.782-.908c-.193.378-.264.772-.296 1.167C2.999 6.189 3 6.656 3 7.2h2Zm-.362-3.873a3 3 0 0 0-1.311 1.311l1.782.908a1 1 0 0 1 .437-.437l-.908-1.782ZM8 20c0-.275.028-.543.08-.801L6.12 18.8C6.041 19.19 6 19.591 6 20h2Zm.08-.801A4.002 4.002 0 0 1 12 16v-2a6.002 6.002 0 0 0-5.88 4.801l1.96.398Z", fill: "#FC457B" })));

/* harmony default export */ var square_user_check_active = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMTUuNzA3IDE3LjI5M2ExIDEgMCAwIDAtMS40MTQgMS40MTRsMS40MTQtMS40MTRaTTE3IDIwbC0uNzA3LjcwN2ExIDEgMCAwIDAgMS40MTQgMEwxNyAyMFptNC43MDctMy4yOTNhMSAxIDAgMCAwLTEuNDE0LTEuNDE0bDEuNDE0IDEuNDE0Wk0xMSAyMWExIDEgMCAxIDAgMC0ydjJabTgtOWExIDEgMCAxIDAgMiAwaC0yWk01LjA5MiAxOS43ODJsLjQ1NC0uODkxLS40NTQuODkxWm0tLjg3NC0uODc0Ljg5MS0uNDU0LS44OTEuNDU0Wm0xNC42OS0xNC42OS0uNDU0Ljg5MS40NTQtLjg5MVptLjg3NC44NzQtLjg5MS40NTQuODkxLS40NTRabS0xNC42OS0uODc0LS40NTQtLjg5MS40NTQuODkxWm0tLjg3NC44NzQtLjg5MS0uNDU0Ljg5MS40NTRaTTYgMjBhMSAxIDAgMSAwIDIgMEg2Wm0xLjEtMS0uOTgtLjE5OS45OC4xOTlabTQuOS0zYTEgMSAwIDEgMCAwLTJ2MlptMi4yOTMgMi43MDcgMiAyIDEuNDE0LTEuNDE0LTItMi0xLjQxNCAxLjQxNFptMy40MTQgMiA0LTQtMS40MTQtMS40MTQtNCA0IDEuNDE0IDEuNDE0Wk0xMyAxMGExIDEgMCAwIDEtMSAxdjJhMyAzIDAgMCAwIDMtM2gtMlptLTEgMWExIDEgMCAwIDEtMS0xSDlhMyAzIDAgMCAwIDMgM3YtMlptLTEtMWExIDEgMCAwIDEgMS0xVjdhMyAzIDAgMCAwLTMgM2gyWm0xLTFhMSAxIDAgMCAxIDEgMWgyYTMgMyAwIDAgMC0zLTN2MlpNNy4yIDVoOS42VjNINy4ydjJaTTExIDE5SDcuMnYySDExdi0yWm0tNi0yLjJWNy4ySDN2OS42aDJabTE0LTkuNlYxMmgyVjcuMmgtMlpNNy4yIDE5Yy0uNTc3IDAtLjk0OSAwLTEuMjMyLS4wMjQtLjI3Mi0uMDIyLS4zNzMtLjA2LS40MjItLjA4NWwtLjkwOCAxLjc4MmMuMzc4LjE5My43NzIuMjY0IDEuMTY3LjI5Ni4zODQuMDMyLjg1MS4wMzEgMS4zOTUuMDMxdi0yWk0zIDE2LjhjMCAuNTQ0IDAgMS4wMTEuMDMgMS4zOTUuMDMzLjM5NS4xMDQuNzg5LjI5NyAxLjE2N2wxLjc4Mi0uOTA4Yy0uMDI1LS4wNS0uMDYzLS4xNS0uMDg1LS40MjJDNSAxNy43NSA1IDE3LjM3NyA1IDE2LjhIM1ptMi41NDYgMi4wOTFhMSAxIDAgMCAxLS40MzctLjQzN2wtMS43ODIuOTA4YTMgMyAwIDAgMCAxLjMxMSAxLjMxMWwuOTA4LTEuNzgyWk0xNi44IDVjLjU3NyAwIC45NDkgMCAxLjIzMi4wMjQuMjcyLjAyMi4zNzIuMDYuNDIyLjA4NWwuOTA4LTEuNzgyYy0uMzc4LS4xOTMtLjc3Mi0uMjY0LTEuMTY3LS4yOTZDMTcuODExIDIuOTk5IDE3LjM0NCAzIDE2LjggM3YyWk0yMSA3LjJjMC0uNTQ0IDAtMS4wMTEtLjAzLTEuMzk1LS4wMzMtLjM5NS0uMTA0LS43ODktLjI5Ny0xLjE2N2wtMS43ODIuOTA4Yy4wMjUuMDUuMDYzLjE1LjA4NS40MjJDMTkgNi4yNSAxOSA2LjYyMyAxOSA3LjJoMlptLTIuNTQ2LTIuMDkxYTEgMSAwIDAgMSAuNDM3LjQzN2wxLjc4Mi0uOTA4YTMgMyAwIDAgMC0xLjMxMS0xLjMxMWwtLjkwOCAxLjc4MlpNNy4yIDNjLS41NDQgMC0xLjAxMSAwLTEuMzk1LjAzLS4zOTUuMDMzLS43ODkuMTA0LTEuMTY3LjI5N2wuOTA4IDEuNzgyYy4wNS0uMDI1LjE1LS4wNjMuNDIyLS4wODVDNi4yNSA1IDYuNjIzIDUgNy4yIDVWM1pNNSA3LjJjMC0uNTc3IDAtLjk0OS4wMjQtMS4yMzIuMDIyLS4yNzIuMDYtLjM3My4wODUtLjQyMmwtMS43ODItLjkwOGMtLjE5My4zNzgtLjI2NC43NzItLjI5NiAxLjE2N0MyLjk5OSA2LjE4OSAzIDYuNjU2IDMgNy4yaDJabS0uMzYyLTMuODczYTMgMyAwIDAgMC0xLjMxMSAxLjMxMWwxLjc4Mi45MDhhMSAxIDAgMCAxIC40MzctLjQzN2wtLjkwOC0xLjc4MlpNOCAyMGMwLS4yNzUuMDI4LS41NDMuMDgtLjgwMUw2LjEyIDE4LjhDNi4wNDEgMTkuMTkgNiAxOS41OTEgNiAyMGgyWm0uMDgtLjgwMUE0LjAwMiA0LjAwMiAwIDAgMSAxMiAxNnYtMmE2LjAwMiA2LjAwMiAwIDAgMC01Ljg4IDQuODAxbDEuOTYuMzk4WiIgZmlsbD0iI0ZDNDU3QiIvPjwvZz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/nav/user-alt.svg
var user_alt_defProp = Object.defineProperty;
var user_alt_getOwnPropSymbols = Object.getOwnPropertySymbols;
var user_alt_hasOwnProp = Object.prototype.hasOwnProperty;
var user_alt_propIsEnum = Object.prototype.propertyIsEnumerable;
var user_alt_defNormalProp = (obj, key, value) => key in obj ? user_alt_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var user_alt_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (user_alt_hasOwnProp.call(b, prop))
      user_alt_defNormalProp(a, prop, b[prop]);
  if (user_alt_getOwnPropSymbols)
    for (var prop of user_alt_getOwnPropSymbols(b)) {
      if (user_alt_propIsEnum.call(b, prop))
        user_alt_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgUserAlt = (props) => /* @__PURE__ */ React.createElement("svg", user_alt_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 24, height: 24 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "user-alt_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 24, height: 24, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#user-alt_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M9.236 13.167a1 1 0 1 0-1.107 1.666l1.107-1.666Zm6.635 1.666a1 1 0 0 0-1.107-1.666l1.107 1.666ZM5.546 20.89 6 20l-.454.891Zm-.437-.437L6 20l-.891.454Zm13.782 0L18 20l.891.454Zm-.437.437.454.891-.454-.891Zm.499-4.421-.985.177.985-.177ZM15.32 13a1 1 0 1 0 0 2v-2Zm1.21 1.047-.178.984.177-.984ZM5.047 16.466l.984.178-.984-.178ZM8.684 15a1 1 0 1 0 0-2v2Zm-1.218-.952.178.984-.178-.984ZM15 7a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Zm-3 3a3 3 0 0 1-3-3H7a5 5 0 0 0 5 5v-2ZM9 7a3 3 0 0 1 3-3V2a5 5 0 0 0-5 5h2Zm3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Zm0 10a4.972 4.972 0 0 1-2.764-.833l-1.107 1.666A6.972 6.972 0 0 0 12 16v-2Zm2.764-.833A4.973 4.973 0 0 1 12 14v2c1.43 0 2.762-.43 3.871-1.167l-1.107-1.666ZM18 17.68V19.4h2v-1.721h-2ZM17.4 20H6.6v2h10.8v-2ZM6 19.4v-1.716H4V19.4h2Zm.6.6c-.297 0-.459 0-.575-.01-.105-.009-.083-.02-.025.01l-.908 1.782c.271.138.541.182.77.201.217.018.474.017.738.017v-2ZM4 19.4c0 .264 0 .521.017.738.019.229.063.499.201.77L6 20c.03.058.019.08.01-.025A8.194 8.194 0 0 1 6 19.4H4Zm2 .6-1.782.908a2 2 0 0 0 .874.874L6 20Zm12-.6c0 .297 0 .459-.01.575-.009.105-.02.082.01.025l1.782.908c.138-.271.182-.541.201-.77.018-.217.017-.475.017-.738h-2Zm-.6 2.6c.263 0 .521 0 .738-.017.229-.019.499-.063.77-.201L18 20c.057-.03.08-.019-.025-.01-.116.01-.279.01-.575.01v2Zm.6-2 .908 1.782a2 2 0 0 0 .874-.874L18 20Zm2-2.321c0-.588.004-1.013-.063-1.386l-1.969.354c.028.153.032.358.032 1.032h2ZM15.321 15c.674 0 .88.004 1.032.031l.354-1.968c-.373-.067-.798-.063-1.386-.063v2Zm4.616 1.293a4 4 0 0 0-3.23-3.23l-.354 1.968a2 2 0 0 1 1.615 1.615l1.969-.353ZM6 17.684c0-.68.004-.886.032-1.04l-1.968-.357c-.068.376-.064.805-.064 1.397h2ZM8.684 13c-.592 0-1.02-.004-1.397.064l.357 1.968c.154-.028.36-.032 1.04-.032v-2Zm-2.652 3.644a2 2 0 0 1 1.612-1.612l-.357-1.968a4 4 0 0 0-3.223 3.223l1.968.357Z", fill: "#000", fillOpacity: 0.8 })));

/* harmony default export */ var user_alt = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNOS4yMzYgMTMuMTY3YTEgMSAwIDEgMC0xLjEwNyAxLjY2NmwxLjEwNy0xLjY2NlptNi42MzUgMS42NjZhMSAxIDAgMCAwLTEuMTA3LTEuNjY2bDEuMTA3IDEuNjY2Wk01LjU0NiAyMC44OSA2IDIwbC0uNDU0Ljg5MVptLS40MzctLjQzN0w2IDIwbC0uODkxLjQ1NFptMTMuNzgyIDBMMTggMjBsLjg5MS40NTRabS0uNDM3LjQzNy40NTQuODkxLS40NTQtLjg5MVptLjQ5OS00LjQyMS0uOTg1LjE3Ny45ODUtLjE3N1pNMTUuMzIgMTNhMSAxIDAgMSAwIDAgMnYtMlptMS4yMSAxLjA0Ny0uMTc4Ljk4NC4xNzctLjk4NFpNNS4wNDcgMTYuNDY2bC45ODQuMTc4LS45ODQtLjE3OFpNOC42ODQgMTVhMSAxIDAgMSAwIDAtMnYyWm0tMS4yMTgtLjk1Mi4xNzguOTg0LS4xNzgtLjk4NFpNMTUgN2EzIDMgMCAwIDEtMyAzdjJhNSA1IDAgMCAwIDUtNWgtMlptLTMgM2EzIDMgMCAwIDEtMy0zSDdhNSA1IDAgMCAwIDUgNXYtMlpNOSA3YTMgMyAwIDAgMSAzLTNWMmE1IDUgMCAwIDAtNSA1aDJabTMtM2EzIDMgMCAwIDEgMyAzaDJhNSA1IDAgMCAwLTUtNXYyWm0wIDEwYTQuOTcyIDQuOTcyIDAgMCAxLTIuNzY0LS44MzNsLTEuMTA3IDEuNjY2QTYuOTcyIDYuOTcyIDAgMCAwIDEyIDE2di0yWm0yLjc2NC0uODMzQTQuOTczIDQuOTczIDAgMCAxIDEyIDE0djJjMS40MyAwIDIuNzYyLS40MyAzLjg3MS0xLjE2N2wtMS4xMDctMS42NjZaTTE4IDE3LjY4VjE5LjRoMnYtMS43MjFoLTJaTTE3LjQgMjBINi42djJoMTAuOHYtMlpNNiAxOS40di0xLjcxNkg0VjE5LjRoMlptLjYuNmMtLjI5NyAwLS40NTkgMC0uNTc1LS4wMS0uMTA1LS4wMDktLjA4My0uMDItLjAyNS4wMWwtLjkwOCAxLjc4MmMuMjcxLjEzOC41NDEuMTgyLjc3LjIwMS4yMTcuMDE4LjQ3NC4wMTcuNzM4LjAxN3YtMlpNNCAxOS40YzAgLjI2NCAwIC41MjEuMDE3LjczOC4wMTkuMjI5LjA2My40OTkuMjAxLjc3TDYgMjBjLjAzLjA1OC4wMTkuMDguMDEtLjAyNUE4LjE5NCA4LjE5NCAwIDAgMSA2IDE5LjRINFptMiAuNi0xLjc4Mi45MDhhMiAyIDAgMCAwIC44NzQuODc0TDYgMjBabTEyLS42YzAgLjI5NyAwIC40NTktLjAxLjU3NS0uMDA5LjEwNS0uMDIuMDgyLjAxLjAyNWwxLjc4Mi45MDhjLjEzOC0uMjcxLjE4Mi0uNTQxLjIwMS0uNzcuMDE4LS4yMTcuMDE3LS40NzUuMDE3LS43MzhoLTJabS0uNiAyLjZjLjI2MyAwIC41MjEgMCAuNzM4LS4wMTcuMjI5LS4wMTkuNDk5LS4wNjMuNzctLjIwMUwxOCAyMGMuMDU3LS4wMy4wOC0uMDE5LS4wMjUtLjAxLS4xMTYuMDEtLjI3OS4wMS0uNTc1LjAxdjJabS42LTIgLjkwOCAxLjc4MmEyIDIgMCAwIDAgLjg3NC0uODc0TDE4IDIwWm0yLTIuMzIxYzAtLjU4OC4wMDQtMS4wMTMtLjA2My0xLjM4NmwtMS45NjkuMzU0Yy4wMjguMTUzLjAzMi4zNTguMDMyIDEuMDMyaDJaTTE1LjMyMSAxNWMuNjc0IDAgLjg4LjAwNCAxLjAzMi4wMzFsLjM1NC0xLjk2OGMtLjM3My0uMDY3LS43OTgtLjA2My0xLjM4Ni0uMDYzdjJabTQuNjE2IDEuMjkzYTQgNCAwIDAgMC0zLjIzLTMuMjNsLS4zNTQgMS45NjhhMiAyIDAgMCAxIDEuNjE1IDEuNjE1bDEuOTY5LS4zNTNaTTYgMTcuNjg0YzAtLjY4LjAwNC0uODg2LjAzMi0xLjA0bC0xLjk2OC0uMzU3Yy0uMDY4LjM3Ni0uMDY0LjgwNS0uMDY0IDEuMzk3aDJaTTguNjg0IDEzYy0uNTkyIDAtMS4wMi0uMDA0LTEuMzk3LjA2NGwuMzU3IDEuOTY4Yy4xNTQtLjAyOC4zNi0uMDMyIDEuMDQtLjAzMnYtMlptLTIuNjUyIDMuNjQ0YTIgMiAwIDAgMSAxLjYxMi0xLjYxMmwtLjM1Ny0xLjk2OGE0IDQgMCAwIDAtMy4yMjMgMy4yMjNsMS45NjguMzU3WiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuOCIvPjwvZz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/nav/user-alt-active.svg
var user_alt_active_defProp = Object.defineProperty;
var user_alt_active_getOwnPropSymbols = Object.getOwnPropertySymbols;
var user_alt_active_hasOwnProp = Object.prototype.hasOwnProperty;
var user_alt_active_propIsEnum = Object.prototype.propertyIsEnumerable;
var user_alt_active_defNormalProp = (obj, key, value) => key in obj ? user_alt_active_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var user_alt_active_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (user_alt_active_hasOwnProp.call(b, prop))
      user_alt_active_defNormalProp(a, prop, b[prop]);
  if (user_alt_active_getOwnPropSymbols)
    for (var prop of user_alt_active_getOwnPropSymbols(b)) {
      if (user_alt_active_propIsEnum.call(b, prop))
        user_alt_active_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgUserAltActive = (props) => /* @__PURE__ */ React.createElement("svg", user_alt_active_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 24, height: 24 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "user-alt-active_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 24, height: 24, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#user-alt-active_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "M9.236 13.167a1 1 0 1 0-1.107 1.666l1.107-1.666Zm6.635 1.666a1 1 0 0 0-1.107-1.666l1.107 1.666ZM5.546 20.89 6 20l-.454.891Zm-.437-.437L6 20l-.891.454Zm13.782 0L18 20l.891.454Zm-.437.437.454.891-.454-.891Zm.499-4.421-.985.177.985-.177ZM15.32 13a1 1 0 1 0 0 2v-2Zm1.21 1.047-.178.984.177-.984ZM5.047 16.466l.984.178-.984-.178ZM8.684 15a1 1 0 1 0 0-2v2Zm-1.218-.952.178.984-.178-.984ZM15 7a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Zm-3 3a3 3 0 0 1-3-3H7a5 5 0 0 0 5 5v-2ZM9 7a3 3 0 0 1 3-3V2a5 5 0 0 0-5 5h2Zm3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Zm0 10a4.972 4.972 0 0 1-2.764-.833l-1.107 1.666A6.972 6.972 0 0 0 12 16v-2Zm2.764-.833A4.973 4.973 0 0 1 12 14v2c1.43 0 2.762-.43 3.871-1.167l-1.107-1.666ZM18 17.68V19.4h2v-1.721h-2ZM17.4 20H6.6v2h10.8v-2ZM6 19.4v-1.716H4V19.4h2Zm.6.6c-.297 0-.459 0-.575-.01-.105-.009-.083-.02-.025.01l-.908 1.782c.271.138.541.182.77.201.217.018.474.017.738.017v-2ZM4 19.4c0 .264 0 .521.017.738.019.229.063.499.201.77L6 20c.03.058.019.08.01-.025A8.194 8.194 0 0 1 6 19.4H4Zm2 .6-1.782.908a2 2 0 0 0 .874.874L6 20Zm12-.6c0 .297 0 .459-.01.575-.009.105-.02.082.01.025l1.782.908c.138-.271.182-.541.201-.77.018-.217.017-.475.017-.738h-2Zm-.6 2.6c.263 0 .521 0 .738-.017.229-.019.499-.063.77-.201L18 20c.057-.03.08-.019-.025-.01-.116.01-.279.01-.575.01v2Zm.6-2 .908 1.782a2 2 0 0 0 .874-.874L18 20Zm2-2.321c0-.588.004-1.013-.063-1.386l-1.969.354c.028.153.032.358.032 1.032h2ZM15.321 15c.674 0 .88.004 1.032.031l.354-1.968c-.373-.067-.798-.063-1.386-.063v2Zm4.616 1.293a4 4 0 0 0-3.23-3.23l-.354 1.968a2 2 0 0 1 1.615 1.615l1.969-.353ZM6 17.684c0-.68.004-.886.032-1.04l-1.968-.357c-.068.376-.064.805-.064 1.397h2ZM8.684 13c-.592 0-1.02-.004-1.397.064l.357 1.968c.154-.028.36-.032 1.04-.032v-2Zm-2.652 3.644a2 2 0 0 1 1.612-1.612l-.357-1.968a4 4 0 0 0-3.223 3.223l1.968.357Z", fill: "#FC457B" })));

/* harmony default export */ var user_alt_active = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNOS4yMzYgMTMuMTY3YTEgMSAwIDEgMC0xLjEwNyAxLjY2NmwxLjEwNy0xLjY2NlptNi42MzUgMS42NjZhMSAxIDAgMCAwLTEuMTA3LTEuNjY2bDEuMTA3IDEuNjY2Wk01LjU0NiAyMC44OSA2IDIwbC0uNDU0Ljg5MVptLS40MzctLjQzN0w2IDIwbC0uODkxLjQ1NFptMTMuNzgyIDBMMTggMjBsLjg5MS40NTRabS0uNDM3LjQzNy40NTQuODkxLS40NTQtLjg5MVptLjQ5OS00LjQyMS0uOTg1LjE3Ny45ODUtLjE3N1pNMTUuMzIgMTNhMSAxIDAgMSAwIDAgMnYtMlptMS4yMSAxLjA0Ny0uMTc4Ljk4NC4xNzctLjk4NFpNNS4wNDcgMTYuNDY2bC45ODQuMTc4LS45ODQtLjE3OFpNOC42ODQgMTVhMSAxIDAgMSAwIDAtMnYyWm0tMS4yMTgtLjk1Mi4xNzguOTg0LS4xNzgtLjk4NFpNMTUgN2EzIDMgMCAwIDEtMyAzdjJhNSA1IDAgMCAwIDUtNWgtMlptLTMgM2EzIDMgMCAwIDEtMy0zSDdhNSA1IDAgMCAwIDUgNXYtMlpNOSA3YTMgMyAwIDAgMSAzLTNWMmE1IDUgMCAwIDAtNSA1aDJabTMtM2EzIDMgMCAwIDEgMyAzaDJhNSA1IDAgMCAwLTUtNXYyWm0wIDEwYTQuOTcyIDQuOTcyIDAgMCAxLTIuNzY0LS44MzNsLTEuMTA3IDEuNjY2QTYuOTcyIDYuOTcyIDAgMCAwIDEyIDE2di0yWm0yLjc2NC0uODMzQTQuOTczIDQuOTczIDAgMCAxIDEyIDE0djJjMS40MyAwIDIuNzYyLS40MyAzLjg3MS0xLjE2N2wtMS4xMDctMS42NjZaTTE4IDE3LjY4VjE5LjRoMnYtMS43MjFoLTJaTTE3LjQgMjBINi42djJoMTAuOHYtMlpNNiAxOS40di0xLjcxNkg0VjE5LjRoMlptLjYuNmMtLjI5NyAwLS40NTkgMC0uNTc1LS4wMS0uMTA1LS4wMDktLjA4My0uMDItLjAyNS4wMWwtLjkwOCAxLjc4MmMuMjcxLjEzOC41NDEuMTgyLjc3LjIwMS4yMTcuMDE4LjQ3NC4wMTcuNzM4LjAxN3YtMlpNNCAxOS40YzAgLjI2NCAwIC41MjEuMDE3LjczOC4wMTkuMjI5LjA2My40OTkuMjAxLjc3TDYgMjBjLjAzLjA1OC4wMTkuMDguMDEtLjAyNUE4LjE5NCA4LjE5NCAwIDAgMSA2IDE5LjRINFptMiAuNi0xLjc4Mi45MDhhMiAyIDAgMCAwIC44NzQuODc0TDYgMjBabTEyLS42YzAgLjI5NyAwIC40NTktLjAxLjU3NS0uMDA5LjEwNS0uMDIuMDgyLjAxLjAyNWwxLjc4Mi45MDhjLjEzOC0uMjcxLjE4Mi0uNTQxLjIwMS0uNzcuMDE4LS4yMTcuMDE3LS40NzUuMDE3LS43MzhoLTJabS0uNiAyLjZjLjI2MyAwIC41MjEgMCAuNzM4LS4wMTcuMjI5LS4wMTkuNDk5LS4wNjMuNzctLjIwMUwxOCAyMGMuMDU3LS4wMy4wOC0uMDE5LS4wMjUtLjAxLS4xMTYuMDEtLjI3OS4wMS0uNTc1LjAxdjJabS42LTIgLjkwOCAxLjc4MmEyIDIgMCAwIDAgLjg3NC0uODc0TDE4IDIwWm0yLTIuMzIxYzAtLjU4OC4wMDQtMS4wMTMtLjA2My0xLjM4NmwtMS45NjkuMzU0Yy4wMjguMTUzLjAzMi4zNTguMDMyIDEuMDMyaDJaTTE1LjMyMSAxNWMuNjc0IDAgLjg4LjAwNCAxLjAzMi4wMzFsLjM1NC0xLjk2OGMtLjM3My0uMDY3LS43OTgtLjA2My0xLjM4Ni0uMDYzdjJabTQuNjE2IDEuMjkzYTQgNCAwIDAgMC0zLjIzLTMuMjNsLS4zNTQgMS45NjhhMiAyIDAgMCAxIDEuNjE1IDEuNjE1bDEuOTY5LS4zNTNaTTYgMTcuNjg0YzAtLjY4LjAwNC0uODg2LjAzMi0xLjA0bC0xLjk2OC0uMzU3Yy0uMDY4LjM3Ni0uMDY0LjgwNS0uMDY0IDEuMzk3aDJaTTguNjg0IDEzYy0uNTkyIDAtMS4wMi0uMDA0LTEuMzk3LjA2NGwuMzU3IDEuOTY4Yy4xNTQtLjAyOC4zNi0uMDMyIDEuMDQtLjAzMnYtMlptLTIuNjUyIDMuNjQ0YTIgMiAwIDAgMSAxLjYxMi0xLjYxMmwtLjM1Ny0xLjk2OGE0IDQgMCAwIDAtMy4yMjMgMy4yMjNsMS45NjguMzU3WiIgZmlsbD0iI0ZDNDU3QiIvPjwvZz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/nav/gear.svg
var gear_defProp = Object.defineProperty;
var gear_getOwnPropSymbols = Object.getOwnPropertySymbols;
var gear_hasOwnProp = Object.prototype.hasOwnProperty;
var gear_propIsEnum = Object.prototype.propertyIsEnumerable;
var gear_defNormalProp = (obj, key, value) => key in obj ? gear_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var gear_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (gear_hasOwnProp.call(b, prop))
      gear_defNormalProp(a, prop, b[prop]);
  if (gear_getOwnPropSymbols)
    for (var prop of gear_getOwnPropSymbols(b)) {
      if (gear_propIsEnum.call(b, prop))
        gear_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgGear = (props) => /* @__PURE__ */ React.createElement("svg", gear_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 24, height: 24 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "gear_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 24, height: 24, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#gear_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "m12.905 3.06.28-.96-.28.96Zm.76.515-.787.617.788-.617Zm-.76 17.365.28.96-.28-.96Zm.76-.515.788.616-.787-.616Zm-2.57.515-.28.96.28-.96Zm-.76-.515-.787.616.787-.616Zm.76-17.365.28.96-.28-.96Zm-.76.515-.787-.616.787.616ZM7.798 4.933l-.316.948.316-.948Zm8.36 14.12-.316.948.316-.948Zm2.895-2.895.948-.316-.948.316ZM6.157 4.916l.499.867-.499-.867Zm.835-.197-.058.998.058-.998Zm12.112 13.088.88.474-.88-.474Zm.179-.758-1 .03 1-.03Zm-1.476 2.055.474.88-.474-.88Zm-.758.18-.031.999.03-1ZM4.949 6.131l.874.486-.874-.486Zm-.181.884-.995.102.995-.102Zm11.434-2.083.316.948-.316-.948ZM4.948 16.158l.948.317-.948-.317Zm2.894 2.895-.316-.949.316.949Zm10-14.137.5-.867-.5.867Zm-.834-.197.058.998-.058-.998ZM4.896 17.807l-.88.474.88-.474Zm-.179-.758 1 .03-1-.03Zm1.477 2.055-.475.88.475-.88Zm.758.18.03.999-.03-1ZM19.05 6.131l-.874.486.874-.486Zm.181.883.995.103-.995-.103ZM4.166 9.801l.514.857-.514-.857Zm15.67 0-.515.857.514-.857ZM3.07 10.893l.953.304-.953-.304Zm.303-.534-.751-.66.75.66Zm17.555.534-.952.304.952-.304Zm-.302-.534-.751.66.75-.66Zm.279 2.65-.937-.35.937.35Zm-.397.586-.672-.74.672.74Zm-17.414-.586.937-.35-.937.35Zm.397.586-.673.74.673-.74Zm15.346 1.918.948-.316-.948.316ZM8.369 18.877l-.316-.949.316.95Zm11.188-9.243-.514.858.514-.858ZM8.37 5.123l-.316.949.316-.949Zm-3.206 10.39-.949-.316.949.316Zm10.469 3.364-.317.949.317-.949Zm0-13.754.316.949-.316-.95ZM12 4c.529 0 .59.01.625.02l.56-1.92C12.809 1.99 12.403 2 12 2v2Zm2.986.021c-.15-.374-.292-.754-.533-1.062l-1.575 1.233c.023.029.055.081.25.572l1.858-.743Zm-2.361-.001c.1.03.189.09.253.172l1.575-1.233a2.5 2.5 0 0 0-1.268-.859l-.56 1.92ZM12 22c.403 0 .81.01 1.185-.1l-.56-1.92c-.036.01-.096.02-.625.02v2Zm1.129-2.764c-.196.49-.228.543-.25.572l1.574 1.233c.242-.308.383-.688.533-1.062l-1.857-.743Zm.056 2.664a2.5 2.5 0 0 0 1.268-.859l-1.575-1.233a.5.5 0 0 1-.253.172l.56 1.92ZM12 20c-.528 0-.589-.01-.624-.02l-.56 1.92c.376.11.781.1 1.184.1v-2Zm-2.985-.021c.15.374.291.754.533 1.062l1.574-1.233c-.023-.029-.054-.081-.25-.572l-1.857.743Zm2.36.001a.5.5 0 0 1-.253-.172l-1.574 1.233a2.5 2.5 0 0 0 1.268.859l.56-1.92ZM12 2c-.403 0-.808-.01-1.184.1l.56 1.92c.035-.01.096-.02.624-.02V2Zm-1.128 2.764c.196-.49.227-.543.25-.572L9.548 2.959c-.242.308-.383.688-.533 1.062l1.857.743ZM10.816 2.1a2.5 2.5 0 0 0-1.268.859l1.574 1.233a.5.5 0 0 1 .254-.172l-.56-1.92ZM8.685 4.174l-.57-.19-.633 1.898.57.19.633-1.898Zm6.63 15.652.527.175.633-1.897-.527-.175-.633 1.897Zm4.686-3.984-.215-.645-1.897.633.215.645 1.897-.633ZM6.24 6.175c.342-.342.387-.375.417-.392l-.997-1.734c-.315.181-.572.45-.834.712L6.24 6.175Zm1.875-2.19c-.35-.118-.701-.243-1.064-.265l-.116 1.997c.035.002.089.012.548.164l.632-1.897ZM6.656 5.782a.5.5 0 0 1 .278-.066L7.05 3.72a2.5 2.5 0 0 0-1.391.329l.997 1.734Zm12.551 13.424c.289-.289.587-.573.777-.926l-1.76-.949c-.018.034-.053.083-.431.461l1.414 1.414Zm-1.103-2.732c.169.507.178.566.18.604l1.998-.061c-.012-.401-.152-.789-.28-1.176l-1.898.633Zm1.88 1.806a2.5 2.5 0 0 0 .298-1.263l-1.998.061a.5.5 0 0 1-.06.253l1.76.95Zm-2.191-.488c-.378.378-.427.413-.461.431l.95 1.76c.352-.19.636-.488.925-.777l-1.414-1.414Zm-1.951 2.208c.387.13.775.27 1.176.282l.061-2c-.038 0-.098-.01-.605-.179l-.632 1.897Zm1.49-1.777a.5.5 0 0 1-.253.06l-.061 1.999a2.5 2.5 0 0 0 1.263-.299l-.949-1.76ZM4.825 4.761c-.278.277-.563.55-.75.885l1.748.972c.018-.032.053-.08.416-.443L4.825 4.76Zm1.146 2.723c-.191-.477-.205-.535-.208-.571l-1.99.205c.04.381.195.744.34 1.11l1.858-.744ZM4.076 5.646a2.5 2.5 0 0 0-.303 1.472l1.99-.205a.5.5 0 0 1 .06-.295l-1.747-.972Zm11.872.426.57-.19-.632-1.898-.57.19.632 1.898ZM5.896 16.475l.215-.646-1.897-.632-.215.645 1.897.633Zm2.157 1.453-.527.176.632 1.897.527-.175-.632-1.898ZM19.175 4.761c-.262-.262-.519-.531-.834-.712l-.997 1.734c.03.017.075.05.417.392l1.414-1.414Zm-2.657 1.12c.46-.153.514-.162.548-.164L16.95 3.72c-.363.022-.713.147-1.064.264l.632 1.897Zm1.823-1.832a2.5 2.5 0 0 0-1.391-.329l.116 1.997a.5.5 0 0 1 .278.066l.997-1.734ZM6.207 17.793c-.377-.378-.412-.427-.43-.46l-1.761.948c.19.353.489.637.777.926l1.414-1.414ZM4 15.843c-.13.386-.269.774-.281 1.175l1.999.061c0-.038.01-.098.18-.604l-1.898-.633Zm1.777 1.49a.5.5 0 0 1-.06-.254l-1.998-.061a2.5 2.5 0 0 0 .298 1.263l1.76-.949Zm-.983 1.874c.289.289.573.587.926.777l.95-1.76c-.034-.018-.084-.053-.462-.431l-1.414 1.414Zm2.733-1.103c-.507.17-.567.178-.605.18l.062 1.999c.4-.013.788-.152 1.175-.282l-.632-1.897Zm-1.807 1.88a2.5 2.5 0 0 0 1.264.299l-.062-2a.5.5 0 0 1-.253-.06l-.949 1.761Zm12.042-13.81c.364.365.399.412.416.444l1.748-.972c-.186-.335-.472-.608-.75-.885l-1.414 1.414Zm2.126 2.053c.145-.365.3-.728.34-1.109l-1.99-.205c-.003.036-.016.094-.207.571l1.857.743Zm-1.71-1.609a.5.5 0 0 1 .06.295l1.99.205a2.5 2.5 0 0 0-.302-1.472l-1.748.972ZM3.928 8.777l-.277.166 1.03 1.715.277-.166-1.03-1.715Zm16.422.166-.278-.166-1.03 1.715.279.166 1.029-1.715ZM4 11.866c0-.567.012-.63.024-.669l-1.905-.608c-.13.406-.119.844-.119 1.277h2Zm-.349-2.923c-.368.221-.746.435-1.028.755l1.502 1.321c.027-.03.073-.072.555-.36L3.651 8.942Zm.373 2.254a.5.5 0 0 1 .1-.178L2.624 9.7a2.5 2.5 0 0 0-.504.89l1.905.608Zm17.976.67c0-.434.012-.872-.118-1.278l-1.905.608c.012.039.023.102.023.67h2Zm-2.68-1.209c.482.29.529.33.556.361l1.502-1.32c-.282-.32-.66-.535-1.028-.756l-1.03 1.715Zm2.562-.07a2.5 2.5 0 0 0-.504-.89l-1.502 1.321a.5.5 0 0 1 .1.178l1.906-.608ZM20 11.867c0 .674-.015.75-.031.793l1.874.7c.173-.464.157-.981.157-1.493h-2Zm-.137 3.166c.47-.188.953-.365 1.319-.697l-1.345-1.48c-.035.031-.098.072-.717.32l.743 1.857Zm.106-2.373a.5.5 0 0 1-.132.195l1.345 1.48a2.5 2.5 0 0 0 .66-.976l-1.873-.699ZM2 11.866c0 .512-.015 1.029.158 1.492l1.874-.699c-.016-.043-.032-.12-.032-.793H2Zm2.88 1.309c-.618-.248-.681-.289-.716-.32l-1.345 1.48c.366.332.848.509 1.319.697l.742-1.857Zm-2.722.183a2.5 2.5 0 0 0 .661.977l1.345-1.48a.5.5 0 0 1-.132-.196l-1.874.7ZM14 12a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4h-2Zm-2 2a2 2 0 0 1-2-2H8a4 4 0 0 0 4 4v-2Zm-2-2a2 2 0 0 1 2-2V8a4 4 0 0 0-4 4h2Zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2Zm7.786 5.197a.133.133 0 0 1 .077-.165l-.743-1.857a2.133 2.133 0 0 0-1.231 2.655l1.897-.633Zm-8.914 4.039a2.265 2.265 0 0 0-2.82-1.308l.633 1.898a.265.265 0 0 1 .33.153l1.857-.743ZM18.03 7.484a2.447 2.447 0 0 0 1.013 3.008l1.029-1.715a.447.447 0 0 1-.185-.55l-1.857-.743ZM9.015 4.021a.265.265 0 0 1-.33.153l-.632 1.898a2.265 2.265 0 0 0 2.819-1.308l-1.857-.743ZM4.114 8.227a.447.447 0 0 1-.186.55l1.03 1.715A2.447 2.447 0 0 0 5.97 7.484l-1.857.743ZM6.11 15.83a2.132 2.132 0 0 0-1.23-2.654l-.743 1.857a.132.132 0 0 1 .076.165l1.897.632Zm8.875 4.15a.265.265 0 0 1 .33-.153l.632-1.897a2.265 2.265 0 0 0-2.82 1.307l1.858.743ZM13.129 4.764a2.265 2.265 0 0 0 2.819 1.308l-.633-1.898a.265.265 0 0 1-.33-.153l-1.856.743Z", fill: "#000", fillOpacity: 0.8 })));

/* harmony default export */ var gear = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJtMTIuOTA1IDMuMDYuMjgtLjk2LS4yOC45NlptLjc2LjUxNS0uNzg3LjYxNy43ODgtLjYxN1ptLS43NiAxNy4zNjUuMjguOTYtLjI4LS45NlptLjc2LS41MTUuNzg4LjYxNi0uNzg3LS42MTZabS0yLjU3LjUxNS0uMjguOTYuMjgtLjk2Wm0tLjc2LS41MTUtLjc4Ny42MTYuNzg3LS42MTZabS43Ni0xNy4zNjUuMjguOTYtLjI4LS45NlptLS43Ni41MTUtLjc4Ny0uNjE2Ljc4Ny42MTZaTTcuNzk4IDQuOTMzbC0uMzE2Ljk0OC4zMTYtLjk0OFptOC4zNiAxNC4xMi0uMzE2Ljk0OC4zMTYtLjk0OFptMi44OTUtMi44OTUuOTQ4LS4zMTYtLjk0OC4zMTZaTTYuMTU3IDQuOTE2bC40OTkuODY3LS40OTktLjg2N1ptLjgzNS0uMTk3LS4wNTguOTk4LjA1OC0uOTk4Wm0xMi4xMTIgMTMuMDg4Ljg4LjQ3NC0uODgtLjQ3NFptLjE3OS0uNzU4LTEgLjAzIDEtLjAzWm0tMS40NzYgMi4wNTUuNDc0Ljg4LS40NzQtLjg4Wm0tLjc1OC4xOC0uMDMxLjk5OS4wMy0xWk00Ljk0OSA2LjEzMWwuODc0LjQ4Ni0uODc0LS40ODZabS0uMTgxLjg4NC0uOTk1LjEwMi45OTUtLjEwMlptMTEuNDM0LTIuMDgzLjMxNi45NDgtLjMxNi0uOTQ4Wk00Ljk0OCAxNi4xNThsLjk0OC4zMTctLjk0OC0uMzE3Wm0yLjg5NCAyLjg5NS0uMzE2LS45NDkuMzE2Ljk0OVptMTAtMTQuMTM3LjUtLjg2Ny0uNS44NjdabS0uODM0LS4xOTcuMDU4Ljk5OC0uMDU4LS45OThaTTQuODk2IDE3LjgwN2wtLjg4LjQ3NC44OC0uNDc0Wm0tLjE3OS0uNzU4IDEgLjAzLTEtLjAzWm0xLjQ3NyAyLjA1NS0uNDc1Ljg4LjQ3NS0uODhabS43NTguMTguMDMuOTk5LS4wMy0xWk0xOS4wNSA2LjEzMWwtLjg3NC40ODYuODc0LS40ODZabS4xODEuODgzLjk5NS4xMDMtLjk5NS0uMTAzWk00LjE2NiA5LjgwMWwuNTE0Ljg1Ny0uNTE0LS44NTdabTE1LjY3IDAtLjUxNS44NTcuNTE0LS44NTdaTTMuMDcgMTAuODkzbC45NTMuMzA0LS45NTMtLjMwNFptLjMwMy0uNTM0LS43NTEtLjY2Ljc1LjY2Wm0xNy41NTUuNTM0LS45NTIuMzA0Ljk1Mi0uMzA0Wm0tLjMwMi0uNTM0LS43NTEuNjYuNzUtLjY2Wm0uMjc5IDIuNjUtLjkzNy0uMzUuOTM3LjM1Wm0tLjM5Ny41ODYtLjY3Mi0uNzQuNjcyLjc0Wm0tMTcuNDE0LS41ODYuOTM3LS4zNS0uOTM3LjM1Wm0uMzk3LjU4Ni0uNjczLjc0LjY3My0uNzRabTE1LjM0NiAxLjkxOC45NDgtLjMxNi0uOTQ4LjMxNlpNOC4zNjkgMTguODc3bC0uMzE2LS45NDkuMzE2Ljk1Wm0xMS4xODgtOS4yNDMtLjUxNC44NTguNTE0LS44NThaTTguMzcgNS4xMjNsLS4zMTYuOTQ5LjMxNi0uOTQ5Wm0tMy4yMDYgMTAuMzktLjk0OS0uMzE2Ljk0OS4zMTZabTEwLjQ2OSAzLjM2NC0uMzE3Ljk0OS4zMTctLjk0OVptMC0xMy43NTQuMzE2Ljk0OS0uMzE2LS45NVpNMTIgNGMuNTI5IDAgLjU5LjAxLjYyNS4wMmwuNTYtMS45MkMxMi44MDkgMS45OSAxMi40MDMgMiAxMiAydjJabTIuOTg2LjAyMWMtLjE1LS4zNzQtLjI5Mi0uNzU0LS41MzMtMS4wNjJsLTEuNTc1IDEuMjMzYy4wMjMuMDI5LjA1NS4wODEuMjUuNTcybDEuODU4LS43NDNabS0yLjM2MS0uMDAxYy4xLjAzLjE4OS4wOS4yNTMuMTcybDEuNTc1LTEuMjMzYTIuNSAyLjUgMCAwIDAtMS4yNjgtLjg1OWwtLjU2IDEuOTJaTTEyIDIyYy40MDMgMCAuODEuMDEgMS4xODUtLjFsLS41Ni0xLjkyYy0uMDM2LjAxLS4wOTYuMDItLjYyNS4wMnYyWm0xLjEyOS0yLjc2NGMtLjE5Ni40OS0uMjI4LjU0My0uMjUuNTcybDEuNTc0IDEuMjMzYy4yNDItLjMwOC4zODMtLjY4OC41MzMtMS4wNjJsLTEuODU3LS43NDNabS4wNTYgMi42NjRhMi41IDIuNSAwIDAgMCAxLjI2OC0uODU5bC0xLjU3NS0xLjIzM2EuNS41IDAgMCAxLS4yNTMuMTcybC41NiAxLjkyWk0xMiAyMGMtLjUyOCAwLS41ODktLjAxLS42MjQtLjAybC0uNTYgMS45MmMuMzc2LjExLjc4MS4xIDEuMTg0LjF2LTJabS0yLjk4NS0uMDIxYy4xNS4zNzQuMjkxLjc1NC41MzMgMS4wNjJsMS41NzQtMS4yMzNjLS4wMjMtLjAyOS0uMDU0LS4wODEtLjI1LS41NzJsLTEuODU3Ljc0M1ptMi4zNi4wMDFhLjUuNSAwIDAgMS0uMjUzLS4xNzJsLTEuNTc0IDEuMjMzYTIuNSAyLjUgMCAwIDAgMS4yNjguODU5bC41Ni0xLjkyWk0xMiAyYy0uNDAzIDAtLjgwOC0uMDEtMS4xODQuMWwuNTYgMS45MmMuMDM1LS4wMS4wOTYtLjAyLjYyNC0uMDJWMlptLTEuMTI4IDIuNzY0Yy4xOTYtLjQ5LjIyNy0uNTQzLjI1LS41NzJMOS41NDggMi45NTljLS4yNDIuMzA4LS4zODMuNjg4LS41MzMgMS4wNjJsMS44NTcuNzQzWk0xMC44MTYgMi4xYTIuNSAyLjUgMCAwIDAtMS4yNjguODU5bDEuNTc0IDEuMjMzYS41LjUgMCAwIDEgLjI1NC0uMTcybC0uNTYtMS45MlpNOC42ODUgNC4xNzRsLS41Ny0uMTktLjYzMyAxLjg5OC41Ny4xOS42MzMtMS44OThabTYuNjMgMTUuNjUyLjUyNy4xNzUuNjMzLTEuODk3LS41MjctLjE3NS0uNjMzIDEuODk3Wm00LjY4Ni0zLjk4NC0uMjE1LS42NDUtMS44OTcuNjMzLjIxNS42NDUgMS44OTctLjYzM1pNNi4yNCA2LjE3NWMuMzQyLS4zNDIuMzg3LS4zNzUuNDE3LS4zOTJsLS45OTctMS43MzRjLS4zMTUuMTgxLS41NzIuNDUtLjgzNC43MTJMNi4yNCA2LjE3NVptMS44NzUtMi4xOWMtLjM1LS4xMTgtLjcwMS0uMjQzLTEuMDY0LS4yNjVsLS4xMTYgMS45OTdjLjAzNS4wMDIuMDg5LjAxMi41NDguMTY0bC42MzItMS44OTdaTTYuNjU2IDUuNzgyYS41LjUgMCAwIDEgLjI3OC0uMDY2TDcuMDUgMy43MmEyLjUgMi41IDAgMCAwLTEuMzkxLjMyOWwuOTk3IDEuNzM0Wm0xMi41NTEgMTMuNDI0Yy4yODktLjI4OS41ODctLjU3My43NzctLjkyNmwtMS43Ni0uOTQ5Yy0uMDE4LjAzNC0uMDUzLjA4My0uNDMxLjQ2MWwxLjQxNCAxLjQxNFptLTEuMTAzLTIuNzMyYy4xNjkuNTA3LjE3OC41NjYuMTguNjA0bDEuOTk4LS4wNjFjLS4wMTItLjQwMS0uMTUyLS43ODktLjI4LTEuMTc2bC0xLjg5OC42MzNabTEuODggMS44MDZhMi41IDIuNSAwIDAgMCAuMjk4LTEuMjYzbC0xLjk5OC4wNjFhLjUuNSAwIDAgMS0uMDYuMjUzbDEuNzYuOTVabS0yLjE5MS0uNDg4Yy0uMzc4LjM3OC0uNDI3LjQxMy0uNDYxLjQzMWwuOTUgMS43NmMuMzUyLS4xOS42MzYtLjQ4OC45MjUtLjc3N2wtMS40MTQtMS40MTRabS0xLjk1MSAyLjIwOGMuMzg3LjEzLjc3NS4yNyAxLjE3Ni4yODJsLjA2MS0yYy0uMDM4IDAtLjA5OC0uMDEtLjYwNS0uMTc5bC0uNjMyIDEuODk3Wm0xLjQ5LTEuNzc3YS41LjUgMCAwIDEtLjI1My4wNmwtLjA2MSAxLjk5OWEyLjUgMi41IDAgMCAwIDEuMjYzLS4yOTlsLS45NDktMS43NlpNNC44MjUgNC43NjFjLS4yNzguMjc3LS41NjMuNTUtLjc1Ljg4NWwxLjc0OC45NzJjLjAxOC0uMDMyLjA1My0uMDguNDE2LS40NDNMNC44MjUgNC43NlptMS4xNDYgMi43MjNjLS4xOTEtLjQ3Ny0uMjA1LS41MzUtLjIwOC0uNTcxbC0xLjk5LjIwNWMuMDQuMzgxLjE5NS43NDQuMzQgMS4xMWwxLjg1OC0uNzQ0Wk00LjA3NiA1LjY0NmEyLjUgMi41IDAgMCAwLS4zMDMgMS40NzJsMS45OS0uMjA1YS41LjUgMCAwIDEgLjA2LS4yOTVsLTEuNzQ3LS45NzJabTExLjg3Mi40MjYuNTctLjE5LS42MzItMS44OTgtLjU3LjE5LjYzMiAxLjg5OFpNNS44OTYgMTYuNDc1bC4yMTUtLjY0Ni0xLjg5Ny0uNjMyLS4yMTUuNjQ1IDEuODk3LjYzM1ptMi4xNTcgMS40NTMtLjUyNy4xNzYuNjMyIDEuODk3LjUyNy0uMTc1LS42MzItMS44OThaTTE5LjE3NSA0Ljc2MWMtLjI2Mi0uMjYyLS41MTktLjUzMS0uODM0LS43MTJsLS45OTcgMS43MzRjLjAzLjAxNy4wNzUuMDUuNDE3LjM5MmwxLjQxNC0xLjQxNFptLTIuNjU3IDEuMTJjLjQ2LS4xNTMuNTE0LS4xNjIuNTQ4LS4xNjRMMTYuOTUgMy43MmMtLjM2My4wMjItLjcxMy4xNDctMS4wNjQuMjY0bC42MzIgMS44OTdabTEuODIzLTEuODMyYTIuNSAyLjUgMCAwIDAtMS4zOTEtLjMyOWwuMTE2IDEuOTk3YS41LjUgMCAwIDEgLjI3OC4wNjZsLjk5Ny0xLjczNFpNNi4yMDcgMTcuNzkzYy0uMzc3LS4zNzgtLjQxMi0uNDI3LS40My0uNDZsLTEuNzYxLjk0OGMuMTkuMzUzLjQ4OS42MzcuNzc3LjkyNmwxLjQxNC0xLjQxNFpNNCAxNS44NDNjLS4xMy4zODYtLjI2OS43NzQtLjI4MSAxLjE3NWwxLjk5OS4wNjFjMC0uMDM4LjAxLS4wOTguMTgtLjYwNGwtMS44OTgtLjYzM1ptMS43NzcgMS40OWEuNS41IDAgMCAxLS4wNi0uMjU0bC0xLjk5OC0uMDYxYTIuNSAyLjUgMCAwIDAgLjI5OCAxLjI2M2wxLjc2LS45NDlabS0uOTgzIDEuODc0Yy4yODkuMjg5LjU3My41ODcuOTI2Ljc3N2wuOTUtMS43NmMtLjAzNC0uMDE4LS4wODQtLjA1My0uNDYyLS40MzFsLTEuNDE0IDEuNDE0Wm0yLjczMy0xLjEwM2MtLjUwNy4xNy0uNTY3LjE3OC0uNjA1LjE4bC4wNjIgMS45OTljLjQtLjAxMy43ODgtLjE1MiAxLjE3NS0uMjgybC0uNjMyLTEuODk3Wm0tMS44MDcgMS44OGEyLjUgMi41IDAgMCAwIDEuMjY0LjI5OWwtLjA2Mi0yYS41LjUgMCAwIDEtLjI1My0uMDZsLS45NDkgMS43NjFabTEyLjA0Mi0xMy44MWMuMzY0LjM2NS4zOTkuNDEyLjQxNi40NDRsMS43NDgtLjk3MmMtLjE4Ni0uMzM1LS40NzItLjYwOC0uNzUtLjg4NWwtMS40MTQgMS40MTRabTIuMTI2IDIuMDUzYy4xNDUtLjM2NS4zLS43MjguMzQtMS4xMDlsLTEuOTktLjIwNWMtLjAwMy4wMzYtLjAxNi4wOTQtLjIwNy41NzFsMS44NTcuNzQzWm0tMS43MS0xLjYwOWEuNS41IDAgMCAxIC4wNi4yOTVsMS45OS4yMDVhMi41IDIuNSAwIDAgMC0uMzAyLTEuNDcybC0xLjc0OC45NzJaTTMuOTI4IDguNzc3bC0uMjc3LjE2NiAxLjAzIDEuNzE1LjI3Ny0uMTY2LTEuMDMtMS43MTVabTE2LjQyMi4xNjYtLjI3OC0uMTY2LTEuMDMgMS43MTUuMjc5LjE2NiAxLjAyOS0xLjcxNVpNNCAxMS44NjZjMC0uNTY3LjAxMi0uNjMuMDI0LS42NjlsLTEuOTA1LS42MDhjLS4xMy40MDYtLjExOS44NDQtLjExOSAxLjI3N2gyWm0tLjM0OS0yLjkyM2MtLjM2OC4yMjEtLjc0Ni40MzUtMS4wMjguNzU1bDEuNTAyIDEuMzIxYy4wMjctLjAzLjA3My0uMDcyLjU1NS0uMzZMMy42NTEgOC45NDJabS4zNzMgMi4yNTRhLjUuNSAwIDAgMSAuMS0uMTc4TDIuNjI0IDkuN2EyLjUgMi41IDAgMCAwLS41MDQuODlsMS45MDUuNjA4Wm0xNy45NzYuNjdjMC0uNDM0LjAxMi0uODcyLS4xMTgtMS4yNzhsLTEuOTA1LjYwOGMuMDEyLjAzOS4wMjMuMTAyLjAyMy42N2gyWm0tMi42OC0xLjIwOWMuNDgyLjI5LjUyOS4zMy41NTYuMzYxbDEuNTAyLTEuMzJjLS4yODItLjMyLS42Ni0uNTM1LTEuMDI4LS43NTZsLTEuMDMgMS43MTVabTIuNTYyLS4wN2EyLjUgMi41IDAgMCAwLS41MDQtLjg5bC0xLjUwMiAxLjMyMWEuNS41IDAgMCAxIC4xLjE3OGwxLjkwNi0uNjA4Wk0yMCAxMS44NjdjMCAuNjc0LS4wMTUuNzUtLjAzMS43OTNsMS44NzQuN2MuMTczLS40NjQuMTU3LS45ODEuMTU3LTEuNDkzaC0yWm0tLjEzNyAzLjE2NmMuNDctLjE4OC45NTMtLjM2NSAxLjMxOS0uNjk3bC0xLjM0NS0xLjQ4Yy0uMDM1LjAzMS0uMDk4LjA3Mi0uNzE3LjMybC43NDMgMS44NTdabS4xMDYtMi4zNzNhLjUuNSAwIDAgMS0uMTMyLjE5NWwxLjM0NSAxLjQ4YTIuNSAyLjUgMCAwIDAgLjY2LS45NzZsLTEuODczLS42OTlaTTIgMTEuODY2YzAgLjUxMi0uMDE1IDEuMDI5LjE1OCAxLjQ5MmwxLjg3NC0uNjk5Yy0uMDE2LS4wNDMtLjAzMi0uMTItLjAzMi0uNzkzSDJabTIuODggMS4zMDljLS42MTgtLjI0OC0uNjgxLS4yODktLjcxNi0uMzJsLTEuMzQ1IDEuNDhjLjM2Ni4zMzIuODQ4LjUwOSAxLjMxOS42OTdsLjc0Mi0xLjg1N1ptLTIuNzIyLjE4M2EyLjUgMi41IDAgMCAwIC42NjEuOTc3bDEuMzQ1LTEuNDhhLjUuNSAwIDAgMS0uMTMyLS4xOTZsLTEuODc0LjdaTTE0IDEyYTIgMiAwIDAgMS0yIDJ2MmE0IDQgMCAwIDAgNC00aC0yWm0tMiAyYTIgMiAwIDAgMS0yLTJIOGE0IDQgMCAwIDAgNCA0di0yWm0tMi0yYTIgMiAwIDAgMSAyLTJWOGE0IDQgMCAwIDAtNCA0aDJabTItMmEyIDIgMCAwIDEgMiAyaDJhNCA0IDAgMCAwLTQtNHYyWm03Ljc4NiA1LjE5N2EuMTMzLjEzMyAwIDAgMSAuMDc3LS4xNjVsLS43NDMtMS44NTdhMi4xMzMgMi4xMzMgMCAwIDAtMS4yMzEgMi42NTVsMS44OTctLjYzM1ptLTguOTE0IDQuMDM5YTIuMjY1IDIuMjY1IDAgMCAwLTIuODItMS4zMDhsLjYzMyAxLjg5OGEuMjY1LjI2NSAwIDAgMSAuMzMuMTUzbDEuODU3LS43NDNaTTE4LjAzIDcuNDg0YTIuNDQ3IDIuNDQ3IDAgMCAwIDEuMDEzIDMuMDA4bDEuMDI5LTEuNzE1YS40NDcuNDQ3IDAgMCAxLS4xODUtLjU1bC0xLjg1Ny0uNzQzWk05LjAxNSA0LjAyMWEuMjY1LjI2NSAwIDAgMS0uMzMuMTUzbC0uNjMyIDEuODk4YTIuMjY1IDIuMjY1IDAgMCAwIDIuODE5LTEuMzA4bC0xLjg1Ny0uNzQzWk00LjExNCA4LjIyN2EuNDQ3LjQ0NyAwIDAgMS0uMTg2LjU1bDEuMDMgMS43MTVBMi40NDcgMi40NDcgMCAwIDAgNS45NyA3LjQ4NGwtMS44NTcuNzQzWk02LjExIDE1LjgzYTIuMTMyIDIuMTMyIDAgMCAwLTEuMjMtMi42NTRsLS43NDMgMS44NTdhLjEzMi4xMzIgMCAwIDEgLjA3Ni4xNjVsMS44OTcuNjMyWm04Ljg3NSA0LjE1YS4yNjUuMjY1IDAgMCAxIC4zMy0uMTUzbC42MzItMS44OTdhMi4yNjUgMi4yNjUgMCAwIDAtMi44MiAxLjMwN2wxLjg1OC43NDNaTTEzLjEyOSA0Ljc2NGEyLjI2NSAyLjI2NSAwIDAgMCAyLjgxOSAxLjMwOGwtLjYzMy0xLjg5OGEuMjY1LjI2NSAwIDAgMS0uMzMtLjE1M2wtMS44NTYuNzQzWiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuOCIvPjwvZz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/nav/gear-active.svg
var gear_active_defProp = Object.defineProperty;
var gear_active_getOwnPropSymbols = Object.getOwnPropertySymbols;
var gear_active_hasOwnProp = Object.prototype.hasOwnProperty;
var gear_active_propIsEnum = Object.prototype.propertyIsEnumerable;
var gear_active_defNormalProp = (obj, key, value) => key in obj ? gear_active_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var gear_active_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (gear_active_hasOwnProp.call(b, prop))
      gear_active_defNormalProp(a, prop, b[prop]);
  if (gear_active_getOwnPropSymbols)
    for (var prop of gear_active_getOwnPropSymbols(b)) {
      if (gear_active_propIsEnum.call(b, prop))
        gear_active_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgGearActive = (props) => /* @__PURE__ */ React.createElement("svg", gear_active_spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 24, height: 24 }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "gear-active_svg__a" }, /* @__PURE__ */ React.createElement("rect", { width: 24, height: 24, rx: 0 }))), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#gear-active_svg__a)" }, /* @__PURE__ */ React.createElement("path", { d: "m12.905 3.06.28-.96-.28.96Zm.76.515-.787.617.788-.617Zm-.76 17.365.28.96-.28-.96Zm.76-.515.788.617-.787-.617Zm-2.57.515-.28.96.28-.96Zm-.76-.515-.787.617.787-.617Zm.76-17.365.28.96-.28-.96Zm-.76.515-.787-.616.787.616ZM7.798 4.933l-.316.949.316-.949Zm8.36 14.12-.316.949.316-.949Zm2.895-2.894.948-.317-.948.317ZM6.157 4.916l.499.867-.499-.867Zm.835-.197-.058.998.058-.998Zm12.112 13.088.88.475-.88-.475Zm.179-.758-1 .03 1-.03Zm-1.476 2.055.474.88-.474-.88Zm-.758.18-.031.999.03-1ZM4.949 6.131l.874.486-.874-.486Zm-.181.884-.995.103.995-.103Zm11.434-2.083.316.949-.316-.949ZM4.948 16.159l.948.316-.948-.316Zm2.894 2.894-.316-.949.316.949Zm10-14.137.5-.867-.5.867Zm-.834-.197.058.998-.058-.998ZM4.896 17.807l-.88.475.88-.475Zm-.179-.758 1 .03-1-.03Zm1.477 2.055-.475.88.475-.88Zm.758.18.03.999-.03-1ZM19.05 6.131l-.874.486.874-.486Zm.181.884.995.102-.995-.102ZM4.166 9.8l.514.858-.514-.858Zm15.67 0-.515.858.514-.858ZM3.07 10.893l.953.304-.953-.304Zm.303-.534-.751-.66.75.66Zm17.555.534-.952.304.952-.304Zm-.302-.534-.751.66.75-.66Zm.279 2.65-.937-.35.937.35Zm-.397.586-.672-.74.672.74Zm-17.414-.586.937-.35-.937.35Zm.397.586-.673.74.673-.74Zm15.346 1.919.948-.317-.948.317ZM8.369 18.877l-.316-.948.316.948Zm11.188-9.243-.514.858.514-.858ZM8.37 5.124l-.316.948.316-.949Zm-3.206 10.39-.949-.317.949.316Zm10.469 3.364-.317.948.317-.948Zm0-13.755.316.949-.316-.949ZM12 4c.529 0 .59.01.625.02l.56-1.92C12.809 1.99 12.403 2 12 2v2Zm2.986.022c-.15-.375-.292-.755-.533-1.063l-1.575 1.233c.023.03.055.082.25.572l1.858-.742Zm-2.361-.002c.1.03.189.09.253.172l1.575-1.233a2.5 2.5 0 0 0-1.268-.859l-.56 1.92ZM12 22c.403 0 .81.01 1.185-.1l-.56-1.92c-.036.01-.096.02-.625.02v2Zm1.129-2.764c-.196.49-.228.543-.25.572l1.574 1.234c.242-.309.383-.689.533-1.063l-1.857-.743Zm.056 2.664a2.5 2.5 0 0 0 1.268-.858l-1.575-1.234a.5.5 0 0 1-.253.172l.56 1.92ZM12 20c-.528 0-.589-.01-.624-.02l-.56 1.92c.376.11.781.1 1.184.1v-2Zm-2.985-.021c.15.374.291.754.533 1.063l1.574-1.234c-.023-.029-.054-.081-.25-.572l-1.857.743Zm2.36.001a.5.5 0 0 1-.253-.172l-1.574 1.234a2.5 2.5 0 0 0 1.268.858l.56-1.92ZM12 2c-.403 0-.808-.01-1.184.1l.56 1.92c.035-.01.096-.02.624-.02V2Zm-1.128 2.764c.196-.49.227-.543.25-.572L9.548 2.959c-.242.308-.383.688-.533 1.063l1.857.742ZM10.816 2.1a2.5 2.5 0 0 0-1.268.859l1.574 1.233a.5.5 0 0 1 .254-.172l-.56-1.92ZM8.685 4.175l-.57-.19-.633 1.897.57.19.633-1.897Zm6.63 15.651.527.176.633-1.898-.527-.175-.633 1.897Zm4.686-3.984-.215-.645-1.897.633.215.645 1.897-.633ZM6.24 6.175c.342-.342.387-.375.417-.392l-.997-1.734c-.315.181-.572.45-.834.712L6.24 6.175Zm1.875-2.19c-.35-.118-.701-.243-1.064-.264l-.116 1.996c.035.002.089.012.548.165l.632-1.898ZM6.656 5.782a.5.5 0 0 1 .278-.066l.116-1.996a2.5 2.5 0 0 0-1.391.328l.997 1.734Zm12.551 13.424c.289-.288.587-.572.777-.925l-1.76-.95c-.018.034-.053.083-.431.461l1.414 1.414Zm-1.103-2.732c.169.507.178.566.18.605l1.998-.062c-.012-.401-.152-.788-.28-1.176l-1.898.633Zm1.88 1.807a2.5 2.5 0 0 0 .298-1.264l-1.998.062a.5.5 0 0 1-.06.252l1.76.95Zm-2.191-.489c-.378.378-.427.413-.461.431l.95 1.76c.352-.19.636-.488.925-.777l-1.414-1.414Zm-1.951 2.209c.387.129.775.268 1.176.28l.061-1.998c-.038-.001-.098-.01-.605-.18l-.632 1.898Zm1.49-1.778a.5.5 0 0 1-.253.06l-.061 1.999a2.5 2.5 0 0 0 1.263-.298l-.949-1.76ZM4.825 4.761c-.278.278-.563.55-.75.885l1.748.972c.018-.031.053-.08.416-.443L4.825 4.761Zm1.146 2.723c-.191-.477-.205-.535-.208-.571l-1.99.206c.04.38.195.744.34 1.108l1.858-.743ZM4.076 5.646a2.5 2.5 0 0 0-.303 1.473l1.99-.206a.5.5 0 0 1 .06-.295l-1.747-.972Zm11.872.426.57-.19-.632-1.898-.57.19.632 1.898ZM5.896 16.475l.215-.646-1.897-.632-.215.645 1.897.633Zm2.157 1.454-.527.175.632 1.898.527-.176-.632-1.897ZM19.175 4.76c-.262-.262-.519-.53-.834-.712l-.997 1.734c.03.017.075.05.417.392l1.414-1.414Zm-2.657 1.12c.46-.152.514-.162.548-.164l-.116-1.996c-.363.02-.713.146-1.064.263l.632 1.898Zm1.823-1.832a2.5 2.5 0 0 0-1.391-.328l.116 1.996a.5.5 0 0 1 .278.066l.997-1.734ZM6.207 17.793c-.377-.378-.412-.427-.43-.46l-1.761.949c.19.353.489.637.777.925l1.414-1.414ZM4 15.843c-.13.387-.269.774-.281 1.175l1.999.062c0-.039.01-.098.18-.605l-1.898-.633Zm1.777 1.49a.5.5 0 0 1-.06-.253l-1.998-.062a2.5 2.5 0 0 0 .298 1.264l1.76-.95Zm-.983 1.874c.289.289.573.587.926.777l.95-1.76c-.034-.018-.084-.053-.462-.43l-1.414 1.413Zm2.733-1.103c-.507.17-.567.179-.605.18l.062 1.999c.4-.013.788-.152 1.175-.281l-.632-1.898Zm-1.807 1.88a2.5 2.5 0 0 0 1.264.299l-.062-2a.5.5 0 0 1-.253-.059l-.949 1.76Zm12.042-13.81c.364.365.399.413.416.444l1.748-.972c-.186-.335-.472-.608-.75-.885l-1.414 1.414Zm2.126 2.053c.145-.364.3-.728.34-1.109l-1.99-.205c-.003.036-.016.094-.207.571l1.857.743Zm-1.71-1.609a.5.5 0 0 1 .06.295l1.99.205a2.5 2.5 0 0 0-.302-1.472l-1.748.972ZM3.928 8.778l-.277.166 1.03 1.715.277-.167-1.03-1.715Zm16.422.166-.278-.167-1.03 1.715.279.167 1.029-1.715ZM4 11.866c0-.567.012-.63.024-.669l-1.905-.608c-.13.406-.119.844-.119 1.277h2Zm-.349-2.922c-.368.22-.746.434-1.028.755l1.502 1.32c.027-.03.073-.071.555-.36L3.651 8.944Zm.373 2.253a.5.5 0 0 1 .1-.178L2.624 9.7a2.5 2.5 0 0 0-.504.89l1.905.608Zm17.976.67c0-.434.012-.872-.118-1.278l-1.905.608c.012.04.023.102.023.67h2Zm-2.68-1.208c.482.289.529.33.556.36l1.502-1.32c-.282-.32-.66-.534-1.028-.755l-1.03 1.715Zm2.562-.07a2.5 2.5 0 0 0-.504-.89l-1.502 1.32a.5.5 0 0 1 .1.178l1.906-.608ZM20 11.866c0 .674-.015.75-.031.793l1.874.7c.173-.464.157-.981.157-1.493h-2Zm-.137 3.166c.47-.188.953-.364 1.319-.697l-1.345-1.48c-.035.031-.098.073-.717.32l.743 1.857Zm.106-2.373a.5.5 0 0 1-.132.196l1.345 1.48a2.5 2.5 0 0 0 .66-.977l-1.873-.699ZM2 11.866c0 .512-.015 1.029.158 1.492l1.874-.699C4.016 12.616 4 12.54 4 11.866H2Zm2.88 1.31c-.618-.248-.681-.29-.716-.321l-1.345 1.48c.366.332.848.509 1.319.697l.742-1.857Zm-2.722.182a2.5 2.5 0 0 0 .661.977l1.345-1.48a.5.5 0 0 1-.132-.196l-1.874.7ZM14 12a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4h-2Zm-2 2a2 2 0 0 1-2-2H8a4 4 0 0 0 4 4v-2Zm-2-2a2 2 0 0 1 2-2V8a4 4 0 0 0-4 4h2Zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2Zm7.786 5.197a.133.133 0 0 1 .077-.165l-.743-1.857a2.133 2.133 0 0 0-1.231 2.655l1.897-.633Zm-8.914 4.04a2.265 2.265 0 0 0-2.82-1.308l.633 1.897a.265.265 0 0 1 .33.153l1.857-.743ZM18.03 7.483a2.447 2.447 0 0 0 1.013 3.008l1.029-1.715a.447.447 0 0 1-.185-.55l-1.857-.743ZM9.015 4.022a.265.265 0 0 1-.33.152l-.632 1.898a2.265 2.265 0 0 0 2.819-1.308l-1.857-.742ZM4.114 8.227a.447.447 0 0 1-.186.55l1.03 1.715A2.447 2.447 0 0 0 5.97 7.484l-1.857.743ZM6.11 15.83a2.132 2.132 0 0 0-1.23-2.654l-.743 1.857a.132.132 0 0 1 .076.165l1.897.632Zm8.875 4.15a.265.265 0 0 1 .33-.153l.632-1.897a2.265 2.265 0 0 0-2.82 1.307l1.858.743ZM13.129 4.764a2.265 2.265 0 0 0 2.819 1.308l-.633-1.898a.265.265 0 0 1-.33-.152l-1.856.742Z" })));

/* harmony default export */ var gear_active = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJtMTIuOTA1IDMuMDYuMjgtLjk2LS4yOC45NlptLjc2LjUxNS0uNzg3LjYxNy43ODgtLjYxN1ptLS43NiAxNy4zNjUuMjguOTYtLjI4LS45NlptLjc2LS41MTUuNzg4LjYxNy0uNzg3LS42MTdabS0yLjU3LjUxNS0uMjguOTYuMjgtLjk2Wm0tLjc2LS41MTUtLjc4Ny42MTcuNzg3LS42MTdabS43Ni0xNy4zNjUuMjguOTYtLjI4LS45NlptLS43Ni41MTUtLjc4Ny0uNjE2Ljc4Ny42MTZaTTcuNzk4IDQuOTMzbC0uMzE2Ljk0OS4zMTYtLjk0OVptOC4zNiAxNC4xMi0uMzE2Ljk0OS4zMTYtLjk0OVptMi44OTUtMi44OTQuOTQ4LS4zMTctLjk0OC4zMTdaTTYuMTU3IDQuOTE2bC40OTkuODY3LS40OTktLjg2N1ptLjgzNS0uMTk3LS4wNTguOTk4LjA1OC0uOTk4Wm0xMi4xMTIgMTMuMDg4Ljg4LjQ3NS0uODgtLjQ3NVptLjE3OS0uNzU4LTEgLjAzIDEtLjAzWm0tMS40NzYgMi4wNTUuNDc0Ljg4LS40NzQtLjg4Wm0tLjc1OC4xOC0uMDMxLjk5OS4wMy0xWk00Ljk0OSA2LjEzMWwuODc0LjQ4Ni0uODc0LS40ODZabS0uMTgxLjg4NC0uOTk1LjEwMy45OTUtLjEwM1ptMTEuNDM0LTIuMDgzLjMxNi45NDktLjMxNi0uOTQ5Wk00Ljk0OCAxNi4xNTlsLjk0OC4zMTYtLjk0OC0uMzE2Wm0yLjg5NCAyLjg5NC0uMzE2LS45NDkuMzE2Ljk0OVptMTAtMTQuMTM3LjUtLjg2Ny0uNS44NjdabS0uODM0LS4xOTcuMDU4Ljk5OC0uMDU4LS45OThaTTQuODk2IDE3LjgwN2wtLjg4LjQ3NS44OC0uNDc1Wm0tLjE3OS0uNzU4IDEgLjAzLTEtLjAzWm0xLjQ3NyAyLjA1NS0uNDc1Ljg4LjQ3NS0uODhabS43NTguMTguMDMuOTk5LS4wMy0xWk0xOS4wNSA2LjEzMWwtLjg3NC40ODYuODc0LS40ODZabS4xODEuODg0Ljk5NS4xMDItLjk5NS0uMTAyWk00LjE2NiA5LjhsLjUxNC44NTgtLjUxNC0uODU4Wm0xNS42NyAwLS41MTUuODU4LjUxNC0uODU4Wk0zLjA3IDEwLjg5M2wuOTUzLjMwNC0uOTUzLS4zMDRabS4zMDMtLjUzNC0uNzUxLS42Ni43NS42NlptMTcuNTU1LjUzNC0uOTUyLjMwNC45NTItLjMwNFptLS4zMDItLjUzNC0uNzUxLjY2Ljc1LS42NlptLjI3OSAyLjY1LS45MzctLjM1LjkzNy4zNVptLS4zOTcuNTg2LS42NzItLjc0LjY3Mi43NFptLTE3LjQxNC0uNTg2LjkzNy0uMzUtLjkzNy4zNVptLjM5Ny41ODYtLjY3My43NC42NzMtLjc0Wm0xNS4zNDYgMS45MTkuOTQ4LS4zMTctLjk0OC4zMTdaTTguMzY5IDE4Ljg3N2wtLjMxNi0uOTQ4LjMxNi45NDhabTExLjE4OC05LjI0My0uNTE0Ljg1OC41MTQtLjg1OFpNOC4zNyA1LjEyNGwtLjMxNi45NDguMzE2LS45NDlabS0zLjIwNiAxMC4zOS0uOTQ5LS4zMTcuOTQ5LjMxNlptMTAuNDY5IDMuMzY0LS4zMTcuOTQ4LjMxNy0uOTQ4Wm0wLTEzLjc1NS4zMTYuOTQ5LS4zMTYtLjk0OVpNMTIgNGMuNTI5IDAgLjU5LjAxLjYyNS4wMmwuNTYtMS45MkMxMi44MDkgMS45OSAxMi40MDMgMiAxMiAydjJabTIuOTg2LjAyMmMtLjE1LS4zNzUtLjI5Mi0uNzU1LS41MzMtMS4wNjNsLTEuNTc1IDEuMjMzYy4wMjMuMDMuMDU1LjA4Mi4yNS41NzJsMS44NTgtLjc0MlptLTIuMzYxLS4wMDJjLjEuMDMuMTg5LjA5LjI1My4xNzJsMS41NzUtMS4yMzNhMi41IDIuNSAwIDAgMC0xLjI2OC0uODU5bC0uNTYgMS45MlpNMTIgMjJjLjQwMyAwIC44MS4wMSAxLjE4NS0uMWwtLjU2LTEuOTJjLS4wMzYuMDEtLjA5Ni4wMi0uNjI1LjAydjJabTEuMTI5LTIuNzY0Yy0uMTk2LjQ5LS4yMjguNTQzLS4yNS41NzJsMS41NzQgMS4yMzRjLjI0Mi0uMzA5LjM4My0uNjg5LjUzMy0xLjA2M2wtMS44NTctLjc0M1ptLjA1NiAyLjY2NGEyLjUgMi41IDAgMCAwIDEuMjY4LS44NThsLTEuNTc1LTEuMjM0YS41LjUgMCAwIDEtLjI1My4xNzJsLjU2IDEuOTJaTTEyIDIwYy0uNTI4IDAtLjU4OS0uMDEtLjYyNC0uMDJsLS41NiAxLjkyYy4zNzYuMTEuNzgxLjEgMS4xODQuMXYtMlptLTIuOTg1LS4wMjFjLjE1LjM3NC4yOTEuNzU0LjUzMyAxLjA2M2wxLjU3NC0xLjIzNGMtLjAyMy0uMDI5LS4wNTQtLjA4MS0uMjUtLjU3MmwtMS44NTcuNzQzWm0yLjM2LjAwMWEuNS41IDAgMCAxLS4yNTMtLjE3MmwtMS41NzQgMS4yMzRhMi41IDIuNSAwIDAgMCAxLjI2OC44NThsLjU2LTEuOTJaTTEyIDJjLS40MDMgMC0uODA4LS4wMS0xLjE4NC4xbC41NiAxLjkyYy4wMzUtLjAxLjA5Ni0uMDIuNjI0LS4wMlYyWm0tMS4xMjggMi43NjRjLjE5Ni0uNDkuMjI3LS41NDMuMjUtLjU3Mkw5LjU0OCAyLjk1OWMtLjI0Mi4zMDgtLjM4My42ODgtLjUzMyAxLjA2M2wxLjg1Ny43NDJaTTEwLjgxNiAyLjFhMi41IDIuNSAwIDAgMC0xLjI2OC44NTlsMS41NzQgMS4yMzNhLjUuNSAwIDAgMSAuMjU0LS4xNzJsLS41Ni0xLjkyWk04LjY4NSA0LjE3NWwtLjU3LS4xOS0uNjMzIDEuODk3LjU3LjE5LjYzMy0xLjg5N1ptNi42MyAxNS42NTEuNTI3LjE3Ni42MzMtMS44OTgtLjUyNy0uMTc1LS42MzMgMS44OTdabTQuNjg2LTMuOTg0LS4yMTUtLjY0NS0xLjg5Ny42MzMuMjE1LjY0NSAxLjg5Ny0uNjMzWk02LjI0IDYuMTc1Yy4zNDItLjM0Mi4zODctLjM3NS40MTctLjM5MmwtLjk5Ny0xLjczNGMtLjMxNS4xODEtLjU3Mi40NS0uODM0LjcxMkw2LjI0IDYuMTc1Wm0xLjg3NS0yLjE5Yy0uMzUtLjExOC0uNzAxLS4yNDMtMS4wNjQtLjI2NGwtLjExNiAxLjk5NmMuMDM1LjAwMi4wODkuMDEyLjU0OC4xNjVsLjYzMi0xLjg5OFpNNi42NTYgNS43ODJhLjUuNSAwIDAgMSAuMjc4LS4wNjZsLjExNi0xLjk5NmEyLjUgMi41IDAgMCAwLTEuMzkxLjMyOGwuOTk3IDEuNzM0Wm0xMi41NTEgMTMuNDI0Yy4yODktLjI4OC41ODctLjU3Mi43NzctLjkyNWwtMS43Ni0uOTVjLS4wMTguMDM0LS4wNTMuMDgzLS40MzEuNDYxbDEuNDE0IDEuNDE0Wm0tMS4xMDMtMi43MzJjLjE2OS41MDcuMTc4LjU2Ni4xOC42MDVsMS45OTgtLjA2MmMtLjAxMi0uNDAxLS4xNTItLjc4OC0uMjgtMS4xNzZsLTEuODk4LjYzM1ptMS44OCAxLjgwN2EyLjUgMi41IDAgMCAwIC4yOTgtMS4yNjRsLTEuOTk4LjA2MmEuNS41IDAgMCAxLS4wNi4yNTJsMS43Ni45NVptLTIuMTkxLS40ODljLS4zNzguMzc4LS40MjcuNDEzLS40NjEuNDMxbC45NSAxLjc2Yy4zNTItLjE5LjYzNi0uNDg4LjkyNS0uNzc3bC0xLjQxNC0xLjQxNFptLTEuOTUxIDIuMjA5Yy4zODcuMTI5Ljc3NS4yNjggMS4xNzYuMjhsLjA2MS0xLjk5OGMtLjAzOC0uMDAxLS4wOTgtLjAxLS42MDUtLjE4bC0uNjMyIDEuODk4Wm0xLjQ5LTEuNzc4YS41LjUgMCAwIDEtLjI1My4wNmwtLjA2MSAxLjk5OWEyLjUgMi41IDAgMCAwIDEuMjYzLS4yOThsLS45NDktMS43NlpNNC44MjUgNC43NjFjLS4yNzguMjc4LS41NjMuNTUtLjc1Ljg4NWwxLjc0OC45NzJjLjAxOC0uMDMxLjA1My0uMDguNDE2LS40NDNMNC44MjUgNC43NjFabTEuMTQ2IDIuNzIzYy0uMTkxLS40NzctLjIwNS0uNTM1LS4yMDgtLjU3MWwtMS45OS4yMDZjLjA0LjM4LjE5NS43NDQuMzQgMS4xMDhsMS44NTgtLjc0M1pNNC4wNzYgNS42NDZhMi41IDIuNSAwIDAgMC0uMzAzIDEuNDczbDEuOTktLjIwNmEuNS41IDAgMCAxIC4wNi0uMjk1bC0xLjc0Ny0uOTcyWm0xMS44NzIuNDI2LjU3LS4xOS0uNjMyLTEuODk4LS41Ny4xOS42MzIgMS44OThaTTUuODk2IDE2LjQ3NWwuMjE1LS42NDYtMS44OTctLjYzMi0uMjE1LjY0NSAxLjg5Ny42MzNabTIuMTU3IDEuNDU0LS41MjcuMTc1LjYzMiAxLjg5OC41MjctLjE3Ni0uNjMyLTEuODk3Wk0xOS4xNzUgNC43NmMtLjI2Mi0uMjYyLS41MTktLjUzLS44MzQtLjcxMmwtLjk5NyAxLjczNGMuMDMuMDE3LjA3NS4wNS40MTcuMzkybDEuNDE0LTEuNDE0Wm0tMi42NTcgMS4xMmMuNDYtLjE1Mi41MTQtLjE2Mi41NDgtLjE2NGwtLjExNi0xLjk5NmMtLjM2My4wMi0uNzEzLjE0Ni0xLjA2NC4yNjNsLjYzMiAxLjg5OFptMS44MjMtMS44MzJhMi41IDIuNSAwIDAgMC0xLjM5MS0uMzI4bC4xMTYgMS45OTZhLjUuNSAwIDAgMSAuMjc4LjA2NmwuOTk3LTEuNzM0Wk02LjIwNyAxNy43OTNjLS4zNzctLjM3OC0uNDEyLS40MjctLjQzLS40NmwtMS43NjEuOTQ5Yy4xOS4zNTMuNDg5LjYzNy43NzcuOTI1bDEuNDE0LTEuNDE0Wk00IDE1Ljg0M2MtLjEzLjM4Ny0uMjY5Ljc3NC0uMjgxIDEuMTc1bDEuOTk5LjA2MmMwLS4wMzkuMDEtLjA5OC4xOC0uNjA1bC0xLjg5OC0uNjMzWm0xLjc3NyAxLjQ5YS41LjUgMCAwIDEtLjA2LS4yNTNsLTEuOTk4LS4wNjJhMi41IDIuNSAwIDAgMCAuMjk4IDEuMjY0bDEuNzYtLjk1Wm0tLjk4MyAxLjg3NGMuMjg5LjI4OS41NzMuNTg3LjkyNi43NzdsLjk1LTEuNzZjLS4wMzQtLjAxOC0uMDg0LS4wNTMtLjQ2Mi0uNDNsLTEuNDE0IDEuNDEzWm0yLjczMy0xLjEwM2MtLjUwNy4xNy0uNTY3LjE3OS0uNjA1LjE4bC4wNjIgMS45OTljLjQtLjAxMy43ODgtLjE1MiAxLjE3NS0uMjgxbC0uNjMyLTEuODk4Wm0tMS44MDcgMS44OGEyLjUgMi41IDAgMCAwIDEuMjY0LjI5OWwtLjA2Mi0yYS41LjUgMCAwIDEtLjI1My0uMDU5bC0uOTQ5IDEuNzZabTEyLjA0Mi0xMy44MWMuMzY0LjM2NS4zOTkuNDEzLjQxNi40NDRsMS43NDgtLjk3MmMtLjE4Ni0uMzM1LS40NzItLjYwOC0uNzUtLjg4NWwtMS40MTQgMS40MTRabTIuMTI2IDIuMDUzYy4xNDUtLjM2NC4zLS43MjguMzQtMS4xMDlsLTEuOTktLjIwNWMtLjAwMy4wMzYtLjAxNi4wOTQtLjIwNy41NzFsMS44NTcuNzQzWm0tMS43MS0xLjYwOWEuNS41IDAgMCAxIC4wNi4yOTVsMS45OS4yMDVhMi41IDIuNSAwIDAgMC0uMzAyLTEuNDcybC0xLjc0OC45NzJaTTMuOTI4IDguNzc4bC0uMjc3LjE2NiAxLjAzIDEuNzE1LjI3Ny0uMTY3LTEuMDMtMS43MTVabTE2LjQyMi4xNjYtLjI3OC0uMTY3LTEuMDMgMS43MTUuMjc5LjE2NyAxLjAyOS0xLjcxNVpNNCAxMS44NjZjMC0uNTY3LjAxMi0uNjMuMDI0LS42NjlsLTEuOTA1LS42MDhjLS4xMy40MDYtLjExOS44NDQtLjExOSAxLjI3N2gyWm0tLjM0OS0yLjkyMmMtLjM2OC4yMi0uNzQ2LjQzNC0xLjAyOC43NTVsMS41MDIgMS4zMmMuMDI3LS4wMy4wNzMtLjA3MS41NTUtLjM2TDMuNjUxIDguOTQ0Wm0uMzczIDIuMjUzYS41LjUgMCAwIDEgLjEtLjE3OEwyLjYyNCA5LjdhMi41IDIuNSAwIDAgMC0uNTA0Ljg5bDEuOTA1LjYwOFptMTcuOTc2LjY3YzAtLjQzNC4wMTItLjg3Mi0uMTE4LTEuMjc4bC0xLjkwNS42MDhjLjAxMi4wNC4wMjMuMTAyLjAyMy42N2gyWm0tMi42OC0xLjIwOGMuNDgyLjI4OS41MjkuMzMuNTU2LjM2bDEuNTAyLTEuMzJjLS4yODItLjMyLS42Ni0uNTM0LTEuMDI4LS43NTVsLTEuMDMgMS43MTVabTIuNTYyLS4wN2EyLjUgMi41IDAgMCAwLS41MDQtLjg5bC0xLjUwMiAxLjMyYS41LjUgMCAwIDEgLjEuMTc4bDEuOTA2LS42MDhaTTIwIDExLjg2NmMwIC42NzQtLjAxNS43NS0uMDMxLjc5M2wxLjg3NC43Yy4xNzMtLjQ2NC4xNTctLjk4MS4xNTctMS40OTNoLTJabS0uMTM3IDMuMTY2Yy40Ny0uMTg4Ljk1My0uMzY0IDEuMzE5LS42OTdsLTEuMzQ1LTEuNDhjLS4wMzUuMDMxLS4wOTguMDczLS43MTcuMzJsLjc0MyAxLjg1N1ptLjEwNi0yLjM3M2EuNS41IDAgMCAxLS4xMzIuMTk2bDEuMzQ1IDEuNDhhMi41IDIuNSAwIDAgMCAuNjYtLjk3N2wtMS44NzMtLjY5OVpNMiAxMS44NjZjMCAuNTEyLS4wMTUgMS4wMjkuMTU4IDEuNDkybDEuODc0LS42OTlDNC4wMTYgMTIuNjE2IDQgMTIuNTQgNCAxMS44NjZIMlptMi44OCAxLjMxYy0uNjE4LS4yNDgtLjY4MS0uMjktLjcxNi0uMzIxbC0xLjM0NSAxLjQ4Yy4zNjYuMzMyLjg0OC41MDkgMS4zMTkuNjk3bC43NDItMS44NTdabS0yLjcyMi4xODJhMi41IDIuNSAwIDAgMCAuNjYxLjk3N2wxLjM0NS0xLjQ4YS41LjUgMCAwIDEtLjEzMi0uMTk2bC0xLjg3NC43Wk0xNCAxMmEyIDIgMCAwIDEtMiAydjJhNCA0IDAgMCAwIDQtNGgtMlptLTIgMmEyIDIgMCAwIDEtMi0ySDhhNCA0IDAgMCAwIDQgNHYtMlptLTItMmEyIDIgMCAwIDEgMi0yVjhhNCA0IDAgMCAwLTQgNGgyWm0yLTJhMiAyIDAgMCAxIDIgMmgyYTQgNCAwIDAgMC00LTR2MlptNy43ODYgNS4xOTdhLjEzMy4xMzMgMCAwIDEgLjA3Ny0uMTY1bC0uNzQzLTEuODU3YTIuMTMzIDIuMTMzIDAgMCAwLTEuMjMxIDIuNjU1bDEuODk3LS42MzNabS04LjkxNCA0LjA0YTIuMjY1IDIuMjY1IDAgMCAwLTIuODItMS4zMDhsLjYzMyAxLjg5N2EuMjY1LjI2NSAwIDAgMSAuMzMuMTUzbDEuODU3LS43NDNaTTE4LjAzIDcuNDgzYTIuNDQ3IDIuNDQ3IDAgMCAwIDEuMDEzIDMuMDA4bDEuMDI5LTEuNzE1YS40NDcuNDQ3IDAgMCAxLS4xODUtLjU1bC0xLjg1Ny0uNzQzWk05LjAxNSA0LjAyMmEuMjY1LjI2NSAwIDAgMS0uMzMuMTUybC0uNjMyIDEuODk4YTIuMjY1IDIuMjY1IDAgMCAwIDIuODE5LTEuMzA4bC0xLjg1Ny0uNzQyWk00LjExNCA4LjIyN2EuNDQ3LjQ0NyAwIDAgMS0uMTg2LjU1bDEuMDMgMS43MTVBMi40NDcgMi40NDcgMCAwIDAgNS45NyA3LjQ4NGwtMS44NTcuNzQzWk02LjExIDE1LjgzYTIuMTMyIDIuMTMyIDAgMCAwLTEuMjMtMi42NTRsLS43NDMgMS44NTdhLjEzMi4xMzIgMCAwIDEgLjA3Ni4xNjVsMS44OTcuNjMyWm04Ljg3NSA0LjE1YS4yNjUuMjY1IDAgMCAxIC4zMy0uMTUzbC42MzItMS44OTdhMi4yNjUgMi4yNjUgMCAwIDAtMi44MiAxLjMwN2wxLjg1OC43NDNaTTEzLjEyOSA0Ljc2NGEyLjI2NSAyLjI2NSAwIDAgMCAyLjgxOSAxLjMwOGwtLjYzMy0xLjg5OGEuMjY1LjI2NSAwIDAgMS0uMzMtLjE1MmwtMS44NTYuNzQyWiIvPjwvZz48L3N2Zz4=");

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/Icon/index.tsx



var Home = function Home(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    fill: "none",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "master_svg0_21_44043",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          rx: "0"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      clipPath: "url(#master_svg0_21_44043)",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M9.000001110610963,16.000042417144776C8.447721110610962,16.000042417144776,8.000001110610963,16.447742417144774,8.000001110610963,17.000042417144776C8.000001110610963,17.552242417144775,8.447721110610962,18.000042417144776,9.000001110610963,18.000042417144776C9.000001110610963,18.000042417144776,9.000001110610963,16.000042417144776,9.000001110610963,16.000042417144776C9.000001110610963,16.000042417144776,9.000001110610963,16.000042417144776,9.000001110610963,16.000042417144776ZM15.000041110610962,18.000042417144776C15.552341110610962,18.000042417144776,16.00004111061096,17.552242417144775,16.00004111061096,17.000042417144776C16.00004111061096,16.447742417144774,15.552341110610962,16.000042417144776,15.000041110610962,16.000042417144776C15.000041110610962,16.000042417144776,15.000041110610962,18.000042417144776,15.000041110610962,18.000042417144776C15.000041110610962,18.000042417144776,15.000041110610962,18.000042417144776,15.000041110610962,18.000042417144776ZM5.470781110610962,7.078282417144775C5.470781110610962,7.078282417144775,6.084721110610962,7.867632417144775,6.084721110610962,7.867632417144775C6.084721110610962,7.867632417144775,5.470781110610962,7.078282417144775,5.470781110610962,7.078282417144775C5.470781110610962,7.078282417144775,5.470781110610962,7.078282417144775,5.470781110610962,7.078282417144775ZM8.070781110610962,5.056052417144775C8.070781110610962,5.056052417144775,8.684721110610962,5.845402417144776,8.684721110610962,5.845402417144776C8.684721110610962,5.845402417144776,8.070781110610962,5.056052417144775,8.070781110610962,5.056052417144775C8.070781110610962,5.056052417144775,8.070781110610962,5.056052417144775,8.070781110610962,5.056052417144775ZM15.929241110610961,5.056052417144775C15.929241110610961,5.056052417144775,15.315341110610962,5.845412417144775,15.315341110610962,5.845412417144775C15.315341110610962,5.845412417144775,15.315341110610962,5.845412417144775,15.315341110610962,5.845412417144775C15.315341110610962,5.845412417144775,15.929241110610961,5.056052417144775,15.929241110610961,5.056052417144775C15.929241110610961,5.056052417144775,15.929241110610961,5.056052417144775,15.929241110610961,5.056052417144775ZM18.52924111061096,7.078282417144775C18.52924111061096,7.078282417144775,17.91534111061096,7.867632417144775,17.91534111061096,7.867632417144775C17.91534111061096,7.867632417144775,18.52924111061096,7.078282417144775,18.52924111061096,7.078282417144775C18.52924111061096,7.078282417144775,18.52924111061096,7.078282417144775,18.52924111061096,7.078282417144775ZM20.56404111061096,18.815942417144775C20.56404111061096,18.815942417144775,19.673041110610963,18.361942417144775,19.673041110610963,18.361942417144775C19.673041110610963,18.361942417144775,19.673041110610963,18.361942417144775,19.673041110610963,18.361942417144775C19.673041110610963,18.361942417144775,20.56404111061096,18.815942417144775,20.56404111061096,18.815942417144775C20.56404111061096,18.815942417144775,20.56404111061096,18.815942417144775,20.56404111061096,18.815942417144775ZM18.81604111061096,20.564042417144776C18.81604111061096,20.564042417144776,18.362041110610964,19.673042417144774,18.362041110610964,19.673042417144774C18.362041110610964,19.673042417144774,18.362041110610964,19.673042417144774,18.362041110610964,19.673042417144774C18.362041110610964,19.673042417144774,18.81604111061096,20.564042417144776,18.81604111061096,20.564042417144776C18.81604111061096,20.564042417144776,18.81604111061096,20.564042417144776,18.81604111061096,20.564042417144776ZM20.215941110610963,8.577742417144776C20.215941110610963,8.577742417144776,21.01994111061096,7.983092417144776,21.01994111061096,7.983092417144776C21.01994111061096,7.983092417144776,21.01994111061096,7.983092417144776,21.01994111061096,7.983092417144776C21.01994111061096,7.983092417144776,20.215941110610963,8.577742417144776,20.215941110610963,8.577742417144776C20.215941110610963,8.577742417144776,20.215941110610963,8.577742417144776,20.215941110610963,8.577742417144776ZM20.851941110610962,9.878132417144776C20.851941110610962,9.878132417144776,21.814941110610963,9.608582417144776,21.814941110610963,9.608582417144776C21.814941110610963,9.608582417144776,21.814941110610963,9.608582417144776,21.814941110610963,9.608582417144776C21.814941110610963,9.608582417144776,20.851941110610962,9.878132417144776,20.851941110610962,9.878132417144776C20.851941110610962,9.878132417144776,20.851941110610962,9.878132417144776,20.851941110610962,9.878132417144776ZM10.954611110610962,3.2064624171447753C10.954611110610962,3.2064624171447753,10.693271110610961,2.2412214171447755,10.693271110610961,2.2412214171447755C10.693271110610961,2.2412214171447755,10.954611110610962,3.2064624171447753,10.954611110610962,3.2064624171447753C10.954611110610962,3.2064624171447753,10.954611110610962,3.2064624171447753,10.954611110610962,3.2064624171447753ZM13.045441110610962,3.2064624171447753C13.045441110610962,3.2064624171447753,12.784041110610962,4.171712417144775,12.784041110610962,4.171712417144775C12.784041110610962,4.171712417144775,12.784041110610962,4.171712417144775,12.784041110610962,4.171712417144775C12.784041110610962,4.171712417144775,13.045441110610962,3.2064624171447753,13.045441110610962,3.2064624171447753C13.045441110610962,3.2064624171447753,13.045441110610962,3.2064624171447753,13.045441110610962,3.2064624171447753ZM3.148051110610962,9.878132417144776C3.148051110610962,9.878132417144776,4.111041110610962,10.147682417144775,4.111041110610962,10.147682417144775C4.111041110610962,10.147682417144775,4.111041110610962,10.147682417144775,4.111041110610962,10.147682417144775C4.111041110610962,10.147682417144775,3.148051110610962,9.878132417144776,3.148051110610962,9.878132417144776C3.148051110610962,9.878132417144776,3.148051110610962,9.878132417144776,3.148051110610962,9.878132417144776ZM3.784051110610962,8.577742417144776C3.784051110610962,8.577742417144776,4.588041110610962,9.172392417144774,4.588041110610962,9.172392417144774C4.588041110610962,9.172392417144774,4.588041110610962,9.172392417144774,4.588041110610962,9.172392417144774C4.588041110610962,9.172392417144774,3.784051110610962,8.577742417144776,3.784051110610962,8.577742417144776C3.784051110610962,8.577742417144776,3.784051110610962,8.577742417144776,3.784051110610962,8.577742417144776ZM3.4359711106109616,18.815942417144775C3.4359711106109616,18.815942417144775,4.326981110610962,18.361942417144775,4.326981110610962,18.361942417144775C4.326981110610962,18.361942417144775,4.326981110610962,18.361942417144775,4.326981110610962,18.361942417144775C4.326981110610962,18.361942417144775,3.4359711106109616,18.815942417144775,3.4359711106109616,18.815942417144775C3.4359711106109616,18.815942417144775,3.4359711106109616,18.815942417144775,3.4359711106109616,18.815942417144775ZM5.184041110610962,20.564042417144776C5.184041110610962,20.564042417144776,5.638031110610962,19.673042417144774,5.638031110610962,19.673042417144774C5.638031110610962,19.673042417144774,5.638031110610962,19.673042417144774,5.638031110610962,19.673042417144774C5.638031110610962,19.673042417144774,5.184041110610962,20.564042417144776,5.184041110610962,20.564042417144776C5.184041110610962,20.564042417144776,5.184041110610962,20.564042417144776,5.184041110610962,20.564042417144776ZM9.000001110610963,18.000042417144776C9.000001110610963,18.000042417144776,15.000041110610962,18.000042417144776,15.000041110610962,18.000042417144776C15.000041110610962,18.000042417144776,15.000041110610962,16.000042417144776,15.000041110610962,16.000042417144776C15.000041110610962,16.000042417144776,9.000001110610963,16.000042417144776,9.000001110610963,16.000042417144776C9.000001110610963,16.000042417144776,9.000001110610963,18.000042417144776,9.000001110610963,18.000042417144776C9.000001110610963,18.000042417144776,9.000001110610963,18.000042417144776,9.000001110610963,18.000042417144776ZM4.000001110610961,14.600042417144776C4.000001110610961,14.600042417144776,4.000001110610961,12.130142417144775,4.000001110610961,12.130142417144775C4.000001110610961,12.130142417144775,1.999999993110962,12.130142417144775,1.999999993110962,12.130142417144775C1.999999993110962,12.130142417144775,1.999999993110962,14.600042417144776,1.999999993110962,14.600042417144776C1.999999993110962,14.600042417144776,4.000001110610961,14.600042417144776,4.000001110610961,14.600042417144776C4.000001110610961,14.600042417144776,4.000001110610961,14.600042417144776,4.000001110610961,14.600042417144776ZM6.084721110610962,7.867632417144775C6.084721110610962,7.867632417144775,8.684721110610962,5.845402417144776,8.684721110610962,5.845402417144776C8.684721110610962,5.845402417144776,7.456841110610962,4.266702417144776,7.456841110610962,4.266702417144776C7.456841110610962,4.266702417144776,4.8568411106109615,6.288922417144775,4.8568411106109615,6.288922417144775C4.8568411106109615,6.288922417144775,6.084721110610962,7.867632417144775,6.084721110610962,7.867632417144775C6.084721110610962,7.867632417144775,6.084721110610962,7.867632417144775,6.084721110610962,7.867632417144775ZM15.315341110610962,5.845412417144775C15.315341110610962,5.845412417144775,17.91534111061096,7.867632417144775,17.91534111061096,7.867632417144775C17.91534111061096,7.867632417144775,19.143241110610962,6.288932417144776,19.143241110610962,6.288932417144776C19.143241110610962,6.288932417144776,16.543241110610964,4.266702417144776,16.543241110610964,4.266702417144776C16.543241110610964,4.266702417144776,15.315341110610962,5.845412417144775,15.315341110610962,5.845412417144775C15.315341110610962,5.845412417144775,15.315341110610962,5.845412417144775,15.315341110610962,5.845412417144775ZM20.00004111061096,12.130142417144775C20.00004111061096,12.130142417144775,20.00004111061096,14.600042417144776,20.00004111061096,14.600042417144776C20.00004111061096,14.600042417144776,22.00004111061096,14.600042417144776,22.00004111061096,14.600042417144776C22.00004111061096,14.600042417144776,22.00004111061096,12.130142417144775,22.00004111061096,12.130142417144775C22.00004111061096,12.130142417144775,20.00004111061096,12.130142417144775,20.00004111061096,12.130142417144775C20.00004111061096,12.130142417144775,20.00004111061096,12.130142417144775,20.00004111061096,12.130142417144775ZM14.600041110610961,20.000042417144776C14.600041110610961,20.000042417144776,9.400001110610962,20.000042417144776,9.400001110610962,20.000042417144776C9.400001110610962,20.000042417144776,9.400001110610962,22.000042417144776,9.400001110610962,22.000042417144776C9.400001110610962,22.000042417144776,14.600041110610961,22.000042417144776,14.600041110610961,22.000042417144776C14.600041110610961,22.000042417144776,14.600041110610961,20.000042417144776,14.600041110610961,20.000042417144776C14.600041110610961,20.000042417144776,14.600041110610961,20.000042417144776,14.600041110610961,20.000042417144776ZM20.00004111061096,14.600042417144776C20.00004111061096,15.736642417144775,19.999241110610964,16.528942417144776,19.94884111061096,17.145742417144774C19.89944111061096,17.750942417144778,19.807241110610963,18.098642417144774,19.673041110610963,18.361942417144775C19.673041110610963,18.361942417144775,21.455041110610964,19.269942417144776,21.455041110610964,19.269942417144776C21.756841110610964,18.677642417144774,21.88264111061096,18.037442417144774,21.94224111061096,17.308642417144775C22.000841110610963,16.591442417144776,22.00004111061096,15.703642417144776,22.00004111061096,14.600042417144776C22.00004111061096,14.600042417144776,20.00004111061096,14.600042417144776,20.00004111061096,14.600042417144776C20.00004111061096,14.600042417144776,20.00004111061096,14.600042417144776,20.00004111061096,14.600042417144776ZM14.600041110610961,22.000042417144776C15.703641110610961,22.000042417144776,16.591441110610962,22.000742417144775,17.308641110610964,21.942142417144776C18.037541110610963,21.882642417144776,18.677741110610963,21.756842417144775,19.27004111061096,21.455042417144774C19.27004111061096,21.455042417144774,18.362041110610964,19.673042417144774,18.362041110610964,19.673042417144774C18.098641110610963,19.807242417144774,17.75094111061096,19.899342417144776,17.14584111061096,19.948842417144775C16.528941110610962,19.999242417144774,15.736641110610963,20.000042417144776,14.600041110610961,20.000042417144776C14.600041110610961,20.000042417144776,14.600041110610961,22.000042417144776,14.600041110610961,22.000042417144776C14.600041110610961,22.000042417144776,14.600041110610961,22.000042417144776,14.600041110610961,22.000042417144776ZM19.673041110610963,18.361942417144775C19.385441110610962,18.926442417144777,18.926541110610962,19.385442417144777,18.362041110610964,19.673042417144774C18.362041110610964,19.673042417144774,19.27004111061096,21.455042417144774,19.27004111061096,21.455042417144774C20.21084111061096,20.975642417144776,20.97574111061096,20.210742417144775,21.455041110610964,19.269942417144776C21.455041110610964,19.269942417144776,19.673041110610963,18.361942417144775,19.673041110610963,18.361942417144775C19.673041110610963,18.361942417144775,19.673041110610963,18.361942417144775,19.673041110610963,18.361942417144775ZM17.91534111061096,7.867632417144775C18.866741110610963,8.607642417144774,19.18624111061096,8.867092417144775,19.41204111061096,9.172392417144774C19.41204111061096,9.172392417144774,21.01994111061096,7.983092417144776,21.01994111061096,7.983092417144776C20.592541110610963,7.4051824171447755,20.00524111061096,6.9594024171447755,19.143241110610962,6.288932417144776C19.143241110610962,6.288932417144776,17.91534111061096,7.867632417144775,17.91534111061096,7.867632417144775C17.91534111061096,7.867632417144775,17.91534111061096,7.867632417144775,17.91534111061096,7.867632417144775ZM22.00004111061096,12.130142417144775C22.00004111061096,11.038052417144776,22.008741110610963,10.300782417144775,21.814941110610963,9.608582417144776C21.814941110610963,9.608582417144776,19.88904111061096,10.147682417144775,19.88904111061096,10.147682417144775C19.99134111061096,10.513352417144775,20.00004111061096,10.924782417144776,20.00004111061096,12.130142417144775C20.00004111061096,12.130142417144775,22.00004111061096,12.130142417144775,22.00004111061096,12.130142417144775C22.00004111061096,12.130142417144775,22.00004111061096,12.130142417144775,22.00004111061096,12.130142417144775ZM19.41204111061096,9.172392417144774C19.629041110610963,9.465772417144775,19.790641110610963,9.796282417144775,19.88904111061096,10.147682417144775C19.88904111061096,10.147682417144775,21.814941110610963,9.608582417144776,21.814941110610963,9.608582417144776C21.65104111061096,9.022912417144775,21.38164111061096,8.472062417144777,21.01994111061096,7.983092417144776C21.01994111061096,7.983092417144776,19.41204111061096,9.172392417144774,19.41204111061096,9.172392417144774C19.41204111061096,9.172392417144774,19.41204111061096,9.172392417144774,19.41204111061096,9.172392417144774ZM8.684721110610962,5.845402417144776C10.163021110610963,4.695622417144776,10.681421110610962,4.316442417144776,11.215961110610962,4.171712417144775C11.215961110610962,4.171712417144775,10.693271110610961,2.2412214171447755,10.693271110610961,2.2412214171447755C9.676051110610963,2.5166404171447754,8.789141110610963,3.2304724171447754,7.456841110610962,4.266702417144776C7.456841110610962,4.266702417144776,8.684721110610962,5.845402417144776,8.684721110610962,5.845402417144776C8.684721110610962,5.845402417144776,8.684721110610962,5.845402417144776,8.684721110610962,5.845402417144776ZM16.543241110610964,4.266702417144776C15.210941110610962,3.2304724171447754,14.324041110610962,2.5166404171447754,13.306741110610963,2.2412214171447755C13.306741110610963,2.2412214171447755,12.784041110610962,4.171712417144775,12.784041110610962,4.171712417144775C13.318641110610962,4.316442417144776,13.837041110610961,4.695622417144776,15.315341110610962,5.845412417144775C15.315341110610962,5.845412417144775,16.543241110610964,4.266702417144776,16.543241110610964,4.266702417144776C16.543241110610964,4.266702417144776,16.543241110610964,4.266702417144776,16.543241110610964,4.266702417144776ZM11.215961110610962,4.171712417144775C11.729411110610961,4.0326924171447756,12.270541110610962,4.0326924171447756,12.784041110610962,4.171712417144775C12.784041110610962,4.171712417144775,13.306741110610963,2.2412214171447755,13.306741110610963,2.2412214171447755C12.450941110610962,2.0095162171447756,11.549021110610962,2.0095162171447756,10.693271110610961,2.2412214171447755C10.693271110610961,2.2412214171447755,11.215961110610962,4.171712417144775,11.215961110610962,4.171712417144775C11.215961110610962,4.171712417144775,11.215961110610962,4.171712417144775,11.215961110610962,4.171712417144775ZM4.000001110610961,12.130142417144775C4.000001110610961,10.924782417144776,4.008691110610962,10.513352417144775,4.111041110610962,10.147682417144775C4.111041110610962,10.147682417144775,2.185068110610962,9.608582417144776,2.185068110610962,9.608582417144776C1.991309990610962,10.300782417144775,1.999999993110962,11.038052417144776,1.999999993110962,12.130142417144775C1.999999993110962,12.130142417144775,4.000001110610961,12.130142417144775,4.000001110610961,12.130142417144775C4.000001110610961,12.130142417144775,4.000001110610961,12.130142417144775,4.000001110610961,12.130142417144775ZM4.8568411106109615,6.288922417144775C3.994801110610962,6.959392417144775,3.407501110610962,7.4051824171447755,2.980067110610962,7.983092417144776C2.980067110610962,7.983092417144776,4.588041110610962,9.172392417144774,4.588041110610962,9.172392417144774C4.813841110610962,8.867092417144775,5.133281110610962,8.607642417144774,6.084721110610962,7.867632417144775C6.084721110610962,7.867632417144775,4.8568411106109615,6.288922417144775,4.8568411106109615,6.288922417144775C4.8568411106109615,6.288922417144775,4.8568411106109615,6.288922417144775,4.8568411106109615,6.288922417144775ZM4.111041110610962,10.147682417144775C4.209401110610962,9.796282417144775,4.371051110610962,9.465772417144775,4.588041110610962,9.172392417144774C4.588041110610962,9.172392417144774,2.980068110610962,7.983092417144776,2.980068110610962,7.983092417144776C2.6184141106109617,8.472062417144777,2.349004110610962,9.022912417144775,2.185068110610962,9.608582417144776C2.185068110610962,9.608582417144776,4.111041110610962,10.147682417144775,4.111041110610962,10.147682417144775C4.111041110610962,10.147682417144775,4.111041110610962,10.147682417144775,4.111041110610962,10.147682417144775ZM1.999999993110962,14.600042417144776C1.999999993110962,15.703642417144776,1.9992199936109618,16.591442417144776,2.057818010610962,17.308642417144775C2.117367110610962,18.037442417144774,2.243180110610962,18.677642417144774,2.544967110610962,19.269942417144776C2.544967110610962,19.269942417144776,4.326981110610962,18.361942417144775,4.326981110610962,18.361942417144775C4.192791110610962,18.098642417144774,4.1006211106109625,17.750942417144778,4.051181110610962,17.145742417144774C4.000781110610962,16.528942417144776,4.000001110610961,15.736642417144775,4.000001110610961,14.600042417144776C4.000001110610961,14.600042417144776,1.999999993110962,14.600042417144776,1.999999993110962,14.600042417144776C1.999999993110962,14.600042417144776,1.999999993110962,14.600042417144776,1.999999993110962,14.600042417144776ZM9.400001110610962,20.000042417144776C8.26339111061096,20.000042417144776,7.471081110610962,19.999242417144774,6.854241110610962,19.948842417144775C6.249071110610962,19.899342417144776,5.901381110610962,19.807242417144774,5.638031110610962,19.673042417144774C5.638031110610962,19.673042417144774,4.730051110610962,21.455042417144774,4.730051110610962,21.455042417144774C5.322341110610962,21.756842417144775,5.962531110610962,21.882642417144776,6.691381110610962,21.942142417144776C7.408551110610962,22.000742417144775,8.296401110610962,22.000042417144776,9.400001110610962,22.000042417144776C9.400001110610962,22.000042417144776,9.400001110610962,20.000042417144776,9.400001110610962,20.000042417144776C9.400001110610962,20.000042417144776,9.400001110610962,20.000042417144776,9.400001110610962,20.000042417144776ZM2.544967110610962,19.269942417144776C3.024331110610962,20.210742417144775,3.789241110610962,20.975642417144776,4.730051110610962,21.455042417144774C4.730051110610962,21.455042417144774,5.638031110610962,19.673042417144774,5.638031110610962,19.673042417144774C5.073541110610962,19.385442417144777,4.614601110610963,18.926442417144777,4.326981110610962,18.361942417144775C4.326981110610962,18.361942417144775,2.544967110610962,19.269942417144776,2.544967110610962,19.269942417144776C2.544967110610962,19.269942417144776,2.544967110610962,19.269942417144776,2.544967110610962,19.269942417144776Z",
          fill: color,
          fillOpacity: "0.800000011920929"
        })
      })
    })]
  });
};
var Follow = function Follow(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    fill: "none",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "master_svg0_21_43914",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          rx: "0"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      clipPath: "url(#master_svg0_21_43914)",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M15.707098331069947,17.292898331069946C15.316598331069946,16.902398331069946,14.683398331069947,16.902398331069946,14.292898331069946,17.292898331069946C13.902398331069946,17.683398331069945,13.902398331069946,18.316598331069947,14.292898331069946,18.707098331069947C14.292898331069946,18.707098331069947,15.707098331069947,17.292898331069946,15.707098331069947,17.292898331069946C15.707098331069947,17.292898331069946,15.707098331069947,17.292898331069946,15.707098331069947,17.292898331069946ZM16.999998331069946,19.999998331069946C16.999998331069946,19.999998331069946,16.292898331069946,20.707098331069947,16.292898331069946,20.707098331069947C16.683398331069945,21.097598331069946,17.316598331069947,21.097598331069946,17.707098331069947,20.707098331069947C17.707098331069947,20.707098331069947,16.999998331069946,19.999998331069946,16.999998331069946,19.999998331069946C16.999998331069946,19.999998331069946,16.999998331069946,19.999998331069946,16.999998331069946,19.999998331069946ZM21.707098331069947,16.707098331069947C22.097598331069946,16.316598331069947,22.097598331069946,15.683398331069947,21.707098331069947,15.292898331069946C21.316598331069947,14.902398331069946,20.683398331069945,14.902398331069946,20.292898331069946,15.292898331069946C20.292898331069946,15.292898331069946,21.707098331069947,16.707098331069947,21.707098331069947,16.707098331069947C21.707098331069947,16.707098331069947,21.707098331069947,16.707098331069947,21.707098331069947,16.707098331069947ZM10.999998331069946,20.999998331069946C11.552278331069946,20.999998331069946,11.999998331069946,20.552298331069945,11.999998331069946,19.999998331069946C11.999998331069946,19.447698331069947,11.552278331069946,18.999998331069946,10.999998331069946,18.999998331069946C10.999998331069946,18.999998331069946,10.999998331069946,20.999998331069946,10.999998331069946,20.999998331069946C10.999998331069946,20.999998331069946,10.999998331069946,20.999998331069946,10.999998331069946,20.999998331069946ZM18.999998331069946,11.999998331069946C18.999998331069946,12.552288331069946,19.447698331069947,12.999998331069946,19.999998331069946,12.999998331069946C20.552298331069945,12.999998331069946,20.999998331069946,12.552288331069946,20.999998331069946,11.999998331069946C20.999998331069946,11.999998331069946,18.999998331069946,11.999998331069946,18.999998331069946,11.999998331069946C18.999998331069946,11.999998331069946,18.999998331069946,11.999998331069946,18.999998331069946,11.999998331069946ZM5.092018331069946,19.781998331069946C5.092018331069946,19.781998331069946,5.546008331069946,18.890998331069945,5.546008331069946,18.890998331069945C5.546008331069946,18.890998331069945,5.546008331069946,18.890998331069945,5.546008331069946,18.890998331069945C5.546008331069946,18.890998331069945,5.092018331069946,19.781998331069946,5.092018331069946,19.781998331069946C5.092018331069946,19.781998331069946,5.092018331069946,19.781998331069946,5.092018331069946,19.781998331069946ZM4.217988331069947,18.907998331069948C4.217988331069947,18.907998331069948,5.108988331069947,18.453998331069947,5.108988331069947,18.453998331069947C5.108988331069947,18.453998331069947,5.108988331069947,18.453998331069947,5.108988331069947,18.453998331069947C5.108988331069947,18.453998331069947,4.217988331069947,18.907998331069948,4.217988331069947,18.907998331069948C4.217988331069947,18.907998331069948,4.217988331069947,18.907998331069948,4.217988331069947,18.907998331069948ZM18.907998331069948,4.217988331069947C18.907998331069948,4.217988331069947,18.453998331069947,5.108988331069947,18.453998331069947,5.108988331069947C18.453998331069947,5.108988331069947,18.453998331069947,5.108988331069947,18.453998331069947,5.108988331069947C18.453998331069947,5.108988331069947,18.907998331069948,4.217988331069947,18.907998331069948,4.217988331069947C18.907998331069948,4.217988331069947,18.907998331069948,4.217988331069947,18.907998331069948,4.217988331069947ZM19.781998331069946,5.092018331069946C19.781998331069946,5.092018331069946,18.890998331069945,5.546008331069946,18.890998331069945,5.546008331069946C18.890998331069945,5.546008331069946,18.890998331069945,5.546008331069946,18.890998331069945,5.546008331069946C18.890998331069945,5.546008331069946,19.781998331069946,5.092018331069946,19.781998331069946,5.092018331069946C19.781998331069946,5.092018331069946,19.781998331069946,5.092018331069946,19.781998331069946,5.092018331069946ZM5.092018331069946,4.217988331069947C5.092018331069946,4.217988331069947,4.638028331069947,3.3269803310699464,4.638028331069947,3.3269803310699464C4.638028331069947,3.3269803310699464,4.638028331069947,3.3269803310699464,4.638028331069947,3.3269803310699464C4.638028331069947,3.3269803310699464,5.092018331069946,4.217988331069947,5.092018331069946,4.217988331069947C5.092018331069946,4.217988331069947,5.092018331069946,4.217988331069947,5.092018331069946,4.217988331069947ZM4.217988331069947,5.092018331069946C4.217988331069947,5.092018331069946,3.3269803310699464,4.638028331069947,3.3269803310699464,4.638028331069947C3.3269803310699464,4.638028331069947,3.3269803310699464,4.638028331069947,3.3269803310699464,4.638028331069947C3.3269803310699464,4.638028331069947,4.217988331069947,5.092018331069946,4.217988331069947,5.092018331069946C4.217988331069947,5.092018331069946,4.217988331069947,5.092018331069946,4.217988331069947,5.092018331069946ZM5.999998331069946,19.999998331069946C5.999998331069946,20.552298331069945,6.447718331069947,20.999998331069946,6.999998331069946,20.999998331069946C7.552278331069946,20.999998331069946,7.999998331069946,20.552298331069945,7.999998331069946,19.999998331069946C7.999998331069946,19.999998331069946,5.999998331069946,19.999998331069946,5.999998331069946,19.999998331069946C5.999998331069946,19.999998331069946,5.999998331069946,19.999998331069946,5.999998331069946,19.999998331069946ZM7.100018331069946,18.999998331069946C7.100018331069946,18.999998331069946,6.119998331069946,18.801098331069944,6.119998331069946,18.801098331069944C6.119998331069946,18.801098331069944,7.100018331069946,18.999998331069946,7.100018331069946,18.999998331069946C7.100018331069946,18.999998331069946,7.100018331069946,18.999998331069946,7.100018331069946,18.999998331069946ZM11.999998331069946,15.999998331069946C12.552288331069946,15.999998331069946,12.999998331069946,15.552298331069947,12.999998331069946,14.999998331069946C12.999998331069946,14.447698331069946,12.552288331069946,13.999998331069946,11.999998331069946,13.999998331069946C11.999998331069946,13.999998331069946,11.999998331069946,15.999998331069946,11.999998331069946,15.999998331069946C11.999998331069946,15.999998331069946,11.999998331069946,15.999998331069946,11.999998331069946,15.999998331069946ZM14.292898331069946,18.707098331069947C14.292898331069946,18.707098331069947,16.292898331069946,20.707098331069947,16.292898331069946,20.707098331069947C16.292898331069946,20.707098331069947,17.707098331069947,19.292898331069946,17.707098331069947,19.292898331069946C17.707098331069947,19.292898331069946,15.707098331069947,17.292898331069946,15.707098331069947,17.292898331069946C15.707098331069947,17.292898331069946,14.292898331069946,18.707098331069947,14.292898331069946,18.707098331069947C14.292898331069946,18.707098331069947,14.292898331069946,18.707098331069947,14.292898331069946,18.707098331069947ZM17.707098331069947,20.707098331069947C17.707098331069947,20.707098331069947,21.707098331069947,16.707098331069947,21.707098331069947,16.707098331069947C21.707098331069947,16.707098331069947,20.292898331069946,15.292898331069946,20.292898331069946,15.292898331069946C20.292898331069946,15.292898331069946,16.292898331069946,19.292898331069946,16.292898331069946,19.292898331069946C16.292898331069946,19.292898331069946,17.707098331069947,20.707098331069947,17.707098331069947,20.707098331069947C17.707098331069947,20.707098331069947,17.707098331069947,20.707098331069947,17.707098331069947,20.707098331069947ZM12.999998331069946,9.999998331069946C12.999998331069946,10.552278331069946,12.552288331069946,10.999998331069946,11.999998331069946,10.999998331069946C11.999998331069946,10.999998331069946,11.999998331069946,12.999998331069946,11.999998331069946,12.999998331069946C13.656898331069947,12.999998331069946,14.999998331069946,11.656848331069947,14.999998331069946,9.999998331069946C14.999998331069946,9.999998331069946,12.999998331069946,9.999998331069946,12.999998331069946,9.999998331069946C12.999998331069946,9.999998331069946,12.999998331069946,9.999998331069946,12.999998331069946,9.999998331069946ZM11.999998331069946,10.999998331069946C11.447718331069947,10.999998331069946,10.999998331069946,10.552278331069946,10.999998331069946,9.999998331069946C10.999998331069946,9.999998331069946,8.999998331069946,9.999998331069946,8.999998331069946,9.999998331069946C8.999998331069946,11.656848331069947,10.343148331069946,12.999998331069946,11.999998331069946,12.999998331069946C11.999998331069946,12.999998331069946,11.999998331069946,10.999998331069946,11.999998331069946,10.999998331069946C11.999998331069946,10.999998331069946,11.999998331069946,10.999998331069946,11.999998331069946,10.999998331069946ZM10.999998331069946,9.999998331069946C10.999998331069946,9.447718331069947,11.447718331069947,8.999998331069946,11.999998331069946,8.999998331069946C11.999998331069946,8.999998331069946,11.999998331069946,6.999998331069946,11.999998331069946,6.999998331069946C10.343148331069946,6.999998331069946,8.999998331069946,8.343148331069946,8.999998331069946,9.999998331069946C8.999998331069946,9.999998331069946,10.999998331069946,9.999998331069946,10.999998331069946,9.999998331069946C10.999998331069946,9.999998331069946,10.999998331069946,9.999998331069946,10.999998331069946,9.999998331069946ZM11.999998331069946,8.999998331069946C12.552288331069946,8.999998331069946,12.999998331069946,9.447718331069947,12.999998331069946,9.999998331069946C12.999998331069946,9.999998331069946,14.999998331069946,9.999998331069946,14.999998331069946,9.999998331069946C14.999998331069946,8.343148331069946,13.656898331069947,6.999998331069946,11.999998331069946,6.999998331069946C11.999998331069946,6.999998331069946,11.999998331069946,8.999998331069946,11.999998331069946,8.999998331069946C11.999998331069946,8.999998331069946,11.999998331069946,8.999998331069946,11.999998331069946,8.999998331069946ZM7.1999983310699465,4.999998331069946C7.1999983310699465,4.999998331069946,16.799998331069947,4.999998331069946,16.799998331069947,4.999998331069946C16.799998331069947,4.999998331069946,16.799998331069947,3.000000083799946,16.799998331069947,3.000000083799946C16.799998331069947,3.000000083799946,7.1999983310699465,3.000000083799946,7.1999983310699465,3.000000083799946C7.1999983310699465,3.000000083799946,7.1999983310699465,4.999998331069946,7.1999983310699465,4.999998331069946C7.1999983310699465,4.999998331069946,7.1999983310699465,4.999998331069946,7.1999983310699465,4.999998331069946ZM10.999998331069946,18.999998331069946C10.999998331069946,18.999998331069946,7.1999983310699465,18.999998331069946,7.1999983310699465,18.999998331069946C7.1999983310699465,18.999998331069946,7.1999983310699465,20.999998331069946,7.1999983310699465,20.999998331069946C7.1999983310699465,20.999998331069946,10.999998331069946,20.999998331069946,10.999998331069946,20.999998331069946C10.999998331069946,20.999998331069946,10.999998331069946,18.999998331069946,10.999998331069946,18.999998331069946C10.999998331069946,18.999998331069946,10.999998331069946,18.999998331069946,10.999998331069946,18.999998331069946ZM4.999998331069946,16.799998331069947C4.999998331069946,16.799998331069947,4.999998331069946,7.1999983310699465,4.999998331069946,7.1999983310699465C4.999998331069946,7.1999983310699465,3.000000083799946,7.1999983310699465,3.000000083799946,7.1999983310699465C3.000000083799946,7.1999983310699465,3.000000083799946,16.799998331069947,3.000000083799946,16.799998331069947C3.000000083799946,16.799998331069947,4.999998331069946,16.799998331069947,4.999998331069946,16.799998331069947C4.999998331069946,16.799998331069947,4.999998331069946,16.799998331069947,4.999998331069946,16.799998331069947ZM18.999998331069946,7.1999983310699465C18.999998331069946,7.1999983310699465,18.999998331069946,11.999998331069946,18.999998331069946,11.999998331069946C18.999998331069946,11.999998331069946,20.999998331069946,11.999998331069946,20.999998331069946,11.999998331069946C20.999998331069946,11.999998331069946,20.999998331069946,7.1999983310699465,20.999998331069946,7.1999983310699465C20.999998331069946,7.1999983310699465,18.999998331069946,7.1999983310699465,18.999998331069946,7.1999983310699465C18.999998331069946,7.1999983310699465,18.999998331069946,7.1999983310699465,18.999998331069946,7.1999983310699465ZM7.1999983310699465,18.999998331069946C6.623448331069946,18.999998331069946,6.251168331069946,18.999198331069948,5.967838331069946,18.97609833106995C5.696168331069947,18.953898331069947,5.595448331069946,18.916198331069946,5.546008331069946,18.890998331069945C5.546008331069946,18.890998331069945,4.638028331069947,20.672998331069945,4.638028331069947,20.672998331069945C5.016408331069947,20.865798331069946,5.409628331069946,20.937098331069947,5.804968331069946,20.969398331069947C6.188638331069946,21.000798331069948,6.656448331069946,20.999998331069946,7.1999983310699465,20.999998331069946C7.1999983310699465,20.999998331069946,7.1999983310699465,18.999998331069946,7.1999983310699465,18.999998331069946C7.1999983310699465,18.999998331069946,7.1999983310699465,18.999998331069946,7.1999983310699465,18.999998331069946ZM3.000000083799946,16.799998331069947C3.000000083799946,17.34359833106995,2.9992200840699463,17.811398331069945,3.0305691310699463,18.194998331069947C3.062870131069946,18.59039833106995,3.1341863310699463,18.983598331069945,3.3269813310699465,19.361998331069945C3.3269813310699465,19.361998331069945,5.108988331069947,18.453998331069947,5.108988331069947,18.453998331069947C5.083798331069946,18.404498331069945,5.0461183310699464,18.30379833106995,5.023928331069946,18.032198331069946C5.000778331069946,17.748798331069946,4.999998331069946,17.376598331069946,4.999998331069946,16.799998331069947C4.999998331069946,16.799998331069947,3.000000083799946,16.799998331069947,3.000000083799946,16.799998331069947C3.000000083799946,16.799998331069947,3.000000083799946,16.799998331069947,3.000000083799946,16.799998331069947ZM5.546008331069946,18.890998331069945C5.357848331069946,18.795098331069944,5.204868331069946,18.64219833106995,5.108988331069947,18.453998331069947C5.108988331069947,18.453998331069947,3.3269803310699464,19.361998331069945,3.3269803310699464,19.361998331069945C3.614601331069946,19.926498331069947,4.073538331069946,20.385398331069947,4.638028331069947,20.672998331069945C4.638028331069947,20.672998331069945,5.546008331069946,18.890998331069945,5.546008331069946,18.890998331069945C5.546008331069946,18.890998331069945,5.546008331069946,18.890998331069945,5.546008331069946,18.890998331069945ZM16.799998331069947,4.999998331069946C17.376598331069946,4.999998331069946,17.748798331069946,5.000778331069946,18.032198331069946,5.023928331069946C18.30379833106995,5.0461183310699464,18.404498331069945,5.083798331069946,18.453998331069947,5.108988331069947C18.453998331069947,5.108988331069947,19.361998331069945,3.3269813310699465,19.361998331069945,3.3269813310699465C18.983598331069945,3.1341863310699463,18.59039833106995,3.062870131069946,18.194998331069947,3.0305691310699463C17.811398331069945,2.9992200840699463,17.34359833106995,3.000000083799946,16.799998331069947,3.000000083799946C16.799998331069947,3.000000083799946,16.799998331069947,4.999998331069946,16.799998331069947,4.999998331069946C16.799998331069947,4.999998331069946,16.799998331069947,4.999998331069946,16.799998331069947,4.999998331069946ZM20.999998331069946,7.1999983310699465C20.999998331069946,6.656448331069946,21.000798331069948,6.188638331069946,20.969398331069947,5.804968331069946C20.937098331069947,5.409628331069946,20.865798331069946,5.016408331069947,20.672998331069945,4.638028331069947C20.672998331069945,4.638028331069947,18.890998331069945,5.546008331069946,18.890998331069945,5.546008331069946C18.916198331069946,5.595448331069946,18.953898331069947,5.696168331069947,18.97609833106995,5.967838331069946C18.999198331069948,6.251168331069946,18.999998331069946,6.623448331069946,18.999998331069946,7.1999983310699465C18.999998331069946,7.1999983310699465,20.999998331069946,7.1999983310699465,20.999998331069946,7.1999983310699465C20.999998331069946,7.1999983310699465,20.999998331069946,7.1999983310699465,20.999998331069946,7.1999983310699465ZM18.453998331069947,5.108988331069947C18.64219833106995,5.204868331069946,18.795098331069944,5.357848331069946,18.890998331069945,5.546008331069946C18.890998331069945,5.546008331069946,20.672998331069945,4.638028331069947,20.672998331069945,4.638028331069947C20.385398331069947,4.073538331069946,19.926498331069947,3.614601331069946,19.361998331069945,3.3269803310699464C19.361998331069945,3.3269803310699464,18.453998331069947,5.108988331069947,18.453998331069947,5.108988331069947C18.453998331069947,5.108988331069947,18.453998331069947,5.108988331069947,18.453998331069947,5.108988331069947ZM7.1999983310699465,3.000000083799946C6.656448331069946,3.000000083799946,6.188638331069946,2.9992200840699463,5.804968331069946,3.0305691310699463C5.409628331069946,3.062870131069946,5.016408331069947,3.1341863310699463,4.638028331069947,3.3269803310699464C4.638028331069947,3.3269803310699464,5.546008331069946,5.108988331069947,5.546008331069946,5.108988331069947C5.595448331069946,5.083798331069946,5.696168331069947,5.0461183310699464,5.967838331069946,5.023928331069946C6.251168331069946,5.000778331069946,6.623448331069946,4.999998331069946,7.1999983310699465,4.999998331069946C7.1999983310699465,4.999998331069946,7.1999983310699465,3.000000083799946,7.1999983310699465,3.000000083799946C7.1999983310699465,3.000000083799946,7.1999983310699465,3.000000083799946,7.1999983310699465,3.000000083799946ZM4.999998331069946,7.1999983310699465C4.999998331069946,6.623448331069946,5.000778331069946,6.251168331069946,5.023928331069946,5.967838331069946C5.0461183310699464,5.696168331069947,5.083798331069946,5.595448331069946,5.108988331069947,5.546008331069946C5.108988331069947,5.546008331069946,3.3269803310699464,4.638028331069947,3.3269803310699464,4.638028331069947C3.1341863310699463,5.016408331069947,3.062870131069946,5.409628331069946,3.0305691310699463,5.804968331069946C2.9992200840699463,6.188638331069946,3.000000083799946,6.656448331069946,3.000000083799946,7.1999983310699465C3.000000083799946,7.1999983310699465,4.999998331069946,7.1999983310699465,4.999998331069946,7.1999983310699465C4.999998331069946,7.1999983310699465,4.999998331069946,7.1999983310699465,4.999998331069946,7.1999983310699465ZM4.638028331069947,3.3269803310699464C4.073538331069946,3.614601331069946,3.614601331069946,4.073538331069946,3.3269803310699464,4.638028331069947C3.3269803310699464,4.638028331069947,5.108988331069947,5.546008331069946,5.108988331069947,5.546008331069946C5.204868331069946,5.357848331069946,5.357848331069946,5.204868331069946,5.546008331069946,5.108988331069947C5.546008331069946,5.108988331069947,4.638028331069947,3.3269803310699464,4.638028331069947,3.3269803310699464C4.638028331069947,3.3269803310699464,4.638028331069947,3.3269803310699464,4.638028331069947,3.3269803310699464ZM7.999998331069946,19.999998331069946C7.999998331069946,19.724698331069945,8.027658331069947,19.456898331069947,8.080028331069947,19.198898331069945C8.080028331069947,19.198898331069945,6.119998331069946,18.801098331069944,6.119998331069946,18.801098331069944C6.041198331069946,19.189298331069946,5.999998331069946,19.590298331069945,5.999998331069946,19.999998331069946C5.999998331069946,19.999998331069946,7.999998331069946,19.999998331069946,7.999998331069946,19.999998331069946C7.999998331069946,19.999998331069946,7.999998331069946,19.999998331069946,7.999998331069946,19.999998331069946ZM8.080028331069947,19.198898331069945C8.450558331069946,17.373598331069946,10.065998331069945,15.999998331069946,11.999998331069946,15.999998331069946C11.999998331069946,15.999998331069946,11.999998331069946,13.999998331069946,11.999998331069946,13.999998331069946C9.096088331069947,13.999998331069946,6.676008331069946,16.061998331069944,6.119998331069946,18.801098331069944C6.119998331069946,18.801098331069944,8.080028331069947,19.198898331069945,8.080028331069947,19.198898331069945C8.080028331069947,19.198898331069945,8.080028331069947,19.198898331069945,8.080028331069947,19.198898331069945Z",
          fill: color,
          fillOpacity: "0.800000011920929"
        })
      })
    })]
  });
};
//profile
var Setting = function Setting(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    fill: "none",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "master_svg0_21_43366",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          rx: "0"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      clipPath: "url(#master_svg0_21_43366)",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M12.905,3.0600447080230713C12.905,3.0600447080230713,13.185,2.1000767080230713,13.185,2.1000767080230713C13.185,2.1000767080230713,13.185,2.1000767080230713,13.185,2.1000767080230713C13.185,2.1000767080230713,12.905,3.0600447080230713,12.905,3.0600447080230713C12.905,3.0600447080230713,12.905,3.0600447080230713,12.905,3.0600447080230713ZM13.6657,3.5751047080230713C13.6657,3.5751047080230713,12.8784,4.191704708023071,12.8784,4.191704708023071C12.8784,4.191704708023071,12.8784,4.191704708023071,12.8784,4.191704708023071C12.8784,4.191704708023071,13.6657,3.5751047080230713,13.6657,3.5751047080230713C13.6657,3.5751047080230713,13.6657,3.5751047080230713,13.6657,3.5751047080230713ZM12.905,20.939984708023072C12.905,20.939984708023072,13.185,21.89988470802307,13.185,21.89988470802307C13.185,21.89988470802307,13.185,21.89988470802307,13.185,21.89988470802307C13.185,21.89988470802307,12.905,20.939984708023072,12.905,20.939984708023072C12.905,20.939984708023072,12.905,20.939984708023072,12.905,20.939984708023072ZM13.6657,20.42488470802307C13.6657,20.42488470802307,14.453,21.04148470802307,14.453,21.04148470802307C14.453,21.04148470802307,14.453,21.04148470802307,14.453,21.04148470802307C14.453,21.04148470802307,13.6657,20.42488470802307,13.6657,20.42488470802307C13.6657,20.42488470802307,13.6657,20.42488470802307,13.6657,20.42488470802307ZM11.09573,20.939984708023072C11.09573,20.939984708023072,10.81562,21.89988470802307,10.81562,21.89988470802307C10.81562,21.89988470802307,10.81563,21.89988470802307,10.81563,21.89988470802307C10.81563,21.89988470802307,11.09573,20.939984708023072,11.09573,20.939984708023072C11.09573,20.939984708023072,11.09573,20.939984708023072,11.09573,20.939984708023072ZM10.33497,20.42488470802307C10.33497,20.42488470802307,9.54769,21.04148470802307,9.54769,21.04148470802307C9.54769,21.04148470802307,9.54769,21.04148470802307,9.54769,21.04148470802307C9.54769,21.04148470802307,10.33497,20.42488470802307,10.33497,20.42488470802307C10.33497,20.42488470802307,10.33497,20.42488470802307,10.33497,20.42488470802307ZM11.09573,3.0600447080230713C11.09573,3.0600447080230713,11.37584,4.020024708023071,11.37584,4.020024708023071C11.37584,4.020024708023071,11.09573,3.0600447080230713,11.09573,3.0600447080230713C11.09573,3.0600447080230713,11.09573,3.0600447080230713,11.09573,3.0600447080230713ZM10.33497,3.5751047080230713C10.33497,3.5751047080230713,9.54769,2.958512708023071,9.54769,2.958512708023071C9.54769,2.958512708023071,9.54769,2.958512708023071,9.54769,2.958512708023071C9.54769,2.958512708023071,10.33497,3.5751047080230713,10.33497,3.5751047080230713C10.33497,3.5751047080230713,10.33497,3.5751047080230713,10.33497,3.5751047080230713ZM7.79813,4.932814708023072C7.79813,4.932814708023072,7.4819,5.881494708023071,7.4819,5.881494708023071C7.4819,5.881494708023071,7.48201,5.8815347080230715,7.48201,5.8815347080230715C7.48201,5.8815347080230715,7.79813,4.932814708023072,7.79813,4.932814708023072C7.79813,4.932814708023072,7.79813,4.932814708023072,7.79813,4.932814708023072ZM16.1582,19.052884708023072C16.1582,19.052884708023072,15.8419,20.00148470802307,15.8419,20.00148470802307C15.8419,20.00148470802307,15.842,20.00148470802307,15.842,20.00148470802307C15.842,20.00148470802307,16.1582,19.052884708023072,16.1582,19.052884708023072C16.1582,19.052884708023072,16.1582,19.052884708023072,16.1582,19.052884708023072ZM19.0527,16.15838470802307C19.0527,16.15838470802307,20.0014,15.84218470802307,20.0014,15.84218470802307C20.0014,15.84218470802307,19.0527,16.15838470802307,19.0527,16.15838470802307C19.0527,16.15838470802307,19.0527,16.15838470802307,19.0527,16.15838470802307ZM6.15735,4.915904708023071C6.15735,4.915904708023071,6.65582,5.782814708023071,6.65582,5.782814708023071C6.65582,5.782814708023071,6.65583,5.782814708023071,6.65583,5.782814708023071C6.65583,5.782814708023071,6.15735,4.915904708023071,6.15735,4.915904708023071C6.15735,4.915904708023071,6.15735,4.915904708023071,6.15735,4.915904708023071ZM6.9923,4.718804708023072C6.9923,4.718804708023072,6.93414,5.717114708023072,6.93414,5.717114708023072C6.93414,5.717114708023072,6.93414,5.717114708023072,6.93414,5.717114708023072C6.93414,5.717114708023072,6.9923,4.718804708023072,6.9923,4.718804708023072C6.9923,4.718804708023072,6.9923,4.718804708023072,6.9923,4.718804708023072ZM19.104,17.806784708023073C19.104,17.806784708023073,19.9842,18.281384708023072,19.9842,18.281384708023072C19.9842,18.281384708023072,19.9842,18.281384708023072,19.9842,18.281384708023072C19.9842,18.281384708023072,19.104,17.806784708023073,19.104,17.806784708023073C19.104,17.806784708023073,19.104,17.806784708023073,19.104,17.806784708023073ZM19.283,17.04868470802307C19.283,17.04868470802307,18.2835,17.079484708023074,18.2835,17.079484708023074C18.2835,17.079484708023074,18.2835,17.079484708023074,18.2835,17.079484708023074C18.2835,17.079484708023074,19.283,17.04868470802307,19.283,17.04868470802307C19.283,17.04868470802307,19.283,17.04868470802307,19.283,17.04868470802307ZM17.8066,19.10418470802307C17.8066,19.10418470802307,18.2812,19.98438470802307,18.2812,19.98438470802307C18.2812,19.98438470802307,18.2812,19.98438470802307,18.2812,19.98438470802307C18.2812,19.98438470802307,17.8066,19.10418470802307,17.8066,19.10418470802307C17.8066,19.10418470802307,17.8066,19.10418470802307,17.8066,19.10418470802307ZM17.0485,19.28318470802307C17.0485,19.28318470802307,17.0176,20.282684708023073,17.0176,20.282684708023073C17.0176,20.282684708023073,17.0485,19.28318470802307,17.0485,19.28318470802307C17.0485,19.28318470802307,17.0485,19.28318470802307,17.0485,19.28318470802307ZM4.9493,6.131894708023071C4.9493,6.131894708023071,5.8230900000000005,6.618194708023071,5.8230900000000005,6.618194708023071C5.8230900000000005,6.618194708023071,5.8230900000000005,6.618194708023071,5.8230900000000005,6.618194708023071C5.8230900000000005,6.618194708023071,4.9493,6.131894708023071,4.9493,6.131894708023071C4.9493,6.131894708023071,4.9493,6.131894708023071,4.9493,6.131894708023071ZM4.76793,7.015514708023071C4.76793,7.015514708023071,3.77323,7.118294708023071,3.77323,7.118294708023071C3.77323,7.118294708023071,3.77323,7.118294708023071,3.77323,7.118294708023071C3.77323,7.118294708023071,4.76793,7.015514708023071,4.76793,7.015514708023071C4.76793,7.015514708023071,4.76793,7.015514708023071,4.76793,7.015514708023071ZM16.2021,4.932734708023071C16.2021,4.932734708023071,16.5183,5.881424708023071,16.5183,5.881424708023071C16.5183,5.881424708023071,16.5183,5.881424708023071,16.5183,5.881424708023071C16.5183,5.881424708023071,16.2021,4.932734708023071,16.2021,4.932734708023071C16.2021,4.932734708023071,16.2021,4.932734708023071,16.2021,4.932734708023071ZM4.94755,16.15838470802307C4.94755,16.15838470802307,5.896240000000001,16.474584708023073,5.896240000000001,16.474584708023073C5.896240000000001,16.474584708023073,5.896240000000001,16.474584708023073,5.896240000000001,16.474584708023073C5.896240000000001,16.474584708023073,4.94755,16.15838470802307,4.94755,16.15838470802307C4.94755,16.15838470802307,4.94755,16.15838470802307,4.94755,16.15838470802307ZM7.84198,19.052784708023072C7.84198,19.052784708023072,7.52575,18.10408470802307,7.52575,18.10408470802307C7.52575,18.10408470802307,7.52575,18.10408470802307,7.52575,18.10408470802307C7.52575,18.10408470802307,7.84198,19.052784708023072,7.84198,19.052784708023072C7.84198,19.052784708023072,7.84198,19.052784708023072,7.84198,19.052784708023072ZM17.8429,4.9158347080230715C17.8429,4.9158347080230715,18.3414,4.048934708023071,18.3414,4.048934708023071C18.3414,4.048934708023071,18.3414,4.048934708023071,18.3414,4.048934708023071C18.3414,4.048934708023071,17.8429,4.9158347080230715,17.8429,4.9158347080230715C17.8429,4.9158347080230715,17.8429,4.9158347080230715,17.8429,4.9158347080230715ZM17.0079,4.718724708023071C17.0079,4.718724708023071,17.0661,5.717034708023071,17.0661,5.717034708023071C17.0661,5.717034708023071,17.0661,5.717034708023071,17.0661,5.717034708023071C17.0661,5.717034708023071,17.0079,4.718724708023071,17.0079,4.718724708023071C17.0079,4.718724708023071,17.0079,4.718724708023071,17.0079,4.718724708023071ZM4.89621,17.80668470802307C4.89621,17.80668470802307,4.016,18.281284708023072,4.016,18.281284708023072C4.016,18.281284708023072,4.01601,18.281284708023072,4.01601,18.281284708023072C4.01601,18.281284708023072,4.89621,17.80668470802307,4.89621,17.80668470802307C4.89621,17.80668470802307,4.89621,17.80668470802307,4.89621,17.80668470802307ZM4.71724,17.04858470802307C4.71724,17.04858470802307,5.71676,17.07938470802307,5.71676,17.07938470802307C5.71676,17.07938470802307,5.71676,17.07938470802307,5.71676,17.07938470802307C5.71676,17.07938470802307,4.71724,17.04858470802307,4.71724,17.04858470802307C4.71724,17.04858470802307,4.71724,17.04858470802307,4.71724,17.04858470802307ZM6.19359,19.10408470802307C6.19359,19.10408470802307,5.718999999999999,19.984284708023072,5.718999999999999,19.984284708023072C5.718999999999999,19.984284708023072,5.718999999999999,19.984284708023072,5.718999999999999,19.984284708023072C5.718999999999999,19.984284708023072,6.19359,19.10408470802307,6.19359,19.10408470802307C6.19359,19.10408470802307,6.19359,19.10408470802307,6.19359,19.10408470802307ZM6.95174,19.283084708023072C6.95174,19.283084708023072,6.98258,20.282584708023073,6.98258,20.282584708023073C6.98258,20.282584708023073,6.98258,20.282584708023073,6.98258,20.282584708023073C6.98258,20.282584708023073,6.95174,19.283084708023072,6.95174,19.283084708023072C6.95174,19.283084708023072,6.95174,19.283084708023072,6.95174,19.283084708023072ZM19.0509,6.131814708023072C19.0509,6.131814708023072,18.1771,6.618114708023072,18.1771,6.618114708023072C18.1771,6.618114708023072,18.1771,6.618114708023072,18.1771,6.618114708023072C18.1771,6.618114708023072,19.0509,6.131814708023072,19.0509,6.131814708023072C19.0509,6.131814708023072,19.0509,6.131814708023072,19.0509,6.131814708023072ZM19.2323,7.015434708023071C19.2323,7.015434708023071,20.227,7.118214708023071,20.227,7.118214708023071C20.227,7.118214708023071,20.227,7.118214708023071,20.227,7.118214708023071C20.227,7.118214708023071,19.2323,7.015434708023071,19.2323,7.015434708023071C19.2323,7.015434708023071,19.2323,7.015434708023071,19.2323,7.015434708023071ZM4.16555,9.800874708023072C4.16555,9.800874708023072,4.68005,10.658374708023072,4.68005,10.658374708023072C4.68005,10.658374708023072,4.68013,10.658324708023072,4.68013,10.658324708023072C4.68013,10.658324708023072,4.16555,9.800874708023072,4.16555,9.800874708023072C4.16555,9.800874708023072,4.16555,9.800874708023072,4.16555,9.800874708023072ZM19.8351,9.800874708023072C19.8351,9.800874708023072,19.3206,10.658374708023072,19.3206,10.658374708023072C19.3206,10.658374708023072,19.3206,10.658374708023072,19.3206,10.658374708023072C19.3206,10.658374708023072,19.8351,9.800874708023072,19.8351,9.800874708023072C19.8351,9.800874708023072,19.8351,9.800874708023072,19.8351,9.800874708023072ZM3.07144,10.89296470802307C3.07144,10.89296470802307,4.024039999999999,11.197184708023071,4.024039999999999,11.197184708023071C4.024039999999999,11.197184708023071,4.024039999999999,11.197184708023071,4.024039999999999,11.197184708023071C4.024039999999999,11.197184708023071,3.07144,10.89296470802307,3.07144,10.89296470802307C3.07144,10.89296470802307,3.07144,10.89296470802307,3.07144,10.89296470802307ZM3.3738900000000003,10.358784708023071C3.3738900000000003,10.358784708023071,2.622915,9.698454708023071,2.622915,9.698454708023071C2.622915,9.698454708023071,2.6229139999999997,9.698454708023071,2.6229139999999997,9.698454708023071C2.6229139999999997,9.698454708023071,3.3738900000000003,10.358784708023071,3.3738900000000003,10.358784708023071C3.3738900000000003,10.358784708023071,3.3738900000000003,10.358784708023071,3.3738900000000003,10.358784708023071ZM20.9292,10.89296470802307C20.9292,10.89296470802307,19.9766,11.197184708023071,19.9766,11.197184708023071C19.9766,11.197184708023071,19.9766,11.197184708023071,19.9766,11.197184708023071C19.9766,11.197184708023071,20.9292,10.89296470802307,20.9292,10.89296470802307C20.9292,10.89296470802307,20.9292,10.89296470802307,20.9292,10.89296470802307ZM20.6268,10.358784708023071C20.6268,10.358784708023071,19.8758,11.019124708023071,19.8758,11.019124708023071C19.8758,11.019124708023071,19.8758,11.019124708023071,19.8758,11.019124708023071C19.8758,11.019124708023071,20.6268,10.358784708023071,20.6268,10.358784708023071C20.6268,10.358784708023071,20.6268,10.358784708023071,20.6268,10.358784708023071ZM20.9057,13.008784708023072C20.9057,13.008784708023072,19.9688,12.659184708023071,19.9688,12.659184708023071C19.9688,12.659184708023071,19.9688,12.659184708023071,19.9688,12.659184708023071C19.9688,12.659184708023071,20.9057,13.008784708023072,20.9057,13.008784708023072C20.9057,13.008784708023072,20.9057,13.008784708023072,20.9057,13.008784708023072ZM20.5091,13.59458470802307C20.5091,13.59458470802307,19.8366,12.85448470802307,19.8366,12.85448470802307C19.8366,12.85448470802307,19.8366,12.85448470802307,19.8366,12.85448470802307C19.8366,12.85448470802307,20.5091,13.59458470802307,20.5091,13.59458470802307C20.5091,13.59458470802307,20.5091,13.59458470802307,20.5091,13.59458470802307ZM3.09497,13.008784708023072C3.09497,13.008784708023072,4.03188,12.659184708023071,4.03188,12.659184708023071C4.03188,12.659184708023071,4.03188,12.659184708023071,4.03188,12.659184708023071C4.03188,12.659184708023071,3.09497,13.008784708023072,3.09497,13.008784708023072C3.09497,13.008784708023072,3.09497,13.008784708023072,3.09497,13.008784708023072ZM3.49158,13.59458470802307C3.49158,13.59458470802307,2.8190720000000002,14.33468470802307,2.8190720000000002,14.33468470802307C2.8190720000000002,14.33468470802307,2.8190720000000002,14.33468470802307,2.8190720000000002,14.33468470802307C2.8190720000000002,14.33468470802307,3.49158,13.59458470802307,3.49158,13.59458470802307C3.49158,13.59458470802307,3.49158,13.59458470802307,3.49158,13.59458470802307ZM18.8377,15.513384708023072C18.8377,15.513384708023072,19.7863,15.197084708023072,19.7863,15.197084708023072C19.7863,15.197084708023072,18.8377,15.513384708023072,18.8377,15.513384708023072C18.8377,15.513384708023072,18.8377,15.513384708023072,18.8377,15.513384708023072ZM8.368960000000001,18.877084708023073C8.368960000000001,18.877084708023073,8.05273,17.92838470802307,8.05273,17.92838470802307C8.05273,17.92838470802307,8.368960000000001,18.877084708023073,8.368960000000001,18.877084708023073C8.368960000000001,18.877084708023073,8.368960000000001,18.877084708023073,8.368960000000001,18.877084708023073ZM19.5572,9.634164708023071C19.5572,9.634164708023071,19.0427,10.491654708023072,19.0427,10.491654708023072C19.0427,10.491654708023072,19.5572,9.634164708023071,19.5572,9.634164708023071C19.5572,9.634164708023071,19.5572,9.634164708023071,19.5572,9.634164708023071ZM8.36891,5.123004708023071C8.36891,5.123004708023071,8.05279,6.071724708023071,8.05279,6.071724708023071C8.05279,6.071724708023071,8.36891,5.123004708023071,8.36891,5.123004708023071C8.36891,5.123004708023071,8.36891,5.123004708023071,8.36891,5.123004708023071ZM5.1627,15.512884708023071C5.1627,15.512884708023071,4.21402,15.19668470802307,4.21402,15.19668470802307C4.21402,15.19668470802307,5.1627,15.512884708023071,5.1627,15.512884708023071C5.1627,15.512884708023071,5.1627,15.512884708023071,5.1627,15.512884708023071ZM15.6316,18.877284708023073C15.6316,18.877284708023073,15.3153,19.82588470802307,15.3153,19.82588470802307C15.3153,19.82588470802307,15.6316,18.877284708023073,15.6316,18.877284708023073C15.6316,18.877284708023073,15.6316,18.877284708023073,15.6316,18.877284708023073ZM15.6317,5.122874708023071C15.6317,5.122874708023071,15.9479,6.071564708023072,15.9479,6.071564708023072C15.9479,6.071564708023072,15.6317,5.122874708023071,15.6317,5.122874708023071C15.6317,5.122874708023071,15.6317,5.122874708023071,15.6317,5.122874708023071ZM12.0003,4.000004708023072C12.5289,4.000004708023072,12.5893,4.009644708023071,12.6248,4.020024708023071C12.6248,4.020024708023071,13.185,2.1000767080230713,13.185,2.1000767080230713C12.8091,1.9903600480230712,12.4035,2.000000052023071,12.0003,2.000000052023071C12.0003,2.000000052023071,12.0003,4.000004708023072,12.0003,4.000004708023072C12.0003,4.000004708023072,12.0003,4.000004708023072,12.0003,4.000004708023072ZM14.9859,4.021334708023071C14.8361,3.6469747080230714,14.6945,3.2668747080230713,14.453,2.958512708023071C14.453,2.958512708023071,12.8784,4.191704708023071,12.8784,4.191704708023071C12.9013,4.2208747080230715,12.9326,4.273344708023071,13.1289,4.7641147080230715C13.1289,4.7641147080230715,14.9859,4.021334708023071,14.9859,4.021334708023071C14.9859,4.021334708023071,14.9859,4.021334708023071,14.9859,4.021334708023071ZM12.6248,4.020024708023071C12.7253,4.049314708023071,12.8139,4.109364708023071,12.8784,4.191704708023071C12.8784,4.191704708023071,14.453,2.958512708023071,14.453,2.958512708023071C14.1305,2.5467937080230714,13.687,2.246561708023071,13.185,2.1000767080230713C13.185,2.1000767080230713,12.6248,4.020024708023071,12.6248,4.020024708023071C12.6248,4.020024708023071,12.6248,4.020024708023071,12.6248,4.020024708023071ZM12.0003,21.99998470802307C12.4035,21.99998470802307,12.8091,22.00958470802307,13.185,21.89988470802307C13.185,21.89988470802307,12.6249,19.97998470802307,12.6249,19.97998470802307C12.5893,19.990384708023072,12.5289,19.99998470802307,12.0003,19.99998470802307C12.0003,19.99998470802307,12.0003,21.99998470802307,12.0003,21.99998470802307C12.0003,21.99998470802307,12.0003,21.99998470802307,12.0003,21.99998470802307ZM13.1289,19.23588470802307C12.9326,19.726684708023072,12.9013,19.77908470802307,12.8784,19.80828470802307C12.8784,19.80828470802307,14.453,21.04148470802307,14.453,21.04148470802307C14.6945,20.73308470802307,14.8361,20.352984708023072,14.9859,19.97868470802307C14.9859,19.97868470802307,13.1289,19.23588470802307,13.1289,19.23588470802307C13.1289,19.23588470802307,13.1289,19.23588470802307,13.1289,19.23588470802307ZM13.185,21.89988470802307C13.687,21.75338470802307,14.1305,21.45318470802307,14.453,21.04148470802307C14.453,21.04148470802307,12.8784,19.80828470802307,12.8784,19.80828470802307C12.8139,19.89058470802307,12.7253,19.950684708023072,12.6248,19.97998470802307C12.6248,19.97998470802307,13.185,21.89988470802307,13.185,21.89988470802307C13.185,21.89988470802307,13.185,21.89988470802307,13.185,21.89988470802307ZM12.0003,19.99998470802307C11.47177,19.99998470802307,11.41141,19.990384708023072,11.37583,19.97998470802307C11.37583,19.97998470802307,10.81563,21.89988470802307,10.81563,21.89988470802307C11.19163,22.00958470802307,11.59715,21.99998470802307,12.0003,21.99998470802307C12.0003,21.99998470802307,12.0003,19.99998470802307,12.0003,19.99998470802307C12.0003,19.99998470802307,12.0003,19.99998470802307,12.0003,19.99998470802307ZM9.01478,19.97868470802307C9.16452,20.352984708023072,9.306180000000001,20.73308470802307,9.54769,21.04148470802307C9.54769,21.04148470802307,11.12225,19.80828470802307,11.12225,19.80828470802307C11.0994,19.77908470802307,11.06804,19.726684708023072,10.87173,19.23588470802307C10.87173,19.23588470802307,9.01478,19.97868470802307,9.01478,19.97868470802307C9.01478,19.97868470802307,9.01478,19.97868470802307,9.01478,19.97868470802307ZM11.37584,19.97998470802307C11.27543,19.950684708023072,11.18674,19.89058470802307,11.12225,19.80828470802307C11.12225,19.80828470802307,9.54769,21.04148470802307,9.54769,21.04148470802307C9.870149999999999,21.45318470802307,10.3136,21.75338470802307,10.81562,21.89988470802307C10.81562,21.89988470802307,11.37584,19.97998470802307,11.37584,19.97998470802307C11.37584,19.97998470802307,11.37584,19.97998470802307,11.37584,19.97998470802307ZM12.0003,2.000000052023071C11.59715,2.000000052023071,11.19163,1.9903600480230712,10.81563,2.1000767080230713C10.81563,2.1000767080230713,11.37584,4.020024708023071,11.37584,4.020024708023071C11.41141,4.009644708023071,11.47177,4.000004708023072,12.0003,4.000004708023072C12.0003,4.000004708023072,12.0003,2.000000052023071,12.0003,2.000000052023071C12.0003,2.000000052023071,12.0003,2.000000052023071,12.0003,2.000000052023071ZM10.87173,4.7641147080230715C11.06804,4.273344708023071,11.0994,4.2208747080230715,11.12225,4.191704708023071C11.12225,4.191704708023071,9.54769,2.958512708023071,9.54769,2.958512708023071C9.306180000000001,3.2668747080230713,9.16452,3.6469747080230714,9.01478,4.021324708023071C9.01478,4.021324708023071,10.87173,4.7641147080230715,10.87173,4.7641147080230715C10.87173,4.7641147080230715,10.87173,4.7641147080230715,10.87173,4.7641147080230715ZM10.81563,2.1000767080230713C10.3136,2.246561708023071,9.87014,2.5467937080230714,9.54769,2.958512708023071C9.54769,2.958512708023071,11.12225,4.191704708023071,11.12225,4.191704708023071C11.18674,4.109364708023071,11.27543,4.049314708023071,11.37584,4.020024708023071C11.37584,4.020024708023071,10.81563,2.1000767080230713,10.81563,2.1000767080230713C10.81563,2.1000767080230713,10.81563,2.1000767080230713,10.81563,2.1000767080230713ZM8.68504,4.174284708023071C8.68504,4.174284708023071,8.11425,3.984094708023071,8.11425,3.984094708023071C8.11425,3.984094708023071,7.48201,5.8815347080230715,7.48201,5.8815347080230715C7.48201,5.8815347080230715,8.05279,6.071724708023071,8.05279,6.071724708023071C8.05279,6.071724708023071,8.68504,4.174284708023071,8.68504,4.174284708023071C8.68504,4.174284708023071,8.68504,4.174284708023071,8.68504,4.174284708023071ZM15.3153,19.82588470802307C15.3153,19.82588470802307,15.8419,20.00148470802307,15.8419,20.00148470802307C15.8419,20.00148470802307,16.474600000000002,18.10418470802307,16.474600000000002,18.10418470802307C16.474600000000002,18.10418470802307,15.948,17.928584708023074,15.948,17.928584708023074C15.948,17.928584708023074,15.3153,19.82588470802307,15.3153,19.82588470802307C15.3153,19.82588470802307,15.3153,19.82588470802307,15.3153,19.82588470802307ZM20.0014,15.84218470802307C20.0014,15.84218470802307,19.7863,15.197084708023072,19.7863,15.197084708023072C19.7863,15.197084708023072,17.889,15.829584708023072,17.889,15.829584708023072C17.889,15.829584708023072,18.104,16.47468470802307,18.104,16.47468470802307C18.104,16.47468470802307,20.0014,15.84218470802307,20.0014,15.84218470802307C20.0014,15.84218470802307,20.0014,15.84218470802307,20.0014,15.84218470802307ZM6.23941,6.174804708023071C6.58143,5.832794708023071,6.62581,5.800074708023072,6.65582,5.782814708023071C6.65582,5.782814708023071,5.65887,4.049004708023071,5.65887,4.049004708023071C5.34418,4.2299547080230715,5.08676,4.499034708023071,4.825200000000001,4.7605947080230715C4.825200000000001,4.7605947080230715,6.23941,6.174804708023071,6.23941,6.174804708023071C6.23941,6.174804708023071,6.23941,6.174804708023071,6.23941,6.174804708023071ZM8.11436,3.9841247080230713C7.76343,3.8671547080230715,7.41286,3.741604708023071,7.05046,3.7204947080230713C7.05046,3.7204947080230713,6.93414,5.717114708023072,6.93414,5.717114708023072C6.96871,5.719124708023071,7.02304,5.728544708023071,7.4819,5.881494708023071C7.4819,5.881494708023071,8.11436,3.9841247080230713,8.11436,3.9841247080230713C8.11436,3.9841247080230713,8.11436,3.9841247080230713,8.11436,3.9841247080230713ZM6.65583,5.782814708023071C6.74022,5.734284708023072,6.83695,5.7114447080230715,6.93414,5.717114708023072C6.93414,5.717114708023072,7.05046,3.7204947080230713,7.05046,3.7204947080230713C6.56451,3.6921847080230714,6.08086,3.806354708023071,5.65887,4.049004708023071C5.65887,4.049004708023071,6.65583,5.782814708023071,6.65583,5.782814708023071C6.65583,5.782814708023071,6.65583,5.782814708023071,6.65583,5.782814708023071ZM19.207,19.20718470802307C19.4956,18.918484708023072,19.7938,18.63448470802307,19.9842,18.281384708023072C19.9842,18.281384708023072,18.2238,17.33218470802307,18.2238,17.33218470802307C18.2056,17.36588470802307,18.1706,17.41518470802307,17.7928,17.79298470802307C17.7928,17.79298470802307,19.207,19.20718470802307,19.207,19.20718470802307C19.207,19.20718470802307,19.207,19.20718470802307,19.207,19.20718470802307ZM18.104,16.47468470802307C18.273,16.98158470802307,18.2823,17.04128470802307,18.2835,17.079484708023074C18.2835,17.079484708023074,20.2825,17.017784708023072,20.2825,17.017784708023072C20.2701,16.616784708023072,20.1304,16.229484708023072,20.0014,15.84218470802307C20.0014,15.84218470802307,18.104,16.47468470802307,18.104,16.47468470802307C18.104,16.47468470802307,18.104,16.47468470802307,18.104,16.47468470802307ZM19.9842,18.281384708023072C20.1932,17.89378470802307,20.2961,17.457884708023073,20.2825,17.017784708023072C20.2825,17.017784708023072,18.2835,17.079484708023074,18.2835,17.079484708023074C18.2862,17.16748470802307,18.2656,17.25468470802307,18.2238,17.33218470802307C18.2238,17.33218470802307,19.9842,18.281384708023072,19.9842,18.281384708023072C19.9842,18.281384708023072,19.9842,18.281384708023072,19.9842,18.281384708023072ZM17.7928,17.79298470802307C17.415,18.17078470802307,17.3657,18.20578470802307,17.332,18.22398470802307C17.332,18.22398470802307,18.2812,19.98438470802307,18.2812,19.98438470802307C18.6343,19.79398470802307,18.9183,19.49578470802307,19.207,19.20718470802307C19.207,19.20718470802307,17.7928,17.79298470802307,17.7928,17.79298470802307C17.7928,17.79298470802307,17.7928,17.79298470802307,17.7928,17.79298470802307ZM15.842,20.00148470802307C16.229300000000002,20.130584708023072,16.6166,20.27028470802307,17.0176,20.282684708023073C17.0176,20.282684708023073,17.0793,18.28368470802307,17.0793,18.28368470802307C17.0411,18.28248470802307,16.9814,18.27308470802307,16.4745,18.10418470802307C16.4745,18.10418470802307,15.842,20.00148470802307,15.842,20.00148470802307C15.842,20.00148470802307,15.842,20.00148470802307,15.842,20.00148470802307ZM17.332,18.22398470802307C17.2545,18.26578470802307,17.1674,18.28638470802307,17.0793,18.28368470802307C17.0793,18.28368470802307,17.0176,20.282684708023073,17.0176,20.282684708023073C17.4578,20.296284708023073,17.8936,20.19338470802307,18.2812,19.98438470802307C18.2812,19.98438470802307,17.332,18.22398470802307,17.332,18.22398470802307C17.332,18.22398470802307,17.332,18.22398470802307,17.332,18.22398470802307ZM4.825200000000001,4.7605947080230715C4.54749,5.038304708023071,4.261620000000001,5.311174708023071,4.0755099999999995,5.645584708023071C4.0755099999999995,5.645584708023071,5.8230900000000005,6.618194708023071,5.8230900000000005,6.618194708023071C5.84074,6.586474708023071,5.87562,6.538594708023071,6.23941,6.174804708023071C6.23941,6.174804708023071,4.825200000000001,4.7605947080230715,4.825200000000001,4.7605947080230715C4.825200000000001,4.7605947080230715,4.825200000000001,4.7605947080230715,4.825200000000001,4.7605947080230715ZM5.9706399999999995,7.484274708023071C5.77956,7.006594708023071,5.766360000000001,6.948834708023071,5.76263,6.912734708023072C5.76263,6.912734708023072,3.77323,7.118294708023071,3.77323,7.118294708023071C3.81256,7.498984708023071,3.9678199999999997,7.862394708023071,4.1136800000000004,8.227054708023072C4.1136800000000004,8.227054708023072,5.9706399999999995,7.484274708023071,5.9706399999999995,7.484274708023071C5.9706399999999995,7.484274708023071,5.9706399999999995,7.484274708023071,5.9706399999999995,7.484274708023071ZM4.0755099999999995,5.645584708023071C3.8260300000000003,6.093844708023071,3.7205,6.6080047080230715,3.77323,7.118294708023071C3.77323,7.118294708023071,5.76263,6.912734708023072,5.76263,6.912734708023072C5.75209,6.810674708023071,5.77319,6.707844708023071,5.8230900000000005,6.618194708023071C5.8230900000000005,6.618194708023071,4.0755099999999995,5.645584708023071,4.0755099999999995,5.645584708023071C4.0755099999999995,5.645584708023071,4.0755099999999995,5.645584708023071,4.0755099999999995,5.645584708023071ZM15.9479,6.071564708023072C15.9479,6.071564708023072,16.5183,5.881424708023071,16.5183,5.881424708023071C16.5183,5.881424708023071,15.8859,3.9840547080230713,15.8859,3.9840547080230713C15.8859,3.9840547080230713,15.3155,4.174194708023071,15.3155,4.174194708023071C15.3155,4.174194708023071,15.9479,6.071564708023072,15.9479,6.071564708023072C15.9479,6.071564708023072,15.9479,6.071564708023072,15.9479,6.071564708023072ZM5.896240000000001,16.474584708023073C5.896240000000001,16.474584708023073,6.11139,15.829084708023071,6.11139,15.829084708023071C6.11139,15.829084708023071,4.21402,15.19668470802307,4.21402,15.19668470802307C4.21402,15.19668470802307,3.99887,15.842084708023071,3.99887,15.842084708023071C3.99887,15.842084708023071,5.896240000000001,16.474584708023073,5.896240000000001,16.474584708023073C5.896240000000001,16.474584708023073,5.896240000000001,16.474584708023073,5.896240000000001,16.474584708023073ZM8.05273,17.92838470802307C8.05273,17.92838470802307,7.52575,18.10408470802307,7.52575,18.10408470802307C7.52575,18.10408470802307,8.15821,20.00148470802307,8.15821,20.00148470802307C8.15821,20.00148470802307,8.68519,19.825784708023072,8.68519,19.825784708023072C8.68519,19.825784708023072,8.05273,17.92838470802307,8.05273,17.92838470802307C8.05273,17.92838470802307,8.05273,17.92838470802307,8.05273,17.92838470802307ZM19.175,4.760514708023072C18.9135,4.498954708023071,18.6561,4.2298847080230715,18.3414,4.048934708023071C18.3414,4.048934708023071,17.3444,5.782734708023071,17.3444,5.782734708023071C17.3744,5.799994708023071,17.418799999999997,5.8327147080230715,17.7608,6.174734708023071C17.7608,6.174734708023071,19.175,4.760514708023072,19.175,4.760514708023072C19.175,4.760514708023072,19.175,4.760514708023072,19.175,4.760514708023072ZM16.5183,5.881424708023071C16.9772,5.728464708023072,17.0315,5.7190447080230715,17.0661,5.717034708023071C17.0661,5.717034708023071,16.9498,3.720414708023071,16.9498,3.720414708023071C16.587400000000002,3.7415247080230714,16.236800000000002,3.867074708023071,15.8859,3.9840547080230713C15.8859,3.9840547080230713,16.5183,5.881424708023071,16.5183,5.881424708023071C16.5183,5.881424708023071,16.5183,5.881424708023071,16.5183,5.881424708023071ZM18.3414,4.048934708023071C17.9194,3.8062747080230714,17.4357,3.6921047080230713,16.9498,3.720414708023071C16.9498,3.720414708023071,17.0661,5.717034708023071,17.0661,5.717034708023071C17.1633,5.7113747080230715,17.259999999999998,5.734204708023071,17.3444,5.782734708023071C17.3444,5.782734708023071,18.3414,4.048934708023071,18.3414,4.048934708023071C18.3414,4.048934708023071,18.3414,4.048934708023071,18.3414,4.048934708023071ZM6.20745,17.792884708023074C5.82963,17.415084708023073,5.79458,17.36578470802307,5.77642,17.33218470802307C5.77642,17.33218470802307,4.01601,18.281284708023072,4.01601,18.281284708023072C4.2064,18.63448470802307,4.50459,18.918484708023072,4.793229999999999,19.20708470802307C4.793229999999999,19.20708470802307,6.20745,17.792884708023074,6.20745,17.792884708023074C6.20745,17.792884708023074,6.20745,17.792884708023074,6.20745,17.792884708023074ZM3.9988799999999998,15.842084708023071C3.86979,16.22938470802307,3.7300899999999997,16.616784708023072,3.71772,17.017784708023072C3.71772,17.017784708023072,5.71676,17.07938470802307,5.71676,17.07938470802307C5.7179400000000005,17.04118470802307,5.72727,16.98148470802307,5.896240000000001,16.474584708023073C5.896240000000001,16.474584708023073,3.9988799999999998,15.842084708023071,3.9988799999999998,15.842084708023071C3.9988799999999998,15.842084708023071,3.9988799999999998,15.842084708023071,3.9988799999999998,15.842084708023071ZM5.77642,17.33218470802307C5.73463,17.25458470802307,5.71405,17.16748470802307,5.71676,17.07938470802307C5.71676,17.07938470802307,3.71772,17.017784708023072,3.71772,17.017784708023072C3.7041399999999998,17.457884708023073,3.8070399999999998,17.89378470802307,4.016,18.281284708023072C4.016,18.281284708023072,5.77642,17.33218470802307,5.77642,17.33218470802307C5.77642,17.33218470802307,5.77642,17.33218470802307,5.77642,17.33218470802307ZM4.793229999999999,19.20708470802307C5.08188,19.49578470802307,5.365880000000001,19.79388470802307,5.718999999999999,19.984284708023072C5.718999999999999,19.984284708023072,6.66818,18.22388470802307,6.66818,18.22388470802307C6.6345,18.20578470802307,6.58526,18.17068470802307,6.20745,17.792884708023074C6.20745,17.792884708023074,4.793229999999999,19.20708470802307,4.793229999999999,19.20708470802307C4.793229999999999,19.20708470802307,4.793229999999999,19.20708470802307,4.793229999999999,19.20708470802307ZM7.52575,18.10408470802307C7.01886,18.27308470802307,6.95915,18.28238470802307,6.9209,18.28358470802307C6.9209,18.28358470802307,6.98258,20.282584708023073,6.98258,20.282584708023073C7.38358,20.27028470802307,7.77095,20.130584708023072,8.15821,20.00148470802307C8.15821,20.00148470802307,7.52575,18.10408470802307,7.52575,18.10408470802307C7.52575,18.10408470802307,7.52575,18.10408470802307,7.52575,18.10408470802307ZM5.718999999999999,19.984284708023072C6.10658,20.19328470802307,6.54247,20.29618470802307,6.98258,20.282584708023073C6.98258,20.282584708023073,6.9209,18.28358470802307,6.9209,18.28358470802307C6.83287,18.28628470802307,6.74569,18.26568470802307,6.66818,18.22388470802307C6.66818,18.22388470802307,5.718999999999999,19.984284708023072,5.718999999999999,19.984284708023072C5.718999999999999,19.984284708023072,5.718999999999999,19.984284708023072,5.718999999999999,19.984284708023072ZM17.7608,6.174734708023071C18.1246,6.538524708023071,18.1595,6.586404708023071,18.1771,6.618114708023072C18.1771,6.618114708023072,19.9247,5.645514708023072,19.9247,5.645514708023072C19.7386,5.3111047080230716,19.4527,5.038234708023071,19.175,4.760514708023072C19.175,4.760514708023072,17.7608,6.174734708023071,17.7608,6.174734708023071C17.7608,6.174734708023071,17.7608,6.174734708023071,17.7608,6.174734708023071ZM19.8865,8.226974708023072C20.0324,7.862324708023071,20.1877,7.498904708023071,20.227,7.118214708023071C20.227,7.118214708023071,18.2376,6.912654708023071,18.2376,6.912654708023071C18.2339,6.948764708023071,18.2207,7.006514708023071,18.0296,7.484194708023071C18.0296,7.484194708023071,19.8865,8.226974708023072,19.8865,8.226974708023072C19.8865,8.226974708023072,19.8865,8.226974708023072,19.8865,8.226974708023072ZM18.1771,6.618114708023072C18.227,6.707764708023071,18.2481,6.810604708023071,18.2376,6.912654708023071C18.2376,6.912654708023071,20.227,7.118214708023071,20.227,7.118214708023071C20.2797,6.6079347080230715,20.1742,6.093774708023071,19.9247,5.645514708023072C19.9247,5.645514708023072,18.1771,6.618114708023072,18.1771,6.618114708023072C18.1771,6.618114708023072,18.1771,6.618114708023072,18.1771,6.618114708023072ZM3.92849,8.776894708023072C3.92849,8.776894708023072,3.6509799999999997,8.943434708023071,3.6509799999999997,8.943434708023071C3.6509799999999997,8.943434708023071,4.68013,10.658324708023072,4.68013,10.658324708023072C4.68013,10.658324708023072,4.95764,10.491784708023072,4.95764,10.491784708023072C4.95764,10.491784708023072,3.92849,8.776894708023072,3.92849,8.776894708023072C3.92849,8.776894708023072,3.92849,8.776894708023072,3.92849,8.776894708023072ZM20.3496,8.943384708023071C20.3496,8.943384708023071,20.0717,8.776664708023072,20.0717,8.776664708023072C20.0717,8.776664708023072,19.0427,10.491654708023072,19.0427,10.491654708023072C19.0427,10.491654708023072,19.3206,10.658374708023072,19.3206,10.658374708023072C19.3206,10.658374708023072,20.3496,8.943384708023071,20.3496,8.943384708023071C20.3496,8.943384708023071,20.3496,8.943384708023071,20.3496,8.943384708023071ZM4.00034,11.86626470802307C4.00034,11.298714708023072,4.0116499999999995,11.235984708023071,4.024039999999999,11.197184708023071C4.024039999999999,11.197184708023071,2.118835,10.588754708023071,2.118835,10.588754708023071C1.9890344,10.99520470802307,2.000344447,11.432924708023071,2.000344447,11.86626470802307C2.000344447,11.86626470802307,4.00034,11.86626470802307,4.00034,11.86626470802307C4.00034,11.86626470802307,4.00034,11.86626470802307,4.00034,11.86626470802307ZM3.65106,8.943384708023071C3.28282,9.16432470802307,2.9045009999999998,9.378214708023071,2.622915,9.698454708023071C2.622915,9.698454708023071,4.12485,11.019124708023071,4.12485,11.019124708023071C4.15191,10.98835470802307,4.19849,10.947304708023072,4.68005,10.658374708023072C4.68005,10.658374708023072,3.65106,8.943384708023071,3.65106,8.943384708023071C3.65106,8.943384708023071,3.65106,8.943384708023071,3.65106,8.943384708023071ZM4.024039999999999,11.197184708023071C4.0450099999999996,11.13151470802307,4.079330000000001,11.07089470802307,4.12485,11.019124708023071C4.12485,11.019124708023071,2.6229139999999997,9.698454708023071,2.6229139999999997,9.698454708023071C2.395311,9.95729470802307,2.223691,10.26040470802307,2.118835,10.588754708023071C2.118835,10.588754708023071,4.024039999999999,11.197184708023071,4.024039999999999,11.197184708023071C4.024039999999999,11.197184708023071,4.024039999999999,11.197184708023071,4.024039999999999,11.197184708023071ZM22.0003,11.86626470802307C22.0003,11.432924708023071,22.0116,10.99520470802307,21.8818,10.588754708023071C21.8818,10.588754708023071,19.9766,11.197184708023071,19.9766,11.197184708023071C19.989,11.235984708023071,20.0003,11.298714708023072,20.0003,11.86626470802307C20.0003,11.86626470802307,22.0003,11.86626470802307,22.0003,11.86626470802307C22.0003,11.86626470802307,22.0003,11.86626470802307,22.0003,11.86626470802307ZM19.3206,10.658374708023072C19.8022,10.947304708023072,19.8487,10.98835470802307,19.8758,11.019124708023071C19.8758,11.019124708023071,21.3777,9.698454708023071,21.3777,9.698454708023071C21.0961,9.378214708023071,20.7178,9.16432470802307,20.3496,8.943384708023071C20.3496,8.943384708023071,19.3206,10.658374708023072,19.3206,10.658374708023072C19.3206,10.658374708023072,19.3206,10.658374708023072,19.3206,10.658374708023072ZM21.8818,10.588754708023071C21.777,10.26040470802307,21.6053,9.95729470802307,21.3777,9.698454708023071C21.3777,9.698454708023071,19.8758,11.019124708023071,19.8758,11.019124708023071C19.9213,11.07089470802307,19.9556,11.13151470802307,19.9766,11.197184708023071C19.9766,11.197184708023071,21.8818,10.588754708023071,21.8818,10.588754708023071C21.8818,10.588754708023071,21.8818,10.588754708023071,21.8818,10.588754708023071ZM20.0003,11.86626470802307C20.0003,12.539884708023072,19.985,12.615684708023071,19.9688,12.659184708023071C19.9688,12.659184708023071,21.8426,13.35828470802307,21.8426,13.35828470802307C22.0156,12.894684708023071,22.0003,12.377784708023071,22.0003,11.86626470802307C22.0003,11.86626470802307,20.0003,11.86626470802307,20.0003,11.86626470802307C20.0003,11.86626470802307,20.0003,11.86626470802307,20.0003,11.86626470802307ZM19.863,15.031884708023071C20.3336,14.843684708023071,20.8155,14.667284708023072,21.1816,14.33468470802307C21.1816,14.33468470802307,19.8366,12.85448470802307,19.8366,12.85448470802307C19.8019,12.885984708023072,19.7391,12.927484708023071,19.1202,13.174984708023072C19.1202,13.174984708023072,19.863,15.031884708023071,19.863,15.031884708023071C19.863,15.031884708023071,19.863,15.031884708023071,19.863,15.031884708023071ZM19.9688,12.659184708023071C19.9409,12.733884708023071,19.8956,12.800884708023071,19.8366,12.85448470802307C19.8366,12.85448470802307,21.1816,14.33468470802307,21.1816,14.33468470802307C21.4766,14.066584708023072,21.7033,13.73178470802307,21.8426,13.35828470802307C21.8426,13.35828470802307,19.9688,12.659184708023071,19.9688,12.659184708023071C19.9688,12.659184708023071,19.9688,12.659184708023071,19.9688,12.659184708023071ZM2.000344447,11.86626470802307C2.000344447,12.377784708023071,1.9850644,12.894684708023071,2.158046,13.35828470802307C2.158046,13.35828470802307,4.03188,12.659184708023071,4.03188,12.659184708023071C4.01562,12.615684708023071,4.00034,12.539884708023072,4.00034,11.86626470802307C4.00034,11.86626470802307,2.000344447,11.86626470802307,2.000344447,11.86626470802307C2.000344447,11.86626470802307,2.000344447,11.86626470802307,2.000344447,11.86626470802307ZM4.88039,13.174984708023072C4.2615300000000005,12.927484708023071,4.19872,12.885984708023072,4.16409,12.85448470802307C4.16409,12.85448470802307,2.8190720000000002,14.33468470802307,2.8190720000000002,14.33468470802307C3.18512,14.667284708023072,3.66703,14.843684708023071,4.1376100000000005,15.031884708023071C4.1376100000000005,15.031884708023071,4.88039,13.174984708023072,4.88039,13.174984708023072C4.88039,13.174984708023072,4.88039,13.174984708023072,4.88039,13.174984708023072ZM2.158046,13.35828470802307C2.297392,13.73178470802307,2.524037,14.066584708023072,2.8190720000000002,14.33468470802307C2.8190720000000002,14.33468470802307,4.16409,12.85448470802307,4.16409,12.85448470802307C4.10508,12.800884708023071,4.05975,12.733884708023071,4.03188,12.659184708023071C4.03188,12.659184708023071,2.158046,13.35828470802307,2.158046,13.35828470802307C2.158046,13.35828470802307,2.158046,13.35828470802307,2.158046,13.35828470802307ZM14.0003,11.99998470802307C14.0003,13.10458470802307,13.1049,13.99998470802307,12.0003,13.99998470802307C12.0003,13.99998470802307,12.0003,15.99998470802307,12.0003,15.99998470802307C14.2094,15.99998470802307,16.0003,14.209084708023072,16.0003,11.99998470802307C16.0003,11.99998470802307,14.0003,11.99998470802307,14.0003,11.99998470802307C14.0003,11.99998470802307,14.0003,11.99998470802307,14.0003,11.99998470802307ZM12.0003,13.99998470802307C10.89577,13.99998470802307,10.00034,13.10458470802307,10.00034,11.99998470802307C10.00034,11.99998470802307,8.00034,11.99998470802307,8.00034,11.99998470802307C8.00034,14.209084708023072,9.7912,15.99998470802307,12.0003,15.99998470802307C12.0003,15.99998470802307,12.0003,13.99998470802307,12.0003,13.99998470802307C12.0003,13.99998470802307,12.0003,13.99998470802307,12.0003,13.99998470802307ZM10.00034,11.99998470802307C10.00034,10.895434708023071,10.89577,10.000004708023072,12.0003,10.000004708023072C12.0003,10.000004708023072,12.0003,8.00000470802307,12.0003,8.00000470802307C9.7912,8.00000470802307,8.00034,9.790864708023072,8.00034,11.99998470802307C8.00034,11.99998470802307,10.00034,11.99998470802307,10.00034,11.99998470802307C10.00034,11.99998470802307,10.00034,11.99998470802307,10.00034,11.99998470802307ZM12.0003,10.000004708023072C13.1049,10.000004708023072,14.0003,10.895434708023071,14.0003,11.99998470802307C14.0003,11.99998470802307,16.0003,11.99998470802307,16.0003,11.99998470802307C16.0003,9.790864708023072,14.2094,8.00000470802307,12.0003,8.00000470802307C12.0003,8.00000470802307,12.0003,10.000004708023072,12.0003,10.000004708023072C12.0003,10.000004708023072,12.0003,10.000004708023072,12.0003,10.000004708023072ZM19.7863,15.197084708023072C19.7641,15.13048470802307,19.7977,15.05808470802307,19.863,15.03198470802307C19.863,15.03198470802307,19.1203,13.174984708023072,19.1203,13.174984708023072C18.0718,13.594284708023071,17.5319,14.758284708023071,17.889,15.829584708023072C17.889,15.829584708023072,19.7863,15.197084708023072,19.7863,15.197084708023072C19.7863,15.197084708023072,19.7863,15.197084708023072,19.7863,15.197084708023072ZM10.87173,19.23588470802307C10.42638,18.12248470802307,9.190349999999999,17.54918470802307,8.05273,17.92838470802307C8.05273,17.92838470802307,8.68519,19.825784708023072,8.68519,19.825784708023072C8.818190000000001,19.781484708023072,8.962710000000001,19.848484708023072,9.01478,19.97868470802307C9.01478,19.97868470802307,10.87173,19.23588470802307,10.87173,19.23588470802307C10.87173,19.23588470802307,10.87173,19.23588470802307,10.87173,19.23588470802307ZM18.0296,7.484194708023071C17.5835,8.59947470802307,18.0127,9.873644708023072,19.0427,10.491654708023072C19.0427,10.491654708023072,20.0717,8.776664708023072,20.0717,8.776664708023072C19.8835,8.663714708023072,19.805,8.43082470802307,19.8865,8.226974708023072C19.8865,8.226974708023072,18.0296,7.484194708023071,18.0296,7.484194708023071C18.0296,7.484194708023071,18.0296,7.484194708023071,18.0296,7.484194708023071ZM9.01478,4.021324708023071C8.962679999999999,4.151564708023072,8.81811,4.218624708023071,8.68504,4.174284708023071C8.68504,4.174284708023071,8.05279,6.071724708023071,8.05279,6.071724708023071C9.19043,6.450794708023071,10.42638,5.877474708023071,10.87173,4.7641147080230715C10.87173,4.7641147080230715,9.01478,4.021324708023071,9.01478,4.021324708023071C9.01478,4.021324708023071,9.01478,4.021324708023071,9.01478,4.021324708023071ZM4.1136800000000004,8.227054708023072C4.19524,8.430944708023071,4.11678,8.663894708023072,3.92849,8.776894708023072C3.92849,8.776894708023072,4.95764,10.491784708023072,4.95764,10.491784708023072C5.98757,9.87368470802307,6.41674,8.599524708023072,5.9706399999999995,7.484274708023071C5.9706399999999995,7.484274708023071,4.1136800000000004,8.227054708023072,4.1136800000000004,8.227054708023072C4.1136800000000004,8.227054708023072,4.1136800000000004,8.227054708023072,4.1136800000000004,8.227054708023072ZM6.11139,15.829084708023071C6.46842,14.757984708023072,5.92867,13.594284708023071,4.88039,13.174984708023072C4.88039,13.174984708023072,4.1376100000000005,15.031884708023071,4.1376100000000005,15.031884708023071C4.20268,15.05798470802307,4.23618,15.130184708023071,4.21402,15.19668470802307C4.21402,15.19668470802307,6.11139,15.829084708023071,6.11139,15.829084708023071C6.11139,15.829084708023071,6.11139,15.829084708023071,6.11139,15.829084708023071ZM14.9859,19.97868470802307C15.0379,19.848584708023072,15.1824,19.781584708023072,15.3153,19.82588470802307C15.3153,19.82588470802307,15.948,17.928584708023074,15.948,17.928584708023074C14.8104,17.549284708023073,13.5743,18.12248470802307,13.1289,19.23588470802307C13.1289,19.23588470802307,14.9859,19.97868470802307,14.9859,19.97868470802307C14.9859,19.97868470802307,14.9859,19.97868470802307,14.9859,19.97868470802307ZM13.1289,4.7641147080230715C13.5743,5.877494708023072,14.8103,6.450764708023072,15.9479,6.071564708023072C15.9479,6.071564708023072,15.3155,4.174194708023071,15.3155,4.174194708023071C15.1824,4.218534708023071,15.0379,4.151504708023071,14.9859,4.021324708023071C14.9859,4.021324708023071,13.1289,4.7641147080230715,13.1289,4.7641147080230715C13.1289,4.7641147080230715,13.1289,4.7641147080230715,13.1289,4.7641147080230715Z",
          fill: color,
          fillOpacity: "0.800000011920929"
        })
      })
    })]
  });
};
var Profile = function Profile(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    fill: "none",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "master_svg0_21_43011",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          rx: "0"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      clipPath: "url(#master_svg0_21_43011)",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M9.23588470046997,13.1673C8.77597470046997,12.8615,8.15526470046997,12.9864,7.849474700469971,13.4463C7.54369470046997,13.9062,7.668624700469971,14.5269,8.12853470046997,14.8327C8.12853470046997,14.8327,9.23588470046997,13.1673,9.23588470046997,13.1673C9.23588470046997,13.1673,9.23588470046997,13.1673,9.23588470046997,13.1673ZM15.87145470046997,14.8327C16.331354700469973,14.5269,16.45625470046997,13.9062,16.15045470046997,13.4463C15.84465470046997,12.9864,15.223954700469971,12.8615,14.764154700469971,13.1673C14.764154700469971,13.1673,15.87145470046997,14.8327,15.87145470046997,14.8327C15.87145470046997,14.8327,15.87145470046997,14.8327,15.87145470046997,14.8327ZM5.546004700469971,20.891C5.546004700469971,20.891,6.000004700469971,20,6.000004700469971,20C6.000004700469971,20,6.000004700469971,20,6.000004700469971,20C6.000004700469971,20,5.546004700469971,20.891,5.546004700469971,20.891C5.546004700469971,20.891,5.546004700469971,20.891,5.546004700469971,20.891ZM5.108994700469971,20.454C5.108994700469971,20.454,6.000004700469971,20,6.000004700469971,20C6.000004700469971,20,6.000004700469971,20,6.000004700469971,20C6.000004700469971,20,5.108994700469971,20.454,5.108994700469971,20.454C5.108994700469971,20.454,5.108994700469971,20.454,5.108994700469971,20.454ZM18.89095470046997,20.454C18.89095470046997,20.454,17.99995470046997,20,17.99995470046997,20C17.99995470046997,20,17.99995470046997,20,17.99995470046997,20C17.99995470046997,20,18.89095470046997,20.454,18.89095470046997,20.454C18.89095470046997,20.454,18.89095470046997,20.454,18.89095470046997,20.454ZM18.45395470046997,20.891C18.45395470046997,20.891,18.907954700469972,21.782,18.907954700469972,21.782C18.907954700469972,21.782,18.907954700469972,21.782,18.907954700469972,21.782C18.907954700469972,21.782,18.45395470046997,20.891,18.45395470046997,20.891C18.45395470046997,20.891,18.45395470046997,20.891,18.45395470046997,20.891ZM18.95275470046997,16.4697C18.95275470046997,16.4697,17.96845470046997,16.6465,17.96845470046997,16.6465C17.96845470046997,16.6465,17.96845470046997,16.6465,17.96845470046997,16.6465C17.96845470046997,16.6465,18.95275470046997,16.4697,18.95275470046997,16.4697C18.95275470046997,16.4697,18.95275470046997,16.4697,18.95275470046997,16.4697ZM15.321254700469972,13C14.76895470046997,13,14.321254700469972,13.4477,14.321254700469972,14C14.321254700469972,14.5523,14.76895470046997,15,15.321254700469972,15C15.321254700469972,15,15.321254700469972,13,15.321254700469972,13C15.321254700469972,13,15.321254700469972,13,15.321254700469972,13ZM16.53025470046997,14.0472C16.53025470046997,14.0472,16.35345470046997,15.0315,16.35345470046997,15.0315C16.35345470046997,15.0315,16.53025470046997,14.0472,16.53025470046997,14.0472C16.53025470046997,14.0472,16.53025470046997,14.0472,16.53025470046997,14.0472ZM5.0479847004699705,16.465600000000002C5.0479847004699705,16.465600000000002,6.031994700469971,16.643700000000003,6.031994700469971,16.643700000000003C6.031994700469971,16.643700000000003,6.031994700469971,16.643700000000003,6.031994700469971,16.643700000000003C6.031994700469971,16.643700000000003,5.0479847004699705,16.465600000000002,5.0479847004699705,16.465600000000002C5.0479847004699705,16.465600000000002,5.0479847004699705,16.465600000000002,5.0479847004699705,16.465600000000002ZM8.68410470046997,15C9.236384700469971,15,9.68410470046997,14.5523,9.68410470046997,14C9.68410470046997,13.4477,9.236384700469971,13,8.68410470046997,13C8.68410470046997,13,8.68410470046997,15,8.68410470046997,15C8.68410470046997,15,8.68410470046997,15,8.68410470046997,15ZM7.465584700469971,14.048C7.465584700469971,14.048,7.643724700469971,15.032,7.643724700469971,15.032C7.643724700469971,15.032,7.643724700469971,15.032,7.643724700469971,15.032C7.643724700469971,15.032,7.465584700469971,14.048,7.465584700469971,14.048C7.465584700469971,14.048,7.465584700469971,14.048,7.465584700469971,14.048ZM14.99995470046997,7C14.99995470046997,8.65685,13.656854700469971,10,11.999994700469971,10C11.999994700469971,10,11.999994700469971,12,11.999994700469971,12C14.76145470046997,12,16.99995470046997,9.761420000000001,16.99995470046997,7C16.99995470046997,7,14.99995470046997,7,14.99995470046997,7C14.99995470046997,7,14.99995470046997,7,14.99995470046997,7ZM11.999994700469971,10C10.34315470046997,10,9.00000470046997,8.65685,9.00000470046997,7C9.00000470046997,7,7.000004700469971,7,7.000004700469971,7C7.000004700469971,9.761420000000001,9.238584700469971,12,11.999994700469971,12C11.999994700469971,12,11.999994700469971,10,11.999994700469971,10C11.999994700469971,10,11.999994700469971,10,11.999994700469971,10ZM9.00000470046997,7C9.00000470046997,5.34315,10.34315470046997,4,11.999994700469971,4C11.999994700469971,4,11.999994700469971,2,11.999994700469971,2C9.238584700469971,2,7.000004700469971,4.23858,7.000004700469971,7C7.000004700469971,7,9.00000470046997,7,9.00000470046997,7C9.00000470046997,7,9.00000470046997,7,9.00000470046997,7ZM11.999994700469971,4C13.656854700469971,4,14.99995470046997,5.34315,14.99995470046997,7C14.99995470046997,7,16.99995470046997,7,16.99995470046997,7C16.99995470046997,4.23858,14.76145470046997,2,11.999994700469971,2C11.999994700469971,2,11.999994700469971,4,11.999994700469971,4C11.999994700469971,4,11.999994700469971,4,11.999994700469971,4ZM11.999994700469971,14C10.976294700469971,14,10.02722470046997,13.6934,9.23588470046997,13.1673C9.23588470046997,13.1673,8.12853470046997,14.8327,8.12853470046997,14.8327C9.23780470046997,15.5703,10.57024470046997,16,11.999994700469971,16C11.999994700469971,16,11.999994700469971,14,11.999994700469971,14C11.999994700469971,14,11.999994700469971,14,11.999994700469971,14ZM14.764154700469971,13.1673C13.97278470046997,13.6934,13.02371470046997,14,11.999994700469971,14C11.999994700469971,14,11.999994700469971,16,11.999994700469971,16C13.42975470046997,16,14.76215470046997,15.5703,15.87145470046997,14.8327C15.87145470046997,14.8327,14.764154700469971,13.1673,14.764154700469971,13.1673C14.764154700469971,13.1673,14.764154700469971,13.1673,14.764154700469971,13.1673ZM17.99995470046997,17.6787C17.99995470046997,17.6787,17.99995470046997,19.4,17.99995470046997,19.4C17.99995470046997,19.4,19.99995470046997,19.4,19.99995470046997,19.4C19.99995470046997,19.4,19.99995470046997,17.6787,19.99995470046997,17.6787C19.99995470046997,17.6787,17.99995470046997,17.6787,17.99995470046997,17.6787C17.99995470046997,17.6787,17.99995470046997,17.6787,17.99995470046997,17.6787ZM17.39995470046997,20C17.39995470046997,20,6.60000470046997,20,6.60000470046997,20C6.60000470046997,20,6.60000470046997,22,6.60000470046997,22C6.60000470046997,22,17.39995470046997,22,17.39995470046997,22C17.39995470046997,22,17.39995470046997,20,17.39995470046997,20C17.39995470046997,20,17.39995470046997,20,17.39995470046997,20ZM6.000004700469971,19.4C6.000004700469971,19.4,6.000004700469971,17.6841,6.000004700469971,17.6841C6.000004700469971,17.6841,3.999999943169971,17.6841,3.999999943169971,17.6841C3.999999943169971,17.6841,3.999999943169971,19.4,3.999999943169971,19.4C3.999999943169971,19.4,6.000004700469971,19.4,6.000004700469971,19.4C6.000004700469971,19.4,6.000004700469971,19.4,6.000004700469971,19.4ZM6.60000470046997,20C6.3034747004699705,20,6.141224700469971,19.9992,6.024634700469971,19.9897C5.9197247004699705,19.9811,5.94248470046997,19.9707,6.000004700469971,20C6.000004700469971,20,5.092014700469971,21.782,5.092014700469971,21.782C5.363444700469971,21.9203,5.63317470046997,21.9644,5.8617747004699705,21.9831C6.0786947004699705,22.0008,6.3364847004699705,22,6.60000470046997,22C6.60000470046997,22,6.60000470046997,20,6.60000470046997,20C6.60000470046997,20,6.60000470046997,20,6.60000470046997,20ZM3.999999943169971,19.4C3.999999943169971,19.6635,3.9992199434699707,19.9213,4.016944900469971,20.1382C4.0356219004699705,20.3668,4.079689900469971,20.6366,4.217986700469971,20.908C4.217986700469971,20.908,6.000004700469971,20,6.000004700469971,20C6.029304700469971,20.0575,6.01887470046997,20.0803,6.010304700469971,19.9754C6.000784700469971,19.8588,6.000004700469971,19.6965,6.000004700469971,19.4C6.000004700469971,19.4,3.999999943169971,19.4,3.999999943169971,19.4C3.999999943169971,19.4,3.999999943169971,19.4,3.999999943169971,19.4ZM6.000004700469971,20C6.000004700469971,20,6.000004700469971,20,6.000004700469971,20C6.000004700469971,20,4.217986700469971,20.908,4.217986700469971,20.908C4.409733700469971,21.2843,4.71569570046997,21.5903,5.092014700469971,21.782C5.092014700469971,21.782,6.000004700469971,20,6.000004700469971,20C6.000004700469971,20,6.000004700469971,20,6.000004700469971,20ZM17.99995470046997,19.4C17.99995470046997,19.6965,17.999154700469973,19.8588,17.98965470046997,19.9754C17.98105470046997,20.0803,17.97065470046997,20.0575,17.99995470046997,20C17.99995470046997,20,19.78195470046997,20.908,19.78195470046997,20.908C19.920254700469968,20.6366,19.96435470046997,20.3668,19.98305470046997,20.1382C20.000754700469972,19.9213,19.99995470046997,19.6635,19.99995470046997,19.4C19.99995470046997,19.4,17.99995470046997,19.4,17.99995470046997,19.4C17.99995470046997,19.4,17.99995470046997,19.4,17.99995470046997,19.4ZM17.39995470046997,22C17.66345470046997,22,17.921254700469973,22.0008,18.13815470046997,21.9831C18.36675470046997,21.9644,18.636554700469972,21.9203,18.907954700469972,21.782C18.907954700469972,21.782,17.99995470046997,20,17.99995470046997,20C18.057454700469968,19.9707,18.080254700469972,19.9811,17.97535470046997,19.9897C17.858754700469973,19.9992,17.69645470046997,20,17.39995470046997,20C17.39995470046997,20,17.39995470046997,22,17.39995470046997,22C17.39995470046997,22,17.39995470046997,22,17.39995470046997,22ZM17.99995470046997,20C17.99995470046997,20,17.99995470046997,20,17.99995470046997,20C17.99995470046997,20,18.907954700469972,21.782,18.907954700469972,21.782C19.284254700469972,21.5903,19.59025470046997,21.2843,19.78195470046997,20.908C19.78195470046997,20.908,17.99995470046997,20,17.99995470046997,20C17.99995470046997,20,17.99995470046997,20,17.99995470046997,20ZM19.99995470046997,17.6787C19.99995470046997,17.0914,20.003954700469972,16.6658,19.93695470046997,16.293C19.93695470046997,16.293,17.96845470046997,16.6465,17.96845470046997,16.6465C17.995954700469973,16.7997,17.99995470046997,17.0048,17.99995470046997,17.6787C17.99995470046997,17.6787,19.99995470046997,17.6787,19.99995470046997,17.6787C19.99995470046997,17.6787,19.99995470046997,17.6787,19.99995470046997,17.6787ZM15.321254700469972,15C15.995154700469971,15,16.20025470046997,15.004,16.35345470046997,15.0315C16.35345470046997,15.0315,16.70695470046997,13.063,16.70695470046997,13.063C16.33415470046997,12.996,15.90855470046997,13,15.321254700469972,13C15.321254700469972,13,15.321254700469972,15,15.321254700469972,15C15.321254700469972,15,15.321254700469972,15,15.321254700469972,15ZM19.93695470046997,16.293C19.64135470046997,14.647,18.352954700469972,13.3586,16.70695470046997,13.063C16.70695470046997,13.063,16.35345470046997,15.0315,16.35345470046997,15.0315C17.17645470046997,15.1793,17.820654700469973,15.8235,17.96845470046997,16.6465C17.96845470046997,16.6465,19.93695470046997,16.293,19.93695470046997,16.293C19.93695470046997,16.293,19.93695470046997,16.293,19.93695470046997,16.293ZM6.000004700469971,17.6841C6.000004700469971,17.0048,6.004034700469971,16.7982,6.031994700469971,16.643700000000003C6.031994700469971,16.643700000000003,4.06397990046997,16.287399999999998,4.06397990046997,16.287399999999998C3.995969940469971,16.6631,3.999999943169971,17.092100000000002,3.999999943169971,17.6841C3.999999943169971,17.6841,6.000004700469971,17.6841,6.000004700469971,17.6841C6.000004700469971,17.6841,6.000004700469971,17.6841,6.000004700469971,17.6841ZM8.68410470046997,13C8.09210470046997,13,7.663124700469971,12.996,7.287444700469971,13.064C7.287444700469971,13.064,7.643724700469971,15.032,7.643724700469971,15.032C7.79815470046997,15.004,8.004814700469971,15,8.68410470046997,15C8.68410470046997,15,8.68410470046997,13,8.68410470046997,13C8.68410470046997,13,8.68410470046997,13,8.68410470046997,13ZM6.031994700469971,16.643700000000003C6.1805847004699705,15.8229,6.822954700469971,15.1806,7.643724700469971,15.032C7.643724700469971,15.032,7.287444700469971,13.064,7.287444700469971,13.064C5.64589470046997,13.3612,4.361156700469971,14.6459,4.06397990046997,16.287399999999998C4.06397990046997,16.287399999999998,6.031994700469971,16.643700000000003,6.031994700469971,16.643700000000003C6.031994700469971,16.643700000000003,6.031994700469971,16.643700000000003,6.031994700469971,16.643700000000003Z",
          fill: color,
          fillOpacity: "0.800000011920929"
        })
      })
    })]
  });
};
var About = function About(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("defs", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "master_svg0_214_11926",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          rx: "0"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "master_svg1_214_11922",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
          x: "0",
          y: "1",
          width: "22.000001907348633",
          height: "22",
          rx: "0"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      "clip-path": "url(#master_svg0_214_11926)",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
        "clip-path": "url(#master_svg1_214_11922)",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("g", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
            d: "M21.4079,20.95618125C21.2652,20.95448125,21.1279,20.90168125,21.021,20.80738125L20.029,19.92448125C17.8514,18.03708125,14.6176,18.03708125,12.44,19.92448125L11.448,20.80738125C11.2236,21.00358125,10.8886,21.00358125,10.6643,20.80738125L9.67223,19.92448125C7.49463,18.03708125,4.26085,18.03708125,2.08326,19.92448125L0.99203,20.847081250000002C0.816704,21.00388125,0.565468,21.04268125,0.350959,20.946181250000002C0.13645,20.84968125,-0.00108819,20.63588125,0.00000650406,20.400681249999998L0.00000650406,8.39715825C0.000119944,8.06851025,0.266573,7.8021492,0.59522,7.8021492C0.923868,7.8021492,1.19032,8.06851025,1.19043,8.39715825L1.19043,19.051481250000002C3.81839,16.77587125,7.71885,16.77587125,10.3468,19.051481250000002L10.9718,19.597081250000002L11.5968,19.051481250000002C14.2247,16.77587125,18.1252,16.77587125,20.7531,19.051481250000002L20.7531,8.39715825C20.7525,8.06797625,21.0192,7.80078125,21.3483,7.80078125C21.6775,7.80078125,21.9442,8.06797725,21.9436,8.39715825L21.9436,20.360981250000002C21.9436,20.68968125,21.6771,20.95618125,21.3483,20.95618125L21.4079,20.95618125Z",
            fill: color,
            "fill-opacity": "1"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
            d: "M11.001884375,17.267387499999998C10.834414375,17.2680875,10.672354375,17.2081875,10.545554375,17.0987875L9.781694375,16.4340875C8.241724375,15.0992875,5.954824374999999,15.0992875,4.414854375,16.4340875L3.650994375,17.0987875C3.445962375,17.2845875,3.150172375,17.3309875,2.898114375,17.216787500000002C2.646056375,17.1025875,2.485844975,16.8496875,2.4903260613,16.5729875L2.4903260613,7.3372475C2.495789895,4.9359375,4.443984375,2.992187500015373,6.845304375,2.992187500015373L7.351234375,2.992187500015373C9.752564375,2.99218118795,11.700754375,4.9359375,11.706224375,7.3372475L11.706224375,16.5630875C11.707354375,16.836287499999997,11.548164375,17.084787499999997,11.299494375,17.1979875C11.206784375,17.243187499999998,11.105054375,17.2669875,11.001884375,17.267387499999998ZM7.093314375,14.0333875C8.238864375,14.0207875,9.359534374999999,14.3676875,10.297544375000001,15.0253875L10.297544375000001,7.3372475C10.297544375000001,5.693607500000001,8.965114374999999,4.3611775,7.321474375,4.3611775L6.845304375,4.3611775C5.201664375,4.3611775,3.869234375,5.693607500000001,3.869234375,7.3372475L3.869234375,15.0551875C4.809194375000001,14.3828875,5.937724375,14.0252875,7.093314375,14.0333875Z",
            fill: color,
            "fill-opacity": "1"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
            d: "M11.0020391875,17.267387499999998C10.9029661875,17.268587500000002,10.8048101875,17.2482875,10.7143521875,17.2078875C10.4656811875,17.0946875,10.3064934575,16.8461875,10.30762306213,16.5729875L10.30762306213,7.3372475C10.3130780775,4.9397975,12.2552371875,2.99764264,14.6526871875,2.9921875L15.158617187499999,2.9921875C17.5560671875,2.99764216,19.4982171875,4.9397975,19.5036771875,7.3372475L19.5036771875,16.5630875C19.5081571875,16.8397875,19.3479471875,17.0926875,19.0958871875,17.2068875C18.8438271875,17.3209875,18.5480371875,17.2746875,18.3430071875,17.088787500000002L17.5791571875,16.424187500000002C16.0391771875,15.0893875,13.7522871875,15.0893875,12.2123071875,16.424187500000002L11.4484471875,17.088787500000002C11.3256571875,17.1995875,11.1673591875,17.262887499999998,11.0020391875,17.267387499999998ZM14.6526871875,4.3710975C13.0090471875,4.3710975,11.6766171875,5.7035275,11.6766171875,7.3471675L11.6766171875,15.0650875C13.5948271875,13.6890875,16.1767971875,13.6890875,18.095007187500002,15.0650875L18.095007187500002,7.3372475C18.095007187500002,5.693607500000001,16.7625771875,4.3611775,15.1189371875,4.3611775L14.6526871875,4.3710975Z",
            fill: color,
            "fill-opacity": "1"
          })
        })]
      })
    })]
  });
};
var Rank = function Rank(_ref6) {
  var color = _ref6.color;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "master_svg0_203_24573",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          rx: "0"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      "clip-path": "url(#master_svg0_203_24573)",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M12.75,15.5C12.75,15.9142,12.4142,16.25,12,16.25C11.58579,16.25,11.25,15.9142,11.25,15.5L11.25,8.5C11.25,8.08579,11.58579,7.75,12,7.75C12.4142,7.75,12.75,8.08579,12.75,8.5L12.75,15.5ZM16.5,15.5C16.5,15.9142,16.1642,16.25,15.75,16.25C15.3358,16.25,15,15.9142,15,15.5L15,11.5C15,11.08579,15.3358,10.75,15.75,10.75C16.1642,10.75,16.5,11.08579,16.5,11.5L16.5,15.5ZM9,15.5C9,15.9142,8.66421,16.25,8.25,16.25C7.83579,16.25,7.5,15.9142,7.5,15.5L7.5,10.5C7.5,10.08579,7.83579,9.75,8.25,9.75C8.66421,9.75,9,10.08579,9,10.5L9,15.5ZM4.75,3.25L19.25,3.25C20.7687,3.25,22,4.48125,22,6L22,18C22,19.5188,20.7687,20.75,19.25,20.75L4.75,20.75C3.23125,20.75,2,19.5188,2,18L2,6C2,4.48125,3.23125,3.25,4.75,3.25ZM4.75,4.75C4.05964,4.75,3.5,5.30964,3.5,6L3.5,18C3.5,18.6904,4.05964,19.25,4.75,19.25L19.25,19.25C19.9404,19.25,20.5,18.6904,20.5,18L20.5,6C20.5,5.30964,19.9404,4.75,19.25,4.75L4.75,4.75Z",
          fill: color,
          "fill-opacity": "1"
        })
      })
    })]
  });
};
var LinearIcon = function LinearIcon(_ref7) {
  var name = _ref7.name,
    color = _ref7.color;
  var colors = {
    color: color,
    name: name.replace('-', '')
  };
  switch (name) {
    case 'home':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Home, {
        color: color
      });
      break;
    case 'follow':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Follow, {
        color: color
      });
      break;
    case 'profile':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Profile, {
        color: color
      });
      break;
    case 'setting':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Setting, {
        color: color
      });
      break;
    case 'about':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(About, {
        color: color
      });
      break;
    case 'rank':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Rank, {
        color: color
      });
      break;
    default:
      return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  }
};
/* harmony default export */ var Icon = (LinearIcon);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
;// CONCATENATED MODULE: ./src/layouts/Menus.tsx
















var menus = [{
  key: 'home',
  icon: house_line,
  activeIcon: house_line_active,
  label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
    children: "Home"
  })
}, {
  key: 'follow',
  icon: square_user_check,
  activeIcon: square_user_check_active,
  label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
    children: "Follow"
  })
}, {
  key: 'profile',
  icon: user_alt,
  activeIcon: user_alt_active,
  label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
    children: "Profile"
  })
}, {
  key: 'setting',
  icon: gear,
  activeIcon: gear_active,
  label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
    children: "Setting"
  })
}, {
  key: 'about',
  icon: gear,
  activeIcon: gear_active,
  label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
    children: "About"
  })
}, {
  key: 'rank',
  icon: gear,
  activeIcon: gear_active,
  label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
    children: "Rank"
  })
}];
/* harmony default export */ var Menus = (function () {
  var location = (0,_umi_production_exports.useLocation)();
  var path = location.pathname;
  var _useState = (0,react.useState)('home'),
    _useState2 = slicedToArray_default()(_useState, 2),
    curMenu = _useState2[0],
    setCurMenu = _useState2[1];
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorTextSecondary = _theme$useToken$token.colorTextSecondary;
  (0,react.useEffect)(function () {
    if (path === '/') {
      setCurMenu('home');
    } else {
      setCurMenu(path.split('/')[1]);
    }
  }, [path]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "menus",
    children: menus.map(function (item) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "item ".concat(curMenu === item.key ? 'active' : ''),
        style: {
          color: curMenu === item.key ? colorPrimary : colorTextSecondary
        },
        onClick: function onClick() {
          setCurMenu(item.key);
          _umi_production_exports.history.push("/".concat(item.key));
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
          name: item.key,
          color: curMenu === item.key ? colorPrimary : colorTextSecondary
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: item.label
        })]
      }, item.key);
    })
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/EditOutlined.js + 1 modules
var EditOutlined = __webpack_require__(23299);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ProjectOutlined.js + 1 modules
var ProjectOutlined = __webpack_require__(73331);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(38438);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SettingOutlined.js + 1 modules
var SettingOutlined = __webpack_require__(62237);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/PoweroffOutlined.js + 1 modules
var PoweroffOutlined = __webpack_require__(66701);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js + 1 modules
var CaretDownOutlined = __webpack_require__(48657);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(17023);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(86173);
// EXTERNAL MODULE: ./src/Components/NewPost/index.tsx + 2 modules
var NewPost = __webpack_require__(21654);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(32347);
;// CONCATENATED MODULE: ./src/layouts/Mobilefooter.tsx










/* harmony default export */ var Mobilefooter = (function () {
  var location = (0,_umi_production_exports.useLocation)();
  var path = location.pathname;
  var _useState = (0,react.useState)('home'),
    _useState2 = slicedToArray_default()(_useState, 2),
    curMenu = _useState2[0],
    setCurMenu = _useState2[1];
  var _theme$useToken = theme/* default */.Z.useToken(),
    colorPrimary = _theme$useToken.token.colorPrimary;
  (0,react.useEffect)(function () {
    if (path === '/') {
      setCurMenu('home');
    } else {
      setCurMenu(path.split('/')[1]);
    }
  }, [path]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "tabFooter",
    children: [menus.slice(0, 4).map(function (item) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "item ".concat(curMenu === item.key ? 'active' : ''),
        style: {
          color: curMenu === item.key ? colorPrimary : '#333'
        },
        onClick: function onClick() {
          setCurMenu(item.key);
          _umi_production_exports.history.push("/".concat(item.key));
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
          name: item.key,
          color: curMenu === item.key ? colorPrimary : '#333'
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "text",
          children: item.label
        })]
      }, item.key);
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
      menu: {
        items: menus.slice(4).map(function (item) {
          return {
            key: item.key,
            label: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                color: curMenu === item.key ? colorPrimary : '#333',
                paddingLeft: 12
              },
              children: item.label
            }),
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
              name: item.key,
              color: curMenu === item.key ? colorPrimary : '#333'
            })
          };
        }),
        onClick: function onClick(item) {
          setCurMenu(item.key);
          _umi_production_exports.history.push("/".concat(item.key));
        }
      },
      placement: "topRight",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "item ",
        style: {
          color: '#333'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EllipsisOutlined/* default */.Z, {
          style: {
            fontSize: 24,
            verticalAlign: 'middle',
            color: '#333'
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "text",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
            children: "More"
          })
        })]
      })
    })]
  });
});
// EXTERNAL MODULE: ./src/assets/btc.png
var btc = __webpack_require__(33401);
// EXTERNAL MODULE: ./src/assets/mvc.png
var mvc = __webpack_require__(61133);
;// CONCATENATED MODULE: ./src/assets/banner.png
var banner_namespaceObject = __webpack_require__.p + "static/banner.9071b2b7.png";
;// CONCATENATED MODULE: ./src/assets/banner2.png
var banner2_namespaceObject = __webpack_require__.p + "static/banner2.915105d2.png";
;// CONCATENATED MODULE: ./src/Components/Recommend/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
;// CONCATENATED MODULE: ./src/Components/Recommend/index.tsx







/* harmony default export */ var Recommend = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "recommand",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: banner_namespaceObject,
      alt: "",
      onClick: function onClick() {
        window.open("https://www.metaso.network", (0,utils/* openWindowTarget */.wL)());
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: banner2_namespaceObject,
      alt: "",
      onClick: function onClick() {
        window.open(config/* curNetwork */.eM === 'testnet' ? 'https://testnet.metaid.market/launch' : 'https://metaid.market/launch', (0,utils/* openWindowTarget */.wL)());
      }
    })]
  });
});
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(30430);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/Icon.js
var components_Icon = __webpack_require__(75509);
;// CONCATENATED MODULE: ./src/layouts/SelectLang.tsx







var HeartSvg = function HeartSvg() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    version: "1.1",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "master_svg0_192_08750",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
          x: "0",
          y: "0",
          width: "20",
          height: "20",
          rx: "0"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      "clip-path": "url(#master_svg0_192_08750)",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M13.55696875,14.231615625C13.39946875,13.799215625,12.92106875,13.576415625,12.48866875,13.734015625C12.05626875,13.891615625,11.83346875,14.369815625,11.99106875,14.802215625C11.99106875,14.802215625,13.55696875,14.231615625,13.55696875,14.231615625C13.55696875,14.231615625,13.55696875,14.231615625,13.55696875,14.231615625ZM17.40296875,18.326815625C17.85996875,18.381215625,18.27456875,18.054815625,18.32896875,17.597815625000003C18.38346875,17.140815625000002,18.05696875,16.726215625000002,17.599968750000002,16.671815625C17.599968750000002,16.671815625,17.40296875,18.326815625,17.40296875,18.326815625C17.40296875,18.326815625,17.40296875,18.326815625,17.40296875,18.326815625ZM16.811868750000002,13.332715625C16.811868750000002,12.872415625,16.43876875,12.499315625,15.97846875,12.499315625C15.51826875,12.499315625,15.14516875,12.872415625,15.14516875,13.332715625C15.14516875,13.332715625,16.811868750000002,13.332715625,16.811868750000002,13.332715625C16.811868750000002,13.332715625,16.811868750000002,13.332715625,16.811868750000002,13.332715625ZM10.78697875,16.667415625C10.32749875,16.693815625,9.97645875,17.087715625,10.00288875,17.547215625C10.02932875,18.006715625,10.42323875,18.357715625,10.88267875,18.331215625C10.88267875,18.331215625,10.78697875,16.667415625,10.78697875,16.667415625C10.78697875,16.667415625,10.78697875,16.667415625,10.78697875,16.667415625ZM17.50146875,13.332715625C17.96176875,13.332715625,18.33486875,12.959615625,18.33486875,12.499315625C18.33486875,12.039115625,17.96176875,11.666015625,17.50146875,11.666015625C17.50146875,11.666015625,17.50146875,13.332715625,17.50146875,13.332715625C17.50146875,13.332715625,17.50146875,13.332715625,17.50146875,13.332715625ZM10.83484875,11.666015625C10.37460875,11.666015625,10.00151875,12.039115625,10.00151875,12.499315625C10.00151875,12.959615625,10.37460875,13.332715625,10.83484875,13.332715625C10.83484875,13.332715625,10.83484875,11.666015625,10.83484875,11.666015625C10.83484875,11.666015625,10.83484875,11.666015625,10.83484875,11.666015625ZM15.00146875,10.832685625C15.00146875,10.372435625,14.62846875,9.999345625,14.16816875,9.999345625C13.70796875,9.999345625,13.33486875,10.372435625,13.33486875,10.832685625C13.33486875,10.832685625,15.00146875,10.832685625,15.00146875,10.832685625C15.00146875,10.832685625,15.00146875,10.832685625,15.00146875,10.832685625ZM13.33486875,12.499315625C13.33486875,12.959615625,13.70796875,13.332715625,14.16816875,13.332715625C14.62846875,13.332715625,15.00146875,12.959615625,15.00146875,12.499315625C15.00146875,12.499315625,13.33486875,12.499315625,13.33486875,12.499315625C13.33486875,12.499315625,13.33486875,12.499315625,13.33486875,12.499315625ZM5.85713875,12.655915625C5.94362875,12.203915625,5.6472887499999995,11.767315625,5.19524875,11.680815625C4.7432187500000005,11.594345625,4.30665875,11.890715625,4.22016875,12.342715625C4.22016875,12.342715625,5.85713875,12.655915625,5.85713875,12.655915625C5.85713875,12.655915625,5.85713875,12.655915625,5.85713875,12.655915625ZM8.42323875,15.789215625C8.880868750000001,15.740315625,9.21229875,15.329715625,9.16347875,14.872115625C9.11466875,14.414515625,8.70409875,14.083115625,8.24645875,14.131815625C8.24645875,14.131815625,8.42323875,15.789215625,8.42323875,15.789215625C8.42323875,15.789215625,8.42323875,15.789215625,8.42323875,15.789215625ZM9.91234875,4.198655625C9.45474875,4.247895625,9.12371875,4.6587756250000005,9.172968749999999,5.116375625C9.22221875,5.573965625,9.633088749999999,5.904995625,10.09067875,5.855745625C10.09067875,5.855745625,9.91234875,4.198655625,9.91234875,4.198655625C9.91234875,4.198655625,9.91234875,4.198655625,9.91234875,4.198655625ZM12.46436875,7.344085625C12.37856875,7.796265625,12.67556875,8.232335625000001,13.12786875,8.318085625C13.57996875,8.403835625,14.01606875,8.106785625,14.10186875,7.654605625C14.10186875,7.654605625,12.46436875,7.344085625,12.46436875,7.344085625C12.46436875,7.344085625,12.46436875,7.344085625,12.46436875,7.344085625ZM1.69930585,8.940385625000001C1.57469835,9.383435625,1.83284575,9.843615625,2.27589375,9.968225625C2.71893875,10.092835625,3.1791187499999998,9.834685625,3.3037287500000003,9.391635625C3.3037287500000003,9.391635625,1.69930585,8.940385625000001,1.69930585,8.940385625000001C1.69930585,8.940385625000001,1.69930585,8.940385625000001,1.69930585,8.940385625000001ZM4.16817875,3.240085625C4.16817875,3.240085625,4.97038875,3.465705625,4.97038875,3.465705625C4.97038875,3.465705625,4.16817875,3.240085625,4.16817875,3.240085625C4.16817875,3.240085625,4.16817875,3.240085625,4.16817875,3.240085625ZM5.03263875,3.465705625C5.15724875,3.908755625,5.617418750000001,4.166905625,6.06046875,4.0422956249999995C6.50351875,3.917685625,6.76166875,3.457515625,6.63705875,3.0144656249999997C6.63705875,3.0144656249999997,5.03263875,3.465705625,5.03263875,3.465705625C5.03263875,3.465705625,5.03263875,3.465705625,5.03263875,3.465705625ZM6.70024875,9.394945625C6.82667875,9.837485625,7.28791875,10.093725625,7.73044875,9.967285625C8.17297875,9.840845625,8.42921875,9.379605625,8.30277875,8.937085625C8.30277875,8.937085625,6.70024875,9.394945625,6.70024875,9.394945625C6.70024875,9.394945625,6.70024875,9.394945625,6.70024875,9.394945625ZM6.63611875,3.103745625C6.50967875,2.661218625,6.04843875,2.404975625,5.60591875,2.5314126249999997C5.16337875,2.6578486249999997,4.90713875,3.1190856250000003,5.03357875,3.561615625C5.03357875,3.561615625,6.63611875,3.103745625,6.63611875,3.103745625C6.63611875,3.103745625,6.63611875,3.103745625,6.63611875,3.103745625ZM3.33484875,5.832685625C2.87460875,5.832685625,2.50151475,6.205785625,2.50151475,6.666015625C2.50151475,7.126245625,2.87460875,7.499345625,3.33484875,7.499345625C3.33484875,7.499345625,3.33484875,5.832685625,3.33484875,5.832685625C3.33484875,5.832685625,3.33484875,5.832685625,3.33484875,5.832685625ZM6.66817875,7.499345625C7.12841875,7.499345625,7.50151875,7.126245625,7.50151875,6.666015625C7.50151875,6.205785625,7.12841875,5.832685625,6.66817875,5.832685625C6.66817875,5.832685625,6.66817875,7.499345625,6.66817875,7.499345625C6.66817875,7.499345625,6.66817875,7.499345625,6.66817875,7.499345625ZM11.99106875,14.802215625C12.19146875,15.351915625,12.73896875,16.102615625,13.56386875,16.761115625000002C13.56386875,16.761115625000002,14.60366875,15.458615625,14.60366875,15.458615625C13.93946875,14.928315625,13.62276875,14.411915625,13.55696875,14.231615625C13.55696875,14.231615625,11.99106875,14.802215625,11.99106875,14.802215625C11.99106875,14.802215625,11.99106875,14.802215625,11.99106875,14.802215625ZM13.56386875,16.761115625000002C14.45906875,17.475715625,15.73656875,18.128415625,17.40296875,18.326815625C17.40296875,18.326815625,17.599968750000002,16.671815625,17.599968750000002,16.671815625C16.27096875,16.513615625,15.28026875,15.998715625,14.60366875,15.458615625C14.60366875,15.458615625,13.56386875,16.761115625000002,13.56386875,16.761115625000002C13.56386875,16.761115625000002,13.56386875,16.761115625000002,13.56386875,16.761115625000002ZM15.14516875,13.332715625C15.14516875,13.450415625,15.06356875,13.749015625,14.76356875,14.189715625C14.48186875,14.603715625,14.06676875,15.054615625,13.56196875,15.460115625C13.56196875,15.460115625,14.60556875,16.759515625,14.60556875,16.759515625C15.22436875,16.262515625,15.75666875,15.692715625,16.141368749999998,15.127515625C16.50796875,14.589115625,16.811868750000002,13.950315625,16.811868750000002,13.332715625C16.811868750000002,13.332715625,15.14516875,13.332715625,15.14516875,13.332715625C15.14516875,13.332715625,15.14516875,13.332715625,15.14516875,13.332715625ZM13.56196875,15.460115625C12.72196875,16.134715625,11.72306875,16.613515624999998,10.78697875,16.667415625C10.78697875,16.667415625,10.88267875,18.331215625,10.88267875,18.331215625C12.27876875,18.251015625,13.60026875,17.567015625,14.60556875,16.759515625C14.60556875,16.759515625,13.56196875,15.460115625,13.56196875,15.460115625C13.56196875,15.460115625,13.56196875,15.460115625,13.56196875,15.460115625ZM17.50146875,11.666015625C17.50146875,11.666015625,10.83484875,11.666015625,10.83484875,11.666015625C10.83484875,11.666015625,10.83484875,13.332715625,10.83484875,13.332715625C10.83484875,13.332715625,17.50146875,13.332715625,17.50146875,13.332715625C17.50146875,13.332715625,17.50146875,11.666015625,17.50146875,11.666015625C17.50146875,11.666015625,17.50146875,11.666015625,17.50146875,11.666015625ZM13.33486875,10.832685625C13.33486875,10.832685625,13.33486875,12.499315625,13.33486875,12.499315625C13.33486875,12.499315625,15.00146875,12.499315625,15.00146875,12.499315625C15.00146875,12.499315625,15.00146875,10.832685625,15.00146875,10.832685625C15.00146875,10.832685625,13.33486875,10.832685625,13.33486875,10.832685625C13.33486875,10.832685625,13.33486875,10.832685625,13.33486875,10.832685625ZM4.22016875,12.342715625C4.09666875,12.988215625,4.1564387499999995,13.970515625,4.83307875,14.755815625C5.53768875,15.573715625,6.72683875,15.970115625,8.42323875,15.789215625C8.42323875,15.789215625,8.24645875,14.131815625,8.24645875,14.131815625C6.86641875,14.279115625,6.31589875,13.923515625,6.09573875,13.667915625C5.84761875,13.380015625,5.79751875,12.967615625,5.85713875,12.655915625C5.85713875,12.655915625,4.22016875,12.342715625,4.22016875,12.342715625C4.22016875,12.342715625,4.22016875,12.342715625,4.22016875,12.342715625ZM10.09067875,5.855745625C10.65005875,5.795545625,11.40251875,5.844935625,11.92146875,6.096435625C12.16526875,6.214585625,12.31556875,6.356365625,12.39946875,6.513195625C12.47996875,6.663875625,12.54576875,6.914835625,12.46436875,7.344085625C12.46436875,7.344085625,14.10186875,7.654605625,14.10186875,7.654605625C14.23916875,6.930185625,14.16356875,6.278135625,13.86926875,5.727505625C13.57826875,5.183045625,13.12006875,4.825245625,12.64836875,4.596615625C11.73616875,4.154535624999999,10.62912875,4.121515625,9.91234875,4.198655625C9.91234875,4.198655625,10.09067875,5.855745625,10.09067875,5.855745625C10.09067875,5.855745625,10.09067875,5.855745625,10.09067875,5.855745625ZM3.3037287500000003,9.391635625C3.3037287500000003,9.391635625,4.97038875,3.465705625,4.97038875,3.465705625C4.97038875,3.465705625,3.36596875,3.0144656249999997,3.36596875,3.0144656249999997C3.36596875,3.0144656249999997,1.69930585,8.940385625000001,1.69930585,8.940385625000001C1.69930585,8.940385625000001,3.3037287500000003,9.391635625,3.3037287500000003,9.391635625C3.3037287500000003,9.391635625,3.3037287500000003,9.391635625,3.3037287500000003,9.391635625ZM4.16817875,3.240085625C4.97038875,3.465705625,4.97030875,3.466015625,4.97021875,3.466315625C4.97018875,3.466415625,4.97010875,3.466715625,4.97005875,3.466905625C4.96993875,3.467295625,4.96983875,3.467675625,4.96972875,3.4680356249999997C4.969518750000001,3.4687856249999998,4.969318749999999,3.469485625,4.969128749999999,3.470135625C4.96874875,3.471455625,4.96840875,3.472625625,4.96810875,3.473645625C4.96750875,3.4756856249999997,4.96706875,3.477145625,4.96677875,3.478065625C4.9662187499999995,3.479885625,4.966268749999999,3.4796256249999997,4.9669687499999995,3.4775856249999997C4.96841875,3.473335625,4.97215875,3.462825625,4.97830875,3.448265625C4.991618750000001,3.4167256249999998,5.01031875,3.380085625,5.03216875,3.349035625C5.08079875,3.2798656250000002,5.06811875,3.332685625,5.00151875,3.332685625C5.00151875,3.332685625,5.00151875,1.666015625,5.00151875,1.666015625C4.30991875,1.666015625,3.88056875,2.089199625,3.66877875,2.390405625C3.56041875,2.544530625,3.48797875,2.693085625,3.44269875,2.800435625C3.41953875,2.8553156250000002,3.40212875,2.902665625,3.3897387500000002,2.938935625C3.38351875,2.957155625,3.37848875,2.972805625,3.37456875,2.9854756250000003C3.37260875,2.991815625,3.37091875,2.997435625,3.36948875,3.0022756250000002C3.36876875,3.0047056249999997,3.36811875,3.0069356249999997,3.36753875,3.008965625C3.36724875,3.009985625,3.36696875,3.0109456249999997,3.36670875,3.011865625C3.36657875,3.012325625,3.36644875,3.0127756249999997,3.36632875,3.0132056250000003C3.3662687499999997,3.013425625,3.36617875,3.013735625,3.36614875,3.013845625C3.36605875,3.014155625,3.36596875,3.0144656249999997,4.16817875,3.240085625C4.16817875,3.240085625,4.16817875,3.240085625,4.16817875,3.240085625ZM5.00151875,3.332685625C4.93491875,3.332685625,4.92222875,3.2798656250000002,4.97086875,3.349035625C4.99270875,3.380085625,5.01141875,3.4167256249999998,5.02471875,3.448265625C5.03086875,3.462825625,5.03461875,3.473335625,5.03606875,3.4775856249999997C5.036758750000001,3.4796256249999997,5.03681875,3.479885625,5.03624875,3.478065625C5.03596875,3.477145625,5.03551875,3.4756856249999997,5.03491875,3.473645625C5.03461875,3.472625625,5.03427875,3.471455625,5.0338987500000005,3.470135625C5.033708750000001,3.469485625,5.03350875,3.4687856249999998,5.03329875,3.4680356249999997C5.03318875,3.467675625,5.03308875,3.467295625,5.03296875,3.466905625C5.03291875,3.466715625,5.03283875,3.466415625,5.03280875,3.466315625C5.03271875,3.466015625,5.03263875,3.465705625,5.83484875,3.240085625C6.63705875,3.0144656249999997,6.63696875,3.014155625,6.63687875,3.013845625C6.63684875,3.013735625,6.63676875,3.013425625,6.63669875,3.0132056250000003C6.63657875,3.0127756249999997,6.63644875,3.012325625,6.63631875,3.011865625C6.63605875,3.0109456249999997,6.63577875,3.009985625,6.63548875,3.008965625C6.63490875,3.0069356249999997,6.63425875,3.0047056249999997,6.63353875,3.0022756250000002C6.63211875,2.997435625,6.63041875,2.991815625,6.62846875,2.9854756250000003C6.62453875,2.972805625,6.61950875,2.957155625,6.61328875,2.938935625C6.60089875,2.902665625,6.58348875,2.8553156250000002,6.56032875,2.800435625C6.51504875,2.693085625,6.44261875,2.544530625,6.33424875,2.390405625C6.12246875,2.089199625,5.69311875,1.666015625,5.00151875,1.666015625C5.00151875,1.666015625,5.00151875,3.332685625,5.00151875,3.332685625C5.00151875,3.332685625,5.00151875,3.332685625,5.00151875,3.332685625ZM8.30277875,8.937085625C8.30277875,8.937085625,6.63611875,3.103745625,6.63611875,3.103745625C6.63611875,3.103745625,5.03357875,3.561615625,5.03357875,3.561615625C5.03357875,3.561615625,6.70024875,9.394945625,6.70024875,9.394945625C6.70024875,9.394945625,8.30277875,8.937085625,8.30277875,8.937085625C8.30277875,8.937085625,8.30277875,8.937085625,8.30277875,8.937085625ZM3.33484875,7.499345625C3.33484875,7.499345625,6.66817875,7.499345625,6.66817875,7.499345625C6.66817875,7.499345625,6.66817875,5.832685625,6.66817875,5.832685625C6.66817875,5.832685625,3.33484875,5.832685625,3.33484875,5.832685625C3.33484875,5.832685625,3.33484875,7.499345625,3.33484875,7.499345625C3.33484875,7.499345625,3.33484875,7.499345625,3.33484875,7.499345625Z",
          fill: "currentColor",
          "fill-opacity": "1"
        })
      })
    })]
  });
};
var HeartIcon = function HeartIcon(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Icon/* default */.Z, objectSpread2_default()({
    component: HeartSvg
  }, props));
};
/* harmony default export */ var SelectLang = (function () {
  var intl = (0,_umi_production_exports.useIntl)();
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorText = _theme$useToken$token.colorText;
  var currentLang = intl.locale === 'en-US' ? 'English' : '中文';
  return /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
    title: "\u4E2D\u6587 / English",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
      type: "text",
      onClick: function onClick() {
        (0,_umi_production_exports.setLocale)(currentLang === 'English' ? 'zh-CN' : 'en-US', false);
      },
      shape: "circle",
      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(HeartIcon, {})
    })
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MenuOutlined.js + 1 modules
var MenuOutlined = __webpack_require__(66271);
;// CONCATENATED MODULE: ./src/layouts/HeaderMenus.tsx





/* harmony default export */ var HeaderMenus = (function () {
  var items = menus.map(function (item) {
    return {
      key: item.key,
      label: item.label
    };
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
    menu: {
      items: items,
      onClick: function onClick(item) {
        _umi_production_exports.history.push("/".concat(item.key));
      }
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(MenuOutlined/* default */.Z, {})
      })
    })
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ivliu+react-offscreen@1.0.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ivliu/react-offscreen/dist/esm/index.mjs + 3 modules
var esm = __webpack_require__(65367);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(47467);
;// CONCATENATED MODULE: ./src/Components/UserSetting/index.tsx






/* harmony default export */ var UserSetting = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    showSetting = _useModel.showSetting,
    setShowSetting = _useModel.setShowSetting,
    setShowProfileEdit = _useModel.setShowProfileEdit;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponPopup/* default */.Z, {
    onClose: function onClose() {
      setShowSetting(false);
    },
    show: showSetting,
    modalWidth: 380,
    closable: true,
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Set up"
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Your avatar and name have not been set up, Please go to Settings to complete your profile."
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
      size: "large",
      block: true,
      type: "primary",
      shape: "round",
      style: {
        marginTop: 20
      },
      onClick: function onClick() {
        setShowSetting(false);
        setShowProfileEdit(true);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "Go to Setting"
        })
      })
    })]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/index.js + 21 modules
var es_form = __webpack_require__(49267);
// EXTERNAL MODULE: ./src/Components/NewPost/SelectChain.tsx
var SelectChain = __webpack_require__(94436);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./src/utils/file.ts
var file = __webpack_require__(99915);
// EXTERNAL MODULE: ./src/Components/ProfileCard/UploadAvatar.tsx
var UploadAvatar = __webpack_require__(79370);
;// CONCATENATED MODULE: ./src/Components/ProfileSetting/index.tsx
/* provided dependency */ var Buffer = __webpack_require__(36379)["Buffer"];

















/* harmony default export */ var ProfileSetting = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    showProfileEdit = _useModel.showProfileEdit,
    setShowProfileEdit = _useModel.setShowProfileEdit,
    chain = _useModel.chain,
    btcConnector = _useModel.btcConnector,
    mvcConnector = _useModel.mvcConnector,
    feeRate = _useModel.feeRate,
    fetchUserInfo = _useModel.fetchUserInfo;
  var _useState = (0,react.useState)(chain),
    _useState2 = slicedToArray_default()(_useState, 2),
    chainNet = _useState2[0],
    setChainNet = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    submitting = _useState4[0],
    setSubmitting = _useState4[1];
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  (0,react.useEffect)(function () {
    setChainNet(chain);
  }, [chain]);
  var connector = (0,react.useMemo)(function () {
    return chainNet === 'btc' ? btcConnector : mvcConnector;
  }, [chainNet, btcConnector, mvcConnector]);
  var profileUserData = (0,useQuery/* useQuery */.a)({
    queryKey: ['userInfo', 'edit', connector === null || connector === void 0 ? void 0 : connector.user.address],
    enabled: Boolean(connector && showProfileEdit),
    queryFn: function queryFn() {
      return (0,api/* getUserInfo */.bG)({
        address: connector.user.address
      });
    }
  });
  (0,react.useEffect)(function () {
    var _profileUserData$data, _profileUserData$data2, _profileUserData$data3;
    form.setFieldsValue({
      name: (_profileUserData$data = profileUserData.data) === null || _profileUserData$data === void 0 ? void 0 : _profileUserData$data.name,
      avatar: (_profileUserData$data2 = profileUserData.data) !== null && _profileUserData$data2 !== void 0 && _profileUserData$data2.avatar ? "".concat(config/* BASE_MAN_URL */.yC).concat((_profileUserData$data3 = profileUserData.data) === null || _profileUserData$data3 === void 0 ? void 0 : _profileUserData$data3.avatar) : ''
    });
  }, [profileUserData.data]);
  var updateUser = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var values, _yield$image2Attach, _yield$image2Attach2, image, _yield$image2Attach3, _yield$image2Attach4, _image, res, avatarRes, backgroundRes, nameRes, _nameRes$status, _avatarRes$status, _backgroundRes$status, nameStatus, avatarStatus, backgroundStatus, _res, _avatarRes, _backgroundRes, _nameRes, _nameRes$status2, _avatarRes$status2, _backgroundRes$status2, _nameStatus, _avatarStatus, _backgroundStatus;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (profileUserData.data) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            values = form.getFieldsValue();
            setSubmitting(true);
            if (!(values.avatar && typeof values.avatar !== 'string')) {
              _context.next = 13;
              break;
            }
            _context.next = 7;
            return (0,file/* image2Attach */.V6)([values.avatar]);
          case 7:
            _yield$image2Attach = _context.sent;
            _yield$image2Attach2 = slicedToArray_default()(_yield$image2Attach, 1);
            image = _yield$image2Attach2[0];
            values.avatar = Buffer.from(image.data, "hex").toString("base64");
            _context.next = 14;
            break;
          case 13:
            delete values.avatar;
          case 14:
            if (!(values.background && typeof values.background !== 'string')) {
              _context.next = 23;
              break;
            }
            _context.next = 17;
            return (0,file/* image2Attach */.V6)([values.background]);
          case 17:
            _yield$image2Attach3 = _context.sent;
            _yield$image2Attach4 = slicedToArray_default()(_yield$image2Attach3, 1);
            _image = _yield$image2Attach4[0];
            values.background = Buffer.from(_image.data, "hex").toString("base64");
            _context.next = 24;
            break;
          case 23:
            delete values.background;
          case 24:
            _context.prev = 24;
            if (!profileUserData.data.name) {
              _context.next = 32;
              break;
            }
            _context.next = 28;
            return connector.updateUserInfo({
              userData: objectSpread2_default()({}, values),
              options: {
                feeRate: Number(feeRate),
                network: config/* curNetwork */.eM
              }
            })["catch"](function (e) {
              throw new Error(e);
            });
          case 28:
            res = _context.sent;
            if (!res) {
              message/* default */.ZP.error('Update Failed');
            } else {
              avatarRes = res.avatarRes, backgroundRes = res.backgroundRes, nameRes = res.nameRes;
              if (avatarRes || backgroundRes || nameRes) {
                nameStatus = (_nameRes$status = nameRes === null || nameRes === void 0 ? void 0 : nameRes.status) !== null && _nameRes$status !== void 0 ? _nameRes$status : '';
                avatarStatus = (_avatarRes$status = avatarRes === null || avatarRes === void 0 ? void 0 : avatarRes.status) !== null && _avatarRes$status !== void 0 ? _avatarRes$status : '';
                backgroundStatus = (_backgroundRes$status = backgroundRes === null || backgroundRes === void 0 ? void 0 : backgroundRes.status) !== null && _backgroundRes$status !== void 0 ? _backgroundRes$status : '';
                if (!nameStatus && !avatarStatus && !backgroundStatus) {
                  message/* default */.ZP.success('Update Successfully');
                } else {
                  message/* default */.ZP.error('User Canceled');
                }
              }
            }
            _context.next = 36;
            break;
          case 32:
            _context.next = 34;
            return connector.createUserInfo({
              userData: values,
              options: {
                feeRate: Number(feeRate),
                network: config/* curNetwork */.eM
              }
            })["catch"](function (e) {
              throw new Error(e);
            });
          case 34:
            _res = _context.sent;
            if (!_res) {
              message/* default */.ZP.error('Create Failed');
            } else {
              _avatarRes = _res.avatarRes, _backgroundRes = _res.backgroundRes, _nameRes = _res.nameRes;
              if (_avatarRes || _backgroundRes || _nameRes) {
                _nameStatus = (_nameRes$status2 = _nameRes === null || _nameRes === void 0 ? void 0 : _nameRes.status) !== null && _nameRes$status2 !== void 0 ? _nameRes$status2 : '';
                _avatarStatus = (_avatarRes$status2 = _avatarRes === null || _avatarRes === void 0 ? void 0 : _avatarRes.status) !== null && _avatarRes$status2 !== void 0 ? _avatarRes$status2 : '';
                _backgroundStatus = (_backgroundRes$status2 = _backgroundRes === null || _backgroundRes === void 0 ? void 0 : _backgroundRes.status) !== null && _backgroundRes$status2 !== void 0 ? _backgroundRes$status2 : '';
                if (!_nameStatus && !_avatarStatus && !_backgroundStatus) {
                  message/* default */.ZP.success('Create Successfully');
                } else {
                  message/* default */.ZP.error('User Canceled');
                }
              }
            }
          case 36:
            fetchUserInfo();
            setShowProfileEdit(false);
            _context.next = 44;
            break;
          case 40:
            _context.prev = 40;
            _context.t0 = _context["catch"](24);
            console.log(_context.t0, 'error');
            message/* default */.ZP.error(_context.t0.message);
          case 44:
            setSubmitting(false);
          case 45:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[24, 40]]);
    }));
    return function updateUser() {
      return _ref.apply(this, arguments);
    };
  }();
  if (!connector) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponPopup/* default */.Z, {
    onClose: function onClose() {
      setShowProfileEdit(false);
    },
    show: showProfileEdit,
    modalWidth: 480,
    closable: true,
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Profile"
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
      gutter: [12, 12],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(SelectChain/* default */.Z, {
        chainNet: chainNet,
        setChainNet: setChainNet
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z, {
      layout: "vertical",
      form: form,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        name: "avatar",
        label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "Avatar"
        }),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadAvatar/* default */.Z, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "Name"
        }),
        name: "name",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          size: "large"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        onClick: function onClick() {
          setShowProfileEdit(false);
        },
        block: true,
        size: "large",
        shape: "round",
        variant: "filled",
        color: "primary",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          wrapper: true,
          children: "Cancel"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        onClick: updateUser,
        block: true,
        loading: submitting,
        size: "large",
        type: "primary",
        shape: "round",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          wrapper: true,
          children: "Save"
        })
      })]
    })]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tabs/index.js + 5 modules
var tabs = __webpack_require__(12700);
;// CONCATENATED MODULE: ./src/Components/HomeTabs/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/Components/HomeTabs/index.tsx







var items = [{
  key: 'new',
  label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
    children: "New"
  }),
  children: null
}, {
  key: 'hot',
  label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
    children: "Hot"
  }),
  children: null
}, {
  key: 'following',
  label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
    children: "Following"
  }),
  children: null
}, {
  key: 'recommend',
  label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
    children: "For You"
  }),
  children: null,
  disabled: true
}];
/* harmony default export */ var HomeTabs = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    isLogin = _useModel.isLogin;
  var location = (0,_umi_production_exports.useLocation)();
  var _useState = (0,react.useState)('home'),
    _useState2 = slicedToArray_default()(_useState, 2),
    curMenu = _useState2[0],
    setCurMenu = _useState2[1];
  var path = location.pathname;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf;
  (0,react.useEffect)(function () {
    if (path === '/' || path === '/home') {
      setCurMenu('new');
    } else {
      setCurMenu(path.split('/home/')[1]);
    }
  }, [path]);
  var items2 = (0,react.useMemo)(function () {
    if (!showConf) return [items[0]];
    return showConf === null || showConf === void 0 ? void 0 : showConf.tabs.map(function (item) {
      var _item = items.find(function (i) {
        return i.key === item;
      });
      if (item === 'following' && !isLogin) return null;
      return _item;
    }).filter(Boolean);
  }, [showConf, isLogin]);
  var onChange = function onChange(key) {
    console.log(key);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z, {
    activeKey: curMenu,
    items: items2,
    onChange: onChange,
    className: "homeTabs",
    centered: true,
    onTabClick: function onTabClick(key) {
      _umi_production_exports.history.push("/home/".concat(key));
      setCurMenu(key);
    }
  });
});
;// CONCATENATED MODULE: ./src/layouts/showLayout.tsx



























var useBreakpoint = grid/* default */.ZP.useBreakpoint;
var Header = layout/* default */.Z.Header,
  Content = layout/* default */.Z.Content,
  Footer = layout/* default */.Z.Footer,
  Sider = layout/* default */.Z.Sider;
function ShowLayout(_ref) {
  var children = _ref.children,
    _showConf = _ref._showConf;
  var location = (0,_umi_production_exports.useLocation)();
  var _useIntl = (0,_umi_production_exports.useIntl)(),
    formatMessage = _useIntl.formatMessage;
  var queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    collapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    __showConf = _useModel.showConf;
  var _useModel2 = (0,_umi_production_exports.useModel)('user'),
    user = _useModel2.user,
    chain = _useModel2.chain,
    disConnect = _useModel2.disConnect,
    feeRate = _useModel2.feeRate,
    setFeeRate = _useModel2.setFeeRate,
    connect = _useModel2.connect,
    switchChain = _useModel2.switchChain,
    checkUserSetting = _useModel2.checkUserSetting,
    isLogin = _useModel2.isLogin,
    searchWord = _useModel2.searchWord,
    setSearchWord = _useModel2.setSearchWord;
  var _useBreakpoint = useBreakpoint(),
    md = _useBreakpoint.md;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorTextSecondary = _theme$useToken$token.colorTextSecondary,
    colorBgBase = _theme$useToken$token.colorBgBase,
    colorBgLayout = _theme$useToken$token.colorBgLayout,
    colorBgContainer = _theme$useToken$token.colorBgContainer;
  var _notification$useNoti = notification/* default */.ZP.useNotification(),
    _notification$useNoti2 = slicedToArray_default()(_notification$useNoti, 2),
    api = _notification$useNoti2[0],
    contextHolder = _notification$useNoti2[1];
  var showConf = _showConf || __showConf;
  var _useState3 = (0,react.useState)('hide'),
    _useState4 = slicedToArray_default()(_useState3, 2),
    followMode = _useState4[0],
    setFollowMode = _useState4[1];
  (0,react.useEffect)(function () {
    if (location.pathname === '/follow') {
      setTimeout(function () {
        setFollowMode('visible');
      }, 1000);
    } else {
      setFollowMode('hide');
    }
  }, [location.pathname]);
  (0,react.useLayoutEffect)(function () {
    if (location.pathname.indexOf('dashboard') > -1) {
      return;
    } else {
      checkUserSetting();
    }
  }, [checkUserSetting, location.pathname]);
  var openNotification = function openNotification() {
    var key = "open".concat(Date.now());
    var btn = /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "primary",
        style: {
          background: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
        },
        size: "small",
        onClick: function onClick() {
          window.open("https://chromewebstore.google.com/detail/metalet/lbjapbcmmceacocpimbpbidpgmlmoaao");
          api.destroy();
        },
        children: "Install Wallet Now"
      })
    });
    api.open({
      message: 'Metalat Wallet',
      description: "It looks like you don't have a wallet installed yet. Please install the Metalat wallet.",
      btn: btn
    });
  };
  var setShowConnect = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(_show) {
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(_show && !window.metaidwallet)) {
              _context.next = 3;
              break;
            }
            openNotification();
            return _context.abrupt("return");
          case 3:
            _context.prev = 3;
            _context.next = 6;
            return connect();
          case 6:
            setTimeout(function () {
              _umi_production_exports.history.push('/');
            }, 100);
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            message/* default */.ZP.error(_context.t0.message);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 9]]);
    }));
    return function setShowConnect(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var isComposing = (0,react.useRef)(false);
  var handleCompositionStart = function handleCompositionStart() {
    isComposing.current = true;
  };
  var handleCompositionEnd = function handleCompositionEnd(e) {
    isComposing.current = false;
    console.log('change', e.target.value);
    setSearchWord(e.target.value);
  };
  var handleChange = function handleChange(e) {
    if (!isComposing.current) {
      console.log('change', e.target.value);
      setSearchWord(e.target.value);
    }
  };
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    showPost = _useState6[0],
    setShowPost = _useState6[1];
  if (!showConf) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      background: colorBgLayout,
      maxHeight: '100vh',
      overflow: 'hidden'
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* default */.Z, {
      className: "layout",
      style: {
        width: showConf.showSliderMenu ? showConf.contentSize : '100%'
      },
      children: [md && showConf !== null && showConf !== void 0 && showConf.showSliderMenu ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Sider, {
        style: {
          background: colorBgContainer,
          height: '100vh'
        },
        collapsed: collapsed,
        onCollapse: function onCollapse(value) {
          return setCollapsed(value);
        },
        className: "sider",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "logoWrap",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              src: (showConf === null || showConf === void 0 ? void 0 : showConf.logo) || config/* DefaultLogo */.$R,
              alt: "",
              className: "logo"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Menus, {})]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          size: "large",
          shape: "round",
          type: "primary",
          onClick: function onClick() {
            if (!isLogin) {
              setShowConnect(true);
              return;
            }
            var isPass = checkUserSetting();
            if (!isPass) {
              return;
            }
            setShowPost(true);
          },
          children: formatMessage({
            id: 'Post'
          })
        })]
      }) : '', /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* default */.Z, {
        className: "layout2",
        style: {
          background: colorBgLayout,
          padding: 0,
          flexGrow: 1
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header, {
          style: {
            width: '100%',
            padding: 0,
            background: (showConf === null || showConf === void 0 ? void 0 : showConf.colorHeaderBg) || colorBgLayout,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          className: "header",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            style: {
              width: !showConf.showSliderMenu ? showConf.contentSize : '100%',
              maxWidth: "100%"
            },
            gutter: [12, 12],
            children: [!(showConf !== null && showConf !== void 0 && showConf.showSliderMenu) && /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
              span: 6,
              md: showConf !== null && showConf !== void 0 && showConf.showSliderMenu ? 0 : 5,
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                gap: 8
              },
              children: [md && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "logoWrap",
                onClick: function onClick() {
                  return _umi_production_exports.history.push('/');
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: (showConf === null || showConf === void 0 ? void 0 : showConf.logo) || config/* DefaultLogo */.$R,
                  alt: "",
                  className: "logo"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(HeaderMenus, {})]
            }), md ? /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 24,
              md: showConf !== null && showConf !== void 0 && showConf.showSliderMenu ? 14 : 9,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "searchWrap",
                style: {
                  background: colorBgContainer
                },
                onClick: function onClick() {
                  if (location.pathname !== '/search') {
                    _umi_production_exports.history.push('/search');
                  }
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z.Search, {
                  size: "large",
                  prefix: /*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {
                    style: {
                      color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                    }
                  }),
                  placeholder: formatMessage({
                    id: 'Search'
                  }),
                  style: {
                    height: 52
                  },
                  variant: "borderless",
                  className: "searchInput",
                  allowClear: true,
                  enterButton: true,
                  onSearch: function onSearch(value) {
                    setSearchWord(value);
                  },
                  onPressEnter: function onPressEnter(e) {
                    setSearchWord(e.target.value);
                  }
                })
              })
            }) : '', /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: showConf !== null && showConf !== void 0 && showConf.showSliderMenu ? 24 : 18,
              md: 10,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "userPanel",
                style: {
                  background: colorBgContainer
                },
                children: [isLogin ? /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
                  placement: "bottom",
                  menu: {
                    items: [{
                      key: 'rank',
                      label: formatMessage({
                        id: 'Rank'
                      }),
                      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ProjectOutlined/* default */.Z, {}),
                      onClick: function onClick() {
                        _umi_production_exports.history.push('/rank');
                      }
                    }, {
                      key: 'profile',
                      label: formatMessage({
                        id: 'Profile'
                      }),
                      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.Z, {}),
                      onClick: function onClick() {
                        _umi_production_exports.history.push('/profile');
                      }
                    }, {
                      key: 'setting',
                      label: formatMessage({
                        id: 'Settings'
                      }),
                      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(SettingOutlined/* default */.Z, {}),
                      onClick: function onClick() {
                        _umi_production_exports.history.push('/setting');
                      }
                    }, {
                      key: 'logout',
                      label: formatMessage({
                        id: 'Log out'
                      }),
                      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(PoweroffOutlined/* default */.Z, {}),
                      onClick: disConnect
                    }]
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "user",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
                      src: user.avater
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "desc",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                        className: "name",
                        children: user.name || 'Unnamed'
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
                        className: "metaid",
                        style: {
                          whiteSpace: 'nowrap'
                        },
                        children: ["MetaID:", user.metaid.slice(0, 8)]
                      })]
                    })]
                  })
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  type: "primary",
                  shape: "round",
                  onClick: function onClick() {
                    setShowConnect(true);
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                    wrapper: true,
                    children: "Connect"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "actions",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
                    placement: "bottom",
                    dropdownRender: function dropdownRender() {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(menu/* default */.Z, {
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(menu/* default */.Z.Item, {
                            disabled: chain === 'btc',
                            onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
                              return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
                                while (1) switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return switchChain('btc');
                                  case 2:
                                    queryClient.invalidateQueries({
                                      queryKey: ['homebuzzesnew']
                                    });
                                  case 3:
                                  case "end":
                                    return _context2.stop();
                                }
                              }, _callee2);
                            })),
                            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                              style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: "space-between",
                                width: "100%",
                                gap: 16,
                                padding: 8
                              },
                              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                                  src: btc,
                                  alt: "",
                                  style: {
                                    width: 24,
                                    height: 24
                                  }
                                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                                  style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                  },
                                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                                    style: {
                                      lineHeight: 1
                                    },
                                    children: "BTC "
                                  })
                                })]
                              }), /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
                                value: feeRate,
                                onChange: function onChange(_value) {
                                  setFeeRate(Number(_value));
                                },
                                controls: false,
                                suffix: 'sats',
                                precision: 0
                              })]
                            })
                          }, '1'), /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* default */.Z.Item, {
                            disabled: chain === 'mvc',
                            onClick: function onClick() {
                              switchChain('mvc');
                            },
                            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                              style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: "space-between",
                                gap: 16,
                                padding: 8
                              },
                              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                                  src: mvc,
                                  alt: "",
                                  style: {
                                    width: 24,
                                    height: 24
                                  }
                                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                                  style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 4
                                  },
                                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                                    style: {
                                      lineHeight: 1
                                    },
                                    children: "MVC  "
                                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
                                    type: "secondary",
                                    style: {
                                      lineHeight: 1
                                    },
                                    children: ["  ", /*#__PURE__*/(0,jsx_runtime.jsxs)(tag/* default */.Z, {
                                      color: "orange",
                                      bordered: false,
                                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                                        children: "Bitcoin Sidechain"
                                      }), " "]
                                    })]
                                  })]
                                })]
                              }), /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
                                value: 1,
                                disabled: true,
                                variant: "borderless",
                                controls: false,
                                suffix: 'sats',
                                precision: 0
                              })]
                            })
                          }, '2')]
                        })
                      });
                    },
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.ZP, {
                      shape: "round",
                      type: "text",
                      variant: "filled",
                      color: "default",
                      style: {
                        height: 34
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                        src: chain === 'btc' ? btc : mvc,
                        alt: "",
                        style: {
                          width: 24,
                          height: 24
                        }
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z, {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
                          style: {
                            color: colorPrimary
                          },
                          children: [chain === 'btc' ? feeRate : 1, " "]
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                          type: "secondary",
                          children: " sats"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(CaretDownOutlined/* default */.Z, {
                        style: {
                          color: colorTextSecondary
                        }
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(SelectLang, {})]
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {
          style: {
            flexGrow: 1,
            width: !showConf.showSliderMenu ? showConf.contentSize : '100%',
            maxWidth: "100%",
            padding: '0 12px'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            gutter: [12, 12],
            style: {
              height: '100%',
              position: 'relative',
              padding: 0
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
              span: 24,
              md: showConf !== null && showConf !== void 0 && showConf.showRecommend ? 14 : 24,
              style: {
                height: '100%',
                width: '100%',
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: ['/home', '/home/new', '/', '/home/following', '/home/hot', '/dashboard/styles'].includes(location.pathname) && /*#__PURE__*/(0,jsx_runtime.jsx)(HomeTabs, {})
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                style: {
                  overflow: 'scroll',
                  position: 'relative',
                  flexGrow: 1
                },
                children: children ? children : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Activity */.c, {
                    mode: location.pathname === '/home/following' ? 'visible' : 'hidden',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {})
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Activity */.c, {
                    mode: location.pathname === '/home' ? 'visible' : 'hidden',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {})
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Activity */.c, {
                    mode: location.pathname === '/' ? 'visible' : 'hidden',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {})
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Activity */.c, {
                    mode: location.pathname === '/home/new' ? 'visible' : 'hidden',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {})
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Activity */.c, {
                    mode: location.pathname === '/home/hot' ? 'visible' : 'hidden',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {})
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Activity */.c, {
                    mode: location.pathname === '/profile' ? 'visible' : 'hidden',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {})
                  }), !['/home', '/', '/profile', '/home/new', '/home/following', '/home/hot'].includes(location.pathname) && /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {})]
                })
              })]
            }), md && (showConf === null || showConf === void 0 ? void 0 : showConf.showRecommend) && /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              md: 10,
              span: 24,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Recommend, {})
            })]
          })
        }), !md && showConf !== null && showConf !== void 0 && showConf.showSliderMenu ? /*#__PURE__*/(0,jsx_runtime.jsx)(Footer, {
          className: "footer",
          style: {
            background: colorBgContainer
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Mobilefooter, {})
        }) : '']
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(NewPost/* default */.Z, {
        show: showPost,
        onClose: function onClose() {
          setShowPost(false);
        }
      }), !md && /*#__PURE__*/(0,jsx_runtime.jsx)(float_button/* default */.Z, {
        style: {
          bottom: 100
        },
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {}),
        onClick: function onClick() {
          if (!isLogin) {
            setShowConnect(true);
            return;
          }
          var isPass = checkUserSetting();
          if (!isPass) return;
          setShowPost(true);
        }
      }), !md && /*#__PURE__*/(0,jsx_runtime.jsx)(float_button/* default */.Z, {
        style: {
          bottom: 50
        },
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(SearchOutlined/* default */.Z, {}),
        onClick: function onClick() {
          _umi_production_exports.history.push('/search');
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(UserSetting, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(ProfileSetting, {})]
    }), contextHolder]
  });
}

/***/ }),

/***/ 13013:
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ })

}]);