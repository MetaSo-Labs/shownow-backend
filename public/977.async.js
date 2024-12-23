(self["webpackChunk"] = self["webpackChunk"] || []).push([[977],{

/***/ 20466:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_EditOutlined; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(35453);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/EditOutlined.js
// This icon file is generated automatically.
var EditOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, "name": "edit", "theme": "outlined" };
/* harmony default export */ var asn_EditOutlined = (EditOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(46569);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/EditOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var EditOutlined_EditOutlined = function EditOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_EditOutlined
  }));
};

/**![edit](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI1Ny43IDc1MmMyIDAgNC0uMiA2LS41TDQzMS45IDcyMmMyLS40IDMuOS0xLjMgNS4zLTIuOGw0MjMuOS00MjMuOWE5Ljk2IDkuOTYgMCAwMDAtMTQuMUw2OTQuOSAxMTQuOWMtMS45LTEuOS00LjQtMi45LTcuMS0yLjlzLTUuMiAxLTcuMSAyLjlMMjU2LjggNTM4LjhjLTEuNSAxLjUtMi40IDMuMy0yLjggNS4zbC0yOS41IDE2OC4yYTMzLjUgMzMuNSAwIDAwOS40IDI5LjhjNi42IDYuNCAxNC45IDkuOSAyMy44IDkuOXptNjcuNC0xNzQuNEw2ODcuOCAyMTVsNzMuMyA3My4zLTM2Mi43IDM2Mi42LTg4LjkgMTUuNyAxNS42LTg5ek04ODAgODM2SDE0NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzZjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTM2YzAtMTcuNy0xNC4zLTMyLTMyLTMyeiIgLz48L3N2Zz4=) */
var RefIcon = /*#__PURE__*/react.forwardRef(EditOutlined_EditOutlined);
if (false) {}
/* harmony default export */ var icons_EditOutlined = (RefIcon);

/***/ }),

/***/ 30336:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ withPureRenderTheme; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31998);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38587);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83756);
"use client";




function withPureRenderTheme(Component) {
  return props => (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
    theme: {
      token: {
        motion: false,
        zIndexPopupBase: 0
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, Object.assign({}, props))));
}
/* istanbul ignore next */
const genPurePanel = (Component, defaultPrefixCls, getDropdownCls, postProps) => {
  const PurePanel = props => {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const [popupHeight, setPopupHeight] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const [popupWidth, setPopupWidth] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const [open, setOpen] = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__/* .ConfigContext */ .E_);
    const prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      // We do not care about ssr
      setOpen(true);
      if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(entries => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a;
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    let mergedProps = Object.assign(Object.assign({}, props), {
      style: Object.assign(Object.assign({}, style), {
        margin: 0
      }),
      open,
      visible: open,
      getPopupContainer: () => holderRef.current
    });
    if (postProps) {
      mergedProps = postProps(mergedProps);
    }
    const mergedStyle = {
      paddingBottom: popupHeight,
      position: 'relative',
      minWidth: popupWidth
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: holderRef,
      style: mergedStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, Object.assign({}, mergedProps)));
  };
  return withPureRenderTheme(PurePanel);
};
/* harmony default export */ __webpack_exports__.Z = (genPurePanel);

/***/ }),

/***/ 64384:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useClosable; },
/* harmony export */   w: function() { return /* binding */ pickClosable; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71232);
/* harmony import */ var rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91517);
"use client";




function pickClosable(context) {
  if (!context) {
    return undefined;
  }
  return {
    closable: context.closable,
    closeIcon: context.closeIcon
  };
}
/** Convert `closable` and `closeIcon` to config object */
function useClosableConfig(closableCollection) {
  const {
    closable,
    closeIcon
  } = closableCollection || {};
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (
    // If `closable`, whatever rest be should be true
    !closable && (closable === false || closeIcon === false || closeIcon === null)) {
      return false;
    }
    if (closable === undefined && closeIcon === undefined) {
      return null;
    }
    let closableConfig = {
      closeIcon: typeof closeIcon !== 'boolean' && closeIcon !== null ? closeIcon : undefined
    };
    if (closable && typeof closable === 'object') {
      closableConfig = Object.assign(Object.assign({}, closableConfig), closable);
    }
    return closableConfig;
  }, [closable, closeIcon]);
}
/**
 * Assign object without `undefined` field. Will skip if is `false`.
 * This helps to handle both closableConfig or false
 */
function assignWithoutUndefined() {
  const target = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
    objList[_key] = arguments[_key];
  }
  objList.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        if (obj[key] !== undefined) {
          target[key] = obj[key];
        }
      });
    }
  });
  return target;
}
/** Use same object to support `useMemo` optimization */
const EmptyFallbackCloseCollection = {};
function useClosable(propCloseCollection, contextCloseCollection) {
  let fallbackCloseCollection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EmptyFallbackCloseCollection;
  // Align the `props`, `context` `fallback` to config object first
  const propCloseConfig = useClosableConfig(propCloseCollection);
  const contextCloseConfig = useClosableConfig(contextCloseCollection);
  const closeBtnIsDisabled = typeof propCloseConfig !== 'boolean' ? !!(propCloseConfig === null || propCloseConfig === void 0 ? void 0 : propCloseConfig.disabled) : false;
  const mergedFallbackCloseCollection = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => Object.assign({
    closeIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null)
  }, fallbackCloseCollection), [fallbackCloseCollection]);
  // Use fallback logic to fill the config
  const mergedClosableConfig = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // ================ Props First ================
    // Skip if prop is disabled
    if (propCloseConfig === false) {
      return false;
    }
    if (propCloseConfig) {
      return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig);
    }
    // =============== Context Second ==============
    // Skip if context is disabled
    if (contextCloseConfig === false) {
      return false;
    }
    if (contextCloseConfig) {
      return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig);
    }
    // ============= Fallback Default ==============
    return !mergedFallbackCloseCollection.closable ? false : mergedFallbackCloseCollection;
  }, [propCloseConfig, contextCloseConfig, mergedFallbackCloseCollection]);
  // Calculate the final closeIcon
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (mergedClosableConfig === false) {
      return [false, null, closeBtnIsDisabled];
    }
    const {
      closeIconRender
    } = mergedFallbackCloseCollection;
    const {
      closeIcon
    } = mergedClosableConfig;
    let mergedCloseIcon = closeIcon;
    if (mergedCloseIcon !== null && mergedCloseIcon !== undefined) {
      // Wrap the closeIcon if needed
      if (closeIconRender) {
        mergedCloseIcon = closeIconRender(closeIcon);
      }
      // Wrap the closeIcon with aria props
      const ariaProps = (0,rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(mergedClosableConfig, true);
      if (Object.keys(ariaProps).length) {
        mergedCloseIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(mergedCloseIcon) ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(mergedCloseIcon, ariaProps)) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", Object.assign({}, ariaProps), mergedCloseIcon));
      }
    }
    return [true, mergedCloseIcon, closeBtnIsDisabled];
  }, [mergedClosableConfig, mergedFallbackCloseCollection]);
}

/***/ }),

/***/ 85597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ drawer; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(80189);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(88414);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+portal@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/portal/es/index.js + 7 modules
var es = __webpack_require__(13643);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(50979);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-drawer@7.2.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-drawer/es/context.js

var DrawerContext = /*#__PURE__*/react.createContext(null);
var RefContext = /*#__PURE__*/react.createContext({});
/* harmony default export */ var context = (DrawerContext);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(63297);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(35453);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.9.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-motion/es/index.js + 13 modules
var rc_motion_es = __webpack_require__(78878);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(35763);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(91517);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(93556);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/ref.js
var ref = __webpack_require__(47486);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-drawer@7.2.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-drawer/es/DrawerPanel.js


var _excluded = ["prefixCls", "className", "containerRef"];





var DrawerPanel = function DrawerPanel(props) {
  var prefixCls = props.prefixCls,
    className = props.className,
    containerRef = props.containerRef,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var _React$useContext = react.useContext(RefContext),
    panelRef = _React$useContext.panel;
  var mergedRef = (0,ref/* useComposeRef */.x1)(panelRef, containerRef);

  // =============================== Render ===============================

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-content"), className),
    role: "dialog",
    ref: mergedRef
  }, (0,pickAttrs/* default */.Z)(props, {
    aria: true
  }), {
    "aria-modal": "true"
  }, restProps));
};
if (false) {}
/* harmony default export */ var es_DrawerPanel = (DrawerPanel);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/warning.js
var es_warning = __webpack_require__(7302);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-drawer@7.2.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-drawer/es/util.js


function parseWidthHeight(value) {
  if (typeof value === 'string' && String(Number(value)) === value) {
    (0,es_warning/* default */.ZP)(false, 'Invalid value type of `width` or `height` which should be number type instead.');
    return Number(value);
  }
  return value;
}
function warnCheck(props) {
  warning(!('wrapperClassName' in props), "'wrapperClassName' is removed. Please use 'rootClassName' instead.");
  warning(canUseDom() || !props.open, "Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.");
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-drawer@7.2.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-drawer/es/DrawerPopup.js












var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none',
  position: 'absolute'
};
function DrawerPopup(props, ref) {
  var _ref, _pushConfig$distance, _pushConfig;
  var prefixCls = props.prefixCls,
    open = props.open,
    placement = props.placement,
    inline = props.inline,
    push = props.push,
    forceRender = props.forceRender,
    autoFocus = props.autoFocus,
    keyboard = props.keyboard,
    drawerClassNames = props.classNames,
    rootClassName = props.rootClassName,
    rootStyle = props.rootStyle,
    zIndex = props.zIndex,
    className = props.className,
    id = props.id,
    style = props.style,
    motion = props.motion,
    width = props.width,
    height = props.height,
    children = props.children,
    mask = props.mask,
    maskClosable = props.maskClosable,
    maskMotion = props.maskMotion,
    maskClassName = props.maskClassName,
    maskStyle = props.maskStyle,
    afterOpenChange = props.afterOpenChange,
    onClose = props.onClose,
    onMouseEnter = props.onMouseEnter,
    onMouseOver = props.onMouseOver,
    onMouseLeave = props.onMouseLeave,
    onClick = props.onClick,
    onKeyDown = props.onKeyDown,
    onKeyUp = props.onKeyUp,
    styles = props.styles,
    drawerRender = props.drawerRender;

  // ================================ Refs ================================
  var panelRef = react.useRef();
  var sentinelStartRef = react.useRef();
  var sentinelEndRef = react.useRef();
  react.useImperativeHandle(ref, function () {
    return panelRef.current;
  });
  var onPanelKeyDown = function onPanelKeyDown(event) {
    var keyCode = event.keyCode,
      shiftKey = event.shiftKey;
    switch (keyCode) {
      // Tab active
      case KeyCode/* default */.Z.TAB:
        {
          if (keyCode === KeyCode/* default */.Z.TAB) {
            if (!shiftKey && document.activeElement === sentinelEndRef.current) {
              var _sentinelStartRef$cur;
              (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 || _sentinelStartRef$cur.focus({
                preventScroll: true
              });
            } else if (shiftKey && document.activeElement === sentinelStartRef.current) {
              var _sentinelEndRef$curre;
              (_sentinelEndRef$curre = sentinelEndRef.current) === null || _sentinelEndRef$curre === void 0 || _sentinelEndRef$curre.focus({
                preventScroll: true
              });
            }
          }
          break;
        }

      // Close
      case KeyCode/* default */.Z.ESC:
        {
          if (onClose && keyboard) {
            event.stopPropagation();
            onClose(event);
          }
          break;
        }
    }
  };

  // ========================== Control ===========================
  // Auto Focus
  react.useEffect(function () {
    if (open && autoFocus) {
      var _panelRef$current;
      (_panelRef$current = panelRef.current) === null || _panelRef$current === void 0 || _panelRef$current.focus({
        preventScroll: true
      });
    }
  }, [open]);

  // ============================ Push ============================
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    pushed = _React$useState2[0],
    setPushed = _React$useState2[1];
  var parentContext = react.useContext(context);

  // Merge push distance
  var pushConfig;
  if (typeof push === 'boolean') {
    pushConfig = push ? {} : {
      distance: 0
    };
  } else {
    pushConfig = push || {};
  }
  var pushDistance = (_ref = (_pushConfig$distance = (_pushConfig = pushConfig) === null || _pushConfig === void 0 ? void 0 : _pushConfig.distance) !== null && _pushConfig$distance !== void 0 ? _pushConfig$distance : parentContext === null || parentContext === void 0 ? void 0 : parentContext.pushDistance) !== null && _ref !== void 0 ? _ref : 180;
  var mergedContext = react.useMemo(function () {
    return {
      pushDistance: pushDistance,
      push: function push() {
        setPushed(true);
      },
      pull: function pull() {
        setPushed(false);
      }
    };
  }, [pushDistance]);

  // ========================= ScrollLock =========================
  // Tell parent to push
  react.useEffect(function () {
    if (open) {
      var _parentContext$push;
      parentContext === null || parentContext === void 0 || (_parentContext$push = parentContext.push) === null || _parentContext$push === void 0 || _parentContext$push.call(parentContext);
    } else {
      var _parentContext$pull;
      parentContext === null || parentContext === void 0 || (_parentContext$pull = parentContext.pull) === null || _parentContext$pull === void 0 || _parentContext$pull.call(parentContext);
    }
  }, [open]);

  // Clean up
  react.useEffect(function () {
    return function () {
      var _parentContext$pull2;
      parentContext === null || parentContext === void 0 || (_parentContext$pull2 = parentContext.pull) === null || _parentContext$pull2 === void 0 || _parentContext$pull2.call(parentContext);
    };
  }, []);

  // ============================ Mask ============================
  var maskNode = mask && /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, (0,esm_extends/* default */.Z)({
    key: "mask"
  }, maskMotion, {
    visible: open
  }), function (_ref2, maskRef) {
    var motionMaskClassName = _ref2.className,
      motionMaskStyle = _ref2.style;
    return /*#__PURE__*/react.createElement("div", {
      className: classnames_default()("".concat(prefixCls, "-mask"), motionMaskClassName, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.mask, maskClassName),
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionMaskStyle), maskStyle), styles === null || styles === void 0 ? void 0 : styles.mask),
      onClick: maskClosable && open ? onClose : undefined,
      ref: maskRef
    });
  });

  // =========================== Panel ============================
  var motionProps = typeof motion === 'function' ? motion(placement) : motion;
  var wrapperStyle = {};
  if (pushed && pushDistance) {
    switch (placement) {
      case 'top':
        wrapperStyle.transform = "translateY(".concat(pushDistance, "px)");
        break;
      case 'bottom':
        wrapperStyle.transform = "translateY(".concat(-pushDistance, "px)");
        break;
      case 'left':
        wrapperStyle.transform = "translateX(".concat(pushDistance, "px)");
        break;
      default:
        wrapperStyle.transform = "translateX(".concat(-pushDistance, "px)");
        break;
    }
  }
  if (placement === 'left' || placement === 'right') {
    wrapperStyle.width = parseWidthHeight(width);
  } else {
    wrapperStyle.height = parseWidthHeight(height);
  }
  var eventHandlers = {
    onMouseEnter: onMouseEnter,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    onClick: onClick,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  };
  var panelNode = /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, (0,esm_extends/* default */.Z)({
    key: "panel"
  }, motionProps, {
    visible: open,
    forceRender: forceRender,
    onVisibleChanged: function onVisibleChanged(nextVisible) {
      afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(nextVisible);
    },
    removeOnLeave: false,
    leavedClassName: "".concat(prefixCls, "-content-wrapper-hidden")
  }), function (_ref3, motionRef) {
    var motionClassName = _ref3.className,
      motionStyle = _ref3.style;
    var content = /*#__PURE__*/react.createElement(es_DrawerPanel, (0,esm_extends/* default */.Z)({
      id: id,
      containerRef: motionRef,
      prefixCls: prefixCls,
      className: classnames_default()(className, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.content),
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), styles === null || styles === void 0 ? void 0 : styles.content)
    }, (0,pickAttrs/* default */.Z)(props, {
      aria: true
    }), eventHandlers), children);
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      className: classnames_default()("".concat(prefixCls, "-content-wrapper"), drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.wrapper, motionClassName),
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, wrapperStyle), motionStyle), styles === null || styles === void 0 ? void 0 : styles.wrapper)
    }, (0,pickAttrs/* default */.Z)(props, {
      data: true
    })), drawerRender ? drawerRender(content) : content);
  });

  // =========================== Render ===========================
  var containerStyle = (0,objectSpread2/* default */.Z)({}, rootStyle);
  if (zIndex) {
    containerStyle.zIndex = zIndex;
  }
  return /*#__PURE__*/react.createElement(context.Provider, {
    value: mergedContext
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(placement), rootClassName, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-open"), open), "".concat(prefixCls, "-inline"), inline)),
    style: containerStyle,
    tabIndex: -1,
    ref: panelRef,
    onKeyDown: onPanelKeyDown
  }, maskNode, /*#__PURE__*/react.createElement("div", {
    tabIndex: 0,
    ref: sentinelStartRef,
    style: sentinelStyle,
    "aria-hidden": "true",
    "data-sentinel": "start"
  }), panelNode, /*#__PURE__*/react.createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle,
    "aria-hidden": "true",
    "data-sentinel": "end"
  })));
}
var RefDrawerPopup = /*#__PURE__*/react.forwardRef(DrawerPopup);
if (false) {}
/* harmony default export */ var es_DrawerPopup = (RefDrawerPopup);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-drawer@7.2.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-drawer/es/Drawer.js








