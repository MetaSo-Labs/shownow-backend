"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1579],{

/***/ 83394:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_pro_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59135);
/* harmony import */ var _ant_design_pro_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55013);
/* harmony import */ var _ant_design_pro_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82952);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57227);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71340);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54152);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16598);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77485);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60400);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52676);








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var getConfig = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee() {
    var res, data, _formRef$current, _formRef$current2;
    return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('/metaso/api/config/get');
        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();
        case 5:
          data = _context.sent;
          if (data.data) {
            (_formRef$current = formRef.current) === null || _formRef$current === void 0 || _formRef$current.setFieldsValue(data.data);
          } else {
            (_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 || _formRef$current2.setFieldsValue(data);
          }
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    getConfig();
  }, [getConfig]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    split: "vertical",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_6__/* .ProForm */ .A, {
      style: {
        padding: 24
      },
      layout: "horizontal",
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 14
      },
      formRef: formRef,
      submitter: {
        searchConfig: {
          submitText: 'Save',
          resetText: 'Reset'
        },
        render: function render(props, doms) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              span: 14,
              offset: 4,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: doms
              })
            })
          });
        }
      },
      onFinish: ( /*#__PURE__*/function () {
        var _ref2 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee2(values) {
          var res, data;
          return _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch('/metaso/api/config/set', {
                  method: 'POST',
                  body: JSON.stringify(values)
                });
              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return res.json();
              case 5:
                data = _context2.sent;
                if (data.code === 1) {
                  antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP.success('Save successfully');
                }
                if (data.code === -1) {
                  antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP.error(data.msg || 'Save failed');
                }
              case 8:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        orientation: "left",
        children: "BTC RPC Config"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        width: "md",
        name: "btc_rpc_host",
        label: "BTC RPC Host",
        placeholder: "Example: 127.0.0.1:8332"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        width: "md",
        name: "btc_rpc_user",
        label: "BTC RPC Username",
        placeholder: "Enter the username for accessing BTC RPC"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        width: "md",
        name: "btc_rpc_pass",
        label: "BTC RPC Password",
        placeholder: "Enter the password for accessing BTC RPC"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        width: "md",
        name: "btc_rpc_rawtx",
        label: "BTC ZMQ Raw Transaction URL",
        placeholder: "Example: tcp://127.0.0.1:18332"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        orientation: "left",
        children: "MVC RPC Config"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        width: "md",
        name: "mvc_rpc_host",
        label: "MVC RPC Host",
        placeholder: "Example: 127.0.0.1:8332"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        width: "md",
        name: "mvc_rpc_user",
        label: "MVC RPC Username",
        placeholder: "Enter the username for accessing MVC RPC"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        width: "md",
        name: "mvc_rpc_pass",
        label: "MVC RPC Password",
        placeholder: "Enter the password for accessing MVC RPC"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ant_design_pro_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        width: "md",
        name: "mvc_rpc_rawtx",
        label: "MVC ZMQ Raw Transaction URL",
        placeholder: "Example: tcp://127.0.0.1:18332"
      })]
    })
  });
});

/***/ }),

/***/ 60400:
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ })

}]);