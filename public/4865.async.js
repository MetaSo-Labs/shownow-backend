(self["webpackChunk"] = self["webpackChunk"] || []).push([[4865],{

/***/ 15831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15025);
/* harmony import */ var _Trans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57777);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52676);



/* harmony default export */ __webpack_exports__.Z = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
    status: "warning",
    title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      children: "This Buzz has been blocked by the administrator."
    })
  });
});

/***/ }),

/***/ 83946:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ImageGallery; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/image/index.js + 2 modules
var es_image = __webpack_require__(40371);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/Components/Buzz/imageGallery.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(93603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/Buzz/ImageGallery.tsx









/* harmony default export */ var ImageGallery = (function (_ref) {
  var decryptContent = _ref.decryptContent;
  var _useLocation = (0,_umi_production_exports.useLocation)(),
    pathname = _useLocation.pathname;
  var _theme$useToken = theme/* default */.Z.useToken(),
    borderRadiusLG = _theme$useToken.token.borderRadiusLG;
  var imageCount = (0,react.useMemo)(function () {
    return (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.publicFiles.length) + (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.encryptFiles.length);
  }, [decryptContent]);
  var _useState = (0,react.useState)('image-container'),
    _useState2 = slicedToArray_default()(_useState, 2),
    container = _useState2[0],
    setContainer = _useState2[1];
  (0,react.useEffect)(function () {
    setContainer('image-container');
    // setTimeout(() => {
    //     setContainer('root')
    // }, 1000)
  }, [pathname]);

  // 根据图片数量设置不同的样式类
  var getGridClass = function getGridClass(count) {
    switch (count) {
      case 1:
        return 'one-images';
      case 2:
        return 'two-images';
      case 3:
        return 'three-images';
      case 4:
        return 'four-images';
      case 5:
        return 'five-images';
      case 6:
        return 'six-images';
      case 7:
        return 'seven-images';
      case 8:
        return 'eight-images';
      case 9:
        return 'nine-images';
      default:
        return 'nine-images';
      // 超过 9 张图则不显示更多
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setContainer('root');
    },
    id: "image-container",
    style: {
      marginBottom: 12,
      marginTop: 12
    },
    className: "image-container ".concat(getGridClass(imageCount)),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_image/* default */.Z.PreviewGroup, {
      preview: {
        onChange: function onChange(current, prev) {
          return console.log("current index: ".concat(current, ", prev index: ").concat(prev));
        },
        getContainer: function getContainer() {
          return document.getElementById(container);
        },
        movable: true,
        onVisibleChange: function onVisibleChange(visible, prevVisible) {
          if (!visible) {
            setContainer('image-container');
          }
        }
      },
      children: [decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.publicFiles.map(function (pid, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.Z, {
          style: {
            objectFit: 'cover',
            height: '100%',
            maxHeight: 400,
            display: index > 8 ? 'none' : 'block',
            borderRadius: borderRadiusLG
          },
          src: "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(pid !== null && pid !== void 0 ? pid : ''.replace('metafile://', '')),
          fallback: config/* FallbackImage */.vL,
          className: "image-item"
        }, pid);
      }), decryptContent.status === 'purchased' ? decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.encryptFiles.map(function (pid, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.Z, {
          style: {
            borderRadius: borderRadiusLG,
            objectFit: 'cover',
            height: '100%',
            display: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.publicFiles.length) + index > 8 ? 'none' : 'block'
          },
          src: "data:image/jpeg;base64,".concat(pid),
          fallback: config/* FallbackImage */.vL
        }, pid);
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {})
      // decryptContent?.encryptFiles
      //     .map((pid: string, index) => {
      //         return <div key={pid} style={{ borderRadius: borderRadiusLG, minHeight: 120, background: '#f5f5f5', height: '100%', display: decryptContent?.publicFiles.length + index > 8 ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center', color: '#8c8c8c' }}>
      //             <LockOutlined style={{ fontSize: 24 }} />
      //         </div>
      //     }
      //     )
      ]
    })
  });
});

/***/ }),

/***/ 43543:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78488);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34373);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10991);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40371);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38021);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79063);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99478);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52676);






/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var nfts = _ref.nfts;
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBgLayout = _theme$useToken$token.colorBgLayout,
    borderRadiusLG = _theme$useToken$token.borderRadiusLG,
    padding = _theme$useToken$token.padding,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorPrimaryBg = _theme$useToken$token.colorPrimaryBg;
  if (!nfts.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "nft-gallery",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    },
    children: [nfts.map(function (nft, index) {
      var _nft$previewImage;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "nft-item",
        style: {
          background: colorBgLayout,
          borderRadius: borderRadiusLG,
          padding: padding,
          display: 'flex',
          width: 378,
          gap: 10,
          maxWidth: '100%'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          style: {
            objectFit: 'cover',
            height: 80,
            width: 80,
            display: index > 8 ? 'none' : 'block',
            borderRadius: borderRadiusLG
          },
          src: "".concat(_config__WEBPACK_IMPORTED_MODULE_0__/* .BASE_MAN_URL */ .yC, "/content/").concat(((_nft$previewImage = nft.previewImage) !== null && _nft$previewImage !== void 0 ? _nft$previewImage : '').replace('metafile://', '')),
          fallback: _config__WEBPACK_IMPORTED_MODULE_0__/* .FallbackImage */ .vL,
          className: "image-item",
          preview: false
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.Title, {
            level: 4,
            style: {
              margin: 0
            },
            children: nft.collectionName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.Text, {
            type: "secondary",
            children: nft.name
          })]
        })]
      }, index);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        bordered: false,
        color: colorPrimaryBg,
        style: {
          color: colorPrimary
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), "NFT Market"]
        }), " "]
      })
    })]
  });
});

/***/ }),

/***/ 94459:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15558);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78488);
/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9807);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(13143);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(81707);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(22694);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(82296);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38021);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(10991);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(46116);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(31218);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(81751);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(37390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(99478);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(79063);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(27465);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(42879);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93603);
/* harmony import */ var _NewPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4457);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79816);
/* harmony import */ var _Follow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4447);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16483);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_buzz__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(518);
/* harmony import */ var _utils_psbtBuild__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49105);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72898);
/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29333);
/* harmony import */ var _ImageGallery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(83946);
/* harmony import */ var _request_baidu_translate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(12511);
/* harmony import */ var _Trans__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(57777);
/* harmony import */ var _NFTGallery__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(43543);
/* harmony import */ var _components_DonateModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56484);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(25688);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(30162);
/* harmony import */ var _components_BuzzOrigin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(43798);
/* harmony import */ var _BlockedBuzz__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(15831);
/* harmony import */ var _components_PayContent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(61053);
/* harmony import */ var _TextContent__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(38613);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(52676);


















var Paragraph = antd__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z.Paragraph,
  Text = antd__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z.Text;














// TODO: use metaid manage state


/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var _currentUserInfoData$, _currentUserInfoData$2, _currentUserInfoData$3, _currentUserInfoData$4, _currentUserInfoData$5, _currentUserInfoData$6, _currentUserInfoData$7;
  var buzzItem = _ref.buzzItem,
    loading = _ref.loading,
    _ref$bordered = _ref.bordered,
    bordered = _ref$bordered === void 0 ? true : _ref$bordered,
    backgeround = _ref.backgeround,
    _ref$showHeader = _ref.showHeader,
    showHeader = _ref$showHeader === void 0 ? true : _ref$showHeader,
    _ref$panding = _ref.panding,
    panding = _ref$panding === void 0 ? 24 : _ref$panding,
    _ref$showFooter = _ref.showFooter,
    showFooter = _ref$showFooter === void 0 ? true : _ref$showFooter;
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBorderSecondary = _theme$useToken$token.colorBorderSecondary,
    colorBorder = _theme$useToken$token.colorBorder,
    colorBgBlur = _theme$useToken$token.colorBgBlur,
    colorBgContainer = _theme$useToken$token.colorBgContainer;
  var _useIntl = (0,umi__WEBPACK_IMPORTED_MODULE_7__.useIntl)(),
    locale = _useIntl.locale;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
    isTranslated = _useState2[0],
    setIsTranslated = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState4 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
    isTranslating = _useState4[0],
    setIsTranslating = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState6 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
    showTrans = _useState6[0],
    setShowTrans = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
    _useState8 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
    transResult = _useState8[0],
    setTransResult = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState10 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),
    showNewPost = _useState10[0],
    setShowNewPost = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState12 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState11, 2),
    showUnlock = _useState12[0],
    setShowUnlock = _useState12[1];
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null); // 引用内容容器
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState14 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState13, 2),
    isExpanded = _useState14[0],
    setIsExpanded = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState16 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState15, 2),
    isOverflowing = _useState16[0],
    setIsOverflowing = _useState16[1]; // 是否溢出
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState18 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState17, 2),
    paying = _useState18[0],
    setPaying = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState20 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState19, 2),
    unlocking = _useState20[0],
    setUnlocking = _useState20[1];
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_7__.useModel)("user"),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user,
    isLogin = _useModel.isLogin,
    connect = _useModel.connect,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting;
  var _useModel2 = (0,umi__WEBPACK_IMPORTED_MODULE_7__.useModel)("dashboard"),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee,
    manPubKey = _useModel2.manPubKey;
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState22 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState21, 2),
    handleLikeLoading = _useState22[0],
    setHandleLikeLoading = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
    _useState24 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState23, 2),
    likes = _useState24[0],
    setLikes = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
    _useState26 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState25, 2),
    donates = _useState26[0],
    setDonates = _useState26[1];
  var currentUserInfoData = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__/* .useQuery */ .a)({
    queryKey: ["userInfo", buzzItem.creator],
    enabled: !(0,ramda__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z)(buzzItem === null || buzzItem === void 0 ? void 0 : buzzItem.creator),
    queryFn: function queryFn() {
      return (0,_request_api__WEBPACK_IMPORTED_MODULE_5__/* .getUserInfo */ .bG)({
        address: buzzItem.creator
      });
    }
  });
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState28 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState27, 2),
    showGift = _useState28[0],
    setShowGift = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
    _useState30 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState29, 2),
    donateAmount = _useState30[0],
    setDonateAmount = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
    _useState32 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState31, 2),
    donateMessage = _useState32[0],
    setDonateMessage = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
    _useState34 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState33, 2),
    balance = _useState34[0],
    setBalance = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState36 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState35, 2),
    donateLoading = _useState36[0],
    setDonateLoading = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(buzzItem.donateCount || 0),
    _useState38 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState37, 2),
    donateCount = _useState38[0],
    setDonateCount = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState40 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState39, 2),
    isDonated = _useState40[0],
    setIsDonated = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__/* .determineAddressInfo */ .uY)(buzzItem.address) === 'p2pkh' ? chain : 'btc'),
    _useState42 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState41, 2),
    selectedChain = _useState42[0],
    setSelectedChain = _useState42[1];
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    var fetchBalance = /*#__PURE__*/function () {
      var _ref2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default()().mark(function _callee() {
        var bal, _bal;
        return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(isLogin && selectedChain === "btc")) {
                _context.next = 13;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return (0,_utils_psbtBuild__WEBPACK_IMPORTED_MODULE_13__/* .getUtxoBalance */ .xd)();
            case 4:
              bal = _context.sent;
              setBalance(bal);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Failed to fetch balance:", _context.t0);
            case 11:
              _context.next = 24;
              break;
            case 13:
              if (!(isLogin && selectedChain === "mvc")) {
                _context.next = 24;
                break;
              }
              _context.prev = 14;
              _context.next = 17;
              return (0,_utils_psbtBuild__WEBPACK_IMPORTED_MODULE_13__/* .getMvcBalance */ .eo)();
            case 17:
              _bal = _context.sent;
              setBalance(_bal);
              _context.next = 24;
              break;
            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](14);
              console.error("Failed to fetch balance:", _context.t1);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8], [14, 21]]);
      }));
      return function fetchBalance() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchBalance();
  }, [isLogin, selectedChain]);
  var payBuzz = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    try {
      var _summary = buzzItem.content;
      var isSummaryJson = _summary.startsWith("{") && _summary.endsWith("}");
      var parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
      return parseSummary.publicContent ? buzzItem : undefined;
    } catch (e) {
      console.error("Error parsing buzz content:", e);
      return undefined;
    }
  }, [buzzItem]);
  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__/* .useQuery */ .a)({
      enabled: !(0,ramda__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z)(payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id),
      queryKey: ["buzzAccessControl", payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id],
      queryFn: function queryFn() {
        return (0,_request_api__WEBPACK_IMPORTED_MODULE_5__/* .getControlByContentPin */ .up)({
          pinId: payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id
        });
      }
    }),
    accessControl = _useQuery.data;
  var _useQuery2 = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__/* .useQuery */ .a)({
      queryKey: ["buzzdecryptContent", buzzItem.id, chain, user.address],
      queryFn: function queryFn() {
        return (0,_utils_buzz__WEBPACK_IMPORTED_MODULE_12__/* .decodePayBuzz */ .ns)(buzzItem, manPubKey, isLogin);
      }
    }),
    decryptContent = _useQuery2.data,
    refetchDecrypt = _useQuery2.refetch,
    decryptLoading = _useQuery2.isLoading;
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    // 检测内容是否溢出
    if (contentRef.current) {
      var _contentRef$current = contentRef.current,
        scrollHeight = _contentRef$current.scrollHeight,
        offsetHeight = _contentRef$current.offsetHeight;
      setIsOverflowing(scrollHeight > offsetHeight);
    }
  }, [contentRef.current]); // 当内容变化时重新检测

  var handleTranslate = /*#__PURE__*/function () {
    var _ref3 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default()().mark(function _callee2() {
      var encryptContent, res;
      return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (decryptContent) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            setShowTrans(!showTrans);
            if (!isTranslated) {
              _context2.next = 6;
              break;
            }
            setIsTranslated(false);
            return _context2.abrupt("return");
          case 6:
            setIsTranslating(true);
            _context2.prev = 7;
            encryptContent = decryptContent.status === "purchased" ? decryptContent.encryptContent : "";
            _context2.next = 11;
            return (0,_request_baidu_translate__WEBPACK_IMPORTED_MODULE_18__/* .fetchTranlateResult */ .v)({
              sourceText: "".concat(decryptContent.publicContent, "\n").concat(encryptContent),
              from: locale === "en-US" ? "zh" : "en",
              to: locale === "en-US" ? "en" : "zh"
            });
          case 11:
            res = _context2.sent;
            setTransResult(res.trans_result.map(function (item) {
              return item.dst;
            }));
            setIsTranslated(true);
            _context2.next = 19;
            break;
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](7);
            antd__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .ZP.error("Translate Failed");
          case 19:
            setIsTranslating(false);
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[7, 16]]);
    }));
    return function handleTranslate() {
      return _ref3.apply(this, arguments);
    };
  }();
  var textContent = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    if (!decryptContent) return "";
    if (!showTrans || isTranslating) {
      var encryptContent = decryptContent.status === "purchased" ? decryptContent.encryptContent : "";
      return "".concat(decryptContent.publicContent).concat(decryptContent.publicContent && encryptContent ? "\n" : "").concat(encryptContent);
    } else {
      return transResult.join("\n");
    }
  }, [showTrans, transResult, decryptContent, isTranslating]);
  var handleDonate = /*#__PURE__*/function () {
    var _ref4 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default()().mark(function _callee3() {
      var isPass, donateEntity, donateRes, _donateEntity, _donateRes, _message, errorMessage, toastMessage;
      return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1___default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (isLogin) {
              _context3.next = 3;
              break;
            }
            antd__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .ZP.error((0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__/* .formatMessage */ .wv)("Please connect your wallet first"));
            return _context3.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context3.next = 6;
              break;
            }
            return _context3.abrupt("return");
          case 6:
            if (!(!donateAmount || parseFloat(donateAmount) <= 0)) {
              _context3.next = 9;
              break;
            }
            antd__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .ZP.error("Please enter a valid amount");
            return _context3.abrupt("return");
          case 9:
            setPaying(true);
            setDonateLoading(true);
            _context3.prev = 11;
            if (!(selectedChain === "btc")) {
              _context3.next = 24;
              break;
            }
            _context3.next = 15;
            return btcConnector.use("simpledonate");
          case 15:
            donateEntity = _context3.sent;
            _context3.next = 18;
            return donateEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: buzzItem.address,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: buzzItem.id,
                  message: donateMessage
                }),
                flag: _config__WEBPACK_IMPORTED_MODULE_4__/* .FLAG */ .BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate")
              }],
              options: {
                noBroadcast: "no",
                feeRate: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__/* .getEffectiveBTCFeerate */ .mG)(Number(feeRate)),
                outputs: [{
                  address: buzzItem.address,
                  satoshis: new decimal_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z(donateAmount).times(1e8).toString()
                }],
                service: fetchServiceFee("donate_service_fee_amount", "BTC")
              }
            });
          case 18:
            donateRes = _context3.sent;
            if (!donateRes.status) {
              _context3.next = 21;
              break;
            }
            throw new Error(donateRes.status);
          case 21:
            if (!(0,ramda__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z)(donateRes === null || donateRes === void 0 ? void 0 : donateRes.revealTxIds[0])) {
              antd__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .ZP.success("Donate successfully");
              setShowGift(false);
              setDonateAmount("");
              setDonateMessage("");
              // setIsDonated(true);
              setDonateCount(function (prev) {
                return prev + 1;
              });
              setDonates([].concat(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(donates), [user.metaid]));
            }
            _context3.next = 38;
            break;
          case 24:
            if (!(selectedChain === "mvc")) {
              _context3.next = 37;
              break;
            }
            console.log(chain);
            _context3.next = 28;
            return mvcConnector.use("simpledonate");
          case 28:
            _donateEntity = _context3.sent;
            console.log(_donateEntity, 'donateEntity');
            _context3.next = 32;
            return _donateEntity.create({
              data: {
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: buzzItem.address,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: buzzItem.id,
                  message: donateMessage
                }),
                flag: _config__WEBPACK_IMPORTED_MODULE_4__/* .FLAG */ .BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate"),
                feeRate: Number(mvcFeeRate)
              },
              options: {
                network: _config__WEBPACK_IMPORTED_MODULE_4__/* .curNetwork */ .eM,
                signMessage: "donate buzz",
                service: fetchServiceFee("donate_service_fee_amount", "MVC"),
                outputs: [{
                  address: buzzItem.address,
                  satoshis: new decimal_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z(donateAmount).times(1e8).toString()
                }]
              }
            });
          case 32:
            _donateRes = _context3.sent;
            console.log(_donateRes, 'donateRes');
            if (!(0,ramda__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z)(_donateRes === null || _donateRes === void 0 ? void 0 : _donateRes.txid)) {
              antd__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .ZP.success("Donate successfully");
              setShowGift(false);
              setDonateAmount("");
              setDonateMessage("");
              // setIsDonated(true);
              setDonates([].concat(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(donates), [user.metaid]));
            }
            _context3.next = 38;
            break;
          case 37:
            throw new Error("Donate not supported on this chain");
          case 38:
            _context3.next = 45;
            break;
          case 40:
            _context3.prev = 40;
            _context3.t0 = _context3["catch"](11);
            errorMessage = (_message = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _message !== void 0 ? _message : _context3.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage;
            antd__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .ZP.error(toastMessage);
          case 45:
            setPaying(false);
            setDonateLoading(false);
          case 47:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[11, 40]]);
    }));
    return function handleDonate() {
      return _ref4.apply(this, arguments);
    };
  }();
  if (buzzItem.blocked && user.metaid !== buzzItem.creator) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(antd__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_BlockedBuzz__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {})
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
    className: "tweet",
    loading: loading,
    style: {
      width: "100%",
      borderColor: colorBorder,
      background: backgeround || colorBgContainer,
      boxShadow: "none"
    },
    styles: {
      header: {
        height: 40,
        borderColor: bordered ? colorBorder : 'transparent'
      },
      body: {
        padding: panding
      }
    },
    variant: bordered ? "outlined" : "borderless",
    title: showHeader ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
      style: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
        className: "avatar",
        style: {
          cursor: "pointer",
          position: "relative"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_UserAvatar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          src: (_currentUserInfoData$ = currentUserInfoData.data) === null || _currentUserInfoData$ === void 0 ? void 0 : _currentUserInfoData$.avatar,
          size: 40
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_Follow__WEBPACK_IMPORTED_MODULE_10__/* .FollowIconComponent */ ._, {
          metaid: ((_currentUserInfoData$2 = currentUserInfoData.data) === null || _currentUserInfoData$2 === void 0 ? void 0 : _currentUserInfoData$2.metaid) || ""
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 8
        },
        onClick: function onClick(e) {
          e.stopPropagation();
          umi__WEBPACK_IMPORTED_MODULE_7__.history.push("/profile/".concat(buzzItem.creator));
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(Text, {
          style: {
            fontSize: 14,
            lineHeight: 1
          },
          children: [" ", ((_currentUserInfoData$3 = currentUserInfoData.data) === null || _currentUserInfoData$3 === void 0 ? void 0 : _currentUserInfoData$3.name) || "Unnamed"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8,
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(Text, {
            type: "secondary",
            style: {
              fontSize: 10,
              lineHeight: 1
            },
            children: (_currentUserInfoData$4 = currentUserInfoData.data) === null || _currentUserInfoData$4 === void 0 ? void 0 : _currentUserInfoData$4.metaid.slice(0, 8)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_components_BuzzOrigin__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
            host: buzzItem.host
          })]
        })]
      })]
    }) : null,
    children: [buzzItem.blocked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(antd__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
      message: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        children: "This Buzz has been blocked by the administrator."
      }),
      type: "warning",
      banner: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)("div", {
      className: "content",
      style: {
        cursor: "pointer"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
        onClick: function onClick() {
          umi__WEBPACK_IMPORTED_MODULE_7__.history.push("/buzz/".concat(buzzItem.id));
        },
        children: [textContent.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div", {
          className: "text",
          ref: contentRef,
          style: {
            position: "relative",
            maxHeight: isExpanded ? "none" : 200,
            overflow: "hidden",
            transition: "max-height 0.3s ease"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_TextContent__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
            textContent: textContent
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(antd__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .ZP, {
            type: "link",
            style: {
              padding: 0
            },
            loading: isTranslating,
            onClick: function onClick(e) {
              e.stopPropagation();
              handleTranslate();
            },
            children: showTrans ? (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__/* .formatMessage */ .wv)("Show original content") : (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__/* .formatMessage */ .wv)("Translate")
          }), isOverflowing && !isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)("div", {
            style: {
              width: "100%",
              paddingTop: 78,
              backgroundImage: "linear-gradient(-180deg,".concat(colorBgBlur, " 0%,").concat(colorBgContainer, " 100%)"),
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(antd__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .ZP, {
              variant: "filled",
              color: "primary",
              size: "small",
              onClick: function onClick(e) {
                e.stopPropagation();
                setIsExpanded(true);
              },
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {})
            })
          })]
        }), decryptContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_NFTGallery__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
          nfts: decryptContent.nfts
        }), decryptContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_ImageGallery__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
          decryptContent: decryptContent
        }), decryptContent && decryptContent.video && decryptContent.video[0] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_Video__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          pid: decryptContent.video[0]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_components_PayContent__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          decryptContent: decryptContent,
          accessControl: accessControl,
          refetchDecrypt: refetchDecrypt
        }), showFooter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .Z, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(antd__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .ZP, {
            size: "small",
            type: "link",
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .Z, {}),
            style: {
              fontSize: 12
            },
            onClick: function onClick(e) {
              e.stopPropagation();
              var link = buzzItem.chainName === "btc" ? "".concat(_config__WEBPACK_IMPORTED_MODULE_4__/* .curNetwork */ .eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(buzzItem.genesisTransaction) : "https://".concat(_config__WEBPACK_IMPORTED_MODULE_4__/* .curNetwork */ .eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(buzzItem.genesisTransaction);
              window.open(link, "_blank");
            },
            children: buzzItem.genesisTransaction.slice(0, 8)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(antd__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .Z, {
            icon: buzzItem.genesisHeight === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .Z, {
              spin: true
            }) : null,
            bordered: false,
            color: buzzItem.chainName === "mvc" ? "blue" : "orange",
            children: buzzItem.chainName.toUpperCase()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(antd__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z.Text, {
            type: "secondary",
            style: {
              fontSize: 12
            },
            children: dayjs__WEBPACK_IMPORTED_MODULE_11___default().unix(buzzItem.timestamp).format("YYYY-MM-DD HH:mm:ss")
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_NewPost__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      show: showNewPost,
      onClose: function onClose() {
        setShowNewPost(false);
      },
      quotePin: buzzItem
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_components_DonateModal__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
      show: showGift,
      onClose: function onClose() {
        setShowGift(false);
        setDonateAmount("");
        setDonateMessage("");
        setSelectedChain(chain);
      },
      isLegacy: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_15__/* .determineAddressInfo */ .uY)(buzzItem.address) === 'p2pkh',
      userInfo: {
        avatar: (_currentUserInfoData$5 = currentUserInfoData.data) === null || _currentUserInfoData$5 === void 0 ? void 0 : _currentUserInfoData$5.avatar,
        name: (_currentUserInfoData$6 = currentUserInfoData.data) === null || _currentUserInfoData$6 === void 0 ? void 0 : _currentUserInfoData$6.name,
        metaid: (_currentUserInfoData$7 = currentUserInfoData.data) === null || _currentUserInfoData$7 === void 0 ? void 0 : _currentUserInfoData$7.metaid
      },
      balance: balance,
      chain: selectedChain,
      setChain: setSelectedChain,
      paying: paying,
      donateAmount: donateAmount,
      donateMessage: donateMessage,
      setDonateAmount: setDonateAmount,
      setDonateMessage: setDonateMessage,
      onDonate: handleDonate
    })]
  });
});

/***/ }),

/***/ 38613:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38021);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93603);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);





var LinkifyText = function LinkifyText(_ref) {
  var text = _ref.text;
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_1__.useModel)('dashboard'),
    idCoins = _useModel.idCoins;
  // 正则识别 URL（http、https）和 @用户名（以空格结尾）
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  var atUserRegex = /(@[A-Za-z0-9_]+)(?=\s|$)/g;

  // 先将文本按 URL 和 @用户名拆分
  var parts = text.split(/(https?:\/\/[^\s]+|@[A-Za-z0-9_]+(?=\s|$))/g);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    children: parts.map(function (part, index) {
      if (urlRegex.test(part)) {
        // URL 链接渲染
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Link, {
          href: part,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          children: part
        }, index);
      } else if (atUserRegex.test(part) && idCoins.includes(part.slice(1).toUpperCase())) {
        // @用户名渲染
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(umi__WEBPACK_IMPORTED_MODULE_1__.Link, {
          to: "/user/".concat(part.slice(1)),
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          children: part
        }, index);
      } else {
        // 普通文本渲染
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Text, {
          children: part
        }, index);
      }
    })
  });
};
/* harmony default export */ __webpack_exports__.Z = (function (_ref2) {
  var textContent = _ref2.textContent;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: (textContent !== null && textContent !== void 0 ? textContent : "").split("\n").map(function (line, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: {},
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Paragraph, {
          style: {
            minHeight: 22
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LinkifyText, {
            text: line
          })
        })
      }, index);
    })
  });
});

/***/ }),

/***/ 30162:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Video; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/plyr-react@5.3.0_plyr@3.7.8_react@18.3.1/node_modules/plyr-react/esm/index.js + 1 modules
var esm = __webpack_require__(33444);
// EXTERNAL MODULE: ./node_modules/.pnpm/plyr-react@5.3.0_plyr@3.7.8_react@18.3.1/node_modules/plyr-react/plyr.css
var plyr = __webpack_require__(65537);
;// CONCATENATED MODULE: ./src/Components/Buzz/video.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(93603);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 5 modules
var spin = __webpack_require__(55576);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/Buzz/Video.tsx












function fetchChunksAndCombine(_x, _x2) {
  return _fetchChunksAndCombine2.apply(this, arguments);
}
function _fetchChunksAndCombine2() {
  _fetchChunksAndCombine2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(chunkUrls, dataType) {
    var responses, arrays, combined, videoBlob, videoUrl;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Promise.all(chunkUrls.map(function (url) {
            return fetch(url);
          }));
        case 2:
          responses = _context2.sent;
          _context2.next = 5;
          return Promise.all(responses.map(function (response) {
            return response.arrayBuffer();
          }));
        case 5:
          arrays = _context2.sent;
          combined = new Uint8Array(arrays.reduce(function (acc, curr) {
            return acc.concat(Array.from(new Uint8Array(curr)));
          }, []));
          videoBlob = new Blob([combined], {
            type: dataType
          });
          videoUrl = URL.createObjectURL(videoBlob);
          return _context2.abrupt("return", videoUrl);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _fetchChunksAndCombine2.apply(this, arguments);
}
/* harmony default export */ var Video = (function (_ref) {
  var pid = _ref.pid;
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel.showConf;
  if (!pid) return null;
  var ref = (0,react.useRef)(null);
  var _useState = (0,react.useState)(),
    _useState2 = slicedToArray_default()(_useState, 2),
    videoSrc = _useState2[0],
    setVideoSrc = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    isIntersecting = _useState4[0],
    setIsIntersecting = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['getPinDetailByPid', {
        pid: pid
      }],
      enabled: !!pid,
      queryFn: function queryFn() {
        return fetch("".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(pid)).then(function (res) {
          return res.json();
        });
      }
    }),
    metafile = _useQuery.data;
  var _fetchChunksAndCombine = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    var chunkUrls, src;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          setLoading(true);
          _context.prev = 1;
          if (!(isIntersecting && metafile)) {
            _context.next = 8;
            break;
          }
          chunkUrls = metafile.chunkList.map(function (chunk) {
            return "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(chunk.pinId);
          });
          _context.next = 6;
          return fetchChunksAndCombine(chunkUrls, metafile.dataType);
        case 6:
          src = _context.sent;
          setVideoSrc(src);
        case 8:
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
        case 13:
          setLoading(false);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 10]]);
  })), [isIntersecting, metafile]);
  (0,react.useEffect)(function () {
    var observer = new IntersectionObserver(function (_ref3) {
      var _ref4 = slicedToArray_default()(_ref3, 1),
        entry = _ref4[0];
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.75
    });
    if (ref.current) observer.observe(ref.current);
    return function () {
      observer.disconnect();
    };
  }, []);
  (0,react.useEffect)(function () {
    _fetchChunksAndCombine();
  }, [_fetchChunksAndCombine]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
    spinning: !videoSrc,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: ref,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: {
        borderRadius: "16px",
        marginBottom: 12,
        overflow: "hidden",
        width: '100%',
        height: '300px',
        '--plyr-color-main': showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
      },
      className: "video",
      children: videoSrc && /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* default */.Z, {
        source: {
          type: "video",
          // @ts-ignore
          sources: [{
            src: videoSrc
          }]
        },
        options: {
          controls: ["play-large", "play", "progress", "current-time", "mute", "fullscreen"],
          captions: {
            active: true,
            language: "auto",
            update: true
          },
          previewThumbnails: {
            enabled: false,
            src: ""
          }
        }
      })
    })
  });
});

/***/ }),

/***/ 43798:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38021);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93603);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52676);





/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var host = _ref.host;
  if (!host) {
    return null;
  }
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_0__.useModel)('dashboard'),
    domainMap = _useModel.domainMap;
  var domain = domainMap[host.toLowerCase()];
  if (!domain) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.Text, {
      type: "secondary",
      style: {
        fontSize: 10,
        lineHeight: 1
      },
      children: "from"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.Text, {
      style: {
        fontSize: 10,
        lineHeight: 1
      },
      children: [" ", host.length > 10 ? host.substring(0, 10) + '...' : host]
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.Text, {
      type: "secondary",
      style: {
        fontSize: 10,
        lineHeight: 1
      },
      children: "from"
    }), /^(?!\-)(?:[A-Za-z0-9-]{1,63}\.?)+(?<=\.[A-Za-z]{2,})$/.test(domain) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.Link, {
      href: "https://".concat(domain),
      target: "_blank",
      style: {
        fontSize: 10,
        lineHeight: 1
      },
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: domain
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.Text, {
      style: {
        fontSize: 10,
        lineHeight: 1
      },
      children: [domain.length > 10 ? domain.substring(0, 10) + '...' : domain, " "]
    })]
  });
});

/***/ }),

/***/ 56484:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38021);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48008);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23533);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14258);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25688);
/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29333);
/* harmony import */ var _Unlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94443);
/* harmony import */ var _assets_btc_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33401);
/* harmony import */ var _assets_mvc_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61133);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52676);