var Drawer = function Drawer(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-drawer' : _props$prefixCls,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'right' : _props$placement,
    _props$autoFocus = props.autoFocus,
    autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
    _props$keyboard = props.keyboard,
    keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
    _props$width = props.width,
    width = _props$width === void 0 ? 378 : _props$width,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    getContainer = props.getContainer,
    forceRender = props.forceRender,
    afterOpenChange = props.afterOpenChange,
    destroyOnClose = props.destroyOnClose,
    onMouseEnter = props.onMouseEnter,
    onMouseOver = props.onMouseOver,
    onMouseLeave = props.onMouseLeave,
    onClick = props.onClick,
    onKeyDown = props.onKeyDown,
    onKeyUp = props.onKeyUp,
    panelRef = props.panelRef;
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    animatedVisible = _React$useState2[0],
    setAnimatedVisible = _React$useState2[1];

  // ============================= Warn =============================
  if (false) {}

  // ============================= Open =============================
  var _React$useState3 = react.useState(false),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    mounted = _React$useState4[0],
    setMounted = _React$useState4[1];
  (0,useLayoutEffect/* default */.Z)(function () {
    setMounted(true);
  }, []);
  var mergedOpen = mounted ? open : false;

  // ============================ Focus =============================
  var popupRef = react.useRef();
  var lastActiveRef = react.useRef();
  (0,useLayoutEffect/* default */.Z)(function () {
    if (mergedOpen) {
      lastActiveRef.current = document.activeElement;
    }
  }, [mergedOpen]);

  // ============================= Open =============================
  var internalAfterOpenChange = function internalAfterOpenChange(nextVisible) {
    var _popupRef$current;
    setAnimatedVisible(nextVisible);
    afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(nextVisible);
    if (!nextVisible && lastActiveRef.current && !((_popupRef$current = popupRef.current) !== null && _popupRef$current !== void 0 && _popupRef$current.contains(lastActiveRef.current))) {
      var _lastActiveRef$curren;
      (_lastActiveRef$curren = lastActiveRef.current) === null || _lastActiveRef$curren === void 0 || _lastActiveRef$curren.focus({
        preventScroll: true
      });
    }
  };

  // =========================== Context ============================
  var refContext = react.useMemo(function () {
    return {
      panel: panelRef
    };
  }, [panelRef]);

  // ============================ Render ============================
  if (!forceRender && !animatedVisible && !mergedOpen && destroyOnClose) {
    return null;
  }
  var eventHandlers = {
    onMouseEnter: onMouseEnter,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave,
    onClick: onClick,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  };
  var drawerPopupProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    open: mergedOpen,
    prefixCls: prefixCls,
    placement: placement,
    autoFocus: autoFocus,
    keyboard: keyboard,
    width: width,
    mask: mask,
    maskClosable: maskClosable,
    inline: getContainer === false,
    afterOpenChange: internalAfterOpenChange,
    ref: popupRef
  }, eventHandlers);
  return /*#__PURE__*/react.createElement(RefContext.Provider, {
    value: refContext
  }, /*#__PURE__*/react.createElement(es/* default */.Z, {
    open: mergedOpen || forceRender || animatedVisible,
    autoDestroy: false,
    getContainer: getContainer,
    autoLock: mask && (mergedOpen || animatedVisible)
  }, /*#__PURE__*/react.createElement(es_DrawerPopup, drawerPopupProps)));
};
if (false) {}
/* harmony default export */ var es_Drawer = (Drawer);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-drawer@7.2.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-drawer/es/index.js
// export this package's api

/* harmony default export */ var rc_drawer_es = (es_Drawer);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/ContextIsolator.js
var ContextIsolator = __webpack_require__(3460);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useZIndex.js
var useZIndex = __webpack_require__(27152);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(93143);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/zindexContext.js
var zindexContext = __webpack_require__(68692);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(83756);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/watermark/context.js
var watermark_context = __webpack_require__(61520);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useClosable.js
var useClosable = __webpack_require__(64384);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(14225);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/DrawerPanel.js
"use client";






const DrawerPanel_DrawerPanel = props => {
  var _a, _b;
  const {
    prefixCls,
    title,
    footer,
    extra,
    loading,
    onClose,
    headerStyle,
    bodyStyle,
    footerStyle,
    children,
    classNames: drawerClassNames,
    styles: drawerStyles
  } = props;
  const {
    drawer: drawerContext
  } = react.useContext(config_provider_context/* ConfigContext */.E_);
  const customCloseIconRender = react.useCallback(icon => (/*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    className: `${prefixCls}-close`
  }, icon)), [onClose]);
  const [mergedClosable, mergedCloseIcon] = (0,useClosable/* default */.Z)((0,useClosable/* pickClosable */.w)(props), (0,useClosable/* pickClosable */.w)(drawerContext), {
    closable: true,
    closeIconRender: customCloseIconRender
  });
  const headerNode = react.useMemo(() => {
    var _a, _b;
    if (!title && !mergedClosable) {
      return null;
    }
    return /*#__PURE__*/react.createElement("div", {
      style: Object.assign(Object.assign(Object.assign({}, (_a = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.styles) === null || _a === void 0 ? void 0 : _a.header), headerStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.header),
      className: classnames_default()(`${prefixCls}-header`, {
        [`${prefixCls}-header-close-only`]: mergedClosable && !title && !extra
      }, (_b = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.classNames) === null || _b === void 0 ? void 0 : _b.header, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.header)
    }, /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-header-title`
    }, mergedCloseIcon, title && /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-title`
    }, title)), extra && /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-extra`
    }, extra));
  }, [mergedClosable, mergedCloseIcon, extra, headerStyle, prefixCls, title]);
  const footerNode = react.useMemo(() => {
    var _a, _b;
    if (!footer) {
      return null;
    }
    const footerClassName = `${prefixCls}-footer`;
    return /*#__PURE__*/react.createElement("div", {
      className: classnames_default()(footerClassName, (_a = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.classNames) === null || _a === void 0 ? void 0 : _a.footer, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.footer),
      style: Object.assign(Object.assign(Object.assign({}, (_b = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.styles) === null || _b === void 0 ? void 0 : _b.footer), footerStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.footer)
    }, footer);
  }, [footer, footerStyle, prefixCls]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, headerNode, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-body`, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.body, (_a = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.classNames) === null || _a === void 0 ? void 0 : _a.body),
    style: Object.assign(Object.assign(Object.assign({}, (_b = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.styles) === null || _b === void 0 ? void 0 : _b.body), bodyStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.body)
  }, loading ? (/*#__PURE__*/react.createElement(skeleton/* default */.Z, {
    active: true,
    title: false,
    paragraph: {
      rows: 5
    },
    className: `${prefixCls}-body-skeleton`
  })) : children), footerNode);
};
/* harmony default export */ var drawer_DrawerPanel = (DrawerPanel_DrawerPanel);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.21.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(98020);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(13587);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(61372);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(53557);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/style/motion.js
const getMoveTranslate = direction => {
  const value = '100%';
  return {
    left: `translateX(-${value})`,
    right: `translateX(${value})`,
    top: `translateY(-${value})`,
    bottom: `translateY(${value})`
  }[direction];
};
const getEnterLeaveStyle = (startStyle, endStyle) => ({
  '&-enter, &-appear': Object.assign(Object.assign({}, startStyle), {
    '&-active': endStyle
  }),
  '&-leave': Object.assign(Object.assign({}, endStyle), {
    '&-active': startStyle
  })
});
const getFadeStyle = (from, duration) => Object.assign({
  '&-enter, &-appear, &-leave': {
    '&-start': {
      transition: 'none'
    },
    '&-active': {
      transition: `all ${duration}`
    }
  }
}, getEnterLeaveStyle({
  opacity: from
}, {
  opacity: 1
}));
const getPanelMotionStyles = (direction, duration) => [getFadeStyle(0.7, duration), getEnterLeaveStyle({
  transform: getMoveTranslate(direction)
}, {
  transform: 'none'
})];
const genMotionStyle = token => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  return {
    [componentCls]: {
      // ======================== Mask ========================
      [`${componentCls}-mask-motion`]: getFadeStyle(0, motionDurationSlow),
      // ======================= Panel ========================
      [`${componentCls}-panel-motion`]: ['left', 'right', 'top', 'bottom'].reduce((obj, direction) => Object.assign(Object.assign({}, obj), {
        [`&-${direction}`]: getPanelMotionStyles(direction, motionDurationSlow)
      }), {})
    }
  };
};
/* harmony default export */ var style_motion = (genMotionStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/style/index.js




// =============================== Base ===============================
const genDrawerStyle = token => {
  const {
    borderRadiusSM,
    componentCls,
    zIndexPopup,
    colorBgMask,
    colorBgElevated,
    motionDurationSlow,
    motionDurationMid,
    paddingXS,
    padding,
    paddingLG,
    fontSizeLG,
    lineHeightLG,
    lineWidth,
    lineType,
    colorSplit,
    marginXS,
    colorIcon,
    colorIconHover,
    colorBgTextHover,
    colorBgTextActive,
    colorText,
    fontWeightStrong,
    footerPaddingBlock,
    footerPaddingInline,
    calc
  } = token;
  const wrapperCls = `${componentCls}-content-wrapper`;
  return {
    [componentCls]: {
      position: 'fixed',
      inset: 0,
      zIndex: zIndexPopup,
      pointerEvents: 'none',
      color: colorText,
      '&-pure': {
        position: 'relative',
        background: colorBgElevated,
        display: 'flex',
        flexDirection: 'column',
        [`&${componentCls}-left`]: {
          boxShadow: token.boxShadowDrawerLeft
        },
        [`&${componentCls}-right`]: {
          boxShadow: token.boxShadowDrawerRight
        },
        [`&${componentCls}-top`]: {
          boxShadow: token.boxShadowDrawerUp
        },
        [`&${componentCls}-bottom`]: {
          boxShadow: token.boxShadowDrawerDown
        }
      },
      '&-inline': {
        position: 'absolute'
      },
      // ====================== Mask ======================
      [`${componentCls}-mask`]: {
        position: 'absolute',
        inset: 0,
        zIndex: zIndexPopup,
        background: colorBgMask,
        pointerEvents: 'auto'
      },
      // ==================== Content =====================
      [wrapperCls]: {
        position: 'absolute',
        zIndex: zIndexPopup,
        maxWidth: '100vw',
        transition: `all ${motionDurationSlow}`,
        '&-hidden': {
          display: 'none'
        }
      },
      // Placement
      [`&-left > ${wrapperCls}`]: {
        top: 0,
        bottom: 0,
        left: {
          _skip_check_: true,
          value: 0
        },
        boxShadow: token.boxShadowDrawerLeft
      },
      [`&-right > ${wrapperCls}`]: {
        top: 0,
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: 0,
        boxShadow: token.boxShadowDrawerRight
      },
      [`&-top > ${wrapperCls}`]: {
        top: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerUp
      },
      [`&-bottom > ${wrapperCls}`]: {
        bottom: 0,
        insetInline: 0,
        boxShadow: token.boxShadowDrawerDown
      },
      [`${componentCls}-content`]: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        background: colorBgElevated,
        pointerEvents: 'auto'
      },
      // Header
      [`${componentCls}-header`]: {
        display: 'flex',
        flex: 0,
        alignItems: 'center',
        padding: `${(0,cssinjs_es/* unit */.bf)(padding)} ${(0,cssinjs_es/* unit */.bf)(paddingLG)}`,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG,
        borderBottom: `${(0,cssinjs_es/* unit */.bf)(lineWidth)} ${lineType} ${colorSplit}`,
        '&-title': {
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          minWidth: 0,
          minHeight: 0
        }
      },
      [`${componentCls}-extra`]: {
        flex: 'none'
      },
      [`${componentCls}-close`]: Object.assign({
        display: 'inline-flex',
        width: calc(fontSizeLG).add(paddingXS).equal(),
        height: calc(fontSizeLG).add(paddingXS).equal(),
        borderRadius: borderRadiusSM,
        justifyContent: 'center',
        alignItems: 'center',
        marginInlineEnd: marginXS,
        color: colorIcon,
        fontWeight: fontWeightStrong,
        fontSize: fontSizeLG,
        fontStyle: 'normal',
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'none',
        textDecoration: 'none',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        transition: `all ${motionDurationMid}`,
        textRendering: 'auto',
        '&:hover': {
          color: colorIconHover,
          backgroundColor: colorBgTextHover,
          textDecoration: 'none'
        },
        '&:active': {
          backgroundColor: colorBgTextActive
        }
      }, (0,style/* genFocusStyle */.Qy)(token)),
      [`${componentCls}-title`]: {
        flex: 1,
        margin: 0,
        fontWeight: token.fontWeightStrong,
        fontSize: fontSizeLG,
        lineHeight: lineHeightLG
      },
      // Body
      [`${componentCls}-body`]: {
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        padding: paddingLG,
        overflow: 'auto',
        [`${componentCls}-body-skeleton`]: {
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center'
        }
      },
      // Footer
      [`${componentCls}-footer`]: {
        flexShrink: 0,
        padding: `${(0,cssinjs_es/* unit */.bf)(footerPaddingBlock)} ${(0,cssinjs_es/* unit */.bf)(footerPaddingInline)}`,
        borderTop: `${(0,cssinjs_es/* unit */.bf)(lineWidth)} ${lineType} ${colorSplit}`
      },
      // ====================== RTL =======================
      '&-rtl': {
        direction: 'rtl'
      }
    }
  };
};
const prepareComponentToken = token => ({
  zIndexPopup: token.zIndexPopupBase,
  footerPaddingBlock: token.paddingXS,
  footerPaddingInline: token.padding
});
// ============================== Export ==============================
/* harmony default export */ var drawer_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Drawer', token => {
  const drawerToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {});
  return [genDrawerStyle(drawerToken), style_motion(drawerToken)];
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












