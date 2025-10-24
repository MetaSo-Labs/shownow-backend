"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6182],{

/***/ 54178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);



var InfiniteScrollV2 = function InfiniteScrollV2(_ref) {
  var id = _ref.id,
    onMore = _ref.onMore;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);

  // 使用 useCallback 缓存 onMore 函数，避免不必要的重新创建 observer
  var memoizedOnMore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(onMore, [onMore]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var observer = new IntersectionObserver(function (_ref2) {
      var _ref3 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 1),
        entry = _ref3[0];
      // 只有当元素进入视口且当前没有在加载时才触发
      if (entry.isIntersecting && !isLoadingRef.current) {
        isLoadingRef.current = true;
        memoizedOnMore();

        // 设置一个短暂的延迟来防止重复触发
        setTimeout(function () {
          isLoadingRef.current = false;
        }, 500);
      }
    }, {
      threshold: 0.1,
      // 增加阈值，确保元素真正进入视口
      rootMargin: '100px' // 提前100px开始加载
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return function () {
      observer.disconnect();
    };
  }, [memoizedOnMore]); // 只依赖 memoizedOnMore

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ref: ref,
    id: id,
    style: {
      height: 20
    }
  });
};
/* harmony default export */ __webpack_exports__.Z = (InfiniteScrollV2);

/***/ }),

/***/ 64611:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ recommend; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/pages/recommend/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(61408);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 3 modules
var list = __webpack_require__(17675);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(83250);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js + 1 modules
var useInfiniteQuery = __webpack_require__(61374);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(17078);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 14 modules
var Buzz = __webpack_require__(76560);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./src/Components/InfiniteScrollV2/index.tsx
var InfiniteScrollV2 = __webpack_require__(54178);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/recommend/index.tsx















