"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1237],{

/***/ 16277:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TweetCard: function() { return /* binding */ TweetCard; }
/* harmony export */ });
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15558);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Buzz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3517);
/* harmony import */ var _Components_Buzz_BlockedBuzz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15831);
/* harmony import */ var _Components_Comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79684);
/* harmony import */ var _Components_CommentPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9126);
/* harmony import */ var _Components_Trans__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57777);
/* harmony import */ var _Components_UserAvatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29333);
/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9807);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(61606);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82296);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31218);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81751);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33713);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48008);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(46116);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(42879);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93603);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52676);



















var TweetCard = function TweetCard(_ref) {
  var quotePinId = _ref.quotePinId,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {
      return history.back();
    } : _ref$onClose;
  var _useIntl = (0,umi__WEBPACK_IMPORTED_MODULE_11__.useIntl)(),
    formatMessage = _useIntl.formatMessage;
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_11__.useModel)('user'),
    user = _useModel.user,
    checkUserSetting = _useModel.checkUserSetting,
    isLogin = _useModel.isLogin;
  var _useModel2 = (0,umi__WEBPACK_IMPORTED_MODULE_11__.useModel)('dashboard'),
    showConf = _useModel2.showConf;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(0),
    _useState2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
    refetchNum = _useState2[0],
    setRefetchNum = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
    _useState4 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
    reLoading = _useState4[0],
    setReLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
    _useState6 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
    showComment = _useState6[0],
    setShowComment = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]),
    _useState8 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
    commentData = _useState8[0],
    setCommentData = _useState8[1];
  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__/* .useQuery */ .a)({
      enabled: !(0,ramda__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(quotePinId),
      queryKey: ['buzzDetail', quotePinId, user.address],
      queryFn: function queryFn() {
        return (0,_request_api__WEBPACK_IMPORTED_MODULE_9__/* .fetchBuzzDetail */ .uq)({
          pinId: quotePinId
        });
      }
    }),
    isQuoteLoading = _useQuery.isLoading,
    buzzDetail = _useQuery.data,
    refetch = _useQuery.refetch;
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    var _buzzDetail$data;
    if (buzzDetail !== null && buzzDetail !== void 0 && (_buzzDetail$data = buzzDetail.data) !== null && _buzzDetail$data !== void 0 && _buzzDetail$data.tweet) {
      setCommentData(buzzDetail.data.comments || []);
    }
  }, [buzzDetail]);
  if (!buzzDetail) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    loading: isQuoteLoading,
    variant: "borderless",
    style: {
      boxShadow: 'none',
      paddingBottom: 100
    },
    title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
      children: (showConf === null || showConf === void 0 ? void 0 : showConf.showSliderMenu) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(antd__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
        type: "text",
        size: "small",
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
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
    children: !buzzDetail.data ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(antd__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      message: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: "Data Retrieval Error"
      }),
      showIcon: true,
      description: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Trans__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: "The data might not be synchronized on this node yet."
      }),
      type: "error"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
      children: buzzDetail.data.blocked && buzzDetail.data.tweet.createMetaId !== user.metaid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Buzz_BlockedBuzz__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Buzz__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          buzzItem: _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()({}, buzzDetail.data.tweet), {}, {
            blocked: buzzDetail.data.blocked
          }),
          showActions: true,
          padding: 0,
          reLoading: reLoading,
          refetch: refetch,
          like: buzzDetail.data.like,
          donate: buzzDetail.data.donates
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(antd__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_UserAvatar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            src: user === null || user === void 0 ? void 0 : user.avatar,
            size: 48
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(antd__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
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
                antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP.error(formatMessage({
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(antd__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
            type: "primary",
            shape: "round",
            onClick: function onClick() {
              if (!isLogin) {
                antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP.error(formatMessage({
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Comment__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          tweetId: quotePinId !== null && quotePinId !== void 0 ? quotePinId : '',
          onClose: function onClose(mockComment) {
            setShowComment(false);
            if (mockComment) {
              console.log(mockComment, 'mockComment');
              setCommentData([].concat(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(commentData), [mockComment]));
            }
          },
          show: showComment
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(antd__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_CommentPanel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          tweetId: quotePinId !== null && quotePinId !== void 0 ? quotePinId : '',
          refetchNum: refetchNum,
          commentData: commentData
        })]
      })
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var match = (0,umi__WEBPACK_IMPORTED_MODULE_11__.useMatch)('/buzz/:id');
  var match2 = (0,umi__WEBPACK_IMPORTED_MODULE_11__.useMatch)('/tweet/:id');
  var quotePinId = (match === null || match === void 0 ? void 0 : match.params.id) || (match2 === null || match2 === void 0 ? void 0 : match2.params.id);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TweetCard, {
    quotePinId: quotePinId
  });
});

/***/ })

}]);