const _SizeTypes = (/* unused pure expression or super */ null && (['default', 'large']));
const defaultPushState = {
  distance: 180
};
const drawer_Drawer = props => {
  var _a;
  const {
      rootClassName,
      width,
      height,
      size = 'default',
      mask = true,
      push = defaultPushState,
      open,
      afterOpenChange,
      onClose,
      prefixCls: customizePrefixCls,
      getContainer: customizeGetContainer,
      style,
      className,
      // Deprecated
      visible,
      afterVisibleChange,
      maskStyle,
      drawerStyle,
      contentWrapperStyle
    } = props,
    rest = __rest(props, ["rootClassName", "width", "height", "size", "mask", "push", "open", "afterOpenChange", "onClose", "prefixCls", "getContainer", "style", "className", "visible", "afterVisibleChange", "maskStyle", "drawerStyle", "contentWrapperStyle"]);
  const {
    getPopupContainer,
    getPrefixCls,
    direction,
    drawer
  } = react.useContext(config_provider_context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('drawer', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = drawer_style(prefixCls);
  const getContainer =
  // 有可能为 false，所以不能直接判断
  customizeGetContainer === undefined && getPopupContainer ? () => getPopupContainer(document.body) : customizeGetContainer;
  const drawerClassName = classnames_default()({
    'no-mask': !mask,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, rootClassName, hashId, cssVarCls);
  // ========================== Warning ===========================
  if (false) {}
  // ============================ Size ============================
  const mergedWidth = react.useMemo(() => width !== null && width !== void 0 ? width : size === 'large' ? 736 : 378, [width, size]);
  const mergedHeight = react.useMemo(() => height !== null && height !== void 0 ? height : size === 'large' ? 736 : 378, [height, size]);
  // =========================== Motion ===========================
  const maskMotion = {
    motionName: (0,motion/* getTransitionName */.m)(prefixCls, 'mask-motion'),
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500
  };
  const panelMotion = motionPlacement => ({
    motionName: (0,motion/* getTransitionName */.m)(prefixCls, `panel-motion-${motionPlacement}`),
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500
  });
  // ============================ Refs ============================
  // Select `ant-modal-content` by `panelRef`
  const panelRef = (0,watermark_context/* usePanelRef */.H)();
  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = (0,useZIndex/* useZIndex */.Cn)('Drawer', rest.zIndex);
  // =========================== Render ===========================
  const {
    classNames: propClassNames = {},
    styles: propStyles = {}
  } = rest;
  const {
    classNames: contextClassNames = {},
    styles: contextStyles = {}
  } = drawer || {};
  return wrapCSSVar(/*#__PURE__*/react.createElement(ContextIsolator/* default */.Z, {
    form: true,
    space: true
  }, /*#__PURE__*/react.createElement(zindexContext/* default */.Z.Provider, {
    value: contextZIndex
  }, /*#__PURE__*/react.createElement(rc_drawer_es, Object.assign({
    prefixCls: prefixCls,
    onClose: onClose,
    maskMotion: maskMotion,
    motion: panelMotion
  }, rest, {
    classNames: {
      mask: classnames_default()(propClassNames.mask, contextClassNames.mask),
      content: classnames_default()(propClassNames.content, contextClassNames.content),
      wrapper: classnames_default()(propClassNames.wrapper, contextClassNames.wrapper)
    },
    styles: {
      mask: Object.assign(Object.assign(Object.assign({}, propStyles.mask), maskStyle), contextStyles.mask),
      content: Object.assign(Object.assign(Object.assign({}, propStyles.content), drawerStyle), contextStyles.content),
      wrapper: Object.assign(Object.assign(Object.assign({}, propStyles.wrapper), contentWrapperStyle), contextStyles.wrapper)
    },
    open: open !== null && open !== void 0 ? open : visible,
    mask: mask,
    push: push,
    width: mergedWidth,
    height: mergedHeight,
    style: Object.assign(Object.assign({}, drawer === null || drawer === void 0 ? void 0 : drawer.style), style),
    className: classnames_default()(drawer === null || drawer === void 0 ? void 0 : drawer.className, className),
    rootClassName: drawerClassName,
    getContainer: getContainer,
    afterOpenChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
    panelRef: panelRef,
    zIndex: zIndex
  }), /*#__PURE__*/react.createElement(drawer_DrawerPanel, Object.assign({
    prefixCls: prefixCls
  }, rest, {
    onClose: onClose
  }))))));
};
/** @private Internal Component. Do not use in your production. */
const PurePanel = props => {
  const {
      prefixCls: customizePrefixCls,
      style,
      className,
      placement = 'right'
    } = props,
    restProps = __rest(props, ["prefixCls", "style", "className", "placement"]);
  const {
    getPrefixCls
  } = react.useContext(config_provider_context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('drawer', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = drawer_style(prefixCls);
  const cls = classnames_default()(prefixCls, `${prefixCls}-pure`, `${prefixCls}-${placement}`, hashId, cssVarCls, className);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls,
    style: style
  }, /*#__PURE__*/react.createElement(drawer_DrawerPanel, Object.assign({
    prefixCls: prefixCls
  }, restProps))));
};
drawer_Drawer._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
if (false) {}
/* harmony default export */ var drawer = (drawer_Drawer);

/***/ }),

/***/ 92873:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50979);
/* harmony import */ var _util_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32537);
/* harmony import */ var _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76834);
"use client";





