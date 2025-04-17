"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4677],{

/***/ 81348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15558);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Buzz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81143);
/* harmony import */ var _Components_Trans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57777);
/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9807);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72898);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23299);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61374);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61408);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48008);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83250);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33713);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75271);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92677);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71756);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52676);













var useBreakpoint = antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.useBreakpoint;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_7__.useModel)('dashboard'),
    showConf = _useModel.showConf;
  var _useModel2 = (0,umi__WEBPACK_IMPORTED_MODULE_7__.useModel)('user'),
    searchWord = _useModel2.searchWord,
    setSearchWord = _useModel2.setSearchWord;
  var _useBreakpoint = useBreakpoint(),
    md = _useBreakpoint.md;
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  var _useInfiniteQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__/* .useInfiniteQuery */ .N)({
      queryKey: ['search', searchWord],
      enabled: Boolean(searchWord),
      queryFn: function queryFn(_ref) {
        var pageParam = _ref.pageParam;
        return (0,_request_api__WEBPACK_IMPORTED_MODULE_3__/* .searchBuzzs */ .LF)({
          size: 5,
          lastId: pageParam,
          key: searchWord
        });
      },
      initialPageParam: '',
      getNextPageParam: function getNextPageParam(lastPage, allPages) {
        var lastId = lastPage.data.lastId;
        if (!lastId) return;
        return lastId;
      }
    }),
    data = _useInfiniteQuery.data,
    isLoading = _useInfiniteQuery.isLoading,
    fetchNextPage = _useInfiniteQuery.fetchNextPage,
    isFetchingNextPage = _useInfiniteQuery.isFetchingNextPage,
    hasNextPage = _useInfiniteQuery.hasNextPage,
    refetch = _useInfiniteQuery.refetch;
  var tweets = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    return data ? data === null || data === void 0 ? void 0 : data.pages.reduce(function (acc, item) {
      var _item$data$list;
      return [].concat(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(acc || []), _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(((_item$data$list = item.data.list) !== null && _item$data$list !== void 0 ? _item$data$list : []).filter(function (item) {
        return !item.blocked;
      }) || []));
    }, []) : [];
  }, [data]);

  // 数据更新后检查高度
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (!containerRef.current || !contentRef.current || isLoading || !hasNextPage) return;
    var containerHeight = containerRef.current.clientHeight;
    var contentHeight = contentRef.current.scrollHeight;
    // 如果内容高度不足且还有数据，继续加载
    if (contentHeight <= containerHeight) {
      fetchNextPage();
    }
  }, [data, hasNextPage, isLoading]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [!md && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      size: "large",
      prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        style: {
          color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
        }
      }),
      placeholder: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .formatMessage */ .wv)('Search'),
      value: searchWord,
      onChange: function onChange(e) {
        setSearchWord(e.target.value);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      id: "scrollableDivSearch",
      ref: containerRef,
      style: {
        height: '100%',
        overflow: 'auto'
      },
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        avatar: true,
        paragraph: {
          rows: 2
        },
        active: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        dataLength: tweets.length,
        next: fetchNextPage,
        hasMore: hasNextPage,
        loader: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          avatar: true,
          paragraph: {
            rows: 1
          },
          active: true
        }),
        endMessage: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
          plain: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: "It is all, nothing more \uD83E\uDD10"
          })
        }),
        scrollableTarget: "scrollableDivSearch",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
          ref: contentRef,
          dataSource: tweets,
          renderItem: function renderItem(item) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z.Item, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Buzz__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                buzzItem: item,
                refetch: refetch
              })
            }, item.id);
          }
        })
      })]
    })]
  });
});

/***/ })

}]);