var DonateModal = function DonateModal(_ref) {
  var show = _ref.show,
    isLegacy = _ref.isLegacy,
    onClose = _ref.onClose,
    userInfo = _ref.userInfo,
    balance = _ref.balance,
    chain = _ref.chain,
    setChain = _ref.setChain,
    paying = _ref.paying,
    donateAmount = _ref.donateAmount,
    donateMessage = _ref.donateMessage,
    setDonateAmount = _ref.setDonateAmount,
    setDonateMessage = _ref.setDonateMessage,
    onDonate = _ref.onDonate;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Unlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    show: show,
    bodyStyle: {
      padding: "0 16px"
    },
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      style: {
        position: "absolute",
        right: 16,
        top: 16,
        zIndex: 10
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
        type: "text",
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
        onClick: onClose,
        style: {
          width: 40,
          height: 40,
          display: "flex",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center"
        },
        className: "hover-bg-button"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        width: "100%",
        padding: "30px 0"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_UserAvatar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        src: userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar,
        size: 60
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Title, {
        level: 3,
        style: {
          margin: 0,
          fontSize: 24,
          fontWeight: 600
        },
        children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || "Unnamed"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Text, {
        style: {
          fontSize: 14,
          color: "rgba(0, 0, 0, 0.45)"
        },
        children: ["MetaID:", " ", userInfo !== null && userInfo !== void 0 && userInfo.metaid ? "".concat(userInfo.metaid.slice(0, 8), "...").concat(userInfo.metaid.slice(-4)) : ""]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          width: "100%",
          marginTop: 12
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            position: "relative"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Title, {
            level: 4,
            style: {
              margin: "0 0 16px 0",
              fontSize: 16,
              fontWeight: 600
            },
            children: "Reward amount"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              position: "absolute",
              right: 0,
              top: 0,
              color: "rgba(0, 0, 0, 0.45)",
              fontSize: 14
            },
            children: ["Availabile ", new decimal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(balance).div(1e8).toFixed(8)]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "12px",
              padding: "16px",
              marginBottom: "32px",
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              maxWidth: "100%",
              boxSizing: "border-box"
            },
            onClick: function onClick(e) {
              e.stopPropagation();
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: {
                flex: "1 1 0%",
                minWidth: 0,
                overflow: "hidden"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                placeholder: "Enter amount",
                value: donateAmount,
                onChange: function onChange(e) {
                  return setDonateAmount(e.target.value);
                },
                style: {
                  border: "none",
                  boxShadow: "none",
                  fontSize: 16,
                  padding: 0,
                  color: "rgba(0, 0, 0, 0.88)",
                  width: "100%"
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              style: {
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#F5F5F5",
                padding: "4px 12px",
                borderRadius: "20px"
              },
              children: isLegacy ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                value: chain,
                onChange: function onChange(value) {
                  return setChain === null || setChain === void 0 ? void 0 : setChain(value);
                },
                style: {
                  width: 100
                },
                options: [{
                  value: 'btc',
                  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: _assets_btc_png__WEBPACK_IMPORTED_MODULE_3__,
                      alt: "BTC",
                      width: 20,
                      height: 20
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "BTC"
                    })]
                  })
                }, {
                  value: 'mvc',
                  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: _assets_mvc_png__WEBPACK_IMPORTED_MODULE_4__,
                      alt: "MVC",
                      width: 20,
                      height: 20
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "MVC"
                    })]
                  })
                }]
                // bordered={false}
                ,
                variant: "borderless",
                dropdownStyle: {
                  minWidth: 120
                }
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  src: _assets_btc_png__WEBPACK_IMPORTED_MODULE_3__,
                  alt: "BTC",
                  width: 20,
                  height: 20,
                  style: {
                    flexShrink: 0
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Text, {
                  style: {
                    fontSize: 14,
                    margin: 0,
                    color: "rgba(0, 0, 0, 0.88)"
                  },
                  children: "BTC"
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Title, {
            level: 4,
            style: {
              margin: "24px 0 16px 0",
              fontSize: 16,
              fontWeight: 600
            },
            children: "Message"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              width: "100%",
              padding: "16px",
              marginBottom: "32px",
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              maxWidth: "100%",
              boxSizing: "border-box"
            },
            onClick: function onClick(e) {
              e.stopPropagation();
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.TextArea, {
              placeholder: "Enter message",
              value: donateMessage,
              onChange: function onChange(e) {
                return setDonateMessage(e.target.value);
              },
              style: {
                border: "none",
                boxShadow: "none",
                fontSize: 16,
                padding: 0,
                color: "rgba(0, 0, 0, 0.88)",
                width: "100%",
                resize: "none"
              },
              autoSize: {
                minRows: 2,
                maxRows: 4
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              display: "flex",
              justifyContent: "center"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
              type: "primary",
              block: true,
              size: "large",
              shape: "round",
              loading: paying,
              onClick: onDonate,
              style: {
                width: "220px",
                height: "52px",
                background: "linear-gradient(270deg, #F824DA 0%, #FF5815 100%)",
                border: "none",
                fontSize: 16,
                fontWeight: 600,
                color: "#fff"
              },
              children: "Confirm"
            })
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__.Z = (DonateModal);

/***/ }),

/***/ 61053:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_MRC20Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97691);
/* harmony import */ var _Components_Trans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57777);
/* harmony import */ var _Components_Unlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94443);
/* harmony import */ var _Components_UserAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29333);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78488);
/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9807);
/* harmony import */ var _utils_buzz__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(518);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72898);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(82296);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10991);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46116);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55576);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(38021);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(37390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93603);
/* harmony import */ var _assets_btc_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33401);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(31103);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52676);





















/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var _accessControl$data, _accessControl$data2, _accessControl$data3, _accessControl$data4, _accessControl$data5, _accessControl$data6, _accessControl$data7, _accessControl$data8, _accessControl$data9, _accessControl$data10, _accessControl$data11, _accessControl$data12, _accessControl$data13, _mrc20$deployerUserIn, _accessControl$data15, _accessControl$data16, _accessControl$data17;
  var decryptContent = _ref.decryptContent,
    accessControl = _ref.accessControl,
    refetchDecrypt = _ref.refetchDecrypt;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
    _useState2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
    showUnlock = _useState2[0],
    setShowUnlock = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
    _useState4 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
    unlocking = _useState4[0],
    setUnlocking = _useState4[1];
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_13__.useModel)('dashboard'),
    showConf = _useModel.showConf;
  var _useModel2 = (0,umi__WEBPACK_IMPORTED_MODULE_13__.useModel)("user"),
    btcConnector = _useModel2.btcConnector,
    isLogin = _useModel2.isLogin,
    feeRate = _useModel2.feeRate,
    checkUserSetting = _useModel2.checkUserSetting;
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBgLayout = _theme$useToken$token.colorBgLayout,
    colorFillAlter = _theme$useToken$token.colorFillAlter;
  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_17__/* .useQuery */ .a)({
      enabled: Boolean(accessControl === null || accessControl === void 0 || (_accessControl$data = accessControl.data) === null || _accessControl$data === void 0 ? void 0 : _accessControl$data.holdCheck),
      queryKey: ["mrc20", accessControl],
      queryFn: function () {
        var _queryFn = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee() {
          var _yield$getMRC20Info, data, userInfo;
          return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_request_api__WEBPACK_IMPORTED_MODULE_9__/* .getMRC20Info */ .tl)({
                  tick: accessControl.data.holdCheck.ticker
                });
              case 2:
                _yield$getMRC20Info = _context.sent;
                data = _yield$getMRC20Info.data;
                if (!data.mrc20Id) {
                  _context.next = 9;
                  break;
                }
                _context.next = 7;
                return (0,_request_api__WEBPACK_IMPORTED_MODULE_9__/* .getUserInfo */ .bG)({
                  address: data.address
                });
              case 7:
                userInfo = _context.sent;
                return _context.abrupt("return", _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()({}, data), {}, {
                  deployerUserInfo: userInfo
                }));
              case 9:
                return _context.abrupt("return", Promise.resolve(null));
              case 10:
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
    mrc20 = _useQuery.data;
  var _useQuery2 = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_17__/* .useQuery */ .a)({
      enabled: Boolean((accessControl === null || accessControl === void 0 || (_accessControl$data2 = accessControl.data) === null || _accessControl$data2 === void 0 || (_accessControl$data2 = _accessControl$data2.payCheck) === null || _accessControl$data2 === void 0 ? void 0 : _accessControl$data2.type) === 'mrc20'),
      queryKey: ["mrc20", accessControl],
      queryFn: function () {
        var _queryFn2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee2() {
          var _yield$getMRC20Info2, data;
          return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0,_request_api__WEBPACK_IMPORTED_MODULE_9__/* .getMRC20Info */ .tl)({
                  tick: accessControl.data.payCheck.ticker
                });
              case 2:
                _yield$getMRC20Info2 = _context2.sent;
                data = _yield$getMRC20Info2.data;
                if (!data.mrc20Id) {
                  _context2.next = 6;
                  break;
                }
                return _context2.abrupt("return", _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()({}, data));
              case 6:
                return _context2.abrupt("return", Promise.resolve(null));
              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function queryFn() {
          return _queryFn2.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    payMrc20 = _useQuery2.data;
  var handlePay = /*#__PURE__*/function () {
    var _ref2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee3() {
      var isPass, data, payCheck, _message, errorMessage, toastMessage;
      return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (isLogin) {
              _context3.next = 3;
              break;
            }
            antd__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP.error((0,_utils_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatMessage */ .wv)("Please connect your wallet first"));
            return _context3.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context3.next = 6;
              break;
            }
            return _context3.abrupt("return");
          case 6:
            setUnlocking(true);
            _context3.prev = 7;
            if (!(accessControl && accessControl.data)) {
              _context3.next = 23;
              break;
            }
            data = accessControl.data;
            payCheck = data.payCheck;
            if (!(payCheck.type !== 'mrc20')) {
              _context3.next = 16;
              break;
            }
            _context3.next = 14;
            return (0,_utils_buzz__WEBPACK_IMPORTED_MODULE_10__/* .buildAccessPass */ .qq)(data.pinId, (showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", btcConnector, feeRate, payCheck.payTo, payCheck.amount);
          case 14:
            _context3.next = 18;
            break;
          case 16:
            _context3.next = 18;
            return (0,_utils_buzz__WEBPACK_IMPORTED_MODULE_10__/* .buildMRc20AccessPass */ .nT)(data.pinId, (showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", btcConnector, feeRate, payCheck.payTo, payCheck.amount, payMrc20);
          case 18:
            _context3.next = 20;
            return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_11__/* .sleep */ ._v)(1000);
          case 20:
            refetchDecrypt();
            antd__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP.success("Pay successfully, please wait for the transaction to be confirmed!");
            setShowUnlock(false);
          case 23:
            _context3.next = 30;
            break;
          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](7);
            errorMessage = (_message = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _message !== void 0 ? _message : _context3.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage;
            antd__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP.error(toastMessage);
          case 30:
            setUnlocking(false);
          case 31:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[7, 25]]);
    }));
    return function handlePay() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: [(decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.buzzType) === "pay" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
      spinning: (accessControl === null || accessControl === void 0 || (_accessControl$data3 = accessControl.data) === null || _accessControl$data3 === void 0 ? void 0 : _accessControl$data3.mempool) === 1,
      children: [(decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "unpurchased" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "buzzPayContent",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: "payContent",
          style: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 8,
            justifyContent: "space-between",
            marginBottom: 12,
            borderRadius: 12,
            padding: '80px 16px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            style: {
              fontSize: 24,
              color: '#fff'
            }
          }), (accessControl === null || accessControl === void 0 || (_accessControl$data4 = accessControl.data) === null || _accessControl$data4 === void 0 ? void 0 : _accessControl$data4.payCheck) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z.Text, {
            type: "secondary",
            style: {
              lineHeight: "16px",
              color: '#fff'
            },
            children: ["This is paid content. A payment of", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z.Text, {
              type: "secondary",
              style: {
                lineHeight: "16px",
                color: '#fff'
              },
              strong: true,
              children: [" ".concat(accessControl === null || accessControl === void 0 || (_accessControl$data5 = accessControl.data) === null || _accessControl$data5 === void 0 || (_accessControl$data5 = _accessControl$data5.payCheck) === null || _accessControl$data5 === void 0 ? void 0 : _accessControl$data5.amount, " "), (accessControl === null || accessControl === void 0 || (_accessControl$data6 = accessControl.data) === null || _accessControl$data6 === void 0 || (_accessControl$data6 = _accessControl$data6.payCheck) === null || _accessControl$data6 === void 0 ? void 0 : _accessControl$data6.type) === 'mrc20' ? payMrc20 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z.Text, {
                  type: "secondary",
                  style: {
                    lineHeight: "16px",
                    color: '#fff'
                  },
                  children: [" $", payMrc20.tick]
                })
              }) : 'BTC']
            }), " is required for access."]
          }), (accessControl === null || accessControl === void 0 || (_accessControl$data7 = accessControl.data) === null || _accessControl$data7 === void 0 ? void 0 : _accessControl$data7.holdCheck) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z.Text, {
            type: "secondary",
            style: {
              lineHeight: "16px",
              color: '#fff'
            },
            children: "Access is restricted. Only token holders are allowed."
          })]
        })
      }), (accessControl === null || accessControl === void 0 || (_accessControl$data8 = accessControl.data) === null || _accessControl$data8 === void 0 ? void 0 : _accessControl$data8.payCheck) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
            background: colorFillAlter,
            borderRadius: 12,
            padding: 16
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z.Text, {
              type: "warning",
              style: {
                lineHeight: "16px"
              },
              children: accessControl === null || accessControl === void 0 || (_accessControl$data9 = accessControl.data) === null || _accessControl$data9 === void 0 || (_accessControl$data9 = _accessControl$data9.payCheck) === null || _accessControl$data9 === void 0 ? void 0 : _accessControl$data9.amount
            }), (accessControl === null || accessControl === void 0 || (_accessControl$data10 = accessControl.data) === null || _accessControl$data10 === void 0 || (_accessControl$data10 = _accessControl$data10.payCheck) === null || _accessControl$data10 === void 0 ? void 0 : _accessControl$data10.type) === 'mrc20' ? payMrc20 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z.Text, {
                children: ["$", payMrc20.tick]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Components_MRC20Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                size: 20,
                tick: payMrc20.tick,
                metadata: payMrc20.metadata
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("img", {
              src: _assets_btc_png__WEBPACK_IMPORTED_MODULE_14__,
              alt: "",
              width: 16,
              height: 16
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, {
            shape: "round",
            variant: "filled",
            color: "primary",
            disabled: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "purchased" || (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
            onClick: ( /*#__PURE__*/function () {
              var _ref3 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee4(e) {
                var isPass;
                return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      e.stopPropagation();
                      if (isLogin) {
                        _context4.next = 4;
                        break;
                      }
                      antd__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP.error((0,_utils_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatMessage */ .wv)("Please connect your wallet first"));
                      return _context4.abrupt("return");
                    case 4:
                      isPass = checkUserSetting();
                      if (isPass) {
                        _context4.next = 7;
                        break;
                      }
                      return _context4.abrupt("return");
                    case 7:
                      setShowUnlock(true);
                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return function (_x) {
                return _ref3.apply(this, arguments);
              };
            }()),
            loading: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              wrapper: true,
              children: decryptContent.status === "unpurchased" ? "Unlock" : "Unlocked"
            })
          })]
        }), (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z.Text, {
          type: "warning",
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            lineHeight: '20px',
            paddingBottom: 12
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: "Waiting for transaction confirmation. Access will be available once confirmed."
          })
        })]
      }), (accessControl === null || accessControl === void 0 || (_accessControl$data11 = accessControl.data) === null || _accessControl$data11 === void 0 ? void 0 : _accessControl$data11.holdCheck) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
          background: colorFillAlter,
          borderRadius: 12,
          padding: 16
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z.Text, {
            type: "warning",
            style: {
              lineHeight: "16px"
            },
            children: "Hold ".concat(accessControl === null || accessControl === void 0 || (_accessControl$data12 = accessControl.data) === null || _accessControl$data12 === void 0 || (_accessControl$data12 = _accessControl$data12.holdCheck) === null || _accessControl$data12 === void 0 ? void 0 : _accessControl$data12.amount, " $").concat(accessControl === null || accessControl === void 0 || (_accessControl$data13 = accessControl.data) === null || _accessControl$data13 === void 0 || (_accessControl$data13 = _accessControl$data13.holdCheck) === null || _accessControl$data13 === void 0 ? void 0 : _accessControl$data13.ticker)
          }), mrc20 && (mrc20.metadata ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Components_MRC20Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            size: 20,
            tick: mrc20.tick,
            metadata: mrc20.metadata
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Components_UserAvatar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            src: (_mrc20$deployerUserIn = mrc20.deployerUserInfo) === null || _mrc20$deployerUserIn === void 0 ? void 0 : _mrc20$deployerUserIn.avatar,
            size: 20
          }))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, {
          shape: "round",
          variant: "filled",
          color: "primary",
          disabled: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "purchased" || (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
          onClick: ( /*#__PURE__*/function () {
            var _ref4 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee5(e) {
              var _accessControl$data14;
              return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    window.open("https://".concat(_config__WEBPACK_IMPORTED_MODULE_8__/* .curNetwork */ .eM === "testnet" ? "testnet" : "www", ".metaid.market/").concat(mrc20 && mrc20.metadata ? 'mrc20' : 'idCoin', "/").concat(accessControl === null || accessControl === void 0 || (_accessControl$data14 = accessControl.data) === null || _accessControl$data14 === void 0 || (_accessControl$data14 = _accessControl$data14.holdCheck) === null || _accessControl$data14 === void 0 ? void 0 : _accessControl$data14.ticker), (0,_utils_utils__WEBPACK_IMPORTED_MODULE_11__/* .openWindowTarget */ .wL)());
                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x2) {
              return _ref4.apply(this, arguments);
            };
          }()),
          loading: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            wrapper: true,
            children: "Mint"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Components_Unlock__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      show: showUnlock && (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) !== 'purchased' && (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) !== 'mempool',
      onClose: function onClose() {
        setShowUnlock(false);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          flexDirection: 'column',
          padding: 20
        },
        children: [(accessControl === null || accessControl === void 0 || (_accessControl$data15 = accessControl.data) === null || _accessControl$data15 === void 0 || (_accessControl$data15 = _accessControl$data15.payCheck) === null || _accessControl$data15 === void 0 ? void 0 : _accessControl$data15.type) === 'mrc20' ? payMrc20 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Components_MRC20Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          size: 60,
          tick: payMrc20 === null || payMrc20 === void 0 ? void 0 : payMrc20.tick,
          metadata: payMrc20 === null || payMrc20 === void 0 ? void 0 : payMrc20.metadata
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("img", {
          src: _assets_btc_png__WEBPACK_IMPORTED_MODULE_14__,
          alt: "",
          width: 60,
          height: 60
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z.Title, {
          level: 4,
          children: [accessControl === null || accessControl === void 0 || (_accessControl$data16 = accessControl.data) === null || _accessControl$data16 === void 0 || (_accessControl$data16 = _accessControl$data16.payCheck) === null || _accessControl$data16 === void 0 ? void 0 : _accessControl$data16.amount, " ", (accessControl === null || accessControl === void 0 || (_accessControl$data17 = accessControl.data) === null || _accessControl$data17 === void 0 || (_accessControl$data17 = _accessControl$data17.payCheck) === null || _accessControl$data17 === void 0 ? void 0 : _accessControl$data17.type) === 'mrc20' ? '$' + (payMrc20 === null || payMrc20 === void 0 ? void 0 : payMrc20.tick) : 'BTC']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            width: '100%'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, {
            shape: "round",
            variant: "filled",
            size: "large",
            color: "primary",
            block: true,
            onClick: function onClick(e) {
              e.stopPropagation();
              setShowUnlock(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              wrapper: true,
              children: "Cancel"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .ZP, {
            shape: "round",
            size: "large",
            block: true,
            loading: unlocking,
            type: "primary",
            onClick: ( /*#__PURE__*/function () {
              var _ref5 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee6(e) {
                return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      e.stopPropagation();
                      handlePay();
                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              }));
              return function (_x3) {
                return _ref5.apply(this, arguments);
              };
            }()),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              wrapper: true,
              children: "Unlock"
            })
          })]
        })]
      })
    })]
  });
});

/***/ }),

/***/ 3517:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Components_Buzz; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
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
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(13143);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LinkOutlined.js + 1 modules
var LinkOutlined = __webpack_require__(81707);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SyncOutlined.js + 1 modules
var SyncOutlined = __webpack_require__(22694);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MessageOutlined.js + 1 modules
var MessageOutlined = __webpack_require__(16036);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/HeartFilled.js + 1 modules
var HeartFilled = __webpack_require__(43106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/HeartOutlined.js + 1 modules
var HeartOutlined = __webpack_require__(93342);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/GiftFilled.js + 1 modules
var GiftFilled = __webpack_require__(71429);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/GiftOutlined.js + 1 modules
var GiftOutlined = __webpack_require__(94427);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UploadOutlined.js + 1 modules
var UploadOutlined = __webpack_require__(15739);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 17 modules
var typography = __webpack_require__(38021);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/index.js + 4 modules
var es_alert = __webpack_require__(81751);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(79063);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(93603);
// EXTERNAL MODULE: ./src/Components/Comment/index.tsx + 3 modules
var Comment = __webpack_require__(79684);
// EXTERNAL MODULE: ./src/Components/NewPost/index.tsx + 2 modules
var NewPost = __webpack_require__(4457);
// EXTERNAL MODULE: ./src/Components/Buzz/index.less
var Buzz = __webpack_require__(79816);
// EXTERNAL MODULE: ./src/Components/Buzz/RepostDetail.tsx
var RepostDetail = __webpack_require__(94459);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/Buzz/ForwardTweet.tsx



var RepostDetails = /*#__PURE__*/react.memo(function (_ref) {
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    loading = _ref.loading;
  if (!buzzItem || !buzzItem.address) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(RepostDetail/* default */.Z, {
    buzzItem: buzzItem,
    loading: loading
  });
});
/* harmony default export */ var ForwardTweet = (RepostDetails);
// EXTERNAL MODULE: ./src/Components/Follow/index.tsx + 1 modules
var Follow = __webpack_require__(4447);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(16483);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./src/utils/buzz.ts
var buzz = __webpack_require__(518);
// EXTERNAL MODULE: ./src/utils/psbtBuild.ts
var psbtBuild = __webpack_require__(49105);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./src/Components/Buzz/ImageGallery.tsx + 1 modules
var ImageGallery = __webpack_require__(83946);
// EXTERNAL MODULE: ./src/request/baidu-translate.ts
var baidu_translate = __webpack_require__(12511);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./src/Components/Buzz/NFTGallery.tsx
var NFTGallery = __webpack_require__(43543);
// EXTERNAL MODULE: ./src/Components/Buzz/components/DonateModal/index.tsx
var DonateModal = __webpack_require__(56484);
// EXTERNAL MODULE: ./node_modules/.pnpm/decimal.js@10.5.0/node_modules/decimal.js/decimal.mjs
var decimal = __webpack_require__(25688);
// EXTERNAL MODULE: ./src/Components/Buzz/Video.tsx + 1 modules
var Video = __webpack_require__(30162);
// EXTERNAL MODULE: ./src/Components/Buzz/components/BuzzOrigin.tsx
var BuzzOrigin = __webpack_require__(43798);
// EXTERNAL MODULE: ./src/Components/Buzz/components/PayContent.tsx
var PayContent = __webpack_require__(61053);
// EXTERNAL MODULE: ./src/request/metaso.ts
var metaso = __webpack_require__(57828);
// EXTERNAL MODULE: ./src/Components/UserInfo/PendingUserAvatar.tsx
var PendingUserAvatar = __webpack_require__(35711);
// EXTERNAL MODULE: ./src/Components/NumberFormat/index.tsx
var NumberFormat = __webpack_require__(38161);
;// CONCATENATED MODULE: ./src/Components/IDCoinBadge/index.tsx











/* harmony default export */ var IDCoinBadge = (function (_ref) {
  var address = _ref.address,
    IDCoin = _ref.IDCoin;
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    idCoinsAddress = _useModel.idCoinsAddress;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['coinData2', address],
      queryFn: function queryFn() {
        return (0,metaso/* fetchIDCoinInfoByAddress */.lh)({
          address: address
        });
      },
      enabled: Boolean(address) && !IDCoin && idCoinsAddress.includes(address)
    }),
    coinData2 = _useQuery.data,
    isFetching2 = _useQuery.isFetching;
  var IdCoin = (0,react.useMemo)(function () {
    if (IDCoin) return IDCoin;
    if (coinData2 !== null && coinData2 !== void 0 && coinData2.data && coinData2.data.tag === 'id-coins') return coinData2.data;
    return undefined;
  }, [coinData2, IDCoin]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: IdCoin && /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.ZP, {
      color: "default",
      variant: "solid",
      shape: "round",
      size: "small",
      style: {
        padding: '0 4px 0 0',
        marginTop: 12,
        fontWeight: 500
      },
      onClick: function onClick() {
        IdCoin.totalMinted === IdCoin.mintCount ? window.open("https://www.metaid.market/idCoin/".concat(IdCoin.tick), (0,utils/* openWindowTarget */.wL)()) : window.open("https://www.metaid.market/inscribe/MRC-20/".concat(IdCoin.tick), (0,utils/* openWindowTarget */.wL)());
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserAvatar/* default */.Z, {
        address: IdCoin.address,
        size: 20
      }), " $", IdCoin.tick.toUpperCase(), "  ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        style: {
          color: '#4EED2A',
          fontSize: 12
        },
        children: IdCoin.totalMinted === IdCoin.mintCount ? /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
          value: IdCoin.floorPrice,
          suffix: "BTC",
          isBig: true,
          decimal: 8,
          tiny: true
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "link",
          size: "small",
          onClick: function onClick() {},
          children: "Mint"
        })
      })]
    })
  });
});
// EXTERNAL MODULE: ./src/Components/Buzz/TextContent.tsx
var TextContent = __webpack_require__(38613);
;// CONCATENATED MODULE: ./src/Components/Buzz/Details.tsx





















var Paragraph = typography/* default */.Z.Paragraph,
  Text = typography/* default */.Z.Text;














// TODO: use metaid manage state


