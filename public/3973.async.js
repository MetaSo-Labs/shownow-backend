(self["webpackChunk"] = self["webpackChunk"] || []).push([[3973],{

/***/ 82107:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Buzz; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(45611);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(72948);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(73248);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LinkOutlined.js + 1 modules
var LinkOutlined = __webpack_require__(99254);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SyncOutlined.js + 1 modules
var SyncOutlined = __webpack_require__(51322);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MessageOutlined.js + 1 modules
var MessageOutlined = __webpack_require__(27981);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/HeartFilled.js + 1 modules
var HeartFilled = __webpack_require__(95975);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/HeartOutlined.js + 1 modules
var HeartOutlined = __webpack_require__(4287);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/GiftOutlined.js + 1 modules
var GiftOutlined = __webpack_require__(13699);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UploadOutlined.js + 1 modules
var UploadOutlined = __webpack_require__(28962);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.59.16_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(73118);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.59.16_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(77682);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(48020);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(4390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(16598);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(26061);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(23674);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 5 modules
var spin = __webpack_require__(34888);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(54152);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(48779);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(12798);
// EXTERNAL MODULE: ./src/Components/Comment/index.tsx + 3 modules
var Comment = __webpack_require__(99962);
// EXTERNAL MODULE: ./src/Components/NewPost/index.tsx + 1 modules
var NewPost = __webpack_require__(78963);
;// CONCATENATED MODULE: ./src/Components/Buzz/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/Buzz/ForwardTweet.tsx


/* harmony default export */ var ForwardTweet = (function (_ref) {
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    loading = _ref.loading;
  if (!buzzItem || !buzzItem.address) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Details, {
    buzzItem: buzzItem,
    showActions: false,
    padding: 0,
    reLoading: false,
    isForward: true,
    loading: loading
  });
});
// EXTERNAL MODULE: ./src/Components/Follow/index.tsx + 1 modules
var Follow = __webpack_require__(15250);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(16483);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./src/utils/buzz.ts
var buzz = __webpack_require__(42779);
// EXTERNAL MODULE: ./src/assets/btc.png
var btc = __webpack_require__(33401);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(61067);
;// CONCATENATED MODULE: ./src/Components/Unlock/index.tsx


/* harmony default export */ var Unlock = (function (_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    children = _ref.children;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    onClose: onClose,
    show: show,
    modalWidth: 400,
    closable: true,
    title: "Unlock",
    children: children
  });
});
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(95267);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(49405);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LockOutlined.js + 1 modules
var LockOutlined = __webpack_require__(25832);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/image/index.js + 2 modules
var es_image = __webpack_require__(89677);
;// CONCATENATED MODULE: ./src/Components/Buzz/imageGallery.less
// extracted by mini-css-extract-plugin

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
        onVisibleChange: function onVisibleChange(visible, prevVisible) {
          console.log(visible, prevVisible);
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
      }) : decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.encryptFiles.map(function (pid, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            borderRadius: borderRadiusLG,
            minHeight: 120,
            background: '#f5f5f5',
            height: '100%',
            display: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.publicFiles.length) + index > 8 ? 'none' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8c8c8c'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(LockOutlined/* default */.Z, {
            style: {
              fontSize: 24
            }
          })
        }, pid);
      })]
    })
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/axios@1.7.7/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(40733);
// EXTERNAL MODULE: ./node_modules/.pnpm/md5@2.3.0/node_modules/md5/md5.js
var md5 = __webpack_require__(96706);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);
;// CONCATENATED MODULE: ./src/request/baidu-translate.ts




function fetchTranlateResult(_x) {
  return _fetchTranlateResult.apply(this, arguments);
}
function _fetchTranlateResult() {
  _fetchTranlateResult = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(_ref) {
    var sourceText, from, to, salt, queryParams, url, data;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          sourceText = _ref.sourceText, from = _ref.from, to = _ref.to;
          salt = new Date().getTime().toString();
          queryParams = {
            q: sourceText,
            from: from,
            to: to,
            appid: "20240727002109702",
            salt: salt,
            sign: md5_default()("20240727002109702" + sourceText + salt + "Zn47LiY5HBPjSiMeN1Td")
          }; // const url = `https://fanyi-api.baidu.com/api/trans/vip/translate`;
          url = "https://api.metaid.io/baidufanyi/api/trans/vip/translate"; // const url = `/api/trans/vip/translate`;
          _context.prev = 4;
          _context.next = 7;
          return axios/* default */.Z.get(url, {
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
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(78559);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FlagFilled.js + 1 modules
var FlagFilled = __webpack_require__(15357);
;// CONCATENATED MODULE: ./src/Components/Buzz/NFTGallery.tsx






/* harmony default export */ var NFTGallery = (function (_ref) {
  var nfts = _ref.nfts;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBgLayout = _theme$useToken$token.colorBgLayout,
    borderRadiusLG = _theme$useToken$token.borderRadiusLG,
    padding = _theme$useToken$token.padding,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorPrimaryBg = _theme$useToken$token.colorPrimaryBg;
  if (!nfts.length) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "nft-gallery",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    },
    children: [nfts.map(function (nft, index) {
      var _nft$previewImage;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
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
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.Z, {
          style: {
            objectFit: 'cover',
            height: 80,
            width: 80,
            display: index > 8 ? 'none' : 'block',
            borderRadius: borderRadiusLG
          },
          src: "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(((_nft$previewImage = nft.previewImage) !== null && _nft$previewImage !== void 0 ? _nft$previewImage : '').replace('metafile://', '')),
          fallback: config/* FallbackImage */.vL,
          className: "image-item",
          preview: false
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
            level: 4,
            style: {
              margin: 0
            },
            children: nft.collectionName
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            type: "secondary",
            children: nft.name
          })]
        })]
      }, index);
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(tag/* default */.Z, {
        bordered: false,
        color: colorPrimaryBg,
        style: {
          color: colorPrimary
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FlagFilled/* default */.Z, {}), "NFT Market"]
        }), " "]
      })
    })]
  });
});
;// CONCATENATED MODULE: ./src/Components/Buzz/Details.tsx




















var Paragraph = typography/* default */.Z.Paragraph,
  Text = typography/* default */.Z.Text;










