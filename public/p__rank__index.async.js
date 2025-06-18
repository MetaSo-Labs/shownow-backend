"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[5430],{

/***/ 57777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81581);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);



/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var children = _ref.children,
    _ref$wrapper = _ref.wrapper,
    wrapper = _ref$wrapper === void 0 ? false : _ref$wrapper,
    className = _ref.className,
    style = _ref.style;
  var _useIntl = (0,umi__WEBPACK_IMPORTED_MODULE_1__.useIntl)(),
    formatMessage = _useIntl.formatMessage;
  if (!children) return null;
  if (wrapper) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: className,
    style: style,
    children: formatMessage({
      id: children
    })
  });
  return formatMessage({
    id: children
  });
});

/***/ }),

/***/ 92805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ rank; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(19391);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(10443);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/select/index.js
var es_select = __webpack_require__(23533);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(86821);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(62319);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/index.js + 33 modules
var table = __webpack_require__(98421);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(18051);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/gapSize.js
var gapSize = __webpack_require__(15654);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1225);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(21275);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var es = __webpack_require__(83509);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/flex/utils.js

const flexWrapValues = ['wrap', 'nowrap', 'wrap-reverse'];
const justifyContentValues = ['flex-start', 'flex-end', 'start', 'end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch', 'normal', 'left', 'right'];
const alignItemsValues = ['center', 'start', 'end', 'flex-start', 'flex-end', 'self-start', 'self-end', 'baseline', 'normal', 'stretch'];
const genClsWrap = (prefixCls, props) => {
  const wrap = props.wrap === true ? 'wrap' : props.wrap;
  return {
    [`${prefixCls}-wrap-${wrap}`]: wrap && flexWrapValues.includes(wrap)
  };
};
const genClsAlign = (prefixCls, props) => {
  const alignCls = {};
  alignItemsValues.forEach(cssKey => {
    alignCls[`${prefixCls}-align-${cssKey}`] = props.align === cssKey;
  });
  alignCls[`${prefixCls}-align-stretch`] = !props.align && !!props.vertical;
  return alignCls;
};
const genClsJustify = (prefixCls, props) => {
  const justifyCls = {};
  justifyContentValues.forEach(cssKey => {
    justifyCls[`${prefixCls}-justify-${cssKey}`] = props.justify === cssKey;
  });
  return justifyCls;
};
function createFlexClassNames(prefixCls, props) {
  return classnames_default()(Object.assign(Object.assign(Object.assign({}, genClsWrap(prefixCls, props)), genClsAlign(prefixCls, props)), genClsJustify(prefixCls, props)));
}
/* harmony default export */ var utils = (createFlexClassNames);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/flex/style/index.js


const genFlexStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: 'flex',
      margin: 0,
      padding: 0,
      '&-vertical': {
        flexDirection: 'column'
      },
      '&-rtl': {
        direction: 'rtl'
      },
      '&:empty': {
        display: 'none'
      }
    }
  };
};
const genFlexGapStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      '&-gap-small': {
        gap: token.flexGapSM
      },
      '&-gap-middle': {
        gap: token.flexGap
      },
      '&-gap-large': {
        gap: token.flexGapLG
      }
    }
  };
};
const genFlexWrapStyle = token => {
  const {
    componentCls
  } = token;
  const wrapStyle = {};
  flexWrapValues.forEach(value => {
    wrapStyle[`${componentCls}-wrap-${value}`] = {
      flexWrap: value
    };
  });
  return wrapStyle;
};
const genAlignItemsStyle = token => {
  const {
    componentCls
  } = token;
  const alignStyle = {};
  alignItemsValues.forEach(value => {
    alignStyle[`${componentCls}-align-${value}`] = {
      alignItems: value
    };
  });
  return alignStyle;
};
const genJustifyContentStyle = token => {
  const {
    componentCls
  } = token;
  const justifyStyle = {};
  justifyContentValues.forEach(value => {
    justifyStyle[`${componentCls}-justify-${value}`] = {
      justifyContent: value
    };
  });
  return justifyStyle;
};
const prepareComponentToken = () => ({});
/* harmony default export */ var flex_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Flex', token => {
  const {
    paddingXS,
    padding,
    paddingLG
  } = token;
  const flexToken = (0,es.mergeToken)(token, {
    flexGapSM: paddingXS,
    flexGap: padding,
    flexGapLG: paddingLG
  });
  return [genFlexStyle(flexToken), genFlexGapStyle(flexToken), genFlexWrapStyle(flexToken), genAlignItemsStyle(flexToken), genJustifyContentStyle(flexToken)];
}, prepareComponentToken, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: false
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/flex/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







