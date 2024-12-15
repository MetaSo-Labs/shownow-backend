"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[438],{

/***/ 11816:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45611);
/* harmony import */ var _request_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21664);
/* harmony import */ var _ant_design_pro_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47687);
/* harmony import */ var _ant_design_pro_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52608);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81645);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16598);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33737);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77485);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12798);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52676);











var iconStyles = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer'
};
var Page = function Page() {
  var _Modal$useModal = antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.useModal(),
    _Modal$useModal2 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_Modal$useModal, 2),
    modal = _Modal$useModal2[0],
    contextHolder = _Modal$useModal2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('account'),
    _useState2 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
    loginType = _useState2[0],
    setLoginType = _useState2[1];
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.useToken(),
    token = _theme$useToken.token;
  var handleLogin = /*#__PURE__*/function () {
    var _ref = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(values) {
      var ret;
      return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0,_request_dashboard__WEBPACK_IMPORTED_MODULE_3__/* .login */ .x4)(values);
          case 3:
            ret = _context.sent;
            if (ret.access_token) {
              antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.success('Login successful');
              localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_10__/* .DASHBOARD_TOKEN */ .Ou, ret.access_token);
              setTimeout(function () {
                umi__WEBPACK_IMPORTED_MODULE_5__.history.push('/dashboard/styles');
              }, 0);
            }
            _context.next = 11;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.error(_context.t0.response && _context.t0.response.data && _context.t0.response.data.message || _context.t0.message);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function handleLogin(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
    _useState4 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
    admin = _useState4[0],
    setAdmin = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    (0,_request_dashboard__WEBPACK_IMPORTED_MODULE_3__/* .fetchAdmin */ .tv)().then(function (res) {
      setAdmin(res.btcAddress ? true : false);
    });
  }, []);
  var handleLoginWithWallet = /*#__PURE__*/function () {
    var _ref2 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee2() {
      var isConnected, _ret, _yield$window$metaidw, _net, _ret2, _yield$window$metaidw2, network, btcAddress, publicKey, mvcAddress, signature, _admin, confirmed, ret;
      return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return window.metaidwallet.isConnected();
          case 3:
            isConnected = _context2.sent;
            if (!(isConnected.status === "no-wallets")) {
              _context2.next = 6;
              break;
            }
            throw new Error("please init wallet");
          case 6:
            if (!(isConnected.status === "locked")) {
              _context2.next = 8;
              break;
            }
            throw new Error("please unlock your wallet");
          case 8:
            if (!(isConnected.status === "not-connected")) {
              _context2.next = 10;
              break;
            }
            throw new Error("not-connected");
          case 10:
            if (!(isConnected === false)) {
              _context2.next = 16;
              break;
            }
            _context2.next = 13;
            return window.metaidwallet.connect();
          case 13:
            _ret = _context2.sent;
            if (!_ret.status) {
              _context2.next = 16;
              break;
            }
            throw new Error(_ret.status);
          case 16:
            _context2.next = 18;
            return window.metaidwallet.getNetwork();
          case 18:
            _yield$window$metaidw = _context2.sent;
            _net = _yield$window$metaidw.network;
            if (!(_net !== _config__WEBPACK_IMPORTED_MODULE_10__/* .curNetwork */ .eM)) {
              _context2.next = 32;
              break;
            }
            _context2.next = 23;
            return window.metaidwallet.switchNetwork(_config__WEBPACK_IMPORTED_MODULE_10__/* .curNetwork */ .eM === "testnet" ? "testnet" : "livenet");
          case 23:
            _ret2 = _context2.sent;
            if (!(_ret2.status === "canceled")) {
              _context2.next = 26;
              break;
            }
            return _context2.abrupt("return");
          case 26:
            _context2.next = 28;
            return window.metaidwallet.getNetwork();
          case 28:
            _yield$window$metaidw2 = _context2.sent;
            network = _yield$window$metaidw2.network;
            if (!(network !== _config__WEBPACK_IMPORTED_MODULE_10__/* .curNetwork */ .eM)) {
              _context2.next = 32;
              break;
            }
            throw new Error("network error");
          case 32:
            _context2.next = 34;
            return window.metaidwallet.btc.getAddress();
          case 34:
            btcAddress = _context2.sent;
            _context2.next = 37;
            return window.metaidwallet.btc.getPublicKey();
          case 37:
            publicKey = _context2.sent;
            _context2.next = 40;
            return window.metaidwallet.getAddress();
          case 40:
            mvcAddress = _context2.sent;
            _context2.next = 43;
            return window.metaidwallet.btc.signMessage('show.now');
          case 43:
            signature = _context2.sent;
            if (!signature.status) {
              _context2.next = 46;
              break;
            }
            throw new Error(signature.status);
          case 46:
            _context2.next = 48;
            return (0,_request_dashboard__WEBPACK_IMPORTED_MODULE_3__/* .fetchAdmin */ .tv)();
          case 48:
            _admin = _context2.sent;
            if (_admin) {
              _context2.next = 56;
              break;
            }
            _context2.next = 52;
            return modal.confirm({
              title: 'Set this wallet account as the super administrator?',
              content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                column: 1,
                items: [{
                  label: 'BTC Address',
                  children: btcAddress
                }, {
                  label: 'MVC Address',
                  children: mvcAddress
                }]
              })
            });
          case 52:
            confirmed = _context2.sent;
            if (confirmed) {
              _context2.next = 56;
              break;
            }
            antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.error('canceled');
            return _context2.abrupt("return");
          case 56:
            _context2.next = 58;
            return (0,_request_dashboard__WEBPACK_IMPORTED_MODULE_3__/* .loginWithWallet */ .Dk)({
              btcAddress: btcAddress,
              publicKey: publicKey,
              mvcAddress: mvcAddress,
              signature: signature
            });
          case 58:
            ret = _context2.sent;
            if (ret.access_token) {
              antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.success('Login successful');
              localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_10__/* .DASHBOARD_TOKEN */ .Ou, ret.access_token);
              setTimeout(function () {
                umi__WEBPACK_IMPORTED_MODULE_5__.history.push('/dashboard/styles');
              }, 0);
            }
            _context2.next = 66;
            break;
          case 62:
            _context2.prev = 62;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.error(_context2.t0.response && _context2.t0.response.data && _context2.t0.response.data.message || _context2.t0.message);
            // message.error(e.message)
          case 66:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 62]]);
    }));
    return function handleLoginWithWallet() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    style: {
      background: 'linear-gradient(to top, #feada6 0%, #f5efef 100%)',
      height: '100vh'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_12__/* .LoginFormPage */ .B, {
      submitter: {
        searchConfig: {
          submitText: 'Connect'
        }
      }

      // backgroundImageUrl="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/dsm/dsm_banner_bg.png"
      ,
      title: "ShowNOW",
      logo: "data:image/png;base64,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"
      // backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
      ,

      containerStyle: {
        backgroundColor: 'rgba(0, 0, 0,0.65)',
        backdropFilter: 'blur(4px)'
      },
      subTitle: admin ? 'Super Administrator' : 'This is the initialization configuration for the Metaso node. Please set up the super administrator account.',
      onFinish: handleLoginWithWallet,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
    }), contextHolder]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_14__/* .ProConfigProvider */ ._Y, {
    dark: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Page, {})
  });
});

/***/ })

}]);