/* harmony default export */ var Details = (function (_ref) {
  var _accessControl$data, _currentUserInfoData$, _currentUserInfoData$2, _currentUserInfoData$3, _currentUserInfoData$4, _accessControl$data2, _accessControl$data3, _accessControl$data4, _accessControl$data5, _accessControl$data6, _accessControl$data8;
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    refetch = _ref.refetch,
    _ref$isForward = _ref.isForward,
    isForward = _ref$isForward === void 0 ? false : _ref$isForward,
    loading = _ref.loading,
    _ref$like = _ref.like,
    like = _ref$like === void 0 ? [] : _ref$like,
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
  var queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user,
    isLogin = _useModel.isLogin,
    connect = _useModel.connect,
    feeRate = _useModel.feeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee,
    manPubKey = _useModel2.manPubKey;
  var _useState21 = (0,react.useState)(false),
    _useState22 = slicedToArray_default()(_useState21, 2),
    handleLikeLoading = _useState22[0],
    setHandleLikeLoading = _useState22[1];
  var _useState23 = (0,react.useState)([]),
    _useState24 = slicedToArray_default()(_useState23, 2),
    likes = _useState24[0],
    setLikes = _useState24[1];
  var currentUserInfoData = (0,useQuery/* useQuery */.a)({
    queryKey: ['userInfo', buzzItem.address],
    enabled: !(0,isNil/* default */.Z)(buzzItem === null || buzzItem === void 0 ? void 0 : buzzItem.address),
    queryFn: function queryFn() {
      return (0,api/* getUserInfo */.bG)({
        address: buzzItem.address
      });
    }
  });
  (0,react.useEffect)(function () {
    var _buzzItem$like;
    if (!buzzItem) {
      return;
    }
    var _likes = (_buzzItem$like = buzzItem.like) !== null && _buzzItem$like !== void 0 ? _buzzItem$like : [];
    var _like = like !== null && like !== void 0 ? like : [];
    setLikes([].concat(toConsumableArray_default()(_likes), toConsumableArray_default()(_like.map(function (item) {
      return item.CreateMetaid;
    }))));
  }, [buzzItem, like]);
  var payBuzz = (0,react.useMemo)(function () {
    var _summary = buzzItem.content;
    var isSummaryJson = _summary.startsWith('{') && _summary.endsWith('}');
    var parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
    return isSummaryJson ? parseSummary : undefined;
  }, [buzzItem]);
  var isLiked = (0,react.useMemo)(function () {
    if (!buzzItem || !user) return false;
    return likes.includes(user.metaid);
  }, [likes]);
  var handleLike = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var isPass, pinId, likeEntity, likeRes, _likeEntity, _likeRes, _message, errorMessage, toastMessage;
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
            pinId = buzzItem.id;
            if (!isLiked) {
              _context.next = 10;
              break;
            }
            message/* default */.ZP.error('You have already liked that buzz...');
            return _context.abrupt("return");
          case 10:
            setHandleLikeLoading(true);
            _context.prev = 11;
            if (!(chain === 'btc')) {
              _context.next = 22;
              break;
            }
            _context.next = 15;
            return btcConnector.use('like');
          case 15:
            likeEntity = _context.sent;
            _context.next = 18;
            return likeEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  isLike: '1',
                  likeTo: pinId
                }),
                flag: config/* FLAG */.BZ,
                contentType: 'text/plain;utf-8',
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/protocols/paylike")
              }],
              options: {
                noBroadcast: 'no',
                feeRate: Number(feeRate),
                service: fetchServiceFee('like_service_fee_amount', 'BTC')
              }
            });
          case 18:
            likeRes = _context.sent;
            if (!(0,isNil/* default */.Z)(likeRes === null || likeRes === void 0 ? void 0 : likeRes.revealTxIds[0])) {
              setLikes([].concat(toConsumableArray_default()(likes), [user.metaid]));
              // await sleep(5000);
              // queryClient.invalidateQueries({ queryKey: ['homebuzzesnew'] });
              // queryClient.invalidateQueries({ queryKey: ['payLike', buzzItem!.id] });

              message/* default */.ZP.success('like buzz successfully');
            }
            _context.next = 31;
            break;
          case 22:
            _context.next = 24;
            return mvcConnector.use('like');
          case 24:
            _likeEntity = _context.sent;
            console.log({
              body: JSON.stringify({
                isLike: '1',
                likeTo: pinId
              }),
              path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/protocols/paylike"),
              'signMessage': 'like buzz'
            });
            _context.next = 28;
            return _likeEntity.create({
              data: {
                body: JSON.stringify({
                  isLike: '1',
                  likeTo: pinId
                }),
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/protocols/paylike")
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'like buzz',
                service: fetchServiceFee('like_service_fee_amount', 'MVC')
              }
            });
          case 28:
            _likeRes = _context.sent;
            console.log('likeRes', _likeRes);
            if (!(0,isNil/* default */.Z)(_likeRes === null || _likeRes === void 0 ? void 0 : _likeRes.txid)) {
              // await sleep(8000);
              // refetch && refetch()
              // queryClient.invalidateQueries({ queryKey: ['homebuzzesnew'] })
              // queryClient.invalidateQueries({
              //     queryKey: ['payLike', buzzItem!.id],
              // })
              // await sleep(5000);
              setLikes([].concat(toConsumableArray_default()(likes), [user.metaid]));
              message/* default */.ZP.success('like buzz successfully');
            }
          case 31:
            _context.next = 39;
            break;
          case 33:
            _context.prev = 33;
            _context.t0 = _context["catch"](11);
            console.log('error', _context.t0);
            errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
          case 39:
            setHandleLikeLoading(false);
          case 40:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[11, 33]]);
    }));
    return function handleLike() {
      return _ref2.apply(this, arguments);
    };
  }();
  var quotePinId = (0,react.useMemo)(function () {
    var _parseSummary$quotePi;
    if (isForward) return '';
    var _summary = buzzItem.content;
    var isSummaryJson = _summary.startsWith('{') && _summary.endsWith('}');
    var parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
    return isSummaryJson && !(0,isEmpty/* default */.Z)((_parseSummary$quotePi = parseSummary === null || parseSummary === void 0 ? void 0 : parseSummary.quotePin) !== null && _parseSummary$quotePi !== void 0 ? _parseSummary$quotePi : '') ? parseSummary.quotePin : '';
  }, [buzzItem, isForward]);
  var _useQuery = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(quotePinId),
      queryKey: ['buzzDetail', quotePinId],
      queryFn: function queryFn() {
        return (0,api/* fetchBuzzDetail */.uq)({
          pinId: quotePinId
        });
      }
    }),
    isQuoteLoading = _useQuery.isLoading,
    quoteDetailData = _useQuery.data;
  var _useQuery2 = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(payBuzz),
      queryKey: ['buzzAccessControl', buzzItem.id],
      queryFn: function queryFn() {
        return (0,api/* getControlByContentPin */.up)({
          pinId: buzzItem.id
        });
      }
    }),
    accessControl = _useQuery2.data;
  var _useQuery3 = (0,useQuery/* useQuery */.a)({
      queryKey: ['buzzdecryptContent', buzzItem.id, chain, user.address],
      queryFn: function queryFn() {
        return (0,buzz/* decodePayBuzz */.ns)(buzzItem, manPubKey, isLogin);
      }
    }),
    decryptContent = _useQuery3.data,
    refetchDecrypt = _useQuery3.refetch;
  var handlePay = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var isPass, data, payCheck;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (isLogin) {
              _context2.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
            return _context2.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return");
          case 6:
            setPaying(true);
            _context2.prev = 7;
            if (!(accessControl && accessControl.data)) {
              _context2.next = 18;
              break;
            }
            data = accessControl.data;
            payCheck = data.payCheck;
            _context2.next = 13;
            return (0,buzz/* buildAccessPass */.qq)(data.pinId, (showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', btcConnector, feeRate, payCheck.payTo, payCheck.amount);
          case 13:
            _context2.next = 15;
            return (0,utils/* sleep */._v)(2000);
          case 15:
            refetchDecrypt();
            message/* default */.ZP.success('Pay successfully, please wait for the transaction to be confirmed!');
            setShowUnlock(false);
          case 18:
            _context2.next = 23;
            break;
          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](7);
            message/* default */.ZP.error(_context2.t0.message);
          case 23:
            setPaying(false);
          case 24:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[7, 20]]);
    }));
    return function handlePay() {
      return _ref3.apply(this, arguments);
    };
  }();
  var _useQuery4 = (0,useQuery/* useQuery */.a)({
      enabled: Boolean(accessControl === null || accessControl === void 0 || (_accessControl$data = accessControl.data) === null || _accessControl$data === void 0 ? void 0 : _accessControl$data.holdCheck),
      queryKey: ['mrc20', accessControl],
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
          var _yield$getMRC20Info, data, userInfo;
          return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0,api/* getMRC20Info */.tl)({
                  tick: accessControl.data.holdCheck.ticker
                });
              case 2:
                _yield$getMRC20Info = _context3.sent;
                data = _yield$getMRC20Info.data;
                if (!data.mrc20Id) {
                  _context3.next = 9;
                  break;
                }
                _context3.next = 7;
                return (0,api/* getUserInfo */.bG)({
                  address: data.address
                });
              case 7:
                userInfo = _context3.sent;
                return _context3.abrupt("return", objectSpread2_default()(objectSpread2_default()({}, data), {}, {
                  deployerUserInfo: userInfo
                }));
              case 9:
                return _context3.abrupt("return", Promise.resolve(null));
              case 10:
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
    mrc20 = _useQuery4.data;
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
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
      var encryptContent, res;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (decryptContent) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            setShowTrans(!showTrans);
            if (!isTranslated) {
              _context4.next = 6;
              break;
            }
            setIsTranslated(false);
            return _context4.abrupt("return");
          case 6:
            setIsTranslating(true);
            _context4.prev = 7;
            encryptContent = decryptContent.status === 'purchased' ? decryptContent.encryptContent : '';
            _context4.next = 11;
            return fetchTranlateResult({
              sourceText: "".concat(decryptContent.publicContent, "\n").concat(encryptContent),
              from: locale === 'en-US' ? 'zh' : 'en',
              to: locale === 'en-US' ? 'en' : 'zh'
            });
          case 11:
            res = _context4.sent;
            setTransResult(res.trans_result.map(function (item) {
              return item.dst;
            }));
            setIsTranslated(true);
            _context4.next = 19;
            break;
          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](7);
            message/* default */.ZP.error('Translate Failed');
          case 19:
            setIsTranslating(false);
          case 20:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[7, 16]]);
    }));
    return function handleTranslate() {
      return _ref4.apply(this, arguments);
    };
  }();
  var textContent = (0,react.useMemo)(function () {
    if (!decryptContent) return '';
    if (!showTrans || isTranslating) {
      var encryptContent = decryptContent.status === 'purchased' ? decryptContent.encryptContent : '';
      return "".concat(decryptContent.publicContent).concat(decryptContent.publicContent && encryptContent ? '\n' : '').concat(encryptContent);
    } else {
      return transResult.join('\n');
    }
  }, [showTrans, transResult, decryptContent, isTranslating]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
    className: "tweet",
    loading: loading,
    style: {
      width: '100%',
      borderColor: isForward ? colorBorder : colorBorderSecondary
    },
    styles: {
      header: {
        height: 40,
        borderColor: isForward ? colorBorder : colorBorderSecondary
      }
    },
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "avatar",
        style: {
          cursor: 'pointer',
          position: 'relative'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
          src: (_currentUserInfoData$ = currentUserInfoData.data) === null || _currentUserInfoData$ === void 0 ? void 0 : _currentUserInfoData$.avatar,
          size: 40
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Follow/* FollowIconComponent */._, {
          metaid: ((_currentUserInfoData$2 = currentUserInfoData.data) === null || _currentUserInfoData$2 === void 0 ? void 0 : _currentUserInfoData$2.metaid) || ''
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 8
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
          children: [" ", ((_currentUserInfoData$3 = currentUserInfoData.data) === null || _currentUserInfoData$3 === void 0 ? void 0 : _currentUserInfoData$3.name) || 'Unnamed']
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
          type: "secondary",
          style: {
            fontSize: 10,
            lineHeight: 1
          },
          children: (_currentUserInfoData$4 = currentUserInfoData.data) === null || _currentUserInfoData$4 === void 0 ? void 0 : _currentUserInfoData$4.metaid.slice(0, 8)
        })]
      })]
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "content",
      style: {
        cursor: 'pointer'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        onClick: function onClick() {
          handleClick ? handleClick() : _umi_production_exports.history.push("/buzz/".concat(buzzItem.id));
        },
        children: [textContent.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "text",
          ref: contentRef,
          style: {
            position: 'relative',
            maxHeight: isExpanded ? 'none' : 200,
            overflow: 'hidden',
            transition: 'max-height 0.3s ease'
          },
          children: [(textContent !== null && textContent !== void 0 ? textContent : '').split('\n').map(function (line, index) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {},
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                style: {
                  minHeight: 22
                },
                dangerouslySetInnerHTML: {
                  __html: (0,utils/* handleSpecial */.mn)((0,utils/* detectUrl */.lZ)(line))
                }
              })
            }, index);
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
            children: showTrans ? (0,utils/* formatMessage */.wv)('Show original content') : (0,utils/* formatMessage */.wv)('Translate')
          }), isOverflowing && !isExpanded && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              width: '100%',
              paddingTop: 78,
              backgroundImage: "linear-gradient(-180deg,".concat(colorBgBlur, " 0%,").concat(colorBgContainer, " 100%)"),
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
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
        }), decryptContent && /*#__PURE__*/(0,jsx_runtime.jsx)(NFTGallery, {
          nfts: decryptContent.nfts
        }), decryptContent && /*#__PURE__*/(0,jsx_runtime.jsx)(ImageGallery, {
          decryptContent: decryptContent
        }), (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.buzzType) === 'pay' && /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
          spinning: (accessControl === null || accessControl === void 0 ? void 0 : accessControl.data.mempool) === 1,
          children: [(accessControl === null || accessControl === void 0 || (_accessControl$data2 = accessControl.data) === null || _accessControl$data2 === void 0 ? void 0 : _accessControl$data2.payCheck) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 12,
              background: "rgba(32, 32, 32, 0.06)",
              borderRadius: 8,
              padding: '4px 12px'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 8
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
                type: "warning",
                style: {
                  lineHeight: '16px'
                },
                children: accessControl === null || accessControl === void 0 || (_accessControl$data3 = accessControl.data) === null || _accessControl$data3 === void 0 || (_accessControl$data3 = _accessControl$data3.payCheck) === null || _accessControl$data3 === void 0 ? void 0 : _accessControl$data3.amount
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                src: btc,
                alt: "",
                width: 16,
                height: 16
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              shape: "round",
              size: "small",
              type: "primary",
              disabled: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === 'purchased' || (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === 'mempool',
              onClick: ( /*#__PURE__*/function () {
                var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5(e) {
                  var isPass;
                  return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        e.stopPropagation();
                        if (isLogin) {
                          _context5.next = 4;
                          break;
                        }
                        message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
                        return _context5.abrupt("return");
                      case 4:
                        isPass = checkUserSetting();
                        if (isPass) {
                          _context5.next = 7;
                          break;
                        }
                        return _context5.abrupt("return");
                      case 7:
                        setShowUnlock(true);
                      case 8:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function (_x) {
                  return _ref5.apply(this, arguments);
                };
              }()),
              loading: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === 'mempool',
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                wrapper: true,
                children: decryptContent.status === 'unpurchased' ? 'Unlock' : 'Unlocked'
              })
            })]
          }), (accessControl === null || accessControl === void 0 || (_accessControl$data4 = accessControl.data) === null || _accessControl$data4 === void 0 ? void 0 : _accessControl$data4.holdCheck) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 12,
              background: "rgba(32, 32, 32, 0.06)",
              borderRadius: 8,
              padding: '4px 12px'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 8
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
                type: "warning",
                style: {
                  lineHeight: '16px'
                },
                children: "Hold ".concat(accessControl === null || accessControl === void 0 || (_accessControl$data5 = accessControl.data) === null || _accessControl$data5 === void 0 || (_accessControl$data5 = _accessControl$data5.holdCheck) === null || _accessControl$data5 === void 0 ? void 0 : _accessControl$data5.amount, " ").concat(accessControl === null || accessControl === void 0 || (_accessControl$data6 = accessControl.data) === null || _accessControl$data6 === void 0 || (_accessControl$data6 = _accessControl$data6.holdCheck) === null || _accessControl$data6 === void 0 ? void 0 : _accessControl$data6.ticker)
              }), mrc20 && /*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
                src: mrc20.deployerUserInfo.avatar,
                size: 20
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              shape: "round",
              size: "small",
              type: "primary",
              disabled: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === 'purchased' || (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === 'mempool',
              onClick: ( /*#__PURE__*/function () {
                var _ref6 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee6(e) {
                  var _accessControl$data7;
                  return regeneratorRuntime_default()().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        window.open("https://".concat(config/* curNetwork */.eM === 'testnet' ? 'testnet' : 'www', ".metaid.market/idCoin/").concat(accessControl === null || accessControl === void 0 || (_accessControl$data7 = accessControl.data) === null || _accessControl$data7 === void 0 || (_accessControl$data7 = _accessControl$data7.holdCheck) === null || _accessControl$data7 === void 0 ? void 0 : _accessControl$data7.ticker), (0,utils/* openWindowTarget */.wL)());
                      case 1:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6);
                }));
                return function (_x2) {
                  return _ref6.apply(this, arguments);
                };
              }()),
              loading: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === 'mempool',
              children: "Mint"
            })]
          })]
        }), !(0,isEmpty/* default */.Z)(quotePinId) && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          style: {
            padding: 0,
            marginBottom: 12,
            boxShadow: 'none'
          },
          bordered: false,
          styles: {
            body: {
              padding: 0
            }
          },
          loading: isQuoteLoading,
          children: (quoteDetailData === null || quoteDetailData === void 0 ? void 0 : quoteDetailData.data) && /*#__PURE__*/(0,jsx_runtime.jsx)(ForwardTweet, {
            buzzItem: quoteDetailData === null || quoteDetailData === void 0 ? void 0 : quoteDetailData.data.tweet,
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
              var link = buzzItem.chainName === 'btc' ? "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(buzzItem.genesisTransaction) : "https://".concat(config/* curNetwork */.eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(buzzItem.genesisTransaction);
              window.open(link, '_blank');
            },
            children: buzzItem.genesisTransaction.slice(0, 8)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
            icon: buzzItem.genesisHeight === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(SyncOutlined/* default */.Z, {
              spin: true
            }) : null,
            bordered: false,
            color: buzzItem.chainName === 'mvc' ? 'blue' : 'orange',
            children: buzzItem.chainName
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            type: "secondary",
            style: {
              fontSize: 12
            },
            children: dayjs_min_default().unix(buzzItem.timestamp).format('YYYY-MM-DD HH:mm:ss')
          })]
        })]
      }), showActions && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "actions",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageOutlined/* default */.Z, {}),
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee7() {
            var isPass;
            return regeneratorRuntime_default()().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  if (isLogin) {
                    _context7.next = 3;
                    break;
                  }
                  message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
                  return _context7.abrupt("return");
                case 3:
                  isPass = checkUserSetting();
                  if (isPass) {
                    _context7.next = 6;
                    break;
                  }
                  return _context7.abrupt("return");
                case 6:
                  showComment ? setShowComment(false) : setShowComment(true);
                case 7:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          })),
          children: buzzItem.commentCount
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          loading: handleLikeLoading,
          onClick: handleLike,
          icon: isLiked ? /*#__PURE__*/(0,jsx_runtime.jsx)(HeartFilled/* default */.Z, {
            style: {
              color: 'red'
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(HeartOutlined/* default */.Z, {}),
          children: likes.length
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "item",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(GiftOutlined/* default */.Z, {})
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "item",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "text",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {}),
            onClick: function onClick() {
              if (!isLogin) {
                message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
                return;
              }
              var isPass = checkUserSetting();
              if (!isPass) return;
              showNewPost ? setShowNewPost(false) : setShowNewPost(true);
            }
          })
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
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Unlock, {
      show: showUnlock && (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) !== 'purchased' && (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) !== 'mempool',
      onClose: function onClose() {
        setShowUnlock(false);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          flexDirection: 'column'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: btc,
          alt: "",
          width: 60,
          height: 60
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Title, {
          level: 4,
          children: [accessControl === null || accessControl === void 0 || (_accessControl$data8 = accessControl.data) === null || _accessControl$data8 === void 0 || (_accessControl$data8 = _accessControl$data8.payCheck) === null || _accessControl$data8 === void 0 ? void 0 : _accessControl$data8.amount, " BTC"]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            width: '100%'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            variant: "filled",
            size: "large",
            color: "primary",
            block: true,
            onClick: function onClick() {
              setShowUnlock(false);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Cancel"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            size: "large",
            block: true,
            loading: paying,
            type: "primary",
            onClick: ( /*#__PURE__*/function () {
              var _ref8 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee8(e) {
                return regeneratorRuntime_default()().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      e.stopPropagation();
                      handlePay();
                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              }));
              return function (_x3) {
                return _ref8.apply(this, arguments);
              };
            }()),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Unlock"
            })
          })]
        })]
      })
    })]
  });
});
;// CONCATENATED MODULE: ./src/Components/Buzz/index.tsx