const Flex = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      rootClassName,
      className,
      style,
      flex,
      gap,
      children,
      vertical = false,
      component: Component = 'div'
    } = props,
    othersProps = __rest(props, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]);
  const {
    flex: ctxFlex,
    direction: ctxDirection,
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('flex', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = flex_style(prefixCls);
  const mergedVertical = vertical !== null && vertical !== void 0 ? vertical : ctxFlex === null || ctxFlex === void 0 ? void 0 : ctxFlex.vertical;
  const mergedCls = classnames_default()(className, rootClassName, ctxFlex === null || ctxFlex === void 0 ? void 0 : ctxFlex.className, prefixCls, hashId, cssVarCls, utils(prefixCls, props), {
    [`${prefixCls}-rtl`]: ctxDirection === 'rtl',
    [`${prefixCls}-gap-${gap}`]: (0,gapSize/* isPresetSize */.n)(gap),
    [`${prefixCls}-vertical`]: mergedVertical
  });
  const mergedStyle = Object.assign(Object.assign({}, ctxFlex === null || ctxFlex === void 0 ? void 0 : ctxFlex.style), style);
  if (flex) {
    mergedStyle.flex = flex;
  }
  if (gap && !(0,gapSize/* isPresetSize */.n)(gap)) {
    mergedStyle.gap = gap;
  }
  return wrapCSSVar(/*#__PURE__*/react.createElement(Component, Object.assign({
    ref: ref,
    className: mergedCls,
    style: mergedStyle
  }, (0,omit/* default */.Z)(othersProps, ['justify', 'wrap', 'align'])), children));
});
if (false) {}
/* harmony default export */ var flex = (Flex);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(81581);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./src/Components/NumberFormat/index.tsx
var NumberFormat = __webpack_require__(38161);
// EXTERNAL MODULE: ./src/Components/UserInfo/PendingUser.tsx
var PendingUser = __webpack_require__(69101);
// EXTERNAL MODULE: ./src/assets/rank/1.svg
var _1 = __webpack_require__(37251);
// EXTERNAL MODULE: ./src/assets/rank/2.svg
var _2 = __webpack_require__(15366);
// EXTERNAL MODULE: ./src/assets/rank/3.svg
var _3 = __webpack_require__(91332);
;// CONCATENATED MODULE: ./src/pages/rank/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var es_modal = __webpack_require__(90789);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/notification/index.js + 8 modules
var notification = __webpack_require__(28169);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/index.js + 8 modules
var descriptions = __webpack_require__(97116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./src/request/metaso.ts
var metaso = __webpack_require__(57828);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-list@2.6.7_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__rea_818389a1765801fb5d0bff9d4ee805c7/node_modules/@ant-design/pro-list/es/index.js + 10 modules
var pro_list_es = __webpack_require__(73820);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(45730);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/file-text.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const FileText = (0,createLucideIcon/* default */.Z)("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);


//# sourceMappingURL=file-text.js.map

// EXTERNAL MODULE: ./node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js
var arrow_up_right = __webpack_require__(79038);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(16483);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./src/assets/dashboard/mataso.svg
var mataso = __webpack_require__(38232);
;// CONCATENATED MODULE: ./src/Components/UserMetaSoReward/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/UserMetaSoReward/Records.tsx


















/* harmony default export */ var Records = (function () {
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    admin = _useModel.admin;
  var _useModel2 = (0,_umi_production_exports.useModel)('user'),
    user = _useModel2.user;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var showModal = function showModal() {
    setIsModalOpen(true);
  };
  var handleOk = function handleOk() {
    setIsModalOpen(false);
  };
  var handleCancel = function handleCancel() {
    setIsModalOpen(false);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
      size: "small",
      type: "text",
      onClick: showModal,
      icon: /*#__PURE__*/(0,jsx_runtime.jsx)(FileText, {})
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_modal/* default */.Z, {
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "Historical Records"
      }),
      open: isModalOpen,
      onOk: handleOk,
      onCancel: handleCancel,
      footer: null,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(pro_list_es/* ProList */.Rs, {
        search: false,
        rowKey: "txId",
        ghost: true,
        request: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
          var params,
            res,
            _args = arguments;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                _context.next = 3;
                return (0,metaso/* getUserClaimRecords */.ZL)({
                  cursor: ((params.current || 1) - 1) * 5,
                  size: 5,
                  address: user.address
                });
              case 3:
                res = _context.sent;
                return _context.abrupt("return", {
                  data: res.data.list,
                  success: true,
                  total: res.data.total
                });
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })),
        pagination: {
          pageSize: 5
        },
        showActions: "hover",
        rowClassName: "claim-record",
        grid: {
          gutter: 16,
          column: 1
        },
        metas: {
          title: {
            render: function render(text, record) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: mataso/* default */.Z,
                  alt: "mataso",
                  style: {
                    display: 'flex',
                    width: 50,
                    height: 50
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                  strong: true,
                  style: {
                    fontSize: 20
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                    value: record.claimAmount,
                    suffix: " $METASO"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
                  href: "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(record.txId),
                  target: "_blank",
                  children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)(arrow_up_right/* default */.Z, {
                    size: 20
                  })]
                })]
              });
            }
          },
          actions: {
            render: function render(text, record) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                direction: "vertical",
                align: "end",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                  type: record.orderState === 2 ? record.confirmationState === 1 ? 'warning' : 'success' : 'danger',
                  children: record.orderState === 2 ? record.confirmationState === 1 ? 'Pending' : 'Success' : 'Failed'
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                  type: "secondary",
                  children: dayjs_min_default()(record.createTime).format('YYYY-MM-DD HH:mm:ss')
                })]
              });
            }
          }
        }
      })
    })]
  });
});
// EXTERNAL MODULE: ./src/utils/metaso.ts
var utils_metaso = __webpack_require__(48606);
// EXTERNAL MODULE: ./node_modules/.pnpm/decimal.js@10.5.0/node_modules/decimal.js/decimal.mjs
var decimal = __webpack_require__(25688);
;// CONCATENATED MODULE: ./src/Components/UserMetaSoReward/MetablockList.tsx






