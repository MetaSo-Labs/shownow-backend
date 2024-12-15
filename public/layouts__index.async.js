"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1717],{

/***/ 86805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Lay; }
/* harmony export */ });
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12798);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70567);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73042);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75271);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74902);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32120);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73118);
/* harmony import */ var _showLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94320);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52676);









var useBreakpoint = antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP.useBreakpoint;
var queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__/* .QueryClient */ .S();
var Header = antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Header,
  Content = antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Content,
  Footer = antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Footer,
  Sider = antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Sider;
function Lay() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState2 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
    collapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_2__.useModel)('dashboard'),
    showConf = _useModel.showConf,
    setShowConf = _useModel.setShowConf;
  var _useModel2 = (0,umi__WEBPACK_IMPORTED_MODULE_2__.useModel)('user'),
    user = _useModel2.user,
    chain = _useModel2.chain,
    disConnect = _useModel2.disConnect,
    feeRate = _useModel2.feeRate,
    setFeeRate = _useModel2.setFeeRate,
    connect = _useModel2.connect,
    switchChain = _useModel2.switchChain;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
    _useState4 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
    themeTokens = _useState4[0],
    setThemeTokens = _useState4[1];
  var _useBreakpoint = useBreakpoint(),
    md = _useBreakpoint.md;
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.useToken(),
    colorBgLayout = _theme$useToken.token.colorBgLayout;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (showConf) {
      var tokens = {
        colorPrimary: showConf.brandColor,
        colorLink: showConf.brandColor
      };
      if (showConf.colorBgLayout) {
        tokens.colorBgLayout = showConf.colorBgLayout;
      }
      if (showConf.colorBorderSecondary) {
        tokens.colorBorderSecondary = showConf.colorBorderSecondary;
      }
      var components = {
        "Avatar": {
          "colorTextPlaceholder": showConf.brandColor
        },
        "Button": {
          "defaultBorderColor": "rgba(217,217,217,0)",
          "defaultShadow": "0 2px 0 rgba(0, 0, 0,0)"
        }
      };
      if (showConf.colorButton) {
        components.Button.primaryColor = showConf.colorButton;
      }
      setThemeTokens({
        token: tokens,
        components: components
      });
    }
  }, [showConf]);
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState6 = _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
    showPost = _useState6[0],
    setShowPost = _useState6[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__/* .QueryClientProvider */ .aH, {
    client: queryClient,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
      theme: _Users_liuhaihua_btc_showNow_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({
        algorithm: (showConf === null || showConf === void 0 ? void 0 : showConf.theme) !== 'dark' ? antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.defaultAlgorithm : antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z.darkAlgorithm
      }, themeTokens),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_showLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
    })
  });
}

/***/ }),

/***/ 3332:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gm: function() { return /* binding */ infiniteQueryBehavior; },
/* harmony export */   Qy: function() { return /* binding */ hasNextPage; },
/* harmony export */   ZF: function() { return /* binding */ hasPreviousPage; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97306);
// src/infiniteQueryBehavior.ts

function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      const options = context.options;
      const direction = context.fetchOptions?.meta?.fetchMore?.direction;
      const oldPages = context.state.data?.pages || [];
      const oldPageParams = context.state.data?.pageParams || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = async () => {
        let cancelled = false;
        const addSignalProperty = (object) => {
          Object.defineProperty(object, "signal", {
            enumerable: true,
            get: () => {
              if (context.signal.aborted) {
                cancelled = true;
              } else {
                context.signal.addEventListener("abort", () => {
                  cancelled = true;
                });
              }
              return context.signal;
            }
          });
        };
        const queryFn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .ensureQueryFn */ .cG)(context.options, context.fetchOptions);
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param,
            direction: previous ? "backward" : "forward",
            meta: context.options.meta
          };
          addSignalProperty(queryFnContext);
          const page = await queryFn(
            queryFnContext
          );
          const { maxPages } = context.options;
          const addTo = previous ? _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .addToStart */ .Ht : _utils_js__WEBPACK_IMPORTED_MODULE_0__/* .addToEnd */ .VX;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        };
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages ?? oldPages.length;
          do {
            const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = await fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          return context.options.persister?.(
            fetchFn,
            {
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
  if (!data)
    return false;
  return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
  if (!data || !options.getPreviousPageParam)
    return false;
  return getPreviousPageParam(options, data) != null;
}

//# sourceMappingURL=infiniteQueryBehavior.js.map

/***/ })

}]);