/* harmony default export */ var Buzz = (function (_ref) {
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
    handleClick = _ref.handleClick;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Details, {
    buzzItem: buzzItem,
    showActions: showActions,
    padding: padding,
    reLoading: reLoading,
    refetch: refetch,
    isForward: false,
    like: like,
    handleClick: handleClick
  });
});

/***/ }),

/***/ 99962:
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
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(12798);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(61067);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(48020);
;// CONCATENATED MODULE: ./src/Components/UserInfo/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(49405);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/UserInfo/index.tsx





/* harmony default export */ var UserInfo = (function (_ref) {
  var user = _ref.user;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "userInfo",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
      src: user.avater
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
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(1092);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(16598);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(54152);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(23674);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileImageOutlined.js + 1 modules
var FileImageOutlined = __webpack_require__(28918);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(45611);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.59.16_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(73118);
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
var utils = __webpack_require__(95267);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(78559);
;// CONCATENATED MODULE: ./src/Components/Comment/index.tsx

















var TextArea = input/* default */.Z.TextArea;
/* harmony default export */ var Comment = (function (_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    tweetId = _ref.tweetId,
    refetch = _ref.refetch;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    btcConnector = _useModel.btcConnector,
    feeRate = _useModel.feeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting,
    isLogin = _useModel.isLogin;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee;
  var _useState = (0,react.useState)(''),
    _useState2 = slicedToArray_default()(_useState, 2),
    content = _useState2[0],
    setContent = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    isAdding = _useState4[0],
    setIsAdding = _useState4[1];
  var queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
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
              _context.next = 24;
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
                feeRate: Number(feeRate),
                service: fetchServiceFee('comment_service_fee_amount', 'BTC'),
                network: config/* curNetwork */.eM
              }
            });
          case 13:
            createRes = _context.sent;
            console.log('create res for inscribe', createRes);
            if ((0,isNil/* default */.Z)(createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0])) {
              _context.next = 22;
              break;
            }
            _context.next = 18;
            return (0,utils/* sleep */._v)(6000);
          case 18:
            refetch && refetch();
            message/* default */.ZP.success('comment successfully');
            setContent('');
            onClose();
          case 22:
            _context.next = 38;
            break;
          case 24:
            _context.next = 26;
            return mvcConnector.load(getCommentEntitySchemaWithCustomHost((_showConf$host2 = showConf === null || showConf === void 0 ? void 0 : showConf.host) !== null && _showConf$host2 !== void 0 ? _showConf$host2 : ''));
          case 26:
            Comment = _context.sent;
            _context.next = 29;
            return Comment.create({
              data: {
                body: JSON.stringify(finalBody)
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'create comment',
                service: fetchServiceFee('comment_service_fee_amount', 'MVC')
              }
            });
          case 29:
            _createRes = _context.sent;
            console.log('create res for inscribe', _createRes);
            if ((0,isNil/* default */.Z)(_createRes === null || _createRes === void 0 ? void 0 : _createRes.txid)) {
              _context.next = 38;
              break;
            }
            _context.next = 34;
            return (0,utils/* sleep */._v)(6000);
          case 34:
            refetch && refetch();
            message/* default */.ZP.success('comment successfully');
            setContent('');
            onClose();
          case 38:
            _context.next = 47;
            break;
          case 40:
            _context.prev = 40;
            _context.t0 = _context["catch"](7);
            console.log('error', _context.t0);
            errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
            setIsAdding(false);
          case 47:
            setIsAdding(false);
          case 48:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 40]]);
    }));
    return function handleAddComment() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    onClose: onClose,
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
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            disabled: true,
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(FileImageOutlined/* default */.Z, {
              style: {
                color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
              }
            }),
            type: "text"
          })
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
  });
});

