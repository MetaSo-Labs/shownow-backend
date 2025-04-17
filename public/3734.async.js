"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3734],{

/***/ 16402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ getRenderPropValue; }
/* harmony export */ });
const getRenderPropValue = propValue => {
  if (!propValue) {
    return null;
  }
  return typeof propValue === 'function' ? propValue() : propValue;
};

/***/ }),

/***/ 83734:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ avatar; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(40493);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42684);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/responsiveObserver.js
var responsiveObserver = __webpack_require__(71087);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1225);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(36863);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(94053);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__(39432);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/avatar/AvatarContext.js

const AvatarContext = /*#__PURE__*/react.createContext({});
/* harmony default export */ var avatar_AvatarContext = (AvatarContext);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var cssinjs_es = __webpack_require__(20865);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(9894);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(21275);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83509);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/avatar/style/index.js



const genBaseStyle = token => {
  const {
    antCls,
    componentCls,
    iconCls,
    avatarBg,
    avatarColor,
    containerSize,
    containerSizeLG,
    containerSizeSM,
    textFontSize,
    textFontSizeLG,
    textFontSizeSM,
    borderRadius,
    borderRadiusLG,
    borderRadiusSM,
    lineWidth,
    lineType
  } = token;
  // Avatar size style
  const avatarSizeStyle = (size, fontSize, radius) => ({
    width: size,
    height: size,
    borderRadius: '50%',
    [`&${componentCls}-square`]: {
      borderRadius: radius
    },
    [`&${componentCls}-icon`]: {
      fontSize,
      [`> ${iconCls}`]: {
        margin: 0
      }
    }
  });
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'relative',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      color: avatarColor,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      verticalAlign: 'middle',
      background: avatarBg,
      border: `${(0,cssinjs_es.unit)(lineWidth)} ${lineType} transparent`,
      '&-image': {
        background: 'transparent'
      },
      [`${antCls}-image-img`]: {
        display: 'block'
      }
    }), avatarSizeStyle(containerSize, textFontSize, borderRadius)), {
      '&-lg': Object.assign({}, avatarSizeStyle(containerSizeLG, textFontSizeLG, borderRadiusLG)),
      '&-sm': Object.assign({}, avatarSizeStyle(containerSizeSM, textFontSizeSM, borderRadiusSM)),
      '> img': {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })
  };
};
const genGroupStyle = token => {
  const {
    componentCls,
    groupBorderColor,
    groupOverlapping,
    groupSpace
  } = token;
  return {
    [`${componentCls}-group`]: {
      display: 'inline-flex',
      [componentCls]: {
        borderColor: groupBorderColor
      },
      '> *:not(:first-child)': {
        marginInlineStart: groupOverlapping
      }
    },
    [`${componentCls}-group-popover`]: {
      [`${componentCls} + ${componentCls}`]: {
        marginInlineStart: groupSpace
      }
    }
  };
};
const prepareComponentToken = token => {
  const {
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    fontSize,
    fontSizeLG,
    fontSizeXL,
    fontSizeHeading3,
    marginXS,
    marginXXS,
    colorBorderBg
  } = token;
  return {
    containerSize: controlHeight,
    containerSizeLG: controlHeightLG,
    containerSizeSM: controlHeightSM,
    textFontSize: Math.round((fontSizeLG + fontSizeXL) / 2),
    textFontSizeLG: fontSizeHeading3,
    textFontSizeSM: fontSize,
    groupSpace: marginXXS,
    groupOverlapping: -marginXS,
    groupBorderColor: colorBorderBg
  };
};
/* harmony default export */ var avatar_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Avatar', token => {
  const {
    colorTextLightSolid,
    colorTextPlaceholder
  } = token;
  const avatarToken = (0,cssinjs_utils_es.mergeToken)(token, {
    avatarBg: colorTextPlaceholder,
    avatarColor: colorTextLightSolid
  });
  return [genBaseStyle(avatarToken), genGroupStyle(avatarToken)];
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/avatar/Avatar.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












