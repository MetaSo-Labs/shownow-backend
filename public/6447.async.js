"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6447],{

/***/ 81751:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_alert; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(4692);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(75434);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(14258);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(64267);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js + 1 modules
var InfoCircleFilled = __webpack_require__(30345);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.9.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-motion/es/index.js + 13 modules
var es = __webpack_require__(62803);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(71305);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42684);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(84199);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1225);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var cssinjs_es = __webpack_require__(20865);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(9894);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(21275);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/style/index.js



const genAlertTypeStyle = (bgColor, borderColor, iconColor, token, alertCls) => ({
  background: bgColor,
  border: `${(0,cssinjs_es.unit)(token.lineWidth)} ${token.lineType} ${borderColor}`,
  [`${alertCls}-icon`]: {
    color: iconColor
  }
});
const genBaseStyle = token => {
  const {
    componentCls,
    motionDurationSlow: duration,
    marginXS,
    marginSM,
    fontSize,
    fontSizeLG,
    lineHeight,
    borderRadiusLG: borderRadius,
    motionEaseInOutCirc,
    withDescriptionIconSize,
    colorText,
    colorTextHeading,
    withDescriptionPadding,
    defaultPadding
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: defaultPadding,
      wordWrap: 'break-word',
      borderRadius,
      [`&${componentCls}-rtl`]: {
        direction: 'rtl'
      },
      [`${componentCls}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${componentCls}-icon`]: {
        marginInlineEnd: marginXS,
        lineHeight: 0
      },
      '&-description': {
        display: 'none',
        fontSize,
        lineHeight
      },
      '&-message': {
        color: colorTextHeading
      },
      [`&${componentCls}-motion-leave`]: {
        overflow: 'hidden',
        opacity: 1,
        transition: `max-height ${duration} ${motionEaseInOutCirc}, opacity ${duration} ${motionEaseInOutCirc},
        padding-top ${duration} ${motionEaseInOutCirc}, padding-bottom ${duration} ${motionEaseInOutCirc},
        margin-bottom ${duration} ${motionEaseInOutCirc}`
      },
      [`&${componentCls}-motion-leave-active`]: {
        maxHeight: 0,
        marginBottom: '0 !important',
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    }),
    [`${componentCls}-with-description`]: {
      alignItems: 'flex-start',
      padding: withDescriptionPadding,
      [`${componentCls}-icon`]: {
        marginInlineEnd: marginSM,
        fontSize: withDescriptionIconSize,
        lineHeight: 0
      },
      [`${componentCls}-message`]: {
        display: 'block',
        marginBottom: marginXS,
        color: colorTextHeading,
        fontSize: fontSizeLG
      },
      [`${componentCls}-description`]: {
        display: 'block',
        color: colorText
      }
    },
    [`${componentCls}-banner`]: {
      marginBottom: 0,
      border: '0 !important',
      borderRadius: 0
    }
  };
};
const genTypeStyle = token => {
  const {
    componentCls,
    colorSuccess,
    colorSuccessBorder,
    colorSuccessBg,
    colorWarning,
    colorWarningBorder,
    colorWarningBg,
    colorError,
    colorErrorBorder,
    colorErrorBg,
    colorInfo,
    colorInfoBorder,
    colorInfoBg
  } = token;
  return {
    [componentCls]: {
      '&-success': genAlertTypeStyle(colorSuccessBg, colorSuccessBorder, colorSuccess, token, componentCls),
      '&-info': genAlertTypeStyle(colorInfoBg, colorInfoBorder, colorInfo, token, componentCls),
      '&-warning': genAlertTypeStyle(colorWarningBg, colorWarningBorder, colorWarning, token, componentCls),
      '&-error': Object.assign(Object.assign({}, genAlertTypeStyle(colorErrorBg, colorErrorBorder, colorError, token, componentCls)), {
        [`${componentCls}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
};
const genActionStyle = token => {
  const {
    componentCls,
    iconCls,
    motionDurationMid,
    marginXS,
    fontSizeIcon,
    colorIcon,
    colorIconHover
  } = token;
  return {
    [componentCls]: {
      '&-action': {
        marginInlineStart: marginXS
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: marginXS,
        padding: 0,
        overflow: 'hidden',
        fontSize: fontSizeIcon,
        lineHeight: (0,cssinjs_es.unit)(fontSizeIcon),
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        [`${iconCls}-close`]: {
          color: colorIcon,
          transition: `color ${motionDurationMid}`,
          '&:hover': {
            color: colorIconHover
          }
        }
      },
      '&-close-text': {
        color: colorIcon,
        transition: `color ${motionDurationMid}`,
        '&:hover': {
          color: colorIconHover
        }
      }
    }
  };
};
const prepareComponentToken = token => {
  const paddingHorizontal = 12; // Fixed value here.
  return {
    withDescriptionIconSize: token.fontSizeHeading3,
    defaultPadding: `${token.paddingContentVerticalSM}px ${paddingHorizontal}px`,
    withDescriptionPadding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`
  };
};
/* harmony default export */ var alert_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Alert', token => [genBaseStyle(token), genTypeStyle(token), genActionStyle(token)], prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/Alert.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};














const iconMapFilled = {
  success: CheckCircleFilled/* default */.Z,
  info: InfoCircleFilled/* default */.Z,
  error: CloseCircleFilled/* default */.Z,
  warning: ExclamationCircleFilled/* default */.Z
};
const IconNode = props => {
  const {
    icon,
    prefixCls,
    type
  } = props;
  const iconType = iconMapFilled[type] || null;
  if (icon) {
    return (0,reactNode/* replaceElement */.wm)(icon, /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-icon`
    }, icon), () => ({
      className: classnames_default()(`${prefixCls}-icon`, icon.props.className)
    }));
  }
  return /*#__PURE__*/react.createElement(iconType, {
    className: `${prefixCls}-icon`
  });
};
const CloseIconNode = props => {
  const {
    isClosable,
    prefixCls,
    closeIcon,
    handleClose,
    ariaProps
  } = props;
  const mergedCloseIcon = closeIcon === true || closeIcon === undefined ? /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null) : closeIcon;
  return isClosable ? (/*#__PURE__*/react.createElement("button", Object.assign({
    type: "button",
    onClick: handleClose,
    className: `${prefixCls}-close-icon`,
    tabIndex: 0
  }, ariaProps), mergedCloseIcon)) : null;
};
const Alert = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      description,
      prefixCls: customizePrefixCls,
      message,
      banner,
      className,
      rootClassName,
      style,
      onMouseEnter,
      onMouseLeave,
      onClick,
      afterClose,
      showIcon,
      closable,
      closeText,
      closeIcon,
      action,
      id
    } = props,
    otherProps = __rest(props, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]);
  const [closed, setClosed] = react.useState(false);
  if (false) {}
  const internalRef = react.useRef(null);
  react.useImperativeHandle(ref, () => ({
    nativeElement: internalRef.current
  }));
  const {
    getPrefixCls,
    direction,
    closable: contextClosable,
    closeIcon: contextCloseIcon,
    className: contextClassName,
    style: contextStyle
  } = (0,context/* useComponentConfig */.dj)('alert');
  const prefixCls = getPrefixCls('alert', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = alert_style(prefixCls);
  const handleClose = e => {
    var _a;
    setClosed(true);
    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };
  const type = react.useMemo(() => {
    if (props.type !== undefined) {
      return props.type;
    }
    // banner mode defaults to 'warning'
    return banner ? 'warning' : 'info';
  }, [props.type, banner]);
  // closeable when closeText or closeIcon is assigned
  const isClosable = react.useMemo(() => {
    if (typeof closable === 'object' && closable.closeIcon) return true;
    if (closeText) {
      return true;
    }
    if (typeof closable === 'boolean') {
      return closable;
    }
    // should be true when closeIcon is 0 or ''
    if (closeIcon !== false && closeIcon !== null && closeIcon !== undefined) {
      return true;
    }
    return !!contextClosable;
  }, [closeText, closeIcon, closable, contextClosable]);
  // banner mode defaults to Icon
  const isShowIcon = banner && showIcon === undefined ? true : showIcon;
  const alertCls = classnames_default()(prefixCls, `${prefixCls}-${type}`, {
    [`${prefixCls}-with-description`]: !!description,
    [`${prefixCls}-no-icon`]: !isShowIcon,
    [`${prefixCls}-banner`]: !!banner,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, contextClassName, className, rootClassName, cssVarCls, hashId);
  const restProps = (0,pickAttrs/* default */.Z)(otherProps, {
    aria: true,
    data: true
  });
  const mergedCloseIcon = react.useMemo(() => {
    if (typeof closable === 'object' && closable.closeIcon) {
      return closable.closeIcon;
    }
    if (closeText) {
      return closeText;
    }
    if (closeIcon !== undefined) {
      return closeIcon;
    }
    if (typeof contextClosable === 'object' && contextClosable.closeIcon) {
      return contextClosable.closeIcon;
    }
    return contextCloseIcon;
  }, [closeIcon, closable, closeText, contextCloseIcon]);
  const mergedAriaProps = react.useMemo(() => {
    const merged = closable !== null && closable !== void 0 ? closable : contextClosable;
    if (typeof merged === 'object') {
      const {
          closeIcon: _
        } = merged,
        ariaProps = __rest(merged, ["closeIcon"]);
      return ariaProps;
    }
    return {};
  }, [closable, contextClosable]);
  return wrapCSSVar(/*#__PURE__*/react.createElement(es["default"], {
    visible: !closed,
    motionName: `${prefixCls}-motion`,
    motionAppear: false,
    motionEnter: false,
    onLeaveStart: node => ({
      maxHeight: node.offsetHeight
    }),
    onLeaveEnd: afterClose
  }, (_ref, setRef) => {
    let {
      className: motionClassName,
      style: motionStyle
    } = _ref;
    return /*#__PURE__*/react.createElement("div", Object.assign({
      id: id,
      ref: (0,es_ref/* composeRef */.sQ)(internalRef, setRef),
      "data-show": !closed,
      className: classnames_default()(alertCls, motionClassName),
      style: Object.assign(Object.assign(Object.assign({}, contextStyle), style), motionStyle),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      role: "alert"
    }, restProps), isShowIcon ? (/*#__PURE__*/react.createElement(IconNode, {
      description: description,
      icon: props.icon,
      prefixCls: prefixCls,
      type: type
    })) : null, /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-content`
    }, message ? /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-message`
    }, message) : null, description ? /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-description`
    }, description) : null), action ? /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-action`
    }, action) : null, /*#__PURE__*/react.createElement(CloseIconNode, {
      isClosable: isClosable,
      prefixCls: prefixCls,
      closeIcon: mergedCloseIcon,
      handleClose: handleClose,
      ariaProps: mergedAriaProps
    }));
  }));
});
if (false) {}
/* harmony default export */ var alert_Alert = (Alert);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(34706);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(89364);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3349);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__(46492);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8116);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/callSuper.js



function _callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.Z)(o), (0,possibleConstructorReturn/* default */.Z)(t, (0,isNativeReflectConstruct/* default */.Z)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.Z)(t).constructor) : o.apply(t, e));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(16013);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/ErrorBoundary.js
"use client";







let ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, arguments);
    _this.state = {
      error: undefined,
      info: {
        componentStack: ''
      }
    };
    return _this;
  }
  (0,inherits/* default */.Z)(ErrorBoundary, _React$Component);
  return (0,createClass/* default */.Z)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        error,
        info
      });
    }
  }, {
    key: "render",
    value: function render() {
      const {
        message,
        description,
        id,
        children
      } = this.props;
      const {
        error,
        info
      } = this.state;
      const componentStack = (info === null || info === void 0 ? void 0 : info.componentStack) || null;
      const errorMessage = typeof message === 'undefined' ? (error || '').toString() : message;
      const errorDescription = typeof description === 'undefined' ? componentStack : description;
      if (error) {
        return /*#__PURE__*/react.createElement(alert_Alert, {
          id: id,
          type: "error",
          message: errorMessage,
          description: /*#__PURE__*/react.createElement("pre", {
            style: {
              fontSize: '0.9em',
              overflowX: 'auto'
            }
          }, errorDescription)
        });
      }
      return children;
    }
  }]);
}(react.Component);
/* harmony default export */ var alert_ErrorBoundary = (ErrorBoundary);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/index.js
"use client";



const es_alert_Alert = alert_Alert;
es_alert_Alert.ErrorBoundary = alert_ErrorBoundary;
/* harmony default export */ var es_alert = (es_alert_Alert);

/***/ }),

/***/ 79063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ tag; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(18051);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/colors.js
var colors = __webpack_require__(50790);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useClosable.js
var useClosable = __webpack_require__(48437);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(84199);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/wave/index.js + 4 modules
var wave = __webpack_require__(44538);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1225);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var es = __webpack_require__(20865);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+fast-color@2.0.6/node_modules/@ant-design/fast-color/es/index.js + 1 modules
var fast_color_es = __webpack_require__(84432);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(9894);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83509);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(21275);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/style/index.js




// ============================== Styles ==============================
const genBaseStyle = token => {
  const {
    paddingXXS,
    lineWidth,
    tagPaddingHorizontal,
    componentCls,
    calc
  } = token;
  const paddingInline = calc(tagPaddingHorizontal).sub(lineWidth).equal();
  const iconMarginInline = calc(paddingXXS).sub(lineWidth).equal();
  return {
    // Result
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      display: 'inline-block',
      height: 'auto',
      // https://github.com/ant-design/ant-design/pull/47504
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: token.tagLineHeight,
      whiteSpace: 'nowrap',
      background: token.defaultBg,
      border: `${(0,es.unit)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      textAlign: 'start',
      position: 'relative',
      // RTL
      [`&${componentCls}-rtl`]: {
        direction: 'rtl'
      },
      '&, a, a:hover': {
        color: token.defaultColor
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: iconMarginInline,
        fontSize: token.tagIconSize,
        color: token.colorTextDescription,
        cursor: 'pointer',
        transition: `all ${token.motionDurationMid}`,
        '&:hover': {
          color: token.colorTextHeading
        }
      },
      [`&${componentCls}-has-color`]: {
        borderColor: 'transparent',
        [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
          color: token.colorTextLightSolid
        }
      },
      '&-checkable': {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        [`&:not(${componentCls}-checkable-checked):hover`]: {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary
        },
        '&:active, &-checked': {
          color: token.colorTextLightSolid
        },
        '&-checked': {
          backgroundColor: token.colorPrimary,
          '&:hover': {
            backgroundColor: token.colorPrimaryHover
          }
        },
        '&:active': {
          backgroundColor: token.colorPrimaryActive
        }
      },
      '&-hidden': {
        display: 'none'
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
        marginInlineStart: paddingInline
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: 'transparent',
      background: token.tagBorderlessBg
    }
  };
};
// ============================== Export ==============================
const prepareToken = token => {
  const {
    lineWidth,
    fontSizeIcon,
    calc
  } = token;
  const tagFontSize = token.fontSizeSM;
  const tagToken = (0,cssinjs_utils_es.mergeToken)(token, {
    tagFontSize,
    tagLineHeight: (0,es.unit)(calc(token.lineHeightSM).mul(tagFontSize).equal()),
    tagIconSize: calc(fontSizeIcon).sub(calc(lineWidth).mul(2)).equal(),
    // Tag icon is much smaller
    tagPaddingHorizontal: 8,
    // Fixed padding.
    tagBorderlessBg: token.defaultBg
  });
  return tagToken;
};
const prepareComponentToken = token => ({
  defaultBg: new fast_color_es.FastColor(token.colorFillQuaternary).onBackground(token.colorBgContainer).toHexString(),
  defaultColor: token.colorText
});
/* harmony default export */ var tag_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Tag', token => {
  const tagToken = prepareToken(token);
  return genBaseStyle(tagToken);
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/CheckableTag.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const CheckableTag = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      style,
      className,
      checked,
      onChange,
      onClick
    } = props,
    restProps = __rest(props, ["prefixCls", "style", "className", "checked", "onChange", "onClick"]);
  const {
    getPrefixCls,
    tag
  } = react.useContext(context/* ConfigContext */.E_);
  const handleClick = e => {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  const prefixCls = getPrefixCls('tag', customizePrefixCls);
  // Style
  const [wrapCSSVar, hashId, cssVarCls] = tag_style(prefixCls);
  const cls = classnames_default()(prefixCls, `${prefixCls}-checkable`, {
    [`${prefixCls}-checkable-checked`]: checked
  }, tag === null || tag === void 0 ? void 0 : tag.className, className, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("span", Object.assign({}, restProps, {
    ref: ref,
    style: Object.assign(Object.assign({}, style), tag === null || tag === void 0 ? void 0 : tag.style),
    className: cls,
    onClick: handleClick
  })));
});
/* harmony default export */ var tag_CheckableTag = (CheckableTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genPresetColor.js
var genPresetColor = __webpack_require__(79830);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/style/presetCmp.js
// Style as status component


// ============================== Preset ==============================
const genPresetStyle = token => (0,genPresetColor/* default */.Z)(token, (colorKey, _ref) => {
  let {
    textColor,
    lightBorderColor,
    lightColor,
    darkColor
  } = _ref;
  return {
    [`${token.componentCls}${token.componentCls}-${colorKey}`]: {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor,
      // Inverse color
      '&-inverse': {
        color: token.colorTextLightSolid,
        background: darkColor,
        borderColor: darkColor
      },
      [`&${token.componentCls}-borderless`]: {
        borderColor: 'transparent'
      }
    }
  };
});
// ============================== Export ==============================
/* harmony default export */ var presetCmp = ((0,genStyleUtils/* genSubStyleComponent */.bk)(['Tag', 'preset'], token => {
  const tagToken = prepareToken(token);
  return genPresetStyle(tagToken);
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/capitalize.js
function capitalize(str) {
  if (typeof str !== 'string') {
    return str;
  }
  const ret = str.charAt(0).toUpperCase() + str.slice(1);
  return ret;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/style/statusCmp.js



const genTagStatusStyle = (token, status, cssVariableType) => {
  const capitalizedCssVariableType = capitalize(cssVariableType);
  return {
    [`${token.componentCls}${token.componentCls}-${status}`]: {
      color: token[`color${cssVariableType}`],
      background: token[`color${capitalizedCssVariableType}Bg`],
      borderColor: token[`color${capitalizedCssVariableType}Border`],
      [`&${token.componentCls}-borderless`]: {
        borderColor: 'transparent'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var statusCmp = ((0,genStyleUtils/* genSubStyleComponent */.bk)(['Tag', 'status'], token => {
  const tagToken = prepareToken(token);
  return [genTagStatusStyle(tagToken, 'success', 'Success'), genTagStatusStyle(tagToken, 'processing', 'Info'), genTagStatusStyle(tagToken, 'error', 'Error'), genTagStatusStyle(tagToken, 'warning', 'Warning')];
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js
"use client";

var tag_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













const InternalTag = /*#__PURE__*/react.forwardRef((tagProps, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style,
      children,
      icon,
      color,
      onClose,
      bordered = true,
      visible: deprecatedVisible
    } = tagProps,
    props = tag_rest(tagProps, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "bordered", "visible"]);
  const {
    getPrefixCls,
    direction,
    tag: tagContext
  } = react.useContext(context/* ConfigContext */.E_);
  const [visible, setVisible] = react.useState(true);
  const domProps = (0,omit/* default */.Z)(props, ['closeIcon', 'closable']);
  // Warning for deprecated usage
  if (false) {}
  react.useEffect(() => {
    if (deprecatedVisible !== undefined) {
      setVisible(deprecatedVisible);
    }
  }, [deprecatedVisible]);
  const isPreset = (0,colors/* isPresetColor */.o2)(color);
  const isStatus = (0,colors/* isPresetStatusColor */.yT)(color);
  const isInternalColor = isPreset || isStatus;
  const tagStyle = Object.assign(Object.assign({
    backgroundColor: color && !isInternalColor ? color : undefined
  }, tagContext === null || tagContext === void 0 ? void 0 : tagContext.style), style);
  const prefixCls = getPrefixCls('tag', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = tag_style(prefixCls);
  // Style
  const tagClassName = classnames_default()(prefixCls, tagContext === null || tagContext === void 0 ? void 0 : tagContext.className, {
    [`${prefixCls}-${color}`]: isInternalColor,
    [`${prefixCls}-has-color`]: color && !isInternalColor,
    [`${prefixCls}-hidden`]: !visible,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-borderless`]: !bordered
  }, className, rootClassName, hashId, cssVarCls);
  const handleCloseClick = e => {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
    if (e.defaultPrevented) {
      return;
    }
    setVisible(false);
  };
  const [, mergedCloseIcon] = (0,useClosable/* default */.Z)((0,useClosable/* pickClosable */.w)(tagProps), (0,useClosable/* pickClosable */.w)(tagContext), {
    closable: false,
    closeIconRender: iconNode => {
      const replacement = /*#__PURE__*/react.createElement("span", {
        className: `${prefixCls}-close-icon`,
        onClick: handleCloseClick
      }, iconNode);
      return (0,reactNode/* replaceElement */.wm)(iconNode, replacement, originProps => ({
        onClick: e => {
          var _a;
          (_a = originProps === null || originProps === void 0 ? void 0 : originProps.onClick) === null || _a === void 0 ? void 0 : _a.call(originProps, e);
          handleCloseClick(e);
        },
        className: classnames_default()(originProps === null || originProps === void 0 ? void 0 : originProps.className, `${prefixCls}-close-icon`)
      }));
    }
  });
  const isNeedWave = typeof props.onClick === 'function' || children && children.type === 'a';
  const iconNode = icon || null;
  const kids = iconNode ? (/*#__PURE__*/react.createElement(react.Fragment, null, iconNode, children && /*#__PURE__*/react.createElement("span", null, children))) : children;
  const tagNode = /*#__PURE__*/react.createElement("span", Object.assign({}, domProps, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, mergedCloseIcon, isPreset && /*#__PURE__*/react.createElement(presetCmp, {
    key: "preset",
    prefixCls: prefixCls
  }), isStatus && /*#__PURE__*/react.createElement(statusCmp, {
    key: "status",
    prefixCls: prefixCls
  }));
  return wrapCSSVar(isNeedWave ? /*#__PURE__*/react.createElement(wave/* default */.Z, {
    component: "Tag"
  }, tagNode) : tagNode);
});
const Tag = InternalTag;
if (false) {}
Tag.CheckableTag = tag_CheckableTag;
/* harmony default export */ var tag = (Tag);

/***/ })

}]);