/***/ }),

/***/ 15250:
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(45611);
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
var api = __webpack_require__(72948);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(95267);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(8298);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(26282);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/PlusCircleFilled.js + 1 modules
var PlusCircleFilled = __webpack_require__(61147);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(16598);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(4390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(23674);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(12798);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/Follow/index.tsx















// Higher-order component to provide follow logic
var withFollow = function withFollow(WrappedComponent) {
  return function FollowComponent(props) {
    var metaid = props.metaid;
    var _useModel = (0,_umi_production_exports.useModel)('user'),
      followList = _useModel.followList,
      chain = _useModel.chain,
      btcConnector = _useModel.btcConnector,
      mvcConnector = _useModel.mvcConnector,
      user = _useModel.user,
      feeRate = _useModel.feeRate,
      setFollowList = _useModel.setFollowList,
      fetchUserFollowingList = _useModel.fetchUserFollowingList,
      checkUserSetting = _useModel.checkUserSetting,
      isLogin = _useModel.isLogin;
    var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
      fetchServiceFee = _useModel2.fetchServiceFee,
      showConf = _useModel2.showConf;
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
                _context.next = 14;
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
                  feeRate: Number(feeRate),
                  service: fetchServiceFee('follow_service_fee_amount', 'BTC')
                }
              });
            case 5:
              followRes = _context.sent;
              if ((0,isNil/* default */.Z)(followRes === null || followRes === void 0 ? void 0 : followRes.revealTxIds[0])) {
                _context.next = 12;
                break;
              }
              _context.next = 9;
              return (0,utils/* sleep */._v)(5000);
            case 9:
              _context.next = 11;
              return fetchUserFollowingList();
            case 11:
              message/* default */.ZP.success('Follow successfully! Please wait for the transaction to be confirmed!');
            case 12:
              _context.next = 27;
              break;
            case 14:
              _context.next = 16;
              return mvcConnector.load(getFollowEntitySchemaWithCustomHost((showConf === null || showConf === void 0 ? void 0 : showConf.host) || ''));
            case 16:
              Follow = _context.sent;
              _context.next = 19;
              return Follow.create({
                data: {
                  body: metaid
                },
                options: {
                  network: config/* curNetwork */.eM,
                  signMessage: 'Follow user',
                  service: fetchServiceFee('follow_service_fee_amount', 'MVC')
                }
              });
            case 19:
              res = _context.sent;
              console.log('create res for inscribe', res);
              if ((0,isNil/* default */.Z)(res === null || res === void 0 ? void 0 : res.txid)) {
                _context.next = 27;
                break;
              }
              _context.next = 24;
              return (0,utils/* sleep */._v)(5000);
            case 24:
              _context.next = 26;
              return fetchUserFollowingList();
            case 26:
              message/* default */.ZP.success('Follow successfully! Please wait for the transaction to be confirmed!');
            case 27:
              _context.next = 35;
              break;
            case 29:
              _context.prev = 29;
              _context.t0 = _context["catch"](1);
              console.log('error', _context.t0);
              errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
              toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
              message/* default */.ZP.error(toastMessage);
            case 35:
              setLoading(false);
            case 36:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 29]]);
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
                  feeRate: Number(feeRate),
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
                  service: fetchServiceFee('follow_service_fee_amount', 'MVC')
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
    children: loading || mempool ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {
      style: {
        color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
      },
      size: 16
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: isFollowing ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleFilled/* default */.Z, {
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
    mempool = _ref5.mempool;
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
    loading: loading || mempool,
    shape: "round",
    children: isFollowing ? 'Following' : 'Follow'
  });
};
var FollowIconComponent = withFollow(FollowIcon);
var FollowButtonComponent = withFollow(FollowButtonIcon);


/***/ }),

/***/ 87727:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71340);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48020);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57227);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23674);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67930);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48779);
/* harmony import */ var _Trans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78559);
/* harmony import */ var _assets_btc_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33401);
/* harmony import */ var _assets_mvc_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61133);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52676);







/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var chainNet = _ref.chainNet,
    setChainNet = _ref.setChainNet;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      span: 24,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Text, {
        strong: true,
        children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          children: "Select Network"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      span: 24,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        gutter: [12, 12],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          md: 12,
          xs: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
            onClick: function onClick() {
              setChainNet('btc');
            },
            style: {
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            },
            block: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 20
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: _assets_btc_png__WEBPACK_IMPORTED_MODULE_1__,
                style: {
                  height: 40,
                  width: 40
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Text, {
                children: "BTC Network"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
              checked: chainNet === 'btc'
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          md: 12,
          xs: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
            onClick: function onClick() {
              setChainNet('mvc');
            },
            style: {
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            },
            block: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 20
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: _assets_mvc_png__WEBPACK_IMPORTED_MODULE_2__,
                style: {
                  height: 40,
                  width: 40
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: 'column',
                  gap: 4
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Text, {
                  children: "MicrovisonChain"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                  style: {
                    fontSize: 8,
                    width: 80,
                    lineHeight: 1.2,
                    textAlign: 'center'
                  },
                  color: "orange",
                  bordered: false,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
                    children: "Bitcoin Sidechain"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
              checked: chainNet === 'mvc'
            })]
          })
        })]
      })
    })]
  });
});

/***/ }),