function useBreakpoint() {
  let refreshOnChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  const screensRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const forceUpdate = (0,_util_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const responsiveObserver = (0,_util_responsiveObserver__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
  (0,rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(() => {
    const token = responsiveObserver.subscribe(supportScreens => {
      screensRef.current = supportScreens;
      if (refreshOnChange) {
        forceUpdate();
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  return screensRef.current;
}
/* harmony default export */ __webpack_exports__.Z = (useBreakpoint);

/***/ }),

/***/ 70567:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92873);
"use client";




// Do not export params
function useBreakpoint() {
  return (0,_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
}

/* harmony default export */ __webpack_exports__.ZP = ({
  useBreakpoint
});

/***/ }),

/***/ 81645:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ modal; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(96992);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/React/render.js
var React_render = __webpack_require__(73113);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(83756);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 7 modules
var config_provider = __webpack_require__(38587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(26282);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(16449);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(76117);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js + 1 modules
var InfoCircleFilled = __webpack_require__(42250);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useZIndex.js
var useZIndex = __webpack_require__(27152);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(93143);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/locale/useLocale.js
var useLocale = __webpack_require__(24422);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/useToken.js + 2 modules
var useToken = __webpack_require__(64511);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useState.js
var useState = __webpack_require__(51209);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 27 modules
var es_button = __webpack_require__(53230);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/buttonHelpers.js
var buttonHelpers = __webpack_require__(15687);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/ActionButton.js
"use client";





function isThenable(thing) {
  return !!(thing === null || thing === void 0 ? void 0 : thing.then);
}
const ActionButton = props => {
  const {
    type,
    children,
    prefixCls,
    buttonProps,
    close,
    autoFocus,
    emitEvent,
    isSilent,
    quitOnNullishReturnValue,
    actionFn
  } = props;
  const clickedRef = react.useRef(false);
  const buttonRef = react.useRef(null);
  const [loading, setLoading] = (0,useState/* default */.Z)(false);
  const onInternalClose = function () {
    close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
  };
  react.useEffect(() => {
    let timeoutId = null;
    if (autoFocus) {
      timeoutId = setTimeout(() => {
        var _a;
        (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
      });
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  const handlePromiseOnOk = returnValueOfOnOk => {
    if (!isThenable(returnValueOfOnOk)) {
      return;
    }
    setLoading(true);
    returnValueOfOnOk.then(function () {
      setLoading(false, true);
      onInternalClose.apply(void 0, arguments);
      clickedRef.current = false;
    }, e => {
      // See: https://github.com/ant-design/ant-design/issues/6183
      setLoading(false, true);
      clickedRef.current = false;
      // Do not throw if is `await` mode
      if (isSilent === null || isSilent === void 0 ? void 0 : isSilent()) {
        return;
      }
      return Promise.reject(e);
    });
  };
  const onClick = e => {
    if (clickedRef.current) {
      return;
    }
    clickedRef.current = true;
    if (!actionFn) {
      onInternalClose();
      return;
    }
    let returnValueOfOnOk;
    if (emitEvent) {
      returnValueOfOnOk = actionFn(e);
      if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close);
      // https://github.com/ant-design/ant-design/issues/23358
      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();
      if (!isThenable(returnValueOfOnOk)) {
        onInternalClose();
        return;
      }
    }
    handlePromiseOnOk(returnValueOfOnOk);
  };
  return /*#__PURE__*/react.createElement(es_button/* default */.ZP, Object.assign({}, (0,buttonHelpers/* convertLegacyProps */.nx)(type), {
    onClick: onClick,
    loading: loading,
    prefixCls: prefixCls
  }, buttonProps, {
    ref: buttonRef
  }), children);
};
/* harmony default export */ var _util_ActionButton = (ActionButton);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/context.js

const ModalContext = /*#__PURE__*/react.createContext({});
const {
  Provider: ModalContextProvider
} = ModalContext;
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/components/ConfirmCancelBtn.js
"use client";




const ConfirmCancelBtn = () => {
  const {
    autoFocusButton,
    cancelButtonProps,
    cancelTextLocale,
    isSilent,
    mergedOkCancel,
    rootPrefixCls,
    close,
    onCancel,
    onConfirm
  } = (0,react.useContext)(ModalContext);
  return mergedOkCancel ? (/*#__PURE__*/react.createElement(_util_ActionButton, {
    isSilent: isSilent,
    actionFn: onCancel,
    close: function () {
      close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
    },
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, cancelTextLocale)) : null;
};
/* harmony default export */ var components_ConfirmCancelBtn = (ConfirmCancelBtn);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/components/ConfirmOkBtn.js
"use client";




const ConfirmOkBtn = () => {
  const {
    autoFocusButton,
    close,
    isSilent,
    okButtonProps,
    rootPrefixCls,
    okTextLocale,
    okType,
    onConfirm,
    onOk
  } = (0,react.useContext)(ModalContext);
  return /*#__PURE__*/react.createElement(_util_ActionButton, {
    isSilent: isSilent,
    type: okType || 'primary',
    actionFn: onOk,
    close: function () {
      close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(true);
    },
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps,
    prefixCls: `${rootPrefixCls}-btn`
  }, okTextLocale);
};
/* harmony default export */ var components_ConfirmOkBtn = (ConfirmOkBtn);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(71232);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-dialog@9.6.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-dialog/es/index.js + 8 modules
var es = __webpack_require__(94813);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/ContextIsolator.js
var ContextIsolator = __webpack_require__(3460);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useClosable.js
var useClosable = __webpack_require__(64384);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(67042);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/styleChecker.js


const canUseDocElement = () => (0,canUseDom/* default */.Z)() && window.document.documentElement;

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/zindexContext.js
var zindexContext = __webpack_require__(68692);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(91880);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(14225);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/watermark/context.js
var watermark_context = __webpack_require__(61520);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(39956);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/components/NormalCancelBtn.js
"use client";




const NormalCancelBtn = () => {
  const {
    cancelButtonProps,
    cancelTextLocale,
    onCancel
  } = (0,react.useContext)(ModalContext);
  return /*#__PURE__*/react.createElement(es_button/* default */.ZP, Object.assign({
    onClick: onCancel
  }, cancelButtonProps), cancelTextLocale);
};
/* harmony default export */ var components_NormalCancelBtn = (NormalCancelBtn);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/components/NormalOkBtn.js
"use client";





const NormalOkBtn = () => {
  const {
    confirmLoading,
    okButtonProps,
    okType,
    okTextLocale,
    onOk
  } = (0,react.useContext)(ModalContext);
  return /*#__PURE__*/react.createElement(es_button/* default */.ZP, Object.assign({}, (0,buttonHelpers/* convertLegacyProps */.nx)(okType), {
    loading: confirmLoading,
    onClick: onOk
  }, okButtonProps), okTextLocale);
};
/* harmony default export */ var components_NormalOkBtn = (NormalOkBtn);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/locale.js
var modal_locale = __webpack_require__(32522);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/shared.js
"use client";










function renderCloseIcon(prefixCls, closeIcon) {
  return /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-close-x`
  }, closeIcon || /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    className: `${prefixCls}-close-icon`
  }));
}
const Footer = props => {
  const {
    okText,
    okType = 'primary',
    cancelText,
    confirmLoading,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    footer
  } = props;
  const [locale] = (0,useLocale/* default */.Z)('Modal', (0,modal_locale/* getConfirmLocale */.A)());
  // ================== Locale Text ==================
  const okTextLocale = okText || (locale === null || locale === void 0 ? void 0 : locale.okText);
  const cancelTextLocale = cancelText || (locale === null || locale === void 0 ? void 0 : locale.cancelText);
  // ================= Context Value =================
  const btnCtxValue = {
    confirmLoading,
    okButtonProps,
    cancelButtonProps,
    okTextLocale,
    cancelTextLocale,
    okType,
    onOk,
    onCancel
  };
  const btnCtxValueMemo = react.useMemo(() => btnCtxValue, (0,toConsumableArray/* default */.Z)(Object.values(btnCtxValue)));
  let footerNode;
  if (typeof footer === 'function' || typeof footer === 'undefined') {
    footerNode = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_NormalCancelBtn, null), /*#__PURE__*/react.createElement(components_NormalOkBtn, null));
    if (typeof footer === 'function') {
      footerNode = footer(footerNode, {
        OkBtn: components_NormalOkBtn,
        CancelBtn: components_NormalCancelBtn
      });
    }
    footerNode = /*#__PURE__*/react.createElement(ModalContextProvider, {
      value: btnCtxValueMemo
    }, footerNode);
  } else {
    footerNode = footer;
  }
  return /*#__PURE__*/react.createElement(DisabledContext/* DisabledContextProvider */.n, {
    disabled: false
  }, footerNode);
};
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/style/index.js
var modal_style = __webpack_require__(22421);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/Modal.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

















let mousePosition;
// ref: https://github.com/ant-design/ant-design/issues/15795
const getClickPosition = e => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};
// 只有点击事件支持从鼠标位置动画展开
if (canUseDocElement()) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}
const Modal = props => {
  var _a;
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    modal: modalContext
  } = react.useContext(context/* ConfigContext */.E_);
  const handleCancel = e => {
    const {
      onCancel
    } = props;
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };
  const handleOk = e => {
    const {
      onOk
    } = props;
    onOk === null || onOk === void 0 ? void 0 : onOk(e);
  };
  if (false) {}
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      open,
      wrapClassName,
      centered,
      getContainer,
      focusTriggerAfterClose = true,
      style,
      // Deprecated
      visible,
      width = 520,
      footer,
      classNames: modalClassNames,
      styles: modalStyles,
      children,
      loading
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading"]);
  const prefixCls = getPrefixCls('modal', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  // Style
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,modal_style/* default */.ZP)(prefixCls, rootCls);
  const wrapClassNameExtended = classnames_default()(wrapClassName, {
    [`${prefixCls}-centered`]: !!centered,
    [`${prefixCls}-wrap-rtl`]: direction === 'rtl'
  });
  const dialogFooter = footer !== null && !loading ? (/*#__PURE__*/react.createElement(Footer, Object.assign({}, props, {
    onOk: handleOk,
    onCancel: handleCancel
  }))) : null;
  const [mergedClosable, mergedCloseIcon, closeBtnIsDisabled] = (0,useClosable/* default */.Z)((0,useClosable/* pickClosable */.w)(props), (0,useClosable/* pickClosable */.w)(modalContext), {
    closable: true,
    closeIcon: /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
      className: `${prefixCls}-close-icon`
    }),
    closeIconRender: icon => renderCloseIcon(prefixCls, icon)
  });
  // ============================ Refs ============================
  // Select `ant-modal-content` by `panelRef`
  const panelRef = (0,watermark_context/* usePanelRef */.H)(`.${prefixCls}-content`);
  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = (0,useZIndex/* useZIndex */.Cn)('Modal', restProps.zIndex);
  // =========================== Render ===========================
  return wrapCSSVar(/*#__PURE__*/react.createElement(ContextIsolator/* default */.Z, {
    form: true,
    space: true
  }, /*#__PURE__*/react.createElement(zindexContext/* default */.Z.Provider, {
    value: contextZIndex
  }, /*#__PURE__*/react.createElement(es/* default */.Z, Object.assign({
    width: width
  }, restProps, {
    zIndex: zIndex,
    getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
    prefixCls: prefixCls,
    rootClassName: classnames_default()(hashId, rootClassName, cssVarCls, rootCls),
    footer: dialogFooter,
    visible: open !== null && open !== void 0 ? open : visible,
    mousePosition: (_a = restProps.mousePosition) !== null && _a !== void 0 ? _a : mousePosition,
    onClose: handleCancel,
    closable: mergedClosable ? {
      disabled: closeBtnIsDisabled,
      closeIcon: mergedCloseIcon
    } : mergedClosable,
    closeIcon: mergedCloseIcon,
    focusTriggerAfterClose: focusTriggerAfterClose,
    transitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, 'fade', props.maskTransitionName),
    className: classnames_default()(hashId, className, modalContext === null || modalContext === void 0 ? void 0 : modalContext.className),
    style: Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.style), style),
    classNames: Object.assign(Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.classNames), modalClassNames), {
      wrapper: classnames_default()(wrapClassNameExtended, modalClassNames === null || modalClassNames === void 0 ? void 0 : modalClassNames.wrapper)
    }),
    styles: Object.assign(Object.assign({}, modalContext === null || modalContext === void 0 ? void 0 : modalContext.styles), modalStyles),
    panelRef: panelRef
  }), loading ? (/*#__PURE__*/react.createElement(skeleton/* default */.Z, {
    active: true,
    title: false,
    paragraph: {
      rows: 4
    },
    className: `${prefixCls}-body-skeleton`
  })) : children))));
};
/* harmony default export */ var modal_Modal = (Modal);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.21.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(98020);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(13587);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(61372);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/style/confirm.js
// Style as confirm component




// ============================= Confirm ==============================
const genModalConfirmStyle = token => {
  const {
    componentCls,
    titleFontSize,
    titleLineHeight,
    modalConfirmIconSize,
    fontSize,
    lineHeight,
    modalTitleHeight,
    fontHeight,
    confirmBodyPadding
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [confirmComponentCls]: {
      '&-rtl': {
        direction: 'rtl'
      },
      [`${token.antCls}-modal-header`]: {
        display: 'none'
      },
      [`${confirmComponentCls}-body-wrapper`]: Object.assign({}, (0,style/* clearFix */.dF)()),
      [`&${componentCls} ${componentCls}-body`]: {
        padding: confirmBodyPadding
      },
      // ====================== Body ======================
      [`${confirmComponentCls}-body`]: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'start',
        [`> ${token.iconCls}`]: {
          flex: 'none',
          fontSize: modalConfirmIconSize,
          marginInlineEnd: token.confirmIconMarginInlineEnd,
          marginTop: token.calc(token.calc(fontHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        },
        [`&-has-title > ${token.iconCls}`]: {
          marginTop: token.calc(token.calc(modalTitleHeight).sub(modalConfirmIconSize).equal()).div(2).equal()
        }
      },
      [`${confirmComponentCls}-paragraph`]: {
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto',
        rowGap: token.marginXS
      },
      // https://github.com/ant-design/ant-design/issues/48159
      [`${token.iconCls} + ${confirmComponentCls}-paragraph`]: {
        maxWidth: `calc(100% - ${(0,cssinjs_es/* unit */.bf)(token.calc(token.modalConfirmIconSize).add(token.marginSM).equal())})`
      },
      [`${confirmComponentCls}-title`]: {
        color: token.colorTextHeading,
        fontWeight: token.fontWeightStrong,
        fontSize: titleFontSize,
        lineHeight: titleLineHeight
      },
      [`${confirmComponentCls}-content`]: {
        color: token.colorText,
        fontSize,
        lineHeight
      },
      // ===================== Footer =====================
      [`${confirmComponentCls}-btns`]: {
        textAlign: 'end',
        marginTop: token.confirmBtnsMarginTop,
        [`${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorSuccess
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var style_confirm = ((0,genStyleUtils/* genSubStyleComponent */.bk)(['Modal', 'confirm'], token => {
  const modalToken = (0,modal_style/* prepareToken */.B4)(token);
  return [genModalConfirmStyle(modalToken)];
}, modal_style/* prepareComponentToken */.eh, {
  // confirm is weak than modal since no conflict here
  order: -1000
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/ConfirmDialog.js
"use client";


var ConfirmDialog_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

















function ConfirmContent(props) {
  const {
      prefixCls,
      icon,
      okText,
      cancelText,
      confirmPrefixCls,
      type,
      okCancel,
      footer,
      // Legacy for static function usage
      locale: staticLocale
    } = props,
    resetProps = ConfirmDialog_rest(props, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  if (false) {}
  // Icon
  let mergedIcon = icon;
  // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon
  if (!icon && icon !== null) {
    switch (type) {
      case 'info':
        mergedIcon = /*#__PURE__*/react.createElement(InfoCircleFilled/* default */.Z, null);
        break;
      case 'success':
        mergedIcon = /*#__PURE__*/react.createElement(CheckCircleFilled/* default */.Z, null);
        break;
      case 'error':
        mergedIcon = /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null);
        break;
      default:
        mergedIcon = /*#__PURE__*/react.createElement(ExclamationCircleFilled/* default */.Z, null);
    }
  }
  // 默认为 true，保持向下兼容
  const mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type === 'confirm';
  const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  const [locale] = (0,useLocale/* default */.Z)('Modal');
  const mergedLocale = staticLocale || locale;
  // ================== Locale Text ==================
  const okTextLocale = okText || (mergedOkCancel ? mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.okText : mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.justOkText);
  const cancelTextLocale = cancelText || (mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.cancelText);
  // ================= Context Value =================
  const btnCtxValue = Object.assign({
    autoFocusButton,
    cancelTextLocale,
    okTextLocale,
    mergedOkCancel
  }, resetProps);
  const btnCtxValueMemo = react.useMemo(() => btnCtxValue, (0,toConsumableArray/* default */.Z)(Object.values(btnCtxValue)));
  // ====================== Footer Origin Node ======================
  const footerOriginNode = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_ConfirmCancelBtn, null), /*#__PURE__*/react.createElement(components_ConfirmOkBtn, null));
  const hasTitle = props.title !== undefined && props.title !== null;
  const bodyCls = `${confirmPrefixCls}-body`;
  return /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-body-wrapper`
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(bodyCls, {
      [`${bodyCls}-has-title`]: hasTitle
    })
  }, mergedIcon, /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-paragraph`
  }, hasTitle && /*#__PURE__*/react.createElement("span", {
    className: `${confirmPrefixCls}-title`
  }, props.title), /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-content`
  }, props.content))), footer === undefined || typeof footer === 'function' ? (/*#__PURE__*/react.createElement(ModalContextProvider, {
    value: btnCtxValueMemo
  }, /*#__PURE__*/react.createElement("div", {
    className: `${confirmPrefixCls}-btns`
  }, typeof footer === 'function' ? footer(footerOriginNode, {
    OkBtn: components_ConfirmOkBtn,
    CancelBtn: components_ConfirmCancelBtn
  }) : footerOriginNode))) : footer, /*#__PURE__*/react.createElement(style_confirm, {
    prefixCls: prefixCls
  }));
}
const ConfirmDialog = props => {
  const {
    close,
    zIndex,
    afterClose,
    open,
    keyboard,
    centered,
    getContainer,
    maskStyle,
    direction,
    prefixCls,
    wrapClassName,
    rootPrefixCls,
    bodyStyle,
    closable = false,
    closeIcon,
    modalRender,
    focusTriggerAfterClose,
    onConfirm,
    styles
  } = props;
  if (false) {}
  const confirmPrefixCls = `${prefixCls}-confirm`;
  const width = props.width || 416;
  const style = props.style || {};
  const mask = props.mask === undefined ? true : props.mask;
  // 默认为 false，保持旧版默认行为
  const maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  const classString = classnames_default()(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
    [`${confirmPrefixCls}-rtl`]: direction === 'rtl'
  }, props.className);
  // ========================= zIndex =========================
  const [, token] = (0,useToken/* default */.ZP)();
  const mergedZIndex = react.useMemo(() => {
    if (zIndex !== undefined) {
      return zIndex;
    }
    // Static always use max zIndex
    return token.zIndexPopupBase + useZIndex/* CONTAINER_MAX_OFFSET */.u6;
  }, [zIndex, token]);
  // ========================= Render =========================
  return /*#__PURE__*/react.createElement(modal_Modal, {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: classnames_default()({
      [`${confirmPrefixCls}-centered`]: !!props.centered
    }, wrapClassName),
    onCancel: () => {
      close === null || close === void 0 ? void 0 : close({
        triggerCancel: true
      });
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(false);
    },
    open: open,
    title: "",
    footer: null,
    transitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls || '', 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls || '', 'fade', props.maskTransitionName),
    mask: mask,
    maskClosable: maskClosable,
    style: style,
    styles: Object.assign({
      body: bodyStyle,
      mask: maskStyle
    }, styles),
    width: width,
    zIndex: mergedZIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer,
    closable: closable,
    closeIcon: closeIcon,
    modalRender: modalRender,
    focusTriggerAfterClose: focusTriggerAfterClose
  }, /*#__PURE__*/react.createElement(ConfirmContent, Object.assign({}, props, {
    confirmPrefixCls: confirmPrefixCls
  })));
};
const ConfirmDialogWrapper = props => {
  const {
    rootPrefixCls,
    iconPrefixCls,
    direction,
    theme
  } = props;
  return /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: iconPrefixCls,
    direction: direction,
    theme: theme
  }, /*#__PURE__*/react.createElement(ConfirmDialog, Object.assign({}, props)));
};
if (false) {}
/* harmony default export */ var modal_ConfirmDialog = (ConfirmDialogWrapper);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/destroyFns.js
const destroyFns = [];
/* harmony default export */ var modal_destroyFns = (destroyFns);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/confirm.js
"use client";









let defaultRootPrefixCls = '';
function getRootPrefixCls() {
  return defaultRootPrefixCls;
}
const confirm_ConfirmDialogWrapper = props => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    getContainer,
    direction
  } = props;
  const runtimeLocale = (0,modal_locale/* getConfirmLocale */.A)();
  const config = (0,react.useContext)(context/* ConfigContext */.E_);
  const rootPrefixCls = getRootPrefixCls() || config.getPrefixCls();
  // because Modal.config set rootPrefixCls, which is different from other components
  const prefixCls = customizePrefixCls || `${rootPrefixCls}-modal`;
  let mergedGetContainer = getContainer;
  if (mergedGetContainer === false) {
    mergedGetContainer = undefined;
    if (false) {}
  }
  return /*#__PURE__*/react.createElement(modal_ConfirmDialog, Object.assign({}, props, {
    rootPrefixCls: rootPrefixCls,
    prefixCls: prefixCls,
    iconPrefixCls: config.iconPrefixCls,
    theme: config.theme,
    direction: direction !== null && direction !== void 0 ? direction : config.direction,
    locale: (_b = (_a = config.locale) === null || _a === void 0 ? void 0 : _a.Modal) !== null && _b !== void 0 ? _b : runtimeLocale,
    getContainer: mergedGetContainer
  }));
};
function confirm_confirm(config) {
  const global = (0,config_provider/* globalConfig */.w6)();
  if (false) {}
  const container = document.createDocumentFragment();
  let currentConfig = Object.assign(Object.assign({}, config), {
    close,
    open: true
  });
  let timeoutId;
  function destroy() {
    var _a;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const triggerCancel = args.some(param => param === null || param === void 0 ? void 0 : param.triggerCancel);
    if (triggerCancel) {
      var _a2;
      (_a = config.onCancel) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [config, () => {}].concat((0,toConsumableArray/* default */.Z)(args.slice(1))));
    }
    for (let i = 0; i < modal_destroyFns.length; i++) {
      const fn = modal_destroyFns[i];
      if (fn === close) {
        modal_destroyFns.splice(i, 1);
        break;
      }
    }
    (0,React_render/* unmount */.v)(container);
  }
  function render(props) {
    clearTimeout(timeoutId);
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */
    timeoutId = setTimeout(() => {
      const rootPrefixCls = global.getPrefixCls(undefined, getRootPrefixCls());
      const iconPrefixCls = global.getIconPrefixCls();
      const theme = global.getTheme();
      const dom = /*#__PURE__*/react.createElement(confirm_ConfirmDialogWrapper, Object.assign({}, props));
      (0,React_render/* render */.s)(/*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
        prefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        theme: theme
      }, global.holderRender ? global.holderRender(dom) : dom), container);
    });
  }
  function close() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    currentConfig = Object.assign(Object.assign({}, currentConfig), {
      open: false,
      afterClose: () => {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        // @ts-ignore
        destroy.apply(this, args);
      }
    });
    // Legacy support
    if (currentConfig.visible) {
      delete currentConfig.visible;
    }
    render(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = Object.assign(Object.assign({}, currentConfig), configUpdate);
    }
    render(currentConfig);
  }
  render(currentConfig);
  modal_destroyFns.push(close);
  return {
    destroy: close,
    update
  };
}
function withWarn(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'warning'
  });
}
function withInfo(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'info'
  });
}
function withSuccess(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'success'
  });
}
function withError(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'error'
  });
}
function withConfirm(props) {
  return Object.assign(Object.assign({}, props), {
    type: 'confirm'
  });
}
function modalGlobalConfig(_ref) {
  let {
    rootPrefixCls
  } = _ref;
   false ? 0 : void 0;
  defaultRootPrefixCls = rootPrefixCls;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/PurePanel.js
var PurePanel = __webpack_require__(30336);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/PurePanel.js
"use client";

var PurePanel_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const PurePanel_PurePanel = props => {
  const {
      prefixCls: customizePrefixCls,
      className,
      closeIcon,
      closable,
      type,
      title,
      children,
      footer
    } = props,
    restProps = PurePanel_rest(props, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const rootPrefixCls = getPrefixCls();
  const prefixCls = customizePrefixCls || getPrefixCls('modal');
  const rootCls = (0,useCSSVarCls/* default */.Z)(rootPrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,modal_style/* default */.ZP)(prefixCls, rootCls);
  const confirmPrefixCls = `${prefixCls}-confirm`;
  // Choose target props by confirm mark
  let additionalProps = {};
  if (type) {
    additionalProps = {
      closable: closable !== null && closable !== void 0 ? closable : false,
      title: '',
      footer: '',
      children: (/*#__PURE__*/react.createElement(ConfirmContent, Object.assign({}, props, {
        prefixCls: prefixCls,
        confirmPrefixCls: confirmPrefixCls,
        rootPrefixCls: rootPrefixCls,
        content: children
      })))
    };
  } else {
    additionalProps = {
      closable: closable !== null && closable !== void 0 ? closable : true,
      title,
      footer: footer !== null && /*#__PURE__*/react.createElement(Footer, Object.assign({}, props)),
      children
    };
  }
  return wrapCSSVar(/*#__PURE__*/react.createElement(es/* Panel */.s, Object.assign({
    prefixCls: prefixCls,
    className: classnames_default()(hashId, `${prefixCls}-pure-panel`, type && confirmPrefixCls, type && `${confirmPrefixCls}-${type}`, className, cssVarCls, rootCls)
  }, restProps, {
    closeIcon: renderCloseIcon(prefixCls, closeIcon),
    closable: closable
  }, additionalProps)));
};
/* harmony default export */ var modal_PurePanel = ((0,PurePanel/* withPureRenderTheme */.i)(PurePanel_PurePanel));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/usePatchElement.js


function usePatchElement() {
  const [elements, setElements] = react.useState([]);
  const patchElement = react.useCallback(element => {
    // append a new element to elements (and create a new ref)
    setElements(originElements => [].concat((0,toConsumableArray/* default */.Z)(originElements), [element]));
    // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect
    return () => {
      setElements(originElements => originElements.filter(ele => ele !== element));
    };
  }, []);
  return [elements, patchElement];
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/locale/en_US.js + 4 modules
var en_US = __webpack_require__(74002);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/useModal/HookModal.js
"use client";


var HookModal_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const HookModal = (_a, ref) => {
  var _b;
  var {
      afterClose: hookAfterClose,
      config
    } = _a,
    restProps = HookModal_rest(_a, ["afterClose", "config"]);
  const [open, setOpen] = react.useState(true);
  const [innerConfig, setInnerConfig] = react.useState(config);
  const {
    direction,
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('modal');
  const rootPrefixCls = getPrefixCls();
  const afterClose = () => {
    var _a;
    hookAfterClose();
    (_a = innerConfig.afterClose) === null || _a === void 0 ? void 0 : _a.call(innerConfig);
  };
  const close = function () {
    var _a;
    setOpen(false);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const triggerCancel = args.some(param => param === null || param === void 0 ? void 0 : param.triggerCancel);
    if (triggerCancel) {
      var _a2;
      (_a = innerConfig.onCancel) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [innerConfig, () => {}].concat((0,toConsumableArray/* default */.Z)(args.slice(1))));
    }
  };
  react.useImperativeHandle(ref, () => ({
    destroy: close,
    update: newConfig => {
      setInnerConfig(originConfig => Object.assign(Object.assign({}, originConfig), newConfig));
    }
  }));
  const mergedOkCancel = (_b = innerConfig.okCancel) !== null && _b !== void 0 ? _b : innerConfig.type === 'confirm';
  const [contextLocale] = (0,useLocale/* default */.Z)('Modal', en_US/* default */.Z.Modal);
  return /*#__PURE__*/react.createElement(modal_ConfirmDialog, Object.assign({
    prefixCls: prefixCls,
    rootPrefixCls: rootPrefixCls
  }, innerConfig, {
    close: close,
    open: open,
    afterClose: afterClose,
    okText: innerConfig.okText || (mergedOkCancel ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.okText : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.justOkText),
    direction: innerConfig.direction || direction,
    cancelText: innerConfig.cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.cancelText)
  }, restProps));
};
/* harmony default export */ var useModal_HookModal = (/*#__PURE__*/react.forwardRef(HookModal));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/useModal/index.js
"use client";







let uuid = 0;
const ElementsHolder = /*#__PURE__*/react.memo(/*#__PURE__*/react.forwardRef((_props, ref) => {
  const [elements, patchElement] = usePatchElement();
  react.useImperativeHandle(ref, () => ({
    patchElement
  }), []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, elements);
}));
function useModal() {
  const holderRef = react.useRef(null);
  // ========================== Effect ==========================
  const [actionQueue, setActionQueue] = react.useState([]);
  react.useEffect(() => {
    if (actionQueue.length) {
      const cloneQueue = (0,toConsumableArray/* default */.Z)(actionQueue);
      cloneQueue.forEach(action => {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]);
  // =========================== Hook ===========================
  const getConfirmFunc = react.useCallback(withFunc => function hookConfirm(config) {
    var _a;
    uuid += 1;
    const modalRef = /*#__PURE__*/react.createRef();
    // Proxy to promise with `onClose`
    let resolvePromise;
    const promise = new Promise(resolve => {
      resolvePromise = resolve;
    });
    let silent = false;
    let closeFunc;
    const modal = /*#__PURE__*/react.createElement(useModal_HookModal, {
      key: `modal-${uuid}`,
      config: withFunc(config),
      ref: modalRef,
      afterClose: () => {
        closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
      },
      isSilent: () => silent,
      onConfirm: confirmed => {
        resolvePromise(confirmed);
      }
    });
    closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
    if (closeFunc) {
      modal_destroyFns.push(closeFunc);
    }
    const instance = {
      destroy: () => {
        function destroyAction() {
          var _a;
          (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
        }
        if (modalRef.current) {
          destroyAction();
        } else {
          setActionQueue(prev => [].concat((0,toConsumableArray/* default */.Z)(prev), [destroyAction]));
        }
      },
      update: newConfig => {
        function updateAction() {
          var _a;
          (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.update(newConfig);
        }
        if (modalRef.current) {
          updateAction();
        } else {
          setActionQueue(prev => [].concat((0,toConsumableArray/* default */.Z)(prev), [updateAction]));
        }
      },
      then: resolve => {
        silent = true;
        return promise.then(resolve);
      }
    };
    return instance;
  }, []);
  const fns = react.useMemo(() => ({
    info: getConfirmFunc(withInfo),
    success: getConfirmFunc(withSuccess),
    error: getConfirmFunc(withError),
    warning: getConfirmFunc(withWarn),
    confirm: getConfirmFunc(withConfirm)
  }), []);
  return [fns, /*#__PURE__*/react.createElement(ElementsHolder, {
    key: "modal-holder",
    ref: holderRef
  })];
}
/* harmony default export */ var modal_useModal = (useModal);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js
"use client";






function modalWarn(props) {
  return confirm_confirm(withWarn(props));
}
const es_modal_Modal = modal_Modal;
es_modal_Modal.useModal = modal_useModal;
es_modal_Modal.info = function infoFn(props) {
  return confirm_confirm(withInfo(props));
};
es_modal_Modal.success = function successFn(props) {
  return confirm_confirm(withSuccess(props));
};
es_modal_Modal.error = function errorFn(props) {
  return confirm_confirm(withError(props));
};
es_modal_Modal.warning = modalWarn;
es_modal_Modal.warn = modalWarn;
es_modal_Modal.confirm = function confirmFn(props) {
  return confirm_confirm(withConfirm(props));
};
es_modal_Modal.destroyAll = function destroyAllFn() {
  while (modal_destroyFns.length) {
    const close = modal_destroyFns.pop();
    if (close) {
      close();
    }
  }
};
es_modal_Modal.config = modalGlobalConfig;
es_modal_Modal._InternalPanelDoNotUseOrYouWillBeFired = modal_PurePanel;
if (false) {}
/* harmony default export */ var modal = (es_modal_Modal);

/***/ }),

/***/ 22421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B4: function() { return /* binding */ prepareToken; },
/* harmony export */   QA: function() { return /* binding */ genModalMaskStyle; },
/* harmony export */   eh: function() { return /* binding */ prepareComponentToken; }
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98020);
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
          margin: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.marginXS)} auto`
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
      maxWidth: `calc(100vw - ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.calc(token.margin).mul(2).equal())})`,
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
          lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.modalCloseBtnSize),
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
        borderRadius: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.borderRadiusLG)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.borderRadiusLG)} 0 0`,
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
          margin: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.margin)} auto`
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
  const modalToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__/* .mergeToken */ .IX)(token, {
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
  contentPadding: token.wireframe ? 0 : `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.paddingMD)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.paddingContentHorizontalLG)}`,
  headerPadding: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.padding)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.paddingLG)}` : 0,
  headerBorderBottom: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
  headerMarginBottom: token.wireframe ? 0 : token.marginXS,
  bodyPadding: token.wireframe ? token.paddingLG : 0,
  footerPadding: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.paddingXS)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.padding)}` : 0,
  footerBorderTop: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.lineWidth)} ${token.lineType} ${token.colorSplit}` : 'none',
  footerBorderRadius: token.wireframe ? `0 0 ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.borderRadiusLG)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.borderRadiusLG)}` : 0,
  footerMarginTop: token.wireframe ? 0 : token.marginSM,
  confirmBodyPadding: token.wireframe ? `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.padding * 2)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.padding * 2)} ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .unit */ .bf)(token.paddingLG)}` : 0,
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

/***/ 54152:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ space; }
});

// UNUSED EXPORTS: SpaceContext

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(48894);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/gapSize.js
function isPresetSize(size) {
  return ['small', 'middle', 'large'].includes(size);
}
function isValidGapNumber(size) {
  if (!size) {
    // The case of size = 0 is deliberately excluded here, because the default value of the gap attribute in CSS is 0, so if the user passes 0 in, we can directly ignore it.
    return false;
  }
  return typeof size === 'number' && !Number.isNaN(size);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(83756);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(57460);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/context.js

const SpaceContext = /*#__PURE__*/react.createContext({
  latestIndex: 0
});
const SpaceContextProvider = SpaceContext.Provider;
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/Item.js
"use client";



const Item = _ref => {
  let {
    className,
    index,
    children,
    split,
    style
  } = _ref;
  const {
    latestIndex
  } = react.useContext(SpaceContext);
  if (children === null || children === undefined) {
    return null;
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: className,
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/react.createElement("span", {
    className: `${className}-split`
  }, split));
};
/* harmony default export */ var space_Item = (Item);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/style/index.js + 1 modules
var space_style = __webpack_require__(74610);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const InternalSpace = /*#__PURE__*/react.forwardRef((props, ref) => {
  var _a, _b, _c;
  const {
    getPrefixCls,
    space,
    direction: directionConfig
  } = react.useContext(context/* ConfigContext */.E_);
  const {
      size = (_a = space === null || space === void 0 ? void 0 : space.size) !== null && _a !== void 0 ? _a : 'small',
      align,
      className,
      rootClassName,
      children,
      direction = 'horizontal',
      prefixCls: customizePrefixCls,
      split,
      style,
      wrap = false,
      classNames: customClassNames,
      styles
    } = props,
    otherProps = __rest(props, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]);
  const [horizontalSize, verticalSize] = Array.isArray(size) ? size : [size, size];
  const isPresetVerticalSize = isPresetSize(verticalSize);
  const isPresetHorizontalSize = isPresetSize(horizontalSize);
  const isValidVerticalSize = isValidGapNumber(verticalSize);
  const isValidHorizontalSize = isValidGapNumber(horizontalSize);
  const childNodes = (0,toArray/* default */.Z)(children, {
    keepEmpty: true
  });
  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  const prefixCls = getPrefixCls('space', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = (0,space_style/* default */.Z)(prefixCls);
  const cls = classnames_default()(prefixCls, space === null || space === void 0 ? void 0 : space.className, hashId, `${prefixCls}-${direction}`, {
    [`${prefixCls}-rtl`]: directionConfig === 'rtl',
    [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
    [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
    [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize
  }, className, rootClassName, cssVarCls);
  const itemClassName = classnames_default()(`${prefixCls}-item`, (_b = customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.item) !== null && _b !== void 0 ? _b : (_c = space === null || space === void 0 ? void 0 : space.classNames) === null || _c === void 0 ? void 0 : _c.item);
  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map((child, i) => {
    var _a, _b;
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    const key = (child === null || child === void 0 ? void 0 : child.key) || `${itemClassName}-${i}`;
    return /*#__PURE__*/react.createElement(space_Item, {
      className: itemClassName,
      key: key,
      index: i,
      split: split,
      style: (_a = styles === null || styles === void 0 ? void 0 : styles.item) !== null && _a !== void 0 ? _a : (_b = space === null || space === void 0 ? void 0 : space.styles) === null || _b === void 0 ? void 0 : _b.item
    }, child);
  });
  const spaceContext = react.useMemo(() => ({
    latestIndex
  }), [latestIndex]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  const gapStyle = {};
  if (wrap) {
    gapStyle.flexWrap = 'wrap';
  }
  if (!isPresetHorizontalSize && isValidHorizontalSize) {
    gapStyle.columnGap = horizontalSize;
  }
  if (!isPresetVerticalSize && isValidVerticalSize) {
    gapStyle.rowGap = verticalSize;
  }
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", Object.assign({
    ref: ref,
    className: cls,
    style: Object.assign(Object.assign(Object.assign({}, gapStyle), space === null || space === void 0 ? void 0 : space.style), style)
  }, otherProps), /*#__PURE__*/react.createElement(SpaceContextProvider, {
    value: spaceContext
  }, nodes)));
});
const Space = InternalSpace;
Space.Compact = Compact/* default */.ZP;
if (false) {}
/* harmony default export */ var space = (Space);

/***/ }),

/***/ 78715:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ typography; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/EditOutlined.js + 1 modules
var EditOutlined = __webpack_require__(20466);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-resize-observer/es/index.js + 5 modules
var es = __webpack_require__(74772);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(48894);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(50979);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(31998);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(30454);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(47486);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(67042);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Dom/styleChecker.js

var isStyleNameSupport = function isStyleNameSupport(styleName) {
  if ((0,canUseDom/* default */.Z)() && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }
  return false;
};
var isStyleValueSupport = function isStyleValueSupport(styleName, value) {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }
  var ele = document.createElement('div');
  var origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== undefined) {
    return isStyleValueSupport(styleName, styleValue);
  }
  return isStyleNameSupport(styleName);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(83756);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/locale/useLocale.js
var useLocale = __webpack_require__(24422);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 3 modules
var es_tooltip = __webpack_require__(35691);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(35453);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/EnterOutlined.js
// This icon file is generated automatically.
var EnterOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, "name": "enter", "theme": "outlined" };
/* harmony default export */ var asn_EnterOutlined = (EnterOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(46569);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/EnterOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var EnterOutlined_EnterOutlined = function EnterOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_EnterOutlined
  }));
};

/**![enter](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg2NCAxNzBoLTYwYy00LjQgMC04IDMuNi04IDh2NTE4SDMxMHYtNzNjMC02LjctNy44LTEwLjUtMTMtNi4zbC0xNDEuOSAxMTJhOCA4IDAgMDAwIDEyLjZsMTQxLjkgMTEyYzUuMyA0LjIgMTMgLjQgMTMtNi4zdi03NWg0OThjMzUuMyAwIDY0LTI4LjcgNjQtNjRWMTc4YzAtNC40LTMuNi04LTgtOHoiIC8+PC9zdmc+) */
var RefIcon = /*#__PURE__*/react.forwardRef(EnterOutlined_EnterOutlined);
if (false) {}
/* harmony default export */ var icons_EnterOutlined = (RefIcon);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(35763);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(81864);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/TextArea.js + 4 modules
var TextArea = __webpack_require__(19581);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(13587);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(61372);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+colors@7.1.0/node_modules/@ant-design/colors/es/index.js + 2 modules
var colors_es = __webpack_require__(75875);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.21.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(98020);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/style/mixins.js
/*
.typography-title(@fontSize; @fontWeight; @lineHeight; @headingColor; @headingMarginBottom;) {
 margin-bottom: @headingMarginBottom;
 color: @headingColor;
 font-weight: @fontWeight;
 fontSize: @fontSize;
 line-height: @lineHeight;
}
*/



const getTitleStyle = (fontSize, lineHeight, color, token) => {
  const {
    titleMarginBottom,
    fontWeightStrong
  } = token;
  return {
    marginBottom: titleMarginBottom,
    color,
    fontWeight: fontWeightStrong,
    fontSize,
    lineHeight
  };
};
const getTitleStyles = token => {
  const headings = [1, 2, 3, 4, 5];
  const styles = {};
  headings.forEach(headingLevel => {
    styles[`
      h${headingLevel}&,
      div&-h${headingLevel},
      div&-h${headingLevel} > textarea,
      h${headingLevel}
    `] = getTitleStyle(token[`fontSizeHeading${headingLevel}`], token[`lineHeightHeading${headingLevel}`], token.colorTextHeading, token);
  });
  return styles;
};
const getLinkStyles = token => {
  const {
    componentCls
  } = token;
  return {
    'a&, a': Object.assign(Object.assign({}, (0,style/* operationUnit */.Nd)(token)), {
      [`&[disabled], &${componentCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: 'not-allowed',
        '&:active, &:hover': {
          color: token.colorTextDisabled
        },
        '&:active': {
          pointerEvents: 'none'
        }
      }
    })
  };
};
const getResetStyles = token => ({
  code: {
    margin: '0 0.2em',
    paddingInline: '0.4em',
    paddingBlock: '0.2em 0.1em',
    fontSize: '85%',
    fontFamily: token.fontFamilyCode,
    background: 'rgba(150, 150, 150, 0.1)',
    border: '1px solid rgba(100, 100, 100, 0.2)',
    borderRadius: 3
  },
  kbd: {
    margin: '0 0.2em',
    paddingInline: '0.4em',
    paddingBlock: '0.15em 0.1em',
    fontSize: '90%',
    fontFamily: token.fontFamilyCode,
    background: 'rgba(150, 150, 150, 0.06)',
    border: '1px solid rgba(100, 100, 100, 0.2)',
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: colors_es/* gold */.EV[2]
  },
  'u, ins': {
    textDecoration: 'underline',
    textDecorationSkipInk: 'auto'
  },
  's, del': {
    textDecoration: 'line-through'
  },
  strong: {
    fontWeight: 600
  },
  // list
  'ul, ol': {
    marginInline: 0,
    marginBlock: '0 1em',
    padding: 0,
    li: {
      marginInline: '20px 0',
      marginBlock: 0,
      paddingInline: '4px 0',
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: 'circle',
    ul: {
      listStyleType: 'disc'
    }
  },
  ol: {
    listStyleType: 'decimal'
  },
  // pre & block
  'pre, blockquote': {
    margin: '1em 0'
  },
  pre: {
    padding: '0.4em 0.6em',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    background: 'rgba(150, 150, 150, 0.1)',
    border: '1px solid rgba(100, 100, 100, 0.2)',
    borderRadius: 3,
    fontFamily: token.fontFamilyCode,
    // Compatible for marked
    code: {
      display: 'inline',
      margin: 0,
      padding: 0,
      fontSize: 'inherit',
      fontFamily: 'inherit',
      background: 'transparent',
      border: 0
    }
  },
  blockquote: {
    paddingInline: '0.6em 0',
    paddingBlock: 0,
    borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
    opacity: 0.85
  }
});
const getEditableStyles = token => {
  const {
    componentCls,
    paddingSM
  } = token;
  const inputShift = paddingSM;
  return {
    '&-edit-content': {
      position: 'relative',
      'div&': {
        insetInlineStart: token.calc(token.paddingSM).mul(-1).equal(),
        marginTop: token.calc(inputShift).mul(-1).equal(),
        marginBottom: `calc(1em - ${(0,cssinjs_es/* unit */.bf)(inputShift)})`
      },
      [`${componentCls}-edit-content-confirm`]: {
        position: 'absolute',
        insetInlineEnd: token.calc(token.marginXS).add(2).equal(),
        insetBlockEnd: token.marginXS,
        color: token.colorTextDescription,
        // default style
        fontWeight: 'normal',
        fontSize: token.fontSize,
        fontStyle: 'normal',
        pointerEvents: 'none'
      },
      textarea: {
        margin: '0!important',
        // Fix Editable Textarea flash in Firefox
        MozTransition: 'none',
        height: '1em'
      }
    }
  };
};
const getCopyableStyles = token => ({
  [`${token.componentCls}-copy-success`]: {
    [`
    &,
    &:hover,
    &:focus`]: {
      color: token.colorSuccess
    }
  },
  [`${token.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
});
const getEllipsisStyles = () => ({
  [`
  a&-ellipsis,
  span&-ellipsis
  `]: {
    display: 'inline-block',
    maxWidth: '100%'
  },
  '&-ellipsis-single-line': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // https://blog.csdn.net/iefreer/article/details/50421025
    'a&, span&': {
      verticalAlign: 'bottom'
    },
    '> code': {
      paddingBlock: 0,
      maxWidth: 'calc(100% - 1.2em)',
      display: 'inline-block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      verticalAlign: 'bottom',
      // https://github.com/ant-design/ant-design/issues/45953
      boxSizing: 'content-box'
    }
  },
  '&-ellipsis-multiple-line': {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/style/index.js



const genTypographyStyle = token => {
  const {
    componentCls,
    titleMarginTop
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      color: token.colorText,
      wordBreak: 'break-word',
      lineHeight: token.lineHeight,
      [`&${componentCls}-secondary`]: {
        color: token.colorTextDescription
      },
      [`&${componentCls}-success`]: {
        color: token.colorSuccess
      },
      [`&${componentCls}-warning`]: {
        color: token.colorWarning
      },
      [`&${componentCls}-danger`]: {
        color: token.colorError,
        'a&:active, a&:focus': {
          color: token.colorErrorActive
        },
        'a&:hover': {
          color: token.colorErrorHover
        }
      },
      [`&${componentCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: 'not-allowed',
        userSelect: 'none'
      },
      [`
        div&,
        p
      `]: {
        marginBottom: '1em'
      }
    }, getTitleStyles(token)), {
      [`
      & + h1${componentCls},
      & + h2${componentCls},
      & + h3${componentCls},
      & + h4${componentCls},
      & + h5${componentCls}
      `]: {
        marginTop: titleMarginTop
      },
      [`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]: {
        [`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]: {
          marginTop: titleMarginTop
        }
      }
    }), getResetStyles(token)), getLinkStyles(token)), {
      // Operation
      [`
        ${componentCls}-expand,
        ${componentCls}-collapse,
        ${componentCls}-edit,
        ${componentCls}-copy
      `]: Object.assign(Object.assign({}, (0,style/* operationUnit */.Nd)(token)), {
        marginInlineStart: token.marginXXS
      })
    }), getEditableStyles(token)), getCopyableStyles(token)), getEllipsisStyles()), {
      '&-rtl': {
        direction: 'rtl'
      }
    })
  };
};
const prepareComponentToken = () => ({
  titleMarginTop: '1.2em',
  titleMarginBottom: '0.5em'
});
// ============================== Export ==============================
/* harmony default export */ var typography_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Typography', token => [genTypographyStyle(token)], prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/Editable.js
"use client";








