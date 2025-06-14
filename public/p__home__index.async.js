"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9512],{

/***/ 25283:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ home; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/pages/home/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(61408);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(83250);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 3 modules
var list = __webpack_require__(17675);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/index.js + 3 modules
var drawer = __webpack_require__(37048);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js + 1 modules
var useInfiniteQuery = __webpack_require__(61374);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(81581);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 13 modules
var Buzz = __webpack_require__(81143);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-infinite-scroll-component@6.1.0_react@18.3.1/node_modules/react-infinite-scroll-component/dist/index.es.js
var index_es = __webpack_require__(92677);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./src/pages/tweet/index.tsx + 1 modules
var tweet = __webpack_require__(26498);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/home/index.tsx














var useBreakpoint = grid/* default */.ZP.useBreakpoint;
var Home = function Home() {
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user,
    mockBuzz = _useModel.mockBuzz;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    currentBuzzId = _useState4[0],
    setCurrentBuzzId = _useState4[1];
  var containerRef = (0,react.useRef)();
  var contentRef = (0,react.useRef)();
  var _useLocation = (0,_umi_production_exports.useLocation)(),
    state = _useLocation.state;
  var targetBuzzId = (0,react.useMemo)(function () {
    return state === null || state === void 0 ? void 0 : state.buzzId;
  }, [state]);
  var _useInfiniteQuery = (0,useInfiniteQuery/* useInfiniteQuery */.N)({
      queryKey: ['homebuzzesnew', user.address],
      queryFn: function queryFn(_ref) {
        var pageParam = _ref.pageParam;
        return (0,api/* fetchAllBuzzs */.B0)({
          size: 5,
          lastId: pageParam
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
  var tweets = (0,react.useMemo)(function () {
    var _list = data ? data === null || data === void 0 ? void 0 : data.pages.reduce(function (acc, item) {
      var _item$data$list;
      return [].concat(toConsumableArray_default()(acc || []), toConsumableArray_default()(((_item$data$list = item.data.list) !== null && _item$data$list !== void 0 ? _item$data$list : []).filter(function (item) {
        return !item.blocked;
      }) || []));
    }, []) : [];
    if (mockBuzz) {
      var isContain = _list === null || _list === void 0 ? void 0 : _list.find(function (item) {
        return item.id === (mockBuzz === null || mockBuzz === void 0 ? void 0 : mockBuzz.id);
      });
      return isContain ? _list : [mockBuzz].concat(toConsumableArray_default()(_list));
    }
    return _list;
  }, [data, mockBuzz]);

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
  (0,react.useEffect)(function () {
    if (containerRef.current && targetBuzzId) {
      containerRef.current.scrollTop = 0;
      refetch();
    }
  }, [targetBuzzId]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    id: "scrollableDiv1",
    ref: containerRef,
    style: {
      height: '100%',
      overflow: 'auto'
    },
    children: [isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
      avatar: true,
      paragraph: {
        rows: 2
      },
      active: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_es/* default */.Z, {
      dataLength: (tweets !== null && tweets !== void 0 ? tweets : []).length,
      next: fetchNextPage,
      hasMore: hasNextPage,
      loader: /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
        avatar: true,
        paragraph: {
          rows: 1
        },
        active: true
      }),
      endMessage: /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
        plain: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "It is all, nothing more \uD83E\uDD10"
        })
      }),
      scrollThreshold: 0.9,
      scrollableTarget: "scrollableDiv1",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
        dataSource: tweets,
        ref: contentRef,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z.Item, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
              buzzItem: item,
              refetch: refetch
            })
          }, item.id);
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
      title: "",
      placement: "right",
      closable: true,
      onClose: function onClose() {
        return setOpen(false);
      },
      open: open,
      getContainer: false,
      width: "100%",
      zIndex: 99,
      styles: {
        header: {
          display: 'none'
        },
        body: {
          padding: 0
        },
        content: {
          borderRadius: 8
        },
        mask: {
          backgroundColor: 'rgba(0,0,0,0)'
        }
      },
      children: currentBuzzId && /*#__PURE__*/(0,jsx_runtime.jsx)(tweet.TweetCard, {
        quotePinId: currentBuzzId,
        onClose: function onClose() {
          setOpen(false);
          history.pushState({}, '', '/home');
        }
      })
    })]
  });
};
/* harmony default export */ var home = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Home, {});
});

/***/ }),