/* harmony default export */ var MetablockList = (function (_ref) {
  var _data$data;
  var address = _ref.address,
    host = _ref.host;
  var _theme$useToken = theme/* default */.Z.useToken(),
    colorBorder = _theme$useToken.token.colorBorder;
  var columns = [{
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Height"
    }),
    dataIndex: "metaBlockHeight",
    key: "metaBlockHeight",
    width: 150
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Timestamp (utc)"
    }),
    dataIndex: "metaBlockTime",
    key: "metaBlockTime",
    width: 200,
    render: function render(text) {
      return dayjs_min_default()(text).format('MM-DD HH:mm:ss');
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "State"
    }),
    dataIndex: "status",
    key: "status",
    width: 100,
    render: function render(text) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        style: {
          color: text === 'claimable' ? '#52c41a' : text === 'fail' ? '#ff4d4f' : '#FC7345'
        },
        children: text
      });
    }
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Metaso"
    }),
    dataIndex: "reward",
    key: "reward",
    width: 150
  }];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['fetchUserBlockList', address, host],
      queryFn: function queryFn() {
        return (0,metaso/* fetchUserMetablockList */.N6)({
          host: host,
          address: address
        });
      }
    }),
    data = _useQuery.data,
    isFetching = _useQuery.isFetching,
    refetch = _useQuery.refetch;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
    style: {
      padding: 0,
      overflow: 'hidden'
    },
    styles: {
      body: {
        padding: 0
      }
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
      size: "small",
      rowKey: "metaBlockHeight",
      columns: columns,
      dataSource: (data === null || data === void 0 || (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.list) || [],
      loading: isFetching,
      pagination: false
    })
  });
});
;// CONCATENATED MODULE: ./src/Components/UserMetaSoReward/index.tsx

