const Editable = props => {
  const {
    prefixCls,
    'aria-label': ariaLabel,
    className,
    style,
    direction,
    maxLength,
    autoSize = true,
    value,
    onSave,
    onCancel,
    onEnd,
    component,
    enterIcon = /*#__PURE__*/react.createElement(icons_EnterOutlined, null)
  } = props;
  const ref = react.useRef(null);
  const inComposition = react.useRef(false);
  const lastKeyCode = react.useRef();
  const [current, setCurrent] = react.useState(value);
  react.useEffect(() => {
    setCurrent(value);
  }, [value]);
  react.useEffect(() => {
    var _a;
    if ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) {
      const {
        textArea
      } = ref.current.resizableTextArea;
      textArea.focus();
      const {
        length
      } = textArea.value;
      textArea.setSelectionRange(length, length);
    }
  }, []);
  const onChange = _ref => {
    let {
      target
    } = _ref;
    setCurrent(target.value.replace(/[\n\r]/g, ''));
  };
  const onCompositionStart = () => {
    inComposition.current = true;
  };
  const onCompositionEnd = () => {
    inComposition.current = false;
  };
  const onKeyDown = _ref2 => {
    let {
      keyCode
    } = _ref2;
    // We don't record keyCode when IME is using
    if (inComposition.current) return;
    lastKeyCode.current = keyCode;
  };
  const confirmChange = () => {
    onSave(current.trim());
  };
  const onKeyUp = _ref3 => {
    let {
      keyCode,
      ctrlKey,
      altKey,
      metaKey,
      shiftKey
    } = _ref3;
    // Check if it's a real key
    if (lastKeyCode.current !== keyCode || inComposition.current || ctrlKey || altKey || metaKey || shiftKey) {
      return;
    }
    if (keyCode === KeyCode/* default */.Z.ENTER) {
      confirmChange();
      onEnd === null || onEnd === void 0 ? void 0 : onEnd();
    } else if (keyCode === KeyCode/* default */.Z.ESC) {
      onCancel();
    }
  };
  const onBlur = () => {
    confirmChange();
  };
  const [wrapCSSVar, hashId, cssVarCls] = typography_style(prefixCls);
  const textAreaClassName = classnames_default()(prefixCls, `${prefixCls}-edit-content`, {
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-${component}`]: !!component
  }, className, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: textAreaClassName,
    style: style
  }, /*#__PURE__*/react.createElement(TextArea/* default */.Z, {
    ref: ref,
    maxLength: maxLength,
    value: current,
    onChange: onChange,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    onCompositionStart: onCompositionStart,
    onCompositionEnd: onCompositionEnd,
    onBlur: onBlur,
    "aria-label": ariaLabel,
    rows: 1,
    autoSize: autoSize
  }), enterIcon !== null ? (0,reactNode/* cloneElement */.Tm)(enterIcon, {
    className: `${prefixCls}-edit-content-confirm`
  }) : null));
};
/* harmony default export */ var typography_Editable = (Editable);
// EXTERNAL MODULE: ./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(874);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(35677);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/toList.js
function toList(candidate) {
  let skipEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (skipEmpty && (candidate === undefined || candidate === null)) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/hooks/useCopyClick.js
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};




const useCopyClick = _ref => {
  let {
    copyConfig,
    children
  } = _ref;
  const [copied, setCopied] = react.useState(false);
  const [copyLoading, setCopyLoading] = react.useState(false);
  const copyIdRef = react.useRef(null);
  const cleanCopyId = () => {
    if (copyIdRef.current) {
      clearTimeout(copyIdRef.current);
    }
  };
  const copyOptions = {};
  if (copyConfig.format) {
    copyOptions.format = copyConfig.format;
  }
  react.useEffect(() => cleanCopyId, []);
  // Keep copy action up to date
  const onClick = (0,useEvent/* default */.Z)(e => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    e === null || e === void 0 ? void 0 : e.preventDefault();
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    setCopyLoading(true);
    try {
      const text = typeof copyConfig.text === 'function' ? yield copyConfig.text() : copyConfig.text;
      copy_to_clipboard_default()(text || toList(children, true).join('') || '', copyOptions);
      setCopyLoading(false);
      setCopied(true);
      // Trigger tips update
      cleanCopyId();
      copyIdRef.current = setTimeout(() => {
        setCopied(false);
      }, 3000);
      (_a = copyConfig.onCopy) === null || _a === void 0 ? void 0 : _a.call(copyConfig, e);
    } catch (error) {
      setCopyLoading(false);
      throw error;
    }
  }));
  return {
    copied,
    copyLoading,
    onClick
  };
};
/* harmony default export */ var hooks_useCopyClick = (useCopyClick);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/hooks/useMergedConfig.js

function useMergedConfig(propConfig, templateConfig) {
  return react.useMemo(() => {
    const support = !!propConfig;
    return [support, Object.assign(Object.assign({}, templateConfig), support && typeof propConfig === 'object' ? propConfig : null)];
  }, [propConfig]);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/hooks/usePrevious.js

const usePrevious = value => {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
};
/* harmony default export */ var hooks_usePrevious = (usePrevious);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/hooks/useTooltipProps.js

const useTooltipProps = (tooltip, editConfigText, children) => (0,react.useMemo)(() => {
  if (tooltip === true) {
    return {
      title: editConfigText !== null && editConfigText !== void 0 ? editConfigText : children
    };
  }
  if (/*#__PURE__*/(0,react.isValidElement)(tooltip)) {
    return {
      title: tooltip
    };
  }
  if (typeof tooltip === 'object') {
    return Object.assign({
      title: editConfigText !== null && editConfigText !== void 0 ? editConfigText : children
    }, tooltip);
  }
  return {
    title: tooltip
  };
}, [tooltip, editConfigText, children]);
/* harmony default export */ var hooks_useTooltipProps = (useTooltipProps);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/Typography.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






const Typography = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      component: Component = 'article',
      className,
      rootClassName,
      setContentRef,
      children,
      direction: typographyDirection,
      style
    } = props,
    restProps = __rest(props, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]);
  const {
    getPrefixCls,
    direction: contextDirection,
    typography
  } = react.useContext(context/* ConfigContext */.E_);
  const direction = typographyDirection !== null && typographyDirection !== void 0 ? typographyDirection : contextDirection;
  const mergedRef = setContentRef ? (0,es_ref/* composeRef */.sQ)(ref, setContentRef) : ref;
  const prefixCls = getPrefixCls('typography', customizePrefixCls);
  if (false) {}
  // Style
  const [wrapCSSVar, hashId, cssVarCls] = typography_style(prefixCls);
  const componentClassName = classnames_default()(prefixCls, typography === null || typography === void 0 ? void 0 : typography.className, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, rootClassName, hashId, cssVarCls);
  const mergedStyle = Object.assign(Object.assign({}, typography === null || typography === void 0 ? void 0 : typography.style), style);
  return wrapCSSVar(
  /*#__PURE__*/
  // @ts-expect-error: Expression produces a union type that is too complex to represent.
  react.createElement(Component, Object.assign({
    className: componentClassName,
    style: mergedStyle,
    ref: mergedRef
  }, restProps), children));
});
if (false) {}
/* harmony default export */ var typography_Typography = (Typography);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(97512);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/CopyOutlined.js
// This icon file is generated automatically.
var CopyOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, "name": "copy", "theme": "outlined" };
/* harmony default export */ var asn_CopyOutlined = (CopyOutlined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CopyOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CopyOutlined_CopyOutlined = function CopyOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_CopyOutlined
  }));
};

/**![copy](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTgzMiA2NEgyOTZjLTQuNCAwLTggMy42LTggOHY1NmMwIDQuNCAzLjYgOCA4IDhoNDk2djY4OGMwIDQuNCAzLjYgOCA4IDhoNTZjNC40IDAgOC0zLjYgOC04Vjk2YzAtMTcuNy0xNC4zLTMyLTMyLTMyek03MDQgMTkySDE5MmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2NTMwLjdjMCA4LjUgMy40IDE2LjYgOS40IDIyLjZsMTczLjMgMTczLjNjMi4yIDIuMiA0LjcgNCA3LjQgNS41djEuOWg0LjJjMy41IDEuMyA3LjIgMiAxMSAySDcwNGMxNy43IDAgMzItMTQuMyAzMi0zMlYyMjRjMC0xNy43LTE0LjMtMzItMzItMzJ6TTM1MCA4NTYuMkwyNjMuOSA3NzBIMzUwdjg2LjJ6TTY2NCA4ODhINDE0Vjc0NmMwLTIyLjEtMTcuOS00MC00MC00MEgyMzJWMjY0aDQzMnY2MjR6IiAvPjwvc3ZnPg==) */
var CopyOutlined_RefIcon = /*#__PURE__*/react.forwardRef(CopyOutlined_CopyOutlined);
if (false) {}
/* harmony default export */ var icons_CopyOutlined = (CopyOutlined_RefIcon);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(8298);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/Base/util.js
function util_toList(val) {
  if (val === false) {
    return [false, false];
  }
  return Array.isArray(val) ? val : [val];
}
function getNode(dom, defaultNode, needDom) {
  if (dom === true || dom === undefined) {
    return defaultNode;
  }
  return dom || needDom && defaultNode;
}
/**
 * Check for element is native ellipsis
 * ref:
 * - https://github.com/ant-design/ant-design/issues/50143
 * - https://github.com/ant-design/ant-design/issues/50414
 */
function isEleEllipsis(ele) {
  // Create a new div to get the size
  const childDiv = document.createElement('em');
  ele.appendChild(childDiv);
  // For test case
  if (false) {}
  const rect = ele.getBoundingClientRect();
  const childRect = childDiv.getBoundingClientRect();
  // Reset
  ele.removeChild(childDiv);
  // Range checker
  return (
    // Horizontal out of range
    rect.left > childRect.left || childRect.right > rect.right ||
    // Vertical out of range
    rect.top > childRect.top || childRect.bottom > rect.bottom
  );
}
const isValidText = val => ['string', 'number'].includes(typeof val);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/Base/CopyBtn.js
"use client";








const CopyBtn = _ref => {
  let {
    prefixCls,
    copied,
    locale,
    iconOnly,
    tooltips,
    icon,
    tabIndex,
    onCopy,
    loading: btnLoading
  } = _ref;
  const tooltipNodes = util_toList(tooltips);
  const iconNodes = util_toList(icon);
  const {
    copied: copiedText,
    copy: copyText
  } = locale !== null && locale !== void 0 ? locale : {};
  const systemStr = copied ? copiedText : copyText;
  const copyTitle = getNode(tooltipNodes[copied ? 1 : 0], systemStr);
  const ariaLabel = typeof copyTitle === 'string' ? copyTitle : systemStr;
  return /*#__PURE__*/react.createElement(es_tooltip/* default */.Z, {
    title: copyTitle
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: classnames_default()(`${prefixCls}-copy`, {
      [`${prefixCls}-copy-success`]: copied,
      [`${prefixCls}-copy-icon-only`]: iconOnly
    }),
    onClick: onCopy,
    "aria-label": ariaLabel,
    tabIndex: tabIndex
  }, copied ? getNode(iconNodes[1], /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null), true) : getNode(iconNodes[0], btnLoading ? /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(icons_CopyOutlined, null), true)));
};
/* harmony default export */ var Base_CopyBtn = (CopyBtn);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(96992);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/Base/Ellipsis.js
"use client";






const MeasureText = /*#__PURE__*/react.forwardRef((_ref, ref) => {
  let {
    style,
    children
  } = _ref;
  const spanRef = react.useRef(null);
  react.useImperativeHandle(ref, () => ({
    isExceed: () => {
      const span = spanRef.current;
      return span.scrollHeight > span.clientHeight;
    },
    getHeight: () => spanRef.current.clientHeight
  }));
  return /*#__PURE__*/react.createElement("span", {
    "aria-hidden": true,
    ref: spanRef,
    style: Object.assign({
      position: 'fixed',
      display: 'block',
      left: 0,
      top: 0,
      pointerEvents: 'none',
      backgroundColor: 'rgba(255, 0, 0, 0.65)'
    }, style)
  }, children);
});
const getNodesLen = nodeList => nodeList.reduce((totalLen, node) => totalLen + (isValidText(node) ? String(node).length : 1), 0);
function sliceNodes(nodeList, len) {
  let currLen = 0;
  const currentNodeList = [];
  for (let i = 0; i < nodeList.length; i += 1) {
    // Match to return
    if (currLen === len) {
      return currentNodeList;
    }
    const node = nodeList[i];
    const canCut = isValidText(node);
    const nodeLen = canCut ? String(node).length : 1;
    const nextLen = currLen + nodeLen;
    // Exceed but current not which means we need cut this
    // This will not happen on validate ReactElement
    if (nextLen > len) {
      const restLen = len - currLen;
      currentNodeList.push(String(node).slice(0, restLen));
      return currentNodeList;
    }
    currentNodeList.push(node);
    currLen = nextLen;
  }
  return nodeList;
}
// Measure for the `text` is exceed the `rows` or not
const STATUS_MEASURE_NONE = 0;
const STATUS_MEASURE_PREPARE = 1;
const STATUS_MEASURE_START = 2;
const STATUS_MEASURE_NEED_ELLIPSIS = 3;
const STATUS_MEASURE_NO_NEED_ELLIPSIS = 4;
const lineClipStyle = {
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical'
};
function EllipsisMeasure(props) {
  const {
    enableMeasure,
    width,
    text,
    children,
    rows,
    expanded,
    miscDeps,
    onEllipsis
  } = props;
  const nodeList = react.useMemo(() => (0,toArray/* default */.Z)(text), [text]);
  const nodeLen = react.useMemo(() => getNodesLen(nodeList), [text]);
  // ========================= Full Content =========================
  // Used for measure only, which means it's always render as no need ellipsis
  const fullContent = react.useMemo(() => children(nodeList, false), [text]);
  // ========================= Cut Content ==========================
  const [ellipsisCutIndex, setEllipsisCutIndex] = react.useState(null);
  const cutMidRef = react.useRef(null);
  // ========================= NeedEllipsis =========================
  const measureWhiteSpaceRef = react.useRef(null);
  const needEllipsisRef = react.useRef(null);
  // Measure for `rows-1` height, to avoid operation exceed the line height
  const descRowsEllipsisRef = react.useRef(null);
  const symbolRowEllipsisRef = react.useRef(null);
  const [canEllipsis, setCanEllipsis] = react.useState(false);
  const [needEllipsis, setNeedEllipsis] = react.useState(STATUS_MEASURE_NONE);
  const [ellipsisHeight, setEllipsisHeight] = react.useState(0);
  const [parentWhiteSpace, setParentWhiteSpace] = react.useState(null);
  // Trigger start measure
  (0,useLayoutEffect/* default */.Z)(() => {
    if (enableMeasure && width && nodeLen) {
      setNeedEllipsis(STATUS_MEASURE_PREPARE);
    } else {
      setNeedEllipsis(STATUS_MEASURE_NONE);
    }
  }, [width, text, rows, enableMeasure, nodeList]);
  // Measure process
  (0,useLayoutEffect/* default */.Z)(() => {
    var _a, _b, _c, _d;
    if (needEllipsis === STATUS_MEASURE_PREPARE) {
      setNeedEllipsis(STATUS_MEASURE_START);
      // Parent ref `white-space`
      const nextWhiteSpace = measureWhiteSpaceRef.current && getComputedStyle(measureWhiteSpaceRef.current).whiteSpace;
      setParentWhiteSpace(nextWhiteSpace);
    } else if (needEllipsis === STATUS_MEASURE_START) {
      const isOverflow = !!((_a = needEllipsisRef.current) === null || _a === void 0 ? void 0 : _a.isExceed());
      setNeedEllipsis(isOverflow ? STATUS_MEASURE_NEED_ELLIPSIS : STATUS_MEASURE_NO_NEED_ELLIPSIS);
      setEllipsisCutIndex(isOverflow ? [0, nodeLen] : null);
      setCanEllipsis(isOverflow);
      // Get the basic height of ellipsis rows
      const baseRowsEllipsisHeight = ((_b = needEllipsisRef.current) === null || _b === void 0 ? void 0 : _b.getHeight()) || 0;
      // Get the height of `rows - 1` + symbol height
      const descRowsEllipsisHeight = rows === 1 ? 0 : ((_c = descRowsEllipsisRef.current) === null || _c === void 0 ? void 0 : _c.getHeight()) || 0;
      const symbolRowEllipsisHeight = ((_d = symbolRowEllipsisRef.current) === null || _d === void 0 ? void 0 : _d.getHeight()) || 0;
      const maxRowsHeight = Math.max(baseRowsEllipsisHeight,
      // height of rows with ellipsis
      descRowsEllipsisHeight + symbolRowEllipsisHeight);
      setEllipsisHeight(maxRowsHeight + 1);
      onEllipsis(isOverflow);
    }
  }, [needEllipsis]);
  // ========================= Cut Measure ==========================
  const cutMidIndex = ellipsisCutIndex ? Math.ceil((ellipsisCutIndex[0] + ellipsisCutIndex[1]) / 2) : 0;
  (0,useLayoutEffect/* default */.Z)(() => {
    var _a;
    const [minIndex, maxIndex] = ellipsisCutIndex || [0, 0];
    if (minIndex !== maxIndex) {
      const midHeight = ((_a = cutMidRef.current) === null || _a === void 0 ? void 0 : _a.getHeight()) || 0;
      const isOverflow = midHeight > ellipsisHeight;
      let targetMidIndex = cutMidIndex;
      if (maxIndex - minIndex === 1) {
        targetMidIndex = isOverflow ? minIndex : maxIndex;
      }
      setEllipsisCutIndex(isOverflow ? [minIndex, targetMidIndex] : [targetMidIndex, maxIndex]);
    }
  }, [ellipsisCutIndex, cutMidIndex]);
  // ========================= Text Content =========================
  const finalContent = react.useMemo(() => {
    // Skip everything if `enableMeasure` is disabled
    if (!enableMeasure) {
      return children(nodeList, false);
    }
    if (needEllipsis !== STATUS_MEASURE_NEED_ELLIPSIS || !ellipsisCutIndex || ellipsisCutIndex[0] !== ellipsisCutIndex[1]) {
      const content = children(nodeList, false);
      // Limit the max line count to avoid scrollbar blink unless no need ellipsis
      // https://github.com/ant-design/ant-design/issues/42958
      if ([STATUS_MEASURE_NO_NEED_ELLIPSIS, STATUS_MEASURE_NONE].includes(needEllipsis)) {
        return content;
      }
      return /*#__PURE__*/react.createElement("span", {
        style: Object.assign(Object.assign({}, lineClipStyle), {
          WebkitLineClamp: rows
        })
      }, content);
    }
    return children(expanded ? nodeList : sliceNodes(nodeList, ellipsisCutIndex[0]), canEllipsis);
  }, [expanded, needEllipsis, ellipsisCutIndex, nodeList].concat((0,toConsumableArray/* default */.Z)(miscDeps)));
  // ============================ Render ============================
  const measureStyle = {
    width,
    margin: 0,
    padding: 0,
    whiteSpace: parentWhiteSpace === 'nowrap' ? 'normal' : 'inherit'
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, finalContent, needEllipsis === STATUS_MEASURE_START && (/*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(MeasureText, {
    style: Object.assign(Object.assign(Object.assign({}, measureStyle), lineClipStyle), {
      WebkitLineClamp: rows
    }),
    ref: needEllipsisRef
  }, fullContent), /*#__PURE__*/react.createElement(MeasureText, {
    style: Object.assign(Object.assign(Object.assign({}, measureStyle), lineClipStyle), {
      WebkitLineClamp: rows - 1
    }),
    ref: descRowsEllipsisRef
  }, fullContent), /*#__PURE__*/react.createElement(MeasureText, {
    style: Object.assign(Object.assign(Object.assign({}, measureStyle), lineClipStyle), {
      WebkitLineClamp: 1
    }),
    ref: symbolRowEllipsisRef
  }, children([], true)))), needEllipsis === STATUS_MEASURE_NEED_ELLIPSIS && ellipsisCutIndex && ellipsisCutIndex[0] !== ellipsisCutIndex[1] && (/*#__PURE__*/react.createElement(MeasureText, {
    style: Object.assign(Object.assign({}, measureStyle), {
      top: 400
    }),
    ref: cutMidRef
  }, children(sliceNodes(nodeList, cutMidIndex), true))), needEllipsis === STATUS_MEASURE_PREPARE && (/*#__PURE__*/react.createElement("span", {
    style: {
      whiteSpace: 'inherit'
    },
    ref: measureWhiteSpaceRef
  })));
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/Base/EllipsisTooltip.js
"use client";



const EllipsisTooltip = _ref => {
  let {
    enableEllipsis,
    isEllipsis,
    children,
    tooltipProps
  } = _ref;
  if (!(tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.title) || !enableEllipsis) {
    return children;
  }
  return /*#__PURE__*/react.createElement(es_tooltip/* default */.Z, Object.assign({
    open: isEllipsis ? undefined : false
  }, tooltipProps), children);
};
if (false) {}
/* harmony default export */ var Base_EllipsisTooltip = (EllipsisTooltip);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/Base/index.js
"use client";

var Base_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};























function wrapperDecorations(_ref, content) {
  let {
    mark,
    code,
    underline,
    delete: del,
    strong,
    keyboard,
    italic
  } = _ref;
  let currentContent = content;
  function wrap(tag, needed) {
    if (!needed) {
      return;
    }
    currentContent = /*#__PURE__*/react.createElement(tag, {}, currentContent);
  }
  wrap('strong', strong);
  wrap('u', underline);
  wrap('del', del);
  wrap('code', code);
  wrap('mark', mark);
  wrap('kbd', keyboard);
  wrap('i', italic);
  return currentContent;
}
const ELLIPSIS_STR = '...';
const Base = /*#__PURE__*/react.forwardRef((props, ref) => {
  var _a;
  const {
      prefixCls: customizePrefixCls,
      className,
      style,
      type,
      disabled,
      children,
      ellipsis,
      editable,
      copyable,
      component,
      title
    } = props,
    restProps = Base_rest(props, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]);
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const [textLocale] = (0,useLocale/* default */.Z)('Text');
  const typographyRef = react.useRef(null);
  const editIconRef = react.useRef(null);
  // ============================ MISC ============================
  const prefixCls = getPrefixCls('typography', customizePrefixCls);
  const textProps = (0,omit/* default */.Z)(restProps, ['mark', 'code', 'delete', 'underline', 'strong', 'keyboard', 'italic']);
  // ========================== Editable ==========================
  const [enableEdit, editConfig] = useMergedConfig(editable);
  const [editing, setEditing] = (0,useMergedState/* default */.Z)(false, {
    value: editConfig.editing
  });
  const {
    triggerType = ['icon']
  } = editConfig;
  const triggerEdit = edit => {
    var _a;
    if (edit) {
      (_a = editConfig.onStart) === null || _a === void 0 ? void 0 : _a.call(editConfig);
    }
    setEditing(edit);
  };
  // Focus edit icon when back
  const prevEditing = hooks_usePrevious(editing);
  (0,useLayoutEffect/* default */.Z)(() => {
    var _a;
    if (!editing && prevEditing) {
      (_a = editIconRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }, [editing]);
  const onEditClick = e => {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    triggerEdit(true);
  };
  const onEditChange = value => {
    var _a;
    (_a = editConfig.onChange) === null || _a === void 0 ? void 0 : _a.call(editConfig, value);
    triggerEdit(false);
  };
  const onEditCancel = () => {
    var _a;
    (_a = editConfig.onCancel) === null || _a === void 0 ? void 0 : _a.call(editConfig);
    triggerEdit(false);
  };
  // ========================== Copyable ==========================
  const [enableCopy, copyConfig] = useMergedConfig(copyable);
  const {
    copied,
    copyLoading,
    onClick: onCopyClick
  } = hooks_useCopyClick({
    copyConfig,
    children
  });
  // ========================== Ellipsis ==========================
  const [isLineClampSupport, setIsLineClampSupport] = react.useState(false);
  const [isTextOverflowSupport, setIsTextOverflowSupport] = react.useState(false);
  const [isJsEllipsis, setIsJsEllipsis] = react.useState(false);
  const [isNativeEllipsis, setIsNativeEllipsis] = react.useState(false);
  const [isNativeVisible, setIsNativeVisible] = react.useState(true);
  const [enableEllipsis, ellipsisConfig] = useMergedConfig(ellipsis, {
    expandable: false,
    symbol: isExpanded => isExpanded ? textLocale === null || textLocale === void 0 ? void 0 : textLocale.collapse : textLocale === null || textLocale === void 0 ? void 0 : textLocale.expand
  });
  const [expanded, setExpanded] = (0,useMergedState/* default */.Z)(ellipsisConfig.defaultExpanded || false, {
    value: ellipsisConfig.expanded
  });
  const mergedEnableEllipsis = enableEllipsis && (!expanded || ellipsisConfig.expandable === 'collapsible');
  // Shared prop to reduce bundle size
  const {
    rows = 1
  } = ellipsisConfig;
  const needMeasureEllipsis = react.useMemo(() =>
  // Disable ellipsis
  mergedEnableEllipsis && (
  // Provide suffix
  ellipsisConfig.suffix !== undefined || ellipsisConfig.onEllipsis ||
  // Can't use css ellipsis since we need to provide the place for button
  ellipsisConfig.expandable || enableEdit || enableCopy), [mergedEnableEllipsis, ellipsisConfig, enableEdit, enableCopy]);
  (0,useLayoutEffect/* default */.Z)(() => {
    if (enableEllipsis && !needMeasureEllipsis) {
      setIsLineClampSupport(isStyleSupport('webkitLineClamp'));
      setIsTextOverflowSupport(isStyleSupport('textOverflow'));
    }
  }, [needMeasureEllipsis, enableEllipsis]);
  const [cssEllipsis, setCssEllipsis] = react.useState(mergedEnableEllipsis);
  const canUseCssEllipsis = react.useMemo(() => {
    if (needMeasureEllipsis) {
      return false;
    }
    if (rows === 1) {
      return isTextOverflowSupport;
    }
    return isLineClampSupport;
  }, [needMeasureEllipsis, isTextOverflowSupport, isLineClampSupport]);
  // We use effect to change from css ellipsis to js ellipsis.
  // To make SSR still can see the ellipsis.
  (0,useLayoutEffect/* default */.Z)(() => {
    setCssEllipsis(canUseCssEllipsis && mergedEnableEllipsis);
  }, [canUseCssEllipsis, mergedEnableEllipsis]);
  const isMergedEllipsis = mergedEnableEllipsis && (cssEllipsis ? isNativeEllipsis : isJsEllipsis);
  const cssTextOverflow = mergedEnableEllipsis && rows === 1 && cssEllipsis;
  const cssLineClamp = mergedEnableEllipsis && rows > 1 && cssEllipsis;
  // >>>>> Expand
  const onExpandClick = (e, info) => {
    var _a;
    setExpanded(info.expanded);
    (_a = ellipsisConfig.onExpand) === null || _a === void 0 ? void 0 : _a.call(ellipsisConfig, e, info);
  };
  const [ellipsisWidth, setEllipsisWidth] = react.useState(0);
  const onResize = _ref2 => {
    let {
      offsetWidth
    } = _ref2;
    setEllipsisWidth(offsetWidth);
  };
  // >>>>> JS Ellipsis
  const onJsEllipsis = jsEllipsis => {
    var _a;
    setIsJsEllipsis(jsEllipsis);
    // Trigger if changed
    if (isJsEllipsis !== jsEllipsis) {
      (_a = ellipsisConfig.onEllipsis) === null || _a === void 0 ? void 0 : _a.call(ellipsisConfig, jsEllipsis);
    }
  };
  // >>>>> Native ellipsis
  react.useEffect(() => {
    const textEle = typographyRef.current;
    if (enableEllipsis && cssEllipsis && textEle) {
      const currentEllipsis = isEleEllipsis(textEle);
      if (isNativeEllipsis !== currentEllipsis) {
        setIsNativeEllipsis(currentEllipsis);
      }
    }
  }, [enableEllipsis, cssEllipsis, children, cssLineClamp, isNativeVisible, ellipsisWidth]);
  // https://github.com/ant-design/ant-design/issues/36786
  // Use IntersectionObserver to check if element is invisible
  react.useEffect(() => {
    const textEle = typographyRef.current;
    if (typeof IntersectionObserver === 'undefined' || !textEle || !cssEllipsis || !mergedEnableEllipsis) {
      return;
    }
    /* eslint-disable-next-line compat/compat */
    const observer = new IntersectionObserver(() => {
      setIsNativeVisible(!!textEle.offsetParent);
    });
    observer.observe(textEle);
    return () => {
      observer.disconnect();
    };
  }, [cssEllipsis, mergedEnableEllipsis]);
  // ========================== Tooltip ===========================
  const tooltipProps = hooks_useTooltipProps(ellipsisConfig.tooltip, editConfig.text, children);
  const topAriaLabel = react.useMemo(() => {
    if (!enableEllipsis || cssEllipsis) {
      return undefined;
    }
    return [editConfig.text, children, title, tooltipProps.title].find(isValidText);
  }, [enableEllipsis, cssEllipsis, title, tooltipProps.title, isMergedEllipsis]);
  // =========================== Render ===========================
  // >>>>>>>>>>> Editing input
  if (editing) {
    return /*#__PURE__*/react.createElement(typography_Editable, {
      value: (_a = editConfig.text) !== null && _a !== void 0 ? _a : typeof children === 'string' ? children : '',
      onSave: onEditChange,
      onCancel: onEditCancel,
      onEnd: editConfig.onEnd,
      prefixCls: prefixCls,
      className: className,
      style: style,
      direction: direction,
      component: component,
      maxLength: editConfig.maxLength,
      autoSize: editConfig.autoSize,
      enterIcon: editConfig.enterIcon
    });
  }
  // >>>>>>>>>>> Typography
  // Expand
  const renderExpand = () => {
    const {
      expandable,
      symbol
    } = ellipsisConfig;
    return expandable ? (/*#__PURE__*/react.createElement("button", {
      type: "button",
      key: "expand",
      className: `${prefixCls}-${expanded ? 'collapse' : 'expand'}`,
      onClick: e => onExpandClick(e, {
        expanded: !expanded
      }),
      "aria-label": expanded ? textLocale.collapse : textLocale === null || textLocale === void 0 ? void 0 : textLocale.expand
    }, typeof symbol === 'function' ? symbol(expanded) : symbol)) : null;
  };
  // Edit
  const renderEdit = () => {
    if (!enableEdit) {
      return;
    }
    const {
      icon,
      tooltip,
      tabIndex
    } = editConfig;
    const editTitle = (0,toArray/* default */.Z)(tooltip)[0] || (textLocale === null || textLocale === void 0 ? void 0 : textLocale.edit);
    const ariaLabel = typeof editTitle === 'string' ? editTitle : '';
    return triggerType.includes('icon') ? (/*#__PURE__*/react.createElement(es_tooltip/* default */.Z, {
      key: "edit",
      title: tooltip === false ? '' : editTitle
    }, /*#__PURE__*/react.createElement("button", {
      type: "button",
      ref: editIconRef,
      className: `${prefixCls}-edit`,
      onClick: onEditClick,
      "aria-label": ariaLabel,
      tabIndex: tabIndex
    }, icon || /*#__PURE__*/react.createElement(EditOutlined/* default */.Z, {
      role: "button"
    })))) : null;
  };
  // Copy
  const renderCopy = () => {
    if (!enableCopy) {
      return null;
    }
    return /*#__PURE__*/react.createElement(Base_CopyBtn, Object.assign({
      key: "copy"
    }, copyConfig, {
      prefixCls: prefixCls,
      copied: copied,
      locale: textLocale,
      onCopy: onCopyClick,
      loading: copyLoading,
      iconOnly: children === null || children === undefined
    }));
  };
  const renderOperations = canEllipsis => [canEllipsis && renderExpand(), renderEdit(), renderCopy()];
  const renderEllipsis = canEllipsis => [canEllipsis && !expanded && (/*#__PURE__*/react.createElement("span", {
    "aria-hidden": true,
    key: "ellipsis"
  }, ELLIPSIS_STR)), ellipsisConfig.suffix, renderOperations(canEllipsis)];
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: onResize,
    disabled: !mergedEnableEllipsis
  }, resizeRef => (/*#__PURE__*/react.createElement(Base_EllipsisTooltip, {
    tooltipProps: tooltipProps,
    enableEllipsis: mergedEnableEllipsis,
    isEllipsis: isMergedEllipsis
  }, /*#__PURE__*/react.createElement(typography_Typography, Object.assign({
    className: classnames_default()({
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-ellipsis`]: enableEllipsis,
      [`${prefixCls}-ellipsis-single-line`]: cssTextOverflow,
      [`${prefixCls}-ellipsis-multiple-line`]: cssLineClamp
    }, className),
    prefixCls: customizePrefixCls,
    style: Object.assign(Object.assign({}, style), {
      WebkitLineClamp: cssLineClamp ? rows : undefined
    }),
    component: component,
    ref: (0,es_ref/* composeRef */.sQ)(resizeRef, typographyRef, ref),
    direction: direction,
    onClick: triggerType.includes('text') ? onEditClick : undefined,
    "aria-label": topAriaLabel === null || topAriaLabel === void 0 ? void 0 : topAriaLabel.toString(),
    title: title
  }, textProps), /*#__PURE__*/react.createElement(EllipsisMeasure, {
    enableMeasure: mergedEnableEllipsis && !cssEllipsis,
    text: children,
    rows: rows,
    width: ellipsisWidth,
    onEllipsis: onJsEllipsis,
    expanded: expanded,
    miscDeps: [copied, expanded, copyLoading, enableEdit, enableCopy]
  }, (node, canEllipsis) => wrapperDecorations(props, /*#__PURE__*/react.createElement(react.Fragment, null, node.length > 0 && canEllipsis && !expanded && topAriaLabel ? (/*#__PURE__*/react.createElement("span", {
    key: "show-content",
    "aria-hidden": true
  }, node)) : node, renderEllipsis(canEllipsis))))))));
});
/* harmony default export */ var typography_Base = (Base);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/Link.js
"use client";

