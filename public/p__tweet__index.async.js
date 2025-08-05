"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1237],{

/***/ 69101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9807);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82296);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99478);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83250);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38021);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81581);
/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52676);







/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var _profileUserData$meta;
  var address = _ref.address;
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

/***/ 26498:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TweetCard: function() { return /* binding */ TweetCard; },
  "default": function() { return /* binding */ tweet; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 2 modules
var Buzz = __webpack_require__(65986);
// EXTERNAL MODULE: ./src/Components/Buzz/BlockedBuzz.tsx
var BlockedBuzz = __webpack_require__(15831);
// EXTERNAL MODULE: ./src/Components/Comment/index.tsx + 3 modules
var Comment = __webpack_require__(79684);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
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
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(81581);
// EXTERNAL MODULE: ./src/Components/UserInfo/PendingUser.tsx
var PendingUser = __webpack_require__(69101);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LinkOutlined.js + 1 modules
var LinkOutlined = __webpack_require__(81707);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MessageOutlined.js + 1 modules
var MessageOutlined = __webpack_require__(16036);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/CommentPanel/index.tsx

















var CommentItem = function CommentItem(_ref) {
  var _item$pinId;
  var item = _ref.item;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    btcConnector = _useModel.btcConnector,
    mvcConnector = _useModel.mvcConnector,
    isLogin = _useModel.isLogin,
    chain = _useModel.chain,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee;
  var _useState = (0,react.useState)(item.likeNum),
    _useState2 = slicedToArray_default()(_useState, 2),
    likeCount = _useState2[0],
    setLikeCount = _useState2[1];
  var _useState3 = (0,react.useState)(item.commentNum),
    _useState4 = slicedToArray_default()(_useState3, 2),
    commentCount = _useState4[0],
    setCommentCount = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    handleLikeLoading = _useState6[0],
    setHandleLikeLoading = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = slicedToArray_default()(_useState7, 2),
    showChildComment = _useState8[0],
    setShowChildComment = _useState8[1];
  var _useState9 = (0,react.useState)([]),
    _useState10 = slicedToArray_default()(_useState9, 2),
    childComment = _useState10[0],
    setChildComment = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = slicedToArray_default()(_useState11, 2),
    showComment = _useState12[0],
    setShowComment = _useState12[1];
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
            pinId = item.pinId;
            setHandleLikeLoading(true);
            _context.prev = 5;
            if (!(chain === "btc")) {
              _context.next = 16;
              break;
            }
            _context.next = 9;
            return btcConnector.use("like");
          case 9:
            likeEntity = _context.sent;
            _context.next = 12;
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
          case 12:
            likeRes = _context.sent;
            if (!(0,isNil/* default */.Z)(likeRes === null || likeRes === void 0 ? void 0 : likeRes.revealTxIds[0])) {
              setLikeCount(likeCount + 1);
              message/* default */.ZP.success("like buzz successfully");
            }
            _context.next = 24;
            break;
          case 16:
            _context.next = 18;
            return mvcConnector.use("like");
          case 18:
            _likeEntity = _context.sent;
            _context.next = 21;
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
          case 21:
            _likeRes = _context.sent;
            console.log("likeRes", _likeRes);
            if (!(0,isNil/* default */.Z)(_likeRes === null || _likeRes === void 0 ? void 0 : _likeRes.txid)) {
              setLikeCount(likeCount + 1);
              message/* default */.ZP.success("like buzz successfully");
            }
          case 24:
            _context.next = 32;
            break;
          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](5);
            console.log("error", _context.t0);
            errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes("Cannot read properties of undefined") ? "User Canceled" : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
          case 32:
            setHandleLikeLoading(false);
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 26]]);
    }));
    return function handleLike() {
      return _ref2.apply(this, arguments);
    };
  }();
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
          children: item.chainName
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
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
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
                  setShowComment(true);
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })),
          children: commentCount
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          loading: handleLikeLoading,
          onClick: handleLike,
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(HeartOutlined/* default */.Z, {}),
          children: likeCount
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(GiftOutlined/* default */.Z, {}),
          disabled: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "item",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "text",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {}),
            disabled: true
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
        style: {
          margin: '8px 0'
        }
      }), commentCount > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [showChildComment && /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
          itemLayout: "horizontal",
          dataSource: childComment !== null && childComment !== void 0 ? childComment : [],
          renderItem: function renderItem(item) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(CommentItem, {
              item: item
            }, item.pinId);
          }
        }), commentCount - childComment.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.ZP, {
          type: "link",
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
            return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })),
          children: ["View all Reply  (", commentCount - childComment.length, ")"]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
          style: {
            margin: '8px 0'
          }
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
    })]
  }, item.pinId);
};
/* harmony default export */ var CommentPanel = (function (_ref5) {
  var tweetId = _ref5.tweetId,
    refetchNum = _ref5.refetchNum,
    commentData = _ref5.commentData;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
      itemLayout: "horizontal",
      dataSource: commentData !== null && commentData !== void 0 ? commentData : [],
      renderItem: function renderItem(item) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(CommentItem, {
          item: item
        }, item.pinId);
      }
    })
  });
});
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__(61606);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/index.js + 4 modules
var es_alert = __webpack_require__(81751);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
;// CONCATENATED MODULE: ./src/pages/tweet/index.tsx



