/* harmony default export */ var Details = (function (_ref) {
  var _currentUserInfoData$, _currentUserInfoData$2, _currentUserInfoData$3, _currentUserInfoData$4, _currentUserInfoData$5, _currentUserInfoData$6, _currentUserInfoData$7;
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    refetch = _ref.refetch,
    _ref$isForward = _ref.isForward,
    isForward = _ref$isForward === void 0 ? false : _ref$isForward,
    loading = _ref.loading,
    _ref$like = _ref.like,
    like = _ref$like === void 0 ? [] : _ref$like,
    _ref$donate = _ref.donate,
    donate = _ref$donate === void 0 ? [] : _ref$donate,
    handleClick = _ref.handleClick;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBorderSecondary = _theme$useToken$token.colorBorderSecondary,
    colorBorder = _theme$useToken$token.colorBorder,
    colorBgBlur = _theme$useToken$token.colorBgBlur,
    colorBgContainer = _theme$useToken$token.colorBgContainer;
  var _useIntl = (0,_umi_production_exports.useIntl)(),
    locale = _useIntl.locale;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    isTranslated = _useState2[0],
    setIsTranslated = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    isTranslating = _useState4[0],
    setIsTranslating = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    showTrans = _useState6[0],
    setShowTrans = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = slicedToArray_default()(_useState7, 2),
    transResult = _useState8[0],
    setTransResult = _useState8[1];
  var _useState9 = (0,react.useState)(false),
    _useState10 = slicedToArray_default()(_useState9, 2),
    showComment = _useState10[0],
    setShowComment = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = slicedToArray_default()(_useState11, 2),
    showNewPost = _useState12[0],
    setShowNewPost = _useState12[1];
  var _useState13 = (0,react.useState)(false),
    _useState14 = slicedToArray_default()(_useState13, 2),
    showUnlock = _useState14[0],
    setShowUnlock = _useState14[1];
  var contentRef = (0,react.useRef)(null); // 引用内容容器
  var _useState15 = (0,react.useState)(false),
    _useState16 = slicedToArray_default()(_useState15, 2),
    isExpanded = _useState16[0],
    setIsExpanded = _useState16[1];
  var _useState17 = (0,react.useState)(false),
    _useState18 = slicedToArray_default()(_useState17, 2),
    isOverflowing = _useState18[0],
    setIsOverflowing = _useState18[1]; // 是否溢出
  var _useState19 = (0,react.useState)(false),
    _useState20 = slicedToArray_default()(_useState19, 2),
    paying = _useState20[0],
    setPaying = _useState20[1];
  var _useState21 = (0,react.useState)(false),
    _useState22 = slicedToArray_default()(_useState21, 2),
    unlocking = _useState22[0],
    setUnlocking = _useState22[1];
  var _useModel = (0,_umi_production_exports.useModel)("user"),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user,
    isLogin = _useModel.isLogin,
    connect = _useModel.connect,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting;
  var _useModel2 = (0,_umi_production_exports.useModel)("dashboard"),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee,
    manPubKey = _useModel2.manPubKey;
  var _useState23 = (0,react.useState)(false),
    _useState24 = slicedToArray_default()(_useState23, 2),
    handleLikeLoading = _useState24[0],
    setHandleLikeLoading = _useState24[1];
  var _useState25 = (0,react.useState)([]),
    _useState26 = slicedToArray_default()(_useState25, 2),
    likes = _useState26[0],
    setLikes = _useState26[1];
  var _useState27 = (0,react.useState)([]),
    _useState28 = slicedToArray_default()(_useState27, 2),
    donates = _useState28[0],
    setDonates = _useState28[1];
  var _useState29 = (0,react.useState)(0),
    _useState30 = slicedToArray_default()(_useState29, 2),
    donateCount = _useState30[0],
    setDonateCount = _useState30[1];
  var currentUserInfoData = (0,useQuery/* useQuery */.a)({
    queryKey: ["userInfo", buzzItem.creator],
    enabled: !(0,isNil/* default */.Z)(buzzItem === null || buzzItem === void 0 ? void 0 : buzzItem.creator),
    queryFn: function queryFn() {
      return (0,api/* getUserInfo */.bG)({
        address: buzzItem.creator
      });
    }
  });
  var _useState31 = (0,react.useState)(false),
    _useState32 = slicedToArray_default()(_useState31, 2),
    showGift = _useState32[0],
    setShowGift = _useState32[1];
  var _useState33 = (0,react.useState)(""),
    _useState34 = slicedToArray_default()(_useState33, 2),
    donateAmount = _useState34[0],
    setDonateAmount = _useState34[1];
  var _useState35 = (0,react.useState)(""),
    _useState36 = slicedToArray_default()(_useState35, 2),
    donateMessage = _useState36[0],
    setDonateMessage = _useState36[1];
  var _useState37 = (0,react.useState)(0),
    _useState38 = slicedToArray_default()(_useState37, 2),
    balance = _useState38[0],
    setBalance = _useState38[1];
  var _useState39 = (0,react.useState)(false),
    _useState40 = slicedToArray_default()(_useState39, 2),
    donateLoading = _useState40[0],
    setDonateLoading = _useState40[1];
  var _useState41 = (0,react.useState)((0,utils/* determineAddressInfo */.uY)(buzzItem.address) === 'p2pkh' ? chain : 'btc'),
    _useState42 = slicedToArray_default()(_useState41, 2),
    selectedChain = _useState42[0],
    setSelectedChain = _useState42[1];
  (0,react.useEffect)(function () {
    var fetchBalance = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var bal, _bal;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(isLogin && selectedChain === "btc")) {
                _context.next = 13;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return (0,psbtBuild/* getUtxoBalance */.xd)();
            case 4:
              bal = _context.sent;
              setBalance(bal);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Failed to fetch balance:", _context.t0);
            case 11:
              _context.next = 24;
              break;
            case 13:
              if (!(isLogin && selectedChain === "mvc")) {
                _context.next = 24;
                break;
              }
              _context.prev = 14;
              _context.next = 17;
              return (0,psbtBuild/* getMvcBalance */.eo)();
            case 17:
              _bal = _context.sent;
              setBalance(_bal);
              _context.next = 24;
              break;
            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](14);
              console.error("Failed to fetch balance:", _context.t1);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8], [14, 21]]);
      }));
      return function fetchBalance() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchBalance();
  }, [isLogin, selectedChain]);
  (0,react.useEffect)(function () {
    var _buzzItem$like, _buzzItem$donate, _buzzItem$donateCount;
    if (!buzzItem) {
      return;
    }
    var _likes = (_buzzItem$like = buzzItem.like) !== null && _buzzItem$like !== void 0 ? _buzzItem$like : [];
    var _like = like !== null && like !== void 0 ? like : [];
    setLikes([].concat(toConsumableArray_default()(_likes), toConsumableArray_default()(_like.map(function (item) {
      return item.CreateMetaid;
    }))));
    var _donates = (_buzzItem$donate = buzzItem.donate) !== null && _buzzItem$donate !== void 0 ? _buzzItem$donate : [];
    var _donate = donate !== null && donate !== void 0 ? donate : [];
    setDonates([].concat(toConsumableArray_default()(_donates), toConsumableArray_default()(_donate.map(function (item) {
      return item.CreateMetaid;
    }))));
    setDonateCount((_buzzItem$donateCount = buzzItem.donateCount) !== null && _buzzItem$donateCount !== void 0 ? _buzzItem$donateCount : 0);
  }, [buzzItem, like, donate]);
  var payBuzz = (0,react.useMemo)(function () {
    try {
      var _summary = buzzItem.content;
      var isSummaryJson = _summary.startsWith("{") && _summary.endsWith("}");
      var parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
      return parseSummary.publicContent ? buzzItem : undefined;
    } catch (e) {
      console.error("Error parsing buzz content:", e);
      return undefined;
    }
  }, [buzzItem]);
  var isLiked = (0,react.useMemo)(function () {
    if (!buzzItem || !user) return false;
    return likes.includes(user.metaid);
  }, [likes]);
  var isDonatedUser = (0,react.useMemo)(function () {
    if (!buzzItem || !user) return false;
    return donates.includes(user.metaid);
  }, [donates]);
  var handleLike = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var isPass, pinId, likeEntity, likeRes, _likeEntity, _likeRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (isLogin) {
              _context2.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
            return _context2.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return");
          case 6:
            pinId = buzzItem.id;
            if (!isLiked) {
              _context2.next = 10;
              break;
            }
            message/* default */.ZP.error("You have already liked that buzz...");
            return _context2.abrupt("return");
          case 10:
            setHandleLikeLoading(true);
            _context2.prev = 11;
            if (!(chain === "btc")) {
              _context2.next = 22;
              break;
            }
            _context2.next = 15;
            return btcConnector.use("like");
          case 15:
            likeEntity = _context2.sent;
            _context2.next = 18;
            return likeEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  isLike: "1",
                  likeTo: pinId
                }),
                flag: config/* FLAG */.BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/paylike")
              }],
              options: {
                noBroadcast: "no",
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                service: fetchServiceFee("like_service_fee_amount", "BTC")
              }
            });
          case 18:
            likeRes = _context2.sent;
            if (!(0,isNil/* default */.Z)(likeRes === null || likeRes === void 0 ? void 0 : likeRes.revealTxIds[0])) {
              setLikes([].concat(toConsumableArray_default()(likes), [user.metaid]));
              // await sleep(5000);
              // queryClient.invalidateQueries({ queryKey: ['homebuzzesnew'] });
              // queryClient.invalidateQueries({ queryKey: ['payLike', buzzItem!.id] });

              message/* default */.ZP.success("like buzz successfully");
            }
            _context2.next = 29;
            break;
          case 22:
            _context2.next = 24;
            return mvcConnector.use("like");
          case 24:
            _likeEntity = _context2.sent;
            _context2.next = 27;
            return _likeEntity.create({
              data: {
                body: JSON.stringify({
                  isLike: "1",
                  likeTo: pinId
                }),
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/paylike")
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: "like buzz",
                service: fetchServiceFee("like_service_fee_amount", "MVC")
                // feeRate: Number(mvcFeeRate),
              }
            });
          case 27:
            _likeRes = _context2.sent;
            if (!(0,isNil/* default */.Z)(_likeRes === null || _likeRes === void 0 ? void 0 : _likeRes.txid)) {
              // await sleep(8000);
              // refetch && refetch()
              // queryClient.invalidateQueries({ queryKey: ['homebuzzesnew'] })
              // queryClient.invalidateQueries({
              //     queryKey: ['payLike', buzzItem!.id],
              // })
              // await sleep(5000);
              setLikes([].concat(toConsumableArray_default()(likes), [user.metaid]));
              message/* default */.ZP.success("like buzz successfully");
            }
          case 29:
            _context2.next = 37;
            break;
          case 31:
            _context2.prev = 31;
            _context2.t0 = _context2["catch"](11);
            console.log("error", _context2.t0);
            errorMessage = (_message = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _message !== void 0 ? _message : _context2.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes("Cannot read properties of undefined") ? "User Canceled" : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
          case 37:
            setHandleLikeLoading(false);
          case 38:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[11, 31]]);
    }));
    return function handleLike() {
      return _ref3.apply(this, arguments);
    };
  }();
  var quotePinId = (0,react.useMemo)(function () {
    if (isForward) return "";
    try {
      var _parseSummary$quotePi;
      var _summary = buzzItem.content;
      var isSummaryJson = _summary.startsWith("{") && _summary.endsWith("}");
      var parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
      return isSummaryJson && !(0,isEmpty/* default */.Z)((_parseSummary$quotePi = parseSummary === null || parseSummary === void 0 ? void 0 : parseSummary.quotePin) !== null && _parseSummary$quotePi !== void 0 ? _parseSummary$quotePi : "") ? parseSummary.quotePin : "";
    } catch (e) {
      console.error("Error parsing buzz content:", e);
      return "";
    }
  }, [buzzItem, isForward]);
  var _useQuery = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(quotePinId),
      queryKey: ["buzzDetail", quotePinId],
      queryFn: function queryFn() {
        return (0,api/* fetchBuzzDetail */.uq)({
          pinId: quotePinId
        });
      }
    }),
    isQuoteLoading = _useQuery.isLoading,
    quoteDetailData = _useQuery.data;
  var _useQuery2 = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id),
      queryKey: ["buzzAccessControl", payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id],
      queryFn: function queryFn() {
        return (0,api/* getControlByContentPin */.up)({
          pinId: payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id
        });
      }
    }),
    accessControl = _useQuery2.data;
  var _useQuery3 = (0,useQuery/* useQuery */.a)({
      queryKey: ["buzzdecryptContent", buzzItem.id, chain, user.address],
      queryFn: function queryFn() {
        return (0,buzz/* decodePayBuzz */.ns)(buzzItem, manPubKey, isLogin);
      }
    }),
    decryptContent = _useQuery3.data,
    refetchDecrypt = _useQuery3.refetch,
    decryptLoading = _useQuery3.isLoading;
  (0,react.useEffect)(function () {
    // 检测内容是否溢出
    if (contentRef.current) {
      var _contentRef$current = contentRef.current,
        scrollHeight = _contentRef$current.scrollHeight,
        offsetHeight = _contentRef$current.offsetHeight;
      setIsOverflowing(scrollHeight > offsetHeight);
    }
  }, [contentRef.current]); // 当内容变化时重新检测

  var handleTranslate = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
      var encryptContent, res;
      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (decryptContent) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            setShowTrans(!showTrans);
            if (!isTranslated) {
              _context3.next = 6;
              break;
            }
            setIsTranslated(false);
            return _context3.abrupt("return");
          case 6:
            setIsTranslating(true);
            _context3.prev = 7;
            encryptContent = decryptContent.status === "purchased" ? decryptContent.encryptContent : "";
            _context3.next = 11;
            return (0,baidu_translate/* fetchTranlateResult */.v)({
              sourceText: "".concat(decryptContent.publicContent, "\n").concat(encryptContent),
              from: locale === "en-US" ? "zh" : "en",
              to: locale === "en-US" ? "en" : "zh"
            });
          case 11:
            res = _context3.sent;
            setTransResult(res.trans_result.map(function (item) {
              return item.dst;
            }));
            setIsTranslated(true);
            _context3.next = 19;
            break;
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](7);
            message/* default */.ZP.error("Translate Failed");
          case 19:
            setIsTranslating(false);
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[7, 16]]);
    }));
    return function handleTranslate() {
      return _ref4.apply(this, arguments);
    };
  }();
  var textContent = (0,react.useMemo)(function () {
    if (!decryptContent) return "";
    if (!showTrans || isTranslating) {
      var encryptContent = decryptContent.status === "purchased" ? decryptContent.encryptContent : "";
      return "".concat(decryptContent.publicContent).concat(decryptContent.publicContent && encryptContent ? "\n" : "").concat(encryptContent);
    } else {
      return transResult.join("\n");
    }
  }, [showTrans, transResult, decryptContent, isTranslating]);
  var handleDonate = /*#__PURE__*/function () {
    var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
      var isPass, donateEntity, donateRes, _donateEntity, _donateRes, _message2, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (isLogin) {
              _context4.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
            return _context4.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context4.next = 6;
              break;
            }
            return _context4.abrupt("return");
          case 6:
            if (!(!donateAmount || parseFloat(donateAmount) <= 0)) {
              _context4.next = 9;
              break;
            }
            message/* default */.ZP.error("Please enter a valid amount");
            return _context4.abrupt("return");
          case 9:
            setPaying(true);
            setDonateLoading(true);
            _context4.prev = 11;
            if (!(selectedChain === "btc")) {
              _context4.next = 24;
              break;
            }
            _context4.next = 15;
            return btcConnector.use("simpledonate");
          case 15:
            donateEntity = _context4.sent;
            _context4.next = 18;
            return donateEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: buzzItem.address,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: buzzItem.id,
                  message: donateMessage
                }),
                flag: config/* FLAG */.BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate")
              }],
              options: {
                noBroadcast: "no",
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                outputs: [{
                  address: buzzItem.address,
                  satoshis: new decimal/* default */.Z(donateAmount).times(1e8).toString()
                }],
                service: fetchServiceFee("donate_service_fee_amount", "BTC")
              }
            });
          case 18:
            donateRes = _context4.sent;
            if (!donateRes.status) {
              _context4.next = 21;
              break;
            }
            throw new Error(donateRes.status);
          case 21:
            if (!(0,isNil/* default */.Z)(donateRes === null || donateRes === void 0 ? void 0 : donateRes.revealTxIds[0])) {
              message/* default */.ZP.success("Donate successfully");
              setShowGift(false);
              setDonateAmount("");
              setDonateMessage("");
              // setIsDonated(true);
              setDonateCount(function (prev) {
                return prev + 1;
              });
              setDonates([].concat(toConsumableArray_default()(donates), [user.metaid]));
            }
            _context4.next = 35;
            break;
          case 24:
            if (!(selectedChain === "mvc")) {
              _context4.next = 34;
              break;
            }
            _context4.next = 27;
            return mvcConnector.use("simpledonate");
          case 27:
            _donateEntity = _context4.sent;
            _context4.next = 30;
            return _donateEntity.create({
              data: {
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: buzzItem.address,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: buzzItem.id,
                  message: donateMessage
                }),
                flag: config/* FLAG */.BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate")
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: "donate buzz",
                service: fetchServiceFee("donate_service_fee_amount", "MVC"),
                outputs: [{
                  address: buzzItem.address,
                  satoshis: new decimal/* default */.Z(donateAmount).times(1e8).toString()
                }]
              }
            });
          case 30:
            _donateRes = _context4.sent;
            if (!(0,isNil/* default */.Z)(_donateRes === null || _donateRes === void 0 ? void 0 : _donateRes.txid)) {
              message/* default */.ZP.success("Donate successfully");
              setShowGift(false);
              setDonateAmount("");
              setDonateMessage("");
              // setIsDonated(true);
              setDonates([].concat(toConsumableArray_default()(donates), [user.metaid]));
              setDonateCount(function (prev) {
                return prev + 1;
              });
            }
            _context4.next = 35;
            break;
          case 34:
            throw new Error("Donate not supported on this chain");
          case 35:
            _context4.next = 42;
            break;
          case 37:
            _context4.prev = 37;
            _context4.t0 = _context4["catch"](11);
            errorMessage = (_message2 = _context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message) !== null && _message2 !== void 0 ? _message2 : _context4.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage;
            message/* default */.ZP.error(toastMessage);
          case 42:
            setPaying(false);
            setDonateLoading(false);
          case 44:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[11, 37]]);
    }));
    return function handleDonate() {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
    className: "tweet",
    loading: loading || decryptLoading,
    style: {
      width: "100%",
      borderColor: isForward ? colorBorder : colorBorderSecondary
    },
    styles: {
      header: {
        // height: ,
        borderColor: isForward ? colorBorder : colorBorderSecondary
      },
      body: {
        paddingTop: 12
      }
    },
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        height: "100%",
        padding: '12px 0'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "avatar",
          style: {
            cursor: "pointer",
            position: "relative"
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
            src: (_currentUserInfoData$ = currentUserInfoData.data) === null || _currentUserInfoData$ === void 0 ? void 0 : _currentUserInfoData$.avatar,
            size: 40,
            onClick: function onClick(e) {
              e.stopPropagation();
              _umi_production_exports.history.push("/profile/".concat(buzzItem.creator));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Follow/* FollowIconComponent */._, {
            metaid: ((_currentUserInfoData$2 = currentUserInfoData.data) === null || _currentUserInfoData$2 === void 0 ? void 0 : _currentUserInfoData$2.metaid) || ""
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 8,
            cursor: "pointer"
          },
          onClick: function onClick(e) {
            e.stopPropagation();
            _umi_production_exports.history.push("/profile/".concat(buzzItem.creator));
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Text, {
            style: {
              fontSize: 14,
              lineHeight: 1
            },
            children: [" ", ((_currentUserInfoData$3 = currentUserInfoData.data) === null || _currentUserInfoData$3 === void 0 ? void 0 : _currentUserInfoData$3.name) || "Unnamed"]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: "flex",
              gap: 8,
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
              type: "secondary",
              style: {
                fontSize: 10,
                lineHeight: 1
              },
              children: (_currentUserInfoData$4 = currentUserInfoData.data) === null || _currentUserInfoData$4 === void 0 ? void 0 : _currentUserInfoData$4.metaid.slice(0, 8)
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(BuzzOrigin/* default */.Z, {
              host: buzzItem.host
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(IDCoinBadge, {
        address: buzzItem.address
      })]
    }),
    children: [buzzItem.blocked && /*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
      message: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "This Buzz has been blocked by the administrator."
      }),
      type: "warning",
      banner: true
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "content",
      style: {
        cursor: "pointer"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        onClick: function onClick() {
          handleClick ? handleClick() : _umi_production_exports.history.push("/buzz/".concat(buzzItem.id));
        },
        children: [textContent.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "text",
          ref: contentRef,
          style: {
            position: "relative",
            maxHeight: isExpanded ? "none" : 200,
            overflow: "hidden",
            transition: "max-height 0.3s ease"
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TextContent/* default */.Z, {
            textContent: textContent
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "link",
            style: {
              padding: 0
            },
            loading: isTranslating,
            onClick: function onClick(e) {
              e.stopPropagation();
              handleTranslate();
            },
            children: showTrans ? (0,utils/* formatMessage */.wv)("Show original content") : (0,utils/* formatMessage */.wv)("Translate")
          }), isOverflowing && !isExpanded && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              width: "100%",
              paddingTop: 78,
              backgroundImage: "linear-gradient(-180deg,".concat(colorBgBlur, " 0%,").concat(colorBgContainer, " 100%)"),
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              variant: "filled",
              color: "primary",
              size: "small",
              onClick: function onClick(e) {
                e.stopPropagation();
                setIsExpanded(true);
              },
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})
            })
          })]
        }), decryptContent && /*#__PURE__*/(0,jsx_runtime.jsx)(NFTGallery/* default */.Z, {
          nfts: decryptContent.nfts
        }), decryptContent && /*#__PURE__*/(0,jsx_runtime.jsx)(ImageGallery/* default */.Z, {
          decryptContent: decryptContent
        }), decryptContent && decryptContent.video[0] && /*#__PURE__*/(0,jsx_runtime.jsx)(Video/* default */.Z, {
          pid: decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.video[0]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(PayContent/* default */.Z, {
          decryptContent: decryptContent,
          accessControl: accessControl,
          refetchDecrypt: refetchDecrypt
        }), !(0,isEmpty/* default */.Z)(quotePinId) && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          style: {
            padding: 0,
            marginBottom: 12,
            boxShadow: "none"
          },
          variant: "borderless",
          styles: {
            body: {
              padding: 0
            }
          },
          loading: isQuoteLoading,
          children: (quoteDetailData === null || quoteDetailData === void 0 ? void 0 : quoteDetailData.data) && /*#__PURE__*/(0,jsx_runtime.jsx)(ForwardTweet, {
            buzzItem: objectSpread2_default()(objectSpread2_default()({}, quoteDetailData === null || quoteDetailData === void 0 ? void 0 : quoteDetailData.data.tweet), {}, {
              blocked: quoteDetailData === null || quoteDetailData === void 0 ? void 0 : quoteDetailData.data.blocked
            }),
            showActions: false
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            size: "small",
            type: "link",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.Z, {}),
            style: {
              fontSize: 12
            },
            onClick: function onClick(e) {
              e.stopPropagation();
              var link = buzzItem.chainName === "btc" ? "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(buzzItem.genesisTransaction) : "https://".concat(config/* curNetwork */.eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(buzzItem.genesisTransaction);
              window.open(link, "_blank");
            },
            children: buzzItem.genesisTransaction.slice(0, 8)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
            icon: buzzItem.genesisHeight === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(SyncOutlined/* default */.Z, {
              spin: true
            }) : null,
            bordered: false,
            color: buzzItem.chainName === "mvc" ? "blue" : "orange",
            children: buzzItem.chainName.toUpperCase()
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            type: "secondary",
            style: {
              fontSize: 12
            },
            children: dayjs_min_default().unix(buzzItem.timestamp).format("YYYY-MM-DD HH:mm:ss")
          })]
        })]
      }), showActions && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "actions",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageOutlined/* default */.Z, {}),
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
            var isPass;
            return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (isLogin) {
                    _context5.next = 3;
                    break;
                  }
                  message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
                  return _context5.abrupt("return");
                case 3:
                  isPass = checkUserSetting();
                  if (isPass) {
                    _context5.next = 6;
                    break;
                  }
                  return _context5.abrupt("return");
                case 6:
                  showComment ? setShowComment(false) : setShowComment(true);
                case 7:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          })),
          children: buzzItem.commentCount
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          loading: handleLikeLoading,
          onClick: handleLike,
          icon: isLiked ? /*#__PURE__*/(0,jsx_runtime.jsx)(HeartFilled/* default */.Z, {
            style: {
              color: "red"
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(HeartOutlined/* default */.Z, {}),
          children: likes.length
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          icon: isDonatedUser ? /*#__PURE__*/(0,jsx_runtime.jsx)(GiftFilled/* default */.Z, {
            style: {
              color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(GiftOutlined/* default */.Z, {}),
          loading: donateLoading,
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee6() {
            var isPass;
            return regeneratorRuntime_default()().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (isLogin) {
                    _context6.next = 3;
                    break;
                  }
                  message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
                  return _context6.abrupt("return");
                case 3:
                  isPass = checkUserSetting();
                  if (isPass) {
                    _context6.next = 6;
                    break;
                  }
                  return _context6.abrupt("return");
                case 6:
                  showGift ? setShowGift(false) : setShowGift(true);
                case 7:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          })),
          children: donateCount
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {}),
          onClick: function onClick() {
            if (!isLogin) {
              message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
              return;
            }
            var isPass = checkUserSetting();
            if (!isPass) return;
            showNewPost ? setShowNewPost(false) : setShowNewPost(true);
          },
          children: buzzItem.forwardCount
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Comment/* default */.Z, {
      tweetId: buzzItem.id,
      onClose: function onClose() {
        setShowComment(false);
      },
      show: showComment,
      refetch: refetch
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NewPost/* default */.Z, {
      show: showNewPost,
      onClose: function onClose() {
        setShowNewPost(false);
      },
      quotePin: buzzItem
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(DonateModal/* default */.Z, {
      show: showGift,
      onClose: function onClose() {
        setShowGift(false);
        setDonateAmount("");
        setDonateMessage("");
        setSelectedChain(chain);
      },
      isLegacy: (0,utils/* determineAddressInfo */.uY)(buzzItem.address) === 'p2pkh',
      userInfo: {
        avatar: (_currentUserInfoData$5 = currentUserInfoData.data) === null || _currentUserInfoData$5 === void 0 ? void 0 : _currentUserInfoData$5.avatar,
        name: (_currentUserInfoData$6 = currentUserInfoData.data) === null || _currentUserInfoData$6 === void 0 ? void 0 : _currentUserInfoData$6.name,
        metaid: (_currentUserInfoData$7 = currentUserInfoData.data) === null || _currentUserInfoData$7 === void 0 ? void 0 : _currentUserInfoData$7.metaid
      },
      balance: balance,
      chain: selectedChain,
      setChain: setSelectedChain,
      paying: paying,
      donateAmount: donateAmount,
      donateMessage: donateMessage,
      setDonateAmount: setDonateAmount,
      setDonateMessage: setDonateMessage,
      onDonate: handleDonate
    })]
  });
});
;// CONCATENATED MODULE: ./src/Components/Buzz/index.tsx


/* harmony default export */ var Components_Buzz = (function (_ref) {
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 20 : _ref$padding,
    _ref$reLoading = _ref.reLoading,
    reLoading = _ref$reLoading === void 0 ? false : _ref$reLoading,
    refetch = _ref.refetch,
    _ref$like = _ref.like,
    like = _ref$like === void 0 ? [] : _ref$like,
    handleClick = _ref.handleClick,
    _ref$donate = _ref.donate,
    donate = _ref$donate === void 0 ? [] : _ref$donate;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Details, {
    buzzItem: buzzItem,
    showActions: showActions,
    padding: padding,
    reLoading: reLoading,
    refetch: refetch,
    isForward: false,
    like: like,
    donate: donate,
    handleClick: handleClick
  });
});

/***/ }),

/***/ 79684:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Comment; }
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
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(93603);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(47467);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 17 modules
var typography = __webpack_require__(38021);
;// CONCATENATED MODULE: ./src/Components/UserInfo/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/UserInfo/index.tsx





/* harmony default export */ var UserInfo = (function (_ref) {
  var user = _ref.user;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "userInfo",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
      src: user.avatar
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "desc",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "name",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          children: user.name
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "metaid",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
          type: "secondary",
          children: [" MetaID:", user.metaid.slice(0, 8)]
        })
      })]
    })]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileImageOutlined.js + 1 modules
var FileImageOutlined = __webpack_require__(48155);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SmileOutlined.js + 1 modules
var SmileOutlined = __webpack_require__(3622);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
;// CONCATENATED MODULE: ./src/entities/comment.ts

var commentEntitySchema = {
  name: 'comment',
  nodeName: 'paycomment',
  path: '/protocols/paycomment',
  versions: [{
    version: 1,
    body: [{
      name: 'content',
      type: 'string'
    }, {
      name: 'contentType',
      type: 'string'
    }, {
      name: 'commentTo',
      type: 'string'
    }]
  }]
};
/* harmony default export */ var comment = ((/* unused pure expression or super */ null && (commentEntitySchema)));
var getCommentEntitySchemaWithCustomHost = function getCommentEntitySchemaWithCustomHost(host) {
  return objectSpread2_default()(objectSpread2_default()({}, commentEntitySchema), {}, {
    path: "".concat(host).concat(commentEntitySchema.path)
  });
};
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./node_modules/.pnpm/emoji-picker-react@4.13.2_react@18.3.1/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js + 1 modules
var emoji_picker_react_esm = __webpack_require__(60916);
;// CONCATENATED MODULE: ./src/Components/Comment/index.tsx


















var TextArea = input/* default */.Z.TextArea;
/* harmony default export */ var Comment = (function (_ref) {
  var show = _ref.show,
    _onClose = _ref.onClose,
    tweetId = _ref.tweetId;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    btcConnector = _useModel.btcConnector,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting,
    isLogin = _useModel.isLogin;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    showEmojiPicker = _useState2[0],
    setShowEmojiPicker = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    content = _useState4[0],
    setContent = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    isAdding = _useState6[0],
    setIsAdding = _useState6[1];
  var handleAddComment = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var isPass, finalBody, _showConf$host, createRes, _showConf$host2, Comment, _createRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (isLogin) {
              _context.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
            return _context.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            setIsAdding(true);
            _context.prev = 7;
            finalBody = {
              content: content,
              contentType: 'text/plain',
              commentTo: tweetId
            };
            console.log('finalBody', finalBody);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (!(chain === 'btc')) {
              _context.next = 18;
              break;
            }
            _context.next = 13;
            return btcConnector.inscribe({
              inscribeDataArray: [{
                operation: 'create',
                path: "".concat((_showConf$host = showConf === null || showConf === void 0 ? void 0 : showConf.host) !== null && _showConf$host !== void 0 ? _showConf$host : '', "/protocols/paycomment"),
                body: JSON.stringify(finalBody),
                contentType: 'text/plain;utf-8',
                flag: config/* FLAG */.BZ
              }],
              options: {
                noBroadcast: 'no',
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                service: fetchServiceFee('comment_service_fee_amount', 'BTC'),
                network: config/* curNetwork */.eM
              }
            });
          case 13:
            createRes = _context.sent;
            console.log('create res for inscribe', createRes);
            if (!(0,isNil/* default */.Z)(createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0])) {
              message/* default */.ZP.success('comment successfully');
              setContent('');
              _onClose({
                CreateMetaid: user.metaid,
                chainName: 'btc',
                commentNum: 0,
                content: finalBody.content,
                createAddress: user.address,
                likeNum: 0,
                pinId: (createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0]) + 'i0',
                timestamp: Math.floor(Date.now() / 1000),
                donateNum: 0,
                forwardNum: 0,
                likeAddress: []
              });
            }
            _context.next = 25;
            break;
          case 18:
            _context.next = 20;
            return mvcConnector.load(getCommentEntitySchemaWithCustomHost((_showConf$host2 = showConf === null || showConf === void 0 ? void 0 : showConf.host) !== null && _showConf$host2 !== void 0 ? _showConf$host2 : ''));
          case 20:
            Comment = _context.sent;
            _context.next = 23;
            return Comment.create({
              data: {
                body: JSON.stringify(finalBody)
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'create comment',
                service: fetchServiceFee('comment_service_fee_amount', 'MVC'),
                feeRate: Number(mvcFeeRate)
              }
            });
          case 23:
            _createRes = _context.sent;
            if (!(0,isNil/* default */.Z)(_createRes === null || _createRes === void 0 ? void 0 : _createRes.txid)) {
              message/* default */.ZP.success('comment successfully');
              setContent('');
              _onClose({
                CreateMetaid: user.metaid,
                chainName: 'mvc',
                commentNum: 0,
                content: finalBody.content,
                createAddress: user.address,
                likeNum: 0,
                pinId: (_createRes === null || _createRes === void 0 ? void 0 : _createRes.txid) + 'i0',
                timestamp: Math.floor(Date.now() / 1000),
                donateNum: 0,
                forwardNum: 0,
                likeAddress: []
              });
            }
          case 25:
            _context.next = 33;
            break;
          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](7);
            errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
            setIsAdding(false);
          case 33:
            setIsAdding(false);
          case 34:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 27]]);
    }));
    return function handleAddComment() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      onClose: function onClose() {
        return _onClose();
      },
      show: show,
      modalWidth: 600,
      closable: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserInfo, {
          user: user
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TextArea, {
          rows: 6,
          placeholder: (0,utils/* formatMessage */.wv)('Post your reply'),
          style: {
            marginTop: 24
          },
          value: content,
          onChange: function onChange(e) {
            setContent(e.target.value);
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            marginTop: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              disabled: true,
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(FileImageOutlined/* default */.Z, {
                style: {
                  color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                }
              }),
              type: "text"
            }), window.innerWidth > 768 && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              onClick: function onClick() {
                setShowEmojiPicker(true);
              },
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(SmileOutlined/* default */.Z, {
                style: {
                  color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                }
              }),
              type: "text"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            shape: "round",
            loading: isAdding,
            onClick: handleAddComment,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Comment"
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      onClose: function onClose() {
        setShowEmojiPicker(false);
      },
      show: showEmojiPicker,
      closable: true,
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "Select Emoji"
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(emoji_picker_react_esm/* default */.ZP, {
        onEmojiClick: function onEmojiClick(emoji) {
          setContent(function (prev) {
            return prev + emoji.emoji;
          });
        }
      })
    })]
  });
});

/***/ }),

/***/ 9126:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: function() { return /* binding */ CommentItem; },
  Z: function() { return /* binding */ CommentPanel; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 17 modules
var typography = __webpack_require__(38021);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(79063);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 3 modules
var list = __webpack_require__(17675);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(93603);
// EXTERNAL MODULE: ./src/Components/UserInfo/PendingUser.tsx
var PendingUser = __webpack_require__(69101);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LinkOutlined.js + 1 modules
var LinkOutlined = __webpack_require__(81707);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MessageOutlined.js + 1 modules
var MessageOutlined = __webpack_require__(16036);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/HeartFilled.js + 1 modules
var HeartFilled = __webpack_require__(43106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/HeartOutlined.js + 1 modules
var HeartOutlined = __webpack_require__(93342);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/GiftOutlined.js + 1 modules
var GiftOutlined = __webpack_require__(94427);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UploadOutlined.js + 1 modules
var UploadOutlined = __webpack_require__(15739);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(16483);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/Components/Comment/index.tsx + 3 modules
var Comment = __webpack_require__(79684);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(47467);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/select/index.js
var es_select = __webpack_require__(23533);
// EXTERNAL MODULE: ./node_modules/.pnpm/decimal.js@10.5.0/node_modules/decimal.js/decimal.mjs
var decimal = __webpack_require__(25688);
// EXTERNAL MODULE: ./src/assets/btc.png
var btc = __webpack_require__(33401);
// EXTERNAL MODULE: ./src/assets/mvc.png
var mvc = __webpack_require__(61133);
// EXTERNAL MODULE: ./src/utils/psbtBuild.ts
var psbtBuild = __webpack_require__(49105);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(32699);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/Donate/index.tsx


















/* harmony default export */ var Donate = (function (_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    callback = _ref.callback,
    pinId = _ref.pinId,
    donateAddress = _ref.donateAddress;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    chain = _useModel.chain,
    isLogin = _useModel.isLogin,
    checkUserSetting = _useModel.checkUserSetting,
    btcConnector = _useModel.btcConnector,
    mvcConnector = _useModel.mvcConnector,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee;
  var _useState = (0,react.useState)(''),
    _useState2 = slicedToArray_default()(_useState, 2),
    donateAmount = _useState2[0],
    setDonateAmount = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    donateMessage = _useState4[0],
    setDonateMessage = _useState4[1];
  var _useState5 = (0,react.useState)(0),
    _useState6 = slicedToArray_default()(_useState5, 2),
    balance = _useState6[0],
    setBalance = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = slicedToArray_default()(_useState7, 2),
    paying = _useState8[0],
    setPaying = _useState8[1];
  var _useState9 = (0,react.useState)((0,utils/* determineAddressInfo */.uY)(donateAddress) === 'p2pkh' ? chain : 'btc'),
    _useState10 = slicedToArray_default()(_useState9, 2),
    selectedChain = _useState10[0],
    setSelectedChain = _useState10[1];
  (0,react.useEffect)(function () {
    var fetchBalance = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var bal, _bal;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(isLogin && selectedChain === "btc")) {
                _context.next = 13;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return (0,psbtBuild/* getUtxoBalance */.xd)();
            case 4:
              bal = _context.sent;
              setBalance(bal);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Failed to fetch balance:", _context.t0);
            case 11:
              _context.next = 24;
              break;
            case 13:
              if (!(isLogin && selectedChain === "mvc")) {
                _context.next = 24;
                break;
              }
              _context.prev = 14;
              _context.next = 17;
              return (0,psbtBuild/* getMvcBalance */.eo)();
            case 17:
              _bal = _context.sent;
              setBalance(_bal);
              _context.next = 24;
              break;
            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](14);
              console.error("Failed to fetch balance:", _context.t1);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8], [14, 21]]);
      }));
      return function fetchBalance() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchBalance();
  }, [isLogin, selectedChain]);
  var isLegacy = (0,react.useMemo)(function () {
    return (0,utils/* determineAddressInfo */.uY)(donateAddress) === 'p2pkh';
  }, [donateAddress]);
  var onDonate = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var isPass, donateEntity, donateRes, _donateEntity, _donateRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (isLogin) {
              _context2.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
            return _context2.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return");
          case 6:
            if (!(!donateAmount || parseFloat(donateAmount) <= 0)) {
              _context2.next = 9;
              break;
            }
            message/* default */.ZP.error("Please enter a valid amount");
            return _context2.abrupt("return");
          case 9:
            setPaying(true);
            _context2.prev = 10;
            if (!(selectedChain === "btc")) {
              _context2.next = 23;
              break;
            }
            _context2.next = 14;
            return btcConnector.use("simpledonate");
          case 14:
            donateEntity = _context2.sent;
            _context2.next = 17;
            return donateEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: donateAddress,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: pinId,
                  message: donateMessage
                }),
                flag: config/* FLAG */.BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate")
              }],
              options: {
                noBroadcast: "no",
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                outputs: [{
                  address: donateAddress,
                  satoshis: new decimal/* default */.Z(donateAmount).times(1e8).toString()
                }],
                service: fetchServiceFee("donate_service_fee_amount", "BTC")
              }
            });
          case 17:
            donateRes = _context2.sent;
            if (!donateRes.status) {
              _context2.next = 20;
              break;
            }
            throw new Error(donateRes.status);
          case 20:
            if (!(0,lodash.isNil)(donateRes === null || donateRes === void 0 ? void 0 : donateRes.revealTxIds[0])) {
              message/* default */.ZP.success("Donate successfully");
              onClose();
              callback && callback();
              setDonateAmount("");
              setDonateMessage("");
            }
            _context2.next = 37;
            break;
          case 23:
            if (!(selectedChain === "mvc")) {
              _context2.next = 36;
              break;
            }
            console.log(chain);
            _context2.next = 27;
            return mvcConnector.use("simpledonate");
          case 27:
            _donateEntity = _context2.sent;
            console.log(_donateEntity, 'donateEntity');
            _context2.next = 31;
            return _donateEntity.create({
              data: {
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: donateAddress,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: pinId,
                  message: donateMessage
                }),
                flag: config/* FLAG */.BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate")
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: "donate buzz",
                service: fetchServiceFee("donate_service_fee_amount", "MVC"),
                outputs: [{
                  address: donateAddress,
                  satoshis: new decimal/* default */.Z(donateAmount).times(1e8).toString()
                }]
              }
            });
          case 31:
            _donateRes = _context2.sent;
            console.log(_donateRes, 'donateRes');
            if (!(0,lodash.isNil)(_donateRes === null || _donateRes === void 0 ? void 0 : _donateRes.txid)) {
              message/* default */.ZP.success("Donate successfully");
              onClose();
              callback && callback();
              setDonateAmount("");
              setDonateMessage("");
            }
            _context2.next = 37;
            break;
          case 36:
            throw new Error("Donate not supported on this chain");
          case 37:
            _context2.next = 44;
            break;
          case 39:
            _context2.prev = 39;
            _context2.t0 = _context2["catch"](10);
            errorMessage = (_message = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _message !== void 0 ? _message : _context2.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage;
            message/* default */.ZP.error(toastMessage);
          case 44:
            setPaying(false);
          case 45:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[10, 39]]);
    }));
    return function onDonate() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponPopup/* default */.Z, {
    show: show,
    bodyStyle: {
      padding: 40
    },
    onClose: onClose,
    closable: true,
    modalWidth: 680,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
      address: donateAddress
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        width: "100%",
        marginTop: 12
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          position: "relative"
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
          level: 4,
          style: {
            margin: "0 0 16px 0",
            fontSize: 16,
            fontWeight: 600
          },
          children: "Reward amount"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            position: "absolute",
            right: 0,
            top: 0,
            color: "rgba(0, 0, 0, 0.45)",
            fontSize: 14
          },
          children: ["Availabile ", new decimal/* default */.Z(balance).div(1e8).toFixed(8)]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            width: "100%",
            gap: "12px",
            padding: "16px",
            marginBottom: "32px",
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            maxWidth: "100%",
            boxSizing: "border-box"
          },
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              flex: "1 1 0%",
              minWidth: 0,
              overflow: "hidden"
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
              placeholder: "Enter amount",
              value: donateAmount,
              onChange: function onChange(e) {
                return setDonateAmount(e.target.value);
              },
              style: {
                border: "none",
                boxShadow: "none",
                fontSize: 16,
                padding: 0,
                color: "rgba(0, 0, 0, 0.88)",
                width: "100%"
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#F5F5F5",
              padding: "4px 12px",
              borderRadius: "20px"
            },
            children: isLegacy ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
              value: selectedChain,
              onChange: function onChange(value) {
                return setSelectedChain(value);
              },
              style: {
                width: 100
              },
              options: [{
                value: 'btc',
                label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                    src: btc,
                    alt: "BTC",
                    width: 20,
                    height: 20
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    children: "BTC"
                  })]
                })
              }, {
                value: 'mvc',
                label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                    src: mvc,
                    alt: "MVC",
                    width: 20,
                    height: 20
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    children: "MVC"
                  })]
                })
              }],
              variant: "borderless",
              dropdownStyle: {
                minWidth: 120
              }
            }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                src: btc,
                alt: "BTC",
                width: 20,
                height: 20,
                style: {
                  flexShrink: 0
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                style: {
                  fontSize: 14,
                  margin: 0,
                  color: "rgba(0, 0, 0, 0.88)"
                },
                children: "BTC"
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
          level: 4,
          style: {
            margin: "24px 0 16px 0",
            fontSize: 16,
            fontWeight: 600
          },
          children: "Message"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            width: "100%",
            padding: "16px",
            marginBottom: "32px",
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            maxWidth: "100%",
            boxSizing: "border-box"
          },
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z.TextArea, {
            placeholder: "Enter message",
            value: donateMessage,
            onChange: function onChange(e) {
              return setDonateMessage(e.target.value);
            },
            style: {
              border: "none",
              boxShadow: "none",
              fontSize: 16,
              padding: 0,
              color: "rgba(0, 0, 0, 0.88)",
              width: "100%",
              resize: "none"
            },
            autoSize: {
              minRows: 2,
              maxRows: 4
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center"
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            block: true,
            size: "large",
            shape: "round",
            loading: paying,
            onClick: onDonate,
            style: {
              width: "220px",
              height: "52px",
              background: "linear-gradient(270deg, #F824DA 0%, #FF5815 100%)",
              border: "none",
              fontSize: 16,
              fontWeight: 600,
              color: "#fff"
            },
            children: "Confirm"
          })
        })]
      })
    })]
  });
});
// EXTERNAL MODULE: ./src/Components/NewPost/index.tsx + 2 modules
var NewPost = __webpack_require__(4457);
;// CONCATENATED MODULE: ./src/Components/CommentPanel/index.tsx





