var useBreakpoint = grid/* default */.ZP.useBreakpoint;
var Home = function Home() {
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user;
  var tweetSet = (0,react.useRef)(new Set());
  var containerRef = (0,react.useRef)();
  var contentRef = (0,react.useRef)();
  var _useInfiniteQuery = (0,useInfiniteQuery/* useInfiniteQuery */.N)({
      queryKey: ['homebuzzrecommend', user.address],
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(_ref) {
          var _recommendData$data, _recommendData$data2;
          var _ref$pageParam, lastId1, recommendData, list;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _ref$pageParam = slicedToArray_default()(_ref.pageParam, 1), lastId1 = _ref$pageParam[0];
                console.log('Fetching page with lastId:', lastId1);
                _context.next = 4;
                return (0,api/* fetchAllRecommendBuzzs */.yY)({
                  size: 10,
                  lastId: lastId1,
                  userAddress: user.address || localStorage.getItem('metaso_uuid') || ''
                });
              case 4:
                recommendData = _context.sent;
                if (recommendData !== null && recommendData !== void 0 && recommendData.data) {
                  _context.next = 7;
                  break;
                }
                return _context.abrupt("return", {
                  list: [],
                  lastIds: ['']
                });
              case 7:
                list = toConsumableArray_default()((recommendData === null || recommendData === void 0 || (_recommendData$data = recommendData.data) === null || _recommendData$data === void 0 ? void 0 : _recommendData$data.list) || []);
                return _context.abrupt("return", {
                  list: list,
                  lastIds: [recommendData === null || recommendData === void 0 || (_recommendData$data2 = recommendData.data) === null || _recommendData$data2 === void 0 ? void 0 : _recommendData$data2.lastId]
                });
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function queryFn(_x) {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }(),
      initialPageParam: [''],
      getNextPageParam: function getNextPageParam(lastPage, allPages) {
        var lastIds = lastPage.lastIds;
        if (!lastIds[0]) return;
        return lastIds;
      }
    }),
    data = _useInfiniteQuery.data,
    isLoading = _useInfiniteQuery.isLoading,
    fetchNextPage = _useInfiniteQuery.fetchNextPage,
    isFetchingNextPage = _useInfiniteQuery.isFetchingNextPage,
    hasNextPage = _useInfiniteQuery.hasNextPage,
    refetch = _useInfiniteQuery.refetch,
    isFetching = _useInfiniteQuery.isFetching;
  var tweets = (0,react.useMemo)(function () {
    return data ? data === null || data === void 0 ? void 0 : data.pages.reduce(function (acc, item) {
      var _item$list;
      return [].concat(toConsumableArray_default()(acc || []), toConsumableArray_default()(((_item$list = item.list) !== null && _item$list !== void 0 ? _item$list : []).filter(function (item) {
        return !item.blocked;
      }) || []));
    }, []) : [];
  }, [data]);
  var _useState = (0,react.useState)([]),
    _useState2 = slicedToArray_default()(_useState, 2),
    readItems = _useState2[0],
    setReadItems = _useState2[1];
  var sentIds = (0,react.useRef)(new Set()); // 用 Set 来存储已发送的 id
  var observerRef = (0,react.useRef)(null);
  var sendReadItemsToBackend = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(ids) {
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (user !== null && user !== void 0 && user.address) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            (0,api/* reportBuzzView */.X2)({
              pinIdList: ids,
              address: user.address
            });
            ids.forEach(function (id) {
              return sentIds.current.add(id);
            });
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error('Error sending read items to backend', _context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function sendReadItemsToBackend(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  // 强制上报所有未上报的记录
  var forceReportAllPendingItems = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
      var _map;
      var allItemIds;
      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            // 直接从所有已加载的数据中获取ID，不再从readItems中过滤
            allItemIds = (tweets === null || tweets === void 0 || (_map = tweets.map(function (item) {
              return item.id;
            })) === null || _map === void 0 ? void 0 : _map.filter(function (id) {
              return !sentIds.current.has(id);
            })) || [];
            if (!(allItemIds.length > 0)) {
              _context3.next = 5;
              break;
            }
            console.log('Force reporting all pending items before fetchNextPage:', allItemIds);
            _context3.next = 5;
            return sendReadItemsToBackend(allItemIds);
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function forceReportAllPendingItems() {
      return _ref3.apply(this, arguments);
    };
  }();

  // 数据更新后检查高度
  (0,react.useEffect)(function () {
    if (!containerRef.current || !contentRef.current || isLoading || !hasNextPage) return;
    var containerHeight = containerRef.current.clientHeight;
    var contentHeight = contentRef.current.scrollHeight;
    // 如果内容高度不足且还有数据，继续加载
    if (contentHeight <= containerHeight) {
      // 在获取下一页之前，先上报所有未上报的记录
      forceReportAllPendingItems().then(function () {
        fetchNextPage();
      });
    }
  }, [tweets, hasNextPage, isLoading, forceReportAllPendingItems, fetchNextPage]);
  var handleIntersection = function handleIntersection(entries) {
    var newReadItems = [];
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var itemId = entry.target.getAttribute('data-id') || '0';
        if (!readItems.includes(itemId) && !sentIds.current.has(itemId)) {
          newReadItems.push(itemId);
        }
      }
    });
    if (newReadItems.length > 0) {
      setReadItems(function (prev) {
        return [].concat(toConsumableArray_default()(prev), newReadItems);
      });
    }
  };
  (0,react.useEffect)(function () {
    var itemsToReport = readItems.filter(function (itemId) {
      return !sentIds.current.has(itemId);
    });
    if (itemsToReport.length > 0) {
      sendReadItemsToBackend(itemsToReport);
    }
  }, [readItems, tweets]);
  (0,react.useEffect)(function () {
    if (!(user !== null && user !== void 0 && user.address)) return;
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // 50% visibility to trigger intersection
    });
    var targets = document.querySelectorAll('.recomdend-list-item');
    targets.forEach(function (target) {
      var _observerRef$current;
      (_observerRef$current = observerRef.current) === null || _observerRef$current === void 0 || _observerRef$current.observe(target);
    });
    return function () {
      var _observerRef$current2;
      (_observerRef$current2 = observerRef.current) === null || _observerRef$current2 === void 0 || _observerRef$current2.disconnect();
    };
  }, [tweets, user.address]);

  // 使用 useCallback 优化 onMore 函数，避免每次渲染都重新创建
  var handleLoadMore = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
    return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(hasNextPage && !isFetchingNextPage && !isLoading && !isFetching)) {
            _context4.next = 5;
            break;
          }
          console.log('Fetching next page...');
          // 在获取下一页之前，先上报所有未上报的记录
          _context4.next = 4;
          return forceReportAllPendingItems();
        case 4:
          fetchNextPage();
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })), [hasNextPage, isFetchingNextPage, isLoading, isFetching, fetchNextPage, forceReportAllPendingItems]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    // id="scrollableDivrecommend"
    ref: containerRef,
    style: {
      height: '100%',
      overflow: 'auto',
      paddingBottom: 60
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
      loading: isLoading,
      dataSource: tweets,
      ref: contentRef,
      renderItem: function renderItem(item) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z.Item, {
          "data-id": item.id,
          className: "recomdend-list-item",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
            buzzItem: item,
            refetch: refetch
          })
        }, item.id);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(InfiniteScrollV2/* default */.Z, {
      id: "mason_grid_recommend",
      onMore: handleLoadMore
    }), (isLoading || isFetchingNextPage || isFetching) && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
        avatar: true,
        paragraph: {
          rows: 2
        },
        active: true
      })
    }), !isFetching && !hasNextPage && /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
      plain: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "It is all, nothing more \uD83E\uDD10"
      })
    })]
  });
};
/* harmony default export */ var recommend = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Home, {});
});