var Link_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const Link = /*#__PURE__*/react.forwardRef((_a, ref) => {
  var {
      ellipsis,
      rel
    } = _a,
    restProps = Link_rest(_a, ["ellipsis", "rel"]);
  if (false) {}
  const mergedProps = Object.assign(Object.assign({}, restProps), {
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel
  });
  // @ts-expect-error: https://github.com/ant-design/ant-design/issues/26622
  delete mergedProps.navigate;
  return /*#__PURE__*/react.createElement(typography_Base, Object.assign({}, mergedProps, {
    ref: ref,
    ellipsis: !!ellipsis,
    component: "a"
  }));
});
/* harmony default export */ var typography_Link = (Link);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/Paragraph.js
"use client";



const Paragraph = /*#__PURE__*/react.forwardRef((props, ref) => (/*#__PURE__*/react.createElement(typography_Base, Object.assign({
  ref: ref
}, props, {
  component: "div"
}))));
/* harmony default export */ var typography_Paragraph = (Paragraph);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/Text.js
"use client";

var Text_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const Text = (_a, ref) => {
  var {
      ellipsis
    } = _a,
    restProps = Text_rest(_a, ["ellipsis"]);
  const mergedEllipsis = react.useMemo(() => {
    if (ellipsis && typeof ellipsis === 'object') {
      return (0,omit/* default */.Z)(ellipsis, ['expandable', 'rows']);
    }
    return ellipsis;
  }, [ellipsis]);
  if (false) {}
  return /*#__PURE__*/react.createElement(typography_Base, Object.assign({
    ref: ref
  }, restProps, {
    ellipsis: mergedEllipsis,
    component: "span"
  }));
};
/* harmony default export */ var typography_Text = (/*#__PURE__*/react.forwardRef(Text));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/Title.js
"use client";