/* harmony default export */ var UserMetaSoReward = (function (_ref) {
  var address = _ref.address,
    host = _ref.host;
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel.showConf,
    admin = _useModel.admin;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    commiting = _useState2[0],
    setCommiting = _useState2[1];
  var _Modal$useModal = es_modal/* default */.Z.useModal(),
    _Modal$useModal2 = slicedToArray_default()(_Modal$useModal, 2),
    modal = _Modal$useModal2[0],
    contextHolder = _Modal$useModal2[1];
  var _notification$useNoti = notification/* default */.ZP.useNotification(),
    _notification$useNoti2 = slicedToArray_default()(_notification$useNoti, 2),
    api = _notification$useNoti2[0],
    contextHolder2 = _notification$useNoti2[1];
  var _useModel2 = (0,_umi_production_exports.useModel)('user'),
    feeRate = _useModel2.feeRate;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorText = _theme$useToken$token.colorText;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['fetchUserCoinInfo', address, host],
      queryFn: function queryFn() {
        return (0,metaso/* fetchUserCoinInfo */.Hr)({
          host: host,
          address: address
        });
      }
    }),
    data = _useQuery.data,
    isFetching = _useQuery.isFetching,
    refetch = _useQuery.refetch;
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
      message: 'Claim Success',
      description: txid,
      btn: btn,
      key: key
    });
  };
  var handleClaim = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var publicKey, _address, signature, _yield$claimPreUser, code, msg, order, _yield$buildClaimPsbt, fee, confirmed, _yield$buildClaimPsbt2, rawTx, commitRes;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setCommiting(true);
            _context.prev = 1;
            if (!(Number(data === null || data === void 0 ? void 0 : data.data.claimableReward) <= 0)) {
              _context.next = 4;
              break;
            }
            throw new Error('No pending reward');
          case 4:
            _context.next = 6;
            return window.metaidwallet.btc.getPublicKey();
          case 6:
            publicKey = _context.sent;
            _context.next = 9;
            return window.metaidwallet.btc.getAddress();
          case 9:
            _address = _context.sent;
            if (!(address !== _address)) {
              _context.next = 12;
              break;
            }
            throw new Error('Please use the default address');
          case 12:
            _context.next = 14;
            return window.metaidwallet.btc.signMessage('metaso.network');
          case 14:
            signature = _context.sent;
            _context.next = 17;
            return (0,metaso/* claimPreUser */.eE)({
              receiveAddress: address,
              host: host,
              networkFeeRate: feeRate,
              claimAmount: data.data.claimableReward
            }, {
              headers: {
                "X-Signature": signature,
                "X-Public-Key": publicKey
              }
            });
          case 17:
            _yield$claimPreUser = _context.sent;
            code = _yield$claimPreUser.code;
            msg = _yield$claimPreUser.message;
            order = _yield$claimPreUser.data;
            if (!(code !== 0)) {
              _context.next = 23;
              break;
            }
            throw new Error(msg);
          case 23:
            _context.next = 25;
            return (0,utils_metaso/* buildClaimPsbt */.Lc)(order, config/* curNetwork */.eM, address, feeRate, false, false);
          case 25:
            _yield$buildClaimPsbt = _context.sent;
            fee = _yield$buildClaimPsbt.fee;
            _context.next = 29;
            return modal.confirm({
              title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                children: "Trade Confirm"
              }),
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
                    label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                      children: "Amount"
                    }),
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: order.claimAmount,
                      suffix: " $METASO"
                    })
                  }, {
                    label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                      children: "Receive Address"
                    }),
                    children: address
                  }, {
                    label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                      children: "Gas Fee"
                    }),
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: new decimal/* default */.Z(fee).add(order.minerGas).toFixed(8),
                      suffix: " SAT"
                    })
                  }, {
                    label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                      children: "Fee Rate"
                    }),
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                      value: feeRate,
                      suffix: " sat/vB"
                    })
                  }]
                })
              })
            });
          case 29:
            confirmed = _context.sent;
            if (confirmed) {
              _context.next = 32;
              break;
            }
            throw new Error('canceled');
          case 32:
            _context.next = 34;
            return (0,utils_metaso/* buildClaimPsbt */.Lc)(order, config/* curNetwork */.eM, address, feeRate);
          case 34:
            _yield$buildClaimPsbt2 = _context.sent;
            rawTx = _yield$buildClaimPsbt2.rawTx;
            _context.next = 38;
            return (0,metaso/* claimCommitUser */.vd)({
              orderId: order.orderId,
              commitTxOutIndex: 0,
              commitTxRaw: rawTx
            });
          case 38:
            commitRes = _context.sent;
            if (!(commitRes.code !== 0)) {
              _context.next = 41;
              break;
            }
            throw new Error(commitRes.message);
          case 41:
            successNotice(commitRes.data.commitTxId);
            _context.next = 44;
            return refetch();
          case 44:
            _context.next = 49;
            break;
          case 46:
            _context.prev = 46;
            _context.t0 = _context["catch"](1);
            if (_context.t0.message === 'Insufficient funds to reach the target amount') {
              message/* default */.ZP.error('Insufficient BTC for network fee');
            } else {
              message/* default */.ZP.error(_context.t0.message);
            }
          case 49:
            setCommiting(false);
          case 50:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 46]]);
    }));
    return function handleClaim() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
        level: 5,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "Metaso"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Records, {})]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
      loading: isFetching,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              color: colorPrimary,
              fontSize: 20,
              fontWeight: 'bold'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: data === null || data === void 0 ? void 0 : data.data.claimableReward,
              suffix: " $METASO"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            type: "secondary",
            style: {
              fontSize: 12
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Claimable"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            color: "primary",
            variant: "filled",
            disabled: (data === null || data === void 0 ? void 0 : data.data.claimableReward) <= 0,
            onClick: handleClaim,
            loading: commiting,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Claim"
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          type: "secondary",
          style: {
            fontSize: 12
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
            children: "Pending"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              color: colorText,
              fontSize: 12,
              fontWeight: 'bold'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: (data === null || data === void 0 ? void 0 : data.data.currentUserExpectedPendingReward) || 0,
              suffix: " $METASO"
            })
          }), (data === null || data === void 0 ? void 0 : data.data.progressRemainBlockCount) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              color: '#FC7345',
              fontSize: 10
            },
            children: ["You still need ", data === null || data === void 0 ? void 0 : data.data.progressRemainBlockCount, " btc blocks to claim it"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          type: "secondary",
          style: {
            fontSize: 12
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
            children: "Newly added"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            color: colorText,
            fontSize: 12,
            fontWeight: 'bold'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
            value: data === null || data === void 0 ? void 0 : data.data.newlyAddedMetaBlockReward,
            suffix: " $METASO",
            prefix: "+"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          type: "secondary",
          style: {
            fontSize: 12
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
            children: "Total"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            color: colorText,
            fontSize: 12,
            fontWeight: 'bold'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
            value: data === null || data === void 0 ? void 0 : data.data.totalReward,
            suffix: " $METASO",
            prefix: "+"
          })
        })]
      })]
    }), contextHolder, contextHolder2, /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
      level: 5,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "Metablock"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetablockList, {
      address: address,
      host: host
    })]
  });
});
;// CONCATENATED MODULE: ./src/pages/rank/index.tsx
