/***/ }),

/***/ 3940:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gm: function() { return /* binding */ infiniteQueryBehavior; },
/* harmony export */   Qy: function() { return /* binding */ hasNextPage; },
/* harmony export */   ZF: function() { return /* binding */ hasPreviousPage; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
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
            client: context.client,
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
              client: context.client,
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
  if (!data) return false;
  return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
  if (!data || !options.getPreviousPageParam) return false;
  return getPreviousPageParam(options, data) != null;
}

//# sourceMappingURL=infiniteQueryBehavior.js.map

/***/ }),

/***/ 61374:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: function() { return /* binding */ useInfiniteQuery; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.74.3/node_modules/@tanstack/query-core/build/modern/queryObserver.js
var queryObserver = __webpack_require__(73585);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.74.3/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
var infiniteQueryBehavior = __webpack_require__(3940);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.74.3/node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js
// src/infiniteQueryObserver.ts


var InfiniteQueryObserver = class extends queryObserver/* QueryObserver */.z {
  constructor(client, options) {
    super(client, options);
  }
  bindMethods() {
    super.bindMethods();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(options) {
    super.setOptions({
      ...options,
      behavior: (0,infiniteQueryBehavior/* infiniteQueryBehavior */.Gm)()
    });
  }
  getOptimisticResult(options) {
    options.behavior = (0,infiniteQueryBehavior/* infiniteQueryBehavior */.Gm)();
    return super.getOptimisticResult(options);
  }
  fetchNextPage(options) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: { direction: "forward" }
      }
    });
  }
  fetchPreviousPage(options) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: { direction: "backward" }
      }
    });
  }
  createResult(query, options) {
    const { state } = query;
    const parentResult = super.createResult(query, options);
    const { isFetching, isRefetching, isError, isRefetchError } = parentResult;
    const fetchDirection = state.fetchMeta?.fetchMore?.direction;
    const isFetchNextPageError = isError && fetchDirection === "forward";
    const isFetchingNextPage = isFetching && fetchDirection === "forward";
    const isFetchPreviousPageError = isError && fetchDirection === "backward";
    const isFetchingPreviousPage = isFetching && fetchDirection === "backward";
    const result = {
      ...parentResult,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: (0,infiniteQueryBehavior/* hasNextPage */.Qy)(options, state.data),
      hasPreviousPage: (0,infiniteQueryBehavior/* hasPreviousPage */.ZF)(options, state.data),
      isFetchNextPageError,
      isFetchingNextPage,
      isFetchPreviousPageError,
      isFetchingPreviousPage,
      isRefetchError: isRefetchError && !isFetchNextPageError && !isFetchPreviousPageError,
      isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
    };
    return result;
  }
};

//# sourceMappingURL=infiniteQueryObserver.js.map
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js + 5 modules
var useBaseQuery = __webpack_require__(30736);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js
"use client";

// src/useInfiniteQuery.ts


function useInfiniteQuery(options, queryClient) {
  return (0,useBaseQuery/* useBaseQuery */.r)(
    options,
    InfiniteQueryObserver,
    queryClient
  );
}

//# sourceMappingURL=useInfiniteQuery.js.map

/***/ })

}]);