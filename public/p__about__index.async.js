"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9289],{

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

/***/ 26221:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Trans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57777);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38021);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10991);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31218);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99478);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33713);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81581);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52676);








var DescItem = function DescItem(_ref) {
  var label = _ref.label,
    value = _ref.value;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0px 20px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Text, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: label
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Text, {
      children: [value, " SAT"]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorTextSecondary = _theme$useToken$token.colorTextSecondary;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('BTC'),
    _useState2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_3__.useModel)('dashboard'),
    fees = _useModel.fees,
    admin = _useModel.admin;
  var curFee = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return fees.find(function (item) {
      return item.chain === activeKey;
    });
  }, [fees, activeKey]);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('fee'),
    _useState4 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
    activeTabKey2 = _useState4[0],
    setActiveTabKey2 = _useState4[1];
  var onTab2Change = function onTab2Change(key) {
    setActiveTabKey2(key);
  };
  var tabListNoTitle = [{
    key: 'fee',
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      children: "Fee"
    })
  }, {
    key: 'introduction',
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      children: "Introduction"
    })
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    bordered: false,
    tabList: tabListNoTitle,
    activeTabKey: activeTabKey2,
    onTabChange: onTab2Change,
    children: activeTabKey2 === 'fee' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
          variant: "filled",
          color: activeKey === 'BTC' ? 'primary' : 'default',
          onClick: function onClick() {
            return setActiveKey('BTC');
          },
          children: "BTC"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
          variant: "filled",
          color: activeKey === 'MVC' ? 'primary' : 'default',
          onClick: function onClick() {
            return setActiveKey('MVC');
          },
          children: "MVC"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        style: {
          marginTop: 20
        },
        styles: {
          body: {
            padding: '20px 0'
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DescItem, {
          label: "Follow Serivice Fee",
          value: curFee === null || curFee === void 0 ? void 0 : curFee.follow_service_fee_amount
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DescItem, {
          label: "Post Serivice Fee",
          value: curFee === null || curFee === void 0 ? void 0 : curFee.post_service_fee_amount
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DescItem, {
          label: "Commet Serivice Fee",
          value: curFee === null || curFee === void 0 ? void 0 : curFee.comment_service_fee_amount
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DescItem, {
          label: "Like Serivice Fee",
          value: curFee === null || curFee === void 0 ? void 0 : curFee.like_service_fee_amount
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DescItem, {
          label: "Donate Serivice Fee",
          value: curFee === null || curFee === void 0 ? void 0 : curFee.donate_service_fee_amount
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: "Introduction"
      }),
      styles: {
        header: {}
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        style: {
          whiteSpace: 'pre-line',
          color: colorTextSecondary
        },
        children: (admin === null || admin === void 0 ? void 0 : admin.introduction) || ''
      })
    })
  });
});

/***/ }),

/***/ 33713:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ divider; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1225);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var es = __webpack_require__(20865);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(9894);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(21275);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83509);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/style/index.js



