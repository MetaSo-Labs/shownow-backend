"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5724],{

/***/ 82659:
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18_v3wfupshtys2iy7kbdcdfkvksq/node_modules/@ant-design/pro-form/es/layouts/ProForm/index.js + 2 modules
var ProForm = __webpack_require__(35275);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-card@2.9.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18._4z7bzqawqzoenzh4tblcdyicca/node_modules/@ant-design/pro-card/es/ProCard.js + 9 modules
var ProCard = __webpack_require__(59135);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18_v3wfupshtys2iy7kbdcdfkvksq/node_modules/@ant-design/pro-form/es/components/Text/index.js
var Text = __webpack_require__(82952);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18_v3wfupshtys2iy7kbdcdfkvksq/node_modules/@ant-design/pro-form/es/components/Digit/index.js
var Digit = __webpack_require__(89584);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(16598);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(57227);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(71340);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(61966);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(12798);
;// CONCATENATED MODULE: ./src/pages/dashboard/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(77485);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
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
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
        width: "md",
        name: "btc_rpc_host",
        label: "BTC RPC Host",
        placeholder: "Example: 127.0.0.1:8332"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
        width: "md",
        name: "btc_rpc_user",
        label: "BTC RPC Username",
        placeholder: "Enter the username for accessing BTC RPC"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
        width: "md",
        name: "btc_rpc_pass",
        label: "BTC RPC Password",
        placeholder: "Enter the password for accessing BTC RPC"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
        width: "md",
        name: "btc_rpc_rawtx",
        label: "BTC ZMQ Raw Transaction URL",
        placeholder: "Example: tcp://127.0.0.1:18332"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
        orientation: "left",
        children: "MVC RPC Config"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
        width: "md",
        name: "mvc_rpc_host",
        label: "MVC RPC Host",
        placeholder: "Example: 127.0.0.1:8332"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
        width: "md",
        name: "mvc_rpc_user",
        label: "MVC RPC Username",
        placeholder: "Enter the username for accessing MVC RPC"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
        width: "md",
        name: "mvc_rpc_pass",
        label: "MVC RPC Password",
        placeholder: "Enter the password for accessing MVC RPC"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
        width: "md",
        name: "mvc_rpc_rawtx",
        label: "MVC ZMQ Raw Transaction URL",
        placeholder: "Example: tcp://127.0.0.1:18332"
      })]
    })
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(48020);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(35691);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(72948);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-table@3.18.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@1_jenkmg2xpndenp2zib3r2nsveu/node_modules/@ant-design/pro-table/es/Table.js + 83 modules
var Table = __webpack_require__(8142);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/popconfirm/index.js + 2 modules
var popconfirm = __webpack_require__(71910);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(23674);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18_v3wfupshtys2iy7kbdcdfkvksq/node_modules/@ant-design/pro-form/es/layouts/ModalForm/index.js
var ModalForm = __webpack_require__(37772);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/index.js + 21 modules
var es_form = __webpack_require__(31571);
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
              return (0,api/* addBlockedItem */.tB)({
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
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
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
                return (0,api/* deleteBlockedItem */.o5)({
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
                return (0,api/* getBlockedList */.O7)({
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/QuestionCircleOutlined.js + 1 modules
var QuestionCircleOutlined = __webpack_require__(65530);
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
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit/* default */.Z, {
                  width: "md",
                  name: "follow_service_fee_amount",
                  label: "Follow Service Fee Amount",
                  placeholder: "Enter the fee amount for follow actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit/* default */.Z, {
                  width: "md",
                  name: "post_service_fee_amount",
                  label: "Post Service Fee Amount",
                  placeholder: "Enter the fee amount for post actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit/* default */.Z, {
                  width: "md",
                  name: "comment_service_fee_amount",
                  label: "Comment Service Fee Amount",
                  placeholder: "Enter the fee amount for comment actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit/* default */.Z, {
                  width: "md",
                  name: "like_service_fee_amount",
                  label: "Like Service Fee Amount",
                  placeholder: "Enter the fee amount for like actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit/* default */.Z, {
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
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit/* default */.Z, {
                  width: "md",
                  name: "follow_service_fee_amount",
                  label: "Follow Service Fee Amount",
                  placeholder: "Enter the fee amount for follow actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit/* default */.Z, {
                  width: "md",
                  name: "post_service_fee_amount",
                  label: "Post Service Fee Amount",
                  placeholder: "Enter the fee amount for post actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit/* default */.Z, {
                  width: "md",
                  name: "comment_service_fee_amount",
                  label: "Comment Service Fee Amount",
                  placeholder: "Enter the fee amount for comment actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit/* default */.Z, {
                  width: "md",
                  name: "like_service_fee_amount",
                  label: "Like Service Fee Amount",
                  placeholder: "Enter the fee amount for like actions",
                  fieldProps: {
                    precision: 0,
                    suffix: 'SAT'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Digit/* default */.Z, {
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
                return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return (0,dashboard/* saveDomain */.T5)(values);
                    case 3:
                      _context2.next = 5;
                      return updateFees();
                    case 5:
                      message/* default */.ZP.success('Save successfully');
                      _context2.next = 16;
                      break;
                    case 8:
                      _context2.prev = 8;
                      _context2.t0 = _context2["catch"](0);
                      if (!(_context2.t0.response && _context2.t0.response.status === 401)) {
                        _context2.next = 14;
                        break;
                      }
                      message/* default */.ZP.error('Unauthorized');
                      setLogined(false);
                      return _context2.abrupt("return");
                    case 14:
                      console.log(_context2.t0);
                      message/* default */.ZP.error(_context2.t0.message);
                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, null, [[0, 8]]);
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
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
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
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
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
      }],
      onChange: function onChange(key) {
        setActiveKey(key);
      }
    }
  });
});

/***/ })

}]);