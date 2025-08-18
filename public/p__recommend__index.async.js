"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6182],{

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
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(83250);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 3 modules
var list = __webpack_require__(17675);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js + 1 modules
var useInfiniteQuery = __webpack_require__(61374);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(93603);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 3 modules
var Buzz = __webpack_require__(3517);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-infinite-scroll-component@6.1.0_react@18.3.1/node_modules/react-infinite-scroll-component/dist/index.es.js
var index_es = __webpack_require__(92677);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
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
                _context.next = 3;
                return (0,api/* fetchAllRecommendBuzzs */.yY)({
                  size: 10,
                  lastId: lastId1,
                  userAddress: user.address || localStorage.getItem('metaso_uuid') || ''
                });
              case 3:
                recommendData = _context.sent;
                if (recommendData !== null && recommendData !== void 0 && recommendData.data) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return", {
                  list: [],
                  lastIds: ['']
                });
              case 6:
                list = toConsumableArray_default()((recommendData === null || recommendData === void 0 || (_recommendData$data = recommendData.data) === null || _recommendData$data === void 0 ? void 0 : _recommendData$data.list) || []);
                return _context.abrupt("return", {
                  list: list,
                  lastIds: [recommendData === null || recommendData === void 0 || (_recommendData$data2 = recommendData.data) === null || _recommendData$data2 === void 0 ? void 0 : _recommendData$data2.lastId]
                });
              case 8:
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
    refetch = _useInfiniteQuery.refetch;
  var tweets = (0,react.useMemo)(function () {
    return data ? data === null || data === void 0 ? void 0 : data.pages.reduce(function (acc, item) {
      var _item$list;
      return [].concat(toConsumableArray_default()(acc || []), toConsumableArray_default()(((_item$list = item.list) !== null && _item$list !== void 0 ? _item$list : []).filter(function (item) {
        return !item.blocked;
      }) || []));
    }, []) : [];
  }, [data]);

  // 数据更新后检查高度
  (0,react.useEffect)(function () {
    if (!containerRef.current || !contentRef.current || isLoading || !hasNextPage) return;
    var containerHeight = containerRef.current.clientHeight;
    var contentHeight = contentRef.current.scrollHeight;
    // 如果内容高度不足且还有数据，继续加载
    if (contentHeight <= containerHeight) {
      fetchNextPage();
    }
  }, [data, hasNextPage, isLoading]);
  var _useState = (0,react.useState)([]),
    _useState2 = slicedToArray_default()(_useState, 2),
    readItems = _useState2[0],
    setReadItems = _useState2[1];
  var sentIds = (0,react.useRef)(new Set()); // 用 Set 来存储已发送的 id
  var observerRef = (0,react.useRef)(null);
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    id: "scrollableDivrecommend",
    ref: containerRef,
    style: {
      height: '100%',
      overflow: 'auto',
      paddingBottom: 60
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_es/* default */.Z, {
      dataLength: tweets.length,
      next: fetchNextPage,
      hasMore: hasNextPage,
      loader: /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
          avatar: true,
          paragraph: {
            rows: 1
          },
          active: true
        })
      }),
      endMessage: /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
        plain: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "It is all, nothing more \uD83E\uDD10"
        })
      }),
      scrollableTarget: "scrollableDivrecommend",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
        ref: contentRef,
        loading: isLoading,
        dataSource: tweets,
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
      })
    })
  });
};
/* harmony default export */ var recommend = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Home, {});
});

/***/ })

}]);