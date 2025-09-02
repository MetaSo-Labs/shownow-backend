"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3116],{

/***/ 59433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ hot; }
});

// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/pages/hot/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(61408);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(83250);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 3 modules
var list = __webpack_require__(17675);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 6 modules
var Buzz = __webpack_require__(53982);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/hot/index.tsx









var useBreakpoint = grid/* default */.ZP.useBreakpoint;
var Home = function Home() {
  var containerRef = (0,react.useRef)();
  var contentRef = (0,react.useRef)();
  // const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage, refetch } =
  //     useInfiniteQuery({
  //         queryKey: ['homebuzzhot',],
  //         queryFn: ({ pageParam }) =>
  //             fetchAllHotBuzzs({
  //                 size: 30,
  //                 lastId: pageParam,
  //             }),
  //         initialPageParam: '',
  //         getNextPageParam: (lastPage, allPages) => {
  //             const { data: { lastId } } = lastPage
  //             if (!lastId) return
  //             return lastId;
  //         },
  //         refetchInterval: 1000 * 60 * 3, // 每3分钟刷新一次
  //     });

  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['homebuzzhot'],
      queryFn: function queryFn() {
        return (0,api/* fetchAllHotBuzzs */.L_)({
          size: 30,
          lastId: ''
        });
      },
      refetchInterval: 1000 * 60 * 5 // 每5分钟刷新一次
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading,
    refetch = _useQuery.refetch;
  var tweets = (0,react.useMemo)(function () {
    var _data$data;
    return data ? (data === null || data === void 0 || (_data$data = data.data) === null || _data$data === void 0 || (_data$data = _data$data.list) === null || _data$data === void 0 ? void 0 : _data$data.filter(function (item) {
      return !item.blocked;
    })) || [] : [];
  }, [data]);

  // 数据更新后检查高度
  // useEffect(() => {
  //     if (!containerRef.current || !contentRef.current || isLoading || !hasNextPage) return;
  //     const containerHeight = containerRef.current.clientHeight;
  //     const contentHeight = contentRef.current.scrollHeight;
  //     // 如果内容高度不足且还有数据，继续加载
  //     if (contentHeight <= containerHeight) {
  //         fetchNextPage();
  //     }
  // }, [data, hasNextPage, isLoading]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    id: "scrollableDivHot",
    ref: containerRef,
    style: {
      height: '100%',
      overflow: 'auto',
      paddingBottom: 60
    },
    children: [isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
        avatar: true,
        paragraph: {
          rows: 2
        },
        active: true
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
      ref: contentRef,
      loading: isLoading,
      dataSource: tweets,
      renderItem: function renderItem(item) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z.Item, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
            buzzItem: item,
            refetch: refetch
          })
        }, item.id);
      }
    }), !isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
      plain: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "It is all, nothing more \uD83E\uDD10"
      })
    })]
  });
};
/* harmony default export */ var hot = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Home, {});
});

/***/ })

}]);