var CommentItem = function CommentItem(_ref) {
  var _item$likeAddress, _item$pinId;
  var item = _ref.item,
    level = _ref.level;
  var _theme$useToken = theme/* default */.Z.useToken(),
    colorFillAlter = _theme$useToken.token.colorFillAlter;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    btcConnector = _useModel.btcConnector,
    mvcConnector = _useModel.mvcConnector,
    isLogin = _useModel.isLogin,
    chain = _useModel.chain,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    showDonate = _useState2[0],
    setShowDonate = _useState2[1];
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee;
  var _useState3 = (0,react.useState)(item.likeNum),
    _useState4 = slicedToArray_default()(_useState3, 2),
    likeCount = _useState4[0],
    setLikeCount = _useState4[1];
  var _useState5 = (0,react.useState)(item.donateNum),
    _useState6 = slicedToArray_default()(_useState5, 2),
    donateCount = _useState6[0],
    setDonateCount = _useState6[1];
  var _useState7 = (0,react.useState)((_item$likeAddress = item.likeAddress) !== null && _item$likeAddress !== void 0 ? _item$likeAddress : []),
    _useState8 = slicedToArray_default()(_useState7, 2),
    likeAddress = _useState8[0],
    setLikeAddress = _useState8[1];
  var _useState9 = (0,react.useState)(item.forwardNum),
    _useState10 = slicedToArray_default()(_useState9, 2),
    forwardCount = _useState10[0],
    setForwardCount = _useState10[1];
  var _useState11 = (0,react.useState)(item.commentNum),
    _useState12 = slicedToArray_default()(_useState11, 2),
    commentCount = _useState12[0],
    setCommentCount = _useState12[1];
  var _useState13 = (0,react.useState)(false),
    _useState14 = slicedToArray_default()(_useState13, 2),
    handleLikeLoading = _useState14[0],
    setHandleLikeLoading = _useState14[1];
  var _useState15 = (0,react.useState)(false),
    _useState16 = slicedToArray_default()(_useState15, 2),
    showChildComment = _useState16[0],
    setShowChildComment = _useState16[1];
  var _useState17 = (0,react.useState)([]),
    _useState18 = slicedToArray_default()(_useState17, 2),
    childComment = _useState18[0],
    setChildComment = _useState18[1];
  var _useState19 = (0,react.useState)(false),
    _useState20 = slicedToArray_default()(_useState19, 2),
    showComment = _useState20[0],
    setShowComment = _useState20[1];
  var _useState21 = (0,react.useState)(false),
    _useState22 = slicedToArray_default()(_useState21, 2),
    loading = _useState22[0],
    setLoading = _useState22[1];
  var _useState23 = (0,react.useState)(false),
    _useState24 = slicedToArray_default()(_useState23, 2),
    showNewPost = _useState24[0],
    setShowNewPost = _useState24[1];
  var handleLike = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var pinId, likeEntity, likeRes, _likeEntity, _likeRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (isLogin) {
              _context.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
            return _context.abrupt("return");
          case 3:
            if (!isLiked) {
              _context.next = 6;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("You have already liked this comment"));
            return _context.abrupt("return");
          case 6:
            pinId = item.pinId;
            setHandleLikeLoading(true);
            _context.prev = 8;
            if (!(chain === "btc")) {
              _context.next = 19;
              break;
            }
            _context.next = 12;
            return btcConnector.use("like");
          case 12:
            likeEntity = _context.sent;
            _context.next = 15;
            return likeEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  isLike: "1",
                  likeTo: pinId
                }),
                flag: config/* FLAG */.BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/paylike")
              }],
              options: {
                noBroadcast: "no",
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                service: fetchServiceFee("like_service_fee_amount", "BTC")
              }
            });
          case 15:
            likeRes = _context.sent;
            if (!(0,isNil/* default */.Z)(likeRes === null || likeRes === void 0 ? void 0 : likeRes.revealTxIds[0])) {
              setLikeCount(likeCount + 1);
              setLikeAddress([].concat(toConsumableArray_default()(likeAddress), [user.address]));
              message/* default */.ZP.success("like buzz successfully");
            }
            _context.next = 27;
            break;
          case 19:
            _context.next = 21;
            return mvcConnector.use("like");
          case 21:
            _likeEntity = _context.sent;
            _context.next = 24;
            return _likeEntity.create({
              data: {
                body: JSON.stringify({
                  isLike: "1",
                  likeTo: pinId
                }),
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/paylike")
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: "like buzz",
                service: fetchServiceFee("like_service_fee_amount", "MVC"),
                feeRate: Number(mvcFeeRate)
              }
            });
          case 24:
            _likeRes = _context.sent;
            console.log("likeRes", _likeRes);
            if (!(0,isNil/* default */.Z)(_likeRes === null || _likeRes === void 0 ? void 0 : _likeRes.txid)) {
              setLikeCount(likeCount + 1);
              setLikeAddress([].concat(toConsumableArray_default()(likeAddress), [user.address]));
              message/* default */.ZP.success("like buzz successfully");
            }
          case 27:
            _context.next = 35;
            break;
          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](8);
            console.log("error", _context.t0);
            errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes("Cannot read properties of undefined") ? "User Canceled" : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
          case 35:
            setHandleLikeLoading(false);
          case 36:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[8, 29]]);
    }));
    return function handleLike() {
      return _ref2.apply(this, arguments);
    };
  }();
  var loadChildComment = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var _commentRes$data;
      var commentRes, _commentRes$data$comm, list, commentSet;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setLoading(true);
            _context2.next = 3;
            return (0,api/* fetchComments */.tH)({
              pinId: item.pinId
            });
          case 3:
            commentRes = _context2.sent;
            if (commentRes && (_commentRes$data = commentRes.data) !== null && _commentRes$data !== void 0 && _commentRes$data.comments) {
              list = [].concat(toConsumableArray_default()((_commentRes$data$comm = commentRes.data.comments) !== null && _commentRes$data$comm !== void 0 ? _commentRes$data$comm : []), toConsumableArray_default()(childComment));
              commentSet = new Set();
              list = list.filter(function (comment) {
                if (commentSet.has(comment.pinId)) {
                  return false;
                }
                commentSet.add(comment.pinId);
                return true;
              });
              setChildComment(list);
              setShowChildComment(true);
            }
            setLoading(false);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function loadChildComment() {
      return _ref3.apply(this, arguments);
    };
  }();
  var isLiked = (0,react.useMemo)(function () {
    return likeAddress.includes(user.address);
  }, [likeAddress, user.address]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
      address: item.createAddress
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        paddingLeft: 48,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        marginTop: 16
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
        children: item === null || item === void 0 ? void 0 : item.content
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          size: "small",
          type: "link",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.Z, {}),
          style: {
            fontSize: 12
          },
          onClick: function onClick(e) {
            e.stopPropagation();
            var link = item.chainName === "btc" ? "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(item.pinId) : "https://".concat(config/* curNetwork */.eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(item.pinId.slice(0, item.pinId.length - 2));
            window.open(link, "_blank");
          },
          children: item.pinId.slice(0, 8)
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
          bordered: false,
          color: item.chainName === "mvc" ? "blue" : "orange",
          children: item.chainName.toUpperCase()
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          type: "secondary",
          style: {
            fontSize: 12
          },
          children: dayjs_min_default().unix(item.timestamp).format("YYYY-MM-DD HH:mm:ss")
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageOutlined/* default */.Z, {}),
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
            return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (isLogin) {
                    _context3.next = 3;
                    break;
                  }
                  message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
                  return _context3.abrupt("return");
                case 3:
                  setShowComment(true);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })),
          children: commentCount
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          loading: handleLikeLoading,
          onClick: handleLike,
          icon: isLiked ? /*#__PURE__*/(0,jsx_runtime.jsx)(HeartFilled/* default */.Z, {
            style: {
              color: "red"
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(HeartOutlined/* default */.Z, {}),
          children: likeCount
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(GiftOutlined/* default */.Z, {}),
          onClick: function onClick() {
            return setShowDonate(true);
          },
          children: donateCount
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {}),
          onClick: function onClick() {
            setShowNewPost(true);
          },
          children: forwardCount
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
        style: {
          margin: '8px 0'
        }
      }), commentCount > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [showChildComment && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: level < 1 ? /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
            itemLayout: "horizontal",
            dataSource: childComment !== null && childComment !== void 0 ? childComment : [],
            renderItem: function renderItem(item) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(CommentItem, {
                item: item,
                level: level + 1
              }, item.pinId);
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponPopup/* default */.Z, {
            title: "Replies",
            onClose: function onClose() {
              setShowChildComment(false);
              setChildComment([]);
            },
            show: showChildComment && level >= 1,
            modalWidth: 680,
            bodyStyle: {
              padding: 24
            },
            closable: true,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
                address: item.createAddress
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  paddingLeft: 48,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  marginTop: 16
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                  children: item === null || item === void 0 ? void 0 : item.content
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                    size: "small",
                    type: "link",
                    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.Z, {}),
                    style: {
                      fontSize: 12
                    },
                    onClick: function onClick(e) {
                      e.stopPropagation();
                      var link = item.chainName === "btc" ? "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(item.pinId) : "https://".concat(config/* curNetwork */.eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(item.pinId.slice(0, item.pinId.length - 2));
                      window.open(link, "_blank");
                    },
                    children: item.pinId.slice(0, 8)
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
                    bordered: false,
                    color: item.chainName === "mvc" ? "blue" : "orange",
                    children: item.chainName.toUpperCase()
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                    type: "secondary",
                    style: {
                      fontSize: 12
                    },
                    children: dayjs_min_default().unix(item.timestamp).format("YYYY-MM-DD HH:mm:ss")
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    justifyContent: 'space-between'
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                    type: "text",
                    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageOutlined/* default */.Z, {}),
                    onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
                      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                          case 0:
                            if (isLogin) {
                              _context4.next = 3;
                              break;
                            }
                            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
                            return _context4.abrupt("return");
                          case 3:
                            setShowComment(true);
                          case 4:
                          case "end":
                            return _context4.stop();
                        }
                      }, _callee4);
                    })),
                    children: commentCount
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                    type: "text",
                    loading: handleLikeLoading,
                    onClick: handleLike,
                    icon: isLiked ? /*#__PURE__*/(0,jsx_runtime.jsx)(HeartFilled/* default */.Z, {
                      style: {
                        color: "red"
                      }
                    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(HeartOutlined/* default */.Z, {}),
                    children: likeCount
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                    type: "text",
                    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(GiftOutlined/* default */.Z, {}),
                    onClick: function onClick() {
                      return setShowDonate(true);
                    },
                    children: donateCount
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                    type: "text",
                    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {}),
                    onClick: function onClick() {
                      setShowNewPost(true);
                    },
                    children: forwardCount
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
              orientation: "left",
              children: "All Replies"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
              itemLayout: "horizontal",
              dataSource: childComment !== null && childComment !== void 0 ? childComment : [],
              renderItem: function renderItem(item) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(CommentItem, {
                  item: item,
                  level: level + 1
                }, item.pinId);
              }
            })]
          })
        }), commentCount - childComment.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.ZP, {
          type: "link",
          onClick: loadChildComment,
          loading: loading,
          children: ["View all Reply  (", commentCount - childComment.length, ")"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Comment/* default */.Z, {
      tweetId: (_item$pinId = item.pinId) !== null && _item$pinId !== void 0 ? _item$pinId : '',
      onClose: function onClose(mockComment) {
        setShowComment(false);
        if (mockComment) {
          setChildComment([].concat(toConsumableArray_default()(childComment), [mockComment]));
          setCommentCount(commentCount + 1);
          setShowChildComment(true);
        }
      },
      show: showComment
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Donate, {
      donateAddress: item.createAddress,
      show: showDonate,
      onClose: function onClose() {
        return setShowDonate(false);
      },
      pinId: item.pinId,
      callback: function callback() {
        setDonateCount(donateCount + 1);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NewPost/* default */.Z, {
      show: showNewPost,
      onClose: function onClose() {
        setShowNewPost(false);
      },
      quoteComment: item
    })]
  }, item.pinId);
};
/* harmony default export */ var CommentPanel = (function (_ref6) {
  var commentData = _ref6.commentData;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
      itemLayout: "horizontal",
      dataSource: commentData !== null && commentData !== void 0 ? commentData : [],
      renderItem: function renderItem(item) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(CommentItem, {
          item: item,
          level: 0
        }, item.pinId);
      }
    })
  });
});

/***/ }),

/***/ 4447:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: function() { return /* binding */ FollowButtonComponent; },
  _: function() { return /* binding */ FollowIconComponent; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
;// CONCATENATED MODULE: ./src/entities/follow.ts

var followEntitySchema = {
  name: "follow",
  nodeName: "follow",
  path: "/follow",
  versions: [{
    version: 1,
    body: [{
      name: "metaid",
      type: "string"
    }]
  }]
};
/* harmony default export */ var follow = (followEntitySchema);
var getFollowEntitySchemaWithCustomHost = function getFollowEntitySchemaWithCustomHost(host) {
  return objectSpread2_default()(objectSpread2_default()({}, followEntitySchema), {}, {
    path: "".concat(host).concat(followEntitySchema.path)
  });
};
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(24573);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(4692);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/PlusCircleFilled.js + 1 modules
var PlusCircleFilled = __webpack_require__(37769);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(93603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/Follow/index.tsx
















// Higher-order component to provide follow logic
var withFollow = function withFollow(WrappedComponent) {
  return function FollowComponent(props) {
    var metaid = props.metaid,
      useAssist = props.useAssist;
    var _useModel = (0,_umi_production_exports.useModel)('user'),
      followList = _useModel.followList,
      chain = _useModel.chain,
      btcConnector = _useModel.btcConnector,
      mvcConnector = _useModel.mvcConnector,
      user = _useModel.user,
      feeRate = _useModel.feeRate,
      mvcFeeRate = _useModel.mvcFeeRate,
      setFollowList = _useModel.setFollowList,
      fetchUserFollowingList = _useModel.fetchUserFollowingList,
      checkUserSetting = _useModel.checkUserSetting,
      isLogin = _useModel.isLogin;
    var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
      fetchServiceFee = _useModel2.fetchServiceFee,
      showConf = _useModel2.showConf,
      admin = _useModel2.admin;
    var _useState = (0,react.useState)(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];
    var followItem = (0,react.useMemo)(function () {
      return followList.find(function (item) {
        return item.metaid === metaid;
      });
    }, [followList, metaid]);
    var isFollowing = (0,react.useMemo)(function () {
      return followItem ? true : false;
    }, [followItem]);
    var handelFollow = /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var followRes, Follow, res, _message, errorMessage, toastMessage;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              if (!(chain === 'btc')) {
                _context.next = 9;
                break;
              }
              _context.next = 5;
              return btcConnector.inscribe({
                inscribeDataArray: [{
                  operation: 'create',
                  path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/follow"),
                  body: metaid,
                  contentType: 'text/plain;utf-8',
                  flag: config/* FLAG */.BZ
                }],
                options: {
                  noBroadcast: 'no',
                  feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                  service: fetchServiceFee('follow_service_fee_amount', 'BTC')
                }
              });
            case 5:
              followRes = _context.sent;
              if (!(0,isNil/* default */.Z)(followRes === null || followRes === void 0 ? void 0 : followRes.revealTxIds[0])) {
                setFollowList(function (prev) {
                  return [].concat(toConsumableArray_default()(prev), [{
                    metaid: metaid,
                    mempool: true
                  }]);
                });
                // await sleep(3000);
                // await fetchUserFollowingList()
                message/* default */.ZP.success('Follow successfully! Please wait for the transaction to be confirmed!');
              }
              _context.next = 17;
              break;
            case 9:
              _context.next = 11;
              return mvcConnector.load(getFollowEntitySchemaWithCustomHost((showConf === null || showConf === void 0 ? void 0 : showConf.host) || ''));
            case 11:
              Follow = _context.sent;
              _context.next = 14;
              return Follow.create({
                data: {
                  body: metaid
                },
                options: {
                  assistDomian: admin !== null && admin !== void 0 && admin.assist || useAssist ? config/* ASSIST_ENDPOINT */.FF : undefined,
                  network: config/* curNetwork */.eM,
                  signMessage: 'Follow user',
                  service: fetchServiceFee('follow_service_fee_amount', 'MVC'),
                  feeRate: Number(mvcFeeRate)
                }
              });
            case 14:
              res = _context.sent;
              console.log('create res for inscribe', res);
              if (!(0,isNil/* default */.Z)(res === null || res === void 0 ? void 0 : res.txid)) {
                setFollowList(function (prev) {
                  return [].concat(toConsumableArray_default()(prev), [{
                    metaid: metaid,
                    mempool: true
                  }]);
                });
                // await sleep(3000);
                // await fetchUserFollowingList()
                message/* default */.ZP.success('Follow successfully! Please wait for the transaction to be confirmed!');
              }
            case 17:
              _context.next = 25;
              break;
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](1);
              console.log('error', _context.t0);
              errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
              toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
              message/* default */.ZP.error(toastMessage);
            case 25:
              setLoading(false);
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 19]]);
      }));
      return function handelFollow() {
        return _ref.apply(this, arguments);
      };
    }();
    var handleUnfollow = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
        var followDetailData, unfollowRes, Follow, res, _message2, errorMessage, toastMessage;
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              _context2.prev = 1;
              _context2.next = 4;
              return (0,api/* fetchFollowDetailPin */.cF)({
                metaId: metaid,
                followerMetaId: user.metaid
              });
            case 4:
              followDetailData = _context2.sent;
              if (!(chain === 'btc')) {
                _context2.next = 17;
                break;
              }
              _context2.next = 8;
              return btcConnector.inscribe({
                inscribeDataArray: [{
                  operation: 'revoke',
                  path: "@".concat(followDetailData.followPinId),
                  contentType: 'text/plain;utf-8',
                  flag: config/* FLAG */.BZ
                }],
                options: {
                  noBroadcast: 'no',
                  feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                  service: fetchServiceFee('follow_service_fee_amount')
                  // service: {
                  //     address: getServiceAddress(),
                  //     satoshis: environment.service_satoshi,
                  // },
                  // network: environment.network,
                }
              });
            case 8:
              unfollowRes = _context2.sent;
              if ((0,isNil/* default */.Z)(unfollowRes === null || unfollowRes === void 0 ? void 0 : unfollowRes.revealTxIds[0])) {
                _context2.next = 15;
                break;
              }
              _context2.next = 12;
              return (0,utils/* sleep */._v)(5000);
            case 12:
              _context2.next = 14;
              return fetchUserFollowingList();
            case 14:
              // await sleep(5000);
              message/* default */.ZP.success('Unfollow successful! Please wait for the transaction to be confirmed.');
            case 15:
              _context2.next = 29;
              break;
            case 17:
              _context2.next = 19;
              return mvcConnector.load(follow);
            case 19:
              Follow = _context2.sent;
              _context2.next = 22;
              return Follow.create({
                data: {
                  // @ts-ignore
                  path: "@".concat(followDetailData.followPinId),
                  contentType: 'text/plain;utf-8',
                  operation: 'revoke'
                },
                options: {
                  network: config/* curNetwork */.eM,
                  signMessage: 'Unfollow user',
                  service: fetchServiceFee('follow_service_fee_amount', 'MVC'),
                  feeRate: Number(mvcFeeRate)
                }
              });
            case 22:
              res = _context2.sent;
              if ((0,isNil/* default */.Z)(res === null || res === void 0 ? void 0 : res.txid)) {
                _context2.next = 29;
                break;
              }
              _context2.next = 26;
              return (0,utils/* sleep */._v)(5000);
            case 26:
              _context2.next = 28;
              return fetchUserFollowingList();
            case 28:
              // await sleep(5000);
              message/* default */.ZP.success('Unfollow successful! Please wait for the transaction to be confirmed.');
            case 29:
              _context2.next = 37;
              break;
            case 31:
              _context2.prev = 31;
              _context2.t0 = _context2["catch"](1);
              console.log('error', _context2.t0);
              errorMessage = (_message2 = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _message2 !== void 0 ? _message2 : _context2.t0;
              toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
              message/* default */.ZP.error(toastMessage);
            case 37:
              setLoading(false);
            case 38:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 31]]);
      }));
      return function handleUnfollow() {
        return _ref2.apply(this, arguments);
      };
    }();
    var handleFollowToggle = /*#__PURE__*/function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
        var isPass;
        return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (isLogin) {
                _context3.next = 3;
                break;
              }
              message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
              return _context3.abrupt("return");
            case 3:
              isPass = checkUserSetting();
              if (isPass) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");
            case 6:
              if (isFollowing) {
                _context3.next = 11;
                break;
              }
              _context3.next = 9;
              return handelFollow();
            case 9:
              _context3.next = 13;
              break;
            case 11:
              _context3.next = 13;
              return handleUnfollow();
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function handleFollowToggle() {
        return _ref3.apply(this, arguments);
      };
    }();

    // Pass the follow state and toggle function to the wrapped component

    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: metaid === (user === null || user === void 0 ? void 0 : user.metaid) ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(WrappedComponent, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
        isFollowing: isFollowing,
        onFollowToggle: handleFollowToggle,
        loading: loading,
        mempool: followItem && Boolean(followItem.mempool) || false
      }))
    });
  };
};
var FollowIcon = function FollowIcon(_ref4) {
  var isFollowing = _ref4.isFollowing,
    onFollowToggle = _ref4.onFollowToggle,
    loading = _ref4.loading,
    mempool = _ref4.mempool;
  var _useModel3 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel3.showConf;
  var _theme$useToken = theme/* default */.Z.useToken(),
    colorBgBase = _theme$useToken.token.colorBgBase;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    onClick: function onClick(e) {
      e.preventDefault();
      onFollowToggle && onFollowToggle();
    },
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      background: colorBgBase,
      borderRadius: '50%',
      border: "1px solid ".concat(colorBgBase),
      boxSizing: 'border-box',
      width: 17,
      height: 17,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    children: loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {
      style: {
        color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
      },
      size: 16
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: isFollowing ? mempool ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleFilled/* default */.Z, {
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        size: 16,
        style: {
          color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor,
          cursor: 'not-allowed'
        }
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleFilled/* default */.Z, {
        size: 16,
        style: {
          color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
        }
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(PlusCircleFilled/* default */.Z, {
        size: 16,
        style: {
          color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
        }
      })
    })
  });
};
var FollowButtonIcon = function FollowButtonIcon(_ref5) {
  var isFollowing = _ref5.isFollowing,
    onFollowToggle = _ref5.onFollowToggle,
    loading = _ref5.loading,
    mempool = _ref5.mempool,
    _ref5$size = _ref5.size,
    size = _ref5$size === void 0 ? 'middle' : _ref5$size;
  var _useModel4 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel4.showConf;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
    onClick: function onClick(e) {
      e.preventDefault();
      onFollowToggle && onFollowToggle();
    },
    style: {
      color: showConf === null || showConf === void 0 ? void 0 : showConf.colorButton,
      background: showConf === null || showConf === void 0 ? void 0 : showConf.gradientColor
    },
    loading: loading,
    shape: "round",
    size: size,
    disabled: mempool,
    children: isFollowing ? mempool ? 'Followed' : 'Unfollow' : 'Follow'
  });
};
var FollowIconComponent = withFollow(FollowIcon);
var FollowButtonComponent = withFollow(FollowButtonIcon);


/***/ }),

/***/ 97691:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78488);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83734);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93603);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52676);






/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 40 : _ref$size,
    tick = _ref.tick,
    _ref$metadata = _ref.metadata,
    metadata = _ref$metadata === void 0 ? '' : _ref$metadata;
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_3__.useModel)('dashboard'),
    showConf = _useModel.showConf;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    err = _useState2[0],
    setErr = _useState2[1];
  var src = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (metadata && !err) {
      try {
        var data = JSON.parse(metadata);
        if (data.icon) {
          return data.icon.replace('metafile://', "https://man".concat(_config__WEBPACK_IMPORTED_MODULE_1__/* .curNetwork */ .eM === 'testnet' ? '-test' : '', ".metaid.io/content/"));
        }
        if (data.cover) {
          return data.cover.replace('metafile://', "https://man".concat(_config__WEBPACK_IMPORTED_MODULE_1__/* .curNetwork */ .eM === 'testnet' ? '-test' : '', ".metaid.io/content/"));
        }
      } catch (err) {
        return '';
      }
    }
    return '';
  }, [metadata, err]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    src: src ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: src,
      onError: function onError() {
        setErr(true);
      }
    }) : null,
    style: {
      background: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: size * 16 / 40,
      minWidth: size
    },
    size: size,
    children: tick && tick[0].toUpperCase()
  });
});

/***/ }),

/***/ 94436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10991);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62319);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38021);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86821);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9588);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79063);
/* harmony import */ var _Trans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57777);
/* harmony import */ var _assets_btc_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33401);
/* harmony import */ var _assets_mvc_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61133);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52676);








/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var chainNet = _ref.chainNet,
    setChainNet = _ref.setChainNet,
    BtcLabel = _ref.BtcLabel,
    MvcLabel = _ref.MvcLabel;
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.useToken(),
    colorFillAlter = _theme$useToken.token.colorFillAlter;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      span: 24,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Text, {
        strong: true,
        type: "secondary",
        children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          children: "Select Network"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      span: 24,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        gutter: [12, 12],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          md: 12,
          xs: 24,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
            onClick: function onClick() {
              setChainNet('btc');
            },
            style: {
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: colorFillAlter
            },
            block: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 20
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: _assets_btc_png__WEBPACK_IMPORTED_MODULE_1__,
                style: {
                  height: 40,
                  width: 40
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Text, {
                children: "BTC Network"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
              checked: chainNet === 'btc'
            })]
          }), BtcLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              marginTop: 12
            },
            children: BtcLabel
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          md: 12,
          xs: 24,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
            onClick: function onClick() {
              setChainNet('mvc');
            },
            style: {
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: colorFillAlter
            },
            block: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 20
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: _assets_mvc_png__WEBPACK_IMPORTED_MODULE_2__,
                style: {
                  height: 40,
                  width: 40
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: 'column',
                  gap: 4
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Text, {
                  children: "MicrovisionChain"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  style: {
                    fontSize: 8,
                    width: 80,
                    lineHeight: 1.2,
                    textAlign: 'center'
                  },
                  color: "orange",
                  bordered: false,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
                    children: "Bitcoin Sidechain"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
              checked: chainNet === 'mvc'
            })]
          }), MvcLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              marginTop: 12
            },
            children: MvcLabel
          })]
        })]
      })
    })]
  });
});

/***/ }),

/***/ 4457:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ NewPost; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(82092);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(335);
var createForOfIteratorHelper_default = /*#__PURE__*/__webpack_require__.n(createForOfIteratorHelper);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(93603);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(47467);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/upload/index.js + 11 modules
var upload = __webpack_require__(39916);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(86821);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(62319);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 17 modules
var typography = __webpack_require__(38021);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/mentions/index.js + 1 modules
var es_mentions = __webpack_require__(87907);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(60541);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input-number/index.js + 2 modules
var input_number = __webpack_require__(18105);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/checkbox/index.js + 3 modules
var es_checkbox = __webpack_require__(42657);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/result/index.js + 4 modules
var result = __webpack_require__(15025);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UnlockOutlined.js + 1 modules
var UnlockOutlined = __webpack_require__(73646);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LockOutlined.js + 1 modules
var LockOutlined = __webpack_require__(31103);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(14258);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(24573);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js + 1 modules
var ExclamationCircleOutlined = __webpack_require__(20860);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__(66118);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileImageOutlined.js + 1 modules
var FileImageOutlined = __webpack_require__(48155);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SmileOutlined.js + 1 modules
var SmileOutlined = __webpack_require__(3622);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/VideoCameraOutlined.js + 1 modules
var VideoCameraOutlined = __webpack_require__(85347);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/utils/file.ts
var file = __webpack_require__(99915);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(86173);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 3 modules
var Buzz = __webpack_require__(3517);
// EXTERNAL MODULE: ./src/assets/btc.png
var btc = __webpack_require__(33401);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./src/utils/buzz.ts
var utils_buzz = __webpack_require__(518);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(10443);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 5 modules
var spin = __webpack_require__(55576);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/empty/index.js + 3 modules
var empty = __webpack_require__(47151);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/collapse/index.js + 3 modules
var collapse = __webpack_require__(8546);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(3642);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/NFTModal/index.tsx

















/* harmony default export */ var NFTModal = (function (_ref) {
  var onClose = _ref.onClose,
    show = _ref.show,
    nfts = _ref.nfts,
    setNFTs = _ref.setNFTs;
  var _useIntl = (0,_umi_production_exports.useIntl)(),
    formatMessage = _useIntl.formatMessage;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBorderSecondary = _theme$useToken$token.colorBorderSecondary,
    colorPrimary = _theme$useToken$token.colorPrimary;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    chain = _useModel.chain,
    btcConnector = _useModel.btcConnector,
    mvcConnector = _useModel.mvcConnector;
  var _useState = (0,react.useState)(chain),
    _useState2 = slicedToArray_default()(_useState, 2),
    chainNetwork = _useState2[0],
    setChainNetwork = _useState2[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['nfts', chainNetwork],
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
          var _collections$data;
          var address, collections, userNFTs, _iterator, _step, collection, _nfts;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                address = chainNetwork === 'btc' ? btcConnector.address : mvcConnector.address;
                _context.next = 3;
                return (0,api/* getUserNFTCollections */.SW)({
                  address: address,
                  cousor: 0,
                  size: 100
                });
              case 3:
                collections = _context.sent;
                userNFTs = [];
                if (!((_collections$data = collections.data) !== null && _collections$data !== void 0 && _collections$data.list)) {
                  _context.next = 25;
                  break;
                }
                _iterator = createForOfIteratorHelper_default()(collections.data.list);
                _context.prev = 7;
                _iterator.s();
              case 9:
                if ((_step = _iterator.n()).done) {
                  _context.next = 17;
                  break;
                }
                collection = _step.value;
                _context.next = 13;
                return (0,api/* getUserNFTCollectionItems */.G1)({
                  address: address,
                  cousor: 0,
                  size: 100,
                  pinId: collection.pinid
                });
              case 13:
                _nfts = _context.sent;
                userNFTs.push(objectSpread2_default()(objectSpread2_default()({}, collection), {}, {
                  items: _nfts.data.list.map(function (nft) {
                    try {
                      var img = JSON.parse(atob(nft.content)).attachment[0].content;
                      return objectSpread2_default()(objectSpread2_default()({}, nft), {}, {
                        previewImage: "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(img.replace('metafile://', ''))
                      });
                    } catch (e) {
                      return nft;
                    }
                  })
                }));
              case 15:
                _context.next = 9;
                break;
              case 17:
                _context.next = 22;
                break;
              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](7);
                _iterator.e(_context.t0);
              case 22:
                _context.prev = 22;
                _iterator.f();
                return _context.finish(22);
              case 25:
                return _context.abrupt("return", userNFTs);
              case 26:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[7, 19, 22, 25]]);
        }));
        function queryFn() {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    isLoading = _useQuery.isLoading,
    isFetching = _useQuery.isFetching,
    data = _useQuery.data;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponPopup/* default */.Z, {
    onClose: onClose,
    show: show,
    modalWidth: 640,
    closable: true,
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "My NFT"
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
      options: [{
        label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "Bitcoin"
        }),
        value: 'btc'
      }, {
        label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "MVC"
        }),
        value: 'mvc'
      }],
      value: chainNetwork,
      onChange: function onChange(value) {
        setChainNetwork(value);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
      theme: {
        components: {
          Collapse: {
            headerBg: 'transparent',
            colorBorder: colorBorderSecondary
          }
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
        spinning: isLoading || isFetching,
        children: [!isLoading && (data !== null && data !== void 0 ? data : []).length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
          direction: "vertical",
          style: {
            width: '100%',
            marginTop: 20
          },
          children: (data !== null && data !== void 0 ? data : []).map(function (item) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z, {
              style: {
                width: '100%'
              },
              defaultActiveKey: ['1'],
              expandIconPosition: "end",
              items: [{
                key: '1',
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                  children: item.name
                }),
                styles: {
                  body: {
                    borderTop: '0px solid transparent'
                  }
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 20
                  },
                  children: item.items.map(function (nft) {
                    var _find = nfts.find(function (_nft) {
                      return _nft.itemPinId === nft.itemPinId;
                    });
                    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      style: {
                        position: 'relative',
                        cursor: 'pointer',
                        borderRadius: 8,
                        border: _find ? "1px solid ".concat(colorPrimary) : 'none',
                        overflow: 'hidden'
                      },
                      onClick: function onClick(item) {
                        if (!_find && nfts.length >= 2) {
                          message/* default */.ZP.error(formatMessage({
                            id: 'You can only select 2 NFTs'
                          }));
                          return;
                        }
                        setNFTs(!_find ? [].concat(toConsumableArray_default()(nfts), [nft]) : nfts.filter(function (_nft) {
                          return _nft.itemPinId !== nft.itemPinId;
                        }));
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                        size: "small",
                        style: {
                          position: 'absolute',
                          top: 4,
                          right: 4
                        },
                        variant: "filled",
                        color: "primary",
                        shape: "circle",
                        icon: _find ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckOutlined/* default */.Z, {}) : ''
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                        src: nft.previewImage,
                        alt: nft.name,
                        style: {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }
                      })]
                    }, nft.itemPinId);
                  })
                })
              }]
            }, item.pinid);
          })
        })]
      })
    })]
  });
});
// EXTERNAL MODULE: ./src/Components/NewPost/SelectChain.tsx
var SelectChain = __webpack_require__(94436);
// EXTERNAL MODULE: ./src/entities/buzz.ts
var entities_buzz = __webpack_require__(95855);
// EXTERNAL MODULE: ./node_modules/.pnpm/idb@8.0.3/node_modules/idb/build/index.js
var build = __webpack_require__(22113);
;// CONCATENATED MODULE: ./src/utils/idb.ts



