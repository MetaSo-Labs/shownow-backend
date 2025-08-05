"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5724],{

/***/ 99203:
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
var dashboard = __webpack_require__(57484);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__re_5e5b823f35bece319acd3a74a9338ac0/node_modules/@ant-design/pro-form/es/layouts/ProForm/index.js + 2 modules
var ProForm = __webpack_require__(69870);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-card@2.9.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__rea_f4e60f3c486a6622574dc02792972163/node_modules/@ant-design/pro-card/es/ProCard.js + 7 modules
var ProCard = __webpack_require__(27840);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var esm_slicedToArray = __webpack_require__(75611);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(99426);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(99960);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(93954);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/index.js + 21 modules
var es_form = __webpack_require__(49267);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/popover/index.js
var popover = __webpack_require__(78194);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(18051);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__re_5e5b823f35bece319acd3a74a9338ac0/node_modules/@ant-design/pro-form/es/components/Field/index.js + 79 modules
var Field = __webpack_require__(45841);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__re_5e5b823f35bece319acd3a74a9338ac0/node_modules/@ant-design/pro-form/es/components/Text/index.js



var _excluded = ["fieldProps", "proFieldProps"],
  _excluded2 = ["fieldProps", "proFieldProps"];







var valueType = 'text';
/**
 * 文本组件
 *
 * @param
 */
var ProFormText = function ProFormText(_ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, (0,objectSpread2/* default */.Z)({
    valueType: valueType,
    fieldProps: fieldProps,
    filedConfig: {
      valueType: valueType
    },
    proFieldProps: proFieldProps
  }, rest));
};
var PassWordStrength = function PassWordStrength(props) {
  var _useMountMergeState = (0,useMergedState/* default */.Z)(props.open || false, {
      value: props.open,
      onChange: props.onOpenChange
    }),
    _useMountMergeState2 = (0,esm_slicedToArray/* default */.Z)(_useMountMergeState, 2),
    open = _useMountMergeState2[0],
    setOpen = _useMountMergeState2[1];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
    shouldUpdate: true,
    noStyle: true,
    children: function children(form) {
      var _props$statusRender;
      var value = form.getFieldValue(props.name || []);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        getPopupContainer: function getPopupContainer(node) {
          if (node && node.parentNode) {
            return node.parentNode;
          }
          return node;
        },
        onOpenChange: function onOpenChange(e) {
          return setOpen(e);
        },
        content: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            padding: '4px 0'
          },
          children: [(_props$statusRender = props.statusRender) === null || _props$statusRender === void 0 ? void 0 : _props$statusRender.call(props, value), props.strengthText ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              marginTop: 10
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: props.strengthText
            })
          }) : null]
        }),
        overlayStyle: {
          width: 240
        },
        placement: "rightTop"
      }, props.popoverProps), {}, {
        open: open,
        children: props.children
      }));
    }
  });
};
var Password = function Password(_ref2) {
  var fieldProps = _ref2.fieldProps,
    proFieldProps = _ref2.proFieldProps,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded2);
  var _useState = (0,react.useState)(false),
    _useState2 = (0,esm_slicedToArray/* default */.Z)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  if (fieldProps !== null && fieldProps !== void 0 && fieldProps.statusRender && rest.name) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(PassWordStrength, {
      name: rest.name,
      statusRender: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.statusRender,
      popoverProps: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.popoverProps,
      strengthText: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.strengthText,
      open: open,
      onOpenChange: setOpen,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, (0,objectSpread2/* default */.Z)({
          valueType: "password",
          fieldProps: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,omit/* default */.Z)(fieldProps, ['statusRender', 'popoverProps', 'strengthText'])), {}, {
            onBlur: function onBlur(e) {
              var _fieldProps$onBlur;
              fieldProps === null || fieldProps === void 0 || (_fieldProps$onBlur = fieldProps.onBlur) === null || _fieldProps$onBlur === void 0 || _fieldProps$onBlur.call(fieldProps, e);
              setOpen(false);
            },
            onClick: function onClick(e) {
              var _fieldProps$onClick;
              fieldProps === null || fieldProps === void 0 || (_fieldProps$onClick = fieldProps.onClick) === null || _fieldProps$onClick === void 0 || _fieldProps$onClick.call(fieldProps, e);
              setOpen(true);
            }
          }),
          proFieldProps: proFieldProps,
          filedConfig: {
            valueType: valueType
          }
        }, rest))
      })
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, (0,objectSpread2/* default */.Z)({
    valueType: "password",
    fieldProps: fieldProps,
    proFieldProps: proFieldProps,
    filedConfig: {
      valueType: valueType
    }
  }, rest));
};
var WrappedProFormText = ProFormText;
WrappedProFormText.Password = Password;

// @ts-ignore
// eslint-disable-next-line no-param-reassign
WrappedProFormText.displayName = 'ProFormComponent';
/* harmony default export */ var Text = (WrappedProFormText);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__re_5e5b823f35bece319acd3a74a9338ac0/node_modules/@ant-design/pro-form/es/components/Digit/index.js


var Digit_excluded = ["fieldProps", "min", "proFieldProps", "max"];



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
    rest = (0,objectWithoutProperties/* default */.Z)(_ref, Digit_excluded);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(86821);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(62319);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(81581);
;// CONCATENATED MODULE: ./src/pages/dashboard/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
;// CONCATENATED MODULE: ./src/pages/dashboard/rpc/index.tsx








/* harmony default export */ var rpc = (function () {
  var formRef = (0,react.useRef)();
  var getConfig = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    var res, data, _formRef$current, _formRef$current2;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
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
  (0,react.useEffect)(function () {
    getConfig();
  }, [getConfig]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.Z, {
    split: "vertical",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ProForm/* ProForm */.A, {
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
      onFinish: ( /*#__PURE__*/function () {
        var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(values) {
          var res, data;
          return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
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
                  message/* default */.ZP.success('Save successfully');
                }
                if (data.code === -1) {
                  message/* default */.ZP.error(data.msg || 'Save failed');
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
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
        orientation: "left",
        children: "BTC RPC Config"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
        width: "md",
        name: "btc_rpc_host",
        label: "BTC RPC Host",
        placeholder: "Example: 127.0.0.1:8332"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
        width: "md",
        name: "btc_rpc_user",
        label: "BTC RPC Username",
        placeholder: "Enter the username for accessing BTC RPC"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
        width: "md",
        name: "btc_rpc_pass",
        label: "BTC RPC Password",
        placeholder: "Enter the password for accessing BTC RPC"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
        width: "md",
        name: "btc_rpc_rawtx",
        label: "BTC ZMQ Raw Transaction URL",
        placeholder: "Example: tcp://127.0.0.1:18332"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
        orientation: "left",
        children: "MVC RPC Config"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
        width: "md",
        name: "mvc_rpc_host",
        label: "MVC RPC Host",
        placeholder: "Example: 127.0.0.1:8332"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
        width: "md",
        name: "mvc_rpc_user",
        label: "MVC RPC Username",
        placeholder: "Enter the username for accessing MVC RPC"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
        width: "md",
        name: "mvc_rpc_pass",
        label: "MVC RPC Password",
        placeholder: "Enter the password for accessing MVC RPC"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
        width: "md",
        name: "mvc_rpc_rawtx",
        label: "MVC ZMQ Raw Transaction URL",
        placeholder: "Example: tcp://127.0.0.1:18332"
      })]
    })
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 17 modules
var typography = __webpack_require__(38021);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(30430);
// EXTERNAL MODULE: ./src/request/api.ts
var request_api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-table@3.19.0_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__r_1541205ebc1c64f8977e2096258af3d1/node_modules/@ant-design/pro-table/es/Table.js + 97 modules
var Table = __webpack_require__(60666);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/popconfirm/index.js + 2 modules
var popconfirm = __webpack_require__(42176);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__re_5e5b823f35bece319acd3a74a9338ac0/node_modules/@ant-design/pro-form/es/layouts/ModalForm/index.js
var ModalForm = __webpack_require__(84666);
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/blockModal.tsx







var waitTime = function waitTime() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(true);
    }, time);
  });
};
/* harmony default export */ var blockModal = (function (_ref) {
  var type = _ref.type,
    actionRef = _ref.actionRef;
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ModalForm/* ModalForm */.Y, {
    title: "Add to the Block List",
    trigger: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
      type: "primary",
      children: "Add"
    }),
    form: form,
    autoFocusFirstInput: true,
    modalProps: {
      destroyOnClose: true,
      onCancel: function onCancel() {
        return console.log('run');
      }
    },
    width: 500,
    submitTimeout: 2000,
    onFinish: ( /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(values) {
        var _actionRef$current;
        var ret;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,request_api/* addBlockedItem */.tB)({
                blockType: type,
                blockContent: values.blockContent
              });
            case 2:
              ret = _context.sent;
              if (!(ret.code !== 1)) {
                _context.next = 6;
                break;
              }
              message/* default */.ZP.error(ret.message);
              return _context.abrupt("return", false);
            case 6:
              (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 || _actionRef$current.reload();
              message/* default */.ZP.success('Add successfully, Changes will take effect in 2 minutes.');
              return _context.abrupt("return", true);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
      name: "blockContent",
      label: type.toUpperCase()
    })
  });
});
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(16483);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/relativeTime.js
var relativeTime = __webpack_require__(97148);
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime);
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/blockTable.tsx











