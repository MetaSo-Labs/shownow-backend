(self["webpackChunk"] = self["webpackChunk"] || []).push([[5365],{

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
              _context.next = 28;
              break;
            case 14:
              _context.next = 16;
              return mvcConnector.load(getFollowEntitySchemaWithCustomHost((showConf === null || showConf === void 0 ? void 0 : showConf.host) || ''));
            case 16:
              Follow = _context.sent;
              console.log('Follow', config/* curNetwork */.eM);
              _context.next = 20;
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
            case 20:
              res = _context.sent;
              console.log('create res for inscribe', res);
              if ((0,isNil/* default */.Z)(res === null || res === void 0 ? void 0 : res.txid)) {
                _context.next = 28;
                break;
              }
              _context.next = 25;
              return (0,utils/* sleep */._v)(5000);
            case 25:
              _context.next = 27;
              return fetchUserFollowingList();
            case 27:
              message/* default */.ZP.success('Follow successfully! Please wait for the transaction to be confirmed!');
            case 28:
              _context.next = 36;
              break;
            case 30:
              _context.prev = 30;
              _context.t0 = _context["catch"](1);
              console.log('error', _context.t0);
              errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
              toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
              message/* default */.ZP.error(toastMessage);
            case 36:
              setLoading(false);
            case 37:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 30]]);
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
    loading: loading || mempool,
    shape: "round",
    size: size,
    children: isFollowing ? 'Unfollow' : 'Follow'
  });
};
var FollowIconComponent = withFollow(FollowIcon);
var FollowButtonComponent = withFollow(FollowButtonIcon);


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
      maxWidth: size,
      border: "1px solid rgba(0, 0, 0, 0.06)"
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

/***/ 3662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72948);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77682);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61966);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14225);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48020);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12798);
/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49405);
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

/***/ 42448:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ followInfo; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tabs/index.js + 5 modules
var tabs = __webpack_require__(82257);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(12798);
// EXTERNAL MODULE: ./src/Components/Follow/index.tsx + 1 modules
var Follow = __webpack_require__(15250);
// EXTERNAL MODULE: ./src/Components/UserInfo/PendingUser.tsx
var PendingUser = __webpack_require__(3662);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(72948);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.59.16_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(77682);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(26061);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 3 modules
var list = __webpack_require__(22200);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/followInfo/followPanel.tsx








/* harmony default export */ var followPanel = (function (_ref) {
  var _data$list;
  var metaid = _ref.metaid,
    type = _ref.type;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: [type, metaid],
      enabled: !(0,isEmpty/* default */.Z)(metaid),
      queryFn: function queryFn() {
        return type === 'follower' ? (0,api/* fetchFollowerList */.CQ)({
          metaid: metaid,
          params: {
            cursor: '0',
            size: '100',
            followDetail: true
          }
        }) : (0,api/* fetchFollowingList */.vZ)({
          metaid: metaid,
          params: {
            cursor: '0',
            size: '100',
            followDetail: true
          }
        });
      }
    }),
    data = _useQuery.data;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
      itemLayout: "horizontal",
      dataSource: (_data$list = data === null || data === void 0 ? void 0 : data.list) !== null && _data$list !== void 0 ? _data$list : [],
      renderItem: function renderItem(item, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(list/* default */.Z.Item, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
            address: item.address
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Follow/* FollowButtonComponent */.I, {
            metaid: (item === null || item === void 0 ? void 0 : item.metaid) || '',
            size: "small"
          })]
        });
      }
    })
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/pages/followInfo/index.tsx





/* harmony default export */ var followInfo = (function () {
  var match = (0,_umi_production_exports.useMatch)('/follow/:metaid');
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user;
  var metaid = (0,react.useMemo)(function () {
    if (!match || !match.params.metaid) {
      return (user === null || user === void 0 ? void 0 : user.metaid) || '';
    } else {
      return match.params.metaid;
    }
  }, [match, user]);
  var onChange = function onChange(key) {
    console.log(key);
  };
  var items = [{
    key: 'following',
    label: 'Following',
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(followPanel, {
      metaid: metaid,
      type: "following"
    })
  }, {
    key: 'followers',
    label: 'Followers',
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(followPanel, {
      metaid: metaid,
      type: "follower"
    })
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z, {
    defaultActiveKey: "following",
    items: items,
    onChange: onChange
  });
});

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
/* harmony export */   uY: function() { return /* binding */ determineAddressInfo; },
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
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12798);




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
  var intl = (0,umi__WEBPACK_IMPORTED_MODULE_3__.getIntl)((0,umi__WEBPACK_IMPORTED_MODULE_3__.getLocale)());
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