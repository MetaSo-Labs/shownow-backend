"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9715],{

/***/ 54178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);



var InfiniteScrollV2 = function InfiniteScrollV2(_ref) {
  var id = _ref.id,
    onMore = _ref.onMore;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    isIntersecting = _useState2[0],
    setIsIntersecting = _useState2[1];
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var observer = new IntersectionObserver(function (_ref2) {
      var _ref3 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 1),
        entry = _ref3[0];
      setIsIntersecting(entry.isIntersecting);
      if (isIntersecting) onMore();
    }, {
      threshold: 0
    });
    if (ref.current) observer.observe(ref.current);
    return function () {
      observer.disconnect();
    };
  }, [isIntersecting, onMore]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ref: ref,
    id: id,
    style: {
      height: 20
    }
  });
};
/* harmony default export */ __webpack_exports__.Z = (InfiniteScrollV2);

/***/ }),

/***/ 51127:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ styles; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(67825);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-card@2.9.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__rea_f4e60f3c486a6622574dc02792972163/node_modules/@ant-design/pro-card/es/ProCard.js + 7 modules
var ProCard = __webpack_require__(27840);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/index.js + 8 modules
var notification = __webpack_require__(28169);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(60541);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/color-picker/index.js + 23 modules
var color_picker = __webpack_require__(28154);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/switch/index.js + 1 modules
var es_switch = __webpack_require__(64011);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/upload/index.js + 11 modules
var upload = __webpack_require__(39916);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/select/index.js
var es_select = __webpack_require__(23533);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 17 modules
var typography = __webpack_require__(38021);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/index.js + 21 modules
var es_form = __webpack_require__(49267);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tabs/index.js + 5 modules
var tabs = __webpack_require__(12700);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(10443);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(62319);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/avatar/index.js + 4 modules
var avatar = __webpack_require__(83734);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(86821);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var modal = __webpack_require__(90789);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/DeleteOutlined.js + 1 modules
var DeleteOutlined = __webpack_require__(86743);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UploadOutlined.js + 1 modules
var UploadOutlined = __webpack_require__(15739);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MinusCircleOutlined.js + 1 modules
var MinusCircleOutlined = __webpack_require__(33797);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(16621);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LeftCircleFilled.js + 1 modules
var LeftCircleFilled = __webpack_require__(3291);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/EditOutlined.js + 1 modules
var EditOutlined = __webpack_require__(23299);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(93603);
// EXTERNAL MODULE: ./src/request/dashboard.ts
var dashboard = __webpack_require__(57484);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(40493);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/lib/index.js
var lib = __webpack_require__(61346);
// EXTERNAL MODULE: ./src/layouts/showLayout.tsx + 26 modules
var showLayout = __webpack_require__(46595);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.74.3/node_modules/@tanstack/query-core/build/modern/queryClient.js + 3 modules
var queryClient = __webpack_require__(87928);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(86173);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./src/pages/home/index.tsx + 1 modules
var home = __webpack_require__(25283);
// EXTERNAL MODULE: ./src/pages/index.tsx + 3 modules
var pages = __webpack_require__(90628);
;// CONCATENATED MODULE: ./src/pages/dashboard/styles/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/models/dashboard.ts
var models_dashboard = __webpack_require__(92451);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__re_5e5b823f35bece319acd3a74a9338ac0/node_modules/@ant-design/pro-form/es/layouts/ModalForm/index.js
var ModalForm = __webpack_require__(84666);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__re_5e5b823f35bece319acd3a74a9338ac0/node_modules/@ant-design/pro-form/es/components/UploadButton/index.js
var UploadButton = __webpack_require__(38767);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/dashboard/styles/setIcon.tsx