/* harmony default export */ var rank = (function () {
  var _useState = (0,react.useState)([]),
    _useState2 = slicedToArray_default()(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = (0,react.useState)(1),
    _useState4 = slicedToArray_default()(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    admin = _useModel.admin,
    showConf = _useModel.showConf;
  var _useModel2 = (0,_umi_production_exports.useModel)('user'),
    isLogin = _useModel2.isLogin,
    user = _useModel2.user;
  (0,react.useEffect)(function () {
    setOptions([{
      value: 1,
      label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "Now"
      })
    }, {
      value: 2,
      label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "2 Day"
      })
    }, {
      value: 3,
      label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "3 Day"
      })
    }, {
      value: 4,
      label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "4 Day"
      })
    }, {
      value: 5,
      label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "5 Day"
      })
    }, {
      value: 6,
      label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "6 Day"
      })
    }, {
      value: 7,
      label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "This Past Week"
      })
    }]);
  }, []);
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['getMetaBlockNewest'],
      queryFn: function queryFn() {
        return (0,api/* getMetaBlockNewest */.Nx)();
      }
    }),
    _newest = _useQuery.data;
  var _useQuery2 = (0,useQuery/* useQuery */.a)({
      queryKey: ['statisticsndv', admin === null || admin === void 0 ? void 0 : admin.host],
      enabled: Boolean(admin === null || admin === void 0 ? void 0 : admin.host),
      queryFn: function queryFn() {
        return (0,api/* getHostNDV */.vg)({
          host: admin.host,
          cursor: 0,
          size: 1
        });
      }
    }),
    _ndv = _useQuery2.data,
    _ndvFetching = _useQuery2.isFetching;
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
        return (0,api/* getMetaBlockHostValue */.Ic)({
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
  var _useQuery4 = (0,useQuery/* useQuery */.a)({
      queryKey: ['_userhostValue', startAndEndHeight, admin === null || admin === void 0 ? void 0 : admin.host, isLogin, user === null || user === void 0 ? void 0 : user.address],
      enabled: Boolean((admin === null || admin === void 0 ? void 0 : admin.host) && startAndEndHeight && isLogin && (user === null || user === void 0 ? void 0 : user.address)),
      queryFn: function queryFn() {
        return (0,api/* getMetaBlockHostUserValue */.SM)({
          size: 100,
          cursor: 0,
          host: admin.host,
          address: user.address,
          // timeBegin: Math.floor(new Date().getTime() / 1000) - 60 * 60 * 24 * 7 * Number(value),
          // timeEnd: Math.floor(new Date().getTime() / 1000)
          heightBegin: startAndEndHeight.heightBegin,
          heightEnd: startAndEndHeight.heightEnd
        });
      }
    }),
    _userValue = _useQuery4.data,
    _userValueFetching = _useQuery4.isFetching;
  var _useQuery5 = (0,useQuery/* useQuery */.a)({
      queryKey: ['_listhostValue', startAndEndHeight, admin === null || admin === void 0 ? void 0 : admin.host],
      enabled: Boolean((admin === null || admin === void 0 ? void 0 : admin.host) && startAndEndHeight),
      queryFn: function queryFn() {
        return (0,api/* getMetaBlockHostUserList */.Y5)({
          size: 10,
          cursor: 0,
          host: admin.host,
          // timeBegin: Math.floor(new Date().getTime() / 1000) - 60 * 60 * 24 * 7 * Number(value),
          // timeEnd: Math.floor(new Date().getTime() / 1000)
          heightBegin: startAndEndHeight.heightBegin,
          heightEnd: startAndEndHeight.heightEnd
        });
      }
    }),
    _listValue = _useQuery5.data,
    _listValueFetching = _useQuery5.isFetching;
  var hostValue = (0,react.useMemo)(function () {
    if (!_hostValue || !_hostValue.data.list) return 0;
    return _hostValue.data.list.reduce(function (acc, cur) {
      return acc + Number(cur.mdvDeltaValue);
    }, 0);
  }, [_hostValue]);
  var totalNDV = (0,react.useMemo)(function () {
    if (!_ndv || !_ndv.data) return 0;
    return _ndv.data[0].dataValue;
  }, [_ndv]);
  var userValue = (0,react.useMemo)(function () {
    if (!_userValue || !_userValue.data.list) return 0;
    return _userValue.data.list.reduce(function (acc, cur) {
      return acc + Number(cur.dataValue);
    }, 0);
  }, [_userValue]);
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
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
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
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
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
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
    theme: {
      components: {
        Table: {
          headerBg: 'transparent',
          headerSplitColor: 'transparent'
        }
      }
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "rankPage ".concat(showConf === null || showConf === void 0 ? void 0 : showConf.theme),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
        title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "Contribution value"
        }),
        bordered: false,
        styles: {
          header: {
            borderBottomColor: 'transparent'
          }
        },
        extra: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Timeframe"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
            placeholder: "Select a time",
            variant: "filled",
            style: {
              flex: 1,
              width: 160
            },
            options: options,
            value: value,
            onChange: function onChange(value) {
              setValue(value);
            }
          })]
        }),
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
          gutter: [12, 12],
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 12,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
              loading: _ndvFetching,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
                level: 4,
                style: {
                  padding: 0,
                  margin: 0
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                  value: totalNDV,
                  precision: 4
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                type: "secondary",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "total NDV"
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 12,
            style: {
              visibility: isLogin ? 'visible' : 'hidden'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
              loading: _userValueFetching || _hostValueFetching,
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Title, {
                level: 4,
                style: {
                  padding: 0,
                  margin: 0
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                  value: userValue,
                  precision: 4
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
                  value: hostValue ? Number(userValue) / hostValue * 100 : '--',
                  precision: 2,
                  prefix: " (",
                  suffix: "%)"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                type: "secondary",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "My contribution value"
                })
              })]
            })
          })]
        }), isLogin && (user === null || user === void 0 ? void 0 : user.address) && /*#__PURE__*/(0,jsx_runtime.jsx)(UserMetaSoReward, {
          address: user.address,
          host: admin.host
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
          level: 5,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
            children: "Rank"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
          style: {
            padding: 0,
            overflow: 'hidden'
          },
          styles: {
            body: {
              padding: 0
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
        })]
      }), isLogin && (user === null || user === void 0 ? void 0 : user.address) && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
        bordered: false,
        style: {
          marginTop: 20
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(flex, {
          align: "center",
          gap: 12,
          justify: "space-between",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex, {
            align: "center",
            gap: 12,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUser/* default */.Z, {
              address: user.address
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              style: {
                background: 'linear-gradient(125deg, #FF5D5D 15%, #FFDD6F 52%, #63FFBE 87%)',
                borderRadius: 12,
                height: 20,
                fontSize: 12,
                color: '#fff',
                width: 30,
                textAlign: 'center'
              },
              children: "ME"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            strong: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: userValue,
              precision: 4
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
              value: hostValue ? Number(userValue) / hostValue * 100 : '--',
              precision: 2,
              prefix: "",
              suffix: "%"
            })
          })]
        })
      })]
    })
  });
});