var Title_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const TITLE_ELE_LIST = [1, 2, 3, 4, 5];
const Title = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      level = 1
    } = props,
    restProps = Title_rest(props, ["level"]);
  if (false) {}
  const component = TITLE_ELE_LIST.includes(level) ? `h${level}` : `h1`;
  return /*#__PURE__*/react.createElement(typography_Base, Object.assign({
    ref: ref
  }, restProps, {
    component: component
  }));
});
/* harmony default export */ var typography_Title = (Title);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js
"use client";






const es_typography_Typography = typography_Typography;
es_typography_Typography.Text = typography_Text;
es_typography_Typography.Link = typography_Link;
es_typography_Typography.Title = typography_Title;
es_typography_Typography.Paragraph = typography_Paragraph;
/* harmony default export */ var typography = (es_typography_Typography);

/***/ }),

/***/ 61520:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ usePanelRef; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var rc_util_es_hooks_useEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35677);


function voidFunc() {}
const WatermarkContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  add: voidFunc,
  remove: voidFunc
});
function usePanelRef(panelSelector) {
  const watermark = react__WEBPACK_IMPORTED_MODULE_0__.useContext(WatermarkContext);
  const panelEleRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const panelRef = (0,rc_util_es_hooks_useEvent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ele => {
    if (ele) {
      const innerContentEle = panelSelector ? ele.querySelector(panelSelector) : ele;
      watermark.add(innerContentEle);
      panelEleRef.current = innerContentEle;
    } else {
      watermark.remove(panelEleRef.current);
    }
  });
  return panelRef;
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WatermarkContext)));

/***/ }),

/***/ 874:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(16935);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 94813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: function() { return /* reexport */ Content_Panel; },
  Z: function() { return /* binding */ rc_dialog_es; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(35453);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(88414);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+portal@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/portal/es/index.js + 7 modules
var es = __webpack_require__(13643);
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
var es_ref = __webpack_require__(47486);
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
  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, {
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
  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, {
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

/***/ }),

/***/ 16935:
/***/ (function(module) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ })

}]);