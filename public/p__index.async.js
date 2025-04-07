"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8866],{

/***/ 61067:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ResponPopup; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(70567);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var modal = __webpack_require__(7567);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/index.js + 3 modules
var drawer = __webpack_require__(22842);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/Components/ResponPopup/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/ResponPopup/index.tsx






var useBreakpoint = grid/* default */.ZP.useBreakpoint;
var Popup = function Popup(_ref) {
  var show = _ref.show,
    modalWidth = _ref.modalWidth,
    onClose = _ref.onClose,
    children = _ref.children,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? false : _ref$closable,
    _ref$maskClosable = _ref.maskClosable,
    maskClosable = _ref$maskClosable === void 0 ? true : _ref$maskClosable,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$bodyStyle = _ref.bodyStyle,
    bodyStyle = _ref$bodyStyle === void 0 ? {} : _ref$bodyStyle;
  var _useBreakpoint = useBreakpoint(),
    md = _useBreakpoint.md;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: md ? /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
      open: show,
      onCancel: onClose,
      width: modalWidth || 420,
      title: title,
      footer: null,
      closable: closable,
      maskClosable: maskClosable,
      style: objectSpread2_default()({
        padding: 0
      }, style),
      className: 'hayPopup' + ' ' + className,
      styles: {
        body: objectSpread2_default()({
          padding: 0,
          borderRadius: 4
        }, bodyStyle)
      },
      children: children
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
      title: title,
      open: show,
      placement: "bottom",
      onClose: onClose,
      closable: closable,
      maskClosable: maskClosable,
      style: objectSpread2_default()({
        height: 'auto'
      }, style),
      styles: {
        body: objectSpread2_default()({
          height: 'auto',
          maxHeight: '90vh',
          padding: 10
        }, bodyStyle),
        wrapper: {
          height: 'auto'
        }
      },
      children: children
    })
  });
};
/* harmony default export */ var ResponPopup = (Popup);

/***/ }),

/***/ 32537:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useForceUpdate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);

function useForceUpdate() {
  const [, forceUpdate] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(x => x + 1, 0);
  return forceUpdate;
}

/***/ }),

/***/ 76834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: function() { return /* binding */ useResponsiveObserver; },
/* harmony export */   c4: function() { return /* binding */ responsiveArray; },
/* harmony export */   m9: function() { return /* binding */ matchScreen; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2100);


const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const getResponsiveMap = token => ({
  xs: `(max-width: ${token.screenXSMax}px)`,
  sm: `(min-width: ${token.screenSM}px)`,
  md: `(min-width: ${token.screenMD}px)`,
  lg: `(min-width: ${token.screenLG}px)`,
  xl: `(min-width: ${token.screenXL}px)`,
  xxl: `(min-width: ${token.screenXXL}px)`
});
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */
const validateBreakpoints = token => {
  const indexableToken = token;
  const revBreakpoints = [].concat(responsiveArray).reverse();
  revBreakpoints.forEach((breakpoint, i) => {
    const breakpointUpper = breakpoint.toUpperCase();
    const screenMin = `screen${breakpointUpper}Min`;
    const screen = `screen${breakpointUpper}`;
    if (!(indexableToken[screenMin] <= indexableToken[screen])) {
      throw new Error(`${screenMin}<=${screen} fails : !(${indexableToken[screenMin]}<=${indexableToken[screen]})`);
    }
    if (i < revBreakpoints.length - 1) {
      const screenMax = `screen${breakpointUpper}Max`;
      if (!(indexableToken[screen] <= indexableToken[screenMax])) {
        throw new Error(`${screen}<=${screenMax} fails : !(${indexableToken[screen]}<=${indexableToken[screenMax]})`);
      }
      const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
      const nextScreenMin = `screen${nextBreakpointUpperMin}Min`;
      if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
        throw new Error(`${screenMax}<=${nextScreenMin} fails : !(${indexableToken[screenMax]}<=${indexableToken[nextScreenMin]})`);
      }
    }
  });
  return token;
};
function useResponsiveObserver() {
  const [, token] = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)();
  const responsiveMap = getResponsiveMap(validateBreakpoints(token));
  // To avoid repeat create instance, we add `useMemo` here.
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const subscribers = new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach(func => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size) this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size) this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = _ref => {
            let {
              matches
            } = _ref;
            this.dispatch(Object.assign(Object.assign({}, screens), {
              [screen]: matches
            }));
          };
          const mql = window.matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  }, [token]);
}
const matchScreen = (screens, screenSizes) => {
  if (screenSizes && typeof screenSizes === 'object') {
    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint = responsiveArray[i];
      if (screens[breakpoint] && screenSizes[breakpoint] !== undefined) {
        return screenSizes[breakpoint];
      }
    }
  }
};

/***/ }),

/***/ 92873:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/* harmony import */ var _hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92873);
"use client";




// Do not export params
function useBreakpoint() {
  return (0,_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
}

/* harmony default export */ __webpack_exports__.ZP = ({
  useBreakpoint
});

/***/ })

}]);