/***/ 78963:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ NewPost; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(335);
var createForOfIteratorHelper_default = /*#__PURE__*/__webpack_require__.n(createForOfIteratorHelper);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(12798);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(61067);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(1092);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(16598);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/upload/index.js + 11 modules
var upload = __webpack_require__(40681);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(26061);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(57227);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(71340);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(48020);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(23674);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(98325);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input-number/index.js + 2 modules
var input_number = __webpack_require__(3126);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/checkbox/index.js + 3 modules
var es_checkbox = __webpack_require__(96627);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/result/index.js + 4 modules
var result = __webpack_require__(926);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(54152);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UnlockOutlined.js + 1 modules
var UnlockOutlined = __webpack_require__(89759);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LockOutlined.js + 1 modules
var LockOutlined = __webpack_require__(25832);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(71232);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileImageOutlined.js + 1 modules
var FileImageOutlined = __webpack_require__(28918);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/VideoCameraOutlined.js + 1 modules
var VideoCameraOutlined = __webpack_require__(49922);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/utils/file.ts
var file = __webpack_require__(88271);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(45611);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.59.16_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(73118);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.59.16_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(77682);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 8 modules
var Buzz = __webpack_require__(82107);
// EXTERNAL MODULE: ./src/assets/btc.png
var btc = __webpack_require__(33401);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(95267);
// EXTERNAL MODULE: ./src/utils/buzz.ts
var buzz = __webpack_require__(42779);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(72948);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(49405);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(78559);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(4390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 7 modules
var config_provider = __webpack_require__(38587);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 5 modules
var spin = __webpack_require__(34888);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/empty/index.js + 3 modules
var empty = __webpack_require__(47822);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/collapse/index.js + 3 modules
var collapse = __webpack_require__(66959);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(97512);
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
var SelectChain = __webpack_require__(87727);
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
    onClose = _ref.onClose,
    quotePin = _ref.quotePin;
  var isQuoted = !(0,isNil/* default */.Z)(quotePin);
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    btcConnector = _useModel.btcConnector,
    feeRate = _useModel.feeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting,
    isLogin = _useModel.isLogin;
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
  var _useState5 = (0,react.useState)(''),
    _useState6 = slicedToArray_default()(_useState5, 2),
    content = _useState6[0],
    setContent = _useState6[1];
  var _useState7 = (0,react.useState)(''),
    _useState8 = slicedToArray_default()(_useState7, 2),
    encryptContent = _useState8[0],
    setEncryptContent = _useState8[1];
  var _useState9 = (0,react.useState)(false),
    _useState10 = slicedToArray_default()(_useState9, 2),
    isAdding = _useState10[0],
    setIsAdding = _useState10[1];
  var queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
  var _useState11 = (0,react.useState)(false),
    _useState12 = slicedToArray_default()(_useState11, 2),
    lock = _useState12[0],
    setLock = _useState12[1];
  var _useState13 = (0,react.useState)('mrc20'),
    _useState14 = slicedToArray_default()(_useState13, 2),
    payType = _useState14[0],
    setPayType = _useState14[1];
  var _useState15 = (0,react.useState)(0.00001),
    _useState16 = slicedToArray_default()(_useState15, 2),
    payAmount = _useState16[0],
    setPayAmount = _useState16[1];
  var _useState17 = (0,react.useState)(''),
    _useState18 = slicedToArray_default()(_useState17, 2),
    holdTokenID = _useState18[0],
    setHoldTokenID = _useState18[1];
  var _useState19 = (0,react.useState)(),
    _useState20 = slicedToArray_default()(_useState19, 2),
    mrc20 = _useState20[0],
    setMrc20 = _useState20[1];
  var _useState21 = (0,react.useState)(''),
    _useState22 = slicedToArray_default()(_useState21, 2),
    checkTokenID = _useState22[0],
    setCheckTokenID = _useState22[1];
  var _useState23 = (0,react.useState)([]),
    _useState24 = slicedToArray_default()(_useState23, 2),
    encryptFiles = _useState24[0],
    setEncryptFiles = _useState24[1];
  var _useState25 = (0,react.useState)(false),
    _useState26 = slicedToArray_default()(_useState25, 2),
    showNFTModal = _useState26[0],
    setShowNFTModal = _useState26[1];
  var _useState27 = (0,react.useState)([]),
    _useState28 = slicedToArray_default()(_useState27, 2),
    nfts = _useState28[0],
    setNFTs = _useState28[1];
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
    return false;
  };
  var handleRemoveImage = function handleRemoveImage(index) {
    setImages(function (prevImages) {
      return prevImages.filter(function (_, i) {
        return i !== index;
      });
    });
  };
  var onCreateSubmit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var isPass, _images;
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
            if (!(images.length !== 0)) {
              _context.next = 12;
              break;
            }
            _context.next = 9;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(images));
          case 9:
            _context.t0 = _context.sent;
            _context.next = 13;
            break;
          case 12:
            _context.t0 = [];
          case 13:
            _images = _context.t0;
            if (!lock) {
              _context.next = 18;
              break;
            }
            handleAddBuzzWhthLock();
            _context.next = 20;
            break;
          case 18:
            _context.next = 20;
            return handleAddBuzz({
              content: content,
              images: _images
            });
          case 20:
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
      var buzzEntity, fileTransactions, finalBody, fileOptions, _iterator, _step, image, fileEntity, imageRes, _fileEntity, finalAttachMetafileUri, i, fileOption, _yield$_fileEntity$cr, transactions, createRes, _buzzEntity, _createRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setIsAdding(true);
            _context3.next = 3;
            return btcConnector.use('buzz');
          case 3:
            buzzEntity = _context3.sent;
            fileTransactions = [];
            _context3.prev = 5;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            finalBody = {
              content: buzz.content,
              contentType: 'text/plain'
            };
            if ((0,isEmpty/* default */.Z)(buzz.images)) {
              _context3.next = 41;
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
            if (!(chain === 'btc')) {
              _context3.next = 22;
              break;
            }
            _context3.next = 14;
            return btcConnector.use('file');
          case 14:
            fileEntity = _context3.sent;
            _context3.next = 17;
            return fileEntity.create({
              dataArray: fileOptions,
              options: {
                noBroadcast: 'no',
                feeRate: Number(feeRate)
              }
            });
          case 17:
            imageRes = _context3.sent;
            console.log('imageRes', imageRes);
            finalBody.attachments = imageRes.revealTxIds.map(function (rid) {
              return 'metafile://' + rid + 'i0';
            });
            _context3.next = 41;
            break;
          case 22:
            _context3.next = 24;
            return mvcConnector.use('file');
          case 24:
            _fileEntity = _context3.sent;
            finalAttachMetafileUri = [];
            i = 0;
          case 27:
            if (!(i < fileOptions.length)) {
              _context3.next = 40;
              break;
            }
            fileOption = fileOptions[i];
            _context3.next = 31;
            return _fileEntity.create({
              data: fileOption,
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'upload image file',
                serialAction: 'combo',
                transactions: fileTransactions
              }
            });
          case 31:
            _yield$_fileEntity$cr = _context3.sent;
            transactions = _yield$_fileEntity$cr.transactions;
            if (transactions) {
              _context3.next = 35;
              break;
            }
            throw new Error('upload image file failed');
          case 35:
            finalAttachMetafileUri.push('metafile://' + transactions[transactions.length - 1].txComposer.getTxId() + 'i0');
            fileTransactions = transactions;
          case 37:
            i++;
            _context3.next = 27;
            break;
          case 40:
            finalBody.attachments = finalAttachMetafileUri;
          case 41:
            //   await sleep(5000);

            if (!(0,isNil/* default */.Z)(quotePin)) {
              finalBody.quotePin = quotePin.id;
            }
            if (nfts.length > 0) {
              finalBody.attachments = [].concat(toConsumableArray_default()(nfts.map(function (nft) {
                return "metafile://nft/mrc721/".concat(nft.itemPinId);
              })), toConsumableArray_default()(finalBody.attachments || []));
            }
            if (!(chainNet === 'btc')) {
              _context3.next = 52;
              break;
            }
            console.log('finalBody', {
              body: JSON.stringify(finalBody),
              contentType: 'text/plain;utf-8',
              flag: config/* FLAG */.BZ,
              path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/protocols/simplebuzz")
            });
            _context3.next = 47;
            return buzzEntity.create({
              dataArray: [{
                body: JSON.stringify(finalBody),
                contentType: 'text/plain;utf-8',
                flag: config/* FLAG */.BZ,
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/protocols/simplebuzz")
              }],
              options: {
                noBroadcast: 'no',
                feeRate: Number(feeRate),
                service: fetchServiceFee('post_service_fee_amount')
                // service: {
                //     address: environment.service_address,
                //     satoshis: environment.service_staoshi,
                // },
                // network: environment.network,
              }
            });
          case 47:
            createRes = _context3.sent;
            console.log('create res for inscribe', createRes);
            if (!(0,isNil/* default */.Z)(createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0])) {
              // await sleep(5000);
              queryClient.invalidateQueries({
                queryKey: ['homebuzzesnew']
              });
              message/* default */.ZP.success("".concat(isQuoted ? 'repost' : 'create', " buzz successfully"));
              setContent('');
              setImages([]);
              onClose();
            }
            _context3.next = 60;
            break;
          case 52:
            _context3.next = 54;
            return mvcConnector.use('buzz');
          case 54:
            _buzzEntity = _context3.sent;
            _context3.next = 57;
            return _buzzEntity.create({
              data: {
                body: JSON.stringify(objectSpread2_default()({}, finalBody))
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'create buzz',
                serialAction: 'finish',
                transactions: fileTransactions,
                service: fetchServiceFee('post_service_fee_amount', 'MVC')
              }
            });
          case 57:
            _createRes = _context3.sent;
            console.log('create res for inscribe', _createRes);
            if (!(0,isNil/* default */.Z)(_createRes === null || _createRes === void 0 ? void 0 : _createRes.txid)) {
              // await sleep(5000);
              queryClient.invalidateQueries({
                queryKey: ['homebuzzesnew']
              });
              message/* default */.ZP.success("".concat(isQuoted ? 'repost' : 'create', " buzz successfully"));
              setContent('');
              setImages([]);
              onClose();
              setNFTs([]);
            }
          case 60:
            _context3.next = 69;
            break;
          case 62:
            _context3.prev = 62;
            _context3.t0 = _context3["catch"](5);
            console.log('error', _context3.t0);
            errorMessage = (_message = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _message !== void 0 ? _message : _context3.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
            setIsAdding(false);
          case 69:
            setIsAdding(false);
          case 70:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[5, 62]]);
    }));
    return function handleAddBuzz(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleAddBuzzWhthLock = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
      var encryptImages, publicImages, _message2, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setIsAdding(true);
            _context4.prev = 1;
            encryptImages = images.filter(function (image) {
              return encryptFiles.includes(image.previewUrl);
            });
            publicImages = images.filter(function (image) {
              return !encryptFiles.includes(image.previewUrl);
            });
            if (!(encryptImages.length === 0 && !encryptContent)) {
              _context4.next = 6;
              break;
            }
            throw new Error('Please input encrypt content or encrypt images');
          case 6:
            if (payType) {
              _context4.next = 8;
              break;
            }
            throw new Error('Please select pay type');
          case 8:
            if (!(payType === 'mrc20' && !IdCoin)) {
              _context4.next = 10;
              break;
            }
            throw new Error('Please Launch Your Unique ID-COIN');
          case 10:
            if (!(payType === 'btc' && payAmount <= 0)) {
              _context4.next = 12;
              break;
            }
            throw new Error('Please input valid pay amount');
          case 12:
            _context4.t0 = buzz/* postPayBuzz */.Vb;
            _context4.t1 = content;
            _context4.next = 16;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(encryptImages));
          case 16:
            _context4.t2 = _context4.sent;
            _context4.next = 19;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(publicImages));
          case 19:
            _context4.t3 = _context4.sent;
            _context4.t4 = encryptContent;
            _context4.t5 = nfts.map(function (nft) {
              return "metafile://nft/mrc721/".concat(nft.itemPinId);
            });
            _context4.t6 = (admin === null || admin === void 0 ? void 0 : admin.domainName) || '';
            _context4.t7 = {
              content: _context4.t1,
              encryptImages: _context4.t2,
              publicImages: _context4.t3,
              encryptContent: _context4.t4,
              nfts: _context4.t5,
              manDomain: _context4.t6
            };
            _context4.t8 = String(payAmount);
            _context4.t9 = user.address;
            _context4.t10 = feeRate;
            _context4.t11 = (showConf === null || showConf === void 0 ? void 0 : showConf.host) || '';
            _context4.t12 = chainNet;
            _context4.t13 = btcConnector;
            _context4.t14 = mvcConnector;
            _context4.t15 = manPubKey || '';
            _context4.t16 = fetchServiceFee('post_service_fee_amount', chainNet === 'btc' ? 'BTC' : "MVC");
            _context4.t17 = String(payType);
            _context4.t18 = IdCoin;
            _context4.next = 37;
            return (0, _context4.t0)(_context4.t7, _context4.t8, _context4.t9, _context4.t10, _context4.t11, _context4.t12, _context4.t13, _context4.t14, _context4.t15, _context4.t16, _context4.t17, _context4.t18);
          case 37:
            setContent('');
            setImages([]);
            setNFTs([]);
            onClose();
            queryClient.invalidateQueries({
              queryKey: ['homebuzzesnew']
            });
            _context4.next = 50;
            break;
          case 44:
            _context4.prev = 44;
            _context4.t19 = _context4["catch"](1);
            console.log('error', _context4.t19);
            errorMessage = (_message2 = _context4.t19 === null || _context4.t19 === void 0 ? void 0 : _context4.t19.message) !== null && _message2 !== void 0 ? _message2 : _context4.t19;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
          case 50:
            setIsAdding(false);
          case 51:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 44]]);
    }));
    return function handleAddBuzzWhthLock() {
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
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponPopup/* default */.Z, {
    onClose: onClose,
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
          padding: 0
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
        buzzItem: quotePin,
        showActions: false
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
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(TextArea, {
            rows: 4,
            placeholder: isQuoted ? (0,utils/* formatMessage */.wv)("Add a comment") : (0,utils/* formatMessage */.wv)("post_placeholder"),
            value: content,
            onChange: function onChange(e) {
              return setContent(e.target.value);
            }
          })
        }), !isQuoted && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
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
              rows: 4,
              placeholder: (0,utils/* formatMessage */.wv)({
                id: "encrypt content"
              }),
              value: encryptContent,
              onChange: function onChange(e) {
                return setEncryptContent(e.target.value);
              }
            })
          })]
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
            })]
          })
        }), !isQuoted && lock && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            span: 24,
            style: {
              justifyContent: 'space-between',
              display: 'flex',
              alignItems: "center"
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
                  children: "Hold ID Coin"
                }),
                value: 'mrc20'
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
                        children: "Launch Me"
                      })
                    }, "console")
                  })
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
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(FileImageOutlined/* default */.Z, {
                style: {
                  color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                }
              }),
              type: "text"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "text",
            onClick: function onClick() {
              return setShowNFTModal(true);
            },
            style: {
              color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
            },
            children: "NFT"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            disabled: true,
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(VideoCameraOutlined/* default */.Z, {
              style: {
                color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
              }
            }),
            type: "text"
          })]
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
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NFTModal, {
      show: showNFTModal,
      onClose: function onClose() {
        setShowNFTModal(false);
      },
      nfts: nfts,
      setNFTs: setNFTs
    })]
  });
});

