"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9715,9512],{

/***/ 12608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ styles; }
});

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
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-card@2.9.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18._4z7bzqawqzoenzh4tblcdyicca/node_modules/@ant-design/pro-card/es/ProCard.js + 9 modules
var ProCard = __webpack_require__(59135);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/index.js + 8 modules
var notification = __webpack_require__(16514);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(54152);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(23674);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(16598);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(98325);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(77485);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/color-picker/index.js + 23 modules
var color_picker = __webpack_require__(52229);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/switch/index.js + 1 modules
var es_switch = __webpack_require__(11087);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/upload/index.js + 11 modules
var upload = __webpack_require__(40681);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(1092);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tabs/index.js + 5 modules
var tabs = __webpack_require__(82257);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 7 modules
var config_provider = __webpack_require__(38587);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(4390);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UploadOutlined.js + 1 modules
var UploadOutlined = __webpack_require__(28962);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(12798);
// EXTERNAL MODULE: ./src/request/dashboard.ts
var dashboard = __webpack_require__(21664);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(34010);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/lib/index.js
var lib = __webpack_require__(95421);
// EXTERNAL MODULE: ./src/layouts/showLayout.tsx + 17 modules
var showLayout = __webpack_require__(14598);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.59.16/node_modules/@tanstack/query-core/build/modern/queryClient.js + 3 modules
var queryClient = __webpack_require__(32120);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.59.16_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(73118);
// EXTERNAL MODULE: ./src/pages/home/index.tsx + 1 modules
var home = __webpack_require__(2466);
// EXTERNAL MODULE: ./src/pages/index.tsx + 3 modules
var pages = __webpack_require__(6337);
;// CONCATENATED MODULE: ./src/pages/dashboard/styles/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/models/dashboard.ts
var models_dashboard = __webpack_require__(34358);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/dashboard/styles/index.tsx





















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
/* harmony default export */ var styles = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel.showConf,
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
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
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
            _context.next = 6;
            return (0,dashboard/* saveConf */.n9)(objectSpread2_default()(objectSpread2_default()({}, styles), {}, {
              alias: 'default'
            }));
          case 6:
            _context.next = 8;
            return fetchConfig();
          case 8:
            openNotification();
            _context.next = 15;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
            message/* default */.ZP.error(_context.t0.message);
          case 15:
            setSubmiting(false);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 11]]);
    }));
    return function handleSave() {
      return _ref.apply(this, arguments);
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
          listType: "picture",
          maxCount: 1,
          onChange: handleChange,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {}),
            children: "Select Image"
          })
        }))]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Home Background Image"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, bgprops), {}, {
          listType: "picture",
          maxCount: 1,
          onChange: handleBackImageChange,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {}),
            children: "Select Image"
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
      childRef.current.style.transform = "scale(".concat(scaleX, ")");
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
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.Z, {
          title: "Recommended Theme",
          colSpan: responsive ? 24 : 8,
          extra: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              type: "link",
              onClick: function onClick() {
                return setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), models_dashboard/* showNowConf */.xJ));
              },
              children: "ShowNow"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              type: "link",
              onClick: function onClick() {
                return setStyles(objectSpread2_default()(objectSpread2_default()({}, styles), models_dashboard/* bitBuzzConf */.GQ));
              },
              children: "BitBuzz"
            })]
          }),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z, {
            defaultActiveKey: "1",
            items: items
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ProCard/* default */.Z, {
          colSpan: responsive ? 24 : 16,
          title: "OverView",
          ref: parentRef,
          headerBordered: true,
          extra: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            onClick: handleSave,
            loading: submiting,
            children: "Save"
          }),
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
});

/***/ }),

/***/ 2466:
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
var api = __webpack_require__(72948);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/pages/home/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(70567);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(14225);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(77485);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 9 modules
var list = __webpack_require__(34729);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.59.16_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js + 1 modules
var useInfiniteQuery = __webpack_require__(14681);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(12798);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 8 modules
var Buzz = __webpack_require__(82107);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-infinite-scroll-component@6.1.0_react@18.3.1/node_modules/react-infinite-scroll-component/dist/index.es.js
var index_es = __webpack_require__(92677);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(78559);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/home/index.tsx













var useBreakpoint = grid/* default */.ZP.useBreakpoint;
/* harmony default export */ var home = (function () {
  var _useBreakpoint = useBreakpoint(),
    md = _useBreakpoint.md;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)(1),
    _useState4 = slicedToArray_default()(_useState3, 2),
    page = _useState4[0],
    setPage = _useState4[1];
  var _useState5 = (0,react.useState)(10),
    _useState6 = slicedToArray_default()(_useState5, 2),
    pageSize = _useState6[0],
    setPageSize = _useState6[1];
  var _useState7 = (0,react.useState)(''),
    _useState8 = slicedToArray_default()(_useState7, 2),
    search = _useState8[0],
    setSearch = _useState8[1];
  var _useState9 = (0,react.useState)(null),
    _useState10 = slicedToArray_default()(_useState9, 2),
    total = _useState10[0],
    setTotal = _useState10[1];
  var _useInfiniteQuery = (0,useInfiniteQuery/* useInfiniteQuery */.N)({
      queryKey: ['homebuzzesnew', user.address],
      enabled: Boolean(btcConnector),
      queryFn: function queryFn(_ref) {
        var pageParam = _ref.pageParam;
        return (0,api/* fetchAllBuzzs */.B0)({
          size: 5,
          lastId: pageParam
        });
      },
      initialPageParam: '',
      getNextPageParam: function getNextPageParam(lastPage, allPages) {
        var lastId = lastPage.data.lastId;
        if (!lastId) return;
        return lastId;
      }
    }),
    data = _useInfiniteQuery.data,
    isLoading = _useInfiniteQuery.isLoading,
    fetchNextPage = _useInfiniteQuery.fetchNextPage,
    isFetchingNextPage = _useInfiniteQuery.isFetchingNextPage,
    hasNextPage = _useInfiniteQuery.hasNextPage,
    refetch = _useInfiniteQuery.refetch;
  var tweets = (0,react.useMemo)(function () {
    return data ? data === null || data === void 0 ? void 0 : data.pages.reduce(function (acc, item) {
      return [].concat(toConsumableArray_default()(acc || []), toConsumableArray_default()(item.data.list || []));
    }, []) : [];
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    id: "scrollableDiv",
    style: {
      height: '100%',
      overflow: 'auto'
    },
    children: [isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
      avatar: true,
      paragraph: {
        rows: 2
      },
      active: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_es/* default */.Z, {
      dataLength: tweets.length,
      next: fetchNextPage,
      hasMore: hasNextPage,
      loader: /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
        avatar: true,
        paragraph: {
          rows: 1
        },
        active: true
      }),
      endMessage: /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
        plain: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "It is all, nothing more \uD83E\uDD10"
        })
      }),
      scrollableTarget: "scrollableDiv",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
        dataSource: tweets,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z.Item, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
              buzzItem: item,
              refetch: refetch
            })
          }, item.id);
        }
      })
    })]
  });
});

/***/ })

}]);