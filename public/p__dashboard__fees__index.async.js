"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5724,1579],{

/***/ 93769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ fees; }
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
// EXTERNAL MODULE: ./src/request/dashboard.ts
var dashboard = __webpack_require__(21664);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18_v3wfupshtys2iy7kbdcdfkvksq/node_modules/@ant-design/pro-form/es/layouts/ProForm/index.js + 20 modules
var ProForm = __webpack_require__(55013);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-card@2.9.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18._4z7bzqawqzoenzh4tblcdyicca/node_modules/@ant-design/pro-card/es/ProCard.js + 9 modules
var ProCard = __webpack_require__(59135);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18_v3wfupshtys2iy7kbdcdfkvksq/node_modules/@ant-design/pro-form/es/components/Text/index.js
var Text = __webpack_require__(82952);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(80189);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(93556);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18_v3wfupshtys2iy7kbdcdfkvksq/node_modules/@ant-design/pro-form/es/components/Field/index.js + 148 modules
var Field = __webpack_require__(56162);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18_v3wfupshtys2iy7kbdcdfkvksq/node_modules/@ant-design/pro-form/es/components/Digit/index.js


var _excluded = ["fieldProps", "min", "proFieldProps", "max"];



/**
 * 数组选择组件
 *
 * @param
 */
var ProFormDigit = function ProFormDigit(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    min = _ref.min,
    proFieldProps = _ref.proFieldProps,
    max = _ref.max,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, (0,objectSpread2/* default */.Z)({
    valueType: "digit",
    fieldProps: (0,objectSpread2/* default */.Z)({
      min: min,
      max: max
    }, fieldProps),
    ref: ref,
    filedConfig: {
      defaultProps: {
        width: '100%'
      }
    },
    proFieldProps: proFieldProps
  }, rest));
};
var ForwardRefProFormDigit = /*#__PURE__*/react.forwardRef(ProFormDigit);
/* harmony default export */ var Digit = (ForwardRefProFormDigit);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(16598);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(57227);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(71340);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(54152);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(12798);
// EXTERNAL MODULE: ./src/pages/dashboard/index.less
var pages_dashboard = __webpack_require__(60400);
// EXTERNAL MODULE: ./src/pages/dashboard/rpc/index.tsx
var rpc = __webpack_require__(83394);
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/index.tsx












/* harmony default export */ var fees = (function () {
  var _useState = (0,react.useState)('1'),
    _useState2 = slicedToArray_default()(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    fees = _useModel.fees,
    updateFees = _useModel.updateFees;
  var _useState3 = (0,react.useState)('BTC'),
    _useState4 = slicedToArray_default()(_useState3, 2),
    tab = _useState4[0],
    setTab = _useState4[1];
  var _ProForm$useForm = ProForm/* ProForm */.A.useForm(),
    _ProForm$useForm2 = slicedToArray_default()(_ProForm$useForm, 1),
    form = _ProForm$useForm2[0];
  var _onFinish = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(chain, values) {
      var _fee;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _fee = fees.find(function (item) {
              return item.chain === chain;
            });
            if (_fee) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            _context.next = 5;
            return (0,dashboard/* saveFees */.l6)(_fee.id, values);
          case 5:
            _context.next = 7;
            return updateFees();
          case 7:
            message/* default */.ZP.success('Save successfully');
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onFinish(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    updateFees();
  }, [updateFees]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.Z, {
    split: "vertical",
    style: {
      // background: 'rgba(255,255,255,0)',
    },
    bodyStyle: {
      background: 'rgba(255,255,255,0)'
    },
    tabs: {
      activeKey: activeKey,
      items: [{
        key: '1',
        label: 'Fee',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.Z, {
          split: "vertical",
          style: {
            background: 'rgba(255,255,255,0)'
          },
          tabs: {
            type: 'card',
            activeKey: tab,
            items: [{
              label: "BTC",
              key: 'BTC',
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ProForm/* ProForm */.A, {
                style: {
                  padding: 24
                },
                layout: "horizontal",
                labelCol: {
                  span: 6
                },
                wrapperCol: {
                  span: 18
                },
                submitter: {
                  searchConfig: {
                    submitText: 'Save',
                    resetText: 'Reset'
                  },
                  render: function render(props, doms) {
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                        span: 14,
                        offset: 4,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
                          children: doms
                        })
                      })
                    });
                  }
                },
                onFinish: function onFinish(values) {
                  return _onFinish('BTC', values);
                },
                initialValues: fees.find(function (item) {
                  return item.chain === 'BTC';
                }),
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
                  width: "md",
                  name: "service_fee_address",
                  label: "Service Fee Address",
                  placeholder: "Enter the address to receive service fees"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "follow_service_fee_amount",
                  label: "Follow Service Fee Amount",
                  placeholder: "Enter the fee amount for follow actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "post_service_fee_amount",
                  label: "Post Service Fee Amount",
                  placeholder: "Enter the fee amount for post actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "comment_service_fee_amount",
                  label: "Comment Service Fee Amount",
                  placeholder: "Enter the fee amount for comment actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "like_service_fee_amount",
                  label: "Like Service Fee Amount",
                  placeholder: "Enter the fee amount for like actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                })]
              })
            }, {
              label: "MVC",
              key: 'MVC',
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ProForm/* ProForm */.A, {
                style: {
                  padding: 24
                },
                layout: "horizontal",
                labelCol: {
                  span: 6
                },
                wrapperCol: {
                  span: 18
                },
                submitter: {
                  searchConfig: {
                    submitText: 'Save',
                    resetText: 'Reset'
                  },
                  render: function render(props, doms) {
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                        span: 14,
                        offset: 4,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
                          children: doms
                        })
                      })
                    });
                  }
                },
                onFinish: function onFinish(values) {
                  return _onFinish('MVC', values);
                },
                initialValues: fees.find(function (item) {
                  return item.chain === 'MVC';
                }),
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
                  width: "md",
                  name: "service_fee_address",
                  label: "Service Fee Address",
                  placeholder: "Enter the address to receive service fees"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "follow_service_fee_amount",
                  label: "Follow Service Fee Amount",
                  placeholder: "Enter the fee amount for follow actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "post_service_fee_amount",
                  label: "Post Service Fee Amount",
                  placeholder: "Enter the fee amount for post actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "comment_service_fee_amount",
                  label: "Comment Service Fee Amount",
                  placeholder: "Enter the fee amount for comment actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "like_service_fee_amount",
                  label: "Like Service Fee Amount",
                  placeholder: "Enter the fee amount for like actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                })]
              })
            }],
            onChange: function onChange(key) {
              setTab(key);
            }
          }
        })
      }, {
        key: '2',
        label: 'RPC',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(rpc["default"], {})
      }],
      onChange: function onChange(key) {
        setActiveKey(key);
      }
    }
  });
});

/***/ }),

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