/***/ }),

/***/ 61067:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ResponPopup; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(70567);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 17 modules
var modal = __webpack_require__(81645);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/index.js + 3 modules
var drawer = __webpack_require__(22842);
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

/***/ 78559:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12798);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);




/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var children = _ref.children,
    _ref$wrapper = _ref.wrapper,
    wrapper = _ref$wrapper === void 0 ? false : _ref$wrapper;
  var _useIntl = (0,umi__WEBPACK_IMPORTED_MODULE_1__.useIntl)(),
    formatMessage = _useIntl.formatMessage;
  if (!children) return null;
  if (wrapper) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children: formatMessage({
        id: children
      })
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: formatMessage({
      id: children
    })
  });
});

/***/ }),

/***/ 49405:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45611);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73262);
/* harmony import */ var _assets_defaultAvatar_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43143);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);




/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var src = _ref.src,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 40 : _ref$size;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .C, {
    style: {
      minHeight: size,
      minWidth: size,
      maxHeight: size,
      maxWidth: size
    },
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      style: {
        objectFit: 'cover'
      },
      src: src ? (src.startsWith('http') ? '' : _config__WEBPACK_IMPORTED_MODULE_0__/* .BASE_MAN_URL */ .yC) + src : _assets_defaultAvatar_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
      onError: function onError(_ref2) {
        var currentTarget = _ref2.currentTarget;
        currentTarget.onerror = null;
        currentTarget.src = _assets_defaultAvatar_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
      }
    }),
    size: size
  });
});

/***/ }),

/***/ 42779:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vb: function() { return /* binding */ postPayBuzz; },
/* harmony export */   ns: function() { return /* binding */ decodePayBuzz; },
/* harmony export */   qq: function() { return /* binding */ buildAccessPass; }
/* harmony export */ });
/* unused harmony exports postImages, postEncryptImages */
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(335);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15558);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95267);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45611);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53765);
/* harmony import */ var _bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48507);
/* harmony import */ var ecpair__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50590);
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74347);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(42879);
/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72948);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35906);
/* provided dependency */ var Buffer = __webpack_require__(36379)["Buffer"];















bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_11__/* .initEccLib */ .Wi(_bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_9__);
var ECPair = (0,ecpair__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(_bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_9__);
var postPayBuzz = /*#__PURE__*/function () {
  var _ref2 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee(_ref, price, address, feeRate, host, chain, btcConnector, mvcConnector, manPubKey, serviceFee, payType, payTicker) {
    var content, encryptImages, publicImages, encryptContent, nfts, _ref$manDomain, manDomain, transactions, randomKey, publicContent, _encryptContent, _yield$postImages, attachments, fileTransactions, _yield$postEncryptIma, encryptAttachments, encryptFileTransactions, payload, path, metaidData, pid, ret, _ret$revealTxIds, revealTxId, _yield$createPin, pinTransations, _yield$window$metaidw, sharedSecret, ecdhPubKey, contorlPayload, contorlPath, contorlMetaidData, _ret;
    return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          content = _ref.content, encryptImages = _ref.encryptImages, publicImages = _ref.publicImages, encryptContent = _ref.encryptContent, nfts = _ref.nfts, _ref$manDomain = _ref.manDomain, manDomain = _ref$manDomain === void 0 ? "" : _ref$manDomain;
          transactions = [];
          randomKey = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .generateAESKey */ .wC)();
          publicContent = content;
          _encryptContent = encryptContent ? (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .encryptPayloadAES */ .yI)(randomKey, Buffer.from(encryptContent, "utf-8").toString("hex")) : "";
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
            publicFiles: [].concat(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(nfts), _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(attachments)),
            encryptFiles: encryptAttachments
          };
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
            _context.next = 31;
            break;
          }
          _context.next = 24;
          return btcConnector.inscribe({
            inscribeDataArray: [metaidData],
            options: {
              noBroadcast: "no",
              feeRate: Number(feeRate),
              service: serviceFee
            }
          });
        case 24:
          ret = _context.sent;
          if (!ret.status) {
            _context.next = 27;
            break;
          }
          throw new Error(ret.status);
        case 27:
          _ret$revealTxIds = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(ret.revealTxIds, 1), revealTxId = _ret$revealTxIds[0];
          pid = "".concat(revealTxId, "i0");
          _context.next = 37;
          break;
        case 31:
          _context.next = 33;
          return mvcConnector.createPin(metaidData, {
            network: _config__WEBPACK_IMPORTED_MODULE_7__/* .curNetwork */ .eM,
            signMessage: "create paybuzz",
            serialAction: "combo",
            transactions: _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(transactions),
            service: serviceFee
          });
        case 33:
          _yield$createPin = _context.sent;
          pinTransations = _yield$createPin.transactions;
          transactions = pinTransations;
          pid = transactions[transactions.length - 1].txComposer.getTxId() + "i0";
        case 37:
          _context.next = 39;
          return window.metaidwallet.common.ecdh({
            externalPubKey: manPubKey
          });
        case 39:
          _yield$window$metaidw = _context.sent;
          sharedSecret = _yield$window$metaidw.sharedSecret;
          ecdhPubKey = _yield$window$metaidw.ecdhPubKey;
          contorlPayload = {
            controlPins: [pid],
            manDomain: manDomain || "",
            manPubkey: manPubKey,
            creatorPubkey: ecdhPubKey,
            encryptedKey: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .encryptPayloadAES */ .yI)(sharedSecret, randomKey)
          };
          if (payType === "mrc20" && payTicker) {
            contorlPayload.holdCheck = {
              type: "mrc20",
              ticker: payTicker.tick,
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
            _context.next = 54;
            break;
          }
          _context.next = 49;
          return btcConnector.inscribe({
            inscribeDataArray: [contorlMetaidData],
            options: {
              noBroadcast: "no",
              feeRate: Number(feeRate),
              service: serviceFee
            }
          });
        case 49:
          _ret = _context.sent;
          if (!_ret.status) {
            _context.next = 52;
            break;
          }
          throw new Error(_ret.status);
        case 52:
          _context.next = 56;
          break;
        case 54:
          _context.next = 56;
          return mvcConnector.createPin(contorlMetaidData, {
            network: _config__WEBPACK_IMPORTED_MODULE_7__/* .curNetwork */ .eM,
            signMessage: "create accesscontrol",
            serialAction: "finish",
            transactions: _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(transactions)
          });
        case 56:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function postPayBuzz(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12) {
    return _ref2.apply(this, arguments);
  };
}();
var postImages = /*#__PURE__*/function () {
  var _ref3 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee2(images, feeRate, host, chain, btcConnector, mvcConnector) {
    var fileOptions, _iterator, _step, image, fileEntity, imageRes, fileTransactions, _fileEntity, finalAttachMetafileUri, i, fileOption, _yield$_fileEntity$cr, transactions;
    return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(images.length === 0)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", {
            attachments: [],
            fileTransactions: []
          });
        case 2:
          fileOptions = [];
          _iterator = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1___default()(images);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              image = _step.value;
              fileOptions.push({
                body: Buffer.from(image.data, "hex").toString("base64"),
                contentType: "".concat(image.fileType, ";binary"),
                encoding: "base64",
                flag: _config__WEBPACK_IMPORTED_MODULE_7__/* .FLAG */ .BZ,
                path: "".concat(host || "", "/file")
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (!(chain === "btc")) {
            _context2.next = 15;
            break;
          }
          _context2.next = 8;
          return btcConnector.use("file");
        case 8:
          fileEntity = _context2.sent;
          _context2.next = 11;
          return fileEntity.create({
            dataArray: fileOptions,
            options: {
              noBroadcast: "no",
              feeRate: Number(feeRate)
            }
          });
        case 11:
          imageRes = _context2.sent;
          return _context2.abrupt("return", {
            attachments: imageRes.revealTxIds.map(function (rid) {
              return "metafile://" + rid + "i0";
            }),
            fileTransactions: []
          });
        case 15:
          fileTransactions = [];
          _context2.next = 18;
          return mvcConnector.use("file");
        case 18:
          _fileEntity = _context2.sent;
          finalAttachMetafileUri = [];
          i = 0;
        case 21:
          if (!(i < fileOptions.length)) {
            _context2.next = 34;
            break;
          }
          fileOption = fileOptions[i];
          _context2.next = 25;
          return _fileEntity.create({
            data: fileOption,
            options: {
              network: _config__WEBPACK_IMPORTED_MODULE_7__/* .curNetwork */ .eM,
              signMessage: "upload image file",
              serialAction: "combo",
              transactions: []
            }
          });
        case 25:
          _yield$_fileEntity$cr = _context2.sent;
          transactions = _yield$_fileEntity$cr.transactions;
          if (transactions) {
            _context2.next = 29;
            break;
          }
          throw new Error("upload image file failed");
        case 29:
          finalAttachMetafileUri.push("metafile://" + transactions[transactions.length - 1].txComposer.getTxId() + "i0");
          fileTransactions = transactions;
        case 31:
          i++;
          _context2.next = 21;
          break;
        case 34:
          return _context2.abrupt("return", {
            fileTransactions: fileTransactions,
            attachments: finalAttachMetafileUri
          });
        case 35:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function postImages(_x13, _x14, _x15, _x16, _x17, _x18) {
    return _ref3.apply(this, arguments);
  };
}();
var postEncryptImages = /*#__PURE__*/function () {
  var _ref4 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee3(images, feeRate, host, chain, btcConnector, mvcConnector, randomKey, _fileTransactions) {
    var fileOptions, _iterator2, _step2, image, fileEntity, imageRes, fileTransactions, _fileEntity2, finalAttachMetafileUri, i, fileOption, _yield$_fileEntity2$c, transactions;
    return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!(images.length === 0)) {
            _context3.next = 2;
            break;
          }
          return _context3.abrupt("return", {
            attachments: [],
            fileTransactions: _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(_fileTransactions)
          });
        case 2:
          fileOptions = [];
          _iterator2 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1___default()(images);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              image = _step2.value;
              fileOptions.push({
                body: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .encryptPayloadAES */ .yI)(randomKey, Buffer.from(image.data, "hex").toString("hex")),
                contentType: "binary",
                encoding: "binary",
                flag: _config__WEBPACK_IMPORTED_MODULE_7__/* .FLAG */ .BZ,
                path: "".concat(host || "", "/file")
              });
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (!(chain === "btc")) {
            _context3.next = 15;
            break;
          }
          _context3.next = 8;
          return btcConnector.use("file");
        case 8:
          fileEntity = _context3.sent;
          _context3.next = 11;
          return fileEntity.create({
            dataArray: fileOptions,
            options: {
              noBroadcast: "no",
              feeRate: Number(feeRate)
            }
          });
        case 11:
          imageRes = _context3.sent;
          return _context3.abrupt("return", {
            attachments: imageRes.revealTxIds.map(function (rid) {
              return "metafile://" + rid + "i0";
            }),
            fileTransactions: []
          });
        case 15:
          fileTransactions = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4___default()(_fileTransactions);
          _context3.next = 18;
          return mvcConnector.use("file");
        case 18:
          _fileEntity2 = _context3.sent;
          finalAttachMetafileUri = [];
          i = 0;
        case 21:
          if (!(i < fileOptions.length)) {
            _context3.next = 34;
            break;
          }
          fileOption = fileOptions[i];
          _context3.next = 25;
          return _fileEntity2.create({
            data: fileOption,
            options: {
              network: _config__WEBPACK_IMPORTED_MODULE_7__/* .curNetwork */ .eM,
              signMessage: "upload image file",
              serialAction: "combo",
              transactions: fileTransactions
            }
          });
        case 25:
          _yield$_fileEntity2$c = _context3.sent;
          transactions = _yield$_fileEntity2$c.transactions;
          if (transactions) {
            _context3.next = 29;
            break;
          }
          throw new Error("upload image file failed");
        case 29:
          finalAttachMetafileUri.push("metafile://" + transactions[transactions.length - 1].txComposer.getTxId() + "i0");
          fileTransactions = transactions;
        case 31:
          i++;
          _context3.next = 21;
          break;
        case 34:
          return _context3.abrupt("return", {
            fileTransactions: fileTransactions,
            attachments: finalAttachMetafileUri
          });
        case 35:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function postEncryptImages(_x19, _x20, _x21, _x22, _x23, _x24, _x25, _x26) {
    return _ref4.apply(this, arguments);
  };
}();
var buildAccessPass = /*#__PURE__*/function () {
  var _ref5 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee4(pid, host, btcConnector, feeRate, payAddress, payAmount) {
    var payload, path, metaidData, res;
    return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
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
          _context4.next = 5;
          return btcConnector.inscribe({
            inscribeDataArray: [metaidData],
            options: {
              noBroadcast: "no",
              feeRate: Number(feeRate),
              service: {
                address: payAddress,
                // payCheck.payTo
                satoshis: new decimal_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z(payAmount).mul(1e8).toString() // payCheck.amount
              }
            }
          });
        case 5:
          res = _context4.sent;
          if (!res.status) {
            _context4.next = 8;
            break;
          }
          throw new Error(res.status);
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function buildAccessPass(_x27, _x28, _x29, _x30, _x31, _x32) {
    return _ref5.apply(this, arguments);
  };
}();
function sha256ToHex(input) {
  return crypto__WEBPACK_IMPORTED_MODULE_13__/* .createHash */ .js("sha256").update(input).digest("hex");
}
var decodePayBuzz = /*#__PURE__*/function () {
  var _ref6 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().mark(function _callee5(buzzItem, manPubKey, isLogin) {
    var _parseSummary$attachm, _parseSummary$encrypt;
    var _summary, isSummaryJson, parseSummary, _publicFiles, _nfts, i, _nftId, nft, _publicFiles2, _nfts2, _i, _nftId2, _nft, _yield$getControlByCo, controlPin, btcAddress, mvcAddress, manPubkey, encryptedKey, _yield$window$metaidw2, _sharedSecret, _ecdhPubKey, key, encryptContent, encryptFiles, decryptFiles, pids, _pins, pins, _yield$window$metaidw3, sharedSecret, ecdhPubKey, timestamp, _signStr, sign, decryptRet, data;
    return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2___default()().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _summary = buzzItem.content;
          isSummaryJson = _summary.startsWith("{") && _summary.endsWith("}");
          parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
          if (isSummaryJson) {
            _context5.next = 5;
            break;
          }
          return _context5.abrupt("return", {
            publicContent: _summary,
            encryptContent: "",
            publicFiles: [],
            encryptFiles: [],
            nfts: [],
            buzzType: "normal",
            status: "unpurchased"
          });
        case 5:
          if ((0,ramda__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)((_parseSummary$attachm = parseSummary === null || parseSummary === void 0 ? void 0 : parseSummary.attachments) !== null && _parseSummary$attachm !== void 0 ? _parseSummary$attachm : [])) {
            _context5.next = 30;
            break;
          }
          _publicFiles = [];
          _nfts = [];
          i = 0;
        case 9:
          if (!(i < parseSummary.attachments.length)) {
            _context5.next = 29;
            break;
          }
          if (!parseSummary.attachments[i].startsWith("metafile://nft/mrc721/")) {
            _context5.next = 24;
            break;
          }
          _nftId = parseSummary.attachments[i].split("metafile://nft/mrc721/")[1];
          _context5.prev = 12;
          _context5.next = 15;
          return (0,_request_api__WEBPACK_IMPORTED_MODULE_12__/* .getNFTItem */ .oK)({
            pinId: _nftId
          });
        case 15:
          nft = _context5.sent;
          parseSummary.attachments[i] = JSON.parse(atob(nft.data.content)).attachment[0].content;
          _nfts.push(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, nft.data), {}, {
            previewImage: parseSummary.attachments[i]
          }));
          _context5.next = 22;
          break;
        case 20:
          _context5.prev = 20;
          _context5.t0 = _context5["catch"](12);
        case 22:
          _context5.next = 26;
          break;
        case 24:
          if (parseSummary.attachments[i].startsWith("metafile://")) {
            parseSummary.attachments[i] = parseSummary.attachments[i].split("metafile://")[1];
          }
          _publicFiles.push(parseSummary.attachments[i]);
        case 26:
          i++;
          _context5.next = 9;
          break;
        case 29:
          return _context5.abrupt("return", {
            publicContent: parseSummary.content,
            encryptContent: "",
            publicFiles: _publicFiles,
            nfts: _nfts,
            encryptFiles: [],
            buzzType: "normal",
            status: "unpurchased"
          });
        case 30:
          if (!(parseSummary.encryptContent || !(0,ramda__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)((_parseSummary$encrypt = parseSummary === null || parseSummary === void 0 ? void 0 : parseSummary.encryptFiles) !== null && _parseSummary$encrypt !== void 0 ? _parseSummary$encrypt : []))) {
            _context5.next = 102;
            break;
          }
          _publicFiles2 = [];
          _nfts2 = [];
          _i = 0;
        case 34:
          if (!(_i < parseSummary.publicFiles.length)) {
            _context5.next = 54;
            break;
          }
          if (!parseSummary.publicFiles[_i].startsWith("metafile://nft/mrc721/")) {
            _context5.next = 49;
            break;
          }
          _nftId2 = parseSummary.publicFiles[_i].split("metafile://nft/mrc721/")[1];
          _context5.prev = 37;
          _context5.next = 40;
          return (0,_request_api__WEBPACK_IMPORTED_MODULE_12__/* .getNFTItem */ .oK)({
            pinId: _nftId2
          });
        case 40:
          _nft = _context5.sent;
          parseSummary.publicFiles[_i] = JSON.parse(atob(_nft.data.content)).attachment[0].content;
          _nfts2.push(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, _nft.data), {}, {
            previewImage: parseSummary.publicFiles[_i]
          }));
          _context5.next = 47;
          break;
        case 45:
          _context5.prev = 45;
          _context5.t1 = _context5["catch"](37);
        case 47:
          _context5.next = 51;
          break;
        case 49:
          if (parseSummary.publicFiles[_i].startsWith("metafile://")) {
            parseSummary.publicFiles[_i] = parseSummary.publicFiles[_i].split("metafile://")[1];
          }
          _publicFiles2.push(parseSummary.publicFiles[_i]);
        case 51:
          _i++;
          _context5.next = 34;
          break;
        case 54:
          _context5.next = 56;
          return (0,_request_api__WEBPACK_IMPORTED_MODULE_12__/* .getControlByContentPin */ .up)({
            pinId: buzzItem.id
          });
        case 56:
          _yield$getControlByCo = _context5.sent;
          controlPin = _yield$getControlByCo.data;
          if (controlPin) {
            _context5.next = 60;
            break;
          }
          return _context5.abrupt("return", {
            publicContent: parseSummary.publicContent,
            encryptContent: "",
            publicFiles: _publicFiles2,
            encryptFiles: [],
            nfts: _nfts2,
            buzzType: "normal",
            status: "unpurchased"
          });
        case 60:
          if (isLogin) {
            _context5.next = 62;
            break;
          }
          return _context5.abrupt("return", {
            publicContent: parseSummary.publicContent,
            encryptContent: "",
            publicFiles: _publicFiles2,
            encryptFiles: parseSummary.encryptFiles,
            nfts: _nfts2,
            buzzType: "pay",
            status: "unpurchased"
          });
        case 62:
          _context5.next = 64;
          return window.metaidwallet.btc.getAddress();
        case 64:
          btcAddress = _context5.sent;
          _context5.next = 67;
          return window.metaidwallet.getAddress();
        case 67:
          mvcAddress = _context5.sent;
          if (!(buzzItem.creator === btcAddress || buzzItem.creator === mvcAddress)) {
            _context5.next = 87;
            break;
          }
          manPubkey = controlPin.manPubkey, encryptedKey = controlPin.encryptedKey;
          _context5.next = 72;
          return window.metaidwallet.common.ecdh({
            externalPubKey: manPubKey
          });
        case 72:
          _yield$window$metaidw2 = _context5.sent;
          _sharedSecret = _yield$window$metaidw2.sharedSecret;
          _ecdhPubKey = _yield$window$metaidw2.ecdhPubKey;
          key = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .decryptPayloadAES */ .LN)(_sharedSecret, encryptedKey);
          encryptContent = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .decryptPayloadAES */ .LN)(key, parseSummary.encryptContent);
          encryptFiles = parseSummary.encryptFiles;
          decryptFiles = [];
          if (!(encryptFiles.length > 0)) {
            _context5.next = 86;
            break;
          }
          pids = encryptFiles.map(function (d) {
            return d.split("metafile://")[1];
          });
          _context5.next = 83;
          return Promise.all(pids.map(function (pid) {
            return (0,_request_api__WEBPACK_IMPORTED_MODULE_12__/* .getPinDetailByPid */ .Wm)({
              pid: pid
            });
          }));
        case 83:
          _pins = _context5.sent;
          pins = _pins.filter(function (d) {
            return Boolean(d);
          });
          decryptFiles = pins.map(function (pin) {
            return Buffer.from((0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .decryptPayloadAES */ .LN)(key, pin.contentSummary), "hex").toString("base64");
          });
        case 86:
          return _context5.abrupt("return", {
            publicContent: parseSummary.publicContent,
            encryptContent: Buffer.from(encryptContent, "hex").toString("utf-8"),
            publicFiles: _publicFiles2,
            nfts: _nfts2,
            encryptFiles: decryptFiles,
            buzzType: "pay",
            status: "purchased"
          });
        case 87:
          _context5.next = 89;
          return window.metaidwallet.common.ecdh({
            externalPubKey: manPubKey
          });
        case 89:
          _yield$window$metaidw3 = _context5.sent;
          sharedSecret = _yield$window$metaidw3.sharedSecret;
          ecdhPubKey = _yield$window$metaidw3.ecdhPubKey;
          timestamp = Math.floor(Date.now() / 1000);
          _signStr = "".concat(sharedSecret).concat(timestamp).concat(btcAddress);
          sign = sha256ToHex(_signStr);
          _context5.next = 97;
          return (0,_request_api__WEBPACK_IMPORTED_MODULE_12__/* .getDecryptContent */ .r$)({
            publickey: ecdhPubKey,
            address: btcAddress,
            sign: sign,
            timestamp: timestamp,
            pinId: buzzItem.id,
            controlPath: "",
            controlPinId: controlPin.pinId
          }, controlPin.manDomain);
        case 97:
          decryptRet = _context5.sent;
          data = decryptRet.data;
          if (data) {
            _context5.next = 101;
            break;
          }
          return _context5.abrupt("return", {
            publicContent: parseSummary.publicContent,
            encryptContent: parseSummary.encryptContent,
            publicFiles: _publicFiles2,
            nfts: _nfts2,
            encryptFiles: parseSummary.encryptFiles,
            buzzType: "pay",
            status: "unpurchased"
          });
        case 101:
          return _context5.abrupt("return", {
            publicContent: parseSummary.publicContent,
            encryptContent: data.status === "purchased" ? data.contentResult || "" : "",
            publicFiles: _publicFiles2,
            nfts: _nfts2,
            encryptFiles: data.status === "purchased" ? data.filesResult || [] : parseSummary.encryptFiles,
            buzzType: "pay",
            status: data.status
          });
        case 102:
          return _context5.abrupt("return", {
            publicContent: parseSummary.content,
            encryptContent: "",
            publicFiles: [],
            encryptFiles: [],
            nfts: [],
            buzzType: "normal",
            status: "unpurchased"
          });
        case 103:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[12, 20], [37, 45]]);
  }));
  return function decodePayBuzz(_x33, _x34, _x35) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ 88271:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V6: function() { return /* binding */ image2Attach; },
