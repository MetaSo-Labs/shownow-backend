"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1237],{

/***/ 69101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9807);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82296);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99478);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83250);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38021);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93603);
/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29333);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52676);









/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var _profileUserData$meta;
  var address = _ref.address,
    isOwner = _ref.isOwner;
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
      })]
    })]
  });
});

/***/ }),

/***/ 61387:
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
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 3 modules
var Buzz = __webpack_require__(3517);
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
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
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
              bordered: false,
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
;// CONCATENATED MODULE: ./src/Components/CommentPanel/index.tsx



















var CommentItem = function CommentItem(_ref) {
  var _item$likeAddress, _item$pinId;
  var item = _ref.item,
    level = _ref.level;
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
          children: forwardCount
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
              item: item,
              level: level + 1
            }, item.pinId);
          }
        }), commentCount - childComment.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.ZP, {
          type: "link",
          onClick: loadChildComment,
          loading: loading,
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
    })]
  }, item.pinId);
};
/* harmony default export */ var CommentPanel = (function (_ref5) {
  var commentData = _ref5.commentData;
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
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__(61606);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/index.js + 4 modules
var es_alert = __webpack_require__(81751);
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