var TweetCard = function TweetCard(_ref) {
  var quotePinId = _ref.quotePinId,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {
      return history.back();
    } : _ref$onClose;
  var _useIntl = (0,_umi_production_exports.useIntl)(),
    formatMessage = _useIntl.formatMessage;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    checkUserSetting = _useModel.checkUserSetting,
    isLogin = _useModel.isLogin;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf;
  var _useState = (0,react.useState)(0),
    _useState2 = slicedToArray_default()(_useState, 2),
    refetchNum = _useState2[0],
    setRefetchNum = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    reLoading = _useState4[0],
    setReLoading = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    showComment = _useState6[0],
    setShowComment = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = slicedToArray_default()(_useState7, 2),
    commentData = _useState8[0],
    setCommentData = _useState8[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(quotePinId),
      queryKey: ['buzzDetail', quotePinId, user.address],
      queryFn: function queryFn() {
        return (0,api/* fetchBuzzDetail */.uq)({
          pinId: quotePinId
        });
      }
    }),
    isQuoteLoading = _useQuery.isLoading,
    buzzDetail = _useQuery.data,
    refetch = _useQuery.refetch;
  (0,react.useEffect)(function () {
    var _buzzDetail$data;
    if (buzzDetail !== null && buzzDetail !== void 0 && (_buzzDetail$data = buzzDetail.data) !== null && _buzzDetail$data !== void 0 && _buzzDetail$data.tweet) {
      setCommentData(buzzDetail.data.comments || []);
    }
  }, [buzzDetail]);
  if (!buzzDetail) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
    loading: isQuoteLoading,
    bordered: false,
    style: {
      boxShadow: 'none',
      paddingBottom: 100
    },
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: (showConf === null || showConf === void 0 ? void 0 : showConf.showSliderMenu) && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "text",
        size: "small",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LeftOutlined/* default */.Z, {}),
        onClick: onClose
      })
    }),
    styles: {
      header: {
        borderBottom: 'none',
        minHeight: 30,
        padding: '12px 20px'
      },
      body: {}
    },
    children: !buzzDetail.data ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
      message: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "Data Retrieval Error"
      }),
      showIcon: true,
      description: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "The data might not be synchronized on this node yet."
      }),
      type: "error"
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: buzzDetail.data.blocked && buzzDetail.data.tweet.createMetaId !== user.metaid ? /*#__PURE__*/(0,jsx_runtime.jsx)(BlockedBuzz/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
          buzzItem: objectSpread2_default()(objectSpread2_default()({}, buzzDetail.data.tweet), {}, {
            blocked: buzzDetail.data.blocked
          }),
          showActions: true,
          padding: 0,
          reLoading: reLoading,
          refetch: refetch,
          like: buzzDetail.data.like,
          donate: buzzDetail.data.donates
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
            src: user === null || user === void 0 ? void 0 : user.avater,
            size: 48
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
            value: '',
            placeholder: formatMessage({
              id: "What's happening?"
            }),
            variant: "borderless",
            style: {
              flexGrow: 1
            },
            onClick: function onClick() {
              if (!isLogin) {
                message/* default */.ZP.error(formatMessage({
                  id: 'Please connect your wallet first'
                }));
                return;
              }
              var isPass = checkUserSetting();
              if (!isPass) {
                return;
              }
              setShowComment(true);
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            shape: "round",
            onClick: function onClick() {
              if (!isLogin) {
                message/* default */.ZP.error(formatMessage({
                  id: 'Please connect your wallet first'
                }));
                return;
              }
              var isPass = checkUserSetting();
              if (!isPass) {
                return;
              }
              setShowComment(true);
            },
            children: formatMessage({
              id: "Comment"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Comment/* default */.Z, {
          tweetId: quotePinId !== null && quotePinId !== void 0 ? quotePinId : '',
          onClose: function onClose(mockComment) {
            setShowComment(false);
            if (mockComment) {
              setCommentData([].concat(toConsumableArray_default()(commentData), [mockComment]));
            }
          },
          show: showComment
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(CommentPanel, {
          tweetId: quotePinId !== null && quotePinId !== void 0 ? quotePinId : '',
          refetchNum: refetchNum,
          commentData: commentData
        })]
      })
    })
  });
};
/* harmony default export */ var tweet = (function () {
  var match = (0,_umi_production_exports.useMatch)('/buzz/:id');
  var match2 = (0,_umi_production_exports.useMatch)('/tweet/:id');
  var quotePinId = (match === null || match === void 0 ? void 0 : match.params.id) || (match2 === null || match2 === void 0 ? void 0 : match2.params.id);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TweetCard, {
    quotePinId: quotePinId
  });
});

/***/ })

}]);