const Avatar = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      shape,
      size: customSize,
      src,
      srcSet,
      icon,
      className,
      rootClassName,
      style,
      alt,
      draggable,
      children,
      crossOrigin,
      gap = 4,
      onError
    } = props,
    others = __rest(props, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "rootClassName", "style", "alt", "draggable", "children", "crossOrigin", "gap", "onError"]);
  const [scale, setScale] = react.useState(1);
  const [mounted, setMounted] = react.useState(false);
  const [isImgExist, setIsImgExist] = react.useState(true);
  const avatarNodeRef = react.useRef(null);
  const avatarChildrenRef = react.useRef(null);
  const avatarNodeMergedRef = (0,es_ref/* composeRef */.sQ)(ref, avatarNodeRef);
  const {
    getPrefixCls,
    avatar
  } = react.useContext(context/* ConfigContext */.E_);
  const avatarCtx = react.useContext(avatar_AvatarContext);
  const setScaleParam = () => {
    if (!avatarChildrenRef.current || !avatarNodeRef.current) {
      return;
    }
    const childrenWidth = avatarChildrenRef.current.offsetWidth; // offsetWidth avoid affecting be transform scale
    const nodeWidth = avatarNodeRef.current.offsetWidth;
    // denominator is 0 is no meaning
    if (childrenWidth !== 0 && nodeWidth !== 0) {
      if (gap * 2 < nodeWidth) {
        setScale(nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1);
      }
    }
  };
  react.useEffect(() => {
    setMounted(true);
  }, []);
  react.useEffect(() => {
    setIsImgExist(true);
    setScale(1);
  }, [src]);
  react.useEffect(setScaleParam, [gap]);
  const handleImgLoadError = () => {
    const errorFlag = onError === null || onError === void 0 ? void 0 : onError();
    if (errorFlag !== false) {
      setIsImgExist(false);
    }
  };
  const size = (0,useSize/* default */.Z)(ctxSize => {
    var _a, _b;
    return (_b = (_a = customSize !== null && customSize !== void 0 ? customSize : avatarCtx === null || avatarCtx === void 0 ? void 0 : avatarCtx.size) !== null && _a !== void 0 ? _a : ctxSize) !== null && _b !== void 0 ? _b : 'default';
  });
  const needResponsive = Object.keys(typeof size === 'object' ? size || {} : {}).some(key => ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(key));
  const screens = (0,useBreakpoint/* default */.Z)(needResponsive);
  const responsiveSizeStyle = react.useMemo(() => {
    if (typeof size !== 'object') {
      return {};
    }
    const currentBreakpoint = responsiveObserver/* responsiveArray */.c4.find(screen => screens[screen]);
    const currentSize = size[currentBreakpoint];
    return currentSize ? {
      width: currentSize,
      height: currentSize,
      fontSize: currentSize && (icon || children) ? currentSize / 2 : 18
    } : {};
  }, [screens, size]);
  if (false) {}
  const prefixCls = getPrefixCls('avatar', customizePrefixCls);
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = avatar_style(prefixCls, rootCls);
  const sizeCls = classnames_default()({
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-sm`]: size === 'small'
  });
  const hasImageElement = /*#__PURE__*/react.isValidElement(src);
  const mergedShape = shape || (avatarCtx === null || avatarCtx === void 0 ? void 0 : avatarCtx.shape) || 'circle';
  const classString = classnames_default()(prefixCls, sizeCls, avatar === null || avatar === void 0 ? void 0 : avatar.className, `${prefixCls}-${mergedShape}`, {
    [`${prefixCls}-image`]: hasImageElement || src && isImgExist,
    [`${prefixCls}-icon`]: !!icon
  }, cssVarCls, rootCls, className, rootClassName, hashId);
  const sizeStyle = typeof size === 'number' ? {
    width: size,
    height: size,
    fontSize: icon ? size / 2 : 18
  } : {};
  let childrenToRender;
  if (typeof src === 'string' && isImgExist) {
    childrenToRender = /*#__PURE__*/react.createElement("img", {
      src: src,
      draggable: draggable,
      srcSet: srcSet,
      onError: handleImgLoadError,
      alt: alt,
      crossOrigin: crossOrigin
    });
  } else if (hasImageElement) {
    childrenToRender = src;
  } else if (icon) {
    childrenToRender = icon;
  } else if (mounted || scale !== 1) {
    const transformString = `scale(${scale})`;
    const childrenStyle = {
      msTransform: transformString,
      WebkitTransform: transformString,
      transform: transformString
    };
    childrenToRender = /*#__PURE__*/react.createElement(es["default"], {
      onResize: setScaleParam
    }, /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-string`,
      ref: avatarChildrenRef,
      style: Object.assign({}, childrenStyle)
    }, children));
  } else {
    childrenToRender = /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-string`,
      style: {
        opacity: 0
      },
      ref: avatarChildrenRef
    }, children);
  }
  return wrapCSSVar(/*#__PURE__*/react.createElement("span", Object.assign({}, others, {
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, sizeStyle), responsiveSizeStyle), avatar === null || avatar === void 0 ? void 0 : avatar.style), style),
    className: classString,
    ref: avatarNodeMergedRef
  }), childrenToRender));
});
if (false) {}
/* harmony default export */ var avatar_Avatar = (Avatar);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(81626);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(84199);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/popover/index.js
var popover = __webpack_require__(78194);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/avatar/AvatarGroup.js
"use client";












const AvatarContextProvider = props => {
  const {
    size,
    shape
  } = react.useContext(avatar_AvatarContext);
  const avatarContextValue = react.useMemo(() => ({
    size: props.size || size,
    shape: props.shape || shape
  }), [props.size, props.shape, size, shape]);
  return /*#__PURE__*/react.createElement(avatar_AvatarContext.Provider, {
    value: avatarContextValue
  }, props.children);
};
const AvatarGroup = props => {
  var _a, _b, _c, _d;
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    maxCount,
    maxStyle,
    size,
    shape,
    maxPopoverPlacement,
    maxPopoverTrigger,
    children,
    max
  } = props;
  if (false) {}
  const prefixCls = getPrefixCls('avatar', customizePrefixCls);
  const groupPrefixCls = `${prefixCls}-group`;
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = avatar_style(prefixCls, rootCls);
  const cls = classnames_default()(groupPrefixCls, {
    [`${groupPrefixCls}-rtl`]: direction === 'rtl'
  }, cssVarCls, rootCls, className, rootClassName, hashId);
  const childrenWithProps = (0,toArray/* default */.Z)(children).map((child, index) => (0,reactNode/* cloneElement */.Tm)(child, {
    // eslint-disable-next-line react/no-array-index-key
    key: `avatar-key-${index}`
  }));
  const mergeCount = (max === null || max === void 0 ? void 0 : max.count) || maxCount;
  const numOfChildren = childrenWithProps.length;
  if (mergeCount && mergeCount < numOfChildren) {
    const childrenShow = childrenWithProps.slice(0, mergeCount);
    const childrenHidden = childrenWithProps.slice(mergeCount, numOfChildren);
    const mergeStyle = (max === null || max === void 0 ? void 0 : max.style) || maxStyle;
    const mergePopoverTrigger = ((_a = max === null || max === void 0 ? void 0 : max.popover) === null || _a === void 0 ? void 0 : _a.trigger) || maxPopoverTrigger || 'hover';
    const mergePopoverPlacement = ((_b = max === null || max === void 0 ? void 0 : max.popover) === null || _b === void 0 ? void 0 : _b.placement) || maxPopoverPlacement || 'top';
    const mergeProps = Object.assign(Object.assign({
      content: childrenHidden
    }, max === null || max === void 0 ? void 0 : max.popover), {
      classNames: {
        root: classnames_default()(`${groupPrefixCls}-popover`, (_d = (_c = max === null || max === void 0 ? void 0 : max.popover) === null || _c === void 0 ? void 0 : _c.classNames) === null || _d === void 0 ? void 0 : _d.root)
      },
      placement: mergePopoverPlacement,
      trigger: mergePopoverTrigger
    });
    childrenShow.push(/*#__PURE__*/react.createElement(popover/* default */.Z, Object.assign({
      key: "avatar-popover-key",
      destroyTooltipOnHide: true
    }, mergeProps), /*#__PURE__*/react.createElement(avatar_Avatar, {
      style: mergeStyle
    }, `+${numOfChildren - mergeCount}`)));
    return wrapCSSVar(/*#__PURE__*/react.createElement(AvatarContextProvider, {
      shape: shape,
      size: size
    }, /*#__PURE__*/react.createElement("div", {
      className: cls,
      style: style
    }, childrenShow)));
  }
  return wrapCSSVar(/*#__PURE__*/react.createElement(AvatarContextProvider, {
    shape: shape,
    size: size
  }, /*#__PURE__*/react.createElement("div", {
    className: cls,
    style: style
  }, childrenWithProps)));
};
/* harmony default export */ var avatar_AvatarGroup = (AvatarGroup);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/avatar/index.js
"use client";



const es_avatar_Avatar = avatar_Avatar;
es_avatar_Avatar.Group = avatar_AvatarGroup;
/* harmony default export */ var avatar = (es_avatar_Avatar);

/***/ }),

/***/ 42426:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aV: function() { return /* binding */ Overlay; }
/* harmony export */ });
/* unused harmony export RawPurePanel */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82187);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75219);
/* harmony import */ var _util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16402);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1225);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92640);
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






const Overlay = _ref => {
  let {
    title,
    content,
    prefixCls
  } = _ref;
  if (!title && !content) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: `${prefixCls}-title`
  }, title), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: `${prefixCls}-inner-content`
  }, content));
};
const RawPurePanel = props => {
  const {
    hashId,
    prefixCls,
    className,
    style,
    placement = 'top',
    title,
    content,
    children
  } = props;
  const titleNode = (0,_util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_3__/* .getRenderPropValue */ .Z)(title);
  const contentNode = (0,_util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_3__/* .getRenderPropValue */ .Z)(content);
  const cls = classnames__WEBPACK_IMPORTED_MODULE_1___default()(hashId, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: cls,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: `${prefixCls}-arrow`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(rc_tooltip__WEBPACK_IMPORTED_MODULE_2__.Popup, Object.assign({}, props, {
    className: hashId,
    prefixCls: prefixCls
  }), children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay, {
    prefixCls: prefixCls,
    title: titleNode,
    content: contentNode
  })));
};
const PurePanel = props => {
  const {
      prefixCls: customizePrefixCls,
      className
    } = props,
    restProps = __rest(props, ["prefixCls", "className"]);
  const {
    getPrefixCls
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_4__/* .ConfigContext */ .E_);
  const prefixCls = getPrefixCls('popover', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(prefixCls);
  return wrapCSSVar(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RawPurePanel, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    hashId: hashId,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, cssVarCls)
  })));
};
/* harmony default export */ __webpack_exports__.ZP = (PurePanel);

/***/ }),

/***/ 78194:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82187);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93954);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14583);
/* harmony import */ var _util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16402);
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60603);
/* harmony import */ var _util_reactNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84199);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30430);
/* harmony import */ var _PurePanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42426);
/* harmony import */ var _config_provider_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1225);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92640);
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










// CSSINJS

const InternalPopover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
  var _a, _b;
  const {
      prefixCls: customizePrefixCls,
      title,
      content,
      overlayClassName,
      placement = 'top',
      trigger = 'hover',
      children,
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      onOpenChange,
      overlayStyle = {},
      styles,
      classNames: popoverClassNames
    } = props,
    otherProps = __rest(props, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "children", "mouseEnterDelay", "mouseLeaveDelay", "onOpenChange", "overlayStyle", "styles", "classNames"]);
  const {
    getPrefixCls,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,_config_provider_context__WEBPACK_IMPORTED_MODULE_4__/* .useComponentConfig */ .dj)('popover');
  const prefixCls = getPrefixCls('popover', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,_style__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(prefixCls);
  const rootPrefixCls = getPrefixCls();
  const rootClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(overlayClassName, hashId, cssVarCls, contextClassName, contextClassNames.root, popoverClassNames === null || popoverClassNames === void 0 ? void 0 : popoverClassNames.root);
  const bodyClassNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(contextClassNames.body, popoverClassNames === null || popoverClassNames === void 0 ? void 0 : popoverClassNames.body);
  const [open, setOpen] = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(false, {
    value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
    defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
  });
  const settingOpen = (value, e) => {
    setOpen(value, true);
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(value, e);
  };
  const onKeyDown = e => {
    if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.ESC) {
      settingOpen(false, e);
    }
  };
  const onInternalOpenChange = value => {
    settingOpen(value);
  };
  const titleNode = (0,_util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_6__/* .getRenderPropValue */ .Z)(title);
  const contentNode = (0,_util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_6__/* .getRenderPropValue */ .Z)(content);
  return wrapCSSVar(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, Object.assign({
    placement: placement,
    trigger: trigger,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay
  }, otherProps, {
    prefixCls: prefixCls,
    classNames: {
      root: rootClassNames,
      body: bodyClassNames
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign({}, contextStyles.root), contextStyle), overlayStyle), styles === null || styles === void 0 ? void 0 : styles.root),
      body: Object.assign(Object.assign({}, contextStyles.body), styles === null || styles === void 0 ? void 0 : styles.body)
    },
    ref: ref,
    open: open,
    onOpenChange: onInternalOpenChange,
    overlay: titleNode || contentNode ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PurePanel__WEBPACK_IMPORTED_MODULE_8__/* .Overlay */ .aV, {
      prefixCls: prefixCls,
      title: titleNode,
      content: contentNode
    })) : null,
    transitionName: (0,_util_motion__WEBPACK_IMPORTED_MODULE_9__/* .getTransitionName */ .m)(rootPrefixCls, 'zoom-big', otherProps.transitionName),
    "data-popover-inject": true
  }), (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_10__/* .cloneElement */ .Tm)(children, {
    onKeyDown: e => {
      var _a, _b;
      if (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
        (_b = children === null || children === void 0 ? void 0 : (_a = children.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, e);
      }
      onKeyDown(e);
    }
  })));
});
const Popover = InternalPopover;
Popover._InternalPanelDoNotUseOrYouWillBeFired = _PurePanel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP;
if (false) {}
/* harmony default export */ __webpack_exports__.Z = (Popover);

/***/ }),

/***/ 92640:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export prepareComponentToken */
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9894);
/* harmony import */ var _style_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82887);
/* harmony import */ var _style_placementArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18073);
/* harmony import */ var _style_roundedArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2454);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18781);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21275);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83509);





const genBaseStyle = token => {
  const {
    componentCls,
    popoverColor,
    titleMinWidth,
    fontWeightStrong,
    innerPadding,
    boxShadowSecondary,
    colorTextHeading,
    borderRadiusLG,
    zIndexPopup,
    titleMarginBottom,
    colorBgElevated,
    popoverBg,
    titleBorderBottom,
    innerContentPadding,
    titlePadding
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_0__/* .resetComponent */ .Wf)(token)), {
      position: 'absolute',
      top: 0,
      // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
      left: {
        _skip_check_: true,
        value: 0
      },
      zIndex: zIndexPopup,
      fontWeight: 'normal',
      whiteSpace: 'normal',
      textAlign: 'start',
      cursor: 'auto',
      userSelect: 'text',
      // When use `autoArrow`, origin will follow the arrow position
      '--valid-offset-x': 'var(--arrow-offset-horizontal, var(--arrow-x))',
      transformOrigin: [`var(--valid-offset-x, 50%)`, `var(--arrow-y, 50%)`].join(' '),
      '--antd-arrow-background-color': colorBgElevated,
      width: 'max-content',
      maxWidth: '100vw',
      '&-rtl': {
        direction: 'rtl'
      },
      '&-hidden': {
        display: 'none'
      },
      [`${componentCls}-content`]: {
        position: 'relative'
      },
      [`${componentCls}-inner`]: {
        backgroundColor: popoverBg,
        backgroundClip: 'padding-box',
        borderRadius: borderRadiusLG,
        boxShadow: boxShadowSecondary,
        padding: innerPadding
      },
      [`${componentCls}-title`]: {
        minWidth: titleMinWidth,
        marginBottom: titleMarginBottom,
        color: colorTextHeading,
        fontWeight: fontWeightStrong,
        borderBottom: titleBorderBottom,
        padding: titlePadding
      },
      [`${componentCls}-inner-content`]: {
        color: popoverColor,
        padding: innerContentPadding
      }
    })
  },
  // Arrow Style
  (0,_style_placementArrow__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(token, 'var(--antd-arrow-background-color)'),
  // Pure Render
  {
    [`${componentCls}-pure`]: {
      position: 'relative',
      maxWidth: 'none',
      margin: token.sizePopupArrow,
      display: 'inline-block',
      [`${componentCls}-content`]: {
        display: 'inline-block'
      }
    }
  }];
};
const genColorStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: _theme_internal__WEBPACK_IMPORTED_MODULE_2__/* .PresetColors */ .i.map(colorKey => {
      const lightColor = token[`${colorKey}6`];
      return {
        [`&${componentCls}-${colorKey}`]: {
          '--antd-arrow-background-color': lightColor,
          [`${componentCls}-inner`]: {
            backgroundColor: lightColor
          },
          [`${componentCls}-arrow`]: {
            background: 'transparent'
          }
        }
      };
    })
  };
};
const prepareComponentToken = token => {
  const {
    lineWidth,
    controlHeight,
    fontHeight,
    padding,
    wireframe,
    zIndexPopupBase,
    borderRadiusLG,
    marginXS,
    lineType,
    colorSplit,
    paddingSM
  } = token;
  const titlePaddingBlockDist = controlHeight - fontHeight;
  const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
  const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
  const popoverPaddingHorizontal = padding;
  return Object.assign(Object.assign(Object.assign({
    titleMinWidth: 177,
    zIndexPopup: zIndexPopupBase + 30
  }, (0,_style_roundedArrow__WEBPACK_IMPORTED_MODULE_3__/* .getArrowToken */ .w)(token)), (0,_style_placementArrow__WEBPACK_IMPORTED_MODULE_1__/* .getArrowOffsetToken */ .wZ)({
    contentRadius: borderRadiusLG,
    limitVerticalRadius: true
  })), {
    // internal
    innerPadding: wireframe ? 0 : 12,
    titleMarginBottom: wireframe ? 0 : marginXS,
    titlePadding: wireframe ? `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px` : 0,
    titleBorderBottom: wireframe ? `${lineWidth}px ${lineType} ${colorSplit}` : 'none',
    innerContentPadding: wireframe ? `${paddingSM}px ${popoverPaddingHorizontal}px` : 0
  });
};
/* harmony default export */ __webpack_exports__.Z = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_4__/* .genStyleHooks */ .I$)('Popover', token => {
  const {
    colorBgElevated,
    colorText
  } = token;
  const popoverToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_5__.mergeToken)(token, {
    popoverBg: colorBgElevated,
    popoverColor: colorText
  });
  return [genBaseStyle(popoverToken), genColorStyle(popoverToken), (0,_style_motion__WEBPACK_IMPORTED_MODULE_6__/* .initZoomMotion */ ._y)(popoverToken, 'zoom-big')];
}, prepareComponentToken, {
  resetStyle: false,
  deprecatedTokens: [['width', 'titleMinWidth'], ['minWidth', 'titleMinWidth']]
}));

/***/ })

}]);