dayjs_min_default().extend((relativeTime_default()));
dayjs_min_default().locale('en');
/* harmony default export */ var blockTable = (function (_ref) {
  var type = _ref.type;
  var actionRef = (0,react.useRef)();
  var columns = [{
    title: 'Content',
    dataIndex: type === 'host' ? 'originalContent' : 'blockedContent',
    copyable: true,
    ellipsis: true
  }, {
    title: 'Time',
    dataIndex: 'timestamp',
    render: function render(text) {
      return text ? dayjs_min_default()(text * 1000).format('YYYY-MM-DD HH:mm:ss') : '--';
    }
  }, {
    title: 'Operation',
    key: 'option',
    width: 120,
    valueType: 'option',
    render: function render(_, record) {
      return [/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
        title: "Delete the item",
        description: "Are you sure to delete this item?",
        onConfirm: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
          var _actionRef$current;
          var ret;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,request_api/* deleteBlockedItem */.o5)({
                  blockType: type,
                  blockContent: record.blockedContent
                });
              case 2:
                ret = _context.sent;
                if (!(ret.code !== 1)) {
                  _context.next = 6;
                  break;
                }
                message/* default */.ZP.error(ret.message);
                return _context.abrupt("return", false);
              case 6:
                (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 || _actionRef$current.reload();
                message/* default */.ZP.success('Delete successfully, Changes will take effect in 2 minutes.');
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })),
        okText: "Yes",
        cancelText: "No",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          danger: true,
          type: "link",
          size: "small",
          children: "Delete"
        })
      })];
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "block-table",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Table/* default */.Z, {
      columns: columns,
      actionRef: actionRef,
      request: ( /*#__PURE__*/function () {
        var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(params, sorter, filter) {
          var ret;
          return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0,request_api/* getBlockedList */.O7)({
                  blockType: type,
                  cursor: (params.current ? params.current - 1 : 0) * (params.pageSize || 10),
                  size: params.pageSize || 10
                });
              case 2:
                ret = _context2.sent;
                return _context2.abrupt("return", {
                  data: ret.data.list || [],
                  success: true,
                  total: ret.data.total || 0
                });
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x, _x2, _x3) {
          return _ref3.apply(this, arguments);
        };
      }()),
      toolbar: {
        actions: [/*#__PURE__*/(0,jsx_runtime.jsx)(blockModal, {
          type: type,
          actionRef: actionRef
        })]
      },
      rowKey: "blockedContent",
      search: false
    })
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/QuestionCircleOutlined.js + 1 modules
var QuestionCircleOutlined = __webpack_require__(94068);
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/blockList.tsx








/* harmony default export */ var blockList = (function () {
  var _useState = (0,react.useState)('host'),
    _useState2 = slicedToArray_default()(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      style: {
        marginBlockEnd: 16
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
        style: {
          margin: 0
        },
        level: 4,
        children: "Block List Management Center"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
        title: "Changes will take effect in 2 minutes.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(QuestionCircleOutlined/* default */.Z, {
          size: 30
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.Z, {
      bodyStyle: {
        padding: 0
      },
      tabs: {
        activeKey: tab,
        items: [{
          label: "Host",
          key: 'host',
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(blockTable, {
            type: "host"
          })
        }, {
          label: "MetaID",
          key: 'metaid',
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(blockTable, {
            type: "metaid"
          })
        }, {
          label: "Pin",
          key: 'pin',
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(blockTable, {
            type: "pinid"
          })
        }],
        onChange: function onChange(key) {
          setTab(key);
        }
      }
    })]
  });
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__re_5e5b823f35bece319acd3a74a9338ac0/node_modules/@ant-design/pro-form/es/components/TextArea/index.js


var TextArea_excluded = ["fieldProps", "proFieldProps"];



/**
 * 文本选择组件
 *
 * @param
 */

var ProFormTextArea = function ProFormTextArea(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref, TextArea_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, (0,objectSpread2/* default */.Z)({
    ref: ref,
    valueType: "textarea",
    fieldProps: fieldProps,
    proFieldProps: proFieldProps
  }, rest));
};
/* harmony default export */ var TextArea = (/*#__PURE__*/react.forwardRef(ProFormTextArea));
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/introduction.tsx







