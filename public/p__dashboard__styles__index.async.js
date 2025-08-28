(self["webpackChunk"] = self["webpackChunk"] || []).push([[9715,4129],{

/***/ 54178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);



var InfiniteScrollV2 = function InfiniteScrollV2(_ref) {
  var id = _ref.id,
    onMore = _ref.onMore;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);

  // 使用 useCallback 缓存 onMore 函数，避免不必要的重新创建 observer
  var memoizedOnMore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(onMore, [onMore]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var observer = new IntersectionObserver(function (_ref2) {
      var _ref3 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 1),
        entry = _ref3[0];
      // 只有当元素进入视口且当前没有在加载时才触发
      if (entry.isIntersecting && !isLoadingRef.current) {
        isLoadingRef.current = true;
        memoizedOnMore();

        // 设置一个短暂的延迟来防止重复触发
        setTimeout(function () {
          isLoadingRef.current = false;
        }, 500);
      }
    }, {
      threshold: 0.1,
      // 增加阈值，确保元素真正进入视口
      rootMargin: '100px' // 提前100px开始加载
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return function () {
      observer.disconnect();
    };
  }, [memoizedOnMore]); // 只依赖 memoizedOnMore

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

"use strict";
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-card@2.9.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18._qltshzrtcgfsbamw6avwynyy7e/node_modules/@ant-design/pro-card/es/ProCard.js + 7 modules
var ProCard = __webpack_require__(75675);
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
var _umi_production_exports = __webpack_require__(17078);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18_vg5dliqrh2ee35zs6ic2hwqprm/node_modules/@ant-design/pro-form/es/layouts/ModalForm/index.js
var ModalForm = __webpack_require__(97581);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18_vg5dliqrh2ee35zs6ic2hwqprm/node_modules/@ant-design/pro-form/es/components/UploadButton/index.js
var UploadButton = __webpack_require__(82698);
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

"use strict";
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
var _umi_production_exports = __webpack_require__(17078);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 7 modules
var Buzz = __webpack_require__(86922);
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
  return new decimal_js__WEBPACK_IMPORTED_MODULE_3__/* .Decimal */ .t(bytes).mul(feeRate).add(10);
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
/* harmony export */   YY: function() { return /* binding */ isValidBitcoinAddress; },
/* harmony export */   _v: function() { return /* binding */ sleep; },
/* harmony export */   mG: function() { return /* binding */ getEffectiveBTCFeerate; },
/* harmony export */   uY: function() { return /* binding */ determineAddressInfo; },
/* harmony export */   wC: function() { return /* binding */ generateAESKey; },
/* harmony export */   wL: function() { return /* binding */ openWindowTarget; },
/* harmony export */   wv: function() { return /* binding */ formatMessage; },
/* harmony export */   yI: function() { return /* binding */ encryptPayloadAES; }
/* harmony export */ });
/* unused harmony exports sha256sum, handleSpecial, detectUrl, detectMentions */
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25778);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10642);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56283);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17078);






var ec = new elliptic__WEBPACK_IMPORTED_MODULE_3__.ec("secp256k1");
function generateAESKey() {
  // 32 字节 = 256 位
  var key = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().lib.WordArray.random(32);
  // 将密钥转换为十六进制字符串
  return key.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc).Hex);
}
function encryptPayloadAES(keyHex, payload) {
  var key = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Hex.parse(keyHex);
  var payloadWordArray = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Hex.parse(payload);
  var iv = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().lib.WordArray.random(16);
  var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt(payloadWordArray, key, {
    iv: iv,
    mode: (crypto_js__WEBPACK_IMPORTED_MODULE_1___default().mode).CFB,
    padding: (crypto_js__WEBPACK_IMPORTED_MODULE_1___default().pad).NoPadding
  });
  var ivAndCiphertext = iv.concat(encrypted.ciphertext);
  return ivAndCiphertext.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc).Hex);
}
function decryptPayloadAES(keyHex, encryptedHex) {
  // 将 Hex 格式的密钥解析为 CryptoJS WordArray
  var key = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Hex.parse(keyHex);

  // 将加密内容解析为 WordArray
  var encryptedWordArray = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Hex.parse(encryptedHex);

  // 提取 IV（前 16 字节）
  var iv = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().lib.WordArray.create(encryptedWordArray.words.slice(0, 4), 16);

  // 提取密文（去掉前 16 字节的 IV 部分）
  var ciphertext = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().lib.WordArray.create(encryptedWordArray.words.slice(4), encryptedWordArray.sigBytes - 16);

  // 使用 AES 解密
  var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.decrypt({
    ciphertext: ciphertext
  }, key, {
    iv: iv,
    mode: (crypto_js__WEBPACK_IMPORTED_MODULE_1___default().mode).CFB,
    padding: (crypto_js__WEBPACK_IMPORTED_MODULE_1___default().pad).NoPadding
  });

  // 去除多余的字节（可能是乱码）
  var rawData = decrypted.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc).Hex);

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
var detectMentions = function detectMentions(summary, mentions) {
  for (var _i = 0, _Object$entries = Object.entries(mentions); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    var mentionReg = new RegExp("@".concat(key, " "), "g");
    summary = summary.replace(mentionReg, "<a href=\"/user/".concat(key, "\"   >@").concat(key, " </a>"));
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
  var intl = (0,umi__WEBPACK_IMPORTED_MODULE_4__.getIntl)((0,umi__WEBPACK_IMPORTED_MODULE_4__.getLocale)());
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
  if (address.startsWith("bc1q")) {
    return "p2wpkh";
  }
  if (address.startsWith("tb1q")) {
    return "p2wpkh";
  }
  if (address.startsWith("bc1p")) {
    return "p2tr";
  }
  if (address.startsWith("tb1p")) {
    return "p2tr";
  }
  if (address.startsWith("1")) {
    return "p2pkh";
  }
  if (address.startsWith("3") || address.startsWith("2")) {
    return "p2sh";
  }
  if (address.startsWith("m") || address.startsWith("n")) {
    return "p2pkh";
  }
  return "unknown";
}
function isValidBitcoinAddress(address, network) {
  try {
    bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_2__/* .address.toOutputScript */ .Lk.toOutputScript(address, network === "mainnet" ? bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_2__/* .networks.bitcoin */ .QW.zO : bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_2__/* .networks.testnet */ .QW.$g);
    return true;
  } catch (_unused) {
    return false;
  }
}
function getEffectiveBTCFeerate(feeRate) {
  return feeRate === 1 ? 1.1 : feeRate;
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