/* harmony export */   nU: function() { return /* binding */ convertToFileList; }
/* harmony export */ });
/* unused harmony exports IsEncrypt, parseMetaFile, parseAvatarWithMetaid, parseAvatarWithUri, compressImage, FileToAttachmentItem, FileToBinaryData, mergeFileLists, removeFileFromList */
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80396);
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compressorjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25778);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto_js_enc_hex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2447);
/* harmony import */ var crypto_js_enc_hex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_hex__WEBPACK_IMPORTED_MODULE_4__);
/* provided dependency */ var Buffer = __webpack_require__(36379)["Buffer"];


/* eslint-disable no-async-promise-executor */
/* eslint-disable @typescript-eslint/ban-ts-comment */



var IsEncrypt = /*#__PURE__*/function (IsEncrypt) {
  IsEncrypt[IsEncrypt["Yes"] = 1] = "Yes";
  IsEncrypt[IsEncrypt["No"] = 0] = "No";
  return IsEncrypt;
}({});
function parseMetaFile(rawUri) {
  // console.log("url", rawUri);
  // remove prefix: metafile://, then replace .jpeg with .jpg
  var METAFILE_API_HOST = 'https://api.show3.io/metafile';
  var METACONTRACT_API_HOST = 'https://api.show3.io/metafile/metacontract';
  var uri = rawUri.split(/metafile:\/\/|metacontract:\/\//)[1];
  // if there is no extension name in metaFile, add .png
  if (rawUri.includes('metafile')) {
    return "".concat(METAFILE_API_HOST, "/").concat(uri);
  } else if (rawUri.includes('metacontract')) {
    return "".concat(METACONTRACT_API_HOST, "/").concat(uri);
  } else {
    return rawUri;
  }
}
function parseAvatarWithMetaid(metaid) {
  var METAFILE_API_HOST = 'https://api.show3.io/metafile';
  return "".concat(METAFILE_API_HOST, "/avatar/compress/").concat(metaid);
}
function parseAvatarWithUri(originUri, txid) {
  var METAFILE_API_HOST = 'https://api.show3.io/metafile';
  if (originUri.includes('metafile')) {
    return "".concat(METAFILE_API_HOST, "/compress/").concat(txid);
  }
  if (originUri.includes('sensibile')) {
    return "".concat(METAFILE_API_HOST, "/sensible/").concat(originUri.split('sensibile://')[1]);
  }
  if (originUri.includes('metacontract')) {
    return "".concat(METAFILE_API_HOST, "/metacontract/").concat(originUri.split('metacontract://')[1]);
  }
}

// https://api.show3.io/metafile/sensible/0d0fc08db6e27dc0263b594d6b203f55fb5282e2/204dafb6ee543796b4da6f1d4134c1df2609bdf1/6
// https://api.show3.io/metafile/avatar/compress/2df27132058cd24ff9ef2939315c9ca0d8ec88733f5bda0df130b7798efea972

function compressImage(_x) {
  return _compressImage.apply(this, arguments);
}

// 降文件转为 AttachmentItem， 便于操作/上链
function _compressImage() {
  _compressImage = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee4(image) {
    var compress, useQuality, i, compressed;
    return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          compress = function compress(quality) {
            return new Promise(function (resolve, reject) {
              new (compressorjs__WEBPACK_IMPORTED_MODULE_2___default())(image, {
                quality: quality,
                convertSize: 100000,
                // 100KB
                success: resolve,
                error: reject
              });
            });
          }; // Use 0.6 compression ratio first; If the result is still larger than 1MB, use half of the compression ratio; Repeat 5 times until the result is less than 1MB, otherwise raise an error
          useQuality = 0.6;
          i = 0;
        case 3:
          if (!(i < 5)) {
            _context4.next = 13;
            break;
          }
          _context4.next = 6;
          return compress(useQuality);
        case 6:
          compressed = _context4.sent;
          if (!(compressed.size < 1000000)) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", compressed);
        case 9:
          useQuality /= 2;
        case 10:
          i++;
          _context4.next = 3;
          break;
        case 13:
          throw new Error('Image is too large');
        case 14:
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
    var _ref = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(resolve) {
      var readResult, chunkSize, hex, sha256Algo, index;
      return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
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
                  hex += buffer.toString('hex'); // 更新hex
                  // 增量更新计算结果
                  sha256Algo.update(wordArray); // 更新hash
                  resolve();
                };
                reader.readAsArrayBuffer(blob);
              });
            };
            // 分块读取，防止内存溢出，这里设置为20MB,可以根据实际情况进行配置
            chunkSize = 20 * 1024 * 1024;
            hex = ''; // 二进制
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

                  binaryData = (_reader$result = reader.result) === null || _reader$result === void 0 ? void 0 : _reader$result.toString('UTF-8');
                  // String.fromCharCode.apply(null, reader.result)
                  resolve();
                };
              });
            };
            sha256Algo = CryptoJs.algo.SHA256.create();
            binaryData = '';
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
  var _ref3 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee3(images) {
    var attachments, i, current, compressed, result;
    return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee3$(_context3) {
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
          return FileToAttachmentItem(current.type === 'image/gif' ? current : compressed);
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

/***/ }),

/***/ 95267:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LN: function() { return /* binding */ decryptPayloadAES; },
/* harmony export */   O3: function() { return /* binding */ checkImageSize; },
/* harmony export */   _v: function() { return /* binding */ sleep; },
/* harmony export */   lZ: function() { return /* binding */ detectUrl; },
/* harmony export */   mn: function() { return /* binding */ handleSpecial; },
/* harmony export */   wC: function() { return /* binding */ generateAESKey; },
/* harmony export */   wL: function() { return /* binding */ openWindowTarget; },
/* harmony export */   wv: function() { return /* binding */ formatMessage; },
/* harmony export */   yI: function() { return /* binding */ encryptPayloadAES; }
/* harmony export */ });
/* unused harmony export sha256sum */
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25778);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35906);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56283);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45611);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12798);





var ec = new elliptic__WEBPACK_IMPORTED_MODULE_2__.ec("secp256k1");
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
  var intl = (0,umi__WEBPACK_IMPORTED_MODULE_4__.getIntl)((0,umi__WEBPACK_IMPORTED_MODULE_4__.getLocale)());
  return intl.formatMessage({
    id: children,
    defaultMessage: children
  });
};
function checkImageSize(file) {
  if (file.size > 1024 * _config__WEBPACK_IMPORTED_MODULE_3__/* .IMAGESIZE */ .Or) {
    return [false, formatMessage("Image must smaller than 300k!")];
  } else {
    return [true, ""];
  }
}

/***/ }),

/***/ 33401:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 61133:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 11314:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 79391:
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