/* harmony default export */ var introduction = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    fees = _useModel.fees,
    updateFees = _useModel.updateFees,
    admin = _useModel.admin,
    setLogined = _useModel.setLogined;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.Z, {
    ghost: true,
    gutter: 8,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ProForm/* ProForm */.A, {
      onFinish: ( /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(values) {
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0,dashboard/* saveIntro */.sw)(values);
              case 3:
                _context.next = 5;
                return updateFees();
              case 5:
                message/* default */.ZP.success('Save successfully');
                _context.next = 16;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                if (!(_context.t0.response && _context.t0.response.status === 401)) {
                  _context.next = 14;
                  break;
                }
                message/* default */.ZP.error('Unauthorized');
                setLogined(false);
                return _context.abrupt("return");
              case 14:
                console.log(_context.t0);
                message/* default */.ZP.error(_context.t0.message);
              case 16:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 8]]);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()),
      submitter: {
        searchConfig: {
          submitText: 'Save',
          resetText: 'Reset'
        }
      },
      initialValues: admin,
      autoFocusFirstInput: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TextArea, {
        width: "lg",
        name: "introduction",
        label: "Introduction",
        placeholder: "Please enter the introduction ",
        fieldProps: {
          style: {
            height: 300
          },
          allowClear: true,
          maxLength: 500,
          showCount: true
        },
        rules: [{
          max: 500,
          message: 'The maximum length is 500 characters'
        }, {
          required: true,
          message: 'Please enter the introduction'
        }]
      })
    })
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var helpers_objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(helpers_objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(335);
var createForOfIteratorHelper_default = /*#__PURE__*/__webpack_require__.n(createForOfIteratorHelper);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/index.js + 8 modules
var notification = __webpack_require__(28169);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var es_modal = __webpack_require__(90789);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/index.js + 8 modules
var descriptions = __webpack_require__(97116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/select/index.js
var es_select = __webpack_require__(23533);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/avatar/index.js + 4 modules
var avatar = __webpack_require__(83734);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(79063);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input-number/index.js + 2 modules
var input_number = __webpack_require__(18105);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(10443);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/index.js + 33 modules
var table = __webpack_require__(98421);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/slider/index.js + 3 modules
var slider = __webpack_require__(33936);
// EXTERNAL MODULE: ./src/assets/btc.png
var btc = __webpack_require__(33401);
// EXTERNAL MODULE: ./node_modules/.pnpm/decimal.js@10.5.0/node_modules/decimal.js/decimal.mjs
var decimal = __webpack_require__(25688);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./src/assets/rank/1.svg
var _1 = __webpack_require__(37251);
// EXTERNAL MODULE: ./src/assets/rank/2.svg
var _2 = __webpack_require__(15366);
// EXTERNAL MODULE: ./src/assets/rank/3.svg
var _3 = __webpack_require__(91332);
// EXTERNAL MODULE: ./src/Components/UserInfo/PendingUser.tsx
var PendingUser = __webpack_require__(69101);
// EXTERNAL MODULE: ./src/Components/NumberFormat/index.tsx
var NumberFormat = __webpack_require__(38161);
// EXTERNAL MODULE: ./src/utils/psbtBuild.ts
var psbtBuild = __webpack_require__(49105);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(31759);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);
// EXTERNAL MODULE: ./node_modules/.pnpm/bitcoinjs-lib@7.0.0-rc.0_typescript@5.8.3/node_modules/bitcoinjs-lib/src/esm/index.js + 32 modules
var esm = __webpack_require__(10642);
// EXTERNAL MODULE: ./node_modules/.pnpm/@bitcoin-js+tiny-secp256k1-asmjs@2.2.3/node_modules/@bitcoin-js/tiny-secp256k1-asmjs/lib/index.js + 6 modules
var lib = __webpack_require__(48507);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./src/utils/metaso.ts
var metaso = __webpack_require__(48606);
;// CONCATENATED MODULE: ./src/utils/mrc20.ts
/* provided dependency */ var Buffer = __webpack_require__(36379)["Buffer"];











var _commitMint = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(params, selectedUTXOs, change, needChange) {
    var buildPsbt,
      address,
      network,
      revealAddress,
      revealFee,
      addressType,
      publicKey,
      script,
      serviceFee,
      serviceAddress,
      btcNetwork,
      psbt,
      _iterator,
      _step,
      utxo,
      psbtInput,
      _signPsbt,
      signPsbt,
      _args = arguments;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          buildPsbt = _args.length > 4 && _args[4] !== undefined ? _args[4] : true;
          address = params.address, network = params.network, revealAddress = params.revealAddress, revealFee = params.revealFee, addressType = params.addressType, publicKey = params.publicKey, script = params.script, serviceFee = params.serviceFee, serviceAddress = params.serviceAddress;
          btcNetwork = network === "mainnet" ? esm/* networks.bitcoin */.QW.zO : esm/* networks.testnet */.QW.$g;
          psbt = new esm/* Psbt */._B({
            network: btcNetwork
          });
          _iterator = createForOfIteratorHelper_default()(selectedUTXOs);
          _context.prev = 5;
          _iterator.s();
        case 7:
          if ((_step = _iterator.n()).done) {
            _context.next = 15;
            break;
          }
          utxo = _step.value;
          _context.next = 11;
          return (0,psbtBuild/* createPsbtInput */.o2)({
            utxo: utxo,
            addressType: addressType,
            publicKey: publicKey,
            script: script,
            network: network
          });
        case 11:
          psbtInput = _context.sent;
          psbt.addInput(psbtInput);
        case 13:
          _context.next = 7;
          break;
        case 15:
          _context.next = 20;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](5);
          _iterator.e(_context.t0);
        case 20:
          _context.prev = 20;
          _iterator.f();
          return _context.finish(20);
        case 23:
          psbt.addOutput({
            address: revealAddress,
            value: BigInt(revealFee)
          });
          // if (serviceFee > 0 && serviceAddress) {
          //   psbt.addOutput({
          //     address: serviceAddress,
          //     value: serviceFee,
          //   });
          // }
          if (needChange || change.gt(metaso/* DUST_SIZE */.F_)) {
            psbt.addOutput({
              address: address,
              value: BigInt(change.toNumber())
            });
          }
          if (buildPsbt) {
            _context.next = 27;
            break;
          }
          return _context.abrupt("return", psbt);
        case 27:
          _context.next = 29;
          return window.metaidwallet.btc.signPsbt({
            psbtHex: psbt.toHex(),
            options: {
              autoFinalized: true
            }
          });
        case 29:
          _signPsbt = _context.sent;
          if (!(typeof_default()(_signPsbt) === "object")) {
            _context.next = 34;
            break;
          }
          if (!(_signPsbt.status === "canceled")) {
            _context.next = 33;
            break;
          }
          throw new Error("canceled");
        case 33:
          throw new Error("");
        case 34:
          signPsbt = esm/* Psbt */._B.fromHex(_signPsbt);
          return _context.abrupt("return", signPsbt);
        case 36:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[5, 17, 20, 23]]);
  }));
  return function _commitMint(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var commitMintMRC20PSBT = /*#__PURE__*/function () {
  var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(order, feeRate, address, network) {
    var extract,
      signPsbt,
      revealFee,
      revealInputIndex,
      utxos,
      addressType,
      publicKey,
      btcNetwork,
      script,
      commitTx,
      rawTx,
      txId,
      commitPsbt,
      psbt,
      toSignInputs,
      i,
      estimatedFee,
      revealPrePsbtRaw,
      _args2 = arguments;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          extract = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : true;
          signPsbt = _args2.length > 5 && _args2[5] !== undefined ? _args2[5] : true;
          (0,esm/* initEccLib */.Wi)(lib);
          revealFee = order.revealFee, revealInputIndex = order.revealInputIndex;
          _context2.next = 6;
          return (0,psbtBuild/* getUtxos */.t4)(address, network);
        case 6:
          utxos = _context2.sent.sort(function (a, b) {
            return b.satoshi - a.satoshi;
          });
          addressType = (0,utils/* determineAddressInfo */.uY)(address).toUpperCase();
          _context2.next = 10;
          return window.metaidwallet.btc.getPublicKey();
        case 10:
          publicKey = _context2.sent;
          btcNetwork = network === "mainnet" ? esm/* networks.bitcoin */.QW.zO : esm/* networks.testnet */.QW.$g;
          script = esm/* address.toOutputScript */.Lk.toOutputScript(address, btcNetwork);
          _context2.next = 15;
          return (0,psbtBuild/* buildTx */.lE)(utxos, new decimal/* default */.Z(revealFee), feeRate, objectSpread2_default()({
            addressType: addressType,
            address: address,
            publicKey: Buffer.from(publicKey, "hex"),
            script: Buffer.from(script),
            network: network
          }, order), address, _commitMint, extract, signPsbt);
        case 15:
          commitTx = _context2.sent;
          rawTx = commitTx.rawTx, txId = commitTx.txId, commitPsbt = commitTx.psbt;
          psbt = esm/* Psbt */._B.fromHex(order.revealPrePsbtRaw, {
            network: btcNetwork
          });
          psbt.data.globalMap.unsignedTx.tx.ins[revealInputIndex].hash = Buffer.from(txId, "hex").reverse();
          psbt.data.globalMap.unsignedTx.tx.ins[revealInputIndex].index = 0;
          toSignInputs = [];
          i = 0;
        case 22:
          if (!(i < revealInputIndex)) {
            _context2.next = 33;
            break;
          }
          _context2.t0 = psbt;
          _context2.t1 = i;
          _context2.next = 27;
          return (0,psbtBuild/* fillInternalKey */.EG)({
            publicKey: Buffer.from(publicKey, "hex"),
            addressType: addressType
          });
        case 27:
          _context2.t2 = _context2.sent;
          _context2.t0.updateInput.call(_context2.t0, _context2.t1, _context2.t2);
          toSignInputs.push({
            index: i,
            address: address,
            sighashTypes: [metaso/* SIGHASH_ALL */.df]
          });
        case 30:
          i++;
          _context2.next = 22;
          break;
        case 33:
          estimatedFee = (0,psbtBuild/* calcFee */.L7)(psbt, feeRate, addressType === "P2TR");
          if (signPsbt) {
            _context2.next = 36;
            break;
          }
          return _context2.abrupt("return", {
            rawTx: rawTx,
            revealPrePsbtRaw: psbt.toHex(),
            revealFee: estimatedFee.toString(),
            commitFee: commitTx.fee
          });
        case 36:
          _context2.next = 38;
          return window.metaidwallet.btc.signPsbt({
            psbtHex: psbt.toHex(),
            options: {
              toSignInputs: toSignInputs,
              autoFinalized: false
            }
          });
        case 38:
          revealPrePsbtRaw = _context2.sent;
          if (!(typeof_default()(revealPrePsbtRaw) === "object")) {
            _context2.next = 41;
            break;
          }
          throw new Error("canceled");
        case 41:
          return _context2.abrupt("return", {
            rawTx: rawTx,
            revealPrePsbtRaw: revealPrePsbtRaw,
            revealFee: estimatedFee,
            commitFee: commitTx.fee
          });
        case 42:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function commitMintMRC20PSBT(_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();
var transferMRC20PSBT = /*#__PURE__*/function () {
  var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(order, feeRate, address, network) {
    var extract,
      signPsbt,
      _args3 = arguments;
    return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          extract = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : true;
          signPsbt = _args3.length > 5 && _args3[5] !== undefined ? _args3[5] : true;
          return _context3.abrupt("return", commitMintMRC20PSBT(order, feeRate, address, network, extract, signPsbt));
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function transferMRC20PSBT(_x9, _x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/airdrop.tsx























/* harmony default export */ var airdrop = (function () {
  var _listValue$data;
  var _notification$useNoti = notification/* default */.ZP.useNotification(),
    _notification$useNoti2 = slicedToArray_default()(_notification$useNoti, 2),
    api = _notification$useNoti2[0],
    contextHolder2 = _notification$useNoti2[1];
  var _Modal$useModal = es_modal/* default */.Z.useModal(),
    _Modal$useModal2 = slicedToArray_default()(_Modal$useModal, 2),
    modal = _Modal$useModal2[0],
    contextHolder = _Modal$useModal2[1];
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    admin = _useModel.admin;
  var _useModel2 = (0,_umi_production_exports.useModel)('user'),
    feeRate = _useModel2.feeRate;
  var _useState = (0,react.useState)(1),
    _useState2 = slicedToArray_default()(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['userMrc20List', admin === null || admin === void 0 ? void 0 : admin.host],
      enabled: Boolean(admin === null || admin === void 0 ? void 0 : admin.host),
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
          var _res$data;
          var res;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,request_api/* getUserMrc20List */.Il)({
                  address: admin.host,
                  cursor: 0,
                  size: 100
                });
              case 2:
                res = _context.sent;
                return _context.abrupt("return", (res === null || res === void 0 || (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.list) || []);
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function queryFn() {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }(),
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }),
    list = _useQuery.data;
  var _transferTickerId = es_form/* default */.Z.useWatch('transferTickerId', form);
  var maxAmount = (0,react.useMemo)(function () {
    if (_transferTickerId && list && list.length > 0) {
      var token = list.find(function (item) {
        return item.id === _transferTickerId;
      });
      if (token) {
        return Number(token.balance);
      }
    }
    return 0;
  }, [_transferTickerId, list]);
  var _useQuery2 = (0,useQuery/* useQuery */.a)({
      queryKey: ['getMetaBlockNewest'],
      queryFn: function queryFn() {
        return (0,request_api/* getMetaBlockNewest */.Nx)();
      }
    }),
    _newest = _useQuery2.data;
  var startAndEndHeight = (0,react.useMemo)(function () {
    if (value === 1) return {
      heightBegin: -1,
      heightEnd: -1
    };
    if (!_newest) return null;
    var _newest$data = _newest.data,
      progressStartBlock = _newest$data.progressStartBlock,
      progressEndBlock = _newest$data.progressEndBlock,
      syncMetaBlockHeight = _newest$data.syncMetaBlockHeight;
    var heightEnd = syncMetaBlockHeight;
    var step = progressEndBlock - progressStartBlock + 1;
    var heightBegin = heightEnd - Number(value) * step;
    return {
      heightBegin: heightBegin,
      heightEnd: heightEnd
    };
  }, [value, _newest]);
  var _useQuery3 = (0,useQuery/* useQuery */.a)({
      queryKey: ['_hostValue', startAndEndHeight, admin === null || admin === void 0 ? void 0 : admin.host],
      enabled: Boolean((admin === null || admin === void 0 ? void 0 : admin.host) && startAndEndHeight),
      queryFn: function queryFn() {
        return (0,request_api/* getMetaBlockHostValue */.Ic)({
          size: 100,
          cursor: 0,
          host: admin.host,
          // timeBegin: Math.floor(new Date().getTime() / 1000) - 60 * 60 * 24 * 7 * Number(value),
          // timeEnd: Math.floor(new Date().getTime() / 1000)
          heightBegin: startAndEndHeight.heightBegin,
          heightEnd: startAndEndHeight.heightEnd
        });
      }
    }),
    _hostValue = _useQuery3.data,
    _hostValueFetching = _useQuery3.isFetching;
  var hostValue = (0,react.useMemo)(function () {
    if (!_hostValue || !_hostValue.data.list) return 0;
    return _hostValue.data.list.reduce(function (acc, cur) {
      return acc + Number(cur.mdvDeltaValue);
    }, 0);
  }, [_hostValue]);
  var _useQuery4 = (0,useQuery/* useQuery */.a)({
      queryKey: ['_listhostValue', startAndEndHeight, admin === null || admin === void 0 ? void 0 : admin.host],
      enabled: Boolean((admin === null || admin === void 0 ? void 0 : admin.host) && startAndEndHeight),
      queryFn: function queryFn() {
        return (0,request_api/* getMetaBlockHostUserList */.Y5)({
          size: 100,
          cursor: 0,
          host: admin.host,
          // timeBegin: Math.floor(new Date().getTime() / 1000) - 60 * 60 * 24 * 7 * Number(value),
          // timeEnd: Math.floor(new Date().getTime() / 1000)
          heightBegin: startAndEndHeight.heightBegin,
          heightEnd: startAndEndHeight.heightEnd
        });
      }
    }),
    _listValue = _useQuery4.data,
    _listValueFetching = _useQuery4.isFetching;

  // const _listValue = {
  //     "code": 1,
  //     "message": "ok",
  //     "data": {
  //         "list": [
  //             {
  //                 "address": "n18EnQDAEh47fYQbLJdzt6xdw8TvUs7haL",
  //                 "dataValue": "614.5904"
  //             },
  //             {
  //                 "address": "mvsDHZ9kG68rRhzcswemCjvDpUUoWqtzfz",
  //                 "dataValue": "350.8537"
  //             },
  //             {
  //                 "address": "mqMrLrQYAaZiZUgSeVoCwrG1QSoAnWM5Dk",
  //                 "dataValue": "319.4476"
  //             },
  //             {
  //                 "address": "mpvWryQ8FTY9QXhDMoJGQFHgsCRfUDR6vH",
  //                 "dataValue": "286.097"
  //             },
  //             {
  //                 "address": "mkrSFdDJTQkFE3bWycQj1ZhzYBRLd87NVo",
  //                 "dataValue": "283.6199"
  //             },
  //         ],
  //         "total": 42
  //     }
  // }

  var successNotice = function successNotice(txid) {
    var key = "open".concat(Date.now());
    var btn = /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "primary",
        size: "small",
        onClick: function onClick() {
          var link = "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(txid);
          window.open(link, "_blank");
        },
        children: "open"
      })
    });
    api.open({
      message: 'Airdrop Success',
      description: txid,
      btn: btn,
      key: key
    });
  };
  var handleTransfer = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(values) {
      var transferTickerId, amount, addressCount, _feeRate, token, _yield$getMrc20Addres, utxoList, selectedUtxos, totalAmount, _iterator, _step, utxo, _iterator2, _step2, tick, preAmount, publicKey, publicKeySign, authParams, totalValue, mrc20Outs, totalAmount2, params, _yield$transfertMrc, code, _message, data, _yield$transferMRC20P, rawTx, revealPrePsbtRaw, commitFee, confirmed, ret;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            transferTickerId = values.transferTickerId, amount = values.amount, addressCount = values.addressCount, _feeRate = values.feeRate;
            token = list === null || list === void 0 ? void 0 : list.find(function (item) {
              return item.id === transferTickerId;
            });
            if (token) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return");
          case 5:
            _context2.next = 7;
            return (0,request_api/* getMrc20AddressUtxo */.SL)({
              address: admin.host,
              tickId: String(transferTickerId),
              cursor: 0,
              size: 100
            }, {});
          case 7:
            _yield$getMrc20Addres = _context2.sent;
            utxoList = _yield$getMrc20Addres.data;
            if (!(utxoList.list.length === 0)) {
              _context2.next = 11;
              break;
            }
            throw new Error('No UTXO');
          case 11:
            selectedUtxos = [];
            totalAmount = 0;
            _iterator = createForOfIteratorHelper_default()(utxoList.list);
            _context2.prev = 14;
            _iterator.s();
          case 16:
            if ((_step = _iterator.n()).done) {
              _context2.next = 42;
              break;
            }
            utxo = _step.value;
            if (!(utxo.blockHeight === -1)) {
              _context2.next = 20;
              break;
            }
            return _context2.abrupt("continue", 40);
          case 20:
            _iterator2 = createForOfIteratorHelper_default()(utxo.mrc20s);
            _context2.prev = 21;
            _iterator2.s();
          case 23:
            if ((_step2 = _iterator2.n()).done) {
              _context2.next = 30;
              break;
            }
            tick = _step2.value;
            if (Number(tick.amount) > 0) {
              totalAmount += Number(tick.amount);
              selectedUtxos.push({
                utxoIndex: utxo.outputIndex,
                utxoTxId: utxo.txId,
                utxoOutValue: utxo.satoshi,
                tickerId: transferTickerId,
                amount: tick.amount,
                address: utxo.address,
                pkScript: utxo.scriptPk
              });
            }
            if (!(totalAmount > amount)) {
              _context2.next = 28;
              break;
            }
            return _context2.abrupt("break", 30);
          case 28:
            _context2.next = 23;
            break;
          case 30:
            _context2.next = 35;
            break;
          case 32:
            _context2.prev = 32;
            _context2.t0 = _context2["catch"](21);
            _iterator2.e(_context2.t0);
          case 35:
            _context2.prev = 35;
            _iterator2.f();
            return _context2.finish(35);
          case 38:
            if (!(totalAmount > amount)) {
              _context2.next = 40;
              break;
            }
            return _context2.abrupt("break", 42);
          case 40:
            _context2.next = 16;
            break;
          case 42:
            _context2.next = 47;
            break;
          case 44:
            _context2.prev = 44;
            _context2.t1 = _context2["catch"](14);
            _iterator.e(_context2.t1);
          case 47:
            _context2.prev = 47;
            _iterator.f();
            return _context2.finish(47);
          case 50:
            if (!(totalAmount < amount)) {
              _context2.next = 52;
              break;
            }
            throw new Error('No available UTXOs. Please wait for existing transactions to be confirmed. ');
          case 52:
            preAmount = new decimal/* default */.Z(amount).div(Number(addressCount)).toString();
            _context2.next = 55;
            return window.metaidwallet.btc.getPublicKey();
          case 55:
            publicKey = _context2.sent;
            _context2.next = 58;
            return window.metaidwallet.btc.signMessage("metaso.network");
          case 58:
            publicKeySign = _context2.sent;
            if (!publicKeySign.status) {
              _context2.next = 61;
              break;
            }
            throw new Error('Sign failed');
          case 61:
            authParams = {
              "X-Public-Key": publicKey,
              "X-Signature": publicKeySign
            };
            totalValue = _listValue.data.list.slice(0, Number(addressCount)).reduce(function (acc, cur) {
              return acc + Number(cur.dataValue);
            }, 0);
            mrc20Outs = _listValue.data.list.slice(0, Number(addressCount)).map(function (item) {
              return {
                amount: String(Math.floor(Number(item.dataValue) / totalValue * Number(amount))),
                address: item.address,
                outValue: 546,
                pkScript: (0,psbtBuild/* getPkScriprt */.HL)(item.address, config/* curNetwork */.eM)
              };
            }).filter(function (item) {
              return Number(item.amount) > 0;
            });
            totalAmount2 = mrc20Outs.reduce(function (acc, cur) {
              return acc + Number(cur.amount);
            }, 0);
            params = {
              networkFeeRate: _feeRate,
              tickerId: transferTickerId,
              changeAddress: admin.host,
              changeOutValue: 546,
              transfers: selectedUtxos,
              mrc20Outs: mrc20Outs
            };
            _context2.next = 68;
            return (0,request_api/* transfertMrc20Pre */.rU)(params, {
              headers: objectSpread2_default()({}, authParams)
            });
          case 68:
            _yield$transfertMrc = _context2.sent;
            code = _yield$transfertMrc.code;
            _message = _yield$transfertMrc.message;
            data = _yield$transfertMrc.data;
            if (!(code !== 0)) {
              _context2.next = 74;
              break;
            }
            throw new Error(_message);
          case 74:
            _context2.next = 76;
            return transferMRC20PSBT(data, _feeRate, admin.host, config/* curNetwork */.eM);
          case 76:
            _yield$transferMRC20P = _context2.sent;
            rawTx = _yield$transferMRC20P.rawTx;
            revealPrePsbtRaw = _yield$transferMRC20P.revealPrePsbtRaw;
            commitFee = _yield$transferMRC20P.commitFee;
            _context2.next = 82;
            return modal.confirm({
              title: 'Trade Confirm',
              content: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 16,
                  textAlign: 'left'
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(descriptions/* default */.Z, {
                  column: 1,
                  items: [{
                    label: 'Amount',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: totalAmount2,
                      suffix: ''
                    })
                  }, {
                    label: 'Receive Address',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
                      wrap: true,
                      children: params.mrc20Outs.map(function (item, key) {
                        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
                            address: item.address
                          }), /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                            value: item.amount,
                            suffix: " "
                          })]
                        }, item.address);
                      })
                    })
                  }, {
                    label: 'Gas Fee',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: new decimal/* default */.Z(commitFee).toFixed(8),
                      suffix: " SAT"
                    })
                  }, {
                    label: 'Fee Rate',
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: _feeRate,
                      suffix: " sat/vB"
                    })
                  }]
                })
              })
            });
          case 82:
            confirmed = _context2.sent;
            if (confirmed) {
              _context2.next = 85;
              break;
            }
            throw new Error('Canceled');
          case 85:
            _context2.next = 87;
            return (0,request_api/* transferMrc20Commit */.CO)({
              orderId: data.orderId,
              commitTxRaw: rawTx,
              commitTxOutIndex: 0,
              revealPrePsbtRaw: revealPrePsbtRaw
            }, {
              headers: objectSpread2_default()({}, authParams)
            });
          case 87:
            ret = _context2.sent;
            if (!(ret.code !== 0)) {
              _context2.next = 90;
              break;
            }
            throw new Error(ret.message);
          case 90:
            successNotice(ret.data.revealTxId);
            _context2.next = 97;
            break;
          case 93:
            _context2.prev = 93;
            _context2.t2 = _context2["catch"](0);
            console.error(_context2.t2);
            message/* default */.ZP.error(_context2.t2.message || 'Error');
          case 97:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 93], [14, 44, 47, 50], [21, 32, 35, 38]]);
    }));
    return function handleTransfer(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var columns = [{
    title: '#',
    dataIndex: 'name',
    key: 'name',
    render: function render(text, record, index) {
      if (index === 0) return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: _1/* default */.Z,
        alt: ""
      });
      if (index === 1) return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: _3/* default */.Z,
        alt: ""
      });
      if (index === 2) return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: _2/* default */.Z,
        alt: ""
      });
      return /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
        children: index + 1
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: "User"
    }),
    dataIndex: 'address',
    key: 'name',
    minWidth: 160,
    render: function render(text, record, index) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
        address: text
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: "Total Value"
    }),
    dataIndex: 'dataValue',
    key: 'dataValue',
    align: 'center',
    render: function render(text, record, index) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
        value: text
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: "Proportion%"
    }),
    dataIndex: 'dataValue',
    key: 'Progress',
    align: 'center',
    render: function render(text, record, index) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
        value: hostValue ? Number(text) / hostValue * 100 : '--',
        suffix: "%",
        precision: 2
      });
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
    title: "Airdrop",
    style: {
      width: '100%',
      maxWidth: 600
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z, {
      form: form,
      layout: "vertical",
      variant: "filled",
      initialValues: {
        network: 'Bitcoin',
        feeRate: feeRate
      },
      onFinish: handleTransfer,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        label: "Network",
        required: true,
        name: "network",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          placeholder: "input placeholder",
          size: "large",
          prefix: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: btc,
            style: {
              width: 40,
              height: 40
            }
          }),
          disabled: true
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        label: "Token",
        name: "transferTickerId",
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
          style: {
            textAlign: 'left',
            height: 60
          },
          size: "large",
          placeholder: "Select a token",
          options: (list !== null && list !== void 0 ? list : []).map(function (item) {
            return {
              label: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
                  children: item.name[0]
                }), "  ", item.name, /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
                  children: item.balance
                })]
              }),
              value: item.id
            };
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        label: "Amount",
        name: "amount",
        rules: [{
          required: true
        }, {
          min: 1,
          type: 'number',
          max: maxAmount
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
          size: "large",
          style: {
            width: '100%',
            lineHeight: '60px'
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        label: "Fee Rate",
        name: "feeRate",
        rules: [{
          required: true
        }, {
          min: 1,
          type: 'number'
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
          size: "large",
          style: {
            width: '100%',
            lineHeight: '60px'
          },
          suffix: "sat/vB"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
        theme: {
          components: {
            Table: {
              headerBg: 'transparent',
              headerSplitColor: 'transparent'
            }
          }
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
          columns: columns,
          dataSource: _listValue === null || _listValue === void 0 ? void 0 : _listValue.data.list,
          loading: _listValueFetching,
          pagination: false,
          rowClassName: function rowClassName(record, index) {
            if (index < 3) {
              return 'ant-table-row-' + index;
            }
            return '';
          },
          scroll: {
            x: 'max-content'
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        label: "Airdrop Address Count",
        name: "addressCount",
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(slider/* default */.Z, {
          max: (_listValue === null || _listValue === void 0 || (_listValue$data = _listValue.data) === null || _listValue$data === void 0 || (_listValue$data = _listValue$data.list) === null || _listValue$data === void 0 ? void 0 : _listValue$data.length) || 0
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          htmlType: "submit",
          children: "Save"
        })
      })]
    }), contextHolder, contextHolder2]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/index.js + 4 modules
var es_alert = __webpack_require__(81751);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/switch/index.js + 1 modules
var es_switch = __webpack_require__(64011);
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/assist.tsx







/* harmony default export */ var assist = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    admin = _useModel.admin,
    fetchConfig = _useModel.fetchConfig;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBgLayout = _theme$useToken$token.colorBgLayout,
    borderRadius = _theme$useToken$token.borderRadius;
  var onChange = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(checked) {
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,dashboard/* setAssistEnable */.Qz)({
              assist: checked
            });
          case 2:
            _context.next = 4;
            return fetchConfig();
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
      type: "info",
      message: "The gas payment function for on-chain transactions. When enabled, this feature will provide each user with a certain amount of free gas on MVC for uploading buzz content to the blockchain."
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      style: {
        marginTop: 20
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          padding: 20,
          background: colorBgLayout,
          borderRadius: borderRadius
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          children: "Assist"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z, {
          value: admin === null || admin === void 0 ? void 0 : admin.assist,
          onChange: onChange
        })]
      })
    })]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-list@2.6.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__rea_818389a1765801fb5d0bff9d4ee805c7/node_modules/@ant-design/pro-list/es/index.js + 10 modules
