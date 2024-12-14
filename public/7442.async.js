"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7442],{

/***/ 22421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B4: function() { return /* binding */ prepareToken; },
/* harmony export */   QA: function() { return /* binding */ genModalMaskStyle; },
/* harmony export */   eh: function() { return /* binding */ prepareComponentToken; }
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20693);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13587);
/* harmony import */ var _style_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53881);
/* harmony import */ var _style_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90585);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53557);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61372);




function box(position) {
  return {
    position,
    inset: 0
  };
}
const genModalMaskStyle = token => {
  const {
    componentCls,
    antCls
  } = token;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${antCls}-zoom-enter, ${componentCls}${antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: 'none',
        opacity: 0,
        animationDuration: token.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: 'none'
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${componentCls}${antCls}-zoom-leave ${componentCls}-content`]: {
        pointerEvents: 'none'
      },
      [`${componentCls}-mask`]: Object.assign(Object.assign({}, box('fixed')), {
        zIndex: token.zIndexPopupBase,
        height: '100%',
        backgroundColor: token.colorBgMask,
        pointerEvents: 'none',
        [`${componentCls}-hidden`]: {
          display: 'none'
        }
      }),
      [`${componentCls}-wrap`]: Object.assign(Object.assign({}, box('fixed')), {
        zIndex: token.zIndexPopupBase,
        overflow: 'auto',
        outline: 0,
        WebkitOverflowScrolling: 'touch'
      })
    }
  }, {
    [`${componentCls}-root`]: (0,_style_motion__WEBPACK_IMPORTED_MODULE_1__/* .initFadeMotion */ .J$)(token)
  }];
};
const genModalStyle = token => {
  const {
    componentCls
  } = token;
  return [
  // ======================== Root =========================
  {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: 'rtl'
      },
      [`${componentCls}-centered`]: {
        textAlign: 'center',
        '&::before': {
          display: 'inline-block',
          width: 0,
          height: '100%',
          verticalAlign: 'middle',
          content: '""'
        },
        [componentCls]: {
          top: 0,
          display: 'inline-block',
          paddingBottom: 0,
          textAlign: 'start',
          verticalAlign: 'middle'
        }
      },
      [`@media (max-width: ${token.screenSMMax}px)`]: {
        [componentCls]: {
          maxWidth: 'calc(100vw - 16px)',
          margin: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.marginXS)} auto`
        },
        [`${componentCls}-centered`]: {
          [componentCls]: {
            flex: 1
          }
        }
      }
    }
  },
  // ======================== Modal ========================
  {
    [componentCls]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_2__/* .resetComponent */ .Wf)(token)), {
      pointerEvents: 'none',
      position: 'relative',
      top: 100,
      width: 'auto',
      maxWidth: `calc(100vw - ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(token.margin).mul(2).equal())})`,
      margin: '0 auto',
      paddingBottom: token.paddingLG,
      [`${componentCls}-title`]: {
        margin: 0,
        color: token.titleColor,
        fontWeight: token.fontWeightStrong,
        fontSize: token.titleFontSize,
        lineHeight: token.titleLineHeight,
        wordWrap: 'break-word'
      },
      [`${componentCls}-content`]: {
        position: 'relative',
        backgroundColor: token.contentBg,
        backgroundClip: 'padding-box',
        border: 0,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadow,
        pointerEvents: 'auto',
        padding: token.contentPadding
      },
      [`${componentCls}-close`]: Object.assign({
        position: 'absolute',
        top: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
        insetInlineEnd: token.calc(token.modalHeaderHeight).sub(token.modalCloseBtnSize).div(2).equal(),
        zIndex: token.calc(token.zIndexPopupBase).add(10).equal(),
        padding: 0,
        color: token.modalCloseIconColor,
        fontWeight: token.fontWeightStrong,
        lineHeight: 1,
        textDecoration: 'none',
        background: 'transparent',
        borderRadius: token.borderRadiusSM,
        width: token.modalCloseBtnSize,
        height: token.modalCloseBtnSize,
        border: 0,
        outline: 0,
        cursor: 'pointer',
        transition: `color ${token.motionDurationMid}, background-color ${token.motionDurationMid}`,
        '&-x': {
          display: 'flex',
          fontSize: token.fontSizeLG,
          fontStyle: 'normal',
          lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.modalCloseBtnSize),
          justifyContent: 'center',
          textTransform: 'none',
          textRendering: 'auto'
        },
        '&:disabled': {
          pointerEvents: 'none'
        },
        '&:hover': {
          color: token.modalCloseIconHoverColor,
          backgroundColor: token.colorBgTextHover,
          textDecoration: 'none'
        },
        '&:active': {
          backgroundColor: token.colorBgTextActive
        }
      }, (0,_style__WEBPACK_IMPORTED_MODULE_2__/* .genFocusStyle */ .Qy)(token)),
      [`${componentCls}-header`]: {
        color: token.colorText,
        background: token.headerBg,
        borderRadius: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.borderRadiusLG)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.borderRadiusLG)} 0 0`,
        marginBottom: token.headerMarginBottom,
        padding: token.headerPadding,
        borderBottom: token.headerBorderBottom
      },
      [`${componentCls}-body`]: {
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        wordWrap: 'break-word',
        padding: token.bodyPadding,
        [`${componentCls}-body-skeleton`]: {
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.margin)} auto`
        }
      },
      [`${componentCls}-footer`]: {
        textAlign: 'end',
        background: token.footerBg,
        marginTop: token.footerMarginTop,
        padding: token.footerPadding,
        borderTop: token.footerBorderTop,
        borderRadius: token.footerBorderRadius,
        [`> ${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginInlineStart: token.marginXS
        }
      },
      [`${componentCls}-open`]: {
        overflow: 'hidden'
      }
    })
  },
  // ======================== Pure =========================
  {
    [`${componentCls}-pure-panel`]: {
      top: 'auto',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto'
      },
      [`${componentCls}-confirm-body`]: {
        marginBottom: 'auto'
      }
    }
  }];
};
const genRTLStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: 'rtl',
        [`${componentCls}-confirm-body`]: {
          direction: 'rtl'
        }
      }
    }
  };
};
// ============================== Export ==============================
const prepareToken = token => {
  const headerPaddingVertical = token.padding;
  const headerFontSize = token.fontSizeHeading5;
  const headerLineHeight = token.lineHeightHeading5;
  const modalToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__.mergeToken)(token, {
    modalHeaderHeight: token.calc(token.calc(headerLineHeight).mul(headerFontSize).equal()).add(token.calc(headerPaddingVertical).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterBorderWidth: token.lineWidth,
    modalCloseIconColor: token.colorIcon,
    modalCloseIconHoverColor: token.colorIconHover,
    modalCloseBtnSize: token.controlHeight,
    modalConfirmIconSize: token.fontHeight,
    modalTitleHeight: token.calc(token.titleFontSize).mul(token.titleLineHeight).equal()
  });
  return modalToken;
};
const prepareComponentToken = token => ({
  footerBg: 'transparent',
  headerBg: token.colorBgElevated,
  titleLineHeight: token.lineHeightHeading5,
  titleFontSize: token.fontSizeHeading5,
  contentBg: token.colorBgElevated,
  titleColor: token.colorTextHeading,
  // internal
  contentPadding: token.wireframe ? 0 : `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingMD)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingContentHorizontalLG)}`,
  headerPadding: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.padding)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingLG)}` : 0,
  headerBorderBottom: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
  headerMarginBottom: token.wireframe ? 0 : token.marginXS,
  bodyPadding: token.wireframe ? token.paddingLG : 0,
  footerPadding: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingXS)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.padding)}` : 0,
  footerBorderTop: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
  footerBorderRadius: token.wireframe ? `0 0 ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.borderRadiusLG)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.borderRadiusLG)}` : 0,
  footerMarginTop: token.wireframe ? 0 : token.marginSM,
  confirmBodyPadding: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.padding * 2)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.padding * 2)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: token.wireframe ? token.margin : token.marginSM,
  confirmBtnsMarginTop: token.wireframe ? token.marginLG : token.marginSM
});
/* harmony default export */ __webpack_exports__.ZP = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_4__/* .genStyleHooks */ .I$)('Modal', token => {
  const modalToken = prepareToken(token);
  return [genModalStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), (0,_style_motion__WEBPACK_IMPORTED_MODULE_5__/* .initZoomMotion */ ._y)(modalToken, 'zoom')];
}, prepareComponentToken, {
  unitless: {
    titleLineHeight: true
  }
}));

/***/ }),

/***/ 94813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Panel: function() { return /* reexport */ Content_Panel; },
  "default": function() { return /* binding */ rc_dialog_es; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(35453);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(88414);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+portal@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/portal/es/index.js + 6 modules
var es = __webpack_require__(54869);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dialog@9.6.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-dialog/es/context.js

var RefContext = /*#__PURE__*/react.createContext({});
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(80189);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Dom/contains.js
var contains = __webpack_require__(89107);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useId.js
var useId = __webpack_require__(2954);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(35763);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(91517);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dialog@9.6.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-dialog/es/util.js
// =============================== Motion ===============================
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;
  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }
  return motionName;
}

// =============================== Offset ===============================
function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.9.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-motion/es/index.js + 13 modules
var rc_motion_es = __webpack_require__(78878);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(40391);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(72439);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dialog@9.6.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-dialog/es/Dialog/Content/MemoChildren.js

/* harmony default export */ var MemoChildren = (/*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (_, _ref2) {
  var shouldUpdate = _ref2.shouldUpdate;
  return !shouldUpdate;
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dialog@9.6.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-dialog/es/Dialog/Content/Panel.js









var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
var entityStyle = {
  outline: 'none'
};
var Panel = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    title = props.title,
    ariaId = props.ariaId,
    footer = props.footer,
    closable = props.closable,
    closeIcon = props.closeIcon,
    onClose = props.onClose,
    children = props.children,
    bodyStyle = props.bodyStyle,
    bodyProps = props.bodyProps,
    modalRender = props.modalRender,
    onMouseDown = props.onMouseDown,
    onMouseUp = props.onMouseUp,
    holderRef = props.holderRef,
    visible = props.visible,
    forceRender = props.forceRender,
    width = props.width,
    height = props.height,
    modalClassNames = props.classNames,
    modalStyles = props.styles;

  // ================================= Refs =================================
  var _React$useContext = react.useContext(RefContext),
    panelRef = _React$useContext.panel;
  var mergedRef = (0,es_ref/* useComposeRef */.x1)(holderRef, panelRef);
  var sentinelStartRef = (0,react.useRef)();
  var sentinelEndRef = (0,react.useRef)();
  react.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;
        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 || _sentinelStartRef$cur.focus({
          preventScroll: true
        });
      },
      changeActive: function changeActive(next) {
        var _document = document,
          activeElement = _document.activeElement;
        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus({
            preventScroll: true
          });
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus({
            preventScroll: true
          });
        }
      }
    };
  });

  // ================================ Style =================================
  var contentStyle = {};
  if (width !== undefined) {
    contentStyle.width = width;
  }
  if (height !== undefined) {
    contentStyle.height = height;
  }
  // ================================ Render ================================
  var footerNode = footer ? /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-footer"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.footer),
    style: (0,objectSpread2/* default */.Z)({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.footer)
  }, footer) : null;
  var headerNode = title ? /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-header"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.header),
    style: (0,objectSpread2/* default */.Z)({}, modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.header)
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-title"),
    id: ariaId
  }, title)) : null;
  var closableObj = (0,react.useMemo)(function () {
    if ((0,esm_typeof/* default */.Z)(closable) === 'object' && closable !== null) {
      return closable;
    }
    if (closable) {
      return {
        closeIcon: closeIcon !== null && closeIcon !== void 0 ? closeIcon : /*#__PURE__*/react.createElement("span", {
          className: "".concat(prefixCls, "-close-x")
        })
      };
    }
    return {};
  }, [closable, closeIcon, prefixCls]);
  var ariaProps = (0,pickAttrs/* default */.Z)(closableObj, true);
  var closeBtnIsDisabled = (0,esm_typeof/* default */.Z)(closable) === 'object' && closable.disabled;
  var closerNode = closable ? /*#__PURE__*/react.createElement("button", (0,esm_extends/* default */.Z)({
    type: "button",
    onClick: onClose,
    "aria-label": "Close"
  }, ariaProps, {
    className: "".concat(prefixCls, "-close"),
    disabled: closeBtnIsDisabled
  }), closableObj.closeIcon) : null;
  var content = /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.content),
    style: modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.content
  }, closerNode, headerNode, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-body"), modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.body),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, bodyStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.body)
  }, bodyProps), children), footerNode);
  return /*#__PURE__*/react.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: mergedRef,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), contentStyle),
    className: classnames_default()(prefixCls, className),
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp
  }, /*#__PURE__*/react.createElement("div", {
    ref: sentinelStartRef,
    tabIndex: 0,
    style: entityStyle
  }, /*#__PURE__*/react.createElement(MemoChildren, {
    shouldUpdate: visible || forceRender
  }, modalRender ? modalRender(content) : content)), /*#__PURE__*/react.createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle
  }));
});
if (false) {}
/* harmony default export */ var Content_Panel = (Panel);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dialog@9.6.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-dialog/es/Dialog/Content/index.js









var Content = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    title = props.title,
    style = props.style,
    className = props.className,
    visible = props.visible,
    forceRender = props.forceRender,
    destroyOnClose = props.destroyOnClose,
    motionName = props.motionName,
    ariaId = props.ariaId,
    onVisibleChanged = props.onVisibleChanged,
    mousePosition = props.mousePosition;
  var dialogRef = (0,react.useRef)();

  // ============================= Style ==============================
  var _React$useState = react.useState(),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    transformOrigin = _React$useState2[0],
    setTransformOrigin = _React$useState2[1];
  var contentStyle = {};
  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }
  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(mousePosition && (mousePosition.x || mousePosition.y) ? "".concat(mousePosition.x - elementOffset.left, "px ").concat(mousePosition.y - elementOffset.top, "px") : '');
  }

  // ============================= Render =============================
  return /*#__PURE__*/react.createElement(rc_motion_es["default"], {
    visible: visible,
    onVisibleChanged: onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender: forceRender,
    motionName: motionName,
    removeOnLeave: destroyOnClose,
    ref: dialogRef
  }, function (_ref, motionRef) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement(Content_Panel, (0,esm_extends/* default */.Z)({}, props, {
      ref: ref,
      title: title,
      ariaId: ariaId,
      prefixCls: prefixCls,
      holderRef: motionRef,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style), contentStyle),
      className: classnames_default()(className, motionClassName)
    }));
  });
});
Content.displayName = 'Content';
/* harmony default export */ var Dialog_Content = (Content);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dialog@9.6.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-dialog/es/Dialog/Mask.js





var Mask = function Mask(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    visible = props.visible,
    maskProps = props.maskProps,
    motionName = props.motionName,
    className = props.className;
  return /*#__PURE__*/react.createElement(rc_motion_es["default"], {
    key: "mask",
    visible: visible,
    motionName: motionName,
    leavedClassName: "".concat(prefixCls, "-mask-hidden")
  }, function (_ref, ref) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      ref: ref,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style),
      className: classnames_default()("".concat(prefixCls, "-mask"), motionClassName, className)
    }, maskProps));
  });
};
/* harmony default export */ var Dialog_Mask = (Mask);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/warning.js
var warning = __webpack_require__(7302);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dialog@9.6.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-dialog/es/Dialog/index.js














var Dialog = function Dialog(props) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-dialog' : _props$prefixCls,
    zIndex = props.zIndex,
    _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    _props$keyboard = props.keyboard,
    keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
    _props$focusTriggerAf = props.focusTriggerAfterClose,
    focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
    wrapStyle = props.wrapStyle,
    wrapClassName = props.wrapClassName,
    wrapProps = props.wrapProps,
    onClose = props.onClose,
    afterOpenChange = props.afterOpenChange,
    afterClose = props.afterClose,
    transitionName = props.transitionName,
    animation = props.animation,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? true : _props$closable,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    maskTransitionName = props.maskTransitionName,
    maskAnimation = props.maskAnimation,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    maskStyle = props.maskStyle,
    maskProps = props.maskProps,
    rootClassName = props.rootClassName,
    modalClassNames = props.classNames,
    modalStyles = props.styles;
  if (false) {}
  var lastOutSideActiveElementRef = (0,react.useRef)();
  var wrapperRef = (0,react.useRef)();
  var contentRef = (0,react.useRef)();
  var _React$useState = react.useState(visible),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    animatedVisible = _React$useState2[0],
    setAnimatedVisible = _React$useState2[1];

  // ========================== Init ==========================
  var ariaId = (0,useId/* default */.Z)();
  function saveLastOutSideActiveElementRef() {
    if (!(0,contains/* default */.Z)(wrapperRef.current, document.activeElement)) {
      lastOutSideActiveElementRef.current = document.activeElement;
    }
  }
  function focusDialogContent() {
    if (!(0,contains/* default */.Z)(wrapperRef.current, document.activeElement)) {
      var _contentRef$current;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
    }
  }

  // ========================= Events =========================
  function onDialogVisibleChanged(newVisible) {
    // Try to focus
    if (newVisible) {
      focusDialogContent();
    } else {
      // Clean up scroll bar & focus back
      setAnimatedVisible(false);
      if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: true
          });
        } catch (e) {
          // Do nothing
        }
        lastOutSideActiveElementRef.current = null;
      }

      // Trigger afterClose only when change visible from true to false
      if (animatedVisible) {
        afterClose === null || afterClose === void 0 || afterClose();
      }
    }
    afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(newVisible);
  }
  function onInternalClose(e) {
    onClose === null || onClose === void 0 || onClose(e);
  }

  // >>> Content
  var contentClickRef = (0,react.useRef)(false);
  var contentTimeoutRef = (0,react.useRef)();

  // We need record content click incase content popup out of dialog
  var onContentMouseDown = function onContentMouseDown() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
  };
  var onContentMouseUp = function onContentMouseUp() {
    contentTimeoutRef.current = setTimeout(function () {
      contentClickRef.current = false;
    });
  };

  // >>> Wrapper
  // Close only when element not on dialog
  var onWrapperClick = null;
  if (maskClosable) {
    onWrapperClick = function onWrapperClick(e) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (wrapperRef.current === e.target) {
        onInternalClose(e);
      }
    };
  }
  function onWrapperKeyDown(e) {
    if (keyboard && e.keyCode === KeyCode/* default */.Z.ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    }

    // keep focus inside dialog
    if (visible && e.keyCode === KeyCode/* default */.Z.TAB) {
      contentRef.current.changeActive(!e.shiftKey);
    }
  }

  // ========================= Effect =========================
  (0,react.useEffect)(function () {
    if (visible) {
      setAnimatedVisible(true);
      saveLastOutSideActiveElementRef();
    }
  }, [visible]);

  // Remove direct should also check the scroll bar update
  (0,react.useEffect)(function () {
    return function () {
      clearTimeout(contentTimeoutRef.current);
    };
  }, []);
  var mergedStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    zIndex: zIndex
  }, wrapStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.wrapper), {}, {
    display: !animatedVisible ? 'none' : null
  });

  // ========================= Render =========================
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-root"), rootClassName)
  }, (0,pickAttrs/* default */.Z)(props, {
    data: true
  })), /*#__PURE__*/react.createElement(Dialog_Mask, {
    prefixCls: prefixCls,
    visible: mask && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      zIndex: zIndex
    }, maskStyle), modalStyles === null || modalStyles === void 0 ? void 0 : modalStyles.mask),
    maskProps: maskProps,
    className: modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.mask
  }), /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    tabIndex: -1,
    onKeyDown: onWrapperKeyDown,
    className: classnames_default()("".concat(prefixCls, "-wrap"), wrapClassName, modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.wrapper),
    ref: wrapperRef,
    onClick: onWrapperClick,
    style: mergedStyle
  }, wrapProps), /*#__PURE__*/react.createElement(Dialog_Content, (0,esm_extends/* default */.Z)({}, props, {
    onMouseDown: onContentMouseDown,
    onMouseUp: onContentMouseUp,
    ref: contentRef,
    closable: closable,
    ariaId: ariaId,
    prefixCls: prefixCls,
    visible: visible && animatedVisible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
};
/* harmony default export */ var es_Dialog = (Dialog);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dialog@9.6.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-dialog/es/DialogWrap.js






// fix issue #10656
/*
 * getContainer remarks
 * Custom container should not be return, because in the Portal component, it will remove the
 * return container element here, if the custom container is the only child of it's component,
 * like issue #10656, It will has a conflict with removeChild method in react-dom.
 * So here should add a child (div element) to custom container.
 * */

var DialogWrap = function DialogWrap(props) {
  var visible = props.visible,
    getContainer = props.getContainer,
    forceRender = props.forceRender,
    _props$destroyOnClose = props.destroyOnClose,
    destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
    _afterClose = props.afterClose,
    panelRef = props.panelRef;
  var _React$useState = react.useState(visible),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    animatedVisible = _React$useState2[0],
    setAnimatedVisible = _React$useState2[1];
  var refContext = react.useMemo(function () {
    return {
      panel: panelRef
    };
  }, [panelRef]);
  react.useEffect(function () {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);

  // Destroy on close will remove wrapped div
  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }
  return /*#__PURE__*/react.createElement(RefContext.Provider, {
    value: refContext
  }, /*#__PURE__*/react.createElement(es/* default */.Z, {
    open: visible || forceRender || animatedVisible,
    autoDestroy: false,
    getContainer: getContainer,
    autoLock: visible || animatedVisible
  }, /*#__PURE__*/react.createElement(es_Dialog, (0,esm_extends/* default */.Z)({}, props, {
    destroyOnClose: destroyOnClose,
    afterClose: function afterClose() {
      _afterClose === null || _afterClose === void 0 || _afterClose();
      setAnimatedVisible(false);
    }
  }))));
};
DialogWrap.displayName = 'Dialog';
/* harmony default export */ var es_DialogWrap = (DialogWrap);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dialog@9.6.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-dialog/es/index.js



/* harmony default export */ var rc_dialog_es = (es_DialogWrap);

/***/ })

}]);