/***/ }),

/***/ 38232:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export ReactComponent */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgMataso = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 20, height: 20 }, props), /* @__PURE__ */ React.createElement("circle", { cx: 10, cy: 10, fill: "#95EBF0", r: 10 }), /* @__PURE__ */ React.createElement("path", { d: "M14.347 7.44q.825 1.332.825 2.905 0 1.122-.433 2.148-.42.99-1.183 1.753-.763.763-1.753 1.182-1.026.434-2.148.434t-2.148-.434q-.99-.419-1.753-1.182-.764-.763-1.182-1.753-.434-1.026-.434-2.148t.434-2.148q.418-.99 1.182-1.753.763-.764 1.753-1.183 1.026-.433 2.148-.433 1.266 0 2.397.546l-.348.72q-.966-.467-2.049-.467-.96 0-1.836.37-.847.359-1.5 1.012t-1.01 1.5q-.371.876-.371 1.836 0 .96.37 1.836.358.847 1.011 1.5.653.653 1.5 1.01.876.371 1.836.371.96 0 1.836-.37.847-.358 1.5-1.011.653-.653 1.011-1.5.37-.876.37-1.836 0-1.346-.704-2.483l.679-.421Z", fillRule: "evenodd", fill: "#002E33" }), /* @__PURE__ */ React.createElement("path", { d: "M8.693 15.337a4.03 4.03 0 1 0 0-8.06 4.03 4.03 0 0 0 0 8.06Zm0-7.26a3.23 3.23 0 1 1 0 6.46 3.23 3.23 0 0 1 0-6.46Z", fillRule: "evenodd", fill: "#002E33" }), /* @__PURE__ */ React.createElement("path", { d: "M10.382 13.426q.188-.494.188-1.025 0-.532-.188-1.026-.206-.537-.6-.947-.397-.411-.92-.625-.481-.198-1-.198t-1.001.198q-.522.214-.919.625-.395.41-.6.947-.189.494-.189 1.026 0 .53.19 1.025.204.537.6.947.396.411.918.625.482.198 1 .198.52 0 1.002-.198.522-.214.918-.625.395-.41.6-.947Zm-.648-1.803q.143.374.143.778 0 .403-.143.778-.155.405-.451.713-.296.306-.683.465-.356.146-.738.146t-.738-.146q-.387-.159-.683-.465-.297-.308-.451-.713-.144-.375-.144-.778 0-.404.144-.778.154-.406.451-.714.296-.306.683-.465.356-.146.738-.146t.738.146q.387.159.683.465.296.308.451.714ZM15.048 7.345q.124-.325.124-.674 0-.35-.124-.675-.136-.354-.398-.624-.264-.272-.61-.413-.322-.131-.667-.131-.345 0-.666.13-.347.142-.61.414-.263.27-.399.624-.124.325-.124.675 0 .35.124.674.136.355.398.625.264.271.61.413.322.13.667.13.345 0 .666-.13.347-.142.61-.413.263-.27.399-.625Zm-.972-1.417q.297.307.297.743t-.297.742q-.292.301-.703.301-.41 0-.703-.3-.297-.307-.297-.743t.297-.743q.292-.3.703-.3.41 0 .703.3Z", fillRule: "evenodd", fill: "#002E33" }));