var DB_NAME = 'PostDraftDB';
var STORE_NAME = 'draft_files';
var dbPromise;
function getDB() {
  return _getDB.apply(this, arguments);
} // 批量保存上传项
function _getDB() {
  _getDB = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!dbPromise) {
            dbPromise = (0,build/* openDB */.X3)(DB_NAME, 1, {
              upgrade: function upgrade(db) {
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                  db.createObjectStore(STORE_NAME, {
                    keyPath: 'id'
                  });
                }
              }
            });
          }
          return _context.abrupt("return", dbPromise);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getDB.apply(this, arguments);
}
function saveUploadItemsToDraft(_x) {
  return _saveUploadItemsToDraft.apply(this, arguments);
}

// 获取所有文件
function _saveUploadItemsToDraft() {
  _saveUploadItemsToDraft = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(fileItems) {
    var db, tx;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!Array.isArray(fileItems) || fileItems.length === 0)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return");
        case 2:
          _context2.next = 4;
          return getDB();
        case 4:
          db = _context2.sent;
          tx = db.transaction(STORE_NAME, 'readwrite');
          fileItems.forEach(function (fileItem) {
            console.log('fileItem', fileItem);
            if (fileItem.file && fileItem.uid) {
              tx.store.put({
                id: fileItem.uid,
                file: fileItem.file,
                createdAt: Date.now()
              });
            }
          });
          _context2.next = 9;
          return tx.done;
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _saveUploadItemsToDraft.apply(this, arguments);
}
function getUploadDraftList() {
  return _getUploadDraftList.apply(this, arguments);
}

// 删除单个文件
function _getUploadDraftList() {
  _getUploadDraftList = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
    var db, all;
    return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return getDB();
        case 2:
          db = _context3.sent;
          _context3.next = 5;
          return db.getAll(STORE_NAME);
        case 5:
          all = _context3.sent;
          return _context3.abrupt("return", all.map(function (item) {
            return {
              uid: item.id,
              file: item.file,
              previewUrl: URL.createObjectURL(item.file),
              createdAt: item.createdAt
            };
          }));
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getUploadDraftList.apply(this, arguments);
}
function deleteDraftFile(_x2) {
  return _deleteDraftFile.apply(this, arguments);
}

// 清空所有
function _deleteDraftFile() {
  _deleteDraftFile = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(uid) {
    var db;
    return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return getDB();
        case 2:
          db = _context4.sent;
          _context4.next = 5;
          return db["delete"](STORE_NAME, uid);
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _deleteDraftFile.apply(this, arguments);
}
function clearDraftFiles() {
  return _clearDraftFiles.apply(this, arguments);
}
function _clearDraftFiles() {
  _clearDraftFiles = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
    var db;
    return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return getDB();
        case 2:
          db = _context5.sent;
          _context5.next = 5;
          return db.clear(STORE_NAME);
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _clearDraftFiles.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/Components/MRC20Icon/index.tsx
var MRC20Icon = __webpack_require__(97691);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js
var debounce = __webpack_require__(66292);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./src/Components/UserInfo/PendingUserAvatar.tsx
var PendingUserAvatar = __webpack_require__(35711);
// EXTERNAL MODULE: ./node_modules/.pnpm/emoji-picker-react@4.13.2_react@18.3.1/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js + 1 modules
var emoji_picker_react_esm = __webpack_require__(60916);
// EXTERNAL MODULE: ./src/utils/IDCoinStore.ts
var IDCoinStore = __webpack_require__(29577);
// EXTERNAL MODULE: ./src/Components/CommentPanel/index.tsx + 1 modules
var CommentPanel = __webpack_require__(9126);
;// CONCATENATED MODULE: ./src/Components/NewPost/index.tsx
/* provided dependency */ var Buffer = __webpack_require__(36379)["Buffer"];




































var TextArea = input/* default */.Z.TextArea;
var getBase64 = function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};
/* harmony default export */ var NewPost = (function (_ref) {
  var _IdCoin$deployerUserI;
  var show = _ref.show,
    _onClose = _ref.onClose,
    quotePin = _ref.quotePin,
    quoteComment = _ref.quoteComment;
  var isQuoted = !(0,isNil/* default */.Z)(quotePin) || !(0,isNil/* default */.Z)(quoteComment);
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    btcConnector = _useModel.btcConnector,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting,
    isLogin = _useModel.isLogin,
    setMockBuzz = _useModel.setMockBuzz;
  var _useState = (0,react.useState)(chain),
    _useState2 = slicedToArray_default()(_useState, 2),
    chainNet = _useState2[0],
    setChainNet = _useState2[1];
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee,
    manPubKey = _useModel2.manPubKey,
    admin = _useModel2.admin;
  var _useState3 = (0,react.useState)([]),
    _useState4 = slicedToArray_default()(_useState3, 2),
    images = _useState4[0],
    setImages = _useState4[1];
  var _useState5 = (0,react.useState)(),
    _useState6 = slicedToArray_default()(_useState5, 2),
    video = _useState6[0],
    _setVideo = _useState6[1];
  var _useState7 = (0,react.useState)(localStorage.getItem('tmp_content') || ''),
    _useState8 = slicedToArray_default()(_useState7, 2),
    content = _useState8[0],
    setContent = _useState8[1];
  var _useState9 = (0,react.useState)(''),
    _useState10 = slicedToArray_default()(_useState9, 2),
    encryptContent = _useState10[0],
    setEncryptContent = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = slicedToArray_default()(_useState11, 2),
    isAdding = _useState12[0],
    setIsAdding = _useState12[1];
  var queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
  var _useState13 = (0,react.useState)(false),
    _useState14 = slicedToArray_default()(_useState13, 2),
    lock = _useState14[0],
    setLock = _useState14[1];
  var _useState15 = (0,react.useState)('mrc20'),
    _useState16 = slicedToArray_default()(_useState15, 2),
    payType = _useState16[0],
    setPayType = _useState16[1];
  var _useState17 = (0,react.useState)(0.00001),
    _useState18 = slicedToArray_default()(_useState17, 2),
    payAmount = _useState18[0],
    setPayAmount = _useState18[1];
  var _useState19 = (0,react.useState)(1),
    _useState20 = slicedToArray_default()(_useState19, 2),
    payMrc20Amount = _useState20[0],
    setPayMrc20Amount = _useState20[1];
  var _useState21 = (0,react.useState)(''),
    _useState22 = slicedToArray_default()(_useState21, 2),
    holdTokenID = _useState22[0],
    setHoldTokenID = _useState22[1];
  var _useState23 = (0,react.useState)(),
    _useState24 = slicedToArray_default()(_useState23, 2),
    mrc20 = _useState24[0],
    setMrc20 = _useState24[1];
  var _useState25 = (0,react.useState)(''),
    _useState26 = slicedToArray_default()(_useState25, 2),
    checkTokenID = _useState26[0],
    setCheckTokenID = _useState26[1];
  var _useState27 = (0,react.useState)([]),
    _useState28 = slicedToArray_default()(_useState27, 2),
    encryptFiles = _useState28[0],
    setEncryptFiles = _useState28[1];
  var _useState29 = (0,react.useState)(false),
    _useState30 = slicedToArray_default()(_useState29, 2),
    showNFTModal = _useState30[0],
    setShowNFTModal = _useState30[1];
  var _useState31 = (0,react.useState)([]),
    _useState32 = slicedToArray_default()(_useState31, 2),
    nfts = _useState32[0],
    setNFTs = _useState32[1];
  var _useState33 = (0,react.useState)({}),
    _useState34 = slicedToArray_default()(_useState33, 2),
    mentions = _useState34[0],
    setMentions = _useState34[1];
  var _useState35 = (0,react.useState)(false),
    _useState36 = slicedToArray_default()(_useState35, 2),
    showEmojiPicker = _useState36[0],
    setShowEmojiPicker = _useState36[1];
  var _useState37 = (0,react.useState)(false),
    _useState38 = slicedToArray_default()(_useState37, 2),
    loading = _useState38[0],
    setLoading = _useState38[1];
  var _useState39 = (0,react.useState)([]),
    _useState40 = slicedToArray_default()(_useState39, 2),
    users = _useState40[0],
    setUsers = _useState40[1];
  var ref = (0,react.useRef)(null);
  var _useState41 = (0,react.useState)('content'),
    _useState42 = slicedToArray_default()(_useState41, 2),
    lastFocus = _useState42[0],
    setLastFocus = _useState42[1];
  var loadGithubUsers = function loadGithubUsers(key) {
    if (!key) {
      setUsers([]);
      return;
    }
    console.log(key, "key");
    IDCoinStore/* default */.ZP.getByTickPrefix(key.toUpperCase()).then(function (res) {
      setLoading(false);
      setUsers(res);
    });
  };
  var debounceLoadGithubUsers = (0,react.useCallback)(debounce_default()(loadGithubUsers, 800), []);
  var onSearch = function onSearch(search) {
    console.log('Search:', search);
    ref.current = search;
    setLoading(!!search);
    setUsers([]);
    debounceLoadGithubUsers(search);
  };

  // const setImages = (images: any[]) => {
  //     images ? localStorage.setItem('tmp_images', JSON.stringify(images)) : localStorage.removeItem('tmp_images');
  //     _setImages(images);
  // }

  // const setContent = (_content: string) => {

  //     _setContent(_content);

  // }

  var setVideo = function setVideo(video) {
    // video ? localStorage.setItem('tmp_video', JSON.stringify(video)) : localStorage.removeItem('tmp_video');
    _setVideo(video);
  };
  var handleBeforeUpload = function handleBeforeUpload(file) {
    var isImage = file.type.startsWith('image/');
    if (!isImage) {
      message/* default */.ZP.error('You can only upload image file!');
      return upload/* default */.Z.LIST_IGNORE;
    }
    var _checkImageSize = (0,utils/* checkImageSize */.O3)(file),
      _checkImageSize2 = slicedToArray_default()(_checkImageSize, 2),
      check = _checkImageSize2[0],
      msg = _checkImageSize2[1];
    if (!check) {
      message/* default */.ZP.error(msg);
      return upload/* default */.Z.LIST_IGNORE;
    }
    var previewUrl = URL.createObjectURL(file);
    setImages(function (prevImages) {
      return [].concat(toConsumableArray_default()(prevImages), [{
        file: file,
        previewUrl: previewUrl
      }]);
    });
    saveUploadItemsToDraft([].concat(toConsumableArray_default()(images), [{
      file: file,
      previewUrl: previewUrl
    }]).map(function (item) {
      return {
        uid: item.file.uid,
        file: item.file,
        previewUrl: item.previewUrl
      };
    }));
    return false;
  };
  var reset = function reset() {
    setContent('');
    setImages([]);
    setVideo(undefined);
    setEncryptContent('');
    setEncryptFiles([]);
    setNFTs([]);
    setLock(false);
    clearDraftFiles();
  };
  var handleVideoBeforeUpload = function handleVideoBeforeUpload(file) {
    var isVideo = file.type.startsWith('video/');
    if (!isVideo) {
      message/* default */.ZP.error('You can only upload video file!');
      return upload/* default */.Z.LIST_IGNORE;
    }
    if (file.size > 1024 * 1024 * 50) {
      message/* default */.ZP.error('The video size must be less than 50MB');
      return upload/* default */.Z.LIST_IGNORE;
    }
    var previewUrl = URL.createObjectURL(file);
    setVideo({
      file: file,
      previewUrl: previewUrl
    });
    return false;
  };
  var handleRemoveImage = function handleRemoveImage(index) {
    var _image$file;
    var image = images[index];
    setImages(function (prevImages) {
      return prevImages.filter(function (_, i) {
        return i !== index;
      });
    });
    deleteDraftFile(image.uid || ((_image$file = image.file) === null || _image$file === void 0 ? void 0 : _image$file.uid));
  };
  var handleRemoveVideo = function handleRemoveVideo() {
    setVideo(undefined);
  };
  var onCreateSubmit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var isPass, _mentions, _i, _Object$entries, _Object$entries$_i, key, value, _images;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (isLogin) {
              _context.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
            return _context.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            setIsAdding(true);
            _mentions = objectSpread2_default()({}, mentions);
            if (_mentions && Object.keys(_mentions).length > 0) {
              for (_i = 0, _Object$entries = Object.entries(_mentions); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = slicedToArray_default()(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                if (content.indexOf("@".concat(key, " ")) === -1) {
                  delete _mentions[key];
                }
              }
            }
            if (!(images.length !== 0)) {
              _context.next = 15;
              break;
            }
            _context.next = 12;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(images));
          case 12:
            _context.t0 = _context.sent;
            _context.next = 16;
            break;
          case 15:
            _context.t0 = [];
          case 16:
            _images = _context.t0;
            if (!lock) {
              _context.next = 21;
              break;
            }
            handleAddBuzzWhthLock(_mentions);
            _context.next = 23;
            break;
          case 21:
            _context.next = 23;
            return handleAddBuzz({
              content: content,
              mentions: _mentions,
              images: _images
            });
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onCreateSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['idCoin', user],
      enabled: Boolean(user && show),
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
          var address, ret, userInfo;
          return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return window.metaidwallet.btc.getAddress();
              case 2:
                address = _context2.sent;
                _context2.next = 5;
                return (0,api/* getDeployList */.By)({
                  address: address,
                  tickType: 'idcoins'
                });
              case 5:
                ret = _context2.sent;
                if (!(ret.data.length > 0)) {
                  _context2.next = 11;
                  break;
                }
                _context2.next = 9;
                return (0,api/* getUserInfo */.bG)({
                  address: address
                });
              case 9:
                userInfo = _context2.sent;
                return _context2.abrupt("return", objectSpread2_default()(objectSpread2_default()({}, ret.data[0]), {}, {
                  deployerUserInfo: userInfo
                }));
              case 11:
                return _context2.abrupt("return", undefined);
              case 12:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function queryFn() {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    isLoading = _useQuery.isLoading,
    IdCoin = _useQuery.data;
  var handleAddBuzz = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(buzz) {
      var buzzEntity, fileTransactions, TxMap, finalBody, _yield$postVideo, metafile, transactions, fileOptions, _iterator, _step, image, fileEntity, imageRes, _fileEntity, finalAttachMetafileUri, i, fileOption, _yield$_fileEntity$cr, _transactions, createRes, _showConf$host, _createRes2, _buzzEntity, _createRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setIsAdding(true);
            _context3.next = 3;
            return btcConnector.use('buzz');
          case 3:
            buzzEntity = _context3.sent;
            fileTransactions = [];
            TxMap = new Map();
            _context3.prev = 6;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            finalBody = {
              content: buzz.content,
              contentType: 'text/plain'
              // mentions: mentions || {}
            };
            if (!(video && chainNet === 'mvc')) {
              _context3.next = 16;
              break;
            }
            _context3.next = 11;
            return (0,utils_buzz/* postVideo */.At)(video.file, (showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', chainNet, btcConnector, mvcConnector, mvcFeeRate);
          case 11:
            _yield$postVideo = _context3.sent;
            metafile = _yield$postVideo.metafile;
            transactions = _yield$postVideo.transactions;
            fileTransactions = transactions;
            finalBody.attachments = [metafile];
            // let chunkTransactions: MvcTransaction[] = [];

            // const chunkSize = 1024 * 1024 * 0.2
            // const { chunks, chunkNumber, sha256, fileSize, dataType, name } = await processFile(video.file, chunkSize);
            // let chunkPids: string[] = [];
            // const chunkList = []
            // for (let i = 0; i < chunks.length; i++) {
            //     const { chunk, hash } = chunks[i];
            //     const metaidData: InscribeData = {
            //         operation: "create",
            //         body: chunk,
            //         path: `${showConf?.host || ''}/file/chunk/${hash}`,
            //         contentType: "metafile/chunk;binary",
            //         encoding: "base64",
            //         flag: "metaid",
            //     };
            //     if (chain === 'btc') {
            //         // todo
            //     } else {
            //         const serialAction = (i + 1) % 2 === 0 ? 'finish' : "combo";
            //         const { transactions, txid } = await mvcConnector!.createPin(
            //             metaidData,
            //             {
            //                 network: curNetwork,
            //                 signMessage: "file chunk",
            //                 serialAction: serialAction,
            //                 transactions: chunkTransactions,
            //             }
            //         );
            //         if (txid) {
            //             TxMap.set(hash, txid)
            //         }
            //         if (transactions) {
            //             transactions.forEach(tx => {
            //                 if (!TxMap.has(hash)) {
            //                     TxMap.set(hash, tx)
            //                 }
            //             })
            //         }

            //         // chunkList.push({
            //         //     sha256: hash,
            //         //     pinId: txid ? `${txid}i0` : transactions![transactions!.length - 1].txComposer.getTxId() + 'i0'
            //         // })
            //         chunkTransactions = transactions as MvcTransaction[];
            //     }
            // }
            // console.log('chunkPids', chunkPids);
            // const metaidData: InscribeData = {
            //     operation: "create",
            //     body: JSON.stringify({
            //         chunkList:chunks.map(({hash, chunk}) => ({
            //             sha256: hash,
            //             pinId: typeof TxMap.get(hash) === 'string' ? TxMap.get(hash)+'i0' : (TxMap.get(hash) as MvcTransaction).txComposer.getTxId() + 'i0'
            //         })),
            //         fileSize,
            //         chunkSize,
            //         dataType,
            //         name,
            //         chunkNumber,
            //         sha256,
            //     }),
            //     path: `${showConf?.host || ''}/file/index/${uuidv4()}`,
            //     contentType: "metafile/index;utf-8",
            //     flag: "metaid",
            // };

            // console.log('metaidData', metaidData);
            // const { transactions: pinTransations } = await mvcConnector!.createPin(
            //     metaidData,
            //     {
            //         network: curNetwork,
            //         signMessage: "file index",
            //         serialAction: "combo",
            //         transactions: [...chunkTransactions],
            //     }
            // );
            // fileTransactions = pinTransations as MvcTransaction[];
            // finalBody.attachments = [...finalBody.attachments || [], 'metafile://video/' + fileTransactions[fileTransactions.length - 1].txComposer.getTxId() + 'i0']
          case 16:
            if ((0,isEmpty/* default */.Z)(buzz.images)) {
              _context3.next = 50;
              break;
            }
            fileOptions = [];
            _iterator = createForOfIteratorHelper_default()(buzz.images);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                image = _step.value;
                fileOptions.push({
                  body: Buffer.from(image.data, 'hex').toString('base64'),
                  contentType: "".concat(image.fileType, ";binary"),
                  encoding: 'base64',
                  flag: config/* FLAG */.BZ,
                  path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/file")
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            if (!(chainNet === 'btc')) {
              _context3.next = 31;
              break;
            }
            _context3.next = 23;
            return btcConnector.use('file');
          case 23:
            fileEntity = _context3.sent;
            _context3.next = 26;
            return fileEntity.create({
              dataArray: fileOptions,
              options: {
                noBroadcast: 'no',
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate))
              }
            });
          case 26:
            imageRes = _context3.sent;
            console.log('imageRes', imageRes);
            finalBody.attachments = [].concat(toConsumableArray_default()(finalBody.attachments || []), toConsumableArray_default()(imageRes.revealTxIds.map(function (rid) {
              return 'metafile://' + rid + 'i0';
            })));
            _context3.next = 50;
            break;
          case 31:
            _context3.next = 33;
            return mvcConnector.use('file');
          case 33:
            _fileEntity = _context3.sent;
            finalAttachMetafileUri = [];
            i = 0;
          case 36:
            if (!(i < fileOptions.length)) {
              _context3.next = 49;
              break;
            }
            fileOption = fileOptions[i];
            _context3.next = 40;
            return _fileEntity.create({
              data: fileOption,
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'upload image file',
                serialAction: 'combo',
                transactions: fileTransactions,
                feeRate: mvcFeeRate
              }
            });
          case 40:
            _yield$_fileEntity$cr = _context3.sent;
            _transactions = _yield$_fileEntity$cr.transactions;
            if (_transactions) {
              _context3.next = 44;
              break;
            }
            throw new Error('upload image file failed');
          case 44:
            finalAttachMetafileUri.push('metafile://' + _transactions[_transactions.length - 1].txComposer.getTxId() + 'i0');
            fileTransactions = _transactions;
          case 46:
            i++;
            _context3.next = 36;
            break;
          case 49:
            finalBody.attachments = [].concat(toConsumableArray_default()(finalBody.attachments || []), finalAttachMetafileUri);
          case 50:
            //   await sleep(5000);

            if (!(0,isNil/* default */.Z)(quotePin)) {
              finalBody.quotePin = quotePin.id;
            }
            if (!(0,isNil/* default */.Z)(quoteComment)) {
              finalBody.quotePin = quoteComment.pinId;
            }
            if (nfts.length > 0) {
              finalBody.attachments = [].concat(toConsumableArray_default()(nfts.map(function (nft) {
                return "metafile://nft/mrc721/".concat(nft.itemPinId);
              })), toConsumableArray_default()(finalBody.attachments || []));
            }
            if (!(chainNet === 'btc')) {
              _context3.next = 62;
              break;
            }
            console.log('finalBody', {
              body: JSON.stringify(finalBody),
              contentType: 'text/plain;utf-8',
              flag: config/* FLAG */.BZ,
              path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/protocols/simplebuzz")
            });
            _context3.next = 57;
            return buzzEntity.create({
              dataArray: [{
                body: JSON.stringify(finalBody),
                contentType: 'text/plain;utf-8',
                flag: config/* FLAG */.BZ,
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/protocols/simplebuzz")
              }],
              options: {
                noBroadcast: 'no',
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                service: fetchServiceFee('post_service_fee_amount')
                // service: {
                //     address: environment.service_address,
                //     satoshis: environment.service_staoshi,
                // },
                // network: environment.network,
              }
            });
          case 57:
            createRes = _context3.sent;
            console.log('create res for inscribe', createRes);
            if (!(0,isNil/* default */.Z)(createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0])) {
              // await sleep(5000);
              queryClient.invalidateQueries({
                queryKey: ['homebuzzesnew']
              });
              message/* default */.ZP.success("".concat(isQuoted ? 'repost' : 'create', " buzz successfully"));
              reset();
              _onClose();
              setMockBuzz({
                chainName: chainNet,
                commentCount: 0,
                content: JSON.stringify(finalBody),
                creator: user.address,
                blocked: false,
                id: (createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0]) + 'i0',
                likeCount: 0,
                host: ((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '').toLowerCase(),
                number: 0,
                donate: [],
                MogoID: '',
                address: user.address,
                contentBody: null,
                contentLength: 0,
                contentType: 'text/plain;utf-8',
                createMetaId: user.metaid,
                dataValue: 0,
                donateCount: 0,
                encryption: '0',
                genesisFee: 0,
                genesisHeight: 0,
                genesisTransaction: createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0],
                hot: 0,
                initialOwner: user.address,
                isTransfered: false,
                status: 0,
                timestamp: Math.floor(new Date().getTime() / 1000),
                operation: 'create',
                path: "/protocols/simplebuzz",
                output: '',
                outputValue: 1,
                parentPath: '',
                pop: '',
                popLv: -1,
                preview: "",
                shareCount: 0,
                metaid: user.metaid,
                txIndex: 0,
                txInIndex: 0,
                offset: 0,
                location: '',
                originalPath: '',
                version: '1.0.0',
                contentTypeDetect: 'text/plain;utf-8',
                contentSummary: JSON.stringify(finalBody),
                originalId: '',
                mrc20MintId: [],
                like: []
              });
              _umi_production_exports.history.push('/home/new', {
                buzzId: new Date().getTime()
              });
            }
            _context3.next = 76;
            break;
          case 62:
            _context3.next = 64;
            return mvcConnector.load((0,entities_buzz/* getBuzzSchemaWithCustomHost */.Q)((_showConf$host = showConf === null || showConf === void 0 ? void 0 : showConf.host) !== null && _showConf$host !== void 0 ? _showConf$host : ''));
          case 64:
            _buzzEntity = _context3.sent;
            if (!(admin !== null && admin !== void 0 && admin.assist && (0,isEmpty/* default */.Z)(buzz.images) && !video)) {
              _context3.next = 71;
              break;
            }
            _context3.next = 68;
            return _buzzEntity.create({
              data: {
                body: JSON.stringify(objectSpread2_default()({}, finalBody))
              },
              options: {
                assistDomian: config/* ASSIST_ENDPOINT */.FF,
                network: config/* curNetwork */.eM,
                signMessage: 'create buzz',
                serialAction: 'finish',
                transactions: fileTransactions,
                service: fetchServiceFee('post_service_fee_amount', 'MVC'),
                feeRate: mvcFeeRate
              }
            });
          case 68:
            _createRes = _context3.sent;
            _context3.next = 74;
            break;
          case 71:
            _context3.next = 73;
            return _buzzEntity.create({
              data: {
                body: JSON.stringify(objectSpread2_default()({}, finalBody))
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'create buzz',
                serialAction: 'finish',
                transactions: fileTransactions,
                service: fetchServiceFee('post_service_fee_amount', 'MVC'),
                feeRate: mvcFeeRate
              }
            });
          case 73:
            _createRes = _context3.sent;
          case 74:
            console.log(fileTransactions.map(function (tx) {
              return tx.txComposer.getTxId();
            }));
            if (!(0,isNil/* default */.Z)((_createRes2 = _createRes) === null || _createRes2 === void 0 ? void 0 : _createRes2.txid)) {
              // await sleep(5000);
              queryClient.invalidateQueries({
                queryKey: ['homebuzzesnew']
              });
              message/* default */.ZP.success("".concat(isQuoted ? 'repost' : 'create', " buzz successfully"));
              reset();
              _onClose();
              setNFTs([]);
              setMockBuzz({
                chainName: chainNet,
                commentCount: 0,
                content: JSON.stringify(finalBody),
                creator: user.address,
                blocked: false,
                id: _createRes.txid + 'i0',
                likeCount: 0,
                host: ((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '').toLowerCase(),
                number: 0,
                donate: [],
                MogoID: '',
                address: user.address,
                contentBody: null,
                contentLength: 0,
                contentType: 'text/plain;utf-8',
                createMetaId: user.metaid,
                dataValue: 0,
                donateCount: 0,
                encryption: '0',
                genesisFee: 0,
                genesisHeight: 0,
                genesisTransaction: _createRes.txid,
                hot: 0,
                initialOwner: user.address,
                isTransfered: false,
                status: 0,
                timestamp: Math.floor(new Date().getTime() / 1000),
                operation: 'create',
                path: "/protocols/simplebuzz",
                output: '',
                outputValue: 1,
                parentPath: '',
                pop: '',
                popLv: -1,
                preview: "",
                shareCount: 0,
                metaid: user.metaid,
                txIndex: 0,
                txInIndex: 0,
                offset: 0,
                location: '',
                originalPath: '',
                version: '1.0.0',
                contentTypeDetect: 'text/plain;utf-8',
                contentSummary: JSON.stringify(finalBody),
                originalId: '',
                mrc20MintId: [],
                like: []
              });
              _umi_production_exports.history.push('/home/new', {
                buzzId: new Date().getTime()
              });
            }
          case 76:
            _context3.next = 86;
            break;
          case 78:
            _context3.prev = 78;
            _context3.t0 = _context3["catch"](6);
            console.log('error', _context3.t0);
            errorMessage = (_message = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _message !== void 0 ? _message : _context3.t0;
            localStorage.setItem('tmp_content', content);
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
            setIsAdding(false);
          case 86:
            setIsAdding(false);
          case 87:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[6, 78]]);
    }));
    return function handleAddBuzz(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleAddBuzzWhthLock = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(mentions) {
      var encryptImages, publicImages, _yield$postPayBuzz, payload, pid, _message2, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setIsAdding(true);
            _context4.prev = 1;
            if (admin !== null && admin !== void 0 && admin.domainName) {
              _context4.next = 4;
              break;
            }
            throw new Error('The administrator has not set a domain. Please ask the administrator to configure a domain to proceed.');
          case 4:
            encryptImages = images.filter(function (image) {
              return encryptFiles.includes(image.previewUrl);
            });
            publicImages = images.filter(function (image) {
              return !encryptFiles.includes(image.previewUrl);
            });
            if (!(encryptImages.length === 0 && !encryptContent)) {
              _context4.next = 8;
              break;
            }
            throw new Error('Please input encrypt content or encrypt images');
          case 8:
            if (payType) {
              _context4.next = 10;
              break;
            }
            throw new Error('Please select pay type');
          case 10:
            if (!(payType === 'mrc20' && !IdCoin)) {
              _context4.next = 12;
              break;
            }
            throw new Error('Please Launch Your Unique ID-COIN');
          case 12:
            if (!(payType === 'btc' && payAmount <= 0)) {
              _context4.next = 14;
              break;
            }
            throw new Error('Please input valid pay amount');
          case 14:
            if (!(payType === 'paymrc20' && !mrc20)) {
              _context4.next = 16;
              break;
            }
            throw new Error('Please input valid MRC20 token ID or tick');
          case 16:
            if (!(payType === 'paymrc20' && checkTokenID !== 'success')) {
              _context4.next = 18;
              break;
            }
            throw new Error('Please input valid MRC20 token ID or tick');
          case 18:
            if (!(payType === 'paymrc20' && payMrc20Amount <= 0)) {
              _context4.next = 20;
              break;
            }
            throw new Error('Please input valid MRC20 token amount');
          case 20:
            if (!(payType === 'holdmrc20' && !mrc20)) {
              _context4.next = 22;
              break;
            }
            throw new Error('Please input valid MRC20 token ID or tick');
          case 22:
            _context4.t0 = utils_buzz/* postPayBuzz */.Vb;
            _context4.t1 = content;
            _context4.t2 = mentions || {};
            _context4.t3 = (quotePin === null || quotePin === void 0 ? void 0 : quotePin.id) || (quoteComment === null || quoteComment === void 0 ? void 0 : quoteComment.pinId);
            _context4.next = 28;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(encryptImages));
          case 28:
            _context4.t4 = _context4.sent;
            _context4.next = 31;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(publicImages));
          case 31:
            _context4.t5 = _context4.sent;
            _context4.t6 = encryptContent;
            _context4.t7 = nfts.map(function (nft) {
              return "metafile://nft/mrc721/".concat(nft.itemPinId);
            });
            _context4.t8 = (admin === null || admin === void 0 ? void 0 : admin.domainName) || '';
            _context4.t9 = {
              content: _context4.t1,
              mentions: _context4.t2,
              quotePin: _context4.t3,
              encryptImages: _context4.t4,
              publicImages: _context4.t5,
              encryptContent: _context4.t6,
              nfts: _context4.t7,
              manDomain: _context4.t8
            };
            _context4.t10 = String(payAmount);
            _context4.t11 = user.address;
            _context4.t12 = chainNet === 'btc' ? feeRate : mvcFeeRate;
            _context4.t13 = (showConf === null || showConf === void 0 ? void 0 : showConf.host) || '';
            _context4.t14 = chainNet;
            _context4.t15 = btcConnector;
            _context4.t16 = mvcConnector;
            _context4.t17 = manPubKey || '';
            _context4.t18 = fetchServiceFee('post_service_fee_amount', chainNet === 'btc' ? 'BTC' : "MVC");
            _context4.t19 = String(payType);
            _context4.t20 = IdCoin;
            _context4.t21 = mrc20;
            _context4.t22 = String(payMrc20Amount);
            _context4.next = 51;
            return (0, _context4.t0)(_context4.t9, _context4.t10, _context4.t11, _context4.t12, _context4.t13, _context4.t14, _context4.t15, _context4.t16, _context4.t17, _context4.t18, _context4.t19, _context4.t20, _context4.t21, _context4.t22);
          case 51:
            _yield$postPayBuzz = _context4.sent;
            payload = _yield$postPayBuzz.payload;
            pid = _yield$postPayBuzz.pid;
            reset();
            _onClose();
            queryClient.invalidateQueries({
              queryKey: ['homebuzzesnew']
            });
            // setMockBuzz({
            //     chainName: chainNet,
            //     commentCount: 0,
            //     content: JSON.stringify(payload),
            //     creator: user.address,
            //     blocked: false,
            //     id: pid,
            //     likeCount: 0,
            //     host: (showConf?.host || '').toLowerCase(),
            //     number: 0,
            //     donate: [],
            //     MogoID: '',
            //     address: user.address,
            //     contentBody: null,
            //     contentLength: 0,
            //     contentType: 'text/plain;utf-8',
            //     createMetaId: user.metaid,
            //     dataValue: 0,
            //     donateCount: 0,
            //     encryption: '0',
            //     genesisFee: 0,
            //     genesisHeight: 0,
            //     genesisTransaction: pid.substring(0, pid.length - 2),
            //     hot: 0,
            //     initialOwner: user.address,
            //     isTransfered: false,
            //     status: 0,
            //     timestamp: Math.floor(new Date().getTime() / 1000),
            //     operation: 'create',
            //     path: `/protocols/paybuzz`,
            //     output: '',
            //     outputValue: 1,
            //     parentPath: '',
            //     pop: '',
            //     popLv: -1,
            //     preview: "",
            //     shareCount: 0,
            //     metaid: user.metaid,
            //     txIndex: 0,
            //     txInIndex: 0,
            //     offset: 0,
            //     location: '',
            //     originalPath: '',
            //     version: '1.0.0',
            //     contentTypeDetect: 'text/plain;utf-8',
            //     contentSummary: JSON.stringify(payload),
            //     originalId: '',
            //     mrc20MintId: [],
            //     like: []

            // })

            _umi_production_exports.history.push('/home/new', {
              buzzId: new Date().getTime()
            });
            _context4.next = 67;
            break;
          case 60:
            _context4.prev = 60;
            _context4.t23 = _context4["catch"](1);
            console.log('error', _context4.t23);
            errorMessage = (_message2 = _context4.t23 === null || _context4.t23 === void 0 ? void 0 : _context4.t23.message) !== null && _message2 !== void 0 ? _message2 : _context4.t23;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
            localStorage.setItem('tmp_content', content);
          case 67:
            setIsAdding(false);
          case 68:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 60]]);
    }));
    return function handleAddBuzzWhthLock(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    var didCancel = false;
    var fetchMrc20Info = /*#__PURE__*/function () {
      var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
        var params, _yield$getMRC20Info, code, message, data;
        return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (holdTokenID) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");
            case 2:
              setCheckTokenID('validating');
              params = {};
              if (holdTokenID.length > 24) {
                params.id = holdTokenID;
              } else {
                params.tick = holdTokenID.toUpperCase();
              }
              console.log('params', params);
              _context5.next = 8;
              return (0,api/* getMRC20Info */.tl)(params);
            case 8:
              _yield$getMRC20Info = _context5.sent;
              code = _yield$getMRC20Info.code;
              message = _yield$getMRC20Info.message;
              data = _yield$getMRC20Info.data;
              if (!didCancel) {
                _context5.next = 14;
                break;
              }
              return _context5.abrupt("return");
            case 14:
              if (!(data && data.mrc20Id)) {
                _context5.next = 20;
                break;
              }
              setMrc20(data);
              setCheckTokenID('success');
              return _context5.abrupt("return");
            case 20:
              setMrc20(undefined);
              setCheckTokenID('error');
            case 22:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function fetchMrc20Info() {
        return _ref5.apply(this, arguments);
      };
    }();
    fetchMrc20Info();
    return function () {
      didCancel = true;
    };
  }, [holdTokenID]);
  (0,react.useEffect)(function () {
    if (show) {
      getUploadDraftList().then(function (drafts) {
        console.log('drafts', drafts);
        setImages(drafts || []);
      });
    }
  }, [show]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponPopup/* default */.Z, {
    onClose: function onClose() {
      localStorage.setItem('tmp_content', content);
      _onClose();
    },
    show: show,
    modalWidth: 640,
    closable: true,
    title: !isQuoted ? /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "New Buzz"
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Repost"
    }),
    children: [isQuoted && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      style: {
        margin: 24
      },
      styles: {
        body: {
          padding: quotePin ? 0 : 24
        }
      },
      children: quotePin ? /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
        buzzItem: quotePin,
        showActions: false
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(CommentPanel/* CommentItem */.H, {
        item: quoteComment,
        level: 1
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        gutter: [12, 12],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SelectChain/* default */.Z, {
          chainNet: chainNet,
          setChainNet: setChainNet
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            strong: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Public"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_mentions/* default */.Z, {
            autoSize: {
              minRows: 4,
              maxRows: 16
            },
            placeholder: isQuoted ? (0,utils/* formatMessage */.wv)("Add a comment") : (0,utils/* formatMessage */.wv)("post_placeholder"),
            value: content,
            onChange: function onChange(value) {
              console.log('value', value);
              setContent(value);
            },
            loading: loading,
            onSearch: onSearch,
            options: users.map(function (_ref6) {
              var tick = _ref6.tick,
                deployerAddress = _ref6.deployerAddress;
              return {
                key: deployerAddress,
                value: tick.toUpperCase(),
                className: 'antd-demo-dynamic-option',
                label: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserAvatar/* default */.Z, {
                    address: deployerAddress,
                    size: 24
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    children: tick.toUpperCase()
                  })]
                })
              };
            }),
            onSelect: function onSelect(value) {
              console.log('onSelect', value);
              setMentions(objectSpread2_default()(objectSpread2_default()({}, mentions), {}, defineProperty_default()({}, value.value, value.key)));
            },
            onFocus: function onFocus() {
              setLastFocus('content');
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
          span: 24,
          style: {
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: "center"
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            strong: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Encrypt"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "text",
            icon: !lock ? /*#__PURE__*/(0,jsx_runtime.jsx)(UnlockOutlined/* default */.Z, {
              style: {
                color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
              }
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(LockOutlined/* default */.Z, {
              style: {
                color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
              }
            }),
            onClick: function onClick() {
              return setLock(!lock);
            }
          })]
        }), lock && /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(TextArea, {
            autoSize: {
              minRows: 4,
              maxRows: 16
            },
            onFocus: function onFocus() {
              setLastFocus('decrypt');
            },
            placeholder: (0,utils/* formatMessage */.wv)("encrypt content"),
            value: encryptContent,
            onChange: function onChange(e) {
              return setEncryptContent(e.target.value);
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: 16
            },
            children: [nfts.map(function (nft, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  position: 'relative',
                  marginRight: 8,
                  marginBottom: 8,
                  width: 100,
                  height: 100
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: nft.previewImage,
                  alt: "preview-".concat(index),
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  onClick: function onClick() {
                    return setNFTs(nfts.filter(function (_nft, i) {
                      return nft.itemPinId !== _nft.itemPinId;
                    }));
                  },
                  size: "small",
                  style: {
                    position: 'absolute',
                    top: 4,
                    right: 4
                  },
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {})
                })]
              }, "nft" + index);
            }), images.map(function (image, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  position: 'relative',
                  marginRight: 8,
                  marginBottom: 8,
                  width: 100,
                  height: 100
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: image.previewUrl,
                  alt: "preview-".concat(index),
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  onClick: function onClick() {
                    return handleRemoveImage(index);
                  },
                  size: "small",
                  style: {
                    position: 'absolute',
                    top: 4,
                    right: 4
                  },
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {})
                }), lock && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  onClick: function onClick() {
                    console.log('encryptFiles', encryptFiles);
                    if (encryptFiles.includes(image.previewUrl)) {
                      setEncryptFiles(encryptFiles.filter(function (item) {
                        return item !== image.previewUrl;
                      }));
                    } else {
                      setEncryptFiles([].concat(toConsumableArray_default()(encryptFiles), [image.previewUrl]));
                    }
                  },
                  size: "small",
                  style: {
                    position: 'absolute',
                    bottom: 4,
                    right: 4
                  },
                  icon: !encryptFiles.includes(image.previewUrl) ? /*#__PURE__*/(0,jsx_runtime.jsx)(UnlockOutlined/* default */.Z, {
                    style: {
                      color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                    }
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(LockOutlined/* default */.Z, {
                    style: {
                      color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                    }
                  })
                })]
              }, index);
            }), video && chainNet === 'mvc' && !lock && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                position: 'relative',
                marginRight: 8,
                marginBottom: 8,
                width: 100,
                height: 100
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("video", {
                src: video.previewUrl
                // controls
                ,
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                onClick: function onClick() {
                  return handleRemoveVideo();
                },
                size: "small",
                style: {
                  position: 'absolute',
                  top: 4,
                  right: 4
                },
                icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {})
              })]
            })]
          })
        }), lock && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            span: 24,
            style: {
              justifyContent: 'space-between',
              display: 'flex',
              alignItems: "center",
              flexWrap: 'wrap',
              gap: 20
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              strong: true,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                children: "Payment method"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
              options: [{
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Pay With BTC"
                }),
                value: 'btc'
              }, {
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Pay With MRC20"
                }),
                value: 'paymrc20'
              }, {
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Hold ID Coin"
                }),
                value: 'mrc20'
              }, {
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Hold MRC20"
                }),
                value: 'holdmrc20'
              }],
              value: payType,
              onChange: function onChange(value) {
                setPayType(value);
              }
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: 'flex',
                marginTop: 20,
                flexDirection: 'column'
              },
              children: [lock && payType === 'btc' && /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
                variant: "filled",
                value: payAmount,
                onChange: function onChange(value) {
                  setPayAmount(value);
                },
                style: {
                  flexGrow: 1,
                  width: '100%'
                },
                suffix: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: btc,
                  style: {
                    height: 20,
                    width: 20
                  }
                })
              }), lock && payType === 'paymrc20' && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
                  prefix: mrc20 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                    size: 20,
                    tick: mrc20.tick,
                    metadata: mrc20.metadata
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  value: holdTokenID,
                  style: {
                    flexGrow: 1
                  },
                  onChange: function onChange(e) {
                    setHoldTokenID(e.target.value);
                  },
                  status: !mrc20 ? 'warning' : '',
                  suffix: checkTokenID === 'validating' ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {}) : checkTokenID === 'error' ? /*#__PURE__*/(0,jsx_runtime.jsx)(ExclamationCircleOutlined/* default */.Z, {
                    style: {
                      color: 'red'
                    }
                  }) : checkTokenID === 'success' ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleOutlined/* default */.Z, {
                    style: {
                      color: 'green'
                    }
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  placeholder: (0,utils/* formatMessage */.wv)("please input mrc20 id or tick")
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
                  controls: false,
                  variant: "filled",
                  value: payMrc20Amount,
                  onChange: function onChange(value) {
                    setPayMrc20Amount(value);
                  },
                  style: {
                    flexGrow: 1,
                    width: '100%'
                  },
                  suffix: mrc20 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                    size: 20,
                    tick: mrc20.tick,
                    metadata: mrc20.metadata
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {})
                })]
              }), lock && payType === 'mrc20' && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                    children: "loading"
                  })
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                  children: IdCoin ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.Z, {
                    defaultChecked: true,
                    disabled: true,
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      style: {
                        display: 'flex',
                        gap: 8,
                        flexWrap: 'wrap',
                        alignItems: "center",
                        justifyContent: 'flex-end',
                        flexGrow: 1
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
                        src: (_IdCoin$deployerUserI = IdCoin.deployerUserInfo) === null || _IdCoin$deployerUserI === void 0 ? void 0 : _IdCoin$deployerUserI.avatar,
                        size: 32
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                        className: "right",
                        style: {
                          flexGrow: 1
                        },
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap'
                          },
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
                              level: 4,
                              style: {
                                margin: 0
                              },
                              children: IdCoin.tick
                            })
                          })
                        })
                      })]
                    })
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(result/* default */.ZP, {
                    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                      children: "Launch Your Unique ID-COIN Now!"
                    }),
                    subTitle: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                      children: "It seems you haven't issued your personal ID-COIN yet. Head over to MetaID.market to create your ID-COIN and unlock new possibilities in the decentralized ecosystem. Start building your on-chain identity today!"
                    }),
                    extra: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                      onClick: function onClick() {
                        window.open(config/* curNetwork */.eM === 'testnet' ? 'https://testnet.metaid.market/launch' : 'https://metaid.market/launch', (0,utils/* openWindowTarget */.wL)());
                      },
                      type: "primary",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                        wrapper: true,
                        children: "Launch Me"
                      })
                    }, "console")
                  })
                })
              }), lock && payType === 'holdmrc20' && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
                  prefix: mrc20 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                    size: 20,
                    tick: mrc20.tick,
                    metadata: mrc20.metadata
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  value: holdTokenID,
                  style: {
                    flexGrow: 1
                  },
                  onChange: function onChange(e) {
                    setHoldTokenID(e.target.value);
                  },
                  status: !mrc20 ? 'warning' : '',
                  suffix: checkTokenID === 'validating' ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {}) : checkTokenID === 'error' ? /*#__PURE__*/(0,jsx_runtime.jsx)(ExclamationCircleOutlined/* default */.Z, {
                    style: {
                      color: 'red'
                    }
                  }) : checkTokenID === 'success' ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleOutlined/* default */.Z, {
                    style: {
                      color: 'green'
                    }
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  placeholder: (0,utils/* formatMessage */.wv)("please input mrc20 id or tick")
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {})]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          marginTop: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, {
            beforeUpload: handleBeforeUpload,
            showUploadList: false,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(FileImageOutlined/* default */.Z, {}),
              variant: "text",
              color: "primary"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "text",
            onClick: function onClick() {
              return setShowNFTModal(true);
            },
            variant: "text",
            color: "primary",
            children: "NFT"
          }), window.innerWidth > 768 && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "text",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(SmileOutlined/* default */.Z, {}),
            variant: "text",
            color: "primary",
            onClick: function onClick() {
              return setShowEmojiPicker(!showEmojiPicker);
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, {
            beforeUpload: handleVideoBeforeUpload,
            showUploadList: false,
            accept: "video/mp4",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              disabled: chainNet === 'btc' || lock,
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(VideoCameraOutlined/* default */.Z, {}),
              variant: "text",
              color: "primary"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            type: "text",
            onClick: reset,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Reset"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            style: {
              background: showConf === null || showConf === void 0 ? void 0 : showConf.gradientColor,
              color: showConf === null || showConf === void 0 ? void 0 : showConf.colorButton
            },
            loading: isAdding,
            onClick: onCreateSubmit,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Post"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NFTModal, {
      show: showNFTModal,
      onClose: function onClose() {
        setShowNFTModal(false);
      },
      nfts: nfts,
      setNFTs: setNFTs
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      onClose: function onClose() {
        setShowEmojiPicker(false);
      },
      show: showEmojiPicker,
      closable: true,
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "Select Emoji"
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(emoji_picker_react_esm/* default */.ZP, {
        onEmojiClick: function onEmojiClick(emoji) {
          if (lock && lastFocus === 'decrypt') {
            setEncryptContent(function (prev) {
              return prev + emoji.emoji;
            });
          } else {
            setContent(function (prev) {
              return prev + emoji.emoji;
            });
          }
        }
      })
    })]
  });
});