// ============================== Shared ==============================
const genSharedDividerStyle = token => {
  const {
    componentCls,
    sizePaddingEdgeHorizontal,
    colorSplit,
    lineWidth,
    textPaddingInline,
    orientationMargin,
    verticalMarginInline
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      borderBlockStart: `${(0,es.unit)(lineWidth)} solid ${colorSplit}`,
      // vertical
      '&-vertical': {
        position: 'relative',
        top: '-0.06em',
        display: 'inline-block',
        height: '0.9em',
        marginInline: verticalMarginInline,
        marginBlock: 0,
        verticalAlign: 'middle',
        borderTop: 0,
        borderInlineStart: `${(0,es.unit)(lineWidth)} solid ${colorSplit}`
      },
      '&-horizontal': {
        display: 'flex',
        clear: 'both',
        width: '100%',
        minWidth: '100%',
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${(0,es.unit)(token.dividerHorizontalGutterMargin)} 0`
      },
      [`&-horizontal${componentCls}-with-text`]: {
        display: 'flex',
        alignItems: 'center',
        margin: `${(0,es.unit)(token.dividerHorizontalWithTextGutterMargin)} 0`,
        color: token.colorTextHeading,
        fontWeight: 500,
        fontSize: token.fontSizeLG,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        borderBlockStart: `0 ${colorSplit}`,
        '&::before, &::after': {
          position: 'relative',
          width: '50%',
          borderBlockStart: `${(0,es.unit)(lineWidth)} solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: 'inherit',
          borderBlockEnd: 0,
          transform: 'translateY(50%)',
          content: "''"
        }
      },
      [`&-horizontal${componentCls}-with-text-start`]: {
        '&::before': {
          width: `calc(${orientationMargin} * 100%)`
        },
        '&::after': {
          width: `calc(100% - ${orientationMargin} * 100%)`
        }
      },
      [`&-horizontal${componentCls}-with-text-end`]: {
        '&::before': {
          width: `calc(100% - ${orientationMargin} * 100%)`
        },
        '&::after': {
          width: `calc(${orientationMargin} * 100%)`
        }
      },
      [`${componentCls}-inner-text`]: {
        display: 'inline-block',
        paddingBlock: 0,
        paddingInline: textPaddingInline
      },
      '&-dashed': {
        background: 'none',
        borderColor: colorSplit,
        borderStyle: 'dashed',
        borderWidth: `${(0,es.unit)(lineWidth)} 0 0`
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dashed`]: {
        '&::before, &::after': {
          borderStyle: 'dashed none none'
        }
      },
      [`&-vertical${componentCls}-dashed`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      '&-dotted': {
        background: 'none',
        borderColor: colorSplit,
        borderStyle: 'dotted',
        borderWidth: `${(0,es.unit)(lineWidth)} 0 0`
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dotted`]: {
        '&::before, &::after': {
          borderStyle: 'dotted none none'
        }
      },
      [`&-vertical${componentCls}-dotted`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${componentCls}-with-text`]: {
        color: token.colorText,
        fontWeight: 'normal',
        fontSize: token.fontSize
      },
      [`&-horizontal${componentCls}-with-text-start${componentCls}-no-default-orientation-margin-start`]: {
        '&::before': {
          width: 0
        },
        '&::after': {
          width: '100%'
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineStart: sizePaddingEdgeHorizontal
        }
      },
      [`&-horizontal${componentCls}-with-text-end${componentCls}-no-default-orientation-margin-end`]: {
        '&::before': {
          width: '100%'
        },
        '&::after': {
          width: 0
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineEnd: sizePaddingEdgeHorizontal
        }
      }
    })
  };
};
const prepareComponentToken = token => ({
  textPaddingInline: '1em',
  orientationMargin: 0.05,
  verticalMarginInline: token.marginXS
});
// ============================== Export ==============================
/* harmony default export */ var divider_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Divider', token => {
  const dividerToken = (0,cssinjs_utils_es.mergeToken)(token, {
    dividerHorizontalWithTextGutterMargin: token.margin,
    dividerHorizontalGutterMargin: token.marginLG,
    sizePaddingEdgeHorizontal: 0
  });
  return [genSharedDividerStyle(dividerToken)];
}, prepareComponentToken, {
  unitless: {
    orientationMargin: true
  }
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const Divider = props => {
  const {
    getPrefixCls,
    direction,
    className: dividerClassName,
    style: dividerStyle
  } = (0,context/* useComponentConfig */.dj)('divider');
  const {
      prefixCls: customizePrefixCls,
      type = 'horizontal',
      orientation = 'center',
      orientationMargin,
      className,
      rootClassName,
      children,
      dashed,
      variant = 'solid',
      plain,
      style
    } = props,
    restProps = __rest(props, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "variant", "plain", "style"]);
  const prefixCls = getPrefixCls('divider', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = divider_style(prefixCls);
  const hasChildren = !!children;
  const mergedOrientation = react.useMemo(() => {
    if (orientation === 'left') {
      return direction === 'rtl' ? 'end' : 'start';
    }
    if (orientation === 'right') {
      return direction === 'rtl' ? 'start' : 'end';
    }
    return orientation;
  }, [direction, orientation]);
  const hasMarginStart = mergedOrientation === 'start' && orientationMargin != null;
  const hasMarginEnd = mergedOrientation === 'end' && orientationMargin != null;
  const classString = classnames_default()(prefixCls, dividerClassName, hashId, cssVarCls, `${prefixCls}-${type}`, {
    [`${prefixCls}-with-text`]: hasChildren,
    [`${prefixCls}-with-text-${mergedOrientation}`]: hasChildren,
    [`${prefixCls}-dashed`]: !!dashed,
    [`${prefixCls}-${variant}`]: variant !== 'solid',
    [`${prefixCls}-plain`]: !!plain,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-no-default-orientation-margin-start`]: hasMarginStart,
    [`${prefixCls}-no-default-orientation-margin-end`]: hasMarginEnd
  }, className, rootClassName);
  const memoizedOrientationMargin = react.useMemo(() => {
    if (typeof orientationMargin === 'number') {
      return orientationMargin;
    }
    if (/^\d+$/.test(orientationMargin)) {
      return Number(orientationMargin);
    }
    return orientationMargin;
  }, [orientationMargin]);
  const innerStyle = {
    marginInlineStart: hasMarginStart ? memoizedOrientationMargin : undefined,
    marginInlineEnd: hasMarginEnd ? memoizedOrientationMargin : undefined
  };
  // Warning children not work in vertical mode
  if (false) {}
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", Object.assign({
    className: classString,
    style: Object.assign(Object.assign({}, dividerStyle), style)
  }, restProps, {
    role: "separator"
  }), children && type !== 'vertical' && (/*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-inner-text`,
    style: innerStyle
  }, children))));
};
if (false) {}
/* harmony default export */ var divider = (Divider);

/***/ })

}]);