/***/ 26498:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TweetCard: function() { return /* binding */ TweetCard; },
  "default": function() { return /* binding */ tweet; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 13 modules
var Buzz = __webpack_require__(81143);
// EXTERNAL MODULE: ./src/Components/Buzz/BlockedBuzz.tsx
var BlockedBuzz = __webpack_require__(15831);
// EXTERNAL MODULE: ./src/Components/Comment/index.tsx + 3 modules
var Comment = __webpack_require__(79684);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 3 modules
var list = __webpack_require__(17675);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(81581);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/CommentPanel/index.tsx








var CommentItem = function CommentItem(_ref) {
  var _currentUserInfoData$, _currentUserInfoData$2, _currentUserInfoData$3;
  var commentRes = _ref.commentRes;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    btcConnector = _useModel.btcConnector;
  var currentUserInfoData = (0,useQuery/* useQuery */.a)({
    enabled: !(0,isNil/* default */.Z)(commentRes === null || commentRes === void 0 ? void 0 : commentRes.createAddress),
    queryKey: ['userInfo', commentRes === null || commentRes === void 0 ? void 0 : commentRes.createAddress],
    queryFn: function queryFn() {
      return (0,api/* getUserInfo */.bG)({
        address: commentRes === null || commentRes === void 0 ? void 0 : commentRes.createAddress
      });
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(list/* default */.Z.Item, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z.Item.Meta, {
      avatar: /*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
        src: (_currentUserInfoData$ = currentUserInfoData.data) === null || _currentUserInfoData$ === void 0 ? void 0 : _currentUserInfoData$.avatar
      }),
      title: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        href: "",
        children: (_currentUserInfoData$2 = currentUserInfoData.data) === null || _currentUserInfoData$2 === void 0 ? void 0 : _currentUserInfoData$2.name
      }),
      description: (_currentUserInfoData$3 = currentUserInfoData.data) === null || _currentUserInfoData$3 === void 0 ? void 0 : _currentUserInfoData$3.metaid.slice(0, 8)
    }), commentRes === null || commentRes === void 0 ? void 0 : commentRes.content]
  });
};
/* harmony default export */ var CommentPanel = (function (_ref2) {
  var tweetId = _ref2.tweetId,
    refetchNum = _ref2.refetchNum,
    commentData = _ref2.commentData;
  // const commentData = useQuery({
  //     enabled: !isNil(tweetId),
  //     queryKey: ['comment-detail', tweetId],
  //     queryFn: () => fetchCurrentBuzzComments({ pinId: tweetId }),
  // });
  // useEffect(() => {
  //     if (refetchNum) {
  //         commentData.refetch()
  //     }
  // }, [refetchNum])
  var commentsNum = (commentData !== null && commentData !== void 0 ? commentData : []).length;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
    itemLayout: "horizontal",
    dataSource: commentData !== null && commentData !== void 0 ? commentData : [],
    renderItem: function renderItem(item, index) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(CommentItem, {
        commentRes: item
      });
    }
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__(61606);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/pages/tweet/index.tsx

















var TweetCard = function TweetCard(_ref) {
  var quotePinId = _ref.quotePinId,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {
      return history.back();
    } : _ref$onClose;
  var _useIntl = (0,_umi_production_exports.useIntl)(),
    formatMessage = _useIntl.formatMessage;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    checkUserSetting = _useModel.checkUserSetting,
    isLogin = _useModel.isLogin;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf;
  var _useState = (0,react.useState)(0),
    _useState2 = slicedToArray_default()(_useState, 2),
    refetchNum = _useState2[0],
    setRefetchNum = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    reLoading = _useState4[0],
    setReLoading = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    showComment = _useState6[0],
    setShowComment = _useState6[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(quotePinId),
      queryKey: ['buzzDetail', quotePinId, user.address],
      queryFn: function queryFn() {
        return (0,api/* fetchBuzzDetail */.uq)({
          pinId: quotePinId
        });
      }
    }),
    isQuoteLoading = _useQuery.isLoading,
    buzzDetail = _useQuery.data,
    refetch = _useQuery.refetch;
  if (!buzzDetail) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
    loading: isQuoteLoading,
    bordered: false,
    style: {
      boxShadow: 'none'
    },
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: (showConf === null || showConf === void 0 ? void 0 : showConf.showSliderMenu) && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "text",
        size: "small",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LeftOutlined/* default */.Z, {}),
        onClick: onClose
      })
    }),
    styles: {
      header: {
        borderBottom: 'none',
        minHeight: 30,
        padding: '12px 20px'
      },
      body: {}
    },
    children: buzzDetail.data.blocked && buzzDetail.data.tweet.createMetaId !== user.metaid ? /*#__PURE__*/(0,jsx_runtime.jsx)(BlockedBuzz/* default */.Z, {}) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
        buzzItem: objectSpread2_default()(objectSpread2_default()({}, buzzDetail.data.tweet), {}, {
          blocked: buzzDetail.data.blocked
        }),
        showActions: true,
        padding: 0,
        reLoading: reLoading,
        refetch: refetch,
        like: buzzDetail.data.like,
        donate: buzzDetail.data.donates
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
          src: user === null || user === void 0 ? void 0 : user.avater,
          size: 48
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          value: '',
          placeholder: formatMessage({
            id: "What's happening?"
          }),
          variant: "borderless",
          style: {
            flexGrow: 1
          },
          onClick: function onClick() {
            if (!isLogin) {
              message/* default */.ZP.error(formatMessage({
                id: 'Please connect your wallet first'
              }));
              return;
            }
            var isPass = checkUserSetting();
            if (!isPass) {
              return;
            }
            setShowComment(true);
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          shape: "round",
          onClick: function onClick() {
            if (!isLogin) {
              message/* default */.ZP.error(formatMessage({
                id: 'Please connect your wallet first'
              }));
              return;
            }
            var isPass = checkUserSetting();
            if (!isPass) {
              return;
            }
            setShowComment(true);
          },
          children: formatMessage({
            id: "Comment"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Comment/* default */.Z, {
        tweetId: quotePinId !== null && quotePinId !== void 0 ? quotePinId : '',
        refetch: refetch,
        onClose: function onClose() {
          setShowComment(false);
          setRefetchNum(refetchNum + 1);
          setReLoading(!reLoading);
        },
        show: showComment
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(CommentPanel, {
        tweetId: quotePinId !== null && quotePinId !== void 0 ? quotePinId : '',
        refetchNum: refetchNum,
        commentData: buzzDetail === null || buzzDetail === void 0 ? void 0 : buzzDetail.data.comments
      })]
    })
  });
};
/* harmony default export */ var tweet = (function () {
  var match = (0,_umi_production_exports.useMatch)('/buzz/:id');
  var match2 = (0,_umi_production_exports.useMatch)('/tweet/:id');
  var quotePinId = (match === null || match === void 0 ? void 0 : match.params.id) || (match2 === null || match2 === void 0 ? void 0 : match2.params.id);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TweetCard, {
    quotePinId: quotePinId
  });
});

/***/ })

}]);