var es = __webpack_require__(73820);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(16621);
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/AddRecommend.tsx












/* harmony default export */ var AddRecommend = (function (_ref) {
  var reload = _ref.reload;
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var authorAddress = es_form/* default */.Z.useWatch('authorAddress', form);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalForm/* ModalForm */.Y, {
    title: "Add Recommend User",
    trigger: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.ZP, {
      type: "primary",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PlusOutlined/* default */.Z, {}), "Add"]
    }),
    form: form,
    autoFocusFirstInput: true,
    modalProps: {
      destroyOnClose: true,
      onCancel: function onCancel() {
        return console.log('run');
      }
    },
    submitTimeout: 2000,
    onFinish: ( /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(values) {
        var valid, ret;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              valid = (0,utils/* isValidBitcoinAddress */.YY)(values.authorAddress, config/* curNetwork */.eM);
              if (valid) {
                _context.next = 4;
                break;
              }
              message/* default */.ZP.error('Please enter a valid btc address');
              return _context.abrupt("return", false);
            case 4:
              _context.next = 6;
              return (0,request_api/* addRecommendedItem */.u5)({
                authorAddress: values.authorAddress,
                authorName: values.remark || values.authorAddress
              });
            case 6:
              ret = _context.sent;
              if (!(ret.code !== 1)) {
                _context.next = 10;
                break;
              }
              message/* default */.ZP.error(ret.message);
              return _context.abrupt("return", false);
            case 10:
              reload();
              return _context.abrupt("return", true);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
      width: "md",
      name: "authorAddress",
      label: "Address",
      tooltip: "Please enter the address of the recommend user",
      placeholder: "Please enter a address",
      rules: [{
        required: true,
        message: 'Please enter a address!'
      }]
    }), authorAddress && /*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
      address: authorAddress
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
      width: "md",
      name: "remark",
      label: "Remark",
      tooltip: "Please enter the remark of the recommend user",
      placeholder: "Please enter a remark",
      rules: [{
        required: false
      }]
    })]
  });
});
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/recommend.tsx









/* harmony default export */ var recommend = (function () {
  var action = (0,react.useRef)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es/* ProList */.Rs, {
    ghost: true,
    actionRef: action,
    request: ( /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(params, sorter, filter) {
        var ret;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,request_api/* getRecommendedList */.jj)({
                cursor: (params.current ? params.current - 1 : 0) * (params.pageSize || 10),
                size: params.pageSize || 10
              });
            case 2:
              ret = _context.sent;
              return _context.abrupt("return", {
                data: ret.data.list || [],
                success: true,
                total: ret.data.total || 0
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()),
    toolBarRender: function toolBarRender() {
      return [/*#__PURE__*/(0,jsx_runtime.jsx)(AddRecommend, {
        reload: function reload() {
          var _action$current;
          action === null || action === void 0 || (_action$current = action.current) === null || _action$current === void 0 || _action$current.reload();
        }
      })];
    },
    itemCardProps: {
      ghost: true
    },
    pagination: {
      defaultPageSize: 8,
      showSizeChanger: false
    },
    showActions: "hover",
    rowSelection: false,
    grid: {
      gutter: 16,
      column: 4
    }
    // onItem={(record: any) => {
    //     return {
    //         onMouseEnter: () => {
    //             console.log(record);
    //         },
    //         onClick: () => {
    //             console.log(record);
    //         },
    //     };
    // }}
    ,
    metas: {
      title: {
        dataIndex: 'authorId',
        render: function render(text, row) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
            address: row.authorId
          });
        }
      },
      content: {
        dataIndex: 'authorName'
      },
      actions: {
        cardActionProps: 'extra',
        render: function render(text, row) {
          return [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "link",
            size: "small",
            onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
              var _action$current2;
              return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return (0,request_api/* deleteRecommendedItem */.TC)({
                      authorAddress: row.authorId
                    });
                  case 2:
                    action === null || action === void 0 || (_action$current2 = action.current) === null || _action$current2 === void 0 || _action$current2.reload();
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            })),
            children: "Delete"
          })];
        }
      }
    },
    headerTitle: "Recommended"
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__r_9ba62f8940c034ce11d0a9615f282092/node_modules/@ant-design/pro-utils/es/runFunction/index.js
var runFunction = __webpack_require__(87784);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__re_5e5b823f35bece319acd3a74a9338ac0/node_modules/@ant-design/pro-form/es/FieldContext.js
var FieldContext = __webpack_require__(47757);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__re_5e5b823f35bece319acd3a74a9338ac0/node_modules/@ant-design/pro-form/es/components/Select/index.js