/* harmony default export */ var setIcon = (function () {
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ModalForm/* ModalForm */.Y, {
    title: "Set Site Icon",
    width: 400,
    trigger: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
      type: "primary",
      children: "Set Site Icon"
    }),
    form: form,
    autoFocusFirstInput: true,
    modalProps: {
      destroyOnClose: true,
      onCancel: function onCancel() {
        return console.log('run');
      }
    },
    submitTimeout: 2000,
    onFinish: ( /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(values) {
        var formData, ret;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              formData = new FormData(); // todo: 上传文件
              formData.append('file', values.file[0].originFileObj);
              _context.prev = 2;
              _context.next = 5;
              return (0,dashboard/* uploadIcon */.P8)(formData);
            case 5:
              ret = _context.sent;
              message/* default */.ZP.success('Upload successfully');
              return _context.abrupt("return", true);
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              message/* default */.ZP.error(_context.t0.response && _context.t0.response.data && _context.t0.response.data.message || _context.t0.message);
              return _context.abrupt("return", false);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 10]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadButton/* default */.Z, {
      name: "file",
      label: "Icon",
      max: 1,
      title: "Upload ",
      fieldProps: {
        name: 'file',
        listType: 'picture-card'
      },
      rules: [{
        required: true,
        message: 'Please upload a file!'
      }],
      tooltip: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ["Please upload a .ico file ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "https://realfavicongenerator.net/",
          target: "_blank",
          children: "ICO File Generator "
        }), " "]
      })
    })
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(24573);
;// CONCATENATED MODULE: ./src/pages/dashboard/styles/UploadImage.tsx









var UploadImage = function UploadImage(props) {
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = slicedToArray_default()(_useState3, 2),
    precent = _useState4[0],
    setPrecent = _useState4[1];
  var _useState5 = (0,react.useState)(),
    _useState6 = slicedToArray_default()(_useState5, 2),
    imageUrl = _useState6[0],
    setImageUrl = _useState6[1];
  var handleUpload = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(_ref) {
      var file, onSuccess, onError, isJpgOrPng, formData, ret, _err$message;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            file = _ref.file, onSuccess = _ref.onSuccess, onError = _ref.onError;
            setLoading(true);
            setPrecent(0);
            setImageUrl(undefined);
            _context.prev = 4;
            isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (isJpgOrPng) {
              _context.next = 8;
              break;
            }
            throw new Error('You can only upload JPG/PNG file!');
          case 8:
            formData = new FormData(); // todo: 上传文件
            formData.append('file', file);
            _context.next = 12;
            return (0,dashboard/* uploadImage */.Ix)(formData);
          case 12:
            ret = _context.sent;
            console.log('ret', ret);
            message/* default */.ZP.success("Upload successful");
            onSuccess(null, file);
            props.onChange && props.onChange(ret.url);
            _context.next = 27;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](4);
            console.error("Upload error:", _context.t0);
            message/* default */.ZP.error((_err$message = _context.t0.message) !== null && _err$message !== void 0 ? _err$message : "Upload failed");
            onError(_context.t0);
            setLoading(false);
            setPrecent(0);
            setImageUrl(undefined);
          case 27:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 19]]);
    }));
    return function handleUpload(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var uploadButton = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer'
    },
    children: [loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(PlusOutlined/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
      style: {
        marginTop: 8
      },
      children: "Upload "
    })]
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, {
    customRequest: handleUpload,
    name: "avatar",
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: false,
    style: {
      overflow: 'hidden'
    },
    children: props.value ? /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
      shape: "square",
      style: {
        width: 96,
        height: 96
      },
      src: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: props.value
      })
    }) : uploadButton
  });
};
/* harmony default export */ var styles_UploadImage = (UploadImage);
;// CONCATENATED MODULE: ./src/pages/dashboard/styles/index.tsx






var _excluded = ["key", "name"];



