/* harmony default export */ __webpack_exports__.Z = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgZmlsbD0iIzk1RUJGMCIgcj0iMTAiLz48cGF0aCBkPSJNMTQuMzQ3IDcuNDRxLjgyNSAxLjMzMi44MjUgMi45MDUgMCAxLjEyMi0uNDMzIDIuMTQ4LS40Mi45OS0xLjE4MyAxLjc1My0uNzYzLjc2My0xLjc1MyAxLjE4Mi0xLjAyNi40MzQtMi4xNDguNDM0dC0yLjE0OC0uNDM0cS0uOTktLjQxOS0xLjc1My0xLjE4Mi0uNzY0LS43NjMtMS4xODItMS43NTMtLjQzNC0xLjAyNi0uNDM0LTIuMTQ4dC40MzQtMi4xNDhxLjQxOC0uOTkgMS4xODItMS43NTMuNzYzLS43NjQgMS43NTMtMS4xODMgMS4wMjYtLjQzMyAyLjE0OC0uNDMzIDEuMjY2IDAgMi4zOTcuNTQ2bC0uMzQ4LjcycS0uOTY2LS40NjctMi4wNDktLjQ2Ny0uOTYgMC0xLjgzNi4zNy0uODQ3LjM1OS0xLjUgMS4wMTJ0LTEuMDEgMS41cS0uMzcxLjg3Ni0uMzcxIDEuODM2IDAgLjk2LjM3IDEuODM2LjM1OC44NDcgMS4wMTEgMS41LjY1My42NTMgMS41IDEuMDEuODc2LjM3MSAxLjgzNi4zNzEuOTYgMCAxLjgzNi0uMzcuODQ3LS4zNTggMS41LTEuMDExLjY1My0uNjUzIDEuMDExLTEuNS4zNy0uODc2LjM3LTEuODM2IDAtMS4zNDYtLjcwNC0yLjQ4M2wuNjc5LS40MjFaIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDJFMzMiLz48cGF0aCBkPSJNOC42OTMgMTUuMzM3YTQuMDMgNC4wMyAwIDEgMCAwLTguMDYgNC4wMyA0LjAzIDAgMCAwIDAgOC4wNlptMC03LjI2YTMuMjMgMy4yMyAwIDEgMSAwIDYuNDYgMy4yMyAzLjIzIDAgMCAxIDAtNi40NloiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzAwMkUzMyIvPjxwYXRoIGQ9Ik0xMC4zODIgMTMuNDI2cS4xODgtLjQ5NC4xODgtMS4wMjUgMC0uNTMyLS4xODgtMS4wMjYtLjIwNi0uNTM3LS42LS45NDctLjM5Ny0uNDExLS45Mi0uNjI1LS40ODEtLjE5OC0xLS4xOTh0LTEuMDAxLjE5OHEtLjUyMi4yMTQtLjkxOS42MjUtLjM5NS40MS0uNi45NDctLjE4OS40OTQtLjE4OSAxLjAyNiAwIC41My4xOSAxLjAyNS4yMDQuNTM3LjYuOTQ3LjM5Ni40MTEuOTE4LjYyNS40ODIuMTk4IDEgLjE5OC41MiAwIDEuMDAyLS4xOTguNTIyLS4yMTQuOTE4LS42MjUuMzk1LS40MS42LS45NDdabS0uNjQ4LTEuODAzcS4xNDMuMzc0LjE0My43NzggMCAuNDAzLS4xNDMuNzc4LS4xNTUuNDA1LS40NTEuNzEzLS4yOTYuMzA2LS42ODMuNDY1LS4zNTYuMTQ2LS43MzguMTQ2dC0uNzM4LS4xNDZxLS4zODctLjE1OS0uNjgzLS40NjUtLjI5Ny0uMzA4LS40NTEtLjcxMy0uMTQ0LS4zNzUtLjE0NC0uNzc4IDAtLjQwNC4xNDQtLjc3OC4xNTQtLjQwNi40NTEtLjcxNC4yOTYtLjMwNi42ODMtLjQ2NS4zNTYtLjE0Ni43MzgtLjE0NnQuNzM4LjE0NnEuMzg3LjE1OS42ODMuNDY1LjI5Ni4zMDguNDUxLjcxNFpNMTUuMDQ4IDcuMzQ1cS4xMjQtLjMyNS4xMjQtLjY3NCAwLS4zNS0uMTI0LS42NzUtLjEzNi0uMzU0LS4zOTgtLjYyNC0uMjY0LS4yNzItLjYxLS40MTMtLjMyMi0uMTMxLS42NjctLjEzMS0uMzQ1IDAtLjY2Ni4xMy0uMzQ3LjE0Mi0uNjEuNDE0LS4yNjMuMjctLjM5OS42MjQtLjEyNC4zMjUtLjEyNC42NzUgMCAuMzUuMTI0LjY3NC4xMzYuMzU1LjM5OC42MjUuMjY0LjI3MS42MS40MTMuMzIyLjEzLjY2Ny4xMy4zNDUgMCAuNjY2LS4xMy4zNDctLjE0Mi42MS0uNDEzLjI2My0uMjcuMzk5LS42MjVabS0uOTcyLTEuNDE3cS4yOTcuMzA3LjI5Ny43NDN0LS4yOTcuNzQycS0uMjkyLjMwMS0uNzAzLjMwMS0uNDEgMC0uNzAzLS4zLS4yOTctLjMwNy0uMjk3LS43NDN0LjI5Ny0uNzQzcS4yOTItLjMuNzAzLS4zLjQxIDAgLjcwMy4zWiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDAyRTMzIi8+PC9zdmc+");


/***/ }),

/***/ 45730:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ createLucideIcon; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();


//# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return (0,react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0,react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);


//# sourceMappingURL=Icon.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react.forwardRef)(
    ({ className, ...props }, ref) => (0,react.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ 79038:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ ArrowUpRight; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45730);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ArrowUpRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);


//# sourceMappingURL=arrow-up-right.js.map


/***/ })

}]);