var Select_excluded = ["fieldProps", "children", "params", "proFieldProps", "mode", "valueEnum", "request", "showSearch", "options"],
  Select_excluded2 = ["fieldProps", "children", "params", "proFieldProps", "mode", "valueEnum", "request", "options"];





/**
 * 选择框
 *
 * @param
 */
var ProFormSelectComponents = function ProFormSelectComponents(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    children = _ref.children,
    params = _ref.params,
    proFieldProps = _ref.proFieldProps,
    mode = _ref.mode,
    valueEnum = _ref.valueEnum,
    request = _ref.request,
    showSearch = _ref.showSearch,
    options = _ref.options,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref, Select_excluded);
  var context = (0,react.useContext)(FieldContext/* default */.Z);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    valueEnum: (0,runFunction/* runFunction */.h)(valueEnum),
    request: request,
    params: params,
    valueType: "select",
    filedConfig: {
      customLightMode: true
    },
    fieldProps: (0,objectSpread2/* default */.Z)({
      options: options,
      mode: mode,
      showSearch: showSearch,
      getPopupContainer: context.getPopupContainer
    }, fieldProps),
    ref: ref,
    proFieldProps: proFieldProps
  }, rest), {}, {
    children: children
  }));
};
var SearchSelect = /*#__PURE__*/react.forwardRef(function (_ref2, ref) {
  var fieldProps = _ref2.fieldProps,
    children = _ref2.children,
    params = _ref2.params,
    proFieldProps = _ref2.proFieldProps,
    mode = _ref2.mode,
    valueEnum = _ref2.valueEnum,
    request = _ref2.request,
    options = _ref2.options,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref2, Select_excluded2);
  var props = (0,objectSpread2/* default */.Z)({
    options: options,
    mode: mode || 'multiple',
    labelInValue: true,
    showSearch: true,
    suffixIcon: null,
    autoClearSearchValue: true,
    optionLabelProp: 'label'
  }, fieldProps);
  var context = (0,react.useContext)(FieldContext/* default */.Z);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    valueEnum: (0,runFunction/* runFunction */.h)(valueEnum),
    request: request,
    params: params,
    valueType: "select",
    filedConfig: {
      customLightMode: true
    },
    fieldProps: (0,objectSpread2/* default */.Z)({
      getPopupContainer: context.getPopupContainer
    }, props),
    ref: ref,
    proFieldProps: proFieldProps
  }, rest), {}, {
    children: children
  }));
});
var ProFormSelect = /*#__PURE__*/react.forwardRef(ProFormSelectComponents);
var ProFormSearchSelect = SearchSelect;
var WrappedProFormSelect = ProFormSelect;
WrappedProFormSelect.SearchSelect = ProFormSearchSelect;