var styles_queryClient = new queryClient/* QueryClient */.S();
var DEFAULT_COLOR = [{
  color: '#f824da',
  percent: 0
}, {
  color: '#ff5815',
  percent: 100
}];
var getBase64 = function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};
var Content = function Content(_ref) {
  var _styles$tabs2;
  var showConf = _ref.showConf,
    onClose = _ref.onClose;
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    loading = _useModel.loading,
    fetchConfig = _useModel.fetchConfig,
    setShowConf = _useModel.setShowConf;
  var _useState = (0,react.useState)('Home Page'),
    _useState2 = slicedToArray_default()(_useState, 2),
    overView = _useState2[0],
    setOverView = _useState2[1];
  var _useState3 = (0,react.useState)({}),
    _useState4 = slicedToArray_default()(_useState3, 2),
    themeTokens = _useState4[0],
    setThemeTokens = _useState4[1];
  var _useState5 = (0,react.useState)(),
    _useState6 = slicedToArray_default()(_useState5, 2),
    styles = _useState6[0],
    setStyles = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = slicedToArray_default()(_useState7, 2),
    submiting = _useState8[0],
    setSubmiting = _useState8[1];
  var _notification$useNoti = notification/* default */.ZP.useNotification(),
    _notification$useNoti2 = slicedToArray_default()(_notification$useNoti, 2),
    api = _notification$useNoti2[0],
    contextHolder = _notification$useNoti2[1];
  var _useState9 = (0,react.useState)(false),
    _useState10 = slicedToArray_default()(_useState9, 2),
    responsive = _useState10[0],
    setResponsive = _useState10[1];
  (0,react.useEffect)(function () {
    if (showConf) {
      setStyles(function (prev) {
        if (!prev) {
          return showConf;
        } else {
          return prev;
        }
      });
    }
  }, [showConf]);
  (0,react.useEffect)(function () {
    if (styles) {
      console.log(styles, 'styles');
      setShowConf(styles);
    }
  }, [styles]);
  var _useState11 = (0,react.useState)([]),
    _useState12 = slicedToArray_default()(_useState11, 2),
    fileList = _useState12[0],
    setFileList = _useState12[1];
  var _useState13 = (0,react.useState)([]),
    _useState14 = slicedToArray_default()(_useState13, 2),
    fileList2 = _useState14[0],
    setFileList2 = _useState14[1];
  var _useState15 = (0,react.useState)(),
    _useState16 = slicedToArray_default()(_useState15, 2),
    imageUrl = _useState16[0],
    setImageUrl = _useState16[1];
  var props = {
    onRemove: function onRemove(file) {
      var index = fileList.indexOf(file);
      var newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: function beforeUpload(file) {
      setFileList([].concat(toConsumableArray_default()(fileList), [file]));
      console.log(file);
      getBase64(file, function (url) {
        // setLoading(false);
        console.log(url);
        setImageUrl(url);
        if (styles) {
          setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
            logo: url
          }));
        }
      });
      return false;
    },
    fileList: fileList
  };
  var bgprops = {
    onRemove: function onRemove(file) {
      var index = fileList2.indexOf(file);
      var newFileList = fileList2.slice();
      newFileList.splice(index, 1);
      setFileList2(newFileList);
    },
    beforeUpload: function beforeUpload(file) {
      setFileList2([].concat(toConsumableArray_default()(fileList2), [file]));
      console.log(file);
      getBase64(file, function (url) {
        if (styles) {
          setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
            homeBackgroundImage: url
          }));
        }
      });
      return false;
    },
    fileList: fileList2
  };
  var handleChange = function handleChange(info) {
    if (info.file.status === 'uploading') {
      //   setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, function (url) {
        // setLoading(false);
        setImageUrl(url);
        if (styles) {
          setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
            logo: url
          }));
        }
      });
    }
  };
  var handleBackImageChange = function handleBackImageChange(info) {
    if (info.file.status === 'uploading') {
      //   setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, function (url) {
        // setLoading(false);
        setImageUrl(url);
        if (styles) {
          setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
            homeBackgroundImage: url
          }));
        }
      });
    }
  };
  var openNotification = function openNotification() {
    var key = "open".concat(Date.now());
    var btn = /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "link",
        size: "small",
        onClick: function onClick() {
          api.destroy(key);
          _umi_production_exports.history.push('/');
        },
        children: "View"
      })
    });
    api.open({
      message: 'Save Success',
      btn: btn,
      key: key,
      onClose: function onClose() {
        api.destroy(key);
      }
    });
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _styles$tabs;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (styles) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setSubmiting(true);
            _context.prev = 3;
            if (!(((_styles$tabs = styles.tabs) === null || _styles$tabs === void 0 ? void 0 : _styles$tabs.length) === 0)) {
              _context.next = 6;
              break;
            }
            throw new Error('Please select at least one tab');
          case 6:
            if (!(styles.tabs.length === 1 && styles.tabs[0] === 'following')) {
              _context.next = 8;
              break;
            }
            throw new Error('Following tab is required');
          case 8:
            _context.next = 10;
            return (0,dashboard/* saveConf */.n9)(objectSpread2_default()({}, styles));
          case 10:
            message/* default */.ZP.success('Save Success');
            _context.next = 17;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
            message/* default */.ZP.error(_context.t0.message);
          case 17:
            setSubmiting(false);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 13]]);
    }));
    return function handleSave() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handelSaveAndApply = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (styles) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            setSubmiting(true);
            _context2.prev = 3;
            _context2.next = 6;
            return (0,dashboard/* saveAndApply */.IV)(objectSpread2_default()({}, styles));
          case 6:
            _context2.next = 8;
            return fetchConfig();
          case 8:
            openNotification();
            _context2.next = 15;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);
            message/* default */.ZP.error(_context2.t0.message);
          case 15:
            setSubmiting(false);
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 11]]);
    }));
    return function handelSaveAndApply() {
      return _ref3.apply(this, arguments);
    };
  }();
  var items = [{
    key: '1',
    label: 'Color',
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Theme"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
          options: ['light', 'dark'],
          value: styles && styles.theme,
          onChange: function onChange(value) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                theme: value
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Brand Color"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(color_picker/* default */.Z, {
          size: "large",
          showText: true,
          value: styles && styles.brandColor,
          onChange: function onChange(color) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                brandColor: color.toRgbString()
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Layout Color"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(color_picker/* default */.Z, {
          size: "large",
          showText: true,
          value: styles && styles.colorBgLayout,
          onChange: function onChange(color) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                colorBgLayout: color.toRgbString()
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Header Color"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(color_picker/* default */.Z, {
          size: "large",
          showText: true,
          value: styles && styles.colorHeaderBg,
          onChange: function onChange(color) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                colorHeaderBg: color.toRgbString()
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Gradient Color"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(color_picker/* default */.Z, {
          defaultValue: DEFAULT_COLOR,
          allowClear: true,
          size: "large",
          mode: ['single', 'gradient'],
          onChangeComplete: function onChangeComplete(color) {
            console.log(color.toCssString());
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                gradientColor: color.toCssString()
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Border Color"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(color_picker/* default */.Z, {
          size: "large",
          showText: true,
          value: styles && styles.colorBorderSecondary,
          onChange: function onChange(color) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                colorBorderSecondary: color.toRgbString()
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Button Text Color"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(color_picker/* default */.Z, {
          size: "large",
          showText: true,
          value: styles && styles.colorButton,
          onChange: function onChange(color) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                colorButton: color.toRgbString()
              }));
            }
          }
        })]
      })]
    })
  }, {
    key: '2',
    label: 'Layout',
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Slider Menu"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z, {
          value: styles === null || styles === void 0 ? void 0 : styles.showSliderMenu,
          onChange: function onChange(value) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                showSliderMenu: value
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Recommend"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z, {
          value: styles === null || styles === void 0 ? void 0 : styles.showRecommend,
          onChange: function onChange(value) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                showRecommend: value
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Content Size"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib/* InputNumber */.Rn, {
          value: styles === null || styles === void 0 ? void 0 : styles.contentSize,
          onChange: function onChange(value) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                contentSize: Number(value)
              }));
            }
          }
        })]
      })]
    })
  }, {
    key: '3',
    label: 'Brand',
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      direction: "vertical",
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Logo"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
          listType: "picture-card",
          className: "avatar-uploader",
          maxCount: 1,
          showUploadList: false,
          onChange: handleChange,
          children: styles !== null && styles !== void 0 && styles.logo ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              position: 'relative'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              style: {
                position: 'absolute',
                right: '50%',
                top: '50%',
                transform: 'translate(50%,-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff'
              },
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {}),
              onClick: function onClick(e) {
                e.stopPropagation();
                setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                  logo: ''
                }));
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              src: styles === null || styles === void 0 ? void 0 : styles.logo,
              alt: "avatar",
              style: {
                width: '100%'
              }
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {})
          })
        }))]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Home Background"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, bgprops), {}, {
          listType: "picture-card",
          className: "avatar-uploader",
          maxCount: 1,
          showUploadList: false,
          onChange: handleBackImageChange,
          children: styles !== null && styles !== void 0 && styles.homeBackgroundImage ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              position: 'relative'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              style: {
                position: 'absolute',
                right: '50%',
                top: '50%',
                transform: 'translate(50%,-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff'
              },
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {}),
              onClick: function onClick(e) {
                e.stopPropagation();
                setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                  homeBackgroundImage: ''
                }));
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              src: styles === null || styles === void 0 ? void 0 : styles.homeBackgroundImage,
              alt: "avatar",
              style: {
                width: '100%'
              }
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {})
          })
        }))]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          style: {
            whiteSpace: 'nowrap'
          },
          children: "Twitter"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          value: styles === null || styles === void 0 ? void 0 : styles.twitterUrl,
          onChange: function onChange(e) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                twitterUrl: e.target.value
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          style: {
            whiteSpace: 'nowrap'
          },
          children: " Main Title"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          value: styles === null || styles === void 0 ? void 0 : styles.brandIntroMainTitle,
          onChange: function onChange(e) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                brandIntroMainTitle: e.target.value
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          style: {
            whiteSpace: 'nowrap'
          },
          children: " Sub Title"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          value: styles === null || styles === void 0 ? void 0 : styles.brandIntroSubTitle,
          onChange: function onChange(e) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                brandIntroSubTitle: e.target.value
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Need Login"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z, {
          value: styles === null || styles === void 0 ? void 0 : styles.checkLogin,
          onChange: function onChange(value) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                checkLogin: value
              }));
            }
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Tabs"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
          mode: "multiple",
          style: {
            width: '100%'
          },
          placeholder: "at least one tab",
          value: (_styles$tabs2 = styles === null || styles === void 0 ? void 0 : styles.tabs) !== null && _styles$tabs2 !== void 0 ? _styles$tabs2 : [],
          onChange: function onChange(value) {
            if (styles) {
              setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                tabs: value
              }));
            }
          },
          options: [{
            label: 'For You',
            value: 'recommend'
            // disabled: true
          }, {
            label: 'New',
            value: 'new'
          }, {
            label: 'Hot',
            value: 'hot'
          }, {
            label: 'Following',
            value: 'following'
          }
          // {
          //     label: 'For You',
          //     value: 'recommend',
          //     // disabled: true
          // },
          ]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
        level: 5,
        style: {
          marginTop: 24
        },
        children: "Banners"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z, {
        name: "banners",
        style: {
          width: '100%'
        },
        autoComplete: "off",
        initialValues: {
          banners: styles === null || styles === void 0 ? void 0 : styles.banners
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.List, {
          name: "banners",
          children: function children(fields, _ref4) {
            var add = _ref4.add,
              remove = _ref4.remove;
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [fields.map(function (_ref5) {
                var _styles$banners;
                var key = _ref5.key,
                  name = _ref5.name,
                  restField = objectWithoutProperties_default()(_ref5, _excluded);
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  style: {
                    display: 'flex',
                    marginBottom: 8,
                    alignItems: 'center',
                    gap: 8
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, objectSpread2_default()(objectSpread2_default()({}, restField), {}, {
                    name: [name, 'img'],
                    rules: [{
                      required: true,
                      message: 'Missing first name'
                    }],
                    noStyle: true,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(styles_UploadImage, {
                      value: styles === null || styles === void 0 || (_styles$banners = styles.banners) === null || _styles$banners === void 0 || (_styles$banners = _styles$banners[name]) === null || _styles$banners === void 0 ? void 0 : _styles$banners.img,
                      onChange: function onChange(value) {
                        if (styles) {
                          var _styles$banners2;
                          var newBanners = toConsumableArray_default()((_styles$banners2 = styles.banners) !== null && _styles$banners2 !== void 0 ? _styles$banners2 : []);
                          newBanners[name] = objectSpread2_default()(objectSpread2_default()({}, newBanners[name]), {}, {
                            img: value
                          });
                          setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                            banners: newBanners
                          }));
                        }
                      }
                    })
                  })), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, objectSpread2_default()(objectSpread2_default()({}, restField), {}, {
                    name: [name, 'link'],
                    rules: [{
                      required: true,
                      message: 'Missing last name'
                    }],
                    noStyle: true,
                    style: {
                      flexGrow: 1
                    },
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
                      placeholder: "Last Name",
                      onChange: function onChange(value) {
                        if (styles) {
                          var _styles$banners3;
                          var newBanners = toConsumableArray_default()((_styles$banners3 = styles.banners) !== null && _styles$banners3 !== void 0 ? _styles$banners3 : []);
                          newBanners[name] = objectSpread2_default()(objectSpread2_default()({}, newBanners[name]), {}, {
                            link: value.target.value
                          });
                          setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                            banners: newBanners
                          }));
                        }
                      }
                    })
                  })), /*#__PURE__*/(0,jsx_runtime.jsx)(MinusCircleOutlined/* default */.Z, {
                    onClick: function onClick() {
                      if (styles) {
                        var _styles$banners4;
                        var newBanners = toConsumableArray_default()((_styles$banners4 = styles.banners) !== null && _styles$banners4 !== void 0 ? _styles$banners4 : []);
                        newBanners.splice(name, 1);
                        setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
                          banners: newBanners
                        }));
                      }
                      remove(name);
                    }
                  })]
                }, key);
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  type: "dashed",
                  onClick: function onClick() {
                    return add();
                  },
                  block: true,
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(PlusOutlined/* default */.Z, {}),
                  children: "Add Banner"
                })
              })]
            });
          }
        })
      })]
    })
  }];
  (0,react.useEffect)(function () {
    if (styles) {
      var tokens = {
        colorPrimary: styles.brandColor,
        colorLink: styles.brandColor
      };
      if (styles.colorBgLayout) {
        tokens.colorBgLayout = styles.colorBgLayout;
      }
      if (styles.colorBorderSecondary) {
        tokens.colorBorderSecondary = styles.colorBorderSecondary;
      }
      var components = {
        "Avatar": {
          "colorTextPlaceholder": styles.brandColor
        },
        "Button": {
          "defaultBorderColor": "rgba(217,217,217,0)",
          "defaultShadow": "0 2px 0 rgba(0, 0, 0,0)"
        }
      };
      if (styles.colorButton) {
        components.Button.primaryColor = styles.colorButton;
      }
      console.log(components, 'components');
      setThemeTokens({
        token: tokens,
        components: components
      });
    }
  }, [styles]);
  var parentRef = (0,react.useRef)(null);
  var childRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    if (styles && parentRef.current && childRef.current) {
      var parent = parentRef.current.getBoundingClientRect();
      var child = childRef.current.getBoundingClientRect();
      var scaleX = (parent.width - 48) / document.body.clientWidth;
      childRef.current.style.zoom = scaleX.toString();
      childRef.current.style.transformOrigin = 'top left'; // 可调整缩放基准
    }
  }, [styles]);
  var handleChildScroll = function handleChildScroll(e) {
    e.stopPropagation(); // 阻止事件冒泡
  };
  if (!styles) return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: "no data"
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [contextHolder, /*#__PURE__*/(0,jsx_runtime.jsx)(es["default"], {
      onResize: function onResize(offset) {
        setResponsive(offset.width < 596);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ProCard/* default */.Z, {
        split: responsive ? 'horizontal' : 'vertical',
        title: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          variant: "filled",
          type: "text",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LeftCircleFilled/* default */.Z, {}),
          onClick: onClose,
          children: "Go Back"
        }),
        extra: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            onClick: handleSave,
            loading: submiting,
            children: "Save"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            onClick: handelSaveAndApply,
            loading: submiting,
            children: "Save & Apply"
          })]
        }),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.Z, {
          colSpan: responsive ? 24 : 8,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z, {
            defaultActiveKey: "1",
            items: items
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ProCard/* default */.Z, {
          colSpan: responsive ? 24 : 16,
          title: "OverView",
          ref: parentRef,
          headerBordered: true,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
              options: ['Home Page', 'Login Page'],
              value: overView,
              onChange: function onChange(value) {
                setOverView(value);
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            ref: childRef,
            className: "previewerDemo",
            style: {
              height: '100vh',
              width: '100vw',
              position: 'relative',
              pointerEvents: 'auto'
            },
            onClick: function onClick() {},
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(QueryClientProvider/* QueryClientProvider */.aH, {
              client: styles_queryClient,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
                theme: objectSpread2_default()({
                  algorithm: (styles === null || styles === void 0 ? void 0 : styles.theme) !== 'dark' ? theme/* default */.Z.defaultAlgorithm : theme/* default */.Z.darkAlgorithm
                }, themeTokens),
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  style: {
                    pointerEvents: 'none'
                  },
                  onTouchMove: handleChildScroll,
                  children: overView === 'Home Page' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(showLayout/* default */.Z, {
                    children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(home["default"], {})]
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(pages["default"], {})
                })
              })
            })
          })]
        })]
      })
    }, "resize-observer")]
  });
};
var ThemeCard = function ThemeCard(_ref6) {
  var item = _ref6.item,
    handleEdit = _ref6.handleEdit;
  var styles = item;
  var themeTokens = {};
  if (styles) {
    var tokens = {
      colorPrimary: styles.brandColor,
      colorLink: styles.brandColor
    };
    if (styles.colorBgLayout) {
      tokens.colorBgLayout = styles.colorBgLayout;
    }
    if (styles.colorBorderSecondary) {
      tokens.colorBorderSecondary = styles.colorBorderSecondary;
    }
    var components = {
      "Avatar": {
        "colorTextPlaceholder": styles.brandColor
      },
      "Button": {
        "defaultBorderColor": "rgba(217,217,217,0)",
        "defaultShadow": "0 2px 0 rgba(0, 0, 0,0)"
      }
    };
    if (styles.colorButton) {
      components.Button.primaryColor = styles.colorButton;
    }
    themeTokens = {
      token: tokens,
      components: components
    };
  }
  var parentRef = (0,react.useRef)(null);
  var childRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    if (styles && parentRef.current && childRef.current) {
      var parent = parentRef.current.getBoundingClientRect();
      var child = childRef.current.getBoundingClientRect();
      var scaleX = parent.width / document.body.clientWidth;
      childRef.current.style.zoom = scaleX.toString();
    }
  }, [styles]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 8,
    xl: 6,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
      actions: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {
        onClick: handleEdit
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {
        onClick: function onClick() {
          message/* default */.ZP.info('Coming soon');
        }
      })],
      ref: parentRef,
      style: {
        borderColor: item.apply ? '#1890ff' : '#f0f0f0',
        overflow: 'hidden'
      },
      cover: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        ref: childRef,
        className: "previewerDemo",
        style: {
          height: '100vh',
          width: '100vw',
          position: 'relative',
          pointerEvents: 'auto'
        },
        onClick: function onClick() {},
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
          theme: objectSpread2_default()({
            algorithm: (item === null || item === void 0 ? void 0 : item.theme) !== 'dark' ? theme/* default */.Z.defaultAlgorithm : theme/* default */.Z.darkAlgorithm
          }, themeTokens),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              pointerEvents: 'none'
            },
            onTouchMove: function onTouchMove() {},
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(showLayout/* default */.Z, {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
              _showConf: item
            })
          })
        })
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z.Meta, {
        avatar: /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
          src: "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
        }),
        title: item.name || item.alias,
        description: item.updateTime
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          position: 'absolute',
          top: 0,
          right: 0,
          padding: 4,
          background: item.apply ? '#1890ff' : '#f0f0f0',
          color: '#fff'
        },
        children: item.apply ? 'Applied' : ''
      })]
    })
  });
};
var Page = function Page() {
  var _useState17 = (0,react.useState)(false),
    _useState18 = slicedToArray_default()(_useState17, 2),
    showCreate = _useState18[0],
    setShowCreate = _useState18[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['dashboardstyles'],
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
          return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0,dashboard/* fetchShowConfList */.sp)();
              case 2:
                return _context3.abrupt("return", _context3.sent);
              case 3:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        function queryFn() {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    styleList = _useQuery.data,
    refetch = _useQuery.refetch;
  var _useState19 = (0,react.useState)(),
    _useState20 = slicedToArray_default()(_useState19, 2),
    current = _useState20[0],
    setCurrent = _useState20[1];
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  if (current) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {
      showConf: current,
      onClose: function onClose() {
        setCurrent(undefined);
        refetch();
      }
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    gutter: [16, 16],
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: 24,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(PlusOutlined/* default */.Z, {}),
          onClick: function onClick() {
            setShowCreate(true);
          },
          children: "Create Styles"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(setIcon, {})]
      })
    }), (styleList !== null && styleList !== void 0 ? styleList : []).map(function (item) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(ThemeCard, {
        item: item,
        handleEdit: function handleEdit() {
          setCurrent(item);
        }
      }, item.id);
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
      open: showCreate,
      title: "Create Design Theme",
      styles: {
        body: {
          paddingTop: 20,
          paddingBottom: 20
        }
      },
      okText: "Next",
      onOk: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
        var _yield$form$getFields, name;
        return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return form.getFieldsValue();
            case 2:
              _yield$form$getFields = _context4.sent;
              name = _yield$form$getFields.name;
              console.log(name, 'name');
              if (name) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return", message/* default */.ZP.error('Name is required'));
            case 7:
              setShowCreate(false);
              setCurrent(objectSpread2_default()(objectSpread2_default()({}, models_dashboard/* showNowConf */.xJ), {}, {
                name: name
              }));
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      })),
      onCancel: function onCancel() {
        setShowCreate(false);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z, {
        layout: "vertical",
        autoComplete: "off",
        variant: "filled",
        form: form,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
          name: "name",
          label: "Design Theme Name",
          rules: [{
            required: true
          }],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
            placeholder: ""
          })
        })
      })
    })]
  });
};
/* harmony default export */ var styles = (Page);

