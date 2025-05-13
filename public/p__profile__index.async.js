"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7266],{

/***/ 73165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ profile; }
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
;// CONCATENATED MODULE: ./src/pages/profile/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(61408);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(83250);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 3 modules
var list = __webpack_require__(17675);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js + 1 modules
var useInfiniteQuery = __webpack_require__(61374);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(37373);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 13 modules
var Buzz = __webpack_require__(81143);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-infinite-scroll-component@6.1.0_react@18.3.1/node_modules/react-infinite-scroll-component/dist/index.es.js
var index_es = __webpack_require__(92677);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(19391);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/index.js + 4 modules
var es_alert = __webpack_require__(81751);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./src/Components/Follow/index.tsx + 1 modules
var Follow = __webpack_require__(4447);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/EditOutlined.js + 1 modules
var EditOutlined = __webpack_require__(23299);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./src/Components/ProfileCard/index.less
var ProfileCard = __webpack_require__(94328);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/ProfileCard/index.tsx













/* harmony default export */ var Components_ProfileCard = (function (_ref) {
  var _profileUserData$data, _profileUserData$data2, _profileUserData$data3, _profileUserData$data6, _profileUserData$data7, _profileUserData$data8, _profileUserData$data11, _profileUserData$data12, _profileUserData$data13, _profileUserData$data14, _profileUserData$data15, _profileUserData$data16, _profileUserData$data17, _profileUserData$data18;
  var address = _ref.address;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf;
  var profileUserData = (0,useQuery/* useQuery */.a)({
    queryKey: ['userInfo', address],
    queryFn: function queryFn() {
      return (0,api/* getUserInfo */.bG)({
        address: address
      });
    }
  });
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['following', profileUserData === null || profileUserData === void 0 || (_profileUserData$data = profileUserData.data) === null || _profileUserData$data === void 0 ? void 0 : _profileUserData$data.metaid],
      enabled: !(0,isEmpty/* default */.Z)((_profileUserData$data2 = profileUserData === null || profileUserData === void 0 || (_profileUserData$data3 = profileUserData.data) === null || _profileUserData$data3 === void 0 ? void 0 : _profileUserData$data3.metaid) !== null && _profileUserData$data2 !== void 0 ? _profileUserData$data2 : ''),
      queryFn: function queryFn() {
        var _profileUserData$data4, _profileUserData$data5;
        return (0,api/* fetchFollowingList */.vZ)({
          metaid: (_profileUserData$data4 = profileUserData === null || profileUserData === void 0 || (_profileUserData$data5 = profileUserData.data) === null || _profileUserData$data5 === void 0 ? void 0 : _profileUserData$data5.metaid) !== null && _profileUserData$data4 !== void 0 ? _profileUserData$data4 : '',
          params: {
            cursor: '0',
            size: '100',
            followDetail: false
          }
        });
      }
    }),
    followingListData = _useQuery.data;
  var _useQuery2 = (0,useQuery/* useQuery */.a)({
      queryKey: ['follower', profileUserData === null || profileUserData === void 0 || (_profileUserData$data6 = profileUserData.data) === null || _profileUserData$data6 === void 0 ? void 0 : _profileUserData$data6.metaid],
      enabled: !(0,isEmpty/* default */.Z)((_profileUserData$data7 = profileUserData === null || profileUserData === void 0 || (_profileUserData$data8 = profileUserData.data) === null || _profileUserData$data8 === void 0 ? void 0 : _profileUserData$data8.metaid) !== null && _profileUserData$data7 !== void 0 ? _profileUserData$data7 : ''),
      queryFn: function queryFn() {
        var _profileUserData$data9, _profileUserData$data10;
        return (0,api/* fetchFollowerList */.CQ)({
          metaid: (_profileUserData$data9 = profileUserData === null || profileUserData === void 0 || (_profileUserData$data10 = profileUserData.data) === null || _profileUserData$data10 === void 0 ? void 0 : _profileUserData$data10.metaid) !== null && _profileUserData$data9 !== void 0 ? _profileUserData$data9 : '',
          params: {
            cursor: '0',
            size: '100',
            followDetail: false
          }
        });
      }
    }),
    followerListData = _useQuery2.data;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
    style: {
      padding: 0
    },
    styles: {
      body: {
        padding: 0
      }
    },
    bordered: false,
    cover: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        height: 0,
        position: 'relative',
        width: '100%',
        background: showConf === null || showConf === void 0 ? void 0 : showConf.gradientColor,
        borderRadius: 10,
        paddingBottom: '33.333%'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '10px 10px 0 0',
          overflow: 'hidden',
          width: '100%',
          height: '100%'
        },
        children: (profileUserData === null || profileUserData === void 0 || (_profileUserData$data11 = profileUserData.data) === null || _profileUserData$data11 === void 0 ? void 0 : _profileUserData$data11.background) && /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: "".concat(config/* BASE_MAN_URL */.yC) + (profileUserData === null || profileUserData === void 0 || (_profileUserData$data12 = profileUserData.data) === null || _profileUserData$data12 === void 0 ? void 0 : _profileUserData$data12.background),
          alt: "example",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }
        })
      })
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        padding: 20
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "avatar",
        style: {
          marginTop: -60
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
          src: profileUserData === null || profileUserData === void 0 || (_profileUserData$data13 = profileUserData.data) === null || _profileUserData$data13 === void 0 ? void 0 : _profileUserData$data13.avatar,
          size: 80
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            marginTop: 10
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
            children: profileUserData === null || profileUserData === void 0 || (_profileUserData$data14 = profileUserData.data) === null || _profileUserData$data14 === void 0 ? void 0 : _profileUserData$data14.name
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
            children: ["MetaID: ", /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              copyable: {
                text: profileUserData === null || profileUserData === void 0 || (_profileUserData$data15 = profileUserData.data) === null || _profileUserData$data15 === void 0 ? void 0 : _profileUserData$data15.metaid
              },
              children: profileUserData === null || profileUserData === void 0 || (_profileUserData$data16 = profileUserData.data) === null || _profileUserData$data16 === void 0 ? void 0 : _profileUserData$data16.metaid.slice(0, 8)
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
            children: ["Address: ", /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              copyable: {
                text: address
              },
              children: address.slice(0, 8)
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Follow/* FollowButtonComponent */.I, {
          metaid: (profileUserData === null || profileUserData === void 0 || (_profileUserData$data17 = profileUserData.data) === null || _profileUserData$data17 === void 0 ? void 0 : _profileUserData$data17.metaid) || ''
        }), address === user.address && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {}),
          variant: "filled",
          color: "default",
          shape: "circle",
          onClick: function onClick() {
            _umi_production_exports.history.push('/setting');
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: (followerListData === null || followerListData === void 0 ? void 0 : followerListData.total) || 0
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Followers"
            }), " "]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
          type: "vertical"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: (followingListData === null || followingListData === void 0 ? void 0 : followingListData.total) || 0
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Following"
            })
          })]
        })]
      })]
    }), (profileUserData === null || profileUserData === void 0 || (_profileUserData$data18 = profileUserData.data) === null || _profileUserData$data18 === void 0 ? void 0 : _profileUserData$data18.blocked) && /*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
      message: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "This user has been blocked by the administrator."
      }),
      type: "warning",
      banner: true
    })]
  });
});
;// CONCATENATED MODULE: ./src/pages/profile/index.tsx














var useBreakpoint = grid/* default */.ZP.useBreakpoint;
var Home = function Home() {
  var _profileUserData$data, _profileUserData$data2;
  var _useBreakpoint = useBreakpoint(),
    md = _useBreakpoint.md;
  var match = (0,_umi_production_exports.useMatch)('/profile/:address');
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user;
  var address = (0,react.useMemo)(function () {
    if (!match || !match.params.address) {
      return user === null || user === void 0 ? void 0 : user.address;
    } else {
      return match.params.address;
    }
  }, [match, user]);
  var isMy = (0,react.useMemo)(function () {
    return (user === null || user === void 0 ? void 0 : user.address) === address;
  }, [address, user]);
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)(1),
    _useState4 = slicedToArray_default()(_useState3, 2),
    page = _useState4[0],
    setPage = _useState4[1];
  var _useState5 = (0,react.useState)(10),
    _useState6 = slicedToArray_default()(_useState5, 2),
    pageSize = _useState6[0],
    setPageSize = _useState6[1];
  var _useState7 = (0,react.useState)(''),
    _useState8 = slicedToArray_default()(_useState7, 2),
    search = _useState8[0],
    setSearch = _useState8[1];
  var _useState9 = (0,react.useState)(null),
    _useState10 = slicedToArray_default()(_useState9, 2),
    total = _useState10[0],
    setTotal = _useState10[1];
  var containerRef = (0,react.useRef)();
  var contentRef = (0,react.useRef)();
  var profileUserData = (0,useQuery/* useQuery */.a)({
    queryKey: ['userInfo', address],
    queryFn: function queryFn() {
      return (0,api/* getUserInfo */.bG)({
        address: address
      });
    }
  });
  var _useInfiniteQuery = (0,useInfiniteQuery/* useInfiniteQuery */.N)({
      queryKey: ['profilebuzzesnew', (_profileUserData$data = profileUserData.data) === null || _profileUserData$data === void 0 ? void 0 : _profileUserData$data.metaid],
      enabled: Boolean((_profileUserData$data2 = profileUserData.data) === null || _profileUserData$data2 === void 0 ? void 0 : _profileUserData$data2.metaid),
      queryFn: function queryFn(_ref) {
        var _profileUserData$data3;
        var pageParam = _ref.pageParam;
        return (0,api/* fetchAllBuzzs */.B0)({
          size: 10,
          lastId: pageParam,
          metaid: (_profileUserData$data3 = profileUserData.data) === null || _profileUserData$data3 === void 0 ? void 0 : _profileUserData$data3.metaid
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
    return data ? data === null || data === void 0 ? void 0 : data.pages.reduce(function (acc, item) {
      var _item$data$list;
      return [].concat(toConsumableArray_default()(acc || []), toConsumableArray_default()(((_item$data$list = item.data.list) !== null && _item$data$list !== void 0 ? _item$data$list : []).filter(function (buzz) {
        return !buzz.blocked || buzz.blocked === true && buzz.createMetaId === (user === null || user === void 0 ? void 0 : user.metaid);
      }) || []));
    }, []) : [];
  }, [data]);
  (0,react.useEffect)(function () {
    if (!containerRef.current || !contentRef.current || isLoading || !hasNextPage) return;
    var containerHeight = containerRef.current.clientHeight;
    var contentHeight = contentRef.current.scrollHeight;
    // 如果内容高度不足且还有数据，继续加载
    if (contentHeight <= containerHeight) {
      fetchNextPage();
    }
  }, [data, hasNextPage, isLoading]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "profilePage",
    id: "scrollableDiv3",
    ref: containerRef,
    style: {
      height: "100%",
      overflow: 'auto'
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        paddingBottom: 12
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Components_ProfileCard, {
        address: address
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_es/* default */.Z, {
      dataLength: tweets.length,
      next: fetchNextPage,
      hasMore: hasNextPage,
      loader: /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
        avatar: true,
        paragraph: {
          rows: 2
        },
        active: true
      }),
      endMessage: /*#__PURE__*/(0,jsx_runtime.jsxs)(divider/* default */.Z, {
        plain: true,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "It is all, nothing more \uD83E\uDD10"
        }), " "]
      }),
      scrollableTarget: "scrollableDiv3",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
        ref: contentRef,
        dataSource: tweets,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z.Item, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
              buzzItem: item,
              refetch: refetch
            })
          }, item.id);
        }
      })
    })]
  });
};
/* harmony default export */ var profile = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Home, {});
});

/***/ }),

/***/ 94328:
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ })

}]);