// @ts-ignore
// eslint-disable-next-line no-param-reassign
WrappedProFormSelect.displayName = 'ProFormComponent';
/* harmony default export */ var Select = (WrappedProFormSelect);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 5 modules
var spin = __webpack_require__(55576);
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/MetasoConf.tsx










var formatHost = function formatHost(host) {
  if (!host || host.length === 0) {
    return [];
  }
  if (host.length === 1 && host[0] === '*') {
    return [];
  }
  return host;
};
/* harmony default export */ var MetasoConf = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    fees = _useModel.fees,
    updateFees = _useModel.updateFees,
    admin = _useModel.admin,
    setLogined = _useModel.setLogined;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ["metasoConf"],
      queryFn: function queryFn() {
        return (0,request_api/* getMetasoConf */.Gz)();
      }
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading,
    refetch = _useQuery.refetch;

  //  blockedHost: string[] | null;
  //   chain: string;
  //   initialHeight: {
  //     btc: number;
  //     mvc: number;
  //   };
  //   syncHost: string[] | null;
  var formRef = (0,react.useRef)();
  (0,react.useEffect)(function () {
    if (data && data.data) {
      var _data$data$initialHei, _data$data$initialHei2, _formRef$current;
      var _data = {
        blockedHost: formatHost(data.data.blockedHost),
        chain: data.data.chain ? data.data.chain.split(',') : [],
        syncHost: formatHost(data.data.syncHost),
        btcInitialHeight: ((_data$data$initialHei = data.data.initialHeight) === null || _data$data$initialHei === void 0 ? void 0 : _data$data$initialHei.btc) || 0,
        mvcInitialHeight: ((_data$data$initialHei2 = data.data.initialHeight) === null || _data$data$initialHei2 === void 0 ? void 0 : _data$data$initialHei2.mvc) || 0
      };
      (_formRef$current = formRef.current) === null || _formRef$current === void 0 || _formRef$current.setFieldsValue(_data);
    }
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
    spinning: isLoading,
    style: {
      width: '100%'
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.Z, {
      ghost: true,
      gutter: 8,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ProForm/* ProForm */.A, {
        onFinish: ( /*#__PURE__*/function () {
          var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(values) {
            var blockedHost, chain, syncHost, btcInitialHeight, mvcInitialHeight;
            return regeneratorRuntime_default()().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  blockedHost = values.blockedHost, chain = values.chain, syncHost = values.syncHost, btcInitialHeight = values.btcInitialHeight, mvcInitialHeight = values.mvcInitialHeight;
                  console.log(syncHost, 'syncHost');
                  _context.next = 5;
                  return (0,request_api/* setMetasoConfChain */.c6)({
                    chain: chain.join(',')
                  });
                case 5:
                  _context.next = 7;
                  return (0,request_api/* setMetasoConfBlockedHost */.i9)({
                    host: blockedHost.length > 0 ? blockedHost.join(',') : "*"
                  });
                case 7:
                  _context.next = 9;
                  return (0,request_api/* setMetasoConfSyncHost */.Jf)({
                    host: syncHost.length > 0 ? syncHost.join(',') : '*'
                  });
                case 9:
                  _context.next = 11;
                  return (0,request_api/* setMetasoConfInitialHeight */.kN)({
                    chain: 'btc',
                    height: btcInitialHeight
                  });
                case 11:
                  _context.next = 13;
                  return (0,request_api/* setMetasoConfInitialHeight */.kN)({
                    chain: 'mvc',
                    height: mvcInitialHeight
                  });
                case 13:
                  _context.next = 15;
                  return refetch();
                case 15:
                  message/* default */.ZP.success('Save successfully');
                  _context.next = 26;
                  break;
                case 18:
                  _context.prev = 18;
                  _context.t0 = _context["catch"](0);
                  if (!(_context.t0.response && _context.t0.response.status === 401)) {
                    _context.next = 24;
                    break;
                  }
                  message/* default */.ZP.error('Unauthorized');
                  setLogined(false);
                  return _context.abrupt("return");
                case 24:
                  console.log(_context.t0);
                  message/* default */.ZP.error(_context.t0.message);
                case 26:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[0, 18]]);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()),
        submitter: {
          searchConfig: {
            submitText: 'Save'
          }
        },
        autoFocusFirstInput: true,
        formRef: formRef,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Select, {
          name: "chain",
          label: "Chain",
          tooltip: "Select the blockchain networks to be used. Multiple chains can be selected.",
          mode: "multiple",
          options: [{
            label: 'MVC',
            value: 'mvc'
          }, {
            label: 'BTC',
            value: 'btc'
          }],
          rules: [{
            required: true,
            message: 'Please select at least one chain!'
          }],
          width: "xl"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
          name: "btcInitialHeight",
          label: "BTC Initial Height",
          tooltip: "The initial height of the Bitcoin blockchain, used for syncing.",
          placeholder: "Enter BTC Initial Height",
          fieldProps: {
            precision: 0
          },
          width: "xl"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
          name: "mvcInitialHeight",
          label: "MVC Initial Height",
          tooltip: "The initial height of the Bitcoin Cash blockchain, used for syncing.",
          placeholder: "Enter MVC Initial Height",
          fieldProps: {
            precision: 0
          },
          width: "xl"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Select, {
          name: "syncHost",
          label: "Sync Host",
          tooltip: "The host addresses for syncing the blockchain data. Multiple hosts can be specified.",
          mode: "tags",
          width: "xl"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Select, {
          name: "blockedHost",
          label: "Blocked Host",
          tooltip: "The host addresses that are blocked from accessing the service. Multiple hosts can be specified.",
          mode: "tags",
          width: "xl"
        })]
      })
    })
  });
});
;// CONCATENATED MODULE: ./src/pages/dashboard/fees/index.tsx




















