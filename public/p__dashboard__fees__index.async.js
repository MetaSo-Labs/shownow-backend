"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5724],{

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
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/index.tsx











/* harmony default export */ var fees = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    fees = _useModel.fees,
    updateFees = _useModel.updateFees;
  var _useState = (0,react.useState)('BTC'),
    _useState2 = slicedToArray_default()(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
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
    tabs: {
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
  });
});

/***/ }),

/***/ 60400:
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ })

}]);