/***/ }),

/***/ 47467:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ResponPopup; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(61408);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var modal = __webpack_require__(90789);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/index.js + 3 modules
var drawer = __webpack_require__(37048);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/Components/ResponPopup/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/ResponPopup/index.tsx






var useBreakpoint = grid/* default */.ZP.useBreakpoint;
var Popup = function Popup(_ref) {
  var show = _ref.show,
    modalWidth = _ref.modalWidth,
    onClose = _ref.onClose,
    children = _ref.children,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? false : _ref$closable,
    _ref$maskClosable = _ref.maskClosable,
    maskClosable = _ref$maskClosable === void 0 ? true : _ref$maskClosable,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$bodyStyle = _ref.bodyStyle,
    bodyStyle = _ref$bodyStyle === void 0 ? {} : _ref$bodyStyle;
  var _useBreakpoint = useBreakpoint(),
    md = _useBreakpoint.md;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: md ? /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
      open: show,
      onCancel: onClose,
      width: modalWidth || 420,
      title: title,
      footer: null,
      closable: closable,
      maskClosable: maskClosable,
      style: objectSpread2_default()({
        padding: 0
      }, style),
      className: 'hayPopup' + ' ' + className,
      styles: {
        body: objectSpread2_default()({
          padding: 0,
          borderRadius: 4
        }, bodyStyle)
      },
      children: children
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
      title: title,
      open: show,
      placement: "bottom",
      onClose: onClose,
      closable: closable,
      maskClosable: maskClosable,
      style: objectSpread2_default()({
        height: 'auto'
      }, style),
      styles: {
        body: objectSpread2_default()({
          height: 'auto',
          maxHeight: '90vh',
          padding: 10
        }, bodyStyle),
        wrapper: {
          height: 'auto'
        }
      },
      children: children
    })
  });
};
/* harmony default export */ var ResponPopup = (Popup);

/***/ }),

/***/ 57777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93603);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);



/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var children = _ref.children,
    _ref$wrapper = _ref.wrapper,
    wrapper = _ref$wrapper === void 0 ? false : _ref$wrapper,
    className = _ref.className,
    style = _ref.style;
  var _useIntl = (0,umi__WEBPACK_IMPORTED_MODULE_1__.useIntl)(),
    formatMessage = _useIntl.formatMessage;
  if (!children) return null;
  if (wrapper) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: className,
    style: style,
    children: formatMessage({
      id: children
    })
  });
  return formatMessage({
    id: children
  });
});

/***/ }),

/***/ 94443:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResponPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47467);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);



/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    children = _ref.children,
    _ref$modalWidth = _ref.modalWidth,
    modalWidth = _ref$modalWidth === void 0 ? 480 : _ref$modalWidth,
    style = _ref.style,
    bodyStyle = _ref.bodyStyle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ResponPopup__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    onClose: onClose,
    show: show,
    modalWidth: modalWidth,
    style: _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({
      padding: 0
    }, style),
    bodyStyle: _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({
      padding: 0
    }, bodyStyle),
    children: children
  });
});

/***/ }),

/***/ 29333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78488);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83734);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52676);



/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var src = _ref.src,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 40 : _ref$size,
    onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    style: {
      minHeight: size,
      minWidth: size,
      maxHeight: size,
      maxWidth: size,
      border: "1px solid rgba(0, 0, 0, 0.06)"
    },
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      style: {
        objectFit: 'cover'
      },
      src: src ? (src.startsWith('http') ? '' : _config__WEBPACK_IMPORTED_MODULE_0__/* .AVATAR_BASE_URL */ .bq) + src : _config__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_AVATAR */ .tU,
      onError: function onError(_ref2) {
        var currentTarget = _ref2.currentTarget;
        currentTarget.onerror = null;
        currentTarget.src = _config__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_AVATAR */ .tU;
      }
    }),
    size: size,
    onClick: onClick,
    alt: "avatar"
  });
});

/***/ }),

/***/ 69101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9807);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82296);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99478);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83250);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38021);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30430);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93603);
/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29333);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52676);









/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var _profileUserData$meta;
  var address = _ref.address,
    isOwner = _ref.isOwner,
    _ref$showBio = _ref.showBio,
    showBio = _ref$showBio === void 0 ? false : _ref$showBio;
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_2__.useModel)('user'),
    user = _useModel.user;
  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__/* .useQuery */ .a)({
      enabled: Boolean(address) && !isOwner,
      queryKey: ['userInfo', address],
      queryFn: function queryFn() {
        return (0,_request_api__WEBPACK_IMPORTED_MODULE_1__/* .getUserInfo */ .bG)({
          address: address
        });
      }
    }),
    profileUserData2 = _useQuery.data,
    isFetching = _useQuery.isFetching;
  var profileUserData = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    if (isOwner) {
      return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, user);
    }
    return profileUserData2;
  }, [profileUserData2, isOwner]);
  return isFetching ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Avatar, {
      active: true,
      size: 40,
      shape: "circle"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Input, {
      active: true,
      size: "default",
      style: {
        maxWidth: 100
      }
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      umi__WEBPACK_IMPORTED_MODULE_2__.history.push("/profile/".concat(address));
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_UserAvatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      src: profileUserData === null || profileUserData === void 0 ? void 0 : profileUserData.avatar,
      size: 40
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Text, {
        strong: true,
        style: {
          display: 'block',
          maxWidth: 100,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        children: (profileUserData === null || profileUserData === void 0 ? void 0 : profileUserData.name) || (address === null || address === void 0 ? void 0 : address.slice(0, 6)) + '...'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Text, {
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
      }), showBio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Text, {
        type: "secondary",
        style: {
          display: 'block',
          maxWidth: 100,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          title: (profileUserData === null || profileUserData === void 0 ? void 0 : profileUserData.bio) || '-',
          children: (profileUserData === null || profileUserData === void 0 ? void 0 : profileUserData.bio) || '-'
        })
      })]
    })]
  });
});

/***/ }),

/***/ 35711:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9807);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82296);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83250);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93603);
/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52676);






/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var address = _ref.address,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 34 : _ref$size;
  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQuery */ .a)({
      enabled: Boolean(address),
      queryKey: ['userInfo', address],
      queryFn: function queryFn() {
        return (0,_request_api__WEBPACK_IMPORTED_MODULE_0__/* .getUserInfo */ .bG)({
          address: address
        });
      }
    }),
    profileUserData = _useQuery.data,
    isFetching = _useQuery.isFetching;
  return isFetching ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Avatar, {
    active: true,
    size: size,
    shape: "circle"
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_UserAvatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    src: profileUserData === null || profileUserData === void 0 ? void 0 : profileUserData.avatar,
    size: size,
    onClick: function onClick() {
      umi__WEBPACK_IMPORTED_MODULE_1__.history.push("/profile/".concat(address));
    }
  });
});

/***/ }),

/***/ 95855:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: function() { return /* binding */ getBuzzSchemaWithCustomHost; }
/* harmony export */ });
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);

var buzzSchema = {
  name: "buzz",
  nodeName: "simplebuzz",
  path: "/protocols/simplebuzz",
  versions: [{
    version: 1,
    body: [{
      name: "content",
      type: "string"
    }, {
      name: "contentType",
      type: "string"
    }, {
      name: "quotePin",
      type: "string"
    }, {
      name: "attachments",
      type: "array"
    }]
  }]
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (buzzSchema)));
var getBuzzSchemaWithCustomHost = function getBuzzSchemaWithCustomHost(host) {
  return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, buzzSchema), {}, {
    path: "".concat(host).concat(buzzSchema.path)
  });
};

/***/ }),

/***/ 12511:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: function() { return /* binding */ fetchTranlateResult; }
/* harmony export */ });
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22258);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96706);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_2__);




function fetchTranlateResult(_x) {
  return _fetchTranlateResult.apply(this, arguments);
}
function _fetchTranlateResult() {
  _fetchTranlateResult = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(_ref) {
    var sourceText, from, to, salt, queryParams, url, data;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          sourceText = _ref.sourceText, from = _ref.from, to = _ref.to;
          salt = new Date().getTime().toString();
          queryParams = {
            q: sourceText,
            from: from,
            to: to,
            appid: "20191010000340428",
            salt: salt,
            sign: md5__WEBPACK_IMPORTED_MODULE_2___default()("20191010000340428" + sourceText + salt + "08cmCzBLrp1l_fKQ9TL6")
          }; // const url = `https://fanyi-api.baidu.com/api/trans/vip/translate`;
          url = "https://api.metaid.io/baidufanyi/api/trans/vip/translate"; // const url = `/api/trans/vip/translate`;
          _context.prev = 4;
          _context.next = 7;
          return axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.get(url, {
            params: queryParams
          }).then(function (res) {
            return res.data;
          });
        case 7:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          console.error(_context.t0);
          return _context.abrupt("return", undefined);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 11]]);
  }));
  return _fetchTranlateResult.apply(this, arguments);
}

/***/ }),

/***/ 518:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   At: function() { return /* binding */ postVideo; },
/* harmony export */   Vb: function() { return /* binding */ postPayBuzz; },
/* harmony export */   hr: function() { return /* binding */ formatSimpleBuzz; },
/* harmony export */   nT: function() { return /* binding */ buildMRc20AccessPass; },
/* harmony export */   ns: function() { return /* binding */ decodePayBuzz; },
/* harmony export */   qq: function() { return /* binding */ buildAccessPass; }
/* harmony export */ });
/* unused harmony exports postChunk, postImages, postEncryptImages, formatPayBuzz */
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(335);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15558);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99915);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72898);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78488);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25688);
/* harmony import */ var _bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48507);
/* harmony import */ var ecpair__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15776);
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10642);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(42879);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92448);
/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9807);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29158);
/* provided dependency */ var Buffer = __webpack_require__(36379)["Buffer"];

















bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_12__/* .initEccLib */ .Wi(_bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_10__);
var ECPair = (0,ecpair__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)(_bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_10__);
var postPayBuzz = /*#__PURE__*/function () {
  var _ref2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee(_ref, price, address, feeRate, host, chain, btcConnector, mvcConnector, manPubKey, serviceFee, payType, payTicker, payMrc20, payMrc20Amount) {
    var content, mentions, encryptImages, publicImages, encryptContent, nfts, _ref$manDomain, manDomain, _ref$quotePin, quotePin, transactions, randomKey, publicContent, _encryptContent, _yield$postImages, attachments, fileTransactions, _yield$postEncryptIma, encryptAttachments, encryptFileTransactions, payload, path, metaidData, pid, ret, _ret$revealTxIds, revealTxId, _yield$createPin, pinTransations, _yield$window$metaidw, sharedSecret, ecdhPubKey, contorlPayload, contorlPath, contorlMetaidData, _ret;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          content = _ref.content, mentions = _ref.mentions, encryptImages = _ref.encryptImages, publicImages = _ref.publicImages, encryptContent = _ref.encryptContent, nfts = _ref.nfts, _ref$manDomain = _ref.manDomain, manDomain = _ref$manDomain === void 0 ? "" : _ref$manDomain, _ref$quotePin = _ref.quotePin, quotePin = _ref$quotePin === void 0 ? "" : _ref$quotePin;
          transactions = [];
          randomKey = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .generateAESKey */ .wC)();
          publicContent = content;
          _encryptContent = encryptContent ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .encryptPayloadAES */ .yI)(randomKey, Buffer.from(encryptContent, "utf-8").toString("hex")) : "";
          _context.next = 7;
          return postImages(publicImages, feeRate, host, chain, btcConnector, mvcConnector);
        case 7:
          _yield$postImages = _context.sent;
          attachments = _yield$postImages.attachments;
          fileTransactions = _yield$postImages.fileTransactions;
          transactions = fileTransactions;
          _context.next = 13;
          return postEncryptImages(encryptImages, feeRate, host, chain, btcConnector, mvcConnector, randomKey, transactions);
        case 13:
          _yield$postEncryptIma = _context.sent;
          encryptAttachments = _yield$postEncryptIma.attachments;
          encryptFileTransactions = _yield$postEncryptIma.fileTransactions;
          transactions = encryptFileTransactions;
          payload = {
            publicContent: publicContent,
            encryptContent: _encryptContent,
            contentType: "text/plain",
            publicFiles: [].concat(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(nfts), _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(attachments)),
            encryptFiles: encryptAttachments
            // mentions,
          };
          if (quotePin) {
            payload.quotePin = quotePin;
          }
          path = "".concat(host || "", "/protocols/paybuzz");
          metaidData = {
            operation: "create",
            body: JSON.stringify(payload),
            path: path,
            contentType: "text/plain",
            flag: "metaid"
          };
          pid = "";
          if (!(chain === "btc")) {
            _context.next = 32;
            break;
          }
          _context.next = 25;
          return btcConnector.inscribe({
            inscribeDataArray: [metaidData],
            options: {
              noBroadcast: "no",
              feeRate: Number(feeRate),
              service: serviceFee
            }
          });
        case 25:
          ret = _context.sent;
          if (!ret.status) {
            _context.next = 28;
            break;
          }
          throw new Error(ret.status);
        case 28:
          _ret$revealTxIds = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(ret.revealTxIds, 1), revealTxId = _ret$revealTxIds[0];
          pid = "".concat(revealTxId, "i0");
          _context.next = 38;
          break;
        case 32:
          _context.next = 34;
          return mvcConnector.createPin(metaidData, {
            network: _config__WEBPACK_IMPORTED_MODULE_8__/* .curNetwork */ .eM,
            signMessage: "create paybuzz",
            serialAction: "combo",
            transactions: _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(transactions),
            service: serviceFee,
            feeRate: feeRate
          });
        case 34:
          _yield$createPin = _context.sent;
          pinTransations = _yield$createPin.transactions;
          transactions = pinTransations;
          pid = transactions[transactions.length - 1].txComposer.getTxId() + "i0";
        case 38:
          _context.next = 40;
          return window.metaidwallet.common.ecdh({
            externalPubKey: manPubKey
          });
        case 40:
          _yield$window$metaidw = _context.sent;
          sharedSecret = _yield$window$metaidw.sharedSecret;
          ecdhPubKey = _yield$window$metaidw.ecdhPubKey;
          contorlPayload = {
            controlPins: [pid],
            manDomain: manDomain || "",
            manPubkey: manPubKey,
            creatorPubkey: ecdhPubKey,
            encryptedKey: (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .encryptPayloadAES */ .yI)(sharedSecret, randomKey)
          };
          if (payType === "mrc20" && payTicker) {
            contorlPayload.holdCheck = {
              type: "mrc20",
              ticker: payTicker.tick,
              amount: "1"
            };
          } else if (payType === "paymrc20" && payMrc20 && payMrc20Amount) {
            contorlPayload.payCheck = {
              type: "mrc20",
              ticker: payMrc20.tick,
              amount: payMrc20Amount,
              payTo: address
            };
          } else if (payType === "holdmrc20" && payMrc20) {
            contorlPayload.holdCheck = {
              type: "mrc20",
              ticker: payMrc20.tick,
              amount: "1"
            };
          } else {
            contorlPayload.payCheck = {
              type: "chainCoin",
              ticker: "",
              amount: price,
              payTo: address
            };
          }
          contorlPath = "".concat(host || "", "/metaaccess/accesscontrol");
          contorlMetaidData = {
            operation: "create",
            body: JSON.stringify(contorlPayload),
            path: contorlPath,
            contentType: "text/plain",
            flag: "metaid"
          };
          if (!(chain === "btc")) {
            _context.next = 55;
            break;
          }
          _context.next = 50;
          return btcConnector.inscribe({
            inscribeDataArray: [contorlMetaidData],
            options: {
              noBroadcast: "no",
              feeRate: Number(feeRate),
              service: serviceFee
            }
          });
        case 50:
          _ret = _context.sent;
          if (!_ret.status) {
            _context.next = 53;
            break;
          }
          throw new Error(_ret.status);
        case 53:
          _context.next = 57;
          break;
        case 55:
          _context.next = 57;
          return mvcConnector.createPin(contorlMetaidData, {
            network: _config__WEBPACK_IMPORTED_MODULE_8__/* .curNetwork */ .eM,
            signMessage: "create accesscontrol",
            serialAction: "finish",
            transactions: _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(transactions),
            feeRate: feeRate
          });
        case 57:
          return _context.abrupt("return", {
            payload: payload,
            pid: pid
          });
        case 58:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function postPayBuzz(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12, _x13, _x14) {
    return _ref2.apply(this, arguments);
  };
}();
var postVideo = /*#__PURE__*/function () {
  var _ref3 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee2(file, host, chain, btcConnector, mvcConnector, mvcFeeRate) {
    var _chunkTransactions;
    var chunkTransactions, chunkSize, _yield$processFile, chunks, chunkNumber, sha256, fileSize, dataType, name, chunkPids, chunkList, _loop, i, metaidData, _yield$createPin2, pinTransations;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee2$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          //TODO
          chunkTransactions = [];
          chunkSize = 1024 * 1024 * 0.2;
          _context3.next = 4;
          return (0,_file__WEBPACK_IMPORTED_MODULE_6__/* .processFile */ .$E)(file, chunkSize);
        case 4:
          _yield$processFile = _context3.sent;
          chunks = _yield$processFile.chunks;
          chunkNumber = _yield$processFile.chunkNumber;
          sha256 = _yield$processFile.sha256;
          fileSize = _yield$processFile.fileSize;
          dataType = _yield$processFile.dataType;
          name = _yield$processFile.name;
          chunkPids = [];
          chunkList = [];
          _loop = /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _loop() {
            var _chunks$i, chunk, hash, metaidData, serialAction, _yield$createPin3, transactions, txid, txids;
            return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _loop$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _chunks$i = chunks[i], chunk = _chunks$i.chunk, hash = _chunks$i.hash;
                  metaidData = {
                    operation: "create",
                    body: chunk,
                    path: "".concat(host || "", "/file/chunk/").concat(hash),
                    contentType: "metafile/chunk;binary",
                    encoding: "base64",
                    flag: "metaid"
                  };
                  if (!(chain === "btc")) {
                    _context2.next = 5;
                    break;
                  }
                  _context2.next = 19;
                  break;
                case 5:
                  serialAction = i === chunks.length - 1 ? "finish" : "combo"; // (i + 1) % 4 === 0 ? "finish" : "combo";
                  _context2.next = 8;
                  return mvcConnector.createPin(metaidData, {
                    network: _config__WEBPACK_IMPORTED_MODULE_8__/* .curNetwork */ .eM,
                    signMessage: "file chunk",
                    serialAction: serialAction,
                    transactions: chunkTransactions,
                    feeRate: mvcFeeRate
                  });
                case 8:
                  _yield$createPin3 = _context2.sent;
                  transactions = _yield$createPin3.transactions;
                  txid = _yield$createPin3.txid;
                  txids = _yield$createPin3.txids;
                  console.log(txids, "txids");
                  console.log(txid, "txid");
                  if (!(serialAction === "finish")) {
                    _context2.next = 17;
                    break;
                  }
                  _context2.next = 17;
                  return (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .sleep */ ._v)(20000);
                case 17:
                  if (txids || i === chunks.length - 1) {
                    if (txids) {
                      chunkList = [].concat(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(chunkList), _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(txids.map(function (txid) {
                        return {
                          sha256: hash,
                          pinId: txid + "i0"
                        };
                      })));
                    } else {
                      chunkList = [].concat(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(chunkList), _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(transactions.map(function (tx) {
                        return {
                          sha256: hash,
                          pinId: tx.txComposer.getTxId() + "i0"
                        };
                      })));
                    }
                  }
                  chunkTransactions = transactions;
                case 19:
                case "end":
                  return _context2.stop();
              }
            }, _loop);
          });
          i = 0;
        case 15:
          if (!(i < chunks.length)) {
            _context3.next = 20;
            break;
          }
          return _context3.delegateYield(_loop(), "t0", 17);
        case 17:
          i++;
          _context3.next = 15;
          break;
        case 20:
          metaidData = {
            operation: "create",
            body: JSON.stringify({
              chunkList: chunkList,
              fileSize: fileSize,
              chunkSize: chunkSize,
              dataType: dataType,
              name: name,
              chunkNumber: chunkNumber,
              sha256: sha256
            }),
            path: "".concat(host || "", "/file/index/").concat((0,uuid__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)()),
            contentType: "metafile/index;utf-8",
            flag: "metaid"
          };
          _context3.next = 23;
          return mvcConnector.createPin(metaidData, {
            network: _config__WEBPACK_IMPORTED_MODULE_8__/* .curNetwork */ .eM,
            signMessage: "file index",
            serialAction: "combo",
            transactions: _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()((_chunkTransactions = chunkTransactions) !== null && _chunkTransactions !== void 0 ? _chunkTransactions : []),
            feeRate: mvcFeeRate
          });
        case 23:
          _yield$createPin2 = _context3.sent;
          pinTransations = _yield$createPin2.transactions;
          chunkTransactions = pinTransations;
          return _context3.abrupt("return", {
            transactions: chunkTransactions,
            metafile: "metafile://video/" + chunkTransactions[chunkTransactions.length - 1].txComposer.getTxId() + "i0"
          });
        case 27:
        case "end":
          return _context3.stop();
      }
    }, _callee2);
  }));
  return function postVideo(_x15, _x16, _x17, _x18, _x19, _x20) {
    return _ref3.apply(this, arguments);
  };
}();
var postChunk = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
        case "end":
          return _context4.stop();
      }
    }, _callee3);
  }));
  return function postChunk() {
    return _ref4.apply(this, arguments);
  };
}()));
var postImages = /*#__PURE__*/function () {
  var _ref5 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee4(images, feeRate, host, chain, btcConnector, mvcConnector) {
    var fileOptions, _iterator, _step, image, fileEntity, imageRes, fileTransactions, _fileEntity, finalAttachMetafileUri, i, fileOption, _yield$_fileEntity$cr, transactions;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee4$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!(images.length === 0)) {
            _context5.next = 2;
            break;
          }
          return _context5.abrupt("return", {
            attachments: [],
            fileTransactions: []
          });
        case 2:
          fileOptions = [];
          _iterator = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1___default()(images);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              image = _step.value;
              fileOptions.push({
                body: Buffer.from(image.data, "hex").toString("base64"),
                contentType: "".concat(image.fileType, ";binary"),
                encoding: "base64",
                flag: _config__WEBPACK_IMPORTED_MODULE_8__/* .FLAG */ .BZ,
                path: "".concat(host || "", "/file")
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (!(chain === "btc")) {
            _context5.next = 15;
            break;
          }
          _context5.next = 8;
          return btcConnector.use("file");
        case 8:
          fileEntity = _context5.sent;
          _context5.next = 11;
          return fileEntity.create({
            dataArray: fileOptions,
            options: {
              noBroadcast: "no",
              feeRate: Number(feeRate)
            }
          });
        case 11:
          imageRes = _context5.sent;
          return _context5.abrupt("return", {
            attachments: imageRes.revealTxIds.map(function (rid) {
              return "metafile://" + rid + "i0";
            }),
            fileTransactions: []
          });
        case 15:
          fileTransactions = [];
          _context5.next = 18;
          return mvcConnector.use("file");
        case 18:
          _fileEntity = _context5.sent;
          finalAttachMetafileUri = [];
          i = 0;
        case 21:
          if (!(i < fileOptions.length)) {
            _context5.next = 35;
            break;
          }
          fileOption = fileOptions[i];
          _context5.next = 25;
          return _fileEntity.create({
            data: fileOption,
            options: {
              network: _config__WEBPACK_IMPORTED_MODULE_8__/* .curNetwork */ .eM,
              signMessage: "upload image file",
              serialAction: "combo",
              transactions: fileTransactions
            }
          });
        case 25:
          _yield$_fileEntity$cr = _context5.sent;
          transactions = _yield$_fileEntity$cr.transactions;
          if (transactions) {
            _context5.next = 29;
            break;
          }
          throw new Error("upload image file failed");
        case 29:
          finalAttachMetafileUri.push("metafile://" + transactions[transactions.length - 1].txComposer.getTxId() + "i0");
          console.log("finalAttachMetafileUri", finalAttachMetafileUri);
          fileTransactions = transactions;
        case 32:
          i++;
          _context5.next = 21;
          break;
        case 35:
          return _context5.abrupt("return", {
            fileTransactions: fileTransactions,
            attachments: finalAttachMetafileUri
          });
        case 36:
        case "end":
          return _context5.stop();
      }
    }, _callee4);
  }));
  return function postImages(_x21, _x22, _x23, _x24, _x25, _x26) {
    return _ref5.apply(this, arguments);
  };
}();
var postEncryptImages = /*#__PURE__*/function () {
  var _ref6 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee5(images, feeRate, host, chain, btcConnector, mvcConnector, randomKey, _fileTransactions) {
    var fileOptions, _iterator2, _step2, image, fileEntity, imageRes, fileTransactions, _fileEntity2, finalAttachMetafileUri, i, fileOption, _yield$_fileEntity2$c, transactions;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee5$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (!(images.length === 0)) {
            _context6.next = 2;
            break;
          }
          return _context6.abrupt("return", {
            attachments: [],
            fileTransactions: _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(_fileTransactions)
          });
        case 2:
          fileOptions = [];
          _iterator2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1___default()(images);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              image = _step2.value;
              fileOptions.push({
                body: (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .encryptPayloadAES */ .yI)(randomKey, Buffer.from(image.data, "hex").toString("hex")),
                contentType: "binary",
                encoding: "binary",
                flag: _config__WEBPACK_IMPORTED_MODULE_8__/* .FLAG */ .BZ,
                path: "".concat(host || "", "/file")
              });
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (!(chain === "btc")) {
            _context6.next = 15;
            break;
          }
          _context6.next = 8;
          return btcConnector.use("file");
        case 8:
          fileEntity = _context6.sent;
          _context6.next = 11;
          return fileEntity.create({
            dataArray: fileOptions,
            options: {
              noBroadcast: "no",
              feeRate: Number(feeRate)
            }
          });
        case 11:
          imageRes = _context6.sent;
          return _context6.abrupt("return", {
            attachments: imageRes.revealTxIds.map(function (rid) {
              return "metafile://" + rid + "i0";
            }),
            fileTransactions: []
          });
        case 15:
          fileTransactions = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(_fileTransactions);
          _context6.next = 18;
          return mvcConnector.use("file");
        case 18:
          _fileEntity2 = _context6.sent;
          finalAttachMetafileUri = [];
          i = 0;
        case 21:
          if (!(i < fileOptions.length)) {
            _context6.next = 34;
            break;
          }
          fileOption = fileOptions[i];
          _context6.next = 25;
          return _fileEntity2.create({
            data: fileOption,
            options: {
              network: _config__WEBPACK_IMPORTED_MODULE_8__/* .curNetwork */ .eM,
              signMessage: "upload image file",
              serialAction: "combo",
              transactions: fileTransactions
            }
          });
        case 25:
          _yield$_fileEntity2$c = _context6.sent;
          transactions = _yield$_fileEntity2$c.transactions;
          if (transactions) {
            _context6.next = 29;
            break;
          }
          throw new Error("upload image file failed");
        case 29:
          finalAttachMetafileUri.push("metafile://" + transactions[transactions.length - 1].txComposer.getTxId() + "i0");
          fileTransactions = transactions;
        case 31:
          i++;
          _context6.next = 21;
          break;
        case 34:
          return _context6.abrupt("return", {
            fileTransactions: fileTransactions,
            attachments: finalAttachMetafileUri
          });
        case 35:
        case "end":
          return _context6.stop();
      }
    }, _callee5);
  }));
  return function postEncryptImages(_x27, _x28, _x29, _x30, _x31, _x32, _x33, _x34) {
    return _ref6.apply(this, arguments);
  };
}();
var buildAccessPass = /*#__PURE__*/function () {
  var _ref7 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee6(pid, host, btcConnector, feeRate, payAddress, payAmount) {
    var payload, path, metaidData, res;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee6$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          //TODO
          payload = {
            accessControlID: pid
          };
          path = "".concat(host || "", "/metaaccess/accesspass");
          metaidData = {
            operation: "create",
            body: JSON.stringify(payload),
            path: path,
            contentType: "text/plain",
            flag: "metaid"
          };
          _context7.next = 5;
          return btcConnector.inscribe({
            inscribeDataArray: [metaidData],
            options: {
              noBroadcast: "no",
              feeRate: Number(feeRate),
              service: {
                address: payAddress,
                // payCheck.payTo
                satoshis: new decimal_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z(payAmount).mul(1e8).toString() // payCheck.amount
              }
            }
          });
        case 5:
          res = _context7.sent;
          if (!res.status) {
            _context7.next = 8;
            break;
          }
          throw new Error(res.status);
        case 8:
        case "end":
          return _context7.stop();
      }
    }, _callee6);
  }));
  return function buildAccessPass(_x35, _x36, _x37, _x38, _x39, _x40) {
    return _ref7.apply(this, arguments);
  };
}();
var buildMRc20AccessPass = /*#__PURE__*/function () {
  var _ref8 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee7(pid, host, btcConnector, feeRate, payAddress, payAmount, payMrc20) {
    var body, payload, path, metaidData, _yield$window$metaidw2, commitTx, revealTx;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee7$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          body = JSON.stringify([{
            amount: String(payAmount),
            vout: 1,
            id: payMrc20.mrc20Id
          }]);
          payload = {
            accessControlID: pid
          };
          path = "".concat(host || "", "/metaaccess/accesspass");
          metaidData = {
            operation: "create",
            body: JSON.stringify(payload),
            path: path,
            contentType: "text/plain",
            flag: "metaid"
          };
          if (window.metaidwallet.btc.transferMRC20WithInscribe) {
            _context8.next = 6;
            break;
          }
          throw new Error("transferMRC20WithInscribe is not supported in this wallet");
        case 6:
          _context8.next = 8;
          return window.metaidwallet.btc.transferMRC20WithInscribe({
            body: body,
            amount: payAmount,
            mrc20TickId: payMrc20.mrc20Id,
            flag: "metaid",
            commitFeeRate: feeRate,
            revealFeeRate: feeRate,
            revealAddr: payAddress,
            inscribeMetaIdData: metaidData
          })["catch"](function (e) {
            throw new Error(e);
          });
        case 8:
          _yield$window$metaidw2 = _context8.sent;
          commitTx = _yield$window$metaidw2.commitTx;
          revealTx = _yield$window$metaidw2.revealTx;
          if (!(!commitTx || !revealTx)) {
            _context8.next = 13;
            break;
          }
          throw new Error("build mrc20 access pass failed");
        case 13:
          console.log(commitTx, revealTx, "commitTx, revealTx");
          _context8.next = 16;
          return (0,_request_api__WEBPACK_IMPORTED_MODULE_13__/* .broadcast */ .fM)(commitTx.rawTx, "btc");
        case 16:
          _context8.next = 18;
          return (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .sleep */ ._v)(1000);
        case 18:
          _context8.next = 20;
          return (0,_request_api__WEBPACK_IMPORTED_MODULE_13__/* .broadcast */ .fM)(revealTx.rawTx, "btc");
        case 20:
          return _context8.abrupt("return", {
            commitTx: commitTx,
            revealTx: revealTx
          });
        case 21:
        case "end":
          return _context8.stop();
      }
    }, _callee7);
  }));
  return function buildMRc20AccessPass(_x41, _x42, _x43, _x44, _x45, _x46, _x47) {
    return _ref8.apply(this, arguments);
  };
}();
function sha256ToHex(input) {
  return crypto__WEBPACK_IMPORTED_MODULE_15__/* .createHash */ .js("sha256").update(input).digest("hex");
}
var formatSimpleBuzz = /*#__PURE__*/function () {
  var _ref9 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee8(parseSummary) {
    var _parseSummary$mention;
    var _publicFiles, _nfts, _videos, i, _parseSummary$attachm, _nftId, nft;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee8$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _publicFiles = [];
          _nfts = [];
          _videos = [];
          if (parseSummary.attachments && Array.isArray(parseSummary.attachments[0])) {
            parseSummary.attachments = parseSummary.attachments[0];
          }
          i = 0;
        case 5:
          if (!(i < ((_parseSummary$attachm = parseSummary.attachments) !== null && _parseSummary$attachm !== void 0 ? _parseSummary$attachm : []).length)) {
            _context9.next = 24;
            break;
          }
          if (!parseSummary.attachments[i].startsWith("metafile://nft/mrc721/")) {
            _context9.next = 20;
            break;
          }
          _nftId = parseSummary.attachments[i].split("metafile://nft/mrc721/")[1];
          _context9.prev = 8;
          _context9.next = 11;
          return (0,_request_api__WEBPACK_IMPORTED_MODULE_13__/* .getNFTItem */ .oK)({
            pinId: _nftId
          });
        case 11:
          nft = _context9.sent;
          parseSummary.attachments[i] = JSON.parse(atob(nft.data.content)).attachment[0].content;
          _nfts.push(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, nft.data), {}, {
            previewImage: parseSummary.attachments[i]
          }));
          _context9.next = 18;
          break;
        case 16:
          _context9.prev = 16;
          _context9.t0 = _context9["catch"](8);
        case 18:
          _context9.next = 21;
          break;
        case 20:
          if (parseSummary.attachments[i].startsWith("metafile://video/")) {
            _videos.push(parseSummary.attachments[i].split("metafile://video/")[1]);
          } else {
            if (parseSummary.attachments[i].startsWith("metafile://")) {
              parseSummary.attachments[i] = parseSummary.attachments[i].split("metafile://")[1];
            }
            _publicFiles.push(parseSummary.attachments[i]);
          }
        case 21:
          i++;
          _context9.next = 5;
          break;
        case 24:
          return _context9.abrupt("return", {
            publicContent: parseSummary.content,
            encryptContent: "",
            publicFiles: _publicFiles,
            nfts: _nfts,
            mentions: (_parseSummary$mention = parseSummary.mentions) !== null && _parseSummary$mention !== void 0 ? _parseSummary$mention : {},
            encryptFiles: [],
            video: _videos,
            buzzType: "normal",
            status: "unpurchased"
          });
        case 25:
        case "end":
          return _context9.stop();
      }
    }, _callee8, null, [[8, 16]]);
  }));
  return function formatSimpleBuzz(_x48) {
    return _ref9.apply(this, arguments);
  };
}();
var formatPayBuzz = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(parseSummary) {
    return _regeneratorRuntime().wrap(function _callee9$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
        case "end":
          return _context10.stop();
      }
    }, _callee9);
  }));
  return function formatPayBuzz(_x49) {
    return _ref10.apply(this, arguments);
  };
}()));
var decodePayBuzz = /*#__PURE__*/function () {
  var _ref11 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee10(buzzItem, manPubKey, isLogin) {
    var _attachments, _parseSummary, _parseSummary$encrypt, _parseSummary2, _parseSummary$mention7;
    var _summary, mentions, isSummaryJson, parseSummary, _parseSummary$mention6, _publicFiles, _nfts, i, _nftId, nft, _yield$getControlByCo, controlPin, _parseSummary$mention2, _parseSummary$mention3, btcAddress, mvcAddress, _parseSummary$mention4, manPubkey, encryptedKey, _yield$window$metaidw3, _sharedSecret, _ecdhPubKey, key, encryptContent, _parseSummary3, encryptFiles, decryptFiles, pids, _pins, pins, _yield$window$metaidw4, sharedSecret, ecdhPubKey, timestamp, _signStr, sign, data, decryptRet, _parseSummary$mention5;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee10$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _summary = buzzItem.content;
          mentions = {};
          isSummaryJson = _summary.startsWith("{") && _summary.endsWith("}"); // console.log("isjson", isSummaryJson);
          // console.log("summary", summary);
          parseSummary = {
            content: "",
            attachments: []
          };
          try {
            parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
          } catch (e) {
            console.log("parse summary error", e);
            isSummaryJson = false;
          }
          // const parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
          if (isSummaryJson) {
            _context11.next = 7;
            break;
          }
          return _context11.abrupt("return", {
            publicContent: _summary,
            encryptContent: "",
            publicFiles: [],
            encryptFiles: [],
            mentions: {},
            nfts: [],
            video: [],
            buzzType: "normal",
            status: "unpurchased"
          });
        case 7:
          if ((0,ramda__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)((_attachments = (_parseSummary = parseSummary) === null || _parseSummary === void 0 ? void 0 : _parseSummary.attachments) !== null && _attachments !== void 0 ? _attachments : [])) {
            _context11.next = 9;
            break;
          }
          return _context11.abrupt("return", formatSimpleBuzz(parseSummary));
        case 9:
          if (!(parseSummary.encryptContent || !(0,ramda__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)((_parseSummary$encrypt = (_parseSummary2 = parseSummary) === null || _parseSummary2 === void 0 ? void 0 : _parseSummary2.encryptFiles) !== null && _parseSummary$encrypt !== void 0 ? _parseSummary$encrypt : []))) {
            _context11.next = 87;
            break;
          }
          _publicFiles = [];
          _nfts = [];
          i = 0;
        case 13:
          if (!(i < parseSummary.publicFiles.length)) {
            _context11.next = 33;
            break;
          }
          if (!parseSummary.publicFiles[i].startsWith("metafile://nft/mrc721/")) {
            _context11.next = 28;
            break;
          }
          _nftId = parseSummary.publicFiles[i].split("metafile://nft/mrc721/")[1];
          _context11.prev = 16;
          _context11.next = 19;
          return (0,_request_api__WEBPACK_IMPORTED_MODULE_13__/* .getNFTItem */ .oK)({
            pinId: _nftId
          });
        case 19:
          nft = _context11.sent;
          parseSummary.publicFiles[i] = JSON.parse(atob(nft.data.content)).attachment[0].content;
          _nfts.push(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, nft.data), {}, {
            previewImage: parseSummary.publicFiles[i]
          }));
          _context11.next = 26;
          break;
        case 24:
          _context11.prev = 24;
          _context11.t0 = _context11["catch"](16);
        case 26:
          _context11.next = 30;
          break;
        case 28:
          if (parseSummary.publicFiles[i].startsWith("metafile://")) {
            parseSummary.publicFiles[i] = parseSummary.publicFiles[i].split("metafile://")[1];
          }
          _publicFiles.push(parseSummary.publicFiles[i]);
        case 30:
          i++;
          _context11.next = 13;
          break;
        case 33:
          _context11.next = 35;
          return (0,_request_api__WEBPACK_IMPORTED_MODULE_13__/* .getControlByContentPin */ .up)({
            pinId: buzzItem.id
          });
        case 35:
          _yield$getControlByCo = _context11.sent;
          controlPin = _yield$getControlByCo.data;
          if (controlPin) {
            _context11.next = 39;
            break;
          }
          return _context11.abrupt("return", {
            publicContent: parseSummary.publicContent,
            encryptContent: "",
            publicFiles: _publicFiles,
            encryptFiles: [],
            video: [],
            mentions: (_parseSummary$mention2 = parseSummary.mentions) !== null && _parseSummary$mention2 !== void 0 ? _parseSummary$mention2 : {},
            nfts: _nfts,
            buzzType: "normal",
            status: "unpurchased"
          });
        case 39:
          if (isLogin) {
            _context11.next = 41;
            break;
          }
          return _context11.abrupt("return", {
            publicContent: parseSummary.publicContent,
            encryptContent: "",
            publicFiles: _publicFiles,
            encryptFiles: parseSummary.encryptFiles,
            nfts: _nfts,
            mentions: (_parseSummary$mention3 = parseSummary.mentions) !== null && _parseSummary$mention3 !== void 0 ? _parseSummary$mention3 : {},
            video: [],
            buzzType: "pay",
            status: "unpurchased"
          });
        case 41:
          _context11.next = 43;
          return window.metaidwallet.btc.getAddress();
        case 43:
          btcAddress = _context11.sent;
          _context11.next = 46;
          return window.metaidwallet.getAddress();
        case 46:
          mvcAddress = _context11.sent;
          if (!(buzzItem.creator === btcAddress || buzzItem.creator === mvcAddress)) {
            _context11.next = 66;
            break;
          }
          manPubkey = controlPin.manPubkey, encryptedKey = controlPin.encryptedKey;
          _context11.next = 51;
          return window.metaidwallet.common.ecdh({
            externalPubKey: manPubKey
          });
        case 51:
          _yield$window$metaidw3 = _context11.sent;
          _sharedSecret = _yield$window$metaidw3.sharedSecret;
          _ecdhPubKey = _yield$window$metaidw3.ecdhPubKey;
          key = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .decryptPayloadAES */ .LN)(_sharedSecret, encryptedKey);
          encryptContent = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .decryptPayloadAES */ .LN)(key, parseSummary.encryptContent);
          _parseSummary3 = parseSummary, encryptFiles = _parseSummary3.encryptFiles;
          decryptFiles = [];
          if (!(encryptFiles.length > 0)) {
            _context11.next = 65;
            break;
          }
          pids = encryptFiles.map(function (d) {
            return d.split("metafile://")[1];
          });
          _context11.next = 62;
          return Promise.all(pids.map(function (pid) {
            return (0,_request_api__WEBPACK_IMPORTED_MODULE_13__/* .getPinDetailByPid */ .Wm)({
              pid: pid
            });
          }));
        case 62:
          _pins = _context11.sent;
          pins = _pins.filter(function (d) {
            return Boolean(d);
          });
          decryptFiles = pins.map(function (pin) {
            return Buffer.from((0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .decryptPayloadAES */ .LN)(key, pin.contentSummary), "hex").toString("base64");
          });
        case 65:
          return _context11.abrupt("return", {
            publicContent: parseSummary.publicContent,
            encryptContent: Buffer.from(encryptContent, "hex").toString("utf-8"),
            publicFiles: _publicFiles,
            nfts: _nfts,
            video: [],
            mentions: (_parseSummary$mention4 = parseSummary.mentions) !== null && _parseSummary$mention4 !== void 0 ? _parseSummary$mention4 : {},
            encryptFiles: decryptFiles,
            buzzType: "pay",
            status: "purchased"
          });
        case 66:
          _context11.next = 68;
          return window.metaidwallet.common.ecdh({
            externalPubKey: manPubKey
          });
        case 68:
          _yield$window$metaidw4 = _context11.sent;
          sharedSecret = _yield$window$metaidw4.sharedSecret;
          ecdhPubKey = _yield$window$metaidw4.ecdhPubKey;
          timestamp = Math.floor(Date.now() / 1000);
          _signStr = "".concat(sharedSecret).concat(timestamp).concat(btcAddress);
          sign = sha256ToHex(_signStr);
          _context11.prev = 74;
          _context11.next = 77;
          return (0,_request_api__WEBPACK_IMPORTED_MODULE_13__/* .getDecryptContent */ .r$)({
            publickey: ecdhPubKey,
            address: btcAddress,
            sign: sign,
            timestamp: timestamp,
            pinId: buzzItem.id,
            controlPath: "",
            controlPinId: controlPin.pinId
          }, controlPin.manDomain);
        case 77:
          decryptRet = _context11.sent;
          data = decryptRet.data;
          _context11.next = 84;
          break;
        case 81:
          _context11.prev = 81;
          _context11.t1 = _context11["catch"](74);
          console.error("getDecryptContent error", _context11.t1);
        case 84:
          if (data) {
            _context11.next = 86;
            break;
          }
          return _context11.abrupt("return", {
            publicContent: parseSummary.publicContent,
            encryptContent: parseSummary.encryptContent,
            publicFiles: _publicFiles,
            nfts: _nfts,
            encryptFiles: parseSummary.encryptFiles,
            buzzType: "pay",
            mentions: (_parseSummary$mention5 = parseSummary.mentions) !== null && _parseSummary$mention5 !== void 0 ? _parseSummary$mention5 : {},
            video: [],
            status: "unpurchased"
          });
        case 86:
          return _context11.abrupt("return", {
            publicContent: parseSummary.publicContent,
            encryptContent: data.status === "purchased" ? data.contentResult || "" : "",
            publicFiles: _publicFiles,
            nfts: _nfts,
            mentions: (_parseSummary$mention6 = parseSummary.mentions) !== null && _parseSummary$mention6 !== void 0 ? _parseSummary$mention6 : {},
            video: [],
            encryptFiles: data.status === "purchased" ? data.filesResult || [] : parseSummary.encryptFiles,
            buzzType: "pay",
            status: data.status
          });
        case 87:
          return _context11.abrupt("return", {
            publicContent: parseSummary.content,
            encryptContent: "",
            mentions: (_parseSummary$mention7 = parseSummary.mentions) !== null && _parseSummary$mention7 !== void 0 ? _parseSummary$mention7 : {},
            publicFiles: [],
            encryptFiles: [],
            video: [],
            nfts: [],
            buzzType: "normal",
            status: "unpurchased"
          });
        case 88:
        case "end":
          return _context11.stop();
      }
    }, _callee10, null, [[16, 24], [74, 81]]);
  }));
  return function decodePayBuzz(_x50, _x51, _x52) {
    return _ref11.apply(this, arguments);
  };
}();

/***/ }),

/***/ 99915:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $E: function() { return /* binding */ processFile; },
/* harmony export */   V6: function() { return /* binding */ image2Attach; },
/* harmony export */   nU: function() { return /* binding */ convertToFileList; }
/* harmony export */ });
/* unused harmony exports IsEncrypt, parseMetaFile, parseAvatarWithMetaid, parseAvatarWithUri, compressImage, FileToAttachmentItem, FileToBinaryData, mergeFileLists, removeFileFromList, calculateChunkHash */
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8922);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25778);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto_js_enc_hex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2447);
/* harmony import */ var crypto_js_enc_hex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_hex__WEBPACK_IMPORTED_MODULE_4__);
/* provided dependency */ var Buffer = __webpack_require__(36379)["Buffer"];


/* eslint-disable no-async-promise-executor */
/* eslint-disable @typescript-eslint/ban-ts-comment */