/* harmony default export */ var fees = (function () {
  var _useState = (0,react.useState)('1'),
    _useState2 = slicedToArray_default()(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    fees = _useModel.fees,
    updateFees = _useModel.updateFees,
    admin = _useModel.admin,
    setLogined = _useModel.setLogined;
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
        label: 'Metaso Conf',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(MetasoConf, {})
      }, {
        key: '10',
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
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
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
                    suffix: 'SAT',
                    min: 546
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "post_service_fee_amount",
                  label: "Post Service Fee Amount",
                  placeholder: "Enter the fee amount for post actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT',
                    min: 546
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "comment_service_fee_amount",
                  label: "Comment Service Fee Amount",
                  placeholder: "Enter the fee amount for comment actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT',
                    min: 546
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "like_service_fee_amount",
                  label: "Like Service Fee Amount",
                  placeholder: "Enter the fee amount for like actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT',
                    min: 546
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "donate_service_fee_amount",
                  label: "Donate Service Fee Amount",
                  placeholder: "Enter the fee amount for Donate actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT',
                    min: 546
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
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
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
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit, {
                  width: "md",
                  name: "donate_service_fee_amount",
                  label: "Donate Service Fee Amount",
                  placeholder: "Enter the fee amount for Donate actions",
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
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(rpc, {})
      }, {
        key: '3',
        label: 'Domain Name & Host',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ProCard/* default */.Z, {
          ghost: true,
          gutter: 8,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ProForm/* ProForm */.A, {
            onFinish: ( /*#__PURE__*/function () {
              var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(values) {
                var valid;
                return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      // 检查host 是不是 正确的btc地址
                      valid = (0,utils/* isValidBitcoinAddress */.YY)(values.host, config/* curNetwork */.eM);
                      if (valid) {
                        _context2.next = 4;
                        break;
                      }
                      throw new Error('Please enter a valid btc address');
                    case 4:
                      _context2.next = 6;
                      return (0,dashboard/* saveDomain */.T5)(values);
                    case 6:
                      _context2.next = 8;
                      return updateFees();
                    case 8:
                      message/* default */.ZP.success('Save successfully');
                      _context2.next = 19;
                      break;
                    case 11:
                      _context2.prev = 11;
                      _context2.t0 = _context2["catch"](0);
                      if (!(_context2.t0.response && _context2.t0.response.status === 401)) {
                        _context2.next = 17;
                        break;
                      }
                      message/* default */.ZP.error('Unauthorized');
                      setLogined(false);
                      return _context2.abrupt("return");
                    case 17:
                      console.log(_context2.t0);
                      message/* default */.ZP.error(_context2.t0.message);
                    case 19:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, null, [[0, 11]]);
              }));
              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }()),
            submitter: {
              searchConfig: {
                submitText: 'Save',
                resetText: 'Reset'
              }
            },
            initialValues: admin,
            autoFocusFirstInput: true,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
              width: "lg",
              name: "domainName",
              label: "Domain Name",
              placeholder: "Please enter the domain name of the MetaAccess ",
              rules: [{
                required: true,
                message: 'Please enter the domain name of the MetaAccess'
              }, {
                pattern: /^(?!\-)(?:[A-Za-z0-9-]{1,63}\.?)+(?<=\.[A-Za-z]{2,})$/,
                message: 'Please enter a valid domain name'
              }],
              fieldProps: {
                addonBefore: 'https://'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
              width: "lg",
              name: "host",
              label: "Host",
              placeholder: ""
            })]
          })
        })
      }, {
        key: '4',
        label: 'Screen',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(blockList, {})
      }, {
        key: '5',
        label: 'About',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(introduction, {})
      }, {
        key: '6',
        label: 'Token Airdrop',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(airdrop, {})
      }, {
        key: '7',
        label: 'Assist',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(assist, {})
      }, {
        key: '8',
        label: 'Recommend Users',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(recommend, {})
      }],
      onChange: function onChange(key) {
        setActiveKey(key);
      }
    }
  });
});

/***/ }),