/***/ }),

/***/ 25283:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ home; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/pages/home/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(61408);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 3 modules
var list = __webpack_require__(17675);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(83250);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js + 1 modules
var useInfiniteQuery = __webpack_require__(61374);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(93603);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 3 modules
var Buzz = __webpack_require__(3517);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./src/Components/InfiniteScrollV2/index.tsx
var InfiniteScrollV2 = __webpack_require__(54178);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/home/index.tsx













var useBreakpoint = grid/* default */.ZP.useBreakpoint;
var Home = function Home() {
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user,
    mockBuzz = _useModel.mockBuzz;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    currentBuzzId = _useState4[0],
    setCurrentBuzzId = _useState4[1];
  var containerRef = (0,react.useRef)();
  var contentRef = (0,react.useRef)();
  var _useLocation = (0,_umi_production_exports.useLocation)(),
    state = _useLocation.state;
  var targetBuzzId = (0,react.useMemo)(function () {
    return state === null || state === void 0 ? void 0 : state.buzzId;
  }, [state]);
  var _useInfiniteQuery = (0,useInfiniteQuery/* useInfiniteQuery */.N)({
      queryKey: ['homebuzzesnew'],
      queryFn: function queryFn(_ref) {
        var pageParam = _ref.pageParam;
        return (0,api/* fetchAllBuzzs */.B0)({
          size: 10,
          lastId: pageParam
        });
      },
      initialPageParam: '',
      getNextPageParam: function getNextPageParam(lastPage, allPages) {
        var _lastPage$data;
        // const { data: { lastId } } = lastPage
        var lastId = lastPage === null || lastPage === void 0 || (_lastPage$data = lastPage.data) === null || _lastPage$data === void 0 ? void 0 : _lastPage$data.lastId;
        if (!lastId) return;
        return lastId;
      }
    }),
    data = _useInfiniteQuery.data,
    isLoading = _useInfiniteQuery.isLoading,
    fetchNextPage = _useInfiniteQuery.fetchNextPage,
    isFetchingNextPage = _useInfiniteQuery.isFetchingNextPage,
    hasNextPage = _useInfiniteQuery.hasNextPage,
    refetch = _useInfiniteQuery.refetch,
    isFetching = _useInfiniteQuery.isFetching;
  var tweets = (0,react.useMemo)(function () {
    var _list = data ? data === null || data === void 0 ? void 0 : data.pages.reduce(function (acc, item) {
      var _item$data$list, _item$data;
      return [].concat(toConsumableArray_default()(acc || []), toConsumableArray_default()(((_item$data$list = (_item$data = item.data) === null || _item$data === void 0 ? void 0 : _item$data.list) !== null && _item$data$list !== void 0 ? _item$data$list : []).filter(function (item) {
        return !item.blocked;
      }) || []));
    }, []) : [];
    if (mockBuzz) {
      var isContain = _list === null || _list === void 0 ? void 0 : _list.find(function (item) {
        return item.id === (mockBuzz === null || mockBuzz === void 0 ? void 0 : mockBuzz.id);
      });
      return isContain ? _list : [mockBuzz].concat(toConsumableArray_default()(_list));
    }
    return _list;
  }, [data, mockBuzz]);

  // 数据更新后检查高度
  (0,react.useEffect)(function () {
    if (!containerRef.current || !contentRef.current || isLoading || !hasNextPage) return;
    var containerHeight = containerRef.current.clientHeight;
    var contentHeight = contentRef.current.scrollHeight;
    // 如果内容高度不足且还有数据，继续加载
    if (contentHeight <= containerHeight) {
      fetchNextPage();
    }
  }, [data, hasNextPage, isLoading]);
  (0,react.useEffect)(function () {
    if (containerRef.current && targetBuzzId) {
      containerRef.current.scrollTop = 0;
      refetch();
    }
  }, [targetBuzzId]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    // id="scrollableDiv1"
    ref: containerRef,
    style: {
      height: '100%',
      overflow: 'auto',
      paddingBottom: 60
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
      loading: isLoading,
      dataSource: tweets,
      ref: contentRef,
      renderItem: function renderItem(item) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z.Item, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
            buzzItem: item,
            refetch: refetch
          })
        }, item.id);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(InfiniteScrollV2/* default */.Z, {
      id: "mason_grid",
      onMore: function onMore() {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    }), (isLoading || isFetchingNextPage) && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
        avatar: true,
        paragraph: {
          rows: 2
        },
        active: true
      })
    }), !isFetching && !hasNextPage && /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
      plain: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "It is all, nothing more \uD83E\uDD10"
      })
    })]
  });
};
/* harmony default export */ var home = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Home, {});
});

/***/ })

}]);