var CryptoJS = (crypto_js__WEBPACK_IMPORTED_MODULE_3___default());
var IsEncrypt = /*#__PURE__*/function (IsEncrypt) {
  IsEncrypt[IsEncrypt["Yes"] = 1] = "Yes";
  IsEncrypt[IsEncrypt["No"] = 0] = "No";
  return IsEncrypt;
}({});
function parseMetaFile(rawUri) {
  // console.log("url", rawUri);
  // remove prefix: metafile://, then replace .jpeg with .jpg
  var METAFILE_API_HOST = "https://api.show3.io/metafile";
  var METACONTRACT_API_HOST = "https://api.show3.io/metafile/metacontract";
  var uri = rawUri.split(/metafile:\/\/|metacontract:\/\//)[1];
  // if there is no extension name in metaFile, add .png
  if (rawUri.includes("metafile")) {
    return "".concat(METAFILE_API_HOST, "/").concat(uri);
  } else if (rawUri.includes("metacontract")) {
    return "".concat(METACONTRACT_API_HOST, "/").concat(uri);
  } else {
    return rawUri;
  }
}
function parseAvatarWithMetaid(metaid) {
  var METAFILE_API_HOST = "https://api.show3.io/metafile";
  return "".concat(METAFILE_API_HOST, "/avatar/compress/").concat(metaid);
}
function parseAvatarWithUri(originUri, txid) {
  var METAFILE_API_HOST = "https://api.show3.io/metafile";
  if (originUri.includes("metafile")) {
    return "".concat(METAFILE_API_HOST, "/compress/").concat(txid);
  }
  if (originUri.includes("sensibile")) {
    return "".concat(METAFILE_API_HOST, "/sensible/").concat(originUri.split("sensibile://")[1]);
  }
  if (originUri.includes("metacontract")) {
    return "".concat(METAFILE_API_HOST, "/metacontract/").concat(originUri.split("metacontract://")[1]);
  }
}

// https://api.show3.io/metafile/sensible/0d0fc08db6e27dc0263b594d6b203f55fb5282e2/204dafb6ee543796b4da6f1d4134c1df2609bdf1/6
// https://api.show3.io/metafile/avatar/compress/2df27132058cd24ff9ef2939315c9ca0d8ec88733f5bda0df130b7798efea972

// export async function compressImage(image: File) {
//   const compress = (quality: number): Promise<File> =>
//     new Promise((resolve, reject) => {
//       new Compressor(image, {
//         quality,
//         convertSize: 100_000, // 100KB
//         success: resolve as () => File,
//         error: reject,
//       });
//     });

//   // Use 0.6 compression ratio first; If the result is still larger than 1MB, use half of the compression ratio; Repeat 5 times until the result is less than 1MB, otherwise raise an error
//   let useQuality = 0.6;
//   for (let i = 0; i < 5; i++) {
//     const compressed = await compress(useQuality);
//     if (compressed.size < 1_000_000) {
//       return compressed;
//     }
//     useQuality /= 2;
//   }

//   throw new Error('Image is too large');
// }

function compressImage(_x) {
  return _compressImage.apply(this, arguments);
}

// 降文件转为 AttachmentItem， 便于操作/上链
function _compressImage() {
  _compressImage = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee4(image) {
    var options, compressedFile;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          options = {
            maxSizeMB: 0.9,
            maxWidthOrHeight: 2048,
            useWebWorker: true
          };
          _context4.next = 3;
          return (0,browser_image_compression__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(image, options);
        case 3:
          compressedFile = _context4.sent;
          return _context4.abrupt("return", compressedFile);
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _compressImage.apply(this, arguments);
}
function FileToAttachmentItem(file) {
  var encrypt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : IsEncrypt.No;
  return new Promise( /*#__PURE__*/function () {
    var _ref = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(resolve) {
      var readResult, chunkSize, hex, sha256Algo, index;
      return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            readResult = function _readResult(blob) {
              return new Promise(function (resolve) {
                var reader = new FileReader();
                reader.onload = function () {
                  // @ts-ignore
                  var wordArray = crypto_js__WEBPACK_IMPORTED_MODULE_3___default().lib.WordArray.create(reader.result);
                  // @ts-ignore
                  var buffer = Buffer.from(reader.result);
                  // console.log("buffer", buffer, reader.result);
                  hex += buffer.toString("hex"); // 更新hex
                  // 增量更新计算结果
                  sha256Algo.update(wordArray); // 更新hash
                  resolve();
                };
                reader.readAsArrayBuffer(blob);
              });
            };
            // 分块读取，防止内存溢出，这里设置为20MB,可以根据实际情况进行配置
            chunkSize = 20 * 1024 * 1024;
            hex = ""; // 二进制
            sha256Algo = crypto_js__WEBPACK_IMPORTED_MODULE_3___default().algo.SHA256.create();
            index = 0;
          case 5:
            if (!(index < file.size)) {
              _context.next = 11;
              break;
            }
            _context.next = 8;
            return readResult(file.slice(index, index + chunkSize));
          case 8:
            index += chunkSize;
            _context.next = 5;
            break;
          case 11:
            resolve({
              data: hex,
              fileName: file.name,
              fileType: file.type,
              sha256: crypto_js_enc_hex__WEBPACK_IMPORTED_MODULE_4___default().stringify(sha256Algo.finalize()),
              url: URL.createObjectURL(file),
              encrypt: encrypt,
              size: file.size
            });
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
function FileToBinaryData(file) {
  var encrypt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : IsEncrypt.No;
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
      var readResult, sha256Algo, binaryData;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            readResult = function _readResult2(file) {
              return new Promise(function (resolve) {
                var reader = new FileReader();
                reader.readAsBinaryString(file);
                reader.onload = function () {
                  var _reader$result;
                  // @ts-ignore
                  var wordArray = CryptoJs.lib.WordArray.create(reader.result);
                  // 增量更新计算结果
                  sha256Algo.update(wordArray); // 更新hash
                  // @ts-ignore
                  // const buffer = Buffer.from(reader.result);
                  // console.log("buffer", buffer, reader.result);
                  // hex += buffer.toString("hex"); // 更新hex

                  binaryData = (_reader$result = reader.result) === null || _reader$result === void 0 ? void 0 : _reader$result.toString("UTF-8");
                  // String.fromCharCode.apply(null, reader.result)
                  resolve();
                };
              });
            };
            sha256Algo = CryptoJs.algo.SHA256.create();
            binaryData = "";
            _context2.next = 5;
            return readResult(file);
          case 5:
            resolve({
              data: binaryData,
              fileName: file.name,
              fileType: file.type,
              sha256: encHex.stringify(sha256Algo.finalize()),
              url: URL.createObjectURL(file),
              encrypt: encrypt,
              size: file.size
            });
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());
}
var image2Attach = /*#__PURE__*/function () {
  var _ref3 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee3(images) {
    var attachments, i, current, compressed, result;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          attachments = [];
          i = 0;
        case 2:
          if (!(i < images.length)) {
            _context3.next = 14;
            break;
          }
          // 压缩图片
          current = images[i];
          _context3.next = 6;
          return compressImage(current);
        case 6:
          compressed = _context3.sent;
          _context3.next = 9;
          return FileToAttachmentItem(current.type === "image/gif" ? current : compressed);
        case 9:
          result = _context3.sent;
          if (result) attachments.push(result);

          // if (attachments.length <= 3) {
          // } else {
          // 	break;
          // }
        case 11:
          i++;
          _context3.next = 2;
          break;
        case 14:
          return _context3.abrupt("return", attachments);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function image2Attach(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var mergeFileLists = function mergeFileLists(fileListA, fileListB) {
  var dataTransfer = new DataTransfer();
  for (var i = 0; i < fileListA.length; i++) {
    dataTransfer.items.add(fileListA[i]);
  }
  for (var _i = 0; _i < fileListB.length; _i++) {
    dataTransfer.items.add(fileListB[_i]);
  }
  return dataTransfer.files;
};
function removeFileFromList(fileList, index) {
  // Step 1: Create a new File array without the file at the specified index
  var filesArray = Array.from(fileList).slice(0, index).concat(Array.from(fileList).slice(index + 1));

  // Step 2: Create a new FileList object with the remaining files
  var newFileList = new DataTransfer();
  for (var i = 0; i < filesArray.length; i++) {
    newFileList.items.add(filesArray[i]);
  }

  // Step 3: Return the new FileList object
  return newFileList.files;
}
var convertToFileList = function convertToFileList(images) {
  var dataTransfer = new DataTransfer();
  images.forEach(function (image) {
    dataTransfer.items.add(image.file); // 添加每个 File 对象
  });
  return dataTransfer.files; // 返回 FileList 对象
};

// Calculate the SHA-256 hash of a chunk
function calculateChunkHash(chunk) {
  // Convert ArrayBuffer to CryptoJS WordArray
  var wordArray = CryptoJS.lib.WordArray.create(new Uint8Array(chunk));
  // Compute the SHA-256 hash
  var hash = CryptoJS.SHA256(wordArray);
  // Return the hash as a hexadecimal string
  return hash.toString(CryptoJS.enc.Hex);
}
// Convert a chunk to a hex string
function chunkToHexString(chunk) {
  // Convert ArrayBuffer to CryptoJS WordArray
  var wordArray = CryptoJS.lib.WordArray.create(new Uint8Array(chunk));
  // Convert the WordArray to a hex string
  return wordArray.toString(CryptoJS.enc.Hex);
}
function processFile(_x5, _x6) {
  return _processFile.apply(this, arguments);
}
function _processFile() {
  _processFile = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee5(file, chunkSize) {
    var totalChunks, chunks, metafile, i, chunk, chunkBuffer, chunkBase64Str, chunkHash;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          console.log("file", file.size);
          totalChunks = Math.ceil(file.size / chunkSize);
          chunks = Array.from({
            length: totalChunks
          }, function (_, index) {
            var start = index * chunkSize;
            var end = Math.min(start + chunkSize, file.size);
            return file.slice(start, end);
          });
          _context5.t0 = calculateChunkHash;
          _context5.next = 6;
          return file.arrayBuffer();
        case 6:
          _context5.t1 = _context5.sent;
          _context5.t2 = (0, _context5.t0)(_context5.t1);
          _context5.t3 = file.size;
          _context5.t4 = chunks.length;
          _context5.t5 = chunkSize;
          _context5.t6 = file.type;
          _context5.t7 = file.name;
          _context5.t8 = [];
          metafile = {
            sha256: _context5.t2,
            fileSize: _context5.t3,
            chunkNumber: _context5.t4,
            chunkSize: _context5.t5,
            dataType: _context5.t6,
            name: _context5.t7,
            chunks: _context5.t8
          };
          i = 0;
        case 16:
          if (!(i < chunks.length)) {
            _context5.next = 27;
            break;
          }
          chunk = chunks[i];
          _context5.next = 20;
          return chunk.arrayBuffer();
        case 20:
          chunkBuffer = _context5.sent;
          // const chunkHex = chunkToHexString(chunkBuffer);
          chunkBase64Str = btoa(new Uint8Array(chunkBuffer).reduce(function (data, _byte) {
            return data + String.fromCharCode(_byte);
          }, ""));
          chunkHash = calculateChunkHash(chunkBuffer);
          metafile.chunks.push({
            chunk: chunkBase64Str,
            hash: chunkHash
          });
        case 24:
          i++;
          _context5.next = 16;
          break;
        case 27:
          return _context5.abrupt("return", metafile);
        case 28:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _processFile.apply(this, arguments);
}

/***/ }),

/***/ 79816:
/***/ (function() {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 33401:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABWxSURBVHic7Z15lJTVlcB/931V1dV006DQ3fQCSoMKKqCiggsCaqIkM4lJBmccYyZj4jABGpc40ZlzMpJkTk4WM6MsGsZEMyZqlGTUJI7RaECFGCOKgILKooHuZmkgNHTTtX3vzh9fiw1UNbV/1ervHI9N1Vtu1a23fPfde5/wAUAfwaGjZmikK3ASjrkQtBLVOoQKEUarElaoFhgK4iq6x4i0q9Kl6C4RaQX2iWoLOJvjgdjqyp07d8t8rN+fLVfEbwGyQZfUD+2OmakGvUDRCSBTQIP57UXiCKtQfc7CS10m/kzNnPbO/PZRePqFgnXJxGA0sfMSVC9V1SsQmtAiyy4oymYVHhfkyTeCw54/e9Yr8aLKkAUlreDYosZJFp2pqtcBVX7LczjSKqJPGpHFwVNPel2mL0/4LVEySk7B+5fUDw3GmAtyNegoSlDGI1AR2axwbzyo91TNatvtt0C9KZkvL7Ko4WSrOtcg1yka9lue7JAosNRVbq+c17rGb2mgBBTcvbBxGka/hNWrAMdvefKEK8jj4sg3yma3rPVTEN8U3HnHyFrHid0OerWfchQYFZFfYpxbwrO3bvFDgKJ/sbq4ujJK8Da13ASYYvfvE9Yg80Na/j2ZtylazI6LquCuhY0zDPYHwNhi9ltCtFhldsW8tl8Xq8OiKHjvd5oGlVdE7wS9hg/PqE2FVeTBaCLYfNyN7+4rdGcFV3D3gropYswiVR1f6L76EyKyzghfCM1pfa2Q/RR0NEUWNXxFxDz7kXKPRlXHuVZf7l7YeGsh+ynICNYlTYOi8eijik4rukmxvyGoKL8rC4WvlFlbOvLffJ7RBcOqo8Y8qcrEfLf9QUaE1xKJsssrb3hnZ17bzWdjkUUNJ6vqY3x4d8k5IfAmDleEZ7e9lcc288PBO+vPF5FfIFqXrzY/pOxwMR+vbG5Zl4/G8qLg7oWN08A+CfRTG3JpIdCtmE+UN7csz0NbudG5sHFcAPuSQnmubX3EYUTUcsmA69v+kEsjOT0mRe6qP8XBPv2RcgtCWER+EVnUcHIujWSt4M47Rtbi8hgwLBcBPqIPROtU9TFdMKw62yayUrAuaRoUCER/qzAm2479oV8+ko+NGvOkLmkalE3lQDaVorHIIwpnZFPXTwLnXI854RJs6x+wrS9it78M8YOA+i1an6gyMRqPPgpcnGndjH/S3Qsbb0Xst/ujhSp0xcOYxgvffyERxbavw7auJPHqDyG23z/hjoWggswJz229O7NqGRBb3HCGa/Vlshz5vhIcQPhLayGQZD8Y6yRy75mQOHj4604Y1AVbGs6TgsRV7SXl87a/kG6dtNfgv/zXiYOtcj/9UbmAqZkATijpe3bHq+AeeQ4vBKd9m9AVDxM4/98wI6YjA2rB+PfxFQ2KMYv2fif99ThtacsC8YWqOi470fzHNJwPktzly27/kzdSexMcgGk4D6kagamfBGfNRqP70b9sxG5bQWLVgiQ/isKjquO9s3W+mE75tEZw14L6vxb073MRzG9M/bkp3lFs69G2BKkagVT0troKUjYIM+xsTNOMo38QRUWv6VrYOCOdksdUsC4YXWaEu9IpW7KEBiI1E5K+pdH92D1H2/ZN/WRwkkfD2JYVYH31czcG+wNdXF15zILHKhCT7q8BjXkRK0ekehymcUryjVIfmJoJSIo6umsNxA4c2RNmWIrTTlXszoI6YaTL2CjB245VqM81OHLXiCbrJubnTaQcccbMJDDhS+DGsDtfw7aswLb9CbvjFW89TDFtmrqzU26O7I5Xkq+/9eckLa+JCJpkSvcDtdzUecfI2/s6Q+57k2Xd71IqU7MYnBOme387IUz9ue+vq/GD3vNsywps6x+xu9ZAItKjOME0XpC8TbXYliTrb0UdUpni1LNzO3pwV+6fJz8Yz7eca1IVSKng6F2N461rP1cQsbJABtQesenpRXAApn6St9sFNNqB7ngVu2sNtv0NZEhy/wON7EP3Jll/R0xNueN2//x70FIKG9aruxc2/jjV0WJKBaurt1FCxlvTeD4EytIqK2WDkBOmY94b8SnQPRvQyJGeqwZTk8JHUBW7qyTW394IotcCy5O9mXT67VzQMEHRTxdSqkyR2jNA8rtayKATCEy+BTP6r5DKem/UOsHDzZm9sQk0yZTuN6J6VcedjScley/pCHaEmymlQDATwEn1peeADGwkMHEOqEUT3dC1A9v2J6SiJml52/FuKa2/h1AIlDl2LnD9ke8dNST2L6kfCswshmBp45Rhd69HuwsUeisGCVYgg0fhnHpVypnCM4iU6MmT8k89ujuMo0ZwMC7Xgaa32BWLeBfxp+eCCDJ4FKZhMmb4VJwRUyE4oGhiSEUtMmSMtzHT0lK0QtgLnGd+79cP20TpsmmB6BsbN6jq6GIKlzXh4wmcdyuBPkZd3lHF7lyN+/pPcTf9BhLdlM6olk3lza2HrcWHKbjnOPDVI18vaUyQ4OVLcJouK3rXeqCVxOoluG8+DLGSSMCjjpjzQnNbXnrvhcN+9lZ1Dv1JuQA2jt30a/wYRTKwgeBF36Rs5hOYUZ9I+excTJEs9rD90yEFr1oyMagqaZ1QlBoaO5DZmqg2r6dBctxoQpf9kODFt0NZVq5TeUS+vGrJxEOnJIcUfFp8x0WgDf4IlRsyZExGa7C7+UmiP7+c+HNfJ/HGg2jHn3NXuHFwxs4k9KkHkYHDc2srB1R10JjYrkO+W4d20YrO6F9z83uId5ifNordsQrdsx53z3pASDhlSEUNZuRlOCM/5tm4TTaJ8wRTewbBT95H/FdXowfzGkeWNgGjlwJPQa8RLEpJWa7SpqwKMzSDWDfrYrf1dmlScCPo/q24a+4h9vjfEf3pFBKvLEazdMIzQ8cSvPj7KV2ECo1a+5lDsgDsWlxdiTDKF2lyxBx/ChIeknZ5jR1A/7KpjwIWPbCNxIvfJvazi3DfXJrV9G1OvBjnpCsyrpcXhCbtMXoYgAobvLQ/usFCjyuOSX/3altfTNtLUg+2E3/mRuLPfhXcWIaSiWcGDfgQj6dId8xMhR4FG5hUfCnygBhMXfKD+VTY7S9n2InivrmU+IrbyPRRTAaPwtT4Ex9g0Au8/wOITPVFilwJVaX0tUrF4etv+riv/8zz/sgEEaR+clb95YqXZhmMzsegnO2LFDkig0ci5Rmsv917kx7wp1fZ4r71vxlXM1WN+GM7kin6CI7prK0dmv9k2sXBabwwo+df2/ZiTt4Y2vHnzCuFqvBHwRqko2aoCSZCZ/rQe+6IQWoznJ5bX8ytz2wee9wIfh1GRLoCJxlw++XjEYFyz3c5A2xLbgqW4zOPxdbONnw7bXLMhUZFSsLnOVNk8CgkPDjt8nqwHd23OYcODc7JmT/X6v7W7PvMGa00QPrfUglhhl+Q0cCwbX/Mwd4sOKdfg0nhnZm60wR22/Is+8wDqnVGtR8eMIjB1E0CSX/zYmrPJHDhbZiRl3nut+namp0wzrgvELxwfsZi2t0b0C5/7NEACBUBQWpKxyMhTUwgYwOHDGwkMOHLMOHLaKwT3bcFbV+H3bMB3fcu2rUDoh2oG/P8syrrkNozcE76NKb69Cw8RhR3w0NZWMDyhwijAyJUlJh70TGRIadltP4eVT9UidSMh5rxnuuoWnDjqCa8v8VBnFBOscC6dyPuW49mXT8fqBIOWNXq/maENg15tqyKgUAZQp58DRPdxJ//uu8pIRSqjSDpm4JKhJSxRqWAGyO+7BZsy0q/JUFgaADUd0eijDABTF2qYG4/UbRjK/FlX/Pih0sCcQMKuwWSu/KXIFI9DgkdM+75fdwomogigXBhDuDdKNrxLonXH/A2VfGDx65TJBTdExBopx8p2MlwenbfeYb4szcgg5u8CMTq8Zj6SciAmrSD2fpsf9sKEstv7bFYlRZGpD0gQqQ/7aIlm/Pf+EG0/XXc9tdxAZwy76y28QKcEy/BDDsLghVZyeOceAlm5m9IrPwP3I2PlVRoqSpdAVU2QT/Jzu6U4dRnsIN248kP+N3oIac7d+29yMAGnFGfxBl7ZVb2ZqmoJXjpHUjtGSRWfqtk8mopusugdPktSLrIkLEQSD8WSbvb+/a/AlAX3b+VxOq7iT7ySeJPzUH3ZXFJmXEIjP9HgtO/62surd6ISKtBZLvfgqSLM3xKZv5Xu9ZCPIPfb+Ig7sbHiD58OYnXfpR5Jh0xOGNm4oz7Ymb1Csc+A1ISQTXpIMPOyqi8bXuJrMyw8S4SK+YTX3Zr5qZGMQTOuRGpGpF5v3lGVFsMri2Vh7a+yfT8141jt6/KoUPF3fBzEqvuzHjjJOHBOKenzItSRJzNJlyR2Oi3GOlghp6KBNPPj6WxDnTPmzn2qiRevTurc2Sn6fKM83nlm7JAbLVh0K7dIKWx7esDqZ+cUTiJ3b7q6Oyx2eBGcTf+KuNqMrARKT8q4L6ISHzp73fuMXIlLmh2vqT5FKd6vHfCk+xX74RwRn4so/bsjlfzJBno3rczj+h3Qkilr7cdvHLlUtwAgCJrBM04m3jecMoIXvx9zPEnowfbsW0vYXeu9pSkLoEJ16ZOLZgMG8due75w8qaLj1O0qj4Hh6ILZSXojX4JYxrO99xhjOMZHU75LM4pnwG35zHFCZCJ66nGD3qjLk/IcaMz8h45RKI7bzJkigp/hJ7IhvKQfQ7xya1DHJzTP5/k+Va8bK9OkEz9im3rH/KXy1kMZkTfCdWSCxH3z11H0C4TfwZ6FCyz2naj+HPH/OAmnBHT8tqm5nH9NSdeiqnNPL5Iu/cmyaJXHAQ218xp74Te8cEij/khinPaVXmPwDPDzsE57fNeQlGnjOwiC7yUwsHp38vK9Ki71kLcLxuSPP7eX+9LLvIMql8tqhxlg3DG/G3emzVNH8c0fdzbbHVsxbauRHevx25/Ge3a5Zkv3RhJrVxOCKmowzn1Ki91cZZ5uNxtz/t2sqTw5Ht/H1JwWaD22Uhs+36gqliCOKd8NifnuWNigpjjRmGO6wneUOvdu9DZih5ogYPtaPQA2BgEypHyochxozHHn5zbrBI7gH33mfx8hoyR1jeCw54Hz+H+sLkrsqjhdi3iKJaqEZgTL8HUnoWpP7fHX7l/eRAlw938BPHf/rMvI1iEH4Xntl333r8PW1wMstRFb6JI4XC6fyvu2vtw+QkEy5GKOsyIqZia8ZjhU7xrbLJ5PPETN4a79id+Tc9qRBb3fuGob697YcNG8DuVoXhr4cAGzPCLvOzuDRcgA/w0/aWHu/n/iP92lk+jVzaVnXbSWJm+/NA5Z5LtoT4AHPOyh8KintfFvi24+7bgrvsfL1x0yCkEJn0tY7NlsdDuPSRemO/n5ure3sqFJOmE4yEWCRIpnljpoJ7nxe71fduE/XQuc2PEf3c92ulXNKFE40G958hXj1Jw1ay23ZajC5YETih1VEMiQnzZv5BYex/a8S7Ei5gFNtZF7Ok52K3LitNfcpZWzWo7KqF20id4I7JIVWdTSlnfATl+DBJM7hNtd6/3clrZh0iYADKwEVN/HoGzvoIcV6AYd1XsnvUklv9r5gla8ovrKrcneyNpyFx4buvbGHmosDJljunDJ+uw28hsAu14F3fjo6nXQ9Xs10p10T1vEn/h68R++Rm/lYsgj1fOa12T7L3UNjgrPwa9mhJKL2xqU6cTSeaeIxX1SFXyxKB6YBuxJ67FDBnjZQuorEWqTkSqGiFY2euQQ8GNQ2SvF2q6523cbc95+wEfT4t6oeLIN1K9mVLB5c0ty7sXNjwA+vnCyJUhgXLvap0kaKwr6XVzpu7slBYpu+0FdM8G3D0bel4Rb3YQp2eW6D25WbA99wiXkGM7gIj8smx2y9pU7/cZ1ey6oZuBkvhEMmQMksInWne/kTRUM3WQuHoutUe8hk14x4zxg95BwaH/DvZcnVcSX0VvLMa5pa8CfSq48oZ3dorhP/MrU3aY+kmpbwPd8crR0QSB8tRXyiaiJRHemSsGmR+evbXPY95j5iU40Bn7JsKGY5UrNKlDRjVp/ispH4JUnZC8RmQvemBbHqXzhZaQln/vWIWOqeDqW3YfsFb+BT+n6mBFykN3jXV6U/QRmOFTUo/4rcv8vv83V6xVZsu8Tcd0W0krs0jFvNYnEO7PXa4sMQHctx/D7lqLHnGIrnvfTnJhliDVKe4fRLE7U+5J+gWKPFgxr+3X6ZRN21UhHAzfEIlFJ4KOy160LIl2kFj5TTBBZEA1UjMeUz8ZU3cOdluS27idoHdpVjKsWxoel1kiIusi8WBz2uUzabx7wfApIvZZLZXkpU4IkKMc7KSyjrJ/eCnpNTd6oJXo/ZNLcUecDgnHyDmhOa1pX4GaUfKn8nnbXkC43jcPzCNxY8m9J02QxGv3YNvXHbW7ti0r+qdyBQXz9UyU61XLgu6FDctAp2VTt7iId2lH/WTvvsPGC3DX/Bh3w8N+C5YxAk+Hm9syvt4tKwXrkqZB0VhkmUI/TEXcY37sRyi8Vh4KT5NZWzoyrZvVjY4ya0tHwi2bgZJl+nQ/6V/KRXirPOBelo1yveo5ELmr/hR1WQ74GmX1AWangWllzW1Zx8HmdCdreHbbWwp/A5SYB8gHgojBfCwX5UKOCgYY0Ny2EswMPlJyPomAmVHW3LIu14bycqtyeXPLcoM5F/AxOfIHhh0Kl5Y3tyzPR2N5uza7rLllnYFpSH/ceJUIylviMM2bFfND3r019O7amu6E85SAP1d+9VMEVifcshmVN7yT11kw7xffy1d27ioPhacJPF0yFq9SRlCQ5WWh8PR8K9drvoB0L2y8Fey3yOBQ48OEIHGE68NzW+8uXB8FpmtB/ZmOyP2Knl7ovvoTgqxRtc3l87YXNAFO3qfoI6mY17Y64jgXITxAifh3+YkILnBfmZZfVGjlQpFdYiML6z+lsBjol5dx5YH1gt4Ubt7+VLE6LPgI7k24ue1XYR0w2iD/zodrNFsx3B428UnFVC746NQeuWtEE9b9rqp+zk85CoyCPOC6oZsLsUNOB9+/2OhdjePV1dsU/TQlFguVLQIJFXkIlXvzZZHKQZbSoHNBwwRHuBmYCZqnC4yKi0AE4b+jrlk06PqWkkjyWjIKfo/9S+qHBuNyncC1qjqKEpTxCBRkM+gD8RCLkoVw+knJfnm6bFogvn7j6VZ1jqrMgNK6RFNEOkB/ZDBLQ3NbXvJbnlSUrIJ7s2rJxOBp8R0XCcxQ1StEaFItsuyComwRYx5NWHnmzVDN78+e9Urpp2H2W4Bs0MWnVsbsgUtdcSeLylRgInl35ZU46AuKrAFZWR6yz0mJTb/p0C8VfCSPzMSZeXHtkGgidCa4o3puNR+sqg2C1IhQ4V3CKUNAnZ7b3tp77ozahNLlXU4inbh2RbgisZFBu3Z7ubT7N/8PTXEdT6agw14AAAAASUVORK5CYII=";

/***/ }),

/***/ 61133:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABNUSURBVHic7Z15fFTFlsd/dTuddPZEQ6fpgLQjyBNQLyFBFJTEIaOobO4L0QQ3RNnkzSguD0FFcHkswf1pgiPqfAYNqIALH9LgU0CyXBQGkAAdwKQhLL0kJOnu3Jo/urN3+vZyl4bX388nH8jtunVOclJVp6pOnSK4AGBZNgVQG6DiDaCEBZAMCtb9KTV4iqV4vgDA4vkCQCwg1OT+nu4GYAGv4gCnieM4i2w/hEQQpRUIBpbNZsG0sgAZ6zYoZSUSZQKBEaBbwUcbOW6HSSI5knFeGJhl2RQwzGSATAJFDjpaotxYPAZfD55fdz608LA2MDtixGRQTAJFgdK6eMECgAMlCwEXF67GDjsDs+woAxjnAlBMhnItNVAsIKQEfNSKcOvGw8bAbFZWDnj6UJi21kAwgpKFHFduVFoRIAwMzGZmFoAyDwE0R2ldRCYsDK2YgVl2lAHEVXwBGrY7RlBmLsft4pQQLruBO42xBXLLVhRCloN3LZTbGVPJKYzNzCwA+GIAOXLKDRNGgTDTdfqMFnNd7Q65hMrSgt3dsfNf1bDeMIKqC+XwuBmpBbDsiMkgzjJEjNuZHBBnGctm5UgtSNIums3MegnAuzh/5rNykgKCAp0+I8VcV/u9VEIk6aI9XXIZAIMU9V94EA40aooUXbboBo4YN2hMoOpcsY0s6hjMstlsxLhBY3CPy9mi7oyJZmC3M8VHjBsaBhBeVOdLFAOzbGYBCEoRcabEIAWElrFsZoEYlYU8BrNsVg4ILRNDmQjdoJjCcRXrQqkiJAO7x1y+DJGWKxUWUCY3lHXsoLtot7fMR7plaUkB4UtZdpQh2AqCasGRqZDsBD2FCq4FE1cpIsaVk7YGFTABL1WymVnLADo5GGERQiJFp88g5rpaYyAvBdRFRzzmMCBAz9pvA0fG3bAhoPHY/zHYvZ9rCE6nCCLStrfuF36NwWxm1hwA04NWKYLYGHT6vjXmujrB+bFgF82ybAqI6ggi891ww6+uWriLZqIWIGLccMQdvCiAzxbsWYqsEk8neVGroxAfn4C4uDjExERDrVaD5ylaW11wOJyw2WxobGwEz/NKqxo8VH2pr1Yc5fNlwi8TWx8piY2NRXZ2Fq666koMvGwgMjL0SExM9Bg4xmNgHq2trXA4HLDb7Th79iyqDx3Cb7t/x67ychw9elTpHyMwiKsYQG6vH/f2wfky501NTQF79dXIvTEXuTk5SEhICKm+P/44iM2bN2PbTz+huvoQWltbRdJUQggt5CorS7x+1Ns77PARYR0JqdX2Qf7UqcjLy4NW2weEiBt91NzcjPKKCqxZ8zl27twJSqmo9YsLMXJV5V5bsdffSji33pTkZNx55x0oKHgI8fHxksvjeR5lRiM+/PAf+OOPg+FraBXJ5cp7noPyOg/W9e0bdosahBD8R944vLr4VeTljUN0dLRscv/t0ktxyy3jkZiYiMrKSrSGqVNmrqtb3/1ZjxbsWZI8Io9K/hEXF4eZTz2Ju+++Cwwjeay+T/5v3z4sWvQyDhz4Q9R6CSGIjo5GS0tL8JV48ah7GjgzaxkonRO8lK5kZGQgISEedXVm2Gy2gN/XarV4bfEryMzMFEulkLHZbFixsgilpeu8dtkMwyAxMRFJSUmeL/f/k5OSEJ+QgITOX/Huf+Pj4/Dzz7+gaNWq4BUjKOEqKwq7PuqEWKtWDMPglvHj8dhjj6B///4AAJfLha3btuHdd9/HoUOH/Krn8kGD8PrrSzBgwIBQ1JEEnudx8GA1HA53i4uKimo3aEJCQsBO38mT9Sic9jBqa2tDUcvCVVWkdn7QzcChO1cqlQqzZs3E1Afu99qdnjp1Ck/P+yt+/32Pz3oGDx6MlSuXQ9unT9C61NfXY8/evaipOQqrxQKrzYaoqCjExsaiT1oaDJcacNWVVyIpKSloGWLx7Pzn8P33P4ReEYMpXEXHdmLXhQ5CBZe+hLjhhut7NS4ApKWl4dVXXsbd99yH5uZmr2X0+r54843XAzZuQ0MD9uzZi5/++U8Yy4yorasTfEetViM7Oxv/fmMurrlmJPR6vehTLiG++qpUHOMCAMUkAO0Gbv9JxOqe33vvHVwzcqRguRde/Bs2bNjY43lSUiLeeedtDB0yxG+ZPM9j/ddf49NPP8ORI0eCnsokJSVi9OjReGL64+1Di9TU1BxF4bSHcfbsWfEqpa2pbQfNO5oZw4iS1ebKYcP8KufNgCqVCvPmPR2QcTluN6bmP4RFi17B4cOHQ5qn2mx2bNr0He686x68+977sFqtQdflD06nE0uWLhXXuECbLd3/7XhKJolRt0rlX5hXjCamx7M77rgdEydM8Ot9p9OJoqJVeGLGk9i3b19AOgrhcDjwwQcfonDaw9i7d6+odXfm44+LsWPHTglq7rBlh4GpOMuShw/7N4U+fux4l+8z9Ho89ugjfr1rs9nx7Pzn8HFxSa/juBgcOWLCjCdnYtu2baLXvWfPXvz3p5+KXi+ALrZkAM/ihkh7vt9u2CBYprm5GRs3fdfl2aOPPoKLL75Y8N2zZ89i9uw52LJFnpVUm82GZ+c/h3XreywSBU1zczMWvfwKGhvPiVZnN1LaTimqAECn104GiCihsCZTDUaOHAmt1rsH3NraipUrV2H7jo48JEOHDsH8Z58R9F6bmpowf/7z2FVeLoaqfuNyufDLL9txsr4eTeeaUH+qHucaG3HuXBNsNhvq6+vhcDj92snieR5vvfV3bPvpJ2mVZvid5ro6zjNNImPFqtdut2Pu0/Mwb95c5I0b12W6ZLVaUVS0Cuu//qZDD4bB9McfFzQuz/N488238PMvv4ilakA4nU6sXfsl1q79EoBbb40mBgBBS0sLilaugE6XLljPjh07sW791xJrC3hsWuI2sEjjbxv19fWYP/95rF79CbKzsxEXF4faP2uxddu2Hp6pwTAAmZnDBevcsqWsyx+G0vA8j3PnmgAAD9x/H669dpTgO2fOnMWrixeHtt7sL+682YhyJ9MWf+eIUop9+/Zj3779PsvddNNNiIuL81nm9OnTWLL09bDcfNfr9Zg2rVCwnMvlwpKlS1FbK7z4Ig6UZVk2hQHUBpkk9kClUuG2W2/xWYZSig8+/BCnT5+WSavAKCx8CBdddJFguR9+/FE2x7ADtYFxZ05XhuHDWej1ep9lzCdO4PvvRFrGE5mBAy/D5EnCywfHjh3DG2+8KX8PpOINDBQMiR0zerRgmc0/boY1iG1GObh9yhRERfmOW3Q4HFiy5HVYLNKuinmFEpYByNXyS3Z7of44V/J4nMGRni7sNW/dug07f/1VBm28kqxYC05OThb8BR08WI3Dhw/LpFHglFdUCJaprq5WzjmkYBlQYlBCdmpqKlJTU32WUfAv3y+2b98uWOayyy6TQZPeYQCqSAtOT9dCrVb7LHNg/wGZtAmOmpqjaGho8FkmI0P+/eUOqEGxCLZ0rdbn55RS1IT5KQNKKQ4f8b25kpCQgJiYnjtncqHYGJyQmOjz87ajJeHOCbPZ5+cxMTFKGjhFMQPHajQ+P3c4HHA6HDJpEzxCO0IqlQoqlWIdZYpikgXjLhQbtwJD6GQiIQREwcttGLRf0igvTqfT5+dRKhVUAosI4YDQ8RmXywWXcmvoFsUMLDS+ajQaxMbGyqRN8Fyc5jtIocXhgEO5ocaiWBd95ozvQDNCCDIyfK9ThwMDBea5DfYGScOKhGAAYlJCsNlsFlzhGTRokEzaBEdGRgZSUnz7qCdOnFDwRCJRrgWfOnUKFovv0cGfzQglGTkyW7DMISWXWgk1MSBQ5Mq1vn11gg7KsGFDERem4zAhBDdcf71guf0ih/QGiIUBIPs+FiEEs2bOhEZgLvznn7VoUnD88oVWqwXL+t6Ic7lcsgcIdoXuZkCo7C34rjvvQFbWCMFyX5WWhu2J+htzcwTH36qqKtjtvteqJcbCoJUxySkxIyMDj/oR4H7mzBls3LhJBo0CR6PRIP/BfMFyP/ywWQZtfMCrOAZwmuSSxzAMZs18CmlpaYJl/3ftlzALrPMqxf333Yu+Op3PMna7vUvstzI4TYz7FBqRpZuecNttyMsbJ1ju0OHDKC4ukV6hIOjfvx+mTn1AsNz27TtCPcwdKiaO4zzTJBnGYZ1OhxkzpgvujTocDqxYvlKe2OEAiY6OxjPP/JdgoALP8/j8iy+U9R8IjED7AXC6FSAFUsqbPWsmtAJ7wID7lzM1/wE8+eQT7c8cDgesVhuqq6vxVek6HDt2TEpVvcIwDGbPnonR110nWLaszAiO2y2DVr6gW4E2A/MqDkS61EDjx9+Mm2++ya+yGo0GI7O9LyCMGTMaN4+/GXPmPI0DB+SL9mAYBg/m5+Pee+4RLNvc3IziktUyaCUAH20EPKcLPffySLLpoNVqMWvmU6LVp0tPR1HRCmT38kcgNlFRUZg9eyaeemqGXymcNm7aJPp55SCwtKVT6tDY02eLCSEEM56YDp2AxxkofdLSsHzZ3zFx4gS/D5wHQ1paGha/+goezM/3S05tbS2WL1+pfPbaTrbs9CdJxTsA6yEvbxwmTLhN7GoBAHFxsfjbiy9g6ZLXej2qGgoTJ07A6pJiv7x+wH20dcFLi8IkzKjDlt2TsIiWLCItLQ2rSz4WPJoiBna7HZ9/8T/Y8O0GHDt+PGjvNT4+Dtdeey2mTSvEFX/5i9/vUUrx9jvv4KOP/L5KQUosoK2XtiVh6ZonK3NEMSgKxJDy4ovP4/YpU8Soym9sdjsqyiuwYeNG/PrrLr9aEyEEgwcPxq233oLRo6+DYcCAgMNc16z5DMuWrwiX049GrqqiPfNstzxZWC+GgXNyxspuXABISkxEbm4OcnNz0Nrain379mPPnj2oPnQIdrsdTU1N0Gg0SE5KRlraxbj88ssxdNjQkJKtffPtt1hZtCpcjAtQsrDztz1zVQ4fcRYhRFqmpqbik9XF6NevX1DvNzU1oaGhATzv7mZTUpIVjSvuDUop1qz5DEWr3lYyJKc7XbpnwFtKf4J1obTiB+6/DxqNBrW1tWhpaUFTUzMaGhpgs9tgt9lht9ths9ths1phsVphtVhhsVpgsVhhsVh6/LKGXHEFXluyGJfIlJjMH5qbm1FSshr/+Ojj8Gm5AEBICVfFdZnuip5OOD09HS6XC46WFtECzrRaLV54/jlcf/2YkOsKlRMnTmDBS4uwc6cU+a1CxEs64R6TO7P5uEWn1xsABHUwvLGxEU1NTXA4HKL9dTc2NuLHzZvRYLdjyJAhgoECUuByubB582b89T+fwcGDB2WX7wdGjtu1ovtD7xnfMzKsYnnTYsHzPH777XeUGY1ITEzEoEEDZTvUVV1djcWLX0NxySeCh80Ug5JCs7nW1P2xj0s5ssoAmiOlTqEwfDiLB/PzMWJEJhIFzjkFgzsf9EGsXfslvv7m23BypLzRZWrUmd6PDhB+NSjJkUqjUKmq4sBxu9G/Xz/cMPYGTJo4AQMHDgy53sbGRmzZUoYNGzdi9+7fFI1p9ptuU6PO+L75LMxbcWcIIRg6dAjGjB6DYcOG4JJLBiAhIR7x8fFeL/CglKKpyZ2p7uTJk+C43di+YycqKyvDvbV2p9fWCwhebRd+F3T4S1xcnOcuhHjExsZCExOD6JgYqFQEPE9htVphtzfAZrPBZrOFbXCfIJQZ7tkN9Irw7aMiLl9GEBlClnOV5XN9FRHe4OTVCwGYRFIpgnhYwLt6HXvbENzkdM+L+1rFykYbQSQImc9VVRoFi/lbH5s5ohQUESOHBz4dq874f/iMV89FpKsOB0ygauHspx78jncxm49bdDp9DQjuDU6vCKJAyRSO+9XvMOeAAprM5rr9On0GQRhfO3tBQ8hyrqr8/YBeCUYOO3zEEYTZ7aQXPoTjqsqFk3t2I7gD4FSdi8h4LCcm0KigQmSC3o7xrHKVIdKSpcYEqs7tvs/rLyHtt7FsNgvCl0HBnNMXOBZQJtfXUqQQIeXo4LhdHCj8dtkjBAglU0IxLhCgF+0Ns7luv07XtwYkstIlKpQWclzHNbHBIlpIhOfu4VJEuutQsYBCFOMCIhoYaB+TSxFxvILFBMqE3C13RvSgpoh3HTQhecu9IXoiNI7bYXLPk+VJC3GBIIlxAQlacGfYzKxloHSOlDLOewhZyFWWvyRZ9VJV3IbH+SpGpMvujgkUc8VypnpDlsBiz7hcjMgmRRtGUHWhFF1yd2RNRc5mZs0BpQvwrzuVMoHQhVxlZYlcAqXLf+AFc13tDp0u/X0wKg0A4ftYLyQISkDVhVzVLqO8YhXCM2dehgu+2yZG0ChZumOv0pUQ2hmPE7YAF5yhiRGEXy1nd+xVCyWFd+aCMTRBCRiymisvNyqtChBGBm6DZUcZwLhmg9ICnD/OmAUE68CrFyrVFfdG2Bm4DffV81Gsp1WzCEdjE5SAYD1XIe1cNhTC1sCdYVk2BQwzGSCTQJED5YxtcScZo+vB8+s658IIV84LA3fH3Y07cgAy1mNwgzSSCOfOxEu3gldxYu7yyMV5aeDuuLtztQFMq6crJ1cDSHHfjdx+fW4KOlq+Be25OT3XCrkvJ7GCUM6dBd9pOh9aqBD/D/zwRSzloYZtAAAAAElFTkSuQmCC";

/***/ }),

/***/ 79391:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 84232:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 14050:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 87942:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 82880:
/***/ (function() {

/* (ignored) */

/***/ })

}]);