/***/ 33401:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABWxSURBVHic7Z15lJTVlcB/931V1dV006DQ3fQCSoMKKqCiggsCaqIkM4lJBmccYyZj4jABGpc40ZlzMpJkTk4WM6MsGsZEMyZqlGTUJI7RaECFGCOKgILKooHuZmkgNHTTtX3vzh9fiw1UNbV/1ervHI9N1Vtu1a23fPfde5/wAUAfwaGjZmikK3ASjrkQtBLVOoQKEUarElaoFhgK4iq6x4i0q9Kl6C4RaQX2iWoLOJvjgdjqyp07d8t8rN+fLVfEbwGyQZfUD+2OmakGvUDRCSBTQIP57UXiCKtQfc7CS10m/kzNnPbO/PZRePqFgnXJxGA0sfMSVC9V1SsQmtAiyy4oymYVHhfkyTeCw54/e9Yr8aLKkAUlreDYosZJFp2pqtcBVX7LczjSKqJPGpHFwVNPel2mL0/4LVEySk7B+5fUDw3GmAtyNegoSlDGI1AR2axwbzyo91TNatvtt0C9KZkvL7Ko4WSrOtcg1yka9lue7JAosNRVbq+c17rGb2mgBBTcvbBxGka/hNWrAMdvefKEK8jj4sg3yma3rPVTEN8U3HnHyFrHid0OerWfchQYFZFfYpxbwrO3bvFDgKJ/sbq4ujJK8Da13ASYYvfvE9Yg80Na/j2ZtylazI6LquCuhY0zDPYHwNhi9ltCtFhldsW8tl8Xq8OiKHjvd5oGlVdE7wS9hg/PqE2FVeTBaCLYfNyN7+4rdGcFV3D3gropYswiVR1f6L76EyKyzghfCM1pfa2Q/RR0NEUWNXxFxDz7kXKPRlXHuVZf7l7YeGsh+ynICNYlTYOi8eijik4rukmxvyGoKL8rC4WvlFlbOvLffJ7RBcOqo8Y8qcrEfLf9QUaE1xKJsssrb3hnZ17bzWdjkUUNJ6vqY3x4d8k5IfAmDleEZ7e9lcc288PBO+vPF5FfIFqXrzY/pOxwMR+vbG5Zl4/G8qLg7oWN08A+CfRTG3JpIdCtmE+UN7csz0NbudG5sHFcAPuSQnmubX3EYUTUcsmA69v+kEsjOT0mRe6qP8XBPv2RcgtCWER+EVnUcHIujWSt4M47Rtbi8hgwLBcBPqIPROtU9TFdMKw62yayUrAuaRoUCER/qzAm2479oV8+ko+NGvOkLmkalE3lQDaVorHIIwpnZFPXTwLnXI854RJs6x+wrS9it78M8YOA+i1an6gyMRqPPgpcnGndjH/S3Qsbb0Xst/ujhSp0xcOYxgvffyERxbavw7auJPHqDyG23z/hjoWggswJz229O7NqGRBb3HCGa/Vlshz5vhIcQPhLayGQZD8Y6yRy75mQOHj4604Y1AVbGs6TgsRV7SXl87a/kG6dtNfgv/zXiYOtcj/9UbmAqZkATijpe3bHq+AeeQ4vBKd9m9AVDxM4/98wI6YjA2rB+PfxFQ2KMYv2fif99ThtacsC8YWqOi470fzHNJwPktzly27/kzdSexMcgGk4D6kagamfBGfNRqP70b9sxG5bQWLVgiQ/isKjquO9s3W+mE75tEZw14L6vxb073MRzG9M/bkp3lFs69G2BKkagVT0troKUjYIM+xsTNOMo38QRUWv6VrYOCOdksdUsC4YXWaEu9IpW7KEBiI1E5K+pdH92D1H2/ZN/WRwkkfD2JYVYH31czcG+wNdXF15zILHKhCT7q8BjXkRK0ekehymcUryjVIfmJoJSIo6umsNxA4c2RNmWIrTTlXszoI6YaTL2CjB245VqM81OHLXiCbrJubnTaQcccbMJDDhS+DGsDtfw7aswLb9CbvjFW89TDFtmrqzU26O7I5Xkq+/9eckLa+JCJpkSvcDtdzUecfI2/s6Q+57k2Xd71IqU7MYnBOme387IUz9ue+vq/GD3vNsywps6x+xu9ZAItKjOME0XpC8TbXYliTrb0UdUpni1LNzO3pwV+6fJz8Yz7eca1IVSKng6F2N461rP1cQsbJABtQesenpRXAApn6St9sFNNqB7ngVu2sNtv0NZEhy/wON7EP3Jll/R0xNueN2//x70FIKG9aruxc2/jjV0WJKBaurt1FCxlvTeD4EytIqK2WDkBOmY94b8SnQPRvQyJGeqwZTk8JHUBW7qyTW394IotcCy5O9mXT67VzQMEHRTxdSqkyR2jNA8rtayKATCEy+BTP6r5DKem/UOsHDzZm9sQk0yZTuN6J6VcedjScley/pCHaEmymlQDATwEn1peeADGwkMHEOqEUT3dC1A9v2J6SiJml52/FuKa2/h1AIlDl2LnD9ke8dNST2L6kfCswshmBp45Rhd69HuwsUeisGCVYgg0fhnHpVypnCM4iU6MmT8k89ujuMo0ZwMC7Xgaa32BWLeBfxp+eCCDJ4FKZhMmb4VJwRUyE4oGhiSEUtMmSMtzHT0lK0QtgLnGd+79cP20TpsmmB6BsbN6jq6GIKlzXh4wmcdyuBPkZd3lHF7lyN+/pPcTf9BhLdlM6olk3lza2HrcWHKbjnOPDVI18vaUyQ4OVLcJouK3rXeqCVxOoluG8+DLGSSMCjjpjzQnNbXnrvhcN+9lZ1Dv1JuQA2jt30a/wYRTKwgeBF36Rs5hOYUZ9I+excTJEs9rD90yEFr1oyMagqaZ1QlBoaO5DZmqg2r6dBctxoQpf9kODFt0NZVq5TeUS+vGrJxEOnJIcUfFp8x0WgDf4IlRsyZExGa7C7+UmiP7+c+HNfJ/HGg2jHn3NXuHFwxs4k9KkHkYHDc2srB1R10JjYrkO+W4d20YrO6F9z83uId5ifNordsQrdsx53z3pASDhlSEUNZuRlOCM/5tm4TTaJ8wRTewbBT95H/FdXowfzGkeWNgGjlwJPQa8RLEpJWa7SpqwKMzSDWDfrYrf1dmlScCPo/q24a+4h9vjfEf3pFBKvLEazdMIzQ8cSvPj7KV2ECo1a+5lDsgDsWlxdiTDKF2lyxBx/ChIeknZ5jR1A/7KpjwIWPbCNxIvfJvazi3DfXJrV9G1OvBjnpCsyrpcXhCbtMXoYgAobvLQ/usFCjyuOSX/3altfTNtLUg+2E3/mRuLPfhXcWIaSiWcGDfgQj6dId8xMhR4FG5hUfCnygBhMXfKD+VTY7S9n2InivrmU+IrbyPRRTAaPwtT4Ex9g0Au8/wOITPVFilwJVaX0tUrF4etv+riv/8zz/sgEEaR+clb95YqXZhmMzsegnO2LFDkig0ci5Rmsv917kx7wp1fZ4r71vxlXM1WN+GM7kin6CI7prK0dmv9k2sXBabwwo+df2/ZiTt4Y2vHnzCuFqvBHwRqko2aoCSZCZ/rQe+6IQWoznJ5bX8ytz2wee9wIfh1GRLoCJxlw++XjEYFyz3c5A2xLbgqW4zOPxdbONnw7bXLMhUZFSsLnOVNk8CgkPDjt8nqwHd23OYcODc7JmT/X6v7W7PvMGa00QPrfUglhhl+Q0cCwbX/Mwd4sOKdfg0nhnZm60wR22/Is+8wDqnVGtR8eMIjB1E0CSX/zYmrPJHDhbZiRl3nut+namp0wzrgvELxwfsZi2t0b0C5/7NEACBUBQWpKxyMhTUwgYwOHDGwkMOHLMOHLaKwT3bcFbV+H3bMB3fcu2rUDoh2oG/P8syrrkNozcE76NKb69Cw8RhR3w0NZWMDyhwijAyJUlJh70TGRIadltP4eVT9UidSMh5rxnuuoWnDjqCa8v8VBnFBOscC6dyPuW49mXT8fqBIOWNXq/maENg15tqyKgUAZQp58DRPdxJ//uu8pIRSqjSDpm4JKhJSxRqWAGyO+7BZsy0q/JUFgaADUd0eijDABTF2qYG4/UbRjK/FlX/Pih0sCcQMKuwWSu/KXIFI9DgkdM+75fdwomogigXBhDuDdKNrxLonXH/A2VfGDx65TJBTdExBopx8p2MlwenbfeYb4szcgg5u8CMTq8Zj6SciAmrSD2fpsf9sKEstv7bFYlRZGpD0gQqQ/7aIlm/Pf+EG0/XXc9tdxAZwy76y28QKcEy/BDDsLghVZyeOceAlm5m9IrPwP3I2PlVRoqSpdAVU2QT/Jzu6U4dRnsIN248kP+N3oIac7d+29yMAGnFGfxBl7ZVb2ZqmoJXjpHUjtGSRWfqtk8mopusugdPktSLrIkLEQSD8WSbvb+/a/AlAX3b+VxOq7iT7ySeJPzUH3ZXFJmXEIjP9HgtO/62surd6ISKtBZLvfgqSLM3xKZv5Xu9ZCPIPfb+Ig7sbHiD58OYnXfpR5Jh0xOGNm4oz7Ymb1Csc+A1ISQTXpIMPOyqi8bXuJrMyw8S4SK+YTX3Zr5qZGMQTOuRGpGpF5v3lGVFsMri2Vh7a+yfT8141jt6/KoUPF3fBzEqvuzHjjJOHBOKenzItSRJzNJlyR2Oi3GOlghp6KBNPPj6WxDnTPmzn2qiRevTurc2Sn6fKM83nlm7JAbLVh0K7dIKWx7esDqZ+cUTiJ3b7q6Oyx2eBGcTf+KuNqMrARKT8q4L6ISHzp73fuMXIlLmh2vqT5FKd6vHfCk+xX74RwRn4so/bsjlfzJBno3rczj+h3Qkilr7cdvHLlUtwAgCJrBM04m3jecMoIXvx9zPEnowfbsW0vYXeu9pSkLoEJ16ZOLZgMG8due75w8qaLj1O0qj4Hh6ILZSXojX4JYxrO99xhjOMZHU75LM4pnwG35zHFCZCJ66nGD3qjLk/IcaMz8h45RKI7bzJkigp/hJ7IhvKQfQ7xya1DHJzTP5/k+Va8bK9OkEz9im3rH/KXy1kMZkTfCdWSCxH3z11H0C4TfwZ6FCyz2naj+HPH/OAmnBHT8tqm5nH9NSdeiqnNPL5Iu/cmyaJXHAQ218xp74Te8cEij/khinPaVXmPwDPDzsE57fNeQlGnjOwiC7yUwsHp38vK9Ki71kLcLxuSPP7eX+9LLvIMql8tqhxlg3DG/G3emzVNH8c0fdzbbHVsxbauRHevx25/Ge3a5Zkv3RhJrVxOCKmowzn1Ki91cZZ5uNxtz/t2sqTw5Ht/H1JwWaD22Uhs+36gqliCOKd8NifnuWNigpjjRmGO6wneUOvdu9DZih5ogYPtaPQA2BgEypHyochxozHHn5zbrBI7gH33mfx8hoyR1jeCw54Hz+H+sLkrsqjhdi3iKJaqEZgTL8HUnoWpP7fHX7l/eRAlw938BPHf/rMvI1iEH4Xntl333r8PW1wMstRFb6JI4XC6fyvu2vtw+QkEy5GKOsyIqZia8ZjhU7xrbLJ5PPETN4a79id+Tc9qRBb3fuGob697YcNG8DuVoXhr4cAGzPCLvOzuDRcgA/w0/aWHu/n/iP92lk+jVzaVnXbSWJm+/NA5Z5LtoT4AHPOyh8KintfFvi24+7bgrvsfL1x0yCkEJn0tY7NlsdDuPSRemO/n5ure3sqFJOmE4yEWCRIpnljpoJ7nxe71fduE/XQuc2PEf3c92ulXNKFE40G958hXj1Jw1ay23ZajC5YETih1VEMiQnzZv5BYex/a8S7Ei5gFNtZF7Ok52K3LitNfcpZWzWo7KqF20id4I7JIVWdTSlnfATl+DBJM7hNtd6/3clrZh0iYADKwEVN/HoGzvoIcV6AYd1XsnvUklv9r5gla8ovrKrcneyNpyFx4buvbGHmosDJljunDJ+uw28hsAu14F3fjo6nXQ9Xs10p10T1vEn/h68R++Rm/lYsgj1fOa12T7L3UNjgrPwa9mhJKL2xqU6cTSeaeIxX1SFXyxKB6YBuxJ67FDBnjZQuorEWqTkSqGiFY2euQQ8GNQ2SvF2q6523cbc95+wEfT4t6oeLIN1K9mVLB5c0ty7sXNjwA+vnCyJUhgXLvap0kaKwr6XVzpu7slBYpu+0FdM8G3D0bel4Rb3YQp2eW6D25WbA99wiXkGM7gIj8smx2y9pU7/cZ1ey6oZuBkvhEMmQMksInWne/kTRUM3WQuHoutUe8hk14x4zxg95BwaH/DvZcnVcSX0VvLMa5pa8CfSq48oZ3dorhP/MrU3aY+kmpbwPd8crR0QSB8tRXyiaiJRHemSsGmR+evbXPY95j5iU40Bn7JsKGY5UrNKlDRjVp/ispH4JUnZC8RmQvemBbHqXzhZaQln/vWIWOqeDqW3YfsFb+BT+n6mBFykN3jXV6U/QRmOFTUo/4rcv8vv83V6xVZsu8Tcd0W0krs0jFvNYnEO7PXa4sMQHctx/D7lqLHnGIrnvfTnJhliDVKe4fRLE7U+5J+gWKPFgxr+3X6ZRN21UhHAzfEIlFJ4KOy160LIl2kFj5TTBBZEA1UjMeUz8ZU3cOdluS27idoHdpVjKsWxoel1kiIusi8WBz2uUzabx7wfApIvZZLZXkpU4IkKMc7KSyjrJ/eCnpNTd6oJXo/ZNLcUecDgnHyDmhOa1pX4GaUfKn8nnbXkC43jcPzCNxY8m9J02QxGv3YNvXHbW7ti0r+qdyBQXz9UyU61XLgu6FDctAp2VTt7iId2lH/WTvvsPGC3DX/Bh3w8N+C5YxAk+Hm9syvt4tKwXrkqZB0VhkmUI/TEXcY37sRyi8Vh4KT5NZWzoyrZvVjY4ya0tHwi2bgZJl+nQ/6V/KRXirPOBelo1yveo5ELmr/hR1WQ74GmX1AWangWllzW1Zx8HmdCdreHbbWwp/A5SYB8gHgojBfCwX5UKOCgYY0Ny2EswMPlJyPomAmVHW3LIu14bycqtyeXPLcoM5F/AxOfIHhh0Kl5Y3tyzPR2N5uza7rLllnYFpSH/ceJUIylviMM2bFfND3r019O7amu6E85SAP1d+9VMEVifcshmVN7yT11kw7xffy1d27ioPhacJPF0yFq9SRlCQ5WWh8PR8K9drvoB0L2y8Fey3yOBQ48OEIHGE68NzW+8uXB8FpmtB/ZmOyP2Knl7ovvoTgqxRtc3l87YXNAFO3qfoI6mY17Y64jgXITxAifh3+YkILnBfmZZfVGjlQpFdYiML6z+lsBjol5dx5YH1gt4Ubt7+VLE6LPgI7k24ue1XYR0w2iD/zodrNFsx3B428UnFVC746NQeuWtEE9b9rqp+zk85CoyCPOC6oZsLsUNOB9+/2OhdjePV1dsU/TQlFguVLQIJFXkIlXvzZZHKQZbSoHNBwwRHuBmYCZqnC4yKi0AE4b+jrlk06PqWkkjyWjIKfo/9S+qHBuNyncC1qjqKEpTxCBRkM+gD8RCLkoVw+knJfnm6bFogvn7j6VZ1jqrMgNK6RFNEOkB/ZDBLQ3NbXvJbnlSUrIJ7s2rJxOBp8R0XCcxQ1StEaFItsuyComwRYx5NWHnmzVDN78+e9Urpp2H2W4Bs0MWnVsbsgUtdcSeLylRgInl35ZU46AuKrAFZWR6yz0mJTb/p0C8VfCSPzMSZeXHtkGgidCa4o3puNR+sqg2C1IhQ4V3CKUNAnZ7b3tp77ozahNLlXU4inbh2RbgisZFBu3Z7ubT7N/8PTXEdT6agw14AAAAASUVORK5CYII=";

/***/ })

}]);